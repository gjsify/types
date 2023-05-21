
/*
 * Type Definitions for node-gtk (https://github.com/romgrk/node-gtk)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/gjsify/ts-for-gir
 */

import './node-gsignond-1.0-import.d.ts';
    
/**
 * GSignond-1.0
 */

import type Gio from '@girs/node-gio-2.0';
import type GObject from '@girs/node-gobject-2.0';
import type GLib from '@girs/node-glib-2.0';

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
const CONFIG_DBUS_TIMEOUTS: string | null
/**
 * A prefix for general keys. Should be used only when defining new keys.
 */
const CONFIG_GENERAL: string | null
/**
 * Converts the GVariant to GError.
 * @param var_ instance of #GVariant
 * @returns #GError object if successful, %NULL otherwise.
 */
function errorNewFromVariant(var_: GLib.Variant): GLib.Error | null
/**
 * Creates and returns a domain for GSignond errors.
 */
function errorQuark(): GLib.Quark
/**
 * Converts the GError to GVariant.
 * @param error instance of #GError
 * @returns #GVariant object if successful, %NULL otherwise.
 */
function errorToVariant(error: GLib.Error): GLib.Variant | null
/**
 * This function generates a random secure nonce using SHA1 HMAC.
 * @returns the nonce in lowercase hexadecimal format, 40 bytes long.
 */
function generateNonce(): string | null
/**
 * Checks if `host` belongs to `domain`.
 * @param host a host name
 * @param domain a domain name
 * @returns the result
 */
function isHostInDomain(host: string | null, domain: string | null): boolean
/**
 * Create a #GIOStream from two file descriptors
 * @param inFd a UNIX file descriptor
 * @param outFd a UNIX file descriptor
 * @param closeFds %TRUE to close the file descriptor when done
 * @returns a new #GIOStream
 */
function newIoStreamFromFd(inFd: number, outFd: number, closeFds: boolean): Gio.IOStream
/**
 * Builds a #GSignondSecurityContext item from a GVariant of type "(ss)".
 * @param variant GVariant item with a #GSignondSecurityContext construct.
 * @returns #GSignondSecurityContext item.
 */
function securityContextFromVariant(variant: GLib.Variant): SecurityContext
/**
 * Convert sequence of strings to null-terminated string array.
 * @param seq Sequence of strings to convert
 * @returns Null-terminated array of strings
 */
function sequenceToArray(seq: GLib.Sequence): string[]
/**
 * This function securely wipes the contents of the directory by calling
 * gsignond_wipe_file() on each file. It also removes links and empty directories but
 * does not recursively wipe them.
 * @param dirname directory to wipe
 * @returns %TRUE if wiping and removal was successful.
 */
function wipeDirectory(dirname: string | null): boolean
/**
 * This function securely wipes the contents of the file, by overwriting it with
 * 0's, then 1's, then random data. The file is then removed.
 * @param filename filename to wipe
 * @returns TRUE if wiping and removal was successful.
 */
function wipeFile(filename: string | null): boolean
module Plugin {

    // Signal callback interfaces

    /**
     * Signal callback interface for `error`
     */
    interface ErrorSignalCallback {
        (error: GLib.Error): void
    }

    /**
     * Signal callback interface for `refreshed`
     */
    interface RefreshedSignalCallback {
        (uiData: SignonuiData): void
    }

    /**
     * Signal callback interface for `response`
     */
    interface ResponseSignalCallback {
        (sessionData: SessionData): void
    }

    /**
     * Signal callback interface for `response-final`
     */
    interface ResponseFinalSignalCallback {
        (sessionData: SessionData): void
    }

    /**
     * Signal callback interface for `status-changed`
     */
    interface StatusChangedSignalCallback {
        (state: PluginState, message: string | null): void
    }

    /**
     * Signal callback interface for `store`
     */
    interface StoreSignalCallback {
        (data: Dictionary): void
    }

    /**
     * Signal callback interface for `user-action-required`
     */
    interface UserActionRequiredSignalCallback {
        (uiData: SignonuiData): void
    }


    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

interface Plugin {

    // Own properties of GSignond-1.0.GSignond.Plugin

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
    readonly type: string | null
    __gtype__: number

    // Owm methods of GSignond-1.0.GSignond.Plugin

    // Has conflict: cancel(): void
    /**
     * Plugin implementations should use this to issue #GSignondPlugin::error
     * signal. This method should not be used otherwise.
     * @param error the error
     */
    error(error: GLib.Error): void
    // Has conflict: refresh(uiData: SignonuiData): void
    /**
     * Plugin implementations should use this to issue #GSignondPlugin::refreshed
     * signal. This method should not be used otherwise.
     * @param uiData UI data
     */
    refreshed(uiData: SignonuiData): void
    // Has conflict: request(sessionData: SessionData): void
    // Has conflict: requestInitial(sessionData: SessionData, identityMethodCache: Dictionary, mechanism: string | null): void
    /**
     * Plugin implementations should use this to issue #GSignondPlugin::response
     * signal. This method should not be used otherwise.
     * @param sessionData session data
     */
    response(sessionData: SessionData): void
    /**
     * Plugin implementations should use this to issue #GSignondPlugin::response-final
     * signal. This method should not be used otherwise.
     * @param sessionData session data
     */
    responseFinal(sessionData: SessionData): void
    /**
     * Plugin implementations should use this to issue #GSignondPlugin::status-changed
     * signal. This method should not be used otherwise.
     * @param state the new state
     * @param message the message
     */
    statusChanged(state: PluginState, message: string | null): void
    /**
     * Plugin implementations should use this to issue #GSignondPlugin::store
     * signal. This method should not be used otherwise.
     * @param identityMethodCache data to store
     */
    store(identityMethodCache: Dictionary): void
    // Has conflict: userActionFinished(uiData: SignonuiData): void
    /**
     * Plugin implementations should use this to issue #GSignondPlugin::user-action-required
     * signal. This method should not be used otherwise.
     * @param uiData UI data
     */
    userActionRequired(uiData: SignonuiData): void

    // Own virtual methods of GSignond-1.0.GSignond.Plugin

    /**
     * This method cancels an ongoing authentication session. The plugin implementations
     * should issue a #GSignondPlugin::error signal with #GSIGNOND_ERROR_SESSION_CANCELED
     * error, and prepare for a new authentication session.
     * @virtual 
     */
    cancel(): void
    /**
     * This method asks the plugin to refresh the UI. The plugin responds with
     * #GSignondPlugin::refreshed signal.
     * @virtual 
     * @param uiData UI refresh parameters
     */
    refresh(uiData: SignonuiData): void
    /**
     * This method provides the plugin with additional parameters for the session
     * after the plugin has asked for it via #GSignondPlugin::response signal.
     * @virtual 
     * @param sessionData additional parameters for the session
     */
    request(sessionData: SessionData): void
    /**
     * This method starts a new authentication session.
     * @virtual 
     * @param sessionData parameters for the session
     * @param identityMethodCache data from persistent storage, saved previously via #GSignondPlugin::store signal
     * @param mechanism mechanism to use for the authentication
     */
    requestInitial(sessionData: SessionData, identityMethodCache: Dictionary, mechanism: string | null): void
    /**
     * This method provides the plugin with the results of UI interaction
     * after the plugin has asked for it via #GSignondPlugin::user-action-required signal.
     * @virtual 
     * @param uiData results of UI interaction
     */
    userActionFinished(uiData: SignonuiData): void

    // Own signals of GSignond-1.0.GSignond.Plugin

