// @ts-nocheck

/*
 * Type Definitions for node-gtk (https://github.com/romgrk/node-gtk)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/sammydre/ts-for-gjs
 */
/**
 * GSignond-1.0
 */

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
/**
 * Converts the GVariant to GError.
 * @param var_ instance of #GVariant
 */
function errorNewFromVariant(var_: GLib.Variant): GLib.Error | null
/**
 * Creates and returns a domain for GSignond errors.
 */
function errorQuark(): GLib.Quark
/**
 * Converts the GError to GVariant.
 * @param error instance of #GError
 */
function errorToVariant(error: GLib.Error): GLib.Variant | null
/**
 * This function generates a random secure nonce using SHA1 HMAC.
 */
function generateNonce(): string
/**
 * Checks if `host` belongs to `domain`.
 * @param host a host name
 * @param domain a domain name
 */
function isHostInDomain(host: string, domain: string): boolean
/**
 * Create a #GIOStream from two file descriptors
 * @param inFd a UNIX file descriptor
 * @param outFd a UNIX file descriptor
 * @param closeFds %TRUE to close the file descriptor when done
 */
function newIoStreamFromFd(inFd: number, outFd: number, closeFds: boolean): Gio.IOStream
/**
 * Builds a #GSignondSecurityContext item from a GVariant of type "(ss)".
 * @param variant GVariant item with a #GSignondSecurityContext construct.
 */
function securityContextFromVariant(variant: GLib.Variant): SecurityContext
/**
 * Convert sequence of strings to null-terminated string array.
 * @param seq Sequence of strings to convert
 */
function sequenceToArray(seq: GLib.Sequence): string[]
/**
 * This function securely wipes the contents of the directory by calling
 * gsignond_wipe_file() on each file. It also removes links and empty directories but
 * does not recursively wipe them.
 * @param dirname directory to wipe
 */
function wipeDirectory(dirname: string): boolean
/**
 * This function securely wipes the contents of the file, by overwriting it with
 * 0's, then 1's, then random data. The file is then removed.
 * @param filename filename to wipe
 */
function wipeFile(filename: string): boolean
interface Plugin_ConstructProps extends GObject.Object_ConstructProps {
}

/**
 * Signal callback interface for `error`
 */
interface Plugin_ErrorSignalCallback {
    (error: GLib.Error): void
}

/**
 * Signal callback interface for `refreshed`
 */
interface Plugin_RefreshedSignalCallback {
    (uiData: SignonuiData): void
}

/**
 * Signal callback interface for `response`
 */
interface Plugin_ResponseSignalCallback {
    (sessionData: SessionData): void
}

/**
 * Signal callback interface for `response-final`
 */
interface Plugin_ResponseFinalSignalCallback {
    (sessionData: SessionData): void
}

/**
 * Signal callback interface for `status-changed`
 */
interface Plugin_StatusChangedSignalCallback {
    (state: PluginState, message: string): void
}

/**
 * Signal callback interface for `store`
 */
interface Plugin_StoreSignalCallback {
    (data: Dictionary): void
}

/**
 * Signal callback interface for `user-action-required`
 */
interface Plugin_UserActionRequiredSignalCallback {
    (uiData: SignonuiData): void
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
    readonly type: string

    // Owm methods of GSignond-1.0.GSignond.Plugin

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
     * @param uiData UI refresh parameters
     */
    refresh(uiData: SignonuiData): void
    /**
     * Plugin implementations should use this to issue #GSignondPlugin::refreshed
     * signal. This method should not be used otherwise.
     * @param uiData UI data
     */
    refreshed(uiData: SignonuiData): void
    /**
     * This method provides the plugin with additional parameters for the session
     * after the plugin has asked for it via #GSignondPlugin::response signal.
     * @param sessionData additional parameters for the session
     */
    request(sessionData: SessionData): void
    /**
     * This method starts a new authentication session.
     * @param sessionData parameters for the session
     * @param identityMethodCache data from persistent storage, saved previously via #GSignondPlugin::store signal
     * @param mechanism mechanism to use for the authentication
     */
    requestInitial(sessionData: SessionData, identityMethodCache: Dictionary, mechanism: string): void
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
    statusChanged(state: PluginState, message: string): void
    /**
     * Plugin implementations should use this to issue #GSignondPlugin::store
     * signal. This method should not be used otherwise.
     * @param identityMethodCache data to store
     */
    store(identityMethodCache: Dictionary): void
    /**
     * This method provides the plugin with the results of UI interaction
     * after the plugin has asked for it via #GSignondPlugin::user-action-required signal.
     * @param uiData results of UI interaction
     */
    userActionFinished(uiData: SignonuiData): void
    /**
     * Plugin implementations should use this to issue #GSignondPlugin::user-action-required
     * signal. This method should not be used otherwise.
     * @param uiData UI data
     */
    userActionRequired(uiData: SignonuiData): void

