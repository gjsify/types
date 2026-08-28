import { spawn } from "node:child_process";
import { readdir, readFile, stat } from "node:fs/promises";
import { basename, dirname, join } from "node:path";

// Configuration and types
interface Config {
	token?: string;
	registry: string;
	timeoutSec: number;
	dryRun: boolean;
	continueOnError: boolean;
	/**
	 * How this run authenticates to npm. BOTH are supported on purpose.
	 *
	 * `token` is the simple path and it stays: npm Trusted Publishing cannot
	 * create a package that does not exist yet, so the first publish of a NEW
	 * `@girs/*` namespace — and ts-for-gir grows new ones — needs either a token
	 * or a prior `gjsify onboard` sweep. A release train that can only do OIDC
	 * would stall on the first new library GNOME ships.
	 *
	 * `oidc` is the one to prefer once the packages are onboarded: nothing to
	 * expire, nothing to leak, and provenance without a secret.
	 */
	authMode: "token" | "oidc";
}

interface Package {
	name: string;
	version: string;
	rootFolder: string;
}

interface PackageStatus {
	exists: boolean;
	versions: string[];
	latestVersion?: string;
}

type ProcessResult = "already-published" | "created" | "updated" | "dry-run-create" | "dry-run-update" | "error";

interface BatchResult {
	result: ProcessResult;
	pkg: Package;
	error?: string;
}

// Constants
const DEFAULT_REGISTRY = "https://registry.npmjs.org";
const DEFAULT_TIMEOUT_SEC = 300;
// Read pacing and retry config from env with safe parsing
function getEnvInt(name: string, fallback: number): number {
	const raw = process.env[name];
	if (!raw) return fallback;
	const num = Number.parseInt(raw, 10);
	return Number.isNaN(num) ? fallback : num;
}

const BATCH_SIZE = Math.max(1, getEnvInt("NPM_BATCH_SIZE", 5));
const BATCH_DELAY_MS = Math.max(0, getEnvInt("NPM_BATCH_DELAY_MS", 3000));
const PUBLISH_DELAY_MS = Math.max(0, getEnvInt("NPM_PUBLISH_DELAY_MS", 500));
const STATUS_CONCURRENCY = Math.max(1, getEnvInt("NPM_STATUS_CONCURRENCY", 20));

const MAX_RETRIES_PUBLISH = Math.max(0, getEnvInt("NPM_MAX_RETRIES", 8));
const MAX_RETRIES_STATUS = Math.max(0, getEnvInt("NPM_STATUS_MAX_RETRIES", 5));
const RETRY_BASE_MS = Math.max(100, getEnvInt("NPM_RETRY_BASE_MS", 2000));
const RETRY_MAX_MS = Math.max(RETRY_BASE_MS, getEnvInt("NPM_RETRY_MAX_MS", 60000));

const API_TIMEOUT_MS = 10000;

/** Run async tasks with a concurrency limit */
async function pMap<T, R>(items: T[], fn: (item: T, index: number) => Promise<R>, concurrency: number): Promise<R[]> {
	const results: R[] = new Array(items.length);
	let nextIndex = 0;

	async function worker(): Promise<void> {
		while (nextIndex < items.length) {
			const i = nextIndex++;
			results[i] = await fn(items[i], i);
		}
	}

	const workers = Array.from({ length: Math.min(concurrency, items.length) }, () => worker());
	await Promise.all(workers);
	return results;
}

function sleep(ms: number): Promise<void> {
	return new Promise((resolve) => setTimeout(resolve, ms));
}

function calcBackoffMs(attempt: number, baseMs: number, maxMs: number): number {
	const exp = Math.min(maxMs, baseMs * 2 ** attempt);
	// Add jitter (+/-20%) to avoid thundering herd
	const jitter = exp * (Math.random() * 0.4 - 0.2);
	return Math.max(100, Math.floor(exp + jitter));
}

/**
 * npm's own error CODE, if the output carries one. `npm error code E404`.
 *
 * Read the code, never the prose. npm prints the tarball shasum on every
 * publish attempt, so a plain `"429"` substring test against the output matches
 * whenever that 40-char hex happens to contain those three digits — about 0.9 %
 * of packages. That is how a permanent `E404` (npm's disguise for a 403 on a
 * package you may not write) was classified as a rate limit and retried ten
 * times with five-minute backoff, per package, for hours.
 */