    connect(sigName: "error", callback: Plugin.ErrorSignalCallback): number
    on(sigName: "error", callback: Plugin.ErrorSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "error", callback: Plugin.ErrorSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "error", callback: Plugin.ErrorSignalCallback): NodeJS.EventEmitter
    emit(sigName: "error", ...args: any[]): void
    connect(sigName: "refreshed", callback: Plugin.RefreshedSignalCallback): number
    on(sigName: "refreshed", callback: Plugin.RefreshedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "refreshed", callback: Plugin.RefreshedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "refreshed", callback: Plugin.RefreshedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "refreshed", ...args: any[]): void
    connect(sigName: "response", callback: Plugin.ResponseSignalCallback): number
    on(sigName: "response", callback: Plugin.ResponseSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "response", callback: Plugin.ResponseSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "response", callback: Plugin.ResponseSignalCallback): NodeJS.EventEmitter
    emit(sigName: "response", ...args: any[]): void
    connect(sigName: "response-final", callback: Plugin.ResponseFinalSignalCallback): number
    on(sigName: "response-final", callback: Plugin.ResponseFinalSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "response-final", callback: Plugin.ResponseFinalSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "response-final", callback: Plugin.ResponseFinalSignalCallback): NodeJS.EventEmitter
    emit(sigName: "response-final", ...args: any[]): void
    connect(sigName: "status-changed", callback: Plugin.StatusChangedSignalCallback): number
    on(sigName: "status-changed", callback: Plugin.StatusChangedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "status-changed", callback: Plugin.StatusChangedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "status-changed", callback: Plugin.StatusChangedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "status-changed", message: string | null, ...args: any[]): void
    connect(sigName: "store", callback: Plugin.StoreSignalCallback): number
    on(sigName: "store", callback: Plugin.StoreSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "store", callback: Plugin.StoreSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "store", callback: Plugin.StoreSignalCallback): NodeJS.EventEmitter
    emit(sigName: "store", ...args: any[]): void
    connect(sigName: "user-action-required", callback: Plugin.UserActionRequiredSignalCallback): number
    on(sigName: "user-action-required", callback: Plugin.UserActionRequiredSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "user-action-required", callback: Plugin.UserActionRequiredSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "user-action-required", callback: Plugin.UserActionRequiredSignalCallback): NodeJS.EventEmitter
    emit(sigName: "user-action-required", ...args: any[]): void

    // Class property signals of GSignond-1.0.GSignond.Plugin

    connect(sigName: "notify::mechanisms", callback: (...args: any[]) => void): number
    on(sigName: "notify::mechanisms", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::mechanisms", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::mechanisms", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::mechanisms", ...args: any[]): void
    connect(sigName: "notify::type", callback: (...args: any[]) => void): number
    on(sigName: "notify::type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::type", ...args: any[]): void
    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

/**
 * Opaque #GSignondPlugin data structure.
 * @interface 
 */
class Plugin extends GObject.Object {

    // Own properties of GSignond-1.0.GSignond.Plugin

    static name: string

    // Constructors of GSignond-1.0.GSignond.Plugin

    constructor(config?: Plugin.ConstructorProperties) 
    _init(config?: Plugin.ConstructorProperties): void
}

module AccessControlManager {

    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of GSignond-1.0.GSignond.AccessControlManager

        config?: Config | null
    }

}

interface AccessControlManager {

    // Own properties of GSignond-1.0.GSignond.AccessControlManager

    __gtype__: number

    // Own fields of GSignond-1.0.GSignond.AccessControlManager

    parentInstance: GObject.Object
    config: Config
    priv: AccessControlManagerPrivate

    // Owm methods of GSignond-1.0.GSignond.AccessControlManager

    // Has conflict: aclIsValid(peerCtx: SecurityContext, identityAcl: SecurityContext[]): boolean
    // Has conflict: peerIsAllowedToUseIdentity(peerCtx: SecurityContext, ownerCtx: SecurityContext, identityAcl: SecurityContext[]): boolean
    // Has conflict: peerIsOwnerOfIdentity(peerCtx: SecurityContext, ownerCtx: SecurityContext): boolean
    // Has conflict: securityContextOfKeychain(): SecurityContext
    // Has conflict: securityContextOfPeer(peerCtx: SecurityContext, peerFd: number, peerService: string | null, peerAppCtx: string | null): void

    // Own virtual methods of GSignond-1.0.GSignond.AccessControlManager

    /**
     * Checks if the specified peer is allowed to set the specified access
     * control list. gsignond_access_control_manager_peer_is_owner_of_identity()
     * is used before calling this method to verify identity ownership.
     * 
     * The default implementation always returns %TRUE.
     * @virtual 
     * @param peerCtx security context of the peer connection.
     * @param identityAcl access control list for the identity.
     * @returns %TRUE if the ACL is valid, %FALSE otherwise.
     */
    aclIsValid(peerCtx: SecurityContext, identityAcl: SecurityContext[]): boolean
    /**
     * Checks if specified peer is allowed to access the specified identity.
     * 
     * The default implementation goes over items in `identity_acl,` using
     * gsignond_security_context_check() to check them against `peer_ctx`.
     * @virtual 
     * @param peerCtx security context of the peer connection.
     * @param ownerCtx security context of the identity owner.
     * @param identityAcl access control list for the identity in question. Includes the `owner_ctx` as well.
     * @returns %TRUE if the peer is allowed to use the identity, %FALSE otherwise.
     */
    peerIsAllowedToUseIdentity(peerCtx: SecurityContext, ownerCtx: SecurityContext, identityAcl: SecurityContext[]): boolean
    /**
     * Checks if the peer specified in `peer_ctx` is the owner of the identity.
     * 
     * The default implementation is using gsignond_security_context_check()
     * to check `peer_ctx` against `owner_ctx` directly.
     * @virtual 
     * @param peerCtx security context of the peer connection.
     * @param ownerCtx security context of the identity owner.
     * @returns %TRUE if the peer is the owner to use the identity, %FALSE otherwise.
     */
    peerIsOwnerOfIdentity(peerCtx: SecurityContext, ownerCtx: SecurityContext): boolean
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
     * @virtual 
     * @returns security context of the keychain application.
     */
    securityContextOfKeychain(): SecurityContext
    /**
     * Retrieves and sets #GSignondSecurityContext of the specified peer.
     * 
     * The default implementation sets the app context as it was passed, and sets
     * the system context to the binary path of the process that is determined from
     * `peer_fd` and `peer_service` parameters.
     * @virtual 
     * @param peerCtx instance of security context to be set.
     * @param peerFd file descriptor of the peer connection if using peer-to-peer dbus, -1 otherwise.
     * @param peerService g_dbus_method_invocation_get_sender() of the peer connection, if not using peer-to-peer dbus, NULL otherwise
     * @param peerAppCtx application context of the peer connection.
     */
    securityContextOfPeer(peerCtx: SecurityContext, peerFd: number, peerService: string | null, peerAppCtx: string | null): void

    // Class property signals of GSignond-1.0.GSignond.AccessControlManager

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

/**
 * Opaque #GSignondAccessControlManager data structure.
 * @class 
 */
class AccessControlManager extends GObject.Object {

    // Own properties of GSignond-1.0.GSignond.AccessControlManager

    static name: string

    // Constructors of GSignond-1.0.GSignond.AccessControlManager

    constructor(config?: AccessControlManager.ConstructorProperties) 
    _init(config?: AccessControlManager.ConstructorProperties): void
}

module Config {

    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

interface Config {

    // Own properties of GSignond-1.0.GSignond.Config

    __gtype__: number

    // Owm methods of GSignond-1.0.GSignond.Config

