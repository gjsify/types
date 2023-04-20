
/*
 * Type Definitions for node-gtk (https://github.com/romgrk/node-gtk)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/gjsify/ts-for-gjs
 */
/**
 * ICal-3.0
 */

import type GObject from '@girs/gobject-2.0';
import type GLib from '@girs/glib-2.0';

export namespace ICal {

enum _unknown_token_handling {
    ASSUME_IANA_TOKEN,
    DISCARD_TOKEN,
    TREAT_AS_ERROR,
}
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
enum errorstate {
    FATAL,
    NONFATAL,
    DEFAULT,
    UNKNOWN,
}
enum parameter_action {
    X,
    ASK,
    ABORT,
    NONE,
}
enum parameter_cutype {
    X,
    INDIVIDUAL,
    GROUP,
    RESOURCE,
    ROOM,
    UNKNOWN,
    NONE,
}
enum parameter_display {
    X,
    BADGE,
    GRAPHIC,
    FULLSIZE,
    THUMBNAIL,
    NONE,
}
enum parameter_enable {
    X,
    TRUE,
    FALSE,
    NONE,
}
enum parameter_encoding {
    X,
    TODO_8BIT,
    BASE64,
    NONE,
}
enum parameter_fbtype {
    X,
    FREE,
    BUSY,
    BUSYUNAVAILABLE,
    BUSYTENTATIVE,
    NONE,
}
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
enum parameter_local {
    X,
    TRUE,
    FALSE,
    NONE,
}
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
enum parameter_patchaction {
    X,
    CREATE,
    BYNAME,
    BYVALUE,
    BYPARAM,
    NONE,
}
enum parameter_range {
    X,
    THISANDPRIOR,
    THISANDFUTURE,
    NONE,
}
enum parameter_related {
    X,
    START,
    END,
    NONE,
}
enum parameter_reltype {
    X,
    PARENT,
    CHILD,
    SIBLING,
    POLL,
    NONE,
}
enum parameter_required {
    X,
    TRUE,
    FALSE,
    NONE,
}
enum parameter_role {
    X,
    CHAIR,
    REQPARTICIPANT,
    OPTPARTICIPANT,
    NONPARTICIPANT,
    NONE,
}
enum parameter_rsvp {
    X,
    TRUE,
    FALSE,
    NONE,
}
enum parameter_scheduleagent {
    X,
    SERVER,
    CLIENT,
    NONE,
}
enum parameter_scheduleforcesend {
    X,
    REQUEST,
    REPLY,
    NONE,
}
enum parameter_stayinformed {
    X,
    TRUE,
    FALSE,
    NONE,
}
enum parameter_substate {
    X,
    OK,
    ERROR,
    SUSPENDED,
    NONE,
}
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
enum parser_state {
    ERROR,
    SUCCESS,
    BEGIN_COMP,
    END_COMP,
    IN_PROGRESS,
}
enum property_action {
    X,
    AUDIO,
    DISPLAY,
    EMAIL,
    PROCEDURE,
    NONE,
}
enum property_busytype {
    X,
    BUSY,
    BUSYUNAVAILABLE,
    BUSYTENTATIVE,
    NONE,
}
enum property_carlevel {
    X,
    CARNONE,
    CARMIN,
    CARFULL1,
    NONE,
}
enum property_class {
    X,
    PUBLIC,
    PRIVATE,
    CONFIDENTIAL,
    NONE,
}
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
enum property_pollcompletion {
    X,
    SERVER,
    SERVERSUBMIT,
    SERVERCHOICE,
    CLIENT,
    NONE,
}
enum property_pollmode {
    X,
    BASIC,
    NONE,
}
enum property_querylevel {
    X,
    CALQL1,
    CALQLNONE,
    NONE,
}
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
enum property_taskmode {
    X,
    AUTOMATICCOMPLETION,
    AUTOMATICFAILURE,
    AUTOMATICSTATUS,
    NONE,
}
enum property_transp {
    X,
    OPAQUE,
    OPAQUENOCONFLICT,
    TRANSPARENT,
    TRANSPARENTNOCONFLICT,
    NONE,
}
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
enum recurrencetype_skip {
    BACKWARD,
    FORWARD,
    OMIT,
    UNDEFINED,
}
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
enum requeststatus {
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
const BOOLEAN_FALSE: number
const BOOLEAN_TRUE: number
const BY_DAY_SIZE: number
const BY_HOUR_SIZE: number
const BY_MINUTE_SIZE: number
const BY_MONTHDAY_SIZE: number
const BY_MONTH_SIZE: number
const BY_SECOND_SIZE: number
const BY_WEEKNO_SIZE: number
const BY_YEARDAY_SIZE: number
const ERRORS_ARE_FATAL: number
const ICALPARAMETER_FIRST_ENUM: number
const ICALPARAMETER_LAST_ENUM: number
const ICALPROPERTY_FIRST_ENUM: number
const ICALPROPERTY_LAST_ENUM: number
const MAJOR_VERSION: number
const MINOR_VERSION: number
const PACKAGE: string | null
const PATCH_VERSION: number
const VERSION: string | null
const ZONES_TAB_SYSTEM_FILENAME: string | null
/**
 * }
 * ```
 */
function bt(): void
function decodeBase64(dest: string | null, src: string | null, size: number): string | null
function decodeQuotedPrintable(dest: string | null, src: string | null, size: number): string | null
function freeZoneDirectory(): void
function getUnknownTokenHandlingSetting(): _unknown_token_handling
function icalarrayAppend(array: array, element: any | null): void
function icalarrayElementAt(array: array, position: number): any | null
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
function icalarrayFree(array: array): void
function icalarrayRemoveElementAt(array: array, position: number): void
function icalarraySort(array: array, compare: any | null): void
function icalattachGetData(attach: attach): number
function icalattachGetIsUrl(attach: attach): number
function icalattachGetUrl(attach: attach): string | null
function icalattachRef(attach: attach): void
function icalattachUnref(attach: attach): void
function icalcomponentAddComponent(parent: component, child: component): void
function icalcomponentAddProperty(component: component, property: property): void
function icalcomponentAsIcalString(component: component): string | null
function icalcomponentAsIcalStringR(component: component): string | null
function icalcomponentCheckRestrictions(comp: component): number
function icalcomponentConvertErrors(component: component): void
function icalcomponentCountComponents(component: component, kind: component_kind): number
function icalcomponentCountErrors(component: component): number
function icalcomponentCountProperties(component: component, kind: property_kind): number
function icalcomponentForeachRecurrence(comp: component, start: any | null, end: any | null, callback: any | null, callbackData: any | null): void
function icalcomponentForeachTzid(comp: component, callback: any | null, callbackData: any | null): void
function icalcomponentFree(component: component): void
function icalcomponentGetComment(comp: component): string | null
function icalcomponentGetDescription(comp: component): string | null
function icalcomponentGetDtend(comp: component): any | null
function icalcomponentGetDtstamp(comp: component): any | null
function icalcomponentGetDtstart(comp: component): any | null
function icalcomponentGetDue(comp: component): any | null
function icalcomponentGetDuration(comp: component): any | null
function icalcomponentGetLocation(comp: component): string | null
function icalcomponentGetMethod(comp: component): property_method
function icalcomponentGetRecurrenceid(comp: component): any | null
function icalcomponentGetRelcalid(comp: component): string | null
function icalcomponentGetSequence(comp: component): number
function icalcomponentGetSpan(comp: component): any | null
function icalcomponentGetStatus(comp: component): any | null
function icalcomponentGetSummary(comp: component): string | null
function icalcomponentGetUid(comp: component): string | null
function icalcomponentIsValid(component: component): number
function icalcomponentIsa(component: component): component_kind
function icalcomponentIsaComponent(component: any | null): number
function icalcomponentKindIsValid(kind: component_kind): number
function icalcomponentKindToString(kind: component_kind): string | null
function icalcomponentMergeComponent(comp: component, compToMerge: component): void
function icalcomponentNormalize(comp: component): void
function icalcomponentRemoveComponent(parent: component, child: component): void
function icalcomponentRemoveProperty(component: component, property: property): void
function icalcomponentSetComment(comp: component, v: string | null): void
function icalcomponentSetDescription(comp: component, v: string | null): void
function icalcomponentSetDtend(comp: component, v: any | null): void
function icalcomponentSetDtstamp(comp: component, v: any | null): void
function icalcomponentSetDtstart(comp: component, v: any | null): void
function icalcomponentSetDue(comp: component, v: any | null): void
function icalcomponentSetDuration(comp: component, v: any | null): void
function icalcomponentSetLocation(comp: component, v: string | null): void
function icalcomponentSetMethod(comp: component, method: property_method): void
function icalcomponentSetParent(component: component, parent: component): void
function icalcomponentSetRecurrenceid(comp: component, v: any | null): void
function icalcomponentSetRelcalid(comp: component, v: string | null): void
function icalcomponentSetSequence(comp: component, v: number): void
function icalcomponentSetStatus(comp: component, v: any | null): void
function icalcomponentSetSummary(comp: component, v: string | null): void
function icalcomponentSetUid(comp: component, v: string | null): void
function icalcomponentStringToKind(string: string | null): component_kind
function icalcomponentStripErrors(component: component): void
function icaldurationtypeAsIcalString(d: any | null): string | null
function icaldurationtypeAsIcalStringR(d: any | null): string | null
function icaldurationtypeAsInt(duration: any | null): number
function icaldurationtypeBadDuration(): any | null
function icaldurationtypeFromInt(t: number): any | null
function icaldurationtypeFromString(dur: string | null): any | null
function icaldurationtypeIsBadDuration(d: any | null): number
function icaldurationtypeIsNullDuration(d: any | null): number
function icaldurationtypeNullDuration(): any | null
function icalenumNumToReqstat(major: number, minor: number): requeststatus
function icalenumReqstatCode(stat: requeststatus): string | null
function icalenumReqstatCodeR(stat: requeststatus): string | null
function icalenumReqstatDesc(stat: requeststatus): string | null
function icalenumReqstatMajor(stat: requeststatus): number
function icalenumReqstatMinor(stat: requeststatus): number
function icalerrnoReturn(): errorenum
/**
 * }
 * ```
 */
function icalerrorClearErrno(): void
function icalerrorCrashHere(): void
function icalerrorErrorFromString(str: string | null): errorenum
function icalerrorGetErrorState(error: errorenum): errorstate
function icalerrorGetErrorsAreFatal(): number
function icalerrorPerror(): string | null
function icalerrorRestore(error: string | null, es: errorstate): void
function icalerrorSetErrno(x: errorenum): void
function icalerrorSetErrorState(error: errorenum, state: errorstate): void
function icalerrorSetErrorsAreFatal(fatal: number): void
function icalerrorStopHere(): void
function icalerrorStrerror(e: errorenum): string | null
function icalerrorSupress(error: string | null): errorstate
function icallangbindAccessArray(array: number, index: number): number
function icallangbindFreeArray(array: number): void
function icallangbindNewArray(size: number): number
function icallangbindPropertyEvalString(prop: property, sep: string | null): string | null
function icallangbindPropertyEvalStringR(prop: property, sep: string | null): string | null
function icallangbindQuoteAsIcal(str: string | null): string | null
function icallangbindQuoteAsIcalR(str: string | null): string | null
function icallangbindStringToOpenFlag(str: string | null): number
function icalmemoryAddTmpBuffer(buf: any | null): void
function icalmemoryAppendChar(buf: string | null, pos: string | null, bufSize: number, ch: number): void
function icalmemoryAppendString(buf: string | null, pos: string | null, bufSize: number, string: string | null): void
function icalmemoryFreeBuffer(buf: any | null): void
/**
 * ```
 */
function icalmemoryFreeRing(): void
function icalmemoryNewBuffer(size: number): any | null
function icalmemoryResizeBuffer(buf: any | null, size: number): any | null
function icalmemoryStrdup(s: string | null): string | null
function icalmemoryTmpBuffer(size: number): any | null
function icalmemoryTmpCopy(str: string | null): string | null
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
function icalparameterAsIcalString(parameter: parameter): string | null
function icalparameterAsIcalStringR(parameter: parameter): string | null
function icalparameterEnumToString(e: number): string | null
function icalparameterFree(parameter: parameter): void
function icalparameterGetActionparam(value: parameter): parameter_action
function icalparameterGetAltrep(value: parameter): string | null
function icalparameterGetCharset(value: parameter): string | null
function icalparameterGetCn(value: parameter): string | null
function icalparameterGetCutype(value: parameter): parameter_cutype
function icalparameterGetDelegatedfrom(value: parameter): string | null
function icalparameterGetDelegatedto(value: parameter): string | null
function icalparameterGetDir(value: parameter): string | null
function icalparameterGetDisplay(value: parameter): parameter_display
function icalparameterGetEmail(value: parameter): string | null
function icalparameterGetEnable(value: parameter): parameter_enable
function icalparameterGetEncoding(value: parameter): parameter_encoding
function icalparameterGetFbtype(value: parameter): parameter_fbtype
function icalparameterGetFeature(value: parameter): parameter_feature
function icalparameterGetFilename(value: parameter): string | null
function icalparameterGetFmttype(value: parameter): string | null
function icalparameterGetIana(value: parameter): string | null
function icalparameterGetIanaName(param: parameter): string | null
function icalparameterGetIanaValue(param: parameter): string | null
function icalparameterGetId(value: parameter): string | null
function icalparameterGetLabel(value: parameter): string | null
function icalparameterGetLanguage(value: parameter): string | null
function icalparameterGetLatency(value: parameter): string | null
function icalparameterGetLocal(value: parameter): parameter_local
function icalparameterGetLocalize(value: parameter): string | null
function icalparameterGetManagedid(value: parameter): string | null
function icalparameterGetMember(value: parameter): string | null
function icalparameterGetModified(value: parameter): string | null
function icalparameterGetOptions(value: parameter): string | null
function icalparameterGetPartstat(value: parameter): parameter_partstat
function icalparameterGetPatchaction(value: parameter): parameter_patchaction
function icalparameterGetPubliccomment(value: parameter): string | null
function icalparameterGetRange(value: parameter): parameter_range
function icalparameterGetReason(value: parameter): string | null
function icalparameterGetRelated(value: parameter): parameter_related
function icalparameterGetReltype(value: parameter): parameter_reltype
function icalparameterGetRequired(value: parameter): parameter_required
function icalparameterGetResponse(value: parameter): number
function icalparameterGetRole(value: parameter): parameter_role
function icalparameterGetRsvp(value: parameter): parameter_rsvp
function icalparameterGetScheduleagent(value: parameter): parameter_scheduleagent
function icalparameterGetScheduleforcesend(value: parameter): parameter_scheduleforcesend
function icalparameterGetSchedulestatus(value: parameter): string | null
function icalparameterGetSentby(value: parameter): string | null
function icalparameterGetSize(value: parameter): string | null
function icalparameterGetStayinformed(value: parameter): parameter_stayinformed
function icalparameterGetSubstate(value: parameter): parameter_substate
function icalparameterGetTzid(value: parameter): string | null
function icalparameterGetValue(value: parameter): parameter_value
function icalparameterGetX(value: parameter): string | null
function icalparameterGetXliccomparetype(value: parameter): parameter_xliccomparetype
function icalparameterGetXlicerrortype(value: parameter): parameter_xlicerrortype
function icalparameterGetXname(param: parameter): string | null
function icalparameterGetXvalue(param: parameter): string | null
function icalparameterHasSameName(param1: parameter, param2: parameter): number
function icalparameterIsa(parameter: parameter): parameter_kind
function icalparameterIsaParameter(param: any | null): number
function icalparameterKindIsValid(kind: parameter_kind): number
function icalparameterKindToString(kind: parameter_kind): string | null
function icalparameterSetActionparam(value: parameter, v: parameter_action): void
function icalparameterSetAltrep(value: parameter, v: string | null): void
function icalparameterSetCharset(value: parameter, v: string | null): void
function icalparameterSetCn(value: parameter, v: string | null): void
function icalparameterSetCutype(value: parameter, v: parameter_cutype): void
function icalparameterSetDelegatedfrom(value: parameter, v: string | null): void
function icalparameterSetDelegatedto(value: parameter, v: string | null): void
function icalparameterSetDir(value: parameter, v: string | null): void
function icalparameterSetDisplay(value: parameter, v: parameter_display): void
function icalparameterSetEmail(value: parameter, v: string | null): void
function icalparameterSetEnable(value: parameter, v: parameter_enable): void
function icalparameterSetEncoding(value: parameter, v: parameter_encoding): void
function icalparameterSetFbtype(value: parameter, v: parameter_fbtype): void
function icalparameterSetFeature(value: parameter, v: parameter_feature): void
function icalparameterSetFilename(value: parameter, v: string | null): void
function icalparameterSetFmttype(value: parameter, v: string | null): void
function icalparameterSetIana(value: parameter, v: string | null): void
function icalparameterSetIanaName(param: parameter, v: string | null): void
function icalparameterSetIanaValue(param: parameter, v: string | null): void
function icalparameterSetId(value: parameter, v: string | null): void
function icalparameterSetLabel(value: parameter, v: string | null): void
function icalparameterSetLanguage(value: parameter, v: string | null): void
function icalparameterSetLatency(value: parameter, v: string | null): void
function icalparameterSetLocal(value: parameter, v: parameter_local): void
function icalparameterSetLocalize(value: parameter, v: string | null): void
function icalparameterSetManagedid(value: parameter, v: string | null): void
function icalparameterSetMember(value: parameter, v: string | null): void
function icalparameterSetModified(value: parameter, v: string | null): void
function icalparameterSetOptions(value: parameter, v: string | null): void
function icalparameterSetParent(param: parameter, property: property): void
function icalparameterSetPartstat(value: parameter, v: parameter_partstat): void
function icalparameterSetPatchaction(value: parameter, v: parameter_patchaction): void
function icalparameterSetPubliccomment(value: parameter, v: string | null): void
function icalparameterSetRange(value: parameter, v: parameter_range): void
function icalparameterSetReason(value: parameter, v: string | null): void
function icalparameterSetRelated(value: parameter, v: parameter_related): void
function icalparameterSetReltype(value: parameter, v: parameter_reltype): void
function icalparameterSetRequired(value: parameter, v: parameter_required): void
function icalparameterSetResponse(value: parameter, v: number): void
function icalparameterSetRole(value: parameter, v: parameter_role): void
function icalparameterSetRsvp(value: parameter, v: parameter_rsvp): void
function icalparameterSetScheduleagent(value: parameter, v: parameter_scheduleagent): void
function icalparameterSetScheduleforcesend(value: parameter, v: parameter_scheduleforcesend): void
function icalparameterSetSchedulestatus(value: parameter, v: string | null): void
function icalparameterSetSentby(value: parameter, v: string | null): void
function icalparameterSetSize(value: parameter, v: string | null): void
function icalparameterSetStayinformed(value: parameter, v: parameter_stayinformed): void
function icalparameterSetSubstate(value: parameter, v: parameter_substate): void
function icalparameterSetTzid(value: parameter, v: string | null): void
function icalparameterSetValue(value: parameter, v: parameter_value): void
function icalparameterSetX(value: parameter, v: string | null): void
function icalparameterSetXliccomparetype(value: parameter, v: parameter_xliccomparetype): void
function icalparameterSetXlicerrortype(value: parameter, v: parameter_xlicerrortype): void
function icalparameterSetXname(param: parameter, v: string | null): void
function icalparameterSetXvalue(param: parameter, v: string | null): void
function icalparameterStringToEnum(str: string | null): number
function icalparameterStringToKind(string: string | null): parameter_kind
function icalparameterValueToValueKind(value: parameter_value): value_kind
function icalparserFree(parser: parser): void
function icalparserGetState(parser: parser): parser_state
function icalparserSetGenData(parser: parser, data: any | null): void
function icalparserStringLineGenerator(out: string | null, bufSize: number, d: any | null): string | null
function icalperiodtypeAsIcalString(p: any | null): string | null
function icalperiodtypeAsIcalStringR(p: any | null): string | null
function icalperiodtypeFromString(str: string | null): any | null
function icalperiodtypeIsNullPeriod(p: any | null): number
function icalperiodtypeIsValidPeriod(p: any | null): number
function icalperiodtypeNullPeriod(): any | null
function icalpropertyAddParameter(prop: property, parameter: parameter): void
function icalpropertyAsIcalString(prop: property): string | null
function icalpropertyAsIcalStringR(prop: property): string | null
function icalpropertyCountParameters(prop: property): number
function icalpropertyEnumBelongsToProperty(kind: property_kind, e: number): number
function icalpropertyEnumToString(e: number): string | null
function icalpropertyEnumToStringR(e: number): string | null
function icalpropertyFree(prop: property): void
function icalpropertyGetAcceptresponse(prop: property): string | null
function icalpropertyGetAcknowledged(prop: property): any | null
function icalpropertyGetAction(prop: property): any | null
function icalpropertyGetAllowconflict(prop: property): string | null
function icalpropertyGetAttendee(prop: property): string | null
function icalpropertyGetBusytype(prop: property): any | null
function icalpropertyGetCalid(prop: property): string | null
function icalpropertyGetCalmaster(prop: property): string | null
function icalpropertyGetCalscale(prop: property): string | null
function icalpropertyGetCapversion(prop: property): string | null
function icalpropertyGetCarid(prop: property): string | null
function icalpropertyGetCarlevel(prop: property): any | null
function icalpropertyGetCategories(prop: property): string | null
function icalpropertyGetClass(prop: property): any | null
function icalpropertyGetCmd(prop: property): any | null
function icalpropertyGetColor(prop: property): string | null
function icalpropertyGetComment(prop: property): string | null
function icalpropertyGetCompleted(prop: property): any | null
function icalpropertyGetComponents(prop: property): string | null
function icalpropertyGetConference(prop: property): string | null
function icalpropertyGetContact(prop: property): string | null
function icalpropertyGetCreated(prop: property): any | null
function icalpropertyGetCsid(prop: property): string | null
function icalpropertyGetDatemax(prop: property): any | null
function icalpropertyGetDatemin(prop: property): any | null
function icalpropertyGetDatetimeWithComponent(prop: property, comp: component): any | null
function icalpropertyGetDecreed(prop: property): string | null
function icalpropertyGetDefaultcharset(prop: property): string | null
function icalpropertyGetDefaultlocale(prop: property): string | null
function icalpropertyGetDefaulttzid(prop: property): string | null
function icalpropertyGetDefaultvcars(prop: property): string | null
function icalpropertyGetDeny(prop: property): string | null
function icalpropertyGetDescription(prop: property): string | null
function icalpropertyGetDtend(prop: property): any | null
function icalpropertyGetDtstamp(prop: property): any | null
function icalpropertyGetDtstart(prop: property): any | null
function icalpropertyGetDue(prop: property): any | null
function icalpropertyGetDuration(prop: property): any | null
function icalpropertyGetEstimatedduration(prop: property): any | null
function icalpropertyGetExdate(prop: property): any | null
function icalpropertyGetExpand(prop: property): number
function icalpropertyGetExrule(prop: property): any | null
function icalpropertyGetFreebusy(prop: property): any | null
function icalpropertyGetGeo(prop: property): any | null
function icalpropertyGetGrant(prop: property): string | null
function icalpropertyGetItipversion(prop: property): string | null
function icalpropertyGetLastmodified(prop: property): any | null
function icalpropertyGetLocation(prop: property): string | null
function icalpropertyGetMaxcomponentsize(prop: property): number
function icalpropertyGetMaxdate(prop: property): any | null
function icalpropertyGetMaxresults(prop: property): number
function icalpropertyGetMaxresultssize(prop: property): number
function icalpropertyGetMethod(prop: property): any | null
function icalpropertyGetMindate(prop: property): any | null
function icalpropertyGetMultipart(prop: property): string | null
function icalpropertyGetName(prop: property): string | null
function icalpropertyGetOrganizer(prop: property): string | null
function icalpropertyGetOwner(prop: property): string | null
function icalpropertyGetParameterAsString(prop: property, name: string | null): string | null
function icalpropertyGetParameterAsStringR(prop: property, name: string | null): string | null
function icalpropertyGetPatchdelete(prop: property): string | null
function icalpropertyGetPatchorder(prop: property): number
function icalpropertyGetPatchparameter(prop: property): string | null
function icalpropertyGetPatchtarget(prop: property): string | null
function icalpropertyGetPatchversion(prop: property): string | null
function icalpropertyGetPercentcomplete(prop: property): number
function icalpropertyGetPermission(prop: property): string | null
function icalpropertyGetPollcompletion(prop: property): any | null
function icalpropertyGetPollitemid(prop: property): number
function icalpropertyGetPollmode(prop: property): any | null
function icalpropertyGetPollproperties(prop: property): string | null
function icalpropertyGetPollwinner(prop: property): number
function icalpropertyGetPriority(prop: property): number
function icalpropertyGetProdid(prop: property): string | null
function icalpropertyGetPropertyName(prop: property): string | null
function icalpropertyGetPropertyNameR(prop: property): string | null
function icalpropertyGetQuery(prop: property): string | null
function icalpropertyGetQueryid(prop: property): string | null
function icalpropertyGetQuerylevel(prop: property): any | null
function icalpropertyGetQueryname(prop: property): string | null
function icalpropertyGetRdate(prop: property): any | null
function icalpropertyGetRecuraccepted(prop: property): string | null
function icalpropertyGetRecurexpand(prop: property): string | null
function icalpropertyGetRecurlimit(prop: property): string | null
function icalpropertyGetRecurrenceid(prop: property): any | null
function icalpropertyGetRefreshinterval(prop: property): any | null
function icalpropertyGetRelatedto(prop: property): string | null
function icalpropertyGetRelcalid(prop: property): string | null
function icalpropertyGetRepeat(prop: property): number
function icalpropertyGetReplyurl(prop: property): string | null
function icalpropertyGetRequeststatus(prop: property): any | null
function icalpropertyGetResources(prop: property): string | null
function icalpropertyGetResponse(prop: property): number
function icalpropertyGetRestriction(prop: property): string | null
function icalpropertyGetRrule(prop: property): any | null
function icalpropertyGetScope(prop: property): string | null
function icalpropertyGetSequence(prop: property): number
function icalpropertyGetSource(prop: property): string | null
function icalpropertyGetStatus(prop: property): any | null
function icalpropertyGetStoresexpanded(prop: property): string | null
function icalpropertyGetSummary(prop: property): string | null
function icalpropertyGetTarget(prop: property): string | null
function icalpropertyGetTaskmode(prop: property): any | null
function icalpropertyGetTransp(prop: property): any | null
function icalpropertyGetTrigger(prop: property): any | null
function icalpropertyGetTzid(prop: property): string | null
function icalpropertyGetTzidaliasof(prop: property): string | null
function icalpropertyGetTzname(prop: property): string | null
function icalpropertyGetTzoffsetfrom(prop: property): number
function icalpropertyGetTzoffsetto(prop: property): number
function icalpropertyGetTzuntil(prop: property): any | null
function icalpropertyGetTzurl(prop: property): string | null
function icalpropertyGetUid(prop: property): string | null
function icalpropertyGetUrl(prop: property): string | null
function icalpropertyGetValueAsString(prop: property): string | null
function icalpropertyGetValueAsStringR(prop: property): string | null
function icalpropertyGetVersion(prop: property): string | null
function icalpropertyGetVoter(prop: property): string | null
function icalpropertyGetX(prop: property): string | null
function icalpropertyGetXName(prop: property): string | null
function icalpropertyGetXlicclass(prop: property): any | null
function icalpropertyGetXlicclustercount(prop: property): string | null
function icalpropertyGetXlicerror(prop: property): string | null
function icalpropertyGetXlicmimecharset(prop: property): string | null
function icalpropertyGetXlicmimecid(prop: property): string | null
function icalpropertyGetXlicmimecontenttype(prop: property): string | null
function icalpropertyGetXlicmimeencoding(prop: property): string | null
function icalpropertyGetXlicmimefilename(prop: property): string | null
function icalpropertyGetXlicmimeoptinfo(prop: property): string | null
function icalpropertyIsa(property: property): property_kind
function icalpropertyIsaProperty(property: any | null): number
function icalpropertyKindAndStringToEnum(kind: number, str: string | null): number
function icalpropertyKindIsValid(kind: property_kind): number
function icalpropertyKindToString(kind: property_kind): string | null
function icalpropertyKindToValueKind(kind: property_kind): value_kind
function icalpropertyMethodToString(method: property_method): string | null
function icalpropertyNormalize(prop: property): void
function icalpropertyRecurrenceIsExcluded(comp: component, dtstart: any | null, recurtime: any | null): number
function icalpropertyRemoveParameterByKind(prop: property, kind: parameter_kind): void
function icalpropertyRemoveParameterByName(prop: property, name: string | null): void
/**
 * parameters
 * @param prop 
 * @param param 
 */
function icalpropertyRemoveParameterByRef(prop: property, param: parameter): void
function icalpropertySetAcceptresponse(prop: property, v: string | null): void
function icalpropertySetAcknowledged(prop: property, v: any | null): void
function icalpropertySetAction(prop: property, v: any | null): void
function icalpropertySetAllowconflict(prop: property, v: string | null): void
function icalpropertySetAttach(prop: property, v: attach): void
function icalpropertySetAttendee(prop: property, v: string | null): void
function icalpropertySetBusytype(prop: property, v: any | null): void
function icalpropertySetCalid(prop: property, v: string | null): void
function icalpropertySetCalmaster(prop: property, v: string | null): void
function icalpropertySetCalscale(prop: property, v: string | null): void
function icalpropertySetCapversion(prop: property, v: string | null): void
function icalpropertySetCarid(prop: property, v: string | null): void
function icalpropertySetCarlevel(prop: property, v: any | null): void
function icalpropertySetCategories(prop: property, v: string | null): void
function icalpropertySetClass(prop: property, v: any | null): void
function icalpropertySetCmd(prop: property, v: any | null): void
function icalpropertySetColor(prop: property, v: string | null): void
function icalpropertySetComment(prop: property, v: string | null): void
function icalpropertySetCompleted(prop: property, v: any | null): void
function icalpropertySetComponents(prop: property, v: string | null): void
function icalpropertySetConference(prop: property, v: string | null): void
function icalpropertySetContact(prop: property, v: string | null): void
function icalpropertySetCreated(prop: property, v: any | null): void
function icalpropertySetCsid(prop: property, v: string | null): void
function icalpropertySetDatemax(prop: property, v: any | null): void
function icalpropertySetDatemin(prop: property, v: any | null): void
function icalpropertySetDecreed(prop: property, v: string | null): void
function icalpropertySetDefaultcharset(prop: property, v: string | null): void
function icalpropertySetDefaultlocale(prop: property, v: string | null): void
function icalpropertySetDefaulttzid(prop: property, v: string | null): void
function icalpropertySetDefaultvcars(prop: property, v: string | null): void
function icalpropertySetDeny(prop: property, v: string | null): void
function icalpropertySetDescription(prop: property, v: string | null): void
function icalpropertySetDtend(prop: property, v: any | null): void
function icalpropertySetDtstamp(prop: property, v: any | null): void
function icalpropertySetDtstart(prop: property, v: any | null): void
function icalpropertySetDue(prop: property, v: any | null): void
function icalpropertySetDuration(prop: property, v: any | null): void
function icalpropertySetEstimatedduration(prop: property, v: any | null): void
function icalpropertySetExdate(prop: property, v: any | null): void
function icalpropertySetExpand(prop: property, v: number): void
function icalpropertySetExrule(prop: property, v: any | null): void
function icalpropertySetFreebusy(prop: property, v: any | null): void
function icalpropertySetGeo(prop: property, v: any | null): void
function icalpropertySetGrant(prop: property, v: string | null): void
function icalpropertySetImage(prop: property, v: attach): void
function icalpropertySetItipversion(prop: property, v: string | null): void
function icalpropertySetLastmodified(prop: property, v: any | null): void
function icalpropertySetLocation(prop: property, v: string | null): void
function icalpropertySetMaxcomponentsize(prop: property, v: number): void
function icalpropertySetMaxdate(prop: property, v: any | null): void
function icalpropertySetMaxresults(prop: property, v: number): void
function icalpropertySetMaxresultssize(prop: property, v: number): void
function icalpropertySetMethod(prop: property, v: any | null): void
function icalpropertySetMindate(prop: property, v: any | null): void
function icalpropertySetMultipart(prop: property, v: string | null): void
function icalpropertySetName(prop: property, v: string | null): void
function icalpropertySetOrganizer(prop: property, v: string | null): void
function icalpropertySetOwner(prop: property, v: string | null): void
function icalpropertySetParameter(prop: property, parameter: parameter): void
function icalpropertySetParameterFromString(prop: property, name: string | null, value: string | null): void
function icalpropertySetParent(property: property, component: component): void
function icalpropertySetPatchdelete(prop: property, v: string | null): void
function icalpropertySetPatchorder(prop: property, v: number): void
function icalpropertySetPatchparameter(prop: property, v: string | null): void
function icalpropertySetPatchtarget(prop: property, v: string | null): void
function icalpropertySetPatchversion(prop: property, v: string | null): void
function icalpropertySetPercentcomplete(prop: property, v: number): void
function icalpropertySetPermission(prop: property, v: string | null): void
function icalpropertySetPollcompletion(prop: property, v: any | null): void
function icalpropertySetPollitemid(prop: property, v: number): void
function icalpropertySetPollmode(prop: property, v: any | null): void
function icalpropertySetPollproperties(prop: property, v: string | null): void
function icalpropertySetPollwinner(prop: property, v: number): void
function icalpropertySetPriority(prop: property, v: number): void
function icalpropertySetProdid(prop: property, v: string | null): void
function icalpropertySetQuery(prop: property, v: string | null): void
function icalpropertySetQueryid(prop: property, v: string | null): void
function icalpropertySetQuerylevel(prop: property, v: any | null): void
function icalpropertySetQueryname(prop: property, v: string | null): void
function icalpropertySetRdate(prop: property, v: any | null): void
function icalpropertySetRecuraccepted(prop: property, v: string | null): void
function icalpropertySetRecurexpand(prop: property, v: string | null): void
function icalpropertySetRecurlimit(prop: property, v: string | null): void
function icalpropertySetRecurrenceid(prop: property, v: any | null): void
function icalpropertySetRefreshinterval(prop: property, v: any | null): void
function icalpropertySetRelatedto(prop: property, v: string | null): void
function icalpropertySetRelcalid(prop: property, v: string | null): void
function icalpropertySetRepeat(prop: property, v: number): void
function icalpropertySetReplyurl(prop: property, v: string | null): void
function icalpropertySetRequeststatus(prop: property, v: any | null): void
function icalpropertySetResources(prop: property, v: string | null): void
function icalpropertySetResponse(prop: property, v: number): void
function icalpropertySetRestriction(prop: property, v: string | null): void
function icalpropertySetRrule(prop: property, v: any | null): void
function icalpropertySetScope(prop: property, v: string | null): void
function icalpropertySetSequence(prop: property, v: number): void
function icalpropertySetSource(prop: property, v: string | null): void
function icalpropertySetStatus(prop: property, v: any | null): void
function icalpropertySetStoresexpanded(prop: property, v: string | null): void
function icalpropertySetSummary(prop: property, v: string | null): void
function icalpropertySetTarget(prop: property, v: string | null): void
function icalpropertySetTaskmode(prop: property, v: any | null): void
function icalpropertySetTransp(prop: property, v: any | null): void
function icalpropertySetTrigger(prop: property, v: any | null): void
function icalpropertySetTzid(prop: property, v: string | null): void
function icalpropertySetTzidaliasof(prop: property, v: string | null): void
function icalpropertySetTzname(prop: property, v: string | null): void
function icalpropertySetTzoffsetfrom(prop: property, v: number): void
function icalpropertySetTzoffsetto(prop: property, v: number): void
function icalpropertySetTzuntil(prop: property, v: any | null): void
function icalpropertySetTzurl(prop: property, v: string | null): void
function icalpropertySetUid(prop: property, v: string | null): void
function icalpropertySetUrl(prop: property, v: string | null): void
function icalpropertySetValue(prop: property, value: value): void
function icalpropertySetValueFromString(prop: property, value: string | null, kind: string | null): void
function icalpropertySetVersion(prop: property, v: string | null): void
function icalpropertySetVoter(prop: property, v: string | null): void
function icalpropertySetX(prop: property, v: string | null): void
function icalpropertySetXName(prop: property, name: string | null): void
function icalpropertySetXlicclass(prop: property, v: any | null): void
function icalpropertySetXlicclustercount(prop: property, v: string | null): void
function icalpropertySetXlicerror(prop: property, v: string | null): void
function icalpropertySetXlicmimecharset(prop: property, v: string | null): void
function icalpropertySetXlicmimecid(prop: property, v: string | null): void
function icalpropertySetXlicmimecontenttype(prop: property, v: string | null): void
function icalpropertySetXlicmimeencoding(prop: property, v: string | null): void
function icalpropertySetXlicmimefilename(prop: property, v: string | null): void
function icalpropertySetXlicmimeoptinfo(prop: property, v: string | null): void
function icalpropertyStatusToString(arg0: property_status): string | null
function icalpropertyStringToKind(string: string | null): property_kind
function icalpropertyStringToMethod(str: string | null): property_method
function icalpropertyStringToStatus(string: string | null): property_status
function icalpropertyValueKindToKind(kind: value_kind): property_kind
function icalrecurExpandRecurrence(rule: string | null, start: number, count: number, array: number): number
function icalrecurFreqToString(kind: recurrencetype_frequency): string | null
function icalrecurIteratorFree(arg0: recur_iterator): void
function icalrecurIteratorNext(arg0: recur_iterator): any | null
function icalrecurIteratorSetStart(impl: recur_iterator, start: any | null): number
function icalrecurSkipToString(kind: recurrencetype_skip): string | null
function icalrecurStringToFreq(str: string | null): recurrencetype_frequency
function icalrecurStringToSkip(str: string | null): recurrencetype_skip
function icalrecurStringToWeekday(str: string | null): recurrencetype_weekday
function icalrecurWeekdayToString(kind: recurrencetype_weekday): string | null
function icalrecurrencetypeAsString(recur: any | null): string | null
function icalrecurrencetypeAsStringR(recur: any | null): string | null
function icalrecurrencetypeClear(r: any | null): void
function icalrecurrencetypeDayDayOfWeek(day: number): any | null
function icalrecurrencetypeDayPosition(day: number): number
function icalrecurrencetypeFromString(str: string | null): any | null
function icalrecurrencetypeMonthIsLeap(month: number): number
function icalrecurrencetypeMonthMonth(month: number): number
function icalrecurrencetypeRscaleIsSupported(): number
function icalreqstattypeAsString(arg0: any | null): string | null
function icalreqstattypeAsStringR(arg0: any | null): string | null
function icalreqstattypeFromString(str: string | null): any | null
function icalrestrictionCheck(comp: component): number
function icalrestrictionCompare(restr: restriction_kind, count: number): number
function icaltimeAdd(t: any | null, d: any | null): any | null
function icaltimeAdjust(tt: any | null, days: number, hours: number, minutes: number, seconds: number): void
function icaltimeAsIcalString(tt: any | null): string | null
function icaltimeAsIcalStringR(tt: any | null): string | null
function icaltimeAsTimet(arg0: any | null): number
function icaltimeAsTimetWithZone(tt: any | null, zone: timezone): number
function icaltimeCompare(a: any | null, b: any | null): number
function icaltimeCompareDateOnly(a: any | null, b: any | null): number
function icaltimeCompareDateOnlyTz(a: any | null, b: any | null, tz: timezone): number
/**
 * There are several ways to create a new icaltimetype:
 * 
 *      - icaltime_null_time()
 *      - icaltime_null_date()
 *      - icaltime_current_time_with_zone()
 *      - icaltime_today()
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
function icaltimeConvertToZone(tt: any | null, zone: timezone): any | null
function icaltimeCurrentTimeWithZone(zone: timezone): any | null
function icaltimeDayOfWeek(t: any | null): number
function icaltimeDayOfYear(t: any | null): number
function icaltimeDaysInMonth(month: number, year: number): number
function icaltimeDaysInYear(year: number): number
function icaltimeFromDayOfYear(doy: number, year: number): any | null
/**
 * is the same as that used by icaldurationtype_from_string().
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
function icaltimeFromString(str: string | null): any | null
function icaltimeFromTimetWithZone(tm: number, isDate: number, zone: timezone): any | null
function icaltimeGetTimezone(t: any | null): timezone
function icaltimeGetTzid(t: any | null): string | null
function icaltimeIsDate(t: any | null): number
function icaltimeIsLeapYear(year: number): number
function icaltimeIsNullTime(t: any | null): number
function icaltimeIsUtc(t: any | null): number
function icaltimeIsValidTime(t: any | null): number
function icaltimeNormalize(tt: any | null): any | null
function icaltimeNullDate(): any | null
function icaltimeNullTime(): any | null
function icaltimeSetTimezone(t: any | null, zone: timezone): any | null
function icaltimeSpanContains(s: time_span, container: time_span): number
function icaltimeSpanNew(dtstart: any | null, dtend: any | null, isBusy: number): any | null
function icaltimeSpanOverlaps(s1: time_span, s2: time_span): number
function icaltimeStartDoyWeek(t: any | null, fdow: number): number
function icaltimeSubtract(t1: any | null, t2: any | null): any | null
function icaltimeToday(): any | null
function icaltimeWeekNumber(t: any | null): number
function icaltimezoneArrayAppendFromVtimezone(timezones: array, child: component): void
function icaltimezoneArrayFree(timezones: array): void
function icaltimezoneConvertTime(tt: any | null, fromZone: timezone, toZone: timezone): void
function icaltimezoneDumpChanges(zone: timezone, maxYear: number, fp: any | null): number
function icaltimezoneExpandVtimezone(comp: component, endYear: number, changes: array): void
function icaltimezoneFree(zone: timezone, freeStruct: number): void
function icaltimezoneFreeBuiltinTimezones(): void
function icaltimezoneGetBuiltinTzdata(): number
function icaltimezoneGetDisplayName(zone: timezone): string | null
function icaltimezoneGetLatitude(zone: timezone): number
function icaltimezoneGetLocation(zone: timezone): string | null
function icaltimezoneGetLocationFromVtimezone(component: component): string | null
function icaltimezoneGetLongitude(zone: timezone): number
function icaltimezoneGetTzid(zone: timezone): string | null
function icaltimezoneGetTznames(zone: timezone): string | null
function icaltimezoneGetTznamesFromVtimezone(component: component): string | null
function icaltimezoneGetUtcOffset(zone: timezone, tt: any | null, isDaylight: number): number
function icaltimezoneGetUtcOffsetOfUtcTime(zone: timezone, tt: any | null, isDaylight: number): number
function icaltimezoneReleaseZoneTab(): void
function icaltimezoneSetBuiltinTzdata(set: number): void
function icaltimezoneSetComponent(zone: timezone, comp: component): number
function icaltimezoneSetTzidPrefix(newPrefix: string | null): void
function icaltimezoneTruncateVtimezone(vtz: component, start: timetype, end: timetype, msCompatible: number): void
function icaltimezoneTzidPrefix(): string | null
function icaltriggertypeFromInt(reltime: number): any | null
function icaltriggertypeFromString(str: string | null): any | null
function icaltriggertypeIsBadTrigger(tr: any | null): number
function icaltriggertypeIsNullTrigger(tr: any | null): number
function icaltzutilGetZoneDirectory(): string | null
function icalvalueAsIcalString(value: value): string | null
function icalvalueAsIcalStringR(value: value): string | null
function icalvalueCompare(a: value, b: value): parameter_xliccomparetype
function icalvalueDecodeIcalString(szText: string | null, szDecText: string | null, nMaxBufferLen: number): number
function icalvalueEncodeIcalString(szText: string | null, szEncText: string | null, maxBufferLen: number): number
function icalvalueFree(value: value): void
function icalvalueGetAction(value: value): any | null
function icalvalueGetBinary(value: value): string | null
function icalvalueGetBoolean(value: value): number
function icalvalueGetBusytype(value: value): any | null
function icalvalueGetCaladdress(value: value): string | null
function icalvalueGetCarlevel(value: value): any | null
function icalvalueGetClass(value: value): any | null
function icalvalueGetCmd(value: value): any | null
function icalvalueGetDate(value: value): any | null
function icalvalueGetDatetime(value: value): any | null
function icalvalueGetDatetimedate(value: value): any | null
function icalvalueGetDatetimeperiod(value: value): any | null
function icalvalueGetDuration(value: value): any | null
function icalvalueGetFloat(value: value): number
function icalvalueGetGeo(value: value): any | null
function icalvalueGetInteger(value: value): number
function icalvalueGetMethod(value: value): any | null
function icalvalueGetPeriod(value: value): any | null
function icalvalueGetPollcompletion(value: value): any | null
function icalvalueGetPollmode(value: value): any | null
function icalvalueGetQuery(value: value): string | null
function icalvalueGetQuerylevel(value: value): any | null
function icalvalueGetRecur(value: value): any | null
function icalvalueGetRequeststatus(value: value): any | null
function icalvalueGetStatus(value: value): any | null
function icalvalueGetString(value: value): string | null
function icalvalueGetTaskmode(value: value): any | null
function icalvalueGetText(value: value): string | null
function icalvalueGetTransp(value: value): any | null
function icalvalueGetTrigger(value: value): any | null
function icalvalueGetUri(value: value): string | null
function icalvalueGetUtcoffset(value: value): number
function icalvalueGetX(value: value): string | null
function icalvalueGetXlicclass(value: value): any | null
function icalvalueIsValid(value: value): number
function icalvalueIsa(value: value): value_kind
function icalvalueIsaValue(arg0: any | null): number
function icalvalueKindIsValid(kind: value_kind): number
function icalvalueKindToString(kind: value_kind): string | null
function icalvalueResetKind(value: value): void
function icalvalueSetAction(value: value, v: any | null): void
function icalvalueSetAttach(value: value, attach: attach): void
function icalvalueSetBinary(value: value, v: string | null): void
function icalvalueSetBoolean(value: value, v: number): void
function icalvalueSetBusytype(value: value, v: any | null): void
function icalvalueSetCaladdress(value: value, v: string | null): void
function icalvalueSetCarlevel(value: value, v: any | null): void
function icalvalueSetClass(value: value, v: any | null): void
function icalvalueSetCmd(value: value, v: any | null): void
function icalvalueSetDate(value: value, v: any | null): void
function icalvalueSetDatetime(value: value, v: any | null): void
function icalvalueSetDatetimedate(value: value, v: any | null): void
function icalvalueSetDatetimeperiod(value: value, v: any | null): void
function icalvalueSetDuration(value: value, v: any | null): void
function icalvalueSetFloat(value: value, v: number): void
function icalvalueSetGeo(value: value, v: any | null): void
function icalvalueSetInteger(value: value, v: number): void
function icalvalueSetMethod(value: value, v: any | null): void
function icalvalueSetParent(value: value, property: property): void
function icalvalueSetPeriod(value: value, v: any | null): void
function icalvalueSetPollcompletion(value: value, v: any | null): void
function icalvalueSetPollmode(value: value, v: any | null): void
function icalvalueSetQuery(value: value, v: string | null): void
function icalvalueSetQuerylevel(value: value, v: any | null): void
function icalvalueSetRecur(value: value, v: any | null): void
function icalvalueSetRequeststatus(value: value, v: any | null): void
function icalvalueSetStatus(value: value, v: any | null): void
function icalvalueSetString(value: value, v: string | null): void
function icalvalueSetTaskmode(value: value, v: any | null): void
function icalvalueSetText(value: value, v: string | null): void
function icalvalueSetTransp(value: value, v: any | null): void
function icalvalueSetTrigger(value: value, v: any | null): void
function icalvalueSetUri(value: value, v: string | null): void
function icalvalueSetUtcoffset(value: value, v: number): void
function icalvalueSetX(value: value, v: string | null): void
function icalvalueSetXlicclass(value: value, v: any | null): void
function icalvalueStringToKind(str: string | null): value_kind
function printDateToString(str: string | null, data: any | null): void
function printDatetimeToString(str: string | null, data: any | null): void
function pvlClear(arg0: pvl_list): void
function pvlCount(arg0: pvl_list): number
function pvlData(arg0: pvl_elem): any | null
function pvlFree(arg0: pvl_list): void
function pvlInsertAfter(l: pvl_list, e: pvl_elem, d: any | null): void
function pvlInsertBefore(l: pvl_list, e: pvl_elem, d: any | null): void
function pvlPop(l: pvl_list): any | null
function pvlPush(l: pvl_list, d: any | null): void
function pvlRemove(arg0: pvl_list, arg1: pvl_elem): any | null
function pvlShift(l: pvl_list): any | null
function pvlUnshift(l: pvl_list, d: any | null): void
function setUnknownTokenHandlingSetting(newSetting: _unknown_token_handling): void
function setZoneDirectory(path: string | null): void
function sspmEncodingString(type: any | null): string | null
function sspmFreeParts(parts: any | null, maxParts: number): void
function sspmMajorTypeString(type: any | null): string | null
function sspmMinorTypeString(type: any | null): string | null
function sspmParseMime(parts: any | null, maxParts: number, actions: any | null, getString: any | null, getStringData: any | null, firstHeader: any | null): number
function sspmWriteMime(parts: any | null, numParts: number, outputString: string | null, header: string | null): number
interface icalattach_free_fn_t {
    (data: string | null): void
}
interface icalparser_line_gen_func {
    (s: string | null, size: number, d: any | null): string | null
}
interface pvl_applyf {
    (a: any | null, b: any | null): void
}
interface pvl_comparef {
    (a: any | null, b: any | null): number
}
interface pvl_findf {
    (a: any | null, b: any | null): number
}
interface array {

    // Own fields of ICal-3.0.ICal.array

    elementSize: number
    incrementSize: number
    numElements: number
    spaceAllocated: number
    chunks: any
}

class array {

    // Own properties of ICal-3.0.ICal.array

    static name: string
}

interface attach {
}

class attach {

    // Own properties of ICal-3.0.ICal.attach

    static name: string
}

interface compiter {

    // Own fields of ICal-3.0.ICal.compiter

    kind: component_kind
    iter: pvl_elem
}

class compiter {

    // Own properties of ICal-3.0.ICal.compiter

    static name: string
}

interface component {
}

class component {

    // Own properties of ICal-3.0.ICal.component

    static name: string
}

interface datetimeperiodtype {

    // Own fields of ICal-3.0.ICal.datetimeperiodtype

    time: any
    period: any
}

class datetimeperiodtype {

    // Own properties of ICal-3.0.ICal.datetimeperiodtype

    static name: string
}

interface durationtype {

    // Own fields of ICal-3.0.ICal.durationtype

    isNeg: number
    days: number
    weeks: number
    hours: number
    minutes: number
    seconds: number
}

class durationtype {

    // Own properties of ICal-3.0.ICal.durationtype

    static name: string
}

interface geotype {

    // Own fields of ICal-3.0.ICal.geotype

    lat: number
    lon: number
}

class geotype {

    // Own properties of ICal-3.0.ICal.geotype

    static name: string
}

interface parameter {
}

class parameter {

    // Own properties of ICal-3.0.ICal.parameter

    static name: string
}

interface parser {
}

class parser {

    // Own properties of ICal-3.0.ICal.parser

    static name: string
}

interface periodtype {

    // Own fields of ICal-3.0.ICal.periodtype

    start: any
    end: any
    duration: any
}

class periodtype {

    // Own properties of ICal-3.0.ICal.periodtype

    static name: string
}

interface property {
}

class property {

    // Own properties of ICal-3.0.ICal.property

    static name: string
}

interface pvl_elem {
}

class pvl_elem {

    // Own properties of ICal-3.0.ICal.pvl_elem

    static name: string
}

interface pvl_elem_t {

    // Own fields of ICal-3.0.ICal.pvl_elem_t

    mAGIC: number
    d: any
    next: any
    prior: any
}

class pvl_elem_t {

    // Own properties of ICal-3.0.ICal.pvl_elem_t

    static name: string
}

interface pvl_list {
}

class pvl_list {

    // Own properties of ICal-3.0.ICal.pvl_list

    static name: string
}

interface recur_iterator {
}

class recur_iterator {

    // Own properties of ICal-3.0.ICal.recur_iterator

    static name: string
}

interface recurrencetype {

    // Own fields of ICal-3.0.ICal.recurrencetype

    freq: recurrencetype_frequency
    until: any
    count: number
    interval: number
    weekStart: recurrencetype_weekday
    bySecond: number[]
    byMinute: number[]
    byHour: number[]
    byDay: number[]
    byMonthDay: number[]
    byYearDay: number[]
    byWeekNo: number[]
    byMonth: number[]
    bySetPos: number[]
    rscale: string | null
    skip: recurrencetype_skip
}

class recurrencetype {

    // Own properties of ICal-3.0.ICal.recurrencetype

    static name: string
}

interface reqstattype {

    // Own fields of ICal-3.0.ICal.reqstattype

    code: requeststatus
    desc: string | null
    debug: string | null
}

class reqstattype {

    // Own properties of ICal-3.0.ICal.reqstattype

    static name: string
}

interface sspm_action_map {

    // Own fields of ICal-3.0.ICal.sspm_action_map

    major: any
    minor: any
    newPart: () => any
    addLine: (part: any, header: any, line: string | null, size: number) => void
    endPart: (part: any) => any
    freePart: (part: any) => void
}

class sspm_action_map {

    // Own properties of ICal-3.0.ICal.sspm_action_map

    static name: string
}

interface sspm_header {

    // Own fields of ICal-3.0.ICal.sspm_header

    def: number
    boundary: string | null
    major: any
    minor: any
    minorText: string | null
    contentTypeParams: string | null
    charset: string | null
    encoding: any
    filename: string | null
    contentId: string | null
    error: any
    errorText: string | null
}

class sspm_header {

    // Own properties of ICal-3.0.ICal.sspm_header

    static name: string
}

interface sspm_part {

    // Own fields of ICal-3.0.ICal.sspm_part

    header: any
    level: number
    dataSize: number
    data: any
}

class sspm_part {

    // Own properties of ICal-3.0.ICal.sspm_part

    static name: string
}

interface time_span {

    // Own fields of ICal-3.0.ICal.time_span

    start: number
    end: number
    isBusy: number
}

class time_span {

    // Own properties of ICal-3.0.ICal.time_span

    static name: string
}

interface timetype {

    // Own fields of ICal-3.0.ICal.timetype

    year: number
    month: number
    day: number
    hour: number
    minute: number
    second: number
    isDate: number
    isDaylight: number
    zone: timezone
}

class timetype {

    // Own properties of ICal-3.0.ICal.timetype

    static name: string
}

interface timezone {
}

class timezone {

    // Own properties of ICal-3.0.ICal.timezone

    static name: string
}

interface timezonephase {

    // Own fields of ICal-3.0.ICal.timezonephase

    tzname: string | null
    isStdandard: number
    dtstart: any
    offsetto: number
    tzoffsetfrom: number
    comment: string | null
    rdate: any
    rrule: string | null
}

class timezonephase {

    // Own properties of ICal-3.0.ICal.timezonephase

    static name: string
}

interface timezonetype {

    // Own fields of ICal-3.0.ICal.timezonetype

    tzid: string | null
    lastMod: any
    tzurl: string | null
    phases: any
}

class timezonetype {

    // Own properties of ICal-3.0.ICal.timezonetype

    static name: string
}

interface triggertype {

    // Own fields of ICal-3.0.ICal.triggertype

    time: any
    duration: any
}

class triggertype {

    // Own properties of ICal-3.0.ICal.triggertype

    static name: string
}

interface value {
}

class value {

    // Own properties of ICal-3.0.ICal.value

    static name: string
}

}

export default ICal;