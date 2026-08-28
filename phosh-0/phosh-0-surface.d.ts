/**
 * The GIR-derived widget VOCABULARY for Phosh-0.
 *
 * GENERATED — do not edit. Provenance: Phosh-0 — dropped empty base(s): GObject.InitiallyUnowned GObject.Object Atk.ImplementorIface — prop(s) no TypeScript value satisfies: Phosh.LayerSurface.layer-shell Phosh.LayerSurface.wl-output
 *
 * 5 concrete widgets, 5 declarations, 1 enum nick unions, 7 slot candidates.
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
import type Phosh from './phosh-0.js';
import type { GtkBinConstructOnly, GtkBinProps, GtkBoxConstructOnly, GtkBoxProps, GtkBuildableConstructOnly, GtkBuildableProps, GtkContainerConstructOnly, GtkContainerProps, GtkIconSizeNick, GtkOrientableConstructOnly, GtkOrientableProps, GtkWidgetConstructOnly, GtkWidgetProps, GtkWindowConstructOnly, GtkWindowProps } from '@girs/gtk-3.0/surface';

// ---------------------------------------------------------------------------
// Enum nicks — the string vocabulary GObject registered, from GIR's `glib:nick`.
//
// Not derived from the member name. Substituting underscores for dashes is not a law:
// some nicks keep an underscore the substitution would have replaced, and only the
// attribute knows which. Gtk-4.0 and Adw-1 contradict no derivation at all, which is
// how a derived nick passes review and breaks elsewhere.
// Re-measure with `scripts/check-nick-derivation.mjs` in ts-for-gir.
// ---------------------------------------------------------------------------

export type PhoshLockscreenPageNick = 'info' | 'extra' | 'unlock';

// ---------------------------------------------------------------------------
// Property surfaces — one interface per GIR DECLARATION, mirroring GIR's own
// inheritance rather than flattening per widget.
//
// The interfaces are load-bearing, not tidiness: `GtkBox` declares four properties
// of its own and `orientation` is not among them — it lives on `Gtk.Orientable`,
// because GObject installs interface properties on the implementor at runtime while
// GIR keeps them once, on the interface.
// ---------------------------------------------------------------------------

/** A #GtkWindow rendered as a LayerSurface by the compositor #PhoshLayerSurface allows to use a Wayland surface backed by the layer-shell protocol as #GtkWindow. */
export interface PhoshLayerSurfaceProps extends GtkWindowProps, GtkBuildableProps {
    /** The edges to anchor the surface to */
    anchor?: number;
    /** The area that is not occluded with other surfaces */
    'exclusive-zone'?: number;
    height?: number;
    /** Whether the surface interacts with the keyboard */
    'kbd-interactivity'?: boolean;
    /** The layer the surface should be attached to */
    layer?: number;
    /** The layer shell wayland global */
    'layer-shell'?: never;
    /** Distance away from the bottom anchor point */
    'margin-bottom'?: number;
    /** "Distance away from the left anchor point */
    'margin-left'?: number;
    /** Distance away from the right anchor point */
    'margin-right'?: number;
    /** Distance away from the top anchor point */
    'margin-top'?: number;
    /** Namespace of the layer surface */
    namespace?: string;
    width?: number;
    /** The wl_output associated with this surface */
    'wl-output'?: never;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type PhoshLayerSurfaceConstructOnly = GtkWindowConstructOnly | GtkBuildableConstructOnly;

/** The main lock screen The lock screen displayed on the primary output featuring the clock and unlock keypad. */
export interface PhoshLockscreenProps extends PhoshLayerSurfaceProps, GtkBuildableProps {
    /** Require entering PIN or password to unlock. */
    'require-unlock'?: boolean;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type PhoshLockscreenConstructOnly = PhoshLayerSurfaceConstructOnly | GtkBuildableConstructOnly;

/** A `PhoshQuickSetting` represents a state of an entity (like Wi-Fi, Bluetooth) using an icon and label. */
export interface PhoshQuickSettingProps extends GtkBoxProps, GtkBuildableProps, GtkOrientableProps {
    /** The active state of the child. */
    active?: boolean;
    /** If the child can display its status. */
    'can-show-status'?: boolean;
    /** Action name to trigger on long-press. */
    'long-press-action-name'?: string;
    /** Action target for `long-press-action-name`. */
    'long-press-action-target'?: string;
    /** If the child is displaying its status. */
    'showing-status'?: boolean;
    /** The status-icon. */
    'status-icon'?: Phosh.StatusIcon;
    /** The status-page. */
    'status-page'?: Phosh.StatusPage;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type PhoshQuickSettingConstructOnly = GtkBoxConstructOnly | GtkBuildableConstructOnly | GtkOrientableConstructOnly;

/** Base class for status icons used in the Phosh's top-bar or in [type@QuickSetting]s. */
export interface PhoshStatusIconProps extends GtkBinProps, GtkBuildableProps {
    /** An extra widget to display. */
    'extra-widget'?: Gtk.Widget | null;
    /** The name of the icon to display in the widget */
    'icon-name'?: string;
    /** The size of the icon to display in the widget */
    'icon-size'?: GtkIconSizeNick | Gtk.IconSize;
    /** Textual information to display. */
    info?: string;
    /** The size of the icon to display in the widget */
    'pixel-size'?: number;
    /** The priority of icon. */
    priority?: number;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type PhoshStatusIconConstructOnly = GtkBinConstructOnly | GtkBuildableConstructOnly;

/** Additional status information associated with a [class@QuickSetting]. */
export interface PhoshStatusPageProps extends GtkBinProps, GtkBuildableProps {
    /** The content of status page. */
    content?: Gtk.Widget;
    /** Widget displayed at the very bottom - usually a button. */
    footer?: Gtk.Widget;
    /** An extra widget to add to end of the status page's header */
    header?: Gtk.Widget;
    /** The status page title */
    title?: string;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type PhoshStatusPageConstructOnly = GtkBinConstructOnly | GtkBuildableConstructOnly;

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
    PhoshLayerSurface: {
        class: Phosh.LayerSurface;
        props: PhoshLayerSurfaceProps;
        signals: Phosh.LayerSurface.SignalSignatures;
        constructOnly: PhoshLayerSurfaceConstructOnly;
        slotCandidates: {};
    };
    PhoshLockscreen: {
        class: Phosh.Lockscreen;
        props: PhoshLockscreenProps;
        signals: Phosh.Lockscreen.SignalSignatures;
        constructOnly: PhoshLockscreenConstructOnly;
        slotCandidates: {
        'extra-page': 'add_extra_page';
        };
    };
    PhoshQuickSetting: {
        class: Phosh.QuickSetting;
        props: PhoshQuickSettingProps;
        signals: Phosh.QuickSetting.SignalSignatures;
        constructOnly: PhoshQuickSettingConstructOnly;
        slotCandidates: {
        'status-icon': 'set_status_icon';
        'status-page': 'set_status_page';
        };
    };
    PhoshStatusIcon: {
        class: Phosh.StatusIcon;
        props: PhoshStatusIconProps;
        signals: Phosh.StatusIcon.SignalSignatures;
        constructOnly: PhoshStatusIconConstructOnly;
        slotCandidates: {
        'extra': 'set_extra_widget';
        };
    };
    PhoshStatusPage: {
        class: Phosh.StatusPage;
        props: PhoshStatusPageProps;
        signals: Phosh.StatusPage.SignalSignatures;
        constructOnly: PhoshStatusPageConstructOnly;
        slotCandidates: {
        'content': 'set_content';
        'footer': 'set_footer';
        'header': 'set_header';
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
