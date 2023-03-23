
/*
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in `ts-for-gir` or create a bug report on https://github.com/gjsify/ts-for-gjs
 */
/**
 * ECal-2.0
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
 * @bitfield 
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
 * @bitfield 
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
 * @bitfield 
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
 * @bitfield 
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
 * @bitfield 
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
const BACKEND_PROPERTY_ALARM_EMAIL_ADDRESS: string | null
/**
 * An email address associated with the calendar.
 */
const BACKEND_PROPERTY_CAL_EMAIL_ADDRESS: string | null
/**
 * A default object for the calendar. Calendars use VEVENT, memo lists VJOURNAL
 * and task lists VTODO, which can have prefilled values by the backend.
 */
const BACKEND_PROPERTY_DEFAULT_OBJECT: string | null
/**
 * The current overall revision string, this can be used as
 * a quick check to see if data has changed at all since the
 * last time the calendar revision was observed.
 */
const BACKEND_PROPERTY_REVISION: string | null
/**
 * Extension property for alarm components so that we can reference them by UID.
 */
const EVOLUTION_ALARM_UID_PROPERTY: string | null
/**
 * The X parameter name being used to store the enddate in RRULE and EXRULE properties.
 */
const EVOLUTION_ENDDATE_PARAMETER: string | null
const LIBICAL_GLIB_UNSTABLE_API: number
/**
 * Flag indicating that the backend supports alarm description
 */
const STATIC_CAPABILITY_ALARM_DESCRIPTION: string | null
/**
 * Let the client know that it should store All Day event times as time
 * with a time zone, rather than as a date.
 */
const STATIC_CAPABILITY_ALL_DAY_EVENT_AS_TIME: string | null
/**
 * Flag indicating that the backend supports bulk additions.
 */
const STATIC_CAPABILITY_BULK_ADDS: string | null
/**
 * Flag indicating that the backend supports bulk modifications.
 */
const STATIC_CAPABILITY_BULK_MODIFIES: string | null
/**
 * Flag indicating that the backend supports bulk removals.
 */
const STATIC_CAPABILITY_BULK_REMOVES: string | null
/**
 * When the capability is set, the client supports storing color
 * for individual components.
 */
const STATIC_CAPABILITY_COMPONENT_COLOR: string | null
const STATIC_CAPABILITY_CREATE_MESSAGES: string | null
const STATIC_CAPABILITY_DELEGATE_SUPPORTED: string | null
const STATIC_CAPABILITY_DELEGATE_TO_MANY: string | null
const STATIC_CAPABILITY_HAS_UNACCEPTED_MEETING: string | null
/**
 * Flag indicating that the backend does not support alarm after start the event
 */
const STATIC_CAPABILITY_NO_ALARM_AFTER_START: string | null
const STATIC_CAPABILITY_NO_ALARM_REPEAT: string | null
const STATIC_CAPABILITY_NO_AUDIO_ALARMS: string | null
const STATIC_CAPABILITY_NO_CONV_TO_ASSIGN_TASK: string | null
const STATIC_CAPABILITY_NO_CONV_TO_RECUR: string | null
const STATIC_CAPABILITY_NO_DISPLAY_ALARMS: string | null
const STATIC_CAPABILITY_NO_EMAIL_ALARMS: string | null
const STATIC_CAPABILITY_NO_GEN_OPTIONS: string | null
const STATIC_CAPABILITY_NO_MEMO_START_DATE: string | null
const STATIC_CAPABILITY_NO_ORGANIZER: string | null
const STATIC_CAPABILITY_NO_PROCEDURE_ALARMS: string | null
const STATIC_CAPABILITY_NO_TASK_ASSIGNMENT: string | null
const STATIC_CAPABILITY_NO_THISANDFUTURE: string | null
const STATIC_CAPABILITY_NO_THISANDPRIOR: string | null
const STATIC_CAPABILITY_NO_TRANSPARENCY: string | null
const STATIC_CAPABILITY_ONE_ALARM_ONLY: string | null
const STATIC_CAPABILITY_ORGANIZER_MUST_ACCEPT: string | null
const STATIC_CAPABILITY_ORGANIZER_MUST_ATTEND: string | null
const STATIC_CAPABILITY_ORGANIZER_NOT_EMAIL_ADDRESS: string | null
const STATIC_CAPABILITY_RECURRENCES_NO_MASTER: string | null
const STATIC_CAPABILITY_REFRESH_SUPPORTED: string | null
const STATIC_CAPABILITY_REMOVE_ALARMS: string | null
/**
 * FIXME: Document me.
 */
const STATIC_CAPABILITY_REMOVE_ONLY_THIS: string | null
const STATIC_CAPABILITY_REQ_SEND_OPTIONS: string | null
const STATIC_CAPABILITY_SAVE_SCHEDULES: string | null
/**
 * When the capability is set, the backend handles only simple memos,
 * which means it stores only memo description. The summary can be changed
 * by the backend, if needed.
 */
const STATIC_CAPABILITY_SIMPLE_MEMO: string | null
/**
 * Similar to the %E_CAL_STATIC_CAPABILITY_SIMPLE_MEMO, except the backend stores
 * the description and the summary separately.
 */
const STATIC_CAPABILITY_SIMPLE_MEMO_WITH_SUMMARY: string | null
/**
 * When the capability is set, the client can store and provide recurring
 * tasks, otherwise it cannot.
 */
const STATIC_CAPABILITY_TASK_CAN_RECUR: string | null
/**
 * Let the client know that the Task Start date, Due date and Completed date
 * can be entered only as dates. When the capability is not set, then these
 * can be date and time.
 */
const STATIC_CAPABILITY_TASK_DATE_ONLY: string | null
/**
 * Set, when the backend supports ESTIMATED-DURATION property for tasks.
 */
const STATIC_CAPABILITY_TASK_ESTIMATED_DURATION: string | null
/**
 * When the capability is set, the backend handles task recurrence
 * completion on its own. This does not imply E_CAL_STATIC_CAPABILITY_TASK_CAN_RECUR.
 */
const STATIC_CAPABILITY_TASK_HANDLE_RECUR: string | null
/**
 * When the capability is set, the client cannot store reminders
 * on tasks, otherwise it can.
 */
const STATIC_CAPABILITY_TASK_NO_ALARM: string | null
/**
 * Creates an ISO 8601 UTC representation from a time value.
 * @param t A time value.
 * @returns String with the ISO 8601 representation of the UTC time.
 */
function isodate_from_time_t(t: number): string | null
/**
 * Matches `tzid` against the system timezone definitions
 * and returns the matching TZID, or %NULL if none found
 * @param tzid a timezone ID
 * @returns The matching TZID, or %NULL if none found or for UTC
 */
function match_tzid(tzid: string | null): string | null
/**
 * Describes some simple types of recurrences in a human-readable and localized way.
 * The `flags` influence the output format and what to do when the `icalcomp`
 * contains more complicated recurrence, some which the function cannot describe.
 * 
 * The `week_start_day` is used for weekly recurrences, to start the list of selected
 * days at that day.
 * 
 * Uses e_time_format_date_and_time() to format the date/time value in the string.
 * Call e_cal_recur_describe_recurrence_ex() with a custom formatting function.
 * 
 * Free the returned string with g_free(), when no longer needed.
 * @param icalcomp an #ICalComponent
 * @param week_start_day a day when the week starts
 * @param flags bit-or of #ECalRecurDescribeRecurrenceFlags
 * @returns a newly allocated string, which    describes the recurrence of the @icalcomp, or #NULL, when the @icalcomp    doesn't recur or the recurrence is too complicated to describe, also    according to given @flags.
 */
function recur_describe_recurrence(icalcomp: ICalGLib.Component, week_start_day: GLib.DateWeekday, flags: number): string | null
/**
 * Describes some simple types of recurrences in a human-readable and localized way.
 * The `flags` influence the output format and what to do when the `icalcomp`
 * contains more complicated recurrence, some which the function cannot describe.
 * 
 * The `week_start_day` is used for weekly recurrences, to start the list of selected
 * days at that day.
 * 
 * If `datetime_fmt_func` is %NULL, the e_time_format_date_and_time() is used
 * to format data/time value.
 * 
 * Free the returned string with g_free(), when no longer needed.
 * @param icalcomp an #ICalComponent
 * @param week_start_day a day when the week starts
 * @param flags bit-or of #ECalRecurDescribeRecurrenceFlags
 * @param datetime_fmt_func formatting function for date/time value
 * @returns a newly allocated string, which    describes the recurrence of the @icalcomp, or #NULL, when the @icalcomp    doesn't recur or the recurrence is too complicated to describe, also    according to given @flags.
 */
function recur_describe_recurrence_ex(icalcomp: ICalGLib.Component, week_start_day: GLib.DateWeekday, flags: number, datetime_fmt_func: RecurFormatDateTimeFunc | null): string | null
/**
 * This recalculates the end dates for recurrence & exception rules which use
 * the COUNT property. If `refresh` is %TRUE it will recalculate all enddates
 * for rules which use COUNT. If `refresh` is %FALSE, it will only calculate
 * the enddate if it hasn't already been set. It returns %TRUE if the component
 * was changed, i.e. if the component should be saved at some point.
 * We store the enddate in the %E_CAL_EVOLUTION_ENDDATE_PARAMETER parameter of the RRULE
 * or EXRULE.
 * @param comp an #ECalComponent
 * @param refresh %TRUE to recalculate all end dates
 * @param tz_cb function to call to resolve timezones
 * @param cancellable optional #GCancellable object, or %NULL
 * @returns %TRUE if the component was changed, %FALSE otherwise
 */
function recur_ensure_end_dates(comp: Component, refresh: boolean, tz_cb: RecurResolveTimezoneCb, cancellable: Gio.Cancellable | null): boolean
/**
 * Calls the given callback function for each occurrence of the event that
 * intersects the range between the given `start` and `end` times (the end time is
 * not included). Note that the occurrences may start before the given start
 * time.
 * 
 * If the callback routine returns FALSE the occurrence generation stops.
 * 
 * The start and end times are required valid times, start before end time.
 * 
 * The `get_tz_callback` is used to resolve references to timezones. It is passed
 * a TZID and should return the ICalTimezone * corresponding to that TZID. We need to
 * do this as we access timezones in different ways on the client & server.
 * 
 * The default_timezone argument is used for DTSTART or DTEND properties that
 * are DATE values or do not have a TZID (i.e. floating times).
 * @param icalcomp an #ICalComponent
 * @param interval_start an interval start, for which generate instances
 * @param interval_end an interval end, for which generate instances
 * @param default_timezone a default #ICalTimezone
 * @param cancellable a #GCancellable; can be %NULL
 * @returns %TRUE if successful (when all instances had been returned), %FALSE otherwise.
 */
function recur_generate_instances_sync(icalcomp: ICalGLib.Component, interval_start: ICalGLib.Time, interval_end: ICalGLib.Time, default_timezone: ICalGLib.Timezone, cancellable: Gio.Cancellable | null): boolean
function recur_get_localized_nth(nth: number): string | null
function recur_obtain_enddate(ir: ICalGLib.Recurrence, prop: ICalGLib.Property, zone: ICalGLib.Timezone, convert_end_date: boolean): number
/**
 * Fetches the system timezone location string.
 * 
 * Note: Since 3.4 the returned timezone location is either NULL or
 * an equivalent within known libical timezones.
 * 
 * The returned string should be freed with g_free().
 * @returns system timezone location string, or %NULL on an error.
 */
function system_timezone_get_location(): string | null
/**
 * Adds a day onto the time, using local time.
 * Note that if clocks go forward due to daylight savings time, there are
 * some non-existent local times, so the hour may be changed to make it a
 * valid time. This also means that it may not be wise to keep calling
 * time_add_day() to step through a certain period - if the hour gets changed
 * to make it valid time, any further calls to time_add_day() will also return
 * this hour, which may not be what you want.
 * @param time A time_t value.
 * @param days Number of days to add.
 * @returns a time_t value containing @time plus the days added.
 */
function time_add_day(time: number, days: number): number
/**
 * Adds or subtracts a number of days to/from the given time_t value, using
 * the given timezone.
 * NOTE: this function is only here to make the transition to the timezone
 * functions easier. New code should use ICalTime values and
 * i_cal_time_adjust() to add or subtract days, hours, minutes & seconds.
 * @param time A time_t value.
 * @param days Number of days to add.
 * @param zone Timezone to use.
 * @returns a time_t value containing @time plus the days added.
 */
function time_add_day_with_zone(time: number, days: number, zone: ICalGLib.Timezone): number
/**
 * Adds or subtracts a number of months to/from the given time_t value, using
 * the given timezone.
 * 
 * If the day would be off the end of the month (e.g. adding 1 month to
 * 30th January, would lead to an invalid day, 30th February), it moves it
 * down to the last day in the month, e.g. 28th Feb (or 29th in a leap year.)
 * 
 * NOTE: this function is only here to make the transition to the timezone
 * functions easier. New code should use ICalTime values and
 * i_cal_time_adjust() to add or subtract days, hours, minutes & seconds.
 * @param time A time_t value.
 * @param months Number of months to add.
 * @param zone Timezone to use.
 * @returns a time_t value containing @time plus the months added.
 */
function time_add_month_with_zone(time: number, months: number, zone: ICalGLib.Timezone): number
/**
 * Adds the given number of weeks to a time value.
 * @param time A time_t value.
 * @param weeks Number of weeks to add.
 * @returns a time_t value containing @time plus the weeks added.
 */
function time_add_week(time: number, weeks: number): number
/**
 * Adds or subtracts a number of weeks to/from the given time_t value, using
 * the given timezone.
 * NOTE: this function is only here to make the transition to the timezone
 * functions easier. New code should use ICalTime values and
 * i_cal_time_adjust() to add or subtract days, hours, minutes & seconds.
 * @param time A time_t value.
 * @param weeks Number of weeks to add.
 * @param zone Timezone to use.
 * @returns a time_t value containing @time plus the weeks added.
 */
function time_add_week_with_zone(time: number, weeks: number, zone: ICalGLib.Timezone): number
/**
 * Returns the start of the day, according to the local time.
 * @param t A time_t value.
 * @returns the time corresponding to the beginning of the day.
 */
function time_day_begin(t: number): number
/**
 * Returns the start of the day containing the given time_t, using the given
 * timezone.
 * NOTE: this function is only here to make the transition to the timezone
 * functions easier. New code should use ICalTime values and
 * i_cal_time_adjust() to add or subtract days, hours, minutes & seconds.
 * @param time A time_t value.
 * @param zone Timezone to use.
 * @returns the beginning of the day.
 */
function time_day_begin_with_zone(time: number, zone: ICalGLib.Timezone): number
/**
 * Returns the end of the day, according to the local time.
 * @param t A time_t value.
 * @returns the time corresponding to the end of the day.
 */
function time_day_end(t: number): number
/**
 * Returns the end of the day containing the given time_t, using the given
 * timezone. (The end of the day is the start of the next day.)
 * NOTE: this function is only here to make the transition to the timezone
 * functions easier. New code should use ICalTime values and
 * i_cal_time_adjust() to add or subtract days, hours, minutes & seconds.
 * @param time A time_t value.
 * @param zone Timezone to use.
 * @returns the end of the day.
 */
function time_day_end_with_zone(time: number, zone: ICalGLib.Timezone): number
/**
 * Returns the day of the week for the specified date, 0 (Sun) to 6 (Sat).
 * For the days that were removed on the Gregorian reformation, it returns
 * Thursday. Year is the normal year, e.g. 2001. Month is 0 to 11.
 * @param day The day.
 * @param month The month.
 * @param year The year.
 * @returns the day of the week for the given date.
 */
function time_day_of_week(day: number, month: number, year: number): number
/**
 * Returns the 1-based day number within the year of the specified date.
 * Year is the normal year, e.g. 2001. Month is 0 to 11.
 * @param day The day.
 * @param month The month.
 * @param year The year.
 * @returns the day of the year.
 */
function time_day_of_year(day: number, month: number, year: number): number
/**
 * Returns the number of days in the month. Year is the normal year, e.g. 2001.
 * Month is 0 (Jan) to 11 (Dec).
 * @param year The year.
 * @param month The month.
 * @returns number of days in the given month/year.
 */
function time_days_in_month(year: number, month: number): number
/**
 * Converts an ISO 8601 UTC time string into a time_t value.
 * @param str Date/time value in ISO 8601 format.
 * @returns Time_t corresponding to the specified ISO string. Note that we only allow UTC times at present.
 */
function time_from_isodate(str: string | null): number
/**
 * Returns whether the specified year is a leap year. Year is the normal year,
 * e.g. 2001.
 * @param year The year.
 * @returns TRUE if the year is leap, FALSE if not.
 */
function time_is_leap_year(year: number): boolean
/**
 * Returns the number of leap years since year 1 up to (but not including) the
 * specified year. Year is the normal year, e.g. 2001.
 * @param year The year.
 * @returns number of leap years.
 */
function time_leap_years_up_to(year: number): number
/**
 * Returns the start of the month containing the given time_t, using the given
 * timezone.
 * NOTE: this function is only here to make the transition to the timezone
 * functions easier. New code should use ICalTime values and
 * i_cal_time_adjust() to add or subtract days, hours, minutes & seconds.
 * @param time A time_t value.
 * @param zone Timezone to use.
 * @returns the beginning of the month.
 */
function time_month_begin_with_zone(time: number, zone: ICalGLib.Timezone): number
/**
 * Converts a time_t value to a #GDate structure using the specified timezone.
 * This is analogous to g_date_set_time() but takes the timezone into account.
 * @param date Destination #GDate value.
 * @param time A time value.
 * @param zone Desired timezone for destination `date,` or %NULL if    the UTC timezone is desired.
 */
function time_to_gdate_with_zone(date: GLib.Date, time: number, zone: ICalGLib.Timezone | null): void
/**
 * Returns the start of the week containing the given time_t, using the given
 * timezone. week_start_day should use the same values as mktime(),
 * i.e. 0 (Sun) to 6 (Sat).
 * NOTE: this function is only here to make the transition to the timezone
 * functions easier. New code should use ICalTime values and
 * i_cal_time_adjust() to add or subtract days, hours, minutes & seconds.
 * @param time A time_t value.
 * @param week_start_day Day to use as the starting of the week.
 * @param zone Timezone to use.
 * @returns the beginning of the week.
 */
function time_week_begin_with_zone(time: number, week_start_day: number, zone: ICalGLib.Timezone): number
/**
 * Returns the start of the year containing the given time_t, using the given
 * timezone.
 * NOTE: this function is only here to make the transition to the timezone
 * functions easier. New code should use ICalTime values and
 * i_cal_time_adjust() to add or subtract days, hours, minutes & seconds.
 * @param time A time_t value.
 * @param zone Timezone to use.
 * @returns the beginning of the year.
 */
function time_year_begin_with_zone(time: number, zone: ICalGLib.Timezone): number
/**
 * Adds VTIMEZONE components to a VCALENDAR for all tzid's
 * in the given `icalcomp`.
 * @param vcal_comp A VCALENDAR component.
 * @param icalcomp An iCalendar component, of any type.
 */
function util_add_timezones_from_component(vcal_comp: ICalGLib.Component, icalcomp: ICalGLib.Component): void
/**
 * Modifies the `vtimezone` to include only subcomponents influencing
 * the passed-in time interval between `from` and `to`.
 * @param vtimezone a VTIMEZONE component to modify
 * @param from an #ICalTime for the minimum time
 * @param to until which time to clamp, or %NULL for infinity
 */
function util_clamp_vtimezone(vtimezone: ICalGLib.Component, from: ICalGLib.Time, to: ICalGLib.Time | null): /* vtimezone */ ICalGLib.Component
/**
 * Similar to e_cal_util_clamp_vtimezone(), only reads the clamp
 * times from the `component`.
 * @param vtimezone a VTIMEZONE component to modify
 * @param component an #ICalComponent to read the times from
 */
function util_clamp_vtimezone_by_component(vtimezone: ICalGLib.Component, component: ICalGLib.Component): /* vtimezone */ ICalGLib.Component
/**
 * Searches for an X property named `x_name` within X properties
 * of `icalcomp` and returns its value as a newly allocated string.
 * Free it with g_free(), when no longer needed.
 * @param icalcomp an #ICalComponent
 * @param x_name name of the X property
 * @returns Newly allocated value of the first @x_name    X property in @icalcomp, or %NULL, if not found.
 */
function util_component_dup_x_property(icalcomp: ICalGLib.Component, x_name: string | null): string | null
/**
 * Searches properties of kind `prop_kind` in the `icalcomp` and returns
 * one, which is usable for the `locale`. When `locale` is %NULL,
 * the current locale is assumed. If no such property for the locale
 * exists either the one with no language parameter or the first
 * found is returned.
 * 
 * Free the returned non-NULL #ICalProperty with g_object_unref(),
 * when no longer needed.
 * @param icalcomp an #ICalComponent
 * @param prop_kind an #ICalPropertyKind to traverse
 * @param locale a locale identifier, or %NULL
 * @returns a property of kind @prop_kind for the @locale,    %NULL if no such property is set on the @comp.
 */
function util_component_find_property_for_locale(icalcomp: ICalGLib.Component, prop_kind: ICalGLib.PropertyKind, locale: string | null): ICalGLib.Property | null
/**
 * Searches for an X property named `x_name` within X properties
 * of `icalcomp` and returns it. Free the non-NULL object
 * with g_object_unref(), when no longer needed.
 * @param icalcomp an #ICalComponent
 * @param x_name name of the X property
 * @returns the first X ICalProperty named    @x_name, or %NULL, when none found.
 */
function util_component_find_x_property(icalcomp: ICalGLib.Component, x_name: string | null): ICalGLib.Property | null
function util_component_get_recurid_as_string(icalcomp: ICalGLib.Component): string | null
/**
 * Checks whether an #ICalComponent has any alarm.
 * @param icalcomp An #ICalComponent.
 * @returns TRUE if it has alarms, FALSE otherwise.
 */
function util_component_has_alarms(icalcomp: ICalGLib.Component): boolean
/**
 * Checks if an #ICalComponent has any attendees.
 * @param icalcomp An #ICalComponent.
 * @returns TRUE if there are attendees, FALSE if not.
 */
function util_component_has_attendee(icalcomp: ICalGLib.Component): boolean
/**
 * Checks whether an #ICalComponent has an organizer.
 * @param icalcomp An #ICalComponent.
 * @returns TRUE if there is an organizer, FALSE if not.
 */