    /**
     * Get an integer configuration value.
     * @param key the key name
     * @returns the value corresponding to the key as an integer. If the key does not exist or cannot be converted to the integer, 0 is returned.
     */
    getInteger(key: string | null): number
    /**
     * Get a string configuration value.
     * @param key the key name
     * @returns the value corresponding to the key as string. If the key does not exist, %NULL is returned.
     */
    getString(key: string | null): string | null
    /**
     * Sets the configuration value to the provided integer.
     * @param key the key name
     * @param value the value
     */
    setInteger(key: string | null, value: number): void
    /**
     * Sets the configuration value to the provided string.
     * @param key the key name
     * @param value the value
     */
    setString(key: string | null, value: string | null): void

    // Class property signals of GSignond-1.0.GSignond.Config

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

/**
 * Opaque structure for the object.
 * @class 
 */
class Config extends GObject.Object {

    // Own properties of GSignond-1.0.GSignond.Config

    static name: string

    // Constructors of GSignond-1.0.GSignond.Config

    constructor(config?: Config.ConstructorProperties) 
    /**
     * Create a #GSignondConfig object.
     * @constructor 
     * @returns an instance of #GSignondConfig. gSSO extensions should not use this as they're already provided with a config object when they're created.
     */
    constructor() 
    /**
     * Create a #GSignondConfig object.
     * @constructor 
     * @returns an instance of #GSignondConfig. gSSO extensions should not use this as they're already provided with a config object when they're created.
     */
    static new(): Config
    _init(config?: Config.ConstructorProperties): void
}

module Credentials {

    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

interface Credentials {

    // Own properties of GSignond-1.0.GSignond.Credentials

    __gtype__: number

    // Own fields of GSignond-1.0.GSignond.Credentials

    parentInstance: GObject.Object

    // Owm methods of GSignond-1.0.GSignond.Credentials

    /**
     * Compares elements of two GSignondCredentials object for equality.
     * @param two the second credential to be compared.
     * @returns %TRUE if id, username and password are same for both credential objects, %FALSE otherwise.
     */
    equal(two: Credentials): boolean
    /**
     * Gets the identity id
     * @returns the id
     */
    getId(): number
    /**
     * Gets the password from the #GSignondCredentials object
     * @returns the password if the object is valid, %NULL otherwise.
     */
    getPassword(): string | null
    /**
     * Gets the username of the #GSignondCredentials object
     * @returns the username if the object is valid, %NULL otherwise.
     */
    getUsername(): string | null
    /**
     * Sets the data of the #GSignondCredentials.
     * @param id the identity id associated with the credentials.
     * @param username the username.
     * @param password the password.
     * @returns %TRUE if successful, %FALSE otherwise.
     */
    setData(id: number, username: string | null, password: string | null): boolean

    // Overloads of setData

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
    setData(key: string | null, data: any | null): void
    /**
     * Sets the identity id of the #GSignondCredentials object
     * @param id the id.
     * @returns %TRUE if successful, %FALSE otherwise.
     */
    setId(id: number): boolean
    /**
     * Sets the password of the GSignondCredentials object
     * @param password the password.
     * @returns %TRUE if successful, %FALSE otherwise.
     */
    setPassword(password: string | null): boolean
    /**
     * Sets the username of the GSignondCredentials object
     * @param username the username.
     * @returns %TRUE if successful, %FALSE otherwise.
     */
    setUsername(username: string | null): boolean

    // Class property signals of GSignond-1.0.GSignond.Credentials

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

/**
 * Opaque #GSignondCredentials data structure.
 * @class 
 */
class Credentials extends GObject.Object {

    // Own properties of GSignond-1.0.GSignond.Credentials

    static name: string

    // Constructors of GSignond-1.0.GSignond.Credentials

    constructor(config?: Credentials.ConstructorProperties) 
    /**
     * Creates a new empty #GSignondCredentials object
     * @constructor 
     * @returns the #GSignondCredentials object
     */
    constructor() 
    /**
     * Creates a new empty #GSignondCredentials object
     * @constructor 
     * @returns the #GSignondCredentials object
     */
    static new(): Credentials
    _init(config?: Credentials.ConstructorProperties): void
}

module Dictionary {

    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

interface Dictionary {

    // Own properties of GSignond-1.0.GSignond.Dictionary

    __gtype__: number

    // Own fields of GSignond-1.0.GSignond.Dictionary

    parentInstance: GObject.Object

    // Owm methods of GSignond-1.0.GSignond.Dictionary

    /**
     * Checks if the `dict` contains `key`.
     * @param key key to check
     * @returns %TRUE if found, %FALSE otherwise.
     */
    contains(key: string | null): boolean
    /**
     * Creates a copy of the dictionary.
     * @returns #GSignondDictionary object containing the same keys and values than @other.
     */
    copy(): Dictionary
    /**
     * Retrieves a #GVariant value from the dictionary. This can be used to retrieve
     * a value of an arbitrary type, and then convert it manually to a specific type
     * using #GVariant methods. For most commonly used types, also getters that
     * return the specific type directly are provided (gsignond_dictionary_get_string()
     * and similar).
     * @param key the key to look up in the dictionary
     * @returns the value; %NULL is returned in case of failure (for example if the entry corresponding to the supplied key doesn't exist).
     */
    get(key: string | null): GLib.Variant | null
    /**
     * Retrieves a gboolean value.
     * @param key key to look up
     * @returns %TRUE if the value was retrieved successfully, %FALSE otherwise.
     */
    getBoolean(key: string | null): [ /* returnType */ boolean, /* value */ boolean ]
    /**
     * Retrieves a int32 value.
     * @param key key to look up
     * @returns %TRUE if the value was retrieved successfully, %FALSE otherwise.
     */
    getInt32(key: string | null): [ /* returnType */ boolean, /* value */ number ]
    /**
     * Retrieves a int64 value.
     * @param key key to look up
     * @returns %TRUE if the value was retrieved successfully, %FALSE otherwise.
     */
    getInt64(key: string | null): [ /* returnType */ boolean, /* value */ number ]
    /**
     * Retrieves a string value.
     * @param key key to look up
     * @returns the value if it was retrieved successfully, %NULL otherwise.
     */
    getString(key: string | null): string | null
    /**
     * Get the #GHashTable associated to the #GSignondDictionary.
     * 
     * It should not be modified.
     * @returns The #GHashTable contained into the #GSignondDictionary.
     */
    getTable(): GLib.HashTable
    /**
     * Retrieves a uint32 value.
     * @param key key to look up
     * @returns %TRUE if the value was retrieved successfully, %FALSE otherwise.
     */
    getUint32(key: string | null): [ /* returnType */ boolean, /* value */ number ]
    /**
     * Retrieves a uint64 value.
     * @param key key to look up
     * @returns %TRUE if the value was retrieved successfully, %FALSE otherwise.
     */
    getUint64(key: string | null): [ /* returnType */ boolean, /* value */ number ]
    /**
     * Removes key-value pair in the dictionary as per key.
     * @param key key which needs to be removed from the dictionary
     * @returns %TRUE if successful, %FALSE otherwise.
     */
    remove(key: string | null): boolean
    /**
     * Adds or replaces key-value pair in the dictionary. This allows to set a value
     * of an arbitrary type: it first needs to be converted to a #GVariant. For most
     * commonly used types also type-specific setters are provided.
     * @param key key to be set
     * @param value value to be set
     * @returns %TRUE if successful, %FALSE otherwise.
     */
    set(key: string | null, value: GLib.Variant): boolean
    /**
     * Sets or replaces a gboolean value in the dictionary.
     * @param key key to set
     * @param value value to set
     * @returns %TRUE if the value was set or replaced successfully, %FALSE otherwise.
     */
    setBoolean(key: string | null, value: boolean): boolean
    /**
     * Sets or replaces a int32 value in the dictionary.
     * @param key key to set
     * @param value value to set
     * @returns %TRUE if the value was set or replaced successfully, %FALSE otherwise.
     */
    setInt32(key: string | null, value: number): boolean
    /**
     * Sets or replaces a int64 value in the dictionary.
     * @param key key to set
     * @param value value to set
     * @returns %TRUE if the value was set or replaced successfully, %FALSE otherwise.
     */
    setInt64(key: string | null, value: number): boolean
    /**
     * Sets or replaces a string value in the dictionary.
     * @param key key to set
     * @param value value to set
     * @returns %TRUE if the value was set or replaced successfully, %FALSE otherwise.
     */
    setString(key: string | null, value: string | null): boolean
    /**
     * Sets or replaces a uint32 value in the dictionary.
     * @param key key to set
     * @param value value to set
     * @returns %TRUE if the value was set or replaced successfully, %FALSE otherwise.
     */
    setUint32(key: string | null, value: number): boolean
    /**
     * Sets or replaces a uint64 value in the dictionary.
     * @param key key to set
     * @param value value to set
     * @returns %TRUE if the value was set or replaced successfully, %FALSE otherwise.
     */
    setUint64(key: string | null, value: number): boolean
    /**
     * Converts the #GSignondDictionary to a #GVariant. The result can be serialized
     * or put into another #GSignondDictionary using gsignond_dictionary_set().
     * @returns #GVariant object if successful, %NULL otherwise.
     */
    toVariant(): GLib.Variant | null
    /**
     * Converts the #GSignondDictionary to a #GVariantBuilder of type
     * G_VARIANT_TYPE_VARDICT.
     * 
     * Caller should use g_variant_builder_unref() on the return value when it is
     * no longer needed.
     * @returns #GVariantBuilder if successful, %NULL otherwise.
     */
    toVariantBuilder(): GLib.VariantBuilder | null