function npmErrorCode(message: string): string | null {
	const m = message.match(/^\s*npm (?:ERR!|error) code (E?[A-Z0-9_]+)/m);
	return m ? m[1].toUpperCase() : null;
}

/**
 * Retryable ONLY on a rate limit. A permission or missing-package answer never
 * becomes true by waiting, and retrying it hides the real failure behind an
 * hours-long backoff that looks like progress.
 */
function isRateLimitedError(message: string): boolean {
	const code = npmErrorCode(message);
	if (code) return code === "E429";
	// No code line — fall back to the unambiguous PHRASES only. Never a bare
	// number: the output also carries shasums, byte sizes and version strings.
	const lower = message.toLowerCase();
	return lower.includes("too many requests") || lower.includes("rate limit");
}

/** Codes that are settled: no amount of retrying changes the answer. */
const TERMINAL_NPM_CODES = new Set(["E401", "E402", "E403", "E404", "EPUBLISHCONFLICT", "EOTP"]);

function isTerminalNpmError(message: string): boolean {
	const code = npmErrorCode(message);
	return code !== null && TERMINAL_NPM_CODES.has(code);
}

/**
 * Always-on self-test of the retry classifier, run at startup.
 *
 * The defect this replaces was invisible for exactly as long as nobody read a
 * log: a permanent error classified as transient looks like patience. There is
 * no test runner in this repository, and a test nothing runs is worse than
 * none — so the vectors run every time the script does, cost a millisecond, and
 * fail the process rather than warn.
 *
 * Vector 2 is the incident, verbatim in shape: npm prints the tarball shasum on
 * every attempt, and `838bf765429e…` carries "429" at offset 8.
 */
const CLASSIFIER_VECTORS: { name: string; message: string; rateLimited: boolean; terminal: boolean }[] = [
	{
		name: "E429 is a rate limit",
		message: "npm error code E429\nnpm error 429 Too Many Requests",
		rateLimited: true,
		terminal: false,
	},
	{
		name: "E404 whose shasum contains 429 is NOT a rate limit",
		message:
			"npm notice shasum: 838bf765429e25d726322cee8a408ebc15399ad6\n" +
			"npm error code E404\n" +
			"npm error 404 Not Found - PUT https://registry.npmjs.org/@girs%2fkeybinder-3.0",
		rateLimited: false,
		terminal: true,
	},
	{
		name: "E403 is terminal",
		message: "npm error code E403\nnpm error 403 Forbidden - PUT https://registry.npmjs.org/@girs%2fgtk-4.0",
		rateLimited: false,
		terminal: true,
	},
	{
		name: "the legacy ERR! spelling still reads",
		message: "npm ERR! code E429",
		rateLimited: true,
		terminal: false,
	},
	{
		name: "a coded transport error is neither",
		message: "npm error code ECONNRESET\nnpm error network socket hang up",
		rateLimited: false,
		terminal: false,
	},
	{
		name: "an uncoded rate limit is still read, by phrase",
		message: "Registry responded: too many requests, slow down",
		rateLimited: true,
		terminal: false,
	},
	{
		// npm prints `unpacked size` on every publish too. Any number in the
		// output is a coin flip against a bare-substring test.
		name: "an unpacked size of 429 kB is not a rate limit",
		message: "npm notice unpacked size: 429.1 kB\nnpm error code E403\nnpm error 403 Forbidden",
		rateLimited: false,
		terminal: true,
	},
];

function selfTestClassifier(): void {
	const failures: string[] = [];
	for (const v of CLASSIFIER_VECTORS) {
		if (isRateLimitedError(v.message) !== v.rateLimited) {
			failures.push(`${v.name}: expected rateLimited=${v.rateLimited}`);
		}
		if (isTerminalNpmError(v.message) !== v.terminal) {
			failures.push(`${v.name}: expected terminal=${v.terminal}`);
		}
	}
	if (failures.length > 0) {
		throw new Error(`retry-classifier self-test FAILED:\n  ${failures.join("\n  ")}`);
	}
	console.log(`🧪 retry-classifier self-test green — ${CLASSIFIER_VECTORS.length} vector(s)`);
}

