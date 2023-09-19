
/*
 * Type Definitions for node-gtk (https://github.com/romgrk/node-gtk)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/gjsify/ts-for-gir
 */

import './node-ical-3.0-import.d.ts';
    
/**
 * ICal-3.0
 */

import type GObject from '@girs/node-gobject-2.0';
import type GLib from '@girs/node-glib-2.0';

export enum _unknown_token_handling {
    ASSUME_IANA_TOKEN,
    DISCARD_TOKEN,
    TREAT_AS_ERROR,
}
export enum component_kind {
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
export enum errorenum {
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
export enum errorstate {
    FATAL,
    NONFATAL,
    DEFAULT,
    UNKNOWN,
}
export enum parameter_action {
    X,
    ASK,
    ABORT,
    NONE,
}
export enum parameter_cutype {
    X,
    INDIVIDUAL,
    GROUP,
    RESOURCE,
    ROOM,
    UNKNOWN,
    NONE,
}
export enum parameter_display {
    X,
    BADGE,
    GRAPHIC,
    FULLSIZE,
    THUMBNAIL,
    NONE,
}
export enum parameter_enable {
    X,
    TRUE,
    FALSE,
    NONE,
}
export enum parameter_encoding {
    X,
    TODO_8BIT,
    BASE64,
    NONE,
}
export enum parameter_fbtype {
    X,
    FREE,
    BUSY,
    BUSYUNAVAILABLE,
    BUSYTENTATIVE,
    NONE,
}
export enum parameter_feature {
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
export enum parameter_kind {
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
export enum parameter_local {
    X,
    TRUE,
    FALSE,
    NONE,
}
export enum parameter_partstat {
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
export enum parameter_patchaction {
    X,
    CREATE,
    BYNAME,
    BYVALUE,
    BYPARAM,
    NONE,
}
export enum parameter_range {
    X,
    THISANDPRIOR,
    THISANDFUTURE,
    NONE,
}
export enum parameter_related {
    X,
    START,
    END,
    NONE,
}
export enum parameter_reltype {
    X,
    PARENT,
    CHILD,
    SIBLING,
    POLL,
    NONE,
}
export enum parameter_required {
    X,
    TRUE,
    FALSE,
    NONE,
}
export enum parameter_role {
    X,
    CHAIR,
    REQPARTICIPANT,
    OPTPARTICIPANT,
    NONPARTICIPANT,
    NONE,
}
export enum parameter_rsvp {
    X,
    TRUE,
    FALSE,
    NONE,
}
export enum parameter_scheduleagent {
    X,
    SERVER,
    CLIENT,
    NONE,
}
export enum parameter_scheduleforcesend {
    X,
    REQUEST,
    REPLY,
    NONE,
}
export enum parameter_stayinformed {
    X,
    TRUE,
    FALSE,
    NONE,
}
export enum parameter_substate {
    X,
    OK,
    ERROR,
    SUSPENDED,
    NONE,
}
export enum parameter_value {
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
export enum parameter_xliccomparetype {
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
export enum parameter_xlicerrortype {
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
export enum parser_state {
    ERROR,
    SUCCESS,
    BEGIN_COMP,
    END_COMP,
    IN_PROGRESS,
}
export enum property_action {
    X,
    AUDIO,
    DISPLAY,
    EMAIL,
    PROCEDURE,
    NONE,
}
export enum property_busytype {
    X,
    BUSY,
    BUSYUNAVAILABLE,
    BUSYTENTATIVE,
    NONE,
}
export enum property_carlevel {
    X,
    CARNONE,
    CARMIN,
    CARFULL1,
    NONE,
}
export enum property_class {
    X,
    PUBLIC,
    PRIVATE,
    CONFIDENTIAL,
    NONE,
}
export enum property_cmd {
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
export enum property_kind {
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
export enum property_method {
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
export enum property_pollcompletion {
    X,
    SERVER,
    SERVERSUBMIT,
    SERVERCHOICE,
    CLIENT,
    NONE,
}
export enum property_pollmode {
    X,
    BASIC,
    NONE,
}
export enum property_querylevel {
    X,
    CALQL1,
    CALQLNONE,
    NONE,
}
export enum property_status {
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
export enum property_taskmode {
    X,
    AUTOMATICCOMPLETION,
    AUTOMATICFAILURE,
    AUTOMATICSTATUS,
    NONE,
}
export enum property_transp {
    X,
    OPAQUE,
    OPAQUENOCONFLICT,
    TRANSPARENT,
    TRANSPARENTNOCONFLICT,
    NONE,
}
export enum property_xlicclass {
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
export enum recurrencetype_frequency {
    SECONDLY_RECURRENCE,
    MINUTELY_RECURRENCE,
    HOURLY_RECURRENCE,
    DAILY_RECURRENCE,
    WEEKLY_RECURRENCE,
    MONTHLY_RECURRENCE,
    YEARLY_RECURRENCE,
    NO_RECURRENCE,
}
export enum recurrencetype_skip {
    BACKWARD,
    FORWARD,
    OMIT,
    UNDEFINED,
}
export enum recurrencetype_weekday {
    NO_WEEKDAY,
    SUNDAY_WEEKDAY,
    MONDAY_WEEKDAY,
    TUESDAY_WEEKDAY,
    WEDNESDAY_WEEKDAY,
    THURSDAY_WEEKDAY,
    FRIDAY_WEEKDAY,
    SATURDAY_WEEKDAY,
}
export enum requeststatus {
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
export enum restriction_kind {
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
export enum value_kind {
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
export const BOOLEAN_FALSE: number
export const BOOLEAN_TRUE: number
export const BY_DAY_SIZE: number
export const BY_HOUR_SIZE: number
export const BY_MINUTE_SIZE: number
export const BY_MONTHDAY_SIZE: number
export const BY_MONTH_SIZE: number
export const BY_SECOND_SIZE: number
export const BY_WEEKNO_SIZE: number
export const BY_YEARDAY_SIZE: number
export const ERRORS_ARE_FATAL: number
export const ICALPARAMETER_FIRST_ENUM: number
export const ICALPARAMETER_LAST_ENUM: number
export const ICALPROPERTY_FIRST_ENUM: number
export const ICALPROPERTY_LAST_ENUM: number
export const MAJOR_VERSION: number
export const MINOR_VERSION: number
export const PACKAGE: string | null
export const PATCH_VERSION: number
export const VERSION: string | null
export const ZONES_TAB_SYSTEM_FILENAME: string | null
/**
 * }
 * ```
 */
export function bt(): void
export function decodeBase64(dest: string | null, src: string | null, size: number): string | null
export function decodeQuotedPrintable(dest: string | null, src: string | null, size: number): string | null
export function freeZoneDirectory(): void
export function getUnknownTokenHandlingSetting(): _unknown_token_handling
export function icalarrayAppend(array: array, element: any | null): void
export function icalarrayElementAt(array: array, position: number): any | null
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
export function icalarrayFree(array: array): void
export function icalarrayRemoveElementAt(array: array, position: number): void
export function icalarraySort(array: array, compare: any | null): void
export function icalattachGetData(attach: attach): number
export function icalattachGetIsUrl(attach: attach): number
export function icalattachGetUrl(attach: attach): string | null
export function icalattachRef(attach: attach): void
export function icalattachUnref(attach: attach): void
export function icalcomponentAddComponent(parent: component, child: component): void
export function icalcomponentAddProperty(component: component, property: property): void
export function icalcomponentAsIcalString(component: component): string | null
export function icalcomponentAsIcalStringR(component: component): string | null
export function icalcomponentCheckRestrictions(comp: component): number
export function icalcomponentConvertErrors(component: component): void
export function icalcomponentCountComponents(component: component, kind: component_kind): number
export function icalcomponentCountErrors(component: component): number
export function icalcomponentCountProperties(component: component, kind: property_kind): number
export function icalcomponentForeachRecurrence(comp: component, start: any | null, end: any | null, callback: any | null, callbackData: any | null): void
export function icalcomponentForeachTzid(comp: component, callback: any | null, callbackData: any | null): void
export function icalcomponentFree(component: component): void
export function icalcomponentGetComment(comp: component): string | null
export function icalcomponentGetDescription(comp: component): string | null
export function icalcomponentGetDtend(comp: component): any | null
export function icalcomponentGetDtstamp(comp: component): any | null
export function icalcomponentGetDtstart(comp: component): any | null
export function icalcomponentGetDue(comp: component): any | null
export function icalcomponentGetDuration(comp: component): any | null
export function icalcomponentGetLocation(comp: component): string | null
export function icalcomponentGetMethod(comp: component): property_method
export function icalcomponentGetRecurrenceid(comp: component): any | null
export function icalcomponentGetRelcalid(comp: component): string | null
export function icalcomponentGetSequence(comp: component): number
export function icalcomponentGetSpan(comp: component): any | null
export function icalcomponentGetStatus(comp: component): any | null
export function icalcomponentGetSummary(comp: component): string | null
export function icalcomponentGetUid(comp: component): string | null
export function icalcomponentIsValid(component: component): number
export function icalcomponentIsa(component: component): component_kind
export function icalcomponentIsaComponent(component: any | null): number
export function icalcomponentKindIsValid(kind: component_kind): number
export function icalcomponentKindToString(kind: component_kind): string | null
export function icalcomponentMergeComponent(comp: component, compToMerge: component): void
export function icalcomponentNormalize(comp: component): void
export function icalcomponentRemoveComponent(parent: component, child: component): void
export function icalcomponentRemoveProperty(component: component, property: property): void
export function icalcomponentSetComment(comp: component, v: string | null): void
export function icalcomponentSetDescription(comp: component, v: string | null): void
export function icalcomponentSetDtend(comp: component, v: any | null): void
export function icalcomponentSetDtstamp(comp: component, v: any | null): void
export function icalcomponentSetDtstart(comp: component, v: any | null): void
export function icalcomponentSetDue(comp: component, v: any | null): void
export function icalcomponentSetDuration(comp: component, v: any | null): void
export function icalcomponentSetLocation(comp: component, v: string | null): void
export function icalcomponentSetMethod(comp: component, method: property_method): void
export function icalcomponentSetParent(component: component, parent: component): void
export function icalcomponentSetRecurrenceid(comp: component, v: any | null): void
export function icalcomponentSetRelcalid(comp: component, v: string | null): void
export function icalcomponentSetSequence(comp: component, v: number): void
export function icalcomponentSetStatus(comp: component, v: any | null): void
export function icalcomponentSetSummary(comp: component, v: string | null): void
export function icalcomponentSetUid(comp: component, v: string | null): void
export function icalcomponentStringToKind(string: string | null): component_kind
export function icalcomponentStripErrors(component: component): void
export function icaldurationtypeAsIcalString(d: any | null): string | null
export function icaldurationtypeAsIcalStringR(d: any | null): string | null
export function icaldurationtypeAsInt(duration: any | null): number
export function icaldurationtypeBadDuration(): any | null
export function icaldurationtypeFromInt(t: number): any | null
export function icaldurationtypeFromString(dur: string | null): any | null
export function icaldurationtypeIsBadDuration(d: any | null): number
export function icaldurationtypeIsNullDuration(d: any | null): number
export function icaldurationtypeNullDuration(): any | null
export function icalenumNumToReqstat(major: number, minor: number): requeststatus
export function icalenumReqstatCode(stat: requeststatus): string | null
export function icalenumReqstatCodeR(stat: requeststatus): string | null
export function icalenumReqstatDesc(stat: requeststatus): string | null
export function icalenumReqstatMajor(stat: requeststatus): number
export function icalenumReqstatMinor(stat: requeststatus): number
export function icalerrnoReturn(): errorenum
/**
 * }
 * ```
 */
export function icalerrorClearErrno(): void
export function icalerrorCrashHere(): void
export function icalerrorErrorFromString(str: string | null): errorenum
export function icalerrorGetErrorState(error: errorenum): errorstate
export function icalerrorGetErrorsAreFatal(): number
export function icalerrorPerror(): string | null
export function icalerrorRestore(error: string | null, es: errorstate): void
export function icalerrorSetErrno(x: errorenum): void
export function icalerrorSetErrorState(error: errorenum, state: errorstate): void
export function icalerrorSetErrorsAreFatal(fatal: number): void
export function icalerrorStopHere(): void
export function icalerrorStrerror(e: errorenum): string | null
export function icalerrorSupress(error: string | null): errorstate
export function icallangbindAccessArray(array: number, index: number): number
export function icallangbindFreeArray(array: number): void
export function icallangbindNewArray(size: number): number
export function icallangbindPropertyEvalString(prop: property, sep: string | null): string | null
export function icallangbindPropertyEvalStringR(prop: property, sep: string | null): string | null
export function icallangbindQuoteAsIcal(str: string | null): string | null
export function icallangbindQuoteAsIcalR(str: string | null): string | null
export function icallangbindStringToOpenFlag(str: string | null): number
export function icalmemoryAddTmpBuffer(buf: any | null): void
export function icalmemoryAppendChar(buf: string | null, pos: string | null, bufSize: number, ch: number): void
export function icalmemoryAppendString(buf: string | null, pos: string | null, bufSize: number, string: string | null): void
export function icalmemoryFreeBuffer(buf: any | null): void
/**
 * ```
 */
export function icalmemoryFreeRing(): void
export function icalmemoryNewBuffer(size: number): any | null
export function icalmemoryResizeBuffer(buf: any | null, size: number): any | null
export function icalmemoryStrdup(s: string | null): string | null
export function icalmemoryTmpBuffer(size: number): any | null
export function icalmemoryTmpCopy(str: string | null): string | null
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
export function icalparameterAsIcalString(parameter: parameter): string | null
export function icalparameterAsIcalStringR(parameter: parameter): string | null
export function icalparameterEnumToString(e: number): string | null
export function icalparameterFree(parameter: parameter): void
export function icalparameterGetActionparam(value: parameter): parameter_action
export function icalparameterGetAltrep(value: parameter): string | null
export function icalparameterGetCharset(value: parameter): string | null
export function icalparameterGetCn(value: parameter): string | null
export function icalparameterGetCutype(value: parameter): parameter_cutype
export function icalparameterGetDelegatedfrom(value: parameter): string | null
export function icalparameterGetDelegatedto(value: parameter): string | null
export function icalparameterGetDir(value: parameter): string | null
export function icalparameterGetDisplay(value: parameter): parameter_display
export function icalparameterGetEmail(value: parameter): string | null
export function icalparameterGetEnable(value: parameter): parameter_enable
export function icalparameterGetEncoding(value: parameter): parameter_encoding
export function icalparameterGetFbtype(value: parameter): parameter_fbtype
export function icalparameterGetFeature(value: parameter): parameter_feature
export function icalparameterGetFilename(value: parameter): string | null
export function icalparameterGetFmttype(value: parameter): string | null
export function icalparameterGetIana(value: parameter): string | null
export function icalparameterGetIanaName(param: parameter): string | null
export function icalparameterGetIanaValue(param: parameter): string | null
export function icalparameterGetId(value: parameter): string | null
export function icalparameterGetLabel(value: parameter): string | null
export function icalparameterGetLanguage(value: parameter): string | null
export function icalparameterGetLatency(value: parameter): string | null
export function icalparameterGetLocal(value: parameter): parameter_local
export function icalparameterGetLocalize(value: parameter): string | null
export function icalparameterGetManagedid(value: parameter): string | null
export function icalparameterGetMember(value: parameter): string | null
export function icalparameterGetModified(value: parameter): string | null
export function icalparameterGetOptions(value: parameter): string | null
export function icalparameterGetPartstat(value: parameter): parameter_partstat
export function icalparameterGetPatchaction(value: parameter): parameter_patchaction
export function icalparameterGetPubliccomment(value: parameter): string | null
export function icalparameterGetRange(value: parameter): parameter_range
export function icalparameterGetReason(value: parameter): string | null
export function icalparameterGetRelated(value: parameter): parameter_related
export function icalparameterGetReltype(value: parameter): parameter_reltype
export function icalparameterGetRequired(value: parameter): parameter_required
export function icalparameterGetResponse(value: parameter): number
export function icalparameterGetRole(value: parameter): parameter_role
export function icalparameterGetRsvp(value: parameter): parameter_rsvp
export function icalparameterGetScheduleagent(value: parameter): parameter_scheduleagent
export function icalparameterGetScheduleforcesend(value: parameter): parameter_scheduleforcesend
export function icalparameterGetSchedulestatus(value: parameter): string | null
export function icalparameterGetSentby(value: parameter): string | null
export function icalparameterGetSize(value: parameter): string | null
export function icalparameterGetStayinformed(value: parameter): parameter_stayinformed
export function icalparameterGetSubstate(value: parameter): parameter_substate
export function icalparameterGetTzid(value: parameter): string | null
export function icalparameterGetValue(value: parameter): parameter_value
export function icalparameterGetX(value: parameter): string | null
export function icalparameterGetXliccomparetype(value: parameter): parameter_xliccomparetype
export function icalparameterGetXlicerrortype(value: parameter): parameter_xlicerrortype
export function icalparameterGetXname(param: parameter): string | null
export function icalparameterGetXvalue(param: parameter): string | null
export function icalparameterHasSameName(param1: parameter, param2: parameter): number
export function icalparameterIsa(parameter: parameter): parameter_kind
export function icalparameterIsaParameter(param: any | null): number
export function icalparameterKindIsValid(kind: parameter_kind): number
export function icalparameterKindToString(kind: parameter_kind): string | null
export function icalparameterSetActionparam(value: parameter, v: parameter_action): void
export function icalparameterSetAltrep(value: parameter, v: string | null): void
export function icalparameterSetCharset(value: parameter, v: string | null): void
export function icalparameterSetCn(value: parameter, v: string | null): void
export function icalparameterSetCutype(value: parameter, v: parameter_cutype): void
export function icalparameterSetDelegatedfrom(value: parameter, v: string | null): void
export function icalparameterSetDelegatedto(value: parameter, v: string | null): void
export function icalparameterSetDir(value: parameter, v: string | null): void
export function icalparameterSetDisplay(value: parameter, v: parameter_display): void
export function icalparameterSetEmail(value: parameter, v: string | null): void
export function icalparameterSetEnable(value: parameter, v: parameter_enable): void
export function icalparameterSetEncoding(value: parameter, v: parameter_encoding): void
export function icalparameterSetFbtype(value: parameter, v: parameter_fbtype): void
export function icalparameterSetFeature(value: parameter, v: parameter_feature): void
export function icalparameterSetFilename(value: parameter, v: string | null): void
export function icalparameterSetFmttype(value: parameter, v: string | null): void
export function icalparameterSetIana(value: parameter, v: string | null): void
export function icalparameterSetIanaName(param: parameter, v: string | null): void
export function icalparameterSetIanaValue(param: parameter, v: string | null): void
export function icalparameterSetId(value: parameter, v: string | null): void
export function icalparameterSetLabel(value: parameter, v: string | null): void
export function icalparameterSetLanguage(value: parameter, v: string | null): void
export function icalparameterSetLatency(value: parameter, v: string | null): void
export function icalparameterSetLocal(value: parameter, v: parameter_local): void
export function icalparameterSetLocalize(value: parameter, v: string | null): void
export function icalparameterSetManagedid(value: parameter, v: string | null): void
export function icalparameterSetMember(value: parameter, v: string | null): void
export function icalparameterSetModified(value: parameter, v: string | null): void
export function icalparameterSetOptions(value: parameter, v: string | null): void
export function icalparameterSetParent(param: parameter, property: property): void
export function icalparameterSetPartstat(value: parameter, v: parameter_partstat): void
export function icalparameterSetPatchaction(value: parameter, v: parameter_patchaction): void
export function icalparameterSetPubliccomment(value: parameter, v: string | null): void
export function icalparameterSetRange(value: parameter, v: parameter_range): void
export function icalparameterSetReason(value: parameter, v: string | null): void
export function icalparameterSetRelated(value: parameter, v: parameter_related): void
export function icalparameterSetReltype(value: parameter, v: parameter_reltype): void
export function icalparameterSetRequired(value: parameter, v: parameter_required): void
export function icalparameterSetResponse(value: parameter, v: number): void
export function icalparameterSetRole(value: parameter, v: parameter_role): void
export function icalparameterSetRsvp(value: parameter, v: parameter_rsvp): void
export function icalparameterSetScheduleagent(value: parameter, v: parameter_scheduleagent): void
export function icalparameterSetScheduleforcesend(value: parameter, v: parameter_scheduleforcesend): void
export function icalparameterSetSchedulestatus(value: parameter, v: string | null): void
export function icalparameterSetSentby(value: parameter, v: string | null): void
export function icalparameterSetSize(value: parameter, v: string | null): void
export function icalparameterSetStayinformed(value: parameter, v: parameter_stayinformed): void
export function icalparameterSetSubstate(value: parameter, v: parameter_substate): void
export function icalparameterSetTzid(value: parameter, v: string | null): void
export function icalparameterSetValue(value: parameter, v: parameter_value): void
export function icalparameterSetX(value: parameter, v: string | null): void
export function icalparameterSetXliccomparetype(value: parameter, v: parameter_xliccomparetype): void
export function icalparameterSetXlicerrortype(value: parameter, v: parameter_xlicerrortype): void
export function icalparameterSetXname(param: parameter, v: string | null): void
export function icalparameterSetXvalue(param: parameter, v: string | null): void
export function icalparameterStringToEnum(str: string | null): number
export function icalparameterStringToKind(string: string | null): parameter_kind
export function icalparameterValueToValueKind(value: parameter_value): value_kind
export function icalparserFree(parser: parser): void
export function icalparserGetState(parser: parser): parser_state
export function icalparserSetGenData(parser: parser, data: any | null): void
export function icalparserStringLineGenerator(out: string | null, bufSize: number, d: any | null): string | null
export function icalperiodtypeAsIcalString(p: any | null): string | null
export function icalperiodtypeAsIcalStringR(p: any | null): string | null
export function icalperiodtypeFromString(str: string | null): any | null
export function icalperiodtypeIsNullPeriod(p: any | null): number
export function icalperiodtypeIsValidPeriod(p: any | null): number
export function icalperiodtypeNullPeriod(): any | null
export function icalpropertyAddParameter(prop: property, parameter: parameter): void
export function icalpropertyAsIcalString(prop: property): string | null
export function icalpropertyAsIcalStringR(prop: property): string | null
export function icalpropertyCountParameters(prop: property): number
export function icalpropertyEnumBelongsToProperty(kind: property_kind, e: number): number
export function icalpropertyEnumToString(e: number): string | null
export function icalpropertyEnumToStringR(e: number): string | null
export function icalpropertyFree(prop: property): void
export function icalpropertyGetAcceptresponse(prop: property): string | null
export function icalpropertyGetAcknowledged(prop: property): any | null
export function icalpropertyGetAction(prop: property): any | null
export function icalpropertyGetAllowconflict(prop: property): string | null
export function icalpropertyGetAttendee(prop: property): string | null
export function icalpropertyGetBusytype(prop: property): any | null
export function icalpropertyGetCalid(prop: property): string | null
export function icalpropertyGetCalmaster(prop: property): string | null
export function icalpropertyGetCalscale(prop: property): string | null
export function icalpropertyGetCapversion(prop: property): string | null
export function icalpropertyGetCarid(prop: property): string | null
export function icalpropertyGetCarlevel(prop: property): any | null
export function icalpropertyGetCategories(prop: property): string | null
export function icalpropertyGetClass(prop: property): any | null
export function icalpropertyGetCmd(prop: property): any | null
export function icalpropertyGetColor(prop: property): string | null
export function icalpropertyGetComment(prop: property): string | null
export function icalpropertyGetCompleted(prop: property): any | null
export function icalpropertyGetComponents(prop: property): string | null
export function icalpropertyGetConference(prop: property): string | null
export function icalpropertyGetContact(prop: property): string | null
export function icalpropertyGetCreated(prop: property): any | null
export function icalpropertyGetCsid(prop: property): string | null
export function icalpropertyGetDatemax(prop: property): any | null
export function icalpropertyGetDatemin(prop: property): any | null
export function icalpropertyGetDatetimeWithComponent(prop: property, comp: component): any | null
export function icalpropertyGetDecreed(prop: property): string | null
export function icalpropertyGetDefaultcharset(prop: property): string | null
export function icalpropertyGetDefaultlocale(prop: property): string | null
export function icalpropertyGetDefaulttzid(prop: property): string | null
export function icalpropertyGetDefaultvcars(prop: property): string | null
export function icalpropertyGetDeny(prop: property): string | null
export function icalpropertyGetDescription(prop: property): string | null
export function icalpropertyGetDtend(prop: property): any | null
export function icalpropertyGetDtstamp(prop: property): any | null
export function icalpropertyGetDtstart(prop: property): any | null
export function icalpropertyGetDue(prop: property): any | null
export function icalpropertyGetDuration(prop: property): any | null
export function icalpropertyGetEstimatedduration(prop: property): any | null
export function icalpropertyGetExdate(prop: property): any | null
export function icalpropertyGetExpand(prop: property): number
export function icalpropertyGetExrule(prop: property): any | null
export function icalpropertyGetFreebusy(prop: property): any | null
export function icalpropertyGetGeo(prop: property): any | null
export function icalpropertyGetGrant(prop: property): string | null
export function icalpropertyGetItipversion(prop: property): string | null
export function icalpropertyGetLastmodified(prop: property): any | null
export function icalpropertyGetLocation(prop: property): string | null
export function icalpropertyGetMaxcomponentsize(prop: property): number
export function icalpropertyGetMaxdate(prop: property): any | null
export function icalpropertyGetMaxresults(prop: property): number
export function icalpropertyGetMaxresultssize(prop: property): number
export function icalpropertyGetMethod(prop: property): any | null
export function icalpropertyGetMindate(prop: property): any | null
export function icalpropertyGetMultipart(prop: property): string | null
export function icalpropertyGetName(prop: property): string | null
export function icalpropertyGetOrganizer(prop: property): string | null
export function icalpropertyGetOwner(prop: property): string | null
export function icalpropertyGetParameterAsString(prop: property, name: string | null): string | null
export function icalpropertyGetParameterAsStringR(prop: property, name: string | null): string | null
export function icalpropertyGetPatchdelete(prop: property): string | null
export function icalpropertyGetPatchorder(prop: property): number
export function icalpropertyGetPatchparameter(prop: property): string | null
export function icalpropertyGetPatchtarget(prop: property): string | null
export function icalpropertyGetPatchversion(prop: property): string | null
export function icalpropertyGetPercentcomplete(prop: property): number
export function icalpropertyGetPermission(prop: property): string | null
export function icalpropertyGetPollcompletion(prop: property): any | null
export function icalpropertyGetPollitemid(prop: property): number
export function icalpropertyGetPollmode(prop: property): any | null
export function icalpropertyGetPollproperties(prop: property): string | null
export function icalpropertyGetPollwinner(prop: property): number
export function icalpropertyGetPriority(prop: property): number
export function icalpropertyGetProdid(prop: property): string | null
export function icalpropertyGetPropertyName(prop: property): string | null
export function icalpropertyGetPropertyNameR(prop: property): string | null
export function icalpropertyGetQuery(prop: property): string | null
export function icalpropertyGetQueryid(prop: property): string | null
export function icalpropertyGetQuerylevel(prop: property): any | null
export function icalpropertyGetQueryname(prop: property): string | null
export function icalpropertyGetRdate(prop: property): any | null
export function icalpropertyGetRecuraccepted(prop: property): string | null
export function icalpropertyGetRecurexpand(prop: property): string | null
export function icalpropertyGetRecurlimit(prop: property): string | null
export function icalpropertyGetRecurrenceid(prop: property): any | null
export function icalpropertyGetRefreshinterval(prop: property): any | null
export function icalpropertyGetRelatedto(prop: property): string | null
export function icalpropertyGetRelcalid(prop: property): string | null
export function icalpropertyGetRepeat(prop: property): number
export function icalpropertyGetReplyurl(prop: property): string | null
export function icalpropertyGetRequeststatus(prop: property): any | null
export function icalpropertyGetResources(prop: property): string | null
export function icalpropertyGetResponse(prop: property): number
export function icalpropertyGetRestriction(prop: property): string | null
export function icalpropertyGetRrule(prop: property): any | null
export function icalpropertyGetScope(prop: property): string | null
export function icalpropertyGetSequence(prop: property): number
export function icalpropertyGetSource(prop: property): string | null
export function icalpropertyGetStatus(prop: property): any | null
export function icalpropertyGetStoresexpanded(prop: property): string | null
export function icalpropertyGetSummary(prop: property): string | null
export function icalpropertyGetTarget(prop: property): string | null
export function icalpropertyGetTaskmode(prop: property): any | null
export function icalpropertyGetTransp(prop: property): any | null
export function icalpropertyGetTrigger(prop: property): any | null
export function icalpropertyGetTzid(prop: property): string | null
export function icalpropertyGetTzidaliasof(prop: property): string | null
export function icalpropertyGetTzname(prop: property): string | null
export function icalpropertyGetTzoffsetfrom(prop: property): number
export function icalpropertyGetTzoffsetto(prop: property): number
export function icalpropertyGetTzuntil(prop: property): any | null
export function icalpropertyGetTzurl(prop: property): string | null
export function icalpropertyGetUid(prop: property): string | null
export function icalpropertyGetUrl(prop: property): string | null
export function icalpropertyGetValueAsString(prop: property): string | null
export function icalpropertyGetValueAsStringR(prop: property): string | null
export function icalpropertyGetVersion(prop: property): string | null
export function icalpropertyGetVoter(prop: property): string | null
export function icalpropertyGetX(prop: property): string | null
export function icalpropertyGetXName(prop: property): string | null
export function icalpropertyGetXlicclass(prop: property): any | null
export function icalpropertyGetXlicclustercount(prop: property): string | null
export function icalpropertyGetXlicerror(prop: property): string | null
export function icalpropertyGetXlicmimecharset(prop: property): string | null
export function icalpropertyGetXlicmimecid(prop: property): string | null
export function icalpropertyGetXlicmimecontenttype(prop: property): string | null
export function icalpropertyGetXlicmimeencoding(prop: property): string | null
export function icalpropertyGetXlicmimefilename(prop: property): string | null
export function icalpropertyGetXlicmimeoptinfo(prop: property): string | null
export function icalpropertyIsa(property: property): property_kind
export function icalpropertyIsaProperty(property: any | null): number
export function icalpropertyKindAndStringToEnum(kind: number, str: string | null): number
export function icalpropertyKindIsValid(kind: property_kind): number
export function icalpropertyKindToString(kind: property_kind): string | null
export function icalpropertyKindToValueKind(kind: property_kind): value_kind
export function icalpropertyMethodToString(method: property_method): string | null
export function icalpropertyNormalize(prop: property): void
export function icalpropertyRecurrenceIsExcluded(comp: component, dtstart: any | null, recurtime: any | null): number
export function icalpropertyRemoveParameterByKind(prop: property, kind: parameter_kind): void
export function icalpropertyRemoveParameterByName(prop: property, name: string | null): void
/**
 * parameters
 * @param prop 
 * @param param 
 */
export function icalpropertyRemoveParameterByRef(prop: property, param: parameter): void
export function icalpropertySetAcceptresponse(prop: property, v: string | null): void
export function icalpropertySetAcknowledged(prop: property, v: any | null): void
export function icalpropertySetAction(prop: property, v: any | null): void
export function icalpropertySetAllowconflict(prop: property, v: string | null): void
export function icalpropertySetAttach(prop: property, v: attach): void
export function icalpropertySetAttendee(prop: property, v: string | null): void
export function icalpropertySetBusytype(prop: property, v: any | null): void
export function icalpropertySetCalid(prop: property, v: string | null): void
export function icalpropertySetCalmaster(prop: property, v: string | null): void
export function icalpropertySetCalscale(prop: property, v: string | null): void
export function icalpropertySetCapversion(prop: property, v: string | null): void
export function icalpropertySetCarid(prop: property, v: string | null): void
export function icalpropertySetCarlevel(prop: property, v: any | null): void
export function icalpropertySetCategories(prop: property, v: string | null): void
export function icalpropertySetClass(prop: property, v: any | null): void
export function icalpropertySetCmd(prop: property, v: any | null): void
export function icalpropertySetColor(prop: property, v: string | null): void
export function icalpropertySetComment(prop: property, v: string | null): void
export function icalpropertySetCompleted(prop: property, v: any | null): void
export function icalpropertySetComponents(prop: property, v: string | null): void
export function icalpropertySetConference(prop: property, v: string | null): void
export function icalpropertySetContact(prop: property, v: string | null): void
export function icalpropertySetCreated(prop: property, v: any | null): void
export function icalpropertySetCsid(prop: property, v: string | null): void
export function icalpropertySetDatemax(prop: property, v: any | null): void
export function icalpropertySetDatemin(prop: property, v: any | null): void
export function icalpropertySetDecreed(prop: property, v: string | null): void
export function icalpropertySetDefaultcharset(prop: property, v: string | null): void
export function icalpropertySetDefaultlocale(prop: property, v: string | null): void
export function icalpropertySetDefaulttzid(prop: property, v: string | null): void
export function icalpropertySetDefaultvcars(prop: property, v: string | null): void
export function icalpropertySetDeny(prop: property, v: string | null): void
export function icalpropertySetDescription(prop: property, v: string | null): void
export function icalpropertySetDtend(prop: property, v: any | null): void
export function icalpropertySetDtstamp(prop: property, v: any | null): void
export function icalpropertySetDtstart(prop: property, v: any | null): void
export function icalpropertySetDue(prop: property, v: any | null): void
export function icalpropertySetDuration(prop: property, v: any | null): void
export function icalpropertySetEstimatedduration(prop: property, v: any | null): void
export function icalpropertySetExdate(prop: property, v: any | null): void
export function icalpropertySetExpand(prop: property, v: number): void
export function icalpropertySetExrule(prop: property, v: any | null): void
export function icalpropertySetFreebusy(prop: property, v: any | null): void
export function icalpropertySetGeo(prop: property, v: any | null): void
export function icalpropertySetGrant(prop: property, v: string | null): void
export function icalpropertySetImage(prop: property, v: attach): void
export function icalpropertySetItipversion(prop: property, v: string | null): void
export function icalpropertySetLastmodified(prop: property, v: any | null): void
export function icalpropertySetLocation(prop: property, v: string | null): void
export function icalpropertySetMaxcomponentsize(prop: property, v: number): void
export function icalpropertySetMaxdate(prop: property, v: any | null): void
export function icalpropertySetMaxresults(prop: property, v: number): void
export function icalpropertySetMaxresultssize(prop: property, v: number): void
export function icalpropertySetMethod(prop: property, v: any | null): void
export function icalpropertySetMindate(prop: property, v: any | null): void
export function icalpropertySetMultipart(prop: property, v: string | null): void
export function icalpropertySetName(prop: property, v: string | null): void
export function icalpropertySetOrganizer(prop: property, v: string | null): void
export function icalpropertySetOwner(prop: property, v: string | null): void
export function icalpropertySetParameter(prop: property, parameter: parameter): void
export function icalpropertySetParameterFromString(prop: property, name: string | null, value: string | null): void
export function icalpropertySetParent(property: property, component: component): void
export function icalpropertySetPatchdelete(prop: property, v: string | null): void
export function icalpropertySetPatchorder(prop: property, v: number): void
export function icalpropertySetPatchparameter(prop: property, v: string | null): void
export function icalpropertySetPatchtarget(prop: property, v: string | null): void
export function icalpropertySetPatchversion(prop: property, v: string | null): void
export function icalpropertySetPercentcomplete(prop: property, v: number): void
export function icalpropertySetPermission(prop: property, v: string | null): void
export function icalpropertySetPollcompletion(prop: property, v: any | null): void
export function icalpropertySetPollitemid(prop: property, v: number): void
export function icalpropertySetPollmode(prop: property, v: any | null): void
export function icalpropertySetPollproperties(prop: property, v: string | null): void
export function icalpropertySetPollwinner(prop: property, v: number): void
export function icalpropertySetPriority(prop: property, v: number): void
export function icalpropertySetProdid(prop: property, v: string | null): void
export function icalpropertySetQuery(prop: property, v: string | null): void
export function icalpropertySetQueryid(prop: property, v: string | null): void
export function icalpropertySetQuerylevel(prop: property, v: any | null): void
export function icalpropertySetQueryname(prop: property, v: string | null): void
export function icalpropertySetRdate(prop: property, v: any | null): void
export function icalpropertySetRecuraccepted(prop: property, v: string | null): void
export function icalpropertySetRecurexpand(prop: property, v: string | null): void
export function icalpropertySetRecurlimit(prop: property, v: string | null): void
export function icalpropertySetRecurrenceid(prop: property, v: any | null): void
export function icalpropertySetRefreshinterval(prop: property, v: any | null): void
export function icalpropertySetRelatedto(prop: property, v: string | null): void
export function icalpropertySetRelcalid(prop: property, v: string | null): void
export function icalpropertySetRepeat(prop: property, v: number): void
export function icalpropertySetReplyurl(prop: property, v: string | null): void
export function icalpropertySetRequeststatus(prop: property, v: any | null): void
export function icalpropertySetResources(prop: property, v: string | null): void
export function icalpropertySetResponse(prop: property, v: number): void
export function icalpropertySetRestriction(prop: property, v: string | null): void
export function icalpropertySetRrule(prop: property, v: any | null): void
export function icalpropertySetScope(prop: property, v: string | null): void
export function icalpropertySetSequence(prop: property, v: number): void
export function icalpropertySetSource(prop: property, v: string | null): void
export function icalpropertySetStatus(prop: property, v: any | null): void
export function icalpropertySetStoresexpanded(prop: property, v: string | null): void
export function icalpropertySetSummary(prop: property, v: string | null): void
export function icalpropertySetTarget(prop: property, v: string | null): void
export function icalpropertySetTaskmode(prop: property, v: any | null): void
export function icalpropertySetTransp(prop: property, v: any | null): void
export function icalpropertySetTrigger(prop: property, v: any | null): void
export function icalpropertySetTzid(prop: property, v: string | null): void
export function icalpropertySetTzidaliasof(prop: property, v: string | null): void
export function icalpropertySetTzname(prop: property, v: string | null): void
export function icalpropertySetTzoffsetfrom(prop: property, v: number): void
export function icalpropertySetTzoffsetto(prop: property, v: number): void
export function icalpropertySetTzuntil(prop: property, v: any | null): void
export function icalpropertySetTzurl(prop: property, v: string | null): void
export function icalpropertySetUid(prop: property, v: string | null): void
export function icalpropertySetUrl(prop: property, v: string | null): void
export function icalpropertySetValue(prop: property, value: value): void
export function icalpropertySetValueFromString(prop: property, value: string | null, kind: string | null): void
export function icalpropertySetVersion(prop: property, v: string | null): void
export function icalpropertySetVoter(prop: property, v: string | null): void
export function icalpropertySetX(prop: property, v: string | null): void
export function icalpropertySetXName(prop: property, name: string | null): void
export function icalpropertySetXlicclass(prop: property, v: any | null): void
export function icalpropertySetXlicclustercount(prop: property, v: string | null): void
export function icalpropertySetXlicerror(prop: property, v: string | null): void
export function icalpropertySetXlicmimecharset(prop: property, v: string | null): void
export function icalpropertySetXlicmimecid(prop: property, v: string | null): void
export function icalpropertySetXlicmimecontenttype(prop: property, v: string | null): void
export function icalpropertySetXlicmimeencoding(prop: property, v: string | null): void
export function icalpropertySetXlicmimefilename(prop: property, v: string | null): void
export function icalpropertySetXlicmimeoptinfo(prop: property, v: string | null): void
export function icalpropertyStatusToString(arg0: property_status): string | null
export function icalpropertyStringToKind(string: string | null): property_kind
export function icalpropertyStringToMethod(str: string | null): property_method
export function icalpropertyStringToStatus(string: string | null): property_status
export function icalpropertyValueKindToKind(kind: value_kind): property_kind
export function icalrecurExpandRecurrence(rule: string | null, start: number, count: number, array: number): number
export function icalrecurFreqToString(kind: recurrencetype_frequency): string | null
export function icalrecurIteratorFree(arg0: recur_iterator): void
export function icalrecurIteratorNext(arg0: recur_iterator): any | null
export function icalrecurIteratorSetStart(impl: recur_iterator, start: any | null): number
export function icalrecurSkipToString(kind: recurrencetype_skip): string | null
export function icalrecurStringToFreq(str: string | null): recurrencetype_frequency
export function icalrecurStringToSkip(str: string | null): recurrencetype_skip
export function icalrecurStringToWeekday(str: string | null): recurrencetype_weekday
export function icalrecurWeekdayToString(kind: recurrencetype_weekday): string | null
export function icalrecurrencetypeAsString(recur: any | null): string | null
export function icalrecurrencetypeAsStringR(recur: any | null): string | null
export function icalrecurrencetypeClear(r: any | null): void
export function icalrecurrencetypeDayDayOfWeek(day: number): any | null
export function icalrecurrencetypeDayPosition(day: number): number
export function icalrecurrencetypeFromString(str: string | null): any | null
export function icalrecurrencetypeMonthIsLeap(month: number): number
export function icalrecurrencetypeMonthMonth(month: number): number
export function icalrecurrencetypeRscaleIsSupported(): number
export function icalreqstattypeAsString(arg0: any | null): string | null
export function icalreqstattypeAsStringR(arg0: any | null): string | null
export function icalreqstattypeFromString(str: string | null): any | null
export function icalrestrictionCheck(comp: component): number
export function icalrestrictionCompare(restr: restriction_kind, count: number): number
export function icaltimeAdd(t: any | null, d: any | null): any | null
export function icaltimeAdjust(tt: any | null, days: number, hours: number, minutes: number, seconds: number): void
export function icaltimeAsIcalString(tt: any | null): string | null
export function icaltimeAsIcalStringR(tt: any | null): string | null
export function icaltimeAsTimet(arg0: any | null): number
export function icaltimeAsTimetWithZone(tt: any | null, zone: timezone): number
export function icaltimeCompare(a: any | null, b: any | null): number
export function icaltimeCompareDateOnly(a: any | null, b: any | null): number
export function icaltimeCompareDateOnlyTz(a: any | null, b: any | null, tz: timezone): number
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
export function icaltimeConvertToZone(tt: any | null, zone: timezone): any | null
export function icaltimeCurrentTimeWithZone(zone: timezone): any | null
export function icaltimeDayOfWeek(t: any | null): number
export function icaltimeDayOfYear(t: any | null): number
export function icaltimeDaysInMonth(month: number, year: number): number
export function icaltimeDaysInYear(year: number): number
export function icaltimeFromDayOfYear(doy: number, year: number): any | null
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
export function icaltimeFromString(str: string | null): any | null
export function icaltimeFromTimetWithZone(tm: number, isDate: number, zone: timezone): any | null
export function icaltimeGetTimezone(t: any | null): timezone
export function icaltimeGetTzid(t: any | null): string | null
export function icaltimeIsDate(t: any | null): number
export function icaltimeIsLeapYear(year: number): number
export function icaltimeIsNullTime(t: any | null): number
export function icaltimeIsUtc(t: any | null): number
export function icaltimeIsValidTime(t: any | null): number
export function icaltimeNormalize(tt: any | null): any | null
export function icaltimeNullDate(): any | null
export function icaltimeNullTime(): any | null
export function icaltimeSetTimezone(t: any | null, zone: timezone): any | null
export function icaltimeSpanContains(s: time_span, container: time_span): number
export function icaltimeSpanNew(dtstart: any | null, dtend: any | null, isBusy: number): any | null
export function icaltimeSpanOverlaps(s1: time_span, s2: time_span): number
export function icaltimeStartDoyWeek(t: any | null, fdow: number): number
export function icaltimeSubtract(t1: any | null, t2: any | null): any | null
export function icaltimeToday(): any | null
export function icaltimeWeekNumber(t: any | null): number
export function icaltimezoneArrayAppendFromVtimezone(timezones: array, child: component): void
export function icaltimezoneArrayFree(timezones: array): void
export function icaltimezoneConvertTime(tt: any | null, fromZone: timezone, toZone: timezone): void
export function icaltimezoneDumpChanges(zone: timezone, maxYear: number, fp: any | null): number
export function icaltimezoneExpandVtimezone(comp: component, endYear: number, changes: array): void
export function icaltimezoneFree(zone: timezone, freeStruct: number): void
export function icaltimezoneFreeBuiltinTimezones(): void
export function icaltimezoneGetBuiltinTzdata(): number
export function icaltimezoneGetDisplayName(zone: timezone): string | null
export function icaltimezoneGetLatitude(zone: timezone): number
export function icaltimezoneGetLocation(zone: timezone): string | null
export function icaltimezoneGetLocationFromVtimezone(component: component): string | null
export function icaltimezoneGetLongitude(zone: timezone): number
export function icaltimezoneGetTzid(zone: timezone): string | null
export function icaltimezoneGetTznames(zone: timezone): string | null
export function icaltimezoneGetTznamesFromVtimezone(component: component): string | null
export function icaltimezoneGetUtcOffset(zone: timezone, tt: any | null, isDaylight: number): number
export function icaltimezoneGetUtcOffsetOfUtcTime(zone: timezone, tt: any | null, isDaylight: number): number
export function icaltimezoneReleaseZoneTab(): void
export function icaltimezoneSetBuiltinTzdata(set: number): void
export function icaltimezoneSetComponent(zone: timezone, comp: component): number
export function icaltimezoneSetTzidPrefix(newPrefix: string | null): void
export function icaltimezoneTruncateVtimezone(vtz: component, start: timetype, end: timetype, msCompatible: number): void
export function icaltimezoneTzidPrefix(): string | null
export function icaltriggertypeFromInt(reltime: number): any | null
export function icaltriggertypeFromString(str: string | null): any | null
export function icaltriggertypeIsBadTrigger(tr: any | null): number
export function icaltriggertypeIsNullTrigger(tr: any | null): number
export function icaltzutilGetZoneDirectory(): string | null
export function icalvalueAsIcalString(value: value): string | null
export function icalvalueAsIcalStringR(value: value): string | null
export function icalvalueCompare(a: value, b: value): parameter_xliccomparetype
export function icalvalueDecodeIcalString(szText: string | null, szDecText: string | null, nMaxBufferLen: number): number
export function icalvalueEncodeIcalString(szText: string | null, szEncText: string | null, maxBufferLen: number): number
export function icalvalueFree(value: value): void
export function icalvalueGetAction(value: value): any | null
export function icalvalueGetBinary(value: value): string | null
export function icalvalueGetBoolean(value: value): number
export function icalvalueGetBusytype(value: value): any | null
export function icalvalueGetCaladdress(value: value): string | null
export function icalvalueGetCarlevel(value: value): any | null
export function icalvalueGetClass(value: value): any | null
export function icalvalueGetCmd(value: value): any | null
export function icalvalueGetDate(value: value): any | null
export function icalvalueGetDatetime(value: value): any | null
export function icalvalueGetDatetimedate(value: value): any | null
export function icalvalueGetDatetimeperiod(value: value): any | null
export function icalvalueGetDuration(value: value): any | null
export function icalvalueGetFloat(value: value): number
export function icalvalueGetGeo(value: value): any | null
export function icalvalueGetInteger(value: value): number
export function icalvalueGetMethod(value: value): any | null
export function icalvalueGetPeriod(value: value): any | null
export function icalvalueGetPollcompletion(value: value): any | null
export function icalvalueGetPollmode(value: value): any | null
export function icalvalueGetQuery(value: value): string | null
export function icalvalueGetQuerylevel(value: value): any | null
export function icalvalueGetRecur(value: value): any | null
export function icalvalueGetRequeststatus(value: value): any | null
export function icalvalueGetStatus(value: value): any | null
export function icalvalueGetString(value: value): string | null
export function icalvalueGetTaskmode(value: value): any | null
export function icalvalueGetText(value: value): string | null
export function icalvalueGetTransp(value: value): any | null
export function icalvalueGetTrigger(value: value): any | null
export function icalvalueGetUri(value: value): string | null
export function icalvalueGetUtcoffset(value: value): number
export function icalvalueGetX(value: value): string | null
export function icalvalueGetXlicclass(value: value): any | null
export function icalvalueIsValid(value: value): number
export function icalvalueIsa(value: value): value_kind
export function icalvalueIsaValue(arg0: any | null): number
export function icalvalueKindIsValid(kind: value_kind): number
export function icalvalueKindToString(kind: value_kind): string | null
export function icalvalueResetKind(value: value): void
export function icalvalueSetAction(value: value, v: any | null): void
export function icalvalueSetAttach(value: value, attach: attach): void
export function icalvalueSetBinary(value: value, v: string | null): void
export function icalvalueSetBoolean(value: value, v: number): void
export function icalvalueSetBusytype(value: value, v: any | null): void
export function icalvalueSetCaladdress(value: value, v: string | null): void
export function icalvalueSetCarlevel(value: value, v: any | null): void
export function icalvalueSetClass(value: value, v: any | null): void
export function icalvalueSetCmd(value: value, v: any | null): void
export function icalvalueSetDate(value: value, v: any | null): void
export function icalvalueSetDatetime(value: value, v: any | null): void
export function icalvalueSetDatetimedate(value: value, v: any | null): void
export function icalvalueSetDatetimeperiod(value: value, v: any | null): void
export function icalvalueSetDuration(value: value, v: any | null): void
export function icalvalueSetFloat(value: value, v: number): void
export function icalvalueSetGeo(value: value, v: any | null): void
export function icalvalueSetInteger(value: value, v: number): void
export function icalvalueSetMethod(value: value, v: any | null): void
export function icalvalueSetParent(value: value, property: property): void
export function icalvalueSetPeriod(value: value, v: any | null): void
export function icalvalueSetPollcompletion(value: value, v: any | null): void
export function icalvalueSetPollmode(value: value, v: any | null): void
export function icalvalueSetQuery(value: value, v: string | null): void
export function icalvalueSetQuerylevel(value: value, v: any | null): void
export function icalvalueSetRecur(value: value, v: any | null): void
export function icalvalueSetRequeststatus(value: value, v: any | null): void
export function icalvalueSetStatus(value: value, v: any | null): void
export function icalvalueSetString(value: value, v: string | null): void
export function icalvalueSetTaskmode(value: value, v: any | null): void
export function icalvalueSetText(value: value, v: string | null): void
export function icalvalueSetTransp(value: value, v: any | null): void
export function icalvalueSetTrigger(value: value, v: any | null): void
export function icalvalueSetUri(value: value, v: string | null): void
export function icalvalueSetUtcoffset(value: value, v: number): void
export function icalvalueSetX(value: value, v: string | null): void
export function icalvalueSetXlicclass(value: value, v: any | null): void
export function icalvalueStringToKind(str: string | null): value_kind
export function printDateToString(str: string | null, data: any | null): void
export function printDatetimeToString(str: string | null, data: any | null): void
export function pvlClear(arg0: pvl_list): void
export function pvlCount(arg0: pvl_list): number
export function pvlData(arg0: pvl_elem): any | null
export function pvlFree(arg0: pvl_list): void
export function pvlInsertAfter(l: pvl_list, e: pvl_elem, d: any | null): void
export function pvlInsertBefore(l: pvl_list, e: pvl_elem, d: any | null): void
export function pvlPop(l: pvl_list): any | null
export function pvlPush(l: pvl_list, d: any | null): void
export function pvlRemove(arg0: pvl_list, arg1: pvl_elem): any | null
export function pvlShift(l: pvl_list): any | null
export function pvlUnshift(l: pvl_list, d: any | null): void
export function setUnknownTokenHandlingSetting(newSetting: _unknown_token_handling): void
export function setZoneDirectory(path: string | null): void
export function sspmEncodingString(type: any | null): string | null
export function sspmFreeParts(parts: any | null, maxParts: number): void
export function sspmMajorTypeString(type: any | null): string | null
export function sspmMinorTypeString(type: any | null): string | null
export function sspmParseMime(parts: any | null, maxParts: number, actions: any | null, getString: any | null, getStringData: any | null, firstHeader: any | null): number
export function sspmWriteMime(parts: any | null, numParts: number, outputString: string | null, header: string | null): number
export interface icalattach_free_fn_t {
    (data: string | null): void
}
export interface icalparser_line_gen_func {
    (s: string | null, size: number, d: any | null): string | null
}
export interface pvl_applyf {
    (a: any | null, b: any | null): void
}
export interface pvl_comparef {
    (a: any | null, b: any | null): number
}
export interface pvl_findf {
    (a: any | null, b: any | null): number
}
export interface array {

