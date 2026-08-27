/**
 * The GIR-derived widget VOCABULARY for Gtd-1.0.
 *
 * GENERATED — do not edit. Provenance: Gtd-1.0 — dropped empty base(s): GObject.InitiallyUnowned GObject.Object Gio.ActionGroup Gio.ActionMap
 *
 * 7 concrete widgets, 7 declarations, 0 enum nick unions, 2 slot candidates.
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

import type Gio from '@girs/gio-2.0';
import type Graphene from '@girs/graphene-1.0';
import type Gtd from './gtd-1.0.js';
import type Gtk from '@girs/gtk-4.0';
import type { GtkAccessibleConstructOnly, GtkAccessibleProps, GtkApplicationWindowConstructOnly, GtkApplicationWindowProps, GtkArrowTypeNick, GtkBoxConstructOnly, GtkBoxProps, GtkBuildableConstructOnly, GtkBuildableProps, GtkConstraintTargetConstructOnly, GtkConstraintTargetProps, GtkNativeConstructOnly, GtkNativeProps, GtkOrientableConstructOnly, GtkOrientableProps, GtkPopoverConstructOnly, GtkPopoverProps, GtkRootConstructOnly, GtkRootProps, GtkShortcutManagerConstructOnly, GtkShortcutManagerProps, GtkWidgetConstructOnly, GtkWidgetProps, GtkWindowConstructOnly, GtkWindowProps } from '@girs/gtk-4.0/surface';

// ---------------------------------------------------------------------------
// Enum nicks — the string vocabulary GObject registered, from GIR's `glib:nick`.
//
// Not derived from the member name. Substituting underscores for dashes is not a law:
// some nicks keep an underscore the substitution would have replaced, and only the
// attribute knows which. Gtk-4.0 and Adw-1 contradict no derivation at all, which is
// how a derived nick passes review and breaks elsewhere.
// Re-measure with `scripts/check-nick-derivation.mjs` in ts-for-gir.
// ---------------------------------------------------------------------------



// ---------------------------------------------------------------------------
// Property surfaces — one interface per GIR DECLARATION, mirroring GIR's own
// inheritance rather than flattening per widget.
//
// The interfaces are load-bearing, not tidiness: `GtkBox` declares four properties
// of its own and `orientation` is not among them — it lives on `Gtk.Orientable`,
// because GObject installs interface properties on the implementor at runtime while
// GIR keeps them once, on the interface.
// ---------------------------------------------------------------------------

export interface GtdMenuButtonProps extends GtkWidgetProps, GtkAccessibleProps, GtkBuildableProps, GtkConstraintTargetProps {
    /** The #GtkWidget to use to align the menu with. */
    'align-widget'?: Gtk.Widget | null;
    /** The #GtkArrowType representing the direction in which the menu or popover will be popped out. */
    direction?: GtkArrowTypeNick | Gtk.ArrowType;
    gicon?: Gio.Icon;
    'has-frame'?: boolean;
    label?: string;
    /** The #GMenuModel from which the popup will be created. */
    'menu-model'?: Gio.MenuModel | null;
    /** The #GtkPopover that will be popped up when the button is clicked. */
    popover?: Gtk.Popover | null;
    'use-underline'?: boolean;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtdMenuButtonConstructOnly = GtkWidgetConstructOnly | GtkAccessibleConstructOnly | GtkBuildableConstructOnly | GtkConstraintTargetConstructOnly;

export interface GtdOmniAreaProps extends GtdWidgetProps, GtkAccessibleProps, GtkBuildableProps, GtkConstraintTargetProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtdOmniAreaConstructOnly = GtdWidgetConstructOnly | GtkAccessibleConstructOnly | GtkBuildableConstructOnly | GtkConstraintTargetConstructOnly;

export interface GtdProviderPopoverProps extends GtkPopoverProps, GtkAccessibleProps, GtkBuildableProps, GtkConstraintTargetProps, GtkNativeProps, GtkShortcutManagerProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtdProviderPopoverConstructOnly = GtkPopoverConstructOnly | GtkAccessibleConstructOnly | GtkBuildableConstructOnly | GtkConstraintTargetConstructOnly | GtkNativeConstructOnly | GtkShortcutManagerConstructOnly;

