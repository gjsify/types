
/*
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in `ts-for-gir` or create a bug report on https://github.com/gjsify/ts-for-gir
 */

import './gsignon-1.0-ambient.d.ts';
import './gsignon-1.0-import.d.ts';
/**
 * gSignon-1.0
 */

import type Gio from '@girs/gio-2.0';
import type GObject from '@girs/gobject-2.0';
import type GLib from '@girs/glib-2.0';

/**
 * Possible Signon errors.
 */
export enum Error {
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
export enum SessionDataUiPolicy {
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
 * @bitfield 
 */
export enum IdentityType {
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
export const SESSION_DATA_CAPTION: string
/**
 * Proxy.
 */
export const SESSION_DATA_PROXY: string
/**
 * Realm.
 */
export const SESSION_DATA_REALM: string
/**
 * Requests the signon plugin to obtain a new token (boolean).
 */
export const SESSION_DATA_RENEW_TOKEN: string
/**
 * Secret.
 */
export const SESSION_DATA_SECRET: string
/**
 * Network timeout, in milliseconds (uint32).
 */
export const SESSION_DATA_TIMEOUT: string
/**
 * Policy for the signon process.
 */
export const SESSION_DATA_UI_POLICY: string
/**
 * Username.
 */
export const SESSION_DATA_USERNAME: string
/**
 * Platform-specific window id (for dialog transiency) - uint32.
 */
export const SESSION_DATA_WINDOW_ID: string
/**
 * Creates and returns a domain for gSSO errors.
 */
export function error_quark(): GLib.Quark
/**
 * Builds a #SignonSecurityContext item from a GVariant of type "(ss)".
 * @param variant GVariant item with a #SignonSecurityContext construct.
 * @returns #SignonSecurityContext item.
 */
export function security_context_deconstruct_variant(variant: GLib.Variant): SecurityContext
/**
 * Builds a GVariant of type "a(ss)" from a GList of #SignonSecurityContext
 * items.
 * @param list #GList item of #SignonSecurityContext.
 * @returns GVariant construct of a #GList.
 */
export function security_context_list_build_variant(list: SecurityContext[]): GLib.Variant
/**
 * Builds a GList of #SignonSecurityContext items from a GVariant of type
 * "a(ss)".
 * @param variant GVariant item with a list of security context tuples.
 * @returns #GList item.
 */
export function security_context_list_deconstruct_variant(variant: GLib.Variant): SecurityContext[]
/**
 * This callback is invoked when the authentication plugin delivers the result
 * of the signon_auth_session_process() operation.
 * @callback 
 * @param self the #SignonAuthSession.
 * @param session_data a dictionary with the response.
 * @param error a #GError if an error occurred, %NULL otherwise.
 */
export interface AuthSessionProcessCb {
    (self: AuthSession, session_data: GLib.HashTable, error: GLib.Error): void
}
/**
 * Callback to be passed to signon_auth_session_query_available_mechanisms().
 * @callback 
 * @param self the #SignonAuthSession.
 * @param mechanisms list of available mechanisms.
 * @param error a #GError if an error occurred, %NULL otherwise.
 */
export interface AuthSessionQueryAvailableMechanismsCb {
    (self: AuthSession, mechanisms: string[], error: GLib.Error): void
}
/**
 * Callback to be passed to signon_auth_service_clear().
 * @callback 
 * @param auth_service the #SignonAuthService.
 * @param success TRUE if clear succeeded.
 * @param error a #GError if an error occurred, %NULL otherwise.
 */
export interface ClearCb {
    (auth_service: AuthService, success: boolean, error: GLib.Error): void
}
/**
 * Callback to be passed to signon_identity_query_info().
 * @callback 
 * @param self the #SignonIdentity.
 * @param info the #SignonIdentityInfo for `self`.
 * @param error a #GError if an error occurred, or %NULL otherwise.
 */
export interface IdentityInfoCb {
    (self: Identity, info: IdentityInfo, error: GLib.Error): void
}
/**
 * Callback to be passed to signon_identity_get_auth_session().
 * @callback 
 * @param self the #SignonAuthSession.
 * @param error a #GError if an error occurred, or %NULL otherwise.
 * @param connection a #GDBusConnection for the session.
 * @param bus_name a D-Bus bus name for the session.
 * @param object_path a D-Bus object path for the session.
 */
export interface IdentitySessionReadyCb {
    (self: AuthSession, error: GLib.Error, connection: Gio.DBusConnection, bus_name: string, object_path: string): void
}
/**
 * Callback to be passed to signon_identity_store_credentials_with_args() or
 * signon_identity_store_credentials_with_info().
 * @callback 
 * @param self the #SignonIdentity.
 * @param id the numeric ID of the identity in the database.
 * @param error a #GError if an error occurred, or %NULL otherwise.
 */
export interface IdentityStoreCredentialsCb {
    (self: Identity, id: number, error: GLib.Error): void
}
/**
 * Callback to be passed to signon_identity_verify_user().
 * @callback 
 * @param self the #SignonIdentity.
 * @param valid whether the verification succeeded.
 * @param error a #GError if an error occurred, or %NULL otherwise.
 */
export interface IdentityVerifyCb {
    (self: Identity, valid: boolean, error: GLib.Error): void
}
/**
 * Generic callback to be passed to several #SignonIdentity methods.
 * @callback 
 * @param self the #SignonIdentity.
 * @param error a #GError if an error occurred, or %NULL otherwise.
 */
export interface IdentityVoidCb {
    (self: Identity, error: GLib.Error): void
}
/**
 * Callback to be passed to signon_auth_service_query_identities().
 * @callback 
 * @param auth_service the #SignonAuthService.
 * @param identities #GList based list of #SignonIdentityInfo.
 * @param error a #GError if an error occurred, %NULL otherwise.
 */
export interface QueryIdentitiesCb {
    (auth_service: AuthService, identities: Identity[], error: GLib.Error): void
}
/**
 * Callback to be passed to signon_auth_service_query_mechanisms().
 * @callback 
 * @param auth_service the #SignonAuthService.
 * @param method the authentication method being inspected.
 * @param mechanisms list of available mechanisms.
 * @param error a #GError if an error occurred, %NULL otherwise.
 */
export interface QueryMechanismCb {
    (auth_service: AuthService, method: string, mechanisms: string[], error: GLib.Error): void
}
/**
 * Callback to be passed to signon_auth_service_query_methods().
 * @callback 
 * @param auth_service the #SignonAuthService.
 * @param methods list of available methods.
 * @param error a #GError if an error occurred, %NULL otherwise.
 */
export interface QueryMethodsCb {
    (auth_service: AuthService, methods: string[], error: GLib.Error): void
}
export module AuthService {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

export interface AuthService {

