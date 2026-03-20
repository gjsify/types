/**
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in `ts-for-gir` or create a bug report on https://github.com/gjsify/ts-for-gir
 *
 * The based EJS template file is used for the generated .d.ts file of each GIR module like Gtk-4.0, GObject-2.0, ...
 */

import '@girs/gjs';

// Module dependencies
import type GObject from '@girs/gobject-2.0';
import type GLib from '@girs/glib-2.0';

export namespace ICalGLib {
    /**
     * ICalGLib-3.0
     */

    /**
     * @gir-type Enum
     */
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

    /**
     * @gir-type Enum
     */
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

    /**
     * @gir-type Enum
     */
    enum ErrorState {
        FATAL,
        NONFATAL,
        DEFAULT,
        UNKNOWN,
    }

    /**
     * @gir-type Enum
     */
    enum ParameterAction {
        X,
        ASK,
        ABORT,
        NONE,
    }

    /**
     * @gir-type Enum
     */
    enum ParameterCutype {
        X,
        INDIVIDUAL,
        GROUP,
        RESOURCE,
        ROOM,
        UNKNOWN,
        NONE,
    }

    /**
     * @gir-type Enum
     */
    enum ParameterDisplay {
        X,
        BADGE,
        GRAPHIC,
        FULLSIZE,
        THUMBNAIL,
        NONE,
    }

    /**
     * @gir-type Enum
     */
    enum ParameterEnable {
        X,
        TRUE,
        FALSE,
        NONE,
    }

    /**
     * @gir-type Enum
     */
    enum ParameterEncoding {
        X,
        '8BIT',
        BASE64,
        NONE,
    }

    /**
     * @gir-type Enum
     */
    enum ParameterFbtype {
        X,
        FREE,
        BUSY,
        BUSYUNAVAILABLE,
        BUSYTENTATIVE,
        NONE,
    }

    /**
     * @gir-type Enum
     */
    enum ParameterFeature {
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

    /**
     * @gir-type Enum
     */
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

    /**
     * @gir-type Enum
     */
    enum ParameterLocal {
        X,
        TRUE,
        FALSE,
        NONE,
    }

    /**
     * @gir-type Enum
     */
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

    /**
     * @gir-type Enum
     */
    enum ParameterPatchaction {
        X,
        CREATE,
        BYNAME,
        BYVALUE,
        BYPARAM,
        NONE,
    }

    /**
     * @gir-type Enum
     */
    enum ParameterRange {
        X,
        THISANDPRIOR,
        THISANDFUTURE,
        NONE,
    }

    /**
     * @gir-type Enum
     */
    enum ParameterRelated {
        X,
        START,
        END,
        NONE,
    }

    /**
     * @gir-type Enum
     */
    enum ParameterReltype {
        X,
        PARENT,
        CHILD,
        SIBLING,
        POLL,
        NONE,
    }

    /**
     * @gir-type Enum
     */
    enum ParameterRequired {
        X,
        TRUE,
        FALSE,
        NONE,
    }

    /**
     * @gir-type Enum
     */
    enum ParameterRole {
        X,
        CHAIR,
        REQPARTICIPANT,
        OPTPARTICIPANT,
        NONPARTICIPANT,
        NONE,
    }

    /**
     * @gir-type Enum
     */
    enum ParameterRsvp {
        X,
        TRUE,
        FALSE,
        NONE,
    }

    /**
     * @gir-type Enum
     */
    enum ParameterScheduleagent {
        X,
        SERVER,
        CLIENT,
        NONE,
    }

    /**
     * @gir-type Enum
     */
    enum ParameterScheduleforcesend {
        X,
        REQUEST,
        REPLY,
        NONE,
    }

    /**
     * @gir-type Enum
     */
    enum ParameterStayinformed {
        X,
        TRUE,
        FALSE,
        NONE,
    }

    /**
     * @gir-type Enum
     */
    enum ParameterSubstate {
        X,
        OK,
        ERROR,
        SUSPENDED,
        NONE,
    }

    /**
     * @gir-type Enum
     */
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

    /**
     * @gir-type Enum
     */
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

    /**
     * @gir-type Enum
     */
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

    /**
     * @gir-type Enum
     */
    enum ParserState {
        ERROR,
        SUCCESS,
        BEGIN_COMP,
        END_COMP,
        IN_PROGRESS,
    }

    /**
     * @gir-type Enum
     */
    enum PropertyAction {
        X,
        AUDIO,
        DISPLAY,
        EMAIL,
        PROCEDURE,
        NONE,
    }

    /**
     * @gir-type Enum
     */
    enum PropertyBusytype {
        X,
        BUSY,
        BUSYUNAVAILABLE,
        BUSYTENTATIVE,
        NONE,
    }

    /**
     * @gir-type Enum
     */
    enum PropertyCarlevel {
        X,
        CARNONE,
        CARMIN,
        CARFULL1,
        NONE,
    }

    /**
     * @gir-type Enum
     */
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

    /**
     * @gir-type Enum
     */
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

    /**
     * @gir-type Enum
     */
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

    /**
     * @gir-type Enum
     */
    enum PropertyPollcompletion {
        X,
        SERVER,
        SERVERSUBMIT,
        SERVERCHOICE,
        CLIENT,
        NONE,
    }

    /**
     * @gir-type Enum
     */
    enum PropertyPollmode {
        X,
        BASIC,
        NONE,
    }

    /**
     * @gir-type Enum
     */
    enum PropertyQuerylevel {
        X,
        CALQL1,
        CALQLNONE,
        NONE,
    }

    /**
     * @gir-type Enum
     */
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

    /**
     * @gir-type Enum
     */
    enum PropertyTaskmode {
        X,
        AUTOMATICCOMPLETION,
        AUTOMATICFAILURE,
        AUTOMATICSTATUS,
        NONE,
    }

    /**
     * @gir-type Enum
     */
    enum PropertyTransp {
        X,
        OPAQUE,
        OPAQUENOCONFLICT,
        TRANSPARENT,
        TRANSPARENTNOCONFLICT,
        NONE,
    }

    /**
     * @gir-type Enum
     */
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

    /**
     * @gir-type Enum
     */
    enum Property_Class {
        X,
        PUBLIC,
        PRIVATE,
        CONFIDENTIAL,
        NONE,
    }

    /**
     * @gir-type Enum
     */
    enum RecurrenceArrayMaxValues {
        RECURRENCE_ARRAY_MAX,
    }

    /**
     * @gir-type Enum
     */
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

    /**
     * @gir-type Enum
     */
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

    /**
     * @gir-type Enum
     */
    enum RecurrenceSkip {
        BACKWARD,
        FORWARD,
        OMIT,
        UNDEFINED,
    }

    /**
     * @gir-type Enum
     */
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

    /**
     * @gir-type Enum
     */
    enum RequestStatus {
        UNKNOWN_STATUS,
        '2_0_SUCCESS_STATUS',
        '2_1_FALLBACK_STATUS',
        '2_2_IGPROP_STATUS',
        '2_3_IGPARAM_STATUS',
        '2_4_IGXPROP_STATUS',
        '2_5_IGXPARAM_STATUS',
        '2_6_IGCOMP_STATUS',
        '2_7_FORWARD_STATUS',
        '2_8_ONEEVENT_STATUS',
        '2_9_TRUNC_STATUS',
        '2_10_ONETODO_STATUS',
        '2_11_TRUNCRRULE_STATUS',
        '3_0_INVPROPNAME_STATUS',
        '3_1_INVPROPVAL_STATUS',
        '3_2_INVPARAM_STATUS',
        '3_3_INVPARAMVAL_STATUS',
        '3_4_INVCOMP_STATUS',
        '3_5_INVTIME_STATUS',
        '3_6_INVRULE_STATUS',
        '3_7_INVCU_STATUS',
        '3_8_NOAUTH_STATUS',
        '3_9_BADVERSION_STATUS',
        '3_10_TOOBIG_STATUS',
        '3_11_MISSREQCOMP_STATUS',
        '3_12_UNKCOMP_STATUS',
        '3_13_BADCOMP_STATUS',
        '3_14_NOCAP_STATUS',
        '3_15_INVCOMMAND',
        '4_0_BUSY_STATUS',
        '4_1_STORE_ACCESS_DENIED',
        '4_2_STORE_FAILED',
        '4_3_STORE_NOT_FOUND',
        '5_0_MAYBE_STATUS',
        '5_1_UNAVAIL_STATUS',
        '5_2_NOSERVICE_STATUS',
        '5_3_NOSCHED_STATUS',
        '6_1_CONTAINER_NOT_FOUND',
        '9_0_UNRECOGNIZED_COMMAND',
    }

    /**
     * @gir-type Enum
     */
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

    /**
     * @gir-type Enum
     */
    enum Unknowntokenhandling {
        ASSUME_IANA_TOKEN,
        DISCARD_TOKEN,
        TREAT_AS_ERROR,
    }

    /**
     * @gir-type Enum
     */
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

    /**
     * @since 1.0
     */
    function bt(): void;
    /**
     * Returns the error stored in the library. If no error, return I_CAL_NO_ERROR.
     * @returns Return the error happened
     * @since 1.0
     */
    function errno_return(): ErrorEnum;
    /**
     * @since 1.0
     */
    function error_clear_errno(): void;
    /**
     * Shout out the errors to the compiler.
     * @since 1.0
     */
    function error_crash_here(): void;
    /**
     * Gets the state of an error.
     * @param error The error to be checked
     * @returns The state of the `error`
     * @since 1.0
     */
    function error_get_error_state(error: ErrorEnum | null): ErrorState;
    /**
     * Gets the {@link ICalGLib.ErrorEnum} in the string representation. This method called the icalerrorno_return to get
     * the current error.
     * @returns The string representation of the current error
     * @since 1.0
     */
    function error_perror(): string;
    /**
     * Restores the error to specified state.
     * @param error The error to be restored
     * @param es The error state to be restored
     * @since 1.0
     */
    function error_restore(error: string, es: ErrorState | null): void;
    /**
     * Sets the errno.
     * @param x The error to be set
     * @since 1.0
     */
    function error_set_errno(x: ErrorEnum | null): void;
    /**
     * Sets the state to the corresponding error in the library.
     * @param error The error enum
     * @param state The error state
     * @since 1.0
     */
    function error_set_error_state(error: ErrorEnum | null, state: ErrorState | null): void;
    /**
     * @since 1.0
     */
    function error_stop_here(): void;
    /**
     * Translates the {@link ICalGLib.ErrorEnum} to the string representation.
     * @param e The {@link ICalGLib.ErrorEnum} to be translated
     * @returns The string representation of `e`
     * @since 1.0
     */
    function error_strerror(e: ErrorEnum | null): string;
    /**
     * Suppresses the error.
     * @param error The error to be suppressed
     * @returns The error state suppressed
     * @since 1.0
     */
    function error_supress(error: string): ErrorState;
    /**
     * Gets the setting of {@link ICalGLib.Unknowntokenhandling}.
     * @returns The setting of {@link ICalGLib.Unknowntokenhandling}
     * @since 1.0
     */
    function get_unknown_token_handling_setting(): Unknowntokenhandling;
    /**
     * Adds an existing buffer to the buffer ring.
     * @param buf The existing buffer to be added into the ical
     * @since 1.0
     */
    function memory_add_tmp_buffer(buf?: any | null): void;
    /**
     * Append the character to the buffer. Only use them on normally allocated memory, or on buffers created
     * from icalmemory_new_buffer, never with buffers created by icalmemory_tmp_buffer. If icalmemory_append_string
     * has to resize a buffer on the ring, the ring will loose track of it an you will have memory problems.
     * @param buf The buffer to be appended. It should not be the memory in ical.
     * @param pos The position at which the new string to be appended
     * @param ch The character to be allocated
     * @since 1.0
     */
    function memory_append_char(buf: number[], pos: number[], ch: number): [number[], number[]];
    /**
     * Appends the string to the buffer. Only use them on normally allocated memory, or on buffers created from
     * icalmemory_new_buffer, never with buffers created by icalmemory_tmp_buffer. If icalmemory_append_string
     * has to resize a buffer on the ring, the ring will loose track of it an you will have memory problems.
     * @param buf The buffer to be appended. It should not be the memory in ical.
     * @param pos The position at which the new string to be appended
     * @param str The string to be allocated
     * @since 1.0
     */
    function memory_append_string(buf: number[], pos: number[], str: string): [number[], number[]];
    /**
     * Frees the buffer.
     * @param buf The buffer to be freed
     * @since 1.0
     */
    function memory_free_buffer(buf?: any | null): void;
    /**
     * Creates a new buffer with target size. The caller should deallocate it when necessary.
     * @param size The size of the new buffer to be created
     * @returns The newly created buffer with the target size.
     * @since 1.0
     */
    function memory_new_buffer(size: number): any | null;
    /**
     * Resizes the buffer to the target size.
     * @param buf The buffer needs to be resized
     * @param size The target size the buffer to be resized to
     * @returns The buffer after being resized.
     * @since 1.0
     */
    function memory_resize_buffer(buf: any | null, size: number): any | null;
    /**
     * A wrapper around strdup. Partly to trap calls to strdup, partly because in -ansi, gcc on Red Hat claims
     * that strdup is undeclared.
     * @param s The string to be cloned
     * @returns The cloned string.
     * @since 1.0
     */
    function memory_strdup(s: string): string;
    /**
     * Creates a buffer with target size.
     * @param size The size of the buffer to be created
     * @returns The newly created buffer
     * @since 1.0
     */
    function memory_tmp_buffer(size: number): any | null;
    /**
     * Like strdup, but the buffer is on the ring.
     * @param str The string to be copied
     * @returns The new copy of the `str`.
     * @since 1.0
     */
    function memory_tmp_copy(str: string): string;
    /**
     * Parses data to {@link ICalGLib.Component} using the given function.
     * @param func The parsing function
     * @returns The parsed {@link ICalGLib.Component}
     * @since 1.0
     */
    function mime_parse(func: MimeParseFunc): Component;
    /**
     * Fills an array with the 'count' number of occurrences generated by the rrule. Note that the times are
     * returned in UTC, but the times are calculated in local time. YOu will have to convert the results back
     * into local time before using them.
     * @param rule The rule of the recurrence
     * @param start The start seconds past the POSIX epoch
     * @param count The number of elements to be filled up in the `array`
     * @returns If successful, return the array. NULL if failed.
     * @since 1.0
     */
    function recur_expand_recurrence(rule: string, start: number, count: number): number[];
    /**
     * Returns the code for a request status.
     * @param stat The {@link ICalGLib.RequestStatus} to be queried
     * @returns The code for a request status
     * @since 1.0
     */
    function request_status_code(stat: RequestStatus | null): string;
    /**
     * Returns the descriptive text for a request status.
     * @param stat The {@link ICalGLib.RequestStatus} to be translated
     * @returns The description of the `stat`
     * @since 1.0
     */
    function request_status_desc(stat: RequestStatus | null): string;
    /**
     * Returns a request status for major/minor status numbers.
     * @param major The major number
     * @param minor The minor number
     * @returns The corresponding {@link ICalGLib.RequestStatus}
     * @since 1.0
     */
    function request_status_from_num(major: number, minor: number): RequestStatus;
    /**
     * Returns the major number for a request status.
     * @param stat The {@link ICalGLib.RequestStatus} to be queried
     * @returns The major number for a request status
     * @since 1.0
     */
    function request_status_major(stat: RequestStatus | null): number;
    /**
     * Returns the minor number for a request status.
     * @param stat The {@link ICalGLib.RequestStatus} to be queried
     * @returns The minor number for a request status
     * @since 1.0
     */
    function request_status_minor(stat: RequestStatus | null): number;
    /**
     * Checks whether the {@link ICalGLib.Component} is valid.
     * @param comp The component to be checked
     * @returns Whether the `comp` is valid.
     * @since 1.0
     */
    function restriction_check(comp: Component): number;
    /**
     * Compares the kind of restriction and the count to determine whether it is valid.
     * @param restr The restriction kind
     * @param count The number of restrictions
     * @returns Whether it is valid or not. -1 indicates invalid or more analysis. 1 indicates pass and 0 or 2+ indicates fail.
     * @since 1.0
     */
    function restriction_compare(restr: RestrictionKind | null, count: number): number;
    /**
     * Sets {@link ICalGLib.Unknowntokenhandling}.
     * @param newSetting A {@link ICalGLib.Unknowntokenhandling}
     * @since 1.0
     */
    function set_unknown_token_handling_setting(newSetting: Unknowntokenhandling | null): void;
    /**
     * @gir-type Callback
     */
    interface ComponentForeachRecurrenceFunc {
        (comp: Component, span: TimeSpan): void;
    }
    /**
     * @gir-type Callback
     */
    interface ComponentForeachTZIDFunc {
        (param: Parameter): void;
    }
    /**
     * @gir-type Callback
     */
    interface MimeParseFunc {
        (bytes: number[]): string;
    }
    /**
     * @gir-type Callback
     */
    interface ParserLineGenFunc {
        (bytes: number[]): string;
    }
    namespace Array {
        // Signal signatures
        interface SignalSignatures extends Object.SignalSignatures {
            'notify::always-destroy': (pspec: GObject.ParamSpec) => void;
            'notify::is-global-memory': (pspec: GObject.ParamSpec) => void;
            'notify::native': (pspec: GObject.ParamSpec) => void;
            'notify::native-destroy-func': (pspec: GObject.ParamSpec) => void;
            'notify::owner': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends Object.ConstructorProps {}
    }

    /**
     * This is the ICalArray instance.
     * @gir-type Class
     */
    class Array extends Object {
        static $gtype: GObject.GType<Array>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Array.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<Array.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        /** @signal */
        connect<K extends keyof Array.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Array.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof Array.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Array.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof Array.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Array.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * Creates a deep copy of {@link ICalGLib.Array} with the same properties as the `array`.
         * @returns The newly cloned {@link ICalGLib.Array} with the same value as the `array`
         */
        copy(): Array;
        /**
         * Removes the element at the `position` from the array.
         * @param position The position in which the element will be removed from the array
         */
        remove_element_at(position: number): void;
        /**
         * Gets the size of the array.
         * @returns The size of current array.
         */
        size(): number;
    }

    namespace Attach {
        // Signal signatures
        interface SignalSignatures extends Object.SignalSignatures {
            'notify::always-destroy': (pspec: GObject.ParamSpec) => void;
            'notify::is-global-memory': (pspec: GObject.ParamSpec) => void;
            'notify::native': (pspec: GObject.ParamSpec) => void;
            'notify::native-destroy-func': (pspec: GObject.ParamSpec) => void;
            'notify::owner': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends Object.ConstructorProps {}
    }

    /**
     * This is the ICalAttach instance.
     * @gir-type Class
     */
    class Attach extends Object {
        static $gtype: GObject.GType<Attach>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Attach.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<Attach.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static new_from_bytes(bytes: GLib.Bytes | Uint8Array): Attach;

        static new_from_data(data: string, free_fn?: GLib.Func | null): Attach;

        static new_from_url(url: string): Attach;

        // Signals

        /** @signal */
        connect<K extends keyof Attach.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Attach.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof Attach.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Attach.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof Attach.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Attach.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * Gets the data, if the {@link ICalGLib.Attach} is built from the data.
         * @returns The data component of the `attach`. `null` if it is built from url or there is an error.
         */
        get_data(): string | null;
        /**
         * @param args
         */
        // Conflicted with GObject.Object.get_data
        get_data(...args: never[]): any;
        /**
         * Checks whether the {@link ICalGLib.Attach} is built from url.
         * @returns Whether the `attach` is built from url
         */
        get_is_url(): boolean;
        /**
         * Gets the url, if the {@link ICalGLib.Attach} is built from the url.
         * @returns The url component of the `attach`. `null` if it is built from data or there is an error.
         */
        get_url(): string | null;
    }

    namespace CompIter {
        // Signal signatures
        interface SignalSignatures extends Object.SignalSignatures {
            'notify::always-destroy': (pspec: GObject.ParamSpec) => void;
            'notify::is-global-memory': (pspec: GObject.ParamSpec) => void;
            'notify::native': (pspec: GObject.ParamSpec) => void;
            'notify::native-destroy-func': (pspec: GObject.ParamSpec) => void;
            'notify::owner': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends Object.ConstructorProps {}
    }

    /**
     * This is the ICalCompIter instance.
     * @gir-type Class
     */
    class CompIter extends Object {
        static $gtype: GObject.GType<CompIter>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: CompIter.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<CompIter.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        /** @signal */
        connect<K extends keyof CompIter.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, CompIter.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof CompIter.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, CompIter.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof CompIter.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<CompIter.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * Gets the current {@link ICalGLib.Component} pointed by {@link ICalGLib.CompIter}.
         * @returns A {@link ICalGLib.Component}
         */
        deref(): Component;
        /**
         * Gets the next {@link ICalGLib.Component} pointed by {@link ICalGLib.CompIter}.
         * @returns A {@link ICalGLib.CompIter}
         */
        next(): Component;
        /**
         * Gets the prior {@link ICalGLib.Component} pointed by {@link ICalGLib.CompIter}.
         * @returns A {@link ICalGLib.CompIter}
         */
        prior(): Component;
    }

    namespace Component {
        // Signal signatures
        interface SignalSignatures extends Object.SignalSignatures {
            'notify::always-destroy': (pspec: GObject.ParamSpec) => void;
            'notify::is-global-memory': (pspec: GObject.ParamSpec) => void;
            'notify::native': (pspec: GObject.ParamSpec) => void;
            'notify::native-destroy-func': (pspec: GObject.ParamSpec) => void;
            'notify::owner': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends Object.ConstructorProps {}
    }

    /**
     * This is the ICalComponent instance.
     * @gir-type Class
     */
    class Component extends Object {
        static $gtype: GObject.GType<Component>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Component.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<Component.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](kind: ComponentKind): Component;

        static new_from_string(str: string): Component;

        static new_vagenda(): Component;

        static new_valarm(): Component;

        static new_vavailability(): Component;

        static new_vcalendar(): Component;

        static new_vevent(): Component;

        static new_vfreebusy(): Component;

        static new_vjournal(): Component;

        static new_vpoll(): Component;

        static new_vquery(): Component;

        static new_vtimezone(): Component;

        static new_vtodo(): Component;

        static new_vvoter(): Component;

        static new_x(x_name: string): Component;

        static new_xavailable(): Component;

        static new_xdaylight(): Component;

        static new_xstandard(): Component;

        static new_xvote(): Component;

        // Signals

        /** @signal */
        connect<K extends keyof Component.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Component.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof Component.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Component.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof Component.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Component.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Static methods

