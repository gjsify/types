/*
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/sammydre/ts-for-gjs
 */
/**
 * ECal-2.0
 */

import type * as Gjs from './Gjs';
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
function isodate_from_time_t(t: number): string
function match_tzid(tzid: string): string | null
function recur_describe_recurrence(icalcomp: ICalGLib.Component, week_start_day: GLib.DateWeekday, flags: number): string | null
function recur_describe_recurrence_ex(icalcomp: ICalGLib.Component, week_start_day: GLib.DateWeekday, flags: number, datetime_fmt_func?: RecurFormatDateTimeFunc | null): string | null
function recur_ensure_end_dates(comp: Component, refresh: boolean, tz_cb: RecurResolveTimezoneCb, cancellable?: Gio.Cancellable | null): boolean
function recur_generate_instances_sync(icalcomp: ICalGLib.Component, interval_start: ICalGLib.Time, interval_end: ICalGLib.Time, default_timezone: ICalGLib.Timezone, cancellable?: Gio.Cancellable | null): boolean
function recur_get_localized_nth(nth: number): string
function recur_obtain_enddate(ir: ICalGLib.Recurrence, prop: ICalGLib.Property, zone: ICalGLib.Timezone, convert_end_date: boolean): number
function system_timezone_get_location(): string | null
function time_add_day(time: number, days: number): number
function time_add_day_with_zone(time: number, days: number, zone: ICalGLib.Timezone): number
function time_add_month_with_zone(time: number, months: number, zone: ICalGLib.Timezone): number
function time_add_week(time: number, weeks: number): number
function time_add_week_with_zone(time: number, weeks: number, zone: ICalGLib.Timezone): number
function time_day_begin(t: number): number
function time_day_begin_with_zone(time: number, zone: ICalGLib.Timezone): number
function time_day_end(t: number): number
function time_day_end_with_zone(time: number, zone: ICalGLib.Timezone): number
function time_day_of_week(day: number, month: number, year: number): number
function time_day_of_year(day: number, month: number, year: number): number
function time_days_in_month(year: number, month: number): number
function time_from_isodate(str: string): number
function time_is_leap_year(year: number): boolean
function time_leap_years_up_to(year: number): number
function time_month_begin_with_zone(time: number, zone: ICalGLib.Timezone): number
function time_to_gdate_with_zone(date: GLib.Date, time: number, zone?: ICalGLib.Timezone | null): void
function time_week_begin_with_zone(time: number, week_start_day: number, zone: ICalGLib.Timezone): number
function time_year_begin_with_zone(time: number, zone: ICalGLib.Timezone): number
function util_add_timezones_from_component(vcal_comp: ICalGLib.Component, icalcomp: ICalGLib.Component): void
function util_clamp_vtimezone(vtimezone: ICalGLib.Component, from: ICalGLib.Time, to?: ICalGLib.Time | null): /* vtimezone */ ICalGLib.Component
function util_clamp_vtimezone_by_component(vtimezone: ICalGLib.Component, component: ICalGLib.Component): /* vtimezone */ ICalGLib.Component
function util_component_dup_x_property(icalcomp: ICalGLib.Component, x_name: string): string | null
function util_component_find_x_property(icalcomp: ICalGLib.Component, x_name: string): ICalGLib.Property | null
function util_component_get_recurid_as_string(icalcomp: ICalGLib.Component): string | null
function util_component_has_alarms(icalcomp: ICalGLib.Component): boolean
function util_component_has_attendee(icalcomp: ICalGLib.Component): boolean
function util_component_has_organizer(icalcomp: ICalGLib.Component): boolean
function util_component_has_property(icalcomp: ICalGLib.Component, prop_kind: ICalGLib.PropertyKind): boolean
function util_component_has_rdates(icalcomp: ICalGLib.Component): boolean
function util_component_has_recurrences(icalcomp: ICalGLib.Component): boolean
function util_component_has_rrules(icalcomp: ICalGLib.Component): boolean
function util_component_has_x_property(icalcomp: ICalGLib.Component, x_name: string): boolean
function util_component_is_instance(icalcomp: ICalGLib.Component): boolean
function util_component_remove_property_by_kind(icalcomp: ICalGLib.Component, kind: ICalGLib.PropertyKind, all: boolean): number
function util_component_remove_x_property(icalcomp: ICalGLib.Component, x_name: string): boolean
function util_component_set_x_property(icalcomp: ICalGLib.Component, x_name: string, value?: string | null): void
function util_conflict_resolution_to_operation_flags(conflict_resolution: EDataServer.ConflictResolution): number
function util_construct_instance(icalcomp: ICalGLib.Component, rid: ICalGLib.Time): ICalGLib.Component | null
function util_copy_timezone(zone: ICalGLib.Timezone): ICalGLib.Timezone
function util_generate_alarms_for_comp(comp: Component, start: number, end: number, omit: ComponentAlarmAction, resolve_tzid: RecurResolveTimezoneCb, default_timezone: ICalGLib.Timezone): ComponentAlarms | null
function util_generate_alarms_for_list(comps: Component[], start: number, end: number, omit: ComponentAlarmAction, resolve_tzid: RecurResolveTimezoneCb, default_timezone: ICalGLib.Timezone): [ /* returnType */ number, /* comp_alarms */ ComponentAlarms[] ]
function util_get_component_occur_times(comp: Component, tz_cb: RecurResolveTimezoneCb, default_timezone: ICalGLib.Timezone, kind: ICalGLib.ComponentKind): [ /* out_start */ number, /* out_end */ number ]
function util_get_system_timezone(): ICalGLib.Timezone | null
function util_get_system_timezone_location(): string | null
function util_icaltime_to_tm(itt: ICalGLib.Time): object | null
function util_icaltime_to_tm_with_zone(itt: ICalGLib.Time, from_zone: ICalGLib.Timezone, to_zone: ICalGLib.Timezone): object | null
function util_init_recur_task_sync(vtodo: ICalGLib.Component, cal_client: Client, cancellable?: Gio.Cancellable | null): boolean
function util_inline_local_attachments_sync(component: ICalGLib.Component, cancellable?: Gio.Cancellable | null): boolean
function util_is_first_instance(comp: Component, rid: ICalGLib.Time, tz_cb: RecurResolveTimezoneCb): boolean
function util_mark_task_complete_sync(vtodo: ICalGLib.Component, completed_time: number, cal_client: Client, cancellable?: Gio.Cancellable | null): boolean
function util_new_component(kind: ICalGLib.ComponentKind): ICalGLib.Component
function util_new_top_level(): ICalGLib.Component
function util_normalize_rrule_until_value(icalcomp: ICalGLib.Component, ttuntil: ICalGLib.Time, tz_cb: RecurResolveTimezoneCb): void
function util_operation_flags_to_conflict_resolution(flags: number): EDataServer.ConflictResolution
function util_parse_ics_file(filename: string): ICalGLib.Component | null
function util_parse_ics_string(string: string): ICalGLib.Component | null
function util_priority_from_string(string: string): number
function util_priority_to_string(priority: number): string
function util_property_has_parameter(prop: ICalGLib.Property, param_kind: ICalGLib.ParameterKind): boolean
function util_remove_instances(icalcomp: ICalGLib.Component, rid: ICalGLib.Time, mod: ObjModType): void
function util_remove_instances_ex(icalcomp: ICalGLib.Component, rid: ICalGLib.Time, mod: ObjModType, tz_cb: RecurResolveTimezoneCb): void
function util_seconds_to_string(seconds: number): string
function util_set_alarm_acknowledged(component: Component, auid: string, when: number): boolean
function util_split_at_instance(icalcomp: ICalGLib.Component, rid: ICalGLib.Time, master_dtstart?: ICalGLib.Time | null): ICalGLib.Component | null
function util_split_at_instance_ex(icalcomp: ICalGLib.Component, rid: ICalGLib.Time, master_dtstart: ICalGLib.Time | null, tz_cb: RecurResolveTimezoneCb): ICalGLib.Component | null
function util_tm_to_icaltime(tm: object | null, is_date: boolean): ICalGLib.Time
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
    (itt: ICalGLib.Time, buffer: string, buffer_size: number): void
}
/**
 * Callback used by e_cal_recur_generate_instances_sync(), called
 * for each instance of a (recurring) component within given time range.
 */
