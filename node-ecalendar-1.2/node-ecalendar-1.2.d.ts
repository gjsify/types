
/*
 * Type Definitions for node-gtk (https://github.com/romgrk/node-gtk)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/gjsify/ts-for-gir
 */

import './node-ecalendar-1.2-import.d.ts';
    
/**
 * ECalendar-1.2
 */

import type libxml2 from '@girs/libxml2-2.0';
import type Gio from '@girs/gio-2.0';
import type GObject from '@girs/gobject-2.0';
import type GLib from '@girs/glib-2.0';
import type EDataServer from '@girs/edataserver-1.2';
import type Soup from '@girs/soup-3.0';
import type Json from '@girs/json-1.0';
import type Camel from '@girs/camel-1.2';

export namespace ECalendar {

/**
 * FIXME: Document me.
 */
enum CalClientError {
    NO_SUCH_CALENDAR,
    OBJECT_NOT_FOUND,
    INVALID_OBJECT,
    UNKNOWN_USER,
    OBJECT_ID_ALREADY_EXISTS,
    INVALID_RANGE,
}
/**
 * FIXME: Document me.
 */
enum CalClientSourceType {
    EVENTS,
    TASKS,
    MEMOS,
    LAST,
}
enum CalClientSourceTypeEnum {
    EVENTS,
    TASKS,
    MEMOS,
    INVALID,
}
enum CalComponentAlarmAction {
    NONE,
    AUDIO,
    DISPLAY,
    EMAIL,
    PROCEDURE,
    UNKNOWN,
}
enum CalComponentAlarmTriggerType {
    NONE,
    RELATIVE_START,
    RELATIVE_END,
    ABSOLUTE,
}
enum CalComponentClassification {
    NONE,
    PUBLIC,
    PRIVATE,
    CONFIDENTIAL,
    UNKNOWN,
}
enum CalComponentField {
    CATEGORIES,
    CLASSIFICATION,
    COMPLETED,
    DTEND,
    DTSTART,
    DUE,
    GEO,
    PERCENT,
    PRIORITY,
    SUMMARY,
    TRANSPARENCY,
    URL,
    HAS_ALARMS,
    ICON,
    COMPLETE,
    RECURRING,
    OVERDUE,
    COLOR,
    STATUS,
    COMPONENT,
    LOCATION,
    NUM_FIELDS,
}
enum CalComponentPeriodType {
    DATETIME,
    DURATION,
}
enum CalComponentRangeType {
    SINGLE,
    THISPRIOR,
    THISFUTURE,
}
enum CalComponentTransparency {
    NONE,
    TRANSPARENT,
    OPAQUE,
    UNKNOWN,
}
enum CalComponentVType {
    NO_TYPE,
    EVENT,
    TODO,
    JOURNAL,
    FREEBUSY,
    TIMEZONE,
}
enum CalLoadState {
    NOT_LOADED,
    LOADING,
    LOADED,
}
enum CalSetModeStatus {
    SUCCESS,
    ERROR,
    NOT_SUPPORTED,
}
enum CalSetModeStatusEnum {
    SUCCESS,
    ERROR,
    UNSUPPORTED,
}
enum CalSourceType {
    EVENT,
    TODO,
    JOURNAL,
    LAST,
}
enum CalSourceTypeEnum {
    EVENT,
    TODO,
    JOURNAL,
    INVALID,
}
enum CalendarStatus {
    OK,
    INVALID_ARG,
    BUSY,
    REPOSITORY_OFFLINE,
    NO_SUCH_CALENDAR,
    OBJECT_NOT_FOUND,
    INVALID_OBJECT,
    URI_NOT_LOADED,
    URI_ALREADY_LOADED,
    PERMISSION_DENIED,
    UNKNOWN_USER,
    OBJECT_ID_ALREADY_EXISTS,
    PROTOCOL_NOT_SUPPORTED,
    CANCELLED,
    COULD_NOT_CANCEL,
    AUTHENTICATION_FAILED,
    AUTHENTICATION_REQUIRED,
    DBUS_EXCEPTION,
    OTHER_ERROR,
    INVALID_SERVER_VERSION,
    NOT_SUPPORTED,
}
/**
 * FIXME Document me!
 */
enum DataCalCallStatus {
    SUCCESS,
    BUSY,
    REPOSITORYOFFLINE,
    PERMISSIONDENIED,
    INVALIDRANGE,
    OBJECTNOTFOUND,
    INVALIDOBJECT,
    OBJECTIDALREADYEXISTS,
    AUTHENTICATIONFAILED,
    AUTHENTICATIONREQUIRED,
    UNSUPPORTEDFIELD,
    UNSUPPORTEDMETHOD,
    UNSUPPORTEDAUTHENTICATIONMETHOD,
    TLSNOTAVAILABLE,
    NOSUCHCAL,
    UNKNOWNUSER,
    OFFLINEUNAVAILABLE,
    SEARCHSIZELIMITEXCEEDED,
    SEARCHTIMELIMITEXCEEDED,
    INVALIDQUERY,
    QUERYREFUSED,
    COULDNOTCANCEL,
    OTHERERROR,
    INVALIDSERVERVERSION,
    INVALIDARG,
    NOTSUPPORTED,
    NOTOPENED,
}
enum CalChangeType {
    ADDED,
    MODIFIED,
    DELETED,
}
/**
 * Flags that control the behaviour of an #ECalClientView.
 * @bitfield 
 */
enum CalClientViewFlags {
    NONE,
    NOTIFY_INITIAL,
}
/**
 * FIXME: Document me.
 * @bitfield 
 */
enum DataCalMode {
    OCAL,
    EMOTE,
    NYMODE,
}
/**
 * FIXME Document me!
 * @bitfield 
 */
enum DataCalObjModType {
    THIS,
    THISANDPRIOR,
    THISANDFUTURE,
    ALL,
}
/**
 * FIXME Document me!
 * @bitfield 
 */
enum DataCalObjType {
    EVENT,
    TODO,
    JOURNAL,
    ANYTYPE,
}
function calendarErrorQuark(): GLib.Quark
interface CalRecurInstanceFn {
    (comp: CalComponent, instanceStart: number, instanceEnd: number, data: any): boolean
}
module Cal {

    // Signal callback interfaces

    /**
     * Signal callback interface for `backend-died`
     */
    interface BackendDiedSignalCallback {
        (): void
    }

    /**
     * Signal callback interface for `backend-error`
     */
    interface BackendErrorSignalCallback {
        (object: string): void
    }

    /**
     * Signal callback interface for `cal-opened`
     */
    interface CalOpenedSignalCallback {
        (object: number): void
    }

    /**
     * Signal callback interface for `cal-opened-ex`
     */
    interface CalOpenedExSignalCallback {
        (error: number): void
    }



    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

interface Cal {

    // Own properties of ECalendar-1.2.ECalendar.Cal

    __gtype__: number

    // Own fields of ECalendar-1.2.ECalendar.Cal

    object: GObject.Object

    // Owm methods of ECalendar-1.2.ECalendar.Cal

