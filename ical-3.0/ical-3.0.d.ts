
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
        ASSUME_IANA_TOKEN = 1,
        DISCARD_TOKEN = 2,
        TREAT_AS_ERROR = 3,
    }


    /**
     * @gir-type Enum
     */
    enum component_kind {
        NO_COMPONENT = 0,
        ANY_COMPONENT = 1,
        XROOT_COMPONENT = 2,
        XATTACH_COMPONENT = 3,
        VEVENT_COMPONENT = 4,
        VTODO_COMPONENT = 5,
        VJOURNAL_COMPONENT = 6,
        VCALENDAR_COMPONENT = 7,
        VAGENDA_COMPONENT = 8,
        VFREEBUSY_COMPONENT = 9,
        VALARM_COMPONENT = 10,
        XAUDIOALARM_COMPONENT = 11,
        XDISPLAYALARM_COMPONENT = 12,
        XEMAILALARM_COMPONENT = 13,
        XPROCEDUREALARM_COMPONENT = 14,
        VTIMEZONE_COMPONENT = 15,
        XSTANDARD_COMPONENT = 16,
        XDAYLIGHT_COMPONENT = 17,
        X_COMPONENT = 18,
        VSCHEDULE_COMPONENT = 19,
        VQUERY_COMPONENT = 20,
        VREPLY_COMPONENT = 21,
        VCAR_COMPONENT = 22,
        VCOMMAND_COMPONENT = 23,
        XLICINVALID_COMPONENT = 24,
        XLICMIMEPART_COMPONENT = 25,
        VAVAILABILITY_COMPONENT = 26,
        XAVAILABLE_COMPONENT = 27,
        VPOLL_COMPONENT = 28,
        VVOTER_COMPONENT = 29,
        XVOTE_COMPONENT = 30,
        VPATCH_COMPONENT = 31,
        XPATCH_COMPONENT = 32,
    }


    /**
     * @gir-type Enum
     */
    enum errorenum {
        NO_ERROR = 0,
        BADARG_ERROR = 1,
        NEWFAILED_ERROR = 2,
        ALLOCATION_ERROR = 3,
        MALFORMEDDATA_ERROR = 4,
        PARSE_ERROR = 5,
        INTERNAL_ERROR = 6,
        FILE_ERROR = 7,
        USAGE_ERROR = 8,
        UNIMPLEMENTED_ERROR = 9,
        UNKNOWN_ERROR = 10,
    }


    /**
     * @gir-type Enum
     */
    enum errorstate {
        FATAL = 0,
        NONFATAL = 1,
        DEFAULT = 2,
        UNKNOWN = 3,
    }


    /**
     * @gir-type Enum
     */
    enum parameter_action {
        X = 20000,
        ASK = 20001,
        ABORT = 20002,
        NONE = 20099,
    }


    /**
     * @gir-type Enum
     */
    enum parameter_cutype {
        X = 20100,
        INDIVIDUAL = 20101,
        GROUP = 20102,
        RESOURCE = 20103,
        ROOM = 20104,
        UNKNOWN = 20105,
        NONE = 20199,
    }


    /**
     * @gir-type Enum
     */
    enum parameter_display {
        X = 22000,
        BADGE = 22001,
        GRAPHIC = 22002,
        FULLSIZE = 22003,
        THUMBNAIL = 22004,
        NONE = 22099,
    }


    /**
     * @gir-type Enum
     */
    enum parameter_enable {
        X = 20200,
        TRUE = 20201,
        FALSE = 20202,
        NONE = 20299,
    }


    /**
     * @gir-type Enum
     */
    enum parameter_encoding {
        X = 20300,
        "8BIT" = 20301,
        BASE64 = 20302,
        NONE = 20399,
    }


    /**
     * @gir-type Enum
     */
    enum parameter_fbtype {
        X = 20400,
        FREE = 20401,
        BUSY = 20402,
        BUSYUNAVAILABLE = 20403,
        BUSYTENTATIVE = 20404,
        NONE = 20499,
    }


    /**
     * @gir-type Enum
     */
    enum parameter_feature {
        X = 22100,
        AUDIO = 22101,
        CHAT = 22102,
        FEED = 22103,
        MODERATOR = 22104,
        PHONE = 22105,
        SCREEN = 22106,
        VIDEO = 22107,
        NONE = 22199,
    }


    /**
     * @gir-type Enum
     */
    enum parameter_kind {
        ANY_PARAMETER = 0,
        ACTIONPARAM_PARAMETER = 1,
        ALTREP_PARAMETER = 2,
        CHARSET_PARAMETER = 3,
        CN_PARAMETER = 4,
        CUTYPE_PARAMETER = 5,
        DELEGATEDFROM_PARAMETER = 6,
        DELEGATEDTO_PARAMETER = 7,
        DIR_PARAMETER = 8,
        DISPLAY_PARAMETER = 46,
        EMAIL_PARAMETER = 50,
        ENABLE_PARAMETER = 9,
        ENCODING_PARAMETER = 10,
        FBTYPE_PARAMETER = 11,
        FEATURE_PARAMETER = 48,
        FILENAME_PARAMETER = 42,
        FMTTYPE_PARAMETER = 12,
        IANA_PARAMETER = 33,
        ID_PARAMETER = 13,
        LABEL_PARAMETER = 49,
        LANGUAGE_PARAMETER = 14,
        LATENCY_PARAMETER = 15,
        LOCAL_PARAMETER = 16,
        LOCALIZE_PARAMETER = 17,
        MANAGEDID_PARAMETER = 40,
        MEMBER_PARAMETER = 18,
        MODIFIED_PARAMETER = 44,
        OPTIONS_PARAMETER = 19,
        PARTSTAT_PARAMETER = 20,
        PATCHACTION_PARAMETER = 51,
        PUBLICCOMMENT_PARAMETER = 37,
        RANGE_PARAMETER = 21,
        REASON_PARAMETER = 43,
        RELATED_PARAMETER = 22,
        RELTYPE_PARAMETER = 23,
        REQUIRED_PARAMETER = 43,
        RESPONSE_PARAMETER = 38,
        ROLE_PARAMETER = 24,
        RSVP_PARAMETER = 25,
        SCHEDULEAGENT_PARAMETER = 34,
        SCHEDULEFORCESEND_PARAMETER = 35,
        SCHEDULESTATUS_PARAMETER = 36,
        SENTBY_PARAMETER = 26,
        SIZE_PARAMETER = 41,
        STAYINFORMED_PARAMETER = 39,
        SUBSTATE_PARAMETER = 45,
        TZID_PARAMETER = 27,
        VALUE_PARAMETER = 28,
        X_PARAMETER = 29,
        XLICCOMPARETYPE_PARAMETER = 30,
        XLICERRORTYPE_PARAMETER = 31,
        NO_PARAMETER = 32,
    }


    /**
     * @gir-type Enum
     */
    enum parameter_local {
        X = 20500,
        TRUE = 20501,
        FALSE = 20502,
        NONE = 20599,
    }


    /**
     * @gir-type Enum
     */
    enum parameter_partstat {
        X = 20600,
        NEEDSACTION = 20601,
        ACCEPTED = 20602,
        DECLINED = 20603,
        TENTATIVE = 20604,
        DELEGATED = 20605,
        COMPLETED = 20606,
        INPROCESS = 20607,
        FAILED = 20608,
        NONE = 20699,
    }


    /**
     * @gir-type Enum
     */
    enum parameter_patchaction {
        X = 22200,
        CREATE = 22201,
        BYNAME = 22202,
        BYVALUE = 22203,
        BYPARAM = 22204,
        NONE = 22299,
    }


    /**
     * @gir-type Enum
     */
    enum parameter_range {
        X = 20700,
        THISANDPRIOR = 20701,
        THISANDFUTURE = 20702,
        NONE = 20799,
    }


    /**
     * @gir-type Enum
     */
    enum parameter_related {
        X = 20800,
        START = 20801,
        END = 20802,
        NONE = 20899,
    }


    /**
     * @gir-type Enum
     */
    enum parameter_reltype {
        X = 20900,
        PARENT = 20901,
        CHILD = 20902,
        SIBLING = 20903,
        POLL = 20904,
        NONE = 20999,
    }


    /**
     * @gir-type Enum
     */
    enum parameter_required {
        X = 21000,
        TRUE = 21001,
        FALSE = 21002,
        NONE = 21099,
    }


    /**
     * @gir-type Enum
     */
    enum parameter_role {
        X = 21100,
        CHAIR = 21101,
        REQPARTICIPANT = 21102,
        OPTPARTICIPANT = 21103,
        NONPARTICIPANT = 21104,
        NONE = 21199,
    }


    /**
     * @gir-type Enum
     */
    enum parameter_rsvp {
        X = 21200,
        TRUE = 21201,
        FALSE = 21202,
        NONE = 21299,
    }


    /**
     * @gir-type Enum
     */
    enum parameter_scheduleagent {
        X = 21300,
        SERVER = 21301,
        CLIENT = 21302,
        NONE = 21399,
    }


    /**
     * @gir-type Enum
     */
    enum parameter_scheduleforcesend {
        X = 21400,
        REQUEST = 21401,
        REPLY = 21402,
        NONE = 21499,
    }


    /**
     * @gir-type Enum
     */
    enum parameter_stayinformed {
        X = 21500,
        TRUE = 21501,
        FALSE = 21502,
        NONE = 21599,
    }


    /**
     * @gir-type Enum
     */
    enum parameter_substate {
        X = 21900,
        OK = 21901,
        ERROR = 21902,
        SUSPENDED = 21903,
        NONE = 21999,
    }


    /**
     * @gir-type Enum
     */
    enum parameter_value {
        X = 21600,
        BINARY = 21601,
        BOOLEAN = 21602,
        DATE = 21603,
        DURATION = 21604,
        FLOAT = 21605,
        INTEGER = 21606,
        PERIOD = 21607,
        RECUR = 21608,
        TEXT = 21609,
        URI = 21610,
        ERROR = 21611,
        DATETIME = 21612,
        UTCOFFSET = 21613,
        CALADDRESS = 21614,
        NONE = 21699,
    }


    /**
     * @gir-type Enum
     */
    enum parameter_xliccomparetype {
        X = 21700,
        EQUAL = 21701,
        NOTEQUAL = 21702,
        LESS = 21703,
        GREATER = 21704,
        LESSEQUAL = 21705,
        GREATEREQUAL = 21706,
        REGEX = 21707,
        ISNULL = 21708,
        ISNOTNULL = 21709,
        NONE = 21799,
    }


    /**
     * @gir-type Enum
     */
    enum parameter_xlicerrortype {
        X = 21800,
        COMPONENTPARSEERROR = 21801,
        PROPERTYPARSEERROR = 21802,
        PARAMETERNAMEPARSEERROR = 21803,
        PARAMETERVALUEPARSEERROR = 21804,
        VALUEPARSEERROR = 21805,
        INVALIDITIP = 21806,
        UNKNOWNVCALPROPERROR = 21807,
        MIMEPARSEERROR = 21808,
        VCALPROPPARSEERROR = 21809,
        NONE = 21899,
    }


    /**
     * @gir-type Enum
     */
    enum parser_state {
        ERROR = 0,
        SUCCESS = 1,
        BEGIN_COMP = 2,
        END_COMP = 3,
        IN_PROGRESS = 4,
    }


    /**
     * @gir-type Enum
     */
    enum property_action {
        X = 10000,
        AUDIO = 10001,
        DISPLAY = 10002,
        EMAIL = 10003,
        PROCEDURE = 10004,
        NONE = 10099,
    }


    /**
     * @gir-type Enum
     */
    enum property_busytype {
        X = 10100,
        BUSY = 10101,
        BUSYUNAVAILABLE = 10102,
        BUSYTENTATIVE = 10103,
        NONE = 10199,
    }


    /**
     * @gir-type Enum
     */
    enum property_carlevel {
        X = 10200,
        CARNONE = 10201,
        CARMIN = 10202,
        CARFULL1 = 10203,
        NONE = 10299,
    }


    /**
     * @gir-type Enum
     */
    enum property_class {
        X = 10300,
        PUBLIC = 10301,
        PRIVATE = 10302,
        CONFIDENTIAL = 10303,
        NONE = 10399,
    }


    /**
     * @gir-type Enum
     */
    enum property_cmd {
        X = 10400,
        ABORT = 10401,
        CONTINUE = 10402,
        CREATE = 10403,
        DELETE = 10404,
        GENERATEUID = 10405,
        GETCAPABILITY = 10406,
        IDENTIFY = 10407,
        MODIFY = 10408,
        MOVE = 10409,
        REPLY = 10410,
        SEARCH = 10411,
        SETLOCALE = 10412,
        NONE = 10499,
    }


    /**
     * @gir-type Enum
     */
    enum property_kind {
        ANY_PROPERTY = 0,
        ACCEPTRESPONSE_PROPERTY = 102,
        ACKNOWLEDGED_PROPERTY = 1,
        ACTION_PROPERTY = 2,
        ALLOWCONFLICT_PROPERTY = 3,
        ATTACH_PROPERTY = 4,
        ATTENDEE_PROPERTY = 5,
        BUSYTYPE_PROPERTY = 101,
        CALID_PROPERTY = 6,
        CALMASTER_PROPERTY = 7,
        CALSCALE_PROPERTY = 8,
        CAPVERSION_PROPERTY = 9,
        CARLEVEL_PROPERTY = 10,
        CARID_PROPERTY = 11,
        CATEGORIES_PROPERTY = 12,
        CLASS_PROPERTY = 13,
        CMD_PROPERTY = 14,
        COLOR_PROPERTY = 118,
        COMMENT_PROPERTY = 15,
        COMPLETED_PROPERTY = 16,
        COMPONENTS_PROPERTY = 17,
        CONFERENCE_PROPERTY = 120,
        CONTACT_PROPERTY = 18,
        CREATED_PROPERTY = 19,
        CSID_PROPERTY = 20,
        DATEMAX_PROPERTY = 21,
        DATEMIN_PROPERTY = 22,
        DECREED_PROPERTY = 23,
        DEFAULTCHARSET_PROPERTY = 24,
        DEFAULTLOCALE_PROPERTY = 25,
        DEFAULTTZID_PROPERTY = 26,
        DEFAULTVCARS_PROPERTY = 27,
        DENY_PROPERTY = 28,
        DESCRIPTION_PROPERTY = 29,
        DTEND_PROPERTY = 30,
        DTSTAMP_PROPERTY = 31,
        DTSTART_PROPERTY = 32,
        DUE_PROPERTY = 33,
        DURATION_PROPERTY = 34,
        ESTIMATEDDURATION_PROPERTY = 113,
        EXDATE_PROPERTY = 35,
        EXPAND_PROPERTY = 36,
        EXRULE_PROPERTY = 37,
        FREEBUSY_PROPERTY = 38,
        GEO_PROPERTY = 39,
        GRANT_PROPERTY = 40,
        IMAGE_PROPERTY = 119,
        ITIPVERSION_PROPERTY = 41,
        LASTMODIFIED_PROPERTY = 42,
        LOCATION_PROPERTY = 43,
        MAXCOMPONENTSIZE_PROPERTY = 44,
        MAXDATE_PROPERTY = 45,
        MAXRESULTS_PROPERTY = 46,
        MAXRESULTSSIZE_PROPERTY = 47,
        METHOD_PROPERTY = 48,
        MINDATE_PROPERTY = 49,
        MULTIPART_PROPERTY = 50,
        NAME_PROPERTY = 115,
        ORGANIZER_PROPERTY = 52,
        OWNER_PROPERTY = 53,
        PATCHDELETE_PROPERTY = 124,
        PATCHORDER_PROPERTY = 122,
        PATCHPARAMETER_PROPERTY = 125,
        PATCHTARGET_PROPERTY = 123,
        PATCHVERSION_PROPERTY = 121,
        PERCENTCOMPLETE_PROPERTY = 54,
        PERMISSION_PROPERTY = 55,
        POLLCOMPLETION_PROPERTY = 110,
        POLLITEMID_PROPERTY = 103,
        POLLMODE_PROPERTY = 104,
        POLLPROPERTIES_PROPERTY = 105,
        POLLWINNER_PROPERTY = 106,
        PRIORITY_PROPERTY = 56,
        PRODID_PROPERTY = 57,
        QUERY_PROPERTY = 58,
        QUERYLEVEL_PROPERTY = 59,
        QUERYID_PROPERTY = 60,
        QUERYNAME_PROPERTY = 61,
        RDATE_PROPERTY = 62,
        RECURACCEPTED_PROPERTY = 63,
        RECUREXPAND_PROPERTY = 64,
        RECURLIMIT_PROPERTY = 65,
        RECURRENCEID_PROPERTY = 66,
        REFRESHINTERVAL_PROPERTY = 116,
        RELATEDTO_PROPERTY = 67,
        RELCALID_PROPERTY = 68,
        REPEAT_PROPERTY = 69,
        REPLYURL_PROPERTY = 111,
        REQUESTSTATUS_PROPERTY = 70,
        RESOURCES_PROPERTY = 71,
        RESPONSE_PROPERTY = 112,
        RESTRICTION_PROPERTY = 72,
        RRULE_PROPERTY = 73,
        SCOPE_PROPERTY = 74,
        SEQUENCE_PROPERTY = 75,
        SOURCE_PROPERTY = 117,
        STATUS_PROPERTY = 76,
        STORESEXPANDED_PROPERTY = 77,
        SUMMARY_PROPERTY = 78,
        TARGET_PROPERTY = 79,
        TASKMODE_PROPERTY = 114,
        TRANSP_PROPERTY = 80,
        TRIGGER_PROPERTY = 81,
        TZID_PROPERTY = 82,
        TZIDALIASOF_PROPERTY = 108,
        TZNAME_PROPERTY = 83,
        TZOFFSETFROM_PROPERTY = 84,
        TZOFFSETTO_PROPERTY = 85,
        TZUNTIL_PROPERTY = 109,
        TZURL_PROPERTY = 86,
        UID_PROPERTY = 87,
        URL_PROPERTY = 88,
        VERSION_PROPERTY = 89,
        VOTER_PROPERTY = 107,
        X_PROPERTY = 90,
        XLICCLASS_PROPERTY = 91,
        XLICCLUSTERCOUNT_PROPERTY = 92,
        XLICERROR_PROPERTY = 93,
        XLICMIMECHARSET_PROPERTY = 94,
        XLICMIMECID_PROPERTY = 95,
        XLICMIMECONTENTTYPE_PROPERTY = 96,
        XLICMIMEENCODING_PROPERTY = 97,
        XLICMIMEFILENAME_PROPERTY = 98,
        XLICMIMEOPTINFO_PROPERTY = 99,
        NO_PROPERTY = 100,
    }


    /**
     * @gir-type Enum
     */
    enum property_method {
        X = 10500,
        PUBLISH = 10501,
        REQUEST = 10502,
        REPLY = 10503,
        ADD = 10504,
        CANCEL = 10505,
        REFRESH = 10506,
        COUNTER = 10507,
        DECLINECOUNTER = 10508,
        CREATE = 10509,
        READ = 10510,
        RESPONSE = 10511,
        MOVE = 10512,
        MODIFY = 10513,
        GENERATEUID = 10514,
        DELETE = 10515,
        POLLSTATUS = 10516,
        NONE = 10599,
    }


    /**
     * @gir-type Enum
     */
    enum property_pollcompletion {
        X = 10600,
        SERVER = 10601,
        SERVERSUBMIT = 10602,
        SERVERCHOICE = 10603,
        CLIENT = 10604,
        NONE = 10699,
    }


    /**
     * @gir-type Enum
     */
    enum property_pollmode {
        X = 10700,
        BASIC = 10701,
        NONE = 10799,
    }


    /**
     * @gir-type Enum
     */
    enum property_querylevel {
        X = 10800,
        CALQL1 = 10801,
        CALQLNONE = 10802,
        NONE = 10899,
    }


    /**
     * @gir-type Enum
     */
    enum property_status {
        X = 10900,
        TENTATIVE = 10901,
        CONFIRMED = 10902,
        COMPLETED = 10903,
        NEEDSACTION = 10904,
        CANCELLED = 10905,
        INPROCESS = 10906,
        DRAFT = 10907,
        FINAL = 10908,
        SUBMITTED = 10909,
        PENDING = 10910,
        FAILED = 10911,
        DELETED = 10912,
        NONE = 10999,
    }


    /**
     * @gir-type Enum
     */
    enum property_taskmode {
        X = 11200,
        AUTOMATICCOMPLETION = 11201,
        AUTOMATICFAILURE = 11202,
        AUTOMATICSTATUS = 11203,
        NONE = 11299,
    }


    /**
     * @gir-type Enum
     */
    enum property_transp {
        X = 11000,
        OPAQUE = 11001,
        OPAQUENOCONFLICT = 11002,
        TRANSPARENT = 11003,
        TRANSPARENTNOCONFLICT = 11004,
        NONE = 11099,
    }


    /**
     * @gir-type Enum
     */
    enum property_xlicclass {
        X = 11100,
        PUBLISHNEW = 11101,
        PUBLISHUPDATE = 11102,
        PUBLISHFREEBUSY = 11103,
        REQUESTNEW = 11104,
        REQUESTUPDATE = 11105,
        REQUESTRESCHEDULE = 11106,
        REQUESTDELEGATE = 11107,
        REQUESTNEWORGANIZER = 11108,
        REQUESTFORWARD = 11109,
        REQUESTSTATUS = 11110,
        REQUESTFREEBUSY = 11111,
        REPLYACCEPT = 11112,
        REPLYDECLINE = 11113,
        REPLYDELEGATE = 11114,
        REPLYCRASHERACCEPT = 11115,
        REPLYCRASHERDECLINE = 11116,
        ADDINSTANCE = 11117,
        CANCELEVENT = 11118,
        CANCELINSTANCE = 11119,
        CANCELALL = 11120,
        REFRESH = 11121,
        COUNTER = 11122,
        DECLINECOUNTER = 11123,
        MALFORMED = 11124,
        OBSOLETE = 11125,
        MISSEQUENCED = 11126,
        UNKNOWN = 11127,
        NONE = 11199,
    }


    /**
     * @gir-type Enum
     */
    enum recurrencetype_frequency {
        SECONDLY_RECURRENCE = 0,
        MINUTELY_RECURRENCE = 1,
        HOURLY_RECURRENCE = 2,
        DAILY_RECURRENCE = 3,
        WEEKLY_RECURRENCE = 4,
        MONTHLY_RECURRENCE = 5,
        YEARLY_RECURRENCE = 6,
        NO_RECURRENCE = 7,
    }


    /**
     * @gir-type Enum
     */
    enum recurrencetype_skip {
        BACKWARD = 0,
        FORWARD = 1,
        OMIT = 2,
        UNDEFINED = 3,
    }


    /**
     * @gir-type Enum
     */
    enum recurrencetype_weekday {
        NO_WEEKDAY = 0,
        SUNDAY_WEEKDAY = 1,
        MONDAY_WEEKDAY = 2,
        TUESDAY_WEEKDAY = 3,
        WEDNESDAY_WEEKDAY = 4,
        THURSDAY_WEEKDAY = 5,
        FRIDAY_WEEKDAY = 6,
        SATURDAY_WEEKDAY = 7,
    }


    /**
     * @gir-type Enum
     */
    enum requeststatus {
        UNKNOWN_STATUS = 0,
        "2_0_SUCCESS_STATUS" = 1,
        "2_1_FALLBACK_STATUS" = 2,
        "2_2_IGPROP_STATUS" = 3,
        "2_3_IGPARAM_STATUS" = 4,
        "2_4_IGXPROP_STATUS" = 5,
        "2_5_IGXPARAM_STATUS" = 6,
        "2_6_IGCOMP_STATUS" = 7,
        "2_7_FORWARD_STATUS" = 8,
        "2_8_ONEEVENT_STATUS" = 9,
        "2_9_TRUNC_STATUS" = 10,
        "2_10_ONETODO_STATUS" = 11,
        "2_11_TRUNCRRULE_STATUS" = 12,
        "3_0_INVPROPNAME_STATUS" = 13,
        "3_1_INVPROPVAL_STATUS" = 14,
        "3_2_INVPARAM_STATUS" = 15,
        "3_3_INVPARAMVAL_STATUS" = 16,
        "3_4_INVCOMP_STATUS" = 17,
        "3_5_INVTIME_STATUS" = 18,
        "3_6_INVRULE_STATUS" = 19,
        "3_7_INVCU_STATUS" = 20,
        "3_8_NOAUTH_STATUS" = 21,
        "3_9_BADVERSION_STATUS" = 22,
        "3_10_TOOBIG_STATUS" = 23,
        "3_11_MISSREQCOMP_STATUS" = 24,
        "3_12_UNKCOMP_STATUS" = 25,
        "3_13_BADCOMP_STATUS" = 26,
        "3_14_NOCAP_STATUS" = 27,
        "3_15_INVCOMMAND" = 28,
        "4_0_BUSY_STATUS" = 29,
        "4_1_STORE_ACCESS_DENIED" = 30,
        "4_2_STORE_FAILED" = 31,
        "4_3_STORE_NOT_FOUND" = 32,
        "5_0_MAYBE_STATUS" = 33,
        "5_1_UNAVAIL_STATUS" = 34,
        "5_2_NOSERVICE_STATUS" = 35,
        "5_3_NOSCHED_STATUS" = 36,
        "6_1_CONTAINER_NOT_FOUND" = 37,
        "9_0_UNRECOGNIZED_COMMAND" = 38,
    }


    /**
     * @gir-type Enum
     */
    enum restriction_kind {
        NONE = 0,
        ZERO = 1,
        ONE = 2,
        ZEROPLUS = 3,
        ONEPLUS = 4,
        ZEROORONE = 5,
        ONEEXCLUSIVE = 6,
        ONEMUTUAL = 7,
        UNKNOWN = 8,
    }


    /**
     * @gir-type Enum
     */
    enum value_kind {
        ANY_VALUE = 5000,
        ACTION_VALUE = 5027,
        ATTACH_VALUE = 5003,
        BINARY_VALUE = 5011,
        BOOLEAN_VALUE = 5021,
        BUSYTYPE_VALUE = 5032,
        CALADDRESS_VALUE = 5023,
        CARLEVEL_VALUE = 5016,
        CLASS_VALUE = 5019,
        CMD_VALUE = 5010,
        DATE_VALUE = 5002,
        DATETIME_VALUE = 5028,
        DATETIMEDATE_VALUE = 5036,
        DATETIMEPERIOD_VALUE = 5015,
        DURATION_VALUE = 5020,
        FLOAT_VALUE = 5013,
        GEO_VALUE = 5004,
        INTEGER_VALUE = 5017,
        METHOD_VALUE = 5030,
        PERIOD_VALUE = 5014,
        POLLCOMPLETION_VALUE = 5034,
        POLLMODE_VALUE = 5033,
        QUERY_VALUE = 5001,
        QUERYLEVEL_VALUE = 5012,
        RECUR_VALUE = 5026,
        REQUESTSTATUS_VALUE = 5009,
        STATUS_VALUE = 5005,
        STRING_VALUE = 5007,
        TASKMODE_VALUE = 5035,
        TEXT_VALUE = 5008,
        TRANSP_VALUE = 5006,
        TRIGGER_VALUE = 5024,
        URI_VALUE = 5018,
        UTCOFFSET_VALUE = 5029,
        X_VALUE = 5022,
        XLICCLASS_VALUE = 5025,
        NO_VALUE = 5031,
    }


    /**
     * @default 0
     */
    const BOOLEAN_FALSE: number;

    /**
     * @default 1
     */
    const BOOLEAN_TRUE: number;

    /**
     * @default -6
     */
    const BY_DAY_SIZE: number;

    /**
     * @default 25
     */
    const BY_HOUR_SIZE: number;

    /**
     * @default 61
     */
    const BY_MINUTE_SIZE: number;

    /**
     * @default 32
     */
    const BY_MONTHDAY_SIZE: number;

    /**
     * @default 14
     */
    const BY_MONTH_SIZE: number;

    /**
     * @default 62
     */
    const BY_SECOND_SIZE: number;

    /**
     * @default 56
     */
    const BY_WEEKNO_SIZE: number;

    /**
     * @default 386
     */
    const BY_YEARDAY_SIZE: number;

    /**
     * @default 0
     */
    const ERRORS_ARE_FATAL: number;

    /**
     * @default 20000
     */
    const ICALPARAMETER_FIRST_ENUM: number;

    /**
     * @default 22300
     */
    const ICALPARAMETER_LAST_ENUM: number;

    /**
     * @default 10000
     */
    const ICALPROPERTY_FIRST_ENUM: number;

    /**
     * @default 11300
     */
    const ICALPROPERTY_LAST_ENUM: number;

    /**
     * @default 3
     */
    const MAJOR_VERSION: number;

    /**
     * @default 0
     */
    const MINOR_VERSION: number;

    /**
     * @default libical
     */
    const PACKAGE: string;

    /**
     * @default 20
     */
    const PATCH_VERSION: number;

    /**
     * @default 3.0
     */
    const VERSION: string;

    /**
     * @default tab/zone_sun.tab
     */
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
    function decode_base64(dest: string, src: string, size: bigint | number): string;

    /**
     * @param dest 
     * @param src 
     * @param size 
     */
    function decode_quoted_printable(dest: string, src: string, size: bigint | number): string;

    function free_zone_directory(): void;

    function get_unknown_token_handling_setting(): _unknown_token_handling;

    function get_zone_directory(): string;

    /**
     * @param array 
     * @param element 
     */
    function icalarray_append(array: array, element: null): void;

    /**
     * @param array 
     * @param position 
     */
    function icalarray_element_at(array: array, position: bigint | number): null;

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
    function icalarray_remove_element_at(array: array, position: bigint | number): void;

    /**
     * @param array 
     * @param compare 
     */
    function icalarray_sort(array: array, compare: null): void;

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
    function icalcomponent_count_components(component: component, kind: component_kind): number;

    /**
     * @param component 
     */
    function icalcomponent_count_errors(component: component): number;

    /**
     * @param component 
     * @param kind 
     */
    function icalcomponent_count_properties(component: component, kind: property_kind): number;

    /**
     * @param comp 
     * @param start 
     * @param end 
     * @param callback 
     * @param callback_data 
     */
    function icalcomponent_foreach_recurrence(comp: component, start: null, end: null, callback: null, callback_data: null): void;

    /**
     * @param comp 
     * @param callback 
     * @param callback_data 
     */
    function icalcomponent_foreach_tzid(comp: component, callback: null, callback_data: null): void;

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
    function icalcomponent_get_dtend(comp: component): null;

    /**
     * @param comp 
     */
    function icalcomponent_get_dtstamp(comp: component): null;

    /**
     * @param comp 
     */
    function icalcomponent_get_dtstart(comp: component): null;

    /**
     * @param comp 
     */
    function icalcomponent_get_due(comp: component): null;

    /**
     * @param comp 
     */
    function icalcomponent_get_duration(comp: component): null;

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
    function icalcomponent_get_recurrenceid(comp: component): null;

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
    function icalcomponent_get_span(comp: component): null;

    /**
     * @param comp 
     */
    function icalcomponent_get_status(comp: component): null;

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
    function icalcomponent_isa_component(component: null): number;

    /**
     * @param kind 
     */
    function icalcomponent_kind_is_valid(kind: component_kind): number;

    /**
     * @param kind 
     */
    function icalcomponent_kind_to_string(kind: component_kind): string;

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
    function icalcomponent_set_dtend(comp: component, v: null): void;

    /**
     * @param comp 
     * @param v 
     */
    function icalcomponent_set_dtstamp(comp: component, v: null): void;

    /**
     * @param comp 
     * @param v 
     */
    function icalcomponent_set_dtstart(comp: component, v: null): void;

    /**
     * @param comp 
     * @param v 
     */
    function icalcomponent_set_due(comp: component, v: null): void;

    /**
     * @param comp 
     * @param v 
     */
    function icalcomponent_set_duration(comp: component, v: null): void;

    /**
     * @param comp 
     * @param v 
     */
    function icalcomponent_set_location(comp: component, v: string): void;

    /**
     * @param comp 
     * @param method 
     */
    function icalcomponent_set_method(comp: component, method: property_method): void;

    /**
     * @param component 
     * @param parent 
     */
    function icalcomponent_set_parent(component: component, parent: component): void;

    /**
     * @param comp 
     * @param v 
     */
    function icalcomponent_set_recurrenceid(comp: component, v: null): void;

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
    function icalcomponent_set_status(comp: component, v: null): void;

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
    function icaldurationtype_as_ical_string(d: null): string;

    /**
     * @param d 
     */
    function icaldurationtype_as_ical_string_r(d: null): string;

    /**
     * @param duration 
     */
    function icaldurationtype_as_int(duration: null): number;

    function icaldurationtype_bad_duration(): null;

    /**
     * @param t 
     */
    function icaldurationtype_from_int(t: number): null;

    /**
     * @param dur 
     */
    function icaldurationtype_from_string(dur: string): null;

    /**
     * @param d 
     */
    function icaldurationtype_is_bad_duration(d: null): number;

    /**
     * @param d 
     */
    function icaldurationtype_is_null_duration(d: null): number;

    function icaldurationtype_null_duration(): null;

    /**
     * @param major 
     * @param minor 
     */
    function icalenum_num_to_reqstat(major: number, minor: number): requeststatus;

    /**
     * @param stat 
     */
    function icalenum_reqstat_code(stat: requeststatus): string;

    /**
     * @param stat 
     */
    function icalenum_reqstat_code_r(stat: requeststatus): string;

    /**
     * @param stat 
     */
    function icalenum_reqstat_desc(stat: requeststatus): string;

    /**
     * @param stat 
     */
    function icalenum_reqstat_major(stat: requeststatus): number;

    /**
     * @param stat 
     */
    function icalenum_reqstat_minor(stat: requeststatus): number;

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
    function icalerror_get_error_state(error: errorenum): errorstate;

    function icalerror_get_errors_are_fatal(): number;

    function icalerror_perror(): string;

    /**
     * @param error 
     * @param es 
     */
    function icalerror_restore(error: string, es: errorstate): void;

    /**
     * @param x 
     */
    function icalerror_set_errno(x: errorenum): void;

    /**
     * @param error 
     * @param state 
     */
    function icalerror_set_error_state(error: errorenum, state: errorstate): void;

    /**
     * @param fatal 
     */
    function icalerror_set_errors_are_fatal(fatal: number): void;

    function icalerror_stop_here(): void;

    /**
     * @param e 
     */
    function icalerror_strerror(e: errorenum): string;

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
    function icalmemory_add_tmp_buffer(buf: null): void;

    /**
     * @param buf 
     * @param pos 
     * @param buf_size 
     * @param ch 
     */
    function icalmemory_append_char(buf: string, pos: string, buf_size: bigint | number, ch: number): void;

    /**
     * @param buf 
     * @param pos 
     * @param buf_size 
     * @param string 
     */
    function icalmemory_append_string(buf: string, pos: string, buf_size: bigint | number, string: string): void;

    /**
     * @param buf 
     */
    function icalmemory_free_buffer(buf: null): void;

    /**
     * ```
     */
    function icalmemory_free_ring(): void;

    /**
     * @param size 
     */
    function icalmemory_new_buffer(size: bigint | number): null;

    /**
     * @param buf 
     * @param size 
     */
    function icalmemory_resize_buffer(buf: null, size: bigint | number): null;

    /**
     * @param s 
     */
    function icalmemory_strdup(s: string): string;

    /**
     * @param size 
     */
    function icalmemory_tmp_buffer(size: bigint | number): null;

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
    function icalparameter_isa_parameter(param: null): number;

    /**
     * @param kind 
     */
    function icalparameter_kind_is_valid(kind: parameter_kind): number;

    /**
     * @param kind 
     */
    function icalparameter_kind_to_string(kind: parameter_kind): string;

    /**
     * @param value 
     * @param v 
     */
    function icalparameter_set_actionparam(value: parameter, v: parameter_action): void;

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
    function icalparameter_set_cutype(value: parameter, v: parameter_cutype): void;

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
    function icalparameter_set_display(value: parameter, v: parameter_display): void;

    /**
     * @param value 
     * @param v 
     */
    function icalparameter_set_email(value: parameter, v: string): void;

    /**
     * @param value 
     * @param v 
     */
    function icalparameter_set_enable(value: parameter, v: parameter_enable): void;

    /**
     * @param value 
     * @param v 
     */
    function icalparameter_set_encoding(value: parameter, v: parameter_encoding): void;

    /**
     * @param value 
     * @param v 
     */
    function icalparameter_set_fbtype(value: parameter, v: parameter_fbtype): void;

    /**
     * @param value 
     * @param v 
     */
    function icalparameter_set_feature(value: parameter, v: parameter_feature): void;

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
    function icalparameter_set_local(value: parameter, v: parameter_local): void;

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
    function icalparameter_set_partstat(value: parameter, v: parameter_partstat): void;

    /**
     * @param value 
     * @param v 
     */
    function icalparameter_set_patchaction(value: parameter, v: parameter_patchaction): void;

    /**
     * @param value 
     * @param v 
     */
    function icalparameter_set_publiccomment(value: parameter, v: string): void;

    /**
     * @param value 
     * @param v 
     */
    function icalparameter_set_range(value: parameter, v: parameter_range): void;

    /**
     * @param value 
     * @param v 
     */
    function icalparameter_set_reason(value: parameter, v: string): void;

    /**
     * @param value 
     * @param v 
     */
    function icalparameter_set_related(value: parameter, v: parameter_related): void;

    /**
     * @param value 
     * @param v 
     */
    function icalparameter_set_reltype(value: parameter, v: parameter_reltype): void;

    /**
     * @param value 
     * @param v 
     */
    function icalparameter_set_required(value: parameter, v: parameter_required): void;

    /**
     * @param value 
     * @param v 
     */
    function icalparameter_set_response(value: parameter, v: number): void;

    /**
     * @param value 
     * @param v 
     */
    function icalparameter_set_role(value: parameter, v: parameter_role): void;

    /**
     * @param value 
     * @param v 
     */
    function icalparameter_set_rsvp(value: parameter, v: parameter_rsvp): void;

    /**
     * @param value 
     * @param v 
     */
    function icalparameter_set_scheduleagent(value: parameter, v: parameter_scheduleagent): void;

    /**
     * @param value 
     * @param v 
     */
    function icalparameter_set_scheduleforcesend(value: parameter, v: parameter_scheduleforcesend): void;

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
    function icalparameter_set_stayinformed(value: parameter, v: parameter_stayinformed): void;

    /**
     * @param value 
     * @param v 
     */
    function icalparameter_set_substate(value: parameter, v: parameter_substate): void;

    /**
     * @param value 
     * @param v 
     */
    function icalparameter_set_tzid(value: parameter, v: string): void;

    /**
     * @param value 
     * @param v 
     */
    function icalparameter_set_value(value: parameter, v: parameter_value): void;

    /**
     * @param value 
     * @param v 
     */
    function icalparameter_set_x(value: parameter, v: string): void;

    /**
     * @param value 
     * @param v 
     */
    function icalparameter_set_xliccomparetype(value: parameter, v: parameter_xliccomparetype): void;

    /**
     * @param value 
     * @param v 
     */
    function icalparameter_set_xlicerrortype(value: parameter, v: parameter_xlicerrortype): void;

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
    function icalparameter_value_to_value_kind(value: parameter_value): value_kind;

    /**
     * @param parser 
     */
    function icalparser_free(parser: parser): void;

    function icalparser_get_ctrl(): null;

    /**
     * @param parser 
     */
    function icalparser_get_state(parser: parser): parser_state;

    /**
     * @param ctrl 
     */
    function icalparser_set_ctrl(ctrl: null): void;

    /**
     * @param parser 
     * @param data 
     */
    function icalparser_set_gen_data(parser: parser, data: null): void;

    /**
     * @param out 
     * @param buf_size 
     * @param d 
     */
    function icalparser_string_line_generator(out: string, buf_size: bigint | number, d: null): string;

    /**
     * @param p 
     */
    function icalperiodtype_as_ical_string(p: null): string;

    /**
     * @param p 
     */
    function icalperiodtype_as_ical_string_r(p: null): string;

    /**
     * @param str 
     */
    function icalperiodtype_from_string(str: string): null;

    /**
     * @param p 
     */
    function icalperiodtype_is_null_period(p: null): number;

    /**
     * @param p 
     */
    function icalperiodtype_is_valid_period(p: null): number;

    function icalperiodtype_null_period(): null;

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
    function icalproperty_enum_belongs_to_property(kind: property_kind, e: number): number;

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
    function icalproperty_get_acknowledged(prop: property): null;

    /**
     * @param prop 
     */
    function icalproperty_get_action(prop: property): null;

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
    function icalproperty_get_busytype(prop: property): null;

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
    function icalproperty_get_carlevel(prop: property): null;

    /**
     * @param prop 
     */
    function icalproperty_get_categories(prop: property): string;

    /**
     * @param prop 
     */
    function icalproperty_get_class(prop: property): null;

    /**
     * @param prop 
     */
    function icalproperty_get_cmd(prop: property): null;

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
    function icalproperty_get_completed(prop: property): null;

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
    function icalproperty_get_created(prop: property): null;

    /**
     * @param prop 
     */
    function icalproperty_get_csid(prop: property): string;

    /**
     * @param prop 
     */
    function icalproperty_get_datemax(prop: property): null;

    /**
     * @param prop 
     */
    function icalproperty_get_datemin(prop: property): null;

    /**
     * @param prop 
     * @param comp 
     */
    function icalproperty_get_datetime_with_component(prop: property, comp: component): null;

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
    function icalproperty_get_dtend(prop: property): null;

    /**
     * @param prop 
     */
    function icalproperty_get_dtstamp(prop: property): null;

    /**
     * @param prop 
     */
    function icalproperty_get_dtstart(prop: property): null;

    /**
     * @param prop 
     */
    function icalproperty_get_due(prop: property): null;

    /**
     * @param prop 
     */
    function icalproperty_get_duration(prop: property): null;

    /**
     * @param prop 
     */
    function icalproperty_get_estimatedduration(prop: property): null;

    /**
     * @param prop 
     */
    function icalproperty_get_exdate(prop: property): null;

    /**
     * @param prop 
     */
    function icalproperty_get_expand(prop: property): number;

    /**
     * @param prop 
     */
    function icalproperty_get_exrule(prop: property): null;

    /**
     * @param prop 
     */
    function icalproperty_get_freebusy(prop: property): null;

    /**
     * @param prop 
     */
    function icalproperty_get_geo(prop: property): null;

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
    function icalproperty_get_lastmodified(prop: property): null;

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
    function icalproperty_get_maxdate(prop: property): null;

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
    function icalproperty_get_method(prop: property): null;

    /**
     * @param prop 
     */
    function icalproperty_get_mindate(prop: property): null;

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
    function icalproperty_get_pollcompletion(prop: property): null;

    /**
     * @param prop 
     */
    function icalproperty_get_pollitemid(prop: property): number;

    /**
     * @param prop 
     */
    function icalproperty_get_pollmode(prop: property): null;

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
    function icalproperty_get_querylevel(prop: property): null;

    /**
     * @param prop 
     */
    function icalproperty_get_queryname(prop: property): string;

    /**
     * @param prop 
     */
    function icalproperty_get_rdate(prop: property): null;

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
    function icalproperty_get_recurrenceid(prop: property): null;

    /**
     * @param prop 
     */
    function icalproperty_get_refreshinterval(prop: property): null;

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
    function icalproperty_get_requeststatus(prop: property): null;

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
    function icalproperty_get_rrule(prop: property): null;

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
    function icalproperty_get_status(prop: property): null;

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
    function icalproperty_get_taskmode(prop: property): null;

    /**
     * @param prop 
     */
    function icalproperty_get_transp(prop: property): null;

    /**
     * @param prop 
     */
    function icalproperty_get_trigger(prop: property): null;

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
    function icalproperty_get_tzuntil(prop: property): null;

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
    function icalproperty_get_xlicclass(prop: property): null;

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
    function icalproperty_isa_property(property: null): number;

    /**
     * @param kind 
     * @param str 
     */
    function icalproperty_kind_and_string_to_enum(kind: number, str: string): number;

    /**
     * @param kind 
     */
    function icalproperty_kind_is_valid(kind: property_kind): number;

    /**
     * @param kind 
     */
    function icalproperty_kind_to_string(kind: property_kind): string;

    /**
     * @param kind 
     */
    function icalproperty_kind_to_value_kind(kind: property_kind): value_kind;

    /**
     * @param method 
     */
    function icalproperty_method_to_string(method: property_method): string;

    /**
     * @param prop 
     */
    function icalproperty_normalize(prop: property): void;

    /**
     * @param comp 
     * @param dtstart 
     * @param recurtime 
     */
    function icalproperty_recurrence_is_excluded(comp: component, dtstart: null, recurtime: null): number;

    /**
     * @param prop 
     * @param kind 
     */
    function icalproperty_remove_parameter_by_kind(prop: property, kind: parameter_kind): void;

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
    function icalproperty_set_acknowledged(prop: property, v: null): void;

    /**
     * @param prop 
     * @param v 
     */
    function icalproperty_set_action(prop: property, v: null): void;

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
    function icalproperty_set_busytype(prop: property, v: null): void;

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
    function icalproperty_set_carlevel(prop: property, v: null): void;

    /**
     * @param prop 
     * @param v 
     */
    function icalproperty_set_categories(prop: property, v: string): void;

    /**
     * @param prop 
     * @param v 
     */
    function icalproperty_set_class(prop: property, v: null): void;

    /**
     * @param prop 
     * @param v 
     */
    function icalproperty_set_cmd(prop: property, v: null): void;

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
    function icalproperty_set_completed(prop: property, v: null): void;

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
    function icalproperty_set_created(prop: property, v: null): void;

    /**
     * @param prop 
     * @param v 
     */
    function icalproperty_set_csid(prop: property, v: string): void;

    /**
     * @param prop 
     * @param v 
     */
    function icalproperty_set_datemax(prop: property, v: null): void;

    /**
     * @param prop 
     * @param v 
     */
    function icalproperty_set_datemin(prop: property, v: null): void;

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
    function icalproperty_set_dtend(prop: property, v: null): void;

    /**
     * @param prop 
     * @param v 
     */
    function icalproperty_set_dtstamp(prop: property, v: null): void;

    /**
     * @param prop 
     * @param v 
     */
    function icalproperty_set_dtstart(prop: property, v: null): void;

    /**
     * @param prop 
     * @param v 
     */
    function icalproperty_set_due(prop: property, v: null): void;

    /**
     * @param prop 
     * @param v 
     */
    function icalproperty_set_duration(prop: property, v: null): void;

    /**
     * @param prop 
     * @param v 
     */
    function icalproperty_set_estimatedduration(prop: property, v: null): void;

    /**
     * @param prop 
     * @param v 
     */
    function icalproperty_set_exdate(prop: property, v: null): void;

    /**
     * @param prop 
     * @param v 
     */
    function icalproperty_set_expand(prop: property, v: number): void;

    /**
     * @param prop 
     * @param v 
     */
    function icalproperty_set_exrule(prop: property, v: null): void;

    /**
     * @param prop 
     * @param v 
     */
    function icalproperty_set_freebusy(prop: property, v: null): void;

    /**
     * @param prop 
     * @param v 
     */
    function icalproperty_set_geo(prop: property, v: null): void;

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
    function icalproperty_set_lastmodified(prop: property, v: null): void;

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
    function icalproperty_set_maxdate(prop: property, v: null): void;

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
    function icalproperty_set_method(prop: property, v: null): void;

    /**
     * @param prop 
     * @param v 
     */
    function icalproperty_set_mindate(prop: property, v: null): void;

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
    function icalproperty_set_pollcompletion(prop: property, v: null): void;

    /**
     * @param prop 
     * @param v 
     */
    function icalproperty_set_pollitemid(prop: property, v: number): void;

    /**
     * @param prop 
     * @param v 
     */
    function icalproperty_set_pollmode(prop: property, v: null): void;

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
    function icalproperty_set_querylevel(prop: property, v: null): void;

    /**
     * @param prop 
     * @param v 
     */
    function icalproperty_set_queryname(prop: property, v: string): void;

    /**
     * @param prop 
     * @param v 
     */
    function icalproperty_set_rdate(prop: property, v: null): void;

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
    function icalproperty_set_recurrenceid(prop: property, v: null): void;

    /**
     * @param prop 
     * @param v 
     */
    function icalproperty_set_refreshinterval(prop: property, v: null): void;

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
    function icalproperty_set_requeststatus(prop: property, v: null): void;

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
    function icalproperty_set_rrule(prop: property, v: null): void;

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
    function icalproperty_set_status(prop: property, v: null): void;

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
    function icalproperty_set_taskmode(prop: property, v: null): void;

    /**
     * @param prop 
     * @param v 
     */
    function icalproperty_set_transp(prop: property, v: null): void;

    /**
     * @param prop 
     * @param v 
     */
    function icalproperty_set_trigger(prop: property, v: null): void;

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
    function icalproperty_set_tzuntil(prop: property, v: null): void;

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
    function icalproperty_set_xlicclass(prop: property, v: null): void;

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
    function icalproperty_status_to_string(arg0: property_status): string;

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
    function icalproperty_value_kind_to_kind(kind: value_kind): property_kind;

    /**
     * @param rule 
     * @param start 
     * @param count 
     * @param array 
     */
    function icalrecur_expand_recurrence(rule: string, start: bigint | number, count: number, array: bigint | number): number;

    /**
     * @param kind 
     */
    function icalrecur_freq_to_string(kind: recurrencetype_frequency): string;

    /**
     * @param arg0 
     */
    function icalrecur_iterator_free(arg0: recur_iterator): void;

    /**
     * @param arg0 
     */
    function icalrecur_iterator_next(arg0: recur_iterator): null;

    /**
     * @param impl 
     * @param start 
     */
    function icalrecur_iterator_set_start(impl: recur_iterator, start: null): number;

    /**
     * @param kind 
     */
    function icalrecur_skip_to_string(kind: recurrencetype_skip): string;

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
    function icalrecur_weekday_to_string(kind: recurrencetype_weekday): string;

    /**
     * @param recur 
     */
    function icalrecurrencetype_as_string(recur: null): string;

    /**
     * @param recur 
     */
    function icalrecurrencetype_as_string_r(recur: null): string;

    /**
     * @param r 
     */
    function icalrecurrencetype_clear(r: null): void;

    /**
     * @param day 
     */
    function icalrecurrencetype_day_day_of_week(day: number): null;

    /**
     * @param day 
     */
    function icalrecurrencetype_day_position(day: number): number;

    /**
     * @param str 
     */
    function icalrecurrencetype_from_string(str: string): null;

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
    function icalreqstattype_as_string(arg0: null): string;

    /**
     * @param arg0 
     */
    function icalreqstattype_as_string_r(arg0: null): string;

    /**
     * @param str 
     */
    function icalreqstattype_from_string(str: string): null;

    /**
     * @param comp 
     */
    function icalrestriction_check(comp: component): number;

    /**
     * @param restr 
     * @param count 
     */
    function icalrestriction_compare(restr: restriction_kind, count: number): number;

    /**
     * @param t 
     * @param d 
     */
    function icaltime_add(t: null, d: null): null;

    /**
     * @param tt 
     * @param days 
     * @param hours 
     * @param minutes 
     * @param seconds 
     */
    function icaltime_adjust(tt: null, days: number, hours: number, minutes: number, seconds: number): void;

    /**
     * @param tt 
     */
    function icaltime_as_ical_string(tt: null): string;

    /**
     * @param tt 
     */
    function icaltime_as_ical_string_r(tt: null): string;

    /**
     * @param arg0 
     */
    function icaltime_as_timet(arg0: null): number;

    /**
     * @param tt 
     * @param zone 
     */
    function icaltime_as_timet_with_zone(tt: null, zone: timezone): number;

    /**
     * @param a 
     * @param b 
     */
    function icaltime_compare(a: null, b: null): number;

    /**
     * @param a 
     * @param b 
     */
    function icaltime_compare_date_only(a: null, b: null): number;

    /**
     * @param a 
     * @param b 
     * @param tz 
     */
    function icaltime_compare_date_only_tz(a: null, b: null, tz: timezone): number;

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
    function icaltime_convert_to_zone(tt: null, zone: timezone): null;

    /**
     * @param zone 
     */
    function icaltime_current_time_with_zone(zone: timezone): null;

    /**
     * @param t 
     */
    function icaltime_day_of_week(t: null): number;

    /**
     * @param t 
     */
    function icaltime_day_of_year(t: null): number;

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
    function icaltime_from_day_of_year(doy: number, year: number): null;

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
    function icaltime_from_string(str: string): null;

    /**
     * @param tm 
     * @param is_date 
     * @param zone 
     */
    function icaltime_from_timet_with_zone(tm: bigint | number, is_date: number, zone: timezone): null;

    /**
     * @param t 
     */
    function icaltime_get_timezone(t: null): timezone;

    /**
     * @param t 
     */
    function icaltime_get_tzid(t: null): string;

    /**
     * @param t 
     */
    function icaltime_is_date(t: null): number;

    /**
     * @param year 
     */
    function icaltime_is_leap_year(year: number): number;

    /**
     * @param t 
     */
    function icaltime_is_null_time(t: null): number;

    /**
     * @param t 
     */
    function icaltime_is_utc(t: null): number;

    /**
     * @param t 
     */
    function icaltime_is_valid_time(t: null): number;

    /**
     * @param tt 
     */
    function icaltime_normalize(tt: null): null;

    function icaltime_null_date(): null;

    function icaltime_null_time(): null;

    /**
     * @param t 
     * @param zone 
     */
    function icaltime_set_timezone(t: null, zone: timezone): null;

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
    function icaltime_span_new(dtstart: null, dtend: null, is_busy: number): null;

    /**
     * @param s1 
     * @param s2 
     */
    function icaltime_span_overlaps(s1: time_span, s2: time_span): number;

    /**
     * @param t 
     * @param fdow 
     */
    function icaltime_start_doy_week(t: null, fdow: number): number;

    /**
     * @param t1 
     * @param t2 
     */
    function icaltime_subtract(t1: null, t2: null): null;

    function icaltime_today(): null;

    /**
     * @param t 
     */
    function icaltime_week_number(t: null): number;

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
    function icaltimezone_convert_time(tt: null, from_zone: timezone, to_zone: timezone): void;

    /**
     * @param zone 
     * @param max_year 
     * @param fp 
     */
    function icaltimezone_dump_changes(zone: timezone, max_year: number, fp: null): number;

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
    function icaltimezone_get_utc_offset(zone: timezone, tt: null, is_daylight: number): number;

    /**
     * @param zone 
     * @param tt 
     * @param is_daylight 
     */
    function icaltimezone_get_utc_offset_of_utc_time(zone: timezone, tt: null, is_daylight: number): number;

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
    function icaltimezone_truncate_vtimezone(vtz: component, start: timetype, end: timetype, ms_compatible: number): void;

    function icaltimezone_tzid_prefix(): string;

    /**
     * @param reltime 
     */
    function icaltriggertype_from_int(reltime: number): null;

    /**
     * @param str 
     */
    function icaltriggertype_from_string(str: string): null;

    /**
     * @param tr 
     */
    function icaltriggertype_is_bad_trigger(tr: null): number;

    /**
     * @param tr 
     */
    function icaltriggertype_is_null_trigger(tr: null): number;

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
    function icalvalue_get_action(value: value): null;

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
    function icalvalue_get_busytype(value: value): null;

    /**
     * @param value 
     */
    function icalvalue_get_caladdress(value: value): string;

    /**
     * @param value 
     */
    function icalvalue_get_carlevel(value: value): null;

    /**
     * @param value 
     */
    function icalvalue_get_class(value: value): null;

    /**
     * @param value 
     */
    function icalvalue_get_cmd(value: value): null;

    /**
     * @param value 
     */
    function icalvalue_get_date(value: value): null;

    /**
     * @param value 
     */
    function icalvalue_get_datetime(value: value): null;

    /**
     * @param value 
     */
    function icalvalue_get_datetimedate(value: value): null;

    /**
     * @param value 
     */
    function icalvalue_get_datetimeperiod(value: value): null;

    /**
     * @param value 
     */
    function icalvalue_get_duration(value: value): null;

    /**
     * @param value 
     */
    function icalvalue_get_float(value: value): number;

    /**
     * @param value 
     */
    function icalvalue_get_geo(value: value): null;

    /**
     * @param value 
     */
    function icalvalue_get_integer(value: value): number;

    /**
     * @param value 
     */
    function icalvalue_get_method(value: value): null;

    /**
     * @param value 
     */
    function icalvalue_get_period(value: value): null;

    /**
     * @param value 
     */
    function icalvalue_get_pollcompletion(value: value): null;

    /**
     * @param value 
     */
    function icalvalue_get_pollmode(value: value): null;

    /**
     * @param value 
     */
    function icalvalue_get_query(value: value): string;

    /**
     * @param value 
     */
    function icalvalue_get_querylevel(value: value): null;

    /**
     * @param value 
     */
    function icalvalue_get_recur(value: value): null;

    /**
     * @param value 
     */
    function icalvalue_get_requeststatus(value: value): null;

    /**
     * @param value 
     */
    function icalvalue_get_status(value: value): null;

    /**
     * @param value 
     */
    function icalvalue_get_string(value: value): string;

    /**
     * @param value 
     */
    function icalvalue_get_taskmode(value: value): null;

    /**
     * @param value 
     */
    function icalvalue_get_text(value: value): string;

    /**
     * @param value 
     */
    function icalvalue_get_transp(value: value): null;

    /**
     * @param value 
     */
    function icalvalue_get_trigger(value: value): null;

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
    function icalvalue_get_xlicclass(value: value): null;

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
    function icalvalue_isa_value(arg0: null): number;

    /**
     * @param kind 
     */
    function icalvalue_kind_is_valid(kind: value_kind): number;

    /**
     * @param kind 
     */
    function icalvalue_kind_to_string(kind: value_kind): string;

    /**
     * @param value 
     */
    function icalvalue_reset_kind(value: value): void;

    /**
     * @param value 
     * @param v 
     */
    function icalvalue_set_action(value: value, v: null): void;

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
    function icalvalue_set_busytype(value: value, v: null): void;

    /**
     * @param value 
     * @param v 
     */
    function icalvalue_set_caladdress(value: value, v: string): void;

    /**
     * @param value 
     * @param v 
     */
    function icalvalue_set_carlevel(value: value, v: null): void;

    /**
     * @param value 
     * @param v 
     */
    function icalvalue_set_class(value: value, v: null): void;

    /**
     * @param value 
     * @param v 
     */
    function icalvalue_set_cmd(value: value, v: null): void;

    /**
     * @param value 
     * @param v 
     */
    function icalvalue_set_date(value: value, v: null): void;

    /**
     * @param value 
     * @param v 
     */
    function icalvalue_set_datetime(value: value, v: null): void;

    /**
     * @param value 
     * @param v 
     */
    function icalvalue_set_datetimedate(value: value, v: null): void;

    /**
     * @param value 
     * @param v 
     */
    function icalvalue_set_datetimeperiod(value: value, v: null): void;

    /**
     * @param value 
     * @param v 
     */
    function icalvalue_set_duration(value: value, v: null): void;

    /**
     * @param value 
     * @param v 
     */
    function icalvalue_set_float(value: value, v: number): void;

    /**
     * @param value 
     * @param v 
     */
    function icalvalue_set_geo(value: value, v: null): void;

    /**
     * @param value 
     * @param v 
     */
    function icalvalue_set_integer(value: value, v: number): void;

    /**
     * @param value 
     * @param v 
     */
    function icalvalue_set_method(value: value, v: null): void;

    /**
     * @param value 
     * @param property 
     */
    function icalvalue_set_parent(value: value, property: property): void;

    /**
     * @param value 
     * @param v 
     */
    function icalvalue_set_period(value: value, v: null): void;

    /**
     * @param value 
     * @param v 
     */
    function icalvalue_set_pollcompletion(value: value, v: null): void;

    /**
     * @param value 
     * @param v 
     */
    function icalvalue_set_pollmode(value: value, v: null): void;

    /**
     * @param value 
     * @param v 
     */
    function icalvalue_set_query(value: value, v: string): void;

    /**
     * @param value 
     * @param v 
     */
    function icalvalue_set_querylevel(value: value, v: null): void;

    /**
     * @param value 
     * @param v 
     */
    function icalvalue_set_recur(value: value, v: null): void;

    /**
     * @param value 
     * @param v 
     */
    function icalvalue_set_requeststatus(value: value, v: null): void;

    /**
     * @param value 
     * @param v 
     */
    function icalvalue_set_status(value: value, v: null): void;

    /**
     * @param value 
     * @param v 
     */
    function icalvalue_set_string(value: value, v: string): void;

    /**
     * @param value 
     * @param v 
     */
    function icalvalue_set_taskmode(value: value, v: null): void;

    /**
     * @param value 
     * @param v 
     */
    function icalvalue_set_text(value: value, v: string): void;

    /**
     * @param value 
     * @param v 
     */
    function icalvalue_set_transp(value: value, v: null): void;

    /**
     * @param value 
     * @param v 
     */
    function icalvalue_set_trigger(value: value, v: null): void;

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
    function icalvalue_set_xlicclass(value: value, v: null): void;

    /**
     * @param str 
     */
    function icalvalue_string_to_kind(str: string): value_kind;

    /**
     * @param str 
     * @param data 
     */
    function print_date_to_string(str: string, data: null): void;

    /**
     * @param str 
     * @param data 
     */
    function print_datetime_to_string(str: string, data: null): void;

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
    function pvl_data(arg0: pvl_elem): null;

    /**
     * @param arg0 
     */
    function pvl_free(arg0: pvl_list): void;

    /**
     * @param l 
     * @param e 
     * @param d 
     */
    function pvl_insert_after(l: pvl_list, e: pvl_elem, d: null): void;

    /**
     * @param l 
     * @param e 
     * @param d 
     */
    function pvl_insert_before(l: pvl_list, e: pvl_elem, d: null): void;

    /**
     * @param l 
     */
    function pvl_pop(l: pvl_list): null;

    /**
     * @param l 
     * @param d 
     */
    function pvl_push(l: pvl_list, d: null): void;

    /**
     * @param arg0 
     * @param arg1 
     */
    function pvl_remove(arg0: pvl_list, arg1: pvl_elem): null;

    /**
     * @param l 
     */
    function pvl_shift(l: pvl_list): null;

    /**
     * @param l 
     * @param d 
     */
    function pvl_unshift(l: pvl_list, d: null): void;

    /**
     * @param newSetting 
     */
    function set_unknown_token_handling_setting(newSetting: _unknown_token_handling): void;

    /**
     * @param path 
     */
    function set_zone_directory(path: string): void;

    /**
     * @param type 
     */
    function sspm_encoding_string(type: null): string;

    /**
     * @param parts 
     * @param max_parts 
     */
    function sspm_free_parts(parts: null, max_parts: bigint | number): void;

    /**
     * @param type 
     */
    function sspm_major_type_string(type: null): string;

    /**
     * @param type 
     */
    function sspm_minor_type_string(type: null): string;

    /**
     * @param parts 
     * @param max_parts 
     * @param actions 
     * @param get_string 
     * @param get_string_data 
     * @param first_header 
     */
    function sspm_parse_mime(parts: null, max_parts: bigint | number, actions: null, get_string: null, get_string_data: null, first_header: null): number;

    /**
     * @param parts 
     * @param num_parts 
     * @param output_string 
     * @param header 
     */
    function sspm_write_mime(parts: null, num_parts: bigint | number, output_string: string, header: string): number;

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
        (s: string, size: number, d: null): string;
    }

    /**
     * @gir-type Callback
     */
    interface pvl_applyf {
        (a: null, b: null): void;
    }

    /**
     * @gir-type Callback
     */
    interface pvl_comparef {
        (a: null, b: null): number;
    }

    /**
     * @gir-type Callback
     */
    interface pvl_findf {
        (a: null, b: null): number;
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

        chunks: null;
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
        time: null;

        period: null;

        // Constructors

        constructor(properties?: Partial<{
            time: null;
            period: null;
        }>);
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

        constructor(properties?: Partial<{
            is_neg: number;
            days: number;
            weeks: number;
            hours: number;
            minutes: number;
            seconds: number;
        }>);
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

        constructor(properties?: Partial<{
            lat: number;
            lon: number;
        }>);
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
        start: null;

        end: null;

        duration: null;

        // Constructors

        constructor(properties?: Partial<{
            start: null;
            end: null;
            duration: null;
        }>);
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

        d: null;

        next: null;

        prior: null;

        // Constructors

        constructor(properties?: Partial<{
            MAGIC: number;
            d: null;
            next: null;
            prior: null;
        }>);
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

        until: null;

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
        major: null;

        minor: null;

        // Constructors

        constructor(properties?: Partial<{
            major: null;
            minor: null;
        }>);
    }


    /**
     * @gir-type Struct
     */
    class sspm_header {
        static $gtype: GObject.GType<sspm_header>;

        // Fields
        def: number;

        boundary: string;

        major: null;

        minor: null;

        minor_text: string;

        content_type_params: string;

        charset: string;

        encoding: null;

        filename: string;

        content_id: string;

        error: null;

        error_text: string;

        // Constructors

        constructor(properties?: Partial<{
            def: number;
            boundary: string;
            major: null;
            minor: null;
            minor_text: string;
            content_type_params: string;
            charset: string;
            encoding: null;
            filename: string;
            content_id: string;
            error: null;
            error_text: string;
        }>);
    }


    /**
     * @gir-type Struct
     */
    class sspm_part {
        static $gtype: GObject.GType<sspm_part>;

        // Fields
        header: null;

        level: number;

        data_size: number;

        data: null;
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

        dtstart: null;

        offsetto: number;

        tzoffsetfrom: number;

        comment: string;

        rdate: null;

        rrule: string;

        // Constructors

        constructor(properties?: Partial<{
            tzname: string;
            is_stdandard: number;
            dtstart: null;
            offsetto: number;
            tzoffsetfrom: number;
            comment: string;
            rdate: null;
            rrule: string;
        }>);
    }


    /**
     * @gir-type Struct
     */
    class timezonetype {
        static $gtype: GObject.GType<timezonetype>;

        // Fields
        tzid: string;

        last_mod: null;

        tzurl: string;

        phases: null;

        // Constructors

        constructor(properties?: Partial<{
            tzid: string;
            last_mod: null;
            tzurl: string;
            phases: null;
        }>);
    }


    /**
     * @gir-type Struct
     */
    class triggertype {
        static $gtype: GObject.GType<triggertype>;

        // Fields
        time: null;

        duration: null;

        // Constructors

        constructor(properties?: Partial<{
            time: null;
            duration: null;
        }>);
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
