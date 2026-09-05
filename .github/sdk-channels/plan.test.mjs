// The two decisions that can fail silently, held to cases that must go both ways.
//
// A channel that skips when it should build goes stale without a single red run, and a rebuild
// that reuses an existing version is refused by npm as EPUBLISHCONFLICT — or, with a tolerant
// publisher, reported as success while publishing nothing. Neither shows up in a log you would
// read on a green run, so they are tested rather than watched.

import assert from "node:assert/strict";
import { test } from "node:test";

import { decide, nextVersion } from "./plan.mjs";

const SDK = "c87589be513db588f67de1a27879315dc9697ed2bd8467bd3d55860bf4da2f42";
const OTHER = "0000000000000000000000000000000000000000000000000000000000000000";

test("a channel that was never published is built", () => {
  const { rebuild, reason } = decide(null, SDK, "4.6.0");
  assert.equal(rebuild, true);
  assert.match(reason, /never published/);
});

test("a channel whose SDK and generator are unchanged is skipped", () => {
  const published = { sdk: { commit: SDK }, generator: "4.6.0" };
  assert.equal(decide(published, SDK, "4.6.0").rebuild, false);
});

test("a moved SDK rebuilds, even with the same generator", () => {
  const published = { sdk: { commit: OTHER }, generator: "4.6.0" };
  const { rebuild, reason } = decide(published, SDK, "4.6.0");
  assert.equal(rebuild, true);
  assert.match(reason, /SDK moved/);
});

test("a moved generator rebuilds, even with the same SDK", () => {
  const published = { sdk: { commit: SDK }, generator: "4.5.0" };
  const { rebuild, reason } = decide(published, SDK, "4.6.0");
  assert.equal(rebuild, true);
  assert.match(reason, /generator moved/);
});

test("a manifest without provenance rebuilds rather than assuming it matches", () => {
  assert.equal(decide({}, SDK, "4.6.0").rebuild, true);
});

test("the first build of a generator line starts at .0", () => {
  assert.equal(nextVersion([], "4.6.0"), "4.6.0");
  assert.equal(nextVersion(["4.5.0", "4.5.1"], "4.6.0"), "4.6.0");
});

test("a further build of the same line takes the next free patch", () => {
  assert.equal(nextVersion(["4.6.0"], "4.6.0"), "4.6.1");
  assert.equal(nextVersion(["4.6.0", "4.6.1", "4.6.2"], "4.6.3"), "4.6.3");
});

test("the counter follows the highest patch, not the count", () => {
  // A gap (a yanked or failed publish) must not hand out a version that already exists.
  assert.equal(nextVersion(["4.6.0", "4.6.3"], "4.6.0"), "4.6.4");
});

test("versions from other lines and non-releases do not occupy the line", () => {
  // A prerelease of the same number is a different version, so `4.6.0` is still free.
  assert.equal(nextVersion(["4.5.9", "4.6.0-rc.1", "not-a-version"], "4.6.0"), "4.6.0");
});

test("a generator version that is not semver fails loudly", () => {
  assert.throws(() => nextVersion([], "latest"), /not semver/);
});
