
/*
 * Type Definitions for node-gtk (https://github.com/romgrk/node-gtk)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/gjsify/ts-for-gir
 */
/**
 * ICalGLib-3.0
 */

import type GObject from '@girs/gobject-2.0';
import type GLib from '@girs/glib-2.0';

export enum ComponentKind {
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
export enum ErrorEnum {
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
export enum ErrorState {
    FATAL,
    NONFATAL,
    DEFAULT,
    UNKNOWN,
}
export enum ParameterAction {
    X,
    ASK,
    ABORT,
    NONE,
}
export enum ParameterCutype {
    X,
    INDIVIDUAL,
    GROUP,
    RESOURCE,
    ROOM,
    UNKNOWN,
    NONE,
}
export enum ParameterDisplay {
    X,
    BADGE,
    GRAPHIC,
    FULLSIZE,
    THUMBNAIL,
    NONE,
}
export enum ParameterEnable {
    X,
    TRUE,
    FALSE,
    NONE,
}
export enum ParameterEncoding {
    X,
    TODO_8BIT,
    BASE64,
    NONE,
}
export enum ParameterFbtype {
    X,
    FREE,
    BUSY,
    BUSYUNAVAILABLE,
    BUSYTENTATIVE,
    NONE,
}
export enum ParameterFeature {
    X,
    AUDIO,
    CHAT,
    FEED,
    MODERATOR,
    PHONE,
    SCREEN,
    VIDEO,
    NONE,
}
export enum ParameterKind {
    ANY_PARAMETER,
    ACTIONPARAM_PARAMETER,
    ALTREP_PARAMETER,
    CHARSET_PARAMETER,
    CN_PARAMETER,
    CUTYPE_PARAMETER,
    DELEGATEDFROM_PARAMETER,
    DELEGATEDTO_PARAMETER,
    DIR_PARAMETER,
    DISPLAY_PARAMETER,
    EMAIL_PARAMETER,
    ENABLE_PARAMETER,
    ENCODING_PARAMETER,
    FBTYPE_PARAMETER,
    FEATURE_PARAMETER,
    FILENAME_PARAMETER,
    FMTTYPE_PARAMETER,
    IANA_PARAMETER,
    ID_PARAMETER,
    LABEL_PARAMETER,
    LANGUAGE_PARAMETER,
    LATENCY_PARAMETER,
    LOCAL_PARAMETER,
    LOCALIZE_PARAMETER,
    MANAGEDID_PARAMETER,
    MEMBER_PARAMETER,
    MODIFIED_PARAMETER,
    OPTIONS_PARAMETER,
    PARTSTAT_PARAMETER,
    PATCHACTION_PARAMETER,
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
export enum ParameterLocal {
    X,
    TRUE,
    FALSE,
    NONE,
}
export enum ParameterPartstat {
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
export enum ParameterPatchaction {
    X,
    CREATE,
    BYNAME,
    BYVALUE,
    BYPARAM,
    NONE,
}
export enum ParameterRange {
    X,
    THISANDPRIOR,
    THISANDFUTURE,
    NONE,
}
export enum ParameterRelated {
    X,
    START,
    END,
    NONE,
}
export enum ParameterReltype {
    X,
    PARENT,
    CHILD,
    SIBLING,
    POLL,
    NONE,
}
export enum ParameterRequired {
    X,
    TRUE,
    FALSE,
    NONE,
}
export enum ParameterRole {
    X,
    CHAIR,
    REQPARTICIPANT,
    OPTPARTICIPANT,
    NONPARTICIPANT,
    NONE,
}
export enum ParameterRsvp {
    X,
    TRUE,
    FALSE,
    NONE,
}
export enum ParameterScheduleagent {
    X,
    SERVER,
    CLIENT,
    NONE,
}
export enum ParameterScheduleforcesend {
    X,
    REQUEST,
    REPLY,
    NONE,
}
export enum ParameterStayinformed {
    X,
    TRUE,
    FALSE,
    NONE,
}
export enum ParameterSubstate {
    X,
    OK,
    ERROR,
    SUSPENDED,
    NONE,
}
export enum ParameterValue {
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
export enum ParameterXliccomparetype {
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
export enum ParameterXlicerrortype {
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
export enum ParserState {
    ERROR,
    SUCCESS,
    BEGIN_COMP,
    END_COMP,
    IN_PROGRESS,
}
export enum PropertyAction {
    X,
    AUDIO,
    DISPLAY,
    EMAIL,
    PROCEDURE,
    NONE,
}
export enum PropertyBusytype {
    X,
    BUSY,
    BUSYUNAVAILABLE,
    BUSYTENTATIVE,
    NONE,
}
export enum PropertyCarlevel {
    X,
    CARNONE,
    CARMIN,
    CARFULL1,
    NONE,
}
export enum PropertyCmd {
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
export enum PropertyKind {
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
export enum PropertyMethod {
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
export enum PropertyPollcompletion {
    X,
    SERVER,
    SERVERSUBMIT,
    SERVERCHOICE,
    CLIENT,
    NONE,
}
export enum PropertyPollmode {
    X,
    BASIC,
    NONE,
}
export enum PropertyQuerylevel {
    X,
    CALQL1,
    CALQLNONE,
    NONE,
}
export enum PropertyStatus {
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
export enum PropertyTaskmode {
    X,
    AUTOMATICCOMPLETION,
    AUTOMATICFAILURE,
    AUTOMATICSTATUS,
    NONE,
}
export enum PropertyTransp {
    X,
    OPAQUE,
    OPAQUENOCONFLICT,
    TRANSPARENT,
    TRANSPARENTNOCONFLICT,
    NONE,
}
export enum PropertyXlicclass {
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
export enum Property_Class {
    X,
    PUBLIC,
    PRIVATE,
    CONFIDENTIAL,
    NONE,
}
export enum RecurrenceArrayMaxValues {
    RECURRENCE_ARRAY_MAX,
}
export enum RecurrenceArraySizes {
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
export enum RecurrenceFrequency {
    SECONDLY_RECURRENCE,
    MINUTELY_RECURRENCE,
    HOURLY_RECURRENCE,
    DAILY_RECURRENCE,
    WEEKLY_RECURRENCE,
    MONTHLY_RECURRENCE,
    YEARLY_RECURRENCE,
    NO_RECURRENCE,
}
export enum RecurrenceSkip {
    BACKWARD,
    FORWARD,
    OMIT,
    UNDEFINED,
}
export enum RecurrenceWeekday {
    NO_WEEKDAY,
    SUNDAY_WEEKDAY,
    MONDAY_WEEKDAY,
    TUESDAY_WEEKDAY,
    WEDNESDAY_WEEKDAY,
    THURSDAY_WEEKDAY,
    FRIDAY_WEEKDAY,
    SATURDAY_WEEKDAY,
}
export enum RequestStatus {
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
export enum RestrictionKind {
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
export enum Unknowntokenhandling {
    ASSUME_IANA_TOKEN,
    DISCARD_TOKEN,
    TREAT_AS_ERROR,
}
export enum ValueKind {
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
export function bt(): void
/**
 * Returns the error stored in the library. If no error, return I_CAL_NO_ERROR.
 * @returns Return the error happened
 */
export function errnoReturn(): ErrorEnum
export function errorClearErrno(): void
/**
 * Shout out the errors to the compiler.
 */
export function errorCrashHere(): void
/**
 * Gets the state of an error.
 * @param error The error to be checked
 * @returns The state of the @error
 */
export function errorGetErrorState(error: ErrorEnum): ErrorState
/**
 * Gets the #ICalErrorEnum in the string representation. This method called the icalerrorno_return to get
 * the current error.
 * @returns The string representation of the current error
 */
export function errorPerror(): string | null
/**
 * Restores the error to specified state.
 * @param error The error to be restored
 * @param es The error state to be restored
 */
export function errorRestore(error: string | null, es: ErrorState): void
/**
 * Sets the errno.
 * @param x The error to be set
 */
export function errorSetErrno(x: ErrorEnum): void
/**
 * Sets the state to the corresponding error in the library.
 * @param error The error enum
 * @param state The error state
 */
export function errorSetErrorState(error: ErrorEnum, state: ErrorState): void
export function errorStopHere(): void
/**
 * Translates the #ICalErrorEnum to the string representation.
 * @param e The #ICalErrorEnum to be translated
 * @returns The string representation of @e
 */
export function errorStrerror(e: ErrorEnum): string | null
/**
 * Suppresses the error.
 * @param error The error to be suppressed
 * @returns The error state suppressed
 */
export function errorSupress(error: string | null): ErrorState
/**
 * Gets the setting of #ICalUnknowntokenhandling.
 * @returns The setting of #ICalUnknowntokenhandling
 */
export function getUnknownTokenHandlingSetting(): Unknowntokenhandling
/**
 * Adds an existing buffer to the buffer ring.
 * @param buf The existing buffer to be added into the ical
 */
export function memoryAddTmpBuffer(buf: any | null): void
/**
 * Append the character to the buffer. Only use them on normally allocated memory, or on buffers created
 * from icalmemory_new_buffer, never with buffers created by icalmemory_tmp_buffer. If icalmemory_append_string
 * has to resize a buffer on the ring, the ring will loose track of it an you will have memory problems.
 * @param buf The buffer to be appended. It should not be the memory in ical.
 * @param pos The position at which the new string to be appended
 * @param ch The character to be allocated
 */
export function memoryAppendChar(buf: number[], pos: number[], ch: number): [ /* buf */ number[], /* pos */ number[] ]
/**
 * Appends the string to the buffer. Only use them on normally allocated memory, or on buffers created from
 * icalmemory_new_buffer, never with buffers created by icalmemory_tmp_buffer. If icalmemory_append_string
 * has to resize a buffer on the ring, the ring will loose track of it an you will have memory problems.
 * @param buf The buffer to be appended. It should not be the memory in ical.
 * @param pos The position at which the new string to be appended
 * @param str The string to be allocated
 */
export function memoryAppendString(buf: number[], pos: number[], str: string | null): [ /* buf */ number[], /* pos */ number[] ]
/**
 * Frees the buffer.
 * @param buf The buffer to be freed
 */
export function memoryFreeBuffer(buf: any | null): void
/**
 * Creates a new buffer with target size. The caller should deallocate it when necessary.
 * @param size The size of the new buffer to be created
 * @returns The newly created buffer with the target size.
 */
export function memoryNewBuffer(size: number): any | null
/**
 * Resizes the buffer to the target size.
 * @param buf The buffer needs to be resized
 * @param size The target size the buffer to be resized to
 * @returns The buffer after being resized.
 */
export function memoryResizeBuffer(buf: any | null, size: number): any | null
/**
 * A wrapper around strdup. Partly to trap calls to strdup, partly because in -ansi, gcc on Red Hat claims
 * that strdup is undeclared.
 * @param s The string to be cloned
 * @returns The cloned string.
 */
export function memoryStrdup(s: string | null): string | null
/**
 * Creates a buffer with target size.
 * @param size The size of the buffer to be created
 * @returns The newly created buffer
 */
export function memoryTmpBuffer(size: number): any | null
/**
 * Like strdup, but the buffer is on the ring.
 * @param str The string to be copied
 * @returns The new copy of the @str.
 */
export function memoryTmpCopy(str: string | null): string | null
/**
 * Parses data to #ICalComponent using the given function.
 * @param func The parsing function
 * @returns The parsed #ICalComponent
 */
export function mimeParse(func: MimeParseFunc): Component
/**
 * Fills an array with the 'count' number of occurrences generated by the rrule. Note that the times are
 * returned in UTC, but the times are calculated in local time. YOu will have to convert the results back
 * into local time before using them.
 * @param rule The rule of the recurrence
 * @param start The start seconds past the POSIX epoch
 * @param count The number of elements to be filled up in the `array`
 * @returns If successful, return the array. NULL if failed.
 */
export function recurExpandRecurrence(rule: string | null, start: number, count: number): number[]
/**
 * Returns the code for a request status.
 * @param stat The #ICalRequestStatus to be queried
 * @returns The code for a request status
 */
export function requestStatusCode(stat: RequestStatus): string | null
/**
 * Returns the descriptive text for a request status.
 * @param stat The #ICalRequestStatus to be translated
 * @returns The description of the @stat
 */
export function requestStatusDesc(stat: RequestStatus): string | null
/**
 * Returns a request status for major/minor status numbers.
 * @param major The major number
 * @param minor The minor number
 * @returns The corresponding #ICalRequestStatus
 */
export function requestStatusFromNum(major: number, minor: number): RequestStatus
/**
 * Returns the major number for a request status.
 * @param stat The #ICalRequestStatus to be queried
 * @returns The major number for a request status
 */
export function requestStatusMajor(stat: RequestStatus): number
/**
 * Returns the minor number for a request status.
 * @param stat The #ICalRequestStatus to be queried
 * @returns The minor number for a request status
 */
export function requestStatusMinor(stat: RequestStatus): number
/**
 * Checks whether the #ICalComponent is valid.
 * @param comp The component to be checked
 * @returns Whether the @comp is valid.
 */
export function restrictionCheck(comp: Component): number
/**
 * Compares the kind of restriction and the count to determine whether it is valid.
 * @param restr The restriction kind
 * @param count The number of restrictions
 * @returns Whether it is valid or not. -1 indicates invalid or more analysis. 1 indicates pass and 0 or 2+ indicates fail.
 */
export function restrictionCompare(restr: RestrictionKind, count: number): number
/**
 * Sets #ICalUnknowntokenhandling.
 * @param newSetting A #ICalUnknowntokenhandling
 */
export function setUnknownTokenHandlingSetting(newSetting: Unknowntokenhandling): void
export interface ComponentForeachRecurrenceFunc {
    (comp: Component, span: TimeSpan): void
}
export interface ComponentForeachTZIDFunc {
    (param: Parameter): void
}
export interface MimeParseFunc {
    (bytes: number[]): string | null
}
export interface ParserLineGenFunc {
    (bytes: number[]): string | null
}
export module Array {

    // Constructor properties interface

    export interface ConstructorProperties extends Object.ConstructorProperties {
    }

}

export interface Array {

    // Own properties of ICalGLib-3.0.ICalGLib.Array

    __gtype__: number

    // Owm methods of ICalGLib-3.0.ICalGLib.Array

    /**
     * Creates a deep copy of #ICalArray with the same properties as the `array`.
     * @returns The newly cloned #ICalArray with the same value as the @array
     */
    copy(): Array
    /**
     * Removes the element at the `position` from the array.
     * @param position The position in which the element will be removed from the array
     */
    removeElementAt(position: number): void
    /**
     * Gets the size of the array.
     * @returns The size of current array.
     */
    size(): number

