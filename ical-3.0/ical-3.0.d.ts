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

export namespace ICal {
    /**
     * ICal-3.0
     */

    /**
     * @gir-type Enum
     */
    enum _unknown_token_handling {
        ASSUME_IANA_TOKEN,
        DISCARD_TOKEN,
        TREAT_AS_ERROR,
    }

    /**
     * @gir-type Enum
     */
    enum component_kind {
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
        VPATCH_COMPONENT,
        XPATCH_COMPONENT,
    }

    /**
     * @gir-type Enum
     */
    enum errorenum {
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
    enum errorstate {
        FATAL,
        NONFATAL,
        DEFAULT,
        UNKNOWN,
    }

    /**
     * @gir-type Enum
     */
    enum parameter_action {
        X,
        ASK,
        ABORT,
        NONE,
    }

    /**
     * @gir-type Enum
     */
    enum parameter_cutype {
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
    enum parameter_display {
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
    enum parameter_enable {
        X,
        TRUE,
        FALSE,
        NONE,
    }

    /**
     * @gir-type Enum
     */
    enum parameter_encoding {
        X,
        '8BIT',
        BASE64,
        NONE,
    }

    /**
     * @gir-type Enum
     */
    enum parameter_fbtype {
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
    enum parameter_feature {
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
    enum parameter_kind {
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
    enum parameter_local {
        X,
        TRUE,
        FALSE,
        NONE,
    }

    /**
     * @gir-type Enum
     */
    enum parameter_partstat {
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
    enum parameter_patchaction {
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
    enum parameter_range {
        X,
        THISANDPRIOR,
        THISANDFUTURE,
        NONE,
    }

    /**
     * @gir-type Enum
     */
    enum parameter_related {
        X,
        START,
        END,
        NONE,
    }

    /**
     * @gir-type Enum
     */
    enum parameter_reltype {
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
    enum parameter_required {
        X,
        TRUE,
        FALSE,
        NONE,
    }

    /**
     * @gir-type Enum
     */
    enum parameter_role {
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
    enum parameter_rsvp {
        X,
        TRUE,
        FALSE,
        NONE,
    }

    /**
     * @gir-type Enum
     */
    enum parameter_scheduleagent {
        X,
        SERVER,
        CLIENT,
        NONE,
    }

    /**
     * @gir-type Enum
     */
    enum parameter_scheduleforcesend {
        X,
        REQUEST,
        REPLY,
        NONE,
    }

    /**
     * @gir-type Enum
     */
    enum parameter_stayinformed {
        X,
        TRUE,
        FALSE,
        NONE,
    }

    /**
     * @gir-type Enum
     */
    enum parameter_substate {
        X,
        OK,
        ERROR,
        SUSPENDED,
        NONE,
    }

    /**
     * @gir-type Enum
     */
    enum parameter_value {
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
    enum parameter_xliccomparetype {
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
    enum parameter_xlicerrortype {
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
    enum parser_state {
        ERROR,
        SUCCESS,
        BEGIN_COMP,
        END_COMP,
        IN_PROGRESS,
    }

    /**
     * @gir-type Enum
     */
    enum property_action {
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
    enum property_busytype {
        X,
        BUSY,
        BUSYUNAVAILABLE,
        BUSYTENTATIVE,
        NONE,
    }

    /**
     * @gir-type Enum
     */
    enum property_carlevel {
        X,
        CARNONE,
        CARMIN,
        CARFULL1,
        NONE,
    }

    /**
     * @gir-type Enum
     */
    enum property_class {
        X,
        PUBLIC,
        PRIVATE,
        CONFIDENTIAL,
        NONE,
    }

    /**
     * @gir-type Enum
     */
    enum property_cmd {
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
    enum property_kind {
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
        CONFERENCE_PROPERTY,
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
        IMAGE_PROPERTY,
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
        PATCHDELETE_PROPERTY,
        PATCHORDER_PROPERTY,
        PATCHPARAMETER_PROPERTY,
        PATCHTARGET_PROPERTY,
        PATCHVERSION_PROPERTY,
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
        REFRESHINTERVAL_PROPERTY,
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
        SOURCE_PROPERTY,
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
    enum property_method {
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
        POLLSTATUS,
        NONE,
    }

    /**
     * @gir-type Enum
     */
    enum property_pollcompletion {
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
    enum property_pollmode {
        X,
        BASIC,
        NONE,
    }

    /**
     * @gir-type Enum
     */
    enum property_querylevel {
        X,
        CALQL1,
        CALQLNONE,
        NONE,
    }

    /**
     * @gir-type Enum
     */
    enum property_status {
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
    enum property_taskmode {
        X,
        AUTOMATICCOMPLETION,
        AUTOMATICFAILURE,
        AUTOMATICSTATUS,
        NONE,
    }

    /**
     * @gir-type Enum
     */
    enum property_transp {
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
    enum property_xlicclass {
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
    enum recurrencetype_frequency {
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
    enum recurrencetype_skip {
        BACKWARD,
        FORWARD,
        OMIT,
        UNDEFINED,
    }

    /**
     * @gir-type Enum
     */
    enum recurrencetype_weekday {
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
    enum requeststatus {
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
    enum restriction_kind {
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
    enum value_kind {
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

