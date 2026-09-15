/**
 * The GIR-derived widget VOCABULARY for Gitg-1.0.
 *
 * GENERATED — do not edit. Provenance: Gitg-1.0 — dropped empty base(s): GObject.InitiallyUnowned GObject.Object Atk.ImplementorIface Ggit.Branch Ggit.Ref Ggit.ObjectFactoryBase Ggit.Commit Ggit.Object Gio.Initable Ggit.Remote — inlined base(s) their owner's vocabulary does not emit: Ggit.Native Ggit.Repository — prop(s) no TypeScript value satisfies: Ggit.Native.native
 *
 * 42 instantiable GTypes (of which 11 concrete widgets), 48 declarations (2 inlined from a namespace whose vocabulary does not emit them), 10 enum nick unions, 1 slot candidates.
 *
 * Module-scoped exports only. There is no `JSX` namespace here, no tag spelling and
 * no `on<Signal>` prop name: those are DIALECT, and every framework answers them
 * differently. The shape to avoid is the GLOBAL AUGMENT — a `declare global` on
 * `React.JSX` collides with every other library on a shared tag — while a
 * module-scoped `JSX` behind a `jsxImportSource` does not. This package is used by
 * projects that want nothing to do with JSX, so it emits neither; a consumer declaring
 * a module-scoped namespace over these names is doing it right.
 *
 * Three things this is and `ConstructorProps` is not: WRITABLE-only (measured on
 * Gtk-4.0, `ConstructorProps` offers 150 read-only properties across 68 classes as
 * settable, and GTK's failure mode for writing one is exit 0), OPTIONAL, and keyed
 * by the name GObject actually REGISTERED — the dashed spelling `g_object_set`,
 * GtkBuilder XML and Blueprint all use.
 *
 * Signal handler types are not re-derived: `X.SignalSignatures`, which this package
 * already emits for every class with the parent chain, every implemented interface
 * and the `notify::` keys folded in, is what `Widgets[G]['signals']` points at.
 */

import type GLib from '@girs/glib-2.0';
import type Gee from '@girs/gee-0.8';
import type Ggit from '@girs/ggit-1.0';
import type Gio from '@girs/gio-2.0';
import type Gitg from './gitg-1.0.js';
import type { GtkActionableConstructOnly, GtkActionableProps, GtkBinConstructOnly, GtkBinProps, GtkBuildableConstructOnly, GtkBuildableProps, GtkCellEditableConstructOnly, GtkCellEditableProps, GtkCellRendererConstructOnly, GtkCellRendererProps, GtkCellRendererTextConstructOnly, GtkCellRendererTextProps, GtkContainerConstructOnly, GtkContainerProps, GtkDialogConstructOnly, GtkDialogProps, GtkDrawingAreaConstructOnly, GtkDrawingAreaProps, GtkEditableConstructOnly, GtkEditableProps, GtkEntryConstructOnly, GtkEntryProps, GtkGridConstructOnly, GtkGridProps, GtkListBoxConstructOnly, GtkListBoxProps, GtkListBoxRowConstructOnly, GtkListBoxRowProps, GtkOrientableConstructOnly, GtkOrientableProps, GtkScrollableConstructOnly, GtkScrollableProps, GtkToolShellConstructOnly, GtkToolShellProps, GtkToolbarConstructOnly, GtkToolbarProps, GtkTreeDragDestConstructOnly, GtkTreeDragDestProps, GtkTreeDragSourceConstructOnly, GtkTreeDragSourceProps, GtkTreeModelConstructOnly, GtkTreeModelProps, GtkTreeSortableConstructOnly, GtkTreeSortableProps, GtkTreeStoreConstructOnly, GtkTreeStoreProps, GtkTreeViewConstructOnly, GtkTreeViewProps, GtkWidgetConstructOnly, GtkWidgetProps, GtkWindowConstructOnly, GtkWindowProps } from '@girs/gtk-3.0/vocabulary';

// ---------------------------------------------------------------------------
// Enum nicks — the string vocabulary GObject registered, from GIR's `glib:nick`.
//
// Not derived from the member name. Substituting underscores for dashes is not a law:
// some nicks keep an underscore the substitution would have replaced, and only the
// attribute knows which. Gtk-4.0 and Adw-1 contradict no derivation at all, which is
// how a derived nick passes review and breaks elsewhere.
// Re-measure with `scripts/check-nick-derivation.mjs` in ts-for-gir.
// ---------------------------------------------------------------------------