        /**
         * Converts a string to a {@link ICalGLib.ComponentKind}.
         * @param string A string
         */
        static kind_from_string(string: string): ComponentKind;
        /**
         * Checks if a {@link ICalGLib.ComponentKind} is valid.
         * @param kind A {@link ICalGLib.ComponentKind}
         */
        static kind_is_valid(kind: ComponentKind): boolean;
        /**
         * Converts a {@link ICalGLib.ComponentKind} to a string.
         * @param kind A {@link ICalGLib.ComponentKind}
         */
        static kind_to_string(kind: ComponentKind): string;

        // Methods

        /**
         * Adds a {@link ICalGLib.Component} into another {@link ICalGLib.Component} as a child component.
         * @param child A child {@link ICalGLib.Component}
         */
        add_component(child: Component): void;
        /**
         * Adds an {@link ICalGLib.Property} into {@link ICalGLib.Component}.
         * @param property An {@link ICalGLib.Property}
         */
        add_property(property: Property): void;
        /**
         * Converts a {@link ICalGLib.Component} to a string.
         * @returns The string representation of {@link ICalGLib.Component}.
         */
        as_ical_string(): string;
        /**
         * Gets the {@link ICalGLib.CompIter} pointing to the first child {@link ICalGLib.Component}.
         * @param kind A {@link ICalGLib.ComponentKind}
         * @returns A {@link ICalGLib.CompIter}
         */
        begin_component(kind: ComponentKind | null): CompIter;
        /**
         * Checks the number of restrictions in {@link ICalGLib.Component}.
         * @returns The number of restrictions in `comp`
         */
        check_restrictions(): number;
        /**
         * Deeply clone a {@link ICalGLib.Component}.
         * @returns The newly deeply cloned {@link ICalGLib.Component}.
         */
        clone(): Component;
        /**
         * Converts some X-LIC-ERROR properties into RETURN-STATUS properties.
         */
        convert_errors(): void;
        /**
         * Counts the child {@link ICalGLib.Component} with the target kind in the parent one.
         * @param kind The target {@link ICalGLib.ComponentKind}
         * @returns The count of child {@link ICalGLib.Component} in the parent one.
         */
        count_components(kind: ComponentKind | null): number;
        /**
         * Counts the number of errors in {@link ICalGLib.Component}.
         * @returns The count of errors.
         */
        count_errors(): number;
        /**
         * Counts the number of {@link ICalGLib.Property} in {@link ICalGLib.Component}.
         * @param kind A {@link ICalGLib.PropertyKind}
         * @returns The number of {@link ICalGLib.Property}.
         */
        count_properties(kind: PropertyKind | null): number;
        /**
         * Gets the {@link ICalGLib.CompIter} pointing to the end child {@link ICalGLib.Component}.
         * @param kind A {@link ICalGLib.ComponentKind}
         * @returns A {@link ICalGLib.CompIter}
         */
        end_component(kind: ComponentKind | null): CompIter;
        /**
         * Cycles through all recurrences of an event. This function will call the specified callback function for
         * once for the base value of DTSTART, and foreach recurring date/time value. It will filter out events
         * that are specified as an EXDATE or an EXRULE.
         * @param start Ignore timespans before this
         * @param end Ignore timespans after this
         */
        foreach_recurrence(start: Time, end: Time): void;
        /**
         * Applies the same manipulation on every tzid in {@link ICalGLib.Component}.
         * @param callback The callback function
         */
        foreach_tzid(callback?: ComponentForeachTZIDFunc | null): void;
        /**
         * Gets the comment of the {@link ICalGLib.Component}.
         * @returns The comment of `comp`.
         */
        get_comment(): string;
        /**
         * Gets the current {@link ICalGLib.Component} in {@link ICalGLib.Component}.
         * @returns The current {@link ICalGLib.Component}.
         */
        get_current_component(): Component;
        /**
         * Gets the current {@link ICalGLib.Property} in {@link ICalGLib.Component}.
         * @returns The current {@link ICalGLib.Property}.
         */
        get_current_property(): Property;
        /**
         * Gets the description of the {@link ICalGLib.Component}.
         * @returns The description of `comp`.
         */
        get_description(): string;
        /**
         * Gets the dtend of the {@link ICalGLib.Component}.
         * @returns A {@link ICalGLib.Time}.
         */
        get_dtend(): Time;
        /**
         * Gets the dtstamp of the {@link ICalGLib.Component}.
         * @returns A {@link ICalGLib.Time}.
         */
        get_dtstamp(): Time;
        /**
         * Gets the dtstart of the {@link ICalGLib.Component}.
         * @returns A {@link ICalGLib.Time}.
         */
        get_dtstart(): Time;
        /**
         * Gets the due of the {@link ICalGLib.Component}.
         * @returns A {@link ICalGLib.Time}.
         */
        get_due(): Time;
        /**
         * Gets the duration of the {@link ICalGLib.Component}.
         * @returns An {@link ICalGLib.Duration}.
         */
        get_duration(): Duration;
        /**
         * Gets the first {@link ICalGLib.Component} with specific kind in {@link ICalGLib.Component}.
         * @param kind A {@link ICalGLib.ComponentKind}
         * @returns The first {@link ICalGLib.Component}.
         */
        get_first_component(kind: ComponentKind | null): Component | null;
        /**
         * Gets the first {@link ICalGLib.Property} with specific kind in {@link ICalGLib.Component}.
         * @param kind A {@link ICalGLib.PropertyKind}
         * @returns The first {@link ICalGLib.Property}.
         */
        get_first_property(kind: PropertyKind | null): Property | null;
        /**
         * For VCOMPONENT: Returns a reference to the first VEVENT, VTODO or VJOURNAL.
         * @returns A reference to the first VEVENT, VTODO or VJOURNAL
         */
        get_first_real_component(): Component;
        /**
         * Returns the first VEVENT, VTODO or VJOURNAL sub-component of cop, or comp if it is one of those types.
         * @returns The first VEVENT, VTODO or VJOURNAL sub-component.
         */
        get_inner(): Component | null;
        /**
         * Gets the location of the {@link ICalGLib.Component}.
         * @returns The location of `comp`.
         */
        get_location(): string;
        /**
         * Gets the method of the {@link ICalGLib.Component}.
         * @returns A {@link ICalGLib.PropertyMethod}.
         */
        get_method(): PropertyMethod;
        /**
         * Gets the next {@link ICalGLib.Component} with specific kind in {@link ICalGLib.Component}.
         * @param kind A {@link ICalGLib.ComponentKind}
         * @returns The next {@link ICalGLib.Component}.
         */
        get_next_component(kind: ComponentKind | null): Component | null;
        /**
         * Gets the next {@link ICalGLib.Property} with specific kind in {@link ICalGLib.Component}.
         * @param kind A {@link ICalGLib.PropertyKind}
         * @returns The next {@link ICalGLib.Property}.
         */
        get_next_property(kind: PropertyKind | null): Property | null;
        /**
         * Gets the parent component of the `component`.
         * @returns The parent {@link ICalGLib.Component} of the `component`.
         */
        get_parent(): Component | null;
        /**
         * Gets the recurrenceid of the {@link ICalGLib.Component}.
         * @returns A {@link ICalGLib.Time}.
         */
        get_recurrenceid(): Time;
        /**
         * Gets the relcalid of the {@link ICalGLib.Component}.
         * @returns The relcalid of `comp`.
         */
        get_relcalid(): string;
        /**
         * Gets the sequence of the {@link ICalGLib.Component}.
         * @returns The sequence of `comp`.
         */
        get_sequence(): number;
        /**
         * For VEVENT, VTODO, VJOURNAL and VTIMEZONE: reports the start and end times of an event in UTC.
         * @returns A {@link ICalGLib.TimeSpan}.
         */
        get_span(): TimeSpan;
        /**
         * Gets the status of the {@link ICalGLib.Component}.
         * @returns A {@link ICalGLib.PropertyStatus}.
         */
        get_status(): PropertyStatus;
        /**
         * Gets the summary of the {@link ICalGLib.Component}.
         * @returns The summary of `comp`.
         */
        get_summary(): string;
        /**
         * Returns the icaltimezone in the component corresponding to the TZID, or NULL if it can't be found.
         * @param tzid A string representing timezone
         * @returns A {@link ICalGLib.Timezone}.
         */
        get_timezone(tzid: string): Timezone | null;
        /**
         * Gets the uid of the {@link ICalGLib.Component}.
         * @returns The uid of `comp`.
         */
        get_uid(): string;
        /**
         * Checks whether {@link ICalGLib.Component} is valid.
         * @returns 1 if yes, 0 if not.
         */
        is_valid(): boolean;
        /**
         * Gets the type of {@link ICalGLib.Component}.
         * @returns A {@link ICalGLib.ComponentKind}.
         */
        isa(): ComponentKind;
        /**
         * Checks whether the native part of {@link ICalGLib.Component} is icalcomponent.
         * @returns 1 if yes, 0 if not.
         */
        isa_component(): number;
        /**
         * Takes 2 VCALENDAR components and merges the second one into the first, resolving any problems with conflicting
         * TZIDs. comp_to_merge will no longer exist after calling this function.
         * @param comp_to_merge A {@link ICalGLib.Component}. After merged it will not exist any more.
         */
        merge_component(comp_to_merge: Component): void;
        /**
         * Removes a child {@link ICalGLib.Component} from another {@link ICalGLib.Component}.
         * @param child A child {@link ICalGLib.Component}
         */
        remove_component(child: Component): void;
        /**
         * Removes {@link ICalGLib.Property} from {@link ICalGLib.Component}. Caution: The compare is based on address. So you must use
         * the original {@link ICalGLib.Property} as the target.
         * @param property A {@link ICalGLib.Property}
         */
        remove_property(property: Property): void;
        /**
         * Sets the comment of the {@link ICalGLib.Component}.
         * @param v A string representing comment
         */
        set_comment(v: string): void;
        /**
         * Sets the description of the {@link ICalGLib.Component}.
         * @param v A string representing description
         */
        set_description(v: string): void;
        /**
         * Sets the dtend of the {@link ICalGLib.Component}.
         * @param v A {@link ICalGLib.Time}
         */
        set_dtend(v: Time): void;
        /**
         * Sets the dtstamp of the {@link ICalGLib.Component}.
         * @param v A {@link ICalGLib.Time}
         */
        set_dtstamp(v: Time): void;
        /**
         * Sets the dtstart of the {@link ICalGLib.Component}.
         * @param v A {@link ICalGLib.Time}
         */
        set_dtstart(v: Time): void;
        /**
         * Sets the due of the {@link ICalGLib.Component}.
         * @param v A {@link ICalGLib.Time}
         */
        set_due(v: Time): void;
        /**
         * Sets the duration of the {@link ICalGLib.Component}.
         * @param v A {@link ICalGLib.Duration}
         */
        set_duration(v: Duration): void;
        /**
         * Sets the location of the {@link ICalGLib.Component}.
         * @param v A string representing location
         */
        set_location(v: string): void;
        /**
         * Sets the method of the {@link ICalGLib.Component}.
         * @param method A {@link ICalGLib.PropertyMethod}
         */
        set_method(method: PropertyMethod | null): void;
        /**
         * Sets the `parent` {@link ICalGLib.Component} of the specified `component`.
         * @param parent An {@link ICalGLib.Component}, a new parent
         */
        set_parent(parent?: Component | null): void;
        /**
         * Sets the recurrenceid of the {@link ICalGLib.Component}.
         * @param v A {@link ICalGLib.Time}
         */
        set_recurrenceid(v: Time): void;
        /**
         * Sets the relcalid of the {@link ICalGLib.Component}.
         * @param v A string representing relcalid
         */
        set_relcalid(v: string): void;
        /**
         * Sets the sequence of the {@link ICalGLib.Component}.
         * @param v The sequence number
         */
        set_sequence(v: number): void;
        /**
         * Sets the status of the {@link ICalGLib.Component}.
         * @param status A {@link ICalGLib.PropertyStatus}
         */
        set_status(status: PropertyStatus | null): void;
        /**
         * Sets the summary of the {@link ICalGLib.Component}.
         * @param v A string representing summary
         */
        set_summary(v: string): void;
        /**
         * Sets the uid of the {@link ICalGLib.Component}.
         * @param v A string representing uid
         */
        set_uid(v: string): void;
        /**
         * Removes all X-LIC-ERROR properties.
         */
        strip_errors(): void;
    }

    namespace Datetimeperiod {
        // Signal signatures
        interface SignalSignatures extends Object.SignalSignatures {
            'notify::always-destroy': (pspec: GObject.ParamSpec) => void;
            'notify::is-global-memory': (pspec: GObject.ParamSpec) => void;
            'notify::native': (pspec: GObject.ParamSpec) => void;
            'notify::native-destroy-func': (pspec: GObject.ParamSpec) => void;
            'notify::owner': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends Object.ConstructorProps {}
    }

    /**
     * This is the ICalDatetimeperiod instance.
     * @gir-type Class
     */
    class Datetimeperiod extends Object {
        static $gtype: GObject.GType<Datetimeperiod>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Datetimeperiod.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<Datetimeperiod.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): Datetimeperiod;

        // Signals

        /** @signal */
        connect<K extends keyof Datetimeperiod.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Datetimeperiod.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof Datetimeperiod.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Datetimeperiod.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof Datetimeperiod.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Datetimeperiod.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * Gets the period attribute of {@link ICalGLib.Datetimeperiod}.
         * @returns The period attribute of `dtp`.
         */
        get_period(): Period;
        /**
         * Gets the time attribute of {@link ICalGLib.Datetimeperiod}.
         * @returns The time attribute of `dtp`.
         */
        get_time(): Time;
        /**
         * Sets the period attribute of {@link ICalGLib.Datetimeperiod}.
         * @param period The period attribute of `dtp`
         */
        set_period(period: Period): void;
        /**
         * Sets the time attribute of {@link ICalGLib.Datetimeperiod}.
         * @param time The time attribute of `dtp`
         */
        set_time(time: Time): void;
    }

    namespace Duration {
        // Signal signatures
        interface SignalSignatures extends Object.SignalSignatures {
            'notify::always-destroy': (pspec: GObject.ParamSpec) => void;
            'notify::is-global-memory': (pspec: GObject.ParamSpec) => void;
            'notify::native': (pspec: GObject.ParamSpec) => void;
            'notify::native-destroy-func': (pspec: GObject.ParamSpec) => void;
            'notify::owner': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends Object.ConstructorProps {}
    }

    /**
     * This is the ICalDuration instance.
     * @gir-type Class
     */
    class Duration extends Object {
        static $gtype: GObject.GType<Duration>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Duration.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<Duration.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static new_bad_duration(): Duration;

        static new_from_int(t: number): Duration;

        static new_from_string(str: string): Duration;

        static new_null_duration(): Duration;

        // Signals

        /** @signal */
        connect<K extends keyof Duration.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Duration.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof Duration.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Duration.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof Duration.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Duration.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * Converts the {@link ICalGLib.Duration} to the representation in string.
         * @returns The duration in string
         */
        as_ical_string(): string;
        /**
         * Converts the {@link ICalGLib.Duration} to the representation in second.
         * @returns The duration in second
         */
        as_int(): number;
        /**
         * Gets the days of {@link ICalGLib.Duration}.
         * @returns The days.
         */
        get_days(): number;
        /**
         * Gets the hours of {@link ICalGLib.Duration}.
         * @returns The hours.
         */
        get_hours(): number;
        /**
         * Gets the minutes of {@link ICalGLib.Duration}.
         * @returns The minutes.
         */
        get_minutes(): number;
        /**
         * Gets the seconds of {@link ICalGLib.Duration}.
         * @returns The seconds.
         */
        get_seconds(): number;
        /**
         * Gets the weeks of {@link ICalGLib.Duration}.
         * @returns The weeks.
         */
        get_weeks(): number;
        /**
         * Checks whether the {@link ICalGLib.Duration} is the bad_duration.
         * @returns 1 if `duration` is the bad_duration, 0 if not.
         */
        is_bad_duration(): boolean;
        /**
         * Gets the is_neg of {@link ICalGLib.Duration}.
         * @returns The is_neg.
         */
        is_neg(): boolean;
        /**
         * Checks whether the {@link ICalGLib.Duration} is the null_duration.
         * @returns 1 if `duration` is the null_duration, 0 if not.
         */
        is_null_duration(): boolean;
        /**
         * Sets the days of {@link ICalGLib.Duration}.
         * @param days The days
         */
        set_days(days: number): void;
        /**
         * Sets the hours of {@link ICalGLib.Duration}.
         * @param hours The hours
         */
        set_hours(hours: number): void;
        /**
         * Sets the is_neg of {@link ICalGLib.Duration}.
         * @param is_neg The is_neg
         */
        set_is_neg(is_neg: boolean): void;
        /**
         * Sets the minutes of {@link ICalGLib.Duration}.
         * @param minutes The minutes
         */
        set_minutes(minutes: number): void;
        /**
         * Sets the seconds of {@link ICalGLib.Duration}.
         * @param seconds The seconds
         */
        set_seconds(seconds: number): void;
        /**
         * Sets the weeks of {@link ICalGLib.Duration}.
         * @param weeks The weeks
         */
        set_weeks(weeks: number): void;
    }

    namespace Geo {
        // Signal signatures
        interface SignalSignatures extends Object.SignalSignatures {
            'notify::always-destroy': (pspec: GObject.ParamSpec) => void;
            'notify::is-global-memory': (pspec: GObject.ParamSpec) => void;
            'notify::native': (pspec: GObject.ParamSpec) => void;
            'notify::native-destroy-func': (pspec: GObject.ParamSpec) => void;
            'notify::owner': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends Object.ConstructorProps {}
    }

    /**
     * This is the ICalGeo instance.
     * @gir-type Class
     */
    class Geo extends Object {
        static $gtype: GObject.GType<Geo>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Geo.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<Geo.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](lat: number, lon: number): Geo;

        // Signals

        /** @signal */
        connect<K extends keyof Geo.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Geo.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof Geo.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Geo.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof Geo.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Geo.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * Creates a new {@link ICalGLib.Geo}, copy of `geo`.
         * @returns The newly created {@link ICalGLib.Geo}, copy of `geo`.
         */
        clone(): Geo;
        /**
         * Gets the latitude of {@link ICalGLib.Geo}.
         * @returns The latitude.
         */
        get_lat(): number;
        /**
         * Gets the longitude of {@link ICalGLib.Geo}.
         * @returns The longitude.
         */
        get_lon(): number;
        /**
         * Sets the latitude of {@link ICalGLib.Geo}.
         * @param lat The latitude
         */
        set_lat(lat: number): void;
        /**
         * Sets the longitude of {@link ICalGLib.Geo}.
         * @param lon The longitude
         */
        set_lon(lon: number): void;
    }

    namespace Object {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            'notify::always-destroy': (pspec: GObject.ParamSpec) => void;
            'notify::is-global-memory': (pspec: GObject.ParamSpec) => void;
            'notify::native': (pspec: GObject.ParamSpec) => void;
            'notify::native-destroy-func': (pspec: GObject.ParamSpec) => void;
            'notify::owner': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            always_destroy: boolean;
            alwaysDestroy: boolean;
            is_global_memory: boolean;
            isGlobalMemory: boolean;
            native: any;
            native_destroy_func: any;
            nativeDestroyFunc: any;
            owner: GObject.Object;
        }
    }

    /**
     * This is an ICalObject instance struct.
     * @gir-type Class
     */
    abstract class Object extends GObject.Object {
        static $gtype: GObject.GType<Object>;

        // Properties

        /**
         * Whether free the native libical structure on {@link ICalGLib.Object}'s finalize even
         * if the object has set an owner.
         * @since 3.0.11
         */
        get always_destroy(): boolean;
        set always_destroy(val: boolean);
        /**
         * Whether free the native libical structure on {@link ICalGLib.Object}'s finalize even
         * if the object has set an owner.
         * @since 3.0.11
         */
        get alwaysDestroy(): boolean;
        set alwaysDestroy(val: boolean);
        /**
         * Whether the native libical structure is from a global shared memory.
         * If TRUE, then it is not freed on {@link ICalGLib.Object}'s finalize.
         * @construct-only
         */
        get is_global_memory(): boolean;
        /**
         * Whether the native libical structure is from a global shared memory.
         * If TRUE, then it is not freed on {@link ICalGLib.Object}'s finalize.
         * @construct-only
         */
        get isGlobalMemory(): boolean;
        /**
         * The native libical structure for this ICalObject.
         * @construct-only
         */
        get native(): any;
        /**
         * GDestroyNotify function to use to destroy the native libical pointer.
         */
        get native_destroy_func(): any;
        set native_destroy_func(val: any);
        /**
         * GDestroyNotify function to use to destroy the native libical pointer.
         */
        get nativeDestroyFunc(): any;
        set nativeDestroyFunc(val: any);
        /**
         * Owner of the native libical structure. If set, then it is
         * responsible for a free of the native libical structure.
         */
        get owner(): GObject.Object;
        set owner(val: GObject.Object);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Object.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<Object.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        /** @signal */
        connect<K extends keyof Object.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Object.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof Object.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Object.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof Object.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Object.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Static methods

        /**
         * Frees all global objects. Any references to them are invalidated
         * by this call, unless they had been `g_object_ref()`-ed manually.
         */
        static free_global_objects(): void;

        // Methods

        /**
         * Adds a `depender` into the list of objects which should not be destroyed before
         * this `iobject`. It's usually used for cases where the `iobject` uses native libical
         * structure from the `depender`. The `depender` is referenced. It's illegal to try
         * to add one `depender` multiple times.
         * @param depender a {@link GObject.Object} depender
         */
        add_depender(depender: GObject.Object): void;
        /**
         * Obtain the `ICalObject`::always-destroy property value.
         * @returns Whether the native libical structure is freed even when an owner is set.
         */
        get_always_destroy(): boolean;
        /**
         * Obtains whether the native libical structure is a global shared memory,
         * thus should not be destroyed. This can be set only during construction time.
         * @returns Whether the native libical structure is a global shared memory.
         */
        get_is_global_memory(): boolean;
        /**
         * Obtain current owner of the native libical structure. The returned pointer,
         * if not NULL, is referenced for thread safety. Unref it with g_object_unref
         * when done with it.
         * @returns Current owner of the libical    native structure. Returns `null` when there is no owner.
         */
        ref_owner<T = GObject.Object>(): T;
        /**
         * Removes a `depender` from the list of objects which should not be destroyed before
         * this `iobject`, previously added with `i_cal_object_add_depender()`. It's illegal to try
         * to remove the `depender` which is not in the internal list.
         * @param depender a {@link GObject.Object} depender
         */
        remove_depender(depender: GObject.Object): void;
        /**
         * Unref and remove the owner.
         */
        remove_owner(): void;
        /**
         * Sets the `ICalObject`::always-destroy property value. When `true`, the native
         * libical structure is always freed, even when an owner of the `iobject` is set.
         * @param value value to set
         */
        set_always_destroy(value: boolean): void;
        /**
         * Sets a function to be used to destroy the native libical structure.
         */
        set_native_destroy_func(): void;
        /**
         * Sets an owner of the native libical structure, that is an object responsible
         * for a destroy of the native libical structure.
         * @param owner Owner of the native libical structure
         */
        set_owner(owner: GObject.Object): void;
        /**
         * Obtain native libical structure pointer associated with this `iobject` and sets the one
         * at `iobject` to NULL, thus it's invalid since now on.
         * @returns Native libical structure pointer associated with this `iobject`.
         */
        steal_native(): any | null;
    }