    // Class property signals of GSignond-1.0.GSignond.Dictionary

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

/**
 * Opaque #GSignondDictionary data structure.
 * @class 
 */
class Dictionary extends GObject.Object {

    // Own properties of GSignond-1.0.GSignond.Dictionary

    static name: string

    // Constructors of GSignond-1.0.GSignond.Dictionary

    constructor(config?: Dictionary.ConstructorProperties) 
    /**
     * Creates a new instance of #GSignondDictionary.
     * @constructor 
     * @returns A new #GSignondDictionary instance.
     */
    constructor() 
    /**
     * Creates a new instance of #GSignondDictionary.
     * @constructor 
     * @returns A new #GSignondDictionary instance.
     */
    static new(): Dictionary
    /**
     * Converts the #GVariant to #GSignondDictionary. This is useful for example if
     * the dictionary needs to be deserialized, or if it's contained in another
     * #GSignondDictionary and has been retrieved using gsignond_dictionary_get().
     * @constructor 
     * @param variant instance of #GVariant
     * @returns #GSignondDictionary if successful, NULL otherwise.
     */
    static newFromVariant(variant: GLib.Variant): Dictionary
    _init(config?: Dictionary.ConstructorProperties): void
}

module Extension {

    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

interface Extension {

    // Own properties of GSignond-1.0.GSignond.Extension

    __gtype__: number

    // Own fields of GSignond-1.0.GSignond.Extension

    parentInstance: GObject.Object

    // Owm methods of GSignond-1.0.GSignond.Extension

    // Has conflict: getAccessControlManager(config: Config): AccessControlManager
    /**
     * Get a human readable name of the extension. Default implementation
     * returns "default".
     * @returns name of the extension.
     */
    getName(): string | null
    // Has conflict: getSecretStorage(config: Config): SecretStorage
    // Has conflict: getStorageManager(config: Config): StorageManager
    /**
     * Get version of the extension, split into four bytes in order from MSB to LSB;
     * major, minor, patchlevel, build. Default implementation returns 0.
     */
    getVersion(): number

    // Own virtual methods of GSignond-1.0.GSignond.Extension

    /**
     * Factory method to get a singleton access control manager object. See
     * #GSignondAccessControlManager for the description of the default implementation.
     * @virtual 
     * @param config configuration object instance.
     * @returns access control manager object instance.
     */
    getAccessControlManager(config: Config): AccessControlManager
    getExtensionName(): string | null
    getExtensionVersion(): number
    /**
     * Factory method to get a singleton secret storage object. See
     * #GSignondSecretStorage for the description of the default implementation.
     * @virtual 
     * @param config configuration object instance.
     * @returns secret storage object instance.
     */
    getSecretStorage(config: Config): SecretStorage
    /**
     * Factory method to get a singleton storage manager object. See
     * #GSignondStorageManager for the description of the default implementation.
     * @virtual 
     * @param config configuration object instance.
     * @returns storage manager object instance.
     */
    getStorageManager(config: Config): StorageManager

    // Class property signals of GSignond-1.0.GSignond.Extension

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

/**
 * Opaque #GSignondExtension data structure.
 * @class 
 */
class Extension extends GObject.Object {

    // Own properties of GSignond-1.0.GSignond.Extension

    static name: string

    // Constructors of GSignond-1.0.GSignond.Extension

    constructor(config?: Extension.ConstructorProperties) 
    _init(config?: Extension.ConstructorProperties): void
}

module SecretStorage {

    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of GSignond-1.0.GSignond.SecretStorage

        config?: Config | null
    }

}

interface SecretStorage {

    // Own properties of GSignond-1.0.GSignond.SecretStorage

    readonly config: Config
    __gtype__: number

    // Own fields of GSignond-1.0.GSignond.SecretStorage

    parentInstance: GObject.Object

    // Owm methods of GSignond-1.0.GSignond.SecretStorage

    // Has conflict: checkCredentials(creds: Credentials): boolean
    // Has conflict: clearDb(): boolean
    // Has conflict: closeDb(): boolean
    // Has conflict: getLastError(): GLib.Error
    // Has conflict: isOpenDb(): boolean
    // Has conflict: loadCredentials(id: number): Credentials | null
    // Has conflict: loadData(id: number, method: number): Dictionary
    // Has conflict: openDb(): boolean
    // Has conflict: removeCredentials(id: number): boolean
    // Has conflict: removeData(id: number, method: number): boolean
    // Has conflict: updateCredentials(creds: Credentials): boolean
    // Has conflict: updateData(id: number, method: number, data: Dictionary): boolean

    // Own virtual methods of GSignond-1.0.GSignond.SecretStorage

