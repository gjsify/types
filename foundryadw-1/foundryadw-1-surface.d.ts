/**
 * The GIR-derived widget VOCABULARY for FoundryAdw-1.
 *
 * GENERATED — do not edit. Provenance: FoundryAdw-1 — dropped empty base(s): GObject.InitiallyUnowned GObject.Object
 *
 * 7 concrete widgets, 7 declarations, 1 enum nick unions, 12 slot candidates.
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

import type Foundry from '@girs/foundry-1';
import type FoundryAdw from './foundryadw-1.js';
import type Gdk from '@girs/gdk-4.0';
import type Gio from '@girs/gio-2.0';
import type Gtk from '@girs/gtk-4.0';
import type { AdwDialogConstructOnly, AdwDialogProps, AdwEntryRowConstructOnly, AdwEntryRowProps, AdwPreferencesRowConstructOnly, AdwPreferencesRowProps } from '@girs/adw-1/surface';
import type { GtkAccessibleConstructOnly, GtkAccessibleProps, GtkActionableConstructOnly, GtkActionableProps, GtkBuildableConstructOnly, GtkBuildableProps, GtkConstraintTargetConstructOnly, GtkConstraintTargetProps, GtkEditableConstructOnly, GtkEditableProps, GtkListBoxRowConstructOnly, GtkListBoxRowProps, GtkShortcutManagerConstructOnly, GtkShortcutManagerProps, GtkWidgetConstructOnly, GtkWidgetProps } from '@girs/gtk-4.0/surface';

// ---------------------------------------------------------------------------
// Enum nicks — the string vocabulary GObject registered, from GIR's `glib:nick`.
//
// Not derived from the member name. Substituting underscores for dashes is not a law:
// some nicks keep an underscore the substitution would have replaced, and only the
// attribute knows which. Gtk-4.0 and Adw-1 contradict no derivation at all, which is
// how a derived nick passes review and breaks elsewhere.
// Re-measure with `scripts/check-nick-derivation.mjs` in ts-for-gir.
// ---------------------------------------------------------------------------

export type GFileTypeNick = 'unknown' | 'regular' | 'directory' | 'symbolic-link' | 'special' | 'shortcut' | 'mountable';

// ---------------------------------------------------------------------------
// Property surfaces — one interface per GIR DECLARATION, mirroring GIR's own
// inheritance rather than flattening per widget.
//
// The interfaces are load-bearing, not tidiness: `GtkBox` declares four properties
// of its own and `orientation` is not among them — it lives on `Gtk.Orientable`,
// because GObject installs interface properties on the implementor at runtime while
// GIR keeps them once, on the interface.
// ---------------------------------------------------------------------------

/** An `AdwPreferencesRow` that allows typing or navigating to a file or directory path. */
export interface FoundryFileRowProps extends AdwEntryRowProps, GtkAccessibleProps, GtkActionableProps, GtkBuildableProps, GtkConstraintTargetProps, GtkEditableProps {
    file?: Gio.File;
    'file-type'?: GFileTypeNick | Gio.FileType;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type FoundryFileRowConstructOnly = AdwEntryRowConstructOnly | GtkAccessibleConstructOnly | GtkActionableConstructOnly | GtkBuildableConstructOnly | GtkConstraintTargetConstructOnly | GtkEditableConstructOnly;

export interface FoundryPageProps extends GtkWidgetProps, GtkAccessibleProps, GtkBuildableProps, GtkConstraintTargetProps {
    auxiliary?: Gtk.Widget | null;
    content?: Gtk.Widget | null;
    'needs-attention'?: boolean;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type FoundryPageConstructOnly = GtkWidgetConstructOnly | GtkAccessibleConstructOnly | GtkBuildableConstructOnly | GtkConstraintTargetConstructOnly;

export interface FoundryPanelBarProps extends GtkWidgetProps, GtkAccessibleProps, GtkBuildableProps, GtkConstraintTargetProps {
    'show-bottom'?: boolean;
    'show-start'?: boolean;
    workspace?: FoundryAdw.Workspace | null;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type FoundryPanelBarConstructOnly = GtkWidgetConstructOnly | GtkAccessibleConstructOnly | GtkBuildableConstructOnly | GtkConstraintTargetConstructOnly;

export interface FoundryPathBarProps extends GtkWidgetProps, GtkAccessibleProps, GtkBuildableProps, GtkConstraintTargetProps {
    root?: FoundryAdw.PathNavigator;
    'selected-item'?: FoundryAdw.PathNavigator | null;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type FoundryPathBarConstructOnly = GtkWidgetConstructOnly | GtkAccessibleConstructOnly | GtkBuildableConstructOnly | GtkConstraintTargetConstructOnly;

export interface FoundrySearchDialogProps extends AdwDialogProps, GtkAccessibleProps, GtkBuildableProps, GtkConstraintTargetProps, GtkShortcutManagerProps {
    context?: Foundry.Context;
    'search-text'?: string;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type FoundrySearchDialogConstructOnly = AdwDialogConstructOnly | GtkAccessibleConstructOnly | GtkBuildableConstructOnly | GtkConstraintTargetConstructOnly | GtkShortcutManagerConstructOnly;

export interface FoundryTreeExpanderProps extends GtkWidgetProps, GtkAccessibleProps, GtkBuildableProps, GtkConstraintTargetProps {
    /**
     * Whether clicking on the expander should activate the row instead of expanding or collapsing it.
     * @since 1.1
     */
    'activate-on-click'?: boolean;
    'expanded-icon'?: Gio.Icon | null;
    'expanded-icon-name'?: string;
    'expanded-paintable'?: Gdk.Paintable | null;
    icon?: Gio.Icon | null;
    'icon-name'?: string;
    ignored?: boolean;
    'list-row'?: Gtk.TreeListRow | null;
    'menu-model'?: Gio.MenuModel | null;
    /**
     * The paintable to display for the row.
     * @since 1.1
     */
    paintable?: Gdk.Paintable | null;
    suffix?: Gtk.Widget | null;
    title?: string;
    'use-markup'?: boolean;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type FoundryTreeExpanderConstructOnly = GtkWidgetConstructOnly | GtkAccessibleConstructOnly | GtkBuildableConstructOnly | GtkConstraintTargetConstructOnly;

export interface FoundryWorkspaceProps extends GtkWidgetProps, GtkAccessibleProps, GtkBuildableProps, GtkConstraintTargetProps {
    'auxiliary-placeholder'?: Gtk.Widget | null;
    'collapsed-titlebar'?: Gtk.Widget | null;
    context?: Foundry.Context | null;
    'primary-menu'?: Gio.MenuModel | null;
    'show-auxiliary'?: boolean;
    'show-sidebar'?: boolean;
    'show-utilities'?: boolean;
    'sidebar-titlebar'?: Gtk.Widget | null;
    'status-widget'?: Gtk.Widget | null;
    titlebar?: Gtk.Widget | null;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type FoundryWorkspaceConstructOnly = GtkWidgetConstructOnly | GtkAccessibleConstructOnly | GtkBuildableConstructOnly | GtkConstraintTargetConstructOnly;

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
    FoundryFileRow: {
        class: FoundryAdw.FileRow;
        props: FoundryFileRowProps;
        signals: FoundryAdw.FileRow.SignalSignatures;
        constructOnly: FoundryFileRowConstructOnly;
        slotCandidates: {};
    };
    FoundryPage: {
        class: FoundryAdw.Page;
        props: FoundryPageProps;
        signals: FoundryAdw.Page.SignalSignatures;
        constructOnly: FoundryPageConstructOnly;
        slotCandidates: {
        'auxiliary': 'set_auxiliary';
        'content': 'set_content';
        };
    };
    FoundryPanelBar: {
        class: FoundryAdw.PanelBar;
        props: FoundryPanelBarProps;
        signals: FoundryAdw.PanelBar.SignalSignatures;
        constructOnly: FoundryPanelBarConstructOnly;
        slotCandidates: {
        'workspace': 'set_workspace';
        };
    };
    FoundryPathBar: {
        class: FoundryAdw.PathBar;
        props: FoundryPathBarProps;
        signals: FoundryAdw.PathBar.SignalSignatures;
        constructOnly: FoundryPathBarConstructOnly;
        slotCandidates: {};
    };
    FoundrySearchDialog: {
        class: FoundryAdw.SearchDialog;
        props: FoundrySearchDialogProps;
        signals: FoundryAdw.SearchDialog.SignalSignatures;
        constructOnly: FoundrySearchDialogConstructOnly;
        slotCandidates: {};
    };
    FoundryTreeExpander: {
        class: FoundryAdw.TreeExpander;
        props: FoundryTreeExpanderProps;
        signals: FoundryAdw.TreeExpander.SignalSignatures;
        constructOnly: FoundryTreeExpanderConstructOnly;
        slotCandidates: {
        'suffix': 'set_suffix';
        };
    };
    FoundryWorkspace: {
        class: FoundryAdw.Workspace;
        props: FoundryWorkspaceProps;
        signals: FoundryAdw.Workspace.SignalSignatures;
        constructOnly: FoundryWorkspaceConstructOnly;
        slotCandidates: {
        'auxiliary-placeholder': 'set_auxiliary_placeholder';
        'bottom-panel': 'add_bottom_panel';
        'collapsed-titlebar': 'set_collapsed_titlebar';
        'page': 'add_page';
        'sidebar-panel': 'add_sidebar_panel';
        'sidebar-titlebar': 'set_sidebar_titlebar';
        'status': 'set_status_widget';
        'titlebar': 'set_titlebar';
        };
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