    // Own signals of GSignond-1.0.GSignond.Plugin

    connect(sigName: "error", callback: Plugin_ErrorSignalCallback): number
    on(sigName: "error", callback: Plugin_ErrorSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "error", callback: Plugin_ErrorSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "error", callback: Plugin_ErrorSignalCallback): NodeJS.EventEmitter
    emit(sigName: "error", ...args: any[]): void
    connect(sigName: "refreshed", callback: Plugin_RefreshedSignalCallback): number
    on(sigName: "refreshed", callback: Plugin_RefreshedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "refreshed", callback: Plugin_RefreshedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "refreshed", callback: Plugin_RefreshedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "refreshed", ...args: any[]): void
    connect(sigName: "response", callback: Plugin_ResponseSignalCallback): number
    on(sigName: "response", callback: Plugin_ResponseSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "response", callback: Plugin_ResponseSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "response", callback: Plugin_ResponseSignalCallback): NodeJS.EventEmitter
    emit(sigName: "response", ...args: any[]): void
    connect(sigName: "response-final", callback: Plugin_ResponseFinalSignalCallback): number
    on(sigName: "response-final", callback: Plugin_ResponseFinalSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "response-final", callback: Plugin_ResponseFinalSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "response-final", callback: Plugin_ResponseFinalSignalCallback): NodeJS.EventEmitter
    emit(sigName: "response-final", ...args: any[]): void
    connect(sigName: "status-changed", callback: Plugin_StatusChangedSignalCallback): number
    on(sigName: "status-changed", callback: Plugin_StatusChangedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "status-changed", callback: Plugin_StatusChangedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "status-changed", callback: Plugin_StatusChangedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "status-changed", message: string, ...args: any[]): void
    connect(sigName: "store", callback: Plugin_StoreSignalCallback): number
    on(sigName: "store", callback: Plugin_StoreSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "store", callback: Plugin_StoreSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "store", callback: Plugin_StoreSignalCallback): NodeJS.EventEmitter
    emit(sigName: "store", ...args: any[]): void
    connect(sigName: "user-action-required", callback: Plugin_UserActionRequiredSignalCallback): number
    on(sigName: "user-action-required", callback: Plugin_UserActionRequiredSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "user-action-required", callback: Plugin_UserActionRequiredSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "user-action-required", callback: Plugin_UserActionRequiredSignalCallback): NodeJS.EventEmitter
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
    static $gtype: GObject.GType<Plugin>

    // Constructors of GSignond-1.0.GSignond.Plugin

    constructor(config?: Plugin_ConstructProps) 
    _init(config?: Plugin_ConstructProps): void
}

interface AccessControlManager_ConstructProps extends GObject.Object_ConstructProps {

    // Own constructor properties of GSignond-1.0.GSignond.AccessControlManager

    config?: Config | null
}

interface AccessControlManager {

    // Own fields of GSignond-1.0.GSignond.AccessControlManager

    parentInstance: GObject.Object
    config: Config
    priv: AccessControlManagerPrivate

    // Owm methods of GSignond-1.0.GSignond.AccessControlManager