    const BOOLEAN_FALSE: number;
    const BOOLEAN_TRUE: number;
    const BY_DAY_SIZE: number;
    const BY_HOUR_SIZE: number;
    const BY_MINUTE_SIZE: number;
    const BY_MONTHDAY_SIZE: number;
    const BY_MONTH_SIZE: number;
    const BY_SECOND_SIZE: number;
    const BY_WEEKNO_SIZE: number;
    const BY_YEARDAY_SIZE: number;
    const ERRORS_ARE_FATAL: number;
    const ICALPARAMETER_FIRST_ENUM: number;
    const ICALPARAMETER_LAST_ENUM: number;
    const ICALPROPERTY_FIRST_ENUM: number;
    const ICALPROPERTY_LAST_ENUM: number;
    const MAJOR_VERSION: number;
    const MINOR_VERSION: number;
    const PACKAGE: string;
    const PATCH_VERSION: number;
    const VERSION: string;
    const ZONES_TAB_SYSTEM_FILENAME: string;
    /**
     * }
     * ```
     */
    function bt(): void;
    /**
     * @param dest
     * @param src
     * @param size
     */
    function decode_base64(dest: string, src: string, size: number): string;
    /**
     * @param dest
     * @param src
     * @param size
     */
    function decode_quoted_printable(dest: string, src: string, size: number): string;
    function free_zone_directory(): void;
    function get_unknown_token_handling_setting(): _unknown_token_handling;
    function get_zone_directory(): string;
    /**
     * @param array
     * @param element
     */
    function icalarray_append(array: array, element?: any | null): void;
    /**
     * @param array
     * @param position
     */
    function icalarray_element_at(array: array, position: number): any | null;
    /**
     * `par` Usage
     * ```c
     * // create new array
     * icalarray *array = icalarray_new(sizeof(int), 1);
     *
     * // use array
     * int a = 4;
     * icalarray_append(array, &a);
     * assert(*icalarray_element_at(array, 0) == a);
     *
     * // release memory
     * icalarray_free(array);
     * ```
     * @param array
     */
    function icalarray_free(array: array): void;
    /**
     * @param array
     * @param position
     */
    function icalarray_remove_element_at(array: array, position: number): void;
    /**
     * @param array
     * @param compare
     */
    function icalarray_sort(array: array, compare?: any | null): void;
    /**
     * @param attach
     */
    function icalattach_get_data(attach: attach): number;
    /**
     * @param attach
     */
    function icalattach_get_is_url(attach: attach): number;
    /**
     * @param attach
     */
    function icalattach_get_url(attach: attach): string;
    /**
     * @param attach
     */
    function icalattach_ref(attach: attach): void;
    /**
     * @param attach
     */
    function icalattach_unref(attach: attach): void;
    /**
     * @param parent
     * @param child
     */
    function icalcomponent_add_component(parent: component, child: component): void;
    /**
     * @param component
     * @param property
     */
    function icalcomponent_add_property(component: component, property: property): void;
    /**
     * @param component
     */
    function icalcomponent_as_ical_string(component: component): string;
    /**
     * @param component
     */
    function icalcomponent_as_ical_string_r(component: component): string;
    /**
     * @param comp
     */
    function icalcomponent_check_restrictions(comp: component): number;
    /**
     * @param component
     */
    function icalcomponent_convert_errors(component: component): void;
    /**
     * @param component
     * @param kind
     */
    function icalcomponent_count_components(component: component, kind: component_kind | null): number;
    /**
     * @param component
     */
    function icalcomponent_count_errors(component: component): number;
    /**
     * @param component
     * @param kind
     */
    function icalcomponent_count_properties(component: component, kind: property_kind | null): number;
    /**
     * @param comp
     * @param start
     * @param end
     * @param callback
     * @param callback_data
     */
    function icalcomponent_foreach_recurrence(
        comp: component,
        start?: any | null,
        end?: any | null,
        callback?: any | null,
        callback_data?: any | null,
    ): void;
    /**
     * @param comp
     * @param callback
     * @param callback_data
     */
    function icalcomponent_foreach_tzid(comp: component, callback?: any | null, callback_data?: any | null): void;
    /**
     * @param component
     */
    function icalcomponent_free(component: component): void;
    /**
     * @param comp
     */
    function icalcomponent_get_comment(comp: component): string;
    /**
     * @param comp
     */
    function icalcomponent_get_description(comp: component): string;
    /**
     * @param comp
     */
    function icalcomponent_get_dtend(comp: component): any | null;
    /**
     * @param comp
     */
    function icalcomponent_get_dtstamp(comp: component): any | null;
    /**
     * @param comp
     */
    function icalcomponent_get_dtstart(comp: component): any | null;
    /**
     * @param comp
     */
    function icalcomponent_get_due(comp: component): any | null;
    /**
     * @param comp
     */
    function icalcomponent_get_duration(comp: component): any | null;
    /**
     * @param comp
     */
    function icalcomponent_get_location(comp: component): string;
    /**
     * @param comp
     */
    function icalcomponent_get_method(comp: component): property_method;
    /**
     * @param comp
     */
    function icalcomponent_get_recurrenceid(comp: component): any | null;
    /**
     * @param comp
     */
    function icalcomponent_get_relcalid(comp: component): string;
    /**
     * @param comp
     */
    function icalcomponent_get_sequence(comp: component): number;
    /**
     * @param comp
     */
    function icalcomponent_get_span(comp: component): any | null;
    /**
     * @param comp
     */
    function icalcomponent_get_status(comp: component): any | null;
    /**
     * @param comp
     */
    function icalcomponent_get_summary(comp: component): string;
    /**
     * @param comp
     */
    function icalcomponent_get_uid(comp: component): string;
    /**
     * @param component
     */
    function icalcomponent_is_valid(component: component): number;
    /**
     * @param component
     */
    function icalcomponent_isa(component: component): component_kind;
    /**
     * @param component
     */
    function icalcomponent_isa_component(component?: any | null): number;
    /**
     * @param kind
     */
    function icalcomponent_kind_is_valid(kind: component_kind | null): number;
    /**
     * @param kind
     */
    function icalcomponent_kind_to_string(kind: component_kind | null): string;
    /**
     * @param comp
     * @param comp_to_merge
     */
    function icalcomponent_merge_component(comp: component, comp_to_merge: component): void;
    /**
     * @param comp
     */
    function icalcomponent_normalize(comp: component): void;
    /**
     * @param parent
     * @param child
     */
    function icalcomponent_remove_component(parent: component, child: component): void;
    /**
     * @param component
     * @param property
     */
    function icalcomponent_remove_property(component: component, property: property): void;
    /**
     * @param comp
     * @param v
     */
    function icalcomponent_set_comment(comp: component, v: string): void;
    /**
     * @param comp
     * @param v
     */
    function icalcomponent_set_description(comp: component, v: string): void;
    /**
     * @param comp
     * @param v
     */
    function icalcomponent_set_dtend(comp: component, v?: any | null): void;
    /**
     * @param comp
     * @param v
     */
    function icalcomponent_set_dtstamp(comp: component, v?: any | null): void;
    /**
     * @param comp
     * @param v
     */
    function icalcomponent_set_dtstart(comp: component, v?: any | null): void;
    /**
     * @param comp
     * @param v
     */
    function icalcomponent_set_due(comp: component, v?: any | null): void;
    /**
     * @param comp
     * @param v
     */
    function icalcomponent_set_duration(comp: component, v?: any | null): void;
    /**
     * @param comp
     * @param v
     */
    function icalcomponent_set_location(comp: component, v: string): void;
    /**
     * @param comp
     * @param method
     */
    function icalcomponent_set_method(comp: component, method: property_method | null): void;
    /**
     * @param component
     * @param parent
     */
    function icalcomponent_set_parent(component: component, parent: component): void;
    /**
     * @param comp
     * @param v
     */
    function icalcomponent_set_recurrenceid(comp: component, v?: any | null): void;
    /**
     * @param comp
     * @param v
     */
    function icalcomponent_set_relcalid(comp: component, v: string): void;
    /**
     * @param comp
     * @param v
     */
    function icalcomponent_set_sequence(comp: component, v: number): void;
    /**
     * @param comp
     * @param v
     */
    function icalcomponent_set_status(comp: component, v?: any | null): void;
    /**
     * @param comp
     * @param v
     */
    function icalcomponent_set_summary(comp: component, v: string): void;
    /**
     * @param comp
     * @param v
     */
    function icalcomponent_set_uid(comp: component, v: string): void;
    /**
     * @param string
     */
    function icalcomponent_string_to_kind(string: string): component_kind;
    /**
     * @param component
     */
    function icalcomponent_strip_errors(component: component): void;
    /**
     * @param d
     */
    function icaldurationtype_as_ical_string(d?: any | null): string;
    /**
     * @param d
     */
    function icaldurationtype_as_ical_string_r(d?: any | null): string;
    /**
     * @param duration
     */
    function icaldurationtype_as_int(duration?: any | null): number;
    function icaldurationtype_bad_duration(): any | null;
    /**
     * @param t
     */
    function icaldurationtype_from_int(t: number): any | null;
    /**
     * @param dur
     */
    function icaldurationtype_from_string(dur: string): any | null;
    /**
     * @param d
     */
    function icaldurationtype_is_bad_duration(d?: any | null): number;
    /**
     * @param d
     */
    function icaldurationtype_is_null_duration(d?: any | null): number;
    function icaldurationtype_null_duration(): any | null;
    /**
     * @param major
     * @param minor
     */
    function icalenum_num_to_reqstat(major: number, minor: number): requeststatus;
    /**
     * @param stat
     */
    function icalenum_reqstat_code(stat: requeststatus | null): string;
    /**
     * @param stat
     */
    function icalenum_reqstat_code_r(stat: requeststatus | null): string;
    /**
     * @param stat
     */
    function icalenum_reqstat_desc(stat: requeststatus | null): string;
    /**
     * @param stat
     */
    function icalenum_reqstat_major(stat: requeststatus | null): number;
    /**
     * @param stat
     */
    function icalenum_reqstat_minor(stat: requeststatus | null): number;
    function icalerrno_return(): errorenum;
    /**
     * }
     * ```
     */
    function icalerror_clear_errno(): void;
    function icalerror_crash_here(): void;
    /**
     * @param str
     */
    function icalerror_error_from_string(str: string): errorenum;
    /**
     * @param error
     */
    function icalerror_get_error_state(error: errorenum | null): errorstate;
    function icalerror_get_errors_are_fatal(): number;
    function icalerror_perror(): string;
    /**
     * @param error
     * @param es
     */
    function icalerror_restore(error: string, es: errorstate | null): void;
    /**
     * @param x
     */
    function icalerror_set_errno(x: errorenum | null): void;
    /**
     * @param error
     * @param state
     */
    function icalerror_set_error_state(error: errorenum | null, state: errorstate | null): void;
    /**
     * @param fatal
     */
    function icalerror_set_errors_are_fatal(fatal: number): void;
    function icalerror_stop_here(): void;
    /**
     * @param e
     */
    function icalerror_strerror(e: errorenum | null): string;
    /**
     * @param error
     */
    function icalerror_supress(error: string): errorstate;
    /**
     * @param array
     * @param index
     */
    function icallangbind_access_array(array: number, index: number): number;
    /**
     * @param array
     */
    function icallangbind_free_array(array: number): void;
    /**
     * @param size
     */
    function icallangbind_new_array(size: number): number;
    /**
     * @param prop
     * @param sep
     */
    function icallangbind_property_eval_string(prop: property, sep: string): string;
    /**
     * @param prop
     * @param sep
     */
    function icallangbind_property_eval_string_r(prop: property, sep: string): string;
    /**
     * @param str
     */
    function icallangbind_quote_as_ical(str: string): string;
    /**
     * @param str
     */
    function icallangbind_quote_as_ical_r(str: string): string;
    /**
     * @param str
     */
    function icallangbind_string_to_open_flag(str: string): number;
    /**
     * @param buf
     */
    function icalmemory_add_tmp_buffer(buf?: any | null): void;
    /**
     * @param buf
     * @param pos
     * @param buf_size
     * @param ch
     */
    function icalmemory_append_char(buf: string, pos: string, buf_size: number, ch: number): void;
    /**
     * @param buf
     * @param pos
     * @param buf_size
     * @param string
     */
    function icalmemory_append_string(buf: string, pos: string, buf_size: number, string: string): void;
    /**
     * @param buf
     */
    function icalmemory_free_buffer(buf?: any | null): void;
    /**
     * ```
     */
    function icalmemory_free_ring(): void;
    /**
     * @param size
     */
    function icalmemory_new_buffer(size: number): any | null;
    /**
     * @param buf
     * @param size
     */
    function icalmemory_resize_buffer(buf: any | null, size: number): any | null;
    /**
     * @param s
     */
    function icalmemory_strdup(s: string): string;
    /**
     * @param size
     */
    function icalmemory_tmp_buffer(size: number): any | null;
    /**
     * @param str
     */
    function icalmemory_tmp_copy(str: string): string;
    /**
     * `par` Usage
     * ```c
     * icalparameter *param = icalparameter_new_from_string("ROLE=CHAIR");
     *
     * if(param) {
     *     char *str = icalparameter_as_ical_string(param);
     *     printf("%s\n", str);
     *     free(str);
     * }
     *
     * icalparameter_free(param);
     * ```
     * @param parameter
     */
    function icalparameter_as_ical_string(parameter: parameter): string;
    /**
     * @param parameter
     */
    function icalparameter_as_ical_string_r(parameter: parameter): string;
    /**
     * @param e
     */
    function icalparameter_enum_to_string(e: number): string;
    /**
     * @param parameter
     */
    function icalparameter_free(parameter: parameter): void;
    /**
     * @param value
     */
    function icalparameter_get_actionparam(value: parameter): parameter_action;
    /**
     * @param value
     */
    function icalparameter_get_altrep(value: parameter): string;
    /**
     * @param value
     */
    function icalparameter_get_charset(value: parameter): string;
    /**
     * @param value
     */
    function icalparameter_get_cn(value: parameter): string;
    /**
     * @param value
     */
    function icalparameter_get_cutype(value: parameter): parameter_cutype;
    /**
     * @param value
     */
    function icalparameter_get_delegatedfrom(value: parameter): string;
    /**
     * @param value
     */
    function icalparameter_get_delegatedto(value: parameter): string;
    /**
     * @param value
     */
    function icalparameter_get_dir(value: parameter): string;
    /**
     * @param value
     */
    function icalparameter_get_display(value: parameter): parameter_display;
    /**
     * @param value
     */
    function icalparameter_get_email(value: parameter): string;
    /**
     * @param value
     */
    function icalparameter_get_enable(value: parameter): parameter_enable;
    /**
     * @param value
     */
    function icalparameter_get_encoding(value: parameter): parameter_encoding;
    /**
     * @param value
     */
    function icalparameter_get_fbtype(value: parameter): parameter_fbtype;
    /**
     * @param value
     */
    function icalparameter_get_feature(value: parameter): parameter_feature;
    /**
     * @param value
     */
    function icalparameter_get_filename(value: parameter): string;
    /**
     * @param value
     */
    function icalparameter_get_fmttype(value: parameter): string;
    /**
     * @param value
     */
    function icalparameter_get_iana(value: parameter): string;
    /**
     * @param param
     */
    function icalparameter_get_iana_name(param: parameter): string;
    /**
     * @param param
     */
    function icalparameter_get_iana_value(param: parameter): string;
    /**
     * @param value
     */
    function icalparameter_get_id(value: parameter): string;
    /**
     * @param value
     */
    function icalparameter_get_label(value: parameter): string;
    /**
     * @param value
     */
    function icalparameter_get_language(value: parameter): string;
    /**
     * @param value
     */
    function icalparameter_get_latency(value: parameter): string;
    /**
     * @param value
     */
    function icalparameter_get_local(value: parameter): parameter_local;
    /**
     * @param value
     */
    function icalparameter_get_localize(value: parameter): string;
    /**
     * @param value
     */
    function icalparameter_get_managedid(value: parameter): string;
    /**
     * @param value
     */
    function icalparameter_get_member(value: parameter): string;
    /**
     * @param value
     */
    function icalparameter_get_modified(value: parameter): string;
    /**
     * @param value
     */
    function icalparameter_get_options(value: parameter): string;
    /**
     * @param value
     */
    function icalparameter_get_partstat(value: parameter): parameter_partstat;
    /**
     * @param value
     */
    function icalparameter_get_patchaction(value: parameter): parameter_patchaction;
    /**
     * @param value
     */
    function icalparameter_get_publiccomment(value: parameter): string;
    /**
     * @param value
     */
    function icalparameter_get_range(value: parameter): parameter_range;
    /**
     * @param value
     */
    function icalparameter_get_reason(value: parameter): string;
    /**
     * @param value
     */
    function icalparameter_get_related(value: parameter): parameter_related;
    /**
     * @param value
     */
    function icalparameter_get_reltype(value: parameter): parameter_reltype;
    /**
     * @param value
     */
    function icalparameter_get_required(value: parameter): parameter_required;
    /**
     * @param value
     */
    function icalparameter_get_response(value: parameter): number;
    /**
     * @param value
     */
    function icalparameter_get_role(value: parameter): parameter_role;
    /**
     * @param value
     */
    function icalparameter_get_rsvp(value: parameter): parameter_rsvp;
    /**
     * @param value
     */
    function icalparameter_get_scheduleagent(value: parameter): parameter_scheduleagent;
    /**
     * @param value
     */
    function icalparameter_get_scheduleforcesend(value: parameter): parameter_scheduleforcesend;
    /**
     * @param value
     */
    function icalparameter_get_schedulestatus(value: parameter): string;
    /**
     * @param value
     */
    function icalparameter_get_sentby(value: parameter): string;
    /**
     * @param value
     */
    function icalparameter_get_size(value: parameter): string;
    /**
     * @param value
     */
    function icalparameter_get_stayinformed(value: parameter): parameter_stayinformed;
    /**
     * @param value
     */
    function icalparameter_get_substate(value: parameter): parameter_substate;
    /**
     * @param value
     */
    function icalparameter_get_tzid(value: parameter): string;
    /**
     * @param value
     */
    function icalparameter_get_value(value: parameter): parameter_value;
    /**
     * @param value
     */
    function icalparameter_get_x(value: parameter): string;
    /**
     * @param value
     */
    function icalparameter_get_xliccomparetype(value: parameter): parameter_xliccomparetype;
    /**
     * @param value
     */
    function icalparameter_get_xlicerrortype(value: parameter): parameter_xlicerrortype;
    /**
     * @param param
     */
    function icalparameter_get_xname(param: parameter): string;
    /**
     * @param param
     */
    function icalparameter_get_xvalue(param: parameter): string;
    /**
     * @param param1
     * @param param2
     */
    function icalparameter_has_same_name(param1: parameter, param2: parameter): number;
    /**
     * @param parameter
     */
    function icalparameter_isa(parameter: parameter): parameter_kind;
    /**
     * @param param
     */
    function icalparameter_isa_parameter(param?: any | null): number;
    /**
     * @param kind
     */
    function icalparameter_kind_is_valid(kind: parameter_kind | null): number;
    /**
     * @param kind
     */
    function icalparameter_kind_to_string(kind: parameter_kind | null): string;
    /**
     * @param value
     * @param v
     */
    function icalparameter_set_actionparam(value: parameter, v: parameter_action | null): void;
    /**
     * @param value
     * @param v
     */
    function icalparameter_set_altrep(value: parameter, v: string): void;
    /**
     * @param value
     * @param v
     */
    function icalparameter_set_charset(value: parameter, v: string): void;
    /**
     * @param value
     * @param v
     */
    function icalparameter_set_cn(value: parameter, v: string): void;
    /**
     * @param value
     * @param v
     */
    function icalparameter_set_cutype(value: parameter, v: parameter_cutype | null): void;
    /**
     * @param value
     * @param v
     */
    function icalparameter_set_delegatedfrom(value: parameter, v: string): void;
    /**
     * @param value
     * @param v
     */
    function icalparameter_set_delegatedto(value: parameter, v: string): void;
    /**
     * @param value
     * @param v
     */
    function icalparameter_set_dir(value: parameter, v: string): void;
    /**
     * @param value
     * @param v
     */
    function icalparameter_set_display(value: parameter, v: parameter_display | null): void;
    /**
     * @param value
     * @param v
     */
    function icalparameter_set_email(value: parameter, v: string): void;
    /**
     * @param value
     * @param v
     */
    function icalparameter_set_enable(value: parameter, v: parameter_enable | null): void;
    /**
     * @param value
     * @param v
     */
    function icalparameter_set_encoding(value: parameter, v: parameter_encoding | null): void;
    /**
     * @param value
     * @param v
     */
    function icalparameter_set_fbtype(value: parameter, v: parameter_fbtype | null): void;
    /**
     * @param value
     * @param v
     */
    function icalparameter_set_feature(value: parameter, v: parameter_feature | null): void;
    /**
     * @param value
     * @param v
     */
    function icalparameter_set_filename(value: parameter, v: string): void;
    /**
     * @param value
     * @param v
     */
    function icalparameter_set_fmttype(value: parameter, v: string): void;
    /**
     * @param value
     * @param v
     */
    function icalparameter_set_iana(value: parameter, v: string): void;
    /**
     * @param param
     * @param v
     */
    function icalparameter_set_iana_name(param: parameter, v: string): void;
    /**
     * @param param
     * @param v
     */
    function icalparameter_set_iana_value(param: parameter, v: string): void;
    /**
     * @param value
     * @param v
     */
    function icalparameter_set_id(value: parameter, v: string): void;
    /**
     * @param value
     * @param v
     */
    function icalparameter_set_label(value: parameter, v: string): void;
    /**
     * @param value
     * @param v
     */
    function icalparameter_set_language(value: parameter, v: string): void;
    /**
     * @param value
     * @param v
     */
    function icalparameter_set_latency(value: parameter, v: string): void;
    /**
     * @param value
     * @param v
     */
    function icalparameter_set_local(value: parameter, v: parameter_local | null): void;
    /**
     * @param value
     * @param v
     */
    function icalparameter_set_localize(value: parameter, v: string): void;
    /**
     * @param value
     * @param v
     */
    function icalparameter_set_managedid(value: parameter, v: string): void;
    /**
     * @param value
     * @param v
     */
    function icalparameter_set_member(value: parameter, v: string): void;
    /**
     * @param value
     * @param v
     */
    function icalparameter_set_modified(value: parameter, v: string): void;
    /**
     * @param value
     * @param v
     */
    function icalparameter_set_options(value: parameter, v: string): void;
    /**
     * @param param
     * @param property
     */
    function icalparameter_set_parent(param: parameter, property: property): void;
    /**
     * @param value
     * @param v
     */
    function icalparameter_set_partstat(value: parameter, v: parameter_partstat | null): void;
    /**
     * @param value
     * @param v
     */
    function icalparameter_set_patchaction(value: parameter, v: parameter_patchaction | null): void;
    /**
     * @param value
     * @param v
     */
    function icalparameter_set_publiccomment(value: parameter, v: string): void;
    /**
     * @param value
     * @param v
     */
    function icalparameter_set_range(value: parameter, v: parameter_range | null): void;
    /**
     * @param value
     * @param v
     */
    function icalparameter_set_reason(value: parameter, v: string): void;
    /**
     * @param value
     * @param v
     */
    function icalparameter_set_related(value: parameter, v: parameter_related | null): void;
    /**
     * @param value
     * @param v
     */
    function icalparameter_set_reltype(value: parameter, v: parameter_reltype | null): void;
    /**
     * @param value
     * @param v
     */
    function icalparameter_set_required(value: parameter, v: parameter_required | null): void;
    /**
     * @param value
     * @param v
     */
    function icalparameter_set_response(value: parameter, v: number): void;
    /**
     * @param value
     * @param v
     */
    function icalparameter_set_role(value: parameter, v: parameter_role | null): void;
    /**
     * @param value
     * @param v
     */
    function icalparameter_set_rsvp(value: parameter, v: parameter_rsvp | null): void;
    /**
     * @param value
     * @param v
     */
    function icalparameter_set_scheduleagent(value: parameter, v: parameter_scheduleagent | null): void;
    /**
     * @param value
     * @param v
     */
    function icalparameter_set_scheduleforcesend(value: parameter, v: parameter_scheduleforcesend | null): void;
    /**
     * @param value
     * @param v
     */
    function icalparameter_set_schedulestatus(value: parameter, v: string): void;
    /**
     * @param value
     * @param v
     */
    function icalparameter_set_sentby(value: parameter, v: string): void;
    /**
     * @param value
     * @param v
     */
    function icalparameter_set_size(value: parameter, v: string): void;
    /**
     * @param value
     * @param v
     */
    function icalparameter_set_stayinformed(value: parameter, v: parameter_stayinformed | null): void;
    /**
     * @param value
     * @param v
     */
    function icalparameter_set_substate(value: parameter, v: parameter_substate | null): void;
    /**
     * @param value
     * @param v
     */
    function icalparameter_set_tzid(value: parameter, v: string): void;
    /**
     * @param value
     * @param v
     */
    function icalparameter_set_value(value: parameter, v: parameter_value | null): void;
    /**
     * @param value
     * @param v
     */
    function icalparameter_set_x(value: parameter, v: string): void;
    /**
     * @param value
     * @param v
     */
    function icalparameter_set_xliccomparetype(value: parameter, v: parameter_xliccomparetype | null): void;
    /**
     * @param value
     * @param v
     */
    function icalparameter_set_xlicerrortype(value: parameter, v: parameter_xlicerrortype | null): void;
    /**
     * @param param
     * @param v
     */
    function icalparameter_set_xname(param: parameter, v: string): void;
    /**
     * @param param
     * @param v
     */
    function icalparameter_set_xvalue(param: parameter, v: string): void;
    /**
     * @param str
     */
    function icalparameter_string_to_enum(str: string): number;
    /**
     * @param string
     */
    function icalparameter_string_to_kind(string: string): parameter_kind;
    /**
     * @param value
     */
    function icalparameter_value_to_value_kind(value: parameter_value | null): value_kind;
    /**
     * @param parser
     */
    function icalparser_free(parser: parser): void;
    /**
     * @param parser
     */
    function icalparser_get_state(parser: parser): parser_state;
    /**
     * @param parser
     * @param data
     */
    function icalparser_set_gen_data(parser: parser, data?: any | null): void;
    /**
     * @param out
     * @param buf_size
     * @param d
     */
    function icalparser_string_line_generator(out: string, buf_size: number, d?: any | null): string;
    /**
     * @param p
     */
    function icalperiodtype_as_ical_string(p?: any | null): string;
    /**
     * @param p
     */
    function icalperiodtype_as_ical_string_r(p?: any | null): string;
    /**
     * @param str
     */
    function icalperiodtype_from_string(str: string): any | null;
    /**
     * @param p
     */
    function icalperiodtype_is_null_period(p?: any | null): number;
    /**
     * @param p
     */
    function icalperiodtype_is_valid_period(p?: any | null): number;
    function icalperiodtype_null_period(): any | null;
    /**
     * @param prop
     * @param parameter
     */
    function icalproperty_add_parameter(prop: property, parameter: parameter): void;
    /**
     * @param prop
     */
    function icalproperty_as_ical_string(prop: property): string;
    /**
     * @param prop
     */
    function icalproperty_as_ical_string_r(prop: property): string;
    /**
     * @param prop
     */
    function icalproperty_count_parameters(prop: property): number;
    /**
     * @param kind
     * @param e
     */
    function icalproperty_enum_belongs_to_property(kind: property_kind | null, e: number): number;
    /**
     * @param e
     */
    function icalproperty_enum_to_string(e: number): string;
    /**
     * @param e
     */
    function icalproperty_enum_to_string_r(e: number): string;
    /**
     * @param prop
     */
    function icalproperty_free(prop: property): void;
    /**
     * @param prop
     */
    function icalproperty_get_acceptresponse(prop: property): string;
    /**
     * @param prop
     */
    function icalproperty_get_acknowledged(prop: property): any | null;
    /**
     * @param prop
     */
    function icalproperty_get_action(prop: property): any | null;
    /**
     * @param prop
     */
    function icalproperty_get_allowconflict(prop: property): string;
    /**
     * @param prop
     */
    function icalproperty_get_attendee(prop: property): string;
    /**
     * @param prop
     */
    function icalproperty_get_busytype(prop: property): any | null;
    /**
     * @param prop
     */
    function icalproperty_get_calid(prop: property): string;
    /**
     * @param prop
     */
    function icalproperty_get_calmaster(prop: property): string;
    /**
     * @param prop
     */
    function icalproperty_get_calscale(prop: property): string;
    /**
     * @param prop
     */
    function icalproperty_get_capversion(prop: property): string;
    /**
     * @param prop
     */
    function icalproperty_get_carid(prop: property): string;
    /**
     * @param prop
     */
    function icalproperty_get_carlevel(prop: property): any | null;
    /**
     * @param prop
     */
    function icalproperty_get_categories(prop: property): string;
    /**
     * @param prop
     */
    function icalproperty_get_class(prop: property): any | null;
    /**
     * @param prop
     */
    function icalproperty_get_cmd(prop: property): any | null;
    /**
     * @param prop
     */
    function icalproperty_get_color(prop: property): string;
    /**
     * @param prop
     */
    function icalproperty_get_comment(prop: property): string;
    /**
     * @param prop
     */
    function icalproperty_get_completed(prop: property): any | null;
    /**
     * @param prop
     */
    function icalproperty_get_components(prop: property): string;
    /**
     * @param prop
     */
    function icalproperty_get_conference(prop: property): string;
    /**
     * @param prop
     */
    function icalproperty_get_contact(prop: property): string;
    /**
     * @param prop
     */
    function icalproperty_get_created(prop: property): any | null;
    /**
     * @param prop
     */
    function icalproperty_get_csid(prop: property): string;
    /**
     * @param prop
     */
    function icalproperty_get_datemax(prop: property): any | null;
    /**
     * @param prop
     */
    function icalproperty_get_datemin(prop: property): any | null;
    /**
     * @param prop
     * @param comp
     */
    function icalproperty_get_datetime_with_component(prop: property, comp: component): any | null;
    /**
     * @param prop
     */
    function icalproperty_get_decreed(prop: property): string;
    /**
     * @param prop
     */
    function icalproperty_get_defaultcharset(prop: property): string;
    /**
     * @param prop
     */
    function icalproperty_get_defaultlocale(prop: property): string;
    /**
     * @param prop
     */
    function icalproperty_get_defaulttzid(prop: property): string;
    /**
     * @param prop
     */
    function icalproperty_get_defaultvcars(prop: property): string;
    /**
     * @param prop
     */
    function icalproperty_get_deny(prop: property): string;
    /**
     * @param prop
     */
    function icalproperty_get_description(prop: property): string;
    /**
     * @param prop
     */
    function icalproperty_get_dtend(prop: property): any | null;
    /**
     * @param prop
     */
    function icalproperty_get_dtstamp(prop: property): any | null;
    /**
     * @param prop
     */
    function icalproperty_get_dtstart(prop: property): any | null;
    /**
     * @param prop
     */
    function icalproperty_get_due(prop: property): any | null;
    /**
     * @param prop
     */
    function icalproperty_get_duration(prop: property): any | null;
    /**
     * @param prop
     */
    function icalproperty_get_estimatedduration(prop: property): any | null;
    /**
     * @param prop
     */
    function icalproperty_get_exdate(prop: property): any | null;
    /**
     * @param prop
     */
    function icalproperty_get_expand(prop: property): number;
    /**
     * @param prop
     */
    function icalproperty_get_exrule(prop: property): any | null;
    /**
     * @param prop
     */
    function icalproperty_get_freebusy(prop: property): any | null;
    /**
     * @param prop
     */
    function icalproperty_get_geo(prop: property): any | null;
    /**
     * @param prop
     */
    function icalproperty_get_grant(prop: property): string;
    /**
     * @param prop
     */
    function icalproperty_get_itipversion(prop: property): string;
    /**
     * @param prop
     */
    function icalproperty_get_lastmodified(prop: property): any | null;
    /**
     * @param prop
     */
    function icalproperty_get_location(prop: property): string;
    /**
     * @param prop
     */
    function icalproperty_get_maxcomponentsize(prop: property): number;
    /**
     * @param prop
     */
    function icalproperty_get_maxdate(prop: property): any | null;
    /**
     * @param prop
     */
    function icalproperty_get_maxresults(prop: property): number;
    /**
     * @param prop
     */
    function icalproperty_get_maxresultssize(prop: property): number;
    /**
     * @param prop
     */
    function icalproperty_get_method(prop: property): any | null;
    /**
     * @param prop
     */
    function icalproperty_get_mindate(prop: property): any | null;
    /**
     * @param prop
     */
    function icalproperty_get_multipart(prop: property): string;
    /**
     * @param prop
     */
    function icalproperty_get_name(prop: property): string;
    /**
     * @param prop
     */
    function icalproperty_get_organizer(prop: property): string;
    /**
     * @param prop
     */
    function icalproperty_get_owner(prop: property): string;
    /**
     * @param prop
     * @param name
     */
    function icalproperty_get_parameter_as_string(prop: property, name: string): string;
    /**
     * @param prop
     * @param name
     */
    function icalproperty_get_parameter_as_string_r(prop: property, name: string): string;
    /**
     * @param prop
     */
    function icalproperty_get_patchdelete(prop: property): string;
    /**
     * @param prop
     */
    function icalproperty_get_patchorder(prop: property): number;
    /**
     * @param prop
     */
    function icalproperty_get_patchparameter(prop: property): string;
    /**
     * @param prop
     */
    function icalproperty_get_patchtarget(prop: property): string;
    /**
     * @param prop
     */
    function icalproperty_get_patchversion(prop: property): string;
    /**
     * @param prop
     */
    function icalproperty_get_percentcomplete(prop: property): number;
    /**
     * @param prop
     */
    function icalproperty_get_permission(prop: property): string;
    /**
     * @param prop
     */
    function icalproperty_get_pollcompletion(prop: property): any | null;
    /**
     * @param prop
     */
    function icalproperty_get_pollitemid(prop: property): number;
    /**
     * @param prop
     */
    function icalproperty_get_pollmode(prop: property): any | null;
    /**
     * @param prop
     */
    function icalproperty_get_pollproperties(prop: property): string;
    /**
     * @param prop
     */
    function icalproperty_get_pollwinner(prop: property): number;
    /**
     * @param prop
     */
    function icalproperty_get_priority(prop: property): number;
    /**
     * @param prop
     */
    function icalproperty_get_prodid(prop: property): string;
    /**
     * @param prop
     */
    function icalproperty_get_property_name(prop: property): string;
    /**
     * @param prop
     */
    function icalproperty_get_property_name_r(prop: property): string;
    /**
     * @param prop
     */
    function icalproperty_get_query(prop: property): string;
    /**
     * @param prop
     */
    function icalproperty_get_queryid(prop: property): string;
    /**
     * @param prop
     */
    function icalproperty_get_querylevel(prop: property): any | null;
    /**
     * @param prop
     */
    function icalproperty_get_queryname(prop: property): string;
    /**
     * @param prop
     */
    function icalproperty_get_rdate(prop: property): any | null;
    /**
     * @param prop
     */
    function icalproperty_get_recuraccepted(prop: property): string;
    /**
     * @param prop
     */
    function icalproperty_get_recurexpand(prop: property): string;
    /**
     * @param prop
     */
    function icalproperty_get_recurlimit(prop: property): string;
    /**
     * @param prop
     */
    function icalproperty_get_recurrenceid(prop: property): any | null;
    /**
     * @param prop
     */
    function icalproperty_get_refreshinterval(prop: property): any | null;
    /**
     * @param prop
     */
    function icalproperty_get_relatedto(prop: property): string;
    /**
     * @param prop
     */
    function icalproperty_get_relcalid(prop: property): string;
    /**
     * @param prop
     */
    function icalproperty_get_repeat(prop: property): number;
    /**
     * @param prop
     */
    function icalproperty_get_replyurl(prop: property): string;
    /**
     * @param prop
     */
    function icalproperty_get_requeststatus(prop: property): any | null;
    /**
     * @param prop
     */
    function icalproperty_get_resources(prop: property): string;
    /**
     * @param prop
     */
    function icalproperty_get_response(prop: property): number;
    /**
     * @param prop
     */
    function icalproperty_get_restriction(prop: property): string;
    /**
     * @param prop
     */
    function icalproperty_get_rrule(prop: property): any | null;
    /**
     * @param prop
     */
    function icalproperty_get_scope(prop: property): string;
    /**
     * @param prop
     */
    function icalproperty_get_sequence(prop: property): number;
    /**
     * @param prop
     */
    function icalproperty_get_source(prop: property): string;
    /**
     * @param prop
     */
    function icalproperty_get_status(prop: property): any | null;
    /**
     * @param prop
     */
    function icalproperty_get_storesexpanded(prop: property): string;
    /**
     * @param prop
     */
    function icalproperty_get_summary(prop: property): string;
    /**
     * @param prop
     */
    function icalproperty_get_target(prop: property): string;
    /**
     * @param prop
     */
    function icalproperty_get_taskmode(prop: property): any | null;
    /**
     * @param prop
     */
    function icalproperty_get_transp(prop: property): any | null;
    /**
     * @param prop
     */
    function icalproperty_get_trigger(prop: property): any | null;
    /**
     * @param prop
     */
    function icalproperty_get_tzid(prop: property): string;
    /**
     * @param prop
     */
    function icalproperty_get_tzidaliasof(prop: property): string;
    /**
     * @param prop
     */
    function icalproperty_get_tzname(prop: property): string;
    /**
     * @param prop
     */
    function icalproperty_get_tzoffsetfrom(prop: property): number;
    /**
     * @param prop
     */
    function icalproperty_get_tzoffsetto(prop: property): number;
    /**
     * @param prop
     */
    function icalproperty_get_tzuntil(prop: property): any | null;
    /**
     * @param prop
     */
    function icalproperty_get_tzurl(prop: property): string;
    /**
     * @param prop
     */
    function icalproperty_get_uid(prop: property): string;
    /**
     * @param prop
     */
    function icalproperty_get_url(prop: property): string;
    /**
     * @param prop
     */
    function icalproperty_get_value_as_string(prop: property): string;
    /**
     * @param prop
     */
    function icalproperty_get_value_as_string_r(prop: property): string;
    /**
     * @param prop
     */
    function icalproperty_get_version(prop: property): string;
    /**
     * @param prop
     */
    function icalproperty_get_voter(prop: property): string;
    /**
     * @param prop
     */
    function icalproperty_get_x(prop: property): string;
    /**
     * @param prop
     */
    function icalproperty_get_x_name(prop: property): string;
    /**
     * @param prop
     */
    function icalproperty_get_xlicclass(prop: property): any | null;
    /**
     * @param prop
     */
    function icalproperty_get_xlicclustercount(prop: property): string;
    /**
     * @param prop
     */
    function icalproperty_get_xlicerror(prop: property): string;
    /**
     * @param prop
     */
    function icalproperty_get_xlicmimecharset(prop: property): string;
    /**
     * @param prop
     */
    function icalproperty_get_xlicmimecid(prop: property): string;
    /**
     * @param prop
     */
    function icalproperty_get_xlicmimecontenttype(prop: property): string;
    /**
     * @param prop
     */
    function icalproperty_get_xlicmimeencoding(prop: property): string;
    /**
     * @param prop
     */
    function icalproperty_get_xlicmimefilename(prop: property): string;
    /**
     * @param prop
     */
    function icalproperty_get_xlicmimeoptinfo(prop: property): string;
    /**
     * @param property
     */
    function icalproperty_isa(property: property): property_kind;
    /**
     * @param property
     */
    function icalproperty_isa_property(property?: any | null): number;
    /**
     * @param kind
     * @param str
     */
    function icalproperty_kind_and_string_to_enum(kind: number, str: string): number;
    /**
     * @param kind
     */
    function icalproperty_kind_is_valid(kind: property_kind | null): number;
    /**
     * @param kind
     */
    function icalproperty_kind_to_string(kind: property_kind | null): string;
    /**
     * @param kind
     */
    function icalproperty_kind_to_value_kind(kind: property_kind | null): value_kind;
    /**
     * @param method
     */
    function icalproperty_method_to_string(method: property_method | null): string;
    /**
     * @param prop
     */
    function icalproperty_normalize(prop: property): void;
    /**
     * @param comp
     * @param dtstart
     * @param recurtime
     */
    function icalproperty_recurrence_is_excluded(comp: component, dtstart?: any | null, recurtime?: any | null): number;
    /**
     * @param prop
     * @param kind
     */
    function icalproperty_remove_parameter_by_kind(prop: property, kind: parameter_kind | null): void;
    /**
     * @param prop
     * @param name
     */
    function icalproperty_remove_parameter_by_name(prop: property, name: string): void;
    /**
     * parameters
     * @param prop
     * @param param
     */
    function icalproperty_remove_parameter_by_ref(prop: property, param: parameter): void;
    /**
     * @param prop
     * @param v
     */
    function icalproperty_set_acceptresponse(prop: property, v: string): void;
    /**
     * @param prop
     * @param v
     */
    function icalproperty_set_acknowledged(prop: property, v?: any | null): void;
    /**
     * @param prop
     * @param v
     */
    function icalproperty_set_action(prop: property, v?: any | null): void;
    /**
     * @param prop
     * @param v
     */
    function icalproperty_set_allowconflict(prop: property, v: string): void;
    /**
     * @param prop
     * @param v
     */
    function icalproperty_set_attach(prop: property, v: attach): void;
    /**
     * @param prop
     * @param v
     */
    function icalproperty_set_attendee(prop: property, v: string): void;
    /**
     * @param prop
     * @param v
     */
    function icalproperty_set_busytype(prop: property, v?: any | null): void;
    /**
     * @param prop
     * @param v
     */
    function icalproperty_set_calid(prop: property, v: string): void;
    /**
     * @param prop
     * @param v
     */
    function icalproperty_set_calmaster(prop: property, v: string): void;
    /**
     * @param prop
     * @param v
     */
    function icalproperty_set_calscale(prop: property, v: string): void;
    /**
     * @param prop
     * @param v
     */
    function icalproperty_set_capversion(prop: property, v: string): void;
    /**
     * @param prop
     * @param v
     */
    function icalproperty_set_carid(prop: property, v: string): void;
    /**
     * @param prop
     * @param v
     */
    function icalproperty_set_carlevel(prop: property, v?: any | null): void;
    /**
     * @param prop
     * @param v
     */
    function icalproperty_set_categories(prop: property, v: string): void;
    /**
     * @param prop
     * @param v
     */
    function icalproperty_set_class(prop: property, v?: any | null): void;
    /**
     * @param prop
     * @param v
     */
    function icalproperty_set_cmd(prop: property, v?: any | null): void;
    /**
     * @param prop
     * @param v
     */
    function icalproperty_set_color(prop: property, v: string): void;
    /**
     * @param prop
     * @param v
     */
    function icalproperty_set_comment(prop: property, v: string): void;
    /**
     * @param prop
     * @param v
     */
    function icalproperty_set_completed(prop: property, v?: any | null): void;
    /**
     * @param prop
     * @param v
     */
    function icalproperty_set_components(prop: property, v: string): void;
    /**
     * @param prop
     * @param v
     */
    function icalproperty_set_conference(prop: property, v: string): void;
    /**
     * @param prop
     * @param v
     */
    function icalproperty_set_contact(prop: property, v: string): void;
    /**
     * @param prop
     * @param v
     */
    function icalproperty_set_created(prop: property, v?: any | null): void;
    /**
     * @param prop
     * @param v
     */
    function icalproperty_set_csid(prop: property, v: string): void;
    /**
     * @param prop
     * @param v
     */
    function icalproperty_set_datemax(prop: property, v?: any | null): void;
    /**
     * @param prop
     * @param v
     */
    function icalproperty_set_datemin(prop: property, v?: any | null): void;
    /**
     * @param prop
     * @param v
     */
    function icalproperty_set_decreed(prop: property, v: string): void;
    /**
     * @param prop
     * @param v
     */
    function icalproperty_set_defaultcharset(prop: property, v: string): void;
    /**
     * @param prop
     * @param v
     */
    function icalproperty_set_defaultlocale(prop: property, v: string): void;
    /**
     * @param prop
     * @param v
     */
    function icalproperty_set_defaulttzid(prop: property, v: string): void;
    /**
     * @param prop
     * @param v
     */
    function icalproperty_set_defaultvcars(prop: property, v: string): void;
    /**
     * @param prop
     * @param v
     */
    function icalproperty_set_deny(prop: property, v: string): void;
    /**
     * @param prop
     * @param v
     */
    function icalproperty_set_description(prop: property, v: string): void;
    /**
     * @param prop
     * @param v
     */
    function icalproperty_set_dtend(prop: property, v?: any | null): void;
    /**
     * @param prop
     * @param v
     */
    function icalproperty_set_dtstamp(prop: property, v?: any | null): void;
    /**
     * @param prop
     * @param v
     */
    function icalproperty_set_dtstart(prop: property, v?: any | null): void;
    /**
     * @param prop
     * @param v
     */
    function icalproperty_set_due(prop: property, v?: any | null): void;
    /**
     * @param prop
     * @param v
     */
    function icalproperty_set_duration(prop: property, v?: any | null): void;
    /**
     * @param prop
     * @param v
     */
    function icalproperty_set_estimatedduration(prop: property, v?: any | null): void;
    /**
     * @param prop
     * @param v
     */
    function icalproperty_set_exdate(prop: property, v?: any | null): void;
    /**
     * @param prop
     * @param v
     */
    function icalproperty_set_expand(prop: property, v: number): void;
    /**
     * @param prop
     * @param v
     */
    function icalproperty_set_exrule(prop: property, v?: any | null): void;
    /**
     * @param prop
     * @param v
     */
    function icalproperty_set_freebusy(prop: property, v?: any | null): void;
    /**
     * @param prop
     * @param v
     */
    function icalproperty_set_geo(prop: property, v?: any | null): void;
    /**
     * @param prop
     * @param v
     */
    function icalproperty_set_grant(prop: property, v: string): void;
    /**
     * @param prop
     * @param v
     */
    function icalproperty_set_image(prop: property, v: attach): void;
    /**
     * @param prop
     * @param v
     */
    function icalproperty_set_itipversion(prop: property, v: string): void;
    /**
     * @param prop
     * @param v
     */
    function icalproperty_set_lastmodified(prop: property, v?: any | null): void;
    /**
     * @param prop
     * @param v
     */
    function icalproperty_set_location(prop: property, v: string): void;
    /**
     * @param prop
     * @param v
     */
    function icalproperty_set_maxcomponentsize(prop: property, v: number): void;
    /**
     * @param prop
     * @param v
     */
    function icalproperty_set_maxdate(prop: property, v?: any | null): void;
    /**
     * @param prop
     * @param v
     */
    function icalproperty_set_maxresults(prop: property, v: number): void;
    /**
     * @param prop
     * @param v
     */
    function icalproperty_set_maxresultssize(prop: property, v: number): void;
    /**
     * @param prop
     * @param v
     */
    function icalproperty_set_method(prop: property, v?: any | null): void;
    /**
     * @param prop
     * @param v
     */
    function icalproperty_set_mindate(prop: property, v?: any | null): void;
    /**
     * @param prop
     * @param v
     */
    function icalproperty_set_multipart(prop: property, v: string): void;
    /**
     * @param prop
     * @param v
     */
    function icalproperty_set_name(prop: property, v: string): void;
    /**
     * @param prop
     * @param v
     */
    function icalproperty_set_organizer(prop: property, v: string): void;
    /**
     * @param prop
     * @param v
     */
    function icalproperty_set_owner(prop: property, v: string): void;
    /**
     * @param prop
     * @param parameter
     */
    function icalproperty_set_parameter(prop: property, parameter: parameter): void;
    /**
     * @param prop
     * @param name
     * @param value
     */
    function icalproperty_set_parameter_from_string(prop: property, name: string, value: string): void;
    /**
     * @param property
     * @param component
     */
    function icalproperty_set_parent(property: property, component: component): void;
    /**
     * @param prop
     * @param v
     */
    function icalproperty_set_patchdelete(prop: property, v: string): void;
    /**
     * @param prop
     * @param v
     */
    function icalproperty_set_patchorder(prop: property, v: number): void;
    /**
     * @param prop
     * @param v
     */
    function icalproperty_set_patchparameter(prop: property, v: string): void;
    /**
     * @param prop
     * @param v
     */
    function icalproperty_set_patchtarget(prop: property, v: string): void;
    /**
     * @param prop
     * @param v
     */
    function icalproperty_set_patchversion(prop: property, v: string): void;
    /**
     * @param prop
     * @param v
     */
    function icalproperty_set_percentcomplete(prop: property, v: number): void;
    /**
     * @param prop
     * @param v
     */
    function icalproperty_set_permission(prop: property, v: string): void;
    /**
     * @param prop
     * @param v
     */
    function icalproperty_set_pollcompletion(prop: property, v?: any | null): void;
    /**
     * @param prop
     * @param v
     */
    function icalproperty_set_pollitemid(prop: property, v: number): void;
    /**
     * @param prop
     * @param v
     */
    function icalproperty_set_pollmode(prop: property, v?: any | null): void;
    /**
     * @param prop
     * @param v
     */
    function icalproperty_set_pollproperties(prop: property, v: string): void;
    /**
     * @param prop
     * @param v
     */
    function icalproperty_set_pollwinner(prop: property, v: number): void;
    /**
     * @param prop
     * @param v
     */
    function icalproperty_set_priority(prop: property, v: number): void;
    /**
     * @param prop
     * @param v
     */
    function icalproperty_set_prodid(prop: property, v: string): void;
    /**
     * @param prop
     * @param v
     */
    function icalproperty_set_query(prop: property, v: string): void;
    /**
     * @param prop
     * @param v
     */
    function icalproperty_set_queryid(prop: property, v: string): void;
    /**
     * @param prop
     * @param v
     */
    function icalproperty_set_querylevel(prop: property, v?: any | null): void;
    /**
     * @param prop
     * @param v
     */
    function icalproperty_set_queryname(prop: property, v: string): void;
    /**
     * @param prop
     * @param v
     */
    function icalproperty_set_rdate(prop: property, v?: any | null): void;
    /**
     * @param prop
     * @param v
     */
    function icalproperty_set_recuraccepted(prop: property, v: string): void;
    /**
     * @param prop
     * @param v
     */
    function icalproperty_set_recurexpand(prop: property, v: string): void;
    /**
     * @param prop
     * @param v
     */
    function icalproperty_set_recurlimit(prop: property, v: string): void;
    /**
     * @param prop
     * @param v
     */
    function icalproperty_set_recurrenceid(prop: property, v?: any | null): void;
    /**
     * @param prop
     * @param v
     */
    function icalproperty_set_refreshinterval(prop: property, v?: any | null): void;
    /**
     * @param prop
     * @param v
     */
    function icalproperty_set_relatedto(prop: property, v: string): void;
    /**
     * @param prop
     * @param v
     */
    function icalproperty_set_relcalid(prop: property, v: string): void;
    /**
     * @param prop
     * @param v
     */
    function icalproperty_set_repeat(prop: property, v: number): void;
    /**
     * @param prop
     * @param v
     */
    function icalproperty_set_replyurl(prop: property, v: string): void;
    /**
     * @param prop
     * @param v
     */
    function icalproperty_set_requeststatus(prop: property, v?: any | null): void;
    /**
     * @param prop
     * @param v
     */
    function icalproperty_set_resources(prop: property, v: string): void;
    /**
     * @param prop
     * @param v
     */
    function icalproperty_set_response(prop: property, v: number): void;
    /**
     * @param prop
     * @param v
     */
    function icalproperty_set_restriction(prop: property, v: string): void;
    /**
     * @param prop
     * @param v
     */
    function icalproperty_set_rrule(prop: property, v?: any | null): void;
    /**
     * @param prop
     * @param v
     */
    function icalproperty_set_scope(prop: property, v: string): void;
    /**
     * @param prop
     * @param v
     */
    function icalproperty_set_sequence(prop: property, v: number): void;
    /**
     * @param prop
     * @param v
     */
    function icalproperty_set_source(prop: property, v: string): void;
    /**
     * @param prop
     * @param v
     */
    function icalproperty_set_status(prop: property, v?: any | null): void;
    /**
     * @param prop
     * @param v
     */
    function icalproperty_set_storesexpanded(prop: property, v: string): void;
    /**
     * @param prop
     * @param v
     */
    function icalproperty_set_summary(prop: property, v: string): void;
    /**
     * @param prop
     * @param v
     */
    function icalproperty_set_target(prop: property, v: string): void;
    /**
     * @param prop
     * @param v
     */
    function icalproperty_set_taskmode(prop: property, v?: any | null): void;
    /**
     * @param prop
     * @param v
     */
    function icalproperty_set_transp(prop: property, v?: any | null): void;
    /**
     * @param prop
     * @param v
     */
    function icalproperty_set_trigger(prop: property, v?: any | null): void;
    /**
     * @param prop
     * @param v
     */
    function icalproperty_set_tzid(prop: property, v: string): void;
    /**
     * @param prop
     * @param v
     */
    function icalproperty_set_tzidaliasof(prop: property, v: string): void;
    /**
     * @param prop
     * @param v
     */
    function icalproperty_set_tzname(prop: property, v: string): void;
    /**
     * @param prop
     * @param v
     */
    function icalproperty_set_tzoffsetfrom(prop: property, v: number): void;
    /**
     * @param prop
     * @param v
     */
    function icalproperty_set_tzoffsetto(prop: property, v: number): void;
    /**
     * @param prop
     * @param v
     */
    function icalproperty_set_tzuntil(prop: property, v?: any | null): void;
    /**
     * @param prop
     * @param v
     */
    function icalproperty_set_tzurl(prop: property, v: string): void;
    /**
     * @param prop
     * @param v
     */
    function icalproperty_set_uid(prop: property, v: string): void;
    /**
     * @param prop
     * @param v
     */
    function icalproperty_set_url(prop: property, v: string): void;
    /**
     * @param prop
     * @param value
     */
    function icalproperty_set_value(prop: property, value: value): void;
    /**
     * @param prop
     * @param value
     * @param kind
     */
    function icalproperty_set_value_from_string(prop: property, value: string, kind: string): void;
    /**
     * @param prop
     * @param v
     */
    function icalproperty_set_version(prop: property, v: string): void;
    /**
     * @param prop
     * @param v
     */
    function icalproperty_set_voter(prop: property, v: string): void;
    /**
     * @param prop
     * @param v
     */
    function icalproperty_set_x(prop: property, v: string): void;
    /**
     * @param prop
     * @param name
     */
    function icalproperty_set_x_name(prop: property, name: string): void;
    /**
     * @param prop
     * @param v
     */
    function icalproperty_set_xlicclass(prop: property, v?: any | null): void;
    /**
     * @param prop
     * @param v
     */
    function icalproperty_set_xlicclustercount(prop: property, v: string): void;
    /**
     * @param prop
     * @param v
     */
    function icalproperty_set_xlicerror(prop: property, v: string): void;
    /**
     * @param prop
     * @param v
     */
    function icalproperty_set_xlicmimecharset(prop: property, v: string): void;
    /**
     * @param prop
     * @param v
     */
    function icalproperty_set_xlicmimecid(prop: property, v: string): void;
    /**
     * @param prop
     * @param v
     */
    function icalproperty_set_xlicmimecontenttype(prop: property, v: string): void;
    /**
     * @param prop
     * @param v
     */
    function icalproperty_set_xlicmimeencoding(prop: property, v: string): void;
    /**
     * @param prop
     * @param v
     */
    function icalproperty_set_xlicmimefilename(prop: property, v: string): void;
    /**
     * @param prop
     * @param v
     */
    function icalproperty_set_xlicmimeoptinfo(prop: property, v: string): void;
    /**
     * @param arg0
     */
    function icalproperty_status_to_string(arg0: property_status | null): string;
    /**
     * @param string
     */
    function icalproperty_string_to_kind(string: string): property_kind;
    /**
     * @param str
     */
    function icalproperty_string_to_method(str: string): property_method;
    /**
     * @param string
     */
    function icalproperty_string_to_status(string: string): property_status;
    /**
     * @param kind
     */
    function icalproperty_value_kind_to_kind(kind: value_kind | null): property_kind;
    /**
     * @param rule
     * @param start
     * @param count
     * @param array
     */
    function icalrecur_expand_recurrence(rule: string, start: number, count: number, array: number): number;
    /**
     * @param kind
     */
    function icalrecur_freq_to_string(kind: recurrencetype_frequency | null): string;
    /**
     * @param arg0
     */
    function icalrecur_iterator_free(arg0: recur_iterator): void;
    /**
     * @param arg0
     */
    function icalrecur_iterator_next(arg0: recur_iterator): any | null;
    /**
     * @param impl
     * @param start
     */
    function icalrecur_iterator_set_start(impl: recur_iterator, start?: any | null): number;
    /**
     * @param kind
     */
    function icalrecur_skip_to_string(kind: recurrencetype_skip | null): string;
    /**
     * @param str
     */
    function icalrecur_string_to_freq(str: string): recurrencetype_frequency;
    /**
     * @param str
     */
    function icalrecur_string_to_skip(str: string): recurrencetype_skip;
    /**
     * @param str
     */
    function icalrecur_string_to_weekday(str: string): recurrencetype_weekday;
    /**
     * @param kind
     */
    function icalrecur_weekday_to_string(kind: recurrencetype_weekday | null): string;
    /**
     * @param recur
     */
    function icalrecurrencetype_as_string(recur?: any | null): string;
    /**
     * @param recur
     */
    function icalrecurrencetype_as_string_r(recur?: any | null): string;
    /**
     * @param r
     */
    function icalrecurrencetype_clear(r?: any | null): void;
    /**
     * @param day
     */
    function icalrecurrencetype_day_day_of_week(day: number): any | null;
    /**
     * @param day
     */
    function icalrecurrencetype_day_position(day: number): number;
    /**
     * @param str
     */
    function icalrecurrencetype_from_string(str: string): any | null;
    /**
     * @param month
     */
    function icalrecurrencetype_month_is_leap(month: number): number;
    /**
     * @param month
     */
    function icalrecurrencetype_month_month(month: number): number;
    function icalrecurrencetype_rscale_is_supported(): number;
    /**
     * @param arg0
     */
    function icalreqstattype_as_string(arg0?: any | null): string;
    /**
     * @param arg0
     */
    function icalreqstattype_as_string_r(arg0?: any | null): string;
    /**
     * @param str
     */
    function icalreqstattype_from_string(str: string): any | null;
    /**
     * @param comp
     */
    function icalrestriction_check(comp: component): number;
    /**
     * @param restr
     * @param count
     */
    function icalrestriction_compare(restr: restriction_kind | null, count: number): number;
    /**
     * @param t
     * @param d
     */
    function icaltime_add(t?: any | null, d?: any | null): any | null;
    /**
     * @param tt
     * @param days
     * @param hours
     * @param minutes
     * @param seconds
     */
    function icaltime_adjust(tt: any | null, days: number, hours: number, minutes: number, seconds: number): void;
    /**
     * @param tt
     */
    function icaltime_as_ical_string(tt?: any | null): string;
    /**
     * @param tt
     */
    function icaltime_as_ical_string_r(tt?: any | null): string;
    /**
     * @param arg0
     */
    function icaltime_as_timet(arg0?: any | null): number;
    /**
     * @param tt
     * @param zone
     */
    function icaltime_as_timet_with_zone(tt: any | null, zone: timezone): number;
    /**
     * @param a
     * @param b
     */
    function icaltime_compare(a?: any | null, b?: any | null): number;
    /**
     * @param a
     * @param b
     */
    function icaltime_compare_date_only(a?: any | null, b?: any | null): number;
    /**
     * @param a
     * @param b
     * @param tz
     */
    function icaltime_compare_date_only_tz(a: any | null, b: any | null, tz: timezone): number;
    /**
     * There are several ways to create a new icaltimetype:
     *
     *      - `icaltime_null_time()`
     *      - `icaltime_null_date()`
     *      - `icaltime_current_time_with_zone()`
     *      - `icaltime_today()`
     *      - icaltime_from_timet_with_zone(time_t tm, int is_date,
     *              icaltimezone *zone)
     *      - icaltime_from_day_of_year(int doy, int year)
     *
     *      italtimetype objects can be converted to different formats:
     *
     *      - icaltime_as_timet(struct icaltimetype tt)
     *      - icaltime_as_timet_with_zone(struct icaltimetype tt,
     *              icaltimezone *zone)
     *      - icaltime_as_ical_string(struct icaltimetype tt)
     *
     *      Accessor methods include:
     *
     *      - icaltime_get_timezone(struct icaltimetype t)
     *      - icaltime_get_tzid(struct icaltimetype t)
     *      - icaltime_set_timezone(struct icaltimetype t, const icaltimezone *zone)
     *      - icaltime_day_of_year(struct icaltimetype t)
     *      - icaltime_day_of_week(struct icaltimetype t)
     *      - icaltime_start_doy_week(struct icaltimetype t, int fdow)
     *      - icaltime_week_number(struct icaltimetype t)
     *
     *      Query methods include:
     *
     *      - icaltime_is_null_time(struct icaltimetype t)
     *      - icaltime_is_valid_time(struct icaltimetype t)
     *      - icaltime_is_date(struct icaltimetype t)
     *      - icaltime_is_utc(struct icaltimetype t)
     *
     *      Modify, compare and utility methods include:
     *
     *      - icaltime_compare(struct icaltimetype a,struct icaltimetype b)
     *      - icaltime_compare_date_only(struct icaltimetype a,
     *              struct icaltimetype b)
     *      - icaltime_adjust(struct icaltimetype *tt, int days, int hours,
     *              int minutes, int seconds);
     *      - icaltime_normalize(struct icaltimetype t);
     *      - icaltime_convert_to_zone(const struct icaltimetype tt,
     *              icaltimezone *zone);
     * @param tt
     * @param zone
     */
    function icaltime_convert_to_zone(tt: any | null, zone: timezone): any | null;
    /**
     * @param zone
     */
    function icaltime_current_time_with_zone(zone: timezone): any | null;
    /**
     * @param t
     */
    function icaltime_day_of_week(t?: any | null): number;
    /**
     * @param t
     */
    function icaltime_day_of_year(t?: any | null): number;
    /**
     * @param month
     * @param year
     */
    function icaltime_days_in_month(month: number, year: number): number;
    /**
     * @param year
     */
    function icaltime_days_in_year(year: number): number;
    /**
     * @param doy
     * @param year
     */
    function icaltime_from_day_of_year(doy: number, year: number): any | null;
    /**
     * is the same as that used by `icaldurationtype_from_string()`.
     * `par` Usage
     * ```c
     * // create icalperiodtype
     * const char *period_string = "20170606T090000/20170607T090000";
     * struct icalperiodtype period = icalperiodtype_from_string(period_string);
     *
     * // print period in iCal format
     * printf("%s\n", icalperiodtype_as_ical_string(period));
     * ```
     * @param str
     */
    function icaltime_from_string(str: string): any | null;
    /**
     * @param tm
     * @param is_date
     * @param zone
     */
    function icaltime_from_timet_with_zone(tm: number, is_date: number, zone: timezone): any | null;
    /**
     * @param t
     */
    function icaltime_get_timezone(t?: any | null): timezone;
    /**
     * @param t
     */
    function icaltime_get_tzid(t?: any | null): string;
    /**
     * @param t
     */
    function icaltime_is_date(t?: any | null): number;
    /**
     * @param year
     */
    function icaltime_is_leap_year(year: number): number;
    /**
     * @param t
     */
    function icaltime_is_null_time(t?: any | null): number;
    /**
     * @param t
     */
    function icaltime_is_utc(t?: any | null): number;
    /**
     * @param t
     */
    function icaltime_is_valid_time(t?: any | null): number;
    /**
     * @param tt
     */
    function icaltime_normalize(tt?: any | null): any | null;
    function icaltime_null_date(): any | null;
    function icaltime_null_time(): any | null;
    /**
     * @param t
     * @param zone
     */
    function icaltime_set_timezone(t: any | null, zone: timezone): any | null;
    /**
     * @param s
     * @param container
     */
    function icaltime_span_contains(s: time_span, container: time_span): number;
    /**
     * @param dtstart
     * @param dtend
     * @param is_busy
     */
    function icaltime_span_new(dtstart: any | null, dtend: any | null, is_busy: number): any | null;
    /**
     * @param s1
     * @param s2
     */
    function icaltime_span_overlaps(s1: time_span, s2: time_span): number;
    /**
     * @param t
     * @param fdow
     */
    function icaltime_start_doy_week(t: any | null, fdow: number): number;
    /**
     * @param t1
     * @param t2
     */
    function icaltime_subtract(t1?: any | null, t2?: any | null): any | null;
    function icaltime_today(): any | null;
    /**
     * @param t
     */
    function icaltime_week_number(t?: any | null): number;
    /**
     * @param timezones
     * @param child
     */
    function icaltimezone_array_append_from_vtimezone(timezones: array, child: component): void;
    /**
     * @param timezones
     */
    function icaltimezone_array_free(timezones: array): void;
    /**
     * @param tt
     * @param from_zone
     * @param to_zone
     */
    function icaltimezone_convert_time(tt: any | null, from_zone: timezone, to_zone: timezone): void;
    /**
     * @param zone
     * @param max_year
     * @param fp
     */
    function icaltimezone_dump_changes(zone: timezone, max_year: number, fp?: any | null): number;
    /**
     * @param comp
     * @param end_year
     * @param changes
     */
    function icaltimezone_expand_vtimezone(comp: component, end_year: number, changes: array): void;
    /**
     * @param zone
     * @param free_struct
     */
    function icaltimezone_free(zone: timezone, free_struct: number): void;
    function icaltimezone_free_builtin_timezones(): void;
    function icaltimezone_get_builtin_tzdata(): number;
    /**
     * @param zone
     */
    function icaltimezone_get_display_name(zone: timezone): string;
    /**
     * @param zone
     */
    function icaltimezone_get_latitude(zone: timezone): number;
    /**
     * @param zone
     */
    function icaltimezone_get_location(zone: timezone): string;
    /**
     * @param component
     */
    function icaltimezone_get_location_from_vtimezone(component: component): string;
    /**
     * @param zone
     */
    function icaltimezone_get_longitude(zone: timezone): number;
    /**
     * @param zone
     */
    function icaltimezone_get_tzid(zone: timezone): string;
    /**
     * @param zone
     */
    function icaltimezone_get_tznames(zone: timezone): string;
    /**
     * @param component
     */
    function icaltimezone_get_tznames_from_vtimezone(component: component): string;
    /**
     * @param zone
     * @param tt
     * @param is_daylight
     */
    function icaltimezone_get_utc_offset(zone: timezone, tt: any | null, is_daylight: number): number;
    /**
     * @param zone
     * @param tt
     * @param is_daylight
     */
    function icaltimezone_get_utc_offset_of_utc_time(zone: timezone, tt: any | null, is_daylight: number): number;
    function icaltimezone_release_zone_tab(): void;
    /**
     * @param set
     */
    function icaltimezone_set_builtin_tzdata(set: number): void;
    /**
     * @param zone
     * @param comp
     */
    function icaltimezone_set_component(zone: timezone, comp: component): number;
    /**
     * @param new_prefix
     */
    function icaltimezone_set_tzid_prefix(new_prefix: string): void;
    /**
     * @param vtz
     * @param start
     * @param end
     * @param ms_compatible
     */
    function icaltimezone_truncate_vtimezone(
        vtz: component,
        start: timetype,
        end: timetype,
        ms_compatible: number,
    ): void;
    function icaltimezone_tzid_prefix(): string;
    /**
     * @param reltime
     */
    function icaltriggertype_from_int(reltime: number): any | null;
    /**
     * @param str
     */
    function icaltriggertype_from_string(str: string): any | null;
    /**
     * @param tr
     */
    function icaltriggertype_is_bad_trigger(tr?: any | null): number;
    /**
     * @param tr
     */
    function icaltriggertype_is_null_trigger(tr?: any | null): number;
    function icaltzutil_get_zone_directory(): string;
    /**
     * @param value
     */
    function icalvalue_as_ical_string(value: value): string;
    /**
     * @param value
     */
    function icalvalue_as_ical_string_r(value: value): string;
    /**
     * @param a
     * @param b
     */
    function icalvalue_compare(a: value, b: value): parameter_xliccomparetype;
    /**
     * @param szText
     * @param szDecText
     * @param nMaxBufferLen
     */
    function icalvalue_decode_ical_string(szText: string, szDecText: string, nMaxBufferLen: number): number;
    /**
     * @param szText
     * @param szEncText
     * @param MaxBufferLen
     */
    function icalvalue_encode_ical_string(szText: string, szEncText: string, MaxBufferLen: number): number;
    /**
     * @param value
     */
    function icalvalue_free(value: value): void;
    /**
     * @param value
     */
    function icalvalue_get_action(value: value): any | null;
    /**
     * @param value
     */
    function icalvalue_get_binary(value: value): string;
    /**
     * @param value
     */
    function icalvalue_get_boolean(value: value): number;
    /**
     * @param value
     */
    function icalvalue_get_busytype(value: value): any | null;
    /**
     * @param value
     */
    function icalvalue_get_caladdress(value: value): string;
    /**
     * @param value
     */
    function icalvalue_get_carlevel(value: value): any | null;
    /**
     * @param value
     */
    function icalvalue_get_class(value: value): any | null;
    /**
     * @param value
     */
    function icalvalue_get_cmd(value: value): any | null;
    /**
     * @param value
     */
    function icalvalue_get_date(value: value): any | null;
    /**
     * @param value
     */
    function icalvalue_get_datetime(value: value): any | null;
    /**
     * @param value
     */
    function icalvalue_get_datetimedate(value: value): any | null;
    /**
     * @param value
     */
    function icalvalue_get_datetimeperiod(value: value): any | null;
    /**
     * @param value
     */
    function icalvalue_get_duration(value: value): any | null;
    /**
     * @param value
     */
    function icalvalue_get_float(value: value): number;
    /**
     * @param value
     */
    function icalvalue_get_geo(value: value): any | null;
    /**
     * @param value
     */
    function icalvalue_get_integer(value: value): number;
    /**
     * @param value
     */
    function icalvalue_get_method(value: value): any | null;
    /**
     * @param value
     */
    function icalvalue_get_period(value: value): any | null;
    /**
     * @param value
     */
    function icalvalue_get_pollcompletion(value: value): any | null;
    /**
     * @param value
     */
    function icalvalue_get_pollmode(value: value): any | null;
    /**
     * @param value
     */
    function icalvalue_get_query(value: value): string;
    /**
     * @param value
     */
    function icalvalue_get_querylevel(value: value): any | null;
    /**
     * @param value
     */
    function icalvalue_get_recur(value: value): any | null;
    /**
     * @param value
     */
    function icalvalue_get_requeststatus(value: value): any | null;
    /**
     * @param value
     */
    function icalvalue_get_status(value: value): any | null;
    /**
     * @param value
     */
    function icalvalue_get_string(value: value): string;
    /**
     * @param value
     */
    function icalvalue_get_taskmode(value: value): any | null;
    /**
     * @param value
     */
    function icalvalue_get_text(value: value): string;
    /**
     * @param value
     */
    function icalvalue_get_transp(value: value): any | null;
    /**
     * @param value
     */
    function icalvalue_get_trigger(value: value): any | null;
    /**
     * @param value
     */
    function icalvalue_get_uri(value: value): string;
    /**
     * @param value
     */
    function icalvalue_get_utcoffset(value: value): number;
    /**
     * @param value
     */
    function icalvalue_get_x(value: value): string;
    /**
     * @param value
     */
    function icalvalue_get_xlicclass(value: value): any | null;
    /**
     * @param value
     */
    function icalvalue_is_valid(value: value): number;
    /**
     * @param value
     */
    function icalvalue_isa(value: value): value_kind;
    /**
     * @param arg0
     */
    function icalvalue_isa_value(arg0?: any | null): number;
    /**
     * @param kind
     */
    function icalvalue_kind_is_valid(kind: value_kind | null): number;
    /**
     * @param kind
     */
    function icalvalue_kind_to_string(kind: value_kind | null): string;
    /**
     * @param value
     */
    function icalvalue_reset_kind(value: value): void;
    /**
     * @param value
     * @param v
     */
    function icalvalue_set_action(value: value, v?: any | null): void;
    /**
     * @param value
     * @param attach
     */
    function icalvalue_set_attach(value: value, attach: attach): void;
    /**
     * @param value
     * @param v
     */
    function icalvalue_set_binary(value: value, v: string): void;
    /**
     * @param value
     * @param v
     */
    function icalvalue_set_boolean(value: value, v: number): void;
    /**
     * @param value
     * @param v
     */
    function icalvalue_set_busytype(value: value, v?: any | null): void;
    /**
     * @param value
     * @param v
     */
    function icalvalue_set_caladdress(value: value, v: string): void;
    /**
     * @param value
     * @param v
     */
    function icalvalue_set_carlevel(value: value, v?: any | null): void;
    /**
     * @param value
     * @param v
     */
    function icalvalue_set_class(value: value, v?: any | null): void;
    /**
     * @param value
     * @param v
     */
    function icalvalue_set_cmd(value: value, v?: any | null): void;
    /**
     * @param value
     * @param v
     */
    function icalvalue_set_date(value: value, v?: any | null): void;
    /**
     * @param value
     * @param v
     */
    function icalvalue_set_datetime(value: value, v?: any | null): void;
    /**
     * @param value
     * @param v
     */
    function icalvalue_set_datetimedate(value: value, v?: any | null): void;
    /**
     * @param value
     * @param v
     */
    function icalvalue_set_datetimeperiod(value: value, v?: any | null): void;
    /**
     * @param value
     * @param v
     */
    function icalvalue_set_duration(value: value, v?: any | null): void;
    /**
     * @param value
     * @param v
     */
    function icalvalue_set_float(value: value, v: number): void;
    /**
     * @param value
     * @param v
     */
    function icalvalue_set_geo(value: value, v?: any | null): void;
    /**
     * @param value
     * @param v
     */
    function icalvalue_set_integer(value: value, v: number): void;
    /**
     * @param value
     * @param v
     */
    function icalvalue_set_method(value: value, v?: any | null): void;
    /**
     * @param value
     * @param property
     */
    function icalvalue_set_parent(value: value, property: property): void;
    /**
     * @param value
     * @param v
     */
    function icalvalue_set_period(value: value, v?: any | null): void;
    /**
     * @param value
     * @param v
     */
    function icalvalue_set_pollcompletion(value: value, v?: any | null): void;
    /**
     * @param value
     * @param v
     */
    function icalvalue_set_pollmode(value: value, v?: any | null): void;
    /**
     * @param value
     * @param v
     */
    function icalvalue_set_query(value: value, v: string): void;
    /**
     * @param value
     * @param v
     */
    function icalvalue_set_querylevel(value: value, v?: any | null): void;
    /**
     * @param value
     * @param v
     */
    function icalvalue_set_recur(value: value, v?: any | null): void;
    /**
     * @param value
     * @param v
     */
    function icalvalue_set_requeststatus(value: value, v?: any | null): void;
    /**
     * @param value
     * @param v
     */
    function icalvalue_set_status(value: value, v?: any | null): void;
    /**
     * @param value
     * @param v
     */
    function icalvalue_set_string(value: value, v: string): void;
    /**
     * @param value
     * @param v
     */
    function icalvalue_set_taskmode(value: value, v?: any | null): void;
    /**
     * @param value
     * @param v
     */
    function icalvalue_set_text(value: value, v: string): void;
    /**
     * @param value
     * @param v
     */
    function icalvalue_set_transp(value: value, v?: any | null): void;
    /**
     * @param value
     * @param v
     */
    function icalvalue_set_trigger(value: value, v?: any | null): void;
    /**
     * @param value
     * @param v
     */
    function icalvalue_set_uri(value: value, v: string): void;
    /**
     * @param value
     * @param v
     */
    function icalvalue_set_utcoffset(value: value, v: number): void;
    /**
     * @param value
     * @param v
     */
    function icalvalue_set_x(value: value, v: string): void;
    /**
     * @param value
     * @param v
     */
    function icalvalue_set_xlicclass(value: value, v?: any | null): void;
    /**
     * @param str
     */
    function icalvalue_string_to_kind(str: string): value_kind;
    /**
     * @param str
     * @param data
     */
    function print_date_to_string(str: string, data?: any | null): void;
    /**
     * @param str
     * @param data
     */
    function print_datetime_to_string(str: string, data?: any | null): void;
    /**
     * @param arg0
     */
    function pvl_clear(arg0: pvl_list): void;
    /**
     * @param arg0
     */
    function pvl_count(arg0: pvl_list): number;
    /**
     * @param arg0
     */
    function pvl_data(arg0: pvl_elem): any | null;
    /**
     * @param arg0
     */
    function pvl_free(arg0: pvl_list): void;
    /**
     * @param l
     * @param e
     * @param d
     */
    function pvl_insert_after(l: pvl_list, e: pvl_elem, d?: any | null): void;
    /**
     * @param l
     * @param e
     * @param d
     */
    function pvl_insert_before(l: pvl_list, e: pvl_elem, d?: any | null): void;
    /**
     * @param l
     */
    function pvl_pop(l: pvl_list): any | null;
    /**
     * @param l
     * @param d
     */
    function pvl_push(l: pvl_list, d?: any | null): void;
    /**
     * @param arg0
     * @param arg1
     */
    function pvl_remove(arg0: pvl_list, arg1: pvl_elem): any | null;
    /**
     * @param l
     */
    function pvl_shift(l: pvl_list): any | null;
    /**
     * @param l
     * @param d
     */
    function pvl_unshift(l: pvl_list, d?: any | null): void;
    /**
     * @param newSetting
     */
    function set_unknown_token_handling_setting(newSetting: _unknown_token_handling | null): void;
    /**
     * @param path
     */
    function set_zone_directory(path: string): void;
    /**
     * @param type
     */
    function sspm_encoding_string(type?: any | null): string;
    /**
     * @param parts
     * @param max_parts
     */
    function sspm_free_parts(parts: any | null, max_parts: number): void;
    /**
     * @param type
     */
    function sspm_major_type_string(type?: any | null): string;
    /**
     * @param type
     */
    function sspm_minor_type_string(type?: any | null): string;
    /**
     * @param parts
     * @param max_parts
     * @param actions
     * @param get_string
     * @param get_string_data
     * @param first_header
     */
    function sspm_parse_mime(
        parts: any | null,
        max_parts: number,
        actions?: any | null,
        get_string?: any | null,
        get_string_data?: any | null,
        first_header?: any | null,
    ): number;
    /**
     * @param parts
     * @param num_parts
     * @param output_string
     * @param header
     */
    function sspm_write_mime(parts: any | null, num_parts: number, output_string: string, header: string): number;
    /**
     * @gir-type Callback
     */
    interface icalattach_free_fn_t {
        (data: string): void;
    }
    /**
     * @gir-type Callback
     */
    interface icalparser_line_gen_func {
        (s: string, size: number, d?: any | null): string;
    }
    /**
     * @gir-type Callback
     */
    interface pvl_applyf {
        (a?: any | null, b?: any | null): void;
    }
    /**
     * @gir-type Callback
     */
    interface pvl_comparef {
        (a?: any | null, b?: any | null): number;
    }
    /**
     * @gir-type Callback
     */
    interface pvl_findf {
        (a?: any | null, b?: any | null): number;
    }
    /**
     * @gir-type Struct
     */
    class array {
        static $gtype: GObject.GType<array>;

