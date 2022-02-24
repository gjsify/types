/*
 * Type Definitions for node-gtk (https://github.com/romgrk/node-gtk)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/sammydre/ts-for-gjs
 */
/**
 * ICalGLib-3.0
 */

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
function errnoReturn(): ErrorEnum
function errorClearErrno(): void
function errorCrashHere(): void
function errorGetErrorState(error: ErrorEnum): ErrorState
function errorPerror(): string
function errorRestore(error: string, es: ErrorState): void
function errorSetErrno(x: ErrorEnum): void
function errorSetErrorState(error: ErrorEnum, state: ErrorState): void
function errorStopHere(): void
function errorStrerror(e: ErrorEnum): string
function errorSupress(error: string): ErrorState
function getUnknownTokenHandlingSetting(): Unknowntokenhandling
function memoryAddTmpBuffer(buf?: object | null): void
function memoryAppendChar(buf: number[], pos: number[], ch: number): [ /* buf */ number[], /* pos */ number[] ]
function memoryAppendString(buf: number[], pos: number[], str: string): [ /* buf */ number[], /* pos */ number[] ]
function memoryFreeBuffer(buf?: object | null): void
function memoryNewBuffer(size: number): object | null
function memoryResizeBuffer(buf: object | null, size: number): object | null
function memoryStrdup(s: string): string
function memoryTmpBuffer(size: number): object | null
function memoryTmpCopy(str: string): string
function mimeParse(func: MimeParseFunc): Component
function recurExpandRecurrence(rule: string, start: number, count: number): number[]
function requestStatusCode(stat: RequestStatus): string
function requestStatusDesc(stat: RequestStatus): string
function requestStatusFromNum(major: number, minor: number): RequestStatus
function requestStatusMajor(stat: RequestStatus): number
function requestStatusMinor(stat: RequestStatus): number
function restrictionCheck(comp: Component): number
function restrictionCompare(restr: RestrictionKind, count: number): number
function setUnknownTokenHandlingSetting(newSetting: Unknowntokenhandling): void
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
class Array {
    /* Properties of ICalGLib-3.0.ICalGLib.Object */
    /**
     * Whether free the native libical structure on #ICalObject's finalize even
     * if the object has set an owner.
     */
    alwaysDestroy: boolean
    /**
     * GDestroyNotify function to use to destroy the native libical pointer.
     */
    nativeDestroyFunc: object
    /**
     * Owner of the native libical structure. If set, then it is
     * responsible for a free of the native libical structure.
     */
    owner: GObject.Object
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of ICalGLib-3.0.ICalGLib.Array */
    /**
     * Creates a deep copy of #ICalArray with the same properties as the `array`.
     */
    copy(): Array
    /**
     * Removes the element at the `position` from the array.
     */
    removeElementAt(position: number): void
    /**
     * Gets the size of the array.
     */
    size(): number
    /* Methods of ICalGLib-3.0.ICalGLib.Object */
    /**
     * Adds a `depender` into the list of objects which should not be destroyed before
     * this `iobject`. It's usually used for cases where the `iobject` uses native libical
     * structure from the `depender`. The `depender` is referenced. It's illegal to try
     * to add one `depender` multiple times.
     */
    addDepender(depender: GObject.Object): void
    /**
     * Obtain the `ICalObject:`:always-destroy property value.
     */
    getAlwaysDestroy(): boolean
    /**
     * Obtains whether the native libical structure is a global shared memory,
     * thus should not be destroyed. This can be set only during construction time.
     */
    getIsGlobalMemory(): boolean
    /**
     * Obtain current owner of the native libical structure. The returned pointer,
     * if not NULL, is referenced for thread safety. Unref it with g_object_unref
     * when done with it.
     */
    refOwner(): GObject.Object | null
    /**
     * Removes a `depender` from the list of objects which should not be destroyed before
     * this `iobject,` previously added with i_cal_object_add_depender(). It's illegal to try
     * to remove the `depender` which is not in the internal list.
     */
    removeDepender(depender: GObject.Object): void
    /**
     * Unref and remove the owner.
     */
    removeOwner(): void
    /**
     * Sets the `ICalObject:`:always-destroy property value. When %TRUE, the native
     * libical structure is always freed, even when an owner of the `iobject` is set.
     */
    setAlwaysDestroy(value: boolean): void
    /**
     * Sets a function to be used to destroy the native libical structure.
     */
    setNativeDestroyFunc(nativeDestroyFunc: GLib.DestroyNotify): void
    /**
     * Sets an owner of the native libical structure, that is an object responsible
     * for a destroy of the native libical structure.
     */
    setOwner(owner: GObject.Object): void
    /**
     * Obtain native libical structure pointer associated with this `iobject` and sets the one
     * at `iobject` to NULL, thus it's invalid since now on.
     */
    stealNative(): object | null
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
    connect(sigName: "notify::always-destroy", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::always-destroy", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::always-destroy", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::always-destroy", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::always-destroy", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::native-destroy-func", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::native-destroy-func", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::native-destroy-func", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::native-destroy-func", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::native-destroy-func", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::owner", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::owner", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::owner", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::owner", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::owner", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: Array_ConstructProps)
    _init (config?: Array_ConstructProps): void
    static $gtype: GObject.Type
}
interface Attach_ConstructProps extends Object_ConstructProps {
}
class Attach {
    /* Properties of ICalGLib-3.0.ICalGLib.Object */
    /**
     * Whether free the native libical structure on #ICalObject's finalize even
     * if the object has set an owner.
     */
    alwaysDestroy: boolean
    /**
     * GDestroyNotify function to use to destroy the native libical pointer.
     */
    nativeDestroyFunc: object
    /**
     * Owner of the native libical structure. If set, then it is
     * responsible for a free of the native libical structure.
     */
    owner: GObject.Object
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of ICalGLib-3.0.ICalGLib.Attach */
    /**
     * Gets the data, if the #ICalAttach is built from the data.
     */
    getData(): string | null
    /**
     * Checks whether the #ICalAttach is built from url.
     */
    getIsUrl(): boolean
    /**
     * Gets the url, if the #ICalAttach is built from the url.
     */
    getUrl(): string | null
    /* Methods of ICalGLib-3.0.ICalGLib.Object */
    /**
     * Adds a `depender` into the list of objects which should not be destroyed before
     * this `iobject`. It's usually used for cases where the `iobject` uses native libical
     * structure from the `depender`. The `depender` is referenced. It's illegal to try
     * to add one `depender` multiple times.
     */
    addDepender(depender: GObject.Object): void
    /**
     * Obtain the `ICalObject:`:always-destroy property value.
     */
    getAlwaysDestroy(): boolean
    /**
     * Obtains whether the native libical structure is a global shared memory,
     * thus should not be destroyed. This can be set only during construction time.
     */
    getIsGlobalMemory(): boolean
    /**
     * Obtain current owner of the native libical structure. The returned pointer,
     * if not NULL, is referenced for thread safety. Unref it with g_object_unref
     * when done with it.
     */
    refOwner(): GObject.Object | null
    /**
     * Removes a `depender` from the list of objects which should not be destroyed before
     * this `iobject,` previously added with i_cal_object_add_depender(). It's illegal to try
     * to remove the `depender` which is not in the internal list.
     */
    removeDepender(depender: GObject.Object): void
    /**
     * Unref and remove the owner.
     */
    removeOwner(): void
    /**
     * Sets the `ICalObject:`:always-destroy property value. When %TRUE, the native
     * libical structure is always freed, even when an owner of the `iobject` is set.
     */
    setAlwaysDestroy(value: boolean): void
    /**
     * Sets a function to be used to destroy the native libical structure.
     */
    setNativeDestroyFunc(nativeDestroyFunc: GLib.DestroyNotify): void
    /**
     * Sets an owner of the native libical structure, that is an object responsible
     * for a destroy of the native libical structure.
     */
    setOwner(owner: GObject.Object): void
    /**
     * Obtain native libical structure pointer associated with this `iobject` and sets the one
     * at `iobject` to NULL, thus it's invalid since now on.
     */
    stealNative(): object | null
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
    connect(sigName: "notify::always-destroy", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::always-destroy", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::always-destroy", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::always-destroy", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::always-destroy", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::native-destroy-func", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::native-destroy-func", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::native-destroy-func", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::native-destroy-func", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::native-destroy-func", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::owner", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::owner", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::owner", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::owner", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::owner", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: Attach_ConstructProps)
    _init (config?: Attach_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static newFromBytes(bytes: any): Attach
    static newFromData(data: string, freeFn?: GLib.Func | null): Attach
    static newFromUrl(url: string): Attach
    static $gtype: GObject.Type
}
interface CompIter_ConstructProps extends Object_ConstructProps {
}
class CompIter {
    /* Properties of ICalGLib-3.0.ICalGLib.Object */
    /**
     * Whether free the native libical structure on #ICalObject's finalize even
     * if the object has set an owner.
     */
    alwaysDestroy: boolean
    /**
     * GDestroyNotify function to use to destroy the native libical pointer.
     */
    nativeDestroyFunc: object
    /**
     * Owner of the native libical structure. If set, then it is
     * responsible for a free of the native libical structure.
     */
    owner: GObject.Object
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of ICalGLib-3.0.ICalGLib.CompIter */
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
    /* Methods of ICalGLib-3.0.ICalGLib.Object */
    /**
     * Adds a `depender` into the list of objects which should not be destroyed before
     * this `iobject`. It's usually used for cases where the `iobject` uses native libical
     * structure from the `depender`. The `depender` is referenced. It's illegal to try
     * to add one `depender` multiple times.
     */
    addDepender(depender: GObject.Object): void
    /**
     * Obtain the `ICalObject:`:always-destroy property value.
     */
    getAlwaysDestroy(): boolean
    /**
     * Obtains whether the native libical structure is a global shared memory,
     * thus should not be destroyed. This can be set only during construction time.
     */
    getIsGlobalMemory(): boolean
    /**
     * Obtain current owner of the native libical structure. The returned pointer,
     * if not NULL, is referenced for thread safety. Unref it with g_object_unref
     * when done with it.
     */
    refOwner(): GObject.Object | null
    /**
     * Removes a `depender` from the list of objects which should not be destroyed before
     * this `iobject,` previously added with i_cal_object_add_depender(). It's illegal to try
     * to remove the `depender` which is not in the internal list.
     */
    removeDepender(depender: GObject.Object): void
    /**
     * Unref and remove the owner.
     */
    removeOwner(): void
    /**
     * Sets the `ICalObject:`:always-destroy property value. When %TRUE, the native
     * libical structure is always freed, even when an owner of the `iobject` is set.
     */
    setAlwaysDestroy(value: boolean): void
    /**
     * Sets a function to be used to destroy the native libical structure.
     */
    setNativeDestroyFunc(nativeDestroyFunc: GLib.DestroyNotify): void
    /**
     * Sets an owner of the native libical structure, that is an object responsible
     * for a destroy of the native libical structure.
     */
    setOwner(owner: GObject.Object): void
    /**
     * Obtain native libical structure pointer associated with this `iobject` and sets the one
     * at `iobject` to NULL, thus it's invalid since now on.
     */
    stealNative(): object | null
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
    connect(sigName: "notify::always-destroy", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::always-destroy", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::always-destroy", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::always-destroy", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::always-destroy", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::native-destroy-func", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::native-destroy-func", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::native-destroy-func", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::native-destroy-func", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::native-destroy-func", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::owner", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::owner", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::owner", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::owner", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::owner", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: CompIter_ConstructProps)
    _init (config?: CompIter_ConstructProps): void
    static $gtype: GObject.Type
}
interface Component_ConstructProps extends Object_ConstructProps {
}
class Component {
    /* Properties of ICalGLib-3.0.ICalGLib.Object */
    /**
     * Whether free the native libical structure on #ICalObject's finalize even
     * if the object has set an owner.
     */
    alwaysDestroy: boolean
    /**
     * GDestroyNotify function to use to destroy the native libical pointer.
     */
    nativeDestroyFunc: object
    /**
     * Owner of the native libical structure. If set, then it is
     * responsible for a free of the native libical structure.
     */
    owner: GObject.Object
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of ICalGLib-3.0.ICalGLib.Component */
    /**
     * Adds a #ICalComponent into another #ICalComponent as a child component.
     */
    addComponent(child: Component): void
    /**
     * Adds an #ICalProperty into #ICalComponent.
     */
    addProperty(property: Property): void
    /**
     * Converts a #ICalComponent to a string.
     */
    asIcalString(): string
    /**
     * Gets the #ICalCompIter pointing to the first child #ICalComponent.
     */
    beginComponent(kind: ComponentKind): CompIter
    /**
     * Checks the number of restrictions in #ICalComponent.
     */
    checkRestrictions(): number
    /**
     * Deeply clone a #ICalComponent.
     */
    clone(): Component
    /**
     * Converts some X-LIC-ERROR properties into RETURN-STATUS properties.
     */
    convertErrors(): void
    /**
     * Counts the child #ICalComponent with the target kind in the parent one.
     */
    countComponents(kind: ComponentKind): number
    /**
     * Counts the number of errors in #ICalComponent.
     */
    countErrors(): number
    /**
     * Counts the number of #ICalProperty in #ICalComponent.
     */
    countProperties(kind: PropertyKind): number
    /**
     * Gets the #ICalCompIter pointing to the end child #ICalComponent.
     */
    endComponent(kind: ComponentKind): CompIter
    /**
     * Cycles through all recurrences of an event. This function will call the specified callback function for
     * once for the base value of DTSTART, and foreach recurring date/time value. It will filter out events
     * that are specified as an EXDATE or an EXRULE.
     */
    foreachRecurrence(start: Time, end: Time): void
    /**
     * Applies the same manipulation on every tzid in #ICalComponent.
     */
    foreachTzid(): void
    /**
     * Gets the comment of the #ICalComponent.
     */
    getComment(): string
    /**
     * Gets the current #ICalComponent in #ICalComponent.
     */
    getCurrentComponent(): Component
    /**
     * Gets the current #ICalProperty in #ICalComponent.
     */
    getCurrentProperty(): Property
    /**
     * Gets the description of the #ICalComponent.
     */
    getDescription(): string
    /**
     * Gets the dtend of the #ICalComponent.
     */
    getDtend(): Time
    /**
     * Gets the dtstamp of the #ICalComponent.
     */
    getDtstamp(): Time
    /**
     * Gets the dtstart of the #ICalComponent.
     */
    getDtstart(): Time
    /**
     * Gets the due of the #ICalComponent.
     */
    getDue(): Time
    /**
     * Gets the duration of the #ICalComponent.
     */
    getDuration(): Duration
    /**
     * Gets the first #ICalComponent with specific kind in #ICalComponent.
     */
    getFirstComponent(kind: ComponentKind): Component | null
    /**
     * Gets the first #ICalProperty with specific kind in #ICalComponent.
     */
    getFirstProperty(kind: PropertyKind): Property | null
    /**
     * For VCOMPONENT: Returns a reference to the first VEVENT, VTODO or VJOURNAL.
     */
    getFirstRealComponent(): Component
    /**
     * Returns the first VEVENT, VTODO or VJOURNAL sub-component of cop, or comp if it is one of those types.
     */
    getInner(): Component | null
    /**
     * Gets the location of the #ICalComponent.
     */
    getLocation(): string
    /**
     * Gets the method of the #ICalComponent.
     */
    getMethod(): PropertyMethod
    /**
     * Gets the next #ICalComponent with specific kind in #ICalComponent.
     */
    getNextComponent(kind: ComponentKind): Component | null
    /**
     * Gets the next #ICalProperty with specific kind in #ICalComponent.
     */
    getNextProperty(kind: PropertyKind): Property | null
    /**
     * Gets the parent component of the `component`.
     */
    getParent(): Component | null
    /**
     * Gets the recurrenceid of the #ICalComponent.
     */
    getRecurrenceid(): Time
    /**
     * Gets the relcalid of the #ICalComponent.
     */
    getRelcalid(): string
    /**
     * Gets the sequence of the #ICalComponent.
     */
    getSequence(): number
    /**
     * For VEVENT, VTODO, VJOURNAL and VTIMEZONE: reports the start and end times of an event in UTC.
     */
    getSpan(): TimeSpan
    /**
     * Gets the status of the #ICalComponent.
     */
    getStatus(): PropertyStatus
    /**
     * Gets the summary of the #ICalComponent.
     */
    getSummary(): string
    /**
     * Returns the icaltimezone in the component corresponding to the TZID, or NULL if it can't be found.
     */
    getTimezone(tzid: string): Timezone | null
    /**
     * Gets the uid of the #ICalComponent.
     */
    getUid(): string
    /**
     * Checks whether #ICalComponent is valid.
     */
    isValid(): boolean
    /**
     * Gets the type of #ICalComponent.
     */
    isa(): ComponentKind
    /**
     * Checks whether the native part of #ICalComponent is icalcomponent.
     */
    isaComponent(): number
    /**
     * Takes 2 VCALENDAR components and merges the second one into the first, resolving any problems with conflicting
     * TZIDs. comp_to_merge will no longer exist after calling this function.
     */
    mergeComponent(compToMerge: Component): void
    /**
     * Removes a child #ICalComponent from another #ICalComponent.
     */
    removeComponent(child: Component): void
    /**
     * Removes #ICalProperty from #ICalComponent. Caution: The compare is based on address. So you must use
     * the original #ICalProperty as the target.
     */
    removeProperty(property: Property): void
    /**
     * Sets the comment of the #ICalComponent.
     */
    setComment(v: string): void
    /**
     * Sets the description of the #ICalComponent.
     */
    setDescription(v: string): void
    /**
     * Sets the dtend of the #ICalComponent.
     */
    setDtend(v: Time): void
    /**
     * Sets the dtstamp of the #ICalComponent.
     */
    setDtstamp(v: Time): void
    /**
     * Sets the dtstart of the #ICalComponent.
     */
    setDtstart(v: Time): void
    /**
     * Sets the due of the #ICalComponent.
     */
    setDue(v: Time): void
    /**
     * Sets the duration of the #ICalComponent.
     */
    setDuration(v: Duration): void
    /**
     * Sets the location of the #ICalComponent.
     */
    setLocation(v: string): void
    /**
     * Sets the method of the #ICalComponent.
     */
    setMethod(method: PropertyMethod): void
    /**
     * Sets the `parent` #ICalComponent of the specified `component`.
     */
    setParent(parent?: Component | null): void
    /**
     * Sets the recurrenceid of the #ICalComponent.
     */
    setRecurrenceid(v: Time): void
    /**
     * Sets the relcalid of the #ICalComponent.
     */
    setRelcalid(v: string): void
    /**
     * Sets the sequence of the #ICalComponent.
     */
    setSequence(v: number): void
    /**
     * Sets the status of the #ICalComponent.
     */
    setStatus(status: PropertyStatus): void
    /**
     * Sets the summary of the #ICalComponent.
     */
    setSummary(v: string): void
    /**
     * Sets the uid of the #ICalComponent.
     */
    setUid(v: string): void
    /**
     * Removes all X-LIC-ERROR properties.
     */
    stripErrors(): void
    /* Methods of ICalGLib-3.0.ICalGLib.Object */
    /**
     * Adds a `depender` into the list of objects which should not be destroyed before
     * this `iobject`. It's usually used for cases where the `iobject` uses native libical
     * structure from the `depender`. The `depender` is referenced. It's illegal to try
     * to add one `depender` multiple times.
     */
    addDepender(depender: GObject.Object): void
    /**
     * Obtain the `ICalObject:`:always-destroy property value.
     */
    getAlwaysDestroy(): boolean
    /**
     * Obtains whether the native libical structure is a global shared memory,
     * thus should not be destroyed. This can be set only during construction time.
     */
    getIsGlobalMemory(): boolean
    /**
     * Obtain current owner of the native libical structure. The returned pointer,
     * if not NULL, is referenced for thread safety. Unref it with g_object_unref
     * when done with it.
     */
    refOwner(): GObject.Object | null
    /**
     * Removes a `depender` from the list of objects which should not be destroyed before
     * this `iobject,` previously added with i_cal_object_add_depender(). It's illegal to try
     * to remove the `depender` which is not in the internal list.
     */
    removeDepender(depender: GObject.Object): void
    /**
     * Unref and remove the owner.
     */
    removeOwner(): void
    /**
     * Sets the `ICalObject:`:always-destroy property value. When %TRUE, the native
     * libical structure is always freed, even when an owner of the `iobject` is set.
     */
    setAlwaysDestroy(value: boolean): void
    /**
     * Sets a function to be used to destroy the native libical structure.
     */
    setNativeDestroyFunc(nativeDestroyFunc: GLib.DestroyNotify): void
    /**
     * Sets an owner of the native libical structure, that is an object responsible
     * for a destroy of the native libical structure.
     */
    setOwner(owner: GObject.Object): void
    /**
     * Obtain native libical structure pointer associated with this `iobject` and sets the one
     * at `iobject` to NULL, thus it's invalid since now on.
     */
    stealNative(): object | null
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
    connect(sigName: "notify::always-destroy", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::always-destroy", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::always-destroy", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::always-destroy", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::always-destroy", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::native-destroy-func", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::native-destroy-func", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::native-destroy-func", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::native-destroy-func", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::native-destroy-func", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::owner", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::owner", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::owner", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::owner", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::owner", callback: (...args: any[]) => void): NodeJS.EventEmitter
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
    static new(kind: ComponentKind): Component
    static newFromString(str: string): Component
    static newVagenda(): Component
    static newValarm(): Component
    static newVavailability(): Component
    static newVcalendar(): Component
    static newVevent(): Component
    static newVfreebusy(): Component
    static newVjournal(): Component
    static newVpoll(): Component
    static newVquery(): Component
    static newVtimezone(): Component
    static newVtodo(): Component
    static newVvoter(): Component
    static newX(xName: string): Component
    static newXavailable(): Component
    static newXdaylight(): Component
    static newXstandard(): Component
    static newXvote(): Component
    /**
     * Converts a string to a #ICalComponentKind.
     */
    static kindFromString(string: string): ComponentKind
    /**
     * Checks if a #ICalComponentKind is valid.
     */
    static kindIsValid(kind: ComponentKind): boolean
    /**
     * Converts a #ICalComponentKind to a string.
     */
    static kindToString(kind: ComponentKind): string
    static $gtype: GObject.Type
}
interface Datetimeperiod_ConstructProps extends Object_ConstructProps {
}
class Datetimeperiod {
    /* Properties of ICalGLib-3.0.ICalGLib.Object */
    /**
     * Whether free the native libical structure on #ICalObject's finalize even
     * if the object has set an owner.
     */
    alwaysDestroy: boolean
    /**
     * GDestroyNotify function to use to destroy the native libical pointer.
     */
    nativeDestroyFunc: object
    /**
     * Owner of the native libical structure. If set, then it is
     * responsible for a free of the native libical structure.
     */
    owner: GObject.Object
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of ICalGLib-3.0.ICalGLib.Datetimeperiod */
    /**
     * Gets the period attribute of #ICalDatetimeperiod.
     */
    getPeriod(): Period
    /**
     * Gets the time attribute of #ICalDatetimeperiod.
     */
    getTime(): Time
    /**
     * Sets the period attribute of #ICalDatetimeperiod.
     */
    setPeriod(period: Period): void
    /**
     * Sets the time attribute of #ICalDatetimeperiod.
     */
    setTime(time: Time): void
    /* Methods of ICalGLib-3.0.ICalGLib.Object */
    /**
     * Adds a `depender` into the list of objects which should not be destroyed before
     * this `iobject`. It's usually used for cases where the `iobject` uses native libical
     * structure from the `depender`. The `depender` is referenced. It's illegal to try
     * to add one `depender` multiple times.
     */
    addDepender(depender: GObject.Object): void
    /**
     * Obtain the `ICalObject:`:always-destroy property value.
     */
    getAlwaysDestroy(): boolean
    /**
     * Obtains whether the native libical structure is a global shared memory,
     * thus should not be destroyed. This can be set only during construction time.
     */
    getIsGlobalMemory(): boolean
    /**
     * Obtain current owner of the native libical structure. The returned pointer,
     * if not NULL, is referenced for thread safety. Unref it with g_object_unref
     * when done with it.
     */
    refOwner(): GObject.Object | null
    /**
     * Removes a `depender` from the list of objects which should not be destroyed before
     * this `iobject,` previously added with i_cal_object_add_depender(). It's illegal to try
     * to remove the `depender` which is not in the internal list.
     */
    removeDepender(depender: GObject.Object): void
    /**
     * Unref and remove the owner.
     */
    removeOwner(): void
    /**
     * Sets the `ICalObject:`:always-destroy property value. When %TRUE, the native
     * libical structure is always freed, even when an owner of the `iobject` is set.
     */
    setAlwaysDestroy(value: boolean): void
    /**
     * Sets a function to be used to destroy the native libical structure.
     */
    setNativeDestroyFunc(nativeDestroyFunc: GLib.DestroyNotify): void
    /**
     * Sets an owner of the native libical structure, that is an object responsible
     * for a destroy of the native libical structure.
     */
    setOwner(owner: GObject.Object): void
    /**
     * Obtain native libical structure pointer associated with this `iobject` and sets the one
     * at `iobject` to NULL, thus it's invalid since now on.
     */
    stealNative(): object | null
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
    connect(sigName: "notify::always-destroy", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::always-destroy", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::always-destroy", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::always-destroy", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::always-destroy", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::native-destroy-func", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::native-destroy-func", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::native-destroy-func", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::native-destroy-func", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::native-destroy-func", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::owner", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::owner", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::owner", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::owner", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::owner", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: Datetimeperiod_ConstructProps)
    _init (config?: Datetimeperiod_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): Datetimeperiod
    static $gtype: GObject.Type
}
interface Duration_ConstructProps extends Object_ConstructProps {
}
class Duration {
    /* Properties of ICalGLib-3.0.ICalGLib.Object */
    /**
     * Whether free the native libical structure on #ICalObject's finalize even
     * if the object has set an owner.
     */
    alwaysDestroy: boolean
    /**
     * GDestroyNotify function to use to destroy the native libical pointer.
     */
    nativeDestroyFunc: object
    /**
     * Owner of the native libical structure. If set, then it is
     * responsible for a free of the native libical structure.
     */
    owner: GObject.Object
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of ICalGLib-3.0.ICalGLib.Duration */
    /**
     * Converts the #ICalDuration to the representation in string.
     */
    asIcalString(): string
    /**
     * Converts the #ICalDuration to the representation in second.
     */
    asInt(): number
    /**
     * Gets the days of #ICalDuration.
     */
    getDays(): number
    /**
     * Gets the hours of #ICalDuration.
     */
    getHours(): number
    /**
     * Gets the minutes of #ICalDuration.
     */
    getMinutes(): number
    /**
     * Gets the seconds of #ICalDuration.
     */
    getSeconds(): number
    /**
     * Gets the weeks of #ICalDuration.
     */
    getWeeks(): number
    /**
     * Checks whether the #ICalDuration is the bad_duration.
     */
    isBadDuration(): boolean
    /**
     * Gets the is_neg of #ICalDuration.
     */
    isNeg(): boolean
    /**
     * Checks whether the #ICalDuration is the null_duration.
     */
    isNullDuration(): boolean
    /**
     * Sets the days of #ICalDuration.
     */
    setDays(days: number): void
    /**
     * Sets the hours of #ICalDuration.
     */
    setHours(hours: number): void
    /**
     * Sets the is_neg of #ICalDuration.
     */
    setIsNeg(isNeg: boolean): void
    /**
     * Sets the minutes of #ICalDuration.
     */
    setMinutes(minutes: number): void
    /**
     * Sets the seconds of #ICalDuration.
     */
    setSeconds(seconds: number): void
    /**
     * Sets the weeks of #ICalDuration.
     */
    setWeeks(weeks: number): void
    /* Methods of ICalGLib-3.0.ICalGLib.Object */
    /**
     * Adds a `depender` into the list of objects which should not be destroyed before
     * this `iobject`. It's usually used for cases where the `iobject` uses native libical
     * structure from the `depender`. The `depender` is referenced. It's illegal to try
     * to add one `depender` multiple times.
     */
    addDepender(depender: GObject.Object): void
    /**
     * Obtain the `ICalObject:`:always-destroy property value.
     */
    getAlwaysDestroy(): boolean
    /**
     * Obtains whether the native libical structure is a global shared memory,
     * thus should not be destroyed. This can be set only during construction time.
     */
    getIsGlobalMemory(): boolean
    /**
     * Obtain current owner of the native libical structure. The returned pointer,
     * if not NULL, is referenced for thread safety. Unref it with g_object_unref
     * when done with it.
     */
    refOwner(): GObject.Object | null
    /**
     * Removes a `depender` from the list of objects which should not be destroyed before
     * this `iobject,` previously added with i_cal_object_add_depender(). It's illegal to try
     * to remove the `depender` which is not in the internal list.
     */
    removeDepender(depender: GObject.Object): void
    /**
     * Unref and remove the owner.
     */
    removeOwner(): void
    /**
     * Sets the `ICalObject:`:always-destroy property value. When %TRUE, the native
     * libical structure is always freed, even when an owner of the `iobject` is set.
     */
    setAlwaysDestroy(value: boolean): void
    /**
     * Sets a function to be used to destroy the native libical structure.
     */
    setNativeDestroyFunc(nativeDestroyFunc: GLib.DestroyNotify): void
    /**
     * Sets an owner of the native libical structure, that is an object responsible
     * for a destroy of the native libical structure.
     */
    setOwner(owner: GObject.Object): void
    /**
     * Obtain native libical structure pointer associated with this `iobject` and sets the one
     * at `iobject` to NULL, thus it's invalid since now on.
     */
    stealNative(): object | null
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
    connect(sigName: "notify::always-destroy", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::always-destroy", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::always-destroy", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::always-destroy", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::always-destroy", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::native-destroy-func", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::native-destroy-func", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::native-destroy-func", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::native-destroy-func", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::native-destroy-func", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::owner", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::owner", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::owner", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::owner", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::owner", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: Duration_ConstructProps)
    _init (config?: Duration_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static newBadDuration(): Duration
    static newFromInt(t: number): Duration
    static newFromString(str: string): Duration
    static newNullDuration(): Duration
    static $gtype: GObject.Type
}
interface Geo_ConstructProps extends Object_ConstructProps {
}
class Geo {
    /* Properties of ICalGLib-3.0.ICalGLib.Object */
    /**
     * Whether free the native libical structure on #ICalObject's finalize even
     * if the object has set an owner.
     */
    alwaysDestroy: boolean
    /**
     * GDestroyNotify function to use to destroy the native libical pointer.
     */
    nativeDestroyFunc: object
    /**
     * Owner of the native libical structure. If set, then it is
     * responsible for a free of the native libical structure.
     */
    owner: GObject.Object
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of ICalGLib-3.0.ICalGLib.Geo */
    /**
     * Creates a new #ICalGeo, copy of `geo`.
     */
    clone(): Geo
    /**
     * Gets the latitude of #ICalGeo.
     */
    getLat(): number
    /**
     * Gets the longitude of #ICalGeo.
     */
    getLon(): number
    /**
     * Sets the latitude of #ICalGeo.
     */
    setLat(lat: number): void
    /**
     * Sets the longitude of #ICalGeo.
     */
    setLon(lon: number): void
    /* Methods of ICalGLib-3.0.ICalGLib.Object */
    /**
     * Adds a `depender` into the list of objects which should not be destroyed before
     * this `iobject`. It's usually used for cases where the `iobject` uses native libical
     * structure from the `depender`. The `depender` is referenced. It's illegal to try
     * to add one `depender` multiple times.
     */
    addDepender(depender: GObject.Object): void
    /**
     * Obtain the `ICalObject:`:always-destroy property value.
     */
    getAlwaysDestroy(): boolean
    /**
     * Obtains whether the native libical structure is a global shared memory,
     * thus should not be destroyed. This can be set only during construction time.
     */
    getIsGlobalMemory(): boolean
    /**
     * Obtain current owner of the native libical structure. The returned pointer,
     * if not NULL, is referenced for thread safety. Unref it with g_object_unref
     * when done with it.
     */
    refOwner(): GObject.Object | null
    /**
     * Removes a `depender` from the list of objects which should not be destroyed before
     * this `iobject,` previously added with i_cal_object_add_depender(). It's illegal to try
     * to remove the `depender` which is not in the internal list.
     */
    removeDepender(depender: GObject.Object): void
    /**
     * Unref and remove the owner.
     */
    removeOwner(): void
    /**
     * Sets the `ICalObject:`:always-destroy property value. When %TRUE, the native
     * libical structure is always freed, even when an owner of the `iobject` is set.
     */
    setAlwaysDestroy(value: boolean): void
    /**
     * Sets a function to be used to destroy the native libical structure.
     */
    setNativeDestroyFunc(nativeDestroyFunc: GLib.DestroyNotify): void
    /**
     * Sets an owner of the native libical structure, that is an object responsible
     * for a destroy of the native libical structure.
     */
    setOwner(owner: GObject.Object): void
    /**
     * Obtain native libical structure pointer associated with this `iobject` and sets the one
     * at `iobject` to NULL, thus it's invalid since now on.
     */
    stealNative(): object | null
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
    connect(sigName: "notify::always-destroy", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::always-destroy", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::always-destroy", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::always-destroy", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::always-destroy", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::native-destroy-func", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::native-destroy-func", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::native-destroy-func", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::native-destroy-func", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::native-destroy-func", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::owner", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::owner", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::owner", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::owner", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::owner", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: Geo_ConstructProps)
    _init (config?: Geo_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(lat: number, lon: number): Geo
    static $gtype: GObject.Type
}
interface Object_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of ICalGLib-3.0.ICalGLib.Object */
    /**
     * Whether free the native libical structure on #ICalObject's finalize even
     * if the object has set an owner.
     */
    alwaysDestroy?: boolean
    /**
     * Whether the native libical structure is from a global shared memory.
     * If TRUE, then it is not freed on #ICalObject's finalize.
     */
    isGlobalMemory?: boolean
    /**
     * The native libical structure for this ICalObject.
     */
    native?: object
    /**
     * GDestroyNotify function to use to destroy the native libical pointer.
     */
    nativeDestroyFunc?: object
    /**
     * Owner of the native libical structure. If set, then it is
     * responsible for a free of the native libical structure.
     */
    owner?: GObject.Object
}
class Object {
    /* Properties of ICalGLib-3.0.ICalGLib.Object */
    /**
     * Whether free the native libical structure on #ICalObject's finalize even
     * if the object has set an owner.
     */
    alwaysDestroy: boolean
    /**
     * GDestroyNotify function to use to destroy the native libical pointer.
     */
    nativeDestroyFunc: object
    /**
     * Owner of the native libical structure. If set, then it is
     * responsible for a free of the native libical structure.
     */
    owner: GObject.Object
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of ICalGLib-3.0.ICalGLib.Object */
    /**
     * Adds a `depender` into the list of objects which should not be destroyed before
     * this `iobject`. It's usually used for cases where the `iobject` uses native libical
     * structure from the `depender`. The `depender` is referenced. It's illegal to try
     * to add one `depender` multiple times.
     */
    addDepender(depender: GObject.Object): void
    /**
     * Obtain the `ICalObject:`:always-destroy property value.
     */
    getAlwaysDestroy(): boolean
    /**
     * Obtains whether the native libical structure is a global shared memory,
     * thus should not be destroyed. This can be set only during construction time.
     */
    getIsGlobalMemory(): boolean
    /**
     * Obtain current owner of the native libical structure. The returned pointer,
     * if not NULL, is referenced for thread safety. Unref it with g_object_unref
     * when done with it.
     */
    refOwner(): GObject.Object | null
    /**
     * Removes a `depender` from the list of objects which should not be destroyed before
     * this `iobject,` previously added with i_cal_object_add_depender(). It's illegal to try
     * to remove the `depender` which is not in the internal list.
     */
    removeDepender(depender: GObject.Object): void
    /**
     * Unref and remove the owner.
     */
    removeOwner(): void
    /**
     * Sets the `ICalObject:`:always-destroy property value. When %TRUE, the native
     * libical structure is always freed, even when an owner of the `iobject` is set.
     */
    setAlwaysDestroy(value: boolean): void
    /**
     * Sets a function to be used to destroy the native libical structure.
     */
    setNativeDestroyFunc(nativeDestroyFunc: GLib.DestroyNotify): void
    /**
     * Sets an owner of the native libical structure, that is an object responsible
     * for a destroy of the native libical structure.
     */
    setOwner(owner: GObject.Object): void
    /**
     * Obtain native libical structure pointer associated with this `iobject` and sets the one
     * at `iobject` to NULL, thus it's invalid since now on.
     */
    stealNative(): object | null
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
    connect(sigName: "notify::always-destroy", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::always-destroy", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::always-destroy", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::always-destroy", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::always-destroy", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::native-destroy-func", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::native-destroy-func", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::native-destroy-func", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::native-destroy-func", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::native-destroy-func", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::owner", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::owner", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::owner", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::owner", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::owner", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: Object_ConstructProps)
    _init (config?: Object_ConstructProps): void
    /* Static methods and pseudo-constructors */
    /**
     * Frees all global objects. Any references to them are invalidated
     * by this call, unless they had been g_object_ref()-ed manually.
     */
    static freeGlobalObjects(): void
    static $gtype: GObject.Type
}
interface Parameter_ConstructProps extends Object_ConstructProps {
}
class Parameter {
    /* Properties of ICalGLib-3.0.ICalGLib.Object */
    /**
     * Whether free the native libical structure on #ICalObject's finalize even
     * if the object has set an owner.
     */
    alwaysDestroy: boolean
    /**
     * GDestroyNotify function to use to destroy the native libical pointer.
     */
    nativeDestroyFunc: object
    /**
     * Owner of the native libical structure. If set, then it is
     * responsible for a free of the native libical structure.
     */
    owner: GObject.Object
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of ICalGLib-3.0.ICalGLib.Parameter */
    /**
     * Converts an #ICalParameter to the string representation.
     */
    asIcalString(): string
    /**
     * Deep clone a #ICalParameter.
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
    getEnable(): ParameterEnable
    getEncoding(): ParameterEncoding
    getFbtype(): ParameterFbtype
    getFilename(): string | null
    getFmttype(): string | null
    getIana(): string | null
    /**
     * Gets the iana_name property of the native part of the #ICalParameter.
     */
    getIanaName(): string | null
    /**
     * Gets the iana_value property of the native part of the #ICalParameter.
     */
    getIanaValue(): string | null
    getId(): string | null
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
     */
    getParent(): Property | null
    getPartstat(): ParameterPartstat
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
     */
    getXname(): string | null
    /**
     * Gets the xvalue property of the native part of the #ICalParameter.
     */
    getXvalue(): string | null
    /**
     * Checks whether native parts of two #ICalParameters have the same name.
     */
    hasSameName(param2: Parameter): number
    /**
     * Checks the type of a #ICalParameter.
     */
    isa(): ParameterKind
    /**
     * Checks whether the native part of the #ICalParameter is of type icalparameter.
     */
    isaParameter(): number
    setActionparam(v: ParameterAction): void
    setAltrep(v: string): void
    setCharset(v: string): void
    setCn(v: string): void
    setCutype(v: ParameterCutype): void
    setDelegatedfrom(v: string): void
    setDelegatedto(v: string): void
    setDir(v: string): void
    setEnable(v: ParameterEnable): void
    setEncoding(v: ParameterEncoding): void
    setFbtype(v: ParameterFbtype): void
    setFilename(v: string): void
    setFmttype(v: string): void
    setIana(v: string): void
    /**
     * Sets the iana_name property of the native part of the #ICalParameter.
     */
    setIanaName(v: string): void
    /**
     * Sets the iana_value property of the native part of the #ICalParameter.
     */
    setIanaValue(v: string): void
    setId(v: string): void
    setLanguage(v: string): void
    setLatency(v: string): void
    setLocal(v: ParameterLocal): void
    setLocalize(v: string): void
    setManagedid(v: string): void
    setMember(v: string): void
    setModified(v: string): void
    setOptions(v: string): void
    /**
     * Sets the parent #ICalProperty of an #ICalParameter.
     */
    setParent(property?: Property | null): void
    setPartstat(v: ParameterPartstat): void
    setPubliccomment(v: string): void
    setRange(v: ParameterRange): void
    setReason(v: string): void
    setRelated(v: ParameterRelated): void
    setReltype(v: ParameterReltype): void
    setRequired(v: ParameterRequired): void
    setResponse(v: number): void
    setRole(v: ParameterRole): void
    setRsvp(v: ParameterRsvp): void
    setScheduleagent(v: ParameterScheduleagent): void
    setScheduleforcesend(v: ParameterScheduleforcesend): void
    setSchedulestatus(v: string): void
    setSentby(v: string): void
    setSize(v: string): void
    setStayinformed(v: ParameterStayinformed): void
    setSubstate(v: ParameterSubstate): void
    setTzid(v: string): void
    setValue(v: ParameterValue): void
    setX(v: string): void
    setXliccomparetype(v: ParameterXliccomparetype): void
    setXlicerrortype(v: ParameterXlicerrortype): void
    /**
     * Sets the xname property of the native part of the #ICalParameter.
     */
    setXname(v: string): void
    /**
     * Sets the xvalue property of the native part of the #ICalParameter.
     */
    setXvalue(v: string): void
    /* Methods of ICalGLib-3.0.ICalGLib.Object */
    /**
     * Adds a `depender` into the list of objects which should not be destroyed before
     * this `iobject`. It's usually used for cases where the `iobject` uses native libical
     * structure from the `depender`. The `depender` is referenced. It's illegal to try
     * to add one `depender` multiple times.
     */
    addDepender(depender: GObject.Object): void
    /**
     * Obtain the `ICalObject:`:always-destroy property value.
     */
    getAlwaysDestroy(): boolean
    /**
     * Obtains whether the native libical structure is a global shared memory,
     * thus should not be destroyed. This can be set only during construction time.
     */
    getIsGlobalMemory(): boolean
    /**
     * Obtain current owner of the native libical structure. The returned pointer,
     * if not NULL, is referenced for thread safety. Unref it with g_object_unref
     * when done with it.
     */
    refOwner(): GObject.Object | null
    /**
     * Removes a `depender` from the list of objects which should not be destroyed before
     * this `iobject,` previously added with i_cal_object_add_depender(). It's illegal to try
     * to remove the `depender` which is not in the internal list.
     */
    removeDepender(depender: GObject.Object): void
    /**
     * Unref and remove the owner.
     */
    removeOwner(): void
    /**
     * Sets the `ICalObject:`:always-destroy property value. When %TRUE, the native
     * libical structure is always freed, even when an owner of the `iobject` is set.
     */
    setAlwaysDestroy(value: boolean): void
    /**
     * Sets a function to be used to destroy the native libical structure.
     */
    setNativeDestroyFunc(nativeDestroyFunc: GLib.DestroyNotify): void
    /**
     * Sets an owner of the native libical structure, that is an object responsible
     * for a destroy of the native libical structure.
     */
    setOwner(owner: GObject.Object): void
    /**
     * Obtain native libical structure pointer associated with this `iobject` and sets the one
     * at `iobject` to NULL, thus it's invalid since now on.
     */
    stealNative(): object | null
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
    connect(sigName: "notify::always-destroy", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::always-destroy", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::always-destroy", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::always-destroy", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::always-destroy", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::native-destroy-func", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::native-destroy-func", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::native-destroy-func", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::native-destroy-func", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::native-destroy-func", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::owner", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::owner", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::owner", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::owner", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::owner", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: Parameter_ConstructProps)
    _init (config?: Parameter_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(v: ParameterKind): Parameter
    static newActionparam(v: ParameterAction): Parameter
    static newAltrep(v: string): Parameter
    static newCharset(v: string): Parameter
    static newCn(v: string): Parameter
    static newCutype(v: ParameterCutype): Parameter
    static newDelegatedfrom(v: string): Parameter
    static newDelegatedto(v: string): Parameter
    static newDir(v: string): Parameter
    static newEnable(v: ParameterEnable): Parameter
    static newEncoding(v: ParameterEncoding): Parameter
    static newFbtype(v: ParameterFbtype): Parameter
    static newFilename(v: string): Parameter
    static newFmttype(v: string): Parameter
    static newFromString(value: string): Parameter
    static newFromValueString(kind: ParameterKind, value: string): Parameter
    static newIana(v: string): Parameter
    static newId(v: string): Parameter
    static newLanguage(v: string): Parameter
    static newLatency(v: string): Parameter
    static newLocal(v: ParameterLocal): Parameter
    static newLocalize(v: string): Parameter
    static newManagedid(v: string): Parameter
    static newMember(v: string): Parameter
    static newModified(v: string): Parameter
    static newOptions(v: string): Parameter
    static newPartstat(v: ParameterPartstat): Parameter
    static newPubliccomment(v: string): Parameter
    static newRange(v: ParameterRange): Parameter
    static newReason(v: string): Parameter
    static newRelated(v: ParameterRelated): Parameter
    static newReltype(v: ParameterReltype): Parameter
    static newRequired(v: ParameterRequired): Parameter
    static newResponse(v: number): Parameter
    static newRole(v: ParameterRole): Parameter
    static newRsvp(v: ParameterRsvp): Parameter
    static newScheduleagent(v: ParameterScheduleagent): Parameter
    static newScheduleforcesend(v: ParameterScheduleforcesend): Parameter
    static newSchedulestatus(v: string): Parameter
    static newSentby(v: string): Parameter
    static newSize(v: string): Parameter
    static newStayinformed(v: ParameterStayinformed): Parameter
    static newSubstate(v: ParameterSubstate): Parameter
    static newTzid(v: string): Parameter
    static newValue(v: ParameterValue): Parameter
    static newX(v: string): Parameter
    static newXliccomparetype(v: ParameterXliccomparetype): Parameter
    static newXlicerrortype(v: ParameterXlicerrortype): Parameter
    /**
     * Converts a string to the #ICalParameterKind.
     */
    static kindFromString(string: string): ParameterKind
    /**
     * Checks whether #ICalParameterKind is valid.
     */
    static kindIsValid(kind: ParameterKind): boolean
    /**
     * Converts the #ICalParameter to the string representation.
     */
    static kindToString(kind: ParameterKind): string
    /**
     * Converts the #ICalParameterValue to #ICalValueKind.
     */
    static valueToValueKind(value: ParameterValue): ValueKind
    static $gtype: GObject.Type
}
interface Parser_ConstructProps extends Object_ConstructProps {
}
class Parser {
    /* Properties of ICalGLib-3.0.ICalGLib.Object */
    /**
     * Whether free the native libical structure on #ICalObject's finalize even
     * if the object has set an owner.
     */
    alwaysDestroy: boolean
    /**
     * GDestroyNotify function to use to destroy the native libical pointer.
     */
    nativeDestroyFunc: object
    /**
     * Owner of the native libical structure. If set, then it is
     * responsible for a free of the native libical structure.
     */
    owner: GObject.Object
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of ICalGLib-3.0.ICalGLib.Parser */
    /**
     * Add a line at one time into the #ICalParser until the parsing is complete and #ICalComponent will be
     * returned.
     */
    addLine(str?: string | null): Component | null
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
     */
    getLine(func: ParserLineGenFunc): string
    /**
     * Gets the state of the target parser.
     */
    getState(): ParserState
    /**
     * icalparser_parse takes a string that holds the text ( in RFC 2445 format ) and returns a pointer to an
     * #ICalComponent. The caller owns the memory. `func` is a pointer to a function that returns one content
     * line per invocation.
     */
    parse(func: ParserLineGenFunc): Component
    /* Methods of ICalGLib-3.0.ICalGLib.Object */
    /**
     * Adds a `depender` into the list of objects which should not be destroyed before
     * this `iobject`. It's usually used for cases where the `iobject` uses native libical
     * structure from the `depender`. The `depender` is referenced. It's illegal to try
     * to add one `depender` multiple times.
     */
    addDepender(depender: GObject.Object): void
    /**
     * Obtain the `ICalObject:`:always-destroy property value.
     */
    getAlwaysDestroy(): boolean
    /**
     * Obtains whether the native libical structure is a global shared memory,
     * thus should not be destroyed. This can be set only during construction time.
     */
    getIsGlobalMemory(): boolean
    /**
     * Obtain current owner of the native libical structure. The returned pointer,
     * if not NULL, is referenced for thread safety. Unref it with g_object_unref
     * when done with it.
     */
    refOwner(): GObject.Object | null
    /**
     * Removes a `depender` from the list of objects which should not be destroyed before
     * this `iobject,` previously added with i_cal_object_add_depender(). It's illegal to try
     * to remove the `depender` which is not in the internal list.
     */
    removeDepender(depender: GObject.Object): void
    /**
     * Unref and remove the owner.
     */
    removeOwner(): void
    /**
     * Sets the `ICalObject:`:always-destroy property value. When %TRUE, the native
     * libical structure is always freed, even when an owner of the `iobject` is set.
     */
    setAlwaysDestroy(value: boolean): void
    /**
     * Sets a function to be used to destroy the native libical structure.
     */
    setNativeDestroyFunc(nativeDestroyFunc: GLib.DestroyNotify): void
    /**
     * Sets an owner of the native libical structure, that is an object responsible
     * for a destroy of the native libical structure.
     */
    setOwner(owner: GObject.Object): void
    /**
     * Obtain native libical structure pointer associated with this `iobject` and sets the one
     * at `iobject` to NULL, thus it's invalid since now on.
     */
    stealNative(): object | null
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
    connect(sigName: "notify::always-destroy", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::always-destroy", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::always-destroy", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::always-destroy", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::always-destroy", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::native-destroy-func", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::native-destroy-func", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::native-destroy-func", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::native-destroy-func", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::native-destroy-func", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::owner", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::owner", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::owner", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::owner", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::owner", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: Parser_ConstructProps)
    _init (config?: Parser_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): Parser
    /**
     * Parses the string into a #ICalComponent.
     */
    static parseString(str: string): Component
    static $gtype: GObject.Type
}
interface Period_ConstructProps extends Object_ConstructProps {
}
class Period {
    /* Properties of ICalGLib-3.0.ICalGLib.Object */
    /**
     * Whether free the native libical structure on #ICalObject's finalize even
     * if the object has set an owner.
     */
    alwaysDestroy: boolean
    /**
     * GDestroyNotify function to use to destroy the native libical pointer.
     */
    nativeDestroyFunc: object
    /**
     * Owner of the native libical structure. If set, then it is
     * responsible for a free of the native libical structure.
     */
    owner: GObject.Object
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of ICalGLib-3.0.ICalGLib.Period */
    /**
     * Translates #ICalPeriod to string.
     */
    asIcalString(): string
    /**
     * Gets the duration from an #ICalPeriod.
     */
    getDuration(): Duration
    /**
     * Gets the end time from an #ICalPeriod.
     */
    getEnd(): Time
    /**
     * Gets the start time from an #ICalPeriod.
     */
    getStart(): Time
    /**
     * Checks the #ICalPeriod is null_period.
     */
    isNullPeriod(): boolean
    /**
     * Checks the #ICalPeriod is valid_period.
     */
    isValidPeriod(): boolean
    /**
     * Sets the duration of an #ICalPeriod.
     */
    setDuration(duration: Duration): void
    /**
     * Sets the end time of an #ICalPeriod.
     */
    setEnd(end: Time): void
    /**
     * Sets the start time of an #ICalPeriod.
     */
    setStart(start: Time): void
    /* Methods of ICalGLib-3.0.ICalGLib.Object */
    /**
     * Adds a `depender` into the list of objects which should not be destroyed before
     * this `iobject`. It's usually used for cases where the `iobject` uses native libical
     * structure from the `depender`. The `depender` is referenced. It's illegal to try
     * to add one `depender` multiple times.
     */
    addDepender(depender: GObject.Object): void
    /**
     * Obtain the `ICalObject:`:always-destroy property value.
     */
    getAlwaysDestroy(): boolean
    /**
     * Obtains whether the native libical structure is a global shared memory,
     * thus should not be destroyed. This can be set only during construction time.
     */
    getIsGlobalMemory(): boolean
    /**
     * Obtain current owner of the native libical structure. The returned pointer,
     * if not NULL, is referenced for thread safety. Unref it with g_object_unref
     * when done with it.
     */
    refOwner(): GObject.Object | null
    /**
     * Removes a `depender` from the list of objects which should not be destroyed before
     * this `iobject,` previously added with i_cal_object_add_depender(). It's illegal to try
     * to remove the `depender` which is not in the internal list.
     */
    removeDepender(depender: GObject.Object): void
    /**
     * Unref and remove the owner.
     */
    removeOwner(): void
    /**
     * Sets the `ICalObject:`:always-destroy property value. When %TRUE, the native
     * libical structure is always freed, even when an owner of the `iobject` is set.
     */
    setAlwaysDestroy(value: boolean): void
    /**
     * Sets a function to be used to destroy the native libical structure.
     */
    setNativeDestroyFunc(nativeDestroyFunc: GLib.DestroyNotify): void
    /**
     * Sets an owner of the native libical structure, that is an object responsible
     * for a destroy of the native libical structure.
     */
    setOwner(owner: GObject.Object): void
    /**
     * Obtain native libical structure pointer associated with this `iobject` and sets the one
     * at `iobject` to NULL, thus it's invalid since now on.
     */
    stealNative(): object | null
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
    connect(sigName: "notify::always-destroy", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::always-destroy", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::always-destroy", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::always-destroy", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::always-destroy", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::native-destroy-func", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::native-destroy-func", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::native-destroy-func", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::native-destroy-func", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::native-destroy-func", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::owner", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::owner", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::owner", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::owner", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::owner", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: Period_ConstructProps)
    _init (config?: Period_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static newFromString(str: string): Period
    static newNullPeriod(): Period
    static $gtype: GObject.Type
}
interface Property_ConstructProps extends Object_ConstructProps {
}
class Property {
    /* Properties of ICalGLib-3.0.ICalGLib.Object */
    /**
     * Whether free the native libical structure on #ICalObject's finalize even
     * if the object has set an owner.
     */
    alwaysDestroy: boolean
    /**
     * GDestroyNotify function to use to destroy the native libical pointer.
     */
    nativeDestroyFunc: object
    /**
     * Owner of the native libical structure. If set, then it is
     * responsible for a free of the native libical structure.
     */
    owner: GObject.Object
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of ICalGLib-3.0.ICalGLib.Property */
    /**
     * Adds a #ICalParameter into the #ICalProperty. It behaves like set the copy of the #ICalParameter. Upon
     * completion the native part of #ICalParameter will be set to NULL.
     */
    addParameter(parameter: Parameter): void
    /**
     * Converts a #ICalProperty to a string representation.
     */
    asIcalString(): string
    /**
     * Deeply clone a #ICalProperty.
     */
    clone(): Property
    /**
     * Counts the parameters in the #ICalProperty.
     */
    countParameters(): number
    /**
     * Gets the acceptresponse of #ICalProperty.
     */
    getAcceptresponse(): string
    /**
     * Gets the acknowledged time of #ICalProperty.
     */
    getAcknowledged(): Time
    /**
     * Gets the action of #ICalProperty.
     */
    getAction(): PropertyAction
    /**
     * Gets the allowconflict of #ICalProperty.
     */
    getAllowconflict(): string
    /**
     * Gets the attach of #ICalProperty.
     */
    getAttach(): Attach
    /**
     * Gets the attendee of #ICalProperty.
     */
    getAttendee(): string
    /**
     * Gets the busytype of #ICalProperty.
     */
    getBusytype(): PropertyBusytype
    /**
     * Gets the calid of #ICalProperty.
     */
    getCalid(): string
    /**
     * Gets the calmaster of #ICalProperty.
     */
    getCalmaster(): string
    /**
     * Gets the calscale of #ICalProperty.
     */
    getCalscale(): string
    /**
     * Gets the capversion of #ICalProperty.
     */
    getCapversion(): string
    /**
     * Gets the carid of #ICalProperty.
     */
    getCarid(): string
    /**
     * Gets the carlevel of #ICalProperty.
     */
    getCarlevel(): PropertyCarlevel
    /**
     * Gets the categories of #ICalProperty.
     */
    getCategories(): string
    /**
     * Gets the class of #ICalProperty.
     */
    getClass(): Property_Class
    /**
     * Gets the cmd of #ICalProperty.
     */
    getCmd(): PropertyCmd
    /**
     * Gets the color property of the `prop`.
     */
    getColor(): string
    /**
     * Gets the comment of #ICalProperty.
     */
    getComment(): string
    /**
     * Gets the completed time of #ICalProperty.
     */
    getCompleted(): Time
    /**
     * Gets the components of #ICalProperty.
     */
    getComponents(): string
    /**
     * Gets the contact of #ICalProperty.
     */
    getContact(): string
    /**
     * Gets the created time of #ICalProperty.
     */
    getCreated(): Time
    /**
     * Gets the csid of #ICalProperty.
     */
    getCsid(): string
    /**
     * Gets the datemax time of #ICalProperty.
     */
    getDatemax(): Time
    /**
     * Gets the datemin time of #ICalProperty.
     */
    getDatemin(): Time
    /**
     * If the property is a DATE-TIME with a TZID parameter and a corresponding VTIMEZONE is present in the
     * component, the returned component will already be in the correct timezone; otherwise the caller is responsible
     * for converting it.
     * 
     * The `comp` can be NULL, in which case the parent of the `prop` is used to find
     * the corresponding time zone.
     */
    getDatetimeWithComponent(comp?: Component | null): Time
    /**
     * Gets the decreed of #ICalProperty.
     */
    getDecreed(): string
    /**
     * Gets the defaultcharset of #ICalProperty.
     */
    getDefaultcharset(): string
    /**
     * Gets the defaultlocale of #ICalProperty.
     */
    getDefaultlocale(): string
    /**
     * Gets the defaulttzid of #ICalProperty.
     */
    getDefaulttzid(): string
    /**
     * Gets the defaultvcars of #ICalProperty.
     */
    getDefaultvcars(): string
    /**
     * Gets the deny of #ICalProperty.
     */
    getDeny(): string
    /**
     * Gets the description of #ICalProperty.
     */
    getDescription(): string
    /**
     * Gets the dtend time of #ICalProperty.
     */
    getDtend(): Time
    /**
     * Gets the dtstamp time of #ICalProperty.
     */
    getDtstamp(): Time
    /**
     * Gets the dtstart time of #ICalProperty.
     */
    getDtstart(): Time
    /**
     * Gets the due time of #ICalProperty.
     */
    getDue(): Time
    /**
     * Gets the duration of #ICalProperty.
     */
    getDuration(): Duration
    /**
     * Gets the estimatedduration of #ICalProperty.
     */
    getEstimatedduration(): Duration
    /**
     * Gets the exdate time of #ICalProperty.
     */
    getExdate(): Time
    /**
     * Gets the expand of #ICalProperty.
     */
    getExpand(): number
    /**
     * Gets the exrule recurrence type of #ICalProperty.
     */
    getExrule(): Recurrence
    /**
     * Gets the first #ICalParameter from the parent #ICalProperty.
     */
    getFirstParameter(kind: ParameterKind): Parameter
    /**
     * Gets the freebusy period type of #ICalProperty.
     */
    getFreebusy(): Period
    /**
     * Gets the geo type of #ICalProperty.
     */
    getGeo(): Geo
    /**
     * Gets the grant of #ICalProperty.
     */
    getGrant(): string
    /**
     * Gets the itipversion of #ICalProperty.
     */
    getItipversion(): string
    /**
     * Gets the lastmodified time of #ICalProperty.
     */
    getLastmodified(): Time
    /**
     * Gets the location of #ICalProperty.
     */
    getLocation(): string
    /**
     * Gets the maxcomponentsize of #ICalProperty.
     */
    getMaxcomponentsize(): number
    /**
     * Gets the maxdate time of #ICalProperty.
     */
    getMaxdate(): Time
    /**
     * Gets the maxresults of #ICalProperty.
     */
    getMaxresults(): number
    /**
     * Gets the maxresultssize of #ICalProperty.
     */
    getMaxresultssize(): number
    /**
     * Gets the method of #ICalProperty.
     */
    getMethod(): PropertyMethod
    /**
     * Gets the mindate time of #ICalProperty.
     */
    getMindate(): Time
    /**
     * Gets the multipart of #ICalProperty.
     */
    getMultipart(): string
    /**
     * Gets the name of #ICalProperty.
     */
    getName(): string
    /**
     * Gets the next #ICalParameter from the parent #ICalProperty.
     */
    getNextParameter(kind: ParameterKind): Parameter
    /**
     * Gets the organizer of #ICalProperty.
     */
    getOrganizer(): string
    /**
     * Gets the owner of #ICalProperty.
     */
    getOwner(): string
    /**
     * Gets the string representation of the target parameter in the #ICalProperty.
     */
    getParameterAsString(name: string): string
    /**
     * Gets the parent component of the property. Use with caution. When icalproperty is deallocated, it won't
     * deallocate its parent. However the #ICalComponent object created using this method will be deallocated
     * (if no reference in other places). So You need to make sure there is another reference except the one
     * in #ICalProperty.
     */
    getParent(): Component | null
    /**
     * Gets the percentcomplete of #ICalProperty.
     */
    getPercentcomplete(): number
    /**
     * Gets the permission of #ICalProperty.
     */
    getPermission(): string
    /**
     * Gets the pollcompletion of #ICalProperty.
     */
    getPollcompletion(): PropertyPollcompletion
    /**
     * Gets the pollitemid of #ICalProperty.
     */
    getPollitemid(): number
    /**
     * Gets the pollmode of #ICalProperty.
     */
    getPollmode(): PropertyPollmode
    /**
     * Gets the pollproperties of #ICalProperty.
     */
    getPollproperties(): string
    /**
     * Gets the pollwinner of #ICalProperty.
     */
    getPollwinner(): number
    /**
     * Gets the priority of #ICalProperty.
     */
    getPriority(): number
    /**
     * Gets the prodid of #ICalProperty.
     */
    getProdid(): string
    /**
     * Gets the property name of #ICalProperty.
     */
    getPropertyName(): string
    /**
     * Gets the query of #ICalProperty.
     */
    getQuery(): string
    /**
     * Gets the queryid of #ICalProperty.
     */
    getQueryid(): string
    /**
     * Gets the querylevel of #ICalProperty.
     */
    getQuerylevel(): PropertyQuerylevel
    /**
     * Gets the queryname of #ICalProperty.
     */
    getQueryname(): string
    /**
     * Gets the rdate  of #ICalProperty.
     */
    getRdate(): Datetimeperiod
    /**
     * Gets the recuraccepted of #ICalProperty.
     */
    getRecuraccepted(): string
    /**
     * Gets the recurexpand of #ICalProperty.
     */
    getRecurexpand(): string
    /**
     * Gets the recurlimit of #ICalProperty.
     */
    getRecurlimit(): string
    /**
     * Gets the recurrenceid time of #ICalProperty.
     */
    getRecurrenceid(): Time
    /**
     * Gets the relatedto of #ICalProperty.
     */
    getRelatedto(): string
    /**
     * Gets the relcalid of #ICalProperty.
     */
    getRelcalid(): string
    /**
     * Gets the repeat of #ICalProperty.
     */
    getRepeat(): number
    /**
     * Gets the replyurl of #ICalProperty.
     */
    getReplyurl(): string
    /**
     * Gets the requeststatus of #ICalProperty.
     */
    getRequeststatus(): Reqstat
    /**
     * Gets the resources of #ICalProperty.
     */
    getResources(): string
    /**
     * Gets the response of #ICalProperty.
     */
    getResponse(): number
    /**
     * Gets the restriction of #ICalProperty.
     */
    getRestriction(): string
    /**
     * Gets the rrule recurrence type of #ICalProperty.
     */
    getRrule(): Recurrence
    /**
     * Gets the scope of #ICalProperty.
     */
    getScope(): string
    /**
     * Gets the sequence of #ICalProperty.
     */
    getSequence(): number
    /**
     * Gets the status of #ICalProperty.
     */
    getStatus(): PropertyStatus
    /**
     * Gets the storesexpanded of #ICalProperty.
     */
    getStoresexpanded(): string
    /**
     * Gets the summary of #ICalProperty.
     */
    getSummary(): string
    /**
     * Gets the target of #ICalProperty.
     */
    getTarget(): string
    /**
     * Gets the taskmode of #ICalProperty.
     */
    getTaskmode(): PropertyTaskmode
    /**
     * Gets the transp of #ICalProperty.
     */
    getTransp(): PropertyTransp
    /**
     * Gets the trigger period type of #ICalProperty.
     */
    getTrigger(): Trigger
    /**
     * Gets the tzid of #ICalProperty.
     */
    getTzid(): string
    /**
     * Gets the tzidaliasof of #ICalProperty.
     */
    getTzidaliasof(): string
    /**
     * Gets the tzname of #ICalProperty.
     */
    getTzname(): string
    /**
     * Gets the tzoffsetfrom of #ICalProperty.
     */
    getTzoffsetfrom(): number
    /**
     * Gets the tzoffsetto of #ICalProperty.
     */
    getTzoffsetto(): number
    /**
     * Gets the tzuntil time of #ICalProperty.
     */
    getTzuntil(): Time
    /**
     * Gets the tzurl of #ICalProperty.
     */
    getTzurl(): string
    /**
     * Gets the uid of #ICalProperty.
     */
    getUid(): string
    /**
     * Gets the url of #ICalProperty.
     */
    getUrl(): string
    /**
     * Gets the #ICalValue of #ICalProperty.
     */
    getValue(): Value
    /**
     * Gets the string representation of the value in #ICalProperty.
     */
    getValueAsString(): string
    /**
     * Gets the version of #ICalProperty.
     */
    getVersion(): string
    /**
     * Gets the voter of #ICalProperty.
     */
    getVoter(): string
    /**
     * Gets the x of #ICalProperty.
     */
    getX(): string
    /**
     * Gets the name of x property.
     */
    getXName(): string | null
    /**
     * Gets the xlicclass of #ICalProperty.
     */
    getXlicclass(): PropertyXlicclass
    /**
     * Gets the xlicclustercount of #ICalProperty.
     */
    getXlicclustercount(): string
    /**
     * Gets the xlicerror of #ICalProperty.
     */
    getXlicerror(): string
    /**
     * Gets the xlicmimecharset of #ICalProperty.
     */
    getXlicmimecharset(): string
    /**
     * Gets the xlicmimecid of #ICalProperty.
     */
    getXlicmimecid(): string
    /**
     * Gets the xlicmimecontenttype of #ICalProperty.
     */
    getXlicmimecontenttype(): string
    /**
     * Gets the xlicmimeencoding of #ICalProperty.
     */
    getXlicmimeencoding(): string
    /**
     * Gets the xlicmimefilename of #ICalProperty.
     */
    getXlicmimefilename(): string
    /**
     * Gets the xlicmimeoptinfo of #ICalProperty.
     */
    getXlicmimeoptinfo(): string
    /**
     * Gets the kind of #ICalProperty.
     */
    isa(): PropertyKind
    /**
     * Checks whether the native part of #ICalProperty is of the type icalproperty.
     */
    isaProperty(): number
    /**
     * Removes the target kind of the parameters in the #ICalProperty.
     */
    removeParameterByKind(kind: ParameterKind): void
    /**
     * Removes parameter in the #ICalProperty by name.
     */
    removeParameterByName(name: string): void
    /**
     * Removes the parameter in the #ICalProperty by ref.
     */
    removeParameterByRef(param: Parameter): void
    /**
     * Sets the acceptresponse for the #ICalProperty.
     */
    setAcceptresponse(v: string): void
    /**
     * Sets the acknowledged time for the #ICalProperty.
     */
    setAcknowledged(v: Time): void
    /**
     * Sets the action for the #ICalProperty.
     */
    setAction(v: PropertyAction): void
    /**
     * Sets the allowconflict for the #ICalProperty.
     */
    setAllowconflict(v: string): void
    /**
     * Sets the attach for the #ICalProperty.
     */
    setAttach(v: Attach): void
    /**
     * Sets the attendee for the #ICalProperty.
     */
    setAttendee(v: string): void
    /**
     * Sets the busytype for the #ICalProperty.
     */
    setBusytype(v: PropertyBusytype): void
    /**
     * Sets the calid for the #ICalProperty.
     */
    setCalid(v: string): void
    /**
     * Sets the calmaster for the #ICalProperty.
     */
    setCalmaster(v: string): void
    /**
     * Sets the calscale for the #ICalProperty.
     */
    setCalscale(v: string): void
    /**
     * Sets the capversion for the #ICalProperty.
     */
    setCapversion(v: string): void
    /**
     * Sets the carid for the #ICalProperty.
     */
    setCarid(v: string): void
    /**
     * Sets the carlevel for the #ICalProperty.
     */
    setCarlevel(v: PropertyCarlevel): void
    /**
     * Sets the categories for the #ICalProperty.
     */
    setCategories(v: string): void
    /**
     * Sets the class for the #ICalProperty.
     */
    setClass(v: Property_Class): void
    /**
     * Sets the cmd for the #ICalProperty.
     */
    setCmd(v: PropertyCmd): void
    /**
     * Sets the color for the `prop`.
     */
    setColor(v: string): void
    /**
     * Sets the comment for the #ICalProperty.
     */
    setComment(v: string): void
    /**
     * Sets the completed time for the #ICalProperty.
     */
    setCompleted(v: Time): void
    /**
     * Sets the components for the #ICalProperty.
     */
    setComponents(v: string): void
    /**
     * Sets the contact for the #ICalProperty.
     */
    setContact(v: string): void
    /**
     * Sets the created time for the #ICalProperty.
     */
    setCreated(v: Time): void
    /**
     * Sets the csid for the #ICalProperty.
     */
    setCsid(v: string): void
    /**
     * Sets the datemax time for the #ICalProperty.
     */
    setDatemax(v: Time): void
    /**
     * Sets the datemin time for the #ICalProperty.
     */
    setDatemin(v: Time): void
    /**
     * Sets the decreed for the #ICalProperty.
     */
    setDecreed(v: string): void
    /**
     * Sets the defaultcharset for the #ICalProperty.
     */
    setDefaultcharset(v: string): void
    /**
     * Sets the defaultlocale for the #ICalProperty.
     */
    setDefaultlocale(v: string): void
    /**
     * Sets the defaulttzid for the #ICalProperty.
     */
    setDefaulttzid(v: string): void
    /**
     * Sets the defaultvcars for the #ICalProperty.
     */
    setDefaultvcars(v: string): void
    /**
     * Sets the deny for the #ICalProperty.
     */
    setDeny(v: string): void
    /**
     * Sets the description for the #ICalProperty.
     */
    setDescription(v: string): void
    /**
     * Sets the dtend time for the #ICalProperty.
     */
    setDtend(v: Time): void
    /**
     * Sets the dtstamp time for the #ICalProperty.
     */
    setDtstamp(v: Time): void
    /**
     * Sets the dtstart time for the #ICalProperty.
     */
    setDtstart(v: Time): void
    /**
     * Sets the due time for the #ICalProperty.
     */
    setDue(v: Time): void
    /**
     * Sets the duration for the #ICalProperty.
     */
    setDuration(v: Duration): void
    /**
     * Sets the estimatedduration for the #ICalProperty.
     */
    setEstimatedduration(v: Duration): void
    /**
     * Sets the exdate time for the #ICalProperty.
     */
    setExdate(v: Time): void
    /**
     * Sets the expand for the #ICalProperty.
     */
    setExpand(v: number): void
    /**
     * Sets the exrule time for the #ICalProperty.
     */
    setExrule(v: Recurrence): void
    /**
     * Sets the freebusy time for the #ICalProperty.
     */
    setFreebusy(v: Period): void
    /**
     * Sets the geo for the #ICalProperty.
     */
    setGeo(v: Geo): void
    /**
     * Sets the grant for the #ICalProperty.
     */
    setGrant(v: string): void
    /**
     * Sets the itipversion for the #ICalProperty.
     */
    setItipversion(v: string): void
    /**
     * Sets the lastmodified time for the #ICalProperty.
     */
    setLastmodified(v: Time): void
    /**
     * Sets the location for the #ICalProperty.
     */
    setLocation(v: string): void
    /**
     * Sets the maxcomponentsize for the #ICalProperty.
     */
    setMaxcomponentsize(v: number): void
    /**
     * Sets the maxdate time for the #ICalProperty.
     */
    setMaxdate(v: Time): void
    /**
     * Sets the maxresults for the #ICalProperty.
     */
    setMaxresults(v: number): void
    /**
     * Sets the maxresultssize for the #ICalProperty.
     */
    setMaxresultssize(v: number): void
    /**
     * Sets the method for the #ICalProperty.
     */
    setMethod(v: PropertyMethod): void
    /**
     * Sets the mindate time for the #ICalProperty.
     */
    setMindate(v: Time): void
    /**
     * Sets the multipart for the #ICalProperty.
     */
    setMultipart(v: string): void
    /**
     * Sets the name for the #ICalProperty.
     */
    setName(v: string): void
    /**
     * Sets the organizer for the #ICalProperty.
     */
    setOrganizer(v: string): void
    /**
     * Sets the owner for the #ICalProperty.
     */
    setOwner(v: string): void
    /**
     * Sets a #ICalParameter into the #ICalProperty. It behaves like set the copy of the #ICalParameter. Upon
     * completion the native part of #ICalParameter will be set to NULL.
     */
    setParameter(parameter: Parameter): void
    /**
     * Sets the #ICalProperty with the parameter defined by the name and value.
     */
    setParameterFromString(name: string, value: string): void
    /**
     * Sets the parent #ICalComponent of the specified #ICalProperty.
     */
    setParent(component?: Component | null): void
    /**
     * Sets the percentcomplete for the #ICalProperty.
     */
    setPercentcomplete(v: number): void
    /**
     * Sets the permission for the #ICalProperty.
     */
    setPermission(v: string): void
    /**
     * Sets the pollcompletion for the #ICalProperty.
     */
    setPollcompletion(v: PropertyPollcompletion): void
    /**
     * Sets the pollitemid for the #ICalProperty.
     */
    setPollitemid(v: number): void
    /**
     * Sets the pollmode for the #ICalProperty.
     */
    setPollmode(v: PropertyPollmode): void
    /**
     * Sets the pollproperties for the #ICalProperty.
     */
    setPollproperties(v: string): void
    /**
     * Sets the pollwinner for the #ICalProperty.
     */
    setPollwinner(v: number): void
    /**
     * Sets the priority for the #ICalProperty.
     */
    setPriority(v: number): void
    /**
     * Sets the prodid for the #ICalProperty.
     */
    setProdid(v: string): void
    /**
     * Sets the query for the #ICalProperty.
     */
    setQuery(v: string): void
    /**
     * Sets the queryid for the #ICalProperty.
     */
    setQueryid(v: string): void
    /**
     * Sets the querylevel for the #ICalProperty.
     */
    setQuerylevel(v: PropertyQuerylevel): void
    /**
     * Sets the queryname for the #ICalProperty.
     */
    setQueryname(v: string): void
    /**
     * Sets the rdate for the #ICalProperty.
     */
    setRdate(v: Datetimeperiod): void
    /**
     * Sets the recuraccepted for the #ICalProperty.
     */
    setRecuraccepted(v: string): void
    /**
     * Sets the recurexpand for the #ICalProperty.
     */
    setRecurexpand(v: string): void
    /**
     * Sets the recurlimit for the #ICalProperty.
     */
    setRecurlimit(v: string): void
    /**
     * Sets the recurrenceid time for the #ICalProperty.
     */
    setRecurrenceid(v: Time): void
    /**
     * Sets the relatedto for the #ICalProperty.
     */
    setRelatedto(v: string): void
    /**
     * Sets the relcalid for the #ICalProperty.
     */
    setRelcalid(v: string): void
    /**
     * Sets the repeat for the #ICalProperty.
     */
    setRepeat(v: number): void
    /**
     * Sets the replyurl for the #ICalProperty.
     */
    setReplyurl(v: string): void
    /**
     * Sets the requeststatus for the #ICalProperty.
     */
    setRequeststatus(v: Reqstat): void
    /**
     * Sets the resources for the #ICalProperty.
     */
    setResources(v: string): void
    /**
     * Sets the response for the #ICalProperty.
     */
    setResponse(v: number): void
    /**
     * Sets the restriction for the #ICalProperty.
     */
    setRestriction(v: string): void
    /**
     * Sets the rrule for the #ICalProperty.
     */
    setRrule(v: Recurrence): void
    /**
     * Sets the scope for the #ICalProperty.
     */
    setScope(v: string): void
    /**
     * Sets the sequence for the #ICalProperty.
     */
    setSequence(v: number): void
    /**
     * Sets the status for the #ICalProperty.
     */
    setStatus(v: PropertyStatus): void
    /**
     * Sets the storesexpanded for the #ICalProperty.
     */
    setStoresexpanded(v: string): void
    /**
     * Sets the summary for the #ICalProperty.
     */
    setSummary(v: string): void
    /**
     * Sets the target for the #ICalProperty.
     */
    setTarget(v: string): void
    /**
     * Sets the taskmode for the #ICalProperty.
     */
    setTaskmode(v: PropertyTaskmode): void
    /**
     * Sets the transp for the #ICalProperty.
     */
    setTransp(v: PropertyTransp): void
    /**
     * Sets the trigger time for the #ICalProperty.
     */
    setTrigger(v: Trigger): void
    /**
     * Sets the tzid for the #ICalProperty.
     */
    setTzid(v: string): void
    /**
     * Sets the tzidaliasof for the #ICalProperty.
     */
    setTzidaliasof(v: string): void
    /**
     * Sets the tzname for the #ICalProperty.
     */
    setTzname(v: string): void
    /**
     * Sets the tzoffsetfrom for the #ICalProperty.
     */
    setTzoffsetfrom(v: number): void
    /**
     * Sets the tzoffsetto for the #ICalProperty.
     */
    setTzoffsetto(v: number): void
    /**
     * Sets the tzuntil time for the #ICalProperty.
     */
    setTzuntil(v: Time): void
    /**
     * Sets the tzurl for the #ICalProperty.
     */
    setTzurl(v: string): void
    /**
     * Sets the uid for the #ICalProperty.
     */
    setUid(v: string): void
    /**
     * Sets the url for the #ICalProperty.
     */
    setUrl(v: string): void
    /**
     * Sets the #ICalProperty with the #ICalValue.
     */
    setValue(value: Value): void
    /**
     * Sets the #ICalProperty with the #ICalValue constructed from string.
     */
    setValueFromString(value: string, kind: string): void
    /**
     * Sets the version for the #ICalProperty.
     */
    setVersion(v: string): void
    /**
     * Sets the voter for the #ICalProperty.
     */
    setVoter(v: string): void
    /**
     * Sets the x for the #ICalProperty.
     */
    setX(v: string): void
    /**
     * Sets the name of x property for the #ICalProperty.
     */
    setXName(name: string): void
    /**
     * Sets the xlicclass for the #ICalProperty.
     */
    setXlicclass(v: PropertyXlicclass): void
    /**
     * Sets the xlicclustercount for the #ICalProperty.
     */
    setXlicclustercount(v: string): void
    /**
     * Sets the xlicerror for the #ICalProperty.
     */
    setXlicerror(v: string): void
    /**
     * Sets the xlicmimecharset for the #ICalProperty.
     */
    setXlicmimecharset(v: string): void
    /**
     * Sets the xlicmimecid for the #ICalProperty.
     */
    setXlicmimecid(v: string): void
    /**
     * Sets the xlicmimecontenttype for the #ICalProperty.
     */
    setXlicmimecontenttype(v: string): void
    /**
     * Sets the xlicmimeencoding for the #ICalProperty.
     */
    setXlicmimeencoding(v: string): void
    /**
     * Sets the xlicmimefilename for the #ICalProperty.
     */
    setXlicmimefilename(v: string): void
    /**
     * Sets the xlicmimeoptinfo for the #ICalProperty.
     */
    setXlicmimeoptinfo(v: string): void
    /* Methods of ICalGLib-3.0.ICalGLib.Object */
    /**
     * Adds a `depender` into the list of objects which should not be destroyed before
     * this `iobject`. It's usually used for cases where the `iobject` uses native libical
     * structure from the `depender`. The `depender` is referenced. It's illegal to try
     * to add one `depender` multiple times.
     */
    addDepender(depender: GObject.Object): void
    /**
     * Obtain the `ICalObject:`:always-destroy property value.
     */
    getAlwaysDestroy(): boolean
    /**
     * Obtains whether the native libical structure is a global shared memory,
     * thus should not be destroyed. This can be set only during construction time.
     */
    getIsGlobalMemory(): boolean
    /**
     * Obtain current owner of the native libical structure. The returned pointer,
     * if not NULL, is referenced for thread safety. Unref it with g_object_unref
     * when done with it.
     */
    refOwner(): GObject.Object | null
    /**
     * Removes a `depender` from the list of objects which should not be destroyed before
     * this `iobject,` previously added with i_cal_object_add_depender(). It's illegal to try
     * to remove the `depender` which is not in the internal list.
     */
    removeDepender(depender: GObject.Object): void
    /**
     * Unref and remove the owner.
     */
    removeOwner(): void
    /**
     * Sets the `ICalObject:`:always-destroy property value. When %TRUE, the native
     * libical structure is always freed, even when an owner of the `iobject` is set.
     */
    setAlwaysDestroy(value: boolean): void
    /**
     * Sets a function to be used to destroy the native libical structure.
     */
    setNativeDestroyFunc(nativeDestroyFunc: GLib.DestroyNotify): void
    /**
     * Sets an owner of the native libical structure, that is an object responsible
     * for a destroy of the native libical structure.
     */
    setOwner(owner: GObject.Object): void
    /**
     * Obtain native libical structure pointer associated with this `iobject` and sets the one
     * at `iobject` to NULL, thus it's invalid since now on.
     */
    stealNative(): object | null
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
    connect(sigName: "notify::always-destroy", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::always-destroy", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::always-destroy", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::always-destroy", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::always-destroy", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::native-destroy-func", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::native-destroy-func", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::native-destroy-func", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::native-destroy-func", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::native-destroy-func", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::owner", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::owner", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::owner", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::owner", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::owner", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: Property_ConstructProps)
    _init (config?: Property_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(kind: PropertyKind): Property
    static newAcceptresponse(v: string): Property
    static newAcknowledged(v: Time): Property
    static newAction(v: PropertyAction): Property
    static newAllowconflict(v: string): Property
    static newAttach(v: Attach): Property
    static newAttendee(v: string): Property
    static newBusytype(v: PropertyBusytype): Property
    static newCalid(v: string): Property
    static newCalmaster(v: string): Property
    static newCalscale(v: string): Property
    static newCapversion(v: string): Property
    static newCarid(v: string): Property
    static newCarlevel(v: PropertyCarlevel): Property
    static newCategories(v: string): Property
    static newClass(v: Property_Class): Property
    static newCmd(v: PropertyCmd): Property
    static newColor(v: string): Property
    static newComment(v: string): Property
    static newCompleted(v: Time): Property
    static newComponents(v: string): Property
    static newContact(v: string): Property
    static newCreated(v: Time): Property
    static newCsid(v: string): Property
    static newDatemax(v: Time): Property
    static newDatemin(v: Time): Property
    static newDecreed(v: string): Property
    static newDefaultcharset(v: string): Property
    static newDefaultlocale(v: string): Property
    static newDefaulttzid(v: string): Property
    static newDefaultvcars(v: string): Property
    static newDeny(v: string): Property
    static newDescription(v: string): Property
    static newDtend(v: Time): Property
    static newDtstamp(v: Time): Property
    static newDtstart(v: Time): Property
    static newDue(v: Time): Property
    static newDuration(v: Duration): Property
    static newEstimatedduration(v: Duration): Property
    static newExdate(v: Time): Property
    static newExpand(v: number): Property
    static newExrule(v: Recurrence): Property
    static newFreebusy(v: Period): Property
    static newFromString(str: string): Property
    static newGeo(v: Geo): Property
    static newGrant(v: string): Property
    static newItipversion(v: string): Property
    static newLastmodified(v: Time): Property
    static newLocation(v: string): Property
    static newMaxcomponentsize(v: number): Property
    static newMaxdate(v: Time): Property
    static newMaxresults(v: number): Property
    static newMaxresultssize(v: number): Property
    static newMethod(v: PropertyMethod): Property
    static newMindate(v: Time): Property
    static newMultipart(v: string): Property
    static newName(v: string): Property
    static newOrganizer(v: string): Property
    static newOwner(v: string): Property
    static newPercentcomplete(v: number): Property
    static newPermission(v: string): Property
    static newPollcompletion(v: PropertyPollcompletion): Property
    static newPollitemid(v: number): Property
    static newPollmode(v: PropertyPollmode): Property
    static newPollproperties(v: string): Property
    static newPollwinner(v: number): Property
    static newPriority(v: number): Property
    static newProdid(v: string): Property
    static newQuery(v: string): Property
    static newQueryid(v: string): Property
    static newQuerylevel(v: PropertyQuerylevel): Property
    static newQueryname(v: string): Property
    static newRdate(v: Datetimeperiod): Property
    static newRecuraccepted(v: string): Property
    static newRecurexpand(v: string): Property
    static newRecurlimit(v: string): Property
    static newRecurrenceid(v: Time): Property
    static newRelatedto(v: string): Property
    static newRelcalid(v: string): Property
    static newRepeat(v: number): Property
    static newReplyurl(v: string): Property
    static newRequeststatus(v: Reqstat): Property
    static newResources(v: string): Property
    static newResponse(v: number): Property
    static newRestriction(v: string): Property
    static newRrule(v: Recurrence): Property
    static newScope(v: string): Property
    static newSequence(v: number): Property
    static newStatus(v: PropertyStatus): Property
    static newStoresexpanded(v: string): Property
    static newSummary(v: string): Property
    static newTarget(v: string): Property
    static newTaskmode(v: PropertyTaskmode): Property
    static newTransp(v: PropertyTransp): Property
    static newTrigger(v: Trigger): Property
    static newTzid(v: string): Property
    static newTzidaliasof(v: string): Property
    static newTzname(v: string): Property
    static newTzoffsetfrom(v: number): Property
    static newTzoffsetto(v: number): Property
    static newTzuntil(v: Time): Property
    static newTzurl(v: string): Property
    static newUid(v: string): Property
    static newUrl(v: string): Property
    static newVersion(v: string): Property
    static newVoter(v: string): Property
    static newX(v: string): Property
    static newXlicclass(v: PropertyXlicclass): Property
    static newXlicclustercount(v: string): Property
    static newXlicerror(v: string): Property
    static newXlicmimecharset(v: string): Property
    static newXlicmimecid(v: string): Property
    static newXlicmimecontenttype(v: string): Property
    static newXlicmimeencoding(v: string): Property
    static newXlicmimefilename(v: string): Property
    static newXlicmimeoptinfo(v: string): Property
    /**
     * Converts the enum to string.
     */
    static enumToString(e: number): string
    /**
     * Converts a integer and string into an enum.
     */
    static kindAndStringToEnum(kind: number, str: string): number
    /**
     * Converts the string to #ICalPropertyKind.
     */
    static kindFromString(string: string): PropertyKind
    /**
     * Checks whether the enum belongs to the #ICalPropertyKind.
     */
    static kindHasProperty(kind: PropertyKind, e: number): number
    /**
     * Checks whether #ICalPropertyKind is valid.
     */
    static kindIsValid(kind: PropertyKind): boolean
    /**
     * Converts the #ICalPropertyKind to a string.
     */
    static kindToString(kind: PropertyKind): string
    /**
     * Converts the #ICalPropertyKind to #ICalValueKind.
     */
    static kindToValueKind(kind: PropertyKind): ValueKind
    /**
     * Converts the string to #ICalPropertyKind.
     */
    static methodFromString(str: string): PropertyMethod
    /**
     * Converts the #ICalPropertyMethod to string.
     */
    static methodToString(method: PropertyMethod): string
    /**
     * Decides if this recurrence is acceptable. This function decides if a specific recurrence value is excluded
     * by EXRULE or EXDATE properties.
     */
    static recurrenceIsExcluded(comp: Component, dtstart: Time, recurtime: Time): boolean
    /**
     * Converts the string to #ICalPropertyKind.
     */
    static statusFromString(str: string): PropertyStatus
    /**
     * Converts the #ICalPropertyStatus to string.
     */
    static statusToString(method: PropertyStatus): string
    static $gtype: GObject.Type
}
interface RecurIterator_ConstructProps extends Object_ConstructProps {
}
class RecurIterator {
    /* Properties of ICalGLib-3.0.ICalGLib.Object */
    /**
     * Whether free the native libical structure on #ICalObject's finalize even
     * if the object has set an owner.
     */
    alwaysDestroy: boolean
    /**
     * GDestroyNotify function to use to destroy the native libical pointer.
     */
    nativeDestroyFunc: object
    /**
     * Owner of the native libical structure. If set, then it is
     * responsible for a free of the native libical structure.
     */
    owner: GObject.Object
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of ICalGLib-3.0.ICalGLib.RecurIterator */
    /**
     * Gets the next occurrence from an iterator.
     */
    next(): Time
    /**
     * Sets the date-time at which the iterator will start, where 'start' is a value between DTSTART and UNTIL.
     * Note:
     * CAN NOT be used with RRULEs that contain COUNT.
     */
    setStart(start: Time): number
    /* Methods of ICalGLib-3.0.ICalGLib.Object */
    /**
     * Adds a `depender` into the list of objects which should not be destroyed before
     * this `iobject`. It's usually used for cases where the `iobject` uses native libical
     * structure from the `depender`. The `depender` is referenced. It's illegal to try
     * to add one `depender` multiple times.
     */
    addDepender(depender: GObject.Object): void
    /**
     * Obtain the `ICalObject:`:always-destroy property value.
     */
    getAlwaysDestroy(): boolean
    /**
     * Obtains whether the native libical structure is a global shared memory,
     * thus should not be destroyed. This can be set only during construction time.
     */
    getIsGlobalMemory(): boolean
    /**
     * Obtain current owner of the native libical structure. The returned pointer,
     * if not NULL, is referenced for thread safety. Unref it with g_object_unref
     * when done with it.
     */
    refOwner(): GObject.Object | null
    /**
     * Removes a `depender` from the list of objects which should not be destroyed before
     * this `iobject,` previously added with i_cal_object_add_depender(). It's illegal to try
     * to remove the `depender` which is not in the internal list.
     */
    removeDepender(depender: GObject.Object): void
    /**
     * Unref and remove the owner.
     */
    removeOwner(): void
    /**
     * Sets the `ICalObject:`:always-destroy property value. When %TRUE, the native
     * libical structure is always freed, even when an owner of the `iobject` is set.
     */
    setAlwaysDestroy(value: boolean): void
    /**
     * Sets a function to be used to destroy the native libical structure.
     */
    setNativeDestroyFunc(nativeDestroyFunc: GLib.DestroyNotify): void
    /**
     * Sets an owner of the native libical structure, that is an object responsible
     * for a destroy of the native libical structure.
     */
    setOwner(owner: GObject.Object): void
    /**
     * Obtain native libical structure pointer associated with this `iobject` and sets the one
     * at `iobject` to NULL, thus it's invalid since now on.
     */
    stealNative(): object | null
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
    connect(sigName: "notify::always-destroy", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::always-destroy", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::always-destroy", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::always-destroy", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::always-destroy", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::native-destroy-func", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::native-destroy-func", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::native-destroy-func", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::native-destroy-func", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::native-destroy-func", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::owner", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::owner", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::owner", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::owner", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::owner", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: RecurIterator_ConstructProps)
    _init (config?: RecurIterator_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(rule: Recurrence, dtstart: Time): RecurIterator
    static $gtype: GObject.Type
}
interface Recurrence_ConstructProps extends Object_ConstructProps {
}
class Recurrence {
    /* Properties of ICalGLib-3.0.ICalGLib.Object */
    /**
     * Whether free the native libical structure on #ICalObject's finalize even
     * if the object has set an owner.
     */
    alwaysDestroy: boolean
    /**
     * GDestroyNotify function to use to destroy the native libical pointer.
     */
    nativeDestroyFunc: object
    /**
     * Owner of the native libical structure. If set, then it is
     * responsible for a free of the native libical structure.
     */
    owner: GObject.Object
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of ICalGLib-3.0.ICalGLib.Recurrence */
    /**
     * Resets an #ICalRecurrence.
     */
    clear(): void
    /**
     * Gets the by_day value at index `index`. The index should be less than %I_CAL_BY_DAY_SIZE.
     */
    getByDay(index: number): number
    /**
     * Gets the by_day array from #ICalRecurrence. The array size is I_CAL_BY_DAY_SIZE.
     */
    getByDayArray(): number[]
    /**
     * Gets the by_hour value at index `index`. The index should be less than %I_CAL_BY_HOUR_SIZE.
     */
    getByHour(index: number): number
    /**
     * Gets the by_hour array from #ICalRecurrence. The array size is I_CAL_BY_HOUR_SIZE.
     */
    getByHourArray(): number[]
    /**
     * Gets the by_minute value at index `index`. The index should be less than %I_CAL_BY_MINUTE_SIZE.
     */
    getByMinute(index: number): number
    /**
     * Gets the by_minute array from #ICalRecurrence. The array size is I_CAL_BY_MINUTE_SIZE.
     */
    getByMinuteArray(): number[]
    /**
     * Gets the by_month value at index `index`. The index should be less than %I_CAL_BY_MONTH_SIZE.
     */
    getByMonth(index: number): number
    /**
     * Gets the by_month array from #ICalRecurrence. The array size is I_CAL_BY_MONTH_SIZE.
     */
    getByMonthArray(): number[]
    /**
     * Gets the by_month_day value at index `index`. The index should be less than %I_CAL_BY_MONTHDAY_SIZE.
     */
    getByMonthDay(index: number): number
    /**
     * Gets the by_month_day array from #ICalRecurrence. The array size is I_CAL_BY_MONTHDAY_SIZE.
     */
    getByMonthDayArray(): number[]
    /**
     * Gets the by_second value at index `index`. The index should be less than %I_CAL_BY_SECOND_SIZE.
     */
    getBySecond(index: number): number
    /**
     * Gets the by_second array from #ICalRecurrence. The array size if I_CAL_BY_SECOND_SIZE.
     */
    getBySecondArray(): number[]
    /**
     * Gets the by_set_pos value at index `index`. The index should be less than %I_CAL_BY_SETPOS_SIZE.
     */
    getBySetPos(index: number): number
    /**
     * Gets the by_set_pos array from #ICalRecurrence. The array size is I_CAL_BY_SETPOS_SIZE.
     */
    getBySetPosArray(): number[]
    /**
     * Gets the by_week_no value at index `index`. The index should be less than %I_CAL_BY_WEEKNO_SIZE.
     */
    getByWeekNo(index: number): number
    /**
     * Gets the by_week_no array from #ICalRecurrence. The array size is I_CAL_BY_WEEKNO_SIZE.
     */
    getByWeekNoArray(): number[]
    /**
     * Gets the by_year_day value at index `index`. The index should be less than %I_CAL_BY_YEARDAY_SIZE.
     */
    getByYearDay(index: number): number
    /**
     * Gets the by_year_day array from #ICalRecurrence. The array size is I_CAL_BY_YEARDAY_SIZE.
     */
    getByYearDayArray(): number[]
    /**
     * Gets the count from #ICalRecurrence.
     */
    getCount(): number
    /**
     * Gets the freq from #ICalRecurrence.
     */
    getFreq(): RecurrenceFrequency
    /**
     * Gets the interval from #ICalRecurrence.
     */
    getInterval(): number
    /**
     * Gets the until from #ICalRecurrence.
     */
    getUntil(): Time
    /**
     * Gets the week_start from #ICalRecurrence.
     */
    getWeekStart(): RecurrenceWeekday
    /**
     * Sets the by_day array from #ICalRecurrence at the given index. The array size if I_CAL_BY_DAY_SIZE.
     */
    setByDay(index: number, value: number): void
    /**
     * Sets the by_day array in `recur` at once. The array size can be less than I_CAL_BY_DAY_SIZE. Shorter arrays
     * are terminated with I_CAL_RECURRENCE_ARRAY_MAX value, longer arrays are truncated.
     */
    setByDayArray(values: number[]): void
    /**
     * Sets the by_hour array from #ICalRecurrence at the given index. The array size is I_CAL_BY_HOUR_SIZE.
     */
    setByHour(index: number, value: number): void
    /**
     * Sets the by_hour array in `recur` at once. The array size can be less than I_CAL_BY_HOUR_SIZE. Shorter
     * arrays are terminated with I_CAL_RECURRENCE_ARRAY_MAX value, longer arrays are truncated.
     */
    setByHourArray(values: number[]): void
    /**
     * Sets the by_minute array from #ICalRecurrence at the given index. The array size is I_CAL_BY_MINUTE_SIZE.
     */
    setByMinute(index: number, value: number): void
    /**
     * Sets the by_minute array in `recur` at once. The array size can be less than I_CAL_BY_MINUTE_SIZE. Shorter
     * arrays are terminated with I_CAL_RECURRENCE_ARRAY_MAX value, longer arrays are truncated.
     */
    setByMinuteArray(values: number[]): void
    /**
     * Sets the by_month array from #ICalRecurrence at the given index. The array size is I_CAL_BY_MONTH_SIZE.
     */
    setByMonth(index: number, value: number): void
    /**
     * Sets the by_month array in `recur` at once. The array size can be less than I_CAL_BY_MONTH_SIZE. Shorter
     * arrays are terminated with I_CAL_RECURRENCE_ARRAY_MAX value, longer arrays are truncated.
     */
    setByMonthArray(values: number[]): void
    /**
     * Sets the by_month_day array from #ICalRecurrence at the given index. The array size if I_CAL_BY_MONTHDAY_SIZE.
     */
    setByMonthDay(index: number, value: number): void
    /**
     * Sets the by_month_day array in `recur` at once. The array size can be less than I_CAL_BY_MONTHDAY_SIZE.
     * Shorter arrays are terminated with I_CAL_RECURRENCE_ARRAY_MAX value, longer arrays are truncated.
     */
    setByMonthDayArray(values: number[]): void
    /**
     * Sets the by_second array from #ICalRecurrence at the given index. The array size is I_CAL_BY_SECOND_SIZE.
     */
    setBySecond(index: number, value: number): void
    /**
     * Sets the by_second array in `recur` at once. The array size can be less than I_CAL_BY_SECOND_SIZE. Shorter
     * arrays are terminated with I_CAL_RECURRENCE_ARRAY_MAX value, longer arrays are truncated.
     */
    setBySecondArray(values: number[]): void
    /**
     * Sets the by_set_pos array from #ICalRecurrence at the given index. The array size is I_CAL_BY_SETPOS_SIZE.
     */
    setBySetPos(index: number, value: number): void
    /**
     * Sets the by_set_pos array in `recur` at once. The array size can be less than I_CAL_BY_SETPOS_SIZE. Shorter
     * arrays are terminated with I_CAL_RECURRENCE_ARRAY_MAX value, longer arrays are truncated.
     */
    setBySetPosArray(values: number[]): void
    /**
     * Sets the by_week_no array from #ICalRecurrence at the given index. The array size is I_CAL_BY_WEEKNO_SIZE.
     */
    setByWeekNo(index: number, value: number): void
    /**
     * Sets the by_week_no array in `recur` at once. The array size can be less than I_CAL_BY_WEEKNO_SIZE. Shorter
     * arrays are terminated with I_CAL_RECURRENCE_ARRAY_MAX value, longer arrays are truncated.
     */
    setByWeekNoArray(values: number[]): void
    /**
     * Sets the by_year_day array from #ICalRecurrence at the given index. The array size if I_CAL_BY_YEARDAY_SIZE.
     */
    setByYearDay(index: number, value: number): void
    /**
     * Sets the by_year_day array in `recur` at once. The array size can be less than I_CAL_BY_YEARDAY_SIZE.
     * Shorter arrays are terminated with I_CAL_RECURRENCE_ARRAY_MAX value, longer arrays are truncated.
     */
    setByYearDayArray(values: number[]): void
    /**
     * Sets the count from #ICalRecurrence.
     */
    setCount(count: number): void
    /**
     * Sets the freq from #ICalRecurrence.
     */
    setFreq(freq: RecurrenceFrequency): void
    /**
     * Sets the interval from #ICalRecurrence.
     */
    setInterval(interval: number): void
    /**
     * Sets the until from #ICalRecurrence.
     */
    setUntil(until: Time): void
    /**
     * Sets the week_start from #ICalRecurrence.
     */
    setWeekStart(weekStart: RecurrenceWeekday): void
    /**
     * Converts a #ICalRecurrence to a string.
     */
    toString(): string
    /* Methods of ICalGLib-3.0.ICalGLib.Object */
    /**
     * Adds a `depender` into the list of objects which should not be destroyed before
     * this `iobject`. It's usually used for cases where the `iobject` uses native libical
     * structure from the `depender`. The `depender` is referenced. It's illegal to try
     * to add one `depender` multiple times.
     */
    addDepender(depender: GObject.Object): void
    /**
     * Obtain the `ICalObject:`:always-destroy property value.
     */
    getAlwaysDestroy(): boolean
    /**
     * Obtains whether the native libical structure is a global shared memory,
     * thus should not be destroyed. This can be set only during construction time.
     */
    getIsGlobalMemory(): boolean
    /**
     * Obtain current owner of the native libical structure. The returned pointer,
     * if not NULL, is referenced for thread safety. Unref it with g_object_unref
     * when done with it.
     */
    refOwner(): GObject.Object | null
    /**
     * Removes a `depender` from the list of objects which should not be destroyed before
     * this `iobject,` previously added with i_cal_object_add_depender(). It's illegal to try
     * to remove the `depender` which is not in the internal list.
     */
    removeDepender(depender: GObject.Object): void
    /**
     * Unref and remove the owner.
     */
    removeOwner(): void
    /**
     * Sets the `ICalObject:`:always-destroy property value. When %TRUE, the native
     * libical structure is always freed, even when an owner of the `iobject` is set.
     */
    setAlwaysDestroy(value: boolean): void
    /**
     * Sets a function to be used to destroy the native libical structure.
     */
    setNativeDestroyFunc(nativeDestroyFunc: GLib.DestroyNotify): void
    /**
     * Sets an owner of the native libical structure, that is an object responsible
     * for a destroy of the native libical structure.
     */
    setOwner(owner: GObject.Object): void
    /**
     * Obtain native libical structure pointer associated with this `iobject` and sets the one
     * at `iobject` to NULL, thus it's invalid since now on.
     */
    stealNative(): object | null
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
    connect(sigName: "notify::always-destroy", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::always-destroy", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::always-destroy", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::always-destroy", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::always-destroy", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::native-destroy-func", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::native-destroy-func", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::native-destroy-func", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::native-destroy-func", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::native-destroy-func", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::owner", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::owner", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::owner", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::owner", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::owner", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: Recurrence_ConstructProps)
    _init (config?: Recurrence_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): Recurrence
    static newFromString(str: string): Recurrence
    /**
     * Decodes a day to a weekday in a week.
     */
    static dayDayOfWeek(day: number): RecurrenceWeekday
    /**
     * Decodes a day to a position of the weekday.
     */
    static dayPosition(day: number): number
    /**
     * Converts a string representation to an enum representation for the frequency.
     */
    static frequencyFromString(str: string): RecurrenceFrequency
    /**
     * Converts a enum representation to a string representation for the frequency.
     */
    static frequencyToString(kind: RecurrenceFrequency): string
    /**
     * Decodes a month and check whether it is a leap month.
     */
    static monthIsLeap(month: number): boolean
    static monthMonth(month: number): number
    /**
     * Checks whether rscale is supported.
     */
    static rscaleIsSupported(): boolean
    /**
     * Gets an array of calendars supporting rscale (currently always return NULL).
     */
    static rscaleSupportedCalendars(): Array
    /**
     * Converts a string representation to an enum representation for the skip.
     */
    static skipFromString(str: string): RecurrenceSkip
    /**
     * Converts a enum representation to a string representation for the skip.
     */
    static skipToString(kind: RecurrenceSkip): string
    /**
     * Converts a string representation to an enum representation for the weekday.
     */
    static weekdayFromString(str: string): RecurrenceWeekday
    /**
     * Converts a enum representation to a string representation for the weekday.
     */
    static weekdayToString(kind: RecurrenceWeekday): string
    static $gtype: GObject.Type
}
interface Reqstat_ConstructProps extends Object_ConstructProps {
}
class Reqstat {
    /* Properties of ICalGLib-3.0.ICalGLib.Object */
    /**
     * Whether free the native libical structure on #ICalObject's finalize even
     * if the object has set an owner.
     */
    alwaysDestroy: boolean
    /**
     * GDestroyNotify function to use to destroy the native libical pointer.
     */
    nativeDestroyFunc: object
    /**
     * Owner of the native libical structure. If set, then it is
     * responsible for a free of the native libical structure.
     */
    owner: GObject.Object
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of ICalGLib-3.0.ICalGLib.Reqstat */
    /**
     * Gets the code of #ICalReqstat.
     */
    getCode(): RequestStatus
    /**
     * Gets the debug of #ICalReqstat.
     */
    getDebug(): string
    /**
     * Gets the desc of #ICalReqstat.
     */
    getDesc(): string
    /**
     * Sets the code of #ICalReqstat.
     */
    setCode(code: RequestStatus): void
    /**
     * Converts #ICalReqstat to a string representation.
     */
    toString(): string
    /* Methods of ICalGLib-3.0.ICalGLib.Object */
    /**
     * Adds a `depender` into the list of objects which should not be destroyed before
     * this `iobject`. It's usually used for cases where the `iobject` uses native libical
     * structure from the `depender`. The `depender` is referenced. It's illegal to try
     * to add one `depender` multiple times.
     */
    addDepender(depender: GObject.Object): void
    /**
     * Obtain the `ICalObject:`:always-destroy property value.
     */
    getAlwaysDestroy(): boolean
    /**
     * Obtains whether the native libical structure is a global shared memory,
     * thus should not be destroyed. This can be set only during construction time.
     */
    getIsGlobalMemory(): boolean
    /**
     * Obtain current owner of the native libical structure. The returned pointer,
     * if not NULL, is referenced for thread safety. Unref it with g_object_unref
     * when done with it.
     */
    refOwner(): GObject.Object | null
    /**
     * Removes a `depender` from the list of objects which should not be destroyed before
     * this `iobject,` previously added with i_cal_object_add_depender(). It's illegal to try
     * to remove the `depender` which is not in the internal list.
     */
    removeDepender(depender: GObject.Object): void
    /**
     * Unref and remove the owner.
     */
    removeOwner(): void
    /**
     * Sets the `ICalObject:`:always-destroy property value. When %TRUE, the native
     * libical structure is always freed, even when an owner of the `iobject` is set.
     */
    setAlwaysDestroy(value: boolean): void
    /**
     * Sets a function to be used to destroy the native libical structure.
     */
    setNativeDestroyFunc(nativeDestroyFunc: GLib.DestroyNotify): void
    /**
     * Sets an owner of the native libical structure, that is an object responsible
     * for a destroy of the native libical structure.
     */
    setOwner(owner: GObject.Object): void
    /**
     * Obtain native libical structure pointer associated with this `iobject` and sets the one
     * at `iobject` to NULL, thus it's invalid since now on.
     */
    stealNative(): object | null
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
    connect(sigName: "notify::always-destroy", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::always-destroy", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::always-destroy", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::always-destroy", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::always-destroy", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::native-destroy-func", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::native-destroy-func", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::native-destroy-func", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::native-destroy-func", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::native-destroy-func", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::owner", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::owner", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::owner", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::owner", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::owner", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: Reqstat_ConstructProps)
    _init (config?: Reqstat_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static newFromString(str: string): Reqstat
    static $gtype: GObject.Type
}
interface Time_ConstructProps extends Object_ConstructProps {
}
class Time {
    /* Properties of ICalGLib-3.0.ICalGLib.Object */
    /**
     * Whether free the native libical structure on #ICalObject's finalize even
     * if the object has set an owner.
     */
    alwaysDestroy: boolean
    /**
     * GDestroyNotify function to use to destroy the native libical pointer.
     */
    nativeDestroyFunc: object
    /**
     * Owner of the native libical structure. If set, then it is
     * responsible for a free of the native libical structure.
     */
    owner: GObject.Object
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of ICalGLib-3.0.ICalGLib.Time */
    /**
     * Adds a time duration on the time.
     */
    add(d: Duration): Time
    /**
     * Adds or subtracts a number of days, hours, minutes and seconds from `tt`.
     */
    adjust(days: number, hours: number, minutes: number, seconds: number): void
    /**
     * Returns a string represention of the time, in RFC2445 format.
     */
    asIcalString(): string
    /**
     * Returns the time as seconds past the UNIX epoch.
     */
    asTimet(): number
    /**
     * Returns the time as seconds past the UNIX epoch, using timezones.
     */
    asTimetWithZone(zone?: Timezone | null): number
    /**
     * Creates a new #ICalTime, copy of `timetype`.
     */
    clone(): Time
    /**
     * Returns -1, 0, or 1 to indicate that a less than b, a==b or a larger than b.
     */
    compare(b: Time): number
    /**
     * Like i_cal_time_compare(), but only use the date parts.
     */
    compareDateOnly(b: Time): number
    /**
     * Like i_cal_time_compare_tz(), but only use the date parts; accepts timezone.
     */
    compareDateOnlyTz(b: Time, zone?: Timezone | null): number
    /**
     * Convert time from one timezone to another.
     */
    convertTimezone(fromZone?: Timezone | null, toZone?: Timezone | null): void
    /**
     * Converts `tt` to `zone` and return new #ICalTime object.
     */
    convertToZone(zone?: Timezone | null): Time
    /**
     * Converts `tt` to `zone` and store the result into `tt`.
     */
    convertToZoneInplace(zone?: Timezone | null): void
    /**
     * Returns the day of the week of the given time. Sunday is 1.
     */
    dayOfWeek(): number
    /**
     * Returns the day of the year of the given time.
     */
    dayOfYear(): number
    /**
     * Gets the year/month/date parts of the `timetype` in one call.
     */
    getDate(): [ /* year */ number | null, /* month */ number | null, /* day */ number | null ]
    /**
     * Gets the day of #ICalTime.
     */
    getDay(): number
    /**
     * Gets the hour of #ICalTime.
     */
    getHour(): number
    /**
     * Gets the minute of #ICalTime.
     */
    getMinute(): number
    /**
     * Gets the month of #ICalTime.
     */
    getMonth(): number
    /**
     * Gets the second of #ICalTime.
     */
    getSecond(): number
    /**
     * Gets the hour/minute/second parts of the `timetype` in one call.
     */
    getTime(): [ /* hour */ number | null, /* minute */ number | null, /* second */ number | null ]
    /**
     * Returns the timezone, the #ICalTimezone object is cached and can be either unreferenced once the last
     * instance is used or can be kept until i_cal_object_free_global_objects() is called (usually at the very
     * end of the program).
     */
    getTimezone(): Timezone
    /**
     * Returns the tzid, or NULL for a floating time.
     */
    getTzid(): string | null
    /**
     * Gets the year of #ICalTime.
     */
    getYear(): number
    /**
     * Returns true if time is of DATE type, false if DATE-TIME.
     */
    isDate(): boolean
    /**
     * Gets the is_daylight of #ICalTime.
     */
    isDaylight(): boolean
    /**
     * Returns true if the time is null.
     */
    isNullTime(): boolean
    /**
     * Returns true if time is relative to UTC zone.
     */
    isUtc(): boolean
    /**
     * Returns true if the time is null.
     */
    isValidTime(): boolean
    /**
     * Normalizes the icaltime, so that all fields are within the normal range.
     */
    normalize(): Time
    /**
     * Normalizes the `tt,` so that all fields are within the normal range.
     */
    normalizeInplace(): void
    /**
     * Sets the year/month/date parts of the `timetype` in one call. This doesn't verify validity of the given
     * date.
     */
    setDate(year: number, month: number, day: number): void
    /**
     * Sets the day of #ICalTime.
     */
    setDay(day: number): void
    /**
     * Sets the hour of #ICalTime.
     */
    setHour(hour: number): void
    /**
     * Sets the is_date of #ICalTime.
     */
    setIsDate(isDate: boolean): void
    /**
     * Sets the is_daylight of #ICalTime.
     */
    setIsDaylight(isDaylight: boolean): void
    /**
     * Sets the minute of #ICalTime.
     */
    setMinute(minute: number): void
    /**
     * Sets the month of #ICalTime.
     */
    setMonth(month: number): void
    /**
     * Sets the second of #ICalTime.
     */
    setSecond(second: number): void
    /**
     * Sets the hour/minute/second parts of the `timetype` in one call. This doesn't verify validity of the given
     * time.
     */
    setTime(hour: number, minute: number, second: number): void
    /**
     * Sets the timezone of the `tt`.
     */
    setTimezone(zone?: Timezone | null): void
    /**
     * Sets the year of #ICalTime.
     */
    setYear(year: number): void
    /**
     * Returns the day of the year for the first day of the week that the given time is within.
     */
    startDoyWeek(fdow: number): number
    /**
     * Gets the duration between two time.
     */
    subtract(t2: Time): Duration
    /**
     * Returns the week number for the week the given time is within.
     */
    weekNumber(): number
    /* Methods of ICalGLib-3.0.ICalGLib.Object */
    /**
     * Adds a `depender` into the list of objects which should not be destroyed before
     * this `iobject`. It's usually used for cases where the `iobject` uses native libical
     * structure from the `depender`. The `depender` is referenced. It's illegal to try
     * to add one `depender` multiple times.
     */
    addDepender(depender: GObject.Object): void
    /**
     * Obtain the `ICalObject:`:always-destroy property value.
     */
    getAlwaysDestroy(): boolean
    /**
     * Obtains whether the native libical structure is a global shared memory,
     * thus should not be destroyed. This can be set only during construction time.
     */
    getIsGlobalMemory(): boolean
    /**
     * Obtain current owner of the native libical structure. The returned pointer,
     * if not NULL, is referenced for thread safety. Unref it with g_object_unref
     * when done with it.
     */
    refOwner(): GObject.Object | null
    /**
     * Removes a `depender` from the list of objects which should not be destroyed before
     * this `iobject,` previously added with i_cal_object_add_depender(). It's illegal to try
     * to remove the `depender` which is not in the internal list.
     */
    removeDepender(depender: GObject.Object): void
    /**
     * Unref and remove the owner.
     */
    removeOwner(): void
    /**
     * Sets the `ICalObject:`:always-destroy property value. When %TRUE, the native
     * libical structure is always freed, even when an owner of the `iobject` is set.
     */
    setAlwaysDestroy(value: boolean): void
    /**
     * Sets a function to be used to destroy the native libical structure.
     */
    setNativeDestroyFunc(nativeDestroyFunc: GLib.DestroyNotify): void
    /**
     * Sets an owner of the native libical structure, that is an object responsible
     * for a destroy of the native libical structure.
     */
    setOwner(owner: GObject.Object): void
    /**
     * Obtain native libical structure pointer associated with this `iobject` and sets the one
     * at `iobject` to NULL, thus it's invalid since now on.
     */
    stealNative(): object | null
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
    connect(sigName: "notify::always-destroy", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::always-destroy", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::always-destroy", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::always-destroy", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::always-destroy", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::native-destroy-func", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::native-destroy-func", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::native-destroy-func", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::native-destroy-func", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::native-destroy-func", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::owner", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::owner", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::owner", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::owner", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::owner", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: Time_ConstructProps)
    _init (config?: Time_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): Time
    static newCurrentWithZone(zone?: Timezone | null): Time
    static newFromDayOfYear(day: number, year: number): Time
    static newFromString(str: string): Time
    static newFromTimetWithZone(v: number, isDate: number, zone?: Timezone | null): Time
    static newNullDate(): Time
    static newNullTime(): Time
    static newToday(): Time
    /**
     * Gets the number of days in the target month in the target year.
     */
    static daysInMonth(month: number, year: number): number
    /**
     * Returns the number of days in this year.
     */
    static daysInYear(year: number): number
    /**
     * Checks whether a year is a leap year.
     */
    static daysIsLeapYear(year: number): boolean
    /**
     * Applies a list of timezone changes on the array of components until the end year.
     */
    static timezoneExpandVtimezone(comp: Component, endYear: number, changes: Array): void
    static $gtype: GObject.Type
}
interface TimeSpan_ConstructProps extends Object_ConstructProps {
}
class TimeSpan {
    /* Properties of ICalGLib-3.0.ICalGLib.Object */
    /**
     * Whether free the native libical structure on #ICalObject's finalize even
     * if the object has set an owner.
     */
    alwaysDestroy: boolean
    /**
     * GDestroyNotify function to use to destroy the native libical pointer.
     */
    nativeDestroyFunc: object
    /**
     * Owner of the native libical structure. If set, then it is
     * responsible for a free of the native libical structure.
     */
    owner: GObject.Object
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of ICalGLib-3.0.ICalGLib.TimeSpan */
    /**
     * Creates a new #ICalTimeSpan, clone of `src`. Free it with g_object_unref(), when no longer needed.
     */
    clone(): TimeSpan
    /**
     * Checks whether one #ICalTimeSpan is contained in another #ICalTimeSpan.
     */
    contains(container: TimeSpan): number
    /**
     * Gets the end of #ICalTimeSpan.
     */
    getEnd(): number
    /**
     * Gets the is_busy of #ICalTimeSpan.
     */
    getIsBusy(): boolean
    /**
     * Gets the start of #ICalTimeSpan.
     */
    getStart(): number
    /**
     * Checks whether two spans overlap.
     */
    overlaps(s2: TimeSpan): number
    /**
     * Sets the end of #ICalTimeSpan.
     */
    setEnd(end: number): void
    /**
     * Sets the is_busy of #ICalTimeSpan.
     */
    setIsBusy(isBusy: boolean): void
    /**
     * Sets the start of #ICalTimeSpan.
     */
    setStart(start: number): void
    /* Methods of ICalGLib-3.0.ICalGLib.Object */
    /**
     * Adds a `depender` into the list of objects which should not be destroyed before
     * this `iobject`. It's usually used for cases where the `iobject` uses native libical
     * structure from the `depender`. The `depender` is referenced. It's illegal to try
     * to add one `depender` multiple times.
     */
    addDepender(depender: GObject.Object): void
    /**
     * Obtain the `ICalObject:`:always-destroy property value.
     */
    getAlwaysDestroy(): boolean
    /**
     * Obtains whether the native libical structure is a global shared memory,
     * thus should not be destroyed. This can be set only during construction time.
     */
    getIsGlobalMemory(): boolean
    /**
     * Obtain current owner of the native libical structure. The returned pointer,
     * if not NULL, is referenced for thread safety. Unref it with g_object_unref
     * when done with it.
     */
    refOwner(): GObject.Object | null
    /**
     * Removes a `depender` from the list of objects which should not be destroyed before
     * this `iobject,` previously added with i_cal_object_add_depender(). It's illegal to try
     * to remove the `depender` which is not in the internal list.
     */
    removeDepender(depender: GObject.Object): void
    /**
     * Unref and remove the owner.
     */
    removeOwner(): void
    /**
     * Sets the `ICalObject:`:always-destroy property value. When %TRUE, the native
     * libical structure is always freed, even when an owner of the `iobject` is set.
     */
    setAlwaysDestroy(value: boolean): void
    /**
     * Sets a function to be used to destroy the native libical structure.
     */
    setNativeDestroyFunc(nativeDestroyFunc: GLib.DestroyNotify): void
    /**
     * Sets an owner of the native libical structure, that is an object responsible
     * for a destroy of the native libical structure.
     */
    setOwner(owner: GObject.Object): void
    /**
     * Obtain native libical structure pointer associated with this `iobject` and sets the one
     * at `iobject` to NULL, thus it's invalid since now on.
     */
    stealNative(): object | null
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
    connect(sigName: "notify::always-destroy", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::always-destroy", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::always-destroy", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::always-destroy", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::always-destroy", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::native-destroy-func", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::native-destroy-func", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::native-destroy-func", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::native-destroy-func", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::native-destroy-func", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::owner", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::owner", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::owner", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::owner", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::owner", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: TimeSpan_ConstructProps)
    _init (config?: TimeSpan_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(dtstart: Time, dtend: Time, isBusy: number): TimeSpan
    static newTimet(start: number, end: number, isBusy: boolean): TimeSpan
    static $gtype: GObject.Type
}
interface Timezone_ConstructProps extends Object_ConstructProps {
}
class Timezone {
    /* Properties of ICalGLib-3.0.ICalGLib.Object */
    /**
     * Whether free the native libical structure on #ICalObject's finalize even
     * if the object has set an owner.
     */
    alwaysDestroy: boolean
    /**
     * GDestroyNotify function to use to destroy the native libical pointer.
     */
    nativeDestroyFunc: object
    /**
     * Owner of the native libical structure. If set, then it is
     * responsible for a free of the native libical structure.
     */
    owner: GObject.Object
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of ICalGLib-3.0.ICalGLib.Timezone */
    /**
     * The clone method for #ICalTimezone.
     */
    copy(): Timezone
    /**
     * Outputs a list of timezone changes for the given timezone to the given file, up to the maximum year given.
     */
    dumpChanges(maxYear: number, fp?: object | null): number
    /**
     * Returns the VTIMEZONE component of a timezone.
     */
    getComponent(): Component
    /**
     * Gets the display name of the `zone`.
     */
    getDisplayName(): string
    /**
     * Returns the latitude of a builtin timezone.
     */
    getLatitude(): number
    /**
     * Returns the city name of a timezone, or %NULL, when none is set or when `zone` is also %NULL.
     */
    getLocation(): string | null
    /**
     * Returns the longitude of a builtin timezone.
     */
    getLongitude(): number
    /**
     * Returns the TZID of a timezone, or %NULL, when none is set or when `zone` is also %NULL.
     */
    getTzid(): string | null
    /**
     * Returns the TZNAME properties used in the latest STANDARD and DAYLIGHT components. If they are the same
     * it will return just one, e.g. "LMT". If they are different it will format them like "EST/EDT". Note that
     * this may also return NULL.
     */
    getTznames(): string | null
    /**
     * Calculates the UTC offset of a given local time in the given timezone.  It is the number of seconds to
     * add to UTC to get local time.  The is_daylight flag is set to 1 if the time is in daylight-savings time.
     */
    getUtcOffset(tt?: Time | null): [ /* returnType */ number, /* isDaylight */ number | null ]
    /**
     * Calculates the UTC offset of a given UTC time in the given timezone.  It is the number of seconds to
     * add to UTC to get local time.  The is_daylight flag is set to 1 if the time is in daylight-savings time.
     */
    getUtcOffsetOfUtcTime(tt: Time): [ /* returnType */ number, /* isDaylight */ number | null ]
    /**
     * Sets the VTIMEZONE component of #ICalTimezone, initializing the tzid, location and tzname fields. It
     * returns 1 on success or 0 on failure, i.e. no TZID was found.
     * 
     * `note` The `zone` assumes ownership
     * of the `comp,` thus make sure you pass an unowned #ICalComponent.
     */
    setComponent(comp: Component): number
    /* Methods of ICalGLib-3.0.ICalGLib.Object */
    /**
     * Adds a `depender` into the list of objects which should not be destroyed before
     * this `iobject`. It's usually used for cases where the `iobject` uses native libical
     * structure from the `depender`. The `depender` is referenced. It's illegal to try
     * to add one `depender` multiple times.
     */
    addDepender(depender: GObject.Object): void
    /**
     * Obtain the `ICalObject:`:always-destroy property value.
     */
    getAlwaysDestroy(): boolean
    /**
     * Obtains whether the native libical structure is a global shared memory,
     * thus should not be destroyed. This can be set only during construction time.
     */
    getIsGlobalMemory(): boolean
    /**
     * Obtain current owner of the native libical structure. The returned pointer,
     * if not NULL, is referenced for thread safety. Unref it with g_object_unref
     * when done with it.
     */
    refOwner(): GObject.Object | null
    /**
     * Removes a `depender` from the list of objects which should not be destroyed before
     * this `iobject,` previously added with i_cal_object_add_depender(). It's illegal to try
     * to remove the `depender` which is not in the internal list.
     */
    removeDepender(depender: GObject.Object): void
    /**
     * Unref and remove the owner.
     */
    removeOwner(): void
    /**
     * Sets the `ICalObject:`:always-destroy property value. When %TRUE, the native
     * libical structure is always freed, even when an owner of the `iobject` is set.
     */
    setAlwaysDestroy(value: boolean): void
    /**
     * Sets a function to be used to destroy the native libical structure.
     */
    setNativeDestroyFunc(nativeDestroyFunc: GLib.DestroyNotify): void
    /**
     * Sets an owner of the native libical structure, that is an object responsible
     * for a destroy of the native libical structure.
     */
    setOwner(owner: GObject.Object): void
    /**
     * Obtain native libical structure pointer associated with this `iobject` and sets the one
     * at `iobject` to NULL, thus it's invalid since now on.
     */
    stealNative(): object | null
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
    connect(sigName: "notify::always-destroy", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::always-destroy", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::always-destroy", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::always-destroy", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::always-destroy", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::native-destroy-func", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::native-destroy-func", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::native-destroy-func", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::native-destroy-func", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::native-destroy-func", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::owner", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::owner", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::owner", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::owner", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::owner", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: Timezone_ConstructProps)
    _init (config?: Timezone_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static arrayNew(): Timezone
    static new(): Timezone
    /**
     * Populate the array of timezones with a component.
     * 
     * `note` The `timezones` assumes ownership of the
     * `child,` thus make sure you pass an unowned #ICalComponent.
     */
    static arrayAppendFromVtimezone(timezones: Array, child: Component): void
    /**
     * Gets the #ICalTimezone at specified position in array.
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
     */
    static getBuiltinTimezone(location?: string | null): Timezone | null
    /**
     * Returns a single builtin timezone, given its offset.
     */
    static getBuiltinTimezoneFromOffset(offset: number, tzname?: string | null): Timezone
    /**
     * Returns a single builtin timezone, given its TZID.
     */
    static getBuiltinTimezoneFromTzid(tzid?: string | null): Timezone
    /**
     * Returns a list of builtin timezones.
     */
    static getBuiltinTimezones(): Array
    /**
     * Gets whether to use builtin timezones files.
     */
    static getBuiltinTzdata(): boolean
    /**
     * Gets the location of the vtimezone in component.
     */
    static getLocationFromVtimezone(component: Component): string
    /**
     * Gets the name of the vtimezone in component.
     */
    static getTznamesFromVtimezone(component: Component): string
    /**
     * Returns the UTC timezone.
     */
    static getUtcTimezone(): Timezone
    /**
     * Frees memory dedicated to the zonefile directory.
     */
    static releaseZoneTab(): void
    /**
     * Sets whether to use builtin timezones files.
     */
    static setBuiltinTzdata(set: boolean): void
    /**
     * Sets the prefix to be used for tzid's generated from system tzdata. Must be globally unique (such as
     * a domain name owned by the developer of the calling application), and begin and end with forward slashes.
     * Do not change or de-allocate the string buffer after calling this.
     */
    static setTzidPrefix(newPrefix: string): void
    /**
     * Sets the directory to look for the zonefiles.
     */
    static setZoneDirectory(path: string): void
    static $gtype: GObject.Type
}
interface Trigger_ConstructProps extends Object_ConstructProps {
}
class Trigger {
    /* Properties of ICalGLib-3.0.ICalGLib.Object */
    /**
     * Whether free the native libical structure on #ICalObject's finalize even
     * if the object has set an owner.
     */
    alwaysDestroy: boolean
    /**
     * GDestroyNotify function to use to destroy the native libical pointer.
     */
    nativeDestroyFunc: object
    /**
     * Owner of the native libical structure. If set, then it is
     * responsible for a free of the native libical structure.
     */
    owner: GObject.Object
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of ICalGLib-3.0.ICalGLib.Trigger */
    /**
     * Gets the duration from #ICalTrigger.
     */
    getDuration(): Duration
    /**
     * Gets the time from #ICalTrigger.
     */
    getTime(): Time
    /**
     * Checks if a #ICalTrigger is a bad trigger.
     */
    isBadTrigger(): boolean
    /**
     * Checks if a #ICalTrigger is a null trigger.
     */
    isNullTrigger(): boolean
    /**
     * Sets the duration from #ICalTrigger.
     */
    setDuration(duration: Duration): void
    /**
     * Sets the time from #ICalTrigger.
     */
    setTime(time: Time): void
    /* Methods of ICalGLib-3.0.ICalGLib.Object */
    /**
     * Adds a `depender` into the list of objects which should not be destroyed before
     * this `iobject`. It's usually used for cases where the `iobject` uses native libical
     * structure from the `depender`. The `depender` is referenced. It's illegal to try
     * to add one `depender` multiple times.
     */
    addDepender(depender: GObject.Object): void
    /**
     * Obtain the `ICalObject:`:always-destroy property value.
     */
    getAlwaysDestroy(): boolean
    /**
     * Obtains whether the native libical structure is a global shared memory,
     * thus should not be destroyed. This can be set only during construction time.
     */
    getIsGlobalMemory(): boolean
    /**
     * Obtain current owner of the native libical structure. The returned pointer,
     * if not NULL, is referenced for thread safety. Unref it with g_object_unref
     * when done with it.
     */
    refOwner(): GObject.Object | null
    /**
     * Removes a `depender` from the list of objects which should not be destroyed before
     * this `iobject,` previously added with i_cal_object_add_depender(). It's illegal to try
     * to remove the `depender` which is not in the internal list.
     */
    removeDepender(depender: GObject.Object): void
    /**
     * Unref and remove the owner.
     */
    removeOwner(): void
    /**
     * Sets the `ICalObject:`:always-destroy property value. When %TRUE, the native
     * libical structure is always freed, even when an owner of the `iobject` is set.
     */
    setAlwaysDestroy(value: boolean): void
    /**
     * Sets a function to be used to destroy the native libical structure.
     */
    setNativeDestroyFunc(nativeDestroyFunc: GLib.DestroyNotify): void
    /**
     * Sets an owner of the native libical structure, that is an object responsible
     * for a destroy of the native libical structure.
     */
    setOwner(owner: GObject.Object): void
    /**
     * Obtain native libical structure pointer associated with this `iobject` and sets the one
     * at `iobject` to NULL, thus it's invalid since now on.
     */
    stealNative(): object | null
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
    connect(sigName: "notify::always-destroy", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::always-destroy", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::always-destroy", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::always-destroy", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::always-destroy", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::native-destroy-func", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::native-destroy-func", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::native-destroy-func", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::native-destroy-func", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::native-destroy-func", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::owner", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::owner", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::owner", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::owner", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::owner", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: Trigger_ConstructProps)
    _init (config?: Trigger_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static newFromInt(reltime: number): Trigger
    static newFromString(str: string): Trigger
    static $gtype: GObject.Type
}
interface Value_ConstructProps extends Object_ConstructProps {
}
class Value {
    /* Properties of ICalGLib-3.0.ICalGLib.Object */
    /**
     * Whether free the native libical structure on #ICalObject's finalize even
     * if the object has set an owner.
     */
    alwaysDestroy: boolean
    /**
     * GDestroyNotify function to use to destroy the native libical pointer.
     */
    nativeDestroyFunc: object
    /**
     * Owner of the native libical structure. If set, then it is
     * responsible for a free of the native libical structure.
     */
    owner: GObject.Object
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of ICalGLib-3.0.ICalGLib.Value */
    /**
     * Converts the #ICalValue to a string.
     */
    asIcalString(): string
    /**
     * Deeply clone a #ICalValue.
     */
    clone(): Value
    /**
     * Compares two #ICalValue.
     */
    compare(b: Value): ParameterXliccomparetype
    /**
     * Gets the action of #ICalValue.
     */
    getAction(): PropertyAction
    /**
     * Gets the attach of #ICalValue.
     */
    getAttach(): Attach | null
    /**
     * Gets the binary of #ICalValue.
     */
    getBinary(): string | null
    /**
     * Gets the boolean of #ICalValue.
     */
    getBoolean(): number
    /**
     * Gets the busytype of #ICalValue.
     */
    getBusytype(): PropertyBusytype
    /**
     * Gets the caladdress of #ICalValue.
     */
    getCaladdress(): string | null
    /**
     * Gets the carlevel of #ICalValue.
     */
    getCarlevel(): PropertyCarlevel
    /**
     * Gets the class of #ICalValue.
     */
    getClass(): Property_Class
    /**
     * Gets the cmd of #ICalValue.
     */
    getCmd(): PropertyCmd
    /**
     * Gets the date of #ICalValue.
     */
    getDate(): Time | null
    /**
     * Gets the datetime of #ICalValue.
     */
    getDatetime(): Time | null
    /**
     * Gets the datetimedate (DATE-TIME or DATE) of #ICalValue.
     */
    getDatetimedate(): Time | null
    /**
     * Gets the datetimeperiod of #ICalValue.
     */
    getDatetimeperiod(): Datetimeperiod | null
    /**
     * Gets the duration of #ICalValue.
     */
    getDuration(): Duration | null
    /**
     * Gets the float of #ICalValue.
     */
    getFloat(): number
    /**
     * Gets the geo of #ICalValue.
     */
    getGeo(): Geo | null
    /**
     * Gets the integer of #ICalValue.
     */
    getInteger(): number
    /**
     * Gets the method of #ICalValue.
     */
    getMethod(): PropertyMethod
    /**
     * Gets the parent #ICalProperty of the specified #ICalValue.
     */
    getParent(): Property | null
    /**
     * Gets the period of #ICalValue.
     */
    getPeriod(): Period | null
    /**
     * Gets the pollcompletion of #ICalValue.
     */
    getPollcompletion(): PropertyPollcompletion
    /**
     * Gets the pollmode of #ICalValue.
     */
    getPollmode(): PropertyPollmode
    /**
     * Gets the query of #ICalValue.
     */
    getQuery(): string | null
    /**
     * Gets the querylevel of #ICalValue.
     */
    getQuerylevel(): PropertyQuerylevel
    /**
     * Gets the recur of #ICalValue.
     */
    getRecur(): Recurrence | null
    /**
     * Gets the requeststatus of #ICalValue.
     */
    getRequeststatus(): Reqstat | null
    /**
     * Gets the status of #ICalValue.
     */
    getStatus(): PropertyStatus
    /**
     * Gets the string of #ICalValue.
     */
    getString(): string | null
    /**
     * Gets the taskmode of #ICalValue.
     */
    getTaskmode(): PropertyTaskmode
    /**
     * Gets the text of #ICalValue.
     */
    getText(): string | null
    /**
     * Gets the transp of #ICalValue.
     */
    getTransp(): PropertyTransp
    /**
     * Gets the trigger of #ICalValue.
     */
    getTrigger(): Trigger | null
    /**
     * Gets the uri of #ICalValue.
     */
    getUri(): string | null
    /**
     * Gets the utcoffset of #ICalValue.
     */
    getUtcoffset(): number
    /**
     * Gets the x of #ICalValue.
     */
    getX(): string | null
    /**
     * Gets the xlicclass of #ICalValue.
     */
    getXlicclass(): PropertyXlicclass
    /**
     * Checks if #ICalValue is valid.
     */
    isValid(): boolean
    /**
     * Gets the kind of #ICalValue.
     */
    isa(): ValueKind
    /**
     * Checks whether the native part of #ICalValue is an icalvalue.
     */
    isaValue(): number
    /**
     * Resets the kind of #ICalValue.
     */
    resetKind(): void
    /**
     * Sets the action in the #ICalValue.
     */
    setAction(v: PropertyAction): void
    /**
     * Sets the attach in the #ICalValue.
     */
    setAttach(v: Attach): void
    /**
     * Sets the binary in the #ICalValue.
     */
    setBinary(v: string): void
    /**
     * Sets the boolean in the #ICalValue.
     */
    setBoolean(v: number): void
    /**
     * Sets the busytype in the #ICalValue.
     */
    setBusytype(v: PropertyBusytype): void
    /**
     * Sets the caladdress in the #ICalValue.
     */
    setCaladdress(v: string): void
    /**
     * Sets the carlevel in the #ICalValue.
     */
    setCarlevel(v: PropertyCarlevel): void
    /**
     * Sets the class in the #ICalValue.
     */
    setClass(v: Property_Class): void
    /**
     * Sets the cmd in the #ICalValue.
     */
    setCmd(v: PropertyCmd): void
    /**
     * Sets the date in the #ICalValue.
     */
    setDate(v: Time): void
    /**
     * Sets the datetime in the #ICalValue.
     */
    setDatetime(v: Time): void
    /**
     * Sets the datetimedate (DATE-TIME or DATE) in the #ICalValue.
     */
    setDatetimedate(v: Time): void
    /**
     * Sets the datetimeperiod in the #ICalValue.
     */
    setDatetimeperiod(v: Datetimeperiod): void
    /**
     * Sets the duration in the #ICalValue.
     */
    setDuration(v: Duration): void
    /**
     * Sets the float in the #ICalValue.
     */
    setFloat(v: number): void
    /**
     * Sets the geo in the #ICalValue.
     */
    setGeo(v: Geo): void
    /**
     * Sets the integer in the #ICalValue.
     */
    setInteger(v: number): void
    /**
     * Sets the method in the #ICalValue.
     */
    setMethod(v: PropertyMethod): void
    /**
     * Sets the parent property of a value.
     */
    setParent(property?: Property | null): void
    /**
     * Sets the period in the #ICalValue.
     */
    setPeriod(v: Period): void
    /**
     * Sets the pollcompletion in the #ICalValue.
     */
    setPollcompletion(v: PropertyPollcompletion): void
    /**
     * Sets the pollmode in the #ICalValue.
     */
    setPollmode(v: PropertyPollmode): void
    /**
     * Sets the query in the #ICalValue.
     */
    setQuery(v: string): void
    /**
     * Sets the querylevel in the #ICalValue.
     */
    setQuerylevel(v: PropertyQuerylevel): void
    /**
     * Sets the recur in the #ICalValue.
     */
    setRecur(v: Recurrence): void
    /**
     * Sets the requeststatus in the #ICalValue.
     */
    setRequeststatus(v: Reqstat): void
    /**
     * Sets the status in the #ICalValue.
     */
    setStatus(v: PropertyStatus): void
    /**
     * Sets the string in the #ICalValue.
     */
    setString(v: string): void
    /**
     * Sets the taskmode in the #ICalValue.
     */
    setTaskmode(v: PropertyTaskmode): void
    /**
     * Sets the text in the #ICalValue.
     */
    setText(v: string): void
    /**
     * Sets the transp in the #ICalValue.
     */
    setTransp(v: PropertyTransp): void
    /**
     * Sets the trigger in the #ICalValue.
     */
    setTrigger(v: Trigger): void
    /**
     * Sets the uri in the #ICalValue.
     */
    setUri(v: string): void
    /**
     * Sets the utcoffset in the #ICalValue.
     */
    setUtcoffset(v: number): void
    /**
     * Sets the x in the #ICalValue.
     */
    setX(v: string): void
    /**
     * Sets the xlicclass in the #ICalValue.
     */
    setXlicclass(v: PropertyXlicclass): void
    /* Methods of ICalGLib-3.0.ICalGLib.Object */
    /**
     * Adds a `depender` into the list of objects which should not be destroyed before
     * this `iobject`. It's usually used for cases where the `iobject` uses native libical
     * structure from the `depender`. The `depender` is referenced. It's illegal to try
     * to add one `depender` multiple times.
     */
    addDepender(depender: GObject.Object): void
    /**
     * Obtain the `ICalObject:`:always-destroy property value.
     */
    getAlwaysDestroy(): boolean
    /**
     * Obtains whether the native libical structure is a global shared memory,
     * thus should not be destroyed. This can be set only during construction time.
     */
    getIsGlobalMemory(): boolean
    /**
     * Obtain current owner of the native libical structure. The returned pointer,
     * if not NULL, is referenced for thread safety. Unref it with g_object_unref
     * when done with it.
     */
    refOwner(): GObject.Object | null
    /**
     * Removes a `depender` from the list of objects which should not be destroyed before
     * this `iobject,` previously added with i_cal_object_add_depender(). It's illegal to try
     * to remove the `depender` which is not in the internal list.
     */
    removeDepender(depender: GObject.Object): void
    /**
     * Unref and remove the owner.
     */
    removeOwner(): void
    /**
     * Sets the `ICalObject:`:always-destroy property value. When %TRUE, the native
     * libical structure is always freed, even when an owner of the `iobject` is set.
     */
    setAlwaysDestroy(value: boolean): void
    /**
     * Sets a function to be used to destroy the native libical structure.
     */
    setNativeDestroyFunc(nativeDestroyFunc: GLib.DestroyNotify): void
    /**
     * Sets an owner of the native libical structure, that is an object responsible
     * for a destroy of the native libical structure.
     */
    setOwner(owner: GObject.Object): void
    /**
     * Obtain native libical structure pointer associated with this `iobject` and sets the one
     * at `iobject` to NULL, thus it's invalid since now on.
     */
    stealNative(): object | null
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
    connect(sigName: "notify::always-destroy", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::always-destroy", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::always-destroy", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::always-destroy", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::always-destroy", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::native-destroy-func", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::native-destroy-func", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::native-destroy-func", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::native-destroy-func", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::native-destroy-func", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::owner", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::owner", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::owner", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::owner", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::owner", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: Value_ConstructProps)
    _init (config?: Value_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(kind: ValueKind): Value
    static newAction(v: PropertyAction): Value
    static newAttach(v: Attach): Value
    static newBinary(v: string): Value
    static newBoolean(v: number): Value
    static newBusytype(v: PropertyBusytype): Value
    static newCaladdress(v: string): Value
    static newCarlevel(v: PropertyCarlevel): Value
    static newClass(v: Property_Class): Value
    static newCmd(v: PropertyCmd): Value
    static newDate(v: Time): Value
    static newDatetime(v: Time): Value
    static newDatetimedate(v: Time): Value
    static newDatetimeperiod(v: Datetimeperiod): Value
    static newDuration(v: Duration): Value
    static newFloat(v: number): Value
    static newFromString(kind: ValueKind, str: string): Value
    static newGeo(v: Geo): Value
    static newInteger(v: number): Value
    static newMethod(v: PropertyMethod): Value
    static newPeriod(v: Period): Value
    static newPollcompletion(v: PropertyPollcompletion): Value
    static newPollmode(v: PropertyPollmode): Value
    static newQuery(v: string): Value
    static newQuerylevel(v: PropertyQuerylevel): Value
    static newRecur(v: Recurrence): Value
    static newRequeststatus(v: Reqstat): Value
    static newStatus(v: PropertyStatus): Value
    static newString(v: string): Value
    static newTaskmode(v: PropertyTaskmode): Value
    static newText(v: string): Value
    static newTransp(v: PropertyTransp): Value
    static newTrigger(v: Trigger): Value
    static newUri(v: string): Value
    static newUtcoffset(v: number): Value
    static newX(v: string): Value
    static newXlicclass(v: PropertyXlicclass): Value
    /**
     * Extracts the original character string encoded by the above function.
     */
    static decodeIcalString(szText: string): string | null
    /**
     * Encodes a character string in ical format, escape certain characters, etc.
     */
    static encodeIcalString(szText: string): string | null
    /**
     * Converts a string to #ICalValueKind.
     */
    static kindFromString(str: string): ValueKind
    /**
     * Checks whether the #ICalValueKind is valid.
     */
    static kindIsValid(kind: ValueKind): boolean
    /**
     * Converts a #ICalValueKind to a #ICalPropertyKind.
     */
    static kindToPropertyKind(kind: ValueKind): PropertyKind
    /**
     * Converts the #ICalValueKind to a string.
     */
    static kindToString(kind: ValueKind): string
    static $gtype: GObject.Type
}
abstract class ArrayClass {
    static name: string
}
abstract class AttachClass {
    static name: string
}
abstract class CompIterClass {
    static name: string
}
abstract class ComponentClass {
    static name: string
}
abstract class DatetimeperiodClass {
    static name: string
}
abstract class DurationClass {
    static name: string
}
abstract class GeoClass {
    static name: string
}
abstract class ObjectClass {
    static name: string
}
class ObjectPrivate {
    static name: string
}
abstract class ParameterClass {
    static name: string
}
abstract class ParserClass {
    static name: string
}
abstract class PeriodClass {
    static name: string
}
abstract class PropertyClass {
    static name: string
}
abstract class RecurIteratorClass {
    static name: string
}
abstract class RecurrenceClass {
    static name: string
}
abstract class ReqstatClass {
    static name: string
}
abstract class TimeClass {
    static name: string
}
abstract class TimeSpanClass {
    static name: string
}
abstract class TimezoneClass {
    static name: string
}
abstract class TriggerClass {
    static name: string
}
abstract class ValueClass {
    static name: string
}
class _Array {
    static name: string
}
class _Attach {
    static name: string
}
class _CompIter {
    static name: string
}
class _Component {
    static name: string
}
class _Datetimeperiod {
    static name: string
}
class _Duration {
    static name: string
}
class _Geo {
    static name: string
}
class _Parameter {
    static name: string
}
class _Parser {
    static name: string
}
class _Period {
    static name: string
}
class _Property {
    static name: string
}
class _RecurIterator {
    static name: string
}
class _Recurrence {
    static name: string
}
class _Reqstat {
    static name: string
}
class _Time {
    static name: string
}
class _TimeSpan {
    static name: string
}
class _Timezone {
    static name: string
}
class _Trigger {
    static name: string
}
class _Value {
    static name: string
}
}
export default ICalGLib;