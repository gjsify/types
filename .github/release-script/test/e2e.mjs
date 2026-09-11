/**
 * The publisher, end to end, against a real npm registry that is not npmjs.org.
 *
 * `publish-plan.test.ts` proves the PLAN and the GATE on the recorded v4.9.0 graph. It cannot
 * prove the wiring: that the plan actually decides what `npm publish` is called on, that the
 * gate is reached after each group, and that a gap makes the process exit non-zero. That is what
 * this does — a throwaway Verdaccio on localhost, a five-package tree whose alphabetical order
 * is the REVERSE of its topological one, and four arms that must not all go the same way.
 *
 *   1  publish → exits 0, and the registry's own timestamps say leaf before mid before top
 *   2  publish a tree with a sibling nobody publishes → exits 1 at the group that declares it
 *   3  --verify-only against a HAND-MADE half-published registry → exits 1, names what is missing
 *   4  --verify-only against the complete set → exits 0
 *
 * Arm 3 is the v4.9.0 window itself, reproduced: one package on the registry naming siblings that
 * are not there. Arm 4 is what stops arm 3 from being "the gate is always red".
 *
 * Run: npm run test:e2e   (needs network once, to fetch verdaccio)
 */

import assert from "node:assert/strict";
import { spawn, spawnSync } from "node:child_process";
import { createServer } from "node:net";
import { createHash } from "node:crypto";
import { mkdtemp, rm, writeFile } from "node:fs/promises";
import { mkdirSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { fileURLToPath } from "node:url";

const PUBLISHER = fileURLToPath(new URL("../src/index.ts", import.meta.url));
/**
 * A port the OS just told us was free, not the Verdaccio default.
 *
 * 4873 is what every other Verdaccio on the machine also binds, and a stranger on that port would
 * answer every request in this file with ITS storage — a run that looks like a result. Measured
 * while writing this: an orphan from a killed run kept rejecting logins for a setting the current
 * config had already fixed. The port guard below stays anyway; this only makes a collision rare.
 */
function freePort() {
	return new Promise((resolve, reject) => {
		const server = createServer();
		server.on("error", reject);
		server.listen(0, "127.0.0.1", () => {
			const { port } = server.address();
			server.close(() => resolve(port));
		});
	});
}

const PORT = Number(process.env.E2E_PORT ?? (await freePort()));
const REGISTRY = `http://localhost:${PORT}`;
// A fresh scope per run, so a leftover Verdaccio store can never make an arm pass by accident.
const SCOPE = `@e2e-${Date.now().toString(36)}`;
const USER = "e2e";
const PASSWORD = "e2e-password";

/** Verdaccio with no uplink: every answer comes from this run, none from the internet. */
const CONFIG = `
storage: ./storage
auth:
  htpasswd:
    file: ./htpasswd
    # A positive limit is what ALLOWS the PUT below to register a user; -1 disables it.
    max_users: 1000
uplinks: {}
packages:
  '**':
    access: $all
    publish: $all
    unpublish: $all
log: { type: stdout, format: pretty, level: warn }
`;

function manifest(dir, name, dependencies) {
	mkdirSync(dir, { recursive: true });
	return writeFile(
		join(dir, "package.json"),
		JSON.stringify({ name: `${SCOPE}/${name}`, version: "1.0.0", private: false, dependencies }, null, 2),
	);
}

/**
 * The tree. Alphabetically `a-top` comes first and depends on everything, which is exactly the
 * shape that made v4.9.0 publish `@girs/adw-1` 96 minutes before `@girs/pango-1.0`.
 */
async function writeTree(root, { withGhost = false } = {}) {
	const dep = (n) => ({ [`${SCOPE}/${n}`]: "^1.0.0" });
	await manifest(join(root, "a-top"), "a-top", { ...dep("b-mid"), ...dep("c-leaf") });
	await manifest(join(root, "b-mid"), "b-mid", dep("c-leaf"));
	await manifest(join(root, "c-leaf"), "c-leaf", {});
	// A real cycle, so the run exercises the component grouping rather than only the DAG path.
	await manifest(join(root, "cyc-x"), "cyc-x", dep("cyc-y"));
	await manifest(join(root, "cyc-y"), "cyc-y", dep("cyc-x"));
	if (withGhost) {
		// Declares a sibling that no run publishes: the "absent" half of a broken closure.
		await manifest(join(root, "d-broken"), "d-broken", dep("ghost"));
	}
}

function run(cmd, args, opts = {}) {
	const result = spawnSync(cmd, args, { encoding: "utf-8", ...opts });
	return { code: result.status ?? 1, out: `${result.stdout ?? ""}${result.stderr ?? ""}` };
}

/** Written once Verdaccio has issued a token; every npm in this file reads it. */
let NPMRC;

function npmEnv(extra = {}) {
	return {
		...process.env,
		npm_config_userconfig: NPMRC,
		NPM_REGISTRY: REGISTRY,
		CI: "true",
		NPM_BATCH_SIZE: "1",
		NPM_BATCH_DELAY_MS: "0",
		NPM_PUBLISH_DELAY_MS: "0",
		// The lag budget exists for registry replicas catching up. A gap this file creates on
		// purpose is permanent, so waiting the production minute for it would only make the run
		// slow — the behaviour under test is that the budget EXPIRES and the run goes red.
		NPM_CLOSURE_LAG_MS: "2000",
		NPM_CLOSURE_LAG_STEP_MS: "500",
		...extra,
	};
}

function publisher(root, extra, env = {}) {
	return run(
		process.execPath,
		["--experimental-strip-types", "--experimental-transform-types", "--no-warnings", PUBLISHER, ...extra],
		{ cwd: root, env: npmEnv(env) },
	);
}

/**
 * Register a user and keep the token Verdaccio hands back.
 *
 * `publish: $all` is not enough on its own: the npm CLI refuses with ENEEDAUTH before it ever
 * asks the registry, so the e2e needs a real credential rather than an open registry.
 */
async function authenticate(dir) {
	// Basic auth, because the user already exists in the seeded htpasswd file: without it
	// Verdaccio reads the same PUT as a REGISTRATION and answers 409.
	const basic = Buffer.from(`${USER}:${PASSWORD}`).toString("base64");
	const response = await fetch(`${REGISTRY}/-/user/org.couchdb.user:${USER}`, {
		method: "PUT",
		headers: { "content-type": "application/json", authorization: `Basic ${basic}` },
		body: JSON.stringify({ name: USER, password: PASSWORD, type: "user" }),
	});
	const body = await response.json();
	if (!body.token) throw new Error(`verdaccio issued no token: ${response.status} ${JSON.stringify(body)}`);
	NPMRC = join(dir, ".npmrc");
	await writeFile(NPMRC, `registry=${REGISTRY}/\n//localhost:${PORT}/:_authToken=${body.token}\n`);
	return body.token;
}

/** When each version reached the registry, as the REGISTRY reports it — not as we remember it. */
async function publishedAt(name) {
	const response = await fetch(`${REGISTRY}/${encodeURIComponent(`${SCOPE}/${name}`)}`);
	if (!response.ok) return null;
	const packument = await response.json();
	return Date.parse(packument.time?.["1.0.0"] ?? 0) || null;
}

async function startVerdaccio(dir) {
	// A leftover Verdaccio on this port would answer every request in this file with ITS config
	// and ITS storage, and the run would look like a result. Measured while writing this: a
	// server from an earlier attempt kept rejecting logins for a setting the current config had
	// already fixed. Refuse the port rather than inherit a stranger.
	try {
		await fetch(`${REGISTRY}/-/ping`, { signal: AbortSignal.timeout(1000) });
		throw new Error(`something is already listening on ${REGISTRY} — stop it, or set E2E_PORT`);
	} catch (error) {
		if (error instanceof Error && error.message.includes("already listening")) throw error;
	}

	await writeFile(join(dir, "config.yaml"), CONFIG);
	// The user is seeded into the htpasswd file rather than registered over HTTP: Verdaccio 6
	// answers `PUT /-/user/...` for an unknown name with "user registration disabled" regardless
	// of `max_users`, and an e2e that needs a flag flipped on the server is an e2e that will
	// break on the next Verdaccio. `{SHA}` is base64(sha1(password)), the Apache htpasswd form.
	const digest = createHash("sha1").update(PASSWORD).digest("base64");
	await writeFile(join(dir, "htpasswd"), `${USER}:{SHA}${digest}\n`);
	// Its own process group, so the teardown below can take the `npx` wrapper AND the server it
	// spawned. Killing only the wrapper leaves a Verdaccio holding the port — which is how the
	// orphan that made the port guard necessary came to exist.
	const proc = spawn("npx", ["--yes", "verdaccio@6", "--config", join(dir, "config.yaml"), "--listen", String(PORT)], {
		cwd: dir,
		stdio: ["ignore", "pipe", "pipe"],
		detached: true,
	});
	const teardown = () => {
		try {
			process.kill(-proc.pid, "SIGKILL");
		} catch {
			/* already gone */
		}
	};
	proc.teardown = teardown;
	process.on("exit", teardown);
	for (const signal of ["SIGINT", "SIGTERM", "SIGHUP"]) process.on(signal, () => process.exit(1));
	proc.stdout.on("data", () => {});
	proc.stderr.on("data", () => {});

	for (let attempt = 0; attempt < 120; attempt++) {
		try {
			const response = await fetch(`${REGISTRY}/-/ping`, { signal: AbortSignal.timeout(1000) });
			if (response.ok || response.status === 404) return proc;
		} catch {
			/* not up yet */
		}
		await new Promise((resolve) => setTimeout(resolve, 500));
	}
	teardown();
	throw new Error("verdaccio did not come up within 60s");
}

const work = await mkdtemp(join(tmpdir(), "release-e2e-"));
let verdaccio;
let failures = 0;

const arm = (name, fn) => {
	try {
		const result = fn();
		return Promise.resolve(result).then(
			() => console.log(`✔ ${name}`),
			(error) => {
				failures++;
				console.error(`✖ ${name}\n  ${error?.message ?? error}`);
			},
		);
	} catch (error) {
		failures++;
		console.error(`✖ ${name}\n  ${error?.message ?? error}`);
		return Promise.resolve();
	}
};

try {
	verdaccio = await startVerdaccio(work);
	const token = await authenticate(work);
	console.log(`verdaccio up on ${REGISTRY}, scope ${SCOPE}`);

	// --- arm 1: the plan decides the order, and the registry agrees -------------------------
	const good = join(work, "good");
	await writeTree(good);
	const published = publisher(good, [], { NODE_AUTH_TOKEN: token });

	await arm("a tree whose alphabetical order is wrong publishes and exits 0", async () => {
		assert.equal(published.code, 0, published.out.slice(-2000));
		assert.match(published.out, /1 of them a dependency cycle/);
	});

	await arm("the registry's own timestamps say leaf, then mid, then top", async () => {
		const [leaf, mid, top] = await Promise.all([publishedAt("c-leaf"), publishedAt("b-mid"), publishedAt("a-top")]);
		assert.ok(leaf && mid && top, `not everything published: ${JSON.stringify({ leaf, mid, top })}`);
		assert.ok(leaf <= mid, `c-leaf (${leaf}) must not follow b-mid (${mid})`);
		assert.ok(mid <= top, `b-mid (${mid}) must not follow a-top (${top})`);
	});

	await arm("both members of the cycle are published, as one group", async () => {
		assert.ok(await publishedAt("cyc-x"));
		assert.ok(await publishedAt("cyc-y"));
	});

	// --- arm 2: a sibling nobody publishes stops the sweep ----------------------------------
	await arm("NEGATIVE: a package declaring an unpublished sibling exits 1 and names it", async () => {
		const broken = join(work, "broken");
		await writeTree(broken, { withGhost: true });
		const result = publisher(broken, [], { NODE_AUTH_TOKEN: token });
		assert.equal(result.code, 1, `expected a red run, got 0:\n${result.out.slice(-2000)}`);
		assert.match(result.out, /Incomplete closure/);
		assert.match(result.out, /ghost/);
	});

	// --- arm 3: the v4.9.0 window, reproduced by hand ---------------------------------------
	await arm("NEGATIVE: --verify-only is red on a half-published set, and says what is missing", async () => {
		const half = join(work, "half");
		const scope = `${SCOPE}-half`;
		mkdirSync(join(half, "a-top"), { recursive: true });
		mkdirSync(join(half, "c-leaf"), { recursive: true });
		await writeFile(
			join(half, "a-top", "package.json"),
			JSON.stringify({ name: `${scope}/a-top`, version: "1.0.0", dependencies: { [`${scope}/c-leaf`]: "^1.0.0" } }),
		);
		await writeFile(
			join(half, "c-leaf", "package.json"),
			JSON.stringify({ name: `${scope}/c-leaf`, version: "1.0.0" }),
		);
		// Publish ONLY the dependent — exactly what the registry held between 22:17Z and 23:53Z.
		const pushed = run("npm", ["publish", "--registry", REGISTRY, "--access", "public"], {
			cwd: join(half, "a-top"),
			env: npmEnv(),
		});
		assert.equal(pushed.code, 0, pushed.out.slice(-1500));

		const result = publisher(half, ["--verify-only"]);
		assert.equal(result.code, 1, `expected a red run, got 0:\n${result.out.slice(-2000)}`);
		assert.match(result.out, /Incomplete closure/);
		assert.match(result.out, /c-leaf/);
	});

	// --- arm 4: and green once the set is whole ---------------------------------------------
	await arm("POSITIVE: --verify-only is green on the complete set", async () => {
		const result = publisher(good, ["--verify-only"]);
		assert.equal(result.code, 0, result.out.slice(-2000));
		assert.match(result.out, /every published package resolves/);
	});
} finally {
	verdaccio?.teardown?.();
	await rm(work, { recursive: true, force: true });
}

if (failures > 0) {
	console.error(`\n${failures} arm(s) failed`);
	process.exit(1);
}
console.log("\nall arms behaved as they must");