    /**
     * Checks whether the given credentials match what is stored in the database.
     * @virtual 
     * @param creds the credentials that are being checked.
     * @returns %TRUE if successful, %FALSE otherwise.
     */
    checkCredentials(creds: Credentials): boolean
    /**
     * Removes all stored secrets from the database.
     * @virtual 
     * @returns %TRUE if successful, %FALSE otherwise.
     */
    clearDb(): boolean
    /**
     * Closes the database. To reopen it, call gsignond_secret_storage_open_db().
     * @virtual 
     * @returns %TRUE if successful, %FALSE otherwise.
     */
    closeDb(): boolean
    /**
     * Retrieves the last occurred error that has occurred
     * @virtual 
     * @returns last occurred #GError
     */
    getLastError(): GLib.Error
    /**
     * Checks if the database is open or not.
     * @virtual 
     * @returns %TRUE if successful, %FALSE otherwise.
     */
    isOpenDb(): boolean
    /**
     * Loads the credentials from the database.
     * @virtual 
     * @param id the identity id whose credentials are being loaded.
     * @returns #GSignondCredentials if successful, %NULL otherwise.
     */
    loadCredentials(id: number): Credentials | null
    /**
     * Loads the secret data associated with a given identity and method.
     * @virtual 
     * @param id the identity id whose data are fetched
     * @param method the authentication method the data is used for.
     * @returns the secret data
     */
    loadData(id: number, method: number): Dictionary
    /**
     * Opens (and initializes) the database. The implementation should take
     * care of creating the DB, if it doesn't exist, and it should use
     * #GSIGNOND_CONFIG_GENERAL_SECURE_DIR
     * to determine database location in the filesystem.
     * 
     * The default implementation is using SQLite for the storage.
     * @virtual 
     * @returns %TRUE if successful, %FALSE otherwise.
     */
    openDb(): boolean
    /**
     * Remove the credentials for the given identity.
     * @virtual 
     * @param id the identity whose credentials are being updated.
     * @returns %TRUE if successful, %FALSE otherwise.
     */
    removeCredentials(id: number): boolean
    /**
     * Removes secret data associated with a given id/method.
     * @virtual 
     * @param id the identity whose data are fetched.
     * @param method the authentication method the data is used for.
     * @returns %TRUE if successful, %FALSE otherwise.
     */
    removeData(id: number, method: number): boolean
    /**
     * Stores/updates the credentials for the given identity.
     * @virtual 
     * @param creds the credentials that are being updated.
     * @returns %TRUE if successful, %FALSE otherwise.
     */
    updateCredentials(creds: Credentials): boolean
    /**
     * Calling this method updates the secret data
     * associated with the given id/method.
     * @virtual 
     * @param id the identity whose data are fetched.
     * @param method the authentication method the data is used for.
     * @param data the data to update
     * @returns %TRUE if successful, %FALSE otherwise.
     */
    updateData(id: number, method: number, data: Dictionary): boolean

    // Class property signals of GSignond-1.0.GSignond.SecretStorage