export type GitgAuthenticationLifeTimeNick = 'forget' | 'session' | 'forever';
export type GitgCommitModelColumnsNick = 'sha1' | 'subject' | 'message' | 'author' | 'author-name' | 'author-email' | 'author-date' | 'committer' | 'committer-name' | 'committer-email' | 'committer-date' | 'commit' | 'num';
export type GitgDeleteSourcesNick = 'cancel' | 'trash' | 'delete';
export type GitgPatchSetTypeNick = 'add' | 'remove';
export type GitgRefStateNick = 'none' | 'selected' | 'prelight';
export type GitgRefTypeNick = 'none' | 'branch' | 'remote' | 'tag' | 'stash';
export type GitgRemoteStateNick = 'disconnected' | 'connecting' | 'connected' | 'transferring';
export type GitgSelectionModeNick = 'normal' | 'selection';
export type GitgSidebarColumnNick = 'hint' | 'section' | 'item';
export type GitgSidebarHintNick = 'none' | 'header' | 'separator' | 'dummy';

// ---------------------------------------------------------------------------
// Property surfaces — one interface per GIR DECLARATION, mirroring GIR's own
// inheritance rather than flattening per widget.
//
// The interfaces are load-bearing, not tidiness: `GtkBox` declares four properties
// of its own and `orientation` is not among them — it lives on `Gtk.Orientable`,
// because GObject installs interface properties on the implementor at runtime while
// GIR keeps them once, on the interface.
// ---------------------------------------------------------------------------

