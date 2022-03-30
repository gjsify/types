/*
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/sammydre/ts-for-gjs
 */
/**
 * gSignon-1.0
 */

import type * as Gjs from './Gjs';
import type Gio from './Gio-2.0';
import type GObject from './GObject-2.0';
import type GLib from './GLib-2.0';

export namespace gSignon {

/**
 * Possible Signon errors.
 */
enum Error {
    /**
     * Catch-all for errors not distinguished by another code.
     */
    UNKNOWN,
    /**
     * Signon daemon internal error.
     */
    INTERNAL_SERVER,
    /**
     * Error communicating with Signon daemon.
     */
    INTERNAL_COMMUNICATION,
    /**
     * The operation cannot be performed due to
     * insufficient client permissions.
     */
    PERMISSION_DENIED,
    /**
     * The method with this name was not found.
     */
    METHOD_NOT_KNOWN,
    /**
     * The service is temporarily unavailable.
     */
    SERVICE_NOT_AVAILABLE,
    /**
     * Parameters for the query are invalid.
     */
    INVALID_QUERY,
    /**
     * The requested method is not available.
     */
    METHOD_NOT_AVAILABLE,
    /**
     * The identity mathching the #SignonIdentity
     * was not found on the service.
     */
    IDENTITY_NOT_FOUND,
    /**
     * Storing credentials failed.
     */
    STORE_FAILED,
    /**
     * Removing credentials failed.
     */
    REMOVE_FAILED,
    /**
     * Signing out failed.
     */
    SIGNOUT_FAILED,
    /**
     * Identity operation was canceled
     * by the user.
     */
    IDENTITY_OPERATION_CANCELED,
    /**
     * Query failed.
     */
    CREDENTIALS_NOT_AVAILABLE,
    /**
     * Trying to remove non-existent reference.
     */
    REFERENCE_NOT_FOUND,
    /**
     * The requested mechanism in not
     * available.
     */
    MECHANISM_NOT_AVAILABLE,
    /**
     * The SessionData does not contain the necessary
     * information.
     */
    MISSING_DATA,
    /**
     * The supplied credentials are invalid for
     * the mechanism implementation.
     */
    INVALID_CREDENTIALS,
    /**
     * Authorization failed.
     */
    NOT_AUTHORIZED,
    /**
     * An operation method has been called in an
     * incorrect state.
     */
    WRONG_STATE,
    /**
     * The operation is not supported by the
     * mechanism implementation.
     */
    OPERATION_NOT_SUPPORTED,
    /**
     * No network connection.
     */
    NO_CONNECTION,
    /**
     * Network connection failed.
     */
    NETWORK,
    /**
     * SSL connection failed.
     */
    SSL,
    /**
     * Casting SessionData into subclass failed.
     */
    RUNTIME,
    /**
     * Challenge was canceled.
     */
    SESSION_CANCELED,
    /**
     * Challenge timed out.
     */
    TIMED_OUT,
    /**
     * User interaction dialog failed.
     */
    USER_INTERACTION,
    /**
     * Temporary failure in authentication.
     */
    OPERATION_FAILED,
    /**
     * `deprecated:` Failure during data
     * encryption/decryption.
     */
    ENCRYPTION_FAILED,
    /**
     * User declined Terms of Service.
     */
    TOS_NOT_ACCEPTED,
    /**
     * User requested password reset sequence.
     */
    FORGOT_PASSWORD,
    /**
     * Method or mechanism not
     * allowed for this identity.
     */
    METHOD_OR_MECHANISM_NOT_ALLOWED,
    /**
     * Date/time incorrect on device.
     */
    INCORRECT_DATE,
    /**
     * Placeholder to rearrange enumeration - userspace
     * specific.
     */
    USER_ERROR,
}
/**
 * UI policy for the signon process, passed to the UI plugin.
 */
enum SessionDataUiPolicy {
    /**
     * The plugin can decide when to show UI.
     */
    DEFAULT,
    /**
     * Force the user to enter the password.
     */
    REQUEST_PASSWORD,
    /**
     * No UI elements will be shown to the user.
     */
    NO_USER_INTERACTION,
    /**
     * UI elements can be shown to the user only when
     * CAPTCHA-like security measures are required.
     */
    VALIDATION,
}
/**
 * Identity types used in #SignonIdentityInfo.
 */
enum IdentityType {
    /**
     * an identity that is not an app, web or network
     */
    OTHER,
    /**
     * an application identity
     */
    APP,
    /**
     * a web identity
     */
    WEB,
    /**
     * a network server identity
     */
    NETWORK,
}
/**
 * Caption for the UI dialog.
 */
const SESSION_DATA_CAPTION: string
/**
 * Proxy.
 */
const SESSION_DATA_PROXY: string
/**
 * Realm.
 */
const SESSION_DATA_REALM: string
/**
 * Requests the signon plugin to obtain a new token (boolean).
 */
const SESSION_DATA_RENEW_TOKEN: string
/**
 * Secret.
 */
const SESSION_DATA_SECRET: string
/**
 * Network timeout, in milliseconds (uint32).
 */
const SESSION_DATA_TIMEOUT: string
/**
 * Policy for the signon process.
 */
const SESSION_DATA_UI_POLICY: string
/**
 * Username.
 */
const SESSION_DATA_USERNAME: string
/**
 * Platform-specific window id (for dialog transiency) - uint32.
 */
const SESSION_DATA_WINDOW_ID: string
function error_quark(): GLib.Quark
function security_context_deconstruct_variant(variant: GLib.Variant): SecurityContext
function security_context_list_build_variant(list: SecurityContext[]): GLib.Variant
function security_context_list_deconstruct_variant(variant: GLib.Variant): SecurityContext[]
/**
 * This callback is invoked when the authentication plugin delivers the result
 * of the signon_auth_session_process() operation.
 */
interface AuthSessionProcessCb {
    (self: AuthSession, session_data: GLib.HashTable, error: GLib.Error): void
}
/**
 * Callback to be passed to signon_auth_session_query_available_mechanisms().
 */
interface AuthSessionQueryAvailableMechanismsCb {
    (self: AuthSession, mechanisms: string[], error: GLib.Error): void
}
/**
 * Callback to be passed to signon_auth_service_clear().
 */
interface ClearCb {
    (auth_service: AuthService, success: boolean, error: GLib.Error): void
}
/**
 * Callback to be passed to signon_identity_query_info().
 */
interface IdentityInfoCb {
    (self: Identity, info: IdentityInfo, error: GLib.Error): void
}
/**
 * Callback to be passed to signon_identity_get_auth_session().
 */
interface IdentitySessionReadyCb {
    (self: AuthSession, error: GLib.Error, connection: Gio.DBusConnection, bus_name: string, object_path: string): void
}
/**
 * Callback to be passed to signon_identity_store_credentials_with_args() or
 * signon_identity_store_credentials_with_info().
 */
interface IdentityStoreCredentialsCb {
    (self: Identity, id: number, error: GLib.Error): void
}
/**
 * Callback to be passed to signon_identity_verify_user().
 */
interface IdentityVerifyCb {
    (self: Identity, valid: boolean, error: GLib.Error): void
}
/**
 * Generic callback to be passed to several #SignonIdentity methods.
 */
interface IdentityVoidCb {
    (self: Identity, error: GLib.Error): void
}
/**
 * Callback to be passed to signon_auth_service_query_identities().
 */
interface QueryIdentitiesCb {
    (auth_service: AuthService, identities: Identity[], error: GLib.Error): void
}
/**
 * Callback to be passed to signon_auth_service_query_mechanisms().
 */
interface QueryMechanismCb {
    (auth_service: AuthService, method: string, mechanisms: string[], error: GLib.Error): void
}
/**
 * Callback to be passed to signon_auth_service_query_methods().
 */
interface QueryMethodsCb {
    (auth_service: AuthService, methods: string[], error: GLib.Error): void
}
interface AuthService_ConstructProps extends GObject.Object_ConstructProps {
}
class AuthService {
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of gSignon-1.0.gSignon.AuthService */
    /**
     * Clears / wipes out all stored data.
     * @param cb callback to be invoked.
     */
    clear(cb: ClearCb): void
    /**
     * Query available identities, possibly applying a filter.
     * 
     * `filter` is a #GHashTable that contains filter conditions in the form of
     * string keys and #GVariant values. Currently the following keys are supported:
     * 
     * - "Owner". The value should be a #SignonSecurityContext (use
     * signon_security_context_build_variant() to create a #GVariant).
     * Identites whose owner doesn't match will be filtered out. This key has
     * effect only if the requesting application is a keychain application as determined
     * by #GSignondAccessControlManager.
     * - "Type". The value should be a #SignonIdentityType.
     * - "Caption". The value is a string, and only those identites whose caption
     * begins with the supplied value will be returned.
     * 
     * The meaning of `application_context` is explained in #SignonSecurityContext.
     * It is used by #GSignondAccessControlManager to determine if the requesting
     * application is a keychain application. If it is, then all identites will be
     * returned (subject to "Owner" key in `filter)`. If it's not, then only the
     * identites which the application owns will be returned (but "Type" and "Caption"
     * can still be set in the `filter)`.
     * @param filter filter variant dictionary based on #GHashTable.
     * @param application_context application security context, can be %NULL.
     * @param cb callback to be invoked.
     */
    query_identities(filter: GLib.HashTable, application_context: string, cb: QueryIdentitiesCb): void
    /**
     * Lists all the available mechanisms for an authentication method.
     * @param method the name of the method whose mechanisms must be retrieved.
     * @param cb callback to be invoked.
     */
    query_mechanisms(method: string, cb: QueryMechanismCb): void
    /**
     * Lists all the available authentication methods.
     * @param cb callback to be invoked.
     */
    query_methods(cb: QueryMethodsCb): void
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
    connect(sigName: "notify", callback: (($obj: AuthService, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: AuthService, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: AuthService_ConstructProps)
    _init (config?: AuthService_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): AuthService
    static $gtype: GObject.Type
}
interface AuthSession_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of gSignon-1.0.gSignon.AuthSession */
    identity?: Identity
}
class AuthSession {
    /* Properties of gSignon-1.0.gSignon.AuthSession */
    readonly identity: Identity
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of gSignon-1.0.gSignon.AuthSession */
    /**
     * Cancel the authentication session.
     */
    cancel(): void
    /**
     * Get the current authentication method.
     */
    get_method(): string
    /**
     * Performs one step of the authentication process. If the #SignonIdentity that
     * this session belongs to contains a username and a password, they will be also
     * passed to the authentication plugin, otherwise they should be set directly in
     * `session_data`.
     * `session_data` should be used to add additional authentication parameters to the
     * session, or to override the parameters otherwise taken from the identity.
     * @param session_data a dictionary of parameters.
     * @param mechanism the authentication mechanism to be used.
     * @param cb a callback which will be called with the result.
     */
    process(session_data: GLib.HashTable, mechanism: string, cb: AuthSessionProcessCb): void
    /**
     * Performs one step of the authentication process.
     * `session_data` should be used to add additional authentication parameters to the
     * session.
     * 
     * What specific parameters should be used can be found from authentication plugins'
     * documentation (look for parameters that are expected in gsignond_plugin_request_initial()
     * for the first step, and parameters that are expected in gsignond_plugin_request() for
     * the subsequent steps). See, for example, #GSignondPasswordPlugin and #GSignondDigestPlugin.
     * 
     * If the #SignonIdentity that this session belongs to contains a username and a password,
     * the daemon will pass them to the authentication plugin, otherwise they should be set directly in
     * `session_data`. The daemon also passes a list of identity's allowed realms to the plugin,
     * and they cannot be overriden.
     * @param session_data a dictionary of parameters.
     * @param mechanism the authentication mechanism to be used.
     * @param cancellable optional #GCancellable object, %NULL to ignore.
     * @param callback a callback which will be called when the authentication reply is available.
     */
    process_async(session_data: GLib.Variant, mechanism: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    /**
     * Collect the result of the signon_auth_session_process_async() operation.
     * @param res A #GAsyncResult obtained from the #GAsyncReadyCallback passed to signon_auth_session_process_async().
     */
    process_finish(res: Gio.AsyncResult): GLib.Variant
    /**
     * Queries the mechanisms available for this authentication session. The result
     * will be the intersection between `wanted_mechanisms` and the mechanisms
     * supported by the authentication plugin (and allowed by the #SignonIdentity that this
     * session belongs to).
     * @param wanted_mechanisms a %NULL-terminated list of mechanisms supported by the client.
     * @param cb a callback which will be called with the result.
     */
    query_available_mechanisms(wanted_mechanisms: string, cb: AuthSessionQueryAvailableMechanismsCb): void
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
    /* Signals of gSignon-1.0.gSignon.AuthSession */
    /**
     * Emitted when the state of the #SignonAuthSession changes. The state change
     * is initiated by #GSignondPlugin via #GSignondPlugin::status-changed signal.
     * @param state the current state of the #SignonAuthSession
     * @param message the message associated with the state change
     */
    connect(sigName: "state-changed", callback: (($obj: AuthSession, state: number, message: string) => void)): number
    connect_after(sigName: "state-changed", callback: (($obj: AuthSession, state: number, message: string) => void)): number
    emit(sigName: "state-changed", state: number, message: string): void
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
    connect(sigName: "notify", callback: (($obj: AuthSession, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: AuthSession, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::identity", callback: (($obj: AuthSession, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::identity", callback: (($obj: AuthSession, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: AuthSession_ConstructProps)
    _init (config?: AuthSession_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(id: number, method_name: string): AuthSession
    static new_for_identity(identity: Identity, method_name: string): AuthSession
    static $gtype: GObject.Type
}
interface Identity_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of gSignon-1.0.gSignon.Identity */
    app_ctx?: string
    id?: number
}
class Identity {
    /* Properties of gSignon-1.0.gSignon.Identity */
    app_ctx: string
    id: number
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of gSignon-1.0.gSignon.Identity */
    /**
     * Adds named reference to identity. Not currently supported by gSSO.
     * @param reference reference to be added
     * @param cb callback
     */
    add_reference(reference: string, cb: IdentityReferenceAddedCb): void
    /**
     * Creates an authentication session for this identity. If the identity has been
     * retrieved from the database, the authentication method must be one of those
     * listed in signon_identity_info_get_methods(), otherwise it can be any method
     * supported by gSSO.
     * @param method authentication method.
     */
    create_session(method: string): AuthSession
    /**
     * Obtain a remote object for a local session object. Should not be used by
     * applications.
     * @param session the #SignonAuthSession object to get the remote object for.
     * @param method method name for the session.
     * @param cb completion callback.
     */
    get_auth_session(session: AuthSession, method: string, cb: IdentitySessionReadyCb): void
    /**
     * Get the most recent error that occurred on `identity`.
     */
    get_last_error(): GLib.Error
    /**
     * Fetches the #SignonIdentityInfo data associated with this
     * identity.
     * @param cb callback.
     */
    query_info(cb: IdentityInfoCb): void
    /**
     * Removes the corresponding credentials record from the database.
     * @param cb callback to be called when the operation has completed.
     */
    remove(cb: IdentityRemovedCb): void
    /**
     * Removes named reference from identity. Not currently supported by gSSO.
     * @param reference reference to be removed
     * @param cb callback
     */
    remove_reference(reference: string, cb: IdentityReferenceRemovedCb): void
    /**
     * Requests user to re-enter his credentials.
     * @param message message to be displayed to the user.
     * @param cb callback to be called when the operation has completed.
     */
    request_credentials_update(message: string, cb: IdentityCredentialsUpdatedCb): void
    /**
     * Asks signond to close all authentication sessions for this
     * identity, and to remove any stored secrets associated with it (password and
     * authentication tokens).
     * @param cb callback.
     */
    signout(cb: IdentitySignedOutCb): void
    /**
     * Stores the given data into the identity. See above for the meaning
     * of the specific fields.
     * @param username username.
     * @param secret secret.
     * @param store_secret whether gSSO should save the password in secret storage.
     * @param methods allowed methods.
     * @param caption caption.
     * @param realms allowed realms.
     * @param owner owner.
     * @param access_control_list access control list.
     * @param type the type of the identity.
     * @param cb callback.
     */
    store_credentials_with_args(username: string | null, secret: string | null, store_secret: boolean, methods: GLib.HashTable, caption: string | null, realms: string | null, owner: SecurityContext | null, access_control_list: SecurityContext[] | null, type: IdentityType, cb: IdentityStoreCredentialsCb): void
    /**
     * Stores the data contained in `info` into the identity record in the database.
     * See above for the detailed discussion of the meaning of various fields and
     * their defaults.
     * @param info the #SignonIdentityInfo data to store.
     * @param cb callback.
     */
    store_credentials_with_info(info: IdentityInfo, cb: IdentityStoreCredentialsCb): void
    /**
     * Asks user to enter his credentials to verify the current user.
     * @param args optional extra arguments (vardict) controlling SignOn UI.
     * @param cb callback.
     */
    verify_user(args: GLib.Variant, cb: IdentityVerifyCb): void
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
    /* Signals of gSignon-1.0.gSignon.Identity */
    /**
     * Emitted when the identity was removed (deleted).
     */
    connect(sigName: "removed", callback: (($obj: Identity) => void)): number
    connect_after(sigName: "removed", callback: (($obj: Identity) => void)): number
    emit(sigName: "removed"): void
    /**
     * Emitted when the identity was signed out.
     */
    connect(sigName: "signout", callback: (($obj: Identity) => void)): number
    connect_after(sigName: "signout", callback: (($obj: Identity) => void)): number
    emit(sigName: "signout"): void
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
    connect(sigName: "notify", callback: (($obj: Identity, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Identity, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::app-ctx", callback: (($obj: Identity, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::app-ctx", callback: (($obj: Identity, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::id", callback: (($obj: Identity, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::id", callback: (($obj: Identity, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Identity_ConstructProps)
    _init (config?: Identity_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): Identity
    static new_from_db(id: number): Identity
    static new_with_context(application_context: string): Identity
    static new_with_context_from_db(id: number, application_context: string): Identity
    static $gtype: GObject.Type
}
abstract class AuthServiceClass {
    /* Fields of gSignon-1.0.gSignon.AuthServiceClass */
    /**
     * a reference to the parent class
     */
    parent_class: GObject.ObjectClass
    static name: string
}
class AuthServicePrivate {
    static name: string
}
abstract class AuthSessionClass {
    /* Fields of gSignon-1.0.gSignon.AuthSessionClass */
    /**
     * reference to the parent class
     */
    parent: GObject.ObjectClass
    static name: string
}
class AuthSessionPrivate {
    static name: string
}
abstract class IdentityClass {
    /* Fields of gSignon-1.0.gSignon.IdentityClass */
    parent_class: GObject.ObjectClass
    static name: string
}
class IdentityInfo {
    /* Methods of gSignon-1.0.gSignon.IdentityInfo */
    /**
     * Appends a new #SignonSecurityContext item to the access control list.
     * @param security_context a security context to be appended.
     */
    access_control_list_append(security_context: SecurityContext): void
    /**
     * Get a newly-allocated copy of `info`.
     */
    copy(): IdentityInfo
    /**
     * Destroys the given #SignonIdentityInfo item.
     */
    free(): void
    /**
     * Get an access control list associated with an identity.
     */
    get_access_control_list(): SecurityContext[]
    /**
     * Get the display name of `info`.
     */
    get_caption(): string
    /**
     * Get the numeric identity ID of `info`.
     */
    get_id(): number
    /**
     * Get the type of the identity.
     */
    get_identity_type(): IdentityType
    /**
     * Get a hash table of the methods and mechanisms of `info`. See
     * signon_identity_info_set_methods().
     */
    get_methods(): GLib.HashTable
    /**
     * Get identity owner's security context.
     */
    get_owner(): SecurityContext
    /**
     * Get an array of the allowed realms of `info`.
     */
    get_realms(): string[]
    /**
     * Get whether the secret of `info` should be stored by gSSO in the secret database.
     */
    get_storing_secret(): boolean
    /**
     * Get the username associated with an identity.
     */
    get_username(): string
    /**
     * Set authentication methods that are allowed to be used with this identity.
     * 
     * This function will just increment reference count of hash table, so
     * it should be constructed with #g_hash_table_new_full.
     * @param methods methods.
     */
    own_methods(methods: GLib.HashTable): void
    /**
     * Remove `method` from the list of allowed authentication methods.
     * @param method an authentication method.
     */
    remove_method(method: string): void
    /**
     * Set an access control list associated with an identity.
     * @param access_control_list a list of ACL security contexts.
     */
    set_access_control_list(access_control_list: SecurityContext[]): void
    /**
     * Sets the caption (display name) for the identity.
     * @param caption the caption.
     */
    set_caption(caption: string): void
    /**
     * Specifies the type of this identity.
     * @param type the type of the identity.
     */
    set_identity_type(type: IdentityType): void
    /**
     * Adds a method to the list of allowed authentication methods.
     * @param method an authentication method.
     * @param mechanisms a %NULL-terminated list of mechanisms.
     */
    set_method(method: string, mechanisms: string[]): void
    /**
     * Set authentication methods that are allowed to be used with this identity.
     * @param methods methods.
     */
    set_methods(methods: GLib.HashTable): void
    /**
     * Set identity owner's security context.
     * @param owner a security context of owner.
     */
    set_owner(owner: SecurityContext): void
    /**
     * Set identity owner's security context.
     * @param system_context owner's system context.
     * @param application_context owner's application context.
     */
    set_owner_from_values(system_context: string, application_context: string): void
    /**
     * Specify what realms this identity can be used in.
     * @param realms a %NULL-terminated list of realms.
     */
    set_realms(realms: string[]): void
    /**
     * Sets the secret (password) for the identity, and whether the gSSO daemon
     * should remember it.
     * @param secret the secret.
     * @param store_secret whether signond should store the secret in its DB.
     */
    set_secret(secret: string, store_secret: boolean): void
    /**
     * Sets the username for the identity.
     * @param username the username.
     */
    set_username(username: string): void
    static name: string
    static new(): IdentityInfo
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): IdentityInfo
}
class IdentityPrivate {
    static name: string
}
class SecurityContext {
    /* Fields of gSignon-1.0.gSignon.SecurityContext */
    /**
     * system context, such as SMACK-label, MSSF token or just a
     *           binary path.
     */
    sys_ctx: string
    /**
     * application context, such as a script or a web page.
     */
    app_ctx: string
    /* Methods of gSignon-1.0.gSignon.SecurityContext */
    /**
     * Build a GVariant of type "(ss)" from a #SignonSecurityContext item.
     */
    build_variant(): GLib.Variant
    /**
     * Copy a security context item.
     */
    copy(): SecurityContext
    /**
     * Frees a security context item.
     */
    free(): void
    /**
     * Get the application context part (such as script name or a web page) of
     * the #SignonSecurityContext.
     */
    get_application_context(): string
    /**
     * Get the system context part (such as SMACK label or MSSF token) of the
     * #SignonSecurityContext.
     */
    get_system_context(): string
    /**
     * Sets the application context part (such as a script name or a web page) of
     * the #SignonSecurityContext.
     * @param application_context application security context.
     */
    set_application_context(application_context: string): void
    /**
     * Sets the system context part (such as SMACK label or MSSF token) of the
     * #SignonSecurityContext.
     * @param system_context system security context.
     */
    set_system_context(system_context: string): void
    static name: string
    static new(): SecurityContext
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): SecurityContext
    static new_from_values(system_context: string, application_context: string): SecurityContext
    /**
     * Builds a #SignonSecurityContext item from a GVariant of type "(ss)".
     * @param variant GVariant item with a #SignonSecurityContext construct.
     */
    static deconstruct_variant(variant: GLib.Variant): SecurityContext
    /**
     * Builds a GVariant of type "a(ss)" from a GList of #SignonSecurityContext
     * items.
     * @param list #GList item of #SignonSecurityContext.
     */
    static list_build_variant(list: SecurityContext[]): GLib.Variant
    /**
     * Builds a GList of #SignonSecurityContext items from a GVariant of type
     * "a(ss)".
     * @param variant GVariant item with a list of security context tuples.
     */
    static list_deconstruct_variant(variant: GLib.Variant): SecurityContext[]
}
class _AuthSession {
    /* Fields of gSignon-1.0.gSignon._AuthSession */
    parent: GObject.Object
    priv: AuthSessionPrivate
    static name: string
}
class _Identity {
    /* Fields of gSignon-1.0.gSignon._Identity */
    parent_instance: GObject.Object
    priv: IdentityPrivate
    static name: string
}
    type AuthSessionQueryAvailableMethodsCb = AuthSessionQueryAvailableMechanismsCb
    type IdentityCredentialsUpdatedCb = IdentityVoidCb
    type IdentityReferenceAddedCb = IdentityVoidCb
    type IdentityReferenceRemovedCb = IdentityVoidCb
    type IdentityRemovedCb = IdentityVoidCb
    type IdentitySignedOutCb = IdentityVoidCb
}
export default gSignon;