    /**
     * Checks if the specified peer is allowed to set the specified access
     * control list. gsignond_access_control_manager_peer_is_owner_of_identity()
     * is used before calling this method to verify identity ownership.
     * 
     * The default implementation always returns %TRUE.
     * @param peerCtx security context of the peer connection.
     * @param identityAcl access control list for the identity.
     */
    aclIsValid(peerCtx: SecurityContext, identityAcl: SecurityContext[]): boolean
    /**
     * Checks if specified peer is allowed to access the specified identity.
     * 
     * The default implementation goes over items in `identity_acl,` using
     * gsignond_security_context_check() to check them against `peer_ctx`.
     * @param peerCtx security context of the peer connection.
     * @param ownerCtx security context of the identity owner.
     * @param identityAcl access control list for the identity in question. Includes the `owner_ctx` as well.
     */
    peerIsAllowedToUseIdentity(peerCtx: SecurityContext, ownerCtx: SecurityContext, identityAcl: SecurityContext[]): boolean
    /**
     * Checks if the peer specified in `peer_ctx` is the owner of the identity.
     * 
     * The default implementation is using gsignond_security_context_check()
     * to check `peer_ctx` against `owner_ctx` directly.
     * @param peerCtx security context of the peer connection.
     * @param ownerCtx security context of the identity owner.
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
     */
    securityContextOfKeychain(): SecurityContext
    /**
     * Retrieves and sets #GSignondSecurityContext of the specified peer.
     * 
     * The default implementation sets the app context as it was passed, and sets
     * the system context to the binary path of the process that is determined from
     * `peer_fd` and `peer_service` parameters.
     * @param peerCtx instance of security context to be set.
     * @param peerFd file descriptor of the peer connection if using peer-to-peer dbus, -1 otherwise.
     * @param peerService g_dbus_method_invocation_get_sender() of the peer connection, if not using peer-to-peer dbus, NULL otherwise
     * @param peerAppCtx application context of the peer connection.
     */
    securityContextOfPeer(peerCtx: SecurityContext, peerFd: number, peerService: string, peerAppCtx: string): void

    // Class property signals of GSignond-1.0.GSignond.AccessControlManager

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
    static $gtype: GObject.GType<AccessControlManager>

    // Constructors of GSignond-1.0.GSignond.AccessControlManager

    constructor(config?: AccessControlManager_ConstructProps) 
    _init(config?: AccessControlManager_ConstructProps): void
}

interface Config_ConstructProps extends GObject.Object_ConstructProps {
}

interface Config {

    // Owm methods of GSignond-1.0.GSignond.Config

    /**
     * Get an integer configuration value.
     * @param key the key name
     */
    getInteger(key: string): number
    /**
     * Get a string configuration value.
     * @param key the key name
     */
    getString(key: string): string | null
    /**
     * Sets the configuration value to the provided integer.
     * @param key the key name
     * @param value the value
     */
    setInteger(key: string, value: number): void
    /**
     * Sets the configuration value to the provided string.
     * @param key the key name
     * @param value the value
     */
    setString(key: string, value: string): void

    // Class property signals of GSignond-1.0.GSignond.Config

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
    static $gtype: GObject.GType<Config>

    // Constructors of GSignond-1.0.GSignond.Config

    constructor(config?: Config_ConstructProps) 
    /**
     * Create a #GSignondConfig object.
     * @constructor 
     */
    constructor() 
    /**
     * Create a #GSignondConfig object.
     * @constructor 
     */
    static new(): Config
    _init(config?: Config_ConstructProps): void
}

interface Credentials_ConstructProps extends GObject.Object_ConstructProps {
}

interface Credentials {

    // Own fields of GSignond-1.0.GSignond.Credentials

    parentInstance: GObject.Object

    // Owm methods of GSignond-1.0.GSignond.Credentials

    /**
     * Compares elements of two GSignondCredentials object for equality.
     * @param two the second credential to be compared.
     */
    equal(two: Credentials): boolean
    /**
     * Gets the identity id
     */
    getId(): number
    /**
     * Gets the password from the #GSignondCredentials object
     */
    getPassword(): string | null
    /**
     * Gets the username of the #GSignondCredentials object
     */
    getUsername(): string | null
    /**
     * Sets the data of the #GSignondCredentials.
     * @param id the identity id associated with the credentials.
     * @param username the username.
     * @param password the password.
     */
    setData(id: number, username?: string, password?: string): boolean

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
    setData(key: string, data?: object | null): void
    setData(...args: any[]): any
    setData(args_or_key: any[] | string, data?: object | null): boolean | void | any
    /**
     * Sets the identity id of the #GSignondCredentials object
     * @param id the id.
     */
    setId(id: number): boolean
    /**
     * Sets the password of the GSignondCredentials object
     * @param password the password.
     */
    setPassword(password: string | null): boolean
    /**
     * Sets the username of the GSignondCredentials object
     * @param username the username.
     */
    setUsername(username: string | null): boolean

