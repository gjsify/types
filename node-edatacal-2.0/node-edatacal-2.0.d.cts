
/*
 * Type Definitions for node-gtk (https://github.com/romgrk/node-gtk)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/gjsify/ts-for-gir
 */

import './node-edatacal-2.0-import.d.ts';
    
/**
 * EDataCal-2.0
 */

import type libxml2 from '@girs/node-libxml2-2.0';
import type Soup from '@girs/node-soup-3.0';
import type Gio from '@girs/node-gio-2.0';
import type GObject from '@girs/node-gobject-2.0';
import type GLib from '@girs/node-glib-2.0';
import type ICalGLib from '@girs/node-icalglib-3.0';
import type EDataServer from '@girs/node-edataserver-1.2';
import type Json from '@girs/node-json-1.0';
import type Camel from '@girs/node-camel-1.2';
import type ECal from '@girs/node-ecal-2.0';
import type EBackend from '@girs/node-ebackend-1.2';

/**
 * This environment variable configures where the calendar
 * factory loads its backend modules from.
 */
export const EDS_CALENDAR_MODULES: string | null
/**
 * This environment variable configures where the calendar
 * factory subprocess is located in.
 */
export const EDS_SUBPROCESS_CAL_PATH: string | null
export const INTERVALTREE_DEBUG: number
export const LIBICAL_GLIB_UNSTABLE_API: number
/**
 * Frees the `change` structure, previously allocated with e_cal_cache_offline_change_new()
 * or e_cal_cache_offline_change_copy().
 * @param change an #ECalCacheOfflineChange
 */
export function calCacheOfflineChangeFree(change: any | null): void
/**
 * Frees the `ptr` structure, previously allocated with e_cal_cache_search_data_new()
 * or e_cal_cache_search_data_copy().
 * @param ptr an #ECalCacheSearchData
 */
export function calCacheSearchDataFree(ptr: any | null): void
/**
 * Frees the `ptr` structure, previously allocated with e_cal_meta_backend_info_new()
 * or e_cal_meta_backend_info_copy().
 * @param ptr an #ECalMetaBackendInfo
 */
export function calMetaBackendInfoFree(ptr: any | null): void
/**
 * A callback prototype being called in a dedicated thread, scheduled
 * by e_cal_backend_schedule_custom_operation().
 * @callback 
 * @param calBackend an #ECalBackend
 * @param cancellable an optional #GCancellable, as provided to e_cal_backend_schedule_custom_operation()
 */
export interface CalBackendCustomOpFunc {
    (calBackend: CalBackend, cancellable: Gio.Cancellable | null): void
}
/**
 * Callback function used by e_cal_backend_foreach_view().
 * @callback 
 * @param backend an #ECalBackend
 * @param view an #EDataCalView
 * @returns %TRUE, to continue, %FALSE to stop further processing.
 */
export interface CalBackendForeachViewFunc {
    (backend: CalBackend, view: DataCalView): boolean
}
/**
 * A callback called for each object row when using
 * e_cal_cache_search_with_callback() function.
 * @callback 
 * @param calCache an #ECalCache
 * @param uid a unique object identifier
 * @param rid an optional Recurrence-ID of the object
 * @param revision the object revision
 * @param object the object itself
 * @param extra extra data stored with the object
 * @param customFlags object's custom flags
 * @param offlineState object's offline state, one of #EOfflineState
 * @returns %TRUE to continue, %FALSE to stop walk through.
 */
export interface CalCacheSearchFunc {
    (calCache: CalCache, uid: string | null, rid: string | null, revision: string | null, object: string | null, extra: string | null, customFlags: number, offlineState: EBackend.OfflineState): boolean
}
export module CalBackend {

    // Signal callback interfaces

    /**
     * Signal callback interface for `closed`
     */
    export interface ClosedSignalCallback {
        (sender: string | null): void
    }

    /**
     * Signal callback interface for `shutdown`
     */
    export interface ShutdownSignalCallback {
        (): void
    }


    // Constructor properties interface

    export interface ConstructorProperties extends ECal.TimezoneCache.ConstructorProperties, EBackend.Backend.ConstructorProperties {

        // Own constructor properties of EDataCal-2.0.EDataCal.CalBackend

        cacheDir?: string | null
        kind?: number | null
        registry?: EDataServer.SourceRegistry | null
        writable?: boolean | null
    }

}

export interface CalBackend extends ECal.TimezoneCache {

    // Own properties of EDataCal-2.0.EDataCal.CalBackend