        // Fields

        element_size: number;
        increment_size: number;
        num_elements: number;
        space_allocated: number;
        chunks: any;

        // Constructors

        constructor(
            properties?: Partial<{
                element_size: number;
                increment_size: number;
                num_elements: number;
                space_allocated: number;
                chunks: any;
            }>,
        );
    }

    /**
     * @gir-type Struct
     */
    abstract class attach {
        static $gtype: GObject.GType<attach>;
    }

    /**
     * @gir-type Struct
     */
    class compiter {
        static $gtype: GObject.GType<compiter>;

        // Fields

        kind: component_kind;
    }

    /**
     * @gir-type Struct
     */
    abstract class component {
        static $gtype: GObject.GType<component>;
    }

    /**
     * @gir-type Struct
     */
    class datetimeperiodtype {
        static $gtype: GObject.GType<datetimeperiodtype>;

        // Fields

        time: any;
        period: any;

        // Constructors

        constructor(
            properties?: Partial<{
                time: any;
                period: any;
            }>,
        );
    }

    /**
     * @gir-type Struct
     */
    class durationtype {
        static $gtype: GObject.GType<durationtype>;

        // Fields

        is_neg: number;
        days: number;
        weeks: number;
        hours: number;
        minutes: number;
        seconds: number;

        // Constructors

