
/*
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in `ts-for-gir` or create a bug report on https://github.com/gjsify/ts-for-gir
 */

import './geocodeglib-1.0-ambient.d.ts';
import './geocodeglib-1.0-import.d.ts';
/**
 * GeocodeGlib-1.0
 */

import type Soup from '@girs/soup-2.4';
import type Gio from '@girs/gio-2.0';
import type GObject from '@girs/gobject-2.0';
import type GLib from '@girs/glib-2.0';
import type Json from '@girs/json-1.0';

export namespace GeocodeGlib {

/**
 * Error codes returned by geocode-glib functions.
 */
enum Error {
    /**
     * An error occured parsing the response from the web service.
     */
    PARSE,
    /**
     * The request made was not supported.
     */
    NOT_SUPPORTED,
    /**
     * The requests made didn't have any matches.
     */
    NO_MATCHES,
    /**
     * The request made contained invalid arguments.
     */
    INVALID_ARGUMENTS,
    /**
     * The server encountered an (possibly unrecoverable) internal error.
     */
    INTERNAL_SERVER,
}
/**
 * Coordinate Reference System Identification for a location.
 */
enum LocationCRS {
    /**
     * CRS is World Geodetic System, standard for Earth.
     */
    WGS84,
}
/**
 * The URI scheme for this location.
 */
enum LocationURIScheme {
    /**
     * The 'geo' URI scheme, RFC 5870
     */
    GEO,
}
/**
 * Osm type of the place.
 */
enum PlaceOsmType {
    /**
     * Unknown type
     */
    UNKNOWN,
    /**
     * Defines a point in space.
     */
    NODE,
    /**
     * Used to explain how other elements work together.
     */
    RELATION,
    /**
     * Defines a linear feature and area boundaries.
     */
    WAY,
}
/**
 * Type of the place.
 */
enum PlaceType {
    /**
     * Type is unknown for this place.
     */
    UNKNOWN,
    /**
     * A building or house.
     */
    BUILDING,
    /**
     * A street.
     */
    STREET,
    /**
     * A populated settlement such as a city, town, village.
     */
    TOWN,
    /**
     * One of the primary administrative areas within a country.
     */
    STATE,
    /**
     * One of the secondary administrative areas within a country.
     */
    COUNTY,
    /**
     * One of the tertiary administrative areas within a country.
     */
    LOCAL_ADMINISTRATIVE_AREA,
    /**
     * A partial or full postal code.
     */
    POSTAL_CODE,
    /**
     * One of the countries or dependent territories defined by the ISO 3166-1 standard.
     */
    COUNTRY,
    /**
     * An island.
     */
    ISLAND,
    /**
     * An airport.
     */
    AIRPORT,
    /**
     * A railway station.
     */
    RAILWAY_STATION,
    /**
     * A bus stop.
     */
    BUS_STOP,
    /**
     * A high capacity highways designed to safely carry fast motor traffic.
     */
    MOTORWAY,
    /**
     * A water feature such as a river, canal, lake, bay or ocean.
     */
    DRAINAGE,
    /**
     * A land feature such as a park, mountain or beach.
     */
    LAND_FEATURE,
    /**
     * A uncategorized place.
     */
    MISCELLANEOUS,
    /**
     * An area covering multiple countries.
     */
    SUPERNAME,
    /**
     * A point of interest such as a school, hospital or tourist attraction.
     */
    POINT_OF_INTEREST,
    /**
     * A subdivision of a town such as a suburb or neighborhood.
     */
    SUBURB,
    /**
     * A place known by a colloquial name.
     */
    COLLOQUIAL,
    /**
     * An area known within a specific context such as MSA or area code.
     */
    ZONE,
    /**
     * A historical primary administrative area within a country.
     */
    HISTORICAL_STATE,
    /**
     * A historical secondary administrative area within a country.
     */
    HISTORICAL_COUNTY,
    /**
     * One of the major land masses on the Earth.
     */
    CONTINENT,
    /**
     * An area defined by the Olson standard (tz database).
     */
    TIME_ZONE,
    /**
     * A housing development or subdivision known by name.
     */
    ESTATE,
    /**
     * A historical populated settlement that is no longer known by its original name.
     */
    HISTORICAL_TOWN,
    /**
     * One of the five major bodies of water on the Earth.
     */
    OCEAN,
    /**
     * An area of open water smaller than an ocean.
     */
    SEA,
    /**
     * Institution designed for learning under the supervision of teachers.
     */
    SCHOOL,
    /**
     * All places of worship independently of the religion or denomination.
     */
    PLACE_OF_WORSHIP,
    /**
     * Generally formal place with sit-down facilities selling full meals served by waiters.
     */
    RESTAURANT,
    /**
     * A bar or pub.
     */
    BAR,
    /**
     * A light rail station or tram stop.
     */
    LIGHT_RAIL_STATION,
}
/**
 * Constant representing city-level accuracy.
 */
const LOCATION_ACCURACY_CITY: number
/**
 * Constant representing continent-level accuracy.
 */
const LOCATION_ACCURACY_CONTINENT: number
/**
 * Constant representing country-level accuracy.
 */
const LOCATION_ACCURACY_COUNTRY: number
/**
 * Constant representing region-level accuracy.
 */
const LOCATION_ACCURACY_REGION: number
/**
 * Constant representing street-level accuracy.
 */
const LOCATION_ACCURACY_STREET: number
/**
 * Constant representing unknown accuracy.
 */
const LOCATION_ACCURACY_UNKNOWN: number
/**
 * Gets the geocode-glib error quark.
 * @returns a #GQuark.
 */
function error_quark(): GLib.Quark
module Backend {

    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

interface Backend {

    // Owm methods of GeocodeGlib-1.0.GeocodeGlib.Backend