    namespace Parameter {
        // Signal signatures
        interface SignalSignatures extends Object.SignalSignatures {
            'notify::always-destroy': (pspec: GObject.ParamSpec) => void;
            'notify::is-global-memory': (pspec: GObject.ParamSpec) => void;
            'notify::native': (pspec: GObject.ParamSpec) => void;
            'notify::native-destroy-func': (pspec: GObject.ParamSpec) => void;
            'notify::owner': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends Object.ConstructorProps {}
    }

    /**
     * This is the ICalParameter instance.
     * @gir-type Class
     */
    class Parameter extends Object {
        static $gtype: GObject.GType<Parameter>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Parameter.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<Parameter.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](v: ParameterKind): Parameter;

        static new_actionparam(v: ParameterAction): Parameter;

        static new_altrep(v: string): Parameter;

        static new_charset(v: string): Parameter;

        static new_cn(v: string): Parameter;

        static new_cutype(v: ParameterCutype): Parameter;

        static new_delegatedfrom(v: string): Parameter;

        static new_delegatedto(v: string): Parameter;

        static new_dir(v: string): Parameter;

        static new_display(value: ParameterDisplay): Parameter;

        static new_email(value: string): Parameter;

        static new_enable(v: ParameterEnable): Parameter;

        static new_encoding(v: ParameterEncoding): Parameter;

        static new_fbtype(v: ParameterFbtype): Parameter;

        static new_feature(value: ParameterFeature): Parameter;

        static new_filename(v: string): Parameter;

        static new_fmttype(v: string): Parameter;

        static new_from_string(value: string): Parameter;

        static new_from_value_string(kind: ParameterKind, value: string): Parameter;

        static new_iana(v: string): Parameter;

        static new_id(v: string): Parameter;

        static new_label(value: string): Parameter;

        static new_language(v: string): Parameter;

        static new_latency(v: string): Parameter;

        static new_local(v: ParameterLocal): Parameter;

        static new_localize(v: string): Parameter;

        static new_managedid(v: string): Parameter;

        static new_member(v: string): Parameter;

        static new_modified(v: string): Parameter;

        static new_options(v: string): Parameter;

        static new_partstat(v: ParameterPartstat): Parameter;

        static new_patchaction(value: ParameterPatchaction): Parameter;

        static new_publiccomment(v: string): Parameter;

        static new_range(v: ParameterRange): Parameter;

        static new_reason(v: string): Parameter;

        static new_related(v: ParameterRelated): Parameter;

        static new_reltype(v: ParameterReltype): Parameter;

        static new_required(v: ParameterRequired): Parameter;

        static new_response(v: number): Parameter;

        static new_role(v: ParameterRole): Parameter;

        static new_rsvp(v: ParameterRsvp): Parameter;

        static new_scheduleagent(v: ParameterScheduleagent): Parameter;

        static new_scheduleforcesend(v: ParameterScheduleforcesend): Parameter;

        static new_schedulestatus(v: string): Parameter;

        static new_sentby(v: string): Parameter;

        static new_size(v: string): Parameter;

        static new_stayinformed(v: ParameterStayinformed): Parameter;

        static new_substate(v: ParameterSubstate): Parameter;

        static new_tzid(v: string): Parameter;

        static new_value(v: ParameterValue): Parameter;

        static new_x(v: string): Parameter;

        static new_xliccomparetype(v: ParameterXliccomparetype): Parameter;

        static new_xlicerrortype(v: ParameterXlicerrortype): Parameter;

        // Signals

        /** @signal */
        connect<K extends keyof Parameter.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Parameter.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof Parameter.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Parameter.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof Parameter.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Parameter.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Static methods

        /**
         * Converts a string to the {@link ICalGLib.ParameterKind}.
         * @param string The string representation of the {@link ICalGLib.Parameter}
         */
        static kind_from_string(string: string): ParameterKind;
        /**
         * Checks whether {@link ICalGLib.ParameterKind} is valid.
         * @param kind The {@link ICalGLib.PropertyKind}
         */
        static kind_is_valid(kind: ParameterKind): boolean;
        /**
         * Converts the {@link ICalGLib.Parameter} to the string representation.
         * @param kind The {@link ICalGLib.ParameterKind} to be converted
         */
        static kind_to_string(kind: ParameterKind): string;
        /**
         * Converts the {@link ICalGLib.ParameterValue} to {@link ICalGLib.ValueKind}.
         * @param value A {@link ICalGLib.ParameterValue}
         */
        static value_to_value_kind(value: ParameterValue): ValueKind;

        // Methods

        /**
         * Converts an {@link ICalGLib.Parameter} to the string representation.
         * @returns The string representation of the `parameter`.
         */
        as_ical_string(): string;
        /**
         * Deep clone a {@link ICalGLib.Parameter}.
         * @returns The newly created {@link ICalGLib.Parameter} with the same properties as the `p`.
         */
        clone(): Parameter;
        /**
         * @returns The type of the `value`
         */
        get_actionparam(): ParameterAction;
        /**
         * @returns The property of the `value`
         */
        get_altrep(): string | null;
        /**
         * @returns The property of the `value`
         */
        get_charset(): string | null;
        /**
         * @returns The property of the `value`
         */
        get_cn(): string | null;
        /**
         * @returns The property of the `value`
         */
        get_cutype(): ParameterCutype | null;
        /**
         * @returns The property of the `value`
         */
        get_delegatedfrom(): string | null;
        /**
         * @returns The property of the `value`
         */
        get_delegatedto(): string | null;
        /**
         * @returns The property of the `value`
         */
        get_dir(): string | null;
        /**
         * @returns The {@link ICalGLib.ParameterDisplay} value of the `param`
         */
        get_display(): ParameterDisplay;
        /**
         * @returns The string value of the `param`
         */
        get_email(): string | null;
        /**
         * @returns The type of the `value`
         */
        get_enable(): ParameterEnable;
        /**
         * @returns The type of the `value`
         */
        get_encoding(): ParameterEncoding;
        /**
         * @returns The type of the `value`
         */
        get_fbtype(): ParameterFbtype;
        /**
         * @returns The {@link ICalGLib.ParameterFeature} value of the `param`
         */
        get_feature(): ParameterFeature;
        /**
         * @returns The property of the `value`
         */
        get_filename(): string | null;
        /**
         * @returns The property of the `value`
         */
        get_fmttype(): string | null;
        /**
         * @returns The property of the `value`
         */
        get_iana(): string | null;
        /**
         * Gets the iana_name property of the native part of the {@link ICalGLib.Parameter}.
         * @returns The property of the `value`
         */
        get_iana_name(): string | null;
        /**
         * Gets the iana_value property of the native part of the {@link ICalGLib.Parameter}.
         * @returns The property of the `value`
         */
        get_iana_value(): string | null;
        /**
         * @returns The property of the `value`
         */
        get_id(): string | null;
        /**
         * @returns The string value of the `param`
         */
        get_label(): string | null;
        /**
         * @returns The property of the `value`
         */
        get_language(): string | null;
        /**
         * @returns The property of the `value`
         */
        get_latency(): string | null;
        /**
         * @returns The type of the `value`
         */
        get_local(): ParameterLocal;
        /**
         * @returns The property of the `value`
         */
        get_localize(): string | null;
        /**
         * @returns The property of the `value`
         */
        get_managedid(): string | null;
        /**
         * @returns The property of the `value`
         */
        get_member(): string | null;
        /**
         * @returns The property of the `value`
         */
        get_modified(): string | null;
        /**
         * @returns The property of the `value`
         */
        get_options(): string | null;
        /**
         * Gets the parent {@link ICalGLib.Property} of the specified {@link ICalGLib.Parameter}.
         * @returns The parent {@link ICalGLib.Property}
         */
        get_parent(): Property | null;
        /**
         * @returns The type of the `value`
         */
        get_partstat(): ParameterPartstat;
        /**
         * @returns The {@link ICalGLib.ParameterPatchaction} value of the `param`
         */
        get_patchaction(): ParameterPatchaction;
        /**
         * @returns The property of the `value`
         */
        get_publiccomment(): string | null;
        /**
         * @returns The type of the `value`
         */
        get_range(): ParameterRange;
        /**
         * @returns The property of the `value`
         */
        get_reason(): string | null;
        /**
         * @returns The type of the `value`
         */
        get_related(): ParameterRelated;
        /**
         * @returns The type of the `value`
         */
        get_reltype(): ParameterReltype;
        /**
         * @returns The type of the `value`
         */
        get_required(): ParameterRequired;
        /**
         * @returns The type of the `value`
         */
        get_response(): number;
        /**
         * @returns The type of the `value`
         */
        get_role(): ParameterRole;
        /**
         * @returns The type of the `value`
         */
        get_rsvp(): ParameterRsvp;
        /**
         * @returns The type of the `value`
         */
        get_scheduleagent(): ParameterScheduleagent;
        /**
         * @returns The type of the `value`
         */
        get_scheduleforcesend(): ParameterScheduleforcesend;
        /**
         * @returns The property of the `value`
         */
        get_schedulestatus(): string | null;
        /**
         * @returns The property of the `value`
         */
        get_sentby(): string | null;
        /**
         * @returns The property of the `value`
         */
        get_size(): string | null;
        /**
         * @returns The type of the `value`
         */
        get_stayinformed(): ParameterStayinformed;
        /**
         * @returns The type of the `value`
         */
        get_substate(): ParameterSubstate;
        /**
         * @returns The property of the `value`
         */
        get_tzid(): string | null;
        /**
         * @returns The type of the `value`
         */
        get_value(): ParameterValue;
        /**
         * @returns The property of the `value`
         */
        get_x(): string | null;
        /**
         * @returns The type of the `value`
         */
        get_xliccomparetype(): ParameterXliccomparetype;
        /**
         * @returns The type of the `value`
         */
        get_xlicerrortype(): ParameterXlicerrortype;
        /**
         * Gets the xname property of the native part of the {@link ICalGLib.Parameter}.
         * @returns The property of the `value`
         */
        get_xname(): string | null;
        /**
         * Gets the xvalue property of the native part of the {@link ICalGLib.Parameter}.
         * @returns The property of the `value`
         */
        get_xvalue(): string | null;
        /**
         * Checks whether native parts of two `ICalParameters` have the same name.
         * @param param2 The {@link ICalGLib.Parameter} to be checked
         * @returns 1 if the parameters have the same name, 0 or not.
         */
        has_same_name(param2: Parameter): number;
        /**
         * Checks the type of a {@link ICalGLib.Parameter}.
         * @returns The type of the `parameter`.
         */
        isa(): ParameterKind;
        /**
         * Checks whether the native part of the {@link ICalGLib.Parameter} is of type icalparameter.
         * @returns 1 if the native part is of type icalparameter, 0 if not.
         */
        isa_parameter(): number;
        /**
         * @param v The type of {@link ICalGLib.Parameter} to be set in the `value`
         */
        set_actionparam(v: ParameterAction | null): void;
        /**
         * @param v The string used to set into the `value`
         */
        set_altrep(v: string): void;
        /**
         * @param v The string used to set into the `value`
         */
        set_charset(v: string): void;
        /**
         * @param v The string used to set into the `value`
         */
        set_cn(v: string): void;
        /**
         * @param v The `ICalParameterCutype` used to set `value`
         */
        set_cutype(v: ParameterCutype | null): void;
        /**
         * @param v The string used to set into the `value`
         */
        set_delegatedfrom(v: string): void;
        /**
         * @param v The string used to set into the `value`
         */
        set_delegatedto(v: string): void;
        /**
         * @param v The string used to set into the `value`
         */
        set_dir(v: string): void;
        /**
         * @param value The {@link ICalGLib.ParameterDisplay} to set into the `param`
         */
        set_display(value: ParameterDisplay | null): void;
        /**
         * @param value The string value to set into the `param`
         */
        set_email(value: string): void;
        /**
         * @param v The type of {@link ICalGLib.Parameter} to be set in the `value`
         */
        set_enable(v: ParameterEnable | null): void;
        /**
         * @param v The type of {@link ICalGLib.Parameter} to be set in the `value`
         */
        set_encoding(v: ParameterEncoding | null): void;
        /**
         * @param v The type of {@link ICalGLib.Parameter} to be set in the `value`
         */
        set_fbtype(v: ParameterFbtype | null): void;
        /**
         * @param value The {@link ICalGLib.ParameterFeature} to set into the `param`
         */
        set_feature(value: ParameterFeature | null): void;
        /**
         * @param v The string used to set into the `value`
         */
        set_filename(v: string): void;
        /**
         * @param v The string used to set into the `value`
         */
        set_fmttype(v: string): void;
        /**
         * @param v The string used to set into the `value`
         */
        set_iana(v: string): void;
        /**
         * Sets the iana_name property of the native part of the {@link ICalGLib.Parameter}.
         * @param v The name to be set into the `param`
         */
        set_iana_name(v: string): void;
        /**
         * Sets the iana_value property of the native part of the {@link ICalGLib.Parameter}.
         * @param v The value to be set into the `param`
         */
        set_iana_value(v: string): void;
        /**
         * @param v The string used to set into the `value`
         */
        set_id(v: string): void;
        /**
         * @param value The string value to set into the `param`
         */
        set_label(value: string): void;
        /**
         * @param v The string used to set into the `value`
         */
        set_language(v: string): void;
        /**
         * @param v The string used to set into the `value`
         */
        set_latency(v: string): void;
        /**
         * @param v The type of {@link ICalGLib.Parameter} to be set in the `value`
         */
        set_local(v: ParameterLocal | null): void;
        /**
         * @param v The string used to set into the `value`
         */
        set_localize(v: string): void;
        /**
         * @param v The string used to set into the `value`
         */
        set_managedid(v: string): void;
        /**
         * @param v The string used to set into the `value`
         */
        set_member(v: string): void;
        /**
         * @param v The string used to set into the `value`
         */
        set_modified(v: string): void;
        /**
         * @param v The string used to set into the `value`
         */
        set_options(v: string): void;
        /**
         * Sets the parent {@link ICalGLib.Property} of an {@link ICalGLib.Parameter}.
         * @param property The parent {@link ICalGLib.Property}
         */
        set_parent(property?: Property | null): void;
        /**
         * @param v The type of {@link ICalGLib.Parameter} to be set in the `value`
         */
        set_partstat(v: ParameterPartstat | null): void;
        /**
         * @param value The {@link ICalGLib.ParameterPatchaction} to set into the `param`
         */
        set_patchaction(value: ParameterPatchaction | null): void;
        /**
         * @param v The string used to set into the `value`
         */
        set_publiccomment(v: string): void;
        /**
         * @param v The type of {@link ICalGLib.Parameter} to be set in the `value`
         */
        set_range(v: ParameterRange | null): void;
        /**
         * @param v The string used to set into the `value`
         */
        set_reason(v: string): void;
        /**
         * @param v The type of {@link ICalGLib.Parameter} to be set in the `value`
         */
        set_related(v: ParameterRelated | null): void;
        /**
         * @param v The type of {@link ICalGLib.Parameter} to be set in the `value`
         */
        set_reltype(v: ParameterReltype | null): void;
        /**
         * @param v The type of {@link ICalGLib.Parameter} to be set in the `value`
         */
        set_required(v: ParameterRequired | null): void;
        /**
         * @param v The type of {@link ICalGLib.Parameter} to be set in the `value`
         */
        set_response(v: number): void;
        /**
         * @param v The type of {@link ICalGLib.Parameter} to be set in the `value`
         */
        set_role(v: ParameterRole | null): void;
        /**
         * @param v The type of {@link ICalGLib.Parameter} to be set in the `value`
         */
        set_rsvp(v: ParameterRsvp | null): void;
        /**
         * @param v The type of {@link ICalGLib.Parameter} to be set in the `value`
         */
        set_scheduleagent(v: ParameterScheduleagent | null): void;
        /**
         * @param v The type of {@link ICalGLib.Parameter} to be set in the `value`
         */
        set_scheduleforcesend(v: ParameterScheduleforcesend | null): void;
        /**
         * @param v The string used to set into the `value`
         */
        set_schedulestatus(v: string): void;
        /**
         * @param v The string used to set into the `value`
         */
        set_sentby(v: string): void;
        /**
         * @param v The string used to set into the `value`
         */
        set_size(v: string): void;
        /**
         * @param v The type of {@link ICalGLib.Parameter} to be set in the `value`
         */
        set_stayinformed(v: ParameterStayinformed | null): void;
        /**
         * @param v The type of {@link ICalGLib.Parameter} to be set in the `value`
         */
        set_substate(v: ParameterSubstate | null): void;
        /**
         * @param v The string used to set into the `value`
         */
        set_tzid(v: string): void;
        /**
         * @param v The type of {@link ICalGLib.Parameter} to be set in the `value`
         */
        set_value(v: ParameterValue | null): void;
        /**
         * @param v The string used to set into the `value`
         */
        set_x(v: string): void;
        /**
         * @param v The type of {@link ICalGLib.Parameter} to be set in the `value`
         */
        set_xliccomparetype(v: ParameterXliccomparetype | null): void;
        /**
         * @param v The type of {@link ICalGLib.Parameter} to be set in the `value`
         */
        set_xlicerrortype(v: ParameterXlicerrortype | null): void;
        /**
         * Sets the xname property of the native part of the {@link ICalGLib.Parameter}.
         * @param v The name to be set into the `param`
         */
        set_xname(v: string): void;
        /**
         * Sets the xvalue property of the native part of the {@link ICalGLib.Parameter}.
         * @param v The value to be set into the `param`
         */
        set_xvalue(v: string): void;
    }

    namespace Parser {
        // Signal signatures
        interface SignalSignatures extends Object.SignalSignatures {
            'notify::always-destroy': (pspec: GObject.ParamSpec) => void;
            'notify::is-global-memory': (pspec: GObject.ParamSpec) => void;
            'notify::native': (pspec: GObject.ParamSpec) => void;
            'notify::native-destroy-func': (pspec: GObject.ParamSpec) => void;
            'notify::owner': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends Object.ConstructorProps {}
    }

    /**
     * This is the ICalParser instance.
     * @gir-type Class
     */
    class Parser extends Object {
        static $gtype: GObject.GType<Parser>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Parser.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<Parser.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): Parser;

        // Signals

        /** @signal */
        connect<K extends keyof Parser.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Parser.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof Parser.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Parser.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof Parser.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Parser.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Static methods

        /**
         * Parses the string into a {@link ICalGLib.Component}.
         * @param str The string to be parsed
         */
        static parse_string(str: string): Component;

        // Methods

        /**
         * Add a line at one time into the {@link ICalGLib.Parser} until the parsing is complete and {@link ICalGLib.Component} will be
         * returned.
         * @param str A line of string representation of the {@link ICalGLib.Component}
         * @returns The complete {@link ICalGLib.Component}.
         */
        add_line(str?: string | null): Component | null;
        /**
         * We won't get a clean exit if some components did not have an "END" tag. Clear off any component that
         * may be left in the list.
         * @returns The root {@link ICalGLib.Component} in `parser`.
         */
        clean(): Component | null;
        /**
         * Frees a {@link ICalGLib.Parser}.
         */
        free(): void;
        /**
         * Given a line generator function, returns a single iCal content line.
         * @param func A line generator function
         * @returns A single iCal content line.
         */
        get_line(func: ParserLineGenFunc): string;
        /**
         * Gets the state of the target parser.
         * @returns The parser state stored in the {@link ICalGLib.Parser}.
         */
        get_state(): ParserState;
        /**
         * icalparser_parse takes a string that holds the text ( in RFC 2445 format ) and returns a pointer to an
         * {@link ICalGLib.Component}. The caller owns the memory. `func` is a pointer to a function that returns one content
         * line per invocation.
         * @param func The function used to parse
         * @returns The component output by the parser.
         */
        parse(func: ParserLineGenFunc): Component;
    }

    namespace Period {
        // Signal signatures
        interface SignalSignatures extends Object.SignalSignatures {
            'notify::always-destroy': (pspec: GObject.ParamSpec) => void;
            'notify::is-global-memory': (pspec: GObject.ParamSpec) => void;
            'notify::native': (pspec: GObject.ParamSpec) => void;
            'notify::native-destroy-func': (pspec: GObject.ParamSpec) => void;
            'notify::owner': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends Object.ConstructorProps {}
    }

    /**
     * This is the ICalPeriod instance.
     * @gir-type Class
     */
    class Period extends Object {
        static $gtype: GObject.GType<Period>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Period.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<Period.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static new_from_string(str: string): Period;

        static new_null_period(): Period;

        // Signals

        /** @signal */
        connect<K extends keyof Period.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Period.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof Period.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Period.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof Period.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Period.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * Translates {@link ICalGLib.Period} to string.
         * @returns The string representation of {@link ICalGLib.Period}.
         */
        as_ical_string(): string;
        /**
         * Gets the duration from an {@link ICalGLib.Period}.
         * @returns The duration of `period`.
         */
        get_duration(): Duration;
        /**
         * Gets the end time from an {@link ICalGLib.Period}.
         * @returns The end of `period`.
         */
        get_end(): Time;
        /**
         * Gets the start time from an {@link ICalGLib.Period}.
         * @returns The start of `period`.
         */
        get_start(): Time;
        /**
         * Checks the {@link ICalGLib.Period} is null_period.
         * @returns 1 if yes, 0 if not.
         */
        is_null_period(): boolean;
        /**
         * Checks the {@link ICalGLib.Period} is valid_period.
         * @returns 1 if yes, 0 if not.
         */
        is_valid_period(): boolean;
        /**
         * Sets the duration of an {@link ICalGLib.Period}.
         * @param duration The duration of `period`
         */
        set_duration(duration: Duration): void;
        /**
         * Sets the end time of an {@link ICalGLib.Period}.
         * @param end The end of `period`
         */
        set_end(end: Time): void;
        /**
         * Sets the start time of an {@link ICalGLib.Period}.
         * @param start The start of `period`
         */
        set_start(start: Time): void;
    }

    namespace Property {
        // Signal signatures
        interface SignalSignatures extends Object.SignalSignatures {
            'notify::always-destroy': (pspec: GObject.ParamSpec) => void;
            'notify::is-global-memory': (pspec: GObject.ParamSpec) => void;
            'notify::native': (pspec: GObject.ParamSpec) => void;
            'notify::native-destroy-func': (pspec: GObject.ParamSpec) => void;
            'notify::owner': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends Object.ConstructorProps {}
    }