    // Class property signals of GSignond-1.0.GSignond.Credentials

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
    static $gtype: GObject.GType<Credentials>

    // Constructors of GSignond-1.0.GSignond.Credentials

    constructor(config?: Credentials_ConstructProps) 
    /**
     * Creates a new empty #GSignondCredentials object
     * @constructor 
     */
    constructor() 
    /**
     * Creates a new empty #GSignondCredentials object
     * @constructor 
     */
    static new(): Credentials
    _init(config?: Credentials_ConstructProps): void
}

interface Dictionary_ConstructProps extends GObject.Object_ConstructProps {
}

interface Dictionary {

    // Own fields of GSignond-1.0.GSignond.Dictionary

    parentInstance: GObject.Object

    // Owm methods of GSignond-1.0.GSignond.Dictionary

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
    getBoolean(key: string): [ /* returnType */ boolean, /* value */ boolean ]
    /**
     * Retrieves a int32 value.
     * @param key key to look up
     */
    getInt32(key: string): [ /* returnType */ boolean, /* value */ number ]
    /**
     * Retrieves a int64 value.
     * @param key key to look up
     */
    getInt64(key: string): [ /* returnType */ boolean, /* value */ number ]
    /**
     * Retrieves a string value.
     * @param key key to look up
     */
    getString(key: string): string | null
    /**
     * Get the #GHashTable associated to the #GSignondDictionary.
     * 
     * It should not be modified.
     */
    getTable(): GLib.HashTable
    /**
     * Retrieves a uint32 value.
     * @param key key to look up
     */
    getUint32(key: string): [ /* returnType */ boolean, /* value */ number ]
    /**
     * Retrieves a uint64 value.
     * @param key key to look up
     */
    getUint64(key: string): [ /* returnType */ boolean, /* value */ number ]
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
    setBoolean(key: string, value: boolean): boolean
    /**
     * Sets or replaces a int32 value in the dictionary.
     * @param key key to set
     * @param value value to set
     */
    setInt32(key: string, value: number): boolean
    /**
     * Sets or replaces a int64 value in the dictionary.
     * @param key key to set
     * @param value value to set
     */
    setInt64(key: string, value: number): boolean
    /**
     * Sets or replaces a string value in the dictionary.
     * @param key key to set
     * @param value value to set
     */
    setString(key: string, value: string): boolean
    /**
     * Sets or replaces a uint32 value in the dictionary.
     * @param key key to set
     * @param value value to set
     */
    setUint32(key: string, value: number): boolean
    /**
     * Sets or replaces a uint64 value in the dictionary.
     * @param key key to set
     * @param value value to set
     */
    setUint64(key: string, value: number): boolean
    /**
     * Converts the #GSignondDictionary to a #GVariant. The result can be serialized
     * or put into another #GSignondDictionary using gsignond_dictionary_set().
     */
    toVariant(): GLib.Variant | null
    /**
     * Converts the #GSignondDictionary to a #GVariantBuilder of type
     * G_VARIANT_TYPE_VARDICT.
     * 
     * Caller should use g_variant_builder_unref() on the return value when it is
     * no longer needed.
     */
    toVariantBuilder(): GLib.VariantBuilder | null

    // Class property signals of GSignond-1.0.GSignond.Dictionary

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
    static $gtype: GObject.GType<Dictionary>

    // Constructors of GSignond-1.0.GSignond.Dictionary

    constructor(config?: Dictionary_ConstructProps) 
    /**
     * Creates a new instance of #GSignondDictionary.
     * @constructor 
     */
    constructor() 
    /**
     * Creates a new instance of #GSignondDictionary.
     * @constructor 
     */
    static new(): Dictionary
    /**
     * Converts the #GVariant to #GSignondDictionary. This is useful for example if
     * the dictionary needs to be deserialized, or if it's contained in another
     * #GSignondDictionary and has been retrieved using gsignond_dictionary_get().
     * @constructor 
     * @param variant instance of #GVariant
     */
    static newFromVariant(variant: GLib.Variant): Dictionary
    _init(config?: Dictionary_ConstructProps): void
}

