
/*
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in `ts-for-gir` or create a bug report on https://github.com/gjsify/ts-for-gjs
 */
/**
 * EDataCal-2.0
 */

import type libxml2 from '@girs/libxml2-2.0';
import type Soup from '@girs/soup-3.0';
import type Gio from '@girs/gio-2.0';
import type GObject from '@girs/gobject-2.0';
import type GLib from '@girs/glib-2.0';
import type ICalGLib from '@girs/icalglib-3.0';
import type EDataServer from '@girs/edataserver-1.2';
import type Json from '@girs/json-1.0';
import type Camel from '@girs/camel-1.2';
import type ECal from '@girs/ecal-2.0';
import type EBackend from '@girs/ebackend-1.2';

export namespace EDataCal {

/**
 * This environment variable configures where the calendar
 * factory loads its backend modules from.
 */
const EDS_CALENDAR_MODULES: string | null
/**
 * This environment variable configures where the calendar
 * factory subprocess is located in.
 */
const EDS_SUBPROCESS_CAL_PATH: string | null
const INTERVALTREE_DEBUG: number
const LIBICAL_GLIB_UNSTABLE_API: number
/**
 * Frees the `change` structure, previously allocated with e_cal_cache_offline_change_new()
 * or e_cal_cache_offline_change_copy().
 * @param change an #ECalCacheOfflineChange
 */
function cal_cache_offline_change_free(change: any | null): void
/**
 * Frees the `ptr` structure, previously allocated with e_cal_cache_search_data_new()
 * or e_cal_cache_search_data_copy().
 * @param ptr an #ECalCacheSearchData
 */
function cal_cache_search_data_free(ptr: any | null): void
/**
 * Frees the `ptr` structure, previously allocated with e_cal_meta_backend_info_new()
 * or e_cal_meta_backend_info_copy().
 * @param ptr an #ECalMetaBackendInfo
 */
function cal_meta_backend_info_free(ptr: any | null): void
/**
 * A callback prototype being called in a dedicated thread, scheduled
 * by e_cal_backend_schedule_custom_operation().
 * @callback 
 * @param cal_backend an #ECalBackend
 * @param cancellable an optional #GCancellable, as provided to e_cal_backend_schedule_custom_operation()
 */
interface CalBackendCustomOpFunc {
    (cal_backend: CalBackend, cancellable: Gio.Cancellable | null): void
}
/**
 * Callback function used by e_cal_backend_foreach_view().
 * @callback 
 * @param backend an #ECalBackend
 * @param view an #EDataCalView
 * @returns %TRUE, to continue, %FALSE to stop further processing.
 */
interface CalBackendForeachViewFunc {
    (backend: CalBackend, view: DataCalView): boolean
}
/**
 * A callback called for each object row when using
 * e_cal_cache_search_with_callback() function.
 * @callback 
 * @param cal_cache an #ECalCache
 * @param uid a unique object identifier
 * @param rid an optional Recurrence-ID of the object
 * @param revision the object revision
 * @param object the object itself
 * @param extra extra data stored with the object
 * @param custom_flags object's custom flags
 * @param offline_state object's offline state, one of #EOfflineState
 * @returns %TRUE to continue, %FALSE to stop walk through.
 */
interface CalCacheSearchFunc {
    (cal_cache: CalCache, uid: string | null, rid: string | null, revision: string | null, object: string | null, extra: string | null, custom_flags: number, offline_state: EBackend.OfflineState): boolean
}
module CalBackend {

    // Signal callback interfaces

    /**
     * Signal callback interface for `closed`
     */
    interface ClosedSignalCallback {
        ($obj: CalBackend, sender: string | null): void
    }

    /**
     * Signal callback interface for `shutdown`
     */
    interface ShutdownSignalCallback {
        ($obj: CalBackend): void
    }


    // Constructor properties interface

    interface ConstructorProperties extends ECal.TimezoneCache.ConstructorProperties, EBackend.Backend.ConstructorProperties {

        // Own constructor properties of EDataCal-2.0.EDataCal.CalBackend

        cache_dir?: string | null
        kind?: number | null
        registry?: EDataServer.SourceRegistry | null
        writable?: boolean | null
    }

}

interface CalBackend extends ECal.TimezoneCache {

    // Own properties of EDataCal-2.0.EDataCal.CalBackend

    cache_dir: string | null
    readonly kind: number
    readonly proxy_resolver: Gio.ProxyResolver
    readonly registry: EDataServer.SourceRegistry
    writable: boolean

    // Owm methods of EDataCal-2.0.EDataCal.CalBackend

