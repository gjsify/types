// @ts-nocheck

/*
 * Type Definitions for node-gtk (https://github.com/romgrk/node-gtk)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/sammydre/ts-for-gjs
 */
/**
 * EDataCal-2.0
 */

import type libxml2 from './libxml2-2.0';
import type Soup from './Soup-2.4';
import type Gio from './Gio-2.0';
import type GObject from './GObject-2.0';
import type GLib from './GLib-2.0';
import type ICalGLib from './ICalGLib-3.0';
import type EDataServer from './EDataServer-1.2';
import type GData from './GData-0.0';
import type Json from './Json-1.0';
import type Goa from './Goa-1.0';
import type Camel from './Camel-1.2';
import type ECal from './ECal-2.0';
import type EBackend from './EBackend-1.2';

export namespace EDataCal {

/**
 * This environment variable configures where the calendar
 * factory loads its backend modules from.
 */
const EDS_CALENDAR_MODULES: string
/**
 * This environment variable configures where the calendar
 * factory subprocess is located in.
 */
const EDS_SUBPROCESS_CAL_PATH: string
const INTERVALTREE_DEBUG: number
const LIBICAL_GLIB_UNSTABLE_API: number
/**
 * Frees the `change` structure, previously allocated with e_cal_cache_offline_change_new()
 * or e_cal_cache_offline_change_copy().
 * @param change an #ECalCacheOfflineChange
 */
function calCacheOfflineChangeFree(change: object | null): void
/**
 * Frees the `ptr` structure, previously allocated with e_cal_cache_search_data_new()
 * or e_cal_cache_search_data_copy().
 * @param ptr an #ECalCacheSearchData
 */
function calCacheSearchDataFree(ptr: object | null): void
/**
 * Frees the `ptr` structure, previously allocated with e_cal_meta_backend_info_new()
 * or e_cal_meta_backend_info_copy().
 * @param ptr an #ECalMetaBackendInfo
 */
function calMetaBackendInfoFree(ptr: object | null): void
/**
 * A callback prototype being called in a dedicated thread, scheduled
 * by e_cal_backend_schedule_custom_operation().
 * @callback 
 * @param calBackend an #ECalBackend
 * @param cancellable an optional #GCancellable, as provided to e_cal_backend_schedule_custom_operation()
 */
interface CalBackendCustomOpFunc {
    (calBackend: CalBackend, cancellable: Gio.Cancellable | null): void
}
/**
 * Callback function used by e_cal_backend_foreach_view().
 * @callback 
 * @param backend an #ECalBackend
 * @param view an #EDataCalView
 */
interface CalBackendForeachViewFunc {
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
 */
interface CalCacheSearchFunc {
    (calCache: CalCache, uid: string, rid: string | null, revision: string, object: string, extra: string, customFlags: number, offlineState: EBackend.OfflineState): boolean
}
interface CalBackend_ConstructProps extends ECal.TimezoneCache_ConstructProps, EBackend.Backend_ConstructProps {

    // Own constructor properties of EDataCal-2.0.EDataCal.CalBackend

    cacheDir?: string | null
    kind?: number | null
    registry?: EDataServer.SourceRegistry | null
    writable?: boolean | null
}

/**
 * Signal callback interface for `closed`
 */
interface CalBackend_ClosedSignalCallback {
    (sender: string): void
}

/**
 * Signal callback interface for `shutdown`
 */
interface CalBackend_ShutdownSignalCallback {
    (): void
}

interface CalBackend extends ECal.TimezoneCache {

    // Own properties of EDataCal-2.0.EDataCal.CalBackend