function isRetryableHttpStatus(status: number): boolean {
	return status === 408 || status === 429 || (status >= 500 && status < 600);
}

class HttpStatusError extends Error {
	status: number;
	constructor(status: number, message: string) {
		super(message);
		this.status = status;
	}
}

function isHttpStatusError(error: unknown): error is HttpStatusError {
	return typeof error === "object" && error !== null && "status" in error && typeof (error as { status: unknown }).status === "number";
}

interface RetryConfig {
	label: string;
	maxRetries: number;
	baseDelayMs: number;
	maxDelayMs: number;
	shouldRetry: (error: unknown) => boolean;
	onRetry?: (attempt: number, waitMs: number, error: unknown) => void;
}

async function withRetry<T>(fn: () => Promise<T>, config: RetryConfig): Promise<T> {
	for (let attempt = 0; attempt <= config.maxRetries; attempt++) {
		try {
			return await fn();
		} catch (error) {
			if (attempt < config.maxRetries && config.shouldRetry(error)) {
				const wait = calcBackoffMs(attempt, config.baseDelayMs, config.maxDelayMs);
				config.onRetry?.(attempt + 1, wait, error);
				await sleep(wait);
				continue;
			}
			throw error instanceof Error ? error : new Error(String(error));
		}
	}
	// Unreachable, typing appeasement
	// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
	return await fn();
}

// Utility functions
function showUsage(): void {
	console.log("Usage: node index.js [options]");
	console.log("");
	console.log("Options:");
	console.log("  --dry-run, -d           Show what would be published without actually publishing");
	console.log("  --continue-on-error, -c Continue processing even if some packages fail");
	console.log("  --help, -h              Show this help message");
	console.log("");
	console.log("Environment variables:");
	console.log("  NODE_AUTH_TOKEN        NPM authentication token (required)");
	console.log("  NPM_REGISTRY           NPM registry URL (default: https://registry.npmjs.org/)");
	console.log("  NPM_TIMEOUT_SEC        Timeout in seconds (default: 300)");
	console.log("  NPM_STATUS_CONCURRENCY Max parallel status checks (default: 20)");
	console.log("");
}

function normalizeRegistryUrl(url: string): string {
	let result = url;
	if (!result.startsWith("http")) {
		result = `https://${result}`;
	}
	// Remove trailing slash for consistency
	return result.endsWith("/") ? result.slice(0, -1) : result;
}

function getApiUrl(registry: string, packageName: string): string {
	// For API calls, we need the registry URL with trailing slash
	const baseUrl = registry.endsWith("/") ? registry : `${registry}/`;
	return `${baseUrl}${encodeURIComponent(packageName)}`;
}

function parseArgs(): Pick<Config, "dryRun" | "continueOnError"> {
	const args = process.argv;
	return {
		dryRun: args.includes("--dry-run") || args.includes("-d"),
		continueOnError: args.includes("--continue-on-error") || args.includes("-c"),
	};
}

function getEnvConfig(): Pick<Config, "token" | "registry" | "timeoutSec"> {
	// An EMPTY token is no token. `${{ secrets.NODE_AUTH_TOKEN }}` still exports
	// the variable when the secret is unset, so "the variable exists" says
	// nothing about whether a credential does — and an empty string would select
	// token auth and then fail every publish with a 401 that reads like a
	// revoked token.
	const token = process.env.NODE_AUTH_TOKEN?.trim() || undefined;
	const registry = normalizeRegistryUrl(process.env.NPM_REGISTRY || DEFAULT_REGISTRY);
	const timeoutSec = process.env.NPM_TIMEOUT_SEC
		? Number.parseInt(process.env.NPM_TIMEOUT_SEC, 10)
		: DEFAULT_TIMEOUT_SEC;

	if (Number.isNaN(timeoutSec)) {
		throw new Error(`Invalid timeout value: ${process.env.NPM_TIMEOUT_SEC}`);
	}

	return { token, registry, timeoutSec };
}

function createConfig(): Config {
	if (process.argv.includes("--help") || process.argv.includes("-h")) {
		showUsage();
		process.exit(0);
	}

	const args = parseArgs();
	const env = getEnvConfig();

	// A missing token is NOT an error: it is the OIDC path. npm engages Trusted
	// Publishing only when no token is configured, so "no token" is how the
	// mode is selected — see `Config.authMode`. What IS an error is having
	// neither, and `assertCanAuthenticate` decides that from the environment.
	const authMode: Config["authMode"] = env.token ? "token" : "oidc";

	return { ...args, ...env, authMode };
}

