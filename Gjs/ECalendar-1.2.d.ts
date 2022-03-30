/*
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/sammydre/ts-for-gjs
 */
/**
 * ECalendar-1.2
 */

import type * as Gjs from './Gjs';
import type libxml2 from './libxml2-2.0';
import type Gio from './Gio-2.0';
import type GObject from './GObject-2.0';
import type GLib from './GLib-2.0';
import type EDataServer from './EDataServer-1.2';
import type Soup from './Soup-2.4';
import type GData from './GData-0.0';
import type Json from './Json-1.0';
import type Goa from './Goa-1.0';
import type Camel from './Camel-1.2';

export namespace ECalendar {

/**
 * FIXME: Document me.
 */
enum CalClientError {
    NO_SUCH_CALENDAR,
    OBJECT_NOT_FOUND,
    INVALID_OBJECT,
    UNKNOWN_USER,
    OBJECT_ID_ALREADY_EXISTS,
    INVALID_RANGE,
}
/**
 * FIXME: Document me.
 */
enum CalClientSourceType {
    EVENTS,
    TASKS,
    MEMOS,
    LAST,
}
enum CalClientSourceTypeEnum {
    EVENTS,
    TASKS,
    MEMOS,
    INVALID,
}
enum CalComponentAlarmAction {
    NONE,
    AUDIO,
    DISPLAY,
    EMAIL,
    PROCEDURE,
    UNKNOWN,
}
enum CalComponentAlarmTriggerType {
    NONE,
    RELATIVE_START,
    RELATIVE_END,
    ABSOLUTE,
}
enum CalComponentClassification {
    NONE,
    PUBLIC,
    PRIVATE,
    CONFIDENTIAL,
    UNKNOWN,
}
enum CalComponentField {
    CATEGORIES,
    CLASSIFICATION,
    COMPLETED,
    DTEND,
    DTSTART,
    DUE,
    GEO,
    PERCENT,
    PRIORITY,
    SUMMARY,
    TRANSPARENCY,
    URL,
    HAS_ALARMS,
    ICON,
    COMPLETE,
    RECURRING,
    OVERDUE,
    COLOR,
    STATUS,
    COMPONENT,
    LOCATION,
    NUM_FIELDS,
}
enum CalComponentPeriodType {
    DATETIME,
    DURATION,
}
enum CalComponentRangeType {
    SINGLE,
    THISPRIOR,
    THISFUTURE,
}
enum CalComponentTransparency {
    NONE,
    TRANSPARENT,
    OPAQUE,
    UNKNOWN,
}
enum CalComponentVType {
    NO_TYPE,
    EVENT,
    TODO,
    JOURNAL,
    FREEBUSY,
    TIMEZONE,
}
enum CalLoadState {
    NOT_LOADED,
    LOADING,
    LOADED,
}
enum CalSetModeStatus {
    SUCCESS,
    ERROR,
    NOT_SUPPORTED,
}
enum CalSetModeStatusEnum {
    SUCCESS,
    ERROR,
    UNSUPPORTED,
}
enum CalSourceType {
    EVENT,
    TODO,
    JOURNAL,
    LAST,
}
enum CalSourceTypeEnum {
    EVENT,
    TODO,
    JOURNAL,
    INVALID,
}
enum CalendarStatus {
    OK,
    INVALID_ARG,
    BUSY,
    REPOSITORY_OFFLINE,
    NO_SUCH_CALENDAR,
    OBJECT_NOT_FOUND,
    INVALID_OBJECT,
    URI_NOT_LOADED,
    URI_ALREADY_LOADED,
    PERMISSION_DENIED,
    UNKNOWN_USER,
    OBJECT_ID_ALREADY_EXISTS,
    PROTOCOL_NOT_SUPPORTED,
    CANCELLED,
    COULD_NOT_CANCEL,
    AUTHENTICATION_FAILED,
    AUTHENTICATION_REQUIRED,
    DBUS_EXCEPTION,
    OTHER_ERROR,
    INVALID_SERVER_VERSION,
    NOT_SUPPORTED,
}
/**
 * FIXME Document me!
 */
enum DataCalCallStatus {
    SUCCESS,
    BUSY,
    REPOSITORYOFFLINE,
    PERMISSIONDENIED,
    INVALIDRANGE,
    OBJECTNOTFOUND,
    INVALIDOBJECT,
    OBJECTIDALREADYEXISTS,
    AUTHENTICATIONFAILED,
    AUTHENTICATIONREQUIRED,
    UNSUPPORTEDFIELD,
    UNSUPPORTEDMETHOD,
    UNSUPPORTEDAUTHENTICATIONMETHOD,
    TLSNOTAVAILABLE,
    NOSUCHCAL,
    UNKNOWNUSER,
    OFFLINEUNAVAILABLE,
    SEARCHSIZELIMITEXCEEDED,
    SEARCHTIMELIMITEXCEEDED,
    INVALIDQUERY,
    QUERYREFUSED,
    COULDNOTCANCEL,
    OTHERERROR,
    INVALIDSERVERVERSION,
    INVALIDARG,
    NOTSUPPORTED,
    NOTOPENED,
}
enum CalChangeType {
    ADDED,
    MODIFIED,
    DELETED,
}
/**
 * Flags that control the behaviour of an #ECalClientView.
 */
enum CalClientViewFlags {
    NONE,
    NOTIFY_INITIAL,
}
/**
 * FIXME: Document me.
 */
enum DataCalMode {
    OCAL,
    EMOTE,
    NYMODE,
}
/**
 * FIXME Document me!
 */
enum DataCalObjModType {
    THIS,
    THISANDPRIOR,
    THISANDFUTURE,
    ALL,
}
/**
 * FIXME Document me!
 */
enum DataCalObjType {
    EVENT,
    TODO,
    JOURNAL,
    ANYTYPE,
}
function calendar_error_quark(): GLib.Quark
interface CalRecurInstanceFn {
    (comp: CalComponent, instance_start: number, instance_end: number, data: object): boolean
}
interface Cal_ConstructProps extends GObject.Object_ConstructProps {
}
class Cal {
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of ECalendar-1.2.ECalendar.Cal */
    /**
     * Tells the calendar backend to get rid of the alarm identified by the
     * `auid` argument in `comp`. Some backends might remove the alarm or
     * update internal information about the alarm be discarded, or, like
     * the file backend does, ignore the operation.
     * 
     * CALOBJ_MOD_ONLY_THIS is not supported in this call.
     * @param comp The component to discard the alarm from.
     * @param auid Unique identifier of the alarm to be discarded.
     */
    discard_alarm(comp: CalComponent, auid: string): boolean
    /**
     * Queries the address to be used for alarms in a calendar client.
     * @param alarm_address Return value for alarm address.
     */
    get_alarm_email_address(alarm_address: string): boolean
    /**
     * Queries a calendar for the alarms of a particular object that trigger in the
     * specified range of time.
     * @param id Unique identifier for a calendar component.
     * @param start Start time for query.
     * @param end End time for query.
     * @param alarms Return value for the component's alarm instances.  Will return NULL if no instances occur within the specified time range.  This should be freed using the e_cal_component_alarms_free() function.
     */
    get_alarms_for_object(id: CalComponentId, start: number, end: number, alarms: CalComponentAlarms): boolean
    /**
     * Queries the calendar address associated with a calendar client.
     * @param cal_address Return value for address information.
     */
    get_cal_address(cal_address: string): boolean
    /**
     * Queries the LDAP attribute for a calendar client.
     * @param ldap_attribute Return value for the LDAP attribute.
     */
    get_ldap_attribute(ldap_attribute: string): boolean
    /**
     * Queries the state of loading of a calendar client.
     */
    get_load_state(): CalLoadState
    /**
     * Queries the URL where the calendar attachments are
     * serialized in the local filesystem. This enable clients
     * to operate with the reference to attachments rather than the data itself
     * unless it specifically uses the attachments for open/sending
     * operations.
     */
    get_local_attachment_store(): string
    /**
     * Gets a list of objects from the calendar that match the query specified
     * by the `query` argument. The objects will be returned in the `objects`
     * argument, which is a list of #icalcomponent. When done, this list
     * should be freed by using the #e_cal_free_object_list function.
     * @param query Query string.
     */
    get_object_list(query: string): [ /* returnType */ boolean, /* objects */ number[] ]
    /**
     * Checks if a calendar supports only one alarm per component.
     */
    get_one_alarm_only(): boolean
    /**
     * Checks whether a calendar requires organizer to accept their attendance to
     * meetings.
     */
    get_organizer_must_accept(): boolean
    /**
     * Checks if a calendar forces organizers of meetings to be also attendees.
     */
    get_organizer_must_attend(): boolean
    /**
     * Creates a live query object from a loaded calendar.
     * @param sexp S-expression representing the query.
     */
    get_query(sexp: string): [ /* returnType */ boolean, /* query */ CalView ]
    /**
     * Checks if the calendar has a master object for recurrences.
     */
    get_recurrences_no_master(): boolean
    /**
     * Checks whether a calendar supports explicit refreshing (see `e_cal_refresh)`.
     */
    get_refresh_supported(): boolean
    /**
     * Checks whether the calendar saves schedules.
     */
    get_save_schedules(): boolean
    /**
     * Gets the type of the calendar client.
     */
    get_source_type(): CalSourceType
    /**
     * Queries the calendar for static capabilities.
     * @param cap Name of the static capability to check.
     */
    get_static_capability(cap: string): boolean
    /**
     * Queries whether the calendar client can perform modifications
     * on the calendar or not. Whether the backend is read only or not
     * is specified, on exit, in the `read_only` argument.
     * @param read_only Return value for read only status.
     */
    is_read_only(read_only: boolean): boolean
    /**
     * Makes a calendar client initiate a request to open a calendar.  The calendar
     * client will emit the "cal_opened" signal when the response from the server is
     * received. Since 3.0 is emitted also "cal_opened_ex" signal, which contains
     * a GError pointer from the open operation (NULL when no error occurred).
     * New signal deprecates the old "cal_opened" signal.
     * @param only_if_exists FALSE if the calendar should be opened even if there was no storage for it, i.e. to create a new calendar or load an existing one if it already exists.  TRUE if it should only try to load calendars that already exist.
     */
    open(only_if_exists: boolean): boolean
    /**
     * Open the calendar asynchronously.  The calendar will emit the
     * "cal_opened" signal when the operation has completed.
     * Since 3.0 is emitted also "cal_opened_ex" signal, which contains
     * a GError pointer from the open operation (NULL when no error occurred).
     * New signal deprecates the old "cal_opened" signal.
     * @param only_if_exists If TRUE, then only open the calendar if it already exists.  If FALSE, then create a new calendar if it doesn't already exist.
     */
    open_async(only_if_exists: boolean): void
    /**
     * Invokes refresh on a calendar. See `e_cal_get_refresh_supported`.
     */
    refresh(): boolean
    /**
     * Removes a calendar.
     */
    remove(): boolean
    /**
     * Asks a calendar to remove all components with the given UID.
     * If more control of the removal is desired, then use e_cal_remove_object_with_mod().
     * If the server is able to remove the component(s), all clients will
     * be notified and they will emit the "obj_removed" signal.
     * @param uid Unique identifier of the calendar component to remove.
     */
    remove_object(uid: string): boolean
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
     * @param source_property the property on `source` to bind
     * @param target the target #GObject
     * @param target_property the property on `target` to bind
     * @param flags flags to pass to #GBinding
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
     * @param source_property the property on `source` to bind
     * @param target the target #GObject
     * @param target_property the property on `target` to bind
     * @param flags flags to pass to #GBinding
     * @param transform_to a #GClosure wrapping the transformation function     from the `source` to the `target,` or %NULL to use the default
     * @param transform_from a #GClosure wrapping the transformation function     from the `target` to the `source,` or %NULL to use the default
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
     * @param key name of the key for that association
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
     * @param property_name the name of the property to get
     * @param value return location for the property value
     */
    get_property(property_name: string, value: any): void
    /**
     * This function gets back user data pointers stored via
     * g_object_set_qdata().
     * @param quark A #GQuark, naming the user data pointer
     */
    get_qdata(quark: GLib.Quark): object | null
    /**
     * Gets `n_properties` properties for an `object`.
     * Obtained properties will be set to `values`. All properties must be valid.
     * Warnings will be emitted and undefined behaviour may result if invalid
     * properties are passed in.
     * @param names the names of each property to get
     * @param values the values of each property to get
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
     * @param property_name the name of a property installed on the class of `object`.
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
     * @param pspec the #GParamSpec of a property installed on the class of `object`.
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
     * @param key name of the key
     * @param data data to associate with that key
     */
    set_data(key: string, data?: object | null): void
    /**
     * Sets a property on an object.
     * @param property_name the name of the property to set
     * @param value the value
     */
    set_property(property_name: string, value: any): void
    /**
     * Remove a specified datum from the object's data associations,
     * without invoking the association's destroy handler.
     * @param key name of the key
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
     * @param quark A #GQuark, naming the user data pointer
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
     * @param closure #GClosure to watch
     */
    watch_closure(closure: Function): void
    /* Virtual methods of ECalendar-1.2.ECalendar.Cal */
    vfunc_backend_died(): void
    vfunc_backend_error(message: string): void
    vfunc_cal_opened(status: CalendarStatus): void
    vfunc_cal_opened_ex(error: GLib.Error): void
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
     * @param pspec 
     */
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of ECalendar-1.2.ECalendar.Cal */
    connect(sigName: "backend-died", callback: (($obj: Cal) => void)): number
    connect_after(sigName: "backend-died", callback: (($obj: Cal) => void)): number
    emit(sigName: "backend-died"): void
    connect(sigName: "backend-error", callback: (($obj: Cal, object: string) => void)): number
    connect_after(sigName: "backend-error", callback: (($obj: Cal, object: string) => void)): number
    emit(sigName: "backend-error", object: string): void
    connect(sigName: "cal-opened", callback: (($obj: Cal, object: number) => void)): number
    connect_after(sigName: "cal-opened", callback: (($obj: Cal, object: number) => void)): number
    emit(sigName: "cal-opened", object: number): void
    connect(sigName: "cal-opened-ex", callback: (($obj: Cal, error: number) => void)): number
    connect_after(sigName: "cal-opened-ex", callback: (($obj: Cal, error: number) => void)): number
    emit(sigName: "cal-opened-ex", error: number): void
    connect(sigName: "cal-set-mode", callback: (($obj: Cal, object: CalSetModeStatusEnum, p0: any) => void)): number
    connect_after(sigName: "cal-set-mode", callback: (($obj: Cal, object: CalSetModeStatusEnum, p0: any) => void)): number
    emit(sigName: "cal-set-mode", object: CalSetModeStatusEnum, p0: any): void
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
     * @param pspec the #GParamSpec of the property which changed.
     */
    connect(sigName: "notify", callback: (($obj: Cal, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Cal, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Cal_ConstructProps)
    _init (config?: Cal_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(source: EDataServer.Source, type: CalSourceType): Cal
    /**
     * Gets an error message for the given status code.
     * @param status A status code.
     */
    static get_error_message(status: CalendarStatus): string
    static marshal_VOID__ENUM_ENUM(closure: Function, return_value: any, n_param_values: number, param_values: any, invocation_hint: object, marshal_data: object): void
    static marshal_VOID__STRING_UINT(closure: Function, return_value: any, n_param_values: number, param_values: any, invocation_hint: object, marshal_data: object): void
    static marshal_VOID__UINT_STRING(closure: Function, return_value: any, n_param_values: number, param_values: any, invocation_hint: object, marshal_data: object): void
    /**
     * Matches `tzid` against the system timezone definitions
     * and returns the matching TZID, or %NULL if none found
     * @param tzid a timezone ID
     */
    static match_tzid(tzid: string): string
    /**
     * Returns system timezone location string, NULL on an error.
     * Returned pointer should be freed with g_free().
     * 
     * Note: Since 3.4 the returned timezone location is either NULL or
     * an equivalent within known libical timezones.
     */
    static system_timezone_get_location(): string
    /**
     * Returns system timezone location string, NULL on an error.
     * Returned pointer should be freed with g_free().
     */
    static util_get_system_timezone_location(): string
    /**
     * Converts a translated priority string to an iCalendar priority value.
     * @param string A string representing the PRIORITY value.
     */
    static util_priority_from_string(string: string): number
    /**
     * Converts an iCalendar PRIORITY value to a translated string. Any unknown
     * priority value (i.e. not 0-9) will be returned as "" (undefined).
     * @param priority Priority value.
     */
    static util_priority_to_string(priority: number): string
    static $gtype: GObject.Type
}
interface CalClient_ConstructProps extends EDataServer.Client_ConstructProps {
}
class CalClient {
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
    /**
     * The #ESource for which this client was created.
     */
    readonly source: EDataServer.Source
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of ECalendar-1.2.ECalendar.CalClient */
    /**
     * Finishes previous call of e_cal_client_add_timezone().
     * @param result a #GAsyncResult
     */
    add_timezone_finish(result: Gio.AsyncResult): boolean
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
     * Finishes previous call of e_cal_client_create_object() and
     * sets `uid` to newly assigned UID for the created object.
     * This `uid` should be freed with g_free().
     * @param result a #GAsyncResult
     */
    create_object_finish(result: Gio.AsyncResult): [ /* returnType */ boolean, /* uid */ string ]
    /**
     * Finishes previous call of e_cal_client_create_objects() and
     * sets `uids` to newly assigned UIDs for the created objects.
     * This `uids` should be freed with e_client_util_free_string_slist().
     * @param result a #GAsyncResult
     */
    create_objects_finish(result: Gio.AsyncResult): [ /* returnType */ boolean, /* uids */ string[] ]
    /**
     * Removes alarm `auid` from a given component identified by `uid` and `rid`.
     * The call is finished by e_cal_client_discard_alarm_finish() from
     * the `callback`.
     * @param uid Unique identifier for a calendar component
     * @param rid Recurrence identifier
     * @param auid Alarm identifier to remove
     * @param cancellable a #GCancellable; can be %NULL
     * @param callback callback to call when a result is ready
     */
    discard_alarm(uid: string, rid: string, auid: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes previous call of e_cal_client_discard_alarm().
     * @param result a #GAsyncResult
     */
    discard_alarm_finish(result: Gio.AsyncResult): boolean
    /**
     * Removes alarm `auid` from a given component identified by `uid` and `rid`.
     * @param uid Unique identifier for a calendar component
     * @param rid Recurrence identifier
     * @param auid Alarm identifier to remove
     * @param cancellable a #GCancellable; can be %NULL
     */
    discard_alarm_sync(uid: string, rid: string, auid: string, cancellable?: Gio.Cancellable | null): boolean
    /**
     * Does a combination of #e_cal_client_get_object_list () and
     * #e_cal_client_recur_generate_instances(). Unlike #e_cal_client_generate_instances_sync (),
     * this returns immediately and the `cb` callback is called asynchronously.
     * 
     * The callback function should do a g_object_ref() of the calendar component
     * it gets passed if it intends to keep it around, since it will be unref'ed
     * as soon as the callback returns.
     * @param start Start time for query.
     * @param end End time for query.
     * @param cancellable a #GCancellable; can be %NULL
     * @param cb Callback for each generated instance.
     */
    generate_instances(start: number, end: number, cancellable: Gio.Cancellable | null, cb: CalRecurInstanceFn): void
    /**
     * Does a combination of e_cal_client_get_object_list() and
     * e_cal_client_recur_generate_instances().
     * 
     * The callback function should do a g_object_ref() of the calendar component
     * it gets passed if it intends to keep it around, since it will be unreffed
     * as soon as the callback returns.
     * @param start Start time for query
     * @param end End time for query
     * @param cb Callback for each generated instance
     */
    generate_instances_sync(start: number, end: number, cb: CalRecurInstanceFn): void
    /**
     * Queries a calendar for a specified component's object attachment uris.
     * The call is finished by e_cal_client_get_attachment_uris_finish() from
     * the `callback`.
     * @param uid Unique identifier for a calendar component
     * @param rid Recurrence identifier
     * @param cancellable a #GCancellable; can be %NULL
     * @param callback callback to call when a result is ready
     */
    get_attachment_uris(uid: string, rid: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes previous call of e_cal_client_get_attachment_uris() and
     * sets `attachment_uris` to uris for component's attachments.
     * The list should be freed with e_client_util_free_string_slist().
     * @param result a #GAsyncResult
     */
    get_attachment_uris_finish(result: Gio.AsyncResult): [ /* returnType */ boolean, /* attachment_uris */ string[] ]
    /**
     * Queries a calendar for a specified component's object attachment URIs.
     * The list should be freed with e_client_util_free_string_slist().
     * @param uid Unique identifier for a calendar component
     * @param rid Recurrence identifier
     * @param cancellable a #GCancellable; can be %NULL
     */
    get_attachment_uris_sync(uid: string, rid: string, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* attachment_uris */ string[] ]
    /**
     * Retrives an #icalcomponent from the backend that contains the default
     * values for properties needed. The call is finished
     * by e_cal_client_get_default_object_finish() from the `callback`.
     * @param cancellable a #GCancellable; can be %NULL
     * @param callback callback to call when a result is ready
     */
    get_default_object(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
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
    get_free_busy(start: number, end: number, users: string[], cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes previous call of e_cal_client_get_free_busy().
     * All VFREEBUSY #ECalComponent-s were received by "free-busy-data" signal.
     * @param result a #GAsyncResult
     */
    get_free_busy_finish(result: Gio.AsyncResult): boolean
    /**
     * Gets free/busy information from the calendar server.
     * All VFREEBUSY #ECalComponent-s were received by "free-busy-data" signal.
     * @param start Start time for query
     * @param end End time for query
     * @param users List of users to retrieve free/busy information for
     * @param cancellable a #GCancellable; can be %NULL
     */
    get_free_busy_sync(start: number, end: number, users: string[], cancellable?: Gio.Cancellable | null): boolean
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
     * @param uid Unique identifier for a calendar component.
     * @param rid Recurrence identifier.
     * @param cancellable a #GCancellable; can be %NULL
     * @param callback callback to call when a result is ready
     */
    get_object(uid: string, rid: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Gets a list of objects from the calendar that match the query specified
     * by the `sexp` argument, returning matching objects as a list of #icalcomponent-s.
     * The call is finished by e_cal_client_get_object_list_finish() from
     * the `callback`.
     * @param sexp an S-expression representing the query
     * @param cancellable a #GCancellable; can be %NULL
     * @param callback callback to call when a result is ready
     */
    get_object_list(sexp: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Gets a list of objects from the calendar that match the query specified
     * by the `sexp` argument, returning matching objects as a list of #ECalComponent-s.
     * The call is finished by e_cal_client_get_object_list_as_comps_finish() from
     * the `callback`.
     * @param sexp an S-expression representing the query
     * @param cancellable a #GCancellable; can be %NULL
     * @param callback callback to call when a result is ready
     */
    get_object_list_as_comps(sexp: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes previous call of e_cal_client_get_object_list_as_comps() and
     * sets `ecalcomps` to a matching list of #ECalComponent-s.
     * This list should be freed with #e_cal_client_free_ecalcomp_slist().
     * @param result a #GAsyncResult
     */
    get_object_list_as_comps_finish(result: Gio.AsyncResult): [ /* returnType */ boolean, /* ecalcomps */ CalComponent[] ]
    /**
     * Gets a list of objects from the calendar that match the query specified
     * by the `sexp` argument. The objects will be returned in the `ecalcomps`
     * argument, which is a list of #ECalComponent.
     * This list should be freed with #e_cal_client_free_ecalcomp_slist().
     * @param sexp an S-expression representing the query
     * @param cancellable a #GCancellable; can be %NULL
     */
    get_object_list_as_comps_sync(sexp: string, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* ecalcomps */ CalComponent[] ]
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
    get_objects_for_uid(uid: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes previous call of e_cal_client_get_objects_for_uid() and
     * sets `ecalcomps` to a list of #ECalComponent<!-- -->s corresponding to
     * found components for a given uid of the same type as this client.
     * This list should be freed with e_cal_client_free_ecalcomp_slist().
     * @param result a #GAsyncResult
     */
    get_objects_for_uid_finish(result: Gio.AsyncResult): [ /* returnType */ boolean, /* ecalcomps */ CalComponent[] ]
    /**
     * Queries a calendar for all calendar components with the given unique
     * ID. This will return any recurring event and all its detached recurrences.
     * For non-recurring events, it will just return the object with that ID.
     * This list should be freed with e_cal_client_free_ecalcomp_slist().
     * @param uid Unique identifier for a calendar component
     * @param cancellable a #GCancellable; can be %NULL
     */
    get_objects_for_uid_sync(uid: string, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* ecalcomps */ CalComponent[] ]
    /**
     * Gets the source type of the calendar client.
     */
    get_source_type(): CalClientSourceType
    /**
     * Retrieves a timezone object from the calendar backend.
     * The call is finished by e_cal_client_get_timezone_finish() from
     * the `callback`.
     * @param tzid ID of the timezone to retrieve
     * @param cancellable a #GCancellable; can be %NULL
     * @param callback callback to call when a result is ready
     */
    get_timezone(tzid: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Query `client` with `sexp,` creating an #ECalClientView.
     * The call is finished by e_cal_client_get_view_finish()
     * from the `callback`.
     * @param sexp an S-expression representing the query.
     * @param cancellable a #GCancellable; can be %NULL
     * @param callback callback to call when a result is ready
     */
    get_view(sexp: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes previous call of e_cal_client_get_view().
     * If successful, then the `view` is set to newly allocated #ECalClientView,
     * which should be freed with g_object_unref().
     * @param result a #GAsyncResult
     */
    get_view_finish(result: Gio.AsyncResult): [ /* returnType */ boolean, /* view */ CalClientView ]
    /**
     * Query `client` with `sexp,` creating an #ECalClientView.
     * If successful, then the `view` is set to newly allocated #ECalClientView,
     * which should be freed with g_object_unref().
     * @param sexp an S-expression representing the query.
     * @param cancellable a #GCancellable; can be %NULL
     */
    get_view_sync(sexp: string, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* view */ CalClientView ]
    /**
     * Finishes previous call of e_cal_client_modify_object().
     * @param result a #GAsyncResult
     */
    modify_object_finish(result: Gio.AsyncResult): boolean
    /**
     * Finishes previous call of e_cal_client_modify_objects().
     * @param result a #GAsyncResult
     */
    modify_objects_finish(result: Gio.AsyncResult): boolean
    /**
     * Finishes previous call of e_cal_client_receive_objects().
     * @param result a #GAsyncResult
     */
    receive_objects_finish(result: Gio.AsyncResult): boolean
    /**
     * Finishes previous call of e_cal_client_remove_object().
     * @param result a #GAsyncResult
     */
    remove_object_finish(result: Gio.AsyncResult): boolean
    /**
     * Finishes previous call of e_cal_client_remove_objects().
     * @param result a #GAsyncResult
     */
    remove_objects_finish(result: Gio.AsyncResult): boolean
    /* Methods of EDataServer-1.2.EDataServer.Client */
    /**
     * Cancels all pending operations started on `client`.
     */
    cancel_all(): void
    /**
     * Check if backend supports particular capability.
     * To get all capabilities use e_client_get_capabilities().
     * @param capability a capability
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
     * @param prop_name property name, whose value to retrieve; cannot be %NULL
     * @param cancellable a #GCancellable; can be %NULL
     * @param callback callback to call when a result is ready
     */
    get_backend_property(prop_name: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes previous call of e_client_get_backend_property().
     * @param result a #GAsyncResult
     */
    get_backend_property_finish(result: Gio.AsyncResult): [ /* returnType */ boolean, /* prop_value */ string ]
    /**
     * Queries `client'`s backend for a property of name `prop_name`.
     * @param prop_name property name, whose value to retrieve; cannot be %NULL
     * @param cancellable a #GCancellable; can be %NULL
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
     * @param only_if_exists this parameter is not used anymore
     * @param cancellable a #GCancellable; can be %NULL
     * @param callback callback to call when a result is ready
     */
    open(only_if_exists: boolean, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes previous call of e_client_open().
     * @param result a #GAsyncResult
     */
    open_finish(result: Gio.AsyncResult): boolean
    /**
     * Opens the `client,` making it ready for queries and other operations.
     * @param only_if_exists this parameter is not used anymore
     * @param cancellable a #GCancellable; can be %NULL
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
     * @param cancellable a #GCancellable; can be %NULL
     * @param callback callback to call when a result is ready
     */
    refresh(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes previous call of e_client_refresh().
     * @param result a #GAsyncResult
     */
    refresh_finish(result: Gio.AsyncResult): boolean
    /**
     * Initiates refresh on the `client`. Finishing the method doesn't mean
     * that the refresh is done, backend only notifies whether it started
     * refreshing or not. Use e_client_check_refresh_supported() to check
     * whether the backend supports this method.
     * @param cancellable a #GCancellable; can be %NULL
     */
    refresh_sync(cancellable?: Gio.Cancellable | null): boolean
    /**
     * Removes the backing data for this #EClient. For example, with the file
     * backend this deletes the database file. You cannot get it back!
     * The call is finished by e_client_remove_finish() from the `callback`.
     * @param cancellable a #GCancellable; can be %NULL
     * @param callback callback to call when a result is ready
     */
    remove(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes previous call of e_client_remove().
     * @param result a #GAsyncResult
     */
    remove_finish(result: Gio.AsyncResult): boolean
    /**
     * Removes the backing data for this #EClient. For example, with the file
     * backend this deletes the database file. You cannot get it back!
     * @param cancellable a #GCancellable; can be %NULL
     */
    remove_sync(cancellable?: Gio.Cancellable | null): boolean
    /**
     * Initiates retrieval of capabilities on the `client`. This is usually
     * required only once, after the `client` is opened. The returned value
     * is cached and any subsequent call of e_client_get_capabilities() and
     * e_client_check_capability() is using the cached value.
     * The call is finished by e_client_retrieve_capabilities_finish()
     * from the `callback`.
     * @param cancellable a #GCancellable; can be %NULL
     * @param callback callback to call when a result is ready
     */
    retrieve_capabilities(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes previous call of e_client_retrieve_capabilities().
     * Returned value of `capabilities` should be freed with g_free(),
     * when no longer needed.
     * @param result a #GAsyncResult
     */
    retrieve_capabilities_finish(result: Gio.AsyncResult): [ /* returnType */ boolean, /* capabilities */ string ]
    /**
     * Initiates retrieval of capabilities on the `client`. This is usually
     * required only once, after the `client` is opened. The returned value
     * is cached and any subsequent call of e_client_get_capabilities() and
     * e_client_check_capability() is using the cached value. Returned value
     * of `capabilities` should be freed with g_free(), when no longer needed.
     * @param cancellable a #GCancellable; can be %NULL
     */
    retrieve_capabilities_sync(cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* capabilities */ string ]
    /**
     * Asynchronously retrieves `client` properties to match server-side values,
     * without waiting for the D-Bus property change notifications delivery.
     * 
     * When the operation is finished, `callback` will be called. You can then
     * call e_client_retrieve_properties_finish() to get the result of the operation.
     * @param cancellable optional #GCancellable object, or %NULL
     * @param callback a #GAsyncReadyCallback to call when the request is satisfied
     */
    retrieve_properties(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes the operation started with e_client_retrieve_properties().
     * 
     * If an error occurs, the function sets `error` and returns %FALSE.
     * @param result a #GAsyncResult
     */
    retrieve_properties_finish(result: Gio.AsyncResult): boolean
    /**
     * Retrieves `client` properties to match server-side values, without waiting
     * for the D-Bus property change notifications delivery.
     * 
     * If an error occurs, the function sets `error` and returns %FALSE.
     * @param cancellable optional #GCancellable object, or %NULL
     */
    retrieve_properties_sync(cancellable?: Gio.Cancellable | null): boolean
    /**
     * Sets `client'`s backend property of name `prop_name`
     * to value `prop_value`. The call is finished
     * by e_client_set_backend_property_finish() from the `callback`.
     * @param prop_name property name, whose value to change; cannot be %NULL
     * @param prop_value property value, to set; cannot be %NULL
     * @param cancellable a #GCancellable; can be %NULL
     * @param callback callback to call when a result is ready
     */
    set_backend_property(prop_name: string, prop_value: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes previous call of e_client_set_backend_property().
     * @param result a #GAsyncResult
     */
    set_backend_property_finish(result: Gio.AsyncResult): boolean
    /**
     * Sets `client'`s backend property of name `prop_name`
     * to value `prop_value`.
     * @param prop_name property name, whose value to change; cannot be %NULL
     * @param prop_value property value, to set; cannot be %NULL
     * @param cancellable a #GCancellable; can be %NULL
     */
    set_backend_property_sync(prop_name: string, prop_value: string, cancellable?: Gio.Cancellable | null): boolean
    /**
     * Sets a D-Bus bus name that will be used to connect the client
     * to the backend subprocess.
     * @param bus_name a string representing a D-Bus bus name
     */
    set_bus_name(bus_name: string): void
    /**
     * Unwraps D-Bus error to local error. `dbus_error` is automatically freed.
     * `dbus_erorr` and `out_error` can point to the same variable.
     * @param dbus_error a #GError returned bu D-Bus
     */
    unwrap_dbus_error(dbus_error: GLib.Error): void
    /**
     * Asynchronously waits until the `client` is connected (according
     * to `ESource:`:connection-status property), but not longer than `timeout_seconds`.
     * 
     * The call is finished by e_client_wait_for_connected_finish() from
     * the `callback`.
     * @param timeout_seconds a timeout for the wait, in seconds
     * @param cancellable a #GCancellable; or %NULL
     * @param callback callback to call when a result is ready
     */
    wait_for_connected(timeout_seconds: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes previous call of e_client_wait_for_connected().
     * @param result a #GAsyncResult
     */
    wait_for_connected_finish(result: Gio.AsyncResult): boolean
    /**
     * Synchronously waits until the `client` is connected (according
     * to `ESource:`:connection-status property), but not longer than `timeout_seconds`.
     * 
     * Note: This also calls e_client_retrieve_properties_sync() on success, to have
     *   up-to-date property values on the client side, without a delay due
     *   to property change notifcations delivery through D-Bus.
     * @param timeout_seconds a timeout for the wait, in seconds
     * @param cancellable a #GCancellable; or %NULL
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
     * @param source_property the property on `source` to bind
     * @param target the target #GObject
     * @param target_property the property on `target` to bind
     * @param flags flags to pass to #GBinding
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
     * @param source_property the property on `source` to bind
     * @param target the target #GObject
     * @param target_property the property on `target` to bind
     * @param flags flags to pass to #GBinding
     * @param transform_to a #GClosure wrapping the transformation function     from the `source` to the `target,` or %NULL to use the default
     * @param transform_from a #GClosure wrapping the transformation function     from the `target` to the `source,` or %NULL to use the default
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
     * @param key name of the key for that association
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
     * @param property_name the name of the property to get
     * @param value return location for the property value
     */
    get_property(property_name: string, value: any): void
    /**
     * This function gets back user data pointers stored via
     * g_object_set_qdata().
     * @param quark A #GQuark, naming the user data pointer
     */
    get_qdata(quark: GLib.Quark): object | null
    /**
     * Gets `n_properties` properties for an `object`.
     * Obtained properties will be set to `values`. All properties must be valid.
     * Warnings will be emitted and undefined behaviour may result if invalid
     * properties are passed in.
     * @param names the names of each property to get
     * @param values the values of each property to get
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
     * @param property_name the name of a property installed on the class of `object`.
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
     * @param pspec the #GParamSpec of a property installed on the class of `object`.
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
     * @param key name of the key
     * @param data data to associate with that key
     */
    set_data(key: string, data?: object | null): void
    /**
     * Sets a property on an object.
     * @param property_name the name of the property to set
     * @param value the value
     */
    set_property(property_name: string, value: any): void
    /**
     * Remove a specified datum from the object's data associations,
     * without invoking the association's destroy handler.
     * @param key name of the key
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
     * @param quark A #GQuark, naming the user data pointer
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
     * @param closure #GClosure to watch
     */
    watch_closure(closure: Function): void
    /* Virtual methods of EDataServer-1.2.EDataServer.Client */
    vfunc_backend_died(): void
    vfunc_backend_error(error_msg: string): void
    vfunc_backend_property_changed(prop_name: string, prop_value: string): void
    /**
     * Queries `client'`s backend for a property of name `prop_name`.
     * The call is finished by e_client_get_backend_property_finish()
     * from the `callback`.
     * @param prop_name property name, whose value to retrieve; cannot be %NULL
     * @param cancellable a #GCancellable; can be %NULL
     * @param callback callback to call when a result is ready
     */
    vfunc_get_backend_property(prop_name: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes previous call of e_client_get_backend_property().
     * @param result a #GAsyncResult
     */
    vfunc_get_backend_property_finish(result: Gio.AsyncResult): [ /* returnType */ boolean, /* prop_value */ string ]
    /**
     * Queries `client'`s backend for a property of name `prop_name`.
     * @param prop_name property name, whose value to retrieve; cannot be %NULL
     * @param cancellable a #GCancellable; can be %NULL
     */
    vfunc_get_backend_property_sync(prop_name: string, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* prop_value */ string ]
    /**
     * Opens the `client,` making it ready for queries and other operations.
     * The call is finished by e_client_open_finish() from the `callback`.
     * @param only_if_exists this parameter is not used anymore
     * @param cancellable a #GCancellable; can be %NULL
     * @param callback callback to call when a result is ready
     */
    vfunc_open(only_if_exists: boolean, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes previous call of e_client_open().
     * @param result a #GAsyncResult
     */
    vfunc_open_finish(result: Gio.AsyncResult): boolean
    /**
     * Opens the `client,` making it ready for queries and other operations.
     * @param only_if_exists this parameter is not used anymore
     * @param cancellable a #GCancellable; can be %NULL
     */
    vfunc_open_sync(only_if_exists: boolean, cancellable?: Gio.Cancellable | null): boolean
    vfunc_opened(error: GLib.Error): void
    /**
     * Initiates refresh on the `client`. Finishing the method doesn't mean
     * that the refresh is done, backend only notifies whether it started
     * refreshing or not. Use e_client_check_refresh_supported() to check
     * whether the backend supports this method.
     * The call is finished by e_client_refresh_finish() from the `callback`.
     * @param cancellable a #GCancellable; can be %NULL
     * @param callback callback to call when a result is ready
     */
    vfunc_refresh(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes previous call of e_client_refresh().
     * @param result a #GAsyncResult
     */
    vfunc_refresh_finish(result: Gio.AsyncResult): boolean
    /**
     * Initiates refresh on the `client`. Finishing the method doesn't mean
     * that the refresh is done, backend only notifies whether it started
     * refreshing or not. Use e_client_check_refresh_supported() to check
     * whether the backend supports this method.
     * @param cancellable a #GCancellable; can be %NULL
     */
    vfunc_refresh_sync(cancellable?: Gio.Cancellable | null): boolean
    /**
     * Removes the backing data for this #EClient. For example, with the file
     * backend this deletes the database file. You cannot get it back!
     * The call is finished by e_client_remove_finish() from the `callback`.
     * @param cancellable a #GCancellable; can be %NULL
     * @param callback callback to call when a result is ready
     */
    vfunc_remove(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes previous call of e_client_remove().
     * @param result a #GAsyncResult
     */
    vfunc_remove_finish(result: Gio.AsyncResult): boolean
    /**
     * Removes the backing data for this #EClient. For example, with the file
     * backend this deletes the database file. You cannot get it back!
     * @param cancellable a #GCancellable; can be %NULL
     */
    vfunc_remove_sync(cancellable?: Gio.Cancellable | null): boolean
    /**
     * Initiates retrieval of capabilities on the `client`. This is usually
     * required only once, after the `client` is opened. The returned value
     * is cached and any subsequent call of e_client_get_capabilities() and
     * e_client_check_capability() is using the cached value.
     * The call is finished by e_client_retrieve_capabilities_finish()
     * from the `callback`.
     * @param cancellable a #GCancellable; can be %NULL
     * @param callback callback to call when a result is ready
     */
    vfunc_retrieve_capabilities(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes previous call of e_client_retrieve_capabilities().
     * Returned value of `capabilities` should be freed with g_free(),
     * when no longer needed.
     * @param result a #GAsyncResult
     */
    vfunc_retrieve_capabilities_finish(result: Gio.AsyncResult): [ /* returnType */ boolean, /* capabilities */ string ]
    /**
     * Initiates retrieval of capabilities on the `client`. This is usually
     * required only once, after the `client` is opened. The returned value
     * is cached and any subsequent call of e_client_get_capabilities() and
     * e_client_check_capability() is using the cached value. Returned value
     * of `capabilities` should be freed with g_free(), when no longer needed.
     * @param cancellable a #GCancellable; can be %NULL
     */
    vfunc_retrieve_capabilities_sync(cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* capabilities */ string ]
    /**
     * Retrieves `client` properties to match server-side values, without waiting
     * for the D-Bus property change notifications delivery.
     * 
     * If an error occurs, the function sets `error` and returns %FALSE.
     * @param cancellable optional #GCancellable object, or %NULL
     */
    vfunc_retrieve_properties_sync(cancellable?: Gio.Cancellable | null): boolean
    /**
     * Sets `client'`s backend property of name `prop_name`
     * to value `prop_value`. The call is finished
     * by e_client_set_backend_property_finish() from the `callback`.
     * @param prop_name property name, whose value to change; cannot be %NULL
     * @param prop_value property value, to set; cannot be %NULL
     * @param cancellable a #GCancellable; can be %NULL
     * @param callback callback to call when a result is ready
     */
    vfunc_set_backend_property(prop_name: string, prop_value: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes previous call of e_client_set_backend_property().
     * @param result a #GAsyncResult
     */
    vfunc_set_backend_property_finish(result: Gio.AsyncResult): boolean
    /**
     * Sets `client'`s backend property of name `prop_name`
     * to value `prop_value`.
     * @param prop_name property name, whose value to change; cannot be %NULL
     * @param prop_value property value, to set; cannot be %NULL
     * @param cancellable a #GCancellable; can be %NULL
     */
    vfunc_set_backend_property_sync(prop_name: string, prop_value: string, cancellable?: Gio.Cancellable | null): boolean
    /**
     * Unwraps D-Bus error to local error. `dbus_error` is automatically freed.
     * `dbus_erorr` and `out_error` can point to the same variable.
     * @param dbus_error a #GError returned bu D-Bus
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
     * @param pspec 
     */
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of ECalendar-1.2.ECalendar.CalClient */
    connect(sigName: "free-busy-data", callback: (($obj: CalClient, object: object) => void)): number
    connect_after(sigName: "free-busy-data", callback: (($obj: CalClient, object: object) => void)): number
    emit(sigName: "free-busy-data", object: object): void
    /* Signals of EDataServer-1.2.EDataServer.Client */
    connect(sigName: "backend-died", callback: (($obj: CalClient) => void)): number
    connect_after(sigName: "backend-died", callback: (($obj: CalClient) => void)): number
    emit(sigName: "backend-died"): void
    connect(sigName: "backend-error", callback: (($obj: CalClient, object: string) => void)): number
    connect_after(sigName: "backend-error", callback: (($obj: CalClient, object: string) => void)): number
    emit(sigName: "backend-error", object: string): void
    connect(sigName: "backend-property-changed", callback: (($obj: CalClient, object: string, p0: string) => void)): number
    connect_after(sigName: "backend-property-changed", callback: (($obj: CalClient, object: string, p0: string) => void)): number
    emit(sigName: "backend-property-changed", object: string, p0: string): void
    connect(sigName: "opened", callback: (($obj: CalClient, object: GLib.Error) => void)): number
    connect_after(sigName: "opened", callback: (($obj: CalClient, object: GLib.Error) => void)): number
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
     * @param pspec the #GParamSpec of the property which changed.
     */
    connect(sigName: "notify", callback: (($obj: CalClient, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: CalClient, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::capabilities", callback: (($obj: CalClient, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::capabilities", callback: (($obj: CalClient, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::main-context", callback: (($obj: CalClient, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::main-context", callback: (($obj: CalClient, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::online", callback: (($obj: CalClient, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::online", callback: (($obj: CalClient, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::opened", callback: (($obj: CalClient, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opened", callback: (($obj: CalClient, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::readonly", callback: (($obj: CalClient, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::readonly", callback: (($obj: CalClient, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::source", callback: (($obj: CalClient, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::source", callback: (($obj: CalClient, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: CalClient_ConstructProps)
    _init (config?: CalClient_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(source: EDataServer.Source, source_type: CalClientSourceType): CalClient
    static error_create(code: CalClientError, custom_msg: string): GLib.Error
    /* Function overloads */
    static error_create(code: EDataServer.ClientError, custom_msg?: string | null): GLib.Error
    static error_quark(): GLib.Quark
    /**
     * FIXME: Document me.
     * @param code 
     */
    static error_to_string(code: CalClientError): string
    /* Function overloads */
    /**
     * Get localized human readable description of the given error code.
     * @param code an #EClientError error code
     */
    static error_to_string(code: EDataServer.ClientError): string
    /**
     * Frees each element of the `ecalcomps` list and the list itself.
     * Each element is an object of type #ECalComponent.
     * @param ecalcomps list of #ECalComponent objects
     */
    static free_ecalcomp_slist(ecalcomps: CalComponent[]): void
    static $gtype: GObject.Type
}
interface CalClientView_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of ECalendar-1.2.ECalendar.CalClientView */
    client?: CalClient
    view?: object
}
class CalClientView {
    /* Properties of ECalendar-1.2.ECalendar.CalClientView */
    readonly client: CalClient
    readonly view: object
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of ECalendar-1.2.ECalendar.CalClientView */
    /**
     * Get the #ECalClient associated with this view.
     */
    get_client(): object
    /**
     * Retunrs: Whether view is running. Not running views are ignoring
     * all events sent from the server.
     */
    is_running(): boolean
    /**
     * Client can instruct server to which fields it is interested in only, thus
     * the server can return less data over the wire. The server can still return
     * complete objects, this is just a hint to it that the listed fields will
     * be used only. The UID/RID fields are returned always. Initial views has no fields
     * of interest and using %NULL for `fields_of_interest` will unset any previous
     * changes.
     * 
     * Some backends can use summary information of its cache to create artifical
     * objects, which will omit stored object parsing. If this cannot be done then
     * it will simply return object as is stored in the cache.
     * @param fields_of_interest List of field names in which the client is interested, or %NULL to reset the fields of interest
     */
    set_fields_of_interest(fields_of_interest?: string[] | null): void
    /**
     * Sets the `flags` which control the behaviour of `view`.
     * @param flags the #ECalClientViewFlags for `view`.
     */
    set_flags(flags: CalClientViewFlags): void
    /**
     * Starts a live query to the calendar/tasks backend.
     */
    start(): void
    /**
     * Stops a live query to the calendar/tasks backend.
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
     * @param source_property the property on `source` to bind
     * @param target the target #GObject
     * @param target_property the property on `target` to bind
     * @param flags flags to pass to #GBinding
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
     * @param source_property the property on `source` to bind
     * @param target the target #GObject
     * @param target_property the property on `target` to bind
     * @param flags flags to pass to #GBinding
     * @param transform_to a #GClosure wrapping the transformation function     from the `source` to the `target,` or %NULL to use the default
     * @param transform_from a #GClosure wrapping the transformation function     from the `target` to the `source,` or %NULL to use the default
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
     * @param key name of the key for that association
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
     * @param property_name the name of the property to get
     * @param value return location for the property value
     */
    get_property(property_name: string, value: any): void
    /**
     * This function gets back user data pointers stored via
     * g_object_set_qdata().
     * @param quark A #GQuark, naming the user data pointer
     */
    get_qdata(quark: GLib.Quark): object | null
    /**
     * Gets `n_properties` properties for an `object`.
     * Obtained properties will be set to `values`. All properties must be valid.
     * Warnings will be emitted and undefined behaviour may result if invalid
     * properties are passed in.
     * @param names the names of each property to get
     * @param values the values of each property to get
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
     * @param property_name the name of a property installed on the class of `object`.
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
     * @param pspec the #GParamSpec of a property installed on the class of `object`.
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
     * @param key name of the key
     * @param data data to associate with that key
     */
    set_data(key: string, data?: object | null): void
    /**
     * Sets a property on an object.
     * @param property_name the name of the property to set
     * @param value the value
     */
    set_property(property_name: string, value: any): void
    /**
     * Remove a specified datum from the object's data associations,
     * without invoking the association's destroy handler.
     * @param key name of the key
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
     * @param quark A #GQuark, naming the user data pointer
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
     * @param closure #GClosure to watch
     */
    watch_closure(closure: Function): void
    /* Virtual methods of ECalendar-1.2.ECalendar.CalClientView */
    vfunc_complete(error: GLib.Error): void
    vfunc_progress(percent: number, message: string): void
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
     * @param pspec 
     */
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of ECalendar-1.2.ECalendar.CalClientView */
    connect(sigName: "complete", callback: (($obj: CalClientView, object: GLib.Error) => void)): number
    connect_after(sigName: "complete", callback: (($obj: CalClientView, object: GLib.Error) => void)): number
    emit(sigName: "complete", object: GLib.Error): void
    connect(sigName: "objects-added", callback: (($obj: CalClientView, objects: number[]) => void)): number
    connect_after(sigName: "objects-added", callback: (($obj: CalClientView, objects: number[]) => void)): number
    emit(sigName: "objects-added", objects: number[]): void
    connect(sigName: "objects-modified", callback: (($obj: CalClientView, objects: number[]) => void)): number
    connect_after(sigName: "objects-modified", callback: (($obj: CalClientView, objects: number[]) => void)): number
    emit(sigName: "objects-modified", objects: number[]): void
    connect(sigName: "objects-removed", callback: (($obj: CalClientView, objects: CalComponentId[]) => void)): number
    connect_after(sigName: "objects-removed", callback: (($obj: CalClientView, objects: CalComponentId[]) => void)): number
    emit(sigName: "objects-removed", objects: CalComponentId[]): void
    connect(sigName: "progress", callback: (($obj: CalClientView, object: number, p0: string) => void)): number
    connect_after(sigName: "progress", callback: (($obj: CalClientView, object: number, p0: string) => void)): number
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
     * @param pspec the #GParamSpec of the property which changed.
     */
    connect(sigName: "notify", callback: (($obj: CalClientView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: CalClientView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::client", callback: (($obj: CalClientView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::client", callback: (($obj: CalClientView, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::view", callback: (($obj: CalClientView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::view", callback: (($obj: CalClientView, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: CalClientView_ConstructProps)
    _init (config?: CalClientView_ConstructProps): void
    static $gtype: GObject.Type
}
interface CalComponent_ConstructProps extends GObject.Object_ConstructProps {
}
class CalComponent {
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of ECalendar-1.2.ECalendar.CalComponent */
    /**
     * Aborts the sequence change needed in the given calendar component, which
     * means it will not require a sequence commit (via #e_cal_component_commit_sequence)
     * even if the changes done require a sequence increment.
     */
    abort_sequence(): void
    /**
     * Adds an alarm subcomponent to a calendar component.  You should have created
     * the `alarm` by using e_cal_component_alarm_new(); it is invalid to use a
     * #ECalComponentAlarm structure that came from e_cal_component_get_alarm().  After
     * adding the alarm, the `alarm` structure is no longer valid because the
     * internal structures may change and you should get rid of it by using
     * e_cal_component_alarm_free().
     * @param alarm An alarm.
     */
    add_alarm(alarm: CalComponentAlarm): void
    /**
     * Creates a new calendar component object by copying the information from
     * another one.
     */
    clone(): CalComponent
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
     * Checks if the DTSTART and DTEND properties of the 2 components match.
     * Note that the events may have different recurrence properties which are not
     * taken into account here.
     * @param comp2 A calendar component object.
     */
    event_dates_match(comp2: CalComponent): boolean
    /**
     * Builds a list of the unique identifiers of the alarm subcomponents inside a
     * calendar component.
     */
    get_alarm_uids(): string[]
    /**
     * Gets the iCalendar string representation of a calendar component.  You should
     * call e_cal_component_commit_sequence() before this function to ensure that the
     * component's sequence number is consistent with the state of the object.
     */
    get_as_string(): string
    /**
     * Queries the attachment properties of the calendar component object. When done,
     * the `attachment_list` should be freed by calling g_slist_free().
     */
    get_attachment_list(): /* attachment_list */ string[]
    /**
     * Queries the attendee properties of the calendar component object
     */
    get_attendee_list(): /* attendee_list */ CalComponentAttendee[]
    /**
     * Queries the categories of the given calendar component. The categories
     * are returned in the `categories` argument, which, on success, will contain
     * a comma-separated list of all categories set in the component.
     * @param categories Return holder for the categories.
     */
    get_categories(categories: string): void
    /**
     * Queries the list of categories of a calendar component object.  Each element
     * in the returned categ_list is a string with the corresponding category.
     */
    get_categories_list(): /* categ_list */ string[]
    /**
     * Queries the classification of a calendar component object.  If the
     * classification property is not set on this component, this function returns
     * #E_CAL_COMPONENT_CLASS_NONE.
     * @param classif Return value for the classification.
     */
    get_classification(classif: CalComponentClassification): void
    /**
     * Queries the comments of a calendar component object.  The comment property can
     * appear several times inside a calendar component, and so a list of
     * #ECalComponentText is returned.
     */
    get_comment_list(): /* text_list */ CalComponentText[]
    /**
     * Queries the date at which a calendar compoment object was completed.
     * @param t Return value for the completion date.  This should be freed using the e_cal_component_free_icaltimetype() function.
     */
    get_completed(t: object): void
    /**
     * Queries the contact of a calendar component object.  The contact property can
     * appear several times inside a calendar component, and so a list of
     * #ECalComponentText is returned.
     */
    get_contact_list(): /* text_list */ CalComponentText[]
    /**
     * Queries the date in which a calendar component object was created in the
     * calendar store.
     * @param t Return value for the creation date.  This should be freed using the e_cal_component_free_icaltimetype() function.
     */
    get_created(t: object): void
    /**
     * Queries the description of a calendar component object.  Journal components
     * may have more than one description, and as such this function returns a list
     * of #ECalComponentText structures.  All other types of components can have at
     * most one description.
     */
    get_description_list(): /* text_list */ CalComponentText[]
    /**
     * Queries the date/time end of a calendar component object.
     * @param dt Return value for the date/time end.  This should be freed with the e_cal_component_free_datetime() function.
     */
    get_dtend(dt: CalComponentDateTime): void
    /**
     * Queries the date/timestamp property of a calendar component object, which is
     * the last time at which the object was modified by a calendar user agent.
     * @param t A value for the date/timestamp.
     */
    get_dtstamp(t: object): void
    /**
     * Queries the date/time start of a calendar component object.
     * @param dt Return value for the date/time start.  This should be freed with the e_cal_component_free_datetime() function.
     */
    get_dtstart(dt: CalComponentDateTime): void
    /**
     * Queries the due date/time of a calendar component object.
     * @param dt Return value for the due date/time.  This should be freed with the e_cal_component_free_datetime() function.
     */
    get_due(dt: CalComponentDateTime): void
    /**
     * Queries the list of exception date properties in a calendar component object.
     */
    get_exdate_list(): /* exdate_list */ CalComponentDateTime[]
    /**
     * Gets the geographic position property of a calendar component object.
     * @param geo Return value for the geographic position property.  This should be freed using the e_cal_component_free_geo() function.
     */
    get_geo(geo: object): void
    /**
     * Queries the time at which a calendar component object was last modified in
     * the calendar store.
     * @param t Return value for the last modified time value.
     */
    get_last_modified(t: object): void
    /**
     * Queries the location property of a calendar component object.
     * @param location Return value for the location.
     */
    get_location(location: string): void
    /**
     * Get the number of attachments to this calendar component object.
     */
    get_num_attachments(): number
    /**
     * Queries the organizer property of a calendar component object
     * @param organizer A value for the organizer
     */
    get_organizer(organizer: CalComponentOrganizer): void
    /**
     * Queries the percent-complete property of a calendar component object.
     * @param percent Return value for the percent-complete property.  This should be freed using the e_cal_component_free_percent() function.
     */
    get_percent(percent: number): void
    get_percent_as_int(): number
    /**
     * Queries the priority property of a calendar component object.
     * @param priority Return value for the priority property.  This should be freed using the e_cal_component_free_priority() function.
     */
    get_priority(priority: number): void
    /**
     * Queries the list of recurrence date properties in a calendar component
     * object.
     */
    get_rdate_list(): /* period_list */ CalComponentPeriod[]
    /**
     * Queries the recurrence id property of a calendar component object.
     * @param recur_id Return value for the recurrence id property
     */
    get_recurid(recur_id: CalComponentRange): void
    /**
     * Gets the recurrence ID property as a string.
     */
    get_recurid_as_string(): string
    /**
     * Queries the sequence number of a calendar component object.
     * @param sequence Return value for the sequence number.  This should be freed using e_cal_component_free_sequence().
     */
    get_sequence(sequence: number): void
    /**
     * Queries the summary of a calendar component object.
     * @param summary Return value for the summary property and its parameters.
     */
    get_summary(summary: CalComponentText): void
    /**
     * Queries the time transparency of a calendar component object.
     * @param transp Return value for the time transparency.
     */
    get_transparency(transp: CalComponentTransparency): void
    /**
     * Queries the unique identifier of a calendar component object.
     * @param uid Return value for the UID string.
     */
    get_uid(uid: string): void
    /**
     * Queries the uniform resource locator property of a calendar component object.
     * @param url Return value for the URL.
     */
    get_url(url: string): void
    /**
     * Queries the type of a calendar component object.
     */
    get_vtype(): CalComponentVType
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
     * @param auid UID of the alarm to remove.
     */
    remove_alarm(auid: string): void
    /**
     * Remove all alarms from the calendar component
     */
    remove_all_alarms(): void
    /**
     * Rescans the #icalcomponent being wrapped by the given calendar component. This
     * would replace any value that was changed in the wrapped #icalcomponent.
     */
    rescan(): void
    /**
     * This currently handles only attachments that are URIs
     * in the file system - not inline binaries.
     * 
     * Sets the attachments of a calendar component object
     * @param attachment_list list of URIs to attachment pointers
     */
    set_attachment_list(attachment_list: string[]): void
    /**
     * Sets the attendees of a calendar component object
     * @param attendee_list Values for attendee properties
     */
    set_attendee_list(attendee_list: CalComponentAttendee[]): void
    /**
     * Sets the list of categories for a calendar component.
     * @param categories Comma-separated list of categories.
     */
    set_categories(categories: string): void
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
    set_classification(classif: CalComponentClassification): void
    /**
     * Sets the comments of a calendar component object.  The comment property can
     * appear several times inside a calendar component, and so a list of
     * #ECalComponentText structures is used.
     * @param text_list List of #ECalComponentText structures.
     */
    set_comment_list(text_list: CalComponentText[]): void
    /**
     * Sets the date at which a calendar component object was completed.
     * @param t Value for the completion date.
     */
    set_completed(t: object): void
    /**
     * Sets the contact of a calendar component object.  The contact property can
     * appear several times inside a calendar component, and so a list of
     * #ECalComponentText structures is used.
     * @param text_list List of #ECalComponentText structures.
     */
    set_contact_list(text_list: CalComponentText[]): void
    /**
     * Sets the date in which a calendar component object is created in the calendar
     * store.  This should only be used inside a calendar store application, i.e.
     * not by calendar user agents.
     * @param t Value for the creation date.
     */
    set_created(t: object): void
    /**
     * Sets the date/time end property of a calendar component object.
     * @param dt End date/time.
     */
    set_dtend(dt: CalComponentDateTime): void
    /**
     * Sets the date/timestamp of a calendar component object.  This should be
     * called whenever a calendar user agent makes a change to a component's
     * properties.
     * @param t Date/timestamp value.
     */
    set_dtstamp(t: object): void
    /**
     * Sets the date/time start property of a calendar component object.
     * @param dt Start date/time.
     */
    set_dtstart(dt: CalComponentDateTime): void
    /**
     * Sets the due date/time property of a calendar component object.
     * @param dt End date/time.
     */
    set_due(dt: CalComponentDateTime): void
    /**
     * Sets the list of exception dates in a calendar component object.
     * @param exdate_list List of #ECalComponentDateTime structures.
     */
    set_exdate_list(exdate_list: CalComponentDateTime[]): void
    /**
     * Sets the geographic position property on a calendar component object.
     * @param geo Value for the geographic position property.
     */
    set_geo(geo: object): void
    /**
     * Sets the contents of a calendar component object from an #icalcomponent
     * structure.  If the `comp` already had an #icalcomponent set into it, it will
     * will be freed automatically if the #icalcomponent does not have a parent
     * component itself.
     * 
     * Supported component types are VEVENT, VTODO, VJOURNAL, VFREEBUSY, and VTIMEZONE.
     * @param icalcomp An #icalcomponent.
     */
    set_icalcomponent(icalcomp: number): boolean
    /**
     * Sets the time at which a calendar component object was last stored in the
     * calendar store.  This should not be called by plain calendar user agents.
     * @param t Value for the last time modified.
     */
    set_last_modified(t: object): void
    /**
     * Sets the location property of a calendar component object.
     * @param location Location value.
     */
    set_location(location: string): void
    /**
     * Clears any existing component data from a calendar component object and
     * creates a new #icalcomponent of the specified type for it.  The only property
     * that will be set in the new component will be its unique identifier.
     * @param type Type of calendar component to create.
     */
    set_new_vtype(type: CalComponentVType): void
    /**
     * Sets the organizer of a calendar component object
     * @param organizer Value for the organizer property
     */
    set_organizer(organizer: CalComponentOrganizer): void
    /**
     * Sets the percent-complete property of a calendar component object.
     * @param percent Value for the percent-complete property.
     */
    set_percent(percent: number): void
    set_percent_as_int(percent: number): void
    /**
     * Sets the priority property of a calendar component object.
     * @param priority Value for the priority property.
     */
    set_priority(priority: number): void
    /**
     * Sets the list of recurrence dates in a calendar component object.
     * @param period_list List of #ECalComponentPeriod structures
     */
    set_rdate_list(period_list: CalComponentPeriod[]): void
    /**
     * Sets the recurrence id property of a calendar component object.
     * @param recur_id Value for the recurrence id property.
     */
    set_recurid(recur_id: CalComponentRange): void
    /**
     * Sets the sequence number of a calendar component object.  Normally this
     * function should not be called, since the sequence number is incremented
     * automatically at the proper times.
     * @param sequence Sequence number value.
     */
    set_sequence(sequence: number): void
    /**
     * Sets the summary of a calendar component object.
     * @param summary Summary property and its parameters.
     */
    set_summary(summary: CalComponentText): void
    /**
     * Sets the time transparency of a calendar component object.
     * @param transp Time transparency value.
     */
    set_transparency(transp: CalComponentTransparency): void
    /**
     * Sets the unique identifier string of a calendar component object.
     * @param uid Unique identifier.
     */
    set_uid(uid: string): void
    /**
     * Sets the uniform resource locator property of a calendar component object.
     * @param url URL value.
     */
    set_url(url: string): void
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
     * @param source_property the property on `source` to bind
     * @param target the target #GObject
     * @param target_property the property on `target` to bind
     * @param flags flags to pass to #GBinding
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
     * @param source_property the property on `source` to bind
     * @param target the target #GObject
     * @param target_property the property on `target` to bind
     * @param flags flags to pass to #GBinding
     * @param transform_to a #GClosure wrapping the transformation function     from the `source` to the `target,` or %NULL to use the default
     * @param transform_from a #GClosure wrapping the transformation function     from the `target` to the `source,` or %NULL to use the default
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
     * @param key name of the key for that association
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
     * @param property_name the name of the property to get
     * @param value return location for the property value
     */
    get_property(property_name: string, value: any): void
    /**
     * This function gets back user data pointers stored via
     * g_object_set_qdata().
     * @param quark A #GQuark, naming the user data pointer
     */
    get_qdata(quark: GLib.Quark): object | null
    /**
     * Gets `n_properties` properties for an `object`.
     * Obtained properties will be set to `values`. All properties must be valid.
     * Warnings will be emitted and undefined behaviour may result if invalid
     * properties are passed in.
     * @param names the names of each property to get
     * @param values the values of each property to get
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
     * @param property_name the name of a property installed on the class of `object`.
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
     * @param pspec the #GParamSpec of a property installed on the class of `object`.
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
     * @param key name of the key
     * @param data data to associate with that key
     */
    set_data(key: string, data?: object | null): void
    /**
     * Sets a property on an object.
     * @param property_name the name of the property to set
     * @param value the value
     */
    set_property(property_name: string, value: any): void
    /**
     * Remove a specified datum from the object's data associations,
     * without invoking the association's destroy handler.
     * @param key name of the key
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
     * @param quark A #GQuark, naming the user data pointer
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
     * @param closure #GClosure to watch
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
     * @param pspec 
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
     * @param pspec the #GParamSpec of the property which changed.
     */
    connect(sigName: "notify", callback: (($obj: CalComponent, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: CalComponent, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: CalComponent_ConstructProps)
    _init (config?: CalComponent_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): CalComponent
    static new_from_string(calobj: string): CalComponent
    /**
     * Frees a list of #ECalComponentAttendee structures.
     * @param attendee_list List of attendees
     */
    static free_attendee_list(attendee_list: CalComponentAttendee[]): void
    /**
     * Frees a list of category strings.
     * @param categ_list List of category strings
     */
    static free_categories_list(categ_list: string[]): void
    /**
     * Frees a date/time structure.
     * @param dt A date/time structure.
     */
    static free_datetime(dt: CalComponentDateTime): void
    /**
     * Frees a list of #ECalComponentDateTime structures as returned by the
     * e_cal_component_get_exdate_list() function.
     * @param exdate_list List of #ECalComponentDateTime structures
     */
    static free_exdate_list(exdate_list: CalComponentDateTime[]): void
    /**
     * Frees a struct #icalgeotype structure as returned by the calendar component
     * functions.
     * @param geo An #icalgeotype structure.
     */
    static free_geo(geo: object): void
    /**
     * Frees a struct #icaltimetype value as returned by the calendar component
     * functions.
     * @param t An #icaltimetype structure.
     */
    static free_icaltimetype(t: object): void
    /**
     * Frees the id.
     * @param id Component ID
     */
    static free_id(id: CalComponentId): void
    /**
     * Frees a percent value as returned by the e_cal_component_get_percent()
     * function.
     * @param percent Percent value.
     */
    static free_percent(percent: number): void
    /**
     * Frees a list of #ECalComponentPeriod structures.
     * @param period_list List of #ECalComponentPeriod structures
     */
    static free_period_list(period_list: CalComponentPeriod[]): void
    /**
     * Frees a priority value as returned by the e_cal_component_get_priority()
     * function.
     * @param priority Priority value.
     */
    static free_priority(priority: number): void
    /**
     * Frees an #ECalComponentRange structure.
     * @param range A #ECalComponentRange.
     */
    static free_range(range: CalComponentRange): void
    /**
     * Frees a sequence number value.
     * @param sequence Sequence number value.
     */
    static free_sequence(sequence: number): void
    /**
     * Frees a list of #ECalComponentText structures.  This function should only be
     * used to free lists of text values as returned by the other getter functions
     * of #ECalComponent.
     * @param text_list List of #ECalComponentText structures.
     */
    static free_text_list(text_list: CalComponentText[]): void
    /**
     * Generates a unique identifier suitable for calendar components.
     */
    static gen_uid(): string
    static $gtype: GObject.Type
}
interface CalView_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of ECalendar-1.2.ECalendar.CalView */
    client?: Cal
    view?: object
}
class CalView {
    /* Properties of ECalendar-1.2.ECalendar.CalView */
    readonly client: Cal
    readonly view: object
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of ECalendar-1.2.ECalendar.CalView */
    /**
     * Starts a live query to the calendar/tasks backend.
     */
    start(): void
    /**
     * Stops a live query to the calendar/tasks backend.
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
     * @param source_property the property on `source` to bind
     * @param target the target #GObject
     * @param target_property the property on `target` to bind
     * @param flags flags to pass to #GBinding
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
     * @param source_property the property on `source` to bind
     * @param target the target #GObject
     * @param target_property the property on `target` to bind
     * @param flags flags to pass to #GBinding
     * @param transform_to a #GClosure wrapping the transformation function     from the `source` to the `target,` or %NULL to use the default
     * @param transform_from a #GClosure wrapping the transformation function     from the `target` to the `source,` or %NULL to use the default
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
     * @param key name of the key for that association
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
     * @param property_name the name of the property to get
     * @param value return location for the property value
     */
    get_property(property_name: string, value: any): void
    /**
     * This function gets back user data pointers stored via
     * g_object_set_qdata().
     * @param quark A #GQuark, naming the user data pointer
     */
    get_qdata(quark: GLib.Quark): object | null
    /**
     * Gets `n_properties` properties for an `object`.
     * Obtained properties will be set to `values`. All properties must be valid.
     * Warnings will be emitted and undefined behaviour may result if invalid
     * properties are passed in.
     * @param names the names of each property to get
     * @param values the values of each property to get
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
     * @param property_name the name of a property installed on the class of `object`.
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
     * @param pspec the #GParamSpec of a property installed on the class of `object`.
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
     * @param key name of the key
     * @param data data to associate with that key
     */
    set_data(key: string, data?: object | null): void
    /**
     * Sets a property on an object.
     * @param property_name the name of the property to set
     * @param value the value
     */
    set_property(property_name: string, value: any): void
    /**
     * Remove a specified datum from the object's data associations,
     * without invoking the association's destroy handler.
     * @param key name of the key
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
     * @param quark A #GQuark, naming the user data pointer
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
     * @param closure #GClosure to watch
     */
    watch_closure(closure: Function): void
    /* Virtual methods of ECalendar-1.2.ECalendar.CalView */
    vfunc_view_complete(status: CalendarStatus, error_msg: string): void
    vfunc_view_done(status: CalendarStatus): void
    vfunc_view_progress(message: string, percent: number): void
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
     * @param pspec 
     */
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of ECalendar-1.2.ECalendar.CalView */
    connect(sigName: "objects-added", callback: (($obj: CalView, objects: number[]) => void)): number
    connect_after(sigName: "objects-added", callback: (($obj: CalView, objects: number[]) => void)): number
    emit(sigName: "objects-added", objects: number[]): void
    connect(sigName: "objects-modified", callback: (($obj: CalView, objects: number[]) => void)): number
    connect_after(sigName: "objects-modified", callback: (($obj: CalView, objects: number[]) => void)): number
    emit(sigName: "objects-modified", objects: number[]): void
    connect(sigName: "objects-removed", callback: (($obj: CalView, objects: CalComponentId[]) => void)): number
    connect_after(sigName: "objects-removed", callback: (($obj: CalView, objects: CalComponentId[]) => void)): number
    emit(sigName: "objects-removed", objects: CalComponentId[]): void
    connect(sigName: "view-complete", callback: (($obj: CalView, object: number, p0: string) => void)): number
    connect_after(sigName: "view-complete", callback: (($obj: CalView, object: number, p0: string) => void)): number
    emit(sigName: "view-complete", object: number, p0: string): void
    connect(sigName: "view-done", callback: (($obj: CalView, object: number) => void)): number
    connect_after(sigName: "view-done", callback: (($obj: CalView, object: number) => void)): number
    emit(sigName: "view-done", object: number): void
    connect(sigName: "view-progress", callback: (($obj: CalView, object: string, p0: number) => void)): number
    connect_after(sigName: "view-progress", callback: (($obj: CalView, object: string, p0: number) => void)): number
    emit(sigName: "view-progress", object: string, p0: number): void
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
     * @param pspec the #GParamSpec of the property which changed.
     */
    connect(sigName: "notify", callback: (($obj: CalView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: CalView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::client", callback: (($obj: CalView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::client", callback: (($obj: CalView, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::view", callback: (($obj: CalView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::view", callback: (($obj: CalView, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: CalView_ConstructProps)
    _init (config?: CalView_ConstructProps): void
    static $gtype: GObject.Type
}
class CalChange {
    /* Fields of ECalendar-1.2.ECalendar.CalChange */
    comp: CalComponent
    type: CalChangeType
    static name: string
}
abstract class CalClass {
    /* Fields of ECalendar-1.2.ECalendar.CalClass */
    parent_class: GObject.ObjectClass
    cal_opened: (ecal: Cal, status: CalendarStatus) => void
    cal_opened_ex: (ecal: Cal, error: GLib.Error) => void
    backend_error: (ecal: Cal, message: string) => void
    backend_died: (ecal: Cal) => void
    static name: string
}
abstract class CalClientClass {
    /* Fields of ECalendar-1.2.ECalendar.CalClientClass */
    parent: EDataServer.ClientClass
    static name: string
}
class CalClientPrivate {
    static name: string
}
abstract class CalClientViewClass {
    /* Fields of ECalendar-1.2.ECalendar.CalClientViewClass */
    parent_class: GObject.ObjectClass
    progress: (view: CalClientView, percent: number, message: string) => void
    complete: (view: CalClientView, error: GLib.Error) => void
    static name: string
}
class CalClientViewPrivate {
    static name: string
}
class CalComponentAlarm {
    /* Methods of ECalendar-1.2.ECalendar.CalComponentAlarm */
    /**
     * Frees an alarm structure.
     */
    free(): void
    /**
     * Queries the action type of an alarm.
     * @param action Return value for the alarm's action type.
     */
    get_action(action: CalComponentAlarmAction): void
    /**
     * Gets the list of attendees associated with an alarm.
     */
    get_attendee_list(): /* attendee_list */ CalComponentAttendee[]
    /**
     * Queries the description property of an alarm.
     * @param description Return value for the description property and its parameters.
     */
    get_description(description: CalComponentText): void
    /**
     * Queries the repeat/duration properties of an alarm.
     * @param repeat Return value for the repeat/duration properties.
     */
    get_repeat(repeat: CalComponentAlarmRepeat): void
    /**
     * Queries the trigger time for an alarm.
     * @param trigger Return value for the trigger time.
     */
    get_trigger(trigger: CalComponentAlarmTrigger): void
    /**
     * Queries the unique identifier of an alarm subcomponent.
     */
    get_uid(): string
    /**
     * Queries an alarm to see if it has attendees associated with it.
     */
    has_attendees(): boolean
    /**
     * Sets the action type for an alarm.
     * @param action Action type.
     */
    set_action(action: CalComponentAlarmAction): void
    /**
     * Sets the list of attendees for an alarm.
     * @param attendee_list List of attendees.
     */
    set_attendee_list(attendee_list: CalComponentAttendee[]): void
    /**
     * Sets the description property of an alarm.
     * @param description Description property and its parameters, or NULL for no description.
     */
    set_description(description: CalComponentText): void
    /**
     * Sets the repeat/duration values for an alarm.
     * @param repeat Repeat/duration values.  To remove any repetitions from the alarm, set the `repeat`.repetitions to 0.
     */
    set_repeat(repeat: CalComponentAlarmRepeat): void
    /**
     * Sets the trigger time of an alarm.
     * @param trigger Trigger time structure.
     */
    set_trigger(trigger: CalComponentAlarmTrigger): void
    static name: string
}
class CalComponentAlarmInstance {
    /* Fields of ECalendar-1.2.ECalendar.CalComponentAlarmInstance */
    auid: string
    trigger: number
    occur_start: number
    occur_end: number
    static name: string
}
class CalComponentAlarmRepeat {
    /* Fields of ECalendar-1.2.ECalendar.CalComponentAlarmRepeat */
    repetitions: number
    duration: object
    static name: string
}
class CalComponentAlarmTrigger {
    /* Fields of ECalendar-1.2.ECalendar.CalComponentAlarmTrigger */
    type: CalComponentAlarmTriggerType
    static name: string
}
class CalComponentAlarms {
    /* Fields of ECalendar-1.2.ECalendar.CalComponentAlarms */
    comp: CalComponent
    alarms: object[]
    /* Methods of ECalendar-1.2.ECalendar.CalComponentAlarms */
    /**
     * Frees a #ECalComponentAlarms structure.
     */
    free(): void
    static name: string
}
class CalComponentAttendee {
    /* Fields of ECalendar-1.2.ECalendar.CalComponentAttendee */
    value: string
    member: string
    rsvp: boolean
    delto: string
    delfrom: string
    sentby: string
    cn: string
    language: string
    static name: string
}
abstract class CalComponentClass {
    /* Fields of ECalendar-1.2.ECalendar.CalComponentClass */
    parent_class: GObject.ObjectClass
    static name: string
}
class CalComponentDateTime {
    /* Fields of ECalendar-1.2.ECalendar.CalComponentDateTime */
    value: object
    tzid: string
    static name: string
}
class CalComponentId {
    /* Fields of ECalendar-1.2.ECalendar.CalComponentId */
    uid: string
    rid: string
    static name: string
}
class CalComponentOrganizer {
    /* Fields of ECalendar-1.2.ECalendar.CalComponentOrganizer */
    value: string
    sentby: string
    cn: string
    language: string
    static name: string
}
class CalComponentPeriod {
    /* Fields of ECalendar-1.2.ECalendar.CalComponentPeriod */
    type: CalComponentPeriodType
    start: object
    static name: string
}
class CalComponentPrivate {
    static name: string
}
class CalComponentRange {
    /* Fields of ECalendar-1.2.ECalendar.CalComponentRange */
    type: CalComponentRangeType
    datetime: CalComponentDateTime
    static name: string
}
class CalComponentText {
    /* Fields of ECalendar-1.2.ECalendar.CalComponentText */
    value: string
    altrep: string
    static name: string
}
class CalPrivate {
    static name: string
}
abstract class CalViewClass {
    /* Fields of ECalendar-1.2.ECalendar.CalViewClass */
    parent_class: GObject.ObjectClass
    view_progress: (view: CalView, message: string, percent: number) => void
    view_done: (view: CalView, status: CalendarStatus) => void
    view_complete: (view: CalView, status: CalendarStatus, error_msg: string) => void
    static name: string
}
class CalViewPrivate {
    static name: string
}
}
export default ECalendar;