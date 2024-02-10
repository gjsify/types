/*
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in `ts-for-gir` or create a bug report on https://github.com/gjsify/ts-for-gir
 */

import './geocodeglib-2.0-ambient.d.ts';
import './geocodeglib-2.0-import.d.ts';
/**
 * GeocodeGlib-2.0
 */

import type Soup from '@girs/soup-3.0';
import type Gio from '@girs/gio-2.0';
import type GObject from '@girs/gobject-2.0';
import type GLib from '@girs/glib-2.0';
import type GModule from '@girs/gmodule-2.0';
import type Json from '@girs/json-1.0';

export namespace GeocodeGlib {
    /**
     * Error codes returned by geocode-glib functions.
     */
    class Error extends GLib.Error {
        // Own fields of GeocodeGlib-2.0.Error

        /**
         * An error occured parsing the response from the web service.
         */
        PARSE: number;
        /**
         * The request made was not supported.
         */
        NOT_SUPPORTED: number;
        /**
         * The requests made didn't have any matches.
         */
        NO_MATCHES: number;
        /**
         * The request made contained invalid arguments.
         */
        INVALID_ARGUMENTS: number;
        /**
         * The server encountered an (possibly unrecoverable) internal error.
         */
        INTERNAL_SERVER: number;

        // Constructors of GeocodeGlib-2.0.Error

        constructor(options: { message: string; code: number });

        // Owm methods of GeocodeGlib-2.0.Error

        /**
         * Gets the geocode-glib error quark.
         */
        static quark(): GLib.Quark;
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
     * @returns a #GQuark.
     */
    function error_quark(): GLib.Quark;
    module BoundingBox {
        // Constructor properties interface
    }

    /**
     * All the fields in the #GeocodeLocation structure are private and should
     * never be accessed directly.
     */
    class BoundingBox extends GObject.Object {
        // Own properties of GeocodeGlib-2.0.BoundingBox

        /**
         * Bottom coordinate.
         */
        bottom: number;
        /**
         * Left coordinate.
         */
        left: number;
        /**
         * Right coordinate.
         */
        right: number;
        /**
         * Top coordinate.
         */
        top: number;

        // Constructors of GeocodeGlib-2.0.BoundingBox

        static ['new'](top: number, bottom: number, left: number, right: number): BoundingBox;

        // Owm methods of GeocodeGlib-2.0.BoundingBox

        /**
         * Compare two #GeocodeBoundingBox instances for equality. This compares all
         * fields and only returns %TRUE if the instances are exactly equal.
         *
         * Both instances must be non-%NULL.
         * @param b another bounding box
         * @returns %TRUE if the instances are equal, %FALSE otherwise
         */
        equal(b: BoundingBox): boolean;
        /**
         * Gets the bottom coordinate of `bbox`.
         * @returns the bottom coordinate of @bbox.
         */
        get_bottom(): number;
        /**
         * Gets the left coordinate of `bbox`.
         * @returns the left coordinate of @bbox.
         */
        get_left(): number;
        /**
         * Gets the right coordinate of `bbox`.
         * @returns the right coordinate of @bbox.
         */
        get_right(): number;
        /**
         * Gets the top coordinate of `bbox`.
         * @returns the top coordinate of @bbox.
         */
        get_top(): number;
    }

    module Forward {
        // Constructor properties interface
    }

    /**
     * All the fields in the #GeocodeForward structure are private and should never be accessed directly.
     */
    class Forward extends GObject.Object {
        // Own properties of GeocodeGlib-2.0.Forward

        /**
         * The number of requested results to a search query.
         */
        answer_count: number;
        /**
         * The number of requested results to a search query.
         */
        answerCount: number;
        /**
         * If set to #TRUE then only results in the #GeocodeForward:search-area
         * bounding box are returned.
         * If set to #FALSE the #GeocodeForward:search-area is treated like a
         * preferred area for results.
         */
        bounded: boolean;
        /**
         * The bounding box that limits the search area.
         * If #GeocodeForward:bounded property is set to #TRUE only results from
         * this area is returned.
         */
        search_area: BoundingBox;
        /**
         * The bounding box that limits the search area.
         * If #GeocodeForward:bounded property is set to #TRUE only results from
         * this area is returned.
         */
        searchArea: BoundingBox;

        // Constructors of GeocodeGlib-2.0.Forward

        static new_for_params(params: GLib.HashTable<string, GObject.Value>): Forward;

        static new_for_string(str: string): Forward;

        // Owm methods of GeocodeGlib-2.0.Forward

