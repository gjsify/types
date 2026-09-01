/**
 * The GIR-derived widget VOCABULARY for Libxfce4windowingui-0.0.
 *
 * GENERATED — do not edit. Provenance: Libxfce4windowingui-0.0 — dropped empty base(s): GObject.InitiallyUnowned GObject.Object Atk.ImplementorIface
 *
 * 2 concrete widgets, 2 declarations, 1 enum nick unions, 0 slot candidates.
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

import type Libxfce4windowing from '@girs/libxfce4windowing-0.0';
import type Libxfce4windowingui from './libxfce4windowingui-0.0.js';
import type Pango from '@girs/pango-1.0';
import type { GtkBuildableConstructOnly, GtkBuildableProps, GtkContainerConstructOnly, GtkContainerProps, GtkMenuConstructOnly, GtkMenuProps, GtkMenuShellConstructOnly, GtkMenuShellProps, GtkWidgetConstructOnly, GtkWidgetProps } from '@girs/gtk-3.0/vocabulary';

// ---------------------------------------------------------------------------
// Enum nicks — the string vocabulary GObject registered, from GIR's `glib:nick`.
//
// Not derived from the member name. Substituting underscores for dashes is not a law:
// some nicks keep an underscore the substitution would have replaced, and only the
// attribute knows which. Gtk-4.0 and Adw-1 contradict no derivation at all, which is
// how a derived nick passes review and breaks elsewhere.
// Re-measure with `scripts/check-nick-derivation.mjs` in ts-for-gir.
// ---------------------------------------------------------------------------

export type PangoEllipsizeModeNick = 'none' | 'start' | 'middle' | 'end';

// ---------------------------------------------------------------------------
// Property surfaces — one interface per GIR DECLARATION, mirroring GIR's own
// inheritance rather than flattening per widget.
//
// The interfaces are load-bearing, not tidiness: `GtkBox` declares four properties
// of its own and `orientation` is not among them — it lives on `Gtk.Orientable`,
// because GObject installs interface properties on the implementor at runtime while
// GIR keeps them once, on the interface.
// ---------------------------------------------------------------------------

export interface XfwWindowActionMenuProps extends GtkMenuProps, GtkBuildableProps {
    /** The #XfwWindow instance used to create the action menu. */
    window?: Libxfce4windowing.Window;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type XfwWindowActionMenuConstructOnly = GtkMenuConstructOnly | GtkBuildableConstructOnly | 'window';

export interface XfwWindowListMenuProps extends GtkMenuProps, GtkBuildableProps {
    /**
     * The saturation of icons for minimized windows.
     * @default 50
     */
    'minimized-icon-saturation'?: number;
    /** The #XfwScreen to use when populating the menu. */
    screen?: Libxfce4windowing.Screen;
    /**
     * Whether or not to show all workspaces in the list, or just the current workspace.
     * @default TRUE
     */
    'show-all-workspaces'?: boolean;
    /**
     * Whether or not to show icons in the menu.
     * @default TRUE
     */
    'show-icons'?: boolean;
    /**
     * Whether or not sticky/pinned windows should be shown once (on the active workspace), or in each workspace list.
     * @default FALSE
     */
    'show-sticky-windows-once'?: boolean;
    /**
     * Whether or not to show an extra section that lists urgent windows on other workspaces.
     * @default FALSE
     */
    'show-urgent-windows-section'?: boolean;
    /**
     * Whether or not to show a section in the menu with items to add and remove workspaces.
     * @default TRUE
     */
    'show-workspace-actions'?: boolean;
    /**
     * Whether or not to show a heading with the workspace name before the list of windows on that workspace.
     * @default TRUE
     */
    'show-workspace-names'?: boolean;
    /**
     * Whether or not the lists of windows should be in submenus for each workspace.
     * @default FALSE
     */
    'show-workspace-submenus'?: boolean;
    /**
     * The #PangoEllipsizeMode to use when ellipsizing window titles.
     * @default PANGO_ELLIPSIZE_MIDDLE
     */
    'window-title-ellipsize-mode'?: PangoEllipsizeModeNick | Pango.EllipsizeMode;
    /**
     * The maximum width (in characters) of window titles to display before ellipsizing.
     * @default 24
     */
    'window-title-max-width-chars'?: number;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type XfwWindowListMenuConstructOnly = GtkMenuConstructOnly | GtkBuildableConstructOnly | 'screen';

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
    XfwWindowActionMenu: {
        class: Libxfce4windowingui.WindowActionMenu;
        props: XfwWindowActionMenuProps;
        signals: Libxfce4windowingui.WindowActionMenu.SignalSignatures;
        constructOnly: XfwWindowActionMenuConstructOnly;
        slotCandidates: {};
    };
    XfwWindowListMenu: {
        class: Libxfce4windowingui.WindowListMenu;
        props: XfwWindowListMenuProps;
        signals: Libxfce4windowingui.WindowListMenu.SignalSignatures;
        constructOnly: XfwWindowListMenuConstructOnly;
        slotCandidates: {};
    };
}

/** Every GType this namespace can create. A consumer derives its own tag map. */
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
    readonly unsettableProps: readonly string[];
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

/** Widget GType -> every declaration its members come from, self first. */
export const DECLS: Readonly<Record<string, readonly string[]>>;

/** The GTypes in `DECLS` that hold a widget without being one — see `ChildHolders`. */
export const CHILD_HOLDERS: readonly string[];

/** Enum GType -> the nicks this surface offers. */
export const ENUM_NICKS: Readonly<Record<string, readonly string[]>>;

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