// File system utilities
async function findAllPackageFiles(rootDir: string): Promise<string[]> {
	const result: string[] = [];

	async function traverse(dir: string): Promise<void> {
		const entries = await readdir(dir);

		for (const entry of entries) {
			const fullPath = join(dir, entry);
			const stats = await stat(fullPath);

			if (stats.isDirectory()) {
				// Skip release-script directory
				if (!fullPath.includes(".github/release-script")) {
					await traverse(fullPath);
				}
			} else if (basename(fullPath) === "package.json") {
				result.push(fullPath);
			}
		}
	}

	await traverse(rootDir);
	return result;
}

async function parsePackageJson(packageFile: string): Promise<Package> {
	const content = await readFile(packageFile, "utf-8");
	const data = JSON.parse(content) as Record<string, unknown>;

	if (typeof data.name !== "string" || typeof data.version !== "string") {
		throw new Error(`Invalid package.json at ${packageFile}: missing name or version`);
	}

	return {
		name: data.name,
		version: data.version,
		rootFolder: dirname(packageFile),
	};
}

function hasWorkspaceDependencies(packageData: Record<string, unknown>): boolean {
	const dependencyFields = ['dependencies', 'devDependencies', 'peerDependencies', 'optionalDependencies'];
	
	for (const field of dependencyFields) {
		const deps = packageData[field];
		if (deps && typeof deps === 'object' && deps !== null) {
			const depsObj = deps as Record<string, unknown>;
			for (const [depName, depVersion] of Object.entries(depsObj)) {
				if (typeof depVersion === 'string' && depVersion.startsWith('workspace:^')) {
					return true;
				}
			}
		}
	}
	
	return false;
}

async function checkForTestPackages(packages: Package[]): Promise<void> {
	console.log('🔍 Checking for test packages with workspace dependencies...');
	
	for (const pkg of packages) {
		const packageJsonPath = join(pkg.rootFolder, 'package.json');
		try {
			const content = await readFile(packageJsonPath, 'utf-8');
			const data = JSON.parse(content) as Record<string, unknown>;
			
			if (hasWorkspaceDependencies(data)) {
				console.error(`❌ Test package detected: ${pkg.name}`);
				console.error(`   Package at ${pkg.rootFolder} uses "workspace:^" dependencies`);
				console.error(`   This indicates test packages that should not be released`);
				throw new Error('Release aborted: Test packages with workspace dependencies detected');
			}
		} catch (error) {
			if (error instanceof Error && error.message.includes('Release aborted')) {
				throw error;
			}
			console.warn(`⚠️  Could not check workspace dependencies for ${pkg.name}: ${error instanceof Error ? error.message : 'Unknown error'}`);
		}
	}
	
	console.log('✅ No test packages with workspace dependencies found');
}

// NPM API utilities
async function checkPackageStatus(pkg: Package, registry: string): Promise<PackageStatus> {
	console.log(`🔍 Checking ${pkg.name}...`);

	const url = getApiUrl(registry, pkg.name);
	const result = await withRetry(async () => {
		const response = await fetch(url, {
			headers: {
				Accept: "application/json",
				"User-Agent": "ts-for-gir-release-script/1.0.0",
			},
			signal: AbortSignal.timeout(API_TIMEOUT_MS),
		});

		if (response.status === 404) {
			return { exists: false, versions: [] } satisfies PackageStatus;
		}

		if (!response.ok) {
			if (isRetryableHttpStatus(response.status)) {
				throw new HttpStatusError(response.status, `Registry responded with ${response.status}`);
			}
			return { exists: false, versions: [] } satisfies PackageStatus;
		}

		const data = await response.json();
		const versions = Object.keys(data.versions || {});
		const latestVersion = data["dist-tags"]?.latest as string | undefined;
		return { exists: true, versions, latestVersion } satisfies PackageStatus;
	}, {
		label: `status:${pkg.name}`,
		maxRetries: MAX_RETRIES_STATUS,
		baseDelayMs: RETRY_BASE_MS,
		maxDelayMs: RETRY_MAX_MS,
		shouldRetry: (err) => isHttpStatusError(err) && isRetryableHttpStatus((err as HttpStatusError).status),
		onRetry: (attempt, wait, err) => {
			const status = isHttpStatusError(err) ? (err as HttpStatusError).status : 'unknown';
			console.log(`⚠️  ${pkg.name} - API ${status}, retrying in ${wait}ms (${attempt}/${MAX_RETRIES_STATUS})`);
		},
	});

	if (result.exists) {
		console.log(`✅ ${pkg.name} - exists (${result.versions.length} versions)`);
		console.log(`🔍 ${pkg.name} - latest: ${result.latestVersion}, checking: ${pkg.version}`);
	} else {
		console.log(`📦 ${pkg.name} - new package`);
	}

	return result;
}