    // Own fields of ICal-3.0.ICal.array

    elementSize: number
    incrementSize: number
    numElements: number
    spaceAllocated: number
    chunks: any
}

export class array {

    // Own properties of ICal-3.0.ICal.array

    static name: string
}

export interface attach {
}

export class attach {

    // Own properties of ICal-3.0.ICal.attach

    static name: string
}

export interface compiter {

    // Own fields of ICal-3.0.ICal.compiter

    kind: component_kind
    iter: pvl_elem
}

export class compiter {

    // Own properties of ICal-3.0.ICal.compiter

    static name: string
}

export interface component {
}

export class component {

    // Own properties of ICal-3.0.ICal.component

    static name: string
}

export interface datetimeperiodtype {

    // Own fields of ICal-3.0.ICal.datetimeperiodtype

    time: any
    period: any
}

export class datetimeperiodtype {

    // Own properties of ICal-3.0.ICal.datetimeperiodtype

    static name: string
}

export interface durationtype {

    // Own fields of ICal-3.0.ICal.durationtype

    isNeg: number
    days: number
    weeks: number
    hours: number
    minutes: number
    seconds: number
}

export class durationtype {

    // Own properties of ICal-3.0.ICal.durationtype

    static name: string
}

export interface geotype {

    // Own fields of ICal-3.0.ICal.geotype