    // Class property signals of ICalGLib-3.0.ICalGLib.Array

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: "notify::always-destroy", callback: (...args: any[]) => void): number
    on(sigName: "notify::always-destroy", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::always-destroy", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::always-destroy", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::always-destroy", ...args: any[]): void
    connect(sigName: "notify::is-global-memory", callback: (...args: any[]) => void): number
    on(sigName: "notify::is-global-memory", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::is-global-memory", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::is-global-memory", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::is-global-memory", ...args: any[]): void
    connect(sigName: "notify::native", callback: (...args: any[]) => void): number
    on(sigName: "notify::native", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::native", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::native", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::native", ...args: any[]): void
    connect(sigName: "notify::native-destroy-func", callback: (...args: any[]) => void): number
    on(sigName: "notify::native-destroy-func", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::native-destroy-func", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::native-destroy-func", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::native-destroy-func", ...args: any[]): void
    connect(sigName: "notify::owner", callback: (...args: any[]) => void): number
    on(sigName: "notify::owner", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::owner", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::owner", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::owner", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

/**
 * This is the ICalArray instance.
 * @class 
 */
export class Array extends Object {

    // Own properties of ICalGLib-3.0.ICalGLib.Array

    static name: string

    // Constructors of ICalGLib-3.0.ICalGLib.Array

    constructor(config?: Array.ConstructorProperties) 
    _init(config?: Array.ConstructorProperties): void
}

export module Attach {

    // Constructor properties interface

    export interface ConstructorProperties extends Object.ConstructorProperties {
    }

}

export interface Attach {

    // Own properties of ICalGLib-3.0.ICalGLib.Attach

    __gtype__: number

    // Owm methods of ICalGLib-3.0.ICalGLib.Attach

    /**
     * Gets the data, if the #ICalAttach is built from the data.
     * @returns The data component of the @attach. %NULL if it is built from url or there is an error.
     */
    getData(): string | null

    // Overloads of getData

    /**
     * Gets a named field from the objects table of associations (see g_object_set_data()).
     * @param key name of the key for that association
     * @returns the data if found,          or %NULL if no such data exists.
     */
    getData(key: string | null): any | null
    /**
     * Checks whether the #ICalAttach is built from url.
     * @returns Whether the @attach is built from url
     */
    getIsUrl(): boolean
    /**
     * Gets the url, if the #ICalAttach is built from the url.
     * @returns The url component of the @attach. %NULL if it is built from data or there is an error.
     */
    getUrl(): string | null

    // Class property signals of ICalGLib-3.0.ICalGLib.Attach

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: "notify::always-destroy", callback: (...args: any[]) => void): number
    on(sigName: "notify::always-destroy", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::always-destroy", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::always-destroy", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::always-destroy", ...args: any[]): void
    connect(sigName: "notify::is-global-memory", callback: (...args: any[]) => void): number
    on(sigName: "notify::is-global-memory", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::is-global-memory", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::is-global-memory", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::is-global-memory", ...args: any[]): void
    connect(sigName: "notify::native", callback: (...args: any[]) => void): number
    on(sigName: "notify::native", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::native", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::native", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::native", ...args: any[]): void
    connect(sigName: "notify::native-destroy-func", callback: (...args: any[]) => void): number
    on(sigName: "notify::native-destroy-func", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::native-destroy-func", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::native-destroy-func", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::native-destroy-func", ...args: any[]): void
    connect(sigName: "notify::owner", callback: (...args: any[]) => void): number
    on(sigName: "notify::owner", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::owner", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::owner", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::owner", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

/**
 * This is the ICalAttach instance.
 * @class 
 */
export class Attach extends Object {

    // Own properties of ICalGLib-3.0.ICalGLib.Attach

    static name: string

    // Constructors of ICalGLib-3.0.ICalGLib.Attach

    constructor(config?: Attach.ConstructorProperties) 
    /**
     * Creates a new #ICalAttach from the data in bytes. Takes a reference of `bytes,` increase the reference
     * before calling this function if you with to use it afterward. The stored bytes should be already encoded
     * with used encoding (like base64).
     * @constructor 
     * @param bytes The #GBytes holding the data used to create the #ICalAttach
     * @returns The newly created #ICalAttach
     */
    static newFromBytes(bytes: any): Attach
    /**
     * Creates a new #ICalAttach from the data.
     * @constructor 
     * @param data The data used to create the #ICalAttach
     * @param freeFn The function used to free the data when the create #ICalAttach is destroyed
     * @returns The newly created #ICalAttach
     */
    static newFromData(data: string | null, freeFn: GLib.Func | null): Attach
    /**
     * Creates a new #ICalAttach from the url.
     * @constructor 
     * @param url The url from which the object is created
     * @returns The newly created #ICalAttach from the @url
     */
    static newFromUrl(url: string | null): Attach
    _init(config?: Attach.ConstructorProperties): void
}

export module CompIter {

    // Constructor properties interface

    export interface ConstructorProperties extends Object.ConstructorProperties {
    }

}

export interface CompIter {

    // Own properties of ICalGLib-3.0.ICalGLib.CompIter

    __gtype__: number

    // Owm methods of ICalGLib-3.0.ICalGLib.CompIter

    /**
     * Gets the current #ICalComponent pointed by #ICalCompIter.
     * @returns A #ICalComponent
     */
    deref(): Component
    /**
     * Gets the next #ICalComponent pointed by #ICalCompIter.
     * @returns A #ICalCompIter
     */
    next(): Component
    /**
     * Gets the prior #ICalComponent pointed by #ICalCompIter.
     * @returns A #ICalCompIter
     */
    prior(): Component

    // Class property signals of ICalGLib-3.0.ICalGLib.CompIter

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: "notify::always-destroy", callback: (...args: any[]) => void): number
    on(sigName: "notify::always-destroy", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::always-destroy", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::always-destroy", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::always-destroy", ...args: any[]): void
    connect(sigName: "notify::is-global-memory", callback: (...args: any[]) => void): number
    on(sigName: "notify::is-global-memory", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::is-global-memory", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::is-global-memory", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::is-global-memory", ...args: any[]): void
    connect(sigName: "notify::native", callback: (...args: any[]) => void): number
    on(sigName: "notify::native", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::native", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::native", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::native", ...args: any[]): void
    connect(sigName: "notify::native-destroy-func", callback: (...args: any[]) => void): number
    on(sigName: "notify::native-destroy-func", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::native-destroy-func", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::native-destroy-func", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::native-destroy-func", ...args: any[]): void
    connect(sigName: "notify::owner", callback: (...args: any[]) => void): number
    on(sigName: "notify::owner", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::owner", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::owner", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::owner", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

/**
 * This is the ICalCompIter instance.
 * @class 
 */
export class CompIter extends Object {

    // Own properties of ICalGLib-3.0.ICalGLib.CompIter

    static name: string

    // Constructors of ICalGLib-3.0.ICalGLib.CompIter

    constructor(config?: CompIter.ConstructorProperties) 
    _init(config?: CompIter.ConstructorProperties): void
}

export module Component {

    // Constructor properties interface

    export interface ConstructorProperties extends Object.ConstructorProperties {
    }

}

export interface Component {

    // Own properties of ICalGLib-3.0.ICalGLib.Component

    __gtype__: number

    // Owm methods of ICalGLib-3.0.ICalGLib.Component

    /**
     * Adds a #ICalComponent into another #ICalComponent as a child component.
     * @param child A child #ICalComponent
     */
    addComponent(child: Component): void
    /**
     * Adds an #ICalProperty into #ICalComponent.
     * @param property An #ICalProperty
     */
    addProperty(property: Property): void
    /**
     * Converts a #ICalComponent to a string.
     * @returns The string representation of #ICalComponent.
     */
    asIcalString(): string | null
    /**
     * Gets the #ICalCompIter pointing to the first child #ICalComponent.
     * @param kind A #ICalComponentKind
     * @returns A #ICalCompIter
     */
    beginComponent(kind: ComponentKind): CompIter
    /**
     * Checks the number of restrictions in #ICalComponent.
     * @returns The number of restrictions in @comp
     */
    checkRestrictions(): number
    /**
     * Deeply clone a #ICalComponent.
     * @returns The newly deeply cloned #ICalComponent.
     */
    clone(): Component
    /**
     * Converts some X-LIC-ERROR properties into RETURN-STATUS properties.
     */
    convertErrors(): void
    /**
     * Counts the child #ICalComponent with the target kind in the parent one.
     * @param kind The target #ICalComponentKind
     * @returns The count of child #ICalComponent in the parent one.
     */
    countComponents(kind: ComponentKind): number
    /**
     * Counts the number of errors in #ICalComponent.
     * @returns The count of errors.
     */
    countErrors(): number
    /**
     * Counts the number of #ICalProperty in #ICalComponent.
     * @param kind A #ICalPropertyKind
     * @returns The number of #ICalProperty.
     */
    countProperties(kind: PropertyKind): number
    /**
     * Gets the #ICalCompIter pointing to the end child #ICalComponent.
     * @param kind A #ICalComponentKind
     * @returns A #ICalCompIter
     */
    endComponent(kind: ComponentKind): CompIter
    /**
     * Cycles through all recurrences of an event. This function will call the specified callback function for
     * once for the base value of DTSTART, and foreach recurring date/time value. It will filter out events
     * that are specified as an EXDATE or an EXRULE.
     * @param start Ignore timespans before this
     * @param end Ignore timespans after this
     */
    foreachRecurrence(start: Time, end: Time): void
    /**
     * Applies the same manipulation on every tzid in #ICalComponent.
     */
    foreachTzid(): void
    /**
     * Gets the comment of the #ICalComponent.
     * @returns The comment of @comp.
     */
    getComment(): string | null
    /**
     * Gets the current #ICalComponent in #ICalComponent.
     * @returns The current #ICalComponent.
     */
    getCurrentComponent(): Component
    /**
     * Gets the current #ICalProperty in #ICalComponent.
     * @returns The current #ICalProperty.
     */
    getCurrentProperty(): Property
    /**
     * Gets the description of the #ICalComponent.
     * @returns The description of @comp.
     */
    getDescription(): string | null
    /**
     * Gets the dtend of the #ICalComponent.
     * @returns A #ICalTime.
     */
    getDtend(): Time
    /**
     * Gets the dtstamp of the #ICalComponent.
     * @returns A #ICalTime.
     */
    getDtstamp(): Time
    /**
     * Gets the dtstart of the #ICalComponent.
     * @returns A #ICalTime.
     */
    getDtstart(): Time
    /**
     * Gets the due of the #ICalComponent.
     * @returns A #ICalTime.
     */
    getDue(): Time
    /**
     * Gets the duration of the #ICalComponent.
     * @returns An #ICalDuration.
     */
    getDuration(): Duration
    /**
     * Gets the first #ICalComponent with specific kind in #ICalComponent.
     * @param kind A #ICalComponentKind
     * @returns The first #ICalComponent.
     */
    getFirstComponent(kind: ComponentKind): Component | null
    /**
     * Gets the first #ICalProperty with specific kind in #ICalComponent.
     * @param kind A #ICalPropertyKind
     * @returns The first #ICalProperty.
     */
    getFirstProperty(kind: PropertyKind): Property | null
    /**
     * For VCOMPONENT: Returns a reference to the first VEVENT, VTODO or VJOURNAL.
     * @returns A reference to the first VEVENT, VTODO or VJOURNAL
     */
    getFirstRealComponent(): Component
    /**
     * Returns the first VEVENT, VTODO or VJOURNAL sub-component of cop, or comp if it is one of those types.
     * @returns The first VEVENT, VTODO or VJOURNAL sub-component.
     */
    getInner(): Component | null
    /**
     * Gets the location of the #ICalComponent.
     * @returns The location of @comp.
     */
    getLocation(): string | null
    /**
     * Gets the method of the #ICalComponent.
     * @returns A #ICalPropertyMethod.
     */
    getMethod(): PropertyMethod
    /**
     * Gets the next #ICalComponent with specific kind in #ICalComponent.
     * @param kind A #ICalComponentKind
     * @returns The next #ICalComponent.
     */
    getNextComponent(kind: ComponentKind): Component | null
    /**
     * Gets the next #ICalProperty with specific kind in #ICalComponent.
     * @param kind A #ICalPropertyKind
     * @returns The next #ICalProperty.
     */
    getNextProperty(kind: PropertyKind): Property | null
    /**
     * Gets the parent component of the `component`.
     * @returns The parent #ICalComponent of the @component.
     */
    getParent(): Component | null
    /**
     * Gets the recurrenceid of the #ICalComponent.
     * @returns A #ICalTime.
     */
    getRecurrenceid(): Time
    /**
     * Gets the relcalid of the #ICalComponent.
     * @returns The relcalid of @comp.
     */
    getRelcalid(): string | null
    /**
     * Gets the sequence of the #ICalComponent.
     * @returns The sequence of @comp.
     */
    getSequence(): number
    /**
     * For VEVENT, VTODO, VJOURNAL and VTIMEZONE: reports the start and end times of an event in UTC.
     * @returns A #ICalTimeSpan.
     */
    getSpan(): TimeSpan
    /**
     * Gets the status of the #ICalComponent.
     * @returns A #ICalPropertyStatus.
     */
    getStatus(): PropertyStatus
    /**
     * Gets the summary of the #ICalComponent.
     * @returns The summary of @comp.
     */
    getSummary(): string | null
    /**
     * Returns the icaltimezone in the component corresponding to the TZID, or NULL if it can't be found.
     * @param tzid A string representing timezone
     * @returns A #ICalTimezone.
     */
    getTimezone(tzid: string | null): Timezone | null
    /**
     * Gets the uid of the #ICalComponent.
     * @returns The uid of @comp.
     */
    getUid(): string | null
    /**
     * Checks whether #ICalComponent is valid.
     * @returns 1 if yes, 0 if not.
     */
    isValid(): boolean
    /**
     * Gets the type of #ICalComponent.
     * @returns A #ICalComponentKind.
     */
    isa(): ComponentKind
    /**
     * Checks whether the native part of #ICalComponent is icalcomponent.
     * @returns 1 if yes, 0 if not.
     */
    isaComponent(): number
    /**
     * Takes 2 VCALENDAR components and merges the second one into the first, resolving any problems with conflicting
     * TZIDs. comp_to_merge will no longer exist after calling this function.
     * @param compToMerge A #ICalComponent. After merged it will not exist any more.
     */
    mergeComponent(compToMerge: Component): void
    /**
     * Removes a child #ICalComponent from another #ICalComponent.
     * @param child A child #ICalComponent
     */
    removeComponent(child: Component): void
    /**
     * Removes #ICalProperty from #ICalComponent. Caution: The compare is based on address. So you must use
     * the original #ICalProperty as the target.
     * @param property A #ICalProperty
     */
    removeProperty(property: Property): void
    /**
     * Sets the comment of the #ICalComponent.
     * @param v A string representing comment
     */
    setComment(v: string | null): void
    /**
     * Sets the description of the #ICalComponent.
     * @param v A string representing description
     */
    setDescription(v: string | null): void
    /**
     * Sets the dtend of the #ICalComponent.
     * @param v A #ICalTime
     */
    setDtend(v: Time): void
    /**
     * Sets the dtstamp of the #ICalComponent.
     * @param v A #ICalTime
     */
    setDtstamp(v: Time): void
    /**
     * Sets the dtstart of the #ICalComponent.
     * @param v A #ICalTime
     */
    setDtstart(v: Time): void
    /**
     * Sets the due of the #ICalComponent.
     * @param v A #ICalTime
     */
    setDue(v: Time): void
    /**
     * Sets the duration of the #ICalComponent.
     * @param v A #ICalDuration
     */
    setDuration(v: Duration): void
    /**
     * Sets the location of the #ICalComponent.
     * @param v A string representing location
     */
    setLocation(v: string | null): void
    /**
     * Sets the method of the #ICalComponent.
     * @param method A #ICalPropertyMethod
     */
    setMethod(method: PropertyMethod): void
    /**
     * Sets the `parent` #ICalComponent of the specified `component`.
     * @param parent An #ICalComponent, a new parent
     */
    setParent(parent: Component | null): void
    /**
     * Sets the recurrenceid of the #ICalComponent.
     * @param v A #ICalTime
     */
    setRecurrenceid(v: Time): void
    /**
     * Sets the relcalid of the #ICalComponent.
     * @param v A string representing relcalid
     */
    setRelcalid(v: string | null): void
    /**
     * Sets the sequence of the #ICalComponent.
     * @param v The sequence number
     */
    setSequence(v: number): void
    /**
     * Sets the status of the #ICalComponent.
     * @param status A #ICalPropertyStatus
     */
    setStatus(status: PropertyStatus): void
    /**
     * Sets the summary of the #ICalComponent.
     * @param v A string representing summary
     */
    setSummary(v: string | null): void
    /**
     * Sets the uid of the #ICalComponent.
     * @param v A string representing uid
     */
    setUid(v: string | null): void
    /**
     * Removes all X-LIC-ERROR properties.
     */
    stripErrors(): void

    // Class property signals of ICalGLib-3.0.ICalGLib.Component

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: "notify::always-destroy", callback: (...args: any[]) => void): number
    on(sigName: "notify::always-destroy", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::always-destroy", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::always-destroy", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::always-destroy", ...args: any[]): void
    connect(sigName: "notify::is-global-memory", callback: (...args: any[]) => void): number
    on(sigName: "notify::is-global-memory", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::is-global-memory", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::is-global-memory", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::is-global-memory", ...args: any[]): void
    connect(sigName: "notify::native", callback: (...args: any[]) => void): number
    on(sigName: "notify::native", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::native", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::native", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::native", ...args: any[]): void
    connect(sigName: "notify::native-destroy-func", callback: (...args: any[]) => void): number
    on(sigName: "notify::native-destroy-func", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::native-destroy-func", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::native-destroy-func", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::native-destroy-func", ...args: any[]): void
    connect(sigName: "notify::owner", callback: (...args: any[]) => void): number
    on(sigName: "notify::owner", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::owner", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::owner", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::owner", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

/**
 * This is the ICalComponent instance.
 * @class 
 */
export class Component extends Object {

    // Own properties of ICalGLib-3.0.ICalGLib.Component

    static name: string

    // Constructors of ICalGLib-3.0.ICalGLib.Component

    constructor(config?: Component.ConstructorProperties) 
    /**
     * Creates a new #ICalComponent with specific type.
     * @constructor 
     * @param kind The #ICalComponentKind
     * @returns The newly created #ICalComponent.
     */
    constructor(kind: ComponentKind) 
    /**
     * Creates a new #ICalComponent with specific type.
     * @constructor 
     * @param kind The #ICalComponentKind
     * @returns The newly created #ICalComponent.
     */
    static new(kind: ComponentKind): Component
    /**
     * Creates a new #ICalComponent based on a string.
     * @constructor 
     * @param str The string used to create #ICalComponent
     * @returns The newly created #ICalComponent based on @str.
     */
    static newFromString(str: string | null): Component
    /**
     * Creates a #ICalComponent with the type to be vagenda.
     * @constructor 
     * @returns The newly created #ICalComponent.
     */
    static newVagenda(): Component
    /**
     * Creates a #ICalComponent with the type to be valarm.
     * @constructor 
     * @returns The newly created #ICalComponent.
     */
    static newValarm(): Component
    /**
     * Creates a #ICalComponent with the type to be vavailability.
     * @constructor 
     * @returns The newly created #ICalComponent.
     */
    static newVavailability(): Component
    /**
     * Creates a #ICalComponent with the type to be vcalendar.
     * @constructor 
     * @returns The newly created #ICalComponent.
     */
    static newVcalendar(): Component
    /**
     * Creates a #ICalComponent with the type to be vevent.
     * @constructor 
     * @returns The newly created #ICalComponent.
     */
    static newVevent(): Component
    /**
     * Creates a #ICalComponent with the type to be vfreebusy.
     * @constructor 
     * @returns The newly created #ICalComponent.
     */
    static newVfreebusy(): Component
    /**
     * Creates a #ICalComponent with the type to be vjournal.
     * @constructor 
     * @returns The newly created #ICalComponent.
     */
    static newVjournal(): Component
    /**
     * Creates a #ICalComponent with the type to be vpoll.
     * @constructor 
     * @returns The newly created #ICalComponent.
     */
    static newVpoll(): Component
    /**
     * Creates a #ICalComponent with the type to be vquery.
     * @constructor 
     * @returns The newly created #ICalComponent.
     */
    static newVquery(): Component
    /**
     * Creates a #ICalComponent with the type to be vtimezone.
     * @constructor 
     * @returns The newly created #ICalComponent.
     */
    static newVtimezone(): Component
    /**
     * Creates a #ICalComponent with the type to be vtodo.
     * @constructor 
     * @returns The newly created #ICalComponent.
     */
    static newVtodo(): Component
    /**
     * Creates a #ICalComponent with the type to be vvoter.
     * @constructor 
     * @returns The newly created #ICalComponent.
     */
    static newVvoter(): Component
    /**
     * Creates a new #ICalComponent based on name of x property.
     * @constructor 
     * @param xName The name of x property
     * @returns The newly created #ICalComponent.
     */
    static newX(xName: string | null): Component
    /**
     * Creates a #ICalComponent with the type to be xavailable.
     * @constructor 
     * @returns The newly created #ICalComponent.
     */
    static newXavailable(): Component
    /**
     * Creates a #ICalComponent with the type to be xdaylight.
     * @constructor 
     * @returns The newly created #ICalComponent.
     */
    static newXdaylight(): Component
    /**
     * Creates a #ICalComponent with the type to be xstandard.
     * @constructor 
     * @returns The newly created #ICalComponent.
     */
    static newXstandard(): Component
    /**
     * Creates a #ICalComponent with the type to be xvote.
     * @constructor 
     * @returns The newly created #ICalComponent.
     */
    static newXvote(): Component
    _init(config?: Component.ConstructorProperties): void
    /**
     * Converts a string to a #ICalComponentKind.
     * @param string A string
     * @returns A #ICalComponentKind
     */
    static kindFromString(string: string | null): ComponentKind
    /**
     * Checks if a #ICalComponentKind is valid.
     * @param kind A #ICalComponentKind
     * @returns 1 if @kind id a #ICalComponent but not the I_CAL_NO_COMPONENT, 0 if not.
     */
    static kindIsValid(kind: ComponentKind): boolean
    /**
     * Converts a #ICalComponentKind to a string.
     * @param kind A #ICalComponentKind
     * @returns The string representation of @kind.
     */
    static kindToString(kind: ComponentKind): string | null
}

export module Datetimeperiod {

    // Constructor properties interface

    export interface ConstructorProperties extends Object.ConstructorProperties {
    }

}

export interface Datetimeperiod {

    // Own properties of ICalGLib-3.0.ICalGLib.Datetimeperiod

    __gtype__: number

    // Owm methods of ICalGLib-3.0.ICalGLib.Datetimeperiod

    /**
     * Gets the period attribute of #ICalDatetimeperiod.
     * @returns The period attribute of @dtp.
     */
    getPeriod(): Period
    /**
     * Gets the time attribute of #ICalDatetimeperiod.
     * @returns The time attribute of @dtp.
     */
    getTime(): Time
    /**
     * Sets the period attribute of #ICalDatetimeperiod.
     * @param period The period attribute of `dtp`
     */
    setPeriod(period: Period): void
    /**
     * Sets the time attribute of #ICalDatetimeperiod.
     * @param time The time attribute of `dtp`
     */
    setTime(time: Time): void

    // Class property signals of ICalGLib-3.0.ICalGLib.Datetimeperiod

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: "notify::always-destroy", callback: (...args: any[]) => void): number
    on(sigName: "notify::always-destroy", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::always-destroy", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::always-destroy", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::always-destroy", ...args: any[]): void
    connect(sigName: "notify::is-global-memory", callback: (...args: any[]) => void): number
    on(sigName: "notify::is-global-memory", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::is-global-memory", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::is-global-memory", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::is-global-memory", ...args: any[]): void
    connect(sigName: "notify::native", callback: (...args: any[]) => void): number
    on(sigName: "notify::native", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::native", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::native", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::native", ...args: any[]): void
    connect(sigName: "notify::native-destroy-func", callback: (...args: any[]) => void): number
    on(sigName: "notify::native-destroy-func", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::native-destroy-func", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::native-destroy-func", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::native-destroy-func", ...args: any[]): void
    connect(sigName: "notify::owner", callback: (...args: any[]) => void): number
    on(sigName: "notify::owner", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::owner", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::owner", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::owner", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

/**
 * This is the ICalDatetimeperiod instance.
 * @class 
 */
export class Datetimeperiod extends Object {

    // Own properties of ICalGLib-3.0.ICalGLib.Datetimeperiod

    static name: string

    // Constructors of ICalGLib-3.0.ICalGLib.Datetimeperiod

    constructor(config?: Datetimeperiod.ConstructorProperties) 
    /**
     * Creates a new #ICalDatetimeperiod.
     * @constructor 
     * @returns The newly created #ICalDatetimeperiod.
     */
    constructor() 
    /**
     * Creates a new #ICalDatetimeperiod.
     * @constructor 
     * @returns The newly created #ICalDatetimeperiod.
     */
    static new(): Datetimeperiod
    _init(config?: Datetimeperiod.ConstructorProperties): void
}

export module Duration {

    // Constructor properties interface

    export interface ConstructorProperties extends Object.ConstructorProperties {
    }

}

export interface Duration {

    // Own properties of ICalGLib-3.0.ICalGLib.Duration

    __gtype__: number

    // Owm methods of ICalGLib-3.0.ICalGLib.Duration

    /**
     * Converts the #ICalDuration to the representation in string.
     * @returns The duration in string
     */
    asIcalString(): string | null
    /**
     * Converts the #ICalDuration to the representation in second.
     * @returns The duration in second
     */
    asInt(): number
    /**
     * Gets the days of #ICalDuration.
     * @returns The days.
     */
    getDays(): number
    /**
     * Gets the hours of #ICalDuration.
     * @returns The hours.
     */
    getHours(): number
    /**
     * Gets the minutes of #ICalDuration.
     * @returns The minutes.
     */
    getMinutes(): number
    /**
     * Gets the seconds of #ICalDuration.
     * @returns The seconds.
     */
    getSeconds(): number
    /**
     * Gets the weeks of #ICalDuration.
     * @returns The weeks.
     */
    getWeeks(): number
    /**
     * Checks whether the #ICalDuration is the bad_duration.
     * @returns 1 if @duration is the bad_duration, 0 if not.
     */
    isBadDuration(): boolean
    /**
     * Gets the is_neg of #ICalDuration.
     * @returns The is_neg.
     */
    isNeg(): boolean
    /**
     * Checks whether the #ICalDuration is the null_duration.
     * @returns 1 if @duration is the null_duration, 0 if not.
     */
    isNullDuration(): boolean
    /**
     * Sets the days of #ICalDuration.
     * @param days The days
     */
    setDays(days: number): void
    /**
     * Sets the hours of #ICalDuration.
     * @param hours The hours
     */
    setHours(hours: number): void
    /**
     * Sets the is_neg of #ICalDuration.
     * @param isNeg The is_neg
     */
    setIsNeg(isNeg: boolean): void
    /**
     * Sets the minutes of #ICalDuration.
     * @param minutes The minutes
     */
    setMinutes(minutes: number): void
    /**
     * Sets the seconds of #ICalDuration.
     * @param seconds The seconds
     */
    setSeconds(seconds: number): void
    /**
     * Sets the weeks of #ICalDuration.
     * @param weeks The weeks
     */
    setWeeks(weeks: number): void

    // Class property signals of ICalGLib-3.0.ICalGLib.Duration

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: "notify::always-destroy", callback: (...args: any[]) => void): number
    on(sigName: "notify::always-destroy", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::always-destroy", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::always-destroy", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::always-destroy", ...args: any[]): void
    connect(sigName: "notify::is-global-memory", callback: (...args: any[]) => void): number
    on(sigName: "notify::is-global-memory", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::is-global-memory", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::is-global-memory", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::is-global-memory", ...args: any[]): void
    connect(sigName: "notify::native", callback: (...args: any[]) => void): number
    on(sigName: "notify::native", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::native", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::native", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::native", ...args: any[]): void
    connect(sigName: "notify::native-destroy-func", callback: (...args: any[]) => void): number
    on(sigName: "notify::native-destroy-func", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::native-destroy-func", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::native-destroy-func", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::native-destroy-func", ...args: any[]): void
    connect(sigName: "notify::owner", callback: (...args: any[]) => void): number
    on(sigName: "notify::owner", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::owner", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::owner", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::owner", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

/**
 * This is the ICalDuration instance.
 * @class 
 */
export class Duration extends Object {

    // Own properties of ICalGLib-3.0.ICalGLib.Duration

    static name: string

    // Constructors of ICalGLib-3.0.ICalGLib.Duration

    constructor(config?: Duration.ConstructorProperties) 
    /**
     * Creates a bad #ICalDuration.
     * @constructor 
     * @returns The newly created #ICalDuration
     */
    static newBadDuration(): Duration
    /**
     * Creates a #ICalDuration from the duration in second.
     * @constructor 
     * @param t The duration in second
     * @returns The newly created #ICalDuration
     */
    static newFromInt(t: number): Duration
    /**
     * Creates a #ICalDuration from the duration in string.
     * @constructor 
     * @param str The string representation of the duration
     * @returns The newly created #ICalDuration
     */
    static newFromString(str: string | null): Duration
    /**
     * Creates a #ICalDuration with all the fields to be zero.
     * @constructor 
     * @returns The newly created #ICalDuration
     */
    static newNullDuration(): Duration
    _init(config?: Duration.ConstructorProperties): void
}

export module Geo {

    // Constructor properties interface

    export interface ConstructorProperties extends Object.ConstructorProperties {
    }

}

export interface Geo {

    // Own properties of ICalGLib-3.0.ICalGLib.Geo

    __gtype__: number

    // Owm methods of ICalGLib-3.0.ICalGLib.Geo

    /**
     * Creates a new #ICalGeo, copy of `geo`.
     * @returns The newly created #ICalGeo, copy of @geo.
     */
    clone(): Geo
    /**
     * Gets the latitude of #ICalGeo.
     * @returns The latitude.
     */
    getLat(): number
    /**
     * Gets the longitude of #ICalGeo.
     * @returns The longitude.
     */
    getLon(): number
    /**
     * Sets the latitude of #ICalGeo.
     * @param lat The latitude
     */
    setLat(lat: number): void
    /**
     * Sets the longitude of #ICalGeo.
     * @param lon The longitude
     */
    setLon(lon: number): void

    // Class property signals of ICalGLib-3.0.ICalGLib.Geo

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: "notify::always-destroy", callback: (...args: any[]) => void): number
    on(sigName: "notify::always-destroy", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::always-destroy", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::always-destroy", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::always-destroy", ...args: any[]): void
    connect(sigName: "notify::is-global-memory", callback: (...args: any[]) => void): number
    on(sigName: "notify::is-global-memory", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::is-global-memory", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::is-global-memory", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::is-global-memory", ...args: any[]): void
    connect(sigName: "notify::native", callback: (...args: any[]) => void): number
    on(sigName: "notify::native", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::native", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::native", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::native", ...args: any[]): void
    connect(sigName: "notify::native-destroy-func", callback: (...args: any[]) => void): number
    on(sigName: "notify::native-destroy-func", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::native-destroy-func", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::native-destroy-func", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::native-destroy-func", ...args: any[]): void
    connect(sigName: "notify::owner", callback: (...args: any[]) => void): number
    on(sigName: "notify::owner", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::owner", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::owner", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::owner", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

/**
 * This is the ICalGeo instance.
 * @class 
 */
export class Geo extends Object {

    // Own properties of ICalGLib-3.0.ICalGLib.Geo

    static name: string

    // Constructors of ICalGLib-3.0.ICalGLib.Geo

    constructor(config?: Geo.ConstructorProperties) 
    /**
     * Creates a new #ICalGeo.
     * @constructor 
     * @param lat Latitude
     * @param lon Longitude
     * @returns The newly created #ICalGeo.
     */
    constructor(lat: number, lon: number) 
    /**
     * Creates a new #ICalGeo.
     * @constructor 
     * @param lat Latitude
     * @param lon Longitude
     * @returns The newly created #ICalGeo.
     */
    static new(lat: number, lon: number): Geo
    _init(config?: Geo.ConstructorProperties): void
}

export module Object {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of ICalGLib-3.0.ICalGLib.Object

        /**
         * Whether free the native libical structure on #ICalObject's finalize even
         * if the object has set an owner.
         */
        alwaysDestroy?: boolean | null
        /**
         * Whether the native libical structure is from a global shared memory.
         * If TRUE, then it is not freed on #ICalObject's finalize.
         */
        isGlobalMemory?: boolean | null
        /**
         * The native libical structure for this ICalObject.
         */
        native?: any | null
        /**
         * GDestroyNotify function to use to destroy the native libical pointer.
         */
        nativeDestroyFunc?: any | null
        /**
         * Owner of the native libical structure. If set, then it is
         * responsible for a free of the native libical structure.
         */
        owner?: GObject.Object | null
    }

}

export interface Object {

    // Own properties of ICalGLib-3.0.ICalGLib.Object

    /**
     * Whether free the native libical structure on #ICalObject's finalize even
     * if the object has set an owner.
     */
    alwaysDestroy: boolean
    /**
     * Whether the native libical structure is from a global shared memory.
     * If TRUE, then it is not freed on #ICalObject's finalize.
     */
    readonly isGlobalMemory: boolean
    /**
     * The native libical structure for this ICalObject.
     */
    readonly native: any
    /**
     * GDestroyNotify function to use to destroy the native libical pointer.
     */
    nativeDestroyFunc: any
    /**
     * Owner of the native libical structure. If set, then it is
     * responsible for a free of the native libical structure.
     */
    owner: GObject.Object
    __gtype__: number

    // Owm methods of ICalGLib-3.0.ICalGLib.Object

    /**
     * Adds a `depender` into the list of objects which should not be destroyed before
     * this `iobject`. It's usually used for cases where the `iobject` uses native libical
     * structure from the `depender`. The `depender` is referenced. It's illegal to try
     * to add one `depender` multiple times.
     * @param depender a #GObject depender
     */
    addDepender(depender: GObject.Object): void
    /**
     * Obtain the `ICalObject:`:always-destroy property value.
     * @returns Whether the native libical structure is freed even when an owner is set.
     */
    getAlwaysDestroy(): boolean
    /**
     * Obtains whether the native libical structure is a global shared memory,
     * thus should not be destroyed. This can be set only during construction time.
     * @returns Whether the native libical structure is a global shared memory.
     */
    getIsGlobalMemory(): boolean
    /**
     * Obtain current owner of the native libical structure. The returned pointer,
     * if not NULL, is referenced for thread safety. Unref it with g_object_unref
     * when done with it.
     * @returns Current owner of the libical    native structure. Returns %NULL when there is no owner.
     */
    refOwner(): GObject.Object | null
    /**
     * Removes a `depender` from the list of objects which should not be destroyed before
     * this `iobject,` previously added with i_cal_object_add_depender(). It's illegal to try
     * to remove the `depender` which is not in the internal list.
     * @param depender a #GObject depender
     */
    removeDepender(depender: GObject.Object): void
    /**
     * Unref and remove the owner.
     */
    removeOwner(): void
    /**
     * Sets the `ICalObject:`:always-destroy property value. When %TRUE, the native
     * libical structure is always freed, even when an owner of the `iobject` is set.
     * @param value value to set
     */
    setAlwaysDestroy(value: boolean): void
    /**
     * Sets a function to be used to destroy the native libical structure.
     * @param nativeDestroyFunc Function to be used to destroy the native libical structure
     */
    setNativeDestroyFunc(nativeDestroyFunc: GLib.DestroyNotify): void
    /**
     * Sets an owner of the native libical structure, that is an object responsible
     * for a destroy of the native libical structure.
     * @param owner Owner of the native libical structure
     */
    setOwner(owner: GObject.Object): void
    /**
     * Obtain native libical structure pointer associated with this `iobject` and sets the one
     * at `iobject` to NULL, thus it's invalid since now on.
     * @returns Native libical structure pointer associated with this @iobject.
     */
    stealNative(): any | null

    // Class property signals of ICalGLib-3.0.ICalGLib.Object

    connect(sigName: "notify::always-destroy", callback: (...args: any[]) => void): number
    on(sigName: "notify::always-destroy", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::always-destroy", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::always-destroy", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::always-destroy", ...args: any[]): void
    connect(sigName: "notify::is-global-memory", callback: (...args: any[]) => void): number
    on(sigName: "notify::is-global-memory", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::is-global-memory", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::is-global-memory", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::is-global-memory", ...args: any[]): void
    connect(sigName: "notify::native", callback: (...args: any[]) => void): number
    on(sigName: "notify::native", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::native", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::native", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::native", ...args: any[]): void
    connect(sigName: "notify::native-destroy-func", callback: (...args: any[]) => void): number
    on(sigName: "notify::native-destroy-func", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::native-destroy-func", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::native-destroy-func", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::native-destroy-func", ...args: any[]): void
    connect(sigName: "notify::owner", callback: (...args: any[]) => void): number
    on(sigName: "notify::owner", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::owner", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::owner", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::owner", ...args: any[]): void
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
 * This is an ICalObject instance struct.
 * @class 
 */
export class Object extends GObject.Object {

    // Own properties of ICalGLib-3.0.ICalGLib.Object

    static name: string

    // Constructors of ICalGLib-3.0.ICalGLib.Object

    constructor(config?: Object.ConstructorProperties) 
    _init(config?: Object.ConstructorProperties): void
    /**
     * Frees all global objects. Any references to them are invalidated
     * by this call, unless they had been g_object_ref()-ed manually.
     */
    static freeGlobalObjects(): void
}

export module Parameter {

    // Constructor properties interface

    export interface ConstructorProperties extends Object.ConstructorProperties {
    }

}

export interface Parameter {

    // Own properties of ICalGLib-3.0.ICalGLib.Parameter

    __gtype__: number

    // Owm methods of ICalGLib-3.0.ICalGLib.Parameter

    /**
     * Converts an #ICalParameter to the string representation.
     * @returns The string representation of the @parameter.
     */
    asIcalString(): string | null
    /**
     * Deep clone a #ICalParameter.
     * @returns The newly created #ICalParameter with the same properties as the @p.
     */
    clone(): Parameter
    getActionparam(): ParameterAction
    getAltrep(): string | null
    getCharset(): string | null
    getCn(): string | null
    getCutype(): ParameterCutype | null
    getDelegatedfrom(): string | null
    getDelegatedto(): string | null
    getDir(): string | null
    getDisplay(): ParameterDisplay
    getEmail(): string | null
    getEnable(): ParameterEnable
    getEncoding(): ParameterEncoding
    getFbtype(): ParameterFbtype
    getFeature(): ParameterFeature
    getFilename(): string | null
    getFmttype(): string | null
    getIana(): string | null
    /**
     * Gets the iana_name property of the native part of the #ICalParameter.
     * @returns The property of the @value
     */
    getIanaName(): string | null
    /**
     * Gets the iana_value property of the native part of the #ICalParameter.
     * @returns The property of the @value
     */
    getIanaValue(): string | null
    getId(): string | null
    getLabel(): string | null
    getLanguage(): string | null
    getLatency(): string | null
    getLocal(): ParameterLocal
    getLocalize(): string | null
    getManagedid(): string | null
    getMember(): string | null
    getModified(): string | null
    getOptions(): string | null
    /**
     * Gets the parent #ICalProperty of the specified #ICalParameter.
     * @returns The parent #ICalProperty
     */
    getParent(): Property | null
    getPartstat(): ParameterPartstat
    getPatchaction(): ParameterPatchaction
    getPubliccomment(): string | null
    getRange(): ParameterRange
    getReason(): string | null
    getRelated(): ParameterRelated
    getReltype(): ParameterReltype
    getRequired(): ParameterRequired
    getResponse(): number
    getRole(): ParameterRole
    getRsvp(): ParameterRsvp
    getScheduleagent(): ParameterScheduleagent
    getScheduleforcesend(): ParameterScheduleforcesend
    getSchedulestatus(): string | null
    getSentby(): string | null
    getSize(): string | null
    getStayinformed(): ParameterStayinformed
    getSubstate(): ParameterSubstate
    getTzid(): string | null
    getValue(): ParameterValue
    getX(): string | null
    getXliccomparetype(): ParameterXliccomparetype
    getXlicerrortype(): ParameterXlicerrortype
    /**
     * Gets the xname property of the native part of the #ICalParameter.
     * @returns The property of the @value
     */
    getXname(): string | null
    /**
     * Gets the xvalue property of the native part of the #ICalParameter.
     * @returns The property of the @value
     */
    getXvalue(): string | null
    /**
     * Checks whether native parts of two #ICalParameters have the same name.
     * @param param2 The #ICalParameter to be checked
     * @returns 1 if the parameters have the same name, 0 or not.
     */
    hasSameName(param2: Parameter): number
    /**
     * Checks the type of a #ICalParameter.
     * @returns The type of the @parameter.
     */
    isa(): ParameterKind
    /**
     * Checks whether the native part of the #ICalParameter is of type icalparameter.
     * @returns 1 if the native part is of type icalparameter, 0 if not.
     */
    isaParameter(): number
    setActionparam(v: ParameterAction): void
    setAltrep(v: string | null): void
    setCharset(v: string | null): void
    setCn(v: string | null): void
    setCutype(v: ParameterCutype): void
    setDelegatedfrom(v: string | null): void
    setDelegatedto(v: string | null): void
    setDir(v: string | null): void
    setDisplay(value: ParameterDisplay): void
    setEmail(value: string | null): void
    setEnable(v: ParameterEnable): void
    setEncoding(v: ParameterEncoding): void
    setFbtype(v: ParameterFbtype): void
    setFeature(value: ParameterFeature): void
    setFilename(v: string | null): void
    setFmttype(v: string | null): void
    setIana(v: string | null): void
    /**
     * Sets the iana_name property of the native part of the #ICalParameter.
     * @param v The name to be set into the `param`
     */
    setIanaName(v: string | null): void
    /**
     * Sets the iana_value property of the native part of the #ICalParameter.
     * @param v The value to be set into the `param`
     */
    setIanaValue(v: string | null): void
    setId(v: string | null): void
    setLabel(value: string | null): void
    setLanguage(v: string | null): void
    setLatency(v: string | null): void
    setLocal(v: ParameterLocal): void
    setLocalize(v: string | null): void
    setManagedid(v: string | null): void
    setMember(v: string | null): void
    setModified(v: string | null): void
    setOptions(v: string | null): void
    /**
     * Sets the parent #ICalProperty of an #ICalParameter.
     * @param property The parent #ICalProperty
     */
    setParent(property: Property | null): void
    setPartstat(v: ParameterPartstat): void
    setPatchaction(value: ParameterPatchaction): void
    setPubliccomment(v: string | null): void
    setRange(v: ParameterRange): void
    setReason(v: string | null): void
    setRelated(v: ParameterRelated): void
    setReltype(v: ParameterReltype): void
    setRequired(v: ParameterRequired): void
    setResponse(v: number): void
    setRole(v: ParameterRole): void
    setRsvp(v: ParameterRsvp): void
    setScheduleagent(v: ParameterScheduleagent): void
    setScheduleforcesend(v: ParameterScheduleforcesend): void
    setSchedulestatus(v: string | null): void
    setSentby(v: string | null): void
    setSize(v: string | null): void
    setStayinformed(v: ParameterStayinformed): void
    setSubstate(v: ParameterSubstate): void
    setTzid(v: string | null): void
    setValue(v: ParameterValue): void
    setX(v: string | null): void
    setXliccomparetype(v: ParameterXliccomparetype): void
    setXlicerrortype(v: ParameterXlicerrortype): void
    /**
     * Sets the xname property of the native part of the #ICalParameter.
     * @param v The name to be set into the `param`
     */
    setXname(v: string | null): void
    /**
     * Sets the xvalue property of the native part of the #ICalParameter.
     * @param v The value to be set into the `param`
     */
    setXvalue(v: string | null): void

    // Class property signals of ICalGLib-3.0.ICalGLib.Parameter

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: "notify::always-destroy", callback: (...args: any[]) => void): number
    on(sigName: "notify::always-destroy", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::always-destroy", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::always-destroy", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::always-destroy", ...args: any[]): void
    connect(sigName: "notify::is-global-memory", callback: (...args: any[]) => void): number
    on(sigName: "notify::is-global-memory", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::is-global-memory", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::is-global-memory", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::is-global-memory", ...args: any[]): void
    connect(sigName: "notify::native", callback: (...args: any[]) => void): number
    on(sigName: "notify::native", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::native", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::native", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::native", ...args: any[]): void
    connect(sigName: "notify::native-destroy-func", callback: (...args: any[]) => void): number
    on(sigName: "notify::native-destroy-func", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::native-destroy-func", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::native-destroy-func", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::native-destroy-func", ...args: any[]): void
    connect(sigName: "notify::owner", callback: (...args: any[]) => void): number
    on(sigName: "notify::owner", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::owner", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::owner", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::owner", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

/**
 * This is the ICalParameter instance.
 * @class 
 */
export class Parameter extends Object {

    // Own properties of ICalGLib-3.0.ICalGLib.Parameter

    static name: string

    // Constructors of ICalGLib-3.0.ICalGLib.Parameter

    constructor(config?: Parameter.ConstructorProperties) 
    /**
     * Creates a new #ICalParameter according to the kind type.
     * @constructor 
     * @param v The type of #ICalParameter to be created
     * @returns The newly created #ICalParameter.
     */
    constructor(v: ParameterKind) 
    /**
     * Creates a new #ICalParameter according to the kind type.
     * @constructor 
     * @param v The type of #ICalParameter to be created
     * @returns The newly created #ICalParameter.
     */
    static new(v: ParameterKind): Parameter
    /**
     * Creates a new #ICalParameter according to the action type.
     * @constructor 
     * @param v The type of #ICalParameter to be created
     * @returns The newly created #ICalParameter.
     */
    static newActionparam(v: ParameterAction): Parameter
    static newAltrep(v: string | null): Parameter
    static newCharset(v: string | null): Parameter
    static newCn(v: string | null): Parameter
    static newCutype(v: ParameterCutype): Parameter
    static newDelegatedfrom(v: string | null): Parameter
    static newDelegatedto(v: string | null): Parameter
    static newDir(v: string | null): Parameter
    static newDisplay(value: ParameterDisplay): Parameter
    static newEmail(value: string | null): Parameter
    /**
     * Creates a new #ICalParameter according to the enable type.
     * @constructor 
     * @param v The type of #ICalParameter to be created
     * @returns The newly created #ICalParameter.
     */
    static newEnable(v: ParameterEnable): Parameter
    /**
     * Creates a new #ICalParameter according to the encoding type.
     * @constructor 
     * @param v The type of #ICalParameter to be created
     * @returns The newly created #ICalParameter.
     */
    static newEncoding(v: ParameterEncoding): Parameter
    /**
     * Creates a new #ICalParameter according to the fbtype type.
     * @constructor 
     * @param v The type of #ICalParameter to be created
     * @returns The newly created #ICalParameter.
     */
    static newFbtype(v: ParameterFbtype): Parameter
    static newFeature(value: ParameterFeature): Parameter
    static newFilename(v: string | null): Parameter
    static newFmttype(v: string | null): Parameter
    /**
     * Creates a #ICalParameter from a string of form "PARAMNAME=VALUE".
     * @constructor 
     * @param value The string from which the #ICalParameter is created
     * @returns The newly created $ICalParameter with the properties specified in the @value.
     */
    static newFromString(value: string | null): Parameter
    /**
     * Creates a new #ICalParameter from just the value, the part after the "="
     * @constructor 
     * @param kind The kind of #ICalParameter to be created
     * @param value The string from which #ICalParameter to be created
     * @returns The newly created #ICalParameter
     */
    static newFromValueString(kind: ParameterKind, value: string | null): Parameter
    static newIana(v: string | null): Parameter
    static newId(v: string | null): Parameter
    static newLabel(value: string | null): Parameter
    static newLanguage(v: string | null): Parameter
    static newLatency(v: string | null): Parameter
    /**
     * Creates a new #ICalParameter according to the local type.
     * @constructor 
     * @param v The type of #ICalParameter to be created
     * @returns The newly created #ICalParameter.
     */
    static newLocal(v: ParameterLocal): Parameter
    static newLocalize(v: string | null): Parameter
    static newManagedid(v: string | null): Parameter
    static newMember(v: string | null): Parameter
    static newModified(v: string | null): Parameter
    static newOptions(v: string | null): Parameter
    /**
     * Creates a new #ICalParameter according to the partstat type.
     * @constructor 
     * @param v The type of #ICalParameter to be created
     * @returns The newly created #ICalParameter.
     */
    static newPartstat(v: ParameterPartstat): Parameter
    static newPatchaction(value: ParameterPatchaction): Parameter
    static newPubliccomment(v: string | null): Parameter
    /**
     * Creates a new #ICalParameter according to the range type.
     * @constructor 
     * @param v The type of #ICalParameter to be created
     * @returns The newly created #ICalParameter.
     */
    static newRange(v: ParameterRange): Parameter
    static newReason(v: string | null): Parameter
    /**
     * Creates a new #ICalParameter according to the related type.
     * @constructor 
     * @param v The type of #ICalParameter to be created
     * @returns The newly created #ICalParameter.
     */
    static newRelated(v: ParameterRelated): Parameter
    /**
     * Creates a new #ICalParameter according to the reltype type.
     * @constructor 
     * @param v The type of #ICalParameter to be created
     * @returns The newly created #ICalParameter.
     */
    static newReltype(v: ParameterReltype): Parameter
    /**
     * Creates a new #ICalParameter according to the required type.
     * @constructor 
     * @param v The type of #ICalParameter to be created
     * @returns The newly created #ICalParameter.
     */
    static newRequired(v: ParameterRequired): Parameter
    /**
     * Creates a new #ICalParameter according to the response type.
     * @constructor 
     * @param v The type of #ICalParameter to be created
     * @returns The newly created #ICalParameter.
     */
    static newResponse(v: number): Parameter
    /**
     * Creates a new #ICalParameter according to the role type.
     * @constructor 
     * @param v The type of #ICalParameter to be created
     * @returns The newly created #ICalParameter.
     */
    static newRole(v: ParameterRole): Parameter
    /**
     * Creates a new #ICalParameter according to the rsvp type.
     * @constructor 
     * @param v The type of #ICalParameter to be created
     * @returns The newly created #ICalParameter.
     */
    static newRsvp(v: ParameterRsvp): Parameter
    /**
     * Creates a new #ICalParameter according to the scheduleagent type.
     * @constructor 
     * @param v The type of #ICalParameter to be created
     * @returns The newly created #ICalParameter.
     */
    static newScheduleagent(v: ParameterScheduleagent): Parameter
    /**
     * Creates a new #ICalParameter according to the scheduleforcesend type.
     * @constructor 
     * @param v The type of #ICalParameter to be created
     * @returns The newly created #ICalParameter.
     */
    static newScheduleforcesend(v: ParameterScheduleforcesend): Parameter
    static newSchedulestatus(v: string | null): Parameter
    static newSentby(v: string | null): Parameter
    static newSize(v: string | null): Parameter
    /**
     * Creates a new #ICalParameter according to the stayinformed type.
     * @constructor 
     * @param v The type of #ICalParameter to be created
     * @returns The newly created #ICalParameter.
     */
    static newStayinformed(v: ParameterStayinformed): Parameter
    /**
     * Creates a new #ICalParameter according to the substate type.
     * @constructor 
     * @param v The type of #ICalParameter to be created
     * @returns The newly created #ICalParameter.
     */
    static newSubstate(v: ParameterSubstate): Parameter
    static newTzid(v: string | null): Parameter
    /**
     * Creates a new #ICalParameter according to the value type.
     * @constructor 
     * @param v The type of #ICalParameter to be created
     * @returns The newly created #ICalParameter.
     */
    static newValue(v: ParameterValue): Parameter
    static newX(v: string | null): Parameter
    /**
     * Creates a new #ICalParameter according to the xliccomparetype type.
     * @constructor 
     * @param v The type of #ICalParameter to be created
     * @returns The newly created #ICalParameter.
     */
    static newXliccomparetype(v: ParameterXliccomparetype): Parameter
    /**
     * Creates a new #ICalParameter according to the xlicerrortype type.
     * @constructor 
     * @param v The type of #ICalParameter to be created
     * @returns The newly created #ICalParameter.
     */
    static newXlicerrortype(v: ParameterXlicerrortype): Parameter
    _init(config?: Parameter.ConstructorProperties): void
    /**
     * Converts a string to the #ICalParameterKind.
     * @param string The string representation of the #ICalParameter
     * @returns The #ICalParameterKind converted from @string
     */
    static kindFromString(string: string | null): ParameterKind
    /**
     * Checks whether #ICalParameterKind is valid.
     * @param kind The #ICalPropertyKind
     * @returns 1 if valid, 0 if not.
     */
    static kindIsValid(kind: ParameterKind): boolean
    /**
     * Converts the #ICalParameter to the string representation.
     * @param kind The #ICalParameterKind to be converted
     * @returns The string representation of @kind.
     */
    static kindToString(kind: ParameterKind): string | null
    /**
     * Converts the #ICalParameterValue to #ICalValueKind.
     * @param value A #ICalParameterValue
     * @returns #ICalValueKind
     */
    static valueToValueKind(value: ParameterValue): ValueKind
}

export module Parser {

    // Constructor properties interface

    export interface ConstructorProperties extends Object.ConstructorProperties {
    }

}

export interface Parser {

    // Own properties of ICalGLib-3.0.ICalGLib.Parser

    __gtype__: number

    // Owm methods of ICalGLib-3.0.ICalGLib.Parser

    /**
     * Add a line at one time into the #ICalParser until the parsing is complete and #ICalComponent will be
     * returned.
     * @param str A line of string representation of the #ICalComponent
     * @returns The complete #ICalComponent.
     */
    addLine(str: string | null): Component | null
    /**
     * We won't get a clean exit if some components did not have an "END" tag. Clear off any component that
     * may be left in the list.
     * @returns The root #ICalComponent in @parser.
     */
    clean(): Component | null
    /**
     * Frees a #ICalParser.
     */
    free(): void
    /**
     * Given a line generator function, returns a single iCal content line.
     * @param func A line generator function
     * @returns A single iCal content line.
     */
    getLine(func: ParserLineGenFunc): string | null
    /**
     * Gets the state of the target parser.
     * @returns The parser state stored in the #ICalParser.
     */
    getState(): ParserState
    /**
     * icalparser_parse takes a string that holds the text ( in RFC 2445 format ) and returns a pointer to an
     * #ICalComponent. The caller owns the memory. `func` is a pointer to a function that returns one content
     * line per invocation.
     * @param func The function used to parse
     * @returns The component output by the parser.
     */
    parse(func: ParserLineGenFunc): Component

    // Class property signals of ICalGLib-3.0.ICalGLib.Parser

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: "notify::always-destroy", callback: (...args: any[]) => void): number
    on(sigName: "notify::always-destroy", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::always-destroy", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::always-destroy", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::always-destroy", ...args: any[]): void
    connect(sigName: "notify::is-global-memory", callback: (...args: any[]) => void): number
    on(sigName: "notify::is-global-memory", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::is-global-memory", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::is-global-memory", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::is-global-memory", ...args: any[]): void
    connect(sigName: "notify::native", callback: (...args: any[]) => void): number
    on(sigName: "notify::native", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::native", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::native", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::native", ...args: any[]): void
    connect(sigName: "notify::native-destroy-func", callback: (...args: any[]) => void): number
    on(sigName: "notify::native-destroy-func", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::native-destroy-func", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::native-destroy-func", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::native-destroy-func", ...args: any[]): void
    connect(sigName: "notify::owner", callback: (...args: any[]) => void): number
    on(sigName: "notify::owner", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::owner", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::owner", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::owner", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

/**
 * This is the ICalParser instance.
 * @class 
 */
export class Parser extends Object {

    // Own properties of ICalGLib-3.0.ICalGLib.Parser

    static name: string

    // Constructors of ICalGLib-3.0.ICalGLib.Parser

    constructor(config?: Parser.ConstructorProperties) 
    /**
     * Creates a default #ICalParser.
     * @constructor 
     * @returns The newly created #ICalParser.
     */
    constructor() 
    /**
     * Creates a default #ICalParser.
     * @constructor 
     * @returns The newly created #ICalParser.
     */
    static new(): Parser
    _init(config?: Parser.ConstructorProperties): void
    /**
     * Parses the string into a #ICalComponent.
     * @param str The string to be parsed
     * @returns The #ICalComponent parsed from str.
     */
    static parseString(str: string | null): Component
}

export module Period {

    // Constructor properties interface

    export interface ConstructorProperties extends Object.ConstructorProperties {
    }

}

export interface Period {

    // Own properties of ICalGLib-3.0.ICalGLib.Period

    __gtype__: number

    // Owm methods of ICalGLib-3.0.ICalGLib.Period

    /**
     * Translates #ICalPeriod to string.
     * @returns The string representation of #ICalPeriod.
     */
    asIcalString(): string | null
    /**
     * Gets the duration from an #ICalPeriod.
     * @returns The duration of @period.
     */
    getDuration(): Duration
    /**
     * Gets the end time from an #ICalPeriod.
     * @returns The end of @period.
     */
    getEnd(): Time
    /**
     * Gets the start time from an #ICalPeriod.
     * @returns The start of @period.
     */
    getStart(): Time
    /**
     * Checks the #ICalPeriod is null_period.
     * @returns 1 if yes, 0 if not.
     */
    isNullPeriod(): boolean
    /**
     * Checks the #ICalPeriod is valid_period.
     * @returns 1 if yes, 0 if not.
     */
    isValidPeriod(): boolean
    /**
     * Sets the duration of an #ICalPeriod.
     * @param duration The duration of `period`
     */
    setDuration(duration: Duration): void
    /**
     * Sets the end time of an #ICalPeriod.
     * @param end The end of `period`
     */
    setEnd(end: Time): void
    /**
     * Sets the start time of an #ICalPeriod.
     * @param start The start of `period`
     */
    setStart(start: Time): void

    // Class property signals of ICalGLib-3.0.ICalGLib.Period

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: "notify::always-destroy", callback: (...args: any[]) => void): number
    on(sigName: "notify::always-destroy", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::always-destroy", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::always-destroy", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::always-destroy", ...args: any[]): void
    connect(sigName: "notify::is-global-memory", callback: (...args: any[]) => void): number
    on(sigName: "notify::is-global-memory", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::is-global-memory", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::is-global-memory", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::is-global-memory", ...args: any[]): void
    connect(sigName: "notify::native", callback: (...args: any[]) => void): number
    on(sigName: "notify::native", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::native", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::native", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::native", ...args: any[]): void
    connect(sigName: "notify::native-destroy-func", callback: (...args: any[]) => void): number
    on(sigName: "notify::native-destroy-func", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::native-destroy-func", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::native-destroy-func", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::native-destroy-func", ...args: any[]): void
    connect(sigName: "notify::owner", callback: (...args: any[]) => void): number
    on(sigName: "notify::owner", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::owner", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::owner", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::owner", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

/**
 * This is the ICalPeriod instance.
 * @class 
 */
export class Period extends Object {

    // Own properties of ICalGLib-3.0.ICalGLib.Period

    static name: string

    // Constructors of ICalGLib-3.0.ICalGLib.Period

    constructor(config?: Period.ConstructorProperties) 
    /**
     * Creates a #ICalPeriod from a string.
     * @constructor 
     * @param str The string used to create the #ICalPeriod
     * @returns The newly created #ICalPeriod
     */
    static newFromString(str: string | null): Period
    /**
     * Creates a default #ICalPeriod.
     * @constructor 
     * @returns The newly created default #ICalPeriod
     */
    static newNullPeriod(): Period
    _init(config?: Period.ConstructorProperties): void
}

export module Property {

    // Constructor properties interface

    export interface ConstructorProperties extends Object.ConstructorProperties {
    }

}

export interface Property {

    // Own properties of ICalGLib-3.0.ICalGLib.Property

    __gtype__: number

    // Owm methods of ICalGLib-3.0.ICalGLib.Property

    /**
     * Adds a #ICalParameter into the #ICalProperty. It behaves like set the copy of the #ICalParameter. Upon
     * completion the native part of #ICalParameter will be set to NULL.
     * @param parameter The parameter to be added into `prop`
     */
    addParameter(parameter: Parameter): void
    /**
     * Converts a #ICalProperty to a string representation.
     * @returns The string representation of @prop.
     */
    asIcalString(): string | null
    /**
     * Deeply clone a #ICalProperty.
     * @returns The newly created #ICalProperty deeply cloned from @prop.
     */
    clone(): Property
    /**
     * Counts the parameters in the #ICalProperty.
     * @returns The count of the parameters in the #ICalProperty.
     */
    countParameters(): number
    /**
     * Gets the acceptresponse of #ICalProperty.
     * @returns Get the acceptresponse of #ICalProperty.
     */
    getAcceptresponse(): string | null
    /**
     * Gets the acknowledged time of #ICalProperty.
     * @returns Get the acknowledged time of #ICalProperty.
     */
    getAcknowledged(): Time
    /**
     * Gets the action of #ICalProperty.
     * @returns Get the action of #ICalProperty.
     */
    getAction(): PropertyAction
    /**
     * Gets the allowconflict of #ICalProperty.
     * @returns Get the allowconflict of #ICalProperty.
     */
    getAllowconflict(): string | null
    /**
     * Gets the attach of #ICalProperty.
     * @returns Get the attach of #ICalProperty.
     */
    getAttach(): Attach
    /**
     * Gets the attendee of #ICalProperty.
     * @returns Get the attendee of #ICalProperty.
     */
    getAttendee(): string | null
    /**
     * Gets the busytype of #ICalProperty.
     * @returns Get the busytype of #ICalProperty.
     */
    getBusytype(): PropertyBusytype
    /**
     * Gets the calid of #ICalProperty.
     * @returns Get the calid of #ICalProperty.
     */
    getCalid(): string | null
    /**
     * Gets the calmaster of #ICalProperty.
     * @returns Get the calmaster of #ICalProperty.
     */
    getCalmaster(): string | null
    /**
     * Gets the calscale of #ICalProperty.
     * @returns Get the calscale of #ICalProperty.
     */
    getCalscale(): string | null
    /**
     * Gets the capversion of #ICalProperty.
     * @returns Get the capversion of #ICalProperty.
     */
    getCapversion(): string | null
    /**
     * Gets the carid of #ICalProperty.
     * @returns Get the carid of #ICalProperty.
     */
    getCarid(): string | null
    /**
     * Gets the carlevel of #ICalProperty.
     * @returns Get the carlevel of #ICalProperty.
     */
    getCarlevel(): PropertyCarlevel
    /**
     * Gets the categories of #ICalProperty.
     * @returns Get the categories of #ICalProperty.
     */
    getCategories(): string | null
    /**
     * Gets the class of #ICalProperty.
     * @returns Get the class of #ICalProperty.
     */
    getClass(): Property_Class
    /**
     * Gets the cmd of #ICalProperty.
     * @returns Get the cmd of #ICalProperty.
     */
    getCmd(): PropertyCmd
    /**
     * Gets the color property of the `prop`.
     * @returns Get the color property.
     */
    getColor(): string | null
    /**
     * Gets the comment of #ICalProperty.
     * @returns Get the comment of #ICalProperty.
     */
    getComment(): string | null
    /**
     * Gets the completed time of #ICalProperty.
     * @returns Get the completed time of #ICalProperty.
     */
    getCompleted(): Time
    /**
     * Gets the components of #ICalProperty.
     * @returns Get the components of #ICalProperty.
     */
    getComponents(): string | null
    /**
     * Gets the contact of #ICalProperty.
     * @returns Get the contact of #ICalProperty.
     */
    getContact(): string | null
    /**
     * Gets the created time of #ICalProperty.
     * @returns Get the created time of #ICalProperty.
     */
    getCreated(): Time
    /**
     * Gets the csid of #ICalProperty.
     * @returns Get the csid of #ICalProperty.
     */
    getCsid(): string | null
    /**
     * Gets the datemax time of #ICalProperty.
     * @returns Get the datemax time of #ICalProperty.
     */
    getDatemax(): Time
    /**
     * Gets the datemin time of #ICalProperty.
     * @returns Get the datemin time of #ICalProperty.
     */
    getDatemin(): Time
    /**
     * If the property is a DATE-TIME with a TZID parameter and a corresponding VTIMEZONE is present in the
     * component, the returned component will already be in the correct timezone; otherwise the caller is responsible
     * for converting it.
     * 
     * The `comp` can be NULL, in which case the parent of the `prop` is used to find
     * the corresponding time zone.
     * @param comp An #ICalComponent
     * @returns Get a DATE or DATE-TIME property as an #ICalTime.
     */
    getDatetimeWithComponent(comp: Component | null): Time
    /**
     * Gets the decreed of #ICalProperty.
     * @returns Get the decreed of #ICalProperty.
     */
    getDecreed(): string | null
    /**
     * Gets the defaultcharset of #ICalProperty.
     * @returns Get the defaultcharset of #ICalProperty.
     */
    getDefaultcharset(): string | null
    /**
     * Gets the defaultlocale of #ICalProperty.
     * @returns Get the defaultlocale of #ICalProperty.
     */
    getDefaultlocale(): string | null
    /**
     * Gets the defaulttzid of #ICalProperty.
     * @returns Get the defaulttzid of #ICalProperty.
     */
    getDefaulttzid(): string | null
    /**
     * Gets the defaultvcars of #ICalProperty.
     * @returns Get the defaultvcars of #ICalProperty.
     */
    getDefaultvcars(): string | null
    /**
     * Gets the deny of #ICalProperty.
     * @returns Get the deny of #ICalProperty.
     */
    getDeny(): string | null
    /**
     * Gets the description of #ICalProperty.
     * @returns Get the description of #ICalProperty.
     */
    getDescription(): string | null
    /**
     * Gets the dtend time of #ICalProperty.
     * @returns Get the dtend time of #ICalProperty.
     */
    getDtend(): Time
    /**
     * Gets the dtstamp time of #ICalProperty.
     * @returns Get the dtstamp time of #ICalProperty.
     */
    getDtstamp(): Time
    /**
     * Gets the dtstart time of #ICalProperty.
     * @returns Get the dtstart time of #ICalProperty.
     */
    getDtstart(): Time
    /**
     * Gets the due time of #ICalProperty.
     * @returns Get the due time of #ICalProperty.
     */
    getDue(): Time
    /**
     * Gets the duration of #ICalProperty.
     * @returns Get the duration of #ICalProperty.
     */
    getDuration(): Duration
    /**
     * Gets the estimatedduration of #ICalProperty.
     * @returns Get the estimatedduration of #ICalProperty.
     */
    getEstimatedduration(): Duration
    /**
     * Gets the exdate time of #ICalProperty.
     * @returns Get the exdate time of #ICalProperty.
     */
    getExdate(): Time
    /**
     * Gets the expand of #ICalProperty.
     * @returns Get the expand of #ICalProperty.
     */
    getExpand(): number
    /**
     * Gets the exrule recurrence type of #ICalProperty.
     * @returns Get the exrule recurrence type of #ICalProperty.
     */
    getExrule(): Recurrence
    /**
     * Gets the first #ICalParameter from the parent #ICalProperty.
     * @param kind The target kind of #ICalParameter to be retrieved
     * @returns The first #ICalParameter of @prop.
     */
    getFirstParameter(kind: ParameterKind): Parameter
    /**
     * Gets the freebusy period type of #ICalProperty.
     * @returns Get the freebusy period type of #ICalProperty.
     */
    getFreebusy(): Period
    /**
     * Gets the geo type of #ICalProperty.
     * @returns Get the geo type of #ICalProperty.
     */
    getGeo(): Geo
    /**
     * Gets the grant of #ICalProperty.
     * @returns Get the grant of #ICalProperty.
     */
    getGrant(): string | null
    /**
     * Gets the itipversion of #ICalProperty.
     * @returns Get the itipversion of #ICalProperty.
     */
    getItipversion(): string | null
    /**
     * Gets the lastmodified time of #ICalProperty.
     * @returns Get the lastmodified time of #ICalProperty.
     */
    getLastmodified(): Time
    /**
     * Gets the location of #ICalProperty.
     * @returns Get the location of #ICalProperty.
     */
    getLocation(): string | null
    /**
     * Gets the maxcomponentsize of #ICalProperty.
     * @returns Get the maxcomponentsize of #ICalProperty.
     */
    getMaxcomponentsize(): number
    /**
     * Gets the maxdate time of #ICalProperty.
     * @returns Get the maxdate time of #ICalProperty.
     */
    getMaxdate(): Time
    /**
     * Gets the maxresults of #ICalProperty.
     * @returns Get the maxresults of #ICalProperty.
     */
    getMaxresults(): number
    /**
     * Gets the maxresultssize of #ICalProperty.
     * @returns Get the maxresultssize of #ICalProperty.
     */
    getMaxresultssize(): number
    /**
     * Gets the method of #ICalProperty.
     * @returns Get the method of #ICalProperty.
     */
    getMethod(): PropertyMethod
    /**
     * Gets the mindate time of #ICalProperty.
     * @returns Get the mindate time of #ICalProperty.
     */
    getMindate(): Time
    /**
     * Gets the multipart of #ICalProperty.
     * @returns Get the multipart of #ICalProperty.
     */
    getMultipart(): string | null
    /**
     * Gets the name of #ICalProperty.
     * @returns Get the name of #ICalProperty.
     */
    getName(): string | null
    /**
     * Gets the next #ICalParameter from the parent #ICalProperty.
     * @param kind The target kind of #ICalParameter to be retrieved
     * @returns The next #ICalParameter of @prop.
     */
    getNextParameter(kind: ParameterKind): Parameter
    /**
     * Gets the organizer of #ICalProperty.
     * @returns Get the organizer of #ICalProperty.
     */
    getOrganizer(): string | null
    /**
     * Gets the owner of #ICalProperty.
     * @returns Get the owner of #ICalProperty.
     */
    getOwner(): string | null
    /**
     * Gets the string representation of the target parameter in the #ICalProperty.
     * @param name The name of the target parameter
     * @returns The string representation of the parameter.
     */
    getParameterAsString(name: string | null): string | null
    /**
     * Gets the parent component of the property. Use with caution. When icalproperty is deallocated, it won't
     * deallocate its parent. However the #ICalComponent object created using this method will be deallocated
     * (if no reference in other places). So You need to make sure there is another reference except the one
     * in #ICalProperty.
     * @returns The parent #ICalComponent of #ICalProperty.
     */
    getParent(): Component | null
    /**
     * Gets the percentcomplete of #ICalProperty.
     * @returns Get the percentcomplete of #ICalProperty.
     */
    getPercentcomplete(): number
    /**
     * Gets the permission of #ICalProperty.
     * @returns Get the permission of #ICalProperty.
     */
    getPermission(): string | null
    /**
     * Gets the pollcompletion of #ICalProperty.
     * @returns Get the pollcompletion of #ICalProperty.
     */
    getPollcompletion(): PropertyPollcompletion
    /**
     * Gets the pollitemid of #ICalProperty.
     * @returns Get the pollitemid of #ICalProperty.
     */
    getPollitemid(): number
    /**
     * Gets the pollmode of #ICalProperty.
     * @returns Get the pollmode of #ICalProperty.
     */
    getPollmode(): PropertyPollmode
    /**
     * Gets the pollproperties of #ICalProperty.
     * @returns Get the pollproperties of #ICalProperty.
     */
    getPollproperties(): string | null
    /**
     * Gets the pollwinner of #ICalProperty.
     * @returns Get the pollwinner of #ICalProperty.
     */
    getPollwinner(): number
    /**
     * Gets the priority of #ICalProperty.
     * @returns Get the priority of #ICalProperty.
     */
    getPriority(): number
    /**
     * Gets the prodid of #ICalProperty.
     * @returns Get the prodid of #ICalProperty.
     */
    getProdid(): string | null
    /**
     * Gets the property name of #ICalProperty.
     * @returns Property name of #ICalProperty.
     */
    getPropertyName(): string | null
    /**
     * Gets the query of #ICalProperty.
     * @returns Get the query of #ICalProperty.
     */
    getQuery(): string | null
    /**
     * Gets the queryid of #ICalProperty.
     * @returns Get the queryid of #ICalProperty.
     */
    getQueryid(): string | null
    /**
     * Gets the querylevel of #ICalProperty.
     * @returns Get the querylevel of #ICalProperty.
     */
    getQuerylevel(): PropertyQuerylevel
    /**
     * Gets the queryname of #ICalProperty.
     * @returns Get the queryname of #ICalProperty.
     */
    getQueryname(): string | null
    /**
     * Gets the rdate  of #ICalProperty.
     * @returns Get the rdate  of #ICalProperty.
     */
    getRdate(): Datetimeperiod
    /**
     * Gets the recuraccepted of #ICalProperty.
     * @returns Get the recuraccepted of #ICalProperty.
     */
    getRecuraccepted(): string | null
    /**
     * Gets the recurexpand of #ICalProperty.
     * @returns Get the recurexpand of #ICalProperty.
     */
    getRecurexpand(): string | null
    /**
     * Gets the recurlimit of #ICalProperty.
     * @returns Get the recurlimit of #ICalProperty.
     */
    getRecurlimit(): string | null
    /**
     * Gets the recurrenceid time of #ICalProperty.
     * @returns Get the recurrenceid time of #ICalProperty.
     */
    getRecurrenceid(): Time
    /**
     * Gets the relatedto of #ICalProperty.
     * @returns Get the relatedto of #ICalProperty.
     */
    getRelatedto(): string | null
    /**
     * Gets the relcalid of #ICalProperty.
     * @returns Get the relcalid of #ICalProperty.
     */
    getRelcalid(): string | null
    /**
     * Gets the repeat of #ICalProperty.
     * @returns Get the repeat of #ICalProperty.
     */
    getRepeat(): number
    /**
     * Gets the replyurl of #ICalProperty.
     * @returns Get the replyurl of #ICalProperty.
     */
    getReplyurl(): string | null
    /**
     * Gets the requeststatus of #ICalProperty.
     * @returns Get the requeststatus of #ICalProperty.
     */
    getRequeststatus(): Reqstat
    /**
     * Gets the resources of #ICalProperty.
     * @returns Get the resources of #ICalProperty.
     */
    getResources(): string | null
    /**
     * Gets the response of #ICalProperty.
     * @returns Get the response of #ICalProperty.
     */
    getResponse(): number
    /**
     * Gets the restriction of #ICalProperty.
     * @returns Get the restriction of #ICalProperty.
     */
    getRestriction(): string | null
    /**
     * Gets the rrule recurrence type of #ICalProperty.
     * @returns Get the rrule recurrence type of #ICalProperty.
     */
    getRrule(): Recurrence
    /**
     * Gets the scope of #ICalProperty.
     * @returns Get the scope of #ICalProperty.
     */
    getScope(): string | null
    /**
     * Gets the sequence of #ICalProperty.
     * @returns Get the sequence of #ICalProperty.
     */
    getSequence(): number
    /**
     * Gets the status of #ICalProperty.
     * @returns Get the status of #ICalProperty.
     */
    getStatus(): PropertyStatus
    /**
     * Gets the storesexpanded of #ICalProperty.
     * @returns Get the storesexpanded of #ICalProperty.
     */
    getStoresexpanded(): string | null
    /**
     * Gets the summary of #ICalProperty.
     * @returns Get the summary of #ICalProperty.
     */
    getSummary(): string | null
    /**
     * Gets the target of #ICalProperty.
     * @returns Get the target of #ICalProperty.
     */
    getTarget(): string | null
    /**
     * Gets the taskmode of #ICalProperty.
     * @returns Get the taskmode of #ICalProperty.
     */
    getTaskmode(): PropertyTaskmode
    /**
     * Gets the transp of #ICalProperty.
     * @returns Get the transp of #ICalProperty.
     */
    getTransp(): PropertyTransp
    /**
     * Gets the trigger period type of #ICalProperty.
     * @returns Get the trigger period type of #ICalProperty.
     */
    getTrigger(): Trigger
    /**
     * Gets the tzid of #ICalProperty.
     * @returns Get the tzid of #ICalProperty.
     */
    getTzid(): string | null
    /**
     * Gets the tzidaliasof of #ICalProperty.
     * @returns Get the tzidaliasof of #ICalProperty.
     */
    getTzidaliasof(): string | null
    /**
     * Gets the tzname of #ICalProperty.
     * @returns Get the tzname of #ICalProperty.
     */
    getTzname(): string | null
    /**
     * Gets the tzoffsetfrom of #ICalProperty.
     * @returns Get the tzoffsetfrom of #ICalProperty.
     */
    getTzoffsetfrom(): number
    /**
     * Gets the tzoffsetto of #ICalProperty.
     * @returns Get the tzoffsetto of #ICalProperty.
     */
    getTzoffsetto(): number
    /**
     * Gets the tzuntil time of #ICalProperty.
     * @returns Get the tzuntil time of #ICalProperty.
     */
    getTzuntil(): Time
    /**
     * Gets the tzurl of #ICalProperty.
     * @returns Get the tzurl of #ICalProperty.
     */
    getTzurl(): string | null
    /**
     * Gets the uid of #ICalProperty.
     * @returns Get the uid of #ICalProperty.
     */
    getUid(): string | null
    /**
     * Gets the url of #ICalProperty.
     * @returns Get the url of #ICalProperty.
     */
    getUrl(): string | null
    /**
     * Gets the #ICalValue of #ICalProperty.
     * @returns The #ICalValue of @prop.
     */
    getValue(): Value
    /**
     * Gets the string representation of the value in #ICalProperty.
     * @returns The string representation of the value of the #ICalProperty.
     */
    getValueAsString(): string | null
    /**
     * Gets the version of #ICalProperty.
     * @returns Get the version of #ICalProperty.
     */
    getVersion(): string | null
    /**
     * Gets the voter of #ICalProperty.
     * @returns Get the voter of #ICalProperty.
     */
    getVoter(): string | null
    /**
     * Gets the x of #ICalProperty.
     * @returns Get the x of #ICalProperty.
     */
    getX(): string | null
    /**
     * Gets the name of x property.
     * @returns The name of x property.
     */
    getXName(): string | null
    /**
     * Gets the xlicclass of #ICalProperty.
     * @returns Get the xlicclass of #ICalProperty.
     */
    getXlicclass(): PropertyXlicclass
    /**
     * Gets the xlicclustercount of #ICalProperty.
     * @returns Get the xlicclustercount of #ICalProperty.
     */
    getXlicclustercount(): string | null
    /**
     * Gets the xlicerror of #ICalProperty.
     * @returns Get the xlicerror of #ICalProperty.
     */
    getXlicerror(): string | null
    /**
     * Gets the xlicmimecharset of #ICalProperty.
     * @returns Get the xlicmimecharset of #ICalProperty.
     */
    getXlicmimecharset(): string | null
    /**
     * Gets the xlicmimecid of #ICalProperty.
     * @returns Get the xlicmimecid of #ICalProperty.
     */
    getXlicmimecid(): string | null
    /**
     * Gets the xlicmimecontenttype of #ICalProperty.
     * @returns Get the xlicmimecontenttype of #ICalProperty.
     */
    getXlicmimecontenttype(): string | null
    /**
     * Gets the xlicmimeencoding of #ICalProperty.
     * @returns Get the xlicmimeencoding of #ICalProperty.
     */
    getXlicmimeencoding(): string | null
    /**
     * Gets the xlicmimefilename of #ICalProperty.
     * @returns Get the xlicmimefilename of #ICalProperty.
     */
    getXlicmimefilename(): string | null
    /**
     * Gets the xlicmimeoptinfo of #ICalProperty.
     * @returns Get the xlicmimeoptinfo of #ICalProperty.
     */
    getXlicmimeoptinfo(): string | null
    /**
     * Gets the kind of #ICalProperty.
     * @returns The type of #ICalProperty.
     */
    isa(): PropertyKind
    /**
     * Checks whether the native part of #ICalProperty is of the type icalproperty.
     * @returns 1 if the native part of @property is of the type icalproperty, 0 if not.
     */
    isaProperty(): number
    /**
     * Removes the target kind of the parameters in the #ICalProperty.
     * @param kind The #ICalParameterKind to be removed
     */
    removeParameterByKind(kind: ParameterKind): void
    /**
     * Removes parameter in the #ICalProperty by name.
     * @param name The name of the parameter to be removed
     */
    removeParameterByName(name: string | null): void
    /**
     * Removes the parameter in the #ICalProperty by ref.
     * @param param The #ICalParameter to be removed
     */
    removeParameterByRef(param: Parameter): void
    /**
     * Sets the acceptresponse for the #ICalProperty.
     * @param v The acceptresponse
     */
    setAcceptresponse(v: string | null): void
    /**
     * Sets the acknowledged time for the #ICalProperty.
     * @param v The acknowledgement time
     */
    setAcknowledged(v: Time): void
    /**
     * Sets the action for the #ICalProperty.
     * @param v The action
     */
    setAction(v: PropertyAction): void
    /**
     * Sets the allowconflict for the #ICalProperty.
     * @param v The allowconflict
     */
    setAllowconflict(v: string | null): void
    /**
     * Sets the attach for the #ICalProperty.
     * @param v The attach
     */
    setAttach(v: Attach): void
    /**
     * Sets the attendee for the #ICalProperty.
     * @param v The attendee
     */
    setAttendee(v: string | null): void
    /**
     * Sets the busytype for the #ICalProperty.
     * @param v The busytype
     */
    setBusytype(v: PropertyBusytype): void
    /**
     * Sets the calid for the #ICalProperty.
     * @param v The calid
     */
    setCalid(v: string | null): void
    /**
     * Sets the calmaster for the #ICalProperty.
     * @param v The calmaster
     */
    setCalmaster(v: string | null): void
    /**
     * Sets the calscale for the #ICalProperty.
     * @param v The calscale
     */
    setCalscale(v: string | null): void
    /**
     * Sets the capversion for the #ICalProperty.
     * @param v The capversion
     */
    setCapversion(v: string | null): void
    /**
     * Sets the carid for the #ICalProperty.
     * @param v The carid
     */
    setCarid(v: string | null): void
    /**
     * Sets the carlevel for the #ICalProperty.
     * @param v The carlevel
     */
    setCarlevel(v: PropertyCarlevel): void
    /**
     * Sets the categories for the #ICalProperty.
     * @param v The categories
     */
    setCategories(v: string | null): void
    /**
     * Sets the class for the #ICalProperty.
     * @param v The class
     */
    setClass(v: Property_Class): void
    /**
     * Sets the cmd for the #ICalProperty.
     * @param v The cmd
     */
    setCmd(v: PropertyCmd): void
    /**
     * Sets the color for the `prop`.
     * @param v The color
     */
    setColor(v: string | null): void
    /**
     * Sets the comment for the #ICalProperty.
     * @param v The comment
     */
    setComment(v: string | null): void
    /**
     * Sets the completed time for the #ICalProperty.
     * @param v The completed time
     */
    setCompleted(v: Time): void
    /**
     * Sets the components for the #ICalProperty.
     * @param v The components
     */
    setComponents(v: string | null): void
    /**
     * Sets the contact for the #ICalProperty.
     * @param v The contact
     */
    setContact(v: string | null): void
    /**
     * Sets the created time for the #ICalProperty.
     * @param v The created time
     */
    setCreated(v: Time): void
    /**
     * Sets the csid for the #ICalProperty.
     * @param v The csid
     */
    setCsid(v: string | null): void
    /**
     * Sets the datemax time for the #ICalProperty.
     * @param v The datemax time
     */
    setDatemax(v: Time): void
    /**
     * Sets the datemin time for the #ICalProperty.
     * @param v The datemin time
     */
    setDatemin(v: Time): void
    /**
     * Sets the decreed for the #ICalProperty.
     * @param v The decreed
     */
    setDecreed(v: string | null): void
    /**
     * Sets the defaultcharset for the #ICalProperty.
     * @param v The defaultcharset
     */
    setDefaultcharset(v: string | null): void
    /**
     * Sets the defaultlocale for the #ICalProperty.
     * @param v The defaultlocale
     */
    setDefaultlocale(v: string | null): void
    /**
     * Sets the defaulttzid for the #ICalProperty.
     * @param v The defaulttzid
     */
    setDefaulttzid(v: string | null): void
    /**
     * Sets the defaultvcars for the #ICalProperty.
     * @param v The defaultvcars
     */
    setDefaultvcars(v: string | null): void
    /**
     * Sets the deny for the #ICalProperty.
     * @param v The deny
     */
    setDeny(v: string | null): void
    /**
     * Sets the description for the #ICalProperty.
     * @param v The description
     */
    setDescription(v: string | null): void
    /**
     * Sets the dtend time for the #ICalProperty.
     * @param v The dtend time
     */
    setDtend(v: Time): void
    /**
     * Sets the dtstamp time for the #ICalProperty.
     * @param v The dtstamp time
     */
    setDtstamp(v: Time): void
    /**
     * Sets the dtstart time for the #ICalProperty.
     * @param v The dtstart time
     */
    setDtstart(v: Time): void
    /**
     * Sets the due time for the #ICalProperty.
     * @param v The due time
     */
    setDue(v: Time): void
    /**
     * Sets the duration for the #ICalProperty.
     * @param v The duration
     */
    setDuration(v: Duration): void
    /**
     * Sets the estimatedduration for the #ICalProperty.
     * @param v The estimatedduration
     */
    setEstimatedduration(v: Duration): void
    /**
     * Sets the exdate time for the #ICalProperty.
     * @param v The exdate time
     */
    setExdate(v: Time): void
    /**
     * Sets the expand for the #ICalProperty.
     * @param v The expand
     */
    setExpand(v: number): void
    /**
     * Sets the exrule time for the #ICalProperty.
     * @param v The exrule recurrence type
     */
    setExrule(v: Recurrence): void
    /**
     * Sets the freebusy time for the #ICalProperty.
     * @param v The freebusy period type
     */
    setFreebusy(v: Period): void
    /**
     * Sets the geo for the #ICalProperty.
     * @param v The geo type
     */
    setGeo(v: Geo): void
    /**
     * Sets the grant for the #ICalProperty.
     * @param v The grant
     */
    setGrant(v: string | null): void
    /**
     * Sets the itipversion for the #ICalProperty.
     * @param v The itipversion
     */
    setItipversion(v: string | null): void
    /**
     * Sets the lastmodified time for the #ICalProperty.
     * @param v The lastmodified time
     */
    setLastmodified(v: Time): void
    /**
     * Sets the location for the #ICalProperty.
     * @param v The location
     */
    setLocation(v: string | null): void
    /**
     * Sets the maxcomponentsize for the #ICalProperty.
     * @param v The maxcomponentsize
     */
    setMaxcomponentsize(v: number): void
    /**
     * Sets the maxdate time for the #ICalProperty.
     * @param v The maxdate time
     */
    setMaxdate(v: Time): void
    /**
     * Sets the maxresults for the #ICalProperty.
     * @param v The maxresults
     */
    setMaxresults(v: number): void
    /**
     * Sets the maxresultssize for the #ICalProperty.
     * @param v The maxresultssize
     */
    setMaxresultssize(v: number): void
    /**
     * Sets the method for the #ICalProperty.
     * @param v The method
     */
    setMethod(v: PropertyMethod): void
    /**
     * Sets the mindate time for the #ICalProperty.
     * @param v The mindate time
     */
    setMindate(v: Time): void
    /**
     * Sets the multipart for the #ICalProperty.
     * @param v The multipart
     */
    setMultipart(v: string | null): void
    /**
     * Sets the name for the #ICalProperty.
     * @param v The name
     */
    setName(v: string | null): void
    /**
     * Sets the organizer for the #ICalProperty.
     * @param v The organizer
     */
    setOrganizer(v: string | null): void
    /**
     * Sets the owner for the #ICalProperty.
     * @param v The owner
     */
    setOwner(v: string | null): void

    // Overloads of setOwner

    /**
     * Sets an owner of the native libical structure, that is an object responsible
     * for a destroy of the native libical structure.
     * @param owner Owner of the native libical structure
     */
    setOwner(owner: GObject.Object): void
    /**
     * Sets a #ICalParameter into the #ICalProperty. It behaves like set the copy of the #ICalParameter. Upon
     * completion the native part of #ICalParameter will be set to NULL.
     * @param parameter The parameter to be set into `prop`
     */
    setParameter(parameter: Parameter): void
    /**
     * Sets the #ICalProperty with the parameter defined by the name and value.
     * @param name The name of the parameter
     * @param value The value of the parameter
     */
    setParameterFromString(name: string | null, value: string | null): void
    /**
     * Sets the parent #ICalComponent of the specified #ICalProperty.
     * @param component An #ICalComponent
     */
    setParent(component: Component | null): void
    /**
     * Sets the percentcomplete for the #ICalProperty.
     * @param v The percentcomplete
     */
    setPercentcomplete(v: number): void
    /**
     * Sets the permission for the #ICalProperty.
     * @param v The permission
     */
    setPermission(v: string | null): void
    /**
     * Sets the pollcompletion for the #ICalProperty.
     * @param v The pollcompletion
     */
    setPollcompletion(v: PropertyPollcompletion): void
    /**
     * Sets the pollitemid for the #ICalProperty.
     * @param v The pollitemid
     */
    setPollitemid(v: number): void
    /**
     * Sets the pollmode for the #ICalProperty.
     * @param v The pollmode
     */
    setPollmode(v: PropertyPollmode): void
    /**
     * Sets the pollproperties for the #ICalProperty.
     * @param v The pollproperties
     */
    setPollproperties(v: string | null): void
    /**
     * Sets the pollwinner for the #ICalProperty.
     * @param v The pollwinner
     */
    setPollwinner(v: number): void
    /**
     * Sets the priority for the #ICalProperty.
     * @param v The priority
     */
    setPriority(v: number): void
    /**
     * Sets the prodid for the #ICalProperty.
     * @param v The prodid
     */
    setProdid(v: string | null): void
    /**
     * Sets the query for the #ICalProperty.
     * @param v The query
     */
    setQuery(v: string | null): void
    /**
     * Sets the queryid for the #ICalProperty.
     * @param v The queryid
     */
    setQueryid(v: string | null): void
    /**
     * Sets the querylevel for the #ICalProperty.
     * @param v The querylevel
     */
    setQuerylevel(v: PropertyQuerylevel): void
    /**
     * Sets the queryname for the #ICalProperty.
     * @param v The queryname
     */
    setQueryname(v: string | null): void
    /**
     * Sets the rdate for the #ICalProperty.
     * @param v The rdate
     */
    setRdate(v: Datetimeperiod): void
    /**
     * Sets the recuraccepted for the #ICalProperty.
     * @param v The recuraccepted
     */
    setRecuraccepted(v: string | null): void
    /**
     * Sets the recurexpand for the #ICalProperty.
     * @param v The recurexpand
     */
    setRecurexpand(v: string | null): void
    /**
     * Sets the recurlimit for the #ICalProperty.
     * @param v The recurlimit
     */
    setRecurlimit(v: string | null): void
    /**
     * Sets the recurrenceid time for the #ICalProperty.
     * @param v The recurrenceid time
     */
    setRecurrenceid(v: Time): void
    /**
     * Sets the relatedto for the #ICalProperty.
     * @param v The relatedto
     */
    setRelatedto(v: string | null): void
    /**
     * Sets the relcalid for the #ICalProperty.
     * @param v The relcalid
     */
    setRelcalid(v: string | null): void
    /**
     * Sets the repeat for the #ICalProperty.
     * @param v The repeat
     */
    setRepeat(v: number): void
    /**
     * Sets the replyurl for the #ICalProperty.
     * @param v The replyurl
     */
    setReplyurl(v: string | null): void
    /**
     * Sets the requeststatus for the #ICalProperty.
     * @param v The requeststatus
     */
    setRequeststatus(v: Reqstat): void
    /**
     * Sets the resources for the #ICalProperty.
     * @param v The resources
     */
    setResources(v: string | null): void
    /**
     * Sets the response for the #ICalProperty.
     * @param v The response
     */
    setResponse(v: number): void
    /**
     * Sets the restriction for the #ICalProperty.
     * @param v The restriction
     */
    setRestriction(v: string | null): void
    /**
     * Sets the rrule for the #ICalProperty.
     * @param v The rrule recurrence type
     */
    setRrule(v: Recurrence): void
    /**
     * Sets the scope for the #ICalProperty.
     * @param v The scope
     */
    setScope(v: string | null): void
    /**
     * Sets the sequence for the #ICalProperty.
     * @param v The sequence
     */
    setSequence(v: number): void
    /**
     * Sets the status for the #ICalProperty.
     * @param v The status
     */
    setStatus(v: PropertyStatus): void
    /**
     * Sets the storesexpanded for the #ICalProperty.
     * @param v The storesexpanded
     */
    setStoresexpanded(v: string | null): void
    /**
     * Sets the summary for the #ICalProperty.
     * @param v The summary
     */
    setSummary(v: string | null): void
    /**
     * Sets the target for the #ICalProperty.
     * @param v The target
     */
    setTarget(v: string | null): void
    /**
     * Sets the taskmode for the #ICalProperty.
     * @param v The taskmode
     */
    setTaskmode(v: PropertyTaskmode): void
    /**
     * Sets the transp for the #ICalProperty.
     * @param v The transp
     */
    setTransp(v: PropertyTransp): void
    /**
     * Sets the trigger time for the #ICalProperty.
     * @param v The trigger period type
     */
    setTrigger(v: Trigger): void
    /**
     * Sets the tzid for the #ICalProperty.
     * @param v The tzid
     */
    setTzid(v: string | null): void
    /**
     * Sets the tzidaliasof for the #ICalProperty.
     * @param v The tzidaliasof
     */
    setTzidaliasof(v: string | null): void
    /**
     * Sets the tzname for the #ICalProperty.
     * @param v The tzname
     */
    setTzname(v: string | null): void
    /**
     * Sets the tzoffsetfrom for the #ICalProperty.
     * @param v The tzoffsetfrom
     */
    setTzoffsetfrom(v: number): void
    /**
     * Sets the tzoffsetto for the #ICalProperty.
     * @param v The tzoffsetto
     */
    setTzoffsetto(v: number): void
    /**
     * Sets the tzuntil time for the #ICalProperty.
     * @param v The acknowledgement time
     */
    setTzuntil(v: Time): void
    /**
     * Sets the tzurl for the #ICalProperty.
     * @param v The tzurl
     */
    setTzurl(v: string | null): void
    /**
     * Sets the uid for the #ICalProperty.
     * @param v The uid
     */
    setUid(v: string | null): void
    /**
     * Sets the url for the #ICalProperty.
     * @param v The url
     */
    setUrl(v: string | null): void
    /**
     * Sets the #ICalProperty with the #ICalValue.
     * @param value The #ICalValue will be set as the property of `prop`
     */
    setValue(value: Value): void
    /**
     * Sets the #ICalProperty with the #ICalValue constructed from string.
     * @param value The value used to construct the #ICalValue
     * @param kind The kind used to construct the #ICalValue
     */
    setValueFromString(value: string | null, kind: string | null): void
    /**
     * Sets the version for the #ICalProperty.
     * @param v The version
     */
    setVersion(v: string | null): void
    /**
     * Sets the voter for the #ICalProperty.
     * @param v The voter
     */
    setVoter(v: string | null): void
    /**
     * Sets the x for the #ICalProperty.
     * @param v The x
     */
    setX(v: string | null): void
    /**
     * Sets the name of x property for the #ICalProperty.
     * @param name The name string
     */
    setXName(name: string | null): void
    /**
     * Sets the xlicclass for the #ICalProperty.
     * @param v The xlicclass
     */
    setXlicclass(v: PropertyXlicclass): void
    /**
     * Sets the xlicclustercount for the #ICalProperty.
     * @param v The xlicclustercount
     */
    setXlicclustercount(v: string | null): void
    /**
     * Sets the xlicerror for the #ICalProperty.
     * @param v The xlicerror
     */
    setXlicerror(v: string | null): void
    /**
     * Sets the xlicmimecharset for the #ICalProperty.
     * @param v The xlicmimecharset
     */
    setXlicmimecharset(v: string | null): void
    /**
     * Sets the xlicmimecid for the #ICalProperty.
     * @param v The xlicmimecid
     */
    setXlicmimecid(v: string | null): void
    /**
     * Sets the xlicmimecontenttype for the #ICalProperty.
     * @param v The xlicmimecontenttype
     */
    setXlicmimecontenttype(v: string | null): void
    /**
     * Sets the xlicmimeencoding for the #ICalProperty.
     * @param v The xlicmimeencoding
     */
    setXlicmimeencoding(v: string | null): void
    /**
     * Sets the xlicmimefilename for the #ICalProperty.
     * @param v The xlicmimefilename
     */
    setXlicmimefilename(v: string | null): void
    /**
     * Sets the xlicmimeoptinfo for the #ICalProperty.
     * @param v The xlicmimeoptinfo
     */
    setXlicmimeoptinfo(v: string | null): void

    // Class property signals of ICalGLib-3.0.ICalGLib.Property

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: "notify::always-destroy", callback: (...args: any[]) => void): number
    on(sigName: "notify::always-destroy", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::always-destroy", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::always-destroy", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::always-destroy", ...args: any[]): void
    connect(sigName: "notify::is-global-memory", callback: (...args: any[]) => void): number
    on(sigName: "notify::is-global-memory", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::is-global-memory", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::is-global-memory", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::is-global-memory", ...args: any[]): void
    connect(sigName: "notify::native", callback: (...args: any[]) => void): number
    on(sigName: "notify::native", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::native", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::native", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::native", ...args: any[]): void
    connect(sigName: "notify::native-destroy-func", callback: (...args: any[]) => void): number
    on(sigName: "notify::native-destroy-func", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::native-destroy-func", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::native-destroy-func", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::native-destroy-func", ...args: any[]): void
    connect(sigName: "notify::owner", callback: (...args: any[]) => void): number
    on(sigName: "notify::owner", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::owner", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::owner", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::owner", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

/**
 * This is the ICalProperty instance.
 * @class 
 */
export class Property extends Object {

    // Own properties of ICalGLib-3.0.ICalGLib.Property

    static name: string

    // Constructors of ICalGLib-3.0.ICalGLib.Property

    constructor(config?: Property.ConstructorProperties) 
    /**
     * Creates a #ICalProperty of the target type.
     * @constructor 
     * @param kind The kind of #ICalProperty to be created
     * @returns The newly created #ICalProperty with the type @kind.
     */
    constructor(kind: PropertyKind) 
    /**
     * Creates a #ICalProperty of the target type.
     * @constructor 
     * @param kind The kind of #ICalProperty to be created
     * @returns The newly created #ICalProperty with the type @kind.
     */
    static new(kind: PropertyKind): Property
    /**
     * Creates a new #ICalProperty.
     * @constructor 
     * @param v The acceptresponse
     * @returns The newly created #ICalProperty
     */
    static newAcceptresponse(v: string | null): Property
    /**
     * Creates a new #ICalProperty.
     * @constructor 
     * @param v The time of acknowledgement
     * @returns The newly created #ICalProperty
     */
    static newAcknowledged(v: Time): Property
    /**
     * Creates a new #ICalProperty.
     * @constructor 
     * @param v The action
     * @returns The newly created #ICalProperty
     */
    static newAction(v: PropertyAction): Property
    /**
     * Creates a new #ICalProperty.
     * @constructor 
     * @param v The allowconflict
     * @returns The newly created #ICalProperty
     */
    static newAllowconflict(v: string | null): Property
    /**
     * Creates a new #ICalProperty.
     * @constructor 
     * @param v The #ICalAttach
     * @returns The newly created #ICalProperty
     */
    static newAttach(v: Attach): Property
    /**
     * Creates a new #ICalProperty.
     * @constructor 
     * @param v The attendee
     * @returns The newly created #ICalProperty
     */
    static newAttendee(v: string | null): Property
    /**
     * Creates a new #ICalProperty.
     * @constructor 
     * @param v The busytype
     * @returns The newly created #ICalProperty
     */
    static newBusytype(v: PropertyBusytype): Property
    /**
     * Creates a new #ICalProperty.
     * @constructor 
     * @param v The calid
     * @returns The newly created #ICalProperty
     */
    static newCalid(v: string | null): Property
    /**
     * Creates a new #ICalProperty.
     * @constructor 
     * @param v The calmaster
     * @returns The newly created #ICalProperty
     */
    static newCalmaster(v: string | null): Property
    /**
     * Creates a new #ICalProperty.
     * @constructor 
     * @param v The calscale
     * @returns The newly created #ICalProperty
     */
    static newCalscale(v: string | null): Property
    /**
     * Creates a new #ICalProperty.
     * @constructor 
     * @param v The capversion
     * @returns The newly created #ICalProperty
     */
    static newCapversion(v: string | null): Property
    /**
     * Creates a new #ICalProperty.
     * @constructor 
     * @param v The carid
     * @returns The newly created #ICalProperty
     */
    static newCarid(v: string | null): Property
    /**
     * Creates a new #ICalProperty.
     * @constructor 
     * @param v The carlevel
     * @returns The newly created #ICalProperty
     */
    static newCarlevel(v: PropertyCarlevel): Property
    /**
     * Creates a new #ICalProperty.
     * @constructor 
     * @param v The categories
     * @returns The newly created #ICalProperty
     */
    static newCategories(v: string | null): Property
    /**
     * Creates a new #ICalProperty.
     * @constructor 
     * @param v The class
     * @returns The newly created #ICalProperty
     */
    static newClass(v: Property_Class): Property
    /**
     * Creates a new #ICalProperty.
     * @constructor 
     * @param v The cmd
     * @returns The newly created #ICalProperty
     */
    static newCmd(v: PropertyCmd): Property
    /**
     * Creates a new color #ICalProperty.
     * @constructor 
     * @param v The color
     * @returns The newly created #ICalProperty
     */
    static newColor(v: string | null): Property
    /**
     * Creates a new #ICalProperty.
     * @constructor 
     * @param v The comment
     * @returns The newly created #ICalProperty
     */
    static newComment(v: string | null): Property
    /**
     * Creates a new #ICalProperty.
     * @constructor 
     * @param v The time of completed
     * @returns The newly created #ICalProperty
     */
    static newCompleted(v: Time): Property
    /**
     * Creates a new #ICalProperty.
     * @constructor 
     * @param v The components
     * @returns The newly created #ICalProperty
     */
    static newComponents(v: string | null): Property
    /**
     * Creates a new #ICalProperty.
     * @constructor 
     * @param v The contact
     * @returns The newly created #ICalProperty
     */
    static newContact(v: string | null): Property
    /**
     * Creates a new #ICalProperty.
     * @constructor 
     * @param v The time of created
     * @returns The newly created #ICalProperty
     */
    static newCreated(v: Time): Property
    /**
     * Creates a new #ICalProperty.
     * @constructor 
     * @param v The csid
     * @returns The newly created #ICalProperty
     */
    static newCsid(v: string | null): Property
    /**
     * Creates a new #ICalProperty.
     * @constructor 
     * @param v The time of datemax
     * @returns The newly created #ICalProperty
     */
    static newDatemax(v: Time): Property
    /**
     * Creates a new #ICalProperty.
     * @constructor 
     * @param v The time of datemin
     * @returns The newly created #ICalProperty
     */
    static newDatemin(v: Time): Property
    /**
     * Creates a new #ICalProperty.
     * @constructor 
     * @param v The decreed
     * @returns The newly created #ICalProperty
     */
    static newDecreed(v: string | null): Property
    /**
     * Creates a new #ICalProperty.
     * @constructor 
     * @param v The defaultcharset
     * @returns The newly created #ICalProperty
     */
    static newDefaultcharset(v: string | null): Property
    /**
     * Creates a new #ICalProperty.
     * @constructor 
     * @param v The defaultlocale
     * @returns The newly created #ICalProperty
     */
    static newDefaultlocale(v: string | null): Property
    /**
     * Creates a new #ICalProperty.
     * @constructor 
     * @param v The defaulttzid
     * @returns The newly created #ICalProperty
     */
    static newDefaulttzid(v: string | null): Property
    /**
     * Creates a new #ICalProperty.
     * @constructor 
     * @param v The defaultvcars
     * @returns The newly created #ICalProperty
     */
    static newDefaultvcars(v: string | null): Property
    /**
     * Creates a new #ICalProperty.
     * @constructor 
     * @param v The deny
     * @returns The newly created #ICalProperty
     */
    static newDeny(v: string | null): Property
    /**
     * Creates a new #ICalProperty.
     * @constructor 
     * @param v The description
     * @returns The newly created #ICalProperty
     */
    static newDescription(v: string | null): Property
    /**
     * Creates a new #ICalProperty.
     * @constructor 
     * @param v The time of dtend
     * @returns The newly created #ICalProperty
     */
    static newDtend(v: Time): Property
    /**
     * Creates a new #ICalProperty.
     * @constructor 
     * @param v The time of dtstamp
     * @returns The newly created #ICalProperty
     */
    static newDtstamp(v: Time): Property
    /**
     * Creates a new #ICalProperty.
     * @constructor 
     * @param v The time of dtstart
     * @returns The newly created #ICalProperty
     */
    static newDtstart(v: Time): Property
    /**
     * Creates a new #ICalProperty.
     * @constructor 
     * @param v The time of due
     * @returns The newly created #ICalProperty
     */
    static newDue(v: Time): Property
    /**
     * Creates a new #ICalProperty.
     * @constructor 
     * @param v The duration
     * @returns The newly created #ICalProperty
     */
    static newDuration(v: Duration): Property
    /**
     * Creates a new #ICalProperty.
     * @constructor 
     * @param v The estimatedduration
     * @returns The newly created #ICalProperty
     */
    static newEstimatedduration(v: Duration): Property
    /**
     * Creates a new #ICalProperty.
     * @constructor 
     * @param v The time of exdate
     * @returns The newly created #ICalProperty
     */
    static newExdate(v: Time): Property
    /**
     * Creates a new #ICalProperty.
     * @constructor 
     * @param v The expand
     * @returns The newly created #ICalProperty
     */
    static newExpand(v: number): Property
    /**
     * Creates a new #ICalProperty.
     * @constructor 
     * @param v The exrule recurrence type
     * @returns The newly created #ICalProperty
     */
    static newExrule(v: Recurrence): Property
    /**
     * Creates a new #ICalProperty.
     * @constructor 
     * @param v The freebusy period type
     * @returns The newly created #ICalProperty
     */
    static newFreebusy(v: Period): Property
    /**
     * Creates a #ICalProperty from a string.
     * @constructor 
     * @param str The string used to construct a #ICalProperty
     * @returns The newly created #ICalProperty from @str.
     */
    static newFromString(str: string | null): Property
    /**
     * Creates a new #ICalProperty.
     * @constructor 
     * @param v The geo type
     * @returns The newly created #ICalProperty
     */
    static newGeo(v: Geo): Property
    /**
     * Creates a new #ICalProperty.
     * @constructor 
     * @param v The grant
     * @returns The newly created #ICalProperty
     */
    static newGrant(v: string | null): Property
    /**
     * Creates a new #ICalProperty.
     * @constructor 
     * @param v The itipversion
     * @returns The newly created #ICalProperty
     */
    static newItipversion(v: string | null): Property
    /**
     * Creates a new #ICalProperty.
     * @constructor 
     * @param v The time of lastmodified
     * @returns The newly created #ICalProperty
     */
    static newLastmodified(v: Time): Property
    /**
     * Creates a new #ICalProperty.
     * @constructor 
     * @param v The location
     * @returns The newly created #ICalProperty
     */
    static newLocation(v: string | null): Property
    /**
     * Creates a new #ICalProperty.
     * @constructor 
     * @param v The maxcomponentsize
     * @returns The newly created #ICalProperty
     */
    static newMaxcomponentsize(v: number): Property
    /**
     * Creates a new #ICalProperty.
     * @constructor 
     * @param v The time of maxdate
     * @returns The newly created #ICalProperty
     */
    static newMaxdate(v: Time): Property
    /**
     * Creates a new #ICalProperty.
     * @constructor 
     * @param v The maxresults
     * @returns The newly created #ICalProperty
     */
    static newMaxresults(v: number): Property
    /**
     * Creates a new #ICalProperty.
     * @constructor 
     * @param v The maxresultssize
     * @returns The newly created #ICalProperty
     */
    static newMaxresultssize(v: number): Property
    /**
     * Creates a new #ICalProperty.
     * @constructor 
     * @param v The method
     * @returns The newly created #ICalProperty
     */
    static newMethod(v: PropertyMethod): Property
    /**
     * Creates a new #ICalProperty.
     * @constructor 
     * @param v The time of mindate
     * @returns The newly created #ICalProperty
     */
    static newMindate(v: Time): Property
    /**
     * Creates a new #ICalProperty.
     * @constructor 
     * @param v The multipart
     * @returns The newly created #ICalProperty
     */
    static newMultipart(v: string | null): Property
    /**
     * Creates a new #ICalProperty.
     * @constructor 
     * @param v The name
     * @returns The newly created #ICalProperty
     */
    static newName(v: string | null): Property
    /**
     * Creates a new #ICalProperty.
     * @constructor 
     * @param v The organizer
     * @returns The newly created #ICalProperty
     */
    static newOrganizer(v: string | null): Property
    /**
     * Creates a new #ICalProperty.
     * @constructor 
     * @param v The owner
     * @returns The newly created #ICalProperty
     */
    static newOwner(v: string | null): Property
    /**
     * Creates a new #ICalProperty.
     * @constructor 
     * @param v The percentcomplete
     * @returns The newly created #ICalProperty
     */
    static newPercentcomplete(v: number): Property
    /**
     * Creates a new #ICalProperty.
     * @constructor 
     * @param v The permission
     * @returns The newly created #ICalProperty
     */
    static newPermission(v: string | null): Property
    /**
     * Creates a new #ICalProperty.
     * @constructor 
     * @param v The pollcompletion
     * @returns The newly created #ICalProperty
     */
    static newPollcompletion(v: PropertyPollcompletion): Property
    /**
     * Creates a new #ICalProperty.
     * @constructor 
     * @param v The pollitemid
     * @returns The newly created #ICalProperty
     */
    static newPollitemid(v: number): Property
    /**
     * Creates a new #ICalProperty.
     * @constructor 
     * @param v The pollmode
     * @returns The newly created #ICalProperty
     */
    static newPollmode(v: PropertyPollmode): Property
    /**
     * Creates a new #ICalProperty.
     * @constructor 
     * @param v The pollproperties
     * @returns The newly created #ICalProperty
     */
    static newPollproperties(v: string | null): Property
    /**
     * Creates a new #ICalProperty.
     * @constructor 
     * @param v The pollwinner
     * @returns The newly created #ICalProperty
     */
    static newPollwinner(v: number): Property
    /**
     * Creates a new #ICalProperty.
     * @constructor 
     * @param v The priority
     * @returns The newly created #ICalProperty
     */
    static newPriority(v: number): Property
    /**
     * Creates a new #ICalProperty.
     * @constructor 
     * @param v The prodid
     * @returns The newly created #ICalProperty
     */
    static newProdid(v: string | null): Property
    /**
     * Creates a new #ICalProperty.
     * @constructor 
     * @param v The query
     * @returns The newly created #ICalProperty
     */
    static newQuery(v: string | null): Property
    /**
     * Creates a new #ICalProperty.
     * @constructor 
     * @param v The queryid
     * @returns The newly created #ICalProperty
     */
    static newQueryid(v: string | null): Property
    /**
     * Creates a new #ICalProperty.
     * @constructor 
     * @param v The querylevel
     * @returns The newly created #ICalProperty
     */
    static newQuerylevel(v: PropertyQuerylevel): Property
    /**
     * Creates a new #ICalProperty.
     * @constructor 
     * @param v The queryname
     * @returns The newly created #ICalProperty
     */
    static newQueryname(v: string | null): Property
    /**
     * Creates a new #ICalProperty.
     * @constructor 
     * @param v The rdate
     * @returns The newly created #ICalProperty
     */
    static newRdate(v: Datetimeperiod): Property
    /**
     * Creates a new #ICalProperty.
     * @constructor 
     * @param v The recuraccepted
     * @returns The newly created #ICalProperty
     */
    static newRecuraccepted(v: string | null): Property
    /**
     * Creates a new #ICalProperty.
     * @constructor 
     * @param v The recurexpand
     * @returns The newly created #ICalProperty
     */
    static newRecurexpand(v: string | null): Property
    /**
     * Creates a new #ICalProperty.
     * @constructor 
     * @param v The recurlimit
     * @returns The newly created #ICalProperty
     */
    static newRecurlimit(v: string | null): Property
    /**
     * Creates a new #ICalProperty.
     * @constructor 
     * @param v The time of recurrenceid
     * @returns The newly created #ICalProperty
     */
    static newRecurrenceid(v: Time): Property
    /**
     * Creates a new #ICalProperty.
     * @constructor 
     * @param v The relatedto
     * @returns The newly created #ICalProperty
     */
    static newRelatedto(v: string | null): Property
    /**
     * Creates a new #ICalProperty.
     * @constructor 
     * @param v The relcalid
     * @returns The newly created #ICalProperty
     */
    static newRelcalid(v: string | null): Property
    /**
     * Creates a new #ICalProperty.
     * @constructor 
     * @param v The repeat
     * @returns The newly created #ICalProperty
     */
    static newRepeat(v: number): Property
    /**
     * Creates a new #ICalProperty.
     * @constructor 
     * @param v The replyurl
     * @returns The newly created #ICalProperty
     */
    static newReplyurl(v: string | null): Property
    /**
     * Creates a new #ICalProperty.
     * @constructor 
     * @param v The requeststatus
     * @returns The newly created #ICalProperty
     */
    static newRequeststatus(v: Reqstat): Property
    /**
     * Creates a new #ICalProperty.
     * @constructor 
     * @param v The resources
     * @returns The newly created #ICalProperty
     */
    static newResources(v: string | null): Property
    /**
     * Creates a new #ICalProperty.
     * @constructor 
     * @param v The response
     * @returns The newly created #ICalProperty
     */
    static newResponse(v: number): Property
    /**
     * Creates a new #ICalProperty.
     * @constructor 
     * @param v The restriction
     * @returns The newly created #ICalProperty
     */
    static newRestriction(v: string | null): Property
    /**
     * Creates a new #ICalProperty.
     * @constructor 
     * @param v The rrule recurrence type
     * @returns The newly created #ICalProperty
     */
    static newRrule(v: Recurrence): Property
    /**
     * Creates a new #ICalProperty.
     * @constructor 
     * @param v The scope
     * @returns The newly created #ICalProperty
     */
    static newScope(v: string | null): Property
    /**
     * Creates a new #ICalProperty.
     * @constructor 
     * @param v The sequence
     * @returns The newly created #ICalProperty
     */
    static newSequence(v: number): Property
    /**
     * Creates a new #ICalProperty.
     * @constructor 
     * @param v The status
     * @returns The newly created #ICalProperty
     */
    static newStatus(v: PropertyStatus): Property
    /**
     * Creates a new #ICalProperty.
     * @constructor 
     * @param v The storesexpanded
     * @returns The newly created #ICalProperty
     */
    static newStoresexpanded(v: string | null): Property
    /**
     * Creates a new #ICalProperty.
     * @constructor 
     * @param v The summary
     * @returns The newly created #ICalProperty
     */
    static newSummary(v: string | null): Property
    /**
     * Creates a new #ICalProperty.
     * @constructor 
     * @param v The target
     * @returns The newly created #ICalProperty
     */
    static newTarget(v: string | null): Property
    /**
     * Creates a new #ICalProperty.
     * @constructor 
     * @param v The taskmode
     * @returns The newly created #ICalProperty
     */
    static newTaskmode(v: PropertyTaskmode): Property
    /**
     * Creates a new #ICalProperty.
     * @constructor 
     * @param v The transp
     * @returns The newly created #ICalProperty
     */
    static newTransp(v: PropertyTransp): Property
    /**
     * Creates a new #ICalProperty.
     * @constructor 
     * @param v The trigger period type
     * @returns The newly created #ICalProperty
     */
    static newTrigger(v: Trigger): Property
    /**
     * Creates a new #ICalProperty.
     * @constructor 
     * @param v The tzid
     * @returns The newly created #ICalProperty
     */
    static newTzid(v: string | null): Property
    /**
     * Creates a new #ICalProperty.
     * @constructor 
     * @param v The tzidaliasof
     * @returns The newly created #ICalProperty
     */
    static newTzidaliasof(v: string | null): Property
    /**
     * Creates a new #ICalProperty.
     * @constructor 
     * @param v The tzname
     * @returns The newly created #ICalProperty
     */
    static newTzname(v: string | null): Property
    /**
     * Creates a new #ICalProperty.
     * @constructor 
     * @param v The tzoffsetfrom
     * @returns The newly created #ICalProperty
     */
    static newTzoffsetfrom(v: number): Property
    /**
     * Creates a new #ICalProperty.
     * @constructor 
     * @param v The tzoffsetto
     * @returns The newly created #ICalProperty
     */
    static newTzoffsetto(v: number): Property
    /**
     * Creates a new #ICalProperty.
     * @constructor 
     * @param v The time of acknowledgement
     * @returns The newly created #ICalProperty
     */
    static newTzuntil(v: Time): Property
    /**
     * Creates a new #ICalProperty.
     * @constructor 
     * @param v The tzurl
     * @returns The newly created #ICalProperty
     */
    static newTzurl(v: string | null): Property
    /**
     * Creates a new #ICalProperty.
     * @constructor 
     * @param v The uid
     * @returns The newly created #ICalProperty
     */
    static newUid(v: string | null): Property
    /**
     * Creates a new #ICalProperty.
     * @constructor 
     * @param v The url
     * @returns The newly created #ICalProperty
     */
    static newUrl(v: string | null): Property
    /**
     * Creates a new #ICalProperty.
     * @constructor 
     * @param v The version
     * @returns The newly created #ICalProperty
     */
    static newVersion(v: string | null): Property
    /**
     * Creates a new #ICalProperty.
     * @constructor 
     * @param v The voter
     * @returns The newly created #ICalProperty
     */
    static newVoter(v: string | null): Property
    /**
     * Creates a new #ICalProperty.
     * @constructor 
     * @param v The x
     * @returns The newly created #ICalProperty
     */
    static newX(v: string | null): Property
    /**
     * Creates a new #ICalProperty.
     * @constructor 
     * @param v The xlicclass
     * @returns The newly created #ICalProperty
     */
    static newXlicclass(v: PropertyXlicclass): Property
    /**
     * Creates a new #ICalProperty.
     * @constructor 
     * @param v The xlicclustercount
     * @returns The newly created #ICalProperty
     */
    static newXlicclustercount(v: string | null): Property
    /**
     * Creates a new #ICalProperty.
     * @constructor 
     * @param v The xlicerror
     * @returns The newly created #ICalProperty
     */
    static newXlicerror(v: string | null): Property
    /**
     * Creates a new #ICalProperty.
     * @constructor 
     * @param v The xlicmimecharset
     * @returns The newly created #ICalProperty
     */
    static newXlicmimecharset(v: string | null): Property
    /**
     * Creates a new #ICalProperty.
     * @constructor 
     * @param v The xlicmimecid
     * @returns The newly created #ICalProperty
     */
    static newXlicmimecid(v: string | null): Property
    /**
     * Creates a new #ICalProperty.
     * @constructor 
     * @param v The xlicmimecontenttype
     * @returns The newly created #ICalProperty
     */
    static newXlicmimecontenttype(v: string | null): Property
    /**
     * Creates a new #ICalProperty.
     * @constructor 
     * @param v The xlicmimeencoding
     * @returns The newly created #ICalProperty
     */
    static newXlicmimeencoding(v: string | null): Property
    /**
     * Creates a new #ICalProperty.
     * @constructor 
     * @param v The xlicmimefilename
     * @returns The newly created #ICalProperty
     */
    static newXlicmimefilename(v: string | null): Property
    /**
     * Creates a new #ICalProperty.
     * @constructor 
     * @param v The xlicmimeoptinfo
     * @returns The newly created #ICalProperty
     */
    static newXlicmimeoptinfo(v: string | null): Property
    _init(config?: Property.ConstructorProperties): void
    /**
     * Converts the enum to string.
     * @param e The enum to be converted
     * @returns The string representation of @e.
     */
    static enumToString(e: number): string | null
    /**
     * Converts a integer and string into an enum.
     * @param kind The kind
     * @param str A string
     * @returns The enum.
     */
    static kindAndStringToEnum(kind: number, str: string | null): number
    /**
     * Converts the string to #ICalPropertyKind.
     * @param string A string representing #ICalPropertyKind
     * @returns The #ICalPropertyKind.
     */
    static kindFromString(string: string | null): PropertyKind
    /**
     * Checks whether the enum belongs to the #ICalPropertyKind.
     * @param kind A #ICalPropertyKind
     * @param e The enum to be checked
     * @returns 1 if yes, 0 if not.
     */
    static kindHasProperty(kind: PropertyKind, e: number): number
    /**
     * Checks whether #ICalPropertyKind is valid.
     * @param kind The #ICalPropertyKind
     * @returns 1 if valid, 0 if not.
     */
    static kindIsValid(kind: PropertyKind): boolean
    /**
     * Converts the #ICalPropertyKind to a string.
     * @param kind A #ICalPropertyKind
     * @returns The string representation of @kind.
     */
    static kindToString(kind: PropertyKind): string | null
    /**
     * Converts the #ICalPropertyKind to #ICalValueKind.
     * @param kind A #ICalPropertyKind
     * @returns The #ICalValueKind
     */
    static kindToValueKind(kind: PropertyKind): ValueKind
    /**
     * Converts the string to #ICalPropertyKind.
     * @param str A string
     * @returns The #ICalPropertyMethod.
     */
    static methodFromString(str: string | null): PropertyMethod
    /**
     * Converts the #ICalPropertyMethod to string.
     * @param method The #ICalPropertyMethod
     * @returns The string representation of #ICalPropertyMethod.
     */
    static methodToString(method: PropertyMethod): string | null
    /**
     * Decides if this recurrence is acceptable. This function decides if a specific recurrence value is excluded
     * by EXRULE or EXDATE properties.
     * @param comp A #ICalComponent
     * @param dtstart The base dtstart value for this component
     * @param recurtime The time to test against
     * @returns 1 if yes, 0 if not.
     */
    static recurrenceIsExcluded(comp: Component, dtstart: Time, recurtime: Time): boolean
    /**
     * Converts the string to #ICalPropertyKind.
     * @param str A string
     * @returns The #ICalPropertyStatus.
     */
    static statusFromString(str: string | null): PropertyStatus
    /**
     * Converts the #ICalPropertyStatus to string.
     * @param method The #ICalPropertyStatus
     * @returns The string representation of #ICalPropertyStatus.
     */
    static statusToString(method: PropertyStatus): string | null
}

export module RecurIterator {

    // Constructor properties interface

    export interface ConstructorProperties extends Object.ConstructorProperties {
    }

}

export interface RecurIterator {

    // Own properties of ICalGLib-3.0.ICalGLib.RecurIterator

    __gtype__: number

    // Owm methods of ICalGLib-3.0.ICalGLib.RecurIterator

    /**
     * Gets the next occurrence from an iterator.
     * @returns The next occurrence according to this recurrence rule.
     */
    next(): Time
    /**
     * Sets the date-time at which the iterator will start, where 'start' is a value between DTSTART and UNTIL.
     * Note:
     * CAN NOT be used with RRULEs that contain COUNT.
     * @param start The date-time to move the iterator to
     * @returns 1 if succeeded, 0 if failed, like when the recurrence type is unsupported.
     */
    setStart(start: Time): number

    // Class property signals of ICalGLib-3.0.ICalGLib.RecurIterator

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: "notify::always-destroy", callback: (...args: any[]) => void): number
    on(sigName: "notify::always-destroy", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::always-destroy", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::always-destroy", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::always-destroy", ...args: any[]): void
    connect(sigName: "notify::is-global-memory", callback: (...args: any[]) => void): number
    on(sigName: "notify::is-global-memory", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::is-global-memory", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::is-global-memory", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::is-global-memory", ...args: any[]): void
    connect(sigName: "notify::native", callback: (...args: any[]) => void): number
    on(sigName: "notify::native", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::native", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::native", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::native", ...args: any[]): void
    connect(sigName: "notify::native-destroy-func", callback: (...args: any[]) => void): number
    on(sigName: "notify::native-destroy-func", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::native-destroy-func", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::native-destroy-func", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::native-destroy-func", ...args: any[]): void
    connect(sigName: "notify::owner", callback: (...args: any[]) => void): number
    on(sigName: "notify::owner", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::owner", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::owner", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::owner", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

/**
 * This is the ICalRecurIterator instance.
 * @class 
 */
export class RecurIterator extends Object {

    // Own properties of ICalGLib-3.0.ICalGLib.RecurIterator

    static name: string

    // Constructors of ICalGLib-3.0.ICalGLib.RecurIterator

    constructor(config?: RecurIterator.ConstructorProperties) 
    /**
     * Creates an #ICalRecurIterator.
     * @constructor 
     * @param rule The rule applied on the #ICalRecurIterator
     * @param dtstart The start time of the recurrence
     * @returns The newly created #ICalRecurIterator
     */
    constructor(rule: Recurrence, dtstart: Time) 
    /**
     * Creates an #ICalRecurIterator.
     * @constructor 
     * @param rule The rule applied on the #ICalRecurIterator
     * @param dtstart The start time of the recurrence
     * @returns The newly created #ICalRecurIterator
     */
    static new(rule: Recurrence, dtstart: Time): RecurIterator
    _init(config?: RecurIterator.ConstructorProperties): void
}

export module Recurrence {

    // Constructor properties interface

    export interface ConstructorProperties extends Object.ConstructorProperties {
    }

}

export interface Recurrence {

    // Own properties of ICalGLib-3.0.ICalGLib.Recurrence

    __gtype__: number

    // Owm methods of ICalGLib-3.0.ICalGLib.Recurrence

    /**
     * Resets an #ICalRecurrence.
     */
    clear(): void
    /**
     * Gets the by_day value at index `index`. The index should be less than %I_CAL_BY_DAY_SIZE.
     * @param index The index in by_day of #ICalRecurrence, less than %I_CAL_BY_DAY_SIZE
     * @returns The by_day of #ICalRecurrence at index @index.
     */
    getByDay(index: number): number
    /**
     * Gets the by_day array from #ICalRecurrence. The array size is I_CAL_BY_DAY_SIZE.
     * @returns The by_day of #ICalRecurrence.
     */
    getByDayArray(): number[]
    /**
     * Gets the by_hour value at index `index`. The index should be less than %I_CAL_BY_HOUR_SIZE.
     * @param index The index in by_hour of #ICalRecurrence, less than %I_CAL_BY_HOUR_SIZE
     * @returns The by_hour of #ICalRecurrence at index @index.
     */
    getByHour(index: number): number
    /**
     * Gets the by_hour array from #ICalRecurrence. The array size is I_CAL_BY_HOUR_SIZE.
     * @returns The by_hour of #ICalRecurrence.
     */
    getByHourArray(): number[]
    /**
     * Gets the by_minute value at index `index`. The index should be less than %I_CAL_BY_MINUTE_SIZE.
     * @param index The index in by_minute of #ICalRecurrence, less than %I_CAL_BY_MINUTE_SIZE
     * @returns The by_minute of #ICalRecurrence at index @index.
     */
    getByMinute(index: number): number
    /**
     * Gets the by_minute array from #ICalRecurrence. The array size is I_CAL_BY_MINUTE_SIZE.
     * @returns The by_minute of #ICalRecurrence.
     */
    getByMinuteArray(): number[]
    /**
     * Gets the by_month value at index `index`. The index should be less than %I_CAL_BY_MONTH_SIZE.
     * @param index The index in by_month of #ICalRecurrence, less than %I_CAL_BY_MONTH_SIZE
     * @returns The by_month of #ICalRecurrence at index @index.
     */
    getByMonth(index: number): number
    /**
     * Gets the by_month array from #ICalRecurrence. The array size is I_CAL_BY_MONTH_SIZE.
     * @returns The by_month of #ICalRecurrence.
     */
    getByMonthArray(): number[]
    /**
     * Gets the by_month_day value at index `index`. The index should be less than %I_CAL_BY_MONTHDAY_SIZE.
     * @param index The index in by_month_day of #ICalRecurrence, less than %I_CAL_BY_MONTHDAY_SIZE
     * @returns The by_month_day of #ICalRecurrence at index @index.
     */
    getByMonthDay(index: number): number
    /**
     * Gets the by_month_day array from #ICalRecurrence. The array size is I_CAL_BY_MONTHDAY_SIZE.
     * @returns The by_month_day of #ICalRecurrence.
     */
    getByMonthDayArray(): number[]
    /**
     * Gets the by_second value at index `index`. The index should be less than %I_CAL_BY_SECOND_SIZE.
     * @param index The index in by_second of #ICalRecurrence, less than %I_CAL_BY_SECOND_SIZE
     * @returns The by_second of #ICalRecurrence at index @index.
     */
    getBySecond(index: number): number
    /**
     * Gets the by_second array from #ICalRecurrence. The array size if I_CAL_BY_SECOND_SIZE.
     * @returns The by_second of #ICalRecurrence.
     */
    getBySecondArray(): number[]
    /**
     * Gets the by_set_pos value at index `index`. The index should be less than %I_CAL_BY_SETPOS_SIZE.
     * @param index The index in by_set_pos of #ICalRecurrence, less than %I_CAL_BY_SETPOS_SIZE
     * @returns The by_week_no of #ICalRecurrence at index @index.
     */
    getBySetPos(index: number): number
    /**
     * Gets the by_set_pos array from #ICalRecurrence. The array size is I_CAL_BY_SETPOS_SIZE.
     * @returns The by_set_pos of #ICalRecurrence.
     */
    getBySetPosArray(): number[]
    /**
     * Gets the by_week_no value at index `index`. The index should be less than %I_CAL_BY_WEEKNO_SIZE.
     * @param index The index in by_week_no of #ICalRecurrence, less than %I_CAL_BY_WEEKNO_SIZE
     * @returns The by_week_no of #ICalRecurrence at index @index.
     */
    getByWeekNo(index: number): number
    /**
     * Gets the by_week_no array from #ICalRecurrence. The array size is I_CAL_BY_WEEKNO_SIZE.
     * @returns The by_week_no of #ICalRecurrence.
     */
    getByWeekNoArray(): number[]
    /**
     * Gets the by_year_day value at index `index`. The index should be less than %I_CAL_BY_YEARDAY_SIZE.
     * @param index The index in by_year_day of #ICalRecurrence, less than %I_CAL_BY_YEARDAY_SIZE
     * @returns The by_year_day of #ICalRecurrence at index @index.
     */
    getByYearDay(index: number): number
    /**
     * Gets the by_year_day array from #ICalRecurrence. The array size is I_CAL_BY_YEARDAY_SIZE.
     * @returns The by_year_day of #ICalRecurrence.
     */
    getByYearDayArray(): number[]
    /**
     * Gets the count from #ICalRecurrence.
     * @returns The count of #ICalRecurrence.
     */
    getCount(): number
    /**
     * Gets the freq from #ICalRecurrence.
     * @returns The freq of #ICalRecurrence.
     */
    getFreq(): RecurrenceFrequency
    /**
     * Gets the interval from #ICalRecurrence.
     * @returns The interval of #ICalRecurrence.
     */
    getInterval(): number
    /**
     * Gets the until from #ICalRecurrence.
     * @returns The until of #ICalRecurrence.
     */
    getUntil(): Time
    /**
     * Gets the week_start from #ICalRecurrence.
     * @returns The week_start of #ICalRecurrence.
     */
    getWeekStart(): RecurrenceWeekday
    /**
     * Sets the by_day array from #ICalRecurrence at the given index. The array size if I_CAL_BY_DAY_SIZE.
     * @param index The index in by_day of #ICalRecurrence
     * @param value The value to be set into by_day of #ICalRecurrence
     */
    setByDay(index: number, value: number): void
    /**
     * Sets the by_day array in `recur` at once. The array size can be less than I_CAL_BY_DAY_SIZE. Shorter arrays
     * are terminated with I_CAL_RECURRENCE_ARRAY_MAX value, longer arrays are truncated.
     * @param values The array of values
     */
    setByDayArray(values: number[]): void
    /**
     * Sets the by_hour array from #ICalRecurrence at the given index. The array size is I_CAL_BY_HOUR_SIZE.
     * @param index The index in by_hour of #ICalRecurrence
     * @param value The value to be set into by_hour of #ICalRecurrence
     */
    setByHour(index: number, value: number): void
    /**
     * Sets the by_hour array in `recur` at once. The array size can be less than I_CAL_BY_HOUR_SIZE. Shorter
     * arrays are terminated with I_CAL_RECURRENCE_ARRAY_MAX value, longer arrays are truncated.
     * @param values The array of values
     */
    setByHourArray(values: number[]): void
    /**
     * Sets the by_minute array from #ICalRecurrence at the given index. The array size is I_CAL_BY_MINUTE_SIZE.
     * @param index The index in by_minute of #ICalRecurrence
     * @param value The value to be set into by_minute of #ICalRecurrence
     */
    setByMinute(index: number, value: number): void
    /**
     * Sets the by_minute array in `recur` at once. The array size can be less than I_CAL_BY_MINUTE_SIZE. Shorter
     * arrays are terminated with I_CAL_RECURRENCE_ARRAY_MAX value, longer arrays are truncated.
     * @param values The array of values
     */
    setByMinuteArray(values: number[]): void
    /**
     * Sets the by_month array from #ICalRecurrence at the given index. The array size is I_CAL_BY_MONTH_SIZE.
     * @param index The index in by_month of #ICalRecurrence
     * @param value The value to be set into by_month of #ICalRecurrence
     */
    setByMonth(index: number, value: number): void
    /**
     * Sets the by_month array in `recur` at once. The array size can be less than I_CAL_BY_MONTH_SIZE. Shorter
     * arrays are terminated with I_CAL_RECURRENCE_ARRAY_MAX value, longer arrays are truncated.
     * @param values The array of values
     */
    setByMonthArray(values: number[]): void
    /**
     * Sets the by_month_day array from #ICalRecurrence at the given index. The array size if I_CAL_BY_MONTHDAY_SIZE.
     * @param index The index in by_month_day of #ICalRecurrence
     * @param value The value to be set into by_month_day of #ICalRecurrence
     */
    setByMonthDay(index: number, value: number): void
    /**
     * Sets the by_month_day array in `recur` at once. The array size can be less than I_CAL_BY_MONTHDAY_SIZE.
     * Shorter arrays are terminated with I_CAL_RECURRENCE_ARRAY_MAX value, longer arrays are truncated.
     * @param values The array of values
     */
    setByMonthDayArray(values: number[]): void
    /**
     * Sets the by_second array from #ICalRecurrence at the given index. The array size is I_CAL_BY_SECOND_SIZE.
     * @param index The index in by_second of #ICalRecurrence, less than I_CAL_BY_SECOND_SIZE
     * @param value The value to be set into by_second of #ICalRecurrence
     */
    setBySecond(index: number, value: number): void
    /**
     * Sets the by_second array in `recur` at once. The array size can be less than I_CAL_BY_SECOND_SIZE. Shorter
     * arrays are terminated with I_CAL_RECURRENCE_ARRAY_MAX value, longer arrays are truncated.
     * @param values The array of values
     */
    setBySecondArray(values: number[]): void
    /**
     * Sets the by_set_pos array from #ICalRecurrence at the given index. The array size is I_CAL_BY_SETPOS_SIZE.
     * @param index The index in by_set_pos of #ICalRecurrence
     * @param value The value to be set into by_set_pos of #ICalRecurrence
     */
    setBySetPos(index: number, value: number): void
    /**
     * Sets the by_set_pos array in `recur` at once. The array size can be less than I_CAL_BY_SETPOS_SIZE. Shorter
     * arrays are terminated with I_CAL_RECURRENCE_ARRAY_MAX value, longer arrays are truncated.
     * @param values The array of values
     */
    setBySetPosArray(values: number[]): void
    /**
     * Sets the by_week_no array from #ICalRecurrence at the given index. The array size is I_CAL_BY_WEEKNO_SIZE.
     * @param index The index in by_week_no of #ICalRecurrence
     * @param value The value to be set into by_week_no of #ICalRecurrence
     */
    setByWeekNo(index: number, value: number): void
    /**
     * Sets the by_week_no array in `recur` at once. The array size can be less than I_CAL_BY_WEEKNO_SIZE. Shorter
     * arrays are terminated with I_CAL_RECURRENCE_ARRAY_MAX value, longer arrays are truncated.
     * @param values The array of values
     */
    setByWeekNoArray(values: number[]): void
    /**
     * Sets the by_year_day array from #ICalRecurrence at the given index. The array size if I_CAL_BY_YEARDAY_SIZE.
     * @param index The index in by_year_day of #ICalRecurrence
     * @param value The value to be set into by_year_day of #ICalRecurrence
     */
    setByYearDay(index: number, value: number): void
    /**
     * Sets the by_year_day array in `recur` at once. The array size can be less than I_CAL_BY_YEARDAY_SIZE.
     * Shorter arrays are terminated with I_CAL_RECURRENCE_ARRAY_MAX value, longer arrays are truncated.
     * @param values The array of values
     */
    setByYearDayArray(values: number[]): void
    /**
     * Sets the count from #ICalRecurrence.
     * @param count The count of #ICalRecurrence
     */
    setCount(count: number): void
    /**
     * Sets the freq from #ICalRecurrence.
     * @param freq The freq of #ICalRecurrence
     */
    setFreq(freq: RecurrenceFrequency): void
    /**
     * Sets the interval from #ICalRecurrence.
     * @param interval The interval of #ICalRecurrence
     */
    setInterval(interval: number): void
    /**
     * Sets the until from #ICalRecurrence.
     * @param until The until of #ICalRecurrence
     */
    setUntil(until: Time): void
    /**
     * Sets the week_start from #ICalRecurrence.
     * @param weekStart The week_start of #ICalRecurrence
     */
    setWeekStart(weekStart: RecurrenceWeekday): void
    /**
     * Converts a #ICalRecurrence to a string.
     * @returns The string representation of @recur.
     */
    toString(): string | null

    // Class property signals of ICalGLib-3.0.ICalGLib.Recurrence

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: "notify::always-destroy", callback: (...args: any[]) => void): number
    on(sigName: "notify::always-destroy", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::always-destroy", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::always-destroy", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::always-destroy", ...args: any[]): void
    connect(sigName: "notify::is-global-memory", callback: (...args: any[]) => void): number
    on(sigName: "notify::is-global-memory", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::is-global-memory", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::is-global-memory", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::is-global-memory", ...args: any[]): void
    connect(sigName: "notify::native", callback: (...args: any[]) => void): number
    on(sigName: "notify::native", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::native", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::native", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::native", ...args: any[]): void
    connect(sigName: "notify::native-destroy-func", callback: (...args: any[]) => void): number
    on(sigName: "notify::native-destroy-func", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::native-destroy-func", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::native-destroy-func", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::native-destroy-func", ...args: any[]): void
    connect(sigName: "notify::owner", callback: (...args: any[]) => void): number
    on(sigName: "notify::owner", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::owner", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::owner", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::owner", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

/**
 * This is the ICalRecurrence instance.
 * @class 
 */
export class Recurrence extends Object {

    // Own properties of ICalGLib-3.0.ICalGLib.Recurrence

    static name: string

    // Constructors of ICalGLib-3.0.ICalGLib.Recurrence

    constructor(config?: Recurrence.ConstructorProperties) 
    /**
     * Creates a new #ICalRecurrence.
     * @constructor 
     * @returns The newly created #ICalRecurrence.
     */
    constructor() 
    /**
     * Creates a new #ICalRecurrence.
     * @constructor 
     * @returns The newly created #ICalRecurrence.
     */
    static new(): Recurrence
    /**
     * Converts a string to a #ICalRecurrence.
     * @constructor 
     * @param str The string representation of the #ICalRecurrence
     * @returns The #ICalRecurrence converted from @str.
     */
    static newFromString(str: string | null): Recurrence
    _init(config?: Recurrence.ConstructorProperties): void
    /**
     * Decodes a day to a weekday in a week.
     * @param day The encoded day which represents the day of the week and Nth day of the week
     * @returns The decoded weekday with Monday to be 1.
     */
    static dayDayOfWeek(day: number): RecurrenceWeekday
    /**
     * Decodes a day to a position of the weekday.
     * @param day The encoded day which represents the day of the week and Nth day of the week
     * @returns The decoded day of the week. 0 == any of day of week. 1 == first, 2 = second, -2 == second to last, etc
     */
    static dayPosition(day: number): number
    /**
     * Converts a string representation to an enum representation for the frequency.
     * @param str The string representation of the frequency
     * @returns The enum representation of the frequency.
     */
    static frequencyFromString(str: string | null): RecurrenceFrequency
    /**
     * Converts a enum representation to a string representation for the frequency.
     * @param kind The frequency enum
     * @returns The string representation of frequency
     */
    static frequencyToString(kind: RecurrenceFrequency): string | null
    /**
     * Decodes a month and check whether it is a leap month.
     * @param month The month to be decoded
     * @returns Whether this month is a leap month.
     */
    static monthIsLeap(month: number): boolean
    static monthMonth(month: number): number
    /**
     * Checks whether rscale is supported.
     * @returns Whether rscale is supported
     */
    static rscaleIsSupported(): boolean
    /**
     * Gets an array of calendars supporting rscale (currently always return NULL).
     * @returns Array of calendars. Currently always NULL.
     */
    static rscaleSupportedCalendars(): Array
    /**
     * Converts a string representation to an enum representation for the skip.
     * @param str The string representation of the skip
     * @returns The enum representation of the skip.
     */
    static skipFromString(str: string | null): RecurrenceSkip
    /**
     * Converts a enum representation to a string representation for the skip.
     * @param kind The frequency enum
     * @returns The string representation of skip
     */
    static skipToString(kind: RecurrenceSkip): string | null
    /**
     * Converts a string representation to an enum representation for the weekday.
     * @param str The string representation of the weekday
     * @returns The enum representation of the weekday.
     */
    static weekdayFromString(str: string | null): RecurrenceWeekday
    /**
     * Converts a enum representation to a string representation for the weekday.
     * @param kind The frequency enum
     * @returns The string representation of weekday
     */
    static weekdayToString(kind: RecurrenceWeekday): string | null
}

export module Reqstat {

    // Constructor properties interface

    export interface ConstructorProperties extends Object.ConstructorProperties {
    }

}

export interface Reqstat {

    // Own properties of ICalGLib-3.0.ICalGLib.Reqstat

    __gtype__: number

    // Owm methods of ICalGLib-3.0.ICalGLib.Reqstat

    /**
     * Gets the code of #ICalReqstat.
     * @returns The code of @reqstat.
     */
    getCode(): RequestStatus
    /**
     * Gets the debug of #ICalReqstat.
     * @returns The debug of @reqstat.
     */
    getDebug(): string | null
    /**
     * Gets the desc of #ICalReqstat.
     * @returns The desc of @reqstat.
     */
    getDesc(): string | null
    /**
     * Sets the code of #ICalReqstat.
     * @param code The code of `reqstat`
     */
    setCode(code: RequestStatus): void
    /**
     * Converts #ICalReqstat to a string representation.
     * @returns A string.
     */
    toString(): string | null

    // Class property signals of ICalGLib-3.0.ICalGLib.Reqstat

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: "notify::always-destroy", callback: (...args: any[]) => void): number
    on(sigName: "notify::always-destroy", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::always-destroy", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::always-destroy", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::always-destroy", ...args: any[]): void
    connect(sigName: "notify::is-global-memory", callback: (...args: any[]) => void): number
    on(sigName: "notify::is-global-memory", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::is-global-memory", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::is-global-memory", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::is-global-memory", ...args: any[]): void
    connect(sigName: "notify::native", callback: (...args: any[]) => void): number
    on(sigName: "notify::native", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::native", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::native", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::native", ...args: any[]): void
    connect(sigName: "notify::native-destroy-func", callback: (...args: any[]) => void): number
    on(sigName: "notify::native-destroy-func", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::native-destroy-func", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::native-destroy-func", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::native-destroy-func", ...args: any[]): void
    connect(sigName: "notify::owner", callback: (...args: any[]) => void): number
    on(sigName: "notify::owner", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::owner", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::owner", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::owner", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

/**
 * This is the ICalReqstat instance.
 * @class 
 */
export class Reqstat extends Object {

    // Own properties of ICalGLib-3.0.ICalGLib.Reqstat

    static name: string

    // Constructors of ICalGLib-3.0.ICalGLib.Reqstat

    constructor(config?: Reqstat.ConstructorProperties) 
    /**
     * Creates a #ICalReqstat from string.
     * @constructor 
     * @param str A string
     * @returns The newly created #ICalReqstat.
     */
    static newFromString(str: string | null): Reqstat
    _init(config?: Reqstat.ConstructorProperties): void
}

export module Time {

    // Constructor properties interface

    export interface ConstructorProperties extends Object.ConstructorProperties {
    }

}

export interface Time {

    // Own properties of ICalGLib-3.0.ICalGLib.Time

    __gtype__: number

    // Owm methods of ICalGLib-3.0.ICalGLib.Time

    /**
     * Adds a time duration on the time.
     * @param d A #ICalDuration as the difference
     * @returns The #ICalTime results. The native object is the same. But since it is a bare object, so it won't cause segmentation.
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
     * Returns a string representation of the time, in RFC2445 format.
     * @returns The string representation
     */
    asIcalString(): string | null
    /**
     * Returns the time as seconds past the UNIX epoch.
     * @returns The time as seconds past the UNIX epoch
     */
    asTimet(): number
    /**
     * Returns the time as seconds past the UNIX epoch, using timezones.
     * @param zone The timezone
     * @returns The time as seconds past the UNIX epoch
     */
    asTimetWithZone(zone: Timezone | null): number
    /**
     * Creates a new #ICalTime, copy of `timetype`.
     * @returns The newly created #ICalTime, copy of @timetype.
     */
    clone(): Time
    /**
     * i_cal_time_compare returns an integer indicating the result of the comparison, as follow:
     * @param b The #ICalTime to be compared
     * @returns -1, 0, or 1 to indicate that a less than b, a==b or a larger than b.
     */
    compare(b: Time): number
    /**
     * Like i_cal_time_compare(), but only use the date parts.
     * @param b The #ICalTime to be compared
     * @returns -1, 0, or 1 to indicate that a less than b, a==b or a larger than b.
     */
    compareDateOnly(b: Time): number
    /**
     * Like i_cal_time_compare_tz(), but only use the date parts; accepts timezone.
     * @param b The #ICalTime to be compared
     * @param zone The target timezone
     * @returns -1, 0, or 1 to indicate that a less than b, a==b or a larger than b.
     */
    compareDateOnlyTz(b: Time, zone: Timezone | null): number
    /**
     * Convert time from one timezone to another.
     * @param fromZone From timezone
     * @param toZone To timezone
     */
    convertTimezone(fromZone: Timezone | null, toZone: Timezone | null): void
    /**
     * Converts `tt` to `zone` and return new #ICalTime object.
     * @param zone The target timezone
     * @returns The converted #ICalTime
     */
    convertToZone(zone: Timezone | null): Time
    /**
     * Converts `tt` to `zone` and store the result into `tt`.
     * @param zone The target timezone
     */
    convertToZoneInplace(zone: Timezone | null): void
    /**
     * Returns the day of the week of the given time. Sunday is 1.
     * @returns The day of the week of the given time. Sunday is 1.
     */
    dayOfWeek(): number
    /**
     * Returns the day of the year of the given time.
     * @returns The day of the year of the given time
     */
    dayOfYear(): number
    /**
     * Gets the year/month/date parts of the `timetype` in one call.
     */
    getDate(): [ /* year */ number, /* month */ number, /* day */ number ]
    /**
     * Gets the day of #ICalTime.
     * @returns The day.
     */
    getDay(): number
    /**
     * Gets the hour of #ICalTime.
     * @returns The hour.
     */
    getHour(): number
    /**
     * Gets the minute of #ICalTime.
     * @returns The minute.
     */
    getMinute(): number
    /**
     * Gets the month of #ICalTime.
     * @returns The month.
     */
    getMonth(): number
    /**
     * Gets the second of #ICalTime.
     * @returns The second.
     */
    getSecond(): number
    /**
     * Gets the hour/minute/second parts of the `timetype` in one call.
     */
    getTime(): [ /* hour */ number, /* minute */ number, /* second */ number ]
    /**
     * Returns the timezone, the #ICalTimezone object is cached and can be either unreferenced once the last
     * instance is used or can be kept until i_cal_object_free_global_objects() is called (usually at the very
     * end of the program).
     * @returns The timezone information
     */
    getTimezone(): Timezone
    /**
     * Returns the tzid, or NULL for a floating time.
     * @returns The tzid of #ICalTime, or NULL if floating type
     */
    getTzid(): string | null
    /**
     * Gets the year of #ICalTime.
     * @returns The year.
     */
    getYear(): number
    /**
     * Returns true if time is of DATE type, false if DATE-TIME.
     * @returns True if time is of DATE type, false if DATE-TIME.
     */
    isDate(): boolean
    /**
     * Gets the is_daylight of #ICalTime.
     * @returns The is_daylight.
     */
    isDaylight(): boolean
    /**
     * Returns true if the time is null.
     * @returns Whether @tt is null_time. 1 if yes, 0 if not.
     */
    isNullTime(): boolean
    /**
     * Returns true if time is relative to UTC zone.
     * @returns True if time is relative to UTC zone.
     */
    isUtc(): boolean
    /**
     * Returns true if the time is null.
     * @returns Whether @tt is null_time. 1 if yes, 0 if not.
     */
    isValidTime(): boolean
    /**
     * Normalizes the icaltime, so that all fields are within the normal range.
     * @returns The #ICalTime normalized
     */
    normalize(): Time
    /**
     * Normalizes the `tt,` so that all fields are within the normal range.
     */
    normalizeInplace(): void
    /**
     * Sets the year/month/date parts of the `timetype` in one call. This doesn't verify validity of the given
     * date.
     * @param year The 'year' part of the date
     * @param month The 'month' part of the date
     * @param day The 'day' part of the date
     */
    setDate(year: number, month: number, day: number): void
    /**
     * Sets the day of #ICalTime.
     * @param day The day
     */
    setDay(day: number): void
    /**
     * Sets the hour of #ICalTime.
     * @param hour The hour
     */
    setHour(hour: number): void
    /**
     * Sets the is_date of #ICalTime.
     * @param isDate The is_date
     */
    setIsDate(isDate: boolean): void
    /**
     * Sets the is_daylight of #ICalTime.
     * @param isDaylight The is_daylight
     */
    setIsDaylight(isDaylight: boolean): void
    /**
     * Sets the minute of #ICalTime.
     * @param minute The minute
     */
    setMinute(minute: number): void
    /**
     * Sets the month of #ICalTime.
     * @param month The month
     */
    setMonth(month: number): void
    /**
     * Sets the second of #ICalTime.
     * @param second The second
     */
    setSecond(second: number): void
    /**
     * Sets the hour/minute/second parts of the `timetype` in one call. This doesn't verify validity of the given
     * time.
     * @param hour The 'hour' part of the time
     * @param minute The 'minute' part of the time
     * @param second The 'second' part of the time
     */
    setTime(hour: number, minute: number, second: number): void
    /**
     * Sets the timezone of the `tt`.
     * @param zone The timezone
     */
    setTimezone(zone: Timezone | null): void
    /**
     * Sets the year of #ICalTime.
     * @param year The year
     */
    setYear(year: number): void
    /**
     * Returns the day of the year for the first day of the week that the given time is within.
     * @param fdow The first day of the week
     * @returns The day of the year for the Sunday of the week that the given time is within.
     */
    startDoyWeek(fdow: number): number
    /**
     * Gets the duration between two time.
     * @param t2 The subtracting #ICalTime
     * @returns The #ICalDuration between two #ICalTime.
     */
    subtract(t2: Time): Duration
    /**
     * Returns the week number for the week the given time is within.
     * @returns The week number for the week the given time is within.
     */
    weekNumber(): number

    // Class property signals of ICalGLib-3.0.ICalGLib.Time

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: "notify::always-destroy", callback: (...args: any[]) => void): number
    on(sigName: "notify::always-destroy", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::always-destroy", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::always-destroy", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::always-destroy", ...args: any[]): void
    connect(sigName: "notify::is-global-memory", callback: (...args: any[]) => void): number
    on(sigName: "notify::is-global-memory", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::is-global-memory", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::is-global-memory", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::is-global-memory", ...args: any[]): void
    connect(sigName: "notify::native", callback: (...args: any[]) => void): number
    on(sigName: "notify::native", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::native", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::native", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::native", ...args: any[]): void
    connect(sigName: "notify::native-destroy-func", callback: (...args: any[]) => void): number
    on(sigName: "notify::native-destroy-func", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::native-destroy-func", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::native-destroy-func", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::native-destroy-func", ...args: any[]): void
    connect(sigName: "notify::owner", callback: (...args: any[]) => void): number
    on(sigName: "notify::owner", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::owner", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::owner", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::owner", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

/**
 * This is the ICalTime instance.
 * @class 
 */
export class Time extends Object {

    // Own properties of ICalGLib-3.0.ICalGLib.Time

    static name: string

    // Constructors of ICalGLib-3.0.ICalGLib.Time

    constructor(config?: Time.ConstructorProperties) 
    /**
     * Creates a new #ICalTime.
     * @constructor 
     * @returns The newly created #ICalTime. It is a null time
     */
    constructor() 
    /**
     * Creates a new #ICalTime.
     * @constructor 
     * @returns The newly created #ICalTime. It is a null time
     */
    static new(): Time
    /**
     * Creates a #ICalTime according to the timezone and current time.
     * @constructor 
     * @param zone The timezone used to create a #ICalTime according to the current time
     * @returns The newly created #ICalTime
     */
    static newCurrentWithZone(zone: Timezone | null): Time
    /**
     * Creates a new time, given a day of year and a year.
     * @constructor 
     * @param day The day of a year
     * @param year The year
     * @returns The newly created #ICalTime
     */
    static newFromDayOfYear(day: number, year: number): Time
    /**
     * Creates a time from an ISO format string.
     * @constructor 
     * @param str The ISO format string
     * @returns The newly created #ICalTime
     */
    static newFromString(str: string | null): Time
    /**
     * Converts seconds past UNIX epoch to a timetype, using timezones.
     * @constructor 
     * @param v The seconds past since epoch time
     * @param isDate Whether it is a date type, 1 if yes, 0 if not
     * @param zone The timezone, or %NULL
     * @returns The newly created #ICalTime
     */
    static newFromTimetWithZone(v: number, isDate: number, zone: Timezone | null): Time
    /**
     * Creates a null date, which indicates no time has been set.
     * @constructor 
     * @returns The newly created #ICalTime
     */
    static newNullDate(): Time
    /**
     * Creates a default time which is an epoch time.
     * @constructor 
     * @returns The newly created #ICalTime
     */
    static newNullTime(): Time
    /**
     * Creates a #ICalTime representing today.
     * @constructor 
     * @returns The newly created #ICalTime
     */
    static newToday(): Time
    _init(config?: Time.ConstructorProperties): void
    /**
     * Gets the number of days in the target month in the target year.
     * @param month The target month
     * @param year The target year
     * @returns The number of days in the target month in the target year.
     */
    static daysInMonth(month: number, year: number): number
    /**
     * Returns the number of days in this year.
     * @param year The target year
     * @returns Days in this year.
     */
    static daysInYear(year: number): number
    /**
     * Checks whether a year is a leap year.
     * @param year The target year
     * @returns Whether the @year is a leap year
     */
    static daysIsLeapYear(year: number): boolean
    /**
     * Applies a list of timezone changes on the array of components until the end year.
     * @param comp The #ICalComponent
     * @param endYear The end year
     * @param changes The changes to be applies
     */
    static timezoneExpandVtimezone(comp: Component, endYear: number, changes: Array): void
}

export module TimeSpan {

    // Constructor properties interface

    export interface ConstructorProperties extends Object.ConstructorProperties {
    }

}

export interface TimeSpan {

    // Own properties of ICalGLib-3.0.ICalGLib.TimeSpan

    __gtype__: number

    // Owm methods of ICalGLib-3.0.ICalGLib.TimeSpan

    /**
     * Creates a new #ICalTimeSpan, clone of `src`. Free it with g_object_unref(), when no longer needed.
     * @returns The newly created #ICalTimeSpan, clone of @src.
     */
    clone(): TimeSpan
    /**
     * Checks whether one #ICalTimeSpan is contained in another #ICalTimeSpan.
     * @param container The target container of #ICalTimeSpan
     * @returns Whether one #ICalTimeSpan is contained in another #ICalTimeSpan.
     */
    contains(container: TimeSpan): number
    /**
     * Gets the end of #ICalTimeSpan.
     * @returns The end.
     */
    getEnd(): number
    /**
     * Gets the is_busy of #ICalTimeSpan.
     * @returns The is_busy.
     */
    getIsBusy(): boolean
    /**
     * Gets the start of #ICalTimeSpan.
     * @returns The start.
     */
    getStart(): number
    /**
     * Checks whether two spans overlap.
     * @param s2 The second #ICalTimeSpan
     * @returns Whether these two span are overlapped.
     */
    overlaps(s2: TimeSpan): number
    /**
     * Sets the end of #ICalTimeSpan.
     * @param end The end
     */
    setEnd(end: number): void
    /**
     * Sets the is_busy of #ICalTimeSpan.
     * @param isBusy The is_busy
     */
    setIsBusy(isBusy: boolean): void
    /**
     * Sets the start of #ICalTimeSpan.
     * @param start The start
     */
    setStart(start: number): void

    // Class property signals of ICalGLib-3.0.ICalGLib.TimeSpan

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: "notify::always-destroy", callback: (...args: any[]) => void): number
    on(sigName: "notify::always-destroy", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::always-destroy", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::always-destroy", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::always-destroy", ...args: any[]): void
    connect(sigName: "notify::is-global-memory", callback: (...args: any[]) => void): number
    on(sigName: "notify::is-global-memory", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::is-global-memory", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::is-global-memory", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::is-global-memory", ...args: any[]): void
    connect(sigName: "notify::native", callback: (...args: any[]) => void): number
    on(sigName: "notify::native", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::native", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::native", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::native", ...args: any[]): void
    connect(sigName: "notify::native-destroy-func", callback: (...args: any[]) => void): number
    on(sigName: "notify::native-destroy-func", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::native-destroy-func", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::native-destroy-func", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::native-destroy-func", ...args: any[]): void
    connect(sigName: "notify::owner", callback: (...args: any[]) => void): number
    on(sigName: "notify::owner", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::owner", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::owner", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::owner", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

/**
 * This is the ICalTimeSpan instance.
 * @class 
 */
export class TimeSpan extends Object {

    // Own properties of ICalGLib-3.0.ICalGLib.TimeSpan

    static name: string

    // Constructors of ICalGLib-3.0.ICalGLib.TimeSpan

    constructor(config?: TimeSpan.ConstructorProperties) 
    /**
     * Creates a new #ICalTimeSpan.
     * @constructor 
     * @param dtstart The start of #ICalTimeSpan
     * @param dtend The end of #ICalTimeSpan
     * @param isBusy Whether this span is busy
     * @returns The newly created #ICalTimeSpan
     */
    constructor(dtstart: Time, dtend: Time, isBusy: number) 
    /**
     * Creates a new #ICalTimeSpan.
     * @constructor 
     * @param dtstart The start of #ICalTimeSpan
     * @param dtend The end of #ICalTimeSpan
     * @param isBusy Whether this span is busy
     * @returns The newly created #ICalTimeSpan
     */
    static new(dtstart: Time, dtend: Time, isBusy: number): TimeSpan
    /**
     * Creates a new #ICalTimeSpan. Free it with g_object_unref(), when no longer needed.
     * @constructor 
     * @param start Start of the time span
     * @param end End of the time span
     * @param isBusy Whether the time span is busy
     * @returns The newly created #ICalTimeSpan.
     */
    static newTimet(start: number, end: number, isBusy: boolean): TimeSpan
    _init(config?: TimeSpan.ConstructorProperties): void
}

export module Timezone {

    // Constructor properties interface

    export interface ConstructorProperties extends Object.ConstructorProperties {
    }

}

export interface Timezone {

    // Own properties of ICalGLib-3.0.ICalGLib.Timezone

    __gtype__: number

    // Owm methods of ICalGLib-3.0.ICalGLib.Timezone

    /**
     * The clone method for #ICalTimezone.
     * @returns The newly created #ICalTimezone with the same values as @zone
     */
    copy(): Timezone
    /**
     * Outputs a list of timezone changes for the given timezone to the given file, up to the maximum year given.
     * @param maxYear Max year
     * @param fp The file handle
     * @returns 1 if success.
     */
    dumpChanges(maxYear: number, fp: any | null): number
    /**
     * Returns the VTIMEZONE component of a timezone.
     * @returns The VTIMEZONE component of the @zone.
     */
    getComponent(): Component
    /**
     * Gets the display name of the `zone`.
     * @returns The display name of @zone
     */
    getDisplayName(): string | null
    /**
     * Returns the latitude of a builtin timezone.
     * @returns The latitude of the #ICalTimezone
     */
    getLatitude(): number
    /**
     * Returns the city name of a timezone, or %NULL, when none is set or when `zone` is also %NULL.
     * @returns The location of the #ICalTimezone, or %NULL
     */
    getLocation(): string | null
    /**
     * Returns the longitude of a builtin timezone.
     * @returns The longitude of the #ICalTimezone.
     */
    getLongitude(): number
    /**
     * Returns the TZID of a timezone, or %NULL, when none is set or when `zone` is also %NULL.
     * @returns The timezone id, or %NULL
     */
    getTzid(): string | null
    /**
     * Returns the TZNAME properties used in the latest STANDARD and DAYLIGHT components. If they are the same
     * it will return just one, e.g. "LMT". If they are different it will format them like "EST/EDT". Note that
     * this may also return NULL.
     * @returns The timezone name
     */
    getTznames(): string | null
    /**
     * Calculates the UTC offset of a given local time in the given timezone.  It is the number of seconds to
     * add to UTC to get local time.  The is_daylight flag is set to 1 if the time is in daylight-savings time.
     * @param tt The local time
     * @returns UTC offset of the @zone
     */
    getUtcOffset(tt: Time | null): [ /* returnType */ number, /* isDaylight */ number ]
    /**
     * Calculates the UTC offset of a given UTC time in the given timezone.  It is the number of seconds to
     * add to UTC to get local time.  The is_daylight flag is set to 1 if the time is in daylight-savings time.
     * @param tt The local time
     * @returns UTC offset of the @zone
     */
    getUtcOffsetOfUtcTime(tt: Time): [ /* returnType */ number, /* isDaylight */ number ]
    /**
     * Sets the VTIMEZONE component of #ICalTimezone, initializing the tzid, location and tzname fields. It
     * returns 1 on success or 0 on failure, i.e. no TZID was found.
     * 
     * `note` The `zone` assumes ownership
     * of the `comp,` thus make sure you pass an unowned #ICalComponent.
     * @param comp The VTIMEZONE component of an #ICalTimezone, initializing the tzid, location and tzname fields
     * @returns Whether the action is successful. 1 for success, 0 for failure.
     */
    setComponent(comp: Component): number

    // Class property signals of ICalGLib-3.0.ICalGLib.Timezone

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: "notify::always-destroy", callback: (...args: any[]) => void): number
    on(sigName: "notify::always-destroy", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::always-destroy", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::always-destroy", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::always-destroy", ...args: any[]): void
    connect(sigName: "notify::is-global-memory", callback: (...args: any[]) => void): number
    on(sigName: "notify::is-global-memory", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::is-global-memory", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::is-global-memory", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::is-global-memory", ...args: any[]): void
    connect(sigName: "notify::native", callback: (...args: any[]) => void): number
    on(sigName: "notify::native", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::native", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::native", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::native", ...args: any[]): void
    connect(sigName: "notify::native-destroy-func", callback: (...args: any[]) => void): number
    on(sigName: "notify::native-destroy-func", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::native-destroy-func", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::native-destroy-func", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::native-destroy-func", ...args: any[]): void
    connect(sigName: "notify::owner", callback: (...args: any[]) => void): number
    on(sigName: "notify::owner", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::owner", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::owner", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::owner", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

/**
 * This is the ICalTimezone instance.
 * @class 
 */
export class Timezone extends Object {

    // Own properties of ICalGLib-3.0.ICalGLib.Timezone

    static name: string

    // Constructors of ICalGLib-3.0.ICalGLib.Timezone

    constructor(config?: Timezone.ConstructorProperties) 
    /**
     * Creates a new array of timezones.
     * @constructor 
     * @returns Create a new array.
     */
    static arrayNew(): Timezone
    /**
     * The constructor of the type #ICalTimezone.
     * @constructor 
     * @returns The newly created object of the type #ICalTimezone.
     */
    constructor() 
    /**
     * The constructor of the type #ICalTimezone.
     * @constructor 
     * @returns The newly created object of the type #ICalTimezone.
     */
    static new(): Timezone
    _init(config?: Timezone.ConstructorProperties): void
    /**
     * Populate the array of timezones with a component.
     * 
     * `note` The `timezones` assumes ownership of the
     * `child,` thus make sure you pass an unowned #ICalComponent.
     * @param timezones The timezones to be populated
     * @param child The component to be appended to `timezones`
     */
    static arrayAppendFromVtimezone(timezones: Array, child: Component): void
    /**
     * Gets the #ICalTimezone at specified position in array.
     * @param timezones The array to be visited
     * @param index The index
     * @returns The #ICalTimezone at the position @index in @timezones.
     */
    static arrayElementAt(timezones: Array, index: number): Timezone
    /**
     * Frees any builtin timezone information.
     */
    static freeBuiltinTimezones(): void
    /**
     * Frees memory dedicated to the zonefile directory.
     */
    static freeZoneDirectory(): void
    /**
     * Returns a single builtin timezone, given its Olson city name.
     * @param location The location representing the timezone
     * @returns The builtin #ICalTimezone with the name of @location
     */
    static getBuiltinTimezone(location: string | null): Timezone | null
    /**
     * Returns a single builtin timezone, given its offset.
     * @param offset The offset used to get the #ICalTimezone
     * @param tzname The reference #ICalTimezone name
     */
    static getBuiltinTimezoneFromOffset(offset: number, tzname: string | null): Timezone
    /**
     * Returns a single builtin timezone, given its TZID.
     * @param tzid The tzid name
     */
    static getBuiltinTimezoneFromTzid(tzid: string | null): Timezone
    /**
     * Returns a list of builtin timezones.
     * @returns An #ICalArray of the builtin #ICalTimezone objects.
     */
    static getBuiltinTimezones(): Array
    /**
     * Gets whether to use builtin timezones files.
     * @returns Whether to use builtin timezones files.
     */
    static getBuiltinTzdata(): boolean
    /**
     * Gets the location of the vtimezone in component.
     * @param component The #ICalComponent to be queried
     * @returns The location of vtimezone.
     */
    static getLocationFromVtimezone(component: Component): string | null
    /**
     * Gets the name of the vtimezone in component.
     * @param component The #ICalComponent to be queried
     * @returns The name of vtimezone.
     */
    static getTznamesFromVtimezone(component: Component): string | null
    /**
     * Returns the UTC timezone.
     * @returns The utc #ICalTimezone
     */
    static getUtcTimezone(): Timezone
    /**
     * Frees memory dedicated to the zonefile directory.
     */
    static releaseZoneTab(): void
    /**
     * Sets whether to use builtin timezones files.
     * @param set Whether to use builtin timezones files
     */
    static setBuiltinTzdata(set: boolean): void
    /**
     * Sets the prefix to be used for tzid's generated from system tzdata. Must be globally unique (such as
     * a domain name owned by the developer of the calling application), and begin and end with forward slashes.
     * Do not change or de-allocate the string buffer after calling this.
     * @param newPrefix The #ICalTimezone to be set
     */
    static setTzidPrefix(newPrefix: string | null): void
    /**
     * Sets the directory to look for the zonefiles.
     * @param path The path to look for the zonefiles
     */
    static setZoneDirectory(path: string | null): void
}

export module Trigger {

    // Constructor properties interface

    export interface ConstructorProperties extends Object.ConstructorProperties {
    }

}

export interface Trigger {

    // Own properties of ICalGLib-3.0.ICalGLib.Trigger

    __gtype__: number

    // Owm methods of ICalGLib-3.0.ICalGLib.Trigger

    /**
     * Gets the duration from #ICalTrigger.
     * @returns The duration of #ICalTrigger.
     */
    getDuration(): Duration
    /**
     * Gets the time from #ICalTrigger.
     * @returns The time of #ICalTrigger.
     */
    getTime(): Time
    /**
     * Checks if a #ICalTrigger is a bad trigger.
     * @returns 1 if yes, 0 if not.
     */
    isBadTrigger(): boolean
    /**
     * Checks if a #ICalTrigger is a null trigger.
     * @returns 1 if yes, 0 if not.
     */
    isNullTrigger(): boolean
    /**
     * Sets the duration from #ICalTrigger.
     * @param duration The duration of #ICalTrigger
     */
    setDuration(duration: Duration): void
    /**
     * Sets the time from #ICalTrigger.
     * @param time The time of #ICalTrigger
     */
    setTime(time: Time): void

    // Class property signals of ICalGLib-3.0.ICalGLib.Trigger

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: "notify::always-destroy", callback: (...args: any[]) => void): number
    on(sigName: "notify::always-destroy", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::always-destroy", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::always-destroy", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::always-destroy", ...args: any[]): void
    connect(sigName: "notify::is-global-memory", callback: (...args: any[]) => void): number
    on(sigName: "notify::is-global-memory", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::is-global-memory", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::is-global-memory", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::is-global-memory", ...args: any[]): void
    connect(sigName: "notify::native", callback: (...args: any[]) => void): number
    on(sigName: "notify::native", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::native", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::native", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::native", ...args: any[]): void
    connect(sigName: "notify::native-destroy-func", callback: (...args: any[]) => void): number
    on(sigName: "notify::native-destroy-func", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::native-destroy-func", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::native-destroy-func", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::native-destroy-func", ...args: any[]): void
    connect(sigName: "notify::owner", callback: (...args: any[]) => void): number
    on(sigName: "notify::owner", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::owner", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::owner", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::owner", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

/**
 * This is the ICalTrigger instance.
 * @class 
 */
export class Trigger extends Object {

    // Own properties of ICalGLib-3.0.ICalGLib.Trigger

    static name: string

    // Constructors of ICalGLib-3.0.ICalGLib.Trigger

    constructor(config?: Trigger.ConstructorProperties) 
    /**
     * Creates a #ICalTrigger from integer.
     * @constructor 
     * @param reltime An integer
     * @returns The newly created #ICalTrigger.
     */
    static newFromInt(reltime: number): Trigger
    /**
     * Creates a #ICalTrigger from a string.
     * @constructor 
     * @param str A string
     * @returns The newly created #ICalTrigger.
     */
    static newFromString(str: string | null): Trigger
    _init(config?: Trigger.ConstructorProperties): void
}

export module Value {

    // Constructor properties interface

    export interface ConstructorProperties extends Object.ConstructorProperties {
    }

}

export interface Value {

    // Own properties of ICalGLib-3.0.ICalGLib.Value

    __gtype__: number

    // Owm methods of ICalGLib-3.0.ICalGLib.Value

    /**
     * Converts the #ICalValue to a string.
     * @returns The string representation.
     */
    asIcalString(): string | null
    /**
     * Deeply clone a #ICalValue.
     * @returns The newly created #ICalValue with the same property as @value.
     */
    clone(): Value
    /**
     * Compares two #ICalValue.
     * @param b A #ICalValue
     * @returns The compare result.
     */
    compare(b: Value): ParameterXliccomparetype
    /**
     * Gets the action of #ICalValue.
     * @returns The action within #ICalValue
     */
    getAction(): PropertyAction
    /**
     * Gets the attach of #ICalValue.
     * @returns The attach within #ICalValue
     */
    getAttach(): Attach | null
    /**
     * Gets the binary of #ICalValue.
     * @returns The binary within #ICalValue
     */
    getBinary(): string | null
    /**
     * Gets the boolean of #ICalValue.
     * @returns The boolean within #ICalValue
     */
    getBoolean(): number
    /**
     * Gets the busytype of #ICalValue.
     * @returns The busytype within #ICalValue
     */
    getBusytype(): PropertyBusytype
    /**
     * Gets the caladdress of #ICalValue.
     * @returns The caladdress within #ICalValue
     */
    getCaladdress(): string | null
    /**
     * Gets the carlevel of #ICalValue.
     * @returns The carlevel within #ICalValue
     */
    getCarlevel(): PropertyCarlevel
    /**
     * Gets the class of #ICalValue.
     * @returns The class within #ICalValue
     */
    getClass(): Property_Class
    /**
     * Gets the cmd of #ICalValue.
     * @returns The cmd within #ICalValue
     */
    getCmd(): PropertyCmd
    /**
     * Gets the date of #ICalValue.
     * @returns The date within #ICalValue
     */
    getDate(): Time | null
    /**
     * Gets the datetime of #ICalValue.
     * @returns The datetime within #ICalValue
     */
    getDatetime(): Time | null
    /**
     * Gets the datetimedate (DATE-TIME or DATE) of #ICalValue.
     * @returns The datetimedate within #ICalValue
     */
    getDatetimedate(): Time | null
    /**
     * Gets the datetimeperiod of #ICalValue.
     * @returns The datetimeperiod within #ICalValue
     */
    getDatetimeperiod(): Datetimeperiod | null
    /**
     * Gets the duration of #ICalValue.
     * @returns The duration within #ICalValue
     */
    getDuration(): Duration | null
    /**
     * Gets the float of #ICalValue.
     * @returns The float within #ICalValue
     */
    getFloat(): number
    /**
     * Gets the geo of #ICalValue.
     * @returns The geo within #ICalValue
     */
    getGeo(): Geo | null
    /**
     * Gets the integer of #ICalValue.
     * @returns The integer within #ICalValue
     */
    getInteger(): number
    /**
     * Gets the method of #ICalValue.
     * @returns The method within #ICalValue
     */
    getMethod(): PropertyMethod
    /**
     * Gets the parent #ICalProperty of the specified #ICalValue.
     * @returns The parent #ICalProperty
     */
    getParent(): Property | null
    /**
     * Gets the period of #ICalValue.
     * @returns The period within #ICalValue
     */
    getPeriod(): Period | null
    /**
     * Gets the pollcompletion of #ICalValue.
     * @returns The pollcompletion within #ICalValue
     */
    getPollcompletion(): PropertyPollcompletion
    /**
     * Gets the pollmode of #ICalValue.
     * @returns The pollmode within #ICalValue
     */
    getPollmode(): PropertyPollmode
    /**
     * Gets the query of #ICalValue.
     * @returns The query within #ICalValue
     */
    getQuery(): string | null
    /**
     * Gets the querylevel of #ICalValue.
     * @returns The querylevel within #ICalValue
     */
    getQuerylevel(): PropertyQuerylevel
    /**
     * Gets the recur of #ICalValue.
     * @returns The recur within #ICalValue
     */
    getRecur(): Recurrence | null
    /**
     * Gets the requeststatus of #ICalValue.
     * @returns The requeststatus within #ICalValue
     */
    getRequeststatus(): Reqstat | null
    /**
     * Gets the status of #ICalValue.
     * @returns The status within #ICalValue
     */
    getStatus(): PropertyStatus
    /**
     * Gets the string of #ICalValue.
     * @returns The string within #ICalValue
     */
    getString(): string | null
    /**
     * Gets the taskmode of #ICalValue.
     * @returns The taskmode within #ICalValue
     */
    getTaskmode(): PropertyTaskmode
    /**
     * Gets the text of #ICalValue.
     * @returns The text within #ICalValue
     */
    getText(): string | null
    /**
     * Gets the transp of #ICalValue.
     * @returns The transp within #ICalValue
     */
    getTransp(): PropertyTransp
    /**
     * Gets the trigger of #ICalValue.
     * @returns The trigger within #ICalValue
     */
    getTrigger(): Trigger | null
    /**
     * Gets the uri of #ICalValue.
     * @returns The uri within #ICalValue
     */
    getUri(): string | null
    /**
     * Gets the utcoffset of #ICalValue.
     * @returns The utcoffset within #ICalValue
     */
    getUtcoffset(): number
    /**
     * Gets the x of #ICalValue.
     * @returns The x within #ICalValue
     */
    getX(): string | null
    /**
     * Gets the xlicclass of #ICalValue.
     * @returns The xlicclass within #ICalValue
     */
    getXlicclass(): PropertyXlicclass
    /**
     * Checks if #ICalValue is valid.
     * @returns 1 if valid, 0 if not.
     */
    isValid(): boolean
    /**
     * Gets the kind of #ICalValue.
     * @returns The kind of @value.
     */
    isa(): ValueKind
    /**
     * Checks whether the native part of #ICalValue is an icalvalue.
     * @returns 1 if yes, 0 if not.
     */
    isaValue(): number
    /**
     * Resets the kind of #ICalValue.
     */
    resetKind(): void
    /**
     * Sets the action in the #ICalValue.
     * @param v The action value
     */
    setAction(v: PropertyAction): void
    /**
     * Sets the attach in the #ICalValue.
     * @param v The attach value
     */
    setAttach(v: Attach): void
    /**
     * Sets the binary in the #ICalValue.
     * @param v The binary value
     */
    setBinary(v: string | null): void
    /**
     * Sets the boolean in the #ICalValue.
     * @param v The boolean value
     */
    setBoolean(v: number): void
    /**
     * Sets the busytype in the #ICalValue.
     * @param v The busytype value
     */
    setBusytype(v: PropertyBusytype): void
    /**
     * Sets the caladdress in the #ICalValue.
     * @param v The caladdress value
     */
    setCaladdress(v: string | null): void
    /**
     * Sets the carlevel in the #ICalValue.
     * @param v The carlevel value
     */
    setCarlevel(v: PropertyCarlevel): void
    /**
     * Sets the class in the #ICalValue.
     * @param v The class value
     */
    setClass(v: Property_Class): void
    /**
     * Sets the cmd in the #ICalValue.
     * @param v The cmd value
     */
    setCmd(v: PropertyCmd): void
    /**
     * Sets the date in the #ICalValue.
     * @param v The date value
     */
    setDate(v: Time): void
    /**
     * Sets the datetime in the #ICalValue.
     * @param v The datetime value
     */
    setDatetime(v: Time): void
    /**
     * Sets the datetimedate (DATE-TIME or DATE) in the #ICalValue.
     * @param v The datetimedate (DATE-TIME or DATE) value
     */
    setDatetimedate(v: Time): void
    /**
     * Sets the datetimeperiod in the #ICalValue.
     * @param v The datetimeperiod value
     */
    setDatetimeperiod(v: Datetimeperiod): void
    /**
     * Sets the duration in the #ICalValue.
     * @param v The duration value
     */
    setDuration(v: Duration): void
    /**
     * Sets the float in the #ICalValue.
     * @param v The float value
     */
    setFloat(v: number): void
    /**
     * Sets the geo in the #ICalValue.
     * @param v The geo value
     */
    setGeo(v: Geo): void
    /**
     * Sets the integer in the #ICalValue.
     * @param v The integer value
     */
    setInteger(v: number): void
    /**
     * Sets the method in the #ICalValue.
     * @param v The method value
     */
    setMethod(v: PropertyMethod): void
    /**
     * Sets the parent property of a value.
     * @param property The parent #ICalProperty
     */
    setParent(property: Property | null): void
    /**
     * Sets the period in the #ICalValue.
     * @param v The period value
     */
    setPeriod(v: Period): void
    /**
     * Sets the pollcompletion in the #ICalValue.
     * @param v The pollcompletion value
     */
    setPollcompletion(v: PropertyPollcompletion): void
    /**
     * Sets the pollmode in the #ICalValue.
     * @param v The pollmode value
     */
    setPollmode(v: PropertyPollmode): void
    /**
     * Sets the query in the #ICalValue.
     * @param v The query value
     */
    setQuery(v: string | null): void
    /**
     * Sets the querylevel in the #ICalValue.
     * @param v The querylevel value
     */
    setQuerylevel(v: PropertyQuerylevel): void
    /**
     * Sets the recur in the #ICalValue.
     * @param v The recur value
     */
    setRecur(v: Recurrence): void
    /**
     * Sets the requeststatus in the #ICalValue.
     * @param v The requeststatus value
     */
    setRequeststatus(v: Reqstat): void
    /**
     * Sets the status in the #ICalValue.
     * @param v The status value
     */
    setStatus(v: PropertyStatus): void
    /**
     * Sets the string in the #ICalValue.
     * @param v The string value
     */
    setString(v: string | null): void
    /**
     * Sets the taskmode in the #ICalValue.
     * @param v The taskmode value
     */
    setTaskmode(v: PropertyTaskmode): void
    /**
     * Sets the text in the #ICalValue.
     * @param v The text value
     */
    setText(v: string | null): void
    /**
     * Sets the transp in the #ICalValue.
     * @param v The transp value
     */
    setTransp(v: PropertyTransp): void
    /**
     * Sets the trigger in the #ICalValue.
     * @param v The trigger value
     */
    setTrigger(v: Trigger): void
    /**
     * Sets the uri in the #ICalValue.
     * @param v The uri value
     */
    setUri(v: string | null): void
    /**
     * Sets the utcoffset in the #ICalValue.
     * @param v The utcoffset value
     */
    setUtcoffset(v: number): void
    /**
     * Sets the x in the #ICalValue.
     * @param v The x value
     */
    setX(v: string | null): void
    /**
     * Sets the xlicclass in the #ICalValue.
     * @param v The xlicclass value
     */
    setXlicclass(v: PropertyXlicclass): void

    // Class property signals of ICalGLib-3.0.ICalGLib.Value

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: "notify::always-destroy", callback: (...args: any[]) => void): number
    on(sigName: "notify::always-destroy", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::always-destroy", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::always-destroy", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::always-destroy", ...args: any[]): void
    connect(sigName: "notify::is-global-memory", callback: (...args: any[]) => void): number
    on(sigName: "notify::is-global-memory", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::is-global-memory", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::is-global-memory", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::is-global-memory", ...args: any[]): void
    connect(sigName: "notify::native", callback: (...args: any[]) => void): number
    on(sigName: "notify::native", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::native", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::native", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::native", ...args: any[]): void
    connect(sigName: "notify::native-destroy-func", callback: (...args: any[]) => void): number
    on(sigName: "notify::native-destroy-func", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::native-destroy-func", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::native-destroy-func", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::native-destroy-func", ...args: any[]): void
    connect(sigName: "notify::owner", callback: (...args: any[]) => void): number
    on(sigName: "notify::owner", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::owner", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::owner", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::owner", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

/**
 * This is the ICalValue instance.
 * @class 
 */
export class Value extends Object {

    // Own properties of ICalGLib-3.0.ICalGLib.Value

    static name: string

    // Constructors of ICalGLib-3.0.ICalGLib.Value

    constructor(config?: Value.ConstructorProperties) 
    /**
     * Creates a new #ICalValue with specific kind.
     * @constructor 
     * @param kind A #ICalValueKind
     * @returns The newly created #ICalValue.
     */
    constructor(kind: ValueKind) 
    /**
     * Creates a new #ICalValue with specific kind.
     * @constructor 
     * @param kind A #ICalValueKind
     * @returns The newly created #ICalValue.
     */
    static new(kind: ValueKind): Value
    /**
     * Creates a new #ICalValue with the type action.
     * @constructor 
     * @param v The action value
     * @returns The newly created #ICalValue.
     */
    static newAction(v: PropertyAction): Value
    /**
     * Creates a new #ICalValue with the type attach.
     * @constructor 
     * @param v The attach value
     * @returns The newly created #ICalValue.
     */
    static newAttach(v: Attach): Value
    /**
     * Creates a new #ICalValue with the type binary.
     * @constructor 
     * @param v The binary value
     * @returns The newly created #ICalValue.
     */
    static newBinary(v: string | null): Value
    /**
     * Creates a new #ICalValue with the type boolean.
     * @constructor 
     * @param v The boolean value
     * @returns The newly created #ICalValue.
     */
    static newBoolean(v: number): Value
    /**
     * Creates a new #ICalValue with the type busytype.
     * @constructor 
     * @param v The busytype value
     * @returns The newly created #ICalValue.
     */
    static newBusytype(v: PropertyBusytype): Value
    /**
     * Creates a new #ICalValue with the type caladdress.
     * @constructor 
     * @param v The caladdress value
     * @returns The newly created #ICalValue.
     */
    static newCaladdress(v: string | null): Value
    /**
     * Creates a new #ICalValue with the type carlevel.
     * @constructor 
     * @param v The carlevel value
     * @returns The newly created #ICalValue.
     */
    static newCarlevel(v: PropertyCarlevel): Value
    /**
     * Creates a new #ICalValue with the type class.
     * @constructor 
     * @param v The class value
     * @returns The newly created #ICalValue.
     */
    static newClass(v: Property_Class): Value
    /**
     * Creates a new #ICalValue with the type cmd.
     * @constructor 
     * @param v The cmd value
     * @returns The newly created #ICalValue.
     */
    static newCmd(v: PropertyCmd): Value
    /**
     * Creates a new #ICalValue with the type date.
     * @constructor 
     * @param v The date value
     * @returns The newly created #ICalValue.
     */
    static newDate(v: Time): Value
    /**
     * Creates a new #ICalValue with the type datetime.
     * @constructor 
     * @param v The datetime value
     * @returns The newly created #ICalValue.
     */
    static newDatetime(v: Time): Value
    /**
     * Creates a new #ICalValue with the type datetimedate (DATE-TIME or DATE).
     * @constructor 
     * @param v The DATE-TIME or DATE value
     * @returns The newly created #ICalValue.
     */
    static newDatetimedate(v: Time): Value
    /**
     * Creates a new #ICalValue with the type datetimeperiod.
     * @constructor 
     * @param v The datetimeperiod value
     * @returns The newly created #ICalValue.
     */
    static newDatetimeperiod(v: Datetimeperiod): Value
    /**
     * Creates a new #ICalValue with the type duration.
     * @constructor 
     * @param v The duration value
     * @returns The newly created #ICalValue.
     */
    static newDuration(v: Duration): Value
    /**
     * Creates a new #ICalValue with the type float.
     * @constructor 
     * @param v The float value
     * @returns The newly created #ICalValue.
     */
    static newFloat(v: number): Value
    /**
     * Creates a new #ICalValue based on the #ICalValueKind and a string.
     * @constructor 
     * @param kind A #ICalValueKind
     * @param str A string
     * @returns The newly created #ICalValue based on the @kind and @str.
     */
    static newFromString(kind: ValueKind, str: string | null): Value
    /**
     * Creates a new #ICalValue with the type geo.
     * @constructor 
     * @param v The geo value
     * @returns The newly created #ICalValue.
     */
    static newGeo(v: Geo): Value
    /**
     * Creates a new #ICalValue with the type integer.
     * @constructor 
     * @param v The integer value
     * @returns The newly created #ICalValue.
     */
    static newInteger(v: number): Value
    /**
     * Creates a new #ICalValue with the type method.
     * @constructor 
     * @param v The method value
     * @returns The newly created #ICalValue.
     */
    static newMethod(v: PropertyMethod): Value
    /**
     * Creates a new #ICalValue with the type period.
     * @constructor 
     * @param v The period value
     * @returns The newly created #ICalValue.
     */
    static newPeriod(v: Period): Value
    /**
     * Creates a new #ICalValue with the type pollcompletion.
     * @constructor 
     * @param v The pollcompletion value
     * @returns The newly created #ICalValue.
     */
    static newPollcompletion(v: PropertyPollcompletion): Value
    /**
     * Creates a new #ICalValue with the type pollmode.
     * @constructor 
     * @param v The pollmode value
     * @returns The newly created #ICalValue.
     */
    static newPollmode(v: PropertyPollmode): Value
    /**
     * Creates a new #ICalValue with the type query.
     * @constructor 
     * @param v The query value
     * @returns The newly created #ICalValue.
     */
    static newQuery(v: string | null): Value
    /**
     * Creates a new #ICalValue with the type querylevel.
     * @constructor 
     * @param v The querylevel value
     * @returns The newly created #ICalValue.
     */
    static newQuerylevel(v: PropertyQuerylevel): Value
    /**
     * Creates a new #ICalValue with the type recur.
     * @constructor 
     * @param v The recur value
     * @returns The newly created #ICalValue.
     */
    static newRecur(v: Recurrence): Value
    /**
     * Creates a new #ICalValue with the type requeststatus.
     * @constructor 
     * @param v The requeststatus value
     * @returns The newly created #ICalValue.
     */
    static newRequeststatus(v: Reqstat): Value
    /**
     * Creates a new #ICalValue with the type status.
     * @constructor 
     * @param v The status value
     * @returns The newly created #ICalValue.
     */
    static newStatus(v: PropertyStatus): Value
    /**
     * Creates a new #ICalValue with the type string.
     * @constructor 
     * @param v The string value
     * @returns The newly created #ICalValue.
     */
    static newString(v: string | null): Value
    /**
     * Creates a new #ICalValue with the type taskmode.
     * @constructor 
     * @param v The taskmode value
     * @returns The newly created #ICalValue.
     */
    static newTaskmode(v: PropertyTaskmode): Value
    /**
     * Creates a new #ICalValue with the type text.
     * @constructor 
     * @param v The text value
     * @returns The newly created #ICalValue.
     */
    static newText(v: string | null): Value
    /**
     * Creates a new #ICalValue with the type transp.
     * @constructor 
     * @param v The transp value
     * @returns The newly created #ICalValue.
     */
    static newTransp(v: PropertyTransp): Value
    /**
     * Creates a new #ICalValue with the type trigger.
     * @constructor 
     * @param v The trigger value
     * @returns The newly created #ICalValue.
     */
    static newTrigger(v: Trigger): Value
    /**
     * Creates a new #ICalValue with the type uri.
     * @constructor 
     * @param v The uri value
     * @returns The newly created #ICalValue.
     */
    static newUri(v: string | null): Value
    /**
     * Creates a new #ICalValue with the type utcoffset.
     * @constructor 
     * @param v The utcoffset value
     * @returns The newly created #ICalValue.
     */
    static newUtcoffset(v: number): Value
    /**
     * Creates a new #ICalValue with the type x.
     * @constructor 
     * @param v The x value
     * @returns The newly created #ICalValue.
     */
    static newX(v: string | null): Value
    /**
     * Creates a new #ICalValue with the type xlicclass.
     * @constructor 
     * @param v The xlicclass value
     * @returns The newly created #ICalValue.
     */
    static newXlicclass(v: PropertyXlicclass): Value
    _init(config?: Value.ConstructorProperties): void
    /**
     * Extracts the original character string encoded by the above function.
     * @param szText A string
     * @returns The decoded string. NULL if fail.
     */
    static decodeIcalString(szText: string | null): string | null
    /**
     * Encodes a character string in ical format, escape certain characters, etc.
     * @param szText A string
     * @returns The encoded string. NULL if fail.
     */
    static encodeIcalString(szText: string | null): string | null
    /**
     * Converts a string to #ICalValueKind.
     * @param str A string
     * @returns A #ICalValueKind.
     */
    static kindFromString(str: string | null): ValueKind
    /**
     * Checks whether the #ICalValueKind is valid.
     * @param kind The #ICalValueKind to be checked
     * @returns 1 if yes, 0 if not.
     */
    static kindIsValid(kind: ValueKind): boolean
    /**
     * Converts a #ICalValueKind to a #ICalPropertyKind.
     * @param kind A #ICalValueKind
     * @returns The #ICalPropertyKind.
     */
    static kindToPropertyKind(kind: ValueKind): PropertyKind
    /**
     * Converts the #ICalValueKind to a string.
     * @param kind A #ICalValueKind
     * @returns The string representation of #ICalValueKind.
     */
    static kindToString(kind: ValueKind): string | null
}

export interface ArrayClass {
}

/**
 * This is the ICalArray class.
 * @record 
 */
export abstract class ArrayClass {

    // Own properties of ICalGLib-3.0.ICalGLib.ArrayClass

    static name: string
}

export interface AttachClass {
}

/**
 * This is the ICalAttach class.
 * @record 
 */
export abstract class AttachClass {

    // Own properties of ICalGLib-3.0.ICalGLib.AttachClass

    static name: string
}

export interface CompIterClass {
}

/**
 * This is the ICalCompIter class.
 * @record 
 */
export abstract class CompIterClass {

    // Own properties of ICalGLib-3.0.ICalGLib.CompIterClass

    static name: string
}

export interface ComponentClass {
}

/**
 * This is the ICalComponent class.
 * @record 
 */
export abstract class ComponentClass {

    // Own properties of ICalGLib-3.0.ICalGLib.ComponentClass

    static name: string
}

export interface DatetimeperiodClass {
}

/**
 * This is the ICalDatetimeperiod class.
 * @record 
 */
export abstract class DatetimeperiodClass {

    // Own properties of ICalGLib-3.0.ICalGLib.DatetimeperiodClass

    static name: string
}

export interface DurationClass {
}

/**
 * This is the ICalDuration class.
 * @record 
 */
export abstract class DurationClass {

    // Own properties of ICalGLib-3.0.ICalGLib.DurationClass

    static name: string
}

export interface GeoClass {
}

/**
 * This is the ICalGeo class.
 * @record 
 */
export abstract class GeoClass {

    // Own properties of ICalGLib-3.0.ICalGLib.GeoClass

    static name: string
}

export interface ObjectClass {
}

/**
 * This is an ICalObject class struct.
 * @record 
 */
export abstract class ObjectClass {

    // Own properties of ICalGLib-3.0.ICalGLib.ObjectClass

    static name: string
}

export interface ObjectPrivate {
}

export class ObjectPrivate {

    // Own properties of ICalGLib-3.0.ICalGLib.ObjectPrivate

    static name: string
}

export interface ParameterClass {
}

/**
 * This is the ICalParameter class.
 * @record 
 */
export abstract class ParameterClass {

    // Own properties of ICalGLib-3.0.ICalGLib.ParameterClass

    static name: string
}

export interface ParserClass {
}

/**
 * This is the ICalParser class.
 * @record 
 */
export abstract class ParserClass {

    // Own properties of ICalGLib-3.0.ICalGLib.ParserClass

    static name: string
}

export interface PeriodClass {
}

/**
 * This is the ICalPeriod class.
 * @record 
 */
export abstract class PeriodClass {

    // Own properties of ICalGLib-3.0.ICalGLib.PeriodClass

    static name: string
}

export interface PropertyClass {
}

/**
 * This is the ICalProperty class.
 * @record 
 */
export abstract class PropertyClass {

    // Own properties of ICalGLib-3.0.ICalGLib.PropertyClass

    static name: string
}

export interface RecurIteratorClass {
}

/**
 * This is the ICalRecurIterator class.
 * @record 
 */
export abstract class RecurIteratorClass {

    // Own properties of ICalGLib-3.0.ICalGLib.RecurIteratorClass

    static name: string
}

export interface RecurrenceClass {
}

/**
 * This is the ICalRecurrence class.
 * @record 
 */
export abstract class RecurrenceClass {

    // Own properties of ICalGLib-3.0.ICalGLib.RecurrenceClass

    static name: string
}

export interface ReqstatClass {
}

/**
 * This is the ICalReqstat class.
 * @record 
 */
export abstract class ReqstatClass {

    // Own properties of ICalGLib-3.0.ICalGLib.ReqstatClass

    static name: string
}

export interface TimeClass {
}

/**
 * This is the ICalTime class.
 * @record 
 */
export abstract class TimeClass {

    // Own properties of ICalGLib-3.0.ICalGLib.TimeClass

    static name: string
}

export interface TimeSpanClass {
}

/**
 * This is the ICalTimeSpan class.
 * @record 
 */
export abstract class TimeSpanClass {

    // Own properties of ICalGLib-3.0.ICalGLib.TimeSpanClass

    static name: string
}

export interface TimezoneClass {
}

/**
 * This is the ICalTimezone class.
 * @record 
 */
export abstract class TimezoneClass {

    // Own properties of ICalGLib-3.0.ICalGLib.TimezoneClass

    static name: string
}

export interface TriggerClass {
}

/**
 * This is the ICalTrigger class.
 * @record 
 */
export abstract class TriggerClass {

    // Own properties of ICalGLib-3.0.ICalGLib.TriggerClass

    static name: string
}

export interface ValueClass {
}

/**
 * This is the ICalValue class.
 * @record 
 */
export abstract class ValueClass {

    // Own properties of ICalGLib-3.0.ICalGLib.ValueClass

    static name: string
}

export interface _Array {
}

export class _Array {

    // Own properties of ICalGLib-3.0.ICalGLib._Array

    static name: string
}

export interface _Attach {
}

export class _Attach {

    // Own properties of ICalGLib-3.0.ICalGLib._Attach

    static name: string
}

export interface _CompIter {
}

export class _CompIter {

    // Own properties of ICalGLib-3.0.ICalGLib._CompIter

    static name: string
}

export interface _Component {
}

export class _Component {

    // Own properties of ICalGLib-3.0.ICalGLib._Component

    static name: string
}

export interface _Datetimeperiod {
}

export class _Datetimeperiod {

    // Own properties of ICalGLib-3.0.ICalGLib._Datetimeperiod

    static name: string
}

export interface _Duration {
}

export class _Duration {

    // Own properties of ICalGLib-3.0.ICalGLib._Duration

    static name: string
}

export interface _Geo {
}

export class _Geo {

    // Own properties of ICalGLib-3.0.ICalGLib._Geo

    static name: string
}

export interface _Parameter {
}

export class _Parameter {

    // Own properties of ICalGLib-3.0.ICalGLib._Parameter

    static name: string
}

export interface _Parser {
}

export class _Parser {

    // Own properties of ICalGLib-3.0.ICalGLib._Parser

    static name: string
}

export interface _Period {
}

export class _Period {

    // Own properties of ICalGLib-3.0.ICalGLib._Period

    static name: string
}

export interface _Property {
}

export class _Property {

    // Own properties of ICalGLib-3.0.ICalGLib._Property

    static name: string
}

export interface _RecurIterator {
}

export class _RecurIterator {

    // Own properties of ICalGLib-3.0.ICalGLib._RecurIterator

    static name: string
}

export interface _Recurrence {
}

export class _Recurrence {

    // Own properties of ICalGLib-3.0.ICalGLib._Recurrence

    static name: string
}

export interface _Reqstat {
}

export class _Reqstat {

    // Own properties of ICalGLib-3.0.ICalGLib._Reqstat

    static name: string
}

export interface _Time {
}

export class _Time {

    // Own properties of ICalGLib-3.0.ICalGLib._Time

    static name: string
}

export interface _TimeSpan {
}

export class _TimeSpan {

    // Own properties of ICalGLib-3.0.ICalGLib._TimeSpan

    static name: string
}

export interface _Timezone {
}

export class _Timezone {

    // Own properties of ICalGLib-3.0.ICalGLib._Timezone

    static name: string
}

export interface _Trigger {
}

export class _Trigger {

    // Own properties of ICalGLib-3.0.ICalGLib._Trigger

    static name: string
}

export interface _Value {
}

export class _Value {

    // Own properties of ICalGLib-3.0.ICalGLib._Value

    static name: string
}