    /**
     * This is the ICalProperty instance.
     * @gir-type Class
     */
    class Property extends Object {
        static $gtype: GObject.GType<Property>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Property.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<Property.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](kind: PropertyKind): Property;

        static new_acceptresponse(v: string): Property;

        static new_acknowledged(v: Time): Property;

        static new_action(v: PropertyAction): Property;

        static new_allowconflict(v: string): Property;

        static new_attach(v: Attach): Property;

        static new_attendee(v: string): Property;

        static new_busytype(v: PropertyBusytype): Property;

        static new_calid(v: string): Property;

        static new_calmaster(v: string): Property;

        static new_calscale(v: string): Property;

        static new_capversion(v: string): Property;

        static new_carid(v: string): Property;

        static new_carlevel(v: PropertyCarlevel): Property;

        static new_categories(v: string): Property;

        static new_class(v: Property_Class): Property;

        static new_cmd(v: PropertyCmd): Property;

        static new_color(v: string): Property;

        static new_comment(v: string): Property;

        static new_completed(v: Time): Property;

        static new_components(v: string): Property;

        static new_contact(v: string): Property;

        static new_created(v: Time): Property;

        static new_csid(v: string): Property;

        static new_datemax(v: Time): Property;

        static new_datemin(v: Time): Property;

        static new_decreed(v: string): Property;

        static new_defaultcharset(v: string): Property;

        static new_defaultlocale(v: string): Property;

        static new_defaulttzid(v: string): Property;

        static new_defaultvcars(v: string): Property;

        static new_deny(v: string): Property;

        static new_description(v: string): Property;

        static new_dtend(v: Time): Property;

        static new_dtstamp(v: Time): Property;

        static new_dtstart(v: Time): Property;

        static new_due(v: Time): Property;

        static new_duration(v: Duration): Property;

        static new_estimatedduration(v: Duration): Property;

        static new_exdate(v: Time): Property;

        static new_expand(v: number): Property;

        static new_exrule(v: Recurrence): Property;

        static new_freebusy(v: Period): Property;

        static new_from_string(str: string): Property;

        static new_geo(v: Geo): Property;

        static new_grant(v: string): Property;

        static new_itipversion(v: string): Property;

        static new_lastmodified(v: Time): Property;

        static new_location(v: string): Property;

        static new_maxcomponentsize(v: number): Property;

        static new_maxdate(v: Time): Property;

        static new_maxresults(v: number): Property;

        static new_maxresultssize(v: number): Property;

        static new_method(v: PropertyMethod): Property;

        static new_mindate(v: Time): Property;

        static new_multipart(v: string): Property;

        static new_name(v: string): Property;

        static new_organizer(v: string): Property;

        static new_owner(v: string): Property;

        static new_percentcomplete(v: number): Property;

        static new_permission(v: string): Property;

        static new_pollcompletion(v: PropertyPollcompletion): Property;

        static new_pollitemid(v: number): Property;

        static new_pollmode(v: PropertyPollmode): Property;

        static new_pollproperties(v: string): Property;

        static new_pollwinner(v: number): Property;

        static new_priority(v: number): Property;

        static new_prodid(v: string): Property;

        static new_query(v: string): Property;

        static new_queryid(v: string): Property;

        static new_querylevel(v: PropertyQuerylevel): Property;

        static new_queryname(v: string): Property;

        static new_rdate(v: Datetimeperiod): Property;

        static new_recuraccepted(v: string): Property;

        static new_recurexpand(v: string): Property;

        static new_recurlimit(v: string): Property;

        static new_recurrenceid(v: Time): Property;

        static new_relatedto(v: string): Property;

        static new_relcalid(v: string): Property;

        static new_repeat(v: number): Property;

        static new_replyurl(v: string): Property;

        static new_requeststatus(v: Reqstat): Property;

        static new_resources(v: string): Property;

        static new_response(v: number): Property;

        static new_restriction(v: string): Property;

        static new_rrule(v: Recurrence): Property;

        static new_scope(v: string): Property;

        static new_sequence(v: number): Property;

        static new_status(v: PropertyStatus): Property;

        static new_storesexpanded(v: string): Property;

        static new_summary(v: string): Property;

        static new_target(v: string): Property;

        static new_taskmode(v: PropertyTaskmode): Property;

        static new_transp(v: PropertyTransp): Property;

        static new_trigger(v: Trigger): Property;

        static new_tzid(v: string): Property;

        static new_tzidaliasof(v: string): Property;

        static new_tzname(v: string): Property;

        static new_tzoffsetfrom(v: number): Property;

        static new_tzoffsetto(v: number): Property;

        static new_tzuntil(v: Time): Property;

        static new_tzurl(v: string): Property;

        static new_uid(v: string): Property;

        static new_url(v: string): Property;

        static new_version(v: string): Property;

        static new_voter(v: string): Property;

        static new_x(v: string): Property;

        static new_xlicclass(v: PropertyXlicclass): Property;

        static new_xlicclustercount(v: string): Property;

        static new_xlicerror(v: string): Property;

        static new_xlicmimecharset(v: string): Property;

        static new_xlicmimecid(v: string): Property;

        static new_xlicmimecontenttype(v: string): Property;

        static new_xlicmimeencoding(v: string): Property;

        static new_xlicmimefilename(v: string): Property;

        static new_xlicmimeoptinfo(v: string): Property;

        // Signals

        /** @signal */
        connect<K extends keyof Property.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Property.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof Property.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Property.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof Property.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Property.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Static methods

        /**
         * Converts the enum to string.
         * @param e The enum to be converted
         */
        static enum_to_string(e: number): string;
        /**
         * Converts a integer and string into an enum.
         * @param kind The kind
         * @param str A string
         */
        static kind_and_string_to_enum(kind: number, str: string): number;
        /**
         * Converts the string to {@link ICalGLib.PropertyKind}.
         * @param string A string representing {@link ICalGLib.PropertyKind}
         */
        static kind_from_string(string: string): PropertyKind;
        /**
         * Checks whether the enum belongs to the {@link ICalGLib.PropertyKind}.
         * @param kind A {@link ICalGLib.PropertyKind}
         * @param e The enum to be checked
         */
        static kind_has_property(kind: PropertyKind, e: number): number;
        /**
         * Checks whether {@link ICalGLib.PropertyKind} is valid.
         * @param kind The {@link ICalGLib.PropertyKind}
         */
        static kind_is_valid(kind: PropertyKind): boolean;
        /**
         * Converts the {@link ICalGLib.PropertyKind} to a string.
         * @param kind A {@link ICalGLib.PropertyKind}
         */
        static kind_to_string(kind: PropertyKind): string;
        /**
         * Converts the {@link ICalGLib.PropertyKind} to {@link ICalGLib.ValueKind}.
         * @param kind A {@link ICalGLib.PropertyKind}
         */
        static kind_to_value_kind(kind: PropertyKind): ValueKind;
        /**
         * Converts the string to {@link ICalGLib.PropertyKind}.
         * @param str A string
         */
        static method_from_string(str: string): PropertyMethod;
        /**
         * Converts the {@link ICalGLib.PropertyMethod} to string.
         * @param method The {@link ICalGLib.PropertyMethod}
         */
        static method_to_string(method: PropertyMethod): string;
        /**
         * Decides if this recurrence is acceptable. This function decides if a specific recurrence value is excluded
         * by EXRULE or EXDATE properties.
         * @param comp A {@link ICalGLib.Component}
         * @param dtstart The base dtstart value for this component
         * @param recurtime The time to test against
         */
        static recurrence_is_excluded(comp: Component, dtstart: Time, recurtime: Time): boolean;
        /**
         * Converts the string to {@link ICalGLib.PropertyKind}.
         * @param str A string
         */
        static status_from_string(str: string): PropertyStatus;
        /**
         * Converts the {@link ICalGLib.PropertyStatus} to string.
         * @param method The {@link ICalGLib.PropertyStatus}
         */
        static status_to_string(method: PropertyStatus): string;

        // Methods