function util_component_has_organizer(icalcomp: ICalGLib.Component): boolean
/**
 * Returns, whether the `icalcomp` has a property of `prop_kind`. To check
 * for a specific X property use e_cal_util_component_has_x_property().
 * @param icalcomp an #ICalComponent
 * @param prop_kind a property kind to look for, as an %ICalPropertyKind
 * @returns whether the @icalcomp has a property of @prop_kind
 */
function util_component_has_property(icalcomp: ICalGLib.Component, prop_kind: ICalGLib.PropertyKind): boolean
/**
 * Checks if an #ICalComponent has recurrence dates.
 * @param icalcomp An #ICalComponent.
 * @returns TRUE if there are recurrence dates, FALSE if not.
 */
function util_component_has_rdates(icalcomp: ICalGLib.Component): boolean
/**
 * Checks if an #ICalComponent has recurrence dates or rules.
 * @param icalcomp An #ICalComponent.
 * @returns TRUE if there are recurrence dates/rules, FALSE if not.
 */
function util_component_has_recurrences(icalcomp: ICalGLib.Component): boolean
/**
 * Checks if an #ICalComponent has recurrence rules.
 * @param icalcomp An #ICalComponent.
 * @returns TRUE if there are recurrence rules, FALSE if not.
 */
function util_component_has_rrules(icalcomp: ICalGLib.Component): boolean
/**
 * Returns, whether the `icalcomp` contains X property named `x_name`. To check
 * for standard property use e_cal_util_component_has_property().
 * @param icalcomp an #ICalComponent
 * @param x_name name of the X property
 * @returns whether the @icalcomp contains X property named @x_name
 */
function util_component_has_x_property(icalcomp: ICalGLib.Component, x_name: string | null): boolean
/**
 * Checks whether an #ICalComponent is an instance of a recurring appointment.
 * @param icalcomp An #ICalComponent.
 * @returns TRUE if it is an instance, FALSE if not.
 */
function util_component_is_instance(icalcomp: ICalGLib.Component): boolean
/**
 * Removes all or only the first property of kind `kind` in `icalcomp`.
 * @param icalcomp an #ICalComponent
 * @param kind the kind of the property to remove
 * @param all %TRUE to remove all, or %FALSE to remove only the first property of the `kind`
 * @returns How many properties had been removed.
 */
function util_component_remove_property_by_kind(icalcomp: ICalGLib.Component, kind: ICalGLib.PropertyKind, all: boolean): number
/**
 * Removes the first X property named `x_name` in `icalcomp`.
 * @param icalcomp an #ICalComponent
 * @param x_name name of the X property
 * @returns %TRUE, when any such had been found and removed, %FALSE otherwise.
 */
function util_component_remove_x_property(icalcomp: ICalGLib.Component, x_name: string | null): boolean
/**
 * Sets a value of the first X property named `x_name` in `icalcomp,`
 * if any such already exists, or adds a new property with this name
 * and value. As a special case, if `value` is %NULL, then removes
 * the first X property named `x_name` from `icalcomp` instead.
 * @param icalcomp an #ICalComponent
 * @param x_name name of the X property
 * @param value a value to set, or %NULL
 */
function util_component_set_x_property(icalcomp: ICalGLib.Component, x_name: string | null, value: string | null): void
/**
 * Encodes the #EConflictResolution into the bit-or of #ECalOperationFlags.
 * The returned value can be bit-or-ed with other #ECalOperationFlags values.
 * @param conflict_resolution an #EConflictResolution
 * @returns a bit-or of #ECalOperationFlags, corresponding to the @conflict_resolution
 */
function util_conflict_resolution_to_operation_flags(conflict_resolution: EDataServer.ConflictResolution): number
/**
 * This checks that `rid` indicates a valid recurrence of `icalcomp,` and
 * if so, generates a copy of `icalcomp` containing a RECURRENCE-ID of `rid`.
 * 
 * Free the returned non-NULL component with g_object_unref(), when
 * no longer needed.
 * @param icalcomp A recurring #ICalComponent
 * @param rid The RECURRENCE-ID to construct a component for
 * @returns the instance as a new #ICalComponent, or %NULL.
 */
function util_construct_instance(icalcomp: ICalGLib.Component, rid: ICalGLib.Time): ICalGLib.Component | null
/**
 * Copies the `zone` together with its inner component and
 * returns it as a new #ICalTimezone object. Free it with
 * g_object_unref(), when no longer needed.
 * @param zone an ICalTimezone
 * @returns a copy of the @zone
 */
function util_copy_timezone(zone: ICalGLib.Timezone): ICalGLib.Timezone
/**
 * Compares list of categories on the `old_comp` with the list of categories
 * on the `new_comp` and fills `out_added` categories and `out_removed` categories
 * accordingly, as if the `old_comp` is replaced with the `new_comp`. When either
 * of the components is %NULL, it's considered as having no categories set.
 * Rather than returning empty #GHashTable, the return argument is set to %NULL
 * when there are no added/removed categories.
 * 
 * The key of the hash table is the category string, the value is an integer (1).
 * There is used the hash table only for speed.
 * 
 * The returned #GHashTable-s should be freed with g_hash_table_unref(),
 * when no longer needed.
 * @param old_comp an old #ICalComponent, or %NULL
 * @param new_comp a new #ICalComponent, or %NULL
 */
function util_diff_categories(old_comp: ICalGLib.Component | null, new_comp: ICalGLib.Component | null): [ /* out_added */ GLib.HashTable, /* out_removed */ GLib.HashTable ]
/**
 * Calls `func` for each category stored in the `comp`.
 * @param comp an #ICalComponent
 * @param func an #ECalUtilForeachCategoryFunc callback to call for each category
 */
function util_foreach_category(comp: ICalGLib.Component, func: UtilForeachCategoryFunc): void
/**
 * Generates alarm instances for a calendar component. Returns the instances
 * structure, or %NULL if no alarm instances occurred in the specified time
 * range. Free the returned structure with e_cal_component_alarms_free(),
 * when no longer needed.
 * @param comp The #ECalComponent to generate alarms from
 * @param start Start time
 * @param end End time
 * @param omit Alarm types to omit
 * @param resolve_tzid Callback for resolving timezones
 * @param default_timezone The timezone used to resolve DATE and floating DATE-TIME values.
 * @returns a list of all the alarms found    for the given component in the given time range.
 */
function util_generate_alarms_for_comp(comp: Component, start: number, end: number, omit: ComponentAlarmAction, resolve_tzid: RecurResolveTimezoneCb, default_timezone: ICalGLib.Timezone): ComponentAlarms | null
/**
 * Iterates through all the components in the `comps` list and generates alarm
 * instances for them; putting them in the `comp_alarms` list. Free the `comp_alarms`
 * with g_slist_free_full (comp_alarms, e_cal_component_alarms_free);, when
 * no longer neeed.
 * @param comps List of #ECalComponent<!-- -->s
 * @param start Start time
 * @param end End time
 * @param omit Alarm types to omit
 * @param resolve_tzid Callback for resolving timezones
 * @param default_timezone The timezone used to resolve DATE and floating DATE-TIME values.
 * @returns the number of elements it added to the list
 */
function util_generate_alarms_for_list(comps: Component[], start: number, end: number, omit: ComponentAlarmAction, resolve_tzid: RecurResolveTimezoneCb, default_timezone: ICalGLib.Timezone): [ /* returnType */ number, /* comp_alarms */ ComponentAlarms[] ]
/**
 * Find out when the component starts and stops, being careful about
 * recurrences.
 * @param comp an #ECalComponent
 * @param tz_cb The #ECalRecurResolveTimezoneCb to call
 * @param default_timezone The default timezone
 * @param kind the type of component, indicated with an #ICalComponentKind
 */
function util_get_component_occur_times(comp: Component, tz_cb: RecurResolveTimezoneCb, default_timezone: ICalGLib.Timezone, kind: ICalGLib.ComponentKind): [ /* out_start */ number, /* out_end */ number ]
/**
 * Fetches system timezone ICalTimezone object.
 * 
 * The returned pointer is part of the built-in timezones and should not be freed.
 * @returns The ICalTimezone object of the system timezone, or %NULL on an error.
 */
function util_get_system_timezone(): ICalGLib.Timezone | null
/**
 * Fetches system timezone localtion string.
 * @returns system timezone location string, %NULL on an error.
 */
function util_get_system_timezone_location(): string | null
/**
 * Converts an #ICalTime into a GLibc's struct tm.
 * @param itt An #ICalTime
 * @returns The converted time as a struct tm. All fields will be    set properly except for tm.tm_yday.
 */
function util_icaltime_to_tm(itt: ICalGLib.Time): any | null
/**
 * Converts a time value from one timezone to another, and returns a struct tm
 * representation of the time.
 * @param itt A time value.
 * @param from_zone Source timezone.
 * @param to_zone Destination timezone.
 * @returns The converted time as a struct tm. All fields will be    set properly except for tm.tm_yday.
 */
function util_icaltime_to_tm_with_zone(itt: ICalGLib.Time, from_zone: ICalGLib.Timezone, to_zone: ICalGLib.Timezone): any | null
/**
 * Initializes properties of a recurring `vtodo,` like normalizing
 * the Due date and eventually the Start date. The function does
 * nothing when the `vtodo` is not recurring.
 * 
 * The function doesn't change LAST-MODIFIED neither the SEQUENCE
 * property, it's up to the caller to do it.
 * 
 * Note the `cal_client,` `cancellable` and `error` is used only
 * for timezone resolution. The function doesn't store the `vtodo`
 * to the `cal_client,` it only updates the `vtodo` component.
 * @param vtodo a VTODO component
 * @param cal_client an #ECalClient to which the `vtodo` belongs
 * @param cancellable optional #GCancellable object, or %NULL
 * @returns Whether succeeded.
 */
function util_init_recur_task_sync(vtodo: ICalGLib.Component, cal_client: Client, cancellable: Gio.Cancellable | null): boolean
/**
 * Changes all URL attachments which point to a local file in `component`
 * to inline attachments, aka adds the file content into the `component`.
 * It also populates FILENAME parameter on the attachment.
 * @param component an #ICalComponent to work with
 * @param cancellable optional #GCancellable object, or %NULL
 * @returns Whether succeeded.
 */
function util_inline_local_attachments_sync(component: ICalGLib.Component, cancellable: Gio.Cancellable | null): boolean
/**
 * Returns whether the given `rid` is the first instance of
 * the recurrence defined in the `comp`.
 * @param comp an #ECalComponent instance
 * @param rid a recurrence ID
 * @param tz_cb The #ECalRecurResolveTimezoneCb to call
 * @returns Whether the @rid identifies the first instance of @comp.
 */
function util_is_first_instance(comp: Component, rid: ICalGLib.Time, tz_cb: RecurResolveTimezoneCb): boolean
/**
 * Marks the `vtodo` as complete with eventual update of other
 * properties. This is useful also for recurring tasks, for which
 * it moves the `vtodo` into the next occurrence according to
 * the recurrence rule.
 * 
 * When the `vtodo` is marked as completed, then the existing COMPLETED
 * date-time is preserved if exists, otherwise it's set either to `completed_time,`
 * or to the current time, when the `completed_time` is (time_t) -1.
 * 
 * The function doesn't change LAST-MODIFIED neither the SEQUENCE
 * property, it's up to the caller to do it.
 * 
 * Note the `cal_client,` `cancellable` and `error` is used only
 * for timezone resolution. The function doesn't store the `vtodo`
 * to the `cal_client,` it only updates the `vtodo` component.
 * @param vtodo a VTODO component
 * @param completed_time completed time to set, or (time_t) -1 to use current time
 * @param cal_client an #ECalClient to which the `vtodo` belongs
 * @param cancellable optional #GCancellable object, or %NULL
 * @returns Whether succeeded.
 */
function util_mark_task_complete_sync(vtodo: ICalGLib.Component, completed_time: number, cal_client: Client, cancellable: Gio.Cancellable | null): boolean
/**
 * Creates a new #ICalComponent of the specified kind. Free it
 * with g_object_unref(), when no longer needed.
 * @param kind Kind of the component to create, as #ICalComponentKind.
 * @returns the newly created component.
 */
function util_new_component(kind: ICalGLib.ComponentKind): ICalGLib.Component
/**
 * Creates a new VCALENDAR component. Free it with g_object_unref(),
 * when no longer needed.
 * @returns the newly created top level component.
 */
function util_new_top_level(): ICalGLib.Component
/**
 * Makes sure the `ttuntil` value matches the value type with
 * the DTSTART value, as required by RFC 5545 section 3.3.10.
 * Uses `tz_cb` with `tz_cb_data` to resolve time zones when needed.
 * @param icalcomp An #ICalComponent
 * @param ttuntil An UNTIL value to validate
 * @param tz_cb The #ECalRecurResolveTimezoneCb to call
 */
function util_normalize_rrule_until_value(icalcomp: ICalGLib.Component, ttuntil: ICalGLib.Time, tz_cb: RecurResolveTimezoneCb): void
/**
 * Decodes the #EConflictResolution from the bit-or of #ECalOperationFlags.
 * @param flags bit-or of #ECalOperationFlags
 * @returns an #EConflictResolution as stored in the @flags
 */
function util_operation_flags_to_conflict_resolution(flags: number): EDataServer.ConflictResolution
/**
 * Parses the given file, and, if it contains a valid iCalendar object,
 * parse it and return a new #ICalComponent.
 * 
 * Free the returned non-NULL component with g_object_unref(), when no longer needed.
 * @param filename Name of the file to be parsed.
 * @returns a newly created #ICalComponent, or %NULL,    if the file doesn't contain a valid iCalendar object.
 */
function util_parse_ics_file(filename: string | null): ICalGLib.Component | null
/**
 * Parses an iCalendar string and returns a new #ICalComponent representing
 * that string. Note that this function deals with multiple VCALENDAR's in the
 * string, something that Mozilla used to do and which libical does not
 * support.
 * 
 * Free the returned non-NULL component with g_object_unref(), when no longer needed.
 * @param string iCalendar string to be parsed.
 * @returns a newly created #ICalComponent, or %NULL,    if the string isn't a valid iCalendar string.
 */
function util_parse_ics_string(string: string | null): ICalGLib.Component | null
/**
 * Converts a translated priority string to an iCalendar priority value.
 * @param string A string representing the PRIORITY value.
 * @returns the priority (0-9) or -1 if the priority string is not valid.
 */
function util_priority_from_string(string: string | null): number
/**
 * Converts an iCalendar PRIORITY value to a translated string. Any unknown
 * priority value (i.e. not 0-9) will be returned as "" (undefined).
 * @param priority Priority value.
 * @returns a string representing the PRIORITY value. This value is a constant, so it should never be freed.
 */
function util_priority_to_string(priority: number): string | null
/**
 * Returns, whether the `prop` has a parameter of `param_kind`.
 * @param prop an #ICalProperty
 * @param param_kind a parameter kind to look for, as an %ICalParameterKind
 * @returns whether the @prop has a parameter of @prop_kind
 */
function util_property_has_parameter(prop: ICalGLib.Property, param_kind: ICalGLib.ParameterKind): boolean
/**
 * Removes one or more instances from `icalcomp` according to `rid` and `mod`.
 * @param icalcomp A (recurring) #ICalComponent
 * @param rid The base RECURRENCE-ID to remove
 * @param mod How to interpret `rid`
 */
function util_remove_instances(icalcomp: ICalGLib.Component, rid: ICalGLib.Time, mod: ObjModType): void
/**
 * Removes one or more instances from `icalcomp` according to `rid` and `mod`.
 * Uses `tz_cb` with `tz_cb_data` to resolve time zones when needed.
 * @param icalcomp A (recurring) #ICalComponent
 * @param rid The base RECURRENCE-ID to remove
 * @param mod How to interpret `rid`
 * @param tz_cb The #ECalRecurResolveTimezoneCb to call
 */
function util_remove_instances_ex(icalcomp: ICalGLib.Component, rid: ICalGLib.Time, mod: ObjModType, tz_cb: RecurResolveTimezoneCb): void
/**
 * Converts time, in seconds, into a string representation readable by humans
 * and localized into the current locale. This can be used to convert event
 * duration to string or similar use cases.
 * 
 * Free the returned string with g_free(), when no longer needed.
 * @param seconds actual time, in seconds
 * @returns a newly allocated string with localized description    of the given time in seconds.
 */
function util_seconds_to_string(seconds: number): string | null
/**
 * Sets the ACKNOWLEDGED property on the `component'`s alarm with UID `auid`
 * to the time `when` (in UTC), or to the current time, when the `when` is 0.
 * @param component an #ECalComponent
 * @param auid an alarm UID to modify
 * @param when a time, in UTC, when to set the acknowledged property, or 0 for the current time
 * @returns Whether succeeded.
 */
function util_set_alarm_acknowledged(component: Component, auid: string | null, when: number): boolean
/**
 * Splits a recurring `icalcomp` into two at time `rid`. The returned #ICalComponent
 * is modified `icalcomp` which contains recurrences beginning at `rid,` inclusive.
 * The instance identified by `rid` should exist. The `master_dtstart` can be
 * a null time, then it is read from the `icalcomp`.
 * 
 * Use e_cal_util_remove_instances_ex() with E_CAL_OBJ_MOD_THIS_AND_FUTURE mode
 * on the `icalcomp` to remove the overlapping interval from it, if needed.
 * 
 * Free the returned non-NULL component with g_object_unref(), when
 * done with it.
 * @param icalcomp A (recurring) #ICalComponent
 * @param rid The base RECURRENCE-ID to remove
 * @param master_dtstart The DTSTART of the master object
 * @returns the split @icalcomp, or %NULL.
 */
function util_split_at_instance(icalcomp: ICalGLib.Component, rid: ICalGLib.Time, master_dtstart: ICalGLib.Time | null): ICalGLib.Component | null
/**
 * Splits a recurring `icalcomp` into two at time `rid`. The returned #ICalComponent
 * is modified `icalcomp` which contains recurrences beginning at `rid,` inclusive.
 * The instance identified by `rid` should exist. The `master_dtstart` can be
 * a null time, then it is read from the `icalcomp`.
 * 
 * Uses `tz_cb` with `tz_cb_data` to resolve time zones when needed.
 * 
 * Use e_cal_util_remove_instances_ex() with E_CAL_OBJ_MOD_THIS_AND_FUTURE mode
 * on the `icalcomp` to remove the overlapping interval from it, if needed.
 * 
 * Free the returned non-NULL component with g_object_unref(), when
 * done with it.
 * @param icalcomp A (recurring) #ICalComponent
 * @param rid The base RECURRENCE-ID to remove
 * @param master_dtstart The DTSTART of the master object
 * @param tz_cb The #ECalRecurResolveTimezoneCb to call
 * @returns the split @icalcomp, or %NULL.
 */
function util_split_at_instance_ex(icalcomp: ICalGLib.Component, rid: ICalGLib.Time, master_dtstart: ICalGLib.Time | null, tz_cb: RecurResolveTimezoneCb): ICalGLib.Component | null
/**
 * Converts a struct tm into an #ICalTime. Free the returned object
 * with g_object_unref(), when no longer needed.
 * @param tm A struct tm.
 * @param is_date Whether the given time is a date only or not.
 * @returns The converted time as an #ICalTime.
 */
function util_tm_to_icaltime(tm: any | null, is_date: boolean): ICalGLib.Time
/**
 * A function used to filter which parameters should be added to the bag,
 * when filling it with e_cal_component_parameter_bag_new_from_property()
 * and e_cal_component_parameter_bag_set_from_property().
 * @callback 
 * @param parameter an #ICalParameter
 * @returns %TRUE, to add the parameter to the bag; %FALSE, to not add it to the bag
 */
interface ComponentParameterBagFilterFunc {
    (parameter: ICalGLib.Parameter): boolean
}
/**
 * A function used to filter which properties should be added to the bag,
 * when filling it with e_cal_component_property_bag_new_from_component()
 * and e_cal_component_property_bag_set_from_component().
 * @callback 
 * @param property an #ICalProperty
 * @returns %TRUE, to add the property to the bag; %FALSE, to not add it to the bag
 */
interface ComponentPropertyBagFilterFunc {
    (property: ICalGLib.Property): boolean
}
/**
 * Format the date/time value from `itt` into `buffer,` whose size cannot
 * exceed `buffer_size` letters.
 * @callback 
 * @param itt an #ICalTime to format to string
 * @param buffer a buffer to fill with the result
 * @param buffer_size the `buffer` size, in bytes, not counting the NUL-terminator character
 */
interface RecurFormatDateTimeFunc {
    (itt: ICalGLib.Time, buffer: string | null, buffer_size: number): void
}
/**
 * Callback used by e_cal_recur_generate_instances_sync(), called
 * for each instance of a (recurring) component within given time range.
 * @callback 
 * @param icomp an #ICalComponent
 * @param instance_start start time of an instance
 * @param instance_end end time of an instance
 * @param cancellable optional #GCancellable object, or %NULL
 * @returns %TRUE, to continue recurrence generation, %FALSE to stop
 */
interface RecurInstanceCb {
    (icomp: ICalGLib.Component, instance_start: ICalGLib.Time, instance_end: ICalGLib.Time, cancellable: Gio.Cancellable | null): boolean
}
/**
 * Resolve timezone by its ID provided as `tzid`. The returned object,
 * if not %NULL, is owned by the callback implementation and should
 * not be freed.
 * @callback 
 * @param tzid timezone ID to resolve
 * @param cancellable optional #GCancellable object, or %NULL
 * @returns an #ICalTimezone object for @tzid,    or %NULL, on error or if not found.
 */
interface RecurResolveTimezoneCb {
    (tzid: string | null, cancellable: Gio.Cancellable | null): ICalGLib.Timezone | null
}
/**
 * Function called for each non-empty category from e_cal_util_foreach_category().
 * The `func` can assume owenrship of the `inout_category` content, in which case
 * it should also set its content to %NULL, to avoid free of it. The string itself,
 * if taken, should be freed with g_free(), when no longer needed.
 * @callback 
 * @param comp an #ICalComponent
 * @param inout_category the category name
 * @returns %TRUE to continue, %FALSE to stop
 */
interface UtilForeachCategoryFunc {
    (comp: ICalGLib.Component, inout_category: string | null): boolean
}
module TimezoneCache {

    // Signal callback interfaces

    /**
     * Signal callback interface for `timezone-added`
     */
    interface TimezoneAddedSignalCallback {
        ($obj: TimezoneCache, zone: ICalGLib.Timezone): void
    }


    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

interface TimezoneCache {

