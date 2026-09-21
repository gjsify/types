/**
 * The GIR-derived widget VOCABULARY for Champlain-0.12.
 *
 * GENERATED — do not edit. Provenance: Champlain-0.12 — library 0.12.22 — dropped empty base(s): Atk.ImplementorIface — prop(s) no TypeScript value satisfies: Champlain.MapSourceDesc.data
 *
 * 26 instantiable GTypes (of which 0 concrete widgets), 32 declarations, 4 enum nick unions, 0 slot candidates.
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

import type Champlain from './champlain-0.12.js';
import type Clutter from '@girs/clutter-1.0';
import type Pango from '@girs/pango-1.0';
import type cairo from '@girs/cairo-1.0';
import type { ClutterActorConstructOnly, ClutterActorProps, ClutterAnimatableConstructOnly, ClutterAnimatableProps, ClutterAnimationModeNick, ClutterContainerConstructOnly, ClutterContainerProps, ClutterScriptableConstructOnly, ClutterScriptableProps } from '@girs/clutter-1.0/vocabulary';
import type { GInitiallyUnownedConstructOnly, GInitiallyUnownedProps, GObjectConstructOnly, GObjectProps } from '@girs/gobject-2.0/vocabulary';
import type { PangoAlignmentNick, PangoEllipsizeModeNick, PangoWrapModeNick } from '@girs/pango-1.0/vocabulary';

// ---------------------------------------------------------------------------
// Enum nicks — the string vocabulary GObject registered, from GIR's `glib:nick`.
//
// Not derived from the member name. Substituting underscores for dashes is not a law:
// some nicks keep an underscore the substitution would have replaced, and only the
// attribute knows which. Gtk-4.0 and Adw-1 contradict no derivation at all, which is
// how a derived nick passes review and breaks elsewhere.
// Re-measure with `scripts/check-nick-derivation.mjs` in ts-for-gir.
// ---------------------------------------------------------------------------

export type ChamplainMapProjectionNick = 'mercator';
export type ChamplainSelectionModeNick = 'none' | 'single' | 'multiple';
export type ChamplainStateNick = 'none' | 'loading' | 'loaded' | 'done';
export type ChamplainUnitNick = 'km' | 'miles';

// ---------------------------------------------------------------------------
// Property surfaces — one interface per GIR DECLARATION, mirroring GIR's own
// inheritance rather than flattening per widget.
//
// The interfaces are load-bearing, not tidiness: `GtkBox` declares four properties
// of its own and `orientation` is not among them — it lives on `Gtk.Orientable`,
// because GObject installs interface properties on the implementor at runtime while
// GIR keeps them once, on the interface.
// ---------------------------------------------------------------------------

/** Class for handling an interval between to values. */
export interface ChamplainAdjustmentProps extends GObjectProps {
    /** @default 0.000000 */
    lower?: number;
    /** @default 0.000000 */
    'step-increment'?: number;
    /** @default 0.000000 */
    upper?: number;
    /** @default 0.000000 */
    value?: number;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type ChamplainAdjustmentConstructOnly = GObjectConstructOnly;

/** The #ChamplainCoordinate structure contains only private data and should be accessed using the provided API */
export interface ChamplainCoordinateProps extends GInitiallyUnownedProps, ChamplainLocationProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type ChamplainCoordinateConstructOnly = GInitiallyUnownedConstructOnly | ChamplainLocationConstructOnly;

/** The #ChamplainCustomMarker structure contains only private data and should be accessed using the provided API */
export interface ChamplainCustomMarkerProps extends ChamplainMarkerProps, ChamplainLocationProps, ClutterAnimatableProps, ClutterContainerProps, ClutterScriptableProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type ChamplainCustomMarkerConstructOnly = ChamplainMarkerConstructOnly | ChamplainLocationConstructOnly | ClutterAnimatableConstructOnly | ClutterContainerConstructOnly | ClutterScriptableConstructOnly;

/** The #ChamplainErrorTileRenderer structure contains only private data and should be accessed using the provided API */
export interface ChamplainErrorTileRendererProps extends ChamplainRendererProps {
    /**
     * The size of the rendered tile.
     * @since 0.8
     * @default 256
     */
    'tile-size'?: number;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type ChamplainErrorTileRendererConstructOnly = ChamplainRendererConstructOnly;

/** An interface common to objects having a #cairo_surface_t representation. */
export interface ChamplainExportableProps extends GObjectProps {
    /**
     * A #cairo_surface_t representation
     * @since 0.12.12
     */
    surface?: cairo.Surface;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type ChamplainExportableConstructOnly = GObjectConstructOnly;

/** The #ChamplainFileCache structure contains only private data and should be accessed using the provided API */
export interface ChamplainFileCacheProps extends ChamplainTileCacheProps {
    /**
     * The directory where the tile database is stored.
     * @since 0.6
     * @default NULL
     */
    'cache-dir'?: string;
    /**
     * The cache size limit in bytes.
     * @since 0.4
     * @default 100000000
     */
    'size-limit'?: number;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type ChamplainFileCacheConstructOnly = ChamplainTileCacheConstructOnly | 'cache-dir';

/** The #ChamplainFileTileSource structure contains only private data and should be accessed using the provided API */
export interface ChamplainFileTileSourceProps extends ChamplainTileSourceProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type ChamplainFileTileSourceConstructOnly = ChamplainTileSourceConstructOnly;

/** The #ChamplainImageRenderer structure contains only private data and should be accessed using the provided API */
export interface ChamplainImageRendererProps extends ChamplainRendererProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type ChamplainImageRendererConstructOnly = ChamplainRendererConstructOnly;

export interface ChamplainKineticScrollViewProps extends ClutterActorProps, ClutterAnimatableProps, ClutterContainerProps, ClutterScriptableProps {
    /** @default 1.100000 */
    'decel-rate'?: number;
    /** @default FALSE */
    mode?: boolean;
    /** @default 3 */
    'motion-buffer'?: number;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type ChamplainKineticScrollViewConstructOnly = ClutterActorConstructOnly | ClutterAnimatableConstructOnly | ClutterContainerConstructOnly | ClutterScriptableConstructOnly;

/** The #ChamplainLabel structure contains only private data and should be accessed using the provided API */
export interface ChamplainLabelProps extends ChamplainMarkerProps, ChamplainLocationProps, ClutterAnimatableProps, ClutterContainerProps, ClutterScriptableProps {
    /**
     * The label's alignment
     * @since 0.10
     * @default PANGO_ALIGN_LEFT
     */
    alignment?: PangoAlignmentNick | Pango.Alignment;
    /**
     * The label's color
     * @since 0.10
     * @default #333333ff
     */
    color?: Clutter.Color;
    /**
     * If the label has a background
     * @since 0.10
     * @default TRUE
     */
    'draw-background'?: boolean;
    /**
     * If the label background has a shadow
     * @since 0.12.10
     * @default TRUE
     */
    'draw-shadow'?: boolean;
    /**
     * The label's ellipsize mode
     * @since 0.10
     * @default PANGO_ELLIPSIZE_NONE
     */
    ellipsize?: PangoEllipsizeModeNick | Pango.EllipsizeMode;
    /**
     * The label's text font name
     * @since 0.10
     * @default Sans 11
     */
    'font-name'?: string;
    /**
     * The image of the label
     * @since 0.10
     */
    image?: Clutter.Actor;
    /**
     * If the label is in single line mode
     * @since 0.10
     * @default TRUE
     */
    'single-line-mode'?: boolean;
    /**
     * The text of the label
     * @since 0.10
     */
    text?: string;
    /**
     * The label's text color
     * @since 0.10
     * @default #eeeeeeff
     */
    'text-color'?: Clutter.Color;
    /**
     * If the label's text uses markup
     * @since 0.10
     * @default FALSE
     */
    'use-markup'?: boolean;
    /**
     * If the label's text wrap is set
     * @since 0.10
     * @default FALSE
     */
    wrap?: boolean;
    /**
     * The label's text wrap mode
     * @since 0.10
     * @default PANGO_WRAP_WORD
     */
    'wrap-mode'?: PangoWrapModeNick | Pango.WrapMode;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type ChamplainLabelConstructOnly = ChamplainMarkerConstructOnly | ChamplainLocationConstructOnly | ClutterAnimatableConstructOnly | ClutterContainerConstructOnly | ClutterScriptableConstructOnly;

/** The #ChamplainLayer structure contains only private data and should be accessed using the provided API */
export interface ChamplainLayerProps extends ClutterActorProps, ClutterAnimatableProps, ClutterContainerProps, ClutterScriptableProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type ChamplainLayerConstructOnly = ClutterActorConstructOnly | ClutterAnimatableConstructOnly | ClutterContainerConstructOnly | ClutterScriptableConstructOnly;

/** The #ChamplainLicense structure contains only private data and should be accessed using the provided API */
export interface ChamplainLicenseProps extends ClutterActorProps, ClutterAnimatableProps, ClutterContainerProps, ClutterScriptableProps {
    /**
     * The license's alignment
     * @since 0.10
     * @default PANGO_ALIGN_LEFT
     */
    alignment?: PangoAlignmentNick | Pango.Alignment;
    /**
     * Sets additional text to be displayed in the license area.
     * @since 0.10
     */
    'extra-text'?: string;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type ChamplainLicenseConstructOnly = ClutterActorConstructOnly | ClutterAnimatableConstructOnly | ClutterContainerConstructOnly | ClutterScriptableConstructOnly;

/** An interface common to objects having latitude and longitude. */
export interface ChamplainLocationProps extends GObjectProps {
    /**
     * The latitude coordonate
     * @since 0.10
     * @default 0.000000
     */
    latitude?: number;
    /**
     * The longitude coordonate
     * @since 0.10
     * @default 0.000000
     */
    longitude?: number;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type ChamplainLocationConstructOnly = GObjectConstructOnly;

/** The #ChamplainMapSource structure contains only private data and should be accessed using the provided API */
export interface ChamplainMapSourceProps extends GInitiallyUnownedProps {
    /**
     * Next source in the loading chain.
     * @since 0.6
     */
    'next-source'?: Champlain.MapSource;
    /**
     * Renderer used for tiles rendering.
     * @since 0.8
     */
    renderer?: Champlain.Renderer;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type ChamplainMapSourceConstructOnly = GInitiallyUnownedConstructOnly;

/** The #ChamplainMapSourceChain structure contains only private data and should be accessed using the provided API */
export interface ChamplainMapSourceChainProps extends ChamplainMapSourceProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type ChamplainMapSourceChainConstructOnly = ChamplainMapSourceConstructOnly;

/** The #ChamplainMapSourceDesc structure contains only private data and should be accessed using the provided API */
export interface ChamplainMapSourceDescProps extends GObjectProps {
    /**
     * User data passed to the constructor
     * @since 0.10
     */
    data?: never;
    /**
     * The id of the map source
     * @since 0.10
     */
    id?: string;
    /**
     * The license of the map source
     * @since 0.10
     */
    license?: string;
    /**
     * The license's uri for more information
     * @since 0.10
     */
    'license-uri'?: string;
    /**
     * The maximum zoom level
     * @since 0.10
     * @default 20
     */
    'max-zoom-level'?: number;
    /**
     * The minimum zoom level
     * @since 0.10
     * @default 0
     */
    'min-zoom-level'?: number;
    /**
     * The name of the map source
     * @since 0.10
     */
    name?: string;
    /**
     * The map projection of the map source
     * @since 0.10
     * @default CHAMPLAIN_MAP_PROJECTION_MERCATOR
     */
    projection?: ChamplainMapProjectionNick | Champlain.MapProjection;
    /**
     * The tile size of the map source
     * @since 0.10
     * @default 256
     */
    'tile-size'?: number;
    /**
     * The URI format of a network map source
     * @since 0.10
     */
    'uri-format'?: string;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type ChamplainMapSourceDescConstructOnly = GObjectConstructOnly | 'data' | 'id' | 'license' | 'license-uri' | 'max-zoom-level' | 'min-zoom-level' | 'name' | 'projection' | 'tile-size' | 'uri-format';

/** The #ChamplainMapSourceFactory structure contains only private data and should be accessed using the provided API */
export interface ChamplainMapSourceFactoryProps extends GObjectProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type ChamplainMapSourceFactoryConstructOnly = GObjectConstructOnly;

/** The #ChamplainMarker structure contains only private data and should be accessed using the provided API */
export interface ChamplainMarkerProps extends ClutterActorProps, ChamplainLocationProps, ClutterAnimatableProps, ClutterContainerProps, ClutterScriptableProps {
    /**
     * The draggable state of the marker
     * @since 0.10
     * @default FALSE
     */
    draggable?: boolean;
    /**
     * The selectable state of the marker
     * @since 0.10
     * @default FALSE
     */
    selectable?: boolean;
    /**
     * The selected state of the marker
     * @since 0.10
     * @default FALSE
     */
    selected?: boolean;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type ChamplainMarkerConstructOnly = ClutterActorConstructOnly | ChamplainLocationConstructOnly | ClutterAnimatableConstructOnly | ClutterContainerConstructOnly | ClutterScriptableConstructOnly;

/** The #ChamplainMarkerLayer structure contains only private data and should be accessed using the provided API */
export interface ChamplainMarkerLayerProps extends ChamplainLayerProps, ChamplainExportableProps, ClutterAnimatableProps, ClutterContainerProps, ClutterScriptableProps {
    /**
     * Determines the type of selection that will be performed.
     * @since 0.10
     * @default CHAMPLAIN_SELECTION_NONE
     */
    'selection-mode'?: ChamplainSelectionModeNick | Champlain.SelectionMode;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type ChamplainMarkerLayerConstructOnly = ChamplainLayerConstructOnly | ChamplainExportableConstructOnly | ClutterAnimatableConstructOnly | ClutterContainerConstructOnly | ClutterScriptableConstructOnly;

/** The #ChamplainMemoryCache structure contains only private data and should be accessed using the provided API */
export interface ChamplainMemoryCacheProps extends ChamplainTileCacheProps {
    /**
     * The maximum number of tiles that are stored in the cache.
     * @since 0.8
     * @default 100
     */
    'size-limit'?: number;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type ChamplainMemoryCacheConstructOnly = ChamplainTileCacheConstructOnly;

/** The #ChamplainNetworkBboxTileSource structure contains only private data and should be accessed using the provided API */
export interface ChamplainNetworkBboxTileSourceProps extends ChamplainTileSourceProps {
    /**
     * The URI of an OpenStreetMap API server
     * @since 0.8
     * @default https://www.informationfreeway.org/api/0.6
     */
    'api-uri'?: string;
    /**
     * Used to override the default proxy for accessing the network.
     * @since 0.8
     */
    'proxy-uri'?: string;
    /**
     * The map source's state.
     * @since 0.8
     * @default CHAMPLAIN_STATE_NONE
     */
    state?: ChamplainStateNick | Champlain.State;
    /**
     * The HTTP user agent used for requests
     * @since 0.12.16
     * @default libchamplain/0.12.22
     */
    'user-agent'?: string;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type ChamplainNetworkBboxTileSourceConstructOnly = ChamplainTileSourceConstructOnly;

/** The #ChamplainNetworkTileSource structure contains only private data and should be accessed using the provided API */
export interface ChamplainNetworkTileSourceProps extends ChamplainTileSourceProps {
    /**
     * Specifies the max number of allowed simultaneous connections for this tile source.
     * @since 0.12.14
     * @default 2
     */
    'max-conns'?: number;
    /**
     * Specifies whether the network tile source can access network
     * @since 0.4
     * @default FALSE
     */
    offline?: boolean;
    /**
     * Used to override the default proxy for accessing the network.
     * @since 0.4
     */
    'proxy-uri'?: string;
    /**
     * The uri format of the tile source, see #champlain_network_tile_source_set_uri_format
     * @since 0.4
     */
    'uri-format'?: string;
    /**
     * The HTTP user agent used for requests
     * @since 0.12.16
     * @default libchamplain/0.12.22
     */
    'user-agent'?: string;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type ChamplainNetworkTileSourceConstructOnly = ChamplainTileSourceConstructOnly;

/** The #ChamplainNullTileSource structure contains only private data and should be accessed using the provided API */
export interface ChamplainNullTileSourceProps extends ChamplainTileSourceProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type ChamplainNullTileSourceConstructOnly = ChamplainTileSourceConstructOnly;

/** The #ChamplainPathLayer structure contains only private data and should be accessed using the provided API */
export interface ChamplainPathLayerProps extends ChamplainLayerProps, ChamplainExportableProps, ClutterAnimatableProps, ClutterContainerProps, ClutterScriptableProps {
    /**
     * The shape is a closed path
     * @since 0.10
     * @default FALSE
     */
    closed?: boolean;
    /**
     * The shape should be filled
     * @since 0.10
     * @default FALSE
     */
    fill?: boolean;
    /**
     * The path's fill color
     * @since 0.10
     * @default #cc0000aa
     */
    'fill-color'?: Clutter.Color;
    /**
     * The shape should be stroked
     * @since 0.10
     * @default TRUE
     */
    stroke?: boolean;
    /**
     * The path's stroke color
     * @since 0.10
     * @default #a40000ff
     */
    'stroke-color'?: Clutter.Color;
    /**
     * The path's stroke width (in pixels)
     * @since 0.10
     * @default 2.000000
     */
    'stroke-width'?: number;
    /**
     * Wether the path is visible
     * @since 0.10
     * @default TRUE
     */
    visible?: boolean;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type ChamplainPathLayerConstructOnly = ChamplainLayerConstructOnly | ChamplainExportableConstructOnly | ClutterAnimatableConstructOnly | ClutterContainerConstructOnly | ClutterScriptableConstructOnly;

/** The #ChamplainPoint structure contains only private data and should be accessed using the provided API */
export interface ChamplainPointProps extends Omit<ChamplainMarkerProps, 'size'>, ChamplainExportableProps, ChamplainLocationProps, ClutterAnimatableProps, ClutterContainerProps, ClutterScriptableProps {
    /** @default #333333ff */
    color?: Clutter.Color;
    /** @default 12.000000 */
    size?: number;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type ChamplainPointConstructOnly = ChamplainMarkerConstructOnly | ChamplainExportableConstructOnly | ChamplainLocationConstructOnly | ClutterAnimatableConstructOnly | ClutterContainerConstructOnly | ClutterScriptableConstructOnly;

/** The #ChamplainRenderer structure contains only private data and should be accessed using the provided API */
export interface ChamplainRendererProps extends GInitiallyUnownedProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type ChamplainRendererConstructOnly = GInitiallyUnownedConstructOnly;

/** The #ChamplainScale structure contains only private data and should be accessed using the provided API */
export interface ChamplainScaleProps extends ClutterActorProps, ClutterAnimatableProps, ClutterContainerProps, ClutterScriptableProps {
    /**
     * The size of the map scale on screen in pixels.
     * @since 0.10
     * @default 100
     */
    'max-width'?: number;
    /**
     * The scale's units.
     * @since 0.10
     * @default CHAMPLAIN_UNIT_KM
     */
    unit?: ChamplainUnitNick | Champlain.Unit;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type ChamplainScaleConstructOnly = ClutterActorConstructOnly | ClutterAnimatableConstructOnly | ClutterContainerConstructOnly | ClutterScriptableConstructOnly;

/** The #ChamplainTile structure contains only private data and should be accessed using the provided API */
export interface ChamplainTileProps extends Omit<ClutterActorProps, 'content' | 'size'>, ChamplainExportableProps, ClutterAnimatableProps, ClutterContainerProps, ClutterScriptableProps {
    /**
     * The #ClutterActor with the specific image content.
     * @since 0.4
     */
    content?: Clutter.Actor;
    /**
     * The tile's ETag.
     * @since 0.4
     * @default NULL
     */
    etag?: string;
    /**
     * Specifies whether the tile should fade in when loading
     * @since 0.6
     * @default FALSE
     */
    'fade-in'?: boolean;
    /**
     * The size of the tile in pixels
     * @since 0.4
     * @default 256
     */
    size?: number;
    /**
     * The state of the tile
     * @since 0.4
     * @default CHAMPLAIN_STATE_NONE
     */
    state?: ChamplainStateNick | Champlain.State;
    /**
     * The x position of the tile
     * @since 0.4
     * @default 0
     */
    x?: number;
    /**
     * The y position of the tile
     * @since 0.4
     * @default 0
     */
    y?: number;
    /**
     * The zoom level of the tile
     * @since 0.4
     * @default 0
     */
    'zoom-level'?: number;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type ChamplainTileConstructOnly = ClutterActorConstructOnly | ChamplainExportableConstructOnly | ClutterAnimatableConstructOnly | ClutterContainerConstructOnly | ClutterScriptableConstructOnly;

/** The #ChamplainTileCache structure contains only private data and should be accessed using the provided API */
export interface ChamplainTileCacheProps extends ChamplainMapSourceProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type ChamplainTileCacheConstructOnly = ChamplainMapSourceConstructOnly;

/** The #ChamplainTileSource structure contains only private data and should be accessed using the provided API */
export interface ChamplainTileSourceProps extends ChamplainMapSourceProps {
    /**
     * The cache used for tile storage
     * @since 0.6
     */
    cache?: Champlain.TileCache;
    /**
     * The id of the tile source
     * @since 0.4
     */
    id?: string;
    /**
     * The usage license of the tile source
     * @since 0.4
     */
    license?: string;
    /**
     * The usage license's uri for more information
     * @since 0.4
     */
    'license-uri'?: string;
    /**
     * The maximum zoom level
     * @since 0.4
     * @default 18
     */
    'max-zoom-level'?: number;
    /**
     * The minimum zoom level
     * @since 0.4
     * @default 0
     */
    'min-zoom-level'?: number;
    /**
     * The name of the tile source
     * @since 0.4
     */
    name?: string;
    /**
     * The map projection of the tile source
     * @since 0.4
     * @default CHAMPLAIN_MAP_PROJECTION_MERCATOR
     */
    projection?: ChamplainMapProjectionNick | Champlain.MapProjection;
    /**
     * The tile size of the tile source
     * @since 0.4
     * @default 256
     */
    'tile-size'?: number;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type ChamplainTileSourceConstructOnly = ChamplainMapSourceConstructOnly;

/** The #ChamplainView structure contains only private data and should be accessed using the provided API */
export interface ChamplainViewProps extends ClutterActorProps, ClutterAnimatableProps, ClutterContainerProps, ClutterScriptableProps {
    /**
     * Animate zoom change when zooming in/out.
     * @since 0.12
     * @default TRUE
     */
    'animate-zoom'?: boolean;
    /**
     * The pattern displayed in the background of the map.
     * @since 0.12.4
     */
    'background-pattern'?: Clutter.Actor;
    /**
     * The deceleration rate for the kinetic mode.
     * @since 0.10
     * @default 1.100000
     */
    deceleration?: number;
    /**
     * The duration of an animation when going to a location.
     * @default 0
     */
    'goto-animation-duration'?: number;
    /**
     * The mode of animation when going to a location.
     * @default CLUTTER_EASE_IN_OUT_CIRC
     */
    'goto-animation-mode'?: ClutterAnimationModeNick | Clutter.AnimationMode;
    /**
     * Determines whether the view should wrap horizontally.
     * @default FALSE
     */
    'horizontal-wrap'?: boolean;
    /**
     * Keep the current centered position when resizing the view.
     * @since 0.2.7
     * @default TRUE
     */
    'keep-center-on-resize'?: boolean;
    /**
     * Determines whether the view should use kinetic mode.
     * @since 0.10
     * @default FALSE
     */
    'kinetic-mode'?: boolean;
    /**
     * The latitude coordonate of the map
     * @since 0.1
     * @default 0.000000
     */
    latitude?: number;
    /**
     * The longitude coordonate of the map
     * @since 0.1
     * @default 0.000000
     */
    longitude?: number;
    /**
     * The #ChamplainMapSource being displayed
     * @since 0.2
     */
    'map-source'?: Champlain.MapSource;
    /**
     * The highest allowed level of zoom of the content.
     * @since 0.4
     * @default 20
     */
    'max-zoom-level'?: number;
    /**
     * The lowest allowed level of zoom of the content.
     * @since 0.4
     * @default 0
     */
    'min-zoom-level'?: number;
    /**
     * Set a bounding box to limit the world to.
     * @since 0.12.11
     */
    world?: Champlain.BoundingBox;
    /**
     * The level of zoom of the content.
     * @since 0.1
     * @default 3
     */
    'zoom-level'?: number;
    /**
     * Should the view zoom in and recenter when the user double click on the map.
     * @since 0.4
     * @default TRUE
     */
    'zoom-on-double-click'?: boolean;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type ChamplainViewConstructOnly = ClutterActorConstructOnly | ClutterAnimatableConstructOnly | ClutterContainerConstructOnly | ClutterScriptableConstructOnly;

export interface ChamplainViewportProps extends ClutterActorProps, ClutterAnimatableProps, ClutterContainerProps, ClutterScriptableProps {
    hadjustment?: Champlain.Adjustment;
    vadjustment?: Champlain.Adjustment;
    /** @default 0 */
    'x-origin'?: number;
    /** @default 0 */
    'y-origin'?: number;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type ChamplainViewportConstructOnly = ClutterActorConstructOnly | ClutterAnimatableConstructOnly | ClutterContainerConstructOnly | ClutterScriptableConstructOnly;

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
