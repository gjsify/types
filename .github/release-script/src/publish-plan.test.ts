/**
 * The two halves of the publish mechanism, held to cases that must go BOTH ways.
 *
 * The point of this file is the negative arm. A closure gate that has never been red is not a
 * gate — and this one has a historical set to be red on: `fixtures/girs-4.9.0.json` records the
 * dependency edges of all 716 `@girs/*` packages of v4.9.0 together with the instant each of
 * them actually reached the registry. Replaying that recorded sequence through the REAL gate
 * (not a reimplementation of it) is the discriminator:
 *
 *   - in the order v4.9.0 actually went out: 508 packages published with an incomplete closure
 *   - in the order `planPublishOrder` produces:                                              0
 *
 * A gate that reports 0 on both is measuring the END state, which was correct at 00:23Z and has
 * been correct at the end of every release ever run here. A gate that reports non-zero on both
 * does not distinguish sorted from unsorted, and gets switched off after the second false red.
 *
 * The fixture is frozen on purpose. It is a recorded incident, like `CLASSIFIER_VECTORS` in
 * index.ts — regenerating it from the working tree at test time would make the expected numbers
 * drift with the next release and quietly stop testing the incident.
 */

import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { test } from "node:test";
import { fileURLToPath } from "node:url";
import { satisfies } from "semver";

import {
	closureGaps,
	classifyGap,
	formatDuration,
	describeGap,
	type PlannablePackage,
	planPublishOrder,
	type PublishGroup,
	type RegistryView,
	runtimeDependencies,
	stronglyConnectedComponents,
	sweepDeadlineExceeded,
	takeIndependentRun,
} from "./publish-plan.ts";

// --- the recorded release ---------------------------------------------------------------

interface Fixture {
	release: string;
	packages: Record<string, { published: string; dependencies: string[] }>;
}

const FIXTURE = JSON.parse(
	readFileSync(fileURLToPath(new URL("../fixtures/girs-4.9.0.json", import.meta.url)), "utf-8"),
) as Fixture;

const scoped = (name: string) => `@girs/${name}`;

const RECORDED_PACKAGES: PlannablePackage[] = Object.entries(FIXTURE.packages).map(([name, entry]) => ({
	name: scoped(name),
	version: FIXTURE.release,
	// Every edge in the v4.9.0 tree is a caret on the release version — measured: 7637 of 7637.
	dependencies: Object.fromEntries(entry.dependencies.map((dep) => [scoped(dep), `^${FIXTURE.release}`])),
}));

const PUBLISHED_AT = new Map(
	Object.entries(FIXTURE.packages).map(([name, entry]) => [scoped(name), Date.parse(entry.published)]),
);

/** The registry as it looked once `published` had been uploaded and nothing else. */
function registryHolding(published: Set<string>, version = FIXTURE.release): RegistryView {
	return {
		async publishedVersions(name: string) {
			return published.has(name) ? [version] : null;
		},
	};
}

/** Run the real gate over a sequence of groups, publishing each one before checking it. */
async function replay(order: PublishGroup[]) {
	const published = new Set<string>();
	const gaps = [];
	for (const group of order) {
		for (const member of group.members) published.add(member.name);
		gaps.push(...(await closureGaps(group.members, registryHolding(published), satisfies)));
	}
	return { gaps, offenders: new Set(gaps.map((gap) => gap.package)) };
}

/** The same groups, sequenced by the instant each one finished under the recorded release. */
function inRecordedOrder(plan: PublishGroup[]): PublishGroup[] {
	const finishedAt = (group: PublishGroup) =>
		Math.max(...group.members.map((member) => PUBLISHED_AT.get(member.name) as number));
	return [...plan].sort((a, b) => finishedAt(a) - finishedAt(b));
}

// --- the graph --------------------------------------------------------------------------

test("the recorded release is the whole set and every edge lands inside it", () => {
	assert.equal(RECORDED_PACKAGES.length, 716);
	const names = new Set(RECORDED_PACKAGES.map((pkg) => pkg.name));
	for (const pkg of RECORDED_PACKAGES) {
		for (const dep of Object.keys(pkg.dependencies)) {
			assert.ok(names.has(dep), `${pkg.name} depends on ${dep}, which the release does not contain`);
		}
	}
});