        /**
         * Gets the number of requested results for searches.
         */
        get_answer_count(): number;
        /**
         * Gets the #GeocodeForward:bounded property that regulates whether the
         * #GeocodeForward:search-area property acts restricting or not.
         */
        get_bounded(): boolean;
        /**
         * Gets the area to limit searches within.
         * @returns the search area, or %NULL if none is set
         */
        get_search_area(): BoundingBox | null;
        /**
         * Gets the result of a forward geocoding
         * query using the current backend (see geocode_forward_set_backend()). By
         * default the GNOME Nominatim server is used. See #GeocodeBackend for more
         * information.
         *
         * If no results are found, a %GEOCODE_ERROR_NO_MATCHES error is returned.
         * @returns A list of places or %NULL in case of errors. Free the returned instances with g_object_unref() and the list with g_list_free() when done.
         */
        search(): Place[];
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
        search_async(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): void;
        /**
         * Finishes a forward geocoding operation. See geocode_forward_search_async().
         * @param res a #GAsyncResult.
         * @returns A list of places or %NULL in case of errors. Free the returned instances with g_object_unref() and the list with g_list_free() when done.
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
         * @param backend a #GeocodeBackend, or %NULL to use the    default one.
         */
        set_backend(backend?: Backend | null): void;
        /**
         * Set the #GeocodeForward:bounded property that regulates whether the
         * #GeocodeForward:search-area property acts restricting or not.
         * @param bounded #TRUE to restrict results to only items contained within the #GeocodeForward:search-area bounding box.
         */
        set_bounded(bounded: boolean): void;
        /**
         * Sets the area to limit searches within.
         * @param box a bounding box to limit the search area.
         */
        set_search_area(box: BoundingBox): void;
    }

    module Location {
        // Constructor properties interface
    }

    /**
     * All the fields in the #GeocodeLocation structure are private and should never be accessed directly.
     */
    class Location extends GObject.Object {
        // Own properties of GeocodeGlib-2.0.Location

        /**
         * The accuracy of this location in meters.
         */
        accuracy: number;
        /**
         * The altitude of this location in meters.
         */
        altitude: number;
        /**
         * The Coordinate Reference System Identification of this location.
         * Only the value 'wgs84' is currently valid.
         */
        crs: LocationCRS;
        /**
         * The description of this location.
         */
        description: string;
        /**
         * The latitude of this location in degrees.
         */
        latitude: number;
        /**
         * The longitude of this location in degrees.
         */
        longitude: number;
        /**
         * A timestamp in seconds since
         * &lt;ulink url="http://en.wikipedia.org/wiki/Unix_epoch"&gt;Epoch&lt;/ulink&gt;,
         * giving when the location was resolved from an address.
         *
         * A value of 0 (zero) will be interpreted as the current time.
         */
        timestamp: number;

        // Constructors of GeocodeGlib-2.0.Location

        static ['new'](latitude: number, longitude: number, accuracy: number): Location;

        static new_with_description(
            latitude: number,
            longitude: number,
            accuracy: number,
            description: string,
        ): Location;

        // Owm methods of GeocodeGlib-2.0.Location

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
        equal(b: Location): boolean;
        /**
         * Gets the accuracy (in meters) of location `loc`.
         * @returns The accuracy of location @loc.
         */
        get_accuracy(): number;
        /**
         * Gets the altitude of location `loc`.
         * @returns The altitude of location @loc.
         */
        get_altitude(): number;
        /**
         * Gets the Coordinate Reference System Identification of location `loc`.
         * @returns The CRS of location @loc.
         */
        get_crs(): LocationCRS;
        /**
         * Gets the description of location `loc`.
         * @returns The description of location @loc.
         */
        get_description(): string;
        /**
         * Calculates the distance in km, along the curvature of the Earth,
         * between 2 locations. Note that altitude changes are not
         * taken into account.
         * @param locb a #GeocodeLocation
         * @returns a distance in km.
         */
        get_distance_from(locb: Location): number;
        /**
         * Gets the latitude of location `loc`.
         * @returns The latitude of location @loc.
         */
        get_latitude(): number;
        /**
         * Gets the longitude of location `loc`.
         * @returns The longitude of location @loc.
         */
        get_longitude(): number;
        /**
         * Gets the timestamp (in seconds since the Epoch) of location `loc`. See
         * #GeocodeLocation:timestamp.
         * @returns The timestamp of location @loc.
         */
        get_timestamp(): number;
        /**
         * Sets the description of `loc` to `description`.
         * @param description a description for the location
         */
        set_description(description: string): void;
        /**
         * Initialize a #GeocodeLocation object with the given `uri`.
         *
         * The URI should be in the geo scheme (RFC 5870) which in its simplest form
         * looks like:
         *
         * - geo:latitude,longitude
         *
         * An &lt;ulink
         * url="http://developer.android.com/guide/components/intents-common.html#Maps"&gt;
         * Android extension&lt;/ulink&gt; to set a description is also supported in the form of:
         *
         * - geo:0,0?q=latitude,longitude(description)
         * @param uri a URI mapping out a location
         * @returns %TRUE on success and %FALSE on error.
         */
        set_from_uri(uri: string): boolean;
        /**
         * Creates a URI representing `loc` in the scheme specified in `scheme`.
         * @param scheme the scheme of the requested URI
         * @returns a URI representing the location. The returned string should be freed with g_free() when no longer needed.
         */
        to_uri(scheme: LocationURIScheme): string;
    }