    // Own fields of gSignon-1.0.gSignon.AuthService

    parent_instance: GObject.Object
    priv: AuthServicePrivate

    // Owm methods of gSignon-1.0.gSignon.AuthService

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

    // Class property signals of gSignon-1.0.gSignon.AuthService

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * Opaque struct. Use the accessor functions below.
 * @class 
 */
export class AuthService extends GObject.Object {

    // Own properties of gSignon-1.0.gSignon.AuthService

    static name: string
    static $gtype: GObject.GType<AuthService>

    // Constructors of gSignon-1.0.gSignon.AuthService

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

export module AuthSession {

    // Signal callback interfaces

    /**
     * Signal callback interface for `state-changed`
     */
    export interface StateChangedSignalCallback {
        ($obj: AuthSession, state: number, message: string | null): void
    }


    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of gSignon-1.0.gSignon.AuthSession

        identity?: Identity | null
    }

}

export interface AuthSession {

    // Own properties of gSignon-1.0.gSignon.AuthSession

    readonly identity: Identity

    // Owm methods of gSignon-1.0.gSignon.AuthSession

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
    process_async(session_data: GLib.Variant, mechanism: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void

    // Overloads of process_async

    /**
     * Promisified version of {@link process_async}
     * 
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
     * @returns A Promise of: a #GVariant of type %G_VARIANT_TYPE_VARDICT containing the authentication reply. As with signon_auth_session_process_async(), specific parameters contained in the #GVariant can be found from plugins' documentation: #GSignondPlugin::response-final for the final response, and #GSignondPlugin::response for the intermediate responses. See, for example, #GSignondPasswordPlugin and #GSignondDigestPlugin.
     */
    process_async(session_data: GLib.Variant, mechanism: string, cancellable: Gio.Cancellable | null): globalThis.Promise<GLib.Variant>
    /**
     * Collect the result of the signon_auth_session_process_async() operation.
     * @param res A #GAsyncResult obtained from the #GAsyncReadyCallback passed to signon_auth_session_process_async().
     * @returns a #GVariant of type %G_VARIANT_TYPE_VARDICT containing the authentication reply. As with signon_auth_session_process_async(), specific parameters contained in the #GVariant can be found from plugins' documentation: #GSignondPlugin::response-final for the final response, and #GSignondPlugin::response for the intermediate responses. See, for example, #GSignondPasswordPlugin and #GSignondDigestPlugin.
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

    // Own signals of gSignon-1.0.gSignon.AuthSession

    connect(sigName: "state-changed", callback: AuthSession.StateChangedSignalCallback): number
    connect_after(sigName: "state-changed", callback: AuthSession.StateChangedSignalCallback): number
    emit(sigName: "state-changed", state: number, message: string | null, ...args: any[]): void

    // Class property signals of gSignon-1.0.gSignon.AuthSession

    connect(sigName: "notify::identity", callback: (($obj: AuthSession, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::identity", callback: (($obj: AuthSession, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::identity", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * Opaque struct. Use the accessor functions below.
 * @class 
 */
export class AuthSession extends GObject.Object {

    // Own properties of gSignon-1.0.gSignon.AuthSession

    static name: string
    static $gtype: GObject.GType<AuthSession>

    // Constructors of gSignon-1.0.gSignon.AuthSession

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
    /**
     * Creates a new #SignonAuthSession, which can be used to authenticate using
     * the specified method.
     * @constructor 
     * @param identity #SignonIdentity parent object.
     * @param method_name the name of the authentication method to be used.
     * @returns a new #SignonAuthSession.
     */
    static new_for_identity(identity: Identity, method_name: string): AuthSession
    _init(config?: AuthSession.ConstructorProperties): void
}

export module Identity {

    // Signal callback interfaces

    /**
     * Signal callback interface for `removed`
     */
    export interface RemovedSignalCallback {
        ($obj: Identity): void
    }

    /**
     * Signal callback interface for `signout`
     */
    export interface SignoutSignalCallback {
        ($obj: Identity): void
    }


    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of gSignon-1.0.gSignon.Identity

        app_ctx?: string | null
        id?: number | null
        appCtx?: string | null
    }

}

export interface Identity {