test("the @girs graph is cyclic, and the cycle is six namespaces wide", () => {
	// Not a hard-coded pair. GIR namespaces reference each other, and the next set can bring a
	// different cycle; what is asserted is that the components are FOUND, and that this one is
	// found whole — a gate that knew only about glib/gobject would exempt four members too few.
	const plan = planPublishOrder(RECORDED_PACKAGES);
	const cyclic = plan.filter((group) => group.members.length > 1);
	assert.equal(cyclic.length, 1);
	assert.deepEqual(
		cyclic[0].members.map((member) => member.name).sort(),
		["@girs/cairo-1.0", "@girs/gio-2.0", "@girs/gjs", "@girs/glib-2.0", "@girs/gmodule-2.0", "@girs/gobject-2.0"],
	);
	// It has nothing outside itself to wait for, so it goes first.
	assert.equal(cyclic[0].index, 0);
});

test("the plan covers every package exactly once", () => {
	const plan = planPublishOrder(RECORDED_PACKAGES);
	const seen = plan.flatMap((group) => group.members.map((member) => member.name));
	assert.equal(seen.length, RECORDED_PACKAGES.length);
	assert.equal(new Set(seen).size, RECORDED_PACKAGES.length);
	assert.equal(plan.length, 711);
});

test("the plan is deterministic — a resumed release republishes in the order it started in", () => {
	const a = planPublishOrder(RECORDED_PACKAGES).map((g) => g.members.map((m) => m.name).join("+"));
	const b = planPublishOrder([...RECORDED_PACKAGES].reverse()).map((g) => g.members.map((m) => m.name).join("+"));
	assert.deepEqual(a, b);
});

test("no group is planned before something it depends on", () => {
	const plan = planPublishOrder(RECORDED_PACKAGES);
	const groupOf = new Map<string, number>();
	for (const group of plan) for (const member of group.members) groupOf.set(member.name, group.index);
	for (const group of plan) {
		for (const member of group.members) {
			for (const dep of Object.keys(member.dependencies)) {
				const at = groupOf.get(dep);
				if (at === undefined) continue;
				assert.ok(at <= group.index, `${member.name} (group ${group.index}) needs ${dep} (group ${at})`);
			}
		}
	}
});

// --- the gate, both arms ----------------------------------------------------------------

test("NEGATIVE CONTROL: replaying the real v4.9.0 order turns the gate red 508 times", async () => {
	const { gaps, offenders } = await replay(inRecordedOrder(planPublishOrder(RECORDED_PACKAGES)));
	assert.equal(offenders.size, 508);
	assert.equal(gaps.length, 3363);
	// The one the consumer hit: adw-1 went out first and named pango-1.0, 96 minutes early.
	assert.ok(
		gaps.some((gap) => gap.package === "@girs/adw-1" && gap.dependency === "@girs/pango-1.0"),
		"the gap gjsify's e2e legs died on is not among the findings",
	);
	// And the members of the cycle are NOT among them: no order can fix an intra-component edge,
	// so a gate that reported them would be red on a correct release.
	for (const member of ["@girs/glib-2.0", "@girs/gobject-2.0", "@girs/cairo-1.0", "@girs/gjs"]) {
		assert.ok(!offenders.has(member), `${member} is a cycle member and must be exempt`);
	}
});

test("POSITIVE CONTROL: the planned order turns the gate red zero times", async () => {
	const { gaps } = await replay(planPublishOrder(RECORDED_PACKAGES));
	assert.deepEqual(gaps, []);
});

test("the 16 packages of the incident report: 7 red replayed, 0 planned", async () => {
	// The incident report counted 12, exempting only glib↔gobject. The component is six wide, so
	// cairo-1.0, gio-2.0, gjs, gmodule-2.0 are exempt too — 12 − 5 = 7. The difference IS the
	// finding: an exemption list written by hand is five packages short of the one Tarjan finds.
	const sample = new Set(
		[
			"adw-1", "cairo-1.0", "freetype2-2.0", "gdk-4.0", "gdkpixbuf-2.0", "gio-2.0", "gjs", "glib-2.0",
			"gmodule-2.0", "gobject-2.0", "graphene-1.0", "gsk-4.0", "gtk-4.0", "harfbuzz-0.0", "pango-1.0",
			"pangocairo-1.0",
		].map(scoped),
	);
	const subset = RECORDED_PACKAGES.filter((pkg) => sample.has(pkg.name)).map((pkg) => ({
		...pkg,
		dependencies: Object.fromEntries(Object.entries(pkg.dependencies).filter(([dep]) => sample.has(dep))),
	}));
	const plan = planPublishOrder(subset);
	assert.equal((await replay(inRecordedOrder(plan))).offenders.size, 7);
	assert.equal((await replay(plan)).gaps.length, 0);
});

