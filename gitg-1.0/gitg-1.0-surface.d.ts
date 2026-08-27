/**
 * The GIR-derived widget VOCABULARY for Gitg-1.0.
 *
 * GENERATED — do not edit. Provenance: Gitg-1.0 — dropped empty base(s): GObject.InitiallyUnowned GObject.Object Atk.ImplementorIface
 *
 * 10 concrete widgets, 10 declarations, 10 enum nick unions, 1 slot candidates.
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
import type Ggit from '@girs/ggit-1.0';
import type Gio from '@girs/gio-2.0';
import type Gitg from './gitg-1.0.js';
import type { GtkActionableConstructOnly, GtkActionableProps, GtkBinConstructOnly, GtkBinProps, GtkBuildableConstructOnly, GtkBuildableProps, GtkContainerConstructOnly, GtkContainerProps, GtkDialogConstructOnly, GtkDialogProps, GtkDrawingAreaConstructOnly, GtkDrawingAreaProps, GtkGridConstructOnly, GtkGridProps, GtkListBoxConstructOnly, GtkListBoxProps, GtkListBoxRowConstructOnly, GtkListBoxRowProps, GtkOrientableConstructOnly, GtkOrientableProps, GtkScrollableConstructOnly, GtkScrollableProps, GtkToolShellConstructOnly, GtkToolShellProps, GtkToolbarConstructOnly, GtkToolbarProps, GtkTreeViewConstructOnly, GtkTreeViewProps, GtkWidgetConstructOnly, GtkWidgetProps, GtkWindowConstructOnly, GtkWindowProps } from '@girs/gtk-3.0/surface';

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

export interface GitgAuthenticationDialogProps extends GtkDialogProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GitgAuthenticationDialogConstructOnly = GtkDialogConstructOnly;

export interface GitgCommitListViewProps extends GtkTreeViewProps, GtkBuildableProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GitgCommitListViewConstructOnly = GtkTreeViewConstructOnly | GtkBuildableConstructOnly;

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

export interface GitgProgressBinProps extends GtkBinProps {
    fraction?: number;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GitgProgressBinConstructOnly = GtkBinConstructOnly;

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

export interface GitgSidebarProps extends Omit<GtkTreeViewProps, 'model'> {
    model?: Gitg.SidebarStore;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GitgSidebarConstructOnly = GtkTreeViewConstructOnly;

export interface GitgThemeProps extends GtkWidgetProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GitgThemeConstructOnly = GtkWidgetConstructOnly;

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

/** Every GType this namespace can create. A consumer derives its own tag map. */
export type WidgetGType = keyof Widgets;

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
export const SURFACE_PROVENANCE: string;

/** Declaration GType -> its own settable properties, as GObject registered them. */
export const OWN_PROPS: Readonly<Record<string, readonly string[]>>;

/** Widget GType -> its own signals. */
export const OWN_SIGNALS: Readonly<Record<string, readonly string[]>>;

/** Widget GType -> every declaration its members come from, self first. */
export const DECLS: Readonly<Record<string, readonly string[]>>;

/** Enum GType -> the nicks this surface offers. */
export const ENUM_NICKS: Readonly<Record<string, readonly string[]>>;

/** Widget GType -> slot name -> the method that may adopt a child there. */
export const SLOT_CANDIDATES: Readonly<Record<string, Readonly<Record<string, string>>>>;

/**
 * `Type.property` -> the release that introduced it.
 *
 * What keeps a runtime cross-check honest across a version gap without an
 * allowlist: a member the installed library lacks is a defect UNLESS the version
 * here is newer than the one running.
 */
export const SINCE: Readonly<Record<string, string>>;
