/**
 * The ORDER a multi-package release goes out in, and the invariant that order exists to hold.
 *
 * ## The incident
 *
 * v4.9.0 published all 716 `@girs/*` packages in the order `readdir` handed them back, which
 * is neither sorted nor topological. Measured against the registry's own `time` maps:
 * `@girs/abi-3.0` went out at 22:15:33Z and `@girs/xkl-1.0` at 00:23:15Z — a 128-minute sweep
 * in which **508 of the 716 packages were published before something they declare a dependency
 * on existed**. `@girs/adw-1` was first out of the door and depends on fifteen siblings,
 * `@girs/pango-1.0` among them, which appeared 96 minutes later.
 *
 * For those 128 minutes `npm install @girs/adw-1@4.9.0` found a package whose declared closure
 * was not on the registry. gjsify's e2e legs went red twice with
 *
 *     npm error notarget No matching version found for @girs/pango-1.0@^4.9.0
 *
 * — an error that names neither the package the consumer asked for nor the repository the cause
 * lives in. That is the expensive part: the failure surfaces in someone else's CI, an hour
 * later, looking like their bug.
 *
 * Exact pins would not have helped a consumer tracking this release, and they cost more than
 * they save — see `PUBLISHING.md` in ts-for-gir for the measurement. The order is the fix.
 *
 * ## The class
 *
 * "A multi-package release published in an order that is not topological." Not "pango was late".
 * The two halves below are the mechanism: {@link planPublishOrder} makes the order right, and
 * {@link closureGaps} proves it was right at each step — because an order that is correct today
 * and unchecked stops being correct the first time someone changes how packages are collected.
 *
 * ## Cycles are real here
 *
 * The `@girs` graph is NOT a DAG. Tarjan over the v4.9.0 tree finds exactly one non-trivial
 * strongly connected component, and it has six members:
 *
 *     cairo-1.0 · gio-2.0 · gjs · glib-2.0 · gmodule-2.0 · gobject-2.0
 *
 * GIR namespaces reference each other (GLib's GIR names GObject types and vice versa), so this
 * is a property of the input, not a generator defect. No publish order can make a cycle
 * member's closure complete at its own publish instant: whichever goes first necessarily points
 * at one that is not there yet.
 *
 * So the unit of both halves is the GROUP, not the package: each strongly connected component
 * publishes as one group, and the closure of its members is checked after the last of them,
 * with the edges INSIDE the group exempt. A gate that checked per package would be red on a
 * perfectly ordered release — and a gate that is red when the system is right gets switched off,
 * which is the same failure as a gate that is always green, with the sign flipped.
 *
 * The components are computed, never enumerated: the next GIR set can bring a different cycle,
 * and a hard-coded `glib/gobject` pair would see none of it.
 */

/** A package as the publisher sees it: a name, a version, and what it declares it needs. */
export interface PlannablePackage {
	name: string;
	version: string;
	/** Every RUNTIME dependency, name → range. devDependencies are not a consumer's problem. */
	dependencies: Record<string, string>;
}

/**
 * One publish unit. A single package in the common case; every member of a strongly connected
 * component when the graph has a cycle.
 */
export interface PublishGroup<T extends PlannablePackage = PlannablePackage> {
	/** Position in the plan, 0-based. Groups publish in ascending order. */
	index: number;
	members: T[];
}

/** A dependency that was not resolvable when the package declaring it was already published. */
export interface ClosureGap {
	/** The package whose closure is incomplete. */
	package: string;
	/** The dependency that is missing or unsatisfiable. */
	dependency: string;
	/** The range the package declares for it. */
	range: string;
	/** Why: nothing published under that name at all, or nothing that satisfies the range. */
	reason: "absent" | "unsatisfied";
	/** The versions the registry does have, when it has the package. */
	available?: string[];
}

const RUNTIME_DEPENDENCY_FIELDS = ["dependencies", "peerDependencies", "optionalDependencies"] as const;

/**
 * The runtime dependencies of a raw manifest, flattened into one map.
 *
 * `devDependencies` are deliberately absent: they are not installed for a consumer, so they
 * cannot make a published package unresolvable and they must not constrain the publish order.
 * Including them would also introduce cycles that are not real — which is what
 * `--topological-dev` warns about in the workspace tooling.
 */