interface Extension_ConstructProps extends GObject.Object_ConstructProps {
}

interface Extension {

    // Own fields of GSignond-1.0.GSignond.Extension

    parentInstance: GObject.Object

    // Owm methods of GSignond-1.0.GSignond.Extension

    /**
     * Factory method to get a singleton access control manager object. See
     * #GSignondAccessControlManager for the description of the default implementation.
     * @param config configuration object instance.
     */
    getAccessControlManager(config: Config): AccessControlManager
    /**
     * Get a human readable name of the extension. Default implementation
     * returns "default".
     */
    getName(): string
    /**
     * Factory method to get a singleton secret storage object. See
     * #GSignondSecretStorage for the description of the default implementation.
     * @param config configuration object instance.
     */
    getSecretStorage(config: Config): SecretStorage
    /**
     * Factory method to get a singleton storage manager object. See
     * #GSignondStorageManager for the description of the default implementation.
     * @param config configuration object instance.
     */
    getStorageManager(config: Config): StorageManager
    /**
     * Get version of the extension, split into four bytes in order from MSB to LSB;
     * major, minor, patchlevel, build. Default implementation returns 0.
     */
    getVersion(): number

    // Class property signals of GSignond-1.0.GSignond.Extension

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
    static $gtype: GObject.GType<Extension>

    // Constructors of GSignond-1.0.GSignond.Extension

    constructor(config?: Extension_ConstructProps) 
    _init(config?: Extension_ConstructProps): void
}

interface SecretStorage_ConstructProps extends GObject.Object_ConstructProps {

    // Own constructor properties of GSignond-1.0.GSignond.SecretStorage

    config?: Config | null
}

interface SecretStorage {

    // Own properties of GSignond-1.0.GSignond.SecretStorage

    readonly config: Config

    // Own fields of GSignond-1.0.GSignond.SecretStorage

    parentInstance: GObject.Object

    // Owm methods of GSignond-1.0.GSignond.SecretStorage

    /**
     * Checks whether the given credentials match what is stored in the database.
     * @param creds the credentials that are being checked.
     */
    checkCredentials(creds: Credentials): boolean
    /**
     * Removes all stored secrets from the database.
     */
    clearDb(): boolean
    /**
     * Closes the database. To reopen it, call gsignond_secret_storage_open_db().
     */
    closeDb(): boolean
    /**
     * Retrieves the last occurred error that has occurred
     */
    getLastError(): GLib.Error
    /**
     * Checks if the database is open or not.
     */
    isOpenDb(): boolean
    /**
     * Loads the credentials from the database.
     * @param id the identity id whose credentials are being loaded.
     */
    loadCredentials(id: number): Credentials | null
    /**
     * Loads the secret data associated with a given identity and method.
     * @param id the identity id whose data are fetched
     * @param method the authentication method the data is used for.
     */
    loadData(id: number, method: number): Dictionary
    /**
     * Opens (and initializes) the database. The implementation should take
     * care of creating the DB, if it doesn't exist, and it should use
     * #GSIGNOND_CONFIG_GENERAL_SECURE_DIR
     * to determine database location in the filesystem.
     * 
     * The default implementation is using SQLite for the storage.
     */
    openDb(): boolean
    /**
     * Remove the credentials for the given identity.
     * @param id the identity whose credentials are being updated.
     */
    removeCredentials(id: number): boolean
    /**
     * Removes secret data associated with a given id/method.
     * @param id the identity whose data are fetched.
     * @param method the authentication method the data is used for.
     */
    removeData(id: number, method: number): boolean
    /**
     * Stores/updates the credentials for the given identity.
     * @param creds the credentials that are being updated.
     */
    updateCredentials(creds: Credentials): boolean
    /**
     * Calling this method updates the secret data
     * associated with the given id/method.
     * @param id the identity whose data are fetched.
     * @param method the authentication method the data is used for.
     * @param data the data to update
     */
    updateData(id: number, method: number, data: Dictionary): boolean

    // Class property signals of GSignond-1.0.GSignond.SecretStorage