    module MockBackend {
        // Constructor properties interface
    }

    /**
     * All the fields in the #GeocodeMockBackend structure are private and should
     * never be accessed directly.
     */
    class MockBackend extends GObject.Object {
        // Constructors of GeocodeGlib-2.0.MockBackend

        static ['new'](): MockBackend;

        // Owm methods of GeocodeGlib-2.0.MockBackend

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
         * @param results result set     to return for the query, or %NULL if @error is non-%NULL; result sets     must be in the same format as returned by geocode_forward_search()
         * @param error error to return for the query, or %NULL if @results     should be returned instead; errors must match those returned by     geocode_forward_search()
         */
        add_forward_result(
            params: GLib.HashTable<string, GObject.Value>,
            results?: Place[] | null,
            error?: GLib.Error | null,
        ): void;
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
         * @param results result set     to return for the query, or %NULL if @error is non-%NULL; result sets     must be in the same format as returned by geocode_reverse_resolve()
         * @param error error to return for the query, or %NULL if @results     should be returned instead; errors must match those returned by     geocode_reverse_resolve()
         */
        add_reverse_result(
            params: GLib.HashTable<string, GObject.Value>,
            results?: Place[] | null,
            error?: GLib.Error | null,
        ): void;
        /**
         * Clear the set of stored results in the mock backend which have been added
         * using geocode_mock_backend_add_forward_result() and
         * geocode_mock_backend_add_reverse_result(). Additionally, clear the query log
         * so far (see geocode_mock_backend_get_query_log()).
         *
         * This effectively resets the mock backend to its initial state.
         */
        clear(): void;
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
        get_query_log(): MockBackendQuery[];
    }

    module Nominatim {
        // Constructor properties interface
    }

    /**
     * All the fields in the #GeocodeNominatim structure are private and should
     * never be accessed directly.
     */
    class Nominatim extends GObject.Object {
        // Own properties of GeocodeGlib-2.0.Nominatim

        /**
         * The base URL of the Nominatim service, for example
         * `https://nominatim.example.org`.
         */
        base_url: string;
        /**
         * The base URL of the Nominatim service, for example
         * `https://nominatim.example.org`.
         */
        baseUrl: string;
        /**
         * E-mail address of the maintainer of the software making the
         * geocoding requests to the  Nominatim server. This is used to contact
         * them in the event of a problem with their usage. See
         * [the Nominatim API](http://wiki.openstreetmap.org/wiki/Nominatim).
         */
        maintainer_email_address: string;
        /**
         * E-mail address of the maintainer of the software making the
         * geocoding requests to the  Nominatim server. This is used to contact
         * them in the event of a problem with their usage. See
         * [the Nominatim API](http://wiki.openstreetmap.org/wiki/Nominatim).
         */
        maintainerEmailAddress: string;
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
        user_agent: string;
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
        userAgent: string;

        // Constructors of GeocodeGlib-2.0.Nominatim

        static ['new'](base_url: string, maintainer_email_address: string): Nominatim;

        // Owm methods of GeocodeGlib-2.0.Nominatim

        /**
         * Gets a reference to the default Nominatim server on nominatim.gnome.org.
         *
         * This function is thread-safe.
         */
        static get_gnome(): Nominatim;
    }

    module Place {
        // Constructor properties interface
    }

    /**
     * All the fields in the #GeocodePlace structure are private and should never be accessed directly.
     */
    class Place extends GObject.Object {
        // Own properties of GeocodeGlib-2.0.Place

