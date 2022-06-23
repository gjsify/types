// @ts-nocheck

/*
 * Type Definitions for node-gtk (https://github.com/romgrk/node-gtk)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/sammydre/ts-for-gjs
 */
/**
 * Champlain-0.12
 */

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
    getSurface(): cairo.Surface
    /**
     * Set a #cairo_surface_t to be associated with this tile.
     * @param surface the #cairo_surface_t
     */
    setSurface(surface: cairo.Surface): void

    // Class property signals of Champlain-0.12.Champlain.Exportable

    connect(sigName: "notify::surface", callback: (...args: any[]) => void): number
    on(sigName: "notify::surface", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::surface", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::surface", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::surface", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
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
    getLatitude(): number
    /**
     * Gets the longitude coordinate.
     */
    getLongitude(): number
    /**
     * Sets the coordinates of the location
     * @param latitude the latitude
     * @param longitude the longitude
     */
    setLocation(latitude: number, longitude: number): void

    // Class property signals of Champlain-0.12.Champlain.Location

    connect(sigName: "notify::latitude", callback: (...args: any[]) => void): number
    on(sigName: "notify::latitude", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::latitude", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::latitude", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::latitude", ...args: any[]): void
    connect(sigName: "notify::longitude", callback: (...args: any[]) => void): number
    on(sigName: "notify::longitude", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::longitude", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::longitude", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::longitude", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
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
    stepIncrement?: number | null
    upper?: number | null
    value?: number | null
}

/**
 * Signal callback interface for `changed`
 */
interface Adjustment_ChangedSignalCallback {
    (): void
}

interface Adjustment {

    // Own properties of Champlain-0.12.Champlain.Adjustment

    lower: number
    stepIncrement: number
    upper: number
    value: number

    // Owm methods of Champlain-0.12.Champlain.Adjustment

    clamp(interpolate: boolean, nFrames: number, fps: number): boolean
    getValue(): number
    getValues(value: number, lower: number, upper: number, stepIncrement: number): void
    interpolate(value: number, nFrames: number, fps: number): void
    interpolateStop(): void
    setValue(value: number): void
    setValues(value: number, lower: number, upper: number, stepIncrement: number): void

    // Own signals of Champlain-0.12.Champlain.Adjustment

    connect(sigName: "changed", callback: Adjustment_ChangedSignalCallback): number
    on(sigName: "changed", callback: Adjustment_ChangedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "changed", callback: Adjustment_ChangedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "changed", callback: Adjustment_ChangedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "changed", ...args: any[]): void

    // Class property signals of Champlain-0.12.Champlain.Adjustment

    connect(sigName: "notify::lower", callback: (...args: any[]) => void): number
    on(sigName: "notify::lower", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::lower", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::lower", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::lower", ...args: any[]): void
    connect(sigName: "notify::step-increment", callback: (...args: any[]) => void): number
    on(sigName: "notify::step-increment", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::step-increment", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::step-increment", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::step-increment", ...args: any[]): void
    connect(sigName: "notify::upper", callback: (...args: any[]) => void): number
    on(sigName: "notify::upper", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::upper", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::upper", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::upper", ...args: any[]): void
    connect(sigName: "notify::value", callback: (...args: any[]) => void): number
    on(sigName: "notify::value", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::value", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::value", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::value", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
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
    constructor(value: number, lower: number, upper: number, stepIncrement: number) 
    static new(value: number, lower: number, upper: number, stepIncrement: number): Adjustment
    _init(config?: Adjustment_ConstructProps): void
}

interface Coordinate_ConstructProps extends Location_ConstructProps, GObject.InitiallyUnowned_ConstructProps {
}

interface Coordinate extends Location {

    // Own fields of Champlain-0.12.Champlain.Coordinate

    parent: GObject.InitiallyUnowned
    priv: CoordinatePrivate

    // Class property signals of Champlain-0.12.Champlain.Coordinate

    connect(sigName: "notify::latitude", callback: (...args: any[]) => void): number
    on(sigName: "notify::latitude", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::latitude", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::latitude", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::latitude", ...args: any[]): void
    connect(sigName: "notify::longitude", callback: (...args: any[]) => void): number
    on(sigName: "notify::longitude", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::longitude", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::longitude", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::longitude", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
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
    static newFull(latitude: number, longitude: number): Coordinate
    _init(config?: Coordinate_ConstructProps): void
}

interface CustomMarker_ConstructProps extends Atk.ImplementorIface_ConstructProps, Location_ConstructProps, Clutter.Animatable_ConstructProps, Clutter.Container_ConstructProps, Clutter.Scriptable_ConstructProps, Marker_ConstructProps {
}

interface CustomMarker extends Atk.ImplementorIface, Location, Clutter.Animatable, Clutter.Container, Clutter.Scriptable {

    // Own fields of Champlain-0.12.Champlain.CustomMarker

    parent: Marker
    priv: CustomMarkerPrivate

    // Class property signals of Champlain-0.12.Champlain.CustomMarker

    connect(sigName: "notify::draggable", callback: (...args: any[]) => void): number
    on(sigName: "notify::draggable", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::draggable", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::draggable", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::draggable", ...args: any[]): void
    connect(sigName: "notify::selectable", callback: (...args: any[]) => void): number
    on(sigName: "notify::selectable", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::selectable", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::selectable", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::selectable", ...args: any[]): void
    connect(sigName: "notify::selected", callback: (...args: any[]) => void): number
    on(sigName: "notify::selected", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::selected", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::selected", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::selected", ...args: any[]): void
    connect(sigName: "notify::actions", callback: (...args: any[]) => void): number
    on(sigName: "notify::actions", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::actions", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::actions", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::actions", ...args: any[]): void
    connect(sigName: "notify::allocation", callback: (...args: any[]) => void): number
    on(sigName: "notify::allocation", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::allocation", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::allocation", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::allocation", ...args: any[]): void
    connect(sigName: "notify::anchor-gravity", callback: (...args: any[]) => void): number
    on(sigName: "notify::anchor-gravity", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::anchor-gravity", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::anchor-gravity", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::anchor-gravity", ...args: any[]): void
    connect(sigName: "notify::anchor-x", callback: (...args: any[]) => void): number
    on(sigName: "notify::anchor-x", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::anchor-x", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::anchor-x", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::anchor-x", ...args: any[]): void
    connect(sigName: "notify::anchor-y", callback: (...args: any[]) => void): number
    on(sigName: "notify::anchor-y", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::anchor-y", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::anchor-y", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::anchor-y", ...args: any[]): void
    connect(sigName: "notify::background-color", callback: (...args: any[]) => void): number
    on(sigName: "notify::background-color", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::background-color", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::background-color", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::background-color", ...args: any[]): void
    connect(sigName: "notify::background-color-set", callback: (...args: any[]) => void): number
    on(sigName: "notify::background-color-set", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::background-color-set", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::background-color-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::background-color-set", ...args: any[]): void
    connect(sigName: "notify::child-transform", callback: (...args: any[]) => void): number
    on(sigName: "notify::child-transform", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::child-transform", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::child-transform", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::child-transform", ...args: any[]): void
    connect(sigName: "notify::child-transform-set", callback: (...args: any[]) => void): number
    on(sigName: "notify::child-transform-set", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::child-transform-set", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::child-transform-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::child-transform-set", ...args: any[]): void
    connect(sigName: "notify::clip", callback: (...args: any[]) => void): number
    on(sigName: "notify::clip", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::clip", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::clip", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::clip", ...args: any[]): void
    connect(sigName: "notify::clip-rect", callback: (...args: any[]) => void): number
    on(sigName: "notify::clip-rect", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::clip-rect", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::clip-rect", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::clip-rect", ...args: any[]): void
    connect(sigName: "notify::clip-to-allocation", callback: (...args: any[]) => void): number
    on(sigName: "notify::clip-to-allocation", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::clip-to-allocation", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::clip-to-allocation", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::clip-to-allocation", ...args: any[]): void
    connect(sigName: "notify::constraints", callback: (...args: any[]) => void): number
    on(sigName: "notify::constraints", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::constraints", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::constraints", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::constraints", ...args: any[]): void
    connect(sigName: "notify::content", callback: (...args: any[]) => void): number
    on(sigName: "notify::content", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::content", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::content", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::content", ...args: any[]): void
    connect(sigName: "notify::content-box", callback: (...args: any[]) => void): number
    on(sigName: "notify::content-box", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::content-box", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::content-box", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::content-box", ...args: any[]): void
    connect(sigName: "notify::content-gravity", callback: (...args: any[]) => void): number
    on(sigName: "notify::content-gravity", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::content-gravity", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::content-gravity", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::content-gravity", ...args: any[]): void
    connect(sigName: "notify::content-repeat", callback: (...args: any[]) => void): number
    on(sigName: "notify::content-repeat", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::content-repeat", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::content-repeat", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::content-repeat", ...args: any[]): void
    connect(sigName: "notify::depth", callback: (...args: any[]) => void): number
    on(sigName: "notify::depth", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::depth", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::depth", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::depth", ...args: any[]): void
    connect(sigName: "notify::effect", callback: (...args: any[]) => void): number
    on(sigName: "notify::effect", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::effect", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::effect", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::effect", ...args: any[]): void
    connect(sigName: "notify::first-child", callback: (...args: any[]) => void): number
    on(sigName: "notify::first-child", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::first-child", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::first-child", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::first-child", ...args: any[]): void
    connect(sigName: "notify::fixed-position-set", callback: (...args: any[]) => void): number
    on(sigName: "notify::fixed-position-set", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::fixed-position-set", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::fixed-position-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::fixed-position-set", ...args: any[]): void
    connect(sigName: "notify::fixed-x", callback: (...args: any[]) => void): number
    on(sigName: "notify::fixed-x", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::fixed-x", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::fixed-x", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::fixed-x", ...args: any[]): void
    connect(sigName: "notify::fixed-y", callback: (...args: any[]) => void): number
    on(sigName: "notify::fixed-y", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::fixed-y", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::fixed-y", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::fixed-y", ...args: any[]): void
    connect(sigName: "notify::has-clip", callback: (...args: any[]) => void): number
    on(sigName: "notify::has-clip", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::has-clip", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::has-clip", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::has-clip", ...args: any[]): void
    connect(sigName: "notify::has-pointer", callback: (...args: any[]) => void): number
    on(sigName: "notify::has-pointer", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::has-pointer", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::has-pointer", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::has-pointer", ...args: any[]): void
    connect(sigName: "notify::height", callback: (...args: any[]) => void): number
    on(sigName: "notify::height", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::height", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::height", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::height", ...args: any[]): void
    connect(sigName: "notify::last-child", callback: (...args: any[]) => void): number
    on(sigName: "notify::last-child", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::last-child", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::last-child", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::last-child", ...args: any[]): void
    connect(sigName: "notify::layout-manager", callback: (...args: any[]) => void): number
    on(sigName: "notify::layout-manager", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::layout-manager", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::layout-manager", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::layout-manager", ...args: any[]): void
    connect(sigName: "notify::magnification-filter", callback: (...args: any[]) => void): number
    on(sigName: "notify::magnification-filter", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::magnification-filter", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::magnification-filter", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::magnification-filter", ...args: any[]): void
    connect(sigName: "notify::mapped", callback: (...args: any[]) => void): number
    on(sigName: "notify::mapped", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::mapped", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::mapped", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::mapped", ...args: any[]): void
    connect(sigName: "notify::margin-bottom", callback: (...args: any[]) => void): number
    on(sigName: "notify::margin-bottom", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::margin-bottom", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::margin-bottom", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::margin-bottom", ...args: any[]): void
    connect(sigName: "notify::margin-left", callback: (...args: any[]) => void): number
    on(sigName: "notify::margin-left", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::margin-left", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::margin-left", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::margin-left", ...args: any[]): void
    connect(sigName: "notify::margin-right", callback: (...args: any[]) => void): number
    on(sigName: "notify::margin-right", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::margin-right", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::margin-right", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::margin-right", ...args: any[]): void
    connect(sigName: "notify::margin-top", callback: (...args: any[]) => void): number
    on(sigName: "notify::margin-top", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::margin-top", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::margin-top", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::margin-top", ...args: any[]): void
    connect(sigName: "notify::min-height", callback: (...args: any[]) => void): number
    on(sigName: "notify::min-height", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::min-height", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::min-height", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::min-height", ...args: any[]): void
    connect(sigName: "notify::min-height-set", callback: (...args: any[]) => void): number
    on(sigName: "notify::min-height-set", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::min-height-set", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::min-height-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::min-height-set", ...args: any[]): void
    connect(sigName: "notify::min-width", callback: (...args: any[]) => void): number
    on(sigName: "notify::min-width", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::min-width", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::min-width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::min-width", ...args: any[]): void
    connect(sigName: "notify::min-width-set", callback: (...args: any[]) => void): number
    on(sigName: "notify::min-width-set", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::min-width-set", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::min-width-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::min-width-set", ...args: any[]): void
    connect(sigName: "notify::minification-filter", callback: (...args: any[]) => void): number
    on(sigName: "notify::minification-filter", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::minification-filter", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::minification-filter", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::minification-filter", ...args: any[]): void
    connect(sigName: "notify::name", callback: (...args: any[]) => void): number
    on(sigName: "notify::name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::natural-height", callback: (...args: any[]) => void): number
    on(sigName: "notify::natural-height", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::natural-height", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::natural-height", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::natural-height", ...args: any[]): void
    connect(sigName: "notify::natural-height-set", callback: (...args: any[]) => void): number
    on(sigName: "notify::natural-height-set", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::natural-height-set", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::natural-height-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::natural-height-set", ...args: any[]): void
    connect(sigName: "notify::natural-width", callback: (...args: any[]) => void): number
    on(sigName: "notify::natural-width", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::natural-width", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::natural-width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::natural-width", ...args: any[]): void
    connect(sigName: "notify::natural-width-set", callback: (...args: any[]) => void): number
    on(sigName: "notify::natural-width-set", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::natural-width-set", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::natural-width-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::natural-width-set", ...args: any[]): void
    connect(sigName: "notify::offscreen-redirect", callback: (...args: any[]) => void): number
    on(sigName: "notify::offscreen-redirect", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::offscreen-redirect", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::offscreen-redirect", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::offscreen-redirect", ...args: any[]): void
    connect(sigName: "notify::opacity", callback: (...args: any[]) => void): number
    on(sigName: "notify::opacity", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::opacity", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::opacity", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::opacity", ...args: any[]): void
    connect(sigName: "notify::pivot-point", callback: (...args: any[]) => void): number
    on(sigName: "notify::pivot-point", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::pivot-point", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::pivot-point", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::pivot-point", ...args: any[]): void
    connect(sigName: "notify::pivot-point-z", callback: (...args: any[]) => void): number
    on(sigName: "notify::pivot-point-z", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::pivot-point-z", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::pivot-point-z", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::pivot-point-z", ...args: any[]): void
    connect(sigName: "notify::position", callback: (...args: any[]) => void): number
    on(sigName: "notify::position", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::position", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::position", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::position", ...args: any[]): void
    connect(sigName: "notify::reactive", callback: (...args: any[]) => void): number
    on(sigName: "notify::reactive", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::reactive", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::reactive", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::reactive", ...args: any[]): void
    connect(sigName: "notify::realized", callback: (...args: any[]) => void): number
    on(sigName: "notify::realized", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::realized", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::realized", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::realized", ...args: any[]): void
    connect(sigName: "notify::request-mode", callback: (...args: any[]) => void): number
    on(sigName: "notify::request-mode", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::request-mode", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::request-mode", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::request-mode", ...args: any[]): void
    connect(sigName: "notify::rotation-angle-x", callback: (...args: any[]) => void): number
    on(sigName: "notify::rotation-angle-x", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::rotation-angle-x", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::rotation-angle-x", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::rotation-angle-x", ...args: any[]): void
    connect(sigName: "notify::rotation-angle-y", callback: (...args: any[]) => void): number
    on(sigName: "notify::rotation-angle-y", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::rotation-angle-y", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::rotation-angle-y", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::rotation-angle-y", ...args: any[]): void
    connect(sigName: "notify::rotation-angle-z", callback: (...args: any[]) => void): number
    on(sigName: "notify::rotation-angle-z", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::rotation-angle-z", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::rotation-angle-z", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::rotation-angle-z", ...args: any[]): void
    connect(sigName: "notify::rotation-center-x", callback: (...args: any[]) => void): number
    on(sigName: "notify::rotation-center-x", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::rotation-center-x", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::rotation-center-x", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::rotation-center-x", ...args: any[]): void
    connect(sigName: "notify::rotation-center-y", callback: (...args: any[]) => void): number
    on(sigName: "notify::rotation-center-y", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::rotation-center-y", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::rotation-center-y", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::rotation-center-y", ...args: any[]): void
    connect(sigName: "notify::rotation-center-z", callback: (...args: any[]) => void): number
    on(sigName: "notify::rotation-center-z", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::rotation-center-z", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::rotation-center-z", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::rotation-center-z", ...args: any[]): void
    connect(sigName: "notify::rotation-center-z-gravity", callback: (...args: any[]) => void): number
    on(sigName: "notify::rotation-center-z-gravity", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::rotation-center-z-gravity", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::rotation-center-z-gravity", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::rotation-center-z-gravity", ...args: any[]): void
    connect(sigName: "notify::scale-center-x", callback: (...args: any[]) => void): number
    on(sigName: "notify::scale-center-x", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::scale-center-x", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::scale-center-x", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::scale-center-x", ...args: any[]): void
    connect(sigName: "notify::scale-center-y", callback: (...args: any[]) => void): number
    on(sigName: "notify::scale-center-y", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::scale-center-y", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::scale-center-y", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::scale-center-y", ...args: any[]): void
    connect(sigName: "notify::scale-gravity", callback: (...args: any[]) => void): number
    on(sigName: "notify::scale-gravity", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::scale-gravity", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::scale-gravity", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::scale-gravity", ...args: any[]): void
    connect(sigName: "notify::scale-x", callback: (...args: any[]) => void): number
    on(sigName: "notify::scale-x", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::scale-x", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::scale-x", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::scale-x", ...args: any[]): void
    connect(sigName: "notify::scale-y", callback: (...args: any[]) => void): number
    on(sigName: "notify::scale-y", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::scale-y", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::scale-y", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::scale-y", ...args: any[]): void
    connect(sigName: "notify::scale-z", callback: (...args: any[]) => void): number
    on(sigName: "notify::scale-z", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::scale-z", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::scale-z", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::scale-z", ...args: any[]): void
    connect(sigName: "notify::show-on-set-parent", callback: (...args: any[]) => void): number
    on(sigName: "notify::show-on-set-parent", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::show-on-set-parent", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::show-on-set-parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::show-on-set-parent", ...args: any[]): void
    connect(sigName: "notify::size", callback: (...args: any[]) => void): number
    on(sigName: "notify::size", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::size", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::size", ...args: any[]): void
    connect(sigName: "notify::text-direction", callback: (...args: any[]) => void): number
    on(sigName: "notify::text-direction", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::text-direction", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::text-direction", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::text-direction", ...args: any[]): void
    connect(sigName: "notify::transform", callback: (...args: any[]) => void): number
    on(sigName: "notify::transform", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::transform", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::transform", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::transform", ...args: any[]): void
    connect(sigName: "notify::transform-set", callback: (...args: any[]) => void): number
    on(sigName: "notify::transform-set", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::transform-set", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::transform-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::transform-set", ...args: any[]): void
    connect(sigName: "notify::translation-x", callback: (...args: any[]) => void): number
    on(sigName: "notify::translation-x", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::translation-x", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::translation-x", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::translation-x", ...args: any[]): void
    connect(sigName: "notify::translation-y", callback: (...args: any[]) => void): number
    on(sigName: "notify::translation-y", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::translation-y", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::translation-y", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::translation-y", ...args: any[]): void
    connect(sigName: "notify::translation-z", callback: (...args: any[]) => void): number
    on(sigName: "notify::translation-z", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::translation-z", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::translation-z", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::translation-z", ...args: any[]): void
    connect(sigName: "notify::visible", callback: (...args: any[]) => void): number
    on(sigName: "notify::visible", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::visible", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::visible", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::visible", ...args: any[]): void
    connect(sigName: "notify::width", callback: (...args: any[]) => void): number
    on(sigName: "notify::width", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::width", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::width", ...args: any[]): void
    connect(sigName: "notify::x", callback: (...args: any[]) => void): number
    on(sigName: "notify::x", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::x", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::x", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::x", ...args: any[]): void
    connect(sigName: "notify::x-align", callback: (...args: any[]) => void): number
    on(sigName: "notify::x-align", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::x-align", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::x-align", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::x-align", ...args: any[]): void
    connect(sigName: "notify::x-expand", callback: (...args: any[]) => void): number
    on(sigName: "notify::x-expand", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::x-expand", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::x-expand", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::x-expand", ...args: any[]): void
    connect(sigName: "notify::y", callback: (...args: any[]) => void): number
    on(sigName: "notify::y", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::y", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::y", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::y", ...args: any[]): void
    connect(sigName: "notify::y-align", callback: (...args: any[]) => void): number
    on(sigName: "notify::y-align", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::y-align", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::y-align", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::y-align", ...args: any[]): void
    connect(sigName: "notify::y-expand", callback: (...args: any[]) => void): number
    on(sigName: "notify::y-expand", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::y-expand", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::y-expand", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::y-expand", ...args: any[]): void
    connect(sigName: "notify::z-position", callback: (...args: any[]) => void): number
    on(sigName: "notify::z-position", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::z-position", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::z-position", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::z-position", ...args: any[]): void
    connect(sigName: "notify::latitude", callback: (...args: any[]) => void): number
    on(sigName: "notify::latitude", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::latitude", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::latitude", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::latitude", ...args: any[]): void
    connect(sigName: "notify::longitude", callback: (...args: any[]) => void): number
    on(sigName: "notify::longitude", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::longitude", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::longitude", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::longitude", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
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
    tileSize?: number | null
}

interface ErrorTileRenderer {

    // Own properties of Champlain-0.12.Champlain.ErrorTileRenderer

    /**
     * The size of the rendered tile.
     */
    tileSize: number

    // Own fields of Champlain-0.12.Champlain.ErrorTileRenderer

    parent: Renderer
    priv: ErrorTileRendererPrivate

    // Owm methods of Champlain-0.12.Champlain.ErrorTileRenderer

    /**
     * Gets the size of the rendered error tiles.
     */
    getTileSize(): number
    /**
     * Sets the size of the rendered error tile.
     * @param size the size of the rendered error tiles
     */
    setTileSize(size: number): void

    // Conflicting methods

    setData(...args: any[]): any

    // Class property signals of Champlain-0.12.Champlain.ErrorTileRenderer

    connect(sigName: "notify::tile-size", callback: (...args: any[]) => void): number
    on(sigName: "notify::tile-size", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::tile-size", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::tile-size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::tile-size", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
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
     * @param tileSize the size of the rendered error tile
     */
    constructor(tileSize: number) 
    /**
     * Constructor of a #ChamplainErrorTileRenderer.
     * @constructor 
     * @param tileSize the size of the rendered error tile
     */
    static new(tileSize: number): ErrorTileRenderer
    _init(config?: ErrorTileRenderer_ConstructProps): void
}

interface FileCache_ConstructProps extends TileCache_ConstructProps {

    // Own constructor properties of Champlain-0.12.Champlain.FileCache

    /**
     * The directory where the tile database is stored.
     */
    cacheDir?: string | null
    /**
     * The cache size limit in bytes.
     * 
     * Note: this new value will not be applied until you call champlain_file_cache_purge()
     */
    sizeLimit?: number | null
}

interface FileCache {

    // Own properties of Champlain-0.12.Champlain.FileCache

    /**
     * The directory where the tile database is stored.
     */
    readonly cacheDir: string
    /**
     * The cache size limit in bytes.
     * 
     * Note: this new value will not be applied until you call champlain_file_cache_purge()
     */
    sizeLimit: number

    // Own fields of Champlain-0.12.Champlain.FileCache

    parentInstance: TileCache
    priv: FileCachePrivate

    // Owm methods of Champlain-0.12.Champlain.FileCache

    /**
     * Gets the directory where the cache database is stored.
     */
    getCacheDir(): string
    /**
     * Gets the cache size limit in bytes.
     */
    getSizeLimit(): number
    /**
     * Purge the cache from the less popular tiles until cache's size limit is reached.
     */
    purge(): void
    /**
     * Purge the cache from the less popular tiles until cache's size limit is reached.
     * This is a non blocking call as the purge will happen when the application is idle
     */
    purgeOnIdle(): void
    /**
     * Sets the cache size limit in bytes.
     * @param sizeLimit the cache limit in bytes
     */
    setSizeLimit(sizeLimit: number): void

    // Class property signals of Champlain-0.12.Champlain.FileCache

    connect(sigName: "notify::cache-dir", callback: (...args: any[]) => void): number
    on(sigName: "notify::cache-dir", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::cache-dir", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::cache-dir", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::cache-dir", ...args: any[]): void
    connect(sigName: "notify::size-limit", callback: (...args: any[]) => void): number
    on(sigName: "notify::size-limit", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::size-limit", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::size-limit", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::size-limit", ...args: any[]): void
    connect(sigName: "notify::next-source", callback: (...args: any[]) => void): number
    on(sigName: "notify::next-source", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::next-source", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::next-source", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::next-source", ...args: any[]): void
    connect(sigName: "notify::renderer", callback: (...args: any[]) => void): number
    on(sigName: "notify::renderer", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::renderer", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::renderer", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::renderer", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
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
     * @param sizeLimit maximum size of the cache in bytes
     * @param cacheDir the directory where the cache is created. When cache_dir == NULL, a cache in ~/.cache/champlain is used.
     * @param renderer the #ChamplainRenderer used for tiles rendering
     */
    static newFull(sizeLimit: number, cacheDir: string | null, renderer: Renderer): FileCache
    _init(config?: FileCache_ConstructProps): void
}

interface FileTileSource_ConstructProps extends TileSource_ConstructProps {
}

interface FileTileSource {

    // Conflicting properties

    parentInstance: any
    priv: any

    // Own fields of Champlain-0.12.Champlain.FileTileSource

    parent: TileSource

    // Owm methods of Champlain-0.12.Champlain.FileTileSource

    /**
     * Loads the OpenStreetMap XML file at the given path.
     * @param mapPath a path to a map data file
     */
    loadMapData(mapPath: string): void

    // Class property signals of Champlain-0.12.Champlain.FileTileSource

    connect(sigName: "notify::cache", callback: (...args: any[]) => void): number
    on(sigName: "notify::cache", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::cache", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::cache", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::cache", ...args: any[]): void
    connect(sigName: "notify::id", callback: (...args: any[]) => void): number
    on(sigName: "notify::id", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::id", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::id", ...args: any[]): void
    connect(sigName: "notify::license", callback: (...args: any[]) => void): number
    on(sigName: "notify::license", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::license", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::license", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::license", ...args: any[]): void
    connect(sigName: "notify::license-uri", callback: (...args: any[]) => void): number
    on(sigName: "notify::license-uri", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::license-uri", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::license-uri", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::license-uri", ...args: any[]): void
    connect(sigName: "notify::max-zoom-level", callback: (...args: any[]) => void): number
    on(sigName: "notify::max-zoom-level", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::max-zoom-level", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::max-zoom-level", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::max-zoom-level", ...args: any[]): void
    connect(sigName: "notify::min-zoom-level", callback: (...args: any[]) => void): number
    on(sigName: "notify::min-zoom-level", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::min-zoom-level", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::min-zoom-level", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::min-zoom-level", ...args: any[]): void
    connect(sigName: "notify::name", callback: (...args: any[]) => void): number
    on(sigName: "notify::name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::projection", callback: (...args: any[]) => void): number
    on(sigName: "notify::projection", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::projection", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::projection", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::projection", ...args: any[]): void
    connect(sigName: "notify::tile-size", callback: (...args: any[]) => void): number
    on(sigName: "notify::tile-size", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::tile-size", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::tile-size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::tile-size", ...args: any[]): void
    connect(sigName: "notify::next-source", callback: (...args: any[]) => void): number
    on(sigName: "notify::next-source", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::next-source", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::next-source", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::next-source", ...args: any[]): void
    connect(sigName: "notify::renderer", callback: (...args: any[]) => void): number
    on(sigName: "notify::renderer", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::renderer", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::renderer", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::renderer", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
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
     * @param licenseUri the map source's license URI
     * @param minZoom the map source's minimum zoom level
     * @param maxZoom the map source's maximum zoom level
     * @param tileSize the map source's tile size (in pixels)
     * @param projection the map source's projection
     * @param renderer the #ChamplainRenderer used to render tiles
     */
    static newFull(id: string, name: string, license: string, licenseUri: string, minZoom: number, maxZoom: number, tileSize: number, projection: MapProjection, renderer: Renderer): FileTileSource
    _init(config?: FileTileSource_ConstructProps): void
}

interface ImageRenderer_ConstructProps extends Renderer_ConstructProps {
}

interface ImageRenderer {

    // Own fields of Champlain-0.12.Champlain.ImageRenderer

    parent: Renderer
    priv: ImageRendererPrivate

    // Conflicting methods

    setData(...args: any[]): any

    // Class property signals of Champlain-0.12.Champlain.ImageRenderer

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
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

    decelRate?: number | null
    mode?: boolean | null
    motionBuffer?: number | null
}

/**
 * Signal callback interface for `panning-completed`
 */
interface KineticScrollView_PanningCompletedSignalCallback {
    (): void
}

interface KineticScrollView extends Atk.ImplementorIface, Clutter.Animatable, Clutter.Container, Clutter.Scriptable {

    // Own properties of Champlain-0.12.Champlain.KineticScrollView

    decelRate: number
    mode: boolean
    motionBuffer: number

    // Owm methods of Champlain-0.12.Champlain.KineticScrollView

    stop(): void

    // Own signals of Champlain-0.12.Champlain.KineticScrollView

    connect(sigName: "panning-completed", callback: KineticScrollView_PanningCompletedSignalCallback): number
    on(sigName: "panning-completed", callback: KineticScrollView_PanningCompletedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "panning-completed", callback: KineticScrollView_PanningCompletedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "panning-completed", callback: KineticScrollView_PanningCompletedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "panning-completed", ...args: any[]): void

    // Class property signals of Champlain-0.12.Champlain.KineticScrollView

    connect(sigName: "notify::decel-rate", callback: (...args: any[]) => void): number
    on(sigName: "notify::decel-rate", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::decel-rate", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::decel-rate", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::decel-rate", ...args: any[]): void
    connect(sigName: "notify::mode", callback: (...args: any[]) => void): number
    on(sigName: "notify::mode", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::mode", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::mode", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::mode", ...args: any[]): void
    connect(sigName: "notify::motion-buffer", callback: (...args: any[]) => void): number
    on(sigName: "notify::motion-buffer", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::motion-buffer", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::motion-buffer", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::motion-buffer", ...args: any[]): void
    connect(sigName: "notify::actions", callback: (...args: any[]) => void): number
    on(sigName: "notify::actions", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::actions", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::actions", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::actions", ...args: any[]): void
    connect(sigName: "notify::allocation", callback: (...args: any[]) => void): number
    on(sigName: "notify::allocation", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::allocation", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::allocation", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::allocation", ...args: any[]): void
    connect(sigName: "notify::anchor-gravity", callback: (...args: any[]) => void): number
    on(sigName: "notify::anchor-gravity", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::anchor-gravity", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::anchor-gravity", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::anchor-gravity", ...args: any[]): void
    connect(sigName: "notify::anchor-x", callback: (...args: any[]) => void): number
    on(sigName: "notify::anchor-x", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::anchor-x", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::anchor-x", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::anchor-x", ...args: any[]): void
    connect(sigName: "notify::anchor-y", callback: (...args: any[]) => void): number
    on(sigName: "notify::anchor-y", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::anchor-y", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::anchor-y", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::anchor-y", ...args: any[]): void
    connect(sigName: "notify::background-color", callback: (...args: any[]) => void): number
    on(sigName: "notify::background-color", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::background-color", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::background-color", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::background-color", ...args: any[]): void
    connect(sigName: "notify::background-color-set", callback: (...args: any[]) => void): number
    on(sigName: "notify::background-color-set", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::background-color-set", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::background-color-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::background-color-set", ...args: any[]): void
    connect(sigName: "notify::child-transform", callback: (...args: any[]) => void): number
    on(sigName: "notify::child-transform", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::child-transform", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::child-transform", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::child-transform", ...args: any[]): void
    connect(sigName: "notify::child-transform-set", callback: (...args: any[]) => void): number
    on(sigName: "notify::child-transform-set", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::child-transform-set", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::child-transform-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::child-transform-set", ...args: any[]): void
    connect(sigName: "notify::clip", callback: (...args: any[]) => void): number
    on(sigName: "notify::clip", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::clip", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::clip", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::clip", ...args: any[]): void
    connect(sigName: "notify::clip-rect", callback: (...args: any[]) => void): number
    on(sigName: "notify::clip-rect", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::clip-rect", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::clip-rect", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::clip-rect", ...args: any[]): void
    connect(sigName: "notify::clip-to-allocation", callback: (...args: any[]) => void): number
    on(sigName: "notify::clip-to-allocation", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::clip-to-allocation", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::clip-to-allocation", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::clip-to-allocation", ...args: any[]): void
    connect(sigName: "notify::constraints", callback: (...args: any[]) => void): number
    on(sigName: "notify::constraints", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::constraints", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::constraints", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::constraints", ...args: any[]): void
    connect(sigName: "notify::content", callback: (...args: any[]) => void): number
    on(sigName: "notify::content", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::content", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::content", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::content", ...args: any[]): void
    connect(sigName: "notify::content-box", callback: (...args: any[]) => void): number
    on(sigName: "notify::content-box", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::content-box", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::content-box", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::content-box", ...args: any[]): void
    connect(sigName: "notify::content-gravity", callback: (...args: any[]) => void): number
    on(sigName: "notify::content-gravity", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::content-gravity", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::content-gravity", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::content-gravity", ...args: any[]): void
    connect(sigName: "notify::content-repeat", callback: (...args: any[]) => void): number
    on(sigName: "notify::content-repeat", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::content-repeat", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::content-repeat", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::content-repeat", ...args: any[]): void
    connect(sigName: "notify::depth", callback: (...args: any[]) => void): number
    on(sigName: "notify::depth", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::depth", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::depth", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::depth", ...args: any[]): void
    connect(sigName: "notify::effect", callback: (...args: any[]) => void): number
    on(sigName: "notify::effect", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::effect", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::effect", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::effect", ...args: any[]): void
    connect(sigName: "notify::first-child", callback: (...args: any[]) => void): number
    on(sigName: "notify::first-child", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::first-child", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::first-child", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::first-child", ...args: any[]): void
    connect(sigName: "notify::fixed-position-set", callback: (...args: any[]) => void): number
    on(sigName: "notify::fixed-position-set", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::fixed-position-set", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::fixed-position-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::fixed-position-set", ...args: any[]): void
    connect(sigName: "notify::fixed-x", callback: (...args: any[]) => void): number
    on(sigName: "notify::fixed-x", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::fixed-x", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::fixed-x", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::fixed-x", ...args: any[]): void
    connect(sigName: "notify::fixed-y", callback: (...args: any[]) => void): number
    on(sigName: "notify::fixed-y", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::fixed-y", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::fixed-y", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::fixed-y", ...args: any[]): void
    connect(sigName: "notify::has-clip", callback: (...args: any[]) => void): number
    on(sigName: "notify::has-clip", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::has-clip", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::has-clip", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::has-clip", ...args: any[]): void
    connect(sigName: "notify::has-pointer", callback: (...args: any[]) => void): number
    on(sigName: "notify::has-pointer", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::has-pointer", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::has-pointer", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::has-pointer", ...args: any[]): void
    connect(sigName: "notify::height", callback: (...args: any[]) => void): number
    on(sigName: "notify::height", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::height", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::height", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::height", ...args: any[]): void
    connect(sigName: "notify::last-child", callback: (...args: any[]) => void): number
    on(sigName: "notify::last-child", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::last-child", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::last-child", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::last-child", ...args: any[]): void
    connect(sigName: "notify::layout-manager", callback: (...args: any[]) => void): number
    on(sigName: "notify::layout-manager", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::layout-manager", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::layout-manager", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::layout-manager", ...args: any[]): void
    connect(sigName: "notify::magnification-filter", callback: (...args: any[]) => void): number
    on(sigName: "notify::magnification-filter", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::magnification-filter", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::magnification-filter", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::magnification-filter", ...args: any[]): void
    connect(sigName: "notify::mapped", callback: (...args: any[]) => void): number
    on(sigName: "notify::mapped", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::mapped", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::mapped", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::mapped", ...args: any[]): void
    connect(sigName: "notify::margin-bottom", callback: (...args: any[]) => void): number
    on(sigName: "notify::margin-bottom", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::margin-bottom", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::margin-bottom", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::margin-bottom", ...args: any[]): void
    connect(sigName: "notify::margin-left", callback: (...args: any[]) => void): number
    on(sigName: "notify::margin-left", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::margin-left", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::margin-left", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::margin-left", ...args: any[]): void
    connect(sigName: "notify::margin-right", callback: (...args: any[]) => void): number
    on(sigName: "notify::margin-right", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::margin-right", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::margin-right", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::margin-right", ...args: any[]): void
    connect(sigName: "notify::margin-top", callback: (...args: any[]) => void): number
    on(sigName: "notify::margin-top", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::margin-top", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::margin-top", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::margin-top", ...args: any[]): void
    connect(sigName: "notify::min-height", callback: (...args: any[]) => void): number
    on(sigName: "notify::min-height", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::min-height", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::min-height", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::min-height", ...args: any[]): void
    connect(sigName: "notify::min-height-set", callback: (...args: any[]) => void): number
    on(sigName: "notify::min-height-set", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::min-height-set", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::min-height-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::min-height-set", ...args: any[]): void
    connect(sigName: "notify::min-width", callback: (...args: any[]) => void): number
    on(sigName: "notify::min-width", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::min-width", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::min-width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::min-width", ...args: any[]): void
    connect(sigName: "notify::min-width-set", callback: (...args: any[]) => void): number
    on(sigName: "notify::min-width-set", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::min-width-set", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::min-width-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::min-width-set", ...args: any[]): void
    connect(sigName: "notify::minification-filter", callback: (...args: any[]) => void): number
    on(sigName: "notify::minification-filter", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::minification-filter", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::minification-filter", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::minification-filter", ...args: any[]): void
    connect(sigName: "notify::name", callback: (...args: any[]) => void): number
    on(sigName: "notify::name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::natural-height", callback: (...args: any[]) => void): number
    on(sigName: "notify::natural-height", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::natural-height", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::natural-height", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::natural-height", ...args: any[]): void
    connect(sigName: "notify::natural-height-set", callback: (...args: any[]) => void): number
    on(sigName: "notify::natural-height-set", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::natural-height-set", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::natural-height-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::natural-height-set", ...args: any[]): void
    connect(sigName: "notify::natural-width", callback: (...args: any[]) => void): number
    on(sigName: "notify::natural-width", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::natural-width", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::natural-width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::natural-width", ...args: any[]): void
    connect(sigName: "notify::natural-width-set", callback: (...args: any[]) => void): number
    on(sigName: "notify::natural-width-set", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::natural-width-set", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::natural-width-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::natural-width-set", ...args: any[]): void
    connect(sigName: "notify::offscreen-redirect", callback: (...args: any[]) => void): number
    on(sigName: "notify::offscreen-redirect", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::offscreen-redirect", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::offscreen-redirect", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::offscreen-redirect", ...args: any[]): void
    connect(sigName: "notify::opacity", callback: (...args: any[]) => void): number
    on(sigName: "notify::opacity", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::opacity", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::opacity", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::opacity", ...args: any[]): void
    connect(sigName: "notify::pivot-point", callback: (...args: any[]) => void): number
    on(sigName: "notify::pivot-point", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::pivot-point", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::pivot-point", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::pivot-point", ...args: any[]): void
    connect(sigName: "notify::pivot-point-z", callback: (...args: any[]) => void): number
    on(sigName: "notify::pivot-point-z", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::pivot-point-z", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::pivot-point-z", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::pivot-point-z", ...args: any[]): void
    connect(sigName: "notify::position", callback: (...args: any[]) => void): number
    on(sigName: "notify::position", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::position", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::position", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::position", ...args: any[]): void
    connect(sigName: "notify::reactive", callback: (...args: any[]) => void): number
    on(sigName: "notify::reactive", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::reactive", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::reactive", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::reactive", ...args: any[]): void
    connect(sigName: "notify::realized", callback: (...args: any[]) => void): number
    on(sigName: "notify::realized", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::realized", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::realized", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::realized", ...args: any[]): void
    connect(sigName: "notify::request-mode", callback: (...args: any[]) => void): number
    on(sigName: "notify::request-mode", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::request-mode", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::request-mode", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::request-mode", ...args: any[]): void
    connect(sigName: "notify::rotation-angle-x", callback: (...args: any[]) => void): number
    on(sigName: "notify::rotation-angle-x", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::rotation-angle-x", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::rotation-angle-x", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::rotation-angle-x", ...args: any[]): void
    connect(sigName: "notify::rotation-angle-y", callback: (...args: any[]) => void): number
    on(sigName: "notify::rotation-angle-y", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::rotation-angle-y", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::rotation-angle-y", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::rotation-angle-y", ...args: any[]): void
    connect(sigName: "notify::rotation-angle-z", callback: (...args: any[]) => void): number
    on(sigName: "notify::rotation-angle-z", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::rotation-angle-z", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::rotation-angle-z", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::rotation-angle-z", ...args: any[]): void
    connect(sigName: "notify::rotation-center-x", callback: (...args: any[]) => void): number
    on(sigName: "notify::rotation-center-x", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::rotation-center-x", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::rotation-center-x", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::rotation-center-x", ...args: any[]): void
    connect(sigName: "notify::rotation-center-y", callback: (...args: any[]) => void): number
    on(sigName: "notify::rotation-center-y", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::rotation-center-y", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::rotation-center-y", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::rotation-center-y", ...args: any[]): void
    connect(sigName: "notify::rotation-center-z", callback: (...args: any[]) => void): number
    on(sigName: "notify::rotation-center-z", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::rotation-center-z", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::rotation-center-z", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::rotation-center-z", ...args: any[]): void
    connect(sigName: "notify::rotation-center-z-gravity", callback: (...args: any[]) => void): number
    on(sigName: "notify::rotation-center-z-gravity", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::rotation-center-z-gravity", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::rotation-center-z-gravity", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::rotation-center-z-gravity", ...args: any[]): void
    connect(sigName: "notify::scale-center-x", callback: (...args: any[]) => void): number
    on(sigName: "notify::scale-center-x", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::scale-center-x", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::scale-center-x", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::scale-center-x", ...args: any[]): void
    connect(sigName: "notify::scale-center-y", callback: (...args: any[]) => void): number
    on(sigName: "notify::scale-center-y", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::scale-center-y", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::scale-center-y", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::scale-center-y", ...args: any[]): void
    connect(sigName: "notify::scale-gravity", callback: (...args: any[]) => void): number
    on(sigName: "notify::scale-gravity", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::scale-gravity", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::scale-gravity", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::scale-gravity", ...args: any[]): void
    connect(sigName: "notify::scale-x", callback: (...args: any[]) => void): number
    on(sigName: "notify::scale-x", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::scale-x", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::scale-x", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::scale-x", ...args: any[]): void
    connect(sigName: "notify::scale-y", callback: (...args: any[]) => void): number
    on(sigName: "notify::scale-y", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::scale-y", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::scale-y", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::scale-y", ...args: any[]): void
    connect(sigName: "notify::scale-z", callback: (...args: any[]) => void): number
    on(sigName: "notify::scale-z", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::scale-z", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::scale-z", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::scale-z", ...args: any[]): void
    connect(sigName: "notify::show-on-set-parent", callback: (...args: any[]) => void): number
    on(sigName: "notify::show-on-set-parent", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::show-on-set-parent", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::show-on-set-parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::show-on-set-parent", ...args: any[]): void
    connect(sigName: "notify::size", callback: (...args: any[]) => void): number
    on(sigName: "notify::size", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::size", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::size", ...args: any[]): void
    connect(sigName: "notify::text-direction", callback: (...args: any[]) => void): number
    on(sigName: "notify::text-direction", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::text-direction", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::text-direction", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::text-direction", ...args: any[]): void
    connect(sigName: "notify::transform", callback: (...args: any[]) => void): number
    on(sigName: "notify::transform", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::transform", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::transform", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::transform", ...args: any[]): void
    connect(sigName: "notify::transform-set", callback: (...args: any[]) => void): number
    on(sigName: "notify::transform-set", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::transform-set", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::transform-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::transform-set", ...args: any[]): void
    connect(sigName: "notify::translation-x", callback: (...args: any[]) => void): number
    on(sigName: "notify::translation-x", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::translation-x", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::translation-x", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::translation-x", ...args: any[]): void
    connect(sigName: "notify::translation-y", callback: (...args: any[]) => void): number
    on(sigName: "notify::translation-y", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::translation-y", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::translation-y", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::translation-y", ...args: any[]): void
    connect(sigName: "notify::translation-z", callback: (...args: any[]) => void): number
    on(sigName: "notify::translation-z", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::translation-z", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::translation-z", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::translation-z", ...args: any[]): void
    connect(sigName: "notify::visible", callback: (...args: any[]) => void): number
    on(sigName: "notify::visible", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::visible", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::visible", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::visible", ...args: any[]): void
    connect(sigName: "notify::width", callback: (...args: any[]) => void): number
    on(sigName: "notify::width", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::width", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::width", ...args: any[]): void
    connect(sigName: "notify::x", callback: (...args: any[]) => void): number
    on(sigName: "notify::x", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::x", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::x", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::x", ...args: any[]): void
    connect(sigName: "notify::x-align", callback: (...args: any[]) => void): number
    on(sigName: "notify::x-align", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::x-align", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::x-align", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::x-align", ...args: any[]): void
    connect(sigName: "notify::x-expand", callback: (...args: any[]) => void): number
    on(sigName: "notify::x-expand", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::x-expand", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::x-expand", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::x-expand", ...args: any[]): void
    connect(sigName: "notify::y", callback: (...args: any[]) => void): number
    on(sigName: "notify::y", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::y", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::y", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::y", ...args: any[]): void
    connect(sigName: "notify::y-align", callback: (...args: any[]) => void): number
    on(sigName: "notify::y-align", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::y-align", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::y-align", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::y-align", ...args: any[]): void
    connect(sigName: "notify::y-expand", callback: (...args: any[]) => void): number
    on(sigName: "notify::y-expand", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::y-expand", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::y-expand", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::y-expand", ...args: any[]): void
    connect(sigName: "notify::z-position", callback: (...args: any[]) => void): number
    on(sigName: "notify::z-position", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::z-position", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::z-position", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::z-position", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
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
    drawBackground?: boolean | null
    /**
     * If the label background has a shadow
     */
    drawShadow?: boolean | null
    /**
     * The label's ellipsize mode
     */
    ellipsize?: Pango.EllipsizeMode | null
    /**
     * The label's text font name
     */
    fontName?: string | null
    /**
     * The image of the label
     */
    image?: Clutter.Actor | null
    /**
     * If the label is in single line mode
     */
    singleLineMode?: boolean | null
    /**
     * The text of the label
     */
    text?: string | null
    /**
     * The label's text color
     */
    textColor?: Clutter.Color | null
    /**
     * If the label's text uses markup
     */
    useMarkup?: boolean | null
    /**
     * If the label's text wrap is set
     */
    wrap?: boolean | null
    /**
     * The label's text wrap mode
     */
    wrapMode?: Pango.WrapMode | null
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
    drawBackground: boolean
    /**
     * If the label background has a shadow
     */
    drawShadow: boolean
    /**
     * The label's ellipsize mode
     */
    ellipsize: Pango.EllipsizeMode
    /**
     * The label's text font name
     */
    fontName: string
    /**
     * The image of the label
     */
    image: Clutter.Actor
    /**
     * If the label is in single line mode
     */
    singleLineMode: boolean
    /**
     * The text of the label
     */
    text: string
    /**
     * The label's text color
     */
    textColor: Clutter.Color
    /**
     * If the label's text uses markup
     */
    useMarkup: boolean
    /**
     * If the label's text wrap is set
     */
    wrap: boolean
    /**
     * The label's text wrap mode
     */
    wrapMode: Pango.WrapMode

    // Own fields of Champlain-0.12.Champlain.Label

    parent: Marker
    priv: LabelPrivate

    // Owm methods of Champlain-0.12.Champlain.Label

    /**
     * Get the label's text alignment.
     */
    getAlignment(): Pango.Alignment
    /**
     * Gets the label's text attributes.
     */
    getAttributes(): Pango.AttrList
    /**
     * Gets the label's background color.
     */
    getColor(): Clutter.Color
    /**
     * Checks whether the label has a background.
     */
    getDrawBackground(): boolean
    /**
     * Checks whether the label's background has a shadow.
     */
    getDrawShadow(): boolean
    /**
     * Gets the label's text ellipsize mode.
     */
    getEllipsize(): Pango.EllipsizeMode
    /**
     * Gets the label's font name.
     */
    getFontName(): string
    /**
     * Get the label's image.
     */
    getImage(): Clutter.Actor
    /**
     * Checks the label's single line mode.
     */
    getSingleLineMode(): boolean
    /**
     * Get the label's text.
     */
    getText(): string
    /**
     * Gets the label's text color.
     */
    getTextColor(): Clutter.Color
    /**
     * Check whether the label uses markup.
     */
    getUseMarkup(): boolean
    /**
     * Checks whether the label text wraps.
     */
    getWrap(): boolean
    /**
     * Gets the label's text wrap mode.
     */
    getWrapMode(): Pango.WrapMode
    /**
     * Sets the label's text alignment.
     * @param alignment The label's alignment
     */
    setAlignment(alignment: Pango.Alignment): void
    /**
     * Sets the label's text attributes.
     * @param list The label's text attributes.
     */
    setAttributes(list: Pango.AttrList): void
    /**
     * Sets the label's background color.
     * @param color The label's background color or NULL to reset the background to the         default color. The color parameter is copied.
     */
    setColor(color: Clutter.Color | null): void
    /**
     * Sets if the label has a background.
     * @param background value.
     */
    setDrawBackground(background: boolean): void
    /**
     * Sets if the label's background has a shadow.
     * @param shadow value.
     */
    setDrawShadow(shadow: boolean): void
    /**
     * Sets the label's text ellipsize mode.
     * @param mode The label's ellipsize mode.
     */
    setEllipsize(mode: Pango.EllipsizeMode): void
    /**
     * Sets the label's font name such as "Sans 12".
     * @param fontName The label's font name or NULL to reset the font to the default             value.
     */
    setFontName(fontName: string | null): void
    /**
     * Sets the label's image.
     * @param image The image as a `ClutterActor` or NULL to remove the current image.
     */
    setImage(image: Clutter.Actor | null): void
    /**
     * Sets if the label's text is on a single line.
     * @param mode The label's single line mode
     */
    setSingleLineMode(mode: boolean): void
    /**
     * Sets the label's text.
     * @param text The new text of the label
     */
    setText(text: string): void
    /**
     * Sets the label's text color.
     * @param color The label's text color or NULL to reset the text to the default         color. The color parameter is copied.
     */
    setTextColor(color: Clutter.Color | null): void
    /**
     * Sets if the label's text uses markup.
     * @param useMarkup The value
     */
    setUseMarkup(useMarkup: boolean): void
    /**
     * Sets if the label's text wrap.
     * @param wrap The label's wrap.
     */
    setWrap(wrap: boolean): void
    /**
     * Sets the label's text wrap mode.
     * @param wrapMode The label's wrap mode.
     */
    setWrapMode(wrapMode: Pango.WrapMode): void

    // Class property signals of Champlain-0.12.Champlain.Label

    connect(sigName: "notify::alignment", callback: (...args: any[]) => void): number
    on(sigName: "notify::alignment", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::alignment", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::alignment", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::alignment", ...args: any[]): void
    connect(sigName: "notify::color", callback: (...args: any[]) => void): number
    on(sigName: "notify::color", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::color", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::color", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::color", ...args: any[]): void
    connect(sigName: "notify::draw-background", callback: (...args: any[]) => void): number
    on(sigName: "notify::draw-background", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::draw-background", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::draw-background", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::draw-background", ...args: any[]): void
    connect(sigName: "notify::draw-shadow", callback: (...args: any[]) => void): number
    on(sigName: "notify::draw-shadow", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::draw-shadow", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::draw-shadow", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::draw-shadow", ...args: any[]): void
    connect(sigName: "notify::ellipsize", callback: (...args: any[]) => void): number
    on(sigName: "notify::ellipsize", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::ellipsize", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::ellipsize", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::ellipsize", ...args: any[]): void
    connect(sigName: "notify::font-name", callback: (...args: any[]) => void): number
    on(sigName: "notify::font-name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::font-name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::font-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::font-name", ...args: any[]): void
    connect(sigName: "notify::image", callback: (...args: any[]) => void): number
    on(sigName: "notify::image", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::image", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::image", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::image", ...args: any[]): void
    connect(sigName: "notify::single-line-mode", callback: (...args: any[]) => void): number
    on(sigName: "notify::single-line-mode", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::single-line-mode", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::single-line-mode", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::single-line-mode", ...args: any[]): void
    connect(sigName: "notify::text", callback: (...args: any[]) => void): number
    on(sigName: "notify::text", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::text", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::text", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::text", ...args: any[]): void
    connect(sigName: "notify::text-color", callback: (...args: any[]) => void): number
    on(sigName: "notify::text-color", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::text-color", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::text-color", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::text-color", ...args: any[]): void
    connect(sigName: "notify::use-markup", callback: (...args: any[]) => void): number
    on(sigName: "notify::use-markup", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::use-markup", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::use-markup", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::use-markup", ...args: any[]): void
    connect(sigName: "notify::wrap", callback: (...args: any[]) => void): number
    on(sigName: "notify::wrap", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::wrap", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::wrap", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::wrap", ...args: any[]): void
    connect(sigName: "notify::wrap-mode", callback: (...args: any[]) => void): number
    on(sigName: "notify::wrap-mode", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::wrap-mode", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::wrap-mode", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::wrap-mode", ...args: any[]): void
    connect(sigName: "notify::draggable", callback: (...args: any[]) => void): number
    on(sigName: "notify::draggable", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::draggable", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::draggable", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::draggable", ...args: any[]): void
    connect(sigName: "notify::selectable", callback: (...args: any[]) => void): number
    on(sigName: "notify::selectable", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::selectable", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::selectable", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::selectable", ...args: any[]): void
    connect(sigName: "notify::selected", callback: (...args: any[]) => void): number
    on(sigName: "notify::selected", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::selected", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::selected", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::selected", ...args: any[]): void
    connect(sigName: "notify::actions", callback: (...args: any[]) => void): number
    on(sigName: "notify::actions", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::actions", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::actions", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::actions", ...args: any[]): void
    connect(sigName: "notify::allocation", callback: (...args: any[]) => void): number
    on(sigName: "notify::allocation", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::allocation", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::allocation", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::allocation", ...args: any[]): void
    connect(sigName: "notify::anchor-gravity", callback: (...args: any[]) => void): number
    on(sigName: "notify::anchor-gravity", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::anchor-gravity", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::anchor-gravity", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::anchor-gravity", ...args: any[]): void
    connect(sigName: "notify::anchor-x", callback: (...args: any[]) => void): number
    on(sigName: "notify::anchor-x", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::anchor-x", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::anchor-x", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::anchor-x", ...args: any[]): void
    connect(sigName: "notify::anchor-y", callback: (...args: any[]) => void): number
    on(sigName: "notify::anchor-y", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::anchor-y", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::anchor-y", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::anchor-y", ...args: any[]): void
    connect(sigName: "notify::background-color", callback: (...args: any[]) => void): number
    on(sigName: "notify::background-color", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::background-color", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::background-color", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::background-color", ...args: any[]): void
    connect(sigName: "notify::background-color-set", callback: (...args: any[]) => void): number
    on(sigName: "notify::background-color-set", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::background-color-set", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::background-color-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::background-color-set", ...args: any[]): void
    connect(sigName: "notify::child-transform", callback: (...args: any[]) => void): number
    on(sigName: "notify::child-transform", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::child-transform", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::child-transform", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::child-transform", ...args: any[]): void
    connect(sigName: "notify::child-transform-set", callback: (...args: any[]) => void): number
    on(sigName: "notify::child-transform-set", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::child-transform-set", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::child-transform-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::child-transform-set", ...args: any[]): void
    connect(sigName: "notify::clip", callback: (...args: any[]) => void): number
    on(sigName: "notify::clip", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::clip", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::clip", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::clip", ...args: any[]): void
    connect(sigName: "notify::clip-rect", callback: (...args: any[]) => void): number
    on(sigName: "notify::clip-rect", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::clip-rect", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::clip-rect", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::clip-rect", ...args: any[]): void
    connect(sigName: "notify::clip-to-allocation", callback: (...args: any[]) => void): number
    on(sigName: "notify::clip-to-allocation", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::clip-to-allocation", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::clip-to-allocation", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::clip-to-allocation", ...args: any[]): void
    connect(sigName: "notify::constraints", callback: (...args: any[]) => void): number
    on(sigName: "notify::constraints", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::constraints", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::constraints", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::constraints", ...args: any[]): void
    connect(sigName: "notify::content", callback: (...args: any[]) => void): number
    on(sigName: "notify::content", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::content", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::content", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::content", ...args: any[]): void
    connect(sigName: "notify::content-box", callback: (...args: any[]) => void): number
    on(sigName: "notify::content-box", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::content-box", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::content-box", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::content-box", ...args: any[]): void
    connect(sigName: "notify::content-gravity", callback: (...args: any[]) => void): number
    on(sigName: "notify::content-gravity", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::content-gravity", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::content-gravity", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::content-gravity", ...args: any[]): void
    connect(sigName: "notify::content-repeat", callback: (...args: any[]) => void): number
    on(sigName: "notify::content-repeat", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::content-repeat", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::content-repeat", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::content-repeat", ...args: any[]): void
    connect(sigName: "notify::depth", callback: (...args: any[]) => void): number
    on(sigName: "notify::depth", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::depth", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::depth", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::depth", ...args: any[]): void
    connect(sigName: "notify::effect", callback: (...args: any[]) => void): number
    on(sigName: "notify::effect", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::effect", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::effect", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::effect", ...args: any[]): void
    connect(sigName: "notify::first-child", callback: (...args: any[]) => void): number
    on(sigName: "notify::first-child", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::first-child", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::first-child", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::first-child", ...args: any[]): void
    connect(sigName: "notify::fixed-position-set", callback: (...args: any[]) => void): number
    on(sigName: "notify::fixed-position-set", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::fixed-position-set", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::fixed-position-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::fixed-position-set", ...args: any[]): void
    connect(sigName: "notify::fixed-x", callback: (...args: any[]) => void): number
    on(sigName: "notify::fixed-x", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::fixed-x", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::fixed-x", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::fixed-x", ...args: any[]): void
    connect(sigName: "notify::fixed-y", callback: (...args: any[]) => void): number
    on(sigName: "notify::fixed-y", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::fixed-y", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::fixed-y", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::fixed-y", ...args: any[]): void
    connect(sigName: "notify::has-clip", callback: (...args: any[]) => void): number
    on(sigName: "notify::has-clip", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::has-clip", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::has-clip", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::has-clip", ...args: any[]): void
    connect(sigName: "notify::has-pointer", callback: (...args: any[]) => void): number
    on(sigName: "notify::has-pointer", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::has-pointer", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::has-pointer", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::has-pointer", ...args: any[]): void
    connect(sigName: "notify::height", callback: (...args: any[]) => void): number
    on(sigName: "notify::height", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::height", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::height", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::height", ...args: any[]): void
    connect(sigName: "notify::last-child", callback: (...args: any[]) => void): number
    on(sigName: "notify::last-child", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::last-child", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::last-child", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::last-child", ...args: any[]): void
    connect(sigName: "notify::layout-manager", callback: (...args: any[]) => void): number
    on(sigName: "notify::layout-manager", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::layout-manager", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::layout-manager", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::layout-manager", ...args: any[]): void
    connect(sigName: "notify::magnification-filter", callback: (...args: any[]) => void): number
    on(sigName: "notify::magnification-filter", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::magnification-filter", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::magnification-filter", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::magnification-filter", ...args: any[]): void
    connect(sigName: "notify::mapped", callback: (...args: any[]) => void): number
    on(sigName: "notify::mapped", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::mapped", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::mapped", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::mapped", ...args: any[]): void
    connect(sigName: "notify::margin-bottom", callback: (...args: any[]) => void): number
    on(sigName: "notify::margin-bottom", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::margin-bottom", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::margin-bottom", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::margin-bottom", ...args: any[]): void
    connect(sigName: "notify::margin-left", callback: (...args: any[]) => void): number
    on(sigName: "notify::margin-left", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::margin-left", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::margin-left", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::margin-left", ...args: any[]): void
    connect(sigName: "notify::margin-right", callback: (...args: any[]) => void): number
    on(sigName: "notify::margin-right", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::margin-right", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::margin-right", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::margin-right", ...args: any[]): void
    connect(sigName: "notify::margin-top", callback: (...args: any[]) => void): number
    on(sigName: "notify::margin-top", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::margin-top", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::margin-top", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::margin-top", ...args: any[]): void
    connect(sigName: "notify::min-height", callback: (...args: any[]) => void): number
    on(sigName: "notify::min-height", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::min-height", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::min-height", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::min-height", ...args: any[]): void
    connect(sigName: "notify::min-height-set", callback: (...args: any[]) => void): number
    on(sigName: "notify::min-height-set", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::min-height-set", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::min-height-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::min-height-set", ...args: any[]): void
    connect(sigName: "notify::min-width", callback: (...args: any[]) => void): number
    on(sigName: "notify::min-width", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::min-width", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::min-width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::min-width", ...args: any[]): void
    connect(sigName: "notify::min-width-set", callback: (...args: any[]) => void): number
    on(sigName: "notify::min-width-set", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::min-width-set", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::min-width-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::min-width-set", ...args: any[]): void
    connect(sigName: "notify::minification-filter", callback: (...args: any[]) => void): number
    on(sigName: "notify::minification-filter", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::minification-filter", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::minification-filter", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::minification-filter", ...args: any[]): void
    connect(sigName: "notify::name", callback: (...args: any[]) => void): number
    on(sigName: "notify::name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::natural-height", callback: (...args: any[]) => void): number
    on(sigName: "notify::natural-height", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::natural-height", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::natural-height", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::natural-height", ...args: any[]): void
    connect(sigName: "notify::natural-height-set", callback: (...args: any[]) => void): number
    on(sigName: "notify::natural-height-set", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::natural-height-set", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::natural-height-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::natural-height-set", ...args: any[]): void
    connect(sigName: "notify::natural-width", callback: (...args: any[]) => void): number
    on(sigName: "notify::natural-width", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::natural-width", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::natural-width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::natural-width", ...args: any[]): void
    connect(sigName: "notify::natural-width-set", callback: (...args: any[]) => void): number
    on(sigName: "notify::natural-width-set", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::natural-width-set", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::natural-width-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::natural-width-set", ...args: any[]): void
    connect(sigName: "notify::offscreen-redirect", callback: (...args: any[]) => void): number
    on(sigName: "notify::offscreen-redirect", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::offscreen-redirect", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::offscreen-redirect", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::offscreen-redirect", ...args: any[]): void
    connect(sigName: "notify::opacity", callback: (...args: any[]) => void): number
    on(sigName: "notify::opacity", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::opacity", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::opacity", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::opacity", ...args: any[]): void
    connect(sigName: "notify::pivot-point", callback: (...args: any[]) => void): number
    on(sigName: "notify::pivot-point", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::pivot-point", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::pivot-point", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::pivot-point", ...args: any[]): void
    connect(sigName: "notify::pivot-point-z", callback: (...args: any[]) => void): number
    on(sigName: "notify::pivot-point-z", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::pivot-point-z", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::pivot-point-z", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::pivot-point-z", ...args: any[]): void
    connect(sigName: "notify::position", callback: (...args: any[]) => void): number
    on(sigName: "notify::position", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::position", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::position", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::position", ...args: any[]): void
    connect(sigName: "notify::reactive", callback: (...args: any[]) => void): number
    on(sigName: "notify::reactive", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::reactive", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::reactive", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::reactive", ...args: any[]): void
    connect(sigName: "notify::realized", callback: (...args: any[]) => void): number
    on(sigName: "notify::realized", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::realized", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::realized", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::realized", ...args: any[]): void
    connect(sigName: "notify::request-mode", callback: (...args: any[]) => void): number
    on(sigName: "notify::request-mode", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::request-mode", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::request-mode", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::request-mode", ...args: any[]): void
    connect(sigName: "notify::rotation-angle-x", callback: (...args: any[]) => void): number
    on(sigName: "notify::rotation-angle-x", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::rotation-angle-x", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::rotation-angle-x", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::rotation-angle-x", ...args: any[]): void
    connect(sigName: "notify::rotation-angle-y", callback: (...args: any[]) => void): number
    on(sigName: "notify::rotation-angle-y", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::rotation-angle-y", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::rotation-angle-y", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::rotation-angle-y", ...args: any[]): void
    connect(sigName: "notify::rotation-angle-z", callback: (...args: any[]) => void): number
    on(sigName: "notify::rotation-angle-z", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::rotation-angle-z", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::rotation-angle-z", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::rotation-angle-z", ...args: any[]): void
    connect(sigName: "notify::rotation-center-x", callback: (...args: any[]) => void): number
    on(sigName: "notify::rotation-center-x", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::rotation-center-x", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::rotation-center-x", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::rotation-center-x", ...args: any[]): void
    connect(sigName: "notify::rotation-center-y", callback: (...args: any[]) => void): number
    on(sigName: "notify::rotation-center-y", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::rotation-center-y", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::rotation-center-y", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::rotation-center-y", ...args: any[]): void
    connect(sigName: "notify::rotation-center-z", callback: (...args: any[]) => void): number
    on(sigName: "notify::rotation-center-z", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::rotation-center-z", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::rotation-center-z", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::rotation-center-z", ...args: any[]): void
    connect(sigName: "notify::rotation-center-z-gravity", callback: (...args: any[]) => void): number
    on(sigName: "notify::rotation-center-z-gravity", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::rotation-center-z-gravity", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::rotation-center-z-gravity", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::rotation-center-z-gravity", ...args: any[]): void
    connect(sigName: "notify::scale-center-x", callback: (...args: any[]) => void): number
    on(sigName: "notify::scale-center-x", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::scale-center-x", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::scale-center-x", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::scale-center-x", ...args: any[]): void
    connect(sigName: "notify::scale-center-y", callback: (...args: any[]) => void): number
    on(sigName: "notify::scale-center-y", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::scale-center-y", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::scale-center-y", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::scale-center-y", ...args: any[]): void
    connect(sigName: "notify::scale-gravity", callback: (...args: any[]) => void): number
    on(sigName: "notify::scale-gravity", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::scale-gravity", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::scale-gravity", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::scale-gravity", ...args: any[]): void
    connect(sigName: "notify::scale-x", callback: (...args: any[]) => void): number
    on(sigName: "notify::scale-x", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::scale-x", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::scale-x", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::scale-x", ...args: any[]): void
    connect(sigName: "notify::scale-y", callback: (...args: any[]) => void): number
    on(sigName: "notify::scale-y", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::scale-y", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::scale-y", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::scale-y", ...args: any[]): void
    connect(sigName: "notify::scale-z", callback: (...args: any[]) => void): number
    on(sigName: "notify::scale-z", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::scale-z", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::scale-z", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::scale-z", ...args: any[]): void
    connect(sigName: "notify::show-on-set-parent", callback: (...args: any[]) => void): number
    on(sigName: "notify::show-on-set-parent", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::show-on-set-parent", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::show-on-set-parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::show-on-set-parent", ...args: any[]): void
    connect(sigName: "notify::size", callback: (...args: any[]) => void): number
    on(sigName: "notify::size", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::size", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::size", ...args: any[]): void
    connect(sigName: "notify::text-direction", callback: (...args: any[]) => void): number
    on(sigName: "notify::text-direction", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::text-direction", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::text-direction", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::text-direction", ...args: any[]): void
    connect(sigName: "notify::transform", callback: (...args: any[]) => void): number
    on(sigName: "notify::transform", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::transform", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::transform", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::transform", ...args: any[]): void
    connect(sigName: "notify::transform-set", callback: (...args: any[]) => void): number
    on(sigName: "notify::transform-set", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::transform-set", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::transform-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::transform-set", ...args: any[]): void
    connect(sigName: "notify::translation-x", callback: (...args: any[]) => void): number
    on(sigName: "notify::translation-x", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::translation-x", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::translation-x", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::translation-x", ...args: any[]): void
    connect(sigName: "notify::translation-y", callback: (...args: any[]) => void): number
    on(sigName: "notify::translation-y", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::translation-y", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::translation-y", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::translation-y", ...args: any[]): void
    connect(sigName: "notify::translation-z", callback: (...args: any[]) => void): number
    on(sigName: "notify::translation-z", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::translation-z", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::translation-z", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::translation-z", ...args: any[]): void
    connect(sigName: "notify::visible", callback: (...args: any[]) => void): number
    on(sigName: "notify::visible", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::visible", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::visible", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::visible", ...args: any[]): void
    connect(sigName: "notify::width", callback: (...args: any[]) => void): number
    on(sigName: "notify::width", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::width", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::width", ...args: any[]): void
    connect(sigName: "notify::x", callback: (...args: any[]) => void): number
    on(sigName: "notify::x", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::x", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::x", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::x", ...args: any[]): void
    connect(sigName: "notify::x-align", callback: (...args: any[]) => void): number
    on(sigName: "notify::x-align", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::x-align", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::x-align", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::x-align", ...args: any[]): void
    connect(sigName: "notify::x-expand", callback: (...args: any[]) => void): number
    on(sigName: "notify::x-expand", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::x-expand", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::x-expand", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::x-expand", ...args: any[]): void
    connect(sigName: "notify::y", callback: (...args: any[]) => void): number
    on(sigName: "notify::y", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::y", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::y", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::y", ...args: any[]): void
    connect(sigName: "notify::y-align", callback: (...args: any[]) => void): number
    on(sigName: "notify::y-align", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::y-align", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::y-align", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::y-align", ...args: any[]): void
    connect(sigName: "notify::y-expand", callback: (...args: any[]) => void): number
    on(sigName: "notify::y-expand", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::y-expand", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::y-expand", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::y-expand", ...args: any[]): void
    connect(sigName: "notify::z-position", callback: (...args: any[]) => void): number
    on(sigName: "notify::z-position", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::z-position", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::z-position", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::z-position", ...args: any[]): void
    connect(sigName: "notify::latitude", callback: (...args: any[]) => void): number
    on(sigName: "notify::latitude", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::latitude", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::latitude", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::latitude", ...args: any[]): void
    connect(sigName: "notify::longitude", callback: (...args: any[]) => void): number
    on(sigName: "notify::longitude", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::longitude", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::longitude", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::longitude", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
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
    static newFromFile(filename: string): Label
    /**
     * Creates a new instance of #ChamplainLabel consisting of a custom #ClutterActor.
     * @constructor 
     * @param text The text of the label
     * @param actor The image as a `ClutterActor`
     */
    static newFull(text: string, actor: Clutter.Actor): Label
    /**
     * Creates a new instance of #ChamplainLabel with image.
     * @constructor 
     * @param actor The image as a `ClutterActor`.
     */
    static newWithImage(actor: Clutter.Actor): Label
    /**
     * Creates a new instance of #ChamplainLabel with text value.
     * @constructor 
     * @param text the text of the label
     * @param font the font to use to draw the text, for example "Courrier Bold 11", can be NULL
     * @param textColor a #ClutterColor, the color of the text, can be NULL
     * @param labelColor a #ClutterColor, the color of the label, can be NULL
     */
    static newWithText(text: string, font: string | null, textColor: Clutter.Color | null, labelColor: Clutter.Color | null): Label
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
    getBoundingBox(): BoundingBox
    /**
     * #ChamplainView calls this method to pass a reference to itself to the layer
     * when the layer is added to the view. When the layer is removed from the
     * view, it passes %NULL to the layer. Custom layers can implement this method
     * and perform the necessary initialization. This method should not be called
     * by user code.
     * @param view a #ChamplainView
     */
    setView(view: View | null): void

    // Class property signals of Champlain-0.12.Champlain.Layer

    connect(sigName: "notify::actions", callback: (...args: any[]) => void): number
    on(sigName: "notify::actions", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::actions", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::actions", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::actions", ...args: any[]): void
    connect(sigName: "notify::allocation", callback: (...args: any[]) => void): number
    on(sigName: "notify::allocation", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::allocation", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::allocation", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::allocation", ...args: any[]): void
    connect(sigName: "notify::anchor-gravity", callback: (...args: any[]) => void): number
    on(sigName: "notify::anchor-gravity", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::anchor-gravity", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::anchor-gravity", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::anchor-gravity", ...args: any[]): void
    connect(sigName: "notify::anchor-x", callback: (...args: any[]) => void): number
    on(sigName: "notify::anchor-x", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::anchor-x", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::anchor-x", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::anchor-x", ...args: any[]): void
    connect(sigName: "notify::anchor-y", callback: (...args: any[]) => void): number
    on(sigName: "notify::anchor-y", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::anchor-y", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::anchor-y", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::anchor-y", ...args: any[]): void
    connect(sigName: "notify::background-color", callback: (...args: any[]) => void): number
    on(sigName: "notify::background-color", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::background-color", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::background-color", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::background-color", ...args: any[]): void
    connect(sigName: "notify::background-color-set", callback: (...args: any[]) => void): number
    on(sigName: "notify::background-color-set", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::background-color-set", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::background-color-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::background-color-set", ...args: any[]): void
    connect(sigName: "notify::child-transform", callback: (...args: any[]) => void): number
    on(sigName: "notify::child-transform", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::child-transform", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::child-transform", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::child-transform", ...args: any[]): void
    connect(sigName: "notify::child-transform-set", callback: (...args: any[]) => void): number
    on(sigName: "notify::child-transform-set", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::child-transform-set", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::child-transform-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::child-transform-set", ...args: any[]): void
    connect(sigName: "notify::clip", callback: (...args: any[]) => void): number
    on(sigName: "notify::clip", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::clip", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::clip", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::clip", ...args: any[]): void
    connect(sigName: "notify::clip-rect", callback: (...args: any[]) => void): number
    on(sigName: "notify::clip-rect", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::clip-rect", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::clip-rect", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::clip-rect", ...args: any[]): void
    connect(sigName: "notify::clip-to-allocation", callback: (...args: any[]) => void): number
    on(sigName: "notify::clip-to-allocation", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::clip-to-allocation", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::clip-to-allocation", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::clip-to-allocation", ...args: any[]): void
    connect(sigName: "notify::constraints", callback: (...args: any[]) => void): number
    on(sigName: "notify::constraints", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::constraints", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::constraints", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::constraints", ...args: any[]): void
    connect(sigName: "notify::content", callback: (...args: any[]) => void): number
    on(sigName: "notify::content", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::content", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::content", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::content", ...args: any[]): void
    connect(sigName: "notify::content-box", callback: (...args: any[]) => void): number
    on(sigName: "notify::content-box", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::content-box", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::content-box", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::content-box", ...args: any[]): void
    connect(sigName: "notify::content-gravity", callback: (...args: any[]) => void): number
    on(sigName: "notify::content-gravity", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::content-gravity", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::content-gravity", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::content-gravity", ...args: any[]): void
    connect(sigName: "notify::content-repeat", callback: (...args: any[]) => void): number
    on(sigName: "notify::content-repeat", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::content-repeat", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::content-repeat", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::content-repeat", ...args: any[]): void
    connect(sigName: "notify::depth", callback: (...args: any[]) => void): number
    on(sigName: "notify::depth", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::depth", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::depth", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::depth", ...args: any[]): void
    connect(sigName: "notify::effect", callback: (...args: any[]) => void): number
    on(sigName: "notify::effect", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::effect", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::effect", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::effect", ...args: any[]): void
    connect(sigName: "notify::first-child", callback: (...args: any[]) => void): number
    on(sigName: "notify::first-child", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::first-child", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::first-child", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::first-child", ...args: any[]): void
    connect(sigName: "notify::fixed-position-set", callback: (...args: any[]) => void): number
    on(sigName: "notify::fixed-position-set", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::fixed-position-set", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::fixed-position-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::fixed-position-set", ...args: any[]): void
    connect(sigName: "notify::fixed-x", callback: (...args: any[]) => void): number
    on(sigName: "notify::fixed-x", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::fixed-x", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::fixed-x", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::fixed-x", ...args: any[]): void
    connect(sigName: "notify::fixed-y", callback: (...args: any[]) => void): number
    on(sigName: "notify::fixed-y", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::fixed-y", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::fixed-y", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::fixed-y", ...args: any[]): void
    connect(sigName: "notify::has-clip", callback: (...args: any[]) => void): number
    on(sigName: "notify::has-clip", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::has-clip", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::has-clip", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::has-clip", ...args: any[]): void
    connect(sigName: "notify::has-pointer", callback: (...args: any[]) => void): number
    on(sigName: "notify::has-pointer", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::has-pointer", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::has-pointer", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::has-pointer", ...args: any[]): void
    connect(sigName: "notify::height", callback: (...args: any[]) => void): number
    on(sigName: "notify::height", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::height", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::height", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::height", ...args: any[]): void
    connect(sigName: "notify::last-child", callback: (...args: any[]) => void): number
    on(sigName: "notify::last-child", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::last-child", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::last-child", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::last-child", ...args: any[]): void
    connect(sigName: "notify::layout-manager", callback: (...args: any[]) => void): number
    on(sigName: "notify::layout-manager", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::layout-manager", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::layout-manager", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::layout-manager", ...args: any[]): void
    connect(sigName: "notify::magnification-filter", callback: (...args: any[]) => void): number
    on(sigName: "notify::magnification-filter", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::magnification-filter", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::magnification-filter", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::magnification-filter", ...args: any[]): void
    connect(sigName: "notify::mapped", callback: (...args: any[]) => void): number
    on(sigName: "notify::mapped", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::mapped", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::mapped", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::mapped", ...args: any[]): void
    connect(sigName: "notify::margin-bottom", callback: (...args: any[]) => void): number
    on(sigName: "notify::margin-bottom", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::margin-bottom", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::margin-bottom", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::margin-bottom", ...args: any[]): void
    connect(sigName: "notify::margin-left", callback: (...args: any[]) => void): number
    on(sigName: "notify::margin-left", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::margin-left", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::margin-left", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::margin-left", ...args: any[]): void
    connect(sigName: "notify::margin-right", callback: (...args: any[]) => void): number
    on(sigName: "notify::margin-right", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::margin-right", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::margin-right", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::margin-right", ...args: any[]): void
    connect(sigName: "notify::margin-top", callback: (...args: any[]) => void): number
    on(sigName: "notify::margin-top", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::margin-top", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::margin-top", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::margin-top", ...args: any[]): void
    connect(sigName: "notify::min-height", callback: (...args: any[]) => void): number
    on(sigName: "notify::min-height", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::min-height", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::min-height", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::min-height", ...args: any[]): void
    connect(sigName: "notify::min-height-set", callback: (...args: any[]) => void): number
    on(sigName: "notify::min-height-set", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::min-height-set", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::min-height-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::min-height-set", ...args: any[]): void
    connect(sigName: "notify::min-width", callback: (...args: any[]) => void): number
    on(sigName: "notify::min-width", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::min-width", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::min-width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::min-width", ...args: any[]): void
    connect(sigName: "notify::min-width-set", callback: (...args: any[]) => void): number
    on(sigName: "notify::min-width-set", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::min-width-set", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::min-width-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::min-width-set", ...args: any[]): void
    connect(sigName: "notify::minification-filter", callback: (...args: any[]) => void): number
    on(sigName: "notify::minification-filter", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::minification-filter", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::minification-filter", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::minification-filter", ...args: any[]): void
    connect(sigName: "notify::name", callback: (...args: any[]) => void): number
    on(sigName: "notify::name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::natural-height", callback: (...args: any[]) => void): number
    on(sigName: "notify::natural-height", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::natural-height", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::natural-height", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::natural-height", ...args: any[]): void
    connect(sigName: "notify::natural-height-set", callback: (...args: any[]) => void): number
    on(sigName: "notify::natural-height-set", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::natural-height-set", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::natural-height-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::natural-height-set", ...args: any[]): void
    connect(sigName: "notify::natural-width", callback: (...args: any[]) => void): number
    on(sigName: "notify::natural-width", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::natural-width", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::natural-width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::natural-width", ...args: any[]): void
    connect(sigName: "notify::natural-width-set", callback: (...args: any[]) => void): number
    on(sigName: "notify::natural-width-set", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::natural-width-set", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::natural-width-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::natural-width-set", ...args: any[]): void
    connect(sigName: "notify::offscreen-redirect", callback: (...args: any[]) => void): number
    on(sigName: "notify::offscreen-redirect", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::offscreen-redirect", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::offscreen-redirect", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::offscreen-redirect", ...args: any[]): void
    connect(sigName: "notify::opacity", callback: (...args: any[]) => void): number
    on(sigName: "notify::opacity", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::opacity", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::opacity", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::opacity", ...args: any[]): void
    connect(sigName: "notify::pivot-point", callback: (...args: any[]) => void): number
    on(sigName: "notify::pivot-point", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::pivot-point", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::pivot-point", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::pivot-point", ...args: any[]): void
    connect(sigName: "notify::pivot-point-z", callback: (...args: any[]) => void): number
    on(sigName: "notify::pivot-point-z", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::pivot-point-z", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::pivot-point-z", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::pivot-point-z", ...args: any[]): void
    connect(sigName: "notify::position", callback: (...args: any[]) => void): number
    on(sigName: "notify::position", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::position", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::position", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::position", ...args: any[]): void
    connect(sigName: "notify::reactive", callback: (...args: any[]) => void): number
    on(sigName: "notify::reactive", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::reactive", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::reactive", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::reactive", ...args: any[]): void
    connect(sigName: "notify::realized", callback: (...args: any[]) => void): number
    on(sigName: "notify::realized", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::realized", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::realized", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::realized", ...args: any[]): void
    connect(sigName: "notify::request-mode", callback: (...args: any[]) => void): number
    on(sigName: "notify::request-mode", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::request-mode", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::request-mode", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::request-mode", ...args: any[]): void
    connect(sigName: "notify::rotation-angle-x", callback: (...args: any[]) => void): number
    on(sigName: "notify::rotation-angle-x", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::rotation-angle-x", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::rotation-angle-x", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::rotation-angle-x", ...args: any[]): void
    connect(sigName: "notify::rotation-angle-y", callback: (...args: any[]) => void): number
    on(sigName: "notify::rotation-angle-y", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::rotation-angle-y", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::rotation-angle-y", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::rotation-angle-y", ...args: any[]): void
    connect(sigName: "notify::rotation-angle-z", callback: (...args: any[]) => void): number
    on(sigName: "notify::rotation-angle-z", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::rotation-angle-z", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::rotation-angle-z", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::rotation-angle-z", ...args: any[]): void
    connect(sigName: "notify::rotation-center-x", callback: (...args: any[]) => void): number
    on(sigName: "notify::rotation-center-x", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::rotation-center-x", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::rotation-center-x", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::rotation-center-x", ...args: any[]): void
    connect(sigName: "notify::rotation-center-y", callback: (...args: any[]) => void): number
    on(sigName: "notify::rotation-center-y", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::rotation-center-y", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::rotation-center-y", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::rotation-center-y", ...args: any[]): void
    connect(sigName: "notify::rotation-center-z", callback: (...args: any[]) => void): number
    on(sigName: "notify::rotation-center-z", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::rotation-center-z", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::rotation-center-z", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::rotation-center-z", ...args: any[]): void
    connect(sigName: "notify::rotation-center-z-gravity", callback: (...args: any[]) => void): number
    on(sigName: "notify::rotation-center-z-gravity", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::rotation-center-z-gravity", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::rotation-center-z-gravity", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::rotation-center-z-gravity", ...args: any[]): void
    connect(sigName: "notify::scale-center-x", callback: (...args: any[]) => void): number
    on(sigName: "notify::scale-center-x", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::scale-center-x", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::scale-center-x", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::scale-center-x", ...args: any[]): void
    connect(sigName: "notify::scale-center-y", callback: (...args: any[]) => void): number
    on(sigName: "notify::scale-center-y", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::scale-center-y", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::scale-center-y", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::scale-center-y", ...args: any[]): void
    connect(sigName: "notify::scale-gravity", callback: (...args: any[]) => void): number
    on(sigName: "notify::scale-gravity", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::scale-gravity", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::scale-gravity", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::scale-gravity", ...args: any[]): void
    connect(sigName: "notify::scale-x", callback: (...args: any[]) => void): number
    on(sigName: "notify::scale-x", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::scale-x", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::scale-x", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::scale-x", ...args: any[]): void
    connect(sigName: "notify::scale-y", callback: (...args: any[]) => void): number
    on(sigName: "notify::scale-y", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::scale-y", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::scale-y", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::scale-y", ...args: any[]): void
    connect(sigName: "notify::scale-z", callback: (...args: any[]) => void): number
    on(sigName: "notify::scale-z", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::scale-z", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::scale-z", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::scale-z", ...args: any[]): void
    connect(sigName: "notify::show-on-set-parent", callback: (...args: any[]) => void): number
    on(sigName: "notify::show-on-set-parent", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::show-on-set-parent", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::show-on-set-parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::show-on-set-parent", ...args: any[]): void
    connect(sigName: "notify::size", callback: (...args: any[]) => void): number
    on(sigName: "notify::size", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::size", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::size", ...args: any[]): void
    connect(sigName: "notify::text-direction", callback: (...args: any[]) => void): number
    on(sigName: "notify::text-direction", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::text-direction", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::text-direction", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::text-direction", ...args: any[]): void
    connect(sigName: "notify::transform", callback: (...args: any[]) => void): number
    on(sigName: "notify::transform", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::transform", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::transform", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::transform", ...args: any[]): void
    connect(sigName: "notify::transform-set", callback: (...args: any[]) => void): number
    on(sigName: "notify::transform-set", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::transform-set", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::transform-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::transform-set", ...args: any[]): void
    connect(sigName: "notify::translation-x", callback: (...args: any[]) => void): number
    on(sigName: "notify::translation-x", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::translation-x", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::translation-x", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::translation-x", ...args: any[]): void
    connect(sigName: "notify::translation-y", callback: (...args: any[]) => void): number
    on(sigName: "notify::translation-y", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::translation-y", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::translation-y", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::translation-y", ...args: any[]): void
    connect(sigName: "notify::translation-z", callback: (...args: any[]) => void): number
    on(sigName: "notify::translation-z", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::translation-z", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::translation-z", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::translation-z", ...args: any[]): void
    connect(sigName: "notify::visible", callback: (...args: any[]) => void): number
    on(sigName: "notify::visible", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::visible", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::visible", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::visible", ...args: any[]): void
    connect(sigName: "notify::width", callback: (...args: any[]) => void): number
    on(sigName: "notify::width", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::width", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::width", ...args: any[]): void
    connect(sigName: "notify::x", callback: (...args: any[]) => void): number
    on(sigName: "notify::x", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::x", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::x", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::x", ...args: any[]): void
    connect(sigName: "notify::x-align", callback: (...args: any[]) => void): number
    on(sigName: "notify::x-align", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::x-align", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::x-align", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::x-align", ...args: any[]): void
    connect(sigName: "notify::x-expand", callback: (...args: any[]) => void): number
    on(sigName: "notify::x-expand", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::x-expand", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::x-expand", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::x-expand", ...args: any[]): void
    connect(sigName: "notify::y", callback: (...args: any[]) => void): number
    on(sigName: "notify::y", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::y", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::y", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::y", ...args: any[]): void
    connect(sigName: "notify::y-align", callback: (...args: any[]) => void): number
    on(sigName: "notify::y-align", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::y-align", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::y-align", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::y-align", ...args: any[]): void
    connect(sigName: "notify::y-expand", callback: (...args: any[]) => void): number
    on(sigName: "notify::y-expand", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::y-expand", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::y-expand", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::y-expand", ...args: any[]): void
    connect(sigName: "notify::z-position", callback: (...args: any[]) => void): number
    on(sigName: "notify::z-position", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::z-position", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::z-position", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::z-position", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
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
    extraText?: string | null
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
    extraText: string

    // Own fields of Champlain-0.12.Champlain.License

    parent: Clutter.Actor
    priv: LicensePrivate

    // Owm methods of Champlain-0.12.Champlain.License

    /**
     * This method connects to the necessary signals of #ChamplainView to make the
     * license change automatically when the map source changes.
     * @param view a #ChamplainView
     */
    connectView(view: View): void
    /**
     * This method disconnects from the signals previously connected by champlain_license_connect_view().
     */
    disconnectView(): void
    /**
     * Get the license's text alignment.
     */
    getAlignment(): Pango.Alignment
    /**
     * Gets the additional license text.
     */
    getExtraText(): string
    /**
     * Set the license's text alignment.
     * @param alignment The license's text alignment
     */
    setAlignment(alignment: Pango.Alignment): void
    /**
     * Show the additional license text on the map view.  The text will preceed the
     * map's licence when displayed. Use "\n" to separate the lines.
     * @param text the additional license text
     */
    setExtraText(text: string): void

    // Class property signals of Champlain-0.12.Champlain.License

    connect(sigName: "notify::alignment", callback: (...args: any[]) => void): number
    on(sigName: "notify::alignment", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::alignment", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::alignment", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::alignment", ...args: any[]): void
    connect(sigName: "notify::extra-text", callback: (...args: any[]) => void): number
    on(sigName: "notify::extra-text", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::extra-text", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::extra-text", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::extra-text", ...args: any[]): void
    connect(sigName: "notify::actions", callback: (...args: any[]) => void): number
    on(sigName: "notify::actions", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::actions", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::actions", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::actions", ...args: any[]): void
    connect(sigName: "notify::allocation", callback: (...args: any[]) => void): number
    on(sigName: "notify::allocation", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::allocation", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::allocation", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::allocation", ...args: any[]): void
    connect(sigName: "notify::anchor-gravity", callback: (...args: any[]) => void): number
    on(sigName: "notify::anchor-gravity", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::anchor-gravity", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::anchor-gravity", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::anchor-gravity", ...args: any[]): void
    connect(sigName: "notify::anchor-x", callback: (...args: any[]) => void): number
    on(sigName: "notify::anchor-x", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::anchor-x", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::anchor-x", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::anchor-x", ...args: any[]): void
    connect(sigName: "notify::anchor-y", callback: (...args: any[]) => void): number
    on(sigName: "notify::anchor-y", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::anchor-y", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::anchor-y", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::anchor-y", ...args: any[]): void
    connect(sigName: "notify::background-color", callback: (...args: any[]) => void): number
    on(sigName: "notify::background-color", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::background-color", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::background-color", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::background-color", ...args: any[]): void
    connect(sigName: "notify::background-color-set", callback: (...args: any[]) => void): number
    on(sigName: "notify::background-color-set", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::background-color-set", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::background-color-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::background-color-set", ...args: any[]): void
    connect(sigName: "notify::child-transform", callback: (...args: any[]) => void): number
    on(sigName: "notify::child-transform", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::child-transform", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::child-transform", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::child-transform", ...args: any[]): void
    connect(sigName: "notify::child-transform-set", callback: (...args: any[]) => void): number
    on(sigName: "notify::child-transform-set", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::child-transform-set", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::child-transform-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::child-transform-set", ...args: any[]): void
    connect(sigName: "notify::clip", callback: (...args: any[]) => void): number
    on(sigName: "notify::clip", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::clip", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::clip", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::clip", ...args: any[]): void
    connect(sigName: "notify::clip-rect", callback: (...args: any[]) => void): number
    on(sigName: "notify::clip-rect", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::clip-rect", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::clip-rect", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::clip-rect", ...args: any[]): void
    connect(sigName: "notify::clip-to-allocation", callback: (...args: any[]) => void): number
    on(sigName: "notify::clip-to-allocation", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::clip-to-allocation", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::clip-to-allocation", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::clip-to-allocation", ...args: any[]): void
    connect(sigName: "notify::constraints", callback: (...args: any[]) => void): number
    on(sigName: "notify::constraints", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::constraints", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::constraints", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::constraints", ...args: any[]): void
    connect(sigName: "notify::content", callback: (...args: any[]) => void): number
    on(sigName: "notify::content", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::content", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::content", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::content", ...args: any[]): void
    connect(sigName: "notify::content-box", callback: (...args: any[]) => void): number
    on(sigName: "notify::content-box", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::content-box", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::content-box", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::content-box", ...args: any[]): void
    connect(sigName: "notify::content-gravity", callback: (...args: any[]) => void): number
    on(sigName: "notify::content-gravity", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::content-gravity", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::content-gravity", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::content-gravity", ...args: any[]): void
    connect(sigName: "notify::content-repeat", callback: (...args: any[]) => void): number
    on(sigName: "notify::content-repeat", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::content-repeat", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::content-repeat", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::content-repeat", ...args: any[]): void
    connect(sigName: "notify::depth", callback: (...args: any[]) => void): number
    on(sigName: "notify::depth", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::depth", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::depth", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::depth", ...args: any[]): void
    connect(sigName: "notify::effect", callback: (...args: any[]) => void): number
    on(sigName: "notify::effect", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::effect", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::effect", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::effect", ...args: any[]): void
    connect(sigName: "notify::first-child", callback: (...args: any[]) => void): number
    on(sigName: "notify::first-child", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::first-child", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::first-child", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::first-child", ...args: any[]): void
    connect(sigName: "notify::fixed-position-set", callback: (...args: any[]) => void): number
    on(sigName: "notify::fixed-position-set", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::fixed-position-set", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::fixed-position-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::fixed-position-set", ...args: any[]): void
    connect(sigName: "notify::fixed-x", callback: (...args: any[]) => void): number
    on(sigName: "notify::fixed-x", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::fixed-x", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::fixed-x", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::fixed-x", ...args: any[]): void
    connect(sigName: "notify::fixed-y", callback: (...args: any[]) => void): number
    on(sigName: "notify::fixed-y", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::fixed-y", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::fixed-y", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::fixed-y", ...args: any[]): void
    connect(sigName: "notify::has-clip", callback: (...args: any[]) => void): number
    on(sigName: "notify::has-clip", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::has-clip", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::has-clip", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::has-clip", ...args: any[]): void
    connect(sigName: "notify::has-pointer", callback: (...args: any[]) => void): number
    on(sigName: "notify::has-pointer", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::has-pointer", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::has-pointer", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::has-pointer", ...args: any[]): void
    connect(sigName: "notify::height", callback: (...args: any[]) => void): number
    on(sigName: "notify::height", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::height", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::height", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::height", ...args: any[]): void
    connect(sigName: "notify::last-child", callback: (...args: any[]) => void): number
    on(sigName: "notify::last-child", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::last-child", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::last-child", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::last-child", ...args: any[]): void
    connect(sigName: "notify::layout-manager", callback: (...args: any[]) => void): number
    on(sigName: "notify::layout-manager", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::layout-manager", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::layout-manager", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::layout-manager", ...args: any[]): void
    connect(sigName: "notify::magnification-filter", callback: (...args: any[]) => void): number
    on(sigName: "notify::magnification-filter", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::magnification-filter", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::magnification-filter", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::magnification-filter", ...args: any[]): void
    connect(sigName: "notify::mapped", callback: (...args: any[]) => void): number
    on(sigName: "notify::mapped", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::mapped", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::mapped", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::mapped", ...args: any[]): void
    connect(sigName: "notify::margin-bottom", callback: (...args: any[]) => void): number
    on(sigName: "notify::margin-bottom", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::margin-bottom", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::margin-bottom", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::margin-bottom", ...args: any[]): void
    connect(sigName: "notify::margin-left", callback: (...args: any[]) => void): number
    on(sigName: "notify::margin-left", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::margin-left", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::margin-left", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::margin-left", ...args: any[]): void
    connect(sigName: "notify::margin-right", callback: (...args: any[]) => void): number
    on(sigName: "notify::margin-right", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::margin-right", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::margin-right", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::margin-right", ...args: any[]): void
    connect(sigName: "notify::margin-top", callback: (...args: any[]) => void): number
    on(sigName: "notify::margin-top", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::margin-top", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::margin-top", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::margin-top", ...args: any[]): void
    connect(sigName: "notify::min-height", callback: (...args: any[]) => void): number
    on(sigName: "notify::min-height", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::min-height", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::min-height", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::min-height", ...args: any[]): void
    connect(sigName: "notify::min-height-set", callback: (...args: any[]) => void): number
    on(sigName: "notify::min-height-set", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::min-height-set", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::min-height-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::min-height-set", ...args: any[]): void
    connect(sigName: "notify::min-width", callback: (...args: any[]) => void): number
    on(sigName: "notify::min-width", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::min-width", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::min-width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::min-width", ...args: any[]): void
    connect(sigName: "notify::min-width-set", callback: (...args: any[]) => void): number
    on(sigName: "notify::min-width-set", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::min-width-set", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::min-width-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::min-width-set", ...args: any[]): void
    connect(sigName: "notify::minification-filter", callback: (...args: any[]) => void): number
    on(sigName: "notify::minification-filter", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::minification-filter", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::minification-filter", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::minification-filter", ...args: any[]): void
    connect(sigName: "notify::name", callback: (...args: any[]) => void): number
    on(sigName: "notify::name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::natural-height", callback: (...args: any[]) => void): number
    on(sigName: "notify::natural-height", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::natural-height", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::natural-height", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::natural-height", ...args: any[]): void
    connect(sigName: "notify::natural-height-set", callback: (...args: any[]) => void): number
    on(sigName: "notify::natural-height-set", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::natural-height-set", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::natural-height-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::natural-height-set", ...args: any[]): void
    connect(sigName: "notify::natural-width", callback: (...args: any[]) => void): number
    on(sigName: "notify::natural-width", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::natural-width", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::natural-width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::natural-width", ...args: any[]): void
    connect(sigName: "notify::natural-width-set", callback: (...args: any[]) => void): number
    on(sigName: "notify::natural-width-set", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::natural-width-set", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::natural-width-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::natural-width-set", ...args: any[]): void
    connect(sigName: "notify::offscreen-redirect", callback: (...args: any[]) => void): number
    on(sigName: "notify::offscreen-redirect", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::offscreen-redirect", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::offscreen-redirect", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::offscreen-redirect", ...args: any[]): void
    connect(sigName: "notify::opacity", callback: (...args: any[]) => void): number
    on(sigName: "notify::opacity", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::opacity", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::opacity", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::opacity", ...args: any[]): void
    connect(sigName: "notify::pivot-point", callback: (...args: any[]) => void): number
    on(sigName: "notify::pivot-point", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::pivot-point", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::pivot-point", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::pivot-point", ...args: any[]): void
    connect(sigName: "notify::pivot-point-z", callback: (...args: any[]) => void): number
    on(sigName: "notify::pivot-point-z", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::pivot-point-z", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::pivot-point-z", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::pivot-point-z", ...args: any[]): void
    connect(sigName: "notify::position", callback: (...args: any[]) => void): number
    on(sigName: "notify::position", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::position", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::position", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::position", ...args: any[]): void
    connect(sigName: "notify::reactive", callback: (...args: any[]) => void): number
    on(sigName: "notify::reactive", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::reactive", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::reactive", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::reactive", ...args: any[]): void
    connect(sigName: "notify::realized", callback: (...args: any[]) => void): number
    on(sigName: "notify::realized", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::realized", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::realized", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::realized", ...args: any[]): void
    connect(sigName: "notify::request-mode", callback: (...args: any[]) => void): number
    on(sigName: "notify::request-mode", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::request-mode", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::request-mode", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::request-mode", ...args: any[]): void
    connect(sigName: "notify::rotation-angle-x", callback: (...args: any[]) => void): number
    on(sigName: "notify::rotation-angle-x", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::rotation-angle-x", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::rotation-angle-x", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::rotation-angle-x", ...args: any[]): void
    connect(sigName: "notify::rotation-angle-y", callback: (...args: any[]) => void): number
    on(sigName: "notify::rotation-angle-y", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::rotation-angle-y", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::rotation-angle-y", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::rotation-angle-y", ...args: any[]): void
    connect(sigName: "notify::rotation-angle-z", callback: (...args: any[]) => void): number
    on(sigName: "notify::rotation-angle-z", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::rotation-angle-z", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::rotation-angle-z", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::rotation-angle-z", ...args: any[]): void
    connect(sigName: "notify::rotation-center-x", callback: (...args: any[]) => void): number
    on(sigName: "notify::rotation-center-x", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::rotation-center-x", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::rotation-center-x", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::rotation-center-x", ...args: any[]): void
    connect(sigName: "notify::rotation-center-y", callback: (...args: any[]) => void): number
    on(sigName: "notify::rotation-center-y", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::rotation-center-y", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::rotation-center-y", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::rotation-center-y", ...args: any[]): void
    connect(sigName: "notify::rotation-center-z", callback: (...args: any[]) => void): number
    on(sigName: "notify::rotation-center-z", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::rotation-center-z", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::rotation-center-z", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::rotation-center-z", ...args: any[]): void
    connect(sigName: "notify::rotation-center-z-gravity", callback: (...args: any[]) => void): number
    on(sigName: "notify::rotation-center-z-gravity", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::rotation-center-z-gravity", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::rotation-center-z-gravity", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::rotation-center-z-gravity", ...args: any[]): void
    connect(sigName: "notify::scale-center-x", callback: (...args: any[]) => void): number
    on(sigName: "notify::scale-center-x", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::scale-center-x", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::scale-center-x", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::scale-center-x", ...args: any[]): void
    connect(sigName: "notify::scale-center-y", callback: (...args: any[]) => void): number
    on(sigName: "notify::scale-center-y", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::scale-center-y", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::scale-center-y", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::scale-center-y", ...args: any[]): void
    connect(sigName: "notify::scale-gravity", callback: (...args: any[]) => void): number
    on(sigName: "notify::scale-gravity", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::scale-gravity", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::scale-gravity", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::scale-gravity", ...args: any[]): void
    connect(sigName: "notify::scale-x", callback: (...args: any[]) => void): number
    on(sigName: "notify::scale-x", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::scale-x", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::scale-x", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::scale-x", ...args: any[]): void
    connect(sigName: "notify::scale-y", callback: (...args: any[]) => void): number
    on(sigName: "notify::scale-y", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::scale-y", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::scale-y", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::scale-y", ...args: any[]): void
    connect(sigName: "notify::scale-z", callback: (...args: any[]) => void): number
    on(sigName: "notify::scale-z", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::scale-z", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::scale-z", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::scale-z", ...args: any[]): void
    connect(sigName: "notify::show-on-set-parent", callback: (...args: any[]) => void): number
    on(sigName: "notify::show-on-set-parent", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::show-on-set-parent", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::show-on-set-parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::show-on-set-parent", ...args: any[]): void
    connect(sigName: "notify::size", callback: (...args: any[]) => void): number
    on(sigName: "notify::size", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::size", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::size", ...args: any[]): void
    connect(sigName: "notify::text-direction", callback: (...args: any[]) => void): number
    on(sigName: "notify::text-direction", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::text-direction", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::text-direction", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::text-direction", ...args: any[]): void
    connect(sigName: "notify::transform", callback: (...args: any[]) => void): number
    on(sigName: "notify::transform", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::transform", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::transform", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::transform", ...args: any[]): void
    connect(sigName: "notify::transform-set", callback: (...args: any[]) => void): number
    on(sigName: "notify::transform-set", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::transform-set", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::transform-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::transform-set", ...args: any[]): void
    connect(sigName: "notify::translation-x", callback: (...args: any[]) => void): number
    on(sigName: "notify::translation-x", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::translation-x", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::translation-x", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::translation-x", ...args: any[]): void
    connect(sigName: "notify::translation-y", callback: (...args: any[]) => void): number
    on(sigName: "notify::translation-y", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::translation-y", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::translation-y", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::translation-y", ...args: any[]): void
    connect(sigName: "notify::translation-z", callback: (...args: any[]) => void): number
    on(sigName: "notify::translation-z", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::translation-z", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::translation-z", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::translation-z", ...args: any[]): void
    connect(sigName: "notify::visible", callback: (...args: any[]) => void): number
    on(sigName: "notify::visible", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::visible", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::visible", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::visible", ...args: any[]): void
    connect(sigName: "notify::width", callback: (...args: any[]) => void): number
    on(sigName: "notify::width", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::width", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::width", ...args: any[]): void
    connect(sigName: "notify::x", callback: (...args: any[]) => void): number
    on(sigName: "notify::x", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::x", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::x", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::x", ...args: any[]): void
    connect(sigName: "notify::x-align", callback: (...args: any[]) => void): number
    on(sigName: "notify::x-align", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::x-align", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::x-align", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::x-align", ...args: any[]): void
    connect(sigName: "notify::x-expand", callback: (...args: any[]) => void): number
    on(sigName: "notify::x-expand", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::x-expand", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::x-expand", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::x-expand", ...args: any[]): void
    connect(sigName: "notify::y", callback: (...args: any[]) => void): number
    on(sigName: "notify::y", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::y", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::y", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::y", ...args: any[]): void
    connect(sigName: "notify::y-align", callback: (...args: any[]) => void): number
    on(sigName: "notify::y-align", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::y-align", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::y-align", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::y-align", ...args: any[]): void
    connect(sigName: "notify::y-expand", callback: (...args: any[]) => void): number
    on(sigName: "notify::y-expand", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::y-expand", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::y-expand", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::y-expand", ...args: any[]): void
    connect(sigName: "notify::z-position", callback: (...args: any[]) => void): number
    on(sigName: "notify::z-position", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::z-position", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::z-position", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::z-position", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
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
    nextSource?: MapSource | null
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
    nextSource: MapSource
    /**
     * Renderer used for tiles rendering.
     */
    renderer: Renderer

    // Own fields of Champlain-0.12.Champlain.MapSource

    parentInstance: GObject.InitiallyUnowned
    priv: MapSourcePrivate

    // Owm methods of Champlain-0.12.Champlain.MapSource

    /**
     * Fills the tile with image data (either from cache, network or rendered
     * locally).
     * @param tile a #ChamplainTile
     */
    fillTile(tile: Tile): void
    /**
     * Gets the number of tiles in a column at this zoom level for this map
     * source.
     * @param zoomLevel the zoom level
     */
    getColumnCount(zoomLevel: number): number
    /**
     * Gets map source's id.
     */
    getId(): string
    /**
     * Gets the latitude corresponding to this y position in the map source's
     * projection.
     * @param zoomLevel the zoom level
     * @param y a y position
     */
    getLatitude(zoomLevel: number, y: number): number
    /**
     * Gets map source's license.
     */
    getLicense(): string
    /**
     * Gets map source's license URI.
     */
    getLicenseUri(): string
    /**
     * Gets the longitude corresponding to this x position in the map source's
     * projection.
     * @param zoomLevel the zoom level
     * @param x a x position
     */
    getLongitude(zoomLevel: number, x: number): number
    /**
     * Gets map source's maximum zoom level.
     */
    getMaxZoomLevel(): number
    /**
     * Gets meters per pixel at the position on the map using this map source's projection.
     * @param zoomLevel the zoom level
     * @param latitude a latitude
     * @param longitude a longitude
     */
    getMetersPerPixel(zoomLevel: number, latitude: number, longitude: number): number
    /**
     * Gets map source's minimum zoom level.
     */
    getMinZoomLevel(): number
    /**
     * Gets map source's name.
     */
    getName(): string
    /**
     * Get the next source in the chain.
     */
    getNextSource(): MapSource
    /**
     * Gets map source's projection.
     */
    getProjection(): MapProjection
    /**
     * Get the renderer used for tiles rendering.
     */
    getRenderer(): Renderer
    /**
     * Gets the number of tiles in a row at this zoom level for this map source.
     * @param zoomLevel the zoom level
     */
    getRowCount(zoomLevel: number): number
    /**
     * Gets map source's tile size.
     */
    getTileSize(): number
    /**
     * Gets the x position on the map using this map source's projection.
     * (0, 0) is located at the top left.
     * @param zoomLevel the zoom level
     * @param longitude a longitude
     */
    getX(zoomLevel: number, longitude: number): number
    /**
     * Gets the y position on the map using this map source's projection.
     * (0, 0) is located at the top left.
     * @param zoomLevel the zoom level
     * @param latitude a latitude
     */
    getY(zoomLevel: number, latitude: number): number
    /**
     * Sets the next map source in the chain.
     * @param nextSource the next #ChamplainMapSource in the chain
     */
    setNextSource(nextSource: MapSource): void
    /**
     * Sets the renderer used for tiles rendering.
     * @param renderer the renderer
     */
    setRenderer(renderer: Renderer): void

    // Class property signals of Champlain-0.12.Champlain.MapSource

    connect(sigName: "notify::next-source", callback: (...args: any[]) => void): number
    on(sigName: "notify::next-source", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::next-source", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::next-source", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::next-source", ...args: any[]): void
    connect(sigName: "notify::renderer", callback: (...args: any[]) => void): number
    on(sigName: "notify::renderer", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::renderer", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::renderer", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::renderer", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
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

    parentInstance: MapSource
    priv: MapSourceChainPrivate

    // Owm methods of Champlain-0.12.Champlain.MapSourceChain

    /**
     * Pops a map source from the top of the stack from the chain.
     */
    pop(): void
    /**
     * Pushes a map source into the chain.
     * @param mapSource the #ChamplainMapSource to be pushed into the chain
     */
    push(mapSource: MapSource): void

    // Class property signals of Champlain-0.12.Champlain.MapSourceChain

    connect(sigName: "notify::next-source", callback: (...args: any[]) => void): number
    on(sigName: "notify::next-source", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::next-source", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::next-source", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::next-source", ...args: any[]): void
    connect(sigName: "notify::renderer", callback: (...args: any[]) => void): number
    on(sigName: "notify::renderer", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::renderer", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::renderer", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::renderer", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
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
    licenseUri?: string | null
    /**
     * The maximum zoom level
     */
    maxZoomLevel?: number | null
    /**
     * The minimum zoom level
     */
    minZoomLevel?: number | null
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
    tileSize?: number | null
    /**
     * The URI format of a network map source
     */
    uriFormat?: string | null
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
    readonly licenseUri: string
    /**
     * The maximum zoom level
     */
    readonly maxZoomLevel: number
    /**
     * The minimum zoom level
     */
    readonly minZoomLevel: number
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
    readonly tileSize: number
    /**
     * The URI format of a network map source
     */
    readonly uriFormat: string

    // Own fields of Champlain-0.12.Champlain.MapSourceDesc

    parentInstance: GObject.Object
    priv: MapSourceDescPrivate

    // Owm methods of Champlain-0.12.Champlain.MapSourceDesc

    /**
     * Gets user data.
     */
    getData(): object | null

    // Overloads of getData

    /**
     * Gets a named field from the objects table of associations (see g_object_set_data()).
     * @param key name of the key for that association
     */
    getData(key?: string): object | null
    getData(...args: any[]): any
    getData(args_or_key?: any[] | string): object | null | any
    /**
     * Gets map source's id.
     */
    getId(): string
    /**
     * Gets map source's license.
     */
    getLicense(): string
    /**
     * Gets map source's license URI.
     */
    getLicenseUri(): string
    /**
     * Gets map source's maximum zoom level.
     */
    getMaxZoomLevel(): number
    /**
     * Gets map source's minimum zoom level.
     */
    getMinZoomLevel(): number
    /**
     * Gets map source's name.
     */
    getName(): string
    /**
     * Gets map source's projection.
     */
    getProjection(): MapProjection
    /**
     * Gets map source's tile size.
     */
    getTileSize(): number
    /**
     * Gets network map source's URI format.
     */
    getUriFormat(): string

    // Class property signals of Champlain-0.12.Champlain.MapSourceDesc

    connect(sigName: "notify::constructor", callback: (...args: any[]) => void): number
    on(sigName: "notify::constructor", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::constructor", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::constructor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::constructor", ...args: any[]): void
    connect(sigName: "notify::data", callback: (...args: any[]) => void): number
    on(sigName: "notify::data", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::data", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::data", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::data", ...args: any[]): void
    connect(sigName: "notify::id", callback: (...args: any[]) => void): number
    on(sigName: "notify::id", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::id", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::id", ...args: any[]): void
    connect(sigName: "notify::license", callback: (...args: any[]) => void): number
    on(sigName: "notify::license", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::license", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::license", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::license", ...args: any[]): void
    connect(sigName: "notify::license-uri", callback: (...args: any[]) => void): number
    on(sigName: "notify::license-uri", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::license-uri", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::license-uri", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::license-uri", ...args: any[]): void
    connect(sigName: "notify::max-zoom-level", callback: (...args: any[]) => void): number
    on(sigName: "notify::max-zoom-level", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::max-zoom-level", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::max-zoom-level", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::max-zoom-level", ...args: any[]): void
    connect(sigName: "notify::min-zoom-level", callback: (...args: any[]) => void): number
    on(sigName: "notify::min-zoom-level", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::min-zoom-level", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::min-zoom-level", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::min-zoom-level", ...args: any[]): void
    connect(sigName: "notify::name", callback: (...args: any[]) => void): number
    on(sigName: "notify::name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::projection", callback: (...args: any[]) => void): number
    on(sigName: "notify::projection", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::projection", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::projection", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::projection", ...args: any[]): void
    connect(sigName: "notify::tile-size", callback: (...args: any[]) => void): number
    on(sigName: "notify::tile-size", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::tile-size", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::tile-size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::tile-size", ...args: any[]): void
    connect(sigName: "notify::uri-format", callback: (...args: any[]) => void): number
    on(sigName: "notify::uri-format", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::uri-format", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::uri-format", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::uri-format", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
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
    createCachedSource(id: string): MapSource
    /**
     * Creates a map source generating error tiles.
     * @param tileSize the size of the error tile
     */
    createErrorSource(tileSize: number): MapSource
    /**
     * Creates a memory cached map source.
     * @param id the wanted map source id
     */
    createMemcachedSource(id: string): MapSource
    /**
     * Get the list of registered map sources.
     */
    getRegistered(): MapSourceDesc[]
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
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
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
    static dupDefault(): MapSourceFactory
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
    (event: Clutter.Event): void
}

/**
 * Signal callback interface for `button-release`
 */
interface Marker_ButtonReleaseSignalCallback {
    (event: Clutter.Event): void
}

/**
 * Signal callback interface for `drag-finish`
 */
interface Marker_DragFinishSignalCallback {
    (event: Clutter.Event): void
}

/**
 * Signal callback interface for `drag-motion`
 */
interface Marker_DragMotionSignalCallback {
    (dx: number, dy: number, event: Clutter.Event): void
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
    animateIn(): void
    /**
     * Animates the marker as if it were falling from the sky onto the map after
     * delay.
     * @param delay The delay in milliseconds
     */
    animateInWithDelay(delay: number): void
    /**
     * Animates the marker as if it were drawn through the sky.
     */
    animateOut(): void
    /**
     * Animates the marker as if it were drawn through the sky after
     * delay.
     * @param delay The delay in milliseconds
     */
    animateOutWithDelay(delay: number): void
    /**
     * Checks whether the marker is draggable.
     */
    getDraggable(): boolean
    /**
     * Checks whether the marker is selectable.
     */
    getSelectable(): boolean
    /**
     * Checks whether the marker is selected.
     */
    getSelected(): boolean
    /**
     * Sets the marker as draggable or not.
     * @param value the draggable state
     */
    setDraggable(value: boolean): void
    /**
     * Sets the marker as selectable or not.
     * @param value the selectable state
     */
    setSelectable(value: boolean): void
    /**
     * Sets the marker as selected or not. This will affect the "Selected" look
     * of the marker.
     * @param value the selected state
     */
    setSelected(value: boolean): void

    // Own signals of Champlain-0.12.Champlain.Marker

    connect(sigName: "button-press", callback: Marker_ButtonPressSignalCallback): number
    on(sigName: "button-press", callback: Marker_ButtonPressSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "button-press", callback: Marker_ButtonPressSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "button-press", callback: Marker_ButtonPressSignalCallback): NodeJS.EventEmitter
    emit(sigName: "button-press", ...args: any[]): void
    connect(sigName: "button-release", callback: Marker_ButtonReleaseSignalCallback): number
    on(sigName: "button-release", callback: Marker_ButtonReleaseSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "button-release", callback: Marker_ButtonReleaseSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "button-release", callback: Marker_ButtonReleaseSignalCallback): NodeJS.EventEmitter
    emit(sigName: "button-release", ...args: any[]): void
    connect(sigName: "drag-finish", callback: Marker_DragFinishSignalCallback): number
    on(sigName: "drag-finish", callback: Marker_DragFinishSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "drag-finish", callback: Marker_DragFinishSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "drag-finish", callback: Marker_DragFinishSignalCallback): NodeJS.EventEmitter
    emit(sigName: "drag-finish", ...args: any[]): void
    connect(sigName: "drag-motion", callback: Marker_DragMotionSignalCallback): number
    on(sigName: "drag-motion", callback: Marker_DragMotionSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "drag-motion", callback: Marker_DragMotionSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "drag-motion", callback: Marker_DragMotionSignalCallback): NodeJS.EventEmitter
    emit(sigName: "drag-motion", dy: number, event: Clutter.Event, ...args: any[]): void

    // Class property signals of Champlain-0.12.Champlain.Marker

    connect(sigName: "notify::draggable", callback: (...args: any[]) => void): number
    on(sigName: "notify::draggable", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::draggable", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::draggable", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::draggable", ...args: any[]): void
    connect(sigName: "notify::selectable", callback: (...args: any[]) => void): number
    on(sigName: "notify::selectable", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::selectable", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::selectable", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::selectable", ...args: any[]): void
    connect(sigName: "notify::selected", callback: (...args: any[]) => void): number
    on(sigName: "notify::selected", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::selected", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::selected", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::selected", ...args: any[]): void
    connect(sigName: "notify::actions", callback: (...args: any[]) => void): number
    on(sigName: "notify::actions", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::actions", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::actions", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::actions", ...args: any[]): void
    connect(sigName: "notify::allocation", callback: (...args: any[]) => void): number
    on(sigName: "notify::allocation", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::allocation", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::allocation", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::allocation", ...args: any[]): void
    connect(sigName: "notify::anchor-gravity", callback: (...args: any[]) => void): number
    on(sigName: "notify::anchor-gravity", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::anchor-gravity", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::anchor-gravity", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::anchor-gravity", ...args: any[]): void
    connect(sigName: "notify::anchor-x", callback: (...args: any[]) => void): number
    on(sigName: "notify::anchor-x", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::anchor-x", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::anchor-x", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::anchor-x", ...args: any[]): void
    connect(sigName: "notify::anchor-y", callback: (...args: any[]) => void): number
    on(sigName: "notify::anchor-y", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::anchor-y", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::anchor-y", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::anchor-y", ...args: any[]): void
    connect(sigName: "notify::background-color", callback: (...args: any[]) => void): number
    on(sigName: "notify::background-color", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::background-color", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::background-color", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::background-color", ...args: any[]): void
    connect(sigName: "notify::background-color-set", callback: (...args: any[]) => void): number
    on(sigName: "notify::background-color-set", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::background-color-set", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::background-color-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::background-color-set", ...args: any[]): void
    connect(sigName: "notify::child-transform", callback: (...args: any[]) => void): number
    on(sigName: "notify::child-transform", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::child-transform", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::child-transform", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::child-transform", ...args: any[]): void
    connect(sigName: "notify::child-transform-set", callback: (...args: any[]) => void): number
    on(sigName: "notify::child-transform-set", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::child-transform-set", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::child-transform-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::child-transform-set", ...args: any[]): void
    connect(sigName: "notify::clip", callback: (...args: any[]) => void): number
    on(sigName: "notify::clip", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::clip", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::clip", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::clip", ...args: any[]): void
    connect(sigName: "notify::clip-rect", callback: (...args: any[]) => void): number
    on(sigName: "notify::clip-rect", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::clip-rect", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::clip-rect", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::clip-rect", ...args: any[]): void
    connect(sigName: "notify::clip-to-allocation", callback: (...args: any[]) => void): number
    on(sigName: "notify::clip-to-allocation", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::clip-to-allocation", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::clip-to-allocation", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::clip-to-allocation", ...args: any[]): void
    connect(sigName: "notify::constraints", callback: (...args: any[]) => void): number
    on(sigName: "notify::constraints", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::constraints", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::constraints", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::constraints", ...args: any[]): void
    connect(sigName: "notify::content", callback: (...args: any[]) => void): number
    on(sigName: "notify::content", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::content", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::content", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::content", ...args: any[]): void
    connect(sigName: "notify::content-box", callback: (...args: any[]) => void): number
    on(sigName: "notify::content-box", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::content-box", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::content-box", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::content-box", ...args: any[]): void
    connect(sigName: "notify::content-gravity", callback: (...args: any[]) => void): number
    on(sigName: "notify::content-gravity", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::content-gravity", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::content-gravity", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::content-gravity", ...args: any[]): void
    connect(sigName: "notify::content-repeat", callback: (...args: any[]) => void): number
    on(sigName: "notify::content-repeat", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::content-repeat", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::content-repeat", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::content-repeat", ...args: any[]): void
    connect(sigName: "notify::depth", callback: (...args: any[]) => void): number
    on(sigName: "notify::depth", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::depth", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::depth", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::depth", ...args: any[]): void
    connect(sigName: "notify::effect", callback: (...args: any[]) => void): number
    on(sigName: "notify::effect", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::effect", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::effect", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::effect", ...args: any[]): void
    connect(sigName: "notify::first-child", callback: (...args: any[]) => void): number
    on(sigName: "notify::first-child", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::first-child", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::first-child", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::first-child", ...args: any[]): void
    connect(sigName: "notify::fixed-position-set", callback: (...args: any[]) => void): number
    on(sigName: "notify::fixed-position-set", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::fixed-position-set", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::fixed-position-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::fixed-position-set", ...args: any[]): void
    connect(sigName: "notify::fixed-x", callback: (...args: any[]) => void): number
    on(sigName: "notify::fixed-x", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::fixed-x", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::fixed-x", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::fixed-x", ...args: any[]): void
    connect(sigName: "notify::fixed-y", callback: (...args: any[]) => void): number
    on(sigName: "notify::fixed-y", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::fixed-y", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::fixed-y", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::fixed-y", ...args: any[]): void
    connect(sigName: "notify::has-clip", callback: (...args: any[]) => void): number
    on(sigName: "notify::has-clip", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::has-clip", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::has-clip", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::has-clip", ...args: any[]): void
    connect(sigName: "notify::has-pointer", callback: (...args: any[]) => void): number
    on(sigName: "notify::has-pointer", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::has-pointer", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::has-pointer", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::has-pointer", ...args: any[]): void
    connect(sigName: "notify::height", callback: (...args: any[]) => void): number
    on(sigName: "notify::height", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::height", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::height", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::height", ...args: any[]): void
    connect(sigName: "notify::last-child", callback: (...args: any[]) => void): number
    on(sigName: "notify::last-child", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::last-child", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::last-child", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::last-child", ...args: any[]): void
    connect(sigName: "notify::layout-manager", callback: (...args: any[]) => void): number
    on(sigName: "notify::layout-manager", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::layout-manager", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::layout-manager", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::layout-manager", ...args: any[]): void
    connect(sigName: "notify::magnification-filter", callback: (...args: any[]) => void): number
    on(sigName: "notify::magnification-filter", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::magnification-filter", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::magnification-filter", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::magnification-filter", ...args: any[]): void
    connect(sigName: "notify::mapped", callback: (...args: any[]) => void): number
    on(sigName: "notify::mapped", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::mapped", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::mapped", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::mapped", ...args: any[]): void
    connect(sigName: "notify::margin-bottom", callback: (...args: any[]) => void): number
    on(sigName: "notify::margin-bottom", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::margin-bottom", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::margin-bottom", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::margin-bottom", ...args: any[]): void
    connect(sigName: "notify::margin-left", callback: (...args: any[]) => void): number
    on(sigName: "notify::margin-left", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::margin-left", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::margin-left", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::margin-left", ...args: any[]): void
    connect(sigName: "notify::margin-right", callback: (...args: any[]) => void): number
    on(sigName: "notify::margin-right", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::margin-right", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::margin-right", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::margin-right", ...args: any[]): void
    connect(sigName: "notify::margin-top", callback: (...args: any[]) => void): number
    on(sigName: "notify::margin-top", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::margin-top", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::margin-top", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::margin-top", ...args: any[]): void
    connect(sigName: "notify::min-height", callback: (...args: any[]) => void): number
    on(sigName: "notify::min-height", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::min-height", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::min-height", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::min-height", ...args: any[]): void
    connect(sigName: "notify::min-height-set", callback: (...args: any[]) => void): number
    on(sigName: "notify::min-height-set", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::min-height-set", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::min-height-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::min-height-set", ...args: any[]): void
    connect(sigName: "notify::min-width", callback: (...args: any[]) => void): number
    on(sigName: "notify::min-width", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::min-width", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::min-width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::min-width", ...args: any[]): void
    connect(sigName: "notify::min-width-set", callback: (...args: any[]) => void): number
    on(sigName: "notify::min-width-set", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::min-width-set", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::min-width-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::min-width-set", ...args: any[]): void
    connect(sigName: "notify::minification-filter", callback: (...args: any[]) => void): number
    on(sigName: "notify::minification-filter", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::minification-filter", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::minification-filter", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::minification-filter", ...args: any[]): void
    connect(sigName: "notify::name", callback: (...args: any[]) => void): number
    on(sigName: "notify::name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::natural-height", callback: (...args: any[]) => void): number
    on(sigName: "notify::natural-height", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::natural-height", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::natural-height", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::natural-height", ...args: any[]): void
    connect(sigName: "notify::natural-height-set", callback: (...args: any[]) => void): number
    on(sigName: "notify::natural-height-set", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::natural-height-set", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::natural-height-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::natural-height-set", ...args: any[]): void
    connect(sigName: "notify::natural-width", callback: (...args: any[]) => void): number
    on(sigName: "notify::natural-width", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::natural-width", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::natural-width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::natural-width", ...args: any[]): void
    connect(sigName: "notify::natural-width-set", callback: (...args: any[]) => void): number
    on(sigName: "notify::natural-width-set", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::natural-width-set", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::natural-width-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::natural-width-set", ...args: any[]): void
    connect(sigName: "notify::offscreen-redirect", callback: (...args: any[]) => void): number
    on(sigName: "notify::offscreen-redirect", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::offscreen-redirect", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::offscreen-redirect", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::offscreen-redirect", ...args: any[]): void
    connect(sigName: "notify::opacity", callback: (...args: any[]) => void): number
    on(sigName: "notify::opacity", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::opacity", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::opacity", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::opacity", ...args: any[]): void
    connect(sigName: "notify::pivot-point", callback: (...args: any[]) => void): number
    on(sigName: "notify::pivot-point", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::pivot-point", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::pivot-point", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::pivot-point", ...args: any[]): void
    connect(sigName: "notify::pivot-point-z", callback: (...args: any[]) => void): number
    on(sigName: "notify::pivot-point-z", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::pivot-point-z", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::pivot-point-z", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::pivot-point-z", ...args: any[]): void
    connect(sigName: "notify::position", callback: (...args: any[]) => void): number
    on(sigName: "notify::position", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::position", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::position", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::position", ...args: any[]): void
    connect(sigName: "notify::reactive", callback: (...args: any[]) => void): number
    on(sigName: "notify::reactive", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::reactive", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::reactive", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::reactive", ...args: any[]): void
    connect(sigName: "notify::realized", callback: (...args: any[]) => void): number
    on(sigName: "notify::realized", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::realized", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::realized", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::realized", ...args: any[]): void
    connect(sigName: "notify::request-mode", callback: (...args: any[]) => void): number
    on(sigName: "notify::request-mode", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::request-mode", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::request-mode", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::request-mode", ...args: any[]): void
    connect(sigName: "notify::rotation-angle-x", callback: (...args: any[]) => void): number
    on(sigName: "notify::rotation-angle-x", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::rotation-angle-x", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::rotation-angle-x", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::rotation-angle-x", ...args: any[]): void
    connect(sigName: "notify::rotation-angle-y", callback: (...args: any[]) => void): number
    on(sigName: "notify::rotation-angle-y", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::rotation-angle-y", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::rotation-angle-y", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::rotation-angle-y", ...args: any[]): void
    connect(sigName: "notify::rotation-angle-z", callback: (...args: any[]) => void): number
    on(sigName: "notify::rotation-angle-z", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::rotation-angle-z", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::rotation-angle-z", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::rotation-angle-z", ...args: any[]): void
    connect(sigName: "notify::rotation-center-x", callback: (...args: any[]) => void): number
    on(sigName: "notify::rotation-center-x", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::rotation-center-x", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::rotation-center-x", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::rotation-center-x", ...args: any[]): void
    connect(sigName: "notify::rotation-center-y", callback: (...args: any[]) => void): number
    on(sigName: "notify::rotation-center-y", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::rotation-center-y", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::rotation-center-y", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::rotation-center-y", ...args: any[]): void
    connect(sigName: "notify::rotation-center-z", callback: (...args: any[]) => void): number
    on(sigName: "notify::rotation-center-z", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::rotation-center-z", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::rotation-center-z", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::rotation-center-z", ...args: any[]): void
    connect(sigName: "notify::rotation-center-z-gravity", callback: (...args: any[]) => void): number
    on(sigName: "notify::rotation-center-z-gravity", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::rotation-center-z-gravity", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::rotation-center-z-gravity", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::rotation-center-z-gravity", ...args: any[]): void
    connect(sigName: "notify::scale-center-x", callback: (...args: any[]) => void): number
    on(sigName: "notify::scale-center-x", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::scale-center-x", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::scale-center-x", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::scale-center-x", ...args: any[]): void
    connect(sigName: "notify::scale-center-y", callback: (...args: any[]) => void): number
    on(sigName: "notify::scale-center-y", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::scale-center-y", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::scale-center-y", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::scale-center-y", ...args: any[]): void
    connect(sigName: "notify::scale-gravity", callback: (...args: any[]) => void): number
    on(sigName: "notify::scale-gravity", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::scale-gravity", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::scale-gravity", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::scale-gravity", ...args: any[]): void
    connect(sigName: "notify::scale-x", callback: (...args: any[]) => void): number
    on(sigName: "notify::scale-x", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::scale-x", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::scale-x", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::scale-x", ...args: any[]): void
    connect(sigName: "notify::scale-y", callback: (...args: any[]) => void): number
    on(sigName: "notify::scale-y", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::scale-y", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::scale-y", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::scale-y", ...args: any[]): void
    connect(sigName: "notify::scale-z", callback: (...args: any[]) => void): number
    on(sigName: "notify::scale-z", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::scale-z", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::scale-z", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::scale-z", ...args: any[]): void
    connect(sigName: "notify::show-on-set-parent", callback: (...args: any[]) => void): number
    on(sigName: "notify::show-on-set-parent", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::show-on-set-parent", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::show-on-set-parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::show-on-set-parent", ...args: any[]): void
    connect(sigName: "notify::size", callback: (...args: any[]) => void): number
    on(sigName: "notify::size", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::size", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::size", ...args: any[]): void
    connect(sigName: "notify::text-direction", callback: (...args: any[]) => void): number
    on(sigName: "notify::text-direction", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::text-direction", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::text-direction", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::text-direction", ...args: any[]): void
    connect(sigName: "notify::transform", callback: (...args: any[]) => void): number
    on(sigName: "notify::transform", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::transform", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::transform", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::transform", ...args: any[]): void
    connect(sigName: "notify::transform-set", callback: (...args: any[]) => void): number
    on(sigName: "notify::transform-set", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::transform-set", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::transform-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::transform-set", ...args: any[]): void
    connect(sigName: "notify::translation-x", callback: (...args: any[]) => void): number
    on(sigName: "notify::translation-x", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::translation-x", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::translation-x", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::translation-x", ...args: any[]): void
    connect(sigName: "notify::translation-y", callback: (...args: any[]) => void): number
    on(sigName: "notify::translation-y", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::translation-y", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::translation-y", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::translation-y", ...args: any[]): void
    connect(sigName: "notify::translation-z", callback: (...args: any[]) => void): number
    on(sigName: "notify::translation-z", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::translation-z", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::translation-z", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::translation-z", ...args: any[]): void
    connect(sigName: "notify::visible", callback: (...args: any[]) => void): number
    on(sigName: "notify::visible", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::visible", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::visible", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::visible", ...args: any[]): void
    connect(sigName: "notify::width", callback: (...args: any[]) => void): number
    on(sigName: "notify::width", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::width", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::width", ...args: any[]): void
    connect(sigName: "notify::x", callback: (...args: any[]) => void): number
    on(sigName: "notify::x", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::x", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::x", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::x", ...args: any[]): void
    connect(sigName: "notify::x-align", callback: (...args: any[]) => void): number
    on(sigName: "notify::x-align", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::x-align", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::x-align", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::x-align", ...args: any[]): void
    connect(sigName: "notify::x-expand", callback: (...args: any[]) => void): number
    on(sigName: "notify::x-expand", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::x-expand", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::x-expand", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::x-expand", ...args: any[]): void
    connect(sigName: "notify::y", callback: (...args: any[]) => void): number
    on(sigName: "notify::y", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::y", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::y", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::y", ...args: any[]): void
    connect(sigName: "notify::y-align", callback: (...args: any[]) => void): number
    on(sigName: "notify::y-align", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::y-align", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::y-align", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::y-align", ...args: any[]): void
    connect(sigName: "notify::y-expand", callback: (...args: any[]) => void): number
    on(sigName: "notify::y-expand", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::y-expand", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::y-expand", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::y-expand", ...args: any[]): void
    connect(sigName: "notify::z-position", callback: (...args: any[]) => void): number
    on(sigName: "notify::z-position", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::z-position", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::z-position", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::z-position", ...args: any[]): void
    connect(sigName: "notify::latitude", callback: (...args: any[]) => void): number
    on(sigName: "notify::latitude", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::latitude", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::latitude", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::latitude", ...args: any[]): void
    connect(sigName: "notify::longitude", callback: (...args: any[]) => void): number
    on(sigName: "notify::longitude", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::longitude", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::longitude", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::longitude", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
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
    static getSelectionColor(): Clutter.Color
    /**
     * Gets the selection text color.
     */
    static getSelectionTextColor(): Clutter.Color
    /**
     * Changes the selection color, this is to ensure a better integration with
     * the desktop, this is automatically done by GtkChamplainEmbed.
     * @param color a #ClutterColor
     */
    static setSelectionColor(color: Clutter.Color): void
    /**
     * Changes the selection text color, this is to ensure a better integration with
     * the desktop, this is automatically done by GtkChamplainEmbed.
     * @param color a #ClutterColor
     */
    static setSelectionTextColor(color: Clutter.Color): void
}

interface MarkerLayer_ConstructProps extends Atk.ImplementorIface_ConstructProps, Exportable_ConstructProps, Clutter.Animatable_ConstructProps, Clutter.Container_ConstructProps, Clutter.Scriptable_ConstructProps, Layer_ConstructProps {

    // Own constructor properties of Champlain-0.12.Champlain.MarkerLayer

    /**
     * Determines the type of selection that will be performed.
     */
    selectionMode?: SelectionMode | null
}

interface MarkerLayer extends Atk.ImplementorIface, Exportable, Clutter.Animatable, Clutter.Container, Clutter.Scriptable {

    // Own properties of Champlain-0.12.Champlain.MarkerLayer

    /**
     * Determines the type of selection that will be performed.
     */
    selectionMode: SelectionMode

    // Own fields of Champlain-0.12.Champlain.MarkerLayer

    parent: Layer
    priv: MarkerLayerPrivate

    // Owm methods of Champlain-0.12.Champlain.MarkerLayer

    /**
     * Adds the marker to the layer.
     * @param marker a #ChamplainMarker
     */
    addMarker(marker: Marker): void
    /**
     * Fade in all markers in the layer with an animation
     */
    animateInAllMarkers(): void
    /**
     * Fade out all markers in the layer with an animation
     */
    animateOutAllMarkers(): void
    /**
     * Gets a copy of the list of all markers inserted into the layer. You should
     * free the list but not its contents.
     */
    getMarkers(): Marker[]
    /**
     * Gets a list of selected markers in the layer.
     */
    getSelected(): Marker[]
    /**
     * Gets the selection mode of the layer.
     */
    getSelectionMode(): SelectionMode
    /**
     * Hides all the markers in the layer
     */
    hideAllMarkers(): void
    /**
     * Removes all markers from the layer.
     */
    removeAll(): void
    /**
     * Removes the marker from the layer.
     * @param marker a #ChamplainMarker
     */
    removeMarker(marker: Marker): void
    /**
     * Selects all markers in the layer.
     */
    selectAllMarkers(): void
    /**
     * Sets all markers draggable in the layer
     */
    setAllMarkersDraggable(): void
    /**
     * Sets all markers undraggable in the layer
     */
    setAllMarkersUndraggable(): void
    /**
     * Sets the selection mode of the layer.
     * 
     * NOTE: changing selection mode to CHAMPLAIN_SELECTION_NONE or
     * CHAMPLAIN_SELECTION_SINGLE will clear all previously selected markers.
     * @param mode a #ChamplainSelectionMode value
     */
    setSelectionMode(mode: SelectionMode): void
    /**
     * Shows all markers in the layer
     */
    showAllMarkers(): void
    /**
     * Unselects all markers in the layer.
     */
    unselectAllMarkers(): void

    // Class property signals of Champlain-0.12.Champlain.MarkerLayer

    connect(sigName: "notify::selection-mode", callback: (...args: any[]) => void): number
    on(sigName: "notify::selection-mode", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::selection-mode", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::selection-mode", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::selection-mode", ...args: any[]): void
    connect(sigName: "notify::actions", callback: (...args: any[]) => void): number
    on(sigName: "notify::actions", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::actions", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::actions", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::actions", ...args: any[]): void
    connect(sigName: "notify::allocation", callback: (...args: any[]) => void): number
    on(sigName: "notify::allocation", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::allocation", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::allocation", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::allocation", ...args: any[]): void
    connect(sigName: "notify::anchor-gravity", callback: (...args: any[]) => void): number
    on(sigName: "notify::anchor-gravity", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::anchor-gravity", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::anchor-gravity", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::anchor-gravity", ...args: any[]): void
    connect(sigName: "notify::anchor-x", callback: (...args: any[]) => void): number
    on(sigName: "notify::anchor-x", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::anchor-x", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::anchor-x", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::anchor-x", ...args: any[]): void
    connect(sigName: "notify::anchor-y", callback: (...args: any[]) => void): number
    on(sigName: "notify::anchor-y", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::anchor-y", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::anchor-y", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::anchor-y", ...args: any[]): void
    connect(sigName: "notify::background-color", callback: (...args: any[]) => void): number
    on(sigName: "notify::background-color", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::background-color", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::background-color", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::background-color", ...args: any[]): void
    connect(sigName: "notify::background-color-set", callback: (...args: any[]) => void): number
    on(sigName: "notify::background-color-set", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::background-color-set", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::background-color-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::background-color-set", ...args: any[]): void
    connect(sigName: "notify::child-transform", callback: (...args: any[]) => void): number
    on(sigName: "notify::child-transform", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::child-transform", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::child-transform", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::child-transform", ...args: any[]): void
    connect(sigName: "notify::child-transform-set", callback: (...args: any[]) => void): number
    on(sigName: "notify::child-transform-set", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::child-transform-set", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::child-transform-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::child-transform-set", ...args: any[]): void
    connect(sigName: "notify::clip", callback: (...args: any[]) => void): number
    on(sigName: "notify::clip", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::clip", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::clip", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::clip", ...args: any[]): void
    connect(sigName: "notify::clip-rect", callback: (...args: any[]) => void): number
    on(sigName: "notify::clip-rect", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::clip-rect", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::clip-rect", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::clip-rect", ...args: any[]): void
    connect(sigName: "notify::clip-to-allocation", callback: (...args: any[]) => void): number
    on(sigName: "notify::clip-to-allocation", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::clip-to-allocation", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::clip-to-allocation", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::clip-to-allocation", ...args: any[]): void
    connect(sigName: "notify::constraints", callback: (...args: any[]) => void): number
    on(sigName: "notify::constraints", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::constraints", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::constraints", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::constraints", ...args: any[]): void
    connect(sigName: "notify::content", callback: (...args: any[]) => void): number
    on(sigName: "notify::content", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::content", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::content", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::content", ...args: any[]): void
    connect(sigName: "notify::content-box", callback: (...args: any[]) => void): number
    on(sigName: "notify::content-box", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::content-box", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::content-box", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::content-box", ...args: any[]): void
    connect(sigName: "notify::content-gravity", callback: (...args: any[]) => void): number
    on(sigName: "notify::content-gravity", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::content-gravity", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::content-gravity", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::content-gravity", ...args: any[]): void
    connect(sigName: "notify::content-repeat", callback: (...args: any[]) => void): number
    on(sigName: "notify::content-repeat", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::content-repeat", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::content-repeat", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::content-repeat", ...args: any[]): void
    connect(sigName: "notify::depth", callback: (...args: any[]) => void): number
    on(sigName: "notify::depth", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::depth", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::depth", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::depth", ...args: any[]): void
    connect(sigName: "notify::effect", callback: (...args: any[]) => void): number
    on(sigName: "notify::effect", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::effect", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::effect", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::effect", ...args: any[]): void
    connect(sigName: "notify::first-child", callback: (...args: any[]) => void): number
    on(sigName: "notify::first-child", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::first-child", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::first-child", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::first-child", ...args: any[]): void
    connect(sigName: "notify::fixed-position-set", callback: (...args: any[]) => void): number
    on(sigName: "notify::fixed-position-set", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::fixed-position-set", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::fixed-position-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::fixed-position-set", ...args: any[]): void
    connect(sigName: "notify::fixed-x", callback: (...args: any[]) => void): number
    on(sigName: "notify::fixed-x", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::fixed-x", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::fixed-x", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::fixed-x", ...args: any[]): void
    connect(sigName: "notify::fixed-y", callback: (...args: any[]) => void): number
    on(sigName: "notify::fixed-y", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::fixed-y", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::fixed-y", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::fixed-y", ...args: any[]): void
    connect(sigName: "notify::has-clip", callback: (...args: any[]) => void): number
    on(sigName: "notify::has-clip", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::has-clip", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::has-clip", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::has-clip", ...args: any[]): void
    connect(sigName: "notify::has-pointer", callback: (...args: any[]) => void): number
    on(sigName: "notify::has-pointer", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::has-pointer", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::has-pointer", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::has-pointer", ...args: any[]): void
    connect(sigName: "notify::height", callback: (...args: any[]) => void): number
    on(sigName: "notify::height", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::height", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::height", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::height", ...args: any[]): void
    connect(sigName: "notify::last-child", callback: (...args: any[]) => void): number
    on(sigName: "notify::last-child", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::last-child", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::last-child", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::last-child", ...args: any[]): void
    connect(sigName: "notify::layout-manager", callback: (...args: any[]) => void): number
    on(sigName: "notify::layout-manager", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::layout-manager", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::layout-manager", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::layout-manager", ...args: any[]): void
    connect(sigName: "notify::magnification-filter", callback: (...args: any[]) => void): number
    on(sigName: "notify::magnification-filter", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::magnification-filter", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::magnification-filter", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::magnification-filter", ...args: any[]): void
    connect(sigName: "notify::mapped", callback: (...args: any[]) => void): number
    on(sigName: "notify::mapped", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::mapped", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::mapped", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::mapped", ...args: any[]): void
    connect(sigName: "notify::margin-bottom", callback: (...args: any[]) => void): number
    on(sigName: "notify::margin-bottom", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::margin-bottom", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::margin-bottom", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::margin-bottom", ...args: any[]): void
    connect(sigName: "notify::margin-left", callback: (...args: any[]) => void): number
    on(sigName: "notify::margin-left", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::margin-left", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::margin-left", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::margin-left", ...args: any[]): void
    connect(sigName: "notify::margin-right", callback: (...args: any[]) => void): number
    on(sigName: "notify::margin-right", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::margin-right", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::margin-right", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::margin-right", ...args: any[]): void
    connect(sigName: "notify::margin-top", callback: (...args: any[]) => void): number
    on(sigName: "notify::margin-top", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::margin-top", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::margin-top", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::margin-top", ...args: any[]): void
    connect(sigName: "notify::min-height", callback: (...args: any[]) => void): number
    on(sigName: "notify::min-height", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::min-height", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::min-height", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::min-height", ...args: any[]): void
    connect(sigName: "notify::min-height-set", callback: (...args: any[]) => void): number
    on(sigName: "notify::min-height-set", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::min-height-set", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::min-height-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::min-height-set", ...args: any[]): void
    connect(sigName: "notify::min-width", callback: (...args: any[]) => void): number
    on(sigName: "notify::min-width", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::min-width", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::min-width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::min-width", ...args: any[]): void
    connect(sigName: "notify::min-width-set", callback: (...args: any[]) => void): number
    on(sigName: "notify::min-width-set", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::min-width-set", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::min-width-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::min-width-set", ...args: any[]): void
    connect(sigName: "notify::minification-filter", callback: (...args: any[]) => void): number
    on(sigName: "notify::minification-filter", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::minification-filter", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::minification-filter", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::minification-filter", ...args: any[]): void
    connect(sigName: "notify::name", callback: (...args: any[]) => void): number
    on(sigName: "notify::name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::natural-height", callback: (...args: any[]) => void): number
    on(sigName: "notify::natural-height", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::natural-height", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::natural-height", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::natural-height", ...args: any[]): void
    connect(sigName: "notify::natural-height-set", callback: (...args: any[]) => void): number
    on(sigName: "notify::natural-height-set", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::natural-height-set", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::natural-height-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::natural-height-set", ...args: any[]): void
    connect(sigName: "notify::natural-width", callback: (...args: any[]) => void): number
    on(sigName: "notify::natural-width", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::natural-width", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::natural-width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::natural-width", ...args: any[]): void
    connect(sigName: "notify::natural-width-set", callback: (...args: any[]) => void): number
    on(sigName: "notify::natural-width-set", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::natural-width-set", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::natural-width-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::natural-width-set", ...args: any[]): void
    connect(sigName: "notify::offscreen-redirect", callback: (...args: any[]) => void): number
    on(sigName: "notify::offscreen-redirect", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::offscreen-redirect", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::offscreen-redirect", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::offscreen-redirect", ...args: any[]): void
    connect(sigName: "notify::opacity", callback: (...args: any[]) => void): number
    on(sigName: "notify::opacity", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::opacity", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::opacity", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::opacity", ...args: any[]): void
    connect(sigName: "notify::pivot-point", callback: (...args: any[]) => void): number
    on(sigName: "notify::pivot-point", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::pivot-point", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::pivot-point", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::pivot-point", ...args: any[]): void
    connect(sigName: "notify::pivot-point-z", callback: (...args: any[]) => void): number
    on(sigName: "notify::pivot-point-z", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::pivot-point-z", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::pivot-point-z", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::pivot-point-z", ...args: any[]): void
    connect(sigName: "notify::position", callback: (...args: any[]) => void): number
    on(sigName: "notify::position", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::position", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::position", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::position", ...args: any[]): void
    connect(sigName: "notify::reactive", callback: (...args: any[]) => void): number
    on(sigName: "notify::reactive", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::reactive", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::reactive", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::reactive", ...args: any[]): void
    connect(sigName: "notify::realized", callback: (...args: any[]) => void): number
    on(sigName: "notify::realized", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::realized", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::realized", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::realized", ...args: any[]): void
    connect(sigName: "notify::request-mode", callback: (...args: any[]) => void): number
    on(sigName: "notify::request-mode", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::request-mode", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::request-mode", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::request-mode", ...args: any[]): void
    connect(sigName: "notify::rotation-angle-x", callback: (...args: any[]) => void): number
    on(sigName: "notify::rotation-angle-x", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::rotation-angle-x", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::rotation-angle-x", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::rotation-angle-x", ...args: any[]): void
    connect(sigName: "notify::rotation-angle-y", callback: (...args: any[]) => void): number
    on(sigName: "notify::rotation-angle-y", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::rotation-angle-y", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::rotation-angle-y", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::rotation-angle-y", ...args: any[]): void
    connect(sigName: "notify::rotation-angle-z", callback: (...args: any[]) => void): number
    on(sigName: "notify::rotation-angle-z", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::rotation-angle-z", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::rotation-angle-z", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::rotation-angle-z", ...args: any[]): void
    connect(sigName: "notify::rotation-center-x", callback: (...args: any[]) => void): number
    on(sigName: "notify::rotation-center-x", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::rotation-center-x", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::rotation-center-x", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::rotation-center-x", ...args: any[]): void
    connect(sigName: "notify::rotation-center-y", callback: (...args: any[]) => void): number
    on(sigName: "notify::rotation-center-y", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::rotation-center-y", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::rotation-center-y", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::rotation-center-y", ...args: any[]): void
    connect(sigName: "notify::rotation-center-z", callback: (...args: any[]) => void): number
    on(sigName: "notify::rotation-center-z", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::rotation-center-z", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::rotation-center-z", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::rotation-center-z", ...args: any[]): void
    connect(sigName: "notify::rotation-center-z-gravity", callback: (...args: any[]) => void): number
    on(sigName: "notify::rotation-center-z-gravity", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::rotation-center-z-gravity", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::rotation-center-z-gravity", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::rotation-center-z-gravity", ...args: any[]): void
    connect(sigName: "notify::scale-center-x", callback: (...args: any[]) => void): number
    on(sigName: "notify::scale-center-x", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::scale-center-x", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::scale-center-x", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::scale-center-x", ...args: any[]): void
    connect(sigName: "notify::scale-center-y", callback: (...args: any[]) => void): number
    on(sigName: "notify::scale-center-y", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::scale-center-y", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::scale-center-y", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::scale-center-y", ...args: any[]): void
    connect(sigName: "notify::scale-gravity", callback: (...args: any[]) => void): number
    on(sigName: "notify::scale-gravity", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::scale-gravity", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::scale-gravity", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::scale-gravity", ...args: any[]): void
    connect(sigName: "notify::scale-x", callback: (...args: any[]) => void): number
    on(sigName: "notify::scale-x", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::scale-x", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::scale-x", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::scale-x", ...args: any[]): void
    connect(sigName: "notify::scale-y", callback: (...args: any[]) => void): number
    on(sigName: "notify::scale-y", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::scale-y", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::scale-y", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::scale-y", ...args: any[]): void
    connect(sigName: "notify::scale-z", callback: (...args: any[]) => void): number
    on(sigName: "notify::scale-z", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::scale-z", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::scale-z", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::scale-z", ...args: any[]): void
    connect(sigName: "notify::show-on-set-parent", callback: (...args: any[]) => void): number
    on(sigName: "notify::show-on-set-parent", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::show-on-set-parent", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::show-on-set-parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::show-on-set-parent", ...args: any[]): void
    connect(sigName: "notify::size", callback: (...args: any[]) => void): number
    on(sigName: "notify::size", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::size", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::size", ...args: any[]): void
    connect(sigName: "notify::text-direction", callback: (...args: any[]) => void): number
    on(sigName: "notify::text-direction", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::text-direction", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::text-direction", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::text-direction", ...args: any[]): void
    connect(sigName: "notify::transform", callback: (...args: any[]) => void): number
    on(sigName: "notify::transform", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::transform", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::transform", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::transform", ...args: any[]): void
    connect(sigName: "notify::transform-set", callback: (...args: any[]) => void): number
    on(sigName: "notify::transform-set", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::transform-set", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::transform-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::transform-set", ...args: any[]): void
    connect(sigName: "notify::translation-x", callback: (...args: any[]) => void): number
    on(sigName: "notify::translation-x", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::translation-x", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::translation-x", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::translation-x", ...args: any[]): void
    connect(sigName: "notify::translation-y", callback: (...args: any[]) => void): number
    on(sigName: "notify::translation-y", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::translation-y", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::translation-y", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::translation-y", ...args: any[]): void
    connect(sigName: "notify::translation-z", callback: (...args: any[]) => void): number
    on(sigName: "notify::translation-z", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::translation-z", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::translation-z", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::translation-z", ...args: any[]): void
    connect(sigName: "notify::visible", callback: (...args: any[]) => void): number
    on(sigName: "notify::visible", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::visible", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::visible", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::visible", ...args: any[]): void
    connect(sigName: "notify::width", callback: (...args: any[]) => void): number
    on(sigName: "notify::width", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::width", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::width", ...args: any[]): void
    connect(sigName: "notify::x", callback: (...args: any[]) => void): number
    on(sigName: "notify::x", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::x", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::x", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::x", ...args: any[]): void
    connect(sigName: "notify::x-align", callback: (...args: any[]) => void): number
    on(sigName: "notify::x-align", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::x-align", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::x-align", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::x-align", ...args: any[]): void
    connect(sigName: "notify::x-expand", callback: (...args: any[]) => void): number
    on(sigName: "notify::x-expand", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::x-expand", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::x-expand", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::x-expand", ...args: any[]): void
    connect(sigName: "notify::y", callback: (...args: any[]) => void): number
    on(sigName: "notify::y", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::y", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::y", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::y", ...args: any[]): void
    connect(sigName: "notify::y-align", callback: (...args: any[]) => void): number
    on(sigName: "notify::y-align", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::y-align", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::y-align", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::y-align", ...args: any[]): void
    connect(sigName: "notify::y-expand", callback: (...args: any[]) => void): number
    on(sigName: "notify::y-expand", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::y-expand", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::y-expand", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::y-expand", ...args: any[]): void
    connect(sigName: "notify::z-position", callback: (...args: any[]) => void): number
    on(sigName: "notify::z-position", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::z-position", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::z-position", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::z-position", ...args: any[]): void
    connect(sigName: "notify::surface", callback: (...args: any[]) => void): number
    on(sigName: "notify::surface", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::surface", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::surface", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::surface", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
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
    static newFull(mode: SelectionMode): MarkerLayer
    _init(config?: MarkerLayer_ConstructProps): void
}

interface MemoryCache_ConstructProps extends TileCache_ConstructProps {

    // Own constructor properties of Champlain-0.12.Champlain.MemoryCache

    /**
     * The maximum number of tiles that are stored in the cache.
     */
    sizeLimit?: number | null
}

interface MemoryCache {

    // Own properties of Champlain-0.12.Champlain.MemoryCache

    /**
     * The maximum number of tiles that are stored in the cache.
     */
    sizeLimit: number

    // Own fields of Champlain-0.12.Champlain.MemoryCache

    parentInstance: TileCache
    priv: MemoryCachePrivate

    // Owm methods of Champlain-0.12.Champlain.MemoryCache

    /**
     * Cleans the contents of the cache.
     */
    clean(): void
    /**
     * Gets the maximum number of tiles stored in the cache.
     */
    getSizeLimit(): number
    /**
     * Sets the maximum number of tiles stored in the cache.
     * @param sizeLimit maximum number of tiles stored in the cache
     */
    setSizeLimit(sizeLimit: number): void

    // Class property signals of Champlain-0.12.Champlain.MemoryCache

    connect(sigName: "notify::size-limit", callback: (...args: any[]) => void): number
    on(sigName: "notify::size-limit", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::size-limit", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::size-limit", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::size-limit", ...args: any[]): void
    connect(sigName: "notify::next-source", callback: (...args: any[]) => void): number
    on(sigName: "notify::next-source", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::next-source", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::next-source", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::next-source", ...args: any[]): void
    connect(sigName: "notify::renderer", callback: (...args: any[]) => void): number
    on(sigName: "notify::renderer", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::renderer", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::renderer", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::renderer", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
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
     * @param sizeLimit maximum number of tiles stored in the cache
     * @param renderer the #ChamplainRenderer used for tiles rendering
     */
    static newFull(sizeLimit: number, renderer: Renderer): MemoryCache
    _init(config?: MemoryCache_ConstructProps): void
}

interface NetworkBboxTileSource_ConstructProps extends TileSource_ConstructProps {

    // Own constructor properties of Champlain-0.12.Champlain.NetworkBboxTileSource

    /**
     * The URI of an OpenStreetMap API server
     */
    apiUri?: string | null
    /**
     * Used to override the default proxy for accessing the network.
     */
    proxyUri?: string | null
    /**
     * The map source's state. Useful to know if the data source is loading
     * or not.
     */
    state?: State | null
    /**
     * The HTTP user agent used for requests
     */
    userAgent?: string | null
}

interface NetworkBboxTileSource {

    // Own properties of Champlain-0.12.Champlain.NetworkBboxTileSource

    /**
     * The URI of an OpenStreetMap API server
     */
    apiUri: string
    /**
     * Used to override the default proxy for accessing the network.
     */
    proxyUri: string
    /**
     * The map source's state. Useful to know if the data source is loading
     * or not.
     */
    state: State
    /**
     * The HTTP user agent used for requests
     */
    userAgent: string

    // Conflicting properties

    parentInstance: any

    // Own fields of Champlain-0.12.Champlain.NetworkBboxTileSource

    parent: TileSource
    priv: NetworkBboxTileSourcePrivate

    // Owm methods of Champlain-0.12.Champlain.NetworkBboxTileSource

    /**
     * Gets the URI of the API server.
     */
    getApiUri(): string
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
    loadMapData(bbox: BoundingBox): void
    /**
     * Sets the URI of the API server.
     * @param apiUri an URI of an API server
     */
    setApiUri(apiUri: string): void
    /**
     * Sets the User-Agent header used communicating with the server.
     * @param userAgent A User-Agent string
     */
    setUserAgent(userAgent: string): void

    // Class property signals of Champlain-0.12.Champlain.NetworkBboxTileSource

    connect(sigName: "notify::api-uri", callback: (...args: any[]) => void): number
    on(sigName: "notify::api-uri", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::api-uri", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::api-uri", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::api-uri", ...args: any[]): void
    connect(sigName: "notify::proxy-uri", callback: (...args: any[]) => void): number
    on(sigName: "notify::proxy-uri", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::proxy-uri", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::proxy-uri", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::proxy-uri", ...args: any[]): void
    connect(sigName: "notify::state", callback: (...args: any[]) => void): number
    on(sigName: "notify::state", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::state", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::state", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::state", ...args: any[]): void
    connect(sigName: "notify::user-agent", callback: (...args: any[]) => void): number
    on(sigName: "notify::user-agent", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::user-agent", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::user-agent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::user-agent", ...args: any[]): void
    connect(sigName: "notify::cache", callback: (...args: any[]) => void): number
    on(sigName: "notify::cache", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::cache", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::cache", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::cache", ...args: any[]): void
    connect(sigName: "notify::id", callback: (...args: any[]) => void): number
    on(sigName: "notify::id", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::id", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::id", ...args: any[]): void
    connect(sigName: "notify::license", callback: (...args: any[]) => void): number
    on(sigName: "notify::license", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::license", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::license", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::license", ...args: any[]): void
    connect(sigName: "notify::license-uri", callback: (...args: any[]) => void): number
    on(sigName: "notify::license-uri", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::license-uri", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::license-uri", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::license-uri", ...args: any[]): void
    connect(sigName: "notify::max-zoom-level", callback: (...args: any[]) => void): number
    on(sigName: "notify::max-zoom-level", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::max-zoom-level", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::max-zoom-level", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::max-zoom-level", ...args: any[]): void
    connect(sigName: "notify::min-zoom-level", callback: (...args: any[]) => void): number
    on(sigName: "notify::min-zoom-level", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::min-zoom-level", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::min-zoom-level", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::min-zoom-level", ...args: any[]): void
    connect(sigName: "notify::name", callback: (...args: any[]) => void): number
    on(sigName: "notify::name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::projection", callback: (...args: any[]) => void): number
    on(sigName: "notify::projection", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::projection", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::projection", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::projection", ...args: any[]): void
    connect(sigName: "notify::tile-size", callback: (...args: any[]) => void): number
    on(sigName: "notify::tile-size", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::tile-size", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::tile-size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::tile-size", ...args: any[]): void
    connect(sigName: "notify::next-source", callback: (...args: any[]) => void): number
    on(sigName: "notify::next-source", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::next-source", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::next-source", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::next-source", ...args: any[]): void
    connect(sigName: "notify::renderer", callback: (...args: any[]) => void): number
    on(sigName: "notify::renderer", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::renderer", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::renderer", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::renderer", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
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
     * @param licenseUri the map source's license URI
     * @param minZoom the map source's minimum zoom level
     * @param maxZoom the map source's maximum zoom level
     * @param tileSize the map source's tile size (in pixels)
     * @param projection the map source's projection
     * @param renderer the #ChamplainRenderer used to render tiles
     */
    static newFull(id: string, name: string, license: string, licenseUri: string, minZoom: number, maxZoom: number, tileSize: number, projection: MapProjection, renderer: Renderer): NetworkBboxTileSource
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
    maxConns?: number | null
    /**
     * Specifies whether the network tile source can access network
     */
    offline?: boolean | null
    /**
     * Used to override the default proxy for accessing the network.
     */
    proxyUri?: string | null
    /**
     * The uri format of the tile source, see #champlain_network_tile_source_set_uri_format
     */
    uriFormat?: string | null
    /**
     * The HTTP user agent used for requests
     */
    userAgent?: string | null
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
    maxConns: number
    /**
     * Specifies whether the network tile source can access network
     */
    offline: boolean
    /**
     * Used to override the default proxy for accessing the network.
     */
    proxyUri: string
    /**
     * The uri format of the tile source, see #champlain_network_tile_source_set_uri_format
     */
    uriFormat: string
    /**
     * The HTTP user agent used for requests
     */
    userAgent: string

    // Own fields of Champlain-0.12.Champlain.NetworkTileSource

    parentInstance: TileSource
    priv: NetworkTileSourcePrivate

    // Owm methods of Champlain-0.12.Champlain.NetworkTileSource

    /**
     * Gets the max number of allowed simultaneous connections for this tile
     * source.
     */
    getMaxConns(): number
    /**
     * Gets offline status.
     */
    getOffline(): boolean
    /**
     * Gets the proxy uri used to access network.
     */
    getProxyUri(): string
    /**
     * Default constructor of #ChamplainNetworkTileSource.
     */
    getUriFormat(): string
    /**
     * Sets the max number of allowed simultaneous connections for this tile source.
     * 
     * Before changing this remember to verify how many simultaneous connections
     * your tile provider allows you to make.
     * @param maxConns the number of allowed simultaneous connections
     */
    setMaxConns(maxConns: number): void
    /**
     * Sets offline status.
     * @param offline TRUE when the tile source should be offline; FALSE otherwise
     */
    setOffline(offline: boolean): void
    /**
     * Override the default proxy for accessing the network.
     * @param proxyUri the proxy uri used to access network
     */
    setProxyUri(proxyUri: string): void
    /**
     * A URI format is a URI where x, y and zoom level information have been
     * marked for parsing and insertion.  There can be an unlimited number of
     * marked items in a URI format.  They are delimited by "#" before and after
     * the variable name. There are 4 defined variable names: X, Y, Z, and TMSY for
     * Y in TMS coordinates.
     * 
     * For example, this is the OpenStreetMap URI format:
     * "https://tile.openstreetmap.org/\#Z\#/\#X\#/\#Y\#.png"
     * @param uriFormat the URI format
     */
    setUriFormat(uriFormat: string): void
    /**
     * Sets the User-Agent header used communicating with the server.
     * @param userAgent A User-Agent string
     */
    setUserAgent(userAgent: string): void

    // Class property signals of Champlain-0.12.Champlain.NetworkTileSource

    connect(sigName: "notify::max-conns", callback: (...args: any[]) => void): number
    on(sigName: "notify::max-conns", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::max-conns", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::max-conns", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::max-conns", ...args: any[]): void
    connect(sigName: "notify::offline", callback: (...args: any[]) => void): number
    on(sigName: "notify::offline", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::offline", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::offline", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::offline", ...args: any[]): void
    connect(sigName: "notify::proxy-uri", callback: (...args: any[]) => void): number
    on(sigName: "notify::proxy-uri", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::proxy-uri", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::proxy-uri", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::proxy-uri", ...args: any[]): void
    connect(sigName: "notify::uri-format", callback: (...args: any[]) => void): number
    on(sigName: "notify::uri-format", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::uri-format", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::uri-format", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::uri-format", ...args: any[]): void
    connect(sigName: "notify::user-agent", callback: (...args: any[]) => void): number
    on(sigName: "notify::user-agent", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::user-agent", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::user-agent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::user-agent", ...args: any[]): void
    connect(sigName: "notify::cache", callback: (...args: any[]) => void): number
    on(sigName: "notify::cache", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::cache", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::cache", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::cache", ...args: any[]): void
    connect(sigName: "notify::id", callback: (...args: any[]) => void): number
    on(sigName: "notify::id", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::id", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::id", ...args: any[]): void
    connect(sigName: "notify::license", callback: (...args: any[]) => void): number
    on(sigName: "notify::license", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::license", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::license", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::license", ...args: any[]): void
    connect(sigName: "notify::license-uri", callback: (...args: any[]) => void): number
    on(sigName: "notify::license-uri", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::license-uri", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::license-uri", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::license-uri", ...args: any[]): void
    connect(sigName: "notify::max-zoom-level", callback: (...args: any[]) => void): number
    on(sigName: "notify::max-zoom-level", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::max-zoom-level", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::max-zoom-level", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::max-zoom-level", ...args: any[]): void
    connect(sigName: "notify::min-zoom-level", callback: (...args: any[]) => void): number
    on(sigName: "notify::min-zoom-level", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::min-zoom-level", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::min-zoom-level", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::min-zoom-level", ...args: any[]): void
    connect(sigName: "notify::name", callback: (...args: any[]) => void): number
    on(sigName: "notify::name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::projection", callback: (...args: any[]) => void): number
    on(sigName: "notify::projection", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::projection", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::projection", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::projection", ...args: any[]): void
    connect(sigName: "notify::tile-size", callback: (...args: any[]) => void): number
    on(sigName: "notify::tile-size", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::tile-size", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::tile-size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::tile-size", ...args: any[]): void
    connect(sigName: "notify::next-source", callback: (...args: any[]) => void): number
    on(sigName: "notify::next-source", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::next-source", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::next-source", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::next-source", ...args: any[]): void
    connect(sigName: "notify::renderer", callback: (...args: any[]) => void): number
    on(sigName: "notify::renderer", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::renderer", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::renderer", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::renderer", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
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
     * @param licenseUri the map source's license URI
     * @param minZoom the map source's minimum zoom level
     * @param maxZoom the map source's maximum zoom level
     * @param tileSize the map source's tile size (in pixels)
     * @param projection the map source's projection
     * @param uriFormat the URI to fetch the tiles from, see #champlain_network_tile_source_set_uri_format
     * @param renderer the #ChamplainRenderer used to render tiles
     */
    static newFull(id: string, name: string, license: string, licenseUri: string, minZoom: number, maxZoom: number, tileSize: number, projection: MapProjection, uriFormat: string, renderer: Renderer): NetworkTileSource
    _init(config?: NetworkTileSource_ConstructProps): void
}

interface NullTileSource_ConstructProps extends TileSource_ConstructProps {
}

interface NullTileSource {

    // Conflicting properties

    parentInstance: any
    priv: any

    // Own fields of Champlain-0.12.Champlain.NullTileSource

    parent: TileSource

    // Class property signals of Champlain-0.12.Champlain.NullTileSource

    connect(sigName: "notify::cache", callback: (...args: any[]) => void): number
    on(sigName: "notify::cache", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::cache", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::cache", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::cache", ...args: any[]): void
    connect(sigName: "notify::id", callback: (...args: any[]) => void): number
    on(sigName: "notify::id", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::id", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::id", ...args: any[]): void
    connect(sigName: "notify::license", callback: (...args: any[]) => void): number
    on(sigName: "notify::license", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::license", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::license", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::license", ...args: any[]): void
    connect(sigName: "notify::license-uri", callback: (...args: any[]) => void): number
    on(sigName: "notify::license-uri", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::license-uri", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::license-uri", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::license-uri", ...args: any[]): void
    connect(sigName: "notify::max-zoom-level", callback: (...args: any[]) => void): number
    on(sigName: "notify::max-zoom-level", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::max-zoom-level", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::max-zoom-level", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::max-zoom-level", ...args: any[]): void
    connect(sigName: "notify::min-zoom-level", callback: (...args: any[]) => void): number
    on(sigName: "notify::min-zoom-level", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::min-zoom-level", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::min-zoom-level", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::min-zoom-level", ...args: any[]): void
    connect(sigName: "notify::name", callback: (...args: any[]) => void): number
    on(sigName: "notify::name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::projection", callback: (...args: any[]) => void): number
    on(sigName: "notify::projection", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::projection", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::projection", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::projection", ...args: any[]): void
    connect(sigName: "notify::tile-size", callback: (...args: any[]) => void): number
    on(sigName: "notify::tile-size", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::tile-size", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::tile-size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::tile-size", ...args: any[]): void
    connect(sigName: "notify::next-source", callback: (...args: any[]) => void): number
    on(sigName: "notify::next-source", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::next-source", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::next-source", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::next-source", ...args: any[]): void
    connect(sigName: "notify::renderer", callback: (...args: any[]) => void): number
    on(sigName: "notify::renderer", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::renderer", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::renderer", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::renderer", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
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
    static newFull(renderer: Renderer): NullTileSource
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
    fillColor?: Clutter.Color | null
    /**
     * The shape should be stroked
     */
    stroke?: boolean | null
    /**
     * The path's stroke color
     */
    strokeColor?: Clutter.Color | null
    /**
     * The path's stroke width (in pixels)
     */
    strokeWidth?: number | null
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
    fillColor: Clutter.Color
    /**
     * The shape should be stroked
     */
    stroke: boolean
    /**
     * The path's stroke color
     */
    strokeColor: Clutter.Color
    /**
     * The path's stroke width (in pixels)
     */
    strokeWidth: number
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
    addNode(location: Location): void
    /**
     * Gets information whether the path is closed.
     */
    getClosed(): boolean
    /**
     * Returns the list of dash segment lengths.
     */
    getDash(): number[]
    /**
     * Checks whether the path is filled.
     */
    getFill(): boolean
    /**
     * Gets the path's fill color.
     */
    getFillColor(): Clutter.Color
    /**
     * Gets a copy of the list of all #ChamplainLocation objects inserted into the layer. You should
     * free the list but not its contents.
     */
    getNodes(): Location[]
    /**
     * Checks whether the path is stroked.
     */
    getStroke(): boolean
    /**
     * Gets the path's stroke color.
     */
    getStrokeColor(): Clutter.Color
    /**
     * Gets the width of the stroke.
     */
    getStrokeWidth(): number
    /**
     * Gets path visibility.
     */
    getVisible(): boolean
    /**
     * Inserts a #ChamplainLocation object to the specified position.
     * @param location a #ChamplainLocation
     * @param position position in the list where the #ChamplainLocation object should be inserted
     */
    insertNode(location: Location, position: number): void
    /**
     * Removes all #ChamplainLocation objects from the layer.
     */
    removeAll(): void
    /**
     * Removes the #ChamplainLocation object from the layer.
     * @param location a #ChamplainLocation
     */
    removeNode(location: Location): void
    /**
     * Makes the path closed.
     * @param value TRUE to make the path closed
     */
    setClosed(value: boolean): void
    /**
     * Sets dashed line pattern in a way similar to cairo_set_dash() of cairo. This
     * method supports only integer values for segment lengths. The values have to be
     * passed inside the data pointer of the list (using the GUINT_TO_POINTER conversion)
     * 
     * Pass NULL to use solid line.
     * @param dashPattern list of integer values representing lengths     of dashes/spaces (see cairo documentation of cairo_set_dash())
     */
    setDash(dashPattern: number[]): void
    /**
     * Sets the path to be filled
     * @param value if the path is filled
     */
    setFill(value: boolean): void
    /**
     * Set the path's fill color.
     * @param color The path's fill color or NULL to reset to the         default color. The color parameter is copied.
     */
    setFillColor(color: Clutter.Color | null): void
    /**
     * Sets the path to be stroked
     * @param value if the path is stroked
     */
    setStroke(value: boolean): void
    /**
     * Set the path's stroke color.
     * @param color The path's stroke color or NULL to reset to the         default color. The color parameter is copied.
     */
    setStrokeColor(color: Clutter.Color | null): void
    /**
     * Sets the width of the stroke
     * @param value the width of the stroke (in pixels)
     */
    setStrokeWidth(value: number): void
    /**
     * Sets path visibility.
     * @param value TRUE to make the path visible
     */
    setVisible(value: boolean): void

    // Class property signals of Champlain-0.12.Champlain.PathLayer

    connect(sigName: "notify::closed", callback: (...args: any[]) => void): number
    on(sigName: "notify::closed", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::closed", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::closed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::closed", ...args: any[]): void
    connect(sigName: "notify::fill", callback: (...args: any[]) => void): number
    on(sigName: "notify::fill", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::fill", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::fill", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::fill", ...args: any[]): void
    connect(sigName: "notify::fill-color", callback: (...args: any[]) => void): number
    on(sigName: "notify::fill-color", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::fill-color", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::fill-color", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::fill-color", ...args: any[]): void
    connect(sigName: "notify::stroke", callback: (...args: any[]) => void): number
    on(sigName: "notify::stroke", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::stroke", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::stroke", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::stroke", ...args: any[]): void
    connect(sigName: "notify::stroke-color", callback: (...args: any[]) => void): number
    on(sigName: "notify::stroke-color", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::stroke-color", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::stroke-color", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::stroke-color", ...args: any[]): void
    connect(sigName: "notify::stroke-width", callback: (...args: any[]) => void): number
    on(sigName: "notify::stroke-width", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::stroke-width", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::stroke-width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::stroke-width", ...args: any[]): void
    connect(sigName: "notify::visible", callback: (...args: any[]) => void): number
    on(sigName: "notify::visible", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::visible", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::visible", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::visible", ...args: any[]): void
    connect(sigName: "notify::actions", callback: (...args: any[]) => void): number
    on(sigName: "notify::actions", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::actions", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::actions", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::actions", ...args: any[]): void
    connect(sigName: "notify::allocation", callback: (...args: any[]) => void): number
    on(sigName: "notify::allocation", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::allocation", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::allocation", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::allocation", ...args: any[]): void
    connect(sigName: "notify::anchor-gravity", callback: (...args: any[]) => void): number
    on(sigName: "notify::anchor-gravity", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::anchor-gravity", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::anchor-gravity", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::anchor-gravity", ...args: any[]): void
    connect(sigName: "notify::anchor-x", callback: (...args: any[]) => void): number
    on(sigName: "notify::anchor-x", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::anchor-x", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::anchor-x", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::anchor-x", ...args: any[]): void
    connect(sigName: "notify::anchor-y", callback: (...args: any[]) => void): number
    on(sigName: "notify::anchor-y", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::anchor-y", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::anchor-y", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::anchor-y", ...args: any[]): void
    connect(sigName: "notify::background-color", callback: (...args: any[]) => void): number
    on(sigName: "notify::background-color", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::background-color", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::background-color", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::background-color", ...args: any[]): void
    connect(sigName: "notify::background-color-set", callback: (...args: any[]) => void): number
    on(sigName: "notify::background-color-set", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::background-color-set", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::background-color-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::background-color-set", ...args: any[]): void
    connect(sigName: "notify::child-transform", callback: (...args: any[]) => void): number
    on(sigName: "notify::child-transform", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::child-transform", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::child-transform", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::child-transform", ...args: any[]): void
    connect(sigName: "notify::child-transform-set", callback: (...args: any[]) => void): number
    on(sigName: "notify::child-transform-set", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::child-transform-set", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::child-transform-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::child-transform-set", ...args: any[]): void
    connect(sigName: "notify::clip", callback: (...args: any[]) => void): number
    on(sigName: "notify::clip", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::clip", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::clip", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::clip", ...args: any[]): void
    connect(sigName: "notify::clip-rect", callback: (...args: any[]) => void): number
    on(sigName: "notify::clip-rect", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::clip-rect", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::clip-rect", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::clip-rect", ...args: any[]): void
    connect(sigName: "notify::clip-to-allocation", callback: (...args: any[]) => void): number
    on(sigName: "notify::clip-to-allocation", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::clip-to-allocation", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::clip-to-allocation", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::clip-to-allocation", ...args: any[]): void
    connect(sigName: "notify::constraints", callback: (...args: any[]) => void): number
    on(sigName: "notify::constraints", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::constraints", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::constraints", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::constraints", ...args: any[]): void
    connect(sigName: "notify::content", callback: (...args: any[]) => void): number
    on(sigName: "notify::content", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::content", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::content", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::content", ...args: any[]): void
    connect(sigName: "notify::content-box", callback: (...args: any[]) => void): number
    on(sigName: "notify::content-box", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::content-box", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::content-box", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::content-box", ...args: any[]): void
    connect(sigName: "notify::content-gravity", callback: (...args: any[]) => void): number
    on(sigName: "notify::content-gravity", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::content-gravity", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::content-gravity", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::content-gravity", ...args: any[]): void
    connect(sigName: "notify::content-repeat", callback: (...args: any[]) => void): number
    on(sigName: "notify::content-repeat", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::content-repeat", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::content-repeat", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::content-repeat", ...args: any[]): void
    connect(sigName: "notify::depth", callback: (...args: any[]) => void): number
    on(sigName: "notify::depth", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::depth", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::depth", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::depth", ...args: any[]): void
    connect(sigName: "notify::effect", callback: (...args: any[]) => void): number
    on(sigName: "notify::effect", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::effect", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::effect", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::effect", ...args: any[]): void
    connect(sigName: "notify::first-child", callback: (...args: any[]) => void): number
    on(sigName: "notify::first-child", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::first-child", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::first-child", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::first-child", ...args: any[]): void
    connect(sigName: "notify::fixed-position-set", callback: (...args: any[]) => void): number
    on(sigName: "notify::fixed-position-set", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::fixed-position-set", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::fixed-position-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::fixed-position-set", ...args: any[]): void
    connect(sigName: "notify::fixed-x", callback: (...args: any[]) => void): number
    on(sigName: "notify::fixed-x", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::fixed-x", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::fixed-x", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::fixed-x", ...args: any[]): void
    connect(sigName: "notify::fixed-y", callback: (...args: any[]) => void): number
    on(sigName: "notify::fixed-y", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::fixed-y", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::fixed-y", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::fixed-y", ...args: any[]): void
    connect(sigName: "notify::has-clip", callback: (...args: any[]) => void): number
    on(sigName: "notify::has-clip", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::has-clip", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::has-clip", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::has-clip", ...args: any[]): void
    connect(sigName: "notify::has-pointer", callback: (...args: any[]) => void): number
    on(sigName: "notify::has-pointer", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::has-pointer", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::has-pointer", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::has-pointer", ...args: any[]): void
    connect(sigName: "notify::height", callback: (...args: any[]) => void): number
    on(sigName: "notify::height", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::height", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::height", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::height", ...args: any[]): void
    connect(sigName: "notify::last-child", callback: (...args: any[]) => void): number
    on(sigName: "notify::last-child", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::last-child", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::last-child", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::last-child", ...args: any[]): void
    connect(sigName: "notify::layout-manager", callback: (...args: any[]) => void): number
    on(sigName: "notify::layout-manager", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::layout-manager", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::layout-manager", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::layout-manager", ...args: any[]): void
    connect(sigName: "notify::magnification-filter", callback: (...args: any[]) => void): number
    on(sigName: "notify::magnification-filter", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::magnification-filter", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::magnification-filter", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::magnification-filter", ...args: any[]): void
    connect(sigName: "notify::mapped", callback: (...args: any[]) => void): number
    on(sigName: "notify::mapped", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::mapped", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::mapped", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::mapped", ...args: any[]): void
    connect(sigName: "notify::margin-bottom", callback: (...args: any[]) => void): number
    on(sigName: "notify::margin-bottom", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::margin-bottom", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::margin-bottom", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::margin-bottom", ...args: any[]): void
    connect(sigName: "notify::margin-left", callback: (...args: any[]) => void): number
    on(sigName: "notify::margin-left", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::margin-left", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::margin-left", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::margin-left", ...args: any[]): void
    connect(sigName: "notify::margin-right", callback: (...args: any[]) => void): number
    on(sigName: "notify::margin-right", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::margin-right", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::margin-right", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::margin-right", ...args: any[]): void
    connect(sigName: "notify::margin-top", callback: (...args: any[]) => void): number
    on(sigName: "notify::margin-top", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::margin-top", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::margin-top", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::margin-top", ...args: any[]): void
    connect(sigName: "notify::min-height", callback: (...args: any[]) => void): number
    on(sigName: "notify::min-height", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::min-height", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::min-height", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::min-height", ...args: any[]): void
    connect(sigName: "notify::min-height-set", callback: (...args: any[]) => void): number
    on(sigName: "notify::min-height-set", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::min-height-set", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::min-height-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::min-height-set", ...args: any[]): void
    connect(sigName: "notify::min-width", callback: (...args: any[]) => void): number
    on(sigName: "notify::min-width", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::min-width", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::min-width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::min-width", ...args: any[]): void
    connect(sigName: "notify::min-width-set", callback: (...args: any[]) => void): number
    on(sigName: "notify::min-width-set", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::min-width-set", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::min-width-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::min-width-set", ...args: any[]): void
    connect(sigName: "notify::minification-filter", callback: (...args: any[]) => void): number
    on(sigName: "notify::minification-filter", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::minification-filter", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::minification-filter", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::minification-filter", ...args: any[]): void
    connect(sigName: "notify::name", callback: (...args: any[]) => void): number
    on(sigName: "notify::name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::natural-height", callback: (...args: any[]) => void): number
    on(sigName: "notify::natural-height", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::natural-height", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::natural-height", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::natural-height", ...args: any[]): void
    connect(sigName: "notify::natural-height-set", callback: (...args: any[]) => void): number
    on(sigName: "notify::natural-height-set", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::natural-height-set", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::natural-height-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::natural-height-set", ...args: any[]): void
    connect(sigName: "notify::natural-width", callback: (...args: any[]) => void): number
    on(sigName: "notify::natural-width", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::natural-width", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::natural-width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::natural-width", ...args: any[]): void
    connect(sigName: "notify::natural-width-set", callback: (...args: any[]) => void): number
    on(sigName: "notify::natural-width-set", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::natural-width-set", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::natural-width-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::natural-width-set", ...args: any[]): void
    connect(sigName: "notify::offscreen-redirect", callback: (...args: any[]) => void): number
    on(sigName: "notify::offscreen-redirect", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::offscreen-redirect", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::offscreen-redirect", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::offscreen-redirect", ...args: any[]): void
    connect(sigName: "notify::opacity", callback: (...args: any[]) => void): number
    on(sigName: "notify::opacity", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::opacity", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::opacity", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::opacity", ...args: any[]): void
    connect(sigName: "notify::pivot-point", callback: (...args: any[]) => void): number
    on(sigName: "notify::pivot-point", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::pivot-point", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::pivot-point", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::pivot-point", ...args: any[]): void
    connect(sigName: "notify::pivot-point-z", callback: (...args: any[]) => void): number
    on(sigName: "notify::pivot-point-z", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::pivot-point-z", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::pivot-point-z", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::pivot-point-z", ...args: any[]): void
    connect(sigName: "notify::position", callback: (...args: any[]) => void): number
    on(sigName: "notify::position", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::position", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::position", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::position", ...args: any[]): void
    connect(sigName: "notify::reactive", callback: (...args: any[]) => void): number
    on(sigName: "notify::reactive", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::reactive", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::reactive", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::reactive", ...args: any[]): void
    connect(sigName: "notify::realized", callback: (...args: any[]) => void): number
    on(sigName: "notify::realized", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::realized", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::realized", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::realized", ...args: any[]): void
    connect(sigName: "notify::request-mode", callback: (...args: any[]) => void): number
    on(sigName: "notify::request-mode", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::request-mode", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::request-mode", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::request-mode", ...args: any[]): void
    connect(sigName: "notify::rotation-angle-x", callback: (...args: any[]) => void): number
    on(sigName: "notify::rotation-angle-x", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::rotation-angle-x", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::rotation-angle-x", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::rotation-angle-x", ...args: any[]): void
    connect(sigName: "notify::rotation-angle-y", callback: (...args: any[]) => void): number
    on(sigName: "notify::rotation-angle-y", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::rotation-angle-y", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::rotation-angle-y", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::rotation-angle-y", ...args: any[]): void
    connect(sigName: "notify::rotation-angle-z", callback: (...args: any[]) => void): number
    on(sigName: "notify::rotation-angle-z", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::rotation-angle-z", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::rotation-angle-z", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::rotation-angle-z", ...args: any[]): void
    connect(sigName: "notify::rotation-center-x", callback: (...args: any[]) => void): number
    on(sigName: "notify::rotation-center-x", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::rotation-center-x", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::rotation-center-x", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::rotation-center-x", ...args: any[]): void
    connect(sigName: "notify::rotation-center-y", callback: (...args: any[]) => void): number
    on(sigName: "notify::rotation-center-y", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::rotation-center-y", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::rotation-center-y", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::rotation-center-y", ...args: any[]): void
    connect(sigName: "notify::rotation-center-z", callback: (...args: any[]) => void): number
    on(sigName: "notify::rotation-center-z", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::rotation-center-z", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::rotation-center-z", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::rotation-center-z", ...args: any[]): void
    connect(sigName: "notify::rotation-center-z-gravity", callback: (...args: any[]) => void): number
    on(sigName: "notify::rotation-center-z-gravity", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::rotation-center-z-gravity", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::rotation-center-z-gravity", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::rotation-center-z-gravity", ...args: any[]): void
    connect(sigName: "notify::scale-center-x", callback: (...args: any[]) => void): number
    on(sigName: "notify::scale-center-x", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::scale-center-x", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::scale-center-x", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::scale-center-x", ...args: any[]): void
    connect(sigName: "notify::scale-center-y", callback: (...args: any[]) => void): number
    on(sigName: "notify::scale-center-y", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::scale-center-y", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::scale-center-y", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::scale-center-y", ...args: any[]): void
    connect(sigName: "notify::scale-gravity", callback: (...args: any[]) => void): number
    on(sigName: "notify::scale-gravity", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::scale-gravity", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::scale-gravity", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::scale-gravity", ...args: any[]): void
    connect(sigName: "notify::scale-x", callback: (...args: any[]) => void): number
    on(sigName: "notify::scale-x", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::scale-x", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::scale-x", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::scale-x", ...args: any[]): void
    connect(sigName: "notify::scale-y", callback: (...args: any[]) => void): number
    on(sigName: "notify::scale-y", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::scale-y", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::scale-y", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::scale-y", ...args: any[]): void
    connect(sigName: "notify::scale-z", callback: (...args: any[]) => void): number
    on(sigName: "notify::scale-z", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::scale-z", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::scale-z", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::scale-z", ...args: any[]): void
    connect(sigName: "notify::show-on-set-parent", callback: (...args: any[]) => void): number
    on(sigName: "notify::show-on-set-parent", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::show-on-set-parent", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::show-on-set-parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::show-on-set-parent", ...args: any[]): void
    connect(sigName: "notify::size", callback: (...args: any[]) => void): number
    on(sigName: "notify::size", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::size", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::size", ...args: any[]): void
    connect(sigName: "notify::text-direction", callback: (...args: any[]) => void): number
    on(sigName: "notify::text-direction", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::text-direction", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::text-direction", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::text-direction", ...args: any[]): void
    connect(sigName: "notify::transform", callback: (...args: any[]) => void): number
    on(sigName: "notify::transform", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::transform", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::transform", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::transform", ...args: any[]): void
    connect(sigName: "notify::transform-set", callback: (...args: any[]) => void): number
    on(sigName: "notify::transform-set", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::transform-set", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::transform-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::transform-set", ...args: any[]): void
    connect(sigName: "notify::translation-x", callback: (...args: any[]) => void): number
    on(sigName: "notify::translation-x", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::translation-x", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::translation-x", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::translation-x", ...args: any[]): void
    connect(sigName: "notify::translation-y", callback: (...args: any[]) => void): number
    on(sigName: "notify::translation-y", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::translation-y", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::translation-y", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::translation-y", ...args: any[]): void
    connect(sigName: "notify::translation-z", callback: (...args: any[]) => void): number
    on(sigName: "notify::translation-z", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::translation-z", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::translation-z", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::translation-z", ...args: any[]): void
    connect(sigName: "notify::width", callback: (...args: any[]) => void): number
    on(sigName: "notify::width", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::width", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::width", ...args: any[]): void
    connect(sigName: "notify::x", callback: (...args: any[]) => void): number
    on(sigName: "notify::x", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::x", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::x", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::x", ...args: any[]): void
    connect(sigName: "notify::x-align", callback: (...args: any[]) => void): number
    on(sigName: "notify::x-align", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::x-align", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::x-align", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::x-align", ...args: any[]): void
    connect(sigName: "notify::x-expand", callback: (...args: any[]) => void): number
    on(sigName: "notify::x-expand", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::x-expand", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::x-expand", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::x-expand", ...args: any[]): void
    connect(sigName: "notify::y", callback: (...args: any[]) => void): number
    on(sigName: "notify::y", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::y", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::y", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::y", ...args: any[]): void
    connect(sigName: "notify::y-align", callback: (...args: any[]) => void): number
    on(sigName: "notify::y-align", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::y-align", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::y-align", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::y-align", ...args: any[]): void
    connect(sigName: "notify::y-expand", callback: (...args: any[]) => void): number
    on(sigName: "notify::y-expand", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::y-expand", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::y-expand", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::y-expand", ...args: any[]): void
    connect(sigName: "notify::z-position", callback: (...args: any[]) => void): number
    on(sigName: "notify::z-position", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::z-position", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::z-position", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::z-position", ...args: any[]): void
    connect(sigName: "notify::surface", callback: (...args: any[]) => void): number
    on(sigName: "notify::surface", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::surface", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::surface", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::surface", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
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
    getColor(): Clutter.Color
    /**
     * Gets the size of the point.
     */
    getSize(): number

    // Overloads of getSize

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
    getSize(): [ /* width */ number, /* height */ number ]
    getSize(...args: any[]): any
    getSize(...args: any[]): [ /* returnType */ number | void | any, /* width */ number, /* height */ number ]
    /**
     * Set the color of the point.
     * @param color The color of the point or NULL to reset the background to the         default color. The color parameter is copied.
     */
    setColor(color: Clutter.Color | null): void
    /**
     * Set the size of the point.
     * @param size The size of the point.
     */
    setSize(size: number): void

    // Overloads of setSize

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
    setSize(width: number, height?: number): void
    setSize(...args: any[]): any
    setSize(args_or_width: any[] | number, height?: number): void | any

    // Class property signals of Champlain-0.12.Champlain.Point

    connect(sigName: "notify::color", callback: (...args: any[]) => void): number
    on(sigName: "notify::color", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::color", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::color", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::color", ...args: any[]): void
    connect(sigName: "notify::size", callback: (...args: any[]) => void): number
    on(sigName: "notify::size", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::size", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::size", ...args: any[]): void
    connect(sigName: "notify::draggable", callback: (...args: any[]) => void): number
    on(sigName: "notify::draggable", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::draggable", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::draggable", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::draggable", ...args: any[]): void
    connect(sigName: "notify::selectable", callback: (...args: any[]) => void): number
    on(sigName: "notify::selectable", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::selectable", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::selectable", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::selectable", ...args: any[]): void
    connect(sigName: "notify::selected", callback: (...args: any[]) => void): number
    on(sigName: "notify::selected", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::selected", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::selected", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::selected", ...args: any[]): void
    connect(sigName: "notify::actions", callback: (...args: any[]) => void): number
    on(sigName: "notify::actions", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::actions", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::actions", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::actions", ...args: any[]): void
    connect(sigName: "notify::allocation", callback: (...args: any[]) => void): number
    on(sigName: "notify::allocation", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::allocation", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::allocation", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::allocation", ...args: any[]): void
    connect(sigName: "notify::anchor-gravity", callback: (...args: any[]) => void): number
    on(sigName: "notify::anchor-gravity", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::anchor-gravity", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::anchor-gravity", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::anchor-gravity", ...args: any[]): void
    connect(sigName: "notify::anchor-x", callback: (...args: any[]) => void): number
    on(sigName: "notify::anchor-x", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::anchor-x", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::anchor-x", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::anchor-x", ...args: any[]): void
    connect(sigName: "notify::anchor-y", callback: (...args: any[]) => void): number
    on(sigName: "notify::anchor-y", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::anchor-y", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::anchor-y", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::anchor-y", ...args: any[]): void
    connect(sigName: "notify::background-color", callback: (...args: any[]) => void): number
    on(sigName: "notify::background-color", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::background-color", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::background-color", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::background-color", ...args: any[]): void
    connect(sigName: "notify::background-color-set", callback: (...args: any[]) => void): number
    on(sigName: "notify::background-color-set", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::background-color-set", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::background-color-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::background-color-set", ...args: any[]): void
    connect(sigName: "notify::child-transform", callback: (...args: any[]) => void): number
    on(sigName: "notify::child-transform", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::child-transform", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::child-transform", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::child-transform", ...args: any[]): void
    connect(sigName: "notify::child-transform-set", callback: (...args: any[]) => void): number
    on(sigName: "notify::child-transform-set", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::child-transform-set", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::child-transform-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::child-transform-set", ...args: any[]): void
    connect(sigName: "notify::clip", callback: (...args: any[]) => void): number
    on(sigName: "notify::clip", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::clip", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::clip", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::clip", ...args: any[]): void
    connect(sigName: "notify::clip-rect", callback: (...args: any[]) => void): number
    on(sigName: "notify::clip-rect", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::clip-rect", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::clip-rect", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::clip-rect", ...args: any[]): void
    connect(sigName: "notify::clip-to-allocation", callback: (...args: any[]) => void): number
    on(sigName: "notify::clip-to-allocation", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::clip-to-allocation", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::clip-to-allocation", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::clip-to-allocation", ...args: any[]): void
    connect(sigName: "notify::constraints", callback: (...args: any[]) => void): number
    on(sigName: "notify::constraints", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::constraints", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::constraints", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::constraints", ...args: any[]): void
    connect(sigName: "notify::content", callback: (...args: any[]) => void): number
    on(sigName: "notify::content", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::content", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::content", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::content", ...args: any[]): void
    connect(sigName: "notify::content-box", callback: (...args: any[]) => void): number
    on(sigName: "notify::content-box", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::content-box", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::content-box", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::content-box", ...args: any[]): void
    connect(sigName: "notify::content-gravity", callback: (...args: any[]) => void): number
    on(sigName: "notify::content-gravity", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::content-gravity", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::content-gravity", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::content-gravity", ...args: any[]): void
    connect(sigName: "notify::content-repeat", callback: (...args: any[]) => void): number
    on(sigName: "notify::content-repeat", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::content-repeat", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::content-repeat", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::content-repeat", ...args: any[]): void
    connect(sigName: "notify::depth", callback: (...args: any[]) => void): number
    on(sigName: "notify::depth", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::depth", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::depth", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::depth", ...args: any[]): void
    connect(sigName: "notify::effect", callback: (...args: any[]) => void): number
    on(sigName: "notify::effect", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::effect", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::effect", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::effect", ...args: any[]): void
    connect(sigName: "notify::first-child", callback: (...args: any[]) => void): number
    on(sigName: "notify::first-child", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::first-child", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::first-child", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::first-child", ...args: any[]): void
    connect(sigName: "notify::fixed-position-set", callback: (...args: any[]) => void): number
    on(sigName: "notify::fixed-position-set", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::fixed-position-set", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::fixed-position-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::fixed-position-set", ...args: any[]): void
    connect(sigName: "notify::fixed-x", callback: (...args: any[]) => void): number
    on(sigName: "notify::fixed-x", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::fixed-x", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::fixed-x", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::fixed-x", ...args: any[]): void
    connect(sigName: "notify::fixed-y", callback: (...args: any[]) => void): number
    on(sigName: "notify::fixed-y", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::fixed-y", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::fixed-y", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::fixed-y", ...args: any[]): void
    connect(sigName: "notify::has-clip", callback: (...args: any[]) => void): number
    on(sigName: "notify::has-clip", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::has-clip", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::has-clip", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::has-clip", ...args: any[]): void
    connect(sigName: "notify::has-pointer", callback: (...args: any[]) => void): number
    on(sigName: "notify::has-pointer", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::has-pointer", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::has-pointer", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::has-pointer", ...args: any[]): void
    connect(sigName: "notify::height", callback: (...args: any[]) => void): number
    on(sigName: "notify::height", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::height", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::height", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::height", ...args: any[]): void
    connect(sigName: "notify::last-child", callback: (...args: any[]) => void): number
    on(sigName: "notify::last-child", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::last-child", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::last-child", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::last-child", ...args: any[]): void
    connect(sigName: "notify::layout-manager", callback: (...args: any[]) => void): number
    on(sigName: "notify::layout-manager", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::layout-manager", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::layout-manager", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::layout-manager", ...args: any[]): void
    connect(sigName: "notify::magnification-filter", callback: (...args: any[]) => void): number
    on(sigName: "notify::magnification-filter", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::magnification-filter", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::magnification-filter", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::magnification-filter", ...args: any[]): void
    connect(sigName: "notify::mapped", callback: (...args: any[]) => void): number
    on(sigName: "notify::mapped", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::mapped", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::mapped", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::mapped", ...args: any[]): void
    connect(sigName: "notify::margin-bottom", callback: (...args: any[]) => void): number
    on(sigName: "notify::margin-bottom", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::margin-bottom", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::margin-bottom", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::margin-bottom", ...args: any[]): void
    connect(sigName: "notify::margin-left", callback: (...args: any[]) => void): number
    on(sigName: "notify::margin-left", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::margin-left", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::margin-left", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::margin-left", ...args: any[]): void
    connect(sigName: "notify::margin-right", callback: (...args: any[]) => void): number
    on(sigName: "notify::margin-right", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::margin-right", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::margin-right", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::margin-right", ...args: any[]): void
    connect(sigName: "notify::margin-top", callback: (...args: any[]) => void): number
    on(sigName: "notify::margin-top", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::margin-top", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::margin-top", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::margin-top", ...args: any[]): void
    connect(sigName: "notify::min-height", callback: (...args: any[]) => void): number
    on(sigName: "notify::min-height", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::min-height", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::min-height", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::min-height", ...args: any[]): void
    connect(sigName: "notify::min-height-set", callback: (...args: any[]) => void): number
    on(sigName: "notify::min-height-set", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::min-height-set", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::min-height-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::min-height-set", ...args: any[]): void
    connect(sigName: "notify::min-width", callback: (...args: any[]) => void): number
    on(sigName: "notify::min-width", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::min-width", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::min-width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::min-width", ...args: any[]): void
    connect(sigName: "notify::min-width-set", callback: (...args: any[]) => void): number
    on(sigName: "notify::min-width-set", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::min-width-set", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::min-width-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::min-width-set", ...args: any[]): void
    connect(sigName: "notify::minification-filter", callback: (...args: any[]) => void): number
    on(sigName: "notify::minification-filter", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::minification-filter", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::minification-filter", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::minification-filter", ...args: any[]): void
    connect(sigName: "notify::name", callback: (...args: any[]) => void): number
    on(sigName: "notify::name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::natural-height", callback: (...args: any[]) => void): number
    on(sigName: "notify::natural-height", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::natural-height", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::natural-height", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::natural-height", ...args: any[]): void
    connect(sigName: "notify::natural-height-set", callback: (...args: any[]) => void): number
    on(sigName: "notify::natural-height-set", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::natural-height-set", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::natural-height-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::natural-height-set", ...args: any[]): void
    connect(sigName: "notify::natural-width", callback: (...args: any[]) => void): number
    on(sigName: "notify::natural-width", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::natural-width", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::natural-width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::natural-width", ...args: any[]): void
    connect(sigName: "notify::natural-width-set", callback: (...args: any[]) => void): number
    on(sigName: "notify::natural-width-set", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::natural-width-set", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::natural-width-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::natural-width-set", ...args: any[]): void
    connect(sigName: "notify::offscreen-redirect", callback: (...args: any[]) => void): number
    on(sigName: "notify::offscreen-redirect", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::offscreen-redirect", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::offscreen-redirect", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::offscreen-redirect", ...args: any[]): void
    connect(sigName: "notify::opacity", callback: (...args: any[]) => void): number
    on(sigName: "notify::opacity", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::opacity", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::opacity", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::opacity", ...args: any[]): void
    connect(sigName: "notify::pivot-point", callback: (...args: any[]) => void): number
    on(sigName: "notify::pivot-point", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::pivot-point", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::pivot-point", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::pivot-point", ...args: any[]): void
    connect(sigName: "notify::pivot-point-z", callback: (...args: any[]) => void): number
    on(sigName: "notify::pivot-point-z", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::pivot-point-z", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::pivot-point-z", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::pivot-point-z", ...args: any[]): void
    connect(sigName: "notify::position", callback: (...args: any[]) => void): number
    on(sigName: "notify::position", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::position", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::position", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::position", ...args: any[]): void
    connect(sigName: "notify::reactive", callback: (...args: any[]) => void): number
    on(sigName: "notify::reactive", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::reactive", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::reactive", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::reactive", ...args: any[]): void
    connect(sigName: "notify::realized", callback: (...args: any[]) => void): number
    on(sigName: "notify::realized", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::realized", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::realized", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::realized", ...args: any[]): void
    connect(sigName: "notify::request-mode", callback: (...args: any[]) => void): number
    on(sigName: "notify::request-mode", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::request-mode", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::request-mode", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::request-mode", ...args: any[]): void
    connect(sigName: "notify::rotation-angle-x", callback: (...args: any[]) => void): number
    on(sigName: "notify::rotation-angle-x", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::rotation-angle-x", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::rotation-angle-x", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::rotation-angle-x", ...args: any[]): void
    connect(sigName: "notify::rotation-angle-y", callback: (...args: any[]) => void): number
    on(sigName: "notify::rotation-angle-y", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::rotation-angle-y", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::rotation-angle-y", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::rotation-angle-y", ...args: any[]): void
    connect(sigName: "notify::rotation-angle-z", callback: (...args: any[]) => void): number
    on(sigName: "notify::rotation-angle-z", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::rotation-angle-z", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::rotation-angle-z", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::rotation-angle-z", ...args: any[]): void
    connect(sigName: "notify::rotation-center-x", callback: (...args: any[]) => void): number
    on(sigName: "notify::rotation-center-x", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::rotation-center-x", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::rotation-center-x", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::rotation-center-x", ...args: any[]): void
    connect(sigName: "notify::rotation-center-y", callback: (...args: any[]) => void): number
    on(sigName: "notify::rotation-center-y", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::rotation-center-y", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::rotation-center-y", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::rotation-center-y", ...args: any[]): void
    connect(sigName: "notify::rotation-center-z", callback: (...args: any[]) => void): number
    on(sigName: "notify::rotation-center-z", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::rotation-center-z", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::rotation-center-z", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::rotation-center-z", ...args: any[]): void
    connect(sigName: "notify::rotation-center-z-gravity", callback: (...args: any[]) => void): number
    on(sigName: "notify::rotation-center-z-gravity", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::rotation-center-z-gravity", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::rotation-center-z-gravity", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::rotation-center-z-gravity", ...args: any[]): void
    connect(sigName: "notify::scale-center-x", callback: (...args: any[]) => void): number
    on(sigName: "notify::scale-center-x", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::scale-center-x", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::scale-center-x", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::scale-center-x", ...args: any[]): void
    connect(sigName: "notify::scale-center-y", callback: (...args: any[]) => void): number
    on(sigName: "notify::scale-center-y", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::scale-center-y", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::scale-center-y", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::scale-center-y", ...args: any[]): void
    connect(sigName: "notify::scale-gravity", callback: (...args: any[]) => void): number
    on(sigName: "notify::scale-gravity", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::scale-gravity", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::scale-gravity", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::scale-gravity", ...args: any[]): void
    connect(sigName: "notify::scale-x", callback: (...args: any[]) => void): number
    on(sigName: "notify::scale-x", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::scale-x", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::scale-x", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::scale-x", ...args: any[]): void
    connect(sigName: "notify::scale-y", callback: (...args: any[]) => void): number
    on(sigName: "notify::scale-y", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::scale-y", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::scale-y", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::scale-y", ...args: any[]): void
    connect(sigName: "notify::scale-z", callback: (...args: any[]) => void): number
    on(sigName: "notify::scale-z", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::scale-z", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::scale-z", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::scale-z", ...args: any[]): void
    connect(sigName: "notify::show-on-set-parent", callback: (...args: any[]) => void): number
    on(sigName: "notify::show-on-set-parent", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::show-on-set-parent", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::show-on-set-parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::show-on-set-parent", ...args: any[]): void
    connect(sigName: "notify::text-direction", callback: (...args: any[]) => void): number
    on(sigName: "notify::text-direction", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::text-direction", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::text-direction", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::text-direction", ...args: any[]): void
    connect(sigName: "notify::transform", callback: (...args: any[]) => void): number
    on(sigName: "notify::transform", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::transform", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::transform", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::transform", ...args: any[]): void
    connect(sigName: "notify::transform-set", callback: (...args: any[]) => void): number
    on(sigName: "notify::transform-set", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::transform-set", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::transform-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::transform-set", ...args: any[]): void
    connect(sigName: "notify::translation-x", callback: (...args: any[]) => void): number
    on(sigName: "notify::translation-x", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::translation-x", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::translation-x", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::translation-x", ...args: any[]): void
    connect(sigName: "notify::translation-y", callback: (...args: any[]) => void): number
    on(sigName: "notify::translation-y", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::translation-y", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::translation-y", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::translation-y", ...args: any[]): void
    connect(sigName: "notify::translation-z", callback: (...args: any[]) => void): number
    on(sigName: "notify::translation-z", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::translation-z", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::translation-z", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::translation-z", ...args: any[]): void
    connect(sigName: "notify::visible", callback: (...args: any[]) => void): number
    on(sigName: "notify::visible", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::visible", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::visible", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::visible", ...args: any[]): void
    connect(sigName: "notify::width", callback: (...args: any[]) => void): number
    on(sigName: "notify::width", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::width", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::width", ...args: any[]): void
    connect(sigName: "notify::x", callback: (...args: any[]) => void): number
    on(sigName: "notify::x", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::x", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::x", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::x", ...args: any[]): void
    connect(sigName: "notify::x-align", callback: (...args: any[]) => void): number
    on(sigName: "notify::x-align", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::x-align", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::x-align", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::x-align", ...args: any[]): void
    connect(sigName: "notify::x-expand", callback: (...args: any[]) => void): number
    on(sigName: "notify::x-expand", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::x-expand", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::x-expand", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::x-expand", ...args: any[]): void
    connect(sigName: "notify::y", callback: (...args: any[]) => void): number
    on(sigName: "notify::y", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::y", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::y", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::y", ...args: any[]): void
    connect(sigName: "notify::y-align", callback: (...args: any[]) => void): number
    on(sigName: "notify::y-align", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::y-align", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::y-align", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::y-align", ...args: any[]): void
    connect(sigName: "notify::y-expand", callback: (...args: any[]) => void): number
    on(sigName: "notify::y-expand", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::y-expand", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::y-expand", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::y-expand", ...args: any[]): void
    connect(sigName: "notify::z-position", callback: (...args: any[]) => void): number
    on(sigName: "notify::z-position", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::z-position", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::z-position", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::z-position", ...args: any[]): void
    connect(sigName: "notify::surface", callback: (...args: any[]) => void): number
    on(sigName: "notify::surface", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::surface", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::surface", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::surface", ...args: any[]): void
    connect(sigName: "notify::latitude", callback: (...args: any[]) => void): number
    on(sigName: "notify::latitude", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::latitude", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::latitude", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::latitude", ...args: any[]): void
    connect(sigName: "notify::longitude", callback: (...args: any[]) => void): number
    on(sigName: "notify::longitude", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::longitude", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::longitude", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::longitude", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
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
    static newFull(size: number, color: Clutter.Color): Point
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
    setData(data: Uint8Array): void

    // Overloads of setData

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
    setData(key: string, data?: object | null): void
    setData(...args: any[]): any
    setData(args_or_key: any[] | string, data?: object | null): void | any

    // Class property signals of Champlain-0.12.Champlain.Renderer

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
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
    maxWidth?: number | null
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
    maxWidth: number
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
    connectView(view: View): void
    /**
     * This method disconnects from the signals previously connected by champlain_scale_connect_view().
     */
    disconnectView(): void
    /**
     * Gets the maximum scale width.
     */
    getMaxWidth(): number
    /**
     * Gets the unit used by the scale.
     */
    getUnit(): Unit
    /**
     * Sets the maximum width of the scale on the screen in pixels
     * @param value the number of pixels
     */
    setMaxWidth(value: number): void
    /**
     * Sets the scale unit.
     * @param unit a #ChamplainUnit
     */
    setUnit(unit: Unit): void

    // Class property signals of Champlain-0.12.Champlain.Scale

    connect(sigName: "notify::max-width", callback: (...args: any[]) => void): number
    on(sigName: "notify::max-width", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::max-width", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::max-width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::max-width", ...args: any[]): void
    connect(sigName: "notify::unit", callback: (...args: any[]) => void): number
    on(sigName: "notify::unit", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::unit", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::unit", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::unit", ...args: any[]): void
    connect(sigName: "notify::actions", callback: (...args: any[]) => void): number
    on(sigName: "notify::actions", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::actions", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::actions", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::actions", ...args: any[]): void
    connect(sigName: "notify::allocation", callback: (...args: any[]) => void): number
    on(sigName: "notify::allocation", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::allocation", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::allocation", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::allocation", ...args: any[]): void
    connect(sigName: "notify::anchor-gravity", callback: (...args: any[]) => void): number
    on(sigName: "notify::anchor-gravity", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::anchor-gravity", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::anchor-gravity", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::anchor-gravity", ...args: any[]): void
    connect(sigName: "notify::anchor-x", callback: (...args: any[]) => void): number
    on(sigName: "notify::anchor-x", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::anchor-x", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::anchor-x", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::anchor-x", ...args: any[]): void
    connect(sigName: "notify::anchor-y", callback: (...args: any[]) => void): number
    on(sigName: "notify::anchor-y", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::anchor-y", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::anchor-y", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::anchor-y", ...args: any[]): void
    connect(sigName: "notify::background-color", callback: (...args: any[]) => void): number
    on(sigName: "notify::background-color", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::background-color", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::background-color", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::background-color", ...args: any[]): void
    connect(sigName: "notify::background-color-set", callback: (...args: any[]) => void): number
    on(sigName: "notify::background-color-set", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::background-color-set", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::background-color-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::background-color-set", ...args: any[]): void
    connect(sigName: "notify::child-transform", callback: (...args: any[]) => void): number
    on(sigName: "notify::child-transform", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::child-transform", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::child-transform", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::child-transform", ...args: any[]): void
    connect(sigName: "notify::child-transform-set", callback: (...args: any[]) => void): number
    on(sigName: "notify::child-transform-set", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::child-transform-set", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::child-transform-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::child-transform-set", ...args: any[]): void
    connect(sigName: "notify::clip", callback: (...args: any[]) => void): number
    on(sigName: "notify::clip", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::clip", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::clip", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::clip", ...args: any[]): void
    connect(sigName: "notify::clip-rect", callback: (...args: any[]) => void): number
    on(sigName: "notify::clip-rect", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::clip-rect", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::clip-rect", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::clip-rect", ...args: any[]): void
    connect(sigName: "notify::clip-to-allocation", callback: (...args: any[]) => void): number
    on(sigName: "notify::clip-to-allocation", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::clip-to-allocation", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::clip-to-allocation", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::clip-to-allocation", ...args: any[]): void
    connect(sigName: "notify::constraints", callback: (...args: any[]) => void): number
    on(sigName: "notify::constraints", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::constraints", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::constraints", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::constraints", ...args: any[]): void
    connect(sigName: "notify::content", callback: (...args: any[]) => void): number
    on(sigName: "notify::content", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::content", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::content", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::content", ...args: any[]): void
    connect(sigName: "notify::content-box", callback: (...args: any[]) => void): number
    on(sigName: "notify::content-box", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::content-box", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::content-box", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::content-box", ...args: any[]): void
    connect(sigName: "notify::content-gravity", callback: (...args: any[]) => void): number
    on(sigName: "notify::content-gravity", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::content-gravity", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::content-gravity", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::content-gravity", ...args: any[]): void
    connect(sigName: "notify::content-repeat", callback: (...args: any[]) => void): number
    on(sigName: "notify::content-repeat", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::content-repeat", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::content-repeat", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::content-repeat", ...args: any[]): void
    connect(sigName: "notify::depth", callback: (...args: any[]) => void): number
    on(sigName: "notify::depth", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::depth", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::depth", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::depth", ...args: any[]): void
    connect(sigName: "notify::effect", callback: (...args: any[]) => void): number
    on(sigName: "notify::effect", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::effect", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::effect", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::effect", ...args: any[]): void
    connect(sigName: "notify::first-child", callback: (...args: any[]) => void): number
    on(sigName: "notify::first-child", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::first-child", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::first-child", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::first-child", ...args: any[]): void
    connect(sigName: "notify::fixed-position-set", callback: (...args: any[]) => void): number
    on(sigName: "notify::fixed-position-set", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::fixed-position-set", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::fixed-position-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::fixed-position-set", ...args: any[]): void
    connect(sigName: "notify::fixed-x", callback: (...args: any[]) => void): number
    on(sigName: "notify::fixed-x", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::fixed-x", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::fixed-x", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::fixed-x", ...args: any[]): void
    connect(sigName: "notify::fixed-y", callback: (...args: any[]) => void): number
    on(sigName: "notify::fixed-y", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::fixed-y", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::fixed-y", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::fixed-y", ...args: any[]): void
    connect(sigName: "notify::has-clip", callback: (...args: any[]) => void): number
    on(sigName: "notify::has-clip", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::has-clip", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::has-clip", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::has-clip", ...args: any[]): void
    connect(sigName: "notify::has-pointer", callback: (...args: any[]) => void): number
    on(sigName: "notify::has-pointer", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::has-pointer", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::has-pointer", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::has-pointer", ...args: any[]): void
    connect(sigName: "notify::height", callback: (...args: any[]) => void): number
    on(sigName: "notify::height", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::height", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::height", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::height", ...args: any[]): void
    connect(sigName: "notify::last-child", callback: (...args: any[]) => void): number
    on(sigName: "notify::last-child", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::last-child", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::last-child", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::last-child", ...args: any[]): void
    connect(sigName: "notify::layout-manager", callback: (...args: any[]) => void): number
    on(sigName: "notify::layout-manager", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::layout-manager", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::layout-manager", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::layout-manager", ...args: any[]): void
    connect(sigName: "notify::magnification-filter", callback: (...args: any[]) => void): number
    on(sigName: "notify::magnification-filter", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::magnification-filter", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::magnification-filter", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::magnification-filter", ...args: any[]): void
    connect(sigName: "notify::mapped", callback: (...args: any[]) => void): number
    on(sigName: "notify::mapped", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::mapped", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::mapped", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::mapped", ...args: any[]): void
    connect(sigName: "notify::margin-bottom", callback: (...args: any[]) => void): number
    on(sigName: "notify::margin-bottom", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::margin-bottom", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::margin-bottom", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::margin-bottom", ...args: any[]): void
    connect(sigName: "notify::margin-left", callback: (...args: any[]) => void): number
    on(sigName: "notify::margin-left", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::margin-left", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::margin-left", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::margin-left", ...args: any[]): void
    connect(sigName: "notify::margin-right", callback: (...args: any[]) => void): number
    on(sigName: "notify::margin-right", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::margin-right", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::margin-right", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::margin-right", ...args: any[]): void
    connect(sigName: "notify::margin-top", callback: (...args: any[]) => void): number
    on(sigName: "notify::margin-top", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::margin-top", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::margin-top", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::margin-top", ...args: any[]): void
    connect(sigName: "notify::min-height", callback: (...args: any[]) => void): number
    on(sigName: "notify::min-height", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::min-height", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::min-height", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::min-height", ...args: any[]): void
    connect(sigName: "notify::min-height-set", callback: (...args: any[]) => void): number
    on(sigName: "notify::min-height-set", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::min-height-set", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::min-height-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::min-height-set", ...args: any[]): void
    connect(sigName: "notify::min-width", callback: (...args: any[]) => void): number
    on(sigName: "notify::min-width", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::min-width", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::min-width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::min-width", ...args: any[]): void
    connect(sigName: "notify::min-width-set", callback: (...args: any[]) => void): number
    on(sigName: "notify::min-width-set", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::min-width-set", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::min-width-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::min-width-set", ...args: any[]): void
    connect(sigName: "notify::minification-filter", callback: (...args: any[]) => void): number
    on(sigName: "notify::minification-filter", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::minification-filter", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::minification-filter", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::minification-filter", ...args: any[]): void
    connect(sigName: "notify::name", callback: (...args: any[]) => void): number
    on(sigName: "notify::name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::natural-height", callback: (...args: any[]) => void): number
    on(sigName: "notify::natural-height", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::natural-height", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::natural-height", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::natural-height", ...args: any[]): void
    connect(sigName: "notify::natural-height-set", callback: (...args: any[]) => void): number
    on(sigName: "notify::natural-height-set", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::natural-height-set", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::natural-height-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::natural-height-set", ...args: any[]): void
    connect(sigName: "notify::natural-width", callback: (...args: any[]) => void): number
    on(sigName: "notify::natural-width", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::natural-width", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::natural-width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::natural-width", ...args: any[]): void
    connect(sigName: "notify::natural-width-set", callback: (...args: any[]) => void): number
    on(sigName: "notify::natural-width-set", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::natural-width-set", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::natural-width-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::natural-width-set", ...args: any[]): void
    connect(sigName: "notify::offscreen-redirect", callback: (...args: any[]) => void): number
    on(sigName: "notify::offscreen-redirect", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::offscreen-redirect", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::offscreen-redirect", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::offscreen-redirect", ...args: any[]): void
    connect(sigName: "notify::opacity", callback: (...args: any[]) => void): number
    on(sigName: "notify::opacity", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::opacity", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::opacity", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::opacity", ...args: any[]): void
    connect(sigName: "notify::pivot-point", callback: (...args: any[]) => void): number
    on(sigName: "notify::pivot-point", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::pivot-point", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::pivot-point", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::pivot-point", ...args: any[]): void
    connect(sigName: "notify::pivot-point-z", callback: (...args: any[]) => void): number
    on(sigName: "notify::pivot-point-z", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::pivot-point-z", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::pivot-point-z", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::pivot-point-z", ...args: any[]): void
    connect(sigName: "notify::position", callback: (...args: any[]) => void): number
    on(sigName: "notify::position", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::position", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::position", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::position", ...args: any[]): void
    connect(sigName: "notify::reactive", callback: (...args: any[]) => void): number
    on(sigName: "notify::reactive", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::reactive", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::reactive", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::reactive", ...args: any[]): void
    connect(sigName: "notify::realized", callback: (...args: any[]) => void): number
    on(sigName: "notify::realized", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::realized", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::realized", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::realized", ...args: any[]): void
    connect(sigName: "notify::request-mode", callback: (...args: any[]) => void): number
    on(sigName: "notify::request-mode", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::request-mode", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::request-mode", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::request-mode", ...args: any[]): void
    connect(sigName: "notify::rotation-angle-x", callback: (...args: any[]) => void): number
    on(sigName: "notify::rotation-angle-x", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::rotation-angle-x", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::rotation-angle-x", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::rotation-angle-x", ...args: any[]): void
    connect(sigName: "notify::rotation-angle-y", callback: (...args: any[]) => void): number
    on(sigName: "notify::rotation-angle-y", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::rotation-angle-y", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::rotation-angle-y", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::rotation-angle-y", ...args: any[]): void
    connect(sigName: "notify::rotation-angle-z", callback: (...args: any[]) => void): number
    on(sigName: "notify::rotation-angle-z", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::rotation-angle-z", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::rotation-angle-z", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::rotation-angle-z", ...args: any[]): void
    connect(sigName: "notify::rotation-center-x", callback: (...args: any[]) => void): number
    on(sigName: "notify::rotation-center-x", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::rotation-center-x", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::rotation-center-x", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::rotation-center-x", ...args: any[]): void
    connect(sigName: "notify::rotation-center-y", callback: (...args: any[]) => void): number
    on(sigName: "notify::rotation-center-y", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::rotation-center-y", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::rotation-center-y", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::rotation-center-y", ...args: any[]): void
    connect(sigName: "notify::rotation-center-z", callback: (...args: any[]) => void): number
    on(sigName: "notify::rotation-center-z", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::rotation-center-z", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::rotation-center-z", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::rotation-center-z", ...args: any[]): void
    connect(sigName: "notify::rotation-center-z-gravity", callback: (...args: any[]) => void): number
    on(sigName: "notify::rotation-center-z-gravity", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::rotation-center-z-gravity", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::rotation-center-z-gravity", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::rotation-center-z-gravity", ...args: any[]): void
    connect(sigName: "notify::scale-center-x", callback: (...args: any[]) => void): number
    on(sigName: "notify::scale-center-x", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::scale-center-x", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::scale-center-x", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::scale-center-x", ...args: any[]): void
    connect(sigName: "notify::scale-center-y", callback: (...args: any[]) => void): number
    on(sigName: "notify::scale-center-y", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::scale-center-y", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::scale-center-y", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::scale-center-y", ...args: any[]): void
    connect(sigName: "notify::scale-gravity", callback: (...args: any[]) => void): number
    on(sigName: "notify::scale-gravity", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::scale-gravity", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::scale-gravity", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::scale-gravity", ...args: any[]): void
    connect(sigName: "notify::scale-x", callback: (...args: any[]) => void): number
    on(sigName: "notify::scale-x", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::scale-x", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::scale-x", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::scale-x", ...args: any[]): void
    connect(sigName: "notify::scale-y", callback: (...args: any[]) => void): number
    on(sigName: "notify::scale-y", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::scale-y", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::scale-y", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::scale-y", ...args: any[]): void
    connect(sigName: "notify::scale-z", callback: (...args: any[]) => void): number
    on(sigName: "notify::scale-z", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::scale-z", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::scale-z", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::scale-z", ...args: any[]): void
    connect(sigName: "notify::show-on-set-parent", callback: (...args: any[]) => void): number
    on(sigName: "notify::show-on-set-parent", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::show-on-set-parent", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::show-on-set-parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::show-on-set-parent", ...args: any[]): void
    connect(sigName: "notify::size", callback: (...args: any[]) => void): number
    on(sigName: "notify::size", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::size", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::size", ...args: any[]): void
    connect(sigName: "notify::text-direction", callback: (...args: any[]) => void): number
    on(sigName: "notify::text-direction", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::text-direction", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::text-direction", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::text-direction", ...args: any[]): void
    connect(sigName: "notify::transform", callback: (...args: any[]) => void): number
    on(sigName: "notify::transform", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::transform", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::transform", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::transform", ...args: any[]): void
    connect(sigName: "notify::transform-set", callback: (...args: any[]) => void): number
    on(sigName: "notify::transform-set", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::transform-set", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::transform-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::transform-set", ...args: any[]): void
    connect(sigName: "notify::translation-x", callback: (...args: any[]) => void): number
    on(sigName: "notify::translation-x", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::translation-x", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::translation-x", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::translation-x", ...args: any[]): void
    connect(sigName: "notify::translation-y", callback: (...args: any[]) => void): number
    on(sigName: "notify::translation-y", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::translation-y", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::translation-y", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::translation-y", ...args: any[]): void
    connect(sigName: "notify::translation-z", callback: (...args: any[]) => void): number
    on(sigName: "notify::translation-z", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::translation-z", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::translation-z", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::translation-z", ...args: any[]): void
    connect(sigName: "notify::visible", callback: (...args: any[]) => void): number
    on(sigName: "notify::visible", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::visible", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::visible", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::visible", ...args: any[]): void
    connect(sigName: "notify::width", callback: (...args: any[]) => void): number
    on(sigName: "notify::width", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::width", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::width", ...args: any[]): void
    connect(sigName: "notify::x", callback: (...args: any[]) => void): number
    on(sigName: "notify::x", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::x", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::x", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::x", ...args: any[]): void
    connect(sigName: "notify::x-align", callback: (...args: any[]) => void): number
    on(sigName: "notify::x-align", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::x-align", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::x-align", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::x-align", ...args: any[]): void
    connect(sigName: "notify::x-expand", callback: (...args: any[]) => void): number
    on(sigName: "notify::x-expand", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::x-expand", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::x-expand", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::x-expand", ...args: any[]): void
    connect(sigName: "notify::y", callback: (...args: any[]) => void): number
    on(sigName: "notify::y", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::y", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::y", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::y", ...args: any[]): void
    connect(sigName: "notify::y-align", callback: (...args: any[]) => void): number
    on(sigName: "notify::y-align", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::y-align", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::y-align", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::y-align", ...args: any[]): void
    connect(sigName: "notify::y-expand", callback: (...args: any[]) => void): number
    on(sigName: "notify::y-expand", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::y-expand", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::y-expand", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::y-expand", ...args: any[]): void
    connect(sigName: "notify::z-position", callback: (...args: any[]) => void): number
    on(sigName: "notify::z-position", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::z-position", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::z-position", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::z-position", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
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
    fadeIn?: boolean | null
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
    zoomLevel?: number | null
}

/**
 * Signal callback interface for `render-complete`
 */
interface Tile_RenderCompleteSignalCallback {
    (data: object | null, size: number, error: boolean): void
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
    fadeIn: boolean
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
    zoomLevel: number

    // Own fields of Champlain-0.12.Champlain.Tile

    parent: Clutter.Actor
    priv: TilePrivate

    // Owm methods of Champlain-0.12.Champlain.Tile

    /**
     * Displays the tile's content.
     */
    displayContent(): void
    /**
     * Gets the tile's content actor.
     */
    getContent(): Clutter.Actor

    // Overloads of getContent

    /**
     * Retrieves the contents of `self`.
     */
    getContent(): Clutter.Content
    getContent(...args: any[]): any
    getContent(...args: any[]): Clutter.Actor | Clutter.Content | any
    /**
     * Gets the tile's ETag.
     */
    getEtag(): string
    /**
     * Checks whether the tile should fade in.
     */
    getFadeIn(): boolean
    /**
     * Gets the tile's last modified time.
     */
    getModifiedTime(): GLib.TimeVal
    /**
     * Gets the tile's size.
     */
    getSize(): number

    // Overloads of getSize

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
    getSize(): [ /* width */ number, /* height */ number ]
    getSize(...args: any[]): any
    getSize(...args: any[]): [ /* returnType */ number | void | any, /* width */ number, /* height */ number ]
    /**
     * Gets the current state of tile loading.
     */
    getState(): State
    /**
     * Gets the tile's x position.
     */
    getX(): number
    /**
     * Gets the tile's y position.
     */
    getY(): number
    /**
     * Gets the tile's zoom level.
     */
    getZoomLevel(): number
    /**
     * Sets the tile's content. To also disppay the tile, you have to call
     * champlain_tile_display_content() in addition.
     * @param actor the new content
     */
    setContent(actor: Clutter.Actor): void

    // Overloads of setContent

    /**
     * Sets the contents of a #ClutterActor.
     * @param content a #ClutterContent, or %NULL
     */
    setContent(content: Clutter.Content | null): void
    setContent(...args: any[]): any
    setContent(args_or_content: any[] | Clutter.Content | null): void | any
    /**
     * Sets the tile's ETag
     * @param etag the tile's ETag as sent by the server
     */
    setEtag(etag: string): void
    /**
     * Sets the flag determining whether the tile should fade in when loading
     * @param fadeIn determines whether the tile should fade in when loading
     */
    setFadeIn(fadeIn: boolean): void
    /**
     * Sets the tile's modified time
     * @param time a #GTimeVal, the value will be copied
     */
    setModifiedTime(time: GLib.TimeVal): void
    /**
     * Sets the tile's size
     * @param size the size in pixels
     */
    setSize(size: number): void

    // Overloads of setSize

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
    setSize(width: number, height?: number): void
    setSize(...args: any[]): any
    setSize(args_or_width: any[] | number, height?: number): void | any
    /**
     * Sets the tile's #ChamplainState
     * @param state a #ChamplainState
     */
    setState(state: State): void
    /**
     * Sets the tile's x position
     * @param x the position
     */
    setX(x: number): void
    /**
     * Sets the tile's y position
     * @param y the position
     */
    setY(y: number): void
    /**
     * Sets the tile's zoom level
     * @param zoomLevel the zoom level
     */
    setZoomLevel(zoomLevel: number): void

    // Own signals of Champlain-0.12.Champlain.Tile

    connect(sigName: "render-complete", callback: Tile_RenderCompleteSignalCallback): number
    on(sigName: "render-complete", callback: Tile_RenderCompleteSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "render-complete", callback: Tile_RenderCompleteSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "render-complete", callback: Tile_RenderCompleteSignalCallback): NodeJS.EventEmitter
    emit(sigName: "render-complete", size: number, error: boolean, ...args: any[]): void

    // Class property signals of Champlain-0.12.Champlain.Tile

    connect(sigName: "notify::content", callback: (...args: any[]) => void): number
    on(sigName: "notify::content", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::content", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::content", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::content", ...args: any[]): void
    connect(sigName: "notify::etag", callback: (...args: any[]) => void): number
    on(sigName: "notify::etag", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::etag", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::etag", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::etag", ...args: any[]): void
    connect(sigName: "notify::fade-in", callback: (...args: any[]) => void): number
    on(sigName: "notify::fade-in", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::fade-in", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::fade-in", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::fade-in", ...args: any[]): void
    connect(sigName: "notify::size", callback: (...args: any[]) => void): number
    on(sigName: "notify::size", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::size", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::size", ...args: any[]): void
    connect(sigName: "notify::state", callback: (...args: any[]) => void): number
    on(sigName: "notify::state", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::state", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::state", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::state", ...args: any[]): void
    connect(sigName: "notify::x", callback: (...args: any[]) => void): number
    on(sigName: "notify::x", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::x", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::x", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::x", ...args: any[]): void
    connect(sigName: "notify::y", callback: (...args: any[]) => void): number
    on(sigName: "notify::y", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::y", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::y", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::y", ...args: any[]): void
    connect(sigName: "notify::zoom-level", callback: (...args: any[]) => void): number
    on(sigName: "notify::zoom-level", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::zoom-level", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::zoom-level", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::zoom-level", ...args: any[]): void
    connect(sigName: "notify::actions", callback: (...args: any[]) => void): number
    on(sigName: "notify::actions", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::actions", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::actions", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::actions", ...args: any[]): void
    connect(sigName: "notify::allocation", callback: (...args: any[]) => void): number
    on(sigName: "notify::allocation", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::allocation", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::allocation", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::allocation", ...args: any[]): void
    connect(sigName: "notify::anchor-gravity", callback: (...args: any[]) => void): number
    on(sigName: "notify::anchor-gravity", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::anchor-gravity", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::anchor-gravity", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::anchor-gravity", ...args: any[]): void
    connect(sigName: "notify::anchor-x", callback: (...args: any[]) => void): number
    on(sigName: "notify::anchor-x", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::anchor-x", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::anchor-x", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::anchor-x", ...args: any[]): void
    connect(sigName: "notify::anchor-y", callback: (...args: any[]) => void): number
    on(sigName: "notify::anchor-y", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::anchor-y", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::anchor-y", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::anchor-y", ...args: any[]): void
    connect(sigName: "notify::background-color", callback: (...args: any[]) => void): number
    on(sigName: "notify::background-color", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::background-color", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::background-color", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::background-color", ...args: any[]): void
    connect(sigName: "notify::background-color-set", callback: (...args: any[]) => void): number
    on(sigName: "notify::background-color-set", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::background-color-set", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::background-color-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::background-color-set", ...args: any[]): void
    connect(sigName: "notify::child-transform", callback: (...args: any[]) => void): number
    on(sigName: "notify::child-transform", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::child-transform", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::child-transform", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::child-transform", ...args: any[]): void
    connect(sigName: "notify::child-transform-set", callback: (...args: any[]) => void): number
    on(sigName: "notify::child-transform-set", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::child-transform-set", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::child-transform-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::child-transform-set", ...args: any[]): void
    connect(sigName: "notify::clip", callback: (...args: any[]) => void): number
    on(sigName: "notify::clip", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::clip", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::clip", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::clip", ...args: any[]): void
    connect(sigName: "notify::clip-rect", callback: (...args: any[]) => void): number
    on(sigName: "notify::clip-rect", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::clip-rect", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::clip-rect", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::clip-rect", ...args: any[]): void
    connect(sigName: "notify::clip-to-allocation", callback: (...args: any[]) => void): number
    on(sigName: "notify::clip-to-allocation", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::clip-to-allocation", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::clip-to-allocation", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::clip-to-allocation", ...args: any[]): void
    connect(sigName: "notify::constraints", callback: (...args: any[]) => void): number
    on(sigName: "notify::constraints", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::constraints", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::constraints", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::constraints", ...args: any[]): void
    connect(sigName: "notify::content-box", callback: (...args: any[]) => void): number
    on(sigName: "notify::content-box", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::content-box", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::content-box", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::content-box", ...args: any[]): void
    connect(sigName: "notify::content-gravity", callback: (...args: any[]) => void): number
    on(sigName: "notify::content-gravity", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::content-gravity", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::content-gravity", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::content-gravity", ...args: any[]): void
    connect(sigName: "notify::content-repeat", callback: (...args: any[]) => void): number
    on(sigName: "notify::content-repeat", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::content-repeat", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::content-repeat", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::content-repeat", ...args: any[]): void
    connect(sigName: "notify::depth", callback: (...args: any[]) => void): number
    on(sigName: "notify::depth", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::depth", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::depth", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::depth", ...args: any[]): void
    connect(sigName: "notify::effect", callback: (...args: any[]) => void): number
    on(sigName: "notify::effect", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::effect", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::effect", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::effect", ...args: any[]): void
    connect(sigName: "notify::first-child", callback: (...args: any[]) => void): number
    on(sigName: "notify::first-child", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::first-child", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::first-child", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::first-child", ...args: any[]): void
    connect(sigName: "notify::fixed-position-set", callback: (...args: any[]) => void): number
    on(sigName: "notify::fixed-position-set", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::fixed-position-set", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::fixed-position-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::fixed-position-set", ...args: any[]): void
    connect(sigName: "notify::fixed-x", callback: (...args: any[]) => void): number
    on(sigName: "notify::fixed-x", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::fixed-x", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::fixed-x", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::fixed-x", ...args: any[]): void
    connect(sigName: "notify::fixed-y", callback: (...args: any[]) => void): number
    on(sigName: "notify::fixed-y", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::fixed-y", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::fixed-y", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::fixed-y", ...args: any[]): void
    connect(sigName: "notify::has-clip", callback: (...args: any[]) => void): number
    on(sigName: "notify::has-clip", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::has-clip", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::has-clip", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::has-clip", ...args: any[]): void
    connect(sigName: "notify::has-pointer", callback: (...args: any[]) => void): number
    on(sigName: "notify::has-pointer", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::has-pointer", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::has-pointer", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::has-pointer", ...args: any[]): void
    connect(sigName: "notify::height", callback: (...args: any[]) => void): number
    on(sigName: "notify::height", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::height", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::height", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::height", ...args: any[]): void
    connect(sigName: "notify::last-child", callback: (...args: any[]) => void): number
    on(sigName: "notify::last-child", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::last-child", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::last-child", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::last-child", ...args: any[]): void
    connect(sigName: "notify::layout-manager", callback: (...args: any[]) => void): number
    on(sigName: "notify::layout-manager", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::layout-manager", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::layout-manager", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::layout-manager", ...args: any[]): void
    connect(sigName: "notify::magnification-filter", callback: (...args: any[]) => void): number
    on(sigName: "notify::magnification-filter", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::magnification-filter", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::magnification-filter", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::magnification-filter", ...args: any[]): void
    connect(sigName: "notify::mapped", callback: (...args: any[]) => void): number
    on(sigName: "notify::mapped", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::mapped", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::mapped", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::mapped", ...args: any[]): void
    connect(sigName: "notify::margin-bottom", callback: (...args: any[]) => void): number
    on(sigName: "notify::margin-bottom", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::margin-bottom", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::margin-bottom", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::margin-bottom", ...args: any[]): void
    connect(sigName: "notify::margin-left", callback: (...args: any[]) => void): number
    on(sigName: "notify::margin-left", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::margin-left", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::margin-left", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::margin-left", ...args: any[]): void
    connect(sigName: "notify::margin-right", callback: (...args: any[]) => void): number
    on(sigName: "notify::margin-right", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::margin-right", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::margin-right", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::margin-right", ...args: any[]): void
    connect(sigName: "notify::margin-top", callback: (...args: any[]) => void): number
    on(sigName: "notify::margin-top", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::margin-top", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::margin-top", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::margin-top", ...args: any[]): void
    connect(sigName: "notify::min-height", callback: (...args: any[]) => void): number
    on(sigName: "notify::min-height", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::min-height", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::min-height", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::min-height", ...args: any[]): void
    connect(sigName: "notify::min-height-set", callback: (...args: any[]) => void): number
    on(sigName: "notify::min-height-set", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::min-height-set", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::min-height-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::min-height-set", ...args: any[]): void
    connect(sigName: "notify::min-width", callback: (...args: any[]) => void): number
    on(sigName: "notify::min-width", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::min-width", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::min-width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::min-width", ...args: any[]): void
    connect(sigName: "notify::min-width-set", callback: (...args: any[]) => void): number
    on(sigName: "notify::min-width-set", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::min-width-set", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::min-width-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::min-width-set", ...args: any[]): void
    connect(sigName: "notify::minification-filter", callback: (...args: any[]) => void): number
    on(sigName: "notify::minification-filter", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::minification-filter", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::minification-filter", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::minification-filter", ...args: any[]): void
    connect(sigName: "notify::name", callback: (...args: any[]) => void): number
    on(sigName: "notify::name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::natural-height", callback: (...args: any[]) => void): number
    on(sigName: "notify::natural-height", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::natural-height", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::natural-height", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::natural-height", ...args: any[]): void
    connect(sigName: "notify::natural-height-set", callback: (...args: any[]) => void): number
    on(sigName: "notify::natural-height-set", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::natural-height-set", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::natural-height-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::natural-height-set", ...args: any[]): void
    connect(sigName: "notify::natural-width", callback: (...args: any[]) => void): number
    on(sigName: "notify::natural-width", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::natural-width", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::natural-width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::natural-width", ...args: any[]): void
    connect(sigName: "notify::natural-width-set", callback: (...args: any[]) => void): number
    on(sigName: "notify::natural-width-set", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::natural-width-set", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::natural-width-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::natural-width-set", ...args: any[]): void
    connect(sigName: "notify::offscreen-redirect", callback: (...args: any[]) => void): number
    on(sigName: "notify::offscreen-redirect", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::offscreen-redirect", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::offscreen-redirect", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::offscreen-redirect", ...args: any[]): void
    connect(sigName: "notify::opacity", callback: (...args: any[]) => void): number
    on(sigName: "notify::opacity", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::opacity", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::opacity", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::opacity", ...args: any[]): void
    connect(sigName: "notify::pivot-point", callback: (...args: any[]) => void): number
    on(sigName: "notify::pivot-point", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::pivot-point", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::pivot-point", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::pivot-point", ...args: any[]): void
    connect(sigName: "notify::pivot-point-z", callback: (...args: any[]) => void): number
    on(sigName: "notify::pivot-point-z", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::pivot-point-z", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::pivot-point-z", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::pivot-point-z", ...args: any[]): void
    connect(sigName: "notify::position", callback: (...args: any[]) => void): number
    on(sigName: "notify::position", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::position", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::position", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::position", ...args: any[]): void
    connect(sigName: "notify::reactive", callback: (...args: any[]) => void): number
    on(sigName: "notify::reactive", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::reactive", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::reactive", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::reactive", ...args: any[]): void
    connect(sigName: "notify::realized", callback: (...args: any[]) => void): number
    on(sigName: "notify::realized", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::realized", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::realized", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::realized", ...args: any[]): void
    connect(sigName: "notify::request-mode", callback: (...args: any[]) => void): number
    on(sigName: "notify::request-mode", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::request-mode", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::request-mode", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::request-mode", ...args: any[]): void
    connect(sigName: "notify::rotation-angle-x", callback: (...args: any[]) => void): number
    on(sigName: "notify::rotation-angle-x", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::rotation-angle-x", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::rotation-angle-x", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::rotation-angle-x", ...args: any[]): void
    connect(sigName: "notify::rotation-angle-y", callback: (...args: any[]) => void): number
    on(sigName: "notify::rotation-angle-y", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::rotation-angle-y", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::rotation-angle-y", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::rotation-angle-y", ...args: any[]): void
    connect(sigName: "notify::rotation-angle-z", callback: (...args: any[]) => void): number
    on(sigName: "notify::rotation-angle-z", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::rotation-angle-z", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::rotation-angle-z", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::rotation-angle-z", ...args: any[]): void
    connect(sigName: "notify::rotation-center-x", callback: (...args: any[]) => void): number
    on(sigName: "notify::rotation-center-x", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::rotation-center-x", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::rotation-center-x", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::rotation-center-x", ...args: any[]): void
    connect(sigName: "notify::rotation-center-y", callback: (...args: any[]) => void): number
    on(sigName: "notify::rotation-center-y", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::rotation-center-y", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::rotation-center-y", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::rotation-center-y", ...args: any[]): void
    connect(sigName: "notify::rotation-center-z", callback: (...args: any[]) => void): number
    on(sigName: "notify::rotation-center-z", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::rotation-center-z", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::rotation-center-z", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::rotation-center-z", ...args: any[]): void
    connect(sigName: "notify::rotation-center-z-gravity", callback: (...args: any[]) => void): number
    on(sigName: "notify::rotation-center-z-gravity", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::rotation-center-z-gravity", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::rotation-center-z-gravity", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::rotation-center-z-gravity", ...args: any[]): void
    connect(sigName: "notify::scale-center-x", callback: (...args: any[]) => void): number
    on(sigName: "notify::scale-center-x", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::scale-center-x", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::scale-center-x", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::scale-center-x", ...args: any[]): void
    connect(sigName: "notify::scale-center-y", callback: (...args: any[]) => void): number
    on(sigName: "notify::scale-center-y", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::scale-center-y", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::scale-center-y", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::scale-center-y", ...args: any[]): void
    connect(sigName: "notify::scale-gravity", callback: (...args: any[]) => void): number
    on(sigName: "notify::scale-gravity", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::scale-gravity", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::scale-gravity", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::scale-gravity", ...args: any[]): void
    connect(sigName: "notify::scale-x", callback: (...args: any[]) => void): number
    on(sigName: "notify::scale-x", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::scale-x", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::scale-x", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::scale-x", ...args: any[]): void
    connect(sigName: "notify::scale-y", callback: (...args: any[]) => void): number
    on(sigName: "notify::scale-y", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::scale-y", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::scale-y", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::scale-y", ...args: any[]): void
    connect(sigName: "notify::scale-z", callback: (...args: any[]) => void): number
    on(sigName: "notify::scale-z", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::scale-z", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::scale-z", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::scale-z", ...args: any[]): void
    connect(sigName: "notify::show-on-set-parent", callback: (...args: any[]) => void): number
    on(sigName: "notify::show-on-set-parent", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::show-on-set-parent", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::show-on-set-parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::show-on-set-parent", ...args: any[]): void
    connect(sigName: "notify::text-direction", callback: (...args: any[]) => void): number
    on(sigName: "notify::text-direction", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::text-direction", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::text-direction", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::text-direction", ...args: any[]): void
    connect(sigName: "notify::transform", callback: (...args: any[]) => void): number
    on(sigName: "notify::transform", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::transform", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::transform", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::transform", ...args: any[]): void
    connect(sigName: "notify::transform-set", callback: (...args: any[]) => void): number
    on(sigName: "notify::transform-set", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::transform-set", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::transform-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::transform-set", ...args: any[]): void
    connect(sigName: "notify::translation-x", callback: (...args: any[]) => void): number
    on(sigName: "notify::translation-x", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::translation-x", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::translation-x", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::translation-x", ...args: any[]): void
    connect(sigName: "notify::translation-y", callback: (...args: any[]) => void): number
    on(sigName: "notify::translation-y", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::translation-y", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::translation-y", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::translation-y", ...args: any[]): void
    connect(sigName: "notify::translation-z", callback: (...args: any[]) => void): number
    on(sigName: "notify::translation-z", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::translation-z", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::translation-z", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::translation-z", ...args: any[]): void
    connect(sigName: "notify::visible", callback: (...args: any[]) => void): number
    on(sigName: "notify::visible", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::visible", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::visible", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::visible", ...args: any[]): void
    connect(sigName: "notify::width", callback: (...args: any[]) => void): number
    on(sigName: "notify::width", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::width", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::width", ...args: any[]): void
    connect(sigName: "notify::x-align", callback: (...args: any[]) => void): number
    on(sigName: "notify::x-align", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::x-align", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::x-align", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::x-align", ...args: any[]): void
    connect(sigName: "notify::x-expand", callback: (...args: any[]) => void): number
    on(sigName: "notify::x-expand", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::x-expand", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::x-expand", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::x-expand", ...args: any[]): void
    connect(sigName: "notify::y-align", callback: (...args: any[]) => void): number
    on(sigName: "notify::y-align", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::y-align", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::y-align", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::y-align", ...args: any[]): void
    connect(sigName: "notify::y-expand", callback: (...args: any[]) => void): number
    on(sigName: "notify::y-expand", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::y-expand", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::y-expand", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::y-expand", ...args: any[]): void
    connect(sigName: "notify::z-position", callback: (...args: any[]) => void): number
    on(sigName: "notify::z-position", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::z-position", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::z-position", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::z-position", ...args: any[]): void
    connect(sigName: "notify::surface", callback: (...args: any[]) => void): number
    on(sigName: "notify::surface", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::surface", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::surface", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::surface", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
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
     * @param zoomLevel the zoom level
     */
    static newFull(x: number, y: number, size: number, zoomLevel: number): Tile
    _init(config?: Tile_ConstructProps): void
}

interface TileCache_ConstructProps extends MapSource_ConstructProps {
}

interface TileCache {

    // Own fields of Champlain-0.12.Champlain.TileCache

    parentInstance: MapSource
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
    onTileFilled(tile: Tile): void
    /**
     * Refreshes the tile access time in the cache.
     * @param tile a #ChamplainTile
     */
    refreshTileTime(tile: Tile): void
    /**
     * Stores the tile including the metadata into the cache.
     * @param tile a #ChamplainTile
     * @param contents the tile contents that should be stored
     * @param size size of the contents in bytes
     */
    storeTile(tile: Tile, contents: string, size: number): void

    // Class property signals of Champlain-0.12.Champlain.TileCache

    connect(sigName: "notify::next-source", callback: (...args: any[]) => void): number
    on(sigName: "notify::next-source", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::next-source", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::next-source", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::next-source", ...args: any[]): void
    connect(sigName: "notify::renderer", callback: (...args: any[]) => void): number
    on(sigName: "notify::renderer", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::renderer", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::renderer", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::renderer", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
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
    licenseUri?: string | null
    /**
     * The maximum zoom level
     */
    maxZoomLevel?: number | null
    /**
     * The minimum zoom level
     */
    minZoomLevel?: number | null
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
    tileSize?: number | null
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
    licenseUri: string
    /**
     * The maximum zoom level
     */
    maxZoomLevel: number
    /**
     * The minimum zoom level
     */
    minZoomLevel: number
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
    tileSize: number

    // Own fields of Champlain-0.12.Champlain.TileSource

    parentInstance: MapSource
    priv: TileSourcePrivate

    // Owm methods of Champlain-0.12.Champlain.TileSource

    /**
     * Gets the cache used for storing tiles by this tile source.
     */
    getCache(): TileCache
    /**
     * Sets the map source's cache used for storing tiles.
     * @param cache a #ChamplainTileCache
     */
    setCache(cache: TileCache): void
    /**
     * Sets the tile source's id.
     * @param id an id
     */
    setId(id: string): void
    /**
     * Sets the tile source's license.
     * @param license the licence
     */
    setLicense(license: string): void
    /**
     * Sets the tile source's license URI.
     * @param licenseUri the licence URI
     */
    setLicenseUri(licenseUri: string): void
    /**
     * Sets the tile source's maximum zoom level.
     * @param zoomLevel the maximum zoom level
     */
    setMaxZoomLevel(zoomLevel: number): void
    /**
     * Sets the tile source's minimal zoom level.
     * @param zoomLevel the minimal zoom level
     */
    setMinZoomLevel(zoomLevel: number): void
    /**
     * Sets the tile source's name.
     * @param name a name
     */
    setName(name: string): void
    /**
     * Sets the tile source's projection.
     * @param projection a #ChamplainMapProjection
     */
    setProjection(projection: MapProjection): void
    /**
     * Sets the tile source's tile size.
     * @param tileSize the tile size
     */
    setTileSize(tileSize: number): void

    // Class property signals of Champlain-0.12.Champlain.TileSource

    connect(sigName: "notify::cache", callback: (...args: any[]) => void): number
    on(sigName: "notify::cache", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::cache", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::cache", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::cache", ...args: any[]): void
    connect(sigName: "notify::id", callback: (...args: any[]) => void): number
    on(sigName: "notify::id", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::id", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::id", ...args: any[]): void
    connect(sigName: "notify::license", callback: (...args: any[]) => void): number
    on(sigName: "notify::license", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::license", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::license", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::license", ...args: any[]): void
    connect(sigName: "notify::license-uri", callback: (...args: any[]) => void): number
    on(sigName: "notify::license-uri", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::license-uri", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::license-uri", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::license-uri", ...args: any[]): void
    connect(sigName: "notify::max-zoom-level", callback: (...args: any[]) => void): number
    on(sigName: "notify::max-zoom-level", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::max-zoom-level", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::max-zoom-level", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::max-zoom-level", ...args: any[]): void
    connect(sigName: "notify::min-zoom-level", callback: (...args: any[]) => void): number
    on(sigName: "notify::min-zoom-level", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::min-zoom-level", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::min-zoom-level", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::min-zoom-level", ...args: any[]): void
    connect(sigName: "notify::name", callback: (...args: any[]) => void): number
    on(sigName: "notify::name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::projection", callback: (...args: any[]) => void): number
    on(sigName: "notify::projection", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::projection", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::projection", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::projection", ...args: any[]): void
    connect(sigName: "notify::tile-size", callback: (...args: any[]) => void): number
    on(sigName: "notify::tile-size", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::tile-size", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::tile-size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::tile-size", ...args: any[]): void
    connect(sigName: "notify::next-source", callback: (...args: any[]) => void): number
    on(sigName: "notify::next-source", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::next-source", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::next-source", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::next-source", ...args: any[]): void
    connect(sigName: "notify::renderer", callback: (...args: any[]) => void): number
    on(sigName: "notify::renderer", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::renderer", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::renderer", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::renderer", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
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
    animateZoom?: boolean | null
    /**
     * The pattern displayed in the background of the map.
     */
    backgroundPattern?: Clutter.Actor | null
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
    gotoAnimationDuration?: number | null
    /**
     * The mode of animation when going to a location.
     * 
     * Please note that animation of #champlain_view_ensure_visible also
     * involves a 'goto' animation.
     */
    gotoAnimationMode?: Clutter.AnimationMode | null
    /**
     * Determines whether the view should wrap horizontally.
     */
    horizontalWrap?: boolean | null
    /**
     * Keep the current centered position when resizing the view.
     */
    keepCenterOnResize?: boolean | null
    /**
     * Determines whether the view should use kinetic mode.
     */
    kineticMode?: boolean | null
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
    mapSource?: MapSource | null
    /**
     * The highest allowed level of zoom of the content.
     */
    maxZoomLevel?: number | null
    /**
     * The lowest allowed level of zoom of the content.
     */
    minZoomLevel?: number | null
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
    zoomLevel?: number | null
    /**
     * Should the view zoom in and recenter when the user double click on the map.
     */
    zoomOnDoubleClick?: boolean | null
}

/**
 * Signal callback interface for `animation-completed`
 */
interface View_AnimationCompletedSignalCallback {
    (): void
}

/**
 * Signal callback interface for `layer-relocated`
 */
interface View_LayerRelocatedSignalCallback {
    (): void
}

interface View extends Atk.ImplementorIface, Clutter.Animatable, Clutter.Container, Clutter.Scriptable {

    // Own properties of Champlain-0.12.Champlain.View

    /**
     * Animate zoom change when zooming in/out.
     */
    animateZoom: boolean
    /**
     * The pattern displayed in the background of the map.
     */
    backgroundPattern: Clutter.Actor
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
    gotoAnimationDuration: number
    /**
     * The mode of animation when going to a location.
     * 
     * Please note that animation of #champlain_view_ensure_visible also
     * involves a 'goto' animation.
     */
    gotoAnimationMode: Clutter.AnimationMode
    /**
     * Determines whether the view should wrap horizontally.
     */
    horizontalWrap: boolean
    /**
     * Keep the current centered position when resizing the view.
     */
    keepCenterOnResize: boolean
    /**
     * Determines whether the view should use kinetic mode.
     */
    kineticMode: boolean
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
    mapSource: MapSource
    /**
     * The highest allowed level of zoom of the content.
     */
    maxZoomLevel: number
    /**
     * The lowest allowed level of zoom of the content.
     */
    minZoomLevel: number
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
    zoomLevel: number
    /**
     * Should the view zoom in and recenter when the user double click on the map.
     */
    zoomOnDoubleClick: boolean

    // Own fields of Champlain-0.12.Champlain.View

    parent: Clutter.Actor
    priv: ViewPrivate

    // Owm methods of Champlain-0.12.Champlain.View

    /**
     * Adds a new layer to the view
     * @param layer a #ChamplainLayer
     */
    addLayer(layer: Layer): void
    /**
     * Adds a new overlay map source to render tiles with the supplied opacity on top
     * of the ordinary map source. Multiple overlay sources can be added.
     * @param mapSource a #ChamplainMapSource
     * @param opacity opacity to use
     */
    addOverlaySource(mapSource: MapSource, opacity: number): void
    /**
     * This function inserts a custom actor to the undrelying #ClutterBinLayout
     * manager. The inserted actors appear on top of the map. See clutter_bin_layout_add()
     * for reference.
     * @param child The child to be inserted
     * @param xAlign x alignment
     * @param yAlign y alignment
     */
    binLayoutAdd(child: Clutter.Actor, xAlign: Clutter.BinAlignment, yAlign: Clutter.BinAlignment): void
    /**
     * Centers the map on these coordinates.
     * @param latitude the longitude to center the map at
     * @param longitude the longitude to center the map at
     */
    centerOn(latitude: number, longitude: number): void
    /**
     * Changes the map's zoom level and center to make sure that the bounding
     * boxes of all inserted layers are visible.
     * @param animate TRUE to perform animation, FALSE otherwise
     */
    ensureLayersVisible(animate: boolean): void
    /**
     * Changes the map's zoom level and center to make sure the given area
     * is visible
     * @param bbox bounding box of the area that should be visible
     * @param animate TRUE to perform animation, FALSE otherwise
     */
    ensureVisible(bbox: BoundingBox, animate: boolean): void
    /**
     * Checks whether the view animates zoom level changes.
     */
    getAnimateZoom(): boolean
    /**
     * Gets the current background texture displayed behind the map.
     */
    getBackgroundPattern(): Clutter.Content
    /**
     * Gets the bounding box for view `view` at current zoom-level.
     */
    getBoundingBox(): BoundingBox
    /**
     * Gets the bounding box for view `view` at `zoom_level`.
     * @param zoomLevel the level of zoom, a guint between 1 and 20
     */
    getBoundingBoxForZoomLevel(zoomLevel: number): BoundingBox
    /**
     * Gets the latitude of the view's center.
     */
    getCenterLatitude(): number
    /**
     * Gets the longitude of the view's center.
     */
    getCenterLongitude(): number
    /**
     * Gets the view's deceleration rate.
     */
    getDeceleration(): number
    /**
     * Returns the value of the #ChamplainView:horizontal-wrap property.
     */
    getHorizontalWrap(): boolean
    /**
     * Checks whether to keep the center on resize
     */
    getKeepCenterOnResize(): boolean
    /**
     * Gets the view's scroll mode behaviour.
     */
    getKineticMode(): boolean
    /**
     * Returns the #ChamplainLicense actor which is inserted by default into the
     * layout manager. It can be manipulated using standard #ClutterActor methods
     * (hidden and so on).
     */
    getLicenseActor(): License
    /**
     * Gets the view's current map source.
     */
    getMapSource(): MapSource
    /**
     * Gets the view's maximum allowed zoom level.
     */
    getMaxZoomLevel(): number
    /**
     * Gets the view's minimal allowed zoom level.
     */
    getMinZoomLevel(): number
    /**
     * Gets a list of overlay sources.
     */
    getOverlaySources(): MapSource[]
    /**
     * Gets the view's state.
     */
    getState(): State
    /**
     * Gets the x and y coordinate of the viewport anchor in respect to the layer origin.
     */
    getViewportAnchor(): [ /* anchorX */ number, /* anchorY */ number ]
    /**
     * Gets the x and y coordinate of the viewport in respect to the layer origin.
     */
    getViewportOrigin(): [ /* x */ number, /* y */ number ]
    /**
     * Get the bounding box that represents the extent of the world.
     */
    getWorld(): BoundingBox
    /**
     * Gets the view's current zoom level.
     */
    getZoomLevel(): number
    /**
     * Checks whether the view zooms on double click.
     */
    getZoomOnDoubleClick(): boolean
    /**
     * Move from the current position to these coordinates. All tiles in the
     * intermediate view WILL be loaded!
     * @param latitude the longitude to center the map at
     * @param longitude the longitude to center the map at
     */
    goTo(latitude: number, longitude: number): void
    /**
     * Converts the latitude to view's y coordinate.
     * @param latitude the latitude
     */
    latitudeToY(latitude: number): number
    /**
     * Converts the longitude to view's x coordinate.
     * @param longitude the longitude
     */
    longitudeToX(longitude: number): number
    /**
     * Reloads all visible tiles.
     */
    reloadTiles(): void
    /**
     * Removes the given layer from the view
     * @param layer a #ChamplainLayer
     */
    removeLayer(layer: Layer): void
    /**
     * Removes an overlay source from #ChamplainView.
     * @param mapSource a #ChamplainMapSource
     */
    removeOverlaySource(mapSource: MapSource): void
    /**
     * Should the view animate zoom level changes.
     * @param value a #gboolean
     */
    setAnimateZoom(value: boolean): void
    /**
     * Sets the background texture displayed behind the map. Setting the background
     * pattern affects performence slightly - use reasonably large patterns for
     * better performance.
     * @param background The background texture
     */
    setBackgroundPattern(background: Clutter.Content): void
    /**
     * The deceleration rate for the kinetic mode.
     * @param rate a #gdouble between 1.001 and 2.0
     */
    setDeceleration(rate: number): void
    /**
     * Sets the value of the #ChamplainView:horizontal-wrap property.
     * @param wrap %TRUE to enable horizontal wrapping
     */
    setHorizontalWrap(wrap: boolean): void
    /**
     * Keep the current centered position when resizing the view.
     * @param value a #gboolean
     */
    setKeepCenterOnResize(value: boolean): void
    /**
     * Determines the way the view reacts to scroll events.
     * @param kinetic TRUE for kinetic mode, FALSE for push mode
     */
    setKineticMode(kinetic: boolean): void
    /**
     * Changes the currently used map source. #g_object_unref() will be called on
     * the previous one.
     * 
     * As a side effect, changing the primary map source will also clear all
     * secondary map sources.
     * @param mapSource a #ChamplainMapSource
     */
    setMapSource(mapSource: MapSource): void
    /**
     * Changes the highest allowed level of zoom
     * @param zoomLevel the level of zoom
     */
    setMaxZoomLevel(zoomLevel: number): void
    /**
     * Changes the lowest allowed level of zoom
     * @param zoomLevel the level of zoom
     */
    setMinZoomLevel(zoomLevel: number): void
    /**
     * Set a bounding box to limit the world to. No tiles will be loaded
     * outside of this bounding box. It will not be possible to scroll outside
     * of this bounding box.
     * @param bbox the #ChamplainBoundingBox of the world
     */
    setWorld(bbox: BoundingBox): void
    /**
     * Changes the current level of zoom
     * @param zoomLevel the level of zoom, a guint between 1 and 20
     */
    setZoomLevel(zoomLevel: number): void
    /**
     * Should the view zoom in and recenter when the user double click on the map.
     * @param value a #gboolean
     */
    setZoomOnDoubleClick(value: boolean): void
    /**
     * Stop the go to animation.  The view will stay where it was when the
     * animation was stopped.
     */
    stopGoTo(): void
    /**
     * Will generate a #cairo_surface_t that represents the current view
     * of the map. Without any markers or layers. If the current #ChamplainRenderer
     * used does not support this, this function will return %NULL.
     * 
     * If `include_layers` is set to %TRUE all layers that implement
     * #ChamplainExportable will be included in the surface.
     * 
     * The #ChamplainView also need to be in #CHAMPLAIN_STATE_DONE state.
     * @param includeLayers Set to %TRUE if you want to include layers
     */
    toSurface(includeLayers: boolean): cairo.Surface
    /**
     * Converts the view's x coordinate to longitude.
     * @param x x coordinate of the view
     */
    xToLongitude(x: number): number
    /**
     * Converts the view's y coordinate to latitude.
     * @param y y coordinate of the view
     */
    yToLatitude(y: number): number
    /**
     * Zoom in the map by one level.
     */
    zoomIn(): void
    /**
     * Zoom out the map by one level.
     */
    zoomOut(): void

    // Own signals of Champlain-0.12.Champlain.View

    connect(sigName: "animation-completed", callback: View_AnimationCompletedSignalCallback): number
    on(sigName: "animation-completed", callback: View_AnimationCompletedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "animation-completed", callback: View_AnimationCompletedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "animation-completed", callback: View_AnimationCompletedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "animation-completed", ...args: any[]): void
    connect(sigName: "layer-relocated", callback: View_LayerRelocatedSignalCallback): number
    on(sigName: "layer-relocated", callback: View_LayerRelocatedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "layer-relocated", callback: View_LayerRelocatedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "layer-relocated", callback: View_LayerRelocatedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "layer-relocated", ...args: any[]): void

    // Class property signals of Champlain-0.12.Champlain.View

    connect(sigName: "notify::animate-zoom", callback: (...args: any[]) => void): number
    on(sigName: "notify::animate-zoom", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::animate-zoom", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::animate-zoom", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::animate-zoom", ...args: any[]): void
    connect(sigName: "notify::background-pattern", callback: (...args: any[]) => void): number
    on(sigName: "notify::background-pattern", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::background-pattern", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::background-pattern", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::background-pattern", ...args: any[]): void
    connect(sigName: "notify::deceleration", callback: (...args: any[]) => void): number
    on(sigName: "notify::deceleration", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::deceleration", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::deceleration", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::deceleration", ...args: any[]): void
    connect(sigName: "notify::goto-animation-duration", callback: (...args: any[]) => void): number
    on(sigName: "notify::goto-animation-duration", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::goto-animation-duration", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::goto-animation-duration", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::goto-animation-duration", ...args: any[]): void
    connect(sigName: "notify::goto-animation-mode", callback: (...args: any[]) => void): number
    on(sigName: "notify::goto-animation-mode", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::goto-animation-mode", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::goto-animation-mode", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::goto-animation-mode", ...args: any[]): void
    connect(sigName: "notify::horizontal-wrap", callback: (...args: any[]) => void): number
    on(sigName: "notify::horizontal-wrap", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::horizontal-wrap", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::horizontal-wrap", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::horizontal-wrap", ...args: any[]): void
    connect(sigName: "notify::keep-center-on-resize", callback: (...args: any[]) => void): number
    on(sigName: "notify::keep-center-on-resize", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::keep-center-on-resize", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::keep-center-on-resize", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::keep-center-on-resize", ...args: any[]): void
    connect(sigName: "notify::kinetic-mode", callback: (...args: any[]) => void): number
    on(sigName: "notify::kinetic-mode", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::kinetic-mode", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::kinetic-mode", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::kinetic-mode", ...args: any[]): void
    connect(sigName: "notify::latitude", callback: (...args: any[]) => void): number
    on(sigName: "notify::latitude", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::latitude", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::latitude", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::latitude", ...args: any[]): void
    connect(sigName: "notify::longitude", callback: (...args: any[]) => void): number
    on(sigName: "notify::longitude", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::longitude", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::longitude", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::longitude", ...args: any[]): void
    connect(sigName: "notify::map-source", callback: (...args: any[]) => void): number
    on(sigName: "notify::map-source", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::map-source", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::map-source", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::map-source", ...args: any[]): void
    connect(sigName: "notify::max-zoom-level", callback: (...args: any[]) => void): number
    on(sigName: "notify::max-zoom-level", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::max-zoom-level", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::max-zoom-level", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::max-zoom-level", ...args: any[]): void
    connect(sigName: "notify::min-zoom-level", callback: (...args: any[]) => void): number
    on(sigName: "notify::min-zoom-level", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::min-zoom-level", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::min-zoom-level", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::min-zoom-level", ...args: any[]): void
    connect(sigName: "notify::state", callback: (...args: any[]) => void): number
    on(sigName: "notify::state", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::state", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::state", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::state", ...args: any[]): void
    connect(sigName: "notify::world", callback: (...args: any[]) => void): number
    on(sigName: "notify::world", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::world", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::world", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::world", ...args: any[]): void
    connect(sigName: "notify::zoom-level", callback: (...args: any[]) => void): number
    on(sigName: "notify::zoom-level", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::zoom-level", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::zoom-level", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::zoom-level", ...args: any[]): void
    connect(sigName: "notify::zoom-on-double-click", callback: (...args: any[]) => void): number
    on(sigName: "notify::zoom-on-double-click", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::zoom-on-double-click", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::zoom-on-double-click", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::zoom-on-double-click", ...args: any[]): void
    connect(sigName: "notify::actions", callback: (...args: any[]) => void): number
    on(sigName: "notify::actions", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::actions", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::actions", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::actions", ...args: any[]): void
    connect(sigName: "notify::allocation", callback: (...args: any[]) => void): number
    on(sigName: "notify::allocation", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::allocation", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::allocation", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::allocation", ...args: any[]): void
    connect(sigName: "notify::anchor-gravity", callback: (...args: any[]) => void): number
    on(sigName: "notify::anchor-gravity", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::anchor-gravity", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::anchor-gravity", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::anchor-gravity", ...args: any[]): void
    connect(sigName: "notify::anchor-x", callback: (...args: any[]) => void): number
    on(sigName: "notify::anchor-x", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::anchor-x", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::anchor-x", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::anchor-x", ...args: any[]): void
    connect(sigName: "notify::anchor-y", callback: (...args: any[]) => void): number
    on(sigName: "notify::anchor-y", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::anchor-y", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::anchor-y", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::anchor-y", ...args: any[]): void
    connect(sigName: "notify::background-color", callback: (...args: any[]) => void): number
    on(sigName: "notify::background-color", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::background-color", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::background-color", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::background-color", ...args: any[]): void
    connect(sigName: "notify::background-color-set", callback: (...args: any[]) => void): number
    on(sigName: "notify::background-color-set", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::background-color-set", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::background-color-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::background-color-set", ...args: any[]): void
    connect(sigName: "notify::child-transform", callback: (...args: any[]) => void): number
    on(sigName: "notify::child-transform", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::child-transform", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::child-transform", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::child-transform", ...args: any[]): void
    connect(sigName: "notify::child-transform-set", callback: (...args: any[]) => void): number
    on(sigName: "notify::child-transform-set", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::child-transform-set", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::child-transform-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::child-transform-set", ...args: any[]): void
    connect(sigName: "notify::clip", callback: (...args: any[]) => void): number
    on(sigName: "notify::clip", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::clip", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::clip", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::clip", ...args: any[]): void
    connect(sigName: "notify::clip-rect", callback: (...args: any[]) => void): number
    on(sigName: "notify::clip-rect", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::clip-rect", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::clip-rect", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::clip-rect", ...args: any[]): void
    connect(sigName: "notify::clip-to-allocation", callback: (...args: any[]) => void): number
    on(sigName: "notify::clip-to-allocation", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::clip-to-allocation", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::clip-to-allocation", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::clip-to-allocation", ...args: any[]): void
    connect(sigName: "notify::constraints", callback: (...args: any[]) => void): number
    on(sigName: "notify::constraints", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::constraints", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::constraints", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::constraints", ...args: any[]): void
    connect(sigName: "notify::content", callback: (...args: any[]) => void): number
    on(sigName: "notify::content", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::content", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::content", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::content", ...args: any[]): void
    connect(sigName: "notify::content-box", callback: (...args: any[]) => void): number
    on(sigName: "notify::content-box", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::content-box", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::content-box", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::content-box", ...args: any[]): void
    connect(sigName: "notify::content-gravity", callback: (...args: any[]) => void): number
    on(sigName: "notify::content-gravity", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::content-gravity", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::content-gravity", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::content-gravity", ...args: any[]): void
    connect(sigName: "notify::content-repeat", callback: (...args: any[]) => void): number
    on(sigName: "notify::content-repeat", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::content-repeat", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::content-repeat", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::content-repeat", ...args: any[]): void
    connect(sigName: "notify::depth", callback: (...args: any[]) => void): number
    on(sigName: "notify::depth", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::depth", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::depth", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::depth", ...args: any[]): void
    connect(sigName: "notify::effect", callback: (...args: any[]) => void): number
    on(sigName: "notify::effect", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::effect", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::effect", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::effect", ...args: any[]): void
    connect(sigName: "notify::first-child", callback: (...args: any[]) => void): number
    on(sigName: "notify::first-child", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::first-child", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::first-child", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::first-child", ...args: any[]): void
    connect(sigName: "notify::fixed-position-set", callback: (...args: any[]) => void): number
    on(sigName: "notify::fixed-position-set", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::fixed-position-set", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::fixed-position-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::fixed-position-set", ...args: any[]): void
    connect(sigName: "notify::fixed-x", callback: (...args: any[]) => void): number
    on(sigName: "notify::fixed-x", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::fixed-x", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::fixed-x", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::fixed-x", ...args: any[]): void
    connect(sigName: "notify::fixed-y", callback: (...args: any[]) => void): number
    on(sigName: "notify::fixed-y", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::fixed-y", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::fixed-y", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::fixed-y", ...args: any[]): void
    connect(sigName: "notify::has-clip", callback: (...args: any[]) => void): number
    on(sigName: "notify::has-clip", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::has-clip", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::has-clip", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::has-clip", ...args: any[]): void
    connect(sigName: "notify::has-pointer", callback: (...args: any[]) => void): number
    on(sigName: "notify::has-pointer", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::has-pointer", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::has-pointer", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::has-pointer", ...args: any[]): void
    connect(sigName: "notify::height", callback: (...args: any[]) => void): number
    on(sigName: "notify::height", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::height", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::height", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::height", ...args: any[]): void
    connect(sigName: "notify::last-child", callback: (...args: any[]) => void): number
    on(sigName: "notify::last-child", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::last-child", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::last-child", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::last-child", ...args: any[]): void
    connect(sigName: "notify::layout-manager", callback: (...args: any[]) => void): number
    on(sigName: "notify::layout-manager", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::layout-manager", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::layout-manager", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::layout-manager", ...args: any[]): void
    connect(sigName: "notify::magnification-filter", callback: (...args: any[]) => void): number
    on(sigName: "notify::magnification-filter", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::magnification-filter", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::magnification-filter", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::magnification-filter", ...args: any[]): void
    connect(sigName: "notify::mapped", callback: (...args: any[]) => void): number
    on(sigName: "notify::mapped", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::mapped", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::mapped", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::mapped", ...args: any[]): void
    connect(sigName: "notify::margin-bottom", callback: (...args: any[]) => void): number
    on(sigName: "notify::margin-bottom", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::margin-bottom", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::margin-bottom", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::margin-bottom", ...args: any[]): void
    connect(sigName: "notify::margin-left", callback: (...args: any[]) => void): number
    on(sigName: "notify::margin-left", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::margin-left", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::margin-left", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::margin-left", ...args: any[]): void
    connect(sigName: "notify::margin-right", callback: (...args: any[]) => void): number
    on(sigName: "notify::margin-right", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::margin-right", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::margin-right", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::margin-right", ...args: any[]): void
    connect(sigName: "notify::margin-top", callback: (...args: any[]) => void): number
    on(sigName: "notify::margin-top", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::margin-top", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::margin-top", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::margin-top", ...args: any[]): void
    connect(sigName: "notify::min-height", callback: (...args: any[]) => void): number
    on(sigName: "notify::min-height", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::min-height", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::min-height", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::min-height", ...args: any[]): void
    connect(sigName: "notify::min-height-set", callback: (...args: any[]) => void): number
    on(sigName: "notify::min-height-set", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::min-height-set", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::min-height-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::min-height-set", ...args: any[]): void
    connect(sigName: "notify::min-width", callback: (...args: any[]) => void): number
    on(sigName: "notify::min-width", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::min-width", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::min-width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::min-width", ...args: any[]): void
    connect(sigName: "notify::min-width-set", callback: (...args: any[]) => void): number
    on(sigName: "notify::min-width-set", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::min-width-set", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::min-width-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::min-width-set", ...args: any[]): void
    connect(sigName: "notify::minification-filter", callback: (...args: any[]) => void): number
    on(sigName: "notify::minification-filter", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::minification-filter", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::minification-filter", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::minification-filter", ...args: any[]): void
    connect(sigName: "notify::name", callback: (...args: any[]) => void): number
    on(sigName: "notify::name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::natural-height", callback: (...args: any[]) => void): number
    on(sigName: "notify::natural-height", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::natural-height", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::natural-height", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::natural-height", ...args: any[]): void
    connect(sigName: "notify::natural-height-set", callback: (...args: any[]) => void): number
    on(sigName: "notify::natural-height-set", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::natural-height-set", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::natural-height-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::natural-height-set", ...args: any[]): void
    connect(sigName: "notify::natural-width", callback: (...args: any[]) => void): number
    on(sigName: "notify::natural-width", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::natural-width", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::natural-width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::natural-width", ...args: any[]): void
    connect(sigName: "notify::natural-width-set", callback: (...args: any[]) => void): number
    on(sigName: "notify::natural-width-set", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::natural-width-set", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::natural-width-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::natural-width-set", ...args: any[]): void
    connect(sigName: "notify::offscreen-redirect", callback: (...args: any[]) => void): number
    on(sigName: "notify::offscreen-redirect", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::offscreen-redirect", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::offscreen-redirect", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::offscreen-redirect", ...args: any[]): void
    connect(sigName: "notify::opacity", callback: (...args: any[]) => void): number
    on(sigName: "notify::opacity", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::opacity", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::opacity", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::opacity", ...args: any[]): void
    connect(sigName: "notify::pivot-point", callback: (...args: any[]) => void): number
    on(sigName: "notify::pivot-point", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::pivot-point", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::pivot-point", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::pivot-point", ...args: any[]): void
    connect(sigName: "notify::pivot-point-z", callback: (...args: any[]) => void): number
    on(sigName: "notify::pivot-point-z", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::pivot-point-z", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::pivot-point-z", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::pivot-point-z", ...args: any[]): void
    connect(sigName: "notify::position", callback: (...args: any[]) => void): number
    on(sigName: "notify::position", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::position", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::position", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::position", ...args: any[]): void
    connect(sigName: "notify::reactive", callback: (...args: any[]) => void): number
    on(sigName: "notify::reactive", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::reactive", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::reactive", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::reactive", ...args: any[]): void
    connect(sigName: "notify::realized", callback: (...args: any[]) => void): number
    on(sigName: "notify::realized", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::realized", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::realized", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::realized", ...args: any[]): void
    connect(sigName: "notify::request-mode", callback: (...args: any[]) => void): number
    on(sigName: "notify::request-mode", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::request-mode", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::request-mode", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::request-mode", ...args: any[]): void
    connect(sigName: "notify::rotation-angle-x", callback: (...args: any[]) => void): number
    on(sigName: "notify::rotation-angle-x", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::rotation-angle-x", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::rotation-angle-x", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::rotation-angle-x", ...args: any[]): void
    connect(sigName: "notify::rotation-angle-y", callback: (...args: any[]) => void): number
    on(sigName: "notify::rotation-angle-y", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::rotation-angle-y", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::rotation-angle-y", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::rotation-angle-y", ...args: any[]): void
    connect(sigName: "notify::rotation-angle-z", callback: (...args: any[]) => void): number
    on(sigName: "notify::rotation-angle-z", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::rotation-angle-z", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::rotation-angle-z", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::rotation-angle-z", ...args: any[]): void
    connect(sigName: "notify::rotation-center-x", callback: (...args: any[]) => void): number
    on(sigName: "notify::rotation-center-x", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::rotation-center-x", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::rotation-center-x", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::rotation-center-x", ...args: any[]): void
    connect(sigName: "notify::rotation-center-y", callback: (...args: any[]) => void): number
    on(sigName: "notify::rotation-center-y", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::rotation-center-y", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::rotation-center-y", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::rotation-center-y", ...args: any[]): void
    connect(sigName: "notify::rotation-center-z", callback: (...args: any[]) => void): number
    on(sigName: "notify::rotation-center-z", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::rotation-center-z", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::rotation-center-z", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::rotation-center-z", ...args: any[]): void
    connect(sigName: "notify::rotation-center-z-gravity", callback: (...args: any[]) => void): number
    on(sigName: "notify::rotation-center-z-gravity", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::rotation-center-z-gravity", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::rotation-center-z-gravity", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::rotation-center-z-gravity", ...args: any[]): void
    connect(sigName: "notify::scale-center-x", callback: (...args: any[]) => void): number
    on(sigName: "notify::scale-center-x", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::scale-center-x", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::scale-center-x", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::scale-center-x", ...args: any[]): void
    connect(sigName: "notify::scale-center-y", callback: (...args: any[]) => void): number
    on(sigName: "notify::scale-center-y", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::scale-center-y", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::scale-center-y", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::scale-center-y", ...args: any[]): void
    connect(sigName: "notify::scale-gravity", callback: (...args: any[]) => void): number
    on(sigName: "notify::scale-gravity", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::scale-gravity", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::scale-gravity", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::scale-gravity", ...args: any[]): void
    connect(sigName: "notify::scale-x", callback: (...args: any[]) => void): number
    on(sigName: "notify::scale-x", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::scale-x", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::scale-x", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::scale-x", ...args: any[]): void
    connect(sigName: "notify::scale-y", callback: (...args: any[]) => void): number
    on(sigName: "notify::scale-y", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::scale-y", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::scale-y", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::scale-y", ...args: any[]): void
    connect(sigName: "notify::scale-z", callback: (...args: any[]) => void): number
    on(sigName: "notify::scale-z", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::scale-z", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::scale-z", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::scale-z", ...args: any[]): void
    connect(sigName: "notify::show-on-set-parent", callback: (...args: any[]) => void): number
    on(sigName: "notify::show-on-set-parent", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::show-on-set-parent", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::show-on-set-parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::show-on-set-parent", ...args: any[]): void
    connect(sigName: "notify::size", callback: (...args: any[]) => void): number
    on(sigName: "notify::size", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::size", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::size", ...args: any[]): void
    connect(sigName: "notify::text-direction", callback: (...args: any[]) => void): number
    on(sigName: "notify::text-direction", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::text-direction", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::text-direction", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::text-direction", ...args: any[]): void
    connect(sigName: "notify::transform", callback: (...args: any[]) => void): number
    on(sigName: "notify::transform", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::transform", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::transform", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::transform", ...args: any[]): void
    connect(sigName: "notify::transform-set", callback: (...args: any[]) => void): number
    on(sigName: "notify::transform-set", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::transform-set", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::transform-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::transform-set", ...args: any[]): void
    connect(sigName: "notify::translation-x", callback: (...args: any[]) => void): number
    on(sigName: "notify::translation-x", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::translation-x", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::translation-x", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::translation-x", ...args: any[]): void
    connect(sigName: "notify::translation-y", callback: (...args: any[]) => void): number
    on(sigName: "notify::translation-y", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::translation-y", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::translation-y", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::translation-y", ...args: any[]): void
    connect(sigName: "notify::translation-z", callback: (...args: any[]) => void): number
    on(sigName: "notify::translation-z", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::translation-z", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::translation-z", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::translation-z", ...args: any[]): void
    connect(sigName: "notify::visible", callback: (...args: any[]) => void): number
    on(sigName: "notify::visible", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::visible", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::visible", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::visible", ...args: any[]): void
    connect(sigName: "notify::width", callback: (...args: any[]) => void): number
    on(sigName: "notify::width", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::width", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::width", ...args: any[]): void
    connect(sigName: "notify::x", callback: (...args: any[]) => void): number
    on(sigName: "notify::x", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::x", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::x", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::x", ...args: any[]): void
    connect(sigName: "notify::x-align", callback: (...args: any[]) => void): number
    on(sigName: "notify::x-align", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::x-align", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::x-align", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::x-align", ...args: any[]): void
    connect(sigName: "notify::x-expand", callback: (...args: any[]) => void): number
    on(sigName: "notify::x-expand", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::x-expand", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::x-expand", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::x-expand", ...args: any[]): void
    connect(sigName: "notify::y", callback: (...args: any[]) => void): number
    on(sigName: "notify::y", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::y", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::y", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::y", ...args: any[]): void
    connect(sigName: "notify::y-align", callback: (...args: any[]) => void): number
    on(sigName: "notify::y-align", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::y-align", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::y-align", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::y-align", ...args: any[]): void
    connect(sigName: "notify::y-expand", callback: (...args: any[]) => void): number
    on(sigName: "notify::y-expand", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::y-expand", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::y-expand", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::y-expand", ...args: any[]): void
    connect(sigName: "notify::z-position", callback: (...args: any[]) => void): number
    on(sigName: "notify::z-position", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::z-position", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::z-position", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::z-position", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
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
    xOrigin?: number | null
    yOrigin?: number | null
}

/**
 * Signal callback interface for `relocated`
 */
interface Viewport_RelocatedSignalCallback {
    (): void
}

interface Viewport extends Atk.ImplementorIface, Clutter.Animatable, Clutter.Container, Clutter.Scriptable {

    // Own properties of Champlain-0.12.Champlain.Viewport

    hadjustment: Adjustment
    vadjustment: Adjustment
    xOrigin: number
    yOrigin: number

    // Own fields of Champlain-0.12.Champlain.Viewport

    parent: Clutter.Actor
    priv: ViewportPrivate

    // Owm methods of Champlain-0.12.Champlain.Viewport

    getAdjustments(hadjustment: Adjustment, vadjustment: Adjustment): void
    getAnchor(x: number, y: number): void
    getOrigin(x: number, y: number): void
    setActorPosition(actor: Clutter.Actor, x: number, y: number): void
    setAdjustments(hadjustment: Adjustment, vadjustment: Adjustment): void
    setChild(child: Clutter.Actor): void
    setOrigin(x: number, y: number): void
    stop(): void

    // Own signals of Champlain-0.12.Champlain.Viewport

    connect(sigName: "relocated", callback: Viewport_RelocatedSignalCallback): number
    on(sigName: "relocated", callback: Viewport_RelocatedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "relocated", callback: Viewport_RelocatedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "relocated", callback: Viewport_RelocatedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "relocated", ...args: any[]): void

    // Class property signals of Champlain-0.12.Champlain.Viewport

    connect(sigName: "notify::hadjustment", callback: (...args: any[]) => void): number
    on(sigName: "notify::hadjustment", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::hadjustment", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::hadjustment", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::hadjustment", ...args: any[]): void
    connect(sigName: "notify::vadjustment", callback: (...args: any[]) => void): number
    on(sigName: "notify::vadjustment", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::vadjustment", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::vadjustment", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::vadjustment", ...args: any[]): void
    connect(sigName: "notify::x-origin", callback: (...args: any[]) => void): number
    on(sigName: "notify::x-origin", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::x-origin", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::x-origin", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::x-origin", ...args: any[]): void
    connect(sigName: "notify::y-origin", callback: (...args: any[]) => void): number
    on(sigName: "notify::y-origin", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::y-origin", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::y-origin", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::y-origin", ...args: any[]): void
    connect(sigName: "notify::actions", callback: (...args: any[]) => void): number
    on(sigName: "notify::actions", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::actions", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::actions", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::actions", ...args: any[]): void
    connect(sigName: "notify::allocation", callback: (...args: any[]) => void): number
    on(sigName: "notify::allocation", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::allocation", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::allocation", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::allocation", ...args: any[]): void
    connect(sigName: "notify::anchor-gravity", callback: (...args: any[]) => void): number
    on(sigName: "notify::anchor-gravity", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::anchor-gravity", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::anchor-gravity", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::anchor-gravity", ...args: any[]): void
    connect(sigName: "notify::anchor-x", callback: (...args: any[]) => void): number
    on(sigName: "notify::anchor-x", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::anchor-x", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::anchor-x", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::anchor-x", ...args: any[]): void
    connect(sigName: "notify::anchor-y", callback: (...args: any[]) => void): number
    on(sigName: "notify::anchor-y", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::anchor-y", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::anchor-y", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::anchor-y", ...args: any[]): void
    connect(sigName: "notify::background-color", callback: (...args: any[]) => void): number
    on(sigName: "notify::background-color", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::background-color", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::background-color", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::background-color", ...args: any[]): void
    connect(sigName: "notify::background-color-set", callback: (...args: any[]) => void): number
    on(sigName: "notify::background-color-set", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::background-color-set", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::background-color-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::background-color-set", ...args: any[]): void
    connect(sigName: "notify::child-transform", callback: (...args: any[]) => void): number
    on(sigName: "notify::child-transform", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::child-transform", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::child-transform", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::child-transform", ...args: any[]): void
    connect(sigName: "notify::child-transform-set", callback: (...args: any[]) => void): number
    on(sigName: "notify::child-transform-set", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::child-transform-set", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::child-transform-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::child-transform-set", ...args: any[]): void
    connect(sigName: "notify::clip", callback: (...args: any[]) => void): number
    on(sigName: "notify::clip", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::clip", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::clip", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::clip", ...args: any[]): void
    connect(sigName: "notify::clip-rect", callback: (...args: any[]) => void): number
    on(sigName: "notify::clip-rect", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::clip-rect", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::clip-rect", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::clip-rect", ...args: any[]): void
    connect(sigName: "notify::clip-to-allocation", callback: (...args: any[]) => void): number
    on(sigName: "notify::clip-to-allocation", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::clip-to-allocation", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::clip-to-allocation", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::clip-to-allocation", ...args: any[]): void
    connect(sigName: "notify::constraints", callback: (...args: any[]) => void): number
    on(sigName: "notify::constraints", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::constraints", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::constraints", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::constraints", ...args: any[]): void
    connect(sigName: "notify::content", callback: (...args: any[]) => void): number
    on(sigName: "notify::content", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::content", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::content", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::content", ...args: any[]): void
    connect(sigName: "notify::content-box", callback: (...args: any[]) => void): number
    on(sigName: "notify::content-box", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::content-box", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::content-box", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::content-box", ...args: any[]): void
    connect(sigName: "notify::content-gravity", callback: (...args: any[]) => void): number
    on(sigName: "notify::content-gravity", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::content-gravity", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::content-gravity", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::content-gravity", ...args: any[]): void
    connect(sigName: "notify::content-repeat", callback: (...args: any[]) => void): number
    on(sigName: "notify::content-repeat", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::content-repeat", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::content-repeat", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::content-repeat", ...args: any[]): void
    connect(sigName: "notify::depth", callback: (...args: any[]) => void): number
    on(sigName: "notify::depth", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::depth", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::depth", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::depth", ...args: any[]): void
    connect(sigName: "notify::effect", callback: (...args: any[]) => void): number
    on(sigName: "notify::effect", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::effect", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::effect", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::effect", ...args: any[]): void
    connect(sigName: "notify::first-child", callback: (...args: any[]) => void): number
    on(sigName: "notify::first-child", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::first-child", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::first-child", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::first-child", ...args: any[]): void
    connect(sigName: "notify::fixed-position-set", callback: (...args: any[]) => void): number
    on(sigName: "notify::fixed-position-set", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::fixed-position-set", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::fixed-position-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::fixed-position-set", ...args: any[]): void
    connect(sigName: "notify::fixed-x", callback: (...args: any[]) => void): number
    on(sigName: "notify::fixed-x", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::fixed-x", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::fixed-x", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::fixed-x", ...args: any[]): void
    connect(sigName: "notify::fixed-y", callback: (...args: any[]) => void): number
    on(sigName: "notify::fixed-y", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::fixed-y", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::fixed-y", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::fixed-y", ...args: any[]): void
    connect(sigName: "notify::has-clip", callback: (...args: any[]) => void): number
    on(sigName: "notify::has-clip", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::has-clip", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::has-clip", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::has-clip", ...args: any[]): void
    connect(sigName: "notify::has-pointer", callback: (...args: any[]) => void): number
    on(sigName: "notify::has-pointer", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::has-pointer", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::has-pointer", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::has-pointer", ...args: any[]): void
    connect(sigName: "notify::height", callback: (...args: any[]) => void): number
    on(sigName: "notify::height", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::height", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::height", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::height", ...args: any[]): void
    connect(sigName: "notify::last-child", callback: (...args: any[]) => void): number
    on(sigName: "notify::last-child", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::last-child", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::last-child", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::last-child", ...args: any[]): void
    connect(sigName: "notify::layout-manager", callback: (...args: any[]) => void): number
    on(sigName: "notify::layout-manager", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::layout-manager", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::layout-manager", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::layout-manager", ...args: any[]): void
    connect(sigName: "notify::magnification-filter", callback: (...args: any[]) => void): number
    on(sigName: "notify::magnification-filter", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::magnification-filter", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::magnification-filter", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::magnification-filter", ...args: any[]): void
    connect(sigName: "notify::mapped", callback: (...args: any[]) => void): number
    on(sigName: "notify::mapped", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::mapped", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::mapped", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::mapped", ...args: any[]): void
    connect(sigName: "notify::margin-bottom", callback: (...args: any[]) => void): number
    on(sigName: "notify::margin-bottom", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::margin-bottom", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::margin-bottom", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::margin-bottom", ...args: any[]): void
    connect(sigName: "notify::margin-left", callback: (...args: any[]) => void): number
    on(sigName: "notify::margin-left", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::margin-left", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::margin-left", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::margin-left", ...args: any[]): void
    connect(sigName: "notify::margin-right", callback: (...args: any[]) => void): number
    on(sigName: "notify::margin-right", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::margin-right", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::margin-right", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::margin-right", ...args: any[]): void
    connect(sigName: "notify::margin-top", callback: (...args: any[]) => void): number
    on(sigName: "notify::margin-top", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::margin-top", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::margin-top", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::margin-top", ...args: any[]): void
    connect(sigName: "notify::min-height", callback: (...args: any[]) => void): number
    on(sigName: "notify::min-height", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::min-height", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::min-height", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::min-height", ...args: any[]): void
    connect(sigName: "notify::min-height-set", callback: (...args: any[]) => void): number
    on(sigName: "notify::min-height-set", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::min-height-set", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::min-height-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::min-height-set", ...args: any[]): void
    connect(sigName: "notify::min-width", callback: (...args: any[]) => void): number
    on(sigName: "notify::min-width", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::min-width", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::min-width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::min-width", ...args: any[]): void
    connect(sigName: "notify::min-width-set", callback: (...args: any[]) => void): number
    on(sigName: "notify::min-width-set", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::min-width-set", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::min-width-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::min-width-set", ...args: any[]): void
    connect(sigName: "notify::minification-filter", callback: (...args: any[]) => void): number
    on(sigName: "notify::minification-filter", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::minification-filter", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::minification-filter", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::minification-filter", ...args: any[]): void
    connect(sigName: "notify::name", callback: (...args: any[]) => void): number
    on(sigName: "notify::name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::natural-height", callback: (...args: any[]) => void): number
    on(sigName: "notify::natural-height", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::natural-height", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::natural-height", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::natural-height", ...args: any[]): void
    connect(sigName: "notify::natural-height-set", callback: (...args: any[]) => void): number
    on(sigName: "notify::natural-height-set", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::natural-height-set", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::natural-height-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::natural-height-set", ...args: any[]): void
    connect(sigName: "notify::natural-width", callback: (...args: any[]) => void): number
    on(sigName: "notify::natural-width", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::natural-width", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::natural-width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::natural-width", ...args: any[]): void
    connect(sigName: "notify::natural-width-set", callback: (...args: any[]) => void): number
    on(sigName: "notify::natural-width-set", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::natural-width-set", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::natural-width-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::natural-width-set", ...args: any[]): void
    connect(sigName: "notify::offscreen-redirect", callback: (...args: any[]) => void): number
    on(sigName: "notify::offscreen-redirect", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::offscreen-redirect", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::offscreen-redirect", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::offscreen-redirect", ...args: any[]): void
    connect(sigName: "notify::opacity", callback: (...args: any[]) => void): number
    on(sigName: "notify::opacity", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::opacity", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::opacity", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::opacity", ...args: any[]): void
    connect(sigName: "notify::pivot-point", callback: (...args: any[]) => void): number
    on(sigName: "notify::pivot-point", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::pivot-point", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::pivot-point", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::pivot-point", ...args: any[]): void
    connect(sigName: "notify::pivot-point-z", callback: (...args: any[]) => void): number
    on(sigName: "notify::pivot-point-z", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::pivot-point-z", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::pivot-point-z", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::pivot-point-z", ...args: any[]): void
    connect(sigName: "notify::position", callback: (...args: any[]) => void): number
    on(sigName: "notify::position", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::position", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::position", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::position", ...args: any[]): void
    connect(sigName: "notify::reactive", callback: (...args: any[]) => void): number
    on(sigName: "notify::reactive", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::reactive", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::reactive", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::reactive", ...args: any[]): void
    connect(sigName: "notify::realized", callback: (...args: any[]) => void): number
    on(sigName: "notify::realized", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::realized", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::realized", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::realized", ...args: any[]): void
    connect(sigName: "notify::request-mode", callback: (...args: any[]) => void): number
    on(sigName: "notify::request-mode", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::request-mode", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::request-mode", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::request-mode", ...args: any[]): void
    connect(sigName: "notify::rotation-angle-x", callback: (...args: any[]) => void): number
    on(sigName: "notify::rotation-angle-x", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::rotation-angle-x", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::rotation-angle-x", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::rotation-angle-x", ...args: any[]): void
    connect(sigName: "notify::rotation-angle-y", callback: (...args: any[]) => void): number
    on(sigName: "notify::rotation-angle-y", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::rotation-angle-y", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::rotation-angle-y", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::rotation-angle-y", ...args: any[]): void
    connect(sigName: "notify::rotation-angle-z", callback: (...args: any[]) => void): number
    on(sigName: "notify::rotation-angle-z", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::rotation-angle-z", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::rotation-angle-z", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::rotation-angle-z", ...args: any[]): void
    connect(sigName: "notify::rotation-center-x", callback: (...args: any[]) => void): number
    on(sigName: "notify::rotation-center-x", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::rotation-center-x", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::rotation-center-x", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::rotation-center-x", ...args: any[]): void
    connect(sigName: "notify::rotation-center-y", callback: (...args: any[]) => void): number
    on(sigName: "notify::rotation-center-y", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::rotation-center-y", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::rotation-center-y", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::rotation-center-y", ...args: any[]): void
    connect(sigName: "notify::rotation-center-z", callback: (...args: any[]) => void): number
    on(sigName: "notify::rotation-center-z", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::rotation-center-z", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::rotation-center-z", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::rotation-center-z", ...args: any[]): void
    connect(sigName: "notify::rotation-center-z-gravity", callback: (...args: any[]) => void): number
    on(sigName: "notify::rotation-center-z-gravity", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::rotation-center-z-gravity", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::rotation-center-z-gravity", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::rotation-center-z-gravity", ...args: any[]): void
    connect(sigName: "notify::scale-center-x", callback: (...args: any[]) => void): number
    on(sigName: "notify::scale-center-x", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::scale-center-x", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::scale-center-x", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::scale-center-x", ...args: any[]): void
    connect(sigName: "notify::scale-center-y", callback: (...args: any[]) => void): number
    on(sigName: "notify::scale-center-y", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::scale-center-y", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::scale-center-y", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::scale-center-y", ...args: any[]): void
    connect(sigName: "notify::scale-gravity", callback: (...args: any[]) => void): number
    on(sigName: "notify::scale-gravity", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::scale-gravity", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::scale-gravity", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::scale-gravity", ...args: any[]): void
    connect(sigName: "notify::scale-x", callback: (...args: any[]) => void): number
    on(sigName: "notify::scale-x", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::scale-x", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::scale-x", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::scale-x", ...args: any[]): void
    connect(sigName: "notify::scale-y", callback: (...args: any[]) => void): number
    on(sigName: "notify::scale-y", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::scale-y", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::scale-y", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::scale-y", ...args: any[]): void
    connect(sigName: "notify::scale-z", callback: (...args: any[]) => void): number
    on(sigName: "notify::scale-z", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::scale-z", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::scale-z", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::scale-z", ...args: any[]): void
    connect(sigName: "notify::show-on-set-parent", callback: (...args: any[]) => void): number
    on(sigName: "notify::show-on-set-parent", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::show-on-set-parent", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::show-on-set-parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::show-on-set-parent", ...args: any[]): void
    connect(sigName: "notify::size", callback: (...args: any[]) => void): number
    on(sigName: "notify::size", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::size", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::size", ...args: any[]): void
    connect(sigName: "notify::text-direction", callback: (...args: any[]) => void): number
    on(sigName: "notify::text-direction", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::text-direction", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::text-direction", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::text-direction", ...args: any[]): void
    connect(sigName: "notify::transform", callback: (...args: any[]) => void): number
    on(sigName: "notify::transform", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::transform", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::transform", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::transform", ...args: any[]): void
    connect(sigName: "notify::transform-set", callback: (...args: any[]) => void): number
    on(sigName: "notify::transform-set", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::transform-set", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::transform-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::transform-set", ...args: any[]): void
    connect(sigName: "notify::translation-x", callback: (...args: any[]) => void): number
    on(sigName: "notify::translation-x", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::translation-x", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::translation-x", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::translation-x", ...args: any[]): void
    connect(sigName: "notify::translation-y", callback: (...args: any[]) => void): number
    on(sigName: "notify::translation-y", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::translation-y", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::translation-y", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::translation-y", ...args: any[]): void
    connect(sigName: "notify::translation-z", callback: (...args: any[]) => void): number
    on(sigName: "notify::translation-z", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::translation-z", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::translation-z", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::translation-z", ...args: any[]): void
    connect(sigName: "notify::visible", callback: (...args: any[]) => void): number
    on(sigName: "notify::visible", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::visible", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::visible", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::visible", ...args: any[]): void
    connect(sigName: "notify::width", callback: (...args: any[]) => void): number
    on(sigName: "notify::width", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::width", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::width", ...args: any[]): void
    connect(sigName: "notify::x", callback: (...args: any[]) => void): number
    on(sigName: "notify::x", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::x", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::x", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::x", ...args: any[]): void
    connect(sigName: "notify::x-align", callback: (...args: any[]) => void): number
    on(sigName: "notify::x-align", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::x-align", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::x-align", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::x-align", ...args: any[]): void
    connect(sigName: "notify::x-expand", callback: (...args: any[]) => void): number
    on(sigName: "notify::x-expand", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::x-expand", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::x-expand", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::x-expand", ...args: any[]): void
    connect(sigName: "notify::y", callback: (...args: any[]) => void): number
    on(sigName: "notify::y", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::y", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::y", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::y", ...args: any[]): void
    connect(sigName: "notify::y-align", callback: (...args: any[]) => void): number
    on(sigName: "notify::y-align", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::y-align", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::y-align", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::y-align", ...args: any[]): void
    connect(sigName: "notify::y-expand", callback: (...args: any[]) => void): number
    on(sigName: "notify::y-expand", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::y-expand", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::y-expand", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::y-expand", ...args: any[]): void
    connect(sigName: "notify::z-position", callback: (...args: any[]) => void): number
    on(sigName: "notify::z-position", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::z-position", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::z-position", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::z-position", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
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
    getCenter(): [ /* latitude */ number, /* longitude */ number ]
    /**
     * Checks whether `bbox` represents a valid bounding box on the map.
     */
    isValid(): boolean
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

    parentClass: GObject.InitiallyUnownedClass
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

    parentClass: MarkerClass
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

    parentClass: RendererClass
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

    getSurface: (exportable: Exportable) => cairo.Surface
    setSurface: (exportable: Exportable, surface: cairo.Surface) => void
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

    parentClass: TileCacheClass
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

    parentClass: TileSourceClass
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

    parentClass: RendererClass
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

    parentClass: Clutter.ActorClass
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

    parentClass: MarkerClass
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

    parentClass: Clutter.ActorClass
    setView: (layer: Layer, view: View | null) => void
    getBoundingBox: (layer: Layer) => BoundingBox
}

abstract class LayerClass {

    // Own properties of Champlain-0.12.Champlain.LayerClass

    static name: string
}

interface LicenseClass {

    // Own fields of Champlain-0.12.Champlain.LicenseClass

    parentClass: Clutter.ActorClass
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

    getLatitude: (location: Location) => number
    getLongitude: (location: Location) => number
    setLocation: (location: Location, latitude: number, longitude: number) => void
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

    parentClass: MapSourceClass
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

    parentClass: GObject.InitiallyUnownedClass
    getId: (mapSource: MapSource) => string
    getName: (mapSource: MapSource) => string
    getLicense: (mapSource: MapSource) => string
    getLicenseUri: (mapSource: MapSource) => string
    getMinZoomLevel: (mapSource: MapSource) => number
    getMaxZoomLevel: (mapSource: MapSource) => number
    getTileSize: (mapSource: MapSource) => number
    getProjection: (mapSource: MapSource) => MapProjection
    fillTile: (mapSource: MapSource, tile: Tile) => void
}

abstract class MapSourceClass {

    // Own properties of Champlain-0.12.Champlain.MapSourceClass

    static name: string
}

interface MapSourceDescClass {

    // Own fields of Champlain-0.12.Champlain.MapSourceDescClass

    parentClass: GObject.ObjectClass
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

    parentClass: GObject.ObjectClass
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

    parentClass: Clutter.ActorClass
}

abstract class MarkerClass {

    // Own properties of Champlain-0.12.Champlain.MarkerClass

    static name: string
}

interface MarkerLayerClass {

    // Own fields of Champlain-0.12.Champlain.MarkerLayerClass

    parentClass: LayerClass
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

    parentClass: TileCacheClass
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

    parentClass: TileSourceClass
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

    parentClass: TileSourceClass
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

    parentClass: TileSourceClass
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

    parentClass: LayerClass
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

    parentClass: MarkerClass
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

    parentClass: GObject.InitiallyUnownedClass
    setData: (renderer: Renderer, data: Uint8Array) => void
    render: (renderer: Renderer, tile: Tile) => void
}

abstract class RendererClass {

    // Own properties of Champlain-0.12.Champlain.RendererClass

    static name: string
}

interface ScaleClass {

    // Own fields of Champlain-0.12.Champlain.ScaleClass

    parentClass: Clutter.ActorClass
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

    parentClass: MapSourceClass
    storeTile: (tileCache: TileCache, tile: Tile, contents: string, size: number) => void
    refreshTileTime: (tileCache: TileCache, tile: Tile) => void
    onTileFilled: (tileCache: TileCache, tile: Tile) => void
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

    parentClass: Clutter.ActorClass
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

    parentClass: MapSourceClass
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

    parentClass: Clutter.ActorClass
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

    parentClass: Clutter.ActorClass
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