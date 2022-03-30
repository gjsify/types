/*
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/sammydre/ts-for-gjs
 */
/**
 * GeocodeGlib-1.0
 */

import type * as Gjs from './Gjs';
import type Soup from './Soup-2.4';
import type Gio from './Gio-2.0';
import type GObject from './GObject-2.0';
import type GLib from './GLib-2.0';
import type Json from './Json-1.0';

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
function error_quark(): GLib.Quark
class Backend {
    /* Methods of GeocodeGlib-1.0.GeocodeGlib.Backend */
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
    forward_search(params: GLib.HashTable, cancellable?: Gio.Cancellable | null): Place[]
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
    forward_search_async(params: GLib.HashTable, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes a forward geocoding operation. See
     * geocode_backend_forward_search_async().
     * @param result a #GAsyncResult.
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
     */
    reverse_resolve(params: GLib.HashTable, cancellable?: Gio.Cancellable | null): Place[]
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
    reverse_resolve_async(params: GLib.HashTable, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes a reverse geocoding operation. See geocode_backend_reverse_resolve_async().
     * @param result a #GAsyncResult.
     */
    reverse_resolve_finish(result: Gio.AsyncResult): Place[]
    /* Virtual methods of GeocodeGlib-1.0.GeocodeGlib.Backend */
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
    vfunc_forward_search(params: GLib.HashTable, cancellable?: Gio.Cancellable | null): Place[]
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
    vfunc_forward_search_async(params: GLib.HashTable, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes a forward geocoding operation. See
     * geocode_backend_forward_search_async().
     * @param result a #GAsyncResult.
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
     * @param params a #GHashTable with string keys, and #GValue values.
     * @param cancellable optional #GCancellable object, %NULL to ignore.
     */
    vfunc_reverse_resolve(params: GLib.HashTable, cancellable?: Gio.Cancellable | null): Place[]
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
    vfunc_reverse_resolve_async(params: GLib.HashTable, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes a reverse geocoding operation. See geocode_backend_reverse_resolve_async().
     * @param result a #GAsyncResult.
     */
    vfunc_reverse_resolve_finish(result: Gio.AsyncResult): Place[]
    static name: string
}
interface BoundingBox_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of GeocodeGlib-1.0.GeocodeGlib.BoundingBox */
    /**
     * Bottom coordinate.
     */
    bottom?: number
    /**
     * Left coordinate.
     */
    left?: number
    /**
     * Right coordinate.
     */
    right?: number
    /**
     * Top coordinate.
     */
    top?: number
}
class BoundingBox {
    /* Properties of GeocodeGlib-1.0.GeocodeGlib.BoundingBox */
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
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of GeocodeGlib-1.0.GeocodeGlib.BoundingBox */
    /**
     * Compare two #GeocodeBoundingBox instances for equality. This compares all
     * fields and only returns %TRUE if the instances are exactly equal.
     * 
     * Both instances must be non-%NULL.
     * @param b another bounding box
     */
    equal(b: BoundingBox): boolean
    /**
     * Gets the bottom coordinate of `bbox`.
     */
    get_bottom(): number
    /**
     * Gets the left coordinate of `bbox`.
     */
    get_left(): number
    /**
     * Gets the right coordinate of `bbox`.
     */
    get_right(): number
    /**
     * Gets the top coordinate of `bbox`.
     */
    get_top(): number
    /* Methods of GObject-2.0.GObject.Object */
    /**
     * Creates a binding between `source_property` on `source` and `target_property`
     * on `target`.
     * 
     * Whenever the `source_property` is changed the `target_property` is
     * updated using the same value. For instance:
     * 
     * 
     * ```c
     *   g_object_bind_property (action, "active", widget, "sensitive", 0);
     * ```
     * 
     * 
     * Will result in the "sensitive" property of the widget #GObject instance to be
     * updated with the same value of the "active" property of the action #GObject
     * instance.
     * 
     * If `flags` contains %G_BINDING_BIDIRECTIONAL then the binding will be mutual:
     * if `target_property` on `target` changes then the `source_property` on `source`
     * will be updated as well.
     * 
     * The binding will automatically be removed when either the `source` or the
     * `target` instances are finalized. To remove the binding without affecting the
     * `source` and the `target` you can just call g_object_unref() on the returned
     * #GBinding instance.
     * 
     * Removing the binding by calling g_object_unref() on it must only be done if
     * the binding, `source` and `target` are only used from a single thread and it
     * is clear that both `source` and `target` outlive the binding. Especially it
     * is not safe to rely on this if the binding, `source` or `target` can be
     * finalized from different threads. Keep another reference to the binding and
     * use g_binding_unbind() instead to be on the safe side.
     * 
     * A #GObject can have multiple bindings.
     * @param source_property the property on `source` to bind
     * @param target the target #GObject
     * @param target_property the property on `target` to bind
     * @param flags flags to pass to #GBinding
     */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    /**
     * Creates a binding between `source_property` on `source` and `target_property`
     * on `target,` allowing you to set the transformation functions to be used by
     * the binding.
     * 
     * This function is the language bindings friendly version of
     * g_object_bind_property_full(), using #GClosures instead of
     * function pointers.
     * @param source_property the property on `source` to bind
     * @param target the target #GObject
     * @param target_property the property on `target` to bind
     * @param flags flags to pass to #GBinding
     * @param transform_to a #GClosure wrapping the transformation function     from the `source` to the `target,` or %NULL to use the default
     * @param transform_from a #GClosure wrapping the transformation function     from the `target` to the `source,` or %NULL to use the default
     */
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: Function, transform_from: Function): GObject.Binding
    /**
     * This function is intended for #GObject implementations to re-enforce
     * a [floating][floating-ref] object reference. Doing this is seldom
     * required: all #GInitiallyUnowneds are created with a floating reference
     * which usually just needs to be sunken by calling g_object_ref_sink().
     */
    force_floating(): void
    /**
     * Increases the freeze count on `object`. If the freeze count is
     * non-zero, the emission of "notify" signals on `object` is
     * stopped. The signals are queued until the freeze count is decreased
     * to zero. Duplicate notifications are squashed so that at most one
     * #GObject::notify signal is emitted for each property modified while the
     * object is frozen.
     * 
     * This is necessary for accessors that modify multiple properties to prevent
     * premature notification while the object is still being modified.
     */
    freeze_notify(): void
    /**
     * Gets a named field from the objects table of associations (see g_object_set_data()).
     * @param key name of the key for that association
     */
    get_data(key: string): object | null
    /**
     * Gets a property of an object.
     * 
     * The `value` can be:
     * 
     *  - an empty #GValue initialized by %G_VALUE_INIT, which will be
     *    automatically initialized with the expected type of the property
     *    (since GLib 2.60)
     *  - a #GValue initialized with the expected type of the property
     *  - a #GValue initialized with a type to which the expected type
     *    of the property can be transformed
     * 
     * In general, a copy is made of the property contents and the caller is
     * responsible for freeing the memory by calling g_value_unset().
     * 
     * Note that g_object_get_property() is really intended for language
     * bindings, g_object_get() is much more convenient for C programming.
     * @param property_name the name of the property to get
     * @param value return location for the property value
     */
    get_property(property_name: string, value: any): void
    /**
     * This function gets back user data pointers stored via
     * g_object_set_qdata().
     * @param quark A #GQuark, naming the user data pointer
     */
    get_qdata(quark: GLib.Quark): object | null
    /**
     * Gets `n_properties` properties for an `object`.
     * Obtained properties will be set to `values`. All properties must be valid.
     * Warnings will be emitted and undefined behaviour may result if invalid
     * properties are passed in.
     * @param names the names of each property to get
     * @param values the values of each property to get
     */
    getv(names: string[], values: any[]): void
    /**
     * Checks whether `object` has a [floating][floating-ref] reference.
     */
    is_floating(): boolean
    /**
     * Emits a "notify" signal for the property `property_name` on `object`.
     * 
     * When possible, eg. when signaling a property change from within the class
     * that registered the property, you should use g_object_notify_by_pspec()
     * instead.
     * 
     * Note that emission of the notify signal may be blocked with
     * g_object_freeze_notify(). In this case, the signal emissions are queued
     * and will be emitted (in reverse order) when g_object_thaw_notify() is
     * called.
     * @param property_name the name of a property installed on the class of `object`.
     */
    notify(property_name: string): void
    /**
     * Emits a "notify" signal for the property specified by `pspec` on `object`.
     * 
     * This function omits the property name lookup, hence it is faster than
     * g_object_notify().
     * 
     * One way to avoid using g_object_notify() from within the
     * class that registered the properties, and using g_object_notify_by_pspec()
     * instead, is to store the GParamSpec used with
     * g_object_class_install_property() inside a static array, e.g.:
     * 
     * 
     * ```c
     *   enum
     *   {
     *     PROP_0,
     *     PROP_FOO,
     *     PROP_LAST
     *   };
     * 
     *   static GParamSpec *properties[PROP_LAST];
     * 
     *   static void
     *   my_object_class_init (MyObjectClass *klass)
     *   {
     *     properties[PROP_FOO] = g_param_spec_int ("foo", "Foo", "The foo",
     *                                              0, 100,
     *                                              50,
     *                                              G_PARAM_READWRITE);
     *     g_object_class_install_property (gobject_class,
     *                                      PROP_FOO,
     *                                      properties[PROP_FOO]);
     *   }
     * ```
     * 
     * 
     * and then notify a change on the "foo" property with:
     * 
     * 
     * ```c
     *   g_object_notify_by_pspec (self, properties[PROP_FOO]);
     * ```
     * 
     * @param pspec the #GParamSpec of a property installed on the class of `object`.
     */
    notify_by_pspec(pspec: GObject.ParamSpec): void
    /**
     * Increases the reference count of `object`.
     * 
     * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
     * of `object` will be propagated to the return type (using the GCC typeof()
     * extension), so any casting the caller needs to do on the return type must be
     * explicit.
     */
    ref(): GObject.Object
    /**
     * Increase the reference count of `object,` and possibly remove the
     * [floating][floating-ref] reference, if `object` has a floating reference.
     * 
     * In other words, if the object is floating, then this call "assumes
     * ownership" of the floating reference, converting it to a normal
     * reference by clearing the floating flag while leaving the reference
     * count unchanged.  If the object is not floating, then this call
     * adds a new normal reference increasing the reference count by one.
     * 
     * Since GLib 2.56, the type of `object` will be propagated to the return type
     * under the same conditions as for g_object_ref().
     */
    ref_sink(): GObject.Object
    /**
     * Releases all references to other objects. This can be used to break
     * reference cycles.
     * 
     * This function should only be called from object system implementations.
     */
    run_dispose(): void
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
    /**
     * Sets a property on an object.
     * @param property_name the name of the property to set
     * @param value the value
     */
    set_property(property_name: string, value: any): void
    /**
     * Remove a specified datum from the object's data associations,
     * without invoking the association's destroy handler.
     * @param key name of the key
     */
    steal_data(key: string): object | null
    /**
     * This function gets back user data pointers stored via
     * g_object_set_qdata() and removes the `data` from object
     * without invoking its destroy() function (if any was
     * set).
     * Usually, calling this function is only required to update
     * user data pointers with a destroy notifier, for example:
     * 
     * ```c
     * void
     * object_add_to_user_list (GObject     *object,
     *                          const gchar *new_string)
     * {
     *   // the quark, naming the object data
     *   GQuark quark_string_list = g_quark_from_static_string ("my-string-list");
     *   // retrieve the old string list
     *   GList *list = g_object_steal_qdata (object, quark_string_list);
     * 
     *   // prepend new string
     *   list = g_list_prepend (list, g_strdup (new_string));
     *   // this changed 'list', so we need to set it again
     *   g_object_set_qdata_full (object, quark_string_list, list, free_string_list);
     * }
     * static void
     * free_string_list (gpointer data)
     * {
     *   GList *node, *list = data;
     * 
     *   for (node = list; node; node = node->next)
     *     g_free (node->data);
     *   g_list_free (list);
     * }
     * ```
     * 
     * Using g_object_get_qdata() in the above example, instead of
     * g_object_steal_qdata() would have left the destroy function set,
     * and thus the partial string list would have been freed upon
     * g_object_set_qdata_full().
     * @param quark A #GQuark, naming the user data pointer
     */
    steal_qdata(quark: GLib.Quark): object | null
    /**
     * Reverts the effect of a previous call to
     * g_object_freeze_notify(). The freeze count is decreased on `object`
     * and when it reaches zero, queued "notify" signals are emitted.
     * 
     * Duplicate notifications for each property are squashed so that at most one
     * #GObject::notify signal is emitted for each property, in the reverse order
     * in which they have been queued.
     * 
     * It is an error to call this function when the freeze count is zero.
     */
    thaw_notify(): void
    /**
     * Decreases the reference count of `object`. When its reference count
     * drops to 0, the object is finalized (i.e. its memory is freed).
     * 
     * If the pointer to the #GObject may be reused in future (for example, if it is
     * an instance variable of another object), it is recommended to clear the
     * pointer to %NULL rather than retain a dangling pointer to a potentially
     * invalid #GObject instance. Use g_clear_object() for this.
     */
    unref(): void
    /**
     * This function essentially limits the life time of the `closure` to
     * the life time of the object. That is, when the object is finalized,
     * the `closure` is invalidated by calling g_closure_invalidate() on
     * it, in order to prevent invocations of the closure with a finalized
     * (nonexisting) object. Also, g_object_ref() and g_object_unref() are
     * added as marshal guards to the `closure,` to ensure that an extra
     * reference count is held on `object` during invocation of the
     * `closure`.  Usually, this function will be called on closures that
     * use this `object` as closure data.
     * @param closure #GClosure to watch
     */
    watch_closure(closure: Function): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /**
     * Emits a "notify" signal for the property `property_name` on `object`.
     * 
     * When possible, eg. when signaling a property change from within the class
     * that registered the property, you should use g_object_notify_by_pspec()
     * instead.
     * 
     * Note that emission of the notify signal may be blocked with
     * g_object_freeze_notify(). In this case, the signal emissions are queued
     * and will be emitted (in reverse order) when g_object_thaw_notify() is
     * called.
     * @param pspec 
     */
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    /**
     * The notify signal is emitted on an object when one of its properties has
     * its value set through g_object_set_property(), g_object_set(), et al.
     * 
     * Note that getting this signal doesn’t itself guarantee that the value of
     * the property has actually changed. When it is emitted is determined by the
     * derived GObject class. If the implementor did not create the property with
     * %G_PARAM_EXPLICIT_NOTIFY, then any call to g_object_set_property() results
     * in ::notify being emitted, even if the new value is the same as the old.
     * If they did pass %G_PARAM_EXPLICIT_NOTIFY, then this signal is emitted only
     * when they explicitly call g_object_notify() or g_object_notify_by_pspec(),
     * and common practice is to do that only when the value has actually changed.
     * 
     * This signal is typically used to obtain change notification for a
     * single property, by specifying the property name as a detail in the
     * g_signal_connect() call, like this:
     * 
     * 
     * ```c
     * g_signal_connect (text_view->buffer, "notify::paste-target-list",
     *                   G_CALLBACK (gtk_text_view_target_list_notify),
     *                   text_view)
     * ```
     * 
     * 
     * It is important to note that you must use
     * [canonical parameter names][canonical-parameter-names] as
     * detail strings for the notify signal.
     * @param pspec the #GParamSpec of the property which changed.
     */
    connect(sigName: "notify", callback: (($obj: BoundingBox, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: BoundingBox, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::bottom", callback: (($obj: BoundingBox, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::bottom", callback: (($obj: BoundingBox, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::left", callback: (($obj: BoundingBox, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::left", callback: (($obj: BoundingBox, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::right", callback: (($obj: BoundingBox, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::right", callback: (($obj: BoundingBox, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::top", callback: (($obj: BoundingBox, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::top", callback: (($obj: BoundingBox, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: BoundingBox_ConstructProps)
    _init (config?: BoundingBox_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(top: number, bottom: number, left: number, right: number): BoundingBox
    static $gtype: GObject.Type
}
interface Forward_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of GeocodeGlib-1.0.GeocodeGlib.Forward */
    /**
     * The number of requested results to a search query.
     */
    answer_count?: number
    /**
     * If set to #TRUE then only results in the #GeocodeForward:search-area
     * bounding box are returned.
     * If set to #FALSE the #GeocodeForward:search-area is treated like a
     * preferred area for results.
     */
    bounded?: boolean
    /**
     * The bounding box that limits the search area.
     * If #GeocodeForward:bounded property is set to #TRUE only results from
     * this area is returned.
     */
    search_area?: BoundingBox
}
class Forward {
    /* Properties of GeocodeGlib-1.0.GeocodeGlib.Forward */
    /**
     * The number of requested results to a search query.
     */
    answer_count: number
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
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of GeocodeGlib-1.0.GeocodeGlib.Forward */
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
     */
    get_search_area(): BoundingBox | null
    /**
     * Gets the result of a forward geocoding
     * query using the current backend (see geocode_forward_set_backend()). By
     * default the GNOME Nominatim server is used. See #GeocodeBackend for more
     * information.
     * 
     * If no results are found, a %GEOCODE_ERROR_NO_MATCHES error is returned.
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
    search_async(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes a forward geocoding operation. See geocode_forward_search_async().
     * @param res a #GAsyncResult.
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
    set_backend(backend?: Backend | null): void
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
    /* Methods of GObject-2.0.GObject.Object */
    /**
     * Creates a binding between `source_property` on `source` and `target_property`
     * on `target`.
     * 
     * Whenever the `source_property` is changed the `target_property` is
     * updated using the same value. For instance:
     * 
     * 
     * ```c
     *   g_object_bind_property (action, "active", widget, "sensitive", 0);
     * ```
     * 
     * 
     * Will result in the "sensitive" property of the widget #GObject instance to be
     * updated with the same value of the "active" property of the action #GObject
     * instance.
     * 
     * If `flags` contains %G_BINDING_BIDIRECTIONAL then the binding will be mutual:
     * if `target_property` on `target` changes then the `source_property` on `source`
     * will be updated as well.
     * 
     * The binding will automatically be removed when either the `source` or the
     * `target` instances are finalized. To remove the binding without affecting the
     * `source` and the `target` you can just call g_object_unref() on the returned
     * #GBinding instance.
     * 
     * Removing the binding by calling g_object_unref() on it must only be done if
     * the binding, `source` and `target` are only used from a single thread and it
     * is clear that both `source` and `target` outlive the binding. Especially it
     * is not safe to rely on this if the binding, `source` or `target` can be
     * finalized from different threads. Keep another reference to the binding and
     * use g_binding_unbind() instead to be on the safe side.
     * 
     * A #GObject can have multiple bindings.
     * @param source_property the property on `source` to bind
     * @param target the target #GObject
     * @param target_property the property on `target` to bind
     * @param flags flags to pass to #GBinding
     */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    /**
     * Creates a binding between `source_property` on `source` and `target_property`
     * on `target,` allowing you to set the transformation functions to be used by
     * the binding.
     * 
     * This function is the language bindings friendly version of
     * g_object_bind_property_full(), using #GClosures instead of
     * function pointers.
     * @param source_property the property on `source` to bind
     * @param target the target #GObject
     * @param target_property the property on `target` to bind
     * @param flags flags to pass to #GBinding
     * @param transform_to a #GClosure wrapping the transformation function     from the `source` to the `target,` or %NULL to use the default
     * @param transform_from a #GClosure wrapping the transformation function     from the `target` to the `source,` or %NULL to use the default
     */
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: Function, transform_from: Function): GObject.Binding
    /**
     * This function is intended for #GObject implementations to re-enforce
     * a [floating][floating-ref] object reference. Doing this is seldom
     * required: all #GInitiallyUnowneds are created with a floating reference
     * which usually just needs to be sunken by calling g_object_ref_sink().
     */
    force_floating(): void
    /**
     * Increases the freeze count on `object`. If the freeze count is
     * non-zero, the emission of "notify" signals on `object` is
     * stopped. The signals are queued until the freeze count is decreased
     * to zero. Duplicate notifications are squashed so that at most one
     * #GObject::notify signal is emitted for each property modified while the
     * object is frozen.
     * 
     * This is necessary for accessors that modify multiple properties to prevent
     * premature notification while the object is still being modified.
     */
    freeze_notify(): void
    /**
     * Gets a named field from the objects table of associations (see g_object_set_data()).
     * @param key name of the key for that association
     */
    get_data(key: string): object | null
    /**
     * Gets a property of an object.
     * 
     * The `value` can be:
     * 
     *  - an empty #GValue initialized by %G_VALUE_INIT, which will be
     *    automatically initialized with the expected type of the property
     *    (since GLib 2.60)
     *  - a #GValue initialized with the expected type of the property
     *  - a #GValue initialized with a type to which the expected type
     *    of the property can be transformed
     * 
     * In general, a copy is made of the property contents and the caller is
     * responsible for freeing the memory by calling g_value_unset().
     * 
     * Note that g_object_get_property() is really intended for language
     * bindings, g_object_get() is much more convenient for C programming.
     * @param property_name the name of the property to get
     * @param value return location for the property value
     */
    get_property(property_name: string, value: any): void
    /**
     * This function gets back user data pointers stored via
     * g_object_set_qdata().
     * @param quark A #GQuark, naming the user data pointer
     */
    get_qdata(quark: GLib.Quark): object | null
    /**
     * Gets `n_properties` properties for an `object`.
     * Obtained properties will be set to `values`. All properties must be valid.
     * Warnings will be emitted and undefined behaviour may result if invalid
     * properties are passed in.
     * @param names the names of each property to get
     * @param values the values of each property to get
     */
    getv(names: string[], values: any[]): void
    /**
     * Checks whether `object` has a [floating][floating-ref] reference.
     */
    is_floating(): boolean
    /**
     * Emits a "notify" signal for the property `property_name` on `object`.
     * 
     * When possible, eg. when signaling a property change from within the class
     * that registered the property, you should use g_object_notify_by_pspec()
     * instead.
     * 
     * Note that emission of the notify signal may be blocked with
     * g_object_freeze_notify(). In this case, the signal emissions are queued
     * and will be emitted (in reverse order) when g_object_thaw_notify() is
     * called.
     * @param property_name the name of a property installed on the class of `object`.
     */
    notify(property_name: string): void
    /**
     * Emits a "notify" signal for the property specified by `pspec` on `object`.
     * 
     * This function omits the property name lookup, hence it is faster than
     * g_object_notify().
     * 
     * One way to avoid using g_object_notify() from within the
     * class that registered the properties, and using g_object_notify_by_pspec()
     * instead, is to store the GParamSpec used with
     * g_object_class_install_property() inside a static array, e.g.:
     * 
     * 
     * ```c
     *   enum
     *   {
     *     PROP_0,
     *     PROP_FOO,
     *     PROP_LAST
     *   };
     * 
     *   static GParamSpec *properties[PROP_LAST];
     * 
     *   static void
     *   my_object_class_init (MyObjectClass *klass)
     *   {
     *     properties[PROP_FOO] = g_param_spec_int ("foo", "Foo", "The foo",
     *                                              0, 100,
     *                                              50,
     *                                              G_PARAM_READWRITE);
     *     g_object_class_install_property (gobject_class,
     *                                      PROP_FOO,
     *                                      properties[PROP_FOO]);
     *   }
     * ```
     * 
     * 
     * and then notify a change on the "foo" property with:
     * 
     * 
     * ```c
     *   g_object_notify_by_pspec (self, properties[PROP_FOO]);
     * ```
     * 
     * @param pspec the #GParamSpec of a property installed on the class of `object`.
     */
    notify_by_pspec(pspec: GObject.ParamSpec): void
    /**
     * Increases the reference count of `object`.
     * 
     * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
     * of `object` will be propagated to the return type (using the GCC typeof()
     * extension), so any casting the caller needs to do on the return type must be
     * explicit.
     */
    ref(): GObject.Object
    /**
     * Increase the reference count of `object,` and possibly remove the
     * [floating][floating-ref] reference, if `object` has a floating reference.
     * 
     * In other words, if the object is floating, then this call "assumes
     * ownership" of the floating reference, converting it to a normal
     * reference by clearing the floating flag while leaving the reference
     * count unchanged.  If the object is not floating, then this call
     * adds a new normal reference increasing the reference count by one.
     * 
     * Since GLib 2.56, the type of `object` will be propagated to the return type
     * under the same conditions as for g_object_ref().
     */
    ref_sink(): GObject.Object
    /**
     * Releases all references to other objects. This can be used to break
     * reference cycles.
     * 
     * This function should only be called from object system implementations.
     */
    run_dispose(): void
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
    /**
     * Sets a property on an object.
     * @param property_name the name of the property to set
     * @param value the value
     */
    set_property(property_name: string, value: any): void
    /**
     * Remove a specified datum from the object's data associations,
     * without invoking the association's destroy handler.
     * @param key name of the key
     */
    steal_data(key: string): object | null
    /**
     * This function gets back user data pointers stored via
     * g_object_set_qdata() and removes the `data` from object
     * without invoking its destroy() function (if any was
     * set).
     * Usually, calling this function is only required to update
     * user data pointers with a destroy notifier, for example:
     * 
     * ```c
     * void
     * object_add_to_user_list (GObject     *object,
     *                          const gchar *new_string)
     * {
     *   // the quark, naming the object data
     *   GQuark quark_string_list = g_quark_from_static_string ("my-string-list");
     *   // retrieve the old string list
     *   GList *list = g_object_steal_qdata (object, quark_string_list);
     * 
     *   // prepend new string
     *   list = g_list_prepend (list, g_strdup (new_string));
     *   // this changed 'list', so we need to set it again
     *   g_object_set_qdata_full (object, quark_string_list, list, free_string_list);
     * }
     * static void
     * free_string_list (gpointer data)
     * {
     *   GList *node, *list = data;
     * 
     *   for (node = list; node; node = node->next)
     *     g_free (node->data);
     *   g_list_free (list);
     * }
     * ```
     * 
     * Using g_object_get_qdata() in the above example, instead of
     * g_object_steal_qdata() would have left the destroy function set,
     * and thus the partial string list would have been freed upon
     * g_object_set_qdata_full().
     * @param quark A #GQuark, naming the user data pointer
     */
    steal_qdata(quark: GLib.Quark): object | null
    /**
     * Reverts the effect of a previous call to
     * g_object_freeze_notify(). The freeze count is decreased on `object`
     * and when it reaches zero, queued "notify" signals are emitted.
     * 
     * Duplicate notifications for each property are squashed so that at most one
     * #GObject::notify signal is emitted for each property, in the reverse order
     * in which they have been queued.
     * 
     * It is an error to call this function when the freeze count is zero.
     */
    thaw_notify(): void
    /**
     * Decreases the reference count of `object`. When its reference count
     * drops to 0, the object is finalized (i.e. its memory is freed).
     * 
     * If the pointer to the #GObject may be reused in future (for example, if it is
     * an instance variable of another object), it is recommended to clear the
     * pointer to %NULL rather than retain a dangling pointer to a potentially
     * invalid #GObject instance. Use g_clear_object() for this.
     */
    unref(): void
    /**
     * This function essentially limits the life time of the `closure` to
     * the life time of the object. That is, when the object is finalized,
     * the `closure` is invalidated by calling g_closure_invalidate() on
     * it, in order to prevent invocations of the closure with a finalized
     * (nonexisting) object. Also, g_object_ref() and g_object_unref() are
     * added as marshal guards to the `closure,` to ensure that an extra
     * reference count is held on `object` during invocation of the
     * `closure`.  Usually, this function will be called on closures that
     * use this `object` as closure data.
     * @param closure #GClosure to watch
     */
    watch_closure(closure: Function): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /**
     * Emits a "notify" signal for the property `property_name` on `object`.
     * 
     * When possible, eg. when signaling a property change from within the class
     * that registered the property, you should use g_object_notify_by_pspec()
     * instead.
     * 
     * Note that emission of the notify signal may be blocked with
     * g_object_freeze_notify(). In this case, the signal emissions are queued
     * and will be emitted (in reverse order) when g_object_thaw_notify() is
     * called.
     * @param pspec 
     */
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    /**
     * The notify signal is emitted on an object when one of its properties has
     * its value set through g_object_set_property(), g_object_set(), et al.
     * 
     * Note that getting this signal doesn’t itself guarantee that the value of
     * the property has actually changed. When it is emitted is determined by the
     * derived GObject class. If the implementor did not create the property with
     * %G_PARAM_EXPLICIT_NOTIFY, then any call to g_object_set_property() results
     * in ::notify being emitted, even if the new value is the same as the old.
     * If they did pass %G_PARAM_EXPLICIT_NOTIFY, then this signal is emitted only
     * when they explicitly call g_object_notify() or g_object_notify_by_pspec(),
     * and common practice is to do that only when the value has actually changed.
     * 
     * This signal is typically used to obtain change notification for a
     * single property, by specifying the property name as a detail in the
     * g_signal_connect() call, like this:
     * 
     * 
     * ```c
     * g_signal_connect (text_view->buffer, "notify::paste-target-list",
     *                   G_CALLBACK (gtk_text_view_target_list_notify),
     *                   text_view)
     * ```
     * 
     * 
     * It is important to note that you must use
     * [canonical parameter names][canonical-parameter-names] as
     * detail strings for the notify signal.
     * @param pspec the #GParamSpec of the property which changed.
     */
    connect(sigName: "notify", callback: (($obj: Forward, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Forward, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::answer-count", callback: (($obj: Forward, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::answer-count", callback: (($obj: Forward, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::bounded", callback: (($obj: Forward, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::bounded", callback: (($obj: Forward, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::search-area", callback: (($obj: Forward, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::search-area", callback: (($obj: Forward, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Forward_ConstructProps)
    _init (config?: Forward_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new_for_params(params: GLib.HashTable): Forward
    static new_for_string(str: string): Forward
    static $gtype: GObject.Type
}
interface Location_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of GeocodeGlib-1.0.GeocodeGlib.Location */
    /**
     * The accuracy of this location in meters.
     */
    accuracy?: number
    /**
     * The altitude of this location in meters.
     */
    altitude?: number
    /**
     * The Coordinate Reference System Identification of this location.
     * Only the value 'wgs84' is currently valid.
     */
    crs?: LocationCRS
    /**
     * The description of this location.
     */
    description?: string
    /**
     * The latitude of this location in degrees.
     */
    latitude?: number
    /**
     * The longitude of this location in degrees.
     */
    longitude?: number
    /**
     * A timestamp in seconds since
     * <ulink url="http://en.wikipedia.org/wiki/Unix_epoch">Epoch</ulink>,
     * giving when the location was resolved from an address.
     * 
     * A value of 0 (zero) will be interpreted as the current time.
     */
    timestamp?: number
}
class Location {
    /* Properties of GeocodeGlib-1.0.GeocodeGlib.Location */
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
    description: string
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
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of GeocodeGlib-1.0.GeocodeGlib.Location */
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
     */
    equal(b: Location): boolean
    /**
     * Gets the accuracy (in meters) of location `loc`.
     */
    get_accuracy(): number
    /**
     * Gets the altitude of location `loc`.
     */
    get_altitude(): number
    /**
     * Gets the Coordinate Reference System Identification of location `loc`.
     */
    get_crs(): LocationCRS
    /**
     * Gets the description of location `loc`.
     */
    get_description(): string
    /**
     * Calculates the distance in km, along the curvature of the Earth,
     * between 2 locations. Note that altitude changes are not
     * taken into account.
     * @param locb a #GeocodeLocation
     */
    get_distance_from(locb: Location): number
    /**
     * Gets the latitude of location `loc`.
     */
    get_latitude(): number
    /**
     * Gets the longitude of location `loc`.
     */
    get_longitude(): number
    /**
     * Gets the timestamp (in seconds since the Epoch) of location `loc`. See
     * #GeocodeLocation:timestamp.
     */
    get_timestamp(): number
    /**
     * Sets the description of `loc` to `description`.
     * @param description a description for the location
     */
    set_description(description: string): void
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
     */
    set_from_uri(uri: string): boolean
    /**
     * Creates a URI representing `loc` in the scheme specified in `scheme`.
     * @param scheme the scheme of the requested URI
     */
    to_uri(scheme: LocationURIScheme): string
    /* Methods of GObject-2.0.GObject.Object */
    /**
     * Creates a binding between `source_property` on `source` and `target_property`
     * on `target`.
     * 
     * Whenever the `source_property` is changed the `target_property` is
     * updated using the same value. For instance:
     * 
     * 
     * ```c
     *   g_object_bind_property (action, "active", widget, "sensitive", 0);
     * ```
     * 
     * 
     * Will result in the "sensitive" property of the widget #GObject instance to be
     * updated with the same value of the "active" property of the action #GObject
     * instance.
     * 
     * If `flags` contains %G_BINDING_BIDIRECTIONAL then the binding will be mutual:
     * if `target_property` on `target` changes then the `source_property` on `source`
     * will be updated as well.
     * 
     * The binding will automatically be removed when either the `source` or the
     * `target` instances are finalized. To remove the binding without affecting the
     * `source` and the `target` you can just call g_object_unref() on the returned
     * #GBinding instance.
     * 
     * Removing the binding by calling g_object_unref() on it must only be done if
     * the binding, `source` and `target` are only used from a single thread and it
     * is clear that both `source` and `target` outlive the binding. Especially it
     * is not safe to rely on this if the binding, `source` or `target` can be
     * finalized from different threads. Keep another reference to the binding and
     * use g_binding_unbind() instead to be on the safe side.
     * 
     * A #GObject can have multiple bindings.
     * @param source_property the property on `source` to bind
     * @param target the target #GObject
     * @param target_property the property on `target` to bind
     * @param flags flags to pass to #GBinding
     */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    /**
     * Creates a binding between `source_property` on `source` and `target_property`
     * on `target,` allowing you to set the transformation functions to be used by
     * the binding.
     * 
     * This function is the language bindings friendly version of
     * g_object_bind_property_full(), using #GClosures instead of
     * function pointers.
     * @param source_property the property on `source` to bind
     * @param target the target #GObject
     * @param target_property the property on `target` to bind
     * @param flags flags to pass to #GBinding
     * @param transform_to a #GClosure wrapping the transformation function     from the `source` to the `target,` or %NULL to use the default
     * @param transform_from a #GClosure wrapping the transformation function     from the `target` to the `source,` or %NULL to use the default
     */
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: Function, transform_from: Function): GObject.Binding
    /**
     * This function is intended for #GObject implementations to re-enforce
     * a [floating][floating-ref] object reference. Doing this is seldom
     * required: all #GInitiallyUnowneds are created with a floating reference
     * which usually just needs to be sunken by calling g_object_ref_sink().
     */
    force_floating(): void
    /**
     * Increases the freeze count on `object`. If the freeze count is
     * non-zero, the emission of "notify" signals on `object` is
     * stopped. The signals are queued until the freeze count is decreased
     * to zero. Duplicate notifications are squashed so that at most one
     * #GObject::notify signal is emitted for each property modified while the
     * object is frozen.
     * 
     * This is necessary for accessors that modify multiple properties to prevent
     * premature notification while the object is still being modified.
     */
    freeze_notify(): void
    /**
     * Gets a named field from the objects table of associations (see g_object_set_data()).
     * @param key name of the key for that association
     */
    get_data(key: string): object | null
    /**
     * Gets a property of an object.
     * 
     * The `value` can be:
     * 
     *  - an empty #GValue initialized by %G_VALUE_INIT, which will be
     *    automatically initialized with the expected type of the property
     *    (since GLib 2.60)
     *  - a #GValue initialized with the expected type of the property
     *  - a #GValue initialized with a type to which the expected type
     *    of the property can be transformed
     * 
     * In general, a copy is made of the property contents and the caller is
     * responsible for freeing the memory by calling g_value_unset().
     * 
     * Note that g_object_get_property() is really intended for language
     * bindings, g_object_get() is much more convenient for C programming.
     * @param property_name the name of the property to get
     * @param value return location for the property value
     */
    get_property(property_name: string, value: any): void
    /**
     * This function gets back user data pointers stored via
     * g_object_set_qdata().
     * @param quark A #GQuark, naming the user data pointer
     */
    get_qdata(quark: GLib.Quark): object | null
    /**
     * Gets `n_properties` properties for an `object`.
     * Obtained properties will be set to `values`. All properties must be valid.
     * Warnings will be emitted and undefined behaviour may result if invalid
     * properties are passed in.
     * @param names the names of each property to get
     * @param values the values of each property to get
     */
    getv(names: string[], values: any[]): void
    /**
     * Checks whether `object` has a [floating][floating-ref] reference.
     */
    is_floating(): boolean
    /**
     * Emits a "notify" signal for the property `property_name` on `object`.
     * 
     * When possible, eg. when signaling a property change from within the class
     * that registered the property, you should use g_object_notify_by_pspec()
     * instead.
     * 
     * Note that emission of the notify signal may be blocked with
     * g_object_freeze_notify(). In this case, the signal emissions are queued
     * and will be emitted (in reverse order) when g_object_thaw_notify() is
     * called.
     * @param property_name the name of a property installed on the class of `object`.
     */
    notify(property_name: string): void
    /**
     * Emits a "notify" signal for the property specified by `pspec` on `object`.
     * 
     * This function omits the property name lookup, hence it is faster than
     * g_object_notify().
     * 
     * One way to avoid using g_object_notify() from within the
     * class that registered the properties, and using g_object_notify_by_pspec()
     * instead, is to store the GParamSpec used with
     * g_object_class_install_property() inside a static array, e.g.:
     * 
     * 
     * ```c
     *   enum
     *   {
     *     PROP_0,
     *     PROP_FOO,
     *     PROP_LAST
     *   };
     * 
     *   static GParamSpec *properties[PROP_LAST];
     * 
     *   static void
     *   my_object_class_init (MyObjectClass *klass)
     *   {
     *     properties[PROP_FOO] = g_param_spec_int ("foo", "Foo", "The foo",
     *                                              0, 100,
     *                                              50,
     *                                              G_PARAM_READWRITE);
     *     g_object_class_install_property (gobject_class,
     *                                      PROP_FOO,
     *                                      properties[PROP_FOO]);
     *   }
     * ```
     * 
     * 
     * and then notify a change on the "foo" property with:
     * 
     * 
     * ```c
     *   g_object_notify_by_pspec (self, properties[PROP_FOO]);
     * ```
     * 
     * @param pspec the #GParamSpec of a property installed on the class of `object`.
     */
    notify_by_pspec(pspec: GObject.ParamSpec): void
    /**
     * Increases the reference count of `object`.
     * 
     * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
     * of `object` will be propagated to the return type (using the GCC typeof()
     * extension), so any casting the caller needs to do on the return type must be
     * explicit.
     */
    ref(): GObject.Object
    /**
     * Increase the reference count of `object,` and possibly remove the
     * [floating][floating-ref] reference, if `object` has a floating reference.
     * 
     * In other words, if the object is floating, then this call "assumes
     * ownership" of the floating reference, converting it to a normal
     * reference by clearing the floating flag while leaving the reference
     * count unchanged.  If the object is not floating, then this call
     * adds a new normal reference increasing the reference count by one.
     * 
     * Since GLib 2.56, the type of `object` will be propagated to the return type
     * under the same conditions as for g_object_ref().
     */
    ref_sink(): GObject.Object
    /**
     * Releases all references to other objects. This can be used to break
     * reference cycles.
     * 
     * This function should only be called from object system implementations.
     */
    run_dispose(): void
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
    /**
     * Sets a property on an object.
     * @param property_name the name of the property to set
     * @param value the value
     */
    set_property(property_name: string, value: any): void
    /**
     * Remove a specified datum from the object's data associations,
     * without invoking the association's destroy handler.
     * @param key name of the key
     */
    steal_data(key: string): object | null
    /**
     * This function gets back user data pointers stored via
     * g_object_set_qdata() and removes the `data` from object
     * without invoking its destroy() function (if any was
     * set).
     * Usually, calling this function is only required to update
     * user data pointers with a destroy notifier, for example:
     * 
     * ```c
     * void
     * object_add_to_user_list (GObject     *object,
     *                          const gchar *new_string)
     * {
     *   // the quark, naming the object data
     *   GQuark quark_string_list = g_quark_from_static_string ("my-string-list");
     *   // retrieve the old string list
     *   GList *list = g_object_steal_qdata (object, quark_string_list);
     * 
     *   // prepend new string
     *   list = g_list_prepend (list, g_strdup (new_string));
     *   // this changed 'list', so we need to set it again
     *   g_object_set_qdata_full (object, quark_string_list, list, free_string_list);
     * }
     * static void
     * free_string_list (gpointer data)
     * {
     *   GList *node, *list = data;
     * 
     *   for (node = list; node; node = node->next)
     *     g_free (node->data);
     *   g_list_free (list);
     * }
     * ```
     * 
     * Using g_object_get_qdata() in the above example, instead of
     * g_object_steal_qdata() would have left the destroy function set,
     * and thus the partial string list would have been freed upon
     * g_object_set_qdata_full().
     * @param quark A #GQuark, naming the user data pointer
     */
    steal_qdata(quark: GLib.Quark): object | null
    /**
     * Reverts the effect of a previous call to
     * g_object_freeze_notify(). The freeze count is decreased on `object`
     * and when it reaches zero, queued "notify" signals are emitted.
     * 
     * Duplicate notifications for each property are squashed so that at most one
     * #GObject::notify signal is emitted for each property, in the reverse order
     * in which they have been queued.
     * 
     * It is an error to call this function when the freeze count is zero.
     */
    thaw_notify(): void
    /**
     * Decreases the reference count of `object`. When its reference count
     * drops to 0, the object is finalized (i.e. its memory is freed).
     * 
     * If the pointer to the #GObject may be reused in future (for example, if it is
     * an instance variable of another object), it is recommended to clear the
     * pointer to %NULL rather than retain a dangling pointer to a potentially
     * invalid #GObject instance. Use g_clear_object() for this.
     */
    unref(): void
    /**
     * This function essentially limits the life time of the `closure` to
     * the life time of the object. That is, when the object is finalized,
     * the `closure` is invalidated by calling g_closure_invalidate() on
     * it, in order to prevent invocations of the closure with a finalized
     * (nonexisting) object. Also, g_object_ref() and g_object_unref() are
     * added as marshal guards to the `closure,` to ensure that an extra
     * reference count is held on `object` during invocation of the
     * `closure`.  Usually, this function will be called on closures that
     * use this `object` as closure data.
     * @param closure #GClosure to watch
     */
    watch_closure(closure: Function): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /**
     * Emits a "notify" signal for the property `property_name` on `object`.
     * 
     * When possible, eg. when signaling a property change from within the class
     * that registered the property, you should use g_object_notify_by_pspec()
     * instead.
     * 
     * Note that emission of the notify signal may be blocked with
     * g_object_freeze_notify(). In this case, the signal emissions are queued
     * and will be emitted (in reverse order) when g_object_thaw_notify() is
     * called.
     * @param pspec 
     */
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    /**
     * The notify signal is emitted on an object when one of its properties has
     * its value set through g_object_set_property(), g_object_set(), et al.
     * 
     * Note that getting this signal doesn’t itself guarantee that the value of
     * the property has actually changed. When it is emitted is determined by the
     * derived GObject class. If the implementor did not create the property with
     * %G_PARAM_EXPLICIT_NOTIFY, then any call to g_object_set_property() results
     * in ::notify being emitted, even if the new value is the same as the old.
     * If they did pass %G_PARAM_EXPLICIT_NOTIFY, then this signal is emitted only
     * when they explicitly call g_object_notify() or g_object_notify_by_pspec(),
     * and common practice is to do that only when the value has actually changed.
     * 
     * This signal is typically used to obtain change notification for a
     * single property, by specifying the property name as a detail in the
     * g_signal_connect() call, like this:
     * 
     * 
     * ```c
     * g_signal_connect (text_view->buffer, "notify::paste-target-list",
     *                   G_CALLBACK (gtk_text_view_target_list_notify),
     *                   text_view)
     * ```
     * 
     * 
     * It is important to note that you must use
     * [canonical parameter names][canonical-parameter-names] as
     * detail strings for the notify signal.
     * @param pspec the #GParamSpec of the property which changed.
     */
    connect(sigName: "notify", callback: (($obj: Location, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Location, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::accuracy", callback: (($obj: Location, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accuracy", callback: (($obj: Location, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::altitude", callback: (($obj: Location, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::altitude", callback: (($obj: Location, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::crs", callback: (($obj: Location, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::crs", callback: (($obj: Location, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::description", callback: (($obj: Location, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::description", callback: (($obj: Location, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::latitude", callback: (($obj: Location, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::latitude", callback: (($obj: Location, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::longitude", callback: (($obj: Location, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::longitude", callback: (($obj: Location, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::timestamp", callback: (($obj: Location, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::timestamp", callback: (($obj: Location, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Location_ConstructProps)
    _init (config?: Location_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(latitude: number, longitude: number, accuracy: number): Location
    static new_with_description(latitude: number, longitude: number, accuracy: number, description: string): Location
    static $gtype: GObject.Type
}
interface MockBackend_ConstructProps extends GObject.Object_ConstructProps {
}
class MockBackend {
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of GeocodeGlib-1.0.GeocodeGlib.MockBackend */
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
    add_forward_result(params: GLib.HashTable, results?: Place[] | null, error?: GLib.Error | null): void
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
    add_reverse_result(params: GLib.HashTable, results?: Place[] | null, error?: GLib.Error | null): void
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
     */
    get_query_log(): MockBackendQuery[]
    /* Methods of GObject-2.0.GObject.Object */
    /**
     * Creates a binding between `source_property` on `source` and `target_property`
     * on `target`.
     * 
     * Whenever the `source_property` is changed the `target_property` is
     * updated using the same value. For instance:
     * 
     * 
     * ```c
     *   g_object_bind_property (action, "active", widget, "sensitive", 0);
     * ```
     * 
     * 
     * Will result in the "sensitive" property of the widget #GObject instance to be
     * updated with the same value of the "active" property of the action #GObject
     * instance.
     * 
     * If `flags` contains %G_BINDING_BIDIRECTIONAL then the binding will be mutual:
     * if `target_property` on `target` changes then the `source_property` on `source`
     * will be updated as well.
     * 
     * The binding will automatically be removed when either the `source` or the
     * `target` instances are finalized. To remove the binding without affecting the
     * `source` and the `target` you can just call g_object_unref() on the returned
     * #GBinding instance.
     * 
     * Removing the binding by calling g_object_unref() on it must only be done if
     * the binding, `source` and `target` are only used from a single thread and it
     * is clear that both `source` and `target` outlive the binding. Especially it
     * is not safe to rely on this if the binding, `source` or `target` can be
     * finalized from different threads. Keep another reference to the binding and
     * use g_binding_unbind() instead to be on the safe side.
     * 
     * A #GObject can have multiple bindings.
     * @param source_property the property on `source` to bind
     * @param target the target #GObject
     * @param target_property the property on `target` to bind
     * @param flags flags to pass to #GBinding
     */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    /**
     * Creates a binding between `source_property` on `source` and `target_property`
     * on `target,` allowing you to set the transformation functions to be used by
     * the binding.
     * 
     * This function is the language bindings friendly version of
     * g_object_bind_property_full(), using #GClosures instead of
     * function pointers.
     * @param source_property the property on `source` to bind
     * @param target the target #GObject
     * @param target_property the property on `target` to bind
     * @param flags flags to pass to #GBinding
     * @param transform_to a #GClosure wrapping the transformation function     from the `source` to the `target,` or %NULL to use the default
     * @param transform_from a #GClosure wrapping the transformation function     from the `target` to the `source,` or %NULL to use the default
     */
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: Function, transform_from: Function): GObject.Binding
    /**
     * This function is intended for #GObject implementations to re-enforce
     * a [floating][floating-ref] object reference. Doing this is seldom
     * required: all #GInitiallyUnowneds are created with a floating reference
     * which usually just needs to be sunken by calling g_object_ref_sink().
     */
    force_floating(): void
    /**
     * Increases the freeze count on `object`. If the freeze count is
     * non-zero, the emission of "notify" signals on `object` is
     * stopped. The signals are queued until the freeze count is decreased
     * to zero. Duplicate notifications are squashed so that at most one
     * #GObject::notify signal is emitted for each property modified while the
     * object is frozen.
     * 
     * This is necessary for accessors that modify multiple properties to prevent
     * premature notification while the object is still being modified.
     */
    freeze_notify(): void
    /**
     * Gets a named field from the objects table of associations (see g_object_set_data()).
     * @param key name of the key for that association
     */
    get_data(key: string): object | null
    /**
     * Gets a property of an object.
     * 
     * The `value` can be:
     * 
     *  - an empty #GValue initialized by %G_VALUE_INIT, which will be
     *    automatically initialized with the expected type of the property
     *    (since GLib 2.60)
     *  - a #GValue initialized with the expected type of the property
     *  - a #GValue initialized with a type to which the expected type
     *    of the property can be transformed
     * 
     * In general, a copy is made of the property contents and the caller is
     * responsible for freeing the memory by calling g_value_unset().
     * 
     * Note that g_object_get_property() is really intended for language
     * bindings, g_object_get() is much more convenient for C programming.
     * @param property_name the name of the property to get
     * @param value return location for the property value
     */
    get_property(property_name: string, value: any): void
    /**
     * This function gets back user data pointers stored via
     * g_object_set_qdata().
     * @param quark A #GQuark, naming the user data pointer
     */
    get_qdata(quark: GLib.Quark): object | null
    /**
     * Gets `n_properties` properties for an `object`.
     * Obtained properties will be set to `values`. All properties must be valid.
     * Warnings will be emitted and undefined behaviour may result if invalid
     * properties are passed in.
     * @param names the names of each property to get
     * @param values the values of each property to get
     */
    getv(names: string[], values: any[]): void
    /**
     * Checks whether `object` has a [floating][floating-ref] reference.
     */
    is_floating(): boolean
    /**
     * Emits a "notify" signal for the property `property_name` on `object`.
     * 
     * When possible, eg. when signaling a property change from within the class
     * that registered the property, you should use g_object_notify_by_pspec()
     * instead.
     * 
     * Note that emission of the notify signal may be blocked with
     * g_object_freeze_notify(). In this case, the signal emissions are queued
     * and will be emitted (in reverse order) when g_object_thaw_notify() is
     * called.
     * @param property_name the name of a property installed on the class of `object`.
     */
    notify(property_name: string): void
    /**
     * Emits a "notify" signal for the property specified by `pspec` on `object`.
     * 
     * This function omits the property name lookup, hence it is faster than
     * g_object_notify().
     * 
     * One way to avoid using g_object_notify() from within the
     * class that registered the properties, and using g_object_notify_by_pspec()
     * instead, is to store the GParamSpec used with
     * g_object_class_install_property() inside a static array, e.g.:
     * 
     * 
     * ```c
     *   enum
     *   {
     *     PROP_0,
     *     PROP_FOO,
     *     PROP_LAST
     *   };
     * 
     *   static GParamSpec *properties[PROP_LAST];
     * 
     *   static void
     *   my_object_class_init (MyObjectClass *klass)
     *   {
     *     properties[PROP_FOO] = g_param_spec_int ("foo", "Foo", "The foo",
     *                                              0, 100,
     *                                              50,
     *                                              G_PARAM_READWRITE);
     *     g_object_class_install_property (gobject_class,
     *                                      PROP_FOO,
     *                                      properties[PROP_FOO]);
     *   }
     * ```
     * 
     * 
     * and then notify a change on the "foo" property with:
     * 
     * 
     * ```c
     *   g_object_notify_by_pspec (self, properties[PROP_FOO]);
     * ```
     * 
     * @param pspec the #GParamSpec of a property installed on the class of `object`.
     */
    notify_by_pspec(pspec: GObject.ParamSpec): void
    /**
     * Increases the reference count of `object`.
     * 
     * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
     * of `object` will be propagated to the return type (using the GCC typeof()
     * extension), so any casting the caller needs to do on the return type must be
     * explicit.
     */
    ref(): GObject.Object
    /**
     * Increase the reference count of `object,` and possibly remove the
     * [floating][floating-ref] reference, if `object` has a floating reference.
     * 
     * In other words, if the object is floating, then this call "assumes
     * ownership" of the floating reference, converting it to a normal
     * reference by clearing the floating flag while leaving the reference
     * count unchanged.  If the object is not floating, then this call
     * adds a new normal reference increasing the reference count by one.
     * 
     * Since GLib 2.56, the type of `object` will be propagated to the return type
     * under the same conditions as for g_object_ref().
     */
    ref_sink(): GObject.Object
    /**
     * Releases all references to other objects. This can be used to break
     * reference cycles.
     * 
     * This function should only be called from object system implementations.
     */
    run_dispose(): void
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
    /**
     * Sets a property on an object.
     * @param property_name the name of the property to set
     * @param value the value
     */
    set_property(property_name: string, value: any): void
    /**
     * Remove a specified datum from the object's data associations,
     * without invoking the association's destroy handler.
     * @param key name of the key
     */
    steal_data(key: string): object | null
    /**
     * This function gets back user data pointers stored via
     * g_object_set_qdata() and removes the `data` from object
     * without invoking its destroy() function (if any was
     * set).
     * Usually, calling this function is only required to update
     * user data pointers with a destroy notifier, for example:
     * 
     * ```c
     * void
     * object_add_to_user_list (GObject     *object,
     *                          const gchar *new_string)
     * {
     *   // the quark, naming the object data
     *   GQuark quark_string_list = g_quark_from_static_string ("my-string-list");
     *   // retrieve the old string list
     *   GList *list = g_object_steal_qdata (object, quark_string_list);
     * 
     *   // prepend new string
     *   list = g_list_prepend (list, g_strdup (new_string));
     *   // this changed 'list', so we need to set it again
     *   g_object_set_qdata_full (object, quark_string_list, list, free_string_list);
     * }
     * static void
     * free_string_list (gpointer data)
     * {
     *   GList *node, *list = data;
     * 
     *   for (node = list; node; node = node->next)
     *     g_free (node->data);
     *   g_list_free (list);
     * }
     * ```
     * 
     * Using g_object_get_qdata() in the above example, instead of
     * g_object_steal_qdata() would have left the destroy function set,
     * and thus the partial string list would have been freed upon
     * g_object_set_qdata_full().
     * @param quark A #GQuark, naming the user data pointer
     */
    steal_qdata(quark: GLib.Quark): object | null
    /**
     * Reverts the effect of a previous call to
     * g_object_freeze_notify(). The freeze count is decreased on `object`
     * and when it reaches zero, queued "notify" signals are emitted.
     * 
     * Duplicate notifications for each property are squashed so that at most one
     * #GObject::notify signal is emitted for each property, in the reverse order
     * in which they have been queued.
     * 
     * It is an error to call this function when the freeze count is zero.
     */
    thaw_notify(): void
    /**
     * Decreases the reference count of `object`. When its reference count
     * drops to 0, the object is finalized (i.e. its memory is freed).
     * 
     * If the pointer to the #GObject may be reused in future (for example, if it is
     * an instance variable of another object), it is recommended to clear the
     * pointer to %NULL rather than retain a dangling pointer to a potentially
     * invalid #GObject instance. Use g_clear_object() for this.
     */
    unref(): void
    /**
     * This function essentially limits the life time of the `closure` to
     * the life time of the object. That is, when the object is finalized,
     * the `closure` is invalidated by calling g_closure_invalidate() on
     * it, in order to prevent invocations of the closure with a finalized
     * (nonexisting) object. Also, g_object_ref() and g_object_unref() are
     * added as marshal guards to the `closure,` to ensure that an extra
     * reference count is held on `object` during invocation of the
     * `closure`.  Usually, this function will be called on closures that
     * use this `object` as closure data.
     * @param closure #GClosure to watch
     */
    watch_closure(closure: Function): void
    /* Methods of GeocodeGlib-1.0.GeocodeGlib.Backend */
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
    forward_search(params: GLib.HashTable, cancellable?: Gio.Cancellable | null): Place[]
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
    forward_search_async(params: GLib.HashTable, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes a forward geocoding operation. See
     * geocode_backend_forward_search_async().
     * @param result a #GAsyncResult.
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
     */
    reverse_resolve(params: GLib.HashTable, cancellable?: Gio.Cancellable | null): Place[]
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
    reverse_resolve_async(params: GLib.HashTable, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes a reverse geocoding operation. See geocode_backend_reverse_resolve_async().
     * @param result a #GAsyncResult.
     */
    reverse_resolve_finish(result: Gio.AsyncResult): Place[]
    /* Virtual methods of GeocodeGlib-1.0.GeocodeGlib.MockBackend */
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
    vfunc_forward_search(params: GLib.HashTable, cancellable?: Gio.Cancellable | null): Place[]
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
    vfunc_forward_search_async(params: GLib.HashTable, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes a forward geocoding operation. See
     * geocode_backend_forward_search_async().
     * @param result a #GAsyncResult.
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
     * @param params a #GHashTable with string keys, and #GValue values.
     * @param cancellable optional #GCancellable object, %NULL to ignore.
     */
    vfunc_reverse_resolve(params: GLib.HashTable, cancellable?: Gio.Cancellable | null): Place[]
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
    vfunc_reverse_resolve_async(params: GLib.HashTable, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes a reverse geocoding operation. See geocode_backend_reverse_resolve_async().
     * @param result a #GAsyncResult.
     */
    vfunc_reverse_resolve_finish(result: Gio.AsyncResult): Place[]
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /**
     * Emits a "notify" signal for the property `property_name` on `object`.
     * 
     * When possible, eg. when signaling a property change from within the class
     * that registered the property, you should use g_object_notify_by_pspec()
     * instead.
     * 
     * Note that emission of the notify signal may be blocked with
     * g_object_freeze_notify(). In this case, the signal emissions are queued
     * and will be emitted (in reverse order) when g_object_thaw_notify() is
     * called.
     * @param pspec 
     */
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    /**
     * The notify signal is emitted on an object when one of its properties has
     * its value set through g_object_set_property(), g_object_set(), et al.
     * 
     * Note that getting this signal doesn’t itself guarantee that the value of
     * the property has actually changed. When it is emitted is determined by the
     * derived GObject class. If the implementor did not create the property with
     * %G_PARAM_EXPLICIT_NOTIFY, then any call to g_object_set_property() results
     * in ::notify being emitted, even if the new value is the same as the old.
     * If they did pass %G_PARAM_EXPLICIT_NOTIFY, then this signal is emitted only
     * when they explicitly call g_object_notify() or g_object_notify_by_pspec(),
     * and common practice is to do that only when the value has actually changed.
     * 
     * This signal is typically used to obtain change notification for a
     * single property, by specifying the property name as a detail in the
     * g_signal_connect() call, like this:
     * 
     * 
     * ```c
     * g_signal_connect (text_view->buffer, "notify::paste-target-list",
     *                   G_CALLBACK (gtk_text_view_target_list_notify),
     *                   text_view)
     * ```
     * 
     * 
     * It is important to note that you must use
     * [canonical parameter names][canonical-parameter-names] as
     * detail strings for the notify signal.
     * @param pspec the #GParamSpec of the property which changed.
     */
    connect(sigName: "notify", callback: (($obj: MockBackend, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: MockBackend, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: MockBackend_ConstructProps)
    _init (config?: MockBackend_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): MockBackend
    static $gtype: GObject.Type
}
interface Nominatim_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of GeocodeGlib-1.0.GeocodeGlib.Nominatim */
    /**
     * The base URL of the Nominatim service, for example
     * `https://nominatim.example.org`.
     */
    base_url?: string
    /**
     * E-mail address of the maintainer of the software making the
     * geocoding requests to the  Nominatim server. This is used to contact
     * them in the event of a problem with their usage. See
     * [the Nominatim API](http://wiki.openstreetmap.org/wiki/Nominatim).
     */
    maintainer_email_address?: string
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
    user_agent?: string
}
class Nominatim {
    /* Properties of GeocodeGlib-1.0.GeocodeGlib.Nominatim */
    /**
     * The base URL of the Nominatim service, for example
     * `https://nominatim.example.org`.
     */
    readonly base_url: string
    /**
     * E-mail address of the maintainer of the software making the
     * geocoding requests to the  Nominatim server. This is used to contact
     * them in the event of a problem with their usage. See
     * [the Nominatim API](http://wiki.openstreetmap.org/wiki/Nominatim).
     */
    readonly maintainer_email_address: string
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
    user_agent: string
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of GObject-2.0.GObject.Object */
    /**
     * Creates a binding between `source_property` on `source` and `target_property`
     * on `target`.
     * 
     * Whenever the `source_property` is changed the `target_property` is
     * updated using the same value. For instance:
     * 
     * 
     * ```c
     *   g_object_bind_property (action, "active", widget, "sensitive", 0);
     * ```
     * 
     * 
     * Will result in the "sensitive" property of the widget #GObject instance to be
     * updated with the same value of the "active" property of the action #GObject
     * instance.
     * 
     * If `flags` contains %G_BINDING_BIDIRECTIONAL then the binding will be mutual:
     * if `target_property` on `target` changes then the `source_property` on `source`
     * will be updated as well.
     * 
     * The binding will automatically be removed when either the `source` or the
     * `target` instances are finalized. To remove the binding without affecting the
     * `source` and the `target` you can just call g_object_unref() on the returned
     * #GBinding instance.
     * 
     * Removing the binding by calling g_object_unref() on it must only be done if
     * the binding, `source` and `target` are only used from a single thread and it
     * is clear that both `source` and `target` outlive the binding. Especially it
     * is not safe to rely on this if the binding, `source` or `target` can be
     * finalized from different threads. Keep another reference to the binding and
     * use g_binding_unbind() instead to be on the safe side.
     * 
     * A #GObject can have multiple bindings.
     * @param source_property the property on `source` to bind
     * @param target the target #GObject
     * @param target_property the property on `target` to bind
     * @param flags flags to pass to #GBinding
     */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    /**
     * Creates a binding between `source_property` on `source` and `target_property`
     * on `target,` allowing you to set the transformation functions to be used by
     * the binding.
     * 
     * This function is the language bindings friendly version of
     * g_object_bind_property_full(), using #GClosures instead of
     * function pointers.
     * @param source_property the property on `source` to bind
     * @param target the target #GObject
     * @param target_property the property on `target` to bind
     * @param flags flags to pass to #GBinding
     * @param transform_to a #GClosure wrapping the transformation function     from the `source` to the `target,` or %NULL to use the default
     * @param transform_from a #GClosure wrapping the transformation function     from the `target` to the `source,` or %NULL to use the default
     */
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: Function, transform_from: Function): GObject.Binding
    /**
     * This function is intended for #GObject implementations to re-enforce
     * a [floating][floating-ref] object reference. Doing this is seldom
     * required: all #GInitiallyUnowneds are created with a floating reference
     * which usually just needs to be sunken by calling g_object_ref_sink().
     */
    force_floating(): void
    /**
     * Increases the freeze count on `object`. If the freeze count is
     * non-zero, the emission of "notify" signals on `object` is
     * stopped. The signals are queued until the freeze count is decreased
     * to zero. Duplicate notifications are squashed so that at most one
     * #GObject::notify signal is emitted for each property modified while the
     * object is frozen.
     * 
     * This is necessary for accessors that modify multiple properties to prevent
     * premature notification while the object is still being modified.
     */
    freeze_notify(): void
    /**
     * Gets a named field from the objects table of associations (see g_object_set_data()).
     * @param key name of the key for that association
     */
    get_data(key: string): object | null
    /**
     * Gets a property of an object.
     * 
     * The `value` can be:
     * 
     *  - an empty #GValue initialized by %G_VALUE_INIT, which will be
     *    automatically initialized with the expected type of the property
     *    (since GLib 2.60)
     *  - a #GValue initialized with the expected type of the property
     *  - a #GValue initialized with a type to which the expected type
     *    of the property can be transformed
     * 
     * In general, a copy is made of the property contents and the caller is
     * responsible for freeing the memory by calling g_value_unset().
     * 
     * Note that g_object_get_property() is really intended for language
     * bindings, g_object_get() is much more convenient for C programming.
     * @param property_name the name of the property to get
     * @param value return location for the property value
     */
    get_property(property_name: string, value: any): void
    /**
     * This function gets back user data pointers stored via
     * g_object_set_qdata().
     * @param quark A #GQuark, naming the user data pointer
     */
    get_qdata(quark: GLib.Quark): object | null
    /**
     * Gets `n_properties` properties for an `object`.
     * Obtained properties will be set to `values`. All properties must be valid.
     * Warnings will be emitted and undefined behaviour may result if invalid
     * properties are passed in.
     * @param names the names of each property to get
     * @param values the values of each property to get
     */
    getv(names: string[], values: any[]): void
    /**
     * Checks whether `object` has a [floating][floating-ref] reference.
     */
    is_floating(): boolean
    /**
     * Emits a "notify" signal for the property `property_name` on `object`.
     * 
     * When possible, eg. when signaling a property change from within the class
     * that registered the property, you should use g_object_notify_by_pspec()
     * instead.
     * 
     * Note that emission of the notify signal may be blocked with
     * g_object_freeze_notify(). In this case, the signal emissions are queued
     * and will be emitted (in reverse order) when g_object_thaw_notify() is
     * called.
     * @param property_name the name of a property installed on the class of `object`.
     */
    notify(property_name: string): void
    /**
     * Emits a "notify" signal for the property specified by `pspec` on `object`.
     * 
     * This function omits the property name lookup, hence it is faster than
     * g_object_notify().
     * 
     * One way to avoid using g_object_notify() from within the
     * class that registered the properties, and using g_object_notify_by_pspec()
     * instead, is to store the GParamSpec used with
     * g_object_class_install_property() inside a static array, e.g.:
     * 
     * 
     * ```c
     *   enum
     *   {
     *     PROP_0,
     *     PROP_FOO,
     *     PROP_LAST
     *   };
     * 
     *   static GParamSpec *properties[PROP_LAST];
     * 
     *   static void
     *   my_object_class_init (MyObjectClass *klass)
     *   {
     *     properties[PROP_FOO] = g_param_spec_int ("foo", "Foo", "The foo",
     *                                              0, 100,
     *                                              50,
     *                                              G_PARAM_READWRITE);
     *     g_object_class_install_property (gobject_class,
     *                                      PROP_FOO,
     *                                      properties[PROP_FOO]);
     *   }
     * ```
     * 
     * 
     * and then notify a change on the "foo" property with:
     * 
     * 
     * ```c
     *   g_object_notify_by_pspec (self, properties[PROP_FOO]);
     * ```
     * 
     * @param pspec the #GParamSpec of a property installed on the class of `object`.
     */
    notify_by_pspec(pspec: GObject.ParamSpec): void
    /**
     * Increases the reference count of `object`.
     * 
     * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
     * of `object` will be propagated to the return type (using the GCC typeof()
     * extension), so any casting the caller needs to do on the return type must be
     * explicit.
     */
    ref(): GObject.Object
    /**
     * Increase the reference count of `object,` and possibly remove the
     * [floating][floating-ref] reference, if `object` has a floating reference.
     * 
     * In other words, if the object is floating, then this call "assumes
     * ownership" of the floating reference, converting it to a normal
     * reference by clearing the floating flag while leaving the reference
     * count unchanged.  If the object is not floating, then this call
     * adds a new normal reference increasing the reference count by one.
     * 
     * Since GLib 2.56, the type of `object` will be propagated to the return type
     * under the same conditions as for g_object_ref().
     */
    ref_sink(): GObject.Object
    /**
     * Releases all references to other objects. This can be used to break
     * reference cycles.
     * 
     * This function should only be called from object system implementations.
     */
    run_dispose(): void
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
    /**
     * Sets a property on an object.
     * @param property_name the name of the property to set
     * @param value the value
     */
    set_property(property_name: string, value: any): void
    /**
     * Remove a specified datum from the object's data associations,
     * without invoking the association's destroy handler.
     * @param key name of the key
     */
    steal_data(key: string): object | null
    /**
     * This function gets back user data pointers stored via
     * g_object_set_qdata() and removes the `data` from object
     * without invoking its destroy() function (if any was
     * set).
     * Usually, calling this function is only required to update
     * user data pointers with a destroy notifier, for example:
     * 
     * ```c
     * void
     * object_add_to_user_list (GObject     *object,
     *                          const gchar *new_string)
     * {
     *   // the quark, naming the object data
     *   GQuark quark_string_list = g_quark_from_static_string ("my-string-list");
     *   // retrieve the old string list
     *   GList *list = g_object_steal_qdata (object, quark_string_list);
     * 
     *   // prepend new string
     *   list = g_list_prepend (list, g_strdup (new_string));
     *   // this changed 'list', so we need to set it again
     *   g_object_set_qdata_full (object, quark_string_list, list, free_string_list);
     * }
     * static void
     * free_string_list (gpointer data)
     * {
     *   GList *node, *list = data;
     * 
     *   for (node = list; node; node = node->next)
     *     g_free (node->data);
     *   g_list_free (list);
     * }
     * ```
     * 
     * Using g_object_get_qdata() in the above example, instead of
     * g_object_steal_qdata() would have left the destroy function set,
     * and thus the partial string list would have been freed upon
     * g_object_set_qdata_full().
     * @param quark A #GQuark, naming the user data pointer
     */
    steal_qdata(quark: GLib.Quark): object | null
    /**
     * Reverts the effect of a previous call to
     * g_object_freeze_notify(). The freeze count is decreased on `object`
     * and when it reaches zero, queued "notify" signals are emitted.
     * 
     * Duplicate notifications for each property are squashed so that at most one
     * #GObject::notify signal is emitted for each property, in the reverse order
     * in which they have been queued.
     * 
     * It is an error to call this function when the freeze count is zero.
     */
    thaw_notify(): void
    /**
     * Decreases the reference count of `object`. When its reference count
     * drops to 0, the object is finalized (i.e. its memory is freed).
     * 
     * If the pointer to the #GObject may be reused in future (for example, if it is
     * an instance variable of another object), it is recommended to clear the
     * pointer to %NULL rather than retain a dangling pointer to a potentially
     * invalid #GObject instance. Use g_clear_object() for this.
     */
    unref(): void
    /**
     * This function essentially limits the life time of the `closure` to
     * the life time of the object. That is, when the object is finalized,
     * the `closure` is invalidated by calling g_closure_invalidate() on
     * it, in order to prevent invocations of the closure with a finalized
     * (nonexisting) object. Also, g_object_ref() and g_object_unref() are
     * added as marshal guards to the `closure,` to ensure that an extra
     * reference count is held on `object` during invocation of the
     * `closure`.  Usually, this function will be called on closures that
     * use this `object` as closure data.
     * @param closure #GClosure to watch
     */
    watch_closure(closure: Function): void
    /* Methods of GeocodeGlib-1.0.GeocodeGlib.Backend */
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
    forward_search(params: GLib.HashTable, cancellable?: Gio.Cancellable | null): Place[]
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
    forward_search_async(params: GLib.HashTable, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes a forward geocoding operation. See
     * geocode_backend_forward_search_async().
     * @param result a #GAsyncResult.
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
     */
    reverse_resolve(params: GLib.HashTable, cancellable?: Gio.Cancellable | null): Place[]
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
    reverse_resolve_async(params: GLib.HashTable, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes a reverse geocoding operation. See geocode_backend_reverse_resolve_async().
     * @param result a #GAsyncResult.
     */
    reverse_resolve_finish(result: Gio.AsyncResult): Place[]
    /* Virtual methods of GeocodeGlib-1.0.GeocodeGlib.Nominatim */
    vfunc_query(uri: string, cancellable?: Gio.Cancellable | null): string
    vfunc_query_async(uri: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    vfunc_query_finish(res: Gio.AsyncResult): string
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
    vfunc_forward_search(params: GLib.HashTable, cancellable?: Gio.Cancellable | null): Place[]
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
    vfunc_forward_search_async(params: GLib.HashTable, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes a forward geocoding operation. See
     * geocode_backend_forward_search_async().
     * @param result a #GAsyncResult.
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
     * @param params a #GHashTable with string keys, and #GValue values.
     * @param cancellable optional #GCancellable object, %NULL to ignore.
     */
    vfunc_reverse_resolve(params: GLib.HashTable, cancellable?: Gio.Cancellable | null): Place[]
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
    vfunc_reverse_resolve_async(params: GLib.HashTable, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes a reverse geocoding operation. See geocode_backend_reverse_resolve_async().
     * @param result a #GAsyncResult.
     */
    vfunc_reverse_resolve_finish(result: Gio.AsyncResult): Place[]
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /**
     * Emits a "notify" signal for the property `property_name` on `object`.
     * 
     * When possible, eg. when signaling a property change from within the class
     * that registered the property, you should use g_object_notify_by_pspec()
     * instead.
     * 
     * Note that emission of the notify signal may be blocked with
     * g_object_freeze_notify(). In this case, the signal emissions are queued
     * and will be emitted (in reverse order) when g_object_thaw_notify() is
     * called.
     * @param pspec 
     */
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    /**
     * The notify signal is emitted on an object when one of its properties has
     * its value set through g_object_set_property(), g_object_set(), et al.
     * 
     * Note that getting this signal doesn’t itself guarantee that the value of
     * the property has actually changed. When it is emitted is determined by the
     * derived GObject class. If the implementor did not create the property with
     * %G_PARAM_EXPLICIT_NOTIFY, then any call to g_object_set_property() results
     * in ::notify being emitted, even if the new value is the same as the old.
     * If they did pass %G_PARAM_EXPLICIT_NOTIFY, then this signal is emitted only
     * when they explicitly call g_object_notify() or g_object_notify_by_pspec(),
     * and common practice is to do that only when the value has actually changed.
     * 
     * This signal is typically used to obtain change notification for a
     * single property, by specifying the property name as a detail in the
     * g_signal_connect() call, like this:
     * 
     * 
     * ```c
     * g_signal_connect (text_view->buffer, "notify::paste-target-list",
     *                   G_CALLBACK (gtk_text_view_target_list_notify),
     *                   text_view)
     * ```
     * 
     * 
     * It is important to note that you must use
     * [canonical parameter names][canonical-parameter-names] as
     * detail strings for the notify signal.
     * @param pspec the #GParamSpec of the property which changed.
     */
    connect(sigName: "notify", callback: (($obj: Nominatim, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Nominatim, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::base-url", callback: (($obj: Nominatim, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::base-url", callback: (($obj: Nominatim, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::maintainer-email-address", callback: (($obj: Nominatim, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::maintainer-email-address", callback: (($obj: Nominatim, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::user-agent", callback: (($obj: Nominatim, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::user-agent", callback: (($obj: Nominatim, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Nominatim_ConstructProps)
    _init (config?: Nominatim_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(base_url: string, maintainer_email_address: string): Nominatim
    /**
     * Gets a reference to the default Nominatim server on nominatim.gnome.org.
     * 
     * This function is thread-safe.
     */
    static get_gnome(): Nominatim
    static $gtype: GObject.Type
}
interface Place_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of GeocodeGlib-1.0.GeocodeGlib.Place */
    /**
     * The local administrative area.
     */
    administrative_area?: string
    /**
     * A named area such as a campus or neighborhood.
     */
    area?: string
    /**
     * The bounding box for the place.
     */
    bounding_box?: BoundingBox
    /**
     * A specific building on a street or in an area.
     */
    building?: string
    /**
     * The continent.
     */
    continent?: string
    /**
     * The country.
     */
    country?: string
    /**
     * The country code.
     */
    country_code?: string
    /**
     * The county.
     */
    county?: string
    /**
     * The location info for the place.
     */
    location?: Location
    /**
     * The name of the place.
     */
    name?: string
    /**
     * The OpenStreetMap id of the place.
     */
    osm_id?: string
    /**
     * The OpenStreetMap type of the place.
     */
    osm_type?: PlaceOsmType
    /**
     * The type of the place.
     */
    place_type?: PlaceType
    /**
     * The postal code.
     */
    postal_code?: string
    /**
     * The state.
     */
    state?: string
    /**
     * The street name.
     */
    street?: string
    /**
     * The street address.
     */
    street_address?: string
    /**
     * The town.
     */
    town?: string
}
class Place {
    /* Properties of GeocodeGlib-1.0.GeocodeGlib.Place */
    /**
     * The local administrative area.
     */
    administrative_area: string
    /**
     * A named area such as a campus or neighborhood.
     */
    area: string
    /**
     * The bounding box for the place.
     */
    bounding_box: BoundingBox
    /**
     * A specific building on a street or in an area.
     */
    building: string
    /**
     * The continent.
     */
    continent: string
    /**
     * The country.
     */
    country: string
    /**
     * The country code.
     */
    country_code: string
    /**
     * The county.
     */
    county: string
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
    name: string
    /**
     * The OpenStreetMap id of the place.
     */
    osm_id: string
    /**
     * The OpenStreetMap type of the place.
     */
    osm_type: PlaceOsmType
    /**
     * The type of the place.
     */
    readonly place_type: PlaceType
    /**
     * The postal code.
     */
    postal_code: string
    /**
     * The state.
     */
    state: string
    /**
     * The street name.
     */
    street: string
    /**
     * The street address.
     */
    street_address: string
    /**
     * The town.
     */
    town: string
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of GeocodeGlib-1.0.GeocodeGlib.Place */
    /**
     * Compare two #GeocodePlace instances for equality. This compares all fields
     * and only returns %TRUE if the instances are exactly equal. For example, if
     * both places have the same #GeocodePlace:location, but place `b` has its
     * #GeocodePlace:continent property set and place `a` does not, %FALSE will be
     * returned.
     * 
     * Both instances must be non-%NULL.
     * @param b another place
     */
    equal(b: Place): boolean
    /**
     * Gets the local administrative area of the `place`.
     */
    get_administrative_area(): string
    /**
     * Gets the area of the `place`.
     */
    get_area(): string
    /**
     * Gets the bounding box for the place `place`.
     */
    get_bounding_box(): BoundingBox
    /**
     * Gets the building of the `place`.
     */
    get_building(): string
    /**
     * Gets the continent of the `place`.
     */
    get_continent(): string
    /**
     * Gets the country of the `place`.
     */
    get_country(): string
    /**
     * Gets the ISO-3166 country code of the `place`.
     */
    get_country_code(): string
    /**
     * Gets the county of the `place`.
     */
    get_county(): string
    /**
     * Gets the #GIcon representing the `place`.
     */
    get_icon(): Gio.Icon
    /**
     * Gets the associated location object.
     */
    get_location(): Location
    /**
     * Gets the name of the `place`.
     */
    get_name(): string
    /**
     * Gets the OpenStreetMap ID of the `place`.
     */
    get_osm_id(): string
    /**
     * Gets the OpenStreetMap type of the `place`.
     */
    get_osm_type(): PlaceOsmType
    /**
     * Gets the type of the `place`.
     */
    get_place_type(): PlaceType
    /**
     * Gets the postal code of the `place`.
     */
    get_postal_code(): string
    /**
     * Gets the state of the `place`.
     */
    get_state(): string
    /**
     * Gets the street of the `place`.
     */
    get_street(): string
    /**
     * Gets the street address of the `place`.
     */
    get_street_address(): string
    /**
     * Gets the town of the `place`.
     */
    get_town(): string
    /**
     * Sets the local administrative area of `place` to `admin_area`.
     * @param admin_area an administrative area for the place
     */
    set_administrative_area(admin_area: string): void
    /**
     * Sets the area of `place` to `area`.
     * @param area a area
     */
    set_area(area: string): void
    /**
     * Sets the #GeocodeBoundingBox for the place `place`.
     * @param bbox A #GeocodeBoundingBox for the place
     */
    set_bounding_box(bbox: BoundingBox): void
    /**
     * Sets the building of `place` to `building`.
     * @param building a building
     */
    set_building(building: string): void
    /**
     * Sets the continent of `place` to `continent`.
     * @param continent a continent for the place
     */
    set_continent(continent: string): void
    /**
     * Sets the country of `place` to `country`.
     * @param country a country for the place
     */
    set_country(country: string): void
    /**
     * Sets the ISO country code of `place` to `country_code`.
     * @param country_code an ISO country code for the place
     */
    set_country_code(country_code: string): void
    /**
     * Sets the county of `place` to `county`.
     * @param county a county for the place
     */
    set_county(county: string): void
    /**
     * Sets the location of `place` to `location`.
     * @param location A location
     */
    set_location(location: Location): void
    /**
     * Sets the name of the `place` to `name`.
     * @param name the name of place
     */
    set_name(name: string): void
    /**
     * Sets the postal code of `place` to `postal_code`.
     * @param postal_code a postal code for the place
     */
    set_postal_code(postal_code: string): void
    /**
     * Sets the state of `place` to `state`.
     * @param state a state for the place
     */
    set_state(state: string): void
    /**
     * Sets the street of `place` to `street`.
     * @param street a street
     */
    set_street(street: string): void
    /**
     * Sets the street address of `place` to `street_address`.
     * @param street_address a street address for the place
     */
    set_street_address(street_address: string): void
    /**
     * Sets the town of `place` to `town`.
     * @param town a town for the place
     */
    set_town(town: string): void
    /* Methods of GObject-2.0.GObject.Object */
    /**
     * Creates a binding between `source_property` on `source` and `target_property`
     * on `target`.
     * 
     * Whenever the `source_property` is changed the `target_property` is
     * updated using the same value. For instance:
     * 
     * 
     * ```c
     *   g_object_bind_property (action, "active", widget, "sensitive", 0);
     * ```
     * 
     * 
     * Will result in the "sensitive" property of the widget #GObject instance to be
     * updated with the same value of the "active" property of the action #GObject
     * instance.
     * 
     * If `flags` contains %G_BINDING_BIDIRECTIONAL then the binding will be mutual:
     * if `target_property` on `target` changes then the `source_property` on `source`
     * will be updated as well.
     * 
     * The binding will automatically be removed when either the `source` or the
     * `target` instances are finalized. To remove the binding without affecting the
     * `source` and the `target` you can just call g_object_unref() on the returned
     * #GBinding instance.
     * 
     * Removing the binding by calling g_object_unref() on it must only be done if
     * the binding, `source` and `target` are only used from a single thread and it
     * is clear that both `source` and `target` outlive the binding. Especially it
     * is not safe to rely on this if the binding, `source` or `target` can be
     * finalized from different threads. Keep another reference to the binding and
     * use g_binding_unbind() instead to be on the safe side.
     * 
     * A #GObject can have multiple bindings.
     * @param source_property the property on `source` to bind
     * @param target the target #GObject
     * @param target_property the property on `target` to bind
     * @param flags flags to pass to #GBinding
     */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    /**
     * Creates a binding between `source_property` on `source` and `target_property`
     * on `target,` allowing you to set the transformation functions to be used by
     * the binding.
     * 
     * This function is the language bindings friendly version of
     * g_object_bind_property_full(), using #GClosures instead of
     * function pointers.
     * @param source_property the property on `source` to bind
     * @param target the target #GObject
     * @param target_property the property on `target` to bind
     * @param flags flags to pass to #GBinding
     * @param transform_to a #GClosure wrapping the transformation function     from the `source` to the `target,` or %NULL to use the default
     * @param transform_from a #GClosure wrapping the transformation function     from the `target` to the `source,` or %NULL to use the default
     */
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: Function, transform_from: Function): GObject.Binding
    /**
     * This function is intended for #GObject implementations to re-enforce
     * a [floating][floating-ref] object reference. Doing this is seldom
     * required: all #GInitiallyUnowneds are created with a floating reference
     * which usually just needs to be sunken by calling g_object_ref_sink().
     */
    force_floating(): void
    /**
     * Increases the freeze count on `object`. If the freeze count is
     * non-zero, the emission of "notify" signals on `object` is
     * stopped. The signals are queued until the freeze count is decreased
     * to zero. Duplicate notifications are squashed so that at most one
     * #GObject::notify signal is emitted for each property modified while the
     * object is frozen.
     * 
     * This is necessary for accessors that modify multiple properties to prevent
     * premature notification while the object is still being modified.
     */
    freeze_notify(): void
    /**
     * Gets a named field from the objects table of associations (see g_object_set_data()).
     * @param key name of the key for that association
     */
    get_data(key: string): object | null
    /**
     * Gets a property of an object.
     * 
     * The `value` can be:
     * 
     *  - an empty #GValue initialized by %G_VALUE_INIT, which will be
     *    automatically initialized with the expected type of the property
     *    (since GLib 2.60)
     *  - a #GValue initialized with the expected type of the property
     *  - a #GValue initialized with a type to which the expected type
     *    of the property can be transformed
     * 
     * In general, a copy is made of the property contents and the caller is
     * responsible for freeing the memory by calling g_value_unset().
     * 
     * Note that g_object_get_property() is really intended for language
     * bindings, g_object_get() is much more convenient for C programming.
     * @param property_name the name of the property to get
     * @param value return location for the property value
     */
    get_property(property_name: string, value: any): void
    /**
     * This function gets back user data pointers stored via
     * g_object_set_qdata().
     * @param quark A #GQuark, naming the user data pointer
     */
    get_qdata(quark: GLib.Quark): object | null
    /**
     * Gets `n_properties` properties for an `object`.
     * Obtained properties will be set to `values`. All properties must be valid.
     * Warnings will be emitted and undefined behaviour may result if invalid
     * properties are passed in.
     * @param names the names of each property to get
     * @param values the values of each property to get
     */
    getv(names: string[], values: any[]): void
    /**
     * Checks whether `object` has a [floating][floating-ref] reference.
     */
    is_floating(): boolean
    /**
     * Emits a "notify" signal for the property `property_name` on `object`.
     * 
     * When possible, eg. when signaling a property change from within the class
     * that registered the property, you should use g_object_notify_by_pspec()
     * instead.
     * 
     * Note that emission of the notify signal may be blocked with
     * g_object_freeze_notify(). In this case, the signal emissions are queued
     * and will be emitted (in reverse order) when g_object_thaw_notify() is
     * called.
     * @param property_name the name of a property installed on the class of `object`.
     */
    notify(property_name: string): void
    /**
     * Emits a "notify" signal for the property specified by `pspec` on `object`.
     * 
     * This function omits the property name lookup, hence it is faster than
     * g_object_notify().
     * 
     * One way to avoid using g_object_notify() from within the
     * class that registered the properties, and using g_object_notify_by_pspec()
     * instead, is to store the GParamSpec used with
     * g_object_class_install_property() inside a static array, e.g.:
     * 
     * 
     * ```c
     *   enum
     *   {
     *     PROP_0,
     *     PROP_FOO,
     *     PROP_LAST
     *   };
     * 
     *   static GParamSpec *properties[PROP_LAST];
     * 
     *   static void
     *   my_object_class_init (MyObjectClass *klass)
     *   {
     *     properties[PROP_FOO] = g_param_spec_int ("foo", "Foo", "The foo",
     *                                              0, 100,
     *                                              50,
     *                                              G_PARAM_READWRITE);
     *     g_object_class_install_property (gobject_class,
     *                                      PROP_FOO,
     *                                      properties[PROP_FOO]);
     *   }
     * ```
     * 
     * 
     * and then notify a change on the "foo" property with:
     * 
     * 
     * ```c
     *   g_object_notify_by_pspec (self, properties[PROP_FOO]);
     * ```
     * 
     * @param pspec the #GParamSpec of a property installed on the class of `object`.
     */
    notify_by_pspec(pspec: GObject.ParamSpec): void
    /**
     * Increases the reference count of `object`.
     * 
     * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
     * of `object` will be propagated to the return type (using the GCC typeof()
     * extension), so any casting the caller needs to do on the return type must be
     * explicit.
     */
    ref(): GObject.Object
    /**
     * Increase the reference count of `object,` and possibly remove the
     * [floating][floating-ref] reference, if `object` has a floating reference.
     * 
     * In other words, if the object is floating, then this call "assumes
     * ownership" of the floating reference, converting it to a normal
     * reference by clearing the floating flag while leaving the reference
     * count unchanged.  If the object is not floating, then this call
     * adds a new normal reference increasing the reference count by one.
     * 
     * Since GLib 2.56, the type of `object` will be propagated to the return type
     * under the same conditions as for g_object_ref().
     */
    ref_sink(): GObject.Object
    /**
     * Releases all references to other objects. This can be used to break
     * reference cycles.
     * 
     * This function should only be called from object system implementations.
     */
    run_dispose(): void
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
    /**
     * Sets a property on an object.
     * @param property_name the name of the property to set
     * @param value the value
     */
    set_property(property_name: string, value: any): void
    /**
     * Remove a specified datum from the object's data associations,
     * without invoking the association's destroy handler.
     * @param key name of the key
     */
    steal_data(key: string): object | null
    /**
     * This function gets back user data pointers stored via
     * g_object_set_qdata() and removes the `data` from object
     * without invoking its destroy() function (if any was
     * set).
     * Usually, calling this function is only required to update
     * user data pointers with a destroy notifier, for example:
     * 
     * ```c
     * void
     * object_add_to_user_list (GObject     *object,
     *                          const gchar *new_string)
     * {
     *   // the quark, naming the object data
     *   GQuark quark_string_list = g_quark_from_static_string ("my-string-list");
     *   // retrieve the old string list
     *   GList *list = g_object_steal_qdata (object, quark_string_list);
     * 
     *   // prepend new string
     *   list = g_list_prepend (list, g_strdup (new_string));
     *   // this changed 'list', so we need to set it again
     *   g_object_set_qdata_full (object, quark_string_list, list, free_string_list);
     * }
     * static void
     * free_string_list (gpointer data)
     * {
     *   GList *node, *list = data;
     * 
     *   for (node = list; node; node = node->next)
     *     g_free (node->data);
     *   g_list_free (list);
     * }
     * ```
     * 
     * Using g_object_get_qdata() in the above example, instead of
     * g_object_steal_qdata() would have left the destroy function set,
     * and thus the partial string list would have been freed upon
     * g_object_set_qdata_full().
     * @param quark A #GQuark, naming the user data pointer
     */
    steal_qdata(quark: GLib.Quark): object | null
    /**
     * Reverts the effect of a previous call to
     * g_object_freeze_notify(). The freeze count is decreased on `object`
     * and when it reaches zero, queued "notify" signals are emitted.
     * 
     * Duplicate notifications for each property are squashed so that at most one
     * #GObject::notify signal is emitted for each property, in the reverse order
     * in which they have been queued.
     * 
     * It is an error to call this function when the freeze count is zero.
     */
    thaw_notify(): void
    /**
     * Decreases the reference count of `object`. When its reference count
     * drops to 0, the object is finalized (i.e. its memory is freed).
     * 
     * If the pointer to the #GObject may be reused in future (for example, if it is
     * an instance variable of another object), it is recommended to clear the
     * pointer to %NULL rather than retain a dangling pointer to a potentially
     * invalid #GObject instance. Use g_clear_object() for this.
     */
    unref(): void
    /**
     * This function essentially limits the life time of the `closure` to
     * the life time of the object. That is, when the object is finalized,
     * the `closure` is invalidated by calling g_closure_invalidate() on
     * it, in order to prevent invocations of the closure with a finalized
     * (nonexisting) object. Also, g_object_ref() and g_object_unref() are
     * added as marshal guards to the `closure,` to ensure that an extra
     * reference count is held on `object` during invocation of the
     * `closure`.  Usually, this function will be called on closures that
     * use this `object` as closure data.
     * @param closure #GClosure to watch
     */
    watch_closure(closure: Function): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /**
     * Emits a "notify" signal for the property `property_name` on `object`.
     * 
     * When possible, eg. when signaling a property change from within the class
     * that registered the property, you should use g_object_notify_by_pspec()
     * instead.
     * 
     * Note that emission of the notify signal may be blocked with
     * g_object_freeze_notify(). In this case, the signal emissions are queued
     * and will be emitted (in reverse order) when g_object_thaw_notify() is
     * called.
     * @param pspec 
     */
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    /**
     * The notify signal is emitted on an object when one of its properties has
     * its value set through g_object_set_property(), g_object_set(), et al.
     * 
     * Note that getting this signal doesn’t itself guarantee that the value of
     * the property has actually changed. When it is emitted is determined by the
     * derived GObject class. If the implementor did not create the property with
     * %G_PARAM_EXPLICIT_NOTIFY, then any call to g_object_set_property() results
     * in ::notify being emitted, even if the new value is the same as the old.
     * If they did pass %G_PARAM_EXPLICIT_NOTIFY, then this signal is emitted only
     * when they explicitly call g_object_notify() or g_object_notify_by_pspec(),
     * and common practice is to do that only when the value has actually changed.
     * 
     * This signal is typically used to obtain change notification for a
     * single property, by specifying the property name as a detail in the
     * g_signal_connect() call, like this:
     * 
     * 
     * ```c
     * g_signal_connect (text_view->buffer, "notify::paste-target-list",
     *                   G_CALLBACK (gtk_text_view_target_list_notify),
     *                   text_view)
     * ```
     * 
     * 
     * It is important to note that you must use
     * [canonical parameter names][canonical-parameter-names] as
     * detail strings for the notify signal.
     * @param pspec the #GParamSpec of the property which changed.
     */
    connect(sigName: "notify", callback: (($obj: Place, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Place, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::administrative-area", callback: (($obj: Place, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::administrative-area", callback: (($obj: Place, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::area", callback: (($obj: Place, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::area", callback: (($obj: Place, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::bounding-box", callback: (($obj: Place, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::bounding-box", callback: (($obj: Place, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::building", callback: (($obj: Place, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::building", callback: (($obj: Place, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::continent", callback: (($obj: Place, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::continent", callback: (($obj: Place, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::country", callback: (($obj: Place, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::country", callback: (($obj: Place, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::country-code", callback: (($obj: Place, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::country-code", callback: (($obj: Place, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::county", callback: (($obj: Place, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::county", callback: (($obj: Place, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::icon", callback: (($obj: Place, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::icon", callback: (($obj: Place, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::location", callback: (($obj: Place, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::location", callback: (($obj: Place, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::name", callback: (($obj: Place, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: Place, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::osm-id", callback: (($obj: Place, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::osm-id", callback: (($obj: Place, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::osm-type", callback: (($obj: Place, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::osm-type", callback: (($obj: Place, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::place-type", callback: (($obj: Place, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::place-type", callback: (($obj: Place, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::postal-code", callback: (($obj: Place, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::postal-code", callback: (($obj: Place, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::state", callback: (($obj: Place, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::state", callback: (($obj: Place, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::street", callback: (($obj: Place, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::street", callback: (($obj: Place, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::street-address", callback: (($obj: Place, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::street-address", callback: (($obj: Place, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::town", callback: (($obj: Place, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::town", callback: (($obj: Place, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Place_ConstructProps)
    _init (config?: Place_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(name: string, place_type: PlaceType): Place
    static new_with_location(name: string, place_type: PlaceType, location: Location): Place
    static $gtype: GObject.Type
}
interface Reverse_ConstructProps extends GObject.Object_ConstructProps {
}
class Reverse {
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of GeocodeGlib-1.0.GeocodeGlib.Reverse */
    /**
     * Gets the result of a reverse geocoding
     * query using the current backend (see geocode_reverse_set_backend()). By
     * default the GNOME Nominatim server is used. See #GeocodeBackend for more
     * information.
     * 
     * If no result could be found, a %GEOCODE_ERROR_NOT_SUPPORTED error will be
     * returned. This typically happens if the coordinates to geocode are in the
     * middle of the ocean.
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
    resolve_async(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes a reverse geocoding operation. See geocode_reverse_resolve_async().
     * @param res a #GAsyncResult.
     */
    resolve_finish(res: Gio.AsyncResult): Place
    /**
     * Specifies the backend to use in the reverse geocoding operation.
     * 
     * If none is given, the default GNOME Nominatim server is used.
     * @param backend a #GeocodeBackend, or %NULL to use the default one.
     */
    set_backend(backend?: Backend | null): void
    /* Methods of GObject-2.0.GObject.Object */
    /**
     * Creates a binding between `source_property` on `source` and `target_property`
     * on `target`.
     * 
     * Whenever the `source_property` is changed the `target_property` is
     * updated using the same value. For instance:
     * 
     * 
     * ```c
     *   g_object_bind_property (action, "active", widget, "sensitive", 0);
     * ```
     * 
     * 
     * Will result in the "sensitive" property of the widget #GObject instance to be
     * updated with the same value of the "active" property of the action #GObject
     * instance.
     * 
     * If `flags` contains %G_BINDING_BIDIRECTIONAL then the binding will be mutual:
     * if `target_property` on `target` changes then the `source_property` on `source`
     * will be updated as well.
     * 
     * The binding will automatically be removed when either the `source` or the
     * `target` instances are finalized. To remove the binding without affecting the
     * `source` and the `target` you can just call g_object_unref() on the returned
     * #GBinding instance.
     * 
     * Removing the binding by calling g_object_unref() on it must only be done if
     * the binding, `source` and `target` are only used from a single thread and it
     * is clear that both `source` and `target` outlive the binding. Especially it
     * is not safe to rely on this if the binding, `source` or `target` can be
     * finalized from different threads. Keep another reference to the binding and
     * use g_binding_unbind() instead to be on the safe side.
     * 
     * A #GObject can have multiple bindings.
     * @param source_property the property on `source` to bind
     * @param target the target #GObject
     * @param target_property the property on `target` to bind
     * @param flags flags to pass to #GBinding
     */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    /**
     * Creates a binding between `source_property` on `source` and `target_property`
     * on `target,` allowing you to set the transformation functions to be used by
     * the binding.
     * 
     * This function is the language bindings friendly version of
     * g_object_bind_property_full(), using #GClosures instead of
     * function pointers.
     * @param source_property the property on `source` to bind
     * @param target the target #GObject
     * @param target_property the property on `target` to bind
     * @param flags flags to pass to #GBinding
     * @param transform_to a #GClosure wrapping the transformation function     from the `source` to the `target,` or %NULL to use the default
     * @param transform_from a #GClosure wrapping the transformation function     from the `target` to the `source,` or %NULL to use the default
     */
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: Function, transform_from: Function): GObject.Binding
    /**
     * This function is intended for #GObject implementations to re-enforce
     * a [floating][floating-ref] object reference. Doing this is seldom
     * required: all #GInitiallyUnowneds are created with a floating reference
     * which usually just needs to be sunken by calling g_object_ref_sink().
     */
    force_floating(): void
    /**
     * Increases the freeze count on `object`. If the freeze count is
     * non-zero, the emission of "notify" signals on `object` is
     * stopped. The signals are queued until the freeze count is decreased
     * to zero. Duplicate notifications are squashed so that at most one
     * #GObject::notify signal is emitted for each property modified while the
     * object is frozen.
     * 
     * This is necessary for accessors that modify multiple properties to prevent
     * premature notification while the object is still being modified.
     */
    freeze_notify(): void
    /**
     * Gets a named field from the objects table of associations (see g_object_set_data()).
     * @param key name of the key for that association
     */
    get_data(key: string): object | null
    /**
     * Gets a property of an object.
     * 
     * The `value` can be:
     * 
     *  - an empty #GValue initialized by %G_VALUE_INIT, which will be
     *    automatically initialized with the expected type of the property
     *    (since GLib 2.60)
     *  - a #GValue initialized with the expected type of the property
     *  - a #GValue initialized with a type to which the expected type
     *    of the property can be transformed
     * 
     * In general, a copy is made of the property contents and the caller is
     * responsible for freeing the memory by calling g_value_unset().
     * 
     * Note that g_object_get_property() is really intended for language
     * bindings, g_object_get() is much more convenient for C programming.
     * @param property_name the name of the property to get
     * @param value return location for the property value
     */
    get_property(property_name: string, value: any): void
    /**
     * This function gets back user data pointers stored via
     * g_object_set_qdata().
     * @param quark A #GQuark, naming the user data pointer
     */
    get_qdata(quark: GLib.Quark): object | null
    /**
     * Gets `n_properties` properties for an `object`.
     * Obtained properties will be set to `values`. All properties must be valid.
     * Warnings will be emitted and undefined behaviour may result if invalid
     * properties are passed in.
     * @param names the names of each property to get
     * @param values the values of each property to get
     */
    getv(names: string[], values: any[]): void
    /**
     * Checks whether `object` has a [floating][floating-ref] reference.
     */
    is_floating(): boolean
    /**
     * Emits a "notify" signal for the property `property_name` on `object`.
     * 
     * When possible, eg. when signaling a property change from within the class
     * that registered the property, you should use g_object_notify_by_pspec()
     * instead.
     * 
     * Note that emission of the notify signal may be blocked with
     * g_object_freeze_notify(). In this case, the signal emissions are queued
     * and will be emitted (in reverse order) when g_object_thaw_notify() is
     * called.
     * @param property_name the name of a property installed on the class of `object`.
     */
    notify(property_name: string): void
    /**
     * Emits a "notify" signal for the property specified by `pspec` on `object`.
     * 
     * This function omits the property name lookup, hence it is faster than
     * g_object_notify().
     * 
     * One way to avoid using g_object_notify() from within the
     * class that registered the properties, and using g_object_notify_by_pspec()
     * instead, is to store the GParamSpec used with
     * g_object_class_install_property() inside a static array, e.g.:
     * 
     * 
     * ```c
     *   enum
     *   {
     *     PROP_0,
     *     PROP_FOO,
     *     PROP_LAST
     *   };
     * 
     *   static GParamSpec *properties[PROP_LAST];
     * 
     *   static void
     *   my_object_class_init (MyObjectClass *klass)
     *   {
     *     properties[PROP_FOO] = g_param_spec_int ("foo", "Foo", "The foo",
     *                                              0, 100,
     *                                              50,
     *                                              G_PARAM_READWRITE);
     *     g_object_class_install_property (gobject_class,
     *                                      PROP_FOO,
     *                                      properties[PROP_FOO]);
     *   }
     * ```
     * 
     * 
     * and then notify a change on the "foo" property with:
     * 
     * 
     * ```c
     *   g_object_notify_by_pspec (self, properties[PROP_FOO]);
     * ```
     * 
     * @param pspec the #GParamSpec of a property installed on the class of `object`.
     */
    notify_by_pspec(pspec: GObject.ParamSpec): void
    /**
     * Increases the reference count of `object`.
     * 
     * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
     * of `object` will be propagated to the return type (using the GCC typeof()
     * extension), so any casting the caller needs to do on the return type must be
     * explicit.
     */
    ref(): GObject.Object
    /**
     * Increase the reference count of `object,` and possibly remove the
     * [floating][floating-ref] reference, if `object` has a floating reference.
     * 
     * In other words, if the object is floating, then this call "assumes
     * ownership" of the floating reference, converting it to a normal
     * reference by clearing the floating flag while leaving the reference
     * count unchanged.  If the object is not floating, then this call
     * adds a new normal reference increasing the reference count by one.
     * 
     * Since GLib 2.56, the type of `object` will be propagated to the return type
     * under the same conditions as for g_object_ref().
     */
    ref_sink(): GObject.Object
    /**
     * Releases all references to other objects. This can be used to break
     * reference cycles.
     * 
     * This function should only be called from object system implementations.
     */
    run_dispose(): void
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
    /**
     * Sets a property on an object.
     * @param property_name the name of the property to set
     * @param value the value
     */
    set_property(property_name: string, value: any): void
    /**
     * Remove a specified datum from the object's data associations,
     * without invoking the association's destroy handler.
     * @param key name of the key
     */
    steal_data(key: string): object | null
    /**
     * This function gets back user data pointers stored via
     * g_object_set_qdata() and removes the `data` from object
     * without invoking its destroy() function (if any was
     * set).
     * Usually, calling this function is only required to update
     * user data pointers with a destroy notifier, for example:
     * 
     * ```c
     * void
     * object_add_to_user_list (GObject     *object,
     *                          const gchar *new_string)
     * {
     *   // the quark, naming the object data
     *   GQuark quark_string_list = g_quark_from_static_string ("my-string-list");
     *   // retrieve the old string list
     *   GList *list = g_object_steal_qdata (object, quark_string_list);
     * 
     *   // prepend new string
     *   list = g_list_prepend (list, g_strdup (new_string));
     *   // this changed 'list', so we need to set it again
     *   g_object_set_qdata_full (object, quark_string_list, list, free_string_list);
     * }
     * static void
     * free_string_list (gpointer data)
     * {
     *   GList *node, *list = data;
     * 
     *   for (node = list; node; node = node->next)
     *     g_free (node->data);
     *   g_list_free (list);
     * }
     * ```
     * 
     * Using g_object_get_qdata() in the above example, instead of
     * g_object_steal_qdata() would have left the destroy function set,
     * and thus the partial string list would have been freed upon
     * g_object_set_qdata_full().
     * @param quark A #GQuark, naming the user data pointer
     */
    steal_qdata(quark: GLib.Quark): object | null
    /**
     * Reverts the effect of a previous call to
     * g_object_freeze_notify(). The freeze count is decreased on `object`
     * and when it reaches zero, queued "notify" signals are emitted.
     * 
     * Duplicate notifications for each property are squashed so that at most one
     * #GObject::notify signal is emitted for each property, in the reverse order
     * in which they have been queued.
     * 
     * It is an error to call this function when the freeze count is zero.
     */
    thaw_notify(): void
    /**
     * Decreases the reference count of `object`. When its reference count
     * drops to 0, the object is finalized (i.e. its memory is freed).
     * 
     * If the pointer to the #GObject may be reused in future (for example, if it is
     * an instance variable of another object), it is recommended to clear the
     * pointer to %NULL rather than retain a dangling pointer to a potentially
     * invalid #GObject instance. Use g_clear_object() for this.
     */
    unref(): void
    /**
     * This function essentially limits the life time of the `closure` to
     * the life time of the object. That is, when the object is finalized,
     * the `closure` is invalidated by calling g_closure_invalidate() on
     * it, in order to prevent invocations of the closure with a finalized
     * (nonexisting) object. Also, g_object_ref() and g_object_unref() are
     * added as marshal guards to the `closure,` to ensure that an extra
     * reference count is held on `object` during invocation of the
     * `closure`.  Usually, this function will be called on closures that
     * use this `object` as closure data.
     * @param closure #GClosure to watch
     */
    watch_closure(closure: Function): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /**
     * Emits a "notify" signal for the property `property_name` on `object`.
     * 
     * When possible, eg. when signaling a property change from within the class
     * that registered the property, you should use g_object_notify_by_pspec()
     * instead.
     * 
     * Note that emission of the notify signal may be blocked with
     * g_object_freeze_notify(). In this case, the signal emissions are queued
     * and will be emitted (in reverse order) when g_object_thaw_notify() is
     * called.
     * @param pspec 
     */
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    /**
     * The notify signal is emitted on an object when one of its properties has
     * its value set through g_object_set_property(), g_object_set(), et al.
     * 
     * Note that getting this signal doesn’t itself guarantee that the value of
     * the property has actually changed. When it is emitted is determined by the
     * derived GObject class. If the implementor did not create the property with
     * %G_PARAM_EXPLICIT_NOTIFY, then any call to g_object_set_property() results
     * in ::notify being emitted, even if the new value is the same as the old.
     * If they did pass %G_PARAM_EXPLICIT_NOTIFY, then this signal is emitted only
     * when they explicitly call g_object_notify() or g_object_notify_by_pspec(),
     * and common practice is to do that only when the value has actually changed.
     * 
     * This signal is typically used to obtain change notification for a
     * single property, by specifying the property name as a detail in the
     * g_signal_connect() call, like this:
     * 
     * 
     * ```c
     * g_signal_connect (text_view->buffer, "notify::paste-target-list",
     *                   G_CALLBACK (gtk_text_view_target_list_notify),
     *                   text_view)
     * ```
     * 
     * 
     * It is important to note that you must use
     * [canonical parameter names][canonical-parameter-names] as
     * detail strings for the notify signal.
     * @param pspec the #GParamSpec of the property which changed.
     */
    connect(sigName: "notify", callback: (($obj: Reverse, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Reverse, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Reverse_ConstructProps)
    _init (config?: Reverse_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new_for_location(location: Location): Reverse
    static $gtype: GObject.Type
}
abstract class BackendInterface {
    /* Fields of GeocodeGlib-1.0.GeocodeGlib.BackendInterface */
    forward_search: (backend: Backend, params: GLib.HashTable, cancellable?: Gio.Cancellable | null) => Place[]
    forward_search_async: (backend: Backend, params: GLib.HashTable, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null) => void
    forward_search_finish: (backend: Backend, result: Gio.AsyncResult) => Place[]
    reverse_resolve: (backend: Backend, params: GLib.HashTable, cancellable?: Gio.Cancellable | null) => Place[]
    reverse_resolve_async: (backend: Backend, params: GLib.HashTable, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null) => void
    reverse_resolve_finish: (backend: Backend, result: Gio.AsyncResult) => Place[]
    static name: string
}
abstract class BoundingBoxClass {
    static name: string
}
class BoundingBoxPrivate {
    static name: string
}
abstract class ForwardClass {
    static name: string
}
class ForwardPrivate {
    static name: string
}
abstract class LocationClass {
    static name: string
}
class LocationPrivate {
    static name: string
}
abstract class MockBackendClass {
    /* Fields of GeocodeGlib-1.0.GeocodeGlib.MockBackendClass */
    parent_class: GObject.ObjectClass
    static name: string
}
class MockBackendQuery {
    /* Fields of GeocodeGlib-1.0.GeocodeGlib.MockBackendQuery */
    /**
     * query parameters, in the format accepted by geocode_forward_search()
     *     (if `is_forward` is %TRUE) or geocode_reverse_resolve() (otherwise)
     */
    params: GLib.HashTable
    /**
     * %TRUE if this represents a call to geocode_forward_search();
     *     %FALSE if it represents a call to geocode_reverse_resolve()
     */
    is_forward: boolean
    /**
     * results returned by the
     *     query, or %NULL if an error was returned
     */
    results: Place[]
    /**
     * error returned by the query, or %NULL if a result set
     *     was returned
     */
    error: GLib.Error
    static name: string
}
abstract class NominatimClass {
    /* Fields of GeocodeGlib-1.0.GeocodeGlib.NominatimClass */
    parent_class: GObject.ObjectClass
    query: (self: Nominatim, uri: string, cancellable?: Gio.Cancellable | null) => string
    query_async: (self: Nominatim, uri: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null) => void
    query_finish: (self: Nominatim, res: Gio.AsyncResult) => string
    static name: string
}
abstract class PlaceClass {
    static name: string
}
class PlacePrivate {
    static name: string
}
abstract class ReverseClass {
    static name: string
}
class ReversePrivate {
    static name: string
}
}
export default GeocodeGlib;