    /**
     * Tells the calendar backend to get rid of the alarm identified by the
     * `auid` argument in `comp`. Some backends might remove the alarm or
     * update internal information about the alarm be discarded, or, like
     * the file backend does, ignore the operation.
     * 
     * CALOBJ_MOD_ONLY_THIS is not supported in this call.
     * @param comp The component to discard the alarm from.
     * @param auid Unique identifier of the alarm to be discarded.
     * @returns TRUE if the operation was successful, FALSE otherwise.
     */
    discardAlarm(comp: CalComponent, auid: string | null): boolean
    /**
     * Queries the address to be used for alarms in a calendar client.
     * @param alarmAddress Return value for alarm address.
     * @returns TRUE if the operation was successful, FALSE if there was an error while contacting the backend.
     */
    getAlarmEmailAddress(alarmAddress: string | null): boolean
    /**
     * Queries a calendar for the alarms of a particular object that trigger in the
     * specified range of time.
     * @param id Unique identifier for a calendar component.
     * @param start Start time for query.
     * @param end End time for query.
     * @param alarms Return value for the component's alarm instances.  Will return NULL if no instances occur within the specified time range.  This should be freed using the e_cal_component_alarms_free() function.
     * @returns TRUE on success, FALSE if the object was not found.
     */
    getAlarmsForObject(id: CalComponentId, start: number, end: number, alarms: CalComponentAlarms): boolean
    /**
     * Queries the calendar address associated with a calendar client.
     * @param calAddress Return value for address information.
     * @returns TRUE if the operation was successful, FALSE if there was an error.
     */
    getCalAddress(calAddress: string | null): boolean
    /**
     * Queries the LDAP attribute for a calendar client.
     * @param ldapAttribute Return value for the LDAP attribute.
     * @returns TRUE if the call was successful, FALSE if there was an error contacting the backend.
     */
    getLdapAttribute(ldapAttribute: string | null): boolean
    /**
     * Queries the state of loading of a calendar client.
     * @returns A #ECalLoadState value indicating whether the client has not been loaded with #e_cal_open yet, whether it is being loaded, or whether it is already loaded.
     */
    getLoadState(): CalLoadState
    /**
     * Queries the URL where the calendar attachments are
     * serialized in the local filesystem. This enable clients
     * to operate with the reference to attachments rather than the data itself
     * unless it specifically uses the attachments for open/sending
     * operations.
     * @returns The URL where the attachments are serialized in the local filesystem.
     */
    getLocalAttachmentStore(): string | null
    /**
     * Gets a list of objects from the calendar that match the query specified
     * by the `query` argument. The objects will be returned in the `objects`
     * argument, which is a list of #icalcomponent. When done, this list
     * should be freed by using the #e_cal_free_object_list function.
     * @param query Query string.
     * @returns TRUE if the operation was successful, FALSE otherwise.
     */
    getObjectList(query: string | null): [ /* returnType */ boolean, /* objects */ number[] ]
    /**
     * Checks if a calendar supports only one alarm per component.
     * @returns TRUE if the calendar allows only one alarm, FALSE otherwise.
     */
    getOneAlarmOnly(): boolean
    /**
     * Checks whether a calendar requires organizer to accept their attendance to
     * meetings.
     * @returns TRUE if the calendar requires organizers to accept, FALSE otherwise.
     */
    getOrganizerMustAccept(): boolean
    /**
     * Checks if a calendar forces organizers of meetings to be also attendees.
     * @returns TRUE if the calendar forces organizers to attend meetings, FALSE otherwise.
     */
    getOrganizerMustAttend(): boolean
    /**
     * Creates a live query object from a loaded calendar.
     * @param sexp S-expression representing the query.
     * @returns A query object that will emit notification signals as calendar components are added and removed from the query in the server.
     */
    getQuery(sexp: string | null): [ /* returnType */ boolean, /* query */ CalView ]
    /**
     * Checks if the calendar has a master object for recurrences.
     * @returns TRUE if the calendar has a master object for recurrences, FALSE otherwise.
     */
    getRecurrencesNoMaster(): boolean
    /**
     * Checks whether a calendar supports explicit refreshing (see `e_cal_refresh)`.
     * @returns TRUE if the calendar supports refreshing, FALSE otherwise.
     */
    getRefreshSupported(): boolean
    /**
     * Checks whether the calendar saves schedules.
     * @returns TRUE if it saves schedules, FALSE otherwise.
     */
    getSaveSchedules(): boolean
    /**
     * Gets the type of the calendar client.
     * @returns an #ECalSourceType value corresponding to the type of the calendar client.
     */
    getSourceType(): CalSourceType
    /**
     * Queries the calendar for static capabilities.
     * @param cap Name of the static capability to check.
     * @returns TRUE if the capability is supported, FALSE otherwise.
     */
    getStaticCapability(cap: string | null): boolean
    /**
     * Queries whether the calendar client can perform modifications
     * on the calendar or not. Whether the backend is read only or not
     * is specified, on exit, in the `read_only` argument.
     * @param readOnly Return value for read only status.
     * @returns TRUE if the call was successful, FALSE if there was an error.
     */
    isReadOnly(readOnly: boolean): boolean
    /**
     * Makes a calendar client initiate a request to open a calendar.  The calendar
     * client will emit the "cal_opened" signal when the response from the server is
     * received. Since 3.0 is emitted also "cal_opened_ex" signal, which contains
     * a GError pointer from the open operation (NULL when no error occurred).
     * New signal deprecates the old "cal_opened" signal.
     * @param onlyIfExists FALSE if the calendar should be opened even if there was no storage for it, i.e. to create a new calendar or load an existing one if it already exists.  TRUE if it should only try to load calendars that already exist.
     * @returns TRUE on success, FALSE on failure to issue the open request.
     */
    open(onlyIfExists: boolean): boolean
    /**
     * Open the calendar asynchronously.  The calendar will emit the
     * "cal_opened" signal when the operation has completed.
     * Since 3.0 is emitted also "cal_opened_ex" signal, which contains
     * a GError pointer from the open operation (NULL when no error occurred).
     * New signal deprecates the old "cal_opened" signal.
     * @param onlyIfExists If TRUE, then only open the calendar if it already exists.  If FALSE, then create a new calendar if it doesn't already exist.
     */
    openAsync(onlyIfExists: boolean): void
    /**
     * Invokes refresh on a calendar. See `e_cal_get_refresh_supported`.
     * @returns TRUE if calendar supports refresh and it was invoked, FALSE otherwise.
     */
    refresh(): boolean
    /**
     * Removes a calendar.
     * @returns TRUE if the calendar was removed, FALSE if there was an error.
     */
    remove(): boolean
    /**
     * Asks a calendar to remove all components with the given UID.
     * If more control of the removal is desired, then use e_cal_remove_object_with_mod().
     * If the server is able to remove the component(s), all clients will
     * be notified and they will emit the "obj_removed" signal.
     * @param uid Unique identifier of the calendar component to remove.
     * @returns %TRUE if successful, %FALSE otherwise.
     */
    removeObject(uid: string | null): boolean

    // Own virtual methods of ECalendar-1.2.ECalendar.Cal

    backendDied(): void
    backendError(message: string | null): void
    calOpened(status: CalendarStatus): void
    calOpenedEx(error: GLib.Error): void

    // Own signals of ECalendar-1.2.ECalendar.Cal

    connect(sigName: "backend-died", callback: Cal.BackendDiedSignalCallback): number
    on(sigName: "backend-died", callback: Cal.BackendDiedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "backend-died", callback: Cal.BackendDiedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "backend-died", callback: Cal.BackendDiedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "backend-died", ...args: any[]): void
    connect(sigName: "backend-error", callback: Cal.BackendErrorSignalCallback): number
    on(sigName: "backend-error", callback: Cal.BackendErrorSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "backend-error", callback: Cal.BackendErrorSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "backend-error", callback: Cal.BackendErrorSignalCallback): NodeJS.EventEmitter
    emit(sigName: "backend-error", ...args: any[]): void
    connect(sigName: "cal-opened", callback: Cal.CalOpenedSignalCallback): number
    on(sigName: "cal-opened", callback: Cal.CalOpenedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "cal-opened", callback: Cal.CalOpenedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "cal-opened", callback: Cal.CalOpenedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "cal-opened", ...args: any[]): void
    connect(sigName: "cal-opened-ex", callback: Cal.CalOpenedExSignalCallback): number
    on(sigName: "cal-opened-ex", callback: Cal.CalOpenedExSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "cal-opened-ex", callback: Cal.CalOpenedExSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "cal-opened-ex", callback: Cal.CalOpenedExSignalCallback): NodeJS.EventEmitter
    emit(sigName: "cal-opened-ex", ...args: any[]): void
    connect(sigName: "cal-set-mode", callback: (...args: any[]) => void): number
    on(sigName: "cal-set-mode", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "cal-set-mode", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "cal-set-mode", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "cal-set-mode", p0: any, ...args: any[]): void

    // Class property signals of ECalendar-1.2.ECalendar.Cal

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
}

class Cal extends GObject.Object {

    // Own properties of ECalendar-1.2.ECalendar.Cal

    static name: string

    // Constructors of ECalendar-1.2.ECalendar.Cal

    constructor(config?: Cal.ConstructorProperties) 
    /**
     * Creates a new calendar client. This does not open the calendar itself,
     * for that, #e_cal_open or #e_cal_open_async needs to be called.
     * @constructor 
     * @param source An #ESource to be used for the client.
     * @param type Type of the client.
     * @returns A newly-created calendar client, or NULL if the client could not be constructed because it could not contact the calendar server.
     */
    constructor(source: EDataServer.Source, type: CalSourceType) 
    /**
     * Creates a new calendar client. This does not open the calendar itself,
     * for that, #e_cal_open or #e_cal_open_async needs to be called.
     * @constructor 
     * @param source An #ESource to be used for the client.
     * @param type Type of the client.
     * @returns A newly-created calendar client, or NULL if the client could not be constructed because it could not contact the calendar server.
     */
    static new(source: EDataServer.Source, type: CalSourceType): Cal
    _init(config?: Cal.ConstructorProperties): void
    /**
     * Gets an error message for the given status code.
     * @param status A status code.
     * @returns the error message.
     */
    static getErrorMessage(status: CalendarStatus): string | null
    static marshalVOIDENUMENUM(closure: GObject.TClosure, returnValue: any, nParamValues: number, paramValues: any, invocationHint: any, marshalData: any): void
    static marshalVOIDSTRINGUINT(closure: GObject.TClosure, returnValue: any, nParamValues: number, paramValues: any, invocationHint: any, marshalData: any): void
    static marshalVOIDUINTSTRING(closure: GObject.TClosure, returnValue: any, nParamValues: number, paramValues: any, invocationHint: any, marshalData: any): void
    /**
     * Matches `tzid` against the system timezone definitions
     * and returns the matching TZID, or %NULL if none found
     * @param tzid a timezone ID
     */
    static matchTzid(tzid: string | null): string | null
    /**
     * Returns system timezone location string, NULL on an error.
     * Returned pointer should be freed with g_free().
     * 
     * Note: Since 3.4 the returned timezone location is either NULL or
     * an equivalent within known libical timezones.
     */
    static systemTimezoneGetLocation(): string | null
    /**
     * Returns system timezone location string, NULL on an error.
     * Returned pointer should be freed with g_free().
     */
    static utilGetSystemTimezoneLocation(): string | null
    /**
     * Converts a translated priority string to an iCalendar priority value.
     * @param string A string representing the PRIORITY value.
     * @returns the priority (0-9) or -1 if the priority string is not valid.
     */
    static utilPriorityFromString(string: string | null): number
    /**
     * Converts an iCalendar PRIORITY value to a translated string. Any unknown
     * priority value (i.e. not 0-9) will be returned as "" (undefined).
     * @param priority Priority value.
     * @returns a string representing the PRIORITY value. This value is a constant, so it should never be freed.
     */
    static utilPriorityToString(priority: number): string | null
}

module CalClient {

    // Signal callback interfaces

    /**
     * Signal callback interface for `free-busy-data`
     */
    interface FreeBusyDataSignalCallback {
        (object: any): void
    }


