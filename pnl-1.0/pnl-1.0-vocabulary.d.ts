/**
 * The GIR-derived widget VOCABULARY for Pnl-1.0.
 *
 * GENERATED — do not edit. Provenance: Pnl-1.0 — library 3.25.1 — dropped empty base(s): GObject.InitiallyUnowned GObject.Object Atk.ImplementorIface
 *
 * 13 concrete widgets, 15 declarations, 2 enum nick unions, 2 slot candidates.
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

import type Gtk from '@girs/gtk-3.0';
import type Pnl from './pnl-1.0.js';
import type { GtkActionableConstructOnly, GtkActionableProps, GtkActivatableConstructOnly, GtkActivatableProps, GtkBinConstructOnly, GtkBinProps, GtkBoxConstructOnly, GtkBoxProps, GtkBuildableConstructOnly, GtkBuildableProps, GtkButtonConstructOnly, GtkButtonProps, GtkContainerConstructOnly, GtkContainerProps, GtkEventBoxConstructOnly, GtkEventBoxProps, GtkOrientableConstructOnly, GtkOrientableProps, GtkOrientationNick, GtkPositionTypeNick, GtkToggleButtonConstructOnly, GtkToggleButtonProps, GtkWidgetConstructOnly, GtkWidgetProps, GtkWindowConstructOnly, GtkWindowProps } from '@girs/gtk-3.0/vocabulary';

// ---------------------------------------------------------------------------
// Enum nicks — the string vocabulary GObject registered, from GIR's `glib:nick`.
//
// Not derived from the member name. Substituting underscores for dashes is not a law:
// some nicks keep an underscore the substitution would have replaced, and only the
// attribute knows which. Gtk-4.0 and Adw-1 contradict no derivation at all, which is
// how a derived nick passes review and breaks elsewhere.
// Re-measure with `scripts/check-nick-derivation.mjs` in ts-for-gir.
// ---------------------------------------------------------------------------

export type PnlAnimationModeNick = 'linear' | 'ease-in-quad' | 'ease-in-out-quad' | 'ease-out-quad' | 'ease-in-cubic' | 'ease-out-cubic' | 'ease-in-out-cubic';
export type PnlDockRevealerTransitionTypeNick = 'none' | 'slide-right' | 'slide-left' | 'slide-up' | 'slide-down';

// ---------------------------------------------------------------------------
// Property surfaces — one interface per GIR DECLARATION, mirroring GIR's own
// inheritance rather than flattening per widget.
//
// The interfaces are load-bearing, not tidiness: `GtkBox` declares four properties
// of its own and `orientation` is not among them — it lives on `Gtk.Orientable`,
// because GObject installs interface properties on the implementor at runtime while
// GIR keeps them once, on the interface.
// ---------------------------------------------------------------------------

export interface PnlDockProps extends GtkContainerProps {
    manager?: Pnl.DockManager;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type PnlDockConstructOnly = GtkContainerConstructOnly;

export interface PnlDockBinProps extends GtkContainerProps, GtkBuildableProps, PnlDockProps, PnlDockItemProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type PnlDockBinConstructOnly = GtkContainerConstructOnly | GtkBuildableConstructOnly | PnlDockConstructOnly | PnlDockItemConstructOnly;

export interface PnlDockBinEdgeProps extends PnlDockRevealerProps, GtkBuildableProps, PnlDockItemProps {
    edge?: GtkPositionTypeNick | Gtk.PositionType;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type PnlDockBinEdgeConstructOnly = PnlDockRevealerConstructOnly | GtkBuildableConstructOnly | PnlDockItemConstructOnly;

export interface PnlDockItemProps extends GtkWidgetProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type PnlDockItemConstructOnly = GtkWidgetConstructOnly;

export interface PnlDockOverlayProps extends GtkEventBoxProps, GtkBuildableProps, PnlDockProps, PnlDockItemProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type PnlDockOverlayConstructOnly = GtkEventBoxConstructOnly | GtkBuildableConstructOnly | PnlDockConstructOnly | PnlDockItemConstructOnly;

export interface PnlDockOverlayEdgeProps extends GtkBinProps, GtkBuildableProps, PnlDockItemProps {
    edge?: GtkPositionTypeNick | Gtk.PositionType;
    position?: number;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type PnlDockOverlayEdgeConstructOnly = GtkBinConstructOnly | GtkBuildableConstructOnly | PnlDockItemConstructOnly;

export interface PnlDockPanedProps extends PnlMultiPanedProps, GtkBuildableProps, GtkOrientableProps, PnlDockItemProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type PnlDockPanedConstructOnly = PnlMultiPanedConstructOnly | GtkBuildableConstructOnly | GtkOrientableConstructOnly | PnlDockItemConstructOnly;

/** This widget is a bit like #GtkRevealer with a couple of important differences. */
export interface PnlDockRevealerProps extends GtkBinProps, GtkBuildableProps {
    position?: number;
    'position-set'?: boolean;
    'reveal-child'?: boolean;
    'transition-duration'?: number;
    'transition-type'?: PnlDockRevealerTransitionTypeNick | Pnl.DockRevealerTransitionType;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type PnlDockRevealerConstructOnly = GtkBinConstructOnly | GtkBuildableConstructOnly;

export interface PnlDockStackProps extends GtkBoxProps, GtkBuildableProps, GtkOrientableProps, PnlDockItemProps {
    edge?: GtkPositionTypeNick | Gtk.PositionType;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type PnlDockStackConstructOnly = GtkBoxConstructOnly | GtkBuildableConstructOnly | GtkOrientableConstructOnly | PnlDockItemConstructOnly;

export interface PnlDockTabStripProps extends PnlTabStripProps, GtkBuildableProps, GtkOrientableProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type PnlDockTabStripConstructOnly = PnlTabStripConstructOnly | GtkBuildableConstructOnly | GtkOrientableConstructOnly;

export interface PnlDockWidgetProps extends GtkBinProps, GtkBuildableProps, PnlDockItemProps {
    manager?: Pnl.DockManager;
    title?: string;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type PnlDockWidgetConstructOnly = GtkBinConstructOnly | GtkBuildableConstructOnly | PnlDockItemConstructOnly;

export interface PnlDockWindowProps extends GtkWindowProps, GtkBuildableProps, PnlDockProps, PnlDockItemProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type PnlDockWindowConstructOnly = GtkWindowConstructOnly | GtkBuildableConstructOnly | PnlDockConstructOnly | PnlDockItemConstructOnly;

/** This widget is similar to #GtkPaned except that it allows adding more than two children to the widget. */
export interface PnlMultiPanedProps extends GtkContainerProps, GtkBuildableProps, GtkOrientableProps {
    orientation?: GtkOrientationNick | Gtk.Orientation;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type PnlMultiPanedConstructOnly = GtkContainerConstructOnly | GtkBuildableConstructOnly | GtkOrientableConstructOnly;

export interface PnlTabProps extends GtkToggleButtonProps, GtkActionableProps, GtkActivatableProps, GtkBuildableProps {
    edge?: GtkPositionTypeNick | Gtk.PositionType;
    title?: string;
    widget?: Gtk.Widget | null;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type PnlTabConstructOnly = GtkToggleButtonConstructOnly | GtkActionableConstructOnly | GtkActivatableConstructOnly | GtkBuildableConstructOnly;

export interface PnlTabStripProps extends GtkBoxProps, GtkBuildableProps, GtkOrientableProps {
    edge?: GtkPositionTypeNick | Gtk.PositionType;
    stack?: Gtk.Stack | null;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type PnlTabStripConstructOnly = GtkBoxConstructOnly | GtkBuildableConstructOnly | GtkOrientableConstructOnly;

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
    PnlDockBin: {
        class: Pnl.DockBin;
        props: PnlDockBinProps;
        signals: Pnl.DockBin.SignalSignatures;
        constructOnly: PnlDockBinConstructOnly;
        slotCandidates: {};
    };
    PnlDockBinEdge: {
        class: Pnl.DockBinEdge;
        props: PnlDockBinEdgeProps;
        signals: Pnl.DockBinEdge.SignalSignatures;
        constructOnly: PnlDockBinEdgeConstructOnly;
        slotCandidates: {};
    };
    PnlDockOverlay: {
        class: Pnl.DockOverlay;
        props: PnlDockOverlayProps;
        signals: Pnl.DockOverlay.SignalSignatures;
        constructOnly: PnlDockOverlayConstructOnly;
        slotCandidates: {};
    };
    PnlDockOverlayEdge: {
        class: Pnl.DockOverlayEdge;
        props: PnlDockOverlayEdgeProps;
        signals: Pnl.DockOverlayEdge.SignalSignatures;
        constructOnly: PnlDockOverlayEdgeConstructOnly;
        slotCandidates: {};
    };
    PnlDockPaned: {
        class: Pnl.DockPaned;
        props: PnlDockPanedProps;
        signals: Pnl.DockPaned.SignalSignatures;
        constructOnly: PnlDockPanedConstructOnly;
        slotCandidates: {};
    };
    PnlDockRevealer: {
        class: Pnl.DockRevealer;
        props: PnlDockRevealerProps;
        signals: Pnl.DockRevealer.SignalSignatures;
        constructOnly: PnlDockRevealerConstructOnly;
        slotCandidates: {};
    };
    PnlDockStack: {
        class: Pnl.DockStack;
        props: PnlDockStackProps;
        signals: Pnl.DockStack.SignalSignatures;
        constructOnly: PnlDockStackConstructOnly;
        slotCandidates: {};
    };
    PnlDockTabStrip: {
        class: Pnl.DockTabStrip;
        props: PnlDockTabStripProps;
        signals: Pnl.DockTabStrip.SignalSignatures;
        constructOnly: PnlDockTabStripConstructOnly;
        slotCandidates: {};
    };
    PnlDockWidget: {
        class: Pnl.DockWidget;
        props: PnlDockWidgetProps;
        signals: Pnl.DockWidget.SignalSignatures;
        constructOnly: PnlDockWidgetConstructOnly;
        slotCandidates: {};
    };
    PnlDockWindow: {
        class: Pnl.DockWindow;
        props: PnlDockWindowProps;
        signals: Pnl.DockWindow.SignalSignatures;
        constructOnly: PnlDockWindowConstructOnly;
        slotCandidates: {};
    };
    PnlMultiPaned: {
        class: Pnl.MultiPaned;
        props: PnlMultiPanedProps;
        signals: Pnl.MultiPaned.SignalSignatures;
        constructOnly: PnlMultiPanedConstructOnly;
        slotCandidates: {};
    };
    PnlTab: {
        class: Pnl.Tab;
        props: PnlTabProps;
        signals: Pnl.Tab.SignalSignatures;
        constructOnly: PnlTabConstructOnly;
        slotCandidates: {
        'widget': 'set_widget';
        };
    };
    PnlTabStrip: {
        class: Pnl.TabStrip;
        props: PnlTabStripProps;
        signals: Pnl.TabStrip.SignalSignatures;
        constructOnly: PnlTabStripConstructOnly;
        slotCandidates: {
        'stack': 'set_stack';
        };
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