        constructor(
            properties?: Partial<{
                is_neg: number;
                days: number;
                weeks: number;
                hours: number;
                minutes: number;
                seconds: number;
            }>,
        );
    }

    /**
     * @gir-type Struct
     */
    class geotype {
        static $gtype: GObject.GType<geotype>;

        // Fields

        lat: number;
        lon: number;

        // Constructors

        constructor(
            properties?: Partial<{
                lat: number;
                lon: number;
            }>,
        );
    }

    /**
     * @gir-type Struct
     */
    abstract class parameter {
        static $gtype: GObject.GType<parameter>;
    }

    /**
     * @gir-type Struct
     */
    abstract class parser {
        static $gtype: GObject.GType<parser>;
    }

    /**
     * @gir-type Struct
     */
    class periodtype {
        static $gtype: GObject.GType<periodtype>;

        // Fields

        start: any;
        end: any;
        duration: any;

        // Constructors

        constructor(
            properties?: Partial<{
                start: any;
                end: any;
                duration: any;
            }>,
        );
    }

    /**
     * @gir-type Struct
     */
    abstract class property {
        static $gtype: GObject.GType<property>;
    }

    /**
     * @gir-type Struct
     */
    abstract class pvl_elem {
        static $gtype: GObject.GType<pvl_elem>;
    }