export function runtimeDependencies(manifest: Record<string, unknown>): Record<string, string> {
	const out: Record<string, string> = {};
	for (const field of RUNTIME_DEPENDENCY_FIELDS) {
		const deps = manifest[field];
		if (!deps || typeof deps !== "object") continue;
		for (const [name, range] of Object.entries(deps as Record<string, unknown>)) {
			if (typeof range === "string") out[name] = range;
		}
	}
	return out;
}

/**
 * Strongly connected components, Tarjan, iterative.
 *
 * Iterative rather than recursive on purpose: the depth of this graph is an input, and a
 * release script that dies of a stack overflow on a deeper GIR set would fail in a way that
 * says nothing about the cause.
 *
 * Returned in reverse topological order — a component appears only after every component it
 * depends on, which is exactly the order a publisher wants.
 */
export function stronglyConnectedComponents(graph: Map<string, Set<string>>): string[][] {
	const index = new Map<string, number>();
	const low = new Map<string, number>();
	const onStack = new Set<string>();
	const stack: string[] = [];
	const components: string[][] = [];
	let counter = 0;

	for (const root of graph.keys()) {
		if (index.has(root)) continue;

		// Each frame is a node plus how far through its neighbours we have walked.
		const work: { node: string; edges: string[]; cursor: number }[] = [
			{ node: root, edges: [...(graph.get(root) ?? [])], cursor: 0 },
		];
		index.set(root, counter);
		low.set(root, counter);
		counter++;
		stack.push(root);
		onStack.add(root);

		while (work.length > 0) {
			const frame = work[work.length - 1];
			if (frame.cursor < frame.edges.length) {
				const next = frame.edges[frame.cursor++];
				if (!graph.has(next)) continue; // an edge out of the set constrains nothing here
				if (!index.has(next)) {
					index.set(next, counter);
					low.set(next, counter);
					counter++;
					stack.push(next);
					onStack.add(next);
					work.push({ node: next, edges: [...(graph.get(next) ?? [])], cursor: 0 });
				} else if (onStack.has(next)) {
					low.set(frame.node, Math.min(low.get(frame.node) as number, index.get(next) as number));
				}
				continue;
			}

			work.pop();
			const node = frame.node;
			if (low.get(node) === index.get(node)) {
				const component: string[] = [];
				let member: string;
				do {
					member = stack.pop() as string;
					onStack.delete(member);
					component.push(member);
				} while (member !== node);
				components.push(component.sort());
			}
			const parent = work[work.length - 1];
			if (parent) {
				low.set(parent.node, Math.min(low.get(parent.node) as number, low.get(node) as number));
			}
		}
	}

	return components;
}

/**
 * The publish plan: every package exactly once, in groups, each group after everything it needs.
 *
 * Deterministic for a given input. Two runs over the same tree produce the same plan, so a
 * release that has to be resumed republishes in the same order it started in.
 *
 * Only edges INSIDE the set constrain the order. A dependency on something this run does not
 * publish cannot be sequenced by this run — {@link closureGaps} still checks it, which is the
 * half that would catch a sibling that was never published at all.
 */
export function planPublishOrder<T extends PlannablePackage>(packages: T[]): PublishGroup<T>[] {
	const byName = new Map(packages.map((pkg) => [pkg.name, pkg]));
	const graph = new Map<string, Set<string>>();
	for (const pkg of packages) {
		graph.set(
			pkg.name,
			new Set(Object.keys(pkg.dependencies).filter((dep) => dep !== pkg.name && byName.has(dep))),
		);
	}

	const components = stronglyConnectedComponents(graph);
	const componentOf = new Map<string, number>();
	components.forEach((component, i) => {
		for (const member of component) componentOf.set(member, i);
	});

	// Condense to a DAG of components and walk it with Kahn, smallest key first. The tie-break
	// is what makes the plan reproducible: Tarjan's own output order depends on which node the
	// walk started at, and "reproducible" is the difference between a resumable release and a
	// second, differently-ordered sweep.
	const successors = components.map(() => new Set<number>());
	const indegree = components.map(() => 0);
	for (const [name, deps] of graph) {
		const from = componentOf.get(name) as number;
		for (const dep of deps) {
			const to = componentOf.get(dep) as number;
			if (to === from) continue;
			// `dep` must publish BEFORE `name`: the edge in the plan runs dep → name.
			if (successors[to].has(from)) continue;
			successors[to].add(from);
			indegree[from]++;
		}
	}

	const key = (i: number) => components[i][0];
	const ready = components.map((_, i) => i).filter((i) => indegree[i] === 0);
	ready.sort((a, b) => key(a).localeCompare(key(b)));

	const order: PublishGroup<T>[] = [];
	while (ready.length > 0) {
		const current = ready.shift() as number;
		order.push({
			index: order.length,
			members: components[current].map((name) => byName.get(name) as T),
		});
		const unlocked: number[] = [];
		for (const next of successors[current]) {
			if (--indegree[next] === 0) unlocked.push(next);
		}
		if (unlocked.length > 0) {
			ready.push(...unlocked);
			ready.sort((a, b) => key(a).localeCompare(key(b)));
		}
	}

	// Kahn terminating early means a cycle survived the condensation, which would mean Tarjan
	// was wrong. Say so rather than publish a plan that silently drops packages — a short plan
	// is a release that looks like it succeeded and left packages behind.
	const planned = order.reduce((n, group) => n + group.members.length, 0);
	if (planned !== packages.length) {
		throw new Error(
			`publish plan covers ${planned} of ${packages.length} packages — the component graph is still cyclic`,
		);
	}

	return order;
}

