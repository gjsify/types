
/**
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in `ts-for-gir` or create a bug report on https://github.com/gjsify/ts-for-gir
 *
 * The based EJS template file is used for the generated .d.ts file of each GIR module like Gtk-4.0, GObject-2.0, ...
 */

import '@girs/gjs';

// Module dependencies
import type Soup from '@girs/soup-2.4';
import type Gio from '@girs/gio-2.0';
import type GObject from '@girs/gobject-2.0';
import type GLib from '@girs/glib-2.0';
import type GModule from '@girs/gmodule-2.0';
import type Json from '@girs/json-1.0';

export namespace GeocodeGlib {

    /**
     * GeocodeGlib-1.0
     */


    /**
     * Error codes returned by geocode-glib functions.
     * @gir-type Struct
     */
    class Error extends GLib.Error {
        static $gtype: GObject.GType<GLib.Error>;

        // Static fields
        /**
         * An error occured parsing the response from the web service.
         */
        static PARSE: number;

        /**
         * The request made was not supported.
         */
        static NOT_SUPPORTED: number;

        /**
         * The requests made didn't have any matches.
         */
        static NO_MATCHES: number;

        /**
         * The request made contained invalid arguments.
         */
        static INVALID_ARGUMENTS: number;

        /**
         * The server encountered an (possibly unrecoverable) internal error.
         */
        static INTERNAL_SERVER: number;

        // Constructors
        constructor(options: { message: string; code: number });

        // Static methods
        /**
         * Gets the geocode-glib error quark.
         */
        static quark(): GLib.Quark;
    }


    /**
     * @gir-type Enum
     */
    export namespace LocationCRS {
        export const $gtype: GObject.GType<LocationCRS>;
    }

    /**
     * Coordinate Reference System Identification for a location.
     * @gir-type Enum
     */
    enum LocationCRS {
        /**
         * CRS is World Geodetic System, standard for Earth.
         */
        WGS84,
    }


    /**
     * @gir-type Enum
     */
    export namespace LocationURIScheme {
        export const $gtype: GObject.GType<LocationURIScheme>;
    }

    /**
     * The URI scheme for this location.
     * @gir-type Enum
     */
    enum LocationURIScheme {
        /**
         * The 'geo' URI scheme, RFC 5870
         */
        GEO,
    }


    /**
     * @gir-type Enum
     */
    export namespace PlaceOsmType {
        export const $gtype: GObject.GType<PlaceOsmType>;
    }

    /**
     * Osm type of the place.
     * @gir-type Enum
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
     * @gir-type Enum
     */
    export namespace PlaceType {
        export const $gtype: GObject.GType<PlaceType>;
    }

    /**
     * Type of the place.
     * @gir-type Enum
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
    const LOCATION_ACCURACY_CITY: number;

    /**
     * Constant representing continent-level accuracy.
     */
    const LOCATION_ACCURACY_CONTINENT: number;

    /**
     * Constant representing country-level accuracy.
     */
    const LOCATION_ACCURACY_COUNTRY: number;

    /**
     * Constant representing region-level accuracy.
     */
    const LOCATION_ACCURACY_REGION: number;

    /**
     * Constant representing street-level accuracy.
     */
    const LOCATION_ACCURACY_STREET: number;

    /**
     * Constant representing unknown accuracy.
     */
    const LOCATION_ACCURACY_UNKNOWN: number;

    /**
     * Gets the geocode-glib error quark.
     * @returns a {@link GLib.Quark}.
     */
    function error_quark(): GLib.Quark;

    namespace BoundingBox {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            "notify::bottom": (pspec: GObject.ParamSpec) => void;
            "notify::left": (pspec: GObject.ParamSpec) => void;
            "notify::right": (pspec: GObject.ParamSpec) => void;
            "notify::top": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps {
            bottom: number;
            left: number;
            right: number;
            top: number;
        }
    }

    /**
     * All the fields in the {@link GeocodeGlib.Location} structure are private and should
     * never be accessed directly.
     * @gir-type Class
     */
    class BoundingBox extends GObject.Object {
        static $gtype: GObject.GType<BoundingBox>;

        // Properties
        /**
         * Bottom coordinate.
         * @construct-only
         */
        get bottom(): number;

        /**
         * Left coordinate.
         * @construct-only
         */
        get left(): number;

        /**
         * Right coordinate.
         * @construct-only
         */
        get right(): number;

        /**
         * Top coordinate.
         * @construct-only
         */
        get top(): number;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: BoundingBox.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<BoundingBox.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](top: number, bottom: number, left: number, right: number): BoundingBox;

        // Signals
        /** @signal */
        connect<K extends keyof BoundingBox.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, BoundingBox.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof BoundingBox.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, BoundingBox.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof BoundingBox.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<BoundingBox.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Methods
        /**
         * Compare two {@link GeocodeGlib.BoundingBox} instances for equality. This compares all
         * fields and only returns `true` if the instances are exactly equal.
         * 
         * Both instances must be non-`null`.
         * @param b another bounding box
         * @returns `true` if the instances are equal, `false` otherwise
         */
        equal(b: BoundingBox): boolean;

        /**
         * Gets the bottom coordinate of `bbox`.
         * @returns the bottom coordinate of `bbox`.
         */
        get_bottom(): number;

        /**
         * Gets the left coordinate of `bbox`.
         * @returns the left coordinate of `bbox`.
         */
        get_left(): number;

        /**
         * Gets the right coordinate of `bbox`.
         * @returns the right coordinate of `bbox`.
         */
        get_right(): number;

