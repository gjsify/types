/*
 * Type Definitions for node-gtk (https://github.com/romgrk/node-gtk)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/sammydre/ts-for-gjs
 */
/**
 * ECal-2.0
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

export namespace ECal {

enum ClientError {
    /**
     * No such calendar
     */
    NO_SUCH_CALENDAR,
    /**
     * Object not found
     */
    OBJECT_NOT_FOUND,
    /**
     * Invalid object
     */
    INVALID_OBJECT,
    /**
     * Unknown user
     */
    UNKNOWN_USER,
    /**
     * Object ID already exists
     */
    OBJECT_ID_ALREADY_EXISTS,
    /**
     * Invalid range
     */
    INVALID_RANGE,
}
/**
 * Indicates the type of calendar
 */
enum ClientSourceType {
    /**
     * Events calander
     */
    EVENTS,
    /**
     * Task list calendar
     */
    TASKS,
    /**
     * Memo list calendar
     */
    MEMOS,
}
/**
 * Alarm types
 */
enum ComponentAlarmAction {
    /**
     * None
     */
    NONE,
    /**
     * Audio
     */
    AUDIO,
    /**
     * Display message
     */
    DISPLAY,
    /**
     * Email
     */
    EMAIL,
    /**
     * Procedure
     */
    PROCEDURE,
    /**
     * Unknown
     */
    UNKNOWN,
}
enum ComponentAlarmTriggerKind {
    NONE,
    RELATIVE_START,
    RELATIVE_END,
    ABSOLUTE,
}
/**
 * CLASSIFICATION property
 */
enum ComponentClassification {
    /**
     * None
     */
    NONE,
    /**
     * Public
     */
    PUBLIC,
    /**
     * Private
     */
    PRIVATE,
    /**
     * Confidential
     */
    CONFIDENTIAL,
    /**
     * Unknown
     */
    UNKNOWN,
}
/**
 * Way in which a period of time is specified
 */
enum ComponentPeriodKind {
    /**
     * Date and time
     */
    DATETIME,
    /**
     * Duration
     */
    DURATION,
}
/**
 * The kind of range
 */
enum ComponentRangeKind {
    /**
     * Single
     */
    SINGLE,
    /**
     * This and prior
     */
    THISPRIOR,
    /**
     * This and future
     */
    THISFUTURE,
}
/**
 * Time transparency
 */
enum ComponentTransparency {
    /**
     * None
     */
    NONE,
    /**
     * Transparent
     */
    TRANSPARENT,
    /**
     * Opaque
     */
    OPAQUE,
    /**
     * Unknown
     */
    UNKNOWN,
}
/**
 * Types of calendar components to be stored by a ECalComponent, as per RFC 2445.
 * We don't put the alarm component type here since we store alarms as separate
 * structures inside the other "real" components.
 */
enum ComponentVType {
    /**
     * Unknown or unsupported component type
     */
    NO_TYPE,
    /**
     * vEvent type
     */
    EVENT,
    /**
     * vTodo type
     */
    TODO,
    /**
     * vJournal type
     */
    JOURNAL,
    /**
     * vFreeBusy type
     */
    FREEBUSY,
    /**
     * vTimezone type
     */
    TIMEZONE,
}
/**
 * Flags that control the behaviour of an #ECalClientView.
 */
enum ClientViewFlags {
    /**
     * Symbolic value for no flags
     */
    NONE,
    /**
     * If this flag is set then all objects matching the view's query will
     *   be sent as notifications when starting the view, otherwise only future
     *   changes will be reported.  The default for an #ECalClientView is %TRUE.
     */
    NOTIFY_INITIAL,
}
/**
 * Indicates the type of modification made to a calendar
 */
enum ObjModType {
    /**
     * Modify this component
     */
    THIS,
    /**
     * Modify this component and all prior occurrances
     */
    THIS_AND_PRIOR,
    /**
     * Modify this component and all future occurrances
     */
    THIS_AND_FUTURE,
    /**
     * Modify all occurrances of this component
     */
    ALL,
    /**
     * Modify only this component
     */
    ONLY_THIS,
}
/**
 * Calendar operation flags, to specify behavior in certain situations. The conflict
 * resolution mode flags cannot be combined together, where the `E_CAL_OPERATION_FLAG_CONFLICT_KEEP_LOCAL`
 * is the default behavior (and it is used when no other conflict resolution flag is set).
 * The flags can be ignored when the operation or the backend don't support it.
 */
enum OperationFlags {
    /**
     * no operation flags defined
     */
    NONE,
    /**
     * conflict resolution mode, to fail and do not
     *    do any changes, when a conflict is detected
     */
    CONFLICT_FAIL,
    /**
     * conflict resolution mode, to use newer
     *    of the local and the server side data, when a conflict is detected
     */
    CONFLICT_USE_NEWER,
    /**
     * conflict resolution mode, to use
     *    the server data (and local changed), when a conflict is detected
     */
    CONFLICT_KEEP_SERVER,
    /**
     * conflict resolution mode, to use
     *    local data (and always overwrite server data), when a conflict is detected
     */
    CONFLICT_KEEP_LOCAL,
    /**
     * conflict resolution mode, to create
     *    a copy of the data, when a conflict is detected
     */
    CONFLICT_WRITE_COPY,
    /**
     * request to disable send of an iTip
     *    message by the server; this works only for servers which support iTip handling
     */
    DISABLE_ITIP_MESSAGE,
}
/**
 * Influences behaviour of e_cal_recur_describe_recurrence().
 */
enum RecurDescribeRecurrenceFlags {
    /**
     * no extra flags, either returns %NULL or the recurrence description,
     *    something like "Every 2 weeks..."
     */
    NONE,
    /**
     * either returns %NULL or the recurrence description prefixed
     *    with text like "The meeting recurs", forming something like "The meeting recurs every 2 weeks..."
     */
    PREFIXED,
    /**
     * returns %NULL only if the component doesn't recur,
     *    otherwise returns either the recurrence description or at least text like "The meeting recurs"
     */
    FALLBACK,
}
/**
 * Flags modifying behaviour of e_reminder_watcher_describe_data().
 */
enum ReminderWatcherDescribeFlags {
    /**
     * None flags
     */
    NONE,
    /**
     * Returned description will contain
     *    also markup. Without it it'll be a plain text.
     */
    MARKUP,
}
/**
 * An email address preferred for e-mail reminders by the calendar.
 */
const BACKEND_PROPERTY_ALARM_EMAIL_ADDRESS: string
/**
 * An email address associated with the calendar.
 */
const BACKEND_PROPERTY_CAL_EMAIL_ADDRESS: string
/**
 * A default object for the calendar. Calendars use VEVENT, memo lists VJOURNAL
 * and task lists VTODO, which can have prefilled values by the backend.
 */
const BACKEND_PROPERTY_DEFAULT_OBJECT: string
/**
 * The current overall revision string, this can be used as
 * a quick check to see if data has changed at all since the
 * last time the calendar revision was observed.
 */
const BACKEND_PROPERTY_REVISION: string
/**
 * Extension property for alarm components so that we can reference them by UID.
 */
const EVOLUTION_ALARM_UID_PROPERTY: string
/**
 * The X parameter name being used to store the enddate in RRULE and EXRULE properties.
 */
const EVOLUTION_ENDDATE_PARAMETER: string
const LIBICAL_GLIB_UNSTABLE_API: number
/**
 * Flag indicating that the backend supports alarm description
 */
const STATIC_CAPABILITY_ALARM_DESCRIPTION: string
/**
 * Let the client know that it should store All Day event times as time
 * with a time zone, rather than as a date.
 */
const STATIC_CAPABILITY_ALL_DAY_EVENT_AS_TIME: string
/**
 * Flag indicating that the backend supports bulk additions.
 */
const STATIC_CAPABILITY_BULK_ADDS: string
/**
 * Flag indicating that the backend supports bulk modifications.
 */
const STATIC_CAPABILITY_BULK_MODIFIES: string
/**
 * Flag indicating that the backend supports bulk removals.
 */
const STATIC_CAPABILITY_BULK_REMOVES: string
/**
 * When the capability is set, the client supports storing color
 * for individual components.
 */
const STATIC_CAPABILITY_COMPONENT_COLOR: string
const STATIC_CAPABILITY_CREATE_MESSAGES: string
const STATIC_CAPABILITY_DELEGATE_SUPPORTED: string
const STATIC_CAPABILITY_DELEGATE_TO_MANY: string
const STATIC_CAPABILITY_HAS_UNACCEPTED_MEETING: string
/**
 * Flag indicating that the backend does not support alarm after start the event
 */
const STATIC_CAPABILITY_NO_ALARM_AFTER_START: string
const STATIC_CAPABILITY_NO_ALARM_REPEAT: string
const STATIC_CAPABILITY_NO_AUDIO_ALARMS: string
const STATIC_CAPABILITY_NO_CONV_TO_ASSIGN_TASK: string
const STATIC_CAPABILITY_NO_CONV_TO_RECUR: string
const STATIC_CAPABILITY_NO_DISPLAY_ALARMS: string
const STATIC_CAPABILITY_NO_EMAIL_ALARMS: string
const STATIC_CAPABILITY_NO_GEN_OPTIONS: string
const STATIC_CAPABILITY_NO_MEMO_START_DATE: string
const STATIC_CAPABILITY_NO_ORGANIZER: string
const STATIC_CAPABILITY_NO_PROCEDURE_ALARMS: string
const STATIC_CAPABILITY_NO_TASK_ASSIGNMENT: string
const STATIC_CAPABILITY_NO_THISANDFUTURE: string
const STATIC_CAPABILITY_NO_THISANDPRIOR: string
const STATIC_CAPABILITY_NO_TRANSPARENCY: string
const STATIC_CAPABILITY_ONE_ALARM_ONLY: string
const STATIC_CAPABILITY_ORGANIZER_MUST_ACCEPT: string
const STATIC_CAPABILITY_ORGANIZER_MUST_ATTEND: string
const STATIC_CAPABILITY_ORGANIZER_NOT_EMAIL_ADDRESS: string
const STATIC_CAPABILITY_RECURRENCES_NO_MASTER: string
const STATIC_CAPABILITY_REFRESH_SUPPORTED: string
const STATIC_CAPABILITY_REMOVE_ALARMS: string
/**
 * FIXME: Document me.
 */
const STATIC_CAPABILITY_REMOVE_ONLY_THIS: string
const STATIC_CAPABILITY_REQ_SEND_OPTIONS: string
const STATIC_CAPABILITY_SAVE_SCHEDULES: string
/**
 * When the capability is set, the backend handles only simple memos,
 * which means it stores only memo description. The summary can be changed
 * by the backend, if needed.
 */
const STATIC_CAPABILITY_SIMPLE_MEMO: string
/**
 * Similar to the %E_CAL_STATIC_CAPABILITY_SIMPLE_MEMO, except the backend stores
 * the description and the summary separately.
 */
const STATIC_CAPABILITY_SIMPLE_MEMO_WITH_SUMMARY: string
/**
 * When the capability is set, the client can store and provide recurring
 * tasks, otherwise it cannot.
 */
const STATIC_CAPABILITY_TASK_CAN_RECUR: string
/**
 * Let the client know that the Task Start date, Due date and Completed date
 * can be entered only as dates. When the capability is not set, then these
 * can be date and time.
 */
const STATIC_CAPABILITY_TASK_DATE_ONLY: string
/**
 * Set, when the backend supports ESTIMATED-DURATION property for tasks.
 */
const STATIC_CAPABILITY_TASK_ESTIMATED_DURATION: string
/**
 * When the capability is set, the backend handles task recurrence
 * completion on its own. This does not imply E_CAL_STATIC_CAPABILITY_TASK_CAN_RECUR.
 */
const STATIC_CAPABILITY_TASK_HANDLE_RECUR: string
/**
 * When the capability is set, the client cannot store reminders
 * on tasks, otherwise it can.
 */
const STATIC_CAPABILITY_TASK_NO_ALARM: string
function isodateFromTimeT(t: number): string
function matchTzid(tzid: string): string | null
function recurDescribeRecurrence(icalcomp: ICalGLib.Component, weekStartDay: GLib.DateWeekday, flags: number): string | null
function recurDescribeRecurrenceEx(icalcomp: ICalGLib.Component, weekStartDay: GLib.DateWeekday, flags: number, datetimeFmtFunc?: RecurFormatDateTimeFunc | null): string | null
function recurEnsureEndDates(comp: Component, refresh: boolean, tzCb: RecurResolveTimezoneCb, cancellable?: Gio.Cancellable | null): boolean
function recurGenerateInstancesSync(icalcomp: ICalGLib.Component, intervalStart: ICalGLib.Time, intervalEnd: ICalGLib.Time, defaultTimezone: ICalGLib.Timezone, cancellable?: Gio.Cancellable | null): boolean
function recurGetLocalizedNth(nth: number): string
function recurObtainEnddate(ir: ICalGLib.Recurrence, prop: ICalGLib.Property, zone: ICalGLib.Timezone, convertEndDate: boolean): number
function systemTimezoneGetLocation(): string | null
function timeAddDay(time: number, days: number): number
function timeAddDayWithZone(time: number, days: number, zone: ICalGLib.Timezone): number
function timeAddMonthWithZone(time: number, months: number, zone: ICalGLib.Timezone): number
function timeAddWeek(time: number, weeks: number): number
function timeAddWeekWithZone(time: number, weeks: number, zone: ICalGLib.Timezone): number
function timeDayBegin(t: number): number
function timeDayBeginWithZone(time: number, zone: ICalGLib.Timezone): number
function timeDayEnd(t: number): number
function timeDayEndWithZone(time: number, zone: ICalGLib.Timezone): number
function timeDayOfWeek(day: number, month: number, year: number): number
function timeDayOfYear(day: number, month: number, year: number): number
function timeDaysInMonth(year: number, month: number): number
function timeFromIsodate(str: string): number
function timeIsLeapYear(year: number): boolean
function timeLeapYearsUpTo(year: number): number
function timeMonthBeginWithZone(time: number, zone: ICalGLib.Timezone): number
function timeToGdateWithZone(date: GLib.Date, time: number, zone?: ICalGLib.Timezone | null): void
function timeWeekBeginWithZone(time: number, weekStartDay: number, zone: ICalGLib.Timezone): number
function timeYearBeginWithZone(time: number, zone: ICalGLib.Timezone): number
function utilAddTimezonesFromComponent(vcalComp: ICalGLib.Component, icalcomp: ICalGLib.Component): void
function utilClampVtimezone(vtimezone: ICalGLib.Component, from: ICalGLib.Time, to?: ICalGLib.Time | null): /* vtimezone */ ICalGLib.Component
function utilClampVtimezoneByComponent(vtimezone: ICalGLib.Component, component: ICalGLib.Component): /* vtimezone */ ICalGLib.Component
function utilComponentDupXProperty(icalcomp: ICalGLib.Component, xName: string): string | null
function utilComponentFindXProperty(icalcomp: ICalGLib.Component, xName: string): ICalGLib.Property | null
function utilComponentGetRecuridAsString(icalcomp: ICalGLib.Component): string | null
function utilComponentHasAlarms(icalcomp: ICalGLib.Component): boolean
function utilComponentHasAttendee(icalcomp: ICalGLib.Component): boolean
function utilComponentHasOrganizer(icalcomp: ICalGLib.Component): boolean
function utilComponentHasProperty(icalcomp: ICalGLib.Component, propKind: ICalGLib.PropertyKind): boolean
function utilComponentHasRdates(icalcomp: ICalGLib.Component): boolean
function utilComponentHasRecurrences(icalcomp: ICalGLib.Component): boolean
function utilComponentHasRrules(icalcomp: ICalGLib.Component): boolean
function utilComponentHasXProperty(icalcomp: ICalGLib.Component, xName: string): boolean
function utilComponentIsInstance(icalcomp: ICalGLib.Component): boolean
function utilComponentRemovePropertyByKind(icalcomp: ICalGLib.Component, kind: ICalGLib.PropertyKind, all: boolean): number
function utilComponentRemoveXProperty(icalcomp: ICalGLib.Component, xName: string): boolean
function utilComponentSetXProperty(icalcomp: ICalGLib.Component, xName: string, value?: string | null): void
function utilConflictResolutionToOperationFlags(conflictResolution: EDataServer.ConflictResolution): number
function utilConstructInstance(icalcomp: ICalGLib.Component, rid: ICalGLib.Time): ICalGLib.Component | null
function utilCopyTimezone(zone: ICalGLib.Timezone): ICalGLib.Timezone
function utilGenerateAlarmsForComp(comp: Component, start: number, end: number, omit: ComponentAlarmAction, resolveTzid: RecurResolveTimezoneCb, defaultTimezone: ICalGLib.Timezone): ComponentAlarms | null
function utilGenerateAlarmsForList(comps: Component[], start: number, end: number, omit: ComponentAlarmAction, resolveTzid: RecurResolveTimezoneCb, defaultTimezone: ICalGLib.Timezone): [ /* returnType */ number, /* compAlarms */ ComponentAlarms[] ]
function utilGetComponentOccurTimes(comp: Component, tzCb: RecurResolveTimezoneCb, defaultTimezone: ICalGLib.Timezone, kind: ICalGLib.ComponentKind): [ /* outStart */ number, /* outEnd */ number ]
function utilGetSystemTimezone(): ICalGLib.Timezone | null
function utilGetSystemTimezoneLocation(): string | null
function utilIcaltimeToTm(itt: ICalGLib.Time): object | null
function utilIcaltimeToTmWithZone(itt: ICalGLib.Time, fromZone: ICalGLib.Timezone, toZone: ICalGLib.Timezone): object | null
function utilInitRecurTaskSync(vtodo: ICalGLib.Component, calClient: Client, cancellable?: Gio.Cancellable | null): boolean
function utilInlineLocalAttachmentsSync(component: ICalGLib.Component, cancellable?: Gio.Cancellable | null): boolean
function utilIsFirstInstance(comp: Component, rid: ICalGLib.Time, tzCb: RecurResolveTimezoneCb): boolean
function utilMarkTaskCompleteSync(vtodo: ICalGLib.Component, completedTime: number, calClient: Client, cancellable?: Gio.Cancellable | null): boolean
function utilNewComponent(kind: ICalGLib.ComponentKind): ICalGLib.Component
function utilNewTopLevel(): ICalGLib.Component
function utilNormalizeRruleUntilValue(icalcomp: ICalGLib.Component, ttuntil: ICalGLib.Time, tzCb: RecurResolveTimezoneCb): void
function utilOperationFlagsToConflictResolution(flags: number): EDataServer.ConflictResolution
function utilParseIcsFile(filename: string): ICalGLib.Component | null
function utilParseIcsString(string: string): ICalGLib.Component | null
function utilPriorityFromString(string: string): number
function utilPriorityToString(priority: number): string
function utilPropertyHasParameter(prop: ICalGLib.Property, paramKind: ICalGLib.ParameterKind): boolean
function utilRemoveInstances(icalcomp: ICalGLib.Component, rid: ICalGLib.Time, mod: ObjModType): void
function utilRemoveInstancesEx(icalcomp: ICalGLib.Component, rid: ICalGLib.Time, mod: ObjModType, tzCb: RecurResolveTimezoneCb): void
function utilSecondsToString(seconds: number): string
function utilSetAlarmAcknowledged(component: Component, auid: string, when: number): boolean
function utilSplitAtInstance(icalcomp: ICalGLib.Component, rid: ICalGLib.Time, masterDtstart?: ICalGLib.Time | null): ICalGLib.Component | null
function utilSplitAtInstanceEx(icalcomp: ICalGLib.Component, rid: ICalGLib.Time, masterDtstart: ICalGLib.Time | null, tzCb: RecurResolveTimezoneCb): ICalGLib.Component | null
function utilTmToIcaltime(tm: object | null, isDate: boolean): ICalGLib.Time
/**
 * A function used to filter which parameters should be added to the bag,
 * when filling it with e_cal_component_parameter_bag_new_from_property()
 * and e_cal_component_parameter_bag_set_from_property().
 */