export interface GtdStarWidgetProps extends GtdWidgetProps, GtkAccessibleProps, GtkBuildableProps, GtkConstraintTargetProps {
    /** Whether the star widget is active or not. */
    active?: boolean;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtdStarWidgetConstructOnly = GtdWidgetConstructOnly | GtkAccessibleConstructOnly | GtkBuildableConstructOnly | GtkConstraintTargetConstructOnly;

export interface GtdTaskListViewProps extends GtkBoxProps, GtkAccessibleProps, GtkBuildableProps, GtkConstraintTargetProps, GtkOrientableProps {
    'show-due-date'?: boolean;
    'show-list-name'?: boolean;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtdTaskListViewConstructOnly = GtkBoxConstructOnly | GtkAccessibleConstructOnly | GtkBuildableConstructOnly | GtkConstraintTargetConstructOnly | GtkOrientableConstructOnly;

export interface GtdWidgetProps extends GtkWidgetProps, GtkAccessibleProps, GtkBuildableProps, GtkConstraintTargetProps {
    'pivot-point'?: Graphene.Point3D;
    'rotation-x'?: number;
    'rotation-y'?: number;
    'rotation-z'?: number;
    'scale-x'?: number;
    'scale-y'?: number;
    'scale-z'?: number;
    'translation-x'?: number;
    'translation-y'?: number;
    'translation-z'?: number;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtdWidgetConstructOnly = GtkWidgetConstructOnly | GtkAccessibleConstructOnly | GtkBuildableConstructOnly | GtkConstraintTargetConstructOnly;

export interface GtdWindowProps extends GtkApplicationWindowProps, GtkAccessibleProps, GtkBuildableProps, GtkConstraintTargetProps, GtkNativeProps, GtkRootProps, GtkShortcutManagerProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtdWindowConstructOnly = GtkApplicationWindowConstructOnly | GtkAccessibleConstructOnly | GtkBuildableConstructOnly | GtkConstraintTargetConstructOnly | GtkNativeConstructOnly | GtkRootConstructOnly | GtkShortcutManagerConstructOnly;

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
    GtdMenuButton: {
        class: Gtd.MenuButton;
        props: GtdMenuButtonProps;
        signals: Gtd.MenuButton.SignalSignatures;
        constructOnly: GtdMenuButtonConstructOnly;
        slotCandidates: {
        'align': 'set_align_widget';
        'popover': 'set_popover';
        };
    };
    GtdOmniArea: {
        class: Gtd.OmniArea;
        props: GtdOmniAreaProps;
        signals: Gtd.OmniArea.SignalSignatures;
        constructOnly: GtdOmniAreaConstructOnly;
        slotCandidates: {};
    };
    GtdProviderPopover: {
        class: Gtd.ProviderPopover;
        props: GtdProviderPopoverProps;
        signals: Gtd.ProviderPopover.SignalSignatures;
        constructOnly: GtdProviderPopoverConstructOnly;
        slotCandidates: {};
    };
    GtdStarWidget: {
        class: Gtd.StarWidget;
        props: GtdStarWidgetProps;
        signals: Gtd.StarWidget.SignalSignatures;
        constructOnly: GtdStarWidgetConstructOnly;
        slotCandidates: {};
    };
    GtdTaskListView: {
        class: Gtd.TaskListView;
        props: GtdTaskListViewProps;
        signals: Gtd.TaskListView.SignalSignatures;
        constructOnly: GtdTaskListViewConstructOnly;
        slotCandidates: {};
    };
    GtdWidget: {
        class: Gtd.Widget;
        props: GtdWidgetProps;
        signals: Gtd.Widget.SignalSignatures;
        constructOnly: GtdWidgetConstructOnly;
        slotCandidates: {};
    };
    GtdWindow: {
        class: Gtd.Window;
        props: GtdWindowProps;
        signals: Gtd.Window.SignalSignatures;
        constructOnly: GtdWindowConstructOnly;
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