    /**
     * Gets the result of a forward geocoding query using the `backend`.
     * 
     * If no results are found, a %GEOCODE_ERROR_NO_MATCHES error is returned.
     * 
     * This is a synchronous function, which means it may block on network requests.
     * In most situations, the asynchronous version
     * (geocode_backend_forward_search_async()) is more appropriate. See its
     * documentation for more information on usage.
     * @param params a #GHashTable with string keys, and #GValue values.
     * @param cancellable optional #GCancellable, %NULL to ignore.
     * @returns A list of places or %NULL in case of errors. Free the returned instances with g_object_unref() and the list with g_list_free() when done.
     */
    forward_search(params: GLib.HashTable, cancellable: Gio.Cancellable | null): Place[]
    /**
     * Asynchronously performs a forward geocoding query using the `backend`. Use
     * geocode_backend_forward_search() to do the same thing synchronously.
     * 
     * The `params` hash table is in the format used by Telepathy, and documented
     * in the [Telepathy specification](http://telepathy.freedesktop.org/spec/Connection_Interface_Location.html#Mapping:Location).
     * 
     * See also: [XEP-0080 specification](http://xmpp.org/extensions/xep-0080.html).
     * 
     * When the operation is finished, `callback` will be called. You can then call
     * geocode_backend_forward_search_finish() to get the result of the operation.
     * @param params a #GHashTable with string keys, and #GValue values.
     * @param cancellable optional #GCancellable, %NULL to ignore.
     * @param callback a #GAsyncReadyCallback to call when the request is satisfied
     */
    forward_search_async(params: GLib.HashTable, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void

    // Overloads of forward_search_async

    /**
     * Promisified version of {@link forward_search_async}
     * 
     * Asynchronously performs a forward geocoding query using the `backend`. Use
     * geocode_backend_forward_search() to do the same thing synchronously.
     * 
     * The `params` hash table is in the format used by Telepathy, and documented
     * in the [Telepathy specification](http://telepathy.freedesktop.org/spec/Connection_Interface_Location.html#Mapping:Location).
     * 
     * See also: [XEP-0080 specification](http://xmpp.org/extensions/xep-0080.html).
     * 
     * When the operation is finished, `callback` will be called. You can then call
     * geocode_backend_forward_search_finish() to get the result of the operation.
     * @param params a #GHashTable with string keys, and #GValue values.
     * @param cancellable optional #GCancellable, %NULL to ignore.
     * @returns A Promise of: A list of places or %NULL in case of errors. Free the returned instances with g_object_unref() and the list with g_list_free() when done.
     */
    forward_search_async(params: GLib.HashTable, cancellable: Gio.Cancellable | null): globalThis.Promise<Place[]>
    /**
     * Finishes a forward geocoding operation. See
     * geocode_backend_forward_search_async().
     * @param result a #GAsyncResult.
     * @returns A list of places or %NULL in case of errors. Free the returned instances with g_object_unref() and the list with g_list_free() when done.
     */
    forward_search_finish(result: Gio.AsyncResult): Place[]
    /**
     * Gets the result of a reverse geocoding query using the `backend`.
     * 
     * If no result could be found, a %GEOCODE_ERROR_NOT_SUPPORTED error will be
     * returned. This typically happens if the coordinates to geocode are in the
     * middle of the ocean.
     * 
     * This is a synchronous function, which means it may block on network requests.
     * In most situations, the asynchronous version,
     * geocode_backend_forward_search_async(), is more appropriate. See its
     * documentation for more information on usage.
     * @param params a #GHashTable with string keys, and #GValue values.
     * @param cancellable optional #GCancellable object, %NULL to ignore.
     * @returns A list of    #GeocodePlace instances, or %NULL in case of errors. The list is ordered    by relevance, with most relevant results first. Free the returned    instances with g_object_unref() and the list with g_list_free() when done.
     */
    reverse_resolve(params: GLib.HashTable, cancellable: Gio.Cancellable | null): Place[]
    /**
     * Asynchronously gets the result of a reverse geocoding query using the
     * backend.
     * 
     * Typically, a single result will be returned representing the place at a
     * given latitude and longitude (the `lat` and `lon` keys to `params)`; but in
     * some cases the results will be ambiguous and *multiple* results will be
     * returned. They will be returned in order of relevance, with the most
     * relevant result first in the list.
     * 
     * The `params` hash table is in the format used by Telepathy, and documented
     * in the [Telepathy specification](http://telepathy.freedesktop.org/spec/Connection_Interface_Location.html#Mapping:Location).
     * 
     * See also: [XEP-0080 specification](http://xmpp.org/extensions/xep-0080.html).
     * 
     * Use geocode_backend_reverse_resolve() to do the same thing synchronously.
     * 
     * When the operation is finished, `callback` will be called. You can then call
     * geocode_backend_reverse_resolve_finish() to get the result of the operation.
     * @param params a #GHashTable with string keys, and #GValue values.
     * @param cancellable optional #GCancellable object, %NULL to ignore.
     * @param callback a #GAsyncReadyCallback to call when the request is satisfied.
     */
    reverse_resolve_async(params: GLib.HashTable, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void

    // Overloads of reverse_resolve_async

    /**
     * Promisified version of {@link reverse_resolve_async}
     * 
     * Asynchronously gets the result of a reverse geocoding query using the
     * backend.
     * 
     * Typically, a single result will be returned representing the place at a
     * given latitude and longitude (the `lat` and `lon` keys to `params)`; but in
     * some cases the results will be ambiguous and *multiple* results will be
     * returned. They will be returned in order of relevance, with the most
     * relevant result first in the list.
     * 
     * The `params` hash table is in the format used by Telepathy, and documented
     * in the [Telepathy specification](http://telepathy.freedesktop.org/spec/Connection_Interface_Location.html#Mapping:Location).
     * 
     * See also: [XEP-0080 specification](http://xmpp.org/extensions/xep-0080.html).
     * 
     * Use geocode_backend_reverse_resolve() to do the same thing synchronously.
     * 
     * When the operation is finished, `callback` will be called. You can then call
     * geocode_backend_reverse_resolve_finish() to get the result of the operation.
     * @param params a #GHashTable with string keys, and #GValue values.
     * @param cancellable optional #GCancellable object, %NULL to ignore.
     * @returns A Promise of: A list of    #GeocodePlace instances, or %NULL in case of errors. The list is ordered    by relevance, with most relevant results first. Free the returned    instances with g_object_unref() and the list with g_list_free() when done.
     */
    reverse_resolve_async(params: GLib.HashTable, cancellable: Gio.Cancellable | null): globalThis.Promise<Place[]>
    /**
     * Finishes a reverse geocoding operation. See geocode_backend_reverse_resolve_async().
     * @param result a #GAsyncResult.
     * @returns A list of    #GeocodePlace instances, or %NULL in case of errors. The list is ordered    by relevance, with most relevant results first. Free the returned    instances with g_object_unref() and the list with g_list_free() when done.
     */
    reverse_resolve_finish(result: Gio.AsyncResult): Place[]

    // Own virtual methods of GeocodeGlib-1.0.GeocodeGlib.Backend

    /**
     * Gets the result of a forward geocoding query using the `backend`.
     * 
     * If no results are found, a %GEOCODE_ERROR_NO_MATCHES error is returned.
     * 
     * This is a synchronous function, which means it may block on network requests.
     * In most situations, the asynchronous version
     * (geocode_backend_forward_search_async()) is more appropriate. See its
     * documentation for more information on usage.
     * @virtual 
     * @param params a #GHashTable with string keys, and #GValue values.
     * @param cancellable optional #GCancellable, %NULL to ignore.
     * @returns A list of places or %NULL in case of errors. Free the returned instances with g_object_unref() and the list with g_list_free() when done.
     */
    vfunc_forward_search(params: GLib.HashTable, cancellable: Gio.Cancellable | null): Place[]
    /**
     * Asynchronously performs a forward geocoding query using the `backend`. Use
     * geocode_backend_forward_search() to do the same thing synchronously.
     * 
     * The `params` hash table is in the format used by Telepathy, and documented
     * in the [Telepathy specification](http://telepathy.freedesktop.org/spec/Connection_Interface_Location.html#Mapping:Location).
     * 
     * See also: [XEP-0080 specification](http://xmpp.org/extensions/xep-0080.html).
     * 
     * When the operation is finished, `callback` will be called. You can then call
     * geocode_backend_forward_search_finish() to get the result of the operation.
     * @virtual 
     * @param params a #GHashTable with string keys, and #GValue values.
     * @param cancellable optional #GCancellable, %NULL to ignore.
     * @param callback a #GAsyncReadyCallback to call when the request is satisfied
     */
    vfunc_forward_search_async(params: GLib.HashTable, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void
    /**
     * Finishes a forward geocoding operation. See
     * geocode_backend_forward_search_async().
     * @virtual 
     * @param result a #GAsyncResult.
     * @returns A list of places or %NULL in case of errors. Free the returned instances with g_object_unref() and the list with g_list_free() when done.
     */
    vfunc_forward_search_finish(result: Gio.AsyncResult): Place[]
    /**
     * Gets the result of a reverse geocoding query using the `backend`.
     * 
     * If no result could be found, a %GEOCODE_ERROR_NOT_SUPPORTED error will be
     * returned. This typically happens if the coordinates to geocode are in the
     * middle of the ocean.
     * 
     * This is a synchronous function, which means it may block on network requests.
     * In most situations, the asynchronous version,
     * geocode_backend_forward_search_async(), is more appropriate. See its
     * documentation for more information on usage.
     * @virtual 
     * @param params a #GHashTable with string keys, and #GValue values.
     * @param cancellable optional #GCancellable object, %NULL to ignore.
     * @returns A list of    #GeocodePlace instances, or %NULL in case of errors. The list is ordered    by relevance, with most relevant results first. Free the returned    instances with g_object_unref() and the list with g_list_free() when done.
     */
    vfunc_reverse_resolve(params: GLib.HashTable, cancellable: Gio.Cancellable | null): Place[]
    /**
     * Asynchronously gets the result of a reverse geocoding query using the
     * backend.
     * 
     * Typically, a single result will be returned representing the place at a
     * given latitude and longitude (the `lat` and `lon` keys to `params)`; but in
     * some cases the results will be ambiguous and *multiple* results will be
     * returned. They will be returned in order of relevance, with the most
     * relevant result first in the list.
     * 
     * The `params` hash table is in the format used by Telepathy, and documented
     * in the [Telepathy specification](http://telepathy.freedesktop.org/spec/Connection_Interface_Location.html#Mapping:Location).
     * 
     * See also: [XEP-0080 specification](http://xmpp.org/extensions/xep-0080.html).
     * 
     * Use geocode_backend_reverse_resolve() to do the same thing synchronously.
     * 
     * When the operation is finished, `callback` will be called. You can then call
     * geocode_backend_reverse_resolve_finish() to get the result of the operation.
     * @virtual 
     * @param params a #GHashTable with string keys, and #GValue values.
     * @param cancellable optional #GCancellable object, %NULL to ignore.
     * @param callback a #GAsyncReadyCallback to call when the request is satisfied.
     */
    vfunc_reverse_resolve_async(params: GLib.HashTable, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void
    /**
     * Finishes a reverse geocoding operation. See geocode_backend_reverse_resolve_async().
     * @virtual 
     * @param result a #GAsyncResult.
     * @returns A list of    #GeocodePlace instances, or %NULL in case of errors. The list is ordered    by relevance, with most relevant results first. Free the returned    instances with g_object_unref() and the list with g_list_free() when done.
     */
    vfunc_reverse_resolve_finish(result: Gio.AsyncResult): Place[]

    // Class property signals of GeocodeGlib-1.0.GeocodeGlib.Backend

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * All the fields in the #GeocodeBackend structure are private and should
 * never be accessed directly.
 * @interface 
 */
class Backend extends GObject.Object {

    // Own properties of GeocodeGlib-1.0.GeocodeGlib.Backend

    static name: string
    static $gtype: GObject.GType<Backend>

    // Constructors of GeocodeGlib-1.0.GeocodeGlib.Backend

    constructor(config?: Backend.ConstructorProperties) 
    _init(config?: Backend.ConstructorProperties): void
}

module BoundingBox {

    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of GeocodeGlib-1.0.GeocodeGlib.BoundingBox

        /**
         * Bottom coordinate.
         */
        bottom?: number | null
        /**
         * Left coordinate.
         */
        left?: number | null
        /**
         * Right coordinate.
         */
        right?: number | null
        /**
         * Top coordinate.
         */
        top?: number | null
    }

}

interface BoundingBox {

    // Own properties of GeocodeGlib-1.0.GeocodeGlib.BoundingBox

    /**
     * Bottom coordinate.
     */
    readonly bottom: number
    /**
     * Left coordinate.
     */
    readonly left: number
    /**
     * Right coordinate.
     */
    readonly right: number
    /**
     * Top coordinate.
     */
    readonly top: number

    // Owm methods of GeocodeGlib-1.0.GeocodeGlib.BoundingBox

    /**
     * Compare two #GeocodeBoundingBox instances for equality. This compares all
     * fields and only returns %TRUE if the instances are exactly equal.
     * 
     * Both instances must be non-%NULL.
     * @param b another bounding box
     * @returns %TRUE if the instances are equal, %FALSE otherwise
     */
    equal(b: BoundingBox): boolean
    /**
     * Gets the bottom coordinate of `bbox`.
     * @returns the bottom coordinate of @bbox.
     */
    get_bottom(): number
    /**
     * Gets the left coordinate of `bbox`.
     * @returns the left coordinate of @bbox.
     */
    get_left(): number
    /**
     * Gets the right coordinate of `bbox`.
     * @returns the right coordinate of @bbox.
     */
    get_right(): number
    /**
     * Gets the top coordinate of `bbox`.
     * @returns the top coordinate of @bbox.
     */
    get_top(): number

    // Class property signals of GeocodeGlib-1.0.GeocodeGlib.BoundingBox

    connect(sigName: "notify::bottom", callback: (($obj: BoundingBox, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::bottom", callback: (($obj: BoundingBox, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::bottom", ...args: any[]): void
    connect(sigName: "notify::left", callback: (($obj: BoundingBox, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::left", callback: (($obj: BoundingBox, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::left", ...args: any[]): void
    connect(sigName: "notify::right", callback: (($obj: BoundingBox, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::right", callback: (($obj: BoundingBox, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::right", ...args: any[]): void
    connect(sigName: "notify::top", callback: (($obj: BoundingBox, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::top", callback: (($obj: BoundingBox, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::top", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * All the fields in the #GeocodeLocation structure are private and should
 * never be accessed directly.
 * @class 
 */
class BoundingBox extends GObject.Object {

    // Own properties of GeocodeGlib-1.0.GeocodeGlib.BoundingBox

    static name: string
    static $gtype: GObject.GType<BoundingBox>

    // Constructors of GeocodeGlib-1.0.GeocodeGlib.BoundingBox

    constructor(config?: BoundingBox.ConstructorProperties) 
    /**
     * Creates a new #GeocodeBoundingBox object.
     * @constructor 
     * @param top The left coordinate
     * @param bottom The bottom coordinate
     * @param left The left coordinate
     * @param right The right coordinate
     * @returns a new #GeocodeBoundingBox object. Use g_object_unref() when done.
     */
    constructor(top: number, bottom: number, left: number, right: number) 
    /**
     * Creates a new #GeocodeBoundingBox object.
     * @constructor 
     * @param top The left coordinate
     * @param bottom The bottom coordinate
     * @param left The left coordinate
     * @param right The right coordinate
     * @returns a new #GeocodeBoundingBox object. Use g_object_unref() when done.
     */
    static new(top: number, bottom: number, left: number, right: number): BoundingBox
    _init(config?: BoundingBox.ConstructorProperties): void
}

module Forward {

    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of GeocodeGlib-1.0.GeocodeGlib.Forward

        /**
         * The number of requested results to a search query.
         */
        answer_count?: number | null
        /**
         * If set to #TRUE then only results in the #GeocodeForward:search-area
         * bounding box are returned.
         * If set to #FALSE the #GeocodeForward:search-area is treated like a
         * preferred area for results.
         */
        bounded?: boolean | null
        /**
         * The bounding box that limits the search area.
         * If #GeocodeForward:bounded property is set to #TRUE only results from
         * this area is returned.
         */
        search_area?: BoundingBox | null
        /**
         * The number of requested results to a search query.
         */
        answerCount?: number | null
        /**
         * The bounding box that limits the search area.
         * If #GeocodeForward:bounded property is set to #TRUE only results from
         * this area is returned.
         */
        searchArea?: BoundingBox | null
    }

}

interface Forward {

    // Own properties of GeocodeGlib-1.0.GeocodeGlib.Forward

    /**
     * The number of requested results to a search query.
     */
    answer_count: number
    /**
     * The number of requested results to a search query.
     */
    answerCount: number
    /**
     * If set to #TRUE then only results in the #GeocodeForward:search-area
     * bounding box are returned.
     * If set to #FALSE the #GeocodeForward:search-area is treated like a
     * preferred area for results.
     */
    bounded: boolean
    /**
     * The bounding box that limits the search area.
     * If #GeocodeForward:bounded property is set to #TRUE only results from
     * this area is returned.
     */
    search_area: BoundingBox
    /**
     * The bounding box that limits the search area.
     * If #GeocodeForward:bounded property is set to #TRUE only results from
     * this area is returned.
     */
    searchArea: BoundingBox

    // Owm methods of GeocodeGlib-1.0.GeocodeGlib.Forward

    /**
     * Gets the number of requested results for searches.
     */
    get_answer_count(): number
    /**
     * Gets the #GeocodeForward:bounded property that regulates whether the
     * #GeocodeForward:search-area property acts restricting or not.
     */
    get_bounded(): boolean
    /**
     * Gets the area to limit searches within.
     * @returns the search area, or %NULL if none is set
     */
    get_search_area(): BoundingBox | null
    /**
     * Gets the result of a forward geocoding
     * query using the current backend (see geocode_forward_set_backend()). By
     * default the GNOME Nominatim server is used. See #GeocodeBackend for more
     * information.
     * 
     * If no results are found, a %GEOCODE_ERROR_NO_MATCHES error is returned.
     * @returns A list of places or %NULL in case of errors. Free the returned instances with g_object_unref() and the list with g_list_free() when done.
     */
    search(): Place[]
    /**
     * Asynchronously performs a forward geocoding
     * query using a web service. Use geocode_forward_search() to do the same
     * thing synchronously.
     * 
     * When the operation is finished, `callback` will be called. You can then call
     * geocode_forward_search_finish() to get the result of the operation.
     * @param cancellable optional #GCancellable forward, %NULL to ignore.
     * @param callback a #GAsyncReadyCallback to call when the request is satisfied
     */
    search_async(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void

    // Overloads of search_async

    /**
     * Promisified version of {@link search_async}
     * 
     * Asynchronously performs a forward geocoding
     * query using a web service. Use geocode_forward_search() to do the same
     * thing synchronously.
     * 
     * When the operation is finished, `callback` will be called. You can then call
     * geocode_forward_search_finish() to get the result of the operation.
     * @param cancellable optional #GCancellable forward, %NULL to ignore.
     * @returns A Promise of: A list of places or %NULL in case of errors. Free the returned instances with g_object_unref() and the list with g_list_free() when done.
     */
    search_async(cancellable: Gio.Cancellable | null): globalThis.Promise<Place[]>
    /**
     * Finishes a forward geocoding operation. See geocode_forward_search_async().
     * @param res a #GAsyncResult.
     * @returns A list of places or %NULL in case of errors. Free the returned instances with g_object_unref() and the list with g_list_free() when done.
     */
    search_finish(res: Gio.AsyncResult): Place[]
    /**
     * Sets the number of requested results to `count`.
     * @param count the number of requested results, which must be greater than zero
     */
    set_answer_count(count: number): void
    /**
     * Specifies the backend to use in the forward geocoding operation.
     * 
     * If none is given, the default GNOME Nominatim server is used.
     * @param backend a #GeocodeBackend, or %NULL to use the    default one.
     */
    set_backend(backend: Backend | null): void
    /**
     * Set the #GeocodeForward:bounded property that regulates whether the
     * #GeocodeForward:search-area property acts restricting or not.
     * @param bounded #TRUE to restrict results to only items contained within the #GeocodeForward:search-area bounding box.
     */
    set_bounded(bounded: boolean): void
    /**
     * Sets the area to limit searches within.
     * @param box a bounding box to limit the search area.
     */
    set_search_area(box: BoundingBox): void

    // Class property signals of GeocodeGlib-1.0.GeocodeGlib.Forward

    connect(sigName: "notify::answer-count", callback: (($obj: Forward, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::answer-count", callback: (($obj: Forward, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::answer-count", ...args: any[]): void
    connect(sigName: "notify::bounded", callback: (($obj: Forward, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::bounded", callback: (($obj: Forward, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::bounded", ...args: any[]): void
    connect(sigName: "notify::search-area", callback: (($obj: Forward, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::search-area", callback: (($obj: Forward, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::search-area", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * All the fields in the #GeocodeForward structure are private and should never be accessed directly.
 * @class 
 */
class Forward extends GObject.Object {

    // Own properties of GeocodeGlib-1.0.GeocodeGlib.Forward

    static name: string
    static $gtype: GObject.GType<Forward>

    // Constructors of GeocodeGlib-1.0.GeocodeGlib.Forward

    constructor(config?: Forward.ConstructorProperties) 
    /**
     * Creates a new #GeocodeForward to perform geocoding with. The
     * #GHashTable is in the format used by Telepathy, and documented
     * on <ulink url="http://telepathy.freedesktop.org/spec/Connection_Interface_Location.html#Mapping:Location">Telepathy's specification site</ulink>.
     * 
     * See also: <ulink url="http://xmpp.org/extensions/xep-0080.html">XEP-0080 specification</ulink>.
     * @constructor 
     * @param params a #GHashTable with string keys, and #GValue values.
     * @returns a new #GeocodeForward. Use g_object_unref() when done.
     */
    static new_for_params(params: GLib.HashTable): Forward
    /**
     * Creates a new #GeocodeForward to perform forward geocoding with. The
     * string is in free-form format.
     * @constructor 
     * @param str a string containing a free-form description of the location
     * @returns a new #GeocodeForward. Use g_object_unref() when done.
     */
    static new_for_string(str: string | null): Forward
    _init(config?: Forward.ConstructorProperties): void
}

module Location {

    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of GeocodeGlib-1.0.GeocodeGlib.Location

        /**
         * The accuracy of this location in meters.
         */
        accuracy?: number | null
        /**
         * The altitude of this location in meters.
         */
        altitude?: number | null
        /**
         * The Coordinate Reference System Identification of this location.
         * Only the value 'wgs84' is currently valid.
         */
        crs?: LocationCRS | null
        /**
         * The description of this location.
         */
        description?: string | null
        /**
         * The latitude of this location in degrees.
         */
        latitude?: number | null
        /**
         * The longitude of this location in degrees.
         */
        longitude?: number | null
        /**
         * A timestamp in seconds since
         * <ulink url="http://en.wikipedia.org/wiki/Unix_epoch">Epoch</ulink>,
         * giving when the location was resolved from an address.
         * 
         * A value of 0 (zero) will be interpreted as the current time.
         */
        timestamp?: number | null
    }

}

interface Location {

    // Own properties of GeocodeGlib-1.0.GeocodeGlib.Location

    /**
     * The accuracy of this location in meters.
     */
    accuracy: number
    /**
     * The altitude of this location in meters.
     */
    altitude: number
    /**
     * The Coordinate Reference System Identification of this location.
     * Only the value 'wgs84' is currently valid.
     */
    readonly crs: LocationCRS
    /**
     * The description of this location.
     */
    description: string | null
    /**
     * The latitude of this location in degrees.
     */
    latitude: number
    /**
     * The longitude of this location in degrees.
     */
    longitude: number
    /**
     * A timestamp in seconds since
     * <ulink url="http://en.wikipedia.org/wiki/Unix_epoch">Epoch</ulink>,
     * giving when the location was resolved from an address.
     * 
     * A value of 0 (zero) will be interpreted as the current time.
     */
    readonly timestamp: number

    // Owm methods of GeocodeGlib-1.0.GeocodeGlib.Location

    /**
     * Compare two #GeocodeLocation instances for equality. This compares all fields
     * and only returns %TRUE if the instances are exactly equal. For example, if
     * both locations have the same physical coordinates, but one location has its
     * #GeocodeLocation:description property set and the other does not, %FALSE
     * will be returned. Similarly, if both locations have the same
     * #GeocodeLocation:latitude, #GeocodeLocation:longitude and
     * #GeocodeLocation:altitude, but a different #GeocodeLocation:accuracy or
     * #GeocodeLocation:timestamp, %FALSE will be returned. Or if both locations
     * have the same#GeocodeLocation:latitude and #GeocodeLocation:longitude but a
     * different #GeocodeLocation:altitude, %FALSE will be returned.
     * 
     * Both instances must be non-%NULL.
     * @param b another location
     * @returns %TRUE if the instances are equal, %FALSE otherwise
     */
    equal(b: Location): boolean
    /**
     * Gets the accuracy (in meters) of location `loc`.
     * @returns The accuracy of location @loc.
     */
    get_accuracy(): number
    /**
     * Gets the altitude of location `loc`.
     * @returns The altitude of location @loc.
     */
    get_altitude(): number
    /**
     * Gets the Coordinate Reference System Identification of location `loc`.
     * @returns The CRS of location @loc.
     */
    get_crs(): LocationCRS
    /**
     * Gets the description of location `loc`.
     * @returns The description of location @loc.
     */
    get_description(): string | null
    /**
     * Calculates the distance in km, along the curvature of the Earth,
     * between 2 locations. Note that altitude changes are not
     * taken into account.
     * @param locb a #GeocodeLocation
     * @returns a distance in km.
     */
    get_distance_from(locb: Location): number
    /**
     * Gets the latitude of location `loc`.
     * @returns The latitude of location @loc.
     */
    get_latitude(): number
    /**
     * Gets the longitude of location `loc`.
     * @returns The longitude of location @loc.
     */
    get_longitude(): number
    /**
     * Gets the timestamp (in seconds since the Epoch) of location `loc`. See
     * #GeocodeLocation:timestamp.
     * @returns The timestamp of location @loc.
     */
    get_timestamp(): number
    /**
     * Sets the description of `loc` to `description`.
     * @param description a description for the location
     */
    set_description(description: string | null): void
    /**
     * Initialize a #GeocodeLocation object with the given `uri`.
     * 
     * The URI should be in the geo scheme (RFC 5870) which in its simplest form
     * looks like:
     * 
     * - geo:latitude,longitude
     * 
     * An <ulink
     * url="http://developer.android.com/guide/components/intents-common.html#Maps">
     * Android extension</ulink> to set a description is also supported in the form of:
     * 
     * - geo:0,0?q=latitude,longitude(description)
     * @param uri a URI mapping out a location
     * @returns %TRUE on success and %FALSE on error.
     */
    set_from_uri(uri: string | null): boolean
    /**
     * Creates a URI representing `loc` in the scheme specified in `scheme`.
     * @param scheme the scheme of the requested URI
     * @returns a URI representing the location. The returned string should be freed with g_free() when no longer needed.
     */
    to_uri(scheme: LocationURIScheme): string | null

    // Class property signals of GeocodeGlib-1.0.GeocodeGlib.Location

    connect(sigName: "notify::accuracy", callback: (($obj: Location, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accuracy", callback: (($obj: Location, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::accuracy", ...args: any[]): void
    connect(sigName: "notify::altitude", callback: (($obj: Location, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::altitude", callback: (($obj: Location, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::altitude", ...args: any[]): void
    connect(sigName: "notify::crs", callback: (($obj: Location, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::crs", callback: (($obj: Location, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::crs", ...args: any[]): void
    connect(sigName: "notify::description", callback: (($obj: Location, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::description", callback: (($obj: Location, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::description", ...args: any[]): void
    connect(sigName: "notify::latitude", callback: (($obj: Location, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::latitude", callback: (($obj: Location, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::latitude", ...args: any[]): void
    connect(sigName: "notify::longitude", callback: (($obj: Location, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::longitude", callback: (($obj: Location, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::longitude", ...args: any[]): void
    connect(sigName: "notify::timestamp", callback: (($obj: Location, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::timestamp", callback: (($obj: Location, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::timestamp", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * All the fields in the #GeocodeLocation structure are private and should never be accessed directly.
 * @class 
 */
class Location extends GObject.Object {

    // Own properties of GeocodeGlib-1.0.GeocodeGlib.Location

    static name: string
    static $gtype: GObject.GType<Location>

    // Constructors of GeocodeGlib-1.0.GeocodeGlib.Location

    constructor(config?: Location.ConstructorProperties) 
    /**
     * Creates a new #GeocodeLocation object.
     * @constructor 
     * @param latitude a valid latitude
     * @param longitude a valid longitude
     * @param accuracy accuracy of location in meters
     * @returns a new #GeocodeLocation object. Use g_object_unref() when done.
     */
    constructor(latitude: number, longitude: number, accuracy: number) 
    /**
     * Creates a new #GeocodeLocation object.
     * @constructor 
     * @param latitude a valid latitude
     * @param longitude a valid longitude
     * @param accuracy accuracy of location in meters
     * @returns a new #GeocodeLocation object. Use g_object_unref() when done.
     */
    static new(latitude: number, longitude: number, accuracy: number): Location
    /**
     * Creates a new #GeocodeLocation object.
     * @constructor 
     * @param latitude a valid latitude
     * @param longitude a valid longitude
     * @param accuracy accuracy of location in meters
     * @param description a description for the location
     * @returns a new #GeocodeLocation object. Use g_object_unref() when done.
     */
    static new_with_description(latitude: number, longitude: number, accuracy: number, description: string | null): Location
    _init(config?: Location.ConstructorProperties): void
}

module MockBackend {

    // Constructor properties interface

    interface ConstructorProperties extends Backend.ConstructorProperties, GObject.Object.ConstructorProperties {
    }

}

interface MockBackend extends Backend {

    // Owm methods of GeocodeGlib-1.0.GeocodeGlib.MockBackend

    /**
     * Add a query and corresponding result (or error) to the mock backend, meaning
     * that if it receives a forward search for `params` through
     * geocode_backend_forward_search() (or its asynchronous variants), the mock
     * backend will return the given `results` or `error` to the caller.
     * 
     * If a set of `params` is added to the backend multiple times, the most
     * recently provided `results` and `error` will be used.
     * 
     * Exactly one of `results` and `error` must be set. Empty result sets are
     * represented as a %GEOCODE_ERROR_NO_MATCHES error.
     * @param params query parameters to     respond to, in the same format as accepted by geocode_forward_search()
     * @param results result set     to return for the query, or %NULL if `error` is non-%NULL; result sets     must be in the same format as returned by geocode_forward_search()
     * @param error error to return for the query, or %NULL if `results`     should be returned instead; errors must match those returned by     geocode_forward_search()
     */
    add_forward_result(params: GLib.HashTable, results: Place[] | null, error: GLib.Error | null): void
    /**
     * Add a query and corresponding result (or error) to the mock backend, meaning
     * that if it receives a reverse search for `params` through
     * geocode_backend_reverse_resolve() (or its asynchronous variants), the mock
     * backend will return the given `results` or `error` to the caller.
     * 
     * If a set of `params` is added to the backend multiple times, the most
     * recently provided `results` and `error` will be used.
     * 
     * Exactly one of `results` and `error` must be set. Empty result sets are
     * represented as a %GEOCODE_ERROR_NOT_SUPPORTED error.
     * @param params query parameters to     respond to, in the same format as accepted by geocode_reverse_resolve()
     * @param results result set     to return for the query, or %NULL if `error` is non-%NULL; result sets     must be in the same format as returned by geocode_reverse_resolve()
     * @param error error to return for the query, or %NULL if `results`     should be returned instead; errors must match those returned by     geocode_reverse_resolve()
     */
    add_reverse_result(params: GLib.HashTable, results: Place[] | null, error: GLib.Error | null): void
    /**
     * Clear the set of stored results in the mock backend which have been added
     * using geocode_mock_backend_add_forward_result() and
     * geocode_mock_backend_add_reverse_result(). Additionally, clear the query log
     * so far (see geocode_mock_backend_get_query_log()).
     * 
     * This effectively resets the mock backend to its initial state.
     */
    clear(): void
    /**
     * Get the details of the forward and reverse queries which have been requested
     * of the mock backend since the most recent call to
     * geocode_mock_backend_clear(). The query details are provided as
     * #GeocodeMockBackendQuery structures, which map the query parameters to
     * either the result set or the error which geocode_backend_forward_search()
     * or geocode_backend_reverse_resolve() (or their asynchronous variants)
     * returned to the caller.
     * 
     * The results are provided in the order in which calls were made to
     * geocode_backend_forward_search() and geocode_backend_reverse_resolve().
     * Results for forward and reverse queries may be interleaved.
     * @returns potentially     empty sequence of forward and reverse query details
     */
    get_query_log(): MockBackendQuery[]

    // Class property signals of GeocodeGlib-1.0.GeocodeGlib.MockBackend

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * All the fields in the #GeocodeMockBackend structure are private and should
 * never be accessed directly.
 * @class 
 */
class MockBackend extends GObject.Object {

    // Own properties of GeocodeGlib-1.0.GeocodeGlib.MockBackend

    static name: string
    static $gtype: GObject.GType<MockBackend>

    // Constructors of GeocodeGlib-1.0.GeocodeGlib.MockBackend

    constructor(config?: MockBackend.ConstructorProperties) 
    /**
     * Creates a new mock backend implementation with no initial forward or reverse
     * query results (so it will return an empty result set for all queries).
     * @constructor 
     * @returns a new #GeocodeMockBackend
     */
    constructor() 
    /**
     * Creates a new mock backend implementation with no initial forward or reverse
     * query results (so it will return an empty result set for all queries).
     * @constructor 
     * @returns a new #GeocodeMockBackend
     */
    static new(): MockBackend
    _init(config?: MockBackend.ConstructorProperties): void
}

module Nominatim {

    // Constructor properties interface

    interface ConstructorProperties extends Backend.ConstructorProperties, GObject.Object.ConstructorProperties {

        // Own constructor properties of GeocodeGlib-1.0.GeocodeGlib.Nominatim

        /**
         * The base URL of the Nominatim service, for example
         * `https://nominatim.example.org`.
         */
        base_url?: string | null
        /**
         * E-mail address of the maintainer of the software making the
         * geocoding requests to the  Nominatim server. This is used to contact
         * them in the event of a problem with their usage. See
         * [the Nominatim API](http://wiki.openstreetmap.org/wiki/Nominatim).
         */
        maintainer_email_address?: string | null
        /**
         * User-Agent string to send with HTTP(S) requests, or %NULL to use the
         * default user agent, which is derived from the geocode-glib version
         * and #GApplication:id, for example: `geocode-glib/3.20 (MyAppId)`.
         * 
         * As per the
         * [Nominatim usage policy](http://wiki.openstreetmap.org/wiki/Nominatim_usage_policy),
         * it should be set to a string which identifies the application which
         * is using geocode-glib, and must be a valid
         * [user agent](https://tools.ietf.org/html/rfc7231#section-5.5.3)
         * string.
         */
        user_agent?: string | null
        /**
         * The base URL of the Nominatim service, for example
         * `https://nominatim.example.org`.
         */
        baseUrl?: string | null
        /**
         * E-mail address of the maintainer of the software making the
         * geocoding requests to the  Nominatim server. This is used to contact
         * them in the event of a problem with their usage. See
         * [the Nominatim API](http://wiki.openstreetmap.org/wiki/Nominatim).
         */
        maintainerEmailAddress?: string | null
        /**
         * User-Agent string to send with HTTP(S) requests, or %NULL to use the
         * default user agent, which is derived from the geocode-glib version
         * and #GApplication:id, for example: `geocode-glib/3.20 (MyAppId)`.
         * 
         * As per the
         * [Nominatim usage policy](http://wiki.openstreetmap.org/wiki/Nominatim_usage_policy),
         * it should be set to a string which identifies the application which
         * is using geocode-glib, and must be a valid
         * [user agent](https://tools.ietf.org/html/rfc7231#section-5.5.3)
         * string.
         */
        userAgent?: string | null
    }

}

interface Nominatim extends Backend {

    // Own properties of GeocodeGlib-1.0.GeocodeGlib.Nominatim

    /**
     * The base URL of the Nominatim service, for example
     * `https://nominatim.example.org`.
     */
    readonly base_url: string | null
    /**
     * The base URL of the Nominatim service, for example
     * `https://nominatim.example.org`.
     */
    readonly baseUrl: string | null
    /**
     * E-mail address of the maintainer of the software making the
     * geocoding requests to the  Nominatim server. This is used to contact
     * them in the event of a problem with their usage. See
     * [the Nominatim API](http://wiki.openstreetmap.org/wiki/Nominatim).
     */
    readonly maintainer_email_address: string | null
    /**
     * E-mail address of the maintainer of the software making the
     * geocoding requests to the  Nominatim server. This is used to contact
     * them in the event of a problem with their usage. See
     * [the Nominatim API](http://wiki.openstreetmap.org/wiki/Nominatim).
     */
    readonly maintainerEmailAddress: string | null
    /**
     * User-Agent string to send with HTTP(S) requests, or %NULL to use the
     * default user agent, which is derived from the geocode-glib version
     * and #GApplication:id, for example: `geocode-glib/3.20 (MyAppId)`.
     * 
     * As per the
     * [Nominatim usage policy](http://wiki.openstreetmap.org/wiki/Nominatim_usage_policy),
     * it should be set to a string which identifies the application which
     * is using geocode-glib, and must be a valid
     * [user agent](https://tools.ietf.org/html/rfc7231#section-5.5.3)
     * string.
     */
    user_agent: string | null
    /**
     * User-Agent string to send with HTTP(S) requests, or %NULL to use the
     * default user agent, which is derived from the geocode-glib version
     * and #GApplication:id, for example: `geocode-glib/3.20 (MyAppId)`.
     * 
     * As per the
     * [Nominatim usage policy](http://wiki.openstreetmap.org/wiki/Nominatim_usage_policy),
     * it should be set to a string which identifies the application which
     * is using geocode-glib, and must be a valid
     * [user agent](https://tools.ietf.org/html/rfc7231#section-5.5.3)
     * string.
     */
    userAgent: string | null

    // Own fields of GeocodeGlib-1.0.GeocodeGlib.Nominatim

    parent_instance: GObject.Object

    // Own virtual methods of GeocodeGlib-1.0.GeocodeGlib.Nominatim

    vfunc_query(uri: string | null, cancellable: Gio.Cancellable | null): string | null
    vfunc_query_async(uri: string | null, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void
    vfunc_query_finish(res: Gio.AsyncResult): string | null

    // Class property signals of GeocodeGlib-1.0.GeocodeGlib.Nominatim

    connect(sigName: "notify::base-url", callback: (($obj: Nominatim, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::base-url", callback: (($obj: Nominatim, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::base-url", ...args: any[]): void
    connect(sigName: "notify::maintainer-email-address", callback: (($obj: Nominatim, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::maintainer-email-address", callback: (($obj: Nominatim, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::maintainer-email-address", ...args: any[]): void
    connect(sigName: "notify::user-agent", callback: (($obj: Nominatim, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::user-agent", callback: (($obj: Nominatim, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::user-agent", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * All the fields in the #GeocodeNominatim structure are private and should
 * never be accessed directly.
 * @class 
 */
class Nominatim extends GObject.Object {

    // Own properties of GeocodeGlib-1.0.GeocodeGlib.Nominatim

    static name: string
    static $gtype: GObject.GType<Nominatim>

    // Constructors of GeocodeGlib-1.0.GeocodeGlib.Nominatim

    constructor(config?: Nominatim.ConstructorProperties) 
    /**
     * Creates a new backend implementation for an online Nominatim server. See
     * the documentation for #GeocodeNominatim:base-url and
     * #GeocodeNominatim:maintainer-email-address.
     * @constructor 
     * @param base_url a the base URL of the Nominatim server.
     * @param maintainer_email_address the email address of the software maintainer.
     * @returns a new #GeocodeNominatim. Use g_object_unref() when done.
     */
    constructor(base_url: string | null, maintainer_email_address: string | null) 
    /**
     * Creates a new backend implementation for an online Nominatim server. See
     * the documentation for #GeocodeNominatim:base-url and
     * #GeocodeNominatim:maintainer-email-address.
     * @constructor 
     * @param base_url a the base URL of the Nominatim server.
     * @param maintainer_email_address the email address of the software maintainer.
     * @returns a new #GeocodeNominatim. Use g_object_unref() when done.
     */
    static new(base_url: string | null, maintainer_email_address: string | null): Nominatim
    _init(config?: Nominatim.ConstructorProperties): void
    /**
     * Gets a reference to the default Nominatim server on nominatim.gnome.org.
     * 
     * This function is thread-safe.
     * @returns a new #GeocodeNominatim. Use g_object_unref() when done.
     */
    static get_gnome(): Nominatim
}

module Place {

    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of GeocodeGlib-1.0.GeocodeGlib.Place

        /**
         * The local administrative area.
         */
        administrative_area?: string | null
        /**
         * A named area such as a campus or neighborhood.
         */
        area?: string | null
        /**
         * The bounding box for the place.
         */
        bounding_box?: BoundingBox | null
        /**
         * A specific building on a street or in an area.
         */
        building?: string | null
        /**
         * The continent.
         */
        continent?: string | null
        /**
         * The country.
         */
        country?: string | null
        /**
         * The country code.
         */
        country_code?: string | null
        /**
         * The county.
         */
        county?: string | null
        /**
         * The location info for the place.
         */
        location?: Location | null
        /**
         * The name of the place.
         */
        name?: string | null
        /**
         * The OpenStreetMap id of the place.
         */
        osm_id?: string | null
        /**
         * The OpenStreetMap type of the place.
         */
        osm_type?: PlaceOsmType | null
        /**
         * The type of the place.
         */
        place_type?: PlaceType | null
        /**
         * The postal code.
         */
        postal_code?: string | null
        /**
         * The state.
         */
        state?: string | null
        /**
         * The street name.
         */
        street?: string | null
        /**
         * The street address.
         */
        street_address?: string | null
        /**
         * The town.
         */
        town?: string | null
        /**
         * The local administrative area.
         */
        administrativeArea?: string | null
        /**
         * The bounding box for the place.
         */
        boundingBox?: BoundingBox | null
        /**
         * The country code.
         */
        countryCode?: string | null
        /**
         * The OpenStreetMap id of the place.
         */
        osmId?: string | null
        /**
         * The OpenStreetMap type of the place.
         */
        osmType?: PlaceOsmType | null
        /**
         * The type of the place.
         */
        placeType?: PlaceType | null
        /**
         * The postal code.
         */
        postalCode?: string | null
        /**
         * The street address.
         */
        streetAddress?: string | null
    }

}

interface Place {

    // Own properties of GeocodeGlib-1.0.GeocodeGlib.Place

    /**
     * The local administrative area.
     */
    administrative_area: string | null
    /**
     * The local administrative area.
     */
    administrativeArea: string | null
    /**
     * A named area such as a campus or neighborhood.
     */
    area: string | null
    /**
     * The bounding box for the place.
     */
    bounding_box: BoundingBox
    /**
     * The bounding box for the place.
     */
    boundingBox: BoundingBox
    /**
     * A specific building on a street or in an area.
     */
    building: string | null
    /**
     * The continent.
     */
    continent: string | null
    /**
     * The country.
     */
    country: string | null
    /**
     * The country code.
     */
    country_code: string | null
    /**
     * The country code.
     */
    countryCode: string | null
    /**
     * The county.
     */
    county: string | null
    /**
     * #GIcon representing the `GeocodePlace`.
     */
    readonly icon: Gio.Icon
    /**
     * The location info for the place.
     */
    location: Location
    /**
     * The name of the place.
     */
    name: string | null
    /**
     * The OpenStreetMap id of the place.
     */
    osm_id: string | null
    /**
     * The OpenStreetMap id of the place.
     */
    osmId: string | null
    /**
     * The OpenStreetMap type of the place.
     */
    osm_type: PlaceOsmType
    /**
     * The OpenStreetMap type of the place.
     */
    osmType: PlaceOsmType
    /**
     * The type of the place.
     */
    readonly place_type: PlaceType
    /**
     * The type of the place.
     */
    readonly placeType: PlaceType
    /**
     * The postal code.
     */
    postal_code: string | null
    /**
     * The postal code.
     */
    postalCode: string | null
    /**
     * The state.
     */
    state: string | null
    /**
     * The street name.
     */
    street: string | null
    /**
     * The street address.
     */
    street_address: string | null
    /**
     * The street address.
     */
    streetAddress: string | null
    /**
     * The town.
     */
    town: string | null

    // Owm methods of GeocodeGlib-1.0.GeocodeGlib.Place

    /**
     * Compare two #GeocodePlace instances for equality. This compares all fields
     * and only returns %TRUE if the instances are exactly equal. For example, if
     * both places have the same #GeocodePlace:location, but place `b` has its
     * #GeocodePlace:continent property set and place `a` does not, %FALSE will be
     * returned.
     * 
     * Both instances must be non-%NULL.
     * @param b another place
     * @returns %TRUE if the instances are equal, %FALSE otherwise
     */
    equal(b: Place): boolean
    /**
     * Gets the local administrative area of the `place`.
     * @returns The local administrative area of the @place.
     */
    get_administrative_area(): string | null
    /**
     * Gets the area of the `place`.
     * @returns The area of the @place.
     */
    get_area(): string | null
    /**
     * Gets the bounding box for the place `place`.
     * @returns A #GeocodeBoundingBox, or NULL if boundaries are unknown.
     */
    get_bounding_box(): BoundingBox
    /**
     * Gets the building of the `place`.
     * @returns The building of the @place.
     */
    get_building(): string | null
    /**
     * Gets the continent of the `place`.
     * @returns The continent of the @place.
     */
    get_continent(): string | null
    /**
     * Gets the country of the `place`.
     * @returns The country of the @place.
     */
    get_country(): string | null
    /**
     * Gets the ISO-3166 country code of the `place`.
     * @returns The ISO-3166 country code of the @place, in upper case.
     */
    get_country_code(): string | null
    /**
     * Gets the county of the `place`.
     * @returns The country of the @place.
     */
    get_county(): string | null
    /**
     * Gets the #GIcon representing the `place`.
     * @returns The #GIcon representing the @place.
     */
    get_icon(): Gio.Icon
    /**
     * Gets the associated location object.
     * @returns The associated location object.
     */
    get_location(): Location
    /**
     * Gets the name of the `place`.
     * @returns The name of the @place.
     */
    get_name(): string | null
    /**
     * Gets the OpenStreetMap ID of the `place`.
     * @returns The osm ID of the @place.
     */
    get_osm_id(): string | null
    /**
     * Gets the OpenStreetMap type of the `place`.
     * @returns The osm type of the @place.
     */
    get_osm_type(): PlaceOsmType
    /**
     * Gets the type of the `place`.
     * @returns The type of the @place.
     */
    get_place_type(): PlaceType
    /**
     * Gets the postal code of the `place`.
     * @returns The postal code of the @place.
     */
    get_postal_code(): string | null
    /**
     * Gets the state of the `place`.
     * @returns The state of the @place.
     */
    get_state(): string | null
    /**
     * Gets the street of the `place`.
     * @returns The street of the @place.
     */
    get_street(): string | null
    /**
     * Gets the street address of the `place`.
     * @returns The street address of the @place.
     */
    get_street_address(): string | null
    /**
     * Gets the town of the `place`.
     * @returns The town of the @place.
     */
    get_town(): string | null
    /**
     * Sets the local administrative area of `place` to `admin_area`.
     * @param admin_area an administrative area for the place
     */
    set_administrative_area(admin_area: string | null): void
    /**
     * Sets the area of `place` to `area`.
     * @param area a area
     */
    set_area(area: string | null): void
    /**
     * Sets the #GeocodeBoundingBox for the place `place`.
     * @param bbox A #GeocodeBoundingBox for the place
     */
    set_bounding_box(bbox: BoundingBox): void
    /**
     * Sets the building of `place` to `building`.
     * @param building a building
     */
    set_building(building: string | null): void
    /**
     * Sets the continent of `place` to `continent`.
     * @param continent a continent for the place
     */
    set_continent(continent: string | null): void
    /**
     * Sets the country of `place` to `country`.
     * @param country a country for the place
     */
    set_country(country: string | null): void
    /**
     * Sets the ISO country code of `place` to `country_code`.
     * @param country_code an ISO country code for the place
     */
    set_country_code(country_code: string | null): void
    /**
     * Sets the county of `place` to `county`.
     * @param county a county for the place
     */
    set_county(county: string | null): void
    /**
     * Sets the location of `place` to `location`.
     * @param location A location
     */
    set_location(location: Location): void
    /**
     * Sets the name of the `place` to `name`.
     * @param name the name of place
     */
    set_name(name: string | null): void
    /**
     * Sets the postal code of `place` to `postal_code`.
     * @param postal_code a postal code for the place
     */
    set_postal_code(postal_code: string | null): void
    /**
     * Sets the state of `place` to `state`.
     * @param state a state for the place
     */
    set_state(state: string | null): void
    /**
     * Sets the street of `place` to `street`.
     * @param street a street
     */
    set_street(street: string | null): void
    /**
     * Sets the street address of `place` to `street_address`.
     * @param street_address a street address for the place
     */
    set_street_address(street_address: string | null): void
    /**
     * Sets the town of `place` to `town`.
     * @param town a town for the place
     */
    set_town(town: string | null): void

    // Class property signals of GeocodeGlib-1.0.GeocodeGlib.Place

    connect(sigName: "notify::administrative-area", callback: (($obj: Place, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::administrative-area", callback: (($obj: Place, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::administrative-area", ...args: any[]): void
    connect(sigName: "notify::area", callback: (($obj: Place, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::area", callback: (($obj: Place, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::area", ...args: any[]): void
    connect(sigName: "notify::bounding-box", callback: (($obj: Place, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::bounding-box", callback: (($obj: Place, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::bounding-box", ...args: any[]): void
    connect(sigName: "notify::building", callback: (($obj: Place, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::building", callback: (($obj: Place, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::building", ...args: any[]): void
    connect(sigName: "notify::continent", callback: (($obj: Place, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::continent", callback: (($obj: Place, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::continent", ...args: any[]): void
    connect(sigName: "notify::country", callback: (($obj: Place, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::country", callback: (($obj: Place, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::country", ...args: any[]): void
    connect(sigName: "notify::country-code", callback: (($obj: Place, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::country-code", callback: (($obj: Place, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::country-code", ...args: any[]): void
    connect(sigName: "notify::county", callback: (($obj: Place, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::county", callback: (($obj: Place, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::county", ...args: any[]): void
    connect(sigName: "notify::icon", callback: (($obj: Place, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::icon", callback: (($obj: Place, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::icon", ...args: any[]): void
    connect(sigName: "notify::location", callback: (($obj: Place, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::location", callback: (($obj: Place, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::location", ...args: any[]): void
    connect(sigName: "notify::name", callback: (($obj: Place, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: Place, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::osm-id", callback: (($obj: Place, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::osm-id", callback: (($obj: Place, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::osm-id", ...args: any[]): void
    connect(sigName: "notify::osm-type", callback: (($obj: Place, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::osm-type", callback: (($obj: Place, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::osm-type", ...args: any[]): void
    connect(sigName: "notify::place-type", callback: (($obj: Place, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::place-type", callback: (($obj: Place, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::place-type", ...args: any[]): void
    connect(sigName: "notify::postal-code", callback: (($obj: Place, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::postal-code", callback: (($obj: Place, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::postal-code", ...args: any[]): void
    connect(sigName: "notify::state", callback: (($obj: Place, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::state", callback: (($obj: Place, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::state", ...args: any[]): void
    connect(sigName: "notify::street", callback: (($obj: Place, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::street", callback: (($obj: Place, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::street", ...args: any[]): void
    connect(sigName: "notify::street-address", callback: (($obj: Place, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::street-address", callback: (($obj: Place, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::street-address", ...args: any[]): void
    connect(sigName: "notify::town", callback: (($obj: Place, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::town", callback: (($obj: Place, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::town", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * All the fields in the #GeocodePlace structure are private and should never be accessed directly.
 * @class 
 */
class Place extends GObject.Object {

    // Own properties of GeocodeGlib-1.0.GeocodeGlib.Place

    static name: string
    static $gtype: GObject.GType<Place>

    // Constructors of GeocodeGlib-1.0.GeocodeGlib.Place

    constructor(config?: Place.ConstructorProperties) 
    /**
     * Creates a new #GeocodePlace object.
     * @constructor 
     * @param name the name of place
     * @param place_type the type of place
     * @returns a new #GeocodePlace object. Use g_object_unref() when done.
     */
    constructor(name: string | null, place_type: PlaceType) 
    /**
     * Creates a new #GeocodePlace object.
     * @constructor 
     * @param name the name of place
     * @param place_type the type of place
     * @returns a new #GeocodePlace object. Use g_object_unref() when done.
     */
    static new(name: string | null, place_type: PlaceType): Place
    /**
     * Creates a new #GeocodePlace object.
     * @constructor 
     * @param name the name of place
     * @param place_type the type of place
     * @param location the location info for the place
     * @returns a new #GeocodePlace object. Use g_object_unref() when done.
     */
    static new_with_location(name: string | null, place_type: PlaceType, location: Location): Place
    _init(config?: Place.ConstructorProperties): void
}

module Reverse {

    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

interface Reverse {

    // Owm methods of GeocodeGlib-1.0.GeocodeGlib.Reverse

    /**
     * Gets the result of a reverse geocoding
     * query using the current backend (see geocode_reverse_set_backend()). By
     * default the GNOME Nominatim server is used. See #GeocodeBackend for more
     * information.
     * 
     * If no result could be found, a %GEOCODE_ERROR_NOT_SUPPORTED error will be
     * returned. This typically happens if the coordinates to geocode are in the
     * middle of the ocean.
     * @returns A #GeocodePlace instance, or %NULL in case of errors. Free the returned instance with #g_object_unref() when done.
     */
    resolve(): Place
    /**
     * Asynchronously gets the result of a reverse geocoding
     * query using a web service. Use geocode_reverse_resolve() to do the same
     * thing synchronously.
     * 
     * When the operation is finished, `callback` will be called. You can then call
     * geocode_reverse_resolve_finish() to get the result of the operation.
     * @param cancellable optional #GCancellable object, %NULL to ignore.
     * @param callback a #GAsyncReadyCallback to call when the request is satisfied
     */
    resolve_async(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void

    // Overloads of resolve_async

    /**
     * Promisified version of {@link resolve_async}
     * 
     * Asynchronously gets the result of a reverse geocoding
     * query using a web service. Use geocode_reverse_resolve() to do the same
     * thing synchronously.
     * 
     * When the operation is finished, `callback` will be called. You can then call
     * geocode_reverse_resolve_finish() to get the result of the operation.
     * @param cancellable optional #GCancellable object, %NULL to ignore.
     * @returns A Promise of: A #GeocodePlace instance, or %NULL in case of errors. Free the returned instance with #g_object_unref() when done.
     */
    resolve_async(cancellable: Gio.Cancellable | null): globalThis.Promise<Place>
    /**
     * Finishes a reverse geocoding operation. See geocode_reverse_resolve_async().
     * @param res a #GAsyncResult.
     * @returns A #GeocodePlace instance, or %NULL in case of errors. Free the returned instance with #g_object_unref() when done.
     */
    resolve_finish(res: Gio.AsyncResult): Place
    /**
     * Specifies the backend to use in the reverse geocoding operation.
     * 
     * If none is given, the default GNOME Nominatim server is used.
     * @param backend a #GeocodeBackend, or %NULL to use the default one.
     */
    set_backend(backend: Backend | null): void

    // Class property signals of GeocodeGlib-1.0.GeocodeGlib.Reverse

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * All the fields in the #GeocodeReverse structure are private and should never be accessed directly.
 * @class 
 */
class Reverse extends GObject.Object {

    // Own properties of GeocodeGlib-1.0.GeocodeGlib.Reverse

    static name: string
    static $gtype: GObject.GType<Reverse>

    // Constructors of GeocodeGlib-1.0.GeocodeGlib.Reverse

    constructor(config?: Reverse.ConstructorProperties) 
    /**
     * Creates a new #GeocodeReverse to perform reverse geocoding with.
     * Use geocode_reverse_resolve_async() to perform the resolution.
     * @constructor 
     * @param location a #GeocodeLocation object
     * @returns a new #GeocodeReverse. Use g_object_unref() when done.
     */
    static new_for_location(location: Location): Reverse
    _init(config?: Reverse.ConstructorProperties): void
}

interface BackendInterface {

    // Own fields of GeocodeGlib-1.0.GeocodeGlib.BackendInterface

    forward_search: (backend: Backend, params: GLib.HashTable, cancellable: Gio.Cancellable | null) => Place[]
    forward_search_async: (backend: Backend, params: GLib.HashTable, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null) => void
    forward_search_finish: (backend: Backend, result: Gio.AsyncResult) => Place[]
    reverse_resolve: (backend: Backend, params: GLib.HashTable, cancellable: Gio.Cancellable | null) => Place[]
    reverse_resolve_async: (backend: Backend, params: GLib.HashTable, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null) => void
    reverse_resolve_finish: (backend: Backend, result: Gio.AsyncResult) => Place[]
}

/**
 * Interface which defines the basic operations for geocoding.
 * @record 
 */
abstract class BackendInterface {

    // Own properties of GeocodeGlib-1.0.GeocodeGlib.BackendInterface

    static name: string
}

interface BoundingBoxClass {
}

/**
 * All the fields in the #GeocodeBoundingBoxClass structure are private and
 * should never be accessed directly.
 * @record 
 */
abstract class BoundingBoxClass {

    // Own properties of GeocodeGlib-1.0.GeocodeGlib.BoundingBoxClass

    static name: string
}

interface BoundingBoxPrivate {
}

class BoundingBoxPrivate {

    // Own properties of GeocodeGlib-1.0.GeocodeGlib.BoundingBoxPrivate

    static name: string
}

interface ForwardClass {
}

/**
 * All the fields in the #GeocodeForwardClass structure are private and should never be accessed directly.
 * @record 
 */
abstract class ForwardClass {

    // Own properties of GeocodeGlib-1.0.GeocodeGlib.ForwardClass

    static name: string
}

interface ForwardPrivate {
}

class ForwardPrivate {

    // Own properties of GeocodeGlib-1.0.GeocodeGlib.ForwardPrivate

    static name: string
}

interface LocationClass {
}

/**
 * All the fields in the #GeocodeLocationClass structure are private and should never be accessed directly.
 * @record 
 */
abstract class LocationClass {

    // Own properties of GeocodeGlib-1.0.GeocodeGlib.LocationClass

    static name: string
}

interface LocationPrivate {
}

class LocationPrivate {

    // Own properties of GeocodeGlib-1.0.GeocodeGlib.LocationPrivate

    static name: string
}

interface MockBackendClass {

    // Own fields of GeocodeGlib-1.0.GeocodeGlib.MockBackendClass

    parent_class: GObject.ObjectClass
}

abstract class MockBackendClass {

    // Own properties of GeocodeGlib-1.0.GeocodeGlib.MockBackendClass

    static name: string
}

interface MockBackendQuery {

    // Own fields of GeocodeGlib-1.0.GeocodeGlib.MockBackendQuery

    /**
     * query parameters, in the format accepted by geocode_forward_search()
     *     (if `is_forward` is %TRUE) or geocode_reverse_resolve() (otherwise)
     * @field 
     */
    params: GLib.HashTable
    /**
     * %TRUE if this represents a call to geocode_forward_search();
     *     %FALSE if it represents a call to geocode_reverse_resolve()
     * @field 
     */
    is_forward: boolean
    /**
     * results returned by the
     *     query, or %NULL if an error was returned
     * @field 
     */
    results: Place[]
    /**
     * error returned by the query, or %NULL if a result set
     *     was returned
     * @field 
     */
    error: GLib.Error
}

/**
 * The details of a forward or reverse query which was performed on a
 * #GeocodeMockBackend by application code. This includes the input (`params,`
 * `is_forward)`, and the output which was returned (`results` or `error)`.
 * 
 * Empty result sets are represented by the %GEOCODE_ERROR_NO_MATCHES error
 * (for forward queries) or the %GEOCODE_ERROR_NOT_SUPPORTED error (for reverse
 * queries), rather than an empty `results` list.
 * @record 
 */
class MockBackendQuery {

    // Own properties of GeocodeGlib-1.0.GeocodeGlib.MockBackendQuery

    static name: string
}

interface NominatimClass {

    // Own fields of GeocodeGlib-1.0.GeocodeGlib.NominatimClass

    parent_class: GObject.ObjectClass
    query: (self: Nominatim, uri: string | null, cancellable: Gio.Cancellable | null) => string | null
    query_async: (self: Nominatim, uri: string | null, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null) => void
    query_finish: (self: Nominatim, res: Gio.AsyncResult) => string | null
}

/**
 * #GeocodeNominatim allows derived classes to override its query functions,
 * which are called for each network request the Nominatim client makes. All
 * network requests are `GET`s with no request body; just a URI. The default
 * implementation makes the requests internally, but derived classes may want
 * to override these queries to check the URIs for testing, for example.
 * 
 * Applications should not normally have to derive #GeocodeNominatim; these
 * virtual methods are mainly intended for testing.
 * @record 
 */
abstract class NominatimClass {

    // Own properties of GeocodeGlib-1.0.GeocodeGlib.NominatimClass

    static name: string
}

interface PlaceClass {
}

/**
 * All the fields in the #GeocodePlaceClass structure are private and should never be accessed directly.
 * @record 
 */
abstract class PlaceClass {

    // Own properties of GeocodeGlib-1.0.GeocodeGlib.PlaceClass

    static name: string
}

interface PlacePrivate {
}

class PlacePrivate {

    // Own properties of GeocodeGlib-1.0.GeocodeGlib.PlacePrivate

    static name: string
}

interface ReverseClass {
}

/**
 * All the fields in the #GeocodeReverseClass structure are private and should never be accessed directly.
 * @record 
 */
abstract class ReverseClass {

    // Own properties of GeocodeGlib-1.0.GeocodeGlib.ReverseClass

    static name: string
}

interface ReversePrivate {
}

class ReversePrivate {

    // Own properties of GeocodeGlib-1.0.GeocodeGlib.ReversePrivate

    static name: string
}

/**
 * Name of the imported GIR library
 * @see https://gitlab.gnome.org/GNOME/gjs/-/blob/master/gi/ns.cpp#L188
 */
const __name__: string
/**
 * Version of the imported GIR library
 * @see https://gitlab.gnome.org/GNOME/gjs/-/blob/master/gi/ns.cpp#L189
 */
const __version__: string
}

export default GeocodeGlib;
// END