    /**
     * @gir-type Struct
     */
    class pvl_elem_t {
        static $gtype: GObject.GType<pvl_elem_t>;

        // Fields

        MAGIC: number;
        d: any;
        next: any;
        prior: any;

        // Constructors

        constructor(
            properties?: Partial<{
                MAGIC: number;
                d: any;
                next: any;
                prior: any;
            }>,
        );
    }

    /**
     * @gir-type Struct
     */
    abstract class pvl_list {
        static $gtype: GObject.GType<pvl_list>;
    }

    /**
     * @gir-type Struct
     */
    abstract class recur_iterator {
        static $gtype: GObject.GType<recur_iterator>;
    }

    /**
     * @gir-type Struct
     */
    class recurrencetype {
        static $gtype: GObject.GType<recurrencetype>;

        // Fields

        freq: recurrencetype_frequency;
        until: any;
        count: number;
        interval: number;
        week_start: recurrencetype_weekday;
        by_second: number[];
        by_minute: number[];
        by_hour: number[];
        by_day: number[];
        by_month_day: number[];
        by_year_day: number[];
        by_week_no: number[];
        by_month: number[];
        by_set_pos: number[];
        rscale: string;
        skip: recurrencetype_skip;
    }

    /**
     * @gir-type Struct
     */
    class reqstattype {
        static $gtype: GObject.GType<reqstattype>;

