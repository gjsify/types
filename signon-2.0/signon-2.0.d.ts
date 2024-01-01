
/*
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in `ts-for-gir` or create a bug report on https://github.com/gjsify/ts-for-gir
 */

import './signon-2.0-ambient.d.ts';
import './signon-2.0-import.d.ts';
/**
 * Signon-2.0
 */

import type Gio from '@girs/gio-2.0';
import type GObject from '@girs/gobject-2.0';
import type GLib from '@girs/glib-2.0';

export namespace Signon {

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
     * Error communicating with Sigon daemon.
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
     * The #SessionData does not contain the necessary
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
     * Casting #SessionData into subclass failed.
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
 * Policy for the signon process, passed to the UI plugin.
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
 * Types used in #SignonIdentityInfo.
 * @bitfield 
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
module AuthService {

    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

interface AuthService {

    // Owm methods of Signon-2.0.Signon.AuthService

    /**
     * Lists all the available mechanisms.
     * @param method the name of the method whose mechanisms must be retrieved.
     * @param cancellable a #GCancellable or %NULL
     * @param callback a callback to execute upon completion
     */
    get_mechanisms(method: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void
    /**
     * Completes an asynchronous request to signon_auth_service_get_mechanisms().
     * @param result a #GAsyncResult
     * @returns A list of available mechanisms.
     */
    get_mechanisms_finish(result: Gio.AsyncResult): string[]
    /**
     * Lists all the available mechanisms.
     * This is a blocking version of signon_auth_service_get_mechanisms().
     * @param method the name of the method whose mechanisms must be retrieved.
     * @param cancellable a #GCancellable or %NULL
     * @returns A list of available mechanisms.
     */
    get_mechanisms_sync(method: string, cancellable: Gio.Cancellable | null): string[]
    /**
     * Lists all the available methods.
     * @param cancellable a #GCancellable or %NULL
     * @param callback a callback to execute upon completion
     */
    get_methods(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void
    /**
     * Completes an asynchronous request to signon_auth_service_get_methods().
     * @param result a #GAsyncResult
     * @returns A list of available methods.
     */
    get_methods_finish(result: Gio.AsyncResult): string[]
    /**
     * Lists all the available methods.
     * This is a blocking version of signon_auth_service_get_methods().
     * @param cancellable a #GCancellable or %NULL
     * @returns A list of available methods.
     */
    get_methods_sync(cancellable: Gio.Cancellable | null): string[]

    // Class property signals of Signon-2.0.Signon.AuthService

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * Opaque struct. Use the accessor functions below.
 * @class 
 */
class AuthService extends GObject.Object {

    // Own properties of Signon-2.0.Signon.AuthService

    static name: string
    static $gtype: GObject.GType<AuthService>

    // Constructors of Signon-2.0.Signon.AuthService

    constructor(config?: AuthService.ConstructorProperties) 
    /**
     * Create a new #SignonAuthService.
     * @constructor 
     * @returns an instance of an #SignonAuthService.
     */
    constructor() 
    /**
     * Create a new #SignonAuthService.
     * @constructor 
     * @returns an instance of an #SignonAuthService.
     */
    static new(): AuthService
    _init(config?: AuthService.ConstructorProperties): void
}

module AuthSession {

    // Signal callback interfaces

    /**
     * Signal callback interface for `state-changed`
     */
    interface StateChangedSignalCallback {
        ($obj: AuthSession, state: number, message: string | null): void
    }


    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

interface AuthSession {

    // Owm methods of Signon-2.0.Signon.AuthSession

    /**
     * Cancel the authentication session.
     */
    cancel(): void
    /**
     * Get the current authentication method.
     * @returns the authentication method being used, or %NULL on failure.
     */
    get_method(): string
    /**
     * Performs one step of the authentication process. If the #SignonAuthSession
     * object is bound to an existing identity, the identity properties such as
     * username and password will be also passed to the authentication plugin, so
     * there's no need to fill them into `session_data`.
     * `session_data` can be used to add additional authentication parameters to the
     * session, or to override the parameters otherwise taken from the identity.
     * @param session_data a dictionary of parameters.
     * @param mechanism the authentication mechanism to be used.
     * @param cancellable optional #GCancellable object, %NULL to ignore.
     * @param callback a callback which will be called when the authentication reply is available.
     */
    process(session_data: GLib.Variant, mechanism: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void
    /**
     * Collect the result of the signon_auth_session_process() operation.
     * @param res A #GAsyncResult obtained from the #GAsyncReadyCallback passed to signon_auth_session_process().
     * @returns a #GVariant of type %G_VARIANT_TYPE_VARDICT containing the authentication reply.
     */
    process_finish(res: Gio.AsyncResult): GLib.Variant

    // Own signals of Signon-2.0.Signon.AuthSession

    connect(sigName: "state-changed", callback: AuthSession.StateChangedSignalCallback): number
    connect_after(sigName: "state-changed", callback: AuthSession.StateChangedSignalCallback): number
    emit(sigName: "state-changed", state: number, message: string | null, ...args: any[]): void

    // Class property signals of Signon-2.0.Signon.AuthSession

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * Opaque struct. Use the accessor functions below.
 * @class 
 */
class AuthSession extends GObject.Object {

    // Own properties of Signon-2.0.Signon.AuthSession

    static name: string
    static $gtype: GObject.GType<AuthSession>

    // Constructors of Signon-2.0.Signon.AuthSession

    constructor(config?: AuthSession.ConstructorProperties) 
    /**
     * Creates a new #SignonAuthSession, which can be used to authenticate using
     * the specified method.
     * @constructor 
     * @param id the id of the #SignonIdentity to be used. Can be 0, if this session is not bound to any stored identity.
     * @param method_name the name of the authentication method to be used.
     * @returns a new #SignonAuthSession.
     */
    constructor(id: number, method_name: string) 
    /**
     * Creates a new #SignonAuthSession, which can be used to authenticate using
     * the specified method.
     * @constructor 
     * @param id the id of the #SignonIdentity to be used. Can be 0, if this session is not bound to any stored identity.
     * @param method_name the name of the authentication method to be used.
     * @returns a new #SignonAuthSession.
     */
    static new(id: number, method_name: string): AuthSession
    _init(config?: AuthSession.ConstructorProperties): void
}

module Identity {

    // Signal callback interfaces

    /**
     * Signal callback interface for `signed-out`
     */
    interface SignedOutSignalCallback {
        ($obj: Identity): void
    }


    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of Signon-2.0.Signon.Identity

        id?: number | null
    }

}

interface Identity {

    // Own properties of Signon-2.0.Signon.Identity

    readonly id: number

    // Owm methods of Signon-2.0.Signon.Identity

    /**
     * Creates an authentication session for this identity.
     * @param method method.
     * @returns a new #SignonAuthSession.
     */
    create_session(method: string): AuthSession
    /**
     * Get the id of the `identity`.
     * @returns the id of the #SignonIdentity, or 0 if the identity has not being registered.
     */
    get_id(): number
    /**
     * Get the most recent error that occurred on `identity`.
     * @returns a #GError containing the most recent error, or %NULL on failure.
     */
    get_last_error(): GLib.Error
    /**
     * Fetches the #SignonIdentityInfo associated with this identity.
     * @param cancellable optional #GCancellable object, %NULL to ignore.
     * @param callback a callback which will be called when the #SignonIdentityInfo is available.
     */
    query_info(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void
    /**
     * Collect the result of the signon_identity_query_info() operation.
     * @param res A #GAsyncResult obtained from the #GAsyncReadyCallback passed to signon_identity_query_info().
     * @returns the #SignonIdentityInfo associated with this identity.
     */
    query_info_finish(res: Gio.AsyncResult): IdentityInfo
    /**
     * Removes the corresponding credentials record from the database.
     * @param cancellable optional #GCancellable object, %NULL to ignore.
     * @param callback a callback which will be called when the operation has completed.
     */
    remove(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void
    remove_finish(res: Gio.AsyncResult): boolean
    /**
     * Asks signond to close all authentication sessions for this
     * identity, and to remove any stored secrets associated with it (password and
     * authentication tokens).
     * @param cancellable optional #GCancellable object, %NULL to ignore.
     * @param callback a callback which will be called when the operation has completed.
     */
    sign_out(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void
    sign_out_finish(res: Gio.AsyncResult): boolean
    /**
     * Stores the data from `info` into the identity.
     * @param info the #SignonIdentityInfo data to store.
     * @param cancellable optional #GCancellable object, %NULL to ignore.
     * @param callback a callback which will be called when the authentication reply is available.
     */
    store_info(info: IdentityInfo, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void
    /**
     * Collect the result of the signon_identity_store_info() operation.
     * @param res A #GAsyncResult obtained from the #GAsyncReadyCallback passed to signon_identity_store_info().
     * @returns %TRUE if the info has been stored, %FALSE otherwise.
     */
    store_info_finish(res: Gio.AsyncResult): boolean
    /**
     * Verifies the given secret.
     * @param secret the secret (password) to be verified.
     * @param cancellable optional #GCancellable object, %NULL to ignore.
     * @param callback a callback which will be called when the verification is done.
     */
    verify_secret(secret: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void
    /**
     * Collect the result of the signon_identity_verify_secret() operation.
     * @param res A #GAsyncResult obtained from the #GAsyncReadyCallback passed to signon_identity_verify_secret().
     * @returns %TRUE if the secret is valid, %FALSE otherwise.
     */
    verify_secret_finish(res: Gio.AsyncResult): boolean

    // Own signals of Signon-2.0.Signon.Identity

    connect(sigName: "signed-out", callback: Identity.SignedOutSignalCallback): number
    connect_after(sigName: "signed-out", callback: Identity.SignedOutSignalCallback): number
    emit(sigName: "signed-out", ...args: any[]): void

    // Class property signals of Signon-2.0.Signon.Identity

    connect(sigName: "notify::id", callback: (($obj: Identity, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::id", callback: (($obj: Identity, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::id", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * Opaque struct. Use the accessor functions below.
 * @class 
 */
class Identity extends GObject.Object {

    // Own properties of Signon-2.0.Signon.Identity

    static name: string
    static $gtype: GObject.GType<Identity>

    // Constructors of Signon-2.0.Signon.Identity

    constructor(config?: Identity.ConstructorProperties) 
    /**
     * Construct new, empty, identity object.
     * @constructor 
     * @returns an instance of an #SignonIdentity.
     */
    constructor() 
    /**
     * Construct new, empty, identity object.
     * @constructor 
     * @returns an instance of an #SignonIdentity.
     */
    static new(): Identity
    /**
     * Construct an identity object associated with an existing identity
     * record.
     * @constructor 
     * @param id identity ID.
     * @returns an instance of a #SignonIdentity.
     */
    static new_from_db(id: number): Identity
    _init(config?: Identity.ConstructorProperties): void
}

interface AuthServiceClass {

    // Own fields of Signon-2.0.Signon.AuthServiceClass

    parent_class: GObject.ObjectClass
}

/**
 * Opaque struct. Use the accessor functions below.
 * @record 
 */
abstract class AuthServiceClass {

    // Own properties of Signon-2.0.Signon.AuthServiceClass

    static name: string
}

interface AuthSessionClass {

    // Own fields of Signon-2.0.Signon.AuthSessionClass

    parent_class: GObject.ObjectClass
}

/**
 * Opaque struct. Use the accessor functions below.
 * @record 
 */
abstract class AuthSessionClass {

    // Own properties of Signon-2.0.Signon.AuthSessionClass

    static name: string
}

interface IdentityClass {

    // Own fields of Signon-2.0.Signon.IdentityClass

    parent_class: GObject.ObjectClass
}

/**
 * Opaque struct. Use the accessor functions below.
 * @record 
 */
abstract class IdentityClass {

    // Own properties of Signon-2.0.Signon.IdentityClass

    static name: string
}

interface IdentityInfo {

    // Owm methods of Signon-2.0.Signon.IdentityInfo

    /**
     * Add an ACL to this identity. This is an helper function.
     * @param system_context the system context to add.
     * @param application_context the application context to add.
     */
    add_access_control(system_context: string, application_context: string): void
    /**
     * Get a newly-allocated copy of `info`.
     * @returns a copy of the given #SignonIdentityInfo, or %NULL on failure.
     */
    copy(): IdentityInfo
    /**
     * Destroys the given #SignonIdentityInfo item.
     */
    free(): void
    /**
     * Get an array of ACL statements of the identity.
     * @returns a #GList of #SignonSecurityContext representing ACL statements. Each element should be freed with signon_security_context_copy() after use.
     */
    get_access_control_list(): SecurityContext[]
    /**
     * Get the display name of `info`.
     * @returns the display name for the identity.
     */
    get_caption(): string
    /**
     * Get the numeric ID of `info`.
     * @returns the numeric ID of the identity.
     */
    get_id(): number
    /**
     * Get the type of the identity.
     * @returns the type of the identity.
     */
    get_identity_type(): IdentityType
    /**
     * Get a hash table of the methods and mechanisms of `info`.
     * @returns the table of allowed methods and mechanisms.
     */
    get_methods(): GLib.HashTable
    /**
     * Get an array of the realms of `info`.
     * @returns a %NULL terminated array of realms.
     */
    get_realms(): string[]
    /**
     * Get whether the secret of `info` should be stored.
     * @returns %TRUE if Signon must store the secret, %FALSE otherwise.
     */
    get_storing_secret(): boolean
    /**
     * Get the username of `info`.
     * @returns the username, or %NULL.
     */
    get_username(): string
    /**
     * Remove `method` from the list of allowed authentication methods. If all
     * methods are removed, then all methods are allowed.
     * @param method an authentication method.
     */
    remove_method(method: string): void
    /**
     * Specifies the ACL for this identity. The actual meaning of the ACL depends
     * on the security framework used by signond.
     * @param access_control_list a #GList of #SignonSecurityContext representing ACL security domains.
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
     * Adds a method to the list of allowed methods. If this method is not called
     * even once, then all methods are allowed.
     * Mechanisms are method-specific variants of authentication.
     * @param method an authentication method.
     * @param mechanisms a %NULL-termianted list of mechanisms.
     */
    set_method(method: string, mechanisms: string[]): void
    /**
     * Specify what realms this identity can be used in.
     * @param realms a %NULL-terminated list of realms.
     */
    set_realms(realms: string[]): void
    /**
     * Sets the secret (password) for the identity, and whether the signon daemon
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
}

/**
 * Opaque struct. Use the accessor functions below.
 * @record 
 */
class IdentityInfo {

    // Own properties of Signon-2.0.Signon.IdentityInfo

    static name: string

    // Constructors of Signon-2.0.Signon.IdentityInfo

    /**
     * Creates a new #SignonIdentityInfo item.
     * @constructor 
     * @returns a new #SignonIdentityInfo item.
     */
    constructor() 
    /**
     * Creates a new #SignonIdentityInfo item.
     * @constructor 
     * @returns a new #SignonIdentityInfo item.
     */
    static new(): IdentityInfo
}

interface SecurityContext {

    // Owm methods of Signon-2.0.Signon.SecurityContext

    /**
     * Get a newly-allocated copy of `info`.
     * @returns a copy of the given #SignonIdentityInfo, or %NULL on failure.
     */
    copy(): SecurityContext
    /**
     * Destroys the given #SignonSecurityContext item.
     */
    free(): void
    /**
     * Get the application context of `ctx`.
     * @returns the application context.
     */
    get_application_context(): string
    /**
     * Get the system context of `ctx`.
     * @returns the system context.
     */
    get_system_context(): string
    /**
     * Sets the application context.
     * @param application_context the application context.
     */
    set_application_context(application_context: string): void
    /**
     * Sets the system context.
     * @param system_context the system context.
     */
    set_system_context(system_context: string): void
}

/**
 * Opaque struct. Use the accessor functions below.
 * @record 
 */
class SecurityContext {

    // Own properties of Signon-2.0.Signon.SecurityContext

    static name: string

    // Constructors of Signon-2.0.Signon.SecurityContext

    /**
     * Creates a new #SignonSecurityContext item.
     * @constructor 
     * @returns a new #SignonSecurityContext item.
     */
    constructor() 
    /**
     * Creates a new #SignonSecurityContext item.
     * @constructor 
     * @returns a new #SignonSecurityContext item.
     */
    static new(): SecurityContext
    /**
     * Creates a new #SignonSecurityContext item.
     * @constructor 
     * @param system_context system security context
     * @param application_context application security context
     * @returns a new #SignonSecurityContext item.
     */
    static new_from_values(system_context: string, application_context: string): SecurityContext
}

/**
 * Name of the imported GIR library
 * @see https://gitlab.gnome.org/GNOME/gjs/-/blob/master/gi/ns.cpp#L188
 */
const __name__: string
/**
 * Version of the imported GIR library
 * @see https://gitlab.gnome.org/GNOME/gjs/-/blob/master/gi/ns.cpp#L189
 */
const __version__: string
}

export default Signon;
// END