// Publishing utilities
async function publishPackageOnce(pkg: Package, config: Config): Promise<void> {
	if (config.dryRun) {
		console.log(`📦 [DRY RUN] Would publish ${pkg.name}@${pkg.version}`);
		return;
	}

	console.log(`🚀 Publishing ${pkg.name}@${pkg.version}...`);

	return new Promise((resolve, reject) => {
		const timeoutId = setTimeout(() => {
			reject(new Error(`Timeout after ${config.timeoutSec}s for ${pkg.name}`));
		}, config.timeoutSec * 1000);

		// In OIDC mode the token must be ABSENT, not empty — an unset secret still
		// exports `NODE_AUTH_TOKEN=""` into this process.
		const env = { ...process.env } as NodeJS.ProcessEnv;
		if (config.authMode === "token" && config.token) env.NODE_AUTH_TOKEN = config.token;
		else delete env.NODE_AUTH_TOKEN;
		const args = ["publish", "--tag", "latest", "--access", "public", "--provenance", "--registry", config.registry];

		const proc = spawn("npm", args, {
			cwd: pkg.rootFolder,
			env,
			shell: true,
			stdio: "pipe",
		});

		let stderr = "";

		proc.stderr.on("data", (data) => {
			stderr += data.toString();
		});

		proc.on("error", (err) => {
			clearTimeout(timeoutId);
			reject(new Error(`Spawn error for ${pkg.name}: ${err.message}`));
		});

		proc.on("exit", (code) => {
			clearTimeout(timeoutId);

			if (code === 0) {
				console.log(`✅ Published ${pkg.name}@${pkg.version}`);
				resolve();
				return;
			}

			// Handle common npm publish errors
			if (
				stderr.includes("You cannot publish over the previously published versions") ||
				stderr.includes("Cannot publish over existing version")
			) {
				console.log(`⚠️  ${pkg.name}@${pkg.version} already published`);
				resolve();
				return;
			}

			if (stderr.includes("404 Not Found") && stderr.includes("organization")) {
				const orgName = pkg.name.split("/")[0];
				reject(new Error(`Organization '${orgName}' not found. Create it at https://www.npmjs.com/org/create`));
				return;
			}

			reject(new Error(`Failed to publish ${pkg.name}: ${stderr.trim() || `exit code ${code}`}`));
		});
	});
}

async function publishPackageWithRetry(pkg: Package, config: Config): Promise<void> {
	await withRetry(
		() => publishPackageOnce(pkg, config),
		{
			label: `publish:${pkg.name}@${pkg.version}`,
			maxRetries: MAX_RETRIES_PUBLISH,
			baseDelayMs: RETRY_BASE_MS,
			maxDelayMs: RETRY_MAX_MS,
			shouldRetry: (err) => {
				const msg = err instanceof Error ? err.message : String(err);
				// A settled answer wins over every other signal, so a message that
				// happens to contain a transport word cannot resurrect it.
				if (isTerminalNpmError(msg)) return false;
				const lower = msg.toLowerCase();
				return (
					isRateLimitedError(msg) ||
					lower.includes("econnreset") ||
					lower.includes("etimedout") ||
					lower.includes("socket hang up")
				);
			},
			onRetry: (attempt, wait, err) => {
				const message = err instanceof Error ? err.message : String(err);
				console.log(`⏳ ${pkg.name}@${pkg.version} retry ${attempt}/${MAX_RETRIES_PUBLISH} in ${wait}ms: ${message}`);
			},
		},
	);
	if (PUBLISH_DELAY_MS > 0) {
		await sleep(PUBLISH_DELAY_MS);
	}
}