        // Fields

        code: requeststatus;
        desc: string;
        debug: string;
    }

    /**
     * @gir-type Struct
     */
    class sspm_action_map {
        static $gtype: GObject.GType<sspm_action_map>;

        // Fields

        major: any;
        minor: any;

        // Constructors

        constructor(
            properties?: Partial<{
                major: any;
                minor: any;
            }>,
        );
    }

    /**
     * @gir-type Struct
     */
    class sspm_header {
        static $gtype: GObject.GType<sspm_header>;

        // Fields

        def: number;
        boundary: string;
        major: any;
        minor: any;
        minor_text: string;
        content_type_params: string;
        charset: string;
        encoding: any;
        filename: string;
        content_id: string;
        error: any;
        error_text: string;

        // Constructors

        constructor(
            properties?: Partial<{
                def: number;
                boundary: string;
                major: any;
                minor: any;
                minor_text: string;
                content_type_params: string;
                charset: string;
                encoding: any;
                filename: string;
                content_id: string;
                error: any;
                error_text: string;
            }>,
        );
    }

    /**
     * @gir-type Struct
     */
    class sspm_part {
        static $gtype: GObject.GType<sspm_part>;

        // Fields

        header: any;
        level: number;
        data_size: number;
        data: any;

        // Constructors

        constructor(
            properties?: Partial<{
                header: any;
                level: number;
                data_size: number;
                data: any;
            }>,
        );
    }