test("a set that is half on the registry is caught, and the gap names the missing sibling", async () => {
	const group: PlannablePackage[] = [
		{ name: "@girs/adw-1", version: "4.9.0", dependencies: { "@girs/gtk-4.0": "^4.9.0", "@girs/pango-1.0": "^4.9.0" } },
	];
	const gaps = await closureGaps(group, registryHolding(new Set(["@girs/gtk-4.0"])), satisfies);
	assert.equal(gaps.length, 1);
	assert.deepEqual(
		{ package: gaps[0].package, dependency: gaps[0].dependency, reason: gaps[0].reason },
		{ package: "@girs/adw-1", dependency: "@girs/pango-1.0", reason: "absent" },
	);
	assert.match(describeGap(gaps[0]), /adw-1 declares @girs\/pango-1\.0@\^4\.9\.0/);
});

test("a sibling that exists at the WRONG version is a gap too, and says so differently", async () => {
	// The failure a consumer sees as `notarget No matching version found` — the package is there,
	// the version is not. Reported apart from "absent" because the two have different causes:
	// one is an ordering defect, the other a partially bumped tree.
	const group: PlannablePackage[] = [
		{ name: "@girs/adw-1", version: "4.9.0", dependencies: { "@girs/pango-1.0": "^4.9.0" } },
	];
	const registry: RegistryView = { async publishedVersions() { return ["4.7.0", "4.8.0"]; } };
	const gaps = await closureGaps(group, registry, satisfies);
	assert.equal(gaps.length, 1);
	assert.equal(gaps[0].reason, "unsatisfied");
	assert.deepEqual(gaps[0].available, ["4.7.0", "4.8.0"]);
	assert.match(describeGap(gaps[0]), /none matching/);
});

test("edges inside a group are exempt; edges leaving it are not", async () => {
	const group: PlannablePackage[] = [
		{ name: "a", version: "1.0.0", dependencies: { b: "^1.0.0", outside: "^1.0.0" } },
		{ name: "b", version: "1.0.0", dependencies: { a: "^1.0.0" } },
	];
	const gaps = await closureGaps(group, registryHolding(new Set(["a", "b"])), satisfies);
	assert.deepEqual(
		gaps.map((gap) => gap.dependency),
		["outside"],
	);
});

// --- the pieces -------------------------------------------------------------------------

test("a two-node cycle is one group, and a self-edge does not become one", () => {
	const plan = planPublishOrder([
		{ name: "a", version: "1", dependencies: { b: "*" } },
		{ name: "b", version: "1", dependencies: { a: "*" } },
		{ name: "c", version: "1", dependencies: { c: "*", a: "*" } },
	]);
	assert.deepEqual(plan.map((g) => g.members.map((m) => m.name)), [["a", "b"], ["c"]]);
});

test("a dependency the release does not publish never constrains the order", () => {
	// It cannot: nothing in this run publishes it. `closureGaps` still asks the registry for it,
	// which is the half that would catch a sibling that was never published at all.
	const plan = planPublishOrder([
		{ name: "a", version: "1", dependencies: { typescript: "^5.9.2" } },
		{ name: "b", version: "1", dependencies: { a: "*" } },
	]);
	assert.deepEqual(plan.map((g) => g.members.map((m) => m.name)), [["a"], ["b"]]);
});

test("devDependencies are not part of the order or the closure", () => {
	assert.deepEqual(
		runtimeDependencies({
			dependencies: { "@girs/glib-2.0": "^4.9.0" },
			devDependencies: { typescript: "*" },
			peerDependencies: { "@girs/gjs": "^4.9.0" },
		}),
		{ "@girs/glib-2.0": "^4.9.0", "@girs/gjs": "^4.9.0" },
	);
});

test("components come back in an order that already respects the edges", () => {
	const graph = new Map([
		["leaf", new Set<string>()],
		["mid", new Set(["leaf"])],
		["top", new Set(["mid"])],
	]);
	assert.deepEqual(stronglyConnectedComponents(graph), [["leaf"], ["mid"], ["top"]]);
});

test("Tarjan does not overflow on a deep chain", () => {
	// Recursion here would die on a graph whose depth is an input. 20 000 is well past anything
	// GNOME ships and well past the default stack.
	const graph = new Map<string, Set<string>>();
	for (let i = 0; i < 20_000; i++) graph.set(`n${i}`, new Set(i > 0 ? [`n${i - 1}`] : []));
	assert.equal(stronglyConnectedComponents(graph).length, 20_000);
});