    /**
     * Asynchronously adds the timezone described by `tzobject` to `backend`.
     * 
     * When the operation is finished, `callback` will be called.  You can
     * then call e_cal_backend_add_timezone_finish() to get the result of
     * the operation.
     * @param tzobject an iCalendar VTIMEZONE string
     * @param cancellable optional #GCancellable object, or %NULL
     * @param callback a #GAsyncReadyCallback to call when the request is satisfied
     */
    add_timezone(tzobject: string | null, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void

    // Overloads of add_timezone

    /**
     * Adds a copy of `zone` to `cache` and emits an
     * #ETimezoneCache::timezone-added signal.  The `cache` will use the TZID
     * string returned by i_cal_timezone_get_tzid() as the lookup key, which can
     * be passed to e_timezone_cache_get_timezone() to obtain `zone` again.
     * 
     * If the `cache` already has an #ICalTimezone with the same TZID string
     * as `zone,` the `cache` will remain unchanged to avoid invalidating any
     * #ICalTimezone pointers which may have already been returned through
     * e_timezone_cache_get_timezone().
     * @param zone an #ICalTimezone
     */
    add_timezone(zone: ICalGLib.Timezone): void
    /**
     * Finishes the operation started with e_cal_backend_add_timezone().
     * 
     * If an error occurred, the function will set `error` and return %FALSE.
     * @param result a #GAsyncResult
     * @returns %TRUE on success, %FALSE on failure
     */
    add_timezone_finish(result: Gio.AsyncResult): boolean
    /**
     * Adds the timezone described by `tzobject` to `backend`.
     * 
     * If an error occurs, the function will set `error` and return %FALSE.
     * @param tzobject an iCalendar VTIMEZONE string
     * @param cancellable optional #GCancellable object, or %NULL
     * @returns %TRUE on success, %FALSE on failure
     */
    add_timezone_sync(tzobject: string | null, cancellable: Gio.Cancellable | null): boolean
    /**
     * Adds a view to the list of live views being run by the given backend.
     * Doing so means that any listener on the view will get notified of any
     * change that affect the live view.
     * @param view An #EDataCalView object.
     */
    add_view(view: DataCalView): void
    create_cache_filename(uid: string | null, filename: string | null, fileindex: number): string | null
    /**
     * Asynchronously creates one or more new iCalendar objects from `calobjs`.
     * 
     * When the operation is finished, `callback` will be called.  You can then
     * call e_cal_backend_create_objects_finish() to get the result of the
     * operation.
     * @param calobjs a %NULL-terminated array of iCalendar strings
     * @param opflags bit-or of #ECalOperationFlags
     * @param cancellable optional #GCancellable object, or %NULL
     * @param callback a #GAsyncReadyCallback to call when the request is satisifed
     */
    create_objects(calobjs: string | null, opflags: ECal.OperationFlags, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void
    /**
     * Finishes the operation started with e_cal_backend_create_objects().
     * 
     * A unique ID string for each newly-created object is deposited in `out_uids`.
     * Free the returned ID strings with g_free() when finished with them.
     * 
     * If an error occurred, the function will set `error` and return %FALSE.
     * @param result a #GAsyncResult
     * @param out_uids a #GQueue in which to deposit results
     * @returns %TRUE on success, %FALSE on failure
     */
    create_objects_finish(result: Gio.AsyncResult, out_uids: GLib.Queue): boolean
    /**
     * Creates one or more new iCalendar objects from `calobjs,` and deposits
     * the unique ID string for each newly-created object in `out_uids`.
     * 
     * Free the returned ID strings with g_free() when finished with them.
     * 
     * If an error occurs, the function will set `error` and return %FALSE.
     * @param calobjs a %NULL-terminated array of iCalendar strings
     * @param opflags bit-or of #ECalOperationFlags
     * @param out_uids a #GQueue in which to deposit results
     * @param cancellable optional #GCancellable object, or %NULL
     * @returns %TRUE on success, %FALSE on failure
     */
    create_objects_sync(calobjs: string | null, opflags: ECal.OperationFlags, out_uids: GLib.Queue, cancellable: Gio.Cancellable | null): boolean
    /**
     * Asynchronously discards the VALARM object with a unique ID of `alarm_uid`
     * from the iCalendar object identified by `uid` and, optionally, `rid`.
     * 
     * When the operation is finished, `callback` will be called.  You can
     * then call e_cal_backend_discard_alarm_finish() to get the result of
     * the operation.
     * @param uid a unique ID for an iCalendar object
     * @param rid a recurrence ID, or %NULL
     * @param alarm_uid a unique ID for an iCalendar VALARM object
     * @param opflags bit-or of #ECalOperationFlags
     * @param cancellable optional #GCancellable object, or %NULL
     * @param callback a #GAsyncReadyCallback to call when the request is satisfied
     */
    discard_alarm(uid: string | null, rid: string | null, alarm_uid: string | null, opflags: ECal.OperationFlags, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void
    /**
     * Finishes the operation started with e_cal_backend_discard_alarm().
     * 
     * If an error occurred, the function will set `error` and return %FALSE.
     * @param result a #GAsyncResult
     * @returns %TRUE on success, %FALSE on failure
     */
    discard_alarm_finish(result: Gio.AsyncResult): boolean
    /**
     * Discards the VALARM object with a unique ID of `alarm_uid` from the
     * iCalendar object identified by `uid` and, optionally, `rid`.
     * 
     * If an error occurs, the function will set `error` and return %FALSE.
     * @param uid a unique ID for an iCalendar object
     * @param rid a recurrence ID, or %NULL
     * @param alarm_uid a unique ID for an iCalendar VALARM object
     * @param opflags bit-or of #ECalOperationFlags
     * @param cancellable optional #GCancellable object, or %NULL
     * @returns %TRUE on success, %FALSE on failure
     */
    discard_alarm_sync(uid: string | null, rid: string | null, alarm_uid: string | null, opflags: ECal.OperationFlags, cancellable: Gio.Cancellable | null): boolean
    /**
     * Thread-safe variation of e_cal_backend_get_cache_dir().
     * Use this function when accessing `backend` from multiple threads.
     * 
     * The returned string should be freed with g_free() when no longer needed.
     * @returns a newly-allocated copy of #ECalBackend:cache-dir
     */
    dup_cache_dir(): string | null
    /**
     * Calls `func` for each existing view (as returned by e_cal_backend_list_views()).
     * The `func` can return %FALSE to stop early.
     * @returns whether the call had been stopped by @func
     */
    foreach_view(): boolean
    /**
     * Notifies each view of the `backend` about progress. When `only_completed_views`
     * is %TRUE, notifies only completed views.
     * @param only_completed_views whether notify in completed views only
     * @param percent percent complete
     * @param message message describing the operation in progress, or %NULL
     */
    foreach_view_notify_progress(only_completed_views: boolean, percent: number, message: string | null): void
    /**
     * Asynchronously inspects the iCalendar object specified by `uid` and,
     * optionally, `rid` for attachments.
     * 
     * When the operation is finished, `callback` will be called.  You can then
     * call e_cal_backend_get_attachment_uris_finish() to get the result of the
     * operation.
     * @param uid a unique ID for an iCalendar object
     * @param rid a recurrence ID, or %NULL
     * @param cancellable optional #GCancellable object, or %NULL
     * @param callback a #GAsyncReadyCallback to call when the request is satisfied
     */
    get_attachment_uris(uid: string | null, rid: string | null, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void
    /**
     * Finishes the operation started with e_cal_backend_get_attachment_uris().
     * 
     * The requested attachment URI strings are deposited in `out_attachment_uris`.
     * Free the returned strings with g_free() when finished with them.
     * 
     * If an error occurred, the function will set `error` and return %FALSE.
     * Note that an empty result set does not necessarily imply an error.
     * @param result a #GAsyncResult
     * @param out_attachment_uris a #GQueue in which to deposit results
     * @returns %TRUE on success, %FALSE on failure
     */
    get_attachment_uris_finish(result: Gio.AsyncResult, out_attachment_uris: GLib.Queue): boolean
    /**
     * Inspects the iCalendar object specified by `uid` and, optionally, `rid`
     * for attachments and deposits a URI string for each attachment in
     * `out_attachment_uris`.  Free the returned strings with g_free() when
     * finished with them.
     * 
     * If an error occurs, the function will set `error` and return %FALSE.
     * Note that an empty result set does not necessarily imply an error.
     * @param uid a unique ID for an iCalendar object
     * @param rid a recurrence ID, or %NULL
     * @param out_attachment_uris a #GQueue in which to deposit results
     * @param cancellable optional #GCancellable object, or %NULL
     * @returns %TRUE on success, %FALSE on failure
     */
    get_attachment_uris_sync(uid: string | null, rid: string | null, out_attachment_uris: GLib.Queue, cancellable: Gio.Cancellable | null): boolean
    /**
     * Obtains the value of the backend property named `prop_name`.
     * Freed the returned string with g_free() when finished with it.
     * @param prop_name a backend property name
     * @returns the value for @prop_name
     */
    get_backend_property(prop_name: string | null): string | null
    /**
     * Returns the cache directory path used by `backend`.
     * @returns the cache directory path
     */
    get_cache_dir(): string | null
    /**
     * Asynchronously obtains a free/busy object for the list of `users` in the
     * time interval between `start` and `end`.
     * 
     * When the operation is finished, `callback` will be called.  You can
     * then call e_cal_backend_get_free_busy_finish() to get the result of
     * the operation.
     * @param start start time
     * @param end end time
     * @param users a %NULL-terminated array of user strings
     * @param cancellable optional #GCancellable object, or %NULL
     * @param callback a #GAsyncReadyCallback to call when the request is satisfied
     */
    get_free_busy(start: number, end: number, users: string[], cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void
    /**
     * Finishes the operation started with e_cal_backend_get_free_busy().
     * 
     * The free/busy results can be returned through the
     * e_data_cal_report_free_busy_data() function asynchronously. The out_freebusy
     * will contain all the returned data, possibly again, thus the client is
     * responsible for the data merge, if needed.
     * 
     * If an error occurred, the function will set `error` and return %FALSE.
     * @param result a #GAsyncResult
     * @param out_freebusy iCalendar strings with overall returned Free/Busy data
     * @returns %TRUE on success, %FALSE on failure
     */
    get_free_busy_finish(result: Gio.AsyncResult, out_freebusy: string[]): boolean
    /**
     * Obtains a free/busy object for the list of `users` in the time interval
     * between `start` and `end`.
     * 
     * The free/busy results can be returned through the
     * e_data_cal_report_free_busy_data() function asynchronously. The out_freebusy
     * will contain all the returned data, possibly again, thus the client is
     * responsible for the data merge, if needed.
     * 
     * If an error occurs, the function will set `error` and return %FALSE.
     * @param start start time
     * @param end end time
     * @param users a %NULL-terminated array of user strings
     * @param out_freebusy iCalendar strings with overall returned Free/Busy data
     * @param cancellable optional #GCancellable object, or %NULL
     * @returns %TRUE on success, %FALSE on failure.
     */
    get_free_busy_sync(start: number, end: number, users: string[], out_freebusy: string[], cancellable: Gio.Cancellable | null): boolean
    /**
     * Gets the kind of components the given backend stores.
     * @returns The kind of components for this backend.
     */
    get_kind(): ICalGLib.ComponentKind
    /**
     * Asynchronously obtains an #ECalComponent by its `uid` and, optionally, `rid`.
     * 
     * When the operation is finished, `callback` will be called.  You can then
     * call e_cal_backend_get_object_finish() to get the result of the operation.
     * @param uid a unique ID for an iCalendar object
     * @param rid a recurrence ID, or %NULL
     * @param cancellable optional #GCancellable object, or %NULL
     * @param callback a #GAsyncReadyCallback to call when the request is satisfied
     */
    get_object(uid: string | null, rid: string | null, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void
    /**
     * Finishes the operation started with e_cal_backend_get_object().
     * 
     * The returned string is an iCalendar object describing either single component
     * or a vCalendar object, which includes also detached instances. It should be
     * freed when no longer needed.
     * 
     * If an error occurs, the function will set `error` and return %NULL.
     * @param result a #GAsyncResult
     * @returns an #ECalComponent, or %NULL on error
     */
    get_object_finish(result: Gio.AsyncResult): string | null
    /**
     * Asynchronously obtains a set of iCalendar instances which satisfy
     * the criteria specified in `query`.
     * 
     * When the operation in finished, `callback` will be called.  You can then
     * call e_cal_backend_get_object_list_finish() to get the result of the
     * operation.
     * @param query a search query in S-expression format
     * @param cancellable optional #GCancellable object, or %NULL
     * @param callback a #GAsyncReadyCallback to call when the request is satisfied
     */
    get_object_list(query: string | null, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void
    /**
     * Finishes the operation started with e_cal_backend_get_object_list().
     * 
     * The matching iCalendar instances are deposited in `out_objects`.
     * The returned instances should be freed with g_free() when finished with them.
     * 
     * If an error occurred, the function will set `error` and return %FALSE.
     * Note that an empty result set does not necessarily imply an error.
     * @param result a #GAsyncResult
     * @param out_objects a #GQueue in which to deposit results
     * @returns %TRUE on success, %FALSE on failure
     */
    get_object_list_finish(result: Gio.AsyncResult, out_objects: GLib.Queue): boolean
    /**
     * Obtains a set of iCalendar string instances which satisfy the criteria
     * specified in `query,` and deposits them in `out_objects`.
     * 
     * The returned instances should be freed with g_free() when finished with them.
     * 
     * If an error occurs, the function will set `error` and return %FALSE.
     * Note that an empty result set does not necessarily imply an error.
     * @param query a search query in S-expression format
     * @param out_objects a #GQueue in which to deposit results
     * @param cancellable optional #GCancellable object, or %NULL
     * @returns %TRUE on success, %FALSE on failure
     */
    get_object_list_sync(query: string | null, out_objects: GLib.Queue, cancellable: Gio.Cancellable | null): boolean
    /**
     * Obtains an iCalendar string for an object identified by its `uid` and,
     * optionally, `rid`.
     * 
     * The returned string should be freed with g_free() when finished with it.
     * 
     * If an error occurs, the function will set `error` and return %NULL.
     * @param uid a unique ID for an iCalendar object
     * @param rid a recurrence ID, or %NULL
     * @param cancellable optional #GCancellable object, or %NULL
     * @returns an #ECalComponent, or %NULL on error
     */
    get_object_sync(uid: string | null, rid: string | null, cancellable: Gio.Cancellable | null): string | null
    /**
     * Returns the data source registry to which #EBackend:source belongs.
     * @returns an #ESourceRegistry
     */
    get_registry(): EDataServer.SourceRegistry
    /**
     * Asynchronously obtains the VTIMEZONE object identified by `tzid`.
     * 
     * When the operation is finished, `callback` will be called.  You can
     * then call e_cal_backend_get_timezone_finish() to get the result of
     * the operation.
     * @param tzid a unique ID for an iCalendar VTIMEZONE object
     * @param cancellable optional #GCancellable object, or %NULL
     * @param callback a #GAsyncReadyCallback to call when the request is satisfied
     */
    get_timezone(tzid: string | null, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void

    // Overloads of get_timezone

    /**
     * Obtains an #ICalTimezone by its TZID string.  If no match is found,
     * the function returns %NULL.  The returned #ICalTimezone is owned by
     * the `cache` and should not be modified or freed.
     * @param tzid the TZID of a timezone
     * @returns an #ICalTimezone, or %NULL
     */
    get_timezone(tzid: string | null): ICalGLib.Timezone | null
    /**
     * Finishes the operation started with e_cal_backend_get_timezone().
     * 
     * Free the returned string with g_free() when finished with it.
     * 
     * If an error occurred, the function will set `error` and return %NULL.
     * @param result a #GAsyncResult
     * @returns an iCalendar string, or %NULL on error
     */
    get_timezone_finish(result: Gio.AsyncResult): string | null
    /**
     * Obtains the VTIMEZONE object identified by `tzid`.  Free the returned
     * string with g_free() when finished with it.
     * 
     * If an error occurs, the function will set `error` and return %NULL.
     * @param tzid a unique ID for an iCalendar VTIMEZONE object
     * @param cancellable optional #GCancellable object, or %NULL
     * @returns an iCalendar string, or %NULL on error
     */
    get_timezone_sync(tzid: string | null, cancellable: Gio.Cancellable | null): string | null
    /**
     * Returns whether `backend` will accept changes to its data content.
     * @returns whether @backend is writable
     */
    get_writable(): boolean
    /**
     * Checks if `backend'`s storage has been opened (and
     * authenticated, if necessary) and the backend itself
     * is ready for accessing. This property is changed automatically
     * after the `backend` is successfully opened.
     * @returns %TRUE if fully opened, %FALSE otherwise.
     */
    is_opened(): boolean
    is_readonly(): boolean
    /**
     * Returns a list of #EDataCalView instances added with
     * e_cal_backend_add_view().
     * 
     * The views returned in the list are referenced for thread-safety.
     * They must each be unreferenced with g_object_unref() when finished
     * with them.  Free the returned list itself with g_list_free().
     * 
     * An easy way to free the list properly in one step is as follows:
     * 
     * 
     * ```
     *   g_list_free_full (list, g_object_unref);
     * ```
     * 
     * @returns a list of cal views
     */
    list_views(): DataCalView[]
    /**
     * Asynchronously modifies one or more iCalendar objects according to
     * `calobjs` and `mod`.
     * 
     * When the operation is finished, `callback` will be called.  You can then
     * call e_cal_backend_modify_objects_finish() to get the result of the
     * operation.
     * @param calobjs a %NULL-terminated array of iCalendar strings
     * @param mod modification type for recurrences
     * @param opflags bit-or of #ECalOperationFlags
     * @param cancellable optional #GCancellable object, or %NULL
     * @param callback a #GAsyncReadyCallback to call when the request is satisfied
     */
    modify_objects(calobjs: string | null, mod: ECal.ObjModType, opflags: ECal.OperationFlags, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void
    /**
     * Finishes the operation started with e_cal_backend_modify_objects().
     * 
     * If an error occurred, the function will set `error` and return %FALSE.
     * @param result a #GAsyncResult
     * @returns %TRUE on success, %FALSE on failure
     */
    modify_objects_finish(result: Gio.AsyncResult): boolean
    /**
     * Modifies one or more iCalendar objects according to `calobjs` and `mod`.
     * 
     * If an error occurs, the function will set `error` and return %FALSE.
     * @param calobjs a %NULL-terminated array of iCalendar strings
     * @param mod modification type for recurrences
     * @param opflags bit-or of #ECalOperationFlags
     * @param cancellable optional #GCancellable object, or %NULL
     * @returns %TRUE on success, %FALSE on failure
     */
    modify_objects_sync(calobjs: string | null, mod: ECal.ObjModType, opflags: ECal.OperationFlags, cancellable: Gio.Cancellable | null): boolean
    /**
     * Notifies each of the backend's listeners about a new object.
     * 
     * Uses the #EDataCalView's fields-of-interest to filter out unwanted
     * information from ical strings sent over the bus.
     * @param component the newly created #ECalComponent
     */
    notify_component_created(component: ECal.Component): void
    /**
     * Notifies each of the backend's listeners about a modified object.
     * 
     * Uses the #EDataCalView's fields-of-interest to filter out unwanted
     * information from ical strings sent over the bus.
     * @param old_component the #ECalComponent before the modification
     * @param new_component the #ECalComponent after the modification
     */
    notify_component_modified(old_component: ECal.Component, new_component: ECal.Component): void
    /**
     * Notifies each of the backend's listeners about a removed object.
     * 
     * Uses the #EDataCalView's fields-of-interest to filter out unwanted
     * information from ical strings sent over the bus.
     * @param id the Id of the removed object
     * @param old_component the removed component
     * @param new_component the component after the removal. This only applies to recurrent appointments that had an instance removed. In that case, this function notifies a modification instead of a removal.
     */
    notify_component_removed(id: ECal.ComponentId, old_component: ECal.Component, new_component: ECal.Component): void
    /**
     * Notifies each of the backend's listeners about an error
     * @param message Error message
     */
    notify_error(message: string | null): void
    /**
     * Notifies client about property value change.
     * @param prop_name property name, which changed
     * @param prop_value new property value
     */
    notify_property_changed(prop_name: string | null, prop_value: string | null): void
    /**
     * Asynchronously "opens" the `backend`.  Opening a backend is something of
     * an outdated concept, but the operation is hanging around for a little
     * while longer.  This usually involves some custom initialization logic,
     * and testing of remote authentication if applicable.
     * 
     * When the operation is finished, `callback` will be called.  You can then
     * call e_cal_backend_open_finish() to get the result of the operation.
     * @param cancellable optional #GCancellable object, or %NULL
     * @param callback a #GAsyncReadyCallback to call when the request is satisfied
     */
    open(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void
    /**
     * Finishes the operation started with e_cal_backend_open().
     * 
     * If an error occurred, the function will set `error` and return %FALSE.
     * @param result a #GAsyncResult
     * @returns %TRUE on success, %FALSE on failure
     */
    open_finish(result: Gio.AsyncResult): boolean
    /**
     * "Opens" the `backend`.  Opening a backend is something of an outdated
     * concept, but the operation is hanging around for a little while longer.
     * This usually involves some custom initialization logic, and testing of
     * remote authentication if applicable.
     * 
     * If an error occurs, the function will set `error` and return %FALSE.
     * @param cancellable optional #GCancellable object, or %NULL
     * @returns %TRUE on success, %FALSE on failure
     */
    open_sync(cancellable: Gio.Cancellable | null): boolean
    /**
     * Obtains the #GSimpleAsyncResult for `opid` and sets `result_queue` as a
     * place to deposit results prior to completing the #GSimpleAsyncResult.
     * 
     * <note>
     *   <para>
     *     This is a temporary function to serve #EDataCal's "respond"
     *     functions until they can be removed.  Nothing else should be
     *     calling this function.
     *   </para>
     * </note>
     * @param opid an operation ID given to #EDataCal
     * @param result_queue return location for a #GQueue, or %NULL
     * @returns a #GSimpleAsyncResult
     */
    prepare_for_completion(opid: number, result_queue: GLib.Queue): Gio.SimpleAsyncResult
    /**
     * Asynchronously receives the set of iCalendar objects specified by
     * `calobj`.  This is used for iTIP confirmation and cancellation messages
     * for scheduled meetings.
     * 
     * When the operation is finished, `callback` will be called.  You can then
     * call e_cal_backend_receive_objects_finish() to get the result of the
     * operation.
     * @param calobj an iCalendar string
     * @param opflags bit-or of #ECalOperationFlags
     * @param cancellable optional #GCancellable object, or %NULL
     * @param callback a #GAsyncReadyCallback to call when the request is satisfied
     */
    receive_objects(calobj: string | null, opflags: ECal.OperationFlags, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void
    /**
     * Finishes the operation started with e_cal_backend_receive_objects().
     * 
     * If an error occurred, the function will set `error` and erturn %FALSE.
     * @param result a #GAsyncResult
     * @returns %TRUE on success, %FALSE on failure
     */
    receive_objects_finish(result: Gio.AsyncResult): boolean
    /**
     * Receives the set of iCalendar objects specified by `calobj`.  This is used
     * for iTIP confirmation and cancellation messages for scheduled meetings.
     * 
     * If an error occurs, the function will set `error` and return %FALSE.
     * @param calobj an iCalendar string
     * @param opflags bit-or of #ECalOperationFlags
     * @param cancellable optional #GCancellable object, or %NULL
     * @returns %TRUE on success, %FALSE on failure
     */
    receive_objects_sync(calobj: string | null, opflags: ECal.OperationFlags, cancellable: Gio.Cancellable | null): boolean
    /**
     * Returns the #EDataCal for `backend`.  The #EDataCal is essentially
     * the glue between incoming D-Bus requests and `backend'`s native API.
     * 
     * An #EDataCal should be set only once after `backend` is first created.
     * If an #EDataCal has not yet been set, the function returns %NULL.
     * 
     * The returned #EDataCal is referenced for thread-safety and must be
     * unreferenced with g_object_unref() when finished with it.
     * @returns an #EDataCal, or %NULL
     */
    ref_data_cal(): DataCal | null
    /**
     * Returns the #GProxyResolver for `backend` (if applicable), as indicated
     * by the #ESourceAuthentication:proxy-uid of `backend'`s #EBackend:source
     * or one of its ancestors.
     * 
     * The returned #GProxyResolver is referenced for thread-safety and must
     * be unreferenced with g_object_unref() when finished with it.
     * @returns a #GProxyResolver, or %NULL
     */
    ref_proxy_resolver(): Gio.ProxyResolver | null
    /**
     * Asynchronously initiates a refresh for `backend,` if the `backend` supports
     * refreshing.  The actual refresh operation completes on its own time.  This
     * function, along with e_cal_backend_refresh_finish(), merely initiates the
     * operation.
     * 
     * Once the refresh is initiated, `callback` will be called.  You can then
     * call e_cal_backend_refresh_finish() to get the result of the initiation.
     * @param cancellable optional #GCancellable object, or %NULL
     * @param callback a #GAsyncReadyCallback to call when the request is satisfied
     */
    refresh(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void
    /**
     * Finishes the refresh initiation started with e_cal_backend_refresh().
     * 
     * If an error occurred while initiating the refresh, the function will set
     * `error` and return %FALSE.  If the `backend` does not support refreshing,
     * the function will set an %E_CLIENT_ERROR_NOT_SUPPORTED error and return
     * %FALSE.
     * @param result a #GAsyncResult
     * @returns %TRUE on success, %FALSE on failure
     */
    refresh_finish(result: Gio.AsyncResult): boolean
    /**
     * Initiates a refresh for `backend,` if the `backend` supports refreshing.
     * The actual refresh operation completes on its own time.  This function
     * merely initiates the operation.
     * 
     * If an error occrs while initiating the refresh, the function will set
     * `error` and return %FALSE.  If the `backend` does not support refreshing,
     * the function will set an %E_CLIENT_ERROR_NOT_SUPPORTED error and return
     * %FALSE.
     * @param cancellable optional #GCancellable object, or %NULL
     * @returns %TRUE on success, %FALSE on failure
     */
    refresh_sync(cancellable: Gio.Cancellable | null): boolean
    /**
     * Asynchronously removes one or more iCalendar objects according to
     * `component_ids` and `mod`.
     * 
     * When the operation is finished, `callback` will be called.  You can then
     * call e_cal_backend_remove_objects_finish() to get the result of the
     * operation.
     * @param component_ids a #GList of #ECalComponentId structs
     * @param mod modification type for recurrences
     * @param opflags bit-or of #ECalOperationFlags
     * @param cancellable optional #GCancellable object, or %NULL
     * @param callback a #GAsyncReadyCallback to call when the request is satisfied
     */
    remove_objects(component_ids: ECal.ComponentId[], mod: ECal.ObjModType, opflags: ECal.OperationFlags, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void
    /**
     * Finishes the operation started with e_cal_backend_remove_objects().
     * 
     * If an error occurred, the function will set `error` and return %FALSE.
     * @param result a #GAsyncResult
     * @returns %TRUE on success, %FALSE on failure
     */
    remove_objects_finish(result: Gio.AsyncResult): boolean
    /**
     * Removes one or more iCalendar objects according to `component_ids` and `mod`.
     * 
     * If an error occurs, the function will set `error` and return %FALSE.
     * @param component_ids a #GList of #ECalComponentId structs
     * @param mod modification type for recurrences
     * @param opflags bit-or of #ECalOperationFlags
     * @param cancellable optional #GCancellable object, or %NULL
     * @returns %TRUE on success, %FALSE on failure
     */
    remove_objects_sync(component_ids: ECal.ComponentId[], mod: ECal.ObjModType, opflags: ECal.OperationFlags, cancellable: Gio.Cancellable | null): boolean
    /**
     * Removes view from the list of live views for the backend.
     * @param view An #EDataCalView object, previously added with `ref` e_cal_backend_add_view.
     */
    remove_view(view: DataCalView): void
    /**
     * Schedules user function `func` to be run in a dedicated thread as
     * a blocking operation.
     * 
     * The function adds its own reference to `use_cancellable,` if not %NULL.
     * 
     * The error returned from `func` is propagated to client using
     * e_cal_backend_notify_error() function. If it's not desired,
     * then left the error unchanged and notify about errors manually.
     * @param use_cancellable an optional #GCancellable to use for `func`
     * @param func a function to call in a dedicated thread
     */
    schedule_custom_operation(use_cancellable: Gio.Cancellable | null, func: CalBackendCustomOpFunc): void
    /**
     * Asynchronously sends meeting information in `calobj`.  The `backend` may
     * modify `calobj` and send meeting information only to particular users.
     * 
     * When the operation is finished, `callback` will be called.  You can then
     * call e_cal_backend_send_objects_finish() to get the result of the operation.
     * @param calobj an iCalendar string
     * @param opflags bit-or of #ECalOperationFlags
     * @param cancellable optional #GCancellable object, or %NULL
     * @param callback a #GAsyncReadyCallback to call when the request is satisfied
     */
    send_objects(calobj: string | null, opflags: ECal.OperationFlags, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void
    /**
     * Finishes the operation started with e_cal_backend_send_objects().
     * 
     * The function returns a string representation of a sent, or to be send,
     * vCalendar and deposits the list of users the meeting information was sent
     * to, or to be send to, in `out_users`.
     * 
     * Free the returned pointer with g_free(), when no longer needed.
     * 
     * If an error occurs, the function will set `error` and return %NULL.
     * @param result a #GAsyncResult
     * @param out_users a #GQueue in which to deposit results
     * @returns a newly allocated vCalendar string, or %NULL on error
     */
    send_objects_finish(result: Gio.AsyncResult, out_users: GLib.Queue): string | null
    /**
     * Sends meeting information in `calobj`.  The `backend` may modify `calobj`
     * and send meeting information only to particular users.  The function
     * returns the (maybe) modified `calobj` and deposits the list of users the
     * meeting information was sent (to be send) to in `out_users`.
     * 
     * The returned pointer should be freed with g_free(), when no londer needed.
     * 
     * If an error occurs, the function will set `error` and return %NULL.
     * @param calobj an iCalendar string
     * @param opflags bit-or of #ECalOperationFlags
     * @param out_users a #GQueue in which to deposit results
     * @param cancellable optional #GCancellable object, or %NULL
     * @returns a vCalendar string, or %NULL on error
     */
    send_objects_sync(calobj: string | null, opflags: ECal.OperationFlags, out_users: GLib.Queue, cancellable: Gio.Cancellable | null): string | null
    /**
     * Sets the cache directory path for use by `backend`.
     * 
     * Note that #ECalBackend is initialized with a default cache directory
     * path which should suffice for most cases.  Backends should not override
     * the default path without good reason.
     * @param cache_dir a local cache directory path
     */
    set_cache_dir(cache_dir: string | null): void
    /**
     * Sets the #EDataCal for `backend`.  The #EDataCal is essentially the
     * glue between incoming D-Bus requests and `backend'`s native API.
     * 
     * An #EDataCal should be set only once after `backend` is first created.
     * 
     * The `backend` adds its own reference on the `data_cal`.
     * @param data_cal an #EDataCal
     */
    set_data_cal(data_cal: DataCal): void
    /**
     * Sets whether `backend` will accept changes to its data content.
     * @param writable whether `backend` is writable
     */
    set_writable(writable: boolean): void
    /**
     * Starts a new live view on the given backend.
     * @param view The view to be started.
     */
    start_view(view: DataCalView): void
    /**
     * Stops a previously started live view on the given backend.
     * @param view The view to be stopped.
     */
    stop_view(view: DataCalView): void

    // Own virtual methods of EDataCal-2.0.EDataCal.CalBackend

    vfunc_closed(sender: string | null): void
    vfunc_impl_add_timezone(cal: DataCal, opid: number, cancellable: Gio.Cancellable | null, tzobject: string | null): void
    vfunc_impl_discard_alarm(cal: DataCal, opid: number, cancellable: Gio.Cancellable | null, uid: string | null, rid: string | null, auid: string | null, opflags: ECal.OperationFlags): void
    vfunc_impl_get_attachment_uris(cal: DataCal, opid: number, cancellable: Gio.Cancellable | null, uid: string | null, rid: string | null): void
    vfunc_impl_get_backend_property(prop_name: string | null): string | null
    vfunc_impl_get_object(cal: DataCal, opid: number, cancellable: Gio.Cancellable | null, uid: string | null, rid: string | null): void
    vfunc_impl_get_object_list(cal: DataCal, opid: number, cancellable: Gio.Cancellable | null, sexp: string | null): void
    vfunc_impl_get_timezone(cal: DataCal, opid: number, cancellable: Gio.Cancellable | null, tzid: string | null): void
    vfunc_impl_open(cal: DataCal, opid: number, cancellable: Gio.Cancellable | null): void
    vfunc_impl_receive_objects(cal: DataCal, opid: number, cancellable: Gio.Cancellable | null, calobj: string | null, opflags: ECal.OperationFlags): void
    vfunc_impl_refresh(cal: DataCal, opid: number, cancellable: Gio.Cancellable | null): void
    vfunc_impl_send_objects(cal: DataCal, opid: number, cancellable: Gio.Cancellable | null, calobj: string | null, opflags: ECal.OperationFlags): void
    vfunc_impl_start_view(view: DataCalView): void
    vfunc_impl_stop_view(view: DataCalView): void
    vfunc_shutdown(): void

    // Own signals of EDataCal-2.0.EDataCal.CalBackend

    connect(sigName: "closed", callback: CalBackend.ClosedSignalCallback): number
    connect_after(sigName: "closed", callback: CalBackend.ClosedSignalCallback): number
    emit(sigName: "closed", sender: string | null, ...args: any[]): void
    connect(sigName: "shutdown", callback: CalBackend.ShutdownSignalCallback): number
    connect_after(sigName: "shutdown", callback: CalBackend.ShutdownSignalCallback): number
    emit(sigName: "shutdown", ...args: any[]): void

    // Class property signals of EDataCal-2.0.EDataCal.CalBackend

    connect(sigName: "notify::cache-dir", callback: (($obj: CalBackend, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::cache-dir", callback: (($obj: CalBackend, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::cache-dir", ...args: any[]): void
    connect(sigName: "notify::kind", callback: (($obj: CalBackend, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::kind", callback: (($obj: CalBackend, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::kind", ...args: any[]): void
    connect(sigName: "notify::proxy-resolver", callback: (($obj: CalBackend, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::proxy-resolver", callback: (($obj: CalBackend, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::proxy-resolver", ...args: any[]): void
    connect(sigName: "notify::registry", callback: (($obj: CalBackend, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::registry", callback: (($obj: CalBackend, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::registry", ...args: any[]): void
    connect(sigName: "notify::writable", callback: (($obj: CalBackend, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::writable", callback: (($obj: CalBackend, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::writable", ...args: any[]): void
    connect(sigName: "notify::connectable", callback: (($obj: CalBackend, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::connectable", callback: (($obj: CalBackend, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::connectable", ...args: any[]): void
    connect(sigName: "notify::main-context", callback: (($obj: CalBackend, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::main-context", callback: (($obj: CalBackend, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::main-context", ...args: any[]): void
    connect(sigName: "notify::online", callback: (($obj: CalBackend, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::online", callback: (($obj: CalBackend, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::online", ...args: any[]): void
    connect(sigName: "notify::source", callback: (($obj: CalBackend, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::source", callback: (($obj: CalBackend, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::source", ...args: any[]): void
    connect(sigName: "notify::user-prompter", callback: (($obj: CalBackend, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::user-prompter", callback: (($obj: CalBackend, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::user-prompter", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * Contains only private data that should be read and manipulated using the
 * functions below.
 * @class 
 */
class CalBackend extends EBackend.Backend {

    // Own properties of EDataCal-2.0.EDataCal.CalBackend

    static name: string
    static $gtype: GObject.GType<CalBackend>

    // Constructors of EDataCal-2.0.EDataCal.CalBackend

    constructor(config?: CalBackend.ConstructorProperties) 
    _init(config?: CalBackend.ConstructorProperties): void
    /**
     * Retrieve the default mail account as stored in Evolution configuration.
     * @param registry an #ESourceRegistry
     * @param address placeholder for default address
     * @param name placeholder for name
     * @returns TRUE if there is a default account, FALSE otherwise.
     */
    static mail_account_get_default(registry: EDataServer.SourceRegistry, address: string | null, name: string | null): boolean
    /**
     * Checks that a mail account is valid, and returns its name.
     * @param registry an #ESourceRegistry
     * @param user user name for the account to check
     * @param name placeholder for the account name
     * @returns TRUE if the account is valid, FALSE if not.
     */
    static mail_account_is_valid(registry: EDataServer.SourceRegistry, user: string | null, name: string | null): boolean
    static user_declined(registry: EDataServer.SourceRegistry, icalcomp: ICalGLib.Component): boolean
}

module CalBackendFactory {

    // Constructor properties interface

    interface ConstructorProperties extends EBackend.BackendFactory.ConstructorProperties {
    }

}

interface CalBackendFactory {

    // Class property signals of EDataCal-2.0.EDataCal.CalBackendFactory

    connect(sigName: "notify::extensible", callback: (($obj: CalBackendFactory, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::extensible", callback: (($obj: CalBackendFactory, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::extensible", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * Contains only private data that should be read and manipulated using the
 * functions below.
 * @class 
 */
class CalBackendFactory extends EBackend.BackendFactory {

    // Own properties of EDataCal-2.0.EDataCal.CalBackendFactory

    static name: string
    static $gtype: GObject.GType<CalBackendFactory>

    // Constructors of EDataCal-2.0.EDataCal.CalBackendFactory

    constructor(config?: CalBackendFactory.ConstructorProperties) 
    _init(config?: CalBackendFactory.ConstructorProperties): void
}

module CalBackendSExp {

    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

interface CalBackendSExp {

    // Owm methods of EDataCal-2.0.EDataCal.CalBackendSExp

    /**
     * Determines biggest time window given by expressions "occur-in-range" in sexp.
     * @param start Start of the time window will be stored here.
     * @param end End of the time window will be stored here.
     * @returns %TRUE on success, %FALSE otherwise
     */
    evaluate_occur_times(start: number, end: number): boolean
    /**
     * Locks the `sexp`. Other threads cannot use it until
     * it's unlocked with e_cal_backend_sexp_unlock().
     */
    lock(): void
    /**
     * Checks if `comp` matches `sexp`.
     * @param comp Component to match against the expression.
     * @param cache an #ETimezoneCache
     * @returns %TRUE if the component matches, %FALSE otherwise
     */
    match_comp(comp: ECal.Component, cache: ECal.TimezoneCache): boolean
    /**
     * Checks if `object` matches `sexp`.
     * @param object An iCalendar string.
     * @param cache an #ETimezoneCache
     * @returns %TRUE if the object matches, %FALSE otherwise
     */
    match_object(object: string | null, cache: ECal.TimezoneCache): boolean
    /**
     * Retrieve the text expression for the given #ECalBackendSExp object.
     * @returns the text expression
     */
    text(): string | null
    /**
     * Unlocks the `sexp,` previously locked by e_cal_backend_sexp_lock().
     */
    unlock(): void

    // Class property signals of EDataCal-2.0.EDataCal.CalBackendSExp

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class CalBackendSExp extends GObject.Object {

    // Own properties of EDataCal-2.0.EDataCal.CalBackendSExp

    static name: string
    static $gtype: GObject.GType<CalBackendSExp>

    // Constructors of EDataCal-2.0.EDataCal.CalBackendSExp

    constructor(config?: CalBackendSExp.ConstructorProperties) 
    constructor(text: string | null) 
    static new(text: string | null): CalBackendSExp
    _init(config?: CalBackendSExp.ConstructorProperties): void
}

module CalBackendSync {

    // Constructor properties interface

    interface ConstructorProperties extends ECal.TimezoneCache.ConstructorProperties, CalBackend.ConstructorProperties {
    }

}

interface CalBackendSync extends ECal.TimezoneCache {

    // Owm methods of EDataCal-2.0.EDataCal.CalBackendSync

    /**
     * Calls the add_timezone_sync method on the given backend.
     * @param cal An EDataCal object.
     * @param cancellable a #GCancellable for the operation
     * @param tzobject VTIMEZONE object to be added.
     */
    add_timezone(cal: DataCal, cancellable: Gio.Cancellable | null, tzobject: string | null): void

    // Overloads of add_timezone

    /**
     * Adds a copy of `zone` to `cache` and emits an
     * #ETimezoneCache::timezone-added signal.  The `cache` will use the TZID
     * string returned by i_cal_timezone_get_tzid() as the lookup key, which can
     * be passed to e_timezone_cache_get_timezone() to obtain `zone` again.
     * 
     * If the `cache` already has an #ICalTimezone with the same TZID string
     * as `zone,` the `cache` will remain unchanged to avoid invalidating any
     * #ICalTimezone pointers which may have already been returned through
     * e_timezone_cache_get_timezone().
     * @param zone an #ICalTimezone
     */
    add_timezone(zone: ICalGLib.Timezone): void
    /**
     * Asynchronously adds the timezone described by `tzobject` to `backend`.
     * 
     * When the operation is finished, `callback` will be called.  You can
     * then call e_cal_backend_add_timezone_finish() to get the result of
     * the operation.
     * @param tzobject an iCalendar VTIMEZONE string
     * @param cancellable optional #GCancellable object, or %NULL
     * @param callback a #GAsyncReadyCallback to call when the request is satisfied
     */
    add_timezone(tzobject: string | null, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void
    /**
     * Calls the create_objects_sync method on the given backend.
     * @param cal An EDataCal object.
     * @param cancellable a #GCancellable for the operation
     * @param calobjs The objects to be added.
     * @param opflags bit-or of #ECalOperationFlags
     */
    create_objects(cal: DataCal, cancellable: Gio.Cancellable | null, calobjs: string[], opflags: ECal.OperationFlags): [ /* uids */ string[], /* new_components */ ECal.Component[] ]

    // Overloads of create_objects

    /**
     * Asynchronously creates one or more new iCalendar objects from `calobjs`.
     * 
     * When the operation is finished, `callback` will be called.  You can then
     * call e_cal_backend_create_objects_finish() to get the result of the
     * operation.
     * @param calobjs a %NULL-terminated array of iCalendar strings
     * @param opflags bit-or of #ECalOperationFlags
     * @param cancellable optional #GCancellable object, or %NULL
     * @param callback a #GAsyncReadyCallback to call when the request is satisifed
     */
    create_objects(calobjs: string | null, opflags: ECal.OperationFlags, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void
    /**
     * Calls the discard_alarm_sync method on the given backend.
     * @param cal An EDataCal object.
     * @param cancellable a #GCancellable for the operation
     * @param uid Unique id of the calendar object.
     * @param rid Recurrence id of the calendar object.
     * @param auid Alarm ID to remove.
     * @param opflags bit-or of #ECalOperationFlags
     */
    discard_alarm(cal: DataCal, cancellable: Gio.Cancellable | null, uid: string | null, rid: string | null, auid: string | null, opflags: ECal.OperationFlags): void

    // Overloads of discard_alarm

    /**
     * Asynchronously discards the VALARM object with a unique ID of `alarm_uid`
     * from the iCalendar object identified by `uid` and, optionally, `rid`.
     * 
     * When the operation is finished, `callback` will be called.  You can
     * then call e_cal_backend_discard_alarm_finish() to get the result of
     * the operation.
     * @param uid a unique ID for an iCalendar object
     * @param rid a recurrence ID, or %NULL
     * @param alarm_uid a unique ID for an iCalendar VALARM object
     * @param opflags bit-or of #ECalOperationFlags
     * @param cancellable optional #GCancellable object, or %NULL
     * @param callback a #GAsyncReadyCallback to call when the request is satisfied
     */
    discard_alarm(uid: string | null, rid: string | null, alarm_uid: string | null, opflags: ECal.OperationFlags, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void
    /**
     * Calls the get_attachment_uris_sync method on the given backend.
     * @param cal An EDataCal object.
     * @param cancellable a #GCancellable for the operation
     * @param uid Unique id of the calendar object.
     * @param rid Recurrence id of the calendar object.
     * @param attachments Placeholder for list of returned attachment uris.
     */
    get_attachment_uris(cal: DataCal, cancellable: Gio.Cancellable | null, uid: string | null, rid: string | null, attachments: string[]): void

    // Overloads of get_attachment_uris

    /**
     * Asynchronously inspects the iCalendar object specified by `uid` and,
     * optionally, `rid` for attachments.
     * 
     * When the operation is finished, `callback` will be called.  You can then
     * call e_cal_backend_get_attachment_uris_finish() to get the result of the
     * operation.
     * @param uid a unique ID for an iCalendar object
     * @param rid a recurrence ID, or %NULL
     * @param cancellable optional #GCancellable object, or %NULL
     * @param callback a #GAsyncReadyCallback to call when the request is satisfied
     */
    get_attachment_uris(uid: string | null, rid: string | null, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void
    /**
     * Calls the get_free_busy_sync method on the given backend.
     * @param cal An EDataCal object.
     * @param cancellable a #GCancellable for the operation
     * @param users List of users to get F/B info from.
     * @param start Time range start.
     * @param end Time range end.
     */
    get_free_busy(cal: DataCal, cancellable: Gio.Cancellable | null, users: string[], start: number, end: number): /* freebusyobjects */ string[]

    // Overloads of get_free_busy

    /**
     * Asynchronously obtains a free/busy object for the list of `users` in the
     * time interval between `start` and `end`.
     * 
     * When the operation is finished, `callback` will be called.  You can
     * then call e_cal_backend_get_free_busy_finish() to get the result of
     * the operation.
     * @param start start time
     * @param end end time
     * @param users a %NULL-terminated array of user strings
     * @param cancellable optional #GCancellable object, or %NULL
     * @param callback a #GAsyncReadyCallback to call when the request is satisfied
     */
    get_free_busy(start: number, end: number, users: string[], cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void
    /**
     * Calls the get_object_sync method on the given backend.
     * @param cal An EDataCal object.
     * @param cancellable a #GCancellable for the operation
     * @param uid UID of the object to get.
     * @param rid Recurrence ID of the specific instance to get, or %NULL if    getting the master object.
     */
    get_object(cal: DataCal, cancellable: Gio.Cancellable | null, uid: string | null, rid: string | null): /* calobj */ string | null

    // Overloads of get_object

    /**
     * Asynchronously obtains an #ECalComponent by its `uid` and, optionally, `rid`.
     * 
     * When the operation is finished, `callback` will be called.  You can then
     * call e_cal_backend_get_object_finish() to get the result of the operation.
     * @param uid a unique ID for an iCalendar object
     * @param rid a recurrence ID, or %NULL
     * @param cancellable optional #GCancellable object, or %NULL
     * @param callback a #GAsyncReadyCallback to call when the request is satisfied
     */
    get_object(uid: string | null, rid: string | null, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void
    /**
     * Calls the get_object_list_sync method on the given backend.
     * @param cal An EDataCal object.
     * @param cancellable a #GCancellable for the operation
     * @param sexp Search query.
     */
    get_object_list(cal: DataCal, cancellable: Gio.Cancellable | null, sexp: string | null): /* calobjs */ string[]

    // Overloads of get_object_list

    /**
     * Asynchronously obtains a set of iCalendar instances which satisfy
     * the criteria specified in `query`.
     * 
     * When the operation in finished, `callback` will be called.  You can then
     * call e_cal_backend_get_object_list_finish() to get the result of the
     * operation.
     * @param query a search query in S-expression format
     * @param cancellable optional #GCancellable object, or %NULL
     * @param callback a #GAsyncReadyCallback to call when the request is satisfied
     */
    get_object_list(query: string | null, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void
    /**
     * Calls the get_timezone_sync method on the given backend.
     * This method is not mandatory on the backend, because here
     * is used internal_get_timezone call to fetch timezone from
     * it and that is transformed to a string. In other words,
     * any object deriving from ECalBackendSync can implement only
     * internal_get_timezone and can skip implementation of
     * get_timezone_sync completely.
     * @param cal An EDataCal object.
     * @param cancellable a #GCancellable for the operation
     * @param tzid ID of the timezone to retrieve.
     * @param tzobject Placeholder for the returned timezone.
     */
    get_timezone(cal: DataCal, cancellable: Gio.Cancellable | null, tzid: string | null, tzobject: string | null): void

    // Overloads of get_timezone

    /**
     * Obtains an #ICalTimezone by its TZID string.  If no match is found,
     * the function returns %NULL.  The returned #ICalTimezone is owned by
     * the `cache` and should not be modified or freed.
     * @param tzid the TZID of a timezone
     * @returns an #ICalTimezone, or %NULL
     */
    get_timezone(tzid: string | null): ICalGLib.Timezone | null
    /**
     * Asynchronously obtains the VTIMEZONE object identified by `tzid`.
     * 
     * When the operation is finished, `callback` will be called.  You can
     * then call e_cal_backend_get_timezone_finish() to get the result of
     * the operation.
     * @param tzid a unique ID for an iCalendar VTIMEZONE object
     * @param cancellable optional #GCancellable object, or %NULL
     * @param callback a #GAsyncReadyCallback to call when the request is satisfied
     */
    get_timezone(tzid: string | null, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void
    /**
     * Calls the modify_objects_sync method on the given backend.
     * @param cal An EDataCal object.
     * @param cancellable a #GCancellable for the operation
     * @param calobjs Objects to be modified.
     * @param mod Type of modification to be done.
     * @param opflags bit-or of #ECalOperationFlags
     */
    modify_objects(cal: DataCal, cancellable: Gio.Cancellable | null, calobjs: string[], mod: ECal.ObjModType, opflags: ECal.OperationFlags): [ /* old_components */ ECal.Component[], /* new_components */ ECal.Component[] ]

    // Overloads of modify_objects

    /**
     * Asynchronously modifies one or more iCalendar objects according to
     * `calobjs` and `mod`.
     * 
     * When the operation is finished, `callback` will be called.  You can then
     * call e_cal_backend_modify_objects_finish() to get the result of the
     * operation.
     * @param calobjs a %NULL-terminated array of iCalendar strings
     * @param mod modification type for recurrences
     * @param opflags bit-or of #ECalOperationFlags
     * @param cancellable optional #GCancellable object, or %NULL
     * @param callback a #GAsyncReadyCallback to call when the request is satisfied
     */
    modify_objects(calobjs: string | null, mod: ECal.ObjModType, opflags: ECal.OperationFlags, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void
    /**
     * Calls the open_sync method on the given backend.
     * @param cal An EDataCal object.
     * @param cancellable a #GCancellable for the operation or just create it when it does not exist.
     */
    open(cal: DataCal, cancellable: Gio.Cancellable | null): void

    // Overloads of open

    /**
     * Asynchronously "opens" the `backend`.  Opening a backend is something of
     * an outdated concept, but the operation is hanging around for a little
     * while longer.  This usually involves some custom initialization logic,
     * and testing of remote authentication if applicable.
     * 
     * When the operation is finished, `callback` will be called.  You can then
     * call e_cal_backend_open_finish() to get the result of the operation.
     * @param cancellable optional #GCancellable object, or %NULL
     * @param callback a #GAsyncReadyCallback to call when the request is satisfied
     */
    open(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void
    /**
     * Calls the receive_objects_sync method on the given backend.
     * @param cal An EDataCal object.
     * @param cancellable a #GCancellable for the operation
     * @param calobj iCalendar object to receive.
     * @param opflags bit-or of #ECalOperationFlags
     */
    receive_objects(cal: DataCal, cancellable: Gio.Cancellable | null, calobj: string | null, opflags: ECal.OperationFlags): void

    // Overloads of receive_objects

    /**
     * Asynchronously receives the set of iCalendar objects specified by
     * `calobj`.  This is used for iTIP confirmation and cancellation messages
     * for scheduled meetings.
     * 
     * When the operation is finished, `callback` will be called.  You can then
     * call e_cal_backend_receive_objects_finish() to get the result of the
     * operation.
     * @param calobj an iCalendar string
     * @param opflags bit-or of #ECalOperationFlags
     * @param cancellable optional #GCancellable object, or %NULL
     * @param callback a #GAsyncReadyCallback to call when the request is satisfied
     */
    receive_objects(calobj: string | null, opflags: ECal.OperationFlags, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void
    /**
     * Calls the refresh_sync method on the given backend.
     * @param cal An EDataCal object.
     * @param cancellable a #GCancellable for the operation
     */
    refresh(cal: DataCal, cancellable: Gio.Cancellable | null): void

    // Overloads of refresh

    /**
     * Asynchronously initiates a refresh for `backend,` if the `backend` supports
     * refreshing.  The actual refresh operation completes on its own time.  This
     * function, along with e_cal_backend_refresh_finish(), merely initiates the
     * operation.
     * 
     * Once the refresh is initiated, `callback` will be called.  You can then
     * call e_cal_backend_refresh_finish() to get the result of the initiation.
     * @param cancellable optional #GCancellable object, or %NULL
     * @param callback a #GAsyncReadyCallback to call when the request is satisfied
     */
    refresh(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void
    /**
     * Calls the remove_objects_sync method on the given backend.
     * @param cal An EDataCal object.
     * @param cancellable a #GCancellable for the operation
     * @param ids List of #ECalComponentId objects identifying the objects to remove.
     * @param mod Type of removal.
     * @param opflags bit-or of #ECalOperationFlags
     */
    remove_objects(cal: DataCal, cancellable: Gio.Cancellable | null, ids: ECal.ComponentId[], mod: ECal.ObjModType, opflags: ECal.OperationFlags): [ /* old_components */ ECal.Component[], /* new_components */ ECal.Component[] ]

    // Overloads of remove_objects

    /**
     * Asynchronously removes one or more iCalendar objects according to
     * `component_ids` and `mod`.
     * 
     * When the operation is finished, `callback` will be called.  You can then
     * call e_cal_backend_remove_objects_finish() to get the result of the
     * operation.
     * @param component_ids a #GList of #ECalComponentId structs
     * @param mod modification type for recurrences
     * @param opflags bit-or of #ECalOperationFlags
     * @param cancellable optional #GCancellable object, or %NULL
     * @param callback a #GAsyncReadyCallback to call when the request is satisfied
     */
    remove_objects(component_ids: ECal.ComponentId[], mod: ECal.ObjModType, opflags: ECal.OperationFlags, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void
    /**
     * Calls the send_objects_sync method on the given backend.
     * @param cal An EDataCal object.
     * @param cancellable a #GCancellable for the operation
     * @param calobj The iCalendar object to send.
     * @param opflags bit-or of #ECalOperationFlags
     * @param users List of users to send notifications to.
     */
    send_objects(cal: DataCal, cancellable: Gio.Cancellable | null, calobj: string | null, opflags: ECal.OperationFlags, users: string[]): /* modified_calobj */ string | null

    // Overloads of send_objects

    /**
     * Asynchronously sends meeting information in `calobj`.  The `backend` may
     * modify `calobj` and send meeting information only to particular users.
     * 
     * When the operation is finished, `callback` will be called.  You can then
     * call e_cal_backend_send_objects_finish() to get the result of the operation.
     * @param calobj an iCalendar string
     * @param opflags bit-or of #ECalOperationFlags
     * @param cancellable optional #GCancellable object, or %NULL
     * @param callback a #GAsyncReadyCallback to call when the request is satisfied
     */
    send_objects(calobj: string | null, opflags: ECal.OperationFlags, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void

    // Own virtual methods of EDataCal-2.0.EDataCal.CalBackendSync

    vfunc_add_timezone_sync(cal: DataCal, cancellable: Gio.Cancellable | null, tzobject: string | null): void
    vfunc_discard_alarm_sync(cal: DataCal, cancellable: Gio.Cancellable | null, uid: string | null, rid: string | null, auid: string | null, opflags: ECal.OperationFlags): void
    vfunc_get_object_sync(cal: DataCal, cancellable: Gio.Cancellable | null, uid: string | null, rid: string | null, calobj: string | null): void
    vfunc_get_timezone_sync(cal: DataCal, cancellable: Gio.Cancellable | null, tzid: string | null, tzobject: string | null): void
    vfunc_open_sync(cal: DataCal, cancellable: Gio.Cancellable | null): void
    vfunc_receive_objects_sync(cal: DataCal, cancellable: Gio.Cancellable | null, calobj: string | null, opflags: ECal.OperationFlags): void
    vfunc_refresh_sync(cal: DataCal, cancellable: Gio.Cancellable | null): void

    // Class property signals of EDataCal-2.0.EDataCal.CalBackendSync

    connect(sigName: "notify::cache-dir", callback: (($obj: CalBackendSync, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::cache-dir", callback: (($obj: CalBackendSync, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::cache-dir", ...args: any[]): void
    connect(sigName: "notify::kind", callback: (($obj: CalBackendSync, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::kind", callback: (($obj: CalBackendSync, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::kind", ...args: any[]): void
    connect(sigName: "notify::proxy-resolver", callback: (($obj: CalBackendSync, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::proxy-resolver", callback: (($obj: CalBackendSync, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::proxy-resolver", ...args: any[]): void
    connect(sigName: "notify::registry", callback: (($obj: CalBackendSync, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::registry", callback: (($obj: CalBackendSync, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::registry", ...args: any[]): void
    connect(sigName: "notify::writable", callback: (($obj: CalBackendSync, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::writable", callback: (($obj: CalBackendSync, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::writable", ...args: any[]): void
    connect(sigName: "notify::connectable", callback: (($obj: CalBackendSync, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::connectable", callback: (($obj: CalBackendSync, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::connectable", ...args: any[]): void
    connect(sigName: "notify::main-context", callback: (($obj: CalBackendSync, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::main-context", callback: (($obj: CalBackendSync, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::main-context", ...args: any[]): void
    connect(sigName: "notify::online", callback: (($obj: CalBackendSync, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::online", callback: (($obj: CalBackendSync, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::online", ...args: any[]): void
    connect(sigName: "notify::source", callback: (($obj: CalBackendSync, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::source", callback: (($obj: CalBackendSync, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::source", ...args: any[]): void
    connect(sigName: "notify::user-prompter", callback: (($obj: CalBackendSync, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::user-prompter", callback: (($obj: CalBackendSync, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::user-prompter", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * Contains only private data that should be read and manipulated using the
 * functions below.
 * @class 
 */
class CalBackendSync extends CalBackend {

    // Own properties of EDataCal-2.0.EDataCal.CalBackendSync

    static name: string
    static $gtype: GObject.GType<CalBackendSync>

    // Constructors of EDataCal-2.0.EDataCal.CalBackendSync

    constructor(config?: CalBackendSync.ConstructorProperties) 
    _init(config?: CalBackendSync.ConstructorProperties): void
}

module CalCache {

    // Signal callback interfaces

    /**
     * Signal callback interface for `dup-component-revision`
     */
    interface DupComponentRevisionSignalCallback {
        ($obj: CalCache, object: ICalGLib.Component): string | null
    }

    /**
     * Signal callback interface for `get-timezone`
     */
    interface GetTimezoneSignalCallback {
        ($obj: CalCache, tzid: string | null): ICalGLib.Timezone
    }


    // Constructor properties interface

    interface ConstructorProperties extends ECal.TimezoneCache.ConstructorProperties, EDataServer.Extensible.ConstructorProperties, EBackend.Cache.ConstructorProperties {
    }

}

interface CalCache extends ECal.TimezoneCache, EDataServer.Extensible {

    // Owm methods of EDataCal-2.0.EDataCal.CalCache

    /**
     * Checkes whether the `cal_cache` contains an object with
     * the given `uid` and `rid`. The `rid` can be an empty string
     * or %NULL to search for the master object, otherwise the check
     * is done for a detached instance, not for a recurrence instance.
     * @param uid component UID
     * @param rid optional component Recurrence-ID or %NULL
     * @param deleted_flag one of #ECacheDeletedFlag enum
     * @returns Whether the object had been found.
     */
    contains(uid: string | null, rid: string | null, deleted_flag: EBackend.CacheDeletedFlag): boolean

    // Overloads of contains

    /**
     * Checkes whether the `cache` contains an object with
     * the given `uid`.
     * @param uid a unique identifier of an object
     * @param deleted_flag one of #ECacheDeletedFlag enum
     * @returns Whether the object had been found.
     */
    contains(uid: string | null, deleted_flag: EBackend.CacheDeletedFlag): boolean
    /**
     * Deletes all locally stored attachments beside the cache file from the disk.
     * This doesn't modify the `component`. It's usually called before the `component`
     * is being removed from the `cal_cache`.
     * @param component an #ICalComponent
     * @param cancellable optional #GCancellable object, or %NULL
     * @returns Whether succeeded.
     */
    delete_attachments(component: ICalGLib.Component, cancellable: Gio.Cancellable | null): boolean
    /**
     * Returns the `icomp` revision, used to detect changes.
     * The returned string should be freed with g_free(), when
     * no longer needed.
     * @param icomp an #ICalComponent
     * @returns A newly allocated string containing    revision of the @icomp.
     */
    dup_component_revision(icomp: ICalGLib.Component): string | null
    /**
     * Gets a timezone with given `tzid,` which had been previously put
     * into the `cal_cache` with e_cal_cache_put_timezone().
     * The returned string is an iCal string for that ICalTimezone and
     * should be freed with g_free() when no longer needed.
     * @param tzid a timezone ID to get
     * @param cancellable optional #GCancellable object, or %NULL
     * @returns Whether succeeded.
     */
    dup_timezone_as_string(tzid: string | null, cancellable: Gio.Cancellable | null): [ /* returnType */ boolean, /* out_zone_string */ string | null ]
    /**
     * Gets a component identified by `uid,` and optionally by the `rid,`
     * from the `cal_cache`. The returned `out_component` should be freed with
     * g_object_unref(), when no longer needed.
     * @param uid a UID of the component
     * @param rid an optional Recurrence-ID
     * @param cancellable optional #GCancellable object, or %NULL
     * @returns Whether succeeded.
     */
    get_component(uid: string | null, rid: string | null, cancellable: Gio.Cancellable | null): [ /* returnType */ boolean, /* out_component */ ECal.Component ]
    /**
     * Gets a component identified by `uid,` and optionally by the `rid,`
     * from the `cal_cache`. The returned `out_icalstring` should be freed with
     * g_free(), when no longer needed.
     * @param uid a UID of the component
     * @param rid an optional Recurrence-ID
     * @param cancellable optional #GCancellable object, or %NULL
     * @returns Whether succeeded.
     */
    get_component_as_string(uid: string | null, rid: string | null, cancellable: Gio.Cancellable | null): [ /* returnType */ boolean, /* out_icalstring */ string | null ]
    /**
     * Gets the custom flags previously set for `uid` and `rid,` either with
     * e_cal_cache_set_component_custom_flags(), when adding components or
     * when removing components in offline.
     * @param uid a UID of the component
     * @param rid an optional Recurrence-ID
     * @param cancellable optional #GCancellable object, or %NULL
     * @returns Whether succeeded.
     */
    get_component_custom_flags(uid: string | null, rid: string | null, cancellable: Gio.Cancellable | null): [ /* returnType */ boolean, /* out_custom_flags */ number ]
    /**
     * Gets the extra data previously set for `uid` and `rid,` either with
     * e_cal_cache_set_component_extra() or when adding components.
     * @param uid a UID of the component
     * @param rid an optional Recurrence-ID
     * @param cancellable optional #GCancellable object, or %NULL
     * @returns Whether succeeded.
     */
    get_component_extra(uid: string | null, rid: string | null, cancellable: Gio.Cancellable | null): [ /* returnType */ boolean, /* out_extra */ string | null ]
    /**
     * Gets the master object and all detached instances for a component
     * identified by the `uid`. Free the returned #GSList with
     * g_slist_free_full (components, g_object_unref); when
     * no longer needed.
     * @param uid a UID of the component
     * @param cancellable optional #GCancellable object, or %NULL
     * @returns Whether succeeded.
     */
    get_components_by_uid(uid: string | null, cancellable: Gio.Cancellable | null): [ /* returnType */ boolean, /* out_components */ ECal.Component[] ]
    /**
     * Gets the master object and all detached instances as string
     * for a component identified by the `uid`. Free the returned #GSList
     * with g_slist_free_full (icalstrings, g_free); when no longer needed.
     * @param uid a UID of the component
     * @param cancellable optional #GCancellable object, or %NULL
     * @returns Whether succeeded.
     */
    get_components_by_uid_as_string(uid: string | null, cancellable: Gio.Cancellable | null): [ /* returnType */ boolean, /* out_icalstrings */ string[] ]
    /**
     * Gets a list of components which occur in the given time range.
     * It's not an error if none is found.
     * @param range_start start of the range, as time_t, inclusive
     * @param range_end end of the range, as time_t, exclusive
     * @param cancellable optional #GCancellable object, or %NULL
     * @returns Whether succeeded.
     */
    get_components_in_range(range_start: number, range_end: number, cancellable: Gio.Cancellable | null): [ /* returnType */ boolean, /* out_components */ ECal.Component[] ]
    /**
     * Gets a list of components, as iCal strings, which occur in the given time range.
     * @param range_start start of the range, as time_t, inclusive
     * @param range_end end of the range, as time_t, exclusive
     * @param cancellable optional #GCancellable object, or %NULL
     * @returns Whether succeeded.
     */
    get_components_in_range_as_strings(range_start: number, range_end: number, cancellable: Gio.Cancellable | null): [ /* returnType */ boolean, /* out_icalstrings */ string[] ]
    /**
     * Gets all the ID-s the `extra` data is set for.
     * 
     * The `out_ids` should be freed with
     * g_slist_free_full (ids, (GDestroyNotify) e_cal_component_id_free);
     * when no longer needed.
     * @param extra an extra column value to search for
     * @param cancellable optional #GCancellable object, or %NULL
     * @returns Whether succeeded.
     */
    get_ids_with_extra(extra: string | null, cancellable: Gio.Cancellable | null): [ /* returnType */ boolean, /* out_ids */ ECal.ComponentId[] ]
    /**
     * The same as e_cache_get_offline_changes(), only splits the saved UID
     * into UID and RID and saved the data into #ECalCacheOfflineChange structure.
     * @param cancellable optional #GCancellable object, or %NULL
     * @returns A newly allocated list of all    offline changes. Free it with g_slist_free_full (slist, e_cal_cache_offline_change_free);    when no longer needed.
     */
    get_offline_changes(cancellable: Gio.Cancellable | null): CalCacheOfflineChange[]

    // Overloads of get_offline_changes

    /**
     * Gathers the list of all offline changes being done so far.
     * The returned #GSList contains #ECacheOfflineChange structure.
     * Use e_cache_clear_offline_changes() to clear all offline
     * changes at once.
     * @param cancellable optional #GCancellable object, or %NULL
     * @returns A newly allocated list of all    offline changes. Free it with g_slist_free_full (slist, e_cache_offline_change_free);    when no longer needed.
     */
    get_offline_changes(cancellable: Gio.Cancellable | null): EBackend.CacheOfflineChange[]
    /**
     * This is a wrapper of e_cache_get_offline_state(), ensuring that
     * a correct #ECache UID will be used.
     * @param uid a UID of the component
     * @param rid an optional Recurrence-ID
     * @param cancellable optional #GCancellable object, or %NULL
     * @returns Current offline state #EOfflineState for the given component.    It returns %E_OFFLINE_STATE_UNKNOWN when the component could not be    found or other error happened.
     */
    get_offline_state(uid: string | null, rid: string | null, cancellable: Gio.Cancellable | null): EBackend.OfflineState

    // Overloads of get_offline_state

    get_offline_state(uid: string | null, cancellable: Gio.Cancellable | null): EBackend.OfflineState
    /**
     * Gets a timezone with given `tzid,` which had been previously put
     * into the `cal_cache` with e_cal_cache_put_timezone().
     * The returned ICalTimezone is owned by the `cal_cache` and should
     * not be freed.
     * @param tzid a timezone ID to get
     * @param cancellable optional #GCancellable object, or %NULL
     * @returns Whether succeeded.
     */
    get_timezone(tzid: string | null, cancellable: Gio.Cancellable | null): [ /* returnType */ boolean, /* out_zone */ ICalGLib.Timezone ]

    // Overloads of get_timezone

    /**
     * Obtains an #ICalTimezone by its TZID string.  If no match is found,
     * the function returns %NULL.  The returned #ICalTimezone is owned by
     * the `cache` and should not be modified or freed.
     * @param tzid the TZID of a timezone
     * @returns an #ICalTimezone, or %NULL
     */
    get_timezone(tzid: string | null): ICalGLib.Timezone | null
    /**
     * Gets a list of all stored timezones by the `cal_cache`.
     * Only the returned list should be freed with g_list_free()
     * when no longer needed; the #ICalTimezone-s are owned
     * by the `cal_cache`.
     * 
     * Note: The list can contain timezones previously stored
     * in the cache, but removed from it since they were loaded,
     * because these are freed only when also the `cal_cache` is freed.
     * @param cancellable optional #GCancellable object, or %NULL
     * @returns Whether succeeded.
     */
    list_timezones(cancellable: Gio.Cancellable | null): [ /* returnType */ boolean, /* out_timezones */ ICalGLib.Timezone[] ]

    // Overloads of list_timezones

    /**
     * Returns a list of #ICalTimezone instances that were explicitly added to
     * the `cache` through e_timezone_cache_add_timezone().  In particular, any
     * built-in time zone data that e_timezone_cache_get_timezone() may use to
     * match a TZID string is excluded from the returned list.
     * 
     * Free the returned list with g_list_free().  The list elements are owned
     * by the `cache` and should not be modified or freed.
     * @returns a #GList of    #ICalTimezone instances
     */
    list_timezones(): ICalGLib.Timezone[]
    /**
     * Adds a `component` into the `cal_cache`. Any existing with the same UID
     * and RID is replaced.
     * @param component an #ECalComponent to put into the `cal_cache`
     * @param extra an extra data to store in association with the `component`
     * @param custom_flags custom flags for the `component,` not interpreted by the `cal_cache`
     * @param offline_flag one of #ECacheOfflineFlag, whether putting this component in offline
     * @param cancellable optional #GCancellable object, or %NULL
     * @returns Whether succeeded.
     */
    put_component(component: ECal.Component, extra: string | null, custom_flags: number, offline_flag: EBackend.CacheOfflineFlag, cancellable: Gio.Cancellable | null): boolean
    /**
     * Adds a list of `components` into the `cal_cache`. Any existing with the same UID
     * and RID are replaced.
     * 
     * If `extras` is not %NULL, its length should be the same as the length
     * of the `components`. Similarly the non-NULL `custom_flags` length
     * should be the same as the length of the `components`.
     * @param components a #GSList of #ECalComponent to put into the `cal_cache`
     * @param extras optional extra data to store in association with the `components`
     * @param custom_flags optional custom flags to use for the `components`
     * @param offline_flag one of #ECacheOfflineFlag, whether putting these components in offline
     * @param cancellable optional #GCancellable object, or %NULL
     * @returns Whether succeeded.
     */
    put_components(components: ECal.Component[], extras: string[] | null, custom_flags: number[] | null, offline_flag: EBackend.CacheOfflineFlag, cancellable: Gio.Cancellable | null): boolean
    /**
     * Puts the `zone` into the `cal_cache` using its timezone ID as
     * an identificator. The function adds a new or replaces existing,
     * if any such already exists in the `cal_cache`. The function does
     * nothing and returns %TRUE, when the passed-in `zone` is libical
     * builtin timezone.
     * @param zone an #ICalTimezone to put
     * @param inc_ref_counts how many refs to add, or 0 to have it stored forever
     * @param cancellable optional #GCancellable object, or %NULL
     * @returns Whether succeeded.
     */
    put_timezone(zone: ICalGLib.Timezone, inc_ref_counts: number, cancellable: Gio.Cancellable | null): boolean
    /**
     * Removes a component identified by `uid` and `rid` from the `cal_cache`.
     * When the `rid` is %NULL, or an empty string, then removes the master
     * object only, without any detached instance.
     * @param uid a UID of the component to remove
     * @param rid an optional Recurrence-ID to remove
     * @param custom_flags custom flags for the component, not interpreted by the `cal_cache`
     * @param offline_flag one of #ECacheOfflineFlag, whether removing this component in offline
     * @param cancellable optional #GCancellable object, or %NULL
     * @returns Whether succeeded.
     */
    remove_component(uid: string | null, rid: string | null, custom_flags: number, offline_flag: EBackend.CacheOfflineFlag, cancellable: Gio.Cancellable | null): boolean
    /**
     * Removes components identified by `uid` and `rid` from the `cal_cache`
     * in the `ids` list. When the `rid` is %NULL, or an empty string, then
     * removes the master object only, without any detached instance.
     * The `custom_flags` is used, if not %NULL, only if the `offline_flag`
     * is %E_CACHE_IS_OFFLINE. Otherwise it's ignored. The length of
     * the `custom_flags` should match the length of `ids,` when not %NULL.
     * @param ids a #GSList of components to remove
     * @param custom_flags an optional #GSList of custom flags for the `ids`
     * @param offline_flag one of #ECacheOfflineFlag, whether removing these comonents in offline
     * @param cancellable optional #GCancellable object, or %NULL
     * @returns Whether succeeded.
     */
    remove_components(ids: ECal.ComponentId[], custom_flags: number[] | null, offline_flag: EBackend.CacheOfflineFlag, cancellable: Gio.Cancellable | null): boolean
    /**
     * Dereferences use count of the time zone with ID `tzid` by `dec_ref_counts`
     * and removes the timezone from the cache when the reference count reaches
     * zero. Special case is with `dec_ref_counts` being zero, in which case
     * the corresponding timezone is removed regardless of the current reference
     * count.
     * 
     * It's not an error when the timezone doesn't exist in the cache.
     * @param tzid timezone ID to remove/dereference
     * @param dec_ref_counts reference counts to drop, 0 to remove it regardless of the current reference count
     * @param cancellable optional #GCancellable object, or %NULL
     * @returns Whether succeeded.
     */
    remove_timezone(tzid: string | null, dec_ref_counts: number, cancellable: Gio.Cancellable | null): boolean
    /**
     * Removes all stored timezones from the `cal_cache`.
     * @param cancellable optional #GCancellable object, or %NULL
     * @returns Whether succeeded.
     */
    remove_timezones(cancellable: Gio.Cancellable | null): boolean
    /**
     * Searches the `cal_cache` with the given `sexp` and
     * returns those components which satisfy the search
     * expression as a #GSList of #ECalCacheSearchData.
     * The `out_data` should be freed with
     * g_slist_free_full (data, e_cal_cache_search_data_free);
     * when no longer needed.
     * @param sexp search expression; use %NULL or an empty string to list all stored components
     * @param cancellable optional #GCancellable object, or %NULL
     * @returns Whether succeeded.
     */
    search(sexp: string | null, cancellable: Gio.Cancellable | null): [ /* returnType */ boolean, /* out_data */ CalCacheSearchData[] ]
    /**
     * Searches the `cal_cache` with the given `sexp` and
     * returns those components which satisfy the search
     * expression. The `out_components` should be freed with
     * g_slist_free_full (components, g_object_unref); when
     * no longer needed.
     * @param sexp search expression; use %NULL or an empty string to list all stored components
     * @param cancellable optional #GCancellable object, or %NULL
     * @returns Whether succeeded.
     */
    search_components(sexp: string | null, cancellable: Gio.Cancellable | null): [ /* returnType */ boolean, /* out_components */ ECal.Component[] ]
    /**
     * Searches the `cal_cache` with the given `sexp` and returns ECalComponentId
     * for those components which satisfy the search expression.
     * The `out_ids` should be freed with
     * g_slist_free_full (ids, (GDestroyNotify) e_cal_component_id_free);
     * when no longer needed.
     * @param sexp search expression; use %NULL or an empty string to list all stored components
     * @param cancellable optional #GCancellable object, or %NULL
     * @returns Whether succeeded.
     */
    search_ids(sexp: string | null, cancellable: Gio.Cancellable | null): [ /* returnType */ boolean, /* out_ids */ ECal.ComponentId[] ]
    /**
     * Searches the `cal_cache` with the given `sexp` and calls `func` for each
     * row which satisfy the search expression.
     * @param sexp search expression; use %NULL or an empty string to list all stored components
     * @param cancellable optional #GCancellable object, or %NULL
     * @returns Whether succeeded.
     */
    search_with_callback(sexp: string | null, cancellable: Gio.Cancellable | null): boolean
    /**
     * Sets or replaces the custom flags associated with a component
     * identified by `uid` and optionally `rid`.
     * @param uid a UID of the component
     * @param rid an optional Recurrence-ID
     * @param custom_flags the custom flags to set for the component
     * @param cancellable optional #GCancellable object, or %NULL
     * @returns Whether succeeded.
     */
    set_component_custom_flags(uid: string | null, rid: string | null, custom_flags: number, cancellable: Gio.Cancellable | null): boolean
    /**
     * Sets or replaces the extra data associated with a component
     * identified by `uid` and optionally `rid`.
     * @param uid a UID of the component
     * @param rid an optional Recurrence-ID
     * @param extra extra data to set for the component
     * @param cancellable optional #GCancellable object, or %NULL
     * @returns Whether succeeded.
     */
    set_component_extra(uid: string | null, rid: string | null, extra: string | null, cancellable: Gio.Cancellable | null): boolean

    // Own virtual methods of EDataCal-2.0.EDataCal.CalCache

    /**
     * Returns the `icomp` revision, used to detect changes.
     * The returned string should be freed with g_free(), when
     * no longer needed.
     * @virtual 
     * @param icomp an #ICalComponent
     * @returns A newly allocated string containing    revision of the @icomp.
     */
    vfunc_dup_component_revision(icomp: ICalGLib.Component): string | null

    // Own signals of EDataCal-2.0.EDataCal.CalCache

    connect(sigName: "dup-component-revision", callback: CalCache.DupComponentRevisionSignalCallback): number
    connect_after(sigName: "dup-component-revision", callback: CalCache.DupComponentRevisionSignalCallback): number
    emit(sigName: "dup-component-revision", object: ICalGLib.Component, ...args: any[]): void
    connect(sigName: "get-timezone", callback: CalCache.GetTimezoneSignalCallback): number
    connect_after(sigName: "get-timezone", callback: CalCache.GetTimezoneSignalCallback): number
    emit(sigName: "get-timezone", tzid: string | null, ...args: any[]): void

    // Class property signals of EDataCal-2.0.EDataCal.CalCache

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * Contains only private data that should be read and manipulated using
 * the functions below.
 * @class 
 */
class CalCache extends EBackend.Cache {

    // Own properties of EDataCal-2.0.EDataCal.CalCache

    static name: string
    static $gtype: GObject.GType<CalCache>

    // Constructors of EDataCal-2.0.EDataCal.CalCache

    constructor(config?: CalCache.ConstructorProperties) 
    /**
     * Creates a new #ECalCache.
     * @constructor 
     * @param filename file name to load or create the new cache
     * @param cancellable optional #GCancellable object, or %NULL
     * @returns A new #ECalCache or %NULL on error
     */
    constructor(filename: string | null, cancellable: Gio.Cancellable | null) 
    /**
     * Creates a new #ECalCache.
     * @constructor 
     * @param filename file name to load or create the new cache
     * @param cancellable optional #GCancellable object, or %NULL
     * @returns A new #ECalCache or %NULL on error
     */
    static new(filename: string | null, cancellable: Gio.Cancellable | null): CalCache
    _init(config?: CalCache.ConstructorProperties): void
    /**
     * An #ECalRecurResolveTimezoneCb callback, which can be used
     * with e_cal_recur_generate_instances_sync(). The `cal_cache`
     * is supposed to be an #ECalCache instance.
     * @param tzid a timezone ID
     * @param cal_cache an #ECalCache
     * @param cancellable optional #GCancellable object, or %NULL
     * @returns the resolved #ICalTimezone, or %NULL, if not found
     */
    static resolve_timezone_cb(tzid: string | null, cal_cache: any | null, cancellable: Gio.Cancellable | null): ICalGLib.Timezone | null
}

module CalMetaBackend {

    // Signal callback interfaces

    /**
     * Signal callback interface for `refresh-completed`
     */
    interface RefreshCompletedSignalCallback {
        ($obj: CalMetaBackend): void
    }

    /**
     * Signal callback interface for `source-changed`
     */
    interface SourceChangedSignalCallback {
        ($obj: CalMetaBackend): void
    }


    // Constructor properties interface

    interface ConstructorProperties extends ECal.TimezoneCache.ConstructorProperties, CalBackendSync.ConstructorProperties {

        // Own constructor properties of EDataCal-2.0.EDataCal.CalMetaBackend

        /**
         * The #ECalCache being used for this meta backend.
         */
        cache?: CalCache | null
    }

}

interface CalMetaBackend extends ECal.TimezoneCache {

    // Own properties of EDataCal-2.0.EDataCal.CalMetaBackend

    /**
     * The #ECalCache being used for this meta backend.
     */
    cache: CalCache

    // Owm methods of EDataCal-2.0.EDataCal.CalMetaBackend

    /**
     * This is called always before any operation which requires a connection
     * to the remote side. It can fail with an #E_CLIENT_ERROR_REPOSITORY_OFFLINE
     * error to indicate that the remote side cannot be currently reached. Other
     * errors are propagated to the caller/client side. This method is not called
     * when the backend is offline.
     * 
     * The descendant should also call e_cal_backend_set_writable() after successful
     * connect to the remote side. This value is stored for later use, when being
     * opened offline.
     * 
     * The `credentials` parameter consists of the previously used credentials.
     * It's always %NULL with the first connection attempt. To get the credentials,
     * just set the `out_auth_result` to %E_SOURCE_AUTHENTICATION_REQUIRED for
     * the first time and the function will be called again once the credentials
     * are available. See the documentation of #ESourceAuthenticationResult for
     * other available results.
     * 
     * The out parameters are passed to e_backend_schedule_credentials_required()
     * and are ignored when the descendant returns %TRUE, aka they are used
     * only if the connection fails. The `out_certificate_pem` and `out_certificate_errors`
     * should be used together and they can be left untouched if the failure reason was
     * not related to certificate. Use `out_auth_result` %E_SOURCE_AUTHENTICATION_UNKNOWN
     * to indicate other error than `credentials` error, otherwise the `error` is used
     * according to `out_auth_result` value.
     * 
     * It is mandatory to implement this virtual method by the descendant.
     * @param credentials an #ENamedParameters with previously used credentials, or %NULL
     * @param cancellable optional #GCancellable object, or %NULL
     * @returns Whether succeeded.
     */
    connect_sync(credentials: EDataServer.NamedParameters | null, cancellable: Gio.Cancellable | null): [ /* returnType */ boolean, /* out_auth_result */ EDataServer.SourceAuthenticationResult, /* out_certificate_pem */ string | null, /* out_certificate_errors */ Gio.TlsCertificateFlags ]
    /**
     * This is called when the backend goes into offline mode or
     * when the disconnect is required. The implementation should
     * not report any error when it is called and the `meta_backend`
     * is not connected.
     * 
     * It is mandatory to implement this virtual method by the descendant.
     * @param cancellable optional #GCancellable object, or %NULL
     * @returns Whether succeeded.
     */
    disconnect_sync(cancellable: Gio.Cancellable | null): boolean
    /**
     * Returns the last known synchronization tag, the same as used to
     * call e_cal_meta_backend_get_changes_sync().
     * 
     * Free the returned string with g_free(), when no longer needed.
     * @returns The last known synchronization tag,    or %NULL, when none is stored.
     */
    dup_sync_tag(): string | null
    /**
     * Empties the local cache by removing all known components from it
     * and notifies about such removal any opened views. It removes also
     * all known time zones.
     * @param cancellable optional #GCancellable object, or %NULL
     * @returns Whether succeeded.
     */
    empty_cache_sync(cancellable: Gio.Cancellable | null): boolean
    /**
     * Ensures that the `meta_backend` is connected to its destination.
     * @param cancellable optional #GCancellable object, or %NULL
     * @returns Whether succeeded.
     */
    ensure_connected_sync(cancellable: Gio.Cancellable | null): boolean
    /**
     * Extracts all VTIMEZONE components from the `vcalendar` and adds them
     * to the memory cache, thus they are available when needed. The function does
     * nothing when the `vcalendar` doesn't hold a VCALENDAR component.
     * 
     * Set the `remove_existing` argument to %TRUE to remove all cached timezones
     * first and then add the existing in the `vcalendar,` or set it to %FALSE
     * to preserver existing timezones and merge them with those in `vcalendar`.
     * @param vcalendar a VCALENDAR #ICalComponent
     * @param remove_existing whether to remove any existing first
     * @param cancellable optional #GCancellable object, or %NULL
     * @returns Whether succeeded.
     */
    gather_timezones_sync(vcalendar: ICalGLib.Component, remove_existing: boolean, cancellable: Gio.Cancellable | null): boolean
    get_capabilities(): string | null
    /**
     * Gathers the changes since the last check which had been done
     * on the remote side.
     * 
     * The `last_sync_tag` can be used as a tag of the last check. This can be %NULL,
     * when there was no previous call or when the descendant doesn't store any
     * such tags. The `out_new_sync_tag` can be populated with a value to be stored
     * and used the next time.
     * 
     * The `out_repeat` can be set to %TRUE when the descendant didn't finish
     * read of all the changes. In that case the `meta_backend` calls this
     * function again with the `out_new_sync_tag` as the `last_sync_tag,` but also
     * notifies about the found changes immediately. The `is_repeat` is set
     * to %TRUE as well in this case, otherwise it's %FALSE.
     * 
     * The descendant can populate also ECalMetaBackendInfo::object of
     * the `out_created_objects` and `out_modified_objects,` if known, in which
     * case this will be used instead of loading it with e_cal_meta_backend_load_component_sync().
     * 
     * It is optional to implement this virtual method by the descendant.
     * The default implementation calls e_cal_meta_backend_list_existing_sync()
     * and then compares the list with the current content of the local cache
     * and populates the respective lists appropriately.
     * 
     * Each output #GSList should be freed with
     * g_slist_free_full (objects, e_cal_meta_backend_info_free);
     * when no longer needed.
     * @param last_sync_tag optional sync tag from the last check
     * @param is_repeat set to %TRUE when this is the repeated call
     * @param cancellable optional #GCancellable object, or %NULL
     * @returns Whether succeeded.
     */
    get_changes_sync(last_sync_tag: string | null, is_repeat: boolean, cancellable: Gio.Cancellable | null): [ /* returnType */ boolean, /* out_new_sync_tag */ string | null, /* out_repeat */ boolean, /* out_created_objects */ CalMetaBackendInfo[], /* out_modified_objects */ CalMetaBackendInfo[], /* out_removed_objects */ CalMetaBackendInfo[] ]
    /**
     * This value has meaning only if e_cal_meta_backend_get_ever_connected()
     * is %TRUE.
     * @returns Whether the @meta_backend connected to a writable destination.
     */
    get_connected_writable(): boolean
    get_ever_connected(): boolean
    /**
     * It is optional to implement this virtual method by the descendants.
     * It is used to receive SSL error details when any online operation
     * returns E_CLIENT_ERROR, E_CLIENT_ERROR_TLS_NOT_AVAILABLE error.
     * @returns %TRUE, when the SSL error details had been available and    the out parameters populated, %FALSE otherwise.
     */
    get_ssl_error_details(): [ /* returnType */ boolean, /* out_certificate_pem */ string | null, /* out_certificate_errors */ Gio.TlsCertificateFlags ]
    /**
     * Changes all URL attachments which point to a local file in `component`
     * to inline attachments, aka adds the file content into the `component`.
     * It also populates FILENAME parameter on the attachment.
     * This is called automatically before e_cal_meta_backend_save_component_sync().
     * 
     * The reverse operation is e_cal_meta_backend_store_inline_attachments_sync().
     * @param component an #ICalComponent to work with
     * @param cancellable optional #GCancellable object, or %NULL
     * @returns Whether succeeded.
     */
    inline_local_attachments_sync(component: ICalGLib.Component, cancellable: Gio.Cancellable | null): boolean
    /**
     * Used to get list of all existing objects on the remote side. The descendant
     * can optionally provide `out_new_sync_tag,` which will be stored on success, if
     * not %NULL. The descendant can populate also ECalMetaBackendInfo::object of
     * the `out_existing_objects,` if known, in which case this will be used instead
     * of loading it with e_cal_meta_backend_load_component_sync().
     * 
     * It is mandatory to implement this virtual method by the descendant, unless
     * it implements its own #ECalMetaBackendClass.get_changes_sync().
     * 
     * The `out_existing_objects` #GSList should be freed with
     * g_slist_free_full (objects, e_cal_meta_backend_info_free);
     * when no longer needed.
     * @param cancellable optional #GCancellable object, or %NULL
     * @returns Whether succeeded.
     */
    list_existing_sync(cancellable: Gio.Cancellable | null): [ /* returnType */ boolean, /* out_new_sync_tag */ string | null, /* out_existing_objects */ CalMetaBackendInfo[] ]
    /**
     * Loads a component from the remote side. Any detached instances should be
     * returned together with the master object. The `out_component` can be either
     * a VCALENDAR component, which would contain the master object and all of
     * its detached instances, eventually also used time zones, or the requested
     * component of type VEVENT, VJOURNAL or VTODO.
     * 
     * It is mandatory to implement this virtual method by the descendant.
     * 
     * The returned `out_component` should be freed with g_object_unref(),
     * when no longer needed.
     * 
     * The returned `out_extra` should be freed with g_free(), when no longer
     * needed.
     * @param uid a component UID
     * @param extra optional extra data stored with the component, or %NULL
     * @param cancellable optional #GCancellable object, or %NULL
     * @returns Whether succeeded.
     */
    load_component_sync(uid: string | null, extra: string | null, cancellable: Gio.Cancellable | null): [ /* returnType */ boolean, /* out_component */ ICalGLib.Component, /* out_extra */ string | null ]
    /**
     * Merges all the instances provided in `instances` list into one VCALENDAR
     * object, which would eventually contain also all the used timezones.
     * The `instances` list should contain the master object and eventually all
     * the detached instances for one component (they all have the same UID).
     * 
     * Any TZID property parameters can be replaced with corresponding timezone
     * location, which will not influence the timezone itself.
     * @param instances component instances to merge
     * @param replace_tzid_with_location whether to replace TZID-s with locations
     * @returns an #ICalComponent containing a VCALENDAR    component which consists of all the given instances. Free    the returned pointer with g_object_unref(), when no longer needed. See: e_cal_meta_backend_save_component_sync()
     */
    merge_instances(instances: ECal.Component[], replace_tzid_with_location: boolean): ICalGLib.Component
    /**
     * Processes given changes by updating local cache content accordingly.
     * The `meta_backend` processes the changes like being online and particularly
     * requires to be online to load created and modified objects when needed.
     * @param created_objects     a #GSList of #ECalMetaBackendInfo object infos which had been created
     * @param modified_objects     a #GSList of #ECalMetaBackendInfo object infos which had been modified
     * @param removed_objects     a #GSList of #ECalMetaBackendInfo object infos which had been removed
     * @param cancellable optional #GCancellable object, or %NULL
     * @returns Whether succeeded.
     */
    process_changes_sync(created_objects: CalMetaBackendInfo[] | null, modified_objects: CalMetaBackendInfo[] | null, removed_objects: CalMetaBackendInfo[] | null, cancellable: Gio.Cancellable | null): boolean
    ref_cache(): CalCache
    /**
     * Refreshes the `meta_backend` immediately. To just schedule refresh
     * operation call e_cal_meta_backend_schedule_refresh().
     * @param cancellable optional #GCancellable object, or %NULL
     * @returns Whether succeeded.
     */
    refresh_sync(cancellable: Gio.Cancellable | null): boolean
    /**
     * Removes a component from the remote side, with all its detached instances.
     * The `object` is not %NULL when it's removing locally deleted object
     * in offline mode. Being it %NULL, the descendant can obtain the object
     * from the #ECalCache.
     * 
     * It is mandatory to implement this virtual method by the writable descendant.
     * @param conflict_resolution an #EConflictResolution to use
     * @param uid a component UID
     * @param extra extra data being saved with the component in the local cache, or %NULL
     * @param object corresponding iCalendar object, as stored in the local cache, or %NULL
     * @param opflags bit-or of #ECalOperationFlags
     * @param cancellable optional #GCancellable object, or %NULL
     * @returns Whether succeeded.
     */
    remove_component_sync(conflict_resolution: EDataServer.ConflictResolution, uid: string | null, extra: string | null, object: string | null, opflags: ECal.OperationFlags, cancellable: Gio.Cancellable | null): boolean
    /**
     * Determines, whether current source content requires reconnect of the backend.
     * 
     * It is optional to implement this virtual method by the descendant. The default
     * implementation compares %E_SOURCE_EXTENSION_AUTHENTICATION and
     * %E_SOURCE_EXTENSION_WEBDAV_BACKEND, if existing in the source,
     * with the values after the last successful connect and returns
     * %TRUE when they changed. It always return %TRUE when there was
     * no successful connect done yet.
     * @returns %TRUE, when reconnect is required, %FALSE otherwise.
     */
    requires_reconnect(): boolean
    /**
     * Saves one component into the remote side. The `instances` contain the master
     * object and all the detached instances of the same component (all have the same UID).
     * When the `overwrite_existing` is %TRUE, then the descendant can overwrite an object
     * with the same UID on the remote side (usually used for modify). The `conflict_resolution`
     * defines what to do when the remote side had made any changes to the object since
     * the last update.
     * 
     * The descendant can use e_cal_meta_backend_merge_instances() to merge
     * the instances into one VCALENDAR component, which will contain also
     * used time zones.
     * 
     * The components in `instances` have already converted locally stored attachments
     * into inline attachments, thus it's not needed to call
     * e_cal_meta_backend_inline_local_attachments_sync() by the descendant.
     * 
     * The `out_new_uid` can be populated with a UID of the saved component as the server
     * assigned it to it. This UID, if set, is loaded from the remote side afterwards,
     * also to see whether any changes had been made to the component by the remote side.
     * 
     * The `out_new_extra` can be populated with a new extra data to save with the component.
     * Left it %NULL, to keep the same value as the `extra`.
     * 
     * The descendant can use an #E_CLIENT_ERROR_OUT_OF_SYNC error to indicate that
     * the save failed due to made changes on the remote side, and let the `meta_backend`
     * to resolve this conflict based on the `conflict_resolution` on its own.
     * The #E_CLIENT_ERROR_OUT_OF_SYNC error should not be used when the descendant
     * is able to resolve the conflicts itself.
     * 
     * It is mandatory to implement this virtual method by the writable descendant.
     * @param overwrite_existing %TRUE when can overwrite existing components, %FALSE otherwise
     * @param conflict_resolution one of #EConflictResolution, what to do on conflicts
     * @param instances instances of the component to save
     * @param extra extra data saved with the components in an #ECalCache
     * @param opflags bit-or of #ECalOperationFlags
     * @param cancellable optional #GCancellable object, or %NULL
     * @returns Whether succeeded.
     */
    save_component_sync(overwrite_existing: boolean, conflict_resolution: EDataServer.ConflictResolution, instances: ECal.Component[], extra: string | null, opflags: ECal.OperationFlags, cancellable: Gio.Cancellable | null): [ /* returnType */ boolean, /* out_new_uid */ string | null, /* out_new_extra */ string | null ]
    /**
     * Schedules refresh of the content of the `meta_backend`. If there's any
     * already scheduled, then the function does nothing.
     * 
     * Use e_cal_meta_backend_refresh_sync() to refresh the `meta_backend`
     * immediately.
     */
    schedule_refresh(): void
    /**
     * Searches `meta_backend` with given expression `expr` and returns
     * found components as a #GSList of #ECalComponent `out_components`.
     * Free the returned `out_components` with g_slist_free_full (components, g_object_unref);
     * when no longer needed.
     * When the `expr` is %NULL, all objects are returned. To get iCal
     * strings instead, call e_cal_meta_backend_search_sync().
     * 
     * It is optional to implement this virtual method by the descendant.
     * The default implementation searches `meta_backend'`s cache. It's also
     * not required to be online for searching, thus `meta_backend` doesn't
     * ensure it.
     * @param expr a search expression, or %NULL
     * @param cancellable optional #GCancellable object, or %NULL
     * @returns Whether succeeded.
     */
    search_components_sync(expr: string | null, cancellable: Gio.Cancellable | null): [ /* returnType */ boolean, /* out_components */ ECal.Component[] ]
    /**
     * Searches `meta_backend` with given expression `expr` and returns
     * found components as a #GSList of iCal strings `out_icalstrings`.
     * Free the returned `out_icalstrings` with g_slist_free_full (icalstrings, g_free);
     * when no longer needed.
     * When the `expr` is %NULL, all objects are returned. To get
     * #ECalComponent-s instead, call e_cal_meta_backend_search_components_sync().
     * 
     * It is optional to implement this virtual method by the descendant.
     * The default implementation searches `meta_backend'`s cache. It's also
     * not required to be online for searching, thus `meta_backend` doesn't
     * ensure it.
     * @param expr a search expression, or %NULL
     * @param cancellable optional #GCancellable object, or %NULL
     * @returns Whether succeeded.
     */
    search_sync(expr: string | null, cancellable: Gio.Cancellable | null): [ /* returnType */ boolean, /* out_icalstrings */ string[] ]
    /**
     * Sets the `cache` as the cache to be used by the `meta_backend`.
     * By default, a cache.db in ECalBackend::cache-dir is created
     * in the constructed method. This function can be used to override
     * the default.
     * 
     * Note the `meta_backend` adds its own reference to the `cache`.
     * @param cache an #ECalCache to use
     */
    set_cache(cache: CalCache): void
    /**
     * Sets whether the `meta_backend` connected to a writable destination.
     * This value has meaning only if e_cal_meta_backend_get_ever_connected()
     * is %TRUE.
     * 
     * This is used by the `meta_backend` itself, during the opening phase,
     * to set the backend writable or not also in the offline mode.
     * @param value value to set
     */
    set_connected_writable(value: boolean): void
    /**
     * Sets whether the `meta_backend` ever made a successful connection
     * to its destination.
     * 
     * This is used by the `meta_backend` itself, during the opening phase,
     * when it had not been connected yet, then it does so immediately, to
     * eventually report settings error easily.
     * @param value value to set
     */
    set_ever_connected(value: boolean): void
    /**
     * Splits `objects` into created/modified/removed lists according to current local
     * cache content. Only the `out_removed_objects` can be %NULL, others cannot.
     * The function modifies `objects` by moving its 'data' to corresponding out
     * lists and sets the `objects` 'data' to %NULL.
     * 
     * Each output #GSList should be freed with
     * g_slist_free_full (objects, e_cal_meta_backend_info_free);
     * when no longer needed.
     * 
     * The caller is still responsible to free `objects` as well.
     * @param objects     a #GSList of #ECalMetaBackendInfo object infos to split
     * @param cancellable optional #GCancellable object, or %NULL
     * @returns Whether succeeded.
     */
    split_changes_sync(objects: CalMetaBackendInfo[], cancellable: Gio.Cancellable | null): [ /* returnType */ boolean, /* objects */ CalMetaBackendInfo[], /* out_created_objects */ CalMetaBackendInfo[], /* out_modified_objects */ CalMetaBackendInfo[], /* out_removed_objects */ CalMetaBackendInfo[] | null ]
    /**
     * Changes all inline attachments to URL attachments in `component,` which
     * will point to a local file instead. The function expects FILENAME parameter
     * to be set on the attachment as the file name of it.
     * This is called automatically after e_cal_meta_backend_load_component_sync().
     * 
     * The reverse operation is e_cal_meta_backend_inline_local_attachments_sync().
     * @param component an #ICalComponent to work with
     * @param cancellable optional #GCancellable object, or %NULL
     * @returns Whether succeeded.
     */
    store_inline_attachments_sync(component: ICalGLib.Component, cancellable: Gio.Cancellable | null): boolean

    // Conflicting methods

    /**
     * Adds a copy of `zone` to `cache` and emits an
     * #ETimezoneCache::timezone-added signal.  The `cache` will use the TZID
     * string returned by i_cal_timezone_get_tzid() as the lookup key, which can
     * be passed to e_timezone_cache_get_timezone() to obtain `zone` again.
     * 
     * If the `cache` already has an #ICalTimezone with the same TZID string
     * as `zone,` the `cache` will remain unchanged to avoid invalidating any
     * #ICalTimezone pointers which may have already been returned through
     * e_timezone_cache_get_timezone().
     * @param zone an #ICalTimezone
     */
    add_timezone(zone: ICalGLib.Timezone): void
    /**
     * Calls the add_timezone_sync method on the given backend.
     * @param cal An EDataCal object.
     * @param cancellable a #GCancellable for the operation
     * @param tzobject VTIMEZONE object to be added.
     */
    add_timezone(cal: DataCal, cancellable: Gio.Cancellable | null, tzobject: string | null): void

    // Overloads of add_timezone

    /**
     * Adds a copy of `zone` to `cache` and emits an
     * #ETimezoneCache::timezone-added signal.  The `cache` will use the TZID
     * string returned by i_cal_timezone_get_tzid() as the lookup key, which can
     * be passed to e_timezone_cache_get_timezone() to obtain `zone` again.
     * 
     * If the `cache` already has an #ICalTimezone with the same TZID string
     * as `zone,` the `cache` will remain unchanged to avoid invalidating any
     * #ICalTimezone pointers which may have already been returned through
     * e_timezone_cache_get_timezone().
     * @param zone an #ICalTimezone
     */
    add_timezone(zone: ICalGLib.Timezone): void
    /**
     * Asynchronously adds the timezone described by `tzobject` to `backend`.
     * 
     * When the operation is finished, `callback` will be called.  You can
     * then call e_cal_backend_add_timezone_finish() to get the result of
     * the operation.
     * @param tzobject an iCalendar VTIMEZONE string
     * @param cancellable optional #GCancellable object, or %NULL
     * @param callback a #GAsyncReadyCallback to call when the request is satisfied
     */
    add_timezone(tzobject: string | null, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void
    /**
     * Asynchronously adds the timezone described by `tzobject` to `backend`.
     * 
     * When the operation is finished, `callback` will be called.  You can
     * then call e_cal_backend_add_timezone_finish() to get the result of
     * the operation.
     * @param tzobject an iCalendar VTIMEZONE string
     * @param cancellable optional #GCancellable object, or %NULL
     * @param callback a #GAsyncReadyCallback to call when the request is satisfied
     */
    add_timezone(tzobject: string | null, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void

    // Overloads of add_timezone

    /**
     * Adds a copy of `zone` to `cache` and emits an
     * #ETimezoneCache::timezone-added signal.  The `cache` will use the TZID
     * string returned by i_cal_timezone_get_tzid() as the lookup key, which can
     * be passed to e_timezone_cache_get_timezone() to obtain `zone` again.
     * 
     * If the `cache` already has an #ICalTimezone with the same TZID string
     * as `zone,` the `cache` will remain unchanged to avoid invalidating any
     * #ICalTimezone pointers which may have already been returned through
     * e_timezone_cache_get_timezone().
     * @param zone an #ICalTimezone
     */
    add_timezone(zone: ICalGLib.Timezone): void
    /**
     * Obtains an #ICalTimezone by its TZID string.  If no match is found,
     * the function returns %NULL.  The returned #ICalTimezone is owned by
     * the `cache` and should not be modified or freed.
     * @param tzid the TZID of a timezone
     * @returns an #ICalTimezone, or %NULL
     */
    get_timezone(tzid: string | null): ICalGLib.Timezone | null
    /**
     * Calls the get_timezone_sync method on the given backend.
     * This method is not mandatory on the backend, because here
     * is used internal_get_timezone call to fetch timezone from
     * it and that is transformed to a string. In other words,
     * any object deriving from ECalBackendSync can implement only
     * internal_get_timezone and can skip implementation of
     * get_timezone_sync completely.
     * @param cal An EDataCal object.
     * @param cancellable a #GCancellable for the operation
     * @param tzid ID of the timezone to retrieve.
     * @param tzobject Placeholder for the returned timezone.
     */
    get_timezone(cal: DataCal, cancellable: Gio.Cancellable | null, tzid: string | null, tzobject: string | null): void

    // Overloads of get_timezone

    /**
     * Obtains an #ICalTimezone by its TZID string.  If no match is found,
     * the function returns %NULL.  The returned #ICalTimezone is owned by
     * the `cache` and should not be modified or freed.
     * @param tzid the TZID of a timezone
     * @returns an #ICalTimezone, or %NULL
     */
    get_timezone(tzid: string | null): ICalGLib.Timezone | null
    /**
     * Asynchronously obtains the VTIMEZONE object identified by `tzid`.
     * 
     * When the operation is finished, `callback` will be called.  You can
     * then call e_cal_backend_get_timezone_finish() to get the result of
     * the operation.
     * @param tzid a unique ID for an iCalendar VTIMEZONE object
     * @param cancellable optional #GCancellable object, or %NULL
     * @param callback a #GAsyncReadyCallback to call when the request is satisfied
     */
    get_timezone(tzid: string | null, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void
    /**
     * Asynchronously obtains the VTIMEZONE object identified by `tzid`.
     * 
     * When the operation is finished, `callback` will be called.  You can
     * then call e_cal_backend_get_timezone_finish() to get the result of
     * the operation.
     * @param tzid a unique ID for an iCalendar VTIMEZONE object
     * @param cancellable optional #GCancellable object, or %NULL
     * @param callback a #GAsyncReadyCallback to call when the request is satisfied
     */
    get_timezone(tzid: string | null, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void

    // Overloads of get_timezone

    /**
     * Obtains an #ICalTimezone by its TZID string.  If no match is found,
     * the function returns %NULL.  The returned #ICalTimezone is owned by
     * the `cache` and should not be modified or freed.
     * @param tzid the TZID of a timezone
     * @returns an #ICalTimezone, or %NULL
     */
    get_timezone(tzid: string | null): ICalGLib.Timezone | null
    /**
     * Calls the create_objects_sync method on the given backend.
     * @param cal An EDataCal object.
     * @param cancellable a #GCancellable for the operation
     * @param calobjs The objects to be added.
     * @param opflags bit-or of #ECalOperationFlags
     */
    create_objects(cal: DataCal, cancellable: Gio.Cancellable | null, calobjs: string[], opflags: ECal.OperationFlags): [ /* uids */ string[], /* new_components */ ECal.Component[] ]

    // Overloads of create_objects

    /**
     * Asynchronously creates one or more new iCalendar objects from `calobjs`.
     * 
     * When the operation is finished, `callback` will be called.  You can then
     * call e_cal_backend_create_objects_finish() to get the result of the
     * operation.
     * @param calobjs a %NULL-terminated array of iCalendar strings
     * @param opflags bit-or of #ECalOperationFlags
     * @param cancellable optional #GCancellable object, or %NULL
     * @param callback a #GAsyncReadyCallback to call when the request is satisifed
     */
    create_objects(calobjs: string | null, opflags: ECal.OperationFlags, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void
    /**
     * Asynchronously creates one or more new iCalendar objects from `calobjs`.
     * 
     * When the operation is finished, `callback` will be called.  You can then
     * call e_cal_backend_create_objects_finish() to get the result of the
     * operation.
     * @param calobjs a %NULL-terminated array of iCalendar strings
     * @param opflags bit-or of #ECalOperationFlags
     * @param cancellable optional #GCancellable object, or %NULL
     * @param callback a #GAsyncReadyCallback to call when the request is satisifed
     */
    create_objects(calobjs: string | null, opflags: ECal.OperationFlags, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void
    /**
     * Calls the discard_alarm_sync method on the given backend.
     * @param cal An EDataCal object.
     * @param cancellable a #GCancellable for the operation
     * @param uid Unique id of the calendar object.
     * @param rid Recurrence id of the calendar object.
     * @param auid Alarm ID to remove.
     * @param opflags bit-or of #ECalOperationFlags
     */
    discard_alarm(cal: DataCal, cancellable: Gio.Cancellable | null, uid: string | null, rid: string | null, auid: string | null, opflags: ECal.OperationFlags): void

    // Overloads of discard_alarm

    /**
     * Asynchronously discards the VALARM object with a unique ID of `alarm_uid`
     * from the iCalendar object identified by `uid` and, optionally, `rid`.
     * 
     * When the operation is finished, `callback` will be called.  You can
     * then call e_cal_backend_discard_alarm_finish() to get the result of
     * the operation.
     * @param uid a unique ID for an iCalendar object
     * @param rid a recurrence ID, or %NULL
     * @param alarm_uid a unique ID for an iCalendar VALARM object
     * @param opflags bit-or of #ECalOperationFlags
     * @param cancellable optional #GCancellable object, or %NULL
     * @param callback a #GAsyncReadyCallback to call when the request is satisfied
     */
    discard_alarm(uid: string | null, rid: string | null, alarm_uid: string | null, opflags: ECal.OperationFlags, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void
    /**
     * Asynchronously discards the VALARM object with a unique ID of `alarm_uid`
     * from the iCalendar object identified by `uid` and, optionally, `rid`.
     * 
     * When the operation is finished, `callback` will be called.  You can
     * then call e_cal_backend_discard_alarm_finish() to get the result of
     * the operation.
     * @param uid a unique ID for an iCalendar object
     * @param rid a recurrence ID, or %NULL
     * @param alarm_uid a unique ID for an iCalendar VALARM object
     * @param opflags bit-or of #ECalOperationFlags
     * @param cancellable optional #GCancellable object, or %NULL
     * @param callback a #GAsyncReadyCallback to call when the request is satisfied
     */
    discard_alarm(uid: string | null, rid: string | null, alarm_uid: string | null, opflags: ECal.OperationFlags, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void
    /**
     * Calls the get_attachment_uris_sync method on the given backend.
     * @param cal An EDataCal object.
     * @param cancellable a #GCancellable for the operation
     * @param uid Unique id of the calendar object.
     * @param rid Recurrence id of the calendar object.
     * @param attachments Placeholder for list of returned attachment uris.
     */
    get_attachment_uris(cal: DataCal, cancellable: Gio.Cancellable | null, uid: string | null, rid: string | null, attachments: string[]): void

    // Overloads of get_attachment_uris

    /**
     * Asynchronously inspects the iCalendar object specified by `uid` and,
     * optionally, `rid` for attachments.
     * 
     * When the operation is finished, `callback` will be called.  You can then
     * call e_cal_backend_get_attachment_uris_finish() to get the result of the
     * operation.
     * @param uid a unique ID for an iCalendar object
     * @param rid a recurrence ID, or %NULL
     * @param cancellable optional #GCancellable object, or %NULL
     * @param callback a #GAsyncReadyCallback to call when the request is satisfied
     */
    get_attachment_uris(uid: string | null, rid: string | null, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void
    /**
     * Asynchronously inspects the iCalendar object specified by `uid` and,
     * optionally, `rid` for attachments.
     * 
     * When the operation is finished, `callback` will be called.  You can then
     * call e_cal_backend_get_attachment_uris_finish() to get the result of the
     * operation.
     * @param uid a unique ID for an iCalendar object
     * @param rid a recurrence ID, or %NULL
     * @param cancellable optional #GCancellable object, or %NULL
     * @param callback a #GAsyncReadyCallback to call when the request is satisfied
     */
    get_attachment_uris(uid: string | null, rid: string | null, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void
    /**
     * Calls the get_free_busy_sync method on the given backend.
     * @param cal An EDataCal object.
     * @param cancellable a #GCancellable for the operation
     * @param users List of users to get F/B info from.
     * @param start Time range start.
     * @param end Time range end.
     */
    get_free_busy(cal: DataCal, cancellable: Gio.Cancellable | null, users: string[], start: number, end: number): /* freebusyobjects */ string[]

    // Overloads of get_free_busy

    /**
     * Asynchronously obtains a free/busy object for the list of `users` in the
     * time interval between `start` and `end`.
     * 
     * When the operation is finished, `callback` will be called.  You can
     * then call e_cal_backend_get_free_busy_finish() to get the result of
     * the operation.
     * @param start start time
     * @param end end time
     * @param users a %NULL-terminated array of user strings
     * @param cancellable optional #GCancellable object, or %NULL
     * @param callback a #GAsyncReadyCallback to call when the request is satisfied
     */
    get_free_busy(start: number, end: number, users: string[], cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void
    /**
     * Asynchronously obtains a free/busy object for the list of `users` in the
     * time interval between `start` and `end`.
     * 
     * When the operation is finished, `callback` will be called.  You can
     * then call e_cal_backend_get_free_busy_finish() to get the result of
     * the operation.
     * @param start start time
     * @param end end time
     * @param users a %NULL-terminated array of user strings
     * @param cancellable optional #GCancellable object, or %NULL
     * @param callback a #GAsyncReadyCallback to call when the request is satisfied
     */
    get_free_busy(start: number, end: number, users: string[], cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void
    /**
     * Calls the get_object_sync method on the given backend.
     * @param cal An EDataCal object.
     * @param cancellable a #GCancellable for the operation
     * @param uid UID of the object to get.
     * @param rid Recurrence ID of the specific instance to get, or %NULL if    getting the master object.
     */
    get_object(cal: DataCal, cancellable: Gio.Cancellable | null, uid: string | null, rid: string | null): /* calobj */ string | null

    // Overloads of get_object

    /**
     * Asynchronously obtains an #ECalComponent by its `uid` and, optionally, `rid`.
     * 
     * When the operation is finished, `callback` will be called.  You can then
     * call e_cal_backend_get_object_finish() to get the result of the operation.
     * @param uid a unique ID for an iCalendar object
     * @param rid a recurrence ID, or %NULL
     * @param cancellable optional #GCancellable object, or %NULL
     * @param callback a #GAsyncReadyCallback to call when the request is satisfied
     */
    get_object(uid: string | null, rid: string | null, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void
    /**
     * Asynchronously obtains an #ECalComponent by its `uid` and, optionally, `rid`.
     * 
     * When the operation is finished, `callback` will be called.  You can then
     * call e_cal_backend_get_object_finish() to get the result of the operation.
     * @param uid a unique ID for an iCalendar object
     * @param rid a recurrence ID, or %NULL
     * @param cancellable optional #GCancellable object, or %NULL
     * @param callback a #GAsyncReadyCallback to call when the request is satisfied
     */
    get_object(uid: string | null, rid: string | null, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void
    /**
     * Calls the get_object_list_sync method on the given backend.
     * @param cal An EDataCal object.
     * @param cancellable a #GCancellable for the operation
     * @param sexp Search query.
     */
    get_object_list(cal: DataCal, cancellable: Gio.Cancellable | null, sexp: string | null): /* calobjs */ string[]

    // Overloads of get_object_list

    /**
     * Asynchronously obtains a set of iCalendar instances which satisfy
     * the criteria specified in `query`.
     * 
     * When the operation in finished, `callback` will be called.  You can then
     * call e_cal_backend_get_object_list_finish() to get the result of the
     * operation.
     * @param query a search query in S-expression format
     * @param cancellable optional #GCancellable object, or %NULL
     * @param callback a #GAsyncReadyCallback to call when the request is satisfied
     */
    get_object_list(query: string | null, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void
    /**
     * Asynchronously obtains a set of iCalendar instances which satisfy
     * the criteria specified in `query`.
     * 
     * When the operation in finished, `callback` will be called.  You can then
     * call e_cal_backend_get_object_list_finish() to get the result of the
     * operation.
     * @param query a search query in S-expression format
     * @param cancellable optional #GCancellable object, or %NULL
     * @param callback a #GAsyncReadyCallback to call when the request is satisfied
     */
    get_object_list(query: string | null, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void
    /**
     * Calls the modify_objects_sync method on the given backend.
     * @param cal An EDataCal object.
     * @param cancellable a #GCancellable for the operation
     * @param calobjs Objects to be modified.
     * @param mod Type of modification to be done.
     * @param opflags bit-or of #ECalOperationFlags
     */
    modify_objects(cal: DataCal, cancellable: Gio.Cancellable | null, calobjs: string[], mod: ECal.ObjModType, opflags: ECal.OperationFlags): [ /* old_components */ ECal.Component[], /* new_components */ ECal.Component[] ]

    // Overloads of modify_objects

    /**
     * Asynchronously modifies one or more iCalendar objects according to
     * `calobjs` and `mod`.
     * 
     * When the operation is finished, `callback` will be called.  You can then
     * call e_cal_backend_modify_objects_finish() to get the result of the
     * operation.
     * @param calobjs a %NULL-terminated array of iCalendar strings
     * @param mod modification type for recurrences
     * @param opflags bit-or of #ECalOperationFlags
     * @param cancellable optional #GCancellable object, or %NULL
     * @param callback a #GAsyncReadyCallback to call when the request is satisfied
     */
    modify_objects(calobjs: string | null, mod: ECal.ObjModType, opflags: ECal.OperationFlags, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void
    /**
     * Asynchronously modifies one or more iCalendar objects according to
     * `calobjs` and `mod`.
     * 
     * When the operation is finished, `callback` will be called.  You can then
     * call e_cal_backend_modify_objects_finish() to get the result of the
     * operation.
     * @param calobjs a %NULL-terminated array of iCalendar strings
     * @param mod modification type for recurrences
     * @param opflags bit-or of #ECalOperationFlags
     * @param cancellable optional #GCancellable object, or %NULL
     * @param callback a #GAsyncReadyCallback to call when the request is satisfied
     */
    modify_objects(calobjs: string | null, mod: ECal.ObjModType, opflags: ECal.OperationFlags, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void
    /**
     * Calls the open_sync method on the given backend.
     * @param cal An EDataCal object.
     * @param cancellable a #GCancellable for the operation or just create it when it does not exist.
     */
    open(cal: DataCal, cancellable: Gio.Cancellable | null): void

    // Overloads of open

    /**
     * Asynchronously "opens" the `backend`.  Opening a backend is something of
     * an outdated concept, but the operation is hanging around for a little
     * while longer.  This usually involves some custom initialization logic,
     * and testing of remote authentication if applicable.
     * 
     * When the operation is finished, `callback` will be called.  You can then
     * call e_cal_backend_open_finish() to get the result of the operation.
     * @param cancellable optional #GCancellable object, or %NULL
     * @param callback a #GAsyncReadyCallback to call when the request is satisfied
     */
    open(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void
    /**
     * Asynchronously "opens" the `backend`.  Opening a backend is something of
     * an outdated concept, but the operation is hanging around for a little
     * while longer.  This usually involves some custom initialization logic,
     * and testing of remote authentication if applicable.
     * 
     * When the operation is finished, `callback` will be called.  You can then
     * call e_cal_backend_open_finish() to get the result of the operation.
     * @param cancellable optional #GCancellable object, or %NULL
     * @param callback a #GAsyncReadyCallback to call when the request is satisfied
     */
    open(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void
    /**
     * Calls the receive_objects_sync method on the given backend.
     * @param cal An EDataCal object.
     * @param cancellable a #GCancellable for the operation
     * @param calobj iCalendar object to receive.
     * @param opflags bit-or of #ECalOperationFlags
     */
    receive_objects(cal: DataCal, cancellable: Gio.Cancellable | null, calobj: string | null, opflags: ECal.OperationFlags): void

    // Overloads of receive_objects

    /**
     * Asynchronously receives the set of iCalendar objects specified by
     * `calobj`.  This is used for iTIP confirmation and cancellation messages
     * for scheduled meetings.
     * 
     * When the operation is finished, `callback` will be called.  You can then
     * call e_cal_backend_receive_objects_finish() to get the result of the
     * operation.
     * @param calobj an iCalendar string
     * @param opflags bit-or of #ECalOperationFlags
     * @param cancellable optional #GCancellable object, or %NULL
     * @param callback a #GAsyncReadyCallback to call when the request is satisfied
     */
    receive_objects(calobj: string | null, opflags: ECal.OperationFlags, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void
    /**
     * Asynchronously receives the set of iCalendar objects specified by
     * `calobj`.  This is used for iTIP confirmation and cancellation messages
     * for scheduled meetings.
     * 
     * When the operation is finished, `callback` will be called.  You can then
     * call e_cal_backend_receive_objects_finish() to get the result of the
     * operation.
     * @param calobj an iCalendar string
     * @param opflags bit-or of #ECalOperationFlags
     * @param cancellable optional #GCancellable object, or %NULL
     * @param callback a #GAsyncReadyCallback to call when the request is satisfied
     */
    receive_objects(calobj: string | null, opflags: ECal.OperationFlags, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void
    /**
     * Calls the refresh_sync method on the given backend.
     * @param cal An EDataCal object.
     * @param cancellable a #GCancellable for the operation
     */
    refresh(cal: DataCal, cancellable: Gio.Cancellable | null): void

    // Overloads of refresh

    /**
     * Asynchronously initiates a refresh for `backend,` if the `backend` supports
     * refreshing.  The actual refresh operation completes on its own time.  This
     * function, along with e_cal_backend_refresh_finish(), merely initiates the
     * operation.
     * 
     * Once the refresh is initiated, `callback` will be called.  You can then
     * call e_cal_backend_refresh_finish() to get the result of the initiation.
     * @param cancellable optional #GCancellable object, or %NULL
     * @param callback a #GAsyncReadyCallback to call when the request is satisfied
     */
    refresh(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void
    /**
     * Asynchronously initiates a refresh for `backend,` if the `backend` supports
     * refreshing.  The actual refresh operation completes on its own time.  This
     * function, along with e_cal_backend_refresh_finish(), merely initiates the
     * operation.
     * 
     * Once the refresh is initiated, `callback` will be called.  You can then
     * call e_cal_backend_refresh_finish() to get the result of the initiation.
     * @param cancellable optional #GCancellable object, or %NULL
     * @param callback a #GAsyncReadyCallback to call when the request is satisfied
     */
    refresh(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void
    /**
     * Calls the remove_objects_sync method on the given backend.
     * @param cal An EDataCal object.
     * @param cancellable a #GCancellable for the operation
     * @param ids List of #ECalComponentId objects identifying the objects to remove.
     * @param mod Type of removal.
     * @param opflags bit-or of #ECalOperationFlags
     */
    remove_objects(cal: DataCal, cancellable: Gio.Cancellable | null, ids: ECal.ComponentId[], mod: ECal.ObjModType, opflags: ECal.OperationFlags): [ /* old_components */ ECal.Component[], /* new_components */ ECal.Component[] ]

    // Overloads of remove_objects

    /**
     * Asynchronously removes one or more iCalendar objects according to
     * `component_ids` and `mod`.
     * 
     * When the operation is finished, `callback` will be called.  You can then
     * call e_cal_backend_remove_objects_finish() to get the result of the
     * operation.
     * @param component_ids a #GList of #ECalComponentId structs
     * @param mod modification type for recurrences
     * @param opflags bit-or of #ECalOperationFlags
     * @param cancellable optional #GCancellable object, or %NULL
     * @param callback a #GAsyncReadyCallback to call when the request is satisfied
     */
    remove_objects(component_ids: ECal.ComponentId[], mod: ECal.ObjModType, opflags: ECal.OperationFlags, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void
    /**
     * Asynchronously removes one or more iCalendar objects according to
     * `component_ids` and `mod`.
     * 
     * When the operation is finished, `callback` will be called.  You can then
     * call e_cal_backend_remove_objects_finish() to get the result of the
     * operation.
     * @param component_ids a #GList of #ECalComponentId structs
     * @param mod modification type for recurrences
     * @param opflags bit-or of #ECalOperationFlags
     * @param cancellable optional #GCancellable object, or %NULL
     * @param callback a #GAsyncReadyCallback to call when the request is satisfied
     */
    remove_objects(component_ids: ECal.ComponentId[], mod: ECal.ObjModType, opflags: ECal.OperationFlags, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void
    /**
     * Calls the send_objects_sync method on the given backend.
     * @param cal An EDataCal object.
     * @param cancellable a #GCancellable for the operation
     * @param calobj The iCalendar object to send.
     * @param opflags bit-or of #ECalOperationFlags
     * @param users List of users to send notifications to.
     */
    send_objects(cal: DataCal, cancellable: Gio.Cancellable | null, calobj: string | null, opflags: ECal.OperationFlags, users: string[]): /* modified_calobj */ string | null

    // Overloads of send_objects

    /**
     * Asynchronously sends meeting information in `calobj`.  The `backend` may
     * modify `calobj` and send meeting information only to particular users.
     * 
     * When the operation is finished, `callback` will be called.  You can then
     * call e_cal_backend_send_objects_finish() to get the result of the operation.
     * @param calobj an iCalendar string
     * @param opflags bit-or of #ECalOperationFlags
     * @param cancellable optional #GCancellable object, or %NULL
     * @param callback a #GAsyncReadyCallback to call when the request is satisfied
     */
    send_objects(calobj: string | null, opflags: ECal.OperationFlags, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void
    /**
     * Asynchronously sends meeting information in `calobj`.  The `backend` may
     * modify `calobj` and send meeting information only to particular users.
     * 
     * When the operation is finished, `callback` will be called.  You can then
     * call e_cal_backend_send_objects_finish() to get the result of the operation.
     * @param calobj an iCalendar string
     * @param opflags bit-or of #ECalOperationFlags
     * @param cancellable optional #GCancellable object, or %NULL
     * @param callback a #GAsyncReadyCallback to call when the request is satisfied
     */
    send_objects(calobj: string | null, opflags: ECal.OperationFlags, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void

    // Own virtual methods of EDataCal-2.0.EDataCal.CalMetaBackend

    /**
     * This is called always before any operation which requires a connection
     * to the remote side. It can fail with an #E_CLIENT_ERROR_REPOSITORY_OFFLINE
     * error to indicate that the remote side cannot be currently reached. Other
     * errors are propagated to the caller/client side. This method is not called
     * when the backend is offline.
     * 
     * The descendant should also call e_cal_backend_set_writable() after successful
     * connect to the remote side. This value is stored for later use, when being
     * opened offline.
     * 
     * The `credentials` parameter consists of the previously used credentials.
     * It's always %NULL with the first connection attempt. To get the credentials,
     * just set the `out_auth_result` to %E_SOURCE_AUTHENTICATION_REQUIRED for
     * the first time and the function will be called again once the credentials
     * are available. See the documentation of #ESourceAuthenticationResult for
     * other available results.
     * 
     * The out parameters are passed to e_backend_schedule_credentials_required()
     * and are ignored when the descendant returns %TRUE, aka they are used
     * only if the connection fails. The `out_certificate_pem` and `out_certificate_errors`
     * should be used together and they can be left untouched if the failure reason was
     * not related to certificate. Use `out_auth_result` %E_SOURCE_AUTHENTICATION_UNKNOWN
     * to indicate other error than `credentials` error, otherwise the `error` is used
     * according to `out_auth_result` value.
     * 
     * It is mandatory to implement this virtual method by the descendant.
     * @virtual 
     * @param credentials an #ENamedParameters with previously used credentials, or %NULL
     * @param cancellable optional #GCancellable object, or %NULL
     * @returns Whether succeeded.
     */
    vfunc_connect_sync(credentials: EDataServer.NamedParameters | null, cancellable: Gio.Cancellable | null): [ /* returnType */ boolean, /* out_auth_result */ EDataServer.SourceAuthenticationResult, /* out_certificate_pem */ string | null, /* out_certificate_errors */ Gio.TlsCertificateFlags ]
    /**
     * This is called when the backend goes into offline mode or
     * when the disconnect is required. The implementation should
     * not report any error when it is called and the `meta_backend`
     * is not connected.
     * 
     * It is mandatory to implement this virtual method by the descendant.
     * @virtual 
     * @param cancellable optional #GCancellable object, or %NULL
     * @returns Whether succeeded.
     */
    vfunc_disconnect_sync(cancellable: Gio.Cancellable | null): boolean
    /**
     * Gathers the changes since the last check which had been done
     * on the remote side.
     * 
     * The `last_sync_tag` can be used as a tag of the last check. This can be %NULL,
     * when there was no previous call or when the descendant doesn't store any
     * such tags. The `out_new_sync_tag` can be populated with a value to be stored
     * and used the next time.
     * 
     * The `out_repeat` can be set to %TRUE when the descendant didn't finish
     * read of all the changes. In that case the `meta_backend` calls this
     * function again with the `out_new_sync_tag` as the `last_sync_tag,` but also
     * notifies about the found changes immediately. The `is_repeat` is set
     * to %TRUE as well in this case, otherwise it's %FALSE.
     * 
     * The descendant can populate also ECalMetaBackendInfo::object of
     * the `out_created_objects` and `out_modified_objects,` if known, in which
     * case this will be used instead of loading it with e_cal_meta_backend_load_component_sync().
     * 
     * It is optional to implement this virtual method by the descendant.
     * The default implementation calls e_cal_meta_backend_list_existing_sync()
     * and then compares the list with the current content of the local cache
     * and populates the respective lists appropriately.
     * 
     * Each output #GSList should be freed with
     * g_slist_free_full (objects, e_cal_meta_backend_info_free);
     * when no longer needed.
     * @virtual 
     * @param last_sync_tag optional sync tag from the last check
     * @param is_repeat set to %TRUE when this is the repeated call
     * @param cancellable optional #GCancellable object, or %NULL
     * @returns Whether succeeded.
     */
    vfunc_get_changes_sync(last_sync_tag: string | null, is_repeat: boolean, cancellable: Gio.Cancellable | null): [ /* returnType */ boolean, /* out_new_sync_tag */ string | null, /* out_repeat */ boolean, /* out_created_objects */ CalMetaBackendInfo[], /* out_modified_objects */ CalMetaBackendInfo[], /* out_removed_objects */ CalMetaBackendInfo[] ]
    /**
     * It is optional to implement this virtual method by the descendants.
     * It is used to receive SSL error details when any online operation
     * returns E_CLIENT_ERROR, E_CLIENT_ERROR_TLS_NOT_AVAILABLE error.
     * @virtual 
     * @returns %TRUE, when the SSL error details had been available and    the out parameters populated, %FALSE otherwise.
     */
    vfunc_get_ssl_error_details(): [ /* returnType */ boolean, /* out_certificate_pem */ string | null, /* out_certificate_errors */ Gio.TlsCertificateFlags ]
    /**
     * Used to get list of all existing objects on the remote side. The descendant
     * can optionally provide `out_new_sync_tag,` which will be stored on success, if
     * not %NULL. The descendant can populate also ECalMetaBackendInfo::object of
     * the `out_existing_objects,` if known, in which case this will be used instead
     * of loading it with e_cal_meta_backend_load_component_sync().
     * 
     * It is mandatory to implement this virtual method by the descendant, unless
     * it implements its own #ECalMetaBackendClass.get_changes_sync().
     * 
     * The `out_existing_objects` #GSList should be freed with
     * g_slist_free_full (objects, e_cal_meta_backend_info_free);
     * when no longer needed.
     * @virtual 
     * @param cancellable optional #GCancellable object, or %NULL
     * @returns Whether succeeded.
     */
    vfunc_list_existing_sync(cancellable: Gio.Cancellable | null): [ /* returnType */ boolean, /* out_new_sync_tag */ string | null, /* out_existing_objects */ CalMetaBackendInfo[] ]
    /**
     * Loads a component from the remote side. Any detached instances should be
     * returned together with the master object. The `out_component` can be either
     * a VCALENDAR component, which would contain the master object and all of
     * its detached instances, eventually also used time zones, or the requested
     * component of type VEVENT, VJOURNAL or VTODO.
     * 
     * It is mandatory to implement this virtual method by the descendant.
     * 
     * The returned `out_component` should be freed with g_object_unref(),
     * when no longer needed.
     * 
     * The returned `out_extra` should be freed with g_free(), when no longer
     * needed.
     * @virtual 
     * @param uid a component UID
     * @param extra optional extra data stored with the component, or %NULL
     * @param cancellable optional #GCancellable object, or %NULL
     * @returns Whether succeeded.
     */
    vfunc_load_component_sync(uid: string | null, extra: string | null, cancellable: Gio.Cancellable | null): [ /* returnType */ boolean, /* out_component */ ICalGLib.Component, /* out_extra */ string | null ]
    /**
     * Removes a component from the remote side, with all its detached instances.
     * The `object` is not %NULL when it's removing locally deleted object
     * in offline mode. Being it %NULL, the descendant can obtain the object
     * from the #ECalCache.
     * 
     * It is mandatory to implement this virtual method by the writable descendant.
     * @virtual 
     * @param conflict_resolution an #EConflictResolution to use
     * @param uid a component UID
     * @param extra extra data being saved with the component in the local cache, or %NULL
     * @param object corresponding iCalendar object, as stored in the local cache, or %NULL
     * @param opflags bit-or of #ECalOperationFlags
     * @param cancellable optional #GCancellable object, or %NULL
     * @returns Whether succeeded.
     */
    vfunc_remove_component_sync(conflict_resolution: EDataServer.ConflictResolution, uid: string | null, extra: string | null, object: string | null, opflags: ECal.OperationFlags, cancellable: Gio.Cancellable | null): boolean
    /**
     * Determines, whether current source content requires reconnect of the backend.
     * 
     * It is optional to implement this virtual method by the descendant. The default
     * implementation compares %E_SOURCE_EXTENSION_AUTHENTICATION and
     * %E_SOURCE_EXTENSION_WEBDAV_BACKEND, if existing in the source,
     * with the values after the last successful connect and returns
     * %TRUE when they changed. It always return %TRUE when there was
     * no successful connect done yet.
     * @virtual 
     * @returns %TRUE, when reconnect is required, %FALSE otherwise.
     */
    vfunc_requires_reconnect(): boolean
    /**
     * Saves one component into the remote side. The `instances` contain the master
     * object and all the detached instances of the same component (all have the same UID).
     * When the `overwrite_existing` is %TRUE, then the descendant can overwrite an object
     * with the same UID on the remote side (usually used for modify). The `conflict_resolution`
     * defines what to do when the remote side had made any changes to the object since
     * the last update.
     * 
     * The descendant can use e_cal_meta_backend_merge_instances() to merge
     * the instances into one VCALENDAR component, which will contain also
     * used time zones.
     * 
     * The components in `instances` have already converted locally stored attachments
     * into inline attachments, thus it's not needed to call
     * e_cal_meta_backend_inline_local_attachments_sync() by the descendant.
     * 
     * The `out_new_uid` can be populated with a UID of the saved component as the server
     * assigned it to it. This UID, if set, is loaded from the remote side afterwards,
     * also to see whether any changes had been made to the component by the remote side.
     * 
     * The `out_new_extra` can be populated with a new extra data to save with the component.
     * Left it %NULL, to keep the same value as the `extra`.
     * 
     * The descendant can use an #E_CLIENT_ERROR_OUT_OF_SYNC error to indicate that
     * the save failed due to made changes on the remote side, and let the `meta_backend`
     * to resolve this conflict based on the `conflict_resolution` on its own.
     * The #E_CLIENT_ERROR_OUT_OF_SYNC error should not be used when the descendant
     * is able to resolve the conflicts itself.
     * 
     * It is mandatory to implement this virtual method by the writable descendant.
     * @virtual 
     * @param overwrite_existing %TRUE when can overwrite existing components, %FALSE otherwise
     * @param conflict_resolution one of #EConflictResolution, what to do on conflicts
     * @param instances instances of the component to save
     * @param extra extra data saved with the components in an #ECalCache
     * @param opflags bit-or of #ECalOperationFlags
     * @param cancellable optional #GCancellable object, or %NULL
     * @returns Whether succeeded.
     */
    vfunc_save_component_sync(overwrite_existing: boolean, conflict_resolution: EDataServer.ConflictResolution, instances: ECal.Component[], extra: string | null, opflags: ECal.OperationFlags, cancellable: Gio.Cancellable | null): [ /* returnType */ boolean, /* out_new_uid */ string | null, /* out_new_extra */ string | null ]
    /**
     * Searches `meta_backend` with given expression `expr` and returns
     * found components as a #GSList of #ECalComponent `out_components`.
     * Free the returned `out_components` with g_slist_free_full (components, g_object_unref);
     * when no longer needed.
     * When the `expr` is %NULL, all objects are returned. To get iCal
     * strings instead, call e_cal_meta_backend_search_sync().
     * 
     * It is optional to implement this virtual method by the descendant.
     * The default implementation searches `meta_backend'`s cache. It's also
     * not required to be online for searching, thus `meta_backend` doesn't
     * ensure it.
     * @virtual 
     * @param expr a search expression, or %NULL
     * @param cancellable optional #GCancellable object, or %NULL
     * @returns Whether succeeded.
     */
    vfunc_search_components_sync(expr: string | null, cancellable: Gio.Cancellable | null): [ /* returnType */ boolean, /* out_components */ ECal.Component[] ]
    /**
     * Searches `meta_backend` with given expression `expr` and returns
     * found components as a #GSList of iCal strings `out_icalstrings`.
     * Free the returned `out_icalstrings` with g_slist_free_full (icalstrings, g_free);
     * when no longer needed.
     * When the `expr` is %NULL, all objects are returned. To get
     * #ECalComponent-s instead, call e_cal_meta_backend_search_components_sync().
     * 
     * It is optional to implement this virtual method by the descendant.
     * The default implementation searches `meta_backend'`s cache. It's also
     * not required to be online for searching, thus `meta_backend` doesn't
     * ensure it.
     * @virtual 
     * @param expr a search expression, or %NULL
     * @param cancellable optional #GCancellable object, or %NULL
     * @returns Whether succeeded.
     */
    vfunc_search_sync(expr: string | null, cancellable: Gio.Cancellable | null): [ /* returnType */ boolean, /* out_icalstrings */ string[] ]
    vfunc_source_changed(): void

    // Own signals of EDataCal-2.0.EDataCal.CalMetaBackend

    connect(sigName: "refresh-completed", callback: CalMetaBackend.RefreshCompletedSignalCallback): number
    connect_after(sigName: "refresh-completed", callback: CalMetaBackend.RefreshCompletedSignalCallback): number
    emit(sigName: "refresh-completed", ...args: any[]): void
    connect(sigName: "source-changed", callback: CalMetaBackend.SourceChangedSignalCallback): number
    connect_after(sigName: "source-changed", callback: CalMetaBackend.SourceChangedSignalCallback): number
    emit(sigName: "source-changed", ...args: any[]): void

    // Class property signals of EDataCal-2.0.EDataCal.CalMetaBackend

    connect(sigName: "notify::cache", callback: (($obj: CalMetaBackend, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::cache", callback: (($obj: CalMetaBackend, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::cache", ...args: any[]): void
    connect(sigName: "notify::cache-dir", callback: (($obj: CalMetaBackend, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::cache-dir", callback: (($obj: CalMetaBackend, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::cache-dir", ...args: any[]): void
    connect(sigName: "notify::kind", callback: (($obj: CalMetaBackend, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::kind", callback: (($obj: CalMetaBackend, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::kind", ...args: any[]): void
    connect(sigName: "notify::proxy-resolver", callback: (($obj: CalMetaBackend, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::proxy-resolver", callback: (($obj: CalMetaBackend, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::proxy-resolver", ...args: any[]): void
    connect(sigName: "notify::registry", callback: (($obj: CalMetaBackend, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::registry", callback: (($obj: CalMetaBackend, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::registry", ...args: any[]): void
    connect(sigName: "notify::writable", callback: (($obj: CalMetaBackend, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::writable", callback: (($obj: CalMetaBackend, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::writable", ...args: any[]): void
    connect(sigName: "notify::connectable", callback: (($obj: CalMetaBackend, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::connectable", callback: (($obj: CalMetaBackend, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::connectable", ...args: any[]): void
    connect(sigName: "notify::main-context", callback: (($obj: CalMetaBackend, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::main-context", callback: (($obj: CalMetaBackend, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::main-context", ...args: any[]): void
    connect(sigName: "notify::online", callback: (($obj: CalMetaBackend, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::online", callback: (($obj: CalMetaBackend, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::online", ...args: any[]): void
    connect(sigName: "notify::source", callback: (($obj: CalMetaBackend, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::source", callback: (($obj: CalMetaBackend, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::source", ...args: any[]): void
    connect(sigName: "notify::user-prompter", callback: (($obj: CalMetaBackend, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::user-prompter", callback: (($obj: CalMetaBackend, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::user-prompter", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * Contains only private data that should be read and manipulated using
 * the functions below.
 * @class 
 */
class CalMetaBackend extends CalBackendSync {

    // Own properties of EDataCal-2.0.EDataCal.CalMetaBackend

    static name: string
    static $gtype: GObject.GType<CalMetaBackend>

    // Constructors of EDataCal-2.0.EDataCal.CalMetaBackend

    constructor(config?: CalMetaBackend.ConstructorProperties) 
    _init(config?: CalMetaBackend.ConstructorProperties): void
}

module DataCal {

    // Constructor properties interface

    interface ConstructorProperties extends Gio.Initable.ConstructorProperties, GObject.Object.ConstructorProperties {

        // Own constructor properties of EDataCal-2.0.EDataCal.DataCal

        backend?: CalBackend | null
        connection?: Gio.DBusConnection | null
        object_path?: string | null
    }

}

interface DataCal extends Gio.Initable {

    // Own properties of EDataCal-2.0.EDataCal.DataCal

    readonly backend: CalBackend
    readonly connection: Gio.DBusConnection
    readonly object_path: string | null

    // Own fields of EDataCal-2.0.EDataCal.DataCal

    parent: GObject.Object
    priv: DataCalPrivate

    // Owm methods of EDataCal-2.0.EDataCal.DataCal

    /**
     * Returns the #GDBusConnection on which the Calendar D-Bus interface
     * is exported.
     * @returns the #GDBusConnection
     */
    get_connection(): Gio.DBusConnection
    /**
     * Returns the object path at which the Calendar D-Bus interface is
     * exported.
     * @returns the object path
     */
    get_object_path(): string | null
    /**
     * Returns the #ECalBackend to which incoming remote method invocations
     * are being forwarded.
     * 
     * The returned #ECalBackend is referenced for thread-safety and should
     * be unreferenced with g_object_unref() when finished with it.
     * @returns an #ECalBackend
     */
    ref_backend(): CalBackend | null
    /**
     * Notifies client about certain property value change
     * @param prop_name property name
     * @param prop_value new property value
     */
    report_backend_property_changed(prop_name: string | null, prop_value: string | null): void
    /**
     * Emits an error message, thus the clients can be notified about it.
     * @param message an error message to report
     */
    report_error(message: string | null): void
    /**
     * Reports result of a free/busy query on the `cal`.
     * @param freebusy a #GSList of free/busy components encoded as string
     */
    report_free_busy_data(freebusy: string[]): void
    /**
     * Notifies listeners of the completion of the add_timezone method call.
     * @param opid associated operation id
     * @param error Operation error, if any, automatically freed if passed it.
     */
    respond_add_timezone(opid: number, error: GLib.Error): void
    /**
     * Notifies listeners of the completion of the create_objects method call.
     * @param opid associated operation id
     * @param error Operation error, if any, automatically freed if passed it.
     * @param uids UIDs of the objects created.
     * @param new_components The newly created #ECalComponent objects.
     */
    respond_create_objects(opid: number, error: GLib.Error, uids: string[], new_components: ECal.Component[]): void
    /**
     * Notifies listeners of the completion of the discard_alarm method call.
     * @param opid associated operation id
     * @param error Operation error, if any, automatically freed if passed it.
     */
    respond_discard_alarm(opid: number, error: GLib.Error): void
    /**
     * Notifies listeners of the completion of the get_attachment_uris method call.
     * @param opid associated operation id
     * @param error Operation error, if any, automatically freed if passed it.
     * @param attachment_uris List of retrieved attachment uri's.
     */
    respond_get_attachment_uris(opid: number, error: GLib.Error, attachment_uris: string[]): void
    /**
     * Notifies listeners of the completion of the get_free_busy method call.
     * To pass actual free/busy objects to the client asynchronously
     * use e_data_cal_report_free_busy_data(), but the `freebusy` should contain
     * all the objects being used in e_data_cal_report_free_busy_data().
     * @param opid associated operation id
     * @param error Operation error, if any, automatically freed if passed it.
     * @param freebusy a #GSList of iCalendar strings with all gathered free/busy components.
     */
    respond_get_free_busy(opid: number, error: GLib.Error, freebusy: string[]): void
    /**
     * Notifies listeners of the completion of the get_object method call.
     * @param opid associated operation id
     * @param error Operation error, if any, automatically freed if passed it.
     * @param object The object retrieved as an iCalendar string.
     */
    respond_get_object(opid: number, error: GLib.Error, object: string | null): void
    /**
     * Notifies listeners of the completion of the get_object_list method call.
     * @param opid associated operation id
     * @param error Operation error, if any, automatically freed if passed it.
     * @param objects List of retrieved objects.
     */
    respond_get_object_list(opid: number, error: GLib.Error, objects: string[]): void
    /**
     * Notifies listeners of the completion of the get_timezone method call.
     * @param opid associated operation id
     * @param error Operation error, if any, automatically freed if passed it.
     * @param tzobject The requested timezone as an iCalendar string.
     */
    respond_get_timezone(opid: number, error: GLib.Error, tzobject: string | null): void
    /**
     * Notifies listeners of the completion of the modify_objects method call.
     * @param opid associated operation id
     * @param error Operation error, if any, automatically freed if passed it.
     * @param old_components The old #ECalComponent(s).
     * @param new_components The new #ECalComponent(s).
     */
    respond_modify_objects(opid: number, error: GLib.Error, old_components: ECal.Component[], new_components: ECal.Component[]): void
    /**
     * Notifies listeners of the completion of the open method call.
     * @param opid associated operation id
     * @param error Operation error, if any, automatically freed if passed it.
     */
    respond_open(opid: number, error: GLib.Error): void
    /**
     * Notifies listeners of the completion of the receive_objects method call.
     * @param opid associated operation id
     * @param error Operation error, if any, automatically freed if passed it.
     */
    respond_receive_objects(opid: number, error: GLib.Error): void
    /**
     * Notifies listeners of the completion of the refresh method call.
     * @param opid associated operation id
     * @param error Operation error, if any, automatically freed if passed it.
     */
    respond_refresh(opid: number, error: GLib.Error): void
    /**
     * Notifies listeners of the completion of the remove_objects method call.
     * @param opid associated operation id
     * @param error Operation error, if any, automatically freed if passed it.
     * @param ids IDs of the removed objects.
     * @param old_components The old #ECalComponent(s).
     * @param new_components The new #ECalComponent(s).    They will not be NULL only when removing instances of recurring appointments.
     */
    respond_remove_objects(opid: number, error: GLib.Error, ids: ECal.ComponentId[], old_components: ECal.Component[], new_components: ECal.Component[]): void
    /**
     * Notifies listeners of the completion of the send_objects method call.
     * @param opid associated operation id
     * @param error Operation error, if any, automatically freed if passed it.
     * @param users List of users.
     * @param calobj An iCalendar string representing the object sent.
     */
    respond_send_objects(opid: number, error: GLib.Error, users: string[], calobj: string | null): void

    // Class property signals of EDataCal-2.0.EDataCal.DataCal

    connect(sigName: "notify::backend", callback: (($obj: DataCal, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::backend", callback: (($obj: DataCal, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::backend", ...args: any[]): void
    connect(sigName: "notify::connection", callback: (($obj: DataCal, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::connection", callback: (($obj: DataCal, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::connection", ...args: any[]): void
    connect(sigName: "notify::object-path", callback: (($obj: DataCal, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::object-path", callback: (($obj: DataCal, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::object-path", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class DataCal extends GObject.Object {

    // Own properties of EDataCal-2.0.EDataCal.DataCal

    static name: string
    static $gtype: GObject.GType<DataCal>

    // Constructors of EDataCal-2.0.EDataCal.DataCal

    constructor(config?: DataCal.ConstructorProperties) 
    /**
     * Creates a new #EDataCal and exports the Calendar D-Bus interface
     * on `connection` at `object_path`.  The #EDataCal handles incoming remote
     * method invocations and forwards them to the `backend`.  If the Calendar
     * interface fails to export, the function sets `error` and returns %NULL.
     * @constructor 
     * @param backend an #ECalBackend
     * @param connection a #GDBusConnection
     * @param object_path object path for the D-Bus interface
     * @returns an #EDataCal, or %NULL on error
     */
    constructor(backend: CalBackend, connection: Gio.DBusConnection, object_path: string | null) 
    /**
     * Creates a new #EDataCal and exports the Calendar D-Bus interface
     * on `connection` at `object_path`.  The #EDataCal handles incoming remote
     * method invocations and forwards them to the `backend`.  If the Calendar
     * interface fails to export, the function sets `error` and returns %NULL.
     * @constructor 
     * @param backend an #ECalBackend
     * @param connection a #GDBusConnection
     * @param object_path object path for the D-Bus interface
     * @returns an #EDataCal, or %NULL on error
     */
    static new(backend: CalBackend, connection: Gio.DBusConnection, object_path: string | null): DataCal
    _init(config?: DataCal.ConstructorProperties): void
}

module DataCalFactory {

    // Constructor properties interface

    interface ConstructorProperties extends EDataServer.Extensible.ConstructorProperties, Gio.Initable.ConstructorProperties, EBackend.DataFactory.ConstructorProperties {
    }

}

interface DataCalFactory extends EDataServer.Extensible, Gio.Initable {

    // Own fields of EDataCal-2.0.EDataCal.DataCalFactory

    parent: EBackend.DataFactory
    priv: DataCalFactoryPrivate

    // Class property signals of EDataCal-2.0.EDataCal.DataCalFactory

    connect(sigName: "notify::backend-per-process", callback: (($obj: DataCalFactory, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::backend-per-process", callback: (($obj: DataCalFactory, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::backend-per-process", ...args: any[]): void
    connect(sigName: "notify::registry", callback: (($obj: DataCalFactory, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::registry", callback: (($obj: DataCalFactory, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::registry", ...args: any[]): void
    connect(sigName: "notify::reload-supported", callback: (($obj: DataCalFactory, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::reload-supported", callback: (($obj: DataCalFactory, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::reload-supported", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class DataCalFactory extends EBackend.DataFactory {

    // Own properties of EDataCal-2.0.EDataCal.DataCalFactory

    static name: string
    static $gtype: GObject.GType<DataCalFactory>

    // Constructors of EDataCal-2.0.EDataCal.DataCalFactory

    constructor(config?: DataCalFactory.ConstructorProperties) 
    constructor(backend_per_process: number, cancellable: Gio.Cancellable | null) 
    static new(backend_per_process: number, cancellable: Gio.Cancellable | null): DataCalFactory
    _init(config?: DataCalFactory.ConstructorProperties): void
}

module DataCalView {

    // Constructor properties interface

    interface ConstructorProperties extends Gio.Initable.ConstructorProperties, GObject.Object.ConstructorProperties {

        // Own constructor properties of EDataCal-2.0.EDataCal.DataCalView

        backend?: CalBackend | null
        connection?: Gio.DBusConnection | null
        object_path?: string | null
        sexp?: CalBackendSExp | null
    }

}

interface DataCalView extends Gio.Initable {

    // Own properties of EDataCal-2.0.EDataCal.DataCalView

    readonly backend: CalBackend
    readonly connection: Gio.DBusConnection
    readonly object_path: string | null
    readonly sexp: CalBackendSExp

    // Own fields of EDataCal-2.0.EDataCal.DataCalView

    parent: GObject.Object
    priv: DataCalViewPrivate

    // Owm methods of EDataCal-2.0.EDataCal.DataCalView

    /**
     * Compares the given `component` to the regular expression used for the
     * given view.
     * @param component the #ECalComponent object to match.
     * @returns TRUE if the object matches the expression, FALSE if not.
     */
    component_matches(component: ECal.Component): boolean
    /**
     * This function is similar to e_cal_component_get_as_string() except
     * that it takes into account the fields-of-interest that `view` is
     * configured with and filters out any unneeded fields.
     * @param component The #ECalComponent to get the string for.
     * @returns A newly allocated string representation of @component suitable for @view.
     */
    get_component_string(component: ECal.Component): string | null
    /**
     * Returns the #GDBusConnection on which the CalendarView D-Bus
     * interface is exported.
     * @returns the #GDBusConnection
     */
    get_connection(): Gio.DBusConnection
    get_fields_of_interest(): GLib.HashTable | null
    /**
     * Gets the #ECalClientViewFlags that control the behaviour of `view`.
     * @returns the flags for @view.
     */
    get_flags(): ECal.ClientViewFlags
    /**
     * Return the object path at which the CalendarView D-Bus inteface is
     * exported.
     * @returns the object path
     */
    get_object_path(): string | null
    /**
     * Get the #ECalBackendSExp object used for the given view.
     * @returns The expression object used to search.
     */
    get_sexp(): any | null
    /**
     * Checks whether the given view is already completed. Being completed means the initial
     * matching of objects have been finished, not that no more notifications about
     * changes will be sent. In fact, even after completed, notifications will still be sent
     * if there are changes in the objects matching the view search expression.
     * @returns TRUE if the view is completed, FALSE if still in progress.
     */
    is_completed(): boolean
    /**
     * Checks whether the given view has already been started.
     * @returns TRUE if the view has already been started, FALSE otherwise.
     */
    is_started(): boolean
    /**
     * Checks whether the given view has been stopped.
     * @returns TRUE if the view has been stopped, FALSE otherwise.
     */
    is_stopped(): boolean
    /**
     * Notifies all view listeners of the completion of the view, including a
     * status code.
     * @param error View completion error, if any.
     */
    notify_complete(error: GLib.Error): void
    /**
     * Notifies all view listeners of the addition of a list of components.
     * 
     * Uses the #EDataCalView's fields-of-interest to filter out unwanted
     * information from iCalendar strings sent over the bus.
     * @param ecalcomponents List of #ECalComponent-s that have been added.
     */
    notify_components_added(ecalcomponents: ECal.Component[]): void
    /**
     * Notifies all the view listeners of the addition of a single object.
     * 
     * Uses the #EDataCalView's fields-of-interest to filter out unwanted
     * information from iCalendar strings sent over the bus.
     * @param component The #ECalComponent that has been added.
     */
    notify_components_added_1(component: ECal.Component): void
    /**
     * Notifies all view listeners of the modification of a list of components.
     * 
     * Uses the #EDataCalView's fields-of-interest to filter out unwanted
     * information from iCalendar strings sent over the bus.
     * @param ecalcomponents List of modified #ECalComponent-s.
     */
    notify_components_modified(ecalcomponents: ECal.Component[]): void
    /**
     * Notifies all view listeners of the modification of `component`.
     * 
     * Uses the #EDataCalView's fields-of-interest to filter out unwanted
     * information from iCalendar strings sent over the bus.
     * @param component The modified #ECalComponent.
     */
    notify_components_modified_1(component: ECal.Component): void
    /**
     * Notifies all view listener of the removal of a list of objects.
     * @param ids List of IDs for the objects that have been removed.
     */
    notify_objects_removed(ids: ECal.ComponentId[]): void
    /**
     * Notifies all view listener of the removal of a single object.
     * @param id ID of the removed object.
     */
    notify_objects_removed_1(id: ECal.ComponentId): void
    /**
     * Notifies all view listeners of progress messages.
     * @param percent Percentage completed.
     * @param message Progress message to send to listeners.
     */
    notify_progress(percent: number, message: string | null): void
    /**
     * Compares the given `object` to the regular expression used for the
     * given view.
     * @param object Object to match.
     * @returns TRUE if the object matches the expression, FALSE if not.
     */
    object_matches(object: string | null): boolean
    /**
     * Refs the backend that `view` is querying. Unref the returned backend,
     * if not %NULL, with g_object_unref(), when no longer needed.
     * @returns The associated #ECalBackend.
     */
    ref_backend(): CalBackend | null

    // Class property signals of EDataCal-2.0.EDataCal.DataCalView

    connect(sigName: "notify::backend", callback: (($obj: DataCalView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::backend", callback: (($obj: DataCalView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::backend", ...args: any[]): void
    connect(sigName: "notify::connection", callback: (($obj: DataCalView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::connection", callback: (($obj: DataCalView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::connection", ...args: any[]): void
    connect(sigName: "notify::object-path", callback: (($obj: DataCalView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::object-path", callback: (($obj: DataCalView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::object-path", ...args: any[]): void
    connect(sigName: "notify::sexp", callback: (($obj: DataCalView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sexp", callback: (($obj: DataCalView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::sexp", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class DataCalView extends GObject.Object {

    // Own properties of EDataCal-2.0.EDataCal.DataCalView

    static name: string
    static $gtype: GObject.GType<DataCalView>

    // Constructors of EDataCal-2.0.EDataCal.DataCalView

    constructor(config?: DataCalView.ConstructorProperties) 
    /**
     * Creates a new #EDataCalView and exports its D-Bus interface on
     * `connection` at `object_path`.  If an error occurs while exporting,
     * the function sets `error` and returns %NULL.
     * @constructor 
     * @param backend an #ECalBackend
     * @param sexp an #ECalBackendSExp
     * @param connection a #GDBusConnection
     * @param object_path an object path for the view
     * @returns a new #EDataCalView, or %NULL on error
     */
    constructor(backend: any | null, sexp: any | null, connection: Gio.DBusConnection, object_path: string | null) 
    /**
     * Creates a new #EDataCalView and exports its D-Bus interface on
     * `connection` at `object_path`.  If an error occurs while exporting,
     * the function sets `error` and returns %NULL.
     * @constructor 
     * @param backend an #ECalBackend
     * @param sexp an #ECalBackendSExp
     * @param connection a #GDBusConnection
     * @param object_path an object path for the view
     * @returns a new #EDataCalView, or %NULL on error
     */
    static new(backend: any | null, sexp: any | null, connection: Gio.DBusConnection, object_path: string | null): DataCalView
    _init(config?: DataCalView.ConstructorProperties): void
}

module IntervalTree {

    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

interface IntervalTree {

    // Owm methods of EDataCal-2.0.EDataCal.IntervalTree

    destroy(): void
    dump(): void
    insert(start: number, end: number, comp: ECal.Component): boolean
    remove(uid: string | null, rid: string | null): boolean
    search(start: number, end: number): ECal.Component[] | null

    // Class property signals of EDataCal-2.0.EDataCal.IntervalTree

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * Contains only private data that should be read and manipulated using the
 * functions below.
 * @class 
 */
class IntervalTree extends GObject.Object {

    // Own properties of EDataCal-2.0.EDataCal.IntervalTree

    static name: string
    static $gtype: GObject.GType<IntervalTree>

    // Constructors of EDataCal-2.0.EDataCal.IntervalTree

    constructor(config?: IntervalTree.ConstructorProperties) 
    /**
     * Creates a new #EIntervalTree.
     * @constructor 
     * @returns The newly-created #EIntervalTree.
     */
    constructor() 
    /**
     * Creates a new #EIntervalTree.
     * @constructor 
     * @returns The newly-created #EIntervalTree.
     */
    static new(): IntervalTree
    _init(config?: IntervalTree.ConstructorProperties): void
}

module SubprocessCalFactory {

    // Constructor properties interface

    interface ConstructorProperties extends Gio.Initable.ConstructorProperties, EBackend.SubprocessFactory.ConstructorProperties {
    }

}

interface SubprocessCalFactory extends Gio.Initable {

    // Own fields of EDataCal-2.0.EDataCal.SubprocessCalFactory

    parent: EBackend.SubprocessFactory
    priv: SubprocessCalFactoryPrivate

    // Class property signals of EDataCal-2.0.EDataCal.SubprocessCalFactory

    connect(sigName: "notify::registry", callback: (($obj: SubprocessCalFactory, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::registry", callback: (($obj: SubprocessCalFactory, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::registry", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class SubprocessCalFactory extends EBackend.SubprocessFactory {

    // Own properties of EDataCal-2.0.EDataCal.SubprocessCalFactory

    static name: string
    static $gtype: GObject.GType<SubprocessCalFactory>

    // Constructors of EDataCal-2.0.EDataCal.SubprocessCalFactory

    constructor(config?: SubprocessCalFactory.ConstructorProperties) 
    constructor(cancellable: Gio.Cancellable | null) 
    static new(cancellable: Gio.Cancellable | null): SubprocessCalFactory
    _init(config?: SubprocessCalFactory.ConstructorProperties): void
}

interface CalBackendClass {

    // Own fields of EDataCal-2.0.EDataCal.CalBackendClass

    /**
     * Whether a serial dispatch queue should
     *                             be used for this backend or not. The default is %TRUE.
     * @field 
     */
    use_serial_dispatch_queue: boolean
    impl_get_backend_property: (backend: CalBackend, prop_name: string | null) => string | null
    impl_open: (backend: CalBackend, cal: DataCal, opid: number, cancellable: Gio.Cancellable | null) => void
    impl_refresh: (backend: CalBackend, cal: DataCal, opid: number, cancellable: Gio.Cancellable | null) => void
    impl_get_object: (backend: CalBackend, cal: DataCal, opid: number, cancellable: Gio.Cancellable | null, uid: string | null, rid: string | null) => void
    impl_get_object_list: (backend: CalBackend, cal: DataCal, opid: number, cancellable: Gio.Cancellable | null, sexp: string | null) => void
    impl_receive_objects: (backend: CalBackend, cal: DataCal, opid: number, cancellable: Gio.Cancellable | null, calobj: string | null, opflags: ECal.OperationFlags) => void
    impl_send_objects: (backend: CalBackend, cal: DataCal, opid: number, cancellable: Gio.Cancellable | null, calobj: string | null, opflags: ECal.OperationFlags) => void
    impl_get_attachment_uris: (backend: CalBackend, cal: DataCal, opid: number, cancellable: Gio.Cancellable | null, uid: string | null, rid: string | null) => void
    impl_discard_alarm: (backend: CalBackend, cal: DataCal, opid: number, cancellable: Gio.Cancellable | null, uid: string | null, rid: string | null, auid: string | null, opflags: ECal.OperationFlags) => void
    impl_get_timezone: (backend: CalBackend, cal: DataCal, opid: number, cancellable: Gio.Cancellable | null, tzid: string | null) => void
    impl_add_timezone: (backend: CalBackend, cal: DataCal, opid: number, cancellable: Gio.Cancellable | null, tzobject: string | null) => void
    impl_start_view: (backend: CalBackend, view: DataCalView) => void
    impl_stop_view: (backend: CalBackend, view: DataCalView) => void
    closed: (backend: CalBackend, sender: string | null) => void
    shutdown: (backend: CalBackend) => void
    reserved_padding: any[]
}

/**
 * Class structure for the #ECalBackend class.
 * 
 * These virtual methods must be implemented when writing
 * a calendar backend.
 * @record 
 */
abstract class CalBackendClass {

    // Own properties of EDataCal-2.0.EDataCal.CalBackendClass

    static name: string
}

interface CalBackendFactoryClass {

    // Own fields of EDataCal-2.0.EDataCal.CalBackendFactoryClass

    /**
     * The string identifier for this book backend type
     * @field 
     */
    factory_name: string | null
    /**
     * The type if component this calendar backend should be created for
     * @field 
     */
    component_kind: ICalGLib.ComponentKind
    /**
     * The #GType to use to build #EBookBackends for this factory
     * @field 
     */
    backend_type: GObject.GType
}

/**
 * Class structure for the #ECalBackendFactory class.
 * 
 * Subclasses need to set the factory name and backend type
 * at initialization, the base class will take care of creating
 * backends of the specified type on demand.
 * @record 
 */
abstract class CalBackendFactoryClass {

    // Own properties of EDataCal-2.0.EDataCal.CalBackendFactoryClass

    static name: string
}

interface CalBackendFactoryPrivate {
}

class CalBackendFactoryPrivate {

    // Own properties of EDataCal-2.0.EDataCal.CalBackendFactoryPrivate

    static name: string
}

interface CalBackendPrivate {
}

class CalBackendPrivate {

    // Own properties of EDataCal-2.0.EDataCal.CalBackendPrivate

    static name: string
}

interface CalBackendSExpClass {
}

abstract class CalBackendSExpClass {

    // Own properties of EDataCal-2.0.EDataCal.CalBackendSExpClass

    static name: string
}

interface CalBackendSExpPrivate {
}

class CalBackendSExpPrivate {

    // Own properties of EDataCal-2.0.EDataCal.CalBackendSExpPrivate

    static name: string
}

interface CalBackendSyncClass {

    // Own fields of EDataCal-2.0.EDataCal.CalBackendSyncClass

    open_sync: (backend: CalBackendSync, cal: DataCal, cancellable: Gio.Cancellable | null) => void
    refresh_sync: (backend: CalBackendSync, cal: DataCal, cancellable: Gio.Cancellable | null) => void
    get_object_sync: (backend: CalBackendSync, cal: DataCal, cancellable: Gio.Cancellable | null, uid: string | null, rid: string | null, calobj: string | null) => void
    receive_objects_sync: (backend: CalBackendSync, cal: DataCal, cancellable: Gio.Cancellable | null, calobj: string | null, opflags: ECal.OperationFlags) => void
    discard_alarm_sync: (backend: CalBackendSync, cal: DataCal, cancellable: Gio.Cancellable | null, uid: string | null, rid: string | null, auid: string | null, opflags: ECal.OperationFlags) => void
    get_timezone_sync: (backend: CalBackendSync, cal: DataCal, cancellable: Gio.Cancellable | null, tzid: string | null, tzobject: string | null) => void
    add_timezone_sync: (backend: CalBackendSync, cal: DataCal, cancellable: Gio.Cancellable | null, tzobject: string | null) => void
    reserved_padding: any[]
}

/**
 * Base class structure for the #ECalBackendSync class
 * @record 
 */
abstract class CalBackendSyncClass {

    // Own properties of EDataCal-2.0.EDataCal.CalBackendSyncClass

    static name: string
}

interface CalBackendSyncPrivate {
}

class CalBackendSyncPrivate {

    // Own properties of EDataCal-2.0.EDataCal.CalBackendSyncPrivate

    static name: string
}

interface CalCacheClass {

    // Own fields of EDataCal-2.0.EDataCal.CalCacheClass

    dup_component_revision: (cal_cache: CalCache, icomp: ICalGLib.Component) => string | null
}

/**
 * Class structure for the #ECalCache class.
 * @record 
 */
abstract class CalCacheClass {

    // Own properties of EDataCal-2.0.EDataCal.CalCacheClass

    static name: string
}

interface CalCacheOfflineChange {

    // Own fields of EDataCal-2.0.EDataCal.CalCacheOfflineChange

    /**
     * UID of the component
     * @field 
     */
    uid: string | null
    /**
     * Recurrence-ID of the component
     * @field 
     */
    rid: string | null
    /**
     * stored revision of the component
     * @field 
     */
    revision: string | null
    /**
     * the component itself, as an iCalendar string
     * @field 
     */
    object: string | null
    /**
     * an #EOfflineState of the component
     * @field 
     */
    state: EBackend.OfflineState

    // Owm methods of EDataCal-2.0.EDataCal.CalCacheOfflineChange

    copy(): CalCacheOfflineChange | null
}

/**
 * Holds the information about offline change for one component.
 * @record 
 */
class CalCacheOfflineChange {

    // Own properties of EDataCal-2.0.EDataCal.CalCacheOfflineChange

    static name: string

    // Constructors of EDataCal-2.0.EDataCal.CalCacheOfflineChange

    /**
     * Creates a new #ECalCacheOfflineChange with the offline `state`
     * information for the given `uid`.
     * @constructor 
     * @param uid a unique component identifier
     * @param rid a Recurrence-ID of the component
     * @param revision a revision of the component
     * @param object component itself
     * @param state an #EOfflineState
     * @returns A new #ECalCacheOfflineChange. Free it with    e_cal_cache_offline_change_free() when no longer needed.
     */
    constructor(uid: string | null, rid: string | null, revision: string | null, object: string | null, state: EBackend.OfflineState) 
    /**
     * Creates a new #ECalCacheOfflineChange with the offline `state`
     * information for the given `uid`.
     * @constructor 
     * @param uid a unique component identifier
     * @param rid a Recurrence-ID of the component
     * @param revision a revision of the component
     * @param object component itself
     * @param state an #EOfflineState
     * @returns A new #ECalCacheOfflineChange. Free it with    e_cal_cache_offline_change_free() when no longer needed.
     */
    static new(uid: string | null, rid: string | null, revision: string | null, object: string | null, state: EBackend.OfflineState): CalCacheOfflineChange
    /**
     * Frees the `change` structure, previously allocated with e_cal_cache_offline_change_new()
     * or e_cal_cache_offline_change_copy().
     * @param change an #ECalCacheOfflineChange
     */
    static free(change: any | null): void
}

interface CalCachePrivate {
}

class CalCachePrivate {

    // Own properties of EDataCal-2.0.EDataCal.CalCachePrivate

    static name: string
}

interface CalCacheSearchData {

    // Own fields of EDataCal-2.0.EDataCal.CalCacheSearchData

    /**
     * the UID of this component
     * @field 
     */
    uid: string | null
    /**
     * the Recurrence-ID of this component
     * @field 
     */
    rid: string | null
    /**
     * the component string
     * @field 
     */
    object: string | null
    /**
     * any extra data associated with the component
     * @field 
     */
    extra: string | null

    // Owm methods of EDataCal-2.0.EDataCal.CalCacheSearchData

    copy(): CalCacheSearchData | null
}

/**
 * This structure is used to represent components returned
 * by the #ECalCache from various functions
 * such as e_cal_cache_search().
 * 
 * The `extra` parameter will contain any data which was
 * previously passed for this component in e_cal_cache_put_component()
 * or set with e_cal_cache_set_component_extra().
 * 
 * These should be freed with e_cal_cache_search_data_free().
 * @record 
 */
class CalCacheSearchData {

    // Own properties of EDataCal-2.0.EDataCal.CalCacheSearchData

    static name: string

    // Constructors of EDataCal-2.0.EDataCal.CalCacheSearchData

    /**
     * Creates a new #ECalCacheSearchData prefilled with the given values.
     * @constructor 
     * @param uid a component UID; cannot be %NULL
     * @param rid a component Recurrence-ID; can be %NULL
     * @param object the component as an iCal string; cannot be %NULL
     * @param extra any extra data stored with the component, or %NULL
     * @returns A new #ECalCacheSearchData. Free it with    e_cal_cache_search_data_free() when no longer needed.
     */
    constructor(uid: string | null, rid: string | null, object: string | null, extra: string | null) 
    /**
     * Creates a new #ECalCacheSearchData prefilled with the given values.
     * @constructor 
     * @param uid a component UID; cannot be %NULL
     * @param rid a component Recurrence-ID; can be %NULL
     * @param object the component as an iCal string; cannot be %NULL
     * @param extra any extra data stored with the component, or %NULL
     * @returns A new #ECalCacheSearchData. Free it with    e_cal_cache_search_data_free() when no longer needed.
     */
    static new(uid: string | null, rid: string | null, object: string | null, extra: string | null): CalCacheSearchData
    /**
     * Frees the `ptr` structure, previously allocated with e_cal_cache_search_data_new()
     * or e_cal_cache_search_data_copy().
     * @param ptr an #ECalCacheSearchData
     */
    static free(ptr: any | null): void
}

interface CalMetaBackendClass {

    // Own fields of EDataCal-2.0.EDataCal.CalMetaBackendClass

    connect_sync: (meta_backend: CalMetaBackend, credentials: EDataServer.NamedParameters | null, cancellable: Gio.Cancellable | null) => [ /* returnType */ boolean, /* out_auth_result */ EDataServer.SourceAuthenticationResult, /* out_certificate_pem */ string | null, /* out_certificate_errors */ Gio.TlsCertificateFlags ]
    disconnect_sync: (meta_backend: CalMetaBackend, cancellable: Gio.Cancellable | null) => boolean
    get_changes_sync: (meta_backend: CalMetaBackend, last_sync_tag: string | null, is_repeat: boolean, cancellable: Gio.Cancellable | null) => [ /* returnType */ boolean, /* out_new_sync_tag */ string | null, /* out_repeat */ boolean, /* out_created_objects */ CalMetaBackendInfo[], /* out_modified_objects */ CalMetaBackendInfo[], /* out_removed_objects */ CalMetaBackendInfo[] ]
    list_existing_sync: (meta_backend: CalMetaBackend, cancellable: Gio.Cancellable | null) => [ /* returnType */ boolean, /* out_new_sync_tag */ string | null, /* out_existing_objects */ CalMetaBackendInfo[] ]
    load_component_sync: (meta_backend: CalMetaBackend, uid: string | null, extra: string | null, cancellable: Gio.Cancellable | null) => [ /* returnType */ boolean, /* out_component */ ICalGLib.Component, /* out_extra */ string | null ]
    save_component_sync: (meta_backend: CalMetaBackend, overwrite_existing: boolean, conflict_resolution: EDataServer.ConflictResolution, instances: ECal.Component[], extra: string | null, opflags: ECal.OperationFlags, cancellable: Gio.Cancellable | null) => [ /* returnType */ boolean, /* out_new_uid */ string | null, /* out_new_extra */ string | null ]
    remove_component_sync: (meta_backend: CalMetaBackend, conflict_resolution: EDataServer.ConflictResolution, uid: string | null, extra: string | null, object: string | null, opflags: ECal.OperationFlags, cancellable: Gio.Cancellable | null) => boolean
    search_sync: (meta_backend: CalMetaBackend, expr: string | null, cancellable: Gio.Cancellable | null) => [ /* returnType */ boolean, /* out_icalstrings */ string[] ]
    search_components_sync: (meta_backend: CalMetaBackend, expr: string | null, cancellable: Gio.Cancellable | null) => [ /* returnType */ boolean, /* out_components */ ECal.Component[] ]
    requires_reconnect: (meta_backend: CalMetaBackend) => boolean
    source_changed: (meta_backend: CalMetaBackend) => void
    get_ssl_error_details: (meta_backend: CalMetaBackend) => [ /* returnType */ boolean, /* out_certificate_pem */ string | null, /* out_certificate_errors */ Gio.TlsCertificateFlags ]
}

/**
 * Class structure for the #ECalMetaBackend class.
 * @record 
 */
abstract class CalMetaBackendClass {

    // Own properties of EDataCal-2.0.EDataCal.CalMetaBackendClass

    static name: string
}

interface CalMetaBackendInfo {

    // Own fields of EDataCal-2.0.EDataCal.CalMetaBackendInfo

    uid: string | null
    revision: string | null
    object: string | null
    extra: string | null

    // Owm methods of EDataCal-2.0.EDataCal.CalMetaBackendInfo

    copy(): CalMetaBackendInfo
}

class CalMetaBackendInfo {

    // Own properties of EDataCal-2.0.EDataCal.CalMetaBackendInfo

    static name: string

    // Constructors of EDataCal-2.0.EDataCal.CalMetaBackendInfo

    /**
     * Creates a new #ECalMetaBackendInfo prefilled with the given values.
     * @constructor 
     * @param uid a component UID; cannot be %NULL
     * @param revision the component revision; can be %NULL
     * @param object the component object as an iCalendar string; can be %NULL
     * @param extra extra backend-specific data; can be %NULL
     * @returns A new #ECalMetaBackendInfo. Free it with    e_cal_meta_backend_info_free(), when no longer needed.
     */
    constructor(uid: string | null, revision: string | null, object: string | null, extra: string | null) 
    /**
     * Creates a new #ECalMetaBackendInfo prefilled with the given values.
     * @constructor 
     * @param uid a component UID; cannot be %NULL
     * @param revision the component revision; can be %NULL
     * @param object the component object as an iCalendar string; can be %NULL
     * @param extra extra backend-specific data; can be %NULL
     * @returns A new #ECalMetaBackendInfo. Free it with    e_cal_meta_backend_info_free(), when no longer needed.
     */
    static new(uid: string | null, revision: string | null, object: string | null, extra: string | null): CalMetaBackendInfo
    /**
     * Frees the `ptr` structure, previously allocated with e_cal_meta_backend_info_new()
     * or e_cal_meta_backend_info_copy().
     * @param ptr an #ECalMetaBackendInfo
     */
    static free(ptr: any | null): void
}

interface CalMetaBackendPrivate {
}

class CalMetaBackendPrivate {

    // Own properties of EDataCal-2.0.EDataCal.CalMetaBackendPrivate

    static name: string
}

interface DataCalClass {

    // Own fields of EDataCal-2.0.EDataCal.DataCalClass

    parent_class: GObject.ObjectClass
}

abstract class DataCalClass {

    // Own properties of EDataCal-2.0.EDataCal.DataCalClass

    static name: string
}

interface DataCalFactoryClass {

    // Own fields of EDataCal-2.0.EDataCal.DataCalFactoryClass

    parent_class: EBackend.DataFactoryClass
}

abstract class DataCalFactoryClass {

    // Own properties of EDataCal-2.0.EDataCal.DataCalFactoryClass

    static name: string
}

interface DataCalFactoryPrivate {
}

class DataCalFactoryPrivate {

    // Own properties of EDataCal-2.0.EDataCal.DataCalFactoryPrivate

    static name: string
}

interface DataCalPrivate {
}

class DataCalPrivate {

    // Own properties of EDataCal-2.0.EDataCal.DataCalPrivate

    static name: string
}

interface DataCalViewClass {

    // Own fields of EDataCal-2.0.EDataCal.DataCalViewClass

    parent_class: GObject.ObjectClass
}

abstract class DataCalViewClass {

    // Own properties of EDataCal-2.0.EDataCal.DataCalViewClass

    static name: string
}

interface DataCalViewPrivate {
}

class DataCalViewPrivate {

    // Own properties of EDataCal-2.0.EDataCal.DataCalViewPrivate

    static name: string
}

interface IntervalTreeClass {
}

/**
 * Class structure for the #EIntervalTree class.
 * @record 
 */
abstract class IntervalTreeClass {

    // Own properties of EDataCal-2.0.EDataCal.IntervalTreeClass

    static name: string
}

interface IntervalTreePrivate {
}

class IntervalTreePrivate {

    // Own properties of EDataCal-2.0.EDataCal.IntervalTreePrivate

    static name: string
}

interface SubprocessCalFactoryClass {

    // Own fields of EDataCal-2.0.EDataCal.SubprocessCalFactoryClass

    parent_class: EBackend.SubprocessFactoryClass
}

abstract class SubprocessCalFactoryClass {

    // Own properties of EDataCal-2.0.EDataCal.SubprocessCalFactoryClass

    static name: string
}

interface SubprocessCalFactoryPrivate {
}

class SubprocessCalFactoryPrivate {

    // Own properties of EDataCal-2.0.EDataCal.SubprocessCalFactoryPrivate

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

export default EDataCal;
// END