/** Represents a generic native object. */
export interface GgitNativeProps {
    native?: never;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GgitNativeConstructOnly = 'native';

/** Represents an existing git repository including all of it's object contents. */
export interface GgitRepositoryProps extends GgitNativeProps {
    'clone-options'?: Ggit.CloneOptions;
    /** @default FALSE */
    init?: boolean;
    /** @default FALSE */
    'is-bare'?: boolean;
    location?: Gio.File | null;
    /** @default NULL */
    url?: string;
    workdir?: Gio.File | null;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GgitRepositoryConstructOnly = GgitNativeConstructOnly | 'clone-options' | 'init' | 'is-bare' | 'location' | 'url';

export interface GitgAsyncProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GitgAsyncConstructOnly = never;

export interface GitgAuthenticationDialogProps extends GtkDialogProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GitgAuthenticationDialogConstructOnly = GtkDialogConstructOnly;

export interface GitgAvatarCacheProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GitgAvatarCacheConstructOnly = never;

export interface GitgBranchProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GitgBranchConstructOnly = never;

export interface GitgBranchBaseProps extends GitgRefProps, GitgBranchProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GitgBranchBaseConstructOnly = GitgRefConstructOnly | GitgBranchConstructOnly;

export interface GitgCellRendererLanesProps extends GtkCellRendererTextProps {
    commit?: Gitg.Commit | null;
    'dot-width'?: number;
    labels?: Gitg.Ref[];
    'lane-width'?: number;
    'next-commit'?: Gitg.Commit | null;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GitgCellRendererLanesConstructOnly = GtkCellRendererTextConstructOnly;

export interface GitgColorProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GitgColorConstructOnly = never;

export interface GitgCommitProps {
    mylane?: number;
    tag?: number;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GitgCommitConstructOnly = never;

export interface GitgCommitListViewProps extends GtkTreeViewProps, GtkBuildableProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GitgCommitListViewConstructOnly = GtkTreeViewConstructOnly | GtkBuildableConstructOnly;

export interface GitgCommitModelProps extends GtkTreeModelProps {
    limit?: number;
    repository?: Gitg.Repository;
    'sort-mode'?: number;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GitgCommitModelConstructOnly = GtkTreeModelConstructOnly;

export interface GitgCredentialsManagerProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GitgCredentialsManagerConstructOnly = never;

export interface GitgDateProps {
    'date-string'?: string;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GitgDateConstructOnly = never;

export interface GitgDiffStatProps extends GtkDrawingAreaProps {
    added?: number;
    removed?: number;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GitgDiffStatConstructOnly = GtkDrawingAreaConstructOnly;

export interface GitgDiffViewProps extends GtkGridProps {
    'changes-inline'?: boolean;
    commit?: Gitg.Commit | null;
    'context-lines'?: number;
    'default-collapse-all'?: boolean;
    diff?: Ggit.Diff | null;
    'handle-selection'?: boolean;
    'has-selection'?: boolean;
    highlight?: boolean;
    'ignore-whitespace'?: boolean;
    'new-is-workdir'?: boolean;
    repository?: Gitg.Repository | null;
    'show-parents'?: boolean;
    staged?: boolean;
    'tab-width'?: number;
    unstaged?: boolean;
    'use-gravatar'?: boolean;
    'wrap-lines'?: boolean;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GitgDiffViewConstructOnly = GtkGridConstructOnly;

export interface GitgDiffViewOptionsProps extends GtkToolbarProps {
    'context-lines'?: number;
    view?: Gitg.DiffView | null;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GitgDiffViewOptionsConstructOnly = GtkToolbarConstructOnly;

export interface GitgEntryHistoryProps extends GtkEntryProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GitgEntryHistoryConstructOnly = GtkEntryConstructOnly;

export interface GitgFontManagerProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GitgFontManagerConstructOnly = never;

export interface GitgGPGUtilsProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GitgGPGUtilsConstructOnly = never;

export interface GitgHookProps {
    environment?: Gee.HashMap;
    name?: string;
    'working-directory'?: Gio.File | null;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GitgHookConstructOnly = never;

export interface GitgLabelRendererProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GitgLabelRendererConstructOnly = never;

export interface GitgLaneProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GitgLaneConstructOnly = never;

export interface GitgLanesProps {
    'inactive-collapse'?: number;
    'inactive-enabled'?: boolean;
    'inactive-gap'?: number;
    'inactive-max'?: number;
    'miss-commits'?: Gee.LinkedList;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GitgLanesConstructOnly = never;

export interface GitgParsedRefNameProps {
    rtype?: GitgRefTypeNick | Gitg.RefType;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GitgParsedRefNameConstructOnly = never;

export interface GitgPatchSetProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GitgPatchSetConstructOnly = never;

export interface GitgProgressBinProps extends GtkBinProps {
    fraction?: number;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GitgProgressBinConstructOnly = GtkBinConstructOnly;

export interface GitgRefProps {
    'd-parsed-name'?: Gitg.ParsedRefName;
    'd-pushes'?: Gitg.Ref[] | null;
    state?: GitgRefStateNick | Gitg.RefState;
    working?: boolean;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GitgRefConstructOnly = never;

export interface GitgRefBaseProps extends GitgRefProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GitgRefBaseConstructOnly = GitgRefConstructOnly;

export interface GitgRemoteProps {
    'credentials-provider'?: Gitg.CredentialsProvider | null;
    'fetch-specs'?: string[] | null;
    'push-specs'?: string[] | null;
    state?: GitgRemoteStateNick | Gitg.RemoteState;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GitgRemoteConstructOnly = never;

export interface GitgRepositoryProps extends GgitRepositoryProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GitgRepositoryConstructOnly = GgitRepositoryConstructOnly;

export interface GitgRepositoryListBoxProps extends GtkListBoxProps {
    'bookmarks-from-recent-files'?: boolean;
    location?: Gio.File | null;
    mode?: GitgSelectionModeNick | Gitg.SelectionMode;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GitgRepositoryListBoxConstructOnly = GtkListBoxConstructOnly;

export interface GitgRepositoryListBoxRowProps extends GtkListBoxRowProps {
    'branch-name'?: string | null;
    'can-remove'?: boolean;
    dirname?: string | null;
    fraction?: number;
    loading?: boolean;
    mode?: GitgSelectionModeNick | Gitg.SelectionMode;
    repository?: Gitg.Repository | null;
    'repository-name'?: string | null;
    selected?: boolean;
    time?: GLib.DateTime;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GitgRepositoryListBoxRowConstructOnly = GtkListBoxRowConstructOnly;

export interface GitgResourceProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GitgResourceConstructOnly = never;

export interface GitgSidebarProps extends Omit<GtkTreeViewProps, 'model'> {
    model?: Gitg.SidebarStore;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GitgSidebarConstructOnly = GtkTreeViewConstructOnly;

export interface GitgSidebarItemProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GitgSidebarItemConstructOnly = never;

export interface GitgSidebarStoreProps extends GtkTreeStoreProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GitgSidebarStoreConstructOnly = GtkTreeStoreConstructOnly;

export interface GitgSidebarStoreSidebarHeaderProps extends GitgSidebarStoreSidebarTextProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GitgSidebarStoreSidebarHeaderConstructOnly = GitgSidebarStoreSidebarTextConstructOnly;

export interface GitgSidebarStoreSidebarTextProps extends GitgSidebarItemProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GitgSidebarStoreSidebarTextConstructOnly = GitgSidebarItemConstructOnly;

export interface GitgStageProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GitgStageConstructOnly = never;

export interface GitgStageStatusEnumeratorProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GitgStageStatusEnumeratorConstructOnly = never;

export interface GitgStageStatusFileProps extends GitgStageStatusItemProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GitgStageStatusFileConstructOnly = GitgStageStatusItemConstructOnly;

export interface GitgStageStatusItemProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GitgStageStatusItemConstructOnly = never;

export interface GitgStageStatusSubmoduleProps extends GitgStageStatusItemProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GitgStageStatusSubmoduleConstructOnly = GitgStageStatusItemConstructOnly;

export interface GitgTextConvProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GitgTextConvConstructOnly = never;

export interface GitgThemeProps extends GtkWidgetProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GitgThemeConstructOnly = GtkWidgetConstructOnly;

export interface GitgUtilsProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GitgUtilsConstructOnly = never;

export interface GitgWhenMappedProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GitgWhenMappedConstructOnly = never;

// ---------------------------------------------------------------------------
// The GType-keyed widget map.
//
// Keyed by GType because that is also the GtkBuilder XML key and the typelib key. A
// consumer maps GTypes to tags in ITS convention — kebab for JSX intrinsics, Pascal
// for a Vue `GlobalComponents`, the class itself for a renderer whose element type
// is the class. None of those is baked in here.
//
// `slotCandidates` is a candidate list and never an answer: derived from methods
// taking exactly one widget argument. The GIR cannot tell adoption from reference —
// `set_title_widget` parents its argument and `set_activatable_widget` does not, and
// both are `void f(GtkWidget*)` at `transfer-ownership="none"`. Curation decides;
// this is what notices when a release adds a candidate.
// ---------------------------------------------------------------------------

export interface Widgets {
    GitgAuthenticationDialog: {
        class: Gitg.AuthenticationDialog;
        props: GitgAuthenticationDialogProps;
        signals: Gitg.AuthenticationDialog.SignalSignatures;
        constructOnly: GitgAuthenticationDialogConstructOnly;
        slotCandidates: {};
    };
    GitgCommitListView: {
        class: Gitg.CommitListView;
        props: GitgCommitListViewProps;
        signals: Gitg.CommitListView.SignalSignatures;
        constructOnly: GitgCommitListViewConstructOnly;
        slotCandidates: {};
    };
    GitgDiffStat: {
        class: Gitg.DiffStat;
        props: GitgDiffStatProps;
        signals: Gitg.DiffStat.SignalSignatures;
        constructOnly: GitgDiffStatConstructOnly;
        slotCandidates: {};
    };
    GitgDiffView: {
        class: Gitg.DiffView;
        props: GitgDiffViewProps;
        signals: Gitg.DiffView.SignalSignatures;
        constructOnly: GitgDiffViewConstructOnly;
        slotCandidates: {};
    };
    GitgDiffViewOptions: {
        class: Gitg.DiffViewOptions;
        props: GitgDiffViewOptionsProps;
        signals: Gitg.DiffViewOptions.SignalSignatures;
        constructOnly: GitgDiffViewOptionsConstructOnly;
        slotCandidates: {
        'view': 'set_view';
        };
    };
    GitgEntryHistory: {
        class: Gitg.EntryHistory;
        props: GitgEntryHistoryProps;
        signals: Gitg.EntryHistory.SignalSignatures;
        constructOnly: GitgEntryHistoryConstructOnly;
        slotCandidates: {};
    };
    GitgProgressBin: {
        class: Gitg.ProgressBin;
        props: GitgProgressBinProps;
        signals: Gitg.ProgressBin.SignalSignatures;
        constructOnly: GitgProgressBinConstructOnly;
        slotCandidates: {};
    };
    GitgRepositoryListBox: {
        class: Gitg.RepositoryListBox;
        props: GitgRepositoryListBoxProps;
        signals: Gitg.RepositoryListBox.SignalSignatures;
        constructOnly: GitgRepositoryListBoxConstructOnly;
        slotCandidates: {};
    };
    GitgRepositoryListBoxRow: {
        class: Gitg.RepositoryListBoxRow;
        props: GitgRepositoryListBoxRowProps;
        signals: Gitg.RepositoryListBoxRow.SignalSignatures;
        constructOnly: GitgRepositoryListBoxRowConstructOnly;
        slotCandidates: {};
    };
    GitgSidebar: {
        class: Gitg.Sidebar;
        props: GitgSidebarProps;
        signals: Gitg.Sidebar.SignalSignatures;
        constructOnly: GitgSidebarConstructOnly;
        slotCandidates: {};
    };
    GitgTheme: {
        class: Gitg.Theme;
        props: GitgThemeProps;
        signals: Gitg.Theme.SignalSignatures;
        constructOnly: GitgThemeConstructOnly;
        slotCandidates: {};
    };
}

/**
 * Every GType this namespace can create AND put on screen. A consumer derives its own
 * tag map. For everything a UI file can instantiate — layout managers, event
 * controllers, cell renderers, `GtkSizeGroup` — read `DECLS` below.
 */
export type WidgetGType = keyof Widgets;

// ---------------------------------------------------------------------------
// Child holders — the same shape, for objects that CARRY a widget without being one.
//
// `GtkListItem`, `GtkListHeader`, `GtkColumnViewCell` and `AdwToggle` descend from
// `GObject.Object` and hold a widget through `set_child`/`get_child`. A renderer places
// them exactly like a container, so they belong in the vocabulary; a check asking "is
// this a widget" must still be able to say no. Hence a sibling table rather than four
// more rows in `Widgets`: concatenate them when you mean both.
// ---------------------------------------------------------------------------

export interface ChildHolders {

}

/** Every GType this namespace holds a child in without it being a widget. */
export type ChildHolderGType = keyof ChildHolders;

/** The writable, optional, GObject-keyed property surface of one GType. */
export type PropsOf<G extends WidgetGType> = Widgets[G]['props'];

/** The signal table this package already emits, reached by GType. */
export type SignalsOf<G extends WidgetGType> = Widgets[G]['signals'];

/** The instance type — what a `ref`-shaped prop should infer. */
export type InstanceOf<G extends WidgetGType> = Widgets[G]['class'];

/** Property names that can only be set at construction. */
export type ConstructOnlyOf<G extends WidgetGType> = Widgets[G]['constructOnly'];

/** Candidate child slots — see the note above; curation decides. */
export type SlotCandidatesOf<G extends WidgetGType> = keyof Widgets[G]['slotCandidates'];

/**
 * The same facts as runtime data, for a consumer that CHECKS them.
 *
 * Types are erased, so a spec that asks the installed GTK whether every property
 * here is a writable ParamSpec, every signal resolvable by `GObject.signal_lookup`
 * and every nick resolvable through an enum lookup cannot read the interfaces
 * above. Emitted headlessly with no GTK present, which is exactly why the checking
 * belongs to the consumer and the DATA belongs here.
 */
export const PROVENANCE: {
    readonly namespace: string;
    readonly version: string;
    /** The version the LIBRARY states, or null where it states none. Never the namespace's. */
    readonly libraryVersion: string | null;
    readonly childHolders: number;
    readonly droppedBases: readonly string[];
    readonly inlinedBases: readonly string[];
    /** `<decl>.<prop>` for every property printed `never` because TypeScript has no value for it. */
    readonly unsettableProps: readonly string[];
    /**
     * `<decl>.<prop>: <Ns>.<Name>` for every property printed `never` because the model
     * could not resolve its type across a namespace boundary — two independently released
     * GIRs disagreeing, which is what the main emitter answers `never` for as well.
     */
    readonly unresolvedProps: readonly string[];
};

/** Declaration GType -> its own settable properties, as GObject registered them. */
export const OWN_PROPS: Readonly<Record<string, readonly string[]>>;

/**
 * Declaration GType -> the signals it registers itself, never its parents'.
 *
 * Keyed like `OWN_PROPS`, so both are read at every link of a `DECLS` chain. An
 * abstract base has no `Widgets` row and still owns signals — `GtkWidget` owns 13.
 */
export const OWN_SIGNALS: Readonly<Record<string, readonly string[]>>;

/**
 * Instantiable GType -> every declaration its members come from, self first.
 *
 * The key set is what a UI description file can NAME: every registered, non-abstract
 * class this namespace declares. GtkBuilder resolves a `<object class="…">` through
 * `g_type_from_name`, which knows nothing about widgets, so this is wider than
 * `Widgets` by design — `GtkSizeGroup`, `GtkTextTag`, every `GtkEventController`
 * and every `GtkCellRenderer` are here and are not widgets.
 *
 * `Widgets` and `CHILD_HOLDERS` are the narrower questions and answer them unchanged.
 */
export const DECLS: Readonly<Record<string, readonly string[]>>;

/** The GTypes in `DECLS` that hold a widget without being one — see `ChildHolders`. */
export const CHILD_HOLDERS: readonly string[];

/** Enum GType -> the nicks this surface offers. */
export const ENUM_NICKS: Readonly<Record<string, readonly string[]>>;

/**
 * `<enum GType>.<nick>` -> the integer GObject registers for it, from GIR's `value`.
 *
 * Position in `ENUM_NICKS` is NOT this number. Counting is wrong on 6 of the 137 enums a
 * GTK 4 vocabulary carries -- 112 in Gtk-4.0 and 25 in Adw-1: `GtkResponseType` runs -1 to -11, `GtkTextWindowType` starts
 * at 1, `GtkOrdering` and `GtkConstraintRelation` are -1/0/1, `GtkAlign` has two names
 * on one value, and `GtkConstraintStrength.required` is 1001001000 where counting says 0.
 *
 * Read from the same GIR as the nicks, deliberately. A consumer reading the numbers off an
 * installed typelib instead has two provenances for one table, and then cannot tell a
 * missing number from a host older than the vocabulary.
 */
export const ENUM_VALUES: Readonly<Record<string, number>>;

/**
 * The `<enum GType>.<nick>` entries GIR marks `deprecated="1"`.
 *
 * Two names on one value is how GObject spells an alias -- `GTK_ALIGN_BASELINE` and
 * `GTK_ALIGN_BASELINE_FILL` are both 4, and both keep a `ENUM_VALUES` entry. The pairing
 * is visible in the numbers; which name is the old one is not, and this is that fact --
 * where GIR states it. It usually does not: 4 registered-enum members across the 718 GIRs
 * carry the attribute, and 179 of the 182 value-sharing pairs carry it on neither half, so
 * absence from this list means GIR is silent, not that the nick is the current one.
 */
export const ENUM_DEPRECATED: readonly string[];

/**
 * `<enum GType>.<nick>` -> the raw GIR `value` no number could be read from.
 *
 * The declared remainder, so that every nick in `ENUM_NICKS` is in `ENUM_VALUES` or in
 * here and a drop cannot be silent. Two shapes reach it: a symbolic or absent value (Vala
 * writes `(null)`, a char enum writes a letter) and an integer past
 * `Number.MAX_SAFE_INTEGER`, where a literal would lose precision and stop being the
 * GIR's number. Empty for Gtk, Adw, GLib and Gio.
 */
export const ENUM_VALUES_UNREADABLE: Readonly<Record<string, string>>;

/**
 * `<bitfield GType>.<nick>` -> the integer GObject registers for that one member.
 *
 * `ENUM_NICKS` carries no bitfield, because GObject cannot resolve a nick SET; that says
 * nothing about a single member's number, and the number is what a host without GI needs.
 * 23 settable properties in Gtk-4.0 and Adw-1 are bitfield-typed and are declared bare
 * `number` -- `GtkEntry:input-hints`, `GtkPopoverMenu:flags`, `AdwTabView:shortcuts`,
 * `GtkDropTarget:actions` among them. Counting is worst here: 119 of the 156 Gtk-4.0
 * bitfield members this vocabulary carries disagree with their declaration position,
 * against 29 of 672 enumeration members.
 *
 * Combine with `|` as GObject does. There is no nick table to pair this with, so a name
 * here is resolvable and a SET still is not.
 */
export const FLAG_VALUES: Readonly<Record<string, number>>;

/** `<bitfield GType>.<nick>` -> the raw GIR `value` no number could be read from. */
export const FLAG_VALUES_UNREADABLE: Readonly<Record<string, string>>;

/**
 * `<declaration GType>.<property>` -> the GType of that property's enum or bitfield.
 *
 * The join the value tables need and nothing else here carries. A host with no GI has a
 * property name and a nick and needs a number; `ENUM_VALUES` is keyed by ENUM GType, and
 * only this says which enum a property is. Keyed by DECLARATION like `OWN_PROPS`, so it is
 * read at every link of a `DECLS` chain — `orientation` belongs to `GtkOrientable`, not
 * to the `GtkBox` a caller starts from.
 *
 * Present only where the property's OWN type is the enum: an array of them, or a union that
 * merely mentions one, would be an entry a consumer resolves wrongly.
 *
 * The GType named here is not always one THIS module gives numbers for. A nick vocabulary is
 * emitted once, by the namespace that owns the enum, so `AdwComboRow.search-match-mode` names
 * `GtkStringFilterMatchMode` and its rows are in `@girs/gtk-4.0/vocabulary` — 83 of the 909
 * entries in a full run resolve only with the owner's vocabulary loaded beside this one. An
 * owner with no vocabulary of its own (Gdk, Pango) is inlined here instead, so every entry
 * resolves against SOME module.
 */
export const PROP_ENUMS: Readonly<Record<string, string>>;

/**
 * The kinds of value a GTK accessible property, relation or state takes.
 *
 * `enum` is the one that needs a second lookup: `ARIA_VALUE_ENUMS` names the enum GType,
 * and `ENUM_NICKS` and `ENUM_VALUES` answer from there.
 */
export type AriaValueType = 'string' | 'integer' | 'double' | 'boolean' | 'reference' | 'enum';

/**
 * `<enum GType>.<nick>` -> the kind of value that ARIA slot takes.
 *
 * The one table in this file that is not a fact about a ParamSpec. A GtkBuilder or
 * Blueprint `accessibility { … }` block is typed by GTK's ARIA table, not by the widget,
 * and the two disagree where it costs most: `orientation` is settable on a `GtkLabel`
 * that implements no `GtkOrientable`, and `checked` is a `GtkAccessibleTristate`, so
 * `checked: true` is the number 1 rather than a boolean. Typing those slots from the
 * widget's properties gets both wrong and raises nothing.
 *
 * Keyed like `ENUM_VALUES` because the ARIA names ARE enum members — of
 * `GtkAccessibleProperty`, `GtkAccessibleRelation` and `GtkAccessibleState` — so
 * `ENUM_NICKS` already lists them and one key parser reads both.
 *
 * Read from each member's own GIR documentation. `gtk_accessible_property_init_value()`
 * is the C half of this table and is not introspectable; the doc sentence is, and states
 * the type for 52 of the 53 members in gtk4 4.23.3. Complete or absent, never partial: a
 * member the generator cannot answer for fails the build and names itself.
 */
export const ARIA_VALUE_TYPES: Readonly<Record<string, AriaValueType>>;

/**
 * The same keys, for the `'enum'` rows only -> the GType of that enum.
 *
 * A table of its own for the reason `PROP_ENUMS` is one: folded in, the values of
 * `ARIA_VALUE_TYPES` would be six reserved words mixed with arbitrary GTypes and telling
 * them apart would be the consumer's problem. Apart, `ARIA_VALUE_TYPES[k] === 'enum'` is
 * the whole test and `ENUM_NICKS[ARIA_VALUE_ENUMS[k]]` is the nick list.
 */
export const ARIA_VALUE_ENUMS: Readonly<Record<string, string>>;

/** Widget GType -> slot name -> the method that may adopt a child there. */
export const SLOT_CANDIDATES: Readonly<Record<string, Readonly<Record<string, string>>>>;

/**
 * `Type`, `Type.property` and `Type::signal` -> the release that introduced it.
 *
 * What keeps a runtime cross-check honest across a version gap without an
 * allowlist: a name the installed library lacks is a defect UNLESS the version
 * here is newer than the one running.
 *
 * ALL THREE key shapes, because that test only works for the names it covers. A
 * property-only map leaves a consumer no way to explain a missing SIGNAL, which is
 * a correct vocabulary reported as 18 defects; a member-only map leaves it no way to
 * explain a missing CLASS, and that one fails as a bare
 * `TypeError: can't access property "$gtype", ctor() is undefined` that does not
 * even name the GType.
 *
 * A key is present only where the GIR states a version — sparse by nature (`version`
 * sits on 29 of the 301 classes and interfaces in Gtk-4.0), never inferred.
 */
export const SINCE: Readonly<Record<string, string>>;