/**
 * The next run of groups that can go out together: consecutive in the plan AND independent of
 * one another.
 *
 * A publisher's batch size is a PACING knob — release.yml runs at 1, because concurrent
 * provenance signing draws E429 — and never a licence to publish a dependent beside its
 * dependency. Checking independence is what lets the knob keep its old meaning without
 * reintroducing the defect the plan exists to remove.
 *
 * Consecutive only: it stops at the first group that depends on the run so far rather than
 * scanning ahead for another independent one, because reordering past a dependent would make the
 * publish order differ from the plan, and the plan is what the closure gate is checked against.
 */
export function takeIndependentRun<T extends PlannablePackage>(
	plan: PublishGroup<T>[],
	from: number,
	max: number,
): PublishGroup<T>[] {
	const run: PublishGroup<T>[] = [plan[from]];
	const inRun = new Set(plan[from].members.map((member) => member.name));
	for (let i = from + 1; i < plan.length && run.length < max; i++) {
		const candidate = plan[i];
		const dependsOnRun = candidate.members.some((member) =>
			Object.keys(member.dependencies).some((dep) => inRun.has(dep)),
		);
		if (dependsOnRun) break;
		run.push(candidate);
		for (const member of candidate.members) inRun.add(member.name);
	}
	return run;
}

/** What the closure check is allowed to ask. Exactly one question, so a fake can answer it. */
export interface RegistryView {
	/** Versions published under `name` right now, or `null` when the registry has no such package. */
	publishedVersions(name: string): Promise<string[] | null>;
}

/**
 * The invariant, asked of the REGISTRY rather than of our own files.
 *
 * After a group is published, every runtime dependency of every member must be resolvable by a
 * consumer — which is a different question from "we published it": the registry has read
 * replicas, and a package that this process uploaded is not necessarily one a `npm install`
 * elsewhere can see yet. Asking our own bookkeeping would answer the question we already know
 * the answer to.
 *
 * Edges inside `group` are exempt, and must be: see the cycle note at the top of this file.
 *
 * @param group the names just published together
 * @param packages the manifests of those names
 * @param satisfies whether a version list contains something matching a range — `semver.satisfies`
 */
export async function closureGaps(
	group: PlannablePackage[],
	registry: RegistryView,
	satisfies: (version: string, range: string) => boolean,
): Promise<ClosureGap[]> {
	const sameGroup = new Set(group.map((pkg) => pkg.name));
	const gaps: ClosureGap[] = [];

	for (const pkg of group) {
		for (const [dependency, range] of Object.entries(pkg.dependencies)) {
			if (sameGroup.has(dependency)) continue;
			const available = await registry.publishedVersions(dependency);
			if (available === null) {
				gaps.push({ package: pkg.name, dependency, range, reason: "absent" });
				continue;
			}
			if (!available.some((version) => satisfies(version, range))) {
				gaps.push({ package: pkg.name, dependency, range, reason: "unsatisfied", available });
			}
		}
	}

	return gaps;
}

/** One line a human can act on: which package, which dependency, and what the registry has. */
export function describeGap(gap: ClosureGap): string {
	const have =
		gap.reason === "absent"
			? "the registry has no such package"
			: `the registry has ${gap.available?.length ?? 0} version(s), none matching`;
	return `${gap.package} declares ${gap.dependency}@${gap.range} — ${have}`;
}