        /**
         * Adds a {@link ICalGLib.Parameter} into the {@link ICalGLib.Property}. It behaves like set the copy of the {@link ICalGLib.Parameter}. Upon
         * completion the native part of {@link ICalGLib.Parameter} will be set to NULL.
         * @param parameter The parameter to be added into `prop`
         */
        add_parameter(parameter: Parameter): void;
        /**
         * Converts a {@link ICalGLib.Property} to a string representation.
         * @returns The string representation of `prop`.
         */
        as_ical_string(): string;
        /**
         * Deeply clone a {@link ICalGLib.Property}.
         * @returns The newly created {@link ICalGLib.Property} deeply cloned from `prop`.
         */
        clone(): Property;
        /**
         * Counts the parameters in the {@link ICalGLib.Property}.
         * @returns The count of the parameters in the {@link ICalGLib.Property}.
         */
        count_parameters(): number;
        /**
         * Gets the acceptresponse of {@link ICalGLib.Property}.
         * @returns Get the acceptresponse of {@link ICalGLib.Property}.
         */
        get_acceptresponse(): string;
        /**
         * Gets the acknowledged time of {@link ICalGLib.Property}.
         * @returns Get the acknowledged time of {@link ICalGLib.Property}.
         */
        get_acknowledged(): Time;
        /**
         * Gets the action of {@link ICalGLib.Property}.
         * @returns Get the action of {@link ICalGLib.Property}.
         */
        get_action(): PropertyAction;
        /**
         * Gets the allowconflict of {@link ICalGLib.Property}.
         * @returns Get the allowconflict of {@link ICalGLib.Property}.
         */
        get_allowconflict(): string;
        /**
         * Gets the attach of {@link ICalGLib.Property}.
         * @returns Get the attach of {@link ICalGLib.Property}.
         */
        get_attach(): Attach;
        /**
         * Gets the attendee of {@link ICalGLib.Property}.
         * @returns Get the attendee of {@link ICalGLib.Property}.
         */
        get_attendee(): string;
        /**
         * Gets the busytype of {@link ICalGLib.Property}.
         * @returns Get the busytype of {@link ICalGLib.Property}.
         */
        get_busytype(): PropertyBusytype;
        /**
         * Gets the calid of {@link ICalGLib.Property}.
         * @returns Get the calid of {@link ICalGLib.Property}.
         */
        get_calid(): string;
        /**
         * Gets the calmaster of {@link ICalGLib.Property}.
         * @returns Get the calmaster of {@link ICalGLib.Property}.
         */
        get_calmaster(): string;
        /**
         * Gets the calscale of {@link ICalGLib.Property}.
         * @returns Get the calscale of {@link ICalGLib.Property}.
         */
        get_calscale(): string;
        /**
         * Gets the capversion of {@link ICalGLib.Property}.
         * @returns Get the capversion of {@link ICalGLib.Property}.
         */
        get_capversion(): string;
        /**
         * Gets the carid of {@link ICalGLib.Property}.
         * @returns Get the carid of {@link ICalGLib.Property}.
         */
        get_carid(): string;
        /**
         * Gets the carlevel of {@link ICalGLib.Property}.
         * @returns Get the carlevel of {@link ICalGLib.Property}.
         */
        get_carlevel(): PropertyCarlevel;
        /**
         * Gets the categories of {@link ICalGLib.Property}.
         * @returns Get the categories of {@link ICalGLib.Property}.
         */
        get_categories(): string;
        /**
         * Gets the class of {@link ICalGLib.Property}.
         * @returns Get the class of {@link ICalGLib.Property}.
         */
        get_class(): Property_Class;
        /**
         * Gets the cmd of {@link ICalGLib.Property}.
         * @returns Get the cmd of {@link ICalGLib.Property}.
         */
        get_cmd(): PropertyCmd;
        /**
         * Gets the color property of the `prop`.
         * @returns Get the color property.
         */
        get_color(): string;
        /**
         * Gets the comment of {@link ICalGLib.Property}.
         * @returns Get the comment of {@link ICalGLib.Property}.
         */
        get_comment(): string;
        /**
         * Gets the completed time of {@link ICalGLib.Property}.
         * @returns Get the completed time of {@link ICalGLib.Property}.
         */
        get_completed(): Time;
        /**
         * Gets the components of {@link ICalGLib.Property}.
         * @returns Get the components of {@link ICalGLib.Property}.
         */
        get_components(): string;
        /**
         * Gets the contact of {@link ICalGLib.Property}.
         * @returns Get the contact of {@link ICalGLib.Property}.
         */
        get_contact(): string;
        /**
         * Gets the created time of {@link ICalGLib.Property}.
         * @returns Get the created time of {@link ICalGLib.Property}.
         */
        get_created(): Time;
        /**
         * Gets the csid of {@link ICalGLib.Property}.
         * @returns Get the csid of {@link ICalGLib.Property}.
         */
        get_csid(): string;
        /**
         * Gets the datemax time of {@link ICalGLib.Property}.
         * @returns Get the datemax time of {@link ICalGLib.Property}.
         */
        get_datemax(): Time;
        /**
         * Gets the datemin time of {@link ICalGLib.Property}.
         * @returns Get the datemin time of {@link ICalGLib.Property}.
         */
        get_datemin(): Time;
        /**
         * If the property is a DATE-TIME with a TZID parameter and a corresponding VTIMEZONE is present in the
         * component, the returned component will already be in the correct timezone; otherwise the caller is responsible
         * for converting it.
         *
         * The `comp` can be NULL, in which case the parent of the `prop` is used to find
         * the corresponding time zone.
         * @param comp An {@link ICalGLib.Component}
         * @returns Get a DATE or DATE-TIME property as an {@link ICalGLib.Time}.
         */
        get_datetime_with_component(comp?: Component | null): Time;
        /**
         * Gets the decreed of {@link ICalGLib.Property}.
         * @returns Get the decreed of {@link ICalGLib.Property}.
         */
        get_decreed(): string;
        /**
         * Gets the defaultcharset of {@link ICalGLib.Property}.
         * @returns Get the defaultcharset of {@link ICalGLib.Property}.
         */
        get_defaultcharset(): string;
        /**
         * Gets the defaultlocale of {@link ICalGLib.Property}.
         * @returns Get the defaultlocale of {@link ICalGLib.Property}.
         */
        get_defaultlocale(): string;
        /**
         * Gets the defaulttzid of {@link ICalGLib.Property}.
         * @returns Get the defaulttzid of {@link ICalGLib.Property}.
         */
        get_defaulttzid(): string;
        /**
         * Gets the defaultvcars of {@link ICalGLib.Property}.
         * @returns Get the defaultvcars of {@link ICalGLib.Property}.
         */
        get_defaultvcars(): string;
        /**
         * Gets the deny of {@link ICalGLib.Property}.
         * @returns Get the deny of {@link ICalGLib.Property}.
         */
        get_deny(): string;
        /**
         * Gets the description of {@link ICalGLib.Property}.
         * @returns Get the description of {@link ICalGLib.Property}.
         */
        get_description(): string;
        /**
         * Gets the dtend time of {@link ICalGLib.Property}.
         * @returns Get the dtend time of {@link ICalGLib.Property}.
         */
        get_dtend(): Time;
        /**
         * Gets the dtstamp time of {@link ICalGLib.Property}.
         * @returns Get the dtstamp time of {@link ICalGLib.Property}.
         */
        get_dtstamp(): Time;
        /**
         * Gets the dtstart time of {@link ICalGLib.Property}.
         * @returns Get the dtstart time of {@link ICalGLib.Property}.
         */
        get_dtstart(): Time;
        /**
         * Gets the due time of {@link ICalGLib.Property}.
         * @returns Get the due time of {@link ICalGLib.Property}.
         */
        get_due(): Time;
        /**
         * Gets the duration of {@link ICalGLib.Property}.
         * @returns Get the duration of {@link ICalGLib.Property}.
         */
        get_duration(): Duration;
        /**
         * Gets the estimatedduration of {@link ICalGLib.Property}.
         * @returns Get the estimatedduration of {@link ICalGLib.Property}.
         */
        get_estimatedduration(): Duration;
        /**
         * Gets the exdate time of {@link ICalGLib.Property}.
         * @returns Get the exdate time of {@link ICalGLib.Property}.
         */
        get_exdate(): Time;
        /**
         * Gets the expand of {@link ICalGLib.Property}.
         * @returns Get the expand of {@link ICalGLib.Property}.
         */
        get_expand(): number;
        /**
         * Gets the exrule recurrence type of {@link ICalGLib.Property}.
         * @returns Get the exrule recurrence type of {@link ICalGLib.Property}.
         */
        get_exrule(): Recurrence;
        /**
         * Gets the first {@link ICalGLib.Parameter} from the parent {@link ICalGLib.Property}.
         * @param kind The target kind of {@link ICalGLib.Parameter} to be retrieved
         * @returns The first {@link ICalGLib.Parameter} of `prop`.
         */
        get_first_parameter(kind: ParameterKind | null): Parameter;
        /**
         * Gets the freebusy period type of {@link ICalGLib.Property}.
         * @returns Get the freebusy period type of {@link ICalGLib.Property}.
         */
        get_freebusy(): Period;
        /**
         * Gets the geo type of {@link ICalGLib.Property}.
         * @returns Get the geo type of {@link ICalGLib.Property}.
         */
        get_geo(): Geo;
        /**
         * Gets the grant of {@link ICalGLib.Property}.
         * @returns Get the grant of {@link ICalGLib.Property}.
         */
        get_grant(): string;
        /**
         * Gets the itipversion of {@link ICalGLib.Property}.
         * @returns Get the itipversion of {@link ICalGLib.Property}.
         */
        get_itipversion(): string;
        /**
         * Gets the lastmodified time of {@link ICalGLib.Property}.
         * @returns Get the lastmodified time of {@link ICalGLib.Property}.
         */
        get_lastmodified(): Time;
        /**
         * Gets the location of {@link ICalGLib.Property}.
         * @returns Get the location of {@link ICalGLib.Property}.
         */
        get_location(): string;
        /**
         * Gets the maxcomponentsize of {@link ICalGLib.Property}.
         * @returns Get the maxcomponentsize of {@link ICalGLib.Property}.
         */
        get_maxcomponentsize(): number;
        /**
         * Gets the maxdate time of {@link ICalGLib.Property}.
         * @returns Get the maxdate time of {@link ICalGLib.Property}.
         */
        get_maxdate(): Time;
        /**
         * Gets the maxresults of {@link ICalGLib.Property}.
         * @returns Get the maxresults of {@link ICalGLib.Property}.
         */
        get_maxresults(): number;
        /**
         * Gets the maxresultssize of {@link ICalGLib.Property}.
         * @returns Get the maxresultssize of {@link ICalGLib.Property}.
         */
        get_maxresultssize(): number;
        /**
         * Gets the method of {@link ICalGLib.Property}.
         * @returns Get the method of {@link ICalGLib.Property}.
         */
        get_method(): PropertyMethod;
        /**
         * Gets the mindate time of {@link ICalGLib.Property}.
         * @returns Get the mindate time of {@link ICalGLib.Property}.
         */
        get_mindate(): Time;
        /**
         * Gets the multipart of {@link ICalGLib.Property}.
         * @returns Get the multipart of {@link ICalGLib.Property}.
         */
        get_multipart(): string;
        /**
         * Gets the name of {@link ICalGLib.Property}.
         * @returns Get the name of {@link ICalGLib.Property}.
         */
        get_name(): string;
        /**
         * Gets the next {@link ICalGLib.Parameter} from the parent {@link ICalGLib.Property}.
         * @param kind The target kind of {@link ICalGLib.Parameter} to be retrieved
         * @returns The next {@link ICalGLib.Parameter} of `prop`.
         */
        get_next_parameter(kind: ParameterKind | null): Parameter;
        /**
         * Gets the organizer of {@link ICalGLib.Property}.
         * @returns Get the organizer of {@link ICalGLib.Property}.
         */
        get_organizer(): string;
        /**
         * Gets the owner of {@link ICalGLib.Property}.
         * @returns Get the owner of {@link ICalGLib.Property}.
         */
        get_owner(): string;
        /**
         * Gets the string representation of the target parameter in the {@link ICalGLib.Property}.
         * @param name The name of the target parameter
         * @returns The string representation of the parameter.
         */
        get_parameter_as_string(name: string): string;
        /**
         * Gets the parent component of the property. Use with caution. When icalproperty is deallocated, it won't
         * deallocate its parent. However the {@link ICalGLib.Component} object created using this method will be deallocated
         * (if no reference in other places). So You need to make sure there is another reference except the one
         * in {@link ICalGLib.Property}.
         * @returns The parent {@link ICalGLib.Component} of {@link ICalGLib.Property}.
         */
        get_parent(): Component | null;
        /**
         * Gets the percentcomplete of {@link ICalGLib.Property}.
         * @returns Get the percentcomplete of {@link ICalGLib.Property}.
         */
        get_percentcomplete(): number;
        /**
         * Gets the permission of {@link ICalGLib.Property}.
         * @returns Get the permission of {@link ICalGLib.Property}.
         */
        get_permission(): string;
        /**
         * Gets the pollcompletion of {@link ICalGLib.Property}.
         * @returns Get the pollcompletion of {@link ICalGLib.Property}.
         */
        get_pollcompletion(): PropertyPollcompletion;
        /**
         * Gets the pollitemid of {@link ICalGLib.Property}.
         * @returns Get the pollitemid of {@link ICalGLib.Property}.
         */
        get_pollitemid(): number;
        /**
         * Gets the pollmode of {@link ICalGLib.Property}.
         * @returns Get the pollmode of {@link ICalGLib.Property}.
         */
        get_pollmode(): PropertyPollmode;
        /**
         * Gets the pollproperties of {@link ICalGLib.Property}.
         * @returns Get the pollproperties of {@link ICalGLib.Property}.
         */
        get_pollproperties(): string;
        /**
         * Gets the pollwinner of {@link ICalGLib.Property}.
         * @returns Get the pollwinner of {@link ICalGLib.Property}.
         */
        get_pollwinner(): number;
        /**
         * Gets the priority of {@link ICalGLib.Property}.
         * @returns Get the priority of {@link ICalGLib.Property}.
         */
        get_priority(): number;
        /**
         * Gets the prodid of {@link ICalGLib.Property}.
         * @returns Get the prodid of {@link ICalGLib.Property}.
         */
        get_prodid(): string;
        /**
         * Gets the property name of {@link ICalGLib.Property}.
         * @returns Property name of {@link ICalGLib.Property}.
         */
        get_property_name(): string;
        /**
         * Gets the query of {@link ICalGLib.Property}.
         * @returns Get the query of {@link ICalGLib.Property}.
         */
        get_query(): string;
        /**
         * Gets the queryid of {@link ICalGLib.Property}.
         * @returns Get the queryid of {@link ICalGLib.Property}.
         */
        get_queryid(): string;
        /**
         * Gets the querylevel of {@link ICalGLib.Property}.
         * @returns Get the querylevel of {@link ICalGLib.Property}.
         */
        get_querylevel(): PropertyQuerylevel;
        /**
         * Gets the queryname of {@link ICalGLib.Property}.
         * @returns Get the queryname of {@link ICalGLib.Property}.
         */
        get_queryname(): string;
        /**
         * Gets the rdate  of {@link ICalGLib.Property}.
         * @returns Get the rdate  of {@link ICalGLib.Property}.
         */
        get_rdate(): Datetimeperiod;
        /**
         * Gets the recuraccepted of {@link ICalGLib.Property}.
         * @returns Get the recuraccepted of {@link ICalGLib.Property}.
         */
        get_recuraccepted(): string;
        /**
         * Gets the recurexpand of {@link ICalGLib.Property}.
         * @returns Get the recurexpand of {@link ICalGLib.Property}.
         */
        get_recurexpand(): string;
        /**
         * Gets the recurlimit of {@link ICalGLib.Property}.
         * @returns Get the recurlimit of {@link ICalGLib.Property}.
         */
        get_recurlimit(): string;
        /**
         * Gets the recurrenceid time of {@link ICalGLib.Property}.
         * @returns Get the recurrenceid time of {@link ICalGLib.Property}.
         */
        get_recurrenceid(): Time;
        /**
         * Gets the relatedto of {@link ICalGLib.Property}.
         * @returns Get the relatedto of {@link ICalGLib.Property}.
         */
        get_relatedto(): string;
        /**
         * Gets the relcalid of {@link ICalGLib.Property}.
         * @returns Get the relcalid of {@link ICalGLib.Property}.
         */
        get_relcalid(): string;
        /**
         * Gets the repeat of {@link ICalGLib.Property}.
         * @returns Get the repeat of {@link ICalGLib.Property}.
         */
        get_repeat(): number;
        /**
         * Gets the replyurl of {@link ICalGLib.Property}.
         * @returns Get the replyurl of {@link ICalGLib.Property}.
         */
        get_replyurl(): string;
        /**
         * Gets the requeststatus of {@link ICalGLib.Property}.
         * @returns Get the requeststatus of {@link ICalGLib.Property}.
         */
        get_requeststatus(): Reqstat;
        /**
         * Gets the resources of {@link ICalGLib.Property}.
         * @returns Get the resources of {@link ICalGLib.Property}.
         */
        get_resources(): string;
        /**
         * Gets the response of {@link ICalGLib.Property}.
         * @returns Get the response of {@link ICalGLib.Property}.
         */
        get_response(): number;
        /**
         * Gets the restriction of {@link ICalGLib.Property}.
         * @returns Get the restriction of {@link ICalGLib.Property}.
         */
        get_restriction(): string;
        /**
         * Gets the rrule recurrence type of {@link ICalGLib.Property}.
         * @returns Get the rrule recurrence type of {@link ICalGLib.Property}.
         */
        get_rrule(): Recurrence;
        /**
         * Gets the scope of {@link ICalGLib.Property}.
         * @returns Get the scope of {@link ICalGLib.Property}.
         */
        get_scope(): string;
        /**
         * Gets the sequence of {@link ICalGLib.Property}.
         * @returns Get the sequence of {@link ICalGLib.Property}.
         */
        get_sequence(): number;
        /**
         * Gets the status of {@link ICalGLib.Property}.
         * @returns Get the status of {@link ICalGLib.Property}.
         */
        get_status(): PropertyStatus;
        /**
         * Gets the storesexpanded of {@link ICalGLib.Property}.
         * @returns Get the storesexpanded of {@link ICalGLib.Property}.
         */
        get_storesexpanded(): string;
        /**
         * Gets the summary of {@link ICalGLib.Property}.
         * @returns Get the summary of {@link ICalGLib.Property}.
         */
        get_summary(): string;
        /**
         * Gets the target of {@link ICalGLib.Property}.
         * @returns Get the target of {@link ICalGLib.Property}.
         */
        get_target(): string;
        /**
         * Gets the taskmode of {@link ICalGLib.Property}.
         * @returns Get the taskmode of {@link ICalGLib.Property}.
         */
        get_taskmode(): PropertyTaskmode;
        /**
         * Gets the transp of {@link ICalGLib.Property}.
         * @returns Get the transp of {@link ICalGLib.Property}.
         */
        get_transp(): PropertyTransp;
        /**
         * Gets the trigger period type of {@link ICalGLib.Property}.
         * @returns Get the trigger period type of {@link ICalGLib.Property}.
         */
        get_trigger(): Trigger;
        /**
         * Gets the tzid of {@link ICalGLib.Property}.
         * @returns Get the tzid of {@link ICalGLib.Property}.
         */
        get_tzid(): string;
        /**
         * Gets the tzidaliasof of {@link ICalGLib.Property}.
         * @returns Get the tzidaliasof of {@link ICalGLib.Property}.
         */
        get_tzidaliasof(): string;
        /**
         * Gets the tzname of {@link ICalGLib.Property}.
         * @returns Get the tzname of {@link ICalGLib.Property}.
         */
        get_tzname(): string;
        /**
         * Gets the tzoffsetfrom of {@link ICalGLib.Property}.
         * @returns Get the tzoffsetfrom of {@link ICalGLib.Property}.
         */
        get_tzoffsetfrom(): number;
        /**
         * Gets the tzoffsetto of {@link ICalGLib.Property}.
         * @returns Get the tzoffsetto of {@link ICalGLib.Property}.
         */
        get_tzoffsetto(): number;
        /**
         * Gets the tzuntil time of {@link ICalGLib.Property}.
         * @returns Get the tzuntil time of {@link ICalGLib.Property}.
         */
        get_tzuntil(): Time;
        /**
         * Gets the tzurl of {@link ICalGLib.Property}.
         * @returns Get the tzurl of {@link ICalGLib.Property}.
         */
        get_tzurl(): string;
        /**
         * Gets the uid of {@link ICalGLib.Property}.
         * @returns Get the uid of {@link ICalGLib.Property}.
         */
        get_uid(): string;
        /**
         * Gets the url of {@link ICalGLib.Property}.
         * @returns Get the url of {@link ICalGLib.Property}.
         */
        get_url(): string;
        /**
         * Gets the {@link ICalGLib.Value} of {@link ICalGLib.Property}.
         * @returns The {@link ICalGLib.Value} of `prop`.
         */
        get_value(): Value;
        /**
         * Gets the string representation of the value in {@link ICalGLib.Property}.
         * @returns The string representation of the value of the {@link ICalGLib.Property}.
         */
        get_value_as_string(): string;
        /**
         * Gets the version of {@link ICalGLib.Property}.
         * @returns Get the version of {@link ICalGLib.Property}.
         */
        get_version(): string;
        /**
         * Gets the voter of {@link ICalGLib.Property}.
         * @returns Get the voter of {@link ICalGLib.Property}.
         */
        get_voter(): string;
        /**
         * Gets the x of {@link ICalGLib.Property}.
         * @returns Get the x of {@link ICalGLib.Property}.
         */
        get_x(): string;
        /**
         * Gets the name of x property.
         * @returns The name of x property.
         */
        get_x_name(): string | null;
        /**
         * Gets the xlicclass of {@link ICalGLib.Property}.
         * @returns Get the xlicclass of {@link ICalGLib.Property}.
         */
        get_xlicclass(): PropertyXlicclass;
        /**
         * Gets the xlicclustercount of {@link ICalGLib.Property}.
         * @returns Get the xlicclustercount of {@link ICalGLib.Property}.
         */
        get_xlicclustercount(): string;
        /**
         * Gets the xlicerror of {@link ICalGLib.Property}.
         * @returns Get the xlicerror of {@link ICalGLib.Property}.
         */
        get_xlicerror(): string;
        /**
         * Gets the xlicmimecharset of {@link ICalGLib.Property}.
         * @returns Get the xlicmimecharset of {@link ICalGLib.Property}.
         */
        get_xlicmimecharset(): string;
        /**
         * Gets the xlicmimecid of {@link ICalGLib.Property}.
         * @returns Get the xlicmimecid of {@link ICalGLib.Property}.
         */
        get_xlicmimecid(): string;
        /**
         * Gets the xlicmimecontenttype of {@link ICalGLib.Property}.
         * @returns Get the xlicmimecontenttype of {@link ICalGLib.Property}.
         */
        get_xlicmimecontenttype(): string;
        /**
         * Gets the xlicmimeencoding of {@link ICalGLib.Property}.
         * @returns Get the xlicmimeencoding of {@link ICalGLib.Property}.
         */
        get_xlicmimeencoding(): string;
        /**
         * Gets the xlicmimefilename of {@link ICalGLib.Property}.
         * @returns Get the xlicmimefilename of {@link ICalGLib.Property}.
         */
        get_xlicmimefilename(): string;
        /**
         * Gets the xlicmimeoptinfo of {@link ICalGLib.Property}.
         * @returns Get the xlicmimeoptinfo of {@link ICalGLib.Property}.
         */
        get_xlicmimeoptinfo(): string;
        /**
         * Gets the kind of {@link ICalGLib.Property}.
         * @returns The type of {@link ICalGLib.Property}.
         */
        isa(): PropertyKind;
        /**
         * Checks whether the native part of {@link ICalGLib.Property} is of the type icalproperty.
         * @returns 1 if the native part of `property` is of the type icalproperty, 0 if not.
         */
        isa_property(): number;
        /**
         * Removes the target kind of the parameters in the {@link ICalGLib.Property}.
         * @param kind The {@link ICalGLib.ParameterKind} to be removed
         */
        remove_parameter_by_kind(kind: ParameterKind | null): void;
        /**
         * Removes parameter in the {@link ICalGLib.Property} by name.
         * @param name The name of the parameter to be removed
         */
        remove_parameter_by_name(name: string): void;
        /**
         * Removes the parameter in the {@link ICalGLib.Property} by ref.
         * @param param The {@link ICalGLib.Parameter} to be removed
         */
        remove_parameter_by_ref(param: Parameter): void;
        /**
         * Sets the acceptresponse for the {@link ICalGLib.Property}.
         * @param v The acceptresponse
         */
        set_acceptresponse(v: string): void;
        /**
         * Sets the acknowledged time for the {@link ICalGLib.Property}.
         * @param v The acknowledgement time
         */
        set_acknowledged(v: Time): void;
        /**
         * Sets the action for the {@link ICalGLib.Property}.
         * @param v The action
         */
        set_action(v: PropertyAction | null): void;
        /**
         * Sets the allowconflict for the {@link ICalGLib.Property}.
         * @param v The allowconflict
         */
        set_allowconflict(v: string): void;
        /**
         * Sets the attach for the {@link ICalGLib.Property}.
         * @param v The attach
         */
        set_attach(v: Attach): void;
        /**
         * Sets the attendee for the {@link ICalGLib.Property}.
         * @param v The attendee
         */
        set_attendee(v: string): void;
        /**
         * Sets the busytype for the {@link ICalGLib.Property}.
         * @param v The busytype
         */
        set_busytype(v: PropertyBusytype | null): void;
        /**
         * Sets the calid for the {@link ICalGLib.Property}.
         * @param v The calid
         */
        set_calid(v: string): void;
        /**
         * Sets the calmaster for the {@link ICalGLib.Property}.
         * @param v The calmaster
         */
        set_calmaster(v: string): void;
        /**
         * Sets the calscale for the {@link ICalGLib.Property}.
         * @param v The calscale
         */
        set_calscale(v: string): void;
        /**
         * Sets the capversion for the {@link ICalGLib.Property}.
         * @param v The capversion
         */
        set_capversion(v: string): void;
        /**
         * Sets the carid for the {@link ICalGLib.Property}.
         * @param v The carid
         */
        set_carid(v: string): void;
        /**
         * Sets the carlevel for the {@link ICalGLib.Property}.
         * @param v The carlevel
         */
        set_carlevel(v: PropertyCarlevel | null): void;
        /**
         * Sets the categories for the {@link ICalGLib.Property}.
         * @param v The categories
         */
        set_categories(v: string): void;
        /**
         * Sets the class for the {@link ICalGLib.Property}.
         * @param v The class
         */
        set_class(v: Property_Class | null): void;
        /**
         * Sets the cmd for the {@link ICalGLib.Property}.
         * @param v The cmd
         */
        set_cmd(v: PropertyCmd | null): void;
        /**
         * Sets the color for the `prop`.
         * @param v The color
         */
        set_color(v: string): void;
        /**
         * Sets the comment for the {@link ICalGLib.Property}.
         * @param v The comment
         */
        set_comment(v: string): void;
        /**
         * Sets the completed time for the {@link ICalGLib.Property}.
         * @param v The completed time
         */
        set_completed(v: Time): void;
        /**
         * Sets the components for the {@link ICalGLib.Property}.
         * @param v The components
         */
        set_components(v: string): void;
        /**
         * Sets the contact for the {@link ICalGLib.Property}.
         * @param v The contact
         */
        set_contact(v: string): void;
        /**
         * Sets the created time for the {@link ICalGLib.Property}.
         * @param v The created time
         */
        set_created(v: Time): void;
        /**
         * Sets the csid for the {@link ICalGLib.Property}.
         * @param v The csid
         */
        set_csid(v: string): void;
        /**
         * Sets the datemax time for the {@link ICalGLib.Property}.
         * @param v The datemax time
         */
        set_datemax(v: Time): void;
        /**
         * Sets the datemin time for the {@link ICalGLib.Property}.
         * @param v The datemin time
         */
        set_datemin(v: Time): void;
        /**
         * Sets the decreed for the {@link ICalGLib.Property}.
         * @param v The decreed
         */
        set_decreed(v: string): void;
        /**
         * Sets the defaultcharset for the {@link ICalGLib.Property}.
         * @param v The defaultcharset
         */
        set_defaultcharset(v: string): void;
        /**
         * Sets the defaultlocale for the {@link ICalGLib.Property}.
         * @param v The defaultlocale
         */
        set_defaultlocale(v: string): void;
        /**
         * Sets the defaulttzid for the {@link ICalGLib.Property}.
         * @param v The defaulttzid
         */
        set_defaulttzid(v: string): void;
        /**
         * Sets the defaultvcars for the {@link ICalGLib.Property}.
         * @param v The defaultvcars
         */
        set_defaultvcars(v: string): void;
        /**
         * Sets the deny for the {@link ICalGLib.Property}.
         * @param v The deny
         */
        set_deny(v: string): void;
        /**
         * Sets the description for the {@link ICalGLib.Property}.
         * @param v The description
         */
        set_description(v: string): void;
        /**
         * Sets the dtend time for the {@link ICalGLib.Property}.
         * @param v The dtend time
         */
        set_dtend(v: Time): void;
        /**
         * Sets the dtstamp time for the {@link ICalGLib.Property}.
         * @param v The dtstamp time
         */
        set_dtstamp(v: Time): void;
        /**
         * Sets the dtstart time for the {@link ICalGLib.Property}.
         * @param v The dtstart time
         */
        set_dtstart(v: Time): void;
        /**
         * Sets the due time for the {@link ICalGLib.Property}.
         * @param v The due time
         */
        set_due(v: Time): void;
        /**
         * Sets the duration for the {@link ICalGLib.Property}.
         * @param v The duration
         */
        set_duration(v: Duration): void;
        /**
         * Sets the estimatedduration for the {@link ICalGLib.Property}.
         * @param v The estimatedduration
         */
        set_estimatedduration(v: Duration): void;
        /**
         * Sets the exdate time for the {@link ICalGLib.Property}.
         * @param v The exdate time
         */
        set_exdate(v: Time): void;
        /**
         * Sets the expand for the {@link ICalGLib.Property}.
         * @param v The expand
         */
        set_expand(v: number): void;
        /**
         * Sets the exrule time for the {@link ICalGLib.Property}.
         * @param v The exrule recurrence type
         */
        set_exrule(v: Recurrence): void;
        /**
         * Sets the freebusy time for the {@link ICalGLib.Property}.
         * @param v The freebusy period type
         */
        set_freebusy(v: Period): void;
        /**
         * Sets the geo for the {@link ICalGLib.Property}.
         * @param v The geo type
         */
        set_geo(v: Geo): void;
        /**
         * Sets the grant for the {@link ICalGLib.Property}.
         * @param v The grant
         */
        set_grant(v: string): void;
        /**
         * Sets the itipversion for the {@link ICalGLib.Property}.
         * @param v The itipversion
         */
        set_itipversion(v: string): void;
        /**
         * Sets the lastmodified time for the {@link ICalGLib.Property}.
         * @param v The lastmodified time
         */
        set_lastmodified(v: Time): void;
        /**
         * Sets the location for the {@link ICalGLib.Property}.
         * @param v The location
         */
        set_location(v: string): void;
        /**
         * Sets the maxcomponentsize for the {@link ICalGLib.Property}.
         * @param v The maxcomponentsize
         */
        set_maxcomponentsize(v: number): void;
        /**
         * Sets the maxdate time for the {@link ICalGLib.Property}.
         * @param v The maxdate time
         */
        set_maxdate(v: Time): void;
        /**
         * Sets the maxresults for the {@link ICalGLib.Property}.
         * @param v The maxresults
         */
        set_maxresults(v: number): void;
        /**
         * Sets the maxresultssize for the {@link ICalGLib.Property}.
         * @param v The maxresultssize
         */
        set_maxresultssize(v: number): void;
        /**
         * Sets the method for the {@link ICalGLib.Property}.
         * @param v The method
         */
        set_method(v: PropertyMethod | null): void;
        /**
         * Sets the mindate time for the {@link ICalGLib.Property}.
         * @param v The mindate time
         */
        set_mindate(v: Time): void;
        /**
         * Sets the multipart for the {@link ICalGLib.Property}.
         * @param v The multipart
         */
        set_multipart(v: string): void;
        /**
         * Sets the name for the {@link ICalGLib.Property}.
         * @param v The name
         */
        set_name(v: string): void;
        /**
         * Sets the organizer for the {@link ICalGLib.Property}.
         * @param v The organizer
         */
        set_organizer(v: string): void;
        /**
         * Sets the owner for the {@link ICalGLib.Property}.
         * @param v The owner
         */
        set_owner(v: string): void;
        /**
         * @param args
         */
        // Conflicted with ICalGLib.Object.set_owner
        set_owner(...args: never[]): any;
        /**
         * Sets a {@link ICalGLib.Parameter} into the {@link ICalGLib.Property}. It behaves like set the copy of the {@link ICalGLib.Parameter}. Upon
         * completion the native part of {@link ICalGLib.Parameter} will be set to NULL.
         * @param parameter The parameter to be set into `prop`
         */
        set_parameter(parameter: Parameter): void;
        /**
         * Sets the {@link ICalGLib.Property} with the parameter defined by the name and value.
         * @param name The name of the parameter
         * @param value The value of the parameter
         */
        set_parameter_from_string(name: string, value: string): void;
        /**
         * Sets the parent {@link ICalGLib.Component} of the specified {@link ICalGLib.Property}.
         * @param component An {@link ICalGLib.Component}
         */
        set_parent(component?: Component | null): void;
        /**
         * Sets the percentcomplete for the {@link ICalGLib.Property}.
         * @param v The percentcomplete
         */
        set_percentcomplete(v: number): void;
        /**
         * Sets the permission for the {@link ICalGLib.Property}.
         * @param v The permission
         */
        set_permission(v: string): void;
        /**
         * Sets the pollcompletion for the {@link ICalGLib.Property}.
         * @param v The pollcompletion
         */
        set_pollcompletion(v: PropertyPollcompletion | null): void;
        /**
         * Sets the pollitemid for the {@link ICalGLib.Property}.
         * @param v The pollitemid
         */
        set_pollitemid(v: number): void;
        /**
         * Sets the pollmode for the {@link ICalGLib.Property}.
         * @param v The pollmode
         */
        set_pollmode(v: PropertyPollmode | null): void;
        /**
         * Sets the pollproperties for the {@link ICalGLib.Property}.
         * @param v The pollproperties
         */
        set_pollproperties(v: string): void;
        /**
         * Sets the pollwinner for the {@link ICalGLib.Property}.
         * @param v The pollwinner
         */
        set_pollwinner(v: number): void;
        /**
         * Sets the priority for the {@link ICalGLib.Property}.
         * @param v The priority
         */
        set_priority(v: number): void;
        /**
         * Sets the prodid for the {@link ICalGLib.Property}.
         * @param v The prodid
         */
        set_prodid(v: string): void;
        /**
         * Sets the query for the {@link ICalGLib.Property}.
         * @param v The query
         */
        set_query(v: string): void;
        /**
         * Sets the queryid for the {@link ICalGLib.Property}.
         * @param v The queryid
         */
        set_queryid(v: string): void;
        /**
         * Sets the querylevel for the {@link ICalGLib.Property}.
         * @param v The querylevel
         */
        set_querylevel(v: PropertyQuerylevel | null): void;
        /**
         * Sets the queryname for the {@link ICalGLib.Property}.
         * @param v The queryname
         */
        set_queryname(v: string): void;
        /**
         * Sets the rdate for the {@link ICalGLib.Property}.
         * @param v The rdate
         */
        set_rdate(v: Datetimeperiod): void;
        /**
         * Sets the recuraccepted for the {@link ICalGLib.Property}.
         * @param v The recuraccepted
         */
        set_recuraccepted(v: string): void;
        /**
         * Sets the recurexpand for the {@link ICalGLib.Property}.
         * @param v The recurexpand
         */
        set_recurexpand(v: string): void;
        /**
         * Sets the recurlimit for the {@link ICalGLib.Property}.
         * @param v The recurlimit
         */
        set_recurlimit(v: string): void;
        /**
         * Sets the recurrenceid time for the {@link ICalGLib.Property}.
         * @param v The recurrenceid time
         */
        set_recurrenceid(v: Time): void;
        /**
         * Sets the relatedto for the {@link ICalGLib.Property}.
         * @param v The relatedto
         */
        set_relatedto(v: string): void;
        /**
         * Sets the relcalid for the {@link ICalGLib.Property}.
         * @param v The relcalid
         */
        set_relcalid(v: string): void;
        /**
         * Sets the repeat for the {@link ICalGLib.Property}.
         * @param v The repeat
         */
        set_repeat(v: number): void;
        /**
         * Sets the replyurl for the {@link ICalGLib.Property}.
         * @param v The replyurl
         */
        set_replyurl(v: string): void;
        /**
         * Sets the requeststatus for the {@link ICalGLib.Property}.
         * @param v The requeststatus
         */
        set_requeststatus(v: Reqstat): void;
        /**
         * Sets the resources for the {@link ICalGLib.Property}.
         * @param v The resources
         */
        set_resources(v: string): void;
        /**
         * Sets the response for the {@link ICalGLib.Property}.
         * @param v The response
         */
        set_response(v: number): void;
        /**
         * Sets the restriction for the {@link ICalGLib.Property}.
         * @param v The restriction
         */
        set_restriction(v: string): void;
        /**
         * Sets the rrule for the {@link ICalGLib.Property}.
         * @param v The rrule recurrence type
         */
        set_rrule(v: Recurrence): void;
        /**
         * Sets the scope for the {@link ICalGLib.Property}.
         * @param v The scope
         */
        set_scope(v: string): void;
        /**
         * Sets the sequence for the {@link ICalGLib.Property}.
         * @param v The sequence
         */
        set_sequence(v: number): void;
        /**
         * Sets the status for the {@link ICalGLib.Property}.
         * @param v The status
         */
        set_status(v: PropertyStatus | null): void;
        /**
         * Sets the storesexpanded for the {@link ICalGLib.Property}.
         * @param v The storesexpanded
         */
        set_storesexpanded(v: string): void;
        /**
         * Sets the summary for the {@link ICalGLib.Property}.
         * @param v The summary
         */
        set_summary(v: string): void;
        /**
         * Sets the target for the {@link ICalGLib.Property}.
         * @param v The target
         */
        set_target(v: string): void;
        /**
         * Sets the taskmode for the {@link ICalGLib.Property}.
         * @param v The taskmode
         */
        set_taskmode(v: PropertyTaskmode | null): void;
        /**
         * Sets the transp for the {@link ICalGLib.Property}.
         * @param v The transp
         */
        set_transp(v: PropertyTransp | null): void;
        /**
         * Sets the trigger time for the {@link ICalGLib.Property}.
         * @param v The trigger period type
         */
        set_trigger(v: Trigger): void;
        /**
         * Sets the tzid for the {@link ICalGLib.Property}.
         * @param v The tzid
         */
        set_tzid(v: string): void;
        /**
         * Sets the tzidaliasof for the {@link ICalGLib.Property}.
         * @param v The tzidaliasof
         */
        set_tzidaliasof(v: string): void;
        /**
         * Sets the tzname for the {@link ICalGLib.Property}.
         * @param v The tzname
         */
        set_tzname(v: string): void;
        /**
         * Sets the tzoffsetfrom for the {@link ICalGLib.Property}.
         * @param v The tzoffsetfrom
         */
        set_tzoffsetfrom(v: number): void;
        /**
         * Sets the tzoffsetto for the {@link ICalGLib.Property}.
         * @param v The tzoffsetto
         */
        set_tzoffsetto(v: number): void;
        /**
         * Sets the tzuntil time for the {@link ICalGLib.Property}.
         * @param v The acknowledgement time
         */
        set_tzuntil(v: Time): void;
        /**
         * Sets the tzurl for the {@link ICalGLib.Property}.
         * @param v The tzurl
         */
        set_tzurl(v: string): void;
        /**
         * Sets the uid for the {@link ICalGLib.Property}.
         * @param v The uid
         */
        set_uid(v: string): void;
        /**
         * Sets the url for the {@link ICalGLib.Property}.
         * @param v The url
         */
        set_url(v: string): void;
        /**
         * Sets the {@link ICalGLib.Property} with the {@link ICalGLib.Value}.
         * @param value The {@link ICalGLib.Value} will be set as the property of `prop`
         */
        set_value(value: Value): void;
        /**
         * Sets the {@link ICalGLib.Property} with the {@link ICalGLib.Value} constructed from string.
         * @param value The value used to construct the {@link ICalGLib.Value}
         * @param kind The kind used to construct the {@link ICalGLib.Value}
         */
        set_value_from_string(value: string, kind: string): void;
        /**
         * Sets the version for the {@link ICalGLib.Property}.
         * @param v The version
         */
        set_version(v: string): void;
        /**
         * Sets the voter for the {@link ICalGLib.Property}.
         * @param v The voter
         */
        set_voter(v: string): void;
        /**
         * Sets the x for the {@link ICalGLib.Property}.
         * @param v The x
         */
        set_x(v: string): void;
        /**
         * Sets the name of x property for the {@link ICalGLib.Property}.
         * @param name The name string
         */
        set_x_name(name: string): void;
        /**
         * Sets the xlicclass for the {@link ICalGLib.Property}.
         * @param v The xlicclass
         */
        set_xlicclass(v: PropertyXlicclass | null): void;
        /**
         * Sets the xlicclustercount for the {@link ICalGLib.Property}.
         * @param v The xlicclustercount
         */
        set_xlicclustercount(v: string): void;
        /**
         * Sets the xlicerror for the {@link ICalGLib.Property}.
         * @param v The xlicerror
         */
        set_xlicerror(v: string): void;
        /**
         * Sets the xlicmimecharset for the {@link ICalGLib.Property}.
         * @param v The xlicmimecharset
         */
        set_xlicmimecharset(v: string): void;
        /**
         * Sets the xlicmimecid for the {@link ICalGLib.Property}.
         * @param v The xlicmimecid
         */
        set_xlicmimecid(v: string): void;
        /**
         * Sets the xlicmimecontenttype for the {@link ICalGLib.Property}.
         * @param v The xlicmimecontenttype
         */
        set_xlicmimecontenttype(v: string): void;
        /**
         * Sets the xlicmimeencoding for the {@link ICalGLib.Property}.
         * @param v The xlicmimeencoding
         */
        set_xlicmimeencoding(v: string): void;
        /**
         * Sets the xlicmimefilename for the {@link ICalGLib.Property}.
         * @param v The xlicmimefilename
         */
        set_xlicmimefilename(v: string): void;
        /**
         * Sets the xlicmimeoptinfo for the {@link ICalGLib.Property}.
         * @param v The xlicmimeoptinfo
         */
        set_xlicmimeoptinfo(v: string): void;
    }