        /**
         * Gets the top coordinate of `bbox`.
         * @returns the top coordinate of `bbox`.
         */
        get_top(): number;
    }


    namespace Forward {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            "notify::answer-count": (pspec: GObject.ParamSpec) => void;
            "notify::bounded": (pspec: GObject.ParamSpec) => void;
            "notify::search-area": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps {
            answer_count: number;
            answerCount: number;
            bounded: boolean;
            search_area: BoundingBox | null;
            searchArea: BoundingBox | null;
        }
    }

    /**
     * All the fields in the {@link GeocodeGlib.Forward} structure are private and should never be accessed directly.
     * @gir-type Class
     */
    class Forward extends GObject.Object {
        static $gtype: GObject.GType<Forward>;

        // Properties
        /**
         * The number of requested results to a search query.
         */
        get answer_count(): number;
        set answer_count(val: number);

        /**
         * The number of requested results to a search query.
         */
        get answerCount(): number;
        set answerCount(val: number);

        /**
         * If set to `TRUE` then only results in the {@link GeocodeGlib.Forward.search_area}
         * bounding box are returned.
         * If set to `FALSE` the {@link GeocodeGlib.Forward.search_area} is treated like a
         * preferred area for results.
         */
        get bounded(): boolean;
        set bounded(val: boolean);

        /**
         * The bounding box that limits the search area.
         * If {@link GeocodeGlib.Forward.bounded} property is set to `TRUE` only results from
         * this area is returned.
         */
        get search_area(): BoundingBox | null;
        set search_area(val: BoundingBox | null);

        /**
         * The bounding box that limits the search area.
         * If {@link GeocodeGlib.Forward.bounded} property is set to `TRUE` only results from
         * this area is returned.
         */
        get searchArea(): BoundingBox | null;
        set searchArea(val: BoundingBox | null);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Forward.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<Forward.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static new_for_params(params: { [key: string]: any } | GLib.HashTable<string, GObject.Value>): Forward;

        static new_for_string(str: string): Forward;

        // Signals
        /** @signal */
        connect<K extends keyof Forward.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Forward.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof Forward.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Forward.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof Forward.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<Forward.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Methods
        /**
         * Gets the number of requested results for searches.
         */
        get_answer_count(): number;

        /**
         * Gets the {@link GeocodeGlib.Forward.bounded} property that regulates whether the
         * {@link GeocodeGlib.Forward.search_area} property acts restricting or not.
         */
        get_bounded(): boolean;

        /**
         * Gets the area to limit searches within.
         * @returns the search area, or `null` if none is set
         */
        get_search_area(): BoundingBox | null;

        /**
         * Gets the result of a forward geocoding
         * query using the current backend (see `geocode_forward_set_backend()`). By
         * default the GNOME Nominatim server is used. See {@link GeocodeGlib.Backend} for more
         * information.
         * 
         * If no results are found, a {@link GeocodeGlib.Error.NO_MATCHES} error is returned.
         * @returns A list of places or `null` in case of errors. Free the returned instances with `g_object_unref()` and the list with `g_list_free()` when done.
         */
        search(): Place[];

        /**
         * Asynchronously performs a forward geocoding
         * query using a web service. Use `geocode_forward_search()` to do the same
         * thing synchronously.
         * 
         * When the operation is finished, `callback` will be called. You can then call
         * `geocode_forward_search_finish()` to get the result of the operation.
         * @param cancellable optional {@link Gio.Cancellable} forward, `null` to ignore.
         */
        search_async(cancellable: Gio.Cancellable | null): globalThis.Promise<Place[]>;

        /**
         * Asynchronously performs a forward geocoding
         * query using a web service. Use `geocode_forward_search()` to do the same
         * thing synchronously.
         * 
         * When the operation is finished, `callback` will be called. You can then call
         * `geocode_forward_search_finish()` to get the result of the operation.
         * @param cancellable optional {@link Gio.Cancellable} forward, `null` to ignore.
         * @param callback a {@link Gio.AsyncReadyCallback} to call when the request is satisfied
         */
        search_async(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;

        /**
         * Asynchronously performs a forward geocoding
         * query using a web service. Use `geocode_forward_search()` to do the same
         * thing synchronously.
         * 
         * When the operation is finished, `callback` will be called. You can then call
         * `geocode_forward_search_finish()` to get the result of the operation.
         * @param cancellable optional {@link Gio.Cancellable} forward, `null` to ignore.
         * @param callback a {@link Gio.AsyncReadyCallback} to call when the request is satisfied
         */
        search_async(cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<Place[]> | void;

        /**
         * Finishes a forward geocoding operation. See `geocode_forward_search_async()`.
         * @param res a {@link Gio.AsyncResult}.
         * @returns A list of places or `null` in case of errors. Free the returned instances with `g_object_unref()` and the list with `g_list_free()` when done.
         */
        search_finish(res: Gio.AsyncResult): Place[];

        /**
         * Sets the number of requested results to `count`.
         * @param count the number of requested results, which must be greater than zero
         */
        set_answer_count(count: number): void;

        /**
         * Specifies the backend to use in the forward geocoding operation.
         * 
         * If none is given, the default GNOME Nominatim server is used.
         * @param backend a {@link GeocodeGlib.Backend}, or `null` to use the    default one.
         */
        set_backend(backend: Backend | null): void;

        /**
         * Set the {@link GeocodeGlib.Forward.bounded} property that regulates whether the
         * {@link GeocodeGlib.Forward.search_area} property acts restricting or not.
         * @param bounded `TRUE` to restrict results to only items contained within the {@link GeocodeGlib.Forward.search_area} bounding box.
         */
        set_bounded(bounded: boolean): void;

        /**
         * Sets the area to limit searches within.
         * @param box a bounding box to limit the search area.
         */
        set_search_area(box: BoundingBox): void;
    }


    namespace Location {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            "notify::accuracy": (pspec: GObject.ParamSpec) => void;
            "notify::altitude": (pspec: GObject.ParamSpec) => void;
            "notify::crs": (pspec: GObject.ParamSpec) => void;
            "notify::description": (pspec: GObject.ParamSpec) => void;
            "notify::latitude": (pspec: GObject.ParamSpec) => void;
            "notify::longitude": (pspec: GObject.ParamSpec) => void;
            "notify::timestamp": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps {
            accuracy: number;
            altitude: number;
            crs: LocationCRS;
            description: string;
            latitude: number;
            longitude: number;
            timestamp: bigint | number;
        }
    }

    /**
     * All the fields in the {@link GeocodeGlib.Location} structure are private and should never be accessed directly.
     * @gir-type Class
     */
    class Location extends GObject.Object {
        static $gtype: GObject.GType<Location>;

        // Properties
        /**
         * The accuracy of this location in meters.
         */
        get accuracy(): number;
        set accuracy(val: number);

        /**
         * The altitude of this location in meters.
         */
        get altitude(): number;
        set altitude(val: number);

        /**
         * The Coordinate Reference System Identification of this location.
         * Only the value 'wgs84' is currently valid.
         * @construct-only
         */
        get crs(): LocationCRS;

        /**
         * The description of this location.
         */
        get description(): string;
        set description(val: string);

        /**
         * The latitude of this location in degrees.
         */
        get latitude(): number;
        set latitude(val: number);

        /**
         * The longitude of this location in degrees.
         */
        get longitude(): number;
        set longitude(val: number);

        /**
         * A timestamp in seconds since
         * <ulink url="http://en.wikipedia.org/wiki/Unix_epoch">Epoch</ulink>,
         * giving when the location was resolved from an address.
         * 
         * A value of 0 (zero) will be interpreted as the current time.
         * @construct-only
         */
        get timestamp(): number;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Location.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<Location.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](latitude: number, longitude: number, accuracy: number): Location;

        static new_with_description(latitude: number, longitude: number, accuracy: number, description: string): Location;

        // Signals
        /** @signal */
        connect<K extends keyof Location.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Location.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof Location.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Location.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof Location.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<Location.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Methods
        /**
         * Compare two {@link GeocodeGlib.Location} instances for equality. This compares all fields
         * and only returns `true` if the instances are exactly equal. For example, if
         * both locations have the same physical coordinates, but one location has its
         * {@link GeocodeGlib.Location.description} property set and the other does not, `false`
         * will be returned. Similarly, if both locations have the same
         * {@link GeocodeGlib.Location.latitude}, {@link GeocodeGlib.Location.longitude} and
         * {@link GeocodeGlib.Location.altitude}, but a different {@link GeocodeGlib.Location.accuracy} or
         * {@link GeocodeGlib.Location.timestamp}, `false` will be returned. Or if both locations
         * have the same{@link GeocodeGlib.Location.latitude} and {@link GeocodeGlib.Location.longitude} but a
         * different {@link GeocodeGlib.Location.altitude}, `false` will be returned.
         * 
         * Both instances must be non-`null`.
         * @param b another location
         * @returns `true` if the instances are equal, `false` otherwise
         */
        equal(b: Location): boolean;

        /**
         * Gets the accuracy (in meters) of location `loc`.
         * @returns The accuracy of location `loc`.
         */
        get_accuracy(): number;

        /**
         * Gets the altitude of location `loc`.
         * @returns The altitude of location `loc`.
         */
        get_altitude(): number;

        /**
         * Gets the Coordinate Reference System Identification of location `loc`.
         * @returns The CRS of location `loc`.
         */
        get_crs(): LocationCRS;

        /**
         * Gets the description of location `loc`.
         * @returns The description of location `loc`.
         */
        get_description(): string;

        /**
         * Calculates the distance in km, along the curvature of the Earth,
         * between 2 locations. Note that altitude changes are not
         * taken into account.
         * @param locb a {@link GeocodeGlib.Location}
         * @returns a distance in km.
         */
        get_distance_from(locb: Location): number;

        /**
         * Gets the latitude of location `loc`.
         * @returns The latitude of location `loc`.
         */
        get_latitude(): number;

        /**
         * Gets the longitude of location `loc`.
         * @returns The longitude of location `loc`.
         */
        get_longitude(): number;

        /**
         * Gets the timestamp (in seconds since the Epoch) of location `loc`. See
         * {@link GeocodeGlib.Location.timestamp}.
         * @returns The timestamp of location `loc`.
         */
        get_timestamp(): number;

        /**
         * Sets the description of `loc` to `description`.
         * @param description a description for the location
         */
        set_description(description: string): void;

        /**
         * Initialize a {@link GeocodeGlib.Location} object with the given `uri`.
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
         * @returns `true` on success and `false` on error.
         */
        set_from_uri(uri: string): boolean;

        /**
         * Creates a URI representing `loc` in the scheme specified in `scheme`.
         * @param scheme the scheme of the requested URI
         * @returns a URI representing the location. The returned string should be freed with `g_free()` when no longer needed.
         */
        to_uri(scheme: LocationURIScheme): string;
    }


    namespace MockBackend {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {}

        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps, Backend.ConstructorProps {}
    }

    /**
     * All the fields in the {@link GeocodeGlib.MockBackend} structure are private and should
     * never be accessed directly.
     * @gir-type Class
     * @since 3.23.1
     */
    class MockBackend extends GObject.Object implements Backend {
        static $gtype: GObject.GType<MockBackend>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: MockBackend.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<MockBackend.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](): MockBackend;

        // Signals
        /** @signal */
        connect<K extends keyof MockBackend.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, MockBackend.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof MockBackend.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, MockBackend.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof MockBackend.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<MockBackend.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Methods
        /**
         * Add a query and corresponding result (or error) to the mock backend, meaning
         * that if it receives a forward search for `params` through
         * `geocode_backend_forward_search()` (or its asynchronous variants), the mock
         * backend will return the given `results` or `error` to the caller.
         * 
         * If a set of `params` is added to the backend multiple times, the most
         * recently provided `results` and `error` will be used.
         * 
         * Exactly one of `results` and `error` must be set. Empty result sets are
         * represented as a {@link GeocodeGlib.Error.NO_MATCHES} error.
         * @param params query parameters to     respond to, in the same format as accepted by `geocode_forward_search()`
         * @param results result set     to return for the query, or `null` if `error` is non-`null`; result sets     must be in the same format as returned by `geocode_forward_search()`
         * @param error error to return for the query, or `null` if `results`     should be returned instead; errors must match those returned by     `geocode_forward_search()`
         */
        add_forward_result(params: { [key: string]: any } | GLib.HashTable<string, GObject.Value>, results: Place[] | null, error: GLib.Error | null): void;

        /**
         * Add a query and corresponding result (or error) to the mock backend, meaning
         * that if it receives a reverse search for `params` through
         * `geocode_backend_reverse_resolve()` (or its asynchronous variants), the mock
         * backend will return the given `results` or `error` to the caller.
         * 
         * If a set of `params` is added to the backend multiple times, the most
         * recently provided `results` and `error` will be used.
         * 
         * Exactly one of `results` and `error` must be set. Empty result sets are
         * represented as a {@link GeocodeGlib.Error.NOT_SUPPORTED} error.
         * @param params query parameters to     respond to, in the same format as accepted by `geocode_reverse_resolve()`
         * @param results result set     to return for the query, or `null` if `error` is non-`null`; result sets     must be in the same format as returned by `geocode_reverse_resolve()`
         * @param error error to return for the query, or `null` if `results`     should be returned instead; errors must match those returned by     `geocode_reverse_resolve()`
         */
        add_reverse_result(params: { [key: string]: any } | GLib.HashTable<string, GObject.Value>, results: Place[] | null, error: GLib.Error | null): void;

        /**
         * Clear the set of stored results in the mock backend which have been added
         * using `geocode_mock_backend_add_forward_result()` and
         * `geocode_mock_backend_add_reverse_result()`. Additionally, clear the query log
         * so far (see `geocode_mock_backend_get_query_log()`).
         * 
         * This effectively resets the mock backend to its initial state.
         */
        clear(): void;

        /**
         * Get the details of the forward and reverse queries which have been requested
         * of the mock backend since the most recent call to
         * `geocode_mock_backend_clear()`. The query details are provided as
         * {@link GeocodeGlib.MockBackendQuery} structures, which map the query parameters to
         * either the result set or the error which `geocode_backend_forward_search()`
         * or `geocode_backend_reverse_resolve()` (or their asynchronous variants)
         * returned to the caller.
         * 
         * The results are provided in the order in which calls were made to
         * `geocode_backend_forward_search()` and `geocode_backend_reverse_resolve()`.
         * Results for forward and reverse queries may be interleaved.
         * @returns potentially     empty sequence of forward and reverse query details
         */
        get_query_log(): MockBackendQuery[];

        /**
         * Gets the result of a forward geocoding query using the `backend`.
         * 
         * If no results are found, a {@link GeocodeGlib.Error.NO_MATCHES} error is returned.
         * 
         * This is a synchronous function, which means it may block on network requests.
         * In most situations, the asynchronous version
         * (geocode_backend_forward_search_async()) is more appropriate. See its
         * documentation for more information on usage.
         * @param params a {@link GLib.HashTable} with string keys, and {@link GObject.Value} values.
         * @param cancellable optional {@link Gio.Cancellable}, `null` to ignore.
         * @returns A list of places or `null` in case of errors. Free the returned instances with `g_object_unref()` and the list with `g_list_free()` when done.
         */
        forward_search(params: { [key: string]: any } | GLib.HashTable<string, GObject.Value>, cancellable: Gio.Cancellable | null): Place[];

        /**
         * Asynchronously performs a forward geocoding query using the `backend`. Use
         * `geocode_backend_forward_search()` to do the same thing synchronously.
         * 
         * The `params` hash table is in the format used by Telepathy, and documented
         * in the [Telepathy specification](http://telepathy.freedesktop.org/spec/Connection_Interface_Location.html#Mapping:Location).
         * 
         * See also: [XEP-0080 specification](http://xmpp.org/extensions/xep-0080.html).
         * 
         * When the operation is finished, `callback` will be called. You can then call
         * `geocode_backend_forward_search_finish()` to get the result of the operation.
         * @param params a {@link GLib.HashTable} with string keys, and {@link GObject.Value} values.
         * @param cancellable optional {@link Gio.Cancellable}, `null` to ignore.
         */
        forward_search_async(params: { [key: string]: any } | GLib.HashTable<string, GObject.Value>, cancellable: Gio.Cancellable | null): globalThis.Promise<Place[]>;

        /**
         * Asynchronously performs a forward geocoding query using the `backend`. Use
         * `geocode_backend_forward_search()` to do the same thing synchronously.
         * 
         * The `params` hash table is in the format used by Telepathy, and documented
         * in the [Telepathy specification](http://telepathy.freedesktop.org/spec/Connection_Interface_Location.html#Mapping:Location).
         * 
         * See also: [XEP-0080 specification](http://xmpp.org/extensions/xep-0080.html).
         * 
         * When the operation is finished, `callback` will be called. You can then call
         * `geocode_backend_forward_search_finish()` to get the result of the operation.
         * @param params a {@link GLib.HashTable} with string keys, and {@link GObject.Value} values.
         * @param cancellable optional {@link Gio.Cancellable}, `null` to ignore.
         * @param callback a {@link Gio.AsyncReadyCallback} to call when the request is satisfied
         */
        forward_search_async(params: { [key: string]: any } | GLib.HashTable<string, GObject.Value>, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;

        /**
         * Asynchronously performs a forward geocoding query using the `backend`. Use
         * `geocode_backend_forward_search()` to do the same thing synchronously.
         * 
         * The `params` hash table is in the format used by Telepathy, and documented
         * in the [Telepathy specification](http://telepathy.freedesktop.org/spec/Connection_Interface_Location.html#Mapping:Location).
         * 
         * See also: [XEP-0080 specification](http://xmpp.org/extensions/xep-0080.html).
         * 
         * When the operation is finished, `callback` will be called. You can then call
         * `geocode_backend_forward_search_finish()` to get the result of the operation.
         * @param params a {@link GLib.HashTable} with string keys, and {@link GObject.Value} values.
         * @param cancellable optional {@link Gio.Cancellable}, `null` to ignore.
         * @param callback a {@link Gio.AsyncReadyCallback} to call when the request is satisfied
         */
        forward_search_async(params: { [key: string]: any } | GLib.HashTable<string, GObject.Value>, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<Place[]> | void;

        /**
         * Finishes a forward geocoding operation. See
         * `geocode_backend_forward_search_async()`.
         * @param result a {@link Gio.AsyncResult}.
         * @returns A list of places or `null` in case of errors. Free the returned instances with `g_object_unref()` and the list with `g_list_free()` when done.
         */
        forward_search_finish(result: Gio.AsyncResult): Place[];

        /**
         * Gets the result of a reverse geocoding query using the `backend`.
         * 
         * If no result could be found, a {@link GeocodeGlib.Error.NOT_SUPPORTED} error will be
         * returned. This typically happens if the coordinates to geocode are in the
         * middle of the ocean.
         * 
         * This is a synchronous function, which means it may block on network requests.
         * In most situations, the asynchronous version,
         * `geocode_backend_forward_search_async()`, is more appropriate. See its
         * documentation for more information on usage.
         * @param params a {@link GLib.HashTable} with string keys, and {@link GObject.Value} values.
         * @param cancellable optional {@link Gio.Cancellable} object, `null` to ignore.
         * @returns A list of    {@link GeocodeGlib.Place} instances, or `null` in case of errors. The list is ordered    by relevance, with most relevant results first. Free the returned    instances with `g_object_unref()` and the list with `g_list_free()` when done.
         */
        reverse_resolve(params: { [key: string]: any } | GLib.HashTable<string, GObject.Value>, cancellable: Gio.Cancellable | null): Place[];

        /**
         * Asynchronously gets the result of a reverse geocoding query using the
         * backend.
         * 
         * Typically, a single result will be returned representing the place at a
         * given latitude and longitude (the `lat` and `lon` keys to `params`); but in
         * some cases the results will be ambiguous and *multiple* results will be
         * returned. They will be returned in order of relevance, with the most
         * relevant result first in the list.
         * 
         * The `params` hash table is in the format used by Telepathy, and documented
         * in the [Telepathy specification](http://telepathy.freedesktop.org/spec/Connection_Interface_Location.html#Mapping:Location).
         * 
         * See also: [XEP-0080 specification](http://xmpp.org/extensions/xep-0080.html).
         * 
         * Use `geocode_backend_reverse_resolve()` to do the same thing synchronously.
         * 
         * When the operation is finished, `callback` will be called. You can then call
         * `geocode_backend_reverse_resolve_finish()` to get the result of the operation.
         * @param params a {@link GLib.HashTable} with string keys, and {@link GObject.Value} values.
         * @param cancellable optional {@link Gio.Cancellable} object, `null` to ignore.
         */
        reverse_resolve_async(params: { [key: string]: any } | GLib.HashTable<string, GObject.Value>, cancellable: Gio.Cancellable | null): globalThis.Promise<Place[]>;

        /**
         * Asynchronously gets the result of a reverse geocoding query using the
         * backend.
         * 
         * Typically, a single result will be returned representing the place at a
         * given latitude and longitude (the `lat` and `lon` keys to `params`); but in
         * some cases the results will be ambiguous and *multiple* results will be
         * returned. They will be returned in order of relevance, with the most
         * relevant result first in the list.
         * 
         * The `params` hash table is in the format used by Telepathy, and documented
         * in the [Telepathy specification](http://telepathy.freedesktop.org/spec/Connection_Interface_Location.html#Mapping:Location).
         * 
         * See also: [XEP-0080 specification](http://xmpp.org/extensions/xep-0080.html).
         * 
         * Use `geocode_backend_reverse_resolve()` to do the same thing synchronously.
         * 
         * When the operation is finished, `callback` will be called. You can then call
         * `geocode_backend_reverse_resolve_finish()` to get the result of the operation.
         * @param params a {@link GLib.HashTable} with string keys, and {@link GObject.Value} values.
         * @param cancellable optional {@link Gio.Cancellable} object, `null` to ignore.
         * @param callback a {@link Gio.AsyncReadyCallback} to call when the request is satisfied.
         */
        reverse_resolve_async(params: { [key: string]: any } | GLib.HashTable<string, GObject.Value>, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;

        /**
         * Asynchronously gets the result of a reverse geocoding query using the
         * backend.
         * 
         * Typically, a single result will be returned representing the place at a
         * given latitude and longitude (the `lat` and `lon` keys to `params`); but in
         * some cases the results will be ambiguous and *multiple* results will be
         * returned. They will be returned in order of relevance, with the most
         * relevant result first in the list.
         * 
         * The `params` hash table is in the format used by Telepathy, and documented
         * in the [Telepathy specification](http://telepathy.freedesktop.org/spec/Connection_Interface_Location.html#Mapping:Location).
         * 
         * See also: [XEP-0080 specification](http://xmpp.org/extensions/xep-0080.html).
         * 
         * Use `geocode_backend_reverse_resolve()` to do the same thing synchronously.
         * 
         * When the operation is finished, `callback` will be called. You can then call
         * `geocode_backend_reverse_resolve_finish()` to get the result of the operation.
         * @param params a {@link GLib.HashTable} with string keys, and {@link GObject.Value} values.
         * @param cancellable optional {@link Gio.Cancellable} object, `null` to ignore.
         * @param callback a {@link Gio.AsyncReadyCallback} to call when the request is satisfied.
         */
        reverse_resolve_async(params: { [key: string]: any } | GLib.HashTable<string, GObject.Value>, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<Place[]> | void;

        /**
         * Finishes a reverse geocoding operation. See `geocode_backend_reverse_resolve_async()`.
         * @param result a {@link Gio.AsyncResult}.
         * @returns A list of    {@link GeocodeGlib.Place} instances, or `null` in case of errors. The list is ordered    by relevance, with most relevant results first. Free the returned    instances with `g_object_unref()` and the list with `g_list_free()` when done.
         */
        reverse_resolve_finish(result: Gio.AsyncResult): Place[];

        /**
         * Gets the result of a forward geocoding query using the `backend`.
         * 
         * If no results are found, a {@link GeocodeGlib.Error.NO_MATCHES} error is returned.
         * 
         * This is a synchronous function, which means it may block on network requests.
         * In most situations, the asynchronous version
         * (geocode_backend_forward_search_async()) is more appropriate. See its
         * documentation for more information on usage.
         * @param params a {@link GLib.HashTable} with string keys, and {@link GObject.Value} values.
         * @param cancellable optional {@link Gio.Cancellable}, `null` to ignore.
         * @virtual
         */
        vfunc_forward_search(params: GLib.HashTable<string, GObject.Value>, cancellable: Gio.Cancellable | null): Place[];

        /**
         * Asynchronously performs a forward geocoding query using the `backend`. Use
         * `geocode_backend_forward_search()` to do the same thing synchronously.
         * 
         * The `params` hash table is in the format used by Telepathy, and documented
         * in the [Telepathy specification](http://telepathy.freedesktop.org/spec/Connection_Interface_Location.html#Mapping:Location).
         * 
         * See also: [XEP-0080 specification](http://xmpp.org/extensions/xep-0080.html).
         * 
         * When the operation is finished, `callback` will be called. You can then call
         * `geocode_backend_forward_search_finish()` to get the result of the operation.
         * @param params a {@link GLib.HashTable} with string keys, and {@link GObject.Value} values.
         * @param cancellable optional {@link Gio.Cancellable}, `null` to ignore.
         * @param callback a {@link Gio.AsyncReadyCallback} to call when the request is satisfied
         * @virtual
         */
        vfunc_forward_search_async(params: GLib.HashTable<string, GObject.Value>, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;

        /**
         * Finishes a forward geocoding operation. See
         * `geocode_backend_forward_search_async()`.
         * @param result a {@link Gio.AsyncResult}.
         * @virtual
         */
        vfunc_forward_search_finish(result: Gio.AsyncResult): Place[];

        /**
         * Gets the result of a reverse geocoding query using the `backend`.
         * 
         * If no result could be found, a {@link GeocodeGlib.Error.NOT_SUPPORTED} error will be
         * returned. This typically happens if the coordinates to geocode are in the
         * middle of the ocean.
         * 
         * This is a synchronous function, which means it may block on network requests.
         * In most situations, the asynchronous version,
         * `geocode_backend_forward_search_async()`, is more appropriate. See its
         * documentation for more information on usage.
         * @param params a {@link GLib.HashTable} with string keys, and {@link GObject.Value} values.
         * @param cancellable optional {@link Gio.Cancellable} object, `null` to ignore.
         * @virtual
         */
        vfunc_reverse_resolve(params: GLib.HashTable<string, GObject.Value>, cancellable: Gio.Cancellable | null): Place[];

        /**
         * Asynchronously gets the result of a reverse geocoding query using the
         * backend.
         * 
         * Typically, a single result will be returned representing the place at a
         * given latitude and longitude (the `lat` and `lon` keys to `params`); but in
         * some cases the results will be ambiguous and *multiple* results will be
         * returned. They will be returned in order of relevance, with the most
         * relevant result first in the list.
         * 
         * The `params` hash table is in the format used by Telepathy, and documented
         * in the [Telepathy specification](http://telepathy.freedesktop.org/spec/Connection_Interface_Location.html#Mapping:Location).
         * 
         * See also: [XEP-0080 specification](http://xmpp.org/extensions/xep-0080.html).
         * 
         * Use `geocode_backend_reverse_resolve()` to do the same thing synchronously.
         * 
         * When the operation is finished, `callback` will be called. You can then call
         * `geocode_backend_reverse_resolve_finish()` to get the result of the operation.
         * @param params a {@link GLib.HashTable} with string keys, and {@link GObject.Value} values.
         * @param cancellable optional {@link Gio.Cancellable} object, `null` to ignore.
         * @param callback a {@link Gio.AsyncReadyCallback} to call when the request is satisfied.
         * @virtual
         */
        vfunc_reverse_resolve_async(params: GLib.HashTable<string, GObject.Value>, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;

        /**
         * Finishes a reverse geocoding operation. See `geocode_backend_reverse_resolve_async()`.
         * @param result a {@link Gio.AsyncResult}.
         * @virtual
         */
        vfunc_reverse_resolve_finish(result: Gio.AsyncResult): Place[];
    }


    namespace Nominatim {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            "notify::base-url": (pspec: GObject.ParamSpec) => void;
            "notify::maintainer-email-address": (pspec: GObject.ParamSpec) => void;
            "notify::user-agent": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps, Backend.ConstructorProps {
            base_url: string;
            baseUrl: string;
            maintainer_email_address: string;
            maintainerEmailAddress: string;
            user_agent: string;
            userAgent: string;
        }
    }

    /**
     * All the fields in the {@link GeocodeGlib.Nominatim} structure are private and should
     * never be accessed directly.
     * @gir-type Class
     * @since 3.23.1
     */
    class Nominatim extends GObject.Object implements Backend {
        static $gtype: GObject.GType<Nominatim>;

        // Properties
        /**
         * The base URL of the Nominatim service, for example
         * `https://nominatim.example.org`.
         * @since 3.23.1
         * @construct-only
         */
        get base_url(): string;

        /**
         * The base URL of the Nominatim service, for example
         * `https://nominatim.example.org`.
         * @since 3.23.1
         * @construct-only
         */
        get baseUrl(): string;

        /**
         * E-mail address of the maintainer of the software making the
         * geocoding requests to the  Nominatim server. This is used to contact
         * them in the event of a problem with their usage. See
         * [the Nominatim API](http://wiki.openstreetmap.org/wiki/Nominatim).
         * @since 3.23.1
         * @construct-only
         */
        get maintainer_email_address(): string;

        /**
         * E-mail address of the maintainer of the software making the
         * geocoding requests to the  Nominatim server. This is used to contact
         * them in the event of a problem with their usage. See
         * [the Nominatim API](http://wiki.openstreetmap.org/wiki/Nominatim).
         * @since 3.23.1
         * @construct-only
         */
        get maintainerEmailAddress(): string;

        /**
         * User-Agent string to send with HTTP(S) requests, or `null` to use the
         * default user agent, which is derived from the geocode-glib version
         * and {@link Gio.Application.id}, for example: `geocode-glib/3.20 (MyAppId)`.
         * 
         * As per the
         * [Nominatim usage policy](http://wiki.openstreetmap.org/wiki/Nominatim_usage_policy),
         * it should be set to a string which identifies the application which
         * is using geocode-glib, and must be a valid
         * [user agent](https://tools.ietf.org/html/rfc7231#section-5.5.3)
         * string.
         * @since 3.23.1
         */
        get user_agent(): string;
        set user_agent(val: string);

        /**
         * User-Agent string to send with HTTP(S) requests, or `null` to use the
         * default user agent, which is derived from the geocode-glib version
         * and {@link Gio.Application.id}, for example: `geocode-glib/3.20 (MyAppId)`.
         * 
         * As per the
         * [Nominatim usage policy](http://wiki.openstreetmap.org/wiki/Nominatim_usage_policy),
         * it should be set to a string which identifies the application which
         * is using geocode-glib, and must be a valid
         * [user agent](https://tools.ietf.org/html/rfc7231#section-5.5.3)
         * string.
         * @since 3.23.1
         */
        get userAgent(): string;
        set userAgent(val: string);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Nominatim.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<Nominatim.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](base_url: string, maintainer_email_address: string): Nominatim;

        // Signals
        /** @signal */
        connect<K extends keyof Nominatim.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Nominatim.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof Nominatim.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Nominatim.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof Nominatim.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<Nominatim.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Static methods
        /**
         * Gets a reference to the default Nominatim server on nominatim.gnome.org.
         * 
         * This function is thread-safe.
         */
        static get_gnome(): Nominatim;

        // Virtual methods
        /**
         * @param uri 
         * @param cancellable 
         * @virtual
         */
        vfunc_query(uri: string, cancellable: Gio.Cancellable | null): string;

        /**
         * @param uri 
         * @param cancellable 
         * @param callback 
         * @virtual
         */
        vfunc_query_async(uri: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;

        /**
         * @param res 
         * @virtual
         */
        vfunc_query_finish(res: Gio.AsyncResult): string;

        /**
         * Gets the result of a forward geocoding query using the `backend`.
         * 
         * If no results are found, a {@link GeocodeGlib.Error.NO_MATCHES} error is returned.
         * 
         * This is a synchronous function, which means it may block on network requests.
         * In most situations, the asynchronous version
         * (geocode_backend_forward_search_async()) is more appropriate. See its
         * documentation for more information on usage.
         * @param params a {@link GLib.HashTable} with string keys, and {@link GObject.Value} values.
         * @param cancellable optional {@link Gio.Cancellable}, `null` to ignore.
         * @returns A list of places or `null` in case of errors. Free the returned instances with `g_object_unref()` and the list with `g_list_free()` when done.
         */
        forward_search(params: { [key: string]: any } | GLib.HashTable<string, GObject.Value>, cancellable: Gio.Cancellable | null): Place[];

        /**
         * Asynchronously performs a forward geocoding query using the `backend`. Use
         * `geocode_backend_forward_search()` to do the same thing synchronously.
         * 
         * The `params` hash table is in the format used by Telepathy, and documented
         * in the [Telepathy specification](http://telepathy.freedesktop.org/spec/Connection_Interface_Location.html#Mapping:Location).
         * 
         * See also: [XEP-0080 specification](http://xmpp.org/extensions/xep-0080.html).
         * 
         * When the operation is finished, `callback` will be called. You can then call
         * `geocode_backend_forward_search_finish()` to get the result of the operation.
         * @param params a {@link GLib.HashTable} with string keys, and {@link GObject.Value} values.
         * @param cancellable optional {@link Gio.Cancellable}, `null` to ignore.
         */
        forward_search_async(params: { [key: string]: any } | GLib.HashTable<string, GObject.Value>, cancellable: Gio.Cancellable | null): globalThis.Promise<Place[]>;

        /**
         * Asynchronously performs a forward geocoding query using the `backend`. Use
         * `geocode_backend_forward_search()` to do the same thing synchronously.
         * 
         * The `params` hash table is in the format used by Telepathy, and documented
         * in the [Telepathy specification](http://telepathy.freedesktop.org/spec/Connection_Interface_Location.html#Mapping:Location).
         * 
         * See also: [XEP-0080 specification](http://xmpp.org/extensions/xep-0080.html).
         * 
         * When the operation is finished, `callback` will be called. You can then call
         * `geocode_backend_forward_search_finish()` to get the result of the operation.
         * @param params a {@link GLib.HashTable} with string keys, and {@link GObject.Value} values.
         * @param cancellable optional {@link Gio.Cancellable}, `null` to ignore.
         * @param callback a {@link Gio.AsyncReadyCallback} to call when the request is satisfied
         */
        forward_search_async(params: { [key: string]: any } | GLib.HashTable<string, GObject.Value>, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;

        /**
         * Asynchronously performs a forward geocoding query using the `backend`. Use
         * `geocode_backend_forward_search()` to do the same thing synchronously.
         * 
         * The `params` hash table is in the format used by Telepathy, and documented
         * in the [Telepathy specification](http://telepathy.freedesktop.org/spec/Connection_Interface_Location.html#Mapping:Location).
         * 
         * See also: [XEP-0080 specification](http://xmpp.org/extensions/xep-0080.html).
         * 
         * When the operation is finished, `callback` will be called. You can then call
         * `geocode_backend_forward_search_finish()` to get the result of the operation.
         * @param params a {@link GLib.HashTable} with string keys, and {@link GObject.Value} values.
         * @param cancellable optional {@link Gio.Cancellable}, `null` to ignore.
         * @param callback a {@link Gio.AsyncReadyCallback} to call when the request is satisfied
         */
        forward_search_async(params: { [key: string]: any } | GLib.HashTable<string, GObject.Value>, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<Place[]> | void;

        /**
         * Finishes a forward geocoding operation. See
         * `geocode_backend_forward_search_async()`.
         * @param result a {@link Gio.AsyncResult}.
         * @returns A list of places or `null` in case of errors. Free the returned instances with `g_object_unref()` and the list with `g_list_free()` when done.
         */
        forward_search_finish(result: Gio.AsyncResult): Place[];

        /**
         * Gets the result of a reverse geocoding query using the `backend`.
         * 
         * If no result could be found, a {@link GeocodeGlib.Error.NOT_SUPPORTED} error will be
         * returned. This typically happens if the coordinates to geocode are in the
         * middle of the ocean.
         * 
         * This is a synchronous function, which means it may block on network requests.
         * In most situations, the asynchronous version,
         * `geocode_backend_forward_search_async()`, is more appropriate. See its
         * documentation for more information on usage.
         * @param params a {@link GLib.HashTable} with string keys, and {@link GObject.Value} values.
         * @param cancellable optional {@link Gio.Cancellable} object, `null` to ignore.
         * @returns A list of    {@link GeocodeGlib.Place} instances, or `null` in case of errors. The list is ordered    by relevance, with most relevant results first. Free the returned    instances with `g_object_unref()` and the list with `g_list_free()` when done.
         */
        reverse_resolve(params: { [key: string]: any } | GLib.HashTable<string, GObject.Value>, cancellable: Gio.Cancellable | null): Place[];

        /**
         * Asynchronously gets the result of a reverse geocoding query using the
         * backend.
         * 
         * Typically, a single result will be returned representing the place at a
         * given latitude and longitude (the `lat` and `lon` keys to `params`); but in
         * some cases the results will be ambiguous and *multiple* results will be
         * returned. They will be returned in order of relevance, with the most
         * relevant result first in the list.
         * 
         * The `params` hash table is in the format used by Telepathy, and documented
         * in the [Telepathy specification](http://telepathy.freedesktop.org/spec/Connection_Interface_Location.html#Mapping:Location).
         * 
         * See also: [XEP-0080 specification](http://xmpp.org/extensions/xep-0080.html).
         * 
         * Use `geocode_backend_reverse_resolve()` to do the same thing synchronously.
         * 
         * When the operation is finished, `callback` will be called. You can then call
         * `geocode_backend_reverse_resolve_finish()` to get the result of the operation.
         * @param params a {@link GLib.HashTable} with string keys, and {@link GObject.Value} values.
         * @param cancellable optional {@link Gio.Cancellable} object, `null` to ignore.
         */
        reverse_resolve_async(params: { [key: string]: any } | GLib.HashTable<string, GObject.Value>, cancellable: Gio.Cancellable | null): globalThis.Promise<Place[]>;

        /**
         * Asynchronously gets the result of a reverse geocoding query using the
         * backend.
         * 
         * Typically, a single result will be returned representing the place at a
         * given latitude and longitude (the `lat` and `lon` keys to `params`); but in
         * some cases the results will be ambiguous and *multiple* results will be
         * returned. They will be returned in order of relevance, with the most
         * relevant result first in the list.
         * 
         * The `params` hash table is in the format used by Telepathy, and documented
         * in the [Telepathy specification](http://telepathy.freedesktop.org/spec/Connection_Interface_Location.html#Mapping:Location).
         * 
         * See also: [XEP-0080 specification](http://xmpp.org/extensions/xep-0080.html).
         * 
         * Use `geocode_backend_reverse_resolve()` to do the same thing synchronously.
         * 
         * When the operation is finished, `callback` will be called. You can then call
         * `geocode_backend_reverse_resolve_finish()` to get the result of the operation.
         * @param params a {@link GLib.HashTable} with string keys, and {@link GObject.Value} values.
         * @param cancellable optional {@link Gio.Cancellable} object, `null` to ignore.
         * @param callback a {@link Gio.AsyncReadyCallback} to call when the request is satisfied.
         */
        reverse_resolve_async(params: { [key: string]: any } | GLib.HashTable<string, GObject.Value>, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;

        /**
         * Asynchronously gets the result of a reverse geocoding query using the
         * backend.
         * 
         * Typically, a single result will be returned representing the place at a
         * given latitude and longitude (the `lat` and `lon` keys to `params`); but in
         * some cases the results will be ambiguous and *multiple* results will be
         * returned. They will be returned in order of relevance, with the most
         * relevant result first in the list.
         * 
         * The `params` hash table is in the format used by Telepathy, and documented
         * in the [Telepathy specification](http://telepathy.freedesktop.org/spec/Connection_Interface_Location.html#Mapping:Location).
         * 
         * See also: [XEP-0080 specification](http://xmpp.org/extensions/xep-0080.html).
         * 
         * Use `geocode_backend_reverse_resolve()` to do the same thing synchronously.
         * 
         * When the operation is finished, `callback` will be called. You can then call
         * `geocode_backend_reverse_resolve_finish()` to get the result of the operation.
         * @param params a {@link GLib.HashTable} with string keys, and {@link GObject.Value} values.
         * @param cancellable optional {@link Gio.Cancellable} object, `null` to ignore.
         * @param callback a {@link Gio.AsyncReadyCallback} to call when the request is satisfied.
         */
        reverse_resolve_async(params: { [key: string]: any } | GLib.HashTable<string, GObject.Value>, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<Place[]> | void;

        /**
         * Finishes a reverse geocoding operation. See `geocode_backend_reverse_resolve_async()`.
         * @param result a {@link Gio.AsyncResult}.
         * @returns A list of    {@link GeocodeGlib.Place} instances, or `null` in case of errors. The list is ordered    by relevance, with most relevant results first. Free the returned    instances with `g_object_unref()` and the list with `g_list_free()` when done.
         */
        reverse_resolve_finish(result: Gio.AsyncResult): Place[];

        /**
         * Gets the result of a forward geocoding query using the `backend`.
         * 
         * If no results are found, a {@link GeocodeGlib.Error.NO_MATCHES} error is returned.
         * 
         * This is a synchronous function, which means it may block on network requests.
         * In most situations, the asynchronous version
         * (geocode_backend_forward_search_async()) is more appropriate. See its
         * documentation for more information on usage.
         * @param params a {@link GLib.HashTable} with string keys, and {@link GObject.Value} values.
         * @param cancellable optional {@link Gio.Cancellable}, `null` to ignore.
         * @virtual
         */
        vfunc_forward_search(params: GLib.HashTable<string, GObject.Value>, cancellable: Gio.Cancellable | null): Place[];

        /**
         * Asynchronously performs a forward geocoding query using the `backend`. Use
         * `geocode_backend_forward_search()` to do the same thing synchronously.
         * 
         * The `params` hash table is in the format used by Telepathy, and documented
         * in the [Telepathy specification](http://telepathy.freedesktop.org/spec/Connection_Interface_Location.html#Mapping:Location).
         * 
         * See also: [XEP-0080 specification](http://xmpp.org/extensions/xep-0080.html).
         * 
         * When the operation is finished, `callback` will be called. You can then call
         * `geocode_backend_forward_search_finish()` to get the result of the operation.
         * @param params a {@link GLib.HashTable} with string keys, and {@link GObject.Value} values.
         * @param cancellable optional {@link Gio.Cancellable}, `null` to ignore.
         * @param callback a {@link Gio.AsyncReadyCallback} to call when the request is satisfied
         * @virtual
         */
        vfunc_forward_search_async(params: GLib.HashTable<string, GObject.Value>, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;

        /**
         * Finishes a forward geocoding operation. See
         * `geocode_backend_forward_search_async()`.
         * @param result a {@link Gio.AsyncResult}.
         * @virtual
         */
        vfunc_forward_search_finish(result: Gio.AsyncResult): Place[];

        /**
         * Gets the result of a reverse geocoding query using the `backend`.
         * 
         * If no result could be found, a {@link GeocodeGlib.Error.NOT_SUPPORTED} error will be
         * returned. This typically happens if the coordinates to geocode are in the
         * middle of the ocean.
         * 
         * This is a synchronous function, which means it may block on network requests.
         * In most situations, the asynchronous version,
         * `geocode_backend_forward_search_async()`, is more appropriate. See its
         * documentation for more information on usage.
         * @param params a {@link GLib.HashTable} with string keys, and {@link GObject.Value} values.
         * @param cancellable optional {@link Gio.Cancellable} object, `null` to ignore.
         * @virtual
         */
        vfunc_reverse_resolve(params: GLib.HashTable<string, GObject.Value>, cancellable: Gio.Cancellable | null): Place[];

        /**
         * Asynchronously gets the result of a reverse geocoding query using the
         * backend.
         * 
         * Typically, a single result will be returned representing the place at a
         * given latitude and longitude (the `lat` and `lon` keys to `params`); but in
         * some cases the results will be ambiguous and *multiple* results will be
         * returned. They will be returned in order of relevance, with the most
         * relevant result first in the list.
         * 
         * The `params` hash table is in the format used by Telepathy, and documented
         * in the [Telepathy specification](http://telepathy.freedesktop.org/spec/Connection_Interface_Location.html#Mapping:Location).
         * 
         * See also: [XEP-0080 specification](http://xmpp.org/extensions/xep-0080.html).
         * 
         * Use `geocode_backend_reverse_resolve()` to do the same thing synchronously.
         * 
         * When the operation is finished, `callback` will be called. You can then call
         * `geocode_backend_reverse_resolve_finish()` to get the result of the operation.
         * @param params a {@link GLib.HashTable} with string keys, and {@link GObject.Value} values.
         * @param cancellable optional {@link Gio.Cancellable} object, `null` to ignore.
         * @param callback a {@link Gio.AsyncReadyCallback} to call when the request is satisfied.
         * @virtual
         */
        vfunc_reverse_resolve_async(params: GLib.HashTable<string, GObject.Value>, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;

        /**
         * Finishes a reverse geocoding operation. See `geocode_backend_reverse_resolve_async()`.
         * @param result a {@link Gio.AsyncResult}.
         * @virtual
         */
        vfunc_reverse_resolve_finish(result: Gio.AsyncResult): Place[];
    }


    namespace Place {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            "notify::administrative-area": (pspec: GObject.ParamSpec) => void;
            "notify::area": (pspec: GObject.ParamSpec) => void;
            "notify::bounding-box": (pspec: GObject.ParamSpec) => void;
            "notify::building": (pspec: GObject.ParamSpec) => void;
            "notify::continent": (pspec: GObject.ParamSpec) => void;
            "notify::country": (pspec: GObject.ParamSpec) => void;
            "notify::country-code": (pspec: GObject.ParamSpec) => void;
            "notify::county": (pspec: GObject.ParamSpec) => void;
            "notify::icon": (pspec: GObject.ParamSpec) => void;
            "notify::location": (pspec: GObject.ParamSpec) => void;
            "notify::name": (pspec: GObject.ParamSpec) => void;
            "notify::osm-id": (pspec: GObject.ParamSpec) => void;
            "notify::osm-type": (pspec: GObject.ParamSpec) => void;
            "notify::place-type": (pspec: GObject.ParamSpec) => void;
            "notify::postal-code": (pspec: GObject.ParamSpec) => void;
            "notify::state": (pspec: GObject.ParamSpec) => void;
            "notify::street": (pspec: GObject.ParamSpec) => void;
            "notify::street-address": (pspec: GObject.ParamSpec) => void;
            "notify::town": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps {
            administrative_area: string;
            administrativeArea: string;
            area: string;
            bounding_box: BoundingBox;
            boundingBox: BoundingBox;
            building: string;
            continent: string;
            country: string;
            country_code: string;
            countryCode: string;
            county: string;
            icon: Gio.Icon;
            location: Location;
            name: string;
            osm_id: string;
            osmId: string;
            osm_type: PlaceOsmType;
            osmType: PlaceOsmType;
            place_type: PlaceType;
            placeType: PlaceType;
            postal_code: string;
            postalCode: string;
            state: string;
            street: string;
            street_address: string;
            streetAddress: string;
            town: string;
        }
    }

    /**
     * All the fields in the {@link GeocodeGlib.Place} structure are private and should never be accessed directly.
     * @gir-type Class
     */
    class Place extends GObject.Object {
        static $gtype: GObject.GType<Place>;

        // Properties
        /**
         * The local administrative area.
         */
        get administrative_area(): string;
        set administrative_area(val: string);

        /**
         * The local administrative area.
         */
        get administrativeArea(): string;
        set administrativeArea(val: string);

        /**
         * A named area such as a campus or neighborhood.
         */
        get area(): string;
        set area(val: string);

        /**
         * The bounding box for the place.
         */
        get bounding_box(): BoundingBox;
        set bounding_box(val: BoundingBox);

        /**
         * The bounding box for the place.
         */
        get boundingBox(): BoundingBox;
        set boundingBox(val: BoundingBox);

        /**
         * A specific building on a street or in an area.
         */
        get building(): string;
        set building(val: string);

        /**
         * The continent.
         */
        get continent(): string;
        set continent(val: string);

        /**
         * The country.
         */
        get country(): string;
        set country(val: string);

        /**
         * The country code.
         */
        get country_code(): string;
        set country_code(val: string);

        /**
         * The country code.
         */
        get countryCode(): string;
        set countryCode(val: string);

        /**
         * The county.
         */
        get county(): string;
        set county(val: string);

        /**
         * {@link Gio.Icon} representing the `GeocodePlace`.
         * @read-only
         */
        get icon(): Gio.Icon;

        /**
         * The location info for the place.
         */
        get location(): Location;
        set location(val: Location);

        /**
         * The name of the place.
         */
        get name(): string;
        set name(val: string);

        /**
         * The OpenStreetMap id of the place.
         */
        get osm_id(): string;
        set osm_id(val: string);

        /**
         * The OpenStreetMap id of the place.
         */
        get osmId(): string;
        set osmId(val: string);

        /**
         * The OpenStreetMap type of the place.
         */
        get osm_type(): PlaceOsmType;
        set osm_type(val: PlaceOsmType);

        /**
         * The OpenStreetMap type of the place.
         */
        get osmType(): PlaceOsmType;
        set osmType(val: PlaceOsmType);

        /**
         * The type of the place.
         * @construct-only
         */
        get place_type(): PlaceType;

        /**
         * The type of the place.
         * @construct-only
         */
        get placeType(): PlaceType;

        /**
         * The postal code.
         */
        get postal_code(): string;
        set postal_code(val: string);

        /**
         * The postal code.
         */
        get postalCode(): string;
        set postalCode(val: string);

        /**
         * The state.
         */
        get state(): string;
        set state(val: string);

        /**
         * The street name.
         */
        get street(): string;
        set street(val: string);

        /**
         * The street address.
         */
        get street_address(): string;
        set street_address(val: string);

        /**
         * The street address.
         */
        get streetAddress(): string;
        set streetAddress(val: string);

        /**
         * The town.
         */
        get town(): string;
        set town(val: string);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Place.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<Place.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](name: string, place_type: PlaceType): Place;

        static new_with_location(name: string, place_type: PlaceType, location: Location): Place;

        // Signals
        /** @signal */
        connect<K extends keyof Place.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Place.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof Place.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Place.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof Place.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<Place.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Methods
        /**
         * Compare two {@link GeocodeGlib.Place} instances for equality. This compares all fields
         * and only returns `true` if the instances are exactly equal. For example, if
         * both places have the same {@link GeocodeGlib.Place.location}, but place `b` has its
         * {@link GeocodeGlib.Place.continent} property set and place `a` does not, `false` will be
         * returned.
         * 
         * Both instances must be non-`null`.
         * @param b another place
         * @returns `true` if the instances are equal, `false` otherwise
         */
        equal(b: Place): boolean;

        /**
         * Gets the local administrative area of the `place`.
         * @returns The local administrative area of the `place`.
         */
        get_administrative_area(): string;

        /**
         * Gets the area of the `place`.
         * @returns The area of the `place`.
         */
        get_area(): string;

        /**
         * Gets the bounding box for the place `place`.
         * @returns A {@link GeocodeGlib.BoundingBox}, or NULL if boundaries are unknown.
         */
        get_bounding_box(): BoundingBox;

        /**
         * Gets the building of the `place`.
         * @returns The building of the `place`.
         */
        get_building(): string;

        /**
         * Gets the continent of the `place`.
         * @returns The continent of the `place`.
         */
        get_continent(): string;

        /**
         * Gets the country of the `place`.
         * @returns The country of the `place`.
         */
        get_country(): string;

        /**
         * Gets the ISO-3166 country code of the `place`.
         * @returns The ISO-3166 country code of the `place`, in upper case.
         */
        get_country_code(): string;

        /**
         * Gets the county of the `place`.
         * @returns The country of the `place`.
         */
        get_county(): string;

        /**
         * Gets the {@link Gio.Icon} representing the `place`.
         * @returns The {@link Gio.Icon} representing the `place`.
         */
        get_icon(): Gio.Icon;

        /**
         * Gets the associated location object.
         * @returns The associated location object.
         */
        get_location(): Location;

        /**
         * Gets the name of the `place`.
         * @returns The name of the `place`.
         */
        get_name(): string;

        /**
         * Gets the OpenStreetMap ID of the `place`.
         * @returns The osm ID of the `place`.
         */
        get_osm_id(): string;

        /**
         * Gets the OpenStreetMap type of the `place`.
         * @returns The osm type of the `place`.
         */
        get_osm_type(): PlaceOsmType;

        /**
         * Gets the type of the `place`.
         * @returns The type of the `place`.
         */
        get_place_type(): PlaceType;

        /**
         * Gets the postal code of the `place`.
         * @returns The postal code of the `place`.
         */
        get_postal_code(): string;

        /**
         * Gets the state of the `place`.
         * @returns The state of the `place`.
         */
        get_state(): string;

        /**
         * Gets the street of the `place`.
         * @returns The street of the `place`.
         */
        get_street(): string;

        /**
         * Gets the street address of the `place`.
         * @returns The street address of the `place`.
         */
        get_street_address(): string;

        /**
         * Gets the town of the `place`.
         * @returns The town of the `place`.
         */
        get_town(): string;

        /**
         * Sets the local administrative area of `place` to `admin_area`.
         * @param admin_area an administrative area for the place
         */
        set_administrative_area(admin_area: string): void;

        /**
         * Sets the area of `place` to `area`.
         * @param area a area
         */
        set_area(area: string): void;

        /**
         * Sets the {@link GeocodeGlib.BoundingBox} for the place `place`.
         * @param bbox A {@link GeocodeGlib.BoundingBox} for the place
         */
        set_bounding_box(bbox: BoundingBox): void;

        /**
         * Sets the building of `place` to `building`.
         * @param building a building
         */
        set_building(building: string): void;

        /**
         * Sets the continent of `place` to `continent`.
         * @param continent a continent for the place
         */
        set_continent(continent: string): void;

        /**
         * Sets the country of `place` to `country`.
         * @param country a country for the place
         */
        set_country(country: string): void;

        /**
         * Sets the ISO country code of `place` to `country_code`.
         * @param country_code an ISO country code for the place
         */
        set_country_code(country_code: string): void;

        /**
         * Sets the county of `place` to `county`.
         * @param county a county for the place
         */
        set_county(county: string): void;

        /**
         * Sets the location of `place` to `location`.
         * @param location A location
         */
        set_location(location: Location): void;

        /**
         * Sets the name of the `place` to `name`.
         * @param name the name of place
         */
        set_name(name: string): void;

        /**
         * Sets the postal code of `place` to `postal_code`.
         * @param postal_code a postal code for the place
         */
        set_postal_code(postal_code: string): void;

        /**
         * Sets the state of `place` to `state`.
         * @param state a state for the place
         */
        set_state(state: string): void;

        /**
         * Sets the street of `place` to `street`.
         * @param street a street
         */
        set_street(street: string): void;

        /**
         * Sets the street address of `place` to `street_address`.
         * @param street_address a street address for the place
         */
        set_street_address(street_address: string): void;

        /**
         * Sets the town of `place` to `town`.
         * @param town a town for the place
         */
        set_town(town: string): void;
    }


    namespace Reverse {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {}

        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    /**
     * All the fields in the {@link GeocodeGlib.Reverse} structure are private and should never be accessed directly.
     * @gir-type Class
     */
    class Reverse extends GObject.Object {
        static $gtype: GObject.GType<Reverse>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Reverse.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<Reverse.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static new_for_location(location: Location): Reverse;

        // Signals
        /** @signal */
        connect<K extends keyof Reverse.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Reverse.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof Reverse.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Reverse.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof Reverse.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<Reverse.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Methods
        /**
         * Gets the result of a reverse geocoding
         * query using the current backend (see `geocode_reverse_set_backend()`). By
         * default the GNOME Nominatim server is used. See {@link GeocodeGlib.Backend} for more
         * information.
         * 
         * If no result could be found, a {@link GeocodeGlib.Error.NOT_SUPPORTED} error will be
         * returned. This typically happens if the coordinates to geocode are in the
         * middle of the ocean.
         * @returns A {@link GeocodeGlib.Place} instance, or `null` in case of errors. Free the returned instance with `g_object_unref`() when done.
         */
        resolve(): Place;

        /**
         * Asynchronously gets the result of a reverse geocoding
         * query using a web service. Use `geocode_reverse_resolve()` to do the same
         * thing synchronously.
         * 
         * When the operation is finished, `callback` will be called. You can then call
         * `geocode_reverse_resolve_finish()` to get the result of the operation.
         * @param cancellable optional {@link Gio.Cancellable} object, `null` to ignore.
         */
        resolve_async(cancellable: Gio.Cancellable | null): globalThis.Promise<Place>;

        /**
         * Asynchronously gets the result of a reverse geocoding
         * query using a web service. Use `geocode_reverse_resolve()` to do the same
         * thing synchronously.
         * 
         * When the operation is finished, `callback` will be called. You can then call
         * `geocode_reverse_resolve_finish()` to get the result of the operation.
         * @param cancellable optional {@link Gio.Cancellable} object, `null` to ignore.
         * @param callback a {@link Gio.AsyncReadyCallback} to call when the request is satisfied
         */
        resolve_async(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;

        /**
         * Asynchronously gets the result of a reverse geocoding
         * query using a web service. Use `geocode_reverse_resolve()` to do the same
         * thing synchronously.
         * 
         * When the operation is finished, `callback` will be called. You can then call
         * `geocode_reverse_resolve_finish()` to get the result of the operation.
         * @param cancellable optional {@link Gio.Cancellable} object, `null` to ignore.
         * @param callback a {@link Gio.AsyncReadyCallback} to call when the request is satisfied
         */
        resolve_async(cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<Place> | void;

        /**
         * Finishes a reverse geocoding operation. See `geocode_reverse_resolve_async()`.
         * @param res a {@link Gio.AsyncResult}.
         * @returns A {@link GeocodeGlib.Place} instance, or `null` in case of errors. Free the returned instance with `g_object_unref`() when done.
         */
        resolve_finish(res: Gio.AsyncResult): Place;

        /**
         * Specifies the backend to use in the reverse geocoding operation.
         * 
         * If none is given, the default GNOME Nominatim server is used.
         * @param backend a {@link GeocodeGlib.Backend}, or `null` to use the default one.
         */
        set_backend(backend: Backend | null): void;
    }


    /**
     * @gir-type Alias
     */
    type BackendInterface = typeof Backend;

    /**
     * @gir-type Alias
     */
    type BoundingBoxClass = typeof BoundingBox;

    /**
     * @gir-type Struct
     */
    abstract class BoundingBoxPrivate {
        static $gtype: GObject.GType<BoundingBoxPrivate>;
    }


    /**
     * @gir-type Alias
     */
    type ForwardClass = typeof Forward;

    /**
     * @gir-type Struct
     */
    abstract class ForwardPrivate {
        static $gtype: GObject.GType<ForwardPrivate>;
    }


    /**
     * @gir-type Alias
     */
    type LocationClass = typeof Location;

    /**
     * @gir-type Struct
     */
    abstract class LocationPrivate {
        static $gtype: GObject.GType<LocationPrivate>;
    }


    /**
     * @gir-type Alias
     */
    type MockBackendClass = typeof MockBackend;

    /**
     * The details of a forward or reverse query which was performed on a
     * {@link GeocodeGlib.MockBackend} by application code. This includes the input (`params`,
     * `is_forward`), and the output which was returned (`results` or `error`).
     * 
     * Empty result sets are represented by the {@link GeocodeGlib.Error.NO_MATCHES} error
     * (for forward queries) or the {@link GeocodeGlib.Error.NOT_SUPPORTED} error (for reverse
     * queries), rather than an empty `results` list.
     * @gir-type Struct
     * @since 3.23.1
     */
    class MockBackendQuery {
        static $gtype: GObject.GType<MockBackendQuery>;

        // Fields
        is_forward: boolean;

        results: Place[];

        error: GLib.Error;
    }


    /**
     * @gir-type Alias
     */
    type NominatimClass = typeof Nominatim;

    /**
     * @gir-type Alias
     */
    type PlaceClass = typeof Place;

    /**
     * @gir-type Struct
     */
    abstract class PlacePrivate {
        static $gtype: GObject.GType<PlacePrivate>;
    }


    /**
     * @gir-type Alias
     */
    type ReverseClass = typeof Reverse;

    /**
     * @gir-type Struct
     */
    abstract class ReversePrivate {
        static $gtype: GObject.GType<ReversePrivate>;
    }


    namespace Backend {
        /**
         * Interface for implementing Backend.
         * Contains only the virtual methods that need to be implemented.
         */
        interface Interface {

            // Virtual methods
            /**
             * Gets the result of a forward geocoding query using the `backend`.
             * 
             * If no results are found, a {@link GeocodeGlib.Error.NO_MATCHES} error is returned.
             * 
             * This is a synchronous function, which means it may block on network requests.
             * In most situations, the asynchronous version
             * (geocode_backend_forward_search_async()) is more appropriate. See its
             * documentation for more information on usage.
             * @param params a {@link GLib.HashTable} with string keys, and {@link GObject.Value} values.
             * @param cancellable optional {@link Gio.Cancellable}, `null` to ignore.
             * @virtual
             */
            vfunc_forward_search(params: GLib.HashTable<string, GObject.Value>, cancellable: Gio.Cancellable | null): Place[];

            /**
             * Asynchronously performs a forward geocoding query using the `backend`. Use
             * `geocode_backend_forward_search()` to do the same thing synchronously.
             * 
             * The `params` hash table is in the format used by Telepathy, and documented
             * in the [Telepathy specification](http://telepathy.freedesktop.org/spec/Connection_Interface_Location.html#Mapping:Location).
             * 
             * See also: [XEP-0080 specification](http://xmpp.org/extensions/xep-0080.html).
             * 
             * When the operation is finished, `callback` will be called. You can then call
             * `geocode_backend_forward_search_finish()` to get the result of the operation.
             * @param params a {@link GLib.HashTable} with string keys, and {@link GObject.Value} values.
             * @param cancellable optional {@link Gio.Cancellable}, `null` to ignore.
             * @param callback a {@link Gio.AsyncReadyCallback} to call when the request is satisfied
             * @virtual
             */
            vfunc_forward_search_async(params: GLib.HashTable<string, GObject.Value>, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;

            /**
             * Finishes a forward geocoding operation. See
             * `geocode_backend_forward_search_async()`.
             * @param result a {@link Gio.AsyncResult}.
             * @virtual
             */
            vfunc_forward_search_finish(result: Gio.AsyncResult): Place[];

            /**
             * Gets the result of a reverse geocoding query using the `backend`.
             * 
             * If no result could be found, a {@link GeocodeGlib.Error.NOT_SUPPORTED} error will be
             * returned. This typically happens if the coordinates to geocode are in the
             * middle of the ocean.
             * 
             * This is a synchronous function, which means it may block on network requests.
             * In most situations, the asynchronous version,
             * `geocode_backend_forward_search_async()`, is more appropriate. See its
             * documentation for more information on usage.
             * @param params a {@link GLib.HashTable} with string keys, and {@link GObject.Value} values.
             * @param cancellable optional {@link Gio.Cancellable} object, `null` to ignore.
             * @virtual
             */
            vfunc_reverse_resolve(params: GLib.HashTable<string, GObject.Value>, cancellable: Gio.Cancellable | null): Place[];

            /**
             * Asynchronously gets the result of a reverse geocoding query using the
             * backend.
             * 
             * Typically, a single result will be returned representing the place at a
             * given latitude and longitude (the `lat` and `lon` keys to `params`); but in
             * some cases the results will be ambiguous and *multiple* results will be
             * returned. They will be returned in order of relevance, with the most
             * relevant result first in the list.
             * 
             * The `params` hash table is in the format used by Telepathy, and documented
             * in the [Telepathy specification](http://telepathy.freedesktop.org/spec/Connection_Interface_Location.html#Mapping:Location).
             * 
             * See also: [XEP-0080 specification](http://xmpp.org/extensions/xep-0080.html).
             * 
             * Use `geocode_backend_reverse_resolve()` to do the same thing synchronously.
             * 
             * When the operation is finished, `callback` will be called. You can then call
             * `geocode_backend_reverse_resolve_finish()` to get the result of the operation.
             * @param params a {@link GLib.HashTable} with string keys, and {@link GObject.Value} values.
             * @param cancellable optional {@link Gio.Cancellable} object, `null` to ignore.
             * @param callback a {@link Gio.AsyncReadyCallback} to call when the request is satisfied.
             * @virtual
             */
            vfunc_reverse_resolve_async(params: GLib.HashTable<string, GObject.Value>, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;

            /**
             * Finishes a reverse geocoding operation. See `geocode_backend_reverse_resolve_async()`.
             * @param result a {@link Gio.AsyncResult}.
             * @virtual
             */
            vfunc_reverse_resolve_finish(result: Gio.AsyncResult): Place[];
        }


        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    export interface BackendNamespace {
        $gtype: GObject.GType<Backend>;
        prototype: Backend;
    }
    /**
     * All the fields in the {@link GeocodeGlib.Backend} structure are private and should
     * never be accessed directly.
     * @gir-type Interface
     * @since 3.23.1
     */
    interface Backend extends GObject.Object, Backend.Interface {

        // Methods
        /**
         * Gets the result of a forward geocoding query using the `backend`.
         * 
         * If no results are found, a {@link GeocodeGlib.Error.NO_MATCHES} error is returned.
         * 
         * This is a synchronous function, which means it may block on network requests.
         * In most situations, the asynchronous version
         * (geocode_backend_forward_search_async()) is more appropriate. See its
         * documentation for more information on usage.
         * @param params a {@link GLib.HashTable} with string keys, and {@link GObject.Value} values.
         * @param cancellable optional {@link Gio.Cancellable}, `null` to ignore.
         * @returns A list of places or `null` in case of errors. Free the returned instances with `g_object_unref()` and the list with `g_list_free()` when done.
         */
        forward_search(params: { [key: string]: any } | GLib.HashTable<string, GObject.Value>, cancellable: Gio.Cancellable | null): Place[];

        /**
         * Asynchronously performs a forward geocoding query using the `backend`. Use
         * `geocode_backend_forward_search()` to do the same thing synchronously.
         * 
         * The `params` hash table is in the format used by Telepathy, and documented
         * in the [Telepathy specification](http://telepathy.freedesktop.org/spec/Connection_Interface_Location.html#Mapping:Location).
         * 
         * See also: [XEP-0080 specification](http://xmpp.org/extensions/xep-0080.html).
         * 
         * When the operation is finished, `callback` will be called. You can then call
         * `geocode_backend_forward_search_finish()` to get the result of the operation.
         * @param params a {@link GLib.HashTable} with string keys, and {@link GObject.Value} values.
         * @param cancellable optional {@link Gio.Cancellable}, `null` to ignore.
         */
        forward_search_async(params: { [key: string]: any } | GLib.HashTable<string, GObject.Value>, cancellable: Gio.Cancellable | null): globalThis.Promise<Place[]>;

        /**
         * Asynchronously performs a forward geocoding query using the `backend`. Use
         * `geocode_backend_forward_search()` to do the same thing synchronously.
         * 
         * The `params` hash table is in the format used by Telepathy, and documented
         * in the [Telepathy specification](http://telepathy.freedesktop.org/spec/Connection_Interface_Location.html#Mapping:Location).
         * 
         * See also: [XEP-0080 specification](http://xmpp.org/extensions/xep-0080.html).
         * 
         * When the operation is finished, `callback` will be called. You can then call
         * `geocode_backend_forward_search_finish()` to get the result of the operation.
         * @param params a {@link GLib.HashTable} with string keys, and {@link GObject.Value} values.
         * @param cancellable optional {@link Gio.Cancellable}, `null` to ignore.
         * @param callback a {@link Gio.AsyncReadyCallback} to call when the request is satisfied
         */
        forward_search_async(params: { [key: string]: any } | GLib.HashTable<string, GObject.Value>, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;

        /**
         * Asynchronously performs a forward geocoding query using the `backend`. Use
         * `geocode_backend_forward_search()` to do the same thing synchronously.
         * 
         * The `params` hash table is in the format used by Telepathy, and documented
         * in the [Telepathy specification](http://telepathy.freedesktop.org/spec/Connection_Interface_Location.html#Mapping:Location).
         * 
         * See also: [XEP-0080 specification](http://xmpp.org/extensions/xep-0080.html).
         * 
         * When the operation is finished, `callback` will be called. You can then call
         * `geocode_backend_forward_search_finish()` to get the result of the operation.
         * @param params a {@link GLib.HashTable} with string keys, and {@link GObject.Value} values.
         * @param cancellable optional {@link Gio.Cancellable}, `null` to ignore.
         * @param callback a {@link Gio.AsyncReadyCallback} to call when the request is satisfied
         */
        forward_search_async(params: { [key: string]: any } | GLib.HashTable<string, GObject.Value>, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<Place[]> | void;

        /**
         * Finishes a forward geocoding operation. See
         * `geocode_backend_forward_search_async()`.
         * @param result a {@link Gio.AsyncResult}.
         * @returns A list of places or `null` in case of errors. Free the returned instances with `g_object_unref()` and the list with `g_list_free()` when done.
         */
        forward_search_finish(result: Gio.AsyncResult): Place[];

        /**
         * Gets the result of a reverse geocoding query using the `backend`.
         * 
         * If no result could be found, a {@link GeocodeGlib.Error.NOT_SUPPORTED} error will be
         * returned. This typically happens if the coordinates to geocode are in the
         * middle of the ocean.
         * 
         * This is a synchronous function, which means it may block on network requests.
         * In most situations, the asynchronous version,
         * `geocode_backend_forward_search_async()`, is more appropriate. See its
         * documentation for more information on usage.
         * @param params a {@link GLib.HashTable} with string keys, and {@link GObject.Value} values.
         * @param cancellable optional {@link Gio.Cancellable} object, `null` to ignore.
         * @returns A list of    {@link GeocodeGlib.Place} instances, or `null` in case of errors. The list is ordered    by relevance, with most relevant results first. Free the returned    instances with `g_object_unref()` and the list with `g_list_free()` when done.
         */
        reverse_resolve(params: { [key: string]: any } | GLib.HashTable<string, GObject.Value>, cancellable: Gio.Cancellable | null): Place[];

        /**
         * Asynchronously gets the result of a reverse geocoding query using the
         * backend.
         * 
         * Typically, a single result will be returned representing the place at a
         * given latitude and longitude (the `lat` and `lon` keys to `params`); but in
         * some cases the results will be ambiguous and *multiple* results will be
         * returned. They will be returned in order of relevance, with the most
         * relevant result first in the list.
         * 
         * The `params` hash table is in the format used by Telepathy, and documented
         * in the [Telepathy specification](http://telepathy.freedesktop.org/spec/Connection_Interface_Location.html#Mapping:Location).
         * 
         * See also: [XEP-0080 specification](http://xmpp.org/extensions/xep-0080.html).
         * 
         * Use `geocode_backend_reverse_resolve()` to do the same thing synchronously.
         * 
         * When the operation is finished, `callback` will be called. You can then call
         * `geocode_backend_reverse_resolve_finish()` to get the result of the operation.
         * @param params a {@link GLib.HashTable} with string keys, and {@link GObject.Value} values.
         * @param cancellable optional {@link Gio.Cancellable} object, `null` to ignore.
         */
        reverse_resolve_async(params: { [key: string]: any } | GLib.HashTable<string, GObject.Value>, cancellable: Gio.Cancellable | null): globalThis.Promise<Place[]>;

        /**
         * Asynchronously gets the result of a reverse geocoding query using the
         * backend.
         * 
         * Typically, a single result will be returned representing the place at a
         * given latitude and longitude (the `lat` and `lon` keys to `params`); but in
         * some cases the results will be ambiguous and *multiple* results will be
         * returned. They will be returned in order of relevance, with the most
         * relevant result first in the list.
         * 
         * The `params` hash table is in the format used by Telepathy, and documented
         * in the [Telepathy specification](http://telepathy.freedesktop.org/spec/Connection_Interface_Location.html#Mapping:Location).
         * 
         * See also: [XEP-0080 specification](http://xmpp.org/extensions/xep-0080.html).
         * 
         * Use `geocode_backend_reverse_resolve()` to do the same thing synchronously.
         * 
         * When the operation is finished, `callback` will be called. You can then call
         * `geocode_backend_reverse_resolve_finish()` to get the result of the operation.
         * @param params a {@link GLib.HashTable} with string keys, and {@link GObject.Value} values.
         * @param cancellable optional {@link Gio.Cancellable} object, `null` to ignore.
         * @param callback a {@link Gio.AsyncReadyCallback} to call when the request is satisfied.
         */
        reverse_resolve_async(params: { [key: string]: any } | GLib.HashTable<string, GObject.Value>, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;

        /**
         * Asynchronously gets the result of a reverse geocoding query using the
         * backend.
         * 
         * Typically, a single result will be returned representing the place at a
         * given latitude and longitude (the `lat` and `lon` keys to `params`); but in
         * some cases the results will be ambiguous and *multiple* results will be
         * returned. They will be returned in order of relevance, with the most
         * relevant result first in the list.
         * 
         * The `params` hash table is in the format used by Telepathy, and documented
         * in the [Telepathy specification](http://telepathy.freedesktop.org/spec/Connection_Interface_Location.html#Mapping:Location).
         * 
         * See also: [XEP-0080 specification](http://xmpp.org/extensions/xep-0080.html).
         * 
         * Use `geocode_backend_reverse_resolve()` to do the same thing synchronously.
         * 
         * When the operation is finished, `callback` will be called. You can then call
         * `geocode_backend_reverse_resolve_finish()` to get the result of the operation.
         * @param params a {@link GLib.HashTable} with string keys, and {@link GObject.Value} values.
         * @param cancellable optional {@link Gio.Cancellable} object, `null` to ignore.
         * @param callback a {@link Gio.AsyncReadyCallback} to call when the request is satisfied.
         */
        reverse_resolve_async(params: { [key: string]: any } | GLib.HashTable<string, GObject.Value>, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<Place[]> | void;

        /**
         * Finishes a reverse geocoding operation. See `geocode_backend_reverse_resolve_async()`.
         * @param result a {@link Gio.AsyncResult}.
         * @returns A list of    {@link GeocodeGlib.Place} instances, or `null` in case of errors. The list is ordered    by relevance, with most relevant results first. Free the returned    instances with `g_object_unref()` and the list with `g_list_free()` when done.
         */
        reverse_resolve_finish(result: Gio.AsyncResult): Place[];
    }


    export const Backend: BackendNamespace & {
        new (): Backend; // This allows `obj instanceof Backend`
    };

    /**
     * Name of the imported GIR library
     * `see` https://gitlab.gnome.org/GNOME/gjs/-/blob/master/gi/ns.cpp#L188
     */
    const __name__: string;

    /**
     * Version of the imported GIR library
     * `see` https://gitlab.gnome.org/GNOME/gjs/-/blob/master/gi/ns.cpp#L189
     */
    const __version__: string;
}

export default GeocodeGlib;

// END
