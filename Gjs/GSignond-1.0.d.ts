/*
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/sammydre/ts-for-gjs
 */
/**
 * GSignond-1.0
 */

import type * as Gjs from './Gjs';
import type Gio from './Gio-2.0';
import type GObject from './GObject-2.0';
import type GLib from './GLib-2.0';

export namespace GSignond {

/**
 * This enum provides a list of errors that plugins and extensions can use.
 */
enum Error {
    /**
     * No error
     */
    NONE,
    /**
     * Catch-all for errors not distinguished by another code.
     */
    UNKNOWN,
    /**
     * Signon Daemon internal error.
     */
    INTERNAL_SERVER,
    /**
     * Communication with Signon Daemon error.
     */
    INTERNAL_COMMUNICATION,
    /**
     * The operation cannot be performed due to insufficient client permissions.
     */
    PERMISSION_DENIED,
    /**
     * Failure during data encryption/decryption.
     */
    ENCRYPTION_FAILURE,
    /**
     * Placeholder to rearrange enumeration - AuthService specific
     */
    AUTH_SERVICE_ERR,
    /**
     * The method with this name is not found.
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
     * Placeholder to rearrange enumeration - Identity specific
     */
    IDENTITY_ERR,
    /**
     * The requested method is not available.
     */
    METHOD_NOT_AVAILABLE,
    /**
     * The identity matching this Identity object was not found on the service.
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
     * SignOut failed.
     */
    SIGN_OUT_FAILED,
    /**
     * Identity operation was canceled by user.
     */
    IDENTITY_OPERATION_CANCELED,
    /**
     * Query failed.
     */
    CREDENTIALS_NOT_AVAILABLE,
    /**
     * Trying to remove nonexistent reference.
     */
    REFERENCE_NOT_FOUND,
    /**
     * Placeholder to rearrange enumeration - AuthSession/PluginInterface specific
     */
    AUTH_SESSION_ERR,
    /**
     * The requested mechanism is not available.
     */
    MECHANISM_NOT_AVAILABLE,
    /**
     * The SessionData object does not contain necessary information.
     */
    MISSING_DATA,
    /**
     * The supplied credentials are invalid for the mechanism implementation.
     */
    INVALID_CREDENTIALS,
    /**
     * Authorization failed.
     */
    NOT_AUTHORIZED,
    /**
     * An operation method has been called in a wrong state.
     */
    WRONG_STATE,
    /**
     * The operation is not supported by the mechanism implementation.
     */
    OPERATION_NOT_SUPPORTED,
    /**
     * No Network connetion.
     */
    NO_CONNECTION,
    /**
     * Network connetion failed.
     */
    NETWORK,
    /**
     * Ssl connection failed.
     */
    SSL,
    /**
     * Casting SessionData into subclass failed
     */
    RUNTIME,
    /**
     * Challenge was cancelled.
     */
    SESSION_CANCELED,
    /**
     * Challenge was timed out.
     */
    TIMED_OUT,
    /**
     * User interaction dialog failed
     */
    USER_INTERACTION,
    /**
     * Temporary failure in authentication.
     */
    OPERATION_FAILED,
    /**
     * Failure during data encryption/decryption.
     */
    ENCRYPTION_FAILED,
    /**
     * User declined Terms of Service.
     */
    TOS_NOT_ACCEPTED,
    /**
     * User requested reset password sequence.
     */
    FORGOT_PASSWORD,
    /**
     * Method or mechanism not allowed for this identity.
     */
    METHOD_OR_MECHANISM_NOT_ALLOWED,
    /**
     * Date time incorrect on device.
     */
    INCORRECT_DATE,
    /**
     * Placeholder to rearrange enumeration - User space specific
     */
    USER_ERR,
}
/**
 * The plugin provides state updates by emitting #GSignondPlugin::status-changed
 * signal with this enum and a string describing what happened.
 */
enum PluginState {
    /**
     * State unknown
     */
    NONE,
    /**
     * Resolving remote server host name
     */
    RESOLVING,
    /**
     * Connecting to remote server
     */
    CONNECTING,
    /**
     * Sending data to remote server
     */
    SENDING_DATA,
    /**
     * Waiting for reply from remote server
     */
    WAITING,
    /**
     * Waiting for response from user
     */
    USER_PENDING,
    /**
     * Refreshing ui request
     */
    REFRESHING,
    /**
     * Request has been queued
     */
    PROCESS_PENDING,
    /**
     * Request has been dequeued
     */
    STARTED,
    /**
     * Canceling current process
     */
    CANCELING,
    /**
     * Process is finished
     */
    DONE,
    /**
     * Holding long non-expired token
     */
    HOLDING,
}
/**
 * This enum defines errors that may happen during user interaction.
 */
enum SignonuiError {
    /**
     * No errors
     */
    NONE,
    /**
     * Generic error during interaction
     */
    GENERAL,
    /**
     * Cannot send request to signon-ui
     */
    NO_SIGNONUI,
    /**
     * Signon-Ui cannot create dialog based on the given UiSessionData
     */
    BAD_PARAMETERS,
    /**
     * User canceled action. Plugin should not retry automatically after this
     */
    CANCELED,
    /**
     * Requested ui is not available. For example browser cannot be started
     */
    NOT_AVAILABLE,
    /**
     * Given url was not valid
     */
    BAD_URL,
    /**
     * Given captcha image was not valid
     */
    BAD_CAPTCHA,
    /**
     * Given url for capctha loading was not valid
     */
    BAD_CAPTCHA_URL,
    /**
     * Refresh failed
     */
    REFRESH_FAILED,
    /**
     * Showing ui forbidden by ui policy
     */
    FORBIDDEN,
    /**
     * User pressed forgot password
     */
    FORGOT_PASSWORD,
}
/**
 * Policy setting to define how plugins should handle interaction with the user.
 */
enum UiPolicy {
    /**
     * use a default user interaction scenario
     */
    DEFAULT,
    /**
     * force an authorization request from the user;
     * any cached access tokens should be discarded by the plugin.
     */
    REQUEST_PASSWORD,
    /**
     * force no interaction with the user
     */
    NO_USER_INTERACTION,
    /**
     * interaction with the user is only allowed
     * for validation captchas and similar security measures
     */
    VALIDATION,
}
/**
 * A prefix for dbus timeout keys. Should be used only when defining new keys.
 */
const CONFIG_DBUS_TIMEOUTS: string
/**
 * A prefix for general keys. Should be used only when defining new keys.
 */
const CONFIG_GENERAL: string
function error_new_from_variant(var_: GLib.Variant): GLib.Error | null
function error_quark(): GLib.Quark
function error_to_variant(error: GLib.Error): GLib.Variant | null
function generate_nonce(): string
function is_host_in_domain(host: string, domain: string): boolean
function new_io_stream_from_fd(in_fd: number, out_fd: number, close_fds: boolean): Gio.IOStream
function security_context_from_variant(variant: GLib.Variant): SecurityContext
function sequence_to_array(seq: GLib.Sequence): string[]
function wipe_directory(dirname: string): boolean
function wipe_file(filename: string): boolean
class Plugin {
    /* Properties of GSignond-1.0.GSignond.Plugin */
    /**
     * This property holds a list of authentication mechanisms that the plugin
     * implements, all specified within the authentication method. For example,
     * OAuth plugin could implement "oauth1" and "oauth2" mechanisms.
     */
    readonly mechanisms: string[]
    /**
     * This property holds a plugin type, or authentication method it implements
     * (for example "oauth" or "sasl").
     */
    readonly type: string
    /* Methods of GSignond-1.0.GSignond.Plugin */
    /**
     * This method cancels an ongoing authentication session. The plugin implementations
     * should issue a #GSignondPlugin::error signal with #GSIGNOND_ERROR_SESSION_CANCELED
     * error, and prepare for a new authentication session.
     */
    cancel(): void
    /**
     * Plugin implementations should use this to issue #GSignondPlugin::error
     * signal. This method should not be used otherwise.
     * @param error the error
     */
    error(error: GLib.Error): void
    /**
     * This method asks the plugin to refresh the UI. The plugin responds with
     * #GSignondPlugin::refreshed signal.
     * @param ui_data UI refresh parameters
     */
    refresh(ui_data: SignonuiData): void
    /**
     * Plugin implementations should use this to issue #GSignondPlugin::refreshed
     * signal. This method should not be used otherwise.
     * @param ui_data UI data
     */
    refreshed(ui_data: SignonuiData): void
    /**
     * This method provides the plugin with additional parameters for the session
     * after the plugin has asked for it via #GSignondPlugin::response signal.
     * @param session_data additional parameters for the session
     */
    request(session_data: SessionData): void
    /**
     * This method starts a new authentication session.
     * @param session_data parameters for the session
     * @param identity_method_cache data from persistent storage, saved previously via #GSignondPlugin::store signal
     * @param mechanism mechanism to use for the authentication
     */
    request_initial(session_data: SessionData, identity_method_cache: Dictionary, mechanism: string): void
    /**
     * Plugin implementations should use this to issue #GSignondPlugin::response
     * signal. This method should not be used otherwise.
     * @param session_data session data
     */
    response(session_data: SessionData): void
    /**
     * Plugin implementations should use this to issue #GSignondPlugin::response-final
     * signal. This method should not be used otherwise.
     * @param session_data session data
     */
    response_final(session_data: SessionData): void
    /**
     * Plugin implementations should use this to issue #GSignondPlugin::status-changed
     * signal. This method should not be used otherwise.
     * @param state the new state
     * @param message the message
     */
    status_changed(state: PluginState, message: string): void
    /**
     * Plugin implementations should use this to issue #GSignondPlugin::store
     * signal. This method should not be used otherwise.
     * @param identity_method_cache data to store
     */
    store(identity_method_cache: Dictionary): void
    /**
     * This method provides the plugin with the results of UI interaction
     * after the plugin has asked for it via #GSignondPlugin::user-action-required signal.
     * @param ui_data results of UI interaction
     */
    user_action_finished(ui_data: SignonuiData): void
    /**
     * Plugin implementations should use this to issue #GSignondPlugin::user-action-required
     * signal. This method should not be used otherwise.
     * @param ui_data UI data
     */
    user_action_required(ui_data: SignonuiData): void
    /* Virtual methods of GSignond-1.0.GSignond.Plugin */
    /**
     * This method cancels an ongoing authentication session. The plugin implementations
     * should issue a #GSignondPlugin::error signal with #GSIGNOND_ERROR_SESSION_CANCELED
     * error, and prepare for a new authentication session.
     */
    vfunc_cancel(): void
    /**
     * This method asks the plugin to refresh the UI. The plugin responds with
     * #GSignondPlugin::refreshed signal.
     * @param ui_data UI refresh parameters
     */
    vfunc_refresh(ui_data: SignonuiData): void
    /**
     * This method provides the plugin with additional parameters for the session
     * after the plugin has asked for it via #GSignondPlugin::response signal.
     * @param session_data additional parameters for the session
     */
    vfunc_request(session_data: SessionData): void
    /**
     * This method starts a new authentication session.
     * @param session_data parameters for the session
     * @param identity_method_cache data from persistent storage, saved previously via #GSignondPlugin::store signal
     * @param mechanism mechanism to use for the authentication
     */
    vfunc_request_initial(session_data: SessionData, identity_method_cache: Dictionary, mechanism: string): void
    /**
     * This method provides the plugin with the results of UI interaction
     * after the plugin has asked for it via #GSignondPlugin::user-action-required signal.
     * @param ui_data results of UI interaction
     */
    vfunc_user_action_finished(ui_data: SignonuiData): void
    /* Signals of GSignond-1.0.GSignond.Plugin */
    /**
     * This signal is issued by the plugin when an error has occurred, or the
     * plugin otherwise has a reason to cancel the authentication session. The
     * `error` should be specified according to
     * <link linkend="gsignond-Errors">GSignond errors.</link>
     * @param error the details of the error
     */
    connect(sigName: "error", callback: (($obj: Plugin, error: GLib.Error) => void)): number
    connect_after(sigName: "error", callback: (($obj: Plugin, error: GLib.Error) => void)): number
    emit(sigName: "error", error: GLib.Error): void
    /**
     * This signal is issued by the plugin when the UI interaction is ongoing
     * and the UI needs to be refreshed. This can be used for example to update
     * captcha image in the UI.
     * @param ui_data parameters for UI refresh
     */
    connect(sigName: "refreshed", callback: (($obj: Plugin, ui_data: SignonuiData) => void)): number
    connect_after(sigName: "refreshed", callback: (($obj: Plugin, ui_data: SignonuiData) => void)): number
    emit(sigName: "refreshed", ui_data: SignonuiData): void
    /**
     * This signal is issued by the plugin when it wants to provide an intermediate
     * response to the application or needs additional information from the application.
     * 
     * After issuing this signal the plugin expects a gsignond_plugin_response() call.
     * @param session_data a #GSignondSessionData containing signal parameters
     */
    connect(sigName: "response", callback: (($obj: Plugin, session_data: SessionData) => void)): number
    connect_after(sigName: "response", callback: (($obj: Plugin, session_data: SessionData) => void)): number
    emit(sigName: "response", session_data: SessionData): void
    /**
     * This signal is issued by the plugin when it has completed the authentication
     * sequence and is used to provide the final response to the application.
     * 
     * After issuing this signal the plugin is idle and is ready for a new
     * authentication session.
     * @param session_data a #GSignondSessionData containing signal parameters
     */
    connect(sigName: "response-final", callback: (($obj: Plugin, session_data: SessionData) => void)): number
    connect_after(sigName: "response-final", callback: (($obj: Plugin, session_data: SessionData) => void)): number
    emit(sigName: "response-final", session_data: SessionData): void
    /**
     * This signal is issued by the plugin when plugin state has changed. This
     * can be used by applications to report authentication progress.
     * @param state the plugin state
     * @param message the message that accompanies the state change
     */
    connect(sigName: "status-changed", callback: (($obj: Plugin, state: PluginState, message: string) => void)): number
    connect_after(sigName: "status-changed", callback: (($obj: Plugin, state: PluginState, message: string) => void)): number
    emit(sigName: "status-changed", state: PluginState, message: string): void
    /**
     * This signal is issued by the plugin when it has data to store in persistent
     * storage. The same data would later be provided to plugin via
     * gsignond_plugin_request_initial `identity_method_cache` parameter.
     * @param data a #GSignondDictionary containing data to place in persistent storage
     */
    connect(sigName: "store", callback: (($obj: Plugin, data: Dictionary) => void)): number
    connect_after(sigName: "store", callback: (($obj: Plugin, data: Dictionary) => void)): number
    emit(sigName: "store", data: Dictionary): void
    /**
     * This signal is issued by the plugin when it needs a UI interaction with
     * the user to happen. When the interaction is complete, gsignond_plugin_user_action_finished()
     * should be issued.
     * @param ui_data parameters for UI interaction
     */
    connect(sigName: "user-action-required", callback: (($obj: Plugin, ui_data: SignonuiData) => void)): number
    connect_after(sigName: "user-action-required", callback: (($obj: Plugin, ui_data: SignonuiData) => void)): number
    emit(sigName: "user-action-required", ui_data: SignonuiData): void
    static name: string
}
interface AccessControlManager_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of GSignond-1.0.GSignond.AccessControlManager */
    config?: Config
}
class AccessControlManager {
    /* Properties of GSignond-1.0.GSignond.AccessControlManager */
    readonly config: Config
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of GSignond-1.0.GSignond.AccessControlManager */
    /**
     * Checks if the specified peer is allowed to set the specified access
     * control list. gsignond_access_control_manager_peer_is_owner_of_identity()
     * is used before calling this method to verify identity ownership.
     * 
     * The default implementation always returns %TRUE.
     * @param peer_ctx security context of the peer connection.
     * @param identity_acl access control list for the identity.
     */
    acl_is_valid(peer_ctx: SecurityContext, identity_acl: SecurityContext[]): boolean
    /**
     * Checks if specified peer is allowed to access the specified identity.
     * 
     * The default implementation goes over items in `identity_acl,` using
     * gsignond_security_context_check() to check them against `peer_ctx`.
     * @param peer_ctx security context of the peer connection.
     * @param owner_ctx security context of the identity owner.
     * @param identity_acl access control list for the identity in question. Includes the `owner_ctx` as well.
     */
    peer_is_allowed_to_use_identity(peer_ctx: SecurityContext, owner_ctx: SecurityContext, identity_acl: SecurityContext[]): boolean
    /**
     * Checks if the peer specified in `peer_ctx` is the owner of the identity.
     * 
     * The default implementation is using gsignond_security_context_check()
     * to check `peer_ctx` against `owner_ctx` directly.
     * @param peer_ctx security context of the peer connection.
     * @param owner_ctx security context of the identity owner.
     */
    peer_is_owner_of_identity(peer_ctx: SecurityContext, owner_ctx: SecurityContext): boolean
    /**
     * Retrieves security context of the keychain application. Keychain application
     * has a special management access to all stored identities and is able to
     * perform deletion of all identities from storage.
     * 
     * The default implementation returns a context either set in #GSignondConfig,
     * or if not set, a value specified through a configure --enable-keychain
     * option (see
     * <link linkend="gsignond-building">Building gsignond</link>), or if that is not
     * set either then an empty string "" is returned.
     * 
     * If gSSO was compiled
     * with --enable-debug and SSO_KEYCHAIN_SYSCTX environment variable is set, then
     * the value of that variable is used to set the returned system context instead.
     */
    security_context_of_keychain(): SecurityContext
    /**
     * Retrieves and sets #GSignondSecurityContext of the specified peer.
     * 
     * The default implementation sets the app context as it was passed, and sets
     * the system context to the binary path of the process that is determined from
     * `peer_fd` and `peer_service` parameters.
     * @param peer_ctx instance of security context to be set.
     * @param peer_fd file descriptor of the peer connection if using peer-to-peer dbus, -1 otherwise.
     * @param peer_service g_dbus_method_invocation_get_sender() of the peer connection, if not using peer-to-peer dbus, NULL otherwise
     * @param peer_app_ctx application context of the peer connection.
     */
    security_context_of_peer(peer_ctx: SecurityContext, peer_fd: number, peer_service: string, peer_app_ctx: string): void
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
    /* Virtual methods of GSignond-1.0.GSignond.AccessControlManager */
    /**
     * Checks if the specified peer is allowed to set the specified access
     * control list. gsignond_access_control_manager_peer_is_owner_of_identity()
     * is used before calling this method to verify identity ownership.
     * 
     * The default implementation always returns %TRUE.
     * @param peer_ctx security context of the peer connection.
     * @param identity_acl access control list for the identity.
     */
    vfunc_acl_is_valid(peer_ctx: SecurityContext, identity_acl: SecurityContext[]): boolean
    /**
     * Checks if specified peer is allowed to access the specified identity.
     * 
     * The default implementation goes over items in `identity_acl,` using
     * gsignond_security_context_check() to check them against `peer_ctx`.
     * @param peer_ctx security context of the peer connection.
     * @param owner_ctx security context of the identity owner.
     * @param identity_acl access control list for the identity in question. Includes the `owner_ctx` as well.
     */
    vfunc_peer_is_allowed_to_use_identity(peer_ctx: SecurityContext, owner_ctx: SecurityContext, identity_acl: SecurityContext[]): boolean
    /**
     * Checks if the peer specified in `peer_ctx` is the owner of the identity.
     * 
     * The default implementation is using gsignond_security_context_check()
     * to check `peer_ctx` against `owner_ctx` directly.
     * @param peer_ctx security context of the peer connection.
     * @param owner_ctx security context of the identity owner.
     */
    vfunc_peer_is_owner_of_identity(peer_ctx: SecurityContext, owner_ctx: SecurityContext): boolean
    /**
     * Retrieves security context of the keychain application. Keychain application
     * has a special management access to all stored identities and is able to
     * perform deletion of all identities from storage.
     * 
     * The default implementation returns a context either set in #GSignondConfig,
     * or if not set, a value specified through a configure --enable-keychain
     * option (see
     * <link linkend="gsignond-building">Building gsignond</link>), or if that is not
     * set either then an empty string "" is returned.
     * 
     * If gSSO was compiled
     * with --enable-debug and SSO_KEYCHAIN_SYSCTX environment variable is set, then
     * the value of that variable is used to set the returned system context instead.
     */
    vfunc_security_context_of_keychain(): SecurityContext
    /**
     * Retrieves and sets #GSignondSecurityContext of the specified peer.
     * 
     * The default implementation sets the app context as it was passed, and sets
     * the system context to the binary path of the process that is determined from
     * `peer_fd` and `peer_service` parameters.
     * @param peer_ctx instance of security context to be set.
     * @param peer_fd file descriptor of the peer connection if using peer-to-peer dbus, -1 otherwise.
     * @param peer_service g_dbus_method_invocation_get_sender() of the peer connection, if not using peer-to-peer dbus, NULL otherwise
     * @param peer_app_ctx application context of the peer connection.
     */
    vfunc_security_context_of_peer(peer_ctx: SecurityContext, peer_fd: number, peer_service: string, peer_app_ctx: string): void
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
    connect(sigName: "notify", callback: (($obj: AccessControlManager, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: AccessControlManager, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::config", callback: (($obj: AccessControlManager, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::config", callback: (($obj: AccessControlManager, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: AccessControlManager_ConstructProps)
    _init (config?: AccessControlManager_ConstructProps): void
    static $gtype: GObject.Type
}
interface Config_ConstructProps extends GObject.Object_ConstructProps {
}
class Config {
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of GSignond-1.0.GSignond.Config */
    /**
     * Get an integer configuration value.
     * @param key the key name
     */
    get_integer(key: string): number
    /**
     * Get a string configuration value.
     * @param key the key name
     */
    get_string(key: string): string | null
    /**
     * Sets the configuration value to the provided integer.
     * @param key the key name
     * @param value the value
     */
    set_integer(key: string, value: number): void
    /**
     * Sets the configuration value to the provided string.
     * @param key the key name
     * @param value the value
     */
    set_string(key: string, value: string): void
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
    connect(sigName: "notify", callback: (($obj: Config, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Config, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Config_ConstructProps)
    _init (config?: Config_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): Config
    static $gtype: GObject.Type
}
interface Credentials_ConstructProps extends GObject.Object_ConstructProps {
}
class Credentials {
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of GSignond-1.0.GSignond.Credentials */
    /**
     * Compares elements of two GSignondCredentials object for equality.
     * @param two the second credential to be compared.
     */
    equal(two: Credentials): boolean
    /**
     * Gets the identity id
     */
    get_id(): number
    /**
     * Gets the password from the #GSignondCredentials object
     */
    get_password(): string | null
    /**
     * Gets the username of the #GSignondCredentials object
     */
    get_username(): string | null
    /**
     * Sets the data of the #GSignondCredentials.
     * @param id the identity id associated with the credentials.
     * @param username the username.
     * @param password the password.
     */
    set_data(id: number, username: string, password: string): boolean
    /**
     * Sets the identity id of the #GSignondCredentials object
     * @param id the id.
     */
    set_id(id: number): boolean
    /**
     * Sets the password of the GSignondCredentials object
     * @param password the password.
     */
    set_password(password?: string | null): boolean
    /**
     * Sets the username of the GSignondCredentials object
     * @param username the username.
     */
    set_username(username?: string | null): boolean
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
    connect(sigName: "notify", callback: (($obj: Credentials, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Credentials, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Credentials_ConstructProps)
    _init (config?: Credentials_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): Credentials
    static $gtype: GObject.Type
}
interface Dictionary_ConstructProps extends GObject.Object_ConstructProps {
}
class Dictionary {
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of GSignond-1.0.GSignond.Dictionary */
    /**
     * Checks if the `dict` contains `key`.
     * @param key key to check
     */
    contains(key: string): boolean
    /**
     * Creates a copy of the dictionary.
     */
    copy(): Dictionary
    /**
     * Retrieves a #GVariant value from the dictionary. This can be used to retrieve
     * a value of an arbitrary type, and then convert it manually to a specific type
     * using #GVariant methods. For most commonly used types, also getters that
     * return the specific type directly are provided (gsignond_dictionary_get_string()
     * and similar).
     * @param key the key to look up in the dictionary
     */
    get(key: string): GLib.Variant | null
    /**
     * Retrieves a gboolean value.
     * @param key key to look up
     */
    get_boolean(key: string): [ /* returnType */ boolean, /* value */ boolean ]
    /**
     * Retrieves a int32 value.
     * @param key key to look up
     */
    get_int32(key: string): [ /* returnType */ boolean, /* value */ number ]
    /**
     * Retrieves a int64 value.
     * @param key key to look up
     */
    get_int64(key: string): [ /* returnType */ boolean, /* value */ number ]
    /**
     * Retrieves a string value.
     * @param key key to look up
     */
    get_string(key: string): string | null
    /**
     * Get the #GHashTable associated to the #GSignondDictionary.
     * 
     * It should not be modified.
     */
    get_table(): GLib.HashTable
    /**
     * Retrieves a uint32 value.
     * @param key key to look up
     */
    get_uint32(key: string): [ /* returnType */ boolean, /* value */ number ]
    /**
     * Retrieves a uint64 value.
     * @param key key to look up
     */
    get_uint64(key: string): [ /* returnType */ boolean, /* value */ number ]
    /**
     * Removes key-value pair in the dictionary as per key.
     * @param key key which needs to be removed from the dictionary
     */
    remove(key: string): boolean
    /**
     * Adds or replaces key-value pair in the dictionary. This allows to set a value
     * of an arbitrary type: it first needs to be converted to a #GVariant. For most
     * commonly used types also type-specific setters are provided.
     * @param key key to be set
     * @param value value to be set
     */
    set(key: string, value: GLib.Variant): boolean
    /**
     * Sets or replaces a gboolean value in the dictionary.
     * @param key key to set
     * @param value value to set
     */
    set_boolean(key: string, value: boolean): boolean
    /**
     * Sets or replaces a int32 value in the dictionary.
     * @param key key to set
     * @param value value to set
     */
    set_int32(key: string, value: number): boolean
    /**
     * Sets or replaces a int64 value in the dictionary.
     * @param key key to set
     * @param value value to set
     */
    set_int64(key: string, value: number): boolean
    /**
     * Sets or replaces a string value in the dictionary.
     * @param key key to set
     * @param value value to set
     */
    set_string(key: string, value: string): boolean
    /**
     * Sets or replaces a uint32 value in the dictionary.
     * @param key key to set
     * @param value value to set
     */
    set_uint32(key: string, value: number): boolean
    /**
     * Sets or replaces a uint64 value in the dictionary.
     * @param key key to set
     * @param value value to set
     */
    set_uint64(key: string, value: number): boolean
    /**
     * Converts the #GSignondDictionary to a #GVariant. The result can be serialized
     * or put into another #GSignondDictionary using gsignond_dictionary_set().
     */
    to_variant(): GLib.Variant | null
    /**
     * Converts the #GSignondDictionary to a #GVariantBuilder of type
     * G_VARIANT_TYPE_VARDICT.
     * 
     * Caller should use g_variant_builder_unref() on the return value when it is
     * no longer needed.
     */
    to_variant_builder(): GLib.VariantBuilder | null
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
    connect(sigName: "notify", callback: (($obj: Dictionary, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Dictionary, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Dictionary_ConstructProps)
    _init (config?: Dictionary_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): Dictionary
    static new_from_variant(variant: GLib.Variant): Dictionary
    static $gtype: GObject.Type
}
interface Extension_ConstructProps extends GObject.Object_ConstructProps {
}
class Extension {
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of GSignond-1.0.GSignond.Extension */
    /**
     * Factory method to get a singleton access control manager object. See
     * #GSignondAccessControlManager for the description of the default implementation.
     * @param config configuration object instance.
     */
    get_access_control_manager(config: Config): AccessControlManager
    /**
     * Get a human readable name of the extension. Default implementation
     * returns "default".
     */
    get_name(): string
    /**
     * Factory method to get a singleton secret storage object. See
     * #GSignondSecretStorage for the description of the default implementation.
     * @param config configuration object instance.
     */
    get_secret_storage(config: Config): SecretStorage
    /**
     * Factory method to get a singleton storage manager object. See
     * #GSignondStorageManager for the description of the default implementation.
     * @param config configuration object instance.
     */
    get_storage_manager(config: Config): StorageManager
    /**
     * Get version of the extension, split into four bytes in order from MSB to LSB;
     * major, minor, patchlevel, build. Default implementation returns 0.
     */
    get_version(): number
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
    /* Virtual methods of GSignond-1.0.GSignond.Extension */
    /**
     * Factory method to get a singleton access control manager object. See
     * #GSignondAccessControlManager for the description of the default implementation.
     * @param config configuration object instance.
     */
    vfunc_get_access_control_manager(config: Config): AccessControlManager
    vfunc_get_extension_name(): string
    vfunc_get_extension_version(): number
    /**
     * Factory method to get a singleton secret storage object. See
     * #GSignondSecretStorage for the description of the default implementation.
     * @param config configuration object instance.
     */
    vfunc_get_secret_storage(config: Config): SecretStorage
    /**
     * Factory method to get a singleton storage manager object. See
     * #GSignondStorageManager for the description of the default implementation.
     * @param config configuration object instance.
     */
    vfunc_get_storage_manager(config: Config): StorageManager
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
    connect(sigName: "notify", callback: (($obj: Extension, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Extension, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Extension_ConstructProps)
    _init (config?: Extension_ConstructProps): void
    static $gtype: GObject.Type
}
interface SecretStorage_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of GSignond-1.0.GSignond.SecretStorage */
    config?: Config
}
class SecretStorage {
    /* Properties of GSignond-1.0.GSignond.SecretStorage */
    readonly config: Config
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of GSignond-1.0.GSignond.SecretStorage */
    /**
     * Checks whether the given credentials match what is stored in the database.
     * @param creds the credentials that are being checked.
     */
    check_credentials(creds: Credentials): boolean
    /**
     * Removes all stored secrets from the database.
     */
    clear_db(): boolean
    /**
     * Closes the database. To reopen it, call gsignond_secret_storage_open_db().
     */
    close_db(): boolean
    /**
     * Retrieves the last occurred error that has occurred
     */
    get_last_error(): GLib.Error
    /**
     * Checks if the database is open or not.
     */
    is_open_db(): boolean
    /**
     * Loads the credentials from the database.
     * @param id the identity id whose credentials are being loaded.
     */
    load_credentials(id: number): Credentials | null
    /**
     * Loads the secret data associated with a given identity and method.
     * @param id the identity id whose data are fetched
     * @param method the authentication method the data is used for.
     */
    load_data(id: number, method: number): Dictionary
    /**
     * Opens (and initializes) the database. The implementation should take
     * care of creating the DB, if it doesn't exist, and it should use
     * #GSIGNOND_CONFIG_GENERAL_SECURE_DIR
     * to determine database location in the filesystem.
     * 
     * The default implementation is using SQLite for the storage.
     */
    open_db(): boolean
    /**
     * Remove the credentials for the given identity.
     * @param id the identity whose credentials are being updated.
     */
    remove_credentials(id: number): boolean
    /**
     * Removes secret data associated with a given id/method.
     * @param id the identity whose data are fetched.
     * @param method the authentication method the data is used for.
     */
    remove_data(id: number, method: number): boolean
    /**
     * Stores/updates the credentials for the given identity.
     * @param creds the credentials that are being updated.
     */
    update_credentials(creds: Credentials): boolean
    /**
     * Calling this method updates the secret data
     * associated with the given id/method.
     * @param id the identity whose data are fetched.
     * @param method the authentication method the data is used for.
     * @param data the data to update
     */
    update_data(id: number, method: number, data: Dictionary): boolean
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
    /* Virtual methods of GSignond-1.0.GSignond.SecretStorage */
    /**
     * Checks whether the given credentials match what is stored in the database.
     * @param creds the credentials that are being checked.
     */
    vfunc_check_credentials(creds: Credentials): boolean
    /**
     * Removes all stored secrets from the database.
     */
    vfunc_clear_db(): boolean
    /**
     * Closes the database. To reopen it, call gsignond_secret_storage_open_db().
     */
    vfunc_close_db(): boolean
    /**
     * Retrieves the last occurred error that has occurred
     */
    vfunc_get_last_error(): GLib.Error
    /**
     * Checks if the database is open or not.
     */
    vfunc_is_open_db(): boolean
    /**
     * Loads the credentials from the database.
     * @param id the identity id whose credentials are being loaded.
     */
    vfunc_load_credentials(id: number): Credentials | null
    /**
     * Loads the secret data associated with a given identity and method.
     * @param id the identity id whose data are fetched
     * @param method the authentication method the data is used for.
     */
    vfunc_load_data(id: number, method: number): Dictionary
    /**
     * Opens (and initializes) the database. The implementation should take
     * care of creating the DB, if it doesn't exist, and it should use
     * #GSIGNOND_CONFIG_GENERAL_SECURE_DIR
     * to determine database location in the filesystem.
     * 
     * The default implementation is using SQLite for the storage.
     */
    vfunc_open_db(): boolean
    /**
     * Remove the credentials for the given identity.
     * @param id the identity whose credentials are being updated.
     */
    vfunc_remove_credentials(id: number): boolean
    /**
     * Removes secret data associated with a given id/method.
     * @param id the identity whose data are fetched.
     * @param method the authentication method the data is used for.
     */
    vfunc_remove_data(id: number, method: number): boolean
    /**
     * Stores/updates the credentials for the given identity.
     * @param creds the credentials that are being updated.
     */
    vfunc_update_credentials(creds: Credentials): boolean
    /**
     * Calling this method updates the secret data
     * associated with the given id/method.
     * @param id the identity whose data are fetched.
     * @param method the authentication method the data is used for.
     * @param data the data to update
     */
    vfunc_update_data(id: number, method: number, data: Dictionary): boolean
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
    connect(sigName: "notify", callback: (($obj: SecretStorage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: SecretStorage, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::config", callback: (($obj: SecretStorage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::config", callback: (($obj: SecretStorage, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: SecretStorage_ConstructProps)
    _init (config?: SecretStorage_ConstructProps): void
    static $gtype: GObject.Type
}
interface SessionData_ConstructProps extends Dictionary_ConstructProps {
}
class SessionData {
    /* Fields of GSignond-1.0.GSignond.Dictionary */
    parent_instance: GObject.Object
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of GSignond-1.0.GSignond.SessionData */
    /**
     * Creates a copy of the dictionary session data.
     */
    copy(): SessionData
    /**
     * A getter for a caption associated with the authentication session.
     * Caption tells the user which application/credentials/provider is requestion
     * authentication.
     */
    get_caption(): string
    /**
     * A getter for a network proxy setting associated with the authentication session.
     * If this property is not set, the default system proxy settings should be used.
     */
    get_network_proxy(): string
    /**
     * A getter for a network timeout setting associated with the authentication session.
     * This can be used to change the default timeout in case of unresponsive servers.
     */
    get_network_timeout(): [ /* returnType */ boolean, /* network_timeout */ number ]
    /**
     * A getter for a realm associated with the authentication session.
     */
    get_realm(): string
    /**
     * A getter for a renew token property associated with the authentication session.
     * This property tells the plugin to discard any cached tokens and start
     * the authentication process anew.
     */
    get_renew_token(): [ /* returnType */ boolean, /* renew_token */ boolean ]
    /**
     * A getter for a secret (e.g. a password) associated with the authentication session.
     */
    get_secret(): string
    /**
     * A getter for UI policy setting associated with the authentication session.
     * The UI policy indicates how the authentication plugin should interact with the user.
     */
    get_ui_policy(): [ /* returnType */ boolean, /* ui_policy */ UiPolicy ]
    /**
     * A getter for a username associated with the authentication session.
     */
    get_username(): string
    /**
     * A getter for a window id setting associated with the authentication session.
     * This can be used to embed the user interaction window produced by the authentication
     * session into an application window.
     */
    get_window_id(): [ /* returnType */ boolean, /* window_id */ number ]
    /**
     * A setter for a list of realms allowed for the identity use.
     * @param realms a #GSequence if allowed realms
     */
    set_allowed_realms(realms: GLib.Sequence): void
    /**
     * A setter for a caption associated with the authentication session.
     * Caption tells the user which application/credentials/provider is requestion
     * authentication.
     * @param caption a caption to set
     */
    set_caption(caption: string): void
    /**
     * A setter for a network proxy setting associated with the authentication session.
     * If this property is not set, the default system proxy settings should be used.
     * @param network_proxy network proxy to use
     */
    set_network_proxy(network_proxy: string): void
    /**
     * A setter for a network timeout setting associated with the authentication session.
     * This can be used to change the default timeout in case of unresponsive servers.
     * @param network_timeout network timeout to use
     */
    set_network_timeout(network_timeout: number): void
    /**
     * A setter for a realm associated with the authentication session.
     * @param realm a realm to set
     */
    set_realm(realm: string): void
    /**
     * A setter for a renew token property associated with the authentication session.
     * This property tells the plugin to discard any cached tokens and start
     * the authentication process anew.
     * @param renew_token whether to renew the token set
     */
    set_renew_token(renew_token: boolean): void
    /**
     * A setter for a secret (e.g. a password) associated with the authentication session.
     * @param secret a secret to set
     */
    set_secret(secret: string): void
    /**
     * A getter for UI policy setting associated with the authentication session.
     * The UI policy indicates how the authentication plugin should interact with the user.
     * @param ui_policy ui policy to set
     */
    set_ui_policy(ui_policy: UiPolicy): void
    /**
     * A setter for a username associated with the authentication session.
     * @param username username to set
     */
    set_username(username: string): void
    /**
     * A setter for a window id setting associated with the authentication session.
     * This can be used to embed the user interaction window produced by the authentication
     * session into an application window.
     * @param window_id window id to use
     */
    set_window_id(window_id: number): void
    /* Methods of GSignond-1.0.GSignond.Dictionary */
    /**
     * Checks if the `dict` contains `key`.
     * @param key key to check
     */
    contains(key: string): boolean
    /**
     * Creates a copy of the dictionary.
     */
    copy(): Dictionary
    /**
     * Retrieves a #GVariant value from the dictionary. This can be used to retrieve
     * a value of an arbitrary type, and then convert it manually to a specific type
     * using #GVariant methods. For most commonly used types, also getters that
     * return the specific type directly are provided (gsignond_dictionary_get_string()
     * and similar).
     * @param key the key to look up in the dictionary
     */
    get(key: string): GLib.Variant | null
    /**
     * Retrieves a gboolean value.
     * @param key key to look up
     */
    get_boolean(key: string): [ /* returnType */ boolean, /* value */ boolean ]
    /**
     * Retrieves a int32 value.
     * @param key key to look up
     */
    get_int32(key: string): [ /* returnType */ boolean, /* value */ number ]
    /**
     * Retrieves a int64 value.
     * @param key key to look up
     */
    get_int64(key: string): [ /* returnType */ boolean, /* value */ number ]
    /**
     * Retrieves a string value.
     * @param key key to look up
     */
    get_string(key: string): string | null
    /**
     * Get the #GHashTable associated to the #GSignondDictionary.
     * 
     * It should not be modified.
     */
    get_table(): GLib.HashTable
    /**
     * Retrieves a uint32 value.
     * @param key key to look up
     */
    get_uint32(key: string): [ /* returnType */ boolean, /* value */ number ]
    /**
     * Retrieves a uint64 value.
     * @param key key to look up
     */
    get_uint64(key: string): [ /* returnType */ boolean, /* value */ number ]
    /**
     * Removes key-value pair in the dictionary as per key.
     * @param key key which needs to be removed from the dictionary
     */
    remove(key: string): boolean
    /**
     * Adds or replaces key-value pair in the dictionary. This allows to set a value
     * of an arbitrary type: it first needs to be converted to a #GVariant. For most
     * commonly used types also type-specific setters are provided.
     * @param key key to be set
     * @param value value to be set
     */
    set(key: string, value: GLib.Variant): boolean
    /**
     * Sets or replaces a gboolean value in the dictionary.
     * @param key key to set
     * @param value value to set
     */
    set_boolean(key: string, value: boolean): boolean
    /**
     * Sets or replaces a int32 value in the dictionary.
     * @param key key to set
     * @param value value to set
     */
    set_int32(key: string, value: number): boolean
    /**
     * Sets or replaces a int64 value in the dictionary.
     * @param key key to set
     * @param value value to set
     */
    set_int64(key: string, value: number): boolean
    /**
     * Sets or replaces a string value in the dictionary.
     * @param key key to set
     * @param value value to set
     */
    set_string(key: string, value: string): boolean
    /**
     * Sets or replaces a uint32 value in the dictionary.
     * @param key key to set
     * @param value value to set
     */
    set_uint32(key: string, value: number): boolean
    /**
     * Sets or replaces a uint64 value in the dictionary.
     * @param key key to set
     * @param value value to set
     */
    set_uint64(key: string, value: number): boolean
    /**
     * Converts the #GSignondDictionary to a #GVariant. The result can be serialized
     * or put into another #GSignondDictionary using gsignond_dictionary_set().
     */
    to_variant(): GLib.Variant | null
    /**
     * Converts the #GSignondDictionary to a #GVariantBuilder of type
     * G_VARIANT_TYPE_VARDICT.
     * 
     * Caller should use g_variant_builder_unref() on the return value when it is
     * no longer needed.
     */
    to_variant_builder(): GLib.VariantBuilder | null
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
    connect(sigName: "notify", callback: (($obj: SessionData, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: SessionData, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: SessionData_ConstructProps)
    _init (config?: SessionData_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): SessionData
    /* Function overloads */
    static new(): SessionData
    static new_from_variant(variant: GLib.Variant): SessionData
    /* Function overloads */
    static new_from_variant(variant: GLib.Variant): SessionData
    static $gtype: GObject.Type
}
interface SignonuiData_ConstructProps extends Dictionary_ConstructProps {
}
class SignonuiData {
    /* Fields of GSignond-1.0.GSignond.Dictionary */
    parent_instance: GObject.Object
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of GSignond-1.0.GSignond.SignonuiData */
    /**
     * Creates a copy of the dictionary session data.
     */
    copy(): SignonuiData
    /**
     * A getter for the user's response to a captcha query.
     */
    get_captcha_response(): string | null
    /**
     * A getter for the captcha URL.
     */
    get_captcha_url(): string | null
    /**
     * A getter for the caption string. Caption tells the user which
     * application/credentials/provider is requestion authentication.
     */
    get_caption(): string | null
    /**
     * A getter for the confirm mode. In confirm mode the user is asked to enter
     * an old password (which is compared to the supplied password), and a new password twice
     * (which is returned).
     */
    get_confirm(): [ /* returnType */ boolean, /* confirm */ boolean ]
    /**
     * A getter for the final URL. When the signon UI detects that the user is at
     * the final URL (possibly with additional query or fragment parameters), it
     * will close the window and return the full URL via url response property.
     * This is used by redirection-based authentication, such as OAuth.
     */
    get_final_url(): string | null
    /**
     * A getter for the forgot password string which is shown to the user as a link to
     * reset the password or remind him of the password.
     */
    get_forgot_password(): string | null
    /**
     * A getter for the forgot password URL, where the user can reset or request a
     * reminder of the password.
     */
    get_forgot_password_url(): string | null
    /**
     * A getter for the message which is show to the user in the signon UI dialog.
     */
    get_message(): string | null
    /**
     * A getter for the URL that should be opened by signon UI.
     */
    get_open_url(): string | null
    /**
     * A getter for the password string.
     */
    get_password(): string | null
    /**
     * A getter for the UI interaction error. Signon UI sets this to `SIGNONUI_ERROR_NONE` if
     * there were no errors.
     */
    get_query_error(): [ /* returnType */ boolean, /* error */ SignonuiError ]
    /**
     * A getter for the query password property. It indicates whether the signon UI
     * should ask the user for a password (and return it in the password property).
     */
    get_query_password(): [ /* returnType */ boolean, /* query_password */ boolean ]
    /**
     * A getter for the query username property. It indicates whether the signon UI
     * should ask the user for a username (and return it in the username property).
     */
    get_query_username(): [ /* returnType */ boolean, /* query_username */ boolean ]
    /**
     * A getter for whether the password should be remembered.
     */
    get_remember_password(): [ /* returnType */ boolean, /* remember_password */ boolean ]
    /**
     * A getter for the dialog request id. The id identifies the dialog so that it
     * can be refreshed or updated.
     */
    get_request_id(): string | null
    /**
     * A getter for the test reply values. It's used only by the signon ui
     * implementations to test themselves.
     */
    get_test_reply(): string | null
    /**
     * A getter for the UI dialog title.
     */
    get_title(): string | null
    /**
     * A getter for the response URL. If the final URL was set in the request to the signon UI, and the signon UI
     * detects that it has been reached, then the full final URL is returned using
     * this property. This is used by redirection-based authentication such as OAauth.
     */
    get_url_response(): string | null
    /**
     * A getter for the username string.
     */
    get_username(): string | null
    /**
     * A setter for the user's response to a captcha query.
     * @param response the string entered by the user in response to a captcha query.
     */
    set_captcha_response(response: string): void
    /**
     * A setter for the captcha URL.
     * @param url the URL to the captcha image to be verified by user
     */
    set_captcha_url(url: string): void
    /**
     * A setter for the caption string. Caption tells the user which
     * application/credentials/provider is requestion authentication.
     * @param caption the caption string
     */
    set_caption(caption: string): void
    /**
     * A setter for the confirm mode. In confirm mode the user is asked to enter
     * an old password (which is compared to the supplied password), and a new password twice
     * (which is returned).
     * @param confirm the value for the property
     */
    set_confirm(confirm: boolean): void
    /**
     * A setter for the final URL. When the signon UI detects that the user is at
     * the final URL (possibly with additional query or fragment parameters), it
     * will close the window and return the full URL via url response property.
     * This is used by redirection-based authentication, such as OAuth.
     * @param url the final url
     */
    set_final_url(url: string): void
    /**
     * A setter for the forgot password string, which is shown to the user as a link to
     * reset the password or remind him of the password.
     * @param forgot the forgot password string
     */
    set_forgot_password(forgot: string): void
    /**
     * A setter for the forgot password URL, where the user can reset or request a
     * reminder of the password.
     * @param url the forgot password URL
     */
    set_forgot_password_url(url: string): void
    /**
     * A setter for the message which is show to the user in the signon UI dialog.
     * @param message the message
     */
    set_message(message: string): void
    /**
     * A setter for the URL that should be opened by signon UI.
     * @param url the url to open
     */
    set_open_url(url: string): void
    /**
     * A setter for the password string.
     * @param password the password string
     */
    set_password(password: string): void
    /**
     * A setter for the UI interaction error. Signon UI sets this to `SIGNONUI_ERROR_NONE` if
     * there were no errors.
     * @param error the error
     */
    set_query_error(error: SignonuiError): void
    /**
     * A setter for the query password property. It indicates whether the signon UI
     * should ask the user for a password (and return it in the password property).
     * @param query the property value
     */
    set_query_password(query: boolean): void
    /**
     * A setter for the query username property. It indicates whether the signon UI
     * should ask the user for a username (and return it in the username property).
     * @param query the property value
     */
    set_query_username(query: boolean): void
    /**
     * A setter for whether the password should be remembered.
     * @param remember the property value
     */
    set_remember_password(remember: boolean): void
    /**
     * A setter for the dialog request id. The id identifies the dialog so that it
     * can be refreshed or updated.
     * @param id request id
     */
    set_request_id(id: string): void
    /**
     * A setter for the test reply values. It's used only by the signon ui
     * implementations to test themselves.
     * @param reply test reply values
     */
    set_test_reply(reply: string): void
    /**
     * A setter for the UI dialog title.
     * @param title the title
     */
    set_title(title: string): void
    /**
     * A getter for the response URL. If the final URL was set in the request to the
     * signon UI, and the signon UI
     * detects that it has been reached, then the full final URL is returned using
     * this property. This is used by redirection-based authentication such as OAauth.
     * @param response the response URL
     */
    set_url_response(response: string): void
    /**
     * A setter for the username string.
     * @param username the username string
     */
    set_username(username: string): void
    /* Methods of GSignond-1.0.GSignond.Dictionary */
    /**
     * Checks if the `dict` contains `key`.
     * @param key key to check
     */
    contains(key: string): boolean
    /**
     * Creates a copy of the dictionary.
     */
    copy(): Dictionary
    /**
     * Retrieves a #GVariant value from the dictionary. This can be used to retrieve
     * a value of an arbitrary type, and then convert it manually to a specific type
     * using #GVariant methods. For most commonly used types, also getters that
     * return the specific type directly are provided (gsignond_dictionary_get_string()
     * and similar).
     * @param key the key to look up in the dictionary
     */
    get(key: string): GLib.Variant | null
    /**
     * Retrieves a gboolean value.
     * @param key key to look up
     */
    get_boolean(key: string): [ /* returnType */ boolean, /* value */ boolean ]
    /**
     * Retrieves a int32 value.
     * @param key key to look up
     */
    get_int32(key: string): [ /* returnType */ boolean, /* value */ number ]
    /**
     * Retrieves a int64 value.
     * @param key key to look up
     */
    get_int64(key: string): [ /* returnType */ boolean, /* value */ number ]
    /**
     * Retrieves a string value.
     * @param key key to look up
     */
    get_string(key: string): string | null
    /**
     * Get the #GHashTable associated to the #GSignondDictionary.
     * 
     * It should not be modified.
     */
    get_table(): GLib.HashTable
    /**
     * Retrieves a uint32 value.
     * @param key key to look up
     */
    get_uint32(key: string): [ /* returnType */ boolean, /* value */ number ]
    /**
     * Retrieves a uint64 value.
     * @param key key to look up
     */
    get_uint64(key: string): [ /* returnType */ boolean, /* value */ number ]
    /**
     * Removes key-value pair in the dictionary as per key.
     * @param key key which needs to be removed from the dictionary
     */
    remove(key: string): boolean
    /**
     * Adds or replaces key-value pair in the dictionary. This allows to set a value
     * of an arbitrary type: it first needs to be converted to a #GVariant. For most
     * commonly used types also type-specific setters are provided.
     * @param key key to be set
     * @param value value to be set
     */
    set(key: string, value: GLib.Variant): boolean
    /**
     * Sets or replaces a gboolean value in the dictionary.
     * @param key key to set
     * @param value value to set
     */
    set_boolean(key: string, value: boolean): boolean
    /**
     * Sets or replaces a int32 value in the dictionary.
     * @param key key to set
     * @param value value to set
     */
    set_int32(key: string, value: number): boolean
    /**
     * Sets or replaces a int64 value in the dictionary.
     * @param key key to set
     * @param value value to set
     */
    set_int64(key: string, value: number): boolean
    /**
     * Sets or replaces a string value in the dictionary.
     * @param key key to set
     * @param value value to set
     */
    set_string(key: string, value: string): boolean
    /**
     * Sets or replaces a uint32 value in the dictionary.
     * @param key key to set
     * @param value value to set
     */
    set_uint32(key: string, value: number): boolean
    /**
     * Sets or replaces a uint64 value in the dictionary.
     * @param key key to set
     * @param value value to set
     */
    set_uint64(key: string, value: number): boolean
    /**
     * Converts the #GSignondDictionary to a #GVariant. The result can be serialized
     * or put into another #GSignondDictionary using gsignond_dictionary_set().
     */
    to_variant(): GLib.Variant | null
    /**
     * Converts the #GSignondDictionary to a #GVariantBuilder of type
     * G_VARIANT_TYPE_VARDICT.
     * 
     * Caller should use g_variant_builder_unref() on the return value when it is
     * no longer needed.
     */
    to_variant_builder(): GLib.VariantBuilder | null
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
    connect(sigName: "notify", callback: (($obj: SignonuiData, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: SignonuiData, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: SignonuiData_ConstructProps)
    _init (config?: SignonuiData_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): SignonuiData
    /* Function overloads */
    static new(): SignonuiData
    static new_from_variant(variant: GLib.Variant): SignonuiData
    /* Function overloads */
    static new_from_variant(variant: GLib.Variant): SignonuiData
    static $gtype: GObject.Type
}
interface StorageManager_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of GSignond-1.0.GSignond.StorageManager */
    config?: Config
}
class StorageManager {
    /* Properties of GSignond-1.0.GSignond.StorageManager */
    readonly config: Config
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of GSignond-1.0.GSignond.StorageManager */
    /**
     * Destroys all the encryption keys and wipes the storage. gsignond_wipe_directory()
     * is typically used for the latter.
     */
    delete_storage(): boolean
    /**
     * Checks if the encrypted storage filesystem is currently mounted.
     */
    filesystem_is_mounted(): boolean
    /**
     * Initialize encryption storage. This means making sure that the
     * necessary directories under #GSIGNOND_CONFIG_GENERAL_STORAGE_PATH exist and are accessible.
     */
    initialize_storage(): boolean
    /**
     * Mounts an encrypted storage and returns the filesystem path of the storage
     * mount point. This path will be set in #GSignondConfig as
     * #GSIGNOND_CONFIG_GENERAL_SECURE_DIR and used to access the secret database via
     * #GSignondSecretStorage.
     * 
     * The default implemenation does nothing, and immediately returns the path for the
     * secret database.
     */
    mount_filesystem(): string
    /**
     * Checks if the storage has been initialized.
     */
    storage_is_initialized(): boolean
    /**
     * Unmounts a previously mounted encrypted storage filesystem.
     */
    unmount_filesystem(): boolean
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
    /* Virtual methods of GSignond-1.0.GSignond.StorageManager */
    /**
     * Destroys all the encryption keys and wipes the storage. gsignond_wipe_directory()
     * is typically used for the latter.
     */
    vfunc_delete_storage(): boolean
    /**
     * Checks if the encrypted storage filesystem is currently mounted.
     */
    vfunc_filesystem_is_mounted(): boolean
    /**
     * Initialize encryption storage. This means making sure that the
     * necessary directories under #GSIGNOND_CONFIG_GENERAL_STORAGE_PATH exist and are accessible.
     */
    vfunc_initialize_storage(): boolean
    /**
     * Mounts an encrypted storage and returns the filesystem path of the storage
     * mount point. This path will be set in #GSignondConfig as
     * #GSIGNOND_CONFIG_GENERAL_SECURE_DIR and used to access the secret database via
     * #GSignondSecretStorage.
     * 
     * The default implemenation does nothing, and immediately returns the path for the
     * secret database.
     */
    vfunc_mount_filesystem(): string
    /**
     * Checks if the storage has been initialized.
     */
    vfunc_storage_is_initialized(): boolean
    /**
     * Unmounts a previously mounted encrypted storage filesystem.
     */
    vfunc_unmount_filesystem(): boolean
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
    connect(sigName: "notify", callback: (($obj: StorageManager, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: StorageManager, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::config", callback: (($obj: StorageManager, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::config", callback: (($obj: StorageManager, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: StorageManager_ConstructProps)
    _init (config?: StorageManager_ConstructProps): void
    static $gtype: GObject.Type
}
abstract class AccessControlManagerClass {
    /* Fields of GSignond-1.0.GSignond.AccessControlManagerClass */
    /**
     * parent class.
     */
    parent_class: GObject.ObjectClass
    security_context_of_peer: (self: AccessControlManager, peer_ctx: SecurityContext, peer_fd: number, peer_service: string, peer_app_ctx: string) => void
    peer_is_allowed_to_use_identity: (self: AccessControlManager, peer_ctx: SecurityContext, owner_ctx: SecurityContext, identity_acl: SecurityContext[]) => boolean
    peer_is_owner_of_identity: (self: AccessControlManager, peer_ctx: SecurityContext, owner_ctx: SecurityContext) => boolean
    acl_is_valid: (self: AccessControlManager, peer_ctx: SecurityContext, identity_acl: SecurityContext[]) => boolean
    security_context_of_keychain: (self: AccessControlManager) => SecurityContext
    static name: string
}
class AccessControlManagerPrivate {
    static name: string
}
abstract class ConfigClass {
    /* Fields of GSignond-1.0.GSignond.ConfigClass */
    parent_class: GObject.ObjectClass
    static name: string
}
abstract class CredentialsClass {
    static name: string
}
abstract class DictionaryClass {
    static name: string
}
abstract class ExtensionClass {
    /* Fields of GSignond-1.0.GSignond.ExtensionClass */
    /**
     * the parent class
     */
    parent_class: GObject.ObjectClass
    get_extension_name: (self: Extension) => string
    get_extension_version: (self: Extension) => number
    get_storage_manager: (self: Extension, config: Config) => StorageManager
    get_secret_storage: (self: Extension, config: Config) => SecretStorage
    get_access_control_manager: (self: Extension, config: Config) => AccessControlManager
    static name: string
}
abstract class PluginInterface {
    /* Fields of GSignond-1.0.GSignond.PluginInterface */
    /**
     * parent interface type.
     */
    parent: GObject.TypeInterface
    cancel: (self: Plugin) => void
    request_initial: (self: Plugin, session_data: SessionData, identity_method_cache: Dictionary, mechanism: string) => void
    request: (self: Plugin, session_data: SessionData) => void
    user_action_finished: (self: Plugin, ui_data: SignonuiData) => void
    refresh: (self: Plugin, ui_data: SignonuiData) => void
    static name: string
}
abstract class SecretStorageClass {
    /* Fields of GSignond-1.0.GSignond.SecretStorageClass */
    /**
     * parent class.
     */
    parent_class: GObject.ObjectClass
    open_db: (self: SecretStorage) => boolean
    close_db: (self: SecretStorage) => boolean
    clear_db: (self: SecretStorage) => boolean
    is_open_db: (self: SecretStorage) => boolean
    load_credentials: (self: SecretStorage, id: number) => Credentials | null
    update_credentials: (self: SecretStorage, creds: Credentials) => boolean
    remove_credentials: (self: SecretStorage, id: number) => boolean
    check_credentials: (self: SecretStorage, creds: Credentials) => boolean
    load_data: (self: SecretStorage, id: number, method: number) => Dictionary
    update_data: (self: SecretStorage, id: number, method: number, data: Dictionary) => boolean
    remove_data: (self: SecretStorage, id: number, method: number) => boolean
    get_last_error: (self: SecretStorage) => GLib.Error
    static name: string
}
class SecretStoragePrivate {
    static name: string
}
class SecurityContext {
    /* Fields of GSignond-1.0.GSignond.SecurityContext */
    sys_ctx: string
    app_ctx: string
    /* Methods of GSignond-1.0.GSignond.SecurityContext */
    /**
     * Check if `test` is covered by `reference`.
     * @param test security context item to be checked.
     */
    check(test: SecurityContext): boolean
    /**
     * Compare two #GSignondSecurityContext items in a similar way to strcmp().
     * @param ctx2 second item to compare.
     */
    compare(ctx2: SecurityContext): number
    /**
     * Copies a security context item.
     */
    copy(): SecurityContext
    /**
     * Frees a security context item.
     */
    free(): void
    /**
     * Get the application context part of
     * the #GSignondSecurityContext.
     */
    get_application_context(): string
    /**
     * Get the system context partof the
     * #GSignondSecurityContext.
     */
    get_system_context(): string
    /**
     * Compare two #GSignondSecurityContext items match.
     * @param ctx2 second item to compare.
     */
    match(ctx2: SecurityContext): boolean
    /**
     * Sets the application context part of
     * the #GSignondSecurityContext.
     * @param application_context application security context.
     */
    set_application_context(application_context: string): void
    /**
     * Sets the system context part of the
     * #GSignondSecurityContext.
     * @param system_context system security context.
     */
    set_system_context(system_context: string): void
    /**
     * Build a GVariant of type "(ss)" from a #GSignondSecurityContext item.
     */
    to_variant(): GLib.Variant
    static name: string
    static new(): SecurityContext
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): SecurityContext
    static new_from_values(system_context: string, application_context: string): SecurityContext
    /**
     * Builds a #GSignondSecurityContext item from a GVariant of type "(ss)".
     * @param variant GVariant item with a #GSignondSecurityContext construct.
     */
    static from_variant(variant: GLib.Variant): SecurityContext
}
abstract class SessionDataClass {
    static name: string
}
abstract class SignonuiDataClass {
    static name: string
}
abstract class StorageManagerClass {
    /* Fields of GSignond-1.0.GSignond.StorageManagerClass */
    /**
     * parent class.
     */
    parent_class: GObject.ObjectClass
    initialize_storage: (self: StorageManager) => boolean
    delete_storage: (self: StorageManager) => boolean
    storage_is_initialized: (self: StorageManager) => boolean
    mount_filesystem: (self: StorageManager) => string
    unmount_filesystem: (self: StorageManager) => boolean
    filesystem_is_mounted: (self: StorageManager) => boolean
    static name: string
}
class StorageManagerPrivate {
    static name: string
}
}
export default GSignond;