
/*
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in `ts-for-gir` or create a bug report on https://github.com/gjsify/ts-for-gir
 */

import './shumate-1.0-ambient.d.ts';
import './shumate-1.0-import.d.ts';
/**
 * Shumate-1.0
 */

import type Gtk from '@girs/gtk-4.0';
import type Gsk from '@girs/gsk-4.0';
import type Graphene from '@girs/graphene-1.0';
import type GObject from '@girs/gobject-2.0';
import type GLib from '@girs/glib-2.0';
import type Gdk from '@girs/gdk-4.0';
import type cairo from '@girs/cairo-1.0';
import type PangoCairo from '@girs/pangocairo-1.0';
import type Pango from '@girs/pango-1.0';
import type HarfBuzz from '@girs/harfbuzz-0.0';
import type freetype2 from '@girs/freetype2-2.0';
import type Gio from '@girs/gio-2.0';
import type GdkPixbuf from '@girs/gdkpixbuf-2.0';
import type GModule from '@girs/gmodule-2.0';

/**
 * Error codes in the #SHUMATE_FILE_CACHE_ERROR domain.
 */
export enum FileCacheError {
    /**
     * An unspecified error occurred during the operation.
     */
    FAILED,
}
/**
 * Projections supported by the library.
 */
export enum MapProjection {
    /**
     * Currently the only supported projection
     */
    MERCATOR,
}
/**
 * Tile loading state.
 */
export enum State {
    /**
     * Initial or undefined state
     */
    NONE,
    /**
     * Tile is loading
     */
    LOADING,
    /**
     * Tile is loaded but not yet displayed
     */
    LOADED,
    /**
     * Tile loading finished. Also used to inform map sources
     *     that tile loading has been cancelled.
     */
    DONE,
}
/**
 * Error codes that occurs while parsing the style in [class`VectorRenderer]`.
 */
export enum StyleError {
    /**
     * An unspecified error occurred during the operation.
     */
    FAILED,
    /**
     * A JSON node in the style has the wrong type (e.g. an object where there should be an array).
     */
    MALFORMED_STYLE,
    /**
     * An unsupported layer type was encountered.
     */
    UNSUPPORTED_LAYER,
    /**
     * An invalid or unrecognized expression was encountered.
     */
    INVALID_EXPRESSION,
    /**
     * Libshumate was compiled without vector tile support.
     */
    SUPPORT_OMITTED,
    /**
     * An unsupported style spec feature was encountered.
     */
    UNSUPPORTED,
}
/**
 * Error codes in the #SHUMATE_TILE_DOWNLOADER_ERROR domain.
 */
export enum TileDownloaderError {
    /**
     * An unspecified error occurred during the operation.
     */
    FAILED,
    /**
     * An unsuccessful HTTP response was received from the server.
     */
    BAD_RESPONSE,
    /**
     * The server could not be reached.
     */
    COULD_NOT_CONNECT,
    /**
     * The provided URL isn't valid
     */
    MALFORMED_URL,
    /**
     * The tile source has been marked as offline.
     */
    OFFLINE,
}
/**
 * Units used by the scale.
 */
export enum Unit {
    /**
     * Both metric and imperial units
     */
    BOTH,
    /**
     * Metric units (meters)
     */
    METRIC,
    /**
     * Imperial units (miles)
     */
    IMPERIAL,
}
/**
 * The major version of libshumate (1, if %SHUMATE_VERSION is 1.2.3)
 */
export const MAJOR_VERSION: number
/**
 * Maps for Free Relief
 */
export const MAP_SOURCE_MFF_RELIEF: string | null
/**
 * OpenStreetMap Cycle Map
 */
export const MAP_SOURCE_OSM_CYCLE_MAP: string | null
/**
 * OpenStreetMap Mapnik
 */
export const MAP_SOURCE_OSM_MAPNIK: string | null
/**
 * OpenStreetMap Transport Map
 */
export const MAP_SOURCE_OSM_TRANSPORT_MAP: string | null
/**
 * OpenWeatherMap clouds layer
 */
export const MAP_SOURCE_OWM_CLOUDS: string | null
/**
 * OpenWeatherMap precipitation
 */
export const MAP_SOURCE_OWM_PRECIPITATION: string | null
/**
 * OpenWeatherMap sea level pressure
 */
export const MAP_SOURCE_OWM_PRESSURE: string | null
/**
 * OpenWeatherMap temperature
 */
export const MAP_SOURCE_OWM_TEMPERATURE: string | null
/**
 * OpenWeatherMap wind
 */
export const MAP_SOURCE_OWM_WIND: string | null
/**
 * The maximal possible latitude value.
 */
export const MAX_LATITUDE: number
/**
 * The maximal possible longitude value.
 */
export const MAX_LONGITUDE: number
/**
 * The minor version of libshumate (2, if %SHUMATE_VERSION is 1.2.3)
 */
export const MINOR_VERSION: number
/**
 * The minimal possible latitude value.
 */
export const MIN_LATITUDE: number
/**
 * The minimal possible longitude value.
 */
export const MIN_LONGITUDE: number
/**
 * Gets the #ShumateFileCache error quark.
 * @returns a #GQuark
 */
export function file_cache_error_quark(): GLib.Quark
/**
 * Gets the user agent libshumate will use for all requests.
 * 
 * This API is not thread-safe and should only be called from the main thread.
 * @returns the user agent
 */
export function get_user_agent(): string | null
/**
 * Sets the user agent that libshumate uses for all requests.
 * 
 * This API is not thread-safe and should only be called from the main thread.
 * @param new_user_agent the new user agent, or %NULL to reset to the default
 */
export function set_user_agent(new_user_agent: string | null): void
export function style_error_quark(): GLib.Quark
/**
 * Gets the #ShumateTileDownloader error quark.
 * @returns a #GQuark
 */
export function tile_downloader_error_quark(): GLib.Quark
export module Location {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of Shumate-1.0.Shumate.Location

        /**
         * The latitude coordonate in degrees
         */
        latitude?: number | null
        /**
         * The longitude coordonate in degrees
         */
        longitude?: number | null
    }

}

export interface Location {

    // Own properties of Shumate-1.0.Shumate.Location

    /**
     * The latitude coordonate in degrees
     */
    latitude: number
    /**
     * The longitude coordonate in degrees
     */
    longitude: number

    // Owm methods of Shumate-1.0.Shumate.Location

    /**
     * Gets the latitude coordinate in degrees.
     * @returns the latitude coordinate in degrees.
     */
    get_latitude(): number
    /**
     * Gets the longitude coordinate in degrees.
     * @returns the longitude coordinate in degrees.
     */
    get_longitude(): number
    /**
     * Sets the coordinates of the location
     * @param latitude the latitude in degrees
     * @param longitude the longitude in degrees
     */
    set_location(latitude: number, longitude: number): void

    // Own virtual methods of Shumate-1.0.Shumate.Location

    /**
     * Gets the latitude coordinate in degrees.
     * @virtual 
     * @returns the latitude coordinate in degrees.
     */
    vfunc_get_latitude(): number
    /**
     * Gets the longitude coordinate in degrees.
     * @virtual 
     * @returns the longitude coordinate in degrees.
     */
    vfunc_get_longitude(): number
    /**
     * Sets the coordinates of the location
     * @virtual 
     * @param latitude the latitude in degrees
     * @param longitude the longitude in degrees
     */
    vfunc_set_location(latitude: number, longitude: number): void

    // Class property signals of Shumate-1.0.Shumate.Location