    // Owm methods of ECal-2.0.ECal.TimezoneCache

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

    // Own virtual methods of ECal-2.0.ECal.TimezoneCache

    vfunc_timezone_added(zone: ICalGLib.Timezone): void
    vfunc_tzcache_add_timezone(zone: ICalGLib.Timezone): void

    // Own signals of ECal-2.0.ECal.TimezoneCache

    connect(sigName: "timezone-added", callback: TimezoneCache.TimezoneAddedSignalCallback): number
    connect_after(sigName: "timezone-added", callback: TimezoneCache.TimezoneAddedSignalCallback): number
    emit(sigName: "timezone-added", zone: ICalGLib.Timezone, ...args: any[]): void

    // Class property signals of ECal-2.0.ECal.TimezoneCache

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class TimezoneCache extends GObject.Object {

    // Own properties of ECal-2.0.ECal.TimezoneCache

    static name: string
    static $gtype: GObject.GType<TimezoneCache>

    // Constructors of ECal-2.0.ECal.TimezoneCache

    constructor(config?: TimezoneCache.ConstructorProperties) 
    _init(config?: TimezoneCache.ConstructorProperties): void
}

module Client {

    // Signal callback interfaces

    /**
     * Signal callback interface for `free-busy-data`
     */
    interface FreeBusyDataSignalCallback {
        ($obj: Client, free_busy_ecalcomps: Component[]): void
    }


    // Constructor properties interface

    interface ConstructorProperties extends TimezoneCache.ConstructorProperties, Gio.AsyncInitable.ConstructorProperties, Gio.Initable.ConstructorProperties, EDataServer.Client.ConstructorProperties {

        // Own constructor properties of ECal-2.0.ECal.Client

        default_timezone?: ICalGLib.Timezone | null
        source_type?: ClientSourceType | null
    }

}

interface Client extends TimezoneCache, Gio.AsyncInitable, Gio.Initable {

    // Own properties of ECal-2.0.ECal.Client

    default_timezone: ICalGLib.Timezone
    readonly source_type: ClientSourceType

    // Owm methods of ECal-2.0.ECal.Client

