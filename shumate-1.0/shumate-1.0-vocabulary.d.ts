/**
 * The GIR-derived widget VOCABULARY for Shumate-1.0.
 *
 * GENERATED — do not edit. Provenance: Shumate-1.0 — library 1.7.0
 *
 * 24 instantiable GTypes (of which 10 concrete widgets), 28 declarations, 5 enum nick unions, 4 slot candidates.
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
import type { GdkPaintableConstructOnly, GdkPaintableProps } from '@girs/gdk-4.0/vocabulary';
import type { GInitableConstructOnly, GInitableProps, GListModelConstructOnly, GListModelProps } from '@girs/gio-2.0/vocabulary';
import type { GInitiallyUnownedConstructOnly, GInitiallyUnownedProps, GObjectConstructOnly, GObjectProps } from '@girs/gobject-2.0/vocabulary';
import type { GtkAccessibleConstructOnly, GtkAccessibleProps, GtkBuildableConstructOnly, GtkBuildableProps, GtkConstraintTargetConstructOnly, GtkConstraintTargetProps, GtkSelectionModeNick, GtkSymbolicPaintableConstructOnly, GtkSymbolicPaintableProps, GtkWidgetConstructOnly, GtkWidgetProps } from '@girs/gtk-4.0/vocabulary';

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

/** A simple object implementing [iface@Location]. */
export interface ShumateCoordinateProps extends GInitiallyUnownedProps, ShumateLocationProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type ShumateCoordinateConstructOnly = GInitiallyUnownedConstructOnly | ShumateLocationConstructOnly;

