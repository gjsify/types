#!/usr/bin/env node
// Decides, for ONE SDK channel, whether it has to be rebuilt and which version the rebuild
// gets. Split from the workflow on purpose: this is the decision that makes a channel silently
// stale (skip when it should have built) or a release silently empty (publish a version that
// already exists, which `--tolerate-republish` reports as success), so it is a program with a
// test rather than a shell expression inside a YAML step.
//
// There is deliberately NO state file. The registry is the state: the published manifest of a
// channel carries the SDK commit it was generated from and the generator that produced it, so
// the question "is this channel current?" is answered by the artifact itself and cannot drift
// away from a checked-in copy of the answer.
//
// Usage:
//   node plan.mjs --package @girs/sdk-gnome-50 --sdk-commit <hex> --generator 4.6.0
//   → {"rebuild":true,"version":"4.6.0","reason":"never published"} on stdout,
//     and the same fields appended to $GITHUB_OUTPUT when running in Actions.

import { appendFileSync, realpathSync } from "node:fs";
import { pathToFileURL } from "node:url";

const REGISTRY = process.env.NPM_REGISTRY || "https://registry.npmjs.org";

/**
 * @param {{sdk?: {commit?: string}, generator?: string} | null} published the manifest npm
 *   currently serves for this channel, or null when the package does not exist yet
 * @param {string} sdkCommit the flatpak commit of the SDK this run resolved
 * @param {string} generatorVersion the ts-for-gir version this run will use
 * @returns {{rebuild: boolean, reason: string}}
 */
export function decide(published, sdkCommit, generatorVersion) {
  if (!published) return { rebuild: true, reason: "never published" };
  if (published.sdk?.commit !== sdkCommit) {
    return { rebuild: true, reason: `SDK moved: ${published.sdk?.commit ?? "unknown"} → ${sdkCommit}` };
  }
  if (published.generator !== generatorVersion) {
    return { rebuild: true, reason: `generator moved: ${published.generator ?? "unknown"} → ${generatorVersion}` };
  }
  return { rebuild: false, reason: `up to date at ${sdkCommit.slice(0, 12)}` };
}

/**
 * The channel's version line is the generator's `major.minor` with a build counter for its
 * patch, because the two move independently: an SDK updates inside a GNOME cycle without the
 * generator changing, and the generator releases without the SDK moving. Reusing the
 * generator's full version would make the second case unpublishable.
 *
 * @param {string[]} publishedVersions every version npm already serves for this package
 * @param {string} generatorVersion
 * @returns {string}
 */
export function nextVersion(publishedVersions, generatorVersion) {
  const match = /^(\d+)\.(\d+)\./.exec(generatorVersion);
  if (!match) throw new Error(`generator version is not semver: ${generatorVersion}`);
  const [, major, minor] = match;

  // A constant pattern, compared field by field, rather than one built from `generatorVersion`.
  // Building it would be a regex assembled from an argument — and the escaping that made it
  // safe, `line.replace(".", "\\.")`, replaces only the FIRST dot, so it was one input away
  // from meaning something else than it read.
  const patches = publishedVersions
    .map((version) => /^(\d+)\.(\d+)\.(\d+)$/.exec(version))
    .filter((found) => found !== null && found[1] === major && found[2] === minor)
    .map((found) => Number.parseInt(found[3], 10));

  return patches.length === 0
    ? `${major}.${minor}.0`
    : `${major}.${minor}.${Math.max(...patches) + 1}`;
}

/**
 * @param {string} packageName
 * @returns {Promise<{versions: string[], latest: object | null}>}
 */
export async function readRegistry(packageName) {
  const response = await fetch(`${REGISTRY}/${encodeURIComponent(packageName)}`);
  if (response.status === 404) return { versions: [], latest: null };
  if (!response.ok) {
    throw new Error(`registry returned ${response.status} for ${packageName}`);
  }
  const packument = await response.json();
  const versions = Object.keys(packument.versions ?? {});
  const latestTag = packument["dist-tags"]?.latest;
  return { versions, latest: latestTag ? (packument.versions[latestTag] ?? null) : null };
}

function argValue(name) {
  const at = process.argv.indexOf(`--${name}`);
  if (at < 0 || !process.argv[at + 1]) throw new Error(`missing --${name}`);
  return process.argv[at + 1];
}

async function main() {
  const packageName = argValue("package");
  const sdkCommit = argValue("sdk-commit");
  const generatorVersion = argValue("generator");

  const { versions, latest } = await readRegistry(packageName);
  const { rebuild, reason } = decide(latest, sdkCommit, generatorVersion);
  const version = rebuild ? nextVersion(versions, generatorVersion) : (latest?.version ?? "");

  const plan = { rebuild, version, reason };
  console.log(JSON.stringify(plan));

  if (process.env.GITHUB_OUTPUT) {
    appendFileSync(
      process.env.GITHUB_OUTPUT,
      `rebuild=${rebuild}\nversion=${version}\nreason=${reason}\n`,
    );
  }
}

// Run as a program, importable as a module: the test imports `decide` and `nextVersion`
// without the CLI trying to reach the registry.
if (process.argv[1] && import.meta.url === pathToFileURL(realpathSync(process.argv[1])).href) {
  await main();
}