    /**
     * @gir-type Struct
     */
    class time_span {
        static $gtype: GObject.GType<time_span>;

        // Fields

        start: number;
        end: number;
        is_busy: number;

        // Constructors

        constructor(
            properties?: Partial<{
                start: number;
                end: number;
                is_busy: number;
            }>,
        );
    }

    /**
     * @gir-type Struct
     */
    class timetype {
        static $gtype: GObject.GType<timetype>;

        // Fields

        year: number;
        month: number;
        day: number;
        hour: number;
        minute: number;
        second: number;
        is_date: number;
        is_daylight: number;
    }

    /**
     * @gir-type Struct
     */
    abstract class timezone {
        static $gtype: GObject.GType<timezone>;
    }

    /**
     * @gir-type Struct
     */
    class timezonephase {
        static $gtype: GObject.GType<timezonephase>;

        // Fields

        tzname: string;
        is_stdandard: number;
        dtstart: any;
        offsetto: number;
        tzoffsetfrom: number;
        comment: string;
        rdate: any;
        rrule: string;

        // Constructors

        constructor(
            properties?: Partial<{
                tzname: string;
                is_stdandard: number;
                dtstart: any;
                offsetto: number;
                tzoffsetfrom: number;
                comment: string;
                rdate: any;
                rrule: string;
            }>,
        );
    }

    /**
     * @gir-type Struct
     */
    class timezonetype {
        static $gtype: GObject.GType<timezonetype>;

        // Fields

        tzid: string;
        last_mod: any;
        tzurl: string;
        phases: any;

        // Constructors

        constructor(
            properties?: Partial<{
                tzid: string;
                last_mod: any;
                tzurl: string;
                phases: any;
            }>,
        );
    }

    /**
     * @gir-type Struct
     */
    class triggertype {
        static $gtype: GObject.GType<triggertype>;

        // Fields

        time: any;
        duration: any;

        // Constructors

        constructor(
            properties?: Partial<{
                time: any;
                duration: any;
            }>,
        );
    }

    /**
     * @gir-type Struct
     */
    abstract class value {
        static $gtype: GObject.GType<value>;
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

export default ICal;

// END
