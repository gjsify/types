// @ts-nocheck

/*
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/sammydre/ts-for-gjs
 */
/**
 * Champlain-0.12
 */

import type * as Gjs from './Gjs';
import type GObject from './GObject-2.0';
import type GLib from './GLib-2.0';
import type Clutter from './Clutter-1.0';
import type cairo from './cairo-1.0';
import type Json from './Json-1.0';
import type Gio from './Gio-2.0';
import type GL from './GL-1.0';
import type CoglPango from './CoglPango-1.0';
import type PangoCairo from './PangoCairo-1.0';
import type Pango from './Pango-1.0';
import type HarfBuzz from './HarfBuzz-0.0';
import type Cogl from './Cogl-1.0';
import type Atk from './Atk-1.0';

export namespace Champlain {

/**
 * Projections supported by the library.
 */
enum MapProjection {
    /**
     * Currently the only supported projection
     */
    MERCATOR,
}
/**
 * Selection mode
 */
enum SelectionMode {
    /**
     * No marker can be selected.
     */
    NONE,
    /**
     * Only one marker can be selected.
     */
    SINGLE,
    /**
     * Multiple marker can be selected.
     */
    MULTIPLE,
}
/**
 * Tile loading state.
 */
enum State {
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
 * Units used by the scale.
 */
enum Unit {
    /**
     * kilometers
     */
    KM,
    /**
     * miles
     */
    MILES,
}
/**
 * The major version of libchamplain (1, if %CHAMPLAIN_VERSION is 1.2.3)
 */
const MAJOR_VERSION: number
const MAP_SOURCE_MEMPHIS_LOCAL: string
const MAP_SOURCE_MEMPHIS_NETWORK: string
/**
 * Maps for Free Relief
 */
const MAP_SOURCE_MFF_RELIEF: string
/**
 * OpenAerialMap
 */
const MAP_SOURCE_OAM: string
/**
 * Mapquest Open Aerial
 */
const MAP_SOURCE_OSM_AERIAL_MAP: string
/**
 * OpenStreetMap Cycle Map
 */
const MAP_SOURCE_OSM_CYCLE_MAP: string
/**
 * OpenStreetMap Mapnik
 */
const MAP_SOURCE_OSM_MAPNIK: string
const MAP_SOURCE_OSM_MAPQUEST: string
/**
 * OpenStreetMap Osmarender
 */
const MAP_SOURCE_OSM_OSMARENDER: string
/**
 * OpenStreetMap Transport Map
 */
const MAP_SOURCE_OSM_TRANSPORT_MAP: string
/**
 * OpenWeatherMap clouds layer
 */
const MAP_SOURCE_OWM_CLOUDS: string
/**
 * OpenWeatherMap precipitation
 */
const MAP_SOURCE_OWM_PRECIPITATION: string
/**
 * OpenWeatherMap sea level pressure
 */
const MAP_SOURCE_OWM_PRESSURE: string
/**
 * OpenWeatherMap temperature
 */
const MAP_SOURCE_OWM_TEMPERATURE: string
/**
 * OpenWeatherMap wind
 */
const MAP_SOURCE_OWM_WIND: string
const MAX_LATITUDE: number
const MAX_LONGITUDE: number
/**
 * The micro version of libchamplain (3, if %CHAMPLAIN_VERSION is 1.2.3)
 */
const MICRO_VERSION: number
/**
 * The minor version of libchamplain (2, if %CHAMPLAIN_VERSION is 1.2.3)
 */
const MINOR_VERSION: number
const MIN_LATITUDE: number
const MIN_LONGITUDE: number
/**
 * The full version of libchamplain, like 1.2.3
 */
const VERSION: number
/**
 * Numerically encoded version of libchamplain, like 0x010203
 */
const VERSION_HEX: number
/**
 * The full version of libchamplain, in string form (suited for
 * string concatenation)
 */
const VERSION_S: string
interface Exportable_ConstructProps extends GObject.Object_ConstructProps {

    // Own constructor properties of Champlain-0.12.Champlain.Exportable

    /**
     * A #cairo_surface_t representation
     */
    surface?: cairo.Surface | null
}

interface Exportable {

    // Own properties of Champlain-0.12.Champlain.Exportable

    /**
     * A #cairo_surface_t representation
     */
    surface: cairo.Surface

    // Owm methods of Champlain-0.12.Champlain.Exportable

    /**
     * Gets the surface
     */
    get_surface(): cairo.Surface
    /**
     * Set a #cairo_surface_t to be associated with this tile.
     * @param surface the #cairo_surface_t
     */
    set_surface(surface: cairo.Surface): void

    // Own virtual methods of Champlain-0.12.Champlain.Exportable

    /**
     * Gets the surface
     * @virtual 
     */
    vfunc_get_surface(): cairo.Surface
    /**
     * Set a #cairo_surface_t to be associated with this tile.
     * @virtual 
     * @param surface the #cairo_surface_t
     */
    vfunc_set_surface(surface: cairo.Surface): void

    // Class property signals of Champlain-0.12.Champlain.Exportable

