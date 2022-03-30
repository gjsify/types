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
function calCacheOfflineChangeFree(change?: object | null): void
function calCacheSearchDataFree(ptr?: object | null): void
function calMetaBackendInfoFree(ptr?: object | null): void
/**
 * A callback prototype being called in a dedicated thread, scheduled
 * by e_cal_backend_schedule_custom_operation().
 */
interface CalBackendCustomOpFunc {
    (calBackend: CalBackend, cancellable?: Gio.Cancellable | null): void
}
/**
 * Callback function used by e_cal_backend_foreach_view().
 */
interface CalBackendForeachViewFunc {
    (backend: CalBackend, view: DataCalView): boolean
}
/**
 * A callback called for each object row when using
 * e_cal_cache_search_with_callback() function.
 */
interface CalCacheSearchFunc {
    (calCache: CalCache, uid: string, rid: string | null, revision: string, object: string, extra: string, customFlags: number, offlineState: EBackend.OfflineState): boolean
}
interface CalBackend_ConstructProps extends EBackend.Backend_ConstructProps {
    /* Constructor properties of EDataCal-2.0.EDataCal.CalBackend */
    cacheDir?: string
    kind?: number
    registry?: EDataServer.SourceRegistry
    writable?: boolean
}
class CalBackend {
    /* Properties of EDataCal-2.0.EDataCal.CalBackend */
    cacheDir: string
    readonly kind: number
    readonly proxyResolver: Gio.ProxyResolver
    readonly registry: EDataServer.SourceRegistry
    writable: boolean
    /* Properties of EBackend-1.2.EBackend.Backend */
    connectable: Gio.SocketConnectable
    readonly mainContext: GLib.MainContext
    online: boolean
    readonly source: EDataServer.Source
    readonly userPrompter: EBackend.UserPrompter
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of EDataCal-2.0.EDataCal.CalBackend */
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
    addTimezoneSync(tzobject: string, cancellable?: Gio.Cancellable | null): boolean
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
    createObjects(calobjs: string, opflags: ECal.OperationFlags, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
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
    createObjectsSync(calobjs: string, opflags: ECal.OperationFlags, outUids: GLib.Queue, cancellable?: Gio.Cancellable | null): boolean
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
    discardAlarm(uid: string, rid: string | null, alarmUid: string, opflags: ECal.OperationFlags, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
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
    discardAlarmSync(uid: string, rid: string | null, alarmUid: string, opflags: ECal.OperationFlags, cancellable?: Gio.Cancellable | null): boolean
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
    foreachViewNotifyProgress(onlyCompletedViews: boolean, percent: number, message?: string | null): void
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
    getAttachmentUrisSync(uid: string, rid: string | null, outAttachmentUris: GLib.Queue, cancellable?: Gio.Cancellable | null): boolean
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
    getFreeBusy(start: number, end: number, users: string[], cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
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
    getFreeBusySync(start: number, end: number, users: string[], outFreebusy: string[], cancellable?: Gio.Cancellable | null): boolean
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
    getObjectListSync(query: string, outObjects: GLib.Queue, cancellable?: Gio.Cancellable | null): boolean
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
    getObjectSync(uid: string, rid?: string | null, cancellable?: Gio.Cancellable | null): string
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
    getTimezoneSync(tzid: string, cancellable?: Gio.Cancellable | null): string
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
    modifyObjects(calobjs: string, mod: ECal.ObjModType, opflags: ECal.OperationFlags, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
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
    modifyObjectsSync(calobjs: string, mod: ECal.ObjModType, opflags: ECal.OperationFlags, cancellable?: Gio.Cancellable | null): boolean
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
    notifyPropertyChanged(propName: string, propValue?: string | null): void
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
    open(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
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
    openSync(cancellable?: Gio.Cancellable | null): boolean
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
    receiveObjects(calobj: string, opflags: ECal.OperationFlags, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
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
    receiveObjectsSync(calobj: string, opflags: ECal.OperationFlags, cancellable?: Gio.Cancellable | null): boolean
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
    refresh(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
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
    refreshSync(cancellable?: Gio.Cancellable | null): boolean
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
    removeObjects(componentIds: ECal.ComponentId[], mod: ECal.ObjModType, opflags: ECal.OperationFlags, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
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
    removeObjectsSync(componentIds: ECal.ComponentId[], mod: ECal.ObjModType, opflags: ECal.OperationFlags, cancellable?: Gio.Cancellable | null): boolean
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
    sendObjects(calobj: string, opflags: ECal.OperationFlags, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
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
    sendObjectsSync(calobj: string, opflags: ECal.OperationFlags, outUsers: GLib.Queue, cancellable?: Gio.Cancellable | null): string
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
    /* Methods of EBackend-1.2.EBackend.Backend */
    /**
     * Asynchronously calls the e_backend_credentials_required_sync() on the `backend,`
     * to inform clients that credentials are required.
     * 
     * When the operation is finished, `callback` will be called. You can then
     * call e_backend_credentials_required_finish() to get the result of the operation.
     * @param reason an #ESourceCredentialsReason, why the credentials are required
     * @param certificatePem PEM-encoded secure connection certificate, or an empty string
     * @param certificateErrors a bit-or of #GTlsCertificateFlags for secure connection certificate
     * @param opError a #GError with a description of the previous credentials error, or %NULL
     * @param cancellable optional #GCancellable object, or %NULL
     * @param callback a #GAsyncReadyCallback to call when the request is satisfied
     */
    credentialsRequired(reason: EDataServer.SourceCredentialsReason, certificatePem: string, certificateErrors: Gio.TlsCertificateFlags, opError?: GLib.Error | null, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes the operation started with e_backend_credentials_required().
     * 
     * If an error occurs, the function sets `error` and returns %FALSE.
     * @param result a #GAsyncResult
     */
    credentialsRequiredFinish(result: Gio.AsyncResult): boolean
    /**
     * Synchronously lets the clients know that the backned requires credentials to be
     * properly opened. It's a proxy function for e_source_invoke_credentials_required_sync(),
     * where can be found more information about actual parameters meaning.
     * 
     * The provided credentials are received through #EBackendClass.authenticate_sync()
     * method asynchronously.
     * 
     * If an error occurs, the function sets `error` and returns %FALSE.
     * @param reason an #ESourceCredentialsReason, why the credentials are required
     * @param certificatePem PEM-encoded secure connection certificate, or an empty string
     * @param certificateErrors a bit-or of #GTlsCertificateFlags for secure connection certificate
     * @param opError a #GError with a description of the previous credentials error, or %NULL
     * @param cancellable optional #GCancellable object, or %NULL
     */
    credentialsRequiredSync(reason: EDataServer.SourceCredentialsReason, certificatePem: string, certificateErrors: Gio.TlsCertificateFlags, opError?: GLib.Error | null, cancellable?: Gio.Cancellable | null): boolean
    /**
     * Makes sure that the "online" property is updated, that is, if there
     * is any destination reachability test pending, it'll be done immediately
     * and the only state will be updated as well.
     * @param cancellable optional #GCancellable object, or %NULL
     */
    ensureOnlineStateUpdated(cancellable?: Gio.Cancellable | null): void
    /**
     * Makes sure that the associated ESource::connection-status is connected. This is
     * useful in cases when the backend can connect to the destination without invoking
     * #EBackendClass.authenticate_sync(), possibly through e_backend_schedule_authenticate().
     */
    ensureSourceStatusConnected(): void
    /**
     * Provides destination server host name and port to which
     * the backend connects. This is used to determine required
     * connection point for e_backend_is_destination_reachable().
     * The `host` is a newly allocated string, which will be freed
     * with g_free(). When `backend` sets both `host` and `port,` then
     * it should return %TRUE, indicating it's a remote backend.
     * Default implementation returns %FALSE, which is treated
     * like the backend is local, no checking for server reachability
     * is possible.
     */
    getDestinationAddress(): [ /* returnType */ boolean, /* host */ string, /* port */ number ]
    /**
     * Returns the online state of `backend:` %TRUE if `backend` is online,
     * %FALSE if offline.
     * 
     * If the #EBackend:connectable property is non-%NULL, the `backend` will
     * automatically determine whether the network service should be reachable,
     * and hence whether the `backend` is #EBackend:online.  But subclasses may
     * override the online state if, for example, a connection attempt fails.
     */
    getOnline(): boolean
    /**
     * Returns the #ESource to which `backend` is paired.
     */
    getSource(): EDataServer.Source
    /**
     * Gets an instance of #EUserPrompter, associated with this `backend`.
     * 
     * The returned instance is owned by the `backend`.
     */
    getUserPrompter(): object | null
    /**
     * Checks whether the `backend<`!-- -->'s destination server, as returned
     * by e_backend_get_destination_address(), is reachable.
     * If the e_backend_get_destination_address() returns %FALSE, this function
     * returns %TRUE, meaning the destination is always reachable.
     * This uses #GNetworkMonitor<!-- -->'s g_network_monitor_can_reach()
     * for reachability tests.
     * @param cancellable a #GCancellable instance, or %NULL
     */
    isDestinationReachable(cancellable?: Gio.Cancellable | null): boolean
    /**
     * Let's the `backend` know that it'll be shut down shortly, no client connects
     * to it anymore. The `backend` can free any resources which reference it, for
     * example the opened views.
     */
    prepareShutdown(): void
    /**
     * Returns the socket endpoint for the network service to which `backend`
     * is a client, or %NULL if `backend` does not use network sockets.
     * 
     * The initial value of the #EBackend:connectable property is derived from
     * the #ESourceAuthentication extension of the `backend'`s #EBackend:source
     * property, if the extension is present.
     * 
     * The returned #GSocketConnectable is referenced for thread-safety and
     * must be unreferenced with g_object_unref() when finished with it.
     */
    refConnectable(): Gio.SocketConnectable | null
    /**
     * Returns the #GMainContext on which event sources for `backend` are to
     * be attached.
     * 
     * The returned #GMainContext is referenced for thread-safety and must be
     * unreferenced with g_main_context_unref() when finished with it.
     */
    refMainContext(): GLib.MainContext
    /**
     * Schedules a new authenticate session, cancelling any previously run.
     * This is usually done automatically, when an 'authenticate' signal is
     * received for the associated #ESource. With %NULL `credentials` an attempt
     * without it is run.
     * @param credentials a credentials to use to authenticate, or %NULL
     */
    scheduleAuthenticate(credentials?: EDataServer.NamedParameters | null): void
    /**
     * Asynchronously invokes e_backend_credentials_required(), but installs its
     * own callback which only prints a runtime warning on the console when
     * the call fails. The `who_calls` is a prefix of the console message.
     * This is useful when the caller just wants to start the operation
     * without having actual place where to show the operation result.
     * @param reason an #ESourceCredentialsReason, why the credentials are required
     * @param certificatePem PEM-encoded secure connection certificate, or an empty string
     * @param certificateErrors a bit-or of #GTlsCertificateFlags for secure connection certificate
     * @param opError a #GError with a description of the previous credentials error, or %NULL
     * @param cancellable optional #GCancellable object, or %NULL
     * @param whoCalls an identification who calls this
     */
    scheduleCredentialsRequired(reason: EDataServer.SourceCredentialsReason, certificatePem: string, certificateErrors: Gio.TlsCertificateFlags, opError?: GLib.Error | null, cancellable?: Gio.Cancellable | null, whoCalls?: string | null): void
    /**
     * Sets the socket endpoint for the network service to which `backend` is
     * a client.  This can be %NULL if `backend` does not use network sockets.
     * 
     * The initial value of the #EBackend:connectable property is derived from
     * the #ESourceAuthentication extension of the `backend'`s #EBackend:source
     * property, if the extension is present.
     * @param connectable a #GSocketConnectable, or %NULL
     */
    setConnectable(connectable: Gio.SocketConnectable): void
    /**
     * Sets the online state of `backend:` %TRUE if `backend` is online,
     * `FALSE` if offline.
     * 
     * If the #EBackend:connectable property is non-%NULL, the `backend` will
     * automatically determine whether the network service should be reachable,
     * and hence whether the `backend` is #EBackend:online.  But subclasses may
     * override the online state if, for example, a connection attempt fails.
     * @param online the online state
     */
    setOnline(online: boolean): void
    /**
     * Initiates a user trust prompt with given `parameters`.
     * 
     * When the operation is finished, `callback` will be called. You can then
     * call e_backend_trust_prompt_finish() to get the result of the operation.
     * @param parameters an #ENamedParameters with values for the trust prompt
     * @param cancellable optional #GCancellable object, or %NULL
     * @param callback a #GAsyncReadyCallback to call when the request is satisfied
     */
    trustPrompt(parameters: EDataServer.NamedParameters, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes the operation started with e_backend_trust_prompt().
     * If an error occurred, the function will set `error` and return
     * %E_TRUST_PROMPT_RESPONSE_UNKNOWN.
     * @param result a #GAsyncResult
     */
    trustPromptFinish(result: Gio.AsyncResult): EDataServer.TrustPromptResponse
    /**
     * Asks a user a trust prompt with given `parameters,` and returns what
     * user responded. This blocks until the response is delivered.
     * @param parameters an #ENamedParameters with values for the trust prompt
     * @param cancellable optional #GCancellable object, or %NULL
     */
    trustPromptSync(parameters: EDataServer.NamedParameters, cancellable?: Gio.Cancellable | null): EDataServer.TrustPromptResponse
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
     * @param sourceProperty the property on `source` to bind
     * @param target the target #GObject
     * @param targetProperty the property on `target` to bind
     * @param flags flags to pass to #GBinding
     */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    /**
     * Creates a binding between `source_property` on `source` and `target_property`
     * on `target,` allowing you to set the transformation functions to be used by
     * the binding.
     * 
     * This function is the language bindings friendly version of
     * g_object_bind_property_full(), using #GClosures instead of
     * function pointers.
     * @param sourceProperty the property on `source` to bind
     * @param target the target #GObject
     * @param targetProperty the property on `target` to bind
     * @param flags flags to pass to #GBinding
     * @param transformTo a #GClosure wrapping the transformation function     from the `source` to the `target,` or %NULL to use the default
     * @param transformFrom a #GClosure wrapping the transformation function     from the `target` to the `source,` or %NULL to use the default
     */
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    /**
     * This function is intended for #GObject implementations to re-enforce
     * a [floating][floating-ref] object reference. Doing this is seldom
     * required: all #GInitiallyUnowneds are created with a floating reference
     * which usually just needs to be sunken by calling g_object_ref_sink().
     */
    forceFloating(): void
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
    freezeNotify(): void
    /**
     * Gets a named field from the objects table of associations (see g_object_set_data()).
     * @param key name of the key for that association
     */
    getData(key: string): object | null
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
     * @param propertyName the name of the property to get
     * @param value return location for the property value
     */
    getProperty(propertyName: string, value: any): void
    /**
     * This function gets back user data pointers stored via
     * g_object_set_qdata().
     * @param quark A #GQuark, naming the user data pointer
     */
    getQdata(quark: GLib.Quark): object | null
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
    isFloating(): boolean
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
     * @param propertyName the name of a property installed on the class of `object`.
     */
    notify(propertyName: string): void
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
    notifyByPspec(pspec: GObject.ParamSpec): void
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
    refSink(): GObject.Object
    /**
     * Releases all references to other objects. This can be used to break
     * reference cycles.
     * 
     * This function should only be called from object system implementations.
     */
    runDispose(): void
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
    /**
     * Sets a property on an object.
     * @param propertyName the name of the property to set
     * @param value the value
     */
    setProperty(propertyName: string, value: any): void
    /**
     * Remove a specified datum from the object's data associations,
     * without invoking the association's destroy handler.
     * @param key name of the key
     */
    stealData(key: string): object | null
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
    stealQdata(quark: GLib.Quark): object | null
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
    thawNotify(): void
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
    watchClosure(closure: Function): void
    /* Methods of ECal-2.0.ECal.TimezoneCache */
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
     */
    getTimezone(tzid: string): ICalGLib.Timezone | null
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
    /* Signals of EDataCal-2.0.EDataCal.CalBackend */
    /**
     * Emitted when a client destroys its #ECalClient for `backend`
     * @param sender the bus name that invoked the "close" method
     */
    connect(sigName: "closed", callback: ((sender: string) => void)): number
    on(sigName: "closed", callback: (sender: string) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "closed", callback: (sender: string) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "closed", callback: (sender: string) => void): NodeJS.EventEmitter
    emit(sigName: "closed", sender: string): void
    /**
     * Emitted when the last client destroys its #ECalClient for
     * `backend`.  This signals the `backend` to begin final cleanup
     * tasks such as synchronizing data to permanent storage.
     */
    connect(sigName: "shutdown", callback: (() => void)): number
    on(sigName: "shutdown", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "shutdown", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "shutdown", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "shutdown"): void
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
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    /* Signals of ECal-2.0.ECal.TimezoneCache */
    /**
     * Emitted when a new #icaltimezone is added to `cache`.
     * @param zone the newly-added #ICalTimezone
     */
    connect(sigName: "timezone-added", callback: ((zone: ICalGLib.Timezone) => void)): number
    on(sigName: "timezone-added", callback: (zone: ICalGLib.Timezone) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "timezone-added", callback: (zone: ICalGLib.Timezone) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "timezone-added", callback: (zone: ICalGLib.Timezone) => void): NodeJS.EventEmitter
    emit(sigName: "timezone-added", zone: ICalGLib.Timezone): void
    connect(sigName: "notify::cache-dir", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::cache-dir", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::cache-dir", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::cache-dir", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::cache-dir", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::kind", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::kind", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::kind", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::kind", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::kind", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::proxy-resolver", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::proxy-resolver", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::proxy-resolver", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::proxy-resolver", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::proxy-resolver", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::registry", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::registry", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::registry", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::registry", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::registry", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::writable", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::writable", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::writable", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::writable", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::writable", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::connectable", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::connectable", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::connectable", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::connectable", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::connectable", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::main-context", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::main-context", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::main-context", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::main-context", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::main-context", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::online", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::online", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::online", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::online", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::online", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::source", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::source", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::source", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::source", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::source", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::user-prompter", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::user-prompter", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::user-prompter", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::user-prompter", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::user-prompter", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: CalBackend_ConstructProps)
    _init (config?: CalBackend_ConstructProps): void
    /* Static methods and pseudo-constructors */
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
    static $gtype: GObject.Type
}
interface CalBackendFactory_ConstructProps extends EBackend.BackendFactory_ConstructProps {
}
class CalBackendFactory {
    /* Properties of EDataServer-1.2.EDataServer.Extension */
    readonly extensible: EDataServer.Extensible
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of EBackend-1.2.EBackend.BackendFactory */
    /**
     * Returns a hash key which uniquely identifies `factory`.
     * 
     * Since only one instance of each #EBackendFactory subclass is ever created,
     * the hash key need only be unique among subclasses, not among instances of
     * each subclass.
     */
    getHashKey(): string
    /**
     * Returns the filename of the shared library for the module used
     * to load the backends provided by `factory`.
     */
    getModuleFilename(): string
    /**
     * Returns a new #EBackend instance for `source`.
     * @param source an #ESource
     */
    newBackend(source: EDataServer.Source): EBackend.Backend
    /**
     * Returns TRUE if the `factory` wants to share the subprocess
     * for all backends provided by itself. Otherwise, returns FALSE.
     */
    shareSubprocess(): boolean
    /* Methods of EDataServer-1.2.EDataServer.Extension */
    /**
     * Returns the object that `extension` extends.
     */
    getExtensible(): EDataServer.Extensible
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
     * @param sourceProperty the property on `source` to bind
     * @param target the target #GObject
     * @param targetProperty the property on `target` to bind
     * @param flags flags to pass to #GBinding
     */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    /**
     * Creates a binding between `source_property` on `source` and `target_property`
     * on `target,` allowing you to set the transformation functions to be used by
     * the binding.
     * 
     * This function is the language bindings friendly version of
     * g_object_bind_property_full(), using #GClosures instead of
     * function pointers.
     * @param sourceProperty the property on `source` to bind
     * @param target the target #GObject
     * @param targetProperty the property on `target` to bind
     * @param flags flags to pass to #GBinding
     * @param transformTo a #GClosure wrapping the transformation function     from the `source` to the `target,` or %NULL to use the default
     * @param transformFrom a #GClosure wrapping the transformation function     from the `target` to the `source,` or %NULL to use the default
     */
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    /**
     * This function is intended for #GObject implementations to re-enforce
     * a [floating][floating-ref] object reference. Doing this is seldom
     * required: all #GInitiallyUnowneds are created with a floating reference
     * which usually just needs to be sunken by calling g_object_ref_sink().
     */
    forceFloating(): void
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
    freezeNotify(): void
    /**
     * Gets a named field from the objects table of associations (see g_object_set_data()).
     * @param key name of the key for that association
     */
    getData(key: string): object | null
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
     * @param propertyName the name of the property to get
     * @param value return location for the property value
     */
    getProperty(propertyName: string, value: any): void
    /**
     * This function gets back user data pointers stored via
     * g_object_set_qdata().
     * @param quark A #GQuark, naming the user data pointer
     */
    getQdata(quark: GLib.Quark): object | null
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
    isFloating(): boolean
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
     * @param propertyName the name of a property installed on the class of `object`.
     */
    notify(propertyName: string): void
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
    notifyByPspec(pspec: GObject.ParamSpec): void
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
    refSink(): GObject.Object
    /**
     * Releases all references to other objects. This can be used to break
     * reference cycles.
     * 
     * This function should only be called from object system implementations.
     */
    runDispose(): void
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
    /**
     * Sets a property on an object.
     * @param propertyName the name of the property to set
     * @param value the value
     */
    setProperty(propertyName: string, value: any): void
    /**
     * Remove a specified datum from the object's data associations,
     * without invoking the association's destroy handler.
     * @param key name of the key
     */
    stealData(key: string): object | null
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
    stealQdata(quark: GLib.Quark): object | null
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
    thawNotify(): void
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
    watchClosure(closure: Function): void
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
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::extensible", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::extensible", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::extensible", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::extensible", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::extensible", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: CalBackendFactory_ConstructProps)
    _init (config?: CalBackendFactory_ConstructProps): void
    static $gtype: GObject.Type
}
interface CalBackendSExp_ConstructProps extends GObject.Object_ConstructProps {
}
class CalBackendSExp {
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of EDataCal-2.0.EDataCal.CalBackendSExp */
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
     * @param sourceProperty the property on `source` to bind
     * @param target the target #GObject
     * @param targetProperty the property on `target` to bind
     * @param flags flags to pass to #GBinding
     */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    /**
     * Creates a binding between `source_property` on `source` and `target_property`
     * on `target,` allowing you to set the transformation functions to be used by
     * the binding.
     * 
     * This function is the language bindings friendly version of
     * g_object_bind_property_full(), using #GClosures instead of
     * function pointers.
     * @param sourceProperty the property on `source` to bind
     * @param target the target #GObject
     * @param targetProperty the property on `target` to bind
     * @param flags flags to pass to #GBinding
     * @param transformTo a #GClosure wrapping the transformation function     from the `source` to the `target,` or %NULL to use the default
     * @param transformFrom a #GClosure wrapping the transformation function     from the `target` to the `source,` or %NULL to use the default
     */
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    /**
     * This function is intended for #GObject implementations to re-enforce
     * a [floating][floating-ref] object reference. Doing this is seldom
     * required: all #GInitiallyUnowneds are created with a floating reference
     * which usually just needs to be sunken by calling g_object_ref_sink().
     */
    forceFloating(): void
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
    freezeNotify(): void
    /**
     * Gets a named field from the objects table of associations (see g_object_set_data()).
     * @param key name of the key for that association
     */
    getData(key: string): object | null
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
     * @param propertyName the name of the property to get
     * @param value return location for the property value
     */
    getProperty(propertyName: string, value: any): void
    /**
     * This function gets back user data pointers stored via
     * g_object_set_qdata().
     * @param quark A #GQuark, naming the user data pointer
     */
    getQdata(quark: GLib.Quark): object | null
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
    isFloating(): boolean
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
     * @param propertyName the name of a property installed on the class of `object`.
     */
    notify(propertyName: string): void
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
    notifyByPspec(pspec: GObject.ParamSpec): void
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
    refSink(): GObject.Object
    /**
     * Releases all references to other objects. This can be used to break
     * reference cycles.
     * 
     * This function should only be called from object system implementations.
     */
    runDispose(): void
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
    /**
     * Sets a property on an object.
     * @param propertyName the name of the property to set
     * @param value the value
     */
    setProperty(propertyName: string, value: any): void
    /**
     * Remove a specified datum from the object's data associations,
     * without invoking the association's destroy handler.
     * @param key name of the key
     */
    stealData(key: string): object | null
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
    stealQdata(quark: GLib.Quark): object | null
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
    thawNotify(): void
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
    watchClosure(closure: Function): void
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
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: CalBackendSExp_ConstructProps)
    _init (config?: CalBackendSExp_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(text: string): CalBackendSExp
    static $gtype: GObject.Type
}
interface CalBackendSync_ConstructProps extends CalBackend_ConstructProps {
}
class CalBackendSync {
    /* Properties of EDataCal-2.0.EDataCal.CalBackend */
    cacheDir: string
    readonly kind: number
    readonly proxyResolver: Gio.ProxyResolver
    readonly registry: EDataServer.SourceRegistry
    writable: boolean
    /* Properties of EBackend-1.2.EBackend.Backend */
    connectable: Gio.SocketConnectable
    readonly mainContext: GLib.MainContext
    online: boolean
    readonly source: EDataServer.Source
    readonly userPrompter: EBackend.UserPrompter
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of EDataCal-2.0.EDataCal.CalBackendSync */
    /**
     * Calls the add_timezone_sync method on the given backend.
     * @param cal An EDataCal object.
     * @param cancellable a #GCancellable for the operation
     * @param tzobject VTIMEZONE object to be added.
     */
    addTimezone(cal: DataCal, cancellable: Gio.Cancellable | null, tzobject: string): void
    /**
     * Calls the create_objects_sync method on the given backend.
     * @param cal An EDataCal object.
     * @param cancellable a #GCancellable for the operation
     * @param calobjs The objects to be added.
     * @param opflags bit-or of #ECalOperationFlags
     */
    createObjects(cal: DataCal, cancellable: Gio.Cancellable | null, calobjs: string[], opflags: ECal.OperationFlags): [ /* uids */ string[], /* newComponents */ ECal.Component[] ]
    /**
     * Calls the discard_alarm_sync method on the given backend.
     * @param cal An EDataCal object.
     * @param cancellable a #GCancellable for the operation
     * @param uid Unique id of the calendar object.
     * @param rid Recurrence id of the calendar object.
     * @param auid Alarm ID to remove.
     * @param opflags bit-or of #ECalOperationFlags
     */
    discardAlarm(cal: DataCal, cancellable: Gio.Cancellable | null, uid: string, rid: string, auid: string, opflags: ECal.OperationFlags): void
    /**
     * Calls the get_attachment_uris_sync method on the given backend.
     * @param cal An EDataCal object.
     * @param cancellable a #GCancellable for the operation
     * @param uid Unique id of the calendar object.
     * @param rid Recurrence id of the calendar object.
     * @param attachments Placeholder for list of returned attachment uris.
     */
    getAttachmentUris(cal: DataCal, cancellable: Gio.Cancellable | null, uid: string, rid: string, attachments: string[]): void
    /**
     * Calls the get_free_busy_sync method on the given backend.
     * @param cal An EDataCal object.
     * @param cancellable a #GCancellable for the operation
     * @param users List of users to get F/B info from.
     * @param start Time range start.
     * @param end Time range end.
     */
    getFreeBusy(cal: DataCal, cancellable: Gio.Cancellable | null, users: string[], start: number, end: number): /* freebusyobjects */ string[]
    /**
     * Calls the get_object_sync method on the given backend.
     * @param cal An EDataCal object.
     * @param cancellable a #GCancellable for the operation
     * @param uid UID of the object to get.
     * @param rid Recurrence ID of the specific instance to get, or %NULL if    getting the master object.
     */
    getObject(cal: DataCal, cancellable: Gio.Cancellable | null, uid: string, rid?: string | null): /* calobj */ string
    /**
     * Calls the get_object_list_sync method on the given backend.
     * @param cal An EDataCal object.
     * @param cancellable a #GCancellable for the operation
     * @param sexp Search query.
     */
    getObjectList(cal: DataCal, cancellable: Gio.Cancellable | null, sexp: string): /* calobjs */ string[]
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
    getTimezone(cal: DataCal, cancellable: Gio.Cancellable | null, tzid: string, tzobject: string): void
    /**
     * Calls the modify_objects_sync method on the given backend.
     * @param cal An EDataCal object.
     * @param cancellable a #GCancellable for the operation
     * @param calobjs Objects to be modified.
     * @param mod Type of modification to be done.
     * @param opflags bit-or of #ECalOperationFlags
     */
    modifyObjects(cal: DataCal, cancellable: Gio.Cancellable | null, calobjs: string[], mod: ECal.ObjModType, opflags: ECal.OperationFlags): [ /* oldComponents */ ECal.Component[], /* newComponents */ ECal.Component[] ]
    /**
     * Calls the open_sync method on the given backend.
     * @param cal An EDataCal object.
     * @param cancellable a #GCancellable for the operation or just create it when it does not exist.
     */
    open(cal: DataCal, cancellable?: Gio.Cancellable | null): void
    /**
     * Calls the receive_objects_sync method on the given backend.
     * @param cal An EDataCal object.
     * @param cancellable a #GCancellable for the operation
     * @param calobj iCalendar object to receive.
     * @param opflags bit-or of #ECalOperationFlags
     */
    receiveObjects(cal: DataCal, cancellable: Gio.Cancellable | null, calobj: string, opflags: ECal.OperationFlags): void
    /**
     * Calls the refresh_sync method on the given backend.
     * @param cal An EDataCal object.
     * @param cancellable a #GCancellable for the operation
     */
    refresh(cal: DataCal, cancellable?: Gio.Cancellable | null): void
    /**
     * Calls the remove_objects_sync method on the given backend.
     * @param cal An EDataCal object.
     * @param cancellable a #GCancellable for the operation
     * @param ids List of #ECalComponentId objects identifying the objects to remove.
     * @param mod Type of removal.
     * @param opflags bit-or of #ECalOperationFlags
     */
    removeObjects(cal: DataCal, cancellable: Gio.Cancellable | null, ids: ECal.ComponentId[], mod: ECal.ObjModType, opflags: ECal.OperationFlags): [ /* oldComponents */ ECal.Component[], /* newComponents */ ECal.Component[] ]
    /**
     * Calls the send_objects_sync method on the given backend.
     * @param cal An EDataCal object.
     * @param cancellable a #GCancellable for the operation
     * @param calobj The iCalendar object to send.
     * @param opflags bit-or of #ECalOperationFlags
     * @param users List of users to send notifications to.
     */
    sendObjects(cal: DataCal, cancellable: Gio.Cancellable | null, calobj: string, opflags: ECal.OperationFlags, users: string[]): /* modifiedCalobj */ string
    /* Methods of EDataCal-2.0.EDataCal.CalBackend */
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
    addTimezoneSync(tzobject: string, cancellable?: Gio.Cancellable | null): boolean
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
    createObjects(calobjs: string, opflags: ECal.OperationFlags, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
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
    createObjectsSync(calobjs: string, opflags: ECal.OperationFlags, outUids: GLib.Queue, cancellable?: Gio.Cancellable | null): boolean
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
    discardAlarm(uid: string, rid: string | null, alarmUid: string, opflags: ECal.OperationFlags, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
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
    discardAlarmSync(uid: string, rid: string | null, alarmUid: string, opflags: ECal.OperationFlags, cancellable?: Gio.Cancellable | null): boolean
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
    foreachViewNotifyProgress(onlyCompletedViews: boolean, percent: number, message?: string | null): void
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
    getAttachmentUrisSync(uid: string, rid: string | null, outAttachmentUris: GLib.Queue, cancellable?: Gio.Cancellable | null): boolean
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
    getFreeBusy(start: number, end: number, users: string[], cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
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
    getFreeBusySync(start: number, end: number, users: string[], outFreebusy: string[], cancellable?: Gio.Cancellable | null): boolean
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
    getObjectListSync(query: string, outObjects: GLib.Queue, cancellable?: Gio.Cancellable | null): boolean
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
    getObjectSync(uid: string, rid?: string | null, cancellable?: Gio.Cancellable | null): string
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
    getTimezoneSync(tzid: string, cancellable?: Gio.Cancellable | null): string
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
    modifyObjects(calobjs: string, mod: ECal.ObjModType, opflags: ECal.OperationFlags, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
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
    modifyObjectsSync(calobjs: string, mod: ECal.ObjModType, opflags: ECal.OperationFlags, cancellable?: Gio.Cancellable | null): boolean
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
    notifyPropertyChanged(propName: string, propValue?: string | null): void
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
    open(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
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
    openSync(cancellable?: Gio.Cancellable | null): boolean
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
    receiveObjects(calobj: string, opflags: ECal.OperationFlags, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
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
    receiveObjectsSync(calobj: string, opflags: ECal.OperationFlags, cancellable?: Gio.Cancellable | null): boolean
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
    refresh(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
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
    refreshSync(cancellable?: Gio.Cancellable | null): boolean
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
    removeObjects(componentIds: ECal.ComponentId[], mod: ECal.ObjModType, opflags: ECal.OperationFlags, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
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
    removeObjectsSync(componentIds: ECal.ComponentId[], mod: ECal.ObjModType, opflags: ECal.OperationFlags, cancellable?: Gio.Cancellable | null): boolean
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
    sendObjects(calobj: string, opflags: ECal.OperationFlags, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
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
    sendObjectsSync(calobj: string, opflags: ECal.OperationFlags, outUsers: GLib.Queue, cancellable?: Gio.Cancellable | null): string
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
    /* Methods of EBackend-1.2.EBackend.Backend */
    /**
     * Asynchronously calls the e_backend_credentials_required_sync() on the `backend,`
     * to inform clients that credentials are required.
     * 
     * When the operation is finished, `callback` will be called. You can then
     * call e_backend_credentials_required_finish() to get the result of the operation.
     * @param reason an #ESourceCredentialsReason, why the credentials are required
     * @param certificatePem PEM-encoded secure connection certificate, or an empty string
     * @param certificateErrors a bit-or of #GTlsCertificateFlags for secure connection certificate
     * @param opError a #GError with a description of the previous credentials error, or %NULL
     * @param cancellable optional #GCancellable object, or %NULL
     * @param callback a #GAsyncReadyCallback to call when the request is satisfied
     */
    credentialsRequired(reason: EDataServer.SourceCredentialsReason, certificatePem: string, certificateErrors: Gio.TlsCertificateFlags, opError?: GLib.Error | null, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes the operation started with e_backend_credentials_required().
     * 
     * If an error occurs, the function sets `error` and returns %FALSE.
     * @param result a #GAsyncResult
     */
    credentialsRequiredFinish(result: Gio.AsyncResult): boolean
    /**
     * Synchronously lets the clients know that the backned requires credentials to be
     * properly opened. It's a proxy function for e_source_invoke_credentials_required_sync(),
     * where can be found more information about actual parameters meaning.
     * 
     * The provided credentials are received through #EBackendClass.authenticate_sync()
     * method asynchronously.
     * 
     * If an error occurs, the function sets `error` and returns %FALSE.
     * @param reason an #ESourceCredentialsReason, why the credentials are required
     * @param certificatePem PEM-encoded secure connection certificate, or an empty string
     * @param certificateErrors a bit-or of #GTlsCertificateFlags for secure connection certificate
     * @param opError a #GError with a description of the previous credentials error, or %NULL
     * @param cancellable optional #GCancellable object, or %NULL
     */
    credentialsRequiredSync(reason: EDataServer.SourceCredentialsReason, certificatePem: string, certificateErrors: Gio.TlsCertificateFlags, opError?: GLib.Error | null, cancellable?: Gio.Cancellable | null): boolean
    /**
     * Makes sure that the "online" property is updated, that is, if there
     * is any destination reachability test pending, it'll be done immediately
     * and the only state will be updated as well.
     * @param cancellable optional #GCancellable object, or %NULL
     */
    ensureOnlineStateUpdated(cancellable?: Gio.Cancellable | null): void
    /**
     * Makes sure that the associated ESource::connection-status is connected. This is
     * useful in cases when the backend can connect to the destination without invoking
     * #EBackendClass.authenticate_sync(), possibly through e_backend_schedule_authenticate().
     */
    ensureSourceStatusConnected(): void
    /**
     * Provides destination server host name and port to which
     * the backend connects. This is used to determine required
     * connection point for e_backend_is_destination_reachable().
     * The `host` is a newly allocated string, which will be freed
     * with g_free(). When `backend` sets both `host` and `port,` then
     * it should return %TRUE, indicating it's a remote backend.
     * Default implementation returns %FALSE, which is treated
     * like the backend is local, no checking for server reachability
     * is possible.
     */
    getDestinationAddress(): [ /* returnType */ boolean, /* host */ string, /* port */ number ]
    /**
     * Returns the online state of `backend:` %TRUE if `backend` is online,
     * %FALSE if offline.
     * 
     * If the #EBackend:connectable property is non-%NULL, the `backend` will
     * automatically determine whether the network service should be reachable,
     * and hence whether the `backend` is #EBackend:online.  But subclasses may
     * override the online state if, for example, a connection attempt fails.
     */
    getOnline(): boolean
    /**
     * Returns the #ESource to which `backend` is paired.
     */
    getSource(): EDataServer.Source
    /**
     * Gets an instance of #EUserPrompter, associated with this `backend`.
     * 
     * The returned instance is owned by the `backend`.
     */
    getUserPrompter(): object | null
    /**
     * Checks whether the `backend<`!-- -->'s destination server, as returned
     * by e_backend_get_destination_address(), is reachable.
     * If the e_backend_get_destination_address() returns %FALSE, this function
     * returns %TRUE, meaning the destination is always reachable.
     * This uses #GNetworkMonitor<!-- -->'s g_network_monitor_can_reach()
     * for reachability tests.
     * @param cancellable a #GCancellable instance, or %NULL
     */
    isDestinationReachable(cancellable?: Gio.Cancellable | null): boolean
    /**
     * Let's the `backend` know that it'll be shut down shortly, no client connects
     * to it anymore. The `backend` can free any resources which reference it, for
     * example the opened views.
     */
    prepareShutdown(): void
    /**
     * Returns the socket endpoint for the network service to which `backend`
     * is a client, or %NULL if `backend` does not use network sockets.
     * 
     * The initial value of the #EBackend:connectable property is derived from
     * the #ESourceAuthentication extension of the `backend'`s #EBackend:source
     * property, if the extension is present.
     * 
     * The returned #GSocketConnectable is referenced for thread-safety and
     * must be unreferenced with g_object_unref() when finished with it.
     */
    refConnectable(): Gio.SocketConnectable | null
    /**
     * Returns the #GMainContext on which event sources for `backend` are to
     * be attached.
     * 
     * The returned #GMainContext is referenced for thread-safety and must be
     * unreferenced with g_main_context_unref() when finished with it.
     */
    refMainContext(): GLib.MainContext
    /**
     * Schedules a new authenticate session, cancelling any previously run.
     * This is usually done automatically, when an 'authenticate' signal is
     * received for the associated #ESource. With %NULL `credentials` an attempt
     * without it is run.
     * @param credentials a credentials to use to authenticate, or %NULL
     */
    scheduleAuthenticate(credentials?: EDataServer.NamedParameters | null): void
    /**
     * Asynchronously invokes e_backend_credentials_required(), but installs its
     * own callback which only prints a runtime warning on the console when
     * the call fails. The `who_calls` is a prefix of the console message.
     * This is useful when the caller just wants to start the operation
     * without having actual place where to show the operation result.
     * @param reason an #ESourceCredentialsReason, why the credentials are required
     * @param certificatePem PEM-encoded secure connection certificate, or an empty string
     * @param certificateErrors a bit-or of #GTlsCertificateFlags for secure connection certificate
     * @param opError a #GError with a description of the previous credentials error, or %NULL
     * @param cancellable optional #GCancellable object, or %NULL
     * @param whoCalls an identification who calls this
     */
    scheduleCredentialsRequired(reason: EDataServer.SourceCredentialsReason, certificatePem: string, certificateErrors: Gio.TlsCertificateFlags, opError?: GLib.Error | null, cancellable?: Gio.Cancellable | null, whoCalls?: string | null): void
    /**
     * Sets the socket endpoint for the network service to which `backend` is
     * a client.  This can be %NULL if `backend` does not use network sockets.
     * 
     * The initial value of the #EBackend:connectable property is derived from
     * the #ESourceAuthentication extension of the `backend'`s #EBackend:source
     * property, if the extension is present.
     * @param connectable a #GSocketConnectable, or %NULL
     */
    setConnectable(connectable: Gio.SocketConnectable): void
    /**
     * Sets the online state of `backend:` %TRUE if `backend` is online,
     * `FALSE` if offline.
     * 
     * If the #EBackend:connectable property is non-%NULL, the `backend` will
     * automatically determine whether the network service should be reachable,
     * and hence whether the `backend` is #EBackend:online.  But subclasses may
     * override the online state if, for example, a connection attempt fails.
     * @param online the online state
     */
    setOnline(online: boolean): void
    /**
     * Initiates a user trust prompt with given `parameters`.
     * 
     * When the operation is finished, `callback` will be called. You can then
     * call e_backend_trust_prompt_finish() to get the result of the operation.
     * @param parameters an #ENamedParameters with values for the trust prompt
     * @param cancellable optional #GCancellable object, or %NULL
     * @param callback a #GAsyncReadyCallback to call when the request is satisfied
     */
    trustPrompt(parameters: EDataServer.NamedParameters, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes the operation started with e_backend_trust_prompt().
     * If an error occurred, the function will set `error` and return
     * %E_TRUST_PROMPT_RESPONSE_UNKNOWN.
     * @param result a #GAsyncResult
     */
    trustPromptFinish(result: Gio.AsyncResult): EDataServer.TrustPromptResponse
    /**
     * Asks a user a trust prompt with given `parameters,` and returns what
     * user responded. This blocks until the response is delivered.
     * @param parameters an #ENamedParameters with values for the trust prompt
     * @param cancellable optional #GCancellable object, or %NULL
     */
    trustPromptSync(parameters: EDataServer.NamedParameters, cancellable?: Gio.Cancellable | null): EDataServer.TrustPromptResponse
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
     * @param sourceProperty the property on `source` to bind
     * @param target the target #GObject
     * @param targetProperty the property on `target` to bind
     * @param flags flags to pass to #GBinding
     */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    /**
     * Creates a binding between `source_property` on `source` and `target_property`
     * on `target,` allowing you to set the transformation functions to be used by
     * the binding.
     * 
     * This function is the language bindings friendly version of
     * g_object_bind_property_full(), using #GClosures instead of
     * function pointers.
     * @param sourceProperty the property on `source` to bind
     * @param target the target #GObject
     * @param targetProperty the property on `target` to bind
     * @param flags flags to pass to #GBinding
     * @param transformTo a #GClosure wrapping the transformation function     from the `source` to the `target,` or %NULL to use the default
     * @param transformFrom a #GClosure wrapping the transformation function     from the `target` to the `source,` or %NULL to use the default
     */
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    /**
     * This function is intended for #GObject implementations to re-enforce
     * a [floating][floating-ref] object reference. Doing this is seldom
     * required: all #GInitiallyUnowneds are created with a floating reference
     * which usually just needs to be sunken by calling g_object_ref_sink().
     */
    forceFloating(): void
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
    freezeNotify(): void
    /**
     * Gets a named field from the objects table of associations (see g_object_set_data()).
     * @param key name of the key for that association
     */
    getData(key: string): object | null
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
     * @param propertyName the name of the property to get
     * @param value return location for the property value
     */
    getProperty(propertyName: string, value: any): void
    /**
     * This function gets back user data pointers stored via
     * g_object_set_qdata().
     * @param quark A #GQuark, naming the user data pointer
     */
    getQdata(quark: GLib.Quark): object | null
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
    isFloating(): boolean
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
     * @param propertyName the name of a property installed on the class of `object`.
     */
    notify(propertyName: string): void
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
    notifyByPspec(pspec: GObject.ParamSpec): void
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
    refSink(): GObject.Object
    /**
     * Releases all references to other objects. This can be used to break
     * reference cycles.
     * 
     * This function should only be called from object system implementations.
     */
    runDispose(): void
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
    /**
     * Sets a property on an object.
     * @param propertyName the name of the property to set
     * @param value the value
     */
    setProperty(propertyName: string, value: any): void
    /**
     * Remove a specified datum from the object's data associations,
     * without invoking the association's destroy handler.
     * @param key name of the key
     */
    stealData(key: string): object | null
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
    stealQdata(quark: GLib.Quark): object | null
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
    thawNotify(): void
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
    watchClosure(closure: Function): void
    /* Methods of ECal-2.0.ECal.TimezoneCache */
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
     */
    getTimezone(tzid: string): ICalGLib.Timezone | null
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
    /* Signals of EDataCal-2.0.EDataCal.CalBackend */
    /**
     * Emitted when a client destroys its #ECalClient for `backend`
     * @param sender the bus name that invoked the "close" method
     */
    connect(sigName: "closed", callback: ((sender: string) => void)): number
    on(sigName: "closed", callback: (sender: string) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "closed", callback: (sender: string) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "closed", callback: (sender: string) => void): NodeJS.EventEmitter
    emit(sigName: "closed", sender: string): void
    /**
     * Emitted when the last client destroys its #ECalClient for
     * `backend`.  This signals the `backend` to begin final cleanup
     * tasks such as synchronizing data to permanent storage.
     */
    connect(sigName: "shutdown", callback: (() => void)): number
    on(sigName: "shutdown", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "shutdown", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "shutdown", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "shutdown"): void
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
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    /* Signals of ECal-2.0.ECal.TimezoneCache */
    /**
     * Emitted when a new #icaltimezone is added to `cache`.
     * @param zone the newly-added #ICalTimezone
     */
    connect(sigName: "timezone-added", callback: ((zone: ICalGLib.Timezone) => void)): number
    on(sigName: "timezone-added", callback: (zone: ICalGLib.Timezone) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "timezone-added", callback: (zone: ICalGLib.Timezone) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "timezone-added", callback: (zone: ICalGLib.Timezone) => void): NodeJS.EventEmitter
    emit(sigName: "timezone-added", zone: ICalGLib.Timezone): void
    connect(sigName: "notify::cache-dir", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::cache-dir", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::cache-dir", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::cache-dir", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::cache-dir", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::kind", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::kind", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::kind", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::kind", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::kind", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::proxy-resolver", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::proxy-resolver", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::proxy-resolver", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::proxy-resolver", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::proxy-resolver", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::registry", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::registry", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::registry", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::registry", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::registry", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::writable", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::writable", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::writable", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::writable", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::writable", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::connectable", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::connectable", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::connectable", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::connectable", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::connectable", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::main-context", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::main-context", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::main-context", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::main-context", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::main-context", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::online", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::online", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::online", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::online", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::online", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::source", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::source", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::source", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::source", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::source", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::user-prompter", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::user-prompter", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::user-prompter", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::user-prompter", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::user-prompter", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: CalBackendSync_ConstructProps)
    _init (config?: CalBackendSync_ConstructProps): void
    static $gtype: GObject.Type
}
interface CalCache_ConstructProps extends EBackend.Cache_ConstructProps {
}
class CalCache {
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of EDataCal-2.0.EDataCal.CalCache */
    /**
     * Checkes whether the `cal_cache` contains an object with
     * the given `uid` and `rid`. The `rid` can be an empty string
     * or %NULL to search for the master object, otherwise the check
     * is done for a detached instance, not for a recurrence instance.
     * @param uid component UID
     * @param rid optional component Recurrence-ID or %NULL
     * @param deletedFlag one of #ECacheDeletedFlag enum
     */
    contains(uid: string, rid: string | null, deletedFlag: EBackend.CacheDeletedFlag): boolean
    /**
     * Deletes all locally stored attachments beside the cache file from the disk.
     * This doesn't modify the `component`. It's usually called before the `component`
     * is being removed from the `cal_cache`.
     * @param component an #ICalComponent
     * @param cancellable optional #GCancellable object, or %NULL
     */
    deleteAttachments(component: ICalGLib.Component, cancellable?: Gio.Cancellable | null): boolean
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
    dupTimezoneAsString(tzid: string, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* outZoneString */ string ]
    /**
     * Gets a component identified by `uid,` and optionally by the `rid,`
     * from the `cal_cache`. The returned `out_component` should be freed with
     * g_object_unref(), when no longer needed.
     * @param uid a UID of the component
     * @param rid an optional Recurrence-ID
     * @param cancellable optional #GCancellable object, or %NULL
     */
    getComponent(uid: string, rid?: string | null, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* outComponent */ ECal.Component ]
    /**
     * Gets a component identified by `uid,` and optionally by the `rid,`
     * from the `cal_cache`. The returned `out_icalstring` should be freed with
     * g_free(), when no longer needed.
     * @param uid a UID of the component
     * @param rid an optional Recurrence-ID
     * @param cancellable optional #GCancellable object, or %NULL
     */
    getComponentAsString(uid: string, rid?: string | null, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* outIcalstring */ string ]
    /**
     * Gets the custom flags previously set for `uid` and `rid,` either with
     * e_cal_cache_set_component_custom_flags(), when adding components or
     * when removing components in offline.
     * @param uid a UID of the component
     * @param rid an optional Recurrence-ID
     * @param cancellable optional #GCancellable object, or %NULL
     */
    getComponentCustomFlags(uid: string, rid?: string | null, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* outCustomFlags */ number ]
    /**
     * Gets the extra data previously set for `uid` and `rid,` either with
     * e_cal_cache_set_component_extra() or when adding components.
     * @param uid a UID of the component
     * @param rid an optional Recurrence-ID
     * @param cancellable optional #GCancellable object, or %NULL
     */
    getComponentExtra(uid: string, rid?: string | null, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* outExtra */ string ]
    /**
     * Gets the master object and all detached instances for a component
     * identified by the `uid`. Free the returned #GSList with
     * g_slist_free_full (components, g_object_unref); when
     * no longer needed.
     * @param uid a UID of the component
     * @param cancellable optional #GCancellable object, or %NULL
     */
    getComponentsByUid(uid: string, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* outComponents */ ECal.Component[] ]
    /**
     * Gets the master object and all detached instances as string
     * for a component identified by the `uid`. Free the returned #GSList
     * with g_slist_free_full (icalstrings, g_free); when no longer needed.
     * @param uid a UID of the component
     * @param cancellable optional #GCancellable object, or %NULL
     */
    getComponentsByUidAsString(uid: string, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* outIcalstrings */ string[] ]
    /**
     * Gets a list of components which occur in the given time range.
     * It's not an error if none is found.
     * @param rangeStart start of the range, as time_t, inclusive
     * @param rangeEnd end of the range, as time_t, exclusive
     * @param cancellable optional #GCancellable object, or %NULL
     */
    getComponentsInRange(rangeStart: number, rangeEnd: number, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* outComponents */ ECal.Component[] ]
    /**
     * Gets a list of components, as iCal strings, which occur in the given time range.
     * @param rangeStart start of the range, as time_t, inclusive
     * @param rangeEnd end of the range, as time_t, exclusive
     * @param cancellable optional #GCancellable object, or %NULL
     */
    getComponentsInRangeAsStrings(rangeStart: number, rangeEnd: number, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* outIcalstrings */ string[] ]
    /**
     * Gets all the ID-s the `extra` data is set for.
     * 
     * The `out_ids` should be freed with
     * g_slist_free_full (ids, (GDestroyNotify) e_cal_component_id_free);
     * when no longer needed.
     * @param extra an extra column value to search for
     * @param cancellable optional #GCancellable object, or %NULL
     */
    getIdsWithExtra(extra: string, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* outIds */ ECal.ComponentId[] ]
    /**
     * The same as e_cache_get_offline_changes(), only splits the saved UID
     * into UID and RID and saved the data into #ECalCacheOfflineChange structure.
     * @param cancellable optional #GCancellable object, or %NULL
     */
    getOfflineChanges(cancellable?: Gio.Cancellable | null): CalCacheOfflineChange[]
    /**
     * This is a wrapper of e_cache_get_offline_state(), ensuring that
     * a correct #ECache UID will be used.
     * @param uid a UID of the component
     * @param rid an optional Recurrence-ID
     * @param cancellable optional #GCancellable object, or %NULL
     */
    getOfflineState(uid: string, rid?: string | null, cancellable?: Gio.Cancellable | null): EBackend.OfflineState
    /**
     * Gets a timezone with given `tzid,` which had been previously put
     * into the `cal_cache` with e_cal_cache_put_timezone().
     * The returned ICalTimezone is owned by the `cal_cache` and should
     * not be freed.
     * @param tzid a timezone ID to get
     * @param cancellable optional #GCancellable object, or %NULL
     */
    getTimezone(tzid: string, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* outZone */ ICalGLib.Timezone ]
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
    /**
     * Adds a `component` into the `cal_cache`. Any existing with the same UID
     * and RID is replaced.
     * @param component an #ECalComponent to put into the `cal_cache`
     * @param extra an extra data to store in association with the `component`
     * @param customFlags custom flags for the `component,` not interpreted by the `cal_cache`
     * @param offlineFlag one of #ECacheOfflineFlag, whether putting this component in offline
     * @param cancellable optional #GCancellable object, or %NULL
     */
    putComponent(component: ECal.Component, extra: string | null, customFlags: number, offlineFlag: EBackend.CacheOfflineFlag, cancellable?: Gio.Cancellable | null): boolean
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
    putComponents(components: ECal.Component[], extras: string[] | null, customFlags: number[] | null, offlineFlag: EBackend.CacheOfflineFlag, cancellable?: Gio.Cancellable | null): boolean
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
    putTimezone(zone: ICalGLib.Timezone, incRefCounts: number, cancellable?: Gio.Cancellable | null): boolean
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
    removeComponent(uid: string, rid: string | null, customFlags: number, offlineFlag: EBackend.CacheOfflineFlag, cancellable?: Gio.Cancellable | null): boolean
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
    removeComponents(ids: ECal.ComponentId[], customFlags: number[] | null, offlineFlag: EBackend.CacheOfflineFlag, cancellable?: Gio.Cancellable | null): boolean
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
    removeTimezone(tzid: string, decRefCounts: number, cancellable?: Gio.Cancellable | null): boolean
    /**
     * Removes all stored timezones from the `cal_cache`.
     * @param cancellable optional #GCancellable object, or %NULL
     */
    removeTimezones(cancellable?: Gio.Cancellable | null): boolean
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
    search(sexp?: string | null, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* outData */ CalCacheSearchData[] ]
    /**
     * Searches the `cal_cache` with the given `sexp` and
     * returns those components which satisfy the search
     * expression. The `out_components` should be freed with
     * g_slist_free_full (components, g_object_unref); when
     * no longer needed.
     * @param sexp search expression; use %NULL or an empty string to list all stored components
     * @param cancellable optional #GCancellable object, or %NULL
     */
    searchComponents(sexp?: string | null, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* outComponents */ ECal.Component[] ]
    /**
     * Searches the `cal_cache` with the given `sexp` and returns ECalComponentId
     * for those components which satisfy the search expression.
     * The `out_ids` should be freed with
     * g_slist_free_full (ids, (GDestroyNotify) e_cal_component_id_free);
     * when no longer needed.
     * @param sexp search expression; use %NULL or an empty string to list all stored components
     * @param cancellable optional #GCancellable object, or %NULL
     */
    searchIds(sexp?: string | null, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* outIds */ ECal.ComponentId[] ]
    /**
     * Searches the `cal_cache` with the given `sexp` and calls `func` for each
     * row which satisfy the search expression.
     * @param sexp search expression; use %NULL or an empty string to list all stored components
     * @param cancellable optional #GCancellable object, or %NULL
     */
    searchWithCallback(sexp?: string | null, cancellable?: Gio.Cancellable | null): boolean
    /**
     * Sets or replaces the custom flags associated with a component
     * identified by `uid` and optionally `rid`.
     * @param uid a UID of the component
     * @param rid an optional Recurrence-ID
     * @param customFlags the custom flags to set for the component
     * @param cancellable optional #GCancellable object, or %NULL
     */
    setComponentCustomFlags(uid: string, rid: string | null, customFlags: number, cancellable?: Gio.Cancellable | null): boolean
    /**
     * Sets or replaces the extra data associated with a component
     * identified by `uid` and optionally `rid`.
     * @param uid a UID of the component
     * @param rid an optional Recurrence-ID
     * @param extra extra data to set for the component
     * @param cancellable optional #GCancellable object, or %NULL
     */
    setComponentExtra(uid: string, rid?: string | null, extra?: string | null, cancellable?: Gio.Cancellable | null): boolean
    /* Methods of EBackend-1.2.EBackend.Cache */
    /**
     * Instructs the `cache` to change its revision. In case the revision
     * change is frozen with e_cache_freeze_revision_change() it notes to
     * change the revision once the revision change is fully thaw.
     */
    changeRevision(): void
    /**
     * Marks all objects as being fully synchronized with the server and
     * removes those which are marked as locally deleted.
     * @param cancellable optional #GCancellable object, or %NULL
     */
    clearOfflineChanges(cancellable?: Gio.Cancellable | null): boolean
    /**
     * Checkes whether the `cache` contains an object with
     * the given `uid`.
     * @param uid a unique identifier of an object
     * @param deletedFlag one of #ECacheDeletedFlag enum
     */
    contains(uid: string, deletedFlag: EBackend.CacheDeletedFlag): boolean
    /**
     * Adds every column value which is not part of the `other_columns` to it,
     * except of E_CACHE_COLUMN_UID, E_CACHE_COLUMN_REVISION, E_CACHE_COLUMN_OBJECT
     * and E_CACHE_COLUMN_STATE columns.
     * 
     * This can be used within the callback of e_cache_foreach_update().
     * @param columnNames column names
     * @param columnValues column values
     * @param otherColumns an #ECacheColumnValues to fill
     */
    copyMissingToColumnValues(columnNames: string[], columnValues: string[], otherColumns: EBackend.CacheColumnValues): /* otherColumns */ EBackend.CacheColumnValues
    dupKey(key: string): string
    dupRevision(): string
    /**
     * Erases the cache and all of its content from the disk.
     * The only valid operation after this is to free the `cache`.
     */
    erase(): void
    /**
     * Calls `func` for each found object, which satisfies the criteria
     * for both `deleted_flag` and `where_clause`.
     * 
     * Note the `func` should not call any SQLite commands, because it's invoked
     * within a SELECT statement execution.
     * @param deletedFlag one of #ECacheDeletedFlag enum
     * @param whereClause an optional SQLite WHERE clause part, or %NULL
     * @param func an #ECacheForeachFunc function to call for each object
     * @param cancellable optional #GCancellable object, or %NULL
     */
    foreach(deletedFlag: EBackend.CacheDeletedFlag, whereClause: string | null, func: EBackend.CacheForeachFunc, cancellable?: Gio.Cancellable | null): boolean
    /**
     * Calls `func` for each found object, which satisfies the criteria for both
     * `deleted_flag` and `where_clause,` letting the caller update values where
     * necessary. The return value of `func` is used to determine whether the call
     * was successful, not whether there are any changes to be saved. If anything
     * fails during the call then the all changes are reverted.
     * 
     * When there are requested any changes by the `func,` this function also
     * calls e_cache_copy_missing_to_column_values() to ensure no descendant
     * column data is lost.
     * @param deletedFlag one of #ECacheDeletedFlag enum
     * @param whereClause an optional SQLite WHERE clause part, or %NULL
     * @param func an #ECacheUpdateFunc function to call for each object
     * @param cancellable optional #GCancellable object, or %NULL
     */
    foreachUpdate(deletedFlag: EBackend.CacheDeletedFlag, whereClause: string | null, func: EBackend.CacheUpdateFunc, cancellable?: Gio.Cancellable | null): boolean
    /**
     * Freezes automatic revision change for the `cache`. The function
     * can be called multiple times, but each such call requires its
     * pair function e_cache_thaw_revision_change() call. See also
     * e_cache_change_revision().
     */
    freezeRevisionChange(): void
    /**
     * Returns an object with the given `uid`. This function does not consider locally
     * deleted objects. The `out_revision` is set to the object revision, if not %NULL.
     * Free it with g_free() when no longer needed. Similarly the `out_other_columns`
     * contains a column name to column value strings for additional columns which had
     * been requested when calling e_cache_initialize_sync(), if not %NULL.
     * Free the returned #ECacheColumnValues with e_cache_column_values_free(), when
     * no longer needed.
     * @param uid a unique identifier of an object
     * @param cancellable optional #GCancellable object, or %NULL
     */
    get(uid: string, cancellable?: Gio.Cancellable | null): [ /* returnType */ string | null, /* outRevision */ string | null, /* outOtherColumns */ EBackend.CacheColumnValues | null ]
    getCount(deletedFlag: EBackend.CacheDeletedFlag, cancellable?: Gio.Cancellable | null): number
    getFilename(): string
    /**
     * Reads the user `key` value as an integer.
     * @param key a key name
     */
    getKeyInt(key: string): number
    /**
     * The same as e_cache_get(), only considers also locally deleted objects.
     * @param uid a unique identifier of an object
     * @param cancellable optional #GCancellable object, or %NULL
     */
    getObjectIncludeDeleted(uid: string, cancellable?: Gio.Cancellable | null): [ /* returnType */ string | null, /* outRevision */ string | null, /* outOtherColumns */ EBackend.CacheColumnValues | null ]
    /**
     * Gets a list of objects stored in the `cache,` optionally together with
     * their revisions. The uids are not returned in any particular order,
     * but the position between `out_objects` and `out_revisions` matches
     * the same object.
     * 
     * Both `out_objects` and `out_revisions` contain newly allocated #GSList, which
     * should be freed with g_slist_free_full (slist, g_free); when no longer needed.
     * @param deletedFlag one of #ECacheDeletedFlag enum
     * @param cancellable optional #GCancellable object, or %NULL
     */
    getObjects(deletedFlag: EBackend.CacheDeletedFlag, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* outObjects */ string[], /* outRevisions */ string[] | null ]
    /**
     * Gathers the list of all offline changes being done so far.
     * The returned #GSList contains #ECacheOfflineChange structure.
     * Use e_cache_clear_offline_changes() to clear all offline
     * changes at once.
     * @param cancellable optional #GCancellable object, or %NULL
     */
    getOfflineChanges(cancellable?: Gio.Cancellable | null): EBackend.CacheOfflineChange[]
    getOfflineState(uid: string, cancellable?: Gio.Cancellable | null): EBackend.OfflineState
    getSqlitedb(): object | null
    /**
     * Gets a list of unique object identifiers stored in the `cache,` optionally
     * together with their revisions. The uids are not returned in any particular
     * order, but the position between `out_uids` and `out_revisions` matches
     * the same object.
     * 
     * Both `out_uids` and `out_revisions` contain newly allocated #GSList, which
     * should be freed with g_slist_free_full (slist, g_free); when no longer needed.
     * @param deletedFlag one of #ECacheDeletedFlag enum
     * @param cancellable optional #GCancellable object, or %NULL
     */
    getUids(deletedFlag: EBackend.CacheDeletedFlag, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* outUids */ string[], /* outRevisions */ string[] | null ]
    getVersion(): number
    /**
     * Initializes the `cache` and opens the `filename` database.
     * This should be called by the descendant.
     * 
     * The `other_columns` are added to the objects table (`E_CACHE_TABLE_OBJECTS)`.
     * Values for these columns are returned by e_cache_get()
     * and can be stored with e_cache_put().
     * @param filename a filename of an SQLite database to use
     * @param otherColumns an optional    #GSList with additional columns to add to the objects table
     * @param cancellable optional #GCancellable object, or %NULL
     */
    initializeSync(filename: string, otherColumns?: EBackend.CacheColumnInfo[] | null, cancellable?: Gio.Cancellable | null): boolean
    isRevisionChangeFrozen(): boolean
    /**
     * Locks the `cache` thus other threads cannot use it.
     * This can be called recursively within one thread.
     * Each call should have its pair e_cache_unlock().
     * @param lockType an #ECacheLockType
     */
    lock(lockType: EBackend.CacheLockType): void
    /**
     * Stores an object into the cache. Depending on `offline_flag,` this update
     * the object's offline state accordingly. When the `offline_flag` is set
     * to %E_CACHE_IS_ONLINE, then it's set to #E_OFFLINE_STATE_SYNCED, like
     * to be fully synchronized with the server, regardless of its previous
     * offline state. Overwriting locally deleted object behaves like an addition
     * of a completely new object.
     * @param uid a unique identifier of an object
     * @param revision a revision of the object
     * @param object the object itself
     * @param otherColumns an #ECacheColumnValues with other columns to set; can be %NULL
     * @param offlineFlag one of #ECacheOfflineFlag, whether putting this object in offline
     * @param cancellable optional #GCancellable object, or %NULL
     */
    put(uid: string, revision: string | null, object: string, otherColumns: EBackend.CacheColumnValues | null, offlineFlag: EBackend.CacheOfflineFlag, cancellable?: Gio.Cancellable | null): boolean
    /**
     * Removes the object with the given `uid` from the `cache`. Based on the `offline_flag,`
     * it can remove also any information about locally made offline changes. Removing
     * the object with %E_CACHE_IS_OFFLINE will still remember it for later use
     * with e_cache_get_offline_changes().
     * @param uid a unique identifier of an object
     * @param offlineFlag one of #ECacheOfflineFlag, whether removing the object in offline
     * @param cancellable optional #GCancellable object, or %NULL
     */
    remove(uid: string, offlineFlag: EBackend.CacheOfflineFlag, cancellable?: Gio.Cancellable | null): boolean
    /**
     * Removes all objects from the `cache` in one call.
     * @param cancellable optional #GCancellable object, or %NULL
     */
    removeAll(cancellable?: Gio.Cancellable | null): boolean
    /**
     * Sets a `value` of the user `key,` or deletes it, if the `value` is %NULL.
     * @param key a key name
     * @param value a value to set, or %NULL to delete the key
     */
    setKey(key: string, value?: string | null): boolean
    /**
     * Sets an integer `value` for the user `key`.
     * @param key a key name
     * @param value an integer value to set
     */
    setKeyInt(key: string, value: number): boolean
    /**
     * Sets an offline `state` for the object identified by `uid`.
     * @param uid a unique identifier of an object
     * @param state an #EOfflineState to set
     * @param cancellable optional #GCancellable object, or %NULL
     */
    setOfflineState(uid: string, state: EBackend.OfflineState, cancellable?: Gio.Cancellable | null): boolean
    /**
     * Sets the `revision` of the whole `cache`. This is not meant to be
     * used by the descendants, because the revision is updated automatically
     * when needed. The descendants can listen to "revision-changed" signal.
     * @param revision a revision to set; use %NULL to unset it
     */
    setRevision(revision?: string | null): void
    /**
     * Sets a cache data version. This is meant to be used by the descendants.
     * The `version` should be greater than zero.
     * @param version a cache data version to set
     */
    setVersion(version: number): void
    /**
     * Executes an SQLite statement. Use e_cache_sqlite_select() for
     * SELECT statements.
     * @param sqlStmt an SQLite statement to execute
     * @param cancellable optional #GCancellable object, or %NULL
     */
    sqliteExec(sqlStmt: string, cancellable?: Gio.Cancellable | null): boolean
    /**
     * Runs vacuum (compacts the database file), if needed.
     * @param cancellable optional #GCancellable object, or %NULL
     */
    sqliteMaybeVacuum(cancellable?: Gio.Cancellable | null): boolean
    /**
     * Executes a SELECT statement `sql_stmt` and calls `func` for each row of the result.
     * Use e_cache_sqlite_exec() for statements which do not return row sets.
     * @param sqlStmt an SQLite SELECT statement to execute
     * @param func an #ECacheSelectFunc function to call for each row
     * @param cancellable optional #GCancellable object, or %NULL
     */
    sqliteSelect(sqlStmt: string, func: EBackend.CacheSelectFunc, cancellable?: Gio.Cancellable | null): boolean
    /**
     * Thaws automatic revision change for the `cache`. It's the pair
     * function of e_cache_freeze_revision_change().
     */
    thawRevisionChange(): void
    /**
     * Unlocks the cache which was previouly locked with e_cache_lock().
     * The cache locked with #E_CACHE_LOCK_WRITE should use either
     * `action` #E_CACHE_UNLOCK_COMMIT or #E_CACHE_UNLOCK_ROLLBACK,
     * while the #E_CACHE_LOCK_READ should use #E_CACHE_UNLOCK_NONE `action`.
     * @param action an #ECacheUnlockAction
     */
    unlock(action: EBackend.CacheUnlockAction): void
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
     * @param sourceProperty the property on `source` to bind
     * @param target the target #GObject
     * @param targetProperty the property on `target` to bind
     * @param flags flags to pass to #GBinding
     */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    /**
     * Creates a binding between `source_property` on `source` and `target_property`
     * on `target,` allowing you to set the transformation functions to be used by
     * the binding.
     * 
     * This function is the language bindings friendly version of
     * g_object_bind_property_full(), using #GClosures instead of
     * function pointers.
     * @param sourceProperty the property on `source` to bind
     * @param target the target #GObject
     * @param targetProperty the property on `target` to bind
     * @param flags flags to pass to #GBinding
     * @param transformTo a #GClosure wrapping the transformation function     from the `source` to the `target,` or %NULL to use the default
     * @param transformFrom a #GClosure wrapping the transformation function     from the `target` to the `source,` or %NULL to use the default
     */
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    /**
     * This function is intended for #GObject implementations to re-enforce
     * a [floating][floating-ref] object reference. Doing this is seldom
     * required: all #GInitiallyUnowneds are created with a floating reference
     * which usually just needs to be sunken by calling g_object_ref_sink().
     */
    forceFloating(): void
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
    freezeNotify(): void
    /**
     * Gets a named field from the objects table of associations (see g_object_set_data()).
     * @param key name of the key for that association
     */
    getData(key: string): object | null
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
     * @param propertyName the name of the property to get
     * @param value return location for the property value
     */
    getProperty(propertyName: string, value: any): void
    /**
     * This function gets back user data pointers stored via
     * g_object_set_qdata().
     * @param quark A #GQuark, naming the user data pointer
     */
    getQdata(quark: GLib.Quark): object | null
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
    isFloating(): boolean
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
     * @param propertyName the name of a property installed on the class of `object`.
     */
    notify(propertyName: string): void
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
    notifyByPspec(pspec: GObject.ParamSpec): void
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
    refSink(): GObject.Object
    /**
     * Releases all references to other objects. This can be used to break
     * reference cycles.
     * 
     * This function should only be called from object system implementations.
     */
    runDispose(): void
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
    /**
     * Sets a property on an object.
     * @param propertyName the name of the property to set
     * @param value the value
     */
    setProperty(propertyName: string, value: any): void
    /**
     * Remove a specified datum from the object's data associations,
     * without invoking the association's destroy handler.
     * @param key name of the key
     */
    stealData(key: string): object | null
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
    stealQdata(quark: GLib.Quark): object | null
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
    thawNotify(): void
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
    watchClosure(closure: Function): void
    /* Methods of ECal-2.0.ECal.TimezoneCache */
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
     */
    getTimezone(tzid: string): ICalGLib.Timezone | null
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
    /* Methods of EDataServer-1.2.EDataServer.Extensible */
    /**
     * Returns a list of #EExtension objects bound to `extensible` whose
     * types are ancestors of `extension_type`.  For a complete list of
     * extension objects bound to `extensible,` pass %E_TYPE_EXTENSION.
     * 
     * The list itself should be freed with g_list_free().  The extension
     * objects are owned by `extensible` and should not be unreferenced.
     * @param extensionType the type of extensions to list
     */
    listExtensions(extensionType: GObject.Type): EDataServer.Extension[]
    /**
     * Creates an instance of all instantiable subtypes of #EExtension which
     * target the class of `extensible`.  The lifetimes of these newly created
     * #EExtension objects are bound to `extensible` such that they are finalized
     * when `extensible` is finalized.
     */
    loadExtensions(): void
    /* Signals of EDataCal-2.0.EDataCal.CalCache */
    connect(sigName: "dup-component-revision", callback: ((object: ICalGLib.Component) => string)): number
    on(sigName: "dup-component-revision", callback: (object: ICalGLib.Component) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "dup-component-revision", callback: (object: ICalGLib.Component) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "dup-component-revision", callback: (object: ICalGLib.Component) => void): NodeJS.EventEmitter
    emit(sigName: "dup-component-revision", object: ICalGLib.Component): void
    /**
     * A signal being called to get timezone when putting component
     * into the cache. It's used to make sure the cache contains
     * all timezones which are needed by the component. The returned
     * ICalTimezone will not be freed.
     * @param tzid timezone ID
     */
    connect(sigName: "get-timezone", callback: ((tzid: string) => ICalGLib.Timezone)): number
    on(sigName: "get-timezone", callback: (tzid: string) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "get-timezone", callback: (tzid: string) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "get-timezone", callback: (tzid: string) => void): NodeJS.EventEmitter
    emit(sigName: "get-timezone", tzid: string): void
    /* Signals of EBackend-1.2.EBackend.Cache */
    connect(sigName: "before-put", callback: ((object: string, p0: string, p1: string, p2: EBackend.CacheColumnValues, p3: boolean, p4?: Gio.Cancellable | null, p5?: object | null) => boolean)): number
    on(sigName: "before-put", callback: (object: string, p0: string, p1: string, p2: EBackend.CacheColumnValues, p3: boolean, p4?: Gio.Cancellable | null, p5?: object | null) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "before-put", callback: (object: string, p0: string, p1: string, p2: EBackend.CacheColumnValues, p3: boolean, p4?: Gio.Cancellable | null, p5?: object | null) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "before-put", callback: (object: string, p0: string, p1: string, p2: EBackend.CacheColumnValues, p3: boolean, p4?: Gio.Cancellable | null, p5?: object | null) => void): NodeJS.EventEmitter
    emit(sigName: "before-put", object: string, p0: string, p1: string, p2: EBackend.CacheColumnValues, p3: boolean, p4?: Gio.Cancellable | null, p5?: object | null): void
    connect(sigName: "before-remove", callback: ((object: string, p0?: Gio.Cancellable | null, p1?: object | null) => boolean)): number
    on(sigName: "before-remove", callback: (object: string, p0?: Gio.Cancellable | null, p1?: object | null) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "before-remove", callback: (object: string, p0?: Gio.Cancellable | null, p1?: object | null) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "before-remove", callback: (object: string, p0?: Gio.Cancellable | null, p1?: object | null) => void): NodeJS.EventEmitter
    emit(sigName: "before-remove", object: string, p0?: Gio.Cancellable | null, p1?: object | null): void
    connect(sigName: "revision-changed", callback: (() => void)): number
    on(sigName: "revision-changed", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "revision-changed", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "revision-changed", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "revision-changed"): void
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
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    /* Signals of ECal-2.0.ECal.TimezoneCache */
    /**
     * Emitted when a new #icaltimezone is added to `cache`.
     * @param zone the newly-added #ICalTimezone
     */
    connect(sigName: "timezone-added", callback: ((zone: ICalGLib.Timezone) => void)): number
    on(sigName: "timezone-added", callback: (zone: ICalGLib.Timezone) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "timezone-added", callback: (zone: ICalGLib.Timezone) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "timezone-added", callback: (zone: ICalGLib.Timezone) => void): NodeJS.EventEmitter
    emit(sigName: "timezone-added", zone: ICalGLib.Timezone): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: CalCache_ConstructProps)
    _init (config?: CalCache_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(filename: string, cancellable?: Gio.Cancellable | null): CalCache
    /**
     * An #ECalRecurResolveTimezoneCb callback, which can be used
     * with e_cal_recur_generate_instances_sync(). The `cal_cache`
     * is supposed to be an #ECalCache instance.
     * @param tzid a timezone ID
     * @param calCache an #ECalCache
     * @param cancellable optional #GCancellable object, or %NULL
     */
    static resolveTimezoneCb(tzid: string, calCache?: object | null, cancellable?: Gio.Cancellable | null): ICalGLib.Timezone | null
    static $gtype: GObject.Type
}
interface CalMetaBackend_ConstructProps extends CalBackendSync_ConstructProps {
    /* Constructor properties of EDataCal-2.0.EDataCal.CalMetaBackend */
    /**
     * The #ECalCache being used for this meta backend.
     */
    cache?: CalCache
}
class CalMetaBackend {
    /* Properties of EDataCal-2.0.EDataCal.CalMetaBackend */
    /**
     * The #ECalCache being used for this meta backend.
     */
    cache: CalCache
    /* Properties of EDataCal-2.0.EDataCal.CalBackend */
    cacheDir: string
    readonly kind: number
    readonly proxyResolver: Gio.ProxyResolver
    readonly registry: EDataServer.SourceRegistry
    writable: boolean
    /* Properties of EBackend-1.2.EBackend.Backend */
    connectable: Gio.SocketConnectable
    readonly mainContext: GLib.MainContext
    online: boolean
    readonly source: EDataServer.Source
    readonly userPrompter: EBackend.UserPrompter
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of EDataCal-2.0.EDataCal.CalMetaBackend */
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
    connectSync(credentials?: EDataServer.NamedParameters | null, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* outAuthResult */ EDataServer.SourceAuthenticationResult, /* outCertificatePem */ string, /* outCertificateErrors */ Gio.TlsCertificateFlags ]
    /**
     * This is called when the backend goes into offline mode or
     * when the disconnect is required. The implementation should
     * not report any error when it is called and the `meta_backend`
     * is not connected.
     * 
     * It is mandatory to implement this virtual method by the descendant.
     * @param cancellable optional #GCancellable object, or %NULL
     */
    disconnectSync(cancellable?: Gio.Cancellable | null): boolean
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
    emptyCacheSync(cancellable?: Gio.Cancellable | null): boolean
    /**
     * Ensures that the `meta_backend` is connected to its destination.
     * @param cancellable optional #GCancellable object, or %NULL
     */
    ensureConnectedSync(cancellable?: Gio.Cancellable | null): boolean
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
    gatherTimezonesSync(vcalendar: ICalGLib.Component, removeExisting: boolean, cancellable?: Gio.Cancellable | null): boolean
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
    getChangesSync(lastSyncTag: string | null, isRepeat: boolean, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* outNewSyncTag */ string, /* outRepeat */ boolean, /* outCreatedObjects */ CalMetaBackendInfo[], /* outModifiedObjects */ CalMetaBackendInfo[], /* outRemovedObjects */ CalMetaBackendInfo[] ]
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
    inlineLocalAttachmentsSync(component: ICalGLib.Component, cancellable?: Gio.Cancellable | null): boolean
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
    listExistingSync(cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* outNewSyncTag */ string, /* outExistingObjects */ CalMetaBackendInfo[] ]
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
    loadComponentSync(uid: string, extra?: string | null, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* outComponent */ ICalGLib.Component, /* outExtra */ string ]
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
    processChangesSync(createdObjects?: CalMetaBackendInfo[] | null, modifiedObjects?: CalMetaBackendInfo[] | null, removedObjects?: CalMetaBackendInfo[] | null, cancellable?: Gio.Cancellable | null): boolean
    refCache(): CalCache
    /**
     * Refreshes the `meta_backend` immediately. To just schedule refresh
     * operation call e_cal_meta_backend_schedule_refresh().
     * @param cancellable optional #GCancellable object, or %NULL
     */
    refreshSync(cancellable?: Gio.Cancellable | null): boolean
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
    removeComponentSync(conflictResolution: EDataServer.ConflictResolution, uid: string, extra: string | null, object: string | null, opflags: ECal.OperationFlags, cancellable?: Gio.Cancellable | null): boolean
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
    saveComponentSync(overwriteExisting: boolean, conflictResolution: EDataServer.ConflictResolution, instances: ECal.Component[], extra: string | null, opflags: ECal.OperationFlags, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* outNewUid */ string, /* outNewExtra */ string ]
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
    searchComponentsSync(expr?: string | null, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* outComponents */ ECal.Component[] ]
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
    searchSync(expr?: string | null, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* outIcalstrings */ string[] ]
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
    splitChangesSync(objects: CalMetaBackendInfo[], cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* objects */ CalMetaBackendInfo[], /* outCreatedObjects */ CalMetaBackendInfo[], /* outModifiedObjects */ CalMetaBackendInfo[], /* outRemovedObjects */ CalMetaBackendInfo[] | null ]
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
    storeInlineAttachmentsSync(component: ICalGLib.Component, cancellable?: Gio.Cancellable | null): boolean
    /* Methods of EDataCal-2.0.EDataCal.CalBackendSync */
    /**
     * Calls the add_timezone_sync method on the given backend.
     * @param cal An EDataCal object.
     * @param cancellable a #GCancellable for the operation
     * @param tzobject VTIMEZONE object to be added.
     */
    addTimezone(cal: DataCal, cancellable: Gio.Cancellable | null, tzobject: string): void
    /**
     * Calls the create_objects_sync method on the given backend.
     * @param cal An EDataCal object.
     * @param cancellable a #GCancellable for the operation
     * @param calobjs The objects to be added.
     * @param opflags bit-or of #ECalOperationFlags
     */
    createObjects(cal: DataCal, cancellable: Gio.Cancellable | null, calobjs: string[], opflags: ECal.OperationFlags): [ /* uids */ string[], /* newComponents */ ECal.Component[] ]
    /**
     * Calls the discard_alarm_sync method on the given backend.
     * @param cal An EDataCal object.
     * @param cancellable a #GCancellable for the operation
     * @param uid Unique id of the calendar object.
     * @param rid Recurrence id of the calendar object.
     * @param auid Alarm ID to remove.
     * @param opflags bit-or of #ECalOperationFlags
     */
    discardAlarm(cal: DataCal, cancellable: Gio.Cancellable | null, uid: string, rid: string, auid: string, opflags: ECal.OperationFlags): void
    /**
     * Calls the get_attachment_uris_sync method on the given backend.
     * @param cal An EDataCal object.
     * @param cancellable a #GCancellable for the operation
     * @param uid Unique id of the calendar object.
     * @param rid Recurrence id of the calendar object.
     * @param attachments Placeholder for list of returned attachment uris.
     */
    getAttachmentUris(cal: DataCal, cancellable: Gio.Cancellable | null, uid: string, rid: string, attachments: string[]): void
    /**
     * Calls the get_free_busy_sync method on the given backend.
     * @param cal An EDataCal object.
     * @param cancellable a #GCancellable for the operation
     * @param users List of users to get F/B info from.
     * @param start Time range start.
     * @param end Time range end.
     */
    getFreeBusy(cal: DataCal, cancellable: Gio.Cancellable | null, users: string[], start: number, end: number): /* freebusyobjects */ string[]
    /**
     * Calls the get_object_sync method on the given backend.
     * @param cal An EDataCal object.
     * @param cancellable a #GCancellable for the operation
     * @param uid UID of the object to get.
     * @param rid Recurrence ID of the specific instance to get, or %NULL if    getting the master object.
     */
    getObject(cal: DataCal, cancellable: Gio.Cancellable | null, uid: string, rid?: string | null): /* calobj */ string
    /**
     * Calls the get_object_list_sync method on the given backend.
     * @param cal An EDataCal object.
     * @param cancellable a #GCancellable for the operation
     * @param sexp Search query.
     */
    getObjectList(cal: DataCal, cancellable: Gio.Cancellable | null, sexp: string): /* calobjs */ string[]
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
    getTimezone(cal: DataCal, cancellable: Gio.Cancellable | null, tzid: string, tzobject: string): void
    /**
     * Calls the modify_objects_sync method on the given backend.
     * @param cal An EDataCal object.
     * @param cancellable a #GCancellable for the operation
     * @param calobjs Objects to be modified.
     * @param mod Type of modification to be done.
     * @param opflags bit-or of #ECalOperationFlags
     */
    modifyObjects(cal: DataCal, cancellable: Gio.Cancellable | null, calobjs: string[], mod: ECal.ObjModType, opflags: ECal.OperationFlags): [ /* oldComponents */ ECal.Component[], /* newComponents */ ECal.Component[] ]
    /**
     * Calls the open_sync method on the given backend.
     * @param cal An EDataCal object.
     * @param cancellable a #GCancellable for the operation or just create it when it does not exist.
     */
    open(cal: DataCal, cancellable?: Gio.Cancellable | null): void
    /**
     * Calls the receive_objects_sync method on the given backend.
     * @param cal An EDataCal object.
     * @param cancellable a #GCancellable for the operation
     * @param calobj iCalendar object to receive.
     * @param opflags bit-or of #ECalOperationFlags
     */
    receiveObjects(cal: DataCal, cancellable: Gio.Cancellable | null, calobj: string, opflags: ECal.OperationFlags): void
    /**
     * Calls the refresh_sync method on the given backend.
     * @param cal An EDataCal object.
     * @param cancellable a #GCancellable for the operation
     */
    refresh(cal: DataCal, cancellable?: Gio.Cancellable | null): void
    /**
     * Calls the remove_objects_sync method on the given backend.
     * @param cal An EDataCal object.
     * @param cancellable a #GCancellable for the operation
     * @param ids List of #ECalComponentId objects identifying the objects to remove.
     * @param mod Type of removal.
     * @param opflags bit-or of #ECalOperationFlags
     */
    removeObjects(cal: DataCal, cancellable: Gio.Cancellable | null, ids: ECal.ComponentId[], mod: ECal.ObjModType, opflags: ECal.OperationFlags): [ /* oldComponents */ ECal.Component[], /* newComponents */ ECal.Component[] ]
    /**
     * Calls the send_objects_sync method on the given backend.
     * @param cal An EDataCal object.
     * @param cancellable a #GCancellable for the operation
     * @param calobj The iCalendar object to send.
     * @param opflags bit-or of #ECalOperationFlags
     * @param users List of users to send notifications to.
     */
    sendObjects(cal: DataCal, cancellable: Gio.Cancellable | null, calobj: string, opflags: ECal.OperationFlags, users: string[]): /* modifiedCalobj */ string
    /* Methods of EDataCal-2.0.EDataCal.CalBackend */
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
    addTimezoneSync(tzobject: string, cancellable?: Gio.Cancellable | null): boolean
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
    createObjects(calobjs: string, opflags: ECal.OperationFlags, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
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
    createObjectsSync(calobjs: string, opflags: ECal.OperationFlags, outUids: GLib.Queue, cancellable?: Gio.Cancellable | null): boolean
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
    discardAlarm(uid: string, rid: string | null, alarmUid: string, opflags: ECal.OperationFlags, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
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
    discardAlarmSync(uid: string, rid: string | null, alarmUid: string, opflags: ECal.OperationFlags, cancellable?: Gio.Cancellable | null): boolean
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
    foreachViewNotifyProgress(onlyCompletedViews: boolean, percent: number, message?: string | null): void
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
    getAttachmentUrisSync(uid: string, rid: string | null, outAttachmentUris: GLib.Queue, cancellable?: Gio.Cancellable | null): boolean
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
    getFreeBusy(start: number, end: number, users: string[], cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
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
    getFreeBusySync(start: number, end: number, users: string[], outFreebusy: string[], cancellable?: Gio.Cancellable | null): boolean
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
    getObjectListSync(query: string, outObjects: GLib.Queue, cancellable?: Gio.Cancellable | null): boolean
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
    getObjectSync(uid: string, rid?: string | null, cancellable?: Gio.Cancellable | null): string
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
    getTimezoneSync(tzid: string, cancellable?: Gio.Cancellable | null): string
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
    modifyObjects(calobjs: string, mod: ECal.ObjModType, opflags: ECal.OperationFlags, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
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
    modifyObjectsSync(calobjs: string, mod: ECal.ObjModType, opflags: ECal.OperationFlags, cancellable?: Gio.Cancellable | null): boolean
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
    notifyPropertyChanged(propName: string, propValue?: string | null): void
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
    open(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
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
    openSync(cancellable?: Gio.Cancellable | null): boolean
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
    receiveObjects(calobj: string, opflags: ECal.OperationFlags, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
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
    receiveObjectsSync(calobj: string, opflags: ECal.OperationFlags, cancellable?: Gio.Cancellable | null): boolean
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
    refresh(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
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
    refreshSync(cancellable?: Gio.Cancellable | null): boolean
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
    removeObjects(componentIds: ECal.ComponentId[], mod: ECal.ObjModType, opflags: ECal.OperationFlags, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
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
    removeObjectsSync(componentIds: ECal.ComponentId[], mod: ECal.ObjModType, opflags: ECal.OperationFlags, cancellable?: Gio.Cancellable | null): boolean
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
    sendObjects(calobj: string, opflags: ECal.OperationFlags, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
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
    sendObjectsSync(calobj: string, opflags: ECal.OperationFlags, outUsers: GLib.Queue, cancellable?: Gio.Cancellable | null): string
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
    /* Methods of EBackend-1.2.EBackend.Backend */
    /**
     * Asynchronously calls the e_backend_credentials_required_sync() on the `backend,`
     * to inform clients that credentials are required.
     * 
     * When the operation is finished, `callback` will be called. You can then
     * call e_backend_credentials_required_finish() to get the result of the operation.
     * @param reason an #ESourceCredentialsReason, why the credentials are required
     * @param certificatePem PEM-encoded secure connection certificate, or an empty string
     * @param certificateErrors a bit-or of #GTlsCertificateFlags for secure connection certificate
     * @param opError a #GError with a description of the previous credentials error, or %NULL
     * @param cancellable optional #GCancellable object, or %NULL
     * @param callback a #GAsyncReadyCallback to call when the request is satisfied
     */
    credentialsRequired(reason: EDataServer.SourceCredentialsReason, certificatePem: string, certificateErrors: Gio.TlsCertificateFlags, opError?: GLib.Error | null, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes the operation started with e_backend_credentials_required().
     * 
     * If an error occurs, the function sets `error` and returns %FALSE.
     * @param result a #GAsyncResult
     */
    credentialsRequiredFinish(result: Gio.AsyncResult): boolean
    /**
     * Synchronously lets the clients know that the backned requires credentials to be
     * properly opened. It's a proxy function for e_source_invoke_credentials_required_sync(),
     * where can be found more information about actual parameters meaning.
     * 
     * The provided credentials are received through #EBackendClass.authenticate_sync()
     * method asynchronously.
     * 
     * If an error occurs, the function sets `error` and returns %FALSE.
     * @param reason an #ESourceCredentialsReason, why the credentials are required
     * @param certificatePem PEM-encoded secure connection certificate, or an empty string
     * @param certificateErrors a bit-or of #GTlsCertificateFlags for secure connection certificate
     * @param opError a #GError with a description of the previous credentials error, or %NULL
     * @param cancellable optional #GCancellable object, or %NULL
     */
    credentialsRequiredSync(reason: EDataServer.SourceCredentialsReason, certificatePem: string, certificateErrors: Gio.TlsCertificateFlags, opError?: GLib.Error | null, cancellable?: Gio.Cancellable | null): boolean
    /**
     * Makes sure that the "online" property is updated, that is, if there
     * is any destination reachability test pending, it'll be done immediately
     * and the only state will be updated as well.
     * @param cancellable optional #GCancellable object, or %NULL
     */
    ensureOnlineStateUpdated(cancellable?: Gio.Cancellable | null): void
    /**
     * Makes sure that the associated ESource::connection-status is connected. This is
     * useful in cases when the backend can connect to the destination without invoking
     * #EBackendClass.authenticate_sync(), possibly through e_backend_schedule_authenticate().
     */
    ensureSourceStatusConnected(): void
    /**
     * Provides destination server host name and port to which
     * the backend connects. This is used to determine required
     * connection point for e_backend_is_destination_reachable().
     * The `host` is a newly allocated string, which will be freed
     * with g_free(). When `backend` sets both `host` and `port,` then
     * it should return %TRUE, indicating it's a remote backend.
     * Default implementation returns %FALSE, which is treated
     * like the backend is local, no checking for server reachability
     * is possible.
     */
    getDestinationAddress(): [ /* returnType */ boolean, /* host */ string, /* port */ number ]
    /**
     * Returns the online state of `backend:` %TRUE if `backend` is online,
     * %FALSE if offline.
     * 
     * If the #EBackend:connectable property is non-%NULL, the `backend` will
     * automatically determine whether the network service should be reachable,
     * and hence whether the `backend` is #EBackend:online.  But subclasses may
     * override the online state if, for example, a connection attempt fails.
     */
    getOnline(): boolean
    /**
     * Returns the #ESource to which `backend` is paired.
     */
    getSource(): EDataServer.Source
    /**
     * Gets an instance of #EUserPrompter, associated with this `backend`.
     * 
     * The returned instance is owned by the `backend`.
     */
    getUserPrompter(): object | null
    /**
     * Checks whether the `backend<`!-- -->'s destination server, as returned
     * by e_backend_get_destination_address(), is reachable.
     * If the e_backend_get_destination_address() returns %FALSE, this function
     * returns %TRUE, meaning the destination is always reachable.
     * This uses #GNetworkMonitor<!-- -->'s g_network_monitor_can_reach()
     * for reachability tests.
     * @param cancellable a #GCancellable instance, or %NULL
     */
    isDestinationReachable(cancellable?: Gio.Cancellable | null): boolean
    /**
     * Let's the `backend` know that it'll be shut down shortly, no client connects
     * to it anymore. The `backend` can free any resources which reference it, for
     * example the opened views.
     */
    prepareShutdown(): void
    /**
     * Returns the socket endpoint for the network service to which `backend`
     * is a client, or %NULL if `backend` does not use network sockets.
     * 
     * The initial value of the #EBackend:connectable property is derived from
     * the #ESourceAuthentication extension of the `backend'`s #EBackend:source
     * property, if the extension is present.
     * 
     * The returned #GSocketConnectable is referenced for thread-safety and
     * must be unreferenced with g_object_unref() when finished with it.
     */
    refConnectable(): Gio.SocketConnectable | null
    /**
     * Returns the #GMainContext on which event sources for `backend` are to
     * be attached.
     * 
     * The returned #GMainContext is referenced for thread-safety and must be
     * unreferenced with g_main_context_unref() when finished with it.
     */
    refMainContext(): GLib.MainContext
    /**
     * Schedules a new authenticate session, cancelling any previously run.
     * This is usually done automatically, when an 'authenticate' signal is
     * received for the associated #ESource. With %NULL `credentials` an attempt
     * without it is run.
     * @param credentials a credentials to use to authenticate, or %NULL
     */
    scheduleAuthenticate(credentials?: EDataServer.NamedParameters | null): void
    /**
     * Asynchronously invokes e_backend_credentials_required(), but installs its
     * own callback which only prints a runtime warning on the console when
     * the call fails. The `who_calls` is a prefix of the console message.
     * This is useful when the caller just wants to start the operation
     * without having actual place where to show the operation result.
     * @param reason an #ESourceCredentialsReason, why the credentials are required
     * @param certificatePem PEM-encoded secure connection certificate, or an empty string
     * @param certificateErrors a bit-or of #GTlsCertificateFlags for secure connection certificate
     * @param opError a #GError with a description of the previous credentials error, or %NULL
     * @param cancellable optional #GCancellable object, or %NULL
     * @param whoCalls an identification who calls this
     */
    scheduleCredentialsRequired(reason: EDataServer.SourceCredentialsReason, certificatePem: string, certificateErrors: Gio.TlsCertificateFlags, opError?: GLib.Error | null, cancellable?: Gio.Cancellable | null, whoCalls?: string | null): void
    /**
     * Sets the socket endpoint for the network service to which `backend` is
     * a client.  This can be %NULL if `backend` does not use network sockets.
     * 
     * The initial value of the #EBackend:connectable property is derived from
     * the #ESourceAuthentication extension of the `backend'`s #EBackend:source
     * property, if the extension is present.
     * @param connectable a #GSocketConnectable, or %NULL
     */
    setConnectable(connectable: Gio.SocketConnectable): void
    /**
     * Sets the online state of `backend:` %TRUE if `backend` is online,
     * `FALSE` if offline.
     * 
     * If the #EBackend:connectable property is non-%NULL, the `backend` will
     * automatically determine whether the network service should be reachable,
     * and hence whether the `backend` is #EBackend:online.  But subclasses may
     * override the online state if, for example, a connection attempt fails.
     * @param online the online state
     */
    setOnline(online: boolean): void
    /**
     * Initiates a user trust prompt with given `parameters`.
     * 
     * When the operation is finished, `callback` will be called. You can then
     * call e_backend_trust_prompt_finish() to get the result of the operation.
     * @param parameters an #ENamedParameters with values for the trust prompt
     * @param cancellable optional #GCancellable object, or %NULL
     * @param callback a #GAsyncReadyCallback to call when the request is satisfied
     */
    trustPrompt(parameters: EDataServer.NamedParameters, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes the operation started with e_backend_trust_prompt().
     * If an error occurred, the function will set `error` and return
     * %E_TRUST_PROMPT_RESPONSE_UNKNOWN.
     * @param result a #GAsyncResult
     */
    trustPromptFinish(result: Gio.AsyncResult): EDataServer.TrustPromptResponse
    /**
     * Asks a user a trust prompt with given `parameters,` and returns what
     * user responded. This blocks until the response is delivered.
     * @param parameters an #ENamedParameters with values for the trust prompt
     * @param cancellable optional #GCancellable object, or %NULL
     */
    trustPromptSync(parameters: EDataServer.NamedParameters, cancellable?: Gio.Cancellable | null): EDataServer.TrustPromptResponse
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
     * @param sourceProperty the property on `source` to bind
     * @param target the target #GObject
     * @param targetProperty the property on `target` to bind
     * @param flags flags to pass to #GBinding
     */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    /**
     * Creates a binding between `source_property` on `source` and `target_property`
     * on `target,` allowing you to set the transformation functions to be used by
     * the binding.
     * 
     * This function is the language bindings friendly version of
     * g_object_bind_property_full(), using #GClosures instead of
     * function pointers.
     * @param sourceProperty the property on `source` to bind
     * @param target the target #GObject
     * @param targetProperty the property on `target` to bind
     * @param flags flags to pass to #GBinding
     * @param transformTo a #GClosure wrapping the transformation function     from the `source` to the `target,` or %NULL to use the default
     * @param transformFrom a #GClosure wrapping the transformation function     from the `target` to the `source,` or %NULL to use the default
     */
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    /**
     * This function is intended for #GObject implementations to re-enforce
     * a [floating][floating-ref] object reference. Doing this is seldom
     * required: all #GInitiallyUnowneds are created with a floating reference
     * which usually just needs to be sunken by calling g_object_ref_sink().
     */
    forceFloating(): void
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
    freezeNotify(): void
    /**
     * Gets a named field from the objects table of associations (see g_object_set_data()).
     * @param key name of the key for that association
     */
    getData(key: string): object | null
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
     * @param propertyName the name of the property to get
     * @param value return location for the property value
     */
    getProperty(propertyName: string, value: any): void
    /**
     * This function gets back user data pointers stored via
     * g_object_set_qdata().
     * @param quark A #GQuark, naming the user data pointer
     */
    getQdata(quark: GLib.Quark): object | null
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
    isFloating(): boolean
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
     * @param propertyName the name of a property installed on the class of `object`.
     */
    notify(propertyName: string): void
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
    notifyByPspec(pspec: GObject.ParamSpec): void
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
    refSink(): GObject.Object
    /**
     * Releases all references to other objects. This can be used to break
     * reference cycles.
     * 
     * This function should only be called from object system implementations.
     */
    runDispose(): void
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
    /**
     * Sets a property on an object.
     * @param propertyName the name of the property to set
     * @param value the value
     */
    setProperty(propertyName: string, value: any): void
    /**
     * Remove a specified datum from the object's data associations,
     * without invoking the association's destroy handler.
     * @param key name of the key
     */
    stealData(key: string): object | null
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
    stealQdata(quark: GLib.Quark): object | null
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
    thawNotify(): void
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
    watchClosure(closure: Function): void
    /* Methods of ECal-2.0.ECal.TimezoneCache */
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
     */
    getTimezone(tzid: string): ICalGLib.Timezone | null
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
    /* Signals of EDataCal-2.0.EDataCal.CalMetaBackend */
    connect(sigName: "refresh-completed", callback: (() => void)): number
    on(sigName: "refresh-completed", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "refresh-completed", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "refresh-completed", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "refresh-completed"): void
    /**
     * This signal is emitted whenever the underlying backend #ESource
     * changes. Unlike the #ESource's 'changed' signal this one is
     * tight to the #ECalMetaBackend itself and is emitted from
     * a dedicated thread, thus it doesn't block the main thread.
     */
    connect(sigName: "source-changed", callback: (() => void)): number
    on(sigName: "source-changed", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "source-changed", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "source-changed", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "source-changed"): void
    /* Signals of EDataCal-2.0.EDataCal.CalBackend */
    /**
     * Emitted when a client destroys its #ECalClient for `backend`
     * @param sender the bus name that invoked the "close" method
     */
    connect(sigName: "closed", callback: ((sender: string) => void)): number
    on(sigName: "closed", callback: (sender: string) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "closed", callback: (sender: string) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "closed", callback: (sender: string) => void): NodeJS.EventEmitter
    emit(sigName: "closed", sender: string): void
    /**
     * Emitted when the last client destroys its #ECalClient for
     * `backend`.  This signals the `backend` to begin final cleanup
     * tasks such as synchronizing data to permanent storage.
     */
    connect(sigName: "shutdown", callback: (() => void)): number
    on(sigName: "shutdown", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "shutdown", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "shutdown", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "shutdown"): void
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
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    /* Signals of ECal-2.0.ECal.TimezoneCache */
    /**
     * Emitted when a new #icaltimezone is added to `cache`.
     * @param zone the newly-added #ICalTimezone
     */
    connect(sigName: "timezone-added", callback: ((zone: ICalGLib.Timezone) => void)): number
    on(sigName: "timezone-added", callback: (zone: ICalGLib.Timezone) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "timezone-added", callback: (zone: ICalGLib.Timezone) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "timezone-added", callback: (zone: ICalGLib.Timezone) => void): NodeJS.EventEmitter
    emit(sigName: "timezone-added", zone: ICalGLib.Timezone): void
    connect(sigName: "notify::cache", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::cache", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::cache", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::cache", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::cache", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::cache-dir", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::cache-dir", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::cache-dir", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::cache-dir", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::cache-dir", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::kind", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::kind", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::kind", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::kind", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::kind", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::proxy-resolver", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::proxy-resolver", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::proxy-resolver", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::proxy-resolver", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::proxy-resolver", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::registry", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::registry", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::registry", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::registry", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::registry", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::writable", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::writable", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::writable", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::writable", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::writable", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::connectable", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::connectable", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::connectable", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::connectable", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::connectable", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::main-context", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::main-context", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::main-context", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::main-context", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::main-context", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::online", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::online", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::online", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::online", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::online", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::source", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::source", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::source", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::source", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::source", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::user-prompter", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::user-prompter", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::user-prompter", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::user-prompter", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::user-prompter", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: CalMetaBackend_ConstructProps)
    _init (config?: CalMetaBackend_ConstructProps): void
    static $gtype: GObject.Type
}
interface DataCal_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of EDataCal-2.0.EDataCal.DataCal */
    backend?: CalBackend
    connection?: Gio.DBusConnection
    objectPath?: string
}
class DataCal {
    /* Properties of EDataCal-2.0.EDataCal.DataCal */
    readonly backend: CalBackend
    readonly connection: Gio.DBusConnection
    readonly objectPath: string
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of EDataCal-2.0.EDataCal.DataCal */
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
     * @param sourceProperty the property on `source` to bind
     * @param target the target #GObject
     * @param targetProperty the property on `target` to bind
     * @param flags flags to pass to #GBinding
     */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    /**
     * Creates a binding between `source_property` on `source` and `target_property`
     * on `target,` allowing you to set the transformation functions to be used by
     * the binding.
     * 
     * This function is the language bindings friendly version of
     * g_object_bind_property_full(), using #GClosures instead of
     * function pointers.
     * @param sourceProperty the property on `source` to bind
     * @param target the target #GObject
     * @param targetProperty the property on `target` to bind
     * @param flags flags to pass to #GBinding
     * @param transformTo a #GClosure wrapping the transformation function     from the `source` to the `target,` or %NULL to use the default
     * @param transformFrom a #GClosure wrapping the transformation function     from the `target` to the `source,` or %NULL to use the default
     */
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    /**
     * This function is intended for #GObject implementations to re-enforce
     * a [floating][floating-ref] object reference. Doing this is seldom
     * required: all #GInitiallyUnowneds are created with a floating reference
     * which usually just needs to be sunken by calling g_object_ref_sink().
     */
    forceFloating(): void
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
    freezeNotify(): void
    /**
     * Gets a named field from the objects table of associations (see g_object_set_data()).
     * @param key name of the key for that association
     */
    getData(key: string): object | null
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
     * @param propertyName the name of the property to get
     * @param value return location for the property value
     */
    getProperty(propertyName: string, value: any): void
    /**
     * This function gets back user data pointers stored via
     * g_object_set_qdata().
     * @param quark A #GQuark, naming the user data pointer
     */
    getQdata(quark: GLib.Quark): object | null
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
    isFloating(): boolean
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
     * @param propertyName the name of a property installed on the class of `object`.
     */
    notify(propertyName: string): void
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
    notifyByPspec(pspec: GObject.ParamSpec): void
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
    refSink(): GObject.Object
    /**
     * Releases all references to other objects. This can be used to break
     * reference cycles.
     * 
     * This function should only be called from object system implementations.
     */
    runDispose(): void
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
    /**
     * Sets a property on an object.
     * @param propertyName the name of the property to set
     * @param value the value
     */
    setProperty(propertyName: string, value: any): void
    /**
     * Remove a specified datum from the object's data associations,
     * without invoking the association's destroy handler.
     * @param key name of the key
     */
    stealData(key: string): object | null
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
    stealQdata(quark: GLib.Quark): object | null
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
    thawNotify(): void
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
    watchClosure(closure: Function): void
    /* Methods of Gio-2.0.Gio.Initable */
    /**
     * Initializes the object implementing the interface.
     * 
     * This method is intended for language bindings. If writing in C,
     * g_initable_new() should typically be used instead.
     * 
     * The object must be initialized before any real use after initial
     * construction, either with this function or g_async_initable_init_async().
     * 
     * Implementations may also support cancellation. If `cancellable` is not %NULL,
     * then initialization can be cancelled by triggering the cancellable object
     * from another thread. If the operation was cancelled, the error
     * %G_IO_ERROR_CANCELLED will be returned. If `cancellable` is not %NULL and
     * the object doesn't support cancellable initialization the error
     * %G_IO_ERROR_NOT_SUPPORTED will be returned.
     * 
     * If the object is not initialized, or initialization returns with an
     * error, then all operations on the object except g_object_ref() and
     * g_object_unref() are considered to be invalid, and have undefined
     * behaviour. See the [introduction][ginitable] for more details.
     * 
     * Callers should not assume that a class which implements #GInitable can be
     * initialized multiple times, unless the class explicitly documents itself as
     * supporting this. Generally, a class’ implementation of init() can assume
     * (and assert) that it will only be called once. Previously, this documentation
     * recommended all #GInitable implementations should be idempotent; that
     * recommendation was relaxed in GLib 2.54.
     * 
     * If a class explicitly supports being initialized multiple times, it is
     * recommended that the method is idempotent: multiple calls with the same
     * arguments should return the same results. Only the first call initializes
     * the object; further calls return the result of the first call.
     * 
     * One reason why a class might need to support idempotent initialization is if
     * it is designed to be used via the singleton pattern, with a
     * #GObjectClass.constructor that sometimes returns an existing instance.
     * In this pattern, a caller would expect to be able to call g_initable_init()
     * on the result of g_object_new(), regardless of whether it is in fact a new
     * instance.
     * @param cancellable optional #GCancellable object, %NULL to ignore.
     */
    init(cancellable?: Gio.Cancellable | null): boolean
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
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::backend", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::backend", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::backend", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::backend", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::backend", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::connection", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::connection", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::connection", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::connection", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::connection", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::object-path", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::object-path", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::object-path", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::object-path", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::object-path", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: DataCal_ConstructProps)
    _init (config?: DataCal_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(backend: CalBackend, connection: Gio.DBusConnection, objectPath: string): DataCal
    /**
     * Helper function for constructing #GInitable object. This is
     * similar to g_object_newv() but also initializes the object
     * and returns %NULL, setting an error on failure.
     * @param objectType a #GType supporting #GInitable.
     * @param parameters the parameters to use to construct the object
     * @param cancellable optional #GCancellable object, %NULL to ignore.
     */
    static newv(objectType: GObject.Type, parameters: GObject.Parameter[], cancellable?: Gio.Cancellable | null): GObject.Object
    static $gtype: GObject.Type
}
interface DataCalFactory_ConstructProps extends EBackend.DataFactory_ConstructProps {
}
class DataCalFactory {
    /* Properties of EBackend-1.2.EBackend.DataFactory */
    readonly backendPerProcess: number
    readonly registry: EDataServer.SourceRegistry
    readonly reloadSupported: boolean
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of EBackend-1.2.EBackend.DataFactory */
    backendClosed(backend: EBackend.Backend): void
    backendClosedBySender(backend: EBackend.Backend, sender: string): void
    /**
     * Returns a new and unique object path for a D-Bus interface based
     * in the data object path prefix of the `data_factory`
     */
    constructPath(): string
    /**
     * Used only when backend-per-process is off.
     * 
     * Free the returned pointer with g_object_unref(), if not NULL and no longer
     * needed.
     * @param backendFactory 
     * @param source 
     */
    createBackend(backendFactory: EBackend.BackendFactory, source: EDataServer.Source): EBackend.Backend | null
    getBackendPerProcess(): number
    /**
     * Returns the #ESourceRegistry owned by `data_factory`.
     */
    getRegistry(): EDataServer.SourceRegistry
    getReloadSupported(): boolean
    /**
     * Lists the currently opened backends.
     * 
     * The sources returned in the list are referenced for thread-safety.
     * They must each be unreferenced with g_object_unref() when finished
     * with them.  Free the returned #GSList itself with g_slist_free().
     * 
     * An easy way to free the list properly in one step is as follows:
     * 
     * |[
     *   g_slist_free_full (list, g_object_unref);
     * ```
     * 
     */
    listOpenedBackends(): EBackend.Backend[]
    openBackend(backend: EBackend.Backend, connection: Gio.DBusConnection, cancellable?: Gio.Cancellable | null): string
    /**
     * Returns the #EBackendFactory for "`backend_name:``extension_name"`, or
     * %NULL if no such factory is registered.
     * 
     * The returned #EBackendFactory is referenced for thread-safety.
     * Unreference the #EBackendFactory with g_object_unref() when finished
     * with it.
     * @param backendName a backend name
     * @param extensionName an extension name
     */
    refBackendFactory(backendName: string, extensionName: string): EBackend.BackendFactory | null
    /**
     * Spawns a new subprocess for a backend type and returns the object path
     * of the new subprocess to the client, in the way the client can talk
     * directly to the running backend. If the backend already has a subprocess
     * running, the used object path is returned to the client.
     * @param invocation a #GDBusMethodInvocation
     * @param uid an #ESource UID
     * @param extensionName an extension name
     * @param subprocessPath a path of an executable responsible for running the subprocess
     */
    spawnSubprocessBackend(invocation: Gio.DBusMethodInvocation, uid: string, extensionName: string, subprocessPath: string): void
    useBackendPerProcess(): boolean
    /* Methods of EBackend-1.2.EBackend.DBusServer */
    /**
     * Increases the use count of `server`.
     * 
     * Use this function to indicate that the server has a reason to continue
     * to run.  To cancel the hold, call e_dbus_server_release().
     */
    hold(): void
    /**
     * This function should be called once during `server` initialization to
     * load all available library modules to extend the `server'`s functionality.
     */
    loadModules(): void
    /**
     * Emits the #EDBusServer::quit signal with the given `code`.
     * 
     * By default the `server` will quit its main loop and cause
     * e_dbus_server_run() to return `code`.
     * @param code an #EDBusServerExitCode
     */
    quit(code: EBackend.DBusServerExitCode): void
    /**
     * Decreates the use count of `server`.
     * 
     * When the use count reaches zero, the server will stop running.
     * 
     * Never call this function except to cancel the effect of a previous call
     * to e_dbus_server_hold().
     */
    release(): void
    /**
     * Emits the #EDBusServer::run signal.
     * 
     * By default the `server` will start its main loop and attempt to acquire
     * its well-known session bus name.  If the `server'`s main loop is already
     * running, the function will immediately return #E_DBUS_SERVER_EXIT_NONE.
     * Otherwise the function blocks until e_dbus_server_quit() is called.
     * 
     * If `wait_for_client` is %TRUE, the `server` will continue running until
     * the first client connection is made instead of quitting on its own if
     * no client connection is made within the first few seconds.
     * @param waitForClient continue running until a client connects
     */
    run(waitForClient: boolean): EBackend.DBusServerExitCode
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
     * @param sourceProperty the property on `source` to bind
     * @param target the target #GObject
     * @param targetProperty the property on `target` to bind
     * @param flags flags to pass to #GBinding
     */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    /**
     * Creates a binding between `source_property` on `source` and `target_property`
     * on `target,` allowing you to set the transformation functions to be used by
     * the binding.
     * 
     * This function is the language bindings friendly version of
     * g_object_bind_property_full(), using #GClosures instead of
     * function pointers.
     * @param sourceProperty the property on `source` to bind
     * @param target the target #GObject
     * @param targetProperty the property on `target` to bind
     * @param flags flags to pass to #GBinding
     * @param transformTo a #GClosure wrapping the transformation function     from the `source` to the `target,` or %NULL to use the default
     * @param transformFrom a #GClosure wrapping the transformation function     from the `target` to the `source,` or %NULL to use the default
     */
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    /**
     * This function is intended for #GObject implementations to re-enforce
     * a [floating][floating-ref] object reference. Doing this is seldom
     * required: all #GInitiallyUnowneds are created with a floating reference
     * which usually just needs to be sunken by calling g_object_ref_sink().
     */
    forceFloating(): void
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
    freezeNotify(): void
    /**
     * Gets a named field from the objects table of associations (see g_object_set_data()).
     * @param key name of the key for that association
     */
    getData(key: string): object | null
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
     * @param propertyName the name of the property to get
     * @param value return location for the property value
     */
    getProperty(propertyName: string, value: any): void
    /**
     * This function gets back user data pointers stored via
     * g_object_set_qdata().
     * @param quark A #GQuark, naming the user data pointer
     */
    getQdata(quark: GLib.Quark): object | null
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
    isFloating(): boolean
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
     * @param propertyName the name of a property installed on the class of `object`.
     */
    notify(propertyName: string): void
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
    notifyByPspec(pspec: GObject.ParamSpec): void
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
    refSink(): GObject.Object
    /**
     * Releases all references to other objects. This can be used to break
     * reference cycles.
     * 
     * This function should only be called from object system implementations.
     */
    runDispose(): void
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
    /**
     * Sets a property on an object.
     * @param propertyName the name of the property to set
     * @param value the value
     */
    setProperty(propertyName: string, value: any): void
    /**
     * Remove a specified datum from the object's data associations,
     * without invoking the association's destroy handler.
     * @param key name of the key
     */
    stealData(key: string): object | null
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
    stealQdata(quark: GLib.Quark): object | null
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
    thawNotify(): void
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
    watchClosure(closure: Function): void
    /* Methods of EDataServer-1.2.EDataServer.Extensible */
    /**
     * Returns a list of #EExtension objects bound to `extensible` whose
     * types are ancestors of `extension_type`.  For a complete list of
     * extension objects bound to `extensible,` pass %E_TYPE_EXTENSION.
     * 
     * The list itself should be freed with g_list_free().  The extension
     * objects are owned by `extensible` and should not be unreferenced.
     * @param extensionType the type of extensions to list
     */
    listExtensions(extensionType: GObject.Type): EDataServer.Extension[]
    /**
     * Creates an instance of all instantiable subtypes of #EExtension which
     * target the class of `extensible`.  The lifetimes of these newly created
     * #EExtension objects are bound to `extensible` such that they are finalized
     * when `extensible` is finalized.
     */
    loadExtensions(): void
    /* Methods of Gio-2.0.Gio.Initable */
    /**
     * Initializes the object implementing the interface.
     * 
     * This method is intended for language bindings. If writing in C,
     * g_initable_new() should typically be used instead.
     * 
     * The object must be initialized before any real use after initial
     * construction, either with this function or g_async_initable_init_async().
     * 
     * Implementations may also support cancellation. If `cancellable` is not %NULL,
     * then initialization can be cancelled by triggering the cancellable object
     * from another thread. If the operation was cancelled, the error
     * %G_IO_ERROR_CANCELLED will be returned. If `cancellable` is not %NULL and
     * the object doesn't support cancellable initialization the error
     * %G_IO_ERROR_NOT_SUPPORTED will be returned.
     * 
     * If the object is not initialized, or initialization returns with an
     * error, then all operations on the object except g_object_ref() and
     * g_object_unref() are considered to be invalid, and have undefined
     * behaviour. See the [introduction][ginitable] for more details.
     * 
     * Callers should not assume that a class which implements #GInitable can be
     * initialized multiple times, unless the class explicitly documents itself as
     * supporting this. Generally, a class’ implementation of init() can assume
     * (and assert) that it will only be called once. Previously, this documentation
     * recommended all #GInitable implementations should be idempotent; that
     * recommendation was relaxed in GLib 2.54.
     * 
     * If a class explicitly supports being initialized multiple times, it is
     * recommended that the method is idempotent: multiple calls with the same
     * arguments should return the same results. Only the first call initializes
     * the object; further calls return the result of the first call.
     * 
     * One reason why a class might need to support idempotent initialization is if
     * it is designed to be used via the singleton pattern, with a
     * #GObjectClass.constructor that sometimes returns an existing instance.
     * In this pattern, a caller would expect to be able to call g_initable_init()
     * on the result of g_object_new(), regardless of whether it is in fact a new
     * instance.
     * @param cancellable optional #GCancellable object, %NULL to ignore.
     */
    init(cancellable?: Gio.Cancellable | null): boolean
    /* Signals of EBackend-1.2.EBackend.DBusServer */
    /**
     * Emitted when `server` acquires a connection to the session bus.
     * @param connection the #GDBusConnection to the session bus
     */
    connect(sigName: "bus-acquired", callback: ((connection: Gio.DBusConnection) => void)): number
    on(sigName: "bus-acquired", callback: (connection: Gio.DBusConnection) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "bus-acquired", callback: (connection: Gio.DBusConnection) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "bus-acquired", callback: (connection: Gio.DBusConnection) => void): NodeJS.EventEmitter
    emit(sigName: "bus-acquired", connection: Gio.DBusConnection): void
    /**
     * Emitted when `server` acquires its well-known session bus name.
     * @param connection the #GDBusConnection to the session bus
     */
    connect(sigName: "bus-name-acquired", callback: ((connection: Gio.DBusConnection) => void)): number
    on(sigName: "bus-name-acquired", callback: (connection: Gio.DBusConnection) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "bus-name-acquired", callback: (connection: Gio.DBusConnection) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "bus-name-acquired", callback: (connection: Gio.DBusConnection) => void): NodeJS.EventEmitter
    emit(sigName: "bus-name-acquired", connection: Gio.DBusConnection): void
    /**
     * Emitted when `server` loses its well-known session bus name
     * or the session bus connection has been closed.
     * @param connection the #GDBusconnection to the session bus,              or %NULL if the connection has been closed
     */
    connect(sigName: "bus-name-lost", callback: ((connection: Gio.DBusConnection) => void)): number
    on(sigName: "bus-name-lost", callback: (connection: Gio.DBusConnection) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "bus-name-lost", callback: (connection: Gio.DBusConnection) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "bus-name-lost", callback: (connection: Gio.DBusConnection) => void): NodeJS.EventEmitter
    emit(sigName: "bus-name-lost", connection: Gio.DBusConnection): void
    /**
     * Emitted to request that `server` quit its main loop.
     * @param code an #EDBusServerExitCode
     */
    connect(sigName: "quit-server", callback: ((code: EBackend.DBusServerExitCode) => void)): number
    on(sigName: "quit-server", callback: (code: EBackend.DBusServerExitCode) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "quit-server", callback: (code: EBackend.DBusServerExitCode) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "quit-server", callback: (code: EBackend.DBusServerExitCode) => void): NodeJS.EventEmitter
    emit(sigName: "quit-server", code: EBackend.DBusServerExitCode): void
    /**
     * Emitted to request that `server` start its main loop and
     * attempt to acquire its well-known session bus name.
     */
    connect(sigName: "run-server", callback: (() => EBackend.DBusServerExitCode)): number
    on(sigName: "run-server", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "run-server", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "run-server", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "run-server"): void
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
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::backend-per-process", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::backend-per-process", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::backend-per-process", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::backend-per-process", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::backend-per-process", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::registry", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::registry", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::registry", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::registry", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::registry", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::reload-supported", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::reload-supported", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::reload-supported", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::reload-supported", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::reload-supported", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: DataCalFactory_ConstructProps)
    _init (config?: DataCalFactory_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(backendPerProcess: number, cancellable?: Gio.Cancellable | null): DataCalFactory
    /**
     * Helper function for constructing #GInitable object. This is
     * similar to g_object_newv() but also initializes the object
     * and returns %NULL, setting an error on failure.
     * @param objectType a #GType supporting #GInitable.
     * @param parameters the parameters to use to construct the object
     * @param cancellable optional #GCancellable object, %NULL to ignore.
     */
    static newv(objectType: GObject.Type, parameters: GObject.Parameter[], cancellable?: Gio.Cancellable | null): GObject.Object
    static $gtype: GObject.Type
}
interface DataCalView_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of EDataCal-2.0.EDataCal.DataCalView */
    backend?: CalBackend
    connection?: Gio.DBusConnection
    objectPath?: string
    sexp?: CalBackendSExp
}
class DataCalView {
    /* Properties of EDataCal-2.0.EDataCal.DataCalView */
    readonly backend: CalBackend
    readonly connection: Gio.DBusConnection
    readonly objectPath: string
    readonly sexp: CalBackendSExp
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of EDataCal-2.0.EDataCal.DataCalView */
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
     * @param sourceProperty the property on `source` to bind
     * @param target the target #GObject
     * @param targetProperty the property on `target` to bind
     * @param flags flags to pass to #GBinding
     */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    /**
     * Creates a binding between `source_property` on `source` and `target_property`
     * on `target,` allowing you to set the transformation functions to be used by
     * the binding.
     * 
     * This function is the language bindings friendly version of
     * g_object_bind_property_full(), using #GClosures instead of
     * function pointers.
     * @param sourceProperty the property on `source` to bind
     * @param target the target #GObject
     * @param targetProperty the property on `target` to bind
     * @param flags flags to pass to #GBinding
     * @param transformTo a #GClosure wrapping the transformation function     from the `source` to the `target,` or %NULL to use the default
     * @param transformFrom a #GClosure wrapping the transformation function     from the `target` to the `source,` or %NULL to use the default
     */
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    /**
     * This function is intended for #GObject implementations to re-enforce
     * a [floating][floating-ref] object reference. Doing this is seldom
     * required: all #GInitiallyUnowneds are created with a floating reference
     * which usually just needs to be sunken by calling g_object_ref_sink().
     */
    forceFloating(): void
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
    freezeNotify(): void
    /**
     * Gets a named field from the objects table of associations (see g_object_set_data()).
     * @param key name of the key for that association
     */
    getData(key: string): object | null
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
     * @param propertyName the name of the property to get
     * @param value return location for the property value
     */
    getProperty(propertyName: string, value: any): void
    /**
     * This function gets back user data pointers stored via
     * g_object_set_qdata().
     * @param quark A #GQuark, naming the user data pointer
     */
    getQdata(quark: GLib.Quark): object | null
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
    isFloating(): boolean
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
     * @param propertyName the name of a property installed on the class of `object`.
     */
    notify(propertyName: string): void
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
    notifyByPspec(pspec: GObject.ParamSpec): void
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
    refSink(): GObject.Object
    /**
     * Releases all references to other objects. This can be used to break
     * reference cycles.
     * 
     * This function should only be called from object system implementations.
     */
    runDispose(): void
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
    /**
     * Sets a property on an object.
     * @param propertyName the name of the property to set
     * @param value the value
     */
    setProperty(propertyName: string, value: any): void
    /**
     * Remove a specified datum from the object's data associations,
     * without invoking the association's destroy handler.
     * @param key name of the key
     */
    stealData(key: string): object | null
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
    stealQdata(quark: GLib.Quark): object | null
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
    thawNotify(): void
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
    watchClosure(closure: Function): void
    /* Methods of Gio-2.0.Gio.Initable */
    /**
     * Initializes the object implementing the interface.
     * 
     * This method is intended for language bindings. If writing in C,
     * g_initable_new() should typically be used instead.
     * 
     * The object must be initialized before any real use after initial
     * construction, either with this function or g_async_initable_init_async().
     * 
     * Implementations may also support cancellation. If `cancellable` is not %NULL,
     * then initialization can be cancelled by triggering the cancellable object
     * from another thread. If the operation was cancelled, the error
     * %G_IO_ERROR_CANCELLED will be returned. If `cancellable` is not %NULL and
     * the object doesn't support cancellable initialization the error
     * %G_IO_ERROR_NOT_SUPPORTED will be returned.
     * 
     * If the object is not initialized, or initialization returns with an
     * error, then all operations on the object except g_object_ref() and
     * g_object_unref() are considered to be invalid, and have undefined
     * behaviour. See the [introduction][ginitable] for more details.
     * 
     * Callers should not assume that a class which implements #GInitable can be
     * initialized multiple times, unless the class explicitly documents itself as
     * supporting this. Generally, a class’ implementation of init() can assume
     * (and assert) that it will only be called once. Previously, this documentation
     * recommended all #GInitable implementations should be idempotent; that
     * recommendation was relaxed in GLib 2.54.
     * 
     * If a class explicitly supports being initialized multiple times, it is
     * recommended that the method is idempotent: multiple calls with the same
     * arguments should return the same results. Only the first call initializes
     * the object; further calls return the result of the first call.
     * 
     * One reason why a class might need to support idempotent initialization is if
     * it is designed to be used via the singleton pattern, with a
     * #GObjectClass.constructor that sometimes returns an existing instance.
     * In this pattern, a caller would expect to be able to call g_initable_init()
     * on the result of g_object_new(), regardless of whether it is in fact a new
     * instance.
     * @param cancellable optional #GCancellable object, %NULL to ignore.
     */
    init(cancellable?: Gio.Cancellable | null): boolean
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
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::backend", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::backend", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::backend", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::backend", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::backend", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::connection", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::connection", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::connection", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::connection", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::connection", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::object-path", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::object-path", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::object-path", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::object-path", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::object-path", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::sexp", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sexp", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::sexp", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::sexp", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::sexp", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: DataCalView_ConstructProps)
    _init (config?: DataCalView_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(backend: object | null, sexp: object | null, connection: Gio.DBusConnection, objectPath: string): DataCalView
    /**
     * Helper function for constructing #GInitable object. This is
     * similar to g_object_newv() but also initializes the object
     * and returns %NULL, setting an error on failure.
     * @param objectType a #GType supporting #GInitable.
     * @param parameters the parameters to use to construct the object
     * @param cancellable optional #GCancellable object, %NULL to ignore.
     */
    static newv(objectType: GObject.Type, parameters: GObject.Parameter[], cancellable?: Gio.Cancellable | null): GObject.Object
    static $gtype: GObject.Type
}
interface IntervalTree_ConstructProps extends GObject.Object_ConstructProps {
}
class IntervalTree {
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of EDataCal-2.0.EDataCal.IntervalTree */
    destroy(): void
    dump(): void
    insert(start: number, end: number, comp: ECal.Component): boolean
    remove(uid: string, rid: string): boolean
    search(start: number, end: number): ECal.Component[] | null
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
     * @param sourceProperty the property on `source` to bind
     * @param target the target #GObject
     * @param targetProperty the property on `target` to bind
     * @param flags flags to pass to #GBinding
     */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    /**
     * Creates a binding between `source_property` on `source` and `target_property`
     * on `target,` allowing you to set the transformation functions to be used by
     * the binding.
     * 
     * This function is the language bindings friendly version of
     * g_object_bind_property_full(), using #GClosures instead of
     * function pointers.
     * @param sourceProperty the property on `source` to bind
     * @param target the target #GObject
     * @param targetProperty the property on `target` to bind
     * @param flags flags to pass to #GBinding
     * @param transformTo a #GClosure wrapping the transformation function     from the `source` to the `target,` or %NULL to use the default
     * @param transformFrom a #GClosure wrapping the transformation function     from the `target` to the `source,` or %NULL to use the default
     */
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    /**
     * This function is intended for #GObject implementations to re-enforce
     * a [floating][floating-ref] object reference. Doing this is seldom
     * required: all #GInitiallyUnowneds are created with a floating reference
     * which usually just needs to be sunken by calling g_object_ref_sink().
     */
    forceFloating(): void
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
    freezeNotify(): void
    /**
     * Gets a named field from the objects table of associations (see g_object_set_data()).
     * @param key name of the key for that association
     */
    getData(key: string): object | null
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
     * @param propertyName the name of the property to get
     * @param value return location for the property value
     */
    getProperty(propertyName: string, value: any): void
    /**
     * This function gets back user data pointers stored via
     * g_object_set_qdata().
     * @param quark A #GQuark, naming the user data pointer
     */
    getQdata(quark: GLib.Quark): object | null
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
    isFloating(): boolean
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
     * @param propertyName the name of a property installed on the class of `object`.
     */
    notify(propertyName: string): void
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
    notifyByPspec(pspec: GObject.ParamSpec): void
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
    refSink(): GObject.Object
    /**
     * Releases all references to other objects. This can be used to break
     * reference cycles.
     * 
     * This function should only be called from object system implementations.
     */
    runDispose(): void
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
    /**
     * Sets a property on an object.
     * @param propertyName the name of the property to set
     * @param value the value
     */
    setProperty(propertyName: string, value: any): void
    /**
     * Remove a specified datum from the object's data associations,
     * without invoking the association's destroy handler.
     * @param key name of the key
     */
    stealData(key: string): object | null
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
    stealQdata(quark: GLib.Quark): object | null
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
    thawNotify(): void
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
    watchClosure(closure: Function): void
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
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: IntervalTree_ConstructProps)
    _init (config?: IntervalTree_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): IntervalTree
    static $gtype: GObject.Type
}
interface SubprocessCalFactory_ConstructProps extends EBackend.SubprocessFactory_ConstructProps {
}
class SubprocessCalFactory {
    /* Properties of EBackend-1.2.EBackend.SubprocessFactory */
    readonly registry: EDataServer.SourceRegistry
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of EBackend-1.2.EBackend.SubprocessFactory */
    /**
     * Calls e_backend_prepare_shutdown() for the list of used backends.
     */
    callBackendsPrepareShutdown(): void
    /**
     * Returns a list of used backends.
     */
    getBackendsList(): EBackend.Backend[]
    /**
     * Returns the #ESourceRegistry owned by `subprocess_factory`.
     */
    getRegistry(): EDataServer.SourceRegistry
    /**
     * Returns the #EBackend data D-Bus object path
     * @param connection a #GDBusConnection
     * @param uid UID of an #ESource to open
     * @param backendFactoryTypeName the name of the backend factory type
     * @param moduleFilename the name (full-path) of the backend module to be loaded
     * @param proxy a #GDBusInterfaceSkeleton, used to communicate to the subprocess backend
     * @param cancellable a #GCancellable
     */
    openBackend(connection: Gio.DBusConnection, uid: string, backendFactoryTypeName: string, moduleFilename: string, proxy: Gio.DBusInterfaceSkeleton, cancellable?: Gio.Cancellable | null): string
    /**
     * Returns either a newly-created or existing #EBackend for #ESource.
     * The returned #EBackend is referenced for thread-safety and must be
     * unreferenced with g_object_unref() when finished with it.
     * 
     * If the newly-created backend implements the #GInitable interface, then
     * g_initable_init() is also called on it using `cancellable` and `error`.
     * 
     * The `subprocess_factory` retains a strong reference to `backend`.
     * 
     * If no suitable #EBackendFactory exists, or if the #EBackend fails to
     * initialize, the function sets `error` and returns %NULL.
     * @param uid UID of an #ESource to open
     * @param backendFactoryTypeName the name of the backend factory type
     * @param moduleFilename the name (full-path) of the backend module to be loaded
     * @param cancellable optional #GCancellable object, or %NULL
     */
    refInitableBackend(uid: string, backendFactoryTypeName: string, moduleFilename: string, cancellable?: Gio.Cancellable | null): EBackend.Backend | null
    /**
     * Installs a toggle reference on the backend, that can receive a signal to
     * shutdown once all client connections are closed.
     * @param backend an #EBackend
     * @param proxy a #GDBusInterfaceSkeleton, used to communicate to the subprocess backend
     */
    setBackendCallbacks(backend: EBackend.Backend, proxy: Gio.DBusInterfaceSkeleton): void
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
     * @param sourceProperty the property on `source` to bind
     * @param target the target #GObject
     * @param targetProperty the property on `target` to bind
     * @param flags flags to pass to #GBinding
     */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    /**
     * Creates a binding between `source_property` on `source` and `target_property`
     * on `target,` allowing you to set the transformation functions to be used by
     * the binding.
     * 
     * This function is the language bindings friendly version of
     * g_object_bind_property_full(), using #GClosures instead of
     * function pointers.
     * @param sourceProperty the property on `source` to bind
     * @param target the target #GObject
     * @param targetProperty the property on `target` to bind
     * @param flags flags to pass to #GBinding
     * @param transformTo a #GClosure wrapping the transformation function     from the `source` to the `target,` or %NULL to use the default
     * @param transformFrom a #GClosure wrapping the transformation function     from the `target` to the `source,` or %NULL to use the default
     */
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    /**
     * This function is intended for #GObject implementations to re-enforce
     * a [floating][floating-ref] object reference. Doing this is seldom
     * required: all #GInitiallyUnowneds are created with a floating reference
     * which usually just needs to be sunken by calling g_object_ref_sink().
     */
    forceFloating(): void
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
    freezeNotify(): void
    /**
     * Gets a named field from the objects table of associations (see g_object_set_data()).
     * @param key name of the key for that association
     */
    getData(key: string): object | null
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
     * @param propertyName the name of the property to get
     * @param value return location for the property value
     */
    getProperty(propertyName: string, value: any): void
    /**
     * This function gets back user data pointers stored via
     * g_object_set_qdata().
     * @param quark A #GQuark, naming the user data pointer
     */
    getQdata(quark: GLib.Quark): object | null
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
    isFloating(): boolean
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
     * @param propertyName the name of a property installed on the class of `object`.
     */
    notify(propertyName: string): void
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
    notifyByPspec(pspec: GObject.ParamSpec): void
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
    refSink(): GObject.Object
    /**
     * Releases all references to other objects. This can be used to break
     * reference cycles.
     * 
     * This function should only be called from object system implementations.
     */
    runDispose(): void
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
    /**
     * Sets a property on an object.
     * @param propertyName the name of the property to set
     * @param value the value
     */
    setProperty(propertyName: string, value: any): void
    /**
     * Remove a specified datum from the object's data associations,
     * without invoking the association's destroy handler.
     * @param key name of the key
     */
    stealData(key: string): object | null
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
    stealQdata(quark: GLib.Quark): object | null
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
    thawNotify(): void
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
    watchClosure(closure: Function): void
    /* Methods of Gio-2.0.Gio.Initable */
    /**
     * Initializes the object implementing the interface.
     * 
     * This method is intended for language bindings. If writing in C,
     * g_initable_new() should typically be used instead.
     * 
     * The object must be initialized before any real use after initial
     * construction, either with this function or g_async_initable_init_async().
     * 
     * Implementations may also support cancellation. If `cancellable` is not %NULL,
     * then initialization can be cancelled by triggering the cancellable object
     * from another thread. If the operation was cancelled, the error
     * %G_IO_ERROR_CANCELLED will be returned. If `cancellable` is not %NULL and
     * the object doesn't support cancellable initialization the error
     * %G_IO_ERROR_NOT_SUPPORTED will be returned.
     * 
     * If the object is not initialized, or initialization returns with an
     * error, then all operations on the object except g_object_ref() and
     * g_object_unref() are considered to be invalid, and have undefined
     * behaviour. See the [introduction][ginitable] for more details.
     * 
     * Callers should not assume that a class which implements #GInitable can be
     * initialized multiple times, unless the class explicitly documents itself as
     * supporting this. Generally, a class’ implementation of init() can assume
     * (and assert) that it will only be called once. Previously, this documentation
     * recommended all #GInitable implementations should be idempotent; that
     * recommendation was relaxed in GLib 2.54.
     * 
     * If a class explicitly supports being initialized multiple times, it is
     * recommended that the method is idempotent: multiple calls with the same
     * arguments should return the same results. Only the first call initializes
     * the object; further calls return the result of the first call.
     * 
     * One reason why a class might need to support idempotent initialization is if
     * it is designed to be used via the singleton pattern, with a
     * #GObjectClass.constructor that sometimes returns an existing instance.
     * In this pattern, a caller would expect to be able to call g_initable_init()
     * on the result of g_object_new(), regardless of whether it is in fact a new
     * instance.
     * @param cancellable optional #GCancellable object, %NULL to ignore.
     */
    init(cancellable?: Gio.Cancellable | null): boolean
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
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::registry", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::registry", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::registry", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::registry", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::registry", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: SubprocessCalFactory_ConstructProps)
    _init (config?: SubprocessCalFactory_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(cancellable?: Gio.Cancellable | null): SubprocessCalFactory
    /**
     * Helper function for constructing #GInitable object. This is
     * similar to g_object_newv() but also initializes the object
     * and returns %NULL, setting an error on failure.
     * @param objectType a #GType supporting #GInitable.
     * @param parameters the parameters to use to construct the object
     * @param cancellable optional #GCancellable object, %NULL to ignore.
     */
    static newv(objectType: GObject.Type, parameters: GObject.Parameter[], cancellable?: Gio.Cancellable | null): GObject.Object
    static $gtype: GObject.Type
}
abstract class CalBackendClass {
    /* Fields of EDataCal-2.0.EDataCal.CalBackendClass */
    /**
     * Whether a serial dispatch queue should
     *                             be used for this backend or not. The default is %TRUE.
     */
    useSerialDispatchQueue: boolean
    implGetBackendProperty: (backend: CalBackend, propName: string) => string
    implOpen: (backend: CalBackend, cal: DataCal, opid: number, cancellable?: Gio.Cancellable | null) => void
    implRefresh: (backend: CalBackend, cal: DataCal, opid: number, cancellable?: Gio.Cancellable | null) => void
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
    static name: string
}
abstract class CalBackendFactoryClass {
    /* Fields of EDataCal-2.0.EDataCal.CalBackendFactoryClass */
    /**
     * The string identifier for this book backend type
     */
    factoryName: string
    /**
     * The type if component this calendar backend should be created for
     */
    componentKind: ICalGLib.ComponentKind
    /**
     * The #GType to use to build #EBookBackends for this factory
     */
    backendType: GObject.Type
    static name: string
}
class CalBackendFactoryPrivate {
    static name: string
}
class CalBackendPrivate {
    static name: string
}
abstract class CalBackendSExpClass {
    static name: string
}
class CalBackendSExpPrivate {
    static name: string
}
abstract class CalBackendSyncClass {
    /* Fields of EDataCal-2.0.EDataCal.CalBackendSyncClass */
    openSync: (backend: CalBackendSync, cal: DataCal, cancellable?: Gio.Cancellable | null) => void
    refreshSync: (backend: CalBackendSync, cal: DataCal, cancellable?: Gio.Cancellable | null) => void
    getObjectSync: (backend: CalBackendSync, cal: DataCal, cancellable: Gio.Cancellable | null, uid: string, rid: string, calobj: string) => void
    receiveObjectsSync: (backend: CalBackendSync, cal: DataCal, cancellable: Gio.Cancellable | null, calobj: string, opflags: ECal.OperationFlags) => void
    discardAlarmSync: (backend: CalBackendSync, cal: DataCal, cancellable: Gio.Cancellable | null, uid: string, rid: string, auid: string, opflags: ECal.OperationFlags) => void
    getTimezoneSync: (backend: CalBackendSync, cal: DataCal, cancellable: Gio.Cancellable | null, tzid: string, tzobject: string) => void
    addTimezoneSync: (backend: CalBackendSync, cal: DataCal, cancellable: Gio.Cancellable | null, tzobject: string) => void
    reservedPadding: object[]
    static name: string
}
class CalBackendSyncPrivate {
    static name: string
}
abstract class CalCacheClass {
    /* Fields of EDataCal-2.0.EDataCal.CalCacheClass */
    dupComponentRevision: (calCache: CalCache, icomp: ICalGLib.Component) => string
    static name: string
}
class CalCacheOfflineChange {
    /* Fields of EDataCal-2.0.EDataCal.CalCacheOfflineChange */
    /**
     * UID of the component
     */
    uid: string
    /**
     * Recurrence-ID of the component
     */
    rid: string
    /**
     * stored revision of the component
     */
    revision: string
    /**
     * the component itself, as an iCalendar string
     */
    object: string
    /**
     * an #EOfflineState of the component
     */
    state: EBackend.OfflineState
    /* Methods of EDataCal-2.0.EDataCal.CalCacheOfflineChange */
    copy(): CalCacheOfflineChange | null
    static name: string
    static new(uid: string, rid: string | null, revision: string | null, object: string | null, state: EBackend.OfflineState): CalCacheOfflineChange
    constructor(uid: string, rid: string | null, revision: string | null, object: string | null, state: EBackend.OfflineState)
    /* Static methods and pseudo-constructors */
    static new(uid: string, rid: string | null, revision: string | null, object: string | null, state: EBackend.OfflineState): CalCacheOfflineChange
    /**
     * Frees the `change` structure, previously allocated with e_cal_cache_offline_change_new()
     * or e_cal_cache_offline_change_copy().
     * @param change an #ECalCacheOfflineChange
     */
    static free(change?: object | null): void
}
class CalCachePrivate {
    static name: string
}
class CalCacheSearchData {
    /* Fields of EDataCal-2.0.EDataCal.CalCacheSearchData */
    /**
     * the UID of this component
     */
    uid: string
    /**
     * the Recurrence-ID of this component
     */
    rid: string
    /**
     * the component string
     */
    object: string
    /**
     * any extra data associated with the component
     */
    extra: string
    /* Methods of EDataCal-2.0.EDataCal.CalCacheSearchData */
    copy(): CalCacheSearchData | null
    static name: string
    static new(uid: string, rid: string | null, object: string, extra?: string | null): CalCacheSearchData
    constructor(uid: string, rid: string | null, object: string, extra?: string | null)
    /* Static methods and pseudo-constructors */
    static new(uid: string, rid: string | null, object: string, extra?: string | null): CalCacheSearchData
    /**
     * Frees the `ptr` structure, previously allocated with e_cal_cache_search_data_new()
     * or e_cal_cache_search_data_copy().
     * @param ptr an #ECalCacheSearchData
     */
    static free(ptr?: object | null): void
}
abstract class CalMetaBackendClass {
    /* Fields of EDataCal-2.0.EDataCal.CalMetaBackendClass */
    connectSync: (metaBackend: CalMetaBackend, credentials?: EDataServer.NamedParameters | null, cancellable?: Gio.Cancellable | null) => [ /* returnType */ boolean, /* outAuthResult */ EDataServer.SourceAuthenticationResult, /* outCertificatePem */ string, /* outCertificateErrors */ Gio.TlsCertificateFlags ]
    disconnectSync: (metaBackend: CalMetaBackend, cancellable?: Gio.Cancellable | null) => boolean
    getChangesSync: (metaBackend: CalMetaBackend, lastSyncTag: string | null, isRepeat: boolean, cancellable?: Gio.Cancellable | null) => [ /* returnType */ boolean, /* outNewSyncTag */ string, /* outRepeat */ boolean, /* outCreatedObjects */ CalMetaBackendInfo[], /* outModifiedObjects */ CalMetaBackendInfo[], /* outRemovedObjects */ CalMetaBackendInfo[] ]
    listExistingSync: (metaBackend: CalMetaBackend, cancellable?: Gio.Cancellable | null) => [ /* returnType */ boolean, /* outNewSyncTag */ string, /* outExistingObjects */ CalMetaBackendInfo[] ]
    loadComponentSync: (metaBackend: CalMetaBackend, uid: string, extra?: string | null, cancellable?: Gio.Cancellable | null) => [ /* returnType */ boolean, /* outComponent */ ICalGLib.Component, /* outExtra */ string ]
    saveComponentSync: (metaBackend: CalMetaBackend, overwriteExisting: boolean, conflictResolution: EDataServer.ConflictResolution, instances: ECal.Component[], extra: string | null, opflags: ECal.OperationFlags, cancellable?: Gio.Cancellable | null) => [ /* returnType */ boolean, /* outNewUid */ string, /* outNewExtra */ string ]
    removeComponentSync: (metaBackend: CalMetaBackend, conflictResolution: EDataServer.ConflictResolution, uid: string, extra: string | null, object: string | null, opflags: ECal.OperationFlags, cancellable?: Gio.Cancellable | null) => boolean
    searchSync: (metaBackend: CalMetaBackend, expr?: string | null, cancellable?: Gio.Cancellable | null) => [ /* returnType */ boolean, /* outIcalstrings */ string[] ]
    searchComponentsSync: (metaBackend: CalMetaBackend, expr?: string | null, cancellable?: Gio.Cancellable | null) => [ /* returnType */ boolean, /* outComponents */ ECal.Component[] ]
    requiresReconnect: (metaBackend: CalMetaBackend) => boolean
    sourceChanged: (metaBackend: CalMetaBackend) => void
    getSslErrorDetails: (metaBackend: CalMetaBackend) => [ /* returnType */ boolean, /* outCertificatePem */ string, /* outCertificateErrors */ Gio.TlsCertificateFlags ]
    static name: string
}
class CalMetaBackendInfo {
    /* Fields of EDataCal-2.0.EDataCal.CalMetaBackendInfo */
    uid: string
    revision: string
    object: string
    extra: string
    /* Methods of EDataCal-2.0.EDataCal.CalMetaBackendInfo */
    copy(): CalMetaBackendInfo
    static name: string
    static new(uid: string, revision?: string | null, object?: string | null, extra?: string | null): CalMetaBackendInfo
    constructor(uid: string, revision?: string | null, object?: string | null, extra?: string | null)
    /* Static methods and pseudo-constructors */
    static new(uid: string, revision?: string | null, object?: string | null, extra?: string | null): CalMetaBackendInfo
    /**
     * Frees the `ptr` structure, previously allocated with e_cal_meta_backend_info_new()
     * or e_cal_meta_backend_info_copy().
     * @param ptr an #ECalMetaBackendInfo
     */
    static free(ptr?: object | null): void
}
class CalMetaBackendPrivate {
    static name: string
}
abstract class DataCalClass {
    /* Fields of EDataCal-2.0.EDataCal.DataCalClass */
    parentClass: GObject.ObjectClass
    static name: string
}
abstract class DataCalFactoryClass {
    /* Fields of EDataCal-2.0.EDataCal.DataCalFactoryClass */
    parentClass: EBackend.DataFactoryClass
    static name: string
}
class DataCalFactoryPrivate {
    static name: string
}
class DataCalPrivate {
    static name: string
}
abstract class DataCalViewClass {
    /* Fields of EDataCal-2.0.EDataCal.DataCalViewClass */
    parentClass: GObject.ObjectClass
    static name: string
}
class DataCalViewPrivate {
    static name: string
}
abstract class IntervalTreeClass {
    static name: string
}
class IntervalTreePrivate {
    static name: string
}
abstract class SubprocessCalFactoryClass {
    /* Fields of EDataCal-2.0.EDataCal.SubprocessCalFactoryClass */
    parentClass: EBackend.SubprocessFactoryClass
    static name: string
}
class SubprocessCalFactoryPrivate {
    static name: string
}
}
export default EDataCal;