    connect(sigName: "notify::latitude", callback: (($obj: Location, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::latitude", callback: (($obj: Location, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::latitude", ...args: any[]): void
    connect(sigName: "notify::longitude", callback: (($obj: Location, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::longitude", callback: (($obj: Location, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::longitude", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * An interface common to objects having latitude and longitude
 * 
 * By implementing #ShumateLocation the object declares that it has latitude
 * and longitude and can be used to specify location on the map.
 * @interface 
 */
export class Location extends GObject.Object {

    // Own properties of Shumate-1.0.Shumate.Location

    static name: string
    static $gtype: GObject.GType<Location>

    // Constructors of Shumate-1.0.Shumate.Location

    constructor(config?: Location.ConstructorProperties) 
    _init(config?: Location.ConstructorProperties): void
}

export module Compass {

    // Constructor properties interface

    export interface ConstructorProperties extends Gtk.Accessible.ConstructorProperties, Gtk.Buildable.ConstructorProperties, Gtk.ConstraintTarget.ConstructorProperties, Gtk.Widget.ConstructorProperties {

        // Own constructor properties of Shumate-1.0.Shumate.Compass

        /**
         * The viewport to use.
         */
        viewport?: Viewport | null
    }

}

export interface Compass extends Gtk.Accessible, Gtk.Buildable, Gtk.ConstraintTarget {

    // Own properties of Shumate-1.0.Shumate.Compass

    /**
     * The viewport to use.
     */
    viewport: Viewport

    // Owm methods of Shumate-1.0.Shumate.Compass

    /**
     * Gets the viewport used by the compass.
     * @returns The #ShumateViewport used by the compass
     */
    get_viewport(): Viewport | null
    /**
     * Sets the compass viewport.
     * @param viewport a [class`Viewport]`
     */
    set_viewport(viewport: Viewport | null): void

    // Class property signals of Shumate-1.0.Shumate.Compass

    connect(sigName: "notify::viewport", callback: (($obj: Compass, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::viewport", callback: (($obj: Compass, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::viewport", ...args: any[]): void
    connect(sigName: "notify::can-focus", callback: (($obj: Compass, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-focus", callback: (($obj: Compass, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-focus", ...args: any[]): void
    connect(sigName: "notify::can-target", callback: (($obj: Compass, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-target", callback: (($obj: Compass, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-target", ...args: any[]): void
    connect(sigName: "notify::css-classes", callback: (($obj: Compass, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::css-classes", callback: (($obj: Compass, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::css-classes", ...args: any[]): void
    connect(sigName: "notify::css-name", callback: (($obj: Compass, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::css-name", callback: (($obj: Compass, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::css-name", ...args: any[]): void
    connect(sigName: "notify::cursor", callback: (($obj: Compass, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::cursor", callback: (($obj: Compass, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::cursor", ...args: any[]): void
    connect(sigName: "notify::focus-on-click", callback: (($obj: Compass, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::focus-on-click", callback: (($obj: Compass, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::focus-on-click", ...args: any[]): void
    connect(sigName: "notify::focusable", callback: (($obj: Compass, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::focusable", callback: (($obj: Compass, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::focusable", ...args: any[]): void
    connect(sigName: "notify::halign", callback: (($obj: Compass, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::halign", callback: (($obj: Compass, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::halign", ...args: any[]): void
    connect(sigName: "notify::has-default", callback: (($obj: Compass, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-default", callback: (($obj: Compass, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-default", ...args: any[]): void
    connect(sigName: "notify::has-focus", callback: (($obj: Compass, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-focus", callback: (($obj: Compass, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-focus", ...args: any[]): void
    connect(sigName: "notify::has-tooltip", callback: (($obj: Compass, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-tooltip", callback: (($obj: Compass, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-tooltip", ...args: any[]): void
    connect(sigName: "notify::height-request", callback: (($obj: Compass, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height-request", callback: (($obj: Compass, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::height-request", ...args: any[]): void
    connect(sigName: "notify::hexpand", callback: (($obj: Compass, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand", callback: (($obj: Compass, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hexpand", ...args: any[]): void
    connect(sigName: "notify::hexpand-set", callback: (($obj: Compass, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand-set", callback: (($obj: Compass, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hexpand-set", ...args: any[]): void
    connect(sigName: "notify::layout-manager", callback: (($obj: Compass, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::layout-manager", callback: (($obj: Compass, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::layout-manager", ...args: any[]): void
    connect(sigName: "notify::margin-bottom", callback: (($obj: Compass, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-bottom", callback: (($obj: Compass, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-bottom", ...args: any[]): void
    connect(sigName: "notify::margin-end", callback: (($obj: Compass, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-end", callback: (($obj: Compass, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-end", ...args: any[]): void
    connect(sigName: "notify::margin-start", callback: (($obj: Compass, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-start", callback: (($obj: Compass, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-start", ...args: any[]): void
    connect(sigName: "notify::margin-top", callback: (($obj: Compass, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-top", callback: (($obj: Compass, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-top", ...args: any[]): void
    connect(sigName: "notify::name", callback: (($obj: Compass, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: Compass, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::opacity", callback: (($obj: Compass, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opacity", callback: (($obj: Compass, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::opacity", ...args: any[]): void
    connect(sigName: "notify::overflow", callback: (($obj: Compass, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::overflow", callback: (($obj: Compass, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::overflow", ...args: any[]): void
    connect(sigName: "notify::parent", callback: (($obj: Compass, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: Compass, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::parent", ...args: any[]): void
    connect(sigName: "notify::receives-default", callback: (($obj: Compass, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::receives-default", callback: (($obj: Compass, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::receives-default", ...args: any[]): void
    connect(sigName: "notify::root", callback: (($obj: Compass, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::root", callback: (($obj: Compass, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::root", ...args: any[]): void
    connect(sigName: "notify::scale-factor", callback: (($obj: Compass, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-factor", callback: (($obj: Compass, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::scale-factor", ...args: any[]): void
    connect(sigName: "notify::sensitive", callback: (($obj: Compass, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sensitive", callback: (($obj: Compass, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::sensitive", ...args: any[]): void
    connect(sigName: "notify::tooltip-markup", callback: (($obj: Compass, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-markup", callback: (($obj: Compass, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tooltip-markup", ...args: any[]): void
    connect(sigName: "notify::tooltip-text", callback: (($obj: Compass, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-text", callback: (($obj: Compass, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tooltip-text", ...args: any[]): void
    connect(sigName: "notify::valign", callback: (($obj: Compass, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::valign", callback: (($obj: Compass, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::valign", ...args: any[]): void
    connect(sigName: "notify::vexpand", callback: (($obj: Compass, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand", callback: (($obj: Compass, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vexpand", ...args: any[]): void
    connect(sigName: "notify::vexpand-set", callback: (($obj: Compass, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand-set", callback: (($obj: Compass, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vexpand-set", ...args: any[]): void
    connect(sigName: "notify::visible", callback: (($obj: Compass, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visible", callback: (($obj: Compass, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::visible", ...args: any[]): void
    connect(sigName: "notify::width-request", callback: (($obj: Compass, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::width-request", callback: (($obj: Compass, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::width-request", ...args: any[]): void
    connect(sigName: "notify::accessible-role", callback: (($obj: Compass, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-role", callback: (($obj: Compass, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::accessible-role", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * A widget displaying a compass.
 * 
 * # CSS nodes
 * 
 * ```
 * map-compass
 * ├── revealer
 * ├──── image
 * ```
 * 
 * `ShumateCompass` uses a single CSS node with name map-compass. It also uses an
 * image named "map-compass".
 * @class 
 */
export class Compass extends Gtk.Widget {

    // Own properties of Shumate-1.0.Shumate.Compass

    static name: string
    static $gtype: GObject.GType<Compass>

    // Constructors of Shumate-1.0.Shumate.Compass

    constructor(config?: Compass.ConstructorProperties) 
    /**
     * Creates an instance of #ShumateCompass.
     * @constructor 
     * @param viewport a #ShumateViewport
     * @returns a new #ShumateCompass.
     */
    constructor(viewport: Viewport | null) 
    /**
     * Creates an instance of #ShumateCompass.
     * @constructor 
     * @param viewport a #ShumateViewport
     * @returns a new #ShumateCompass.
     */
    static new(viewport: Viewport | null): Compass
    _init(config?: Compass.ConstructorProperties): void
}

export module Coordinate {

    // Constructor properties interface

    export interface ConstructorProperties extends Location.ConstructorProperties, GObject.InitiallyUnowned.ConstructorProperties {
    }

}

export interface Coordinate extends Location {

    // Own fields of Shumate-1.0.Shumate.Coordinate

    parent_instance: GObject.InitiallyUnowned

    // Class property signals of Shumate-1.0.Shumate.Coordinate

    connect(sigName: "notify::latitude", callback: (($obj: Coordinate, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::latitude", callback: (($obj: Coordinate, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::latitude", ...args: any[]): void
    connect(sigName: "notify::longitude", callback: (($obj: Coordinate, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::longitude", callback: (($obj: Coordinate, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::longitude", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * A simple object implementing [iface`Location]`.
 * @class 
 */
export class Coordinate extends GObject.InitiallyUnowned {

    // Own properties of Shumate-1.0.Shumate.Coordinate

    static name: string
    static $gtype: GObject.GType<Coordinate>

    // Constructors of Shumate-1.0.Shumate.Coordinate

    constructor(config?: Coordinate.ConstructorProperties) 
    /**
     * Creates a new instance of #ShumateCoordinate.
     * @constructor 
     * @returns the created instance.
     */
    constructor() 
    /**
     * Creates a new instance of #ShumateCoordinate.
     * @constructor 
     * @returns the created instance.
     */
    static new(): Coordinate
    /**
     * Creates a new instance of #ShumateCoordinate initialized with the given
     * coordinates.
     * @constructor 
     * @param latitude the latitude coordinate
     * @param longitude the longitude coordinate
     * @returns the created instance.
     */
    static new_full(latitude: number, longitude: number): Coordinate
    _init(config?: Coordinate.ConstructorProperties): void
}

export module DataSource {

    // Signal callback interfaces

    /**
     * Signal callback interface for `received-data`
     */
    export interface ReceivedDataSignalCallback {
        ($obj: DataSource, x: number, y: number, zoom_level: number, bytes: GLib.Bytes): void
    }


    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of Shumate-1.0.Shumate.DataSource

        /**
         * The maximum zoom level
         */
        max_zoom_level?: number | null
        /**
         * The minimum zoom level
         */
        min_zoom_level?: number | null
    }

}

export interface DataSource {

    // Own properties of Shumate-1.0.Shumate.DataSource

    /**
     * The maximum zoom level
     */
    max_zoom_level: number
    /**
     * The minimum zoom level
     */
    min_zoom_level: number

    // Own fields of Shumate-1.0.Shumate.DataSource

    parent_instance: GObject.Object

    // Owm methods of Shumate-1.0.Shumate.DataSource

    /**
     * Gets the data source's maximum zoom level.
     * @returns the maximum zoom level this data source supports
     */
    get_max_zoom_level(): number
    /**
     * Gets the data source's minimum zoom level.
     * @returns the minimum zoom level this data source supports
     */
    get_min_zoom_level(): number
    /**
     * Gets the data for the tile at the given coordinates.
     * 
     * Some data sources may return data multiple times. For example,
     * [class`TileDownloader]` may return data from a cache, then return updated
     * data from the network. [signal`ShumateDataSource:`:received-data] is emitted
     * each time data is received, then `callback` is called after the last update.
     * @param x the X coordinate to fetch
     * @param y the Y coordinate to fetch
     * @param zoom_level the Z coordinate to fetch
     * @param cancellable a #GCancellable
     * @param callback a #GAsyncReadyCallback to execute upon completion
     */
    get_tile_data_async(x: number, y: number, zoom_level: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void

    // Overloads of get_tile_data_async

    /**
     * Promisified version of {@link get_tile_data_async}
     * 
     * Gets the data for the tile at the given coordinates.
     * 
     * Some data sources may return data multiple times. For example,
     * [class`TileDownloader]` may return data from a cache, then return updated
     * data from the network. [signal`ShumateDataSource:`:received-data] is emitted
     * each time data is received, then `callback` is called after the last update.
     * @param x the X coordinate to fetch
     * @param y the Y coordinate to fetch
     * @param zoom_level the Z coordinate to fetch
     * @param cancellable a #GCancellable
     * @returns A Promise of: The requested data, or %NULL if an error occurred
     */
    get_tile_data_async(x: number, y: number, zoom_level: number, cancellable: Gio.Cancellable | null): globalThis.Promise<GLib.Bytes | null>
    /**
     * Gets the final result of a request started with
     * shumate_data_source_get_tile_data_async().
     * @param result a #GAsyncResult provided to callback
     * @returns The requested data, or %NULL if an error occurred
     */
    get_tile_data_finish(result: Gio.AsyncResult): GLib.Bytes | null
    /**
     * Sets the data source's maximum zoom level.
     * @param zoom_level the maximum zoom level
     */
    set_max_zoom_level(zoom_level: number): void
    /**
     * Sets the data source's minimum zoom level.
     * @param zoom_level the minimum zoom level
     */
    set_min_zoom_level(zoom_level: number): void
    /**
     * Begins a request for a tile.
     * @param x X coordinate to request
     * @param y Y coordinate to request
     * @param zoom_level zoom level to request
     * @param cancellable for cancelling the request
     * @returns a [class@DataSourceRequest] object for tracking the request.
     */
    start_request(x: number, y: number, zoom_level: number, cancellable: Gio.Cancellable | null): DataSourceRequest

    // Own virtual methods of Shumate-1.0.Shumate.DataSource

    /**
     * Gets the data for the tile at the given coordinates.
     * 
     * Some data sources may return data multiple times. For example,
     * [class`TileDownloader]` may return data from a cache, then return updated
     * data from the network. [signal`ShumateDataSource:`:received-data] is emitted
     * each time data is received, then `callback` is called after the last update.
     * @virtual 
     * @param x the X coordinate to fetch
     * @param y the Y coordinate to fetch
     * @param zoom_level the Z coordinate to fetch
     * @param cancellable a #GCancellable
     * @param callback a #GAsyncReadyCallback to execute upon completion
     */
    vfunc_get_tile_data_async(x: number, y: number, zoom_level: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void
    /**
     * Gets the final result of a request started with
     * shumate_data_source_get_tile_data_async().
     * @virtual 
     * @param result a #GAsyncResult provided to callback
     * @returns The requested data, or %NULL if an error occurred
     */
    vfunc_get_tile_data_finish(result: Gio.AsyncResult): GLib.Bytes | null
    /**
     * Begins a request for a tile.
     * @virtual 
     * @param x X coordinate to request
     * @param y Y coordinate to request
     * @param zoom_level zoom level to request
     * @param cancellable for cancelling the request
     * @returns a [class@DataSourceRequest] object for tracking the request.
     */
    vfunc_start_request(x: number, y: number, zoom_level: number, cancellable: Gio.Cancellable | null): DataSourceRequest

    // Own signals of Shumate-1.0.Shumate.DataSource

    connect(sigName: "received-data", callback: DataSource.ReceivedDataSignalCallback): number
    connect_after(sigName: "received-data", callback: DataSource.ReceivedDataSignalCallback): number
    emit(sigName: "received-data", x: number, y: number, zoom_level: number, bytes: GLib.Bytes, ...args: any[]): void

    // Class property signals of Shumate-1.0.Shumate.DataSource

    connect(sigName: "notify::max-zoom-level", callback: (($obj: DataSource, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::max-zoom-level", callback: (($obj: DataSource, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::max-zoom-level", ...args: any[]): void
    connect(sigName: "notify::min-zoom-level", callback: (($obj: DataSource, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::min-zoom-level", callback: (($obj: DataSource, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::min-zoom-level", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * The base class used to retrieve tiles as [struct`GLib`.Bytes].
 * @class 
 */
export class DataSource extends GObject.Object {

    // Own properties of Shumate-1.0.Shumate.DataSource

    static name: string
    static $gtype: GObject.GType<DataSource>

    // Constructors of Shumate-1.0.Shumate.DataSource

    constructor(config?: DataSource.ConstructorProperties) 
    _init(config?: DataSource.ConstructorProperties): void
}

export module DataSourceRequest {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of Shumate-1.0.Shumate.DataSourceRequest

        /**
         * The X coordinate of the requested tile.
         */
        x?: number | null
        /**
         * The Y coordinate of the requested tile.
         */
        y?: number | null
        /**
         * The zoom level of the requested tile.
         */
        zoom_level?: number | null
    }

}

export interface DataSourceRequest {

    // Own properties of Shumate-1.0.Shumate.DataSourceRequest

    /**
     * %TRUE if the request has been completed, otherwise %FALSE. A completed
     * request will not receive further updates to either
     * [property`DataSourceRequest:`data] or [property`DataSourceRequest:`error].
     */
    readonly completed: boolean
    /**
     * The most recent data for the tile, if available. If an error is emitted,
     * this will be set to %NULL.
     */
    readonly data: GLib.Bytes
    /**
     * The error that occurred during the request, if any.
     */
    readonly error: GLib.Error
    /**
     * The X coordinate of the requested tile.
     */
    readonly x: number
    /**
     * The Y coordinate of the requested tile.
     */
    readonly y: number
    /**
     * The zoom level of the requested tile.
     */
    readonly zoom_level: number

    // Own fields of Shumate-1.0.Shumate.DataSourceRequest

    parent_instance: GObject.Object

    // Owm methods of Shumate-1.0.Shumate.DataSourceRequest

    /**
     * Marks the request as complete. No more data or errors may be emitted.
     * 
     * This can only be called if data has been emitted. If there is no data,
     * use [method`DataSourceRequest`.emit_error] instead, which will automatically
     * complete the request.
     */
    complete(): void
    /**
     * Emits tile data as a response to the request. This sets the
     * [property`DataSourceRequest:`data] property.
     * 
     * If `complete` is %TRUE, then [property`DataSourceRequest:`completed] is set to
     * %TRUE as well.
     * @param data the data to emit
     * @param complete %TRUE to also complete the request, %FALSE otherwise
     */
    emit_data(data: GLib.Bytes, complete: boolean): void
    /**
     * Emits a fatal error in response to the request. This completes the request,
     * so no more data or errors can be emitted after this. Non-fatal errors should
     * not be reported.
     * 
     * If [property`DataSourceRequest:`data] was previously set, it will be cleared.
     * @param error an error
     */
    emit_error(error: GLib.Error): void
    /**
     * Gets the latest data from the request.
     * @returns The latest data, if any.
     */
    get_data(): GLib.Bytes | null

    // Overloads of get_data

    /**
     * Gets a named field from the objects table of associations (see g_object_set_data()).
     * @param key name of the key for that association
     * @returns the data if found,          or %NULL if no such data exists.
     */
    get_data(key: string | null): any | null
    /**
     * Gets the latest error from the request.
     * @returns The latest error, if any.
     */
    get_error(): GLib.Error | null
    /**
     * Gets the X coordinate of the requested tile.
     * @returns the X coordinate
     */
    get_x(): number
    /**
     * Gets the Y coordinate of the requested tile.
     * @returns the Y coordinate
     */
    get_y(): number
    /**
     * Gets the zoom level of the requested tile.
     * @returns the zoom level
     */
    get_zoom_level(): number
    /**
     * Gets whether the request has been completed. Completed requests will not
     * receive new data or errors.
     * @returns %TRUE if the request is completed, otherwise %FALSE
     */
    is_completed(): boolean

    // Class property signals of Shumate-1.0.Shumate.DataSourceRequest

    connect(sigName: "notify::completed", callback: (($obj: DataSourceRequest, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::completed", callback: (($obj: DataSourceRequest, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::completed", ...args: any[]): void
    connect(sigName: "notify::data", callback: (($obj: DataSourceRequest, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::data", callback: (($obj: DataSourceRequest, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::data", ...args: any[]): void
    connect(sigName: "notify::error", callback: (($obj: DataSourceRequest, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::error", callback: (($obj: DataSourceRequest, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::error", ...args: any[]): void
    connect(sigName: "notify::x", callback: (($obj: DataSourceRequest, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::x", callback: (($obj: DataSourceRequest, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::x", ...args: any[]): void
    connect(sigName: "notify::y", callback: (($obj: DataSourceRequest, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::y", callback: (($obj: DataSourceRequest, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::y", ...args: any[]): void
    connect(sigName: "notify::zoom-level", callback: (($obj: DataSourceRequest, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::zoom-level", callback: (($obj: DataSourceRequest, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::zoom-level", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * Represents a request to a [class`DataSource]` for a tile.
 * 
 * Data sources can return a tile multiple times. For example, a
 * [class`TileDownloader]` may return cached data first, then later return data
 * from a network service when it arrives. This allows the map to be rendered
 * as quickly as possible without waiting for the network unnecessarily.
 * 
 * Conventional async/finish method pairs don't support multiple returns.
 * Instead, [method`DataSource`.start_request] is available, which returns a
 * [class`DataSourceRequest]` whose properties, [property`DataSourceRequest:`data]
 * and [property`DataSourceRequest:`error], update as data becomes available.
 * The [signal`GObject`.Object::notify] signal can be used to watch for these
 * changes. When the request is done and no more data will be returned,
 * [property`DataSourceRequest:`completed] is set to %TRUE.
 * 
 * [class`DataSource]` implementations can use a subclass of
 * [class`DataSourceRequest]`, but the base class should be sufficient in most
 * cases.
 * @class 
 */
export class DataSourceRequest extends GObject.Object {

    // Own properties of Shumate-1.0.Shumate.DataSourceRequest

    static name: string
    static $gtype: GObject.GType<DataSourceRequest>

    // Constructors of Shumate-1.0.Shumate.DataSourceRequest

    constructor(config?: DataSourceRequest.ConstructorProperties) 
    /**
     * Creates a new [class`DataSourceRequest]`.
     * 
     * Only implementations of [vfunc`DataSource`.start_request] should need to
     * construct a new request object.
     * @constructor 
     * @param x X coordinate of the requested tile
     * @param y Y coordinate of the requested tile
     * @param zoom_level Zoom level of the requested tile
     * @returns a new [class@DataSourceRequest]
     */
    constructor(x: number, y: number, zoom_level: number) 
    /**
     * Creates a new [class`DataSourceRequest]`.
     * 
     * Only implementations of [vfunc`DataSource`.start_request] should need to
     * construct a new request object.
     * @constructor 
     * @param x X coordinate of the requested tile
     * @param y Y coordinate of the requested tile
     * @param zoom_level Zoom level of the requested tile
     * @returns a new [class@DataSourceRequest]
     */
    static new(x: number, y: number, zoom_level: number): DataSourceRequest
    _init(config?: DataSourceRequest.ConstructorProperties): void
}

export module FileCache {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of Shumate-1.0.Shumate.FileCache

        /**
         * The directory where the tile database is stored.
         */
        cache_dir?: string | null
        /**
         * The key used to store and retrieve tiles from the cache. Different keys
         * can be used to store multiple tilesets in the same cache directory.
         */
        cache_key?: string | null
        /**
         * The cache size limit in bytes.
         * 
         * Note: this new value will not be applied until you call shumate_file_cache_purge()
         */
        size_limit?: number | null
    }

}

export interface FileCache {

    // Own properties of Shumate-1.0.Shumate.FileCache

    /**
     * The directory where the tile database is stored.
     */
    readonly cache_dir: string | null
    /**
     * The key used to store and retrieve tiles from the cache. Different keys
     * can be used to store multiple tilesets in the same cache directory.
     */
    readonly cache_key: string | null
    /**
     * The cache size limit in bytes.
     * 
     * Note: this new value will not be applied until you call shumate_file_cache_purge()
     */
    size_limit: number

    // Owm methods of Shumate-1.0.Shumate.FileCache

    /**
     * Gets the directory where the cache database is stored.
     * @returns the directory
     */
    get_cache_dir(): string | null
    /**
     * Gets the key used to store and retrieve tiles from the cache. Different keys
     * can be used to store multiple tilesets in the same cache directory.
     * @returns the cache key
     */
    get_cache_key(): string | null
    /**
     * Gets the cache size limit in bytes.
     * @returns size limit
     */
    get_size_limit(): number
    /**
     * Gets tile data from the cache, if it is available.
     * @param x the X coordinate of the tile
     * @param y the Y coordinate of the tile
     * @param zoom_level the zoom level of the tile
     * @param cancellable a #GCancellable
     * @param callback a #GAsyncReadyCallback to execute upon completion
     */
    get_tile_async(x: number, y: number, zoom_level: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void

    // Overloads of get_tile_async

    /**
     * Promisified version of {@link get_tile_async}
     * 
     * Gets tile data from the cache, if it is available.
     * @param x the X coordinate of the tile
     * @param y the Y coordinate of the tile
     * @param zoom_level the zoom level of the tile
     * @param cancellable a #GCancellable
     * @returns A Promise of: a #GBytes containing the tile data, or %NULL if the tile was not in the cache or an error occurred
     */
    get_tile_async(x: number, y: number, zoom_level: number, cancellable: Gio.Cancellable | null): globalThis.Promise<[ /* etag */ string | null, /* modtime */ GLib.DateTime | null ]>
    /**
     * Gets the tile data from a completed shumate_file_cache_get_tile_async()
     * operation.
     * 
     * `modtime` will be set to the time the tile was added to the cache, or the
     * latest time it was confirmed to be up to date.
     * 
     * `etag` will be set to the data's ETag, if present.
     * @param result a #GAsyncResult provided to callback
     * @returns a #GBytes containing the tile data, or %NULL if the tile was not in the cache or an error occurred
     */
    get_tile_finish(result: Gio.AsyncResult): [ /* returnType */ GLib.Bytes, /* etag */ string | null, /* modtime */ GLib.DateTime | null ]
    /**
     * Marks a tile in the cache as being up to date, without changing its data.
     * 
     * For example, a network source might call this function when it gets an HTTP
     * 304 Not Modified response.
     * @param x the X coordinate of the tile
     * @param y the Y coordinate of the tile
     * @param zoom_level the zoom level of the tile
     */
    mark_up_to_date(x: number, y: number, zoom_level: number): void
    /**
     * Removes less used tiles from the cache, if necessary, until it fits in
     * the size limit.
     * @param cancellable a #GCancellable
     * @param callback a #GAsyncReadyCallback to execute upon completion
     */
    purge_cache_async(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void

    // Overloads of purge_cache_async

    /**
     * Promisified version of {@link purge_cache_async}
     * 
     * Removes less used tiles from the cache, if necessary, until it fits in
     * the size limit.
     * @param cancellable a #GCancellable
     * @returns A Promise of: %TRUE if any tiles were removed, otherwise %FALSE
     */
    purge_cache_async(cancellable: Gio.Cancellable | null): globalThis.Promise<boolean>
    /**
     * Gets the result of an async operation started using
     * shumate_file_cache_purge_cache_async().
     * @param result a #GAsyncResult provided to callback
     * @returns %TRUE if any tiles were removed, otherwise %FALSE
     */
    purge_cache_finish(result: Gio.AsyncResult): boolean
    /**
     * Sets the cache size limit in bytes.
     * @param size_limit the cache limit in bytes
     */
    set_size_limit(size_limit: number): void
    /**
     * Stores a tile in the cache.
     * @param x the X coordinate of the tile
     * @param y the Y coordinate of the tile
     * @param zoom_level the zoom level of the tile
     * @param bytes a #GBytes
     * @param etag an ETag string, or %NULL
     * @param cancellable a #GCancellable
     * @param callback a #GAsyncReadyCallback to execute upon completion
     */
    store_tile_async(x: number, y: number, zoom_level: number, bytes: GLib.Bytes, etag: string | null, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void

    // Overloads of store_tile_async

    /**
     * Promisified version of {@link store_tile_async}
     * 
     * Stores a tile in the cache.
     * @param x the X coordinate of the tile
     * @param y the Y coordinate of the tile
     * @param zoom_level the zoom level of the tile
     * @param bytes a #GBytes
     * @param etag an ETag string, or %NULL
     * @param cancellable a #GCancellable
     * @returns A Promise of: %TRUE if the operation was successful, otherwise %FALSE
     */
    store_tile_async(x: number, y: number, zoom_level: number, bytes: GLib.Bytes, etag: string | null, cancellable: Gio.Cancellable | null): globalThis.Promise<boolean>
    /**
     * Gets the success value of a completed shumate_file_cache_store_tile_async()
     * operation.
     * @param result a #GAsyncResult provided to callback
     * @returns %TRUE if the operation was successful, otherwise %FALSE
     */
    store_tile_finish(result: Gio.AsyncResult): boolean

    // Class property signals of Shumate-1.0.Shumate.FileCache

    connect(sigName: "notify::cache-dir", callback: (($obj: FileCache, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::cache-dir", callback: (($obj: FileCache, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::cache-dir", ...args: any[]): void
    connect(sigName: "notify::cache-key", callback: (($obj: FileCache, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::cache-key", callback: (($obj: FileCache, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::cache-key", ...args: any[]): void
    connect(sigName: "notify::size-limit", callback: (($obj: FileCache, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::size-limit", callback: (($obj: FileCache, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::size-limit", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * A cache that stores and retrieves tiles from the file system. It is mainly
 * used by [class`TileDownloader]`, but can also be used by custom data
 * sources.
 * 
 * The cache will be filled up to a certain size limit. When this limit is
 * reached, the cache can be purged, and the tiles that are accessed least are
 * deleted.
 * 
 * ## ETags
 * 
 * The cache can optionally store an ETag string with each tile. This is
 * useful to avoid redownloading old tiles that haven't changed (for example,
 * using the HTTP If-None-Match header).
 * @class 
 */
export class FileCache extends GObject.Object {

    // Own properties of Shumate-1.0.Shumate.FileCache

    static name: string
    static $gtype: GObject.GType<FileCache>

    // Constructors of Shumate-1.0.Shumate.FileCache

    constructor(config?: FileCache.ConstructorProperties) 
    /**
     * Constructor of #ShumateFileCache.
     * @constructor 
     * @param size_limit maximum size of the cache in bytes
     * @param cache_key an ID for the tileset to store/retrieve
     * @param cache_dir the directory where the cache is created. When cache_dir == NULL, a cache in ~/.cache/shumate is used.
     * @returns a constructed #ShumateFileCache
     */
    static new_full(size_limit: number, cache_key: string | null, cache_dir: string | null): FileCache
    _init(config?: FileCache.ConstructorProperties): void
}

export module Layer {

    // Constructor properties interface

    export interface ConstructorProperties extends Gtk.Accessible.ConstructorProperties, Gtk.Buildable.ConstructorProperties, Gtk.ConstraintTarget.ConstructorProperties, Gtk.Widget.ConstructorProperties {

        // Own constructor properties of Shumate-1.0.Shumate.Layer

        viewport?: Viewport | null
    }

}

export interface Layer extends Gtk.Accessible, Gtk.Buildable, Gtk.ConstraintTarget {

    // Own properties of Shumate-1.0.Shumate.Layer

    readonly viewport: Viewport

    // Own fields of Shumate-1.0.Shumate.Layer

    parent_instance: Gtk.Widget & GObject.InitiallyUnowned

    // Owm methods of Shumate-1.0.Shumate.Layer

    /**
     * Gets the #ShumateViewport used by this layer.
     * @returns The #ShumateViewport.
     */
    get_viewport(): Viewport

    // Class property signals of Shumate-1.0.Shumate.Layer

    connect(sigName: "notify::viewport", callback: (($obj: Layer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::viewport", callback: (($obj: Layer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::viewport", ...args: any[]): void
    connect(sigName: "notify::can-focus", callback: (($obj: Layer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-focus", callback: (($obj: Layer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-focus", ...args: any[]): void
    connect(sigName: "notify::can-target", callback: (($obj: Layer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-target", callback: (($obj: Layer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-target", ...args: any[]): void
    connect(sigName: "notify::css-classes", callback: (($obj: Layer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::css-classes", callback: (($obj: Layer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::css-classes", ...args: any[]): void
    connect(sigName: "notify::css-name", callback: (($obj: Layer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::css-name", callback: (($obj: Layer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::css-name", ...args: any[]): void
    connect(sigName: "notify::cursor", callback: (($obj: Layer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::cursor", callback: (($obj: Layer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::cursor", ...args: any[]): void
    connect(sigName: "notify::focus-on-click", callback: (($obj: Layer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::focus-on-click", callback: (($obj: Layer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::focus-on-click", ...args: any[]): void
    connect(sigName: "notify::focusable", callback: (($obj: Layer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::focusable", callback: (($obj: Layer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::focusable", ...args: any[]): void
    connect(sigName: "notify::halign", callback: (($obj: Layer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::halign", callback: (($obj: Layer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::halign", ...args: any[]): void
    connect(sigName: "notify::has-default", callback: (($obj: Layer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-default", callback: (($obj: Layer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-default", ...args: any[]): void
    connect(sigName: "notify::has-focus", callback: (($obj: Layer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-focus", callback: (($obj: Layer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-focus", ...args: any[]): void
    connect(sigName: "notify::has-tooltip", callback: (($obj: Layer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-tooltip", callback: (($obj: Layer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-tooltip", ...args: any[]): void
    connect(sigName: "notify::height-request", callback: (($obj: Layer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height-request", callback: (($obj: Layer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::height-request", ...args: any[]): void
    connect(sigName: "notify::hexpand", callback: (($obj: Layer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand", callback: (($obj: Layer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hexpand", ...args: any[]): void
    connect(sigName: "notify::hexpand-set", callback: (($obj: Layer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand-set", callback: (($obj: Layer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hexpand-set", ...args: any[]): void
    connect(sigName: "notify::layout-manager", callback: (($obj: Layer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::layout-manager", callback: (($obj: Layer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::layout-manager", ...args: any[]): void
    connect(sigName: "notify::margin-bottom", callback: (($obj: Layer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-bottom", callback: (($obj: Layer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-bottom", ...args: any[]): void
    connect(sigName: "notify::margin-end", callback: (($obj: Layer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-end", callback: (($obj: Layer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-end", ...args: any[]): void
    connect(sigName: "notify::margin-start", callback: (($obj: Layer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-start", callback: (($obj: Layer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-start", ...args: any[]): void
    connect(sigName: "notify::margin-top", callback: (($obj: Layer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-top", callback: (($obj: Layer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-top", ...args: any[]): void
    connect(sigName: "notify::name", callback: (($obj: Layer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: Layer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::opacity", callback: (($obj: Layer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opacity", callback: (($obj: Layer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::opacity", ...args: any[]): void
    connect(sigName: "notify::overflow", callback: (($obj: Layer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::overflow", callback: (($obj: Layer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::overflow", ...args: any[]): void
    connect(sigName: "notify::parent", callback: (($obj: Layer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: Layer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::parent", ...args: any[]): void
    connect(sigName: "notify::receives-default", callback: (($obj: Layer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::receives-default", callback: (($obj: Layer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::receives-default", ...args: any[]): void
    connect(sigName: "notify::root", callback: (($obj: Layer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::root", callback: (($obj: Layer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::root", ...args: any[]): void
    connect(sigName: "notify::scale-factor", callback: (($obj: Layer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-factor", callback: (($obj: Layer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::scale-factor", ...args: any[]): void
    connect(sigName: "notify::sensitive", callback: (($obj: Layer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sensitive", callback: (($obj: Layer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::sensitive", ...args: any[]): void
    connect(sigName: "notify::tooltip-markup", callback: (($obj: Layer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-markup", callback: (($obj: Layer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tooltip-markup", ...args: any[]): void
    connect(sigName: "notify::tooltip-text", callback: (($obj: Layer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-text", callback: (($obj: Layer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tooltip-text", ...args: any[]): void
    connect(sigName: "notify::valign", callback: (($obj: Layer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::valign", callback: (($obj: Layer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::valign", ...args: any[]): void
    connect(sigName: "notify::vexpand", callback: (($obj: Layer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand", callback: (($obj: Layer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vexpand", ...args: any[]): void
    connect(sigName: "notify::vexpand-set", callback: (($obj: Layer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand-set", callback: (($obj: Layer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vexpand-set", ...args: any[]): void
    connect(sigName: "notify::visible", callback: (($obj: Layer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visible", callback: (($obj: Layer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::visible", ...args: any[]): void
    connect(sigName: "notify::width-request", callback: (($obj: Layer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::width-request", callback: (($obj: Layer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::width-request", ...args: any[]): void
    connect(sigName: "notify::accessible-role", callback: (($obj: Layer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-role", callback: (($obj: Layer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::accessible-role", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * Every layer (overlay that moves together with the map) has to inherit this
 * class and implement its virtual methods.
 * 
 * You can use the same layer to display many types of maps.  In Shumate they
 * are called map sources.  You can change the [property`MapLayer:`map-source]
 * property at any time to replace the current displayed map.
 * @class 
 */
export class Layer extends Gtk.Widget {

    // Own properties of Shumate-1.0.Shumate.Layer

    static name: string
    static $gtype: GObject.GType<Layer>

    // Constructors of Shumate-1.0.Shumate.Layer

    constructor(config?: Layer.ConstructorProperties) 
    _init(config?: Layer.ConstructorProperties): void
}

export module License {

    // Constructor properties interface

    export interface ConstructorProperties extends Gtk.Accessible.ConstructorProperties, Gtk.Buildable.ConstructorProperties, Gtk.ConstraintTarget.ConstructorProperties, Gtk.Widget.ConstructorProperties {

        // Own constructor properties of Shumate-1.0.Shumate.License

        /**
         * Sets additional text to be displayed in the license area.  The map's
         * license will be added below it. Your text can have multiple lines, just use
         * "\n" in between.
         */
        extra_text?: string | null
        /**
         * The license's horizontal alignment
         */
        xalign?: number | null
    }

}

export interface License extends Gtk.Accessible, Gtk.Buildable, Gtk.ConstraintTarget {

    // Own properties of Shumate-1.0.Shumate.License

    /**
     * Sets additional text to be displayed in the license area.  The map's
     * license will be added below it. Your text can have multiple lines, just use
     * "\n" in between.
     */
    extra_text: string | null
    /**
     * The license's horizontal alignment
     */
    xalign: number

    // Owm methods of Shumate-1.0.Shumate.License

    append_map_source(map_source: MapSource): void
    /**
     * Gets the additional license text.
     * @returns the additional license text
     */
    get_extra_text(): string | null
    /**
     * Get the license's text horizontal alignment.
     * @returns the license's text horizontal alignment.
     */
    get_xalign(): number
    prepend_map_source(map_source: MapSource): void
    remove_map_source(map_source: MapSource): void
    /**
     * Show the additional license text on the map view.  The text will preceed the
     * map's licence when displayed. Use "\n" to separate the lines.
     * @param text the additional license text
     */
    set_extra_text(text: string | null): void
    /**
     * Set the license's text horizontal alignment.
     * @param xalign The license's text horizontal alignment
     */
    set_xalign(xalign: number): void

    // Class property signals of Shumate-1.0.Shumate.License

    connect(sigName: "notify::extra-text", callback: (($obj: License, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::extra-text", callback: (($obj: License, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::extra-text", ...args: any[]): void
    connect(sigName: "notify::xalign", callback: (($obj: License, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::xalign", callback: (($obj: License, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::xalign", ...args: any[]): void
    connect(sigName: "notify::can-focus", callback: (($obj: License, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-focus", callback: (($obj: License, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-focus", ...args: any[]): void
    connect(sigName: "notify::can-target", callback: (($obj: License, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-target", callback: (($obj: License, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-target", ...args: any[]): void
    connect(sigName: "notify::css-classes", callback: (($obj: License, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::css-classes", callback: (($obj: License, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::css-classes", ...args: any[]): void
    connect(sigName: "notify::css-name", callback: (($obj: License, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::css-name", callback: (($obj: License, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::css-name", ...args: any[]): void
    connect(sigName: "notify::cursor", callback: (($obj: License, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::cursor", callback: (($obj: License, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::cursor", ...args: any[]): void
    connect(sigName: "notify::focus-on-click", callback: (($obj: License, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::focus-on-click", callback: (($obj: License, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::focus-on-click", ...args: any[]): void
    connect(sigName: "notify::focusable", callback: (($obj: License, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::focusable", callback: (($obj: License, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::focusable", ...args: any[]): void
    connect(sigName: "notify::halign", callback: (($obj: License, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::halign", callback: (($obj: License, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::halign", ...args: any[]): void
    connect(sigName: "notify::has-default", callback: (($obj: License, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-default", callback: (($obj: License, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-default", ...args: any[]): void
    connect(sigName: "notify::has-focus", callback: (($obj: License, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-focus", callback: (($obj: License, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-focus", ...args: any[]): void
    connect(sigName: "notify::has-tooltip", callback: (($obj: License, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-tooltip", callback: (($obj: License, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-tooltip", ...args: any[]): void
    connect(sigName: "notify::height-request", callback: (($obj: License, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height-request", callback: (($obj: License, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::height-request", ...args: any[]): void
    connect(sigName: "notify::hexpand", callback: (($obj: License, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand", callback: (($obj: License, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hexpand", ...args: any[]): void
    connect(sigName: "notify::hexpand-set", callback: (($obj: License, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand-set", callback: (($obj: License, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hexpand-set", ...args: any[]): void
    connect(sigName: "notify::layout-manager", callback: (($obj: License, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::layout-manager", callback: (($obj: License, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::layout-manager", ...args: any[]): void
    connect(sigName: "notify::margin-bottom", callback: (($obj: License, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-bottom", callback: (($obj: License, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-bottom", ...args: any[]): void
    connect(sigName: "notify::margin-end", callback: (($obj: License, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-end", callback: (($obj: License, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-end", ...args: any[]): void
    connect(sigName: "notify::margin-start", callback: (($obj: License, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-start", callback: (($obj: License, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-start", ...args: any[]): void
    connect(sigName: "notify::margin-top", callback: (($obj: License, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-top", callback: (($obj: License, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-top", ...args: any[]): void
    connect(sigName: "notify::name", callback: (($obj: License, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: License, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::opacity", callback: (($obj: License, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opacity", callback: (($obj: License, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::opacity", ...args: any[]): void
    connect(sigName: "notify::overflow", callback: (($obj: License, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::overflow", callback: (($obj: License, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::overflow", ...args: any[]): void
    connect(sigName: "notify::parent", callback: (($obj: License, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: License, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::parent", ...args: any[]): void
    connect(sigName: "notify::receives-default", callback: (($obj: License, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::receives-default", callback: (($obj: License, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::receives-default", ...args: any[]): void
    connect(sigName: "notify::root", callback: (($obj: License, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::root", callback: (($obj: License, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::root", ...args: any[]): void
    connect(sigName: "notify::scale-factor", callback: (($obj: License, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-factor", callback: (($obj: License, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::scale-factor", ...args: any[]): void
    connect(sigName: "notify::sensitive", callback: (($obj: License, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sensitive", callback: (($obj: License, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::sensitive", ...args: any[]): void
    connect(sigName: "notify::tooltip-markup", callback: (($obj: License, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-markup", callback: (($obj: License, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tooltip-markup", ...args: any[]): void
    connect(sigName: "notify::tooltip-text", callback: (($obj: License, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-text", callback: (($obj: License, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tooltip-text", ...args: any[]): void
    connect(sigName: "notify::valign", callback: (($obj: License, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::valign", callback: (($obj: License, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::valign", ...args: any[]): void
    connect(sigName: "notify::vexpand", callback: (($obj: License, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand", callback: (($obj: License, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vexpand", ...args: any[]): void
    connect(sigName: "notify::vexpand-set", callback: (($obj: License, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand-set", callback: (($obj: License, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vexpand-set", ...args: any[]): void
    connect(sigName: "notify::visible", callback: (($obj: License, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visible", callback: (($obj: License, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::visible", ...args: any[]): void
    connect(sigName: "notify::width-request", callback: (($obj: License, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::width-request", callback: (($obj: License, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::width-request", ...args: any[]): void
    connect(sigName: "notify::accessible-role", callback: (($obj: License, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-role", callback: (($obj: License, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::accessible-role", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * A widget that displays license text.
 * @class 
 */
export class License extends Gtk.Widget {

    // Own properties of Shumate-1.0.Shumate.License

    static name: string
    static $gtype: GObject.GType<License>

    // Constructors of Shumate-1.0.Shumate.License

    constructor(config?: License.ConstructorProperties) 
    /**
     * Creates an instance of #ShumateLicense.
     * @constructor 
     * @returns a new #ShumateLicense.
     */
    constructor() 
    /**
     * Creates an instance of #ShumateLicense.
     * @constructor 
     * @returns a new #ShumateLicense.
     */
    static new(): License
    _init(config?: License.ConstructorProperties): void
}

export module Map {

    // Signal callback interfaces

    /**
     * Signal callback interface for `animation-completed`
     */
    export interface AnimationCompletedSignalCallback {
        ($obj: Map): void
    }


    // Constructor properties interface

    export interface ConstructorProperties extends Gtk.Accessible.ConstructorProperties, Gtk.Buildable.ConstructorProperties, Gtk.ConstraintTarget.ConstructorProperties, Gtk.Widget.ConstructorProperties {

        // Own constructor properties of Shumate-1.0.Shumate.Map

        /**
         * Animate zoom change when zooming in/out.
         */
        animate_zoom?: boolean | null
        /**
         * The duration of an animation when going to a location, in milliseconds.
         * A value of 0 means that the duration is calculated automatically for you.
         * 
         * Please note that animation of #shumate_map_ensure_visible also
         * involves a 'go-to' animation.
         */
        go_to_duration?: number | null
        /**
         * Should the view zoom in and recenter when the user double click on the map.
         */
        zoom_on_double_click?: boolean | null
    }

}

export interface Map extends Gtk.Accessible, Gtk.Buildable, Gtk.ConstraintTarget {

    // Own properties of Shumate-1.0.Shumate.Map

    /**
     * Animate zoom change when zooming in/out.
     */
    animate_zoom: boolean
    /**
     * The duration of an animation when going to a location, in milliseconds.
     * A value of 0 means that the duration is calculated automatically for you.
     * 
     * Please note that animation of #shumate_map_ensure_visible also
     * involves a 'go-to' animation.
     */
    go_to_duration: number
    /**
     * The view's global state. Useful to inform using if the view is busy loading
     * tiles or not.
     */
    readonly state: State
    /**
     * The viewport, which contains information about the center, rotation, zoom,
     * etc. of the map.
     */
    readonly viewport: Viewport
    /**
     * Should the view zoom in and recenter when the user double click on the map.
     */
    zoom_on_double_click: boolean

    // Owm methods of Shumate-1.0.Shumate.Map

    /**
     * Adds a new layer to the view
     * @param layer a #ShumateLayer
     */
    add_layer(layer: Layer): void
    /**
     * Centers the map on these coordinates.
     * @param latitude the longitude to center the map at
     * @param longitude the longitude to center the map at
     */
    center_on(latitude: number, longitude: number): void
    /**
     * Checks whether the view animates zoom level changes.
     * @returns TRUE if the view animates zooms, FALSE otherwise.
     */
    get_animate_zoom(): boolean
    /**
     * Get the 'go-to-duration' property.
     * @returns the animation duration when calling [method@Map.go_to],   in milliseconds.
     */
    get_go_to_duration(): number
    /**
     * Gets the view's state.
     * @returns the state.
     */
    get_state(): State
    /**
     * Get the #ShumateViewport used by this view.
     * @returns the #ShumateViewport
     */
    get_viewport(): Viewport
    /**
     * Checks whether the view zooms on double click.
     * @returns TRUE if the view zooms on double click, FALSE otherwise.
     */
    get_zoom_on_double_click(): boolean
    /**
     * Move from the current position to these coordinates. All tiles in the
     * intermediate view WILL be loaded!
     * @param latitude the longitude to center the map at
     * @param longitude the longitude to center the map at
     */
    go_to(latitude: number, longitude: number): void
    /**
     * Move from the current position to these coordinates and zoom to the given
     * zoom level. All tiles in the intermediate view WILL be loaded!
     * @param latitude the longitude to center the map at
     * @param longitude the longitude to center the map at
     * @param zoom_level the zoom level to end at
     */
    go_to_full(latitude: number, longitude: number, zoom_level: number): void
    /**
     * Move from the current position to these coordinates and zoom to the given
     * zoom level. The given duration is used instead of the map's default [property`Map:`go-to-duration].
     * All tiles in the intermediate view WILL be loaded!
     * @param latitude the longitude to center the map at
     * @param longitude the longitude to center the map at
     * @param zoom_level the zoom level to end at
     * @param duration_ms animation duration in milliseconds
     */
    go_to_full_with_duration(latitude: number, longitude: number, zoom_level: number, duration_ms: number): void
    /**
     * Adds `layer` to `self` above `next_sibling` or, if `next_sibling` is %NULL, at
     * the bottom of the layer list.
     * @param layer a #ShumateLayer
     * @param next_sibling a #ShumateLayer that is a child of `self,` or %NULL
     */
    insert_layer_above(layer: Layer, next_sibling: Layer | null): void
    /**
     * Adds `layer` to `self` behind `next_sibling` or, if `next_sibling` is %NULL, at
     * the top of the layer list.
     * @param layer a #ShumateLayer
     * @param next_sibling a #ShumateLayer that is a child of `self,` or %NULL
     */
    insert_layer_behind(layer: Layer, next_sibling: Layer | null): void
    /**
     * Removes the given layer from the view
     * @param layer a #ShumateLayer
     */
    remove_layer(layer: Layer): void
    /**
     * Should the view animate zoom level changes.
     * @param value a #gboolean
     */
    set_animate_zoom(value: boolean): void
    /**
     * Set the duration of the transition of [method`Map`.go_to].
     * @param duration the animation duration, in milliseconds
     */
    set_go_to_duration(duration: number): void
    /**
     * Changes the currently used map source. #g_object_unref() will be called on
     * the previous one.
     * 
     * As a side effect, changing the primary map source will also clear all
     * secondary map sources.
     * @param map_source a #ShumateMapSource
     */
    set_map_source(map_source: MapSource): void
    /**
     * Should the view zoom in and recenter when the user double click on the map.
     * @param value a #gboolean
     */
    set_zoom_on_double_click(value: boolean): void
    /**
     * Stop the go to animation.  The view will stay where it was when the
     * animation was stopped.
     */
    stop_go_to(): void
    /**
     * Zooms the map in. If [property`Map:`animate-zoom] is `TRUE`, the change will be animated.
     */
    zoom_in(): void
    /**
     * Zooms the map out. If [property`Map:`animate-zoom] is `TRUE`, the change will be animated.
     */
    zoom_out(): void

    // Own signals of Shumate-1.0.Shumate.Map

    connect(sigName: "animation-completed", callback: Map.AnimationCompletedSignalCallback): number
    connect_after(sigName: "animation-completed", callback: Map.AnimationCompletedSignalCallback): number
    emit(sigName: "animation-completed", ...args: any[]): void

    // Class property signals of Shumate-1.0.Shumate.Map

    connect(sigName: "notify::animate-zoom", callback: (($obj: Map, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::animate-zoom", callback: (($obj: Map, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::animate-zoom", ...args: any[]): void
    connect(sigName: "notify::go-to-duration", callback: (($obj: Map, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::go-to-duration", callback: (($obj: Map, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::go-to-duration", ...args: any[]): void
    connect(sigName: "notify::state", callback: (($obj: Map, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::state", callback: (($obj: Map, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::state", ...args: any[]): void
    connect(sigName: "notify::viewport", callback: (($obj: Map, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::viewport", callback: (($obj: Map, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::viewport", ...args: any[]): void
    connect(sigName: "notify::zoom-on-double-click", callback: (($obj: Map, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::zoom-on-double-click", callback: (($obj: Map, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::zoom-on-double-click", ...args: any[]): void
    connect(sigName: "notify::can-focus", callback: (($obj: Map, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-focus", callback: (($obj: Map, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-focus", ...args: any[]): void
    connect(sigName: "notify::can-target", callback: (($obj: Map, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-target", callback: (($obj: Map, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-target", ...args: any[]): void
    connect(sigName: "notify::css-classes", callback: (($obj: Map, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::css-classes", callback: (($obj: Map, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::css-classes", ...args: any[]): void
    connect(sigName: "notify::css-name", callback: (($obj: Map, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::css-name", callback: (($obj: Map, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::css-name", ...args: any[]): void
    connect(sigName: "notify::cursor", callback: (($obj: Map, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::cursor", callback: (($obj: Map, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::cursor", ...args: any[]): void
    connect(sigName: "notify::focus-on-click", callback: (($obj: Map, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::focus-on-click", callback: (($obj: Map, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::focus-on-click", ...args: any[]): void
    connect(sigName: "notify::focusable", callback: (($obj: Map, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::focusable", callback: (($obj: Map, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::focusable", ...args: any[]): void
    connect(sigName: "notify::halign", callback: (($obj: Map, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::halign", callback: (($obj: Map, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::halign", ...args: any[]): void
    connect(sigName: "notify::has-default", callback: (($obj: Map, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-default", callback: (($obj: Map, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-default", ...args: any[]): void
    connect(sigName: "notify::has-focus", callback: (($obj: Map, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-focus", callback: (($obj: Map, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-focus", ...args: any[]): void
    connect(sigName: "notify::has-tooltip", callback: (($obj: Map, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-tooltip", callback: (($obj: Map, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-tooltip", ...args: any[]): void
    connect(sigName: "notify::height-request", callback: (($obj: Map, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height-request", callback: (($obj: Map, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::height-request", ...args: any[]): void
    connect(sigName: "notify::hexpand", callback: (($obj: Map, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand", callback: (($obj: Map, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hexpand", ...args: any[]): void
    connect(sigName: "notify::hexpand-set", callback: (($obj: Map, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand-set", callback: (($obj: Map, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hexpand-set", ...args: any[]): void
    connect(sigName: "notify::layout-manager", callback: (($obj: Map, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::layout-manager", callback: (($obj: Map, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::layout-manager", ...args: any[]): void
    connect(sigName: "notify::margin-bottom", callback: (($obj: Map, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-bottom", callback: (($obj: Map, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-bottom", ...args: any[]): void
    connect(sigName: "notify::margin-end", callback: (($obj: Map, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-end", callback: (($obj: Map, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-end", ...args: any[]): void
    connect(sigName: "notify::margin-start", callback: (($obj: Map, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-start", callback: (($obj: Map, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-start", ...args: any[]): void
    connect(sigName: "notify::margin-top", callback: (($obj: Map, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-top", callback: (($obj: Map, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-top", ...args: any[]): void
    connect(sigName: "notify::name", callback: (($obj: Map, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: Map, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::opacity", callback: (($obj: Map, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opacity", callback: (($obj: Map, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::opacity", ...args: any[]): void
    connect(sigName: "notify::overflow", callback: (($obj: Map, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::overflow", callback: (($obj: Map, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::overflow", ...args: any[]): void
    connect(sigName: "notify::parent", callback: (($obj: Map, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: Map, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::parent", ...args: any[]): void
    connect(sigName: "notify::receives-default", callback: (($obj: Map, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::receives-default", callback: (($obj: Map, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::receives-default", ...args: any[]): void
    connect(sigName: "notify::root", callback: (($obj: Map, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::root", callback: (($obj: Map, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::root", ...args: any[]): void
    connect(sigName: "notify::scale-factor", callback: (($obj: Map, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-factor", callback: (($obj: Map, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::scale-factor", ...args: any[]): void
    connect(sigName: "notify::sensitive", callback: (($obj: Map, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sensitive", callback: (($obj: Map, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::sensitive", ...args: any[]): void
    connect(sigName: "notify::tooltip-markup", callback: (($obj: Map, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-markup", callback: (($obj: Map, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tooltip-markup", ...args: any[]): void
    connect(sigName: "notify::tooltip-text", callback: (($obj: Map, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-text", callback: (($obj: Map, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tooltip-text", ...args: any[]): void
    connect(sigName: "notify::valign", callback: (($obj: Map, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::valign", callback: (($obj: Map, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::valign", ...args: any[]): void
    connect(sigName: "notify::vexpand", callback: (($obj: Map, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand", callback: (($obj: Map, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vexpand", ...args: any[]): void
    connect(sigName: "notify::vexpand-set", callback: (($obj: Map, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand-set", callback: (($obj: Map, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vexpand-set", ...args: any[]): void
    connect(sigName: "notify::visible", callback: (($obj: Map, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visible", callback: (($obj: Map, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::visible", ...args: any[]): void
    connect(sigName: "notify::width-request", callback: (($obj: Map, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::width-request", callback: (($obj: Map, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::width-request", ...args: any[]): void
    connect(sigName: "notify::accessible-role", callback: (($obj: Map, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-role", callback: (($obj: Map, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::accessible-role", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * The Map widget is a [class`Gtk`.Widget] that show and allows interaction with
 * the user.
 * 
 * This is the base widget and doesn't have advanced features. You can check the
 * [class`Shumate`.SimpleMap] for a ready-to-use widget.
 * 
 * By default, a [class`Shumate`.Viewport] is created and can be accessed with
 * [method`Shumate`.Map.get_viewport].
 * 
 * Unless created with [ctor`Shumate`.Map.new_simple], the widget doesn't hold any
 * layer and won't show anything. A [class`Shumate`.Layer] can be added or removed
 * using the [method`Shumate`.Map.add_layer] or [method`Shumate`.Map.remove_layer]
 * methods.
 * @class 
 */
export class Map extends Gtk.Widget {

    // Own properties of Shumate-1.0.Shumate.Map

    static name: string
    static $gtype: GObject.GType<Map>

    // Constructors of Shumate-1.0.Shumate.Map

    constructor(config?: Map.ConstructorProperties) 
    /**
     * Creates an instance of #ShumateMap.
     * @constructor 
     * @returns a new #ShumateMap ready to be used as a #GtkWidget.
     */
    constructor() 
    /**
     * Creates an instance of #ShumateMap.
     * @constructor 
     * @returns a new #ShumateMap ready to be used as a #GtkWidget.
     */
    static new(): Map
    static new_simple(): Map
    _init(config?: Map.ConstructorProperties): void
}

export module MapLayer {

    // Signal callback interfaces

    /**
     * Signal callback interface for `symbol-clicked`
     */
    export interface SymbolClickedSignalCallback {
        ($obj: MapLayer, event: SymbolEvent): void
    }


    // Constructor properties interface

    export interface ConstructorProperties extends Gtk.Accessible.ConstructorProperties, Gtk.Buildable.ConstructorProperties, Gtk.ConstraintTarget.ConstructorProperties, Layer.ConstructorProperties {

        // Own constructor properties of Shumate-1.0.Shumate.MapLayer

        map_source?: MapSource | null
    }

}

export interface MapLayer extends Gtk.Accessible, Gtk.Buildable, Gtk.ConstraintTarget {

    // Own properties of Shumate-1.0.Shumate.MapLayer

    readonly map_source: MapSource

    // Conflicting properties

    parent_instance: Gtk.Widget & GObject.InitiallyUnowned & GObject.InitiallyUnowned

    // Own signals of Shumate-1.0.Shumate.MapLayer

    connect(sigName: "symbol-clicked", callback: MapLayer.SymbolClickedSignalCallback): number
    connect_after(sigName: "symbol-clicked", callback: MapLayer.SymbolClickedSignalCallback): number
    emit(sigName: "symbol-clicked", event: SymbolEvent, ...args: any[]): void

    // Class property signals of Shumate-1.0.Shumate.MapLayer

    connect(sigName: "notify::map-source", callback: (($obj: MapLayer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::map-source", callback: (($obj: MapLayer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::map-source", ...args: any[]): void
    connect(sigName: "notify::viewport", callback: (($obj: MapLayer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::viewport", callback: (($obj: MapLayer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::viewport", ...args: any[]): void
    connect(sigName: "notify::can-focus", callback: (($obj: MapLayer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-focus", callback: (($obj: MapLayer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-focus", ...args: any[]): void
    connect(sigName: "notify::can-target", callback: (($obj: MapLayer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-target", callback: (($obj: MapLayer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-target", ...args: any[]): void
    connect(sigName: "notify::css-classes", callback: (($obj: MapLayer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::css-classes", callback: (($obj: MapLayer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::css-classes", ...args: any[]): void
    connect(sigName: "notify::css-name", callback: (($obj: MapLayer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::css-name", callback: (($obj: MapLayer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::css-name", ...args: any[]): void
    connect(sigName: "notify::cursor", callback: (($obj: MapLayer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::cursor", callback: (($obj: MapLayer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::cursor", ...args: any[]): void
    connect(sigName: "notify::focus-on-click", callback: (($obj: MapLayer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::focus-on-click", callback: (($obj: MapLayer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::focus-on-click", ...args: any[]): void
    connect(sigName: "notify::focusable", callback: (($obj: MapLayer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::focusable", callback: (($obj: MapLayer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::focusable", ...args: any[]): void
    connect(sigName: "notify::halign", callback: (($obj: MapLayer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::halign", callback: (($obj: MapLayer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::halign", ...args: any[]): void
    connect(sigName: "notify::has-default", callback: (($obj: MapLayer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-default", callback: (($obj: MapLayer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-default", ...args: any[]): void
    connect(sigName: "notify::has-focus", callback: (($obj: MapLayer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-focus", callback: (($obj: MapLayer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-focus", ...args: any[]): void
    connect(sigName: "notify::has-tooltip", callback: (($obj: MapLayer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-tooltip", callback: (($obj: MapLayer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-tooltip", ...args: any[]): void
    connect(sigName: "notify::height-request", callback: (($obj: MapLayer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height-request", callback: (($obj: MapLayer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::height-request", ...args: any[]): void
    connect(sigName: "notify::hexpand", callback: (($obj: MapLayer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand", callback: (($obj: MapLayer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hexpand", ...args: any[]): void
    connect(sigName: "notify::hexpand-set", callback: (($obj: MapLayer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand-set", callback: (($obj: MapLayer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hexpand-set", ...args: any[]): void
    connect(sigName: "notify::layout-manager", callback: (($obj: MapLayer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::layout-manager", callback: (($obj: MapLayer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::layout-manager", ...args: any[]): void
    connect(sigName: "notify::margin-bottom", callback: (($obj: MapLayer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-bottom", callback: (($obj: MapLayer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-bottom", ...args: any[]): void
    connect(sigName: "notify::margin-end", callback: (($obj: MapLayer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-end", callback: (($obj: MapLayer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-end", ...args: any[]): void
    connect(sigName: "notify::margin-start", callback: (($obj: MapLayer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-start", callback: (($obj: MapLayer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-start", ...args: any[]): void
    connect(sigName: "notify::margin-top", callback: (($obj: MapLayer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-top", callback: (($obj: MapLayer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-top", ...args: any[]): void
    connect(sigName: "notify::name", callback: (($obj: MapLayer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: MapLayer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::opacity", callback: (($obj: MapLayer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opacity", callback: (($obj: MapLayer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::opacity", ...args: any[]): void
    connect(sigName: "notify::overflow", callback: (($obj: MapLayer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::overflow", callback: (($obj: MapLayer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::overflow", ...args: any[]): void
    connect(sigName: "notify::parent", callback: (($obj: MapLayer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: MapLayer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::parent", ...args: any[]): void
    connect(sigName: "notify::receives-default", callback: (($obj: MapLayer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::receives-default", callback: (($obj: MapLayer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::receives-default", ...args: any[]): void
    connect(sigName: "notify::root", callback: (($obj: MapLayer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::root", callback: (($obj: MapLayer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::root", ...args: any[]): void
    connect(sigName: "notify::scale-factor", callback: (($obj: MapLayer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-factor", callback: (($obj: MapLayer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::scale-factor", ...args: any[]): void
    connect(sigName: "notify::sensitive", callback: (($obj: MapLayer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sensitive", callback: (($obj: MapLayer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::sensitive", ...args: any[]): void
    connect(sigName: "notify::tooltip-markup", callback: (($obj: MapLayer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-markup", callback: (($obj: MapLayer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tooltip-markup", ...args: any[]): void
    connect(sigName: "notify::tooltip-text", callback: (($obj: MapLayer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-text", callback: (($obj: MapLayer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tooltip-text", ...args: any[]): void
    connect(sigName: "notify::valign", callback: (($obj: MapLayer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::valign", callback: (($obj: MapLayer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::valign", ...args: any[]): void
    connect(sigName: "notify::vexpand", callback: (($obj: MapLayer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand", callback: (($obj: MapLayer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vexpand", ...args: any[]): void
    connect(sigName: "notify::vexpand-set", callback: (($obj: MapLayer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand-set", callback: (($obj: MapLayer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vexpand-set", ...args: any[]): void
    connect(sigName: "notify::visible", callback: (($obj: MapLayer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visible", callback: (($obj: MapLayer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::visible", ...args: any[]): void
    connect(sigName: "notify::width-request", callback: (($obj: MapLayer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::width-request", callback: (($obj: MapLayer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::width-request", ...args: any[]): void
    connect(sigName: "notify::accessible-role", callback: (($obj: MapLayer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-role", callback: (($obj: MapLayer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::accessible-role", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * A [class`Shumate`.Layer] implementation that fetches tiles from a [class`Shumate`.MapSource]
 * and draws them as a grid.
 * @class 
 */
export class MapLayer extends Layer {

    // Own properties of Shumate-1.0.Shumate.MapLayer

    static name: string
    static $gtype: GObject.GType<MapLayer>

    // Constructors of Shumate-1.0.Shumate.MapLayer

    constructor(config?: MapLayer.ConstructorProperties) 
    constructor(map_source: MapSource, viewport: Viewport) 
    static new(map_source: MapSource, viewport: Viewport): MapLayer
    _init(config?: MapLayer.ConstructorProperties): void
}

export module MapSource {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of Shumate-1.0.Shumate.MapSource

        /**
         * The id of the map source
         */
        id?: string | null
        /**
         * The usage license of the map source
         */
        license?: string | null
        /**
         * The usage license's uri for more information
         */
        license_uri?: string | null
        /**
         * The maximum zoom level
         */
        max_zoom_level?: number | null
        /**
         * The minimum zoom level
         */
        min_zoom_level?: number | null
        /**
         * The name of the map source
         */
        name?: string | null
        /**
         * The map projection of the map source
         */
        projection?: MapProjection | null
        /**
         * The tile size of the map source
         */
        tile_size?: number | null
    }

}

export interface MapSource {

    // Own properties of Shumate-1.0.Shumate.MapSource

    /**
     * The id of the map source
     */
    id: string | null
    /**
     * The usage license of the map source
     */
    license: string | null
    /**
     * The usage license's uri for more information
     */
    license_uri: string | null
    /**
     * The maximum zoom level
     */
    max_zoom_level: number
    /**
     * The minimum zoom level
     */
    min_zoom_level: number
    /**
     * The name of the map source
     */
    name: string | null
    /**
     * The map projection of the map source
     */
    projection: MapProjection
    /**
     * The tile size of the map source
     */
    tile_size: number

    // Own fields of Shumate-1.0.Shumate.MapSource

    parent_instance: GObject.Object

    // Owm methods of Shumate-1.0.Shumate.MapSource

    /**
     * Asynchronous version of shumate_map_source_fill_tile().
     * @param tile a #ShumateTile
     * @param cancellable a #GCancellable
     * @param callback a #GAsyncReadyCallback to execute upon completion
     */
    fill_tile_async(tile: Tile, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void

    // Overloads of fill_tile_async

    /**
     * Promisified version of {@link fill_tile_async}
     * 
     * Asynchronous version of shumate_map_source_fill_tile().
     * @param tile a #ShumateTile
     * @param cancellable a #GCancellable
     * @returns A Promise of: %TRUE if the tile was filled with valid data, otherwise %FALSE
     */
    fill_tile_async(tile: Tile, cancellable: Gio.Cancellable | null): globalThis.Promise<boolean>
    /**
     * Gets the success value of a completed shumate_map_source_fill_tile_async()
     * operation.
     * @param result a #GAsyncResult provided to callback
     * @returns %TRUE if the tile was filled with valid data, otherwise %FALSE
     */
    fill_tile_finish(result: Gio.AsyncResult): boolean
    /**
     * Gets the number of tiles in a column at this zoom level for this map
     * source.
     * @param zoom_level the zoom level
     * @returns the number of tiles in a column
     */
    get_column_count(zoom_level: number): number
    /**
     * Gets map source's id.
     * @returns the map source's id.
     */
    get_id(): string | null
    /**
     * Gets the latitude corresponding to this y position in the map source's
     * projection.
     * @param zoom_level the zoom level
     * @param y a y position
     * @returns the latitude
     */
    get_latitude(zoom_level: number, y: number): number
    /**
     * Gets map source's license.
     * @returns the map source's license.
     */
    get_license(): string | null
    /**
     * Gets map source's license URI.
     * @returns the map source's license URI.
     */
    get_license_uri(): string | null
    /**
     * Gets the longitude corresponding to this x position in the map source's
     * projection.
     * @param zoom_level the zoom level
     * @param x a x position
     * @returns the longitude
     */
    get_longitude(zoom_level: number, x: number): number
    /**
     * Gets map source's maximum zoom level.
     * @returns the maximum zoom level this map source supports
     */
    get_max_zoom_level(): number
    /**
     * Gets meters per pixel at the position on the map using this map source's projection.
     * @param zoom_level the zoom level
     * @param latitude a latitude
     * @param longitude a longitude
     * @returns the meters per pixel
     */
    get_meters_per_pixel(zoom_level: number, latitude: number, longitude: number): number
    /**
     * Gets map source's minimum zoom level.
     * @returns the miminum zoom level this map source supports
     */
    get_min_zoom_level(): number
    /**
     * Gets map source's name.
     * @returns the map source's name.
     */
    get_name(): string | null
    /**
     * Gets map source's projection.
     * @returns the map source's projection.
     */
    get_projection(): MapProjection
    /**
     * Gets the number of tiles in a row at this zoom level for this map source.
     * @param zoom_level the zoom level
     * @returns the number of tiles in a row
     */
    get_row_count(zoom_level: number): number
    /**
     * Gets map source's tile size.
     * @returns the tile's size (width and height) in pixels for this map source
     */
    get_tile_size(): number
    /**
     * Gets the apparent size of the map tiles at the given fractional zoom level.
     * 
     * As the map is zoomed in, a tile gets bigger and bigger until, at the next
     * integer zoom level, it "splits" into four tiles at the next zoom level.
     * Thus, the size increase follows an exponential curve, base 2.
     * @param zoom_level a zoom level
     * @returns the tile's size (width and height) in pixels for this map source at this zoom level
     */
    get_tile_size_at_zoom(zoom_level: number): number
    /**
     * Gets the x position on the map using this map source's projection.
     * (0, 0) is located at the top left.
     * @param zoom_level the zoom level
     * @param longitude a longitude
     * @returns the x position
     */
    get_x(zoom_level: number, longitude: number): number
    /**
     * Gets the y position on the map using this map source's projection.
     * (0, 0) is located at the top left.
     * @param zoom_level the zoom level
     * @param latitude a latitude
     * @returns the y position
     */
    get_y(zoom_level: number, latitude: number): number
    /**
     * Sets the map source's id.
     * @param id an id
     */
    set_id(id: string | null): void
    /**
     * Sets the map source's license.
     * @param license the licence
     */
    set_license(license: string | null): void
    /**
     * Sets the map source's license URI.
     * @param license_uri the licence URI
     */
    set_license_uri(license_uri: string | null): void
    /**
     * Sets the map source's maximum zoom level.
     * @param zoom_level the maximum zoom level
     */
    set_max_zoom_level(zoom_level: number): void
    /**
     * Sets the map source's minimal zoom level.
     * @param zoom_level the minimal zoom level
     */
    set_min_zoom_level(zoom_level: number): void
    /**
     * Sets the map source's name.
     * @param name a name
     */
    set_name(name: string | null): void
    /**
     * Sets the map source's projection.
     * @param projection a #ShumateMapProjection
     */
    set_projection(projection: MapProjection): void
    /**
     * Sets the map source's tile size.
     * @param tile_size the tile size
     */
    set_tile_size(tile_size: number): void

    // Own virtual methods of Shumate-1.0.Shumate.MapSource

    /**
     * Asynchronous version of shumate_map_source_fill_tile().
     * @virtual 
     * @param tile a #ShumateTile
     * @param cancellable a #GCancellable
     * @param callback a #GAsyncReadyCallback to execute upon completion
     */
    vfunc_fill_tile_async(tile: Tile, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void
    /**
     * Gets the success value of a completed shumate_map_source_fill_tile_async()
     * operation.
     * @virtual 
     * @param result a #GAsyncResult provided to callback
     * @returns %TRUE if the tile was filled with valid data, otherwise %FALSE
     */
    vfunc_fill_tile_finish(result: Gio.AsyncResult): boolean

    // Class property signals of Shumate-1.0.Shumate.MapSource

    connect(sigName: "notify::id", callback: (($obj: MapSource, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::id", callback: (($obj: MapSource, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::id", ...args: any[]): void
    connect(sigName: "notify::license", callback: (($obj: MapSource, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::license", callback: (($obj: MapSource, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::license", ...args: any[]): void
    connect(sigName: "notify::license-uri", callback: (($obj: MapSource, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::license-uri", callback: (($obj: MapSource, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::license-uri", ...args: any[]): void
    connect(sigName: "notify::max-zoom-level", callback: (($obj: MapSource, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::max-zoom-level", callback: (($obj: MapSource, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::max-zoom-level", ...args: any[]): void
    connect(sigName: "notify::min-zoom-level", callback: (($obj: MapSource, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::min-zoom-level", callback: (($obj: MapSource, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::min-zoom-level", ...args: any[]): void
    connect(sigName: "notify::name", callback: (($obj: MapSource, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: MapSource, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::projection", callback: (($obj: MapSource, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::projection", callback: (($obj: MapSource, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::projection", ...args: any[]): void
    connect(sigName: "notify::tile-size", callback: (($obj: MapSource, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tile-size", callback: (($obj: MapSource, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tile-size", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * The base class for all map sources. Map sources fill [class`Tile]` objects
 * with images from various sources: a web API, for example, or a test pattern
 * generated on demand.
 * 
 * The most common map source is [class`RasterRenderer]`, which fetches tiles
 * using a [class`TileDownloader]`.
 * @class 
 */
export class MapSource extends GObject.Object {

    // Own properties of Shumate-1.0.Shumate.MapSource

    static name: string
    static $gtype: GObject.GType<MapSource>

    // Constructors of Shumate-1.0.Shumate.MapSource

    constructor(config?: MapSource.ConstructorProperties) 
    _init(config?: MapSource.ConstructorProperties): void
}

export module MapSourceRegistry {

    // Constructor properties interface

    export interface ConstructorProperties extends Gio.ListModel.ConstructorProperties, GObject.Object.ConstructorProperties {
    }

}

export interface MapSourceRegistry extends Gio.ListModel {

    // Owm methods of Shumate-1.0.Shumate.MapSourceRegistry

    /**
     * Adds the #ShumateMapSource to the #ShumateMapSourceRegistry
     * @param map_source a #ShumateMapSource
     */
    add(map_source: MapSource): void
    /**
     * Find the #ShumateMapSource with the corresponding id
     * @param id the id of the #ShumateMapSource
     * @returns the #ShumateMapSource or %NULL if no map source has been found
     */
    get_by_id(id: string | null): MapSource | null
    /**
     * Populates the #ShumateMapSourceRegistry with a default set of sources.
     */
    populate_defaults(): void
    /**
     * Removes the corresponding #ShumateMapSource from the registry.
     * If the source doesn't exist in the registry, this function does nothing.
     * @param id a #ShumateMapSource id
     */
    remove(id: string | null): void

    // Class property signals of Shumate-1.0.Shumate.MapSourceRegistry

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * This object allows you to hold [class`MapSource]` instances, you can access a
 * default set of sources with [method`MapSourceRegistry`.populate_defaults].
 * 
 * It conveniently implements [iface`Gio`.ListModel] to easily integrate with it.
 * @class 
 */
export class MapSourceRegistry extends GObject.Object {

    // Own properties of Shumate-1.0.Shumate.MapSourceRegistry

    static name: string
    static $gtype: GObject.GType<MapSourceRegistry>

    // Constructors of Shumate-1.0.Shumate.MapSourceRegistry

    constructor(config?: MapSourceRegistry.ConstructorProperties) 
    /**
     * Create a new #ShumateMapSourceRegistry.
     * @constructor 
     * @returns a newly created #ShumateMapSourceRegistry
     */
    constructor() 
    /**
     * Create a new #ShumateMapSourceRegistry.
     * @constructor 
     * @returns a newly created #ShumateMapSourceRegistry
     */
    static new(): MapSourceRegistry
    /**
     * Create a new #ShumateMapSourceRegistry with defaults map sources.
     * This is identical to calling [method`MapSourceRegistry`.populate_defaults]
     * after shumate_map_source_registry_new().
     * @constructor 
     * @returns a newly created #ShumateMapSourceRegistry
     */
    static new_with_defaults(): MapSourceRegistry
    _init(config?: MapSourceRegistry.ConstructorProperties): void
}

export module Marker {

    // Constructor properties interface

    export interface ConstructorProperties extends Gtk.Accessible.ConstructorProperties, Gtk.Buildable.ConstructorProperties, Gtk.ConstraintTarget.ConstructorProperties, Location.ConstructorProperties, Gtk.Widget.ConstructorProperties {

        // Own constructor properties of Shumate-1.0.Shumate.Marker

        /**
         * The child widget of the marker
         */
        child?: Gtk.Widget | null
        /**
         * The selectable state of the marker
         */
        selectable?: boolean | null
    }

}

export interface Marker extends Gtk.Accessible, Gtk.Buildable, Gtk.ConstraintTarget, Location {

    // Own properties of Shumate-1.0.Shumate.Marker

    /**
     * The child widget of the marker
     */
    child: Gtk.Widget
    /**
     * The selectable state of the marker
     */
    selectable: boolean

    // Own fields of Shumate-1.0.Shumate.Marker

    parent_instance: Gtk.Widget & GObject.InitiallyUnowned

    // Owm methods of Shumate-1.0.Shumate.Marker

    animate_in(): void
    animate_in_with_delay(delay: number): void
    animate_out(): void
    animate_out_with_delay(delay: number): void
    /**
     * Retrieves the current child of `marker`.
     * @returns a #GtkWidget.
     */
    get_child(): Gtk.Widget | null
    get_draggable(): boolean
    /**
     * Checks whether the marker is selectable.
     * @returns the selectable or not state of the marker.
     */
    get_selectable(): boolean
    /**
     * Checks whether the marker is selected.
     * @returns %TRUE if the marker is selected, otherwise %FALSE
     */
    is_selected(): boolean
    /**
     * Sets the child widget of `marker`.
     * @param child a #GtkWidget
     */
    set_child(child: Gtk.Widget | null): void
    set_draggable(value: boolean): void
    /**
     * Sets the marker as selectable or not.
     * @param value the selectable state
     */
    set_selectable(value: boolean): void

    // Class property signals of Shumate-1.0.Shumate.Marker

    connect(sigName: "notify::child", callback: (($obj: Marker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::child", callback: (($obj: Marker, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::child", ...args: any[]): void
    connect(sigName: "notify::selectable", callback: (($obj: Marker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::selectable", callback: (($obj: Marker, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::selectable", ...args: any[]): void
    connect(sigName: "notify::can-focus", callback: (($obj: Marker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-focus", callback: (($obj: Marker, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-focus", ...args: any[]): void
    connect(sigName: "notify::can-target", callback: (($obj: Marker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-target", callback: (($obj: Marker, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-target", ...args: any[]): void
    connect(sigName: "notify::css-classes", callback: (($obj: Marker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::css-classes", callback: (($obj: Marker, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::css-classes", ...args: any[]): void
    connect(sigName: "notify::css-name", callback: (($obj: Marker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::css-name", callback: (($obj: Marker, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::css-name", ...args: any[]): void
    connect(sigName: "notify::cursor", callback: (($obj: Marker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::cursor", callback: (($obj: Marker, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::cursor", ...args: any[]): void
    connect(sigName: "notify::focus-on-click", callback: (($obj: Marker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::focus-on-click", callback: (($obj: Marker, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::focus-on-click", ...args: any[]): void
    connect(sigName: "notify::focusable", callback: (($obj: Marker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::focusable", callback: (($obj: Marker, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::focusable", ...args: any[]): void
    connect(sigName: "notify::halign", callback: (($obj: Marker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::halign", callback: (($obj: Marker, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::halign", ...args: any[]): void
    connect(sigName: "notify::has-default", callback: (($obj: Marker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-default", callback: (($obj: Marker, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-default", ...args: any[]): void
    connect(sigName: "notify::has-focus", callback: (($obj: Marker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-focus", callback: (($obj: Marker, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-focus", ...args: any[]): void
    connect(sigName: "notify::has-tooltip", callback: (($obj: Marker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-tooltip", callback: (($obj: Marker, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-tooltip", ...args: any[]): void
    connect(sigName: "notify::height-request", callback: (($obj: Marker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height-request", callback: (($obj: Marker, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::height-request", ...args: any[]): void
    connect(sigName: "notify::hexpand", callback: (($obj: Marker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand", callback: (($obj: Marker, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hexpand", ...args: any[]): void
    connect(sigName: "notify::hexpand-set", callback: (($obj: Marker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand-set", callback: (($obj: Marker, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hexpand-set", ...args: any[]): void
    connect(sigName: "notify::layout-manager", callback: (($obj: Marker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::layout-manager", callback: (($obj: Marker, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::layout-manager", ...args: any[]): void
    connect(sigName: "notify::margin-bottom", callback: (($obj: Marker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-bottom", callback: (($obj: Marker, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-bottom", ...args: any[]): void
    connect(sigName: "notify::margin-end", callback: (($obj: Marker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-end", callback: (($obj: Marker, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-end", ...args: any[]): void
    connect(sigName: "notify::margin-start", callback: (($obj: Marker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-start", callback: (($obj: Marker, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-start", ...args: any[]): void
    connect(sigName: "notify::margin-top", callback: (($obj: Marker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-top", callback: (($obj: Marker, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-top", ...args: any[]): void
    connect(sigName: "notify::name", callback: (($obj: Marker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: Marker, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::opacity", callback: (($obj: Marker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opacity", callback: (($obj: Marker, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::opacity", ...args: any[]): void
    connect(sigName: "notify::overflow", callback: (($obj: Marker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::overflow", callback: (($obj: Marker, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::overflow", ...args: any[]): void
    connect(sigName: "notify::parent", callback: (($obj: Marker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: Marker, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::parent", ...args: any[]): void
    connect(sigName: "notify::receives-default", callback: (($obj: Marker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::receives-default", callback: (($obj: Marker, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::receives-default", ...args: any[]): void
    connect(sigName: "notify::root", callback: (($obj: Marker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::root", callback: (($obj: Marker, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::root", ...args: any[]): void
    connect(sigName: "notify::scale-factor", callback: (($obj: Marker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-factor", callback: (($obj: Marker, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::scale-factor", ...args: any[]): void
    connect(sigName: "notify::sensitive", callback: (($obj: Marker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sensitive", callback: (($obj: Marker, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::sensitive", ...args: any[]): void
    connect(sigName: "notify::tooltip-markup", callback: (($obj: Marker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-markup", callback: (($obj: Marker, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tooltip-markup", ...args: any[]): void
    connect(sigName: "notify::tooltip-text", callback: (($obj: Marker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-text", callback: (($obj: Marker, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tooltip-text", ...args: any[]): void
    connect(sigName: "notify::valign", callback: (($obj: Marker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::valign", callback: (($obj: Marker, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::valign", ...args: any[]): void
    connect(sigName: "notify::vexpand", callback: (($obj: Marker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand", callback: (($obj: Marker, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vexpand", ...args: any[]): void
    connect(sigName: "notify::vexpand-set", callback: (($obj: Marker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand-set", callback: (($obj: Marker, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vexpand-set", ...args: any[]): void
    connect(sigName: "notify::visible", callback: (($obj: Marker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visible", callback: (($obj: Marker, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::visible", ...args: any[]): void
    connect(sigName: "notify::width-request", callback: (($obj: Marker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::width-request", callback: (($obj: Marker, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::width-request", ...args: any[]): void
    connect(sigName: "notify::accessible-role", callback: (($obj: Marker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-role", callback: (($obj: Marker, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::accessible-role", ...args: any[]): void
    connect(sigName: "notify::latitude", callback: (($obj: Marker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::latitude", callback: (($obj: Marker, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::latitude", ...args: any[]): void
    connect(sigName: "notify::longitude", callback: (($obj: Marker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::longitude", callback: (($obj: Marker, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::longitude", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * Markers represent points of interest on a map. Markers need to be
 * placed on a layer (a [class`MarkerLayer]`). Layers have to be added to a
 * [class`Map]` for the markers to show on the map.
 * 
 * A marker is nothing more than a regular [class`Gtk`.Widget]. You can draw on
 * it what ever you want. Set the marker's position on the map using
 * [method`Location`.set_location].
 * 
 * This is a base class of all markers. A typical usage of a marker is for
 * instance to add a [class`Gtk`.Image] with a pin image and add the
 * [class`Gtk`.GestureClick] controller to listen to click events and show
 * a [class`Gtk`.Popover] with the description of the marker.
 * @class 
 */
export class Marker extends Gtk.Widget {

    // Own properties of Shumate-1.0.Shumate.Marker

    static name: string
    static $gtype: GObject.GType<Marker>

    // Constructors of Shumate-1.0.Shumate.Marker

    constructor(config?: Marker.ConstructorProperties) 
    /**
     * Creates an instance of #ShumateMarker.
     * @constructor 
     * @returns a new #ShumateMarker.
     */
    constructor() 
    /**
     * Creates an instance of #ShumateMarker.
     * @constructor 
     * @returns a new #ShumateMarker.
     */
    static new(): Marker
    _init(config?: Marker.ConstructorProperties): void
}

export module MarkerLayer {

    // Signal callback interfaces

    /**
     * Signal callback interface for `marker-selected`
     */
    export interface MarkerSelectedSignalCallback {
        ($obj: MarkerLayer, marker: Marker): void
    }

    /**
     * Signal callback interface for `marker-unselected`
     */
    export interface MarkerUnselectedSignalCallback {
        ($obj: MarkerLayer, marker: Marker): void
    }


    // Constructor properties interface

    export interface ConstructorProperties extends Gtk.Accessible.ConstructorProperties, Gtk.Buildable.ConstructorProperties, Gtk.ConstraintTarget.ConstructorProperties, Layer.ConstructorProperties {

        // Own constructor properties of Shumate-1.0.Shumate.MarkerLayer

        /**
         * Determines the type of selection that will be performed.
         */
        selection_mode?: Gtk.SelectionMode | null
    }

}

export interface MarkerLayer extends Gtk.Accessible, Gtk.Buildable, Gtk.ConstraintTarget {

    // Own properties of Shumate-1.0.Shumate.MarkerLayer

    /**
     * Determines the type of selection that will be performed.
     */
    selection_mode: Gtk.SelectionMode

    // Conflicting properties

    parent_instance: Gtk.Widget & GObject.InitiallyUnowned & GObject.InitiallyUnowned

    // Owm methods of Shumate-1.0.Shumate.MarkerLayer

    /**
     * Adds the marker to the layer.
     * @param marker a [class`Marker]`
     */
    add_marker(marker: Marker): void
    /**
     * Gets a copy of the list of all markers inserted into the layer. You should
     * free the list but not its contents.
     * @returns the list
     */
    get_markers(): Marker[]
    /**
     * Gets a list of selected markers in the layer.
     * @returns the list
     */
    get_selected(): Marker[]
    /**
     * Gets the selection mode of the layer.
     * @returns the selection mode of the layer.
     */
    get_selection_mode(): Gtk.SelectionMode
    /**
     * Removes all markers from the layer.
     */
    remove_all(): void
    /**
     * Removes the marker from the layer.
     * @param marker a [class`Marker]`
     */
    remove_marker(marker: Marker): void
    /**
     * Selects all selectable markers in the layer.
     */
    select_all_markers(): void
    /**
     * Selects a marker in this layer.
     * 
     * If [class`MarkerLayer]`:selection-mode is %GTK_SELECTION_SINGLE or
     * %GTK_SELECTION_BROWSE, all other markers will be unselected. If the mode is
     * %GTK_SELECTION_NONE or `marker` is not selectable, nothing will happen.
     * @param marker a [class`Marker]` that is a child of `self`
     * @returns %TRUE if the marker is now selected, otherwise %FALSE
     */
    select_marker(marker: Marker): boolean
    /**
     * Sets the selection mode of the layer.
     * 
     * NOTE: changing selection mode to %GTK_SELECTION_NONE, %GTK_SELECTION_SINGLE
     * or %GTK_SELECTION_BROWSE will clear all previously selected markers.
     * @param mode a [enum`Gtk`.SelectionMode] value
     */
    set_selection_mode(mode: Gtk.SelectionMode): void
    /**
     * Unselects all markers in the layer.
     */
    unselect_all_markers(): void
    /**
     * Unselects a marker in this layer.
     * 
     * This works even if [class`MarkerLayer]`:selection-mode is
     * %GTK_SELECTION_BROWSE. Browse mode only prevents user interaction, not the
     * program, from unselecting a marker.
     * @param marker a [class`Marker]` that is a child of `self`
     */
    unselect_marker(marker: Marker): void

    // Own signals of Shumate-1.0.Shumate.MarkerLayer

    connect(sigName: "marker-selected", callback: MarkerLayer.MarkerSelectedSignalCallback): number
    connect_after(sigName: "marker-selected", callback: MarkerLayer.MarkerSelectedSignalCallback): number
    emit(sigName: "marker-selected", marker: Marker, ...args: any[]): void
    connect(sigName: "marker-unselected", callback: MarkerLayer.MarkerUnselectedSignalCallback): number
    connect_after(sigName: "marker-unselected", callback: MarkerLayer.MarkerUnselectedSignalCallback): number
    emit(sigName: "marker-unselected", marker: Marker, ...args: any[]): void

    // Class property signals of Shumate-1.0.Shumate.MarkerLayer

    connect(sigName: "notify::selection-mode", callback: (($obj: MarkerLayer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::selection-mode", callback: (($obj: MarkerLayer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::selection-mode", ...args: any[]): void
    connect(sigName: "notify::viewport", callback: (($obj: MarkerLayer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::viewport", callback: (($obj: MarkerLayer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::viewport", ...args: any[]): void
    connect(sigName: "notify::can-focus", callback: (($obj: MarkerLayer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-focus", callback: (($obj: MarkerLayer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-focus", ...args: any[]): void
    connect(sigName: "notify::can-target", callback: (($obj: MarkerLayer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-target", callback: (($obj: MarkerLayer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-target", ...args: any[]): void
    connect(sigName: "notify::css-classes", callback: (($obj: MarkerLayer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::css-classes", callback: (($obj: MarkerLayer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::css-classes", ...args: any[]): void
    connect(sigName: "notify::css-name", callback: (($obj: MarkerLayer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::css-name", callback: (($obj: MarkerLayer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::css-name", ...args: any[]): void
    connect(sigName: "notify::cursor", callback: (($obj: MarkerLayer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::cursor", callback: (($obj: MarkerLayer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::cursor", ...args: any[]): void
    connect(sigName: "notify::focus-on-click", callback: (($obj: MarkerLayer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::focus-on-click", callback: (($obj: MarkerLayer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::focus-on-click", ...args: any[]): void
    connect(sigName: "notify::focusable", callback: (($obj: MarkerLayer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::focusable", callback: (($obj: MarkerLayer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::focusable", ...args: any[]): void
    connect(sigName: "notify::halign", callback: (($obj: MarkerLayer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::halign", callback: (($obj: MarkerLayer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::halign", ...args: any[]): void
    connect(sigName: "notify::has-default", callback: (($obj: MarkerLayer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-default", callback: (($obj: MarkerLayer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-default", ...args: any[]): void
    connect(sigName: "notify::has-focus", callback: (($obj: MarkerLayer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-focus", callback: (($obj: MarkerLayer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-focus", ...args: any[]): void
    connect(sigName: "notify::has-tooltip", callback: (($obj: MarkerLayer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-tooltip", callback: (($obj: MarkerLayer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-tooltip", ...args: any[]): void
    connect(sigName: "notify::height-request", callback: (($obj: MarkerLayer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height-request", callback: (($obj: MarkerLayer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::height-request", ...args: any[]): void
    connect(sigName: "notify::hexpand", callback: (($obj: MarkerLayer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand", callback: (($obj: MarkerLayer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hexpand", ...args: any[]): void
    connect(sigName: "notify::hexpand-set", callback: (($obj: MarkerLayer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand-set", callback: (($obj: MarkerLayer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hexpand-set", ...args: any[]): void
    connect(sigName: "notify::layout-manager", callback: (($obj: MarkerLayer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::layout-manager", callback: (($obj: MarkerLayer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::layout-manager", ...args: any[]): void
    connect(sigName: "notify::margin-bottom", callback: (($obj: MarkerLayer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-bottom", callback: (($obj: MarkerLayer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-bottom", ...args: any[]): void
    connect(sigName: "notify::margin-end", callback: (($obj: MarkerLayer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-end", callback: (($obj: MarkerLayer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-end", ...args: any[]): void
    connect(sigName: "notify::margin-start", callback: (($obj: MarkerLayer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-start", callback: (($obj: MarkerLayer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-start", ...args: any[]): void
    connect(sigName: "notify::margin-top", callback: (($obj: MarkerLayer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-top", callback: (($obj: MarkerLayer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-top", ...args: any[]): void
    connect(sigName: "notify::name", callback: (($obj: MarkerLayer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: MarkerLayer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::opacity", callback: (($obj: MarkerLayer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opacity", callback: (($obj: MarkerLayer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::opacity", ...args: any[]): void
    connect(sigName: "notify::overflow", callback: (($obj: MarkerLayer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::overflow", callback: (($obj: MarkerLayer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::overflow", ...args: any[]): void
    connect(sigName: "notify::parent", callback: (($obj: MarkerLayer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: MarkerLayer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::parent", ...args: any[]): void
    connect(sigName: "notify::receives-default", callback: (($obj: MarkerLayer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::receives-default", callback: (($obj: MarkerLayer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::receives-default", ...args: any[]): void
    connect(sigName: "notify::root", callback: (($obj: MarkerLayer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::root", callback: (($obj: MarkerLayer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::root", ...args: any[]): void
    connect(sigName: "notify::scale-factor", callback: (($obj: MarkerLayer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-factor", callback: (($obj: MarkerLayer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::scale-factor", ...args: any[]): void
    connect(sigName: "notify::sensitive", callback: (($obj: MarkerLayer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sensitive", callback: (($obj: MarkerLayer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::sensitive", ...args: any[]): void
    connect(sigName: "notify::tooltip-markup", callback: (($obj: MarkerLayer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-markup", callback: (($obj: MarkerLayer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tooltip-markup", ...args: any[]): void
    connect(sigName: "notify::tooltip-text", callback: (($obj: MarkerLayer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-text", callback: (($obj: MarkerLayer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tooltip-text", ...args: any[]): void
    connect(sigName: "notify::valign", callback: (($obj: MarkerLayer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::valign", callback: (($obj: MarkerLayer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::valign", ...args: any[]): void
    connect(sigName: "notify::vexpand", callback: (($obj: MarkerLayer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand", callback: (($obj: MarkerLayer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vexpand", ...args: any[]): void
    connect(sigName: "notify::vexpand-set", callback: (($obj: MarkerLayer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand-set", callback: (($obj: MarkerLayer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vexpand-set", ...args: any[]): void
    connect(sigName: "notify::visible", callback: (($obj: MarkerLayer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visible", callback: (($obj: MarkerLayer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::visible", ...args: any[]): void
    connect(sigName: "notify::width-request", callback: (($obj: MarkerLayer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::width-request", callback: (($obj: MarkerLayer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::width-request", ...args: any[]): void
    connect(sigName: "notify::accessible-role", callback: (($obj: MarkerLayer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-role", callback: (($obj: MarkerLayer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::accessible-role", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * Displays markers on the map. It is responsible for positioning markers
 * correctly, marker selections and group marker operations.
 * @class 
 */
export class MarkerLayer extends Layer {

    // Own properties of Shumate-1.0.Shumate.MarkerLayer

    static name: string
    static $gtype: GObject.GType<MarkerLayer>

    // Constructors of Shumate-1.0.Shumate.MarkerLayer

    constructor(config?: MarkerLayer.ConstructorProperties) 
    /**
     * Creates a new instance of [class`MarkerLayer]`.
     * @constructor 
     * @param viewport the `ShumateViewport`
     * @returns a new [class@MarkerLayer] ready to be used as a container for the markers.
     */
    constructor(viewport: Viewport) 
    /**
     * Creates a new instance of [class`MarkerLayer]`.
     * @constructor 
     * @param viewport the `ShumateViewport`
     * @returns a new [class@MarkerLayer] ready to be used as a container for the markers.
     */
    static new(viewport: Viewport): MarkerLayer
    /**
     * Creates a new instance of [class`MarkerLayer]` with the specified selection mode.
     * @constructor 
     * @param viewport the `ShumateViewport`
     * @param mode Selection mode
     * @returns a new [class@MarkerLayer] ready to be used as a container for the markers.
     */
    static new_full(viewport: Viewport, mode: Gtk.SelectionMode): MarkerLayer
    _init(config?: MarkerLayer.ConstructorProperties): void
}

export module PathLayer {

    // Constructor properties interface

    export interface ConstructorProperties extends Gtk.Accessible.ConstructorProperties, Gtk.Buildable.ConstructorProperties, Gtk.ConstraintTarget.ConstructorProperties, Layer.ConstructorProperties {

        // Own constructor properties of Shumate-1.0.Shumate.PathLayer

        /**
         * The shape is a closed path
         */
        closed?: boolean | null
        /**
         * The shape should be filled
         */
        fill?: boolean | null
        /**
         * The path's fill color
         */
        fill_color?: Gdk.RGBA | null
        /**
         * The path's outline color
         */
        outline_color?: Gdk.RGBA | null
        /**
         * The path's outline width (in pixels)
         */
        outline_width?: number | null
        /**
         * The shape should be stroked
         */
        stroke?: boolean | null
        /**
         * The path's stroke color
         */
        stroke_color?: Gdk.RGBA | null
        /**
         * The path's stroke width (in pixels)
         */
        stroke_width?: number | null
    }

}

export interface PathLayer extends Gtk.Accessible, Gtk.Buildable, Gtk.ConstraintTarget {

    // Own properties of Shumate-1.0.Shumate.PathLayer

    /**
     * The shape is a closed path
     */
    closed: boolean
    /**
     * The shape should be filled
     */
    fill: boolean
    /**
     * The path's fill color
     */
    fill_color: Gdk.RGBA
    /**
     * The path's outline color
     */
    outline_color: Gdk.RGBA
    /**
     * The path's outline width (in pixels)
     */
    outline_width: number
    /**
     * The shape should be stroked
     */
    stroke: boolean
    /**
     * The path's stroke color
     */
    stroke_color: Gdk.RGBA
    /**
     * The path's stroke width (in pixels)
     */
    stroke_width: number

    // Conflicting properties

    parent_instance: Gtk.Widget & GObject.InitiallyUnowned & GObject.InitiallyUnowned

    // Owm methods of Shumate-1.0.Shumate.PathLayer

    /**
     * Adds a [iface`Location]` object to the layer.
     * The node is prepended to the list.
     * @param location a [iface`Location]`
     */
    add_node(location: Location): void
    /**
     * Gets information whether the path is closed.
     * @returns %TRUE when the path is closed, %FALSE otherwise
     */
    get_closed(): boolean
    /**
     * Returns the list of dash segment lengths.
     * @returns the list
     */
    get_dash(): number[]
    /**
     * Checks whether the path is filled.
     * @returns %TRUE if the path is filled, %FALSE otherwise.
     */
    get_fill(): boolean
    /**
     * Gets the path's fill color.
     * @returns the path's fill color.
     */
    get_fill_color(): Gdk.RGBA
    /**
     * Gets a copy of the list of all [iface`Location]` objects inserted into the layer. You should
     * free the list but not its contents.
     * @returns the list
     */
    get_nodes(): Location[]
    /**
     * Gets the path's outline color.
     * @returns the path's outline color.
     */
    get_outline_color(): Gdk.RGBA
    /**
     * Gets the width of the outline.
     * @returns the width of the outline
     */
    get_outline_width(): number
    /**
     * Checks whether the path is stroked.
     * @returns %TRUE if the path is stroked, %FALSE otherwise.
     */
    get_stroke(): boolean
    /**
     * Gets the path's stroke color.
     * @returns the path's stroke color.
     */
    get_stroke_color(): Gdk.RGBA
    /**
     * Gets the width of the stroke.
     * @returns the width of the stroke
     */
    get_stroke_width(): number
    /**
     * Inserts a [iface`Location]` object to the specified position.
     * @param location a [iface`Location]`
     * @param position position in the list where the [iface`Location]` object should be inserted
     */
    insert_node(location: Location, position: number): void
    /**
     * Removes all [iface`Location]` objects from the layer.
     */
    remove_all(): void
    /**
     * Removes the [iface`Location]` object from the layer.
     * @param location a [iface`Location]`
     */
    remove_node(location: Location): void
    /**
     * Makes the path closed.
     * @param value %TRUE to make the path closed
     */
    set_closed(value: boolean): void
    /**
     * Sets dashed line pattern in a way similar to cairo_set_dash() of cairo. This
     * method supports only integer values for segment lengths. The values have to be
     * passed inside the data pointer of the list (using the %GUINT_TO_POINTER conversion)
     * 
     * Pass %NULL to use solid line.
     * @param dash_pattern list of integer values representing lengths     of dashes/spaces (see cairo documentation of cairo_set_dash())
     */
    set_dash(dash_pattern: number[]): void
    /**
     * Sets the path to be filled
     * @param value if the path is filled
     */
    set_fill(value: boolean): void
    /**
     * Set the path's fill color.
     * @param color The path's fill color or %NULL to reset to the         default color. The color parameter is copied.
     */
    set_fill_color(color: Gdk.RGBA | null): void
    /**
     * Set the path's outline color.
     * @param color The path's outline color or %NULL to reset to the         default color. The color parameter is copied.
     */
    set_outline_color(color: Gdk.RGBA | null): void
    /**
     * Sets the width of the outline
     * @param value the width of the outline (in pixels)
     */
    set_outline_width(value: number): void
    /**
     * Sets the path to be stroked
     * @param value if the path is stroked
     */
    set_stroke(value: boolean): void
    /**
     * Set the path's stroke color.
     * @param color The path's stroke color or %NULL to reset to the         default color. The color parameter is copied.
     */
    set_stroke_color(color: Gdk.RGBA | null): void
    /**
     * Sets the width of the stroke
     * @param value the width of the stroke (in pixels)
     */
    set_stroke_width(value: number): void

    // Class property signals of Shumate-1.0.Shumate.PathLayer

    connect(sigName: "notify::closed", callback: (($obj: PathLayer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::closed", callback: (($obj: PathLayer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::closed", ...args: any[]): void
    connect(sigName: "notify::fill", callback: (($obj: PathLayer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fill", callback: (($obj: PathLayer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::fill", ...args: any[]): void
    connect(sigName: "notify::fill-color", callback: (($obj: PathLayer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fill-color", callback: (($obj: PathLayer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::fill-color", ...args: any[]): void
    connect(sigName: "notify::outline-color", callback: (($obj: PathLayer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::outline-color", callback: (($obj: PathLayer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::outline-color", ...args: any[]): void
    connect(sigName: "notify::outline-width", callback: (($obj: PathLayer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::outline-width", callback: (($obj: PathLayer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::outline-width", ...args: any[]): void
    connect(sigName: "notify::stroke", callback: (($obj: PathLayer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::stroke", callback: (($obj: PathLayer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::stroke", ...args: any[]): void
    connect(sigName: "notify::stroke-color", callback: (($obj: PathLayer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::stroke-color", callback: (($obj: PathLayer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::stroke-color", ...args: any[]): void
    connect(sigName: "notify::stroke-width", callback: (($obj: PathLayer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::stroke-width", callback: (($obj: PathLayer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::stroke-width", ...args: any[]): void
    connect(sigName: "notify::viewport", callback: (($obj: PathLayer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::viewport", callback: (($obj: PathLayer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::viewport", ...args: any[]): void
    connect(sigName: "notify::can-focus", callback: (($obj: PathLayer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-focus", callback: (($obj: PathLayer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-focus", ...args: any[]): void
    connect(sigName: "notify::can-target", callback: (($obj: PathLayer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-target", callback: (($obj: PathLayer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-target", ...args: any[]): void
    connect(sigName: "notify::css-classes", callback: (($obj: PathLayer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::css-classes", callback: (($obj: PathLayer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::css-classes", ...args: any[]): void
    connect(sigName: "notify::css-name", callback: (($obj: PathLayer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::css-name", callback: (($obj: PathLayer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::css-name", ...args: any[]): void
    connect(sigName: "notify::cursor", callback: (($obj: PathLayer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::cursor", callback: (($obj: PathLayer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::cursor", ...args: any[]): void
    connect(sigName: "notify::focus-on-click", callback: (($obj: PathLayer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::focus-on-click", callback: (($obj: PathLayer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::focus-on-click", ...args: any[]): void
    connect(sigName: "notify::focusable", callback: (($obj: PathLayer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::focusable", callback: (($obj: PathLayer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::focusable", ...args: any[]): void
    connect(sigName: "notify::halign", callback: (($obj: PathLayer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::halign", callback: (($obj: PathLayer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::halign", ...args: any[]): void
    connect(sigName: "notify::has-default", callback: (($obj: PathLayer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-default", callback: (($obj: PathLayer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-default", ...args: any[]): void
    connect(sigName: "notify::has-focus", callback: (($obj: PathLayer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-focus", callback: (($obj: PathLayer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-focus", ...args: any[]): void
    connect(sigName: "notify::has-tooltip", callback: (($obj: PathLayer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-tooltip", callback: (($obj: PathLayer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-tooltip", ...args: any[]): void
    connect(sigName: "notify::height-request", callback: (($obj: PathLayer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height-request", callback: (($obj: PathLayer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::height-request", ...args: any[]): void
    connect(sigName: "notify::hexpand", callback: (($obj: PathLayer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand", callback: (($obj: PathLayer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hexpand", ...args: any[]): void
    connect(sigName: "notify::hexpand-set", callback: (($obj: PathLayer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand-set", callback: (($obj: PathLayer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hexpand-set", ...args: any[]): void
    connect(sigName: "notify::layout-manager", callback: (($obj: PathLayer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::layout-manager", callback: (($obj: PathLayer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::layout-manager", ...args: any[]): void
    connect(sigName: "notify::margin-bottom", callback: (($obj: PathLayer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-bottom", callback: (($obj: PathLayer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-bottom", ...args: any[]): void
    connect(sigName: "notify::margin-end", callback: (($obj: PathLayer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-end", callback: (($obj: PathLayer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-end", ...args: any[]): void
    connect(sigName: "notify::margin-start", callback: (($obj: PathLayer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-start", callback: (($obj: PathLayer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-start", ...args: any[]): void
    connect(sigName: "notify::margin-top", callback: (($obj: PathLayer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-top", callback: (($obj: PathLayer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-top", ...args: any[]): void
    connect(sigName: "notify::name", callback: (($obj: PathLayer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: PathLayer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::opacity", callback: (($obj: PathLayer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opacity", callback: (($obj: PathLayer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::opacity", ...args: any[]): void
    connect(sigName: "notify::overflow", callback: (($obj: PathLayer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::overflow", callback: (($obj: PathLayer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::overflow", ...args: any[]): void
    connect(sigName: "notify::parent", callback: (($obj: PathLayer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: PathLayer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::parent", ...args: any[]): void
    connect(sigName: "notify::receives-default", callback: (($obj: PathLayer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::receives-default", callback: (($obj: PathLayer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::receives-default", ...args: any[]): void
    connect(sigName: "notify::root", callback: (($obj: PathLayer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::root", callback: (($obj: PathLayer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::root", ...args: any[]): void
    connect(sigName: "notify::scale-factor", callback: (($obj: PathLayer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-factor", callback: (($obj: PathLayer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::scale-factor", ...args: any[]): void
    connect(sigName: "notify::sensitive", callback: (($obj: PathLayer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sensitive", callback: (($obj: PathLayer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::sensitive", ...args: any[]): void
    connect(sigName: "notify::tooltip-markup", callback: (($obj: PathLayer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-markup", callback: (($obj: PathLayer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tooltip-markup", ...args: any[]): void
    connect(sigName: "notify::tooltip-text", callback: (($obj: PathLayer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-text", callback: (($obj: PathLayer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tooltip-text", ...args: any[]): void
    connect(sigName: "notify::valign", callback: (($obj: PathLayer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::valign", callback: (($obj: PathLayer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::valign", ...args: any[]): void
    connect(sigName: "notify::vexpand", callback: (($obj: PathLayer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand", callback: (($obj: PathLayer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vexpand", ...args: any[]): void
    connect(sigName: "notify::vexpand-set", callback: (($obj: PathLayer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand-set", callback: (($obj: PathLayer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vexpand-set", ...args: any[]): void
    connect(sigName: "notify::visible", callback: (($obj: PathLayer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visible", callback: (($obj: PathLayer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::visible", ...args: any[]): void
    connect(sigName: "notify::width-request", callback: (($obj: PathLayer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::width-request", callback: (($obj: PathLayer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::width-request", ...args: any[]): void
    connect(sigName: "notify::accessible-role", callback: (($obj: PathLayer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-role", callback: (($obj: PathLayer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::accessible-role", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * A layer displaying line path between inserted [iface`Location]` objects
 * 
 * This layer shows a connection between inserted objects implementing the
 * [iface`Location]` interface. This means that both [class`Marker]`
 * objects and [class`Coordinate]` objects can be inserted into the layer.
 * Of course, custom objects implementing the [iface`Location]` interface
 * can be used as well.
 * @class 
 */
export class PathLayer extends Layer {

    // Own properties of Shumate-1.0.Shumate.PathLayer

    static name: string
    static $gtype: GObject.GType<PathLayer>

    // Constructors of Shumate-1.0.Shumate.PathLayer

    constructor(config?: PathLayer.ConstructorProperties) 
    /**
     * Creates a new instance of [class`PathLayer]`.
     * @constructor 
     * @param viewport the [class`Viewport]`
     * @returns a new instance of [class@PathLayer].
     */
    constructor(viewport: Viewport) 
    /**
     * Creates a new instance of [class`PathLayer]`.
     * @constructor 
     * @param viewport the [class`Viewport]`
     * @returns a new instance of [class@PathLayer].
     */
    static new(viewport: Viewport): PathLayer
    _init(config?: PathLayer.ConstructorProperties): void
}

export module Point {

    // Constructor properties interface

    export interface ConstructorProperties extends Gtk.Accessible.ConstructorProperties, Gtk.Buildable.ConstructorProperties, Gtk.ConstraintTarget.ConstructorProperties, Location.ConstructorProperties, Marker.ConstructorProperties {
    }

}

export interface Point extends Gtk.Accessible, Gtk.Buildable, Gtk.ConstraintTarget, Location {

    // Conflicting properties

    parent_instance: Gtk.Widget & GObject.InitiallyUnowned & GObject.InitiallyUnowned

    // Class property signals of Shumate-1.0.Shumate.Point

    connect(sigName: "notify::child", callback: (($obj: Point, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::child", callback: (($obj: Point, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::child", ...args: any[]): void
    connect(sigName: "notify::selectable", callback: (($obj: Point, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::selectable", callback: (($obj: Point, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::selectable", ...args: any[]): void
    connect(sigName: "notify::can-focus", callback: (($obj: Point, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-focus", callback: (($obj: Point, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-focus", ...args: any[]): void
    connect(sigName: "notify::can-target", callback: (($obj: Point, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-target", callback: (($obj: Point, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-target", ...args: any[]): void
    connect(sigName: "notify::css-classes", callback: (($obj: Point, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::css-classes", callback: (($obj: Point, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::css-classes", ...args: any[]): void
    connect(sigName: "notify::css-name", callback: (($obj: Point, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::css-name", callback: (($obj: Point, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::css-name", ...args: any[]): void
    connect(sigName: "notify::cursor", callback: (($obj: Point, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::cursor", callback: (($obj: Point, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::cursor", ...args: any[]): void
    connect(sigName: "notify::focus-on-click", callback: (($obj: Point, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::focus-on-click", callback: (($obj: Point, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::focus-on-click", ...args: any[]): void
    connect(sigName: "notify::focusable", callback: (($obj: Point, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::focusable", callback: (($obj: Point, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::focusable", ...args: any[]): void
    connect(sigName: "notify::halign", callback: (($obj: Point, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::halign", callback: (($obj: Point, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::halign", ...args: any[]): void
    connect(sigName: "notify::has-default", callback: (($obj: Point, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-default", callback: (($obj: Point, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-default", ...args: any[]): void
    connect(sigName: "notify::has-focus", callback: (($obj: Point, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-focus", callback: (($obj: Point, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-focus", ...args: any[]): void
    connect(sigName: "notify::has-tooltip", callback: (($obj: Point, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-tooltip", callback: (($obj: Point, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-tooltip", ...args: any[]): void
    connect(sigName: "notify::height-request", callback: (($obj: Point, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height-request", callback: (($obj: Point, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::height-request", ...args: any[]): void
    connect(sigName: "notify::hexpand", callback: (($obj: Point, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand", callback: (($obj: Point, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hexpand", ...args: any[]): void
    connect(sigName: "notify::hexpand-set", callback: (($obj: Point, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand-set", callback: (($obj: Point, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hexpand-set", ...args: any[]): void
    connect(sigName: "notify::layout-manager", callback: (($obj: Point, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::layout-manager", callback: (($obj: Point, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::layout-manager", ...args: any[]): void
    connect(sigName: "notify::margin-bottom", callback: (($obj: Point, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-bottom", callback: (($obj: Point, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-bottom", ...args: any[]): void
    connect(sigName: "notify::margin-end", callback: (($obj: Point, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-end", callback: (($obj: Point, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-end", ...args: any[]): void
    connect(sigName: "notify::margin-start", callback: (($obj: Point, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-start", callback: (($obj: Point, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-start", ...args: any[]): void
    connect(sigName: "notify::margin-top", callback: (($obj: Point, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-top", callback: (($obj: Point, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-top", ...args: any[]): void
    connect(sigName: "notify::name", callback: (($obj: Point, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: Point, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::opacity", callback: (($obj: Point, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opacity", callback: (($obj: Point, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::opacity", ...args: any[]): void
    connect(sigName: "notify::overflow", callback: (($obj: Point, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::overflow", callback: (($obj: Point, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::overflow", ...args: any[]): void
    connect(sigName: "notify::parent", callback: (($obj: Point, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: Point, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::parent", ...args: any[]): void
    connect(sigName: "notify::receives-default", callback: (($obj: Point, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::receives-default", callback: (($obj: Point, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::receives-default", ...args: any[]): void
    connect(sigName: "notify::root", callback: (($obj: Point, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::root", callback: (($obj: Point, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::root", ...args: any[]): void
    connect(sigName: "notify::scale-factor", callback: (($obj: Point, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-factor", callback: (($obj: Point, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::scale-factor", ...args: any[]): void
    connect(sigName: "notify::sensitive", callback: (($obj: Point, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sensitive", callback: (($obj: Point, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::sensitive", ...args: any[]): void
    connect(sigName: "notify::tooltip-markup", callback: (($obj: Point, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-markup", callback: (($obj: Point, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tooltip-markup", ...args: any[]): void
    connect(sigName: "notify::tooltip-text", callback: (($obj: Point, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-text", callback: (($obj: Point, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tooltip-text", ...args: any[]): void
    connect(sigName: "notify::valign", callback: (($obj: Point, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::valign", callback: (($obj: Point, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::valign", ...args: any[]): void
    connect(sigName: "notify::vexpand", callback: (($obj: Point, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand", callback: (($obj: Point, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vexpand", ...args: any[]): void
    connect(sigName: "notify::vexpand-set", callback: (($obj: Point, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand-set", callback: (($obj: Point, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vexpand-set", ...args: any[]): void
    connect(sigName: "notify::visible", callback: (($obj: Point, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visible", callback: (($obj: Point, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::visible", ...args: any[]): void
    connect(sigName: "notify::width-request", callback: (($obj: Point, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::width-request", callback: (($obj: Point, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::width-request", ...args: any[]): void
    connect(sigName: "notify::accessible-role", callback: (($obj: Point, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-role", callback: (($obj: Point, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::accessible-role", ...args: any[]): void
    connect(sigName: "notify::latitude", callback: (($obj: Point, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::latitude", callback: (($obj: Point, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::latitude", ...args: any[]): void
    connect(sigName: "notify::longitude", callback: (($obj: Point, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::longitude", callback: (($obj: Point, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::longitude", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * A simple variant of [class`Marker]` showing the location of the point as a
 * circle on the map.
 * @class 
 */
export class Point extends Marker {

    // Own properties of Shumate-1.0.Shumate.Point

    static name: string
    static $gtype: GObject.GType<Point>

    // Constructors of Shumate-1.0.Shumate.Point

    constructor(config?: Point.ConstructorProperties) 
    /**
     * Creates an instance of #ShumatePoint.
     * @constructor 
     * @returns a new #ShumatePoint.
     */
    constructor() 
    /**
     * Creates an instance of #ShumatePoint.
     * @constructor 
     * @returns a new #ShumatePoint.
     */
    static new(): Point

    // Overloads of new

    /**
     * Creates an instance of #ShumateMarker.
     * @constructor 
     * @returns a new #ShumateMarker.
     */
    static new(): Marker
    _init(config?: Point.ConstructorProperties): void
}

export module RasterRenderer {

    // Constructor properties interface

    export interface ConstructorProperties extends MapSource.ConstructorProperties {

        // Own constructor properties of Shumate-1.0.Shumate.RasterRenderer

        /**
         * The data source that provides image tiles to display. In most cases,
         * a [class`TileDownloader]` is sufficient.
         */
        data_source?: DataSource | null
    }

}

export interface RasterRenderer {

    // Own properties of Shumate-1.0.Shumate.RasterRenderer

    /**
     * The data source that provides image tiles to display. In most cases,
     * a [class`TileDownloader]` is sufficient.
     */
    readonly data_source: DataSource

    // Class property signals of Shumate-1.0.Shumate.RasterRenderer

    connect(sigName: "notify::data-source", callback: (($obj: RasterRenderer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::data-source", callback: (($obj: RasterRenderer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::data-source", ...args: any[]): void
    connect(sigName: "notify::id", callback: (($obj: RasterRenderer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::id", callback: (($obj: RasterRenderer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::id", ...args: any[]): void
    connect(sigName: "notify::license", callback: (($obj: RasterRenderer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::license", callback: (($obj: RasterRenderer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::license", ...args: any[]): void
    connect(sigName: "notify::license-uri", callback: (($obj: RasterRenderer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::license-uri", callback: (($obj: RasterRenderer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::license-uri", ...args: any[]): void
    connect(sigName: "notify::max-zoom-level", callback: (($obj: RasterRenderer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::max-zoom-level", callback: (($obj: RasterRenderer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::max-zoom-level", ...args: any[]): void
    connect(sigName: "notify::min-zoom-level", callback: (($obj: RasterRenderer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::min-zoom-level", callback: (($obj: RasterRenderer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::min-zoom-level", ...args: any[]): void
    connect(sigName: "notify::name", callback: (($obj: RasterRenderer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: RasterRenderer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::projection", callback: (($obj: RasterRenderer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::projection", callback: (($obj: RasterRenderer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::projection", ...args: any[]): void
    connect(sigName: "notify::tile-size", callback: (($obj: RasterRenderer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tile-size", callback: (($obj: RasterRenderer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tile-size", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class RasterRenderer extends MapSource {

    // Own properties of Shumate-1.0.Shumate.RasterRenderer

    static name: string
    static $gtype: GObject.GType<RasterRenderer>

    // Constructors of Shumate-1.0.Shumate.RasterRenderer

    constructor(config?: RasterRenderer.ConstructorProperties) 
    /**
     * Creates a new [class`RasterRenderer]` that uses the given data source.
     * @constructor 
     * @param data_source a [class`DataSource]` to provide tile image data
     * @returns a newly constructed [class@RasterRenderer]
     */
    constructor(data_source: DataSource) 
    /**
     * Creates a new [class`RasterRenderer]` that uses the given data source.
     * @constructor 
     * @param data_source a [class`DataSource]` to provide tile image data
     * @returns a newly constructed [class@RasterRenderer]
     */
    static new(data_source: DataSource): RasterRenderer
    /**
     * Creates a new [class`RasterRenderer]` that fetches tiles from the given URL
     * using a [class`TileDownloader]` data source.
     * 
     * Equivalent to:
     * 
     * ```c
     * g_autoptr(ShumateTileDownloader) source = shumate_tile_downloader_new (url_template);
     * ShumateRasterRenderer *renderer = shumate_raster_renderer_new (source);
     * ```
     * @constructor 
     * @param url_template a URL template to fetch tiles from
     * @returns a newly constructed [class@RasterRenderer]
     */
    static new_from_url(url_template: string | null): RasterRenderer
    /**
     * Creates a new [class`RasterRenderer]` with the given details and a data
     * source.
     * @constructor 
     * @param id the map source's id
     * @param name the map source's name
     * @param license the map source's license
     * @param license_uri the map source's license URI
     * @param min_zoom the map source's minimum zoom level
     * @param max_zoom the map source's maximum zoom level
     * @param tile_size the map source's tile size (in pixels)
     * @param projection the map source's projection
     * @param data_source a [class`DataSource]` to provide tile image data
     * @returns a newly constructed [class@RasterRenderer]
     */
    static new_full(id: string | null, name: string | null, license: string | null, license_uri: string | null, min_zoom: number, max_zoom: number, tile_size: number, projection: MapProjection, data_source: DataSource): RasterRenderer
    /**
     * Creates a new [class`RasterRenderer]` with the given details and a data
     * source.
     * @constructor 
     * @param id the map source's id
     * @param name the map source's name
     * @param license the map source's license
     * @param license_uri the map source's license URI
     * @param min_zoom the map source's minimum zoom level
     * @param max_zoom the map source's maximum zoom level
     * @param tile_size the map source's tile size (in pixels)
     * @param projection the map source's projection
     * @param url_template a URL template to fetch tiles from
     * @returns a newly constructed [class@RasterRenderer]
     */
    static new_full_from_url(id: string | null, name: string | null, license: string | null, license_uri: string | null, min_zoom: number, max_zoom: number, tile_size: number, projection: MapProjection, url_template: string | null): RasterRenderer
    _init(config?: RasterRenderer.ConstructorProperties): void
}

export module Scale {

    // Constructor properties interface

    export interface ConstructorProperties extends Gtk.Accessible.ConstructorProperties, Gtk.Buildable.ConstructorProperties, Gtk.ConstraintTarget.ConstructorProperties, Gtk.Widget.ConstructorProperties {

        // Own constructor properties of Shumate-1.0.Shumate.Scale

        /**
         * The size of the map scale on screen in pixels.
         */
        max_width?: number | null
        /**
         * The scale's units.
         */
        unit?: Unit | null
        /**
         * The viewport to use.
         */
        viewport?: Viewport | null
    }

}

export interface Scale extends Gtk.Accessible, Gtk.Buildable, Gtk.ConstraintTarget {

    // Own properties of Shumate-1.0.Shumate.Scale

    /**
     * The size of the map scale on screen in pixels.
     */
    max_width: number
    /**
     * The scale's units.
     */
    unit: Unit
    /**
     * The viewport to use.
     */
    viewport: Viewport

    // Owm methods of Shumate-1.0.Shumate.Scale

    /**
     * Gets the maximum scale width.
     * @returns The maximum scale width in pixels.
     */
    get_max_width(): number
    /**
     * Gets the unit used by the scale.
     * @returns The unit used by the scale
     */
    get_unit(): Unit
    /**
     * Gets the viewport used by the scale.
     * @returns The #ShumateViewport used by the scale
     */
    get_viewport(): Viewport | null
    /**
     * Sets the maximum width of the scale on the screen in pixels
     * @param value the number of pixels
     */
    set_max_width(value: number): void
    /**
     * Sets the scale unit.
     * @param unit a #ShumateUnit
     */
    set_unit(unit: Unit): void
    /**
     * Sets the scale viewport.
     * @param viewport a #ShumateViewport
     */
    set_viewport(viewport: Viewport | null): void

    // Class property signals of Shumate-1.0.Shumate.Scale

    connect(sigName: "notify::max-width", callback: (($obj: Scale, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::max-width", callback: (($obj: Scale, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::max-width", ...args: any[]): void
    connect(sigName: "notify::unit", callback: (($obj: Scale, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::unit", callback: (($obj: Scale, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::unit", ...args: any[]): void
    connect(sigName: "notify::viewport", callback: (($obj: Scale, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::viewport", callback: (($obj: Scale, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::viewport", ...args: any[]): void
    connect(sigName: "notify::can-focus", callback: (($obj: Scale, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-focus", callback: (($obj: Scale, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-focus", ...args: any[]): void
    connect(sigName: "notify::can-target", callback: (($obj: Scale, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-target", callback: (($obj: Scale, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-target", ...args: any[]): void
    connect(sigName: "notify::css-classes", callback: (($obj: Scale, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::css-classes", callback: (($obj: Scale, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::css-classes", ...args: any[]): void
    connect(sigName: "notify::css-name", callback: (($obj: Scale, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::css-name", callback: (($obj: Scale, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::css-name", ...args: any[]): void
    connect(sigName: "notify::cursor", callback: (($obj: Scale, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::cursor", callback: (($obj: Scale, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::cursor", ...args: any[]): void
    connect(sigName: "notify::focus-on-click", callback: (($obj: Scale, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::focus-on-click", callback: (($obj: Scale, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::focus-on-click", ...args: any[]): void
    connect(sigName: "notify::focusable", callback: (($obj: Scale, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::focusable", callback: (($obj: Scale, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::focusable", ...args: any[]): void
    connect(sigName: "notify::halign", callback: (($obj: Scale, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::halign", callback: (($obj: Scale, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::halign", ...args: any[]): void
    connect(sigName: "notify::has-default", callback: (($obj: Scale, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-default", callback: (($obj: Scale, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-default", ...args: any[]): void
    connect(sigName: "notify::has-focus", callback: (($obj: Scale, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-focus", callback: (($obj: Scale, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-focus", ...args: any[]): void
    connect(sigName: "notify::has-tooltip", callback: (($obj: Scale, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-tooltip", callback: (($obj: Scale, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-tooltip", ...args: any[]): void
    connect(sigName: "notify::height-request", callback: (($obj: Scale, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height-request", callback: (($obj: Scale, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::height-request", ...args: any[]): void
    connect(sigName: "notify::hexpand", callback: (($obj: Scale, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand", callback: (($obj: Scale, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hexpand", ...args: any[]): void
    connect(sigName: "notify::hexpand-set", callback: (($obj: Scale, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand-set", callback: (($obj: Scale, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hexpand-set", ...args: any[]): void
    connect(sigName: "notify::layout-manager", callback: (($obj: Scale, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::layout-manager", callback: (($obj: Scale, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::layout-manager", ...args: any[]): void
    connect(sigName: "notify::margin-bottom", callback: (($obj: Scale, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-bottom", callback: (($obj: Scale, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-bottom", ...args: any[]): void
    connect(sigName: "notify::margin-end", callback: (($obj: Scale, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-end", callback: (($obj: Scale, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-end", ...args: any[]): void
    connect(sigName: "notify::margin-start", callback: (($obj: Scale, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-start", callback: (($obj: Scale, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-start", ...args: any[]): void
    connect(sigName: "notify::margin-top", callback: (($obj: Scale, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-top", callback: (($obj: Scale, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-top", ...args: any[]): void
    connect(sigName: "notify::name", callback: (($obj: Scale, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: Scale, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::opacity", callback: (($obj: Scale, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opacity", callback: (($obj: Scale, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::opacity", ...args: any[]): void
    connect(sigName: "notify::overflow", callback: (($obj: Scale, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::overflow", callback: (($obj: Scale, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::overflow", ...args: any[]): void
    connect(sigName: "notify::parent", callback: (($obj: Scale, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: Scale, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::parent", ...args: any[]): void
    connect(sigName: "notify::receives-default", callback: (($obj: Scale, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::receives-default", callback: (($obj: Scale, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::receives-default", ...args: any[]): void
    connect(sigName: "notify::root", callback: (($obj: Scale, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::root", callback: (($obj: Scale, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::root", ...args: any[]): void
    connect(sigName: "notify::scale-factor", callback: (($obj: Scale, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-factor", callback: (($obj: Scale, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::scale-factor", ...args: any[]): void
    connect(sigName: "notify::sensitive", callback: (($obj: Scale, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sensitive", callback: (($obj: Scale, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::sensitive", ...args: any[]): void
    connect(sigName: "notify::tooltip-markup", callback: (($obj: Scale, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-markup", callback: (($obj: Scale, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tooltip-markup", ...args: any[]): void
    connect(sigName: "notify::tooltip-text", callback: (($obj: Scale, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-text", callback: (($obj: Scale, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tooltip-text", ...args: any[]): void
    connect(sigName: "notify::valign", callback: (($obj: Scale, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::valign", callback: (($obj: Scale, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::valign", ...args: any[]): void
    connect(sigName: "notify::vexpand", callback: (($obj: Scale, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand", callback: (($obj: Scale, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vexpand", ...args: any[]): void
    connect(sigName: "notify::vexpand-set", callback: (($obj: Scale, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand-set", callback: (($obj: Scale, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vexpand-set", ...args: any[]): void
    connect(sigName: "notify::visible", callback: (($obj: Scale, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visible", callback: (($obj: Scale, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::visible", ...args: any[]): void
    connect(sigName: "notify::width-request", callback: (($obj: Scale, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::width-request", callback: (($obj: Scale, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::width-request", ...args: any[]): void
    connect(sigName: "notify::accessible-role", callback: (($obj: Scale, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-role", callback: (($obj: Scale, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::accessible-role", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * A widget displaying a scale.
 * 
 * # CSS nodes
 * 
 * ```
 * map-scale
 * ├── label[.metric][.imperial]
 * ```
 * 
 * `ShumateScale` uses a single CSS node with name map-scale, it has up to two
 * childs different labels.
 * @class 
 */
export class Scale extends Gtk.Widget {

    // Own properties of Shumate-1.0.Shumate.Scale

    static name: string
    static $gtype: GObject.GType<Scale>

    // Constructors of Shumate-1.0.Shumate.Scale

    constructor(config?: Scale.ConstructorProperties) 
    /**
     * Creates an instance of #ShumateScale.
     * @constructor 
     * @param viewport a #ShumateViewport
     * @returns a new #ShumateScale.
     */
    constructor(viewport: Viewport | null) 
    /**
     * Creates an instance of #ShumateScale.
     * @constructor 
     * @param viewport a #ShumateViewport
     * @returns a new #ShumateScale.
     */
    static new(viewport: Viewport | null): Scale
    _init(config?: Scale.ConstructorProperties): void
}

export module SimpleMap {

    // Signal callback interfaces

    /**
     * Signal callback interface for `symbol-clicked`
     */
    export interface SymbolClickedSignalCallback {
        ($obj: SimpleMap, event: SymbolEvent): void
    }


    // Constructor properties interface

    export interface ConstructorProperties extends Gtk.Accessible.ConstructorProperties, Gtk.Buildable.ConstructorProperties, Gtk.ConstraintTarget.ConstructorProperties, Gtk.Widget.ConstructorProperties {

        // Own constructor properties of Shumate-1.0.Shumate.SimpleMap

        map_source?: MapSource | null
        show_zoom_buttons?: boolean | null
    }

}

export interface SimpleMap extends Gtk.Accessible, Gtk.Buildable, Gtk.ConstraintTarget {

    // Own properties of Shumate-1.0.Shumate.SimpleMap

    readonly compass: Compass
    readonly license: License
    // Has conflict: readonly map: Map
    map_source: MapSource
    readonly scale: Scale
    show_zoom_buttons: boolean
    readonly viewport: Viewport

    // Owm methods of Shumate-1.0.Shumate.SimpleMap

    /**
     * Adds a map layer as an overlay on top of the base map.
     * @param layer a [class`Layer]` to add
     */
    add_overlay_layer(layer: Layer): void
    /**
     * Gets the compass widget for the map.
     * @returns a [class@Compass]
     */
    get_compass(): Compass
    /**
     * Gets the license widget for the map.
     * @returns a [class@License]
     */
    get_license(): License
    /**
     * Gets the [class`SimpleMap]`'s underlying [class`Map]`.
     * @returns a [class@Map]
     */
    get_map(): Map
    /**
     * Gets the map source for the current base layer.
     * @returns a [class@MapSource]
     */
    get_map_source(): MapSource
    /**
     * Gets the scale widget for the map.
     * @returns a [class@Scale]
     */
    get_scale(): Scale
    /**
     * Gets whether or not the zoom buttons are shown.
     * @returns %TRUE if the zoom buttons are visible, otherwise %FALSE
     */
    get_show_zoom_buttons(): boolean
    /**
     * Gets the map's viewport, needed for constructing map layers that will be added
     * to it.
     * @returns a [class@Viewport]
     */
    get_viewport(): Viewport
    insert_overlay_layer(layer: Layer, idx: number): void
    /**
     * Removes a layer from the map.
     * @param layer a [class`Layer]` that was added to the map previously
     */
    remove_overlay_layer(layer: Layer): void
    /**
     * Sets the source for the base map.
     * @param map_source a [class`MapSource]`
     */
    set_map_source(map_source: MapSource | null): void
    /**
     * Sets whether or not the zoom buttons are shown.
     * @param show_zoom_buttons %TRUE to show the zoom buttons, %FALSE to hide them
     */
    set_show_zoom_buttons(show_zoom_buttons: boolean): void

    // Own signals of Shumate-1.0.Shumate.SimpleMap

    connect(sigName: "symbol-clicked", callback: SimpleMap.SymbolClickedSignalCallback): number
    connect_after(sigName: "symbol-clicked", callback: SimpleMap.SymbolClickedSignalCallback): number
    emit(sigName: "symbol-clicked", event: SymbolEvent, ...args: any[]): void

    // Class property signals of Shumate-1.0.Shumate.SimpleMap

    connect(sigName: "notify::compass", callback: (($obj: SimpleMap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::compass", callback: (($obj: SimpleMap, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::compass", ...args: any[]): void
    connect(sigName: "notify::license", callback: (($obj: SimpleMap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::license", callback: (($obj: SimpleMap, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::license", ...args: any[]): void
    connect(sigName: "notify::map", callback: (($obj: SimpleMap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::map", callback: (($obj: SimpleMap, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::map", ...args: any[]): void
    connect(sigName: "notify::map-source", callback: (($obj: SimpleMap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::map-source", callback: (($obj: SimpleMap, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::map-source", ...args: any[]): void
    connect(sigName: "notify::scale", callback: (($obj: SimpleMap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale", callback: (($obj: SimpleMap, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::scale", ...args: any[]): void
    connect(sigName: "notify::show-zoom-buttons", callback: (($obj: SimpleMap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::show-zoom-buttons", callback: (($obj: SimpleMap, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::show-zoom-buttons", ...args: any[]): void
    connect(sigName: "notify::viewport", callback: (($obj: SimpleMap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::viewport", callback: (($obj: SimpleMap, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::viewport", ...args: any[]): void
    connect(sigName: "notify::can-focus", callback: (($obj: SimpleMap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-focus", callback: (($obj: SimpleMap, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-focus", ...args: any[]): void
    connect(sigName: "notify::can-target", callback: (($obj: SimpleMap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-target", callback: (($obj: SimpleMap, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-target", ...args: any[]): void
    connect(sigName: "notify::css-classes", callback: (($obj: SimpleMap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::css-classes", callback: (($obj: SimpleMap, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::css-classes", ...args: any[]): void
    connect(sigName: "notify::css-name", callback: (($obj: SimpleMap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::css-name", callback: (($obj: SimpleMap, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::css-name", ...args: any[]): void
    connect(sigName: "notify::cursor", callback: (($obj: SimpleMap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::cursor", callback: (($obj: SimpleMap, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::cursor", ...args: any[]): void
    connect(sigName: "notify::focus-on-click", callback: (($obj: SimpleMap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::focus-on-click", callback: (($obj: SimpleMap, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::focus-on-click", ...args: any[]): void
    connect(sigName: "notify::focusable", callback: (($obj: SimpleMap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::focusable", callback: (($obj: SimpleMap, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::focusable", ...args: any[]): void
    connect(sigName: "notify::halign", callback: (($obj: SimpleMap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::halign", callback: (($obj: SimpleMap, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::halign", ...args: any[]): void
    connect(sigName: "notify::has-default", callback: (($obj: SimpleMap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-default", callback: (($obj: SimpleMap, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-default", ...args: any[]): void
    connect(sigName: "notify::has-focus", callback: (($obj: SimpleMap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-focus", callback: (($obj: SimpleMap, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-focus", ...args: any[]): void
    connect(sigName: "notify::has-tooltip", callback: (($obj: SimpleMap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-tooltip", callback: (($obj: SimpleMap, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-tooltip", ...args: any[]): void
    connect(sigName: "notify::height-request", callback: (($obj: SimpleMap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height-request", callback: (($obj: SimpleMap, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::height-request", ...args: any[]): void
    connect(sigName: "notify::hexpand", callback: (($obj: SimpleMap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand", callback: (($obj: SimpleMap, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hexpand", ...args: any[]): void
    connect(sigName: "notify::hexpand-set", callback: (($obj: SimpleMap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand-set", callback: (($obj: SimpleMap, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hexpand-set", ...args: any[]): void
    connect(sigName: "notify::layout-manager", callback: (($obj: SimpleMap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::layout-manager", callback: (($obj: SimpleMap, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::layout-manager", ...args: any[]): void
    connect(sigName: "notify::margin-bottom", callback: (($obj: SimpleMap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-bottom", callback: (($obj: SimpleMap, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-bottom", ...args: any[]): void
    connect(sigName: "notify::margin-end", callback: (($obj: SimpleMap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-end", callback: (($obj: SimpleMap, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-end", ...args: any[]): void
    connect(sigName: "notify::margin-start", callback: (($obj: SimpleMap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-start", callback: (($obj: SimpleMap, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-start", ...args: any[]): void
    connect(sigName: "notify::margin-top", callback: (($obj: SimpleMap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-top", callback: (($obj: SimpleMap, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-top", ...args: any[]): void
    connect(sigName: "notify::name", callback: (($obj: SimpleMap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: SimpleMap, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::opacity", callback: (($obj: SimpleMap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opacity", callback: (($obj: SimpleMap, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::opacity", ...args: any[]): void
    connect(sigName: "notify::overflow", callback: (($obj: SimpleMap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::overflow", callback: (($obj: SimpleMap, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::overflow", ...args: any[]): void
    connect(sigName: "notify::parent", callback: (($obj: SimpleMap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: SimpleMap, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::parent", ...args: any[]): void
    connect(sigName: "notify::receives-default", callback: (($obj: SimpleMap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::receives-default", callback: (($obj: SimpleMap, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::receives-default", ...args: any[]): void
    connect(sigName: "notify::root", callback: (($obj: SimpleMap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::root", callback: (($obj: SimpleMap, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::root", ...args: any[]): void
    connect(sigName: "notify::scale-factor", callback: (($obj: SimpleMap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-factor", callback: (($obj: SimpleMap, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::scale-factor", ...args: any[]): void
    connect(sigName: "notify::sensitive", callback: (($obj: SimpleMap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sensitive", callback: (($obj: SimpleMap, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::sensitive", ...args: any[]): void
    connect(sigName: "notify::tooltip-markup", callback: (($obj: SimpleMap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-markup", callback: (($obj: SimpleMap, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tooltip-markup", ...args: any[]): void
    connect(sigName: "notify::tooltip-text", callback: (($obj: SimpleMap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-text", callback: (($obj: SimpleMap, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tooltip-text", ...args: any[]): void
    connect(sigName: "notify::valign", callback: (($obj: SimpleMap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::valign", callback: (($obj: SimpleMap, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::valign", ...args: any[]): void
    connect(sigName: "notify::vexpand", callback: (($obj: SimpleMap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand", callback: (($obj: SimpleMap, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vexpand", ...args: any[]): void
    connect(sigName: "notify::vexpand-set", callback: (($obj: SimpleMap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand-set", callback: (($obj: SimpleMap, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vexpand-set", ...args: any[]): void
    connect(sigName: "notify::visible", callback: (($obj: SimpleMap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visible", callback: (($obj: SimpleMap, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::visible", ...args: any[]): void
    connect(sigName: "notify::width-request", callback: (($obj: SimpleMap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::width-request", callback: (($obj: SimpleMap, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::width-request", ...args: any[]): void
    connect(sigName: "notify::accessible-role", callback: (($obj: SimpleMap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-role", callback: (($obj: SimpleMap, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::accessible-role", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * A ready-to-use map [class`Gtk`.Widget].If you want to use your own implementation,
 * you can look at the [class`Shumate`.Map] widget.
 * 
 * The simple map contains a zoom widget, a [class`Shumate`.License] at the bottom,
 * a [class`Shumate`.Scale] and a [class`Shumate`.Compass].
 * @class 
 */
export class SimpleMap extends Gtk.Widget {

    // Own properties of Shumate-1.0.Shumate.SimpleMap

    static name: string
    static $gtype: GObject.GType<SimpleMap>

    // Constructors of Shumate-1.0.Shumate.SimpleMap

    constructor(config?: SimpleMap.ConstructorProperties) 
    constructor() 
    static new(): SimpleMap
    _init(config?: SimpleMap.ConstructorProperties): void
}

export module SymbolEvent {

    // Constructor properties interface

    export interface ConstructorProperties extends Location.ConstructorProperties, GObject.Object.ConstructorProperties {
    }

}

export interface SymbolEvent extends Location {

    // Own properties of Shumate-1.0.Shumate.SymbolEvent

    /**
     * The ID of the feature that this event pertains to, as it was given in the
     * data source.
     */
    readonly feature_id: string | null
    /**
     * The ID of the style layer of the symbol that this event pertains to.
     */
    readonly layer: string | null

    // Owm methods of Shumate-1.0.Shumate.SymbolEvent

    /**
     * Gets the feature ID as specified in the data source. The meaning of the
     * ID, if any, is up to the source.
     * 
     * Feature IDs in Mapbox Vector Tile format are integers, but they are
     * formatted as a string here for futureproofing.
     * @returns the feature ID
     */
    get_feature_id(): string | null
    /**
     * Gets the name of the layer the clicked symbol is in, as named in the vector
     * stylesheet.
     * 
     * Note that this is distinct from the name of the layer in the vector tile
     * schema. Some styles have multiple symbol layers derived from the same
     * data source layer.
     * @returns the layer name
     */
    get_layer(): string | null
    /**
     * Gets a tag from the source feature.
     * 
     * The available tags depend on the vector tile schema and the source layer.
     * Check the documentation for the tiles you're using to see what information
     * is available.
     * @param tag_name the tag to get
     * @returns the tag value, formatted as a string
     */
    get_tag(tag_name: string | null): string | null

    // Class property signals of Shumate-1.0.Shumate.SymbolEvent

    connect(sigName: "notify::feature-id", callback: (($obj: SymbolEvent, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::feature-id", callback: (($obj: SymbolEvent, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::feature-id", ...args: any[]): void
    connect(sigName: "notify::layer", callback: (($obj: SymbolEvent, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::layer", callback: (($obj: SymbolEvent, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::layer", ...args: any[]): void
    connect(sigName: "notify::latitude", callback: (($obj: SymbolEvent, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::latitude", callback: (($obj: SymbolEvent, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::latitude", ...args: any[]): void
    connect(sigName: "notify::longitude", callback: (($obj: SymbolEvent, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::longitude", callback: (($obj: SymbolEvent, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::longitude", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * An object containing the details of a map feature that has been clicked.
 * It is the argument of the [signal`MapLayer:`:symbol-clicked] and
 * [signal`SimpleMap:`:symbol-clicked] signals.
 * 
 * When vector maps are rendered, they may contain labels and icons. When one
 * of these symbols is clicked, these signals are emitted to give the
 * application access to the original location and details of the map feature.
 * 
 * [class`SymbolEvent]` implements [iface`Location]` so you can get the latitude
 * and longitude of the feature that was clicked.
 * @class 
 */
export class SymbolEvent extends GObject.Object {

    // Own properties of Shumate-1.0.Shumate.SymbolEvent

    static name: string
    static $gtype: GObject.GType<SymbolEvent>

    // Constructors of Shumate-1.0.Shumate.SymbolEvent

    constructor(config?: SymbolEvent.ConstructorProperties) 
    _init(config?: SymbolEvent.ConstructorProperties): void
}

export module Tile {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of Shumate-1.0.Shumate.Tile

        /**
         * Specifies whether the tile should fade in when loading
         */
        fade_in?: boolean | null
        /**
         * The [iface`Gdk`.Paintable] backing the tile
         */
        paintable?: Gdk.Paintable | null
        /**
         * The scale factor of the widget the tile will be displayed in.
         */
        scale_factor?: number | null
        /**
         * The size of the tile in pixels
         */
        size?: number | null
        /**
         * The state of the tile
         */
        state?: State | null
        /**
         * The x position of the tile
         */
        x?: number | null
        /**
         * The y position of the tile
         */
        y?: number | null
        /**
         * The zoom level of the tile
         */
        zoom_level?: number | null
    }

}

export interface Tile {

    // Own properties of Shumate-1.0.Shumate.Tile

    /**
     * Specifies whether the tile should fade in when loading
     */
    fade_in: boolean
    /**
     * The [iface`Gdk`.Paintable] backing the tile
     */
    paintable: Gdk.Paintable
    /**
     * The scale factor of the widget the tile will be displayed in.
     */
    scale_factor: number
    /**
     * The size of the tile in pixels
     */
    size: number
    /**
     * The state of the tile
     */
    state: State
    /**
     * The x position of the tile
     */
    x: number
    /**
     * The y position of the tile
     */
    y: number
    /**
     * The zoom level of the tile
     */
    zoom_level: number

    // Owm methods of Shumate-1.0.Shumate.Tile

    get_etag(): string | null
    /**
     * Checks whether the tile should fade in.
     * @returns the return value determines whether the tile should fade in when loading.
     */
    get_fade_in(): boolean
    get_modified_time(): GLib.DateTime
    /**
     * Get the [iface`Gdk`.Paintable] representing this tile.
     * @returns A [iface@Gdk.Paintable]
     */
    get_paintable(): Gdk.Paintable | null
    /**
     * Gets the scale factor of the tile.
     * @returns the scale factor
     */
    get_scale_factor(): number
    /**
     * Gets the tile's size.
     * @returns the tile's size in pixels
     */
    get_size(): number
    /**
     * Gets the current state of tile loading.
     * @returns the tile's #ShumateState
     */
    get_state(): State
    /**
     * Gets the tile's x position.
     * @returns the tile's x position
     */
    get_x(): number
    /**
     * Gets the tile's y position.
     * @returns the tile's y position
     */
    get_y(): number
    /**
     * Gets the tile's zoom level.
     * @returns the tile's zoom level
     */
    get_zoom_level(): number
    set_etag(etag: string | null): void
    /**
     * Sets the flag determining whether the tile should fade in when loading
     * @param fade_in determines whether the tile should fade in when loading
     */
    set_fade_in(fade_in: boolean): void
    set_modified_time(modified_time: GLib.DateTime): void
    /**
     * Sets the [iface`Gdk`.Paintable] representing this tile.
     * @param paintable a [iface`Gdk`.Paintable]
     */
    set_paintable(paintable: Gdk.Paintable): void
    /**
     * Sets the scale factor of the tile.
     * @param scale_factor the scale factor
     */
    set_scale_factor(scale_factor: number): void
    /**
     * Sets the tile's size
     * @param size the size in pixels
     */
    set_size(size: number): void
    /**
     * Sets the tile's #ShumateState
     * @param state a #ShumateState
     */
    set_state(state: State): void
    /**
     * Sets the tile's x position
     * @param x the position
     */
    set_x(x: number): void
    /**
     * Sets the tile's y position
     * @param y the position
     */
    set_y(y: number): void
    /**
     * Sets the tile's zoom level
     * @param zoom_level the zoom level
     */
    set_zoom_level(zoom_level: number): void

    // Class property signals of Shumate-1.0.Shumate.Tile

    connect(sigName: "notify::fade-in", callback: (($obj: Tile, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fade-in", callback: (($obj: Tile, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::fade-in", ...args: any[]): void
    connect(sigName: "notify::paintable", callback: (($obj: Tile, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::paintable", callback: (($obj: Tile, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::paintable", ...args: any[]): void
    connect(sigName: "notify::scale-factor", callback: (($obj: Tile, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-factor", callback: (($obj: Tile, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::scale-factor", ...args: any[]): void
    connect(sigName: "notify::size", callback: (($obj: Tile, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::size", callback: (($obj: Tile, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::size", ...args: any[]): void
    connect(sigName: "notify::state", callback: (($obj: Tile, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::state", callback: (($obj: Tile, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::state", ...args: any[]): void
    connect(sigName: "notify::x", callback: (($obj: Tile, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::x", callback: (($obj: Tile, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::x", ...args: any[]): void
    connect(sigName: "notify::y", callback: (($obj: Tile, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::y", callback: (($obj: Tile, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::y", ...args: any[]): void
    connect(sigName: "notify::zoom-level", callback: (($obj: Tile, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::zoom-level", callback: (($obj: Tile, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::zoom-level", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * An object that represents map tiles. Tiles are loaded by a [class`MapSource]`.
 * @class 
 */
export class Tile extends GObject.Object {

    // Own properties of Shumate-1.0.Shumate.Tile

    static name: string
    static $gtype: GObject.GType<Tile>

    // Constructors of Shumate-1.0.Shumate.Tile

    constructor(config?: Tile.ConstructorProperties) 
    /**
     * Creates an instance of #ShumateTile.
     * @constructor 
     * @returns a new #ShumateTile
     */
    constructor() 
    /**
     * Creates an instance of #ShumateTile.
     * @constructor 
     * @returns a new #ShumateTile
     */
    static new(): Tile
    /**
     * Creates an instance of #ShumateTile.
     * @constructor 
     * @param x the x position
     * @param y the y position
     * @param size the size in pixels
     * @param zoom_level the zoom level
     * @returns a #ShumateTile
     */
    static new_full(x: number, y: number, size: number, zoom_level: number): Tile
    _init(config?: Tile.ConstructorProperties): void
}

export module TileDownloader {

    // Constructor properties interface

    export interface ConstructorProperties extends DataSource.ConstructorProperties {

        // Own constructor properties of Shumate-1.0.Shumate.TileDownloader

        /**
         * A template for construting the URL to download a tile from.
         * 
         * The template has the following replacements:
         * - "{x}": The X coordinate of the tile
         * - "{y}": The Y coordinate of the tile
         * - "{z}": The zoom level of the tile
         * - "{tmsy}": The inverted Y coordinate (i.e. tile numbering starts with 0 at
         * the bottom, rather than top, of the map)
         */
        url_template?: string | null
    }

}

export interface TileDownloader {

    // Own properties of Shumate-1.0.Shumate.TileDownloader

    /**
     * A template for construting the URL to download a tile from.
     * 
     * The template has the following replacements:
     * - "{x}": The X coordinate of the tile
     * - "{y}": The Y coordinate of the tile
     * - "{z}": The zoom level of the tile
     * - "{tmsy}": The inverted Y coordinate (i.e. tile numbering starts with 0 at
     * the bottom, rather than top, of the map)
     */
    readonly url_template: string | null

    // Class property signals of Shumate-1.0.Shumate.TileDownloader

    connect(sigName: "notify::url-template", callback: (($obj: TileDownloader, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::url-template", callback: (($obj: TileDownloader, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::url-template", ...args: any[]): void
    connect(sigName: "notify::max-zoom-level", callback: (($obj: TileDownloader, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::max-zoom-level", callback: (($obj: TileDownloader, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::max-zoom-level", ...args: any[]): void
    connect(sigName: "notify::min-zoom-level", callback: (($obj: TileDownloader, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::min-zoom-level", callback: (($obj: TileDownloader, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::min-zoom-level", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * A [class`DataSource]` that asynchronously downloads tiles from an online
 * service using a given template.
 * 
 * It contains an internal [class`FileCache]` to cache the tiles on the system.
 * @class 
 */
export class TileDownloader extends DataSource {

    // Own properties of Shumate-1.0.Shumate.TileDownloader

    static name: string
    static $gtype: GObject.GType<TileDownloader>

    // Constructors of Shumate-1.0.Shumate.TileDownloader

    constructor(config?: TileDownloader.ConstructorProperties) 
    /**
     * Creates a new [class`TileDownloader]` that fetches tiles from an API and
     * caches them on disk.
     * 
     * See [property`TileDownloader:`url-template] for the format of the URL template.
     * @constructor 
     * @param url_template a URL template to fetch tiles from
     * @returns a newly constructed [class@TileDownloader]
     */
    constructor(url_template: string | null) 
    /**
     * Creates a new [class`TileDownloader]` that fetches tiles from an API and
     * caches them on disk.
     * 
     * See [property`TileDownloader:`url-template] for the format of the URL template.
     * @constructor 
     * @param url_template a URL template to fetch tiles from
     * @returns a newly constructed [class@TileDownloader]
     */
    static new(url_template: string | null): TileDownloader
    _init(config?: TileDownloader.ConstructorProperties): void
}

export module VectorRenderer {

    // Constructor properties interface

    export interface ConstructorProperties extends Gio.Initable.ConstructorProperties, MapSource.ConstructorProperties {

        // Own constructor properties of Shumate-1.0.Shumate.VectorRenderer

        /**
         * A map style, in [Mapbox Style Specification](https://docs.mapbox.com/mapbox-gl-js/style-spec/)
         * format.
         * 
         * Note that not all features of the specification are supported.
         */
        style_json?: string | null
    }

}

export interface VectorRenderer extends Gio.Initable {

    // Own properties of Shumate-1.0.Shumate.VectorRenderer

    /**
     * A map style, in [Mapbox Style Specification](https://docs.mapbox.com/mapbox-gl-js/style-spec/)
     * format.
     * 
     * Note that not all features of the specification are supported.
     */
    readonly style_json: string | null

    // Owm methods of Shumate-1.0.Shumate.VectorRenderer

    /**
     * Sets the sprite sheet used by the style JSON to render icons and textures.
     * 
     * See <https://maplibre.org/maplibre-gl-js-docs/style-spec/sprite/> for
     * details about the spritesheet format. Most stylesheets provide these files
     * along with the main style JSON.
     * @param sprites_pixbuf a [class`GdkPixbuf`.Pixbuf]
     * @param sprites_json a JSON string
     * @returns whether the sprite sheet was loaded successfully
     */
    set_sprite_sheet_data(sprites_pixbuf: GdkPixbuf.Pixbuf, sprites_json: string | null): boolean

    // Class property signals of Shumate-1.0.Shumate.VectorRenderer

    connect(sigName: "notify::style-json", callback: (($obj: VectorRenderer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::style-json", callback: (($obj: VectorRenderer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::style-json", ...args: any[]): void
    connect(sigName: "notify::id", callback: (($obj: VectorRenderer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::id", callback: (($obj: VectorRenderer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::id", ...args: any[]): void
    connect(sigName: "notify::license", callback: (($obj: VectorRenderer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::license", callback: (($obj: VectorRenderer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::license", ...args: any[]): void
    connect(sigName: "notify::license-uri", callback: (($obj: VectorRenderer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::license-uri", callback: (($obj: VectorRenderer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::license-uri", ...args: any[]): void
    connect(sigName: "notify::max-zoom-level", callback: (($obj: VectorRenderer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::max-zoom-level", callback: (($obj: VectorRenderer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::max-zoom-level", ...args: any[]): void
    connect(sigName: "notify::min-zoom-level", callback: (($obj: VectorRenderer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::min-zoom-level", callback: (($obj: VectorRenderer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::min-zoom-level", ...args: any[]): void
    connect(sigName: "notify::name", callback: (($obj: VectorRenderer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: VectorRenderer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::projection", callback: (($obj: VectorRenderer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::projection", callback: (($obj: VectorRenderer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::projection", ...args: any[]): void
    connect(sigName: "notify::tile-size", callback: (($obj: VectorRenderer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tile-size", callback: (($obj: VectorRenderer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tile-size", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * A [class`MapSource]` that renders tiles from a given vector data source.
 * @class 
 */
export class VectorRenderer extends MapSource {

    // Own properties of Shumate-1.0.Shumate.VectorRenderer

    static name: string
    static $gtype: GObject.GType<VectorRenderer>

    // Constructors of Shumate-1.0.Shumate.VectorRenderer

    constructor(config?: VectorRenderer.ConstructorProperties) 
    /**
     * Creates a new [class`VectorRenderer]` from the given JSON style.
     * 
     * The stylesheet should contain a list of tile sources. Tiles will be
     * downloaded using [class`TileDownloader]`s.
     * 
     * See the [MapLibre Style Specification](https://maplibre.org/maplibre-gl-js-docs/style-spec/)
     * for details on `style_json,` but be aware that libshumate does not support
     * every feature of the specification.
     * @constructor 
     * @param id an ID for the map source
     * @param style_json a vector style
     * @returns a newly constructed [class@VectorRenderer], or %NULL if @error is set
     */
    constructor(id: string | null, style_json: string | null) 
    /**
     * Creates a new [class`VectorRenderer]` from the given JSON style.
     * 
     * The stylesheet should contain a list of tile sources. Tiles will be
     * downloaded using [class`TileDownloader]`s.
     * 
     * See the [MapLibre Style Specification](https://maplibre.org/maplibre-gl-js-docs/style-spec/)
     * for details on `style_json,` but be aware that libshumate does not support
     * every feature of the specification.
     * @constructor 
     * @param id an ID for the map source
     * @param style_json a vector style
     * @returns a newly constructed [class@VectorRenderer], or %NULL if @error is set
     */
    static new(id: string | null, style_json: string | null): VectorRenderer
    _init(config?: VectorRenderer.ConstructorProperties): void
    /**
     * Checks whether libshumate was compiled with vector tile support. If it was
     * not, vector renderers cannot be created or used.
     * @returns %TRUE if libshumate was compiled with `-Dvector_renderer=true` or %FALSE if it was not
     */
    static is_supported(): boolean
}

export module Viewport {

    // Constructor properties interface

    export interface ConstructorProperties extends Location.ConstructorProperties, GObject.Object.ConstructorProperties {

        // Own constructor properties of Shumate-1.0.Shumate.Viewport

        /**
         * The highest allowed level of zoom of the content.
         */
        max_zoom_level?: number | null
        /**
         * The lowest allowed level of zoom of the content.
         */
        min_zoom_level?: number | null
        /**
         * The reference #ShumateMapSource being displayed
         */
        reference_map_source?: MapSource | null
        /**
         * The rotation of the map view, in radians clockwise from up being due north
         */
        rotation?: number | null
        /**
         * The level of zoom of the content.
         */
        zoom_level?: number | null
    }

}

export interface Viewport extends Location {

    // Own properties of Shumate-1.0.Shumate.Viewport

    /**
     * The highest allowed level of zoom of the content.
     */
    max_zoom_level: number
    /**
     * The lowest allowed level of zoom of the content.
     */
    min_zoom_level: number
    /**
     * The reference #ShumateMapSource being displayed
     */
    reference_map_source: MapSource
    /**
     * The rotation of the map view, in radians clockwise from up being due north
     */
    rotation: number
    /**
     * The level of zoom of the content.
     */
    zoom_level: number

    // Owm methods of Shumate-1.0.Shumate.Viewport

    /**
     * Get the maximal zoom level
     * @returns the maximal zoom level
     */
    get_max_zoom_level(): number
    /**
     * Get the minimal zoom level
     * @returns the minimal zoom level
     */
    get_min_zoom_level(): number
    /**
     * Get the reference map source
     * @returns the reference #ShumateMapSource or %NULL when none has been set.
     */
    get_reference_map_source(): MapSource | null
    /**
     * Gets the current rotation
     * @returns the current rotation
     */
    get_rotation(): number
    /**
     * Get the current zoom level
     * @returns the current zoom level
     */
    get_zoom_level(): number
    /**
     * Gets the position on `widget` that correspond to the given latitude and
     * longitude.
     * @param widget a #GtkWidget that uses `self` as viewport
     * @param latitude the latitude
     * @param longitude the longitude
     */
    location_to_widget_coords(widget: Gtk.Widget, latitude: number, longitude: number): [ /* x */ number, /* y */ number ]
    /**
     * Set the maximal zoom level
     * @param max_zoom_level the maximal zoom level
     */
    set_max_zoom_level(max_zoom_level: number): void
    /**
     * Set the minimal zoom level
     * @param min_zoom_level the minimal zoom level
     */
    set_min_zoom_level(min_zoom_level: number): void
    /**
     * Set the reference map source
     * @param map_source a #ShumateMapSource or %NULL to set none.
     */
    set_reference_map_source(map_source: MapSource | null): void
    /**
     * Sets the rotation
     * @param rotation the rotation
     */
    set_rotation(rotation: number): void
    /**
     * Set the zoom level
     * @param zoom_level the zoom level
     */
    set_zoom_level(zoom_level: number): void
    /**
     * Gets the latitude and longitude corresponding to a position on `widget`.
     * @param widget a #GtkWidget that uses `self` as viewport
     * @param x the x coordinate
     * @param y the y coordinate
     */
    widget_coords_to_location(widget: Gtk.Widget, x: number, y: number): [ /* latitude */ number, /* longitude */ number ]

    // Class property signals of Shumate-1.0.Shumate.Viewport

    connect(sigName: "notify::max-zoom-level", callback: (($obj: Viewport, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::max-zoom-level", callback: (($obj: Viewport, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::max-zoom-level", ...args: any[]): void
    connect(sigName: "notify::min-zoom-level", callback: (($obj: Viewport, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::min-zoom-level", callback: (($obj: Viewport, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::min-zoom-level", ...args: any[]): void
    connect(sigName: "notify::reference-map-source", callback: (($obj: Viewport, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::reference-map-source", callback: (($obj: Viewport, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::reference-map-source", ...args: any[]): void
    connect(sigName: "notify::rotation", callback: (($obj: Viewport, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::rotation", callback: (($obj: Viewport, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::rotation", ...args: any[]): void
    connect(sigName: "notify::zoom-level", callback: (($obj: Viewport, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::zoom-level", callback: (($obj: Viewport, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::zoom-level", ...args: any[]): void
    connect(sigName: "notify::latitude", callback: (($obj: Viewport, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::latitude", callback: (($obj: Viewport, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::latitude", ...args: any[]): void
    connect(sigName: "notify::longitude", callback: (($obj: Viewport, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::longitude", callback: (($obj: Viewport, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::longitude", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * The object holding the coordinate, zoom-level, and rotation state of the current view.
 * 
 * As the object implements [iface`Shumate`.Location], the latitude and longitude are
 * accessible via the interface methods.
 * @class 
 */
export class Viewport extends GObject.Object {

    // Own properties of Shumate-1.0.Shumate.Viewport

    static name: string
    static $gtype: GObject.GType<Viewport>

    // Constructors of Shumate-1.0.Shumate.Viewport

    constructor(config?: Viewport.ConstructorProperties) 
    /**
     * Creates a new #ShumateViewport
     * @constructor 
     * @returns A new #ShumateViewport
     */
    constructor() 
    /**
     * Creates a new #ShumateViewport
     * @constructor 
     * @returns A new #ShumateViewport
     */
    static new(): Viewport
    _init(config?: Viewport.ConstructorProperties): void
}

export interface CompassClass {

    // Own fields of Shumate-1.0.Shumate.CompassClass

    parent_class: Gtk.WidgetClass
}

export abstract class CompassClass {

    // Own properties of Shumate-1.0.Shumate.CompassClass

    static name: string
}

export interface CoordinateClass {

    // Own fields of Shumate-1.0.Shumate.CoordinateClass

    parent_class: GObject.InitiallyUnownedClass
}

export abstract class CoordinateClass {

    // Own properties of Shumate-1.0.Shumate.CoordinateClass

    static name: string
}

export interface DataSourceClass {

    // Own fields of Shumate-1.0.Shumate.DataSourceClass

    parent_class: GObject.ObjectClass
    get_tile_data_async: (self: DataSource, x: number, y: number, zoom_level: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null) => void
    get_tile_data_finish: (self: DataSource, result: Gio.AsyncResult) => GLib.Bytes | null
    start_request: (self: DataSource, x: number, y: number, zoom_level: number, cancellable: Gio.Cancellable | null) => DataSourceRequest
}

export abstract class DataSourceClass {

    // Own properties of Shumate-1.0.Shumate.DataSourceClass

    static name: string
}

export interface DataSourceRequestClass {

    // Own fields of Shumate-1.0.Shumate.DataSourceRequestClass

    parent_class: GObject.ObjectClass
}

export abstract class DataSourceRequestClass {

    // Own properties of Shumate-1.0.Shumate.DataSourceRequestClass

    static name: string
}

export interface FileCacheClass {

    // Own fields of Shumate-1.0.Shumate.FileCacheClass

    parent_class: GObject.ObjectClass
}

export abstract class FileCacheClass {

    // Own properties of Shumate-1.0.Shumate.FileCacheClass

    static name: string
}

export interface LayerClass {

    // Own fields of Shumate-1.0.Shumate.LayerClass

    parent_class: Gtk.WidgetClass
}

export abstract class LayerClass {

    // Own properties of Shumate-1.0.Shumate.LayerClass

    static name: string
}

export interface LicenseClass {

    // Own fields of Shumate-1.0.Shumate.LicenseClass

    parent_class: Gtk.WidgetClass
}

export abstract class LicenseClass {

    // Own properties of Shumate-1.0.Shumate.LicenseClass

    static name: string
}

export interface LocationInterface {

    // Own fields of Shumate-1.0.Shumate.LocationInterface

    get_latitude: (location: Location) => number
    get_longitude: (location: Location) => number
    set_location: (location: Location, latitude: number, longitude: number) => void
}

/**
 * An interface common to objects having latitude and longitude.
 * @record 
 */
export abstract class LocationInterface {

    // Own properties of Shumate-1.0.Shumate.LocationInterface

    static name: string
}

export interface MapClass {

    // Own fields of Shumate-1.0.Shumate.MapClass

    parent_class: Gtk.WidgetClass
}

export abstract class MapClass {

    // Own properties of Shumate-1.0.Shumate.MapClass

    static name: string
}

export interface MapLayerClass {

    // Own fields of Shumate-1.0.Shumate.MapLayerClass

    parent_class: LayerClass
}

export abstract class MapLayerClass {

    // Own properties of Shumate-1.0.Shumate.MapLayerClass

    static name: string
}

export interface MapSourceClass {

    // Own fields of Shumate-1.0.Shumate.MapSourceClass

    parent_class: GObject.ObjectClass
    fill_tile_async: (self: MapSource, tile: Tile, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null) => void
    fill_tile_finish: (self: MapSource, result: Gio.AsyncResult) => boolean
}

export abstract class MapSourceClass {

    // Own properties of Shumate-1.0.Shumate.MapSourceClass

    static name: string
}

export interface MapSourceRegistryClass {

    // Own fields of Shumate-1.0.Shumate.MapSourceRegistryClass

    parent_class: GObject.ObjectClass
}

export abstract class MapSourceRegistryClass {

    // Own properties of Shumate-1.0.Shumate.MapSourceRegistryClass

    static name: string
}

export interface MarkerClass {

    // Own fields of Shumate-1.0.Shumate.MarkerClass

    parent_class: Gtk.WidgetClass
}

export abstract class MarkerClass {

    // Own properties of Shumate-1.0.Shumate.MarkerClass

    static name: string
}

export interface MarkerLayerClass {

    // Own fields of Shumate-1.0.Shumate.MarkerLayerClass

    parent_class: LayerClass
}

export abstract class MarkerLayerClass {

    // Own properties of Shumate-1.0.Shumate.MarkerLayerClass

    static name: string
}

export interface PathLayerClass {

    // Own fields of Shumate-1.0.Shumate.PathLayerClass

    parent_class: LayerClass
}

export abstract class PathLayerClass {

    // Own properties of Shumate-1.0.Shumate.PathLayerClass

    static name: string
}

export interface PointClass {

    // Own fields of Shumate-1.0.Shumate.PointClass

    parent_class: MarkerClass
}

export abstract class PointClass {

    // Own properties of Shumate-1.0.Shumate.PointClass

    static name: string
}

export interface RasterRendererClass {

    // Own fields of Shumate-1.0.Shumate.RasterRendererClass

    parent_class: MapSourceClass
}

export abstract class RasterRendererClass {

    // Own properties of Shumate-1.0.Shumate.RasterRendererClass

    static name: string
}

export interface ScaleClass {

    // Own fields of Shumate-1.0.Shumate.ScaleClass

    parent_class: Gtk.WidgetClass
}

export abstract class ScaleClass {

    // Own properties of Shumate-1.0.Shumate.ScaleClass

    static name: string
}

export interface SimpleMapClass {

    // Own fields of Shumate-1.0.Shumate.SimpleMapClass

    parent_class: Gtk.WidgetClass
}

export abstract class SimpleMapClass {

    // Own properties of Shumate-1.0.Shumate.SimpleMapClass

    static name: string
}

export interface SymbolEventClass {

    // Own fields of Shumate-1.0.Shumate.SymbolEventClass

    parent_class: GObject.ObjectClass
}

export abstract class SymbolEventClass {

    // Own properties of Shumate-1.0.Shumate.SymbolEventClass

    static name: string
}

export interface TileClass {

    // Own fields of Shumate-1.0.Shumate.TileClass

    parent_class: GObject.ObjectClass
}

export abstract class TileClass {

    // Own properties of Shumate-1.0.Shumate.TileClass

    static name: string
}

export interface TileDownloaderClass {

    // Own fields of Shumate-1.0.Shumate.TileDownloaderClass

    parent_class: DataSourceClass
}

export abstract class TileDownloaderClass {

    // Own properties of Shumate-1.0.Shumate.TileDownloaderClass

    static name: string
}

export interface VectorRendererClass {

    // Own fields of Shumate-1.0.Shumate.VectorRendererClass

    parent_class: MapSourceClass
}

export abstract class VectorRendererClass {

    // Own properties of Shumate-1.0.Shumate.VectorRendererClass

    static name: string
}

export interface ViewportClass {

    // Own fields of Shumate-1.0.Shumate.ViewportClass

    parent_class: GObject.ObjectClass
}

export abstract class ViewportClass {

    // Own properties of Shumate-1.0.Shumate.ViewportClass

    static name: string
}

/**
 * Name of the imported GIR library
 * @see https://gitlab.gnome.org/GNOME/gjs/-/blob/master/gi/ns.cpp#L188
 */
export const __name__: string
/**
 * Version of the imported GIR library
 * @see https://gitlab.gnome.org/GNOME/gjs/-/blob/master/gi/ns.cpp#L189
 */
export const __version__: string
// END