async function collectPackages(): Promise<Package[]> {
	// Get project root (3 levels up from .github/release-script/src/)
	const scriptDir = new URL(".", import.meta.url).pathname;
	const projectRoot = join(scriptDir, "..", "..", "..");

	console.log(`📁 Scanning ${projectRoot} for packages...`);

	const packageFiles = await findAllPackageFiles(projectRoot);
	console.log(`📦 Found ${packageFiles.length} package.json files`);

	const packages = await Promise.all(packageFiles.map((file) => parsePackageJson(file)));

	return packages;
}

/**
 * Prove this run can authenticate, BEFORE it spends hours discovering it cannot.
 *
 * The old version ran `npm whoami`, printed `⚠️  Auth test failed` on a dead
 * token and continued anyway — so a settled credential failure became 703
 * retried publishes. A pre-flight check that cannot fail is not a check.
 *
 * Each mode is verified on its own terms, because `whoami` is the wrong question
 * in OIDC mode (there is deliberately no token to identify).
 */
/** How long the pre-flight auth probe may take before it is treated as undecided. */
const WHOAMI_TIMEOUT_MS = 30_000;

/**
 * Refuse to publish from anywhere but CI.
 *
 * This script publishes 703 packages and it is not a dry run by default, so a
 * local invocation with a live `~/.npmrc` walks straight from the auth check
 * into Phase 2. Measured, by doing exactly that during development: 703 publish
 * attempts against the real registry, stopped only by `--provenance` failing to
 * find a CI provider. That is luck, not a guard — and it would evaporate the
 * moment someone drops `--provenance` or runs it under any provider npm knows.
 *
 * `--dry-run` still works everywhere; only the writing path is gated.
 */
function assertRunningInCi(config: Config): void {
	if (config.dryRun) return;
	const inCi = process.env.GITHUB_ACTIONS === "true" || process.env.CI === "true";
	if (inCi) return;
	if (process.env.ALLOW_PUBLISH_OUTSIDE_CI === "1") {
		console.warn("⚠️  ALLOW_PUBLISH_OUTSIDE_CI=1 — publishing from a non-CI environment on purpose.");
		return;
	}
	throw new Error(
		"refusing to publish outside CI: this script publishes every package in the repo and is not a dry run. " +
			"Use --dry-run to inspect the plan, or set ALLOW_PUBLISH_OUTSIDE_CI=1 if you really mean it.",
	);
}