    namespace RecurIterator {
        // Signal signatures
        interface SignalSignatures extends Object.SignalSignatures {
            'notify::always-destroy': (pspec: GObject.ParamSpec) => void;
            'notify::is-global-memory': (pspec: GObject.ParamSpec) => void;
            'notify::native': (pspec: GObject.ParamSpec) => void;
            'notify::native-destroy-func': (pspec: GObject.ParamSpec) => void;
            'notify::owner': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends Object.ConstructorProps {}
    }

    /**
     * This is the ICalRecurIterator instance.
     * @gir-type Class
     */
    class RecurIterator extends Object {
        static $gtype: GObject.GType<RecurIterator>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: RecurIterator.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<RecurIterator.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](rule: Recurrence, dtstart: Time): RecurIterator;

        // Signals

        /** @signal */
        connect<K extends keyof RecurIterator.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, RecurIterator.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof RecurIterator.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, RecurIterator.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof RecurIterator.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<RecurIterator.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * Gets the next occurrence from an iterator.
         * @returns The next occurrence according to this recurrence rule.
         */
        next(): Time;
        /**
         * Sets the date-time at which the iterator will start, where 'start' is a value between DTSTART and UNTIL.
         * Note:
         * CAN NOT be used with RRULEs that contain COUNT.
         * @param start The date-time to move the iterator to
         * @returns 1 if succeeded, 0 if failed, like when the recurrence type is unsupported.
         */
        set_start(start: Time): number;
    }

    namespace Recurrence {
        // Signal signatures
        interface SignalSignatures extends Object.SignalSignatures {
            'notify::always-destroy': (pspec: GObject.ParamSpec) => void;
            'notify::is-global-memory': (pspec: GObject.ParamSpec) => void;
            'notify::native': (pspec: GObject.ParamSpec) => void;
            'notify::native-destroy-func': (pspec: GObject.ParamSpec) => void;
            'notify::owner': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends Object.ConstructorProps {}
    }

    /**
     * This is the ICalRecurrence instance.
     * @gir-type Class
     */
    class Recurrence extends Object {
        static $gtype: GObject.GType<Recurrence>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Recurrence.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<Recurrence.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): Recurrence;

        static new_from_string(str: string): Recurrence;

        // Signals

        /** @signal */
        connect<K extends keyof Recurrence.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Recurrence.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof Recurrence.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Recurrence.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof Recurrence.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Recurrence.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Static methods

        /**
         * Decodes a day to a weekday in a week.
         * @param day The encoded day which represents the day of the week and Nth day of the week
         */
        static day_day_of_week(day: number): RecurrenceWeekday;
        /**
         * Decodes a day to a position of the weekday.
         * @param day The encoded day which represents the day of the week and Nth day of the week
         */
        static day_position(day: number): number;
        /**
         * Converts a string representation to an enum representation for the frequency.
         * @param str The string representation of the frequency
         */
        static frequency_from_string(str: string): RecurrenceFrequency;
        /**
         * Converts a enum representation to a string representation for the frequency.
         * @param kind The frequency enum
         */
        static frequency_to_string(kind: RecurrenceFrequency): string;
        /**
         * Decodes a month and check whether it is a leap month.
         * @param month The month to be decoded
         */
        static month_is_leap(month: number): boolean;
        /**
         * @param month The month to be decoded
         */
        static month_month(month: number): number;
        /**
         * Checks whether rscale is supported.
         */
        static rscale_is_supported(): boolean;
        /**
         * Gets an array of calendars supporting rscale (currently always return NULL).
         */
        static rscale_supported_calendars(): Array;
        /**
         * Converts a string representation to an enum representation for the skip.
         * @param str The string representation of the skip
         */
        static skip_from_string(str: string): RecurrenceSkip;
        /**
         * Converts a enum representation to a string representation for the skip.
         * @param kind The frequency enum
         */
        static skip_to_string(kind: RecurrenceSkip): string;
        /**
         * Converts a string representation to an enum representation for the weekday.
         * @param str The string representation of the weekday
         */
        static weekday_from_string(str: string): RecurrenceWeekday;
        /**
         * Converts a enum representation to a string representation for the weekday.
         * @param kind The frequency enum
         */
        static weekday_to_string(kind: RecurrenceWeekday): string;

        // Methods

        /**
         * Resets an {@link ICalGLib.Recurrence}.
         */
        clear(): void;
        /**
         * Gets the by_day value at index `index`. The index should be less than {@link ICalGLib.RecurrenceArraySizes.DAY_SIZE}.
         * @param index The index in by_day of {@link ICalGLib.Recurrence}, less than {@link ICalGLib.RecurrenceArraySizes.DAY_SIZE}
         * @returns The by_day of {@link ICalGLib.Recurrence} at index `index`.
         */
        get_by_day(index: number): number;
        /**
         * Gets the by_day array from {@link ICalGLib.Recurrence}. The array size is I_CAL_BY_DAY_SIZE.
         * @returns The by_day of {@link ICalGLib.Recurrence}.
         */
        get_by_day_array(): number[];
        /**
         * Gets the by_hour value at index `index`. The index should be less than {@link ICalGLib.RecurrenceArraySizes.HOUR_SIZE}.
         * @param index The index in by_hour of {@link ICalGLib.Recurrence}, less than {@link ICalGLib.RecurrenceArraySizes.HOUR_SIZE}
         * @returns The by_hour of {@link ICalGLib.Recurrence} at index `index`.
         */
        get_by_hour(index: number): number;
        /**
         * Gets the by_hour array from {@link ICalGLib.Recurrence}. The array size is I_CAL_BY_HOUR_SIZE.
         * @returns The by_hour of {@link ICalGLib.Recurrence}.
         */
        get_by_hour_array(): number[];
        /**
         * Gets the by_minute value at index `index`. The index should be less than {@link ICalGLib.RecurrenceArraySizes.MINUTE_SIZE}.
         * @param index The index in by_minute of {@link ICalGLib.Recurrence}, less than {@link ICalGLib.RecurrenceArraySizes.MINUTE_SIZE}
         * @returns The by_minute of {@link ICalGLib.Recurrence} at index `index`.
         */
        get_by_minute(index: number): number;
        /**
         * Gets the by_minute array from {@link ICalGLib.Recurrence}. The array size is I_CAL_BY_MINUTE_SIZE.
         * @returns The by_minute of {@link ICalGLib.Recurrence}.
         */
        get_by_minute_array(): number[];
        /**
         * Gets the by_month value at index `index`. The index should be less than {@link ICalGLib.RecurrenceArraySizes.MONTH_SIZE}.
         * @param index The index in by_month of {@link ICalGLib.Recurrence}, less than {@link ICalGLib.RecurrenceArraySizes.MONTH_SIZE}
         * @returns The by_month of {@link ICalGLib.Recurrence} at index `index`.
         */
        get_by_month(index: number): number;
        /**
         * Gets the by_month array from {@link ICalGLib.Recurrence}. The array size is I_CAL_BY_MONTH_SIZE.
         * @returns The by_month of {@link ICalGLib.Recurrence}.
         */
        get_by_month_array(): number[];
        /**
         * Gets the by_month_day value at index `index`. The index should be less than {@link ICalGLib.RecurrenceArraySizes.MONTHDAY_SIZE}.
         * @param index The index in by_month_day of {@link ICalGLib.Recurrence}, less than {@link ICalGLib.RecurrenceArraySizes.MONTHDAY_SIZE}
         * @returns The by_month_day of {@link ICalGLib.Recurrence} at index `index`.
         */
        get_by_month_day(index: number): number;
        /**
         * Gets the by_month_day array from {@link ICalGLib.Recurrence}. The array size is I_CAL_BY_MONTHDAY_SIZE.
         * @returns The by_month_day of {@link ICalGLib.Recurrence}.
         */
        get_by_month_day_array(): number[];
        /**
         * Gets the by_second value at index `index`. The index should be less than {@link ICalGLib.RecurrenceArraySizes.SECOND_SIZE}.
         * @param index The index in by_second of {@link ICalGLib.Recurrence}, less than {@link ICalGLib.RecurrenceArraySizes.SECOND_SIZE}
         * @returns The by_second of {@link ICalGLib.Recurrence} at index `index`.
         */
        get_by_second(index: number): number;
        /**
         * Gets the by_second array from {@link ICalGLib.Recurrence}. The array size if I_CAL_BY_SECOND_SIZE.
         * @returns The by_second of {@link ICalGLib.Recurrence}.
         */
        get_by_second_array(): number[];
        /**
         * Gets the by_set_pos value at index `index`. The index should be less than {@link ICalGLib.RecurrenceArraySizes.SETPOS_SIZE}.
         * @param index The index in by_set_pos of {@link ICalGLib.Recurrence}, less than {@link ICalGLib.RecurrenceArraySizes.SETPOS_SIZE}
         * @returns The by_week_no of {@link ICalGLib.Recurrence} at index `index`.
         */
        get_by_set_pos(index: number): number;
        /**
         * Gets the by_set_pos array from {@link ICalGLib.Recurrence}. The array size is I_CAL_BY_SETPOS_SIZE.
         * @returns The by_set_pos of {@link ICalGLib.Recurrence}.
         */
        get_by_set_pos_array(): number[];
        /**
         * Gets the by_week_no value at index `index`. The index should be less than {@link ICalGLib.RecurrenceArraySizes.WEEKNO_SIZE}.
         * @param index The index in by_week_no of {@link ICalGLib.Recurrence}, less than {@link ICalGLib.RecurrenceArraySizes.WEEKNO_SIZE}
         * @returns The by_week_no of {@link ICalGLib.Recurrence} at index `index`.
         */
        get_by_week_no(index: number): number;
        /**
         * Gets the by_week_no array from {@link ICalGLib.Recurrence}. The array size is I_CAL_BY_WEEKNO_SIZE.
         * @returns The by_week_no of {@link ICalGLib.Recurrence}.
         */
        get_by_week_no_array(): number[];
        /**
         * Gets the by_year_day value at index `index`. The index should be less than {@link ICalGLib.RecurrenceArraySizes.YEARDAY_SIZE}.
         * @param index The index in by_year_day of {@link ICalGLib.Recurrence}, less than {@link ICalGLib.RecurrenceArraySizes.YEARDAY_SIZE}
         * @returns The by_year_day of {@link ICalGLib.Recurrence} at index `index`.
         */
        get_by_year_day(index: number): number;
        /**
         * Gets the by_year_day array from {@link ICalGLib.Recurrence}. The array size is I_CAL_BY_YEARDAY_SIZE.
         * @returns The by_year_day of {@link ICalGLib.Recurrence}.
         */
        get_by_year_day_array(): number[];
        /**
         * Gets the count from {@link ICalGLib.Recurrence}.
         * @returns The count of {@link ICalGLib.Recurrence}.
         */
        get_count(): number;
        /**
         * Gets the freq from {@link ICalGLib.Recurrence}.
         * @returns The freq of {@link ICalGLib.Recurrence}.
         */
        get_freq(): RecurrenceFrequency;
        /**
         * Gets the interval from {@link ICalGLib.Recurrence}.
         * @returns The interval of {@link ICalGLib.Recurrence}.
         */
        get_interval(): number;
        /**
         * Gets the until from {@link ICalGLib.Recurrence}.
         * @returns The until of {@link ICalGLib.Recurrence}.
         */
        get_until(): Time;
        /**
         * Gets the week_start from {@link ICalGLib.Recurrence}.
         * @returns The week_start of {@link ICalGLib.Recurrence}.
         */
        get_week_start(): RecurrenceWeekday;
        /**
         * Sets the by_day array from {@link ICalGLib.Recurrence} at the given index. The array size if I_CAL_BY_DAY_SIZE.
         * @param index The index in by_day of {@link ICalGLib.Recurrence}
         * @param value The value to be set into by_day of {@link ICalGLib.Recurrence}
         */
        set_by_day(index: number, value: number): void;
        /**
         * Sets the by_day array in `recur` at once. The array size can be less than I_CAL_BY_DAY_SIZE. Shorter arrays
         * are terminated with I_CAL_RECURRENCE_ARRAY_MAX value, longer arrays are truncated.
         * @param values The array of values
         */
        set_by_day_array(values: number[]): void;
        /**
         * Sets the by_hour array from {@link ICalGLib.Recurrence} at the given index. The array size is I_CAL_BY_HOUR_SIZE.
         * @param index The index in by_hour of {@link ICalGLib.Recurrence}
         * @param value The value to be set into by_hour of {@link ICalGLib.Recurrence}
         */
        set_by_hour(index: number, value: number): void;
        /**
         * Sets the by_hour array in `recur` at once. The array size can be less than I_CAL_BY_HOUR_SIZE. Shorter
         * arrays are terminated with I_CAL_RECURRENCE_ARRAY_MAX value, longer arrays are truncated.
         * @param values The array of values
         */
        set_by_hour_array(values: number[]): void;
        /**
         * Sets the by_minute array from {@link ICalGLib.Recurrence} at the given index. The array size is I_CAL_BY_MINUTE_SIZE.
         * @param index The index in by_minute of {@link ICalGLib.Recurrence}
         * @param value The value to be set into by_minute of {@link ICalGLib.Recurrence}
         */
        set_by_minute(index: number, value: number): void;
        /**
         * Sets the by_minute array in `recur` at once. The array size can be less than I_CAL_BY_MINUTE_SIZE. Shorter
         * arrays are terminated with I_CAL_RECURRENCE_ARRAY_MAX value, longer arrays are truncated.
         * @param values The array of values
         */
        set_by_minute_array(values: number[]): void;
        /**
         * Sets the by_month array from {@link ICalGLib.Recurrence} at the given index. The array size is I_CAL_BY_MONTH_SIZE.
         * @param index The index in by_month of {@link ICalGLib.Recurrence}
         * @param value The value to be set into by_month of {@link ICalGLib.Recurrence}
         */
        set_by_month(index: number, value: number): void;
        /**
         * Sets the by_month array in `recur` at once. The array size can be less than I_CAL_BY_MONTH_SIZE. Shorter
         * arrays are terminated with I_CAL_RECURRENCE_ARRAY_MAX value, longer arrays are truncated.
         * @param values The array of values
         */
        set_by_month_array(values: number[]): void;
        /**
         * Sets the by_month_day array from {@link ICalGLib.Recurrence} at the given index. The array size if I_CAL_BY_MONTHDAY_SIZE.
         * @param index The index in by_month_day of {@link ICalGLib.Recurrence}
         * @param value The value to be set into by_month_day of {@link ICalGLib.Recurrence}
         */
        set_by_month_day(index: number, value: number): void;
        /**
         * Sets the by_month_day array in `recur` at once. The array size can be less than I_CAL_BY_MONTHDAY_SIZE.
         * Shorter arrays are terminated with I_CAL_RECURRENCE_ARRAY_MAX value, longer arrays are truncated.
         * @param values The array of values
         */
        set_by_month_day_array(values: number[]): void;
        /**
         * Sets the by_second array from {@link ICalGLib.Recurrence} at the given index. The array size is I_CAL_BY_SECOND_SIZE.
         * @param index The index in by_second of {@link ICalGLib.Recurrence}, less than I_CAL_BY_SECOND_SIZE
         * @param value The value to be set into by_second of {@link ICalGLib.Recurrence}
         */
        set_by_second(index: number, value: number): void;
        /**
         * Sets the by_second array in `recur` at once. The array size can be less than I_CAL_BY_SECOND_SIZE. Shorter
         * arrays are terminated with I_CAL_RECURRENCE_ARRAY_MAX value, longer arrays are truncated.
         * @param values The array of values
         */
        set_by_second_array(values: number[]): void;
        /**
         * Sets the by_set_pos array from {@link ICalGLib.Recurrence} at the given index. The array size is I_CAL_BY_SETPOS_SIZE.
         * @param index The index in by_set_pos of {@link ICalGLib.Recurrence}
         * @param value The value to be set into by_set_pos of {@link ICalGLib.Recurrence}
         */
        set_by_set_pos(index: number, value: number): void;
        /**
         * Sets the by_set_pos array in `recur` at once. The array size can be less than I_CAL_BY_SETPOS_SIZE. Shorter
         * arrays are terminated with I_CAL_RECURRENCE_ARRAY_MAX value, longer arrays are truncated.
         * @param values The array of values
         */
        set_by_set_pos_array(values: number[]): void;
        /**
         * Sets the by_week_no array from {@link ICalGLib.Recurrence} at the given index. The array size is I_CAL_BY_WEEKNO_SIZE.
         * @param index The index in by_week_no of {@link ICalGLib.Recurrence}
         * @param value The value to be set into by_week_no of {@link ICalGLib.Recurrence}
         */
        set_by_week_no(index: number, value: number): void;
        /**
         * Sets the by_week_no array in `recur` at once. The array size can be less than I_CAL_BY_WEEKNO_SIZE. Shorter
         * arrays are terminated with I_CAL_RECURRENCE_ARRAY_MAX value, longer arrays are truncated.
         * @param values The array of values
         */
        set_by_week_no_array(values: number[]): void;
        /**
         * Sets the by_year_day array from {@link ICalGLib.Recurrence} at the given index. The array size if I_CAL_BY_YEARDAY_SIZE.
         * @param index The index in by_year_day of {@link ICalGLib.Recurrence}
         * @param value The value to be set into by_year_day of {@link ICalGLib.Recurrence}
         */
        set_by_year_day(index: number, value: number): void;
        /**
         * Sets the by_year_day array in `recur` at once. The array size can be less than I_CAL_BY_YEARDAY_SIZE.
         * Shorter arrays are terminated with I_CAL_RECURRENCE_ARRAY_MAX value, longer arrays are truncated.
         * @param values The array of values
         */
        set_by_year_day_array(values: number[]): void;
        /**
         * Sets the count from {@link ICalGLib.Recurrence}.
         * @param count The count of {@link ICalGLib.Recurrence}
         */
        set_count(count: number): void;
        /**
         * Sets the freq from {@link ICalGLib.Recurrence}.
         * @param freq The freq of {@link ICalGLib.Recurrence}
         */
        set_freq(freq: RecurrenceFrequency | null): void;
        /**
         * Sets the interval from {@link ICalGLib.Recurrence}.
         * @param interval The interval of {@link ICalGLib.Recurrence}
         */
        set_interval(interval: number): void;
        /**
         * Sets the until from {@link ICalGLib.Recurrence}.
         * @param until The until of {@link ICalGLib.Recurrence}
         */
        set_until(until: Time): void;
        /**
         * Sets the week_start from {@link ICalGLib.Recurrence}.
         * @param week_start The week_start of {@link ICalGLib.Recurrence}
         */
        set_week_start(week_start: RecurrenceWeekday | null): void;
        /**
         * Converts a {@link ICalGLib.Recurrence} to a string.
         * @returns The string representation of `recur`.
         */
        to_string(): string;
    }