interface RecurInstanceCb {
    (icomp: ICalGLib.Component, instance_start: ICalGLib.Time, instance_end: ICalGLib.Time, cancellable?: Gio.Cancellable | null): boolean
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
    add_timezone(zone: ICalGLib.Timezone): void
    /**
     * Obtains an #ICalTimezone by its TZID string.  If no match is found,
     * the function returns %NULL.  The returned #ICalTimezone is owned by
     * the `cache` and should not be modified or freed.
     */
    get_timezone(tzid: string): ICalGLib.Timezone | null
    /**
     * Returns a list of #ICalTimezone instances that were explicitly added to
     * the `cache` through e_timezone_cache_add_timezone().  In particular, any
     * built-in time zone data that e_timezone_cache_get_timezone() may use to
     * match a TZID string is excluded from the returned list.
     * 
     * Free the returned list with g_list_free().  The list elements are owned
     * by the `cache` and should not be modified or freed.
     */
    list_timezones(): ICalGLib.Timezone[]
    /* Virtual methods of ECal-2.0.ECal.TimezoneCache */
    vfunc_timezone_added(zone: ICalGLib.Timezone): void
    vfunc_tzcache_add_timezone(zone: ICalGLib.Timezone): void
    /* Signals of ECal-2.0.ECal.TimezoneCache */
    /**
     * Emitted when a new #icaltimezone is added to `cache`.
     */
    connect(sigName: "timezone-added", callback: (($obj: TimezoneCache, zone: ICalGLib.Timezone) => void)): number
    connect_after(sigName: "timezone-added", callback: (($obj: TimezoneCache, zone: ICalGLib.Timezone) => void)): number
    emit(sigName: "timezone-added", zone: ICalGLib.Timezone): void
    static name: string
}
interface Client_ConstructProps extends EDataServer.Client_ConstructProps {
    /* Constructor properties of ECal-2.0.ECal.Client */
    default_timezone?: ICalGLib.Timezone
    source_type?: ClientSourceType
}
class Client {
    /* Properties of ECal-2.0.ECal.Client */
    default_timezone: ICalGLib.Timezone
    /* Properties of EDataServer-1.2.EDataServer.Client */
    /**
     * The capabilities of this client
     */
    readonly capabilities: object
    /**
     * The main loop context in which notifications for
     * this client will be delivered.
     */
    readonly main_context: GLib.MainContext
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
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of ECal-2.0.ECal.Client */
    /**
     * Add a VTIMEZONE object to the given calendar client.
     * The call is finished by e_cal_client_add_timezone_finish() from
     * the `callback`.
     */
    add_timezone(zone: ICalGLib.Timezone, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes previous call of e_cal_client_add_timezone().
     */
    add_timezone_finish(result: Gio.AsyncResult): boolean
    /**
     * Add a VTIMEZONE object to the given calendar client.
     */
    add_timezone_sync(zone: ICalGLib.Timezone, cancellable?: Gio.Cancellable | null): boolean
    /**
     * Checks if a calendar supports only one alarm per component.
     */
    check_one_alarm_only(): boolean
    /**
     * Checks whether a calendar requires organizer to accept their attendance to
     * meetings.
     */
    check_organizer_must_accept(): boolean
    /**
     * Checks if a calendar forces organizers of meetings to be also attendees.
     */
    check_organizer_must_attend(): boolean
    /**
     * Checks if the calendar has a master object for recurrences.
     */
    check_recurrences_no_master(): boolean
    /**
     * Checks whether the calendar saves schedules.
     */
    check_save_schedules(): boolean
    /**
     * Requests the calendar backend to create the object specified by the `icalcomp`
     * argument. Some backends would assign a specific UID to the newly created object,
     * but this function does not modify the original `icalcomp` if its UID changes.
     * The call is finished by e_cal_client_create_object_finish() from
     * the `callback`.
     */
    create_object(icalcomp: ICalGLib.Component, opflags: OperationFlags, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes previous call of e_cal_client_create_object() and
     * sets `out_uid` to newly assigned UID for the created object.
     * This `out_uid` should be freed with g_free().
     */
    create_object_finish(result: Gio.AsyncResult): [ /* returnType */ boolean, /* out_uid */ string | null ]
    /**
     * Requests the calendar backend to create the object specified by the
     * `icalcomp` argument. Some backends would assign a specific UID to the newly
     * created object, in those cases that UID would be returned in the `out_uid`
     * argument. This function does not modify the original `icalcomp` if its UID
     * changes.  Returned `out_uid` should be freed with g_free().
     */
    create_object_sync(icalcomp: ICalGLib.Component, opflags: OperationFlags, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* out_uid */ string | null ]
    /**
     * Requests the calendar backend to create the objects specified by the `icalcomps`
     * argument. Some backends would assign a specific UID to the newly created object,
     * but this function does not modify the original `icalcomps` if their UID changes.
     * The call is finished by e_cal_client_create_objects_finish() from
     * the `callback`.
     */
    create_objects(icalcomps: ICalGLib.Component[], opflags: OperationFlags, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes previous call of e_cal_client_create_objects() and
     * sets `out_uids` to newly assigned UIDs for the created objects.
     * This `out_uids` should be freed with e_client_util_free_string_slist().
     */
    create_objects_finish(result: Gio.AsyncResult): [ /* returnType */ boolean, /* out_uids */ string[] | null ]
    /**
     * Requests the calendar backend to create the objects specified by the
     * `icalcomps` argument. Some backends would assign a specific UID to the
     * newly created objects, in those cases these UIDs would be returned in
     * the `out_uids` argument. This function does not modify the original
     * `icalcomps` if their UID changes.  Returned `out_uids` should be freed
     * with e_client_util_free_string_slist().
     */
    create_objects_sync(icalcomps: ICalGLib.Component[], opflags: OperationFlags, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* out_uids */ string[] | null ]
    /**
     * Discards alarm `auid` from a given component identified by `uid` and `rid`.
     * The call is finished by e_cal_client_discard_alarm_finish() from
     * the `callback`.
     */
    discard_alarm(uid: string, rid: string | null, auid: string, opflags: OperationFlags, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes previous call of e_cal_client_discard_alarm().
     */
    discard_alarm_finish(result: Gio.AsyncResult): boolean
    /**
     * Discards alarm `auid` from a given component identified by `uid` and `rid`.
     */
    discard_alarm_sync(uid: string, rid: string | null, auid: string, opflags: OperationFlags, cancellable?: Gio.Cancellable | null): boolean
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
    generate_instances(start: number, end: number, cancellable: Gio.Cancellable | null, cb: RecurInstanceCb): void
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
    generate_instances_for_object(icalcomp: ICalGLib.Component, start: number, end: number, cancellable: Gio.Cancellable | null, cb: RecurInstanceCb): void
    /**
     * Does a combination of e_cal_client_get_object_list() and
     * e_cal_recur_generate_instances_sync(), like
     * e_cal_client_generate_instances_sync(), but for a single object.
     * 
     * The callback function should do a g_object_ref() of the calendar component
     * it gets passed if it intends to keep it around, since it will be unref'ed
     * as soon as the callback returns.
     */
    generate_instances_for_object_sync(icalcomp: ICalGLib.Component, start: number, end: number, cancellable: Gio.Cancellable | null, cb: RecurInstanceCb): void
    /**
     * Does a combination of e_cal_client_get_object_list() and
     * e_cal_recur_generate_instances_sync().
     * 
     * The callback function should do a g_object_ref() of the calendar component
     * it gets passed if it intends to keep it around, since it will be unreffed
     * as soon as the callback returns.
     */
    generate_instances_sync(start: number, end: number, cancellable: Gio.Cancellable | null, cb: RecurInstanceCb): void
    /**
     * Queries a calendar for a specified component's object attachment uris.
     * The call is finished by e_cal_client_get_attachment_uris_finish() from
     * the `callback`.
     */
    get_attachment_uris(uid: string, rid?: string | null, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes previous call of e_cal_client_get_attachment_uris() and
     * sets `out_attachment_uris` to uris for component's attachments.
     * The list should be freed with e_client_util_free_string_slist().
     */
    get_attachment_uris_finish(result: Gio.AsyncResult): [ /* returnType */ boolean, /* out_attachment_uris */ string[] ]
    /**
     * Queries a calendar for a specified component's object attachment URIs.
     * The list should be freed with e_client_util_free_string_slist().
     */
    get_attachment_uris_sync(uid: string, rid?: string | null, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* out_attachment_uris */ string[] ]
    /**
     * Gets a calendar component as an iCalendar string, with a toplevel
     * VCALENDAR component and all VTIMEZONEs needed for the component.
     */
    get_component_as_string(icalcomp: ICalGLib.Component): string | null
    /**
     * Retrives an #ICalComponent from the backend that contains the default
     * values for properties needed. The call is finished
     * by e_cal_client_get_default_object_finish() from the `callback`.
     */
    get_default_object(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes previous call of e_cal_client_get_default_object() and
     * sets `out_icalcomp` to an #ICalComponent from the backend that contains
     * the default values for properties needed. This `out_icalcomp` should be
     * freed with g_object_unref(), when no longer needed.
     */
    get_default_object_finish(result: Gio.AsyncResult): [ /* returnType */ boolean, /* out_icalcomp */ ICalGLib.Component ]
    /**
     * Retrives an #ICalComponent from the backend that contains the default
     * values for properties needed. This `out_icalcomp` should be freed with
     * g_object_unref(), when no longer needed.
     */
    get_default_object_sync(cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* out_icalcomp */ ICalGLib.Component ]
    /**
     * Returns the default timezone previously set with
     * e_cal_client_set_default_timezone().  The returned pointer is owned by
     * the `client` and should not be freed.
     */
    get_default_timezone(): ICalGLib.Timezone
    /**
     * Begins retrieval of free/busy information from the calendar server
     * as a list of #ECalComponent-s. Connect to "free-busy-data" signal
     * to receive chunks of free/busy components.
     * The call is finished by e_cal_client_get_free_busy_finish() from
     * the `callback`.
     */
    get_free_busy(start: number, end: number, users: string[], cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes previous call of e_cal_client_get_free_busy().
     * The `out_freebusy` contains all VFREEBUSY #ECalComponent-s, which could be also
     * received by "free-busy-data" signal. The client is responsible to do a merge of
     * the components between this complete list and those received through the signal.
     */
    get_free_busy_finish(result: Gio.AsyncResult): [ /* returnType */ boolean, /* out_freebusy */ Component[] ]
    /**
     * Gets free/busy information from the calendar server.
     * The `out_freebusy` contains all VFREEBUSY #ECalComponent-s, which could be also
     * received by "free-busy-data" signal. The client is responsible to do a merge of
     * the components between this complete list and those received through the signal.
     */
    get_free_busy_sync(start: number, end: number, users: string[], cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* out_freebusy */ Component[] ]
    /**
     * Queries the URL where the calendar attachments are
     * serialized in the local filesystem. This enable clients
     * to operate with the reference to attachments rather than the data itself
     * unless it specifically uses the attachments for open/sending
     * operations.
     */
    get_local_attachment_store(): string
    /**
     * Queries a calendar for a calendar component object based on its unique
     * identifier. The call is finished by e_cal_client_get_object_finish()
     * from the `callback`.
     * 
     * Use e_cal_client_get_objects_for_uid() to get list of all
     * objects for the given uid, which includes master object and
     * all detached instances.
     */
    get_object(uid: string, rid?: string | null, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
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
    get_object_finish(result: Gio.AsyncResult): [ /* returnType */ boolean, /* out_icalcomp */ ICalGLib.Component ]
    /**
     * Gets a list of objects from the calendar that match the query specified
     * by the `sexp` argument, returning matching objects as a list of #ICalComponent-s.
     * The call is finished by e_cal_client_get_object_list_finish() from
     * the `callback`.
     */
    get_object_list(sexp: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    /**
     * Gets a list of objects from the calendar that match the query specified
     * by the `sexp` argument, returning matching objects as a list of #ECalComponent-s.
     * The call is finished by e_cal_client_get_object_list_as_comps_finish() from
     * the `callback`.
     */
    get_object_list_as_comps(sexp: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes previous call of e_cal_client_get_object_list_as_comps() and
     * sets `out_ecalcomps` to a matching list of #ECalComponent-s.
     * This list should be freed with e_client_util_free_object_slist().
     */
    get_object_list_as_comps_finish(result: Gio.AsyncResult): [ /* returnType */ boolean, /* out_ecalcomps */ Component[] ]
    /**
     * Gets a list of objects from the calendar that match the query specified
     * by the `sexp` argument. The objects will be returned in the `out_ecalcomps`
     * argument, which is a list of #ECalComponent.
     * This list should be freed with e_client_util_free_object_slist().
     */
    get_object_list_as_comps_sync(sexp: string, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* out_ecalcomps */ Component[] ]
    /**
     * Finishes previous call of e_cal_client_get_object_list() and
     * sets `out_icalcomps` to a matching list of #ICalComponent-s.
     * This list should be freed with e_client_util_free_object_slist().
     */
    get_object_list_finish(result: Gio.AsyncResult): [ /* returnType */ boolean, /* out_icalcomps */ ICalGLib.Component[] ]
    /**
     * Gets a list of objects from the calendar that match the query specified
     * by the `sexp` argument. The objects will be returned in the `out_icalcomps`
     * argument, which is a list of #ICalComponent.
     * This list should be freed with e_client_util_free_object_slist().
     */
    get_object_list_sync(sexp: string, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* out_icalcomps */ ICalGLib.Component[] ]
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
    get_object_sync(uid: string, rid?: string | null, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* out_icalcomp */ ICalGLib.Component ]
    /**
     * Queries a calendar for all calendar components with the given unique
     * ID. This will return any recurring event and all its detached recurrences.
     * For non-recurring events, it will just return the object with that ID.
     * The call is finished by e_cal_client_get_objects_for_uid_finish() from
     * the `callback`.
     */
    get_objects_for_uid(uid: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes previous call of e_cal_client_get_objects_for_uid() and
     * sets `out_ecalcomps` to a list of #ECalComponent<!-- -->s corresponding to
     * found components for a given uid of the same type as this client.
     * This list should be freed with e_client_util_free_object_slist().
     */
    get_objects_for_uid_finish(result: Gio.AsyncResult): [ /* returnType */ boolean, /* out_ecalcomps */ Component[] ]
    /**
     * Queries a calendar for all calendar components with the given unique
     * ID. This will return any recurring event and all its detached recurrences.
     * For non-recurring events, it will just return the object with that ID.
     * This list should be freed with e_client_util_free_object_slist().
     */
    get_objects_for_uid_sync(uid: string, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* out_ecalcomps */ Component[] ]
    /**
     * Gets the source type of the calendar client.
     */
    get_source_type(): ClientSourceType
    /**
     * Retrieves a timezone object from the calendar backend.
     * The call is finished by e_cal_client_get_timezone_finish() from
     * the `callback`.
     */
    get_timezone(tzid: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes previous call of e_cal_client_get_timezone() and
     * sets `out_zone` to a retrieved timezone object from the calendar backend.
     * This object is owned by the `client,` thus do not free it.
     */
    get_timezone_finish(result: Gio.AsyncResult): [ /* returnType */ boolean, /* out_zone */ ICalGLib.Timezone ]
    /**
     * Retrieves a timezone object from the calendar backend.
     * This object is owned by the `client,` thus do not free it.
     */
    get_timezone_sync(tzid: string, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* out_zone */ ICalGLib.Timezone ]
    /**
     * Query `client` with `sexp,` creating an #ECalClientView.
     * The call is finished by e_cal_client_get_view_finish()
     * from the `callback`.
     */
    get_view(sexp: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes previous call of e_cal_client_get_view().
     * If successful, then the `out_view` is set to newly allocated #ECalClientView,
     * which should be freed with g_object_unref().
     */
    get_view_finish(result: Gio.AsyncResult): [ /* returnType */ boolean, /* out_view */ ClientView ]
    /**
     * Query `client` with `sexp,` creating an #ECalClientView.
     * If successful, then the `out_view` is set to newly allocated #ECalClientView,
     * which should be freed with g_object_unref().
     */
    get_view_sync(sexp: string, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* out_view */ ClientView ]
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
    modify_object(icalcomp: ICalGLib.Component, mod: ObjModType, opflags: OperationFlags, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes previous call of e_cal_client_modify_object().
     */
    modify_object_finish(result: Gio.AsyncResult): boolean
    /**
     * Requests the calendar backend to modify an existing object. If the object
     * does not exist on the calendar, an error will be returned.
     * 
     * For recurrent appointments, the `mod` argument specifies what to modify,
     * if all instances (#E_CAL_OBJ_MOD_ALL), a single instance (#E_CAL_OBJ_MOD_THIS),
     * or a specific set of instances (#E_CAL_OBJ_MOD_THIS_AND_PRIOR and
     * #E_CAL_OBJ_MOD_THIS_AND_FUTURE).
     */
    modify_object_sync(icalcomp: ICalGLib.Component, mod: ObjModType, opflags: OperationFlags, cancellable?: Gio.Cancellable | null): boolean
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
    modify_objects(icalcomps: ICalGLib.Component[], mod: ObjModType, opflags: OperationFlags, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes previous call of e_cal_client_modify_objects().
     */
    modify_objects_finish(result: Gio.AsyncResult): boolean
    /**
     * Requests the calendar backend to modify existing objects. If an object
     * does not exist on the calendar, an error will be returned.
     * 
     * For recurrent appointments, the `mod` argument specifies what to modify,
     * if all instances (#E_CAL_OBJ_MOD_ALL), a single instance (#E_CAL_OBJ_MOD_THIS),
     * or a specific set of instances (#E_CAL_OBJ_MOD_THIS_AND_PRIOR and
     * #E_CAL_OBJ_MOD_THIS_AND_FUTURE).
     */
    modify_objects_sync(icalcomps: ICalGLib.Component[], mod: ObjModType, opflags: OperationFlags, cancellable?: Gio.Cancellable | null): boolean
    /**
     * Makes the backend receive the set of iCalendar objects specified in the
     * `icalcomp` argument. This is used for iTIP confirmation/cancellation
     * messages for scheduled meetings.
     * 
     * The call is finished by e_cal_client_receive_objects_finish() from
     * the `callback`.
     */
    receive_objects(icalcomp: ICalGLib.Component, opflags: OperationFlags, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes previous call of e_cal_client_receive_objects().
     */
    receive_objects_finish(result: Gio.AsyncResult): boolean
    /**
     * Makes the backend receive the set of iCalendar objects specified in the
     * `icalcomp` argument. This is used for iTIP confirmation/cancellation
     * messages for scheduled meetings.
     */
    receive_objects_sync(icalcomp: ICalGLib.Component, opflags: OperationFlags, cancellable?: Gio.Cancellable | null): boolean
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
    remove_object(uid: string, rid: string | null, mod: ObjModType, opflags: OperationFlags, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes previous call of e_cal_client_remove_object().
     */
    remove_object_finish(result: Gio.AsyncResult): boolean
    /**
     * This function allows the removal of instances of a recurrent
     * appointment. By using a combination of the `uid,` `rid` and `mod`
     * arguments, you can remove specific instances. If what you want
     * is to remove all instances, use %NULL `rid` and #E_CAL_OBJ_MOD_ALL
     * for the `mod`.
     */
    remove_object_sync(uid: string, rid: string | null, mod: ObjModType, opflags: OperationFlags, cancellable?: Gio.Cancellable | null): boolean
    /**
     * This function allows the removal of instances of recurrent appointments.
     * #ECalComponentId objects can identify specific instances (if rid is not
     * %NULL).  If what you want is to remove all instances, use a %NULL rid in
     * the #ECalComponentId and #E_CAL_OBJ_MOD_ALL for the `mod`.
     * 
     * The call is finished by e_cal_client_remove_objects_finish() from
     * the `callback`.
     */
    remove_objects(ids: ComponentId[], mod: ObjModType, opflags: OperationFlags, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes previous call of e_cal_client_remove_objects().
     */
    remove_objects_finish(result: Gio.AsyncResult): boolean
    /**
     * This function allows the removal of instances of recurrent
     * appointments. #ECalComponentId objects can identify specific instances
     * (if rid is not %NULL).  If what you want is to remove all instances, use
     * a %NULL rid in the #ECalComponentId and #E_CAL_OBJ_MOD_ALL for the `mod`.
     */
    remove_objects_sync(ids: ComponentId[], mod: ObjModType, opflags: OperationFlags, cancellable?: Gio.Cancellable | null): boolean
    /**
     * Requests a calendar backend to send meeting information stored in `icalcomp`.
     * The backend can modify this component and request a send to particular users.
     * The call is finished by e_cal_client_send_objects_finish() from
     * the `callback`.
     */
    send_objects(icalcomp: ICalGLib.Component, opflags: OperationFlags, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes previous call of e_cal_client_send_objects() and
     * populates `out_users` with a list of users to send `out_modified_icalcomp` to.
     * 
     * The `out_users` list should be freed with e_client_util_free_string_slist()
     * and the `out_modified_icalcomp` should be freed with g_object_unref().
     */
    send_objects_finish(result: Gio.AsyncResult): [ /* returnType */ boolean, /* out_users */ string[], /* out_modified_icalcomp */ ICalGLib.Component ]
    /**
     * Requests a calendar backend to send meeting information stored in `icalcomp`.
     * The backend can modify this component and request a send to users in the
     * `out_users` list.
     * 
     * The `out_users` list should be freed with e_client_util_free_string_slist()
     * and the `out_modified_icalcomp` should be freed with g_object_unref().
     */
    send_objects_sync(icalcomp: ICalGLib.Component, opflags: OperationFlags, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* out_users */ string[], /* out_modified_icalcomp */ ICalGLib.Component ]
    /**
     * Sets the default timezone to use to resolve DATE and floating DATE-TIME
     * values. This will typically be from the user's timezone setting. Call this
     * before using any other object fetching functions.
     */
    set_default_timezone(zone: ICalGLib.Timezone): void
    /* Methods of EDataServer-1.2.EDataServer.Client */
    /**
     * Cancels all pending operations started on `client`.
     */
    cancel_all(): void
    /**
     * Check if backend supports particular capability.
     * To get all capabilities use e_client_get_capabilities().
     */
    check_capability(capability: string): boolean
    /**
     * Checks whether a client supports explicit refreshing
     * (see e_client_refresh()).
     */
    check_refresh_supported(): boolean
    /**
     * Returns a D-Bus bus name that will be used to connect the
     * client to the backend subprocess.
     */
    dup_bus_name(): string
    /**
     * Queries `client'`s backend for a property of name `prop_name`.
     * The call is finished by e_client_get_backend_property_finish()
     * from the `callback`.
     */
    get_backend_property(prop_name: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes previous call of e_client_get_backend_property().
     */
    get_backend_property_finish(result: Gio.AsyncResult): [ /* returnType */ boolean, /* prop_value */ string ]
    /**
     * Queries `client'`s backend for a property of name `prop_name`.
     */
    get_backend_property_sync(prop_name: string, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* prop_value */ string ]
    /**
     * Get list of strings with capabilities advertised by a backend.
     * This list, together with inner strings, is owned by the `client`.
     * To check for individual capabilities use e_client_check_capability().
     */
    get_capabilities(): string[]
    /**
     * Get the #ESource that this client has assigned.
     */
    get_source(): EDataServer.Source
    /**
     * Check if this `client` is connected.
     */
    is_online(): boolean
    /**
     * Check if this `client` is fully opened. This includes
     * everything from e_client_open() call up to the authentication,
     * if required by a backend. Client cannot do any other operation
     * during the opening phase except of authenticate or cancel it.
     * Every other operation results in an %E_CLIENT_ERROR_BUSY error.
     */
    is_opened(): boolean
    /**
     * Check if this `client` is read-only.
     */
    is_readonly(): boolean
    /**
     * Opens the `client,` making it ready for queries and other operations.
     * The call is finished by e_client_open_finish() from the `callback`.
     */
    open(only_if_exists: boolean, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes previous call of e_client_open().
     */
    open_finish(result: Gio.AsyncResult): boolean
    /**
     * Opens the `client,` making it ready for queries and other operations.
     */
    open_sync(only_if_exists: boolean, cancellable?: Gio.Cancellable | null): boolean
    /**
     * Returns the #GMainContext on which event sources for `client` are to
     * be attached.
     * 
     * The returned #GMainContext is referenced for thread-safety and must be
     * unreferenced with g_main_context_unref() when finished with it.
     */
    ref_main_context(): GLib.MainContext
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
    refresh_finish(result: Gio.AsyncResult): boolean
    /**
     * Initiates refresh on the `client`. Finishing the method doesn't mean
     * that the refresh is done, backend only notifies whether it started
     * refreshing or not. Use e_client_check_refresh_supported() to check
     * whether the backend supports this method.
     */
    refresh_sync(cancellable?: Gio.Cancellable | null): boolean
    /**
     * Removes the backing data for this #EClient. For example, with the file
     * backend this deletes the database file. You cannot get it back!
     * The call is finished by e_client_remove_finish() from the `callback`.
     */
    remove(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes previous call of e_client_remove().
     */
    remove_finish(result: Gio.AsyncResult): boolean
    /**
     * Removes the backing data for this #EClient. For example, with the file
     * backend this deletes the database file. You cannot get it back!
     */
    remove_sync(cancellable?: Gio.Cancellable | null): boolean
    /**
     * Initiates retrieval of capabilities on the `client`. This is usually
     * required only once, after the `client` is opened. The returned value
     * is cached and any subsequent call of e_client_get_capabilities() and
     * e_client_check_capability() is using the cached value.
     * The call is finished by e_client_retrieve_capabilities_finish()
     * from the `callback`.
     */
    retrieve_capabilities(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes previous call of e_client_retrieve_capabilities().
     * Returned value of `capabilities` should be freed with g_free(),
     * when no longer needed.
     */
    retrieve_capabilities_finish(result: Gio.AsyncResult): [ /* returnType */ boolean, /* capabilities */ string ]
    /**
     * Initiates retrieval of capabilities on the `client`. This is usually
     * required only once, after the `client` is opened. The returned value
     * is cached and any subsequent call of e_client_get_capabilities() and
     * e_client_check_capability() is using the cached value. Returned value
     * of `capabilities` should be freed with g_free(), when no longer needed.
     */
    retrieve_capabilities_sync(cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* capabilities */ string ]
    /**
     * Asynchronously retrieves `client` properties to match server-side values,
     * without waiting for the D-Bus property change notifications delivery.
     * 
     * When the operation is finished, `callback` will be called. You can then
     * call e_client_retrieve_properties_finish() to get the result of the operation.
     */
    retrieve_properties(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes the operation started with e_client_retrieve_properties().
     * 
     * If an error occurs, the function sets `error` and returns %FALSE.
     */
    retrieve_properties_finish(result: Gio.AsyncResult): boolean
    /**
     * Retrieves `client` properties to match server-side values, without waiting
     * for the D-Bus property change notifications delivery.
     * 
     * If an error occurs, the function sets `error` and returns %FALSE.
     */
    retrieve_properties_sync(cancellable?: Gio.Cancellable | null): boolean
    /**
     * Sets `client'`s backend property of name `prop_name`
     * to value `prop_value`. The call is finished
     * by e_client_set_backend_property_finish() from the `callback`.
     */
    set_backend_property(prop_name: string, prop_value: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes previous call of e_client_set_backend_property().
     */
    set_backend_property_finish(result: Gio.AsyncResult): boolean
    /**
     * Sets `client'`s backend property of name `prop_name`
     * to value `prop_value`.
     */
    set_backend_property_sync(prop_name: string, prop_value: string, cancellable?: Gio.Cancellable | null): boolean
    /**
     * Sets a D-Bus bus name that will be used to connect the client
     * to the backend subprocess.
     */
    set_bus_name(bus_name: string): void
    /**
     * Unwraps D-Bus error to local error. `dbus_error` is automatically freed.
     * `dbus_erorr` and `out_error` can point to the same variable.
     */
    unwrap_dbus_error(dbus_error: GLib.Error): void
    /**
     * Asynchronously waits until the `client` is connected (according
     * to `ESource:`:connection-status property), but not longer than `timeout_seconds`.
     * 
     * The call is finished by e_client_wait_for_connected_finish() from
     * the `callback`.
     */
    wait_for_connected(timeout_seconds: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes previous call of e_client_wait_for_connected().
     */
    wait_for_connected_finish(result: Gio.AsyncResult): boolean
    /**
     * Synchronously waits until the `client` is connected (according
     * to `ESource:`:connection-status property), but not longer than `timeout_seconds`.
     * 
     * Note: This also calls e_client_retrieve_properties_sync() on success, to have
     *   up-to-date property values on the client side, without a delay due
     *   to property change notifcations delivery through D-Bus.
     */
    wait_for_connected_sync(timeout_seconds: number, cancellable?: Gio.Cancellable | null): boolean
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
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    /**
     * Creates a binding between `source_property` on `source` and `target_property`
     * on `target,` allowing you to set the transformation functions to be used by
     * the binding.
     * 
     * This function is the language bindings friendly version of
     * g_object_bind_property_full(), using #GClosures instead of
     * function pointers.
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
     */
    get_property(property_name: string, value: any): void
    /**
     * This function gets back user data pointers stored via
     * g_object_set_qdata().
     */
    get_qdata(quark: GLib.Quark): object | null
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
     */
    set_data(key: string, data?: object | null): void
    /**
     * Sets a property on an object.
     */
    set_property(property_name: string, value: any): void
    /**
     * Remove a specified datum from the object's data associations,
     * without invoking the association's destroy handler.
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
     */
    watch_closure(closure: Function): void
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
    add_timezone(zone: ICalGLib.Timezone): void
    /**
     * Obtains an #ICalTimezone by its TZID string.  If no match is found,
     * the function returns %NULL.  The returned #ICalTimezone is owned by
     * the `cache` and should not be modified or freed.
     */
    get_timezone(tzid: string): ICalGLib.Timezone | null
    /**
     * Returns a list of #ICalTimezone instances that were explicitly added to
     * the `cache` through e_timezone_cache_add_timezone().  In particular, any
     * built-in time zone data that e_timezone_cache_get_timezone() may use to
     * match a TZID string is excluded from the returned list.
     * 
     * Free the returned list with g_list_free().  The list elements are owned
     * by the `cache` and should not be modified or freed.
     */
    list_timezones(): ICalGLib.Timezone[]
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
    init_async(io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes asynchronous initialization and returns the result.
     * See g_async_initable_init_async().
     */
    init_finish(res: Gio.AsyncResult): boolean
    /**
     * Finishes the async construction for the various g_async_initable_new
     * calls, returning the created object or %NULL on error.
     */
    new_finish(res: Gio.AsyncResult): GObject.Object
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
    /* Virtual methods of ECal-2.0.ECal.Client */
    vfunc_timezone_added(zone: ICalGLib.Timezone): void
    vfunc_tzcache_add_timezone(zone: ICalGLib.Timezone): void
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
    vfunc_init_async(io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes asynchronous initialization and returns the result.
     * See g_async_initable_init_async().
     */
    vfunc_init_finish(res: Gio.AsyncResult): boolean
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
    vfunc_init(cancellable?: Gio.Cancellable | null): boolean
    /* Virtual methods of EDataServer-1.2.EDataServer.Client */
    vfunc_backend_died(): void
    vfunc_backend_error(error_msg: string): void
    vfunc_backend_property_changed(prop_name: string, prop_value: string): void
    /**
     * Queries `client'`s backend for a property of name `prop_name`.
     * The call is finished by e_client_get_backend_property_finish()
     * from the `callback`.
     */
    vfunc_get_backend_property(prop_name: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes previous call of e_client_get_backend_property().
     */
    vfunc_get_backend_property_finish(result: Gio.AsyncResult): [ /* returnType */ boolean, /* prop_value */ string ]
    /**
     * Queries `client'`s backend for a property of name `prop_name`.
     */
    vfunc_get_backend_property_sync(prop_name: string, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* prop_value */ string ]
    /**
     * Opens the `client,` making it ready for queries and other operations.
     * The call is finished by e_client_open_finish() from the `callback`.
     */
    vfunc_open(only_if_exists: boolean, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes previous call of e_client_open().
     */
    vfunc_open_finish(result: Gio.AsyncResult): boolean
    /**
     * Opens the `client,` making it ready for queries and other operations.
     */
    vfunc_open_sync(only_if_exists: boolean, cancellable?: Gio.Cancellable | null): boolean
    vfunc_opened(error: GLib.Error): void
    /**
     * Initiates refresh on the `client`. Finishing the method doesn't mean
     * that the refresh is done, backend only notifies whether it started
     * refreshing or not. Use e_client_check_refresh_supported() to check
     * whether the backend supports this method.
     * The call is finished by e_client_refresh_finish() from the `callback`.
     */
    vfunc_refresh(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes previous call of e_client_refresh().
     */
    vfunc_refresh_finish(result: Gio.AsyncResult): boolean
    /**
     * Initiates refresh on the `client`. Finishing the method doesn't mean
     * that the refresh is done, backend only notifies whether it started
     * refreshing or not. Use e_client_check_refresh_supported() to check
     * whether the backend supports this method.
     */
    vfunc_refresh_sync(cancellable?: Gio.Cancellable | null): boolean
    /**
     * Removes the backing data for this #EClient. For example, with the file
     * backend this deletes the database file. You cannot get it back!
     * The call is finished by e_client_remove_finish() from the `callback`.
     */
    vfunc_remove(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes previous call of e_client_remove().
     */
    vfunc_remove_finish(result: Gio.AsyncResult): boolean
    /**
     * Removes the backing data for this #EClient. For example, with the file
     * backend this deletes the database file. You cannot get it back!
     */
    vfunc_remove_sync(cancellable?: Gio.Cancellable | null): boolean
    /**
     * Initiates retrieval of capabilities on the `client`. This is usually
     * required only once, after the `client` is opened. The returned value
     * is cached and any subsequent call of e_client_get_capabilities() and
     * e_client_check_capability() is using the cached value.
     * The call is finished by e_client_retrieve_capabilities_finish()
     * from the `callback`.
     */
    vfunc_retrieve_capabilities(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes previous call of e_client_retrieve_capabilities().
     * Returned value of `capabilities` should be freed with g_free(),
     * when no longer needed.
     */
    vfunc_retrieve_capabilities_finish(result: Gio.AsyncResult): [ /* returnType */ boolean, /* capabilities */ string ]
    /**
     * Initiates retrieval of capabilities on the `client`. This is usually
     * required only once, after the `client` is opened. The returned value
     * is cached and any subsequent call of e_client_get_capabilities() and
     * e_client_check_capability() is using the cached value. Returned value
     * of `capabilities` should be freed with g_free(), when no longer needed.
     */
    vfunc_retrieve_capabilities_sync(cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* capabilities */ string ]
    /**
     * Retrieves `client` properties to match server-side values, without waiting
     * for the D-Bus property change notifications delivery.
     * 
     * If an error occurs, the function sets `error` and returns %FALSE.
     */
    vfunc_retrieve_properties_sync(cancellable?: Gio.Cancellable | null): boolean
    /**
     * Sets `client'`s backend property of name `prop_name`
     * to value `prop_value`. The call is finished
     * by e_client_set_backend_property_finish() from the `callback`.
     */
    vfunc_set_backend_property(prop_name: string, prop_value: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes previous call of e_client_set_backend_property().
     */
    vfunc_set_backend_property_finish(result: Gio.AsyncResult): boolean
    /**
     * Sets `client'`s backend property of name `prop_name`
     * to value `prop_value`.
     */
    vfunc_set_backend_property_sync(prop_name: string, prop_value: string, cancellable?: Gio.Cancellable | null): boolean
    /**
     * Unwraps D-Bus error to local error. `dbus_error` is automatically freed.
     * `dbus_erorr` and `out_error` can point to the same variable.
     */
    vfunc_unwrap_dbus_error(dbus_error: GLib.Error): void
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
     */
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of ECal-2.0.ECal.Client */
    connect(sigName: "free-busy-data", callback: (($obj: Client, free_busy_ecalcomps: Component[]) => void)): number
    connect_after(sigName: "free-busy-data", callback: (($obj: Client, free_busy_ecalcomps: Component[]) => void)): number
    emit(sigName: "free-busy-data", free_busy_ecalcomps: Component[]): void
    /* Signals of EDataServer-1.2.EDataServer.Client */
    connect(sigName: "backend-died", callback: (($obj: Client) => void)): number
    connect_after(sigName: "backend-died", callback: (($obj: Client) => void)): number
    emit(sigName: "backend-died"): void
    connect(sigName: "backend-error", callback: (($obj: Client, object: string) => void)): number
    connect_after(sigName: "backend-error", callback: (($obj: Client, object: string) => void)): number
    emit(sigName: "backend-error", object: string): void
    connect(sigName: "backend-property-changed", callback: (($obj: Client, object: string, p0: string) => void)): number
    connect_after(sigName: "backend-property-changed", callback: (($obj: Client, object: string, p0: string) => void)): number
    emit(sigName: "backend-property-changed", object: string, p0: string): void
    connect(sigName: "opened", callback: (($obj: Client, object: GLib.Error) => void)): number
    connect_after(sigName: "opened", callback: (($obj: Client, object: GLib.Error) => void)): number
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
    connect(sigName: "notify", callback: (($obj: Client, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Client, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    /* Signals of ECal-2.0.ECal.TimezoneCache */
    /**
     * Emitted when a new #icaltimezone is added to `cache`.
     */
    connect(sigName: "timezone-added", callback: (($obj: Client, zone: ICalGLib.Timezone) => void)): number
    connect_after(sigName: "timezone-added", callback: (($obj: Client, zone: ICalGLib.Timezone) => void)): number
    emit(sigName: "timezone-added", zone: ICalGLib.Timezone): void
    connect(sigName: "notify::default-timezone", callback: (($obj: Client, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::default-timezone", callback: (($obj: Client, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::capabilities", callback: (($obj: Client, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::capabilities", callback: (($obj: Client, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::main-context", callback: (($obj: Client, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::main-context", callback: (($obj: Client, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::online", callback: (($obj: Client, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::online", callback: (($obj: Client, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::opened", callback: (($obj: Client, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opened", callback: (($obj: Client, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::readonly", callback: (($obj: Client, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::readonly", callback: (($obj: Client, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
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
    static check_timezones_sync(vcalendar: ICalGLib.Component, icalcomps?: ICalGLib.Component[] | null, cancellable?: Gio.Cancellable | null): boolean
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
    static connect(source: EDataServer.Source, source_type: ClientSourceType, wait_for_connected_seconds: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes the operation started with e_cal_client_connect().  If an
     * error occurs in connecting to the D-Bus service, the function sets
     * `error` and returns %NULL.
     * 
     * For error handling convenience, any error message returned by this
     * function will have a descriptive prefix that includes the display
     * name of the #ESource passed to e_cal_client_connect().
     */
    static connect_finish(result: Gio.AsyncResult): EDataServer.Client | null
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
    static connect_sync(source: EDataServer.Source, source_type: ClientSourceType, wait_for_connected_seconds: number, cancellable?: Gio.Cancellable | null): EDataServer.Client | null
    static error_create(code: ClientError, custom_msg?: string | null): GLib.Error
    /* Function overloads */
    static error_create(code: EDataServer.ClientError, custom_msg?: string | null): GLib.Error
    static error_quark(): GLib.Quark
    /**
     * Get localized human readable description of the given error code.
     */
    static error_to_string(code: ClientError): string
    /* Function overloads */
    /**
     * Get localized human readable description of the given error code.
     */
    static error_to_string(code: EDataServer.ClientError): string
    /**
     * An implementation of the #ECalRecurResolveTimezoneCb callback which clients
     * can use. Calls e_cal_client_get_timezone_sync().
     * 
     * The returned timezone object, if not %NULL, is owned by the `ecalclient`.
     */
    static tzlookup_cb(tzid: string, ecalclient: Client, cancellable?: Gio.Cancellable | null): ICalGLib.Timezone | null
    /**
     * An implementation of the #ECalRecurResolveTimezoneCb callback which
     * backends can use. Searches for the timezone in an %ICalComponent
     * associated with the `lookup_data` %ECalClientTzlookupICalCompData.
     * 
     * The returned timezone object is owned by the `lookup_data`.
     */
    static tzlookup_icalcomp_cb(tzid: string, lookup_data: ClientTzlookupICalCompData, cancellable?: Gio.Cancellable | null): ICalGLib.Timezone | null
    /**
     * Helper function for constructing #GAsyncInitable object. This is
     * similar to g_object_newv() but also initializes the object asynchronously.
     * 
     * When the initialization is finished, `callback` will be called. You can
     * then call g_async_initable_new_finish() to get the new object and check
     * for any errors.
     */
    static newv_async(object_type: GObject.Type, n_parameters: number, parameters: GObject.Parameter, io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    /**
     * Helper function for constructing #GInitable object. This is
     * similar to g_object_newv() but also initializes the object
     * and returns %NULL, setting an error on failure.
     */
    static newv(object_type: GObject.Type, parameters: GObject.Parameter[], cancellable?: Gio.Cancellable | null): GObject.Object
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
    object_path?: string
}
class ClientView {
    /* Fields of GObject-2.0.GObject.Object */
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of ECal-2.0.ECal.ClientView */
    /**
     * Returns the #GDBusConnection used to create the D-Bus proxy.
     */
    get_connection(): Gio.DBusConnection
    /**
     * Returns the object path used to create the D-Bus proxy.
     */
    get_object_path(): string
    /**
     * Retunrs: Whether view is running. Not running views are ignoring
     * all events sent from the server.
     */
    is_running(): boolean
    /**
     * Returns the #ECalClientView:client associated with `client_view`.
     * 
     * The returned #ECalClient is referenced for thread-safety.  Unreference
     * the #ECalClient with g_object_unref() when finished with it.
     */
    ref_client(): Client
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
    set_fields_of_interest(fields_of_interest?: string[] | null): void
    /**
     * Sets the `flags` which control the behaviour of `client_view`.
     */
    set_flags(flags: ClientViewFlags): void
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
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    /**
     * Creates a binding between `source_property` on `source` and `target_property`
     * on `target,` allowing you to set the transformation functions to be used by
     * the binding.
     * 
     * This function is the language bindings friendly version of
     * g_object_bind_property_full(), using #GClosures instead of
     * function pointers.
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
     */
    get_property(property_name: string, value: any): void
    /**
     * This function gets back user data pointers stored via
     * g_object_set_qdata().
     */
    get_qdata(quark: GLib.Quark): object | null
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
     */
    set_data(key: string, data?: object | null): void
    /**
     * Sets a property on an object.
     */
    set_property(property_name: string, value: any): void
    /**
     * Remove a specified datum from the object's data associations,
     * without invoking the association's destroy handler.
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
     */
    watch_closure(closure: Function): void
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
    /* Virtual methods of ECal-2.0.ECal.ClientView */
    vfunc_complete(error: GLib.Error): void
    vfunc_progress(percent: number, message: string): void
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
    vfunc_init(cancellable?: Gio.Cancellable | null): boolean
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
     */
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of ECal-2.0.ECal.ClientView */
    connect(sigName: "complete", callback: (($obj: ClientView, object: GLib.Error) => void)): number
    connect_after(sigName: "complete", callback: (($obj: ClientView, object: GLib.Error) => void)): number
    emit(sigName: "complete", object: GLib.Error): void
    connect(sigName: "objects-added", callback: (($obj: ClientView, objects: ICalGLib.Component[]) => void)): number
    connect_after(sigName: "objects-added", callback: (($obj: ClientView, objects: ICalGLib.Component[]) => void)): number
    emit(sigName: "objects-added", objects: ICalGLib.Component[]): void
    connect(sigName: "objects-modified", callback: (($obj: ClientView, objects: ICalGLib.Component[]) => void)): number
    connect_after(sigName: "objects-modified", callback: (($obj: ClientView, objects: ICalGLib.Component[]) => void)): number
    emit(sigName: "objects-modified", objects: ICalGLib.Component[]): void
    connect(sigName: "objects-removed", callback: (($obj: ClientView, uids: ComponentId[]) => void)): number
    connect_after(sigName: "objects-removed", callback: (($obj: ClientView, uids: ComponentId[]) => void)): number
    emit(sigName: "objects-removed", uids: ComponentId[]): void
    connect(sigName: "progress", callback: (($obj: ClientView, object: number, p0: string) => void)): number
    connect_after(sigName: "progress", callback: (($obj: ClientView, object: number, p0: string) => void)): number
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
    connect(sigName: "notify", callback: (($obj: ClientView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: ClientView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: ClientView_ConstructProps)
    _init (config?: ClientView_ConstructProps): void
    /* Static methods and pseudo-constructors */
    /**
     * Helper function for constructing #GInitable object. This is
     * similar to g_object_newv() but also initializes the object
     * and returns %NULL, setting an error on failure.
     */
    static newv(object_type: GObject.Type, parameters: GObject.Parameter[], cancellable?: Gio.Cancellable | null): GObject.Object
    static $gtype: GObject.Type
}
interface Component_ConstructProps extends GObject.Object_ConstructProps {
}
class Component {
    /* Fields of GObject-2.0.GObject.Object */
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of ECal-2.0.ECal.Component */
    /**
     * Aborts the sequence change needed in the given calendar component,
     * which means it will not require a sequence commit (via
     * e_cal_component_commit_sequence()) even if the changes done require a
     * sequence increment.
     */
    abort_sequence(): void
    /**
     * Adds an alarm subcomponent to a calendar component.  You should have created
     * the `alarm` by using e_cal_component_alarm_new(); it is invalid to use an
     * #ECalComponentAlarm structure that came from e_cal_component_get_alarm().  After
     * adding the alarm, the `alarm` structure is no longer valid because the
     * internal structures may change and you should get rid of it by using
     * e_cal_component_alarm_free().
     */
    add_alarm(alarm: ComponentAlarm): void
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
    commit_sequence(): void
    /**
     * Queries a particular alarm subcomponent of a calendar component.
     * Free the returned pointer with e_cal_component_alarm_free(),
     * when no longer needed.
     */
    get_alarm(auid: string): ComponentAlarm | null
    /**
     * Builds a list of the unique identifiers of the alarm subcomponents inside a
     * calendar component. Free the returned #GSList with
     * g_slist_free_full (slist, g_free);, when no longer needed.
     */
    get_alarm_uids(): string[] | null
    /**
     * Queries all alarm subcomponents of a calendar component.
     * Free the returned #GSList with g_slist_free_full (slist, e_cal_component_alarm_free);,
     * when no longer needed.
     */
    get_all_alarms(): ComponentAlarm[] | null
    /**
     * Gets the iCalendar string representation of a calendar component.  You should
     * call e_cal_component_commit_sequence() before this function to ensure that the
     * component's sequence number is consistent with the state of the object.
     */
    get_as_string(): string
    /**
     * Queries the attachment properties as #ICalAttach objects of the calendar
     * component object. Changes on these objects are directly affecting the component.
     * Free the returned #GSList with g_slist_free_full (slist, g_object_unref);,
     * when no longer needed.
     */
    get_attachments(): ICalGLib.Attach[] | null
    /**
     * Queries the attendee properties of the calendar component object.
     * Free the returned #GSList with g_slist_free_full (slist, e_cal_component_attendee_free);,
     * when no longer needed.
     */
    get_attendees(): ComponentAttendee[] | null
    /**
     * Queries the categories of the given calendar component. The categories
     * are returned in the `categories` argument, which, on success, will contain
     * a comma-separated list of all categories set in the component.
     * Free the returned string with g_free(), when no longer needed.
     */
    get_categories(): string | null
    /**
     * Queries the list of categories of a calendar component object. Each element
     * in the returned categ_list is a string with the corresponding category.
     * Free the returned #GSList with g_slist_free_full (categories, g_free); , when
     * no longer needed.
     */
    get_categories_list(): string[] | null
    /**
     * Queries the classification of a calendar component object.  If the
     * classification property is not set on this component, this function returns
     * #E_CAL_COMPONENT_CLASS_NONE.
     * 
     * Retuurns: a classification of the `comp,` as an #ECalComponentClassification
     */
    get_classification(): ComponentClassification
    /**
     * Queries the comments of a calendar component object.  The comment property can
     * appear several times inside a calendar component, and so a list of
     * #ECalComponentText is returned. Free the returned #GSList with
     * g_slist_free_full (slist, e_cal_component_text_free);, when no longer needed.
     */
    get_comments(): ComponentText[] | null
    /**
     * Queries the date at which a calendar compoment object was completed.
     * Free the returned non-NULL pointer with g_object_unref(), when
     * no longer needed.
     */
    get_completed(): ICalGLib.Time | null
    /**
     * Queries the contact of a calendar component object.  The contact property can
     * appear several times inside a calendar component, and so a list of
     * #ECalComponentText is returned. Free the returned #GSList with
     * g_slist_free_full (slist, e_cal_component_text_free);, when no longer needed.
     */
    get_contacts(): ComponentText[]
    /**
     * Queries the date in which a calendar component object was created in the
     * calendar store. Free the returned non-NULL pointer with g_object_unref(), when
     * no longer needed.
     */
    get_created(): ICalGLib.Time | null
    /**
     * Queries the description of a calendar component object.  Journal components
     * may have more than one description, and as such this function returns a list
     * of #ECalComponentText structures.  All other types of components can have at
     * most one description. Free the returned #GSList with
     * g_slist_free_full (slist, e_cal_component_text_free);, when no longer needed.
     */
    get_descriptions(): ComponentText[] | null
    /**
     * Queries the date/time end of a calendar component object. In case there's no DTEND,
     * but only DTSTART and DURATION, then the end is computed from the later two.
     * Free the returned #ECalComponentDateTime with e_cal_component_datetime_free(),
     * when no longer needed.
     */
    get_dtend(): ComponentDateTime | null
    /**
     * Queries the date/timestamp property of a calendar component object, which is
     * the last time at which the object was modified by a calendar user agent.
     * 
     * Free a non-NULL returned object with g_object_unref(),
     * when no longer needed.
     */
    get_dtstamp(): ICalGLib.Time | null
    /**
     * Queries the date/time start of a calendar component object.
     * Free the returned #ECalComponentDateTime with e_cal_component_datetime_free(),
     * when no longer needed.
     */
    get_dtstart(): ComponentDateTime | null
    /**
     * Queries the due date/time of a calendar component object. In case there's no DUE,
     * but only DTSTART and DURATION, then the due is computed from the later two.
     * Free the returned #ECalComponentDateTime with e_cal_component_datetime_free(),
     * when no longer needed.
     */
    get_due(): ComponentDateTime | null
    /**
     * Queries the list of exception date properties in a calendar component object.
     * Free the returned #GSList with g_slist_free_full (exdates, e_cal_component_datetime_free);,
     * when no longer needed.
     */
    get_exdates(): ComponentDateTime[] | null
    /**
     * Queries the list of exception rule properties of a calendar component object.
     * Free the list with g_slist_free_full (slist, g_object_unref);, when
     * no longer needed.
     */
    get_exrule_properties(): ICalGLib.Property[] | null
    /**
     * Queries the list of exception rule properties of a calendar component
     * object. Free the returned list with g_slist_free_full (slist, g_object_unref);,
     * when no longer needed.
     */
    get_exrules(): ICalGLib.Recurrence[] | null
    /**
     * Gets the geographic position property of a calendar component object.
     * Free the returned non-NULL object with g_object_unref(), when
     * no longer needed.
     */
    get_geo(): ICalGLib.Geo | null
    /**
     * Queries the #icalcomponent structure that a calendar component object is
     * wrapping.
     */
    get_icalcomponent(): ICalGLib.Component | null
    /**
     * Get the ID of the component as an #ECalComponentId. The return value should
     * be freed with e_cal_component_id_free(), when no longer needed.
     */
    get_id(): ComponentId
    /**
     * Queries the time at which a calendar component object was last modified in
     * the calendar store. Free the returned non-NULL pointer with g_object_unref(),
     * when no longer needed.
     */
    get_last_modified(): ICalGLib.Time | null
    /**
     * Queries the location property of a calendar component object.
     */
    get_location(): string | null
    /**
     * Queries the organizer property of a calendar component object.
     * Free the returned structure with e_cal_component_organizer_free(),
     * when no longer needed.
     */
    get_organizer(): ComponentOrganizer | null
    /**
     * Queries the percent-complete property of a calendar component object.
     */
    get_percent_complete(): number
    /**
     * Queries the priority property of a calendar component object.
     */
    get_priority(): number
    /**
     * Queries the list of recurrence date properties in a calendar component
     * object. Free the returned #GSList with g_slist_free_full (slist, e_cal_component_period_free);,
     * when no longer needed.
     */
    get_rdates(): ComponentPeriod[] | null
    /**
     * Queries the recurrence id property of a calendar component object.
     * Free the returned #ECalComponentRange with e_cal_component_range_free(),
     * whe no longer needed.
     */
    get_recurid(): ComponentRange | null
    /**
     * Gets the recurrence ID property as a string.
     */
    get_recurid_as_string(): string
    /**
     * Queries a list of recurrence rule properties of a calendar component object.
     * Free the list with g_slist_free_full (slist, g_object_unref);, when
     * no longer needed.
     */
    get_rrule_properties(): ICalGLib.Property[] | null
    /**
     * Queries the list of recurrence rule properties of a calendar component
     * object. Free the returned list with g_slist_free_full (slist, g_object_unref);,
     * when no longer needed.
     */
    get_rrules(): ICalGLib.Recurrence[] | null
    /**
     * Queries the sequence number of a calendar component object.
     */
    get_sequence(): number
    /**
     * Queries the status property of a calendar component object.
     */
    get_status(): ICalGLib.PropertyStatus
    /**
     * Queries the summary of a calendar component object.
     * Free the returned pointer withe_cal_component_text_free(),
     * when no longer needed.
     */
    get_summary(): ComponentText | null
    /**
     * Queries the time transparency of a calendar component object.
     */
    get_transparency(): ComponentTransparency
    /**
     * Queries the unique identifier of a calendar component object.
     */
    get_uid(): string
    /**
     * Queries the uniform resource locator property of a calendar component object.
     * Free the returned URL with g_free(), when no longer needed.
     */
    get_url(): string | null
    /**
     * Queries the type of a calendar component object.
     */
    get_vtype(): ComponentVType
    /**
     * Checks whether the component has any alarms.
     */
    has_alarms(): boolean
    /**
     * Queries the component to see if it has attachments.
     */
    has_attachments(): boolean
    /**
     * Queries a calendar component object for the existence of attendees.
     */
    has_attendees(): boolean
    /**
     * Queries whether a calendar component object has any exception dates
     * or exception rules.
     */
    has_exceptions(): boolean
    /**
     * Queries whether a calendar component object has any exception dates defined
     * for it.
     */
    has_exdates(): boolean
    /**
     * Queries whether a calendar component object has any exception rules defined
     * for it.
     */
    has_exrules(): boolean
    /**
     * Check whether a calendar component object has an organizer or not.
     */
    has_organizer(): boolean
    /**
     * Queries whether a calendar component object has any recurrence dates defined
     * for it.
     */
    has_rdates(): boolean
    /**
     * Queries whether a calendar component object has any recurrence dates or
     * recurrence rules.
     */
    has_recurrences(): boolean
    /**
     * Queries whether a calendar component object has any recurrence rules defined
     * for it.
     */
    has_rrules(): boolean
    /**
     * Checks whether the given calendar component object has simple recurrence
     * rules or more complicated ones.
     */
    has_simple_recurrence(): boolean
    /**
     * Checks whether a calendar component object is an instance of a recurring
     * event.
     */
    is_instance(): boolean
    /**
     * Removes an alarm subcomponent from a calendar component.  If the alarm that
     * corresponds to the specified `auid` had been fetched with
     * e_cal_component_get_alarm(), then those alarm structures will be invalid; you
     * should get rid of them with e_cal_component_alarm_free() before using this
     * function.
     */
    remove_alarm(auid: string): void
    /**
     * Remove all alarms from the calendar component
     */
    remove_all_alarms(): void
    /**
     * Sets the attachments of the calendar component object.
     */
    set_attachments(attachments?: ICalGLib.Attach[] | null): void
    /**
     * Sets the attendees of a calendar component object
     */
    set_attendees(attendee_list?: ComponentAttendee[] | null): void
    /**
     * Sets the list of categories for a calendar component.
     */
    set_categories(categories: string): void
    /**
     * Sets the list of categories of a calendar component object.
     */
    set_categories_list(categ_list: string[]): void
    /**
     * Sets the classification property of a calendar component object.  To unset
     * the property, specify E_CAL_COMPONENT_CLASS_NONE for `classif`.
     */
    set_classification(classif: ComponentClassification): void
    /**
     * Sets the comments of a calendar component object.  The comment property can
     * appear several times inside a calendar component, and so a list of
     * #ECalComponentText structures is used.
     */
    set_comments(text_list: ComponentText[]): void
    /**
     * Sets the date at which a calendar component object was completed.
     */
    set_completed(tt?: ICalGLib.Time | null): void
    /**
     * Sets the contact of a calendar component object.  The contact property can
     * appear several times inside a calendar component, and so a list of
     * #ECalComponentText structures is used.
     */
    set_contacts(text_list: ComponentText[]): void
    /**
     * Sets the date in which a calendar component object is created in the calendar
     * store.  This should only be used inside a calendar store application, i.e.
     * not by calendar user agents.
     */
    set_created(tt?: ICalGLib.Time | null): void
    /**
     * Sets the description of a calendar component object.  Journal components may
     * have more than one description, and as such this function takes in a list of
     * #ECalComponentText structures.  All other types of components can have
     * at most one description.
     */
    set_descriptions(text_list: ComponentText[]): void
    /**
     * Sets the date/time end property of a calendar component object.
     */
    set_dtend(dt?: ComponentDateTime | null): void
    /**
     * Sets the date/timestamp of a calendar component object.  This should be
     * called whenever a calendar user agent makes a change to a component's
     * properties.
     */
    set_dtstamp(tt: ICalGLib.Time): void
    /**
     * Sets the date/time start property of a calendar component object.
     */
    set_dtstart(dt?: ComponentDateTime | null): void
    /**
     * Sets the due date/time property of a calendar component object.
     */
    set_due(dt?: ComponentDateTime | null): void
    /**
     * Sets the list of exception dates in a calendar component object.
     */
    set_exdates(exdate_list?: ComponentDateTime[] | null): void
    /**
     * Sets the list of exception rules in a calendar component object.
     */
    set_exrules(recur_list?: ICalGLib.Recurrence[] | null): void
    /**
     * Sets the geographic position property on a calendar component object.
     */
    set_geo(geo?: ICalGLib.Geo | null): void
    /**
     * Sets the contents of a calendar component object from an #ICalComponent.
     * If the `comp` already had an #ICalComponent set into it, it will
     * be freed automatically.
     * 
     * Supported component types are VEVENT, VTODO, VJOURNAL, VFREEBUSY, and VTIMEZONE.
     */
    set_icalcomponent(icalcomp?: ICalGLib.Component | null): boolean
    /**
     * Sets the time at which a calendar component object was last stored in the
     * calendar store.  This should not be called by plain calendar user agents.
     */
    set_last_modified(tt?: ICalGLib.Time | null): void
    /**
     * Sets the location property of a calendar component object.
     */
    set_location(location?: string | null): void
    /**
     * Clears any existing component data from a calendar component object and
     * creates a new #ICalComponent of the specified type for it.  The only property
     * that will be set in the new component will be its unique identifier.
     */
    set_new_vtype(type: ComponentVType): void
    /**
     * Sets the organizer of a calendar component object
     */
    set_organizer(organizer?: ComponentOrganizer | null): void
    /**
     * Sets percent complete. The `percent` can be between 0 and 100, inclusive.
     * A special value -1 can be used to remove the percent complete property.
     */
    set_percent_complete(percent: number): void
    /**
     * Sets the priority property of a calendar component object.
     * The `priority` can be between 0 and 9, inclusive.
     * A special value -1 can be used to remove the priority property.
     */
    set_priority(priority: number): void
    /**
     * Sets the list of recurrence dates in a calendar component object.
     */
    set_rdates(rdate_list?: ComponentPeriod[] | null): void
    /**
     * Sets the recurrence id property of a calendar component object.
     */
    set_recurid(recur_id?: ComponentRange | null): void
    /**
     * Sets the list of recurrence rules in a calendar component object.
     */
    set_rrules(recur_list?: ICalGLib.Recurrence[] | null): void
    /**
     * Sets the sequence number of a calendar component object.
     * A special value -1 can be used to remove the sequence number property.
     * 
     * Normally this function should not be called, since the sequence number
     * is incremented automatically at the proper times.
     */
    set_sequence(sequence: number): void
    /**
     * Sets the status property of a calendar component object.
     */
    set_status(status: ICalGLib.PropertyStatus): void
    /**
     * Sets the summary of a calendar component object.
     */
    set_summary(summary: ComponentText): void
    /**
     * Sets the time transparency of a calendar component object.
     * Use %E_CAL_COMPONENT_TRANSP_NONE to unset the property.
     */
    set_transparency(transp: ComponentTransparency): void
    /**
     * Sets the unique identifier string of a calendar component object.
     */
    set_uid(uid: string): void
    /**
     * Sets the uniform resource locator property of a calendar component object.
     * A %NULL or an empty string removes the property.
     */
    set_url(url?: string | null): void
    /**
     * Strips all error messages from the calendar component. Those error messages are
     * added to the iCalendar string representation whenever an invalid is used for
     * one of its fields.
     */
    strip_errors(): void
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
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    /**
     * Creates a binding between `source_property` on `source` and `target_property`
     * on `target,` allowing you to set the transformation functions to be used by
     * the binding.
     * 
     * This function is the language bindings friendly version of
     * g_object_bind_property_full(), using #GClosures instead of
     * function pointers.
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
     */
    get_property(property_name: string, value: any): void
    /**
     * This function gets back user data pointers stored via
     * g_object_set_qdata().
     */
    get_qdata(quark: GLib.Quark): object | null
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
     */
    set_data(key: string, data?: object | null): void
    /**
     * Sets a property on an object.
     */
    set_property(property_name: string, value: any): void
    /**
     * Remove a specified datum from the object's data associations,
     * without invoking the association's destroy handler.
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
     */
    connect(sigName: "notify", callback: (($obj: Component, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Component, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Component_ConstructProps)
    _init (config?: Component_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): Component
    static new_from_icalcomponent(icalcomp: ICalGLib.Component): Component
    static new_from_string(calobj: string): Component
    static new_vtype(vtype: ComponentVType): Component
    static $gtype: GObject.Type
}
interface ReminderWatcher_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of ECal-2.0.ECal.ReminderWatcher */
    /**
     * An #ICalTimezone to be used as the default time zone.
     */
    default_zone?: ICalGLib.Timezone
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
    timers_enabled?: boolean
}
class ReminderWatcher {
    /* Properties of ECal-2.0.ECal.ReminderWatcher */
    /**
     * An #ICalTimezone to be used as the default time zone.
     */
    default_zone: ICalGLib.Timezone
    /**
     * Whether timers are enabled for the #EReminderWatcher. See
     * e_reminder_watcher_set_timers_enabled() for more information
     * what it means.
     * 
     * Default: %TRUE
     */
    timers_enabled: boolean
    /* Fields of GObject-2.0.GObject.Object */
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of ECal-2.0.ECal.ReminderWatcher */
    /**
     * Returns a new string with a text description of the `rd`. The text format
     * can be influenced with `flags`.
     * 
     * Free the returned string with g_free(), when no longer needed.
     */
    describe_data(rd: ReminderData, flags: number): string
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
    dismiss_all(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes the operation started with e_reminder_watcher_dismiss_all().
     */
    dismiss_all_finish(result: Gio.AsyncResult): boolean
    /**
     * Synchronously dismiss all past reminders. The operation stops after
     * the first error is encountered, which can be before all the past
     * reminders are dismissed.
     */
    dismiss_all_sync(cancellable?: Gio.Cancellable | null): boolean
    /**
     * Finishes the operation started with e_reminder_watcher_dismiss().
     */
    dismiss_finish(result: Gio.AsyncResult): boolean
    /**
     * Synchronously dismiss single reminder in the past or snoozed reminders.
     */
    dismiss_sync(rd: ReminderData, cancellable?: Gio.Cancellable | null): boolean
    dup_default_zone(): ICalGLib.Timezone
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
    dup_past(): ReminderData[] | null
    /**
     * Gathers a #GSList of currently snoozed reminder with e_reminder_watcher_snooze().
     * The snoozed reminders are remembered across sessions and they are re-triggered
     * when their snooze time elapses, which can move them back to the list of past reminders.
     * 
     * Free the returned #GSList with
     * g_slist_free_full (reminders, e_reminder_data_free);
     * when no longer needed.
     */
    dup_snoozed(): ReminderData[] | null
    get_registry(): EDataServer.SourceRegistry
    get_timers_enabled(): boolean
    ref_opened_client(source_uid: string): Client | null
    /**
     * Sets the default zone for the `watcher`. This is used when calculating
     * trigger times for floating component times. When the `zone` is %NULL,
     * then sets a UTC time zone.
     */
    set_default_zone(zone?: ICalGLib.Timezone | null): void
    /**
     * The `watcher` can be used both for scheduling the timers for the reminders
     * and respond to them through the "triggered" signal, or only to listen for
     * changes on the past reminders. The default is to have timers enabled, thus
     * to response to scheduled reminders. Disabling the timers also means there
     * will be less resources needed by the `watcher`.
     */
    set_timers_enabled(enabled: boolean): void
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
    timer_elapsed(): void
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
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    /**
     * Creates a binding between `source_property` on `source` and `target_property`
     * on `target,` allowing you to set the transformation functions to be used by
     * the binding.
     * 
     * This function is the language bindings friendly version of
     * g_object_bind_property_full(), using #GClosures instead of
     * function pointers.
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
     */
    get_property(property_name: string, value: any): void
    /**
     * This function gets back user data pointers stored via
     * g_object_set_qdata().
     */
    get_qdata(quark: GLib.Quark): object | null
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
     */
    set_data(key: string, data?: object | null): void
    /**
     * Sets a property on an object.
     */
    set_property(property_name: string, value: any): void
    /**
     * Remove a specified datum from the object's data associations,
     * without invoking the association's destroy handler.
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
     */
    watch_closure(closure: Function): void
    /* Virtual methods of ECal-2.0.ECal.ReminderWatcher */
    vfunc_cal_client_connect(source: EDataServer.Source, source_type: ClientSourceType, wait_for_connected_seconds: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    vfunc_changed(): void
    vfunc_format_time(rd: ReminderData, itt: ICalGLib.Time, inout_buffer: string, buffer_size: number): void
    vfunc_schedule_timer(at_time: number): void
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
     */
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of ECal-2.0.ECal.ReminderWatcher */
    /**
     * Signal is emitted when the list of past or snoozed reminders
     * changes. It's called also when GSettings key for past reminders
     * is notified as changed, because this list is not held in memory.
     */
    connect(sigName: "changed", callback: (($obj: ReminderWatcher) => void)): number
    connect_after(sigName: "changed", callback: (($obj: ReminderWatcher) => void)): number
    emit(sigName: "changed"): void
    /**
     * Formats time `itt` to a string and writes it to `inout_buffer,` which can hold
     * up to `buffer_size` bytes. The first character of `inout_buffer` is the nul-byte
     * when nothing wrote to it yet.
     */
    connect(sigName: "format-time", callback: (($obj: ReminderWatcher, rd: ReminderData, itt: ICalGLib.Time, inout_buffer: object | null, buffer_size: number) => void)): number
    connect_after(sigName: "format-time", callback: (($obj: ReminderWatcher, rd: ReminderData, itt: ICalGLib.Time, inout_buffer: object | null, buffer_size: number) => void)): number
    emit(sigName: "format-time", rd: ReminderData, itt: ICalGLib.Time, inout_buffer: object | null, buffer_size: number): void
    /**
     * Signal is emitted when any reminder is either overdue or triggered.
     */
    connect(sigName: "triggered", callback: (($obj: ReminderWatcher, reminders: ReminderData[], snoozed: boolean) => void)): number
    connect_after(sigName: "triggered", callback: (($obj: ReminderWatcher, reminders: ReminderData[], snoozed: boolean) => void)): number
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
    connect(sigName: "notify", callback: (($obj: ReminderWatcher, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: ReminderWatcher, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::default-zone", callback: (($obj: ReminderWatcher, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::default-zone", callback: (($obj: ReminderWatcher, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::timers-enabled", callback: (($obj: ReminderWatcher, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::timers-enabled", callback: (($obj: ReminderWatcher, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
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
    get_icalcomponent(): ICalGLib.Component
    static name: string
    static new(icomp: ICalGLib.Component): ClientTzlookupICalCompData
    constructor(icomp: ICalGLib.Component)
    /* Static methods and pseudo-constructors */
    static new(icomp: ICalGLib.Component): ClientTzlookupICalCompData
}
abstract class ClientViewClass {
    /* Fields of ECal-2.0.ECal.ClientViewClass */
    readonly progress: (client_view: ClientView, percent: number, message: string) => void
    readonly complete: (client_view: ClientView, error: GLib.Error) => void
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
    fill_component(component: ICalGLib.Component): void
    /**
     * Get the last time the alarm had been acknowledged, that is, when its
     * reminder had been triggered.
     * The returned #ICalTime is owned by `alarm` and should not be modified,
     * neither its content.
     */
    get_acknowledged(): ICalGLib.Time | null
    /**
     * Get the `alarm` action, as an #ECalComponentAlarmAction.
     */
    get_action(): ComponentAlarmAction
    /**
     * Creates a VALARM #ICalComponent filled with data from the `alarm`.
     * In case the `alarm` doesn't have set 'uid', a new is assigned.
     * Free the returned component with g_object_unref(), when no longer
     * needed.
     */
    get_as_component(): ICalGLib.Component
    /**
     * Get the list of attachments, as #ICalAttach.
     * The returned #GSList is owned by `alarm` and should not be modified,
     * neither its content.
     */
    get_attachments(): ICalGLib.Attach[] | null
    /**
     * Get the list of attendees, as #ECalComponentAttendee.
     * The returned #GSList is owned by `alarm` and should not be modified,
     * neither its content.
     */
    get_attendees(): ComponentAttendee[] | null
    /**
     * Get the `alarm` description, as an #ECalComponentText.
     */
    get_description(): ComponentText | null
    get_property_bag(): ComponentPropertyBag
    /**
     * Get the `alarm` repeat information, as an ECalComponentAlarmRepeat.
     */
    get_repeat(): ComponentAlarmRepeat | null
    /**
     * Get the `alarm` summary, as an #ECalComponentText.
     */
    get_summary(): ComponentText | null
    /**
     * Get the `alarm` trigger, as an #ECalComponentAlarmTrigger.
     */
    get_trigger(): ComponentAlarmTrigger | null
    /**
     * Get the `alarm` UID.
     */
    get_uid(): string | null
    has_attachments(): boolean
    has_attendees(): boolean
    /**
     * Set the acknowledged time of the `alarm`. Use %NULL to unset it.
     */
    set_acknowledged(when?: ICalGLib.Time | null): void
    /**
     * Set the `alarm` action, as an #ECalComponentAlarmAction.
     */
    set_action(action: ComponentAlarmAction): void
    /**
     * Set the list of attachments, as a #GSList of an #ICalAttach.
     */
    set_attachments(attachments?: ICalGLib.Attach[] | null): void
    /**
     * Set the list of attendees, as a #GSList of an #ECalComponentAttendee.
     */
    set_attendees(attendees?: ComponentAttendee[] | null): void
    /**
     * Set the `alarm` description, as an #ECalComponentText.
     */
    set_description(description?: ComponentText | null): void
    /**
     * Fill the `alarm` structure with the information from
     * the `component,` which should be of %I_CAL_VALARM_COMPONENT kind.
     */
    set_from_component(component: ICalGLib.Component): void
    /**
     * Set the `alarm` repeat information, as an #ECalComponentAlarmRepeat.
     */
    set_repeat(repeat?: ComponentAlarmRepeat | null): void
    /**
     * Set the `alarm` summary, as an #ECalComponentText.
     */
    set_summary(summary?: ComponentText | null): void
    /**
     * Set the `alarm` trigger, as an #ECalComponentAlarmTrigger.
     */
    set_trigger(trigger?: ComponentAlarmTrigger | null): void
    /**
     * Set the `alarm` UID, or generates a new UID, if `uid` is %NULL or an empty string.
     */
    set_uid(uid?: string | null): void
    /**
     * Set the acknowledged time of the `alarm`. Use %NULL to unset it.
     * The function assumes ownership of the `when`.
     */
    take_acknowledged(when?: ICalGLib.Time | null): void
    static name: string
    static new(): ComponentAlarm
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): ComponentAlarm
    static new_from_component(component: ICalGLib.Component): ComponentAlarm
}
class ComponentAlarmInstance {
    /* Methods of ECal-2.0.ECal.ComponentAlarmInstance */
    /**
     * Returns a newly allocated copy of `instance,` which should be freed with
     * e_cal_component_alarm_instance_free(), when no longer needed.
     */
    copy(): ComponentAlarmInstance
    get_occur_end(): number
    get_occur_start(): number
    get_rid(): string | null
    get_time(): number
    get_uid(): string
    /**
     * Set the actual event occurrence end to which this `instance` corresponds.
     */
    set_occur_end(occur_end: number): void
    /**
     * Set the actual event occurrence start to which this `instance` corresponds.
     */
    set_occur_start(occur_start: number): void
    /**
     * Set the Recurrence ID of the component this `instance` was generated for.
     */
    set_rid(rid?: string | null): void
    /**
     * Set the instance time, i.e. "5 minutes before the appointment".
     */
    set_time(instance_time: number): void
    /**
     * Set the alarm UID.
     */
    set_uid(uid: string): void
    static name: string
    static new(uid: string, instance_time: number, occur_start: number, occur_end: number): ComponentAlarmInstance
    constructor(uid: string, instance_time: number, occur_start: number, occur_end: number)
    /* Static methods and pseudo-constructors */
    static new(uid: string, instance_time: number, occur_start: number, occur_end: number): ComponentAlarmInstance
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
    get_interval(): ICalGLib.Duration
    /**
     * Returns the interval between repetitions of the `repeat` in seconds.
     */
    get_interval_seconds(): number
    get_repetitions(): number
    /**
     * Set the `interval` between repetitions of the `repeat`.
     */
    set_interval(interval: ICalGLib.Duration): void
    /**
     * Set the `interval_seconds` between repetitions of the `repeat`.
     */
    set_interval_seconds(interval_seconds: number): void
    /**
     * Set the `repetitions` count of the `repeat`.
     */
    set_repetitions(repetitions: number): void
    static name: string
    static new(repetitions: number, interval: ICalGLib.Duration): ComponentAlarmRepeat
    constructor(repetitions: number, interval: ICalGLib.Duration)
    /* Static methods and pseudo-constructors */
    static new(repetitions: number, interval: ICalGLib.Duration): ComponentAlarmRepeat
    static new_seconds(repetitions: number, interval_seconds: number): ComponentAlarmRepeat
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
    fill_property(property: ICalGLib.Property): /* property */ ICalGLib.Property
    /**
     * Returns the `trigger` absolute time for an absolute trigger, or %NULL, when
     * the `trigger` is a relative trigger. The object is owned by `trigger` and it's
     * valid until the `trigger` is freed or its absolute time changed.
     */
    get_absolute_time(): ICalGLib.Time | null
    /**
     * Converts information stored in `trigger` into an #ICalProperty
     * of %I_CAL_TRIGGER_PROPERTY kind. The caller is responsible to free
     * the returned object with g_object_unref(), when no longer needed.
     */
    get_as_property(): ICalGLib.Property
    /**
     * Returns the `trigger` duration for a relative `trigger,` or %NULL, when
     * the `trigger` is an absolute trigger.
     */
    get_duration(): ICalGLib.Duration | null
    get_kind(): ComponentAlarmTriggerKind
    get_parameter_bag(): ComponentParameterBag
    /**
     * Set the `trigegr` with the %E_CAL_COMPONENT_ALARM_TRIGGER_ABSOLUTE kind and
     * the `absolute_time` as the time of the trigger. The `absolute_time`
     * should be date/time (not date) in UTC.
     * 
     * To set a relative trigger use e_cal_component_alarm_trigger_set_relative().
     */
    set_absolute(absolute_time: ICalGLib.Time): void
    /**
     * Sets the `trigger` absolute time for an absolute trigger. The `absolute_time`
     * should be date/time (not date) in UTC.
     * 
     * The function does nothing, when the `trigger` is a relative trigger.
     */
    set_absolute_time(absolute_time: ICalGLib.Time): void
    /**
     * Sets the `trigger` duration for a relative trigger. The function does nothing, when
     * the `trigger` is an absolute trigger. The object is owned by `trigger` and it's
     * valid until the `trigger` is freed or its relative duration changed.
     */
    set_duration(duration: ICalGLib.Duration): void
    /**
     * Fill the `trigger` structure with the information from
     * the `property,` which should be of %I_CAL_TRIGGER_PROPERTY kind.
     */
    set_from_property(property: ICalGLib.Property): void
    /**
     * Set the `trigger` kind to `kind`. This works only for other than
     * the %E_CAL_COMPONENT_ALARM_TRIGGER_ABSOLUTE. To change the kind
     * from absolute to relative, or vice versa, use either
     * e_cal_component_alarm_trigger_set_relative() or
     * e_cal_component_alarm_trigger_set_absolute().
     */
    set_kind(kind: ComponentAlarmTriggerKind): void
    /**
     * Set the `trigegr` with the given `kind` and `duration`. The `kind` can be any but
     * the %E_CAL_COMPONENT_ALARM_TRIGGER_ABSOLUTE.
     * To set an absolute trigger use e_cal_component_alarm_trigger_set_absolute().
     */
    set_relative(kind: ComponentAlarmTriggerKind, duration: ICalGLib.Duration): void
    static name: string
    /* Static methods and pseudo-constructors */
    static new_absolute(absolute_time: ICalGLib.Time): ComponentAlarmTrigger
    static new_from_property(property: ICalGLib.Property): ComponentAlarmTrigger
    static new_relative(kind: ComponentAlarmTriggerKind, duration: ICalGLib.Duration): ComponentAlarmTrigger
}
class ComponentAlarms {
    /* Methods of ECal-2.0.ECal.ComponentAlarms */
    /**
     * Add a copy of `instance` into the list of instances. It is added
     * in no particular order.
     */
    add_instance(instance: ComponentAlarmInstance): void
    /**
     * Returns a newly allocated copy of `alarms,` which should be freed with
     * e_cal_component_alarms_free(), when no longer needed.
     */
    copy(): ComponentAlarms
    /**
     * The returned component is valid until the `alarms` is freed.
     */
    get_component(): Component
    /**
     * The returned #GSList is owned by `alarms` and should not be modified.
     * It's valid until the `alarms` is freed or the list of instances is not
     * modified by other functions. The items are of type #ECalComponentAlarmInstance.
     */
    get_instances(): ComponentAlarmInstance[] | null
    /**
     * Remove the `instance` from the list of instances. If found, the `instance`
     * is also freed.
     */
    remove_instance(instance: ComponentAlarmInstance): boolean
    /**
     * Modifies the list of instances to copy of the given `instances`.
     */
    set_instances(instances?: ComponentAlarmInstance[] | null): void
    /**
     * Add the `instance` into the list of instances and assume ownership of it.
     * It is added in no particular order.
     */
    take_instance(instance: ComponentAlarmInstance): void
    /**
     * Replaces the list of instances with the given `instances` and
     * assumes ownership of it. Neither the #GSList, nor its items, should
     * contain the same structures.
     */
    take_instances(instances?: ComponentAlarmInstance[] | null): void
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
    fill_property(property: ICalGLib.Property): /* property */ ICalGLib.Property
    /**
     * Converts information stored in `attendee` into an #ICalProperty
     * of %I_CAL_ATTENDEE_PROPERTY kind. The caller is responsible to free
     * the returned object with g_object_unref(), when no longer needed.
     */
    get_as_property(): ICalGLib.Property
    get_cn(): string | null
    get_cutype(): ICalGLib.ParameterCutype
    get_delegatedfrom(): string | null
    get_delegatedto(): string | null
    get_language(): string | null
    get_member(): string | null
    get_parameter_bag(): ComponentParameterBag
    get_partstat(): ICalGLib.ParameterPartstat
    get_role(): ICalGLib.ParameterRole
    get_rsvp(): boolean
    get_sentby(): string | null
    get_value(): string | null
    /**
     * Set the `attendee` common name (cn) parameter. The %NULL
     * and empty strings are treated as unset the value.
     */
    set_cn(cn?: string | null): void
    /**
     * Set the `attendee` type, as an #ICalParameterCutype.
     */
    set_cutype(cutype: ICalGLib.ParameterCutype): void
    /**
     * Set the `attendee` delegatedfrom parameter. The %NULL
     * and empty strings are treated as unset the value.
     */
    set_delegatedfrom(delegatedfrom?: string | null): void
    /**
     * Set the `attendee` delegatedto parameter. The %NULL
     * and empty strings are treated as unset the value.
     */
    set_delegatedto(delegatedto?: string | null): void
    /**
     * Fill the `attendee` structure with the information from
     * the `property,` which should be of %I_CAL_ATTENDEE_PROPERTY kind.
     */
    set_from_property(property: ICalGLib.Property): void
    /**
     * Set the `attendee` language parameter. The %NULL
     * and empty strings are treated as unset the value.
     */
    set_language(language?: string | null): void
    /**
     * Set the `attendee` member parameter. The %NULL
     * and empty strings are treated as unset the value.
     */
    set_member(member?: string | null): void
    /**
     * Set the `attendee` status, as an #ICalParameterPartstat.
     */
    set_partstat(partstat: ICalGLib.ParameterPartstat): void
    /**
     * Set the `attendee` role, as an #ICalParameterRole.
     */
    set_role(role: ICalGLib.ParameterRole): void
    /**
     * Set the `attendee` RSVP.
     */
    set_rsvp(rsvp: boolean): void
    /**
     * Set the `attendee` sentby parameter. The %NULL
     * and empty strings are treated as unset the value.
     */
    set_sentby(sentby?: string | null): void
    /**
     * Set the `attendee` URI, usually of "mailto:email" form. The %NULL
     * and empty strings are treated as unset the value.
     */
    set_value(value?: string | null): void
    static name: string
    static new(): ComponentAttendee
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): ComponentAttendee
    static new_from_property(property: ICalGLib.Property): ComponentAttendee
    static new_full(value: string | null, member: string | null, cutype: ICalGLib.ParameterCutype, role: ICalGLib.ParameterRole, partstat: ICalGLib.ParameterPartstat, rsvp: boolean, delegatedfrom?: string | null, delegatedto?: string | null, sentby?: string | null, cn?: string | null, language?: string | null): ComponentAttendee
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
    get_tzid(): string | null
    /**
     * Returns the value stored with the `dt`. The object is owned by `dt` and
     * it's valid until the `dt` is freed or its value overwritten.
     */
    get_value(): ICalGLib.Time
    /**
     * Sets both `value` and `tzid` in one call. Use e_cal_component_datetime_set_value()
     * and e_cal_component_datetime_set_tzid() to set them separately.
     */
    set(value: ICalGLib.Time, tzid?: string | null): void
    /**
     * Sets the `tzid` of the `dt`. Any previously set TZID is freed.
     * An empty string or a %NULL as `tzid` is treated as none TZID.
     */
    set_tzid(tzid?: string | null): void
    /**
     * Sets the `value` of the `dt`. Any previously set value is freed.
     */
    set_value(value: ICalGLib.Time): void
    /**
     * Sets the `tzid` of the `dt` and assumes ownership of `tzid`. Any previously
     * set TZID is freed. An empty string or a %NULL as `tzid` is treated as none TZID.
     */
    take_tzid(tzid?: string | null): void
    /**
     * Sets the `value` of the `dt` and assumes ownership of the `value`.
     * Any previously set value is freed.
     */
    take_value(value: ICalGLib.Time): void
    static name: string
    static new(value: ICalGLib.Time, tzid?: string | null): ComponentDateTime
    constructor(value: ICalGLib.Time, tzid?: string | null)
    /* Static methods and pseudo-constructors */
    static new(value: ICalGLib.Time, tzid?: string | null): ComponentDateTime
    static new_take(value: ICalGLib.Time, tzid?: string | null): ComponentDateTime
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
    get_rid(): string | null
    get_uid(): string
    /**
     * Generates a hash value for `id`.
     */
    hash(): number
    /**
     * Sets the RECURRENCE-ID part of the `id`. The `rid` can be %NULL
     * or an empty string, where both are treated as %NULL, which
     * means the `id` has not RECURRENCE-ID.
     */
    set_rid(rid?: string | null): void
    /**
     * Sets the UID part of the `id`.
     */
    set_uid(uid: string): void
    static name: string
    static new(uid: string, rid?: string | null): ComponentId
    constructor(uid: string, rid?: string | null)
    /* Static methods and pseudo-constructors */
    static new(uid: string, rid?: string | null): ComponentId
    static new_take(uid: string, rid?: string | null): ComponentId
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
    fill_property(property: ICalGLib.Property): /* property */ ICalGLib.Property
    /**
     * Converts information stored in `organizer` into an #ICalProperty
     * of %I_CAL_ORGANIZER_PROPERTY kind. The caller is responsible to free
     * the returned object with g_object_unref(), when no longer needed.
     */
    get_as_property(): ICalGLib.Property
    get_cn(): string | null
    get_language(): string | null
    get_parameter_bag(): ComponentParameterBag
    get_sentby(): string | null
    get_value(): string | null
    /**
     * Set the `organizer` common name (cn) parameter. The %NULL
     * and empty strings are treated as unset the value.
     */
    set_cn(cn?: string | null): void
    /**
     * Fill the `organizer` structure with the information from
     * the `property,` which should be of %I_CAL_ORGANIZER_PROPERTY kind.
     */
    set_from_property(property: ICalGLib.Property): void
    /**
     * Set the `organizer` language parameter. The %NULL
     * and empty strings are treated as unset the value.
     */
    set_language(language?: string | null): void
    /**
     * Set the `organizer` sentby parameter. The %NULL
     * and empty strings are treated as unset the value.
     */
    set_sentby(sentby?: string | null): void
    /**
     * Set the `organizer` URI, usually of "mailto:email" form. The %NULL
     * and empty strings are treated as unset the value.
     */
    set_value(value?: string | null): void
    static name: string
    static new(): ComponentOrganizer
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): ComponentOrganizer
    static new_from_property(property: ICalGLib.Property): ComponentOrganizer
    static new_full(value?: string | null, sentby?: string | null, cn?: string | null, language?: string | null): ComponentOrganizer
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
    assign(src_bag: ComponentParameterBag): void
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
    fill_property(property: ICalGLib.Property): void
    /**
     * Returns the #ICalParameter at the given `index`. If the `index` is
     * out of bounds (not lower than e_cal_component_parameter_bag_get_count()),
     * then %NULL is returned.
     * 
     * The returned parameter is owned by the `bag` and should not be freed
     * by the caller.
     */
    get(index: number): ICalGLib.Parameter | null
    get_count(): number
    get_first_by_kind(kind: ICalGLib.ParameterKind): number
    /**
     * Removes the #ICalParameter at the given `index`. If the `index` is
     * out of bounds (not lower than e_cal_component_parameter_bag_get_count()),
     * then the function does nothing.
     */
    remove(index: number): void
    /**
     * Removes the first or all (depending on the `all)` parameters of the given `kind`.
     */
    remove_by_kind(kind: ICalGLib.ParameterKind, all: boolean): number
    /**
     * Fills the `bag` with parameters from the `property,` for which the `func`
     * returned %TRUE. When the `func` is %NULL, all the parameters are included.
     * The `bag` content is cleared before any parameter is added.
     */
    set_from_property(property: ICalGLib.Property): void
    /**
     * Adds the `param` into the `bag` and assumes ownership of the `param`.
     */
    take(param: ICalGLib.Parameter): void
    static name: string
    static new(): ComponentParameterBag
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): ComponentParameterBag
    static new_from_property(property: ICalGLib.Property): ComponentParameterBag
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
    get_duration(): ICalGLib.Duration
    /**
     * Returns the end of the `period`. This can be called only on `period`
     * objects of kind %E_CAL_COMPONENT_PERIOD_DATETIME. The end time can
     * be a null-time, in which case the `period` corresponds to a single
     * date/date-time value, not to a period.
     * 
     * The returned #ICalTime object is owned by `period` and should not
     * be freed. It's valid until the `period` is freed or its end time changed.
     */
    get_end(): ICalGLib.Time | null
    /**
     * Returns kind of the `period,` one of #ECalComponentPeriodKind. Depending
     * on it either e_cal_component_period_get_end()/e_cal_component_period_set_end()
     * or e_cal_component_period_get_duration()/e_cal_component_period_set_duration()
     * can be used. The kind of an existing `period` canbe changed with
     * e_cal_component_period_set_datetime_full() and e_cal_component_period_set_duration_full().
     */
    get_kind(): ComponentPeriodKind
    /**
     * Returns the start of the `period`. The returned #ICalTime object
     * is owned by `period` and should not be freed. It's valid until the `period`
     * is freed or its start time changed.
     */
    get_start(): ICalGLib.Time
    /**
     * Set the kind of `period` to be %E_CAL_COMPONENT_PERIOD_DATETIME
     * and fills the content with `start` and `end`.
     */
    set_datetime_full(start: ICalGLib.Time, end?: ICalGLib.Time | null): void
    /**
     * Set the duration of the `period`. This can be called only on `period`
     * objects of kind %E_CAL_COMPONENT_PERIOD_DURATION.
     */
    set_duration(duration: ICalGLib.Duration): void
    /**
     * Set the kind of `period` to be %E_CAL_COMPONENT_PERIOD_DURATION
     * and fills the content with `start` and `duration`.
     */
    set_duration_full(start: ICalGLib.Time, duration: ICalGLib.Duration): void
    /**
     * Set the end of the `period`. This can be called only on `period`
     * objects of kind %E_CAL_COMPONENT_PERIOD_DATETIME.
     */
    set_end(end?: ICalGLib.Time | null): void
    /**
     * Set the `start` of the `period`. This can be called on any kind of the `period`.
     */
    set_start(start: ICalGLib.Time): void
    static name: string
    /* Static methods and pseudo-constructors */
    static new_datetime(start: ICalGLib.Time, end?: ICalGLib.Time | null): ComponentPeriod
    static new_duration(start: ICalGLib.Time, duration: ICalGLib.Duration): ComponentPeriod
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
    assign(src_bag: ComponentPropertyBag): void
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
    fill_component(component: ICalGLib.Component): void
    /**
     * Returns the #ICalProperty at the given `index`. If the `index` is
     * out of bounds (not lower than e_cal_component_property_bag_get_count()),
     * then %NULL is returned.
     * 
     * The returned property is owned by the `bag` and should not be freed
     * by the caller.
     */
    get(index: number): ICalGLib.Property | null
    get_count(): number
    get_first_by_kind(kind: ICalGLib.PropertyKind): number
    /**
     * Removes the #ICalProperty at the given `index`. If the `index` is
     * out of bounds (not lower than e_cal_component_property_bag_get_count()),
     * then the function does nothing.
     */
    remove(index: number): void
    /**
     * Removes the first or all (depending on the `all)` properties of the given `kind`.
     */
    remove_by_kind(kind: ICalGLib.PropertyKind, all: boolean): number
    /**
     * Fills the `bag` with properties from the `component,` for which the `func`
     * returned %TRUE. When the `func` is %NULL, all the properties are included.
     * The `bag` content is cleared before any property is added.
     */
    set_from_component(component: ICalGLib.Component): void
    /**
     * Adds the `prop` into the `bag` and assumes ownership of the `prop`.
     */
    take(prop: ICalGLib.Property): void
    static name: string
    static new(): ComponentPropertyBag
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): ComponentPropertyBag
    static new_from_component(component: ICalGLib.Component): ComponentPropertyBag
}
class ComponentRange {
    /* Methods of ECal-2.0.ECal.ComponentRange */
    copy(): ComponentRange
    /**
     * Returns the date/time of the `range`. The returned #ECalComponentDateTime
     * is owned by `range` and should not be freed. It's valid until the `range`
     * is freed or its date/time changed.
     */
    get_datetime(): ComponentDateTime
    get_kind(): ComponentRangeKind
    /**
     * Set the date/time part of the `range`.
     */
    set_datetime(datetime: ComponentDateTime): void
    /**
     * Set the `kind` of the `range`.
     */
    set_kind(kind: ComponentRangeKind): void
    static name: string
    static new(kind: ComponentRangeKind, datetime: ComponentDateTime): ComponentRange
    constructor(kind: ComponentRangeKind, datetime: ComponentDateTime)
    /* Static methods and pseudo-constructors */
    static new(kind: ComponentRangeKind, datetime: ComponentDateTime): ComponentRange
}
class ComponentText {
    /* Methods of ECal-2.0.ECal.ComponentText */
    copy(): ComponentText
    get_altrep(): string
    get_value(): string
    /**
     * Set the `altrep` as the alternate representation URI of the `text`.
     */
    set_altrep(altrep?: string | null): void
    /**
     * Set the `value` as the description string of the `text`.
     */
    set_value(value?: string | null): void
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
    get_component(): Component
    get_instance(): ComponentAlarmInstance
    get_source_uid(): string
    /**
     * Set an #ECalComponent `component` as associated with this `rd`.
     * The `rd` creates a copy of the `component`.
     */
    set_component(component: Component): void
    /**
     * Set an #ECalComponentAlarmInstance `instance` as associated with this `rd`.
     * The `rd` creates a copy of the `instance`.
     */
    set_instance(instance: ComponentAlarmInstance): void
    /**
     * Set an #ESource UID for `rd`.
     */
    set_source_uid(source_uid: string): void
    static name: string
    static new(source_uid: string, component: Component, instance: ComponentAlarmInstance): ReminderData
    constructor(source_uid: string, component: Component, instance: ComponentAlarmInstance)
    /* Static methods and pseudo-constructors */
    static new(source_uid: string, component: Component, instance: ComponentAlarmInstance): ReminderData
}
abstract class ReminderWatcherClass {
    /* Fields of ECal-2.0.ECal.ReminderWatcherClass */
    readonly parent_class: GObject.ObjectClass
    readonly schedule_timer: (watcher: ReminderWatcher, at_time: number) => void
    readonly format_time: (watcher: ReminderWatcher, rd: ReminderData, itt: ICalGLib.Time, inout_buffer: string, buffer_size: number) => void
    readonly changed: (watcher: ReminderWatcher) => void
    readonly cal_client_connect: (watcher: ReminderWatcher, source: EDataServer.Source, source_type: ClientSourceType, wait_for_connected_seconds: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null) => void
    readonly reserved: object[]
    static name: string
}
class ReminderWatcherPrivate {
    static name: string
}
abstract class TimezoneCacheInterface {
    /* Fields of ECal-2.0.ECal.TimezoneCacheInterface */
    readonly tzcache_add_timezone: (cache: TimezoneCache, zone: ICalGLib.Timezone) => void
    readonly timezone_added: (cache: TimezoneCache, zone: ICalGLib.Timezone) => void
    readonly reserved_signals: object[]
    static name: string
}
}
export default ECal;