    lat: number
    lon: number
}

export class geotype {

    // Own properties of ICal-3.0.ICal.geotype

    static name: string
}

export interface parameter {
}

export class parameter {

    // Own properties of ICal-3.0.ICal.parameter

    static name: string
}

export interface parser {
}

export class parser {

    // Own properties of ICal-3.0.ICal.parser

    static name: string
}

export interface periodtype {

    // Own fields of ICal-3.0.ICal.periodtype

    start: any
    end: any
    duration: any
}

export class periodtype {

    // Own properties of ICal-3.0.ICal.periodtype

    static name: string
}

export interface property {
}

export class property {

    // Own properties of ICal-3.0.ICal.property

    static name: string
}

export interface pvl_elem {
}

export class pvl_elem {

    // Own properties of ICal-3.0.ICal.pvl_elem

    static name: string
}

export interface pvl_elem_t {

    // Own fields of ICal-3.0.ICal.pvl_elem_t

    mAGIC: number
    d: any
    next: any
    prior: any
}

export class pvl_elem_t {

    // Own properties of ICal-3.0.ICal.pvl_elem_t

    static name: string
}

export interface pvl_list {
}

export class pvl_list {

    // Own properties of ICal-3.0.ICal.pvl_list

    static name: string
}

export interface recur_iterator {
}

export class recur_iterator {