    namespace Reqstat {
        // Signal signatures
        interface SignalSignatures extends Object.SignalSignatures {
            'notify::always-destroy': (pspec: GObject.ParamSpec) => void;
            'notify::is-global-memory': (pspec: GObject.ParamSpec) => void;
            'notify::native': (pspec: GObject.ParamSpec) => void;
            'notify::native-destroy-func': (pspec: GObject.ParamSpec) => void;
            'notify::owner': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends Object.ConstructorProps {}
    }

    /**
     * This is the ICalReqstat instance.
     * @gir-type Class
     */
    class Reqstat extends Object {
        static $gtype: GObject.GType<Reqstat>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Reqstat.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<Reqstat.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static new_from_string(str: string): Reqstat;

        // Signals

        /** @signal */
        connect<K extends keyof Reqstat.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Reqstat.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof Reqstat.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Reqstat.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof Reqstat.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Reqstat.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * Gets the code of {@link ICalGLib.Reqstat}.
         * @returns The code of `reqstat`.
         */
        get_code(): RequestStatus;
        /**
         * Gets the debug of {@link ICalGLib.Reqstat}.
         * @returns The debug of `reqstat`.
         */
        get_debug(): string;
        /**
         * Gets the desc of {@link ICalGLib.Reqstat}.
         * @returns The desc of `reqstat`.
         */
        get_desc(): string;
        /**
         * Sets the code of {@link ICalGLib.Reqstat}.
         * @param code The code of `reqstat`
         */
        set_code(code: RequestStatus | null): void;
        /**
         * Converts {@link ICalGLib.Reqstat} to a string representation.
         * @returns A string.
         */
        to_string(): string;
    }

    namespace Time {
        // Signal signatures
        interface SignalSignatures extends Object.SignalSignatures {
            'notify::always-destroy': (pspec: GObject.ParamSpec) => void;
            'notify::is-global-memory': (pspec: GObject.ParamSpec) => void;
            'notify::native': (pspec: GObject.ParamSpec) => void;
            'notify::native-destroy-func': (pspec: GObject.ParamSpec) => void;
            'notify::owner': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends Object.ConstructorProps {}
    }

    /**
     * This is the ICalTime instance.
     * @gir-type Class
     */
    class Time extends Object {
        static $gtype: GObject.GType<Time>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Time.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<Time.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): Time;

        static new_current_with_zone(zone?: Timezone | null): Time;

        static new_from_day_of_year(day: number, year: number): Time;

        static new_from_string(str: string): Time;

        static new_from_timet_with_zone(v: number, is_date: number, zone?: Timezone | null): Time;

        static new_null_date(): Time;

        static new_null_time(): Time;

        static new_today(): Time;

        // Signals

        /** @signal */
        connect<K extends keyof Time.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Time.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof Time.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Time.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof Time.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Time.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Static methods

        /**
         * Gets the number of days in the target month in the target year.
         * @param month The target month
         * @param year The target year
         */
        static days_in_month(month: number, year: number): number;
        /**
         * Returns the number of days in this year.
         * @param year The target year
         */
        static days_in_year(year: number): number;
        /**
         * Checks whether a year is a leap year.
         * @param year The target year
         */
        static days_is_leap_year(year: number): boolean;
        /**
         * Applies a list of timezone changes on the array of components until the end year.
         * @param comp The {@link ICalGLib.Component}
         * @param end_year The end year
         * @param changes The changes to be applies
         */
        static timezone_expand_vtimezone(comp: Component, end_year: number, changes: Array): void;

        // Methods

        /**
         * Adds a time duration on the time.
         * @param d A {@link ICalGLib.Duration} as the difference
         * @returns The {@link ICalGLib.Time} results. The native object is the same. But since it is a bare object, so it won't cause segmentation.
         */
        add(d: Duration): Time;
        /**
         * Adds or subtracts a number of days, hours, minutes and seconds from `tt`.
         * @param days Difference of days adjusted
         * @param hours Difference of hours adjusted
         * @param minutes Difference of minutes adjusted
         * @param seconds Difference of seconds adjusted
         */
        adjust(days: number, hours: number, minutes: number, seconds: number): void;
        /**
         * Returns a string representation of the time, in RFC2445 format.
         * @returns The string representation
         */
        as_ical_string(): string;
        /**
         * Returns the time as seconds past the UNIX epoch.
         * @returns The time as seconds past the UNIX epoch
         */
        as_timet(): number;
        /**
         * Returns the time as seconds past the UNIX epoch, using timezones.
         * @param zone The timezone
         * @returns The time as seconds past the UNIX epoch
         */
        as_timet_with_zone(zone?: Timezone | null): number;
        /**
         * Creates a new {@link ICalGLib.Time}, copy of `timetype`.
         * @returns The newly created {@link ICalGLib.Time}, copy of `timetype`.
         */
        clone(): Time;
        /**
         * i_cal_time_compare returns an integer indicating the result of the comparison, as follow:
         * @param b The {@link ICalGLib.Time} to be compared
         * @returns -1, 0, or 1 to indicate that a less than b, a==b or a larger than b.
         */
        compare(b: Time): number;
        /**
         * Like `i_cal_time_compare()`, but only use the date parts.
         * @param b The {@link ICalGLib.Time} to be compared
         * @returns -1, 0, or 1 to indicate that a less than b, a==b or a larger than b.
         */
        compare_date_only(b: Time): number;
        /**
         * Like `i_cal_time_compare_tz()`, but only use the date parts; accepts timezone.
         * @param b The {@link ICalGLib.Time} to be compared
         * @param zone The target timezone
         * @returns -1, 0, or 1 to indicate that a less than b, a==b or a larger than b.
         */
        compare_date_only_tz(b: Time, zone?: Timezone | null): number;
        /**
         * Convert time from one timezone to another.
         * @param from_zone From timezone
         * @param to_zone To timezone
         */
        convert_timezone(from_zone?: Timezone | null, to_zone?: Timezone | null): void;
        /**
         * Converts `tt` to `zone` and return new {@link ICalGLib.Time} object.
         * @param zone The target timezone
         * @returns The converted {@link ICalGLib.Time}
         */
        convert_to_zone(zone?: Timezone | null): Time;
        /**
         * Converts `tt` to `zone` and store the result into `tt`.
         * @param zone The target timezone
         */
        convert_to_zone_inplace(zone?: Timezone | null): void;
        /**
         * Returns the day of the week of the given time. Sunday is 1.
         * @returns The day of the week of the given time. Sunday is 1.
         */
        day_of_week(): number;
        /**
         * Returns the day of the year of the given time.
         * @returns The day of the year of the given time
         */
        day_of_year(): number;
        /**
         * Gets the year/month/date parts of the `timetype` in one call.
         */
        get_date(): [number, number, number];
        /**
         * Gets the day of {@link ICalGLib.Time}.
         * @returns The day.
         */
        get_day(): number;
        /**
         * Gets the hour of {@link ICalGLib.Time}.
         * @returns The hour.
         */
        get_hour(): number;
        /**
         * Gets the minute of {@link ICalGLib.Time}.
         * @returns The minute.
         */
        get_minute(): number;
        /**
         * Gets the month of {@link ICalGLib.Time}.
         * @returns The month.
         */
        get_month(): number;
        /**
         * Gets the second of {@link ICalGLib.Time}.
         * @returns The second.
         */
        get_second(): number;
        /**
         * Gets the hour/minute/second parts of the `timetype` in one call.
         */
        get_time(): [number, number, number];
        /**
         * Returns the timezone, the {@link ICalGLib.Timezone} object is cached and can be either unreferenced once the last
         * instance is used or can be kept until `i_cal_object_free_global_objects()` is called (usually at the very
         * end of the program).
         * @returns The timezone information
         */
        get_timezone(): Timezone;
        /**
         * Returns the tzid, or NULL for a floating time.
         * @returns The tzid of {@link ICalGLib.Time}, or NULL if floating type
         */
        get_tzid(): string | null;
        /**
         * Gets the year of {@link ICalGLib.Time}.
         * @returns The year.
         */
        get_year(): number;
        /**
         * Returns true if time is of DATE type, false if DATE-TIME.
         * @returns True if time is of DATE type, false if DATE-TIME.
         */
        is_date(): boolean;
        /**
         * Gets the is_daylight of {@link ICalGLib.Time}.
         * @returns The is_daylight.
         */
        is_daylight(): boolean;
        /**
         * Returns true if the time is null.
         * @returns Whether `tt` is null_time. 1 if yes, 0 if not.
         */
        is_null_time(): boolean;
        /**
         * Returns true if time is relative to UTC zone.
         * @returns True if time is relative to UTC zone.
         */
        is_utc(): boolean;
        /**
         * Returns true if the time is null.
         * @returns Whether `tt` is null_time. 1 if yes, 0 if not.
         */
        is_valid_time(): boolean;
        /**
         * Normalizes the icaltime, so that all fields are within the normal range.
         * @returns The {@link ICalGLib.Time} normalized
         */
        normalize(): Time;
        /**
         * Normalizes the `tt`, so that all fields are within the normal range.
         */
        normalize_inplace(): void;
        /**
         * Sets the year/month/date parts of the `timetype` in one call. This doesn't verify validity of the given
         * date.
         * @param year The 'year' part of the date
         * @param month The 'month' part of the date
         * @param day The 'day' part of the date
         */
        set_date(year: number, month: number, day: number): void;
        /**
         * Sets the day of {@link ICalGLib.Time}.
         * @param day The day
         */
        set_day(day: number): void;
        /**
         * Sets the hour of {@link ICalGLib.Time}.
         * @param hour The hour
         */
        set_hour(hour: number): void;
        /**
         * Sets the is_date of {@link ICalGLib.Time}.
         * @param is_date The is_date
         */
        set_is_date(is_date: boolean): void;
        /**
         * Sets the is_daylight of {@link ICalGLib.Time}.
         * @param is_daylight The is_daylight
         */
        set_is_daylight(is_daylight: boolean): void;
        /**
         * Sets the minute of {@link ICalGLib.Time}.
         * @param minute The minute
         */
        set_minute(minute: number): void;
        /**
         * Sets the month of {@link ICalGLib.Time}.
         * @param month The month
         */
        set_month(month: number): void;
        /**
         * Sets the second of {@link ICalGLib.Time}.
         * @param second The second
         */
        set_second(second: number): void;
        /**
         * Sets the hour/minute/second parts of the `timetype` in one call. This doesn't verify validity of the given
         * time.
         * @param hour The 'hour' part of the time
         * @param minute The 'minute' part of the time
         * @param second The 'second' part of the time
         */
        set_time(hour: number, minute: number, second: number): void;
        /**
         * Sets the timezone of the `tt`.
         * @param zone The timezone
         */
        set_timezone(zone?: Timezone | null): void;
        /**
         * Sets the year of {@link ICalGLib.Time}.
         * @param year The year
         */
        set_year(year: number): void;
        /**
         * Returns the day of the year for the first day of the week that the given time is within.
         * @param fdow The first day of the week
         * @returns The day of the year for the Sunday of the week that the given time is within.
         */
        start_doy_week(fdow: number): number;
        /**
         * Gets the duration between two time.
         * @param t2 The subtracting {@link ICalGLib.Time}
         * @returns The {@link ICalGLib.Duration} between two {@link ICalGLib.Time}.
         */
        subtract(t2: Time): Duration;
        /**
         * Returns the week number for the week the given time is within.
         * @returns The week number for the week the given time is within.
         */
        week_number(): number;
    }

    namespace TimeSpan {
        // Signal signatures
        interface SignalSignatures extends Object.SignalSignatures {
            'notify::always-destroy': (pspec: GObject.ParamSpec) => void;
            'notify::is-global-memory': (pspec: GObject.ParamSpec) => void;
            'notify::native': (pspec: GObject.ParamSpec) => void;
            'notify::native-destroy-func': (pspec: GObject.ParamSpec) => void;
            'notify::owner': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends Object.ConstructorProps {}
    }

    /**
     * This is the ICalTimeSpan instance.
     * @gir-type Class
     */
    class TimeSpan extends Object {
        static $gtype: GObject.GType<TimeSpan>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: TimeSpan.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<TimeSpan.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](dtstart: Time, dtend: Time, is_busy: number): TimeSpan;

        static new_timet(start: number, end: number, is_busy: boolean): TimeSpan;

        // Signals

        /** @signal */
        connect<K extends keyof TimeSpan.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, TimeSpan.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof TimeSpan.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, TimeSpan.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof TimeSpan.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<TimeSpan.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * Creates a new {@link ICalGLib.TimeSpan}, clone of `src`. Free it with `g_object_unref()`, when no longer needed.
         * @returns The newly created {@link ICalGLib.TimeSpan}, clone of `src`.
         */
        clone(): TimeSpan;
        /**
         * Checks whether one {@link ICalGLib.TimeSpan} is contained in another {@link ICalGLib.TimeSpan}.
         * @param container The target container of {@link ICalGLib.TimeSpan}
         * @returns Whether one {@link ICalGLib.TimeSpan} is contained in another {@link ICalGLib.TimeSpan}.
         */
        contains(container: TimeSpan): number;
        /**
         * Gets the end of {@link ICalGLib.TimeSpan}.
         * @returns The end.
         */
        get_end(): number;
        /**
         * Gets the is_busy of {@link ICalGLib.TimeSpan}.
         * @returns The is_busy.
         */
        get_is_busy(): boolean;
        /**
         * Gets the start of {@link ICalGLib.TimeSpan}.
         * @returns The start.
         */
        get_start(): number;
        /**
         * Checks whether two spans overlap.
         * @param s2 The second {@link ICalGLib.TimeSpan}
         * @returns Whether these two span are overlapped.
         */
        overlaps(s2: TimeSpan): number;
        /**
         * Sets the end of {@link ICalGLib.TimeSpan}.
         * @param end The end
         */
        set_end(end: number): void;
        /**
         * Sets the is_busy of {@link ICalGLib.TimeSpan}.
         * @param is_busy The is_busy
         */
        set_is_busy(is_busy: boolean): void;
        /**
         * Sets the start of {@link ICalGLib.TimeSpan}.
         * @param start The start
         */
        set_start(start: number): void;
    }

    namespace Timezone {
        // Signal signatures
        interface SignalSignatures extends Object.SignalSignatures {
            'notify::always-destroy': (pspec: GObject.ParamSpec) => void;
            'notify::is-global-memory': (pspec: GObject.ParamSpec) => void;
            'notify::native': (pspec: GObject.ParamSpec) => void;
            'notify::native-destroy-func': (pspec: GObject.ParamSpec) => void;
            'notify::owner': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends Object.ConstructorProps {}
    }

    /**
     * This is the ICalTimezone instance.
     * @gir-type Class
     */
    class Timezone extends Object {
        static $gtype: GObject.GType<Timezone>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Timezone.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<Timezone.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static array_new(): Timezone;

        static ['new'](): Timezone;

        // Signals

        /** @signal */
        connect<K extends keyof Timezone.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Timezone.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof Timezone.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Timezone.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof Timezone.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Timezone.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Static methods

        /**
         * Populate the array of timezones with a component.
         *
         * `note` The `timezones` assumes ownership of the
         * `child`, thus make sure you pass an unowned {@link ICalGLib.Component}.
         * @param timezones The timezones to be populated
         * @param child The component to be appended to `timezones`
         */
        static array_append_from_vtimezone(timezones: Array, child: Component): void;
        /**
         * Gets the {@link ICalGLib.Timezone} at specified position in array.
         * @param timezones The array to be visited
         * @param index The index
         */
        static array_element_at(timezones: Array, index: number): Timezone;
        /**
         * Frees any builtin timezone information.
         */
        static free_builtin_timezones(): void;
        /**
         * Frees memory dedicated to the zonefile directory.
         */
        static free_zone_directory(): void;
        /**
         * Returns a single builtin timezone, given its Olson city name.
         * @param location The location representing the timezone
         */
        static get_builtin_timezone(location?: string | null): Timezone | null;
        /**
         * Returns a single builtin timezone, given its offset.
         * @param offset The offset used to get the {@link ICalGLib.Timezone}
         * @param tzname The reference {@link ICalGLib.Timezone} name
         */
        static get_builtin_timezone_from_offset(offset: number, tzname?: string | null): Timezone;
        /**
         * Returns a single builtin timezone, given its TZID.
         * @param tzid The tzid name
         */
        static get_builtin_timezone_from_tzid(tzid?: string | null): Timezone;
        /**
         * Returns a list of builtin timezones.
         */
        static get_builtin_timezones(): Array;
        /**
         * Gets whether to use builtin timezones files.
         */
        static get_builtin_tzdata(): boolean;
        /**
         * Gets the location of the vtimezone in component.
         * @param component The {@link ICalGLib.Component} to be queried
         */
        static get_location_from_vtimezone(component: Component): string;
        /**
         * Gets the name of the vtimezone in component.
         * @param component The {@link ICalGLib.Component} to be queried
         */
        static get_tznames_from_vtimezone(component: Component): string;
        /**
         * Returns the UTC timezone.
         */
        static get_utc_timezone(): Timezone;
        /**
         * Gets the directory to look for the zonefiles.
         */
        static get_zone_directory(): string;
        /**
         * Frees memory dedicated to the zonefile directory.
         */
        static release_zone_tab(): void;
        /**
         * Sets whether to use builtin timezones files.
         * @param set Whether to use builtin timezones files
         */
        static set_builtin_tzdata(set: boolean): void;
        /**
         * Sets the prefix to be used for tzid's generated from system tzdata. Must be globally unique (such as
         * a domain name owned by the developer of the calling application), and begin and end with forward slashes.
         * Do not change or de-allocate the string buffer after calling this.
         * @param new_prefix The {@link ICalGLib.Timezone} to be set
         */
        static set_tzid_prefix(new_prefix: string): void;
        /**
         * Sets the directory to look for the zonefiles.
         * @param path The path to look for the zonefiles
         */
        static set_zone_directory(path: string): void;

        // Methods

        /**
         * The clone method for {@link ICalGLib.Timezone}.
         * @returns The newly created {@link ICalGLib.Timezone} with the same values as `zone`
         */
        copy(): Timezone;
        /**
         * Outputs a list of timezone changes for the given timezone to the given file, up to the maximum year given.
         * @param max_year Max year
         * @param fp The file handle
         * @returns 1 if success.
         */
        dump_changes(max_year: number, fp?: any | null): number;
        /**
         * Returns the VTIMEZONE component of a timezone.
         * @returns The VTIMEZONE component of the `zone`.
         */
        get_component(): Component;
        /**
         * Gets the display name of the `zone`.
         * @returns The display name of `zone`
         */
        get_display_name(): string;
        /**
         * Returns the latitude of a builtin timezone.
         * @returns The latitude of the {@link ICalGLib.Timezone}
         */
        get_latitude(): number;
        /**
         * Returns the city name of a timezone, or `null`, when none is set or when `zone` is also `null`.
         * @returns The location of the {@link ICalGLib.Timezone}, or `null`
         */
        get_location(): string | null;
        /**
         * Returns the longitude of a builtin timezone.
         * @returns The longitude of the {@link ICalGLib.Timezone}.
         */
        get_longitude(): number;
        /**
         * Returns the TZID of a timezone, or `null`, when none is set or when `zone` is also `null`.
         * @returns The timezone id, or `null`
         */
        get_tzid(): string | null;
        /**
         * Returns the TZNAME properties used in the latest STANDARD and DAYLIGHT components. If they are the same
         * it will return just one, e.g. "LMT". If they are different it will format them like "EST/EDT". Note that
         * this may also return NULL.
         * @returns The timezone name
         */
        get_tznames(): string | null;
        /**
         * Calculates the UTC offset of a given local time in the given timezone.  It is the number of seconds to
         * add to UTC to get local time.  The is_daylight flag is set to 1 if the time is in daylight-savings time.
         * @param tt The local time
         * @returns UTC offset of the `zone`
         */
        get_utc_offset(tt: Time | null): [number, number];
        /**
         * Calculates the UTC offset of a given UTC time in the given timezone.  It is the number of seconds to
         * add to UTC to get local time.  The is_daylight flag is set to 1 if the time is in daylight-savings time.
         * @param tt The local time
         * @returns UTC offset of the `zone`
         */
        get_utc_offset_of_utc_time(tt: Time): [number, number];
        /**
         * Sets the VTIMEZONE component of {@link ICalGLib.Timezone}, initializing the tzid, location and tzname fields. It
         * returns 1 on success or 0 on failure, i.e. no TZID was found.
         *
         * `note` The `zone` assumes ownership
         * of the `comp`, thus make sure you pass an unowned {@link ICalGLib.Component}.
         * @param comp The VTIMEZONE component of an {@link ICalGLib.Timezone}, initializing the tzid, location and tzname fields
         * @returns Whether the action is successful. 1 for success, 0 for failure.
         */
        set_component(comp: Component): number;
    }

    namespace Trigger {
        // Signal signatures
        interface SignalSignatures extends Object.SignalSignatures {
            'notify::always-destroy': (pspec: GObject.ParamSpec) => void;
            'notify::is-global-memory': (pspec: GObject.ParamSpec) => void;
            'notify::native': (pspec: GObject.ParamSpec) => void;
            'notify::native-destroy-func': (pspec: GObject.ParamSpec) => void;
            'notify::owner': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends Object.ConstructorProps {}
    }