    cacheDir: string | null
    readonly kind: number
    readonly proxyResolver: Gio.ProxyResolver
    readonly registry: EDataServer.SourceRegistry
    writable: boolean
    __gtype__: number

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
    addTimezone(tzobject: string | null, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void

    // Overloads of addTimezone

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
    addTimezone(zone: ICalGLib.Timezone): void
    /**
     * Finishes the operation started with e_cal_backend_add_timezone().
     * 
     * If an error occurred, the function will set `error` and return %FALSE.
     * @param result a #GAsyncResult
     * @returns %TRUE on success, %FALSE on failure
     */
    addTimezoneFinish(result: Gio.AsyncResult): boolean
    /**
     * Adds the timezone described by `tzobject` to `backend`.
     * 
     * If an error occurs, the function will set `error` and return %FALSE.
     * @param tzobject an iCalendar VTIMEZONE string
     * @param cancellable optional #GCancellable object, or %NULL
     * @returns %TRUE on success, %FALSE on failure
     */
    addTimezoneSync(tzobject: string | null, cancellable: Gio.Cancellable | null): boolean
    /**
     * Adds a view to the list of live views being run by the given backend.
     * Doing so means that any listener on the view will get notified of any
     * change that affect the live view.
     * @param view An #EDataCalView object.
     */
    addView(view: DataCalView): void
    createCacheFilename(uid: string | null, filename: string | null, fileindex: number): string | null
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
    createObjects(calobjs: string | null, opflags: ECal.OperationFlags, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes the operation started with e_cal_backend_create_objects().
     * 
     * A unique ID string for each newly-created object is deposited in `out_uids`.
     * Free the returned ID strings with g_free() when finished with them.
     * 
     * If an error occurred, the function will set `error` and return %FALSE.
     * @param result a #GAsyncResult
     * @param outUids a #GQueue in which to deposit results
     * @returns %TRUE on success, %FALSE on failure
     */
    createObjectsFinish(result: Gio.AsyncResult, outUids: GLib.Queue): boolean
    /**
     * Creates one or more new iCalendar objects from `calobjs,` and deposits
     * the unique ID string for each newly-created object in `out_uids`.
     * 
     * Free the returned ID strings with g_free() when finished with them.
     * 
     * If an error occurs, the function will set `error` and return %FALSE.
     * @param calobjs a %NULL-terminated array of iCalendar strings
     * @param opflags bit-or of #ECalOperationFlags
     * @param outUids a #GQueue in which to deposit results
     * @param cancellable optional #GCancellable object, or %NULL
     * @returns %TRUE on success, %FALSE on failure
     */
    createObjectsSync(calobjs: string | null, opflags: ECal.OperationFlags, outUids: GLib.Queue, cancellable: Gio.Cancellable | null): boolean
    /**
     * Asynchronously discards the VALARM object with a unique ID of `alarm_uid`
     * from the iCalendar object identified by `uid` and, optionally, `rid`.
     * 
     * When the operation is finished, `callback` will be called.  You can
     * then call e_cal_backend_discard_alarm_finish() to get the result of
     * the operation.
     * @param uid a unique ID for an iCalendar object
     * @param rid a recurrence ID, or %NULL
     * @param alarmUid a unique ID for an iCalendar VALARM object
     * @param opflags bit-or of #ECalOperationFlags
     * @param cancellable optional #GCancellable object, or %NULL
     * @param callback a #GAsyncReadyCallback to call when the request is satisfied
     */
    discardAlarm(uid: string | null, rid: string | null, alarmUid: string | null, opflags: ECal.OperationFlags, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes the operation started with e_cal_backend_discard_alarm().
     * 
     * If an error occurred, the function will set `error` and return %FALSE.
     * @param result a #GAsyncResult
     * @returns %TRUE on success, %FALSE on failure
     */
    discardAlarmFinish(result: Gio.AsyncResult): boolean
    /**
     * Discards the VALARM object with a unique ID of `alarm_uid` from the
     * iCalendar object identified by `uid` and, optionally, `rid`.
     * 
     * If an error occurs, the function will set `error` and return %FALSE.
     * @param uid a unique ID for an iCalendar object
     * @param rid a recurrence ID, or %NULL
     * @param alarmUid a unique ID for an iCalendar VALARM object
     * @param opflags bit-or of #ECalOperationFlags
     * @param cancellable optional #GCancellable object, or %NULL
     * @returns %TRUE on success, %FALSE on failure
     */
    discardAlarmSync(uid: string | null, rid: string | null, alarmUid: string | null, opflags: ECal.OperationFlags, cancellable: Gio.Cancellable | null): boolean
    /**
     * Thread-safe variation of e_cal_backend_get_cache_dir().
     * Use this function when accessing `backend` from multiple threads.
     * 
     * The returned string should be freed with g_free() when no longer needed.
     * @returns a newly-allocated copy of #ECalBackend:cache-dir
     */
    dupCacheDir(): string | null
    /**
     * Calls `func` for each existing view (as returned by e_cal_backend_list_views()).
     * The `func` can return %FALSE to stop early.
     * @returns whether the call had been stopped by @func
     */
    foreachView(): boolean
    /**
     * Notifies each view of the `backend` about progress. When `only_completed_views`
     * is %TRUE, notifies only completed views.
     * @param onlyCompletedViews whether notify in completed views only
     * @param percent percent complete
     * @param message message describing the operation in progress, or %NULL
     */
    foreachViewNotifyProgress(onlyCompletedViews: boolean, percent: number, message: string | null): void
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
    getAttachmentUris(uid: string | null, rid: string | null, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes the operation started with e_cal_backend_get_attachment_uris().
     * 
     * The requested attachment URI strings are deposited in `out_attachment_uris`.
     * Free the returned strings with g_free() when finished with them.
     * 
     * If an error occurred, the function will set `error` and return %FALSE.
     * Note that an empty result set does not necessarily imply an error.
     * @param result a #GAsyncResult
     * @param outAttachmentUris a #GQueue in which to deposit results
     * @returns %TRUE on success, %FALSE on failure
     */
    getAttachmentUrisFinish(result: Gio.AsyncResult, outAttachmentUris: GLib.Queue): boolean
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
     * @param outAttachmentUris a #GQueue in which to deposit results
     * @param cancellable optional #GCancellable object, or %NULL
     * @returns %TRUE on success, %FALSE on failure
     */
    getAttachmentUrisSync(uid: string | null, rid: string | null, outAttachmentUris: GLib.Queue, cancellable: Gio.Cancellable | null): boolean
    /**
     * Obtains the value of the backend property named `prop_name`.
     * Freed the returned string with g_free() when finished with it.
     * @param propName a backend property name
     * @returns the value for @prop_name
     */
    getBackendProperty(propName: string | null): string | null
    /**
     * Returns the cache directory path used by `backend`.
     * @returns the cache directory path
     */
    getCacheDir(): string | null
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
    getFreeBusy(start: number, end: number, users: string[], cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
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
     * @param outFreebusy iCalendar strings with overall returned Free/Busy data
     * @returns %TRUE on success, %FALSE on failure
     */
    getFreeBusyFinish(result: Gio.AsyncResult, outFreebusy: string[]): boolean
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
     * @param outFreebusy iCalendar strings with overall returned Free/Busy data
     * @param cancellable optional #GCancellable object, or %NULL
     * @returns %TRUE on success, %FALSE on failure.
     */
    getFreeBusySync(start: number, end: number, users: string[], outFreebusy: string[], cancellable: Gio.Cancellable | null): boolean
    /**
     * Gets the kind of components the given backend stores.
     * @returns The kind of components for this backend.
     */
    getKind(): ICalGLib.ComponentKind
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
    getObject(uid: string | null, rid: string | null, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
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
    getObjectFinish(result: Gio.AsyncResult): string | null
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
    getObjectList(query: string | null, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes the operation started with e_cal_backend_get_object_list().
     * 
     * The matching iCalendar instances are deposited in `out_objects`.
     * The returned instances should be freed with g_free() when finished with them.
     * 
     * If an error occurred, the function will set `error` and return %FALSE.
     * Note that an empty result set does not necessarily imply an error.
     * @param result a #GAsyncResult
     * @param outObjects a #GQueue in which to deposit results
     * @returns %TRUE on success, %FALSE on failure
     */
    getObjectListFinish(result: Gio.AsyncResult, outObjects: GLib.Queue): boolean
    /**
     * Obtains a set of iCalendar string instances which satisfy the criteria
     * specified in `query,` and deposits them in `out_objects`.
     * 
     * The returned instances should be freed with g_free() when finished with them.
     * 
     * If an error occurs, the function will set `error` and return %FALSE.
     * Note that an empty result set does not necessarily imply an error.
     * @param query a search query in S-expression format
     * @param outObjects a #GQueue in which to deposit results
     * @param cancellable optional #GCancellable object, or %NULL
     * @returns %TRUE on success, %FALSE on failure
     */
    getObjectListSync(query: string | null, outObjects: GLib.Queue, cancellable: Gio.Cancellable | null): boolean
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
    getObjectSync(uid: string | null, rid: string | null, cancellable: Gio.Cancellable | null): string | null
    /**
     * Returns the data source registry to which #EBackend:source belongs.
     * @returns an #ESourceRegistry
     */
    getRegistry(): EDataServer.SourceRegistry
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
    getTimezone(tzid: string | null, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void

    // Overloads of getTimezone

    /**
     * Obtains an #ICalTimezone by its TZID string.  If no match is found,
     * the function returns %NULL.  The returned #ICalTimezone is owned by
     * the `cache` and should not be modified or freed.
     * @param tzid the TZID of a timezone
     * @returns an #ICalTimezone, or %NULL
     */
    getTimezone(tzid: string | null): ICalGLib.Timezone | null
    /**
     * Finishes the operation started with e_cal_backend_get_timezone().
     * 
     * Free the returned string with g_free() when finished with it.
     * 
     * If an error occurred, the function will set `error` and return %NULL.
     * @param result a #GAsyncResult
     * @returns an iCalendar string, or %NULL on error
     */
    getTimezoneFinish(result: Gio.AsyncResult): string | null
    /**
     * Obtains the VTIMEZONE object identified by `tzid`.  Free the returned
     * string with g_free() when finished with it.
     * 
     * If an error occurs, the function will set `error` and return %NULL.
     * @param tzid a unique ID for an iCalendar VTIMEZONE object
     * @param cancellable optional #GCancellable object, or %NULL
     * @returns an iCalendar string, or %NULL on error
     */
    getTimezoneSync(tzid: string | null, cancellable: Gio.Cancellable | null): string | null
    /**
     * Returns whether `backend` will accept changes to its data content.
     * @returns whether @backend is writable
     */
    getWritable(): boolean
    /**
     * Checks if `backend'`s storage has been opened (and
     * authenticated, if necessary) and the backend itself
     * is ready for accessing. This property is changed automatically
     * after the `backend` is successfully opened.
     * @returns %TRUE if fully opened, %FALSE otherwise.
     */
    isOpened(): boolean
    isReadonly(): boolean
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
    listViews(): DataCalView[]
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
    modifyObjects(calobjs: string | null, mod: ECal.ObjModType, opflags: ECal.OperationFlags, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes the operation started with e_cal_backend_modify_objects().
     * 
     * If an error occurred, the function will set `error` and return %FALSE.
     * @param result a #GAsyncResult
     * @returns %TRUE on success, %FALSE on failure
     */
    modifyObjectsFinish(result: Gio.AsyncResult): boolean
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
    modifyObjectsSync(calobjs: string | null, mod: ECal.ObjModType, opflags: ECal.OperationFlags, cancellable: Gio.Cancellable | null): boolean
    /**
     * Notifies each of the backend's listeners about a new object.
     * 
     * Uses the #EDataCalView's fields-of-interest to filter out unwanted
     * information from ical strings sent over the bus.
     * @param component the newly created #ECalComponent
     */
    notifyComponentCreated(component: ECal.Component): void
    /**
     * Notifies each of the backend's listeners about a modified object.
     * 
     * Uses the #EDataCalView's fields-of-interest to filter out unwanted
     * information from ical strings sent over the bus.
     * @param oldComponent the #ECalComponent before the modification
     * @param newComponent the #ECalComponent after the modification
     */
    notifyComponentModified(oldComponent: ECal.Component, newComponent: ECal.Component): void
    /**
     * Notifies each of the backend's listeners about a removed object.
     * 
     * Uses the #EDataCalView's fields-of-interest to filter out unwanted
     * information from ical strings sent over the bus.
     * @param id the Id of the removed object
     * @param oldComponent the removed component
     * @param newComponent the component after the removal. This only applies to recurrent appointments that had an instance removed. In that case, this function notifies a modification instead of a removal.
     */
    notifyComponentRemoved(id: ECal.ComponentId, oldComponent: ECal.Component, newComponent: ECal.Component): void
    /**
     * Notifies each of the backend's listeners about an error
     * @param message Error message
     */
    notifyError(message: string | null): void
    /**
     * Notifies client about property value change.
     * @param propName property name, which changed
     * @param propValue new property value
     */
    notifyPropertyChanged(propName: string | null, propValue: string | null): void
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
    open(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes the operation started with e_cal_backend_open().
     * 
     * If an error occurred, the function will set `error` and return %FALSE.
     * @param result a #GAsyncResult
     * @returns %TRUE on success, %FALSE on failure
     */
    openFinish(result: Gio.AsyncResult): boolean
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
    openSync(cancellable: Gio.Cancellable | null): boolean
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
     * @param resultQueue return location for a #GQueue, or %NULL
     * @returns a #GSimpleAsyncResult
     */
    prepareForCompletion(opid: number, resultQueue: GLib.Queue): Gio.SimpleAsyncResult
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
    receiveObjects(calobj: string | null, opflags: ECal.OperationFlags, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes the operation started with e_cal_backend_receive_objects().
     * 
     * If an error occurred, the function will set `error` and erturn %FALSE.
     * @param result a #GAsyncResult
     * @returns %TRUE on success, %FALSE on failure
     */
    receiveObjectsFinish(result: Gio.AsyncResult): boolean
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
    receiveObjectsSync(calobj: string | null, opflags: ECal.OperationFlags, cancellable: Gio.Cancellable | null): boolean
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
    refDataCal(): DataCal | null
    /**
     * Returns the #GProxyResolver for `backend` (if applicable), as indicated
     * by the #ESourceAuthentication:proxy-uid of `backend'`s #EBackend:source
     * or one of its ancestors.
     * 
     * The returned #GProxyResolver is referenced for thread-safety and must
     * be unreferenced with g_object_unref() when finished with it.
     * @returns a #GProxyResolver, or %NULL
     */
    refProxyResolver(): Gio.ProxyResolver | null
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
    refresh(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
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
    refreshFinish(result: Gio.AsyncResult): boolean
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
    refreshSync(cancellable: Gio.Cancellable | null): boolean
    /**
     * Asynchronously removes one or more iCalendar objects according to
     * `component_ids` and `mod`.
     * 
     * When the operation is finished, `callback` will be called.  You can then
     * call e_cal_backend_remove_objects_finish() to get the result of the
     * operation.
     * @param componentIds a #GList of #ECalComponentId structs
     * @param mod modification type for recurrences
     * @param opflags bit-or of #ECalOperationFlags
     * @param cancellable optional #GCancellable object, or %NULL
     * @param callback a #GAsyncReadyCallback to call when the request is satisfied
     */
    removeObjects(componentIds: ECal.ComponentId[], mod: ECal.ObjModType, opflags: ECal.OperationFlags, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes the operation started with e_cal_backend_remove_objects().
     * 
     * If an error occurred, the function will set `error` and return %FALSE.
     * @param result a #GAsyncResult
     * @returns %TRUE on success, %FALSE on failure
     */
    removeObjectsFinish(result: Gio.AsyncResult): boolean
    /**
     * Removes one or more iCalendar objects according to `component_ids` and `mod`.
     * 
     * If an error occurs, the function will set `error` and return %FALSE.
     * @param componentIds a #GList of #ECalComponentId structs
     * @param mod modification type for recurrences
     * @param opflags bit-or of #ECalOperationFlags
     * @param cancellable optional #GCancellable object, or %NULL
     * @returns %TRUE on success, %FALSE on failure
     */
    removeObjectsSync(componentIds: ECal.ComponentId[], mod: ECal.ObjModType, opflags: ECal.OperationFlags, cancellable: Gio.Cancellable | null): boolean
    /**
     * Removes view from the list of live views for the backend.
     * @param view An #EDataCalView object, previously added with `ref` e_cal_backend_add_view.
     */
    removeView(view: DataCalView): void
    /**
     * Schedules user function `func` to be run in a dedicated thread as
     * a blocking operation.
     * 
     * The function adds its own reference to `use_cancellable,` if not %NULL.
     * 
     * The error returned from `func` is propagated to client using
     * e_cal_backend_notify_error() function. If it's not desired,
     * then left the error unchanged and notify about errors manually.
     * @param useCancellable an optional #GCancellable to use for `func`
     * @param func a function to call in a dedicated thread
     */
    scheduleCustomOperation(useCancellable: Gio.Cancellable | null, func: CalBackendCustomOpFunc): void
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
    sendObjects(calobj: string | null, opflags: ECal.OperationFlags, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
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
     * @param outUsers a #GQueue in which to deposit results
     * @returns a newly allocated vCalendar string, or %NULL on error
     */
    sendObjectsFinish(result: Gio.AsyncResult, outUsers: GLib.Queue): string | null
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
     * @param outUsers a #GQueue in which to deposit results
     * @param cancellable optional #GCancellable object, or %NULL
     * @returns a vCalendar string, or %NULL on error
     */
    sendObjectsSync(calobj: string | null, opflags: ECal.OperationFlags, outUsers: GLib.Queue, cancellable: Gio.Cancellable | null): string | null
    /**
     * Sets the cache directory path for use by `backend`.
     * 
     * Note that #ECalBackend is initialized with a default cache directory
     * path which should suffice for most cases.  Backends should not override
     * the default path without good reason.
     * @param cacheDir a local cache directory path
     */
    setCacheDir(cacheDir: string | null): void
    /**
     * Sets the #EDataCal for `backend`.  The #EDataCal is essentially the
     * glue between incoming D-Bus requests and `backend'`s native API.
     * 
     * An #EDataCal should be set only once after `backend` is first created.
     * 
     * The `backend` adds its own reference on the `data_cal`.
     * @param dataCal an #EDataCal
     */
    setDataCal(dataCal: DataCal): void
    /**
     * Sets whether `backend` will accept changes to its data content.
     * @param writable whether `backend` is writable
     */
    setWritable(writable: boolean): void
    /**
     * Starts a new live view on the given backend.
     * @param view The view to be started.
     */
    startView(view: DataCalView): void
    /**
     * Stops a previously started live view on the given backend.
     * @param view The view to be stopped.
     */
    stopView(view: DataCalView): void

    // Own virtual methods of EDataCal-2.0.EDataCal.CalBackend

    closed(sender: string | null): void
    implAddTimezone(cal: DataCal, opid: number, cancellable: Gio.Cancellable | null, tzobject: string | null): void
    implDiscardAlarm(cal: DataCal, opid: number, cancellable: Gio.Cancellable | null, uid: string | null, rid: string | null, auid: string | null, opflags: ECal.OperationFlags): void
    implGetAttachmentUris(cal: DataCal, opid: number, cancellable: Gio.Cancellable | null, uid: string | null, rid: string | null): void
    implGetBackendProperty(propName: string | null): string | null
    implGetObject(cal: DataCal, opid: number, cancellable: Gio.Cancellable | null, uid: string | null, rid: string | null): void
    implGetObjectList(cal: DataCal, opid: number, cancellable: Gio.Cancellable | null, sexp: string | null): void
    implGetTimezone(cal: DataCal, opid: number, cancellable: Gio.Cancellable | null, tzid: string | null): void
    implOpen(cal: DataCal, opid: number, cancellable: Gio.Cancellable | null): void
    implReceiveObjects(cal: DataCal, opid: number, cancellable: Gio.Cancellable | null, calobj: string | null, opflags: ECal.OperationFlags): void
    implRefresh(cal: DataCal, opid: number, cancellable: Gio.Cancellable | null): void
    implSendObjects(cal: DataCal, opid: number, cancellable: Gio.Cancellable | null, calobj: string | null, opflags: ECal.OperationFlags): void
    implStartView(view: DataCalView): void
    implStopView(view: DataCalView): void
    shutdown(): void

    // Own signals of EDataCal-2.0.EDataCal.CalBackend

    connect(sigName: "closed", callback: CalBackend.ClosedSignalCallback): number
    on(sigName: "closed", callback: CalBackend.ClosedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "closed", callback: CalBackend.ClosedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "closed", callback: CalBackend.ClosedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "closed", ...args: any[]): void
    connect(sigName: "shutdown", callback: CalBackend.ShutdownSignalCallback): number
    on(sigName: "shutdown", callback: CalBackend.ShutdownSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "shutdown", callback: CalBackend.ShutdownSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "shutdown", callback: CalBackend.ShutdownSignalCallback): NodeJS.EventEmitter
    emit(sigName: "shutdown", ...args: any[]): void

    // Class property signals of EDataCal-2.0.EDataCal.CalBackend

    connect(sigName: "notify::cache-dir", callback: (...args: any[]) => void): number
    on(sigName: "notify::cache-dir", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::cache-dir", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::cache-dir", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::cache-dir", ...args: any[]): void
    connect(sigName: "notify::kind", callback: (...args: any[]) => void): number
    on(sigName: "notify::kind", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::kind", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::kind", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::kind", ...args: any[]): void
    connect(sigName: "notify::proxy-resolver", callback: (...args: any[]) => void): number
    on(sigName: "notify::proxy-resolver", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::proxy-resolver", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::proxy-resolver", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::proxy-resolver", ...args: any[]): void
    connect(sigName: "notify::registry", callback: (...args: any[]) => void): number
    on(sigName: "notify::registry", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::registry", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::registry", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::registry", ...args: any[]): void
    connect(sigName: "notify::writable", callback: (...args: any[]) => void): number
    on(sigName: "notify::writable", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::writable", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::writable", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::writable", ...args: any[]): void
    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: "notify::connectable", callback: (...args: any[]) => void): number
    on(sigName: "notify::connectable", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::connectable", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::connectable", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::connectable", ...args: any[]): void
    connect(sigName: "notify::main-context", callback: (...args: any[]) => void): number
    on(sigName: "notify::main-context", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::main-context", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::main-context", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::main-context", ...args: any[]): void
    connect(sigName: "notify::online", callback: (...args: any[]) => void): number
    on(sigName: "notify::online", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::online", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::online", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::online", ...args: any[]): void
    connect(sigName: "notify::source", callback: (...args: any[]) => void): number
    on(sigName: "notify::source", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::source", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::source", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::source", ...args: any[]): void
    connect(sigName: "notify::user-prompter", callback: (...args: any[]) => void): number
    on(sigName: "notify::user-prompter", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::user-prompter", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::user-prompter", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::user-prompter", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * Contains only private data that should be read and manipulated using the
 * functions below.
 * @class 
 */
export class CalBackend extends EBackend.Backend {

    // Own properties of EDataCal-2.0.EDataCal.CalBackend

    static name: string

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
    static mailAccountGetDefault(registry: EDataServer.SourceRegistry, address: string | null, name: string | null): boolean
    /**
     * Checks that a mail account is valid, and returns its name.
     * @param registry an #ESourceRegistry
     * @param user user name for the account to check
     * @param name placeholder for the account name
     * @returns TRUE if the account is valid, FALSE if not.
     */
    static mailAccountIsValid(registry: EDataServer.SourceRegistry, user: string | null, name: string | null): boolean
    static userDeclined(registry: EDataServer.SourceRegistry, icalcomp: ICalGLib.Component): boolean
}

export module CalBackendFactory {

    // Constructor properties interface

    export interface ConstructorProperties extends EBackend.BackendFactory.ConstructorProperties {
    }

}

export interface CalBackendFactory {

    // Own properties of EDataCal-2.0.EDataCal.CalBackendFactory

    __gtype__: number

    // Class property signals of EDataCal-2.0.EDataCal.CalBackendFactory

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: "notify::extensible", callback: (...args: any[]) => void): number
    on(sigName: "notify::extensible", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::extensible", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::extensible", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::extensible", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * Contains only private data that should be read and manipulated using the
 * functions below.
 * @class 
 */
export class CalBackendFactory extends EBackend.BackendFactory {

    // Own properties of EDataCal-2.0.EDataCal.CalBackendFactory

    static name: string

    // Constructors of EDataCal-2.0.EDataCal.CalBackendFactory

    constructor(config?: CalBackendFactory.ConstructorProperties) 
    _init(config?: CalBackendFactory.ConstructorProperties): void
}

export module CalBackendSExp {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

export interface CalBackendSExp {

    // Own properties of EDataCal-2.0.EDataCal.CalBackendSExp

    __gtype__: number

    // Owm methods of EDataCal-2.0.EDataCal.CalBackendSExp

    /**
     * Determines biggest time window given by expressions "occur-in-range" in sexp.
     * @param start Start of the time window will be stored here.
     * @param end End of the time window will be stored here.
     * @returns %TRUE on success, %FALSE otherwise
     */
    evaluateOccurTimes(start: number, end: number): boolean
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
    matchComp(comp: ECal.Component, cache: ECal.TimezoneCache): boolean
    /**
     * Checks if `object` matches `sexp`.
     * @param object An iCalendar string.
     * @param cache an #ETimezoneCache
     * @returns %TRUE if the object matches, %FALSE otherwise
     */
    matchObject(object: string | null, cache: ECal.TimezoneCache): boolean
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

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class CalBackendSExp extends GObject.Object {

    // Own properties of EDataCal-2.0.EDataCal.CalBackendSExp

    static name: string

    // Constructors of EDataCal-2.0.EDataCal.CalBackendSExp

    constructor(config?: CalBackendSExp.ConstructorProperties) 
    constructor(text: string | null) 
    static new(text: string | null): CalBackendSExp
    _init(config?: CalBackendSExp.ConstructorProperties): void
}

export module CalBackendSync {

    // Constructor properties interface

    export interface ConstructorProperties extends ECal.TimezoneCache.ConstructorProperties, CalBackend.ConstructorProperties {
    }

}

export interface CalBackendSync extends ECal.TimezoneCache {

    // Own properties of EDataCal-2.0.EDataCal.CalBackendSync

    __gtype__: number

    // Owm methods of EDataCal-2.0.EDataCal.CalBackendSync

    /**
     * Calls the add_timezone_sync method on the given backend.
     * @param cal An EDataCal object.
     * @param cancellable a #GCancellable for the operation
     * @param tzobject VTIMEZONE object to be added.
     */
    addTimezone(cal: DataCal, cancellable: Gio.Cancellable | null, tzobject: string | null): void

    // Overloads of addTimezone

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
    addTimezone(zone: ICalGLib.Timezone): void
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
    addTimezone(tzobject: string | null, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Calls the create_objects_sync method on the given backend.
     * @param cal An EDataCal object.
     * @param cancellable a #GCancellable for the operation
     * @param calobjs The objects to be added.
     * @param opflags bit-or of #ECalOperationFlags
     */
    createObjects(cal: DataCal, cancellable: Gio.Cancellable | null, calobjs: string[], opflags: ECal.OperationFlags): [ /* uids */ string[], /* newComponents */ ECal.Component[] ]

    // Overloads of createObjects

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
    createObjects(calobjs: string | null, opflags: ECal.OperationFlags, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Calls the discard_alarm_sync method on the given backend.
     * @param cal An EDataCal object.
     * @param cancellable a #GCancellable for the operation
     * @param uid Unique id of the calendar object.
     * @param rid Recurrence id of the calendar object.
     * @param auid Alarm ID to remove.
     * @param opflags bit-or of #ECalOperationFlags
     */
    discardAlarm(cal: DataCal, cancellable: Gio.Cancellable | null, uid: string | null, rid: string | null, auid: string | null, opflags: ECal.OperationFlags): void

    // Overloads of discardAlarm

    /**
     * Asynchronously discards the VALARM object with a unique ID of `alarm_uid`
     * from the iCalendar object identified by `uid` and, optionally, `rid`.
     * 
     * When the operation is finished, `callback` will be called.  You can
     * then call e_cal_backend_discard_alarm_finish() to get the result of
     * the operation.
     * @param uid a unique ID for an iCalendar object
     * @param rid a recurrence ID, or %NULL
     * @param alarmUid a unique ID for an iCalendar VALARM object
     * @param opflags bit-or of #ECalOperationFlags
     * @param cancellable optional #GCancellable object, or %NULL
     * @param callback a #GAsyncReadyCallback to call when the request is satisfied
     */
    discardAlarm(uid: string | null, rid: string | null, alarmUid: string | null, opflags: ECal.OperationFlags, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Calls the get_attachment_uris_sync method on the given backend.
     * @param cal An EDataCal object.
     * @param cancellable a #GCancellable for the operation
     * @param uid Unique id of the calendar object.
     * @param rid Recurrence id of the calendar object.
     * @param attachments Placeholder for list of returned attachment uris.
     */
    getAttachmentUris(cal: DataCal, cancellable: Gio.Cancellable | null, uid: string | null, rid: string | null, attachments: string[]): void

    // Overloads of getAttachmentUris

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
    getAttachmentUris(uid: string | null, rid: string | null, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Calls the get_free_busy_sync method on the given backend.
     * @param cal An EDataCal object.
     * @param cancellable a #GCancellable for the operation
     * @param users List of users to get F/B info from.
     * @param start Time range start.
     * @param end Time range end.
     */
    getFreeBusy(cal: DataCal, cancellable: Gio.Cancellable | null, users: string[], start: number, end: number): /* freebusyobjects */ string[]

    // Overloads of getFreeBusy

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
    getFreeBusy(start: number, end: number, users: string[], cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Calls the get_object_sync method on the given backend.
     * @param cal An EDataCal object.
     * @param cancellable a #GCancellable for the operation
     * @param uid UID of the object to get.
     * @param rid Recurrence ID of the specific instance to get, or %NULL if    getting the master object.
     */
    getObject(cal: DataCal, cancellable: Gio.Cancellable | null, uid: string | null, rid: string | null): /* calobj */ string | null

    // Overloads of getObject

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
    getObject(uid: string | null, rid: string | null, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Calls the get_object_list_sync method on the given backend.
     * @param cal An EDataCal object.
     * @param cancellable a #GCancellable for the operation
     * @param sexp Search query.
     */
    getObjectList(cal: DataCal, cancellable: Gio.Cancellable | null, sexp: string | null): /* calobjs */ string[]

    // Overloads of getObjectList

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
    getObjectList(query: string | null, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
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
    getTimezone(cal: DataCal, cancellable: Gio.Cancellable | null, tzid: string | null, tzobject: string | null): void

    // Overloads of getTimezone

    /**
     * Obtains an #ICalTimezone by its TZID string.  If no match is found,
     * the function returns %NULL.  The returned #ICalTimezone is owned by
     * the `cache` and should not be modified or freed.
     * @param tzid the TZID of a timezone
     * @returns an #ICalTimezone, or %NULL
     */
    getTimezone(tzid: string | null): ICalGLib.Timezone | null
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
    getTimezone(tzid: string | null, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Calls the modify_objects_sync method on the given backend.
     * @param cal An EDataCal object.
     * @param cancellable a #GCancellable for the operation
     * @param calobjs Objects to be modified.
     * @param mod Type of modification to be done.
     * @param opflags bit-or of #ECalOperationFlags
     */
    modifyObjects(cal: DataCal, cancellable: Gio.Cancellable | null, calobjs: string[], mod: ECal.ObjModType, opflags: ECal.OperationFlags): [ /* oldComponents */ ECal.Component[], /* newComponents */ ECal.Component[] ]

    // Overloads of modifyObjects

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
    modifyObjects(calobjs: string | null, mod: ECal.ObjModType, opflags: ECal.OperationFlags, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
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
    open(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Calls the receive_objects_sync method on the given backend.
     * @param cal An EDataCal object.
     * @param cancellable a #GCancellable for the operation
     * @param calobj iCalendar object to receive.
     * @param opflags bit-or of #ECalOperationFlags
     */
    receiveObjects(cal: DataCal, cancellable: Gio.Cancellable | null, calobj: string | null, opflags: ECal.OperationFlags): void

    // Overloads of receiveObjects

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
    receiveObjects(calobj: string | null, opflags: ECal.OperationFlags, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
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
    refresh(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Calls the remove_objects_sync method on the given backend.
     * @param cal An EDataCal object.
     * @param cancellable a #GCancellable for the operation
     * @param ids List of #ECalComponentId objects identifying the objects to remove.
     * @param mod Type of removal.
     * @param opflags bit-or of #ECalOperationFlags
     */
    removeObjects(cal: DataCal, cancellable: Gio.Cancellable | null, ids: ECal.ComponentId[], mod: ECal.ObjModType, opflags: ECal.OperationFlags): [ /* oldComponents */ ECal.Component[], /* newComponents */ ECal.Component[] ]

    // Overloads of removeObjects

    /**
     * Asynchronously removes one or more iCalendar objects according to
     * `component_ids` and `mod`.
     * 
     * When the operation is finished, `callback` will be called.  You can then
     * call e_cal_backend_remove_objects_finish() to get the result of the
     * operation.
     * @param componentIds a #GList of #ECalComponentId structs
     * @param mod modification type for recurrences
     * @param opflags bit-or of #ECalOperationFlags
     * @param cancellable optional #GCancellable object, or %NULL
     * @param callback a #GAsyncReadyCallback to call when the request is satisfied
     */
    removeObjects(componentIds: ECal.ComponentId[], mod: ECal.ObjModType, opflags: ECal.OperationFlags, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Calls the send_objects_sync method on the given backend.
     * @param cal An EDataCal object.
     * @param cancellable a #GCancellable for the operation
     * @param calobj The iCalendar object to send.
     * @param opflags bit-or of #ECalOperationFlags
     * @param users List of users to send notifications to.
     */
    sendObjects(cal: DataCal, cancellable: Gio.Cancellable | null, calobj: string | null, opflags: ECal.OperationFlags, users: string[]): /* modifiedCalobj */ string | null

    // Overloads of sendObjects

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
    sendObjects(calobj: string | null, opflags: ECal.OperationFlags, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void

    // Own virtual methods of EDataCal-2.0.EDataCal.CalBackendSync

    addTimezoneSync(cal: DataCal, cancellable: Gio.Cancellable | null, tzobject: string | null): void

    // Overloads of addTimezoneSync

    /**
     * Adds the timezone described by `tzobject` to `backend`.
     * 
     * If an error occurs, the function will set `error` and return %FALSE.
     * @param tzobject an iCalendar VTIMEZONE string
     * @param cancellable optional #GCancellable object, or %NULL
     * @returns %TRUE on success, %FALSE on failure
     */
    addTimezoneSync(tzobject: string | null, cancellable: Gio.Cancellable | null): boolean
    discardAlarmSync(cal: DataCal, cancellable: Gio.Cancellable | null, uid: string | null, rid: string | null, auid: string | null, opflags: ECal.OperationFlags): void

    // Overloads of discardAlarmSync

    /**
     * Discards the VALARM object with a unique ID of `alarm_uid` from the
     * iCalendar object identified by `uid` and, optionally, `rid`.
     * 
     * If an error occurs, the function will set `error` and return %FALSE.
     * @param uid a unique ID for an iCalendar object
     * @param rid a recurrence ID, or %NULL
     * @param alarmUid a unique ID for an iCalendar VALARM object
     * @param opflags bit-or of #ECalOperationFlags
     * @param cancellable optional #GCancellable object, or %NULL
     * @returns %TRUE on success, %FALSE on failure
     */
    discardAlarmSync(uid: string | null, rid: string | null, alarmUid: string | null, opflags: ECal.OperationFlags, cancellable: Gio.Cancellable | null): boolean
    getObjectSync(cal: DataCal, cancellable: Gio.Cancellable | null, uid: string | null, rid: string | null, calobj: string | null): void

    // Overloads of getObjectSync

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
    getObjectSync(uid: string | null, rid: string | null, cancellable: Gio.Cancellable | null): string | null
    getTimezoneSync(cal: DataCal, cancellable: Gio.Cancellable | null, tzid: string | null, tzobject: string | null): void

    // Overloads of getTimezoneSync

    /**
     * Obtains the VTIMEZONE object identified by `tzid`.  Free the returned
     * string with g_free() when finished with it.
     * 
     * If an error occurs, the function will set `error` and return %NULL.
     * @param tzid a unique ID for an iCalendar VTIMEZONE object
     * @param cancellable optional #GCancellable object, or %NULL
     * @returns an iCalendar string, or %NULL on error
     */
    getTimezoneSync(tzid: string | null, cancellable: Gio.Cancellable | null): string | null
    openSync(cal: DataCal, cancellable: Gio.Cancellable | null): void

    // Overloads of openSync

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
    openSync(cancellable: Gio.Cancellable | null): boolean
    receiveObjectsSync(cal: DataCal, cancellable: Gio.Cancellable | null, calobj: string | null, opflags: ECal.OperationFlags): void

    // Overloads of receiveObjectsSync

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
    receiveObjectsSync(calobj: string | null, opflags: ECal.OperationFlags, cancellable: Gio.Cancellable | null): boolean
    refreshSync(cal: DataCal, cancellable: Gio.Cancellable | null): void

    // Overloads of refreshSync

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
    refreshSync(cancellable: Gio.Cancellable | null): boolean

    // Class property signals of EDataCal-2.0.EDataCal.CalBackendSync

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: "notify::cache-dir", callback: (...args: any[]) => void): number
    on(sigName: "notify::cache-dir", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::cache-dir", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::cache-dir", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::cache-dir", ...args: any[]): void
    connect(sigName: "notify::kind", callback: (...args: any[]) => void): number
    on(sigName: "notify::kind", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::kind", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::kind", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::kind", ...args: any[]): void
    connect(sigName: "notify::proxy-resolver", callback: (...args: any[]) => void): number
    on(sigName: "notify::proxy-resolver", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::proxy-resolver", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::proxy-resolver", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::proxy-resolver", ...args: any[]): void
    connect(sigName: "notify::registry", callback: (...args: any[]) => void): number
    on(sigName: "notify::registry", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::registry", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::registry", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::registry", ...args: any[]): void
    connect(sigName: "notify::writable", callback: (...args: any[]) => void): number
    on(sigName: "notify::writable", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::writable", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::writable", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::writable", ...args: any[]): void
    connect(sigName: "notify::connectable", callback: (...args: any[]) => void): number
    on(sigName: "notify::connectable", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::connectable", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::connectable", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::connectable", ...args: any[]): void
    connect(sigName: "notify::main-context", callback: (...args: any[]) => void): number
    on(sigName: "notify::main-context", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::main-context", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::main-context", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::main-context", ...args: any[]): void
    connect(sigName: "notify::online", callback: (...args: any[]) => void): number
    on(sigName: "notify::online", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::online", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::online", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::online", ...args: any[]): void
    connect(sigName: "notify::source", callback: (...args: any[]) => void): number
    on(sigName: "notify::source", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::source", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::source", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::source", ...args: any[]): void
    connect(sigName: "notify::user-prompter", callback: (...args: any[]) => void): number
    on(sigName: "notify::user-prompter", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::user-prompter", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::user-prompter", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::user-prompter", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * Contains only private data that should be read and manipulated using the
 * functions below.
 * @class 
 */
export class CalBackendSync extends CalBackend {

    // Own properties of EDataCal-2.0.EDataCal.CalBackendSync

    static name: string

    // Constructors of EDataCal-2.0.EDataCal.CalBackendSync

    constructor(config?: CalBackendSync.ConstructorProperties) 
    _init(config?: CalBackendSync.ConstructorProperties): void
}

export module CalCache {

    // Signal callback interfaces

    /**
     * Signal callback interface for `dup-component-revision`
     */
    export interface DupComponentRevisionSignalCallback {
        (object: ICalGLib.Component): string | null
    }

    /**
     * Signal callback interface for `get-timezone`
     */
    export interface GetTimezoneSignalCallback {
        (tzid: string | null): ICalGLib.Timezone
    }


    // Constructor properties interface

    export interface ConstructorProperties extends ECal.TimezoneCache.ConstructorProperties, EDataServer.Extensible.ConstructorProperties, EBackend.Cache.ConstructorProperties {
    }

}

export interface CalCache extends ECal.TimezoneCache, EDataServer.Extensible {

    // Own properties of EDataCal-2.0.EDataCal.CalCache

    __gtype__: number

    // Owm methods of EDataCal-2.0.EDataCal.CalCache

    /**
     * Checkes whether the `cal_cache` contains an object with
     * the given `uid` and `rid`. The `rid` can be an empty string
     * or %NULL to search for the master object, otherwise the check
     * is done for a detached instance, not for a recurrence instance.
     * @param uid component UID
     * @param rid optional component Recurrence-ID or %NULL
     * @param deletedFlag one of #ECacheDeletedFlag enum
     * @returns Whether the object had been found.
     */
    contains(uid: string | null, rid: string | null, deletedFlag: EBackend.CacheDeletedFlag): boolean

    // Overloads of contains

    /**
     * Checkes whether the `cache` contains an object with
     * the given `uid`.
     * @param uid a unique identifier of an object
     * @param deletedFlag one of #ECacheDeletedFlag enum
     * @returns Whether the object had been found.
     */
    contains(uid: string | null, deletedFlag: EBackend.CacheDeletedFlag): boolean
    /**
     * Deletes all locally stored attachments beside the cache file from the disk.
     * This doesn't modify the `component`. It's usually called before the `component`
     * is being removed from the `cal_cache`.
     * @param component an #ICalComponent
     * @param cancellable optional #GCancellable object, or %NULL
     * @returns Whether succeeded.
     */
    deleteAttachments(component: ICalGLib.Component, cancellable: Gio.Cancellable | null): boolean
    // Has conflict: dupComponentRevision(icomp: ICalGLib.Component): string | null
    /**
     * Gets a timezone with given `tzid,` which had been previously put
     * into the `cal_cache` with e_cal_cache_put_timezone().
     * The returned string is an iCal string for that ICalTimezone and
     * should be freed with g_free() when no longer needed.
     * @param tzid a timezone ID to get
     * @param cancellable optional #GCancellable object, or %NULL
     * @returns Whether succeeded.
     */
    dupTimezoneAsString(tzid: string | null, cancellable: Gio.Cancellable | null): [ /* returnType */ boolean, /* outZoneString */ string | null ]
    /**
     * Gets a component identified by `uid,` and optionally by the `rid,`
     * from the `cal_cache`. The returned `out_component` should be freed with
     * g_object_unref(), when no longer needed.
     * @param uid a UID of the component
     * @param rid an optional Recurrence-ID
     * @param cancellable optional #GCancellable object, or %NULL
     * @returns Whether succeeded.
     */
    getComponent(uid: string | null, rid: string | null, cancellable: Gio.Cancellable | null): [ /* returnType */ boolean, /* outComponent */ ECal.Component ]
    /**
     * Gets a component identified by `uid,` and optionally by the `rid,`
     * from the `cal_cache`. The returned `out_icalstring` should be freed with
     * g_free(), when no longer needed.
     * @param uid a UID of the component
     * @param rid an optional Recurrence-ID
     * @param cancellable optional #GCancellable object, or %NULL
     * @returns Whether succeeded.
     */
    getComponentAsString(uid: string | null, rid: string | null, cancellable: Gio.Cancellable | null): [ /* returnType */ boolean, /* outIcalstring */ string | null ]
    /**
     * Gets the custom flags previously set for `uid` and `rid,` either with
     * e_cal_cache_set_component_custom_flags(), when adding components or
     * when removing components in offline.
     * @param uid a UID of the component
     * @param rid an optional Recurrence-ID
     * @param cancellable optional #GCancellable object, or %NULL
     * @returns Whether succeeded.
     */
    getComponentCustomFlags(uid: string | null, rid: string | null, cancellable: Gio.Cancellable | null): [ /* returnType */ boolean, /* outCustomFlags */ number ]
    /**
     * Gets the extra data previously set for `uid` and `rid,` either with
     * e_cal_cache_set_component_extra() or when adding components.
     * @param uid a UID of the component
     * @param rid an optional Recurrence-ID
     * @param cancellable optional #GCancellable object, or %NULL
     * @returns Whether succeeded.
     */
    getComponentExtra(uid: string | null, rid: string | null, cancellable: Gio.Cancellable | null): [ /* returnType */ boolean, /* outExtra */ string | null ]
    /**
     * Gets the master object and all detached instances for a component
     * identified by the `uid`. Free the returned #GSList with
     * g_slist_free_full (components, g_object_unref); when
     * no longer needed.
     * @param uid a UID of the component
     * @param cancellable optional #GCancellable object, or %NULL
     * @returns Whether succeeded.
     */
    getComponentsByUid(uid: string | null, cancellable: Gio.Cancellable | null): [ /* returnType */ boolean, /* outComponents */ ECal.Component[] ]
    /**
     * Gets the master object and all detached instances as string
     * for a component identified by the `uid`. Free the returned #GSList
     * with g_slist_free_full (icalstrings, g_free); when no longer needed.
     * @param uid a UID of the component
     * @param cancellable optional #GCancellable object, or %NULL
     * @returns Whether succeeded.
     */
    getComponentsByUidAsString(uid: string | null, cancellable: Gio.Cancellable | null): [ /* returnType */ boolean, /* outIcalstrings */ string[] ]
    /**
     * Gets a list of components which occur in the given time range.
     * It's not an error if none is found.
     * @param rangeStart start of the range, as time_t, inclusive
     * @param rangeEnd end of the range, as time_t, exclusive
     * @param cancellable optional #GCancellable object, or %NULL
     * @returns Whether succeeded.
     */
    getComponentsInRange(rangeStart: number, rangeEnd: number, cancellable: Gio.Cancellable | null): [ /* returnType */ boolean, /* outComponents */ ECal.Component[] ]
    /**
     * Gets a list of components, as iCal strings, which occur in the given time range.
     * @param rangeStart start of the range, as time_t, inclusive
     * @param rangeEnd end of the range, as time_t, exclusive
     * @param cancellable optional #GCancellable object, or %NULL
     * @returns Whether succeeded.
     */
    getComponentsInRangeAsStrings(rangeStart: number, rangeEnd: number, cancellable: Gio.Cancellable | null): [ /* returnType */ boolean, /* outIcalstrings */ string[] ]
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
    getIdsWithExtra(extra: string | null, cancellable: Gio.Cancellable | null): [ /* returnType */ boolean, /* outIds */ ECal.ComponentId[] ]
    /**
     * The same as e_cache_get_offline_changes(), only splits the saved UID
     * into UID and RID and saved the data into #ECalCacheOfflineChange structure.
     * @param cancellable optional #GCancellable object, or %NULL
     * @returns A newly allocated list of all    offline changes. Free it with g_slist_free_full (slist, e_cal_cache_offline_change_free);    when no longer needed.
     */
    getOfflineChanges(cancellable: Gio.Cancellable | null): CalCacheOfflineChange[]

    // Overloads of getOfflineChanges

    /**
     * Gathers the list of all offline changes being done so far.
     * The returned #GSList contains #ECacheOfflineChange structure.
     * Use e_cache_clear_offline_changes() to clear all offline
     * changes at once.
     * @param cancellable optional #GCancellable object, or %NULL
     * @returns A newly allocated list of all    offline changes. Free it with g_slist_free_full (slist, e_cache_offline_change_free);    when no longer needed.
     */
    getOfflineChanges(cancellable: Gio.Cancellable | null): EBackend.CacheOfflineChange[]
    /**
     * This is a wrapper of e_cache_get_offline_state(), ensuring that
     * a correct #ECache UID will be used.
     * @param uid a UID of the component
     * @param rid an optional Recurrence-ID
     * @param cancellable optional #GCancellable object, or %NULL
     * @returns Current offline state #EOfflineState for the given component.    It returns %E_OFFLINE_STATE_UNKNOWN when the component could not be    found or other error happened.
     */
    getOfflineState(uid: string | null, rid: string | null, cancellable: Gio.Cancellable | null): EBackend.OfflineState

    // Overloads of getOfflineState

    getOfflineState(uid: string | null, cancellable: Gio.Cancellable | null): EBackend.OfflineState
    /**
     * Gets a timezone with given `tzid,` which had been previously put
     * into the `cal_cache` with e_cal_cache_put_timezone().
     * The returned ICalTimezone is owned by the `cal_cache` and should
     * not be freed.
     * @param tzid a timezone ID to get
     * @param cancellable optional #GCancellable object, or %NULL
     * @returns Whether succeeded.
     */
    getTimezone(tzid: string | null, cancellable: Gio.Cancellable | null): [ /* returnType */ boolean, /* outZone */ ICalGLib.Timezone ]

    // Overloads of getTimezone

    /**
     * Obtains an #ICalTimezone by its TZID string.  If no match is found,
     * the function returns %NULL.  The returned #ICalTimezone is owned by
     * the `cache` and should not be modified or freed.
     * @param tzid the TZID of a timezone
     * @returns an #ICalTimezone, or %NULL
     */
    getTimezone(tzid: string | null): ICalGLib.Timezone | null
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
    listTimezones(cancellable: Gio.Cancellable | null): [ /* returnType */ boolean, /* outTimezones */ ICalGLib.Timezone[] ]

    // Overloads of listTimezones

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
    listTimezones(): ICalGLib.Timezone[]
    /**
     * Adds a `component` into the `cal_cache`. Any existing with the same UID
     * and RID is replaced.
     * @param component an #ECalComponent to put into the `cal_cache`
     * @param extra an extra data to store in association with the `component`
     * @param customFlags custom flags for the `component,` not interpreted by the `cal_cache`
     * @param offlineFlag one of #ECacheOfflineFlag, whether putting this component in offline
     * @param cancellable optional #GCancellable object, or %NULL
     * @returns Whether succeeded.
     */
    putComponent(component: ECal.Component, extra: string | null, customFlags: number, offlineFlag: EBackend.CacheOfflineFlag, cancellable: Gio.Cancellable | null): boolean
    /**
     * Adds a list of `components` into the `cal_cache`. Any existing with the same UID
     * and RID are replaced.
     * 
     * If `extras` is not %NULL, its length should be the same as the length
     * of the `components`. Similarly the non-NULL `custom_flags` length
     * should be the same as the length of the `components`.
     * @param components a #GSList of #ECalComponent to put into the `cal_cache`
     * @param extras optional extra data to store in association with the `components`
     * @param customFlags optional custom flags to use for the `components`
     * @param offlineFlag one of #ECacheOfflineFlag, whether putting these components in offline
     * @param cancellable optional #GCancellable object, or %NULL
     * @returns Whether succeeded.
     */
    putComponents(components: ECal.Component[], extras: string[] | null, customFlags: number[] | null, offlineFlag: EBackend.CacheOfflineFlag, cancellable: Gio.Cancellable | null): boolean
    /**
     * Puts the `zone` into the `cal_cache` using its timezone ID as
     * an identificator. The function adds a new or replaces existing,
     * if any such already exists in the `cal_cache`. The function does
     * nothing and returns %TRUE, when the passed-in `zone` is libical
     * builtin timezone.
     * @param zone an #ICalTimezone to put
     * @param incRefCounts how many refs to add, or 0 to have it stored forever
     * @param cancellable optional #GCancellable object, or %NULL
     * @returns Whether succeeded.
     */
    putTimezone(zone: ICalGLib.Timezone, incRefCounts: number, cancellable: Gio.Cancellable | null): boolean
    /**
     * Removes a component identified by `uid` and `rid` from the `cal_cache`.
     * When the `rid` is %NULL, or an empty string, then removes the master
     * object only, without any detached instance.
     * @param uid a UID of the component to remove
     * @param rid an optional Recurrence-ID to remove
     * @param customFlags custom flags for the component, not interpreted by the `cal_cache`
     * @param offlineFlag one of #ECacheOfflineFlag, whether removing this component in offline
     * @param cancellable optional #GCancellable object, or %NULL
     * @returns Whether succeeded.
     */
    removeComponent(uid: string | null, rid: string | null, customFlags: number, offlineFlag: EBackend.CacheOfflineFlag, cancellable: Gio.Cancellable | null): boolean
    /**
     * Removes components identified by `uid` and `rid` from the `cal_cache`
     * in the `ids` list. When the `rid` is %NULL, or an empty string, then
     * removes the master object only, without any detached instance.
     * The `custom_flags` is used, if not %NULL, only if the `offline_flag`
     * is %E_CACHE_IS_OFFLINE. Otherwise it's ignored. The length of
     * the `custom_flags` should match the length of `ids,` when not %NULL.
     * @param ids a #GSList of components to remove
     * @param customFlags an optional #GSList of custom flags for the `ids`
     * @param offlineFlag one of #ECacheOfflineFlag, whether removing these comonents in offline
     * @param cancellable optional #GCancellable object, or %NULL
     * @returns Whether succeeded.
     */
    removeComponents(ids: ECal.ComponentId[], customFlags: number[] | null, offlineFlag: EBackend.CacheOfflineFlag, cancellable: Gio.Cancellable | null): boolean
    /**
     * Dereferences use count of the time zone with ID `tzid` by `dec_ref_counts`
     * and removes the timezone from the cache when the reference count reaches
     * zero. Special case is with `dec_ref_counts` being zero, in which case
     * the corresponding timezone is removed regardless of the current reference
     * count.
     * 
     * It's not an error when the timezone doesn't exist in the cache.
     * @param tzid timezone ID to remove/dereference
     * @param decRefCounts reference counts to drop, 0 to remove it regardless of the current reference count
     * @param cancellable optional #GCancellable object, or %NULL
     * @returns Whether succeeded.
     */
    removeTimezone(tzid: string | null, decRefCounts: number, cancellable: Gio.Cancellable | null): boolean
    /**
     * Removes all stored timezones from the `cal_cache`.
     * @param cancellable optional #GCancellable object, or %NULL
     * @returns Whether succeeded.
     */
    removeTimezones(cancellable: Gio.Cancellable | null): boolean
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
    search(sexp: string | null, cancellable: Gio.Cancellable | null): [ /* returnType */ boolean, /* outData */ CalCacheSearchData[] ]
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
    searchComponents(sexp: string | null, cancellable: Gio.Cancellable | null): [ /* returnType */ boolean, /* outComponents */ ECal.Component[] ]
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
    searchIds(sexp: string | null, cancellable: Gio.Cancellable | null): [ /* returnType */ boolean, /* outIds */ ECal.ComponentId[] ]
    /**
     * Searches the `cal_cache` with the given `sexp` and calls `func` for each
     * row which satisfy the search expression.
     * @param sexp search expression; use %NULL or an empty string to list all stored components
     * @param cancellable optional #GCancellable object, or %NULL
     * @returns Whether succeeded.
     */
    searchWithCallback(sexp: string | null, cancellable: Gio.Cancellable | null): boolean
    /**
     * Sets or replaces the custom flags associated with a component
     * identified by `uid` and optionally `rid`.
     * @param uid a UID of the component
     * @param rid an optional Recurrence-ID
     * @param customFlags the custom flags to set for the component
     * @param cancellable optional #GCancellable object, or %NULL
     * @returns Whether succeeded.
     */
    setComponentCustomFlags(uid: string | null, rid: string | null, customFlags: number, cancellable: Gio.Cancellable | null): boolean
    /**
     * Sets or replaces the extra data associated with a component
     * identified by `uid` and optionally `rid`.
     * @param uid a UID of the component
     * @param rid an optional Recurrence-ID
     * @param extra extra data to set for the component
     * @param cancellable optional #GCancellable object, or %NULL
     * @returns Whether succeeded.
     */
    setComponentExtra(uid: string | null, rid: string | null, extra: string | null, cancellable: Gio.Cancellable | null): boolean

    // Own virtual methods of EDataCal-2.0.EDataCal.CalCache

    /**
     * Returns the `icomp` revision, used to detect changes.
     * The returned string should be freed with g_free(), when
     * no longer needed.
     * @virtual 
     * @param icomp an #ICalComponent
     * @returns A newly allocated string containing    revision of the @icomp.
     */
    dupComponentRevision(icomp: ICalGLib.Component): string | null

    // Own signals of EDataCal-2.0.EDataCal.CalCache

    connect(sigName: "dup-component-revision", callback: CalCache.DupComponentRevisionSignalCallback): number
    on(sigName: "dup-component-revision", callback: CalCache.DupComponentRevisionSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "dup-component-revision", callback: CalCache.DupComponentRevisionSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "dup-component-revision", callback: CalCache.DupComponentRevisionSignalCallback): NodeJS.EventEmitter
    emit(sigName: "dup-component-revision", ...args: any[]): void
    connect(sigName: "get-timezone", callback: CalCache.GetTimezoneSignalCallback): number
    on(sigName: "get-timezone", callback: CalCache.GetTimezoneSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "get-timezone", callback: CalCache.GetTimezoneSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "get-timezone", callback: CalCache.GetTimezoneSignalCallback): NodeJS.EventEmitter
    emit(sigName: "get-timezone", ...args: any[]): void

    // Class property signals of EDataCal-2.0.EDataCal.CalCache

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * Contains only private data that should be read and manipulated using
 * the functions below.
 * @class 
 */
export class CalCache extends EBackend.Cache {

    // Own properties of EDataCal-2.0.EDataCal.CalCache

    static name: string

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
     * @param calCache an #ECalCache
     * @param cancellable optional #GCancellable object, or %NULL
     * @returns the resolved #ICalTimezone, or %NULL, if not found
     */
    static resolveTimezoneCb(tzid: string | null, calCache: any | null, cancellable: Gio.Cancellable | null): ICalGLib.Timezone | null
}

export module CalMetaBackend {

    // Signal callback interfaces

    /**
     * Signal callback interface for `refresh-completed`
     */
    export interface RefreshCompletedSignalCallback {
        (): void
    }

    /**
     * Signal callback interface for `source-changed`
     */
    export interface SourceChangedSignalCallback {
        (): void
    }


    // Constructor properties interface

    export interface ConstructorProperties extends ECal.TimezoneCache.ConstructorProperties, CalBackendSync.ConstructorProperties {

        // Own constructor properties of EDataCal-2.0.EDataCal.CalMetaBackend

        /**
         * The #ECalCache being used for this meta backend.
         */
        cache?: CalCache | null
    }

}

export interface CalMetaBackend extends ECal.TimezoneCache {

    // Own properties of EDataCal-2.0.EDataCal.CalMetaBackend

    /**
     * The #ECalCache being used for this meta backend.
     */
    cache: CalCache
    __gtype__: number

    // Owm methods of EDataCal-2.0.EDataCal.CalMetaBackend

    // Has conflict: connectSync(credentials: EDataServer.NamedParameters | null, cancellable: Gio.Cancellable | null): [ /* returnType */ boolean, /* outAuthResult */ EDataServer.SourceAuthenticationResult, /* outCertificatePem */ string | null, /* outCertificateErrors */ Gio.TlsCertificateFlags ]
    // Has conflict: disconnectSync(cancellable: Gio.Cancellable | null): boolean
    /**
     * Returns the last known synchronization tag, the same as used to
     * call e_cal_meta_backend_get_changes_sync().
     * 
     * Free the returned string with g_free(), when no longer needed.
     * @returns The last known synchronization tag,    or %NULL, when none is stored.
     */
    dupSyncTag(): string | null
    /**
     * Empties the local cache by removing all known components from it
     * and notifies about such removal any opened views. It removes also
     * all known time zones.
     * @param cancellable optional #GCancellable object, or %NULL
     * @returns Whether succeeded.
     */
    emptyCacheSync(cancellable: Gio.Cancellable | null): boolean
    /**
     * Ensures that the `meta_backend` is connected to its destination.
     * @param cancellable optional #GCancellable object, or %NULL
     * @returns Whether succeeded.
     */
    ensureConnectedSync(cancellable: Gio.Cancellable | null): boolean
    /**
     * Extracts all VTIMEZONE components from the `vcalendar` and adds them
     * to the memory cache, thus they are available when needed. The function does
     * nothing when the `vcalendar` doesn't hold a VCALENDAR component.
     * 
     * Set the `remove_existing` argument to %TRUE to remove all cached timezones
     * first and then add the existing in the `vcalendar,` or set it to %FALSE
     * to preserver existing timezones and merge them with those in `vcalendar`.
     * @param vcalendar a VCALENDAR #ICalComponent
     * @param removeExisting whether to remove any existing first
     * @param cancellable optional #GCancellable object, or %NULL
     * @returns Whether succeeded.
     */
    gatherTimezonesSync(vcalendar: ICalGLib.Component, removeExisting: boolean, cancellable: Gio.Cancellable | null): boolean
    getCapabilities(): string | null
    // Has conflict: getChangesSync(lastSyncTag: string | null, isRepeat: boolean, cancellable: Gio.Cancellable | null): [ /* returnType */ boolean, /* outNewSyncTag */ string | null, /* outRepeat */ boolean, /* outCreatedObjects */ CalMetaBackendInfo[], /* outModifiedObjects */ CalMetaBackendInfo[], /* outRemovedObjects */ CalMetaBackendInfo[] ]
    /**
     * This value has meaning only if e_cal_meta_backend_get_ever_connected()
     * is %TRUE.
     * @returns Whether the @meta_backend connected to a writable destination.
     */
    getConnectedWritable(): boolean
    getEverConnected(): boolean
    // Has conflict: getSslErrorDetails(): [ /* returnType */ boolean, /* outCertificatePem */ string | null, /* outCertificateErrors */ Gio.TlsCertificateFlags ]
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
    inlineLocalAttachmentsSync(component: ICalGLib.Component, cancellable: Gio.Cancellable | null): boolean
    // Has conflict: listExistingSync(cancellable: Gio.Cancellable | null): [ /* returnType */ boolean, /* outNewSyncTag */ string | null, /* outExistingObjects */ CalMetaBackendInfo[] ]
    // Has conflict: loadComponentSync(uid: string | null, extra: string | null, cancellable: Gio.Cancellable | null): [ /* returnType */ boolean, /* outComponent */ ICalGLib.Component, /* outExtra */ string | null ]
    /**
     * Merges all the instances provided in `instances` list into one VCALENDAR
     * object, which would eventually contain also all the used timezones.
     * The `instances` list should contain the master object and eventually all
     * the detached instances for one component (they all have the same UID).
     * 
     * Any TZID property parameters can be replaced with corresponding timezone
     * location, which will not influence the timezone itself.
     * @param instances component instances to merge
     * @param replaceTzidWithLocation whether to replace TZID-s with locations
     * @returns an #ICalComponent containing a VCALENDAR    component which consists of all the given instances. Free    the returned pointer with g_object_unref(), when no longer needed. See: e_cal_meta_backend_save_component_sync()
     */
    mergeInstances(instances: ECal.Component[], replaceTzidWithLocation: boolean): ICalGLib.Component
    /**
     * Processes given changes by updating local cache content accordingly.
     * The `meta_backend` processes the changes like being online and particularly
     * requires to be online to load created and modified objects when needed.
     * @param createdObjects     a #GSList of #ECalMetaBackendInfo object infos which had been created
     * @param modifiedObjects     a #GSList of #ECalMetaBackendInfo object infos which had been modified
     * @param removedObjects     a #GSList of #ECalMetaBackendInfo object infos which had been removed
     * @param cancellable optional #GCancellable object, or %NULL
     * @returns Whether succeeded.
     */
    processChangesSync(createdObjects: CalMetaBackendInfo[] | null, modifiedObjects: CalMetaBackendInfo[] | null, removedObjects: CalMetaBackendInfo[] | null, cancellable: Gio.Cancellable | null): boolean
    refCache(): CalCache
    /**
     * Refreshes the `meta_backend` immediately. To just schedule refresh
     * operation call e_cal_meta_backend_schedule_refresh().
     * @param cancellable optional #GCancellable object, or %NULL
     * @returns Whether succeeded.
     */
    refreshSync(cancellable: Gio.Cancellable | null): boolean

    // Overloads of refreshSync

    refreshSync(cal: DataCal, cancellable: Gio.Cancellable | null): void
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
    refreshSync(cancellable: Gio.Cancellable | null): boolean
    // Has conflict: removeComponentSync(conflictResolution: EDataServer.ConflictResolution, uid: string | null, extra: string | null, object: string | null, opflags: ECal.OperationFlags, cancellable: Gio.Cancellable | null): boolean
    // Has conflict: requiresReconnect(): boolean
    // Has conflict: saveComponentSync(overwriteExisting: boolean, conflictResolution: EDataServer.ConflictResolution, instances: ECal.Component[], extra: string | null, opflags: ECal.OperationFlags, cancellable: Gio.Cancellable | null): [ /* returnType */ boolean, /* outNewUid */ string | null, /* outNewExtra */ string | null ]
    /**
     * Schedules refresh of the content of the `meta_backend`. If there's any
     * already scheduled, then the function does nothing.
     * 
     * Use e_cal_meta_backend_refresh_sync() to refresh the `meta_backend`
     * immediately.
     */
    scheduleRefresh(): void
    // Has conflict: searchComponentsSync(expr: string | null, cancellable: Gio.Cancellable | null): [ /* returnType */ boolean, /* outComponents */ ECal.Component[] ]
    // Has conflict: searchSync(expr: string | null, cancellable: Gio.Cancellable | null): [ /* returnType */ boolean, /* outIcalstrings */ string[] ]
    /**
     * Sets the `cache` as the cache to be used by the `meta_backend`.
     * By default, a cache.db in ECalBackend::cache-dir is created
     * in the constructed method. This function can be used to override
     * the default.
     * 
     * Note the `meta_backend` adds its own reference to the `cache`.
     * @param cache an #ECalCache to use
     */
    setCache(cache: CalCache): void
    /**
     * Sets whether the `meta_backend` connected to a writable destination.
     * This value has meaning only if e_cal_meta_backend_get_ever_connected()
     * is %TRUE.
     * 
     * This is used by the `meta_backend` itself, during the opening phase,
     * to set the backend writable or not also in the offline mode.
     * @param value value to set
     */
    setConnectedWritable(value: boolean): void
    /**
     * Sets whether the `meta_backend` ever made a successful connection
     * to its destination.
     * 
     * This is used by the `meta_backend` itself, during the opening phase,
     * when it had not been connected yet, then it does so immediately, to
     * eventually report settings error easily.
     * @param value value to set
     */
    setEverConnected(value: boolean): void
    /**
     * Sets the `sync_tag` for the `meta_backend`.
     * @param syncTag a sync tag to set, or %NULL to unset the old one
     */
    setSyncTag(syncTag: string | null): void
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
    splitChangesSync(objects: CalMetaBackendInfo[], cancellable: Gio.Cancellable | null): [ /* returnType */ boolean, /* objects */ CalMetaBackendInfo[], /* outCreatedObjects */ CalMetaBackendInfo[], /* outModifiedObjects */ CalMetaBackendInfo[], /* outRemovedObjects */ CalMetaBackendInfo[] | null ]
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
    storeInlineAttachmentsSync(component: ICalGLib.Component, cancellable: Gio.Cancellable | null): boolean

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
    addTimezone(zone: ICalGLib.Timezone): void
    /**
     * Calls the add_timezone_sync method on the given backend.
     * @param cal An EDataCal object.
     * @param cancellable a #GCancellable for the operation
     * @param tzobject VTIMEZONE object to be added.
     */
    addTimezone(cal: DataCal, cancellable: Gio.Cancellable | null, tzobject: string | null): void

    // Overloads of addTimezone

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
    addTimezone(zone: ICalGLib.Timezone): void
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
    addTimezone(tzobject: string | null, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
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
    addTimezone(tzobject: string | null, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void

    // Overloads of addTimezone

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
    addTimezone(zone: ICalGLib.Timezone): void
    /**
     * Obtains an #ICalTimezone by its TZID string.  If no match is found,
     * the function returns %NULL.  The returned #ICalTimezone is owned by
     * the `cache` and should not be modified or freed.
     * @param tzid the TZID of a timezone
     * @returns an #ICalTimezone, or %NULL
     */
    getTimezone(tzid: string | null): ICalGLib.Timezone | null
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
    getTimezone(cal: DataCal, cancellable: Gio.Cancellable | null, tzid: string | null, tzobject: string | null): void

    // Overloads of getTimezone

    /**
     * Obtains an #ICalTimezone by its TZID string.  If no match is found,
     * the function returns %NULL.  The returned #ICalTimezone is owned by
     * the `cache` and should not be modified or freed.
     * @param tzid the TZID of a timezone
     * @returns an #ICalTimezone, or %NULL
     */
    getTimezone(tzid: string | null): ICalGLib.Timezone | null
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
    getTimezone(tzid: string | null, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
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
    getTimezone(tzid: string | null, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void

    // Overloads of getTimezone

    /**
     * Obtains an #ICalTimezone by its TZID string.  If no match is found,
     * the function returns %NULL.  The returned #ICalTimezone is owned by
     * the `cache` and should not be modified or freed.
     * @param tzid the TZID of a timezone
     * @returns an #ICalTimezone, or %NULL
     */
    getTimezone(tzid: string | null): ICalGLib.Timezone | null
    /**
     * Calls the create_objects_sync method on the given backend.
     * @param cal An EDataCal object.
     * @param cancellable a #GCancellable for the operation
     * @param calobjs The objects to be added.
     * @param opflags bit-or of #ECalOperationFlags
     */
    createObjects(cal: DataCal, cancellable: Gio.Cancellable | null, calobjs: string[], opflags: ECal.OperationFlags): [ /* uids */ string[], /* newComponents */ ECal.Component[] ]

    // Overloads of createObjects

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
    createObjects(calobjs: string | null, opflags: ECal.OperationFlags, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
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
    createObjects(calobjs: string | null, opflags: ECal.OperationFlags, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Calls the discard_alarm_sync method on the given backend.
     * @param cal An EDataCal object.
     * @param cancellable a #GCancellable for the operation
     * @param uid Unique id of the calendar object.
     * @param rid Recurrence id of the calendar object.
     * @param auid Alarm ID to remove.
     * @param opflags bit-or of #ECalOperationFlags
     */
    discardAlarm(cal: DataCal, cancellable: Gio.Cancellable | null, uid: string | null, rid: string | null, auid: string | null, opflags: ECal.OperationFlags): void

    // Overloads of discardAlarm

    /**
     * Asynchronously discards the VALARM object with a unique ID of `alarm_uid`
     * from the iCalendar object identified by `uid` and, optionally, `rid`.
     * 
     * When the operation is finished, `callback` will be called.  You can
     * then call e_cal_backend_discard_alarm_finish() to get the result of
     * the operation.
     * @param uid a unique ID for an iCalendar object
     * @param rid a recurrence ID, or %NULL
     * @param alarmUid a unique ID for an iCalendar VALARM object
     * @param opflags bit-or of #ECalOperationFlags
     * @param cancellable optional #GCancellable object, or %NULL
     * @param callback a #GAsyncReadyCallback to call when the request is satisfied
     */
    discardAlarm(uid: string | null, rid: string | null, alarmUid: string | null, opflags: ECal.OperationFlags, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Asynchronously discards the VALARM object with a unique ID of `alarm_uid`
     * from the iCalendar object identified by `uid` and, optionally, `rid`.
     * 
     * When the operation is finished, `callback` will be called.  You can
     * then call e_cal_backend_discard_alarm_finish() to get the result of
     * the operation.
     * @param uid a unique ID for an iCalendar object
     * @param rid a recurrence ID, or %NULL
     * @param alarmUid a unique ID for an iCalendar VALARM object
     * @param opflags bit-or of #ECalOperationFlags
     * @param cancellable optional #GCancellable object, or %NULL
     * @param callback a #GAsyncReadyCallback to call when the request is satisfied
     */
    discardAlarm(uid: string | null, rid: string | null, alarmUid: string | null, opflags: ECal.OperationFlags, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Calls the get_attachment_uris_sync method on the given backend.
     * @param cal An EDataCal object.
     * @param cancellable a #GCancellable for the operation
     * @param uid Unique id of the calendar object.
     * @param rid Recurrence id of the calendar object.
     * @param attachments Placeholder for list of returned attachment uris.
     */
    getAttachmentUris(cal: DataCal, cancellable: Gio.Cancellable | null, uid: string | null, rid: string | null, attachments: string[]): void

    // Overloads of getAttachmentUris

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
    getAttachmentUris(uid: string | null, rid: string | null, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
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
    getAttachmentUris(uid: string | null, rid: string | null, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Calls the get_free_busy_sync method on the given backend.
     * @param cal An EDataCal object.
     * @param cancellable a #GCancellable for the operation
     * @param users List of users to get F/B info from.
     * @param start Time range start.
     * @param end Time range end.
     */
    getFreeBusy(cal: DataCal, cancellable: Gio.Cancellable | null, users: string[], start: number, end: number): /* freebusyobjects */ string[]

    // Overloads of getFreeBusy

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
    getFreeBusy(start: number, end: number, users: string[], cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
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
    getFreeBusy(start: number, end: number, users: string[], cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Calls the get_object_sync method on the given backend.
     * @param cal An EDataCal object.
     * @param cancellable a #GCancellable for the operation
     * @param uid UID of the object to get.
     * @param rid Recurrence ID of the specific instance to get, or %NULL if    getting the master object.
     */
    getObject(cal: DataCal, cancellable: Gio.Cancellable | null, uid: string | null, rid: string | null): /* calobj */ string | null

    // Overloads of getObject

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
    getObject(uid: string | null, rid: string | null, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
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
    getObject(uid: string | null, rid: string | null, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Calls the get_object_list_sync method on the given backend.
     * @param cal An EDataCal object.
     * @param cancellable a #GCancellable for the operation
     * @param sexp Search query.
     */
    getObjectList(cal: DataCal, cancellable: Gio.Cancellable | null, sexp: string | null): /* calobjs */ string[]

    // Overloads of getObjectList

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
    getObjectList(query: string | null, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
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
    getObjectList(query: string | null, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Calls the modify_objects_sync method on the given backend.
     * @param cal An EDataCal object.
     * @param cancellable a #GCancellable for the operation
     * @param calobjs Objects to be modified.
     * @param mod Type of modification to be done.
     * @param opflags bit-or of #ECalOperationFlags
     */
    modifyObjects(cal: DataCal, cancellable: Gio.Cancellable | null, calobjs: string[], mod: ECal.ObjModType, opflags: ECal.OperationFlags): [ /* oldComponents */ ECal.Component[], /* newComponents */ ECal.Component[] ]

    // Overloads of modifyObjects

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
    modifyObjects(calobjs: string | null, mod: ECal.ObjModType, opflags: ECal.OperationFlags, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
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
    modifyObjects(calobjs: string | null, mod: ECal.ObjModType, opflags: ECal.OperationFlags, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
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
    open(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
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
    open(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Calls the receive_objects_sync method on the given backend.
     * @param cal An EDataCal object.
     * @param cancellable a #GCancellable for the operation
     * @param calobj iCalendar object to receive.
     * @param opflags bit-or of #ECalOperationFlags
     */
    receiveObjects(cal: DataCal, cancellable: Gio.Cancellable | null, calobj: string | null, opflags: ECal.OperationFlags): void

    // Overloads of receiveObjects

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
    receiveObjects(calobj: string | null, opflags: ECal.OperationFlags, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
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
    receiveObjects(calobj: string | null, opflags: ECal.OperationFlags, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
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
    refresh(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
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
    refresh(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Calls the remove_objects_sync method on the given backend.
     * @param cal An EDataCal object.
     * @param cancellable a #GCancellable for the operation
     * @param ids List of #ECalComponentId objects identifying the objects to remove.
     * @param mod Type of removal.
     * @param opflags bit-or of #ECalOperationFlags
     */
    removeObjects(cal: DataCal, cancellable: Gio.Cancellable | null, ids: ECal.ComponentId[], mod: ECal.ObjModType, opflags: ECal.OperationFlags): [ /* oldComponents */ ECal.Component[], /* newComponents */ ECal.Component[] ]

    // Overloads of removeObjects

    /**
     * Asynchronously removes one or more iCalendar objects according to
     * `component_ids` and `mod`.
     * 
     * When the operation is finished, `callback` will be called.  You can then
     * call e_cal_backend_remove_objects_finish() to get the result of the
     * operation.
     * @param componentIds a #GList of #ECalComponentId structs
     * @param mod modification type for recurrences
     * @param opflags bit-or of #ECalOperationFlags
     * @param cancellable optional #GCancellable object, or %NULL
     * @param callback a #GAsyncReadyCallback to call when the request is satisfied
     */
    removeObjects(componentIds: ECal.ComponentId[], mod: ECal.ObjModType, opflags: ECal.OperationFlags, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Asynchronously removes one or more iCalendar objects according to
     * `component_ids` and `mod`.
     * 
     * When the operation is finished, `callback` will be called.  You can then
     * call e_cal_backend_remove_objects_finish() to get the result of the
     * operation.
     * @param componentIds a #GList of #ECalComponentId structs
     * @param mod modification type for recurrences
     * @param opflags bit-or of #ECalOperationFlags
     * @param cancellable optional #GCancellable object, or %NULL
     * @param callback a #GAsyncReadyCallback to call when the request is satisfied
     */
    removeObjects(componentIds: ECal.ComponentId[], mod: ECal.ObjModType, opflags: ECal.OperationFlags, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Calls the send_objects_sync method on the given backend.
     * @param cal An EDataCal object.
     * @param cancellable a #GCancellable for the operation
     * @param calobj The iCalendar object to send.
     * @param opflags bit-or of #ECalOperationFlags
     * @param users List of users to send notifications to.
     */
    sendObjects(cal: DataCal, cancellable: Gio.Cancellable | null, calobj: string | null, opflags: ECal.OperationFlags, users: string[]): /* modifiedCalobj */ string | null

    // Overloads of sendObjects

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
    sendObjects(calobj: string | null, opflags: ECal.OperationFlags, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
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
    sendObjects(calobj: string | null, opflags: ECal.OperationFlags, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    addTimezoneSync(cal: DataCal, cancellable: Gio.Cancellable | null, tzobject: string | null): void

    // Overloads of addTimezoneSync

    /**
     * Adds the timezone described by `tzobject` to `backend`.
     * 
     * If an error occurs, the function will set `error` and return %FALSE.
     * @param tzobject an iCalendar VTIMEZONE string
     * @param cancellable optional #GCancellable object, or %NULL
     * @returns %TRUE on success, %FALSE on failure
     */
    addTimezoneSync(tzobject: string | null, cancellable: Gio.Cancellable | null): boolean
    /**
     * Adds the timezone described by `tzobject` to `backend`.
     * 
     * If an error occurs, the function will set `error` and return %FALSE.
     * @param tzobject an iCalendar VTIMEZONE string
     * @param cancellable optional #GCancellable object, or %NULL
     * @returns %TRUE on success, %FALSE on failure
     */
    addTimezoneSync(tzobject: string | null, cancellable: Gio.Cancellable | null): boolean
    discardAlarmSync(cal: DataCal, cancellable: Gio.Cancellable | null, uid: string | null, rid: string | null, auid: string | null, opflags: ECal.OperationFlags): void

    // Overloads of discardAlarmSync

    /**
     * Discards the VALARM object with a unique ID of `alarm_uid` from the
     * iCalendar object identified by `uid` and, optionally, `rid`.
     * 
     * If an error occurs, the function will set `error` and return %FALSE.
     * @param uid a unique ID for an iCalendar object
     * @param rid a recurrence ID, or %NULL
     * @param alarmUid a unique ID for an iCalendar VALARM object
     * @param opflags bit-or of #ECalOperationFlags
     * @param cancellable optional #GCancellable object, or %NULL
     * @returns %TRUE on success, %FALSE on failure
     */
    discardAlarmSync(uid: string | null, rid: string | null, alarmUid: string | null, opflags: ECal.OperationFlags, cancellable: Gio.Cancellable | null): boolean
    /**
     * Discards the VALARM object with a unique ID of `alarm_uid` from the
     * iCalendar object identified by `uid` and, optionally, `rid`.
     * 
     * If an error occurs, the function will set `error` and return %FALSE.
     * @param uid a unique ID for an iCalendar object
     * @param rid a recurrence ID, or %NULL
     * @param alarmUid a unique ID for an iCalendar VALARM object
     * @param opflags bit-or of #ECalOperationFlags
     * @param cancellable optional #GCancellable object, or %NULL
     * @returns %TRUE on success, %FALSE on failure
     */
    discardAlarmSync(uid: string | null, rid: string | null, alarmUid: string | null, opflags: ECal.OperationFlags, cancellable: Gio.Cancellable | null): boolean
    getObjectSync(cal: DataCal, cancellable: Gio.Cancellable | null, uid: string | null, rid: string | null, calobj: string | null): void

    // Overloads of getObjectSync

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
    getObjectSync(uid: string | null, rid: string | null, cancellable: Gio.Cancellable | null): string | null
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
    getObjectSync(uid: string | null, rid: string | null, cancellable: Gio.Cancellable | null): string | null
    getTimezoneSync(cal: DataCal, cancellable: Gio.Cancellable | null, tzid: string | null, tzobject: string | null): void

    // Overloads of getTimezoneSync

    /**
     * Obtains the VTIMEZONE object identified by `tzid`.  Free the returned
     * string with g_free() when finished with it.
     * 
     * If an error occurs, the function will set `error` and return %NULL.
     * @param tzid a unique ID for an iCalendar VTIMEZONE object
     * @param cancellable optional #GCancellable object, or %NULL
     * @returns an iCalendar string, or %NULL on error
     */
    getTimezoneSync(tzid: string | null, cancellable: Gio.Cancellable | null): string | null
    /**
     * Obtains the VTIMEZONE object identified by `tzid`.  Free the returned
     * string with g_free() when finished with it.
     * 
     * If an error occurs, the function will set `error` and return %NULL.
     * @param tzid a unique ID for an iCalendar VTIMEZONE object
     * @param cancellable optional #GCancellable object, or %NULL
     * @returns an iCalendar string, or %NULL on error
     */
    getTimezoneSync(tzid: string | null, cancellable: Gio.Cancellable | null): string | null
    openSync(cal: DataCal, cancellable: Gio.Cancellable | null): void

    // Overloads of openSync

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
    openSync(cancellable: Gio.Cancellable | null): boolean
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
    openSync(cancellable: Gio.Cancellable | null): boolean
    receiveObjectsSync(cal: DataCal, cancellable: Gio.Cancellable | null, calobj: string | null, opflags: ECal.OperationFlags): void

    // Overloads of receiveObjectsSync

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
    receiveObjectsSync(calobj: string | null, opflags: ECal.OperationFlags, cancellable: Gio.Cancellable | null): boolean
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
    receiveObjectsSync(calobj: string | null, opflags: ECal.OperationFlags, cancellable: Gio.Cancellable | null): boolean

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
    connectSync(credentials: EDataServer.NamedParameters | null, cancellable: Gio.Cancellable | null): [ /* returnType */ boolean, /* outAuthResult */ EDataServer.SourceAuthenticationResult, /* outCertificatePem */ string | null, /* outCertificateErrors */ Gio.TlsCertificateFlags ]
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
    disconnectSync(cancellable: Gio.Cancellable | null): boolean
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
     * @param lastSyncTag optional sync tag from the last check
     * @param isRepeat set to %TRUE when this is the repeated call
     * @param cancellable optional #GCancellable object, or %NULL
     * @returns Whether succeeded.
     */
    getChangesSync(lastSyncTag: string | null, isRepeat: boolean, cancellable: Gio.Cancellable | null): [ /* returnType */ boolean, /* outNewSyncTag */ string | null, /* outRepeat */ boolean, /* outCreatedObjects */ CalMetaBackendInfo[], /* outModifiedObjects */ CalMetaBackendInfo[], /* outRemovedObjects */ CalMetaBackendInfo[] ]
    /**
     * It is optional to implement this virtual method by the descendants.
     * It is used to receive SSL error details when any online operation
     * returns E_CLIENT_ERROR, E_CLIENT_ERROR_TLS_NOT_AVAILABLE error.
     * @virtual 
     * @returns %TRUE, when the SSL error details had been available and    the out parameters populated, %FALSE otherwise.
     */
    getSslErrorDetails(): [ /* returnType */ boolean, /* outCertificatePem */ string | null, /* outCertificateErrors */ Gio.TlsCertificateFlags ]
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
    listExistingSync(cancellable: Gio.Cancellable | null): [ /* returnType */ boolean, /* outNewSyncTag */ string | null, /* outExistingObjects */ CalMetaBackendInfo[] ]
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
    loadComponentSync(uid: string | null, extra: string | null, cancellable: Gio.Cancellable | null): [ /* returnType */ boolean, /* outComponent */ ICalGLib.Component, /* outExtra */ string | null ]
    /**
     * Removes a component from the remote side, with all its detached instances.
     * The `object` is not %NULL when it's removing locally deleted object
     * in offline mode. Being it %NULL, the descendant can obtain the object
     * from the #ECalCache.
     * 
     * It is mandatory to implement this virtual method by the writable descendant.
     * @virtual 
     * @param conflictResolution an #EConflictResolution to use
     * @param uid a component UID
     * @param extra extra data being saved with the component in the local cache, or %NULL
     * @param object corresponding iCalendar object, as stored in the local cache, or %NULL
     * @param opflags bit-or of #ECalOperationFlags
     * @param cancellable optional #GCancellable object, or %NULL
     * @returns Whether succeeded.
     */
    removeComponentSync(conflictResolution: EDataServer.ConflictResolution, uid: string | null, extra: string | null, object: string | null, opflags: ECal.OperationFlags, cancellable: Gio.Cancellable | null): boolean
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
    requiresReconnect(): boolean
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
     * @param overwriteExisting %TRUE when can overwrite existing components, %FALSE otherwise
     * @param conflictResolution one of #EConflictResolution, what to do on conflicts
     * @param instances instances of the component to save
     * @param extra extra data saved with the components in an #ECalCache
     * @param opflags bit-or of #ECalOperationFlags
     * @param cancellable optional #GCancellable object, or %NULL
     * @returns Whether succeeded.
     */
    saveComponentSync(overwriteExisting: boolean, conflictResolution: EDataServer.ConflictResolution, instances: ECal.Component[], extra: string | null, opflags: ECal.OperationFlags, cancellable: Gio.Cancellable | null): [ /* returnType */ boolean, /* outNewUid */ string | null, /* outNewExtra */ string | null ]
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
    searchComponentsSync(expr: string | null, cancellable: Gio.Cancellable | null): [ /* returnType */ boolean, /* outComponents */ ECal.Component[] ]
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
    searchSync(expr: string | null, cancellable: Gio.Cancellable | null): [ /* returnType */ boolean, /* outIcalstrings */ string[] ]
    sourceChanged(): void

    // Own signals of EDataCal-2.0.EDataCal.CalMetaBackend

    connect(sigName: "refresh-completed", callback: CalMetaBackend.RefreshCompletedSignalCallback): number
    on(sigName: "refresh-completed", callback: CalMetaBackend.RefreshCompletedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "refresh-completed", callback: CalMetaBackend.RefreshCompletedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "refresh-completed", callback: CalMetaBackend.RefreshCompletedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "refresh-completed", ...args: any[]): void
    connect(sigName: "source-changed", callback: CalMetaBackend.SourceChangedSignalCallback): number
    on(sigName: "source-changed", callback: CalMetaBackend.SourceChangedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "source-changed", callback: CalMetaBackend.SourceChangedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "source-changed", callback: CalMetaBackend.SourceChangedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "source-changed", ...args: any[]): void

    // Class property signals of EDataCal-2.0.EDataCal.CalMetaBackend

    connect(sigName: "notify::cache", callback: (...args: any[]) => void): number
    on(sigName: "notify::cache", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::cache", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::cache", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::cache", ...args: any[]): void
    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: "notify::cache-dir", callback: (...args: any[]) => void): number
    on(sigName: "notify::cache-dir", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::cache-dir", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::cache-dir", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::cache-dir", ...args: any[]): void
    connect(sigName: "notify::kind", callback: (...args: any[]) => void): number
    on(sigName: "notify::kind", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::kind", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::kind", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::kind", ...args: any[]): void
    connect(sigName: "notify::proxy-resolver", callback: (...args: any[]) => void): number
    on(sigName: "notify::proxy-resolver", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::proxy-resolver", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::proxy-resolver", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::proxy-resolver", ...args: any[]): void
    connect(sigName: "notify::registry", callback: (...args: any[]) => void): number
    on(sigName: "notify::registry", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::registry", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::registry", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::registry", ...args: any[]): void
    connect(sigName: "notify::writable", callback: (...args: any[]) => void): number
    on(sigName: "notify::writable", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::writable", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::writable", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::writable", ...args: any[]): void
    connect(sigName: "notify::connectable", callback: (...args: any[]) => void): number
    on(sigName: "notify::connectable", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::connectable", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::connectable", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::connectable", ...args: any[]): void
    connect(sigName: "notify::main-context", callback: (...args: any[]) => void): number
    on(sigName: "notify::main-context", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::main-context", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::main-context", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::main-context", ...args: any[]): void
    connect(sigName: "notify::online", callback: (...args: any[]) => void): number
    on(sigName: "notify::online", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::online", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::online", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::online", ...args: any[]): void
    connect(sigName: "notify::source", callback: (...args: any[]) => void): number
    on(sigName: "notify::source", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::source", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::source", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::source", ...args: any[]): void
    connect(sigName: "notify::user-prompter", callback: (...args: any[]) => void): number
    on(sigName: "notify::user-prompter", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::user-prompter", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::user-prompter", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::user-prompter", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * Contains only private data that should be read and manipulated using
 * the functions below.
 * @class 
 */
export class CalMetaBackend extends CalBackendSync {

    // Own properties of EDataCal-2.0.EDataCal.CalMetaBackend

    static name: string

    // Constructors of EDataCal-2.0.EDataCal.CalMetaBackend

    constructor(config?: CalMetaBackend.ConstructorProperties) 
    _init(config?: CalMetaBackend.ConstructorProperties): void
}

export module DataCal {

    // Constructor properties interface

    export interface ConstructorProperties extends Gio.Initable.ConstructorProperties, GObject.Object.ConstructorProperties {

        // Own constructor properties of EDataCal-2.0.EDataCal.DataCal

        backend?: CalBackend | null
        connection?: Gio.DBusConnection | null
        objectPath?: string | null
    }

}

export interface DataCal extends Gio.Initable {

    // Own properties of EDataCal-2.0.EDataCal.DataCal

    readonly backend: CalBackend
    readonly connection: Gio.DBusConnection
    readonly objectPath: string | null
    __gtype__: number

    // Own fields of EDataCal-2.0.EDataCal.DataCal

    parent: GObject.Object
    priv: DataCalPrivate

    // Owm methods of EDataCal-2.0.EDataCal.DataCal

    /**
     * Returns the #GDBusConnection on which the Calendar D-Bus interface
     * is exported.
     * @returns the #GDBusConnection
     */
    getConnection(): Gio.DBusConnection
    /**
     * Returns the object path at which the Calendar D-Bus interface is
     * exported.
     * @returns the object path
     */
    getObjectPath(): string | null
    /**
     * Returns the #ECalBackend to which incoming remote method invocations
     * are being forwarded.
     * 
     * The returned #ECalBackend is referenced for thread-safety and should
     * be unreferenced with g_object_unref() when finished with it.
     * @returns an #ECalBackend
     */
    refBackend(): CalBackend | null
    /**
     * Notifies client about certain property value change
     * @param propName property name
     * @param propValue new property value
     */
    reportBackendPropertyChanged(propName: string | null, propValue: string | null): void
    /**
     * Emits an error message, thus the clients can be notified about it.
     * @param message an error message to report
     */
    reportError(message: string | null): void
    /**
     * Reports result of a free/busy query on the `cal`.
     * @param freebusy a #GSList of free/busy components encoded as string
     */
    reportFreeBusyData(freebusy: string[]): void
    /**
     * Notifies listeners of the completion of the add_timezone method call.
     * @param opid associated operation id
     * @param error Operation error, if any, automatically freed if passed it.
     */
    respondAddTimezone(opid: number, error: GLib.Error): void
    /**
     * Notifies listeners of the completion of the create_objects method call.
     * @param opid associated operation id
     * @param error Operation error, if any, automatically freed if passed it.
     * @param uids UIDs of the objects created.
     * @param newComponents The newly created #ECalComponent objects.
     */
    respondCreateObjects(opid: number, error: GLib.Error, uids: string[], newComponents: ECal.Component[]): void
    /**
     * Notifies listeners of the completion of the discard_alarm method call.
     * @param opid associated operation id
     * @param error Operation error, if any, automatically freed if passed it.
     */
    respondDiscardAlarm(opid: number, error: GLib.Error): void
    /**
     * Notifies listeners of the completion of the get_attachment_uris method call.
     * @param opid associated operation id
     * @param error Operation error, if any, automatically freed if passed it.
     * @param attachmentUris List of retrieved attachment uri's.
     */
    respondGetAttachmentUris(opid: number, error: GLib.Error, attachmentUris: string[]): void
    /**
     * Notifies listeners of the completion of the get_free_busy method call.
     * To pass actual free/busy objects to the client asynchronously
     * use e_data_cal_report_free_busy_data(), but the `freebusy` should contain
     * all the objects being used in e_data_cal_report_free_busy_data().
     * @param opid associated operation id
     * @param error Operation error, if any, automatically freed if passed it.
     * @param freebusy a #GSList of iCalendar strings with all gathered free/busy components.
     */
    respondGetFreeBusy(opid: number, error: GLib.Error, freebusy: string[]): void
    /**
     * Notifies listeners of the completion of the get_object method call.
     * @param opid associated operation id
     * @param error Operation error, if any, automatically freed if passed it.
     * @param object The object retrieved as an iCalendar string.
     */
    respondGetObject(opid: number, error: GLib.Error, object: string | null): void
    /**
     * Notifies listeners of the completion of the get_object_list method call.
     * @param opid associated operation id
     * @param error Operation error, if any, automatically freed if passed it.
     * @param objects List of retrieved objects.
     */
    respondGetObjectList(opid: number, error: GLib.Error, objects: string[]): void
    /**
     * Notifies listeners of the completion of the get_timezone method call.
     * @param opid associated operation id
     * @param error Operation error, if any, automatically freed if passed it.
     * @param tzobject The requested timezone as an iCalendar string.
     */
    respondGetTimezone(opid: number, error: GLib.Error, tzobject: string | null): void
    /**
     * Notifies listeners of the completion of the modify_objects method call.
     * @param opid associated operation id
     * @param error Operation error, if any, automatically freed if passed it.
     * @param oldComponents The old #ECalComponent(s).
     * @param newComponents The new #ECalComponent(s).
     */
    respondModifyObjects(opid: number, error: GLib.Error, oldComponents: ECal.Component[], newComponents: ECal.Component[]): void
    /**
     * Notifies listeners of the completion of the open method call.
     * @param opid associated operation id
     * @param error Operation error, if any, automatically freed if passed it.
     */
    respondOpen(opid: number, error: GLib.Error): void
    /**
     * Notifies listeners of the completion of the receive_objects method call.
     * @param opid associated operation id
     * @param error Operation error, if any, automatically freed if passed it.
     */
    respondReceiveObjects(opid: number, error: GLib.Error): void
    /**
     * Notifies listeners of the completion of the refresh method call.
     * @param opid associated operation id
     * @param error Operation error, if any, automatically freed if passed it.
     */
    respondRefresh(opid: number, error: GLib.Error): void
    /**
     * Notifies listeners of the completion of the remove_objects method call.
     * @param opid associated operation id
     * @param error Operation error, if any, automatically freed if passed it.
     * @param ids IDs of the removed objects.
     * @param oldComponents The old #ECalComponent(s).
     * @param newComponents The new #ECalComponent(s).    They will not be NULL only when removing instances of recurring appointments.
     */
    respondRemoveObjects(opid: number, error: GLib.Error, ids: ECal.ComponentId[], oldComponents: ECal.Component[], newComponents: ECal.Component[]): void
    /**
     * Notifies listeners of the completion of the send_objects method call.
     * @param opid associated operation id
     * @param error Operation error, if any, automatically freed if passed it.
     * @param users List of users.
     * @param calobj An iCalendar string representing the object sent.
     */
    respondSendObjects(opid: number, error: GLib.Error, users: string[], calobj: string | null): void

    // Class property signals of EDataCal-2.0.EDataCal.DataCal

    connect(sigName: "notify::backend", callback: (...args: any[]) => void): number
    on(sigName: "notify::backend", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::backend", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::backend", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::backend", ...args: any[]): void
    connect(sigName: "notify::connection", callback: (...args: any[]) => void): number
    on(sigName: "notify::connection", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::connection", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::connection", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::connection", ...args: any[]): void
    connect(sigName: "notify::object-path", callback: (...args: any[]) => void): number
    on(sigName: "notify::object-path", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::object-path", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::object-path", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::object-path", ...args: any[]): void
    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class DataCal extends GObject.Object {

    // Own properties of EDataCal-2.0.EDataCal.DataCal

    static name: string

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
     * @param objectPath object path for the D-Bus interface
     * @returns an #EDataCal, or %NULL on error
     */
    constructor(backend: CalBackend, connection: Gio.DBusConnection, objectPath: string | null) 
    /**
     * Creates a new #EDataCal and exports the Calendar D-Bus interface
     * on `connection` at `object_path`.  The #EDataCal handles incoming remote
     * method invocations and forwards them to the `backend`.  If the Calendar
     * interface fails to export, the function sets `error` and returns %NULL.
     * @constructor 
     * @param backend an #ECalBackend
     * @param connection a #GDBusConnection
     * @param objectPath object path for the D-Bus interface
     * @returns an #EDataCal, or %NULL on error
     */
    static new(backend: CalBackend, connection: Gio.DBusConnection, objectPath: string | null): DataCal
    _init(config?: DataCal.ConstructorProperties): void
}

export module DataCalFactory {

    // Constructor properties interface

    export interface ConstructorProperties extends EDataServer.Extensible.ConstructorProperties, Gio.Initable.ConstructorProperties, EBackend.DataFactory.ConstructorProperties {
    }

}

export interface DataCalFactory extends EDataServer.Extensible, Gio.Initable {

    // Own properties of EDataCal-2.0.EDataCal.DataCalFactory

    __gtype__: number

    // Own fields of EDataCal-2.0.EDataCal.DataCalFactory

    parent: EBackend.DataFactory
    priv: DataCalFactoryPrivate

    // Class property signals of EDataCal-2.0.EDataCal.DataCalFactory

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: "notify::backend-per-process", callback: (...args: any[]) => void): number
    on(sigName: "notify::backend-per-process", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::backend-per-process", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::backend-per-process", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::backend-per-process", ...args: any[]): void
    connect(sigName: "notify::registry", callback: (...args: any[]) => void): number
    on(sigName: "notify::registry", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::registry", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::registry", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::registry", ...args: any[]): void
    connect(sigName: "notify::reload-supported", callback: (...args: any[]) => void): number
    on(sigName: "notify::reload-supported", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::reload-supported", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::reload-supported", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::reload-supported", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class DataCalFactory extends EBackend.DataFactory {

    // Own properties of EDataCal-2.0.EDataCal.DataCalFactory

    static name: string

    // Constructors of EDataCal-2.0.EDataCal.DataCalFactory

    constructor(config?: DataCalFactory.ConstructorProperties) 
    constructor(backendPerProcess: number, cancellable: Gio.Cancellable | null) 
    static new(backendPerProcess: number, cancellable: Gio.Cancellable | null): DataCalFactory
    _init(config?: DataCalFactory.ConstructorProperties): void
}

export module DataCalView {

    // Constructor properties interface

    export interface ConstructorProperties extends Gio.Initable.ConstructorProperties, GObject.Object.ConstructorProperties {

        // Own constructor properties of EDataCal-2.0.EDataCal.DataCalView

        backend?: CalBackend | null
        connection?: Gio.DBusConnection | null
        objectPath?: string | null
        sexp?: CalBackendSExp | null
    }

}

export interface DataCalView extends Gio.Initable {

    // Own properties of EDataCal-2.0.EDataCal.DataCalView

    readonly backend: CalBackend
    readonly connection: Gio.DBusConnection
    readonly objectPath: string | null
    readonly sexp: CalBackendSExp
    __gtype__: number

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
    componentMatches(component: ECal.Component): boolean
    /**
     * This function is similar to e_cal_component_get_as_string() except
     * that it takes into account the fields-of-interest that `view` is
     * configured with and filters out any unneeded fields.
     * @param component The #ECalComponent to get the string for.
     * @returns A newly allocated string representation of @component suitable for @view.
     */
    getComponentString(component: ECal.Component): string | null
    /**
     * Returns the #GDBusConnection on which the CalendarView D-Bus
     * interface is exported.
     * @returns the #GDBusConnection
     */
    getConnection(): Gio.DBusConnection
    getFieldsOfInterest(): GLib.HashTable | null
    /**
     * Gets the #ECalClientViewFlags that control the behaviour of `view`.
     * @returns the flags for @view.
     */
    getFlags(): ECal.ClientViewFlags
    /**
     * Return the object path at which the CalendarView D-Bus inteface is
     * exported.
     * @returns the object path
     */
    getObjectPath(): string | null
    /**
     * Get the #ECalBackendSExp object used for the given view.
     * @returns The expression object used to search.
     */
    getSexp(): any | null
    /**
     * Checks whether the given view is already completed. Being completed means the initial
     * matching of objects have been finished, not that no more notifications about
     * changes will be sent. In fact, even after completed, notifications will still be sent
     * if there are changes in the objects matching the view search expression.
     * @returns TRUE if the view is completed, FALSE if still in progress.
     */
    isCompleted(): boolean
    /**
     * Checks whether the given view has already been started.
     * @returns TRUE if the view has already been started, FALSE otherwise.
     */
    isStarted(): boolean
    /**
     * Checks whether the given view has been stopped.
     * @returns TRUE if the view has been stopped, FALSE otherwise.
     */
    isStopped(): boolean
    /**
     * Notifies all view listeners of the completion of the view, including a
     * status code.
     * @param error View completion error, if any.
     */
    notifyComplete(error: GLib.Error): void
    /**
     * Notifies all view listeners of the addition of a list of components.
     * 
     * Uses the #EDataCalView's fields-of-interest to filter out unwanted
     * information from iCalendar strings sent over the bus.
     * @param ecalcomponents List of #ECalComponent-s that have been added.
     */
    notifyComponentsAdded(ecalcomponents: ECal.Component[]): void
    /**
     * Notifies all the view listeners of the addition of a single object.
     * 
     * Uses the #EDataCalView's fields-of-interest to filter out unwanted
     * information from iCalendar strings sent over the bus.
     * @param component The #ECalComponent that has been added.
     */
    notifyComponentsAdded1(component: ECal.Component): void
    /**
     * Notifies all view listeners of the modification of a list of components.
     * 
     * Uses the #EDataCalView's fields-of-interest to filter out unwanted
     * information from iCalendar strings sent over the bus.
     * @param ecalcomponents List of modified #ECalComponent-s.
     */
    notifyComponentsModified(ecalcomponents: ECal.Component[]): void
    /**
     * Notifies all view listeners of the modification of `component`.
     * 
     * Uses the #EDataCalView's fields-of-interest to filter out unwanted
     * information from iCalendar strings sent over the bus.
     * @param component The modified #ECalComponent.
     */
    notifyComponentsModified1(component: ECal.Component): void
    /**
     * Notifies all view listener of the removal of a list of objects.
     * @param ids List of IDs for the objects that have been removed.
     */
    notifyObjectsRemoved(ids: ECal.ComponentId[]): void
    /**
     * Notifies all view listener of the removal of a single object.
     * @param id ID of the removed object.
     */
    notifyObjectsRemoved1(id: ECal.ComponentId): void
    /**
     * Notifies all view listeners of progress messages.
     * @param percent Percentage completed.
     * @param message Progress message to send to listeners.
     */
    notifyProgress(percent: number, message: string | null): void
    /**
     * Compares the given `object` to the regular expression used for the
     * given view.
     * @param object Object to match.
     * @returns TRUE if the object matches the expression, FALSE if not.
     */
    objectMatches(object: string | null): boolean
    /**
     * Refs the backend that `view` is querying. Unref the returned backend,
     * if not %NULL, with g_object_unref(), when no longer needed.
     * @returns The associated #ECalBackend.
     */
    refBackend(): CalBackend | null

    // Class property signals of EDataCal-2.0.EDataCal.DataCalView

    connect(sigName: "notify::backend", callback: (...args: any[]) => void): number
    on(sigName: "notify::backend", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::backend", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::backend", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::backend", ...args: any[]): void
    connect(sigName: "notify::connection", callback: (...args: any[]) => void): number
    on(sigName: "notify::connection", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::connection", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::connection", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::connection", ...args: any[]): void
    connect(sigName: "notify::object-path", callback: (...args: any[]) => void): number
    on(sigName: "notify::object-path", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::object-path", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::object-path", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::object-path", ...args: any[]): void
    connect(sigName: "notify::sexp", callback: (...args: any[]) => void): number
    on(sigName: "notify::sexp", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::sexp", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::sexp", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::sexp", ...args: any[]): void
    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class DataCalView extends GObject.Object {

    // Own properties of EDataCal-2.0.EDataCal.DataCalView

    static name: string

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
     * @param objectPath an object path for the view
     * @returns a new #EDataCalView, or %NULL on error
     */
    constructor(backend: any | null, sexp: any | null, connection: Gio.DBusConnection, objectPath: string | null) 
    /**
     * Creates a new #EDataCalView and exports its D-Bus interface on
     * `connection` at `object_path`.  If an error occurs while exporting,
     * the function sets `error` and returns %NULL.
     * @constructor 
     * @param backend an #ECalBackend
     * @param sexp an #ECalBackendSExp
     * @param connection a #GDBusConnection
     * @param objectPath an object path for the view
     * @returns a new #EDataCalView, or %NULL on error
     */
    static new(backend: any | null, sexp: any | null, connection: Gio.DBusConnection, objectPath: string | null): DataCalView
    _init(config?: DataCalView.ConstructorProperties): void
}

export module IntervalTree {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

export interface IntervalTree {

    // Own properties of EDataCal-2.0.EDataCal.IntervalTree

    __gtype__: number

    // Owm methods of EDataCal-2.0.EDataCal.IntervalTree

    destroy(): void
    dump(): void
    insert(start: number, end: number, comp: ECal.Component): boolean
    remove(uid: string | null, rid: string | null): boolean
    search(start: number, end: number): ECal.Component[] | null

    // Class property signals of EDataCal-2.0.EDataCal.IntervalTree

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * Contains only private data that should be read and manipulated using the
 * functions below.
 * @class 
 */
export class IntervalTree extends GObject.Object {

    // Own properties of EDataCal-2.0.EDataCal.IntervalTree

    static name: string

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

export module SubprocessCalFactory {

    // Constructor properties interface

    export interface ConstructorProperties extends Gio.Initable.ConstructorProperties, EBackend.SubprocessFactory.ConstructorProperties {
    }

}

export interface SubprocessCalFactory extends Gio.Initable {

    // Own properties of EDataCal-2.0.EDataCal.SubprocessCalFactory

    __gtype__: number

    // Own fields of EDataCal-2.0.EDataCal.SubprocessCalFactory

    parent: EBackend.SubprocessFactory
    priv: SubprocessCalFactoryPrivate

    // Class property signals of EDataCal-2.0.EDataCal.SubprocessCalFactory

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: "notify::registry", callback: (...args: any[]) => void): number
    on(sigName: "notify::registry", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::registry", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::registry", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::registry", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class SubprocessCalFactory extends EBackend.SubprocessFactory {

    // Own properties of EDataCal-2.0.EDataCal.SubprocessCalFactory

    static name: string

    // Constructors of EDataCal-2.0.EDataCal.SubprocessCalFactory

    constructor(config?: SubprocessCalFactory.ConstructorProperties) 
    constructor(cancellable: Gio.Cancellable | null) 
    static new(cancellable: Gio.Cancellable | null): SubprocessCalFactory
    _init(config?: SubprocessCalFactory.ConstructorProperties): void
}

export interface CalBackendClass {

    // Own fields of EDataCal-2.0.EDataCal.CalBackendClass

    /**
     * Whether a serial dispatch queue should
     *                             be used for this backend or not. The default is %TRUE.
     * @field 
     */
    useSerialDispatchQueue: boolean
    implGetBackendProperty: (backend: CalBackend, propName: string | null) => string | null
    implOpen: (backend: CalBackend, cal: DataCal, opid: number, cancellable: Gio.Cancellable | null) => void
    implRefresh: (backend: CalBackend, cal: DataCal, opid: number, cancellable: Gio.Cancellable | null) => void
    implGetObject: (backend: CalBackend, cal: DataCal, opid: number, cancellable: Gio.Cancellable | null, uid: string | null, rid: string | null) => void
    implGetObjectList: (backend: CalBackend, cal: DataCal, opid: number, cancellable: Gio.Cancellable | null, sexp: string | null) => void
    implReceiveObjects: (backend: CalBackend, cal: DataCal, opid: number, cancellable: Gio.Cancellable | null, calobj: string | null, opflags: ECal.OperationFlags) => void
    implSendObjects: (backend: CalBackend, cal: DataCal, opid: number, cancellable: Gio.Cancellable | null, calobj: string | null, opflags: ECal.OperationFlags) => void
    implGetAttachmentUris: (backend: CalBackend, cal: DataCal, opid: number, cancellable: Gio.Cancellable | null, uid: string | null, rid: string | null) => void
    implDiscardAlarm: (backend: CalBackend, cal: DataCal, opid: number, cancellable: Gio.Cancellable | null, uid: string | null, rid: string | null, auid: string | null, opflags: ECal.OperationFlags) => void
    implGetTimezone: (backend: CalBackend, cal: DataCal, opid: number, cancellable: Gio.Cancellable | null, tzid: string | null) => void
    implAddTimezone: (backend: CalBackend, cal: DataCal, opid: number, cancellable: Gio.Cancellable | null, tzobject: string | null) => void
    implStartView: (backend: CalBackend, view: DataCalView) => void
    implStopView: (backend: CalBackend, view: DataCalView) => void
    closed: (backend: CalBackend, sender: string | null) => void
    shutdown: (backend: CalBackend) => void
    reservedPadding: any[]
}

/**
 * Class structure for the #ECalBackend class.
 * 
 * These virtual methods must be implemented when writing
 * a calendar backend.
 * @record 
 */
export abstract class CalBackendClass {

    // Own properties of EDataCal-2.0.EDataCal.CalBackendClass

    static name: string
}

export interface CalBackendFactoryClass {

    // Own fields of EDataCal-2.0.EDataCal.CalBackendFactoryClass

    /**
     * The string identifier for this book backend type
     * @field 
     */
    factoryName: string | null
    /**
     * The type if component this calendar backend should be created for
     * @field 
     */
    componentKind: ICalGLib.ComponentKind
    /**
     * The #GType to use to build #EBookBackends for this factory
     * @field 
     */
    backendType: GObject.GType
}

/**
 * Class structure for the #ECalBackendFactory class.
 * 
 * Subclasses need to set the factory name and backend type
 * at initialization, the base class will take care of creating
 * backends of the specified type on demand.
 * @record 
 */
export abstract class CalBackendFactoryClass {

    // Own properties of EDataCal-2.0.EDataCal.CalBackendFactoryClass

    static name: string
}

export interface CalBackendFactoryPrivate {
}

export class CalBackendFactoryPrivate {

    // Own properties of EDataCal-2.0.EDataCal.CalBackendFactoryPrivate

    static name: string
}

export interface CalBackendPrivate {
}

export class CalBackendPrivate {

    // Own properties of EDataCal-2.0.EDataCal.CalBackendPrivate

    static name: string
}

export interface CalBackendSExpClass {
}

export abstract class CalBackendSExpClass {

    // Own properties of EDataCal-2.0.EDataCal.CalBackendSExpClass

    static name: string
}

export interface CalBackendSExpPrivate {
}

export class CalBackendSExpPrivate {

    // Own properties of EDataCal-2.0.EDataCal.CalBackendSExpPrivate

    static name: string
}

export interface CalBackendSyncClass {

    // Own fields of EDataCal-2.0.EDataCal.CalBackendSyncClass

    openSync: (backend: CalBackendSync, cal: DataCal, cancellable: Gio.Cancellable | null) => void
    refreshSync: (backend: CalBackendSync, cal: DataCal, cancellable: Gio.Cancellable | null) => void
    getObjectSync: (backend: CalBackendSync, cal: DataCal, cancellable: Gio.Cancellable | null, uid: string | null, rid: string | null, calobj: string | null) => void
    receiveObjectsSync: (backend: CalBackendSync, cal: DataCal, cancellable: Gio.Cancellable | null, calobj: string | null, opflags: ECal.OperationFlags) => void
    discardAlarmSync: (backend: CalBackendSync, cal: DataCal, cancellable: Gio.Cancellable | null, uid: string | null, rid: string | null, auid: string | null, opflags: ECal.OperationFlags) => void
    getTimezoneSync: (backend: CalBackendSync, cal: DataCal, cancellable: Gio.Cancellable | null, tzid: string | null, tzobject: string | null) => void
    addTimezoneSync: (backend: CalBackendSync, cal: DataCal, cancellable: Gio.Cancellable | null, tzobject: string | null) => void
    reservedPadding: any[]
}

/**
 * Base class structure for the #ECalBackendSync class
 * @record 
 */
export abstract class CalBackendSyncClass {

    // Own properties of EDataCal-2.0.EDataCal.CalBackendSyncClass

    static name: string
}

export interface CalBackendSyncPrivate {
}

export class CalBackendSyncPrivate {

    // Own properties of EDataCal-2.0.EDataCal.CalBackendSyncPrivate

    static name: string
}

export interface CalCacheClass {

    // Own fields of EDataCal-2.0.EDataCal.CalCacheClass

    dupComponentRevision: (calCache: CalCache, icomp: ICalGLib.Component) => string | null
}

/**
 * Class structure for the #ECalCache class.
 * @record 
 */
export abstract class CalCacheClass {

    // Own properties of EDataCal-2.0.EDataCal.CalCacheClass

    static name: string
}

export interface CalCacheOfflineChange {

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
export class CalCacheOfflineChange {

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

export interface CalCachePrivate {
}

export class CalCachePrivate {

    // Own properties of EDataCal-2.0.EDataCal.CalCachePrivate

    static name: string
}

export interface CalCacheSearchData {

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
export class CalCacheSearchData {

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

export interface CalMetaBackendClass {

    // Own fields of EDataCal-2.0.EDataCal.CalMetaBackendClass

    connectSync: (metaBackend: CalMetaBackend, credentials: EDataServer.NamedParameters | null, cancellable: Gio.Cancellable | null) => [ /* returnType */ boolean, /* outAuthResult */ EDataServer.SourceAuthenticationResult, /* outCertificatePem */ string | null, /* outCertificateErrors */ Gio.TlsCertificateFlags ]
    disconnectSync: (metaBackend: CalMetaBackend, cancellable: Gio.Cancellable | null) => boolean
    getChangesSync: (metaBackend: CalMetaBackend, lastSyncTag: string | null, isRepeat: boolean, cancellable: Gio.Cancellable | null) => [ /* returnType */ boolean, /* outNewSyncTag */ string | null, /* outRepeat */ boolean, /* outCreatedObjects */ CalMetaBackendInfo[], /* outModifiedObjects */ CalMetaBackendInfo[], /* outRemovedObjects */ CalMetaBackendInfo[] ]
    listExistingSync: (metaBackend: CalMetaBackend, cancellable: Gio.Cancellable | null) => [ /* returnType */ boolean, /* outNewSyncTag */ string | null, /* outExistingObjects */ CalMetaBackendInfo[] ]
    loadComponentSync: (metaBackend: CalMetaBackend, uid: string | null, extra: string | null, cancellable: Gio.Cancellable | null) => [ /* returnType */ boolean, /* outComponent */ ICalGLib.Component, /* outExtra */ string | null ]
    saveComponentSync: (metaBackend: CalMetaBackend, overwriteExisting: boolean, conflictResolution: EDataServer.ConflictResolution, instances: ECal.Component[], extra: string | null, opflags: ECal.OperationFlags, cancellable: Gio.Cancellable | null) => [ /* returnType */ boolean, /* outNewUid */ string | null, /* outNewExtra */ string | null ]
    removeComponentSync: (metaBackend: CalMetaBackend, conflictResolution: EDataServer.ConflictResolution, uid: string | null, extra: string | null, object: string | null, opflags: ECal.OperationFlags, cancellable: Gio.Cancellable | null) => boolean
    searchSync: (metaBackend: CalMetaBackend, expr: string | null, cancellable: Gio.Cancellable | null) => [ /* returnType */ boolean, /* outIcalstrings */ string[] ]
    searchComponentsSync: (metaBackend: CalMetaBackend, expr: string | null, cancellable: Gio.Cancellable | null) => [ /* returnType */ boolean, /* outComponents */ ECal.Component[] ]
    requiresReconnect: (metaBackend: CalMetaBackend) => boolean
    sourceChanged: (metaBackend: CalMetaBackend) => void
    getSslErrorDetails: (metaBackend: CalMetaBackend) => [ /* returnType */ boolean, /* outCertificatePem */ string | null, /* outCertificateErrors */ Gio.TlsCertificateFlags ]
}

/**
 * Class structure for the #ECalMetaBackend class.
 * @record 
 */
export abstract class CalMetaBackendClass {

    // Own properties of EDataCal-2.0.EDataCal.CalMetaBackendClass

    static name: string
}

export interface CalMetaBackendInfo {

    // Own fields of EDataCal-2.0.EDataCal.CalMetaBackendInfo

    uid: string | null
    revision: string | null
    object: string | null
    extra: string | null

    // Owm methods of EDataCal-2.0.EDataCal.CalMetaBackendInfo

    copy(): CalMetaBackendInfo
}

export class CalMetaBackendInfo {

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

export interface CalMetaBackendPrivate {
}

export class CalMetaBackendPrivate {

    // Own properties of EDataCal-2.0.EDataCal.CalMetaBackendPrivate

    static name: string
}

export interface DataCalClass {

    // Own fields of EDataCal-2.0.EDataCal.DataCalClass

    parentClass: GObject.ObjectClass
}

export abstract class DataCalClass {

    // Own properties of EDataCal-2.0.EDataCal.DataCalClass

    static name: string
}

export interface DataCalFactoryClass {

    // Own fields of EDataCal-2.0.EDataCal.DataCalFactoryClass

    parentClass: EBackend.DataFactoryClass
}

export abstract class DataCalFactoryClass {

    // Own properties of EDataCal-2.0.EDataCal.DataCalFactoryClass

    static name: string
}

export interface DataCalFactoryPrivate {
}

export class DataCalFactoryPrivate {

    // Own properties of EDataCal-2.0.EDataCal.DataCalFactoryPrivate

    static name: string
}

export interface DataCalPrivate {
}

export class DataCalPrivate {

    // Own properties of EDataCal-2.0.EDataCal.DataCalPrivate

    static name: string
}

export interface DataCalViewClass {

    // Own fields of EDataCal-2.0.EDataCal.DataCalViewClass

    parentClass: GObject.ObjectClass
}

export abstract class DataCalViewClass {

    // Own properties of EDataCal-2.0.EDataCal.DataCalViewClass

    static name: string
}

export interface DataCalViewPrivate {
}

export class DataCalViewPrivate {

    // Own properties of EDataCal-2.0.EDataCal.DataCalViewPrivate

    static name: string
}

export interface IntervalTreeClass {
}

/**
 * Class structure for the #EIntervalTree class.
 * @record 
 */
export abstract class IntervalTreeClass {

    // Own properties of EDataCal-2.0.EDataCal.IntervalTreeClass

    static name: string
}

export interface IntervalTreePrivate {
}

export class IntervalTreePrivate {

    // Own properties of EDataCal-2.0.EDataCal.IntervalTreePrivate

    static name: string
}

export interface SubprocessCalFactoryClass {

    // Own fields of EDataCal-2.0.EDataCal.SubprocessCalFactoryClass

    parentClass: EBackend.SubprocessFactoryClass
}

export abstract class SubprocessCalFactoryClass {

    // Own properties of EDataCal-2.0.EDataCal.SubprocessCalFactoryClass

    static name: string
}

export interface SubprocessCalFactoryPrivate {
}

export class SubprocessCalFactoryPrivate {

    // Own properties of EDataCal-2.0.EDataCal.SubprocessCalFactoryPrivate

    static name: string
}

// END