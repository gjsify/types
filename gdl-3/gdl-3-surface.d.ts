/**
 * The GIR-derived widget VOCABULARY for Gdl-3.
 *
 * GENERATED — do not edit. Provenance: Gdl-3 — dropped empty base(s): GObject.InitiallyUnowned GObject.Object Atk.ImplementorIface — prop(s) no TypeScript value satisfies: Gdl.DockObject.pixbuf-icon
 *
 * 12 concrete widgets, 12 declarations, 3 enum nick unions, 4 slot candidates.
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

import type GObject from '@girs/gobject-2.0';
import type Gdl from './gdl-3.js';
import type Gtk from '@girs/gtk-3.0';
import type { GtkBinConstructOnly, GtkBinProps, GtkBoxConstructOnly, GtkBoxProps, GtkBuildableConstructOnly, GtkBuildableProps, GtkContainerConstructOnly, GtkContainerProps, GtkNotebookConstructOnly, GtkNotebookProps, GtkOrientableConstructOnly, GtkOrientableProps, GtkOrientationNick, GtkPositionTypeNick, GtkWidgetConstructOnly, GtkWidgetProps, GtkWindowConstructOnly, GtkWindowProps } from '@girs/gtk-3.0/surface';

// ---------------------------------------------------------------------------
// Enum nicks — the string vocabulary GObject registered, from GIR's `glib:nick`.
//
// Not derived from the member name. Substituting underscores for dashes is not a law:
// some nicks keep an underscore the substitution would have replaced, and only the
// attribute knows which. Gtk-4.0 and Adw-1 contradict no derivation at all, which is
// how a derived nick passes review and breaks elsewhere.
// Re-measure with `scripts/check-nick-derivation.mjs` in ts-for-gir.
// ---------------------------------------------------------------------------

export type GdlDockBarStyleNick = 'icons' | 'text' | 'both' | 'auto';
export type GdlDockPlacementNick = 'none' | 'top' | 'bottom' | 'right' | 'left' | 'center' | 'floating';
export type GdlSwitcherStyleNick = 'text' | 'icon' | 'both' | 'toolbar' | 'tabs' | 'none';

// ---------------------------------------------------------------------------
// Property surfaces — one interface per GIR DECLARATION, mirroring GIR's own
// inheritance rather than flattening per widget.
//
// The interfaces are load-bearing, not tidiness: `GtkBox` declares four properties
// of its own and `orientation` is not among them — it lives on `Gtk.Orientable`,
// because GObject installs interface properties on the implementor at runtime while
// GIR keeps them once, on the interface.
// ---------------------------------------------------------------------------

export interface GdlDockProps extends GdlDockObjectProps, GtkBuildableProps {
    'default-title'?: string;
    floating?: boolean;
    floatx?: number;
    floaty?: number;
    height?: number;
    /**
     * Whether or not to prevent a floating dock window from appearing in the taskbar.
     * @since 3.6
     */
    'skip-taskbar'?: boolean;
    width?: number;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GdlDockConstructOnly = GdlDockObjectConstructOnly | GtkBuildableConstructOnly | 'floating';

