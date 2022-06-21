// @ts-nocheck

/*
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/sammydre/ts-for-gjs
 */
/**
 * ICalGLib-3.0
 */

import type * as Gjs from './Gjs';
import type GObject from './GObject-2.0';
import type GLib from './GLib-2.0';

export namespace ICalGLib {

enum ComponentKind {
    NO_COMPONENT,
    ANY_COMPONENT,
    XROOT_COMPONENT,
    XATTACH_COMPONENT,
    VEVENT_COMPONENT,
    VTODO_COMPONENT,
    VJOURNAL_COMPONENT,
    VCALENDAR_COMPONENT,
    VAGENDA_COMPONENT,
    VFREEBUSY_COMPONENT,
    VALARM_COMPONENT,
    XAUDIOALARM_COMPONENT,
    XDISPLAYALARM_COMPONENT,
    XEMAILALARM_COMPONENT,
    XPROCEDUREALARM_COMPONENT,
    VTIMEZONE_COMPONENT,
    XSTANDARD_COMPONENT,
    XDAYLIGHT_COMPONENT,
    X_COMPONENT,
    VSCHEDULE_COMPONENT,
    VQUERY_COMPONENT,
    VREPLY_COMPONENT,
    VCAR_COMPONENT,
    VCOMMAND_COMPONENT,
    XLICINVALID_COMPONENT,
    XLICMIMEPART_COMPONENT,
    VAVAILABILITY_COMPONENT,
    XAVAILABLE_COMPONENT,
    VPOLL_COMPONENT,
    VVOTER_COMPONENT,
    XVOTE_COMPONENT,
}
enum ErrorEnum {
    NO_ERROR,
    BADARG_ERROR,
    NEWFAILED_ERROR,
    ALLOCATION_ERROR,
    MALFORMEDDATA_ERROR,
    PARSE_ERROR,
    INTERNAL_ERROR,
    FILE_ERROR,
    USAGE_ERROR,
    UNIMPLEMENTED_ERROR,
    UNKNOWN_ERROR,
}
enum ErrorState {
    FATAL,
    NONFATAL,
    DEFAULT,
    UNKNOWN,
}
enum ParameterAction {
    X,
    ASK,
    ABORT,
    NONE,
}
enum ParameterCutype {
    X,
    INDIVIDUAL,
    GROUP,
    RESOURCE,
    ROOM,
    UNKNOWN,
    NONE,
}
enum ParameterEnable {
    X,
    TRUE,
    FALSE,
    NONE,
}
enum ParameterEncoding {
    X,
    TODO_8BIT,
    BASE64,
    NONE,
}
enum ParameterFbtype {
    X,
    FREE,
    BUSY,
    BUSYUNAVAILABLE,
    BUSYTENTATIVE,
    NONE,
}
enum ParameterKind {
    ANY_PARAMETER,
    ACTIONPARAM_PARAMETER,
    ALTREP_PARAMETER,
    CHARSET_PARAMETER,
    CN_PARAMETER,
    CUTYPE_PARAMETER,
    DELEGATEDFROM_PARAMETER,
    DELEGATEDTO_PARAMETER,
    DIR_PARAMETER,
    ENABLE_PARAMETER,
    ENCODING_PARAMETER,
    FBTYPE_PARAMETER,
    FILENAME_PARAMETER,
    FMTTYPE_PARAMETER,
    IANA_PARAMETER,
    ID_PARAMETER,
    LANGUAGE_PARAMETER,
    LATENCY_PARAMETER,
    LOCAL_PARAMETER,
    LOCALIZE_PARAMETER,
    MANAGEDID_PARAMETER,
    MEMBER_PARAMETER,
    MODIFIED_PARAMETER,
    OPTIONS_PARAMETER,
    PARTSTAT_PARAMETER,
    PUBLICCOMMENT_PARAMETER,
    RANGE_PARAMETER,
    REASON_PARAMETER,
    RELATED_PARAMETER,
    RELTYPE_PARAMETER,
    REQUIRED_PARAMETER,
    RESPONSE_PARAMETER,
    ROLE_PARAMETER,
    RSVP_PARAMETER,
    SCHEDULEAGENT_PARAMETER,
    SCHEDULEFORCESEND_PARAMETER,
    SCHEDULESTATUS_PARAMETER,
    SENTBY_PARAMETER,
    SIZE_PARAMETER,
    STAYINFORMED_PARAMETER,
    SUBSTATE_PARAMETER,
    TZID_PARAMETER,
    VALUE_PARAMETER,
    X_PARAMETER,
    XLICCOMPARETYPE_PARAMETER,
    XLICERRORTYPE_PARAMETER,
    NO_PARAMETER,
}
enum ParameterLocal {
    X,
    TRUE,
    FALSE,
    NONE,
}
enum ParameterPartstat {
    X,
    NEEDSACTION,
    ACCEPTED,
    DECLINED,
    TENTATIVE,
    DELEGATED,
    COMPLETED,
    INPROCESS,
    FAILED,
    NONE,
}
enum ParameterRange {
    X,
    THISANDPRIOR,
    THISANDFUTURE,
    NONE,
}
enum ParameterRelated {
    X,
    START,
    END,
    NONE,
}
enum ParameterReltype {
    X,
    PARENT,
    CHILD,
    SIBLING,
    POLL,
    NONE,
}
enum ParameterRequired {
    X,
    TRUE,
    FALSE,
    NONE,
}
enum ParameterRole {
    X,
    CHAIR,
    REQPARTICIPANT,
    OPTPARTICIPANT,
    NONPARTICIPANT,
    NONE,
}
enum ParameterRsvp {
    X,
    TRUE,
    FALSE,
    NONE,
}
enum ParameterScheduleagent {
    X,
    SERVER,
    CLIENT,
    NONE,
}
enum ParameterScheduleforcesend {
    X,
    REQUEST,
    REPLY,
    NONE,
}
enum ParameterStayinformed {
    X,
    TRUE,
    FALSE,
    NONE,
}
enum ParameterSubstate {
    X,
    OK,
    ERROR,
    SUSPENDED,
    NONE,
}
enum ParameterValue {
    X,
    BINARY,
    BOOLEAN,
    DATE,
    DURATION,
    FLOAT,
    INTEGER,
    PERIOD,
    RECUR,
    TEXT,
    URI,
    ERROR,
    DATETIME,
    UTCOFFSET,
    CALADDRESS,
    NONE,
}
enum ParameterXliccomparetype {
    X,
    EQUAL,
    NOTEQUAL,
    LESS,
    GREATER,
    LESSEQUAL,
    GREATEREQUAL,
    REGEX,
    ISNULL,
    ISNOTNULL,
    NONE,
}
enum ParameterXlicerrortype {
    X,
    COMPONENTPARSEERROR,
    PROPERTYPARSEERROR,
    PARAMETERNAMEPARSEERROR,
    PARAMETERVALUEPARSEERROR,
    VALUEPARSEERROR,
    INVALIDITIP,
    UNKNOWNVCALPROPERROR,
    MIMEPARSEERROR,
    VCALPROPPARSEERROR,
    NONE,
}
enum ParserState {
    ERROR,
    SUCCESS,
    BEGIN_COMP,
    END_COMP,
    IN_PROGRESS,
}
enum PropertyAction {
    X,
    AUDIO,
    DISPLAY,
    EMAIL,
    PROCEDURE,
    NONE,
}
enum PropertyBusytype {
    X,
    BUSY,
    BUSYUNAVAILABLE,
    BUSYTENTATIVE,
    NONE,
}
enum PropertyCarlevel {
    X,
    CARNONE,
    CARMIN,
    CARFULL1,
    NONE,
}
enum PropertyCmd {
    X,
    ABORT,
    CONTINUE,
    CREATE,
    DELETE,
    GENERATEUID,
    GETCAPABILITY,
    IDENTIFY,
    MODIFY,
    MOVE,
    REPLY,
    SEARCH,
    SETLOCALE,
    NONE,
}
enum PropertyKind {
    ANY_PROPERTY,
    ACCEPTRESPONSE_PROPERTY,
    ACKNOWLEDGED_PROPERTY,
    ACTION_PROPERTY,
    ALLOWCONFLICT_PROPERTY,
    ATTACH_PROPERTY,
    ATTENDEE_PROPERTY,
    BUSYTYPE_PROPERTY,
    CALID_PROPERTY,
    CALMASTER_PROPERTY,
    CALSCALE_PROPERTY,
    CAPVERSION_PROPERTY,
    CARLEVEL_PROPERTY,
    CARID_PROPERTY,
    CATEGORIES_PROPERTY,
    CLASS_PROPERTY,
    CMD_PROPERTY,
    COLOR_PROPERTY,
    COMMENT_PROPERTY,
    COMPLETED_PROPERTY,
    COMPONENTS_PROPERTY,
    CONTACT_PROPERTY,
    CREATED_PROPERTY,
    CSID_PROPERTY,
    DATEMAX_PROPERTY,
    DATEMIN_PROPERTY,
    DECREED_PROPERTY,
    DEFAULTCHARSET_PROPERTY,
    DEFAULTLOCALE_PROPERTY,
    DEFAULTTZID_PROPERTY,
    DEFAULTVCARS_PROPERTY,
    DENY_PROPERTY,
    DESCRIPTION_PROPERTY,
    DTEND_PROPERTY,
    DTSTAMP_PROPERTY,
    DTSTART_PROPERTY,
    DUE_PROPERTY,
    DURATION_PROPERTY,
    ESTIMATEDDURATION_PROPERTY,
    EXDATE_PROPERTY,
    EXPAND_PROPERTY,
    EXRULE_PROPERTY,
    FREEBUSY_PROPERTY,
    GEO_PROPERTY,
    GRANT_PROPERTY,
    ITIPVERSION_PROPERTY,
    LASTMODIFIED_PROPERTY,
    LOCATION_PROPERTY,
    MAXCOMPONENTSIZE_PROPERTY,
    MAXDATE_PROPERTY,
    MAXRESULTS_PROPERTY,
    MAXRESULTSSIZE_PROPERTY,
    METHOD_PROPERTY,
    MINDATE_PROPERTY,
    MULTIPART_PROPERTY,
    NAME_PROPERTY,
    ORGANIZER_PROPERTY,
    OWNER_PROPERTY,
    PERCENTCOMPLETE_PROPERTY,
    PERMISSION_PROPERTY,
    POLLCOMPLETION_PROPERTY,
    POLLITEMID_PROPERTY,
    POLLMODE_PROPERTY,
    POLLPROPERTIES_PROPERTY,
    POLLWINNER_PROPERTY,
    PRIORITY_PROPERTY,
    PRODID_PROPERTY,
    QUERY_PROPERTY,
    QUERYLEVEL_PROPERTY,
    QUERYID_PROPERTY,
    QUERYNAME_PROPERTY,
    RDATE_PROPERTY,
    RECURACCEPTED_PROPERTY,
    RECUREXPAND_PROPERTY,
    RECURLIMIT_PROPERTY,
    RECURRENCEID_PROPERTY,
    RELATEDTO_PROPERTY,
    RELCALID_PROPERTY,
    REPEAT_PROPERTY,
    REPLYURL_PROPERTY,
    REQUESTSTATUS_PROPERTY,
    RESOURCES_PROPERTY,
    RESPONSE_PROPERTY,
    RESTRICTION_PROPERTY,
    RRULE_PROPERTY,
    SCOPE_PROPERTY,
    SEQUENCE_PROPERTY,
    STATUS_PROPERTY,
    STORESEXPANDED_PROPERTY,
    SUMMARY_PROPERTY,
    TARGET_PROPERTY,
    TASKMODE_PROPERTY,
    TRANSP_PROPERTY,
    TRIGGER_PROPERTY,
    TZID_PROPERTY,
    TZIDALIASOF_PROPERTY,
    TZNAME_PROPERTY,
    TZOFFSETFROM_PROPERTY,
    TZOFFSETTO_PROPERTY,
    TZUNTIL_PROPERTY,
    TZURL_PROPERTY,
    UID_PROPERTY,
    URL_PROPERTY,
    VERSION_PROPERTY,
    VOTER_PROPERTY,
    X_PROPERTY,
    XLICCLASS_PROPERTY,
    XLICCLUSTERCOUNT_PROPERTY,
    XLICERROR_PROPERTY,
    XLICMIMECHARSET_PROPERTY,
    XLICMIMECID_PROPERTY,
    XLICMIMECONTENTTYPE_PROPERTY,
    XLICMIMEENCODING_PROPERTY,
    XLICMIMEFILENAME_PROPERTY,
    XLICMIMEOPTINFO_PROPERTY,
    NO_PROPERTY,
}
enum PropertyMethod {
    X,
    PUBLISH,
    REQUEST,
    REPLY,
    ADD,
    CANCEL,
    REFRESH,
    COUNTER,
    DECLINECOUNTER,
    CREATE,
    READ,
    RESPONSE,
    MOVE,
    MODIFY,
    GENERATEUID,
    DELETE,
    NONE,
}
enum PropertyPollcompletion {
    X,
    SERVER,
    SERVERSUBMIT,
    SERVERCHOICE,
    CLIENT,
    NONE,
}
enum PropertyPollmode {
    X,
    BASIC,
    NONE,
}
enum PropertyQuerylevel {
    X,
    CALQL1,
    CALQLNONE,
    NONE,
}
enum PropertyStatus {
    X,
    TENTATIVE,
    CONFIRMED,
    COMPLETED,
    NEEDSACTION,
    CANCELLED,
    INPROCESS,
    DRAFT,
    FINAL,
    SUBMITTED,
    PENDING,
    FAILED,
    DELETED,
    NONE,
}
enum PropertyTaskmode {
    X,
    AUTOMATICCOMPLETION,
    AUTOMATICFAILURE,
    AUTOMATICSTATUS,
    NONE,
}
enum PropertyTransp {
    X,
    OPAQUE,
    OPAQUENOCONFLICT,
    TRANSPARENT,
    TRANSPARENTNOCONFLICT,
    NONE,
}
enum PropertyXlicclass {
    X,
    PUBLISHNEW,
    PUBLISHUPDATE,
    PUBLISHFREEBUSY,
    REQUESTNEW,
    REQUESTUPDATE,
    REQUESTRESCHEDULE,
    REQUESTDELEGATE,
    REQUESTNEWORGANIZER,
    REQUESTFORWARD,
    REQUESTSTATUS,
    REQUESTFREEBUSY,
    REPLYACCEPT,
    REPLYDECLINE,
    REPLYDELEGATE,
    REPLYCRASHERACCEPT,
    REPLYCRASHERDECLINE,
    ADDINSTANCE,
    CANCELEVENT,
    CANCELINSTANCE,
    CANCELALL,
    REFRESH,
    COUNTER,
    DECLINECOUNTER,
    MALFORMED,
    OBSOLETE,
    MISSEQUENCED,
    UNKNOWN,
    NONE,
}
enum Property_Class {
    X,
    PUBLIC,
    PRIVATE,
    CONFIDENTIAL,
    NONE,
}
enum RecurrenceArrayMaxValues {
    RECURRENCE_ARRAY_MAX,
}
enum RecurrenceArraySizes {
    SECOND_SIZE,
    MINUTE_SIZE,
    HOUR_SIZE,
    MONTH_SIZE,
    MONTHDAY_SIZE,
    WEEKNO_SIZE,
    YEARDAY_SIZE,
    SETPOS_SIZE,
    DAY_SIZE,
}
enum RecurrenceFrequency {
    SECONDLY_RECURRENCE,
    MINUTELY_RECURRENCE,
    HOURLY_RECURRENCE,
    DAILY_RECURRENCE,
    WEEKLY_RECURRENCE,
    MONTHLY_RECURRENCE,
    YEARLY_RECURRENCE,
    NO_RECURRENCE,
}
enum RecurrenceSkip {
    BACKWARD,
    FORWARD,
    OMIT,
    UNDEFINED,
}
enum RecurrenceWeekday {
    NO_WEEKDAY,
    SUNDAY_WEEKDAY,
    MONDAY_WEEKDAY,
    TUESDAY_WEEKDAY,
    WEDNESDAY_WEEKDAY,
    THURSDAY_WEEKDAY,
    FRIDAY_WEEKDAY,
    SATURDAY_WEEKDAY,
}
enum RequestStatus {
    UNKNOWN_STATUS,
    TODO_2_0_SUCCESS_STATUS,
    TODO_2_1_FALLBACK_STATUS,
    TODO_2_2_IGPROP_STATUS,
    TODO_2_3_IGPARAM_STATUS,
    TODO_2_4_IGXPROP_STATUS,
    TODO_2_5_IGXPARAM_STATUS,
    TODO_2_6_IGCOMP_STATUS,
    TODO_2_7_FORWARD_STATUS,
    TODO_2_8_ONEEVENT_STATUS,
    TODO_2_9_TRUNC_STATUS,
    TODO_2_10_ONETODO_STATUS,
    TODO_2_11_TRUNCRRULE_STATUS,
    TODO_3_0_INVPROPNAME_STATUS,
    TODO_3_1_INVPROPVAL_STATUS,
    TODO_3_2_INVPARAM_STATUS,
    TODO_3_3_INVPARAMVAL_STATUS,
    TODO_3_4_INVCOMP_STATUS,
    TODO_3_5_INVTIME_STATUS,
    TODO_3_6_INVRULE_STATUS,
    TODO_3_7_INVCU_STATUS,
    TODO_3_8_NOAUTH_STATUS,
    TODO_3_9_BADVERSION_STATUS,
    TODO_3_10_TOOBIG_STATUS,
    TODO_3_11_MISSREQCOMP_STATUS,
    TODO_3_12_UNKCOMP_STATUS,
    TODO_3_13_BADCOMP_STATUS,
    TODO_3_14_NOCAP_STATUS,
    TODO_3_15_INVCOMMAND,
    TODO_4_0_BUSY_STATUS,
    TODO_4_1_STORE_ACCESS_DENIED,
    TODO_4_2_STORE_FAILED,
    TODO_4_3_STORE_NOT_FOUND,
    TODO_5_0_MAYBE_STATUS,
    TODO_5_1_UNAVAIL_STATUS,
    TODO_5_2_NOSERVICE_STATUS,
    TODO_5_3_NOSCHED_STATUS,
    TODO_6_1_CONTAINER_NOT_FOUND,
    TODO_9_0_UNRECOGNIZED_COMMAND,
}
enum RestrictionKind {
    NONE,
    ZERO,
    ONE,
    ZEROPLUS,
    ONEPLUS,
    ZEROORONE,
    ONEEXCLUSIVE,
    ONEMUTUAL,
    UNKNOWN,
}
enum Unknowntokenhandling {
    ASSUME_IANA_TOKEN,
    DISCARD_TOKEN,
    TREAT_AS_ERROR,
}
enum ValueKind {
    ANY_VALUE,
    ACTION_VALUE,
    ATTACH_VALUE,
    BINARY_VALUE,
    BOOLEAN_VALUE,
    BUSYTYPE_VALUE,
    CALADDRESS_VALUE,
    CARLEVEL_VALUE,
    CLASS_VALUE,
    CMD_VALUE,
    DATE_VALUE,
    DATETIME_VALUE,
    DATETIMEDATE_VALUE,
    DATETIMEPERIOD_VALUE,
    DURATION_VALUE,
    FLOAT_VALUE,
    GEO_VALUE,
    INTEGER_VALUE,
    METHOD_VALUE,
    PERIOD_VALUE,
    POLLCOMPLETION_VALUE,
    POLLMODE_VALUE,
    QUERY_VALUE,
    QUERYLEVEL_VALUE,
    RECUR_VALUE,
    REQUESTSTATUS_VALUE,
    STATUS_VALUE,
    STRING_VALUE,
    TASKMODE_VALUE,
    TEXT_VALUE,
    TRANSP_VALUE,
    TRIGGER_VALUE,
    URI_VALUE,
    UTCOFFSET_VALUE,
    X_VALUE,
    XLICCLASS_VALUE,
    NO_VALUE,
}
function bt(): void
/**
 * Returns the error stored in the library. If no error, return I_CAL_NO_ERROR.
 */
function errno_return(): ErrorEnum
function error_clear_errno(): void
/**
 * Shout out the errors to the compiler.
 */
function error_crash_here(): void
/**
 * Gets the state of an error.
 * @param error The error to be checked
 */
function error_get_error_state(error: ErrorEnum): ErrorState
/**
 * Gets the #ICalErrorEnum in the string representation. This method called the icalerrorno_return to get
 * the current error.
 */
function error_perror(): string
/**
 * Restores the error to specified state.
 * @param error The error to be restored
 * @param es The error state to be restored
 */
function error_restore(error: string, es: ErrorState): void
/**
 * Sets the errno.
 * @param x The error to be set
 */
function error_set_errno(x: ErrorEnum): void
/**
 * Sets the state to the corresponding error in the library.
 * @param error The error enum
 * @param state The error state
 */
function error_set_error_state(error: ErrorEnum, state: ErrorState): void
function error_stop_here(): void
/**
 * Translates the #ICalErrorEnum to the string representation.
 * @param e The #ICalErrorEnum to be translated
 */
function error_strerror(e: ErrorEnum): string
/**
 * Suppresses the error.
 * @param error The error to be suppressed
 */
function error_supress(error: string): ErrorState
/**
 * Gets the setting of #ICalUnknowntokenhandling.
 */
function get_unknown_token_handling_setting(): Unknowntokenhandling
/**
 * Adds an existing buffer to the buffer ring.
 * @param buf The existing buffer to be added into the ical
 */
function memory_add_tmp_buffer(buf: object | null): void
/**
 * Append the character to the buffer. Only use them on normally allocated memory, or on buffers created
 * from icalmemory_new_buffer, never with buffers created by icalmemory_tmp_buffer. If icalmemory_append_string
 * has to resize a buffer on the ring, the ring will loose track of it an you will have memory problems.
 * @param buf The buffer to be appended. It should not be the memory in ical.
 * @param pos The position at which the new string to be appended
 * @param ch The character to be allocated
 */
function memory_append_char(buf: number[], pos: number[], ch: number): [ /* buf */ number[], /* pos */ number[] ]
/**
 * Appends the string to the buffer. Only use them on normally allocated memory, or on buffers created from
 * icalmemory_new_buffer, never with buffers created by icalmemory_tmp_buffer. If icalmemory_append_string
 * has to resize a buffer on the ring, the ring will loose track of it an you will have memory problems.
 * @param buf The buffer to be appended. It should not be the memory in ical.
 * @param pos The position at which the new string to be appended
 * @param str The string to be allocated
 */
function memory_append_string(buf: number[], pos: number[], str: string): [ /* buf */ number[], /* pos */ number[] ]
/**
 * Frees the buffer.
 * @param buf The buffer to be freed
 */
function memory_free_buffer(buf: object | null): void
/**
 * Creates a new buffer with target size. The caller should deallocate it when necessary.
 * @param size The size of the new buffer to be created
 */
function memory_new_buffer(size: number): object | null
/**
 * Resizes the buffer to the target size.
 * @param buf The buffer needs to be resized
 * @param size The target size the buffer to be resized to
 */
function memory_resize_buffer(buf: object | null, size: number): object | null
/**
 * A wrapper around strdup. Partly to trap calls to strdup, partly because in -ansi, gcc on Red Hat claims
 * that strdup is undeclared.
 * @param s The string to be cloned
 */
function memory_strdup(s: string): string
/**
 * Creates a buffer with target size.
 * @param size The size of the buffer to be created
 */
function memory_tmp_buffer(size: number): object | null
/**
 * Like strdup, but the buffer is on the ring.
 * @param str The string to be copied
 */
function memory_tmp_copy(str: string): string
/**
 * Parses data to #ICalComponent using the given function.
 * @param func The parsing function
 */
function mime_parse(func: MimeParseFunc): Component
/**
 * Fills an array with the 'count' number of occurrences generated by the rrule. Note that the times are
 * returned in UTC, but the times are calculated in local time. YOu will have to convert the results back
 * into local time before using them.
 * @param rule The rule of the recurrence
 * @param start The start seconds past the POSIX epoch
 * @param count The number of elements to be filled up in the `array`
 */
function recur_expand_recurrence(rule: string, start: number, count: number): number[]
/**
 * Returns the code for a request status.
 * @param stat The #ICalRequestStatus to be queried
 */
function request_status_code(stat: RequestStatus): string
/**
 * Returns the descriptive text for a request status.
 * @param stat The #ICalRequestStatus to be translated
 */
function request_status_desc(stat: RequestStatus): string
/**
 * Returns a request status for major/minor status numbers.
 * @param major The major number
 * @param minor The minor number
 */
function request_status_from_num(major: number, minor: number): RequestStatus
/**
 * Returns the major number for a request status.
 * @param stat The #ICalRequestStatus to be queried
 */
function request_status_major(stat: RequestStatus): number
/**
 * Returns the minor number for a request status.
 * @param stat The #ICalRequestStatus to be queried
 */
function request_status_minor(stat: RequestStatus): number
/**
 * Checks whether the #ICalComponent is valid.
 * @param comp The component to be checked
 */
function restriction_check(comp: Component): number
/**
 * Compares the kind of restriction and the count to determine whether it is valid.
 * @param restr The restriction kind
 * @param count The number of restrictions
 */
function restriction_compare(restr: RestrictionKind, count: number): number
/**
 * Sets #ICalUnknowntokenhandling.
 * @param newSetting A #ICalUnknowntokenhandling
 */
function set_unknown_token_handling_setting(newSetting: Unknowntokenhandling): void
interface ComponentForeachRecurrenceFunc {
    (comp: Component, span: TimeSpan): void
}
interface ComponentForeachTZIDFunc {
    (param: Parameter): void
}
interface MimeParseFunc {
    (bytes: number[]): string
}
interface ParserLineGenFunc {
    (bytes: number[]): string
}
interface Array_ConstructProps extends Object_ConstructProps {
}

interface Array {