        /**
         * The local administrative area.
         */
        administrative_area: string;
        /**
         * The local administrative area.
         */
        administrativeArea: string;
        /**
         * A named area such as a campus or neighborhood.
         */
        area: string;
        /**
         * The bounding box for the place.
         */
        bounding_box: BoundingBox;
        /**
         * The bounding box for the place.
         */
        boundingBox: BoundingBox;
        /**
         * A specific building on a street or in an area.
         */
        building: string;
        /**
         * The continent.
         */
        continent: string;
        /**
         * The country.
         */
        country: string;
        /**
         * The country code.
         */
        country_code: string;
        /**
         * The country code.
         */
        countryCode: string;
        /**
         * The county.
         */
        county: string;
        /**
         * #GIcon representing the `GeocodePlace`.
         */
        readonly icon: Gio.Icon;
        /**
         * The location info for the place.
         */
        location: Location;
        /**
         * The name of the place.
         */
        name: string;
        /**
         * The OpenStreetMap id of the place.
         */
        osm_id: string;
        /**
         * The OpenStreetMap id of the place.
         */
        osmId: string;
        /**
         * The OpenStreetMap type of the place.
         */
        osm_type: PlaceOsmType;
        /**
         * The OpenStreetMap type of the place.
         */
        osmType: PlaceOsmType;
        /**
         * The type of the place.
         */
        place_type: PlaceType;
        /**
         * The type of the place.
         */
        placeType: PlaceType;
        /**
         * The postal code.
         */
        postal_code: string;
        /**
         * The postal code.
         */
        postalCode: string;
        /**
         * The state.
         */
        state: string;
        /**
         * The street name.
         */
        street: string;
        /**
         * The street address.
         */
        street_address: string;
        /**
         * The street address.
         */
        streetAddress: string;
        /**
         * The town.
         */
        town: string;

        // Constructors of GeocodeGlib-2.0.Place

        static ['new'](name: string, place_type: PlaceType): Place;

        static new_with_location(name: string, place_type: PlaceType, location: Location): Place;

        // Owm methods of GeocodeGlib-2.0.Place

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
        equal(b: Place): boolean;
        /**
         * Gets the local administrative area of the `place`.
         * @returns The local administrative area of the @place.
         */
        get_administrative_area(): string;
        /**
         * Gets the area of the `place`.
         * @returns The area of the @place.
         */
        get_area(): string;
        /**
         * Gets the bounding box for the place `place`.
         * @returns A #GeocodeBoundingBox, or NULL if boundaries are unknown.
         */
        get_bounding_box(): BoundingBox;
        /**
         * Gets the building of the `place`.
         * @returns The building of the @place.
         */
        get_building(): string;
        /**
         * Gets the continent of the `place`.
         * @returns The continent of the @place.
         */
        get_continent(): string;
        /**
         * Gets the country of the `place`.
         * @returns The country of the @place.
         */
        get_country(): string;
        /**
         * Gets the ISO-3166 country code of the `place`.
         * @returns The ISO-3166 country code of the @place, in upper case.
         */
        get_country_code(): string;
        /**
         * Gets the county of the `place`.
         * @returns The country of the @place.
         */
        get_county(): string;
        /**
         * Gets the #GIcon representing the `place`.
         * @returns The #GIcon representing the @place.
         */
        get_icon(): Gio.Icon;
        /**
         * Gets the associated location object.
         * @returns The associated location object.
         */
        get_location(): Location;
        /**
         * Gets the name of the `place`.
         * @returns The name of the @place.
         */
        get_name(): string;
        /**
         * Gets the OpenStreetMap ID of the `place`.
         * @returns The osm ID of the @place.
         */
        get_osm_id(): string;
        /**
         * Gets the OpenStreetMap type of the `place`.
         * @returns The osm type of the @place.
         */
        get_osm_type(): PlaceOsmType;
        /**
         * Gets the type of the `place`.
         * @returns The type of the @place.
         */
        get_place_type(): PlaceType;
        /**
         * Gets the postal code of the `place`.
         * @returns The postal code of the @place.
         */
        get_postal_code(): string;
        /**
         * Gets the state of the `place`.
         * @returns The state of the @place.
         */
        get_state(): string;
        /**
         * Gets the street of the `place`.
         * @returns The street of the @place.
         */
        get_street(): string;
        /**
         * Gets the street address of the `place`.
         * @returns The street address of the @place.
         */
        get_street_address(): string;
        /**
         * Gets the town of the `place`.
         * @returns The town of the @place.
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
         * Sets the #GeocodeBoundingBox for the place `place`.
         * @param bbox A #GeocodeBoundingBox for the place
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

    module Reverse {
        // Constructor properties interface
    }

    /**
     * All the fields in the #GeocodeReverse structure are private and should never be accessed directly.
     */
    class Reverse extends GObject.Object {
        // Constructors of GeocodeGlib-2.0.Reverse

        static new_for_location(location: Location): Reverse;