    /**
     * Add a VTIMEZONE object to the given calendar client.
     * The call is finished by e_cal_client_add_timezone_finish() from
     * the `callback`.
     * @param zone The timezone to add
     * @param cancellable a #GCancellable; can be %NULL
     * @param callback callback to call when a result is ready
     */
    add_timezone(zone: ICalGLib.Timezone, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void

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
     * Finishes previous call of e_cal_client_add_timezone().
     * @param result a #GAsyncResult
     * @returns %TRUE if successful, %FALSE otherwise.
     */
    add_timezone_finish(result: Gio.AsyncResult): boolean
    /**
     * Add a VTIMEZONE object to the given calendar client.
     * @param zone The timezone to add
     * @param cancellable a #GCancellable; can be %NULL
     * @returns %TRUE if successful, %FALSE otherwise.
     */
    add_timezone_sync(zone: ICalGLib.Timezone, cancellable: Gio.Cancellable | null): boolean
    /**
     * Checks if a calendar supports only one alarm per component.
     * @returns TRUE if the calendar allows only one alarm, FALSE otherwise.
     */
    check_one_alarm_only(): boolean
    /**
     * Checks whether a calendar requires organizer to accept their attendance to
     * meetings.
     * @returns TRUE if the calendar requires organizers to accept, FALSE otherwise.
     */
    check_organizer_must_accept(): boolean
    /**
     * Checks if a calendar forces organizers of meetings to be also attendees.
     * @returns TRUE if the calendar forces organizers to attend meetings, FALSE otherwise.
     */
    check_organizer_must_attend(): boolean
    /**
     * Checks if the calendar has a master object for recurrences.
     * @returns TRUE if the calendar has a master object for recurrences, FALSE otherwise.
     */
    check_recurrences_no_master(): boolean
    /**
     * Checks whether the calendar saves schedules.
     * @returns TRUE if it saves schedules, FALSE otherwise.
     */
    check_save_schedules(): boolean
    /**
     * Requests the calendar backend to create the object specified by the `icalcomp`
     * argument. Some backends would assign a specific UID to the newly created object,
     * but this function does not modify the original `icalcomp` if its UID changes.
     * The call is finished by e_cal_client_create_object_finish() from
     * the `callback`.
     * @param icalcomp The component to create
     * @param opflags bit-or of #ECalOperationFlags
     * @param cancellable a #GCancellable; can be %NULL
     * @param callback callback to call when a result is ready
     */
    create_object(icalcomp: ICalGLib.Component, opflags: OperationFlags, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void
    /**
     * Finishes previous call of e_cal_client_create_object() and
     * sets `out_uid` to newly assigned UID for the created object.
     * This `out_uid` should be freed with g_free().
     * @param result a #GAsyncResult
     * @returns %TRUE if successful, %FALSE otherwise.
     */
    create_object_finish(result: Gio.AsyncResult): [ /* returnType */ boolean, /* out_uid */ string | null ]
    /**
     * Requests the calendar backend to create the object specified by the
     * `icalcomp` argument. Some backends would assign a specific UID to the newly
     * created object, in those cases that UID would be returned in the `out_uid`
     * argument. This function does not modify the original `icalcomp` if its UID
     * changes.  Returned `out_uid` should be freed with g_free().
     * @param icalcomp The component to create
     * @param opflags bit-or of #ECalOperationFlags
     * @param cancellable a #GCancellable; can be %NULL
     * @returns %TRUE if successful, %FALSE otherwise.
     */
    create_object_sync(icalcomp: ICalGLib.Component, opflags: OperationFlags, cancellable: Gio.Cancellable | null): [ /* returnType */ boolean, /* out_uid */ string | null ]
    /**
     * Requests the calendar backend to create the objects specified by the `icalcomps`
     * argument. Some backends would assign a specific UID to the newly created object,
     * but this function does not modify the original `icalcomps` if their UID changes.
     * The call is finished by e_cal_client_create_objects_finish() from
     * the `callback`.
     * @param icalcomps The components to create
     * @param opflags bit-or of #ECalOperationFlags
     * @param cancellable a #GCancellable; can be %NULL
     * @param callback callback to call when a result is ready
     */
    create_objects(icalcomps: ICalGLib.Component[], opflags: OperationFlags, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void
    /**
     * Finishes previous call of e_cal_client_create_objects() and
     * sets `out_uids` to newly assigned UIDs for the created objects.
     * This `out_uids` should be freed with e_client_util_free_string_slist().
     * @param result a #GAsyncResult
     * @returns %TRUE if successful, %FALSE otherwise.
     */
    create_objects_finish(result: Gio.AsyncResult): [ /* returnType */ boolean, /* out_uids */ string[] ]
    /**
     * Requests the calendar backend to create the objects specified by the
     * `icalcomps` argument. Some backends would assign a specific UID to the
     * newly created objects, in those cases these UIDs would be returned in
     * the `out_uids` argument. This function does not modify the original
     * `icalcomps` if their UID changes.  Returned `out_uids` should be freed
     * with e_client_util_free_string_slist().
     * @param icalcomps The components to create
     * @param opflags bit-or of #ECalOperationFlags
     * @param cancellable a #GCancellable; can be %NULL
     * @returns %TRUE if successful, %FALSE otherwise.
     */
    create_objects_sync(icalcomps: ICalGLib.Component[], opflags: OperationFlags, cancellable: Gio.Cancellable | null): [ /* returnType */ boolean, /* out_uids */ string[] ]
    /**
     * Discards alarm `auid` from a given component identified by `uid` and `rid`.
     * The call is finished by e_cal_client_discard_alarm_finish() from
     * the `callback`.
     * @param uid Unique identifier for a calendar component
     * @param rid Recurrence identifier
     * @param auid Alarm identifier to discard
     * @param opflags bit-or of #ECalOperationFlags
     * @param cancellable a #GCancellable; can be %NULL
     * @param callback callback to call when a result is ready
     */
    discard_alarm(uid: string | null, rid: string | null, auid: string | null, opflags: OperationFlags, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void
    /**
     * Finishes previous call of e_cal_client_discard_alarm().
     * @param result a #GAsyncResult
     * @returns %TRUE if successful, %FALSE otherwise.
     */
    discard_alarm_finish(result: Gio.AsyncResult): boolean
    /**
     * Discards alarm `auid` from a given component identified by `uid` and `rid`.
     * @param uid Unique identifier for a calendar component
     * @param rid Recurrence identifier
     * @param auid Alarm identifier to discard
     * @param opflags bit-or of #ECalOperationFlags
     * @param cancellable a #GCancellable; can be %NULL
     * @returns %TRUE if successful, %FALSE otherwise.
     */
    discard_alarm_sync(uid: string | null, rid: string | null, auid: string | null, opflags: OperationFlags, cancellable: Gio.Cancellable | null): boolean
    /**
     * Does a combination of e_cal_client_get_object_list() and
     * e_cal_recur_generate_instances_sync(). Unlike
     * e_cal_client_generate_instances_sync(), this returns immediately and the
     * `cb` callback is called asynchronously.
     * 
     * The callback function should do a g_object_ref() of the calendar component
     * it gets passed if it intends to keep it around, since it will be unref'ed
     * as soon as the callback returns.
     * @param start Start time for query.
     * @param end End time for query.
     * @param cancellable a #GCancellable; can be %NULL
     * @param cb Callback for each generated instance.
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
     * @param icalcomp Object to generate instances from.
     * @param start Start time for query.
     * @param end End time for query.
     * @param cancellable a #GCancellable; can be %NULL
     * @param cb Callback for each generated instance.
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
     * @param icalcomp Object to generate instances from
     * @param start Start time for query
     * @param end End time for query
     * @param cancellable a #GCancellable; can be %NULL
     * @param cb Callback for each generated instance
     */
    generate_instances_for_object_sync(icalcomp: ICalGLib.Component, start: number, end: number, cancellable: Gio.Cancellable | null, cb: RecurInstanceCb): void
    /**
     * Does a combination of e_cal_client_get_object_list() and
     * e_cal_recur_generate_instances_sync().
     * 
     * The callback function should do a g_object_ref() of the calendar component
     * it gets passed if it intends to keep it around, since it will be unreffed
     * as soon as the callback returns.
     * @param start Start time for query
     * @param end End time for query
     * @param cancellable a #GCancellable; can be %NULL
     * @param cb Callback for each generated instance
     */
    generate_instances_sync(start: number, end: number, cancellable: Gio.Cancellable | null, cb: RecurInstanceCb): void
    /**
     * Queries a calendar for a specified component's object attachment uris.
     * The call is finished by e_cal_client_get_attachment_uris_finish() from
     * the `callback`.
     * @param uid Unique identifier for a calendar component
     * @param rid Recurrence identifier
     * @param cancellable a #GCancellable; can be %NULL
     * @param callback callback to call when a result is ready
     */
    get_attachment_uris(uid: string | null, rid: string | null, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void
    /**
     * Finishes previous call of e_cal_client_get_attachment_uris() and
     * sets `out_attachment_uris` to uris for component's attachments.
     * The list should be freed with e_client_util_free_string_slist().
     * @param result a #GAsyncResult
     * @returns %TRUE if successful, %FALSE otherwise.
     */
    get_attachment_uris_finish(result: Gio.AsyncResult): [ /* returnType */ boolean, /* out_attachment_uris */ string[] ]
    /**
     * Queries a calendar for a specified component's object attachment URIs.
     * The list should be freed with e_client_util_free_string_slist().
     * @param uid Unique identifier for a calendar component
     * @param rid Recurrence identifier
     * @param cancellable a #GCancellable; can be %NULL
     * @returns %TRUE if successful, %FALSE otherwise.
     */
    get_attachment_uris_sync(uid: string | null, rid: string | null, cancellable: Gio.Cancellable | null): [ /* returnType */ boolean, /* out_attachment_uris */ string[] ]
    /**
     * Gets a calendar component as an iCalendar string, with a toplevel
     * VCALENDAR component and all VTIMEZONEs needed for the component.
     * @param icalcomp A calendar component object.
     * @returns the component as a complete iCalendar string, or NULL on failure. The string should be freed with g_free().
     */
    get_component_as_string(icalcomp: ICalGLib.Component): string | null
    /**
     * Retrives an #ICalComponent from the backend that contains the default
     * values for properties needed. The call is finished
     * by e_cal_client_get_default_object_finish() from the `callback`.
     * @param cancellable a #GCancellable; can be %NULL
     * @param callback callback to call when a result is ready
     */
    get_default_object(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void
    /**
     * Finishes previous call of e_cal_client_get_default_object() and
     * sets `out_icalcomp` to an #ICalComponent from the backend that contains
     * the default values for properties needed. This `out_icalcomp` should be
     * freed with g_object_unref(), when no longer needed.
     * @param result a #GAsyncResult
     * @returns %TRUE if successful, %FALSE otherwise.
     */
    get_default_object_finish(result: Gio.AsyncResult): [ /* returnType */ boolean, /* out_icalcomp */ ICalGLib.Component ]
    /**
     * Retrives an #ICalComponent from the backend that contains the default
     * values for properties needed. This `out_icalcomp` should be freed with
     * g_object_unref(), when no longer needed.
     * @param cancellable a #GCancellable; can be %NULL
     * @returns %TRUE if successful, %FALSE otherwise.
     */
    get_default_object_sync(cancellable: Gio.Cancellable | null): [ /* returnType */ boolean, /* out_icalcomp */ ICalGLib.Component ]
    /**
     * Returns the default timezone previously set with
     * e_cal_client_set_default_timezone().  The returned pointer is owned by
     * the `client` and should not be freed.
     * @returns an #ICalTimezone
     */
    get_default_timezone(): ICalGLib.Timezone
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
    get_free_busy(start: number, end: number, users: string[], cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void
    /**
     * Finishes previous call of e_cal_client_get_free_busy().
     * The `out_freebusy` contains all VFREEBUSY #ECalComponent-s, which could be also
     * received by "free-busy-data" signal. The client is responsible to do a merge of
     * the components between this complete list and those received through the signal.
     * @param result a #GAsyncResult
     * @returns %TRUE if successful, %FALSE otherwise.
     */
    get_free_busy_finish(result: Gio.AsyncResult): [ /* returnType */ boolean, /* out_freebusy */ Component[] ]
    /**
     * Gets free/busy information from the calendar server.
     * The `out_freebusy` contains all VFREEBUSY #ECalComponent-s, which could be also
     * received by "free-busy-data" signal. The client is responsible to do a merge of
     * the components between this complete list and those received through the signal.
     * @param start Start time for query
     * @param end End time for query
     * @param users List of users to retrieve free/busy information for
     * @param cancellable a #GCancellable; can be %NULL
     * @returns %TRUE if successful, %FALSE otherwise.
     */
    get_free_busy_sync(start: number, end: number, users: string[], cancellable: Gio.Cancellable | null): [ /* returnType */ boolean, /* out_freebusy */ Component[] ]
    /**
     * Queries the URL where the calendar attachments are
     * serialized in the local filesystem. This enable clients
     * to operate with the reference to attachments rather than the data itself
     * unless it specifically uses the attachments for open/sending
     * operations.
     * @returns The URL where the attachments are serialized in the local filesystem.
     */
    get_local_attachment_store(): string | null
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
    get_object(uid: string | null, rid: string | null, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void
    /**
     * Finishes previous call of e_cal_client_get_object() and
     * sets `out_icalcomp` to queried component. This function always returns
     * master object for a case of `rid` being NULL or an empty string.
     * This component should be freed with g_object_unref(), when no longer needed.
     * 
     * Use e_cal_client_get_objects_for_uid() to get list of all
     * objects for the given uid, which includes master object and
     * all detached instances.
     * @param result a #GAsyncResult
     * @returns %TRUE if successful, %FALSE otherwise.
     */
    get_object_finish(result: Gio.AsyncResult): [ /* returnType */ boolean, /* out_icalcomp */ ICalGLib.Component ]
    /**
     * Gets a list of objects from the calendar that match the query specified
     * by the `sexp` argument, returning matching objects as a list of #ICalComponent-s.
     * The call is finished by e_cal_client_get_object_list_finish() from
     * the `callback`.
     * @param sexp an S-expression representing the query
     * @param cancellable a #GCancellable; can be %NULL
     * @param callback callback to call when a result is ready
     */
    get_object_list(sexp: string | null, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void
    /**
     * Gets a list of objects from the calendar that match the query specified
     * by the `sexp` argument, returning matching objects as a list of #ECalComponent-s.
     * The call is finished by e_cal_client_get_object_list_as_comps_finish() from
     * the `callback`.
     * @param sexp an S-expression representing the query
     * @param cancellable a #GCancellable; can be %NULL
     * @param callback callback to call when a result is ready
     */
    get_object_list_as_comps(sexp: string | null, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void
    /**
     * Finishes previous call of e_cal_client_get_object_list_as_comps() and
     * sets `out_ecalcomps` to a matching list of #ECalComponent-s.
     * This list should be freed with e_client_util_free_object_slist().
     * @param result a #GAsyncResult
     * @returns %TRUE if successful, %FALSE otherwise.
     */
    get_object_list_as_comps_finish(result: Gio.AsyncResult): [ /* returnType */ boolean, /* out_ecalcomps */ Component[] ]
    /**
     * Gets a list of objects from the calendar that match the query specified
     * by the `sexp` argument. The objects will be returned in the `out_ecalcomps`
     * argument, which is a list of #ECalComponent.
     * This list should be freed with e_client_util_free_object_slist().
     * @param sexp an S-expression representing the query
     * @param cancellable a #GCancellable; can be %NULL
     * @returns %TRUE if successful, %FALSE otherwise.
     */
    get_object_list_as_comps_sync(sexp: string | null, cancellable: Gio.Cancellable | null): [ /* returnType */ boolean, /* out_ecalcomps */ Component[] ]
    /**
     * Finishes previous call of e_cal_client_get_object_list() and
     * sets `out_icalcomps` to a matching list of #ICalComponent-s.
     * This list should be freed with e_client_util_free_object_slist().
     * @param result a #GAsyncResult
     * @returns %TRUE if successful, %FALSE otherwise.
     */
    get_object_list_finish(result: Gio.AsyncResult): [ /* returnType */ boolean, /* out_icalcomps */ ICalGLib.Component[] ]
    /**
     * Gets a list of objects from the calendar that match the query specified
     * by the `sexp` argument. The objects will be returned in the `out_icalcomps`
     * argument, which is a list of #ICalComponent.
     * This list should be freed with e_client_util_free_object_slist().
     * @param sexp an S-expression representing the query
     * @param cancellable a #GCancellable; can be %NULL
     * @returns %TRUE if successful, %FALSE otherwise.
     */
    get_object_list_sync(sexp: string | null, cancellable: Gio.Cancellable | null): [ /* returnType */ boolean, /* out_icalcomps */ ICalGLib.Component[] ]
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
     * @param uid Unique identifier for a calendar component.
     * @param rid Recurrence identifier.
     * @param cancellable a #GCancellable; can be %NULL
     * @returns %TRUE if successful, %FALSE otherwise.
     */
    get_object_sync(uid: string | null, rid: string | null, cancellable: Gio.Cancellable | null): [ /* returnType */ boolean, /* out_icalcomp */ ICalGLib.Component ]
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
    get_objects_for_uid(uid: string | null, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void
    /**
     * Finishes previous call of e_cal_client_get_objects_for_uid() and
     * sets `out_ecalcomps` to a list of #ECalComponent<!-- -->s corresponding to
     * found components for a given uid of the same type as this client.
     * This list should be freed with e_client_util_free_object_slist().
     * @param result a #GAsyncResult
     * @returns %TRUE if successful, %FALSE otherwise.
     */
    get_objects_for_uid_finish(result: Gio.AsyncResult): [ /* returnType */ boolean, /* out_ecalcomps */ Component[] ]
    /**
     * Queries a calendar for all calendar components with the given unique
     * ID. This will return any recurring event and all its detached recurrences.
     * For non-recurring events, it will just return the object with that ID.
     * This list should be freed with e_client_util_free_object_slist().
     * @param uid Unique identifier for a calendar component
     * @param cancellable a #GCancellable; can be %NULL
     * @returns %TRUE if successful, %FALSE otherwise.
     */
    get_objects_for_uid_sync(uid: string | null, cancellable: Gio.Cancellable | null): [ /* returnType */ boolean, /* out_ecalcomps */ Component[] ]
    /**
     * Gets the source type of the calendar client.
     * @returns an #ECalClientSourceType value corresponding to the source type of the calendar client.
     */
    get_source_type(): ClientSourceType
    /**
     * Retrieves a timezone object from the calendar backend.
     * The call is finished by e_cal_client_get_timezone_finish() from
     * the `callback`.
     * @param tzid ID of the timezone to retrieve
     * @param cancellable a #GCancellable; can be %NULL
     * @param callback callback to call when a result is ready
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
     * Finishes previous call of e_cal_client_get_timezone() and
     * sets `out_zone` to a retrieved timezone object from the calendar backend.
     * This object is owned by the `client,` thus do not free it.
     * @param result a #GAsyncResult
     * @returns %TRUE if successful, %FALSE otherwise.
     */
    get_timezone_finish(result: Gio.AsyncResult): [ /* returnType */ boolean, /* out_zone */ ICalGLib.Timezone ]
    /**
     * Retrieves a timezone object from the calendar backend.
     * This object is owned by the `client,` thus do not free it.
     * @param tzid ID of the timezone to retrieve
     * @param cancellable a #GCancellable; can be %NULL
     * @returns %TRUE if successful, %FALSE otherwise.
     */
    get_timezone_sync(tzid: string | null, cancellable: Gio.Cancellable | null): [ /* returnType */ boolean, /* out_zone */ ICalGLib.Timezone ]
    /**
     * Query `client` with `sexp,` creating an #ECalClientView.
     * The call is finished by e_cal_client_get_view_finish()
     * from the `callback`.
     * @param sexp an S-expression representing the query.
     * @param cancellable a #GCancellable; can be %NULL
     * @param callback callback to call when a result is ready
     */
    get_view(sexp: string | null, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void
    /**
     * Finishes previous call of e_cal_client_get_view().
     * If successful, then the `out_view` is set to newly allocated #ECalClientView,
     * which should be freed with g_object_unref().
     * @param result a #GAsyncResult
     * @returns %TRUE if successful, %FALSE otherwise.
     */
    get_view_finish(result: Gio.AsyncResult): [ /* returnType */ boolean, /* out_view */ ClientView ]
    /**
     * Query `client` with `sexp,` creating an #ECalClientView.
     * If successful, then the `out_view` is set to newly allocated #ECalClientView,
     * which should be freed with g_object_unref().
     * @param sexp an S-expression representing the query.
     * @param cancellable a #GCancellable; can be %NULL
     * @returns %TRUE if successful, %FALSE otherwise.
     */
    get_view_sync(sexp: string | null, cancellable: Gio.Cancellable | null): [ /* returnType */ boolean, /* out_view */ ClientView ]
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
     * @param icalcomp Component to modify
     * @param mod Type of modification
     * @param opflags bit-or of #ECalOperationFlags
     * @param cancellable a #GCancellable; can be %NULL
     * @param callback callback to call when a result is ready
     */
    modify_object(icalcomp: ICalGLib.Component, mod: ObjModType, opflags: OperationFlags, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void
    /**
     * Finishes previous call of e_cal_client_modify_object().
     * @param result a #GAsyncResult
     * @returns %TRUE if successful, %FALSE otherwise.
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
     * @param icalcomp Component to modify
     * @param mod Type of modification
     * @param opflags bit-or of #ECalOperationFlags
     * @param cancellable a #GCancellable; can be %NULL
     * @returns %TRUE if successful, %FALSE otherwise.
     */
    modify_object_sync(icalcomp: ICalGLib.Component, mod: ObjModType, opflags: OperationFlags, cancellable: Gio.Cancellable | null): boolean
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
     * @param icalcomps Components to modify
     * @param mod Type of modification
     * @param opflags bit-or of #ECalOperationFlags
     * @param cancellable a #GCancellable; can be %NULL
     * @param callback callback to call when a result is ready
     */
    modify_objects(icalcomps: ICalGLib.Component[], mod: ObjModType, opflags: OperationFlags, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void
    /**
     * Finishes previous call of e_cal_client_modify_objects().
     * @param result a #GAsyncResult
     * @returns %TRUE if successful, %FALSE otherwise.
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
     * @param icalcomps Components to modify
     * @param mod Type of modification
     * @param opflags bit-or of #ECalOperationFlags
     * @param cancellable a #GCancellable; can be %NULL
     * @returns %TRUE if successful, %FALSE otherwise.
     */
    modify_objects_sync(icalcomps: ICalGLib.Component[], mod: ObjModType, opflags: OperationFlags, cancellable: Gio.Cancellable | null): boolean
    /**
     * Makes the backend receive the set of iCalendar objects specified in the
     * `icalcomp` argument. This is used for iTIP confirmation/cancellation
     * messages for scheduled meetings.
     * 
     * The call is finished by e_cal_client_receive_objects_finish() from
     * the `callback`.
     * @param icalcomp An #ICalComponent
     * @param opflags bit-or of #ECalOperationFlags
     * @param cancellable a #GCancellable; can be %NULL
     * @param callback callback to call when a result is ready
     */
    receive_objects(icalcomp: ICalGLib.Component, opflags: OperationFlags, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void
    /**
     * Finishes previous call of e_cal_client_receive_objects().
     * @param result a #GAsyncResult
     * @returns %TRUE if successful, %FALSE otherwise.
     */
    receive_objects_finish(result: Gio.AsyncResult): boolean
    /**
     * Makes the backend receive the set of iCalendar objects specified in the
     * `icalcomp` argument. This is used for iTIP confirmation/cancellation
     * messages for scheduled meetings.
     * @param icalcomp An #ICalComponent
     * @param opflags bit-or of #ECalOperationFlags
     * @param cancellable a #GCancellable; can be %NULL
     * @returns %TRUE if successful, %FALSE otherwise.
     */
    receive_objects_sync(icalcomp: ICalGLib.Component, opflags: OperationFlags, cancellable: Gio.Cancellable | null): boolean
    /**
     * This function allows the removal of instances of a recurrent
     * appointment. By using a combination of the `uid,` `rid` and `mod`
     * arguments, you can remove specific instances. If what you want
     * is to remove all instances, use %NULL `rid` and #E_CAL_OBJ_MOD_ALL
     * for the `mod`.
     * 
     * The call is finished by e_cal_client_remove_object_finish() from
     * the `callback`.
     * @param uid UID of the object to remove
     * @param rid Recurrence ID of the specific recurrence to remove
     * @param mod Type of the removal
     * @param opflags bit-or of #ECalOperationFlags
     * @param cancellable a #GCancellable; can be %NULL
     * @param callback callback to call when a result is ready
     */
    remove_object(uid: string | null, rid: string | null, mod: ObjModType, opflags: OperationFlags, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void
    /**
     * Finishes previous call of e_cal_client_remove_object().
     * @param result a #GAsyncResult
     * @returns %TRUE if successful, %FALSE otherwise.
     */
    remove_object_finish(result: Gio.AsyncResult): boolean
    /**
     * This function allows the removal of instances of a recurrent
     * appointment. By using a combination of the `uid,` `rid` and `mod`
     * arguments, you can remove specific instances. If what you want
     * is to remove all instances, use %NULL `rid` and #E_CAL_OBJ_MOD_ALL
     * for the `mod`.
     * @param uid UID of the object to remove
     * @param rid Recurrence ID of the specific recurrence to remove
     * @param mod Type of the removal
     * @param opflags bit-or of #ECalOperationFlags
     * @param cancellable a #GCancellable; can be %NULL
     * @returns %TRUE if successful, %FALSE otherwise.
     */
    remove_object_sync(uid: string | null, rid: string | null, mod: ObjModType, opflags: OperationFlags, cancellable: Gio.Cancellable | null): boolean
    /**
     * This function allows the removal of instances of recurrent appointments.
     * #ECalComponentId objects can identify specific instances (if rid is not
     * %NULL).  If what you want is to remove all instances, use a %NULL rid in
     * the #ECalComponentId and #E_CAL_OBJ_MOD_ALL for the `mod`.
     * 
     * The call is finished by e_cal_client_remove_objects_finish() from
     * the `callback`.
     * @param ids A list of #ECalComponentId objects identifying the objects to remove
     * @param mod Type of the removal
     * @param opflags bit-or of #ECalOperationFlags
     * @param cancellable a #GCancellable; can be %NULL
     * @param callback callback to call when a result is ready
     */
    remove_objects(ids: ComponentId[], mod: ObjModType, opflags: OperationFlags, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void
    /**
     * Finishes previous call of e_cal_client_remove_objects().
     * @param result a #GAsyncResult
     * @returns %TRUE if successful, %FALSE otherwise.
     */
    remove_objects_finish(result: Gio.AsyncResult): boolean
    /**
     * This function allows the removal of instances of recurrent
     * appointments. #ECalComponentId objects can identify specific instances
     * (if rid is not %NULL).  If what you want is to remove all instances, use
     * a %NULL rid in the #ECalComponentId and #E_CAL_OBJ_MOD_ALL for the `mod`.
     * @param ids a list of #ECalComponentId objects       identifying the objects to remove
     * @param mod Type of the removal
     * @param opflags bit-or of #ECalOperationFlags
     * @param cancellable a #GCancellable; can be %NULL
     * @returns %TRUE if successful, %FALSE otherwise.
     */
    remove_objects_sync(ids: ComponentId[], mod: ObjModType, opflags: OperationFlags, cancellable: Gio.Cancellable | null): boolean
    /**
     * Requests a calendar backend to send meeting information stored in `icalcomp`.
     * The backend can modify this component and request a send to particular users.
     * The call is finished by e_cal_client_send_objects_finish() from
     * the `callback`.
     * @param icalcomp An #ICalComponent to be sent
     * @param opflags bit-or of #ECalOperationFlags
     * @param cancellable a #GCancellable; can be %NULL
     * @param callback callback to call when a result is ready
     */
    send_objects(icalcomp: ICalGLib.Component, opflags: OperationFlags, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void
    /**
     * Finishes previous call of e_cal_client_send_objects() and
     * populates `out_users` with a list of users to send `out_modified_icalcomp` to.
     * 
     * The `out_users` list should be freed with e_client_util_free_string_slist()
     * and the `out_modified_icalcomp` should be freed with g_object_unref().
     * @param result a #GAsyncResult
     * @returns %TRUE if successful, %FALSE otherwise.
     */
    send_objects_finish(result: Gio.AsyncResult): [ /* returnType */ boolean, /* out_users */ string[], /* out_modified_icalcomp */ ICalGLib.Component ]
    /**
     * Requests a calendar backend to send meeting information stored in `icalcomp`.
     * The backend can modify this component and request a send to users in the
     * `out_users` list.
     * 
     * The `out_users` list should be freed with e_client_util_free_string_slist()
     * and the `out_modified_icalcomp` should be freed with g_object_unref().
     * @param icalcomp An #ICalComponent to be sent
     * @param opflags bit-or of #ECalOperationFlags
     * @param cancellable a #GCancellable; can be %NULL
     * @returns %TRUE if successful, %FALSE otherwise.
     */
    send_objects_sync(icalcomp: ICalGLib.Component, opflags: OperationFlags, cancellable: Gio.Cancellable | null): [ /* returnType */ boolean, /* out_users */ string[], /* out_modified_icalcomp */ ICalGLib.Component ]
    /**
     * Sets the default timezone to use to resolve DATE and floating DATE-TIME
     * values. This will typically be from the user's timezone setting. Call this
     * before using any other object fetching functions.
     * @param zone A timezone object.
     */
    set_default_timezone(zone: ICalGLib.Timezone): void

    // Own signals of ECal-2.0.ECal.Client

    connect(sigName: "free-busy-data", callback: Client.FreeBusyDataSignalCallback): number
    connect_after(sigName: "free-busy-data", callback: Client.FreeBusyDataSignalCallback): number
    emit(sigName: "free-busy-data", free_busy_ecalcomps: Component[], ...args: any[]): void

    // Class property signals of ECal-2.0.ECal.Client

    connect(sigName: "notify::default-timezone", callback: (($obj: Client, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::default-timezone", callback: (($obj: Client, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::default-timezone", ...args: any[]): void
    connect(sigName: "notify::source-type", callback: (($obj: Client, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::source-type", callback: (($obj: Client, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::source-type", ...args: any[]): void
    connect(sigName: "notify::capabilities", callback: (($obj: Client, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::capabilities", callback: (($obj: Client, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::capabilities", ...args: any[]): void
    connect(sigName: "notify::main-context", callback: (($obj: Client, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::main-context", callback: (($obj: Client, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::main-context", ...args: any[]): void
    connect(sigName: "notify::online", callback: (($obj: Client, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::online", callback: (($obj: Client, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::online", ...args: any[]): void
    connect(sigName: "notify::opened", callback: (($obj: Client, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opened", callback: (($obj: Client, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::opened", ...args: any[]): void
    connect(sigName: "notify::readonly", callback: (($obj: Client, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::readonly", callback: (($obj: Client, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::readonly", ...args: any[]): void
    connect(sigName: "notify::source", callback: (($obj: Client, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::source", callback: (($obj: Client, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::source", ...args: any[]): void
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
class Client extends EDataServer.Client {

    // Own properties of ECal-2.0.ECal.Client

    static name: string
    static $gtype: GObject.GType<Client>

    // Constructors of ECal-2.0.ECal.Client

    constructor(config?: Client.ConstructorProperties) 
    _init(config?: Client.ConstructorProperties): void
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
     * @param vcalendar a VCALENDAR containing a list of    VTIMEZONE and arbitrary other components, in    arbitrary order: these other components are    modified by this call
     * @param icalcomps a list of #ICalComponent    instances which also have to be patched; may be %NULL
     * @param cancellable a #GCancellable to use in `tzlookup` function
     * @returns %TRUE if successful, %FALSE otherwise.
     */
    static check_timezones_sync(vcalendar: ICalGLib.Component, icalcomps: ICalGLib.Component[] | null, cancellable: Gio.Cancellable | null): boolean
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
     * @param source an #ESource
     * @param source_type source tpe of the calendar
     * @param wait_for_connected_seconds timeout, in seconds, to wait for the backend to be fully connected
     * @param cancellable optional #GCancellable object, or %NULL
     * @param callback a #GAsyncReadyCallback to call when the request            is satisfied
     */
    static connect(source: EDataServer.Source, source_type: ClientSourceType, wait_for_connected_seconds: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<Client> | null): void
    /**
     * Finishes the operation started with e_cal_client_connect().  If an
     * error occurs in connecting to the D-Bus service, the function sets
     * `error` and returns %NULL.
     * 
     * For error handling convenience, any error message returned by this
     * function will have a descriptive prefix that includes the display
     * name of the #ESource passed to e_cal_client_connect().
     * @param result a #GAsyncResult
     * @returns a new #ECalClient, or %NULL
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
     * @param source an #ESource
     * @param source_type source type of the calendar
     * @param wait_for_connected_seconds timeout, in seconds, to wait for the backend to be fully connected
     * @param cancellable optional #GCancellable object, or %NULL
     * @returns a new #ECalClient, or %NULL
     */
    static connect_sync(source: EDataServer.Source, source_type: ClientSourceType, wait_for_connected_seconds: number, cancellable: Gio.Cancellable | null): EDataServer.Client | null
    static error_create(code: ClientError, custom_msg: string | null): GLib.Error

    // Overloads of error_create

    static error_create(code: EDataServer.ClientError, custom_msg: string | null): GLib.Error
    static error_quark(): GLib.Quark
    /**
     * Get localized human readable description of the given error code.
     * @param code an #ECalClientError error code
     * @returns Localized human readable description of the given error code
     */
    static error_to_string(code: ClientError): string | null

    // Overloads of error_to_string

    /**
     * Get localized human readable description of the given error code.
     * @param code an #EClientError error code
     * @returns Localized human readable description of the given error code
     */
    static error_to_string(code: EDataServer.ClientError): string | null
    /**
     * An implementation of the #ECalRecurResolveTimezoneCb callback which clients
     * can use. Calls e_cal_client_get_timezone_sync().
     * 
     * The returned timezone object, if not %NULL, is owned by the `ecalclient`.
     * @param tzid ID of the timezone to lookup
     * @param ecalclient a valid #ECalClient pointer
     * @param cancellable an optional #GCancellable to use, or %NULL
     * @returns A timezone object, or %NULL on failure    or when not found.
     */
    static tzlookup_cb(tzid: string | null, ecalclient: Client, cancellable: Gio.Cancellable | null): ICalGLib.Timezone | null
    /**
     * An implementation of the #ECalRecurResolveTimezoneCb callback which
     * backends can use. Searches for the timezone in an %ICalComponent
     * associated with the `lookup_data` %ECalClientTzlookupICalCompData.
     * 
     * The returned timezone object is owned by the `lookup_data`.
     * @param tzid ID of the timezone to lookup
     * @param lookup_data an #ECalClientTzlookupICalCompData    strcture, created with e_cal_client_tzlookup_icalcomp_data_new()
     * @param cancellable an optional #GCancellable to use, or %NULL
     * @returns A timezone object, or %NULL, if    not found inside @lookup_data 's #ICalComponent.
     */
    static tzlookup_icalcomp_cb(tzid: string | null, lookup_data: ClientTzlookupICalCompData, cancellable: Gio.Cancellable | null): ICalGLib.Timezone | null
}

module ClientView {

    // Signal callback interfaces

    /**
     * Signal callback interface for `complete`
     */
    interface CompleteSignalCallback {
        ($obj: ClientView, object: GLib.Error): void
    }

    /**
     * Signal callback interface for `objects-added`
     */
    interface ObjectsAddedSignalCallback {
        ($obj: ClientView, objects: ICalGLib.Component[]): void
    }

    /**
     * Signal callback interface for `objects-modified`
     */
    interface ObjectsModifiedSignalCallback {
        ($obj: ClientView, objects: ICalGLib.Component[]): void
    }

    /**
     * Signal callback interface for `objects-removed`
     */
    interface ObjectsRemovedSignalCallback {
        ($obj: ClientView, uids: ComponentId[]): void
    }

    /**
     * Signal callback interface for `progress`
     */
    interface ProgressSignalCallback {
        ($obj: ClientView, object: number, p0: string | null): void
    }


    // Constructor properties interface

    interface ConstructorProperties extends Gio.Initable.ConstructorProperties, GObject.Object.ConstructorProperties {

        // Own constructor properties of ECal-2.0.ECal.ClientView

        /**
         * The ECalClient for the view
         */
        client?: Client | null
        /**
         * The GDBusConnection used to create the D-Bus proxy
         */
        connection?: Gio.DBusConnection | null
        /**
         * The object path used to create the D-Bus proxy
         */
        object_path?: string | null
    }

}

interface ClientView extends Gio.Initable {

    // Own properties of ECal-2.0.ECal.ClientView

    /**
     * The ECalClient for the view
     */
    readonly client: Client
    /**
     * The GDBusConnection used to create the D-Bus proxy
     */
    readonly connection: Gio.DBusConnection
    /**
     * The object path used to create the D-Bus proxy
     */
    readonly object_path: string | null

    // Owm methods of ECal-2.0.ECal.ClientView

    /**
     * Returns the #GDBusConnection used to create the D-Bus proxy.
     * @returns the #GDBusConnection
     */
    get_connection(): Gio.DBusConnection
    /**
     * Returns the object path used to create the D-Bus proxy.
     * @returns the object path
     */
    get_object_path(): string | null
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
     * @returns an #ECalClient
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
     * @param fields_of_interest List of field names                      in which the client is interested, or %NULL to reset                      the fields of interest
     */
    set_fields_of_interest(fields_of_interest: string[] | null): void
    /**
     * Sets the `flags` which control the behaviour of `client_view`.
     * @param flags the #ECalClientViewFlags for `client_view`
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

    // Own virtual methods of ECal-2.0.ECal.ClientView

    vfunc_complete(error: GLib.Error): void
    vfunc_progress(percent: number, message: string | null): void

    // Own signals of ECal-2.0.ECal.ClientView

    connect(sigName: "complete", callback: ClientView.CompleteSignalCallback): number
    connect_after(sigName: "complete", callback: ClientView.CompleteSignalCallback): number
    emit(sigName: "complete", object: GLib.Error, ...args: any[]): void
    connect(sigName: "objects-added", callback: ClientView.ObjectsAddedSignalCallback): number
    connect_after(sigName: "objects-added", callback: ClientView.ObjectsAddedSignalCallback): number
    emit(sigName: "objects-added", objects: ICalGLib.Component[], ...args: any[]): void
    connect(sigName: "objects-modified", callback: ClientView.ObjectsModifiedSignalCallback): number
    connect_after(sigName: "objects-modified", callback: ClientView.ObjectsModifiedSignalCallback): number
    emit(sigName: "objects-modified", objects: ICalGLib.Component[], ...args: any[]): void
    connect(sigName: "objects-removed", callback: ClientView.ObjectsRemovedSignalCallback): number
    connect_after(sigName: "objects-removed", callback: ClientView.ObjectsRemovedSignalCallback): number
    emit(sigName: "objects-removed", uids: ComponentId[], ...args: any[]): void
    connect(sigName: "progress", callback: ClientView.ProgressSignalCallback): number
    connect_after(sigName: "progress", callback: ClientView.ProgressSignalCallback): number
    emit(sigName: "progress", object: number, p0: string | null, ...args: any[]): void

    // Class property signals of ECal-2.0.ECal.ClientView

    connect(sigName: "notify::client", callback: (($obj: ClientView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::client", callback: (($obj: ClientView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::client", ...args: any[]): void
    connect(sigName: "notify::connection", callback: (($obj: ClientView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::connection", callback: (($obj: ClientView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::connection", ...args: any[]): void
    connect(sigName: "notify::object-path", callback: (($obj: ClientView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::object-path", callback: (($obj: ClientView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::object-path", ...args: any[]): void
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
class ClientView extends GObject.Object {

    // Own properties of ECal-2.0.ECal.ClientView

    static name: string
    static $gtype: GObject.GType<ClientView>

    // Constructors of ECal-2.0.ECal.ClientView

    constructor(config?: ClientView.ConstructorProperties) 
    _init(config?: ClientView.ConstructorProperties): void
}

module Component {

    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

interface Component {

    // Owm methods of ECal-2.0.ECal.Component

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
     * @param alarm an alarm, as an #ECalComponentAlarm
     */
    add_alarm(alarm: ComponentAlarm): void
    /**
     * Creates a new calendar component object by copying the information from
     * another one.
     * @returns A newly-created calendar component with the same values as the original one.
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
     * Returns a comment for the given `locale`. When `locale` is %NULL,
     * the current locale is assumed. If no such comment for the locale
     * exists either a comment with no language parameter or the first
     * found is returned.
     * 
     * Free the returned non-NULL #ECalComponentText with e_cal_component_text_free(),
     * when no longer needed.
     * @param locale a locale identifier, or %NULL
     * @returns comment for the @locale, %NULL    if no comment is set on the @comp.
     */
    dup_comment_for_locale(locale: string | null): ComponentText | null
    /**
     * Returns a description for the given `locale`. When `locale` is %NULL,
     * the current locale is assumed. If no such description for the locale
     * exists either a description with no language parameter or the first
     * found is returned.
     * 
     * Free the returned non-NULL #ECalComponentText with e_cal_component_text_free(),
     * when no longer needed.
     * @param locale a locale identifier, or %NULL
     * @returns description for the @locale, %NULL    if no description is set on the @comp.
     */
    dup_description_for_locale(locale: string | null): ComponentText | null
    /**
     * Queries the summary of a calendar component object. There can be one summary
     * property per locale. Free the returned #GSList with
     * g_slist_free_full (slist, e_cal_component_text_free);, when no longer needed.
     * @returns the summary    properties and their parameters, as a #GSList of #ECalComponentText structures.
     */
    dup_summaries(): ComponentText[] | null
    /**
     * Returns a summary for the given `locale`. When `locale` is %NULL,
     * the current locale is assumed. If no such summary for the locale
     * exists either a summary with no language parameter or the first
     * found is returned.
     * 
     * Free the returned non-NULL #ECalComponentText with e_cal_component_text_free(),
     * when no longer needed.
     * @param locale a locale identifier, or %NULL
     * @returns summary for the @locale, %NULL    if no summary is set on the @comp.
     */
    dup_summary_for_locale(locale: string | null): ComponentText | null
    /**
     * Queries a particular alarm subcomponent of a calendar component.
     * Free the returned pointer with e_cal_component_alarm_free(),
     * when no longer needed.
     * @param auid Unique identifier for the sought alarm subcomponent.
     * @returns the alarm subcomponent that corresponds    to the specified @auid, or %NULL if no alarm exists with that UID
     */
    get_alarm(auid: string | null): ComponentAlarm | null
    /**
     * Builds a list of the unique identifiers of the alarm subcomponents inside a
     * calendar component. Free the returned #GSList with
     * g_slist_free_full (slist, g_free);, when no longer needed.
     * @returns a #GSList of unique    identifiers for alarms.
     */
    get_alarm_uids(): string[] | null
    /**
     * Queries all alarm subcomponents of a calendar component.
     * Free the returned #GSList with g_slist_free_full (slist, e_cal_component_alarm_free);,
     * when no longer needed.
     * @returns the alarm subcomponents    as a #GSList of #ECalComponentAlarm, or %NULL, if no alarm exists
     */
    get_all_alarms(): ComponentAlarm[] | null
    /**
     * Gets the iCalendar string representation of a calendar component.  You should
     * call e_cal_component_commit_sequence() before this function to ensure that the
     * component's sequence number is consistent with the state of the object.
     * @returns String representation of the calendar component according to RFC 2445.
     */
    get_as_string(): string | null
    /**
     * Queries the attachment properties as #ICalAttach objects of the calendar
     * component object. Changes on these objects are directly affecting the component.
     * Free the returned #GSList with g_slist_free_full (slist, g_object_unref);,
     * when no longer needed.
     * @returns a #GSList of    attachments, as #ICalAttach objects
     */
    get_attachments(): ICalGLib.Attach[] | null
    /**
     * Queries the attendee properties of the calendar component object.
     * Free the returned #GSList with g_slist_free_full (slist, e_cal_component_attendee_free);,
     * when no longer needed.
     * @returns     the attendees, as a #GSList of an #ECalComponentAttendee, or %NULL,    when none are set
     */
    get_attendees(): ComponentAttendee[] | null
    /**
     * Queries the categories of the given calendar component. The categories
     * are returned in the `categories` argument, which, on success, will contain
     * a comma-separated list of all categories set in the component.
     * Free the returned string with g_free(), when no longer needed.
     * @returns the categories as string, or %NULL    if none are set
     */
    get_categories(): string | null
    /**
     * Queries the list of categories of a calendar component object. Each element
     * in the returned categ_list is a string with the corresponding category.
     * Free the returned #GSList with g_slist_free_full (categories, g_free); , when
     * no longer needed.
     * @returns the #GSList of strings, where each    string is a category, or %NULL, when no category is set.
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
     * @returns the comment properties    and their parameters, as a list of #ECalComponentText structures; or %NULL, when    the component doesn't contain any.
     */
    get_comments(): ComponentText[] | null
    /**
     * Queries the date at which a calendar compoment object was completed.
     * Free the returned non-NULL pointer with g_object_unref(), when
     * no longer needed.
     * @returns the completion date, as an #ICalTime, or %NULL, when none is set
     */
    get_completed(): ICalGLib.Time | null
    /**
     * Queries the contact of a calendar component object.  The contact property can
     * appear several times inside a calendar component, and so a list of
     * #ECalComponentText is returned. Free the returned #GSList with
     * g_slist_free_full (slist, e_cal_component_text_free);, when no longer needed.
     * @returns the contact properties and    their parameters, as a #GSList of #ECalComponentText structures.
     */
    get_contacts(): ComponentText[]
    /**
     * Queries the date in which a calendar component object was created in the
     * calendar store. Free the returned non-NULL pointer with g_object_unref(), when
     * no longer needed.
     * @returns the creation date, as an #ICalTime, or %NULL, when none is set
     */
    get_created(): ICalGLib.Time | null
    /**
     * Queries the description of a calendar component object.  Journal components
     * may have more than one description, and as such this function returns a list
     * of #ECalComponentText structures.  All other types of components can have at
     * most one description for a single language. Free the returned #GSList with
     * g_slist_free_full (slist, e_cal_component_text_free);, when no longer needed.
     * @returns the description    properties and their parameters, as a #GSList of #ECalComponentText structures.
     */
    get_descriptions(): ComponentText[] | null
    /**
     * Queries the date/time end of a calendar component object. In case there's no DTEND,
     * but only DTSTART and DURATION, then the end is computed from the later two.
     * Free the returned #ECalComponentDateTime with e_cal_component_datetime_free(),
     * when no longer needed.
     * @returns the date/time end, as an #ECalComponentDateTime
     */
    get_dtend(): ComponentDateTime | null
    /**
     * Queries the date/timestamp property of a calendar component object, which is
     * the last time at which the object was modified by a calendar user agent.
     * 
     * Free a non-NULL returned object with g_object_unref(),
     * when no longer needed.
     * @returns A value for the date/timestamp, or %NULL, when none found.
     */
    get_dtstamp(): ICalGLib.Time | null
    /**
     * Queries the date/time start of a calendar component object.
     * Free the returned #ECalComponentDateTime with e_cal_component_datetime_free(),
     * when no longer needed.
     * @returns the date/time start, as an #ECalComponentDateTime
     */
    get_dtstart(): ComponentDateTime | null
    /**
     * Queries the due date/time of a calendar component object. In case there's no DUE,
     * but only DTSTART and DURATION, then the due is computed from the later two.
     * Free the returned #ECalComponentDateTime with e_cal_component_datetime_free(),
     * when no longer needed.
     * @returns the due date/time, as an #ECalComponentDateTime
     */
    get_due(): ComponentDateTime | null
    /**
     * Queries the list of exception date properties in a calendar component object.
     * Free the returned #GSList with g_slist_free_full (exdates, e_cal_component_datetime_free);,
     * when no longer needed.
     * @returns     the list of exception dates, as a #GSList of #ECalComponentDateTime
     */
    get_exdates(): ComponentDateTime[] | null
    /**
     * Queries the list of exception rule properties of a calendar component object.
     * Free the list with g_slist_free_full (slist, g_object_unref);, when
     * no longer needed.
     * @returns a list of exception    rule properties
     */
    get_exrule_properties(): ICalGLib.Property[] | null
    /**
     * Queries the list of exception rule properties of a calendar component
     * object. Free the returned list with g_slist_free_full (slist, g_object_unref);,
     * when no longer needed.
     * @returns a #GSList    of exception rules as #ICalRecurrence structures, or %NULL, when none exist.
     */
    get_exrules(): ICalGLib.Recurrence[] | null
    /**
     * Gets the geographic position property of a calendar component object.
     * Free the returned non-NULL object with g_object_unref(), when
     * no longer needed.
     * @returns the geographic position as #ICalGeo,    or %NULL, when none set.
     */
    get_geo(): ICalGLib.Geo | null
    /**
     * Queries the #icalcomponent structure that a calendar component object is
     * wrapping.
     * @returns An #ICalComponent structure, or %NULL    if the @comp has no #ICalComponent set to it.
     */
    get_icalcomponent(): ICalGLib.Component | null
    /**
     * Get the ID of the component as an #ECalComponentId. The return value should
     * be freed with e_cal_component_id_free(), when no longer needed.
     * @returns the id of the component
     */
    get_id(): ComponentId
    /**
     * Queries the time at which a calendar component object was last modified in
     * the calendar store. Free the returned non-NULL pointer with g_object_unref(),
     * when no longer needed.
     * @returns the last modified time, as an #ICalTime, or %NULL, when none is set
     */
    get_last_modified(): ICalGLib.Time | null
    /**
     * Queries the location property of a calendar component object.
     * @returns the locatio, or %NULL, if none is set
     */
    get_location(): string | null
    /**
     * Queries the organizer property of a calendar component object.
     * Free the returned structure with e_cal_component_organizer_free(),
     * when no longer needed.
     * @returns an #ECalComponentOrganizer structure    destribing the organizer, or %NULL, when none exists.
     */
    get_organizer(): ComponentOrganizer | null
    /**
     * Queries the percent-complete property of a calendar component object.
     * @returns the percent-complete property value, or -1 if not found
     */
    get_percent_complete(): number
    /**
     * Queries the priority property of a calendar component object.
     * @returns the priority property value, or -1, if not found
     */
    get_priority(): number
    /**
     * Queries the list of recurrence date properties in a calendar component
     * object. Free the returned #GSList with g_slist_free_full (slist, e_cal_component_period_free);,
     * when no longer needed.
     * @returns the list    of recurrence dates, as a #GSList of #ECalComponentPeriod structures.
     */
    get_rdates(): ComponentPeriod[] | null
    /**
     * Queries the recurrence id property of a calendar component object.
     * Free the returned #ECalComponentRange with e_cal_component_range_free(),
     * whe no longer needed.
     * @returns the recurrence id property, as an #ECalComponentRange
     */
    get_recurid(): ComponentRange | null
    /**
     * Gets the recurrence ID property as a string.
     * @returns the recurrence ID as a string.
     */
    get_recurid_as_string(): string | null
    /**
     * Queries a list of recurrence rule properties of a calendar component object.
     * Free the list with g_slist_free_full (slist, g_object_unref);, when
     * no longer needed.
     * @returns a list of recurrence    rule properties
     */
    get_rrule_properties(): ICalGLib.Property[] | null
    /**
     * Queries the list of recurrence rule properties of a calendar component
     * object. Free the returned list with g_slist_free_full (slist, g_object_unref);,
     * when no longer needed.
     * @returns a #GSList    of recurrence rules as #ICalRecurrence structures, or %NULL, when none exist.
     */
    get_rrules(): ICalGLib.Recurrence[] | null
    /**
     * Queries the sequence number of a calendar component object.
     * @returns the sequence number, or -1 if not found
     */
    get_sequence(): number
    /**
     * Queries the status property of a calendar component object.
     * @returns the status value; or %I_CAL_STATUS_NONE, if the component   has no status property
     */
    get_status(): ICalGLib.PropertyStatus
    /**
     * Queries the summary of a calendar component object. It returns the first
     * found summary property of the component. To get a summary suitable for a specific
     * locale use e_cal_component_dup_summary_for_locale().
     * 
     * Free the returned pointer withe_cal_component_text_free(),
     * when no longer needed.
     * @returns the summary, as an #ECalComponentText,    or %NULL, when none is set
     */
    get_summary(): ComponentText | null
    /**
     * Queries the time transparency of a calendar component object.
     * @returns the time transparency, as an #ECalComponentTransparency;    value #E_CAL_COMPONENT_TRANSP_NONE is returned when none is set
     */
    get_transparency(): ComponentTransparency
    /**
     * Queries the unique identifier of a calendar component object.
     * @returns the UID string
     */
    get_uid(): string | null
    /**
     * Queries the uniform resource locator property of a calendar component object.
     * Free the returned URL with g_free(), when no longer needed.
     * @returns the URL, or %NULL, when none is set
     */
    get_url(): string | null
    /**
     * Queries the type of a calendar component object.
     * @returns The type of the component, as defined by RFC 2445.
     */
    get_vtype(): ComponentVType
    /**
     * Checks whether the component has any alarms.
     * @returns TRUE if the component has any alarms.
     */
    has_alarms(): boolean
    /**
     * Queries the component to see if it has attachments.
     * @returns TRUE if there are attachments, FALSE otherwise.
     */
    has_attachments(): boolean
    /**
     * Queries a calendar component object for the existence of attendees.
     * @returns TRUE if there are attendees, FALSE if not.
     */
    has_attendees(): boolean
    /**
     * Queries whether a calendar component object has any exception dates
     * or exception rules.
     * @returns TRUE if the component has exceptions, FALSE otherwise.
     */
    has_exceptions(): boolean
    /**
     * Queries whether a calendar component object has any exception dates defined
     * for it.
     * @returns TRUE if the component has exception dates, FALSE otherwise.
     */
    has_exdates(): boolean
    /**
     * Queries whether a calendar component object has any exception rules defined
     * for it.
     * @returns TRUE if the component has exception rules, FALSE otherwise.
     */
    has_exrules(): boolean
    /**
     * Check whether a calendar component object has an organizer or not.
     * @returns TRUE if there is an organizer, FALSE otherwise.
     */
    has_organizer(): boolean
    /**
     * Queries whether a calendar component object has any recurrence dates defined
     * for it.
     * @returns TRUE if the component has recurrence dates, FALSE otherwise.
     */
    has_rdates(): boolean
    /**
     * Queries whether a calendar component object has any recurrence dates or
     * recurrence rules.
     * @returns TRUE if the component has recurrences, FALSE otherwise.
     */
    has_recurrences(): boolean
    /**
     * Queries whether a calendar component object has any recurrence rules defined
     * for it.
     * @returns TRUE if the component has recurrence rules, FALSE otherwise.
     */
    has_rrules(): boolean
    /**
     * Checks whether the given calendar component object has simple recurrence
     * rules or more complicated ones.
     * @returns TRUE if it has a simple recurrence rule, FALSE otherwise.
     */
    has_simple_recurrence(): boolean
    /**
     * Checks whether a calendar component object is an instance of a recurring
     * event.
     * @returns TRUE if it is an instance, FALSE if not.
     */
    is_instance(): boolean
    /**
     * Removes an alarm subcomponent from a calendar component.  If the alarm that
     * corresponds to the specified `auid` had been fetched with
     * e_cal_component_get_alarm(), then those alarm structures will be invalid; you
     * should get rid of them with e_cal_component_alarm_free() before using this
     * function.
     * @param auid UID of the alarm to remove.
     */
    remove_alarm(auid: string | null): void
    /**
     * Remove all alarms from the calendar component
     */
    remove_all_alarms(): void
    /**
     * Sets the attachments of the calendar component object.
     * @param attachments a #GSList of an #ICalAttach,    or %NULL to remove any existing
     */
    set_attachments(attachments: ICalGLib.Attach[] | null): void
    /**
     * Sets the attendees of a calendar component object
     * @param attendee_list Values for attendee    properties, or %NULL to unset
     */
    set_attendees(attendee_list: ComponentAttendee[] | null): void
    /**
     * Sets the list of categories for a calendar component.
     * @param categories Comma-separated list of categories.
     */
    set_categories(categories: string | null): void
    /**
     * Sets the list of categories of a calendar component object.
     * @param categ_list List of strings, one for each category.
     */
    set_categories_list(categ_list: string[]): void
    /**
     * Sets the classification property of a calendar component object.  To unset
     * the property, specify E_CAL_COMPONENT_CLASS_NONE for `classif`.
     * @param classif Classification to use.
     */
    set_classification(classif: ComponentClassification): void
    /**
     * Sets the comments of a calendar component object.  The comment property can
     * appear several times inside a calendar component, and so a list of
     * #ECalComponentText structures is used.
     * @param text_list List of #ECalComponentText structures.
     */
    set_comments(text_list: ComponentText[]): void
    /**
     * Sets the date at which a calendar component object was completed.
     * @param tt Value for the completion date.
     */
    set_completed(tt: ICalGLib.Time | null): void
    /**
     * Sets the contact of a calendar component object.  The contact property can
     * appear several times inside a calendar component, and so a list of
     * #ECalComponentText structures is used.
     * @param text_list List of #ECalComponentText structures.
     */
    set_contacts(text_list: ComponentText[]): void
    /**
     * Sets the date in which a calendar component object is created in the calendar
     * store.  This should only be used inside a calendar store application, i.e.
     * not by calendar user agents.
     * @param tt Value for the creation date.
     */
    set_created(tt: ICalGLib.Time | null): void
    /**
     * Sets the description of a calendar component object.  Journal components may
     * have more than one description, and as such this function takes in a list of
     * #ECalComponentText structures.  All other types of components can have
     * at most one description.
     * @param text_list List of #ECalComponentText structures.
     */
    set_descriptions(text_list: ComponentText[]): void
    /**
     * Sets the date/time end property of a calendar component object.
     * @param dt End date/time, or %NULL, to remove the property.
     */
    set_dtend(dt: ComponentDateTime | null): void
    /**
     * Sets the date/timestamp of a calendar component object.  This should be
     * called whenever a calendar user agent makes a change to a component's
     * properties.
     * @param tt Date/timestamp value.
     */
    set_dtstamp(tt: ICalGLib.Time): void
    /**
     * Sets the date/time start property of a calendar component object.
     * @param dt Start date/time, or %NULL, to remove the property.
     */
    set_dtstart(dt: ComponentDateTime | null): void
    /**
     * Sets the due date/time property of a calendar component object.
     * @param dt End date/time, or %NULL, to remove the property.
     */
    set_due(dt: ComponentDateTime | null): void
    /**
     * Sets the list of exception dates in a calendar component object.
     * @param exdate_list List of #ECalComponentDateTime structures.
     */
    set_exdates(exdate_list: ComponentDateTime[] | null): void
    /**
     * Sets the list of exception rules in a calendar component object.
     * @param recur_list a #GSList    of #ICalRecurrence structures, or %NULL.
     */
    set_exrules(recur_list: ICalGLib.Recurrence[] | null): void
    /**
     * Sets the geographic position property on a calendar component object.
     * @param geo Value for the geographic position property, or %NULL to unset.
     */
    set_geo(geo: ICalGLib.Geo | null): void
    /**
     * Sets the contents of a calendar component object from an #ICalComponent.
     * If the `comp` already had an #ICalComponent set into it, it will
     * be freed automatically.
     * 
     * Supported component types are VEVENT, VTODO, VJOURNAL, VFREEBUSY, and VTIMEZONE.
     * @param icalcomp An #ICalComponent.
     * @returns %TRUE on success, %FALSE if @icalcomp is an unsupported component type.
     */
    set_icalcomponent(icalcomp: ICalGLib.Component | null): boolean
    /**
     * Sets the time at which a calendar component object was last stored in the
     * calendar store.  This should not be called by plain calendar user agents.
     * @param tt Value for the last time modified.
     */
    set_last_modified(tt: ICalGLib.Time | null): void
    /**
     * Sets the location property of a calendar component object.
     * @param location Location value. Use %NULL or empty string, to unset the property.
     */
    set_location(location: string | null): void
    /**
     * Clears any existing component data from a calendar component object and
     * creates a new #ICalComponent of the specified type for it.  The only property
     * that will be set in the new component will be its unique identifier.
     * @param type Type of calendar component to create.
     */
    set_new_vtype(type: ComponentVType): void
    /**
     * Sets the organizer of a calendar component object
     * @param organizer Value for the organizer property, as an #ECalComponentOrganizer
     */
    set_organizer(organizer: ComponentOrganizer | null): void
    /**
     * Sets percent complete. The `percent` can be between 0 and 100, inclusive.
     * A special value -1 can be used to remove the percent complete property.
     * @param percent a percent to set, or -1 to remove the property
     */
    set_percent_complete(percent: number): void
    /**
     * Sets the priority property of a calendar component object.
     * The `priority` can be between 0 and 9, inclusive.
     * A special value -1 can be used to remove the priority property.
     * @param priority Value for the priority property.
     */
    set_priority(priority: number): void
    /**
     * Sets the list of recurrence dates in a calendar component object.
     * @param rdate_list List of    #ECalComponentPeriod structures, or %NULL to set none
     */
    set_rdates(rdate_list: ComponentPeriod[] | null): void
    /**
     * Sets the recurrence id property of a calendar component object.
     * @param recur_id Value for the recurrence id property, or %NULL, to remove the property.
     */
    set_recurid(recur_id: ComponentRange | null): void
    /**
     * Sets the list of recurrence rules in a calendar component object.
     * @param recur_list List of #ICalRecurrence structures, or %NULL.
     */
    set_rrules(recur_list: ICalGLib.Recurrence[] | null): void
    /**
     * Sets the sequence number of a calendar component object.
     * A special value -1 can be used to remove the sequence number property.
     * 
     * Normally this function should not be called, since the sequence number
     * is incremented automatically at the proper times.
     * @param sequence a sequence number to set, or -1 to remove the property
     */
    set_sequence(sequence: number): void
    /**
     * Sets the status property of a calendar component object.
     * @param status Status value, as an #ICalPropertyStatus. Use %I_CAL_STATUS_NONE, to unset the property
     */
    set_status(status: ICalGLib.PropertyStatus): void
    /**
     * Sets the summary of a calendar component object. The summaries can have each
     * different language, otherwise it's not allowed to have more than one summary property.
     * 
     * This does not update any alarm subcomponent description.
     * @param text_list List of #ECalComponentText structures.
     */
    set_summaries(text_list: ComponentText[]): void
    /**
     * Sets the summary of a calendar component object.
     * 
     * This also updates any alarm subcomponent descriptions, if needed.
     * @param summary Summary property and its parameters.
     */
    set_summary(summary: ComponentText): void
    /**
     * Sets the time transparency of a calendar component object.
     * Use %E_CAL_COMPONENT_TRANSP_NONE to unset the property.
     * @param transp Time transparency value.
     */
    set_transparency(transp: ComponentTransparency): void
    /**
     * Sets the unique identifier string of a calendar component object.
     * @param uid Unique identifier.
     */
    set_uid(uid: string | null): void
    /**
     * Sets the uniform resource locator property of a calendar component object.
     * A %NULL or an empty string removes the property.
     * @param url URL value.
     */
    set_url(url: string | null): void
    /**
     * Strips all error messages from the calendar component. Those error messages are
     * added to the iCalendar string representation whenever an invalid is used for
     * one of its fields.
     */
    strip_errors(): void

    // Class property signals of ECal-2.0.ECal.Component

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class Component extends GObject.Object {

    // Own properties of ECal-2.0.ECal.Component

    static name: string
    static $gtype: GObject.GType<Component>

    // Constructors of ECal-2.0.ECal.Component

    constructor(config?: Component.ConstructorProperties) 
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
    static new(): Component
    /**
     * Creates a new #ECalComponent which will has set `icalcomp` as
     * an inner #ICalComponent. The newly created #ECalComponent takes
     * ownership of the `icalcomp,` and if the call
     * to e_cal_component_set_icalcomponent() fails, then `icalcomp`
     * is freed.
     * @constructor 
     * @param icalcomp An #ICalComponent to use
     * @returns An #ECalComponent with @icalcomp    assigned on success, %NULL if the @icalcomp cannot be assigned to    #ECalComponent.
     */
    static new_from_icalcomponent(icalcomp: ICalGLib.Component): Component
    /**
     * Creates a new calendar component object from the given iCalendar string.
     * @constructor 
     * @param calobj A string representation of an iCalendar component.
     * @returns A calendar component representing    the given iCalendar string on success, %NULL if there was an error.
     */
    static new_from_string(calobj: string | null): Component
    /**
     * Creates a new #ECalComponent of type `vtype`.
     * @constructor 
     * @param vtype an #ECalComponentVType
     * @returns A newly-created calendar component object with set @vtype.
     */
    static new_vtype(vtype: ComponentVType): Component
    _init(config?: Component.ConstructorProperties): void
}

module ReminderWatcher {

    // Signal callback interfaces

    /**
     * Signal callback interface for `changed`
     */
    interface ChangedSignalCallback {
        ($obj: ReminderWatcher): void
    }

    /**
     * Signal callback interface for `format-time`
     */
    interface FormatTimeSignalCallback {
        ($obj: ReminderWatcher, rd: ReminderData, itt: ICalGLib.Time, inout_buffer: any | null, buffer_size: number): void
    }

    /**
     * Signal callback interface for `triggered`
     */
    interface TriggeredSignalCallback {
        ($obj: ReminderWatcher, reminders: ReminderData[], snoozed: boolean): void
    }


    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of ECal-2.0.ECal.ReminderWatcher

        /**
         * An #ICalTimezone to be used as the default time zone.
         */
        default_zone?: ICalGLib.Timezone | null
        /**
         * The #ESourceRegistry which manages #ESource instances.
         */
        registry?: EDataServer.SourceRegistry | null
        /**
         * Whether timers are enabled for the #EReminderWatcher. See
         * e_reminder_watcher_set_timers_enabled() for more information
         * what it means.
         * 
         * Default: %TRUE
         */
        timers_enabled?: boolean | null
    }

}

interface ReminderWatcher {

    // Own properties of ECal-2.0.ECal.ReminderWatcher

    /**
     * An #ICalTimezone to be used as the default time zone.
     */
    default_zone: ICalGLib.Timezone
    /**
     * The #ESourceRegistry which manages #ESource instances.
     */
    readonly registry: EDataServer.SourceRegistry
    /**
     * Whether timers are enabled for the #EReminderWatcher. See
     * e_reminder_watcher_set_timers_enabled() for more information
     * what it means.
     * 
     * Default: %TRUE
     */
    timers_enabled: boolean

    // Owm methods of ECal-2.0.ECal.ReminderWatcher

    /**
     * Returns a new string with a text description of the `rd`. The text format
     * can be influenced with `flags`.
     * 
     * Free the returned string with g_free(), when no longer needed.
     * @param rd an #EReminderData
     * @param flags bit-or of #EReminderWatcherDescribeFlags
     * @returns a new string with a text description of the @rd.
     */
    describe_data(rd: ReminderData, flags: number): string | null
    /**
     * Asynchronously dismiss single reminder in the past or snoozed reminders.
     * 
     * When the operation is finished, `callback` will be called. You can
     * then call e_reminder_watcher_dismiss_finish() to get the result of
     * the operation.
     * @param rd an #EReminderData to dismiss
     * @param cancellable optional #GCancellable object, or %NULL
     * @param callback a #GAsyncReadyCallback to call when the request is satisfied
     */
    dismiss(rd: ReminderData, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void
    /**
     * Asynchronously dismiss all past reminders.
     * 
     * When the operation is finished, `callback` will be called. You can
     * then call e_reminder_watcher_dismiss_all_finish() to get the result
     * of the operation.
     * @param cancellable optional #GCancellable object, or %NULL
     * @param callback a #GAsyncReadyCallback to call when the request is satisfied
     */
    dismiss_all(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void
    /**
     * Finishes the operation started with e_reminder_watcher_dismiss_all().
     * @param result a #GAsyncResult
     * @returns whether succeeded
     */
    dismiss_all_finish(result: Gio.AsyncResult): boolean
    /**
     * Synchronously dismiss all past reminders. The operation stops after
     * the first error is encountered, which can be before all the past
     * reminders are dismissed.
     * @param cancellable optional #GCancellable object, or %NULL
     * @returns whether succeeded.
     */
    dismiss_all_sync(cancellable: Gio.Cancellable | null): boolean
    /**
     * Finishes the operation started with e_reminder_watcher_dismiss().
     * @param result a #GAsyncResult
     * @returns whether succeeded
     */
    dismiss_finish(result: Gio.AsyncResult): boolean
    /**
     * Synchronously dismiss single reminder in the past or snoozed reminders.
     * @param rd an #EReminderData to dismiss
     * @param cancellable optional #GCancellable object, or %NULL
     * @returns whether succeeded
     */
    dismiss_sync(rd: ReminderData, cancellable: Gio.Cancellable | null): boolean
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
     * @returns a newly    allocated #GSList of the past reminders, or %NULL, when there are none
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
     * @returns a newly    allocated #GSList of the snoozed reminders, or %NULL, when there are none
     */
    dup_snoozed(): ReminderData[] | null
    get_registry(): EDataServer.SourceRegistry
    get_timers_enabled(): boolean
    ref_opened_client(source_uid: string | null): Client | null
    /**
     * Sets the default zone for the `watcher`. This is used when calculating
     * trigger times for floating component times. When the `zone` is %NULL,
     * then sets a UTC time zone.
     * @param zone an #ICalTimezone
     */
    set_default_zone(zone: ICalGLib.Timezone | null): void
    /**
     * The `watcher` can be used both for scheduling the timers for the reminders
     * and respond to them through the "triggered" signal, or only to listen for
     * changes on the past reminders. The default is to have timers enabled, thus
     * to response to scheduled reminders. Disabling the timers also means there
     * will be less resources needed by the `watcher`.
     * @param enabled a value to set
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
     * @param rd an #EReminderData identifying the reminder
     * @param until time_t as gint64, when the `rd` should be retriggered
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

    // Own virtual methods of ECal-2.0.ECal.ReminderWatcher

    vfunc_cal_client_connect(source: EDataServer.Source, source_type: ClientSourceType, wait_for_connected_seconds: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void
    vfunc_changed(): void
    vfunc_format_time(rd: ReminderData, itt: ICalGLib.Time, inout_buffer: string | null, buffer_size: number): void
    vfunc_schedule_timer(at_time: number): void

    // Own signals of ECal-2.0.ECal.ReminderWatcher

    connect(sigName: "changed", callback: ReminderWatcher.ChangedSignalCallback): number
    connect_after(sigName: "changed", callback: ReminderWatcher.ChangedSignalCallback): number
    emit(sigName: "changed", ...args: any[]): void
    connect(sigName: "format-time", callback: ReminderWatcher.FormatTimeSignalCallback): number
    connect_after(sigName: "format-time", callback: ReminderWatcher.FormatTimeSignalCallback): number
    emit(sigName: "format-time", rd: ReminderData, itt: ICalGLib.Time, inout_buffer: any | null, buffer_size: number, ...args: any[]): void
    connect(sigName: "triggered", callback: ReminderWatcher.TriggeredSignalCallback): number
    connect_after(sigName: "triggered", callback: ReminderWatcher.TriggeredSignalCallback): number
    emit(sigName: "triggered", reminders: ReminderData[], snoozed: boolean, ...args: any[]): void

    // Class property signals of ECal-2.0.ECal.ReminderWatcher

    connect(sigName: "notify::default-zone", callback: (($obj: ReminderWatcher, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::default-zone", callback: (($obj: ReminderWatcher, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::default-zone", ...args: any[]): void
    connect(sigName: "notify::registry", callback: (($obj: ReminderWatcher, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::registry", callback: (($obj: ReminderWatcher, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::registry", ...args: any[]): void
    connect(sigName: "notify::timers-enabled", callback: (($obj: ReminderWatcher, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::timers-enabled", callback: (($obj: ReminderWatcher, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::timers-enabled", ...args: any[]): void
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
class ReminderWatcher extends GObject.Object {

    // Own properties of ECal-2.0.ECal.ReminderWatcher

    static name: string
    static $gtype: GObject.GType<ReminderWatcher>

    // Constructors of ECal-2.0.ECal.ReminderWatcher

    constructor(config?: ReminderWatcher.ConstructorProperties) 
    /**
     * Creates a new #EReminderWatcher, which will use the `registry`. It adds
     * its own reference to `registry`. Free the created #EReminderWatcher
     * with g_object_unref() when no longer needed.
     * @constructor 
     * @param registry an #ESourceRegistry
     * @returns a new instance of #EReminderWatcher
     */
    constructor(registry: EDataServer.SourceRegistry) 
    /**
     * Creates a new #EReminderWatcher, which will use the `registry`. It adds
     * its own reference to `registry`. Free the created #EReminderWatcher
     * with g_object_unref() when no longer needed.
     * @constructor 
     * @param registry an #ESourceRegistry
     * @returns a new instance of #EReminderWatcher
     */
    static new(registry: EDataServer.SourceRegistry): ReminderWatcher
    _init(config?: ReminderWatcher.ConstructorProperties): void
}

interface ClientClass {
}

/**
 * Base class structure for the #ECalClient class
 * @record 
 */
abstract class ClientClass {

    // Own properties of ECal-2.0.ECal.ClientClass

    static name: string
}

interface ClientPrivate {
}

class ClientPrivate {

    // Own properties of ECal-2.0.ECal.ClientPrivate

    static name: string
}

interface ClientTzlookupICalCompData {

    // Owm methods of ECal-2.0.ECal.ClientTzlookupICalCompData

    /**
     * Copies given #ECalClientTzlookupICalCompData structure.
     * When the `lookup_data` is %NULL, simply returns %NULL as well.
     * @returns copy of the @lookup_data. Free the returned structure    with e_cal_client_tzlookup_icalcomp_data_free(), when no longer needed.
     */
    copy(): ClientTzlookupICalCompData | null
    /**
     * Frees previously allocated #ECalClientTzlookupICalCompData structure
     * with e_cal_client_tzlookup_icalcomp_data_new() or e_cal_client_tzlookup_icalcomp_data_copy().
     * The function does nothing when `lookup_data` is %NULL.
     */
    free(): void
    get_icalcomponent(): ICalGLib.Component
}

/**
 * Contains data used as lookup_data of e_cal_client_tzlookup_icalcomp_cb().
 * @record 
 */
class ClientTzlookupICalCompData {

    // Own properties of ECal-2.0.ECal.ClientTzlookupICalCompData

    static name: string

    // Constructors of ECal-2.0.ECal.ClientTzlookupICalCompData

    /**
     * Constructs a new #ECalClientTzlookupICalCompData, which can
     * be used as a lookup_data argument of e_cal_client_tzlookup_icalcomp_cb().
     * Free it with e_cal_client_tzlookup_icalcomp_data_free(), when no longer needed.
     * @constructor 
     * @param icomp an #ICalComponent
     * @returns a new #ECalClientTzlookupICalCompData
     */
    constructor(icomp: ICalGLib.Component) 
    /**
     * Constructs a new #ECalClientTzlookupICalCompData, which can
     * be used as a lookup_data argument of e_cal_client_tzlookup_icalcomp_cb().
     * Free it with e_cal_client_tzlookup_icalcomp_data_free(), when no longer needed.
     * @constructor 
     * @param icomp an #ICalComponent
     * @returns a new #ECalClientTzlookupICalCompData
     */
    static new(icomp: ICalGLib.Component): ClientTzlookupICalCompData
}

interface ClientViewClass {

    // Own fields of ECal-2.0.ECal.ClientViewClass

    progress: (client_view: ClientView, percent: number, message: string | null) => void
    complete: (client_view: ClientView, error: GLib.Error) => void
}

/**
 * Base class structure for the #ECalClientView class
 * @record 
 */
abstract class ClientViewClass {

    // Own properties of ECal-2.0.ECal.ClientViewClass

    static name: string
}

interface ClientViewPrivate {
}

class ClientViewPrivate {

    // Own properties of ECal-2.0.ECal.ClientViewPrivate

    static name: string
}

interface ComponentAlarm {

    // Owm methods of ECal-2.0.ECal.ComponentAlarm

    /**
     * Returns a newly allocated copy of `alarm,` which should be freed with
     * e_cal_component_alarm_free(), when no longer needed.
     * @returns a newly allocated copy of @alarm
     */
    copy(): ComponentAlarm
    /**
     * Fills `component` with data from `alarm`. The `component` should
     * be of %I_CAL_VALARM_COMPONENT kind - the function does nothing,
     * if it's not. In case the `alarm` doesn't have set 'uid', a new
     * is assigned.
     * @param component an #ICalComponent of %I_CAL_VALARM_COMPONENT kind
     */
    fill_component(component: ICalGLib.Component): void
    /**
     * Get the last time the alarm had been acknowledged, that is, when its
     * reminder had been triggered.
     * The returned #ICalTime is owned by `alarm` and should not be modified,
     * neither its content.
     * @returns the @alarm acknowledged time,    or %NULL, when none is set
     */
    get_acknowledged(): ICalGLib.Time | null
    /**
     * Get the `alarm` action, as an #ECalComponentAlarmAction.
     * @returns the @alarm action, or %E_CAL_COMPONENT_ALARM_NONE, when none is set
     */
    get_action(): ComponentAlarmAction
    /**
     * Creates a VALARM #ICalComponent filled with data from the `alarm`.
     * In case the `alarm` doesn't have set 'uid', a new is assigned.
     * Free the returned component with g_object_unref(), when no longer
     * needed.
     * @returns a newly created #ICalComponent    of %I_CAL_VALARM_COMPONENT kind
     */
    get_as_component(): ICalGLib.Component
    /**
     * Get the list of attachments, as #ICalAttach.
     * The returned #GSList is owned by `alarm` and should not be modified,
     * neither its content.
     * @returns the @alarm attachments,    as a #GSList of an #ICalAttach, or %NULL, when none is set
     */
    get_attachments(): ICalGLib.Attach[] | null
    /**
     * Get the list of attendees, as #ECalComponentAttendee.
     * The returned #GSList is owned by `alarm` and should not be modified,
     * neither its content.
     * @returns the @alarm attendees,    as a #GSList of an #ECalComponentAttendee, or %NULL when, none are set
     */
    get_attendees(): ComponentAttendee[] | null
    /**
     * Get the `alarm` description, as an #ECalComponentText.
     * @returns the @alarm description, or %NULL, when none is set
     */
    get_description(): ComponentText | null
    get_property_bag(): ComponentPropertyBag
    /**
     * Get the `alarm` repeat information, as an ECalComponentAlarmRepeat.
     * @returns the @alarm repeat information,    or %NULL, when none is set
     */
    get_repeat(): ComponentAlarmRepeat | null
    /**
     * Get the `alarm` summary, as an #ECalComponentText.
     * @returns the @alarm summary, or %NULL, when none is set
     */
    get_summary(): ComponentText | null
    /**
     * Get the `alarm` trigger, as an #ECalComponentAlarmTrigger.
     * @returns the @alarm trigger, or %NULL when, none is set
     */
    get_trigger(): ComponentAlarmTrigger | null
    /**
     * Get the `alarm` UID.
     * @returns the @alarm UID, or %NULL, when none is set
     */
    get_uid(): string | null
    has_attachments(): boolean
    has_attendees(): boolean
    /**
     * Set the acknowledged time of the `alarm`. Use %NULL to unset it.
     * @param when an #ICalTime when the `alarm`    had been acknowledged, or %NULL to unset
     */
    set_acknowledged(when: ICalGLib.Time | null): void
    /**
     * Set the `alarm` action, as an #ECalComponentAlarmAction.
     * @param action an #ECalComponentAlarmAction
     */
    set_action(action: ComponentAlarmAction): void
    /**
     * Set the list of attachments, as a #GSList of an #ICalAttach.
     * @param attachments a #GSList    of an #ICalAttach objects to set as attachments, or %NULL to unset
     */
    set_attachments(attachments: ICalGLib.Attach[] | null): void
    /**
     * Set the list of attendees, as a #GSList of an #ECalComponentAttendee.
     * @param attendees a #GSList    of an #ECalComponentAttendee objects to set as attendees, or %NULL to unset
     */
    set_attendees(attendees: ComponentAttendee[] | null): void
    /**
     * Set the `alarm` description, as an #ECalComponentText.
     * @param description a description to set, or %NULL to unset
     */
    set_description(description: ComponentText | null): void
    /**
     * Fill the `alarm` structure with the information from
     * the `component,` which should be of %I_CAL_VALARM_COMPONENT kind.
     * @param component an #ICalComponent
     */
    set_from_component(component: ICalGLib.Component): void
    /**
     * Set the `alarm` repeat information, as an #ECalComponentAlarmRepeat.
     * @param repeat a repeat information to set, or %NULL to unset
     */
    set_repeat(repeat: ComponentAlarmRepeat | null): void
    /**
     * Set the `alarm` summary, as an #ECalComponentText.
     * @param summary a summary to set, or %NULL to unset
     */
    set_summary(summary: ComponentText | null): void
    /**
     * Set the `alarm` trigger, as an #ECalComponentAlarmTrigger.
     * @param trigger a trigger to set, or %NULL to unset
     */
    set_trigger(trigger: ComponentAlarmTrigger | null): void
    /**
     * Set the `alarm` UID, or generates a new UID, if `uid` is %NULL or an empty string.
     * @param uid a UID to set, or %NULL or empty string to generate new
     */
    set_uid(uid: string | null): void
    /**
     * Set the acknowledged time of the `alarm`. Use %NULL to unset it.
     * The function assumes ownership of the `when`.
     * @param when an #ICalTime when the `alarm`    had been acknowledged, or %NULL to unset
     */
    take_acknowledged(when: ICalGLib.Time | null): void
}

/**
 * Opaque structure, which represents alarm subcomponents.
 * Use the functions below to work with it.
 * @record 
 */
class ComponentAlarm {

    // Own properties of ECal-2.0.ECal.ComponentAlarm

    static name: string

    // Constructors of ECal-2.0.ECal.ComponentAlarm

    /**
     * Creates a new empty #ECalComponentAlarm structure. Free it
     * with e_cal_component_alarm_free(), when no longer needed.
     * @constructor 
     * @returns a newly allocated #ECalComponentAlarm
     */
    constructor() 
    /**
     * Creates a new empty #ECalComponentAlarm structure. Free it
     * with e_cal_component_alarm_free(), when no longer needed.
     * @constructor 
     * @returns a newly allocated #ECalComponentAlarm
     */
    static new(): ComponentAlarm
    /**
     * Creates a new #ECalComponentAlarm, filled with values from `component,`
     * which should be of kind %I_CAL_VALARM_COMPONENT. The function returns
     * %NULL when it is not of the expected kind. Free the structure
     * with e_cal_component_alarm_free(), when no longer needed.
     * @constructor 
     * @param component an #ICalComponent of kind %I_CAL_VALARM_COMPONENT
     * @returns a newly allocated #ECalComponentAlarm
     */
    static new_from_component(component: ICalGLib.Component): ComponentAlarm
}

interface ComponentAlarmInstance {

    // Owm methods of ECal-2.0.ECal.ComponentAlarmInstance

    /**
     * Returns a newly allocated copy of `instance,` which should be freed with
     * e_cal_component_alarm_instance_free(), when no longer needed.
     * @returns a newly allocated copy of @instance
     */
    copy(): ComponentAlarmInstance
    get_occur_end(): number
    get_occur_start(): number
    get_rid(): string | null
    get_time(): number
    get_uid(): string | null
    /**
     * Set the actual event occurrence end to which this `instance` corresponds.
     * @param occur_end event occurence end to set
     */
    set_occur_end(occur_end: number): void
    /**
     * Set the actual event occurrence start to which this `instance` corresponds.
     * @param occur_start event occurence start to set
     */
    set_occur_start(occur_start: number): void
    /**
     * Set the Recurrence ID of the component this `instance` was generated for.
     * @param rid recurrence UID to set, or %NULL
     */
    set_rid(rid: string | null): void
    /**
     * Set the instance time, i.e. "5 minutes before the appointment".
     * @param instance_time instance time to set
     */
    set_time(instance_time: number): void
    /**
     * Set the alarm UID.
     * @param uid alarm UID to set
     */
    set_uid(uid: string | null): void
}

/**
 * Opaque structure, which represents an alarm occurrence, i.e. a instance instance.
 * Use the functions below to work with it.
 * @record 
 */
class ComponentAlarmInstance {

    // Own properties of ECal-2.0.ECal.ComponentAlarmInstance

    static name: string

    // Constructors of ECal-2.0.ECal.ComponentAlarmInstance

    /**
     * Creates a new #ECalComponentAlarmInstance structure, filled with the given values.
     * Free the instance with e_cal_component_alarm_instance_free(), when no longer needed.
     * @constructor 
     * @param uid UID of the alarm
     * @param instance_time instance time, i.e. "5 minutes before the appointment"
     * @param occur_start actual event occurrence start to which this instance corresponds
     * @param occur_end actual event occurrence end to which this instance corresponds
     * @returns a newly allocated #ECalComponentAlarmInstance
     */
    constructor(uid: string | null, instance_time: number, occur_start: number, occur_end: number) 
    /**
     * Creates a new #ECalComponentAlarmInstance structure, filled with the given values.
     * Free the instance with e_cal_component_alarm_instance_free(), when no longer needed.
     * @constructor 
     * @param uid UID of the alarm
     * @param instance_time instance time, i.e. "5 minutes before the appointment"
     * @param occur_start actual event occurrence start to which this instance corresponds
     * @param occur_end actual event occurrence end to which this instance corresponds
     * @returns a newly allocated #ECalComponentAlarmInstance
     */
    static new(uid: string | null, instance_time: number, occur_start: number, occur_end: number): ComponentAlarmInstance
}

interface ComponentAlarmRepeat {

    // Owm methods of ECal-2.0.ECal.ComponentAlarmRepeat

    copy(): ComponentAlarmRepeat
    /**
     * Returns the interval between repetitions of the `repeat,` as an #ICalDuration
     * object. This object is owned by `repeat` and should not be freed. It's valid until
     * the `repeat` is not freed or its interval changed with either e_cal_component_alarm_repeat_set_interval()
     * or e_cal_component_alarm_repeat_set_interval_seconds().
     * @returns the interval between repetitions of the @repeat
     */
    get_interval(): ICalGLib.Duration
    /**
     * Returns the interval between repetitions of the `repeat` in seconds.
     * @returns the interval between repetitions of the @repeat
     */
    get_interval_seconds(): number
    get_repetitions(): number
    /**
     * Set the `interval` between repetitions of the `repeat`.
     * @param interval interval between repetitions, as an #ICalDuration
     */
    set_interval(interval: ICalGLib.Duration): void
    /**
     * Set the `interval_seconds` between repetitions of the `repeat`.
     * @param interval_seconds interval between repetitions, in seconds
     */
    set_interval_seconds(interval_seconds: number): void
    /**
     * Set the `repetitions` count of the `repeat`.
     * @param repetitions number of repetitions, zero for none
     */
    set_repetitions(repetitions: number): void
}

/**
 * A structure holding whether and how an alarm repeats.
 * Use the functions below to work with it.
 * @record 
 */
class ComponentAlarmRepeat {

    // Own properties of ECal-2.0.ECal.ComponentAlarmRepeat

    static name: string

    // Constructors of ECal-2.0.ECal.ComponentAlarmRepeat

    /**
     * Creates a new #ECalComponentAlarmRepeat describing alarm repetitions.
     * The returned structure should be freed with e_cal_component_alarm_repeat_free(),
     * when no longer needed.
     * @constructor 
     * @param repetitions number of extra repetitions, zero for none
     * @param interval interval between repetitions
     * @returns a newly allocated #ECalComponentAlarmRepeat
     */
    constructor(repetitions: number, interval: ICalGLib.Duration) 
    /**
     * Creates a new #ECalComponentAlarmRepeat describing alarm repetitions.
     * The returned structure should be freed with e_cal_component_alarm_repeat_free(),
     * when no longer needed.
     * @constructor 
     * @param repetitions number of extra repetitions, zero for none
     * @param interval interval between repetitions
     * @returns a newly allocated #ECalComponentAlarmRepeat
     */
    static new(repetitions: number, interval: ICalGLib.Duration): ComponentAlarmRepeat
    /**
     * Creates a new #ECalComponentAlarmRepeat describing alarm repetitions.
     * The returned structure should be freed with e_cal_component_alarm_repeat_free(),
     * when no longer needed.
     * @constructor 
     * @param repetitions number of extra repetitions, zero for none
     * @param interval_seconds interval between repetitions, in seconds
     * @returns a newly allocated #ECalComponentAlarmRepeat
     */
    static new_seconds(repetitions: number, interval_seconds: number): ComponentAlarmRepeat
}

interface ComponentAlarmTrigger {

    // Owm methods of ECal-2.0.ECal.ComponentAlarmTrigger

    /**
     * Returns a newly allocated copy of `trigger,` which should be freed with
     * e_cal_component_alarm_trigger_free(), when no longer needed.
     * @returns a newly allocated copy of @trigger
     */
    copy(): ComponentAlarmTrigger
    /**
     * Fill `property` with information from `trigger`. The `property`
     * should be of kind %I_CAL_TRIGGER_PROPERTY.
     * @param property an #ICalProperty
     */
    fill_property(property: ICalGLib.Property): /* property */ ICalGLib.Property
    /**
     * Returns the `trigger` absolute time for an absolute trigger, or %NULL, when
     * the `trigger` is a relative trigger. The object is owned by `trigger` and it's
     * valid until the `trigger` is freed or its absolute time changed.
     * @returns the @trigger absolute time, as an #ICalTime, or %NULL
     */
    get_absolute_time(): ICalGLib.Time | null
    /**
     * Converts information stored in `trigger` into an #ICalProperty
     * of %I_CAL_TRIGGER_PROPERTY kind. The caller is responsible to free
     * the returned object with g_object_unref(), when no longer needed.
     * @returns a newly created #ICalProperty, containing    information from the @trigger.
     */
    get_as_property(): ICalGLib.Property
    /**
     * Returns the `trigger` duration for a relative `trigger,` or %NULL, when
     * the `trigger` is an absolute trigger.
     * @returns the @trigger duration, as an #ICalDuration, or %NULL
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
     * @param absolute_time the absolute time when to trigger the alarm, as an #ICalTime
     */
    set_absolute(absolute_time: ICalGLib.Time): void
    /**
     * Sets the `trigger` absolute time for an absolute trigger. The `absolute_time`
     * should be date/time (not date) in UTC.
     * 
     * The function does nothing, when the `trigger` is a relative trigger.
     * @param absolute_time absolute time for an absolute trigger, as an #ICalTime
     */
    set_absolute_time(absolute_time: ICalGLib.Time): void
    /**
     * Sets the `trigger` duration for a relative trigger. The function does nothing, when
     * the `trigger` is an absolute trigger. The object is owned by `trigger` and it's
     * valid until the `trigger` is freed or its relative duration changed.
     * @param duration duration for a relative trigger, as an #ICalDuration
     */
    set_duration(duration: ICalGLib.Duration): void
    /**
     * Fill the `trigger` structure with the information from
     * the `property,` which should be of %I_CAL_TRIGGER_PROPERTY kind.
     * @param property an #ICalProperty
     */
    set_from_property(property: ICalGLib.Property): void
    /**
     * Set the `trigger` kind to `kind`. This works only for other than
     * the %E_CAL_COMPONENT_ALARM_TRIGGER_ABSOLUTE. To change the kind
     * from absolute to relative, or vice versa, use either
     * e_cal_component_alarm_trigger_set_relative() or
     * e_cal_component_alarm_trigger_set_absolute().
     * @param kind the kind to set, one of #ECalComponentAlarmTriggerKind
     */
    set_kind(kind: ComponentAlarmTriggerKind): void
    /**
     * Set the `trigegr` with the given `kind` and `duration`. The `kind` can be any but
     * the %E_CAL_COMPONENT_ALARM_TRIGGER_ABSOLUTE.
     * To set an absolute trigger use e_cal_component_alarm_trigger_set_absolute().
     * @param kind an #ECalComponentAlarmTriggerKind, any but the %E_CAL_COMPONENT_ALARM_TRIGGER_ABSOLUTE
     * @param duration the duration relative to `kind,` as an #ICalDuration
     */
    set_relative(kind: ComponentAlarmTriggerKind, duration: ICalGLib.Duration): void
}

/**
 * Opaque structure, which represents when an alarm is supposed to be triggered.
 * Use the functions below to work with it.
 * @record 
 */
class ComponentAlarmTrigger {

    // Own properties of ECal-2.0.ECal.ComponentAlarmTrigger

    static name: string

    // Constructors of ECal-2.0.ECal.ComponentAlarmTrigger

    /**
     * Creates a new #ECalComponentAlarmTrigger structure, set with
     * the %E_CAL_COMPONENT_ALARM_TRIGGER_ABSOLUTE kind and the `absolute_time` as
     * the time of the trigger. The `absolute_time` should be date/time (not date) in UTC.
     * 
     * To create a relative trigger use e_cal_component_alarm_trigger_new_relative().
     * Free the trigger with e_cal_component_alarm_trigger_free(), when no longer needed.
     * @constructor 
     * @param absolute_time the absolute time when to trigger the alarm, as an #ICalTime
     * @returns a newly allocated #ECalComponentAlarmTrigger
     */
    static new_absolute(absolute_time: ICalGLib.Time): ComponentAlarmTrigger
    /**
     * Creates a new #ECalComponentAlarmTrigger, filled with values from `property,`
     * which should be of kind %I_CAL_TRIGGER_PROPERTY. The function returns
     * %NULL when it is not of the expected kind. Free the structure
     * with e_cal_component_alarm_trigger_free(), when no longer needed.
     * @constructor 
     * @param property an #ICalProperty of kind %I_CAL_TRIGGER_PROPERTY
     * @returns a newly allocated #ECalComponentAlarmTrigger
     */
    static new_from_property(property: ICalGLib.Property): ComponentAlarmTrigger
    /**
     * Creates a new #ECalComponentAlarmTrigger structure, set with the given `kind`
     * and `duration`. The `kind` can be any but the %E_CAL_COMPONENT_ALARM_TRIGGER_ABSOLUTE.
     * To create an absolute trigger use e_cal_component_alarm_trigger_new_absolute().
     * Free the trigger with e_cal_component_alarm_trigger_free(), when no longer needed.
     * @constructor 
     * @param kind an #ECalComponentAlarmTriggerKind, any but the %E_CAL_COMPONENT_ALARM_TRIGGER_ABSOLUTE
     * @param duration the duration relative to `kind,` as an #ICalDuration
     * @returns a newly allocated #ECalComponentAlarmTrigger
     */
    static new_relative(kind: ComponentAlarmTriggerKind, duration: ICalGLib.Duration): ComponentAlarmTrigger
}

interface ComponentAlarms {

    // Owm methods of ECal-2.0.ECal.ComponentAlarms

    /**
     * Add a copy of `instance` into the list of instances. It is added
     * in no particular order.
     * @param instance an #ECalComponentAlarmInstance
     */
    add_instance(instance: ComponentAlarmInstance): void
    /**
     * Returns a newly allocated copy of `alarms,` which should be freed with
     * e_cal_component_alarms_free(), when no longer needed.
     * @returns a newly allocated copy of @alarms
     */
    copy(): ComponentAlarms
    /**
     * The returned component is valid until the `alarms` is freed.
     * @returns an #ECalComponent associated with the @alarms structure
     */
    get_component(): Component
    /**
     * The returned #GSList is owned by `alarms` and should not be modified.
     * It's valid until the `alarms` is freed or the list of instances is not
     * modified by other functions. The items are of type #ECalComponentAlarmInstance.
     * @returns instances    of the @alarms structure; can be %NULL, when none had been added yet
     */
    get_instances(): ComponentAlarmInstance[] | null
    /**
     * Remove the `instance` from the list of instances. If found, the `instance`
     * is also freed.
     * @param instance an #ECalComponentAlarmInstance
     * @returns whether the @instance had been found and freed
     */
    remove_instance(instance: ComponentAlarmInstance): boolean
    /**
     * Modifies the list of instances to copy of the given `instances`.
     * @param instances #ECalComponentAlarmInstance objects to set
     */
    set_instances(instances: ComponentAlarmInstance[] | null): void
    /**
     * Add the `instance` into the list of instances and assume ownership of it.
     * It is added in no particular order.
     * @param instance an #ECalComponentAlarmInstance
     */
    take_instance(instance: ComponentAlarmInstance): void
    /**
     * Replaces the list of instances with the given `instances` and
     * assumes ownership of it. Neither the #GSList, nor its items, should
     * contain the same structures.
     * @param instances #ECalComponentAlarmInstance objects to take
     */
    take_instances(instances: ComponentAlarmInstance[] | null): void
}

/**
 * Opaque structure, which represents alarm trigger instances for a particular component.
 * Use the functions below to work with it.
 * @record 
 */
class ComponentAlarms {

    // Own properties of ECal-2.0.ECal.ComponentAlarms

    static name: string

    // Constructors of ECal-2.0.ECal.ComponentAlarms

    /**
     * Creates a new #ECalComponentAlarms structure, associated with `comp`.
     * Free the alarms with e_cal_component_alarms_free(), when no longer needed.
     * @constructor 
     * @param comp the actual alarm component, as #ECalComponent
     * @returns a newly allocated #ECalComponentAlarms
     */
    constructor(comp: Component) 
    /**
     * Creates a new #ECalComponentAlarms structure, associated with `comp`.
     * Free the alarms with e_cal_component_alarms_free(), when no longer needed.
     * @constructor 
     * @param comp the actual alarm component, as #ECalComponent
     * @returns a newly allocated #ECalComponentAlarms
     */
    static new(comp: Component): ComponentAlarms
}

interface ComponentAttendee {

    // Owm methods of ECal-2.0.ECal.ComponentAttendee

    /**
     * Returns a newly allocated copy of `attendee,` which should be freed with
     * e_cal_component_attendee_free(), when no longer needed.
     * @returns a newly allocated copy of @attendee
     */
    copy(): ComponentAttendee
    /**
     * Fill `property` with information from `attendee`. The `property`
     * should be of kind %I_CAL_ATTENDEE_PROPERTY.
     * @param property an #ICalProperty
     */
    fill_property(property: ICalGLib.Property): /* property */ ICalGLib.Property
    /**
     * Converts information stored in `attendee` into an #ICalProperty
     * of %I_CAL_ATTENDEE_PROPERTY kind. The caller is responsible to free
     * the returned object with g_object_unref(), when no longer needed.
     * @returns a newly created #ICalProperty, containing    information from the @attendee.
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
     * @param cn the value to set
     */
    set_cn(cn: string | null): void
    /**
     * Set the `attendee` type, as an #ICalParameterCutype.
     * @param cutype the value to set, as an #ICalParameterCutype
     */
    set_cutype(cutype: ICalGLib.ParameterCutype): void
    /**
     * Set the `attendee` delegatedfrom parameter. The %NULL
     * and empty strings are treated as unset the value.
     * @param delegatedfrom the value to set
     */
    set_delegatedfrom(delegatedfrom: string | null): void
    /**
     * Set the `attendee` delegatedto parameter. The %NULL
     * and empty strings are treated as unset the value.
     * @param delegatedto the value to set
     */
    set_delegatedto(delegatedto: string | null): void
    /**
     * Fill the `attendee` structure with the information from
     * the `property,` which should be of %I_CAL_ATTENDEE_PROPERTY kind.
     * @param property an #ICalProperty
     */
    set_from_property(property: ICalGLib.Property): void
    /**
     * Set the `attendee` language parameter. The %NULL
     * and empty strings are treated as unset the value.
     * @param language the value to set
     */
    set_language(language: string | null): void
    /**
     * Set the `attendee` member parameter. The %NULL
     * and empty strings are treated as unset the value.
     * @param member the value to set
     */
    set_member(member: string | null): void
    /**
     * Set the `attendee` status, as an #ICalParameterPartstat.
     * @param partstat the value to set, as an #ICalParameterPartstat
     */
    set_partstat(partstat: ICalGLib.ParameterPartstat): void
    /**
     * Set the `attendee` role, as an #ICalParameterRole.
     * @param role the value to set, as an #ICalParameterRole
     */
    set_role(role: ICalGLib.ParameterRole): void
    /**
     * Set the `attendee` RSVP.
     * @param rsvp the value to set
     */
    set_rsvp(rsvp: boolean): void
    /**
     * Set the `attendee` sentby parameter. The %NULL
     * and empty strings are treated as unset the value.
     * @param sentby the value to set
     */
    set_sentby(sentby: string | null): void
    /**
     * Set the `attendee` URI, usually of "mailto:email" form. The %NULL
     * and empty strings are treated as unset the value.
     * @param value the value to set
     */
    set_value(value: string | null): void
}

/**
 * Describes an attendee. Use the functions below to work with it.
 * @record 
 */
class ComponentAttendee {

    // Own properties of ECal-2.0.ECal.ComponentAttendee

    static name: string

    // Constructors of ECal-2.0.ECal.ComponentAttendee

    /**
     * Creates a new empty #ECalComponentAttendee structure. Free it
     * with e_cal_component_attendee_free(), when no longer needed.
     * @constructor 
     * @returns a newly allocated #ECalComponentAttendee
     */
    constructor() 
    /**
     * Creates a new empty #ECalComponentAttendee structure. Free it
     * with e_cal_component_attendee_free(), when no longer needed.
     * @constructor 
     * @returns a newly allocated #ECalComponentAttendee
     */
    static new(): ComponentAttendee
    /**
     * Creates a new #ECalComponentAttendee, filled with values from `property,`
     * which should be of kind %I_CAL_ATTENDEE_PROPERTY. The function returns
     * %NULL when it is not of the expected kind. Free the structure
     * with e_cal_component_attendee_free(), when no longer needed.
     * @constructor 
     * @param property an #ICalProperty of kind %I_CAL_ATTENDEE_PROPERTY
     * @returns a newly allocated #ECalComponentAttendee
     */
    static new_from_property(property: ICalGLib.Property): ComponentAttendee
    /**
     * Creates a new #ECalComponentAttendee structure, with all members filled
     * with given values from the parameters. The %NULL and empty strings are
     * treated as unset the value. Free the structure
     * with e_cal_component_attendee_free(), when no longer needed.
     * @constructor 
     * @param value usually a "mailto:email" of the attendee
     * @param member member parameter
     * @param cutype type of the attendee, an #ICalParameterCutype
     * @param role role of the attendee, an #ICalParameterRole
     * @param partstat current status of the attendee, an #ICalParameterPartstat
     * @param rsvp whether requires RSVP
     * @param delegatedfrom delegated from
     * @param delegatedto delegated to
     * @param sentby sent by
     * @param cn common name
     * @param language language
     * @returns a newly allocated #ECalComponentAttendee
     */
    static new_full(value: string | null, member: string | null, cutype: ICalGLib.ParameterCutype, role: ICalGLib.ParameterRole, partstat: ICalGLib.ParameterPartstat, rsvp: boolean, delegatedfrom: string | null, delegatedto: string | null, sentby: string | null, cn: string | null, language: string | null): ComponentAttendee
}

interface ComponentClass {
}

abstract class ComponentClass {

    // Own properties of ECal-2.0.ECal.ComponentClass

    static name: string
}

interface ComponentDateTime {

    // Owm methods of ECal-2.0.ECal.ComponentDateTime

    /**
     * Creates a new copy of `dt`. The returned structure should be freed
     * with e_cal_component_datetime_free() when no longer needed.
     * @returns a new #ECalComponentDateTime, copy of @dt
     */
    copy(): ComponentDateTime
    /**
     * Returns the TZID stored with the `dt`. The string is owned by `dt` and
     * it's valid until the `dt` is freed or its TZID overwritten. It never
     * returns an empty string, it returns either set TZID parameter value
     * or %NULL, when none is set.
     * @returns a TZID of @dt, or %NULL
     */
    get_tzid(): string | null
    /**
     * Returns the value stored with the `dt`. The object is owned by `dt` and
     * it's valid until the `dt` is freed or its value overwritten.
     * @returns a value of @dt, as an #ICalTime
     */
    get_value(): ICalGLib.Time
    /**
     * Sets both `value` and `tzid` in one call. Use e_cal_component_datetime_set_value()
     * and e_cal_component_datetime_set_tzid() to set them separately.
     * @param value an #ICalTime as a value
     * @param tzid timezone ID for the `value,` or %NULL
     */
    set(value: ICalGLib.Time, tzid: string | null): void
    /**
     * Sets the `tzid` of the `dt`. Any previously set TZID is freed.
     * An empty string or a %NULL as `tzid` is treated as none TZID.
     * @param tzid the TZID to set, or %NULL
     */
    set_tzid(tzid: string | null): void
    /**
     * Sets the `value` of the `dt`. Any previously set value is freed.
     * @param value the value to set, as an #ICalTime
     */
    set_value(value: ICalGLib.Time): void
    /**
     * Sets the `tzid` of the `dt` and assumes ownership of `tzid`. Any previously
     * set TZID is freed. An empty string or a %NULL as `tzid` is treated as none TZID.
     * @param tzid the TZID to take, or %NULL
     */
    take_tzid(tzid: string | null): void
    /**
     * Sets the `value` of the `dt` and assumes ownership of the `value`.
     * Any previously set value is freed.
     * @param value the value to take, as an #ICalTime
     */
    take_value(value: ICalGLib.Time): void
}

/**
 * An opaque structure containing an #ICalTime describing
 * the date/time value and also its TZID parameter. Use the functions
 * below to work with it.
 * @record 
 */
class ComponentDateTime {

    // Own properties of ECal-2.0.ECal.ComponentDateTime

    static name: string

    // Constructors of ECal-2.0.ECal.ComponentDateTime

    /**
     * Creates a new #ECalComponentDateTime instance, which holds
     * the `value` and `tzid`. The returned structure should be freed
     * with e_cal_component_datetime_free(), when no longer needed.
     * @constructor 
     * @param value an #ICalTime as a value
     * @param tzid timezone ID for the `value,` or %NULL
     * @returns a new #ECalComponentDateTime
     */
    constructor(value: ICalGLib.Time, tzid: string | null) 
    /**
     * Creates a new #ECalComponentDateTime instance, which holds
     * the `value` and `tzid`. The returned structure should be freed
     * with e_cal_component_datetime_free(), when no longer needed.
     * @constructor 
     * @param value an #ICalTime as a value
     * @param tzid timezone ID for the `value,` or %NULL
     * @returns a new #ECalComponentDateTime
     */
    static new(value: ICalGLib.Time, tzid: string | null): ComponentDateTime
    /**
     * Creates a new #ECalComponentDateTime instance, which holds
     * the `value` and `tzid`. It is similar to e_cal_component_datetime_new(),
     * except this function assumes ownership of the `value` and `tzid`.
     * The returned structure should be freed with e_cal_component_datetime_free(),
     * when no longer needed.
     * @constructor 
     * @param value an #ICalTime as a value
     * @param tzid timezone ID for the `value,` or %NULL
     * @returns a new #ECalComponentDateTime
     */
    static new_take(value: ICalGLib.Time, tzid: string | null): ComponentDateTime
}

interface ComponentId {

    // Owm methods of ECal-2.0.ECal.ComponentId

    /**
     * Returns a newly allocated copy of `id,` which should be freed with
     * e_cal_component_id_free().
     * @returns a newly allocated copy of @id
     */
    copy(): ComponentId
    /**
     * Compares two #ECalComponentId structs for equality.
     * @param id2 the second #ECalComponentId
     * @returns %TRUE if @id1 and @id2 are equal
     */
    equal(id2: ComponentId): boolean
    get_rid(): string | null
    get_uid(): string | null
    /**
     * Generates a hash value for `id`.
     * @returns a hash value for @id
     */
    hash(): number
    /**
     * Sets the RECURRENCE-ID part of the `id`. The `rid` can be %NULL
     * or an empty string, where both are treated as %NULL, which
     * means the `id` has not RECURRENCE-ID.
     * @param rid the RECURRENCE-ID to set
     */
    set_rid(rid: string | null): void
    /**
     * Sets the UID part of the `id`.
     * @param uid the UID to set
     */
    set_uid(uid: string | null): void
}

/**
 * An opaque structure containing UID of a component and
 * its recurrence ID (which can be %NULL). Use the functions
 * below to work with it.
 * @record 
 */
class ComponentId {

    // Own properties of ECal-2.0.ECal.ComponentId

    static name: string

    // Constructors of ECal-2.0.ECal.ComponentId

    /**
     * Creates a new #ECalComponentId from `uid` and `rid,` which should be
     * freed with e_cal_component_id_free().
     * @constructor 
     * @param uid a unique ID string
     * @param rid an optional recurrence ID string
     * @returns an #ECalComponentId
     */
    constructor(uid: string | null, rid: string | null) 
    /**
     * Creates a new #ECalComponentId from `uid` and `rid,` which should be
     * freed with e_cal_component_id_free().
     * @constructor 
     * @param uid a unique ID string
     * @param rid an optional recurrence ID string
     * @returns an #ECalComponentId
     */
    static new(uid: string | null, rid: string | null): ComponentId
    /**
     * Creates a new #ECalComponentId from `uid` and `rid,` which should be
     * freed with e_cal_component_id_free(). The function assumes ownership
     * of `uid` and `rid` parameters.
     * @constructor 
     * @param uid a unique ID string
     * @param rid an optional recurrence ID string
     * @returns an #ECalComponentId
     */
    static new_take(uid: string | null, rid: string | null): ComponentId
}

interface ComponentOrganizer {

    // Owm methods of ECal-2.0.ECal.ComponentOrganizer

    /**
     * Returns a newly allocated copy of `organizer,` which should be freed with
     * e_cal_component_organizer_free(), when no longer needed.
     * @returns a newly allocated copy of @organizer
     */
    copy(): ComponentOrganizer
    /**
     * Fill `property` with information from `organizer`. The `property`
     * should be of kind %I_CAL_ORGANIZER_PROPERTY.
     * @param property an #ICalProperty
     */
    fill_property(property: ICalGLib.Property): /* property */ ICalGLib.Property
    /**
     * Converts information stored in `organizer` into an #ICalProperty
     * of %I_CAL_ORGANIZER_PROPERTY kind. The caller is responsible to free
     * the returned object with g_object_unref(), when no longer needed.
     * @returns a newly created #ICalProperty, containing    information from the @organizer.
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
     * @param cn the value to set
     */
    set_cn(cn: string | null): void
    /**
     * Fill the `organizer` structure with the information from
     * the `property,` which should be of %I_CAL_ORGANIZER_PROPERTY kind.
     * @param property an #ICalProperty
     */
    set_from_property(property: ICalGLib.Property): void
    /**
     * Set the `organizer` language parameter. The %NULL
     * and empty strings are treated as unset the value.
     * @param language the value to set
     */
    set_language(language: string | null): void
    /**
     * Set the `organizer` sentby parameter. The %NULL
     * and empty strings are treated as unset the value.
     * @param sentby the value to set
     */
    set_sentby(sentby: string | null): void
    /**
     * Set the `organizer` URI, usually of "mailto:email" form. The %NULL
     * and empty strings are treated as unset the value.
     * @param value the value to set
     */
    set_value(value: string | null): void
}

/**
 * Describes an organizer. Use the functions below to work with it.
 * @record 
 */
class ComponentOrganizer {

    // Own properties of ECal-2.0.ECal.ComponentOrganizer

    static name: string

    // Constructors of ECal-2.0.ECal.ComponentOrganizer

    /**
     * Creates a new empty #ECalComponentOrganizer structure. Free it
     * with e_cal_component_organizer_free(), when no longer needed.
     * @constructor 
     * @returns a newly allocated #ECalComponentOrganizer
     */
    constructor() 
    /**
     * Creates a new empty #ECalComponentOrganizer structure. Free it
     * with e_cal_component_organizer_free(), when no longer needed.
     * @constructor 
     * @returns a newly allocated #ECalComponentOrganizer
     */
    static new(): ComponentOrganizer
    /**
     * Creates a new #ECalComponentOrganizer, filled with values from `property,`
     * which should be of kind %I_CAL_ORGANIZER_PROPERTY. The function returns
     * %NULL when it is not of the expected kind. Free the structure
     * with e_cal_component_organizer_free(), when no longer needed.
     * @constructor 
     * @param property an #ICalProperty of kind %I_CAL_ORGANIZER_PROPERTY
     * @returns a newly allocated #ECalComponentOrganizer
     */
    static new_from_property(property: ICalGLib.Property): ComponentOrganizer
    /**
     * Creates a new #ECalComponentOrganizer structure, with all members filled
     * with given values from the parameters. The %NULL and empty strings are
     * treated as unset the value. Free the structure
     * with e_cal_component_organizer_free(), when no longer needed.
     * @constructor 
     * @param value usually a "mailto:email" of the organizer
     * @param sentby sent by
     * @param cn common name
     * @param language language
     * @returns a newly allocated #ECalComponentOrganizer
     */
    static new_full(value: string | null, sentby: string | null, cn: string | null, language: string | null): ComponentOrganizer
}

interface ComponentParameterBag {

    // Owm methods of ECal-2.0.ECal.ComponentParameterBag

    /**
     * Adds a copy of the `param` into the `bag`.
     * @param param an #ICalParameter
     */
    add(param: ICalGLib.Parameter): void
    /**
     * Assigns content of the `src_bag` into the `bag`.
     * @param src_bag a source #ECalComponentParameterBag
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
     * @returns a newly allocated copy of @bag
     */
    copy(): ComponentParameterBag
    /**
     * Adds all the stored parameters in the `bag` to the `property`.
     * The function replaces any existing parameter with the new value,
     * if any such exists. Otherwise the parameter is added.
     * @param property an #ICalProperty
     */
    fill_property(property: ICalGLib.Property): void
    /**
     * Returns the #ICalParameter at the given `index`. If the `index` is
     * out of bounds (not lower than e_cal_component_parameter_bag_get_count()),
     * then %NULL is returned.
     * 
     * The returned parameter is owned by the `bag` and should not be freed
     * by the caller.
     * @param index an index of the parameter to get
     * @returns the #ICalParameter at the given @index,    or %NULL on error
     */
    get(index: number): ICalGLib.Parameter | null
    get_count(): number
    get_first_by_kind(kind: ICalGLib.ParameterKind): number
    /**
     * Removes the #ICalParameter at the given `index`. If the `index` is
     * out of bounds (not lower than e_cal_component_parameter_bag_get_count()),
     * then the function does nothing.
     * @param index an index of the parameter to remove
     */
    remove(index: number): void
    /**
     * Removes the first or all (depending on the `all)` parameters of the given `kind`.
     * @param kind an #ICalParameterKind to remove
     * @param all %TRUE to remove all parameters of the `kind,` or %FALSE to only the first
     * @returns how many parameters had been removed
     */
    remove_by_kind(kind: ICalGLib.ParameterKind, all: boolean): number
    /**
     * Fills the `bag` with parameters from the `property,` for which the `func`
     * returned %TRUE. When the `func` is %NULL, all the parameters are included.
     * The `bag` content is cleared before any parameter is added.
     * @param property an #ICalProperty containing the parameters to fill the `bag` with
     */
    set_from_property(property: ICalGLib.Property): void
    /**
     * Adds the `param` into the `bag` and assumes ownership of the `param`.
     * @param param an #ICalParameter
     */
    take(param: ICalGLib.Parameter): void
}

/**
 * Opaque structure, which represents a bad (list) of #ICalParameter objects.
 * Use the functions below to work with it.
 * @record 
 */
class ComponentParameterBag {

    // Own properties of ECal-2.0.ECal.ComponentParameterBag

    static name: string

    // Constructors of ECal-2.0.ECal.ComponentParameterBag

    /**
     * Creates a new #ECalComponentParameterBag. Free the structure
     * with e_cal_component_parameter_bag_free(), when no longer needed.
     * @constructor 
     * @returns a newly allocated #ECalComponentParameterBag
     */
    constructor() 
    /**
     * Creates a new #ECalComponentParameterBag. Free the structure
     * with e_cal_component_parameter_bag_free(), when no longer needed.
     * @constructor 
     * @returns a newly allocated #ECalComponentParameterBag
     */
    static new(): ComponentParameterBag
    /**
     * Creates a new #ECalComponentParameterBag, filled with parameters
     * from the `property,` for which the `func` returned %TRUE. When
     * the `func` is %NULL, all the parameters are included.
     * 
     * Free the structure with e_cal_component_parameter_bag_free(), when no longer needed.
     * @constructor 
     * @param property an #ICalProperty containing the parameters to fill the bag with
     * @returns a newly allocated #ECalComponentParameterBag
     */
    static new_from_property(property: ICalGLib.Property): ComponentParameterBag
}

interface ComponentPeriod {

    // Owm methods of ECal-2.0.ECal.ComponentPeriod

    copy(): ComponentPeriod
    /**
     * Returns the duration of the `period`. This can be called only on `period`
     * objects of kind %E_CAL_COMPONENT_PERIOD_DURATION.
     * The returned #ICalDuration object is owned by `period` and should not
     * be freed. It's valid until the `period` is freed or its duration changed.
     * @returns the duration of the period, as an #ICalDuration
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
     * @returns the end of the period, as an #ICalTime
     */
    get_end(): ICalGLib.Time | null
    /**
     * Returns kind of the `period,` one of #ECalComponentPeriodKind. Depending
     * on it either e_cal_component_period_get_end()/e_cal_component_period_set_end()
     * or e_cal_component_period_get_duration()/e_cal_component_period_set_duration()
     * can be used. The kind of an existing `period` canbe changed with
     * e_cal_component_period_set_datetime_full() and e_cal_component_period_set_duration_full().
     * @returns kind of the period, one of #ECalComponentPeriodKind
     */
    get_kind(): ComponentPeriodKind
    /**
     * Returns the start of the `period`. The returned #ICalTime object
     * is owned by `period` and should not be freed. It's valid until the `period`
     * is freed or its start time changed.
     * @returns the start of the @period, as an #ICalTime
     */
    get_start(): ICalGLib.Time
    /**
     * Set the kind of `period` to be %E_CAL_COMPONENT_PERIOD_DATETIME
     * and fills the content with `start` and `end`.
     * @param start an #ICalTime, the start of the `period`
     * @param end an #ICalTime, the end of the `period`
     */
    set_datetime_full(start: ICalGLib.Time, end: ICalGLib.Time | null): void
    /**
     * Set the duration of the `period`. This can be called only on `period`
     * objects of kind %E_CAL_COMPONENT_PERIOD_DURATION.
     * @param duration an #ICalDuration, the duration of the `period`
     */
    set_duration(duration: ICalGLib.Duration): void
    /**
     * Set the kind of `period` to be %E_CAL_COMPONENT_PERIOD_DURATION
     * and fills the content with `start` and `duration`.
     * @param start an #ICalTime, the start of the `period`
     * @param duration an #ICalDuration, the duration of the `period`
     */
    set_duration_full(start: ICalGLib.Time, duration: ICalGLib.Duration): void
    /**
     * Set the end of the `period`. This can be called only on `period`
     * objects of kind %E_CAL_COMPONENT_PERIOD_DATETIME.
     * @param end an #ICalTime, the end of the `period`
     */
    set_end(end: ICalGLib.Time | null): void
    /**
     * Set the `start` of the `period`. This can be called on any kind of the `period`.
     * @param start an #ICalTime, the start of the `period`
     */
    set_start(start: ICalGLib.Time): void
}

/**
 * Period of time, can have explicit start/end times or start/duration instead.
 * Use the functions below to work with it.
 * @record 
 */
class ComponentPeriod {

    // Own properties of ECal-2.0.ECal.ComponentPeriod

    static name: string

    // Constructors of ECal-2.0.ECal.ComponentPeriod

    /**
     * Creates a new #ECalComponentPeriod of kind %E_CAL_COMPONENT_PERIOD_DATETIME.
     * The returned structure should be freed with e_cal_component_period_free(),
     * when no longer needed.
     * @constructor 
     * @param start an #ICalTime, the start of the period
     * @param end an #ICalTime, the end of the period
     * @returns a newly allocated #ECalComponentPeriod
     */
    static new_datetime(start: ICalGLib.Time, end: ICalGLib.Time | null): ComponentPeriod
    /**
     * Creates a new #ECalComponentPeriod of kind %E_CAL_COMPONENT_PERIOD_DURATION.
     * The returned structure should be freed with e_cal_component_period_free(),
     * when no longer needed.
     * @constructor 
     * @param start an #ICalTime, the start of the period
     * @param duration an #ICalDuration, the duration of the period
     * @returns a newly allocated #ECalComponentPeriod
     */
    static new_duration(start: ICalGLib.Time, duration: ICalGLib.Duration): ComponentPeriod
}

interface ComponentPrivate {
}

class ComponentPrivate {

    // Own properties of ECal-2.0.ECal.ComponentPrivate

    static name: string
}

interface ComponentPropertyBag {

    // Owm methods of ECal-2.0.ECal.ComponentPropertyBag

    /**
     * Adds a copy of the `prop` into the `bag`.
     * @param prop an #ICalProperty
     */
    add(prop: ICalGLib.Property): void
    /**
     * Assigns content of the `src_bag` into the `bag`.
     * @param src_bag a source #ECalComponentPropertyBag
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
     * @returns a newly allocated copy of @bag
     */
    copy(): ComponentPropertyBag
    /**
     * Adds all the stored properties in the `bag` to the `component`.
     * The function doesn't verify whether the `component` contains
     * the same property already.
     * @param component an #ICalComponent
     */
    fill_component(component: ICalGLib.Component): void
    /**
     * Returns the #ICalProperty at the given `index`. If the `index` is
     * out of bounds (not lower than e_cal_component_property_bag_get_count()),
     * then %NULL is returned.
     * 
     * The returned property is owned by the `bag` and should not be freed
     * by the caller.
     * @param index an index of the property to get
     * @returns the #ICalProperty at the given @index,    or %NULL on error
     */
    get(index: number): ICalGLib.Property | null
    get_count(): number
    get_first_by_kind(kind: ICalGLib.PropertyKind): number
    /**
     * Removes the #ICalProperty at the given `index`. If the `index` is
     * out of bounds (not lower than e_cal_component_property_bag_get_count()),
     * then the function does nothing.
     * @param index an index of the property to remove
     */
    remove(index: number): void
    /**
     * Removes the first or all (depending on the `all)` properties of the given `kind`.
     * @param kind an #ICalPropertyKind to remove
     * @param all %TRUE to remove all properties of the `kind,` or %FALSE to only the first
     * @returns how many properties had been removed
     */
    remove_by_kind(kind: ICalGLib.PropertyKind, all: boolean): number
    /**
     * Fills the `bag` with properties from the `component,` for which the `func`
     * returned %TRUE. When the `func` is %NULL, all the properties are included.
     * The `bag` content is cleared before any property is added.
     * @param component an #ICalComponent containing the properties to fill the `bag` with
     */
    set_from_component(component: ICalGLib.Component): void
    /**
     * Adds the `prop` into the `bag` and assumes ownership of the `prop`.
     * @param prop an #ICalProperty
     */
    take(prop: ICalGLib.Property): void
}

/**
 * Opaque structure, which represents a bad (list) of #ICalProperty objects.
 * Use the functions below to work with it.
 * @record 
 */
class ComponentPropertyBag {

    // Own properties of ECal-2.0.ECal.ComponentPropertyBag

    static name: string

    // Constructors of ECal-2.0.ECal.ComponentPropertyBag

    /**
     * Creates a new #ECalComponentPropertyBag. Free the structure
     * with e_cal_component_property_bag_free(), when no longer needed.
     * @constructor 
     * @returns a newly allocated #ECalComponentPropertyBag
     */
    constructor() 
    /**
     * Creates a new #ECalComponentPropertyBag. Free the structure
     * with e_cal_component_property_bag_free(), when no longer needed.
     * @constructor 
     * @returns a newly allocated #ECalComponentPropertyBag
     */
    static new(): ComponentPropertyBag
    /**
     * Creates a new #ECalComponentPropertyBag, filled with properties
     * from the `component,` for which the `func` returned %TRUE. When
     * the `func` is %NULL, all the properties are included.
     * 
     * Free the structure with e_cal_component_property_bag_free(), when no longer needed.
     * @constructor 
     * @param component an #ICalComponent containing the properties to fill the bag with
     * @returns a newly allocated #ECalComponentPropertyBag
     */
    static new_from_component(component: ICalGLib.Component): ComponentPropertyBag
}

interface ComponentRange {

    // Owm methods of ECal-2.0.ECal.ComponentRange

    copy(): ComponentRange
    /**
     * Returns the date/time of the `range`. The returned #ECalComponentDateTime
     * is owned by `range` and should not be freed. It's valid until the `range`
     * is freed or its date/time changed.
     * @returns the date/time of the @range, as an #ECalComponentDateTime
     */
    get_datetime(): ComponentDateTime
    get_kind(): ComponentRangeKind
    /**
     * Set the date/time part of the `range`.
     * @param datetime an #ECalComponentDateTime
     */
    set_datetime(datetime: ComponentDateTime): void
    /**
     * Set the `kind` of the `range`.
     * @param kind an #ECalComponentRangeKind
     */
    set_kind(kind: ComponentRangeKind): void
}

/**
 * Describes a range. Use the functions below to work with it.
 * @record 
 */
class ComponentRange {

    // Own properties of ECal-2.0.ECal.ComponentRange

    static name: string

    // Constructors of ECal-2.0.ECal.ComponentRange

    /**
     * Creates a new #ECalComponentRange describing a range.
     * The returned structure should be freed with e_cal_component_range_free(),
     * when no longer needed.
     * @constructor 
     * @param kind an #ECalComponentRangeKind
     * @param datetime an #ECalComponentDateTime
     * @returns a newly allocated #ECalComponentRange
     */
    constructor(kind: ComponentRangeKind, datetime: ComponentDateTime) 
    /**
     * Creates a new #ECalComponentRange describing a range.
     * The returned structure should be freed with e_cal_component_range_free(),
     * when no longer needed.
     * @constructor 
     * @param kind an #ECalComponentRangeKind
     * @param datetime an #ECalComponentDateTime
     * @returns a newly allocated #ECalComponentRange
     */
    static new(kind: ComponentRangeKind, datetime: ComponentDateTime): ComponentRange
}

interface ComponentText {

    // Owm methods of ECal-2.0.ECal.ComponentText

    copy(): ComponentText
    /**
     * Fills the `property` with the content of the `text`.
     * @param property an #ICalProperty
     */
    fill_property(property: ICalGLib.Property): void
    get_altrep(): string | null
    get_language(): string | null
    get_value(): string | null
    /**
     * Set the `altrep` as the alternate representation URI of the `text`.
     * @param altrep alternate representation URI to set
     */
    set_altrep(altrep: string | null): void
    /**
     * Fill the `text` structure with the information from the `property`.
     * The `property` should hold a text value.
     * @param property an #ICalProperty
     */
    set_from_property(property: ICalGLib.Property): void
    /**
     * Set the `language` as the language of the `text`. The language tag
     * is defined in RFC 5646. For example `en-US`, not `en_US`.
     * @param language language of the `text`
     */
    set_language(language: string | null): void
    /**
     * Set the `value` as the description string of the `text`.
     * @param value description string to set
     */
    set_value(value: string | null): void
}

/**
 * Contains description string and an alternate representation URI
 * for text properties. Use the functions below to work with it.
 * @record 
 */
class ComponentText {

    // Own properties of ECal-2.0.ECal.ComponentText

    static name: string

    // Constructors of ECal-2.0.ECal.ComponentText

    /**
     * Creates a new #ECalComponentText describing text properties.
     * The returned structure should be freed with e_cal_component_text_free(),
     * when no longer needed.
     * @constructor 
     * @param value description text
     * @param altrep alternate representation URI
     * @returns a newly allocated #ECalComponentText
     */
    constructor(value: string | null, altrep: string | null) 
    /**
     * Creates a new #ECalComponentText describing text properties.
     * The returned structure should be freed with e_cal_component_text_free(),
     * when no longer needed.
     * @constructor 
     * @param value description text
     * @param altrep alternate representation URI
     * @returns a newly allocated #ECalComponentText
     */
    static new(value: string | null, altrep: string | null): ComponentText
    /**
     * Created a new #ECalComponentText filled with values from the `property`.
     * The `property` should hold a text value.
     * @constructor 
     * @param property an #ICalProperty
     * @returns a newly allocated #ECalComponentText
     */
    static new_from_property(property: ICalGLib.Property): ComponentText
}

interface ReminderData {

    // Owm methods of ECal-2.0.ECal.ReminderData

    /**
     * Copies given #EReminderData structure. When the `rd` is %NULL, simply returns %NULL as well.
     * @returns copy of @rd. Free the returned    structure with e_reminder_data_free() when no longer needed.
     */
    copy(): ReminderData | null
    /**
     * Frees previously allocated #EReminderData structure with e_reminder_data_new()
     * or e_reminder_data_copy(). The function does nothing when `rd` is %NULL.
     */
    free(): void
    get_component(): Component
    get_instance(): ComponentAlarmInstance
    get_source_uid(): string | null
    /**
     * Set an #ECalComponent `component` as associated with this `rd`.
     * The `rd` creates a copy of the `component`.
     * @param component an #ECalComponent
     */
    set_component(component: Component): void
    /**
     * Set an #ECalComponentAlarmInstance `instance` as associated with this `rd`.
     * The `rd` creates a copy of the `instance`.
     * @param instance an #ECalComponentAlarmInstance
     */
    set_instance(instance: ComponentAlarmInstance): void
    /**
     * Set an #ESource UID for `rd`.
     * @param source_uid an #ESource UID
     */
    set_source_uid(source_uid: string | null): void
}

/**
 * Contains data related to single reminder occurrence.
 * @record 
 */
class ReminderData {

    // Own properties of ECal-2.0.ECal.ReminderData

    static name: string

    // Constructors of ECal-2.0.ECal.ReminderData

    constructor(source_uid: string | null, component: Component, instance: ComponentAlarmInstance) 
    static new(source_uid: string | null, component: Component, instance: ComponentAlarmInstance): ReminderData
}

interface ReminderWatcherClass {

    // Own fields of ECal-2.0.ECal.ReminderWatcherClass

    parent_class: GObject.ObjectClass
    schedule_timer: (watcher: ReminderWatcher, at_time: number) => void
    format_time: (watcher: ReminderWatcher, rd: ReminderData, itt: ICalGLib.Time, inout_buffer: string | null, buffer_size: number) => void
    changed: (watcher: ReminderWatcher) => void
    cal_client_connect: (watcher: ReminderWatcher, source: EDataServer.Source, source_type: ClientSourceType, wait_for_connected_seconds: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null) => void
    reserved: any[]
}

abstract class ReminderWatcherClass {

    // Own properties of ECal-2.0.ECal.ReminderWatcherClass

    static name: string
}

interface ReminderWatcherPrivate {
}

class ReminderWatcherPrivate {

    // Own properties of ECal-2.0.ECal.ReminderWatcherPrivate

    static name: string
}

interface TimezoneCacheInterface {

    // Own fields of ECal-2.0.ECal.TimezoneCacheInterface

    tzcache_add_timezone: (cache: TimezoneCache, zone: ICalGLib.Timezone) => void
    timezone_added: (cache: TimezoneCache, zone: ICalGLib.Timezone) => void
    reserved_signals: any[]
}

abstract class TimezoneCacheInterface {

    // Own properties of ECal-2.0.ECal.TimezoneCacheInterface

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

export default ECal;
// END