    // Own properties of ICal-3.0.ICal.recur_iterator

    static name: string
}

export interface recurrencetype {

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

export class recurrencetype {

    // Own properties of ICal-3.0.ICal.recurrencetype

    static name: string
}

export interface reqstattype {

    // Own fields of ICal-3.0.ICal.reqstattype

    code: requeststatus
    desc: string | null
    debug: string | null
}

export class reqstattype {

    // Own properties of ICal-3.0.ICal.reqstattype

    static name: string
}

export interface sspm_action_map {

    // Own fields of ICal-3.0.ICal.sspm_action_map

    major: any
    minor: any
    newPart: () => any
    addLine: (part: any, header: any, line: string | null, size: number) => void
    endPart: (part: any) => any
    freePart: (part: any) => void
}

export class sspm_action_map {

    // Own properties of ICal-3.0.ICal.sspm_action_map

    static name: string
}

export interface sspm_header {

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

export class sspm_header {

    // Own properties of ICal-3.0.ICal.sspm_header

    static name: string
}

export interface sspm_part {

    // Own fields of ICal-3.0.ICal.sspm_part

    header: any
    level: number
    dataSize: number
    data: any
}

export class sspm_part {

    // Own properties of ICal-3.0.ICal.sspm_part

    static name: string
}

export interface time_span {

    // Own fields of ICal-3.0.ICal.time_span

    start: number
    end: number
    isBusy: number
}

export class time_span {

    // Own properties of ICal-3.0.ICal.time_span

    static name: string
}

export interface timetype {

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

export class timetype {

    // Own properties of ICal-3.0.ICal.timetype

    static name: string
}

export interface timezone {
}

export class timezone {

    // Own properties of ICal-3.0.ICal.timezone

    static name: string
}

export interface timezonephase {

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

export class timezonephase {

    // Own properties of ICal-3.0.ICal.timezonephase

    static name: string
}

export interface timezonetype {

    // Own fields of ICal-3.0.ICal.timezonetype

    tzid: string | null
    lastMod: any
    tzurl: string | null
    phases: any
}

export class timezonetype {

    // Own properties of ICal-3.0.ICal.timezonetype

    static name: string
}

export interface triggertype {

    // Own fields of ICal-3.0.ICal.triggertype

    time: any
    duration: any
}

export class triggertype {

    // Own properties of ICal-3.0.ICal.triggertype

    static name: string
}

export interface value {
}

export class value {

    // Own properties of ICal-3.0.ICal.value

    static name: string
}

// END