        // Owm methods of GeocodeGlib-2.0.Reverse

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
        resolve(): Place;
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
        resolve_async(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): void;
        /**
         * Finishes a reverse geocoding operation. See geocode_reverse_resolve_async().
         * @param res a #GAsyncResult.
         * @returns A #GeocodePlace instance, or %NULL in case of errors. Free the returned instance with #g_object_unref() when done.
         */
        resolve_finish(res: Gio.AsyncResult): Place;
        /**
         * Specifies the backend to use in the reverse geocoding operation.
         *
         * If none is given, the default GNOME Nominatim server is used.
         * @param backend a #GeocodeBackend, or %NULL to use the default one.
         */
        set_backend(backend?: Backend | null): void;
    }

    /**
     * Interface which defines the basic operations for geocoding.
     */
    class BackendInterface {}

    /**
     * All the fields in the #GeocodeBoundingBoxClass structure are private and
     * should never be accessed directly.
     */
    class BoundingBoxClass {}

    class BoundingBoxPrivate {}

    /**
     * All the fields in the #GeocodeForwardClass structure are private and should never be accessed directly.
     */
    class ForwardClass {}

    class ForwardPrivate {}

    /**
     * All the fields in the #GeocodeLocationClass structure are private and should never be accessed directly.
     */
    class LocationClass {}

    class LocationPrivate {}

    class MockBackendClass {}

    /**
     * The details of a forward or reverse query which was performed on a
     * #GeocodeMockBackend by application code. This includes the input (`params,`
     * `is_forward)`, and the output which was returned (`results` or `error)`.
     *
     * Empty result sets are represented by the %GEOCODE_ERROR_NO_MATCHES error
     * (for forward queries) or the %GEOCODE_ERROR_NOT_SUPPORTED error (for reverse
     * queries), rather than an empty `results` list.
     */
    class MockBackendQuery {
        // Own fields of GeocodeGlib-2.0.MockBackendQuery

        is_forward: boolean;
        results: Place[];
        error: GLib.Error;
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
     */
    class NominatimClass {}

    /**
     * All the fields in the #GeocodePlaceClass structure are private and should never be accessed directly.
     */
    class PlaceClass {}

    class PlacePrivate {}

    /**
     * All the fields in the #GeocodeReverseClass structure are private and should never be accessed directly.
     */
    class ReverseClass {}

    class ReversePrivate {}

    interface Backend {
        // Owm methods of GeocodeGlib-2.0.Backend

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
        forward_search(params: GLib.HashTable<string, GObject.Value>, cancellable?: Gio.Cancellable | null): Place[];
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
        forward_search_async(
            params: GLib.HashTable<string, GObject.Value>,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Finishes a forward geocoding operation. See
         * geocode_backend_forward_search_async().
         * @param result a #GAsyncResult.
         * @returns A list of places or %NULL in case of errors. Free the returned instances with g_object_unref() and the list with g_list_free() when done.
         */
        forward_search_finish(result: Gio.AsyncResult): Place[];
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
        reverse_resolve(params: GLib.HashTable<string, GObject.Value>, cancellable?: Gio.Cancellable | null): Place[];
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
        reverse_resolve_async(
            params: GLib.HashTable<string, GObject.Value>,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Finishes a reverse geocoding operation. See geocode_backend_reverse_resolve_async().
         * @param result a #GAsyncResult.
         * @returns A list of    #GeocodePlace instances, or %NULL in case of errors. The list is ordered    by relevance, with most relevant results first. Free the returned    instances with g_object_unref() and the list with g_list_free() when done.
         */
        reverse_resolve_finish(result: Gio.AsyncResult): Place[];

        // Own virtual methods of GeocodeGlib-2.0.Backend

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
         */
        vfunc_forward_search(
            params: GLib.HashTable<string, GObject.Value>,
            cancellable?: Gio.Cancellable | null,
        ): Place[];
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
        vfunc_forward_search_async(
            params: GLib.HashTable<string, GObject.Value>,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Finishes a forward geocoding operation. See
         * geocode_backend_forward_search_async().
         * @param result a #GAsyncResult.
         */
        vfunc_forward_search_finish(result: Gio.AsyncResult): Place[];
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
         */
        vfunc_reverse_resolve(
            params: GLib.HashTable<string, GObject.Value>,
            cancellable?: Gio.Cancellable | null,
        ): Place[];
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
        vfunc_reverse_resolve_async(
            params: GLib.HashTable<string, GObject.Value>,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Finishes a reverse geocoding operation. See geocode_backend_reverse_resolve_async().
         * @param result a #GAsyncResult.
         */
        vfunc_reverse_resolve_finish(result: Gio.AsyncResult): Place[];
    }

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