    connect(sigName: "notify::surface", callback: (($obj: Exportable, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::surface", callback: (($obj: Exportable, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::surface", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * An interface common to objects having a #cairo_surface_t representation.
 * @interface 
 */
class Exportable extends GObject.Object {

    // Own properties of Champlain-0.12.Champlain.Exportable

    static name: string
    static $gtype: GObject.GType<Exportable>

    // Constructors of Champlain-0.12.Champlain.Exportable

    constructor(config?: Exportable_ConstructProps) 
    _init(config?: Exportable_ConstructProps): void
}

interface Location_ConstructProps extends GObject.Object_ConstructProps {

    // Own constructor properties of Champlain-0.12.Champlain.Location

    /**
     * The latitude coordonate
     */
    latitude?: number | null
    /**
     * The longitude coordonate
     */
    longitude?: number | null
}

interface Location {

    // Own properties of Champlain-0.12.Champlain.Location

    /**
     * The latitude coordonate
     */
    latitude: number
    /**
     * The longitude coordonate
     */
    longitude: number

    // Owm methods of Champlain-0.12.Champlain.Location

    /**
     * Gets the latitude coordinate.
     */
    get_latitude(): number
    /**
     * Gets the longitude coordinate.
     */
    get_longitude(): number
    /**
     * Sets the coordinates of the location
     * @param latitude the latitude
     * @param longitude the longitude
     */
    set_location(latitude: number, longitude: number): void

    // Own virtual methods of Champlain-0.12.Champlain.Location

    /**
     * Gets the latitude coordinate.
     * @virtual 
     */
    vfunc_get_latitude(): number
    /**
     * Gets the longitude coordinate.
     * @virtual 
     */
    vfunc_get_longitude(): number
    /**
     * Sets the coordinates of the location
     * @virtual 
     * @param latitude the latitude
     * @param longitude the longitude
     */
    vfunc_set_location(latitude: number, longitude: number): void

    // Class property signals of Champlain-0.12.Champlain.Location

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
 * An interface common to objects having latitude and longitude.
 * @interface 
 */
class Location extends GObject.Object {

    // Own properties of Champlain-0.12.Champlain.Location

    static name: string
    static $gtype: GObject.GType<Location>

    // Constructors of Champlain-0.12.Champlain.Location

    constructor(config?: Location_ConstructProps) 
    _init(config?: Location_ConstructProps): void
}

interface Adjustment_ConstructProps extends GObject.Object_ConstructProps {

    // Own constructor properties of Champlain-0.12.Champlain.Adjustment

    lower?: number | null
    step_increment?: number | null
    upper?: number | null
    value?: number | null
}

/**
 * Signal callback interface for `changed`
 */
interface Adjustment_ChangedSignalCallback {
    ($obj: Adjustment): void
}

interface Adjustment {

    // Own properties of Champlain-0.12.Champlain.Adjustment

    lower: number
    step_increment: number
    upper: number
    value: number

    // Owm methods of Champlain-0.12.Champlain.Adjustment

    clamp(interpolate: boolean, n_frames: number, fps: number): boolean
    get_value(): number
    get_values(value: number, lower: number, upper: number, step_increment: number): void
    interpolate(value: number, n_frames: number, fps: number): void
    interpolate_stop(): void
    set_value(value: number): void
    set_values(value: number, lower: number, upper: number, step_increment: number): void

    // Own virtual methods of Champlain-0.12.Champlain.Adjustment

    vfunc_changed(): void

    // Own signals of Champlain-0.12.Champlain.Adjustment

    connect(sigName: "changed", callback: Adjustment_ChangedSignalCallback): number
    connect_after(sigName: "changed", callback: Adjustment_ChangedSignalCallback): number
    emit(sigName: "changed", ...args: any[]): void

    // Class property signals of Champlain-0.12.Champlain.Adjustment

    connect(sigName: "notify::lower", callback: (($obj: Adjustment, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::lower", callback: (($obj: Adjustment, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::lower", ...args: any[]): void
    connect(sigName: "notify::step-increment", callback: (($obj: Adjustment, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::step-increment", callback: (($obj: Adjustment, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::step-increment", ...args: any[]): void
    connect(sigName: "notify::upper", callback: (($obj: Adjustment, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::upper", callback: (($obj: Adjustment, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::upper", ...args: any[]): void
    connect(sigName: "notify::value", callback: (($obj: Adjustment, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::value", callback: (($obj: Adjustment, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::value", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * Class for handling an interval between to values. The contents of
 * the #ChamplainAdjustment are private and should be accessed using the
 * public API.
 * @class 
 */
class Adjustment extends GObject.Object {

    // Own properties of Champlain-0.12.Champlain.Adjustment

    static name: string
    static $gtype: GObject.GType<Adjustment>

    // Constructors of Champlain-0.12.Champlain.Adjustment

    constructor(config?: Adjustment_ConstructProps) 
    constructor(value: number, lower: number, upper: number, step_increment: number) 
    static new(value: number, lower: number, upper: number, step_increment: number): Adjustment
    _init(config?: Adjustment_ConstructProps): void
}

interface Coordinate_ConstructProps extends Location_ConstructProps, GObject.InitiallyUnowned_ConstructProps {
}

interface Coordinate extends Location {

    // Own fields of Champlain-0.12.Champlain.Coordinate

    parent: GObject.InitiallyUnowned
    priv: CoordinatePrivate

    // Class property signals of Champlain-0.12.Champlain.Coordinate

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
 * The #ChamplainCoordinate structure contains only private data
 * and should be accessed using the provided API
 * @class 
 */
class Coordinate extends GObject.InitiallyUnowned {

    // Own properties of Champlain-0.12.Champlain.Coordinate

    static name: string
    static $gtype: GObject.GType<Coordinate>

    // Constructors of Champlain-0.12.Champlain.Coordinate

    constructor(config?: Coordinate_ConstructProps) 
    /**
     * Creates a new instance of #ChamplainCoordinate.
     * @constructor 
     */
    constructor() 
    /**
     * Creates a new instance of #ChamplainCoordinate.
     * @constructor 
     */
    static new(): Coordinate
    /**
     * Creates a new instance of #ChamplainCoordinate initialized with the given
     * coordinates.
     * @constructor 
     * @param latitude the latitude coordinate
     * @param longitude the longitude coordinate
     */
    static new_full(latitude: number, longitude: number): Coordinate
    _init(config?: Coordinate_ConstructProps): void
}

interface CustomMarker_ConstructProps extends Atk.ImplementorIface_ConstructProps, Location_ConstructProps, Clutter.Animatable_ConstructProps, Clutter.Container_ConstructProps, Clutter.Scriptable_ConstructProps, Marker_ConstructProps {
}

interface CustomMarker extends Atk.ImplementorIface, Location, Clutter.Animatable, Clutter.Container, Clutter.Scriptable {

    // Own fields of Champlain-0.12.Champlain.CustomMarker

    parent: Marker
    priv: CustomMarkerPrivate

    // Class property signals of Champlain-0.12.Champlain.CustomMarker

    connect(sigName: "notify::draggable", callback: (($obj: CustomMarker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::draggable", callback: (($obj: CustomMarker, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::draggable", ...args: any[]): void
    connect(sigName: "notify::selectable", callback: (($obj: CustomMarker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::selectable", callback: (($obj: CustomMarker, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::selectable", ...args: any[]): void
    connect(sigName: "notify::selected", callback: (($obj: CustomMarker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::selected", callback: (($obj: CustomMarker, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::selected", ...args: any[]): void
    connect(sigName: "notify::actions", callback: (($obj: CustomMarker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::actions", callback: (($obj: CustomMarker, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::actions", ...args: any[]): void
    connect(sigName: "notify::allocation", callback: (($obj: CustomMarker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::allocation", callback: (($obj: CustomMarker, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::allocation", ...args: any[]): void
    connect(sigName: "notify::anchor-gravity", callback: (($obj: CustomMarker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::anchor-gravity", callback: (($obj: CustomMarker, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::anchor-gravity", ...args: any[]): void
    connect(sigName: "notify::anchor-x", callback: (($obj: CustomMarker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::anchor-x", callback: (($obj: CustomMarker, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::anchor-x", ...args: any[]): void
    connect(sigName: "notify::anchor-y", callback: (($obj: CustomMarker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::anchor-y", callback: (($obj: CustomMarker, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::anchor-y", ...args: any[]): void
    connect(sigName: "notify::background-color", callback: (($obj: CustomMarker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::background-color", callback: (($obj: CustomMarker, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::background-color", ...args: any[]): void
    connect(sigName: "notify::background-color-set", callback: (($obj: CustomMarker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::background-color-set", callback: (($obj: CustomMarker, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::background-color-set", ...args: any[]): void
    connect(sigName: "notify::child-transform", callback: (($obj: CustomMarker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::child-transform", callback: (($obj: CustomMarker, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::child-transform", ...args: any[]): void
    connect(sigName: "notify::child-transform-set", callback: (($obj: CustomMarker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::child-transform-set", callback: (($obj: CustomMarker, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::child-transform-set", ...args: any[]): void
    connect(sigName: "notify::clip", callback: (($obj: CustomMarker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::clip", callback: (($obj: CustomMarker, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::clip", ...args: any[]): void
    connect(sigName: "notify::clip-rect", callback: (($obj: CustomMarker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::clip-rect", callback: (($obj: CustomMarker, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::clip-rect", ...args: any[]): void
    connect(sigName: "notify::clip-to-allocation", callback: (($obj: CustomMarker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::clip-to-allocation", callback: (($obj: CustomMarker, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::clip-to-allocation", ...args: any[]): void
    connect(sigName: "notify::constraints", callback: (($obj: CustomMarker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::constraints", callback: (($obj: CustomMarker, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::constraints", ...args: any[]): void
    connect(sigName: "notify::content", callback: (($obj: CustomMarker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::content", callback: (($obj: CustomMarker, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::content", ...args: any[]): void
    connect(sigName: "notify::content-box", callback: (($obj: CustomMarker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::content-box", callback: (($obj: CustomMarker, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::content-box", ...args: any[]): void
    connect(sigName: "notify::content-gravity", callback: (($obj: CustomMarker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::content-gravity", callback: (($obj: CustomMarker, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::content-gravity", ...args: any[]): void
    connect(sigName: "notify::content-repeat", callback: (($obj: CustomMarker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::content-repeat", callback: (($obj: CustomMarker, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::content-repeat", ...args: any[]): void
    connect(sigName: "notify::depth", callback: (($obj: CustomMarker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::depth", callback: (($obj: CustomMarker, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::depth", ...args: any[]): void
    connect(sigName: "notify::effect", callback: (($obj: CustomMarker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::effect", callback: (($obj: CustomMarker, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::effect", ...args: any[]): void
    connect(sigName: "notify::first-child", callback: (($obj: CustomMarker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::first-child", callback: (($obj: CustomMarker, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::first-child", ...args: any[]): void
    connect(sigName: "notify::fixed-position-set", callback: (($obj: CustomMarker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fixed-position-set", callback: (($obj: CustomMarker, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::fixed-position-set", ...args: any[]): void
    connect(sigName: "notify::fixed-x", callback: (($obj: CustomMarker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fixed-x", callback: (($obj: CustomMarker, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::fixed-x", ...args: any[]): void
    connect(sigName: "notify::fixed-y", callback: (($obj: CustomMarker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fixed-y", callback: (($obj: CustomMarker, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::fixed-y", ...args: any[]): void
    connect(sigName: "notify::has-clip", callback: (($obj: CustomMarker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-clip", callback: (($obj: CustomMarker, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-clip", ...args: any[]): void
    connect(sigName: "notify::has-pointer", callback: (($obj: CustomMarker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-pointer", callback: (($obj: CustomMarker, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-pointer", ...args: any[]): void
    connect(sigName: "notify::height", callback: (($obj: CustomMarker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height", callback: (($obj: CustomMarker, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::height", ...args: any[]): void
    connect(sigName: "notify::last-child", callback: (($obj: CustomMarker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::last-child", callback: (($obj: CustomMarker, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::last-child", ...args: any[]): void
    connect(sigName: "notify::layout-manager", callback: (($obj: CustomMarker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::layout-manager", callback: (($obj: CustomMarker, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::layout-manager", ...args: any[]): void
    connect(sigName: "notify::magnification-filter", callback: (($obj: CustomMarker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::magnification-filter", callback: (($obj: CustomMarker, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::magnification-filter", ...args: any[]): void
    connect(sigName: "notify::mapped", callback: (($obj: CustomMarker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::mapped", callback: (($obj: CustomMarker, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::mapped", ...args: any[]): void
    connect(sigName: "notify::margin-bottom", callback: (($obj: CustomMarker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-bottom", callback: (($obj: CustomMarker, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-bottom", ...args: any[]): void
    connect(sigName: "notify::margin-left", callback: (($obj: CustomMarker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-left", callback: (($obj: CustomMarker, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-left", ...args: any[]): void
    connect(sigName: "notify::margin-right", callback: (($obj: CustomMarker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-right", callback: (($obj: CustomMarker, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-right", ...args: any[]): void
    connect(sigName: "notify::margin-top", callback: (($obj: CustomMarker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-top", callback: (($obj: CustomMarker, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-top", ...args: any[]): void
    connect(sigName: "notify::min-height", callback: (($obj: CustomMarker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::min-height", callback: (($obj: CustomMarker, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::min-height", ...args: any[]): void
    connect(sigName: "notify::min-height-set", callback: (($obj: CustomMarker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::min-height-set", callback: (($obj: CustomMarker, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::min-height-set", ...args: any[]): void
    connect(sigName: "notify::min-width", callback: (($obj: CustomMarker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::min-width", callback: (($obj: CustomMarker, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::min-width", ...args: any[]): void
    connect(sigName: "notify::min-width-set", callback: (($obj: CustomMarker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::min-width-set", callback: (($obj: CustomMarker, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::min-width-set", ...args: any[]): void
    connect(sigName: "notify::minification-filter", callback: (($obj: CustomMarker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::minification-filter", callback: (($obj: CustomMarker, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::minification-filter", ...args: any[]): void
    connect(sigName: "notify::name", callback: (($obj: CustomMarker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: CustomMarker, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::natural-height", callback: (($obj: CustomMarker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::natural-height", callback: (($obj: CustomMarker, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::natural-height", ...args: any[]): void
    connect(sigName: "notify::natural-height-set", callback: (($obj: CustomMarker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::natural-height-set", callback: (($obj: CustomMarker, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::natural-height-set", ...args: any[]): void
    connect(sigName: "notify::natural-width", callback: (($obj: CustomMarker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::natural-width", callback: (($obj: CustomMarker, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::natural-width", ...args: any[]): void
    connect(sigName: "notify::natural-width-set", callback: (($obj: CustomMarker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::natural-width-set", callback: (($obj: CustomMarker, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::natural-width-set", ...args: any[]): void
    connect(sigName: "notify::offscreen-redirect", callback: (($obj: CustomMarker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::offscreen-redirect", callback: (($obj: CustomMarker, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::offscreen-redirect", ...args: any[]): void
    connect(sigName: "notify::opacity", callback: (($obj: CustomMarker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opacity", callback: (($obj: CustomMarker, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::opacity", ...args: any[]): void
    connect(sigName: "notify::pivot-point", callback: (($obj: CustomMarker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::pivot-point", callback: (($obj: CustomMarker, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::pivot-point", ...args: any[]): void
    connect(sigName: "notify::pivot-point-z", callback: (($obj: CustomMarker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::pivot-point-z", callback: (($obj: CustomMarker, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::pivot-point-z", ...args: any[]): void
    connect(sigName: "notify::position", callback: (($obj: CustomMarker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::position", callback: (($obj: CustomMarker, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::position", ...args: any[]): void
    connect(sigName: "notify::reactive", callback: (($obj: CustomMarker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::reactive", callback: (($obj: CustomMarker, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::reactive", ...args: any[]): void
    connect(sigName: "notify::realized", callback: (($obj: CustomMarker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::realized", callback: (($obj: CustomMarker, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::realized", ...args: any[]): void
    connect(sigName: "notify::request-mode", callback: (($obj: CustomMarker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::request-mode", callback: (($obj: CustomMarker, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::request-mode", ...args: any[]): void
    connect(sigName: "notify::rotation-angle-x", callback: (($obj: CustomMarker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::rotation-angle-x", callback: (($obj: CustomMarker, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::rotation-angle-x", ...args: any[]): void
    connect(sigName: "notify::rotation-angle-y", callback: (($obj: CustomMarker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::rotation-angle-y", callback: (($obj: CustomMarker, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::rotation-angle-y", ...args: any[]): void
    connect(sigName: "notify::rotation-angle-z", callback: (($obj: CustomMarker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::rotation-angle-z", callback: (($obj: CustomMarker, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::rotation-angle-z", ...args: any[]): void
    connect(sigName: "notify::rotation-center-x", callback: (($obj: CustomMarker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::rotation-center-x", callback: (($obj: CustomMarker, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::rotation-center-x", ...args: any[]): void
    connect(sigName: "notify::rotation-center-y", callback: (($obj: CustomMarker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::rotation-center-y", callback: (($obj: CustomMarker, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::rotation-center-y", ...args: any[]): void
    connect(sigName: "notify::rotation-center-z", callback: (($obj: CustomMarker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::rotation-center-z", callback: (($obj: CustomMarker, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::rotation-center-z", ...args: any[]): void
    connect(sigName: "notify::rotation-center-z-gravity", callback: (($obj: CustomMarker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::rotation-center-z-gravity", callback: (($obj: CustomMarker, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::rotation-center-z-gravity", ...args: any[]): void
    connect(sigName: "notify::scale-center-x", callback: (($obj: CustomMarker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-center-x", callback: (($obj: CustomMarker, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::scale-center-x", ...args: any[]): void
    connect(sigName: "notify::scale-center-y", callback: (($obj: CustomMarker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-center-y", callback: (($obj: CustomMarker, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::scale-center-y", ...args: any[]): void
    connect(sigName: "notify::scale-gravity", callback: (($obj: CustomMarker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-gravity", callback: (($obj: CustomMarker, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::scale-gravity", ...args: any[]): void
    connect(sigName: "notify::scale-x", callback: (($obj: CustomMarker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-x", callback: (($obj: CustomMarker, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::scale-x", ...args: any[]): void
    connect(sigName: "notify::scale-y", callback: (($obj: CustomMarker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-y", callback: (($obj: CustomMarker, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::scale-y", ...args: any[]): void
    connect(sigName: "notify::scale-z", callback: (($obj: CustomMarker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-z", callback: (($obj: CustomMarker, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::scale-z", ...args: any[]): void
    connect(sigName: "notify::show-on-set-parent", callback: (($obj: CustomMarker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::show-on-set-parent", callback: (($obj: CustomMarker, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::show-on-set-parent", ...args: any[]): void
    connect(sigName: "notify::size", callback: (($obj: CustomMarker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::size", callback: (($obj: CustomMarker, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::size", ...args: any[]): void
    connect(sigName: "notify::text-direction", callback: (($obj: CustomMarker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::text-direction", callback: (($obj: CustomMarker, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::text-direction", ...args: any[]): void
    connect(sigName: "notify::transform", callback: (($obj: CustomMarker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::transform", callback: (($obj: CustomMarker, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::transform", ...args: any[]): void
    connect(sigName: "notify::transform-set", callback: (($obj: CustomMarker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::transform-set", callback: (($obj: CustomMarker, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::transform-set", ...args: any[]): void
    connect(sigName: "notify::translation-x", callback: (($obj: CustomMarker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::translation-x", callback: (($obj: CustomMarker, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::translation-x", ...args: any[]): void
    connect(sigName: "notify::translation-y", callback: (($obj: CustomMarker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::translation-y", callback: (($obj: CustomMarker, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::translation-y", ...args: any[]): void
    connect(sigName: "notify::translation-z", callback: (($obj: CustomMarker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::translation-z", callback: (($obj: CustomMarker, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::translation-z", ...args: any[]): void
    connect(sigName: "notify::visible", callback: (($obj: CustomMarker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visible", callback: (($obj: CustomMarker, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::visible", ...args: any[]): void
    connect(sigName: "notify::width", callback: (($obj: CustomMarker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::width", callback: (($obj: CustomMarker, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::width", ...args: any[]): void
    connect(sigName: "notify::x", callback: (($obj: CustomMarker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::x", callback: (($obj: CustomMarker, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::x", ...args: any[]): void
    connect(sigName: "notify::x-align", callback: (($obj: CustomMarker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::x-align", callback: (($obj: CustomMarker, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::x-align", ...args: any[]): void
    connect(sigName: "notify::x-expand", callback: (($obj: CustomMarker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::x-expand", callback: (($obj: CustomMarker, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::x-expand", ...args: any[]): void
    connect(sigName: "notify::y", callback: (($obj: CustomMarker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::y", callback: (($obj: CustomMarker, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::y", ...args: any[]): void
    connect(sigName: "notify::y-align", callback: (($obj: CustomMarker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::y-align", callback: (($obj: CustomMarker, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::y-align", ...args: any[]): void
    connect(sigName: "notify::y-expand", callback: (($obj: CustomMarker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::y-expand", callback: (($obj: CustomMarker, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::y-expand", ...args: any[]): void
    connect(sigName: "notify::z-position", callback: (($obj: CustomMarker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::z-position", callback: (($obj: CustomMarker, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::z-position", ...args: any[]): void
    connect(sigName: "notify::latitude", callback: (($obj: CustomMarker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::latitude", callback: (($obj: CustomMarker, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::latitude", ...args: any[]): void
    connect(sigName: "notify::longitude", callback: (($obj: CustomMarker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::longitude", callback: (($obj: CustomMarker, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::longitude", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * The #ChamplainCustomMarker structure contains only private data
 * and should be accessed using the provided API
 * @class 
 */
class CustomMarker extends Marker {

    // Own properties of Champlain-0.12.Champlain.CustomMarker

    static name: string
    static $gtype: GObject.GType<CustomMarker>

    // Constructors of Champlain-0.12.Champlain.CustomMarker

    constructor(config?: CustomMarker_ConstructProps) 
    /**
     * Creates an instance of #ChamplainCustomMarker.
     * @constructor 
     */
    constructor() 
    /**
     * Creates an instance of #ChamplainCustomMarker.
     * @constructor 
     */
    static new(): CustomMarker
    _init(config?: CustomMarker_ConstructProps): void
}

interface ErrorTileRenderer_ConstructProps extends Renderer_ConstructProps {

    // Own constructor properties of Champlain-0.12.Champlain.ErrorTileRenderer

    /**
     * The size of the rendered tile.
     */
    tile_size?: number | null
}

interface ErrorTileRenderer {

    // Own properties of Champlain-0.12.Champlain.ErrorTileRenderer

    /**
     * The size of the rendered tile.
     */
    tile_size: number

    // Own fields of Champlain-0.12.Champlain.ErrorTileRenderer

    parent: Renderer
    priv: ErrorTileRendererPrivate

    // Owm methods of Champlain-0.12.Champlain.ErrorTileRenderer

    /**
     * Gets the size of the rendered error tiles.
     */
    get_tile_size(): number
    /**
     * Sets the size of the rendered error tile.
     * @param size the size of the rendered error tiles
     */
    set_tile_size(size: number): void

    // Conflicting methods

    set_data(...args: any[]): any

    // Class property signals of Champlain-0.12.Champlain.ErrorTileRenderer

    connect(sigName: "notify::tile-size", callback: (($obj: ErrorTileRenderer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tile-size", callback: (($obj: ErrorTileRenderer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tile-size", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * The #ChamplainErrorTileRenderer structure contains only private data
 * and should be accessed using the provided API
 * @class 
 */
class ErrorTileRenderer extends Renderer {

    // Own properties of Champlain-0.12.Champlain.ErrorTileRenderer

    static name: string
    static $gtype: GObject.GType<ErrorTileRenderer>

    // Constructors of Champlain-0.12.Champlain.ErrorTileRenderer

    constructor(config?: ErrorTileRenderer_ConstructProps) 
    /**
     * Constructor of a #ChamplainErrorTileRenderer.
     * @constructor 
     * @param tile_size the size of the rendered error tile
     */
    constructor(tile_size: number) 
    /**
     * Constructor of a #ChamplainErrorTileRenderer.
     * @constructor 
     * @param tile_size the size of the rendered error tile
     */
    static new(tile_size: number): ErrorTileRenderer
    _init(config?: ErrorTileRenderer_ConstructProps): void
}

interface FileCache_ConstructProps extends TileCache_ConstructProps {

    // Own constructor properties of Champlain-0.12.Champlain.FileCache

    /**
     * The directory where the tile database is stored.
     */
    cache_dir?: string | null
    /**
     * The cache size limit in bytes.
     * 
     * Note: this new value will not be applied until you call champlain_file_cache_purge()
     */
    size_limit?: number | null
}

interface FileCache {

    // Own properties of Champlain-0.12.Champlain.FileCache

    /**
     * The directory where the tile database is stored.
     */
    readonly cache_dir: string
    /**
     * The cache size limit in bytes.
     * 
     * Note: this new value will not be applied until you call champlain_file_cache_purge()
     */
    size_limit: number

    // Own fields of Champlain-0.12.Champlain.FileCache

    parent_instance: TileCache
    priv: FileCachePrivate

    // Owm methods of Champlain-0.12.Champlain.FileCache

    /**
     * Gets the directory where the cache database is stored.
     */
    get_cache_dir(): string
    /**
     * Gets the cache size limit in bytes.
     */
    get_size_limit(): number
    /**
     * Purge the cache from the less popular tiles until cache's size limit is reached.
     */
    purge(): void
    /**
     * Purge the cache from the less popular tiles until cache's size limit is reached.
     * This is a non blocking call as the purge will happen when the application is idle
     */
    purge_on_idle(): void
    /**
     * Sets the cache size limit in bytes.
     * @param size_limit the cache limit in bytes
     */
    set_size_limit(size_limit: number): void

    // Class property signals of Champlain-0.12.Champlain.FileCache

    connect(sigName: "notify::cache-dir", callback: (($obj: FileCache, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::cache-dir", callback: (($obj: FileCache, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::cache-dir", ...args: any[]): void
    connect(sigName: "notify::size-limit", callback: (($obj: FileCache, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::size-limit", callback: (($obj: FileCache, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::size-limit", ...args: any[]): void
    connect(sigName: "notify::next-source", callback: (($obj: FileCache, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::next-source", callback: (($obj: FileCache, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::next-source", ...args: any[]): void
    connect(sigName: "notify::renderer", callback: (($obj: FileCache, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::renderer", callback: (($obj: FileCache, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::renderer", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * The #ChamplainFileCache structure contains only private data
 * and should be accessed using the provided API
 * @class 
 */
class FileCache extends TileCache {

    // Own properties of Champlain-0.12.Champlain.FileCache

    static name: string
    static $gtype: GObject.GType<FileCache>

    // Constructors of Champlain-0.12.Champlain.FileCache

    constructor(config?: FileCache_ConstructProps) 
    /**
     * Constructor of #ChamplainFileCache.
     * @constructor 
     * @param size_limit maximum size of the cache in bytes
     * @param cache_dir the directory where the cache is created. When cache_dir == NULL, a cache in ~/.cache/champlain is used.
     * @param renderer the #ChamplainRenderer used for tiles rendering
     */
    static new_full(size_limit: number, cache_dir: string | null, renderer: Renderer): FileCache
    _init(config?: FileCache_ConstructProps): void
}

interface FileTileSource_ConstructProps extends TileSource_ConstructProps {
}

interface FileTileSource {

    // Conflicting properties

    parent_instance: any
    priv: any

    // Own fields of Champlain-0.12.Champlain.FileTileSource

    parent: TileSource

    // Owm methods of Champlain-0.12.Champlain.FileTileSource

    /**
     * Loads the OpenStreetMap XML file at the given path.
     * @param map_path a path to a map data file
     */
    load_map_data(map_path: string): void

    // Class property signals of Champlain-0.12.Champlain.FileTileSource

    connect(sigName: "notify::cache", callback: (($obj: FileTileSource, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::cache", callback: (($obj: FileTileSource, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::cache", ...args: any[]): void
    connect(sigName: "notify::id", callback: (($obj: FileTileSource, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::id", callback: (($obj: FileTileSource, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::id", ...args: any[]): void
    connect(sigName: "notify::license", callback: (($obj: FileTileSource, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::license", callback: (($obj: FileTileSource, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::license", ...args: any[]): void
    connect(sigName: "notify::license-uri", callback: (($obj: FileTileSource, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::license-uri", callback: (($obj: FileTileSource, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::license-uri", ...args: any[]): void
    connect(sigName: "notify::max-zoom-level", callback: (($obj: FileTileSource, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::max-zoom-level", callback: (($obj: FileTileSource, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::max-zoom-level", ...args: any[]): void
    connect(sigName: "notify::min-zoom-level", callback: (($obj: FileTileSource, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::min-zoom-level", callback: (($obj: FileTileSource, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::min-zoom-level", ...args: any[]): void
    connect(sigName: "notify::name", callback: (($obj: FileTileSource, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: FileTileSource, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::projection", callback: (($obj: FileTileSource, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::projection", callback: (($obj: FileTileSource, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::projection", ...args: any[]): void
    connect(sigName: "notify::tile-size", callback: (($obj: FileTileSource, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tile-size", callback: (($obj: FileTileSource, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tile-size", ...args: any[]): void
    connect(sigName: "notify::next-source", callback: (($obj: FileTileSource, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::next-source", callback: (($obj: FileTileSource, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::next-source", ...args: any[]): void
    connect(sigName: "notify::renderer", callback: (($obj: FileTileSource, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::renderer", callback: (($obj: FileTileSource, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::renderer", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * The #ChamplainFileTileSource structure contains only private data
 * and should be accessed using the provided API
 * @class 
 */
class FileTileSource extends TileSource {

    // Own properties of Champlain-0.12.Champlain.FileTileSource

    static name: string
    static $gtype: GObject.GType<FileTileSource>

    // Constructors of Champlain-0.12.Champlain.FileTileSource

    constructor(config?: FileTileSource_ConstructProps) 
    /**
     * Constructor of #ChamplainFileTileSource.
     * @constructor 
     * @param id the map source's id
     * @param name the map source's name
     * @param license the map source's license
     * @param license_uri the map source's license URI
     * @param min_zoom the map source's minimum zoom level
     * @param max_zoom the map source's maximum zoom level
     * @param tile_size the map source's tile size (in pixels)
     * @param projection the map source's projection
     * @param renderer the #ChamplainRenderer used to render tiles
     */
    static new_full(id: string, name: string, license: string, license_uri: string, min_zoom: number, max_zoom: number, tile_size: number, projection: MapProjection, renderer: Renderer): FileTileSource
    _init(config?: FileTileSource_ConstructProps): void
}

interface ImageRenderer_ConstructProps extends Renderer_ConstructProps {
}

interface ImageRenderer {

    // Own fields of Champlain-0.12.Champlain.ImageRenderer

    parent: Renderer
    priv: ImageRendererPrivate

    // Conflicting methods

    set_data(...args: any[]): any

    // Class property signals of Champlain-0.12.Champlain.ImageRenderer

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * The #ChamplainImageRenderer structure contains only private data
 * and should be accessed using the provided API
 * @class 
 */
class ImageRenderer extends Renderer {

    // Own properties of Champlain-0.12.Champlain.ImageRenderer

    static name: string
    static $gtype: GObject.GType<ImageRenderer>

    // Constructors of Champlain-0.12.Champlain.ImageRenderer

    constructor(config?: ImageRenderer_ConstructProps) 
    /**
     * Constructor of #ChamplainImageRenderer.
     * @constructor 
     */
    constructor() 
    /**
     * Constructor of #ChamplainImageRenderer.
     * @constructor 
     */
    static new(): ImageRenderer
    _init(config?: ImageRenderer_ConstructProps): void
}

interface KineticScrollView_ConstructProps extends Atk.ImplementorIface_ConstructProps, Clutter.Animatable_ConstructProps, Clutter.Container_ConstructProps, Clutter.Scriptable_ConstructProps, Clutter.Actor_ConstructProps {

    // Own constructor properties of Champlain-0.12.Champlain.KineticScrollView

    decel_rate?: number | null
    mode?: boolean | null
    motion_buffer?: number | null
}

/**
 * Signal callback interface for `panning-completed`
 */
interface KineticScrollView_PanningCompletedSignalCallback {
    ($obj: KineticScrollView): void
}

interface KineticScrollView extends Atk.ImplementorIface, Clutter.Animatable, Clutter.Container, Clutter.Scriptable {

    // Own properties of Champlain-0.12.Champlain.KineticScrollView

    decel_rate: number
    mode: boolean
    motion_buffer: number

    // Owm methods of Champlain-0.12.Champlain.KineticScrollView

    stop(): void

    // Own signals of Champlain-0.12.Champlain.KineticScrollView

    connect(sigName: "panning-completed", callback: KineticScrollView_PanningCompletedSignalCallback): number
    connect_after(sigName: "panning-completed", callback: KineticScrollView_PanningCompletedSignalCallback): number
    emit(sigName: "panning-completed", ...args: any[]): void

    // Class property signals of Champlain-0.12.Champlain.KineticScrollView

    connect(sigName: "notify::decel-rate", callback: (($obj: KineticScrollView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::decel-rate", callback: (($obj: KineticScrollView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::decel-rate", ...args: any[]): void
    connect(sigName: "notify::mode", callback: (($obj: KineticScrollView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::mode", callback: (($obj: KineticScrollView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::mode", ...args: any[]): void
    connect(sigName: "notify::motion-buffer", callback: (($obj: KineticScrollView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::motion-buffer", callback: (($obj: KineticScrollView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::motion-buffer", ...args: any[]): void
    connect(sigName: "notify::actions", callback: (($obj: KineticScrollView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::actions", callback: (($obj: KineticScrollView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::actions", ...args: any[]): void
    connect(sigName: "notify::allocation", callback: (($obj: KineticScrollView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::allocation", callback: (($obj: KineticScrollView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::allocation", ...args: any[]): void
    connect(sigName: "notify::anchor-gravity", callback: (($obj: KineticScrollView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::anchor-gravity", callback: (($obj: KineticScrollView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::anchor-gravity", ...args: any[]): void
    connect(sigName: "notify::anchor-x", callback: (($obj: KineticScrollView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::anchor-x", callback: (($obj: KineticScrollView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::anchor-x", ...args: any[]): void
    connect(sigName: "notify::anchor-y", callback: (($obj: KineticScrollView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::anchor-y", callback: (($obj: KineticScrollView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::anchor-y", ...args: any[]): void
    connect(sigName: "notify::background-color", callback: (($obj: KineticScrollView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::background-color", callback: (($obj: KineticScrollView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::background-color", ...args: any[]): void
    connect(sigName: "notify::background-color-set", callback: (($obj: KineticScrollView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::background-color-set", callback: (($obj: KineticScrollView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::background-color-set", ...args: any[]): void
    connect(sigName: "notify::child-transform", callback: (($obj: KineticScrollView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::child-transform", callback: (($obj: KineticScrollView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::child-transform", ...args: any[]): void
    connect(sigName: "notify::child-transform-set", callback: (($obj: KineticScrollView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::child-transform-set", callback: (($obj: KineticScrollView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::child-transform-set", ...args: any[]): void
    connect(sigName: "notify::clip", callback: (($obj: KineticScrollView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::clip", callback: (($obj: KineticScrollView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::clip", ...args: any[]): void
    connect(sigName: "notify::clip-rect", callback: (($obj: KineticScrollView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::clip-rect", callback: (($obj: KineticScrollView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::clip-rect", ...args: any[]): void
    connect(sigName: "notify::clip-to-allocation", callback: (($obj: KineticScrollView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::clip-to-allocation", callback: (($obj: KineticScrollView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::clip-to-allocation", ...args: any[]): void
    connect(sigName: "notify::constraints", callback: (($obj: KineticScrollView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::constraints", callback: (($obj: KineticScrollView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::constraints", ...args: any[]): void
    connect(sigName: "notify::content", callback: (($obj: KineticScrollView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::content", callback: (($obj: KineticScrollView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::content", ...args: any[]): void
    connect(sigName: "notify::content-box", callback: (($obj: KineticScrollView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::content-box", callback: (($obj: KineticScrollView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::content-box", ...args: any[]): void
    connect(sigName: "notify::content-gravity", callback: (($obj: KineticScrollView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::content-gravity", callback: (($obj: KineticScrollView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::content-gravity", ...args: any[]): void
    connect(sigName: "notify::content-repeat", callback: (($obj: KineticScrollView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::content-repeat", callback: (($obj: KineticScrollView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::content-repeat", ...args: any[]): void
    connect(sigName: "notify::depth", callback: (($obj: KineticScrollView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::depth", callback: (($obj: KineticScrollView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::depth", ...args: any[]): void
    connect(sigName: "notify::effect", callback: (($obj: KineticScrollView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::effect", callback: (($obj: KineticScrollView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::effect", ...args: any[]): void
    connect(sigName: "notify::first-child", callback: (($obj: KineticScrollView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::first-child", callback: (($obj: KineticScrollView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::first-child", ...args: any[]): void
    connect(sigName: "notify::fixed-position-set", callback: (($obj: KineticScrollView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fixed-position-set", callback: (($obj: KineticScrollView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::fixed-position-set", ...args: any[]): void
    connect(sigName: "notify::fixed-x", callback: (($obj: KineticScrollView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fixed-x", callback: (($obj: KineticScrollView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::fixed-x", ...args: any[]): void
    connect(sigName: "notify::fixed-y", callback: (($obj: KineticScrollView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fixed-y", callback: (($obj: KineticScrollView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::fixed-y", ...args: any[]): void
    connect(sigName: "notify::has-clip", callback: (($obj: KineticScrollView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-clip", callback: (($obj: KineticScrollView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-clip", ...args: any[]): void
    connect(sigName: "notify::has-pointer", callback: (($obj: KineticScrollView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-pointer", callback: (($obj: KineticScrollView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-pointer", ...args: any[]): void
    connect(sigName: "notify::height", callback: (($obj: KineticScrollView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height", callback: (($obj: KineticScrollView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::height", ...args: any[]): void
    connect(sigName: "notify::last-child", callback: (($obj: KineticScrollView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::last-child", callback: (($obj: KineticScrollView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::last-child", ...args: any[]): void
    connect(sigName: "notify::layout-manager", callback: (($obj: KineticScrollView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::layout-manager", callback: (($obj: KineticScrollView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::layout-manager", ...args: any[]): void
    connect(sigName: "notify::magnification-filter", callback: (($obj: KineticScrollView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::magnification-filter", callback: (($obj: KineticScrollView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::magnification-filter", ...args: any[]): void
    connect(sigName: "notify::mapped", callback: (($obj: KineticScrollView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::mapped", callback: (($obj: KineticScrollView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::mapped", ...args: any[]): void
    connect(sigName: "notify::margin-bottom", callback: (($obj: KineticScrollView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-bottom", callback: (($obj: KineticScrollView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-bottom", ...args: any[]): void
    connect(sigName: "notify::margin-left", callback: (($obj: KineticScrollView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-left", callback: (($obj: KineticScrollView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-left", ...args: any[]): void
    connect(sigName: "notify::margin-right", callback: (($obj: KineticScrollView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-right", callback: (($obj: KineticScrollView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-right", ...args: any[]): void
    connect(sigName: "notify::margin-top", callback: (($obj: KineticScrollView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-top", callback: (($obj: KineticScrollView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-top", ...args: any[]): void
    connect(sigName: "notify::min-height", callback: (($obj: KineticScrollView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::min-height", callback: (($obj: KineticScrollView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::min-height", ...args: any[]): void
    connect(sigName: "notify::min-height-set", callback: (($obj: KineticScrollView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::min-height-set", callback: (($obj: KineticScrollView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::min-height-set", ...args: any[]): void
    connect(sigName: "notify::min-width", callback: (($obj: KineticScrollView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::min-width", callback: (($obj: KineticScrollView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::min-width", ...args: any[]): void
    connect(sigName: "notify::min-width-set", callback: (($obj: KineticScrollView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::min-width-set", callback: (($obj: KineticScrollView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::min-width-set", ...args: any[]): void
    connect(sigName: "notify::minification-filter", callback: (($obj: KineticScrollView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::minification-filter", callback: (($obj: KineticScrollView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::minification-filter", ...args: any[]): void
    connect(sigName: "notify::name", callback: (($obj: KineticScrollView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: KineticScrollView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::natural-height", callback: (($obj: KineticScrollView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::natural-height", callback: (($obj: KineticScrollView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::natural-height", ...args: any[]): void
    connect(sigName: "notify::natural-height-set", callback: (($obj: KineticScrollView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::natural-height-set", callback: (($obj: KineticScrollView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::natural-height-set", ...args: any[]): void
    connect(sigName: "notify::natural-width", callback: (($obj: KineticScrollView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::natural-width", callback: (($obj: KineticScrollView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::natural-width", ...args: any[]): void
    connect(sigName: "notify::natural-width-set", callback: (($obj: KineticScrollView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::natural-width-set", callback: (($obj: KineticScrollView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::natural-width-set", ...args: any[]): void
    connect(sigName: "notify::offscreen-redirect", callback: (($obj: KineticScrollView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::offscreen-redirect", callback: (($obj: KineticScrollView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::offscreen-redirect", ...args: any[]): void
    connect(sigName: "notify::opacity", callback: (($obj: KineticScrollView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opacity", callback: (($obj: KineticScrollView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::opacity", ...args: any[]): void
    connect(sigName: "notify::pivot-point", callback: (($obj: KineticScrollView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::pivot-point", callback: (($obj: KineticScrollView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::pivot-point", ...args: any[]): void
    connect(sigName: "notify::pivot-point-z", callback: (($obj: KineticScrollView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::pivot-point-z", callback: (($obj: KineticScrollView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::pivot-point-z", ...args: any[]): void
    connect(sigName: "notify::position", callback: (($obj: KineticScrollView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::position", callback: (($obj: KineticScrollView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::position", ...args: any[]): void
    connect(sigName: "notify::reactive", callback: (($obj: KineticScrollView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::reactive", callback: (($obj: KineticScrollView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::reactive", ...args: any[]): void
    connect(sigName: "notify::realized", callback: (($obj: KineticScrollView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::realized", callback: (($obj: KineticScrollView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::realized", ...args: any[]): void
    connect(sigName: "notify::request-mode", callback: (($obj: KineticScrollView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::request-mode", callback: (($obj: KineticScrollView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::request-mode", ...args: any[]): void
    connect(sigName: "notify::rotation-angle-x", callback: (($obj: KineticScrollView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::rotation-angle-x", callback: (($obj: KineticScrollView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::rotation-angle-x", ...args: any[]): void
    connect(sigName: "notify::rotation-angle-y", callback: (($obj: KineticScrollView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::rotation-angle-y", callback: (($obj: KineticScrollView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::rotation-angle-y", ...args: any[]): void
    connect(sigName: "notify::rotation-angle-z", callback: (($obj: KineticScrollView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::rotation-angle-z", callback: (($obj: KineticScrollView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::rotation-angle-z", ...args: any[]): void
    connect(sigName: "notify::rotation-center-x", callback: (($obj: KineticScrollView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::rotation-center-x", callback: (($obj: KineticScrollView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::rotation-center-x", ...args: any[]): void
    connect(sigName: "notify::rotation-center-y", callback: (($obj: KineticScrollView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::rotation-center-y", callback: (($obj: KineticScrollView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::rotation-center-y", ...args: any[]): void
    connect(sigName: "notify::rotation-center-z", callback: (($obj: KineticScrollView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::rotation-center-z", callback: (($obj: KineticScrollView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::rotation-center-z", ...args: any[]): void
    connect(sigName: "notify::rotation-center-z-gravity", callback: (($obj: KineticScrollView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::rotation-center-z-gravity", callback: (($obj: KineticScrollView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::rotation-center-z-gravity", ...args: any[]): void
    connect(sigName: "notify::scale-center-x", callback: (($obj: KineticScrollView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-center-x", callback: (($obj: KineticScrollView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::scale-center-x", ...args: any[]): void
    connect(sigName: "notify::scale-center-y", callback: (($obj: KineticScrollView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-center-y", callback: (($obj: KineticScrollView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::scale-center-y", ...args: any[]): void
    connect(sigName: "notify::scale-gravity", callback: (($obj: KineticScrollView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-gravity", callback: (($obj: KineticScrollView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::scale-gravity", ...args: any[]): void
    connect(sigName: "notify::scale-x", callback: (($obj: KineticScrollView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-x", callback: (($obj: KineticScrollView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::scale-x", ...args: any[]): void
    connect(sigName: "notify::scale-y", callback: (($obj: KineticScrollView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-y", callback: (($obj: KineticScrollView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::scale-y", ...args: any[]): void
    connect(sigName: "notify::scale-z", callback: (($obj: KineticScrollView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-z", callback: (($obj: KineticScrollView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::scale-z", ...args: any[]): void
    connect(sigName: "notify::show-on-set-parent", callback: (($obj: KineticScrollView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::show-on-set-parent", callback: (($obj: KineticScrollView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::show-on-set-parent", ...args: any[]): void
    connect(sigName: "notify::size", callback: (($obj: KineticScrollView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::size", callback: (($obj: KineticScrollView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::size", ...args: any[]): void
    connect(sigName: "notify::text-direction", callback: (($obj: KineticScrollView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::text-direction", callback: (($obj: KineticScrollView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::text-direction", ...args: any[]): void
    connect(sigName: "notify::transform", callback: (($obj: KineticScrollView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::transform", callback: (($obj: KineticScrollView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::transform", ...args: any[]): void
    connect(sigName: "notify::transform-set", callback: (($obj: KineticScrollView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::transform-set", callback: (($obj: KineticScrollView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::transform-set", ...args: any[]): void
    connect(sigName: "notify::translation-x", callback: (($obj: KineticScrollView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::translation-x", callback: (($obj: KineticScrollView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::translation-x", ...args: any[]): void
    connect(sigName: "notify::translation-y", callback: (($obj: KineticScrollView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::translation-y", callback: (($obj: KineticScrollView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::translation-y", ...args: any[]): void
    connect(sigName: "notify::translation-z", callback: (($obj: KineticScrollView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::translation-z", callback: (($obj: KineticScrollView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::translation-z", ...args: any[]): void
    connect(sigName: "notify::visible", callback: (($obj: KineticScrollView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visible", callback: (($obj: KineticScrollView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::visible", ...args: any[]): void
    connect(sigName: "notify::width", callback: (($obj: KineticScrollView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::width", callback: (($obj: KineticScrollView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::width", ...args: any[]): void
    connect(sigName: "notify::x", callback: (($obj: KineticScrollView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::x", callback: (($obj: KineticScrollView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::x", ...args: any[]): void
    connect(sigName: "notify::x-align", callback: (($obj: KineticScrollView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::x-align", callback: (($obj: KineticScrollView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::x-align", ...args: any[]): void
    connect(sigName: "notify::x-expand", callback: (($obj: KineticScrollView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::x-expand", callback: (($obj: KineticScrollView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::x-expand", ...args: any[]): void
    connect(sigName: "notify::y", callback: (($obj: KineticScrollView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::y", callback: (($obj: KineticScrollView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::y", ...args: any[]): void
    connect(sigName: "notify::y-align", callback: (($obj: KineticScrollView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::y-align", callback: (($obj: KineticScrollView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::y-align", ...args: any[]): void
    connect(sigName: "notify::y-expand", callback: (($obj: KineticScrollView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::y-expand", callback: (($obj: KineticScrollView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::y-expand", ...args: any[]): void
    connect(sigName: "notify::z-position", callback: (($obj: KineticScrollView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::z-position", callback: (($obj: KineticScrollView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::z-position", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class KineticScrollView extends Clutter.Actor {

    // Own properties of Champlain-0.12.Champlain.KineticScrollView

    static name: string
    static $gtype: GObject.GType<KineticScrollView>

    // Constructors of Champlain-0.12.Champlain.KineticScrollView

    constructor(config?: KineticScrollView_ConstructProps) 
    constructor(kinetic: boolean, viewport: Viewport) 
    static new(kinetic: boolean, viewport: Viewport): KineticScrollView

    // Overloads of new

    /**
     * Creates a new #ClutterActor.
     * 
     * A newly created actor has a floating reference, which will be sunk
     * when it is added to another actor.
     * @constructor 
     */
    static new(): Clutter.Actor
    _init(config?: KineticScrollView_ConstructProps): void
}

interface Label_ConstructProps extends Atk.ImplementorIface_ConstructProps, Location_ConstructProps, Clutter.Animatable_ConstructProps, Clutter.Container_ConstructProps, Clutter.Scriptable_ConstructProps, Marker_ConstructProps {

    // Own constructor properties of Champlain-0.12.Champlain.Label

    /**
     * The label's alignment
     */
    alignment?: Pango.Alignment | null
    /**
     * The label's color
     */
    color?: Clutter.Color | null
    /**
     * If the label has a background
     */
    draw_background?: boolean | null
    /**
     * If the label background has a shadow
     */
    draw_shadow?: boolean | null
    /**
     * The label's ellipsize mode
     */
    ellipsize?: Pango.EllipsizeMode | null
    /**
     * The label's text font name
     */
    font_name?: string | null
    /**
     * The image of the label
     */
    image?: Clutter.Actor | null
    /**
     * If the label is in single line mode
     */
    single_line_mode?: boolean | null
    /**
     * The text of the label
     */
    text?: string | null
    /**
     * The label's text color
     */
    text_color?: Clutter.Color | null
    /**
     * If the label's text uses markup
     */
    use_markup?: boolean | null
    /**
     * If the label's text wrap is set
     */
    wrap?: boolean | null
    /**
     * The label's text wrap mode
     */
    wrap_mode?: Pango.WrapMode | null
}

interface Label extends Atk.ImplementorIface, Location, Clutter.Animatable, Clutter.Container, Clutter.Scriptable {

    // Own properties of Champlain-0.12.Champlain.Label

    /**
     * The label's alignment
     */
    alignment: Pango.Alignment
    /**
     * The label's color
     */
    color: Clutter.Color
    /**
     * If the label has a background
     */
    draw_background: boolean
    /**
     * If the label background has a shadow
     */
    draw_shadow: boolean
    /**
     * The label's ellipsize mode
     */
    ellipsize: Pango.EllipsizeMode
    /**
     * The label's text font name
     */
    font_name: string
    /**
     * The image of the label
     */
    image: Clutter.Actor
    /**
     * If the label is in single line mode
     */
    single_line_mode: boolean
    /**
     * The text of the label
     */
    text: string
    /**
     * The label's text color
     */
    text_color: Clutter.Color
    /**
     * If the label's text uses markup
     */
    use_markup: boolean
    /**
     * If the label's text wrap is set
     */
    wrap: boolean
    /**
     * The label's text wrap mode
     */
    wrap_mode: Pango.WrapMode

    // Own fields of Champlain-0.12.Champlain.Label

    parent: Marker
    priv: LabelPrivate

    // Owm methods of Champlain-0.12.Champlain.Label

    /**
     * Get the label's text alignment.
     */
    get_alignment(): Pango.Alignment
    /**
     * Gets the label's text attributes.
     */
    get_attributes(): Pango.AttrList
    /**
     * Gets the label's background color.
     */
    get_color(): Clutter.Color
    /**
     * Checks whether the label has a background.
     */
    get_draw_background(): boolean
    /**
     * Checks whether the label's background has a shadow.
     */
    get_draw_shadow(): boolean
    /**
     * Gets the label's text ellipsize mode.
     */
    get_ellipsize(): Pango.EllipsizeMode
    /**
     * Gets the label's font name.
     */
    get_font_name(): string
    /**
     * Get the label's image.
     */
    get_image(): Clutter.Actor
    /**
     * Checks the label's single line mode.
     */
    get_single_line_mode(): boolean
    /**
     * Get the label's text.
     */
    get_text(): string
    /**
     * Gets the label's text color.
     */
    get_text_color(): Clutter.Color
    /**
     * Check whether the label uses markup.
     */
    get_use_markup(): boolean
    /**
     * Checks whether the label text wraps.
     */
    get_wrap(): boolean
    /**
     * Gets the label's text wrap mode.
     */
    get_wrap_mode(): Pango.WrapMode
    /**
     * Sets the label's text alignment.
     * @param alignment The label's alignment
     */
    set_alignment(alignment: Pango.Alignment): void
    /**
     * Sets the label's text attributes.
     * @param list The label's text attributes.
     */
    set_attributes(list: Pango.AttrList): void
    /**
     * Sets the label's background color.
     * @param color The label's background color or NULL to reset the background to the         default color. The color parameter is copied.
     */
    set_color(color: Clutter.Color | null): void
    /**
     * Sets if the label has a background.
     * @param background value.
     */
    set_draw_background(background: boolean): void
    /**
     * Sets if the label's background has a shadow.
     * @param shadow value.
     */
    set_draw_shadow(shadow: boolean): void
    /**
     * Sets the label's text ellipsize mode.
     * @param mode The label's ellipsize mode.
     */
    set_ellipsize(mode: Pango.EllipsizeMode): void
    /**
     * Sets the label's font name such as "Sans 12".
     * @param font_name The label's font name or NULL to reset the font to the default             value.
     */
    set_font_name(font_name: string | null): void
    /**
     * Sets the label's image.
     * @param image The image as a `ClutterActor` or NULL to remove the current image.
     */
    set_image(image: Clutter.Actor | null): void
    /**
     * Sets if the label's text is on a single line.
     * @param mode The label's single line mode
     */
    set_single_line_mode(mode: boolean): void
    /**
     * Sets the label's text.
     * @param text The new text of the label
     */
    set_text(text: string): void
    /**
     * Sets the label's text color.
     * @param color The label's text color or NULL to reset the text to the default         color. The color parameter is copied.
     */
    set_text_color(color: Clutter.Color | null): void
    /**
     * Sets if the label's text uses markup.
     * @param use_markup The value
     */
    set_use_markup(use_markup: boolean): void
    /**
     * Sets if the label's text wrap.
     * @param wrap The label's wrap.
     */
    set_wrap(wrap: boolean): void
    /**
     * Sets the label's text wrap mode.
     * @param wrap_mode The label's wrap mode.
     */
    set_wrap_mode(wrap_mode: Pango.WrapMode): void

    // Class property signals of Champlain-0.12.Champlain.Label

    connect(sigName: "notify::alignment", callback: (($obj: Label, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::alignment", callback: (($obj: Label, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::alignment", ...args: any[]): void
    connect(sigName: "notify::color", callback: (($obj: Label, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::color", callback: (($obj: Label, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::color", ...args: any[]): void
    connect(sigName: "notify::draw-background", callback: (($obj: Label, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::draw-background", callback: (($obj: Label, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::draw-background", ...args: any[]): void
    connect(sigName: "notify::draw-shadow", callback: (($obj: Label, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::draw-shadow", callback: (($obj: Label, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::draw-shadow", ...args: any[]): void
    connect(sigName: "notify::ellipsize", callback: (($obj: Label, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::ellipsize", callback: (($obj: Label, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::ellipsize", ...args: any[]): void
    connect(sigName: "notify::font-name", callback: (($obj: Label, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::font-name", callback: (($obj: Label, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::font-name", ...args: any[]): void
    connect(sigName: "notify::image", callback: (($obj: Label, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::image", callback: (($obj: Label, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::image", ...args: any[]): void
    connect(sigName: "notify::single-line-mode", callback: (($obj: Label, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::single-line-mode", callback: (($obj: Label, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::single-line-mode", ...args: any[]): void
    connect(sigName: "notify::text", callback: (($obj: Label, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::text", callback: (($obj: Label, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::text", ...args: any[]): void
    connect(sigName: "notify::text-color", callback: (($obj: Label, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::text-color", callback: (($obj: Label, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::text-color", ...args: any[]): void
    connect(sigName: "notify::use-markup", callback: (($obj: Label, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::use-markup", callback: (($obj: Label, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::use-markup", ...args: any[]): void
    connect(sigName: "notify::wrap", callback: (($obj: Label, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::wrap", callback: (($obj: Label, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::wrap", ...args: any[]): void
    connect(sigName: "notify::wrap-mode", callback: (($obj: Label, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::wrap-mode", callback: (($obj: Label, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::wrap-mode", ...args: any[]): void
    connect(sigName: "notify::draggable", callback: (($obj: Label, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::draggable", callback: (($obj: Label, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::draggable", ...args: any[]): void
    connect(sigName: "notify::selectable", callback: (($obj: Label, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::selectable", callback: (($obj: Label, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::selectable", ...args: any[]): void
    connect(sigName: "notify::selected", callback: (($obj: Label, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::selected", callback: (($obj: Label, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::selected", ...args: any[]): void
    connect(sigName: "notify::actions", callback: (($obj: Label, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::actions", callback: (($obj: Label, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::actions", ...args: any[]): void
    connect(sigName: "notify::allocation", callback: (($obj: Label, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::allocation", callback: (($obj: Label, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::allocation", ...args: any[]): void
    connect(sigName: "notify::anchor-gravity", callback: (($obj: Label, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::anchor-gravity", callback: (($obj: Label, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::anchor-gravity", ...args: any[]): void
    connect(sigName: "notify::anchor-x", callback: (($obj: Label, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::anchor-x", callback: (($obj: Label, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::anchor-x", ...args: any[]): void
    connect(sigName: "notify::anchor-y", callback: (($obj: Label, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::anchor-y", callback: (($obj: Label, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::anchor-y", ...args: any[]): void
    connect(sigName: "notify::background-color", callback: (($obj: Label, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::background-color", callback: (($obj: Label, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::background-color", ...args: any[]): void
    connect(sigName: "notify::background-color-set", callback: (($obj: Label, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::background-color-set", callback: (($obj: Label, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::background-color-set", ...args: any[]): void
    connect(sigName: "notify::child-transform", callback: (($obj: Label, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::child-transform", callback: (($obj: Label, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::child-transform", ...args: any[]): void
    connect(sigName: "notify::child-transform-set", callback: (($obj: Label, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::child-transform-set", callback: (($obj: Label, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::child-transform-set", ...args: any[]): void
    connect(sigName: "notify::clip", callback: (($obj: Label, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::clip", callback: (($obj: Label, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::clip", ...args: any[]): void
    connect(sigName: "notify::clip-rect", callback: (($obj: Label, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::clip-rect", callback: (($obj: Label, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::clip-rect", ...args: any[]): void
    connect(sigName: "notify::clip-to-allocation", callback: (($obj: Label, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::clip-to-allocation", callback: (($obj: Label, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::clip-to-allocation", ...args: any[]): void
    connect(sigName: "notify::constraints", callback: (($obj: Label, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::constraints", callback: (($obj: Label, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::constraints", ...args: any[]): void
    connect(sigName: "notify::content", callback: (($obj: Label, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::content", callback: (($obj: Label, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::content", ...args: any[]): void
    connect(sigName: "notify::content-box", callback: (($obj: Label, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::content-box", callback: (($obj: Label, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::content-box", ...args: any[]): void
    connect(sigName: "notify::content-gravity", callback: (($obj: Label, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::content-gravity", callback: (($obj: Label, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::content-gravity", ...args: any[]): void
    connect(sigName: "notify::content-repeat", callback: (($obj: Label, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::content-repeat", callback: (($obj: Label, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::content-repeat", ...args: any[]): void
    connect(sigName: "notify::depth", callback: (($obj: Label, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::depth", callback: (($obj: Label, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::depth", ...args: any[]): void
    connect(sigName: "notify::effect", callback: (($obj: Label, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::effect", callback: (($obj: Label, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::effect", ...args: any[]): void
    connect(sigName: "notify::first-child", callback: (($obj: Label, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::first-child", callback: (($obj: Label, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::first-child", ...args: any[]): void
    connect(sigName: "notify::fixed-position-set", callback: (($obj: Label, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fixed-position-set", callback: (($obj: Label, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::fixed-position-set", ...args: any[]): void
    connect(sigName: "notify::fixed-x", callback: (($obj: Label, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fixed-x", callback: (($obj: Label, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::fixed-x", ...args: any[]): void
    connect(sigName: "notify::fixed-y", callback: (($obj: Label, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fixed-y", callback: (($obj: Label, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::fixed-y", ...args: any[]): void
    connect(sigName: "notify::has-clip", callback: (($obj: Label, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-clip", callback: (($obj: Label, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-clip", ...args: any[]): void
    connect(sigName: "notify::has-pointer", callback: (($obj: Label, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-pointer", callback: (($obj: Label, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-pointer", ...args: any[]): void
    connect(sigName: "notify::height", callback: (($obj: Label, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height", callback: (($obj: Label, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::height", ...args: any[]): void
    connect(sigName: "notify::last-child", callback: (($obj: Label, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::last-child", callback: (($obj: Label, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::last-child", ...args: any[]): void
    connect(sigName: "notify::layout-manager", callback: (($obj: Label, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::layout-manager", callback: (($obj: Label, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::layout-manager", ...args: any[]): void
    connect(sigName: "notify::magnification-filter", callback: (($obj: Label, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::magnification-filter", callback: (($obj: Label, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::magnification-filter", ...args: any[]): void
    connect(sigName: "notify::mapped", callback: (($obj: Label, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::mapped", callback: (($obj: Label, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::mapped", ...args: any[]): void
    connect(sigName: "notify::margin-bottom", callback: (($obj: Label, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-bottom", callback: (($obj: Label, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-bottom", ...args: any[]): void
    connect(sigName: "notify::margin-left", callback: (($obj: Label, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-left", callback: (($obj: Label, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-left", ...args: any[]): void
    connect(sigName: "notify::margin-right", callback: (($obj: Label, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-right", callback: (($obj: Label, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-right", ...args: any[]): void
    connect(sigName: "notify::margin-top", callback: (($obj: Label, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-top", callback: (($obj: Label, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-top", ...args: any[]): void
    connect(sigName: "notify::min-height", callback: (($obj: Label, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::min-height", callback: (($obj: Label, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::min-height", ...args: any[]): void
    connect(sigName: "notify::min-height-set", callback: (($obj: Label, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::min-height-set", callback: (($obj: Label, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::min-height-set", ...args: any[]): void
    connect(sigName: "notify::min-width", callback: (($obj: Label, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::min-width", callback: (($obj: Label, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::min-width", ...args: any[]): void
    connect(sigName: "notify::min-width-set", callback: (($obj: Label, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::min-width-set", callback: (($obj: Label, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::min-width-set", ...args: any[]): void
    connect(sigName: "notify::minification-filter", callback: (($obj: Label, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::minification-filter", callback: (($obj: Label, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::minification-filter", ...args: any[]): void
    connect(sigName: "notify::name", callback: (($obj: Label, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: Label, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::natural-height", callback: (($obj: Label, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::natural-height", callback: (($obj: Label, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::natural-height", ...args: any[]): void
    connect(sigName: "notify::natural-height-set", callback: (($obj: Label, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::natural-height-set", callback: (($obj: Label, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::natural-height-set", ...args: any[]): void
    connect(sigName: "notify::natural-width", callback: (($obj: Label, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::natural-width", callback: (($obj: Label, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::natural-width", ...args: any[]): void
    connect(sigName: "notify::natural-width-set", callback: (($obj: Label, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::natural-width-set", callback: (($obj: Label, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::natural-width-set", ...args: any[]): void
    connect(sigName: "notify::offscreen-redirect", callback: (($obj: Label, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::offscreen-redirect", callback: (($obj: Label, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::offscreen-redirect", ...args: any[]): void
    connect(sigName: "notify::opacity", callback: (($obj: Label, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opacity", callback: (($obj: Label, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::opacity", ...args: any[]): void
    connect(sigName: "notify::pivot-point", callback: (($obj: Label, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::pivot-point", callback: (($obj: Label, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::pivot-point", ...args: any[]): void
    connect(sigName: "notify::pivot-point-z", callback: (($obj: Label, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::pivot-point-z", callback: (($obj: Label, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::pivot-point-z", ...args: any[]): void
    connect(sigName: "notify::position", callback: (($obj: Label, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::position", callback: (($obj: Label, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::position", ...args: any[]): void
    connect(sigName: "notify::reactive", callback: (($obj: Label, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::reactive", callback: (($obj: Label, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::reactive", ...args: any[]): void
    connect(sigName: "notify::realized", callback: (($obj: Label, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::realized", callback: (($obj: Label, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::realized", ...args: any[]): void
    connect(sigName: "notify::request-mode", callback: (($obj: Label, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::request-mode", callback: (($obj: Label, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::request-mode", ...args: any[]): void
    connect(sigName: "notify::rotation-angle-x", callback: (($obj: Label, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::rotation-angle-x", callback: (($obj: Label, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::rotation-angle-x", ...args: any[]): void
    connect(sigName: "notify::rotation-angle-y", callback: (($obj: Label, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::rotation-angle-y", callback: (($obj: Label, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::rotation-angle-y", ...args: any[]): void
    connect(sigName: "notify::rotation-angle-z", callback: (($obj: Label, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::rotation-angle-z", callback: (($obj: Label, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::rotation-angle-z", ...args: any[]): void
    connect(sigName: "notify::rotation-center-x", callback: (($obj: Label, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::rotation-center-x", callback: (($obj: Label, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::rotation-center-x", ...args: any[]): void
    connect(sigName: "notify::rotation-center-y", callback: (($obj: Label, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::rotation-center-y", callback: (($obj: Label, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::rotation-center-y", ...args: any[]): void
    connect(sigName: "notify::rotation-center-z", callback: (($obj: Label, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::rotation-center-z", callback: (($obj: Label, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::rotation-center-z", ...args: any[]): void
    connect(sigName: "notify::rotation-center-z-gravity", callback: (($obj: Label, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::rotation-center-z-gravity", callback: (($obj: Label, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::rotation-center-z-gravity", ...args: any[]): void
    connect(sigName: "notify::scale-center-x", callback: (($obj: Label, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-center-x", callback: (($obj: Label, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::scale-center-x", ...args: any[]): void
    connect(sigName: "notify::scale-center-y", callback: (($obj: Label, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-center-y", callback: (($obj: Label, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::scale-center-y", ...args: any[]): void
    connect(sigName: "notify::scale-gravity", callback: (($obj: Label, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-gravity", callback: (($obj: Label, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::scale-gravity", ...args: any[]): void
    connect(sigName: "notify::scale-x", callback: (($obj: Label, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-x", callback: (($obj: Label, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::scale-x", ...args: any[]): void
    connect(sigName: "notify::scale-y", callback: (($obj: Label, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-y", callback: (($obj: Label, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::scale-y", ...args: any[]): void
    connect(sigName: "notify::scale-z", callback: (($obj: Label, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-z", callback: (($obj: Label, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::scale-z", ...args: any[]): void
    connect(sigName: "notify::show-on-set-parent", callback: (($obj: Label, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::show-on-set-parent", callback: (($obj: Label, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::show-on-set-parent", ...args: any[]): void
    connect(sigName: "notify::size", callback: (($obj: Label, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::size", callback: (($obj: Label, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::size", ...args: any[]): void
    connect(sigName: "notify::text-direction", callback: (($obj: Label, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::text-direction", callback: (($obj: Label, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::text-direction", ...args: any[]): void
    connect(sigName: "notify::transform", callback: (($obj: Label, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::transform", callback: (($obj: Label, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::transform", ...args: any[]): void
    connect(sigName: "notify::transform-set", callback: (($obj: Label, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::transform-set", callback: (($obj: Label, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::transform-set", ...args: any[]): void
    connect(sigName: "notify::translation-x", callback: (($obj: Label, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::translation-x", callback: (($obj: Label, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::translation-x", ...args: any[]): void
    connect(sigName: "notify::translation-y", callback: (($obj: Label, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::translation-y", callback: (($obj: Label, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::translation-y", ...args: any[]): void
    connect(sigName: "notify::translation-z", callback: (($obj: Label, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::translation-z", callback: (($obj: Label, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::translation-z", ...args: any[]): void
    connect(sigName: "notify::visible", callback: (($obj: Label, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visible", callback: (($obj: Label, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::visible", ...args: any[]): void
    connect(sigName: "notify::width", callback: (($obj: Label, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::width", callback: (($obj: Label, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::width", ...args: any[]): void
    connect(sigName: "notify::x", callback: (($obj: Label, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::x", callback: (($obj: Label, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::x", ...args: any[]): void
    connect(sigName: "notify::x-align", callback: (($obj: Label, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::x-align", callback: (($obj: Label, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::x-align", ...args: any[]): void
    connect(sigName: "notify::x-expand", callback: (($obj: Label, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::x-expand", callback: (($obj: Label, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::x-expand", ...args: any[]): void
    connect(sigName: "notify::y", callback: (($obj: Label, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::y", callback: (($obj: Label, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::y", ...args: any[]): void
    connect(sigName: "notify::y-align", callback: (($obj: Label, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::y-align", callback: (($obj: Label, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::y-align", ...args: any[]): void
    connect(sigName: "notify::y-expand", callback: (($obj: Label, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::y-expand", callback: (($obj: Label, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::y-expand", ...args: any[]): void
    connect(sigName: "notify::z-position", callback: (($obj: Label, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::z-position", callback: (($obj: Label, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::z-position", ...args: any[]): void
    connect(sigName: "notify::latitude", callback: (($obj: Label, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::latitude", callback: (($obj: Label, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::latitude", ...args: any[]): void
    connect(sigName: "notify::longitude", callback: (($obj: Label, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::longitude", callback: (($obj: Label, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::longitude", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * The #ChamplainLabel structure contains only private data
 * and should be accessed using the provided API
 * @class 
 */
class Label extends Marker {

    // Own properties of Champlain-0.12.Champlain.Label

    static name: string
    static $gtype: GObject.GType<Label>

    // Constructors of Champlain-0.12.Champlain.Label

    constructor(config?: Label_ConstructProps) 
    /**
     * Creates a new instance of #ChamplainLabel.
     * @constructor 
     */
    constructor() 
    /**
     * Creates a new instance of #ChamplainLabel.
     * @constructor 
     */
    static new(): Label
    /**
     * Creates a new instance of #ChamplainLabel with image loaded from file.
     * @constructor 
     * @param filename The filename of the image.
     */
    static new_from_file(filename: string): Label
    /**
     * Creates a new instance of #ChamplainLabel consisting of a custom #ClutterActor.
     * @constructor 
     * @param text The text of the label
     * @param actor The image as a `ClutterActor`
     */
    static new_full(text: string, actor: Clutter.Actor): Label
    /**
     * Creates a new instance of #ChamplainLabel with image.
     * @constructor 
     * @param actor The image as a `ClutterActor`.
     */
    static new_with_image(actor: Clutter.Actor): Label
    /**
     * Creates a new instance of #ChamplainLabel with text value.
     * @constructor 
     * @param text the text of the label
     * @param font the font to use to draw the text, for example "Courrier Bold 11", can be NULL
     * @param text_color a #ClutterColor, the color of the text, can be NULL
     * @param label_color a #ClutterColor, the color of the label, can be NULL
     */
    static new_with_text(text: string, font: string | null, text_color: Clutter.Color | null, label_color: Clutter.Color | null): Label
    _init(config?: Label_ConstructProps): void
}

interface Layer_ConstructProps extends Atk.ImplementorIface_ConstructProps, Clutter.Animatable_ConstructProps, Clutter.Container_ConstructProps, Clutter.Scriptable_ConstructProps, Clutter.Actor_ConstructProps {
}

interface Layer extends Atk.ImplementorIface, Clutter.Animatable, Clutter.Container, Clutter.Scriptable {

    // Own fields of Champlain-0.12.Champlain.Layer

    parent: Clutter.Actor

    // Owm methods of Champlain-0.12.Champlain.Layer

    /**
     * Gets the bounding box occupied by the elements inside the layer.
     */
    get_bounding_box(): BoundingBox
    /**
     * #ChamplainView calls this method to pass a reference to itself to the layer
     * when the layer is added to the view. When the layer is removed from the
     * view, it passes %NULL to the layer. Custom layers can implement this method
     * and perform the necessary initialization. This method should not be called
     * by user code.
     * @param view a #ChamplainView
     */
    set_view(view: View | null): void

    // Own virtual methods of Champlain-0.12.Champlain.Layer

    /**
     * Gets the bounding box occupied by the elements inside the layer.
     * @virtual 
     */
    vfunc_get_bounding_box(): BoundingBox
    /**
     * #ChamplainView calls this method to pass a reference to itself to the layer
     * when the layer is added to the view. When the layer is removed from the
     * view, it passes %NULL to the layer. Custom layers can implement this method
     * and perform the necessary initialization. This method should not be called
     * by user code.
     * @virtual 
     * @param view a #ChamplainView
     */
    vfunc_set_view(view: View | null): void

    // Class property signals of Champlain-0.12.Champlain.Layer

    connect(sigName: "notify::actions", callback: (($obj: Layer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::actions", callback: (($obj: Layer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::actions", ...args: any[]): void
    connect(sigName: "notify::allocation", callback: (($obj: Layer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::allocation", callback: (($obj: Layer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::allocation", ...args: any[]): void
    connect(sigName: "notify::anchor-gravity", callback: (($obj: Layer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::anchor-gravity", callback: (($obj: Layer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::anchor-gravity", ...args: any[]): void
    connect(sigName: "notify::anchor-x", callback: (($obj: Layer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::anchor-x", callback: (($obj: Layer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::anchor-x", ...args: any[]): void
    connect(sigName: "notify::anchor-y", callback: (($obj: Layer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::anchor-y", callback: (($obj: Layer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::anchor-y", ...args: any[]): void
    connect(sigName: "notify::background-color", callback: (($obj: Layer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::background-color", callback: (($obj: Layer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::background-color", ...args: any[]): void
    connect(sigName: "notify::background-color-set", callback: (($obj: Layer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::background-color-set", callback: (($obj: Layer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::background-color-set", ...args: any[]): void
    connect(sigName: "notify::child-transform", callback: (($obj: Layer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::child-transform", callback: (($obj: Layer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::child-transform", ...args: any[]): void
    connect(sigName: "notify::child-transform-set", callback: (($obj: Layer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::child-transform-set", callback: (($obj: Layer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::child-transform-set", ...args: any[]): void
    connect(sigName: "notify::clip", callback: (($obj: Layer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::clip", callback: (($obj: Layer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::clip", ...args: any[]): void
    connect(sigName: "notify::clip-rect", callback: (($obj: Layer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::clip-rect", callback: (($obj: Layer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::clip-rect", ...args: any[]): void
    connect(sigName: "notify::clip-to-allocation", callback: (($obj: Layer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::clip-to-allocation", callback: (($obj: Layer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::clip-to-allocation", ...args: any[]): void
    connect(sigName: "notify::constraints", callback: (($obj: Layer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::constraints", callback: (($obj: Layer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::constraints", ...args: any[]): void
    connect(sigName: "notify::content", callback: (($obj: Layer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::content", callback: (($obj: Layer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::content", ...args: any[]): void
    connect(sigName: "notify::content-box", callback: (($obj: Layer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::content-box", callback: (($obj: Layer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::content-box", ...args: any[]): void
    connect(sigName: "notify::content-gravity", callback: (($obj: Layer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::content-gravity", callback: (($obj: Layer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::content-gravity", ...args: any[]): void
    connect(sigName: "notify::content-repeat", callback: (($obj: Layer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::content-repeat", callback: (($obj: Layer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::content-repeat", ...args: any[]): void
    connect(sigName: "notify::depth", callback: (($obj: Layer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::depth", callback: (($obj: Layer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::depth", ...args: any[]): void
    connect(sigName: "notify::effect", callback: (($obj: Layer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::effect", callback: (($obj: Layer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::effect", ...args: any[]): void
    connect(sigName: "notify::first-child", callback: (($obj: Layer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::first-child", callback: (($obj: Layer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::first-child", ...args: any[]): void
    connect(sigName: "notify::fixed-position-set", callback: (($obj: Layer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fixed-position-set", callback: (($obj: Layer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::fixed-position-set", ...args: any[]): void
    connect(sigName: "notify::fixed-x", callback: (($obj: Layer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fixed-x", callback: (($obj: Layer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::fixed-x", ...args: any[]): void
    connect(sigName: "notify::fixed-y", callback: (($obj: Layer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fixed-y", callback: (($obj: Layer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::fixed-y", ...args: any[]): void
    connect(sigName: "notify::has-clip", callback: (($obj: Layer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-clip", callback: (($obj: Layer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-clip", ...args: any[]): void
    connect(sigName: "notify::has-pointer", callback: (($obj: Layer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-pointer", callback: (($obj: Layer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-pointer", ...args: any[]): void
    connect(sigName: "notify::height", callback: (($obj: Layer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height", callback: (($obj: Layer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::height", ...args: any[]): void
    connect(sigName: "notify::last-child", callback: (($obj: Layer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::last-child", callback: (($obj: Layer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::last-child", ...args: any[]): void
    connect(sigName: "notify::layout-manager", callback: (($obj: Layer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::layout-manager", callback: (($obj: Layer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::layout-manager", ...args: any[]): void
    connect(sigName: "notify::magnification-filter", callback: (($obj: Layer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::magnification-filter", callback: (($obj: Layer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::magnification-filter", ...args: any[]): void
    connect(sigName: "notify::mapped", callback: (($obj: Layer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::mapped", callback: (($obj: Layer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::mapped", ...args: any[]): void
    connect(sigName: "notify::margin-bottom", callback: (($obj: Layer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-bottom", callback: (($obj: Layer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-bottom", ...args: any[]): void
    connect(sigName: "notify::margin-left", callback: (($obj: Layer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-left", callback: (($obj: Layer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-left", ...args: any[]): void
    connect(sigName: "notify::margin-right", callback: (($obj: Layer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-right", callback: (($obj: Layer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-right", ...args: any[]): void
    connect(sigName: "notify::margin-top", callback: (($obj: Layer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-top", callback: (($obj: Layer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-top", ...args: any[]): void
    connect(sigName: "notify::min-height", callback: (($obj: Layer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::min-height", callback: (($obj: Layer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::min-height", ...args: any[]): void
    connect(sigName: "notify::min-height-set", callback: (($obj: Layer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::min-height-set", callback: (($obj: Layer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::min-height-set", ...args: any[]): void
    connect(sigName: "notify::min-width", callback: (($obj: Layer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::min-width", callback: (($obj: Layer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::min-width", ...args: any[]): void
    connect(sigName: "notify::min-width-set", callback: (($obj: Layer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::min-width-set", callback: (($obj: Layer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::min-width-set", ...args: any[]): void
    connect(sigName: "notify::minification-filter", callback: (($obj: Layer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::minification-filter", callback: (($obj: Layer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::minification-filter", ...args: any[]): void
    connect(sigName: "notify::name", callback: (($obj: Layer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: Layer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::natural-height", callback: (($obj: Layer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::natural-height", callback: (($obj: Layer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::natural-height", ...args: any[]): void
    connect(sigName: "notify::natural-height-set", callback: (($obj: Layer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::natural-height-set", callback: (($obj: Layer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::natural-height-set", ...args: any[]): void
    connect(sigName: "notify::natural-width", callback: (($obj: Layer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::natural-width", callback: (($obj: Layer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::natural-width", ...args: any[]): void
    connect(sigName: "notify::natural-width-set", callback: (($obj: Layer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::natural-width-set", callback: (($obj: Layer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::natural-width-set", ...args: any[]): void
    connect(sigName: "notify::offscreen-redirect", callback: (($obj: Layer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::offscreen-redirect", callback: (($obj: Layer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::offscreen-redirect", ...args: any[]): void
    connect(sigName: "notify::opacity", callback: (($obj: Layer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opacity", callback: (($obj: Layer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::opacity", ...args: any[]): void
    connect(sigName: "notify::pivot-point", callback: (($obj: Layer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::pivot-point", callback: (($obj: Layer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::pivot-point", ...args: any[]): void
    connect(sigName: "notify::pivot-point-z", callback: (($obj: Layer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::pivot-point-z", callback: (($obj: Layer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::pivot-point-z", ...args: any[]): void
    connect(sigName: "notify::position", callback: (($obj: Layer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::position", callback: (($obj: Layer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::position", ...args: any[]): void
    connect(sigName: "notify::reactive", callback: (($obj: Layer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::reactive", callback: (($obj: Layer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::reactive", ...args: any[]): void
    connect(sigName: "notify::realized", callback: (($obj: Layer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::realized", callback: (($obj: Layer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::realized", ...args: any[]): void
    connect(sigName: "notify::request-mode", callback: (($obj: Layer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::request-mode", callback: (($obj: Layer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::request-mode", ...args: any[]): void
    connect(sigName: "notify::rotation-angle-x", callback: (($obj: Layer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::rotation-angle-x", callback: (($obj: Layer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::rotation-angle-x", ...args: any[]): void
    connect(sigName: "notify::rotation-angle-y", callback: (($obj: Layer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::rotation-angle-y", callback: (($obj: Layer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::rotation-angle-y", ...args: any[]): void
    connect(sigName: "notify::rotation-angle-z", callback: (($obj: Layer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::rotation-angle-z", callback: (($obj: Layer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::rotation-angle-z", ...args: any[]): void
    connect(sigName: "notify::rotation-center-x", callback: (($obj: Layer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::rotation-center-x", callback: (($obj: Layer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::rotation-center-x", ...args: any[]): void
    connect(sigName: "notify::rotation-center-y", callback: (($obj: Layer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::rotation-center-y", callback: (($obj: Layer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::rotation-center-y", ...args: any[]): void
    connect(sigName: "notify::rotation-center-z", callback: (($obj: Layer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::rotation-center-z", callback: (($obj: Layer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::rotation-center-z", ...args: any[]): void
    connect(sigName: "notify::rotation-center-z-gravity", callback: (($obj: Layer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::rotation-center-z-gravity", callback: (($obj: Layer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::rotation-center-z-gravity", ...args: any[]): void
    connect(sigName: "notify::scale-center-x", callback: (($obj: Layer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-center-x", callback: (($obj: Layer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::scale-center-x", ...args: any[]): void
    connect(sigName: "notify::scale-center-y", callback: (($obj: Layer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-center-y", callback: (($obj: Layer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::scale-center-y", ...args: any[]): void
    connect(sigName: "notify::scale-gravity", callback: (($obj: Layer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-gravity", callback: (($obj: Layer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::scale-gravity", ...args: any[]): void
    connect(sigName: "notify::scale-x", callback: (($obj: Layer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-x", callback: (($obj: Layer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::scale-x", ...args: any[]): void
    connect(sigName: "notify::scale-y", callback: (($obj: Layer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-y", callback: (($obj: Layer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::scale-y", ...args: any[]): void
    connect(sigName: "notify::scale-z", callback: (($obj: Layer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-z", callback: (($obj: Layer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::scale-z", ...args: any[]): void
    connect(sigName: "notify::show-on-set-parent", callback: (($obj: Layer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::show-on-set-parent", callback: (($obj: Layer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::show-on-set-parent", ...args: any[]): void
    connect(sigName: "notify::size", callback: (($obj: Layer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::size", callback: (($obj: Layer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::size", ...args: any[]): void
    connect(sigName: "notify::text-direction", callback: (($obj: Layer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::text-direction", callback: (($obj: Layer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::text-direction", ...args: any[]): void
    connect(sigName: "notify::transform", callback: (($obj: Layer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::transform", callback: (($obj: Layer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::transform", ...args: any[]): void
    connect(sigName: "notify::transform-set", callback: (($obj: Layer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::transform-set", callback: (($obj: Layer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::transform-set", ...args: any[]): void
    connect(sigName: "notify::translation-x", callback: (($obj: Layer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::translation-x", callback: (($obj: Layer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::translation-x", ...args: any[]): void
    connect(sigName: "notify::translation-y", callback: (($obj: Layer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::translation-y", callback: (($obj: Layer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::translation-y", ...args: any[]): void
    connect(sigName: "notify::translation-z", callback: (($obj: Layer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::translation-z", callback: (($obj: Layer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::translation-z", ...args: any[]): void
    connect(sigName: "notify::visible", callback: (($obj: Layer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visible", callback: (($obj: Layer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::visible", ...args: any[]): void
    connect(sigName: "notify::width", callback: (($obj: Layer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::width", callback: (($obj: Layer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::width", ...args: any[]): void
    connect(sigName: "notify::x", callback: (($obj: Layer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::x", callback: (($obj: Layer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::x", ...args: any[]): void
    connect(sigName: "notify::x-align", callback: (($obj: Layer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::x-align", callback: (($obj: Layer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::x-align", ...args: any[]): void
    connect(sigName: "notify::x-expand", callback: (($obj: Layer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::x-expand", callback: (($obj: Layer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::x-expand", ...args: any[]): void
    connect(sigName: "notify::y", callback: (($obj: Layer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::y", callback: (($obj: Layer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::y", ...args: any[]): void
    connect(sigName: "notify::y-align", callback: (($obj: Layer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::y-align", callback: (($obj: Layer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::y-align", ...args: any[]): void
    connect(sigName: "notify::y-expand", callback: (($obj: Layer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::y-expand", callback: (($obj: Layer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::y-expand", ...args: any[]): void
    connect(sigName: "notify::z-position", callback: (($obj: Layer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::z-position", callback: (($obj: Layer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::z-position", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * The #ChamplainLayer structure contains only private data
 * and should be accessed using the provided API
 * @class 
 */
class Layer extends Clutter.Actor {

    // Own properties of Champlain-0.12.Champlain.Layer

    static name: string
    static $gtype: GObject.GType<Layer>

    // Constructors of Champlain-0.12.Champlain.Layer

    constructor(config?: Layer_ConstructProps) 
    _init(config?: Layer_ConstructProps): void
}

interface License_ConstructProps extends Atk.ImplementorIface_ConstructProps, Clutter.Animatable_ConstructProps, Clutter.Container_ConstructProps, Clutter.Scriptable_ConstructProps, Clutter.Actor_ConstructProps {

    // Own constructor properties of Champlain-0.12.Champlain.License

    /**
     * The license's alignment
     */
    alignment?: Pango.Alignment | null
    /**
     * Sets additional text to be displayed in the license area.  The map's
     * license will be added below it. Your text can have multiple lines, just use
     * "\n" in between.
     */
    extra_text?: string | null
}

interface License extends Atk.ImplementorIface, Clutter.Animatable, Clutter.Container, Clutter.Scriptable {

    // Own properties of Champlain-0.12.Champlain.License

    /**
     * The license's alignment
     */
    alignment: Pango.Alignment
    /**
     * Sets additional text to be displayed in the license area.  The map's
     * license will be added below it. Your text can have multiple lines, just use
     * "\n" in between.
     */
    extra_text: string

    // Own fields of Champlain-0.12.Champlain.License

    parent: Clutter.Actor
    priv: LicensePrivate

    // Owm methods of Champlain-0.12.Champlain.License

    /**
     * This method connects to the necessary signals of #ChamplainView to make the
     * license change automatically when the map source changes.
     * @param view a #ChamplainView
     */
    connect_view(view: View): void
    /**
     * This method disconnects from the signals previously connected by champlain_license_connect_view().
     */
    disconnect_view(): void
    /**
     * Get the license's text alignment.
     */
    get_alignment(): Pango.Alignment
    /**
     * Gets the additional license text.
     */
    get_extra_text(): string
    /**
     * Set the license's text alignment.
     * @param alignment The license's text alignment
     */
    set_alignment(alignment: Pango.Alignment): void
    /**
     * Show the additional license text on the map view.  The text will preceed the
     * map's licence when displayed. Use "\n" to separate the lines.
     * @param text the additional license text
     */
    set_extra_text(text: string): void

    // Class property signals of Champlain-0.12.Champlain.License

    connect(sigName: "notify::alignment", callback: (($obj: License, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::alignment", callback: (($obj: License, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::alignment", ...args: any[]): void
    connect(sigName: "notify::extra-text", callback: (($obj: License, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::extra-text", callback: (($obj: License, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::extra-text", ...args: any[]): void
    connect(sigName: "notify::actions", callback: (($obj: License, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::actions", callback: (($obj: License, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::actions", ...args: any[]): void
    connect(sigName: "notify::allocation", callback: (($obj: License, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::allocation", callback: (($obj: License, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::allocation", ...args: any[]): void
    connect(sigName: "notify::anchor-gravity", callback: (($obj: License, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::anchor-gravity", callback: (($obj: License, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::anchor-gravity", ...args: any[]): void
    connect(sigName: "notify::anchor-x", callback: (($obj: License, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::anchor-x", callback: (($obj: License, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::anchor-x", ...args: any[]): void
    connect(sigName: "notify::anchor-y", callback: (($obj: License, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::anchor-y", callback: (($obj: License, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::anchor-y", ...args: any[]): void
    connect(sigName: "notify::background-color", callback: (($obj: License, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::background-color", callback: (($obj: License, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::background-color", ...args: any[]): void
    connect(sigName: "notify::background-color-set", callback: (($obj: License, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::background-color-set", callback: (($obj: License, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::background-color-set", ...args: any[]): void
    connect(sigName: "notify::child-transform", callback: (($obj: License, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::child-transform", callback: (($obj: License, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::child-transform", ...args: any[]): void
    connect(sigName: "notify::child-transform-set", callback: (($obj: License, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::child-transform-set", callback: (($obj: License, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::child-transform-set", ...args: any[]): void
    connect(sigName: "notify::clip", callback: (($obj: License, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::clip", callback: (($obj: License, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::clip", ...args: any[]): void
    connect(sigName: "notify::clip-rect", callback: (($obj: License, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::clip-rect", callback: (($obj: License, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::clip-rect", ...args: any[]): void
    connect(sigName: "notify::clip-to-allocation", callback: (($obj: License, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::clip-to-allocation", callback: (($obj: License, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::clip-to-allocation", ...args: any[]): void
    connect(sigName: "notify::constraints", callback: (($obj: License, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::constraints", callback: (($obj: License, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::constraints", ...args: any[]): void
    connect(sigName: "notify::content", callback: (($obj: License, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::content", callback: (($obj: License, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::content", ...args: any[]): void
    connect(sigName: "notify::content-box", callback: (($obj: License, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::content-box", callback: (($obj: License, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::content-box", ...args: any[]): void
    connect(sigName: "notify::content-gravity", callback: (($obj: License, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::content-gravity", callback: (($obj: License, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::content-gravity", ...args: any[]): void
    connect(sigName: "notify::content-repeat", callback: (($obj: License, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::content-repeat", callback: (($obj: License, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::content-repeat", ...args: any[]): void
    connect(sigName: "notify::depth", callback: (($obj: License, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::depth", callback: (($obj: License, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::depth", ...args: any[]): void
    connect(sigName: "notify::effect", callback: (($obj: License, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::effect", callback: (($obj: License, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::effect", ...args: any[]): void
    connect(sigName: "notify::first-child", callback: (($obj: License, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::first-child", callback: (($obj: License, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::first-child", ...args: any[]): void
    connect(sigName: "notify::fixed-position-set", callback: (($obj: License, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fixed-position-set", callback: (($obj: License, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::fixed-position-set", ...args: any[]): void
    connect(sigName: "notify::fixed-x", callback: (($obj: License, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fixed-x", callback: (($obj: License, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::fixed-x", ...args: any[]): void
    connect(sigName: "notify::fixed-y", callback: (($obj: License, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fixed-y", callback: (($obj: License, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::fixed-y", ...args: any[]): void
    connect(sigName: "notify::has-clip", callback: (($obj: License, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-clip", callback: (($obj: License, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-clip", ...args: any[]): void
    connect(sigName: "notify::has-pointer", callback: (($obj: License, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-pointer", callback: (($obj: License, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-pointer", ...args: any[]): void
    connect(sigName: "notify::height", callback: (($obj: License, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height", callback: (($obj: License, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::height", ...args: any[]): void
    connect(sigName: "notify::last-child", callback: (($obj: License, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::last-child", callback: (($obj: License, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::last-child", ...args: any[]): void
    connect(sigName: "notify::layout-manager", callback: (($obj: License, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::layout-manager", callback: (($obj: License, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::layout-manager", ...args: any[]): void
    connect(sigName: "notify::magnification-filter", callback: (($obj: License, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::magnification-filter", callback: (($obj: License, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::magnification-filter", ...args: any[]): void
    connect(sigName: "notify::mapped", callback: (($obj: License, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::mapped", callback: (($obj: License, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::mapped", ...args: any[]): void
    connect(sigName: "notify::margin-bottom", callback: (($obj: License, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-bottom", callback: (($obj: License, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-bottom", ...args: any[]): void
    connect(sigName: "notify::margin-left", callback: (($obj: License, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-left", callback: (($obj: License, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-left", ...args: any[]): void
    connect(sigName: "notify::margin-right", callback: (($obj: License, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-right", callback: (($obj: License, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-right", ...args: any[]): void
    connect(sigName: "notify::margin-top", callback: (($obj: License, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-top", callback: (($obj: License, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-top", ...args: any[]): void
    connect(sigName: "notify::min-height", callback: (($obj: License, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::min-height", callback: (($obj: License, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::min-height", ...args: any[]): void
    connect(sigName: "notify::min-height-set", callback: (($obj: License, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::min-height-set", callback: (($obj: License, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::min-height-set", ...args: any[]): void
    connect(sigName: "notify::min-width", callback: (($obj: License, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::min-width", callback: (($obj: License, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::min-width", ...args: any[]): void
    connect(sigName: "notify::min-width-set", callback: (($obj: License, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::min-width-set", callback: (($obj: License, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::min-width-set", ...args: any[]): void
    connect(sigName: "notify::minification-filter", callback: (($obj: License, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::minification-filter", callback: (($obj: License, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::minification-filter", ...args: any[]): void
    connect(sigName: "notify::name", callback: (($obj: License, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: License, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::natural-height", callback: (($obj: License, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::natural-height", callback: (($obj: License, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::natural-height", ...args: any[]): void
    connect(sigName: "notify::natural-height-set", callback: (($obj: License, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::natural-height-set", callback: (($obj: License, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::natural-height-set", ...args: any[]): void
    connect(sigName: "notify::natural-width", callback: (($obj: License, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::natural-width", callback: (($obj: License, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::natural-width", ...args: any[]): void
    connect(sigName: "notify::natural-width-set", callback: (($obj: License, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::natural-width-set", callback: (($obj: License, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::natural-width-set", ...args: any[]): void
    connect(sigName: "notify::offscreen-redirect", callback: (($obj: License, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::offscreen-redirect", callback: (($obj: License, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::offscreen-redirect", ...args: any[]): void
    connect(sigName: "notify::opacity", callback: (($obj: License, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opacity", callback: (($obj: License, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::opacity", ...args: any[]): void
    connect(sigName: "notify::pivot-point", callback: (($obj: License, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::pivot-point", callback: (($obj: License, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::pivot-point", ...args: any[]): void
    connect(sigName: "notify::pivot-point-z", callback: (($obj: License, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::pivot-point-z", callback: (($obj: License, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::pivot-point-z", ...args: any[]): void
    connect(sigName: "notify::position", callback: (($obj: License, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::position", callback: (($obj: License, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::position", ...args: any[]): void
    connect(sigName: "notify::reactive", callback: (($obj: License, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::reactive", callback: (($obj: License, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::reactive", ...args: any[]): void
    connect(sigName: "notify::realized", callback: (($obj: License, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::realized", callback: (($obj: License, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::realized", ...args: any[]): void
    connect(sigName: "notify::request-mode", callback: (($obj: License, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::request-mode", callback: (($obj: License, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::request-mode", ...args: any[]): void
    connect(sigName: "notify::rotation-angle-x", callback: (($obj: License, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::rotation-angle-x", callback: (($obj: License, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::rotation-angle-x", ...args: any[]): void
    connect(sigName: "notify::rotation-angle-y", callback: (($obj: License, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::rotation-angle-y", callback: (($obj: License, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::rotation-angle-y", ...args: any[]): void
    connect(sigName: "notify::rotation-angle-z", callback: (($obj: License, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::rotation-angle-z", callback: (($obj: License, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::rotation-angle-z", ...args: any[]): void
    connect(sigName: "notify::rotation-center-x", callback: (($obj: License, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::rotation-center-x", callback: (($obj: License, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::rotation-center-x", ...args: any[]): void
    connect(sigName: "notify::rotation-center-y", callback: (($obj: License, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::rotation-center-y", callback: (($obj: License, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::rotation-center-y", ...args: any[]): void
    connect(sigName: "notify::rotation-center-z", callback: (($obj: License, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::rotation-center-z", callback: (($obj: License, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::rotation-center-z", ...args: any[]): void
    connect(sigName: "notify::rotation-center-z-gravity", callback: (($obj: License, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::rotation-center-z-gravity", callback: (($obj: License, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::rotation-center-z-gravity", ...args: any[]): void
    connect(sigName: "notify::scale-center-x", callback: (($obj: License, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-center-x", callback: (($obj: License, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::scale-center-x", ...args: any[]): void
    connect(sigName: "notify::scale-center-y", callback: (($obj: License, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-center-y", callback: (($obj: License, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::scale-center-y", ...args: any[]): void
    connect(sigName: "notify::scale-gravity", callback: (($obj: License, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-gravity", callback: (($obj: License, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::scale-gravity", ...args: any[]): void
    connect(sigName: "notify::scale-x", callback: (($obj: License, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-x", callback: (($obj: License, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::scale-x", ...args: any[]): void
    connect(sigName: "notify::scale-y", callback: (($obj: License, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-y", callback: (($obj: License, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::scale-y", ...args: any[]): void
    connect(sigName: "notify::scale-z", callback: (($obj: License, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-z", callback: (($obj: License, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::scale-z", ...args: any[]): void
    connect(sigName: "notify::show-on-set-parent", callback: (($obj: License, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::show-on-set-parent", callback: (($obj: License, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::show-on-set-parent", ...args: any[]): void
    connect(sigName: "notify::size", callback: (($obj: License, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::size", callback: (($obj: License, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::size", ...args: any[]): void
    connect(sigName: "notify::text-direction", callback: (($obj: License, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::text-direction", callback: (($obj: License, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::text-direction", ...args: any[]): void
    connect(sigName: "notify::transform", callback: (($obj: License, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::transform", callback: (($obj: License, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::transform", ...args: any[]): void
    connect(sigName: "notify::transform-set", callback: (($obj: License, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::transform-set", callback: (($obj: License, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::transform-set", ...args: any[]): void
    connect(sigName: "notify::translation-x", callback: (($obj: License, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::translation-x", callback: (($obj: License, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::translation-x", ...args: any[]): void
    connect(sigName: "notify::translation-y", callback: (($obj: License, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::translation-y", callback: (($obj: License, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::translation-y", ...args: any[]): void
    connect(sigName: "notify::translation-z", callback: (($obj: License, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::translation-z", callback: (($obj: License, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::translation-z", ...args: any[]): void
    connect(sigName: "notify::visible", callback: (($obj: License, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visible", callback: (($obj: License, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::visible", ...args: any[]): void
    connect(sigName: "notify::width", callback: (($obj: License, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::width", callback: (($obj: License, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::width", ...args: any[]): void
    connect(sigName: "notify::x", callback: (($obj: License, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::x", callback: (($obj: License, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::x", ...args: any[]): void
    connect(sigName: "notify::x-align", callback: (($obj: License, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::x-align", callback: (($obj: License, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::x-align", ...args: any[]): void
    connect(sigName: "notify::x-expand", callback: (($obj: License, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::x-expand", callback: (($obj: License, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::x-expand", ...args: any[]): void
    connect(sigName: "notify::y", callback: (($obj: License, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::y", callback: (($obj: License, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::y", ...args: any[]): void
    connect(sigName: "notify::y-align", callback: (($obj: License, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::y-align", callback: (($obj: License, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::y-align", ...args: any[]): void
    connect(sigName: "notify::y-expand", callback: (($obj: License, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::y-expand", callback: (($obj: License, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::y-expand", ...args: any[]): void
    connect(sigName: "notify::z-position", callback: (($obj: License, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::z-position", callback: (($obj: License, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::z-position", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * The #ChamplainLicense structure contains only private data
 * and should be accessed using the provided API
 * @class 
 */
class License extends Clutter.Actor {

    // Own properties of Champlain-0.12.Champlain.License

    static name: string
    static $gtype: GObject.GType<License>

    // Constructors of Champlain-0.12.Champlain.License

    constructor(config?: License_ConstructProps) 
    /**
     * Creates an instance of #ChamplainLicense.
     * @constructor 
     */
    constructor() 
    /**
     * Creates an instance of #ChamplainLicense.
     * @constructor 
     */
    static new(): License
    _init(config?: License_ConstructProps): void
}

interface MapSource_ConstructProps extends GObject.InitiallyUnowned_ConstructProps {

    // Own constructor properties of Champlain-0.12.Champlain.MapSource

    /**
     * Next source in the loading chain.
     */
    next_source?: MapSource | null
    /**
     * Renderer used for tiles rendering.
     */
    renderer?: Renderer | null
}

interface MapSource {

    // Own properties of Champlain-0.12.Champlain.MapSource

    /**
     * Next source in the loading chain.
     */
    next_source: MapSource
    /**
     * Renderer used for tiles rendering.
     */
    renderer: Renderer

    // Own fields of Champlain-0.12.Champlain.MapSource

    parent_instance: GObject.InitiallyUnowned
    priv: MapSourcePrivate

    // Owm methods of Champlain-0.12.Champlain.MapSource

    /**
     * Fills the tile with image data (either from cache, network or rendered
     * locally).
     * @param tile a #ChamplainTile
     */
    fill_tile(tile: Tile): void
    /**
     * Gets the number of tiles in a column at this zoom level for this map
     * source.
     * @param zoom_level the zoom level
     */
    get_column_count(zoom_level: number): number
    /**
     * Gets map source's id.
     */
    get_id(): string
    /**
     * Gets the latitude corresponding to this y position in the map source's
     * projection.
     * @param zoom_level the zoom level
     * @param y a y position
     */
    get_latitude(zoom_level: number, y: number): number
    /**
     * Gets map source's license.
     */
    get_license(): string
    /**
     * Gets map source's license URI.
     */
    get_license_uri(): string
    /**
     * Gets the longitude corresponding to this x position in the map source's
     * projection.
     * @param zoom_level the zoom level
     * @param x a x position
     */
    get_longitude(zoom_level: number, x: number): number
    /**
     * Gets map source's maximum zoom level.
     */
    get_max_zoom_level(): number
    /**
     * Gets meters per pixel at the position on the map using this map source's projection.
     * @param zoom_level the zoom level
     * @param latitude a latitude
     * @param longitude a longitude
     */
    get_meters_per_pixel(zoom_level: number, latitude: number, longitude: number): number
    /**
     * Gets map source's minimum zoom level.
     */
    get_min_zoom_level(): number
    /**
     * Gets map source's name.
     */
    get_name(): string
    /**
     * Get the next source in the chain.
     */
    get_next_source(): MapSource
    /**
     * Gets map source's projection.
     */
    get_projection(): MapProjection
    /**
     * Get the renderer used for tiles rendering.
     */
    get_renderer(): Renderer
    /**
     * Gets the number of tiles in a row at this zoom level for this map source.
     * @param zoom_level the zoom level
     */
    get_row_count(zoom_level: number): number
    /**
     * Gets map source's tile size.
     */
    get_tile_size(): number
    /**
     * Gets the x position on the map using this map source's projection.
     * (0, 0) is located at the top left.
     * @param zoom_level the zoom level
     * @param longitude a longitude
     */
    get_x(zoom_level: number, longitude: number): number
    /**
     * Gets the y position on the map using this map source's projection.
     * (0, 0) is located at the top left.
     * @param zoom_level the zoom level
     * @param latitude a latitude
     */
    get_y(zoom_level: number, latitude: number): number
    /**
     * Sets the next map source in the chain.
     * @param next_source the next #ChamplainMapSource in the chain
     */
    set_next_source(next_source: MapSource): void
    /**
     * Sets the renderer used for tiles rendering.
     * @param renderer the renderer
     */
    set_renderer(renderer: Renderer): void

    // Own virtual methods of Champlain-0.12.Champlain.MapSource

    /**
     * Fills the tile with image data (either from cache, network or rendered
     * locally).
     * @virtual 
     * @param tile a #ChamplainTile
     */
    vfunc_fill_tile(tile: Tile): void
    /**
     * Gets map source's id.
     * @virtual 
     */
    vfunc_get_id(): string
    /**
     * Gets map source's license.
     * @virtual 
     */
    vfunc_get_license(): string
    /**
     * Gets map source's license URI.
     * @virtual 
     */
    vfunc_get_license_uri(): string
    /**
     * Gets map source's maximum zoom level.
     * @virtual 
     */
    vfunc_get_max_zoom_level(): number
    /**
     * Gets map source's minimum zoom level.
     * @virtual 
     */
    vfunc_get_min_zoom_level(): number
    /**
     * Gets map source's name.
     * @virtual 
     */
    vfunc_get_name(): string
    /**
     * Gets map source's projection.
     * @virtual 
     */
    vfunc_get_projection(): MapProjection
    /**
     * Gets map source's tile size.
     * @virtual 
     */
    vfunc_get_tile_size(): number

    // Class property signals of Champlain-0.12.Champlain.MapSource

    connect(sigName: "notify::next-source", callback: (($obj: MapSource, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::next-source", callback: (($obj: MapSource, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::next-source", ...args: any[]): void
    connect(sigName: "notify::renderer", callback: (($obj: MapSource, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::renderer", callback: (($obj: MapSource, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::renderer", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * The #ChamplainMapSource structure contains only private data
 * and should be accessed using the provided API
 * @class 
 */
class MapSource extends GObject.InitiallyUnowned {

    // Own properties of Champlain-0.12.Champlain.MapSource

    static name: string
    static $gtype: GObject.GType<MapSource>

    // Constructors of Champlain-0.12.Champlain.MapSource

    constructor(config?: MapSource_ConstructProps) 
    _init(config?: MapSource_ConstructProps): void
}

interface MapSourceChain_ConstructProps extends MapSource_ConstructProps {
}

interface MapSourceChain {

    // Own fields of Champlain-0.12.Champlain.MapSourceChain

    parent_instance: MapSource
    priv: MapSourceChainPrivate

    // Owm methods of Champlain-0.12.Champlain.MapSourceChain

    /**
     * Pops a map source from the top of the stack from the chain.
     */
    pop(): void
    /**
     * Pushes a map source into the chain.
     * @param map_source the #ChamplainMapSource to be pushed into the chain
     */
    push(map_source: MapSource): void

    // Class property signals of Champlain-0.12.Champlain.MapSourceChain

    connect(sigName: "notify::next-source", callback: (($obj: MapSourceChain, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::next-source", callback: (($obj: MapSourceChain, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::next-source", ...args: any[]): void
    connect(sigName: "notify::renderer", callback: (($obj: MapSourceChain, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::renderer", callback: (($obj: MapSourceChain, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::renderer", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * The #ChamplainMapSourceChain structure contains only private data
 * and should be accessed using the provided API
 * @class 
 */
class MapSourceChain extends MapSource {

    // Own properties of Champlain-0.12.Champlain.MapSourceChain

    static name: string
    static $gtype: GObject.GType<MapSourceChain>

    // Constructors of Champlain-0.12.Champlain.MapSourceChain

    constructor(config?: MapSourceChain_ConstructProps) 
    /**
     * Constructor of #ChamplainMapSourceChain.
     * @constructor 
     */
    constructor() 
    /**
     * Constructor of #ChamplainMapSourceChain.
     * @constructor 
     */
    static new(): MapSourceChain
    _init(config?: MapSourceChain_ConstructProps): void
}

interface MapSourceDesc_ConstructProps extends GObject.Object_ConstructProps {

    // Own constructor properties of Champlain-0.12.Champlain.MapSourceDesc

    /**
     * The map source constructor
     */
    constructor_?: object | null
    /**
     * User data passed to the constructor
     */
    data?: object | null
    /**
     * The id of the map source
     */
    id?: string | null
    /**
     * The license of the map source
     */
    license?: string | null
    /**
     * The license's uri for more information
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
    /**
     * The URI format of a network map source
     */
    uri_format?: string | null
}

interface MapSourceDesc {

    // Own properties of Champlain-0.12.Champlain.MapSourceDesc

    /**
     * The map source constructor
     */
    readonly constructor_: object
    /**
     * User data passed to the constructor
     */
    readonly data: object
    /**
     * The id of the map source
     */
    readonly id: string
    /**
     * The license of the map source
     */
    readonly license: string
    /**
     * The license's uri for more information
     */
    readonly license_uri: string
    /**
     * The maximum zoom level
     */
    readonly max_zoom_level: number
    /**
     * The minimum zoom level
     */
    readonly min_zoom_level: number
    /**
     * The name of the map source
     */
    readonly name: string
    /**
     * The map projection of the map source
     */
    readonly projection: MapProjection
    /**
     * The tile size of the map source
     */
    readonly tile_size: number
    /**
     * The URI format of a network map source
     */
    readonly uri_format: string

    // Own fields of Champlain-0.12.Champlain.MapSourceDesc

    parent_instance: GObject.Object
    priv: MapSourceDescPrivate

    // Owm methods of Champlain-0.12.Champlain.MapSourceDesc

    /**
     * Gets user data.
     */
    get_data(): object | null

    // Overloads of get_data

    /**
     * Gets a named field from the objects table of associations (see g_object_set_data()).
     * @param key name of the key for that association
     */
    get_data(key?: string): object | null
    get_data(...args: any[]): any
    get_data(args_or_key?: any[] | string): object | null | any
    /**
     * Gets map source's id.
     */
    get_id(): string
    /**
     * Gets map source's license.
     */
    get_license(): string
    /**
     * Gets map source's license URI.
     */
    get_license_uri(): string
    /**
     * Gets map source's maximum zoom level.
     */
    get_max_zoom_level(): number
    /**
     * Gets map source's minimum zoom level.
     */
    get_min_zoom_level(): number
    /**
     * Gets map source's name.
     */
    get_name(): string
    /**
     * Gets map source's projection.
     */
    get_projection(): MapProjection
    /**
     * Gets map source's tile size.
     */
    get_tile_size(): number
    /**
     * Gets network map source's URI format.
     */
    get_uri_format(): string

    // Class property signals of Champlain-0.12.Champlain.MapSourceDesc

    connect(sigName: "notify::constructor", callback: (($obj: MapSourceDesc, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::constructor", callback: (($obj: MapSourceDesc, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::constructor", ...args: any[]): void
    connect(sigName: "notify::data", callback: (($obj: MapSourceDesc, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::data", callback: (($obj: MapSourceDesc, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::data", ...args: any[]): void
    connect(sigName: "notify::id", callback: (($obj: MapSourceDesc, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::id", callback: (($obj: MapSourceDesc, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::id", ...args: any[]): void
    connect(sigName: "notify::license", callback: (($obj: MapSourceDesc, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::license", callback: (($obj: MapSourceDesc, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::license", ...args: any[]): void
    connect(sigName: "notify::license-uri", callback: (($obj: MapSourceDesc, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::license-uri", callback: (($obj: MapSourceDesc, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::license-uri", ...args: any[]): void
    connect(sigName: "notify::max-zoom-level", callback: (($obj: MapSourceDesc, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::max-zoom-level", callback: (($obj: MapSourceDesc, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::max-zoom-level", ...args: any[]): void
    connect(sigName: "notify::min-zoom-level", callback: (($obj: MapSourceDesc, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::min-zoom-level", callback: (($obj: MapSourceDesc, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::min-zoom-level", ...args: any[]): void
    connect(sigName: "notify::name", callback: (($obj: MapSourceDesc, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: MapSourceDesc, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::projection", callback: (($obj: MapSourceDesc, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::projection", callback: (($obj: MapSourceDesc, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::projection", ...args: any[]): void
    connect(sigName: "notify::tile-size", callback: (($obj: MapSourceDesc, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tile-size", callback: (($obj: MapSourceDesc, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tile-size", ...args: any[]): void
    connect(sigName: "notify::uri-format", callback: (($obj: MapSourceDesc, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::uri-format", callback: (($obj: MapSourceDesc, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::uri-format", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * The #ChamplainMapSourceDesc structure contains only private data
 * and should be accessed using the provided API
 * @class 
 */
class MapSourceDesc extends GObject.Object {

    // Own properties of Champlain-0.12.Champlain.MapSourceDesc

    static name: string
    static $gtype: GObject.GType<MapSourceDesc>

    // Constructors of Champlain-0.12.Champlain.MapSourceDesc

    constructor(config?: MapSourceDesc_ConstructProps) 
    _init(config?: MapSourceDesc_ConstructProps): void
}

interface MapSourceFactory_ConstructProps extends GObject.Object_ConstructProps {
}

interface MapSourceFactory {

    // Own fields of Champlain-0.12.Champlain.MapSourceFactory

    parent: GObject.Object
    priv: MapSourceFactoryPrivate

    // Owm methods of Champlain-0.12.Champlain.MapSourceFactory

    /**
     * Note: The id should not contain any character that can't be in a filename as it
     * will be used as the cache directory name for that map source.
     * @param id the wanted map source id
     */
    create(id: string): MapSource
    /**
     * Creates a cached map source.
     * @param id the wanted map source id
     */
    create_cached_source(id: string): MapSource
    /**
     * Creates a map source generating error tiles.
     * @param tile_size the size of the error tile
     */
    create_error_source(tile_size: number): MapSource
    /**
     * Creates a memory cached map source.
     * @param id the wanted map source id
     */
    create_memcached_source(id: string): MapSource
    /**
     * Get the list of registered map sources.
     */
    get_registered(): MapSourceDesc[]
    /**
     * Registers the new map source with the given constructor.  When this map
     * source is requested, the given constructor will be used to build the
     * map source.  #ChamplainMapSourceFactory will take ownership of the passed
     * #ChamplainMapSourceDesc, so don't free it.
     * @param desc the description of the map source
     */
    register(desc: MapSourceDesc): boolean

    // Class property signals of Champlain-0.12.Champlain.MapSourceFactory

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * The #ChamplainMapSourceFactory structure contains only private data
 * and should be accessed using the provided API
 * @class 
 */
class MapSourceFactory extends GObject.Object {

    // Own properties of Champlain-0.12.Champlain.MapSourceFactory

    static name: string
    static $gtype: GObject.GType<MapSourceFactory>

    // Constructors of Champlain-0.12.Champlain.MapSourceFactory

    constructor(config?: MapSourceFactory_ConstructProps) 
    _init(config?: MapSourceFactory_ConstructProps): void
    /**
     * A method to obtain the singleton object.
     */
    static dup_default(): MapSourceFactory
}

interface Marker_ConstructProps extends Atk.ImplementorIface_ConstructProps, Location_ConstructProps, Clutter.Animatable_ConstructProps, Clutter.Container_ConstructProps, Clutter.Scriptable_ConstructProps, Clutter.Actor_ConstructProps {

    // Own constructor properties of Champlain-0.12.Champlain.Marker

    /**
     * The draggable state of the marker
     */
    draggable?: boolean | null
    /**
     * The selectable state of the marker
     */
    selectable?: boolean | null
    /**
     * The selected state of the marker
     */
    selected?: boolean | null
}

/**
 * Signal callback interface for `button-press`
 */
interface Marker_ButtonPressSignalCallback {
    ($obj: Marker, event: Clutter.Event): void
}

/**
 * Signal callback interface for `button-release`
 */
interface Marker_ButtonReleaseSignalCallback {
    ($obj: Marker, event: Clutter.Event): void
}

/**
 * Signal callback interface for `drag-finish`
 */
interface Marker_DragFinishSignalCallback {
    ($obj: Marker, event: Clutter.Event): void
}

/**
 * Signal callback interface for `drag-motion`
 */
interface Marker_DragMotionSignalCallback {
    ($obj: Marker, dx: number, dy: number, event: Clutter.Event): void
}

interface Marker extends Atk.ImplementorIface, Location, Clutter.Animatable, Clutter.Container, Clutter.Scriptable {

    // Own properties of Champlain-0.12.Champlain.Marker

    /**
     * The draggable state of the marker
     */
    draggable: boolean
    /**
     * The selectable state of the marker
     */
    selectable: boolean
    /**
     * The selected state of the marker
     */
    selected: boolean

    // Own fields of Champlain-0.12.Champlain.Marker

    parent: Clutter.Actor
    priv: MarkerPrivate

    // Owm methods of Champlain-0.12.Champlain.Marker

    /**
     * Animates the marker as if it were falling from the sky onto the map.
     */
    animate_in(): void
    /**
     * Animates the marker as if it were falling from the sky onto the map after
     * delay.
     * @param delay The delay in milliseconds
     */
    animate_in_with_delay(delay: number): void
    /**
     * Animates the marker as if it were drawn through the sky.
     */
    animate_out(): void
    /**
     * Animates the marker as if it were drawn through the sky after
     * delay.
     * @param delay The delay in milliseconds
     */
    animate_out_with_delay(delay: number): void
    /**
     * Checks whether the marker is draggable.
     */
    get_draggable(): boolean
    /**
     * Checks whether the marker is selectable.
     */
    get_selectable(): boolean
    /**
     * Checks whether the marker is selected.
     */
    get_selected(): boolean
    /**
     * Sets the marker as draggable or not.
     * @param value the draggable state
     */
    set_draggable(value: boolean): void
    /**
     * Sets the marker as selectable or not.
     * @param value the selectable state
     */
    set_selectable(value: boolean): void
    /**
     * Sets the marker as selected or not. This will affect the "Selected" look
     * of the marker.
     * @param value the selected state
     */
    set_selected(value: boolean): void

    // Own signals of Champlain-0.12.Champlain.Marker

    connect(sigName: "button-press", callback: Marker_ButtonPressSignalCallback): number
    connect_after(sigName: "button-press", callback: Marker_ButtonPressSignalCallback): number
    emit(sigName: "button-press", event: Clutter.Event, ...args: any[]): void
    connect(sigName: "button-release", callback: Marker_ButtonReleaseSignalCallback): number
    connect_after(sigName: "button-release", callback: Marker_ButtonReleaseSignalCallback): number
    emit(sigName: "button-release", event: Clutter.Event, ...args: any[]): void
    connect(sigName: "drag-finish", callback: Marker_DragFinishSignalCallback): number
    connect_after(sigName: "drag-finish", callback: Marker_DragFinishSignalCallback): number
    emit(sigName: "drag-finish", event: Clutter.Event, ...args: any[]): void
    connect(sigName: "drag-motion", callback: Marker_DragMotionSignalCallback): number
    connect_after(sigName: "drag-motion", callback: Marker_DragMotionSignalCallback): number
    emit(sigName: "drag-motion", dx: number, dy: number, event: Clutter.Event, ...args: any[]): void

    // Class property signals of Champlain-0.12.Champlain.Marker

    connect(sigName: "notify::draggable", callback: (($obj: Marker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::draggable", callback: (($obj: Marker, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::draggable", ...args: any[]): void
    connect(sigName: "notify::selectable", callback: (($obj: Marker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::selectable", callback: (($obj: Marker, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::selectable", ...args: any[]): void
    connect(sigName: "notify::selected", callback: (($obj: Marker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::selected", callback: (($obj: Marker, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::selected", ...args: any[]): void
    connect(sigName: "notify::actions", callback: (($obj: Marker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::actions", callback: (($obj: Marker, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::actions", ...args: any[]): void
    connect(sigName: "notify::allocation", callback: (($obj: Marker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::allocation", callback: (($obj: Marker, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::allocation", ...args: any[]): void
    connect(sigName: "notify::anchor-gravity", callback: (($obj: Marker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::anchor-gravity", callback: (($obj: Marker, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::anchor-gravity", ...args: any[]): void
    connect(sigName: "notify::anchor-x", callback: (($obj: Marker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::anchor-x", callback: (($obj: Marker, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::anchor-x", ...args: any[]): void
    connect(sigName: "notify::anchor-y", callback: (($obj: Marker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::anchor-y", callback: (($obj: Marker, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::anchor-y", ...args: any[]): void
    connect(sigName: "notify::background-color", callback: (($obj: Marker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::background-color", callback: (($obj: Marker, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::background-color", ...args: any[]): void
    connect(sigName: "notify::background-color-set", callback: (($obj: Marker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::background-color-set", callback: (($obj: Marker, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::background-color-set", ...args: any[]): void
    connect(sigName: "notify::child-transform", callback: (($obj: Marker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::child-transform", callback: (($obj: Marker, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::child-transform", ...args: any[]): void
    connect(sigName: "notify::child-transform-set", callback: (($obj: Marker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::child-transform-set", callback: (($obj: Marker, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::child-transform-set", ...args: any[]): void
    connect(sigName: "notify::clip", callback: (($obj: Marker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::clip", callback: (($obj: Marker, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::clip", ...args: any[]): void
    connect(sigName: "notify::clip-rect", callback: (($obj: Marker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::clip-rect", callback: (($obj: Marker, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::clip-rect", ...args: any[]): void
    connect(sigName: "notify::clip-to-allocation", callback: (($obj: Marker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::clip-to-allocation", callback: (($obj: Marker, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::clip-to-allocation", ...args: any[]): void
    connect(sigName: "notify::constraints", callback: (($obj: Marker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::constraints", callback: (($obj: Marker, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::constraints", ...args: any[]): void
    connect(sigName: "notify::content", callback: (($obj: Marker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::content", callback: (($obj: Marker, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::content", ...args: any[]): void
    connect(sigName: "notify::content-box", callback: (($obj: Marker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::content-box", callback: (($obj: Marker, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::content-box", ...args: any[]): void
    connect(sigName: "notify::content-gravity", callback: (($obj: Marker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::content-gravity", callback: (($obj: Marker, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::content-gravity", ...args: any[]): void
    connect(sigName: "notify::content-repeat", callback: (($obj: Marker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::content-repeat", callback: (($obj: Marker, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::content-repeat", ...args: any[]): void
    connect(sigName: "notify::depth", callback: (($obj: Marker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::depth", callback: (($obj: Marker, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::depth", ...args: any[]): void
    connect(sigName: "notify::effect", callback: (($obj: Marker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::effect", callback: (($obj: Marker, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::effect", ...args: any[]): void
    connect(sigName: "notify::first-child", callback: (($obj: Marker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::first-child", callback: (($obj: Marker, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::first-child", ...args: any[]): void
    connect(sigName: "notify::fixed-position-set", callback: (($obj: Marker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fixed-position-set", callback: (($obj: Marker, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::fixed-position-set", ...args: any[]): void
    connect(sigName: "notify::fixed-x", callback: (($obj: Marker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fixed-x", callback: (($obj: Marker, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::fixed-x", ...args: any[]): void
    connect(sigName: "notify::fixed-y", callback: (($obj: Marker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fixed-y", callback: (($obj: Marker, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::fixed-y", ...args: any[]): void
    connect(sigName: "notify::has-clip", callback: (($obj: Marker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-clip", callback: (($obj: Marker, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-clip", ...args: any[]): void
    connect(sigName: "notify::has-pointer", callback: (($obj: Marker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-pointer", callback: (($obj: Marker, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-pointer", ...args: any[]): void
    connect(sigName: "notify::height", callback: (($obj: Marker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height", callback: (($obj: Marker, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::height", ...args: any[]): void
    connect(sigName: "notify::last-child", callback: (($obj: Marker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::last-child", callback: (($obj: Marker, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::last-child", ...args: any[]): void
    connect(sigName: "notify::layout-manager", callback: (($obj: Marker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::layout-manager", callback: (($obj: Marker, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::layout-manager", ...args: any[]): void
    connect(sigName: "notify::magnification-filter", callback: (($obj: Marker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::magnification-filter", callback: (($obj: Marker, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::magnification-filter", ...args: any[]): void
    connect(sigName: "notify::mapped", callback: (($obj: Marker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::mapped", callback: (($obj: Marker, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::mapped", ...args: any[]): void
    connect(sigName: "notify::margin-bottom", callback: (($obj: Marker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-bottom", callback: (($obj: Marker, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-bottom", ...args: any[]): void
    connect(sigName: "notify::margin-left", callback: (($obj: Marker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-left", callback: (($obj: Marker, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-left", ...args: any[]): void
    connect(sigName: "notify::margin-right", callback: (($obj: Marker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-right", callback: (($obj: Marker, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-right", ...args: any[]): void
    connect(sigName: "notify::margin-top", callback: (($obj: Marker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-top", callback: (($obj: Marker, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-top", ...args: any[]): void
    connect(sigName: "notify::min-height", callback: (($obj: Marker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::min-height", callback: (($obj: Marker, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::min-height", ...args: any[]): void
    connect(sigName: "notify::min-height-set", callback: (($obj: Marker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::min-height-set", callback: (($obj: Marker, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::min-height-set", ...args: any[]): void
    connect(sigName: "notify::min-width", callback: (($obj: Marker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::min-width", callback: (($obj: Marker, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::min-width", ...args: any[]): void
    connect(sigName: "notify::min-width-set", callback: (($obj: Marker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::min-width-set", callback: (($obj: Marker, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::min-width-set", ...args: any[]): void
    connect(sigName: "notify::minification-filter", callback: (($obj: Marker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::minification-filter", callback: (($obj: Marker, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::minification-filter", ...args: any[]): void
    connect(sigName: "notify::name", callback: (($obj: Marker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: Marker, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::natural-height", callback: (($obj: Marker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::natural-height", callback: (($obj: Marker, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::natural-height", ...args: any[]): void
    connect(sigName: "notify::natural-height-set", callback: (($obj: Marker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::natural-height-set", callback: (($obj: Marker, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::natural-height-set", ...args: any[]): void
    connect(sigName: "notify::natural-width", callback: (($obj: Marker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::natural-width", callback: (($obj: Marker, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::natural-width", ...args: any[]): void
    connect(sigName: "notify::natural-width-set", callback: (($obj: Marker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::natural-width-set", callback: (($obj: Marker, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::natural-width-set", ...args: any[]): void
    connect(sigName: "notify::offscreen-redirect", callback: (($obj: Marker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::offscreen-redirect", callback: (($obj: Marker, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::offscreen-redirect", ...args: any[]): void
    connect(sigName: "notify::opacity", callback: (($obj: Marker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opacity", callback: (($obj: Marker, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::opacity", ...args: any[]): void
    connect(sigName: "notify::pivot-point", callback: (($obj: Marker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::pivot-point", callback: (($obj: Marker, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::pivot-point", ...args: any[]): void
    connect(sigName: "notify::pivot-point-z", callback: (($obj: Marker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::pivot-point-z", callback: (($obj: Marker, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::pivot-point-z", ...args: any[]): void
    connect(sigName: "notify::position", callback: (($obj: Marker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::position", callback: (($obj: Marker, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::position", ...args: any[]): void
    connect(sigName: "notify::reactive", callback: (($obj: Marker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::reactive", callback: (($obj: Marker, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::reactive", ...args: any[]): void
    connect(sigName: "notify::realized", callback: (($obj: Marker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::realized", callback: (($obj: Marker, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::realized", ...args: any[]): void
    connect(sigName: "notify::request-mode", callback: (($obj: Marker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::request-mode", callback: (($obj: Marker, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::request-mode", ...args: any[]): void
    connect(sigName: "notify::rotation-angle-x", callback: (($obj: Marker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::rotation-angle-x", callback: (($obj: Marker, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::rotation-angle-x", ...args: any[]): void
    connect(sigName: "notify::rotation-angle-y", callback: (($obj: Marker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::rotation-angle-y", callback: (($obj: Marker, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::rotation-angle-y", ...args: any[]): void
    connect(sigName: "notify::rotation-angle-z", callback: (($obj: Marker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::rotation-angle-z", callback: (($obj: Marker, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::rotation-angle-z", ...args: any[]): void
    connect(sigName: "notify::rotation-center-x", callback: (($obj: Marker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::rotation-center-x", callback: (($obj: Marker, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::rotation-center-x", ...args: any[]): void
    connect(sigName: "notify::rotation-center-y", callback: (($obj: Marker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::rotation-center-y", callback: (($obj: Marker, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::rotation-center-y", ...args: any[]): void
    connect(sigName: "notify::rotation-center-z", callback: (($obj: Marker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::rotation-center-z", callback: (($obj: Marker, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::rotation-center-z", ...args: any[]): void
    connect(sigName: "notify::rotation-center-z-gravity", callback: (($obj: Marker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::rotation-center-z-gravity", callback: (($obj: Marker, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::rotation-center-z-gravity", ...args: any[]): void
    connect(sigName: "notify::scale-center-x", callback: (($obj: Marker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-center-x", callback: (($obj: Marker, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::scale-center-x", ...args: any[]): void
    connect(sigName: "notify::scale-center-y", callback: (($obj: Marker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-center-y", callback: (($obj: Marker, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::scale-center-y", ...args: any[]): void
    connect(sigName: "notify::scale-gravity", callback: (($obj: Marker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-gravity", callback: (($obj: Marker, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::scale-gravity", ...args: any[]): void
    connect(sigName: "notify::scale-x", callback: (($obj: Marker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-x", callback: (($obj: Marker, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::scale-x", ...args: any[]): void
    connect(sigName: "notify::scale-y", callback: (($obj: Marker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-y", callback: (($obj: Marker, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::scale-y", ...args: any[]): void
    connect(sigName: "notify::scale-z", callback: (($obj: Marker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-z", callback: (($obj: Marker, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::scale-z", ...args: any[]): void
    connect(sigName: "notify::show-on-set-parent", callback: (($obj: Marker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::show-on-set-parent", callback: (($obj: Marker, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::show-on-set-parent", ...args: any[]): void
    connect(sigName: "notify::size", callback: (($obj: Marker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::size", callback: (($obj: Marker, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::size", ...args: any[]): void
    connect(sigName: "notify::text-direction", callback: (($obj: Marker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::text-direction", callback: (($obj: Marker, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::text-direction", ...args: any[]): void
    connect(sigName: "notify::transform", callback: (($obj: Marker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::transform", callback: (($obj: Marker, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::transform", ...args: any[]): void
    connect(sigName: "notify::transform-set", callback: (($obj: Marker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::transform-set", callback: (($obj: Marker, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::transform-set", ...args: any[]): void
    connect(sigName: "notify::translation-x", callback: (($obj: Marker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::translation-x", callback: (($obj: Marker, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::translation-x", ...args: any[]): void
    connect(sigName: "notify::translation-y", callback: (($obj: Marker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::translation-y", callback: (($obj: Marker, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::translation-y", ...args: any[]): void
    connect(sigName: "notify::translation-z", callback: (($obj: Marker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::translation-z", callback: (($obj: Marker, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::translation-z", ...args: any[]): void
    connect(sigName: "notify::visible", callback: (($obj: Marker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visible", callback: (($obj: Marker, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::visible", ...args: any[]): void
    connect(sigName: "notify::width", callback: (($obj: Marker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::width", callback: (($obj: Marker, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::width", ...args: any[]): void
    connect(sigName: "notify::x", callback: (($obj: Marker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::x", callback: (($obj: Marker, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::x", ...args: any[]): void
    connect(sigName: "notify::x-align", callback: (($obj: Marker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::x-align", callback: (($obj: Marker, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::x-align", ...args: any[]): void
    connect(sigName: "notify::x-expand", callback: (($obj: Marker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::x-expand", callback: (($obj: Marker, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::x-expand", ...args: any[]): void
    connect(sigName: "notify::y", callback: (($obj: Marker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::y", callback: (($obj: Marker, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::y", ...args: any[]): void
    connect(sigName: "notify::y-align", callback: (($obj: Marker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::y-align", callback: (($obj: Marker, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::y-align", ...args: any[]): void
    connect(sigName: "notify::y-expand", callback: (($obj: Marker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::y-expand", callback: (($obj: Marker, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::y-expand", ...args: any[]): void
    connect(sigName: "notify::z-position", callback: (($obj: Marker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::z-position", callback: (($obj: Marker, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::z-position", ...args: any[]): void
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
 * The #ChamplainMarker structure contains only private data
 * and should be accessed using the provided API
 * @class 
 */
class Marker extends Clutter.Actor {

    // Own properties of Champlain-0.12.Champlain.Marker

    static name: string
    static $gtype: GObject.GType<Marker>

    // Constructors of Champlain-0.12.Champlain.Marker

    constructor(config?: Marker_ConstructProps) 
    /**
     * Creates an instance of #ChamplainMarker.
     * @constructor 
     */
    constructor() 
    /**
     * Creates an instance of #ChamplainMarker.
     * @constructor 
     */
    static new(): Marker
    _init(config?: Marker_ConstructProps): void
    /**
     * Gets the selection color.
     */
    static get_selection_color(): Clutter.Color
    /**
     * Gets the selection text color.
     */
    static get_selection_text_color(): Clutter.Color
    /**
     * Changes the selection color, this is to ensure a better integration with
     * the desktop, this is automatically done by GtkChamplainEmbed.
     * @param color a #ClutterColor
     */
    static set_selection_color(color: Clutter.Color): void
    /**
     * Changes the selection text color, this is to ensure a better integration with
     * the desktop, this is automatically done by GtkChamplainEmbed.
     * @param color a #ClutterColor
     */
    static set_selection_text_color(color: Clutter.Color): void
}

interface MarkerLayer_ConstructProps extends Atk.ImplementorIface_ConstructProps, Exportable_ConstructProps, Clutter.Animatable_ConstructProps, Clutter.Container_ConstructProps, Clutter.Scriptable_ConstructProps, Layer_ConstructProps {

    // Own constructor properties of Champlain-0.12.Champlain.MarkerLayer

    /**
     * Determines the type of selection that will be performed.
     */
    selection_mode?: SelectionMode | null
}

interface MarkerLayer extends Atk.ImplementorIface, Exportable, Clutter.Animatable, Clutter.Container, Clutter.Scriptable {

    // Own properties of Champlain-0.12.Champlain.MarkerLayer

    /**
     * Determines the type of selection that will be performed.
     */
    selection_mode: SelectionMode

    // Own fields of Champlain-0.12.Champlain.MarkerLayer

    parent: Layer
    priv: MarkerLayerPrivate

    // Owm methods of Champlain-0.12.Champlain.MarkerLayer

    /**
     * Adds the marker to the layer.
     * @param marker a #ChamplainMarker
     */
    add_marker(marker: Marker): void
    /**
     * Fade in all markers in the layer with an animation
     */
    animate_in_all_markers(): void
    /**
     * Fade out all markers in the layer with an animation
     */
    animate_out_all_markers(): void
    /**
     * Gets a copy of the list of all markers inserted into the layer. You should
     * free the list but not its contents.
     */
    get_markers(): Marker[]
    /**
     * Gets a list of selected markers in the layer.
     */
    get_selected(): Marker[]
    /**
     * Gets the selection mode of the layer.
     */
    get_selection_mode(): SelectionMode
    /**
     * Hides all the markers in the layer
     */
    hide_all_markers(): void
    /**
     * Removes all markers from the layer.
     */
    remove_all(): void
    /**
     * Removes the marker from the layer.
     * @param marker a #ChamplainMarker
     */
    remove_marker(marker: Marker): void
    /**
     * Selects all markers in the layer.
     */
    select_all_markers(): void
    /**
     * Sets all markers draggable in the layer
     */
    set_all_markers_draggable(): void
    /**
     * Sets all markers undraggable in the layer
     */
    set_all_markers_undraggable(): void
    /**
     * Sets the selection mode of the layer.
     * 
     * NOTE: changing selection mode to CHAMPLAIN_SELECTION_NONE or
     * CHAMPLAIN_SELECTION_SINGLE will clear all previously selected markers.
     * @param mode a #ChamplainSelectionMode value
     */
    set_selection_mode(mode: SelectionMode): void
    /**
     * Shows all markers in the layer
     */
    show_all_markers(): void
    /**
     * Unselects all markers in the layer.
     */
    unselect_all_markers(): void

    // Class property signals of Champlain-0.12.Champlain.MarkerLayer

    connect(sigName: "notify::selection-mode", callback: (($obj: MarkerLayer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::selection-mode", callback: (($obj: MarkerLayer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::selection-mode", ...args: any[]): void
    connect(sigName: "notify::actions", callback: (($obj: MarkerLayer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::actions", callback: (($obj: MarkerLayer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::actions", ...args: any[]): void
    connect(sigName: "notify::allocation", callback: (($obj: MarkerLayer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::allocation", callback: (($obj: MarkerLayer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::allocation", ...args: any[]): void
    connect(sigName: "notify::anchor-gravity", callback: (($obj: MarkerLayer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::anchor-gravity", callback: (($obj: MarkerLayer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::anchor-gravity", ...args: any[]): void
    connect(sigName: "notify::anchor-x", callback: (($obj: MarkerLayer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::anchor-x", callback: (($obj: MarkerLayer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::anchor-x", ...args: any[]): void
    connect(sigName: "notify::anchor-y", callback: (($obj: MarkerLayer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::anchor-y", callback: (($obj: MarkerLayer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::anchor-y", ...args: any[]): void
    connect(sigName: "notify::background-color", callback: (($obj: MarkerLayer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::background-color", callback: (($obj: MarkerLayer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::background-color", ...args: any[]): void
    connect(sigName: "notify::background-color-set", callback: (($obj: MarkerLayer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::background-color-set", callback: (($obj: MarkerLayer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::background-color-set", ...args: any[]): void
    connect(sigName: "notify::child-transform", callback: (($obj: MarkerLayer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::child-transform", callback: (($obj: MarkerLayer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::child-transform", ...args: any[]): void
    connect(sigName: "notify::child-transform-set", callback: (($obj: MarkerLayer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::child-transform-set", callback: (($obj: MarkerLayer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::child-transform-set", ...args: any[]): void
    connect(sigName: "notify::clip", callback: (($obj: MarkerLayer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::clip", callback: (($obj: MarkerLayer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::clip", ...args: any[]): void
    connect(sigName: "notify::clip-rect", callback: (($obj: MarkerLayer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::clip-rect", callback: (($obj: MarkerLayer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::clip-rect", ...args: any[]): void
    connect(sigName: "notify::clip-to-allocation", callback: (($obj: MarkerLayer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::clip-to-allocation", callback: (($obj: MarkerLayer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::clip-to-allocation", ...args: any[]): void
    connect(sigName: "notify::constraints", callback: (($obj: MarkerLayer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::constraints", callback: (($obj: MarkerLayer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::constraints", ...args: any[]): void
    connect(sigName: "notify::content", callback: (($obj: MarkerLayer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::content", callback: (($obj: MarkerLayer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::content", ...args: any[]): void
    connect(sigName: "notify::content-box", callback: (($obj: MarkerLayer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::content-box", callback: (($obj: MarkerLayer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::content-box", ...args: any[]): void
    connect(sigName: "notify::content-gravity", callback: (($obj: MarkerLayer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::content-gravity", callback: (($obj: MarkerLayer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::content-gravity", ...args: any[]): void
    connect(sigName: "notify::content-repeat", callback: (($obj: MarkerLayer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::content-repeat", callback: (($obj: MarkerLayer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::content-repeat", ...args: any[]): void
    connect(sigName: "notify::depth", callback: (($obj: MarkerLayer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::depth", callback: (($obj: MarkerLayer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::depth", ...args: any[]): void
    connect(sigName: "notify::effect", callback: (($obj: MarkerLayer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::effect", callback: (($obj: MarkerLayer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::effect", ...args: any[]): void
    connect(sigName: "notify::first-child", callback: (($obj: MarkerLayer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::first-child", callback: (($obj: MarkerLayer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::first-child", ...args: any[]): void
    connect(sigName: "notify::fixed-position-set", callback: (($obj: MarkerLayer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fixed-position-set", callback: (($obj: MarkerLayer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::fixed-position-set", ...args: any[]): void
    connect(sigName: "notify::fixed-x", callback: (($obj: MarkerLayer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fixed-x", callback: (($obj: MarkerLayer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::fixed-x", ...args: any[]): void
    connect(sigName: "notify::fixed-y", callback: (($obj: MarkerLayer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fixed-y", callback: (($obj: MarkerLayer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::fixed-y", ...args: any[]): void
    connect(sigName: "notify::has-clip", callback: (($obj: MarkerLayer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-clip", callback: (($obj: MarkerLayer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-clip", ...args: any[]): void
    connect(sigName: "notify::has-pointer", callback: (($obj: MarkerLayer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-pointer", callback: (($obj: MarkerLayer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-pointer", ...args: any[]): void
    connect(sigName: "notify::height", callback: (($obj: MarkerLayer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height", callback: (($obj: MarkerLayer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::height", ...args: any[]): void
    connect(sigName: "notify::last-child", callback: (($obj: MarkerLayer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::last-child", callback: (($obj: MarkerLayer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::last-child", ...args: any[]): void
    connect(sigName: "notify::layout-manager", callback: (($obj: MarkerLayer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::layout-manager", callback: (($obj: MarkerLayer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::layout-manager", ...args: any[]): void
    connect(sigName: "notify::magnification-filter", callback: (($obj: MarkerLayer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::magnification-filter", callback: (($obj: MarkerLayer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::magnification-filter", ...args: any[]): void
    connect(sigName: "notify::mapped", callback: (($obj: MarkerLayer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::mapped", callback: (($obj: MarkerLayer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::mapped", ...args: any[]): void
    connect(sigName: "notify::margin-bottom", callback: (($obj: MarkerLayer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-bottom", callback: (($obj: MarkerLayer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-bottom", ...args: any[]): void
    connect(sigName: "notify::margin-left", callback: (($obj: MarkerLayer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-left", callback: (($obj: MarkerLayer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-left", ...args: any[]): void
    connect(sigName: "notify::margin-right", callback: (($obj: MarkerLayer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-right", callback: (($obj: MarkerLayer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-right", ...args: any[]): void
    connect(sigName: "notify::margin-top", callback: (($obj: MarkerLayer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-top", callback: (($obj: MarkerLayer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-top", ...args: any[]): void
    connect(sigName: "notify::min-height", callback: (($obj: MarkerLayer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::min-height", callback: (($obj: MarkerLayer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::min-height", ...args: any[]): void
    connect(sigName: "notify::min-height-set", callback: (($obj: MarkerLayer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::min-height-set", callback: (($obj: MarkerLayer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::min-height-set", ...args: any[]): void
    connect(sigName: "notify::min-width", callback: (($obj: MarkerLayer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::min-width", callback: (($obj: MarkerLayer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::min-width", ...args: any[]): void
    connect(sigName: "notify::min-width-set", callback: (($obj: MarkerLayer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::min-width-set", callback: (($obj: MarkerLayer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::min-width-set", ...args: any[]): void
    connect(sigName: "notify::minification-filter", callback: (($obj: MarkerLayer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::minification-filter", callback: (($obj: MarkerLayer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::minification-filter", ...args: any[]): void
    connect(sigName: "notify::name", callback: (($obj: MarkerLayer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: MarkerLayer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::natural-height", callback: (($obj: MarkerLayer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::natural-height", callback: (($obj: MarkerLayer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::natural-height", ...args: any[]): void
    connect(sigName: "notify::natural-height-set", callback: (($obj: MarkerLayer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::natural-height-set", callback: (($obj: MarkerLayer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::natural-height-set", ...args: any[]): void
    connect(sigName: "notify::natural-width", callback: (($obj: MarkerLayer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::natural-width", callback: (($obj: MarkerLayer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::natural-width", ...args: any[]): void
    connect(sigName: "notify::natural-width-set", callback: (($obj: MarkerLayer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::natural-width-set", callback: (($obj: MarkerLayer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::natural-width-set", ...args: any[]): void
    connect(sigName: "notify::offscreen-redirect", callback: (($obj: MarkerLayer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::offscreen-redirect", callback: (($obj: MarkerLayer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::offscreen-redirect", ...args: any[]): void
    connect(sigName: "notify::opacity", callback: (($obj: MarkerLayer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opacity", callback: (($obj: MarkerLayer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::opacity", ...args: any[]): void
    connect(sigName: "notify::pivot-point", callback: (($obj: MarkerLayer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::pivot-point", callback: (($obj: MarkerLayer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::pivot-point", ...args: any[]): void
    connect(sigName: "notify::pivot-point-z", callback: (($obj: MarkerLayer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::pivot-point-z", callback: (($obj: MarkerLayer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::pivot-point-z", ...args: any[]): void
    connect(sigName: "notify::position", callback: (($obj: MarkerLayer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::position", callback: (($obj: MarkerLayer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::position", ...args: any[]): void
    connect(sigName: "notify::reactive", callback: (($obj: MarkerLayer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::reactive", callback: (($obj: MarkerLayer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::reactive", ...args: any[]): void
    connect(sigName: "notify::realized", callback: (($obj: MarkerLayer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::realized", callback: (($obj: MarkerLayer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::realized", ...args: any[]): void
    connect(sigName: "notify::request-mode", callback: (($obj: MarkerLayer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::request-mode", callback: (($obj: MarkerLayer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::request-mode", ...args: any[]): void
    connect(sigName: "notify::rotation-angle-x", callback: (($obj: MarkerLayer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::rotation-angle-x", callback: (($obj: MarkerLayer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::rotation-angle-x", ...args: any[]): void
    connect(sigName: "notify::rotation-angle-y", callback: (($obj: MarkerLayer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::rotation-angle-y", callback: (($obj: MarkerLayer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::rotation-angle-y", ...args: any[]): void
    connect(sigName: "notify::rotation-angle-z", callback: (($obj: MarkerLayer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::rotation-angle-z", callback: (($obj: MarkerLayer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::rotation-angle-z", ...args: any[]): void
    connect(sigName: "notify::rotation-center-x", callback: (($obj: MarkerLayer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::rotation-center-x", callback: (($obj: MarkerLayer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::rotation-center-x", ...args: any[]): void
    connect(sigName: "notify::rotation-center-y", callback: (($obj: MarkerLayer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::rotation-center-y", callback: (($obj: MarkerLayer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::rotation-center-y", ...args: any[]): void
    connect(sigName: "notify::rotation-center-z", callback: (($obj: MarkerLayer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::rotation-center-z", callback: (($obj: MarkerLayer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::rotation-center-z", ...args: any[]): void
    connect(sigName: "notify::rotation-center-z-gravity", callback: (($obj: MarkerLayer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::rotation-center-z-gravity", callback: (($obj: MarkerLayer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::rotation-center-z-gravity", ...args: any[]): void
    connect(sigName: "notify::scale-center-x", callback: (($obj: MarkerLayer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-center-x", callback: (($obj: MarkerLayer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::scale-center-x", ...args: any[]): void
    connect(sigName: "notify::scale-center-y", callback: (($obj: MarkerLayer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-center-y", callback: (($obj: MarkerLayer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::scale-center-y", ...args: any[]): void
    connect(sigName: "notify::scale-gravity", callback: (($obj: MarkerLayer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-gravity", callback: (($obj: MarkerLayer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::scale-gravity", ...args: any[]): void
    connect(sigName: "notify::scale-x", callback: (($obj: MarkerLayer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-x", callback: (($obj: MarkerLayer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::scale-x", ...args: any[]): void
    connect(sigName: "notify::scale-y", callback: (($obj: MarkerLayer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-y", callback: (($obj: MarkerLayer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::scale-y", ...args: any[]): void
    connect(sigName: "notify::scale-z", callback: (($obj: MarkerLayer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-z", callback: (($obj: MarkerLayer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::scale-z", ...args: any[]): void
    connect(sigName: "notify::show-on-set-parent", callback: (($obj: MarkerLayer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::show-on-set-parent", callback: (($obj: MarkerLayer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::show-on-set-parent", ...args: any[]): void
    connect(sigName: "notify::size", callback: (($obj: MarkerLayer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::size", callback: (($obj: MarkerLayer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::size", ...args: any[]): void
    connect(sigName: "notify::text-direction", callback: (($obj: MarkerLayer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::text-direction", callback: (($obj: MarkerLayer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::text-direction", ...args: any[]): void
    connect(sigName: "notify::transform", callback: (($obj: MarkerLayer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::transform", callback: (($obj: MarkerLayer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::transform", ...args: any[]): void
    connect(sigName: "notify::transform-set", callback: (($obj: MarkerLayer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::transform-set", callback: (($obj: MarkerLayer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::transform-set", ...args: any[]): void
    connect(sigName: "notify::translation-x", callback: (($obj: MarkerLayer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::translation-x", callback: (($obj: MarkerLayer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::translation-x", ...args: any[]): void
    connect(sigName: "notify::translation-y", callback: (($obj: MarkerLayer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::translation-y", callback: (($obj: MarkerLayer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::translation-y", ...args: any[]): void
    connect(sigName: "notify::translation-z", callback: (($obj: MarkerLayer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::translation-z", callback: (($obj: MarkerLayer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::translation-z", ...args: any[]): void
    connect(sigName: "notify::visible", callback: (($obj: MarkerLayer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visible", callback: (($obj: MarkerLayer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::visible", ...args: any[]): void
    connect(sigName: "notify::width", callback: (($obj: MarkerLayer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::width", callback: (($obj: MarkerLayer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::width", ...args: any[]): void
    connect(sigName: "notify::x", callback: (($obj: MarkerLayer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::x", callback: (($obj: MarkerLayer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::x", ...args: any[]): void
    connect(sigName: "notify::x-align", callback: (($obj: MarkerLayer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::x-align", callback: (($obj: MarkerLayer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::x-align", ...args: any[]): void
    connect(sigName: "notify::x-expand", callback: (($obj: MarkerLayer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::x-expand", callback: (($obj: MarkerLayer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::x-expand", ...args: any[]): void
    connect(sigName: "notify::y", callback: (($obj: MarkerLayer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::y", callback: (($obj: MarkerLayer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::y", ...args: any[]): void
    connect(sigName: "notify::y-align", callback: (($obj: MarkerLayer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::y-align", callback: (($obj: MarkerLayer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::y-align", ...args: any[]): void
    connect(sigName: "notify::y-expand", callback: (($obj: MarkerLayer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::y-expand", callback: (($obj: MarkerLayer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::y-expand", ...args: any[]): void
    connect(sigName: "notify::z-position", callback: (($obj: MarkerLayer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::z-position", callback: (($obj: MarkerLayer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::z-position", ...args: any[]): void
    connect(sigName: "notify::surface", callback: (($obj: MarkerLayer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::surface", callback: (($obj: MarkerLayer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::surface", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * The #ChamplainMarkerLayer structure contains only private data
 * and should be accessed using the provided API
 * @class 
 */
class MarkerLayer extends Layer {

    // Own properties of Champlain-0.12.Champlain.MarkerLayer

    static name: string
    static $gtype: GObject.GType<MarkerLayer>

    // Constructors of Champlain-0.12.Champlain.MarkerLayer

    constructor(config?: MarkerLayer_ConstructProps) 
    /**
     * Creates a new instance of #ChamplainMarkerLayer.
     * @constructor 
     */
    constructor() 
    /**
     * Creates a new instance of #ChamplainMarkerLayer.
     * @constructor 
     */
    static new(): MarkerLayer

    // Overloads of new

    /**
     * Creates a new #ClutterActor.
     * 
     * A newly created actor has a floating reference, which will be sunk
     * when it is added to another actor.
     * @constructor 
     */
    static new(): Clutter.Actor
    /**
     * Creates a new instance of #ChamplainMarkerLayer with the specified selection mode.
     * @constructor 
     * @param mode Selection mode
     */
    static new_full(mode: SelectionMode): MarkerLayer
    _init(config?: MarkerLayer_ConstructProps): void
}

interface MemoryCache_ConstructProps extends TileCache_ConstructProps {

    // Own constructor properties of Champlain-0.12.Champlain.MemoryCache

    /**
     * The maximum number of tiles that are stored in the cache.
     */
    size_limit?: number | null
}

interface MemoryCache {

    // Own properties of Champlain-0.12.Champlain.MemoryCache

    /**
     * The maximum number of tiles that are stored in the cache.
     */
    size_limit: number

    // Own fields of Champlain-0.12.Champlain.MemoryCache

    parent_instance: TileCache
    priv: MemoryCachePrivate

    // Owm methods of Champlain-0.12.Champlain.MemoryCache

    /**
     * Cleans the contents of the cache.
     */
    clean(): void
    /**
     * Gets the maximum number of tiles stored in the cache.
     */
    get_size_limit(): number
    /**
     * Sets the maximum number of tiles stored in the cache.
     * @param size_limit maximum number of tiles stored in the cache
     */
    set_size_limit(size_limit: number): void

    // Class property signals of Champlain-0.12.Champlain.MemoryCache

    connect(sigName: "notify::size-limit", callback: (($obj: MemoryCache, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::size-limit", callback: (($obj: MemoryCache, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::size-limit", ...args: any[]): void
    connect(sigName: "notify::next-source", callback: (($obj: MemoryCache, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::next-source", callback: (($obj: MemoryCache, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::next-source", ...args: any[]): void
    connect(sigName: "notify::renderer", callback: (($obj: MemoryCache, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::renderer", callback: (($obj: MemoryCache, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::renderer", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * The #ChamplainMemoryCache structure contains only private data
 * and should be accessed using the provided API
 * @class 
 */
class MemoryCache extends TileCache {

    // Own properties of Champlain-0.12.Champlain.MemoryCache

    static name: string
    static $gtype: GObject.GType<MemoryCache>

    // Constructors of Champlain-0.12.Champlain.MemoryCache

    constructor(config?: MemoryCache_ConstructProps) 
    /**
     * Constructor of #ChamplainMemoryCache.
     * @constructor 
     * @param size_limit maximum number of tiles stored in the cache
     * @param renderer the #ChamplainRenderer used for tiles rendering
     */
    static new_full(size_limit: number, renderer: Renderer): MemoryCache
    _init(config?: MemoryCache_ConstructProps): void
}

interface NetworkBboxTileSource_ConstructProps extends TileSource_ConstructProps {

    // Own constructor properties of Champlain-0.12.Champlain.NetworkBboxTileSource

    /**
     * The URI of an OpenStreetMap API server
     */
    api_uri?: string | null
    /**
     * Used to override the default proxy for accessing the network.
     */
    proxy_uri?: string | null
    /**
     * The map source's state. Useful to know if the data source is loading
     * or not.
     */
    state?: State | null
    /**
     * The HTTP user agent used for requests
     */
    user_agent?: string | null
}

interface NetworkBboxTileSource {

    // Own properties of Champlain-0.12.Champlain.NetworkBboxTileSource

    /**
     * The URI of an OpenStreetMap API server
     */
    api_uri: string
    /**
     * Used to override the default proxy for accessing the network.
     */
    proxy_uri: string
    /**
     * The map source's state. Useful to know if the data source is loading
     * or not.
     */
    state: State
    /**
     * The HTTP user agent used for requests
     */
    user_agent: string

    // Conflicting properties

    parent_instance: any

    // Own fields of Champlain-0.12.Champlain.NetworkBboxTileSource

    parent: TileSource
    priv: NetworkBboxTileSourcePrivate

    // Owm methods of Champlain-0.12.Champlain.NetworkBboxTileSource

    /**
     * Gets the URI of the API server.
     */
    get_api_uri(): string
    /**
     * Asynchronously loads map data within a bounding box from the server.
     * The box must not exceed an edge size of 0.25 degree. There are also
     * limitations on the maximum number of nodes that can be requested.
     * 
     * For details, see: <ulink role="online-location"
     * url="https://api.openstreetmap.org/api/capabilities">
     * https://api.openstreetmap.org/api/capabilities</ulink>
     * @param bbox bounding box of the requested area
     */
    load_map_data(bbox: BoundingBox): void
    /**
     * Sets the URI of the API server.
     * @param api_uri an URI of an API server
     */
    set_api_uri(api_uri: string): void
    /**
     * Sets the User-Agent header used communicating with the server.
     * @param user_agent A User-Agent string
     */
    set_user_agent(user_agent: string): void

    // Class property signals of Champlain-0.12.Champlain.NetworkBboxTileSource

    connect(sigName: "notify::api-uri", callback: (($obj: NetworkBboxTileSource, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::api-uri", callback: (($obj: NetworkBboxTileSource, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::api-uri", ...args: any[]): void
    connect(sigName: "notify::proxy-uri", callback: (($obj: NetworkBboxTileSource, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::proxy-uri", callback: (($obj: NetworkBboxTileSource, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::proxy-uri", ...args: any[]): void
    connect(sigName: "notify::state", callback: (($obj: NetworkBboxTileSource, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::state", callback: (($obj: NetworkBboxTileSource, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::state", ...args: any[]): void
    connect(sigName: "notify::user-agent", callback: (($obj: NetworkBboxTileSource, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::user-agent", callback: (($obj: NetworkBboxTileSource, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::user-agent", ...args: any[]): void
    connect(sigName: "notify::cache", callback: (($obj: NetworkBboxTileSource, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::cache", callback: (($obj: NetworkBboxTileSource, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::cache", ...args: any[]): void
    connect(sigName: "notify::id", callback: (($obj: NetworkBboxTileSource, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::id", callback: (($obj: NetworkBboxTileSource, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::id", ...args: any[]): void
    connect(sigName: "notify::license", callback: (($obj: NetworkBboxTileSource, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::license", callback: (($obj: NetworkBboxTileSource, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::license", ...args: any[]): void
    connect(sigName: "notify::license-uri", callback: (($obj: NetworkBboxTileSource, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::license-uri", callback: (($obj: NetworkBboxTileSource, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::license-uri", ...args: any[]): void
    connect(sigName: "notify::max-zoom-level", callback: (($obj: NetworkBboxTileSource, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::max-zoom-level", callback: (($obj: NetworkBboxTileSource, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::max-zoom-level", ...args: any[]): void
    connect(sigName: "notify::min-zoom-level", callback: (($obj: NetworkBboxTileSource, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::min-zoom-level", callback: (($obj: NetworkBboxTileSource, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::min-zoom-level", ...args: any[]): void
    connect(sigName: "notify::name", callback: (($obj: NetworkBboxTileSource, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: NetworkBboxTileSource, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::projection", callback: (($obj: NetworkBboxTileSource, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::projection", callback: (($obj: NetworkBboxTileSource, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::projection", ...args: any[]): void
    connect(sigName: "notify::tile-size", callback: (($obj: NetworkBboxTileSource, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tile-size", callback: (($obj: NetworkBboxTileSource, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tile-size", ...args: any[]): void
    connect(sigName: "notify::next-source", callback: (($obj: NetworkBboxTileSource, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::next-source", callback: (($obj: NetworkBboxTileSource, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::next-source", ...args: any[]): void
    connect(sigName: "notify::renderer", callback: (($obj: NetworkBboxTileSource, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::renderer", callback: (($obj: NetworkBboxTileSource, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::renderer", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * The #ChamplainNetworkBboxTileSource structure contains only private data
 * and should be accessed using the provided API
 * @class 
 */
class NetworkBboxTileSource extends TileSource {

    // Own properties of Champlain-0.12.Champlain.NetworkBboxTileSource

    static name: string
    static $gtype: GObject.GType<NetworkBboxTileSource>

    // Constructors of Champlain-0.12.Champlain.NetworkBboxTileSource

    constructor(config?: NetworkBboxTileSource_ConstructProps) 
    /**
     * Constructor of #ChamplainNetworkBboxTileSource.
     * @constructor 
     * @param id the map source's id
     * @param name the map source's name
     * @param license the map source's license
     * @param license_uri the map source's license URI
     * @param min_zoom the map source's minimum zoom level
     * @param max_zoom the map source's maximum zoom level
     * @param tile_size the map source's tile size (in pixels)
     * @param projection the map source's projection
     * @param renderer the #ChamplainRenderer used to render tiles
     */
    static new_full(id: string, name: string, license: string, license_uri: string, min_zoom: number, max_zoom: number, tile_size: number, projection: MapProjection, renderer: Renderer): NetworkBboxTileSource
    _init(config?: NetworkBboxTileSource_ConstructProps): void
}

interface NetworkTileSource_ConstructProps extends TileSource_ConstructProps {

    // Own constructor properties of Champlain-0.12.Champlain.NetworkTileSource

    /**
     * Specifies the max number of allowed simultaneous connections for this tile
     * source.
     * 
     * Before changing this remember to verify how many simultaneous connections
     * your tile provider allows you to make.
     */
    max_conns?: number | null
    /**
     * Specifies whether the network tile source can access network
     */
    offline?: boolean | null
    /**
     * Used to override the default proxy for accessing the network.
     */
    proxy_uri?: string | null
    /**
     * The uri format of the tile source, see #champlain_network_tile_source_set_uri_format
     */
    uri_format?: string | null
    /**
     * The HTTP user agent used for requests
     */
    user_agent?: string | null
}

interface NetworkTileSource {

    // Own properties of Champlain-0.12.Champlain.NetworkTileSource

    /**
     * Specifies the max number of allowed simultaneous connections for this tile
     * source.
     * 
     * Before changing this remember to verify how many simultaneous connections
     * your tile provider allows you to make.
     */
    max_conns: number
    /**
     * Specifies whether the network tile source can access network
     */
    offline: boolean
    /**
     * Used to override the default proxy for accessing the network.
     */
    proxy_uri: string
    /**
     * The uri format of the tile source, see #champlain_network_tile_source_set_uri_format
     */
    uri_format: string
    /**
     * The HTTP user agent used for requests
     */
    user_agent: string

    // Own fields of Champlain-0.12.Champlain.NetworkTileSource

    parent_instance: TileSource
    priv: NetworkTileSourcePrivate

    // Owm methods of Champlain-0.12.Champlain.NetworkTileSource

    /**
     * Gets the max number of allowed simultaneous connections for this tile
     * source.
     */
    get_max_conns(): number
    /**
     * Gets offline status.
     */
    get_offline(): boolean
    /**
     * Gets the proxy uri used to access network.
     */
    get_proxy_uri(): string
    /**
     * Default constructor of #ChamplainNetworkTileSource.
     */
    get_uri_format(): string
    /**
     * Sets the max number of allowed simultaneous connections for this tile source.
     * 
     * Before changing this remember to verify how many simultaneous connections
     * your tile provider allows you to make.
     * @param max_conns the number of allowed simultaneous connections
     */
    set_max_conns(max_conns: number): void
    /**
     * Sets offline status.
     * @param offline TRUE when the tile source should be offline; FALSE otherwise
     */
    set_offline(offline: boolean): void
    /**
     * Override the default proxy for accessing the network.
     * @param proxy_uri the proxy uri used to access network
     */
    set_proxy_uri(proxy_uri: string): void
    /**
     * A URI format is a URI where x, y and zoom level information have been
     * marked for parsing and insertion.  There can be an unlimited number of
     * marked items in a URI format.  They are delimited by "#" before and after
     * the variable name. There are 4 defined variable names: X, Y, Z, and TMSY for
     * Y in TMS coordinates.
     * 
     * For example, this is the OpenStreetMap URI format:
     * "https://tile.openstreetmap.org/\#Z\#/\#X\#/\#Y\#.png"
     * @param uri_format the URI format
     */
    set_uri_format(uri_format: string): void
    /**
     * Sets the User-Agent header used communicating with the server.
     * @param user_agent A User-Agent string
     */
    set_user_agent(user_agent: string): void

    // Class property signals of Champlain-0.12.Champlain.NetworkTileSource

    connect(sigName: "notify::max-conns", callback: (($obj: NetworkTileSource, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::max-conns", callback: (($obj: NetworkTileSource, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::max-conns", ...args: any[]): void
    connect(sigName: "notify::offline", callback: (($obj: NetworkTileSource, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::offline", callback: (($obj: NetworkTileSource, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::offline", ...args: any[]): void
    connect(sigName: "notify::proxy-uri", callback: (($obj: NetworkTileSource, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::proxy-uri", callback: (($obj: NetworkTileSource, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::proxy-uri", ...args: any[]): void
    connect(sigName: "notify::uri-format", callback: (($obj: NetworkTileSource, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::uri-format", callback: (($obj: NetworkTileSource, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::uri-format", ...args: any[]): void
    connect(sigName: "notify::user-agent", callback: (($obj: NetworkTileSource, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::user-agent", callback: (($obj: NetworkTileSource, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::user-agent", ...args: any[]): void
    connect(sigName: "notify::cache", callback: (($obj: NetworkTileSource, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::cache", callback: (($obj: NetworkTileSource, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::cache", ...args: any[]): void
    connect(sigName: "notify::id", callback: (($obj: NetworkTileSource, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::id", callback: (($obj: NetworkTileSource, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::id", ...args: any[]): void
    connect(sigName: "notify::license", callback: (($obj: NetworkTileSource, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::license", callback: (($obj: NetworkTileSource, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::license", ...args: any[]): void
    connect(sigName: "notify::license-uri", callback: (($obj: NetworkTileSource, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::license-uri", callback: (($obj: NetworkTileSource, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::license-uri", ...args: any[]): void
    connect(sigName: "notify::max-zoom-level", callback: (($obj: NetworkTileSource, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::max-zoom-level", callback: (($obj: NetworkTileSource, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::max-zoom-level", ...args: any[]): void
    connect(sigName: "notify::min-zoom-level", callback: (($obj: NetworkTileSource, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::min-zoom-level", callback: (($obj: NetworkTileSource, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::min-zoom-level", ...args: any[]): void
    connect(sigName: "notify::name", callback: (($obj: NetworkTileSource, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: NetworkTileSource, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::projection", callback: (($obj: NetworkTileSource, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::projection", callback: (($obj: NetworkTileSource, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::projection", ...args: any[]): void
    connect(sigName: "notify::tile-size", callback: (($obj: NetworkTileSource, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tile-size", callback: (($obj: NetworkTileSource, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tile-size", ...args: any[]): void
    connect(sigName: "notify::next-source", callback: (($obj: NetworkTileSource, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::next-source", callback: (($obj: NetworkTileSource, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::next-source", ...args: any[]): void
    connect(sigName: "notify::renderer", callback: (($obj: NetworkTileSource, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::renderer", callback: (($obj: NetworkTileSource, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::renderer", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * The #ChamplainNetworkTileSource structure contains only private data
 * and should be accessed using the provided API
 * @class 
 */
class NetworkTileSource extends TileSource {

    // Own properties of Champlain-0.12.Champlain.NetworkTileSource

    static name: string
    static $gtype: GObject.GType<NetworkTileSource>

    // Constructors of Champlain-0.12.Champlain.NetworkTileSource

    constructor(config?: NetworkTileSource_ConstructProps) 
    /**
     * Constructor of #ChamplainNetworkTileSource.
     * @constructor 
     * @param id the map source's id
     * @param name the map source's name
     * @param license the map source's license
     * @param license_uri the map source's license URI
     * @param min_zoom the map source's minimum zoom level
     * @param max_zoom the map source's maximum zoom level
     * @param tile_size the map source's tile size (in pixels)
     * @param projection the map source's projection
     * @param uri_format the URI to fetch the tiles from, see #champlain_network_tile_source_set_uri_format
     * @param renderer the #ChamplainRenderer used to render tiles
     */
    static new_full(id: string, name: string, license: string, license_uri: string, min_zoom: number, max_zoom: number, tile_size: number, projection: MapProjection, uri_format: string, renderer: Renderer): NetworkTileSource
    _init(config?: NetworkTileSource_ConstructProps): void
}

interface NullTileSource_ConstructProps extends TileSource_ConstructProps {
}

interface NullTileSource {

    // Conflicting properties

    parent_instance: any
    priv: any

    // Own fields of Champlain-0.12.Champlain.NullTileSource

    parent: TileSource

    // Class property signals of Champlain-0.12.Champlain.NullTileSource

    connect(sigName: "notify::cache", callback: (($obj: NullTileSource, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::cache", callback: (($obj: NullTileSource, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::cache", ...args: any[]): void
    connect(sigName: "notify::id", callback: (($obj: NullTileSource, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::id", callback: (($obj: NullTileSource, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::id", ...args: any[]): void
    connect(sigName: "notify::license", callback: (($obj: NullTileSource, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::license", callback: (($obj: NullTileSource, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::license", ...args: any[]): void
    connect(sigName: "notify::license-uri", callback: (($obj: NullTileSource, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::license-uri", callback: (($obj: NullTileSource, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::license-uri", ...args: any[]): void
    connect(sigName: "notify::max-zoom-level", callback: (($obj: NullTileSource, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::max-zoom-level", callback: (($obj: NullTileSource, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::max-zoom-level", ...args: any[]): void
    connect(sigName: "notify::min-zoom-level", callback: (($obj: NullTileSource, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::min-zoom-level", callback: (($obj: NullTileSource, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::min-zoom-level", ...args: any[]): void
    connect(sigName: "notify::name", callback: (($obj: NullTileSource, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: NullTileSource, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::projection", callback: (($obj: NullTileSource, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::projection", callback: (($obj: NullTileSource, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::projection", ...args: any[]): void
    connect(sigName: "notify::tile-size", callback: (($obj: NullTileSource, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tile-size", callback: (($obj: NullTileSource, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tile-size", ...args: any[]): void
    connect(sigName: "notify::next-source", callback: (($obj: NullTileSource, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::next-source", callback: (($obj: NullTileSource, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::next-source", ...args: any[]): void
    connect(sigName: "notify::renderer", callback: (($obj: NullTileSource, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::renderer", callback: (($obj: NullTileSource, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::renderer", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * The #ChamplainNullTileSource structure contains only private data
 * and should be accessed using the provided API
 * @class 
 */
class NullTileSource extends TileSource {

    // Own properties of Champlain-0.12.Champlain.NullTileSource

    static name: string
    static $gtype: GObject.GType<NullTileSource>

    // Constructors of Champlain-0.12.Champlain.NullTileSource

    constructor(config?: NullTileSource_ConstructProps) 
    /**
     * Constructor of #ChamplainNullTileSource.
     * @constructor 
     * @param renderer the #ChamplainRenderer used to render tiles
     */
    static new_full(renderer: Renderer): NullTileSource
    _init(config?: NullTileSource_ConstructProps): void
}

interface PathLayer_ConstructProps extends Atk.ImplementorIface_ConstructProps, Exportable_ConstructProps, Clutter.Animatable_ConstructProps, Clutter.Container_ConstructProps, Clutter.Scriptable_ConstructProps, Layer_ConstructProps {

    // Own constructor properties of Champlain-0.12.Champlain.PathLayer

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
    fill_color?: Clutter.Color | null
    /**
     * The shape should be stroked
     */
    stroke?: boolean | null
    /**
     * The path's stroke color
     */
    stroke_color?: Clutter.Color | null
    /**
     * The path's stroke width (in pixels)
     */
    stroke_width?: number | null
    /**
     * Wether the path is visible
     */
    visible?: boolean | null
}

interface PathLayer extends Atk.ImplementorIface, Exportable, Clutter.Animatable, Clutter.Container, Clutter.Scriptable {

    // Own properties of Champlain-0.12.Champlain.PathLayer

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
    fill_color: Clutter.Color
    /**
     * The shape should be stroked
     */
    stroke: boolean
    /**
     * The path's stroke color
     */
    stroke_color: Clutter.Color
    /**
     * The path's stroke width (in pixels)
     */
    stroke_width: number
    /**
     * Wether the path is visible
     */
    visible: boolean

    // Own fields of Champlain-0.12.Champlain.PathLayer

    parent: Layer
    priv: PathLayerPrivate

    // Owm methods of Champlain-0.12.Champlain.PathLayer

    /**
     * Adds a #ChamplainLocation object to the layer.
     * The node is prepended to the list.
     * @param location a #ChamplainLocation
     */
    add_node(location: Location): void
    /**
     * Gets information whether the path is closed.
     */
    get_closed(): boolean
    /**
     * Returns the list of dash segment lengths.
     */
    get_dash(): number[]
    /**
     * Checks whether the path is filled.
     */
    get_fill(): boolean
    /**
     * Gets the path's fill color.
     */
    get_fill_color(): Clutter.Color
    /**
     * Gets a copy of the list of all #ChamplainLocation objects inserted into the layer. You should
     * free the list but not its contents.
     */
    get_nodes(): Location[]
    /**
     * Checks whether the path is stroked.
     */
    get_stroke(): boolean
    /**
     * Gets the path's stroke color.
     */
    get_stroke_color(): Clutter.Color
    /**
     * Gets the width of the stroke.
     */
    get_stroke_width(): number
    /**
     * Gets path visibility.
     */
    get_visible(): boolean
    /**
     * Inserts a #ChamplainLocation object to the specified position.
     * @param location a #ChamplainLocation
     * @param position position in the list where the #ChamplainLocation object should be inserted
     */
    insert_node(location: Location, position: number): void
    /**
     * Removes all #ChamplainLocation objects from the layer.
     */
    remove_all(): void
    /**
     * Removes the #ChamplainLocation object from the layer.
     * @param location a #ChamplainLocation
     */
    remove_node(location: Location): void
    /**
     * Makes the path closed.
     * @param value TRUE to make the path closed
     */
    set_closed(value: boolean): void
    /**
     * Sets dashed line pattern in a way similar to cairo_set_dash() of cairo. This
     * method supports only integer values for segment lengths. The values have to be
     * passed inside the data pointer of the list (using the GUINT_TO_POINTER conversion)
     * 
     * Pass NULL to use solid line.
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
     * @param color The path's fill color or NULL to reset to the         default color. The color parameter is copied.
     */
    set_fill_color(color: Clutter.Color | null): void
    /**
     * Sets the path to be stroked
     * @param value if the path is stroked
     */
    set_stroke(value: boolean): void
    /**
     * Set the path's stroke color.
     * @param color The path's stroke color or NULL to reset to the         default color. The color parameter is copied.
     */
    set_stroke_color(color: Clutter.Color | null): void
    /**
     * Sets the width of the stroke
     * @param value the width of the stroke (in pixels)
     */
    set_stroke_width(value: number): void
    /**
     * Sets path visibility.
     * @param value TRUE to make the path visible
     */
    set_visible(value: boolean): void

    // Class property signals of Champlain-0.12.Champlain.PathLayer

    connect(sigName: "notify::closed", callback: (($obj: PathLayer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::closed", callback: (($obj: PathLayer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::closed", ...args: any[]): void
    connect(sigName: "notify::fill", callback: (($obj: PathLayer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fill", callback: (($obj: PathLayer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::fill", ...args: any[]): void
    connect(sigName: "notify::fill-color", callback: (($obj: PathLayer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fill-color", callback: (($obj: PathLayer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::fill-color", ...args: any[]): void
    connect(sigName: "notify::stroke", callback: (($obj: PathLayer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::stroke", callback: (($obj: PathLayer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::stroke", ...args: any[]): void
    connect(sigName: "notify::stroke-color", callback: (($obj: PathLayer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::stroke-color", callback: (($obj: PathLayer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::stroke-color", ...args: any[]): void
    connect(sigName: "notify::stroke-width", callback: (($obj: PathLayer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::stroke-width", callback: (($obj: PathLayer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::stroke-width", ...args: any[]): void
    connect(sigName: "notify::visible", callback: (($obj: PathLayer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visible", callback: (($obj: PathLayer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::visible", ...args: any[]): void
    connect(sigName: "notify::actions", callback: (($obj: PathLayer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::actions", callback: (($obj: PathLayer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::actions", ...args: any[]): void
    connect(sigName: "notify::allocation", callback: (($obj: PathLayer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::allocation", callback: (($obj: PathLayer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::allocation", ...args: any[]): void
    connect(sigName: "notify::anchor-gravity", callback: (($obj: PathLayer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::anchor-gravity", callback: (($obj: PathLayer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::anchor-gravity", ...args: any[]): void
    connect(sigName: "notify::anchor-x", callback: (($obj: PathLayer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::anchor-x", callback: (($obj: PathLayer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::anchor-x", ...args: any[]): void
    connect(sigName: "notify::anchor-y", callback: (($obj: PathLayer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::anchor-y", callback: (($obj: PathLayer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::anchor-y", ...args: any[]): void
    connect(sigName: "notify::background-color", callback: (($obj: PathLayer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::background-color", callback: (($obj: PathLayer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::background-color", ...args: any[]): void
    connect(sigName: "notify::background-color-set", callback: (($obj: PathLayer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::background-color-set", callback: (($obj: PathLayer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::background-color-set", ...args: any[]): void
    connect(sigName: "notify::child-transform", callback: (($obj: PathLayer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::child-transform", callback: (($obj: PathLayer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::child-transform", ...args: any[]): void
    connect(sigName: "notify::child-transform-set", callback: (($obj: PathLayer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::child-transform-set", callback: (($obj: PathLayer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::child-transform-set", ...args: any[]): void
    connect(sigName: "notify::clip", callback: (($obj: PathLayer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::clip", callback: (($obj: PathLayer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::clip", ...args: any[]): void
    connect(sigName: "notify::clip-rect", callback: (($obj: PathLayer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::clip-rect", callback: (($obj: PathLayer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::clip-rect", ...args: any[]): void
    connect(sigName: "notify::clip-to-allocation", callback: (($obj: PathLayer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::clip-to-allocation", callback: (($obj: PathLayer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::clip-to-allocation", ...args: any[]): void
    connect(sigName: "notify::constraints", callback: (($obj: PathLayer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::constraints", callback: (($obj: PathLayer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::constraints", ...args: any[]): void
    connect(sigName: "notify::content", callback: (($obj: PathLayer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::content", callback: (($obj: PathLayer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::content", ...args: any[]): void
    connect(sigName: "notify::content-box", callback: (($obj: PathLayer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::content-box", callback: (($obj: PathLayer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::content-box", ...args: any[]): void
    connect(sigName: "notify::content-gravity", callback: (($obj: PathLayer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::content-gravity", callback: (($obj: PathLayer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::content-gravity", ...args: any[]): void
    connect(sigName: "notify::content-repeat", callback: (($obj: PathLayer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::content-repeat", callback: (($obj: PathLayer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::content-repeat", ...args: any[]): void
    connect(sigName: "notify::depth", callback: (($obj: PathLayer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::depth", callback: (($obj: PathLayer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::depth", ...args: any[]): void
    connect(sigName: "notify::effect", callback: (($obj: PathLayer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::effect", callback: (($obj: PathLayer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::effect", ...args: any[]): void
    connect(sigName: "notify::first-child", callback: (($obj: PathLayer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::first-child", callback: (($obj: PathLayer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::first-child", ...args: any[]): void
    connect(sigName: "notify::fixed-position-set", callback: (($obj: PathLayer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fixed-position-set", callback: (($obj: PathLayer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::fixed-position-set", ...args: any[]): void
    connect(sigName: "notify::fixed-x", callback: (($obj: PathLayer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fixed-x", callback: (($obj: PathLayer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::fixed-x", ...args: any[]): void
    connect(sigName: "notify::fixed-y", callback: (($obj: PathLayer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fixed-y", callback: (($obj: PathLayer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::fixed-y", ...args: any[]): void
    connect(sigName: "notify::has-clip", callback: (($obj: PathLayer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-clip", callback: (($obj: PathLayer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-clip", ...args: any[]): void
    connect(sigName: "notify::has-pointer", callback: (($obj: PathLayer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-pointer", callback: (($obj: PathLayer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-pointer", ...args: any[]): void
    connect(sigName: "notify::height", callback: (($obj: PathLayer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height", callback: (($obj: PathLayer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::height", ...args: any[]): void
    connect(sigName: "notify::last-child", callback: (($obj: PathLayer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::last-child", callback: (($obj: PathLayer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::last-child", ...args: any[]): void
    connect(sigName: "notify::layout-manager", callback: (($obj: PathLayer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::layout-manager", callback: (($obj: PathLayer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::layout-manager", ...args: any[]): void
    connect(sigName: "notify::magnification-filter", callback: (($obj: PathLayer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::magnification-filter", callback: (($obj: PathLayer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::magnification-filter", ...args: any[]): void
    connect(sigName: "notify::mapped", callback: (($obj: PathLayer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::mapped", callback: (($obj: PathLayer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::mapped", ...args: any[]): void
    connect(sigName: "notify::margin-bottom", callback: (($obj: PathLayer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-bottom", callback: (($obj: PathLayer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-bottom", ...args: any[]): void
    connect(sigName: "notify::margin-left", callback: (($obj: PathLayer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-left", callback: (($obj: PathLayer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-left", ...args: any[]): void
    connect(sigName: "notify::margin-right", callback: (($obj: PathLayer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-right", callback: (($obj: PathLayer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-right", ...args: any[]): void
    connect(sigName: "notify::margin-top", callback: (($obj: PathLayer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-top", callback: (($obj: PathLayer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-top", ...args: any[]): void
    connect(sigName: "notify::min-height", callback: (($obj: PathLayer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::min-height", callback: (($obj: PathLayer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::min-height", ...args: any[]): void
    connect(sigName: "notify::min-height-set", callback: (($obj: PathLayer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::min-height-set", callback: (($obj: PathLayer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::min-height-set", ...args: any[]): void
    connect(sigName: "notify::min-width", callback: (($obj: PathLayer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::min-width", callback: (($obj: PathLayer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::min-width", ...args: any[]): void
    connect(sigName: "notify::min-width-set", callback: (($obj: PathLayer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::min-width-set", callback: (($obj: PathLayer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::min-width-set", ...args: any[]): void
    connect(sigName: "notify::minification-filter", callback: (($obj: PathLayer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::minification-filter", callback: (($obj: PathLayer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::minification-filter", ...args: any[]): void
    connect(sigName: "notify::name", callback: (($obj: PathLayer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: PathLayer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::natural-height", callback: (($obj: PathLayer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::natural-height", callback: (($obj: PathLayer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::natural-height", ...args: any[]): void
    connect(sigName: "notify::natural-height-set", callback: (($obj: PathLayer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::natural-height-set", callback: (($obj: PathLayer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::natural-height-set", ...args: any[]): void
    connect(sigName: "notify::natural-width", callback: (($obj: PathLayer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::natural-width", callback: (($obj: PathLayer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::natural-width", ...args: any[]): void
    connect(sigName: "notify::natural-width-set", callback: (($obj: PathLayer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::natural-width-set", callback: (($obj: PathLayer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::natural-width-set", ...args: any[]): void
    connect(sigName: "notify::offscreen-redirect", callback: (($obj: PathLayer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::offscreen-redirect", callback: (($obj: PathLayer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::offscreen-redirect", ...args: any[]): void
    connect(sigName: "notify::opacity", callback: (($obj: PathLayer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opacity", callback: (($obj: PathLayer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::opacity", ...args: any[]): void
    connect(sigName: "notify::pivot-point", callback: (($obj: PathLayer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::pivot-point", callback: (($obj: PathLayer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::pivot-point", ...args: any[]): void
    connect(sigName: "notify::pivot-point-z", callback: (($obj: PathLayer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::pivot-point-z", callback: (($obj: PathLayer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::pivot-point-z", ...args: any[]): void
    connect(sigName: "notify::position", callback: (($obj: PathLayer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::position", callback: (($obj: PathLayer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::position", ...args: any[]): void
    connect(sigName: "notify::reactive", callback: (($obj: PathLayer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::reactive", callback: (($obj: PathLayer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::reactive", ...args: any[]): void
    connect(sigName: "notify::realized", callback: (($obj: PathLayer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::realized", callback: (($obj: PathLayer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::realized", ...args: any[]): void
    connect(sigName: "notify::request-mode", callback: (($obj: PathLayer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::request-mode", callback: (($obj: PathLayer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::request-mode", ...args: any[]): void
    connect(sigName: "notify::rotation-angle-x", callback: (($obj: PathLayer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::rotation-angle-x", callback: (($obj: PathLayer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::rotation-angle-x", ...args: any[]): void
    connect(sigName: "notify::rotation-angle-y", callback: (($obj: PathLayer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::rotation-angle-y", callback: (($obj: PathLayer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::rotation-angle-y", ...args: any[]): void
    connect(sigName: "notify::rotation-angle-z", callback: (($obj: PathLayer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::rotation-angle-z", callback: (($obj: PathLayer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::rotation-angle-z", ...args: any[]): void
    connect(sigName: "notify::rotation-center-x", callback: (($obj: PathLayer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::rotation-center-x", callback: (($obj: PathLayer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::rotation-center-x", ...args: any[]): void
    connect(sigName: "notify::rotation-center-y", callback: (($obj: PathLayer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::rotation-center-y", callback: (($obj: PathLayer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::rotation-center-y", ...args: any[]): void
    connect(sigName: "notify::rotation-center-z", callback: (($obj: PathLayer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::rotation-center-z", callback: (($obj: PathLayer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::rotation-center-z", ...args: any[]): void
    connect(sigName: "notify::rotation-center-z-gravity", callback: (($obj: PathLayer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::rotation-center-z-gravity", callback: (($obj: PathLayer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::rotation-center-z-gravity", ...args: any[]): void
    connect(sigName: "notify::scale-center-x", callback: (($obj: PathLayer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-center-x", callback: (($obj: PathLayer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::scale-center-x", ...args: any[]): void
    connect(sigName: "notify::scale-center-y", callback: (($obj: PathLayer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-center-y", callback: (($obj: PathLayer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::scale-center-y", ...args: any[]): void
    connect(sigName: "notify::scale-gravity", callback: (($obj: PathLayer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-gravity", callback: (($obj: PathLayer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::scale-gravity", ...args: any[]): void
    connect(sigName: "notify::scale-x", callback: (($obj: PathLayer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-x", callback: (($obj: PathLayer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::scale-x", ...args: any[]): void
    connect(sigName: "notify::scale-y", callback: (($obj: PathLayer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-y", callback: (($obj: PathLayer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::scale-y", ...args: any[]): void
    connect(sigName: "notify::scale-z", callback: (($obj: PathLayer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-z", callback: (($obj: PathLayer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::scale-z", ...args: any[]): void
    connect(sigName: "notify::show-on-set-parent", callback: (($obj: PathLayer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::show-on-set-parent", callback: (($obj: PathLayer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::show-on-set-parent", ...args: any[]): void
    connect(sigName: "notify::size", callback: (($obj: PathLayer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::size", callback: (($obj: PathLayer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::size", ...args: any[]): void
    connect(sigName: "notify::text-direction", callback: (($obj: PathLayer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::text-direction", callback: (($obj: PathLayer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::text-direction", ...args: any[]): void
    connect(sigName: "notify::transform", callback: (($obj: PathLayer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::transform", callback: (($obj: PathLayer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::transform", ...args: any[]): void
    connect(sigName: "notify::transform-set", callback: (($obj: PathLayer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::transform-set", callback: (($obj: PathLayer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::transform-set", ...args: any[]): void
    connect(sigName: "notify::translation-x", callback: (($obj: PathLayer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::translation-x", callback: (($obj: PathLayer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::translation-x", ...args: any[]): void
    connect(sigName: "notify::translation-y", callback: (($obj: PathLayer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::translation-y", callback: (($obj: PathLayer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::translation-y", ...args: any[]): void
    connect(sigName: "notify::translation-z", callback: (($obj: PathLayer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::translation-z", callback: (($obj: PathLayer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::translation-z", ...args: any[]): void
    connect(sigName: "notify::width", callback: (($obj: PathLayer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::width", callback: (($obj: PathLayer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::width", ...args: any[]): void
    connect(sigName: "notify::x", callback: (($obj: PathLayer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::x", callback: (($obj: PathLayer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::x", ...args: any[]): void
    connect(sigName: "notify::x-align", callback: (($obj: PathLayer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::x-align", callback: (($obj: PathLayer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::x-align", ...args: any[]): void
    connect(sigName: "notify::x-expand", callback: (($obj: PathLayer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::x-expand", callback: (($obj: PathLayer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::x-expand", ...args: any[]): void
    connect(sigName: "notify::y", callback: (($obj: PathLayer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::y", callback: (($obj: PathLayer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::y", ...args: any[]): void
    connect(sigName: "notify::y-align", callback: (($obj: PathLayer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::y-align", callback: (($obj: PathLayer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::y-align", ...args: any[]): void
    connect(sigName: "notify::y-expand", callback: (($obj: PathLayer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::y-expand", callback: (($obj: PathLayer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::y-expand", ...args: any[]): void
    connect(sigName: "notify::z-position", callback: (($obj: PathLayer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::z-position", callback: (($obj: PathLayer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::z-position", ...args: any[]): void
    connect(sigName: "notify::surface", callback: (($obj: PathLayer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::surface", callback: (($obj: PathLayer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::surface", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * The #ChamplainPathLayer structure contains only private data
 * and should be accessed using the provided API
 * @class 
 */
class PathLayer extends Layer {

    // Own properties of Champlain-0.12.Champlain.PathLayer

    static name: string
    static $gtype: GObject.GType<PathLayer>

    // Constructors of Champlain-0.12.Champlain.PathLayer

    constructor(config?: PathLayer_ConstructProps) 
    /**
     * Creates a new instance of #ChamplainPathLayer.
     * @constructor 
     */
    constructor() 
    /**
     * Creates a new instance of #ChamplainPathLayer.
     * @constructor 
     */
    static new(): PathLayer

    // Overloads of new

    /**
     * Creates a new #ClutterActor.
     * 
     * A newly created actor has a floating reference, which will be sunk
     * when it is added to another actor.
     * @constructor 
     */
    static new(): Clutter.Actor
    _init(config?: PathLayer_ConstructProps): void
}

interface Point_ConstructProps extends Atk.ImplementorIface_ConstructProps, Exportable_ConstructProps, Location_ConstructProps, Clutter.Animatable_ConstructProps, Clutter.Container_ConstructProps, Clutter.Scriptable_ConstructProps, Marker_ConstructProps {

    // Own constructor properties of Champlain-0.12.Champlain.Point

    color?: Clutter.Color | null
    size?: number | null
}

interface Point extends Atk.ImplementorIface, Exportable, Location, Clutter.Animatable, Clutter.Container, Clutter.Scriptable {

    // Own properties of Champlain-0.12.Champlain.Point

    color: Clutter.Color
    size: number

    // Own fields of Champlain-0.12.Champlain.Point

    parent: Marker
    priv: PointPrivate

    // Owm methods of Champlain-0.12.Champlain.Point

    /**
     * Gets the color of the point.
     */
    get_color(): Clutter.Color
    /**
     * Gets the size of the point.
     */
    get_size(): number

    // Overloads of get_size

    /**
     * This function tries to "do what you mean" and return
     * the size an actor will have. If the actor has a valid
     * allocation, the allocation will be returned; otherwise,
     * the actors natural size request will be returned.
     * 
     * If you care whether you get the request vs. the allocation, you
     * should probably call a different function like
     * clutter_actor_get_allocation_box() or
     * clutter_actor_get_preferred_width().
     */
    get_size(): [ /* width */ number, /* height */ number ]
    get_size(...args: any[]): any
    get_size(...args: any[]): [ /* returnType */ number | void | any, /* width */ number, /* height */ number ]
    /**
     * Set the color of the point.
     * @param color The color of the point or NULL to reset the background to the         default color. The color parameter is copied.
     */
    set_color(color: Clutter.Color | null): void
    /**
     * Set the size of the point.
     * @param size The size of the point.
     */
    set_size(size: number): void

    // Overloads of set_size

    /**
     * Sets the actor's size request in pixels. This overrides any
     * "normal" size request the actor would have. For example
     * a text actor might normally request the size of the text;
     * this function would force a specific size instead.
     * 
     * If `width` and/or `height` are -1 the actor will use its
     * "normal" size request instead of overriding it, i.e.
     * you can "unset" the size with -1.
     * 
     * This function sets or unsets both the minimum and natural size.
     * @param width New width of actor in pixels, or -1
     * @param height New height of actor in pixels, or -1
     */
    set_size(width: number, height?: number): void
    set_size(...args: any[]): any
    set_size(args_or_width: any[] | number, height?: number): void | any

    // Class property signals of Champlain-0.12.Champlain.Point

    connect(sigName: "notify::color", callback: (($obj: Point, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::color", callback: (($obj: Point, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::color", ...args: any[]): void
    connect(sigName: "notify::size", callback: (($obj: Point, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::size", callback: (($obj: Point, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::size", ...args: any[]): void
    connect(sigName: "notify::draggable", callback: (($obj: Point, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::draggable", callback: (($obj: Point, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::draggable", ...args: any[]): void
    connect(sigName: "notify::selectable", callback: (($obj: Point, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::selectable", callback: (($obj: Point, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::selectable", ...args: any[]): void
    connect(sigName: "notify::selected", callback: (($obj: Point, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::selected", callback: (($obj: Point, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::selected", ...args: any[]): void
    connect(sigName: "notify::actions", callback: (($obj: Point, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::actions", callback: (($obj: Point, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::actions", ...args: any[]): void
    connect(sigName: "notify::allocation", callback: (($obj: Point, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::allocation", callback: (($obj: Point, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::allocation", ...args: any[]): void
    connect(sigName: "notify::anchor-gravity", callback: (($obj: Point, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::anchor-gravity", callback: (($obj: Point, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::anchor-gravity", ...args: any[]): void
    connect(sigName: "notify::anchor-x", callback: (($obj: Point, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::anchor-x", callback: (($obj: Point, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::anchor-x", ...args: any[]): void
    connect(sigName: "notify::anchor-y", callback: (($obj: Point, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::anchor-y", callback: (($obj: Point, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::anchor-y", ...args: any[]): void
    connect(sigName: "notify::background-color", callback: (($obj: Point, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::background-color", callback: (($obj: Point, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::background-color", ...args: any[]): void
    connect(sigName: "notify::background-color-set", callback: (($obj: Point, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::background-color-set", callback: (($obj: Point, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::background-color-set", ...args: any[]): void
    connect(sigName: "notify::child-transform", callback: (($obj: Point, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::child-transform", callback: (($obj: Point, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::child-transform", ...args: any[]): void
    connect(sigName: "notify::child-transform-set", callback: (($obj: Point, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::child-transform-set", callback: (($obj: Point, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::child-transform-set", ...args: any[]): void
    connect(sigName: "notify::clip", callback: (($obj: Point, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::clip", callback: (($obj: Point, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::clip", ...args: any[]): void
    connect(sigName: "notify::clip-rect", callback: (($obj: Point, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::clip-rect", callback: (($obj: Point, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::clip-rect", ...args: any[]): void
    connect(sigName: "notify::clip-to-allocation", callback: (($obj: Point, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::clip-to-allocation", callback: (($obj: Point, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::clip-to-allocation", ...args: any[]): void
    connect(sigName: "notify::constraints", callback: (($obj: Point, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::constraints", callback: (($obj: Point, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::constraints", ...args: any[]): void
    connect(sigName: "notify::content", callback: (($obj: Point, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::content", callback: (($obj: Point, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::content", ...args: any[]): void
    connect(sigName: "notify::content-box", callback: (($obj: Point, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::content-box", callback: (($obj: Point, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::content-box", ...args: any[]): void
    connect(sigName: "notify::content-gravity", callback: (($obj: Point, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::content-gravity", callback: (($obj: Point, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::content-gravity", ...args: any[]): void
    connect(sigName: "notify::content-repeat", callback: (($obj: Point, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::content-repeat", callback: (($obj: Point, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::content-repeat", ...args: any[]): void
    connect(sigName: "notify::depth", callback: (($obj: Point, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::depth", callback: (($obj: Point, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::depth", ...args: any[]): void
    connect(sigName: "notify::effect", callback: (($obj: Point, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::effect", callback: (($obj: Point, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::effect", ...args: any[]): void
    connect(sigName: "notify::first-child", callback: (($obj: Point, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::first-child", callback: (($obj: Point, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::first-child", ...args: any[]): void
    connect(sigName: "notify::fixed-position-set", callback: (($obj: Point, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fixed-position-set", callback: (($obj: Point, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::fixed-position-set", ...args: any[]): void
    connect(sigName: "notify::fixed-x", callback: (($obj: Point, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fixed-x", callback: (($obj: Point, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::fixed-x", ...args: any[]): void
    connect(sigName: "notify::fixed-y", callback: (($obj: Point, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fixed-y", callback: (($obj: Point, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::fixed-y", ...args: any[]): void
    connect(sigName: "notify::has-clip", callback: (($obj: Point, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-clip", callback: (($obj: Point, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-clip", ...args: any[]): void
    connect(sigName: "notify::has-pointer", callback: (($obj: Point, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-pointer", callback: (($obj: Point, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-pointer", ...args: any[]): void
    connect(sigName: "notify::height", callback: (($obj: Point, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height", callback: (($obj: Point, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::height", ...args: any[]): void
    connect(sigName: "notify::last-child", callback: (($obj: Point, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::last-child", callback: (($obj: Point, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::last-child", ...args: any[]): void
    connect(sigName: "notify::layout-manager", callback: (($obj: Point, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::layout-manager", callback: (($obj: Point, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::layout-manager", ...args: any[]): void
    connect(sigName: "notify::magnification-filter", callback: (($obj: Point, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::magnification-filter", callback: (($obj: Point, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::magnification-filter", ...args: any[]): void
    connect(sigName: "notify::mapped", callback: (($obj: Point, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::mapped", callback: (($obj: Point, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::mapped", ...args: any[]): void
    connect(sigName: "notify::margin-bottom", callback: (($obj: Point, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-bottom", callback: (($obj: Point, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-bottom", ...args: any[]): void
    connect(sigName: "notify::margin-left", callback: (($obj: Point, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-left", callback: (($obj: Point, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-left", ...args: any[]): void
    connect(sigName: "notify::margin-right", callback: (($obj: Point, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-right", callback: (($obj: Point, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-right", ...args: any[]): void
    connect(sigName: "notify::margin-top", callback: (($obj: Point, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-top", callback: (($obj: Point, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-top", ...args: any[]): void
    connect(sigName: "notify::min-height", callback: (($obj: Point, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::min-height", callback: (($obj: Point, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::min-height", ...args: any[]): void
    connect(sigName: "notify::min-height-set", callback: (($obj: Point, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::min-height-set", callback: (($obj: Point, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::min-height-set", ...args: any[]): void
    connect(sigName: "notify::min-width", callback: (($obj: Point, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::min-width", callback: (($obj: Point, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::min-width", ...args: any[]): void
    connect(sigName: "notify::min-width-set", callback: (($obj: Point, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::min-width-set", callback: (($obj: Point, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::min-width-set", ...args: any[]): void
    connect(sigName: "notify::minification-filter", callback: (($obj: Point, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::minification-filter", callback: (($obj: Point, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::minification-filter", ...args: any[]): void
    connect(sigName: "notify::name", callback: (($obj: Point, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: Point, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::natural-height", callback: (($obj: Point, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::natural-height", callback: (($obj: Point, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::natural-height", ...args: any[]): void
    connect(sigName: "notify::natural-height-set", callback: (($obj: Point, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::natural-height-set", callback: (($obj: Point, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::natural-height-set", ...args: any[]): void
    connect(sigName: "notify::natural-width", callback: (($obj: Point, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::natural-width", callback: (($obj: Point, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::natural-width", ...args: any[]): void
    connect(sigName: "notify::natural-width-set", callback: (($obj: Point, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::natural-width-set", callback: (($obj: Point, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::natural-width-set", ...args: any[]): void
    connect(sigName: "notify::offscreen-redirect", callback: (($obj: Point, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::offscreen-redirect", callback: (($obj: Point, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::offscreen-redirect", ...args: any[]): void
    connect(sigName: "notify::opacity", callback: (($obj: Point, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opacity", callback: (($obj: Point, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::opacity", ...args: any[]): void
    connect(sigName: "notify::pivot-point", callback: (($obj: Point, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::pivot-point", callback: (($obj: Point, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::pivot-point", ...args: any[]): void
    connect(sigName: "notify::pivot-point-z", callback: (($obj: Point, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::pivot-point-z", callback: (($obj: Point, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::pivot-point-z", ...args: any[]): void
    connect(sigName: "notify::position", callback: (($obj: Point, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::position", callback: (($obj: Point, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::position", ...args: any[]): void
    connect(sigName: "notify::reactive", callback: (($obj: Point, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::reactive", callback: (($obj: Point, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::reactive", ...args: any[]): void
    connect(sigName: "notify::realized", callback: (($obj: Point, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::realized", callback: (($obj: Point, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::realized", ...args: any[]): void
    connect(sigName: "notify::request-mode", callback: (($obj: Point, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::request-mode", callback: (($obj: Point, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::request-mode", ...args: any[]): void
    connect(sigName: "notify::rotation-angle-x", callback: (($obj: Point, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::rotation-angle-x", callback: (($obj: Point, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::rotation-angle-x", ...args: any[]): void
    connect(sigName: "notify::rotation-angle-y", callback: (($obj: Point, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::rotation-angle-y", callback: (($obj: Point, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::rotation-angle-y", ...args: any[]): void
    connect(sigName: "notify::rotation-angle-z", callback: (($obj: Point, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::rotation-angle-z", callback: (($obj: Point, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::rotation-angle-z", ...args: any[]): void
    connect(sigName: "notify::rotation-center-x", callback: (($obj: Point, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::rotation-center-x", callback: (($obj: Point, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::rotation-center-x", ...args: any[]): void
    connect(sigName: "notify::rotation-center-y", callback: (($obj: Point, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::rotation-center-y", callback: (($obj: Point, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::rotation-center-y", ...args: any[]): void
    connect(sigName: "notify::rotation-center-z", callback: (($obj: Point, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::rotation-center-z", callback: (($obj: Point, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::rotation-center-z", ...args: any[]): void
    connect(sigName: "notify::rotation-center-z-gravity", callback: (($obj: Point, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::rotation-center-z-gravity", callback: (($obj: Point, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::rotation-center-z-gravity", ...args: any[]): void
    connect(sigName: "notify::scale-center-x", callback: (($obj: Point, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-center-x", callback: (($obj: Point, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::scale-center-x", ...args: any[]): void
    connect(sigName: "notify::scale-center-y", callback: (($obj: Point, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-center-y", callback: (($obj: Point, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::scale-center-y", ...args: any[]): void
    connect(sigName: "notify::scale-gravity", callback: (($obj: Point, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-gravity", callback: (($obj: Point, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::scale-gravity", ...args: any[]): void
    connect(sigName: "notify::scale-x", callback: (($obj: Point, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-x", callback: (($obj: Point, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::scale-x", ...args: any[]): void
    connect(sigName: "notify::scale-y", callback: (($obj: Point, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-y", callback: (($obj: Point, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::scale-y", ...args: any[]): void
    connect(sigName: "notify::scale-z", callback: (($obj: Point, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-z", callback: (($obj: Point, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::scale-z", ...args: any[]): void
    connect(sigName: "notify::show-on-set-parent", callback: (($obj: Point, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::show-on-set-parent", callback: (($obj: Point, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::show-on-set-parent", ...args: any[]): void
    connect(sigName: "notify::text-direction", callback: (($obj: Point, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::text-direction", callback: (($obj: Point, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::text-direction", ...args: any[]): void
    connect(sigName: "notify::transform", callback: (($obj: Point, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::transform", callback: (($obj: Point, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::transform", ...args: any[]): void
    connect(sigName: "notify::transform-set", callback: (($obj: Point, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::transform-set", callback: (($obj: Point, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::transform-set", ...args: any[]): void
    connect(sigName: "notify::translation-x", callback: (($obj: Point, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::translation-x", callback: (($obj: Point, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::translation-x", ...args: any[]): void
    connect(sigName: "notify::translation-y", callback: (($obj: Point, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::translation-y", callback: (($obj: Point, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::translation-y", ...args: any[]): void
    connect(sigName: "notify::translation-z", callback: (($obj: Point, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::translation-z", callback: (($obj: Point, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::translation-z", ...args: any[]): void
    connect(sigName: "notify::visible", callback: (($obj: Point, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visible", callback: (($obj: Point, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::visible", ...args: any[]): void
    connect(sigName: "notify::width", callback: (($obj: Point, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::width", callback: (($obj: Point, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::width", ...args: any[]): void
    connect(sigName: "notify::x", callback: (($obj: Point, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::x", callback: (($obj: Point, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::x", ...args: any[]): void
    connect(sigName: "notify::x-align", callback: (($obj: Point, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::x-align", callback: (($obj: Point, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::x-align", ...args: any[]): void
    connect(sigName: "notify::x-expand", callback: (($obj: Point, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::x-expand", callback: (($obj: Point, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::x-expand", ...args: any[]): void
    connect(sigName: "notify::y", callback: (($obj: Point, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::y", callback: (($obj: Point, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::y", ...args: any[]): void
    connect(sigName: "notify::y-align", callback: (($obj: Point, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::y-align", callback: (($obj: Point, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::y-align", ...args: any[]): void
    connect(sigName: "notify::y-expand", callback: (($obj: Point, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::y-expand", callback: (($obj: Point, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::y-expand", ...args: any[]): void
    connect(sigName: "notify::z-position", callback: (($obj: Point, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::z-position", callback: (($obj: Point, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::z-position", ...args: any[]): void
    connect(sigName: "notify::surface", callback: (($obj: Point, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::surface", callback: (($obj: Point, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::surface", ...args: any[]): void
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
 * The #ChamplainPoint structure contains only private data
 * and should be accessed using the provided API
 * @class 
 */
class Point extends Marker {

    // Own properties of Champlain-0.12.Champlain.Point

    static name: string
    static $gtype: GObject.GType<Point>

    // Constructors of Champlain-0.12.Champlain.Point

    constructor(config?: Point_ConstructProps) 
    /**
     * Creates an instance of #ChamplainPoint with default size and color.
     * @constructor 
     */
    constructor() 
    /**
     * Creates an instance of #ChamplainPoint with default size and color.
     * @constructor 
     */
    static new(): Point
    /**
     * Creates an instance of #ChamplainPoint with the specified size and color.
     * @constructor 
     * @param size Marker size
     * @param color Marker color
     */
    static new_full(size: number, color: Clutter.Color): Point
    _init(config?: Point_ConstructProps): void
}

interface Renderer_ConstructProps extends GObject.InitiallyUnowned_ConstructProps {
}

interface Renderer {

    // Own fields of Champlain-0.12.Champlain.Renderer

    parent: GObject.InitiallyUnowned

    // Owm methods of Champlain-0.12.Champlain.Renderer

    /**
     * Renders the texture for the provided tile and calls champlain_tile_set_content()
     * to set the content of the tile. When the rendering is finished, the renderer
     * emits the #ChamplainTile::render-complete signal. The tile has to be displayed manually by
     * calling champlain_tile_display_content().
     * @param tile the tile to render
     */
    render(tile: Tile): void
    /**
     * Sets the data which is used to render tiles by the renderer.
     * @param data data used for tile rendering
     */
    set_data(data: Uint8Array): void

    // Overloads of set_data

    /**
     * Each object carries around a table of associations from
     * strings to pointers.  This function lets you set an association.
     * 
     * If the object already had an association with that name,
     * the old association will be destroyed.
     * 
     * Internally, the `key` is converted to a #GQuark using g_quark_from_string().
     * This means a copy of `key` is kept permanently (even after `object` has been
     * finalized) — so it is recommended to only use a small, bounded set of values
     * for `key` in your program, to avoid the #GQuark storage growing unbounded.
     * @param key name of the key
     * @param data data to associate with that key
     */
    set_data(key: string, data?: object | null): void
    set_data(...args: any[]): any
    set_data(args_or_key: any[] | string, data?: object | null): void | any

    // Own virtual methods of Champlain-0.12.Champlain.Renderer

    /**
     * Renders the texture for the provided tile and calls champlain_tile_set_content()
     * to set the content of the tile. When the rendering is finished, the renderer
     * emits the #ChamplainTile::render-complete signal. The tile has to be displayed manually by
     * calling champlain_tile_display_content().
     * @virtual 
     * @param tile the tile to render
     */
    vfunc_render(tile: Tile): void
    /**
     * Sets the data which is used to render tiles by the renderer.
     * @virtual 
     * @param data data used for tile rendering
     */
    vfunc_set_data(data: Uint8Array): void

    // Class property signals of Champlain-0.12.Champlain.Renderer

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * The #ChamplainRenderer structure contains only private data
 * and should be accessed using the provided API
 * @class 
 */
class Renderer extends GObject.InitiallyUnowned {

    // Own properties of Champlain-0.12.Champlain.Renderer

    static name: string
    static $gtype: GObject.GType<Renderer>

    // Constructors of Champlain-0.12.Champlain.Renderer

    constructor(config?: Renderer_ConstructProps) 
    _init(config?: Renderer_ConstructProps): void
}

interface Scale_ConstructProps extends Atk.ImplementorIface_ConstructProps, Clutter.Animatable_ConstructProps, Clutter.Container_ConstructProps, Clutter.Scriptable_ConstructProps, Clutter.Actor_ConstructProps {

    // Own constructor properties of Champlain-0.12.Champlain.Scale

    /**
     * The size of the map scale on screen in pixels.
     */
    max_width?: number | null
    /**
     * The scale's units.
     */
    unit?: Unit | null
}

interface Scale extends Atk.ImplementorIface, Clutter.Animatable, Clutter.Container, Clutter.Scriptable {

    // Own properties of Champlain-0.12.Champlain.Scale

    /**
     * The size of the map scale on screen in pixels.
     */
    max_width: number
    /**
     * The scale's units.
     */
    unit: Unit

    // Own fields of Champlain-0.12.Champlain.Scale

    parent: Clutter.Actor
    priv: ScalePrivate

    // Owm methods of Champlain-0.12.Champlain.Scale

    /**
     * This method connects to the necessary signals of #ChamplainView to make the
     * scale adapt to the current latitude and longitude.
     * @param view a #ChamplainView
     */
    connect_view(view: View): void
    /**
     * This method disconnects from the signals previously connected by champlain_scale_connect_view().
     */
    disconnect_view(): void
    /**
     * Gets the maximum scale width.
     */
    get_max_width(): number
    /**
     * Gets the unit used by the scale.
     */
    get_unit(): Unit
    /**
     * Sets the maximum width of the scale on the screen in pixels
     * @param value the number of pixels
     */
    set_max_width(value: number): void
    /**
     * Sets the scale unit.
     * @param unit a #ChamplainUnit
     */
    set_unit(unit: Unit): void

    // Class property signals of Champlain-0.12.Champlain.Scale

    connect(sigName: "notify::max-width", callback: (($obj: Scale, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::max-width", callback: (($obj: Scale, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::max-width", ...args: any[]): void
    connect(sigName: "notify::unit", callback: (($obj: Scale, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::unit", callback: (($obj: Scale, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::unit", ...args: any[]): void
    connect(sigName: "notify::actions", callback: (($obj: Scale, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::actions", callback: (($obj: Scale, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::actions", ...args: any[]): void
    connect(sigName: "notify::allocation", callback: (($obj: Scale, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::allocation", callback: (($obj: Scale, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::allocation", ...args: any[]): void
    connect(sigName: "notify::anchor-gravity", callback: (($obj: Scale, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::anchor-gravity", callback: (($obj: Scale, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::anchor-gravity", ...args: any[]): void
    connect(sigName: "notify::anchor-x", callback: (($obj: Scale, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::anchor-x", callback: (($obj: Scale, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::anchor-x", ...args: any[]): void
    connect(sigName: "notify::anchor-y", callback: (($obj: Scale, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::anchor-y", callback: (($obj: Scale, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::anchor-y", ...args: any[]): void
    connect(sigName: "notify::background-color", callback: (($obj: Scale, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::background-color", callback: (($obj: Scale, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::background-color", ...args: any[]): void
    connect(sigName: "notify::background-color-set", callback: (($obj: Scale, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::background-color-set", callback: (($obj: Scale, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::background-color-set", ...args: any[]): void
    connect(sigName: "notify::child-transform", callback: (($obj: Scale, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::child-transform", callback: (($obj: Scale, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::child-transform", ...args: any[]): void
    connect(sigName: "notify::child-transform-set", callback: (($obj: Scale, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::child-transform-set", callback: (($obj: Scale, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::child-transform-set", ...args: any[]): void
    connect(sigName: "notify::clip", callback: (($obj: Scale, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::clip", callback: (($obj: Scale, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::clip", ...args: any[]): void
    connect(sigName: "notify::clip-rect", callback: (($obj: Scale, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::clip-rect", callback: (($obj: Scale, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::clip-rect", ...args: any[]): void
    connect(sigName: "notify::clip-to-allocation", callback: (($obj: Scale, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::clip-to-allocation", callback: (($obj: Scale, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::clip-to-allocation", ...args: any[]): void
    connect(sigName: "notify::constraints", callback: (($obj: Scale, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::constraints", callback: (($obj: Scale, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::constraints", ...args: any[]): void
    connect(sigName: "notify::content", callback: (($obj: Scale, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::content", callback: (($obj: Scale, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::content", ...args: any[]): void
    connect(sigName: "notify::content-box", callback: (($obj: Scale, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::content-box", callback: (($obj: Scale, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::content-box", ...args: any[]): void
    connect(sigName: "notify::content-gravity", callback: (($obj: Scale, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::content-gravity", callback: (($obj: Scale, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::content-gravity", ...args: any[]): void
    connect(sigName: "notify::content-repeat", callback: (($obj: Scale, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::content-repeat", callback: (($obj: Scale, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::content-repeat", ...args: any[]): void
    connect(sigName: "notify::depth", callback: (($obj: Scale, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::depth", callback: (($obj: Scale, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::depth", ...args: any[]): void
    connect(sigName: "notify::effect", callback: (($obj: Scale, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::effect", callback: (($obj: Scale, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::effect", ...args: any[]): void
    connect(sigName: "notify::first-child", callback: (($obj: Scale, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::first-child", callback: (($obj: Scale, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::first-child", ...args: any[]): void
    connect(sigName: "notify::fixed-position-set", callback: (($obj: Scale, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fixed-position-set", callback: (($obj: Scale, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::fixed-position-set", ...args: any[]): void
    connect(sigName: "notify::fixed-x", callback: (($obj: Scale, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fixed-x", callback: (($obj: Scale, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::fixed-x", ...args: any[]): void
    connect(sigName: "notify::fixed-y", callback: (($obj: Scale, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fixed-y", callback: (($obj: Scale, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::fixed-y", ...args: any[]): void
    connect(sigName: "notify::has-clip", callback: (($obj: Scale, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-clip", callback: (($obj: Scale, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-clip", ...args: any[]): void
    connect(sigName: "notify::has-pointer", callback: (($obj: Scale, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-pointer", callback: (($obj: Scale, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-pointer", ...args: any[]): void
    connect(sigName: "notify::height", callback: (($obj: Scale, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height", callback: (($obj: Scale, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::height", ...args: any[]): void
    connect(sigName: "notify::last-child", callback: (($obj: Scale, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::last-child", callback: (($obj: Scale, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::last-child", ...args: any[]): void
    connect(sigName: "notify::layout-manager", callback: (($obj: Scale, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::layout-manager", callback: (($obj: Scale, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::layout-manager", ...args: any[]): void
    connect(sigName: "notify::magnification-filter", callback: (($obj: Scale, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::magnification-filter", callback: (($obj: Scale, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::magnification-filter", ...args: any[]): void
    connect(sigName: "notify::mapped", callback: (($obj: Scale, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::mapped", callback: (($obj: Scale, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::mapped", ...args: any[]): void
    connect(sigName: "notify::margin-bottom", callback: (($obj: Scale, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-bottom", callback: (($obj: Scale, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-bottom", ...args: any[]): void
    connect(sigName: "notify::margin-left", callback: (($obj: Scale, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-left", callback: (($obj: Scale, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-left", ...args: any[]): void
    connect(sigName: "notify::margin-right", callback: (($obj: Scale, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-right", callback: (($obj: Scale, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-right", ...args: any[]): void
    connect(sigName: "notify::margin-top", callback: (($obj: Scale, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-top", callback: (($obj: Scale, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-top", ...args: any[]): void
    connect(sigName: "notify::min-height", callback: (($obj: Scale, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::min-height", callback: (($obj: Scale, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::min-height", ...args: any[]): void
    connect(sigName: "notify::min-height-set", callback: (($obj: Scale, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::min-height-set", callback: (($obj: Scale, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::min-height-set", ...args: any[]): void
    connect(sigName: "notify::min-width", callback: (($obj: Scale, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::min-width", callback: (($obj: Scale, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::min-width", ...args: any[]): void
    connect(sigName: "notify::min-width-set", callback: (($obj: Scale, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::min-width-set", callback: (($obj: Scale, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::min-width-set", ...args: any[]): void
    connect(sigName: "notify::minification-filter", callback: (($obj: Scale, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::minification-filter", callback: (($obj: Scale, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::minification-filter", ...args: any[]): void
    connect(sigName: "notify::name", callback: (($obj: Scale, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: Scale, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::natural-height", callback: (($obj: Scale, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::natural-height", callback: (($obj: Scale, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::natural-height", ...args: any[]): void
    connect(sigName: "notify::natural-height-set", callback: (($obj: Scale, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::natural-height-set", callback: (($obj: Scale, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::natural-height-set", ...args: any[]): void
    connect(sigName: "notify::natural-width", callback: (($obj: Scale, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::natural-width", callback: (($obj: Scale, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::natural-width", ...args: any[]): void
    connect(sigName: "notify::natural-width-set", callback: (($obj: Scale, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::natural-width-set", callback: (($obj: Scale, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::natural-width-set", ...args: any[]): void
    connect(sigName: "notify::offscreen-redirect", callback: (($obj: Scale, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::offscreen-redirect", callback: (($obj: Scale, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::offscreen-redirect", ...args: any[]): void
    connect(sigName: "notify::opacity", callback: (($obj: Scale, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opacity", callback: (($obj: Scale, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::opacity", ...args: any[]): void
    connect(sigName: "notify::pivot-point", callback: (($obj: Scale, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::pivot-point", callback: (($obj: Scale, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::pivot-point", ...args: any[]): void
    connect(sigName: "notify::pivot-point-z", callback: (($obj: Scale, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::pivot-point-z", callback: (($obj: Scale, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::pivot-point-z", ...args: any[]): void
    connect(sigName: "notify::position", callback: (($obj: Scale, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::position", callback: (($obj: Scale, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::position", ...args: any[]): void
    connect(sigName: "notify::reactive", callback: (($obj: Scale, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::reactive", callback: (($obj: Scale, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::reactive", ...args: any[]): void
    connect(sigName: "notify::realized", callback: (($obj: Scale, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::realized", callback: (($obj: Scale, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::realized", ...args: any[]): void
    connect(sigName: "notify::request-mode", callback: (($obj: Scale, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::request-mode", callback: (($obj: Scale, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::request-mode", ...args: any[]): void
    connect(sigName: "notify::rotation-angle-x", callback: (($obj: Scale, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::rotation-angle-x", callback: (($obj: Scale, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::rotation-angle-x", ...args: any[]): void
    connect(sigName: "notify::rotation-angle-y", callback: (($obj: Scale, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::rotation-angle-y", callback: (($obj: Scale, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::rotation-angle-y", ...args: any[]): void
    connect(sigName: "notify::rotation-angle-z", callback: (($obj: Scale, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::rotation-angle-z", callback: (($obj: Scale, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::rotation-angle-z", ...args: any[]): void
    connect(sigName: "notify::rotation-center-x", callback: (($obj: Scale, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::rotation-center-x", callback: (($obj: Scale, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::rotation-center-x", ...args: any[]): void
    connect(sigName: "notify::rotation-center-y", callback: (($obj: Scale, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::rotation-center-y", callback: (($obj: Scale, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::rotation-center-y", ...args: any[]): void
    connect(sigName: "notify::rotation-center-z", callback: (($obj: Scale, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::rotation-center-z", callback: (($obj: Scale, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::rotation-center-z", ...args: any[]): void
    connect(sigName: "notify::rotation-center-z-gravity", callback: (($obj: Scale, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::rotation-center-z-gravity", callback: (($obj: Scale, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::rotation-center-z-gravity", ...args: any[]): void
    connect(sigName: "notify::scale-center-x", callback: (($obj: Scale, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-center-x", callback: (($obj: Scale, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::scale-center-x", ...args: any[]): void
    connect(sigName: "notify::scale-center-y", callback: (($obj: Scale, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-center-y", callback: (($obj: Scale, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::scale-center-y", ...args: any[]): void
    connect(sigName: "notify::scale-gravity", callback: (($obj: Scale, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-gravity", callback: (($obj: Scale, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::scale-gravity", ...args: any[]): void
    connect(sigName: "notify::scale-x", callback: (($obj: Scale, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-x", callback: (($obj: Scale, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::scale-x", ...args: any[]): void
    connect(sigName: "notify::scale-y", callback: (($obj: Scale, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-y", callback: (($obj: Scale, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::scale-y", ...args: any[]): void
    connect(sigName: "notify::scale-z", callback: (($obj: Scale, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-z", callback: (($obj: Scale, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::scale-z", ...args: any[]): void
    connect(sigName: "notify::show-on-set-parent", callback: (($obj: Scale, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::show-on-set-parent", callback: (($obj: Scale, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::show-on-set-parent", ...args: any[]): void
    connect(sigName: "notify::size", callback: (($obj: Scale, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::size", callback: (($obj: Scale, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::size", ...args: any[]): void
    connect(sigName: "notify::text-direction", callback: (($obj: Scale, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::text-direction", callback: (($obj: Scale, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::text-direction", ...args: any[]): void
    connect(sigName: "notify::transform", callback: (($obj: Scale, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::transform", callback: (($obj: Scale, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::transform", ...args: any[]): void
    connect(sigName: "notify::transform-set", callback: (($obj: Scale, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::transform-set", callback: (($obj: Scale, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::transform-set", ...args: any[]): void
    connect(sigName: "notify::translation-x", callback: (($obj: Scale, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::translation-x", callback: (($obj: Scale, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::translation-x", ...args: any[]): void
    connect(sigName: "notify::translation-y", callback: (($obj: Scale, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::translation-y", callback: (($obj: Scale, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::translation-y", ...args: any[]): void
    connect(sigName: "notify::translation-z", callback: (($obj: Scale, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::translation-z", callback: (($obj: Scale, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::translation-z", ...args: any[]): void
    connect(sigName: "notify::visible", callback: (($obj: Scale, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visible", callback: (($obj: Scale, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::visible", ...args: any[]): void
    connect(sigName: "notify::width", callback: (($obj: Scale, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::width", callback: (($obj: Scale, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::width", ...args: any[]): void
    connect(sigName: "notify::x", callback: (($obj: Scale, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::x", callback: (($obj: Scale, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::x", ...args: any[]): void
    connect(sigName: "notify::x-align", callback: (($obj: Scale, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::x-align", callback: (($obj: Scale, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::x-align", ...args: any[]): void
    connect(sigName: "notify::x-expand", callback: (($obj: Scale, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::x-expand", callback: (($obj: Scale, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::x-expand", ...args: any[]): void
    connect(sigName: "notify::y", callback: (($obj: Scale, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::y", callback: (($obj: Scale, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::y", ...args: any[]): void
    connect(sigName: "notify::y-align", callback: (($obj: Scale, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::y-align", callback: (($obj: Scale, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::y-align", ...args: any[]): void
    connect(sigName: "notify::y-expand", callback: (($obj: Scale, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::y-expand", callback: (($obj: Scale, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::y-expand", ...args: any[]): void
    connect(sigName: "notify::z-position", callback: (($obj: Scale, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::z-position", callback: (($obj: Scale, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::z-position", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * The #ChamplainScale structure contains only private data
 * and should be accessed using the provided API
 * @class 
 */
class Scale extends Clutter.Actor {

    // Own properties of Champlain-0.12.Champlain.Scale

    static name: string
    static $gtype: GObject.GType<Scale>

    // Constructors of Champlain-0.12.Champlain.Scale

    constructor(config?: Scale_ConstructProps) 
    /**
     * Creates an instance of #ChamplainScale.
     * @constructor 
     */
    constructor() 
    /**
     * Creates an instance of #ChamplainScale.
     * @constructor 
     */
    static new(): Scale
    _init(config?: Scale_ConstructProps): void
}

interface Tile_ConstructProps extends Atk.ImplementorIface_ConstructProps, Exportable_ConstructProps, Clutter.Animatable_ConstructProps, Clutter.Container_ConstructProps, Clutter.Scriptable_ConstructProps, Clutter.Actor_ConstructProps {

    // Own constructor properties of Champlain-0.12.Champlain.Tile

    /**
     * The #ClutterActor with the specific image content.  When changing this
     * property, the new actor will be faded in.
     */
    content?: Clutter.Actor | null
    /**
     * The tile's ETag. This information is sent by some web servers as a mean
     * to identify if a tile has changed.  This information is saved in the cache
     * and sent in GET queries.
     */
    etag?: string | null
    /**
     * Specifies whether the tile should fade in when loading
     */
    fade_in?: boolean | null
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

/**
 * Signal callback interface for `render-complete`
 */
interface Tile_RenderCompleteSignalCallback {
    ($obj: Tile, data: object | null, size: number, error: boolean): void
}

interface Tile extends Atk.ImplementorIface, Exportable, Clutter.Animatable, Clutter.Container, Clutter.Scriptable {

    // Own properties of Champlain-0.12.Champlain.Tile

    /**
     * The #ClutterActor with the specific image content.  When changing this
     * property, the new actor will be faded in.
     */
    content: Clutter.Actor
    /**
     * The tile's ETag. This information is sent by some web servers as a mean
     * to identify if a tile has changed.  This information is saved in the cache
     * and sent in GET queries.
     */
    etag: string
    /**
     * Specifies whether the tile should fade in when loading
     */
    fade_in: boolean
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

    // Own fields of Champlain-0.12.Champlain.Tile

    parent: Clutter.Actor
    priv: TilePrivate

    // Owm methods of Champlain-0.12.Champlain.Tile

    /**
     * Displays the tile's content.
     */
    display_content(): void
    /**
     * Gets the tile's content actor.
     */
    get_content(): Clutter.Actor

    // Overloads of get_content

    /**
     * Retrieves the contents of `self`.
     */
    get_content(): Clutter.Content
    get_content(...args: any[]): any
    get_content(...args: any[]): Clutter.Actor | Clutter.Content | any
    /**
     * Gets the tile's ETag.
     */
    get_etag(): string
    /**
     * Checks whether the tile should fade in.
     */
    get_fade_in(): boolean
    /**
     * Gets the tile's last modified time.
     */
    get_modified_time(): GLib.TimeVal
    /**
     * Gets the tile's size.
     */
    get_size(): number

    // Overloads of get_size

    /**
     * This function tries to "do what you mean" and return
     * the size an actor will have. If the actor has a valid
     * allocation, the allocation will be returned; otherwise,
     * the actors natural size request will be returned.
     * 
     * If you care whether you get the request vs. the allocation, you
     * should probably call a different function like
     * clutter_actor_get_allocation_box() or
     * clutter_actor_get_preferred_width().
     */
    get_size(): [ /* width */ number, /* height */ number ]
    get_size(...args: any[]): any
    get_size(...args: any[]): [ /* returnType */ number | void | any, /* width */ number, /* height */ number ]
    /**
     * Gets the current state of tile loading.
     */
    get_state(): State
    /**
     * Gets the tile's x position.
     */
    get_x(): number
    /**
     * Gets the tile's y position.
     */
    get_y(): number
    /**
     * Gets the tile's zoom level.
     */
    get_zoom_level(): number
    /**
     * Sets the tile's content. To also disppay the tile, you have to call
     * champlain_tile_display_content() in addition.
     * @param actor the new content
     */
    set_content(actor: Clutter.Actor): void

    // Overloads of set_content

    /**
     * Sets the contents of a #ClutterActor.
     * @param content a #ClutterContent, or %NULL
     */
    set_content(content: Clutter.Content | null): void
    set_content(...args: any[]): any
    set_content(args_or_content: any[] | Clutter.Content | null): void | any
    /**
     * Sets the tile's ETag
     * @param etag the tile's ETag as sent by the server
     */
    set_etag(etag: string): void
    /**
     * Sets the flag determining whether the tile should fade in when loading
     * @param fade_in determines whether the tile should fade in when loading
     */
    set_fade_in(fade_in: boolean): void
    /**
     * Sets the tile's modified time
     * @param time a #GTimeVal, the value will be copied
     */
    set_modified_time(time: GLib.TimeVal): void
    /**
     * Sets the tile's size
     * @param size the size in pixels
     */
    set_size(size: number): void

    // Overloads of set_size

    /**
     * Sets the actor's size request in pixels. This overrides any
     * "normal" size request the actor would have. For example
     * a text actor might normally request the size of the text;
     * this function would force a specific size instead.
     * 
     * If `width` and/or `height` are -1 the actor will use its
     * "normal" size request instead of overriding it, i.e.
     * you can "unset" the size with -1.
     * 
     * This function sets or unsets both the minimum and natural size.
     * @param width New width of actor in pixels, or -1
     * @param height New height of actor in pixels, or -1
     */
    set_size(width: number, height?: number): void
    set_size(...args: any[]): any
    set_size(args_or_width: any[] | number, height?: number): void | any
    /**
     * Sets the tile's #ChamplainState
     * @param state a #ChamplainState
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

    // Own signals of Champlain-0.12.Champlain.Tile

    connect(sigName: "render-complete", callback: Tile_RenderCompleteSignalCallback): number
    connect_after(sigName: "render-complete", callback: Tile_RenderCompleteSignalCallback): number
    emit(sigName: "render-complete", data: object | null, size: number, error: boolean, ...args: any[]): void

    // Class property signals of Champlain-0.12.Champlain.Tile

    connect(sigName: "notify::content", callback: (($obj: Tile, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::content", callback: (($obj: Tile, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::content", ...args: any[]): void
    connect(sigName: "notify::etag", callback: (($obj: Tile, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::etag", callback: (($obj: Tile, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::etag", ...args: any[]): void
    connect(sigName: "notify::fade-in", callback: (($obj: Tile, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fade-in", callback: (($obj: Tile, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::fade-in", ...args: any[]): void
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
    connect(sigName: "notify::actions", callback: (($obj: Tile, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::actions", callback: (($obj: Tile, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::actions", ...args: any[]): void
    connect(sigName: "notify::allocation", callback: (($obj: Tile, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::allocation", callback: (($obj: Tile, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::allocation", ...args: any[]): void
    connect(sigName: "notify::anchor-gravity", callback: (($obj: Tile, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::anchor-gravity", callback: (($obj: Tile, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::anchor-gravity", ...args: any[]): void
    connect(sigName: "notify::anchor-x", callback: (($obj: Tile, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::anchor-x", callback: (($obj: Tile, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::anchor-x", ...args: any[]): void
    connect(sigName: "notify::anchor-y", callback: (($obj: Tile, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::anchor-y", callback: (($obj: Tile, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::anchor-y", ...args: any[]): void
    connect(sigName: "notify::background-color", callback: (($obj: Tile, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::background-color", callback: (($obj: Tile, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::background-color", ...args: any[]): void
    connect(sigName: "notify::background-color-set", callback: (($obj: Tile, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::background-color-set", callback: (($obj: Tile, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::background-color-set", ...args: any[]): void
    connect(sigName: "notify::child-transform", callback: (($obj: Tile, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::child-transform", callback: (($obj: Tile, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::child-transform", ...args: any[]): void
    connect(sigName: "notify::child-transform-set", callback: (($obj: Tile, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::child-transform-set", callback: (($obj: Tile, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::child-transform-set", ...args: any[]): void
    connect(sigName: "notify::clip", callback: (($obj: Tile, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::clip", callback: (($obj: Tile, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::clip", ...args: any[]): void
    connect(sigName: "notify::clip-rect", callback: (($obj: Tile, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::clip-rect", callback: (($obj: Tile, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::clip-rect", ...args: any[]): void
    connect(sigName: "notify::clip-to-allocation", callback: (($obj: Tile, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::clip-to-allocation", callback: (($obj: Tile, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::clip-to-allocation", ...args: any[]): void
    connect(sigName: "notify::constraints", callback: (($obj: Tile, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::constraints", callback: (($obj: Tile, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::constraints", ...args: any[]): void
    connect(sigName: "notify::content-box", callback: (($obj: Tile, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::content-box", callback: (($obj: Tile, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::content-box", ...args: any[]): void
    connect(sigName: "notify::content-gravity", callback: (($obj: Tile, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::content-gravity", callback: (($obj: Tile, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::content-gravity", ...args: any[]): void
    connect(sigName: "notify::content-repeat", callback: (($obj: Tile, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::content-repeat", callback: (($obj: Tile, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::content-repeat", ...args: any[]): void
    connect(sigName: "notify::depth", callback: (($obj: Tile, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::depth", callback: (($obj: Tile, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::depth", ...args: any[]): void
    connect(sigName: "notify::effect", callback: (($obj: Tile, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::effect", callback: (($obj: Tile, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::effect", ...args: any[]): void
    connect(sigName: "notify::first-child", callback: (($obj: Tile, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::first-child", callback: (($obj: Tile, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::first-child", ...args: any[]): void
    connect(sigName: "notify::fixed-position-set", callback: (($obj: Tile, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fixed-position-set", callback: (($obj: Tile, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::fixed-position-set", ...args: any[]): void
    connect(sigName: "notify::fixed-x", callback: (($obj: Tile, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fixed-x", callback: (($obj: Tile, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::fixed-x", ...args: any[]): void
    connect(sigName: "notify::fixed-y", callback: (($obj: Tile, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fixed-y", callback: (($obj: Tile, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::fixed-y", ...args: any[]): void
    connect(sigName: "notify::has-clip", callback: (($obj: Tile, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-clip", callback: (($obj: Tile, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-clip", ...args: any[]): void
    connect(sigName: "notify::has-pointer", callback: (($obj: Tile, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-pointer", callback: (($obj: Tile, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-pointer", ...args: any[]): void
    connect(sigName: "notify::height", callback: (($obj: Tile, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height", callback: (($obj: Tile, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::height", ...args: any[]): void
    connect(sigName: "notify::last-child", callback: (($obj: Tile, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::last-child", callback: (($obj: Tile, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::last-child", ...args: any[]): void
    connect(sigName: "notify::layout-manager", callback: (($obj: Tile, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::layout-manager", callback: (($obj: Tile, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::layout-manager", ...args: any[]): void
    connect(sigName: "notify::magnification-filter", callback: (($obj: Tile, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::magnification-filter", callback: (($obj: Tile, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::magnification-filter", ...args: any[]): void
    connect(sigName: "notify::mapped", callback: (($obj: Tile, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::mapped", callback: (($obj: Tile, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::mapped", ...args: any[]): void
    connect(sigName: "notify::margin-bottom", callback: (($obj: Tile, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-bottom", callback: (($obj: Tile, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-bottom", ...args: any[]): void
    connect(sigName: "notify::margin-left", callback: (($obj: Tile, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-left", callback: (($obj: Tile, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-left", ...args: any[]): void
    connect(sigName: "notify::margin-right", callback: (($obj: Tile, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-right", callback: (($obj: Tile, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-right", ...args: any[]): void
    connect(sigName: "notify::margin-top", callback: (($obj: Tile, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-top", callback: (($obj: Tile, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-top", ...args: any[]): void
    connect(sigName: "notify::min-height", callback: (($obj: Tile, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::min-height", callback: (($obj: Tile, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::min-height", ...args: any[]): void
    connect(sigName: "notify::min-height-set", callback: (($obj: Tile, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::min-height-set", callback: (($obj: Tile, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::min-height-set", ...args: any[]): void
    connect(sigName: "notify::min-width", callback: (($obj: Tile, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::min-width", callback: (($obj: Tile, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::min-width", ...args: any[]): void
    connect(sigName: "notify::min-width-set", callback: (($obj: Tile, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::min-width-set", callback: (($obj: Tile, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::min-width-set", ...args: any[]): void
    connect(sigName: "notify::minification-filter", callback: (($obj: Tile, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::minification-filter", callback: (($obj: Tile, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::minification-filter", ...args: any[]): void
    connect(sigName: "notify::name", callback: (($obj: Tile, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: Tile, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::natural-height", callback: (($obj: Tile, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::natural-height", callback: (($obj: Tile, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::natural-height", ...args: any[]): void
    connect(sigName: "notify::natural-height-set", callback: (($obj: Tile, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::natural-height-set", callback: (($obj: Tile, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::natural-height-set", ...args: any[]): void
    connect(sigName: "notify::natural-width", callback: (($obj: Tile, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::natural-width", callback: (($obj: Tile, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::natural-width", ...args: any[]): void
    connect(sigName: "notify::natural-width-set", callback: (($obj: Tile, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::natural-width-set", callback: (($obj: Tile, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::natural-width-set", ...args: any[]): void
    connect(sigName: "notify::offscreen-redirect", callback: (($obj: Tile, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::offscreen-redirect", callback: (($obj: Tile, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::offscreen-redirect", ...args: any[]): void
    connect(sigName: "notify::opacity", callback: (($obj: Tile, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opacity", callback: (($obj: Tile, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::opacity", ...args: any[]): void
    connect(sigName: "notify::pivot-point", callback: (($obj: Tile, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::pivot-point", callback: (($obj: Tile, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::pivot-point", ...args: any[]): void
    connect(sigName: "notify::pivot-point-z", callback: (($obj: Tile, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::pivot-point-z", callback: (($obj: Tile, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::pivot-point-z", ...args: any[]): void
    connect(sigName: "notify::position", callback: (($obj: Tile, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::position", callback: (($obj: Tile, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::position", ...args: any[]): void
    connect(sigName: "notify::reactive", callback: (($obj: Tile, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::reactive", callback: (($obj: Tile, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::reactive", ...args: any[]): void
    connect(sigName: "notify::realized", callback: (($obj: Tile, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::realized", callback: (($obj: Tile, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::realized", ...args: any[]): void
    connect(sigName: "notify::request-mode", callback: (($obj: Tile, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::request-mode", callback: (($obj: Tile, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::request-mode", ...args: any[]): void
    connect(sigName: "notify::rotation-angle-x", callback: (($obj: Tile, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::rotation-angle-x", callback: (($obj: Tile, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::rotation-angle-x", ...args: any[]): void
    connect(sigName: "notify::rotation-angle-y", callback: (($obj: Tile, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::rotation-angle-y", callback: (($obj: Tile, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::rotation-angle-y", ...args: any[]): void
    connect(sigName: "notify::rotation-angle-z", callback: (($obj: Tile, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::rotation-angle-z", callback: (($obj: Tile, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::rotation-angle-z", ...args: any[]): void
    connect(sigName: "notify::rotation-center-x", callback: (($obj: Tile, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::rotation-center-x", callback: (($obj: Tile, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::rotation-center-x", ...args: any[]): void
    connect(sigName: "notify::rotation-center-y", callback: (($obj: Tile, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::rotation-center-y", callback: (($obj: Tile, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::rotation-center-y", ...args: any[]): void
    connect(sigName: "notify::rotation-center-z", callback: (($obj: Tile, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::rotation-center-z", callback: (($obj: Tile, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::rotation-center-z", ...args: any[]): void
    connect(sigName: "notify::rotation-center-z-gravity", callback: (($obj: Tile, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::rotation-center-z-gravity", callback: (($obj: Tile, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::rotation-center-z-gravity", ...args: any[]): void
    connect(sigName: "notify::scale-center-x", callback: (($obj: Tile, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-center-x", callback: (($obj: Tile, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::scale-center-x", ...args: any[]): void
    connect(sigName: "notify::scale-center-y", callback: (($obj: Tile, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-center-y", callback: (($obj: Tile, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::scale-center-y", ...args: any[]): void
    connect(sigName: "notify::scale-gravity", callback: (($obj: Tile, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-gravity", callback: (($obj: Tile, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::scale-gravity", ...args: any[]): void
    connect(sigName: "notify::scale-x", callback: (($obj: Tile, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-x", callback: (($obj: Tile, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::scale-x", ...args: any[]): void
    connect(sigName: "notify::scale-y", callback: (($obj: Tile, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-y", callback: (($obj: Tile, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::scale-y", ...args: any[]): void
    connect(sigName: "notify::scale-z", callback: (($obj: Tile, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-z", callback: (($obj: Tile, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::scale-z", ...args: any[]): void
    connect(sigName: "notify::show-on-set-parent", callback: (($obj: Tile, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::show-on-set-parent", callback: (($obj: Tile, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::show-on-set-parent", ...args: any[]): void
    connect(sigName: "notify::text-direction", callback: (($obj: Tile, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::text-direction", callback: (($obj: Tile, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::text-direction", ...args: any[]): void
    connect(sigName: "notify::transform", callback: (($obj: Tile, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::transform", callback: (($obj: Tile, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::transform", ...args: any[]): void
    connect(sigName: "notify::transform-set", callback: (($obj: Tile, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::transform-set", callback: (($obj: Tile, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::transform-set", ...args: any[]): void
    connect(sigName: "notify::translation-x", callback: (($obj: Tile, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::translation-x", callback: (($obj: Tile, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::translation-x", ...args: any[]): void
    connect(sigName: "notify::translation-y", callback: (($obj: Tile, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::translation-y", callback: (($obj: Tile, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::translation-y", ...args: any[]): void
    connect(sigName: "notify::translation-z", callback: (($obj: Tile, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::translation-z", callback: (($obj: Tile, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::translation-z", ...args: any[]): void
    connect(sigName: "notify::visible", callback: (($obj: Tile, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visible", callback: (($obj: Tile, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::visible", ...args: any[]): void
    connect(sigName: "notify::width", callback: (($obj: Tile, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::width", callback: (($obj: Tile, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::width", ...args: any[]): void
    connect(sigName: "notify::x-align", callback: (($obj: Tile, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::x-align", callback: (($obj: Tile, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::x-align", ...args: any[]): void
    connect(sigName: "notify::x-expand", callback: (($obj: Tile, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::x-expand", callback: (($obj: Tile, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::x-expand", ...args: any[]): void
    connect(sigName: "notify::y-align", callback: (($obj: Tile, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::y-align", callback: (($obj: Tile, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::y-align", ...args: any[]): void
    connect(sigName: "notify::y-expand", callback: (($obj: Tile, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::y-expand", callback: (($obj: Tile, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::y-expand", ...args: any[]): void
    connect(sigName: "notify::z-position", callback: (($obj: Tile, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::z-position", callback: (($obj: Tile, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::z-position", ...args: any[]): void
    connect(sigName: "notify::surface", callback: (($obj: Tile, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::surface", callback: (($obj: Tile, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::surface", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * The #ChamplainTile structure contains only private data
 * and should be accessed using the provided API
 * @class 
 */
class Tile extends Clutter.Actor {

    // Own properties of Champlain-0.12.Champlain.Tile

    static name: string
    static $gtype: GObject.GType<Tile>

    // Constructors of Champlain-0.12.Champlain.Tile

    constructor(config?: Tile_ConstructProps) 
    /**
     * Creates an instance of #ChamplainTile.
     * @constructor 
     */
    constructor() 
    /**
     * Creates an instance of #ChamplainTile.
     * @constructor 
     */
    static new(): Tile

    // Overloads of new

    /**
     * Creates a new #ClutterActor.
     * 
     * A newly created actor has a floating reference, which will be sunk
     * when it is added to another actor.
     * @constructor 
     */
    static new(): Clutter.Actor
    /**
     * Creates an instance of #ChamplainTile.
     * @constructor 
     * @param x the x position
     * @param y the y position
     * @param size the size in pixels
     * @param zoom_level the zoom level
     */
    static new_full(x: number, y: number, size: number, zoom_level: number): Tile
    _init(config?: Tile_ConstructProps): void
}

interface TileCache_ConstructProps extends MapSource_ConstructProps {
}

interface TileCache {

    // Own fields of Champlain-0.12.Champlain.TileCache

    parent_instance: MapSource
    priv: TileCachePrivate

    // Owm methods of Champlain-0.12.Champlain.TileCache

    /**
     * When a cache fills a tile and the next source in the chain is a tile cache,
     * it should call this function on the next source. This way all the caches
     * preceding a tile source in the chain get informed that the tile was used and
     * can modify their metadata accordingly in the implementation of this function.
     * In addition, the call of this function should be chained so within the
     * implementation of this function it should be called on the next source
     * in the chain when next source is a tile cache.
     * @param tile a #ChamplainTile
     */
    on_tile_filled(tile: Tile): void
    /**
     * Refreshes the tile access time in the cache.
     * @param tile a #ChamplainTile
     */
    refresh_tile_time(tile: Tile): void
    /**
     * Stores the tile including the metadata into the cache.
     * @param tile a #ChamplainTile
     * @param contents the tile contents that should be stored
     * @param size size of the contents in bytes
     */
    store_tile(tile: Tile, contents: string, size: number): void

    // Own virtual methods of Champlain-0.12.Champlain.TileCache

    /**
     * When a cache fills a tile and the next source in the chain is a tile cache,
     * it should call this function on the next source. This way all the caches
     * preceding a tile source in the chain get informed that the tile was used and
     * can modify their metadata accordingly in the implementation of this function.
     * In addition, the call of this function should be chained so within the
     * implementation of this function it should be called on the next source
     * in the chain when next source is a tile cache.
     * @virtual 
     * @param tile a #ChamplainTile
     */
    vfunc_on_tile_filled(tile: Tile): void
    /**
     * Refreshes the tile access time in the cache.
     * @virtual 
     * @param tile a #ChamplainTile
     */
    vfunc_refresh_tile_time(tile: Tile): void
    /**
     * Stores the tile including the metadata into the cache.
     * @virtual 
     * @param tile a #ChamplainTile
     * @param contents the tile contents that should be stored
     * @param size size of the contents in bytes
     */
    vfunc_store_tile(tile: Tile, contents: string, size: number): void

    // Class property signals of Champlain-0.12.Champlain.TileCache

    connect(sigName: "notify::next-source", callback: (($obj: TileCache, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::next-source", callback: (($obj: TileCache, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::next-source", ...args: any[]): void
    connect(sigName: "notify::renderer", callback: (($obj: TileCache, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::renderer", callback: (($obj: TileCache, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::renderer", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * The #ChamplainTileCache structure contains only private data
 * and should be accessed using the provided API
 * @class 
 */
class TileCache extends MapSource {

    // Own properties of Champlain-0.12.Champlain.TileCache

    static name: string
    static $gtype: GObject.GType<TileCache>

    // Constructors of Champlain-0.12.Champlain.TileCache

    constructor(config?: TileCache_ConstructProps) 
    _init(config?: TileCache_ConstructProps): void
}

interface TileSource_ConstructProps extends MapSource_ConstructProps {

    // Own constructor properties of Champlain-0.12.Champlain.TileSource

    /**
     * The cache used for tile storage
     */
    cache?: TileCache | null
    /**
     * The id of the tile source
     */
    id?: string | null
    /**
     * The usage license of the tile source
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
     * The name of the tile source
     */
    name?: string | null
    /**
     * The map projection of the tile source
     */
    projection?: MapProjection | null
    /**
     * The tile size of the tile source
     */
    tile_size?: number | null
}

interface TileSource {

    // Own properties of Champlain-0.12.Champlain.TileSource

    /**
     * The cache used for tile storage
     */
    cache: TileCache
    /**
     * The id of the tile source
     */
    id: string
    /**
     * The usage license of the tile source
     */
    license: string
    /**
     * The usage license's uri for more information
     */
    license_uri: string
    /**
     * The maximum zoom level
     */
    max_zoom_level: number
    /**
     * The minimum zoom level
     */
    min_zoom_level: number
    /**
     * The name of the tile source
     */
    name: string
    /**
     * The map projection of the tile source
     */
    projection: MapProjection
    /**
     * The tile size of the tile source
     */
    tile_size: number

    // Own fields of Champlain-0.12.Champlain.TileSource

    parent_instance: MapSource
    priv: TileSourcePrivate

    // Owm methods of Champlain-0.12.Champlain.TileSource

    /**
     * Gets the cache used for storing tiles by this tile source.
     */
    get_cache(): TileCache
    /**
     * Sets the map source's cache used for storing tiles.
     * @param cache a #ChamplainTileCache
     */
    set_cache(cache: TileCache): void
    /**
     * Sets the tile source's id.
     * @param id an id
     */
    set_id(id: string): void
    /**
     * Sets the tile source's license.
     * @param license the licence
     */
    set_license(license: string): void
    /**
     * Sets the tile source's license URI.
     * @param license_uri the licence URI
     */
    set_license_uri(license_uri: string): void
    /**
     * Sets the tile source's maximum zoom level.
     * @param zoom_level the maximum zoom level
     */
    set_max_zoom_level(zoom_level: number): void
    /**
     * Sets the tile source's minimal zoom level.
     * @param zoom_level the minimal zoom level
     */
    set_min_zoom_level(zoom_level: number): void
    /**
     * Sets the tile source's name.
     * @param name a name
     */
    set_name(name: string): void
    /**
     * Sets the tile source's projection.
     * @param projection a #ChamplainMapProjection
     */
    set_projection(projection: MapProjection): void
    /**
     * Sets the tile source's tile size.
     * @param tile_size the tile size
     */
    set_tile_size(tile_size: number): void

    // Class property signals of Champlain-0.12.Champlain.TileSource

    connect(sigName: "notify::cache", callback: (($obj: TileSource, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::cache", callback: (($obj: TileSource, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::cache", ...args: any[]): void
    connect(sigName: "notify::id", callback: (($obj: TileSource, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::id", callback: (($obj: TileSource, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::id", ...args: any[]): void
    connect(sigName: "notify::license", callback: (($obj: TileSource, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::license", callback: (($obj: TileSource, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::license", ...args: any[]): void
    connect(sigName: "notify::license-uri", callback: (($obj: TileSource, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::license-uri", callback: (($obj: TileSource, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::license-uri", ...args: any[]): void
    connect(sigName: "notify::max-zoom-level", callback: (($obj: TileSource, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::max-zoom-level", callback: (($obj: TileSource, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::max-zoom-level", ...args: any[]): void
    connect(sigName: "notify::min-zoom-level", callback: (($obj: TileSource, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::min-zoom-level", callback: (($obj: TileSource, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::min-zoom-level", ...args: any[]): void
    connect(sigName: "notify::name", callback: (($obj: TileSource, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: TileSource, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::projection", callback: (($obj: TileSource, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::projection", callback: (($obj: TileSource, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::projection", ...args: any[]): void
    connect(sigName: "notify::tile-size", callback: (($obj: TileSource, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tile-size", callback: (($obj: TileSource, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tile-size", ...args: any[]): void
    connect(sigName: "notify::next-source", callback: (($obj: TileSource, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::next-source", callback: (($obj: TileSource, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::next-source", ...args: any[]): void
    connect(sigName: "notify::renderer", callback: (($obj: TileSource, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::renderer", callback: (($obj: TileSource, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::renderer", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * The #ChamplainTileSource structure contains only private data
 * and should be accessed using the provided API
 * @class 
 */
class TileSource extends MapSource {

    // Own properties of Champlain-0.12.Champlain.TileSource

    static name: string
    static $gtype: GObject.GType<TileSource>

    // Constructors of Champlain-0.12.Champlain.TileSource

    constructor(config?: TileSource_ConstructProps) 
    _init(config?: TileSource_ConstructProps): void
}

interface View_ConstructProps extends Atk.ImplementorIface_ConstructProps, Clutter.Animatable_ConstructProps, Clutter.Container_ConstructProps, Clutter.Scriptable_ConstructProps, Clutter.Actor_ConstructProps {

    // Own constructor properties of Champlain-0.12.Champlain.View

    /**
     * Animate zoom change when zooming in/out.
     */
    animate_zoom?: boolean | null
    /**
     * The pattern displayed in the background of the map.
     */
    background_pattern?: Clutter.Actor | null
    /**
     * The deceleration rate for the kinetic mode. The default value is 1.1.
     */
    deceleration?: number | null
    /**
     * The duration of an animation when going to a location.
     * A value of 0 means that the duration is calculated automatically for you.
     * 
     * Please note that animation of #champlain_view_ensure_visible also
     * involves a 'goto' animation.
     */
    goto_animation_duration?: number | null
    /**
     * The mode of animation when going to a location.
     * 
     * Please note that animation of #champlain_view_ensure_visible also
     * involves a 'goto' animation.
     */
    goto_animation_mode?: Clutter.AnimationMode | null
    /**
     * Determines whether the view should wrap horizontally.
     */
    horizontal_wrap?: boolean | null
    /**
     * Keep the current centered position when resizing the view.
     */
    keep_center_on_resize?: boolean | null
    /**
     * Determines whether the view should use kinetic mode.
     */
    kinetic_mode?: boolean | null
    /**
     * The latitude coordonate of the map
     */
    latitude?: number | null
    /**
     * The longitude coordonate of the map
     */
    longitude?: number | null
    /**
     * The #ChamplainMapSource being displayed
     */
    map_source?: MapSource | null
    /**
     * The highest allowed level of zoom of the content.
     */
    max_zoom_level?: number | null
    /**
     * The lowest allowed level of zoom of the content.
     */
    min_zoom_level?: number | null
    /**
     * Set a bounding box to limit the world to. No tiles will be loaded
     * outside of this bounding box. It will not be possible to scroll outside
     * of this bounding box.
     * 
     * Default world is the actual world.
     */
    world?: BoundingBox | null
    /**
     * The level of zoom of the content.
     */
    zoom_level?: number | null
    /**
     * Should the view zoom in and recenter when the user double click on the map.
     */
    zoom_on_double_click?: boolean | null
}

/**
 * Signal callback interface for `animation-completed`
 */
interface View_AnimationCompletedSignalCallback {
    ($obj: View): void
}

/**
 * Signal callback interface for `layer-relocated`
 */
interface View_LayerRelocatedSignalCallback {
    ($obj: View): void
}

interface View extends Atk.ImplementorIface, Clutter.Animatable, Clutter.Container, Clutter.Scriptable {

    // Own properties of Champlain-0.12.Champlain.View

    /**
     * Animate zoom change when zooming in/out.
     */
    animate_zoom: boolean
    /**
     * The pattern displayed in the background of the map.
     */
    background_pattern: Clutter.Actor
    /**
     * The deceleration rate for the kinetic mode. The default value is 1.1.
     */
    deceleration: number
    /**
     * The duration of an animation when going to a location.
     * A value of 0 means that the duration is calculated automatically for you.
     * 
     * Please note that animation of #champlain_view_ensure_visible also
     * involves a 'goto' animation.
     */
    goto_animation_duration: number
    /**
     * The mode of animation when going to a location.
     * 
     * Please note that animation of #champlain_view_ensure_visible also
     * involves a 'goto' animation.
     */
    goto_animation_mode: Clutter.AnimationMode
    /**
     * Determines whether the view should wrap horizontally.
     */
    horizontal_wrap: boolean
    /**
     * Keep the current centered position when resizing the view.
     */
    keep_center_on_resize: boolean
    /**
     * Determines whether the view should use kinetic mode.
     */
    kinetic_mode: boolean
    /**
     * The latitude coordonate of the map
     */
    latitude: number
    /**
     * The longitude coordonate of the map
     */
    longitude: number
    /**
     * The #ChamplainMapSource being displayed
     */
    map_source: MapSource
    /**
     * The highest allowed level of zoom of the content.
     */
    max_zoom_level: number
    /**
     * The lowest allowed level of zoom of the content.
     */
    min_zoom_level: number
    /**
     * The view's global state. Useful to inform using if the view is busy loading
     * tiles or not.
     */
    readonly state: State
    /**
     * Set a bounding box to limit the world to. No tiles will be loaded
     * outside of this bounding box. It will not be possible to scroll outside
     * of this bounding box.
     * 
     * Default world is the actual world.
     */
    world: BoundingBox
    /**
     * The level of zoom of the content.
     */
    zoom_level: number
    /**
     * Should the view zoom in and recenter when the user double click on the map.
     */
    zoom_on_double_click: boolean

    // Own fields of Champlain-0.12.Champlain.View

    parent: Clutter.Actor
    priv: ViewPrivate

    // Owm methods of Champlain-0.12.Champlain.View

    /**
     * Adds a new layer to the view
     * @param layer a #ChamplainLayer
     */
    add_layer(layer: Layer): void
    /**
     * Adds a new overlay map source to render tiles with the supplied opacity on top
     * of the ordinary map source. Multiple overlay sources can be added.
     * @param map_source a #ChamplainMapSource
     * @param opacity opacity to use
     */
    add_overlay_source(map_source: MapSource, opacity: number): void
    /**
     * This function inserts a custom actor to the undrelying #ClutterBinLayout
     * manager. The inserted actors appear on top of the map. See clutter_bin_layout_add()
     * for reference.
     * @param child The child to be inserted
     * @param x_align x alignment
     * @param y_align y alignment
     */
    bin_layout_add(child: Clutter.Actor, x_align: Clutter.BinAlignment, y_align: Clutter.BinAlignment): void
    /**
     * Centers the map on these coordinates.
     * @param latitude the longitude to center the map at
     * @param longitude the longitude to center the map at
     */
    center_on(latitude: number, longitude: number): void
    /**
     * Changes the map's zoom level and center to make sure that the bounding
     * boxes of all inserted layers are visible.
     * @param animate TRUE to perform animation, FALSE otherwise
     */
    ensure_layers_visible(animate: boolean): void
    /**
     * Changes the map's zoom level and center to make sure the given area
     * is visible
     * @param bbox bounding box of the area that should be visible
     * @param animate TRUE to perform animation, FALSE otherwise
     */
    ensure_visible(bbox: BoundingBox, animate: boolean): void
    /**
     * Checks whether the view animates zoom level changes.
     */
    get_animate_zoom(): boolean
    /**
     * Gets the current background texture displayed behind the map.
     */
    get_background_pattern(): Clutter.Content
    /**
     * Gets the bounding box for view `view` at current zoom-level.
     */
    get_bounding_box(): BoundingBox
    /**
     * Gets the bounding box for view `view` at `zoom_level`.
     * @param zoom_level the level of zoom, a guint between 1 and 20
     */
    get_bounding_box_for_zoom_level(zoom_level: number): BoundingBox
    /**
     * Gets the latitude of the view's center.
     */
    get_center_latitude(): number
    /**
     * Gets the longitude of the view's center.
     */
    get_center_longitude(): number
    /**
     * Gets the view's deceleration rate.
     */
    get_deceleration(): number
    /**
     * Returns the value of the #ChamplainView:horizontal-wrap property.
     */
    get_horizontal_wrap(): boolean
    /**
     * Checks whether to keep the center on resize
     */
    get_keep_center_on_resize(): boolean
    /**
     * Gets the view's scroll mode behaviour.
     */
    get_kinetic_mode(): boolean
    /**
     * Returns the #ChamplainLicense actor which is inserted by default into the
     * layout manager. It can be manipulated using standard #ClutterActor methods
     * (hidden and so on).
     */
    get_license_actor(): License
    /**
     * Gets the view's current map source.
     */
    get_map_source(): MapSource
    /**
     * Gets the view's maximum allowed zoom level.
     */
    get_max_zoom_level(): number
    /**
     * Gets the view's minimal allowed zoom level.
     */
    get_min_zoom_level(): number
    /**
     * Gets a list of overlay sources.
     */
    get_overlay_sources(): MapSource[]
    /**
     * Gets the view's state.
     */
    get_state(): State
    /**
     * Gets the x and y coordinate of the viewport anchor in respect to the layer origin.
     */
    get_viewport_anchor(): [ /* anchor_x */ number, /* anchor_y */ number ]
    /**
     * Gets the x and y coordinate of the viewport in respect to the layer origin.
     */
    get_viewport_origin(): [ /* x */ number, /* y */ number ]
    /**
     * Get the bounding box that represents the extent of the world.
     */
    get_world(): BoundingBox
    /**
     * Gets the view's current zoom level.
     */
    get_zoom_level(): number
    /**
     * Checks whether the view zooms on double click.
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
     * Converts the latitude to view's y coordinate.
     * @param latitude the latitude
     */
    latitude_to_y(latitude: number): number
    /**
     * Converts the longitude to view's x coordinate.
     * @param longitude the longitude
     */
    longitude_to_x(longitude: number): number
    /**
     * Reloads all visible tiles.
     */
    reload_tiles(): void
    /**
     * Removes the given layer from the view
     * @param layer a #ChamplainLayer
     */
    remove_layer(layer: Layer): void
    /**
     * Removes an overlay source from #ChamplainView.
     * @param map_source a #ChamplainMapSource
     */
    remove_overlay_source(map_source: MapSource): void
    /**
     * Should the view animate zoom level changes.
     * @param value a #gboolean
     */
    set_animate_zoom(value: boolean): void
    /**
     * Sets the background texture displayed behind the map. Setting the background
     * pattern affects performence slightly - use reasonably large patterns for
     * better performance.
     * @param background The background texture
     */
    set_background_pattern(background: Clutter.Content): void
    /**
     * The deceleration rate for the kinetic mode.
     * @param rate a #gdouble between 1.001 and 2.0
     */
    set_deceleration(rate: number): void
    /**
     * Sets the value of the #ChamplainView:horizontal-wrap property.
     * @param wrap %TRUE to enable horizontal wrapping
     */
    set_horizontal_wrap(wrap: boolean): void
    /**
     * Keep the current centered position when resizing the view.
     * @param value a #gboolean
     */
    set_keep_center_on_resize(value: boolean): void
    /**
     * Determines the way the view reacts to scroll events.
     * @param kinetic TRUE for kinetic mode, FALSE for push mode
     */
    set_kinetic_mode(kinetic: boolean): void
    /**
     * Changes the currently used map source. #g_object_unref() will be called on
     * the previous one.
     * 
     * As a side effect, changing the primary map source will also clear all
     * secondary map sources.
     * @param map_source a #ChamplainMapSource
     */
    set_map_source(map_source: MapSource): void
    /**
     * Changes the highest allowed level of zoom
     * @param zoom_level the level of zoom
     */
    set_max_zoom_level(zoom_level: number): void
    /**
     * Changes the lowest allowed level of zoom
     * @param zoom_level the level of zoom
     */
    set_min_zoom_level(zoom_level: number): void
    /**
     * Set a bounding box to limit the world to. No tiles will be loaded
     * outside of this bounding box. It will not be possible to scroll outside
     * of this bounding box.
     * @param bbox the #ChamplainBoundingBox of the world
     */
    set_world(bbox: BoundingBox): void
    /**
     * Changes the current level of zoom
     * @param zoom_level the level of zoom, a guint between 1 and 20
     */
    set_zoom_level(zoom_level: number): void
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
     * Will generate a #cairo_surface_t that represents the current view
     * of the map. Without any markers or layers. If the current #ChamplainRenderer
     * used does not support this, this function will return %NULL.
     * 
     * If `include_layers` is set to %TRUE all layers that implement
     * #ChamplainExportable will be included in the surface.
     * 
     * The #ChamplainView also need to be in #CHAMPLAIN_STATE_DONE state.
     * @param include_layers Set to %TRUE if you want to include layers
     */
    to_surface(include_layers: boolean): cairo.Surface
    /**
     * Converts the view's x coordinate to longitude.
     * @param x x coordinate of the view
     */
    x_to_longitude(x: number): number
    /**
     * Converts the view's y coordinate to latitude.
     * @param y y coordinate of the view
     */
    y_to_latitude(y: number): number
    /**
     * Zoom in the map by one level.
     */
    zoom_in(): void
    /**
     * Zoom out the map by one level.
     */
    zoom_out(): void

    // Own signals of Champlain-0.12.Champlain.View

    connect(sigName: "animation-completed", callback: View_AnimationCompletedSignalCallback): number
    connect_after(sigName: "animation-completed", callback: View_AnimationCompletedSignalCallback): number
    emit(sigName: "animation-completed", ...args: any[]): void
    connect(sigName: "layer-relocated", callback: View_LayerRelocatedSignalCallback): number
    connect_after(sigName: "layer-relocated", callback: View_LayerRelocatedSignalCallback): number
    emit(sigName: "layer-relocated", ...args: any[]): void

    // Class property signals of Champlain-0.12.Champlain.View

    connect(sigName: "notify::animate-zoom", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::animate-zoom", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::animate-zoom", ...args: any[]): void
    connect(sigName: "notify::background-pattern", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::background-pattern", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::background-pattern", ...args: any[]): void
    connect(sigName: "notify::deceleration", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::deceleration", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::deceleration", ...args: any[]): void
    connect(sigName: "notify::goto-animation-duration", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::goto-animation-duration", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::goto-animation-duration", ...args: any[]): void
    connect(sigName: "notify::goto-animation-mode", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::goto-animation-mode", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::goto-animation-mode", ...args: any[]): void
    connect(sigName: "notify::horizontal-wrap", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::horizontal-wrap", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::horizontal-wrap", ...args: any[]): void
    connect(sigName: "notify::keep-center-on-resize", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::keep-center-on-resize", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::keep-center-on-resize", ...args: any[]): void
    connect(sigName: "notify::kinetic-mode", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::kinetic-mode", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::kinetic-mode", ...args: any[]): void
    connect(sigName: "notify::latitude", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::latitude", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::latitude", ...args: any[]): void
    connect(sigName: "notify::longitude", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::longitude", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::longitude", ...args: any[]): void
    connect(sigName: "notify::map-source", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::map-source", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::map-source", ...args: any[]): void
    connect(sigName: "notify::max-zoom-level", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::max-zoom-level", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::max-zoom-level", ...args: any[]): void
    connect(sigName: "notify::min-zoom-level", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::min-zoom-level", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::min-zoom-level", ...args: any[]): void
    connect(sigName: "notify::state", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::state", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::state", ...args: any[]): void
    connect(sigName: "notify::world", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::world", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::world", ...args: any[]): void
    connect(sigName: "notify::zoom-level", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::zoom-level", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::zoom-level", ...args: any[]): void
    connect(sigName: "notify::zoom-on-double-click", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::zoom-on-double-click", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::zoom-on-double-click", ...args: any[]): void
    connect(sigName: "notify::actions", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::actions", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::actions", ...args: any[]): void
    connect(sigName: "notify::allocation", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::allocation", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::allocation", ...args: any[]): void
    connect(sigName: "notify::anchor-gravity", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::anchor-gravity", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::anchor-gravity", ...args: any[]): void
    connect(sigName: "notify::anchor-x", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::anchor-x", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::anchor-x", ...args: any[]): void
    connect(sigName: "notify::anchor-y", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::anchor-y", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::anchor-y", ...args: any[]): void
    connect(sigName: "notify::background-color", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::background-color", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::background-color", ...args: any[]): void
    connect(sigName: "notify::background-color-set", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::background-color-set", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::background-color-set", ...args: any[]): void
    connect(sigName: "notify::child-transform", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::child-transform", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::child-transform", ...args: any[]): void
    connect(sigName: "notify::child-transform-set", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::child-transform-set", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::child-transform-set", ...args: any[]): void
    connect(sigName: "notify::clip", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::clip", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::clip", ...args: any[]): void
    connect(sigName: "notify::clip-rect", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::clip-rect", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::clip-rect", ...args: any[]): void
    connect(sigName: "notify::clip-to-allocation", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::clip-to-allocation", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::clip-to-allocation", ...args: any[]): void
    connect(sigName: "notify::constraints", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::constraints", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::constraints", ...args: any[]): void
    connect(sigName: "notify::content", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::content", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::content", ...args: any[]): void
    connect(sigName: "notify::content-box", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::content-box", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::content-box", ...args: any[]): void
    connect(sigName: "notify::content-gravity", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::content-gravity", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::content-gravity", ...args: any[]): void
    connect(sigName: "notify::content-repeat", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::content-repeat", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::content-repeat", ...args: any[]): void
    connect(sigName: "notify::depth", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::depth", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::depth", ...args: any[]): void
    connect(sigName: "notify::effect", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::effect", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::effect", ...args: any[]): void
    connect(sigName: "notify::first-child", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::first-child", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::first-child", ...args: any[]): void
    connect(sigName: "notify::fixed-position-set", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fixed-position-set", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::fixed-position-set", ...args: any[]): void
    connect(sigName: "notify::fixed-x", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fixed-x", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::fixed-x", ...args: any[]): void
    connect(sigName: "notify::fixed-y", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fixed-y", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::fixed-y", ...args: any[]): void
    connect(sigName: "notify::has-clip", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-clip", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-clip", ...args: any[]): void
    connect(sigName: "notify::has-pointer", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-pointer", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-pointer", ...args: any[]): void
    connect(sigName: "notify::height", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::height", ...args: any[]): void
    connect(sigName: "notify::last-child", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::last-child", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::last-child", ...args: any[]): void
    connect(sigName: "notify::layout-manager", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::layout-manager", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::layout-manager", ...args: any[]): void
    connect(sigName: "notify::magnification-filter", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::magnification-filter", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::magnification-filter", ...args: any[]): void
    connect(sigName: "notify::mapped", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::mapped", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::mapped", ...args: any[]): void
    connect(sigName: "notify::margin-bottom", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-bottom", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-bottom", ...args: any[]): void
    connect(sigName: "notify::margin-left", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-left", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-left", ...args: any[]): void
    connect(sigName: "notify::margin-right", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-right", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-right", ...args: any[]): void
    connect(sigName: "notify::margin-top", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-top", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-top", ...args: any[]): void
    connect(sigName: "notify::min-height", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::min-height", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::min-height", ...args: any[]): void
    connect(sigName: "notify::min-height-set", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::min-height-set", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::min-height-set", ...args: any[]): void
    connect(sigName: "notify::min-width", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::min-width", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::min-width", ...args: any[]): void
    connect(sigName: "notify::min-width-set", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::min-width-set", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::min-width-set", ...args: any[]): void
    connect(sigName: "notify::minification-filter", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::minification-filter", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::minification-filter", ...args: any[]): void
    connect(sigName: "notify::name", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::natural-height", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::natural-height", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::natural-height", ...args: any[]): void
    connect(sigName: "notify::natural-height-set", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::natural-height-set", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::natural-height-set", ...args: any[]): void
    connect(sigName: "notify::natural-width", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::natural-width", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::natural-width", ...args: any[]): void
    connect(sigName: "notify::natural-width-set", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::natural-width-set", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::natural-width-set", ...args: any[]): void
    connect(sigName: "notify::offscreen-redirect", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::offscreen-redirect", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::offscreen-redirect", ...args: any[]): void
    connect(sigName: "notify::opacity", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opacity", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::opacity", ...args: any[]): void
    connect(sigName: "notify::pivot-point", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::pivot-point", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::pivot-point", ...args: any[]): void
    connect(sigName: "notify::pivot-point-z", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::pivot-point-z", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::pivot-point-z", ...args: any[]): void
    connect(sigName: "notify::position", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::position", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::position", ...args: any[]): void
    connect(sigName: "notify::reactive", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::reactive", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::reactive", ...args: any[]): void
    connect(sigName: "notify::realized", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::realized", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::realized", ...args: any[]): void
    connect(sigName: "notify::request-mode", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::request-mode", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::request-mode", ...args: any[]): void
    connect(sigName: "notify::rotation-angle-x", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::rotation-angle-x", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::rotation-angle-x", ...args: any[]): void
    connect(sigName: "notify::rotation-angle-y", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::rotation-angle-y", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::rotation-angle-y", ...args: any[]): void
    connect(sigName: "notify::rotation-angle-z", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::rotation-angle-z", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::rotation-angle-z", ...args: any[]): void
    connect(sigName: "notify::rotation-center-x", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::rotation-center-x", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::rotation-center-x", ...args: any[]): void
    connect(sigName: "notify::rotation-center-y", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::rotation-center-y", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::rotation-center-y", ...args: any[]): void
    connect(sigName: "notify::rotation-center-z", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::rotation-center-z", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::rotation-center-z", ...args: any[]): void
    connect(sigName: "notify::rotation-center-z-gravity", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::rotation-center-z-gravity", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::rotation-center-z-gravity", ...args: any[]): void
    connect(sigName: "notify::scale-center-x", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-center-x", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::scale-center-x", ...args: any[]): void
    connect(sigName: "notify::scale-center-y", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-center-y", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::scale-center-y", ...args: any[]): void
    connect(sigName: "notify::scale-gravity", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-gravity", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::scale-gravity", ...args: any[]): void
    connect(sigName: "notify::scale-x", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-x", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::scale-x", ...args: any[]): void
    connect(sigName: "notify::scale-y", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-y", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::scale-y", ...args: any[]): void
    connect(sigName: "notify::scale-z", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-z", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::scale-z", ...args: any[]): void
    connect(sigName: "notify::show-on-set-parent", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::show-on-set-parent", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::show-on-set-parent", ...args: any[]): void
    connect(sigName: "notify::size", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::size", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::size", ...args: any[]): void
    connect(sigName: "notify::text-direction", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::text-direction", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::text-direction", ...args: any[]): void
    connect(sigName: "notify::transform", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::transform", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::transform", ...args: any[]): void
    connect(sigName: "notify::transform-set", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::transform-set", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::transform-set", ...args: any[]): void
    connect(sigName: "notify::translation-x", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::translation-x", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::translation-x", ...args: any[]): void
    connect(sigName: "notify::translation-y", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::translation-y", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::translation-y", ...args: any[]): void
    connect(sigName: "notify::translation-z", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::translation-z", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::translation-z", ...args: any[]): void
    connect(sigName: "notify::visible", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visible", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::visible", ...args: any[]): void
    connect(sigName: "notify::width", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::width", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::width", ...args: any[]): void
    connect(sigName: "notify::x", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::x", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::x", ...args: any[]): void
    connect(sigName: "notify::x-align", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::x-align", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::x-align", ...args: any[]): void
    connect(sigName: "notify::x-expand", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::x-expand", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::x-expand", ...args: any[]): void
    connect(sigName: "notify::y", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::y", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::y", ...args: any[]): void
    connect(sigName: "notify::y-align", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::y-align", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::y-align", ...args: any[]): void
    connect(sigName: "notify::y-expand", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::y-expand", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::y-expand", ...args: any[]): void
    connect(sigName: "notify::z-position", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::z-position", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::z-position", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * The #ChamplainView structure contains only private data
 * and should be accessed using the provided API
 * @class 
 */
class View extends Clutter.Actor {

    // Own properties of Champlain-0.12.Champlain.View

    static name: string
    static $gtype: GObject.GType<View>

    // Constructors of Champlain-0.12.Champlain.View

    constructor(config?: View_ConstructProps) 
    /**
     * Creates an instance of #ChamplainView.
     * @constructor 
     */
    constructor() 
    /**
     * Creates an instance of #ChamplainView.
     * @constructor 
     */
    static new(): View
    _init(config?: View_ConstructProps): void
}

interface Viewport_ConstructProps extends Atk.ImplementorIface_ConstructProps, Clutter.Animatable_ConstructProps, Clutter.Container_ConstructProps, Clutter.Scriptable_ConstructProps, Clutter.Actor_ConstructProps {

    // Own constructor properties of Champlain-0.12.Champlain.Viewport

    hadjustment?: Adjustment | null
    vadjustment?: Adjustment | null
    x_origin?: number | null
    y_origin?: number | null
}

/**
 * Signal callback interface for `relocated`
 */
interface Viewport_RelocatedSignalCallback {
    ($obj: Viewport): void
}

interface Viewport extends Atk.ImplementorIface, Clutter.Animatable, Clutter.Container, Clutter.Scriptable {

    // Own properties of Champlain-0.12.Champlain.Viewport

    hadjustment: Adjustment
    vadjustment: Adjustment
    x_origin: number
    y_origin: number

    // Own fields of Champlain-0.12.Champlain.Viewport

    parent: Clutter.Actor
    priv: ViewportPrivate

    // Owm methods of Champlain-0.12.Champlain.Viewport

    get_adjustments(hadjustment: Adjustment, vadjustment: Adjustment): void
    get_anchor(x: number, y: number): void
    get_origin(x: number, y: number): void
    set_actor_position(actor: Clutter.Actor, x: number, y: number): void
    set_adjustments(hadjustment: Adjustment, vadjustment: Adjustment): void
    set_child(child: Clutter.Actor): void
    set_origin(x: number, y: number): void
    stop(): void

    // Own signals of Champlain-0.12.Champlain.Viewport

    connect(sigName: "relocated", callback: Viewport_RelocatedSignalCallback): number
    connect_after(sigName: "relocated", callback: Viewport_RelocatedSignalCallback): number
    emit(sigName: "relocated", ...args: any[]): void

    // Class property signals of Champlain-0.12.Champlain.Viewport

    connect(sigName: "notify::hadjustment", callback: (($obj: Viewport, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hadjustment", callback: (($obj: Viewport, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hadjustment", ...args: any[]): void
    connect(sigName: "notify::vadjustment", callback: (($obj: Viewport, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vadjustment", callback: (($obj: Viewport, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vadjustment", ...args: any[]): void
    connect(sigName: "notify::x-origin", callback: (($obj: Viewport, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::x-origin", callback: (($obj: Viewport, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::x-origin", ...args: any[]): void
    connect(sigName: "notify::y-origin", callback: (($obj: Viewport, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::y-origin", callback: (($obj: Viewport, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::y-origin", ...args: any[]): void
    connect(sigName: "notify::actions", callback: (($obj: Viewport, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::actions", callback: (($obj: Viewport, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::actions", ...args: any[]): void
    connect(sigName: "notify::allocation", callback: (($obj: Viewport, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::allocation", callback: (($obj: Viewport, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::allocation", ...args: any[]): void
    connect(sigName: "notify::anchor-gravity", callback: (($obj: Viewport, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::anchor-gravity", callback: (($obj: Viewport, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::anchor-gravity", ...args: any[]): void
    connect(sigName: "notify::anchor-x", callback: (($obj: Viewport, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::anchor-x", callback: (($obj: Viewport, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::anchor-x", ...args: any[]): void
    connect(sigName: "notify::anchor-y", callback: (($obj: Viewport, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::anchor-y", callback: (($obj: Viewport, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::anchor-y", ...args: any[]): void
    connect(sigName: "notify::background-color", callback: (($obj: Viewport, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::background-color", callback: (($obj: Viewport, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::background-color", ...args: any[]): void
    connect(sigName: "notify::background-color-set", callback: (($obj: Viewport, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::background-color-set", callback: (($obj: Viewport, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::background-color-set", ...args: any[]): void
    connect(sigName: "notify::child-transform", callback: (($obj: Viewport, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::child-transform", callback: (($obj: Viewport, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::child-transform", ...args: any[]): void
    connect(sigName: "notify::child-transform-set", callback: (($obj: Viewport, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::child-transform-set", callback: (($obj: Viewport, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::child-transform-set", ...args: any[]): void
    connect(sigName: "notify::clip", callback: (($obj: Viewport, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::clip", callback: (($obj: Viewport, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::clip", ...args: any[]): void
    connect(sigName: "notify::clip-rect", callback: (($obj: Viewport, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::clip-rect", callback: (($obj: Viewport, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::clip-rect", ...args: any[]): void
    connect(sigName: "notify::clip-to-allocation", callback: (($obj: Viewport, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::clip-to-allocation", callback: (($obj: Viewport, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::clip-to-allocation", ...args: any[]): void
    connect(sigName: "notify::constraints", callback: (($obj: Viewport, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::constraints", callback: (($obj: Viewport, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::constraints", ...args: any[]): void
    connect(sigName: "notify::content", callback: (($obj: Viewport, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::content", callback: (($obj: Viewport, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::content", ...args: any[]): void
    connect(sigName: "notify::content-box", callback: (($obj: Viewport, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::content-box", callback: (($obj: Viewport, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::content-box", ...args: any[]): void
    connect(sigName: "notify::content-gravity", callback: (($obj: Viewport, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::content-gravity", callback: (($obj: Viewport, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::content-gravity", ...args: any[]): void
    connect(sigName: "notify::content-repeat", callback: (($obj: Viewport, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::content-repeat", callback: (($obj: Viewport, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::content-repeat", ...args: any[]): void
    connect(sigName: "notify::depth", callback: (($obj: Viewport, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::depth", callback: (($obj: Viewport, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::depth", ...args: any[]): void
    connect(sigName: "notify::effect", callback: (($obj: Viewport, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::effect", callback: (($obj: Viewport, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::effect", ...args: any[]): void
    connect(sigName: "notify::first-child", callback: (($obj: Viewport, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::first-child", callback: (($obj: Viewport, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::first-child", ...args: any[]): void
    connect(sigName: "notify::fixed-position-set", callback: (($obj: Viewport, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fixed-position-set", callback: (($obj: Viewport, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::fixed-position-set", ...args: any[]): void
    connect(sigName: "notify::fixed-x", callback: (($obj: Viewport, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fixed-x", callback: (($obj: Viewport, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::fixed-x", ...args: any[]): void
    connect(sigName: "notify::fixed-y", callback: (($obj: Viewport, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fixed-y", callback: (($obj: Viewport, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::fixed-y", ...args: any[]): void
    connect(sigName: "notify::has-clip", callback: (($obj: Viewport, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-clip", callback: (($obj: Viewport, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-clip", ...args: any[]): void
    connect(sigName: "notify::has-pointer", callback: (($obj: Viewport, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-pointer", callback: (($obj: Viewport, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-pointer", ...args: any[]): void
    connect(sigName: "notify::height", callback: (($obj: Viewport, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height", callback: (($obj: Viewport, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::height", ...args: any[]): void
    connect(sigName: "notify::last-child", callback: (($obj: Viewport, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::last-child", callback: (($obj: Viewport, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::last-child", ...args: any[]): void
    connect(sigName: "notify::layout-manager", callback: (($obj: Viewport, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::layout-manager", callback: (($obj: Viewport, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::layout-manager", ...args: any[]): void
    connect(sigName: "notify::magnification-filter", callback: (($obj: Viewport, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::magnification-filter", callback: (($obj: Viewport, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::magnification-filter", ...args: any[]): void
    connect(sigName: "notify::mapped", callback: (($obj: Viewport, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::mapped", callback: (($obj: Viewport, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::mapped", ...args: any[]): void
    connect(sigName: "notify::margin-bottom", callback: (($obj: Viewport, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-bottom", callback: (($obj: Viewport, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-bottom", ...args: any[]): void
    connect(sigName: "notify::margin-left", callback: (($obj: Viewport, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-left", callback: (($obj: Viewport, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-left", ...args: any[]): void
    connect(sigName: "notify::margin-right", callback: (($obj: Viewport, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-right", callback: (($obj: Viewport, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-right", ...args: any[]): void
    connect(sigName: "notify::margin-top", callback: (($obj: Viewport, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-top", callback: (($obj: Viewport, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-top", ...args: any[]): void
    connect(sigName: "notify::min-height", callback: (($obj: Viewport, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::min-height", callback: (($obj: Viewport, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::min-height", ...args: any[]): void
    connect(sigName: "notify::min-height-set", callback: (($obj: Viewport, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::min-height-set", callback: (($obj: Viewport, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::min-height-set", ...args: any[]): void
    connect(sigName: "notify::min-width", callback: (($obj: Viewport, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::min-width", callback: (($obj: Viewport, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::min-width", ...args: any[]): void
    connect(sigName: "notify::min-width-set", callback: (($obj: Viewport, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::min-width-set", callback: (($obj: Viewport, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::min-width-set", ...args: any[]): void
    connect(sigName: "notify::minification-filter", callback: (($obj: Viewport, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::minification-filter", callback: (($obj: Viewport, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::minification-filter", ...args: any[]): void
    connect(sigName: "notify::name", callback: (($obj: Viewport, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: Viewport, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::natural-height", callback: (($obj: Viewport, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::natural-height", callback: (($obj: Viewport, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::natural-height", ...args: any[]): void
    connect(sigName: "notify::natural-height-set", callback: (($obj: Viewport, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::natural-height-set", callback: (($obj: Viewport, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::natural-height-set", ...args: any[]): void
    connect(sigName: "notify::natural-width", callback: (($obj: Viewport, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::natural-width", callback: (($obj: Viewport, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::natural-width", ...args: any[]): void
    connect(sigName: "notify::natural-width-set", callback: (($obj: Viewport, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::natural-width-set", callback: (($obj: Viewport, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::natural-width-set", ...args: any[]): void
    connect(sigName: "notify::offscreen-redirect", callback: (($obj: Viewport, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::offscreen-redirect", callback: (($obj: Viewport, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::offscreen-redirect", ...args: any[]): void
    connect(sigName: "notify::opacity", callback: (($obj: Viewport, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opacity", callback: (($obj: Viewport, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::opacity", ...args: any[]): void
    connect(sigName: "notify::pivot-point", callback: (($obj: Viewport, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::pivot-point", callback: (($obj: Viewport, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::pivot-point", ...args: any[]): void
    connect(sigName: "notify::pivot-point-z", callback: (($obj: Viewport, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::pivot-point-z", callback: (($obj: Viewport, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::pivot-point-z", ...args: any[]): void
    connect(sigName: "notify::position", callback: (($obj: Viewport, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::position", callback: (($obj: Viewport, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::position", ...args: any[]): void
    connect(sigName: "notify::reactive", callback: (($obj: Viewport, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::reactive", callback: (($obj: Viewport, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::reactive", ...args: any[]): void
    connect(sigName: "notify::realized", callback: (($obj: Viewport, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::realized", callback: (($obj: Viewport, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::realized", ...args: any[]): void
    connect(sigName: "notify::request-mode", callback: (($obj: Viewport, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::request-mode", callback: (($obj: Viewport, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::request-mode", ...args: any[]): void
    connect(sigName: "notify::rotation-angle-x", callback: (($obj: Viewport, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::rotation-angle-x", callback: (($obj: Viewport, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::rotation-angle-x", ...args: any[]): void
    connect(sigName: "notify::rotation-angle-y", callback: (($obj: Viewport, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::rotation-angle-y", callback: (($obj: Viewport, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::rotation-angle-y", ...args: any[]): void
    connect(sigName: "notify::rotation-angle-z", callback: (($obj: Viewport, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::rotation-angle-z", callback: (($obj: Viewport, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::rotation-angle-z", ...args: any[]): void
    connect(sigName: "notify::rotation-center-x", callback: (($obj: Viewport, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::rotation-center-x", callback: (($obj: Viewport, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::rotation-center-x", ...args: any[]): void
    connect(sigName: "notify::rotation-center-y", callback: (($obj: Viewport, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::rotation-center-y", callback: (($obj: Viewport, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::rotation-center-y", ...args: any[]): void
    connect(sigName: "notify::rotation-center-z", callback: (($obj: Viewport, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::rotation-center-z", callback: (($obj: Viewport, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::rotation-center-z", ...args: any[]): void
    connect(sigName: "notify::rotation-center-z-gravity", callback: (($obj: Viewport, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::rotation-center-z-gravity", callback: (($obj: Viewport, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::rotation-center-z-gravity", ...args: any[]): void
    connect(sigName: "notify::scale-center-x", callback: (($obj: Viewport, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-center-x", callback: (($obj: Viewport, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::scale-center-x", ...args: any[]): void
    connect(sigName: "notify::scale-center-y", callback: (($obj: Viewport, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-center-y", callback: (($obj: Viewport, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::scale-center-y", ...args: any[]): void
    connect(sigName: "notify::scale-gravity", callback: (($obj: Viewport, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-gravity", callback: (($obj: Viewport, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::scale-gravity", ...args: any[]): void
    connect(sigName: "notify::scale-x", callback: (($obj: Viewport, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-x", callback: (($obj: Viewport, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::scale-x", ...args: any[]): void
    connect(sigName: "notify::scale-y", callback: (($obj: Viewport, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-y", callback: (($obj: Viewport, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::scale-y", ...args: any[]): void
    connect(sigName: "notify::scale-z", callback: (($obj: Viewport, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-z", callback: (($obj: Viewport, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::scale-z", ...args: any[]): void
    connect(sigName: "notify::show-on-set-parent", callback: (($obj: Viewport, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::show-on-set-parent", callback: (($obj: Viewport, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::show-on-set-parent", ...args: any[]): void
    connect(sigName: "notify::size", callback: (($obj: Viewport, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::size", callback: (($obj: Viewport, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::size", ...args: any[]): void
    connect(sigName: "notify::text-direction", callback: (($obj: Viewport, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::text-direction", callback: (($obj: Viewport, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::text-direction", ...args: any[]): void
    connect(sigName: "notify::transform", callback: (($obj: Viewport, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::transform", callback: (($obj: Viewport, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::transform", ...args: any[]): void
    connect(sigName: "notify::transform-set", callback: (($obj: Viewport, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::transform-set", callback: (($obj: Viewport, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::transform-set", ...args: any[]): void
    connect(sigName: "notify::translation-x", callback: (($obj: Viewport, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::translation-x", callback: (($obj: Viewport, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::translation-x", ...args: any[]): void
    connect(sigName: "notify::translation-y", callback: (($obj: Viewport, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::translation-y", callback: (($obj: Viewport, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::translation-y", ...args: any[]): void
    connect(sigName: "notify::translation-z", callback: (($obj: Viewport, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::translation-z", callback: (($obj: Viewport, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::translation-z", ...args: any[]): void
    connect(sigName: "notify::visible", callback: (($obj: Viewport, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visible", callback: (($obj: Viewport, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::visible", ...args: any[]): void
    connect(sigName: "notify::width", callback: (($obj: Viewport, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::width", callback: (($obj: Viewport, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::width", ...args: any[]): void
    connect(sigName: "notify::x", callback: (($obj: Viewport, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::x", callback: (($obj: Viewport, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::x", ...args: any[]): void
    connect(sigName: "notify::x-align", callback: (($obj: Viewport, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::x-align", callback: (($obj: Viewport, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::x-align", ...args: any[]): void
    connect(sigName: "notify::x-expand", callback: (($obj: Viewport, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::x-expand", callback: (($obj: Viewport, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::x-expand", ...args: any[]): void
    connect(sigName: "notify::y", callback: (($obj: Viewport, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::y", callback: (($obj: Viewport, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::y", ...args: any[]): void
    connect(sigName: "notify::y-align", callback: (($obj: Viewport, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::y-align", callback: (($obj: Viewport, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::y-align", ...args: any[]): void
    connect(sigName: "notify::y-expand", callback: (($obj: Viewport, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::y-expand", callback: (($obj: Viewport, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::y-expand", ...args: any[]): void
    connect(sigName: "notify::z-position", callback: (($obj: Viewport, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::z-position", callback: (($obj: Viewport, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::z-position", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class Viewport extends Clutter.Actor {

    // Own properties of Champlain-0.12.Champlain.Viewport

    static name: string
    static $gtype: GObject.GType<Viewport>

    // Constructors of Champlain-0.12.Champlain.Viewport

    constructor(config?: Viewport_ConstructProps) 
    constructor() 
    static new(): Viewport
    _init(config?: Viewport_ConstructProps): void
}

interface AdjustmentClass {

    // Own fields of Champlain-0.12.Champlain.AdjustmentClass

    changed: (adjustment: Adjustment) => void
}

/**
 * Base class for #ChamplainAdjustment.
 * @record 
 */
abstract class AdjustmentClass {

    // Own properties of Champlain-0.12.Champlain.AdjustmentClass

    static name: string
}

interface AdjustmentPrivate {
}

class AdjustmentPrivate {

    // Own properties of Champlain-0.12.Champlain.AdjustmentPrivate

    static name: string
}

interface BoundingBox {

    // Own fields of Champlain-0.12.Champlain.BoundingBox

    /**
     * left coordinate
     * @field 
     */
    left: number
    /**
     * top coordinate
     * @field 
     */
    top: number
    /**
     * right coordinate
     * @field 
     */
    right: number
    /**
     * bottom coordinate
     * @field 
     */
    bottom: number

    // Owm methods of Champlain-0.12.Champlain.BoundingBox

    /**
     * Sets bbox equal to the bounding box containing both `bbox` and `other`.
     * @param other a #ChamplainBoundingBox
     */
    compose(other: BoundingBox): void
    /**
     * Makes a copy of the bounding box structure. The result must be
     * freed using champlain_bounding_box_free().
     */
    copy(): BoundingBox
    /**
     * Checks whether `bbox` covers the given coordinates.
     * @param latitude the latitude of the point
     * @param longitude the longitude of the point
     */
    covers(latitude: number, longitude: number): boolean
    /**
     * Extend the bounding box so it contains a point with `latitude` and `longitude`.
     * Do nothing if the point is already inside the bounding box.
     * @param latitude the latitude of the point
     * @param longitude the longitude of the point
     */
    extend(latitude: number, longitude: number): void
    /**
     * Frees a bounding box structure created with champlain_bounding_box_new() or
     * champlain_bounding_box_copy().
     */
    free(): void
    /**
     * Gets the center's latitude and longitude of the box to `latitude` and `longitude`.
     */
    get_center(): [ /* latitude */ number, /* longitude */ number ]
    /**
     * Checks whether `bbox` represents a valid bounding box on the map.
     */
    is_valid(): boolean
}

/**
 * Defines the area of a ChamplainMapDataSource that contains data.
 * @record 
 */
class BoundingBox {

    // Own properties of Champlain-0.12.Champlain.BoundingBox

    static name: string

    // Constructors of Champlain-0.12.Champlain.BoundingBox

    /**
     * Creates a newly allocated #ChamplainBoundingBox to be freed
     * with champlain_bounding_box_free().
     * @constructor 
     */
    constructor() 
    /**
     * Creates a newly allocated #ChamplainBoundingBox to be freed
     * with champlain_bounding_box_free().
     * @constructor 
     */
    static new(): BoundingBox
}

interface CoordinateClass {

    // Own fields of Champlain-0.12.Champlain.CoordinateClass

    parent_class: GObject.InitiallyUnownedClass
}

abstract class CoordinateClass {

    // Own properties of Champlain-0.12.Champlain.CoordinateClass

    static name: string
}

interface CoordinatePrivate {
}

class CoordinatePrivate {

    // Own properties of Champlain-0.12.Champlain.CoordinatePrivate

    static name: string
}

interface CustomMarkerClass {

    // Own fields of Champlain-0.12.Champlain.CustomMarkerClass

    parent_class: MarkerClass
}

abstract class CustomMarkerClass {

    // Own properties of Champlain-0.12.Champlain.CustomMarkerClass

    static name: string
}

interface CustomMarkerPrivate {
}

class CustomMarkerPrivate {

    // Own properties of Champlain-0.12.Champlain.CustomMarkerPrivate

    static name: string
}

interface ErrorTileRendererClass {

    // Own fields of Champlain-0.12.Champlain.ErrorTileRendererClass

    parent_class: RendererClass
}

abstract class ErrorTileRendererClass {

    // Own properties of Champlain-0.12.Champlain.ErrorTileRendererClass

    static name: string
}

interface ErrorTileRendererPrivate {
}

class ErrorTileRendererPrivate {

    // Own properties of Champlain-0.12.Champlain.ErrorTileRendererPrivate

    static name: string
}

interface ExportableIface {

    // Own fields of Champlain-0.12.Champlain.ExportableIface

    get_surface: (exportable: Exportable) => cairo.Surface
    set_surface: (exportable: Exportable, surface: cairo.Surface) => void
}

/**
 * An interface common to objects having a #cairo_surface_t representation.
 * @record 
 */
abstract class ExportableIface {

    // Own properties of Champlain-0.12.Champlain.ExportableIface

    static name: string
}

interface FileCacheClass {

    // Own fields of Champlain-0.12.Champlain.FileCacheClass

    parent_class: TileCacheClass
}

abstract class FileCacheClass {

    // Own properties of Champlain-0.12.Champlain.FileCacheClass

    static name: string
}

interface FileCachePrivate {
}

class FileCachePrivate {

    // Own properties of Champlain-0.12.Champlain.FileCachePrivate

    static name: string
}

interface FileTileSourceClass {

    // Own fields of Champlain-0.12.Champlain.FileTileSourceClass

    parent_class: TileSourceClass
}

abstract class FileTileSourceClass {

    // Own properties of Champlain-0.12.Champlain.FileTileSourceClass

    static name: string
}

interface FileTileSourcePrivate {
}

class FileTileSourcePrivate {

    // Own properties of Champlain-0.12.Champlain.FileTileSourcePrivate

    static name: string
}

interface ImageRendererClass {

    // Own fields of Champlain-0.12.Champlain.ImageRendererClass

    parent_class: RendererClass
}

abstract class ImageRendererClass {

    // Own properties of Champlain-0.12.Champlain.ImageRendererClass

    static name: string
}

interface ImageRendererPrivate {
}

class ImageRendererPrivate {

    // Own properties of Champlain-0.12.Champlain.ImageRendererPrivate

    static name: string
}

interface KineticScrollViewClass {

    // Own fields of Champlain-0.12.Champlain.KineticScrollViewClass

    parent_class: Clutter.ActorClass
}

abstract class KineticScrollViewClass {

    // Own properties of Champlain-0.12.Champlain.KineticScrollViewClass

    static name: string
}

interface KineticScrollViewPrivate {
}

class KineticScrollViewPrivate {

    // Own properties of Champlain-0.12.Champlain.KineticScrollViewPrivate

    static name: string
}

interface LabelClass {

    // Own fields of Champlain-0.12.Champlain.LabelClass

    parent_class: MarkerClass
}

abstract class LabelClass {

    // Own properties of Champlain-0.12.Champlain.LabelClass

    static name: string
}

interface LabelPrivate {
}

class LabelPrivate {

    // Own properties of Champlain-0.12.Champlain.LabelPrivate

    static name: string
}

interface LayerClass {

    // Own fields of Champlain-0.12.Champlain.LayerClass

    parent_class: Clutter.ActorClass
    set_view: (layer: Layer, view: View | null) => void
    get_bounding_box: (layer: Layer) => BoundingBox
}

abstract class LayerClass {

    // Own properties of Champlain-0.12.Champlain.LayerClass

    static name: string
}

interface LicenseClass {

    // Own fields of Champlain-0.12.Champlain.LicenseClass

    parent_class: Clutter.ActorClass
}

abstract class LicenseClass {

    // Own properties of Champlain-0.12.Champlain.LicenseClass

    static name: string
}

interface LicensePrivate {
}

class LicensePrivate {

    // Own properties of Champlain-0.12.Champlain.LicensePrivate

    static name: string
}

interface LocationIface {

    // Own fields of Champlain-0.12.Champlain.LocationIface

    get_latitude: (location: Location) => number
    get_longitude: (location: Location) => number
    set_location: (location: Location, latitude: number, longitude: number) => void
}

/**
 * An interface common to objects having latitude and longitude.
 * @record 
 */
abstract class LocationIface {

    // Own properties of Champlain-0.12.Champlain.LocationIface

    static name: string
}

interface MapSourceChainClass {

    // Own fields of Champlain-0.12.Champlain.MapSourceChainClass

    parent_class: MapSourceClass
}

abstract class MapSourceChainClass {

    // Own properties of Champlain-0.12.Champlain.MapSourceChainClass

    static name: string
}

interface MapSourceChainPrivate {
}

class MapSourceChainPrivate {

    // Own properties of Champlain-0.12.Champlain.MapSourceChainPrivate

    static name: string
}

interface MapSourceClass {

    // Own fields of Champlain-0.12.Champlain.MapSourceClass

    parent_class: GObject.InitiallyUnownedClass
    get_id: (map_source: MapSource) => string
    get_name: (map_source: MapSource) => string
    get_license: (map_source: MapSource) => string
    get_license_uri: (map_source: MapSource) => string
    get_min_zoom_level: (map_source: MapSource) => number
    get_max_zoom_level: (map_source: MapSource) => number
    get_tile_size: (map_source: MapSource) => number
    get_projection: (map_source: MapSource) => MapProjection
    fill_tile: (map_source: MapSource, tile: Tile) => void
}

abstract class MapSourceClass {

    // Own properties of Champlain-0.12.Champlain.MapSourceClass

    static name: string
}

interface MapSourceDescClass {

    // Own fields of Champlain-0.12.Champlain.MapSourceDescClass

    parent_class: GObject.ObjectClass
}

abstract class MapSourceDescClass {

    // Own properties of Champlain-0.12.Champlain.MapSourceDescClass

    static name: string
}

interface MapSourceDescPrivate {
}

class MapSourceDescPrivate {

    // Own properties of Champlain-0.12.Champlain.MapSourceDescPrivate

    static name: string
}

interface MapSourceFactoryClass {

    // Own fields of Champlain-0.12.Champlain.MapSourceFactoryClass

    parent_class: GObject.ObjectClass
}

abstract class MapSourceFactoryClass {

    // Own properties of Champlain-0.12.Champlain.MapSourceFactoryClass

    static name: string
}

interface MapSourceFactoryPrivate {
}

class MapSourceFactoryPrivate {

    // Own properties of Champlain-0.12.Champlain.MapSourceFactoryPrivate

    static name: string
}

interface MapSourcePrivate {
}

class MapSourcePrivate {

    // Own properties of Champlain-0.12.Champlain.MapSourcePrivate

    static name: string
}

interface MarkerClass {

    // Own fields of Champlain-0.12.Champlain.MarkerClass

    parent_class: Clutter.ActorClass
}

abstract class MarkerClass {

    // Own properties of Champlain-0.12.Champlain.MarkerClass

    static name: string
}

interface MarkerLayerClass {

    // Own fields of Champlain-0.12.Champlain.MarkerLayerClass

    parent_class: LayerClass
}

abstract class MarkerLayerClass {

    // Own properties of Champlain-0.12.Champlain.MarkerLayerClass

    static name: string
}

interface MarkerLayerPrivate {
}

class MarkerLayerPrivate {

    // Own properties of Champlain-0.12.Champlain.MarkerLayerPrivate

    static name: string
}

interface MarkerPrivate {
}

class MarkerPrivate {

    // Own properties of Champlain-0.12.Champlain.MarkerPrivate

    static name: string
}

interface MemoryCacheClass {

    // Own fields of Champlain-0.12.Champlain.MemoryCacheClass

    parent_class: TileCacheClass
}

abstract class MemoryCacheClass {

    // Own properties of Champlain-0.12.Champlain.MemoryCacheClass

    static name: string
}

interface MemoryCachePrivate {
}

class MemoryCachePrivate {

    // Own properties of Champlain-0.12.Champlain.MemoryCachePrivate

    static name: string
}

interface NetworkBboxTileSourceClass {

    // Own fields of Champlain-0.12.Champlain.NetworkBboxTileSourceClass

    parent_class: TileSourceClass
}

abstract class NetworkBboxTileSourceClass {

    // Own properties of Champlain-0.12.Champlain.NetworkBboxTileSourceClass

    static name: string
}

interface NetworkBboxTileSourcePrivate {
}

class NetworkBboxTileSourcePrivate {

    // Own properties of Champlain-0.12.Champlain.NetworkBboxTileSourcePrivate

    static name: string
}

interface NetworkTileSourceClass {

    // Own fields of Champlain-0.12.Champlain.NetworkTileSourceClass

    parent_class: TileSourceClass
}

abstract class NetworkTileSourceClass {

    // Own properties of Champlain-0.12.Champlain.NetworkTileSourceClass

    static name: string
}

interface NetworkTileSourcePrivate {
}

class NetworkTileSourcePrivate {

    // Own properties of Champlain-0.12.Champlain.NetworkTileSourcePrivate

    static name: string
}

interface NullTileSourceClass {

    // Own fields of Champlain-0.12.Champlain.NullTileSourceClass

    parent_class: TileSourceClass
}

abstract class NullTileSourceClass {

    // Own properties of Champlain-0.12.Champlain.NullTileSourceClass

    static name: string
}

interface NullTileSourcePrivate {
}

class NullTileSourcePrivate {

    // Own properties of Champlain-0.12.Champlain.NullTileSourcePrivate

    static name: string
}

interface PathLayerClass {

    // Own fields of Champlain-0.12.Champlain.PathLayerClass

    parent_class: LayerClass
}

abstract class PathLayerClass {

    // Own properties of Champlain-0.12.Champlain.PathLayerClass

    static name: string
}

interface PathLayerPrivate {
}

class PathLayerPrivate {

    // Own properties of Champlain-0.12.Champlain.PathLayerPrivate

    static name: string
}

interface PointClass {

    // Own fields of Champlain-0.12.Champlain.PointClass

    parent_class: MarkerClass
}

abstract class PointClass {

    // Own properties of Champlain-0.12.Champlain.PointClass

    static name: string
}

interface PointPrivate {
}

class PointPrivate {

    // Own properties of Champlain-0.12.Champlain.PointPrivate

    static name: string
}

interface RendererClass {

    // Own fields of Champlain-0.12.Champlain.RendererClass

    parent_class: GObject.InitiallyUnownedClass
    set_data: (renderer: Renderer, data: Uint8Array) => void
    render: (renderer: Renderer, tile: Tile) => void
}

abstract class RendererClass {

    // Own properties of Champlain-0.12.Champlain.RendererClass

    static name: string
}

interface ScaleClass {

    // Own fields of Champlain-0.12.Champlain.ScaleClass

    parent_class: Clutter.ActorClass
}

abstract class ScaleClass {

    // Own properties of Champlain-0.12.Champlain.ScaleClass

    static name: string
}

interface ScalePrivate {
}

class ScalePrivate {

    // Own properties of Champlain-0.12.Champlain.ScalePrivate

    static name: string
}

interface TileCacheClass {

    // Own fields of Champlain-0.12.Champlain.TileCacheClass

    parent_class: MapSourceClass
    store_tile: (tile_cache: TileCache, tile: Tile, contents: string, size: number) => void
    refresh_tile_time: (tile_cache: TileCache, tile: Tile) => void
    on_tile_filled: (tile_cache: TileCache, tile: Tile) => void
}

abstract class TileCacheClass {

    // Own properties of Champlain-0.12.Champlain.TileCacheClass

    static name: string
}

interface TileCachePrivate {
}

class TileCachePrivate {

    // Own properties of Champlain-0.12.Champlain.TileCachePrivate

    static name: string
}

interface TileClass {

    // Own fields of Champlain-0.12.Champlain.TileClass

    parent_class: Clutter.ActorClass
}

abstract class TileClass {

    // Own properties of Champlain-0.12.Champlain.TileClass

    static name: string
}

interface TilePrivate {
}

class TilePrivate {

    // Own properties of Champlain-0.12.Champlain.TilePrivate

    static name: string
}

interface TileSourceClass {

    // Own fields of Champlain-0.12.Champlain.TileSourceClass

    parent_class: MapSourceClass
}

abstract class TileSourceClass {

    // Own properties of Champlain-0.12.Champlain.TileSourceClass

    static name: string
}

interface TileSourcePrivate {
}

class TileSourcePrivate {

    // Own properties of Champlain-0.12.Champlain.TileSourcePrivate

    static name: string
}

interface ViewClass {

    // Own fields of Champlain-0.12.Champlain.ViewClass

    parent_class: Clutter.ActorClass
}

abstract class ViewClass {

    // Own properties of Champlain-0.12.Champlain.ViewClass

    static name: string
}

interface ViewPrivate {
}

class ViewPrivate {

    // Own properties of Champlain-0.12.Champlain.ViewPrivate

    static name: string
}

interface ViewportClass {

    // Own fields of Champlain-0.12.Champlain.ViewportClass

    parent_class: Clutter.ActorClass
}

abstract class ViewportClass {

    // Own properties of Champlain-0.12.Champlain.ViewportClass

    static name: string
}

interface ViewportPrivate {
}

class ViewportPrivate {

    // Own properties of Champlain-0.12.Champlain.ViewportPrivate

    static name: string
}

}
export default Champlain;