export interface GdlDockBarProps extends GtkBoxProps, GtkBuildableProps, GtkOrientableProps {
    'dockbar-style'?: GdlDockBarStyleNick | Gdl.DockBarStyle;
    /** The #GdlDockMaster object attached to the dockbar. */
    master?: GObject.Object;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GdlDockBarConstructOnly = GtkBoxConstructOnly | GtkBuildableConstructOnly | GtkOrientableConstructOnly;

export interface GdlDockItemProps extends GdlDockObjectProps, GtkBuildableProps {
    behavior?: number;
    /**
     * If set, the dock item is closed.
     * @since 3.6
     */
    closed?: boolean;
    /**
     * If set, the dock item is hidden but it has a corresponding icon in the dock bar allowing to show it again.
     * @since 3.6
     */
    iconified?: boolean;
    locked?: boolean;
    /** The orientation of the docking item. */
    orientation?: GtkOrientationNick | Gtk.Orientation;
    'preferred-height'?: number;
    'preferred-width'?: number;
    resize?: boolean;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GdlDockItemConstructOnly = GdlDockObjectConstructOnly | GtkBuildableConstructOnly;

export interface GdlDockItemButtonImageProps extends GtkWidgetProps, GtkBuildableProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GdlDockItemButtonImageConstructOnly = GtkWidgetConstructOnly | GtkBuildableConstructOnly;

export interface GdlDockItemGripProps extends GtkContainerProps, GtkBuildableProps {
    item?: Gdl.DockItem;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GdlDockItemGripConstructOnly = GtkContainerConstructOnly | GtkBuildableConstructOnly | 'item';

export interface GdlDockNotebookProps extends GdlDockItemProps, GtkBuildableProps {
    page?: number;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GdlDockNotebookConstructOnly = GdlDockItemConstructOnly | GtkBuildableConstructOnly;

export interface GdlDockObjectProps extends GtkContainerProps, GtkBuildableProps {
    /** A long descriptive name. */
    'long-name'?: string;
    /** The master which manages all the objects in a dock ring */
    master?: Gdl.DockMaster;
    /** The object name. */
    name?: string;
    /**
     * A GdkPixbuf to use for the icon of the dock object.
     * @since 3.3.2
     */
    'pixbuf-icon'?: never;
    /** A stock id to use for the icon of the dock object. */
    'stock-id'?: string;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GdlDockObjectConstructOnly = GtkContainerConstructOnly | GtkBuildableConstructOnly | 'name';

export interface GdlDockPanedProps extends GdlDockItemProps, GtkBuildableProps {
    position?: number;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GdlDockPanedConstructOnly = GdlDockItemConstructOnly | GtkBuildableConstructOnly;

export interface GdlDockPlaceholderProps extends GdlDockObjectProps, GtkBuildableProps {
    floating?: boolean;
    floatx?: number;
    floaty?: number;
    height?: number;
    host?: Gdl.DockObject;
    'next-placement'?: GdlDockPlacementNick | Gdl.DockPlacement;
    sticky?: boolean;
    width?: number;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GdlDockPlaceholderConstructOnly = GdlDockObjectConstructOnly | GtkBuildableConstructOnly | 'floating' | 'floatx' | 'floaty' | 'sticky';

export interface GdlDockTablabelProps extends GtkBinProps, GtkBuildableProps {
    item?: Gdl.DockItem;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GdlDockTablabelConstructOnly = GtkBinConstructOnly | GtkBuildableConstructOnly;

/** The GdlDockLayout struct contains only private fields and should not be directly accessed. */
export interface GdlPreviewWindowProps extends GtkWindowProps, GtkBuildableProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GdlPreviewWindowConstructOnly = GtkWindowConstructOnly | GtkBuildableConstructOnly;

export interface GdlSwitcherProps extends GtkNotebookProps, GtkBuildableProps {
    'switcher-style'?: GdlSwitcherStyleNick | Gdl.SwitcherStyle;
    'tab-pos'?: GtkPositionTypeNick | Gtk.PositionType;
    'tab-reorderable'?: boolean;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GdlSwitcherConstructOnly = GtkNotebookConstructOnly | GtkBuildableConstructOnly;

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
    GdlDock: {
        class: Gdl.Dock;
        props: GdlDockProps;
        signals: Gdl.Dock.SignalSignatures;
        constructOnly: GdlDockConstructOnly;
        slotCandidates: {};
    };
    GdlDockBar: {
        class: Gdl.DockBar;
        props: GdlDockBarProps;
        signals: Gdl.DockBar.SignalSignatures;
        constructOnly: GdlDockBarConstructOnly;
        slotCandidates: {};
    };
    GdlDockItem: {
        class: Gdl.DockItem;
        props: GdlDockItemProps;
        signals: Gdl.DockItem.SignalSignatures;
        constructOnly: GdlDockItemConstructOnly;
        slotCandidates: {
        'child': 'set_child';
        'default-position': 'set_default_position';
        'tablabel': 'set_tablabel';
        };
    };
    GdlDockItemButtonImage: {
        class: Gdl.DockItemButtonImage;
        props: GdlDockItemButtonImageProps;
        signals: Gdl.DockItemButtonImage.SignalSignatures;
        constructOnly: GdlDockItemButtonImageConstructOnly;
        slotCandidates: {};
    };
    GdlDockItemGrip: {
        class: Gdl.DockItemGrip;
        props: GdlDockItemGripProps;
        signals: Gdl.DockItemGrip.SignalSignatures;
        constructOnly: GdlDockItemGripConstructOnly;
        slotCandidates: {
        'label': 'set_label';
        };
    };
    GdlDockNotebook: {
        class: Gdl.DockNotebook;
        props: GdlDockNotebookProps;
        signals: Gdl.DockNotebook.SignalSignatures;
        constructOnly: GdlDockNotebookConstructOnly;
        slotCandidates: {};
    };
    GdlDockObject: {
        class: Gdl.DockObject;
        props: GdlDockObjectProps;
        signals: Gdl.DockObject.SignalSignatures;
        constructOnly: GdlDockObjectConstructOnly;
        slotCandidates: {};
    };
    GdlDockPaned: {
        class: Gdl.DockPaned;
        props: GdlDockPanedProps;
        signals: Gdl.DockPaned.SignalSignatures;
        constructOnly: GdlDockPanedConstructOnly;
        slotCandidates: {};
    };
    GdlDockPlaceholder: {
        class: Gdl.DockPlaceholder;
        props: GdlDockPlaceholderProps;
        signals: Gdl.DockPlaceholder.SignalSignatures;
        constructOnly: GdlDockPlaceholderConstructOnly;
        slotCandidates: {};
    };
    GdlDockTablabel: {
        class: Gdl.DockTablabel;
        props: GdlDockTablabelProps;
        signals: Gdl.DockTablabel.SignalSignatures;
        constructOnly: GdlDockTablabelConstructOnly;
        slotCandidates: {};
    };
    GdlPreviewWindow: {
        class: Gdl.PreviewWindow;
        props: GdlPreviewWindowProps;
        signals: Gdl.PreviewWindow.SignalSignatures;
        constructOnly: GdlPreviewWindowConstructOnly;
        slotCandidates: {};
    };
    GdlSwitcher: {
        class: Gdl.Switcher;
        props: GdlSwitcherProps;
        signals: Gdl.Switcher.SignalSignatures;
        constructOnly: GdlSwitcherConstructOnly;
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
export const SURFACE_PROVENANCE: string;

/** Declaration GType -> its own settable properties, as GObject registered them. */
export const OWN_PROPS: Readonly<Record<string, readonly string[]>>;

/** Widget GType -> its own signals. */
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
 * `Type.property` -> the release that introduced it.
 *
 * What keeps a runtime cross-check honest across a version gap without an
 * allowlist: a member the installed library lacks is a defect UNLESS the version
 * here is newer than the one running.
 */
export const SINCE: Readonly<Record<string, string>>;