async function assertCanAuthenticate(config: Config): Promise<void> {
	if (config.dryRun) return;

	if (config.authMode === "oidc") {
		console.log("🔐 Auth mode: OIDC (npm Trusted Publishing) — no token configured");
		if (!process.env.ACTIONS_ID_TOKEN_REQUEST_URL || !process.env.ACTIONS_ID_TOKEN_REQUEST_TOKEN) {
			throw new Error(
				"No NODE_AUTH_TOKEN and no GitHub OIDC token available: the job needs `permissions: id-token: write`, " +
					"or set NODE_AUTH_TOKEN to publish with a token instead.",
			);
		}
		// npm >= 11.5.1 is required for the OIDC exchange. Not asserted here:
		// release.yml pins it, which is the layer that controls the environment.
		console.log("✅ OIDC token endpoint available");
		// Each package must ALSO have a Trusted Publisher configured for this
		// workflow; npm answers a missing one with a 404 on the OIDC exchange.
		// `gjsify onboard --packages "*"` configures them in one idempotent sweep.
		return;
	}

	console.log("🔐 Auth mode: token — verifying the TOKEN…");

	// Asked over HTTP with the token in the header, NOT via `npm whoami`.
	//
	// `npm whoami` authenticates from `~/.npmrc`; a bare `NODE_AUTH_TOKEN` in the
	// environment is inert unless some npmrc line interpolates it. So off-CI the
	// check answered from whatever credential the file happened to hold —
	// measured: it printed `Authenticated as: jumplink` for a token spelled
	// `npm_dead000…`. A gate that reads a different credential than the one under
	// test reports on the wrong subject, and it does so most convincingly when
	// the other credential is good.
	//
	// The direct call also removes npm's internal retry-with-backoff, which is
	// why the old check ran past 90s under registry throttling instead of
	// answering.
	const base = config.registry.endsWith("/") ? config.registry.slice(0, -1) : config.registry;
	let status: number;
	let body: string;
	try {
		const res = await fetch(`${base}/-/whoami`, {
			headers: { authorization: `Bearer ${config.token}`, accept: "application/json" },
			signal: AbortSignal.timeout(WHOAMI_TIMEOUT_MS),
		});
		status = res.status;
		body = await res.text().catch(() => "");
	} catch (err) {
		// A SETTLED negative is fatal; an UNDECIDED one is not. A timeout or a
		// network error says nothing about the token, and refusing to release over
		// a question we could not ask would block on a transient blip. Publishing
		// is not thereby unguarded: E401/E403/E404 are terminal in the retry
		// classifier, so a bad credential fails on the FIRST package rather than
		// after ten backed-off retries on each of them.
		console.warn(
			`⚠️  could not reach ${base}/-/whoami (${err instanceof Error ? err.message : String(err)}) — ` +
				"cannot verify the token here. Continuing; a bad credential will fail on the first publish.",
		);
		return;
	}

	if (status === 401 || status === 403) {
		throw new Error(
			`NODE_AUTH_TOKEN is not usable on ${base} (HTTP ${status}). ` +
				"Replace the token, or drop it to publish via OIDC once the packages have a Trusted Publisher.",
		);
	}
	if (status < 200 || status >= 300) {
		console.warn(`⚠️  ${base}/-/whoami answered HTTP ${status} — token not verified, continuing.`);
		return;
	}
	let username = "";
	try {
		username = (JSON.parse(body) as { username?: string }).username ?? "";
	} catch {
		/* non-JSON body — the 2xx is the answer that matters */
	}
	console.log(`✅ Authenticated as: ${username || "(unknown)"}`);
}

// Phase 1: Check all package statuses in parallel with concurrency limit
async function checkAllStatuses(
	packages: Package[],
	registry: string,
): Promise<Map<string, PackageStatus>> {
	console.log(`\n🔍 Phase 1: Checking status of ${packages.length} packages (concurrency: ${STATUS_CONCURRENCY})...`);
	const startTime = Date.now();

	const statuses = new Map<string, PackageStatus>();
	let checked = 0;

	await pMap(packages, async (pkg) => {
		try {
			const status = await checkPackageStatus(pkg, registry);
			statuses.set(pkg.name, status);
		} catch (error) {
			console.warn(`⚠️  Could not check ${pkg.name}: ${error instanceof Error ? error.message : error}`);
			// Treat as "needs publish" if we can't check
			statuses.set(pkg.name, { exists: false, versions: [] });
		}
		checked++;
		if (checked % 50 === 0 || checked === packages.length) {
			console.log(`   Checked ${checked}/${packages.length} packages...`);
		}
	}, STATUS_CONCURRENCY);

	const elapsed = ((Date.now() - startTime) / 1000).toFixed(1);
	console.log(`✅ Status check complete in ${elapsed}s\n`);
	return statuses;
}