    // Own properties of gSignon-1.0.gSignon.Identity

    app_ctx: string | null
    appCtx: string | null
    id: number

    // Owm methods of gSignon-1.0.gSignon.Identity

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
     * @returns a new #SignonAuthSession.
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
     * @returns a #GError containing the most recent error, or %NULL on failure.
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

    // Own signals of gSignon-1.0.gSignon.Identity

    connect(sigName: "removed", callback: Identity.RemovedSignalCallback): number
    connect_after(sigName: "removed", callback: Identity.RemovedSignalCallback): number
    emit(sigName: "removed", ...args: any[]): void
    connect(sigName: "signout", callback: Identity.SignoutSignalCallback): number
    connect_after(sigName: "signout", callback: Identity.SignoutSignalCallback): number
    emit(sigName: "signout", ...args: any[]): void

    // Class property signals of gSignon-1.0.gSignon.Identity

    connect(sigName: "notify::app-ctx", callback: (($obj: Identity, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::app-ctx", callback: (($obj: Identity, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::app-ctx", ...args: any[]): void
    connect(sigName: "notify::id", callback: (($obj: Identity, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::id", callback: (($obj: Identity, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::id", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class Identity extends GObject.Object {

    // Own properties of gSignon-1.0.gSignon.Identity

    static name: string
    static $gtype: GObject.GType<Identity>

    // Constructors of gSignon-1.0.gSignon.Identity

    constructor(config?: Identity.ConstructorProperties) 
    /**
     * Construct a new, empty, identity object.
     * This is essentially equivalent to calling signon_identity_new_with_context()
     * and passing %NULL as the application context.
     * @constructor 
     * @returns an instance of an #SignonIdentity.
     */
    constructor() 
    /**
     * Construct a new, empty, identity object.
     * This is essentially equivalent to calling signon_identity_new_with_context()
     * and passing %NULL as the application context.
     * @constructor 
     * @returns an instance of an #SignonIdentity.
     */
    static new(): Identity
    /**
     * Construct an identity object associated with an existing identity
     * record.
     * This is essentially equivalent to calling
     * signon_identity_new_with_context_from_db() and passing %NULL as the
     * application context.
     * 
     * Applications can determine the `id` either by enumerating the identities with
     * signon_auth_service_query_identities() (if they're the owner of the identity)
     * or via other means (such as the system's accounts service, or an application
     * configuration).
     * @constructor 
     * @param id identity ID.
     * @returns an instance of a #SignonIdentity.
     */
    static new_from_db(id: number): Identity
    /**
     * Construct a new, empty, identity object. See #SignonSecurityContext for a
     * discussion of `application_context` contents. `application_context` is used to set the identity's owner
     * if the identity is stored to the database with signon_identity_store_credentials_with_args()
     * or signon_identity_store_credentials_with_info().
     * @constructor 
     * @param application_context application security context, can be %NULL.
     * @returns an instance of an #SignonIdentity.
     */
    static new_with_context(application_context: string): Identity
    /**
     * Construct an identity object associated with an existing identity
     * record. See #SignonSecurityContext for a discussion of `application_context` contents.
     * Together with the system context it is used to determine by the gSSO daemon
     * if the application can access the identity (the application needs to be either the
     * identity's owner or to be present on the ACL).
     * 
     * Applications can determine the `id` either by enumerating the identities with
     * signon_auth_service_query_identities() (if they're the owner of the identity)
     * or via other means (such as the system's accounts service, or an application
     * configuration).
     * @constructor 
     * @param id identity ID.
     * @param application_context application security context, can be %NULL.
     * @returns an instance of a #SignonIdentity.
     */
    static new_with_context_from_db(id: number, application_context: string): Identity
    _init(config?: Identity.ConstructorProperties): void
}

export interface AuthServiceClass {

    // Own fields of gSignon-1.0.gSignon.AuthServiceClass

    /**
     * a reference to the parent class
     * @field 
     */
    parent_class: GObject.ObjectClass
}

/**
 * Opaque struct. Use the accessor functions below.
 * @record 
 */
export abstract class AuthServiceClass {

    // Own properties of gSignon-1.0.gSignon.AuthServiceClass

    static name: string
}

export interface AuthServicePrivate {
}

export class AuthServicePrivate {

    // Own properties of gSignon-1.0.gSignon.AuthServicePrivate

    static name: string
}

export interface AuthSessionClass {

    // Own fields of gSignon-1.0.gSignon.AuthSessionClass

    /**
     * reference to the parent class
     * @field 
     */
    parent: GObject.ObjectClass
}

/**
 * Opaque struct. Use the accessor functions below.
 * @record 
 */
export abstract class AuthSessionClass {

    // Own properties of gSignon-1.0.gSignon.AuthSessionClass

    static name: string
}

export interface AuthSessionPrivate {
}

export class AuthSessionPrivate {

    // Own properties of gSignon-1.0.gSignon.AuthSessionPrivate

    static name: string
}

export interface IdentityClass {

    // Own fields of gSignon-1.0.gSignon.IdentityClass

    parent_class: GObject.ObjectClass
}

export abstract class IdentityClass {

    // Own properties of gSignon-1.0.gSignon.IdentityClass

    static name: string
}

export interface IdentityInfo {

    // Owm methods of gSignon-1.0.gSignon.IdentityInfo

    /**
     * Appends a new #SignonSecurityContext item to the access control list.
     * @param security_context a security context to be appended.
     */
    access_control_list_append(security_context: SecurityContext): void
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
     * Get an access control list associated with an identity.
     * @returns a list of ACL security contexts.
     */
    get_access_control_list(): SecurityContext[]
    /**
     * Get the display name of `info`.
     * @returns the display name for the identity.
     */
    get_caption(): string
    /**
     * Get the numeric identity ID of `info`.
     * @returns the numeric ID of the identity.
     */
    get_id(): number
    /**
     * Get the type of the identity.
     * @returns the type of the identity.
     */
    get_identity_type(): IdentityType
    /**
     * Get a hash table of the methods and mechanisms of `info`. See
     * signon_identity_info_set_methods().
     * @returns the table of allowed methods and mechanisms.
     */
    get_methods(): GLib.HashTable
    /**
     * Get identity owner's security context.
     * @returns a security context.
     */
    get_owner(): SecurityContext
    /**
     * Get an array of the allowed realms of `info`.
     * @returns a %NULL terminated array of realms.
     */
    get_realms(): string[]
    /**
     * Get whether the secret of `info` should be stored by gSSO in the secret database.
     * @returns %TRUE if gSSO must store the secret, %FALSE otherwise.
     */
    get_storing_secret(): boolean
    /**
     * Get the username associated with an identity.
     * @returns the username, or %NULL.
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
}

/**
 * Opaque struct. Use the accessor functions below.
 * @record 
 */
export class IdentityInfo {

    // Own properties of gSignon-1.0.gSignon.IdentityInfo

    static name: string

    // Constructors of gSignon-1.0.gSignon.IdentityInfo

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

export interface IdentityPrivate {
}

export class IdentityPrivate {

    // Own properties of gSignon-1.0.gSignon.IdentityPrivate

    static name: string
}

export interface SecurityContext {

    // Own fields of gSignon-1.0.gSignon.SecurityContext

    /**
     * system context, such as SMACK-label, MSSF token or just a
     *           binary path.
     * @field 
     */
    sys_ctx: string | null
    /**
     * application context, such as a script or a web page.
     * @field 
     */
    app_ctx: string | null

    // Owm methods of gSignon-1.0.gSignon.SecurityContext

    /**
     * Build a GVariant of type "(ss)" from a #SignonSecurityContext item.
     * @returns GVariant construct of a #SignonSecurityContext.
     */
    build_variant(): GLib.Variant
    /**
     * Copy a security context item.
     * @returns a copy of the #SignonSecurityContext item.
     */
    copy(): SecurityContext
    /**
     * Frees a security context item.
     */
    free(): void
    /**
     * Get the application context part (such as script name or a web page) of
     * the #SignonSecurityContext.
     * @returns application context.
     */
    get_application_context(): string
    /**
     * Get the system context part (such as SMACK label or MSSF token) of the
     * #SignonSecurityContext.
     * @returns system context.
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
}

/**
 * Security context descriptor used for access control checks.
 * @record 
 */
export class SecurityContext {

    // Own properties of gSignon-1.0.gSignon.SecurityContext

    static name: string

    // Constructors of gSignon-1.0.gSignon.SecurityContext

    /**
     * Allocates a new security context item.
     * @constructor 
     * @returns allocated #SignonSecurityContext.
     */
    constructor() 
    /**
     * Allocates a new security context item.
     * @constructor 
     * @returns allocated #SignonSecurityContext.
     */
    static new(): SecurityContext
    /**
     * Allocates and initializes a new security context item.
     * @constructor 
     * @param system_context system security context (such as SMACK/MSSF label/token).
     * @param application_context application security context (such as a script name).
     * @returns allocated #SignonSecurityContext.
     */
    static new_from_values(system_context: string, application_context: string): SecurityContext
    /**
     * Builds a #SignonSecurityContext item from a GVariant of type "(ss)".
     * @param variant GVariant item with a #SignonSecurityContext construct.
     * @returns #SignonSecurityContext item.
     */
    static deconstruct_variant(variant: GLib.Variant): SecurityContext
    /**
     * Builds a GVariant of type "a(ss)" from a GList of #SignonSecurityContext
     * items.
     * @param list #GList item of #SignonSecurityContext.
     * @returns GVariant construct of a #GList.
     */
    static list_build_variant(list: SecurityContext[]): GLib.Variant
    /**
     * Builds a GList of #SignonSecurityContext items from a GVariant of type
     * "a(ss)".
     * @param variant GVariant item with a list of security context tuples.
     * @returns #GList item.
     */
    static list_deconstruct_variant(variant: GLib.Variant): SecurityContext[]
}

export interface _AuthSession {

    // Own fields of gSignon-1.0.gSignon._AuthSession

    parent: GObject.Object
    priv: AuthSessionPrivate
}

export class _AuthSession {

    // Own properties of gSignon-1.0.gSignon._AuthSession

    static name: string
}

export interface _Identity {

    // Own fields of gSignon-1.0.gSignon._Identity

    parent_instance: GObject.Object
    priv: IdentityPrivate
}

/**
 * Opaque struct. Use the accessor functions below.
 * @record 
 */
export class _Identity {

    // Own properties of gSignon-1.0.gSignon._Identity

    static name: string
}

    export type AuthSessionQueryAvailableMethodsCb = AuthSessionQueryAvailableMechanismsCb
    export type IdentityCredentialsUpdatedCb = IdentityVoidCb
    export type IdentityReferenceAddedCb = IdentityVoidCb
    export type IdentityReferenceRemovedCb = IdentityVoidCb
    export type IdentityRemovedCb = IdentityVoidCb
    export type IdentitySignedOutCb = IdentityVoidCb
/**
 * Name of the imported GIR library
 * @see https://gitlab.gnome.org/GNOME/gjs/-/blob/master/gi/ns.cpp#L188
 */
export const __name__: string
/**
 * Version of the imported GIR library
 * @see https://gitlab.gnome.org/GNOME/gjs/-/blob/master/gi/ns.cpp#L189
 */
export const __version__: string
// END