    connect(sigName: "notify::config", callback: (...args: any[]) => void): number
    on(sigName: "notify::config", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::config", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::config", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::config", ...args: any[]): void
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
    static $gtype: GObject.GType<SecretStorage>

    // Constructors of GSignond-1.0.GSignond.SecretStorage

    constructor(config?: SecretStorage_ConstructProps) 
    _init(config?: SecretStorage_ConstructProps): void
}

interface SessionData_ConstructProps extends Dictionary_ConstructProps {
}

interface SessionData {

    // Own fields of GSignond-1.0.GSignond.SessionData

    parentInstance: Dictionary

    // Owm methods of GSignond-1.0.GSignond.SessionData

    /**
     * Creates a copy of the dictionary session data.
     */
    copy(): SessionData

    // Overloads of copy

    /**
     * Creates a copy of the dictionary.
     */
    copy(): Dictionary
    copy(...args: any[]): any
    copy(...args: any[]): SessionData | Dictionary | any
    /**
     * A getter for a caption associated with the authentication session.
     * Caption tells the user which application/credentials/provider is requestion
     * authentication.
     */
    getCaption(): string
    /**
     * A getter for a network proxy setting associated with the authentication session.
     * If this property is not set, the default system proxy settings should be used.
     */
    getNetworkProxy(): string
    /**
     * A getter for a network timeout setting associated with the authentication session.
     * This can be used to change the default timeout in case of unresponsive servers.
     */
    getNetworkTimeout(): [ /* returnType */ boolean, /* networkTimeout */ number ]
    /**
     * A getter for a realm associated with the authentication session.
     */
    getRealm(): string
    /**
     * A getter for a renew token property associated with the authentication session.
     * This property tells the plugin to discard any cached tokens and start
     * the authentication process anew.
     */
    getRenewToken(): [ /* returnType */ boolean, /* renewToken */ boolean ]
    /**
     * A getter for a secret (e.g. a password) associated with the authentication session.
     */
    getSecret(): string
    /**
     * A getter for UI policy setting associated with the authentication session.
     * The UI policy indicates how the authentication plugin should interact with the user.
     */
    getUiPolicy(): [ /* returnType */ boolean, /* uiPolicy */ UiPolicy ]
    /**
     * A getter for a username associated with the authentication session.
     */
    getUsername(): string
    /**
     * A getter for a window id setting associated with the authentication session.
     * This can be used to embed the user interaction window produced by the authentication
     * session into an application window.
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
    setCaption(caption: string): void
    /**
     * A setter for a network proxy setting associated with the authentication session.
     * If this property is not set, the default system proxy settings should be used.
     * @param networkProxy network proxy to use
     */
    setNetworkProxy(networkProxy: string): void
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
    setRealm(realm: string): void
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
    setSecret(secret: string): void
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
    setUsername(username: string): void
    /**
     * A setter for a window id setting associated with the authentication session.
     * This can be used to embed the user interaction window produced by the authentication
     * session into an application window.
     * @param windowId window id to use
     */
    setWindowId(windowId: number): void

    // Class property signals of GSignond-1.0.GSignond.SessionData

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
    static $gtype: GObject.GType<SessionData>

    // Constructors of GSignond-1.0.GSignond.SessionData

    constructor(config?: SessionData_ConstructProps) 
    /**
     * Creates a new instance of #GSignondSessionData.
     * @constructor 
     */
    constructor() 
    /**
     * Creates a new instance of #GSignondSessionData.
     * @constructor 
     */
    static new(): SessionData

    // Overloads of new

    /**
     * Creates a new instance of #GSignondDictionary.
     * @constructor 
     */
    static new(): Dictionary
    /**
     * Converts the #GVariant to #GSignondSessionData. This is useful for example if
     * the dictionary needs to be deserialized, or if it's contained in another
     * #GSignondSessionData and has been retrieved using gsignond_dictionary_get().
     * @constructor 
     * @param variant instance of #GVariant
     */
    static newFromVariant(variant: GLib.Variant): SessionData

    // Overloads of newFromVariant