// Phase 2: Publish only packages that need it, in batches
async function publishPendingPackages(
	packages: Package[],
	statuses: Map<string, PackageStatus>,
	config: Config,
): Promise<{ alreadyPublished: number; processed: number; errors: number }> {
	// Split into already-published and needs-publish
	const needsPublish: { pkg: Package; isUpdate: boolean }[] = [];
	let alreadyPublished = 0;

	for (const pkg of packages) {
		const status = statuses.get(pkg.name);
		if (status?.exists && status.versions.includes(pkg.version)) {
			alreadyPublished++;
			continue;
		}
		needsPublish.push({ pkg, isUpdate: status?.exists ?? false });
	}

	console.log(`📊 ${alreadyPublished} already published, ${needsPublish.length} to publish\n`);

	if (needsPublish.length === 0) {
		return { alreadyPublished, processed: 0, errors: 0 };
	}

	console.log(`🚀 Phase 2: Publishing ${needsPublish.length} packages (batch size: ${BATCH_SIZE})...\n`);

	let processed = 0;
	let errors = 0;

	for (let i = 0; i < needsPublish.length; i += BATCH_SIZE) {
		const batch = needsPublish.slice(i, i + BATCH_SIZE);
		const batchNum = Math.floor(i / BATCH_SIZE) + 1;
		const totalBatches = Math.ceil(needsPublish.length / BATCH_SIZE);

		console.log(`📦 Batch ${batchNum}/${totalBatches} (${batch.map((b) => b.pkg.name).join(", ")})`);

		const batchResults = await Promise.allSettled(
			batch.map(async ({ pkg, isUpdate }): Promise<BatchResult> => {
				try {
					const action = isUpdate ? "update" : "create";

					if (config.dryRun) {
						console.log(`📦 [DRY RUN] Would ${action} ${pkg.name}@${pkg.version}`);
						return { result: `dry-run-${action}` as ProcessResult, pkg };
					}

					await publishPackageWithRetry(pkg, config);
					return { result: isUpdate ? "updated" : "created", pkg };
				} catch (error) {
					const message = error instanceof Error ? error.message : "Unknown error";
					console.error(`❌ ${pkg.name}: ${message}`);

					if (config.continueOnError) {
						return { result: "error", pkg, error: message };
					}
					throw error;
				}
			}),
		);

		for (const result of batchResults) {
			if (result.status === "fulfilled") {
				if (result.value.result === "error") {
					errors++;
				} else {
					processed++;
				}
			} else if (config.continueOnError) {
				console.error(`❌ Batch error: ${result.reason}`);
				errors++;
			} else {
				throw result.reason;
			}
		}

		const progress = (((i + BATCH_SIZE) / needsPublish.length) * 100).toFixed(1);
		console.log(
			`✅ Batch ${batchNum}/${totalBatches} done (${progress}%) - Processed: ${processed}, Errors: ${errors}\n`,
		);

		// Delay between batches (not after the last one)
		if (i + BATCH_SIZE < needsPublish.length && BATCH_DELAY_MS > 0) {
			await sleep(BATCH_DELAY_MS);
		}
	}

	return { alreadyPublished, processed, errors };
}

async function main(): Promise<void> {
	try {
		selfTestClassifier();

		const config = createConfig();
		assertRunningInCi(config);

		if (config.dryRun) {
			console.log("🔍 DRY RUN MODE - No packages will be published");
		}

		if (config.continueOnError) {
			console.log("🔄 CONTINUE ON ERROR MODE - Processing will continue despite failures");
		}

		console.log(`⚙️  Config: batch=${BATCH_SIZE}, batchDelay=${BATCH_DELAY_MS}ms, publishDelay=${PUBLISH_DELAY_MS}ms, statusConcurrency=${STATUS_CONCURRENCY}`);

		await assertCanAuthenticate(config);
		const packages = await collectPackages();

		// Check for test packages with workspace dependencies
		await checkForTestPackages(packages);

		console.log(`🚀 Processing ${packages.length} packages...`);

		// Phase 1: Check all statuses in parallel
		const statuses = await checkAllStatuses(packages, config.registry);

		// Phase 2: Publish only what's needed
		const { alreadyPublished, processed, errors } = await publishPendingPackages(packages, statuses, config);

		// Final summary
		console.log("📊 Final Summary:");
		console.log(`   ✅ Already published: ${alreadyPublished}`);
		console.log(`   🚀 ${config.dryRun ? "Would process" : "Processed"}: ${processed}`);
		console.log(`   ❌ Errors: ${errors}`);
		console.log(`   📋 Total: ${alreadyPublished + processed + errors}`);

		// `--continue-on-error` governs whether the SWEEP stops at the first
		// failure. It never governed whether failure is REPORTED, and reading it
		// that way is how this script printed "completed successfully" and exited
		// 0 over a run in which every single publish had failed. The workflow
		// passes the flag, so that green check was one broken credential away at
		// all times: a release job whose whole job is publishing, reporting
		// success having published nothing.
		if (errors > 0) {
			throw new Error(
				`${errors} of ${errors + processed} package(s) failed to publish` +
					(config.continueOnError ? " (--continue-on-error kept the sweep going; the run still failed)" : ""),
			);
		}

		console.log(`✅ ${config.dryRun ? "DRY RUN" : "Processing"} completed successfully`);
	} catch (error) {
		console.error(`❌ Fatal error: ${error instanceof Error ? error.message : error}`);
		process.exit(1);
	}
}

void main();