    // Owm methods of ICalGLib-3.0.ICalGLib.Array

    /**
     * Creates a deep copy of #ICalArray with the same properties as the `array`.
     */
    copy(): Array
    /**
     * Removes the element at the `position` from the array.
     * @param position The position in which the element will be removed from the array
     */
    remove_element_at(position: number): void
    /**
     * Gets the size of the array.
     */
    size(): number

    // Class property signals of ICalGLib-3.0.ICalGLib.Array

    connect(sigName: "notify::always-destroy", callback: (($obj: Array, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::always-destroy", callback: (($obj: Array, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::always-destroy", ...args: any[]): void
    connect(sigName: "notify::is-global-memory", callback: (($obj: Array, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-global-memory", callback: (($obj: Array, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::is-global-memory", ...args: any[]): void
    connect(sigName: "notify::native", callback: (($obj: Array, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::native", callback: (($obj: Array, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::native", ...args: any[]): void
    connect(sigName: "notify::native-destroy-func", callback: (($obj: Array, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::native-destroy-func", callback: (($obj: Array, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::native-destroy-func", ...args: any[]): void
    connect(sigName: "notify::owner", callback: (($obj: Array, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::owner", callback: (($obj: Array, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::owner", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * This is the ICalArray instance.
 * @class 
 */
class Array extends Object {

    // Own properties of ICalGLib-3.0.ICalGLib.Array

    static name: string
    static $gtype: GObject.GType<Array>

    // Constructors of ICalGLib-3.0.ICalGLib.Array

    constructor(config?: Array_ConstructProps) 
    _init(config?: Array_ConstructProps): void
}

interface Attach_ConstructProps extends Object_ConstructProps {
}

interface Attach {

    // Owm methods of ICalGLib-3.0.ICalGLib.Attach

    /**
     * Gets the data, if the #ICalAttach is built from the data.
     */
    get_data(): string | null

    // Overloads of get_data

    /**
     * Gets a named field from the objects table of associations (see g_object_set_data()).
     * @param key name of the key for that association
     */
    get_data(key?: string): object | null
    get_data(...args: any[]): any
    get_data(args_or_key?: any[] | string): string | null | object | null | any
    /**
     * Checks whether the #ICalAttach is built from url.
     */
    get_is_url(): boolean
    /**
     * Gets the url, if the #ICalAttach is built from the url.
     */
    get_url(): string | null

    // Class property signals of ICalGLib-3.0.ICalGLib.Attach

    connect(sigName: "notify::always-destroy", callback: (($obj: Attach, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::always-destroy", callback: (($obj: Attach, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::always-destroy", ...args: any[]): void
    connect(sigName: "notify::is-global-memory", callback: (($obj: Attach, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-global-memory", callback: (($obj: Attach, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::is-global-memory", ...args: any[]): void
    connect(sigName: "notify::native", callback: (($obj: Attach, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::native", callback: (($obj: Attach, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::native", ...args: any[]): void
    connect(sigName: "notify::native-destroy-func", callback: (($obj: Attach, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::native-destroy-func", callback: (($obj: Attach, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::native-destroy-func", ...args: any[]): void
    connect(sigName: "notify::owner", callback: (($obj: Attach, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::owner", callback: (($obj: Attach, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::owner", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * This is the ICalAttach instance.
 * @class 
 */
class Attach extends Object {

    // Own properties of ICalGLib-3.0.ICalGLib.Attach

    static name: string
    static $gtype: GObject.GType<Attach>

    // Constructors of ICalGLib-3.0.ICalGLib.Attach

    constructor(config?: Attach_ConstructProps) 
    /**
     * Creates a new #ICalAttach from the data in bytes. Takes a reference of `bytes,` increase the reference
     * before calling this function if you with to use it afterward. The stored bytes should be already encoded
     * with used encoding (like base64).
     * @constructor 
     * @param bytes The #GBytes holding the data used to create the #ICalAttach
     */
    static new_from_bytes(bytes: GLib.Bytes): Attach
    /**
     * Creates a new #ICalAttach from the data.
     * @constructor 
     * @param data The data used to create the #ICalAttach
     * @param free_fn The function used to free the data when the create #ICalAttach is destroyed
     */
    static new_from_data(data: string, free_fn: GLib.Func | null): Attach
    /**
     * Creates a new #ICalAttach from the url.
     * @constructor 
     * @param url The url from which the object is created
     */
    static new_from_url(url: string): Attach
    _init(config?: Attach_ConstructProps): void
}

interface CompIter_ConstructProps extends Object_ConstructProps {
}

interface CompIter {

    // Owm methods of ICalGLib-3.0.ICalGLib.CompIter

    /**
     * Gets the current #ICalComponent pointed by #ICalCompIter.
     */
    deref(): Component
    /**
     * Gets the next #ICalComponent pointed by #ICalCompIter.
     */
    next(): Component
    /**
     * Gets the prior #ICalComponent pointed by #ICalCompIter.
     */
    prior(): Component

    // Class property signals of ICalGLib-3.0.ICalGLib.CompIter

    connect(sigName: "notify::always-destroy", callback: (($obj: CompIter, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::always-destroy", callback: (($obj: CompIter, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::always-destroy", ...args: any[]): void
    connect(sigName: "notify::is-global-memory", callback: (($obj: CompIter, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-global-memory", callback: (($obj: CompIter, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::is-global-memory", ...args: any[]): void
    connect(sigName: "notify::native", callback: (($obj: CompIter, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::native", callback: (($obj: CompIter, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::native", ...args: any[]): void
    connect(sigName: "notify::native-destroy-func", callback: (($obj: CompIter, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::native-destroy-func", callback: (($obj: CompIter, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::native-destroy-func", ...args: any[]): void
    connect(sigName: "notify::owner", callback: (($obj: CompIter, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::owner", callback: (($obj: CompIter, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::owner", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * This is the ICalCompIter instance.
 * @class 
 */
class CompIter extends Object {

    // Own properties of ICalGLib-3.0.ICalGLib.CompIter

    static name: string
    static $gtype: GObject.GType<CompIter>

    // Constructors of ICalGLib-3.0.ICalGLib.CompIter

    constructor(config?: CompIter_ConstructProps) 
    _init(config?: CompIter_ConstructProps): void
}

interface Component_ConstructProps extends Object_ConstructProps {
}

interface Component {

    // Owm methods of ICalGLib-3.0.ICalGLib.Component

    /**
     * Adds a #ICalComponent into another #ICalComponent as a child component.
     * @param child A child #ICalComponent
     */
    add_component(child: Component): void
    /**
     * Adds an #ICalProperty into #ICalComponent.
     * @param property An #ICalProperty
     */
    add_property(property: Property): void
    /**
     * Converts a #ICalComponent to a string.
     */
    as_ical_string(): string
    /**
     * Gets the #ICalCompIter pointing to the first child #ICalComponent.
     * @param kind A #ICalComponentKind
     */
    begin_component(kind: ComponentKind): CompIter
    /**
     * Checks the number of restrictions in #ICalComponent.
     */
    check_restrictions(): number
    /**
     * Deeply clone a #ICalComponent.
     */
    clone(): Component
    /**
     * Converts some X-LIC-ERROR properties into RETURN-STATUS properties.
     */
    convert_errors(): void
    /**
     * Counts the child #ICalComponent with the target kind in the parent one.
     * @param kind The target #ICalComponentKind
     */
    count_components(kind: ComponentKind): number
    /**
     * Counts the number of errors in #ICalComponent.
     */
    count_errors(): number
    /**
     * Counts the number of #ICalProperty in #ICalComponent.
     * @param kind A #ICalPropertyKind
     */
    count_properties(kind: PropertyKind): number
    /**
     * Gets the #ICalCompIter pointing to the end child #ICalComponent.
     * @param kind A #ICalComponentKind
     */
    end_component(kind: ComponentKind): CompIter
    /**
     * Cycles through all recurrences of an event. This function will call the specified callback function for
     * once for the base value of DTSTART, and foreach recurring date/time value. It will filter out events
     * that are specified as an EXDATE or an EXRULE.
     * @param start Ignore timespans before this
     * @param end Ignore timespans after this
     */
    foreach_recurrence(start: Time, end: Time): void
    /**
     * Applies the same manipulation on every tzid in #ICalComponent.
     */
    foreach_tzid(): void
    /**
     * Gets the comment of the #ICalComponent.
     */
    get_comment(): string
    /**
     * Gets the current #ICalComponent in #ICalComponent.
     */
    get_current_component(): Component
    /**
     * Gets the current #ICalProperty in #ICalComponent.
     */
    get_current_property(): Property
    /**
     * Gets the description of the #ICalComponent.
     */
    get_description(): string
    /**
     * Gets the dtend of the #ICalComponent.
     */
    get_dtend(): Time
    /**
     * Gets the dtstamp of the #ICalComponent.
     */
    get_dtstamp(): Time
    /**
     * Gets the dtstart of the #ICalComponent.
     */
    get_dtstart(): Time
    /**
     * Gets the due of the #ICalComponent.
     */
    get_due(): Time
    /**
     * Gets the duration of the #ICalComponent.
     */
    get_duration(): Duration
    /**
     * Gets the first #ICalComponent with specific kind in #ICalComponent.
     * @param kind A #ICalComponentKind
     */
    get_first_component(kind: ComponentKind): Component | null
    /**
     * Gets the first #ICalProperty with specific kind in #ICalComponent.
     * @param kind A #ICalPropertyKind
     */
    get_first_property(kind: PropertyKind): Property | null
    /**
     * For VCOMPONENT: Returns a reference to the first VEVENT, VTODO or VJOURNAL.
     */
    get_first_real_component(): Component
    /**
     * Returns the first VEVENT, VTODO or VJOURNAL sub-component of cop, or comp if it is one of those types.
     */
    get_inner(): Component | null
    /**
     * Gets the location of the #ICalComponent.
     */
    get_location(): string
    /**
     * Gets the method of the #ICalComponent.
     */
    get_method(): PropertyMethod
    /**
     * Gets the next #ICalComponent with specific kind in #ICalComponent.
     * @param kind A #ICalComponentKind
     */
    get_next_component(kind: ComponentKind): Component | null
    /**
     * Gets the next #ICalProperty with specific kind in #ICalComponent.
     * @param kind A #ICalPropertyKind
     */
    get_next_property(kind: PropertyKind): Property | null
    /**
     * Gets the parent component of the `component`.
     */
    get_parent(): Component | null
    /**
     * Gets the recurrenceid of the #ICalComponent.
     */
    get_recurrenceid(): Time
    /**
     * Gets the relcalid of the #ICalComponent.
     */
    get_relcalid(): string
    /**
     * Gets the sequence of the #ICalComponent.
     */
    get_sequence(): number
    /**
     * For VEVENT, VTODO, VJOURNAL and VTIMEZONE: reports the start and end times of an event in UTC.
     */
    get_span(): TimeSpan
    /**
     * Gets the status of the #ICalComponent.
     */
    get_status(): PropertyStatus
    /**
     * Gets the summary of the #ICalComponent.
     */
    get_summary(): string
    /**
     * Returns the icaltimezone in the component corresponding to the TZID, or NULL if it can't be found.
     * @param tzid A string representing timezone
     */
    get_timezone(tzid: string): Timezone | null
    /**
     * Gets the uid of the #ICalComponent.
     */
    get_uid(): string
    /**
     * Checks whether #ICalComponent is valid.
     */
    is_valid(): boolean
    /**
     * Gets the type of #ICalComponent.
     */
    isa(): ComponentKind
    /**
     * Checks whether the native part of #ICalComponent is icalcomponent.
     */
    isa_component(): number
    /**
     * Takes 2 VCALENDAR components and merges the second one into the first, resolving any problems with conflicting
     * TZIDs. comp_to_merge will no longer exist after calling this function.
     * @param comp_to_merge A #ICalComponent. After merged it will not exist any more.
     */
    merge_component(comp_to_merge: Component): void
    /**
     * Removes a child #ICalComponent from another #ICalComponent.
     * @param child A child #ICalComponent
     */
    remove_component(child: Component): void
    /**
     * Removes #ICalProperty from #ICalComponent. Caution: The compare is based on address. So you must use
     * the original #ICalProperty as the target.
     * @param property A #ICalProperty
     */
    remove_property(property: Property): void
    /**
     * Sets the comment of the #ICalComponent.
     * @param v A string representing comment
     */
    set_comment(v: string): void
    /**
     * Sets the description of the #ICalComponent.
     * @param v A string representing description
     */
    set_description(v: string): void
    /**
     * Sets the dtend of the #ICalComponent.
     * @param v A #ICalTime
     */
    set_dtend(v: Time): void
    /**
     * Sets the dtstamp of the #ICalComponent.
     * @param v A #ICalTime
     */
    set_dtstamp(v: Time): void
    /**
     * Sets the dtstart of the #ICalComponent.
     * @param v A #ICalTime
     */
    set_dtstart(v: Time): void
    /**
     * Sets the due of the #ICalComponent.
     * @param v A #ICalTime
     */
    set_due(v: Time): void
    /**
     * Sets the duration of the #ICalComponent.
     * @param v A #ICalDuration
     */
    set_duration(v: Duration): void
    /**
     * Sets the location of the #ICalComponent.
     * @param v A string representing location
     */
    set_location(v: string): void
    /**
     * Sets the method of the #ICalComponent.
     * @param method A #ICalPropertyMethod
     */
    set_method(method: PropertyMethod): void
    /**
     * Sets the `parent` #ICalComponent of the specified `component`.
     * @param parent An #ICalComponent, a new parent
     */
    set_parent(parent: Component | null): void
    /**
     * Sets the recurrenceid of the #ICalComponent.
     * @param v A #ICalTime
     */
    set_recurrenceid(v: Time): void
    /**
     * Sets the relcalid of the #ICalComponent.
     * @param v A string representing relcalid
     */
    set_relcalid(v: string): void
    /**
     * Sets the sequence of the #ICalComponent.
     * @param v The sequence number
     */
    set_sequence(v: number): void
    /**
     * Sets the status of the #ICalComponent.
     * @param status A #ICalPropertyStatus
     */
    set_status(status: PropertyStatus): void
    /**
     * Sets the summary of the #ICalComponent.
     * @param v A string representing summary
     */
    set_summary(v: string): void
    /**
     * Sets the uid of the #ICalComponent.
     * @param v A string representing uid
     */
    set_uid(v: string): void
    /**
     * Removes all X-LIC-ERROR properties.
     */
    strip_errors(): void

    // Class property signals of ICalGLib-3.0.ICalGLib.Component

    connect(sigName: "notify::always-destroy", callback: (($obj: Component, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::always-destroy", callback: (($obj: Component, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::always-destroy", ...args: any[]): void
    connect(sigName: "notify::is-global-memory", callback: (($obj: Component, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-global-memory", callback: (($obj: Component, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::is-global-memory", ...args: any[]): void
    connect(sigName: "notify::native", callback: (($obj: Component, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::native", callback: (($obj: Component, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::native", ...args: any[]): void
    connect(sigName: "notify::native-destroy-func", callback: (($obj: Component, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::native-destroy-func", callback: (($obj: Component, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::native-destroy-func", ...args: any[]): void
    connect(sigName: "notify::owner", callback: (($obj: Component, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::owner", callback: (($obj: Component, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::owner", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * This is the ICalComponent instance.
 * @class 
 */
class Component extends Object {

    // Own properties of ICalGLib-3.0.ICalGLib.Component

    static name: string
    static $gtype: GObject.GType<Component>

    // Constructors of ICalGLib-3.0.ICalGLib.Component

    constructor(config?: Component_ConstructProps) 
    /**
     * Creates a new #ICalComponent with specific type.
     * @constructor 
     * @param kind The #ICalComponentKind
     */
    constructor(kind: ComponentKind) 
    /**
     * Creates a new #ICalComponent with specific type.
     * @constructor 
     * @param kind The #ICalComponentKind
     */
    static new(kind: ComponentKind): Component
    /**
     * Creates a new #ICalComponent based on a string.
     * @constructor 
     * @param str The string used to create #ICalComponent
     */
    static new_from_string(str: string): Component
    /**
     * Creates a #ICalComponent with the type to be vagenda.
     * @constructor 
     */
    static new_vagenda(): Component
    /**
     * Creates a #ICalComponent with the type to be valarm.
     * @constructor 
     */
    static new_valarm(): Component
    /**
     * Creates a #ICalComponent with the type to be vavailability.
     * @constructor 
     */
    static new_vavailability(): Component
    /**
     * Creates a #ICalComponent with the type to be vcalendar.
     * @constructor 
     */
    static new_vcalendar(): Component
    /**
     * Creates a #ICalComponent with the type to be vevent.
     * @constructor 
     */
    static new_vevent(): Component
    /**
     * Creates a #ICalComponent with the type to be vfreebusy.
     * @constructor 
     */
    static new_vfreebusy(): Component
    /**
     * Creates a #ICalComponent with the type to be vjournal.
     * @constructor 
     */
    static new_vjournal(): Component
    /**
     * Creates a #ICalComponent with the type to be vpoll.
     * @constructor 
     */
    static new_vpoll(): Component
    /**
     * Creates a #ICalComponent with the type to be vquery.
     * @constructor 
     */
    static new_vquery(): Component
    /**
     * Creates a #ICalComponent with the type to be vtimezone.
     * @constructor 
     */
    static new_vtimezone(): Component
    /**
     * Creates a #ICalComponent with the type to be vtodo.
     * @constructor 
     */
    static new_vtodo(): Component
    /**
     * Creates a #ICalComponent with the type to be vvoter.
     * @constructor 
     */
    static new_vvoter(): Component
    /**
     * Creates a new #ICalComponent based on name of x property.
     * @constructor 
     * @param x_name The name of x property
     */
    static new_x(x_name: string): Component
    /**
     * Creates a #ICalComponent with the type to be xavailable.
     * @constructor 
     */
    static new_xavailable(): Component
    /**
     * Creates a #ICalComponent with the type to be xdaylight.
     * @constructor 
     */
    static new_xdaylight(): Component
    /**
     * Creates a #ICalComponent with the type to be xstandard.
     * @constructor 
     */
    static new_xstandard(): Component
    /**
     * Creates a #ICalComponent with the type to be xvote.
     * @constructor 
     */
    static new_xvote(): Component
    _init(config?: Component_ConstructProps): void
    /**
     * Converts a string to a #ICalComponentKind.
     * @param string A string
     */
    static kind_from_string(string: string): ComponentKind
    /**
     * Checks if a #ICalComponentKind is valid.
     * @param kind A #ICalComponentKind
     */
    static kind_is_valid(kind: ComponentKind): boolean
    /**
     * Converts a #ICalComponentKind to a string.
     * @param kind A #ICalComponentKind
     */
    static kind_to_string(kind: ComponentKind): string
}

interface Datetimeperiod_ConstructProps extends Object_ConstructProps {
}

interface Datetimeperiod {

    // Owm methods of ICalGLib-3.0.ICalGLib.Datetimeperiod

    /**
     * Gets the period attribute of #ICalDatetimeperiod.
     */
    get_period(): Period
    /**
     * Gets the time attribute of #ICalDatetimeperiod.
     */
    get_time(): Time
    /**
     * Sets the period attribute of #ICalDatetimeperiod.
     * @param period The period attribute of `dtp`
     */
    set_period(period: Period): void
    /**
     * Sets the time attribute of #ICalDatetimeperiod.
     * @param time The time attribute of `dtp`
     */
    set_time(time: Time): void

    // Class property signals of ICalGLib-3.0.ICalGLib.Datetimeperiod

    connect(sigName: "notify::always-destroy", callback: (($obj: Datetimeperiod, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::always-destroy", callback: (($obj: Datetimeperiod, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::always-destroy", ...args: any[]): void
    connect(sigName: "notify::is-global-memory", callback: (($obj: Datetimeperiod, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-global-memory", callback: (($obj: Datetimeperiod, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::is-global-memory", ...args: any[]): void
    connect(sigName: "notify::native", callback: (($obj: Datetimeperiod, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::native", callback: (($obj: Datetimeperiod, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::native", ...args: any[]): void
    connect(sigName: "notify::native-destroy-func", callback: (($obj: Datetimeperiod, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::native-destroy-func", callback: (($obj: Datetimeperiod, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::native-destroy-func", ...args: any[]): void
    connect(sigName: "notify::owner", callback: (($obj: Datetimeperiod, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::owner", callback: (($obj: Datetimeperiod, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::owner", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * This is the ICalDatetimeperiod instance.
 * @class 
 */
class Datetimeperiod extends Object {

    // Own properties of ICalGLib-3.0.ICalGLib.Datetimeperiod

    static name: string
    static $gtype: GObject.GType<Datetimeperiod>

    // Constructors of ICalGLib-3.0.ICalGLib.Datetimeperiod

    constructor(config?: Datetimeperiod_ConstructProps) 
    /**
     * Creates a new #ICalDatetimeperiod.
     * @constructor 
     */
    constructor() 
    /**
     * Creates a new #ICalDatetimeperiod.
     * @constructor 
     */
    static new(): Datetimeperiod
    _init(config?: Datetimeperiod_ConstructProps): void
}

interface Duration_ConstructProps extends Object_ConstructProps {
}

interface Duration {

    // Owm methods of ICalGLib-3.0.ICalGLib.Duration

    /**
     * Converts the #ICalDuration to the representation in string.
     */
    as_ical_string(): string
    /**
     * Converts the #ICalDuration to the representation in second.
     */
    as_int(): number
    /**
     * Gets the days of #ICalDuration.
     */
    get_days(): number
    /**
     * Gets the hours of #ICalDuration.
     */
    get_hours(): number
    /**
     * Gets the minutes of #ICalDuration.
     */
    get_minutes(): number
    /**
     * Gets the seconds of #ICalDuration.
     */
    get_seconds(): number
    /**
     * Gets the weeks of #ICalDuration.
     */
    get_weeks(): number
    /**
     * Checks whether the #ICalDuration is the bad_duration.
     */
    is_bad_duration(): boolean
    /**
     * Gets the is_neg of #ICalDuration.
     */
    is_neg(): boolean
    /**
     * Checks whether the #ICalDuration is the null_duration.
     */
    is_null_duration(): boolean
    /**
     * Sets the days of #ICalDuration.
     * @param days The days
     */
    set_days(days: number): void
    /**
     * Sets the hours of #ICalDuration.
     * @param hours The hours
     */
    set_hours(hours: number): void
    /**
     * Sets the is_neg of #ICalDuration.
     * @param is_neg The is_neg
     */
    set_is_neg(is_neg: boolean): void
    /**
     * Sets the minutes of #ICalDuration.
     * @param minutes The minutes
     */
    set_minutes(minutes: number): void
    /**
     * Sets the seconds of #ICalDuration.
     * @param seconds The seconds
     */
    set_seconds(seconds: number): void
    /**
     * Sets the weeks of #ICalDuration.
     * @param weeks The weeks
     */
    set_weeks(weeks: number): void

    // Class property signals of ICalGLib-3.0.ICalGLib.Duration

    connect(sigName: "notify::always-destroy", callback: (($obj: Duration, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::always-destroy", callback: (($obj: Duration, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::always-destroy", ...args: any[]): void
    connect(sigName: "notify::is-global-memory", callback: (($obj: Duration, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-global-memory", callback: (($obj: Duration, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::is-global-memory", ...args: any[]): void
    connect(sigName: "notify::native", callback: (($obj: Duration, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::native", callback: (($obj: Duration, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::native", ...args: any[]): void
    connect(sigName: "notify::native-destroy-func", callback: (($obj: Duration, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::native-destroy-func", callback: (($obj: Duration, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::native-destroy-func", ...args: any[]): void
    connect(sigName: "notify::owner", callback: (($obj: Duration, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::owner", callback: (($obj: Duration, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::owner", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * This is the ICalDuration instance.
 * @class 
 */
class Duration extends Object {

    // Own properties of ICalGLib-3.0.ICalGLib.Duration

    static name: string
    static $gtype: GObject.GType<Duration>

    // Constructors of ICalGLib-3.0.ICalGLib.Duration

    constructor(config?: Duration_ConstructProps) 
    /**
     * Creates a bad #ICalDuration.
     * @constructor 
     */
    static new_bad_duration(): Duration
    /**
     * Creates a #ICalDuration from the duration in second.
     * @constructor 
     * @param t The duration in second
     */
    static new_from_int(t: number): Duration
    /**
     * Creates a #ICalDuration from the duration in string.
     * @constructor 
     * @param str The string representation of the duration
     */
    static new_from_string(str: string): Duration
    /**
     * Creates a #ICalDuration with all the fields to be zero.
     * @constructor 
     */
    static new_null_duration(): Duration
    _init(config?: Duration_ConstructProps): void
}

interface Geo_ConstructProps extends Object_ConstructProps {
}

interface Geo {

    // Owm methods of ICalGLib-3.0.ICalGLib.Geo

    /**
     * Creates a new #ICalGeo, copy of `geo`.
     */
    clone(): Geo
    /**
     * Gets the latitude of #ICalGeo.
     */
    get_lat(): number
    /**
     * Gets the longitude of #ICalGeo.
     */
    get_lon(): number
    /**
     * Sets the latitude of #ICalGeo.
     * @param lat The latitude
     */
    set_lat(lat: number): void
    /**
     * Sets the longitude of #ICalGeo.
     * @param lon The longitude
     */
    set_lon(lon: number): void

    // Class property signals of ICalGLib-3.0.ICalGLib.Geo

    connect(sigName: "notify::always-destroy", callback: (($obj: Geo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::always-destroy", callback: (($obj: Geo, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::always-destroy", ...args: any[]): void
    connect(sigName: "notify::is-global-memory", callback: (($obj: Geo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-global-memory", callback: (($obj: Geo, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::is-global-memory", ...args: any[]): void
    connect(sigName: "notify::native", callback: (($obj: Geo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::native", callback: (($obj: Geo, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::native", ...args: any[]): void
    connect(sigName: "notify::native-destroy-func", callback: (($obj: Geo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::native-destroy-func", callback: (($obj: Geo, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::native-destroy-func", ...args: any[]): void
    connect(sigName: "notify::owner", callback: (($obj: Geo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::owner", callback: (($obj: Geo, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::owner", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * This is the ICalGeo instance.
 * @class 
 */
class Geo extends Object {

    // Own properties of ICalGLib-3.0.ICalGLib.Geo

    static name: string
    static $gtype: GObject.GType<Geo>

    // Constructors of ICalGLib-3.0.ICalGLib.Geo

    constructor(config?: Geo_ConstructProps) 
    /**
     * Creates a new #ICalGeo.
     * @constructor 
     * @param lat Latitude
     * @param lon Longitude
     */
    constructor(lat: number, lon: number) 
    /**
     * Creates a new #ICalGeo.
     * @constructor 
     * @param lat Latitude
     * @param lon Longitude
     */
    static new(lat: number, lon: number): Geo
    _init(config?: Geo_ConstructProps): void
}

interface Object_ConstructProps extends GObject.Object_ConstructProps {

    // Own constructor properties of ICalGLib-3.0.ICalGLib.Object

    /**
     * Whether free the native libical structure on #ICalObject's finalize even
     * if the object has set an owner.
     */
    always_destroy?: boolean | null
    /**
     * Whether the native libical structure is from a global shared memory.
     * If TRUE, then it is not freed on #ICalObject's finalize.
     */
    is_global_memory?: boolean | null
    /**
     * The native libical structure for this ICalObject.
     */
    native?: object | null
    /**
     * GDestroyNotify function to use to destroy the native libical pointer.
     */
    native_destroy_func?: object | null
    /**
     * Owner of the native libical structure. If set, then it is
     * responsible for a free of the native libical structure.
     */
    owner?: GObject.Object | null
}

interface Object {

    // Own properties of ICalGLib-3.0.ICalGLib.Object

    /**
     * Whether free the native libical structure on #ICalObject's finalize even
     * if the object has set an owner.
     */
    always_destroy: boolean
    /**
     * Whether the native libical structure is from a global shared memory.
     * If TRUE, then it is not freed on #ICalObject's finalize.
     */
    readonly is_global_memory: boolean
    /**
     * The native libical structure for this ICalObject.
     */
    readonly native: object
    /**
     * GDestroyNotify function to use to destroy the native libical pointer.
     */
    native_destroy_func: object
    /**
     * Owner of the native libical structure. If set, then it is
     * responsible for a free of the native libical structure.
     */
    owner: GObject.Object

    // Owm methods of ICalGLib-3.0.ICalGLib.Object

    /**
     * Adds a `depender` into the list of objects which should not be destroyed before
     * this `iobject`. It's usually used for cases where the `iobject` uses native libical
     * structure from the `depender`. The `depender` is referenced. It's illegal to try
     * to add one `depender` multiple times.
     * @param depender a #GObject depender
     */
    add_depender(depender: GObject.Object): void
    /**
     * Obtain the `ICalObject:`:always-destroy property value.
     */
    get_always_destroy(): boolean
    /**
     * Obtains whether the native libical structure is a global shared memory,
     * thus should not be destroyed. This can be set only during construction time.
     */
    get_is_global_memory(): boolean
    /**
     * Obtain current owner of the native libical structure. The returned pointer,
     * if not NULL, is referenced for thread safety. Unref it with g_object_unref
     * when done with it.
     */
    ref_owner(): GObject.Object | null
    /**
     * Removes a `depender` from the list of objects which should not be destroyed before
     * this `iobject,` previously added with i_cal_object_add_depender(). It's illegal to try
     * to remove the `depender` which is not in the internal list.
     * @param depender a #GObject depender
     */
    remove_depender(depender: GObject.Object): void
    /**
     * Unref and remove the owner.
     */
    remove_owner(): void
    /**
     * Sets the `ICalObject:`:always-destroy property value. When %TRUE, the native
     * libical structure is always freed, even when an owner of the `iobject` is set.
     * @param value value to set
     */
    set_always_destroy(value: boolean): void
    /**
     * Sets a function to be used to destroy the native libical structure.
     * @param native_destroy_func Function to be used to destroy the native libical structure
     */
    set_native_destroy_func(native_destroy_func: GLib.DestroyNotify): void
    /**
     * Sets an owner of the native libical structure, that is an object responsible
     * for a destroy of the native libical structure.
     * @param owner Owner of the native libical structure
     */
    set_owner(owner: GObject.Object): void
    /**
     * Obtain native libical structure pointer associated with this `iobject` and sets the one
     * at `iobject` to NULL, thus it's invalid since now on.
     */
    steal_native(): object | null

    // Class property signals of ICalGLib-3.0.ICalGLib.Object

    connect(sigName: "notify::always-destroy", callback: (($obj: Object, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::always-destroy", callback: (($obj: Object, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::always-destroy", ...args: any[]): void
    connect(sigName: "notify::is-global-memory", callback: (($obj: Object, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-global-memory", callback: (($obj: Object, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::is-global-memory", ...args: any[]): void
    connect(sigName: "notify::native", callback: (($obj: Object, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::native", callback: (($obj: Object, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::native", ...args: any[]): void
    connect(sigName: "notify::native-destroy-func", callback: (($obj: Object, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::native-destroy-func", callback: (($obj: Object, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::native-destroy-func", ...args: any[]): void
    connect(sigName: "notify::owner", callback: (($obj: Object, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::owner", callback: (($obj: Object, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::owner", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * This is an ICalObject instance struct.
 * @class 
 */
class Object extends GObject.Object {

    // Own properties of ICalGLib-3.0.ICalGLib.Object

    static name: string
    static $gtype: GObject.GType<Object>

    // Constructors of ICalGLib-3.0.ICalGLib.Object

    constructor(config?: Object_ConstructProps) 
    _init(config?: Object_ConstructProps): void
    /**
     * Frees all global objects. Any references to them are invalidated
     * by this call, unless they had been g_object_ref()-ed manually.
     */
    static free_global_objects(): void
}

interface Parameter_ConstructProps extends Object_ConstructProps {
}

interface Parameter {

    // Owm methods of ICalGLib-3.0.ICalGLib.Parameter

    /**
     * Converts an #ICalParameter to the string representation.
     */
    as_ical_string(): string
    /**
     * Deep clone a #ICalParameter.
     */
    clone(): Parameter
    get_actionparam(): ParameterAction
    get_altrep(): string | null
    get_charset(): string | null
    get_cn(): string | null
    get_cutype(): ParameterCutype | null
    get_delegatedfrom(): string | null
    get_delegatedto(): string | null
    get_dir(): string | null
    get_enable(): ParameterEnable
    get_encoding(): ParameterEncoding
    get_fbtype(): ParameterFbtype
    get_filename(): string | null
    get_fmttype(): string | null
    get_iana(): string | null
    /**
     * Gets the iana_name property of the native part of the #ICalParameter.
     */
    get_iana_name(): string | null
    /**
     * Gets the iana_value property of the native part of the #ICalParameter.
     */
    get_iana_value(): string | null
    get_id(): string | null
    get_language(): string | null
    get_latency(): string | null
    get_local(): ParameterLocal
    get_localize(): string | null
    get_managedid(): string | null
    get_member(): string | null
    get_modified(): string | null
    get_options(): string | null
    /**
     * Gets the parent #ICalProperty of the specified #ICalParameter.
     */
    get_parent(): Property | null
    get_partstat(): ParameterPartstat
    get_publiccomment(): string | null
    get_range(): ParameterRange
    get_reason(): string | null
    get_related(): ParameterRelated
    get_reltype(): ParameterReltype
    get_required(): ParameterRequired
    get_response(): number
    get_role(): ParameterRole
    get_rsvp(): ParameterRsvp
    get_scheduleagent(): ParameterScheduleagent
    get_scheduleforcesend(): ParameterScheduleforcesend
    get_schedulestatus(): string | null
    get_sentby(): string | null
    get_size(): string | null
    get_stayinformed(): ParameterStayinformed
    get_substate(): ParameterSubstate
    get_tzid(): string | null
    get_value(): ParameterValue
    get_x(): string | null
    get_xliccomparetype(): ParameterXliccomparetype
    get_xlicerrortype(): ParameterXlicerrortype
    /**
     * Gets the xname property of the native part of the #ICalParameter.
     */
    get_xname(): string | null
    /**
     * Gets the xvalue property of the native part of the #ICalParameter.
     */
    get_xvalue(): string | null
    /**
     * Checks whether native parts of two #ICalParameters have the same name.
     * @param param2 The #ICalParameter to be checked
     */
    has_same_name(param2: Parameter): number
    /**
     * Checks the type of a #ICalParameter.
     */
    isa(): ParameterKind
    /**
     * Checks whether the native part of the #ICalParameter is of type icalparameter.
     */
    isa_parameter(): number
    set_actionparam(v: ParameterAction): void
    set_altrep(v: string): void
    set_charset(v: string): void
    set_cn(v: string): void
    set_cutype(v: ParameterCutype): void
    set_delegatedfrom(v: string): void
    set_delegatedto(v: string): void
    set_dir(v: string): void
    set_enable(v: ParameterEnable): void
    set_encoding(v: ParameterEncoding): void
    set_fbtype(v: ParameterFbtype): void
    set_filename(v: string): void
    set_fmttype(v: string): void
    set_iana(v: string): void
    /**
     * Sets the iana_name property of the native part of the #ICalParameter.
     * @param v The name to be set into the `param`
     */
    set_iana_name(v: string): void
    /**
     * Sets the iana_value property of the native part of the #ICalParameter.
     * @param v The value to be set into the `param`
     */
    set_iana_value(v: string): void
    set_id(v: string): void
    set_language(v: string): void
    set_latency(v: string): void
    set_local(v: ParameterLocal): void
    set_localize(v: string): void
    set_managedid(v: string): void
    set_member(v: string): void
    set_modified(v: string): void
    set_options(v: string): void
    /**
     * Sets the parent #ICalProperty of an #ICalParameter.
     * @param property The parent #ICalProperty
     */
    set_parent(property: Property | null): void
    set_partstat(v: ParameterPartstat): void
    set_publiccomment(v: string): void
    set_range(v: ParameterRange): void
    set_reason(v: string): void
    set_related(v: ParameterRelated): void
    set_reltype(v: ParameterReltype): void
    set_required(v: ParameterRequired): void
    set_response(v: number): void
    set_role(v: ParameterRole): void
    set_rsvp(v: ParameterRsvp): void
    set_scheduleagent(v: ParameterScheduleagent): void
    set_scheduleforcesend(v: ParameterScheduleforcesend): void
    set_schedulestatus(v: string): void
    set_sentby(v: string): void
    set_size(v: string): void
    set_stayinformed(v: ParameterStayinformed): void
    set_substate(v: ParameterSubstate): void
    set_tzid(v: string): void
    set_value(v: ParameterValue): void
    set_x(v: string): void
    set_xliccomparetype(v: ParameterXliccomparetype): void
    set_xlicerrortype(v: ParameterXlicerrortype): void
    /**
     * Sets the xname property of the native part of the #ICalParameter.
     * @param v The name to be set into the `param`
     */
    set_xname(v: string): void
    /**
     * Sets the xvalue property of the native part of the #ICalParameter.
     * @param v The value to be set into the `param`
     */
    set_xvalue(v: string): void

    // Class property signals of ICalGLib-3.0.ICalGLib.Parameter

    connect(sigName: "notify::always-destroy", callback: (($obj: Parameter, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::always-destroy", callback: (($obj: Parameter, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::always-destroy", ...args: any[]): void
    connect(sigName: "notify::is-global-memory", callback: (($obj: Parameter, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-global-memory", callback: (($obj: Parameter, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::is-global-memory", ...args: any[]): void
    connect(sigName: "notify::native", callback: (($obj: Parameter, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::native", callback: (($obj: Parameter, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::native", ...args: any[]): void
    connect(sigName: "notify::native-destroy-func", callback: (($obj: Parameter, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::native-destroy-func", callback: (($obj: Parameter, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::native-destroy-func", ...args: any[]): void
    connect(sigName: "notify::owner", callback: (($obj: Parameter, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::owner", callback: (($obj: Parameter, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::owner", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * This is the ICalParameter instance.
 * @class 
 */
class Parameter extends Object {

    // Own properties of ICalGLib-3.0.ICalGLib.Parameter

    static name: string
    static $gtype: GObject.GType<Parameter>

    // Constructors of ICalGLib-3.0.ICalGLib.Parameter

    constructor(config?: Parameter_ConstructProps) 
    /**
     * Creates a new #ICalParameter according to the kind type.
     * @constructor 
     * @param v The type of #ICalParameter to be created
     */
    constructor(v: ParameterKind) 
    /**
     * Creates a new #ICalParameter according to the kind type.
     * @constructor 
     * @param v The type of #ICalParameter to be created
     */
    static new(v: ParameterKind): Parameter
    /**
     * Creates a new #ICalParameter according to the action type.
     * @constructor 
     * @param v The type of #ICalParameter to be created
     */
    static new_actionparam(v: ParameterAction): Parameter
    static new_altrep(v: string): Parameter
    static new_charset(v: string): Parameter
    static new_cn(v: string): Parameter
    static new_cutype(v: ParameterCutype): Parameter
    static new_delegatedfrom(v: string): Parameter
    static new_delegatedto(v: string): Parameter
    static new_dir(v: string): Parameter
    /**
     * Creates a new #ICalParameter according to the enable type.
     * @constructor 
     * @param v The type of #ICalParameter to be created
     */
    static new_enable(v: ParameterEnable): Parameter
    /**
     * Creates a new #ICalParameter according to the encoding type.
     * @constructor 
     * @param v The type of #ICalParameter to be created
     */
    static new_encoding(v: ParameterEncoding): Parameter
    /**
     * Creates a new #ICalParameter according to the fbtype type.
     * @constructor 
     * @param v The type of #ICalParameter to be created
     */
    static new_fbtype(v: ParameterFbtype): Parameter
    static new_filename(v: string): Parameter
    static new_fmttype(v: string): Parameter
    /**
     * Creates a #ICalParameter from a string of form "PARAMNAME=VALUE".
     * @constructor 
     * @param value The string from which the #ICalParameter is created
     */
    static new_from_string(value: string): Parameter
    /**
     * Creates a new #ICalParameter from just the value, the part after the "="
     * @constructor 
     * @param kind The kind of #ICalParameter to be created
     * @param value The string from which #ICalParameter to be created
     */
    static new_from_value_string(kind: ParameterKind, value: string): Parameter
    static new_iana(v: string): Parameter
    static new_id(v: string): Parameter
    static new_language(v: string): Parameter
    static new_latency(v: string): Parameter
    /**
     * Creates a new #ICalParameter according to the local type.
     * @constructor 
     * @param v The type of #ICalParameter to be created
     */
    static new_local(v: ParameterLocal): Parameter
    static new_localize(v: string): Parameter
    static new_managedid(v: string): Parameter
    static new_member(v: string): Parameter
    static new_modified(v: string): Parameter
    static new_options(v: string): Parameter
    /**
     * Creates a new #ICalParameter according to the partstat type.
     * @constructor 
     * @param v The type of #ICalParameter to be created
     */
    static new_partstat(v: ParameterPartstat): Parameter
    static new_publiccomment(v: string): Parameter
    /**
     * Creates a new #ICalParameter according to the range type.
     * @constructor 
     * @param v The type of #ICalParameter to be created
     */
    static new_range(v: ParameterRange): Parameter
    static new_reason(v: string): Parameter
    /**
     * Creates a new #ICalParameter according to the related type.
     * @constructor 
     * @param v The type of #ICalParameter to be created
     */
    static new_related(v: ParameterRelated): Parameter
    /**
     * Creates a new #ICalParameter according to the reltype type.
     * @constructor 
     * @param v The type of #ICalParameter to be created
     */
    static new_reltype(v: ParameterReltype): Parameter
    /**
     * Creates a new #ICalParameter according to the required type.
     * @constructor 
     * @param v The type of #ICalParameter to be created
     */
    static new_required(v: ParameterRequired): Parameter
    /**
     * Creates a new #ICalParameter according to the response type.
     * @constructor 
     * @param v The type of #ICalParameter to be created
     */
    static new_response(v: number): Parameter
    /**
     * Creates a new #ICalParameter according to the role type.
     * @constructor 
     * @param v The type of #ICalParameter to be created
     */
    static new_role(v: ParameterRole): Parameter
    /**
     * Creates a new #ICalParameter according to the rsvp type.
     * @constructor 
     * @param v The type of #ICalParameter to be created
     */
    static new_rsvp(v: ParameterRsvp): Parameter
    /**
     * Creates a new #ICalParameter according to the scheduleagent type.
     * @constructor 
     * @param v The type of #ICalParameter to be created
     */
    static new_scheduleagent(v: ParameterScheduleagent): Parameter
    /**
     * Creates a new #ICalParameter according to the scheduleforcesend type.
     * @constructor 
     * @param v The type of #ICalParameter to be created
     */
    static new_scheduleforcesend(v: ParameterScheduleforcesend): Parameter
    static new_schedulestatus(v: string): Parameter
    static new_sentby(v: string): Parameter
    static new_size(v: string): Parameter
    /**
     * Creates a new #ICalParameter according to the stayinformed type.
     * @constructor 
     * @param v The type of #ICalParameter to be created
     */
    static new_stayinformed(v: ParameterStayinformed): Parameter
    /**
     * Creates a new #ICalParameter according to the substate type.
     * @constructor 
     * @param v The type of #ICalParameter to be created
     */
    static new_substate(v: ParameterSubstate): Parameter
    static new_tzid(v: string): Parameter
    /**
     * Creates a new #ICalParameter according to the value type.
     * @constructor 
     * @param v The type of #ICalParameter to be created
     */
    static new_value(v: ParameterValue): Parameter
    static new_x(v: string): Parameter
    /**
     * Creates a new #ICalParameter according to the xliccomparetype type.
     * @constructor 
     * @param v The type of #ICalParameter to be created
     */
    static new_xliccomparetype(v: ParameterXliccomparetype): Parameter
    /**
     * Creates a new #ICalParameter according to the xlicerrortype type.
     * @constructor 
     * @param v The type of #ICalParameter to be created
     */
    static new_xlicerrortype(v: ParameterXlicerrortype): Parameter
    _init(config?: Parameter_ConstructProps): void
    /**
     * Converts a string to the #ICalParameterKind.
     * @param string The string representation of the #ICalParameter
     */
    static kind_from_string(string: string): ParameterKind
    /**
     * Checks whether #ICalParameterKind is valid.
     * @param kind The #ICalPropertyKind
     */
    static kind_is_valid(kind: ParameterKind): boolean
    /**
     * Converts the #ICalParameter to the string representation.
     * @param kind The #ICalParameterKind to be converted
     */
    static kind_to_string(kind: ParameterKind): string
    /**
     * Converts the #ICalParameterValue to #ICalValueKind.
     * @param value A #ICalParameterValue
     */
    static value_to_value_kind(value: ParameterValue): ValueKind
}

interface Parser_ConstructProps extends Object_ConstructProps {
}

interface Parser {

    // Owm methods of ICalGLib-3.0.ICalGLib.Parser

    /**
     * Add a line at one time into the #ICalParser until the parsing is complete and #ICalComponent will be
     * returned.
     * @param str A line of string representation of the #ICalComponent
     */
    add_line(str: string | null): Component | null
    /**
     * We won't get a clean exit if some components did not have an "END" tag. Clear off any component that
     * may be left in the list.
     */
    clean(): Component | null
    /**
     * Frees a #ICalParser.
     */
    free(): void
    /**
     * Given a line generator function, returns a single iCal content line.
     * @param func A line generator function
     */
    get_line(func: ParserLineGenFunc): string
    /**
     * Gets the state of the target parser.
     */
    get_state(): ParserState
    /**
     * icalparser_parse takes a string that holds the text ( in RFC 2445 format ) and returns a pointer to an
     * #ICalComponent. The caller owns the memory. `func` is a pointer to a function that returns one content
     * line per invocation.
     * @param func The function used to parse
     */
    parse(func: ParserLineGenFunc): Component

    // Class property signals of ICalGLib-3.0.ICalGLib.Parser

    connect(sigName: "notify::always-destroy", callback: (($obj: Parser, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::always-destroy", callback: (($obj: Parser, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::always-destroy", ...args: any[]): void
    connect(sigName: "notify::is-global-memory", callback: (($obj: Parser, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-global-memory", callback: (($obj: Parser, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::is-global-memory", ...args: any[]): void
    connect(sigName: "notify::native", callback: (($obj: Parser, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::native", callback: (($obj: Parser, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::native", ...args: any[]): void
    connect(sigName: "notify::native-destroy-func", callback: (($obj: Parser, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::native-destroy-func", callback: (($obj: Parser, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::native-destroy-func", ...args: any[]): void
    connect(sigName: "notify::owner", callback: (($obj: Parser, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::owner", callback: (($obj: Parser, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::owner", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * This is the ICalParser instance.
 * @class 
 */
class Parser extends Object {

    // Own properties of ICalGLib-3.0.ICalGLib.Parser

    static name: string
    static $gtype: GObject.GType<Parser>

    // Constructors of ICalGLib-3.0.ICalGLib.Parser

    constructor(config?: Parser_ConstructProps) 
    /**
     * Creates a default #ICalParser.
     * @constructor 
     */
    constructor() 
    /**
     * Creates a default #ICalParser.
     * @constructor 
     */
    static new(): Parser
    _init(config?: Parser_ConstructProps): void
    /**
     * Parses the string into a #ICalComponent.
     * @param str The string to be parsed
     */
    static parse_string(str: string): Component
}

interface Period_ConstructProps extends Object_ConstructProps {
}

interface Period {

    // Owm methods of ICalGLib-3.0.ICalGLib.Period

    /**
     * Translates #ICalPeriod to string.
     */
    as_ical_string(): string
    /**
     * Gets the duration from an #ICalPeriod.
     */
    get_duration(): Duration
    /**
     * Gets the end time from an #ICalPeriod.
     */
    get_end(): Time
    /**
     * Gets the start time from an #ICalPeriod.
     */
    get_start(): Time
    /**
     * Checks the #ICalPeriod is null_period.
     */
    is_null_period(): boolean
    /**
     * Checks the #ICalPeriod is valid_period.
     */
    is_valid_period(): boolean
    /**
     * Sets the duration of an #ICalPeriod.
     * @param duration The duration of `period`
     */
    set_duration(duration: Duration): void
    /**
     * Sets the end time of an #ICalPeriod.
     * @param end The end of `period`
     */
    set_end(end: Time): void
    /**
     * Sets the start time of an #ICalPeriod.
     * @param start The start of `period`
     */
    set_start(start: Time): void

    // Class property signals of ICalGLib-3.0.ICalGLib.Period

    connect(sigName: "notify::always-destroy", callback: (($obj: Period, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::always-destroy", callback: (($obj: Period, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::always-destroy", ...args: any[]): void
    connect(sigName: "notify::is-global-memory", callback: (($obj: Period, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-global-memory", callback: (($obj: Period, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::is-global-memory", ...args: any[]): void
    connect(sigName: "notify::native", callback: (($obj: Period, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::native", callback: (($obj: Period, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::native", ...args: any[]): void
    connect(sigName: "notify::native-destroy-func", callback: (($obj: Period, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::native-destroy-func", callback: (($obj: Period, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::native-destroy-func", ...args: any[]): void
    connect(sigName: "notify::owner", callback: (($obj: Period, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::owner", callback: (($obj: Period, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::owner", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * This is the ICalPeriod instance.
 * @class 
 */
class Period extends Object {

    // Own properties of ICalGLib-3.0.ICalGLib.Period

    static name: string
    static $gtype: GObject.GType<Period>

    // Constructors of ICalGLib-3.0.ICalGLib.Period

    constructor(config?: Period_ConstructProps) 
    /**
     * Creates a #ICalPeriod from a string.
     * @constructor 
     * @param str The string used to create the #ICalPeriod
     */
    static new_from_string(str: string): Period
    /**
     * Creates a default #ICalPeriod.
     * @constructor 
     */
    static new_null_period(): Period
    _init(config?: Period_ConstructProps): void
}

interface Property_ConstructProps extends Object_ConstructProps {
}

interface Property {

    // Owm methods of ICalGLib-3.0.ICalGLib.Property

    /**
     * Adds a #ICalParameter into the #ICalProperty. It behaves like set the copy of the #ICalParameter. Upon
     * completion the native part of #ICalParameter will be set to NULL.
     * @param parameter The parameter to be added into `prop`
     */
    add_parameter(parameter: Parameter): void
    /**
     * Converts a #ICalProperty to a string representation.
     */
    as_ical_string(): string
    /**
     * Deeply clone a #ICalProperty.
     */
    clone(): Property
    /**
     * Counts the parameters in the #ICalProperty.
     */
    count_parameters(): number
    /**
     * Gets the acceptresponse of #ICalProperty.
     */
    get_acceptresponse(): string
    /**
     * Gets the acknowledged time of #ICalProperty.
     */
    get_acknowledged(): Time
    /**
     * Gets the action of #ICalProperty.
     */
    get_action(): PropertyAction
    /**
     * Gets the allowconflict of #ICalProperty.
     */
    get_allowconflict(): string
    /**
     * Gets the attach of #ICalProperty.
     */
    get_attach(): Attach
    /**
     * Gets the attendee of #ICalProperty.
     */
    get_attendee(): string
    /**
     * Gets the busytype of #ICalProperty.
     */
    get_busytype(): PropertyBusytype
    /**
     * Gets the calid of #ICalProperty.
     */
    get_calid(): string
    /**
     * Gets the calmaster of #ICalProperty.
     */
    get_calmaster(): string
    /**
     * Gets the calscale of #ICalProperty.
     */
    get_calscale(): string
    /**
     * Gets the capversion of #ICalProperty.
     */
    get_capversion(): string
    /**
     * Gets the carid of #ICalProperty.
     */
    get_carid(): string
    /**
     * Gets the carlevel of #ICalProperty.
     */
    get_carlevel(): PropertyCarlevel
    /**
     * Gets the categories of #ICalProperty.
     */
    get_categories(): string
    /**
     * Gets the class of #ICalProperty.
     */
    get_class(): Property_Class
    /**
     * Gets the cmd of #ICalProperty.
     */
    get_cmd(): PropertyCmd
    /**
     * Gets the color property of the `prop`.
     */
    get_color(): string
    /**
     * Gets the comment of #ICalProperty.
     */
    get_comment(): string
    /**
     * Gets the completed time of #ICalProperty.
     */
    get_completed(): Time
    /**
     * Gets the components of #ICalProperty.
     */
    get_components(): string
    /**
     * Gets the contact of #ICalProperty.
     */
    get_contact(): string
    /**
     * Gets the created time of #ICalProperty.
     */
    get_created(): Time
    /**
     * Gets the csid of #ICalProperty.
     */
    get_csid(): string
    /**
     * Gets the datemax time of #ICalProperty.
     */
    get_datemax(): Time
    /**
     * Gets the datemin time of #ICalProperty.
     */
    get_datemin(): Time
    /**
     * If the property is a DATE-TIME with a TZID parameter and a corresponding VTIMEZONE is present in the
     * component, the returned component will already be in the correct timezone; otherwise the caller is responsible
     * for converting it.
     * 
     * The `comp` can be NULL, in which case the parent of the `prop` is used to find
     * the corresponding time zone.
     * @param comp An #ICalComponent
     */
    get_datetime_with_component(comp: Component | null): Time
    /**
     * Gets the decreed of #ICalProperty.
     */
    get_decreed(): string
    /**
     * Gets the defaultcharset of #ICalProperty.
     */
    get_defaultcharset(): string
    /**
     * Gets the defaultlocale of #ICalProperty.
     */
    get_defaultlocale(): string
    /**
     * Gets the defaulttzid of #ICalProperty.
     */
    get_defaulttzid(): string
    /**
     * Gets the defaultvcars of #ICalProperty.
     */
    get_defaultvcars(): string
    /**
     * Gets the deny of #ICalProperty.
     */
    get_deny(): string
    /**
     * Gets the description of #ICalProperty.
     */
    get_description(): string
    /**
     * Gets the dtend time of #ICalProperty.
     */
    get_dtend(): Time
    /**
     * Gets the dtstamp time of #ICalProperty.
     */
    get_dtstamp(): Time
    /**
     * Gets the dtstart time of #ICalProperty.
     */
    get_dtstart(): Time
    /**
     * Gets the due time of #ICalProperty.
     */
    get_due(): Time
    /**
     * Gets the duration of #ICalProperty.
     */
    get_duration(): Duration
    /**
     * Gets the estimatedduration of #ICalProperty.
     */
    get_estimatedduration(): Duration
    /**
     * Gets the exdate time of #ICalProperty.
     */
    get_exdate(): Time
    /**
     * Gets the expand of #ICalProperty.
     */
    get_expand(): number
    /**
     * Gets the exrule recurrence type of #ICalProperty.
     */
    get_exrule(): Recurrence
    /**
     * Gets the first #ICalParameter from the parent #ICalProperty.
     * @param kind The target kind of #ICalParameter to be retrieved
     */
    get_first_parameter(kind: ParameterKind): Parameter
    /**
     * Gets the freebusy period type of #ICalProperty.
     */
    get_freebusy(): Period
    /**
     * Gets the geo type of #ICalProperty.
     */
    get_geo(): Geo
    /**
     * Gets the grant of #ICalProperty.
     */
    get_grant(): string
    /**
     * Gets the itipversion of #ICalProperty.
     */
    get_itipversion(): string
    /**
     * Gets the lastmodified time of #ICalProperty.
     */
    get_lastmodified(): Time
    /**
     * Gets the location of #ICalProperty.
     */
    get_location(): string
    /**
     * Gets the maxcomponentsize of #ICalProperty.
     */
    get_maxcomponentsize(): number
    /**
     * Gets the maxdate time of #ICalProperty.
     */
    get_maxdate(): Time
    /**
     * Gets the maxresults of #ICalProperty.
     */
    get_maxresults(): number
    /**
     * Gets the maxresultssize of #ICalProperty.
     */
    get_maxresultssize(): number
    /**
     * Gets the method of #ICalProperty.
     */
    get_method(): PropertyMethod
    /**
     * Gets the mindate time of #ICalProperty.
     */
    get_mindate(): Time
    /**
     * Gets the multipart of #ICalProperty.
     */
    get_multipart(): string
    /**
     * Gets the name of #ICalProperty.
     */
    get_name(): string
    /**
     * Gets the next #ICalParameter from the parent #ICalProperty.
     * @param kind The target kind of #ICalParameter to be retrieved
     */
    get_next_parameter(kind: ParameterKind): Parameter
    /**
     * Gets the organizer of #ICalProperty.
     */
    get_organizer(): string
    /**
     * Gets the owner of #ICalProperty.
     */
    get_owner(): string
    /**
     * Gets the string representation of the target parameter in the #ICalProperty.
     * @param name The name of the target parameter
     */
    get_parameter_as_string(name: string): string
    /**
     * Gets the parent component of the property. Use with caution. When icalproperty is deallocated, it won't
     * deallocate its parent. However the #ICalComponent object created using this method will be deallocated
     * (if no reference in other places). So You need to make sure there is another reference except the one
     * in #ICalProperty.
     */
    get_parent(): Component | null
    /**
     * Gets the percentcomplete of #ICalProperty.
     */
    get_percentcomplete(): number
    /**
     * Gets the permission of #ICalProperty.
     */
    get_permission(): string
    /**
     * Gets the pollcompletion of #ICalProperty.
     */
    get_pollcompletion(): PropertyPollcompletion
    /**
     * Gets the pollitemid of #ICalProperty.
     */
    get_pollitemid(): number
    /**
     * Gets the pollmode of #ICalProperty.
     */
    get_pollmode(): PropertyPollmode
    /**
     * Gets the pollproperties of #ICalProperty.
     */
    get_pollproperties(): string
    /**
     * Gets the pollwinner of #ICalProperty.
     */
    get_pollwinner(): number
    /**
     * Gets the priority of #ICalProperty.
     */
    get_priority(): number
    /**
     * Gets the prodid of #ICalProperty.
     */
    get_prodid(): string
    /**
     * Gets the property name of #ICalProperty.
     */
    get_property_name(): string
    /**
     * Gets the query of #ICalProperty.
     */
    get_query(): string
    /**
     * Gets the queryid of #ICalProperty.
     */
    get_queryid(): string
    /**
     * Gets the querylevel of #ICalProperty.
     */
    get_querylevel(): PropertyQuerylevel
    /**
     * Gets the queryname of #ICalProperty.
     */
    get_queryname(): string
    /**
     * Gets the rdate  of #ICalProperty.
     */
    get_rdate(): Datetimeperiod
    /**
     * Gets the recuraccepted of #ICalProperty.
     */
    get_recuraccepted(): string
    /**
     * Gets the recurexpand of #ICalProperty.
     */
    get_recurexpand(): string
    /**
     * Gets the recurlimit of #ICalProperty.
     */
    get_recurlimit(): string
    /**
     * Gets the recurrenceid time of #ICalProperty.
     */
    get_recurrenceid(): Time
    /**
     * Gets the relatedto of #ICalProperty.
     */
    get_relatedto(): string
    /**
     * Gets the relcalid of #ICalProperty.
     */
    get_relcalid(): string
    /**
     * Gets the repeat of #ICalProperty.
     */
    get_repeat(): number
    /**
     * Gets the replyurl of #ICalProperty.
     */
    get_replyurl(): string
    /**
     * Gets the requeststatus of #ICalProperty.
     */
    get_requeststatus(): Reqstat
    /**
     * Gets the resources of #ICalProperty.
     */
    get_resources(): string
    /**
     * Gets the response of #ICalProperty.
     */
    get_response(): number
    /**
     * Gets the restriction of #ICalProperty.
     */
    get_restriction(): string
    /**
     * Gets the rrule recurrence type of #ICalProperty.
     */
    get_rrule(): Recurrence
    /**
     * Gets the scope of #ICalProperty.
     */
    get_scope(): string
    /**
     * Gets the sequence of #ICalProperty.
     */
    get_sequence(): number
    /**
     * Gets the status of #ICalProperty.
     */
    get_status(): PropertyStatus
    /**
     * Gets the storesexpanded of #ICalProperty.
     */
    get_storesexpanded(): string
    /**
     * Gets the summary of #ICalProperty.
     */
    get_summary(): string
    /**
     * Gets the target of #ICalProperty.
     */
    get_target(): string
    /**
     * Gets the taskmode of #ICalProperty.
     */
    get_taskmode(): PropertyTaskmode
    /**
     * Gets the transp of #ICalProperty.
     */
    get_transp(): PropertyTransp
    /**
     * Gets the trigger period type of #ICalProperty.
     */
    get_trigger(): Trigger
    /**
     * Gets the tzid of #ICalProperty.
     */
    get_tzid(): string
    /**
     * Gets the tzidaliasof of #ICalProperty.
     */
    get_tzidaliasof(): string
    /**
     * Gets the tzname of #ICalProperty.
     */
    get_tzname(): string
    /**
     * Gets the tzoffsetfrom of #ICalProperty.
     */
    get_tzoffsetfrom(): number
    /**
     * Gets the tzoffsetto of #ICalProperty.
     */
    get_tzoffsetto(): number
    /**
     * Gets the tzuntil time of #ICalProperty.
     */
    get_tzuntil(): Time
    /**
     * Gets the tzurl of #ICalProperty.
     */
    get_tzurl(): string
    /**
     * Gets the uid of #ICalProperty.
     */
    get_uid(): string
    /**
     * Gets the url of #ICalProperty.
     */
    get_url(): string
    /**
     * Gets the #ICalValue of #ICalProperty.
     */
    get_value(): Value
    /**
     * Gets the string representation of the value in #ICalProperty.
     */
    get_value_as_string(): string
    /**
     * Gets the version of #ICalProperty.
     */
    get_version(): string
    /**
     * Gets the voter of #ICalProperty.
     */
    get_voter(): string
    /**
     * Gets the x of #ICalProperty.
     */
    get_x(): string
    /**
     * Gets the name of x property.
     */
    get_x_name(): string | null
    /**
     * Gets the xlicclass of #ICalProperty.
     */
    get_xlicclass(): PropertyXlicclass
    /**
     * Gets the xlicclustercount of #ICalProperty.
     */
    get_xlicclustercount(): string
    /**
     * Gets the xlicerror of #ICalProperty.
     */
    get_xlicerror(): string
    /**
     * Gets the xlicmimecharset of #ICalProperty.
     */
    get_xlicmimecharset(): string
    /**
     * Gets the xlicmimecid of #ICalProperty.
     */
    get_xlicmimecid(): string
    /**
     * Gets the xlicmimecontenttype of #ICalProperty.
     */
    get_xlicmimecontenttype(): string
    /**
     * Gets the xlicmimeencoding of #ICalProperty.
     */
    get_xlicmimeencoding(): string
    /**
     * Gets the xlicmimefilename of #ICalProperty.
     */
    get_xlicmimefilename(): string
    /**
     * Gets the xlicmimeoptinfo of #ICalProperty.
     */
    get_xlicmimeoptinfo(): string
    /**
     * Gets the kind of #ICalProperty.
     */
    isa(): PropertyKind
    /**
     * Checks whether the native part of #ICalProperty is of the type icalproperty.
     */
    isa_property(): number
    /**
     * Removes the target kind of the parameters in the #ICalProperty.
     * @param kind The #ICalParameterKind to be removed
     */
    remove_parameter_by_kind(kind: ParameterKind): void
    /**
     * Removes parameter in the #ICalProperty by name.
     * @param name The name of the parameter to be removed
     */
    remove_parameter_by_name(name: string): void
    /**
     * Removes the parameter in the #ICalProperty by ref.
     * @param param The #ICalParameter to be removed
     */
    remove_parameter_by_ref(param: Parameter): void
    /**
     * Sets the acceptresponse for the #ICalProperty.
     * @param v The acceptresponse
     */
    set_acceptresponse(v: string): void
    /**
     * Sets the acknowledged time for the #ICalProperty.
     * @param v The acknowledgement time
     */
    set_acknowledged(v: Time): void
    /**
     * Sets the action for the #ICalProperty.
     * @param v The action
     */
    set_action(v: PropertyAction): void
    /**
     * Sets the allowconflict for the #ICalProperty.
     * @param v The allowconflict
     */
    set_allowconflict(v: string): void
    /**
     * Sets the attach for the #ICalProperty.
     * @param v The attach
     */
    set_attach(v: Attach): void
    /**
     * Sets the attendee for the #ICalProperty.
     * @param v The attendee
     */
    set_attendee(v: string): void
    /**
     * Sets the busytype for the #ICalProperty.
     * @param v The busytype
     */
    set_busytype(v: PropertyBusytype): void
    /**
     * Sets the calid for the #ICalProperty.
     * @param v The calid
     */
    set_calid(v: string): void
    /**
     * Sets the calmaster for the #ICalProperty.
     * @param v The calmaster
     */
    set_calmaster(v: string): void
    /**
     * Sets the calscale for the #ICalProperty.
     * @param v The calscale
     */
    set_calscale(v: string): void
    /**
     * Sets the capversion for the #ICalProperty.
     * @param v The capversion
     */
    set_capversion(v: string): void
    /**
     * Sets the carid for the #ICalProperty.
     * @param v The carid
     */
    set_carid(v: string): void
    /**
     * Sets the carlevel for the #ICalProperty.
     * @param v The carlevel
     */
    set_carlevel(v: PropertyCarlevel): void
    /**
     * Sets the categories for the #ICalProperty.
     * @param v The categories
     */
    set_categories(v: string): void
    /**
     * Sets the class for the #ICalProperty.
     * @param v The class
     */
    set_class(v: Property_Class): void
    /**
     * Sets the cmd for the #ICalProperty.
     * @param v The cmd
     */
    set_cmd(v: PropertyCmd): void
    /**
     * Sets the color for the `prop`.
     * @param v The color
     */
    set_color(v: string): void
    /**
     * Sets the comment for the #ICalProperty.
     * @param v The comment
     */
    set_comment(v: string): void
    /**
     * Sets the completed time for the #ICalProperty.
     * @param v The completed time
     */
    set_completed(v: Time): void
    /**
     * Sets the components for the #ICalProperty.
     * @param v The components
     */
    set_components(v: string): void
    /**
     * Sets the contact for the #ICalProperty.
     * @param v The contact
     */
    set_contact(v: string): void
    /**
     * Sets the created time for the #ICalProperty.
     * @param v The created time
     */
    set_created(v: Time): void
    /**
     * Sets the csid for the #ICalProperty.
     * @param v The csid
     */
    set_csid(v: string): void
    /**
     * Sets the datemax time for the #ICalProperty.
     * @param v The datemax time
     */
    set_datemax(v: Time): void
    /**
     * Sets the datemin time for the #ICalProperty.
     * @param v The datemin time
     */
    set_datemin(v: Time): void
    /**
     * Sets the decreed for the #ICalProperty.
     * @param v The decreed
     */
    set_decreed(v: string): void
    /**
     * Sets the defaultcharset for the #ICalProperty.
     * @param v The defaultcharset
     */
    set_defaultcharset(v: string): void
    /**
     * Sets the defaultlocale for the #ICalProperty.
     * @param v The defaultlocale
     */
    set_defaultlocale(v: string): void
    /**
     * Sets the defaulttzid for the #ICalProperty.
     * @param v The defaulttzid
     */
    set_defaulttzid(v: string): void
    /**
     * Sets the defaultvcars for the #ICalProperty.
     * @param v The defaultvcars
     */
    set_defaultvcars(v: string): void
    /**
     * Sets the deny for the #ICalProperty.
     * @param v The deny
     */
    set_deny(v: string): void
    /**
     * Sets the description for the #ICalProperty.
     * @param v The description
     */
    set_description(v: string): void
    /**
     * Sets the dtend time for the #ICalProperty.
     * @param v The dtend time
     */
    set_dtend(v: Time): void
    /**
     * Sets the dtstamp time for the #ICalProperty.
     * @param v The dtstamp time
     */
    set_dtstamp(v: Time): void
    /**
     * Sets the dtstart time for the #ICalProperty.
     * @param v The dtstart time
     */
    set_dtstart(v: Time): void
    /**
     * Sets the due time for the #ICalProperty.
     * @param v The due time
     */
    set_due(v: Time): void
    /**
     * Sets the duration for the #ICalProperty.
     * @param v The duration
     */
    set_duration(v: Duration): void
    /**
     * Sets the estimatedduration for the #ICalProperty.
     * @param v The estimatedduration
     */
    set_estimatedduration(v: Duration): void
    /**
     * Sets the exdate time for the #ICalProperty.
     * @param v The exdate time
     */
    set_exdate(v: Time): void
    /**
     * Sets the expand for the #ICalProperty.
     * @param v The expand
     */
    set_expand(v: number): void
    /**
     * Sets the exrule time for the #ICalProperty.
     * @param v The exrule recurrence type
     */
    set_exrule(v: Recurrence): void
    /**
     * Sets the freebusy time for the #ICalProperty.
     * @param v The freebusy period type
     */
    set_freebusy(v: Period): void
    /**
     * Sets the geo for the #ICalProperty.
     * @param v The geo type
     */
    set_geo(v: Geo): void
    /**
     * Sets the grant for the #ICalProperty.
     * @param v The grant
     */
    set_grant(v: string): void
    /**
     * Sets the itipversion for the #ICalProperty.
     * @param v The itipversion
     */
    set_itipversion(v: string): void
    /**
     * Sets the lastmodified time for the #ICalProperty.
     * @param v The lastmodified time
     */
    set_lastmodified(v: Time): void
    /**
     * Sets the location for the #ICalProperty.
     * @param v The location
     */
    set_location(v: string): void
    /**
     * Sets the maxcomponentsize for the #ICalProperty.
     * @param v The maxcomponentsize
     */
    set_maxcomponentsize(v: number): void
    /**
     * Sets the maxdate time for the #ICalProperty.
     * @param v The maxdate time
     */
    set_maxdate(v: Time): void
    /**
     * Sets the maxresults for the #ICalProperty.
     * @param v The maxresults
     */
    set_maxresults(v: number): void
    /**
     * Sets the maxresultssize for the #ICalProperty.
     * @param v The maxresultssize
     */
    set_maxresultssize(v: number): void
    /**
     * Sets the method for the #ICalProperty.
     * @param v The method
     */
    set_method(v: PropertyMethod): void
    /**
     * Sets the mindate time for the #ICalProperty.
     * @param v The mindate time
     */
    set_mindate(v: Time): void
    /**
     * Sets the multipart for the #ICalProperty.
     * @param v The multipart
     */
    set_multipart(v: string): void
    /**
     * Sets the name for the #ICalProperty.
     * @param v The name
     */
    set_name(v: string): void
    /**
     * Sets the organizer for the #ICalProperty.
     * @param v The organizer
     */
    set_organizer(v: string): void
    /**
     * Sets the owner for the #ICalProperty.
     * @param v The owner
     */
    set_owner(v: string): void

    // Overloads of set_owner

    /**
     * Sets an owner of the native libical structure, that is an object responsible
     * for a destroy of the native libical structure.
     * @param owner Owner of the native libical structure
     */
    set_owner(owner: GObject.Object): void
    set_owner(...args: any[]): any
    set_owner(args_or_owner: any[] | GObject.Object): void | any
    /**
     * Sets a #ICalParameter into the #ICalProperty. It behaves like set the copy of the #ICalParameter. Upon
     * completion the native part of #ICalParameter will be set to NULL.
     * @param parameter The parameter to be set into `prop`
     */
    set_parameter(parameter: Parameter): void
    /**
     * Sets the #ICalProperty with the parameter defined by the name and value.
     * @param name The name of the parameter
     * @param value The value of the parameter
     */
    set_parameter_from_string(name: string, value: string): void
    /**
     * Sets the parent #ICalComponent of the specified #ICalProperty.
     * @param component An #ICalComponent
     */
    set_parent(component: Component | null): void
    /**
     * Sets the percentcomplete for the #ICalProperty.
     * @param v The percentcomplete
     */
    set_percentcomplete(v: number): void
    /**
     * Sets the permission for the #ICalProperty.
     * @param v The permission
     */
    set_permission(v: string): void
    /**
     * Sets the pollcompletion for the #ICalProperty.
     * @param v The pollcompletion
     */
    set_pollcompletion(v: PropertyPollcompletion): void
    /**
     * Sets the pollitemid for the #ICalProperty.
     * @param v The pollitemid
     */
    set_pollitemid(v: number): void
    /**
     * Sets the pollmode for the #ICalProperty.
     * @param v The pollmode
     */
    set_pollmode(v: PropertyPollmode): void
    /**
     * Sets the pollproperties for the #ICalProperty.
     * @param v The pollproperties
     */
    set_pollproperties(v: string): void
    /**
     * Sets the pollwinner for the #ICalProperty.
     * @param v The pollwinner
     */
    set_pollwinner(v: number): void
    /**
     * Sets the priority for the #ICalProperty.
     * @param v The priority
     */
    set_priority(v: number): void
    /**
     * Sets the prodid for the #ICalProperty.
     * @param v The prodid
     */
    set_prodid(v: string): void
    /**
     * Sets the query for the #ICalProperty.
     * @param v The query
     */
    set_query(v: string): void
    /**
     * Sets the queryid for the #ICalProperty.
     * @param v The queryid
     */
    set_queryid(v: string): void
    /**
     * Sets the querylevel for the #ICalProperty.
     * @param v The querylevel
     */
    set_querylevel(v: PropertyQuerylevel): void
    /**
     * Sets the queryname for the #ICalProperty.
     * @param v The queryname
     */
    set_queryname(v: string): void
    /**
     * Sets the rdate for the #ICalProperty.
     * @param v The rdate
     */
    set_rdate(v: Datetimeperiod): void
    /**
     * Sets the recuraccepted for the #ICalProperty.
     * @param v The recuraccepted
     */
    set_recuraccepted(v: string): void
    /**
     * Sets the recurexpand for the #ICalProperty.
     * @param v The recurexpand
     */
    set_recurexpand(v: string): void
    /**
     * Sets the recurlimit for the #ICalProperty.
     * @param v The recurlimit
     */
    set_recurlimit(v: string): void
    /**
     * Sets the recurrenceid time for the #ICalProperty.
     * @param v The recurrenceid time
     */
    set_recurrenceid(v: Time): void
    /**
     * Sets the relatedto for the #ICalProperty.
     * @param v The relatedto
     */
    set_relatedto(v: string): void
    /**
     * Sets the relcalid for the #ICalProperty.
     * @param v The relcalid
     */
    set_relcalid(v: string): void
    /**
     * Sets the repeat for the #ICalProperty.
     * @param v The repeat
     */
    set_repeat(v: number): void
    /**
     * Sets the replyurl for the #ICalProperty.
     * @param v The replyurl
     */
    set_replyurl(v: string): void
    /**
     * Sets the requeststatus for the #ICalProperty.
     * @param v The requeststatus
     */
    set_requeststatus(v: Reqstat): void
    /**
     * Sets the resources for the #ICalProperty.
     * @param v The resources
     */
    set_resources(v: string): void
    /**
     * Sets the response for the #ICalProperty.
     * @param v The response
     */
    set_response(v: number): void
    /**
     * Sets the restriction for the #ICalProperty.
     * @param v The restriction
     */
    set_restriction(v: string): void
    /**
     * Sets the rrule for the #ICalProperty.
     * @param v The rrule recurrence type
     */
    set_rrule(v: Recurrence): void
    /**
     * Sets the scope for the #ICalProperty.
     * @param v The scope
     */
    set_scope(v: string): void
    /**
     * Sets the sequence for the #ICalProperty.
     * @param v The sequence
     */
    set_sequence(v: number): void
    /**
     * Sets the status for the #ICalProperty.
     * @param v The status
     */
    set_status(v: PropertyStatus): void
    /**
     * Sets the storesexpanded for the #ICalProperty.
     * @param v The storesexpanded
     */
    set_storesexpanded(v: string): void
    /**
     * Sets the summary for the #ICalProperty.
     * @param v The summary
     */
    set_summary(v: string): void
    /**
     * Sets the target for the #ICalProperty.
     * @param v The target
     */
    set_target(v: string): void
    /**
     * Sets the taskmode for the #ICalProperty.
     * @param v The taskmode
     */
    set_taskmode(v: PropertyTaskmode): void
    /**
     * Sets the transp for the #ICalProperty.
     * @param v The transp
     */
    set_transp(v: PropertyTransp): void
    /**
     * Sets the trigger time for the #ICalProperty.
     * @param v The trigger period type
     */
    set_trigger(v: Trigger): void
    /**
     * Sets the tzid for the #ICalProperty.
     * @param v The tzid
     */
    set_tzid(v: string): void
    /**
     * Sets the tzidaliasof for the #ICalProperty.
     * @param v The tzidaliasof
     */
    set_tzidaliasof(v: string): void
    /**
     * Sets the tzname for the #ICalProperty.
     * @param v The tzname
     */
    set_tzname(v: string): void
    /**
     * Sets the tzoffsetfrom for the #ICalProperty.
     * @param v The tzoffsetfrom
     */
    set_tzoffsetfrom(v: number): void
    /**
     * Sets the tzoffsetto for the #ICalProperty.
     * @param v The tzoffsetto
     */
    set_tzoffsetto(v: number): void
    /**
     * Sets the tzuntil time for the #ICalProperty.
     * @param v The acknowledgement time
     */
    set_tzuntil(v: Time): void
    /**
     * Sets the tzurl for the #ICalProperty.
     * @param v The tzurl
     */
    set_tzurl(v: string): void
    /**
     * Sets the uid for the #ICalProperty.
     * @param v The uid
     */
    set_uid(v: string): void
    /**
     * Sets the url for the #ICalProperty.
     * @param v The url
     */
    set_url(v: string): void
    /**
     * Sets the #ICalProperty with the #ICalValue.
     * @param value The #ICalValue will be set as the property of `prop`
     */
    set_value(value: Value): void
    /**
     * Sets the #ICalProperty with the #ICalValue constructed from string.
     * @param value The value used to construct the #ICalValue
     * @param kind The kind used to construct the #ICalValue
     */
    set_value_from_string(value: string, kind: string): void
    /**
     * Sets the version for the #ICalProperty.
     * @param v The version
     */
    set_version(v: string): void
    /**
     * Sets the voter for the #ICalProperty.
     * @param v The voter
     */
    set_voter(v: string): void
    /**
     * Sets the x for the #ICalProperty.
     * @param v The x
     */
    set_x(v: string): void
    /**
     * Sets the name of x property for the #ICalProperty.
     * @param name The name string
     */
    set_x_name(name: string): void
    /**
     * Sets the xlicclass for the #ICalProperty.
     * @param v The xlicclass
     */
    set_xlicclass(v: PropertyXlicclass): void
    /**
     * Sets the xlicclustercount for the #ICalProperty.
     * @param v The xlicclustercount
     */
    set_xlicclustercount(v: string): void
    /**
     * Sets the xlicerror for the #ICalProperty.
     * @param v The xlicerror
     */
    set_xlicerror(v: string): void
    /**
     * Sets the xlicmimecharset for the #ICalProperty.
     * @param v The xlicmimecharset
     */
    set_xlicmimecharset(v: string): void
    /**
     * Sets the xlicmimecid for the #ICalProperty.
     * @param v The xlicmimecid
     */
    set_xlicmimecid(v: string): void
    /**
     * Sets the xlicmimecontenttype for the #ICalProperty.
     * @param v The xlicmimecontenttype
     */
    set_xlicmimecontenttype(v: string): void
    /**
     * Sets the xlicmimeencoding for the #ICalProperty.
     * @param v The xlicmimeencoding
     */
    set_xlicmimeencoding(v: string): void
    /**
     * Sets the xlicmimefilename for the #ICalProperty.
     * @param v The xlicmimefilename
     */
    set_xlicmimefilename(v: string): void
    /**
     * Sets the xlicmimeoptinfo for the #ICalProperty.
     * @param v The xlicmimeoptinfo
     */
    set_xlicmimeoptinfo(v: string): void

    // Class property signals of ICalGLib-3.0.ICalGLib.Property

    connect(sigName: "notify::always-destroy", callback: (($obj: Property, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::always-destroy", callback: (($obj: Property, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::always-destroy", ...args: any[]): void
    connect(sigName: "notify::is-global-memory", callback: (($obj: Property, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-global-memory", callback: (($obj: Property, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::is-global-memory", ...args: any[]): void
    connect(sigName: "notify::native", callback: (($obj: Property, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::native", callback: (($obj: Property, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::native", ...args: any[]): void
    connect(sigName: "notify::native-destroy-func", callback: (($obj: Property, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::native-destroy-func", callback: (($obj: Property, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::native-destroy-func", ...args: any[]): void
    connect(sigName: "notify::owner", callback: (($obj: Property, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::owner", callback: (($obj: Property, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::owner", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * This is the ICalProperty instance.
 * @class 
 */
class Property extends Object {

    // Own properties of ICalGLib-3.0.ICalGLib.Property

    static name: string
    static $gtype: GObject.GType<Property>

    // Constructors of ICalGLib-3.0.ICalGLib.Property

    constructor(config?: Property_ConstructProps) 
    /**
     * Creates a #ICalProperty of the target type.
     * @constructor 
     * @param kind The kind of #ICalProperty to be created
     */
    constructor(kind: PropertyKind) 
    /**
     * Creates a #ICalProperty of the target type.
     * @constructor 
     * @param kind The kind of #ICalProperty to be created
     */
    static new(kind: PropertyKind): Property
    /**
     * Creates a new #ICalProperty.
     * @constructor 
     * @param v The acceptresponse
     */
    static new_acceptresponse(v: string): Property
    /**
     * Creates a new #ICalProperty.
     * @constructor 
     * @param v The time of acknowledgement
     */
    static new_acknowledged(v: Time): Property
    /**
     * Creates a new #ICalProperty.
     * @constructor 
     * @param v The action
     */
    static new_action(v: PropertyAction): Property
    /**
     * Creates a new #ICalProperty.
     * @constructor 
     * @param v The allowconflict
     */
    static new_allowconflict(v: string): Property
    /**
     * Creates a new #ICalProperty.
     * @constructor 
     * @param v The #ICalAttach
     */
    static new_attach(v: Attach): Property
    /**
     * Creates a new #ICalProperty.
     * @constructor 
     * @param v The attendee
     */
    static new_attendee(v: string): Property
    /**
     * Creates a new #ICalProperty.
     * @constructor 
     * @param v The busytype
     */
    static new_busytype(v: PropertyBusytype): Property
    /**
     * Creates a new #ICalProperty.
     * @constructor 
     * @param v The calid
     */
    static new_calid(v: string): Property
    /**
     * Creates a new #ICalProperty.
     * @constructor 
     * @param v The calmaster
     */
    static new_calmaster(v: string): Property
    /**
     * Creates a new #ICalProperty.
     * @constructor 
     * @param v The calscale
     */
    static new_calscale(v: string): Property
    /**
     * Creates a new #ICalProperty.
     * @constructor 
     * @param v The capversion
     */
    static new_capversion(v: string): Property
    /**
     * Creates a new #ICalProperty.
     * @constructor 
     * @param v The carid
     */
    static new_carid(v: string): Property
    /**
     * Creates a new #ICalProperty.
     * @constructor 
     * @param v The carlevel
     */
    static new_carlevel(v: PropertyCarlevel): Property
    /**
     * Creates a new #ICalProperty.
     * @constructor 
     * @param v The categories
     */
    static new_categories(v: string): Property
    /**
     * Creates a new #ICalProperty.
     * @constructor 
     * @param v The class
     */
    static new_class(v: Property_Class): Property
    /**
     * Creates a new #ICalProperty.
     * @constructor 
     * @param v The cmd
     */
    static new_cmd(v: PropertyCmd): Property
    /**
     * Creates a new color #ICalProperty.
     * @constructor 
     * @param v The color
     */
    static new_color(v: string): Property
    /**
     * Creates a new #ICalProperty.
     * @constructor 
     * @param v The comment
     */
    static new_comment(v: string): Property
    /**
     * Creates a new #ICalProperty.
     * @constructor 
     * @param v The time of completed
     */
    static new_completed(v: Time): Property
    /**
     * Creates a new #ICalProperty.
     * @constructor 
     * @param v The components
     */
    static new_components(v: string): Property
    /**
     * Creates a new #ICalProperty.
     * @constructor 
     * @param v The contact
     */
    static new_contact(v: string): Property
    /**
     * Creates a new #ICalProperty.
     * @constructor 
     * @param v The time of created
     */
    static new_created(v: Time): Property
    /**
     * Creates a new #ICalProperty.
     * @constructor 
     * @param v The csid
     */
    static new_csid(v: string): Property
    /**
     * Creates a new #ICalProperty.
     * @constructor 
     * @param v The time of datemax
     */
    static new_datemax(v: Time): Property
    /**
     * Creates a new #ICalProperty.
     * @constructor 
     * @param v The time of datemin
     */
    static new_datemin(v: Time): Property
    /**
     * Creates a new #ICalProperty.
     * @constructor 
     * @param v The decreed
     */
    static new_decreed(v: string): Property
    /**
     * Creates a new #ICalProperty.
     * @constructor 
     * @param v The defaultcharset
     */
    static new_defaultcharset(v: string): Property
    /**
     * Creates a new #ICalProperty.
     * @constructor 
     * @param v The defaultlocale
     */
    static new_defaultlocale(v: string): Property
    /**
     * Creates a new #ICalProperty.
     * @constructor 
     * @param v The defaulttzid
     */
    static new_defaulttzid(v: string): Property
    /**
     * Creates a new #ICalProperty.
     * @constructor 
     * @param v The defaultvcars
     */
    static new_defaultvcars(v: string): Property
    /**
     * Creates a new #ICalProperty.
     * @constructor 
     * @param v The deny
     */
    static new_deny(v: string): Property
    /**
     * Creates a new #ICalProperty.
     * @constructor 
     * @param v The description
     */
    static new_description(v: string): Property
    /**
     * Creates a new #ICalProperty.
     * @constructor 
     * @param v The time of dtend
     */
    static new_dtend(v: Time): Property
    /**
     * Creates a new #ICalProperty.
     * @constructor 
     * @param v The time of dtstamp
     */
    static new_dtstamp(v: Time): Property
    /**
     * Creates a new #ICalProperty.
     * @constructor 
     * @param v The time of dtstart
     */
    static new_dtstart(v: Time): Property
    /**
     * Creates a new #ICalProperty.
     * @constructor 
     * @param v The time of due
     */
    static new_due(v: Time): Property
    /**
     * Creates a new #ICalProperty.
     * @constructor 
     * @param v The duration
     */
    static new_duration(v: Duration): Property
    /**
     * Creates a new #ICalProperty.
     * @constructor 
     * @param v The estimatedduration
     */
    static new_estimatedduration(v: Duration): Property
    /**
     * Creates a new #ICalProperty.
     * @constructor 
     * @param v The time of exdate
     */
    static new_exdate(v: Time): Property
    /**
     * Creates a new #ICalProperty.
     * @constructor 
     * @param v The expand
     */
    static new_expand(v: number): Property
    /**
     * Creates a new #ICalProperty.
     * @constructor 
     * @param v The exrule recurrence type
     */
    static new_exrule(v: Recurrence): Property
    /**
     * Creates a new #ICalProperty.
     * @constructor 
     * @param v The freebusy period type
     */
    static new_freebusy(v: Period): Property
    /**
     * Creates a #ICalProperty from a string.
     * @constructor 
     * @param str The string used to construct a #ICalProperty
     */
    static new_from_string(str: string): Property
    /**
     * Creates a new #ICalProperty.
     * @constructor 
     * @param v The geo type
     */
    static new_geo(v: Geo): Property
    /**
     * Creates a new #ICalProperty.
     * @constructor 
     * @param v The grant
     */
    static new_grant(v: string): Property
    /**
     * Creates a new #ICalProperty.
     * @constructor 
     * @param v The itipversion
     */
    static new_itipversion(v: string): Property
    /**
     * Creates a new #ICalProperty.
     * @constructor 
     * @param v The time of lastmodified
     */
    static new_lastmodified(v: Time): Property
    /**
     * Creates a new #ICalProperty.
     * @constructor 
     * @param v The location
     */
    static new_location(v: string): Property
    /**
     * Creates a new #ICalProperty.
     * @constructor 
     * @param v The maxcomponentsize
     */
    static new_maxcomponentsize(v: number): Property
    /**
     * Creates a new #ICalProperty.
     * @constructor 
     * @param v The time of maxdate
     */
    static new_maxdate(v: Time): Property
    /**
     * Creates a new #ICalProperty.
     * @constructor 
     * @param v The maxresults
     */
    static new_maxresults(v: number): Property
    /**
     * Creates a new #ICalProperty.
     * @constructor 
     * @param v The maxresultssize
     */
    static new_maxresultssize(v: number): Property
    /**
     * Creates a new #ICalProperty.
     * @constructor 
     * @param v The method
     */
    static new_method(v: PropertyMethod): Property
    /**
     * Creates a new #ICalProperty.
     * @constructor 
     * @param v The time of mindate
     */
    static new_mindate(v: Time): Property
    /**
     * Creates a new #ICalProperty.
     * @constructor 
     * @param v The multipart
     */
    static new_multipart(v: string): Property
    /**
     * Creates a new #ICalProperty.
     * @constructor 
     * @param v The name
     */
    static new_name(v: string): Property
    /**
     * Creates a new #ICalProperty.
     * @constructor 
     * @param v The organizer
     */
    static new_organizer(v: string): Property
    /**
     * Creates a new #ICalProperty.
     * @constructor 
     * @param v The owner
     */
    static new_owner(v: string): Property
    /**
     * Creates a new #ICalProperty.
     * @constructor 
     * @param v The percentcomplete
     */
    static new_percentcomplete(v: number): Property
    /**
     * Creates a new #ICalProperty.
     * @constructor 
     * @param v The permission
     */
    static new_permission(v: string): Property
    /**
     * Creates a new #ICalProperty.
     * @constructor 
     * @param v The pollcompletion
     */
    static new_pollcompletion(v: PropertyPollcompletion): Property
    /**
     * Creates a new #ICalProperty.
     * @constructor 
     * @param v The pollitemid
     */
    static new_pollitemid(v: number): Property
    /**
     * Creates a new #ICalProperty.
     * @constructor 
     * @param v The pollmode
     */
    static new_pollmode(v: PropertyPollmode): Property
    /**
     * Creates a new #ICalProperty.
     * @constructor 
     * @param v The pollproperties
     */
    static new_pollproperties(v: string): Property
    /**
     * Creates a new #ICalProperty.
     * @constructor 
     * @param v The pollwinner
     */
    static new_pollwinner(v: number): Property
    /**
     * Creates a new #ICalProperty.
     * @constructor 
     * @param v The priority
     */
    static new_priority(v: number): Property
    /**
     * Creates a new #ICalProperty.
     * @constructor 
     * @param v The prodid
     */
    static new_prodid(v: string): Property
    /**
     * Creates a new #ICalProperty.
     * @constructor 
     * @param v The query
     */
    static new_query(v: string): Property
    /**
     * Creates a new #ICalProperty.
     * @constructor 
     * @param v The queryid
     */
    static new_queryid(v: string): Property
    /**
     * Creates a new #ICalProperty.
     * @constructor 
     * @param v The querylevel
     */
    static new_querylevel(v: PropertyQuerylevel): Property
    /**
     * Creates a new #ICalProperty.
     * @constructor 
     * @param v The queryname
     */
    static new_queryname(v: string): Property
    /**
     * Creates a new #ICalProperty.
     * @constructor 
     * @param v The rdate
     */
    static new_rdate(v: Datetimeperiod): Property
    /**
     * Creates a new #ICalProperty.
     * @constructor 
     * @param v The recuraccepted
     */
    static new_recuraccepted(v: string): Property
    /**
     * Creates a new #ICalProperty.
     * @constructor 
     * @param v The recurexpand
     */
    static new_recurexpand(v: string): Property
    /**
     * Creates a new #ICalProperty.
     * @constructor 
     * @param v The recurlimit
     */
    static new_recurlimit(v: string): Property
    /**
     * Creates a new #ICalProperty.
     * @constructor 
     * @param v The time of recurrenceid
     */
    static new_recurrenceid(v: Time): Property
    /**
     * Creates a new #ICalProperty.
     * @constructor 
     * @param v The relatedto
     */
    static new_relatedto(v: string): Property
    /**
     * Creates a new #ICalProperty.
     * @constructor 
     * @param v The relcalid
     */
    static new_relcalid(v: string): Property
    /**
     * Creates a new #ICalProperty.
     * @constructor 
     * @param v The repeat
     */
    static new_repeat(v: number): Property
    /**
     * Creates a new #ICalProperty.
     * @constructor 
     * @param v The replyurl
     */
    static new_replyurl(v: string): Property
    /**
     * Creates a new #ICalProperty.
     * @constructor 
     * @param v The requeststatus
     */
    static new_requeststatus(v: Reqstat): Property
    /**
     * Creates a new #ICalProperty.
     * @constructor 
     * @param v The resources
     */
    static new_resources(v: string): Property
    /**
     * Creates a new #ICalProperty.
     * @constructor 
     * @param v The response
     */
    static new_response(v: number): Property
    /**
     * Creates a new #ICalProperty.
     * @constructor 
     * @param v The restriction
     */
    static new_restriction(v: string): Property
    /**
     * Creates a new #ICalProperty.
     * @constructor 
     * @param v The rrule recurrence type
     */
    static new_rrule(v: Recurrence): Property
    /**
     * Creates a new #ICalProperty.
     * @constructor 
     * @param v The scope
     */
    static new_scope(v: string): Property
    /**
     * Creates a new #ICalProperty.
     * @constructor 
     * @param v The sequence
     */
    static new_sequence(v: number): Property
    /**
     * Creates a new #ICalProperty.
     * @constructor 
     * @param v The status
     */
    static new_status(v: PropertyStatus): Property
    /**
     * Creates a new #ICalProperty.
     * @constructor 
     * @param v The storesexpanded
     */
    static new_storesexpanded(v: string): Property
    /**
     * Creates a new #ICalProperty.
     * @constructor 
     * @param v The summary
     */
    static new_summary(v: string): Property
    /**
     * Creates a new #ICalProperty.
     * @constructor 
     * @param v The target
     */
    static new_target(v: string): Property
    /**
     * Creates a new #ICalProperty.
     * @constructor 
     * @param v The taskmode
     */
    static new_taskmode(v: PropertyTaskmode): Property
    /**
     * Creates a new #ICalProperty.
     * @constructor 
     * @param v The transp
     */
    static new_transp(v: PropertyTransp): Property
    /**
     * Creates a new #ICalProperty.
     * @constructor 
     * @param v The trigger period type
     */
    static new_trigger(v: Trigger): Property
    /**
     * Creates a new #ICalProperty.
     * @constructor 
     * @param v The tzid
     */
    static new_tzid(v: string): Property
    /**
     * Creates a new #ICalProperty.
     * @constructor 
     * @param v The tzidaliasof
     */
    static new_tzidaliasof(v: string): Property
    /**
     * Creates a new #ICalProperty.
     * @constructor 
     * @param v The tzname
     */
    static new_tzname(v: string): Property
    /**
     * Creates a new #ICalProperty.
     * @constructor 
     * @param v The tzoffsetfrom
     */
    static new_tzoffsetfrom(v: number): Property
    /**
     * Creates a new #ICalProperty.
     * @constructor 
     * @param v The tzoffsetto
     */
    static new_tzoffsetto(v: number): Property
    /**
     * Creates a new #ICalProperty.
     * @constructor 
     * @param v The time of acknowledgement
     */
    static new_tzuntil(v: Time): Property
    /**
     * Creates a new #ICalProperty.
     * @constructor 
     * @param v The tzurl
     */
    static new_tzurl(v: string): Property
    /**
     * Creates a new #ICalProperty.
     * @constructor 
     * @param v The uid
     */
    static new_uid(v: string): Property
    /**
     * Creates a new #ICalProperty.
     * @constructor 
     * @param v The url
     */
    static new_url(v: string): Property
    /**
     * Creates a new #ICalProperty.
     * @constructor 
     * @param v The version
     */
    static new_version(v: string): Property
    /**
     * Creates a new #ICalProperty.
     * @constructor 
     * @param v The voter
     */
    static new_voter(v: string): Property
    /**
     * Creates a new #ICalProperty.
     * @constructor 
     * @param v The x
     */
    static new_x(v: string): Property
    /**
     * Creates a new #ICalProperty.
     * @constructor 
     * @param v The xlicclass
     */
    static new_xlicclass(v: PropertyXlicclass): Property
    /**
     * Creates a new #ICalProperty.
     * @constructor 
     * @param v The xlicclustercount
     */
    static new_xlicclustercount(v: string): Property
    /**
     * Creates a new #ICalProperty.
     * @constructor 
     * @param v The xlicerror
     */
    static new_xlicerror(v: string): Property
    /**
     * Creates a new #ICalProperty.
     * @constructor 
     * @param v The xlicmimecharset
     */
    static new_xlicmimecharset(v: string): Property
    /**
     * Creates a new #ICalProperty.
     * @constructor 
     * @param v The xlicmimecid
     */
    static new_xlicmimecid(v: string): Property
    /**
     * Creates a new #ICalProperty.
     * @constructor 
     * @param v The xlicmimecontenttype
     */
    static new_xlicmimecontenttype(v: string): Property
    /**
     * Creates a new #ICalProperty.
     * @constructor 
     * @param v The xlicmimeencoding
     */
    static new_xlicmimeencoding(v: string): Property
    /**
     * Creates a new #ICalProperty.
     * @constructor 
     * @param v The xlicmimefilename
     */
    static new_xlicmimefilename(v: string): Property
    /**
     * Creates a new #ICalProperty.
     * @constructor 
     * @param v The xlicmimeoptinfo
     */
    static new_xlicmimeoptinfo(v: string): Property
    _init(config?: Property_ConstructProps): void
    /**
     * Converts the enum to string.
     * @param e The enum to be converted
     */
    static enum_to_string(e: number): string
    /**
     * Converts a integer and string into an enum.
     * @param kind The kind
     * @param str A string
     */
    static kind_and_string_to_enum(kind: number, str: string): number
    /**
     * Converts the string to #ICalPropertyKind.
     * @param string A string representing #ICalPropertyKind
     */
    static kind_from_string(string: string): PropertyKind
    /**
     * Checks whether the enum belongs to the #ICalPropertyKind.
     * @param kind A #ICalPropertyKind
     * @param e The enum to be checked
     */
    static kind_has_property(kind: PropertyKind, e: number): number
    /**
     * Checks whether #ICalPropertyKind is valid.
     * @param kind The #ICalPropertyKind
     */
    static kind_is_valid(kind: PropertyKind): boolean
    /**
     * Converts the #ICalPropertyKind to a string.
     * @param kind A #ICalPropertyKind
     */
    static kind_to_string(kind: PropertyKind): string
    /**
     * Converts the #ICalPropertyKind to #ICalValueKind.
     * @param kind A #ICalPropertyKind
     */
    static kind_to_value_kind(kind: PropertyKind): ValueKind
    /**
     * Converts the string to #ICalPropertyKind.
     * @param str A string
     */
    static method_from_string(str: string): PropertyMethod
    /**
     * Converts the #ICalPropertyMethod to string.
     * @param method The #ICalPropertyMethod
     */
    static method_to_string(method: PropertyMethod): string
    /**
     * Decides if this recurrence is acceptable. This function decides if a specific recurrence value is excluded
     * by EXRULE or EXDATE properties.
     * @param comp A #ICalComponent
     * @param dtstart The base dtstart value for this component
     * @param recurtime The time to test against
     */
    static recurrence_is_excluded(comp: Component, dtstart: Time, recurtime: Time): boolean
    /**
     * Converts the string to #ICalPropertyKind.
     * @param str A string
     */
    static status_from_string(str: string): PropertyStatus
    /**
     * Converts the #ICalPropertyStatus to string.
     * @param method The #ICalPropertyStatus
     */
    static status_to_string(method: PropertyStatus): string
}

interface RecurIterator_ConstructProps extends Object_ConstructProps {
}

interface RecurIterator {

    // Owm methods of ICalGLib-3.0.ICalGLib.RecurIterator

    /**
     * Gets the next occurrence from an iterator.
     */
    next(): Time
    /**
     * Sets the date-time at which the iterator will start, where 'start' is a value between DTSTART and UNTIL.
     * Note:
     * CAN NOT be used with RRULEs that contain COUNT.
     * @param start The date-time to move the iterator to
     */
    set_start(start: Time): number

    // Class property signals of ICalGLib-3.0.ICalGLib.RecurIterator

    connect(sigName: "notify::always-destroy", callback: (($obj: RecurIterator, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::always-destroy", callback: (($obj: RecurIterator, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::always-destroy", ...args: any[]): void
    connect(sigName: "notify::is-global-memory", callback: (($obj: RecurIterator, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-global-memory", callback: (($obj: RecurIterator, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::is-global-memory", ...args: any[]): void
    connect(sigName: "notify::native", callback: (($obj: RecurIterator, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::native", callback: (($obj: RecurIterator, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::native", ...args: any[]): void
    connect(sigName: "notify::native-destroy-func", callback: (($obj: RecurIterator, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::native-destroy-func", callback: (($obj: RecurIterator, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::native-destroy-func", ...args: any[]): void
    connect(sigName: "notify::owner", callback: (($obj: RecurIterator, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::owner", callback: (($obj: RecurIterator, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::owner", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * This is the ICalRecurIterator instance.
 * @class 
 */
class RecurIterator extends Object {

    // Own properties of ICalGLib-3.0.ICalGLib.RecurIterator

    static name: string
    static $gtype: GObject.GType<RecurIterator>

    // Constructors of ICalGLib-3.0.ICalGLib.RecurIterator

    constructor(config?: RecurIterator_ConstructProps) 
    /**
     * Creates an #ICalRecurIterator.
     * @constructor 
     * @param rule The rule applied on the #ICalRecurIterator
     * @param dtstart The start time of the recurrence
     */
    constructor(rule: Recurrence, dtstart: Time) 
    /**
     * Creates an #ICalRecurIterator.
     * @constructor 
     * @param rule The rule applied on the #ICalRecurIterator
     * @param dtstart The start time of the recurrence
     */
    static new(rule: Recurrence, dtstart: Time): RecurIterator
    _init(config?: RecurIterator_ConstructProps): void
}

interface Recurrence_ConstructProps extends Object_ConstructProps {
}

interface Recurrence {

    // Owm methods of ICalGLib-3.0.ICalGLib.Recurrence

    /**
     * Resets an #ICalRecurrence.
     */
    clear(): void
    /**
     * Gets the by_day value at index `index`. The index should be less than %I_CAL_BY_DAY_SIZE.
     * @param index The index in by_day of #ICalRecurrence, less than %I_CAL_BY_DAY_SIZE
     */
    get_by_day(index: number): number
    /**
     * Gets the by_day array from #ICalRecurrence. The array size is I_CAL_BY_DAY_SIZE.
     */
    get_by_day_array(): number[]
    /**
     * Gets the by_hour value at index `index`. The index should be less than %I_CAL_BY_HOUR_SIZE.
     * @param index The index in by_hour of #ICalRecurrence, less than %I_CAL_BY_HOUR_SIZE
     */
    get_by_hour(index: number): number
    /**
     * Gets the by_hour array from #ICalRecurrence. The array size is I_CAL_BY_HOUR_SIZE.
     */
    get_by_hour_array(): number[]
    /**
     * Gets the by_minute value at index `index`. The index should be less than %I_CAL_BY_MINUTE_SIZE.
     * @param index The index in by_minute of #ICalRecurrence, less than %I_CAL_BY_MINUTE_SIZE
     */
    get_by_minute(index: number): number
    /**
     * Gets the by_minute array from #ICalRecurrence. The array size is I_CAL_BY_MINUTE_SIZE.
     */
    get_by_minute_array(): number[]
    /**
     * Gets the by_month value at index `index`. The index should be less than %I_CAL_BY_MONTH_SIZE.
     * @param index The index in by_month of #ICalRecurrence, less than %I_CAL_BY_MONTH_SIZE
     */
    get_by_month(index: number): number
    /**
     * Gets the by_month array from #ICalRecurrence. The array size is I_CAL_BY_MONTH_SIZE.
     */
    get_by_month_array(): number[]
    /**
     * Gets the by_month_day value at index `index`. The index should be less than %I_CAL_BY_MONTHDAY_SIZE.
     * @param index The index in by_month_day of #ICalRecurrence, less than %I_CAL_BY_MONTHDAY_SIZE
     */
    get_by_month_day(index: number): number
    /**
     * Gets the by_month_day array from #ICalRecurrence. The array size is I_CAL_BY_MONTHDAY_SIZE.
     */
    get_by_month_day_array(): number[]
    /**
     * Gets the by_second value at index `index`. The index should be less than %I_CAL_BY_SECOND_SIZE.
     * @param index The index in by_second of #ICalRecurrence, less than %I_CAL_BY_SECOND_SIZE
     */
    get_by_second(index: number): number
    /**
     * Gets the by_second array from #ICalRecurrence. The array size if I_CAL_BY_SECOND_SIZE.
     */
    get_by_second_array(): number[]
    /**
     * Gets the by_set_pos value at index `index`. The index should be less than %I_CAL_BY_SETPOS_SIZE.
     * @param index The index in by_set_pos of #ICalRecurrence, less than %I_CAL_BY_SETPOS_SIZE
     */
    get_by_set_pos(index: number): number
    /**
     * Gets the by_set_pos array from #ICalRecurrence. The array size is I_CAL_BY_SETPOS_SIZE.
     */
    get_by_set_pos_array(): number[]
    /**
     * Gets the by_week_no value at index `index`. The index should be less than %I_CAL_BY_WEEKNO_SIZE.
     * @param index The index in by_week_no of #ICalRecurrence, less than %I_CAL_BY_WEEKNO_SIZE
     */
    get_by_week_no(index: number): number
    /**
     * Gets the by_week_no array from #ICalRecurrence. The array size is I_CAL_BY_WEEKNO_SIZE.
     */
    get_by_week_no_array(): number[]
    /**
     * Gets the by_year_day value at index `index`. The index should be less than %I_CAL_BY_YEARDAY_SIZE.
     * @param index The index in by_year_day of #ICalRecurrence, less than %I_CAL_BY_YEARDAY_SIZE
     */
    get_by_year_day(index: number): number
    /**
     * Gets the by_year_day array from #ICalRecurrence. The array size is I_CAL_BY_YEARDAY_SIZE.
     */
    get_by_year_day_array(): number[]
    /**
     * Gets the count from #ICalRecurrence.
     */
    get_count(): number
    /**
     * Gets the freq from #ICalRecurrence.
     */
    get_freq(): RecurrenceFrequency
    /**
     * Gets the interval from #ICalRecurrence.
     */
    get_interval(): number
    /**
     * Gets the until from #ICalRecurrence.
     */
    get_until(): Time
    /**
     * Gets the week_start from #ICalRecurrence.
     */
    get_week_start(): RecurrenceWeekday
    /**
     * Sets the by_day array from #ICalRecurrence at the given index. The array size if I_CAL_BY_DAY_SIZE.
     * @param index The index in by_day of #ICalRecurrence
     * @param value The value to be set into by_day of #ICalRecurrence
     */
    set_by_day(index: number, value: number): void
    /**
     * Sets the by_day array in `recur` at once. The array size can be less than I_CAL_BY_DAY_SIZE. Shorter arrays
     * are terminated with I_CAL_RECURRENCE_ARRAY_MAX value, longer arrays are truncated.
     * @param values The array of values
     */
    set_by_day_array(values: number[]): void
    /**
     * Sets the by_hour array from #ICalRecurrence at the given index. The array size is I_CAL_BY_HOUR_SIZE.
     * @param index The index in by_hour of #ICalRecurrence
     * @param value The value to be set into by_hour of #ICalRecurrence
     */
    set_by_hour(index: number, value: number): void
    /**
     * Sets the by_hour array in `recur` at once. The array size can be less than I_CAL_BY_HOUR_SIZE. Shorter
     * arrays are terminated with I_CAL_RECURRENCE_ARRAY_MAX value, longer arrays are truncated.
     * @param values The array of values
     */
    set_by_hour_array(values: number[]): void
    /**
     * Sets the by_minute array from #ICalRecurrence at the given index. The array size is I_CAL_BY_MINUTE_SIZE.
     * @param index The index in by_minute of #ICalRecurrence
     * @param value The value to be set into by_minute of #ICalRecurrence
     */
    set_by_minute(index: number, value: number): void
    /**
     * Sets the by_minute array in `recur` at once. The array size can be less than I_CAL_BY_MINUTE_SIZE. Shorter
     * arrays are terminated with I_CAL_RECURRENCE_ARRAY_MAX value, longer arrays are truncated.
     * @param values The array of values
     */
    set_by_minute_array(values: number[]): void
    /**
     * Sets the by_month array from #ICalRecurrence at the given index. The array size is I_CAL_BY_MONTH_SIZE.
     * @param index The index in by_month of #ICalRecurrence
     * @param value The value to be set into by_month of #ICalRecurrence
     */
    set_by_month(index: number, value: number): void
    /**
     * Sets the by_month array in `recur` at once. The array size can be less than I_CAL_BY_MONTH_SIZE. Shorter
     * arrays are terminated with I_CAL_RECURRENCE_ARRAY_MAX value, longer arrays are truncated.
     * @param values The array of values
     */
    set_by_month_array(values: number[]): void
    /**
     * Sets the by_month_day array from #ICalRecurrence at the given index. The array size if I_CAL_BY_MONTHDAY_SIZE.
     * @param index The index in by_month_day of #ICalRecurrence
     * @param value The value to be set into by_month_day of #ICalRecurrence
     */
    set_by_month_day(index: number, value: number): void
    /**
     * Sets the by_month_day array in `recur` at once. The array size can be less than I_CAL_BY_MONTHDAY_SIZE.
     * Shorter arrays are terminated with I_CAL_RECURRENCE_ARRAY_MAX value, longer arrays are truncated.
     * @param values The array of values
     */
    set_by_month_day_array(values: number[]): void
    /**
     * Sets the by_second array from #ICalRecurrence at the given index. The array size is I_CAL_BY_SECOND_SIZE.
     * @param index The index in by_second of #ICalRecurrence, less than I_CAL_BY_SECOND_SIZE
     * @param value The value to be set into by_second of #ICalRecurrence
     */
    set_by_second(index: number, value: number): void
    /**
     * Sets the by_second array in `recur` at once. The array size can be less than I_CAL_BY_SECOND_SIZE. Shorter
     * arrays are terminated with I_CAL_RECURRENCE_ARRAY_MAX value, longer arrays are truncated.
     * @param values The array of values
     */
    set_by_second_array(values: number[]): void
    /**
     * Sets the by_set_pos array from #ICalRecurrence at the given index. The array size is I_CAL_BY_SETPOS_SIZE.
     * @param index The index in by_set_pos of #ICalRecurrence
     * @param value The value to be set into by_set_pos of #ICalRecurrence
     */
    set_by_set_pos(index: number, value: number): void
    /**
     * Sets the by_set_pos array in `recur` at once. The array size can be less than I_CAL_BY_SETPOS_SIZE. Shorter
     * arrays are terminated with I_CAL_RECURRENCE_ARRAY_MAX value, longer arrays are truncated.
     * @param values The array of values
     */
    set_by_set_pos_array(values: number[]): void
    /**
     * Sets the by_week_no array from #ICalRecurrence at the given index. The array size is I_CAL_BY_WEEKNO_SIZE.
     * @param index The index in by_week_no of #ICalRecurrence
     * @param value The value to be set into by_week_no of #ICalRecurrence
     */
    set_by_week_no(index: number, value: number): void
    /**
     * Sets the by_week_no array in `recur` at once. The array size can be less than I_CAL_BY_WEEKNO_SIZE. Shorter
     * arrays are terminated with I_CAL_RECURRENCE_ARRAY_MAX value, longer arrays are truncated.
     * @param values The array of values
     */
    set_by_week_no_array(values: number[]): void
    /**
     * Sets the by_year_day array from #ICalRecurrence at the given index. The array size if I_CAL_BY_YEARDAY_SIZE.
     * @param index The index in by_year_day of #ICalRecurrence
     * @param value The value to be set into by_year_day of #ICalRecurrence
     */
    set_by_year_day(index: number, value: number): void
    /**
     * Sets the by_year_day array in `recur` at once. The array size can be less than I_CAL_BY_YEARDAY_SIZE.
     * Shorter arrays are terminated with I_CAL_RECURRENCE_ARRAY_MAX value, longer arrays are truncated.
     * @param values The array of values
     */
    set_by_year_day_array(values: number[]): void
    /**
     * Sets the count from #ICalRecurrence.
     * @param count The count of #ICalRecurrence
     */
    set_count(count: number): void
    /**
     * Sets the freq from #ICalRecurrence.
     * @param freq The freq of #ICalRecurrence
     */
    set_freq(freq: RecurrenceFrequency): void
    /**
     * Sets the interval from #ICalRecurrence.
     * @param interval The interval of #ICalRecurrence
     */
    set_interval(interval: number): void
    /**
     * Sets the until from #ICalRecurrence.
     * @param until The until of #ICalRecurrence
     */
    set_until(until: Time): void
    /**
     * Sets the week_start from #ICalRecurrence.
     * @param week_start The week_start of #ICalRecurrence
     */
    set_week_start(week_start: RecurrenceWeekday): void
    /**
     * Converts a #ICalRecurrence to a string.
     */
    to_string(): string

    // Class property signals of ICalGLib-3.0.ICalGLib.Recurrence

    connect(sigName: "notify::always-destroy", callback: (($obj: Recurrence, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::always-destroy", callback: (($obj: Recurrence, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::always-destroy", ...args: any[]): void
    connect(sigName: "notify::is-global-memory", callback: (($obj: Recurrence, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-global-memory", callback: (($obj: Recurrence, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::is-global-memory", ...args: any[]): void
    connect(sigName: "notify::native", callback: (($obj: Recurrence, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::native", callback: (($obj: Recurrence, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::native", ...args: any[]): void
    connect(sigName: "notify::native-destroy-func", callback: (($obj: Recurrence, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::native-destroy-func", callback: (($obj: Recurrence, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::native-destroy-func", ...args: any[]): void
    connect(sigName: "notify::owner", callback: (($obj: Recurrence, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::owner", callback: (($obj: Recurrence, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::owner", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * This is the ICalRecurrence instance.
 * @class 
 */
class Recurrence extends Object {

    // Own properties of ICalGLib-3.0.ICalGLib.Recurrence

    static name: string
    static $gtype: GObject.GType<Recurrence>

    // Constructors of ICalGLib-3.0.ICalGLib.Recurrence

    constructor(config?: Recurrence_ConstructProps) 
    /**
     * Creates a new #ICalRecurrence.
     * @constructor 
     */
    constructor() 
    /**
     * Creates a new #ICalRecurrence.
     * @constructor 
     */
    static new(): Recurrence
    /**
     * Converts a string to a #ICalRecurrence.
     * @constructor 
     * @param str The string representation of the #ICalRecurrence
     */
    static new_from_string(str: string): Recurrence
    _init(config?: Recurrence_ConstructProps): void
    /**
     * Decodes a day to a weekday in a week.
     * @param day The encoded day which represents the day of the week and Nth day of the week
     */
    static day_day_of_week(day: number): RecurrenceWeekday
    /**
     * Decodes a day to a position of the weekday.
     * @param day The encoded day which represents the day of the week and Nth day of the week
     */
    static day_position(day: number): number
    /**
     * Converts a string representation to an enum representation for the frequency.
     * @param str The string representation of the frequency
     */
    static frequency_from_string(str: string): RecurrenceFrequency
    /**
     * Converts a enum representation to a string representation for the frequency.
     * @param kind The frequency enum
     */
    static frequency_to_string(kind: RecurrenceFrequency): string
    /**
     * Decodes a month and check whether it is a leap month.
     * @param month The month to be decoded
     */
    static month_is_leap(month: number): boolean
    static month_month(month: number): number
    /**
     * Checks whether rscale is supported.
     */
    static rscale_is_supported(): boolean
    /**
     * Gets an array of calendars supporting rscale (currently always return NULL).
     */
    static rscale_supported_calendars(): Array
    /**
     * Converts a string representation to an enum representation for the skip.
     * @param str The string representation of the skip
     */
    static skip_from_string(str: string): RecurrenceSkip
    /**
     * Converts a enum representation to a string representation for the skip.
     * @param kind The frequency enum
     */
    static skip_to_string(kind: RecurrenceSkip): string
    /**
     * Converts a string representation to an enum representation for the weekday.
     * @param str The string representation of the weekday
     */
    static weekday_from_string(str: string): RecurrenceWeekday
    /**
     * Converts a enum representation to a string representation for the weekday.
     * @param kind The frequency enum
     */
    static weekday_to_string(kind: RecurrenceWeekday): string
}

interface Reqstat_ConstructProps extends Object_ConstructProps {
}

interface Reqstat {

    // Owm methods of ICalGLib-3.0.ICalGLib.Reqstat

    /**
     * Gets the code of #ICalReqstat.
     */
    get_code(): RequestStatus
    /**
     * Gets the debug of #ICalReqstat.
     */
    get_debug(): string
    /**
     * Gets the desc of #ICalReqstat.
     */
    get_desc(): string
    /**
     * Sets the code of #ICalReqstat.
     * @param code The code of `reqstat`
     */
    set_code(code: RequestStatus): void
    /**
     * Converts #ICalReqstat to a string representation.
     */
    to_string(): string

    // Class property signals of ICalGLib-3.0.ICalGLib.Reqstat

    connect(sigName: "notify::always-destroy", callback: (($obj: Reqstat, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::always-destroy", callback: (($obj: Reqstat, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::always-destroy", ...args: any[]): void
    connect(sigName: "notify::is-global-memory", callback: (($obj: Reqstat, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-global-memory", callback: (($obj: Reqstat, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::is-global-memory", ...args: any[]): void
    connect(sigName: "notify::native", callback: (($obj: Reqstat, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::native", callback: (($obj: Reqstat, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::native", ...args: any[]): void
    connect(sigName: "notify::native-destroy-func", callback: (($obj: Reqstat, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::native-destroy-func", callback: (($obj: Reqstat, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::native-destroy-func", ...args: any[]): void
    connect(sigName: "notify::owner", callback: (($obj: Reqstat, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::owner", callback: (($obj: Reqstat, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::owner", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * This is the ICalReqstat instance.
 * @class 
 */
class Reqstat extends Object {

    // Own properties of ICalGLib-3.0.ICalGLib.Reqstat

    static name: string
    static $gtype: GObject.GType<Reqstat>

    // Constructors of ICalGLib-3.0.ICalGLib.Reqstat

    constructor(config?: Reqstat_ConstructProps) 
    /**
     * Creates a #ICalReqstat from string.
     * @constructor 
     * @param str A string
     */
    static new_from_string(str: string): Reqstat
    _init(config?: Reqstat_ConstructProps): void
}

interface Time_ConstructProps extends Object_ConstructProps {
}

interface Time {

    // Owm methods of ICalGLib-3.0.ICalGLib.Time

    /**
     * Adds a time duration on the time.
     * @param d A #ICalDuration as the difference
     */
    add(d: Duration): Time
    /**
     * Adds or subtracts a number of days, hours, minutes and seconds from `tt`.
     * @param days Difference of days adjusted
     * @param hours Difference of hours adjusted
     * @param minutes Difference of minutes adjusted
     * @param seconds Difference of seconds adjusted
     */
    adjust(days: number, hours: number, minutes: number, seconds: number): void
    /**
     * Returns a string represention of the time, in RFC2445 format.
     */
    as_ical_string(): string
    /**
     * Returns the time as seconds past the UNIX epoch.
     */
    as_timet(): number
    /**
     * Returns the time as seconds past the UNIX epoch, using timezones.
     * @param zone The timezone
     */
    as_timet_with_zone(zone: Timezone | null): number
    /**
     * Creates a new #ICalTime, copy of `timetype`.
     */
    clone(): Time
    /**
     * Returns -1, 0, or 1 to indicate that a less than b, a==b or a larger than b.
     * @param b The #ICalTime to be compared
     */
    compare(b: Time): number
    /**
     * Like i_cal_time_compare(), but only use the date parts.
     * @param b The #ICalTime to be compared
     */
    compare_date_only(b: Time): number
    /**
     * Like i_cal_time_compare_tz(), but only use the date parts; accepts timezone.
     * @param b The #ICalTime to be compared
     * @param zone The target timezone
     */
    compare_date_only_tz(b: Time, zone: Timezone | null): number
    /**
     * Convert time from one timezone to another.
     * @param from_zone From timezone
     * @param to_zone To timezone
     */
    convert_timezone(from_zone: Timezone | null, to_zone: Timezone | null): void
    /**
     * Converts `tt` to `zone` and return new #ICalTime object.
     * @param zone The target timezone
     */
    convert_to_zone(zone: Timezone | null): Time
    /**
     * Converts `tt` to `zone` and store the result into `tt`.
     * @param zone The target timezone
     */
    convert_to_zone_inplace(zone: Timezone | null): void
    /**
     * Returns the day of the week of the given time. Sunday is 1.
     */
    day_of_week(): number
    /**
     * Returns the day of the year of the given time.
     */
    day_of_year(): number
    /**
     * Gets the year/month/date parts of the `timetype` in one call.
     */
    get_date(): [ /* year */ number, /* month */ number, /* day */ number ]
    /**
     * Gets the day of #ICalTime.
     */
    get_day(): number
    /**
     * Gets the hour of #ICalTime.
     */
    get_hour(): number
    /**
     * Gets the minute of #ICalTime.
     */
    get_minute(): number
    /**
     * Gets the month of #ICalTime.
     */
    get_month(): number
    /**
     * Gets the second of #ICalTime.
     */
    get_second(): number
    /**
     * Gets the hour/minute/second parts of the `timetype` in one call.
     */
    get_time(): [ /* hour */ number, /* minute */ number, /* second */ number ]
    /**
     * Returns the timezone, the #ICalTimezone object is cached and can be either unreferenced once the last
     * instance is used or can be kept until i_cal_object_free_global_objects() is called (usually at the very
     * end of the program).
     */
    get_timezone(): Timezone
    /**
     * Returns the tzid, or NULL for a floating time.
     */
    get_tzid(): string | null
    /**
     * Gets the year of #ICalTime.
     */
    get_year(): number
    /**
     * Returns true if time is of DATE type, false if DATE-TIME.
     */
    is_date(): boolean
    /**
     * Gets the is_daylight of #ICalTime.
     */
    is_daylight(): boolean
    /**
     * Returns true if the time is null.
     */
    is_null_time(): boolean
    /**
     * Returns true if time is relative to UTC zone.
     */
    is_utc(): boolean
    /**
     * Returns true if the time is null.
     */
    is_valid_time(): boolean
    /**
     * Normalizes the icaltime, so that all fields are within the normal range.
     */
    normalize(): Time
    /**
     * Normalizes the `tt,` so that all fields are within the normal range.
     */
    normalize_inplace(): void
    /**
     * Sets the year/month/date parts of the `timetype` in one call. This doesn't verify validity of the given
     * date.
     * @param year The 'year' part of the date
     * @param month The 'month' part of the date
     * @param day The 'day' part of the date
     */
    set_date(year: number, month: number, day: number): void
    /**
     * Sets the day of #ICalTime.
     * @param day The day
     */
    set_day(day: number): void
    /**
     * Sets the hour of #ICalTime.
     * @param hour The hour
     */
    set_hour(hour: number): void
    /**
     * Sets the is_date of #ICalTime.
     * @param is_date The is_date
     */
    set_is_date(is_date: boolean): void
    /**
     * Sets the is_daylight of #ICalTime.
     * @param is_daylight The is_daylight
     */
    set_is_daylight(is_daylight: boolean): void
    /**
     * Sets the minute of #ICalTime.
     * @param minute The minute
     */
    set_minute(minute: number): void
    /**
     * Sets the month of #ICalTime.
     * @param month The month
     */
    set_month(month: number): void
    /**
     * Sets the second of #ICalTime.
     * @param second The second
     */
    set_second(second: number): void
    /**
     * Sets the hour/minute/second parts of the `timetype` in one call. This doesn't verify validity of the given
     * time.
     * @param hour The 'hour' part of the time
     * @param minute The 'minute' part of the time
     * @param second The 'second' part of the time
     */
    set_time(hour: number, minute: number, second: number): void
    /**
     * Sets the timezone of the `tt`.
     * @param zone The timezone
     */
    set_timezone(zone: Timezone | null): void
    /**
     * Sets the year of #ICalTime.
     * @param year The year
     */
    set_year(year: number): void
    /**
     * Returns the day of the year for the first day of the week that the given time is within.
     * @param fdow The first day of the week
     */
    start_doy_week(fdow: number): number
    /**
     * Gets the duration between two time.
     * @param t2 The subtracting #ICalTime
     */
    subtract(t2: Time): Duration
    /**
     * Returns the week number for the week the given time is within.
     */
    week_number(): number

    // Class property signals of ICalGLib-3.0.ICalGLib.Time

    connect(sigName: "notify::always-destroy", callback: (($obj: Time, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::always-destroy", callback: (($obj: Time, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::always-destroy", ...args: any[]): void
    connect(sigName: "notify::is-global-memory", callback: (($obj: Time, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-global-memory", callback: (($obj: Time, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::is-global-memory", ...args: any[]): void
    connect(sigName: "notify::native", callback: (($obj: Time, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::native", callback: (($obj: Time, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::native", ...args: any[]): void
    connect(sigName: "notify::native-destroy-func", callback: (($obj: Time, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::native-destroy-func", callback: (($obj: Time, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::native-destroy-func", ...args: any[]): void
    connect(sigName: "notify::owner", callback: (($obj: Time, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::owner", callback: (($obj: Time, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::owner", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * This is the ICalTime instance.
 * @class 
 */
class Time extends Object {

    // Own properties of ICalGLib-3.0.ICalGLib.Time

    static name: string
    static $gtype: GObject.GType<Time>

    // Constructors of ICalGLib-3.0.ICalGLib.Time

    constructor(config?: Time_ConstructProps) 
    /**
     * Creates a new #ICalTime.
     * @constructor 
     */
    constructor() 
    /**
     * Creates a new #ICalTime.
     * @constructor 
     */
    static new(): Time
    /**
     * Creates a #ICalTime according to the timezone and current time.
     * @constructor 
     * @param zone The timezone used to create a #ICalTime according to the current time
     */
    static new_current_with_zone(zone: Timezone | null): Time
    /**
     * Creates a new time, given a day of year and a year.
     * @constructor 
     * @param day The day of a year
     * @param year The year
     */
    static new_from_day_of_year(day: number, year: number): Time
    /**
     * Creates a time from an ISO format string.
     * @constructor 
     * @param str The ISO format string
     */
    static new_from_string(str: string): Time
    /**
     * Converts seconds past UNIX epoch to a timetype, using timezones.
     * @constructor 
     * @param v The seconds past since epoch time
     * @param is_date Whether it is a date type, 1 if yes, 0 if not
     * @param zone The timezone, or %NULL
     */
    static new_from_timet_with_zone(v: number, is_date: number, zone: Timezone | null): Time
    /**
     * Creates a null date, which indicates no time has been set.
     * @constructor 
     */
    static new_null_date(): Time
    /**
     * Creates a default time which is an epoch time.
     * @constructor 
     */
    static new_null_time(): Time
    /**
     * Creates a #ICalTime representing today.
     * @constructor 
     */
    static new_today(): Time
    _init(config?: Time_ConstructProps): void
    /**
     * Gets the number of days in the target month in the target year.
     * @param month The target month
     * @param year The target year
     */
    static days_in_month(month: number, year: number): number
    /**
     * Returns the number of days in this year.
     * @param year The target year
     */
    static days_in_year(year: number): number
    /**
     * Checks whether a year is a leap year.
     * @param year The target year
     */
    static days_is_leap_year(year: number): boolean
    /**
     * Applies a list of timezone changes on the array of components until the end year.
     * @param comp The #ICalComponent
     * @param end_year The end year
     * @param changes The changes to be applies
     */
    static timezone_expand_vtimezone(comp: Component, end_year: number, changes: Array): void
}

interface TimeSpan_ConstructProps extends Object_ConstructProps {
}

interface TimeSpan {

    // Owm methods of ICalGLib-3.0.ICalGLib.TimeSpan

    /**
     * Creates a new #ICalTimeSpan, clone of `src`. Free it with g_object_unref(), when no longer needed.
     */
    clone(): TimeSpan
    /**
     * Checks whether one #ICalTimeSpan is contained in another #ICalTimeSpan.
     * @param container The target container of #ICalTimeSpan
     */
    contains(container: TimeSpan): number
    /**
     * Gets the end of #ICalTimeSpan.
     */
    get_end(): number
    /**
     * Gets the is_busy of #ICalTimeSpan.
     */
    get_is_busy(): boolean
    /**
     * Gets the start of #ICalTimeSpan.
     */
    get_start(): number
    /**
     * Checks whether two spans overlap.
     * @param s2 The second #ICalTimeSpan
     */
    overlaps(s2: TimeSpan): number
    /**
     * Sets the end of #ICalTimeSpan.
     * @param end The end
     */
    set_end(end: number): void
    /**
     * Sets the is_busy of #ICalTimeSpan.
     * @param is_busy The is_busy
     */
    set_is_busy(is_busy: boolean): void
    /**
     * Sets the start of #ICalTimeSpan.
     * @param start The start
     */
    set_start(start: number): void

    // Class property signals of ICalGLib-3.0.ICalGLib.TimeSpan

    connect(sigName: "notify::always-destroy", callback: (($obj: TimeSpan, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::always-destroy", callback: (($obj: TimeSpan, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::always-destroy", ...args: any[]): void
    connect(sigName: "notify::is-global-memory", callback: (($obj: TimeSpan, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-global-memory", callback: (($obj: TimeSpan, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::is-global-memory", ...args: any[]): void
    connect(sigName: "notify::native", callback: (($obj: TimeSpan, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::native", callback: (($obj: TimeSpan, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::native", ...args: any[]): void
    connect(sigName: "notify::native-destroy-func", callback: (($obj: TimeSpan, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::native-destroy-func", callback: (($obj: TimeSpan, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::native-destroy-func", ...args: any[]): void
    connect(sigName: "notify::owner", callback: (($obj: TimeSpan, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::owner", callback: (($obj: TimeSpan, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::owner", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * This is the ICalTimeSpan instance.
 * @class 
 */
class TimeSpan extends Object {

    // Own properties of ICalGLib-3.0.ICalGLib.TimeSpan

    static name: string
    static $gtype: GObject.GType<TimeSpan>

    // Constructors of ICalGLib-3.0.ICalGLib.TimeSpan

    constructor(config?: TimeSpan_ConstructProps) 
    /**
     * Creates a new #ICalTimeSpan.
     * @constructor 
     * @param dtstart The start of #ICalTimeSpan
     * @param dtend The end of #ICalTimeSpan
     * @param is_busy Whether this span is busy
     */
    constructor(dtstart: Time, dtend: Time, is_busy: number) 
    /**
     * Creates a new #ICalTimeSpan.
     * @constructor 
     * @param dtstart The start of #ICalTimeSpan
     * @param dtend The end of #ICalTimeSpan
     * @param is_busy Whether this span is busy
     */
    static new(dtstart: Time, dtend: Time, is_busy: number): TimeSpan
    /**
     * Creates a new #ICalTimeSpan. Free it with g_object_unref(), when no longer needed.
     * @constructor 
     * @param start Start of the time span
     * @param end End of the time span
     * @param is_busy Whether the time span is busy
     */
    static new_timet(start: number, end: number, is_busy: boolean): TimeSpan
    _init(config?: TimeSpan_ConstructProps): void
}

interface Timezone_ConstructProps extends Object_ConstructProps {
}

interface Timezone {

    // Owm methods of ICalGLib-3.0.ICalGLib.Timezone

    /**
     * The clone method for #ICalTimezone.
     */
    copy(): Timezone
    /**
     * Outputs a list of timezone changes for the given timezone to the given file, up to the maximum year given.
     * @param max_year Max year
     * @param fp The file handle
     */
    dump_changes(max_year: number, fp: object | null): number
    /**
     * Returns the VTIMEZONE component of a timezone.
     */
    get_component(): Component
    /**
     * Gets the display name of the `zone`.
     */
    get_display_name(): string
    /**
     * Returns the latitude of a builtin timezone.
     */
    get_latitude(): number
    /**
     * Returns the city name of a timezone, or %NULL, when none is set or when `zone` is also %NULL.
     */
    get_location(): string | null
    /**
     * Returns the longitude of a builtin timezone.
     */
    get_longitude(): number
    /**
     * Returns the TZID of a timezone, or %NULL, when none is set or when `zone` is also %NULL.
     */
    get_tzid(): string | null
    /**
     * Returns the TZNAME properties used in the latest STANDARD and DAYLIGHT components. If they are the same
     * it will return just one, e.g. "LMT". If they are different it will format them like "EST/EDT". Note that
     * this may also return NULL.
     */
    get_tznames(): string | null
    /**
     * Calculates the UTC offset of a given local time in the given timezone.  It is the number of seconds to
     * add to UTC to get local time.  The is_daylight flag is set to 1 if the time is in daylight-savings time.
     * @param tt The local time
     */
    get_utc_offset(tt: Time | null): [ /* returnType */ number, /* is_daylight */ number ]
    /**
     * Calculates the UTC offset of a given UTC time in the given timezone.  It is the number of seconds to
     * add to UTC to get local time.  The is_daylight flag is set to 1 if the time is in daylight-savings time.
     * @param tt The local time
     */
    get_utc_offset_of_utc_time(tt: Time): [ /* returnType */ number, /* is_daylight */ number ]
    /**
     * Sets the VTIMEZONE component of #ICalTimezone, initializing the tzid, location and tzname fields. It
     * returns 1 on success or 0 on failure, i.e. no TZID was found.
     * 
     * `note` The `zone` assumes ownership
     * of the `comp,` thus make sure you pass an unowned #ICalComponent.
     * @param comp The VTIMEZONE component of an #ICalTimezone, initializing the tzid, location and tzname fields
     */
    set_component(comp: Component): number

    // Class property signals of ICalGLib-3.0.ICalGLib.Timezone

    connect(sigName: "notify::always-destroy", callback: (($obj: Timezone, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::always-destroy", callback: (($obj: Timezone, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::always-destroy", ...args: any[]): void
    connect(sigName: "notify::is-global-memory", callback: (($obj: Timezone, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-global-memory", callback: (($obj: Timezone, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::is-global-memory", ...args: any[]): void
    connect(sigName: "notify::native", callback: (($obj: Timezone, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::native", callback: (($obj: Timezone, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::native", ...args: any[]): void
    connect(sigName: "notify::native-destroy-func", callback: (($obj: Timezone, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::native-destroy-func", callback: (($obj: Timezone, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::native-destroy-func", ...args: any[]): void
    connect(sigName: "notify::owner", callback: (($obj: Timezone, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::owner", callback: (($obj: Timezone, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::owner", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * This is the ICalTimezone instance.
 * @class 
 */
class Timezone extends Object {

    // Own properties of ICalGLib-3.0.ICalGLib.Timezone

    static name: string
    static $gtype: GObject.GType<Timezone>

    // Constructors of ICalGLib-3.0.ICalGLib.Timezone

    constructor(config?: Timezone_ConstructProps) 
    /**
     * Creates a new array of timezones.
     * @constructor 
     */
    static array_new(): Timezone
    /**
     * The constructor of the type #ICalTimezone.
     * @constructor 
     */
    constructor() 
    /**
     * The constructor of the type #ICalTimezone.
     * @constructor 
     */
    static new(): Timezone
    _init(config?: Timezone_ConstructProps): void
    /**
     * Populate the array of timezones with a component.
     * 
     * `note` The `timezones` assumes ownership of the
     * `child,` thus make sure you pass an unowned #ICalComponent.
     * @param timezones The timezones to be populated
     * @param child The component to be appended to `timezones`
     */
    static array_append_from_vtimezone(timezones: Array, child: Component): void
    /**
     * Gets the #ICalTimezone at specified position in array.
     * @param timezones The array to be visited
     * @param index The index
     */
    static array_element_at(timezones: Array, index: number): Timezone
    /**
     * Frees any builtin timezone information.
     */
    static free_builtin_timezones(): void
    /**
     * Frees memory dedicated to the zonefile directory.
     */
    static free_zone_directory(): void
    /**
     * Returns a single builtin timezone, given its Olson city name.
     * @param location The location representing the timezone
     */
    static get_builtin_timezone(location: string | null): Timezone | null
    /**
     * Returns a single builtin timezone, given its offset.
     * @param offset The offset used to get the #ICalTimezone
     * @param tzname The reference #ICalTimezone name
     */
    static get_builtin_timezone_from_offset(offset: number, tzname: string | null): Timezone
    /**
     * Returns a single builtin timezone, given its TZID.
     * @param tzid The tzid name
     */
    static get_builtin_timezone_from_tzid(tzid: string | null): Timezone
    /**
     * Returns a list of builtin timezones.
     */
    static get_builtin_timezones(): Array
    /**
     * Gets whether to use builtin timezones files.
     */
    static get_builtin_tzdata(): boolean
    /**
     * Gets the location of the vtimezone in component.
     * @param component The #ICalComponent to be queried
     */
    static get_location_from_vtimezone(component: Component): string
    /**
     * Gets the name of the vtimezone in component.
     * @param component The #ICalComponent to be queried
     */
    static get_tznames_from_vtimezone(component: Component): string
    /**
     * Returns the UTC timezone.
     */
    static get_utc_timezone(): Timezone
    /**
     * Frees memory dedicated to the zonefile directory.
     */
    static release_zone_tab(): void
    /**
     * Sets whether to use builtin timezones files.
     * @param set Whether to use builtin timezones files
     */
    static set_builtin_tzdata(set: boolean): void
    /**
     * Sets the prefix to be used for tzid's generated from system tzdata. Must be globally unique (such as
     * a domain name owned by the developer of the calling application), and begin and end with forward slashes.
     * Do not change or de-allocate the string buffer after calling this.
     * @param new_prefix The #ICalTimezone to be set
     */
    static set_tzid_prefix(new_prefix: string): void
    /**
     * Sets the directory to look for the zonefiles.
     * @param path The path to look for the zonefiles
     */
    static set_zone_directory(path: string): void
}

interface Trigger_ConstructProps extends Object_ConstructProps {
}

interface Trigger {

    // Owm methods of ICalGLib-3.0.ICalGLib.Trigger

    /**
     * Gets the duration from #ICalTrigger.
     */
    get_duration(): Duration
    /**
     * Gets the time from #ICalTrigger.
     */
    get_time(): Time
    /**
     * Checks if a #ICalTrigger is a bad trigger.
     */
    is_bad_trigger(): boolean
    /**
     * Checks if a #ICalTrigger is a null trigger.
     */
    is_null_trigger(): boolean
    /**
     * Sets the duration from #ICalTrigger.
     * @param duration The duration of #ICalTrigger
     */
    set_duration(duration: Duration): void
    /**
     * Sets the time from #ICalTrigger.
     * @param time The time of #ICalTrigger
     */
    set_time(time: Time): void

    // Class property signals of ICalGLib-3.0.ICalGLib.Trigger

    connect(sigName: "notify::always-destroy", callback: (($obj: Trigger, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::always-destroy", callback: (($obj: Trigger, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::always-destroy", ...args: any[]): void
    connect(sigName: "notify::is-global-memory", callback: (($obj: Trigger, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-global-memory", callback: (($obj: Trigger, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::is-global-memory", ...args: any[]): void
    connect(sigName: "notify::native", callback: (($obj: Trigger, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::native", callback: (($obj: Trigger, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::native", ...args: any[]): void
    connect(sigName: "notify::native-destroy-func", callback: (($obj: Trigger, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::native-destroy-func", callback: (($obj: Trigger, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::native-destroy-func", ...args: any[]): void
    connect(sigName: "notify::owner", callback: (($obj: Trigger, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::owner", callback: (($obj: Trigger, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::owner", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * This is the ICalTrigger instance.
 * @class 
 */
class Trigger extends Object {

    // Own properties of ICalGLib-3.0.ICalGLib.Trigger

    static name: string
    static $gtype: GObject.GType<Trigger>

    // Constructors of ICalGLib-3.0.ICalGLib.Trigger

    constructor(config?: Trigger_ConstructProps) 
    /**
     * Creates a #ICalTrigger from integer.
     * @constructor 
     * @param reltime An integer
     */
    static new_from_int(reltime: number): Trigger
    /**
     * Creates a #ICalTrigger from a string.
     * @constructor 
     * @param str A string
     */
    static new_from_string(str: string): Trigger
    _init(config?: Trigger_ConstructProps): void
}

interface Value_ConstructProps extends Object_ConstructProps {
}

interface Value {

    // Owm methods of ICalGLib-3.0.ICalGLib.Value

    /**
     * Converts the #ICalValue to a string.
     */
    as_ical_string(): string
    /**
     * Deeply clone a #ICalValue.
     */
    clone(): Value
    /**
     * Compares two #ICalValue.
     * @param b A #ICalValue
     */
    compare(b: Value): ParameterXliccomparetype
    /**
     * Gets the action of #ICalValue.
     */
    get_action(): PropertyAction
    /**
     * Gets the attach of #ICalValue.
     */
    get_attach(): Attach | null
    /**
     * Gets the binary of #ICalValue.
     */
    get_binary(): string | null
    /**
     * Gets the boolean of #ICalValue.
     */
    get_boolean(): number
    /**
     * Gets the busytype of #ICalValue.
     */
    get_busytype(): PropertyBusytype
    /**
     * Gets the caladdress of #ICalValue.
     */
    get_caladdress(): string | null
    /**
     * Gets the carlevel of #ICalValue.
     */
    get_carlevel(): PropertyCarlevel
    /**
     * Gets the class of #ICalValue.
     */
    get_class(): Property_Class
    /**
     * Gets the cmd of #ICalValue.
     */
    get_cmd(): PropertyCmd
    /**
     * Gets the date of #ICalValue.
     */
    get_date(): Time | null
    /**
     * Gets the datetime of #ICalValue.
     */
    get_datetime(): Time | null
    /**
     * Gets the datetimedate (DATE-TIME or DATE) of #ICalValue.
     */
    get_datetimedate(): Time | null
    /**
     * Gets the datetimeperiod of #ICalValue.
     */
    get_datetimeperiod(): Datetimeperiod | null
    /**
     * Gets the duration of #ICalValue.
     */
    get_duration(): Duration | null
    /**
     * Gets the float of #ICalValue.
     */
    get_float(): number
    /**
     * Gets the geo of #ICalValue.
     */
    get_geo(): Geo | null
    /**
     * Gets the integer of #ICalValue.
     */
    get_integer(): number
    /**
     * Gets the method of #ICalValue.
     */
    get_method(): PropertyMethod
    /**
     * Gets the parent #ICalProperty of the specified #ICalValue.
     */
    get_parent(): Property | null
    /**
     * Gets the period of #ICalValue.
     */
    get_period(): Period | null
    /**
     * Gets the pollcompletion of #ICalValue.
     */
    get_pollcompletion(): PropertyPollcompletion
    /**
     * Gets the pollmode of #ICalValue.
     */
    get_pollmode(): PropertyPollmode
    /**
     * Gets the query of #ICalValue.
     */
    get_query(): string | null
    /**
     * Gets the querylevel of #ICalValue.
     */
    get_querylevel(): PropertyQuerylevel
    /**
     * Gets the recur of #ICalValue.
     */
    get_recur(): Recurrence | null
    /**
     * Gets the requeststatus of #ICalValue.
     */
    get_requeststatus(): Reqstat | null
    /**
     * Gets the status of #ICalValue.
     */
    get_status(): PropertyStatus
    /**
     * Gets the string of #ICalValue.
     */
    get_string(): string | null
    /**
     * Gets the taskmode of #ICalValue.
     */
    get_taskmode(): PropertyTaskmode
    /**
     * Gets the text of #ICalValue.
     */
    get_text(): string | null
    /**
     * Gets the transp of #ICalValue.
     */
    get_transp(): PropertyTransp
    /**
     * Gets the trigger of #ICalValue.
     */
    get_trigger(): Trigger | null
    /**
     * Gets the uri of #ICalValue.
     */
    get_uri(): string | null
    /**
     * Gets the utcoffset of #ICalValue.
     */
    get_utcoffset(): number
    /**
     * Gets the x of #ICalValue.
     */
    get_x(): string | null
    /**
     * Gets the xlicclass of #ICalValue.
     */
    get_xlicclass(): PropertyXlicclass
    /**
     * Checks if #ICalValue is valid.
     */
    is_valid(): boolean
    /**
     * Gets the kind of #ICalValue.
     */
    isa(): ValueKind
    /**
     * Checks whether the native part of #ICalValue is an icalvalue.
     */
    isa_value(): number
    /**
     * Resets the kind of #ICalValue.
     */
    reset_kind(): void
    /**
     * Sets the action in the #ICalValue.
     * @param v The action value
     */
    set_action(v: PropertyAction): void
    /**
     * Sets the attach in the #ICalValue.
     * @param v The attach value
     */
    set_attach(v: Attach): void
    /**
     * Sets the binary in the #ICalValue.
     * @param v The binary value
     */
    set_binary(v: string): void
    /**
     * Sets the boolean in the #ICalValue.
     * @param v The boolean value
     */
    set_boolean(v: number): void
    /**
     * Sets the busytype in the #ICalValue.
     * @param v The busytype value
     */
    set_busytype(v: PropertyBusytype): void
    /**
     * Sets the caladdress in the #ICalValue.
     * @param v The caladdress value
     */
    set_caladdress(v: string): void
    /**
     * Sets the carlevel in the #ICalValue.
     * @param v The carlevel value
     */
    set_carlevel(v: PropertyCarlevel): void
    /**
     * Sets the class in the #ICalValue.
     * @param v The class value
     */
    set_class(v: Property_Class): void
    /**
     * Sets the cmd in the #ICalValue.
     * @param v The cmd value
     */
    set_cmd(v: PropertyCmd): void
    /**
     * Sets the date in the #ICalValue.
     * @param v The date value
     */
    set_date(v: Time): void
    /**
     * Sets the datetime in the #ICalValue.
     * @param v The datetime value
     */
    set_datetime(v: Time): void
    /**
     * Sets the datetimedate (DATE-TIME or DATE) in the #ICalValue.
     * @param v The datetimedate (DATE-TIME or DATE) value
     */
    set_datetimedate(v: Time): void
    /**
     * Sets the datetimeperiod in the #ICalValue.
     * @param v The datetimeperiod value
     */
    set_datetimeperiod(v: Datetimeperiod): void
    /**
     * Sets the duration in the #ICalValue.
     * @param v The duration value
     */
    set_duration(v: Duration): void
    /**
     * Sets the float in the #ICalValue.
     * @param v The float value
     */
    set_float(v: number): void
    /**
     * Sets the geo in the #ICalValue.
     * @param v The geo value
     */
    set_geo(v: Geo): void
    /**
     * Sets the integer in the #ICalValue.
     * @param v The integer value
     */
    set_integer(v: number): void
    /**
     * Sets the method in the #ICalValue.
     * @param v The method value
     */
    set_method(v: PropertyMethod): void
    /**
     * Sets the parent property of a value.
     * @param property The parent #ICalProperty
     */
    set_parent(property: Property | null): void
    /**
     * Sets the period in the #ICalValue.
     * @param v The period value
     */
    set_period(v: Period): void
    /**
     * Sets the pollcompletion in the #ICalValue.
     * @param v The pollcompletion value
     */
    set_pollcompletion(v: PropertyPollcompletion): void
    /**
     * Sets the pollmode in the #ICalValue.
     * @param v The pollmode value
     */
    set_pollmode(v: PropertyPollmode): void
    /**
     * Sets the query in the #ICalValue.
     * @param v The query value
     */
    set_query(v: string): void
    /**
     * Sets the querylevel in the #ICalValue.
     * @param v The querylevel value
     */
    set_querylevel(v: PropertyQuerylevel): void
    /**
     * Sets the recur in the #ICalValue.
     * @param v The recur value
     */
    set_recur(v: Recurrence): void
    /**
     * Sets the requeststatus in the #ICalValue.
     * @param v The requeststatus value
     */
    set_requeststatus(v: Reqstat): void
    /**
     * Sets the status in the #ICalValue.
     * @param v The status value
     */
    set_status(v: PropertyStatus): void
    /**
     * Sets the string in the #ICalValue.
     * @param v The string value
     */
    set_string(v: string): void
    /**
     * Sets the taskmode in the #ICalValue.
     * @param v The taskmode value
     */
    set_taskmode(v: PropertyTaskmode): void
    /**
     * Sets the text in the #ICalValue.
     * @param v The text value
     */
    set_text(v: string): void
    /**
     * Sets the transp in the #ICalValue.
     * @param v The transp value
     */
    set_transp(v: PropertyTransp): void
    /**
     * Sets the trigger in the #ICalValue.
     * @param v The trigger value
     */
    set_trigger(v: Trigger): void
    /**
     * Sets the uri in the #ICalValue.
     * @param v The uri value
     */
    set_uri(v: string): void
    /**
     * Sets the utcoffset in the #ICalValue.
     * @param v The utcoffset value
     */
    set_utcoffset(v: number): void
    /**
     * Sets the x in the #ICalValue.
     * @param v The x value
     */
    set_x(v: string): void
    /**
     * Sets the xlicclass in the #ICalValue.
     * @param v The xlicclass value
     */
    set_xlicclass(v: PropertyXlicclass): void

    // Class property signals of ICalGLib-3.0.ICalGLib.Value

    connect(sigName: "notify::always-destroy", callback: (($obj: Value, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::always-destroy", callback: (($obj: Value, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::always-destroy", ...args: any[]): void
    connect(sigName: "notify::is-global-memory", callback: (($obj: Value, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-global-memory", callback: (($obj: Value, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::is-global-memory", ...args: any[]): void
    connect(sigName: "notify::native", callback: (($obj: Value, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::native", callback: (($obj: Value, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::native", ...args: any[]): void
    connect(sigName: "notify::native-destroy-func", callback: (($obj: Value, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::native-destroy-func", callback: (($obj: Value, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::native-destroy-func", ...args: any[]): void
    connect(sigName: "notify::owner", callback: (($obj: Value, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::owner", callback: (($obj: Value, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::owner", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * This is the ICalValue instance.
 * @class 
 */
class Value extends Object {

    // Own properties of ICalGLib-3.0.ICalGLib.Value

    static name: string
    static $gtype: GObject.GType<Value>

    // Constructors of ICalGLib-3.0.ICalGLib.Value

    constructor(config?: Value_ConstructProps) 
    /**
     * Creates a new #ICalValue with specific kind.
     * @constructor 
     * @param kind A #ICalValueKind
     */
    constructor(kind: ValueKind) 
    /**
     * Creates a new #ICalValue with specific kind.
     * @constructor 
     * @param kind A #ICalValueKind
     */
    static new(kind: ValueKind): Value
    /**
     * Creates a new #ICalValue with the type action.
     * @constructor 
     * @param v The action value
     */
    static new_action(v: PropertyAction): Value
    /**
     * Creates a new #ICalValue with the type attach.
     * @constructor 
     * @param v The attach value
     */
    static new_attach(v: Attach): Value
    /**
     * Creates a new #ICalValue with the type binary.
     * @constructor 
     * @param v The binary value
     */
    static new_binary(v: string): Value
    /**
     * Creates a new #ICalValue with the type boolean.
     * @constructor 
     * @param v The boolean value
     */
    static new_boolean(v: number): Value
    /**
     * Creates a new #ICalValue with the type busytype.
     * @constructor 
     * @param v The busytype value
     */
    static new_busytype(v: PropertyBusytype): Value
    /**
     * Creates a new #ICalValue with the type caladdress.
     * @constructor 
     * @param v The caladdress value
     */
    static new_caladdress(v: string): Value
    /**
     * Creates a new #ICalValue with the type carlevel.
     * @constructor 
     * @param v The carlevel value
     */
    static new_carlevel(v: PropertyCarlevel): Value
    /**
     * Creates a new #ICalValue with the type class.
     * @constructor 
     * @param v The class value
     */
    static new_class(v: Property_Class): Value
    /**
     * Creates a new #ICalValue with the type cmd.
     * @constructor 
     * @param v The cmd value
     */
    static new_cmd(v: PropertyCmd): Value
    /**
     * Creates a new #ICalValue with the type date.
     * @constructor 
     * @param v The date value
     */
    static new_date(v: Time): Value
    /**
     * Creates a new #ICalValue with the type datetime.
     * @constructor 
     * @param v The datetime value
     */
    static new_datetime(v: Time): Value
    /**
     * Creates a new #ICalValue with the type datetimedate (DATE-TIME or DATE).
     * @constructor 
     * @param v The DATE-TIME or DATE value
     */
    static new_datetimedate(v: Time): Value
    /**
     * Creates a new #ICalValue with the type datetimeperiod.
     * @constructor 
     * @param v The datetimeperiod value
     */
    static new_datetimeperiod(v: Datetimeperiod): Value
    /**
     * Creates a new #ICalValue with the type duration.
     * @constructor 
     * @param v The duration value
     */
    static new_duration(v: Duration): Value
    /**
     * Creates a new #ICalValue with the type float.
     * @constructor 
     * @param v The float value
     */
    static new_float(v: number): Value
    /**
     * Creates a new #ICalValue based on the #ICalValueKind and a string.
     * @constructor 
     * @param kind A #ICalValueKind
     * @param str A string
     */
    static new_from_string(kind: ValueKind, str: string): Value
    /**
     * Creates a new #ICalValue with the type geo.
     * @constructor 
     * @param v The geo value
     */
    static new_geo(v: Geo): Value
    /**
     * Creates a new #ICalValue with the type integer.
     * @constructor 
     * @param v The integer value
     */
    static new_integer(v: number): Value
    /**
     * Creates a new #ICalValue with the type method.
     * @constructor 
     * @param v The method value
     */
    static new_method(v: PropertyMethod): Value
    /**
     * Creates a new #ICalValue with the type period.
     * @constructor 
     * @param v The period value
     */
    static new_period(v: Period): Value
    /**
     * Creates a new #ICalValue with the type pollcompletion.
     * @constructor 
     * @param v The pollcompletion value
     */
    static new_pollcompletion(v: PropertyPollcompletion): Value
    /**
     * Creates a new #ICalValue with the type pollmode.
     * @constructor 
     * @param v The pollmode value
     */
    static new_pollmode(v: PropertyPollmode): Value
    /**
     * Creates a new #ICalValue with the type query.
     * @constructor 
     * @param v The query value
     */
    static new_query(v: string): Value
    /**
     * Creates a new #ICalValue with the type querylevel.
     * @constructor 
     * @param v The querylevel value
     */
    static new_querylevel(v: PropertyQuerylevel): Value
    /**
     * Creates a new #ICalValue with the type recur.
     * @constructor 
     * @param v The recur value
     */
    static new_recur(v: Recurrence): Value
    /**
     * Creates a new #ICalValue with the type requeststatus.
     * @constructor 
     * @param v The requeststatus value
     */
    static new_requeststatus(v: Reqstat): Value
    /**
     * Creates a new #ICalValue with the type status.
     * @constructor 
     * @param v The status value
     */
    static new_status(v: PropertyStatus): Value
    /**
     * Creates a new #ICalValue with the type string.
     * @constructor 
     * @param v The string value
     */
    static new_string(v: string): Value
    /**
     * Creates a new #ICalValue with the type taskmode.
     * @constructor 
     * @param v The taskmode value
     */
    static new_taskmode(v: PropertyTaskmode): Value
    /**
     * Creates a new #ICalValue with the type text.
     * @constructor 
     * @param v The text value
     */
    static new_text(v: string): Value
    /**
     * Creates a new #ICalValue with the type transp.
     * @constructor 
     * @param v The transp value
     */
    static new_transp(v: PropertyTransp): Value
    /**
     * Creates a new #ICalValue with the type trigger.
     * @constructor 
     * @param v The trigger value
     */
    static new_trigger(v: Trigger): Value
    /**
     * Creates a new #ICalValue with the type uri.
     * @constructor 
     * @param v The uri value
     */
    static new_uri(v: string): Value
    /**
     * Creates a new #ICalValue with the type utcoffset.
     * @constructor 
     * @param v The utcoffset value
     */
    static new_utcoffset(v: number): Value
    /**
     * Creates a new #ICalValue with the type x.
     * @constructor 
     * @param v The x value
     */
    static new_x(v: string): Value
    /**
     * Creates a new #ICalValue with the type xlicclass.
     * @constructor 
     * @param v The xlicclass value
     */
    static new_xlicclass(v: PropertyXlicclass): Value
    _init(config?: Value_ConstructProps): void
    /**
     * Extracts the original character string encoded by the above function.
     * @param szText A string
     */
    static decode_ical_string(szText: string): string | null
    /**
     * Encodes a character string in ical format, escape certain characters, etc.
     * @param szText A string
     */
    static encode_ical_string(szText: string): string | null
    /**
     * Converts a string to #ICalValueKind.
     * @param str A string
     */
    static kind_from_string(str: string): ValueKind
    /**
     * Checks whether the #ICalValueKind is valid.
     * @param kind The #ICalValueKind to be checked
     */
    static kind_is_valid(kind: ValueKind): boolean
    /**
     * Converts a #ICalValueKind to a #ICalPropertyKind.
     * @param kind A #ICalValueKind
     */
    static kind_to_property_kind(kind: ValueKind): PropertyKind
    /**
     * Converts the #ICalValueKind to a string.
     * @param kind A #ICalValueKind
     */
    static kind_to_string(kind: ValueKind): string
}

interface ArrayClass {
}

/**
 * This is the ICalArray class.
 * @record 
 */
abstract class ArrayClass {

    // Own properties of ICalGLib-3.0.ICalGLib.ArrayClass

    static name: string
}

interface AttachClass {
}

/**
 * This is the ICalAttach class.
 * @record 
 */
abstract class AttachClass {

    // Own properties of ICalGLib-3.0.ICalGLib.AttachClass

    static name: string
}

interface CompIterClass {
}

/**
 * This is the ICalCompIter class.
 * @record 
 */
abstract class CompIterClass {

    // Own properties of ICalGLib-3.0.ICalGLib.CompIterClass

    static name: string
}

interface ComponentClass {
}

/**
 * This is the ICalComponent class.
 * @record 
 */
abstract class ComponentClass {

    // Own properties of ICalGLib-3.0.ICalGLib.ComponentClass

    static name: string
}

interface DatetimeperiodClass {
}

/**
 * This is the ICalDatetimeperiod class.
 * @record 
 */
abstract class DatetimeperiodClass {

    // Own properties of ICalGLib-3.0.ICalGLib.DatetimeperiodClass

    static name: string
}

interface DurationClass {
}

/**
 * This is the ICalDuration class.
 * @record 
 */
abstract class DurationClass {

    // Own properties of ICalGLib-3.0.ICalGLib.DurationClass

    static name: string
}

interface GeoClass {
}

/**
 * This is the ICalGeo class.
 * @record 
 */
abstract class GeoClass {

    // Own properties of ICalGLib-3.0.ICalGLib.GeoClass

    static name: string
}

interface ObjectClass {
}

/**
 * This is an ICalObject class struct.
 * @record 
 */
abstract class ObjectClass {

    // Own properties of ICalGLib-3.0.ICalGLib.ObjectClass

    static name: string
}

interface ObjectPrivate {
}

class ObjectPrivate {

    // Own properties of ICalGLib-3.0.ICalGLib.ObjectPrivate

    static name: string
}

interface ParameterClass {
}

/**
 * This is the ICalParameter class.
 * @record 
 */
abstract class ParameterClass {

    // Own properties of ICalGLib-3.0.ICalGLib.ParameterClass

    static name: string
}

interface ParserClass {
}

/**
 * This is the ICalParser class.
 * @record 
 */
abstract class ParserClass {

    // Own properties of ICalGLib-3.0.ICalGLib.ParserClass

    static name: string
}

interface PeriodClass {
}

/**
 * This is the ICalPeriod class.
 * @record 
 */
abstract class PeriodClass {

    // Own properties of ICalGLib-3.0.ICalGLib.PeriodClass

    static name: string
}

interface PropertyClass {
}

/**
 * This is the ICalProperty class.
 * @record 
 */
abstract class PropertyClass {

    // Own properties of ICalGLib-3.0.ICalGLib.PropertyClass

    static name: string
}

interface RecurIteratorClass {
}

/**
 * This is the ICalRecurIterator class.
 * @record 
 */
abstract class RecurIteratorClass {

    // Own properties of ICalGLib-3.0.ICalGLib.RecurIteratorClass

    static name: string
}

interface RecurrenceClass {
}

/**
 * This is the ICalRecurrence class.
 * @record 
 */
abstract class RecurrenceClass {

    // Own properties of ICalGLib-3.0.ICalGLib.RecurrenceClass

    static name: string
}

interface ReqstatClass {
}

/**
 * This is the ICalReqstat class.
 * @record 
 */
abstract class ReqstatClass {

    // Own properties of ICalGLib-3.0.ICalGLib.ReqstatClass

    static name: string
}

interface TimeClass {
}

/**
 * This is the ICalTime class.
 * @record 
 */
abstract class TimeClass {

    // Own properties of ICalGLib-3.0.ICalGLib.TimeClass

    static name: string
}

interface TimeSpanClass {
}

/**
 * This is the ICalTimeSpan class.
 * @record 
 */
abstract class TimeSpanClass {

    // Own properties of ICalGLib-3.0.ICalGLib.TimeSpanClass

    static name: string
}

interface TimezoneClass {
}

/**
 * This is the ICalTimezone class.
 * @record 
 */
abstract class TimezoneClass {

    // Own properties of ICalGLib-3.0.ICalGLib.TimezoneClass

    static name: string
}

interface TriggerClass {
}

/**
 * This is the ICalTrigger class.
 * @record 
 */
abstract class TriggerClass {

    // Own properties of ICalGLib-3.0.ICalGLib.TriggerClass

    static name: string
}

interface ValueClass {
}

/**
 * This is the ICalValue class.
 * @record 
 */
abstract class ValueClass {

    // Own properties of ICalGLib-3.0.ICalGLib.ValueClass

    static name: string
}

interface _Array {
}

class _Array {

    // Own properties of ICalGLib-3.0.ICalGLib._Array

    static name: string
}

interface _Attach {
}

class _Attach {

    // Own properties of ICalGLib-3.0.ICalGLib._Attach

    static name: string
}

interface _CompIter {
}

class _CompIter {

    // Own properties of ICalGLib-3.0.ICalGLib._CompIter

    static name: string
}

interface _Component {
}

class _Component {

    // Own properties of ICalGLib-3.0.ICalGLib._Component

    static name: string
}

interface _Datetimeperiod {
}

class _Datetimeperiod {

    // Own properties of ICalGLib-3.0.ICalGLib._Datetimeperiod

    static name: string
}

interface _Duration {
}

class _Duration {

    // Own properties of ICalGLib-3.0.ICalGLib._Duration

    static name: string
}

interface _Geo {
}

class _Geo {

    // Own properties of ICalGLib-3.0.ICalGLib._Geo

    static name: string
}

interface _Parameter {
}

class _Parameter {

    // Own properties of ICalGLib-3.0.ICalGLib._Parameter

    static name: string
}

interface _Parser {
}

class _Parser {

    // Own properties of ICalGLib-3.0.ICalGLib._Parser

    static name: string
}

interface _Period {
}

class _Period {

    // Own properties of ICalGLib-3.0.ICalGLib._Period

    static name: string
}

interface _Property {
}

class _Property {

    // Own properties of ICalGLib-3.0.ICalGLib._Property

    static name: string
}

interface _RecurIterator {
}

class _RecurIterator {

    // Own properties of ICalGLib-3.0.ICalGLib._RecurIterator

    static name: string
}

interface _Recurrence {
}

class _Recurrence {

    // Own properties of ICalGLib-3.0.ICalGLib._Recurrence

    static name: string
}

interface _Reqstat {
}

class _Reqstat {

    // Own properties of ICalGLib-3.0.ICalGLib._Reqstat

    static name: string
}

interface _Time {
}

class _Time {

    // Own properties of ICalGLib-3.0.ICalGLib._Time

    static name: string
}

interface _TimeSpan {
}

class _TimeSpan {

    // Own properties of ICalGLib-3.0.ICalGLib._TimeSpan

    static name: string
}

interface _Timezone {
}

class _Timezone {

    // Own properties of ICalGLib-3.0.ICalGLib._Timezone

    static name: string
}

interface _Trigger {
}

class _Trigger {

    // Own properties of ICalGLib-3.0.ICalGLib._Trigger

    static name: string
}

interface _Value {
}

class _Value {

    // Own properties of ICalGLib-3.0.ICalGLib._Value

    static name: string
}

}
export default ICalGLib;