    /**
     * Converts the #GVariant to #GSignondDictionary. This is useful for example if
     * the dictionary needs to be deserialized, or if it's contained in another
     * #GSignondDictionary and has been retrieved using gsignond_dictionary_get().
     * @constructor 
     * @param variant instance of #GVariant
     */
    static newFromVariant(variant: GLib.Variant): Dictionary
    _init(config?: SessionData_ConstructProps): void
}

interface SignonuiData_ConstructProps extends Dictionary_ConstructProps {
}

interface SignonuiData {

    // Own fields of GSignond-1.0.GSignond.SignonuiData

    parentInstance: Dictionary

    // Owm methods of GSignond-1.0.GSignond.SignonuiData

    /**
     * Creates a copy of the dictionary session data.
     */
    copy(): SignonuiData

    // Overloads of copy

    /**
     * Creates a copy of the dictionary.
     */
    copy(): Dictionary
    copy(...args: any[]): any
    copy(...args: any[]): SignonuiData | Dictionary | any
    /**
     * A getter for the user's response to a captcha query.
     */
    getCaptchaResponse(): string | null
    /**
     * A getter for the captcha URL.
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
     */
    getQueryError(): [ /* returnType */ boolean, /* error */ SignonuiError ]
    /**
     * A getter for the query password property. It indicates whether the signon UI
     * should ask the user for a password (and return it in the password property).
     */
    getQueryPassword(): [ /* returnType */ boolean, /* queryPassword */ boolean ]
    /**
     * A getter for the query username property. It indicates whether the signon UI
     * should ask the user for a username (and return it in the username property).
     */
    getQueryUsername(): [ /* returnType */ boolean, /* queryUsername */ boolean ]
    /**
     * A getter for whether the password should be remembered.
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
    setCaptchaResponse(response: string): void
    /**
     * A setter for the captcha URL.
     * @param url the URL to the captcha image to be verified by user
     */
    setCaptchaUrl(url: string): void
    /**
     * A setter for the caption string. Caption tells the user which
     * application/credentials/provider is requestion authentication.
     * @param caption the caption string
     */
    setCaption(caption: string): void
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
    setFinalUrl(url: string): void
    /**
     * A setter for the forgot password string, which is shown to the user as a link to
     * reset the password or remind him of the password.
     * @param forgot the forgot password string
     */
    setForgotPassword(forgot: string): void
    /**
     * A setter for the forgot password URL, where the user can reset or request a
     * reminder of the password.
     * @param url the forgot password URL
     */
    setForgotPasswordUrl(url: string): void
    /**
     * A setter for the message which is show to the user in the signon UI dialog.
     * @param message the message
     */
    setMessage(message: string): void
    /**
     * A setter for the URL that should be opened by signon UI.
     * @param url the url to open
     */
    setOpenUrl(url: string): void
    /**
     * A setter for the password string.
     * @param password the password string
     */
    setPassword(password: string): void
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
    setRequestId(id: string): void
    /**
     * A setter for the test reply values. It's used only by the signon ui
     * implementations to test themselves.
     * @param reply test reply values
     */
    setTestReply(reply: string): void
    /**
     * A setter for the UI dialog title.
     * @param title the title
     */
    setTitle(title: string): void
    /**
     * A getter for the response URL. If the final URL was set in the request to the
     * signon UI, and the signon UI
     * detects that it has been reached, then the full final URL is returned using
     * this property. This is used by redirection-based authentication such as OAauth.
     * @param response the response URL
     */
    setUrlResponse(response: string): void
    /**
     * A setter for the username string.
     * @param username the username string
     */
    setUsername(username: string): void

    // Class property signals of GSignond-1.0.GSignond.SignonuiData

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
    static $gtype: GObject.GType<SignonuiData>

    // Constructors of GSignond-1.0.GSignond.SignonuiData

    constructor(config?: SignonuiData_ConstructProps) 
    /**
     * Creates a new instance of #GSignondSignonuiData.
     * @constructor 
     */
    constructor() 
    /**
     * Creates a new instance of #GSignondSignonuiData.
     * @constructor 
     */
    static new(): SignonuiData

    // Overloads of new