/** The base class used to retrieve tiles as [struct@GLib.Bytes]. */
export interface ShumateDataSourceProps extends GObjectProps {
    /**
     * The maximum zoom level
     * @since 1.1
     * @default 30
     */
    'max-zoom-level'?: number;
    /**
     * The minimum zoom level
     * @since 1.1
     * @default 0
     */
    'min-zoom-level'?: number;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type ShumateDataSourceConstructOnly = GObjectConstructOnly;

/** Represents a request to a [class@DataSource] for a tile. */
export interface ShumateDataSourceRequestProps extends GObjectProps {
    /**
     * The X coordinate of the requested tile.
     * @since 1.1
     * @default 0
     */
    x?: number;
    /**
     * The Y coordinate of the requested tile.
     * @since 1.1
     * @default 0
     */
    y?: number;
    /**
     * The zoom level of the requested tile.
     * @since 1.1
     * @default 0
     */
    'zoom-level'?: number;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type ShumateDataSourceRequestConstructOnly = GObjectConstructOnly | 'x' | 'y' | 'zoom-level';

/** A cache that stores and retrieves tiles from the file system. */
export interface ShumateFileCacheProps extends GObjectProps {
    /**
     * The directory where the tile database is stored.
     * @default NULL
     */
    'cache-dir'?: string;
    /**
     * The key used to store and retrieve tiles from the cache.
     * @default NULL
     */
    'cache-key'?: string;
    /**
     * The cache size limit in bytes.
     * @default 100000000
     */
    'size-limit'?: number;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type ShumateFileCacheConstructOnly = GObjectConstructOnly | 'cache-dir' | 'cache-key';

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
export interface ShumateLocationProps extends GObjectProps {
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
export type ShumateLocationConstructOnly = GObjectConstructOnly;

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

/** The base class for all map sources. */
export interface ShumateMapSourceProps extends GObjectProps {
    /**
     * The id of the map source
     * @default NULL
     */
    id?: string;
    /**
     * The usage license of the map source
     * @default NULL
     */
    license?: string;
    /**
     * The usage license's uri for more information
     * @default NULL
     */
    'license-uri'?: string;
    /**
     * The maximum zoom level
     * @default 18
     */
    'max-zoom-level'?: number;
    /**
     * The minimum zoom level
     * @default 0
     */
    'min-zoom-level'?: number;
    /**
     * The name of the map source
     * @default NULL
     */
    name?: string;
    /**
     * The map projection of the map source
     * @default SHUMATE_MAP_PROJECTION_MERCATOR
     */
    projection?: ShumateMapProjectionNick | Shumate.MapProjection;
    /**
     * The tile size of the map source
     * @default 256
     */
    'tile-size'?: number;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type ShumateMapSourceConstructOnly = GObjectConstructOnly;

/** This object allows you to hold [class@MapSource] instances, you can access a default set of sources with [method@MapSourceRegistry.populate_defaults]. */
export interface ShumateMapSourceRegistryProps extends GObjectProps, GListModelProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type ShumateMapSourceRegistryConstructOnly = GObjectConstructOnly | GListModelConstructOnly;

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

export interface ShumateRasterRendererProps extends ShumateMapSourceProps {
    /** The data source that provides image tiles to display. */
    'data-source'?: Shumate.DataSource;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type ShumateRasterRendererConstructOnly = ShumateMapSourceConstructOnly | 'data-source';

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

/** An object containing the details of a map feature that has been clicked. */
export interface ShumateSymbolEventProps extends GObjectProps, ShumateLocationProps {
    /**
     * The number of clicks/presses triggering the symbol event.
     * @since 1.5
     * @default 1
     */
    'n-press'?: number;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type ShumateSymbolEventConstructOnly = GObjectConstructOnly | ShumateLocationConstructOnly;

/** An object that represents map tiles. */
export interface ShumateTileProps extends GObjectProps {
    /**
     * Specifies whether the tile should fade in when loading
     * @default FALSE
     */
    'fade-in'?: boolean;
    /** The [iface@Gdk.Paintable] backing the tile */
    paintable?: Gdk.Paintable | null;
    /**
     * The scale factor of the widget the tile will be displayed in.
     * @since 1.1
     * @default 1.000000
     */
    'scale-factor'?: number;
    /**
     * The size of the tile in pixels
     * @default 256
     */
    size?: number;
    /**
     * The state of the tile
     * @default SHUMATE_STATE_NONE
     */
    state?: ShumateStateNick | Shumate.State;
    /**
     * The x position of the tile
     * @default 0
     */
    x?: number;
    /**
     * The y position of the tile
     * @default 0
     */
    y?: number;
    /**
     * The zoom level of the tile
     * @default 0
     */
    'zoom-level'?: number;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type ShumateTileConstructOnly = GObjectConstructOnly;

/** A [class@DataSource] that asynchronously downloads tiles from an online service using a given template. */
export interface ShumateTileDownloaderProps extends ShumateDataSourceProps {
    /**
     * A template for construting the URL to download a tile from.
     * @default NULL
     */
    'url-template'?: string;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type ShumateTileDownloaderConstructOnly = ShumateDataSourceConstructOnly | 'url-template';

/** Provides low-level access to the contents of a vector tile. */
export interface ShumateVectorReaderProps extends GObjectProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type ShumateVectorReaderConstructOnly = GObjectConstructOnly;

/** Reads the layers and features of a vector tile. */
export interface ShumateVectorReaderIterProps extends GObjectProps {
    reader?: Shumate.VectorReader;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type ShumateVectorReaderIterConstructOnly = GObjectConstructOnly | 'reader';

/** A [class@MapSource] that renders tiles from a given vector data source. */
export interface ShumateVectorRendererProps extends ShumateMapSourceProps, GInitableProps {
    /**
     * The sprite sheet used to render icons and textures.
     * @since 1.1
     */
    'sprite-sheet'?: Shumate.VectorSpriteSheet;
    /**
     * A map style, in [Mapbox Style Specification](https://docs.mapbox.com/mapbox-gl-js/style-spec/) format.
     * @default NULL
     */
    'style-json'?: string;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type ShumateVectorRendererConstructOnly = ShumateMapSourceConstructOnly | GInitableConstructOnly | 'style-json';

/** A sprite used to draw textures or icons. */
export interface ShumateVectorSpriteProps extends GObjectProps, GdkPaintableProps, GtkSymbolicPaintableProps {
    /**
     * The height at which the sprite should be drawn, in pixels.
     * @since 1.1
     * @default 0
     */
    height?: number;
    /**
     * The intended scale factor of the sprite.
     * @since 1.1
     * @default 1.000000
     */
    'scale-factor'?: number;
    /**
     * The [iface@Gdk.Paintable] used to draw the sprite.
     * @since 1.1
     */
    'source-paintable'?: Gdk.Paintable;
    /**
     * The area of the source rectangle to draw, or %NULL to use the entire paintable.
     * @since 1.1
     */
    'source-rect'?: Gdk.Rectangle | null;
    /**
     * The width at which the sprite should be drawn, in pixels.
     * @since 1.1
     * @default 0
     */
    width?: number;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type ShumateVectorSpriteConstructOnly = GObjectConstructOnly | GdkPaintableConstructOnly | GtkSymbolicPaintableConstructOnly | 'height' | 'scale-factor' | 'source-paintable' | 'source-rect' | 'width';

/** A collection of [class@VectorSprite]s. */
export interface ShumateVectorSpriteSheetProps extends GObjectProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type ShumateVectorSpriteSheetConstructOnly = GObjectConstructOnly;

/** The object holding the coordinate, zoom-level, and rotation state of the current view. */
export interface ShumateViewportProps extends GObjectProps, ShumateLocationProps {
    /**
     * The highest allowed level of zoom of the content.
     * @default 20
     */
    'max-zoom-level'?: number;
    /**
     * The lowest allowed level of zoom of the content.
     * @default 0
     */
    'min-zoom-level'?: number;
    /** The reference #ShumateMapSource being displayed */
    'reference-map-source'?: Shumate.MapSource | null;
    /**
     * The rotation of the map view, in radians clockwise from up being due north
     * @default 0.000000
     */
    rotation?: number;
    /**
     * The level of zoom of the content.
     * @default 3.000000
     */
    'zoom-level'?: number;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type ShumateViewportConstructOnly = GObjectConstructOnly | ShumateLocationConstructOnly;

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
    /**
     * `c:identifier-prefixes` from the GIR, verbatim and in order — `['G']` for Gio.
     *
     * The C prefix a type REFERENCE needs: resolving `Gio.Icon` means producing `GIcon`,
     * and nothing else in this package states that `Gio` spells itself `G`. Carried rather
     * than derived because GIR carries it, and a derivation over the `DECLS` keys is wrong
     * wherever the C prefix is not a prefix of the type NAMES: gdkx11-4.0 and gdkwayland-4.0
     * both state `Gdk` while every key they declare begins `GdkX11`/`GdkWayland`.
     *
     * Empty where the GIR states none — 17 of the 627 emitting namespaces — because
     * inventing the namespace name there is a confident wrong answer in place of a missing
     * one. A LIST because 20 of them state more than one, which no single string expresses.
     */
    readonly identifierPrefixes: readonly string[];
    /**
     * Sibling vocabularies this one's DECLARATIONS come from, as import specifiers.
     *
     * A chain link with no `OWN_PROPS` row is ambiguous on its own — `GtkSeparator` has no
     * settable property, `GApplication` has its properties in another package — and this
     * list is what tells the two apart. Enum and bitfield NUMBERS are not here: those are
     * carried in this file, because a `PROP_ENUMS` row naming a foreign GType gives a
     * consumer nothing to load and a `.ui` file using the property never names its owner.
     */
    readonly requiredVocabularies: readonly string[];
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
 * `<declaration GType>.<property>` -> the GType of that property's own type.
 *
 * `PROP_ENUMS` one case wider, and separate on purpose: that table promises the GType it names
 * has NUMBERS, and this one promises only that the GType is the property's. A host inferring a
 * type from a property — the middle of an uncast lookup chain, an uncast closure's return type —
 * reads this one; a host resolving a nick to a number reads that one.
 *
 * Absent means no GType can be stated, not that the property is scalar: `gchararray` is carried
 * like any other, so absence is readable as "unknown".
 */
export const PROP_TYPES: Readonly<Record<string, string>>;

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
