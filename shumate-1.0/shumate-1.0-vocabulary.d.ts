/**
 * The GIR-derived widget VOCABULARY for Shumate-1.0.
 *
 * GENERATED — do not edit. Provenance: Shumate-1.0 — library 1.7.0 — dropped empty base(s): GObject.InitiallyUnowned GObject.Object
 *
 * 10 concrete widgets, 12 declarations, 5 enum nick unions, 4 slot candidates.
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

import type Gdk from '@girs/gdk-4.0';
import type Gtk from '@girs/gtk-4.0';
import type Shumate from './shumate-1.0.js';
import type { GtkAccessibleConstructOnly, GtkAccessibleProps, GtkBuildableConstructOnly, GtkBuildableProps, GtkConstraintTargetConstructOnly, GtkConstraintTargetProps, GtkSelectionModeNick, GtkWidgetConstructOnly, GtkWidgetProps } from '@girs/gtk-4.0/vocabulary';

// ---------------------------------------------------------------------------
// Enum nicks — the string vocabulary GObject registered, from GIR's `glib:nick`.
//
// Not derived from the member name. Substituting underscores for dashes is not a law:
// some nicks keep an underscore the substitution would have replaced, and only the
// attribute knows which. Gtk-4.0 and Adw-1 contradict no derivation at all, which is
// how a derived nick passes review and breaks elsewhere.
// Re-measure with `scripts/check-nick-derivation.mjs` in ts-for-gir.
// ---------------------------------------------------------------------------

export type ShumateGeometryTypeNick = 'unknown' | 'point' | 'multipoint' | 'linestring' | 'multilinestring' | 'polygon' | 'multipolygon';
export type ShumateMapProjectionNick = 'mercator';
export type ShumateStateNick = 'none' | 'loading' | 'loaded' | 'done';
export type ShumateUnitNick = 'both' | 'metric' | 'imperial';
export type ShumateVectorValueTypeNick = 'null' | 'number' | 'boolean' | 'string' | 'color' | 'array' | 'resolved-image' | 'formatted-string' | 'collator';

// ---------------------------------------------------------------------------
// Property surfaces — one interface per GIR DECLARATION, mirroring GIR's own
// inheritance rather than flattening per widget.
//
// The interfaces are load-bearing, not tidiness: `GtkBox` declares four properties
// of its own and `orientation` is not among them — it lives on `Gtk.Orientable`,
// because GObject installs interface properties on the implementor at runtime while
// GIR keeps them once, on the interface.
// ---------------------------------------------------------------------------

/** A widget displaying a compass. */
export interface ShumateCompassProps extends GtkWidgetProps, GtkAccessibleProps, GtkBuildableProps, GtkConstraintTargetProps {
    /** The viewport to use. */
    viewport?: Shumate.Viewport | null;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type ShumateCompassConstructOnly = GtkWidgetConstructOnly | GtkAccessibleConstructOnly | GtkBuildableConstructOnly | GtkConstraintTargetConstructOnly;

/** Every layer (overlay that moves together with the map) has to inherit this class and implement its virtual methods. */
export interface ShumateLayerProps extends GtkWidgetProps, GtkAccessibleProps, GtkBuildableProps, GtkConstraintTargetProps {
    viewport?: Shumate.Viewport;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type ShumateLayerConstructOnly = GtkWidgetConstructOnly | GtkAccessibleConstructOnly | GtkBuildableConstructOnly | GtkConstraintTargetConstructOnly | 'viewport';

/** A widget that displays license text. */
export interface ShumateLicenseProps extends GtkWidgetProps, GtkAccessibleProps, GtkBuildableProps, GtkConstraintTargetProps {
    /**
     * Sets additional text to be displayed in the license area.
     * @default NULL
     */
    'extra-text'?: string;
    /**
     * The license's horizontal alignment
     * @default 0.500000
     */
    xalign?: number;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type ShumateLicenseConstructOnly = GtkWidgetConstructOnly | GtkAccessibleConstructOnly | GtkBuildableConstructOnly | GtkConstraintTargetConstructOnly;

/** An interface common to objects having latitude and longitude By implementing #ShumateLocation the object declares that it has latitude and longitude and can be used to specify location on the map. */
export interface ShumateLocationProps {
    /**
     * The latitude coordonate in degrees
     * @default 0.000000
     */
    latitude?: number;
    /**
     * The longitude coordonate in degrees
     * @default 0.000000
     */
    longitude?: number;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type ShumateLocationConstructOnly = never;

/** The Map widget is a [class@Gtk.Widget] that show and allows interaction with the user. */
export interface ShumateMapProps extends GtkWidgetProps, GtkAccessibleProps, GtkBuildableProps, GtkConstraintTargetProps {
    /**
     * Animate zoom change when zooming in/out.
     * @default TRUE
     */
    'animate-zoom'?: boolean;
    /**
     * The duration of an animation when going to a location, in milliseconds.
     * @default 0
     */
    'go-to-duration'?: number;
    /**
     * Should the view zoom in and recenter when the user double click on the map.
     * @default TRUE
     */
    'zoom-on-double-click'?: boolean;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type ShumateMapConstructOnly = GtkWidgetConstructOnly | GtkAccessibleConstructOnly | GtkBuildableConstructOnly | GtkConstraintTargetConstructOnly;

/** A [class@Shumate.Layer] implementation that fetches tiles from a [class@Shumate.MapSource] and draws them as a grid. */
export interface ShumateMapLayerProps extends ShumateLayerProps, GtkAccessibleProps, GtkBuildableProps, GtkConstraintTargetProps {
    /** The source of the tiles this map layer displays. */
    'map-source'?: Shumate.MapSource;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type ShumateMapLayerConstructOnly = ShumateLayerConstructOnly | GtkAccessibleConstructOnly | GtkBuildableConstructOnly | GtkConstraintTargetConstructOnly;

/** Markers represent points of interest on a map. */
export interface ShumateMarkerProps extends GtkWidgetProps, GtkAccessibleProps, GtkBuildableProps, GtkConstraintTargetProps, ShumateLocationProps {
    /** The child widget of the marker */
    child?: Gtk.Widget | null;
    /**
     * The selectable state of the marker
     * @default FALSE
     */
    selectable?: boolean;
    /**
     * The x hotspot of the marker, a negative value means that the actual x hotspot is calculated with the [property@Gtk.Widget:halign] property.
     * @since 1.5
     * @default -1.000000
     */
    'x-hotspot'?: number;
    /**
     * The y hotspot of the marker, a negative value means that the actual y hotspot is calculated with the [property@Gtk.Widget:valign] property.
     * @since 1.5
     * @default -1.000000
     */
    'y-hotspot'?: number;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type ShumateMarkerConstructOnly = GtkWidgetConstructOnly | GtkAccessibleConstructOnly | GtkBuildableConstructOnly | GtkConstraintTargetConstructOnly | ShumateLocationConstructOnly;

/** Displays markers on the map. */
export interface ShumateMarkerLayerProps extends ShumateLayerProps, GtkAccessibleProps, GtkBuildableProps, GtkConstraintTargetProps {
    /**
     * Determines the type of selection that will be performed.
     * @default GTK_SELECTION_NONE
     */
    'selection-mode'?: GtkSelectionModeNick | Gtk.SelectionMode;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type ShumateMarkerLayerConstructOnly = ShumateLayerConstructOnly | GtkAccessibleConstructOnly | GtkBuildableConstructOnly | GtkConstraintTargetConstructOnly;

/** A layer displaying line path between inserted [iface@Location] objects This layer shows a connection between inserted objects implementing the [iface@Location] interface. */
export interface ShumatePathLayerProps extends ShumateLayerProps, GtkAccessibleProps, GtkBuildableProps, GtkConstraintTargetProps {
    /**
     * The shape is a closed path
     * @default FALSE
     */
    closed?: boolean;
    /**
     * The shape should be filled
     * @default FALSE
     */
    fill?: boolean;
    /** The path's fill color */
    'fill-color'?: Gdk.RGBA;
    /** The path's outline color */
    'outline-color'?: Gdk.RGBA;
    /**
     * The path's outline width (in pixels)
     * @default 0.000000
     */
    'outline-width'?: number;
    /**
     * The shape should be stroked
     * @default TRUE
     */
    stroke?: boolean;
    /** The path's stroke color */
    'stroke-color'?: Gdk.RGBA;
    /**
     * The path's stroke width (in pixels)
     * @default 2.000000
     */
    'stroke-width'?: number;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type ShumatePathLayerConstructOnly = ShumateLayerConstructOnly | GtkAccessibleConstructOnly | GtkBuildableConstructOnly | GtkConstraintTargetConstructOnly;

/** A simple variant of [class@Marker] showing the location of the point as a circle on the map. */
export interface ShumatePointProps extends ShumateMarkerProps, GtkAccessibleProps, GtkBuildableProps, GtkConstraintTargetProps, ShumateLocationProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type ShumatePointConstructOnly = ShumateMarkerConstructOnly | GtkAccessibleConstructOnly | GtkBuildableConstructOnly | GtkConstraintTargetConstructOnly | ShumateLocationConstructOnly;

/** A widget displaying a scale. */
export interface ShumateScaleProps extends GtkWidgetProps, GtkAccessibleProps, GtkBuildableProps, GtkConstraintTargetProps {
    /**
     * The size of the map scale on screen in pixels.
     * @default 150
     */
    'max-width'?: number;
    /**
     * The scale's units.
     * @default SHUMATE_UNIT_BOTH
     */
    unit?: ShumateUnitNick | Shumate.Unit;
    /** The viewport to use. */
    viewport?: Shumate.Viewport | null;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type ShumateScaleConstructOnly = GtkWidgetConstructOnly | GtkAccessibleConstructOnly | GtkBuildableConstructOnly | GtkConstraintTargetConstructOnly;

/** A ready-to-use map [class@Gtk.Widget].If you want to use your own implementation, you can look at the [class@Shumate.Map] widget. */
export interface ShumateSimpleMapProps extends GtkWidgetProps, GtkAccessibleProps, GtkBuildableProps, GtkConstraintTargetProps {
    'map-source'?: Shumate.MapSource;
    /** @default TRUE */
    'show-zoom-buttons'?: boolean;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type ShumateSimpleMapConstructOnly = GtkWidgetConstructOnly | GtkAccessibleConstructOnly | GtkBuildableConstructOnly | GtkConstraintTargetConstructOnly;

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
    ShumateCompass: {
        class: Shumate.Compass;
        props: ShumateCompassProps;
        signals: Shumate.Compass.SignalSignatures;
        constructOnly: ShumateCompassConstructOnly;
        slotCandidates: {};
    };
    ShumateLicense: {
        class: Shumate.License;
        props: ShumateLicenseProps;
        signals: Shumate.License.SignalSignatures;
        constructOnly: ShumateLicenseConstructOnly;
        slotCandidates: {};
    };
    ShumateMap: {
        class: Shumate.Map;
        props: ShumateMapProps;
        signals: Shumate.Map.SignalSignatures;
        constructOnly: ShumateMapConstructOnly;
        slotCandidates: {
        'layer': 'add_layer';
        };
    };
    ShumateMapLayer: {
        class: Shumate.MapLayer;
        props: ShumateMapLayerProps;
        signals: Shumate.MapLayer.SignalSignatures;
        constructOnly: ShumateMapLayerConstructOnly;
        slotCandidates: {};
    };
    ShumateMarker: {
        class: Shumate.Marker;
        props: ShumateMarkerProps;
        signals: Shumate.Marker.SignalSignatures;
        constructOnly: ShumateMarkerConstructOnly;
        slotCandidates: {
        'child': 'set_child';
        };
    };
    ShumateMarkerLayer: {
        class: Shumate.MarkerLayer;
        props: ShumateMarkerLayerProps;
        signals: Shumate.MarkerLayer.SignalSignatures;
        constructOnly: ShumateMarkerLayerConstructOnly;
        slotCandidates: {
        'marker': 'add_marker';
        };
    };
    ShumatePathLayer: {
        class: Shumate.PathLayer;
        props: ShumatePathLayerProps;
        signals: Shumate.PathLayer.SignalSignatures;
        constructOnly: ShumatePathLayerConstructOnly;
        slotCandidates: {};
    };
    ShumatePoint: {
        class: Shumate.Point;
        props: ShumatePointProps;
        signals: Shumate.Point.SignalSignatures;
        constructOnly: ShumatePointConstructOnly;
        slotCandidates: {};
    };
    ShumateScale: {
        class: Shumate.Scale;
        props: ShumateScaleProps;
        signals: Shumate.Scale.SignalSignatures;
        constructOnly: ShumateScaleConstructOnly;
        slotCandidates: {};
    };
    ShumateSimpleMap: {
        class: Shumate.SimpleMap;
        props: ShumateSimpleMapProps;
        signals: Shumate.SimpleMap.SignalSignatures;
        constructOnly: ShumateSimpleMapConstructOnly;
        slotCandidates: {
        'overlay-layer': 'add_overlay_layer';
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