    /**
     * Creates a new instance of #GSignondDictionary.
     * @constructor 
     */
    static new(): Dictionary
    /**
     * Converts the #GVariant to #GSignondSignonuiData. This is useful for example if
     * the dictionary needs to be deserialized, or if it's contained in another
     * #GSignondSignonuiData and has been retrieved using gsignond_dictionary_get().
     * @constructor 
     * @param variant instance of #GVariant
     */
    static newFromVariant(variant: GLib.Variant): SignonuiData

    // Overloads of newFromVariant

    /**
     * Converts the #GVariant to #GSignondDictionary. This is useful for example if
     * the dictionary needs to be deserialized, or if it's contained in another
     * #GSignondDictionary and has been retrieved using gsignond_dictionary_get().
     * @constructor 
     * @param variant instance of #GVariant
     */
    static newFromVariant(variant: GLib.Variant): Dictionary
    _init(config?: SignonuiData_ConstructProps): void
}

interface StorageManager_ConstructProps extends GObject.Object_ConstructProps {

    // Own constructor properties of GSignond-1.0.GSignond.StorageManager

    config?: Config | null
}

interface StorageManager {

    // Own fields of GSignond-1.0.GSignond.StorageManager

    parentInstance: GObject.Object
    config: Config
    location: string
    priv: StorageManagerPrivate

    // Owm methods of GSignond-1.0.GSignond.StorageManager

    /**
     * Destroys all the encryption keys and wipes the storage. gsignond_wipe_directory()
     * is typically used for the latter.
     */
    deleteStorage(): boolean
    /**
     * Checks if the encrypted storage filesystem is currently mounted.
     */
    filesystemIsMounted(): boolean
    /**
     * Initialize encryption storage. This means making sure that the
     * necessary directories under #GSIGNOND_CONFIG_GENERAL_STORAGE_PATH exist and are accessible.
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
     */
    mountFilesystem(): string
    /**
     * Checks if the storage has been initialized.
     */
    storageIsInitialized(): boolean
    /**
     * Unmounts a previously mounted encrypted storage filesystem.
     */
    unmountFilesystem(): boolean

    // Class property signals of GSignond-1.0.GSignond.StorageManager

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
    static $gtype: GObject.GType<StorageManager>

    // Constructors of GSignond-1.0.GSignond.StorageManager

    constructor(config?: StorageManager_ConstructProps) 
    _init(config?: StorageManager_ConstructProps): void
}

interface AccessControlManagerClass {

    // Own fields of GSignond-1.0.GSignond.AccessControlManagerClass

    /**
     * parent class.
     * @field 
     */
    parentClass: GObject.ObjectClass
    securityContextOfPeer: (self: AccessControlManager, peerCtx: SecurityContext, peerFd: number, peerService: string, peerAppCtx: string) => void
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
    getExtensionName: (self: Extension) => string
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
    requestInitial: (self: Plugin, sessionData: SessionData, identityMethodCache: Dictionary, mechanism: string) => void
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

    sysCtx: string
    appCtx: string

    // Owm methods of GSignond-1.0.GSignond.SecurityContext

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
    getApplicationContext(): string
    /**
     * Get the system context partof the
     * #GSignondSecurityContext.
     */
    getSystemContext(): string
    /**
     * Compare two #GSignondSecurityContext items match.
     * @param ctx2 second item to compare.
     */
    match(ctx2: SecurityContext): boolean
    /**
     * Sets the application context part of
     * the #GSignondSecurityContext.
     * @param applicationContext application security context.
     */
    setApplicationContext(applicationContext: string): void
    /**
     * Sets the system context part of the
     * #GSignondSecurityContext.
     * @param systemContext system security context.
     */
    setSystemContext(systemContext: string): void
    /**
     * Build a GVariant of type "(ss)" from a #GSignondSecurityContext item.
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
     */
    constructor() 
    /**
     * Allocates a new security context item. System and app context are empty strings.
     * @constructor 
     */
    static new(): SecurityContext
    /**
     * Allocates and initializes a new security context item.
     * @constructor 
     * @param systemContext system security context
     * @param applicationContext application security context
     */
    static newFromValues(systemContext: string, applicationContext: string): SecurityContext
    /**
     * Builds a #GSignondSecurityContext item from a GVariant of type "(ss)".
     * @param variant GVariant item with a #GSignondSecurityContext construct.
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
    mountFilesystem: (self: StorageManager) => string
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