    cacheDir: string
    readonly kind: number
    readonly proxyResolver: Gio.ProxyResolver
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
    addTimezone(tzobject: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void

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
    addTimezone(...args: any[]): any
    addTimezone(args_or_zone: any[] | ICalGLib.Timezone): void | any
    /**
     * Finishes the operation started with e_cal_backend_add_timezone().
     * 
     * If an error occurred, the function will set `error` and return %FALSE.
     * @param result a #GAsyncResult
     */
    addTimezoneFinish(result: Gio.AsyncResult): boolean
    /**
     * Adds the timezone described by `tzobject` to `backend`.
     * 
     * If an error occurs, the function will set `error` and return %FALSE.
     * @param tzobject an iCalendar VTIMEZONE string
     * @param cancellable optional #GCancellable object, or %NULL
     */
    addTimezoneSync(tzobject: string, cancellable: Gio.Cancellable | null): boolean
    /**
     * Adds a view to the list of live views being run by the given backend.
     * Doing so means that any listener on the view will get notified of any
     * change that affect the live view.
     * @param view An #EDataCalView object.
     */
    addView(view: DataCalView): void
    createCacheFilename(uid: string, filename: string | null, fileindex: number): string
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
    createObjects(calobjs: string, opflags?: ECal.OperationFlags, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes the operation started with e_cal_backend_create_objects().
     * 
     * A unique ID string for each newly-created object is deposited in `out_uids`.
     * Free the returned ID strings with g_free() when finished with them.
     * 
     * If an error occurred, the function will set `error` and return %FALSE.
     * @param result a #GAsyncResult
     * @param outUids a #GQueue in which to deposit results
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
     */
    createObjectsSync(calobjs: string, opflags: ECal.OperationFlags, outUids: GLib.Queue, cancellable: Gio.Cancellable | null): boolean
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
    discardAlarm(uid: string, rid?: string | null, alarmUid?: string, opflags?: ECal.OperationFlags, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes the operation started with e_cal_backend_discard_alarm().
     * 
     * If an error occurred, the function will set `error` and return %FALSE.
     * @param result a #GAsyncResult
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
     */
    discardAlarmSync(uid: string, rid: string | null, alarmUid: string, opflags: ECal.OperationFlags, cancellable: Gio.Cancellable | null): boolean
    /**
     * Thread-safe variation of e_cal_backend_get_cache_dir().
     * Use this function when accessing `backend` from multiple threads.
     * 
     * The returned string should be freed with g_free() when no longer needed.
     */
    dupCacheDir(): string
    /**
     * Calls `func` for each existing view (as returned by e_cal_backend_list_views()).
     * The `func` can return %FALSE to stop early.
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
    getAttachmentUris(uid: string, rid?: string | null, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
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
     */
    getAttachmentUrisSync(uid: string, rid: string | null, outAttachmentUris: GLib.Queue, cancellable: Gio.Cancellable | null): boolean
    /**
     * Obtains the value of the backend property named `prop_name`.
     * Freed the returned string with g_free() when finished with it.
     * @param propName a backend property name
     */
    getBackendProperty(propName: string): string
    /**
     * Returns the cache directory path used by `backend`.
     */
    getCacheDir(): string
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
    getFreeBusy(start: number, end?: number, users?: string[], cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
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
     */
    getFreeBusySync(start: number, end: number, users: string[], outFreebusy: string[], cancellable: Gio.Cancellable | null): boolean
    /**
     * Gets the kind of components the given backend stores.
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
    getObject(uid: string, rid?: string | null, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes the operation started with e_cal_backend_get_object().
     * 
     * The returned string is an iCalendar object describing either single component
     * or a vCalendar object, which includes also detached instances. It should be
     * freed when no longer needed.
     * 
     * If an error occurs, the function will set `error` and return %NULL.
     * @param result a #GAsyncResult
     */
    getObjectFinish(result: Gio.AsyncResult): string
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
    getObjectList(query: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
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
     */
    getObjectListSync(query: string, outObjects: GLib.Queue, cancellable: Gio.Cancellable | null): boolean
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
     */
    getObjectSync(uid: string, rid: string | null, cancellable: Gio.Cancellable | null): string
    /**
     * Returns the data source registry to which #EBackend:source belongs.
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
    getTimezone(tzid: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void

    // Overloads of getTimezone

    /**
     * Obtains an #ICalTimezone by its TZID string.  If no match is found,
     * the function returns %NULL.  The returned #ICalTimezone is owned by
     * the `cache` and should not be modified or freed.
     * @param tzid the TZID of a timezone
     */
    getTimezone(tzid: string): ICalGLib.Timezone | null
    getTimezone(...args: any[]): any
    getTimezone(args_or_tzid: any[] | string): void | ICalGLib.Timezone | null | any
    /**
     * Finishes the operation started with e_cal_backend_get_timezone().
     * 
     * Free the returned string with g_free() when finished with it.
     * 
     * If an error occurred, the function will set `error` and return %NULL.
     * @param result a #GAsyncResult
     */
    getTimezoneFinish(result: Gio.AsyncResult): string
    /**
     * Obtains the VTIMEZONE object identified by `tzid`.  Free the returned
     * string with g_free() when finished with it.
     * 
     * If an error occurs, the function will set `error` and return %NULL.
     * @param tzid a unique ID for an iCalendar VTIMEZONE object
     * @param cancellable optional #GCancellable object, or %NULL
     */
    getTimezoneSync(tzid: string, cancellable: Gio.Cancellable | null): string
    /**
     * Returns whether `backend` will accept changes to its data content.
     */
    getWritable(): boolean
    /**
     * Checks if `backend'`s storage has been opened (and
     * authenticated, if necessary) and the backend itself
     * is ready for accessing. This property is changed automatically
     * after the `backend` is successfully opened.
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
     * |[
     *   g_list_free_full (list, g_object_unref);
     * ```
     * 
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
    modifyObjects(calobjs: string, mod?: ECal.ObjModType, opflags?: ECal.OperationFlags, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes the operation started with e_cal_backend_modify_objects().
     * 
     * If an error occurred, the function will set `error` and return %FALSE.
     * @param result a #GAsyncResult
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
     */
    modifyObjectsSync(calobjs: string, mod: ECal.ObjModType, opflags: ECal.OperationFlags, cancellable: Gio.Cancellable | null): boolean
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
    notifyError(message: string): void
    /**
     * Notifies client about property value change.
     * @param propName property name, which changed
     * @param propValue new property value
     */
    notifyPropertyChanged(propName: string, propValue: string | null): void
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
    open(cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes the operation started with e_cal_backend_open().
     * 
     * If an error occurred, the function will set `error` and return %FALSE.
     * @param result a #GAsyncResult
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
    receiveObjects(calobj: string, opflags?: ECal.OperationFlags, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes the operation started with e_cal_backend_receive_objects().
     * 
     * If an error occurred, the function will set `error` and erturn %FALSE.
     * @param result a #GAsyncResult
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
     */
    receiveObjectsSync(calobj: string, opflags: ECal.OperationFlags, cancellable: Gio.Cancellable | null): boolean
    /**
     * Returns the #EDataCal for `backend`.  The #EDataCal is essentially
     * the glue between incoming D-Bus requests and `backend'`s native API.
     * 
     * An #EDataCal should be set only once after `backend` is first created.
     * If an #EDataCal has not yet been set, the function returns %NULL.
     * 
     * The returned #EDataCal is referenced for thread-safety and must be
     * unreferenced with g_object_unref() when finished with it.
     */
    refDataCal(): DataCal | null
    /**
     * Returns the #GProxyResolver for `backend` (if applicable), as indicated
     * by the #ESourceAuthentication:proxy-uid of `backend'`s #EBackend:source
     * or one of its ancestors.
     * 
     * The returned #GProxyResolver is referenced for thread-safety and must
     * be unreferenced with g_object_unref() when finished with it.
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
    refresh(cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes the refresh initiation started with e_cal_backend_refresh().
     * 
     * If an error occurred while initiating the refresh, the function will set
     * `error` and return %FALSE.  If the `backend` does not support refreshing,
     * the function will set an %E_CLIENT_ERROR_NOT_SUPPORTED error and return
     * %FALSE.
     * @param result a #GAsyncResult
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
    removeObjects(componentIds: ECal.ComponentId[], mod?: ECal.ObjModType, opflags?: ECal.OperationFlags, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes the operation started with e_cal_backend_remove_objects().
     * 
     * If an error occurred, the function will set `error` and return %FALSE.
     * @param result a #GAsyncResult
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
    sendObjects(calobj: string, opflags?: ECal.OperationFlags, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
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
     */
    sendObjectsFinish(result: Gio.AsyncResult, outUsers: GLib.Queue): string
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
     */
    sendObjectsSync(calobj: string, opflags: ECal.OperationFlags, outUsers: GLib.Queue, cancellable: Gio.Cancellable | null): string
    /**
     * Sets the cache directory path for use by `backend`.
     * 
     * Note that #ECalBackend is initialized with a default cache directory
     * path which should suffice for most cases.  Backends should not override
     * the default path without good reason.
     * @param cacheDir a local cache directory path
     */
    setCacheDir(cacheDir: string): void
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

    // Own signals of EDataCal-2.0.EDataCal.CalBackend

    connect(sigName: "closed", callback: CalBackend_ClosedSignalCallback): number
    on(sigName: "closed", callback: CalBackend_ClosedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "closed", callback: CalBackend_ClosedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "closed", callback: CalBackend_ClosedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "closed", ...args: any[]): void
    connect(sigName: "shutdown", callback: CalBackend_ShutdownSignalCallback): number
    on(sigName: "shutdown", callback: CalBackend_ShutdownSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "shutdown", callback: CalBackend_ShutdownSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "shutdown", callback: CalBackend_ShutdownSignalCallback): NodeJS.EventEmitter
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

    constructor(config?: CalBackend_ConstructProps) 
    _init(config?: CalBackend_ConstructProps): void
    /**
     * Retrieve the default mail account as stored in Evolution configuration.
     * @param registry an #ESourceRegistry
     * @param address placeholder for default address
     * @param name placeholder for name
     */
    static mailAccountGetDefault(registry: EDataServer.SourceRegistry, address: string, name: string): boolean
    /**
     * Checks that a mail account is valid, and returns its name.
     * @param registry an #ESourceRegistry
     * @param user user name for the account to check
     * @param name placeholder for the account name
     */
    static mailAccountIsValid(registry: EDataServer.SourceRegistry, user: string, name: string): boolean
    static userDeclined(registry: EDataServer.SourceRegistry, icalcomp: ICalGLib.Component): boolean
}

interface CalBackendFactory_ConstructProps extends EBackend.BackendFactory_ConstructProps {
}

interface CalBackendFactory {

    // Class property signals of EDataCal-2.0.EDataCal.CalBackendFactory

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

    constructor(config?: CalBackendFactory_ConstructProps) 
    _init(config?: CalBackendFactory_ConstructProps): void
}

interface CalBackendSExp_ConstructProps extends GObject.Object_ConstructProps {
}

interface CalBackendSExp {

    // Owm methods of EDataCal-2.0.EDataCal.CalBackendSExp

    /**
     * Determines biggest time window given by expressions "occur-in-range" in sexp.
     * @param start Start of the time window will be stored here.
     * @param end End of the time window will be stored here.
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
     */
    matchComp(comp: ECal.Component, cache: ECal.TimezoneCache): boolean
    /**
     * Checks if `object` matches `sexp`.
     * @param object An iCalendar string.
     * @param cache an #ETimezoneCache
     */
    matchObject(object: string, cache: ECal.TimezoneCache): boolean
    /**
     * Retrieve the text expression for the given #ECalBackendSExp object.
     */
    text(): string
    /**
     * Unlocks the `sexp,` previously locked by e_cal_backend_sexp_lock().
     */
    unlock(): void

    // Class property signals of EDataCal-2.0.EDataCal.CalBackendSExp

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class CalBackendSExp extends GObject.Object {

    // Own properties of EDataCal-2.0.EDataCal.CalBackendSExp

    static name: string
    static $gtype: GObject.GType<CalBackendSExp>

    // Constructors of EDataCal-2.0.EDataCal.CalBackendSExp

    constructor(config?: CalBackendSExp_ConstructProps) 
    constructor(text: string) 
    static new(text: string): CalBackendSExp
    _init(config?: CalBackendSExp_ConstructProps): void
}

interface CalBackendSync_ConstructProps extends ECal.TimezoneCache_ConstructProps, CalBackend_ConstructProps {
}

interface CalBackendSync extends ECal.TimezoneCache {

    // Owm methods of EDataCal-2.0.EDataCal.CalBackendSync

    /**
     * Calls the add_timezone_sync method on the given backend.
     * @param cal An EDataCal object.
     * @param cancellable a #GCancellable for the operation
     * @param tzobject VTIMEZONE object to be added.
     */
    addTimezone(cal: DataCal, cancellable?: Gio.Cancellable | null, tzobject?: string): void

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
    addTimezone(tzobject: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    addTimezone(...args: any[]): any
    addTimezone(args_or_tzobject: any[] | string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void | any
    /**
     * Calls the create_objects_sync method on the given backend.
     * @param cal An EDataCal object.
     * @param cancellable a #GCancellable for the operation
     * @param calobjs The objects to be added.
     * @param opflags bit-or of #ECalOperationFlags
     */
    createObjects(cal: DataCal, cancellable?: Gio.Cancellable | null, calobjs?: string[], opflags?: ECal.OperationFlags): [ /* uids */ string[], /* newComponents */ ECal.Component[] ]

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
    createObjects(calobjs: string, opflags?: ECal.OperationFlags, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    createObjects(...args: any[]): any
    createObjects(args_or_calobjs: any[] | string, opflags?: ECal.OperationFlags, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void | any
    /**
     * Calls the discard_alarm_sync method on the given backend.
     * @param cal An EDataCal object.
     * @param cancellable a #GCancellable for the operation
     * @param uid Unique id of the calendar object.
     * @param rid Recurrence id of the calendar object.
     * @param auid Alarm ID to remove.
     * @param opflags bit-or of #ECalOperationFlags
     */
    discardAlarm(cal: DataCal, cancellable?: Gio.Cancellable | null, uid?: string, rid?: string, auid?: string, opflags?: ECal.OperationFlags): void

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
    discardAlarm(uid: string, rid?: string | null, alarmUid?: string, opflags?: ECal.OperationFlags, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    discardAlarm(...args: any[]): any
    discardAlarm(args_or_uid: any[] | string, rid?: string | null, alarmUid?: string, opflags?: ECal.OperationFlags, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void | any
    /**
     * Calls the get_attachment_uris_sync method on the given backend.
     * @param cal An EDataCal object.
     * @param cancellable a #GCancellable for the operation
     * @param uid Unique id of the calendar object.
     * @param rid Recurrence id of the calendar object.
     * @param attachments Placeholder for list of returned attachment uris.
     */
    getAttachmentUris(cal: DataCal, cancellable?: Gio.Cancellable | null, uid?: string, rid?: string, attachments?: string[]): void

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
    getAttachmentUris(uid: string, rid?: string | null, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    getAttachmentUris(...args: any[]): any
    getAttachmentUris(args_or_uid: any[] | string, rid?: string | null, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void | any
    /**
     * Calls the get_free_busy_sync method on the given backend.
     * @param cal An EDataCal object.
     * @param cancellable a #GCancellable for the operation
     * @param users List of users to get F/B info from.
     * @param start Time range start.
     * @param end Time range end.
     */
    getFreeBusy(cal: DataCal, cancellable?: Gio.Cancellable | null, users?: string[], start?: number, end?: number): /* freebusyobjects */ string[]

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
    getFreeBusy(start: number, end?: number, users?: string[], cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    getFreeBusy(...args: any[]): any
    getFreeBusy(args_or_start: any[] | number, end?: number, users?: string[], cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void | any
    /**
     * Calls the get_object_sync method on the given backend.
     * @param cal An EDataCal object.
     * @param cancellable a #GCancellable for the operation
     * @param uid UID of the object to get.
     * @param rid Recurrence ID of the specific instance to get, or %NULL if    getting the master object.
     */
    getObject(cal: DataCal, cancellable?: Gio.Cancellable | null, uid?: string, rid?: string | null): /* calobj */ string

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
    getObject(uid: string, rid?: string | null, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    getObject(...args: any[]): any
    getObject(args_or_uid: any[] | string, rid?: string | null, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void | any
    /**
     * Calls the get_object_list_sync method on the given backend.
     * @param cal An EDataCal object.
     * @param cancellable a #GCancellable for the operation
     * @param sexp Search query.
     */
    getObjectList(cal: DataCal, cancellable?: Gio.Cancellable | null, sexp?: string): /* calobjs */ string[]

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
    getObjectList(query: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    getObjectList(...args: any[]): any
    getObjectList(args_or_query: any[] | string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void | any
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
    getTimezone(cal: DataCal, cancellable?: Gio.Cancellable | null, tzid?: string, tzobject?: string): void

    // Overloads of getTimezone

    /**
     * Obtains an #ICalTimezone by its TZID string.  If no match is found,
     * the function returns %NULL.  The returned #ICalTimezone is owned by
     * the `cache` and should not be modified or freed.
     * @param tzid the TZID of a timezone
     */
    getTimezone(tzid: string): ICalGLib.Timezone | null
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
    getTimezone(tzid: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    getTimezone(...args: any[]): any
    getTimezone(args_or_tzid: any[] | string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void | ICalGLib.Timezone | null | any
    /**
     * Calls the modify_objects_sync method on the given backend.
     * @param cal An EDataCal object.
     * @param cancellable a #GCancellable for the operation
     * @param calobjs Objects to be modified.
     * @param mod Type of modification to be done.
     * @param opflags bit-or of #ECalOperationFlags
     */
    modifyObjects(cal: DataCal, cancellable?: Gio.Cancellable | null, calobjs?: string[], mod?: ECal.ObjModType, opflags?: ECal.OperationFlags): [ /* oldComponents */ ECal.Component[], /* newComponents */ ECal.Component[] ]

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
    modifyObjects(calobjs: string, mod?: ECal.ObjModType, opflags?: ECal.OperationFlags, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    modifyObjects(...args: any[]): any
    modifyObjects(args_or_calobjs: any[] | string, mod?: ECal.ObjModType, opflags?: ECal.OperationFlags, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void | any
    /**
     * Calls the open_sync method on the given backend.
     * @param cal An EDataCal object.
     * @param cancellable a #GCancellable for the operation or just create it when it does not exist.
     */
    open(cal: DataCal, cancellable?: Gio.Cancellable | null): void

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
    open(cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    open(...args: any[]): any
    open(args_or_cancellable: any[] | Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void | any
    /**
     * Calls the receive_objects_sync method on the given backend.
     * @param cal An EDataCal object.
     * @param cancellable a #GCancellable for the operation
     * @param calobj iCalendar object to receive.
     * @param opflags bit-or of #ECalOperationFlags
     */
    receiveObjects(cal: DataCal, cancellable?: Gio.Cancellable | null, calobj?: string, opflags?: ECal.OperationFlags): void

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
    receiveObjects(calobj: string, opflags?: ECal.OperationFlags, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    receiveObjects(...args: any[]): any
    receiveObjects(args_or_calobj: any[] | string, opflags?: ECal.OperationFlags, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void | any
    /**
     * Calls the refresh_sync method on the given backend.
     * @param cal An EDataCal object.
     * @param cancellable a #GCancellable for the operation
     */
    refresh(cal: DataCal, cancellable?: Gio.Cancellable | null): void

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
    refresh(cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    refresh(...args: any[]): any
    refresh(args_or_cancellable: any[] | Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void | any
    /**
     * Calls the remove_objects_sync method on the given backend.
     * @param cal An EDataCal object.
     * @param cancellable a #GCancellable for the operation
     * @param ids List of #ECalComponentId objects identifying the objects to remove.
     * @param mod Type of removal.
     * @param opflags bit-or of #ECalOperationFlags
     */
    removeObjects(cal: DataCal, cancellable?: Gio.Cancellable | null, ids?: ECal.ComponentId[], mod?: ECal.ObjModType, opflags?: ECal.OperationFlags): [ /* oldComponents */ ECal.Component[], /* newComponents */ ECal.Component[] ]

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
    removeObjects(componentIds: ECal.ComponentId[], mod?: ECal.ObjModType, opflags?: ECal.OperationFlags, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    removeObjects(...args: any[]): any
    removeObjects(args_or_componentIds: any[] | ECal.ComponentId[], mod?: ECal.ObjModType, opflags?: ECal.OperationFlags, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void | any
    /**
     * Calls the send_objects_sync method on the given backend.
     * @param cal An EDataCal object.
     * @param cancellable a #GCancellable for the operation
     * @param calobj The iCalendar object to send.
     * @param opflags bit-or of #ECalOperationFlags
     * @param users List of users to send notifications to.
     */
    sendObjects(cal: DataCal, cancellable?: Gio.Cancellable | null, calobj?: string, opflags?: ECal.OperationFlags, users?: string[]): /* modifiedCalobj */ string

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
    sendObjects(calobj: string, opflags?: ECal.OperationFlags, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    sendObjects(...args: any[]): any
    sendObjects(args_or_calobj: any[] | string, opflags?: ECal.OperationFlags, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void | any

    // Class property signals of EDataCal-2.0.EDataCal.CalBackendSync

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

    constructor(config?: CalBackendSync_ConstructProps) 
    _init(config?: CalBackendSync_ConstructProps): void
}

interface CalCache_ConstructProps extends ECal.TimezoneCache_ConstructProps, EDataServer.Extensible_ConstructProps, EBackend.Cache_ConstructProps {
}

/**
 * Signal callback interface for `dup-component-revision`
 */
interface CalCache_DupComponentRevisionSignalCallback {
    (object: ICalGLib.Component): string
}

/**
 * Signal callback interface for `get-timezone`
 */
interface CalCache_GetTimezoneSignalCallback {
    (tzid: string): ICalGLib.Timezone
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
     * @param deletedFlag one of #ECacheDeletedFlag enum
     */
    contains(uid: string, rid?: string | null, deletedFlag?: EBackend.CacheDeletedFlag): boolean

    // Overloads of contains

    /**
     * Checkes whether the `cache` contains an object with
     * the given `uid`.
     * @param uid a unique identifier of an object
     * @param deletedFlag one of #ECacheDeletedFlag enum
     */
    contains(uid: string, deletedFlag?: EBackend.CacheDeletedFlag): boolean
    contains(...args: any[]): any
    contains(args_or_uid: any[] | string, deletedFlag?: EBackend.CacheDeletedFlag): boolean | any
    /**
     * Deletes all locally stored attachments beside the cache file from the disk.
     * This doesn't modify the `component`. It's usually called before the `component`
     * is being removed from the `cal_cache`.
     * @param component an #ICalComponent
     * @param cancellable optional #GCancellable object, or %NULL
     */
    deleteAttachments(component: ICalGLib.Component, cancellable: Gio.Cancellable | null): boolean
    /**
     * Returns the `icomp` revision, used to detect changes.
     * The returned string should be freed with g_free(), when
     * no longer needed.
     * @param icomp an #ICalComponent
     */
    dupComponentRevision(icomp: ICalGLib.Component): string
    /**
     * Gets a timezone with given `tzid,` which had been previously put
     * into the `cal_cache` with e_cal_cache_put_timezone().
     * The returned string is an iCal string for that ICalTimezone and
     * should be freed with g_free() when no longer needed.
     * @param tzid a timezone ID to get
     * @param cancellable optional #GCancellable object, or %NULL
     */
    dupTimezoneAsString(tzid: string, cancellable: Gio.Cancellable | null): [ /* returnType */ boolean, /* outZoneString */ string ]
    /**
     * Gets a component identified by `uid,` and optionally by the `rid,`
     * from the `cal_cache`. The returned `out_component` should be freed with
     * g_object_unref(), when no longer needed.
     * @param uid a UID of the component
     * @param rid an optional Recurrence-ID
     * @param cancellable optional #GCancellable object, or %NULL
     */
    getComponent(uid: string, rid: string | null, cancellable: Gio.Cancellable | null): [ /* returnType */ boolean, /* outComponent */ ECal.Component ]
    /**
     * Gets a component identified by `uid,` and optionally by the `rid,`
     * from the `cal_cache`. The returned `out_icalstring` should be freed with
     * g_free(), when no longer needed.
     * @param uid a UID of the component
     * @param rid an optional Recurrence-ID
     * @param cancellable optional #GCancellable object, or %NULL
     */
    getComponentAsString(uid: string, rid: string | null, cancellable: Gio.Cancellable | null): [ /* returnType */ boolean, /* outIcalstring */ string ]
    /**
     * Gets the custom flags previously set for `uid` and `rid,` either with
     * e_cal_cache_set_component_custom_flags(), when adding components or
     * when removing components in offline.
     * @param uid a UID of the component
     * @param rid an optional Recurrence-ID
     * @param cancellable optional #GCancellable object, or %NULL
     */
    getComponentCustomFlags(uid: string, rid: string | null, cancellable: Gio.Cancellable | null): [ /* returnType */ boolean, /* outCustomFlags */ number ]
    /**
     * Gets the extra data previously set for `uid` and `rid,` either with
     * e_cal_cache_set_component_extra() or when adding components.
     * @param uid a UID of the component
     * @param rid an optional Recurrence-ID
     * @param cancellable optional #GCancellable object, or %NULL
     */
    getComponentExtra(uid: string, rid: string | null, cancellable: Gio.Cancellable | null): [ /* returnType */ boolean, /* outExtra */ string ]
    /**
     * Gets the master object and all detached instances for a component
     * identified by the `uid`. Free the returned #GSList with
     * g_slist_free_full (components, g_object_unref); when
     * no longer needed.
     * @param uid a UID of the component
     * @param cancellable optional #GCancellable object, or %NULL
     */
    getComponentsByUid(uid: string, cancellable: Gio.Cancellable | null): [ /* returnType */ boolean, /* outComponents */ ECal.Component[] ]
    /**
     * Gets the master object and all detached instances as string
     * for a component identified by the `uid`. Free the returned #GSList
     * with g_slist_free_full (icalstrings, g_free); when no longer needed.
     * @param uid a UID of the component
     * @param cancellable optional #GCancellable object, or %NULL
     */
    getComponentsByUidAsString(uid: string, cancellable: Gio.Cancellable | null): [ /* returnType */ boolean, /* outIcalstrings */ string[] ]
    /**
     * Gets a list of components which occur in the given time range.
     * It's not an error if none is found.
     * @param rangeStart start of the range, as time_t, inclusive
     * @param rangeEnd end of the range, as time_t, exclusive
     * @param cancellable optional #GCancellable object, or %NULL
     */
    getComponentsInRange(rangeStart: number, rangeEnd: number, cancellable: Gio.Cancellable | null): [ /* returnType */ boolean, /* outComponents */ ECal.Component[] ]
    /**
     * Gets a list of components, as iCal strings, which occur in the given time range.
     * @param rangeStart start of the range, as time_t, inclusive
     * @param rangeEnd end of the range, as time_t, exclusive
     * @param cancellable optional #GCancellable object, or %NULL
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
     */
    getIdsWithExtra(extra: string, cancellable: Gio.Cancellable | null): [ /* returnType */ boolean, /* outIds */ ECal.ComponentId[] ]
    /**
     * The same as e_cache_get_offline_changes(), only splits the saved UID
     * into UID and RID and saved the data into #ECalCacheOfflineChange structure.
     * @param cancellable optional #GCancellable object, or %NULL
     */
    getOfflineChanges(cancellable: Gio.Cancellable | null): CalCacheOfflineChange[]

    // Overloads of getOfflineChanges

    /**
     * Gathers the list of all offline changes being done so far.
     * The returned #GSList contains #ECacheOfflineChange structure.
     * Use e_cache_clear_offline_changes() to clear all offline
     * changes at once.
     * @param cancellable optional #GCancellable object, or %NULL
     */
    getOfflineChanges(cancellable: Gio.Cancellable | null): EBackend.CacheOfflineChange[]
    getOfflineChanges(...args: any[]): any
    getOfflineChanges(args_or_cancellable: any[] | Gio.Cancellable | null): CalCacheOfflineChange[] | EBackend.CacheOfflineChange[] | any
    /**
     * This is a wrapper of e_cache_get_offline_state(), ensuring that
     * a correct #ECache UID will be used.
     * @param uid a UID of the component
     * @param rid an optional Recurrence-ID
     * @param cancellable optional #GCancellable object, or %NULL
     */
    getOfflineState(uid: string, rid?: string | null, cancellable?: Gio.Cancellable | null): EBackend.OfflineState

    // Overloads of getOfflineState

    getOfflineState(uid: string, cancellable?: Gio.Cancellable | null): EBackend.OfflineState
    getOfflineState(...args: any[]): any
    getOfflineState(args_or_uid: any[] | string, cancellable?: Gio.Cancellable | null): EBackend.OfflineState | any
    /**
     * Gets a timezone with given `tzid,` which had been previously put
     * into the `cal_cache` with e_cal_cache_put_timezone().
     * The returned ICalTimezone is owned by the `cal_cache` and should
     * not be freed.
     * @param tzid a timezone ID to get
     * @param cancellable optional #GCancellable object, or %NULL
     */
    getTimezone(tzid: string, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* outZone */ ICalGLib.Timezone ]

    // Overloads of getTimezone

    /**
     * Obtains an #ICalTimezone by its TZID string.  If no match is found,
     * the function returns %NULL.  The returned #ICalTimezone is owned by
     * the `cache` and should not be modified or freed.
     * @param tzid the TZID of a timezone
     */
    getTimezone(tzid: string): ICalGLib.Timezone | null
    getTimezone(...args: any[]): any
    getTimezone(args_or_tzid: any[] | string): boolean | ICalGLib.Timezone | null | any
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
     */
    listTimezones(cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* outTimezones */ ICalGLib.Timezone[] ]

    // Overloads of listTimezones

    /**
     * Returns a list of #ICalTimezone instances that were explicitly added to
     * the `cache` through e_timezone_cache_add_timezone().  In particular, any
     * built-in time zone data that e_timezone_cache_get_timezone() may use to
     * match a TZID string is excluded from the returned list.
     * 
     * Free the returned list with g_list_free().  The list elements are owned
     * by the `cache` and should not be modified or freed.
     */
    listTimezones(): ICalGLib.Timezone[]
    listTimezones(...args: any[]): any
    listTimezones(...args: any[]): boolean | ICalGLib.Timezone[] | any
    /**
     * Adds a `component` into the `cal_cache`. Any existing with the same UID
     * and RID is replaced.
     * @param component an #ECalComponent to put into the `cal_cache`
     * @param extra an extra data to store in association with the `component`
     * @param customFlags custom flags for the `component,` not interpreted by the `cal_cache`
     * @param offlineFlag one of #ECacheOfflineFlag, whether putting this component in offline
     * @param cancellable optional #GCancellable object, or %NULL
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
     */
    removeComponent(uid: string, rid: string | null, customFlags: number, offlineFlag: EBackend.CacheOfflineFlag, cancellable: Gio.Cancellable | null): boolean
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
     */
    removeTimezone(tzid: string, decRefCounts: number, cancellable: Gio.Cancellable | null): boolean
    /**
     * Removes all stored timezones from the `cal_cache`.
     * @param cancellable optional #GCancellable object, or %NULL
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
     */
    searchIds(sexp: string | null, cancellable: Gio.Cancellable | null): [ /* returnType */ boolean, /* outIds */ ECal.ComponentId[] ]
    /**
     * Searches the `cal_cache` with the given `sexp` and calls `func` for each
     * row which satisfy the search expression.
     * @param sexp search expression; use %NULL or an empty string to list all stored components
     * @param cancellable optional #GCancellable object, or %NULL
     */
    searchWithCallback(sexp: string | null, cancellable: Gio.Cancellable | null): boolean
    /**
     * Sets or replaces the custom flags associated with a component
     * identified by `uid` and optionally `rid`.
     * @param uid a UID of the component
     * @param rid an optional Recurrence-ID
     * @param customFlags the custom flags to set for the component
     * @param cancellable optional #GCancellable object, or %NULL
     */
    setComponentCustomFlags(uid: string, rid: string | null, customFlags: number, cancellable: Gio.Cancellable | null): boolean
    /**
     * Sets or replaces the extra data associated with a component
     * identified by `uid` and optionally `rid`.
     * @param uid a UID of the component
     * @param rid an optional Recurrence-ID
     * @param extra extra data to set for the component
     * @param cancellable optional #GCancellable object, or %NULL
     */
    setComponentExtra(uid: string, rid: string | null, extra: string | null, cancellable: Gio.Cancellable | null): boolean

    // Own signals of EDataCal-2.0.EDataCal.CalCache

    connect(sigName: "dup-component-revision", callback: CalCache_DupComponentRevisionSignalCallback): number
    on(sigName: "dup-component-revision", callback: CalCache_DupComponentRevisionSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "dup-component-revision", callback: CalCache_DupComponentRevisionSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "dup-component-revision", callback: CalCache_DupComponentRevisionSignalCallback): NodeJS.EventEmitter
    emit(sigName: "dup-component-revision", ...args: any[]): void
    connect(sigName: "get-timezone", callback: CalCache_GetTimezoneSignalCallback): number
    on(sigName: "get-timezone", callback: CalCache_GetTimezoneSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "get-timezone", callback: CalCache_GetTimezoneSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "get-timezone", callback: CalCache_GetTimezoneSignalCallback): NodeJS.EventEmitter
    emit(sigName: "get-timezone", ...args: any[]): void

    // Class property signals of EDataCal-2.0.EDataCal.CalCache

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
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

    constructor(config?: CalCache_ConstructProps) 
    /**
     * Creates a new #ECalCache.
     * @constructor 
     * @param filename file name to load or create the new cache
     * @param cancellable optional #GCancellable object, or %NULL
     */
    constructor(filename: string, cancellable: Gio.Cancellable | null) 
    /**
     * Creates a new #ECalCache.
     * @constructor 
     * @param filename file name to load or create the new cache
     * @param cancellable optional #GCancellable object, or %NULL
     */
    static new(filename: string, cancellable: Gio.Cancellable | null): CalCache
    _init(config?: CalCache_ConstructProps): void
    /**
     * An #ECalRecurResolveTimezoneCb callback, which can be used
     * with e_cal_recur_generate_instances_sync(). The `cal_cache`
     * is supposed to be an #ECalCache instance.
     * @param tzid a timezone ID
     * @param calCache an #ECalCache
     * @param cancellable optional #GCancellable object, or %NULL
     */
    static resolveTimezoneCb(tzid: string, calCache: object | null, cancellable: Gio.Cancellable | null): ICalGLib.Timezone | null
}

interface CalMetaBackend_ConstructProps extends ECal.TimezoneCache_ConstructProps, CalBackendSync_ConstructProps {

    // Own constructor properties of EDataCal-2.0.EDataCal.CalMetaBackend

    /**
     * The #ECalCache being used for this meta backend.
     */
    cache?: CalCache | null
}

/**
 * Signal callback interface for `refresh-completed`
 */
interface CalMetaBackend_RefreshCompletedSignalCallback {
    (): void
}

/**
 * Signal callback interface for `source-changed`
 */
interface CalMetaBackend_SourceChangedSignalCallback {
    (): void
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
     */
    connectSync(credentials: EDataServer.NamedParameters | null, cancellable: Gio.Cancellable | null): [ /* returnType */ boolean, /* outAuthResult */ EDataServer.SourceAuthenticationResult, /* outCertificatePem */ string, /* outCertificateErrors */ Gio.TlsCertificateFlags ]
    /**
     * This is called when the backend goes into offline mode or
     * when the disconnect is required. The implementation should
     * not report any error when it is called and the `meta_backend`
     * is not connected.
     * 
     * It is mandatory to implement this virtual method by the descendant.
     * @param cancellable optional #GCancellable object, or %NULL
     */
    disconnectSync(cancellable: Gio.Cancellable | null): boolean
    /**
     * Returns the last known synchronization tag, the same as used to
     * call e_cal_meta_backend_get_changes_sync().
     * 
     * Free the returned string with g_free(), when no longer needed.
     */
    dupSyncTag(): string | null
    /**
     * Empties the local cache by removing all known components from it
     * and notifies about such removal any opened views. It removes also
     * all known time zones.
     * @param cancellable optional #GCancellable object, or %NULL
     */
    emptyCacheSync(cancellable: Gio.Cancellable | null): boolean
    /**
     * Ensures that the `meta_backend` is connected to its destination.
     * @param cancellable optional #GCancellable object, or %NULL
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
     */
    gatherTimezonesSync(vcalendar: ICalGLib.Component, removeExisting: boolean, cancellable: Gio.Cancellable | null): boolean
    getCapabilities(): string
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
     * @param lastSyncTag optional sync tag from the last check
     * @param isRepeat set to %TRUE when this is the repeated call
     * @param cancellable optional #GCancellable object, or %NULL
     */
    getChangesSync(lastSyncTag: string | null, isRepeat: boolean, cancellable: Gio.Cancellable | null): [ /* returnType */ boolean, /* outNewSyncTag */ string, /* outRepeat */ boolean, /* outCreatedObjects */ CalMetaBackendInfo[], /* outModifiedObjects */ CalMetaBackendInfo[], /* outRemovedObjects */ CalMetaBackendInfo[] ]
    /**
     * This value has meaning only if e_cal_meta_backend_get_ever_connected()
     * is %TRUE.
     */
    getConnectedWritable(): boolean
    getEverConnected(): boolean
    /**
     * It is optional to implement this virtual method by the descendants.
     * It is used to receive SSL error details when any online operation
     * returns E_CLIENT_ERROR, E_CLIENT_ERROR_TLS_NOT_AVAILABLE error.
     */
    getSslErrorDetails(): [ /* returnType */ boolean, /* outCertificatePem */ string, /* outCertificateErrors */ Gio.TlsCertificateFlags ]
    /**
     * Changes all URL attachments which point to a local file in `component`
     * to inline attachments, aka adds the file content into the `component`.
     * It also populates FILENAME parameter on the attachment.
     * This is called automatically before e_cal_meta_backend_save_component_sync().
     * 
     * The reverse operation is e_cal_meta_backend_store_inline_attachments_sync().
     * @param component an #ICalComponent to work with
     * @param cancellable optional #GCancellable object, or %NULL
     */
    inlineLocalAttachmentsSync(component: ICalGLib.Component, cancellable: Gio.Cancellable | null): boolean
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
     */
    listExistingSync(cancellable: Gio.Cancellable | null): [ /* returnType */ boolean, /* outNewSyncTag */ string, /* outExistingObjects */ CalMetaBackendInfo[] ]
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
     */
    loadComponentSync(uid: string, extra: string | null, cancellable: Gio.Cancellable | null): [ /* returnType */ boolean, /* outComponent */ ICalGLib.Component, /* outExtra */ string ]
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
     */
    processChangesSync(createdObjects: CalMetaBackendInfo[] | null, modifiedObjects: CalMetaBackendInfo[] | null, removedObjects: CalMetaBackendInfo[] | null, cancellable: Gio.Cancellable | null): boolean
    refCache(): CalCache
    /**
     * Refreshes the `meta_backend` immediately. To just schedule refresh
     * operation call e_cal_meta_backend_schedule_refresh().
     * @param cancellable optional #GCancellable object, or %NULL
     */
    refreshSync(cancellable: Gio.Cancellable | null): boolean
    /**
     * Removes a component from the remote side, with all its detached instances.
     * The `object` is not %NULL when it's removing locally deleted object
     * in offline mode. Being it %NULL, the descendant can obtain the object
     * from the #ECalCache.
     * 
     * It is mandatory to implement this virtual method by the writable descendant.
     * @param conflictResolution an #EConflictResolution to use
     * @param uid a component UID
     * @param extra extra data being saved with the component in the local cache, or %NULL
     * @param object corresponding iCalendar object, as stored in the local cache, or %NULL
     * @param opflags bit-or of #ECalOperationFlags
     * @param cancellable optional #GCancellable object, or %NULL
     */
    removeComponentSync(conflictResolution: EDataServer.ConflictResolution, uid: string, extra: string | null, object: string | null, opflags: ECal.OperationFlags, cancellable: Gio.Cancellable | null): boolean
    /**
     * Determines, whether current source content requires reconnect of the backend.
     * 
     * It is optional to implement this virtual method by the descendant. The default
     * implementation compares %E_SOURCE_EXTENSION_AUTHENTICATION and
     * %E_SOURCE_EXTENSION_WEBDAV_BACKEND, if existing in the source,
     * with the values after the last successful connect and returns
     * %TRUE when they changed. It always return %TRUE when there was
     * no successful connect done yet.
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
     * @param overwriteExisting %TRUE when can overwrite existing components, %FALSE otherwise
     * @param conflictResolution one of #EConflictResolution, what to do on conflicts
     * @param instances instances of the component to save
     * @param extra extra data saved with the components in an #ECalCache
     * @param opflags bit-or of #ECalOperationFlags
     * @param cancellable optional #GCancellable object, or %NULL
     */
    saveComponentSync(overwriteExisting: boolean, conflictResolution: EDataServer.ConflictResolution, instances: ECal.Component[], extra: string | null, opflags: ECal.OperationFlags, cancellable: Gio.Cancellable | null): [ /* returnType */ boolean, /* outNewUid */ string, /* outNewExtra */ string ]
    /**
     * Schedules refresh of the content of the `meta_backend`. If there's any
     * already scheduled, then the function does nothing.
     * 
     * Use e_cal_meta_backend_refresh_sync() to refresh the `meta_backend`
     * immediately.
     */
    scheduleRefresh(): void
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
     * @param expr a search expression, or %NULL
     * @param cancellable optional #GCancellable object, or %NULL
     */
    searchSync(expr: string | null, cancellable: Gio.Cancellable | null): [ /* returnType */ boolean, /* outIcalstrings */ string[] ]
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
     */
    storeInlineAttachmentsSync(component: ICalGLib.Component, cancellable: Gio.Cancellable | null): boolean

    // Conflicting methods

    addTimezone(...args: any[]): any
    getTimezone(...args: any[]): any
    createObjects(...args: any[]): any
    discardAlarm(...args: any[]): any
    getAttachmentUris(...args: any[]): any
    getFreeBusy(...args: any[]): any
    getObject(...args: any[]): any
    getObjectList(...args: any[]): any
    modifyObjects(...args: any[]): any
    open(...args: any[]): any
    receiveObjects(...args: any[]): any
    refresh(...args: any[]): any
    removeObjects(...args: any[]): any
    sendObjects(...args: any[]): any

    // Own signals of EDataCal-2.0.EDataCal.CalMetaBackend

    connect(sigName: "refresh-completed", callback: CalMetaBackend_RefreshCompletedSignalCallback): number
    on(sigName: "refresh-completed", callback: CalMetaBackend_RefreshCompletedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "refresh-completed", callback: CalMetaBackend_RefreshCompletedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "refresh-completed", callback: CalMetaBackend_RefreshCompletedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "refresh-completed", ...args: any[]): void
    connect(sigName: "source-changed", callback: CalMetaBackend_SourceChangedSignalCallback): number
    on(sigName: "source-changed", callback: CalMetaBackend_SourceChangedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "source-changed", callback: CalMetaBackend_SourceChangedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "source-changed", callback: CalMetaBackend_SourceChangedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "source-changed", ...args: any[]): void

    // Class property signals of EDataCal-2.0.EDataCal.CalMetaBackend

    connect(sigName: "notify::cache", callback: (...args: any[]) => void): number
    on(sigName: "notify::cache", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::cache", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::cache", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::cache", ...args: any[]): void
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

    constructor(config?: CalMetaBackend_ConstructProps) 
    _init(config?: CalMetaBackend_ConstructProps): void
}

interface DataCal_ConstructProps extends Gio.Initable_ConstructProps, GObject.Object_ConstructProps {

    // Own constructor properties of EDataCal-2.0.EDataCal.DataCal

    backend?: CalBackend | null
    connection?: Gio.DBusConnection | null
    objectPath?: string | null
}

interface DataCal extends Gio.Initable {

    // Own properties of EDataCal-2.0.EDataCal.DataCal

    readonly backend: CalBackend
    readonly connection: Gio.DBusConnection
    readonly objectPath: string

    // Own fields of EDataCal-2.0.EDataCal.DataCal

    parent: GObject.Object
    priv: DataCalPrivate

    // Owm methods of EDataCal-2.0.EDataCal.DataCal

    /**
     * Returns the #GDBusConnection on which the Calendar D-Bus interface
     * is exported.
     */
    getConnection(): Gio.DBusConnection
    /**
     * Returns the object path at which the Calendar D-Bus interface is
     * exported.
     */
    getObjectPath(): string
    /**
     * Returns the #ECalBackend to which incoming remote method invocations
     * are being forwarded.
     * 
     * The returned #ECalBackend is referenced for thread-safety and should
     * be unreferenced with g_object_unref() when finished with it.
     */
    refBackend(): CalBackend | null
    /**
     * Notifies client about certain property value change
     * @param propName property name
     * @param propValue new property value
     */
    reportBackendPropertyChanged(propName: string, propValue: string): void
    /**
     * Emits an error message, thus the clients can be notified about it.
     * @param message an error message to report
     */
    reportError(message: string): void
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
    respondGetObject(opid: number, error: GLib.Error, object: string): void
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
    respondGetTimezone(opid: number, error: GLib.Error, tzobject: string): void
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
    respondSendObjects(opid: number, error: GLib.Error, users: string[], calobj: string): void

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
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class DataCal extends GObject.Object {

    // Own properties of EDataCal-2.0.EDataCal.DataCal

    static name: string
    static $gtype: GObject.GType<DataCal>

    // Constructors of EDataCal-2.0.EDataCal.DataCal

    constructor(config?: DataCal_ConstructProps) 
    /**
     * Creates a new #EDataCal and exports the Calendar D-Bus interface
     * on `connection` at `object_path`.  The #EDataCal handles incoming remote
     * method invocations and forwards them to the `backend`.  If the Calendar
     * interface fails to export, the function sets `error` and returns %NULL.
     * @constructor 
     * @param backend an #ECalBackend
     * @param connection a #GDBusConnection
     * @param objectPath object path for the D-Bus interface
     */
    constructor(backend: CalBackend, connection: Gio.DBusConnection, objectPath: string) 
    /**
     * Creates a new #EDataCal and exports the Calendar D-Bus interface
     * on `connection` at `object_path`.  The #EDataCal handles incoming remote
     * method invocations and forwards them to the `backend`.  If the Calendar
     * interface fails to export, the function sets `error` and returns %NULL.
     * @constructor 
     * @param backend an #ECalBackend
     * @param connection a #GDBusConnection
     * @param objectPath object path for the D-Bus interface
     */
    static new(backend: CalBackend, connection: Gio.DBusConnection, objectPath: string): DataCal
    _init(config?: DataCal_ConstructProps): void
}

interface DataCalFactory_ConstructProps extends EDataServer.Extensible_ConstructProps, Gio.Initable_ConstructProps, EBackend.DataFactory_ConstructProps {
}

interface DataCalFactory extends EDataServer.Extensible, Gio.Initable {

    // Own fields of EDataCal-2.0.EDataCal.DataCalFactory

    parent: EBackend.DataFactory
    priv: DataCalFactoryPrivate

    // Class property signals of EDataCal-2.0.EDataCal.DataCalFactory

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
}

class DataCalFactory extends EBackend.DataFactory {

    // Own properties of EDataCal-2.0.EDataCal.DataCalFactory

    static name: string
    static $gtype: GObject.GType<DataCalFactory>

    // Constructors of EDataCal-2.0.EDataCal.DataCalFactory

    constructor(config?: DataCalFactory_ConstructProps) 
    constructor(backendPerProcess: number, cancellable: Gio.Cancellable | null) 
    static new(backendPerProcess: number, cancellable: Gio.Cancellable | null): DataCalFactory
    _init(config?: DataCalFactory_ConstructProps): void
}

interface DataCalView_ConstructProps extends Gio.Initable_ConstructProps, GObject.Object_ConstructProps {

    // Own constructor properties of EDataCal-2.0.EDataCal.DataCalView

    backend?: CalBackend | null
    connection?: Gio.DBusConnection | null
    objectPath?: string | null
    sexp?: CalBackendSExp | null
}

interface DataCalView extends Gio.Initable {

    // Own properties of EDataCal-2.0.EDataCal.DataCalView

    readonly backend: CalBackend
    readonly connection: Gio.DBusConnection
    readonly objectPath: string
    readonly sexp: CalBackendSExp

    // Own fields of EDataCal-2.0.EDataCal.DataCalView

    parent: GObject.Object
    priv: DataCalViewPrivate

    // Owm methods of EDataCal-2.0.EDataCal.DataCalView

    /**
     * Compares the given `component` to the regular expression used for the
     * given view.
     * @param component the #ECalComponent object to match.
     */
    componentMatches(component: ECal.Component): boolean
    /**
     * This function is similar to e_cal_component_get_as_string() except
     * that it takes into account the fields-of-interest that `view` is
     * configured with and filters out any unneeded fields.
     * @param component The #ECalComponent to get the string for.
     */
    getComponentString(component: ECal.Component): string
    /**
     * Returns the #GDBusConnection on which the CalendarView D-Bus
     * interface is exported.
     */
    getConnection(): Gio.DBusConnection
    getFieldsOfInterest(): GLib.HashTable | null
    /**
     * Gets the #ECalClientViewFlags that control the behaviour of `view`.
     */
    getFlags(): ECal.ClientViewFlags
    /**
     * Return the object path at which the CalendarView D-Bus inteface is
     * exported.
     */
    getObjectPath(): string
    /**
     * Get the #ECalBackendSExp object used for the given view.
     */
    getSexp(): object | null
    /**
     * Checks whether the given view is already completed. Being completed means the initial
     * matching of objects have been finished, not that no more notifications about
     * changes will be sent. In fact, even after completed, notifications will still be sent
     * if there are changes in the objects matching the view search expression.
     */
    isCompleted(): boolean
    /**
     * Checks whether the given view has already been started.
     */
    isStarted(): boolean
    /**
     * Checks whether the given view has been stopped.
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
    notifyProgress(percent: number, message: string): void
    /**
     * Compares the given `object` to the regular expression used for the
     * given view.
     * @param object Object to match.
     */
    objectMatches(object: string): boolean
    /**
     * Refs the backend that `view` is querying. Unref the returned backend,
     * if not %NULL, with g_object_unref(), when no longer needed.
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
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class DataCalView extends GObject.Object {

    // Own properties of EDataCal-2.0.EDataCal.DataCalView

    static name: string
    static $gtype: GObject.GType<DataCalView>

    // Constructors of EDataCal-2.0.EDataCal.DataCalView

    constructor(config?: DataCalView_ConstructProps) 
    /**
     * Creates a new #EDataCalView and exports its D-Bus interface on
     * `connection` at `object_path`.  If an error occurs while exporting,
     * the function sets `error` and returns %NULL.
     * @constructor 
     * @param backend an #ECalBackend
     * @param sexp an #ECalBackendSExp
     * @param connection a #GDBusConnection
     * @param objectPath an object path for the view
     */
    constructor(backend: object | null, sexp: object | null, connection: Gio.DBusConnection, objectPath: string) 
    /**
     * Creates a new #EDataCalView and exports its D-Bus interface on
     * `connection` at `object_path`.  If an error occurs while exporting,
     * the function sets `error` and returns %NULL.
     * @constructor 
     * @param backend an #ECalBackend
     * @param sexp an #ECalBackendSExp
     * @param connection a #GDBusConnection
     * @param objectPath an object path for the view
     */
    static new(backend: object | null, sexp: object | null, connection: Gio.DBusConnection, objectPath: string): DataCalView
    _init(config?: DataCalView_ConstructProps): void
}

interface IntervalTree_ConstructProps extends GObject.Object_ConstructProps {
}

interface IntervalTree {

    // Owm methods of EDataCal-2.0.EDataCal.IntervalTree

    destroy(): void
    dump(): void
    insert(start: number, end: number, comp: ECal.Component): boolean
    remove(uid: string, rid: string): boolean
    search(start: number, end: number): ECal.Component[] | null

    // Class property signals of EDataCal-2.0.EDataCal.IntervalTree

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
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

    constructor(config?: IntervalTree_ConstructProps) 
    /**
     * Creates a new #EIntervalTree.
     * @constructor 
     */
    constructor() 
    /**
     * Creates a new #EIntervalTree.
     * @constructor 
     */
    static new(): IntervalTree
    _init(config?: IntervalTree_ConstructProps): void
}

interface SubprocessCalFactory_ConstructProps extends Gio.Initable_ConstructProps, EBackend.SubprocessFactory_ConstructProps {
}

interface SubprocessCalFactory extends Gio.Initable {

    // Own fields of EDataCal-2.0.EDataCal.SubprocessCalFactory

    parent: EBackend.SubprocessFactory
    priv: SubprocessCalFactoryPrivate

    // Class property signals of EDataCal-2.0.EDataCal.SubprocessCalFactory

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
}

class SubprocessCalFactory extends EBackend.SubprocessFactory {

    // Own properties of EDataCal-2.0.EDataCal.SubprocessCalFactory

    static name: string
    static $gtype: GObject.GType<SubprocessCalFactory>

    // Constructors of EDataCal-2.0.EDataCal.SubprocessCalFactory

    constructor(config?: SubprocessCalFactory_ConstructProps) 
    constructor(cancellable: Gio.Cancellable | null) 
    static new(cancellable: Gio.Cancellable | null): SubprocessCalFactory
    _init(config?: SubprocessCalFactory_ConstructProps): void
}

interface CalBackendClass {

    // Own fields of EDataCal-2.0.EDataCal.CalBackendClass

    /**
     * Whether a serial dispatch queue should
     *                             be used for this backend or not. The default is %TRUE.
     * @field 
     */
    useSerialDispatchQueue: boolean
    implGetBackendProperty: (backend: CalBackend, propName: string) => string
    implOpen: (backend: CalBackend, cal: DataCal, opid: number, cancellable: Gio.Cancellable | null) => void
    implRefresh: (backend: CalBackend, cal: DataCal, opid: number, cancellable: Gio.Cancellable | null) => void
    implGetObject: (backend: CalBackend, cal: DataCal, opid: number, cancellable: Gio.Cancellable | null, uid: string, rid: string) => void
    implGetObjectList: (backend: CalBackend, cal: DataCal, opid: number, cancellable: Gio.Cancellable | null, sexp: string) => void
    implReceiveObjects: (backend: CalBackend, cal: DataCal, opid: number, cancellable: Gio.Cancellable | null, calobj: string, opflags: ECal.OperationFlags) => void
    implSendObjects: (backend: CalBackend, cal: DataCal, opid: number, cancellable: Gio.Cancellable | null, calobj: string, opflags: ECal.OperationFlags) => void
    implGetAttachmentUris: (backend: CalBackend, cal: DataCal, opid: number, cancellable: Gio.Cancellable | null, uid: string, rid: string) => void
    implDiscardAlarm: (backend: CalBackend, cal: DataCal, opid: number, cancellable: Gio.Cancellable | null, uid: string, rid: string, auid: string, opflags: ECal.OperationFlags) => void
    implGetTimezone: (backend: CalBackend, cal: DataCal, opid: number, cancellable: Gio.Cancellable | null, tzid: string) => void
    implAddTimezone: (backend: CalBackend, cal: DataCal, opid: number, cancellable: Gio.Cancellable | null, tzobject: string) => void
    implStartView: (backend: CalBackend, view: DataCalView) => void
    implStopView: (backend: CalBackend, view: DataCalView) => void
    closed: (backend: CalBackend, sender: string) => void
    shutdown: (backend: CalBackend) => void
    reservedPadding: object[]
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
    factoryName: string
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

    openSync: (backend: CalBackendSync, cal: DataCal, cancellable: Gio.Cancellable | null) => void
    refreshSync: (backend: CalBackendSync, cal: DataCal, cancellable: Gio.Cancellable | null) => void
    getObjectSync: (backend: CalBackendSync, cal: DataCal, cancellable: Gio.Cancellable | null, uid: string, rid: string, calobj: string) => void
    receiveObjectsSync: (backend: CalBackendSync, cal: DataCal, cancellable: Gio.Cancellable | null, calobj: string, opflags: ECal.OperationFlags) => void
    discardAlarmSync: (backend: CalBackendSync, cal: DataCal, cancellable: Gio.Cancellable | null, uid: string, rid: string, auid: string, opflags: ECal.OperationFlags) => void
    getTimezoneSync: (backend: CalBackendSync, cal: DataCal, cancellable: Gio.Cancellable | null, tzid: string, tzobject: string) => void
    addTimezoneSync: (backend: CalBackendSync, cal: DataCal, cancellable: Gio.Cancellable | null, tzobject: string) => void
    reservedPadding: object[]
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

    dupComponentRevision: (calCache: CalCache, icomp: ICalGLib.Component) => string
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
    uid: string
    /**
     * Recurrence-ID of the component
     * @field 
     */
    rid: string
    /**
     * stored revision of the component
     * @field 
     */
    revision: string
    /**
     * the component itself, as an iCalendar string
     * @field 
     */
    object: string
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
     */
    constructor(uid: string, rid: string | null, revision: string | null, object: string | null, state: EBackend.OfflineState) 
    /**
     * Creates a new #ECalCacheOfflineChange with the offline `state`
     * information for the given `uid`.
     * @constructor 
     * @param uid a unique component identifier
     * @param rid a Recurrence-ID of the component
     * @param revision a revision of the component
     * @param object component itself
     * @param state an #EOfflineState
     */
    static new(uid: string, rid: string | null, revision: string | null, object: string | null, state: EBackend.OfflineState): CalCacheOfflineChange
    /**
     * Frees the `change` structure, previously allocated with e_cal_cache_offline_change_new()
     * or e_cal_cache_offline_change_copy().
     * @param change an #ECalCacheOfflineChange
     */
    static free(change: object | null): void
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
    uid: string
    /**
     * the Recurrence-ID of this component
     * @field 
     */
    rid: string
    /**
     * the component string
     * @field 
     */
    object: string
    /**
     * any extra data associated with the component
     * @field 
     */
    extra: string

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
     */
    constructor(uid: string, rid: string | null, object: string, extra: string | null) 
    /**
     * Creates a new #ECalCacheSearchData prefilled with the given values.
     * @constructor 
     * @param uid a component UID; cannot be %NULL
     * @param rid a component Recurrence-ID; can be %NULL
     * @param object the component as an iCal string; cannot be %NULL
     * @param extra any extra data stored with the component, or %NULL
     */
    static new(uid: string, rid: string | null, object: string, extra: string | null): CalCacheSearchData
    /**
     * Frees the `ptr` structure, previously allocated with e_cal_cache_search_data_new()
     * or e_cal_cache_search_data_copy().
     * @param ptr an #ECalCacheSearchData
     */
    static free(ptr: object | null): void
}

interface CalMetaBackendClass {

    // Own fields of EDataCal-2.0.EDataCal.CalMetaBackendClass

    connectSync: (metaBackend: CalMetaBackend, credentials: EDataServer.NamedParameters | null, cancellable: Gio.Cancellable | null) => [ /* returnType */ boolean, /* outAuthResult */ EDataServer.SourceAuthenticationResult, /* outCertificatePem */ string, /* outCertificateErrors */ Gio.TlsCertificateFlags ]
    disconnectSync: (metaBackend: CalMetaBackend, cancellable: Gio.Cancellable | null) => boolean
    getChangesSync: (metaBackend: CalMetaBackend, lastSyncTag: string | null, isRepeat: boolean, cancellable: Gio.Cancellable | null) => [ /* returnType */ boolean, /* outNewSyncTag */ string, /* outRepeat */ boolean, /* outCreatedObjects */ CalMetaBackendInfo[], /* outModifiedObjects */ CalMetaBackendInfo[], /* outRemovedObjects */ CalMetaBackendInfo[] ]
    listExistingSync: (metaBackend: CalMetaBackend, cancellable: Gio.Cancellable | null) => [ /* returnType */ boolean, /* outNewSyncTag */ string, /* outExistingObjects */ CalMetaBackendInfo[] ]
    loadComponentSync: (metaBackend: CalMetaBackend, uid: string, extra: string | null, cancellable: Gio.Cancellable | null) => [ /* returnType */ boolean, /* outComponent */ ICalGLib.Component, /* outExtra */ string ]
    saveComponentSync: (metaBackend: CalMetaBackend, overwriteExisting: boolean, conflictResolution: EDataServer.ConflictResolution, instances: ECal.Component[], extra: string | null, opflags: ECal.OperationFlags, cancellable: Gio.Cancellable | null) => [ /* returnType */ boolean, /* outNewUid */ string, /* outNewExtra */ string ]
    removeComponentSync: (metaBackend: CalMetaBackend, conflictResolution: EDataServer.ConflictResolution, uid: string, extra: string | null, object: string | null, opflags: ECal.OperationFlags, cancellable: Gio.Cancellable | null) => boolean
    searchSync: (metaBackend: CalMetaBackend, expr: string | null, cancellable: Gio.Cancellable | null) => [ /* returnType */ boolean, /* outIcalstrings */ string[] ]
    searchComponentsSync: (metaBackend: CalMetaBackend, expr: string | null, cancellable: Gio.Cancellable | null) => [ /* returnType */ boolean, /* outComponents */ ECal.Component[] ]
    requiresReconnect: (metaBackend: CalMetaBackend) => boolean
    sourceChanged: (metaBackend: CalMetaBackend) => void
    getSslErrorDetails: (metaBackend: CalMetaBackend) => [ /* returnType */ boolean, /* outCertificatePem */ string, /* outCertificateErrors */ Gio.TlsCertificateFlags ]
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

    uid: string
    revision: string
    object: string
    extra: string

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
     */
    constructor(uid: string, revision: string | null, object: string | null, extra: string | null) 
    /**
     * Creates a new #ECalMetaBackendInfo prefilled with the given values.
     * @constructor 
     * @param uid a component UID; cannot be %NULL
     * @param revision the component revision; can be %NULL
     * @param object the component object as an iCalendar string; can be %NULL
     * @param extra extra backend-specific data; can be %NULL
     */
    static new(uid: string, revision: string | null, object: string | null, extra: string | null): CalMetaBackendInfo
    /**
     * Frees the `ptr` structure, previously allocated with e_cal_meta_backend_info_new()
     * or e_cal_meta_backend_info_copy().
     * @param ptr an #ECalMetaBackendInfo
     */
    static free(ptr: object | null): void
}

interface CalMetaBackendPrivate {
}

class CalMetaBackendPrivate {

    // Own properties of EDataCal-2.0.EDataCal.CalMetaBackendPrivate

    static name: string
}

interface DataCalClass {

    // Own fields of EDataCal-2.0.EDataCal.DataCalClass

    parentClass: GObject.ObjectClass
}

abstract class DataCalClass {

    // Own properties of EDataCal-2.0.EDataCal.DataCalClass

    static name: string
}

interface DataCalFactoryClass {

    // Own fields of EDataCal-2.0.EDataCal.DataCalFactoryClass

    parentClass: EBackend.DataFactoryClass
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

    parentClass: GObject.ObjectClass
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

    parentClass: EBackend.SubprocessFactoryClass
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

}
export default EDataCal;