// --- batching -----------------------------------------------------------------------------

test("a batch never carries a group beside one it depends on", () => {
	// The pacing knob must not be able to undo the plan. Two independent leaves batch; the
	// dependent that follows them does not join, however much room the batch has left.
	const plan = planPublishOrder([
		{ name: "leaf-a", version: "1", dependencies: {} },
		{ name: "leaf-b", version: "1", dependencies: {} },
		{ name: "top", version: "1", dependencies: { "leaf-a": "*", "leaf-b": "*" } },
	]);
	assert.deepEqual(
		takeIndependentRun(plan, 0, 5).map((group) => group.members.map((m) => m.name)),
		[["leaf-a"], ["leaf-b"]],
	);
	assert.deepEqual(
		takeIndependentRun(plan, 2, 5).map((group) => group.members.map((m) => m.name)),
		[["top"]],
	);
});

test("a batch size of one is one group, independent or not", () => {
	const plan = planPublishOrder([
		{ name: "leaf-a", version: "1", dependencies: {} },
		{ name: "leaf-b", version: "1", dependencies: {} },
	]);
	assert.equal(takeIndependentRun(plan, 0, 1).length, 1);
});

test("over the real release, no batch ever contains a dependency of its own members", () => {
	const plan = planPublishOrder(RECORDED_PACKAGES);
	for (let i = 0; i < plan.length; ) {
		const run = takeIndependentRun(plan, i, 5);
		const inRun = new Set(run.flatMap((group) => group.members.map((m) => m.name)));
		for (const group of run) {
			for (const member of group.members) {
				for (const dep of Object.keys(member.dependencies)) {
					const sameGroup = group.members.some((m) => m.name === dep);
					assert.ok(!inRun.has(dep) || sameGroup, `${member.name} batched beside its dependency ${dep}`);
				}
			}
		}
		i += run.length;
	}
});

// --- what a surviving gap means ---------------------------------------------------------

test("a gap on a dependency this run already published is lag, not a defect", () => {
	const planned = new Map([["@girs/gio-2.0", 0]]);
	const gap = { package: "@girs/accounts-1.0", dependency: "@girs/gio-2.0", range: "^5.0.0", reason: "absent" as const };
	assert.equal(classifyGap(gap, planned, 1), "lag");
	// Same group: the six-member cycle, whose members cannot see each other at their own instant.
	assert.equal(classifyGap(gap, planned, 0), "lag");
});

test("a gap on a dependency planned LATER is an ordering defect", () => {
	const planned = new Map([["@girs/gssdp-1.6", 9]]);
	const gap = { package: "@girs/rygelcore-2.8", dependency: "@girs/gssdp-1.6", range: "^5.0.0", reason: "absent" as const };
	assert.equal(classifyGap(gap, planned, 4), "ordering-defect");
});

test("a gap on something the release never publishes is permanent", () => {
	const gap = { package: "@girs/a-1.0", dependency: "@girs/ghost-9.9", range: "^5.0.0", reason: "absent" as const };
	assert.equal(classifyGap(gap, new Map(), 0), "not-in-release");
});

test("the three verdicts are distinguishable — the same gap, three plans", () => {
	const gap = { package: "p", dependency: "d", range: "^5.0.0", reason: "absent" as const };
	const verdicts = [
		classifyGap(gap, new Map([["d", 0]]), 1),
		classifyGap(gap, new Map([["d", 2]]), 1),
		classifyGap(gap, new Map(), 1),
	];
	assert.deepEqual(verdicts, ["lag", "ordering-defect", "not-in-release"]);
});


// --- the sweep's own clock ----------------------------------------------------------------

test("the deadline fires only after the budget, and zero disables it", () => {
	const start = 1_000_000;
	assert.equal(sweepDeadlineExceeded(start, start + 299 * 60_000, 300), false);
	assert.equal(sweepDeadlineExceeded(start, start + 301 * 60_000, 300), true);
	// Zero is off, not "expire immediately" — which is what a plain `now > start + 0` would do.
	assert.equal(sweepDeadlineExceeded(start, start + 10 * 60 * 60_000, 0), false);
});

test("durations read at a glance across the three scales", () => {
	assert.deepEqual(
		[0, 93, 432, 8040].map(formatDuration),
		["0s", "1m33s", "7m12s", "2h14m"],
	);
});