    // Constructor properties interface

    interface ConstructorProperties extends EDataServer.Client.ConstructorProperties {
    }

}

interface CalClient {

    // Own properties of ECalendar-1.2.ECalendar.CalClient

    __gtype__: number

    // Own fields of ECalendar-1.2.ECalendar.CalClient

    parent: EDataServer.Client

    // Owm methods of ECalendar-1.2.ECalendar.CalClient

    /**
     * Finishes previous call of e_cal_client_add_timezone().
     * @param result a #GAsyncResult
     * @returns %TRUE if successful, %FALSE otherwise.
     */
    addTimezoneFinish(result: Gio.AsyncResult): boolean
    /**
     * Checks if a calendar supports only one alarm per component.
     * @returns TRUE if the calendar allows only one alarm, FALSE otherwise.
     */
    checkOneAlarmOnly(): boolean
    /**
     * Checks whether a calendar requires organizer to accept their attendance to
     * meetings.
     * @returns TRUE if the calendar requires organizers to accept, FALSE otherwise.
     */
    checkOrganizerMustAccept(): boolean
    /**
     * Checks if a calendar forces organizers of meetings to be also attendees.
     * @returns TRUE if the calendar forces organizers to attend meetings, FALSE otherwise.
     */
    checkOrganizerMustAttend(): boolean
    /**
     * Checks if the calendar has a master object for recurrences.
     * @returns TRUE if the calendar has a master object for recurrences, FALSE otherwise.
     */
    checkRecurrencesNoMaster(): boolean
    /**
     * Checks whether the calendar saves schedules.
     * @returns TRUE if it saves schedules, FALSE otherwise.
     */
    checkSaveSchedules(): boolean
    /**
     * Finishes previous call of e_cal_client_create_object() and
     * sets `uid` to newly assigned UID for the created object.
     * This `uid` should be freed with g_free().
     * @param result a #GAsyncResult
     * @returns %TRUE if successful, %FALSE otherwise.
     */
    createObjectFinish(result: Gio.AsyncResult): [ /* returnType */ boolean, /* uid */ string | null ]
    /**
     * Finishes previous call of e_cal_client_create_objects() and
     * sets `uids` to newly assigned UIDs for the created objects.
     * This `uids` should be freed with e_client_util_free_string_slist().
     * @param result a #GAsyncResult
     * @returns %TRUE if successful, %FALSE otherwise.
     */
    createObjectsFinish(result: Gio.AsyncResult): [ /* returnType */ boolean, /* uids */ string[] ]
    /**
     * Removes alarm `auid` from a given component identified by `uid` and `rid`.
     * The call is finished by e_cal_client_discard_alarm_finish() from
     * the `callback`.
     * @param uid Unique identifier for a calendar component
     * @param rid Recurrence identifier
     * @param auid Alarm identifier to remove
     * @param cancellable a #GCancellable; can be %NULL
     * @param callback callback to call when a result is ready
     */
    discardAlarm(uid: string | null, rid: string | null, auid: string | null, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes previous call of e_cal_client_discard_alarm().
     * @param result a #GAsyncResult
     * @returns %TRUE if successful, %FALSE otherwise.
     */
    discardAlarmFinish(result: Gio.AsyncResult): boolean
    /**
     * Removes alarm `auid` from a given component identified by `uid` and `rid`.
     * @param uid Unique identifier for a calendar component
     * @param rid Recurrence identifier
     * @param auid Alarm identifier to remove
     * @param cancellable a #GCancellable; can be %NULL
     * @returns %TRUE if successful, %FALSE otherwise.
     */
    discardAlarmSync(uid: string | null, rid: string | null, auid: string | null, cancellable?: Gio.Cancellable | null): boolean
    /**
     * Does a combination of #e_cal_client_get_object_list () and
     * #e_cal_client_recur_generate_instances(). Unlike #e_cal_client_generate_instances_sync (),
     * this returns immediately and the `cb` callback is called asynchronously.
     * 
     * The callback function should do a g_object_ref() of the calendar component
     * it gets passed if it intends to keep it around, since it will be unref'ed
     * as soon as the callback returns.
     * @param start Start time for query.
     * @param end End time for query.
     * @param cancellable a #GCancellable; can be %NULL
     * @param cb Callback for each generated instance.
     */
    generateInstances(start: number, end: number, cancellable: Gio.Cancellable | null, cb: CalRecurInstanceFn): void
    /**
     * Does a combination of e_cal_client_get_object_list() and
     * e_cal_client_recur_generate_instances().
     * 
     * The callback function should do a g_object_ref() of the calendar component
     * it gets passed if it intends to keep it around, since it will be unreffed
     * as soon as the callback returns.
     * @param start Start time for query
     * @param end End time for query
     * @param cb Callback for each generated instance
     */
    generateInstancesSync(start: number, end: number, cb: CalRecurInstanceFn): void
    /**
     * Queries a calendar for a specified component's object attachment uris.
     * The call is finished by e_cal_client_get_attachment_uris_finish() from
     * the `callback`.
     * @param uid Unique identifier for a calendar component
     * @param rid Recurrence identifier
     * @param cancellable a #GCancellable; can be %NULL
     * @param callback callback to call when a result is ready
     */
    getAttachmentUris(uid: string | null, rid: string | null, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes previous call of e_cal_client_get_attachment_uris() and
     * sets `attachment_uris` to uris for component's attachments.
     * The list should be freed with e_client_util_free_string_slist().
     * @param result a #GAsyncResult
     * @returns %TRUE if successful, %FALSE otherwise.
     */
    getAttachmentUrisFinish(result: Gio.AsyncResult): [ /* returnType */ boolean, /* attachmentUris */ string[] ]
    /**
     * Queries a calendar for a specified component's object attachment URIs.
     * The list should be freed with e_client_util_free_string_slist().
     * @param uid Unique identifier for a calendar component
     * @param rid Recurrence identifier
     * @param cancellable a #GCancellable; can be %NULL
     * @returns %TRUE if successful, %FALSE otherwise.
     */
    getAttachmentUrisSync(uid: string | null, rid: string | null, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* attachmentUris */ string[] ]
    /**
     * Retrives an #icalcomponent from the backend that contains the default
     * values for properties needed. The call is finished
     * by e_cal_client_get_default_object_finish() from the `callback`.
     * @param cancellable a #GCancellable; can be %NULL
     * @param callback callback to call when a result is ready
     */
    getDefaultObject(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Begins retrieval of free/busy information from the calendar server
     * as a list of #ECalComponent-s. Connect to "free-busy-data" signal
     * to receive chunks of free/busy components.
     * The call is finished by e_cal_client_get_free_busy_finish() from
     * the `callback`.
     * @param start Start time for query
     * @param end End time for query
     * @param users List of users to retrieve free/busy information for
     * @param cancellable a #GCancellable; can be %NULL
     * @param callback callback to call when a result is ready
     */
    getFreeBusy(start: number, end: number, users: string[], cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes previous call of e_cal_client_get_free_busy().
     * All VFREEBUSY #ECalComponent-s were received by "free-busy-data" signal.
     * @param result a #GAsyncResult
     * @returns %TRUE if successful, %FALSE otherwise.
     */
    getFreeBusyFinish(result: Gio.AsyncResult): boolean
    /**
     * Gets free/busy information from the calendar server.
     * All VFREEBUSY #ECalComponent-s were received by "free-busy-data" signal.
     * @param start Start time for query
     * @param end End time for query
     * @param users List of users to retrieve free/busy information for
     * @param cancellable a #GCancellable; can be %NULL
     * @returns %TRUE if successful, %FALSE otherwise.
     */
    getFreeBusySync(start: number, end: number, users: string[], cancellable?: Gio.Cancellable | null): boolean
    /**
     * Queries the URL where the calendar attachments are
     * serialized in the local filesystem. This enable clients
     * to operate with the reference to attachments rather than the data itself
     * unless it specifically uses the attachments for open/sending
     * operations.
     * @returns The URL where the attachments are serialized in the local filesystem.
     */
    getLocalAttachmentStore(): string | null
    /**
     * Queries a calendar for a calendar component object based on its unique
     * identifier. The call is finished by e_cal_client_get_object_finish()
     * from the `callback`.
     * 
     * Use e_cal_client_get_objects_for_uid() to get list of all
     * objects for the given uid, which includes master object and
     * all detached instances.
     * @param uid Unique identifier for a calendar component.
     * @param rid Recurrence identifier.
     * @param cancellable a #GCancellable; can be %NULL
     * @param callback callback to call when a result is ready
     */
    getObject(uid: string | null, rid: string | null, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Gets a list of objects from the calendar that match the query specified
     * by the `sexp` argument, returning matching objects as a list of #icalcomponent-s.
     * The call is finished by e_cal_client_get_object_list_finish() from
     * the `callback`.
     * @param sexp an S-expression representing the query
     * @param cancellable a #GCancellable; can be %NULL
     * @param callback callback to call when a result is ready
     */
    getObjectList(sexp: string | null, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Gets a list of objects from the calendar that match the query specified
     * by the `sexp` argument, returning matching objects as a list of #ECalComponent-s.
     * The call is finished by e_cal_client_get_object_list_as_comps_finish() from
     * the `callback`.
     * @param sexp an S-expression representing the query
     * @param cancellable a #GCancellable; can be %NULL
     * @param callback callback to call when a result is ready
     */
    getObjectListAsComps(sexp: string | null, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes previous call of e_cal_client_get_object_list_as_comps() and
     * sets `ecalcomps` to a matching list of #ECalComponent-s.
     * This list should be freed with #e_cal_client_free_ecalcomp_slist().
     * @param result a #GAsyncResult
     * @returns %TRUE if successful, %FALSE otherwise.
     */
    getObjectListAsCompsFinish(result: Gio.AsyncResult): [ /* returnType */ boolean, /* ecalcomps */ CalComponent[] ]
    /**
     * Gets a list of objects from the calendar that match the query specified
     * by the `sexp` argument. The objects will be returned in the `ecalcomps`
     * argument, which is a list of #ECalComponent.
     * This list should be freed with #e_cal_client_free_ecalcomp_slist().
     * @param sexp an S-expression representing the query
     * @param cancellable a #GCancellable; can be %NULL
     * @returns %TRUE if successful, %FALSE otherwise.
     */
    getObjectListAsCompsSync(sexp: string | null, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* ecalcomps */ CalComponent[] ]
    /**
     * Queries a calendar for all calendar components with the given unique
     * ID. This will return any recurring event and all its detached recurrences.
     * For non-recurring events, it will just return the object with that ID.
     * The call is finished by e_cal_client_get_objects_for_uid_finish() from
     * the `callback`.
     * @param uid Unique identifier for a calendar component
     * @param cancellable a #GCancellable; can be %NULL
     * @param callback callback to call when a result is ready
     */
    getObjectsForUid(uid: string | null, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes previous call of e_cal_client_get_objects_for_uid() and
     * sets `ecalcomps` to a list of #ECalComponent<!-- -->s corresponding to
     * found components for a given uid of the same type as this client.
     * This list should be freed with e_cal_client_free_ecalcomp_slist().
     * @param result a #GAsyncResult
     * @returns %TRUE if successful, %FALSE otherwise.
     */
    getObjectsForUidFinish(result: Gio.AsyncResult): [ /* returnType */ boolean, /* ecalcomps */ CalComponent[] ]
    /**
     * Queries a calendar for all calendar components with the given unique
     * ID. This will return any recurring event and all its detached recurrences.
     * For non-recurring events, it will just return the object with that ID.
     * This list should be freed with e_cal_client_free_ecalcomp_slist().
     * @param uid Unique identifier for a calendar component
     * @param cancellable a #GCancellable; can be %NULL
     * @returns %TRUE if successful, %FALSE otherwise.
     */
    getObjectsForUidSync(uid: string | null, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* ecalcomps */ CalComponent[] ]
    /**
     * Gets the source type of the calendar client.
     * @returns an #ECalClientSourceType value corresponding to the source type of the calendar client.
     */
    getSourceType(): CalClientSourceType
    /**
     * Retrieves a timezone object from the calendar backend.
     * The call is finished by e_cal_client_get_timezone_finish() from
     * the `callback`.
     * @param tzid ID of the timezone to retrieve
     * @param cancellable a #GCancellable; can be %NULL
     * @param callback callback to call when a result is ready
     */
    getTimezone(tzid: string | null, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Query `client` with `sexp,` creating an #ECalClientView.
     * The call is finished by e_cal_client_get_view_finish()
     * from the `callback`.
     * @param sexp an S-expression representing the query.
     * @param cancellable a #GCancellable; can be %NULL
     * @param callback callback to call when a result is ready
     */
    getView(sexp: string | null, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes previous call of e_cal_client_get_view().
     * If successful, then the `view` is set to newly allocated #ECalClientView,
     * which should be freed with g_object_unref().
     * @param result a #GAsyncResult
     * @returns %TRUE if successful, %FALSE otherwise.
     */
    getViewFinish(result: Gio.AsyncResult): [ /* returnType */ boolean, /* view */ CalClientView ]
    /**
     * Query `client` with `sexp,` creating an #ECalClientView.
     * If successful, then the `view` is set to newly allocated #ECalClientView,
     * which should be freed with g_object_unref().
     * @param sexp an S-expression representing the query.
     * @param cancellable a #GCancellable; can be %NULL
     * @returns %TRUE if successful, %FALSE otherwise.
     */
    getViewSync(sexp: string | null, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* view */ CalClientView ]
    /**
     * Finishes previous call of e_cal_client_modify_object().
     * @param result a #GAsyncResult
     * @returns %TRUE if successful, %FALSE otherwise.
     */
    modifyObjectFinish(result: Gio.AsyncResult): boolean
    /**
     * Finishes previous call of e_cal_client_modify_objects().
     * @param result a #GAsyncResult
     * @returns %TRUE if successful, %FALSE otherwise.
     */
    modifyObjectsFinish(result: Gio.AsyncResult): boolean
    /**
     * Finishes previous call of e_cal_client_receive_objects().
     * @param result a #GAsyncResult
     * @returns %TRUE if successful, %FALSE otherwise.
     */
    receiveObjectsFinish(result: Gio.AsyncResult): boolean
    /**
     * Finishes previous call of e_cal_client_remove_object().
     * @param result a #GAsyncResult
     * @returns %TRUE if successful, %FALSE otherwise.
     */
    removeObjectFinish(result: Gio.AsyncResult): boolean
    /**
     * Finishes previous call of e_cal_client_remove_objects().
     * @param result a #GAsyncResult
     * @returns %TRUE if successful, %FALSE otherwise.
     */
    removeObjectsFinish(result: Gio.AsyncResult): boolean

    // Own signals of ECalendar-1.2.ECalendar.CalClient

    connect(sigName: "free-busy-data", callback: CalClient.FreeBusyDataSignalCallback): number
    on(sigName: "free-busy-data", callback: CalClient.FreeBusyDataSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "free-busy-data", callback: CalClient.FreeBusyDataSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "free-busy-data", callback: CalClient.FreeBusyDataSignalCallback): NodeJS.EventEmitter
    emit(sigName: "free-busy-data", ...args: any[]): void

    // Class property signals of ECalendar-1.2.ECalendar.CalClient

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: "notify::capabilities", callback: (...args: any[]) => void): number
    on(sigName: "notify::capabilities", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::capabilities", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::capabilities", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::capabilities", ...args: any[]): void
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
    connect(sigName: "notify::opened", callback: (...args: any[]) => void): number
    on(sigName: "notify::opened", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::opened", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::opened", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::opened", ...args: any[]): void
    connect(sigName: "notify::readonly", callback: (...args: any[]) => void): number
    on(sigName: "notify::readonly", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::readonly", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::readonly", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::readonly", ...args: any[]): void
    connect(sigName: "notify::source", callback: (...args: any[]) => void): number
    on(sigName: "notify::source", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::source", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::source", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::source", ...args: any[]): void
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
class CalClient extends EDataServer.Client {

    // Own properties of ECalendar-1.2.ECalendar.CalClient

    static name: string

    // Constructors of ECalendar-1.2.ECalendar.CalClient

    constructor(config?: CalClient.ConstructorProperties) 
    /**
     * Creates a new #ECalClient corresponding to the given source.  There are
     * only two operations that are valid on this calendar at this point:
     * e_client_open(), and e_client_remove().
     * @constructor 
     * @param source An #ESource pointer
     * @param sourceType source type of the calendar
     * @returns a new but unopened #ECalClient.
     */
    constructor(source: EDataServer.Source, sourceType: CalClientSourceType) 
    /**
     * Creates a new #ECalClient corresponding to the given source.  There are
     * only two operations that are valid on this calendar at this point:
     * e_client_open(), and e_client_remove().
     * @constructor 
     * @param source An #ESource pointer
     * @param sourceType source type of the calendar
     * @returns a new but unopened #ECalClient.
     */
    static new(source: EDataServer.Source, sourceType: CalClientSourceType): CalClient
    _init(config?: CalClient.ConstructorProperties): void
    static errorCreate(code: CalClientError, customMsg: string | null): GLib.Error

    // Overloads of errorCreate

    static errorCreate(code: EDataServer.ClientError, customMsg: string | null): GLib.Error
    static errorQuark(): GLib.Quark
    /**
     * FIXME: Document me.
     * @param code 
     */
    static errorToString(code: CalClientError): string | null

    // Overloads of errorToString

    /**
     * Get localized human readable description of the given error code.
     * @param code an #EClientError error code
     * @returns Localized human readable description of the given error code
     */
    static errorToString(code: EDataServer.ClientError): string | null
    /**
     * Frees each element of the `ecalcomps` list and the list itself.
     * Each element is an object of type #ECalComponent.
     * @param ecalcomps list of #ECalComponent objects
     */
    static freeEcalcompSlist(ecalcomps: CalComponent[]): void
}

module CalClientView {

    // Signal callback interfaces

    /**
     * Signal callback interface for `complete`
     */
    interface CompleteSignalCallback {
        (object: GLib.Error): void
    }

    /**
     * Signal callback interface for `objects-added`
     */
    interface ObjectsAddedSignalCallback {
        (objects: number[]): void
    }

    /**
     * Signal callback interface for `objects-modified`
     */
    interface ObjectsModifiedSignalCallback {
        (objects: number[]): void
    }

    /**
     * Signal callback interface for `objects-removed`
     */
    interface ObjectsRemovedSignalCallback {
        (objects: CalComponentId[]): void
    }

    /**
     * Signal callback interface for `progress`
     */
    interface ProgressSignalCallback {
        (object: number, p0: string): void
    }


    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of ECalendar-1.2.ECalendar.CalClientView

        client?: CalClient | null
        view?: any | null
    }

}

interface CalClientView {

    // Own properties of ECalendar-1.2.ECalendar.CalClientView

    readonly client: CalClient
    readonly view: any
    __gtype__: number

    // Own fields of ECalendar-1.2.ECalendar.CalClientView

    object: GObject.Object

    // Owm methods of ECalendar-1.2.ECalendar.CalClientView

    /**
     * Get the #ECalClient associated with this view.
     * @returns the associated client.
     */
    getClient(): any
    /**
     * Retunrs: Whether view is running. Not running views are ignoring
     * all events sent from the server.
     */
    isRunning(): boolean
    /**
     * Client can instruct server to which fields it is interested in only, thus
     * the server can return less data over the wire. The server can still return
     * complete objects, this is just a hint to it that the listed fields will
     * be used only. The UID/RID fields are returned always. Initial views has no fields
     * of interest and using %NULL for `fields_of_interest` will unset any previous
     * changes.
     * 
     * Some backends can use summary information of its cache to create artifical
     * objects, which will omit stored object parsing. If this cannot be done then
     * it will simply return object as is stored in the cache.
     * @param fieldsOfInterest List of field names in which the client is interested, or %NULL to reset the fields of interest
     */
    setFieldsOfInterest(fieldsOfInterest?: string[] | null): void
    /**
     * Sets the `flags` which control the behaviour of `view`.
     * @param flags the #ECalClientViewFlags for `view`.
     */
    setFlags(flags: CalClientViewFlags): void
    /**
     * Starts a live query to the calendar/tasks backend.
     */
    start(): void
    /**
     * Stops a live query to the calendar/tasks backend.
     */
    stop(): void

    // Own virtual methods of ECalendar-1.2.ECalendar.CalClientView

    complete(error: GLib.Error): void
    progress(percent: number, message: string | null): void

    // Own signals of ECalendar-1.2.ECalendar.CalClientView

    connect(sigName: "complete", callback: CalClientView.CompleteSignalCallback): number
    on(sigName: "complete", callback: CalClientView.CompleteSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "complete", callback: CalClientView.CompleteSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "complete", callback: CalClientView.CompleteSignalCallback): NodeJS.EventEmitter
    emit(sigName: "complete", ...args: any[]): void
    connect(sigName: "objects-added", callback: CalClientView.ObjectsAddedSignalCallback): number
    on(sigName: "objects-added", callback: CalClientView.ObjectsAddedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "objects-added", callback: CalClientView.ObjectsAddedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "objects-added", callback: CalClientView.ObjectsAddedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "objects-added", ...args: any[]): void
    connect(sigName: "objects-modified", callback: CalClientView.ObjectsModifiedSignalCallback): number
    on(sigName: "objects-modified", callback: CalClientView.ObjectsModifiedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "objects-modified", callback: CalClientView.ObjectsModifiedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "objects-modified", callback: CalClientView.ObjectsModifiedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "objects-modified", ...args: any[]): void
    connect(sigName: "objects-removed", callback: CalClientView.ObjectsRemovedSignalCallback): number
    on(sigName: "objects-removed", callback: CalClientView.ObjectsRemovedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "objects-removed", callback: CalClientView.ObjectsRemovedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "objects-removed", callback: CalClientView.ObjectsRemovedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "objects-removed", ...args: any[]): void
    connect(sigName: "progress", callback: CalClientView.ProgressSignalCallback): number
    on(sigName: "progress", callback: CalClientView.ProgressSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "progress", callback: CalClientView.ProgressSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "progress", callback: CalClientView.ProgressSignalCallback): NodeJS.EventEmitter
    emit(sigName: "progress", p0: string, ...args: any[]): void

    // Class property signals of ECalendar-1.2.ECalendar.CalClientView

    connect(sigName: "notify::client", callback: (...args: any[]) => void): number
    on(sigName: "notify::client", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::client", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::client", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::client", ...args: any[]): void
    connect(sigName: "notify::view", callback: (...args: any[]) => void): number
    on(sigName: "notify::view", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::view", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::view", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::view", ...args: any[]): void
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
}

/**
 * Contains only private data that should be read and manipulated using the
 * functions below.
 * @class 
 */
class CalClientView extends GObject.Object {

    // Own properties of ECalendar-1.2.ECalendar.CalClientView

    static name: string

    // Constructors of ECalendar-1.2.ECalendar.CalClientView

    constructor(config?: CalClientView.ConstructorProperties) 
    _init(config?: CalClientView.ConstructorProperties): void
}

module CalComponent {

    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

interface CalComponent {

    // Own properties of ECalendar-1.2.ECalendar.CalComponent

    __gtype__: number

    // Own fields of ECalendar-1.2.ECalendar.CalComponent

    object: GObject.Object

    // Owm methods of ECalendar-1.2.ECalendar.CalComponent

    /**
     * Aborts the sequence change needed in the given calendar component, which
     * means it will not require a sequence commit (via #e_cal_component_commit_sequence)
     * even if the changes done require a sequence increment.
     */
    abortSequence(): void
    /**
     * Adds an alarm subcomponent to a calendar component.  You should have created
     * the `alarm` by using e_cal_component_alarm_new(); it is invalid to use a
     * #ECalComponentAlarm structure that came from e_cal_component_get_alarm().  After
     * adding the alarm, the `alarm` structure is no longer valid because the
     * internal structures may change and you should get rid of it by using
     * e_cal_component_alarm_free().
     * @param alarm An alarm.
     */
    addAlarm(alarm: CalComponentAlarm): void
    /**
     * Creates a new calendar component object by copying the information from
     * another one.
     * @returns A newly-created calendar component with the same values as the original one.
     */
    clone(): CalComponent
    /**
     * Increments the sequence number property in a calendar component object if it
     * needs it.  This needs to be done when any of a number of properties listed in
     * RFC 2445 change values, such as the start and end dates of a component.
     * 
     * This function must be called before calling e_cal_component_get_as_string() to
     * ensure that the component is fully consistent.
     */
    commitSequence(): void
    /**
     * Checks if the DTSTART and DTEND properties of the 2 components match.
     * Note that the events may have different recurrence properties which are not
     * taken into account here.
     * @param comp2 A calendar component object.
     * @returns TRUE if the DTSTART and DTEND properties of the 2 components match.
     */
    eventDatesMatch(comp2: CalComponent): boolean
    /**
     * Builds a list of the unique identifiers of the alarm subcomponents inside a
     * calendar component.
     * @returns List of unique identifiers for alarms.  This should be freed using cal_obj_uid_list_free().
     */
    getAlarmUids(): string[]
    /**
     * Gets the iCalendar string representation of a calendar component.  You should
     * call e_cal_component_commit_sequence() before this function to ensure that the
     * component's sequence number is consistent with the state of the object.
     * @returns String representation of the calendar component according to RFC 2445.
     */
    getAsString(): string | null
    /**
     * Queries the attachment properties of the calendar component object. When done,
     * the `attachment_list` should be freed by calling g_slist_free().
     */
    getAttachmentList(): /* attachmentList */ string[]
    /**
     * Queries the attendee properties of the calendar component object
     */
    getAttendeeList(): /* attendeeList */ CalComponentAttendee[]
    /**
     * Queries the categories of the given calendar component. The categories
     * are returned in the `categories` argument, which, on success, will contain
     * a comma-separated list of all categories set in the component.
     * @param categories Return holder for the categories.
     */
    getCategories(categories: string | null): void
    /**
     * Queries the list of categories of a calendar component object.  Each element
     * in the returned categ_list is a string with the corresponding category.
     */
    getCategoriesList(): /* categList */ string[]
    /**
     * Queries the classification of a calendar component object.  If the
     * classification property is not set on this component, this function returns
     * #E_CAL_COMPONENT_CLASS_NONE.
     * @param classif Return value for the classification.
     */
    getClassification(classif: CalComponentClassification): void
    /**
     * Queries the comments of a calendar component object.  The comment property can
     * appear several times inside a calendar component, and so a list of
     * #ECalComponentText is returned.
     */
    getCommentList(): /* textList */ CalComponentText[]
    /**
     * Queries the date at which a calendar compoment object was completed.
     * @param t Return value for the completion date.  This should be freed using the e_cal_component_free_icaltimetype() function.
     */
    getCompleted(t: any): void
    /**
     * Queries the contact of a calendar component object.  The contact property can
     * appear several times inside a calendar component, and so a list of
     * #ECalComponentText is returned.
     */
    getContactList(): /* textList */ CalComponentText[]
    /**
     * Queries the date in which a calendar component object was created in the
     * calendar store.
     * @param t Return value for the creation date.  This should be freed using the e_cal_component_free_icaltimetype() function.
     */
    getCreated(t: any): void
    /**
     * Queries the description of a calendar component object.  Journal components
     * may have more than one description, and as such this function returns a list
     * of #ECalComponentText structures.  All other types of components can have at
     * most one description.
     */
    getDescriptionList(): /* textList */ CalComponentText[]
    /**
     * Queries the date/time end of a calendar component object.
     * @param dt Return value for the date/time end.  This should be freed with the e_cal_component_free_datetime() function.
     */
    getDtend(dt: CalComponentDateTime): void
    /**
     * Queries the date/timestamp property of a calendar component object, which is
     * the last time at which the object was modified by a calendar user agent.
     * @param t A value for the date/timestamp.
     */
    getDtstamp(t: any): void
    /**
     * Queries the date/time start of a calendar component object.
     * @param dt Return value for the date/time start.  This should be freed with the e_cal_component_free_datetime() function.
     */
    getDtstart(dt: CalComponentDateTime): void
    /**
     * Queries the due date/time of a calendar component object.
     * @param dt Return value for the due date/time.  This should be freed with the e_cal_component_free_datetime() function.
     */
    getDue(dt: CalComponentDateTime): void
    /**
     * Queries the list of exception date properties in a calendar component object.
     */
    getExdateList(): /* exdateList */ CalComponentDateTime[]
    /**
     * Gets the geographic position property of a calendar component object.
     * @param geo Return value for the geographic position property.  This should be freed using the e_cal_component_free_geo() function.
     */
    getGeo(geo: any): void
    /**
     * Queries the time at which a calendar component object was last modified in
     * the calendar store.
     * @param t Return value for the last modified time value.
     */
    getLastModified(t: any): void
    /**
     * Queries the location property of a calendar component object.
     * @param location Return value for the location.
     */
    getLocation(location: string | null): void
    /**
     * Get the number of attachments to this calendar component object.
     * @returns the number of attachments.
     */
    getNumAttachments(): number
    /**
     * Queries the organizer property of a calendar component object
     * @param organizer A value for the organizer
     */
    getOrganizer(organizer: CalComponentOrganizer): void
    /**
     * Queries the percent-complete property of a calendar component object.
     * @param percent Return value for the percent-complete property.  This should be freed using the e_cal_component_free_percent() function.
     */
    getPercent(percent: number): void
    getPercentAsInt(): number
    /**
     * Queries the priority property of a calendar component object.
     * @param priority Return value for the priority property.  This should be freed using the e_cal_component_free_priority() function.
     */
    getPriority(priority: number): void
    /**
     * Queries the list of recurrence date properties in a calendar component
     * object.
     */
    getRdateList(): /* periodList */ CalComponentPeriod[]
    /**
     * Queries the recurrence id property of a calendar component object.
     * @param recurId Return value for the recurrence id property
     */
    getRecurid(recurId: CalComponentRange): void
    /**
     * Gets the recurrence ID property as a string.
     * @returns the recurrence ID as a string.
     */
    getRecuridAsString(): string | null
    /**
     * Queries the sequence number of a calendar component object.
     * @param sequence Return value for the sequence number.  This should be freed using e_cal_component_free_sequence().
     */
    getSequence(sequence: number): void
    /**
     * Queries the summary of a calendar component object.
     * @param summary Return value for the summary property and its parameters.
     */
    getSummary(summary: CalComponentText): void
    /**
     * Queries the time transparency of a calendar component object.
     * @param transp Return value for the time transparency.
     */
    getTransparency(transp: CalComponentTransparency): void
    /**
     * Queries the unique identifier of a calendar component object.
     * @param uid Return value for the UID string.
     */
    getUid(uid: string | null): void
    /**
     * Queries the uniform resource locator property of a calendar component object.
     * @param url Return value for the URL.
     */
    getUrl(url: string | null): void
    /**
     * Queries the type of a calendar component object.
     * @returns The type of the component, as defined by RFC 2445.
     */
    getVtype(): CalComponentVType
    /**
     * Checks whether the component has any alarms.
     * @returns TRUE if the component has any alarms.
     */
    hasAlarms(): boolean
    /**
     * Queries the component to see if it has attachments.
     * @returns TRUE if there are attachments, FALSE otherwise.
     */
    hasAttachments(): boolean
    /**
     * Queries a calendar component object for the existence of attendees.
     * @returns TRUE if there are attendees, FALSE if not.
     */
    hasAttendees(): boolean
    /**
     * Queries whether a calendar component object has any exception dates
     * or exception rules.
     * @returns TRUE if the component has exceptions, FALSE otherwise.
     */
    hasExceptions(): boolean
    /**
     * Queries whether a calendar component object has any exception dates defined
     * for it.
     * @returns TRUE if the component has exception dates, FALSE otherwise.
     */
    hasExdates(): boolean
    /**
     * Queries whether a calendar component object has any exception rules defined
     * for it.
     * @returns TRUE if the component has exception rules, FALSE otherwise.
     */
    hasExrules(): boolean
    /**
     * Check whether a calendar component object has an organizer or not.
     * @returns TRUE if there is an organizer, FALSE otherwise.
     */
    hasOrganizer(): boolean
    /**
     * Queries whether a calendar component object has any recurrence dates defined
     * for it.
     * @returns TRUE if the component has recurrence dates, FALSE otherwise.
     */
    hasRdates(): boolean
    /**
     * Queries whether a calendar component object has any recurrence dates or
     * recurrence rules.
     * @returns TRUE if the component has recurrences, FALSE otherwise.
     */
    hasRecurrences(): boolean
    /**
     * Queries whether a calendar component object has any recurrence rules defined
     * for it.
     * @returns TRUE if the component has recurrence rules, FALSE otherwise.
     */
    hasRrules(): boolean
    /**
     * Checks whether the given calendar component object has simple recurrence
     * rules or more complicated ones.
     * @returns TRUE if it has a simple recurrence rule, FALSE otherwise.
     */
    hasSimpleRecurrence(): boolean
    /**
     * Checks whether a calendar component object is an instance of a recurring
     * event.
     * @returns TRUE if it is an instance, FALSE if not.
     */
    isInstance(): boolean
    /**
     * Removes an alarm subcomponent from a calendar component.  If the alarm that
     * corresponds to the specified `auid` had been fetched with
     * e_cal_component_get_alarm(), then those alarm structures will be invalid; you
     * should get rid of them with e_cal_component_alarm_free() before using this
     * function.
     * @param auid UID of the alarm to remove.
     */
    removeAlarm(auid: string | null): void
    /**
     * Remove all alarms from the calendar component
     */
    removeAllAlarms(): void
    /**
     * Rescans the #icalcomponent being wrapped by the given calendar component. This
     * would replace any value that was changed in the wrapped #icalcomponent.
     */
    rescan(): void
    /**
     * This currently handles only attachments that are URIs
     * in the file system - not inline binaries.
     * 
     * Sets the attachments of a calendar component object
     * @param attachmentList list of URIs to attachment pointers
     */
    setAttachmentList(attachmentList: string[]): void
    /**
     * Sets the attendees of a calendar component object
     * @param attendeeList Values for attendee properties
     */
    setAttendeeList(attendeeList: CalComponentAttendee[]): void
    /**
     * Sets the list of categories for a calendar component.
     * @param categories Comma-separated list of categories.
     */
    setCategories(categories: string | null): void
    /**
     * Sets the list of categories of a calendar component object.
     * @param categList List of strings, one for each category.
     */
    setCategoriesList(categList: string[]): void
    /**
     * Sets the classification property of a calendar component object.  To unset
     * the property, specify E_CAL_COMPONENT_CLASS_NONE for `classif`.
     * @param classif Classification to use.
     */
    setClassification(classif: CalComponentClassification): void
    /**
     * Sets the comments of a calendar component object.  The comment property can
     * appear several times inside a calendar component, and so a list of
     * #ECalComponentText structures is used.
     * @param textList List of #ECalComponentText structures.
     */
    setCommentList(textList: CalComponentText[]): void
    /**
     * Sets the date at which a calendar component object was completed.
     * @param t Value for the completion date.
     */
    setCompleted(t: any): void
    /**
     * Sets the contact of a calendar component object.  The contact property can
     * appear several times inside a calendar component, and so a list of
     * #ECalComponentText structures is used.
     * @param textList List of #ECalComponentText structures.
     */
    setContactList(textList: CalComponentText[]): void
    /**
     * Sets the date in which a calendar component object is created in the calendar
     * store.  This should only be used inside a calendar store application, i.e.
     * not by calendar user agents.
     * @param t Value for the creation date.
     */
    setCreated(t: any): void
    /**
     * Sets the date/time end property of a calendar component object.
     * @param dt End date/time.
     */
    setDtend(dt: CalComponentDateTime): void
    /**
     * Sets the date/timestamp of a calendar component object.  This should be
     * called whenever a calendar user agent makes a change to a component's
     * properties.
     * @param t Date/timestamp value.
     */
    setDtstamp(t: any): void
    /**
     * Sets the date/time start property of a calendar component object.
     * @param dt Start date/time.
     */
    setDtstart(dt: CalComponentDateTime): void
    /**
     * Sets the due date/time property of a calendar component object.
     * @param dt End date/time.
     */
    setDue(dt: CalComponentDateTime): void
    /**
     * Sets the list of exception dates in a calendar component object.
     * @param exdateList List of #ECalComponentDateTime structures.
     */
    setExdateList(exdateList: CalComponentDateTime[]): void
    /**
     * Sets the geographic position property on a calendar component object.
     * @param geo Value for the geographic position property.
     */
    setGeo(geo: any): void
    /**
     * Sets the contents of a calendar component object from an #icalcomponent
     * structure.  If the `comp` already had an #icalcomponent set into it, it will
     * will be freed automatically if the #icalcomponent does not have a parent
     * component itself.
     * 
     * Supported component types are VEVENT, VTODO, VJOURNAL, VFREEBUSY, and VTIMEZONE.
     * @param icalcomp An #icalcomponent.
     * @returns TRUE on success, FALSE if @icalcomp is an unsupported component type.
     */
    setIcalcomponent(icalcomp: number): boolean
    /**
     * Sets the time at which a calendar component object was last stored in the
     * calendar store.  This should not be called by plain calendar user agents.
     * @param t Value for the last time modified.
     */
    setLastModified(t: any): void
    /**
     * Sets the location property of a calendar component object.
     * @param location Location value.
     */
    setLocation(location: string | null): void
    /**
     * Clears any existing component data from a calendar component object and
     * creates a new #icalcomponent of the specified type for it.  The only property
     * that will be set in the new component will be its unique identifier.
     * @param type Type of calendar component to create.
     */
    setNewVtype(type: CalComponentVType): void
    /**
     * Sets the organizer of a calendar component object
     * @param organizer Value for the organizer property
     */
    setOrganizer(organizer: CalComponentOrganizer): void
    /**
     * Sets the percent-complete property of a calendar component object.
     * @param percent Value for the percent-complete property.
     */
    setPercent(percent: number): void
    setPercentAsInt(percent: number): void
    /**
     * Sets the priority property of a calendar component object.
     * @param priority Value for the priority property.
     */
    setPriority(priority: number): void
    /**
     * Sets the list of recurrence dates in a calendar component object.
     * @param periodList List of #ECalComponentPeriod structures
     */
    setRdateList(periodList: CalComponentPeriod[]): void
    /**
     * Sets the recurrence id property of a calendar component object.
     * @param recurId Value for the recurrence id property.
     */
    setRecurid(recurId: CalComponentRange): void
    /**
     * Sets the sequence number of a calendar component object.  Normally this
     * function should not be called, since the sequence number is incremented
     * automatically at the proper times.
     * @param sequence Sequence number value.
     */
    setSequence(sequence: number): void
    /**
     * Sets the summary of a calendar component object.
     * @param summary Summary property and its parameters.
     */
    setSummary(summary: CalComponentText): void
    /**
     * Sets the time transparency of a calendar component object.
     * @param transp Time transparency value.
     */
    setTransparency(transp: CalComponentTransparency): void
    /**
     * Sets the unique identifier string of a calendar component object.
     * @param uid Unique identifier.
     */
    setUid(uid: string | null): void
    /**
     * Sets the uniform resource locator property of a calendar component object.
     * @param url URL value.
     */
    setUrl(url: string | null): void
    /**
     * Strips all error messages from the calendar component. Those error messages are
     * added to the iCalendar string representation whenever an invalid is used for
     * one of its fields.
     */
    stripErrors(): void

    // Class property signals of ECalendar-1.2.ECalendar.CalComponent

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
}

class CalComponent extends GObject.Object {

    // Own properties of ECalendar-1.2.ECalendar.CalComponent

    static name: string

    // Constructors of ECalendar-1.2.ECalendar.CalComponent

    constructor(config?: CalComponent.ConstructorProperties) 
    /**
     * Creates a new empty calendar component object.  Once created, you should set it from an
     * existing #icalcomponent structure by using e_cal_component_set_icalcomponent() or with a
     * new empty component type by using e_cal_component_set_new_vtype().
     * @constructor 
     * @returns A newly-created calendar component object.
     */
    constructor() 
    /**
     * Creates a new empty calendar component object.  Once created, you should set it from an
     * existing #icalcomponent structure by using e_cal_component_set_icalcomponent() or with a
     * new empty component type by using e_cal_component_set_new_vtype().
     * @constructor 
     * @returns A newly-created calendar component object.
     */
    static new(): CalComponent
    /**
     * Creates a new calendar component object from the given iCalendar string.
     * @constructor 
     * @param calobj A string representation of an iCalendar component.
     * @returns A calendar component representing the given iCalendar string on success, NULL if there was an error.
     */
    static newFromString(calobj: string | null): CalComponent
    _init(config?: CalComponent.ConstructorProperties): void
    /**
     * Frees a list of #ECalComponentAttendee structures.
     * @param attendeeList List of attendees
     */
    static freeAttendeeList(attendeeList: CalComponentAttendee[]): void
    /**
     * Frees a list of category strings.
     * @param categList List of category strings
     */
    static freeCategoriesList(categList: string[]): void
    /**
     * Frees a date/time structure.
     * @param dt A date/time structure.
     */
    static freeDatetime(dt: CalComponentDateTime): void
    /**
     * Frees a list of #ECalComponentDateTime structures as returned by the
     * e_cal_component_get_exdate_list() function.
     * @param exdateList List of #ECalComponentDateTime structures
     */
    static freeExdateList(exdateList: CalComponentDateTime[]): void
    /**
     * Frees a struct #icalgeotype structure as returned by the calendar component
     * functions.
     * @param geo An #icalgeotype structure.
     */
    static freeGeo(geo: any): void
    /**
     * Frees a struct #icaltimetype value as returned by the calendar component
     * functions.
     * @param t An #icaltimetype structure.
     */
    static freeIcaltimetype(t: any): void
    /**
     * Frees the id.
     * @param id Component ID
     */
    static freeId(id: CalComponentId): void
    /**
     * Frees a percent value as returned by the e_cal_component_get_percent()
     * function.
     * @param percent Percent value.
     */
    static freePercent(percent: number): void
    /**
     * Frees a list of #ECalComponentPeriod structures.
     * @param periodList List of #ECalComponentPeriod structures
     */
    static freePeriodList(periodList: CalComponentPeriod[]): void
    /**
     * Frees a priority value as returned by the e_cal_component_get_priority()
     * function.
     * @param priority Priority value.
     */
    static freePriority(priority: number): void
    /**
     * Frees an #ECalComponentRange structure.
     * @param range A #ECalComponentRange.
     */
    static freeRange(range: CalComponentRange): void
    /**
     * Frees a sequence number value.
     * @param sequence Sequence number value.
     */
    static freeSequence(sequence: number): void
    /**
     * Frees a list of #ECalComponentText structures.  This function should only be
     * used to free lists of text values as returned by the other getter functions
     * of #ECalComponent.
     * @param textList List of #ECalComponentText structures.
     */
    static freeTextList(textList: CalComponentText[]): void
    /**
     * Generates a unique identifier suitable for calendar components.
     * @returns A unique identifier string.  Every time this function is called a different string is returned.
     */
    static genUid(): string | null
}

module CalView {

    // Signal callback interfaces

    /**
     * Signal callback interface for `objects-added`
     */
    interface ObjectsAddedSignalCallback {
        (objects: number[]): void
    }

    /**
     * Signal callback interface for `objects-modified`
     */
    interface ObjectsModifiedSignalCallback {
        (objects: number[]): void
    }

    /**
     * Signal callback interface for `objects-removed`
     */
    interface ObjectsRemovedSignalCallback {
        (objects: CalComponentId[]): void
    }

    /**
     * Signal callback interface for `view-complete`
     */
    interface ViewCompleteSignalCallback {
        (object: number, p0: string): void
    }

    /**
     * Signal callback interface for `view-done`
     */
    interface ViewDoneSignalCallback {
        (object: number): void
    }

    /**
     * Signal callback interface for `view-progress`
     */
    interface ViewProgressSignalCallback {
        (object: string, p0: number): void
    }


    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of ECalendar-1.2.ECalendar.CalView

        client?: Cal | null
        view?: any | null
    }

}

interface CalView {

    // Own properties of ECalendar-1.2.ECalendar.CalView

    readonly client: Cal
    readonly view: any
    __gtype__: number

    // Own fields of ECalendar-1.2.ECalendar.CalView

    object: GObject.Object

    // Owm methods of ECalendar-1.2.ECalendar.CalView

    /**
     * Starts a live query to the calendar/tasks backend.
     */
    start(): void
    /**
     * Stops a live query to the calendar/tasks backend.
     */
    stop(): void

    // Own virtual methods of ECalendar-1.2.ECalendar.CalView

    viewComplete(status: CalendarStatus, errorMsg: string | null): void
    viewDone(status: CalendarStatus): void
    viewProgress(message: string | null, percent: number): void

    // Own signals of ECalendar-1.2.ECalendar.CalView

    connect(sigName: "objects-added", callback: CalView.ObjectsAddedSignalCallback): number
    on(sigName: "objects-added", callback: CalView.ObjectsAddedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "objects-added", callback: CalView.ObjectsAddedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "objects-added", callback: CalView.ObjectsAddedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "objects-added", ...args: any[]): void
    connect(sigName: "objects-modified", callback: CalView.ObjectsModifiedSignalCallback): number
    on(sigName: "objects-modified", callback: CalView.ObjectsModifiedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "objects-modified", callback: CalView.ObjectsModifiedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "objects-modified", callback: CalView.ObjectsModifiedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "objects-modified", ...args: any[]): void
    connect(sigName: "objects-removed", callback: CalView.ObjectsRemovedSignalCallback): number
    on(sigName: "objects-removed", callback: CalView.ObjectsRemovedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "objects-removed", callback: CalView.ObjectsRemovedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "objects-removed", callback: CalView.ObjectsRemovedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "objects-removed", ...args: any[]): void
    connect(sigName: "view-complete", callback: CalView.ViewCompleteSignalCallback): number
    on(sigName: "view-complete", callback: CalView.ViewCompleteSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "view-complete", callback: CalView.ViewCompleteSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "view-complete", callback: CalView.ViewCompleteSignalCallback): NodeJS.EventEmitter
    emit(sigName: "view-complete", p0: string, ...args: any[]): void
    connect(sigName: "view-done", callback: CalView.ViewDoneSignalCallback): number
    on(sigName: "view-done", callback: CalView.ViewDoneSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "view-done", callback: CalView.ViewDoneSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "view-done", callback: CalView.ViewDoneSignalCallback): NodeJS.EventEmitter
    emit(sigName: "view-done", ...args: any[]): void
    connect(sigName: "view-progress", callback: CalView.ViewProgressSignalCallback): number
    on(sigName: "view-progress", callback: CalView.ViewProgressSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "view-progress", callback: CalView.ViewProgressSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "view-progress", callback: CalView.ViewProgressSignalCallback): NodeJS.EventEmitter
    emit(sigName: "view-progress", p0: number, ...args: any[]): void

    // Class property signals of ECalendar-1.2.ECalendar.CalView

    connect(sigName: "notify::client", callback: (...args: any[]) => void): number
    on(sigName: "notify::client", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::client", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::client", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::client", ...args: any[]): void
    connect(sigName: "notify::view", callback: (...args: any[]) => void): number
    on(sigName: "notify::view", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::view", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::view", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::view", ...args: any[]): void
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
}

class CalView extends GObject.Object {

    // Own properties of ECalendar-1.2.ECalendar.CalView

    static name: string

    // Constructors of ECalendar-1.2.ECalendar.CalView

    constructor(config?: CalView.ConstructorProperties) 
    _init(config?: CalView.ConstructorProperties): void
}

interface CalChange {

    // Own fields of ECalendar-1.2.ECalendar.CalChange

    comp: CalComponent
    type: CalChangeType
}

/**
 * FIXME Document me!
 * @record 
 */
class CalChange {

    // Own properties of ECalendar-1.2.ECalendar.CalChange

    static name: string
}

interface CalClass {

    // Own fields of ECalendar-1.2.ECalendar.CalClass

    parentClass: GObject.ObjectClass
    calOpened: (ecal: Cal, status: CalendarStatus) => void
    calOpenedEx: (ecal: Cal, error: GLib.Error) => void
    backendError: (ecal: Cal, message: string | null) => void
    backendDied: (ecal: Cal) => void
}

abstract class CalClass {

    // Own properties of ECalendar-1.2.ECalendar.CalClass

    static name: string
}

interface CalClientClass {

    // Own fields of ECalendar-1.2.ECalendar.CalClientClass

    parent: EDataServer.ClientClass
}

abstract class CalClientClass {

    // Own properties of ECalendar-1.2.ECalendar.CalClientClass

    static name: string
}

interface CalClientPrivate {
}

class CalClientPrivate {

    // Own properties of ECalendar-1.2.ECalendar.CalClientPrivate

    static name: string
}

interface CalClientViewClass {

    // Own fields of ECalendar-1.2.ECalendar.CalClientViewClass

    parentClass: GObject.ObjectClass
    progress: (view: CalClientView, percent: number, message: string | null) => void
    complete: (view: CalClientView, error: GLib.Error) => void
}

abstract class CalClientViewClass {

    // Own properties of ECalendar-1.2.ECalendar.CalClientViewClass

    static name: string
}

interface CalClientViewPrivate {
}

class CalClientViewPrivate {

    // Own properties of ECalendar-1.2.ECalendar.CalClientViewPrivate

    static name: string
}

interface CalComponentAlarm {

    // Owm methods of ECalendar-1.2.ECalendar.CalComponentAlarm

    /**
     * Frees an alarm structure.
     */
    free(): void
    /**
     * Queries the action type of an alarm.
     * @param action Return value for the alarm's action type.
     */
    getAction(action: CalComponentAlarmAction): void
    /**
     * Gets the list of attendees associated with an alarm.
     */
    getAttendeeList(): /* attendeeList */ CalComponentAttendee[]
    /**
     * Queries the description property of an alarm.
     * @param description Return value for the description property and its parameters.
     */
    getDescription(description: CalComponentText): void
    /**
     * Queries the repeat/duration properties of an alarm.
     * @param repeat Return value for the repeat/duration properties.
     */
    getRepeat(repeat: CalComponentAlarmRepeat): void
    /**
     * Queries the trigger time for an alarm.
     * @param trigger Return value for the trigger time.
     */
    getTrigger(trigger: CalComponentAlarmTrigger): void
    /**
     * Queries the unique identifier of an alarm subcomponent.
     * @returns UID of the alarm.
     */
    getUid(): string | null
    /**
     * Queries an alarm to see if it has attendees associated with it.
     * @returns TRUE if there are attendees in the alarm, FALSE if not.
     */
    hasAttendees(): boolean
    /**
     * Sets the action type for an alarm.
     * @param action Action type.
     */
    setAction(action: CalComponentAlarmAction): void
    /**
     * Sets the list of attendees for an alarm.
     * @param attendeeList List of attendees.
     */
    setAttendeeList(attendeeList: CalComponentAttendee[]): void
    /**
     * Sets the description property of an alarm.
     * @param description Description property and its parameters, or NULL for no description.
     */
    setDescription(description: CalComponentText): void
    /**
     * Sets the repeat/duration values for an alarm.
     * @param repeat Repeat/duration values.  To remove any repetitions from the alarm, set the `repeat`.repetitions to 0.
     */
    setRepeat(repeat: CalComponentAlarmRepeat): void
    /**
     * Sets the trigger time of an alarm.
     * @param trigger Trigger time structure.
     */
    setTrigger(trigger: CalComponentAlarmTrigger): void
}

class CalComponentAlarm {

    // Own properties of ECalendar-1.2.ECalendar.CalComponentAlarm

    static name: string
}

interface CalComponentAlarmInstance {

    // Own fields of ECalendar-1.2.ECalendar.CalComponentAlarmInstance

    auid: string | null
    trigger: number
    occurStart: number
    occurEnd: number
}

class CalComponentAlarmInstance {

    // Own properties of ECalendar-1.2.ECalendar.CalComponentAlarmInstance

    static name: string
}

interface CalComponentAlarmRepeat {

    // Own fields of ECalendar-1.2.ECalendar.CalComponentAlarmRepeat

    repetitions: number
    duration: any
}

class CalComponentAlarmRepeat {

    // Own properties of ECalendar-1.2.ECalendar.CalComponentAlarmRepeat

    static name: string
}

interface CalComponentAlarmTrigger {

    // Own fields of ECalendar-1.2.ECalendar.CalComponentAlarmTrigger

    type: CalComponentAlarmTriggerType
}

class CalComponentAlarmTrigger {

    // Own properties of ECalendar-1.2.ECalendar.CalComponentAlarmTrigger

    static name: string
}

interface CalComponentAlarms {

    // Own fields of ECalendar-1.2.ECalendar.CalComponentAlarms

    comp: CalComponent
    alarms: any[]

    // Owm methods of ECalendar-1.2.ECalendar.CalComponentAlarms

    /**
     * Frees a #ECalComponentAlarms structure.
     */
    free(): void
}

class CalComponentAlarms {

    // Own properties of ECalendar-1.2.ECalendar.CalComponentAlarms

    static name: string
}

interface CalComponentAttendee {

    // Own fields of ECalendar-1.2.ECalendar.CalComponentAttendee

    value: string | null
    member: string | null
    rsvp: boolean
    delto: string | null
    delfrom: string | null
    sentby: string | null
    cn: string | null
    language: string | null
}

class CalComponentAttendee {

    // Own properties of ECalendar-1.2.ECalendar.CalComponentAttendee

    static name: string
}

interface CalComponentClass {

    // Own fields of ECalendar-1.2.ECalendar.CalComponentClass

    parentClass: GObject.ObjectClass
}

abstract class CalComponentClass {

    // Own properties of ECalendar-1.2.ECalendar.CalComponentClass

    static name: string
}

interface CalComponentDateTime {

    // Own fields of ECalendar-1.2.ECalendar.CalComponentDateTime

    value: any
    tzid: string | null
}

class CalComponentDateTime {

    // Own properties of ECalendar-1.2.ECalendar.CalComponentDateTime

    static name: string
}

interface CalComponentId {

    // Own fields of ECalendar-1.2.ECalendar.CalComponentId

    uid: string | null
    rid: string | null
}

class CalComponentId {

    // Own properties of ECalendar-1.2.ECalendar.CalComponentId

    static name: string
}

interface CalComponentOrganizer {

    // Own fields of ECalendar-1.2.ECalendar.CalComponentOrganizer

    value: string | null
    sentby: string | null
    cn: string | null
    language: string | null
}

class CalComponentOrganizer {

    // Own properties of ECalendar-1.2.ECalendar.CalComponentOrganizer

    static name: string
}

interface CalComponentPeriod {

    // Own fields of ECalendar-1.2.ECalendar.CalComponentPeriod

    type: CalComponentPeriodType
    start: any
}

class CalComponentPeriod {

    // Own properties of ECalendar-1.2.ECalendar.CalComponentPeriod

    static name: string
}

interface CalComponentPrivate {
}

class CalComponentPrivate {

    // Own properties of ECalendar-1.2.ECalendar.CalComponentPrivate

    static name: string
}

interface CalComponentRange {

    // Own fields of ECalendar-1.2.ECalendar.CalComponentRange

    type: CalComponentRangeType
    datetime: CalComponentDateTime
}

class CalComponentRange {

    // Own properties of ECalendar-1.2.ECalendar.CalComponentRange

    static name: string
}

interface CalComponentText {

    // Own fields of ECalendar-1.2.ECalendar.CalComponentText

    value: string | null
    altrep: string | null
}

class CalComponentText {

    // Own properties of ECalendar-1.2.ECalendar.CalComponentText

    static name: string
}

interface CalPrivate {
}

class CalPrivate {

    // Own properties of ECalendar-1.2.ECalendar.CalPrivate

    static name: string
}

interface CalViewClass {

    // Own fields of ECalendar-1.2.ECalendar.CalViewClass

    parentClass: GObject.ObjectClass
    viewProgress: (view: CalView, message: string | null, percent: number) => void
    viewDone: (view: CalView, status: CalendarStatus) => void
    viewComplete: (view: CalView, status: CalendarStatus, errorMsg: string | null) => void
}

abstract class CalViewClass {

    // Own properties of ECalendar-1.2.ECalendar.CalViewClass

    static name: string
}

interface CalViewPrivate {
}

class CalViewPrivate {

    // Own properties of ECalendar-1.2.ECalendar.CalViewPrivate

    static name: string
}

}

export default ECalendar;
// END