    /**
     * This is the ICalTrigger instance.
     * @gir-type Class
     */
    class Trigger extends Object {
        static $gtype: GObject.GType<Trigger>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Trigger.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<Trigger.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static new_from_int(reltime: number): Trigger;

        static new_from_string(str: string): Trigger;

        // Signals

        /** @signal */
        connect<K extends keyof Trigger.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Trigger.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof Trigger.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Trigger.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof Trigger.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Trigger.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * Gets the duration from {@link ICalGLib.Trigger}.
         * @returns The duration of {@link ICalGLib.Trigger}.
         */
        get_duration(): Duration;
        /**
         * Gets the time from {@link ICalGLib.Trigger}.
         * @returns The time of {@link ICalGLib.Trigger}.
         */
        get_time(): Time;
        /**
         * Checks if a {@link ICalGLib.Trigger} is a bad trigger.
         * @returns 1 if yes, 0 if not.
         */
        is_bad_trigger(): boolean;
        /**
         * Checks if a {@link ICalGLib.Trigger} is a null trigger.
         * @returns 1 if yes, 0 if not.
         */
        is_null_trigger(): boolean;
        /**
         * Sets the duration from {@link ICalGLib.Trigger}.
         * @param duration The duration of {@link ICalGLib.Trigger}
         */
        set_duration(duration: Duration): void;
        /**
         * Sets the time from {@link ICalGLib.Trigger}.
         * @param time The time of {@link ICalGLib.Trigger}
         */
        set_time(time: Time): void;
    }

    namespace Value {
        // Signal signatures
        interface SignalSignatures extends Object.SignalSignatures {
            'notify::always-destroy': (pspec: GObject.ParamSpec) => void;
            'notify::is-global-memory': (pspec: GObject.ParamSpec) => void;
            'notify::native': (pspec: GObject.ParamSpec) => void;
            'notify::native-destroy-func': (pspec: GObject.ParamSpec) => void;
            'notify::owner': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends Object.ConstructorProps {}
    }

    /**
     * This is the ICalValue instance.
     * @gir-type Class
     */
    class Value extends Object {
        static $gtype: GObject.GType<Value>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Value.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<Value.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](kind: ValueKind): Value;

        static new_action(v: PropertyAction): Value;

        static new_attach(v: Attach): Value;

        static new_binary(v: string): Value;

        static new_boolean(v: number): Value;

        static new_busytype(v: PropertyBusytype): Value;

        static new_caladdress(v: string): Value;

        static new_carlevel(v: PropertyCarlevel): Value;

        static new_class(v: Property_Class): Value;

        static new_cmd(v: PropertyCmd): Value;

        static new_date(v: Time): Value;

        static new_datetime(v: Time): Value;

        static new_datetimedate(v: Time): Value;

        static new_datetimeperiod(v: Datetimeperiod): Value;

        static new_duration(v: Duration): Value;

        static new_float(v: number): Value;

        static new_from_string(kind: ValueKind, str: string): Value;

        static new_geo(v: Geo): Value;

        static new_integer(v: number): Value;

        static new_method(v: PropertyMethod): Value;

        static new_period(v: Period): Value;

        static new_pollcompletion(v: PropertyPollcompletion): Value;

        static new_pollmode(v: PropertyPollmode): Value;

        static new_query(v: string): Value;

        static new_querylevel(v: PropertyQuerylevel): Value;

        static new_recur(v: Recurrence): Value;

        static new_requeststatus(v: Reqstat): Value;

        static new_status(v: PropertyStatus): Value;

        static new_string(v: string): Value;

        static new_taskmode(v: PropertyTaskmode): Value;

        static new_text(v: string): Value;

        static new_transp(v: PropertyTransp): Value;

        static new_trigger(v: Trigger): Value;

        static new_uri(v: string): Value;

        static new_utcoffset(v: number): Value;

        static new_x(v: string): Value;

        static new_xlicclass(v: PropertyXlicclass): Value;

        // Signals

        /** @signal */
        connect<K extends keyof Value.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Value.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof Value.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Value.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof Value.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Value.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Static methods

        /**
         * Extracts the original character string encoded by the above function.
         * @param szText A string
         */
        static decode_ical_string(szText: string): string | null;
        /**
         * Encodes a character string in ical format, escape certain characters, etc.
         * @param szText A string
         */
        static encode_ical_string(szText: string): string | null;
        /**
         * Converts a string to {@link ICalGLib.ValueKind}.
         * @param str A string
         */
        static kind_from_string(str: string): ValueKind;
        /**
         * Checks whether the {@link ICalGLib.ValueKind} is valid.
         * @param kind The {@link ICalGLib.ValueKind} to be checked
         */
        static kind_is_valid(kind: ValueKind): boolean;
        /**
         * Converts a {@link ICalGLib.ValueKind} to a {@link ICalGLib.PropertyKind}.
         * @param kind A {@link ICalGLib.ValueKind}
         */
        static kind_to_property_kind(kind: ValueKind): PropertyKind;
        /**
         * Converts the {@link ICalGLib.ValueKind} to a string.
         * @param kind A {@link ICalGLib.ValueKind}
         */
        static kind_to_string(kind: ValueKind): string;

        // Methods

        /**
         * Converts the {@link ICalGLib.Value} to a string.
         * @returns The string representation.
         */
        as_ical_string(): string;
        /**
         * Deeply clone a {@link ICalGLib.Value}.
         * @returns The newly created {@link ICalGLib.Value} with the same property as `value`.
         */
        clone(): Value;
        /**
         * Compares two {@link ICalGLib.Value}.
         * @param b A {@link ICalGLib.Value}
         * @returns The compare result.
         */
        compare(b: Value): ParameterXliccomparetype;
        /**
         * Gets the action of {@link ICalGLib.Value}.
         * @returns The action within {@link ICalGLib.Value}
         */
        get_action(): PropertyAction;
        /**
         * Gets the attach of {@link ICalGLib.Value}.
         * @returns The attach within {@link ICalGLib.Value}
         */
        get_attach(): Attach | null;
        /**
         * Gets the binary of {@link ICalGLib.Value}.
         * @returns The binary within {@link ICalGLib.Value}
         */
        get_binary(): string | null;
        /**
         * Gets the boolean of {@link ICalGLib.Value}.
         * @returns The boolean within {@link ICalGLib.Value}
         */
        get_boolean(): number;
        /**
         * Gets the busytype of {@link ICalGLib.Value}.
         * @returns The busytype within {@link ICalGLib.Value}
         */
        get_busytype(): PropertyBusytype;
        /**
         * Gets the caladdress of {@link ICalGLib.Value}.
         * @returns The caladdress within {@link ICalGLib.Value}
         */
        get_caladdress(): string | null;
        /**
         * Gets the carlevel of {@link ICalGLib.Value}.
         * @returns The carlevel within {@link ICalGLib.Value}
         */
        get_carlevel(): PropertyCarlevel;
        /**
         * Gets the class of {@link ICalGLib.Value}.
         * @returns The class within {@link ICalGLib.Value}
         */
        get_class(): Property_Class;
        /**
         * Gets the cmd of {@link ICalGLib.Value}.
         * @returns The cmd within {@link ICalGLib.Value}
         */
        get_cmd(): PropertyCmd;
        /**
         * Gets the date of {@link ICalGLib.Value}.
         * @returns The date within {@link ICalGLib.Value}
         */
        get_date(): Time | null;
        /**
         * Gets the datetime of {@link ICalGLib.Value}.
         * @returns The datetime within {@link ICalGLib.Value}
         */
        get_datetime(): Time | null;
        /**
         * Gets the datetimedate (DATE-TIME or DATE) of {@link ICalGLib.Value}.
         * @returns The datetimedate within {@link ICalGLib.Value}
         */
        get_datetimedate(): Time | null;
        /**
         * Gets the datetimeperiod of {@link ICalGLib.Value}.
         * @returns The datetimeperiod within {@link ICalGLib.Value}
         */
        get_datetimeperiod(): Datetimeperiod | null;
        /**
         * Gets the duration of {@link ICalGLib.Value}.
         * @returns The duration within {@link ICalGLib.Value}
         */
        get_duration(): Duration | null;
        /**
         * Gets the float of {@link ICalGLib.Value}.
         * @returns The float within {@link ICalGLib.Value}
         */
        get_float(): number;
        /**
         * Gets the geo of {@link ICalGLib.Value}.
         * @returns The geo within {@link ICalGLib.Value}
         */
        get_geo(): Geo | null;
        /**
         * Gets the integer of {@link ICalGLib.Value}.
         * @returns The integer within {@link ICalGLib.Value}
         */
        get_integer(): number;
        /**
         * Gets the method of {@link ICalGLib.Value}.
         * @returns The method within {@link ICalGLib.Value}
         */
        get_method(): PropertyMethod;
        /**
         * Gets the parent {@link ICalGLib.Property} of the specified {@link ICalGLib.Value}.
         * @returns The parent {@link ICalGLib.Property}
         */
        get_parent(): Property | null;
        /**
         * Gets the period of {@link ICalGLib.Value}.
         * @returns The period within {@link ICalGLib.Value}
         */
        get_period(): Period | null;
        /**
         * Gets the pollcompletion of {@link ICalGLib.Value}.
         * @returns The pollcompletion within {@link ICalGLib.Value}
         */
        get_pollcompletion(): PropertyPollcompletion;
        /**
         * Gets the pollmode of {@link ICalGLib.Value}.
         * @returns The pollmode within {@link ICalGLib.Value}
         */
        get_pollmode(): PropertyPollmode;
        /**
         * Gets the query of {@link ICalGLib.Value}.
         * @returns The query within {@link ICalGLib.Value}
         */
        get_query(): string | null;
        /**
         * Gets the querylevel of {@link ICalGLib.Value}.
         * @returns The querylevel within {@link ICalGLib.Value}
         */
        get_querylevel(): PropertyQuerylevel;
        /**
         * Gets the recur of {@link ICalGLib.Value}.
         * @returns The recur within {@link ICalGLib.Value}
         */
        get_recur(): Recurrence | null;
        /**
         * Gets the requeststatus of {@link ICalGLib.Value}.
         * @returns The requeststatus within {@link ICalGLib.Value}
         */
        get_requeststatus(): Reqstat | null;
        /**
         * Gets the status of {@link ICalGLib.Value}.
         * @returns The status within {@link ICalGLib.Value}
         */
        get_status(): PropertyStatus;
        /**
         * Gets the string of {@link ICalGLib.Value}.
         * @returns The string within {@link ICalGLib.Value}
         */
        get_string(): string | null;
        /**
         * Gets the taskmode of {@link ICalGLib.Value}.
         * @returns The taskmode within {@link ICalGLib.Value}
         */
        get_taskmode(): PropertyTaskmode;
        /**
         * Gets the text of {@link ICalGLib.Value}.
         * @returns The text within {@link ICalGLib.Value}
         */
        get_text(): string | null;
        /**
         * Gets the transp of {@link ICalGLib.Value}.
         * @returns The transp within {@link ICalGLib.Value}
         */
        get_transp(): PropertyTransp;
        /**
         * Gets the trigger of {@link ICalGLib.Value}.
         * @returns The trigger within {@link ICalGLib.Value}
         */
        get_trigger(): Trigger | null;
        /**
         * Gets the uri of {@link ICalGLib.Value}.
         * @returns The uri within {@link ICalGLib.Value}
         */
        get_uri(): string | null;
        /**
         * Gets the utcoffset of {@link ICalGLib.Value}.
         * @returns The utcoffset within {@link ICalGLib.Value}
         */
        get_utcoffset(): number;
        /**
         * Gets the x of {@link ICalGLib.Value}.
         * @returns The x within {@link ICalGLib.Value}
         */
        get_x(): string | null;
        /**
         * Gets the xlicclass of {@link ICalGLib.Value}.
         * @returns The xlicclass within {@link ICalGLib.Value}
         */
        get_xlicclass(): PropertyXlicclass;
        /**
         * Checks if {@link ICalGLib.Value} is valid.
         * @returns 1 if valid, 0 if not.
         */
        is_valid(): boolean;
        /**
         * Gets the kind of {@link ICalGLib.Value}.
         * @returns The kind of `value`.
         */
        isa(): ValueKind;
        /**
         * Checks whether the native part of {@link ICalGLib.Value} is an icalvalue.
         * @returns 1 if yes, 0 if not.
         */
        isa_value(): number;
        /**
         * Resets the kind of {@link ICalGLib.Value}.
         */
        reset_kind(): void;
        /**
         * Sets the action in the {@link ICalGLib.Value}.
         * @param v The action value
         */
        set_action(v: PropertyAction | null): void;
        /**
         * Sets the attach in the {@link ICalGLib.Value}.
         * @param v The attach value
         */
        set_attach(v: Attach): void;
        /**
         * Sets the binary in the {@link ICalGLib.Value}.
         * @param v The binary value
         */
        set_binary(v: string): void;
        /**
         * Sets the boolean in the {@link ICalGLib.Value}.
         * @param v The boolean value
         */
        set_boolean(v: number): void;
        /**
         * Sets the busytype in the {@link ICalGLib.Value}.
         * @param v The busytype value
         */
        set_busytype(v: PropertyBusytype | null): void;
        /**
         * Sets the caladdress in the {@link ICalGLib.Value}.
         * @param v The caladdress value
         */
        set_caladdress(v: string): void;
        /**
         * Sets the carlevel in the {@link ICalGLib.Value}.
         * @param v The carlevel value
         */
        set_carlevel(v: PropertyCarlevel | null): void;
        /**
         * Sets the class in the {@link ICalGLib.Value}.
         * @param v The class value
         */
        set_class(v: Property_Class | null): void;
        /**
         * Sets the cmd in the {@link ICalGLib.Value}.
         * @param v The cmd value
         */
        set_cmd(v: PropertyCmd | null): void;
        /**
         * Sets the date in the {@link ICalGLib.Value}.
         * @param v The date value
         */
        set_date(v: Time): void;
        /**
         * Sets the datetime in the {@link ICalGLib.Value}.
         * @param v The datetime value
         */
        set_datetime(v: Time): void;
        /**
         * Sets the datetimedate (DATE-TIME or DATE) in the {@link ICalGLib.Value}.
         * @param v The datetimedate (DATE-TIME or DATE) value
         */
        set_datetimedate(v: Time): void;
        /**
         * Sets the datetimeperiod in the {@link ICalGLib.Value}.
         * @param v The datetimeperiod value
         */
        set_datetimeperiod(v: Datetimeperiod): void;
        /**
         * Sets the duration in the {@link ICalGLib.Value}.
         * @param v The duration value
         */
        set_duration(v: Duration): void;
        /**
         * Sets the float in the {@link ICalGLib.Value}.
         * @param v The float value
         */
        set_float(v: number): void;
        /**
         * Sets the geo in the {@link ICalGLib.Value}.
         * @param v The geo value
         */
        set_geo(v: Geo): void;
        /**
         * Sets the integer in the {@link ICalGLib.Value}.
         * @param v The integer value
         */
        set_integer(v: number): void;
        /**
         * Sets the method in the {@link ICalGLib.Value}.
         * @param v The method value
         */
        set_method(v: PropertyMethod | null): void;
        /**
         * Sets the parent property of a value.
         * @param property The parent {@link ICalGLib.Property}
         */
        set_parent(property?: Property | null): void;
        /**
         * Sets the period in the {@link ICalGLib.Value}.
         * @param v The period value
         */
        set_period(v: Period): void;
        /**
         * Sets the pollcompletion in the {@link ICalGLib.Value}.
         * @param v The pollcompletion value
         */
        set_pollcompletion(v: PropertyPollcompletion | null): void;
        /**
         * Sets the pollmode in the {@link ICalGLib.Value}.
         * @param v The pollmode value
         */
        set_pollmode(v: PropertyPollmode | null): void;
        /**
         * Sets the query in the {@link ICalGLib.Value}.
         * @param v The query value
         */
        set_query(v: string): void;
        /**
         * Sets the querylevel in the {@link ICalGLib.Value}.
         * @param v The querylevel value
         */
        set_querylevel(v: PropertyQuerylevel | null): void;
        /**
         * Sets the recur in the {@link ICalGLib.Value}.
         * @param v The recur value
         */
        set_recur(v: Recurrence): void;
        /**
         * Sets the requeststatus in the {@link ICalGLib.Value}.
         * @param v The requeststatus value
         */
        set_requeststatus(v: Reqstat): void;
        /**
         * Sets the status in the {@link ICalGLib.Value}.
         * @param v The status value
         */
        set_status(v: PropertyStatus | null): void;
        /**
         * Sets the string in the {@link ICalGLib.Value}.
         * @param v The string value
         */
        set_string(v: string): void;
        /**
         * Sets the taskmode in the {@link ICalGLib.Value}.
         * @param v The taskmode value
         */
        set_taskmode(v: PropertyTaskmode | null): void;
        /**
         * Sets the text in the {@link ICalGLib.Value}.
         * @param v The text value
         */
        set_text(v: string): void;
        /**
         * Sets the transp in the {@link ICalGLib.Value}.
         * @param v The transp value
         */
        set_transp(v: PropertyTransp | null): void;
        /**
         * Sets the trigger in the {@link ICalGLib.Value}.
         * @param v The trigger value
         */
        set_trigger(v: Trigger): void;
        /**
         * Sets the uri in the {@link ICalGLib.Value}.
         * @param v The uri value
         */
        set_uri(v: string): void;
        /**
         * Sets the utcoffset in the {@link ICalGLib.Value}.
         * @param v The utcoffset value
         */
        set_utcoffset(v: number): void;
        /**
         * Sets the x in the {@link ICalGLib.Value}.
         * @param v The x value
         */
        set_x(v: string): void;
        /**
         * Sets the xlicclass in the {@link ICalGLib.Value}.
         * @param v The xlicclass value
         */
        set_xlicclass(v: PropertyXlicclass | null): void;
    }

    /**
     * @gir-type Alias
     */
    type ArrayClass = typeof Array;
    /**
     * @gir-type Alias
     */
    type AttachClass = typeof Attach;
    /**
     * @gir-type Alias
     */
    type CompIterClass = typeof CompIter;
    /**
     * @gir-type Alias
     */
    type ComponentClass = typeof Component;
    /**
     * @gir-type Alias
     */
    type DatetimeperiodClass = typeof Datetimeperiod;
    /**
     * @gir-type Alias
     */
    type DurationClass = typeof Duration;
    /**
     * @gir-type Alias
     */
    type GeoClass = typeof Geo;
    /**
     * @gir-type Alias
     */
    type ObjectClass = typeof Object;
    /**
     * @gir-type Struct
     */
    abstract class ObjectPrivate {
        static $gtype: GObject.GType<ObjectPrivate>;
    }

    /**
     * @gir-type Alias
     */
    type ParameterClass = typeof Parameter;
    /**
     * @gir-type Alias
     */
    type ParserClass = typeof Parser;
    /**
     * @gir-type Alias
     */
    type PeriodClass = typeof Period;
    /**
     * @gir-type Alias
     */
    type PropertyClass = typeof Property;
    /**
     * @gir-type Alias
     */
    type RecurIteratorClass = typeof RecurIterator;
    /**
     * @gir-type Alias
     */
    type RecurrenceClass = typeof Recurrence;
    /**
     * @gir-type Alias
     */
    type ReqstatClass = typeof Reqstat;
    /**
     * @gir-type Alias
     */
    type TimeClass = typeof Time;
    /**
     * @gir-type Alias
     */
    type TimeSpanClass = typeof TimeSpan;
    /**
     * @gir-type Alias
     */
    type TimezoneClass = typeof Timezone;
    /**
     * @gir-type Alias
     */
    type TriggerClass = typeof Trigger;
    /**
     * @gir-type Alias
     */
    type ValueClass = typeof Value;
    /**
     * @gir-type Struct
     */
    abstract class _Array {
        static $gtype: GObject.GType<_Array>;
    }

    /**
     * @gir-type Struct
     */
    abstract class _Attach {
        static $gtype: GObject.GType<_Attach>;
    }

    /**
     * @gir-type Struct
     */
    abstract class _CompIter {
        static $gtype: GObject.GType<_CompIter>;
    }

    /**
     * @gir-type Struct
     */
    abstract class _Component {
        static $gtype: GObject.GType<_Component>;
    }

    /**
     * @gir-type Struct
     */
    abstract class _Datetimeperiod {
        static $gtype: GObject.GType<_Datetimeperiod>;
    }

    /**
     * @gir-type Struct
     */
    abstract class _Duration {
        static $gtype: GObject.GType<_Duration>;
    }

    /**
     * @gir-type Struct
     */
    abstract class _Geo {
        static $gtype: GObject.GType<_Geo>;
    }

    /**
     * @gir-type Struct
     */
    abstract class _Parameter {
        static $gtype: GObject.GType<_Parameter>;
    }

    /**
     * @gir-type Struct
     */
    abstract class _Parser {
        static $gtype: GObject.GType<_Parser>;
    }

    /**
     * @gir-type Struct
     */
    abstract class _Period {
        static $gtype: GObject.GType<_Period>;
    }

    /**
     * @gir-type Struct
     */
    abstract class _Property {
        static $gtype: GObject.GType<_Property>;
    }

    /**
     * @gir-type Struct
     */
    abstract class _RecurIterator {
        static $gtype: GObject.GType<_RecurIterator>;
    }

    /**
     * @gir-type Struct
     */
    abstract class _Recurrence {
        static $gtype: GObject.GType<_Recurrence>;
    }

    /**
     * @gir-type Struct
     */
    abstract class _Reqstat {
        static $gtype: GObject.GType<_Reqstat>;
    }

    /**
     * @gir-type Struct
     */
    abstract class _Time {
        static $gtype: GObject.GType<_Time>;
    }

    /**
     * @gir-type Struct
     */
    abstract class _TimeSpan {
        static $gtype: GObject.GType<_TimeSpan>;
    }

    /**
     * @gir-type Struct
     */
    abstract class _Timezone {
        static $gtype: GObject.GType<_Timezone>;
    }

    /**
     * @gir-type Struct
     */
    abstract class _Trigger {
        static $gtype: GObject.GType<_Trigger>;
    }

    /**
     * @gir-type Struct
     */
    abstract class _Value {
        static $gtype: GObject.GType<_Value>;
    }

    /**
     * Name of the imported GIR library
     * `see` https://gitlab.gnome.org/GNOME/gjs/-/blob/master/gi/ns.cpp#L188
     */
    const __name__: string;
    /**
     * Version of the imported GIR library
     * `see` https://gitlab.gnome.org/GNOME/gjs/-/blob/master/gi/ns.cpp#L189
     */
    const __version__: string;
}

export default ICalGLib;

// END