    connect(sigName: "notify::config", callback: (...args: any[]) => void): number
    on(sigName: "notify::config", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::config", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::config", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::config", ...args: any[]): void
    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

/**
 * Opaque #GSignondSecretStorage data structure.
 * @class 
 */
class SecretStorage extends GObject.Object {

    // Own properties of GSignond-1.0.GSignond.SecretStorage

    static name: string

    // Constructors of GSignond-1.0.GSignond.SecretStorage

    constructor(config?: SecretStorage.ConstructorProperties) 
    _init(config?: SecretStorage.ConstructorProperties): void
}

module SessionData {

    // Constructor properties interface

    interface ConstructorProperties extends Dictionary.ConstructorProperties {
    }

}

interface SessionData {

    // Own properties of GSignond-1.0.GSignond.SessionData

    __gtype__: number

    // Own fields of GSignond-1.0.GSignond.SessionData

    parentInstance: any

    // Owm methods of GSignond-1.0.GSignond.SessionData

    /**
     * Creates a copy of the dictionary session data.
     * @returns #GSignondSessionData object if the copy was successful, NULL otherwise.
     */
    copy(): SessionData

    // Overloads of copy

    /**
     * Creates a copy of the dictionary.
     * @returns #GSignondDictionary object containing the same keys and values than @other.
     */
    copy(): Dictionary
    /**
     * A getter for a caption associated with the authentication session.
     * Caption tells the user which application/credentials/provider is requestion
     * authentication.
     */
    getCaption(): string | null
    /**
     * A getter for a network proxy setting associated with the authentication session.
     * If this property is not set, the default system proxy settings should be used.
     */
    getNetworkProxy(): string | null
    /**
     * A getter for a network timeout setting associated with the authentication session.
     * This can be used to change the default timeout in case of unresponsive servers.
     * @returns whether the key-value pair exists in the @data dictionary or not.
     */
    getNetworkTimeout(): [ /* returnType */ boolean, /* networkTimeout */ number ]
    /**
     * A getter for a realm associated with the authentication session.
     */
    getRealm(): string | null
    /**
     * A getter for a renew token property associated with the authentication session.
     * This property tells the plugin to discard any cached tokens and start
     * the authentication process anew.
     * @returns whether the key-value pair exists in the @data dictionary or not.
     */
    getRenewToken(): [ /* returnType */ boolean, /* renewToken */ boolean ]
    /**
     * A getter for a secret (e.g. a password) associated with the authentication session.
     */
    getSecret(): string | null
    /**
     * A getter for UI policy setting associated with the authentication session.
     * The UI policy indicates how the authentication plugin should interact with the user.
     * @returns whether the key-value pair exists in the @data dictionary or not.
     */
    getUiPolicy(): [ /* returnType */ boolean, /* uiPolicy */ UiPolicy ]
    /**
     * A getter for a username associated with the authentication session.
     */
    getUsername(): string | null
    /**
     * A getter for a window id setting associated with the authentication session.
     * This can be used to embed the user interaction window produced by the authentication
     * session into an application window.
     * @returns whether the key-value pair exists in the @data dictionary or not.
     */
    getWindowId(): [ /* returnType */ boolean, /* windowId */ number ]
    /**
     * A setter for a list of realms allowed for the identity use.
     * @param realms a #GSequence if allowed realms
     */
    setAllowedRealms(realms: GLib.Sequence): void
    /**
     * A setter for a caption associated with the authentication session.
     * Caption tells the user which application/credentials/provider is requestion
     * authentication.
     * @param caption a caption to set
     */
    setCaption(caption: string | null): void
    /**
     * A setter for a network proxy setting associated with the authentication session.
     * If this property is not set, the default system proxy settings should be used.
     * @param networkProxy network proxy to use
     */
    setNetworkProxy(networkProxy: string | null): void
    /**
     * A setter for a network timeout setting associated with the authentication session.
     * This can be used to change the default timeout in case of unresponsive servers.
     * @param networkTimeout network timeout to use
     */
    setNetworkTimeout(networkTimeout: number): void
    /**
     * A setter for a realm associated with the authentication session.
     * @param realm a realm to set
     */
    setRealm(realm: string | null): void
    /**
     * A setter for a renew token property associated with the authentication session.
     * This property tells the plugin to discard any cached tokens and start
     * the authentication process anew.
     * @param renewToken whether to renew the token set
     */
    setRenewToken(renewToken: boolean): void
    /**
     * A setter for a secret (e.g. a password) associated with the authentication session.
     * @param secret a secret to set
     */
    setSecret(secret: string | null): void
    /**
     * A getter for UI policy setting associated with the authentication session.
     * The UI policy indicates how the authentication plugin should interact with the user.
     * @param uiPolicy ui policy to set
     */
    setUiPolicy(uiPolicy: UiPolicy): void
    /**
     * A setter for a username associated with the authentication session.
     * @param username username to set
     */
    setUsername(username: string | null): void
    /**
     * A setter for a window id setting associated with the authentication session.
     * This can be used to embed the user interaction window produced by the authentication
     * session into an application window.
     * @param windowId window id to use
     */
    setWindowId(windowId: number): void

    // Class property signals of GSignond-1.0.GSignond.SessionData

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

/**
 * Opaque #GSignondSessionData data structure.
 * @class 
 */
class SessionData extends Dictionary {

    // Own properties of GSignond-1.0.GSignond.SessionData

    static name: string

    // Constructors of GSignond-1.0.GSignond.SessionData

    constructor(config?: SessionData.ConstructorProperties) 
    /**
     * Creates a new instance of #GSignondSessionData.
     * @constructor 
     * @returns #GSignondSessionData object if successful, NULL otherwise.
     */
    constructor() 
    /**
     * Creates a new instance of #GSignondSessionData.
     * @constructor 
     * @returns #GSignondSessionData object if successful, NULL otherwise.
     */
    static new(): SessionData

    // Overloads of new

    /**
     * Creates a new instance of #GSignondDictionary.
     * @constructor 
     * @returns A new #GSignondDictionary instance.
     */
    static new(): Dictionary
    /**
     * Converts the #GVariant to #GSignondSessionData. This is useful for example if
     * the dictionary needs to be deserialized, or if it's contained in another
     * #GSignondSessionData and has been retrieved using gsignond_dictionary_get().
     * @constructor 
     * @param variant instance of #GVariant
     * @returns #GSignondSessionData if successful, NULL otherwise.
     */
    static newFromVariant(variant: GLib.Variant): SessionData

    // Overloads of newFromVariant

    /**
     * Converts the #GVariant to #GSignondDictionary. This is useful for example if
     * the dictionary needs to be deserialized, or if it's contained in another
     * #GSignondDictionary and has been retrieved using gsignond_dictionary_get().
     * @constructor 
     * @param variant instance of #GVariant
     * @returns #GSignondDictionary if successful, NULL otherwise.
     */
    static newFromVariant(variant: GLib.Variant): Dictionary
    _init(config?: SessionData.ConstructorProperties): void
}

module SignonuiData {

    // Constructor properties interface

    interface ConstructorProperties extends Dictionary.ConstructorProperties {
    }

}

interface SignonuiData {

    // Own properties of GSignond-1.0.GSignond.SignonuiData

    __gtype__: number

    // Own fields of GSignond-1.0.GSignond.SignonuiData

    parentInstance: any

    // Owm methods of GSignond-1.0.GSignond.SignonuiData

    /**
     * Creates a copy of the dictionary session data.
     * @returns a new #GSignondSignonuiData object copied from @other.
     */
    copy(): SignonuiData

    // Overloads of copy

    /**
     * Creates a copy of the dictionary.
     * @returns #GSignondDictionary object containing the same keys and values than @other.
     */
    copy(): Dictionary
    /**
     * A getter for the user's response to a captcha query.
     * @returns the string entered by the user in response to a captcha query.
     */
    getCaptchaResponse(): string | null
    /**
     * A getter for the captcha URL.
     * @returns the URL to the captcha image to be verified by user.
     */
    getCaptchaUrl(): string | null
    /**
     * A getter for the caption string. Caption tells the user which
     * application/credentials/provider is requestion authentication.
     */
    getCaption(): string | null
    /**
     * A getter for the confirm mode. In confirm mode the user is asked to enter
     * an old password (which is compared to the supplied password), and a new password twice
     * (which is returned).
     * @returns whether this property exists in the @data dictionary or not.
     */
    getConfirm(): [ /* returnType */ boolean, /* confirm */ boolean ]
    /**
     * A getter for the final URL. When the signon UI detects that the user is at
     * the final URL (possibly with additional query or fragment parameters), it
     * will close the window and return the full URL via url response property.
     * This is used by redirection-based authentication, such as OAuth.
     */
    getFinalUrl(): string | null
    /**
     * A getter for the forgot password string which is shown to the user as a link to
     * reset the password or remind him of the password.
     */
    getForgotPassword(): string | null
    /**
     * A getter for the forgot password URL, where the user can reset or request a
     * reminder of the password.
     */
    getForgotPasswordUrl(): string | null
    /**
     * A getter for the message which is show to the user in the signon UI dialog.
     */
    getMessage(): string | null
    /**
     * A getter for the URL that should be opened by signon UI.
     */
    getOpenUrl(): string | null
    /**
     * A getter for the password string.
     */
    getPassword(): string | null
    /**
     * A getter for the UI interaction error. Signon UI sets this to `SIGNONUI_ERROR_NONE` if
     * there were no errors.
     * @returns whether this property exists in the @data dictionary or not.
     */
    getQueryError(): [ /* returnType */ boolean, /* error */ SignonuiError ]
    /**
     * A getter for the query password property. It indicates whether the signon UI
     * should ask the user for a password (and return it in the password property).
     * @returns whether this property exists in the @data dictionary or not.
     */
    getQueryPassword(): [ /* returnType */ boolean, /* queryPassword */ boolean ]
    /**
     * A getter for the query username property. It indicates whether the signon UI
     * should ask the user for a username (and return it in the username property).
     * @returns whether this property exists in the @data dictionary or not.
     */
    getQueryUsername(): [ /* returnType */ boolean, /* queryUsername */ boolean ]
    /**
     * A getter for whether the password should be remembered.
     * @returns whether this property exists in the @data dictionary or not.
     */
    getRememberPassword(): [ /* returnType */ boolean, /* rememberPassword */ boolean ]
    /**
     * A getter for the dialog request id. The id identifies the dialog so that it
     * can be refreshed or updated.
     */
    getRequestId(): string | null
    /**
     * A getter for the test reply values. It's used only by the signon ui
     * implementations to test themselves.
     */
    getTestReply(): string | null
    /**
     * A getter for the UI dialog title.
     */
    getTitle(): string | null
    /**
     * A getter for the response URL. If the final URL was set in the request to the signon UI, and the signon UI
     * detects that it has been reached, then the full final URL is returned using
     * this property. This is used by redirection-based authentication such as OAauth.
     */
    getUrlResponse(): string | null
    /**
     * A getter for the username string.
     */
    getUsername(): string | null
    /**
     * A setter for the user's response to a captcha query.
     * @param response the string entered by the user in response to a captcha query.
     */
    setCaptchaResponse(response: string | null): void
    /**
     * A setter for the captcha URL.
     * @param url the URL to the captcha image to be verified by user
     */
    setCaptchaUrl(url: string | null): void
    /**
     * A setter for the caption string. Caption tells the user which
     * application/credentials/provider is requestion authentication.
     * @param caption the caption string
     */
    setCaption(caption: string | null): void
    /**
     * A setter for the confirm mode. In confirm mode the user is asked to enter
     * an old password (which is compared to the supplied password), and a new password twice
     * (which is returned).
     * @param confirm the value for the property
     */
    setConfirm(confirm: boolean): void
    /**
     * A setter for the final URL. When the signon UI detects that the user is at
     * the final URL (possibly with additional query or fragment parameters), it
     * will close the window and return the full URL via url response property.
     * This is used by redirection-based authentication, such as OAuth.
     * @param url the final url
     */
    setFinalUrl(url: string | null): void
    /**
     * A setter for the forgot password string, which is shown to the user as a link to
     * reset the password or remind him of the password.
     * @param forgot the forgot password string
     */
    setForgotPassword(forgot: string | null): void
    /**
     * A setter for the forgot password URL, where the user can reset or request a
     * reminder of the password.
     * @param url the forgot password URL
     */
    setForgotPasswordUrl(url: string | null): void
    /**
     * A setter for the message which is show to the user in the signon UI dialog.
     * @param message the message
     */
    setMessage(message: string | null): void
    /**
     * A setter for the URL that should be opened by signon UI.
     * @param url the url to open
     */
    setOpenUrl(url: string | null): void
    /**
     * A setter for the password string.
     * @param password the password string
     */
    setPassword(password: string | null): void
    /**
     * A setter for the UI interaction error. Signon UI sets this to `SIGNONUI_ERROR_NONE` if
     * there were no errors.
     * @param error the error
     */
    setQueryError(error: SignonuiError): void
    /**
     * A setter for the query password property. It indicates whether the signon UI
     * should ask the user for a password (and return it in the password property).
     * @param query the property value
     */
    setQueryPassword(query: boolean): void
    /**
     * A setter for the query username property. It indicates whether the signon UI
     * should ask the user for a username (and return it in the username property).
     * @param query the property value
     */
    setQueryUsername(query: boolean): void
    /**
     * A setter for whether the password should be remembered.
     * @param remember the property value
     */
    setRememberPassword(remember: boolean): void
    /**
     * A setter for the dialog request id. The id identifies the dialog so that it
     * can be refreshed or updated.
     * @param id request id
     */
    setRequestId(id: string | null): void
    /**
     * A setter for the test reply values. It's used only by the signon ui
     * implementations to test themselves.
     * @param reply test reply values
     */
    setTestReply(reply: string | null): void
    /**
     * A setter for the UI dialog title.
     * @param title the title
     */
    setTitle(title: string | null): void
    /**
     * A getter for the response URL. If the final URL was set in the request to the
     * signon UI, and the signon UI
     * detects that it has been reached, then the full final URL is returned using
     * this property. This is used by redirection-based authentication such as OAauth.
     * @param response the response URL
     */
    setUrlResponse(response: string | null): void
    /**
     * A setter for the username string.
     * @param username the username string
     */
    setUsername(username: string | null): void

    // Class property signals of GSignond-1.0.GSignond.SignonuiData

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

/**
 * #GSignondSignonuiData is simply a typedef for #GSignondDictionary, which
 * means the developers may also freely use methods associated with that structure,
 * in particular for creating a #GSignondSignonuiData object with
 * gsignond_dictionary_new().
 * @class 
 */
class SignonuiData extends Dictionary {

    // Own properties of GSignond-1.0.GSignond.SignonuiData

    static name: string

    // Constructors of GSignond-1.0.GSignond.SignonuiData

    constructor(config?: SignonuiData.ConstructorProperties) 
    /**
     * Creates a new instance of #GSignondSignonuiData.
     * @constructor 
     * @returns a new #GSignondSignonuiData object.
     */
    constructor() 
    /**
     * Creates a new instance of #GSignondSignonuiData.
     * @constructor 
     * @returns a new #GSignondSignonuiData object.
     */
    static new(): SignonuiData

    // Overloads of new

    /**
     * Creates a new instance of #GSignondDictionary.
     * @constructor 
     * @returns A new #GSignondDictionary instance.
     */
    static new(): Dictionary
    /**
     * Converts the #GVariant to #GSignondSignonuiData. This is useful for example if
     * the dictionary needs to be deserialized, or if it's contained in another
     * #GSignondSignonuiData and has been retrieved using gsignond_dictionary_get().
     * @constructor 
     * @param variant instance of #GVariant
     * @returns a new #GSignondSignonuiData object.
     */
    static newFromVariant(variant: GLib.Variant): SignonuiData

    // Overloads of newFromVariant

    /**
     * Converts the #GVariant to #GSignondDictionary. This is useful for example if
     * the dictionary needs to be deserialized, or if it's contained in another
     * #GSignondDictionary and has been retrieved using gsignond_dictionary_get().
     * @constructor 
     * @param variant instance of #GVariant
     * @returns #GSignondDictionary if successful, NULL otherwise.
     */
    static newFromVariant(variant: GLib.Variant): Dictionary
    _init(config?: SignonuiData.ConstructorProperties): void
}

module StorageManager {

    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of GSignond-1.0.GSignond.StorageManager

        config?: Config | null
    }

}

interface StorageManager {

    // Own properties of GSignond-1.0.GSignond.StorageManager

    __gtype__: number

    // Own fields of GSignond-1.0.GSignond.StorageManager

    parentInstance: GObject.Object
    config: Config
    location: string | null
    priv: StorageManagerPrivate

    // Owm methods of GSignond-1.0.GSignond.StorageManager

    // Has conflict: deleteStorage(): boolean
    // Has conflict: filesystemIsMounted(): boolean
    // Has conflict: initializeStorage(): boolean
    // Has conflict: mountFilesystem(): string | null
    // Has conflict: storageIsInitialized(): boolean
    // Has conflict: unmountFilesystem(): boolean

    // Own virtual methods of GSignond-1.0.GSignond.StorageManager

    /**
     * Destroys all the encryption keys and wipes the storage. gsignond_wipe_directory()
     * is typically used for the latter.
     * @virtual 
     * @returns %TRUE if the storage has been deleted, %FALSE otherwise.
     */
    deleteStorage(): boolean
    /**
     * Checks if the encrypted storage filesystem is currently mounted.
     * @virtual 
     * @returns %TRUE if the filesystem is mounted, %FALSE otherwise.
     */
    filesystemIsMounted(): boolean
    /**
     * Initialize encryption storage. This means making sure that the
     * necessary directories under #GSIGNOND_CONFIG_GENERAL_STORAGE_PATH exist and are accessible.
     * @virtual 
     * @returns %TRUE if the storage has been initialized, %FALSE otherwise.
     */
    initializeStorage(): boolean
    /**
     * Mounts an encrypted storage and returns the filesystem path of the storage
     * mount point. This path will be set in #GSignondConfig as
     * #GSIGNOND_CONFIG_GENERAL_SECURE_DIR and used to access the secret database via
     * #GSignondSecretStorage.
     * 
     * The default implemenation does nothing, and immediately returns the path for the
     * secret database.
     * @virtual 
     * @returns The path of the storage mount point.
     */
    mountFilesystem(): string | null
    /**
     * Checks if the storage has been initialized.
     * @virtual 
     * @returns %TRUE if the storage has been initialized, %FALSE otherwise.
     */
    storageIsInitialized(): boolean
    /**
     * Unmounts a previously mounted encrypted storage filesystem.
     * @virtual 
     * @returns %TRUE if the filesystem has been unmounted, %FALSE otherwise.
     */
    unmountFilesystem(): boolean

    // Class property signals of GSignond-1.0.GSignond.StorageManager

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

/**
 * Opaque #GSignondStorageManager data structure.
 * @class 
 */
class StorageManager extends GObject.Object {

    // Own properties of GSignond-1.0.GSignond.StorageManager

    static name: string

    // Constructors of GSignond-1.0.GSignond.StorageManager

    constructor(config?: StorageManager.ConstructorProperties) 
    _init(config?: StorageManager.ConstructorProperties): void
}

interface AccessControlManagerClass {

    // Own fields of GSignond-1.0.GSignond.AccessControlManagerClass

    /**
     * parent class.
     * @field 
     */
    parentClass: GObject.ObjectClass
    securityContextOfPeer: (self: AccessControlManager, peerCtx: SecurityContext, peerFd: number, peerService: string | null, peerAppCtx: string | null) => void
    peerIsAllowedToUseIdentity: (self: AccessControlManager, peerCtx: SecurityContext, ownerCtx: SecurityContext, identityAcl: SecurityContext[]) => boolean
    peerIsOwnerOfIdentity: (self: AccessControlManager, peerCtx: SecurityContext, ownerCtx: SecurityContext) => boolean
    aclIsValid: (self: AccessControlManager, peerCtx: SecurityContext, identityAcl: SecurityContext[]) => boolean
    securityContextOfKeychain: (self: AccessControlManager) => SecurityContext
}

/**
 * #GSignondAccessControlManagerClass class containing pointers to class methods.
 * @record 
 */
abstract class AccessControlManagerClass {

    // Own properties of GSignond-1.0.GSignond.AccessControlManagerClass

    static name: string
}

interface AccessControlManagerPrivate {
}

class AccessControlManagerPrivate {

    // Own properties of GSignond-1.0.GSignond.AccessControlManagerPrivate

    static name: string
}

interface ConfigClass {

    // Own fields of GSignond-1.0.GSignond.ConfigClass

    parentClass: GObject.ObjectClass
}

/**
 * Opaque structure for the class.
 * @record 
 */
abstract class ConfigClass {

    // Own properties of GSignond-1.0.GSignond.ConfigClass

    static name: string
}

interface CredentialsClass {
}

/**
 * Opaque #GSignondCredentialsClass data structure.
 * @record 
 */
abstract class CredentialsClass {

    // Own properties of GSignond-1.0.GSignond.CredentialsClass

    static name: string
}

interface DictionaryClass {
}

/**
 * Opaque #GSignondDictionaryClass data structure.
 * @record 
 */
abstract class DictionaryClass {

    // Own properties of GSignond-1.0.GSignond.DictionaryClass

    static name: string
}

interface ExtensionClass {

    // Own fields of GSignond-1.0.GSignond.ExtensionClass

    /**
     * the parent class
     * @field 
     */
    parentClass: GObject.ObjectClass
    getExtensionName: (self: Extension) => string | null
    getExtensionVersion: (self: Extension) => number
    getStorageManager: (self: Extension, config: Config) => StorageManager
    getSecretStorage: (self: Extension, config: Config) => SecretStorage
    getAccessControlManager: (self: Extension, config: Config) => AccessControlManager
}

/**
 * #GSignondExtensionClass class containing pointers to class methods.
 * @record 
 */
abstract class ExtensionClass {

    // Own properties of GSignond-1.0.GSignond.ExtensionClass

    static name: string
}

interface PluginInterface {

    // Own fields of GSignond-1.0.GSignond.PluginInterface

    /**
     * parent interface type.
     * @field 
     */
    parent: GObject.TypeInterface
    cancel: (self: Plugin) => void
    requestInitial: (self: Plugin, sessionData: SessionData, identityMethodCache: Dictionary, mechanism: string | null) => void
    request: (self: Plugin, sessionData: SessionData) => void
    userActionFinished: (self: Plugin, uiData: SignonuiData) => void
    refresh: (self: Plugin, uiData: SignonuiData) => void
}

/**
 * #GSignondPluginInterface interface containing pointers to methods that all
 * plugin implementations should provide.
 * @record 
 */
abstract class PluginInterface {

    // Own properties of GSignond-1.0.GSignond.PluginInterface

    static name: string
}

interface SecretStorageClass {

    // Own fields of GSignond-1.0.GSignond.SecretStorageClass

    /**
     * parent class.
     * @field 
     */
    parentClass: GObject.ObjectClass
    openDb: (self: SecretStorage) => boolean
    closeDb: (self: SecretStorage) => boolean
    clearDb: (self: SecretStorage) => boolean
    isOpenDb: (self: SecretStorage) => boolean
    loadCredentials: (self: SecretStorage, id: number) => Credentials | null
    updateCredentials: (self: SecretStorage, creds: Credentials) => boolean
    removeCredentials: (self: SecretStorage, id: number) => boolean
    checkCredentials: (self: SecretStorage, creds: Credentials) => boolean
    loadData: (self: SecretStorage, id: number, method: number) => Dictionary
    updateData: (self: SecretStorage, id: number, method: number, data: Dictionary) => boolean
    removeData: (self: SecretStorage, id: number, method: number) => boolean
    getLastError: (self: SecretStorage) => GLib.Error
}

/**
 * #GSignondSecretStorageClass class containing pointers to class methods.
 * @record 
 */
abstract class SecretStorageClass {

    // Own properties of GSignond-1.0.GSignond.SecretStorageClass

    static name: string
}

interface SecretStoragePrivate {
}

class SecretStoragePrivate {

    // Own properties of GSignond-1.0.GSignond.SecretStoragePrivate

    static name: string
}

interface SecurityContext {

    // Own fields of GSignond-1.0.GSignond.SecurityContext

    sysCtx: string | null
    appCtx: string | null

    // Owm methods of GSignond-1.0.GSignond.SecurityContext

    /**
     * Check if `test` is covered by `reference`.
     * @param test security context item to be checked.
     * @returns TRUE if contexts are equal or the @reference has a wildcard system context, or if system contexts are equal and @reference has a wildcard application context, otherwise FALSE. If either or both contexts are NULL, FALSE is returned.
     */
    check(test: SecurityContext): boolean
    /**
     * Compare two #GSignondSecurityContext items in a similar way to strcmp().
     * @param ctx2 second item to compare.
     * @returns negative if ctx1 < ctx2, 0 if ctx1 == ctx2 and positive if ctx1 > ctx2.
     */
    compare(ctx2: SecurityContext): number
    /**
     * Copies a security context item.
     * @returns a copy of the #GSignondSecurityContext item.
     */
    copy(): SecurityContext
    /**
     * Frees a security context item.
     */
    free(): void
    /**
     * Get the application context part of
     * the #GSignondSecurityContext.
     * @returns application context.
     */
    getApplicationContext(): string | null
    /**
     * Get the system context partof the
     * #GSignondSecurityContext.
     * @returns system context.
     */
    getSystemContext(): string | null
    /**
     * Compare two #GSignondSecurityContext items match.
     * @param ctx2 second item to compare.
     * @returns TRUE if contexts are equal or if either side has a wildcard match for system context, or if system contexts are equal and either side has a wildcard match for the app context, otherwise FALSE. Two NULL contexts match.
     */
    match(ctx2: SecurityContext): boolean
    /**
     * Sets the application context part of
     * the #GSignondSecurityContext.
     * @param applicationContext application security context.
     */
    setApplicationContext(applicationContext: string | null): void
    /**
     * Sets the system context part of the
     * #GSignondSecurityContext.
     * @param systemContext system security context.
     */
    setSystemContext(systemContext: string | null): void
    /**
     * Build a GVariant of type "(ss)" from a #GSignondSecurityContext item.
     * @returns GVariant construct of a #GSignondSecurityContext.
     */
    toVariant(): GLib.Variant
}

class SecurityContext {

    // Own properties of GSignond-1.0.GSignond.SecurityContext

    static name: string

    // Constructors of GSignond-1.0.GSignond.SecurityContext

    /**
     * Allocates a new security context item. System and app context are empty strings.
     * @constructor 
     * @returns allocated #GSignondSecurityContext.
     */
    constructor() 
    /**
     * Allocates a new security context item. System and app context are empty strings.
     * @constructor 
     * @returns allocated #GSignondSecurityContext.
     */
    static new(): SecurityContext
    /**
     * Allocates and initializes a new security context item.
     * @constructor 
     * @param systemContext system security context
     * @param applicationContext application security context
     * @returns allocated #GSignondSecurityContext.
     */
    static newFromValues(systemContext: string | null, applicationContext: string | null): SecurityContext
    /**
     * Builds a #GSignondSecurityContext item from a GVariant of type "(ss)".
     * @param variant GVariant item with a #GSignondSecurityContext construct.
     * @returns #GSignondSecurityContext item.
     */
    static fromVariant(variant: GLib.Variant): SecurityContext
}

interface SessionDataClass {
}

/**
 * Opaque #GSignondSessionDataClass data structure.
 * @record 
 */
abstract class SessionDataClass {

    // Own properties of GSignond-1.0.GSignond.SessionDataClass

    static name: string
}

interface SignonuiDataClass {
}

abstract class SignonuiDataClass {

    // Own properties of GSignond-1.0.GSignond.SignonuiDataClass

    static name: string
}

interface StorageManagerClass {

    // Own fields of GSignond-1.0.GSignond.StorageManagerClass

    /**
     * parent class.
     * @field 
     */
    parentClass: GObject.ObjectClass
    initializeStorage: (self: StorageManager) => boolean
    deleteStorage: (self: StorageManager) => boolean
    storageIsInitialized: (self: StorageManager) => boolean
    mountFilesystem: (self: StorageManager) => string | null
    unmountFilesystem: (self: StorageManager) => boolean
    filesystemIsMounted: (self: StorageManager) => boolean
}

/**
 * #GSignondStorageManagerClass class containing pointers to class methods.
 * @record 
 */
abstract class StorageManagerClass {

    // Own properties of GSignond-1.0.GSignond.StorageManagerClass

    static name: string
}

interface StorageManagerPrivate {
}

class StorageManagerPrivate {

    // Own properties of GSignond-1.0.GSignond.StorageManagerPrivate

    static name: string
}

}

export default GSignond;
// END