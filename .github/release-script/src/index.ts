import { spawn } from "node:child_process";
import { mkdtemp, readdir, readFile, rm, stat, writeFile } from "node:fs/promises";
import { tmpdir } from "node:os";
import { basename, dirname, join, resolve } from "node:path";
import { satisfies } from "semver";

import {
	type ClosureGap,
	closureGaps,
	classifyGap,
	formatDuration,
	describeGap,
	planPublishOrder,
	type PublishGroup,
	type RegistryView,
	runtimeDependencies,
	sweepDeadlineExceeded,
	takeIndependentRun,
} from "./publish-plan.ts";

// Configuration and types
interface Config {
	token?: string;
	registry: string;
	timeoutSec: number;
	dryRun: boolean;
	continueOnError: boolean;
	/**
	 * Directory the sweep scans, relative to the repository root.
	 *
	 * Defaults to the repository root, which is every `@girs/*` namespace package. The SDK
	 * channel bundles are generated into `sdk/` by a different workflow on a different cadence
	 * and are not committed, so a sweep that always scanned everything would publish whichever
	 * of the two happened to be on disk — and silently report success for the other.
	 */
	root: string;
	/**
	 * Publish nothing; only ask whether what is ALREADY on the registry resolves.
	 *
	 * The same gate `publishPendingPackages` runs after every group, pointed at the current state
	 * instead of at a sweep in progress. It exists so the invariant can be asked at any time —
	 * after a release that was interrupted, or when a consumer reports a `notarget` and nobody
	 * knows yet which repository the cause lives in.
	 */
	verifyOnly: boolean;
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
	/**
	 * Every RUNTIME dependency, name → range. This is what decides the publish ORDER and what
	 * the closure gate checks — see `publish-plan.ts`. `devDependencies` are excluded: they are
	 * not installed for a consumer, so they can neither break an install nor constrain a sweep.
	 */
	dependencies: Record<string, string>;
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
 * Codes that are the registry asking to be asked again.
 *
 * `E409` is here because the 4.2.0 release found it the hard way: 702 of 703
 * packages published, and `@girs/unity-7.0` died on
 *
 *     npm error code E409
 *     npm error 409 Conflict - PUT … - Failed to save packument. A common cause
 *     is if you try to publish a new package before the previous package has
 *     been fully published.
 *
 * — a transient write conflict, retried ZERO times, because tightening this
 * classifier made it right about what is terminal and left everything it did
 * not name unretryable. Being precise about one half of a partition is not the
 * same as covering it, and the half that was named was the half we had already
 * been bitten by — which is exactly how the other half stays invisible.
 *
 * So the retryable side is named too, not just the one code from the incident:
 * the 5xx family and the coded transport errors belong here for the same
 * reason. One package left unpublished costs a human a red X on a two-hour job
 * and a 703-name diff against the registry.
 *
 * Publishing over an existing version is a DIFFERENT answer and stays terminal:
 * npm spells that `EPUBLISHCONFLICT`, and `publishPackageOnce` resolves it as
 * already-published before this is ever consulted. The two 409-shaped
 * conditions must never collapse into one rule.
 */
const RETRYABLE_NPM_CODES = new Set(["E409", "E500", "E502", "E503", "E504", "ETIMEDOUT", "ECONNRESET"]);

function isRetryableNpmError(message: string): boolean {
	const code = npmErrorCode(message);
	return code !== null && RETRYABLE_NPM_CODES.has(code);
}

/**
 * THE decision that gates a publish retry — the composed predicate, not one of
 * its parts. It lives here, beside the classifiers it calls, so the self-test
 * below can run the real thing: the helpers were covered all along, while the
 * `shouldRetry` closure that actually decides was not, which is how a code that
 * is neither terminal nor rate-limited came to mean "give up".
 */
function isRetryablePublishError(message: string): boolean {
	// A settled answer wins over every other signal, so a message that happens
	// to contain a transport word cannot resurrect it.
	if (isTerminalNpmError(message)) return false;
	const lower = message.toLowerCase();
	return (
		isRateLimitedError(message) ||
		isRetryableNpmError(message) ||
		lower.includes("econnreset") ||
		lower.includes("etimedout") ||
		lower.includes("socket hang up")
	);
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
const CLASSIFIER_VECTORS: { name: string; message: string; rateLimited: boolean; terminal: boolean; retryable: boolean }[] = [
	{
		name: "E429 is a rate limit",
		message: "npm error code E429\nnpm error 429 Too Many Requests",
		rateLimited: true,
		terminal: false,
		retryable: true,
	},
	{
		name: "E404 whose shasum contains 429 is NOT a rate limit",
		message:
			"npm notice shasum: 838bf765429e25d726322cee8a408ebc15399ad6\n" +
			"npm error code E404\n" +
			"npm error 404 Not Found - PUT https://registry.npmjs.org/@girs%2fkeybinder-3.0",
		rateLimited: false,
		terminal: true,
		retryable: false,
	},
	{
		name: "E403 is terminal",
		message: "npm error code E403\nnpm error 403 Forbidden - PUT https://registry.npmjs.org/@girs%2fgtk-4.0",
		rateLimited: false,
		terminal: true,
		retryable: false,
	},
	{
		name: "the legacy ERR! spelling still reads",
		message: "npm ERR! code E429",
		rateLimited: true,
		terminal: false,
		retryable: true,
	},
	{
		name: "a coded transport error is not a rate limit, and not terminal",
		message: "npm error code ECONNRESET\nnpm error network socket hang up",
		rateLimited: false,
		terminal: false,
		retryable: true,
	},
	{
		name: "an uncoded rate limit is still read, by phrase",
		message: "Registry responded: too many requests, slow down",
		rateLimited: true,
		terminal: false,
		retryable: true,
	},
	{
		// npm prints `unpacked size` on every publish too. Any number in the
		// output is a coin flip against a bare-substring test.
		name: "an unpacked size of 429 kB is not a rate limit",
		message: "npm notice unpacked size: 429.1 kB\nnpm error code E403\nnpm error 403 Forbidden",
		rateLimited: false,
		terminal: true,
		retryable: false,
	},
	{
		// The 4.2.0 incident, verbatim in shape. `E409` is transient and must be
		// retried; `EPUBLISHCONFLICT` is the settled "already published" answer
		// and must not be — the two must never collapse into one rule.
		name: "E409 packument save conflict is transient",
		message:
			"npm error code E409\n" +
			"npm error 409 Conflict - PUT https://registry.npmjs.org/@girs%2funity-7.0 - Failed to save packument. " +
			"A common cause is if you try to publish a new package before the previous package has been fully processed.",
		rateLimited: false,
		terminal: false,
		retryable: true,
	},
	{
		name: "a 503 from the registry is retryable",
		message: "npm error code E503\nnpm error 503 Service Unavailable",
		rateLimited: false,
		terminal: false,
		retryable: true,
	},
	{
		name: "EPUBLISHCONFLICT stays terminal",
		message: "npm error code EPUBLISHCONFLICT\nnpm error Cannot publish over previously published version",
		rateLimited: false,
		terminal: true,
		retryable: false,
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
		if (isRetryablePublishError(v.message) !== v.retryable) {
			failures.push(`${v.name}: expected retryable=${v.retryable}`);
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
	console.log("  --root <dir>            Scan only <dir> for packages (default: the whole repository)");
	console.log("  --verify-only           Publish nothing; check that what is already published resolves");
	console.log("  --help, -h              Show this help message");
	console.log("");
	console.log("Environment variables:");
	console.log("  NODE_AUTH_TOKEN        NPM authentication token (required)");
	console.log("  NPM_REGISTRY           NPM registry URL (default: https://registry.npmjs.org/)");
	console.log("  NPM_TIMEOUT_SEC        Timeout in seconds (default: 300)");
	console.log("  NPM_STATUS_CONCURRENCY Max parallel status checks (default: 20)");
	console.log("");
}

/**
 * Is this the public npm registry? Decides `--provenance`, and nothing else.
 *
 * Matched on the HOST, not on a substring of the URL: `https://evil.example/registry.npmjs.org/`
 * contains the name and is not npm.
 */
function isPublicNpmRegistry(url: string): boolean {
	try {
		const host = new URL(url).host.toLowerCase();
		return host === "registry.npmjs.org" || host === "registry.yarnpkg.com";
	} catch {
		return false;
	}
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

function parseArgs(): Pick<Config, "dryRun" | "continueOnError" | "root" | "verifyOnly"> {
	const args = process.argv;
	return {
		dryRun: args.includes("--dry-run") || args.includes("-d"),
		continueOnError: args.includes("--continue-on-error") || args.includes("-c"),
		root: parseRoot(args),
		verifyOnly: args.includes("--verify-only"),
	};
}

/**
 * `--root <dir>` or `--root=<dir>`, relative to the repository root. Absolute paths and `..`
 * are refused: this value decides what gets published, so it stays inside the repository.
 */
function parseRoot(args: string[]): string {
	const inline = args.find((arg) => arg.startsWith("--root="));
	const flagAt = args.indexOf("--root");
	const raw = inline ? inline.slice("--root=".length) : flagAt >= 0 ? args[flagAt + 1] : undefined;

	if (raw === undefined || raw === "") return ".";
	if (raw.startsWith("-")) throw new Error("--root needs a directory argument");
	if (raw.startsWith("/") || raw.split("/").includes("..")) {
		throw new Error(`--root must stay inside the repository: ${raw}`);
	}
	return raw;
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
		dependencies: runtimeDependencies(data),
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
		// `--provenance` is a public-npm feature: it needs a sigstore-backed registry and a CI
		// provider npm recognises. Asking for it against any other registry makes the publish fail
		// for a reason that has nothing to do with the package — which is also what made this
		// script untestable end to end, since a local registry could never get past the first
		// publish. The flag is therefore tied to the registry it belongs to, not to the run.
		const args = ["publish", "--tag", "latest", "--access", "public", "--registry", config.registry];
		if (isPublicNpmRegistry(config.registry)) args.push("--provenance");

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
		// stdout is piped and MUST be drained. An undrained pipe fills at 64 KB and the child
		// blocks on its next write — forever, or until the timeout above turns a chatty publish
		// into "timed out", which reads like a slow registry rather than a full buffer.
		proc.stdout.on("data", () => {});

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
			shouldRetry: (err) => isRetryablePublishError(err instanceof Error ? err.message : String(err)),
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

async function collectPackages(root: string): Promise<Package[]> {
	// Relative to the WORKING DIRECTORY, not to where this file happens to live.
	//
	// It used to be three levels up from `.github/release-script/src/`, which meant the scan
	// target was this repository no matter where you stood — so `--root` could name a directory
	// inside it and nothing else. Both workflows run from the repository root, so they are
	// unaffected; what changes is that pointing the publisher at another tree is now possible at
	// all, which is what lets it be tested end to end against a throwaway registry. `parseRoot`
	// still refuses absolute paths and `..`, so `--root` cannot climb out of where it was run.
	const projectRoot = resolve(process.cwd(), root);

	console.log(`📁 Scanning ${projectRoot} for packages...`);

	const packageFiles = await findAllPackageFiles(projectRoot);
	console.log(`📦 Found ${packageFiles.length} package.json files`);

	// A sweep over nothing used to report "completed successfully". Whatever the cause — the wrong
	// working directory, a `--root` that does not exist yet, a generation step that was skipped —
	// a publisher that publishes nothing has not succeeded, and saying so here names the cause
	// while the summary at the end would not.
	if (packageFiles.length === 0) {
		throw new Error(`no package.json found under ${projectRoot} — nothing to publish`);
	}

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
	if (config.dryRun || config.verifyOnly) return;
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
	if (config.dryRun || config.verifyOnly) return;

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

/**
 * The registry, asked live, with a POSITIVE-only cache.
 *
 * Only "yes, these versions are there" is cached. A negative is never cached, because a negative
 * is the interesting answer and it is the one that changes: the whole point of the closure gate
 * is to ask again a moment later and see whether the registry's replicas have caught up.
 */
class LiveRegistry implements RegistryView {
	private readonly known = new Map<string, string[]>();

	constructor(private readonly registry: string) {}

	/** Seed from Phase 1, which already fetched every package in the run. */
	seed(statuses: Map<string, PackageStatus>): void {
		for (const [name, status] of statuses) {
			if (status.exists && status.versions.length > 0) this.known.set(name, status.versions);
		}
	}

	/** A package this run just published — drop any stale "what the registry had before" answer. */
	invalidate(name: string): void {
		this.known.delete(name);
	}

	async publishedVersions(name: string): Promise<string[] | null> {
		const cached = this.known.get(name);
		if (cached) return cached;

		// Retried on a transient status, like every other registry read here. Without it a single
		// 503 in the middle of a two-hour sweep would fail the run as an ordering defect — the one
		// diagnosis that would send someone looking in the wrong place.
		const versions = await withRetry(
			async () => {
				const response = await fetch(getApiUrl(this.registry, name), {
					headers: { Accept: "application/json", "User-Agent": "ts-for-gir-release-script/1.0.0" },
					signal: AbortSignal.timeout(API_TIMEOUT_MS),
				});
				if (response.status === 404) return null;
				if (!response.ok) {
					if (isRetryableHttpStatus(response.status)) {
						throw new HttpStatusError(response.status, `Registry responded with ${response.status}`);
					}
					return null;
				}
				const data = (await response.json()) as { versions?: Record<string, unknown> };
				const found = Object.keys(data.versions ?? {});
				return found.length === 0 ? null : found;
			},
			{
				label: `closure:${name}`,
				maxRetries: MAX_RETRIES_STATUS,
				baseDelayMs: RETRY_BASE_MS,
				maxDelayMs: RETRY_MAX_MS,
				shouldRetry: (err) => isHttpStatusError(err) && isRetryableHttpStatus(err.status),
			},
		);

		if (versions === null) return null;
		this.known.set(name, versions);
		return versions;
	}
}

/**
 * How long to keep re-asking before recording a gap as "published, not readable yet".
 *
 * This budget buys NOTHING for correctness, and it is important to know why: whether a gap is an
 * ordering defect is decided by the PLAN (`classifyGap`), not by how long the registry is asked.
 * A defect is fatal on the first look; waiting cannot change the verdict either way.
 *
 * What it buys is quiet — a gap that resolves inside the window never reaches the log. That is
 * worth a few seconds and no more. It was 60s, and the v5.0.0 sweep spent roughly an hour of its
 * two hours sitting in this loop over 76 gaps that were all lag: 19.2 s per package against the
 * 10.7 s of the release before it.
 */
/**
 * Wall-clock budget for the whole sweep. Keep it UNDER release.yml's `timeout-minutes`, so a run
 * that stops fitting says which package it was on instead of leaving the runner to report that it
 * exceeded its maximum execution time. Zero disables it.
 */
const DEADLINE_MIN = Math.max(0, getEnvInt("NPM_DEADLINE_MIN", 300));

const CLOSURE_LAG_BUDGET_MS = Math.max(0, getEnvInt("NPM_CLOSURE_LAG_MS", 15_000));
const CLOSURE_LAG_STEP_MS = Math.max(250, getEnvInt("NPM_CLOSURE_LAG_STEP_MS", 5_000));

/**
 * THE invariant, checked after every publish group: a consumer installing what we just published
 * can resolve it. Asked of the registry, not of our own bookkeeping — "we published it" is the
 * answer we already have.
 *
 * Edges inside the group are exempt. They must be: the `@girs` graph has a six-member cycle
 * (cairo-1.0 · gio-2.0 · gjs · glib-2.0 · gmodule-2.0 · gobject-2.0), and no order makes a cycle
 * member's closure complete at its own publish instant. See `publish-plan.ts`.
 */
async function verifyGroupClosure(
	group: PublishGroup<Package>,
	registry: LiveRegistry,
	plannedGroupOf: Map<string, number>,
): Promise<ClosureGap[]> {
	const deadline = Date.now() + CLOSURE_LAG_BUDGET_MS;
	let gaps = await closureGaps(group.members, registry, satisfies);

	while (gaps.length > 0 && Date.now() < deadline) {
		console.log(
			`⏳ group ${group.index}: ${gaps.length} dependency/ies not resolvable yet, re-asking the registry…`,
		);
		await sleep(CLOSURE_LAG_STEP_MS);
		for (const gap of gaps) registry.invalidate(gap.dependency);
		gaps = await closureGaps(group.members, registry, satisfies);
	}

	for (const gap of gaps) {
		const verdict = classifyGap(gap, plannedGroupOf, group.index);
		if (verdict === "ordering-defect") {
			// A GitHub annotation, so the failure is visible at the moment it happens rather than
			// only in the 700-package log tail. The message names the package AND the repository,
			// which `npm error notarget No matching version found for @girs/pango-1.0@^4.9.0` does not.
			console.log(`::error title=Incomplete closure::${describeGap(gap)}`);
			const plannedAt = plannedGroupOf.get(gap.dependency);
			throw new Error(
				`publish plan is wrong: ${gap.package} (group ${group.index}) needs ${gap.dependency}, ` +
					`which this run does not publish until group ${plannedAt}. Stopping rather than widening the window.`,
			);
		}
		if (verdict === "not-in-release") {
			console.log(`::error title=Incomplete closure::${describeGap(gap)}`);
			throw new Error(
				`${gap.package} needs ${gap.dependency}, which this release does not publish at all — ` +
					`no amount of waiting produces it, and every consumer gets npm error notarget.`,
			);
		}
		// Lag: this run published it in an earlier or the same group. A notice, not an error —
		// the set is right and the replica is behind. Phase 3 is what proves the end state.
		console.log(`::notice title=Not visible yet::${describeGap(gap)} (published earlier in this run)`);
	}

	return gaps;
}

// Phase 2: Publish what needs publishing, in topological order, checking the closure as we go
async function publishPendingPackages(
	packages: Package[],
	statuses: Map<string, PackageStatus>,
	config: Config,
	registry: LiveRegistry,
): Promise<{ alreadyPublished: number; processed: number; publishErrors: number; unresolved: number; published: Package[] }> {
	// The plan is built over the WHOLE set, not over the subset that needs publishing. A package
	// that is already on the registry is still a dependency, and leaving it out of the graph would
	// make the remaining order look like it had no constraints.
	const plan = planPublishOrder(packages);
	const plannedGroupOf = new Map<string, number>();
	for (const group of plan) for (const member of group.members) plannedGroupOf.set(member.name, group.index);
	const cycles = plan.filter((group) => group.members.length > 1);
	console.log(
		`🧭 Publish plan: ${plan.length} group(s) over ${packages.length} package(s)` +
			(cycles.length > 0
				? `, ${cycles.length} of them a dependency cycle: ` +
					cycles.map((group) => `{${group.members.map((m) => m.name).join(" ")}}`).join(", ")
				: ", no cycles"),
	);

	const isPublished = (pkg: Package) => {
		const status = statuses.get(pkg.name);
		return status?.exists === true && status.versions.includes(pkg.version);
	};

	const alreadyPublished = packages.filter(isPublished).length;
	const pendingGroups = plan
		.map((group) => ({ ...group, members: group.members.filter((member) => !isPublished(member)) }))
		.filter((group) => group.members.length > 0);
	const pendingCount = pendingGroups.reduce((n, group) => n + group.members.length, 0);

	console.log(`📊 ${alreadyPublished} already published, ${pendingCount} to publish\n`);

	if (pendingCount === 0) {
		return { alreadyPublished, processed: 0, publishErrors: 0, unresolved: 0, published: [] };
	}

	console.log(`🚀 Phase 2: Publishing ${pendingCount} packages in plan order (batch size: ${BATCH_SIZE})...\n`);

	const startedAt = Date.now();
	let processed = 0;
	// A failed PUBLISH and a closure not yet readable are different facts with different
	// remedies. One counter for both is what printed "76 of 792 package(s) failed to publish"
	let publishErrors = 0;
	let unresolved = 0;
	const published: Package[] = [];

	for (let i = 0; i < pendingGroups.length; ) {
		// Checked between groups, never mid-flight: a publish already in the air is finished and
		// counted. `--continue-on-error` governs a failing PACKAGE, not a run that no longer fits.
		if (sweepDeadlineExceeded(startedAt, Date.now(), DEADLINE_MIN)) {
			const left = pendingGroups.slice(i).reduce((n, group) => n + group.members.length, 0);
			throw new Error(
				`sweep deadline of ${DEADLINE_MIN} min reached with ${left} of ${pendingCount} package(s) ` +
					`unpublished (published: ${processed}, failed: ${publishErrors}). ` +
					"Raise NPM_DEADLINE_MIN, or find why the registry got slow.",
			);
		}

		const run = takeIndependentRun(pendingGroups, i, BATCH_SIZE);
		const members = run.flatMap((group) => group.members);
		i += run.length;

		console.log(`📦 Groups ${run[0].index}…${run[run.length - 1].index} (${members.map((p) => p.name).join(", ")})`);

		// `BATCH_SIZE` caps CONCURRENCY, not merely how many groups are taken. A group can hold
		// more than one package — the six-member cycle does — and publishing a whole group at once
		// would ignore the operator's pacing on exactly the group where it is least wanted:
		// release.yml runs at 1 because concurrent provenance signing draws E429.
		const batchResults = await pMap(
			members,
			async (pkg): Promise<BatchResult> => {
				const action = statuses.get(pkg.name)?.exists ? "update" : "create";
				try {
					if (config.dryRun) {
						console.log(`📦 [DRY RUN] Would ${action} ${pkg.name}@${pkg.version}`);
						return { result: `dry-run-${action}` as ProcessResult, pkg };
					}
					await publishPackageWithRetry(pkg, config);
					return { result: action === "update" ? "updated" : "created", pkg };
				} catch (error) {
					const message = error instanceof Error ? error.message : "Unknown error";
					console.error(`❌ ${pkg.name}: ${message}`);
					return { result: "error", pkg, error: message };
				}
			},
			BATCH_SIZE,
		);

		const failed: BatchResult[] = [];
		for (const result of batchResults) {
			if (result.result === "error") {
				publishErrors++;
				failed.push(result);
				continue;
			}
			processed++;
			published.push(result.pkg);
			registry.invalidate(result.pkg.name);
		}

		// Without `--continue-on-error` a failed publish stops the sweep — after the batch rather
		// than mid-flight, so the log says which of the concurrent publishes failed instead of
		// whichever lost the race to reject first.
		if (failed.length > 0 && !config.continueOnError) {
			throw new Error(`${failed.map((f) => `${f.pkg.name}: ${f.error}`).join("; ")}`);
		}

		// The gate. A dry run publishes nothing, so there is nothing yet for a consumer to resolve
		// and the check would be red on every unreleased version — it is skipped, and said so.
		if (!config.dryRun) {
			for (const group of run) {
				// Anything fatal already threw inside. What comes back is lag: published, not yet readable.
				unresolved += (await verifyGroupClosure(group, registry, plannedGroupOf)).length;
			}
		}

		// Elapsed and ETA on every line, because the run-level `updatedAt` GitHub exposes does NOT
		// advance while a job streams logs — from the API a sweep that is working looks exactly like
		// one that is wedged. Reading it that way is what got the 4.8.0 sweep cancelled at 38%.
		const done = processed + publishErrors;
		const progress = ((done / pendingCount) * 100).toFixed(1);
		const elapsedS = (Date.now() - startedAt) / 1000;
		const etaS = done > 0 ? (elapsedS / done) * (pendingCount - done) : 0;
		console.log(
			`✅ ${progress}% - Processed: ${processed}, Errors: ${publishErrors}` +
				` - elapsed ${formatDuration(elapsedS)}, ETA ${formatDuration(etaS)}\n`,
		);

		if (i < pendingGroups.length && BATCH_DELAY_MS > 0) {
			await sleep(BATCH_DELAY_MS);
		}
	}

	return { alreadyPublished, processed, publishErrors, unresolved, published };
}

/**
 * The last word, and the only one that is not our own: a REAL `npm install` of the whole
 * published set into an empty directory.
 *
 * Everything above asks the registry what it holds. This asks npm to actually resolve and
 * download it, which is a strictly stronger question and catches two things the packument
 * cannot. A range nobody can satisfy — the `notarget` a consumer sees — and a version that
 * exists in the metadata while its TARBALL does not: measured on `@girs/sdk-gnome-master@4.7.0`,
 * where publish reported success, `npm view` listed the version with an attestation, and
 * `npm install` answered E404.
 *
 * Measured cost for the full 716-package set on a cold cache: 5.5 minutes, 225 MB unpacked.
 * Against a two-hour sweep that is the cheapest proof available that the release is installable.
 */
/** npm's vocabulary for "that version is not there (yet)", as opposed to a broken artifact. */
const RESOLUTION_MISS = /ETARGET|E404|notarget|No matching version/i;
const INSTALL_ATTEMPTS = Math.max(1, getEnvInt("NPM_INSTALL_ATTEMPTS", 4));
const INSTALL_RETRY_MS = Math.max(1_000, getEnvInt("NPM_INSTALL_RETRY_MS", 60_000));

async function verifyInstallableClosure(packages: Package[], config: Config): Promise<void> {
	if (config.dryRun || packages.length === 0) return;

	const dir = await mkdtemp(join(tmpdir(), "girs-closure-"));
	console.log(`\n🔎 Phase 3: resolving the published set from an empty directory (${packages.length} roots)…`);

	try {
		for (let attempt = 1; attempt <= INSTALL_ATTEMPTS; attempt++) {
		await writeFile(
			join(dir, "package.json"),
			JSON.stringify(
				{
					name: "closure-probe",
					version: "1.0.0",
					private: true,
					dependencies: Object.fromEntries(packages.map((pkg) => [pkg.name, pkg.version])),
				},
				null,
				2,
			),
		);

		// Its own budget, not the per-publish one. Measured: 5.5 minutes for 716 packages on a cold
		// cache, against a 300 s default — so the probe would have timed out and reported the
		// release as uninstallable on the first run that used the default.
		const timeoutSec = Math.max(config.timeoutSec, 15 * 60);
		const { code, output } = await runNpm(
			["install", "--no-package-lock", "--no-audit", "--no-fund", "--ignore-scripts", "--registry", config.registry],
			dir,
			timeoutSec,
		);

		if (code !== 0) {
			// A resolution miss right after a publish is the registry, not the release. Measured on
			// v5.0.0: `@girs/matekbd-1.0` was readable 4m12s after its own publish returned success,
			// and three SDK channels were published cleanly and then reported uninstallable by this
			// very probe, seconds later. Retry a bounded number of times before believing it —
			// anything else, and any miss that outlives the budget, still fails.
			if (RESOLUTION_MISS.test(output) && attempt < INSTALL_ATTEMPTS) {
				console.log(
					`⏳ not resolvable yet (attempt ${attempt}/${INSTALL_ATTEMPTS}), waiting ${INSTALL_RETRY_MS / 1000}s…`,
				);
				await sleep(INSTALL_RETRY_MS);
				continue;
			}
			// npm's own words, because they are the words the consumer would have seen.
			console.log(`::error title=Published set is not installable::${output.trim().split("\n").slice(-3).join(" ")}`);
			throw new Error(`the published set does not install:\n${output.trim()}`);
		}
		console.log(`✅ the published set installs from an empty directory`);
		return;
		}
	} finally {
		await rm(dir, { recursive: true, force: true });
	}
}

/** Run npm somewhere and collect what it said. Used by the closure probe, not by publishing. */
function runNpm(args: string[], cwd: string, timeoutSec: number): Promise<{ code: number; output: string }> {
	return new Promise((resolve, reject) => {
		const proc = spawn("npm", args, { cwd, env: process.env, shell: true, stdio: "pipe" });
		let output = "";
		const timeoutId = setTimeout(() => {
			proc.kill("SIGKILL");
			reject(new Error(`npm ${args[0]} timed out after ${timeoutSec}s`));
		}, timeoutSec * 1000);
		proc.stdout.on("data", (chunk) => {
			output += chunk.toString();
		});
		proc.stderr.on("data", (chunk) => {
			output += chunk.toString();
		});
		proc.on("error", (err) => {
			clearTimeout(timeoutId);
			reject(err);
		});
		proc.on("exit", (code) => {
			clearTimeout(timeoutId);
			resolve({ code: code ?? 1, output });
		});
	});
}

/**
 * `--verify-only`: the gate, asked of the CURRENT registry instead of of a sweep in progress.
 *
 * Only packages that are actually published at their declared version are checked — an
 * unpublished one has no closure to be incomplete. Same grouping, so the same cycle exemption
 * applies; a member of a strongly connected component is checked only once every member of it
 * is up, because until then no order could have made it resolvable.
 */
async function verifyPublishedClosure(
	packages: Package[],
	statuses: Map<string, PackageStatus>,
	registry: LiveRegistry,
): Promise<ClosureGap[]> {
	const isPublished = (pkg: Package) => {
		const status = statuses.get(pkg.name);
		return status?.exists === true && status.versions.includes(pkg.version);
	};

	const plan = planPublishOrder(packages);
	const gaps: ClosureGap[] = [];
	let checked = 0;

	for (const group of plan) {
		if (!group.members.every(isPublished)) continue;
		checked += group.members.length;
		gaps.push(...(await closureGaps(group.members, registry, satisfies)));
	}

	console.log(`\n🔎 Verified the closure of ${checked} published package(s) in ${plan.length} group(s)`);
	for (const gap of gaps) console.log(`::error title=Incomplete closure::${describeGap(gap)}`);
	return gaps;
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
		const packages = await collectPackages(config.root);

		// Check for test packages with workspace dependencies
		await checkForTestPackages(packages);

		console.log(`🚀 Processing ${packages.length} packages...`);

		// Phase 1: Check all statuses in parallel
		const statuses = await checkAllStatuses(packages, config.registry);

		const registry = new LiveRegistry(config.registry);
		registry.seed(statuses);

		if (config.verifyOnly) {
			const gaps = await verifyPublishedClosure(packages, statuses, registry);
			if (gaps.length > 0) {
				throw new Error(
					`${gaps.length} unresolvable dependency/ies in the published set:\n  ` +
						gaps.map(describeGap).join("\n  "),
				);
			}
			console.log("✅ every published package resolves against the registry");
			return;
		}

		// Phase 2: Publish only what's needed, in topological order, gated after every group
		const { alreadyPublished, processed, publishErrors, unresolved } = await publishPendingPackages(
			packages,
			statuses,
			config,
			registry,
		);

		// Phase 3: prove the whole set installs. Skipped only after a sweep that FAILED to publish
		// something — that run is already red, and a five-minute install certain to fail adds nothing
		// but noise. A sweep whose only gaps were lag still runs it: the per-group gate deliberately
		// stops short of failing on lag, so this is the check that has the last word on the end state.
		if (processed > 0 && publishErrors === 0) {
			await verifyInstallableClosure(packages, config);
		}

		// Final summary
		console.log("📊 Final Summary:");
		console.log(`   ✅ Already published: ${alreadyPublished}`);
		console.log(`   🚀 ${config.dryRun ? "Would process" : "Processed"}: ${processed}`);
		console.log(`   ❌ Failed to publish: ${publishErrors}`);
		if (unresolved > 0) {
			console.log(`   ⏳ Published but not yet readable when checked: ${unresolved}`);
		}
		console.log(`   📋 Total: ${alreadyPublished + processed + publishErrors}`);

		// `--continue-on-error` governs whether the SWEEP stops at the first
		// failure. It never governed whether failure is REPORTED, and reading it
		// that way is how this script printed "completed successfully" and exited
		// 0 over a run in which every single publish had failed. The workflow
		// passes the flag, so that green check was one broken credential away at
		// all times: a release job whose whole job is publishing, reporting
		// success having published nothing.
		if (publishErrors > 0) {
			throw new Error(
				`${publishErrors} of ${publishErrors + processed} package(s) failed to publish` +
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