interface ComponentParameterBagFilterFunc {
    (parameter: ICalGLib.Parameter): boolean
}
/**
 * A function used to filter which properties should be added to the bag,
 * when filling it with e_cal_component_property_bag_new_from_component()
 * and e_cal_component_property_bag_set_from_component().
 */
interface ComponentPropertyBagFilterFunc {
    (property: ICalGLib.Property): boolean
}
/**
 * Format the date/time value from `itt` into `buffer,` whose size cannot
 * exceed `buffer_size` letters.
 */
interface RecurFormatDateTimeFunc {
    (itt: ICalGLib.Time, buffer: string, bufferSize: number): void
}
/**
 * Callback used by e_cal_recur_generate_instances_sync(), called
 * for each instance of a (recurring) component within given time range.
 */
interface RecurInstanceCb {
    (icomp: ICalGLib.Component, instanceStart: ICalGLib.Time, instanceEnd: ICalGLib.Time, cancellable?: Gio.Cancellable | null): boolean
}
/**
 * Resolve timezone by its ID provided as `tzid`. The returned object,
 * if not %NULL, is owned by the callback implementation and should
 * not be freed.
 */
interface RecurResolveTimezoneCb {
    (tzid: string, cancellable?: Gio.Cancellable | null): ICalGLib.Timezone | null
}
class TimezoneCache {
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
     */
    addTimezone(zone: ICalGLib.Timezone): void
    /**
     * Obtains an #ICalTimezone by its TZID string.  If no match is found,
     * the function returns %NULL.  The returned #ICalTimezone is owned by
     * the `cache` and should not be modified or freed.
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
    /* Signals of ECal-2.0.ECal.TimezoneCache */
    /**
     * Emitted when a new #icaltimezone is added to `cache`.
     */
    connect(sigName: "timezone-added", callback: ((zone: ICalGLib.Timezone) => void)): number
    on(sigName: "timezone-added", callback: (zone: ICalGLib.Timezone) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "timezone-added", callback: (zone: ICalGLib.Timezone) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "timezone-added", callback: (zone: ICalGLib.Timezone) => void): NodeJS.EventEmitter
    emit(sigName: "timezone-added", zone: ICalGLib.Timezone): void
    static name: string
}
interface Client_ConstructProps extends EDataServer.Client_ConstructProps {
    /* Constructor properties of ECal-2.0.ECal.Client */
    defaultTimezone?: ICalGLib.Timezone
    sourceType?: ClientSourceType
}
class Client {
    /* Properties of ECal-2.0.ECal.Client */
    defaultTimezone: ICalGLib.Timezone
    /* Properties of EDataServer-1.2.EDataServer.Client */
    /**
     * The capabilities of this client
     */
    readonly capabilities: object
    /**
     * The main loop context in which notifications for
     * this client will be delivered.
     */
    readonly mainContext: GLib.MainContext
    /**
     * Whether this client's backing data is online.
     */
    online: boolean
    /**
     * Whether this client is open and ready to use.
     */
    readonly opened: boolean
    /**
     * Whether this client's backing data is readonly.
     */
    readonly readonly: boolean
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of ECal-2.0.ECal.Client */
    /**
     * Add a VTIMEZONE object to the given calendar client.
     * The call is finished by e_cal_client_add_timezone_finish() from
     * the `callback`.
     */
    addTimezone(zone: ICalGLib.Timezone, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes previous call of e_cal_client_add_timezone().
     */
    addTimezoneFinish(result: Gio.AsyncResult): boolean
    /**
     * Add a VTIMEZONE object to the given calendar client.
     */
    addTimezoneSync(zone: ICalGLib.Timezone, cancellable?: Gio.Cancellable | null): boolean
    /**
     * Checks if a calendar supports only one alarm per component.
     */
    checkOneAlarmOnly(): boolean
    /**
     * Checks whether a calendar requires organizer to accept their attendance to
     * meetings.
     */
    checkOrganizerMustAccept(): boolean
    /**
     * Checks if a calendar forces organizers of meetings to be also attendees.
     */
    checkOrganizerMustAttend(): boolean
    /**
     * Checks if the calendar has a master object for recurrences.
     */
    checkRecurrencesNoMaster(): boolean
    /**
     * Checks whether the calendar saves schedules.
     */
    checkSaveSchedules(): boolean
    /**
     * Requests the calendar backend to create the object specified by the `icalcomp`
     * argument. Some backends would assign a specific UID to the newly created object,
     * but this function does not modify the original `icalcomp` if its UID changes.
     * The call is finished by e_cal_client_create_object_finish() from
     * the `callback`.
     */
    createObject(icalcomp: ICalGLib.Component, opflags: OperationFlags, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes previous call of e_cal_client_create_object() and
     * sets `out_uid` to newly assigned UID for the created object.
     * This `out_uid` should be freed with g_free().
     */
    createObjectFinish(result: Gio.AsyncResult): [ /* returnType */ boolean, /* outUid */ string | null ]
    /**
     * Requests the calendar backend to create the object specified by the
     * `icalcomp` argument. Some backends would assign a specific UID to the newly
     * created object, in those cases that UID would be returned in the `out_uid`
     * argument. This function does not modify the original `icalcomp` if its UID
     * changes.  Returned `out_uid` should be freed with g_free().
     */
    createObjectSync(icalcomp: ICalGLib.Component, opflags: OperationFlags, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* outUid */ string | null ]
    /**
     * Requests the calendar backend to create the objects specified by the `icalcomps`
     * argument. Some backends would assign a specific UID to the newly created object,
     * but this function does not modify the original `icalcomps` if their UID changes.
     * The call is finished by e_cal_client_create_objects_finish() from
     * the `callback`.
     */
    createObjects(icalcomps: ICalGLib.Component[], opflags: OperationFlags, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes previous call of e_cal_client_create_objects() and
     * sets `out_uids` to newly assigned UIDs for the created objects.
     * This `out_uids` should be freed with e_client_util_free_string_slist().
     */
    createObjectsFinish(result: Gio.AsyncResult): [ /* returnType */ boolean, /* outUids */ string[] | null ]
    /**
     * Requests the calendar backend to create the objects specified by the
     * `icalcomps` argument. Some backends would assign a specific UID to the
     * newly created objects, in those cases these UIDs would be returned in
     * the `out_uids` argument. This function does not modify the original
     * `icalcomps` if their UID changes.  Returned `out_uids` should be freed
     * with e_client_util_free_string_slist().
     */
    createObjectsSync(icalcomps: ICalGLib.Component[], opflags: OperationFlags, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* outUids */ string[] | null ]
    /**
     * Discards alarm `auid` from a given component identified by `uid` and `rid`.
     * The call is finished by e_cal_client_discard_alarm_finish() from
     * the `callback`.
     */
    discardAlarm(uid: string, rid: string | null, auid: string, opflags: OperationFlags, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes previous call of e_cal_client_discard_alarm().
     */
    discardAlarmFinish(result: Gio.AsyncResult): boolean
    /**
     * Discards alarm `auid` from a given component identified by `uid` and `rid`.
     */
    discardAlarmSync(uid: string, rid: string | null, auid: string, opflags: OperationFlags, cancellable?: Gio.Cancellable | null): boolean
    /**
     * Does a combination of e_cal_client_get_object_list() and
     * e_cal_recur_generate_instances_sync(). Unlike
     * e_cal_client_generate_instances_sync(), this returns immediately and the
     * `cb` callback is called asynchronously.
     * 
     * The callback function should do a g_object_ref() of the calendar component
     * it gets passed if it intends to keep it around, since it will be unref'ed
     * as soon as the callback returns.
     */
    generateInstances(start: number, end: number, cancellable: Gio.Cancellable | null, cb: RecurInstanceCb): void
    /**
     * Does a combination of e_cal_client_get_object_list() and
     * e_cal_recur_generate_instances_sync(), like
     * e_cal_client_generate_instances(), but for a single object. Unlike
     * e_cal_client_generate_instances_for_object_sync(), this returns immediately
     * and the `cb` callback is called asynchronously.
     * 
     * The callback function should do a g_object_ref() of the calendar component
     * it gets passed if it intends to keep it around, since it will be unref'ed
     * as soon as the callback returns.
     */
    generateInstancesForObject(icalcomp: ICalGLib.Component, start: number, end: number, cancellable: Gio.Cancellable | null, cb: RecurInstanceCb): void
    /**
     * Does a combination of e_cal_client_get_object_list() and
     * e_cal_recur_generate_instances_sync(), like
     * e_cal_client_generate_instances_sync(), but for a single object.
     * 
     * The callback function should do a g_object_ref() of the calendar component
     * it gets passed if it intends to keep it around, since it will be unref'ed
     * as soon as the callback returns.
     */
    generateInstancesForObjectSync(icalcomp: ICalGLib.Component, start: number, end: number, cancellable: Gio.Cancellable | null, cb: RecurInstanceCb): void
    /**
     * Does a combination of e_cal_client_get_object_list() and
     * e_cal_recur_generate_instances_sync().
     * 
     * The callback function should do a g_object_ref() of the calendar component
     * it gets passed if it intends to keep it around, since it will be unreffed
     * as soon as the callback returns.
     */
    generateInstancesSync(start: number, end: number, cancellable: Gio.Cancellable | null, cb: RecurInstanceCb): void
    /**
     * Queries a calendar for a specified component's object attachment uris.
     * The call is finished by e_cal_client_get_attachment_uris_finish() from
     * the `callback`.
     */
    getAttachmentUris(uid: string, rid?: string | null, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes previous call of e_cal_client_get_attachment_uris() and
     * sets `out_attachment_uris` to uris for component's attachments.
     * The list should be freed with e_client_util_free_string_slist().
     */
    getAttachmentUrisFinish(result: Gio.AsyncResult): [ /* returnType */ boolean, /* outAttachmentUris */ string[] ]
    /**
     * Queries a calendar for a specified component's object attachment URIs.
     * The list should be freed with e_client_util_free_string_slist().
     */
    getAttachmentUrisSync(uid: string, rid?: string | null, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* outAttachmentUris */ string[] ]
    /**
     * Gets a calendar component as an iCalendar string, with a toplevel
     * VCALENDAR component and all VTIMEZONEs needed for the component.
     */
    getComponentAsString(icalcomp: ICalGLib.Component): string | null
    /**
     * Retrives an #ICalComponent from the backend that contains the default
     * values for properties needed. The call is finished
     * by e_cal_client_get_default_object_finish() from the `callback`.
     */
    getDefaultObject(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes previous call of e_cal_client_get_default_object() and
     * sets `out_icalcomp` to an #ICalComponent from the backend that contains
     * the default values for properties needed. This `out_icalcomp` should be
     * freed with g_object_unref(), when no longer needed.
     */
    getDefaultObjectFinish(result: Gio.AsyncResult): [ /* returnType */ boolean, /* outIcalcomp */ ICalGLib.Component ]
    /**
     * Retrives an #ICalComponent from the backend that contains the default
     * values for properties needed. This `out_icalcomp` should be freed with
     * g_object_unref(), when no longer needed.
     */
    getDefaultObjectSync(cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* outIcalcomp */ ICalGLib.Component ]
    /**
     * Returns the default timezone previously set with
     * e_cal_client_set_default_timezone().  The returned pointer is owned by
     * the `client` and should not be freed.
     */
    getDefaultTimezone(): ICalGLib.Timezone
    /**
     * Begins retrieval of free/busy information from the calendar server
     * as a list of #ECalComponent-s. Connect to "free-busy-data" signal
     * to receive chunks of free/busy components.
     * The call is finished by e_cal_client_get_free_busy_finish() from
     * the `callback`.
     */
    getFreeBusy(start: number, end: number, users: string[], cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes previous call of e_cal_client_get_free_busy().
     * The `out_freebusy` contains all VFREEBUSY #ECalComponent-s, which could be also
     * received by "free-busy-data" signal. The client is responsible to do a merge of
     * the components between this complete list and those received through the signal.
     */
    getFreeBusyFinish(result: Gio.AsyncResult): [ /* returnType */ boolean, /* outFreebusy */ Component[] ]
    /**
     * Gets free/busy information from the calendar server.
     * The `out_freebusy` contains all VFREEBUSY #ECalComponent-s, which could be also
     * received by "free-busy-data" signal. The client is responsible to do a merge of
     * the components between this complete list and those received through the signal.
     */
    getFreeBusySync(start: number, end: number, users: string[], cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* outFreebusy */ Component[] ]
    /**
     * Queries the URL where the calendar attachments are
     * serialized in the local filesystem. This enable clients
     * to operate with the reference to attachments rather than the data itself
     * unless it specifically uses the attachments for open/sending
     * operations.
     */
    getLocalAttachmentStore(): string
    /**
     * Queries a calendar for a calendar component object based on its unique
     * identifier. The call is finished by e_cal_client_get_object_finish()
     * from the `callback`.
     * 
     * Use e_cal_client_get_objects_for_uid() to get list of all
     * objects for the given uid, which includes master object and
     * all detached instances.
     */
    getObject(uid: string, rid?: string | null, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes previous call of e_cal_client_get_object() and
     * sets `out_icalcomp` to queried component. This function always returns
     * master object for a case of `rid` being NULL or an empty string.
     * This component should be freed with g_object_unref(), when no longer needed.
     * 
     * Use e_cal_client_get_objects_for_uid() to get list of all
     * objects for the given uid, which includes master object and
     * all detached instances.
     */
    getObjectFinish(result: Gio.AsyncResult): [ /* returnType */ boolean, /* outIcalcomp */ ICalGLib.Component ]
    /**
     * Gets a list of objects from the calendar that match the query specified
     * by the `sexp` argument, returning matching objects as a list of #ICalComponent-s.
     * The call is finished by e_cal_client_get_object_list_finish() from
     * the `callback`.
     */
    getObjectList(sexp: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    /**
     * Gets a list of objects from the calendar that match the query specified
     * by the `sexp` argument, returning matching objects as a list of #ECalComponent-s.
     * The call is finished by e_cal_client_get_object_list_as_comps_finish() from
     * the `callback`.
     */
    getObjectListAsComps(sexp: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes previous call of e_cal_client_get_object_list_as_comps() and
     * sets `out_ecalcomps` to a matching list of #ECalComponent-s.
     * This list should be freed with e_client_util_free_object_slist().
     */
    getObjectListAsCompsFinish(result: Gio.AsyncResult): [ /* returnType */ boolean, /* outEcalcomps */ Component[] ]
    /**
     * Gets a list of objects from the calendar that match the query specified
     * by the `sexp` argument. The objects will be returned in the `out_ecalcomps`
     * argument, which is a list of #ECalComponent.
     * This list should be freed with e_client_util_free_object_slist().
     */
    getObjectListAsCompsSync(sexp: string, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* outEcalcomps */ Component[] ]
    /**
     * Finishes previous call of e_cal_client_get_object_list() and
     * sets `out_icalcomps` to a matching list of #ICalComponent-s.
     * This list should be freed with e_client_util_free_object_slist().
     */
    getObjectListFinish(result: Gio.AsyncResult): [ /* returnType */ boolean, /* outIcalcomps */ ICalGLib.Component[] ]
    /**
     * Gets a list of objects from the calendar that match the query specified
     * by the `sexp` argument. The objects will be returned in the `out_icalcomps`
     * argument, which is a list of #ICalComponent.
     * This list should be freed with e_client_util_free_object_slist().
     */
    getObjectListSync(sexp: string, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* outIcalcomps */ ICalGLib.Component[] ]
    /**
     * Queries a calendar for a calendar component object based
     * on its unique identifier. This function always returns
     * master object for a case of `rid` being NULL or an empty string.
     * This component should be freed with g_object_unref(),
     * when no longer needed.
     * 
     * Use e_cal_client_get_objects_for_uid_sync() to get list of all
     * objects for the given uid, which includes master object and
     * all detached instances.
     */
    getObjectSync(uid: string, rid?: string | null, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* outIcalcomp */ ICalGLib.Component ]
    /**
     * Queries a calendar for all calendar components with the given unique
     * ID. This will return any recurring event and all its detached recurrences.
     * For non-recurring events, it will just return the object with that ID.
     * The call is finished by e_cal_client_get_objects_for_uid_finish() from
     * the `callback`.
     */
    getObjectsForUid(uid: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes previous call of e_cal_client_get_objects_for_uid() and
     * sets `out_ecalcomps` to a list of #ECalComponent<!-- -->s corresponding to
     * found components for a given uid of the same type as this client.
     * This list should be freed with e_client_util_free_object_slist().
     */
    getObjectsForUidFinish(result: Gio.AsyncResult): [ /* returnType */ boolean, /* outEcalcomps */ Component[] ]
    /**
     * Queries a calendar for all calendar components with the given unique
     * ID. This will return any recurring event and all its detached recurrences.
     * For non-recurring events, it will just return the object with that ID.
     * This list should be freed with e_client_util_free_object_slist().
     */
    getObjectsForUidSync(uid: string, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* outEcalcomps */ Component[] ]
    /**
     * Gets the source type of the calendar client.
     */
    getSourceType(): ClientSourceType
    /**
     * Retrieves a timezone object from the calendar backend.
     * The call is finished by e_cal_client_get_timezone_finish() from
     * the `callback`.
     */
    getTimezone(tzid: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes previous call of e_cal_client_get_timezone() and
     * sets `out_zone` to a retrieved timezone object from the calendar backend.
     * This object is owned by the `client,` thus do not free it.
     */
    getTimezoneFinish(result: Gio.AsyncResult): [ /* returnType */ boolean, /* outZone */ ICalGLib.Timezone ]
    /**
     * Retrieves a timezone object from the calendar backend.
     * This object is owned by the `client,` thus do not free it.
     */
    getTimezoneSync(tzid: string, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* outZone */ ICalGLib.Timezone ]
    /**
     * Query `client` with `sexp,` creating an #ECalClientView.
     * The call is finished by e_cal_client_get_view_finish()
     * from the `callback`.
     */
    getView(sexp: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes previous call of e_cal_client_get_view().
     * If successful, then the `out_view` is set to newly allocated #ECalClientView,
     * which should be freed with g_object_unref().
     */
    getViewFinish(result: Gio.AsyncResult): [ /* returnType */ boolean, /* outView */ ClientView ]
    /**
     * Query `client` with `sexp,` creating an #ECalClientView.
     * If successful, then the `out_view` is set to newly allocated #ECalClientView,
     * which should be freed with g_object_unref().
     */
    getViewSync(sexp: string, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* outView */ ClientView ]
    /**
     * Requests the calendar backend to modify an existing object. If the object
     * does not exist on the calendar, an error will be returned.
     * 
     * For recurrent appointments, the `mod` argument specifies what to modify,
     * if all instances (#E_CAL_OBJ_MOD_ALL), a single instance (#E_CAL_OBJ_MOD_THIS),
     * or a specific set of instances (#E_CAL_OBJ_MOD_THIS_AND_PRIOR and
     * #E_CAL_OBJ_MOD_THIS_AND_FUTURE).
     * 
     * The call is finished by e_cal_client_modify_object_finish() from
     * the `callback`.
     */
    modifyObject(icalcomp: ICalGLib.Component, mod: ObjModType, opflags: OperationFlags, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes previous call of e_cal_client_modify_object().
     */
    modifyObjectFinish(result: Gio.AsyncResult): boolean
    /**
     * Requests the calendar backend to modify an existing object. If the object
     * does not exist on the calendar, an error will be returned.
     * 
     * For recurrent appointments, the `mod` argument specifies what to modify,
     * if all instances (#E_CAL_OBJ_MOD_ALL), a single instance (#E_CAL_OBJ_MOD_THIS),
     * or a specific set of instances (#E_CAL_OBJ_MOD_THIS_AND_PRIOR and
     * #E_CAL_OBJ_MOD_THIS_AND_FUTURE).
     */
    modifyObjectSync(icalcomp: ICalGLib.Component, mod: ObjModType, opflags: OperationFlags, cancellable?: Gio.Cancellable | null): boolean
    /**
     * Requests the calendar backend to modify existing objects. If an object
     * does not exist on the calendar, an error will be returned.
     * 
     * For recurrent appointments, the `mod` argument specifies what to modify,
     * if all instances (#E_CAL_OBJ_MOD_ALL), a single instance (#E_CAL_OBJ_MOD_THIS),
     * or a specific set of instances (#E_CAL_OBJ_MOD_THIS_AND_PRIOR and
     * #E_CAL_OBJ_MOD_THIS_AND_FUTURE).
     * 
     * The call is finished by e_cal_client_modify_objects_finish() from
     * the `callback`.
     */
    modifyObjects(icalcomps: ICalGLib.Component[], mod: ObjModType, opflags: OperationFlags, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes previous call of e_cal_client_modify_objects().
     */
    modifyObjectsFinish(result: Gio.AsyncResult): boolean
    /**
     * Requests the calendar backend to modify existing objects. If an object
     * does not exist on the calendar, an error will be returned.
     * 
     * For recurrent appointments, the `mod` argument specifies what to modify,
     * if all instances (#E_CAL_OBJ_MOD_ALL), a single instance (#E_CAL_OBJ_MOD_THIS),
     * or a specific set of instances (#E_CAL_OBJ_MOD_THIS_AND_PRIOR and
     * #E_CAL_OBJ_MOD_THIS_AND_FUTURE).
     */
    modifyObjectsSync(icalcomps: ICalGLib.Component[], mod: ObjModType, opflags: OperationFlags, cancellable?: Gio.Cancellable | null): boolean
    /**
     * Makes the backend receive the set of iCalendar objects specified in the
     * `icalcomp` argument. This is used for iTIP confirmation/cancellation
     * messages for scheduled meetings.
     * 
     * The call is finished by e_cal_client_receive_objects_finish() from
     * the `callback`.
     */
    receiveObjects(icalcomp: ICalGLib.Component, opflags: OperationFlags, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes previous call of e_cal_client_receive_objects().
     */
    receiveObjectsFinish(result: Gio.AsyncResult): boolean
    /**
     * Makes the backend receive the set of iCalendar objects specified in the
     * `icalcomp` argument. This is used for iTIP confirmation/cancellation
     * messages for scheduled meetings.
     */
    receiveObjectsSync(icalcomp: ICalGLib.Component, opflags: OperationFlags, cancellable?: Gio.Cancellable | null): boolean
    /**
     * This function allows the removal of instances of a recurrent
     * appointment. By using a combination of the `uid,` `rid` and `mod`
     * arguments, you can remove specific instances. If what you want
     * is to remove all instances, use %NULL `rid` and #E_CAL_OBJ_MOD_ALL
     * for the `mod`.
     * 
     * The call is finished by e_cal_client_remove_object_finish() from
     * the `callback`.
     */
    removeObject(uid: string, rid: string | null, mod: ObjModType, opflags: OperationFlags, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes previous call of e_cal_client_remove_object().
     */
    removeObjectFinish(result: Gio.AsyncResult): boolean
    /**
     * This function allows the removal of instances of a recurrent
     * appointment. By using a combination of the `uid,` `rid` and `mod`
     * arguments, you can remove specific instances. If what you want
     * is to remove all instances, use %NULL `rid` and #E_CAL_OBJ_MOD_ALL
     * for the `mod`.
     */
    removeObjectSync(uid: string, rid: string | null, mod: ObjModType, opflags: OperationFlags, cancellable?: Gio.Cancellable | null): boolean
    /**
     * This function allows the removal of instances of recurrent appointments.
     * #ECalComponentId objects can identify specific instances (if rid is not
     * %NULL).  If what you want is to remove all instances, use a %NULL rid in
     * the #ECalComponentId and #E_CAL_OBJ_MOD_ALL for the `mod`.
     * 
     * The call is finished by e_cal_client_remove_objects_finish() from
     * the `callback`.
     */
    removeObjects(ids: ComponentId[], mod: ObjModType, opflags: OperationFlags, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes previous call of e_cal_client_remove_objects().
     */
    removeObjectsFinish(result: Gio.AsyncResult): boolean
    /**
     * This function allows the removal of instances of recurrent
     * appointments. #ECalComponentId objects can identify specific instances
     * (if rid is not %NULL).  If what you want is to remove all instances, use
     * a %NULL rid in the #ECalComponentId and #E_CAL_OBJ_MOD_ALL for the `mod`.
     */
    removeObjectsSync(ids: ComponentId[], mod: ObjModType, opflags: OperationFlags, cancellable?: Gio.Cancellable | null): boolean
    /**
     * Requests a calendar backend to send meeting information stored in `icalcomp`.
     * The backend can modify this component and request a send to particular users.
     * The call is finished by e_cal_client_send_objects_finish() from
     * the `callback`.
     */
    sendObjects(icalcomp: ICalGLib.Component, opflags: OperationFlags, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes previous call of e_cal_client_send_objects() and
     * populates `out_users` with a list of users to send `out_modified_icalcomp` to.
     * 
     * The `out_users` list should be freed with e_client_util_free_string_slist()
     * and the `out_modified_icalcomp` should be freed with g_object_unref().
     */
    sendObjectsFinish(result: Gio.AsyncResult): [ /* returnType */ boolean, /* outUsers */ string[], /* outModifiedIcalcomp */ ICalGLib.Component ]
    /**
     * Requests a calendar backend to send meeting information stored in `icalcomp`.
     * The backend can modify this component and request a send to users in the
     * `out_users` list.
     * 
     * The `out_users` list should be freed with e_client_util_free_string_slist()
     * and the `out_modified_icalcomp` should be freed with g_object_unref().
     */
    sendObjectsSync(icalcomp: ICalGLib.Component, opflags: OperationFlags, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* outUsers */ string[], /* outModifiedIcalcomp */ ICalGLib.Component ]
    /**
     * Sets the default timezone to use to resolve DATE and floating DATE-TIME
     * values. This will typically be from the user's timezone setting. Call this
     * before using any other object fetching functions.
     */
    setDefaultTimezone(zone: ICalGLib.Timezone): void
    /* Methods of EDataServer-1.2.EDataServer.Client */
    /**
     * Cancels all pending operations started on `client`.
     */
    cancelAll(): void
    /**
     * Check if backend supports particular capability.
     * To get all capabilities use e_client_get_capabilities().
     */
    checkCapability(capability: string): boolean
    /**
     * Checks whether a client supports explicit refreshing
     * (see e_client_refresh()).
     */
    checkRefreshSupported(): boolean
    /**
     * Returns a D-Bus bus name that will be used to connect the
     * client to the backend subprocess.
     */
    dupBusName(): string
    /**
     * Queries `client'`s backend for a property of name `prop_name`.
     * The call is finished by e_client_get_backend_property_finish()
     * from the `callback`.
     */
    getBackendProperty(propName: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes previous call of e_client_get_backend_property().
     */
    getBackendPropertyFinish(result: Gio.AsyncResult): [ /* returnType */ boolean, /* propValue */ string ]
    /**
     * Queries `client'`s backend for a property of name `prop_name`.
     */
    getBackendPropertySync(propName: string, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* propValue */ string ]
    /**
     * Get list of strings with capabilities advertised by a backend.
     * This list, together with inner strings, is owned by the `client`.
     * To check for individual capabilities use e_client_check_capability().
     */
    getCapabilities(): string[]
    /**
     * Get the #ESource that this client has assigned.
     */
    getSource(): EDataServer.Source
    /**
     * Check if this `client` is connected.
     */
    isOnline(): boolean
    /**
     * Check if this `client` is fully opened. This includes
     * everything from e_client_open() call up to the authentication,
     * if required by a backend. Client cannot do any other operation
     * during the opening phase except of authenticate or cancel it.
     * Every other operation results in an %E_CLIENT_ERROR_BUSY error.
     */
    isOpened(): boolean
    /**
     * Check if this `client` is read-only.
     */
    isReadonly(): boolean
    /**
     * Opens the `client,` making it ready for queries and other operations.
     * The call is finished by e_client_open_finish() from the `callback`.
     */
    open(onlyIfExists: boolean, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes previous call of e_client_open().
     */
    openFinish(result: Gio.AsyncResult): boolean
    /**
     * Opens the `client,` making it ready for queries and other operations.
     */
    openSync(onlyIfExists: boolean, cancellable?: Gio.Cancellable | null): boolean
    /**
     * Returns the #GMainContext on which event sources for `client` are to
     * be attached.
     * 
     * The returned #GMainContext is referenced for thread-safety and must be
     * unreferenced with g_main_context_unref() when finished with it.
     */
    refMainContext(): GLib.MainContext
    /**
     * Initiates refresh on the `client`. Finishing the method doesn't mean
     * that the refresh is done, backend only notifies whether it started
     * refreshing or not. Use e_client_check_refresh_supported() to check
     * whether the backend supports this method.
     * The call is finished by e_client_refresh_finish() from the `callback`.
     */
    refresh(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes previous call of e_client_refresh().
     */
    refreshFinish(result: Gio.AsyncResult): boolean
    /**
     * Initiates refresh on the `client`. Finishing the method doesn't mean
     * that the refresh is done, backend only notifies whether it started
     * refreshing or not. Use e_client_check_refresh_supported() to check
     * whether the backend supports this method.
     */
    refreshSync(cancellable?: Gio.Cancellable | null): boolean
    /**
     * Removes the backing data for this #EClient. For example, with the file
     * backend this deletes the database file. You cannot get it back!
     * The call is finished by e_client_remove_finish() from the `callback`.
     */
    remove(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes previous call of e_client_remove().
     */
    removeFinish(result: Gio.AsyncResult): boolean
    /**
     * Removes the backing data for this #EClient. For example, with the file
     * backend this deletes the database file. You cannot get it back!
     */
    removeSync(cancellable?: Gio.Cancellable | null): boolean
    /**
     * Initiates retrieval of capabilities on the `client`. This is usually
     * required only once, after the `client` is opened. The returned value
     * is cached and any subsequent call of e_client_get_capabilities() and
     * e_client_check_capability() is using the cached value.
     * The call is finished by e_client_retrieve_capabilities_finish()
     * from the `callback`.
     */
    retrieveCapabilities(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes previous call of e_client_retrieve_capabilities().
     * Returned value of `capabilities` should be freed with g_free(),
     * when no longer needed.
     */
    retrieveCapabilitiesFinish(result: Gio.AsyncResult): [ /* returnType */ boolean, /* capabilities */ string ]
    /**
     * Initiates retrieval of capabilities on the `client`. This is usually
     * required only once, after the `client` is opened. The returned value
     * is cached and any subsequent call of e_client_get_capabilities() and
     * e_client_check_capability() is using the cached value. Returned value
     * of `capabilities` should be freed with g_free(), when no longer needed.
     */
    retrieveCapabilitiesSync(cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* capabilities */ string ]
    /**
     * Asynchronously retrieves `client` properties to match server-side values,
     * without waiting for the D-Bus property change notifications delivery.
     * 
     * When the operation is finished, `callback` will be called. You can then
     * call e_client_retrieve_properties_finish() to get the result of the operation.
     */
    retrieveProperties(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes the operation started with e_client_retrieve_properties().
     * 
     * If an error occurs, the function sets `error` and returns %FALSE.
     */
    retrievePropertiesFinish(result: Gio.AsyncResult): boolean
    /**
     * Retrieves `client` properties to match server-side values, without waiting
     * for the D-Bus property change notifications delivery.
     * 
     * If an error occurs, the function sets `error` and returns %FALSE.
     */
    retrievePropertiesSync(cancellable?: Gio.Cancellable | null): boolean
    /**
     * Sets `client'`s backend property of name `prop_name`
     * to value `prop_value`. The call is finished
     * by e_client_set_backend_property_finish() from the `callback`.
     */
    setBackendProperty(propName: string, propValue: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes previous call of e_client_set_backend_property().
     */
    setBackendPropertyFinish(result: Gio.AsyncResult): boolean
    /**
     * Sets `client'`s backend property of name `prop_name`
     * to value `prop_value`.
     */
    setBackendPropertySync(propName: string, propValue: string, cancellable?: Gio.Cancellable | null): boolean
    /**
     * Sets a D-Bus bus name that will be used to connect the client
     * to the backend subprocess.
     */
    setBusName(busName: string): void
    /**
     * Unwraps D-Bus error to local error. `dbus_error` is automatically freed.
     * `dbus_erorr` and `out_error` can point to the same variable.
     */
    unwrapDbusError(dbusError: GLib.Error): void
    /**
     * Asynchronously waits until the `client` is connected (according
     * to `ESource:`:connection-status property), but not longer than `timeout_seconds`.
     * 
     * The call is finished by e_client_wait_for_connected_finish() from
     * the `callback`.
     */
    waitForConnected(timeoutSeconds: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes previous call of e_client_wait_for_connected().
     */
    waitForConnectedFinish(result: Gio.AsyncResult): boolean
    /**
     * Synchronously waits until the `client` is connected (according
     * to `ESource:`:connection-status property), but not longer than `timeout_seconds`.
     * 
     * Note: This also calls e_client_retrieve_properties_sync() on success, to have
     *   up-to-date property values on the client side, without a delay due
     *   to property change notifcations delivery through D-Bus.
     */
    waitForConnectedSync(timeoutSeconds: number, cancellable?: Gio.Cancellable | null): boolean
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
     */
    getProperty(propertyName: string, value: any): void
    /**
     * This function gets back user data pointers stored via
     * g_object_set_qdata().
     */
    getQdata(quark: GLib.Quark): object | null
    /**
     * Gets `n_properties` properties for an `object`.
     * Obtained properties will be set to `values`. All properties must be valid.
     * Warnings will be emitted and undefined behaviour may result if invalid
     * properties are passed in.
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
     */
    setData(key: string, data?: object | null): void
    /**
     * Sets a property on an object.
     */
    setProperty(propertyName: string, value: any): void
    /**
     * Remove a specified datum from the object's data associations,
     * without invoking the association's destroy handler.
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
     */
    addTimezone(zone: ICalGLib.Timezone): void
    /**
     * Obtains an #ICalTimezone by its TZID string.  If no match is found,
     * the function returns %NULL.  The returned #ICalTimezone is owned by
     * the `cache` and should not be modified or freed.
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
    /* Methods of Gio-2.0.Gio.AsyncInitable */
    /**
     * Starts asynchronous initialization of the object implementing the
     * interface. This must be done before any real use of the object after
     * initial construction. If the object also implements #GInitable you can
     * optionally call g_initable_init() instead.
     * 
     * This method is intended for language bindings. If writing in C,
     * g_async_initable_new_async() should typically be used instead.
     * 
     * When the initialization is finished, `callback` will be called. You can
     * then call g_async_initable_init_finish() to get the result of the
     * initialization.
     * 
     * Implementations may also support cancellation. If `cancellable` is not
     * %NULL, then initialization can be cancelled by triggering the cancellable
     * object from another thread. If the operation was cancelled, the error
     * %G_IO_ERROR_CANCELLED will be returned. If `cancellable` is not %NULL, and
     * the object doesn't support cancellable initialization, the error
     * %G_IO_ERROR_NOT_SUPPORTED will be returned.
     * 
     * As with #GInitable, if the object is not initialized, or initialization
     * returns with an error, then all operations on the object except
     * g_object_ref() and g_object_unref() are considered to be invalid, and
     * have undefined behaviour. They will often fail with g_critical() or
     * g_warning(), but this must not be relied on.
     * 
     * Callers should not assume that a class which implements #GAsyncInitable can
     * be initialized multiple times; for more information, see g_initable_init().
     * If a class explicitly supports being initialized multiple times,
     * implementation requires yielding all subsequent calls to init_async() on the
     * results of the first call.
     * 
     * For classes that also support the #GInitable interface, the default
     * implementation of this method will run the g_initable_init() function
     * in a thread, so if you want to support asynchronous initialization via
     * threads, just implement the #GAsyncInitable interface without overriding
     * any interface methods.
     */
    initAsync(ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes asynchronous initialization and returns the result.
     * See g_async_initable_init_async().
     */
    initFinish(res: Gio.AsyncResult): boolean
    /**
     * Finishes the async construction for the various g_async_initable_new
     * calls, returning the created object or %NULL on error.
     */
    newFinish(res: Gio.AsyncResult): GObject.Object
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
     */
    init(cancellable?: Gio.Cancellable | null): boolean
    /* Signals of ECal-2.0.ECal.Client */
    connect(sigName: "free-busy-data", callback: ((freeBusyEcalcomps: Component[]) => void)): number
    on(sigName: "free-busy-data", callback: (freeBusyEcalcomps: Component[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "free-busy-data", callback: (freeBusyEcalcomps: Component[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "free-busy-data", callback: (freeBusyEcalcomps: Component[]) => void): NodeJS.EventEmitter
    emit(sigName: "free-busy-data", freeBusyEcalcomps: Component[]): void
    /* Signals of EDataServer-1.2.EDataServer.Client */
    connect(sigName: "backend-died", callback: (() => void)): number
    on(sigName: "backend-died", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "backend-died", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "backend-died", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "backend-died"): void
    connect(sigName: "backend-error", callback: ((object: string) => void)): number
    on(sigName: "backend-error", callback: (object: string) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "backend-error", callback: (object: string) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "backend-error", callback: (object: string) => void): NodeJS.EventEmitter
    emit(sigName: "backend-error", object: string): void
    connect(sigName: "backend-property-changed", callback: ((object: string, p0: string) => void)): number
    on(sigName: "backend-property-changed", callback: (object: string, p0: string) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "backend-property-changed", callback: (object: string, p0: string) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "backend-property-changed", callback: (object: string, p0: string) => void): NodeJS.EventEmitter
    emit(sigName: "backend-property-changed", object: string, p0: string): void
    connect(sigName: "opened", callback: ((object: GLib.Error) => void)): number
    on(sigName: "opened", callback: (object: GLib.Error) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "opened", callback: (object: GLib.Error) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "opened", callback: (object: GLib.Error) => void): NodeJS.EventEmitter
    emit(sigName: "opened", object: GLib.Error): void
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
     */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    /* Signals of ECal-2.0.ECal.TimezoneCache */
    /**
     * Emitted when a new #icaltimezone is added to `cache`.
     */
    connect(sigName: "timezone-added", callback: ((zone: ICalGLib.Timezone) => void)): number
    on(sigName: "timezone-added", callback: (zone: ICalGLib.Timezone) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "timezone-added", callback: (zone: ICalGLib.Timezone) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "timezone-added", callback: (zone: ICalGLib.Timezone) => void): NodeJS.EventEmitter
    emit(sigName: "timezone-added", zone: ICalGLib.Timezone): void
    connect(sigName: "notify::default-timezone", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::default-timezone", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::default-timezone", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::default-timezone", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::default-timezone", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::capabilities", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::capabilities", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::capabilities", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::capabilities", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::capabilities", callback: (...args: any[]) => void): NodeJS.EventEmitter
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
    connect(sigName: "notify::opened", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opened", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::opened", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::opened", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::opened", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::readonly", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::readonly", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::readonly", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::readonly", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::readonly", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: Client_ConstructProps)
    _init (config?: Client_ConstructProps): void
    /* Static methods and pseudo-constructors */
    /**
     * This function cleans up VEVENT, VJOURNAL, VTODO and VTIMEZONE
     * items which are to be imported into Evolution.
     * 
     * Using VTIMEZONE definitions is problematic because they cannot be
     * updated properly when timezone definitions change. They are also
     * incomplete (for compatibility reason only one set of rules for
     * summer saving changes can be included, even if different rules
     * apply in different years). This function looks for matches of the
     * used TZIDs against system timezones and replaces such TZIDs with
     * the corresponding system timezone. This works for TZIDs containing
     * a location (found via a fuzzy string search) and for Outlook TZIDs
     * (via a hard-coded lookup table).
     * 
     * Some programs generate broken meeting invitations with TZID, but
     * without including the corresponding VTIMEZONE. Importing such
     * invitations unchanged causes problems later on (meeting displayed
     * incorrectly, e_cal_component_get_as_string() fails). The situation
     * where this occurred in the past (found by a SyncEvolution user) is
     * now handled via the location based mapping.
     * 
     * If this mapping fails, this function also deals with VTIMEZONE
     * conflicts: such conflicts occur when the calendar already contains
     * an old VTIMEZONE definition with the same TZID, but different
     * summer saving rules. Replacing the VTIMEZONE potentially breaks
     * displaying of old events, whereas not replacing it breaks the new
     * events (the behavior in Evolution <= 2.22.1).
     * 
     * The way this problem is resolved by renaming the new VTIMEZONE
     * definition until the TZID is unique. A running count is appended to
     * the TZID. All items referencing the renamed TZID are adapted
     * accordingly.
     */
    static checkTimezonesSync(vcalendar: ICalGLib.Component, icalcomps?: ICalGLib.Component[] | null, cancellable?: Gio.Cancellable | null): boolean
    /**
     * Asynchronously creates a new #ECalClient for `source` and `source_type`.
     * 
     * The `wait_for_connected_seconds` argument had been added since 3.16,
     * to let the caller decide how long to wait for the backend to fully
     * connect to its (possibly remote) data store. This is required due
     * to a change in the authentication process, which is fully asynchronous
     * and done on the client side, while not every client is supposed to
     * response to authentication requests. In case the backend will not connect
     * within the set interval, then it is opened in an offline mode. A special
     * value -1 can be used to not wait for the connected state at all.
     * 
     * Unlike with e_cal_client_new(), there is no need to call e_client_open()
     * after obtaining the #ECalClient.
     * 
     * When the operation is finished, `callback` will be called.  You can then
     * call e_cal_client_connect_finish() to get the result of the operation.
     */
    static connect(source: EDataServer.Source, sourceType: ClientSourceType, waitForConnectedSeconds: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes the operation started with e_cal_client_connect().  If an
     * error occurs in connecting to the D-Bus service, the function sets
     * `error` and returns %NULL.
     * 
     * For error handling convenience, any error message returned by this
     * function will have a descriptive prefix that includes the display
     * name of the #ESource passed to e_cal_client_connect().
     */
    static connectFinish(result: Gio.AsyncResult): EDataServer.Client | null
    /**
     * Creates a new #ECalClient for `source` and `source_type`.  If an error
     * occurs, the function will set `error` and return %FALSE.
     * 
     * The `wait_for_connected_seconds` argument had been added since 3.16,
     * to let the caller decide how long to wait for the backend to fully
     * connect to its (possibly remote) data store. This is required due
     * to a change in the authentication process, which is fully asynchronous
     * and done on the client side, while not every client is supposed to
     * response to authentication requests. In case the backend will not connect
     * within the set interval, then it is opened in an offline mode. A special
     * value -1 can be used to not wait for the connected state at all.
     * 
     * Unlike with e_cal_client_new(), there is no need to call
     * e_client_open_sync() after obtaining the #ECalClient.
     * 
     * For error handling convenience, any error message returned by this
     * function will have a descriptive prefix that includes the display
     * name of `source`.
     */
    static connectSync(source: EDataServer.Source, sourceType: ClientSourceType, waitForConnectedSeconds: number, cancellable?: Gio.Cancellable | null): EDataServer.Client | null
    static errorCreate(code: ClientError, customMsg?: string | null): GLib.Error
    /* Function overloads */
    static errorCreate(code: EDataServer.ClientError, customMsg?: string | null): GLib.Error
    static errorQuark(): GLib.Quark
    /**
     * Get localized human readable description of the given error code.
     */
    static errorToString(code: ClientError): string
    /* Function overloads */
    /**
     * Get localized human readable description of the given error code.
     */
    static errorToString(code: EDataServer.ClientError): string
    /**
     * An implementation of the #ECalRecurResolveTimezoneCb callback which clients
     * can use. Calls e_cal_client_get_timezone_sync().
     * 
     * The returned timezone object, if not %NULL, is owned by the `ecalclient`.
     */
    static tzlookupCb(tzid: string, ecalclient: Client, cancellable?: Gio.Cancellable | null): ICalGLib.Timezone | null
    /**
     * An implementation of the #ECalRecurResolveTimezoneCb callback which
     * backends can use. Searches for the timezone in an %ICalComponent
     * associated with the `lookup_data` %ECalClientTzlookupICalCompData.
     * 
     * The returned timezone object is owned by the `lookup_data`.
     */
    static tzlookupIcalcompCb(tzid: string, lookupData: ClientTzlookupICalCompData, cancellable?: Gio.Cancellable | null): ICalGLib.Timezone | null
    /**
     * Helper function for constructing #GAsyncInitable object. This is
     * similar to g_object_newv() but also initializes the object asynchronously.
     * 
     * When the initialization is finished, `callback` will be called. You can
     * then call g_async_initable_new_finish() to get the new object and check
     * for any errors.
     */
    static newvAsync(objectType: GObject.Type, nParameters: number, parameters: GObject.Parameter, ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    /**
     * Helper function for constructing #GInitable object. This is
     * similar to g_object_newv() but also initializes the object
     * and returns %NULL, setting an error on failure.
     */
    static newv(objectType: GObject.Type, parameters: GObject.Parameter[], cancellable?: Gio.Cancellable | null): GObject.Object
    static $gtype: GObject.Type
}
interface ClientView_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of ECal-2.0.ECal.ClientView */
    /**
     * The ECalClient for the view
     */
    client?: Client
    /**
     * The GDBusConnection used to create the D-Bus proxy
     */
    connection?: Gio.DBusConnection
    /**
     * The object path used to create the D-Bus proxy
     */
    objectPath?: string
}
class ClientView {
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of ECal-2.0.ECal.ClientView */
    /**
     * Returns the #GDBusConnection used to create the D-Bus proxy.
     */
    getConnection(): Gio.DBusConnection
    /**
     * Returns the object path used to create the D-Bus proxy.
     */
    getObjectPath(): string
    /**
     * Retunrs: Whether view is running. Not running views are ignoring
     * all events sent from the server.
     */
    isRunning(): boolean
    /**
     * Returns the #ECalClientView:client associated with `client_view`.
     * 
     * The returned #ECalClient is referenced for thread-safety.  Unreference
     * the #ECalClient with g_object_unref() when finished with it.
     */
    refClient(): Client
    /**
     * Client can instruct server to which fields it is interested in only, thus
     * the server can return less data over the wire. The server can still return
     * complete objects, this is just a hint to it that the listed fields will
     * be used only. The UID/RID fields are returned always. Initial views has no
     * fields of interest and using %NULL for `fields_of_interest` will unset any
     * previous changes.
     * 
     * Some backends can use summary information of its cache to create artifical
     * objects, which will omit stored object parsing. If this cannot be done then
     * it will simply return object as is stored in the cache.
     */
    setFieldsOfInterest(fieldsOfInterest?: string[] | null): void
    /**
     * Sets the `flags` which control the behaviour of `client_view`.
     */
    setFlags(flags: ClientViewFlags): void
    /**
     * Tells `client_view` to start processing events.
     */
    start(): void
    /**
     * Tells `client_view` to stop processing events.
     */
    stop(): void
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
     */
    getProperty(propertyName: string, value: any): void
    /**
     * This function gets back user data pointers stored via
     * g_object_set_qdata().
     */
    getQdata(quark: GLib.Quark): object | null
    /**
     * Gets `n_properties` properties for an `object`.
     * Obtained properties will be set to `values`. All properties must be valid.
     * Warnings will be emitted and undefined behaviour may result if invalid
     * properties are passed in.
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
     */
    setData(key: string, data?: object | null): void
    /**
     * Sets a property on an object.
     */
    setProperty(propertyName: string, value: any): void
    /**
     * Remove a specified datum from the object's data associations,
     * without invoking the association's destroy handler.
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
     */
    init(cancellable?: Gio.Cancellable | null): boolean
    /* Signals of ECal-2.0.ECal.ClientView */
    connect(sigName: "complete", callback: ((object: GLib.Error) => void)): number
    on(sigName: "complete", callback: (object: GLib.Error) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "complete", callback: (object: GLib.Error) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "complete", callback: (object: GLib.Error) => void): NodeJS.EventEmitter
    emit(sigName: "complete", object: GLib.Error): void
    connect(sigName: "objects-added", callback: ((objects: ICalGLib.Component[]) => void)): number
    on(sigName: "objects-added", callback: (objects: ICalGLib.Component[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "objects-added", callback: (objects: ICalGLib.Component[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "objects-added", callback: (objects: ICalGLib.Component[]) => void): NodeJS.EventEmitter
    emit(sigName: "objects-added", objects: ICalGLib.Component[]): void
    connect(sigName: "objects-modified", callback: ((objects: ICalGLib.Component[]) => void)): number
    on(sigName: "objects-modified", callback: (objects: ICalGLib.Component[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "objects-modified", callback: (objects: ICalGLib.Component[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "objects-modified", callback: (objects: ICalGLib.Component[]) => void): NodeJS.EventEmitter
    emit(sigName: "objects-modified", objects: ICalGLib.Component[]): void
    connect(sigName: "objects-removed", callback: ((uids: ComponentId[]) => void)): number
    on(sigName: "objects-removed", callback: (uids: ComponentId[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "objects-removed", callback: (uids: ComponentId[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "objects-removed", callback: (uids: ComponentId[]) => void): NodeJS.EventEmitter
    emit(sigName: "objects-removed", uids: ComponentId[]): void
    connect(sigName: "progress", callback: ((object: number, p0: string) => void)): number
    on(sigName: "progress", callback: (object: number, p0: string) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "progress", callback: (object: number, p0: string) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "progress", callback: (object: number, p0: string) => void): NodeJS.EventEmitter
    emit(sigName: "progress", object: number, p0: string): void
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
    constructor (config?: ClientView_ConstructProps)
    _init (config?: ClientView_ConstructProps): void
    /* Static methods and pseudo-constructors */
    /**
     * Helper function for constructing #GInitable object. This is
     * similar to g_object_newv() but also initializes the object
     * and returns %NULL, setting an error on failure.
     */
    static newv(objectType: GObject.Type, parameters: GObject.Parameter[], cancellable?: Gio.Cancellable | null): GObject.Object
    static $gtype: GObject.Type
}
interface Component_ConstructProps extends GObject.Object_ConstructProps {
}
class Component {
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of ECal-2.0.ECal.Component */
    /**
     * Aborts the sequence change needed in the given calendar component,
     * which means it will not require a sequence commit (via
     * e_cal_component_commit_sequence()) even if the changes done require a
     * sequence increment.
     */
    abortSequence(): void
    /**
     * Adds an alarm subcomponent to a calendar component.  You should have created
     * the `alarm` by using e_cal_component_alarm_new(); it is invalid to use an
     * #ECalComponentAlarm structure that came from e_cal_component_get_alarm().  After
     * adding the alarm, the `alarm` structure is no longer valid because the
     * internal structures may change and you should get rid of it by using
     * e_cal_component_alarm_free().
     */
    addAlarm(alarm: ComponentAlarm): void
    /**
     * Creates a new calendar component object by copying the information from
     * another one.
     */
    clone(): Component
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
     * Queries a particular alarm subcomponent of a calendar component.
     * Free the returned pointer with e_cal_component_alarm_free(),
     * when no longer needed.
     */
    getAlarm(auid: string): ComponentAlarm | null
    /**
     * Builds a list of the unique identifiers of the alarm subcomponents inside a
     * calendar component. Free the returned #GSList with
     * g_slist_free_full (slist, g_free);, when no longer needed.
     */
    getAlarmUids(): string[] | null
    /**
     * Queries all alarm subcomponents of a calendar component.
     * Free the returned #GSList with g_slist_free_full (slist, e_cal_component_alarm_free);,
     * when no longer needed.
     */
    getAllAlarms(): ComponentAlarm[] | null
    /**
     * Gets the iCalendar string representation of a calendar component.  You should
     * call e_cal_component_commit_sequence() before this function to ensure that the
     * component's sequence number is consistent with the state of the object.
     */
    getAsString(): string
    /**
     * Queries the attachment properties as #ICalAttach objects of the calendar
     * component object. Changes on these objects are directly affecting the component.
     * Free the returned #GSList with g_slist_free_full (slist, g_object_unref);,
     * when no longer needed.
     */
    getAttachments(): ICalGLib.Attach[] | null
    /**
     * Queries the attendee properties of the calendar component object.
     * Free the returned #GSList with g_slist_free_full (slist, e_cal_component_attendee_free);,
     * when no longer needed.
     */
    getAttendees(): ComponentAttendee[] | null
    /**
     * Queries the categories of the given calendar component. The categories
     * are returned in the `categories` argument, which, on success, will contain
     * a comma-separated list of all categories set in the component.
     * Free the returned string with g_free(), when no longer needed.
     */
    getCategories(): string | null
    /**
     * Queries the list of categories of a calendar component object. Each element
     * in the returned categ_list is a string with the corresponding category.
     * Free the returned #GSList with g_slist_free_full (categories, g_free); , when
     * no longer needed.
     */
    getCategoriesList(): string[] | null
    /**
     * Queries the classification of a calendar component object.  If the
     * classification property is not set on this component, this function returns
     * #E_CAL_COMPONENT_CLASS_NONE.
     * 
     * Retuurns: a classification of the `comp,` as an #ECalComponentClassification
     */
    getClassification(): ComponentClassification
    /**
     * Queries the comments of a calendar component object.  The comment property can
     * appear several times inside a calendar component, and so a list of
     * #ECalComponentText is returned. Free the returned #GSList with
     * g_slist_free_full (slist, e_cal_component_text_free);, when no longer needed.
     */
    getComments(): ComponentText[] | null
    /**
     * Queries the date at which a calendar compoment object was completed.
     * Free the returned non-NULL pointer with g_object_unref(), when
     * no longer needed.
     */
    getCompleted(): ICalGLib.Time | null
    /**
     * Queries the contact of a calendar component object.  The contact property can
     * appear several times inside a calendar component, and so a list of
     * #ECalComponentText is returned. Free the returned #GSList with
     * g_slist_free_full (slist, e_cal_component_text_free);, when no longer needed.
     */
    getContacts(): ComponentText[]
    /**
     * Queries the date in which a calendar component object was created in the
     * calendar store. Free the returned non-NULL pointer with g_object_unref(), when
     * no longer needed.
     */
    getCreated(): ICalGLib.Time | null
    /**
     * Queries the description of a calendar component object.  Journal components
     * may have more than one description, and as such this function returns a list
     * of #ECalComponentText structures.  All other types of components can have at
     * most one description. Free the returned #GSList with
     * g_slist_free_full (slist, e_cal_component_text_free);, when no longer needed.
     */
    getDescriptions(): ComponentText[] | null
    /**
     * Queries the date/time end of a calendar component object. In case there's no DTEND,
     * but only DTSTART and DURATION, then the end is computed from the later two.
     * Free the returned #ECalComponentDateTime with e_cal_component_datetime_free(),
     * when no longer needed.
     */
    getDtend(): ComponentDateTime | null
    /**
     * Queries the date/timestamp property of a calendar component object, which is
     * the last time at which the object was modified by a calendar user agent.
     * 
     * Free a non-NULL returned object with g_object_unref(),
     * when no longer needed.
     */
    getDtstamp(): ICalGLib.Time | null
    /**
     * Queries the date/time start of a calendar component object.
     * Free the returned #ECalComponentDateTime with e_cal_component_datetime_free(),
     * when no longer needed.
     */
    getDtstart(): ComponentDateTime | null
    /**
     * Queries the due date/time of a calendar component object. In case there's no DUE,
     * but only DTSTART and DURATION, then the due is computed from the later two.
     * Free the returned #ECalComponentDateTime with e_cal_component_datetime_free(),
     * when no longer needed.
     */
    getDue(): ComponentDateTime | null
    /**
     * Queries the list of exception date properties in a calendar component object.
     * Free the returned #GSList with g_slist_free_full (exdates, e_cal_component_datetime_free);,
     * when no longer needed.
     */
    getExdates(): ComponentDateTime[] | null
    /**
     * Queries the list of exception rule properties of a calendar component object.
     * Free the list with g_slist_free_full (slist, g_object_unref);, when
     * no longer needed.
     */
    getExruleProperties(): ICalGLib.Property[] | null
    /**
     * Queries the list of exception rule properties of a calendar component
     * object. Free the returned list with g_slist_free_full (slist, g_object_unref);,
     * when no longer needed.
     */
    getExrules(): ICalGLib.Recurrence[] | null
    /**
     * Gets the geographic position property of a calendar component object.
     * Free the returned non-NULL object with g_object_unref(), when
     * no longer needed.
     */
    getGeo(): ICalGLib.Geo | null
    /**
     * Queries the #icalcomponent structure that a calendar component object is
     * wrapping.
     */
    getIcalcomponent(): ICalGLib.Component | null
    /**
     * Get the ID of the component as an #ECalComponentId. The return value should
     * be freed with e_cal_component_id_free(), when no longer needed.
     */
    getId(): ComponentId
    /**
     * Queries the time at which a calendar component object was last modified in
     * the calendar store. Free the returned non-NULL pointer with g_object_unref(),
     * when no longer needed.
     */
    getLastModified(): ICalGLib.Time | null
    /**
     * Queries the location property of a calendar component object.
     */
    getLocation(): string | null
    /**
     * Queries the organizer property of a calendar component object.
     * Free the returned structure with e_cal_component_organizer_free(),
     * when no longer needed.
     */
    getOrganizer(): ComponentOrganizer | null
    /**
     * Queries the percent-complete property of a calendar component object.
     */
    getPercentComplete(): number
    /**
     * Queries the priority property of a calendar component object.
     */
    getPriority(): number
    /**
     * Queries the list of recurrence date properties in a calendar component
     * object. Free the returned #GSList with g_slist_free_full (slist, e_cal_component_period_free);,
     * when no longer needed.
     */
    getRdates(): ComponentPeriod[] | null
    /**
     * Queries the recurrence id property of a calendar component object.
     * Free the returned #ECalComponentRange with e_cal_component_range_free(),
     * whe no longer needed.
     */
    getRecurid(): ComponentRange | null
    /**
     * Gets the recurrence ID property as a string.
     */
    getRecuridAsString(): string
    /**
     * Queries a list of recurrence rule properties of a calendar component object.
     * Free the list with g_slist_free_full (slist, g_object_unref);, when
     * no longer needed.
     */
    getRruleProperties(): ICalGLib.Property[] | null
    /**
     * Queries the list of recurrence rule properties of a calendar component
     * object. Free the returned list with g_slist_free_full (slist, g_object_unref);,
     * when no longer needed.
     */
    getRrules(): ICalGLib.Recurrence[] | null
    /**
     * Queries the sequence number of a calendar component object.
     */
    getSequence(): number
    /**
     * Queries the status property of a calendar component object.
     */
    getStatus(): ICalGLib.PropertyStatus
    /**
     * Queries the summary of a calendar component object.
     * Free the returned pointer withe_cal_component_text_free(),
     * when no longer needed.
     */
    getSummary(): ComponentText | null
    /**
     * Queries the time transparency of a calendar component object.
     */
    getTransparency(): ComponentTransparency
    /**
     * Queries the unique identifier of a calendar component object.
     */
    getUid(): string
    /**
     * Queries the uniform resource locator property of a calendar component object.
     * Free the returned URL with g_free(), when no longer needed.
     */
    getUrl(): string | null
    /**
     * Queries the type of a calendar component object.
     */
    getVtype(): ComponentVType
    /**
     * Checks whether the component has any alarms.
     */
    hasAlarms(): boolean
    /**
     * Queries the component to see if it has attachments.
     */
    hasAttachments(): boolean
    /**
     * Queries a calendar component object for the existence of attendees.
     */
    hasAttendees(): boolean
    /**
     * Queries whether a calendar component object has any exception dates
     * or exception rules.
     */
    hasExceptions(): boolean
    /**
     * Queries whether a calendar component object has any exception dates defined
     * for it.
     */
    hasExdates(): boolean
    /**
     * Queries whether a calendar component object has any exception rules defined
     * for it.
     */
    hasExrules(): boolean
    /**
     * Check whether a calendar component object has an organizer or not.
     */
    hasOrganizer(): boolean
    /**
     * Queries whether a calendar component object has any recurrence dates defined
     * for it.
     */
    hasRdates(): boolean
    /**
     * Queries whether a calendar component object has any recurrence dates or
     * recurrence rules.
     */
    hasRecurrences(): boolean
    /**
     * Queries whether a calendar component object has any recurrence rules defined
     * for it.
     */
    hasRrules(): boolean
    /**
     * Checks whether the given calendar component object has simple recurrence
     * rules or more complicated ones.
     */
    hasSimpleRecurrence(): boolean
    /**
     * Checks whether a calendar component object is an instance of a recurring
     * event.
     */
    isInstance(): boolean
    /**
     * Removes an alarm subcomponent from a calendar component.  If the alarm that
     * corresponds to the specified `auid` had been fetched with
     * e_cal_component_get_alarm(), then those alarm structures will be invalid; you
     * should get rid of them with e_cal_component_alarm_free() before using this
     * function.
     */
    removeAlarm(auid: string): void
    /**
     * Remove all alarms from the calendar component
     */
    removeAllAlarms(): void
    /**
     * Sets the attachments of the calendar component object.
     */
    setAttachments(attachments?: ICalGLib.Attach[] | null): void
    /**
     * Sets the attendees of a calendar component object
     */
    setAttendees(attendeeList?: ComponentAttendee[] | null): void
    /**
     * Sets the list of categories for a calendar component.
     */
    setCategories(categories: string): void
    /**
     * Sets the list of categories of a calendar component object.
     */
    setCategoriesList(categList: string[]): void
    /**
     * Sets the classification property of a calendar component object.  To unset
     * the property, specify E_CAL_COMPONENT_CLASS_NONE for `classif`.
     */
    setClassification(classif: ComponentClassification): void
    /**
     * Sets the comments of a calendar component object.  The comment property can
     * appear several times inside a calendar component, and so a list of
     * #ECalComponentText structures is used.
     */
    setComments(textList: ComponentText[]): void
    /**
     * Sets the date at which a calendar component object was completed.
     */
    setCompleted(tt?: ICalGLib.Time | null): void
    /**
     * Sets the contact of a calendar component object.  The contact property can
     * appear several times inside a calendar component, and so a list of
     * #ECalComponentText structures is used.
     */
    setContacts(textList: ComponentText[]): void
    /**
     * Sets the date in which a calendar component object is created in the calendar
     * store.  This should only be used inside a calendar store application, i.e.
     * not by calendar user agents.
     */
    setCreated(tt?: ICalGLib.Time | null): void
    /**
     * Sets the description of a calendar component object.  Journal components may
     * have more than one description, and as such this function takes in a list of
     * #ECalComponentText structures.  All other types of components can have
     * at most one description.
     */
    setDescriptions(textList: ComponentText[]): void
    /**
     * Sets the date/time end property of a calendar component object.
     */
    setDtend(dt?: ComponentDateTime | null): void
    /**
     * Sets the date/timestamp of a calendar component object.  This should be
     * called whenever a calendar user agent makes a change to a component's
     * properties.
     */
    setDtstamp(tt: ICalGLib.Time): void
    /**
     * Sets the date/time start property of a calendar component object.
     */
    setDtstart(dt?: ComponentDateTime | null): void
    /**
     * Sets the due date/time property of a calendar component object.
     */
    setDue(dt?: ComponentDateTime | null): void
    /**
     * Sets the list of exception dates in a calendar component object.
     */
    setExdates(exdateList?: ComponentDateTime[] | null): void
    /**
     * Sets the list of exception rules in a calendar component object.
     */
    setExrules(recurList?: ICalGLib.Recurrence[] | null): void
    /**
     * Sets the geographic position property on a calendar component object.
     */
    setGeo(geo?: ICalGLib.Geo | null): void
    /**
     * Sets the contents of a calendar component object from an #ICalComponent.
     * If the `comp` already had an #ICalComponent set into it, it will
     * be freed automatically.
     * 
     * Supported component types are VEVENT, VTODO, VJOURNAL, VFREEBUSY, and VTIMEZONE.
     */
    setIcalcomponent(icalcomp?: ICalGLib.Component | null): boolean
    /**
     * Sets the time at which a calendar component object was last stored in the
     * calendar store.  This should not be called by plain calendar user agents.
     */
    setLastModified(tt?: ICalGLib.Time | null): void
    /**
     * Sets the location property of a calendar component object.
     */
    setLocation(location?: string | null): void
    /**
     * Clears any existing component data from a calendar component object and
     * creates a new #ICalComponent of the specified type for it.  The only property
     * that will be set in the new component will be its unique identifier.
     */
    setNewVtype(type: ComponentVType): void
    /**
     * Sets the organizer of a calendar component object
     */
    setOrganizer(organizer?: ComponentOrganizer | null): void
    /**
     * Sets percent complete. The `percent` can be between 0 and 100, inclusive.
     * A special value -1 can be used to remove the percent complete property.
     */
    setPercentComplete(percent: number): void
    /**
     * Sets the priority property of a calendar component object.
     * The `priority` can be between 0 and 9, inclusive.
     * A special value -1 can be used to remove the priority property.
     */
    setPriority(priority: number): void
    /**
     * Sets the list of recurrence dates in a calendar component object.
     */
    setRdates(rdateList?: ComponentPeriod[] | null): void
    /**
     * Sets the recurrence id property of a calendar component object.
     */
    setRecurid(recurId?: ComponentRange | null): void
    /**
     * Sets the list of recurrence rules in a calendar component object.
     */
    setRrules(recurList?: ICalGLib.Recurrence[] | null): void
    /**
     * Sets the sequence number of a calendar component object.
     * A special value -1 can be used to remove the sequence number property.
     * 
     * Normally this function should not be called, since the sequence number
     * is incremented automatically at the proper times.
     */
    setSequence(sequence: number): void
    /**
     * Sets the status property of a calendar component object.
     */
    setStatus(status: ICalGLib.PropertyStatus): void
    /**
     * Sets the summary of a calendar component object.
     */
    setSummary(summary: ComponentText): void
    /**
     * Sets the time transparency of a calendar component object.
     * Use %E_CAL_COMPONENT_TRANSP_NONE to unset the property.
     */
    setTransparency(transp: ComponentTransparency): void
    /**
     * Sets the unique identifier string of a calendar component object.
     */
    setUid(uid: string): void
    /**
     * Sets the uniform resource locator property of a calendar component object.
     * A %NULL or an empty string removes the property.
     */
    setUrl(url?: string | null): void
    /**
     * Strips all error messages from the calendar component. Those error messages are
     * added to the iCalendar string representation whenever an invalid is used for
     * one of its fields.
     */
    stripErrors(): void
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
     */
    getProperty(propertyName: string, value: any): void
    /**
     * This function gets back user data pointers stored via
     * g_object_set_qdata().
     */
    getQdata(quark: GLib.Quark): object | null
    /**
     * Gets `n_properties` properties for an `object`.
     * Obtained properties will be set to `values`. All properties must be valid.
     * Warnings will be emitted and undefined behaviour may result if invalid
     * properties are passed in.
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
     */
    setData(key: string, data?: object | null): void
    /**
     * Sets a property on an object.
     */
    setProperty(propertyName: string, value: any): void
    /**
     * Remove a specified datum from the object's data associations,
     * without invoking the association's destroy handler.
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
    constructor (config?: Component_ConstructProps)
    _init (config?: Component_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): Component
    static newFromIcalcomponent(icalcomp: ICalGLib.Component): Component
    static newFromString(calobj: string): Component
    static newVtype(vtype: ComponentVType): Component
    static $gtype: GObject.Type
}
interface ReminderWatcher_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of ECal-2.0.ECal.ReminderWatcher */
    /**
     * An #ICalTimezone to be used as the default time zone.
     */
    defaultZone?: ICalGLib.Timezone
    /**
     * The #ESourceRegistry which manages #ESource instances.
     */
    registry?: EDataServer.SourceRegistry
    /**
     * Whether timers are enabled for the #EReminderWatcher. See
     * e_reminder_watcher_set_timers_enabled() for more information
     * what it means.
     * 
     * Default: %TRUE
     */
    timersEnabled?: boolean
}
class ReminderWatcher {
    /* Properties of ECal-2.0.ECal.ReminderWatcher */
    /**
     * An #ICalTimezone to be used as the default time zone.
     */
    defaultZone: ICalGLib.Timezone
    /**
     * Whether timers are enabled for the #EReminderWatcher. See
     * e_reminder_watcher_set_timers_enabled() for more information
     * what it means.
     * 
     * Default: %TRUE
     */
    timersEnabled: boolean
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of ECal-2.0.ECal.ReminderWatcher */
    /**
     * Returns a new string with a text description of the `rd`. The text format
     * can be influenced with `flags`.
     * 
     * Free the returned string with g_free(), when no longer needed.
     */
    describeData(rd: ReminderData, flags: number): string
    /**
     * Asynchronously dismiss single reminder in the past or snoozed reminders.
     * 
     * When the operation is finished, `callback` will be called. You can
     * then call e_reminder_watcher_dismiss_finish() to get the result of
     * the operation.
     */
    dismiss(rd: ReminderData, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    /**
     * Asynchronously dismiss all past reminders.
     * 
     * When the operation is finished, `callback` will be called. You can
     * then call e_reminder_watcher_dismiss_all_finish() to get the result
     * of the operation.
     */
    dismissAll(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes the operation started with e_reminder_watcher_dismiss_all().
     */
    dismissAllFinish(result: Gio.AsyncResult): boolean
    /**
     * Synchronously dismiss all past reminders. The operation stops after
     * the first error is encountered, which can be before all the past
     * reminders are dismissed.
     */
    dismissAllSync(cancellable?: Gio.Cancellable | null): boolean
    /**
     * Finishes the operation started with e_reminder_watcher_dismiss().
     */
    dismissFinish(result: Gio.AsyncResult): boolean
    /**
     * Synchronously dismiss single reminder in the past or snoozed reminders.
     */
    dismissSync(rd: ReminderData, cancellable?: Gio.Cancellable | null): boolean
    dupDefaultZone(): ICalGLib.Timezone
    /**
     * Gathers a #GSList of all past reminders which had not been removed after
     * EReminderWatcher::triggered signal. Such reminders are remembered
     * across sessions, until they are dismissed by e_reminder_watcher_dismiss()
     * or its synchronous variant. These reminders can be also snoozed
     * with e_reminder_watcher_snooze(), which removes them from the past
     * reminders into the list of snoozed reminders, see e_reminder_watcher_dup_snoozed().
     * 
     * Free the returned #GSList with
     * g_slist_free_full (reminders, e_reminder_data_free);
     * when no longer needed.
     */
    dupPast(): ReminderData[] | null
    /**
     * Gathers a #GSList of currently snoozed reminder with e_reminder_watcher_snooze().
     * The snoozed reminders are remembered across sessions and they are re-triggered
     * when their snooze time elapses, which can move them back to the list of past reminders.
     * 
     * Free the returned #GSList with
     * g_slist_free_full (reminders, e_reminder_data_free);
     * when no longer needed.
     */
    dupSnoozed(): ReminderData[] | null
    getRegistry(): EDataServer.SourceRegistry
    getTimersEnabled(): boolean
    refOpenedClient(sourceUid: string): Client | null
    /**
     * Sets the default zone for the `watcher`. This is used when calculating
     * trigger times for floating component times. When the `zone` is %NULL,
     * then sets a UTC time zone.
     */
    setDefaultZone(zone?: ICalGLib.Timezone | null): void
    /**
     * The `watcher` can be used both for scheduling the timers for the reminders
     * and respond to them through the "triggered" signal, or only to listen for
     * changes on the past reminders. The default is to have timers enabled, thus
     * to response to scheduled reminders. Disabling the timers also means there
     * will be less resources needed by the `watcher`.
     */
    setTimersEnabled(enabled: boolean): void
    /**
     * Snoozes `rd` until `until,` which is an absolute time when the `rd`
     * should be retriggered. This moves the `rd` from the list of past
     * reminders into the list of snoozed reminders and invokes the "changed"
     * signal.
     * 
     * The `until` can be a special value 0, to set the time as the event start,
     * if it's in the future. The function does nothing when the event time
     * is in the past.
     */
    snooze(rd: ReminderData, until: number): void
    /**
     * Notifies the #watcher that the timer previously scheduled
     * with EReminderWatcherClass::schedule_timer elapsed. This can
     * be used by the descendants which override the default implementation
     * of EReminderWatcherClass::schedule_timer. There is always scheduled
     * only one timer and once it's elapsed it should be also removed,
     * the same when the EReminderWatcherClass::schedule_timer is called
     * and the previously scheduled timer was not elapsed yet, the previous
     * should be removed first, aka every call to EReminderWatcherClass::schedule_timer
     * replaces any previously scheduled timer.
     */
    timerElapsed(): void
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
     */
    getProperty(propertyName: string, value: any): void
    /**
     * This function gets back user data pointers stored via
     * g_object_set_qdata().
     */
    getQdata(quark: GLib.Quark): object | null
    /**
     * Gets `n_properties` properties for an `object`.
     * Obtained properties will be set to `values`. All properties must be valid.
     * Warnings will be emitted and undefined behaviour may result if invalid
     * properties are passed in.
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
     */
    setData(key: string, data?: object | null): void
    /**
     * Sets a property on an object.
     */
    setProperty(propertyName: string, value: any): void
    /**
     * Remove a specified datum from the object's data associations,
     * without invoking the association's destroy handler.
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
     */
    watchClosure(closure: Function): void
    /* Signals of ECal-2.0.ECal.ReminderWatcher */
    /**
     * Signal is emitted when the list of past or snoozed reminders
     * changes. It's called also when GSettings key for past reminders
     * is notified as changed, because this list is not held in memory.
     */
    connect(sigName: "changed", callback: (() => void)): number
    on(sigName: "changed", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "changed", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "changed", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "changed"): void
    /**
     * Formats time `itt` to a string and writes it to `inout_buffer,` which can hold
     * up to `buffer_size` bytes. The first character of `inout_buffer` is the nul-byte
     * when nothing wrote to it yet.
     */
    connect(sigName: "format-time", callback: ((rd: ReminderData, itt: ICalGLib.Time, inoutBuffer: object | null, bufferSize: number) => void)): number
    on(sigName: "format-time", callback: (rd: ReminderData, itt: ICalGLib.Time, inoutBuffer: object | null, bufferSize: number) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "format-time", callback: (rd: ReminderData, itt: ICalGLib.Time, inoutBuffer: object | null, bufferSize: number) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "format-time", callback: (rd: ReminderData, itt: ICalGLib.Time, inoutBuffer: object | null, bufferSize: number) => void): NodeJS.EventEmitter
    emit(sigName: "format-time", rd: ReminderData, itt: ICalGLib.Time, inoutBuffer: object | null, bufferSize: number): void
    /**
     * Signal is emitted when any reminder is either overdue or triggered.
     */
    connect(sigName: "triggered", callback: ((reminders: ReminderData[], snoozed: boolean) => void)): number
    on(sigName: "triggered", callback: (reminders: ReminderData[], snoozed: boolean) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "triggered", callback: (reminders: ReminderData[], snoozed: boolean) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "triggered", callback: (reminders: ReminderData[], snoozed: boolean) => void): NodeJS.EventEmitter
    emit(sigName: "triggered", reminders: ReminderData[], snoozed: boolean): void
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
     */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::default-zone", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::default-zone", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::default-zone", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::default-zone", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::default-zone", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::timers-enabled", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::timers-enabled", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::timers-enabled", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::timers-enabled", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::timers-enabled", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: ReminderWatcher_ConstructProps)
    _init (config?: ReminderWatcher_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(registry: EDataServer.SourceRegistry): ReminderWatcher
    static $gtype: GObject.Type
}
abstract class ClientClass {
    static name: string
}
class ClientPrivate {
    static name: string
}
class ClientTzlookupICalCompData {
    /* Methods of ECal-2.0.ECal.ClientTzlookupICalCompData */
    /**
     * Copies given #ECalClientTzlookupICalCompData structure.
     * When the `lookup_data` is %NULL, simply returns %NULL as well.
     */
    copy(): ClientTzlookupICalCompData | null
    /**
     * Frees previously allocated #ECalClientTzlookupICalCompData structure
     * with e_cal_client_tzlookup_icalcomp_data_new() or e_cal_client_tzlookup_icalcomp_data_copy().
     * The function does nothing when `lookup_data` is %NULL.
     */
    free(): void
    getIcalcomponent(): ICalGLib.Component
    static name: string
    static new(icomp: ICalGLib.Component): ClientTzlookupICalCompData
    constructor(icomp: ICalGLib.Component)
    /* Static methods and pseudo-constructors */
    static new(icomp: ICalGLib.Component): ClientTzlookupICalCompData
}
abstract class ClientViewClass {
    /* Fields of ECal-2.0.ECal.ClientViewClass */
    readonly progress: (clientView: ClientView, percent: number, message: string) => void
    readonly complete: (clientView: ClientView, error: GLib.Error) => void
    static name: string
}
class ClientViewPrivate {
    static name: string
}
class ComponentAlarm {
    /* Methods of ECal-2.0.ECal.ComponentAlarm */
    /**
     * Returns a newly allocated copy of `alarm,` which should be freed with
     * e_cal_component_alarm_free(), when no longer needed.
     */
    copy(): ComponentAlarm
    /**
     * Fills `component` with data from `alarm`. The `component` should
     * be of %I_CAL_VALARM_COMPONENT kind - the function does nothing,
     * if it's not. In case the `alarm` doesn't have set 'uid', a new
     * is assigned.
     */
    fillComponent(component: ICalGLib.Component): void
    /**
     * Get the last time the alarm had been acknowledged, that is, when its
     * reminder had been triggered.
     * The returned #ICalTime is owned by `alarm` and should not be modified,
     * neither its content.
     */
    getAcknowledged(): ICalGLib.Time | null
    /**
     * Get the `alarm` action, as an #ECalComponentAlarmAction.
     */
    getAction(): ComponentAlarmAction
    /**
     * Creates a VALARM #ICalComponent filled with data from the `alarm`.
     * In case the `alarm` doesn't have set 'uid', a new is assigned.
     * Free the returned component with g_object_unref(), when no longer
     * needed.
     */
    getAsComponent(): ICalGLib.Component
    /**
     * Get the list of attachments, as #ICalAttach.
     * The returned #GSList is owned by `alarm` and should not be modified,
     * neither its content.
     */
    getAttachments(): ICalGLib.Attach[] | null
    /**
     * Get the list of attendees, as #ECalComponentAttendee.
     * The returned #GSList is owned by `alarm` and should not be modified,
     * neither its content.
     */
    getAttendees(): ComponentAttendee[] | null
    /**
     * Get the `alarm` description, as an #ECalComponentText.
     */
    getDescription(): ComponentText | null
    getPropertyBag(): ComponentPropertyBag
    /**
     * Get the `alarm` repeat information, as an ECalComponentAlarmRepeat.
     */
    getRepeat(): ComponentAlarmRepeat | null
    /**
     * Get the `alarm` summary, as an #ECalComponentText.
     */
    getSummary(): ComponentText | null
    /**
     * Get the `alarm` trigger, as an #ECalComponentAlarmTrigger.
     */
    getTrigger(): ComponentAlarmTrigger | null
    /**
     * Get the `alarm` UID.
     */
    getUid(): string | null
    hasAttachments(): boolean
    hasAttendees(): boolean
    /**
     * Set the acknowledged time of the `alarm`. Use %NULL to unset it.
     */
    setAcknowledged(when?: ICalGLib.Time | null): void
    /**
     * Set the `alarm` action, as an #ECalComponentAlarmAction.
     */
    setAction(action: ComponentAlarmAction): void
    /**
     * Set the list of attachments, as a #GSList of an #ICalAttach.
     */
    setAttachments(attachments?: ICalGLib.Attach[] | null): void
    /**
     * Set the list of attendees, as a #GSList of an #ECalComponentAttendee.
     */
    setAttendees(attendees?: ComponentAttendee[] | null): void
    /**
     * Set the `alarm` description, as an #ECalComponentText.
     */
    setDescription(description?: ComponentText | null): void
    /**
     * Fill the `alarm` structure with the information from
     * the `component,` which should be of %I_CAL_VALARM_COMPONENT kind.
     */
    setFromComponent(component: ICalGLib.Component): void
    /**
     * Set the `alarm` repeat information, as an #ECalComponentAlarmRepeat.
     */
    setRepeat(repeat?: ComponentAlarmRepeat | null): void
    /**
     * Set the `alarm` summary, as an #ECalComponentText.
     */
    setSummary(summary?: ComponentText | null): void
    /**
     * Set the `alarm` trigger, as an #ECalComponentAlarmTrigger.
     */
    setTrigger(trigger?: ComponentAlarmTrigger | null): void
    /**
     * Set the `alarm` UID, or generates a new UID, if `uid` is %NULL or an empty string.
     */
    setUid(uid?: string | null): void
    /**
     * Set the acknowledged time of the `alarm`. Use %NULL to unset it.
     * The function assumes ownership of the `when`.
     */
    takeAcknowledged(when?: ICalGLib.Time | null): void
    static name: string
    static new(): ComponentAlarm
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): ComponentAlarm
    static newFromComponent(component: ICalGLib.Component): ComponentAlarm
}
class ComponentAlarmInstance {
    /* Methods of ECal-2.0.ECal.ComponentAlarmInstance */
    /**
     * Returns a newly allocated copy of `instance,` which should be freed with
     * e_cal_component_alarm_instance_free(), when no longer needed.
     */
    copy(): ComponentAlarmInstance
    getOccurEnd(): number
    getOccurStart(): number
    getRid(): string | null
    getTime(): number
    getUid(): string
    /**
     * Set the actual event occurrence end to which this `instance` corresponds.
     */
    setOccurEnd(occurEnd: number): void
    /**
     * Set the actual event occurrence start to which this `instance` corresponds.
     */
    setOccurStart(occurStart: number): void
    /**
     * Set the Recurrence ID of the component this `instance` was generated for.
     */
    setRid(rid?: string | null): void
    /**
     * Set the instance time, i.e. "5 minutes before the appointment".
     */
    setTime(instanceTime: number): void
    /**
     * Set the alarm UID.
     */
    setUid(uid: string): void
    static name: string
    static new(uid: string, instanceTime: number, occurStart: number, occurEnd: number): ComponentAlarmInstance
    constructor(uid: string, instanceTime: number, occurStart: number, occurEnd: number)
    /* Static methods and pseudo-constructors */
    static new(uid: string, instanceTime: number, occurStart: number, occurEnd: number): ComponentAlarmInstance
}
class ComponentAlarmRepeat {
    /* Methods of ECal-2.0.ECal.ComponentAlarmRepeat */
    copy(): ComponentAlarmRepeat
    /**
     * Returns the interval between repetitions of the `repeat,` as an #ICalDuration
     * object. This object is owned by `repeat` and should not be freed. It's valid until
     * the `repeat` is not freed or its interval changed with either e_cal_component_alarm_repeat_set_interval()
     * or e_cal_component_alarm_repeat_set_interval_seconds().
     */
    getInterval(): ICalGLib.Duration
    /**
     * Returns the interval between repetitions of the `repeat` in seconds.
     */
    getIntervalSeconds(): number
    getRepetitions(): number
    /**
     * Set the `interval` between repetitions of the `repeat`.
     */
    setInterval(interval: ICalGLib.Duration): void
    /**
     * Set the `interval_seconds` between repetitions of the `repeat`.
     */
    setIntervalSeconds(intervalSeconds: number): void
    /**
     * Set the `repetitions` count of the `repeat`.
     */
    setRepetitions(repetitions: number): void
    static name: string
    static new(repetitions: number, interval: ICalGLib.Duration): ComponentAlarmRepeat
    constructor(repetitions: number, interval: ICalGLib.Duration)
    /* Static methods and pseudo-constructors */
    static new(repetitions: number, interval: ICalGLib.Duration): ComponentAlarmRepeat
    static newSeconds(repetitions: number, intervalSeconds: number): ComponentAlarmRepeat
}
class ComponentAlarmTrigger {
    /* Methods of ECal-2.0.ECal.ComponentAlarmTrigger */
    /**
     * Returns a newly allocated copy of `trigger,` which should be freed with
     * e_cal_component_alarm_trigger_free(), when no longer needed.
     */
    copy(): ComponentAlarmTrigger
    /**
     * Fill `property` with information from `trigger`. The `property`
     * should be of kind %I_CAL_TRIGGER_PROPERTY.
     */
    fillProperty(property: ICalGLib.Property): /* property */ ICalGLib.Property
    /**
     * Returns the `trigger` absolute time for an absolute trigger, or %NULL, when
     * the `trigger` is a relative trigger. The object is owned by `trigger` and it's
     * valid until the `trigger` is freed or its absolute time changed.
     */
    getAbsoluteTime(): ICalGLib.Time | null
    /**
     * Converts information stored in `trigger` into an #ICalProperty
     * of %I_CAL_TRIGGER_PROPERTY kind. The caller is responsible to free
     * the returned object with g_object_unref(), when no longer needed.
     */
    getAsProperty(): ICalGLib.Property
    /**
     * Returns the `trigger` duration for a relative `trigger,` or %NULL, when
     * the `trigger` is an absolute trigger.
     */
    getDuration(): ICalGLib.Duration | null
    getKind(): ComponentAlarmTriggerKind
    getParameterBag(): ComponentParameterBag
    /**
     * Set the `trigegr` with the %E_CAL_COMPONENT_ALARM_TRIGGER_ABSOLUTE kind and
     * the `absolute_time` as the time of the trigger. The `absolute_time`
     * should be date/time (not date) in UTC.
     * 
     * To set a relative trigger use e_cal_component_alarm_trigger_set_relative().
     */
    setAbsolute(absoluteTime: ICalGLib.Time): void
    /**
     * Sets the `trigger` absolute time for an absolute trigger. The `absolute_time`
     * should be date/time (not date) in UTC.
     * 
     * The function does nothing, when the `trigger` is a relative trigger.
     */
    setAbsoluteTime(absoluteTime: ICalGLib.Time): void
    /**
     * Sets the `trigger` duration for a relative trigger. The function does nothing, when
     * the `trigger` is an absolute trigger. The object is owned by `trigger` and it's
     * valid until the `trigger` is freed or its relative duration changed.
     */
    setDuration(duration: ICalGLib.Duration): void
    /**
     * Fill the `trigger` structure with the information from
     * the `property,` which should be of %I_CAL_TRIGGER_PROPERTY kind.
     */
    setFromProperty(property: ICalGLib.Property): void
    /**
     * Set the `trigger` kind to `kind`. This works only for other than
     * the %E_CAL_COMPONENT_ALARM_TRIGGER_ABSOLUTE. To change the kind
     * from absolute to relative, or vice versa, use either
     * e_cal_component_alarm_trigger_set_relative() or
     * e_cal_component_alarm_trigger_set_absolute().
     */
    setKind(kind: ComponentAlarmTriggerKind): void
    /**
     * Set the `trigegr` with the given `kind` and `duration`. The `kind` can be any but
     * the %E_CAL_COMPONENT_ALARM_TRIGGER_ABSOLUTE.
     * To set an absolute trigger use e_cal_component_alarm_trigger_set_absolute().
     */
    setRelative(kind: ComponentAlarmTriggerKind, duration: ICalGLib.Duration): void
    static name: string
    /* Static methods and pseudo-constructors */
    static newAbsolute(absoluteTime: ICalGLib.Time): ComponentAlarmTrigger
    static newFromProperty(property: ICalGLib.Property): ComponentAlarmTrigger
    static newRelative(kind: ComponentAlarmTriggerKind, duration: ICalGLib.Duration): ComponentAlarmTrigger
}
class ComponentAlarms {
    /* Methods of ECal-2.0.ECal.ComponentAlarms */
    /**
     * Add a copy of `instance` into the list of instances. It is added
     * in no particular order.
     */
    addInstance(instance: ComponentAlarmInstance): void
    /**
     * Returns a newly allocated copy of `alarms,` which should be freed with
     * e_cal_component_alarms_free(), when no longer needed.
     */
    copy(): ComponentAlarms
    /**
     * The returned component is valid until the `alarms` is freed.
     */
    getComponent(): Component
    /**
     * The returned #GSList is owned by `alarms` and should not be modified.
     * It's valid until the `alarms` is freed or the list of instances is not
     * modified by other functions. The items are of type #ECalComponentAlarmInstance.
     */
    getInstances(): ComponentAlarmInstance[] | null
    /**
     * Remove the `instance` from the list of instances. If found, the `instance`
     * is also freed.
     */
    removeInstance(instance: ComponentAlarmInstance): boolean
    /**
     * Modifies the list of instances to copy of the given `instances`.
     */
    setInstances(instances?: ComponentAlarmInstance[] | null): void
    /**
     * Add the `instance` into the list of instances and assume ownership of it.
     * It is added in no particular order.
     */
    takeInstance(instance: ComponentAlarmInstance): void
    /**
     * Replaces the list of instances with the given `instances` and
     * assumes ownership of it. Neither the #GSList, nor its items, should
     * contain the same structures.
     */
    takeInstances(instances?: ComponentAlarmInstance[] | null): void
    static name: string
    static new(comp: Component): ComponentAlarms
    constructor(comp: Component)
    /* Static methods and pseudo-constructors */
    static new(comp: Component): ComponentAlarms
}
class ComponentAttendee {
    /* Methods of ECal-2.0.ECal.ComponentAttendee */
    /**
     * Returns a newly allocated copy of `attendee,` which should be freed with
     * e_cal_component_attendee_free(), when no longer needed.
     */
    copy(): ComponentAttendee
    /**
     * Fill `property` with information from `attendee`. The `property`
     * should be of kind %I_CAL_ATTENDEE_PROPERTY.
     */
    fillProperty(property: ICalGLib.Property): /* property */ ICalGLib.Property
    /**
     * Converts information stored in `attendee` into an #ICalProperty
     * of %I_CAL_ATTENDEE_PROPERTY kind. The caller is responsible to free
     * the returned object with g_object_unref(), when no longer needed.
     */
    getAsProperty(): ICalGLib.Property
    getCn(): string | null
    getCutype(): ICalGLib.ParameterCutype
    getDelegatedfrom(): string | null
    getDelegatedto(): string | null
    getLanguage(): string | null
    getMember(): string | null
    getParameterBag(): ComponentParameterBag
    getPartstat(): ICalGLib.ParameterPartstat
    getRole(): ICalGLib.ParameterRole
    getRsvp(): boolean
    getSentby(): string | null
    getValue(): string | null
    /**
     * Set the `attendee` common name (cn) parameter. The %NULL
     * and empty strings are treated as unset the value.
     */
    setCn(cn?: string | null): void
    /**
     * Set the `attendee` type, as an #ICalParameterCutype.
     */
    setCutype(cutype: ICalGLib.ParameterCutype): void
    /**
     * Set the `attendee` delegatedfrom parameter. The %NULL
     * and empty strings are treated as unset the value.
     */
    setDelegatedfrom(delegatedfrom?: string | null): void
    /**
     * Set the `attendee` delegatedto parameter. The %NULL
     * and empty strings are treated as unset the value.
     */
    setDelegatedto(delegatedto?: string | null): void
    /**
     * Fill the `attendee` structure with the information from
     * the `property,` which should be of %I_CAL_ATTENDEE_PROPERTY kind.
     */
    setFromProperty(property: ICalGLib.Property): void
    /**
     * Set the `attendee` language parameter. The %NULL
     * and empty strings are treated as unset the value.
     */
    setLanguage(language?: string | null): void
    /**
     * Set the `attendee` member parameter. The %NULL
     * and empty strings are treated as unset the value.
     */
    setMember(member?: string | null): void
    /**
     * Set the `attendee` status, as an #ICalParameterPartstat.
     */
    setPartstat(partstat: ICalGLib.ParameterPartstat): void
    /**
     * Set the `attendee` role, as an #ICalParameterRole.
     */
    setRole(role: ICalGLib.ParameterRole): void
    /**
     * Set the `attendee` RSVP.
     */
    setRsvp(rsvp: boolean): void
    /**
     * Set the `attendee` sentby parameter. The %NULL
     * and empty strings are treated as unset the value.
     */
    setSentby(sentby?: string | null): void
    /**
     * Set the `attendee` URI, usually of "mailto:email" form. The %NULL
     * and empty strings are treated as unset the value.
     */
    setValue(value?: string | null): void
    static name: string
    static new(): ComponentAttendee
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): ComponentAttendee
    static newFromProperty(property: ICalGLib.Property): ComponentAttendee
    static newFull(value: string | null, member: string | null, cutype: ICalGLib.ParameterCutype, role: ICalGLib.ParameterRole, partstat: ICalGLib.ParameterPartstat, rsvp: boolean, delegatedfrom?: string | null, delegatedto?: string | null, sentby?: string | null, cn?: string | null, language?: string | null): ComponentAttendee
}
abstract class ComponentClass {
    static name: string
}
class ComponentDateTime {
    /* Methods of ECal-2.0.ECal.ComponentDateTime */
    /**
     * Creates a new copy of `dt`. The returned structure should be freed
     * with e_cal_component_datetime_free() when no longer needed.
     */
    copy(): ComponentDateTime
    /**
     * Returns the TZID stored with the `dt`. The string is owned by `dt` and
     * it's valid until the `dt` is freed or its TZID overwritten. It never
     * returns an empty string, it returns either set TZID parameter value
     * or %NULL, when none is set.
     */
    getTzid(): string | null
    /**
     * Returns the value stored with the `dt`. The object is owned by `dt` and
     * it's valid until the `dt` is freed or its value overwritten.
     */
    getValue(): ICalGLib.Time
    /**
     * Sets both `value` and `tzid` in one call. Use e_cal_component_datetime_set_value()
     * and e_cal_component_datetime_set_tzid() to set them separately.
     */
    set(value: ICalGLib.Time, tzid?: string | null): void
    /**
     * Sets the `tzid` of the `dt`. Any previously set TZID is freed.
     * An empty string or a %NULL as `tzid` is treated as none TZID.
     */
    setTzid(tzid?: string | null): void
    /**
     * Sets the `value` of the `dt`. Any previously set value is freed.
     */
    setValue(value: ICalGLib.Time): void
    /**
     * Sets the `tzid` of the `dt` and assumes ownership of `tzid`. Any previously
     * set TZID is freed. An empty string or a %NULL as `tzid` is treated as none TZID.
     */
    takeTzid(tzid?: string | null): void
    /**
     * Sets the `value` of the `dt` and assumes ownership of the `value`.
     * Any previously set value is freed.
     */
    takeValue(value: ICalGLib.Time): void
    static name: string
    static new(value: ICalGLib.Time, tzid?: string | null): ComponentDateTime
    constructor(value: ICalGLib.Time, tzid?: string | null)
    /* Static methods and pseudo-constructors */
    static new(value: ICalGLib.Time, tzid?: string | null): ComponentDateTime
    static newTake(value: ICalGLib.Time, tzid?: string | null): ComponentDateTime
}
class ComponentId {
    /* Methods of ECal-2.0.ECal.ComponentId */
    /**
     * Returns a newly allocated copy of `id,` which should be freed with
     * e_cal_component_id_free().
     */
    copy(): ComponentId
    /**
     * Compares two #ECalComponentId structs for equality.
     */
    equal(id2: ComponentId): boolean
    getRid(): string | null
    getUid(): string
    /**
     * Generates a hash value for `id`.
     */
    hash(): number
    /**
     * Sets the RECURRENCE-ID part of the `id`. The `rid` can be %NULL
     * or an empty string, where both are treated as %NULL, which
     * means the `id` has not RECURRENCE-ID.
     */
    setRid(rid?: string | null): void
    /**
     * Sets the UID part of the `id`.
     */
    setUid(uid: string): void
    static name: string
    static new(uid: string, rid?: string | null): ComponentId
    constructor(uid: string, rid?: string | null)
    /* Static methods and pseudo-constructors */
    static new(uid: string, rid?: string | null): ComponentId
    static newTake(uid: string, rid?: string | null): ComponentId
}
class ComponentOrganizer {
    /* Methods of ECal-2.0.ECal.ComponentOrganizer */
    /**
     * Returns a newly allocated copy of `organizer,` which should be freed with
     * e_cal_component_organizer_free(), when no longer needed.
     */
    copy(): ComponentOrganizer
    /**
     * Fill `property` with information from `organizer`. The `property`
     * should be of kind %I_CAL_ORGANIZER_PROPERTY.
     */
    fillProperty(property: ICalGLib.Property): /* property */ ICalGLib.Property
    /**
     * Converts information stored in `organizer` into an #ICalProperty
     * of %I_CAL_ORGANIZER_PROPERTY kind. The caller is responsible to free
     * the returned object with g_object_unref(), when no longer needed.
     */
    getAsProperty(): ICalGLib.Property
    getCn(): string | null
    getLanguage(): string | null
    getParameterBag(): ComponentParameterBag
    getSentby(): string | null
    getValue(): string | null
    /**
     * Set the `organizer` common name (cn) parameter. The %NULL
     * and empty strings are treated as unset the value.
     */
    setCn(cn?: string | null): void
    /**
     * Fill the `organizer` structure with the information from
     * the `property,` which should be of %I_CAL_ORGANIZER_PROPERTY kind.
     */
    setFromProperty(property: ICalGLib.Property): void
    /**
     * Set the `organizer` language parameter. The %NULL
     * and empty strings are treated as unset the value.
     */
    setLanguage(language?: string | null): void
    /**
     * Set the `organizer` sentby parameter. The %NULL
     * and empty strings are treated as unset the value.
     */
    setSentby(sentby?: string | null): void
    /**
     * Set the `organizer` URI, usually of "mailto:email" form. The %NULL
     * and empty strings are treated as unset the value.
     */
    setValue(value?: string | null): void
    static name: string
    static new(): ComponentOrganizer
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): ComponentOrganizer
    static newFromProperty(property: ICalGLib.Property): ComponentOrganizer
    static newFull(value?: string | null, sentby?: string | null, cn?: string | null, language?: string | null): ComponentOrganizer
}
class ComponentParameterBag {
    /* Methods of ECal-2.0.ECal.ComponentParameterBag */
    /**
     * Adds a copy of the `param` into the `bag`.
     */
    add(param: ICalGLib.Parameter): void
    /**
     * Assigns content of the `src_bag` into the `bag`.
     */
    assign(srcBag: ComponentParameterBag): void
    /**
     * Removes all parameters from the `bag,` thus it doesn't contain any
     * parameter after this function returns.
     */
    clear(): void
    /**
     * Returns a newly allocated copy of `bag,` which should be freed with
     * e_cal_component_parameter_bag_free(), when no longer needed.
     */
    copy(): ComponentParameterBag
    /**
     * Adds all the stored parameters in the `bag` to the `property`.
     * The function replaces any existing parameter with the new value,
     * if any such exists. Otherwise the parameter is added.
     */
    fillProperty(property: ICalGLib.Property): void
    /**
     * Returns the #ICalParameter at the given `index`. If the `index` is
     * out of bounds (not lower than e_cal_component_parameter_bag_get_count()),
     * then %NULL is returned.
     * 
     * The returned parameter is owned by the `bag` and should not be freed
     * by the caller.
     */
    get(index: number): ICalGLib.Parameter | null
    getCount(): number
    getFirstByKind(kind: ICalGLib.ParameterKind): number
    /**
     * Removes the #ICalParameter at the given `index`. If the `index` is
     * out of bounds (not lower than e_cal_component_parameter_bag_get_count()),
     * then the function does nothing.
     */
    remove(index: number): void
    /**
     * Removes the first or all (depending on the `all)` parameters of the given `kind`.
     */
    removeByKind(kind: ICalGLib.ParameterKind, all: boolean): number
    /**
     * Fills the `bag` with parameters from the `property,` for which the `func`
     * returned %TRUE. When the `func` is %NULL, all the parameters are included.
     * The `bag` content is cleared before any parameter is added.
     */
    setFromProperty(property: ICalGLib.Property): void
    /**
     * Adds the `param` into the `bag` and assumes ownership of the `param`.
     */
    take(param: ICalGLib.Parameter): void
    static name: string
    static new(): ComponentParameterBag
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): ComponentParameterBag
    static newFromProperty(property: ICalGLib.Property): ComponentParameterBag
}
class ComponentPeriod {
    /* Methods of ECal-2.0.ECal.ComponentPeriod */
    copy(): ComponentPeriod
    /**
     * Returns the duration of the `period`. This can be called only on `period`
     * objects of kind %E_CAL_COMPONENT_PERIOD_DURATION.
     * The returned #ICalDuration object is owned by `period` and should not
     * be freed. It's valid until the `period` is freed or its duration changed.
     */
    getDuration(): ICalGLib.Duration
    /**
     * Returns the end of the `period`. This can be called only on `period`
     * objects of kind %E_CAL_COMPONENT_PERIOD_DATETIME. The end time can
     * be a null-time, in which case the `period` corresponds to a single
     * date/date-time value, not to a period.
     * 
     * The returned #ICalTime object is owned by `period` and should not
     * be freed. It's valid until the `period` is freed or its end time changed.
     */
    getEnd(): ICalGLib.Time | null
    /**
     * Returns kind of the `period,` one of #ECalComponentPeriodKind. Depending
     * on it either e_cal_component_period_get_end()/e_cal_component_period_set_end()
     * or e_cal_component_period_get_duration()/e_cal_component_period_set_duration()
     * can be used. The kind of an existing `period` canbe changed with
     * e_cal_component_period_set_datetime_full() and e_cal_component_period_set_duration_full().
     */
    getKind(): ComponentPeriodKind
    /**
     * Returns the start of the `period`. The returned #ICalTime object
     * is owned by `period` and should not be freed. It's valid until the `period`
     * is freed or its start time changed.
     */
    getStart(): ICalGLib.Time
    /**
     * Set the kind of `period` to be %E_CAL_COMPONENT_PERIOD_DATETIME
     * and fills the content with `start` and `end`.
     */
    setDatetimeFull(start: ICalGLib.Time, end?: ICalGLib.Time | null): void
    /**
     * Set the duration of the `period`. This can be called only on `period`
     * objects of kind %E_CAL_COMPONENT_PERIOD_DURATION.
     */
    setDuration(duration: ICalGLib.Duration): void
    /**
     * Set the kind of `period` to be %E_CAL_COMPONENT_PERIOD_DURATION
     * and fills the content with `start` and `duration`.
     */
    setDurationFull(start: ICalGLib.Time, duration: ICalGLib.Duration): void
    /**
     * Set the end of the `period`. This can be called only on `period`
     * objects of kind %E_CAL_COMPONENT_PERIOD_DATETIME.
     */
    setEnd(end?: ICalGLib.Time | null): void
    /**
     * Set the `start` of the `period`. This can be called on any kind of the `period`.
     */
    setStart(start: ICalGLib.Time): void
    static name: string
    /* Static methods and pseudo-constructors */
    static newDatetime(start: ICalGLib.Time, end?: ICalGLib.Time | null): ComponentPeriod
    static newDuration(start: ICalGLib.Time, duration: ICalGLib.Duration): ComponentPeriod
}
class ComponentPrivate {
    static name: string
}
class ComponentPropertyBag {
    /* Methods of ECal-2.0.ECal.ComponentPropertyBag */
    /**
     * Adds a copy of the `prop` into the `bag`.
     */
    add(prop: ICalGLib.Property): void
    /**
     * Assigns content of the `src_bag` into the `bag`.
     */
    assign(srcBag: ComponentPropertyBag): void
    /**
     * Removes all properties from the `bag,` thus it doesn't contain any
     * property after this function returns.
     */
    clear(): void
    /**
     * Returns a newly allocated copy of `bag,` which should be freed with
     * e_cal_component_property_bag_free(), when no longer needed.
     */
    copy(): ComponentPropertyBag
    /**
     * Adds all the stored properties in the `bag` to the `component`.
     * The function doesn't verify whether the `component` contains
     * the same property already.
     */
    fillComponent(component: ICalGLib.Component): void
    /**
     * Returns the #ICalProperty at the given `index`. If the `index` is
     * out of bounds (not lower than e_cal_component_property_bag_get_count()),
     * then %NULL is returned.
     * 
     * The returned property is owned by the `bag` and should not be freed
     * by the caller.
     */
    get(index: number): ICalGLib.Property | null
    getCount(): number
    getFirstByKind(kind: ICalGLib.PropertyKind): number
    /**
     * Removes the #ICalProperty at the given `index`. If the `index` is
     * out of bounds (not lower than e_cal_component_property_bag_get_count()),
     * then the function does nothing.
     */
    remove(index: number): void
    /**
     * Removes the first or all (depending on the `all)` properties of the given `kind`.
     */
    removeByKind(kind: ICalGLib.PropertyKind, all: boolean): number
    /**
     * Fills the `bag` with properties from the `component,` for which the `func`
     * returned %TRUE. When the `func` is %NULL, all the properties are included.
     * The `bag` content is cleared before any property is added.
     */
    setFromComponent(component: ICalGLib.Component): void
    /**
     * Adds the `prop` into the `bag` and assumes ownership of the `prop`.
     */
    take(prop: ICalGLib.Property): void
    static name: string
    static new(): ComponentPropertyBag
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): ComponentPropertyBag
    static newFromComponent(component: ICalGLib.Component): ComponentPropertyBag
}
class ComponentRange {
    /* Methods of ECal-2.0.ECal.ComponentRange */
    copy(): ComponentRange
    /**
     * Returns the date/time of the `range`. The returned #ECalComponentDateTime
     * is owned by `range` and should not be freed. It's valid until the `range`
     * is freed or its date/time changed.
     */
    getDatetime(): ComponentDateTime
    getKind(): ComponentRangeKind
    /**
     * Set the date/time part of the `range`.
     */
    setDatetime(datetime: ComponentDateTime): void
    /**
     * Set the `kind` of the `range`.
     */
    setKind(kind: ComponentRangeKind): void
    static name: string
    static new(kind: ComponentRangeKind, datetime: ComponentDateTime): ComponentRange
    constructor(kind: ComponentRangeKind, datetime: ComponentDateTime)
    /* Static methods and pseudo-constructors */
    static new(kind: ComponentRangeKind, datetime: ComponentDateTime): ComponentRange
}
class ComponentText {
    /* Methods of ECal-2.0.ECal.ComponentText */
    copy(): ComponentText
    getAltrep(): string
    getValue(): string
    /**
     * Set the `altrep` as the alternate representation URI of the `text`.
     */
    setAltrep(altrep?: string | null): void
    /**
     * Set the `value` as the description string of the `text`.
     */
    setValue(value?: string | null): void
    static name: string
    static new(value?: string | null, altrep?: string | null): ComponentText
    constructor(value?: string | null, altrep?: string | null)
    /* Static methods and pseudo-constructors */
    static new(value?: string | null, altrep?: string | null): ComponentText
}
class ReminderData {
    /* Methods of ECal-2.0.ECal.ReminderData */
    /**
     * Copies given #EReminderData structure. When the `rd` is %NULL, simply returns %NULL as well.
     */
    copy(): ReminderData | null
    /**
     * Frees previously allocated #EReminderData structure with e_reminder_data_new()
     * or e_reminder_data_copy(). The function does nothing when `rd` is %NULL.
     */
    free(): void
    getComponent(): Component
    getInstance(): ComponentAlarmInstance
    getSourceUid(): string
    /**
     * Set an #ECalComponent `component` as associated with this `rd`.
     * The `rd` creates a copy of the `component`.
     */
    setComponent(component: Component): void
    /**
     * Set an #ECalComponentAlarmInstance `instance` as associated with this `rd`.
     * The `rd` creates a copy of the `instance`.
     */
    setInstance(instance: ComponentAlarmInstance): void
    /**
     * Set an #ESource UID for `rd`.
     */
    setSourceUid(sourceUid: string): void
    static name: string
    static new(sourceUid: string, component: Component, instance: ComponentAlarmInstance): ReminderData
    constructor(sourceUid: string, component: Component, instance: ComponentAlarmInstance)
    /* Static methods and pseudo-constructors */
    static new(sourceUid: string, component: Component, instance: ComponentAlarmInstance): ReminderData
}
abstract class ReminderWatcherClass {
    /* Fields of ECal-2.0.ECal.ReminderWatcherClass */
    readonly parentClass: GObject.ObjectClass
    readonly scheduleTimer: (watcher: ReminderWatcher, atTime: number) => void
    readonly formatTime: (watcher: ReminderWatcher, rd: ReminderData, itt: ICalGLib.Time, inoutBuffer: string, bufferSize: number) => void
    readonly changed: (watcher: ReminderWatcher) => void
    readonly calClientConnect: (watcher: ReminderWatcher, source: EDataServer.Source, sourceType: ClientSourceType, waitForConnectedSeconds: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null) => void
    readonly reserved: object[]
    static name: string
}
class ReminderWatcherPrivate {
    static name: string
}
abstract class TimezoneCacheInterface {
    /* Fields of ECal-2.0.ECal.TimezoneCacheInterface */
    readonly tzcacheAddTimezone: (cache: TimezoneCache, zone: ICalGLib.Timezone) => void
    readonly timezoneAdded: (cache: TimezoneCache, zone: ICalGLib.Timezone) => void
    readonly reservedSignals: object[]
    static name: string
}
}
export default ECal;