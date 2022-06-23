// @ts-nocheck

/*
 * Type Definitions for node-gtk (https://github.com/romgrk/node-gtk)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/sammydre/ts-for-gjs
 */
/**
 * Signon-2.0
 */

import type Gio from './Gio-2.0';
import type GObject from './GObject-2.0';
import type GLib from './GLib-2.0';

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
function errorQuark(): GLib.Quark
interface AuthService_ConstructProps extends GObject.Object_ConstructProps {
}

interface AuthService {

    // Owm methods of Signon-2.0.Signon.AuthService

    /**
     * Lists all the available mechanisms.
     * @param method the name of the method whose mechanisms must be retrieved.
     * @param cancellable a #GCancellable or %NULL
     * @param callback a callback to execute upon completion
     */
    getMechanisms(method: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Completes an asynchronous request to signon_auth_service_get_mechanisms().
     * @param result a #GAsyncResult
     */
    getMechanismsFinish(result: Gio.AsyncResult): string[]
    /**
     * Lists all the available mechanisms.
     * This is a blocking version of signon_auth_service_get_mechanisms().
     * @param method the name of the method whose mechanisms must be retrieved.
     * @param cancellable a #GCancellable or %NULL
     */
    getMechanismsSync(method: string, cancellable: Gio.Cancellable | null): string[]
    /**
     * Lists all the available methods.
     * @param cancellable a #GCancellable or %NULL
     * @param callback a callback to execute upon completion
     */
    getMethods(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Completes an asynchronous request to signon_auth_service_get_methods().
     * @param result a #GAsyncResult
     */
    getMethodsFinish(result: Gio.AsyncResult): string[]
    /**
     * Lists all the available methods.
     * This is a blocking version of signon_auth_service_get_methods().
     * @param cancellable a #GCancellable or %NULL
     */
    getMethodsSync(cancellable: Gio.Cancellable | null): string[]

    // Class property signals of Signon-2.0.Signon.AuthService

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
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

    constructor(config?: AuthService_ConstructProps) 
    /**
     * Create a new #SignonAuthService.
     * @constructor 
     */
    constructor() 
    /**
     * Create a new #SignonAuthService.
     * @constructor 
     */
    static new(): AuthService
    _init(config?: AuthService_ConstructProps): void
}

interface AuthSession_ConstructProps extends GObject.Object_ConstructProps {
}

/**
 * Signal callback interface for `state-changed`
 */
interface AuthSession_StateChangedSignalCallback {
    (state: number, message: string): void
}

interface AuthSession {

    // Owm methods of Signon-2.0.Signon.AuthSession

    /**
     * Cancel the authentication session.
     */
    cancel(): void
    /**
     * Get the current authentication method.
     */
    getMethod(): string
    /**
     * Performs one step of the authentication process. If the #SignonAuthSession
     * object is bound to an existing identity, the identity properties such as
     * username and password will be also passed to the authentication plugin, so
     * there's no need to fill them into `session_data`.
     * `session_data` can be used to add additional authentication parameters to the
     * session, or to override the parameters otherwise taken from the identity.
     * @param sessionData a dictionary of parameters.
     * @param mechanism the authentication mechanism to be used.
     * @param cancellable optional #GCancellable object, %NULL to ignore.
     * @param callback a callback which will be called when the authentication reply is available.
     */
    process(sessionData: GLib.Variant, mechanism: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Collect the result of the signon_auth_session_process() operation.
     * @param res A #GAsyncResult obtained from the #GAsyncReadyCallback passed to signon_auth_session_process().
     */
    processFinish(res: Gio.AsyncResult): GLib.Variant

    // Own signals of Signon-2.0.Signon.AuthSession

    connect(sigName: "state-changed", callback: AuthSession_StateChangedSignalCallback): number
    on(sigName: "state-changed", callback: AuthSession_StateChangedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "state-changed", callback: AuthSession_StateChangedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "state-changed", callback: AuthSession_StateChangedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "state-changed", message: string, ...args: any[]): void

    // Class property signals of Signon-2.0.Signon.AuthSession

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
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

    constructor(config?: AuthSession_ConstructProps) 
    /**
     * Creates a new #SignonAuthSession, which can be used to authenticate using
     * the specified method.
     * @constructor 
     * @param id the id of the #SignonIdentity to be used. Can be 0, if this session is not bound to any stored identity.
     * @param methodName the name of the authentication method to be used.
     */
    constructor(id: number, methodName: string) 
    /**
     * Creates a new #SignonAuthSession, which can be used to authenticate using
     * the specified method.
     * @constructor 
     * @param id the id of the #SignonIdentity to be used. Can be 0, if this session is not bound to any stored identity.
     * @param methodName the name of the authentication method to be used.
     */
    static new(id: number, methodName: string): AuthSession
    _init(config?: AuthSession_ConstructProps): void
}

interface Identity_ConstructProps extends GObject.Object_ConstructProps {

    // Own constructor properties of Signon-2.0.Signon.Identity

    id?: number | null
}

/**
 * Signal callback interface for `signed-out`
 */
interface Identity_SignedOutSignalCallback {
    (): void
}

interface Identity {

    // Own properties of Signon-2.0.Signon.Identity

    readonly id: number

    // Owm methods of Signon-2.0.Signon.Identity

    /**
     * Creates an authentication session for this identity.
     * @param method method.
     */
    createSession(method: string): AuthSession
    /**
     * Get the id of the `identity`.
     */
    getId(): number
    /**
     * Get the most recent error that occurred on `identity`.
     */
    getLastError(): GLib.Error
    /**
     * Fetches the #SignonIdentityInfo associated with this identity.
     * @param cancellable optional #GCancellable object, %NULL to ignore.
     * @param callback a callback which will be called when the #SignonIdentityInfo is available.
     */
    queryInfo(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Collect the result of the signon_identity_query_info() operation.
     * @param res A #GAsyncResult obtained from the #GAsyncReadyCallback passed to signon_identity_query_info().
     */
    queryInfoFinish(res: Gio.AsyncResult): IdentityInfo
    /**
     * Removes the corresponding credentials record from the database.
     * @param cancellable optional #GCancellable object, %NULL to ignore.
     * @param callback a callback which will be called when the operation has completed.
     */
    remove(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    removeFinish(res: Gio.AsyncResult): boolean
    /**
     * Asks signond to close all authentication sessions for this
     * identity, and to remove any stored secrets associated with it (password and
     * authentication tokens).
     * @param cancellable optional #GCancellable object, %NULL to ignore.
     * @param callback a callback which will be called when the operation has completed.
     */
    signOut(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    signOutFinish(res: Gio.AsyncResult): boolean
    /**
     * Stores the data from `info` into the identity.
     * @param info the #SignonIdentityInfo data to store.
     * @param cancellable optional #GCancellable object, %NULL to ignore.
     * @param callback a callback which will be called when the authentication reply is available.
     */
    storeInfo(info: IdentityInfo, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Collect the result of the signon_identity_store_info() operation.
     * @param res A #GAsyncResult obtained from the #GAsyncReadyCallback passed to signon_identity_store_info().
     */
    storeInfoFinish(res: Gio.AsyncResult): boolean
    /**
     * Verifies the given secret.
     * @param secret the secret (password) to be verified.
     * @param cancellable optional #GCancellable object, %NULL to ignore.
     * @param callback a callback which will be called when the verification is done.
     */
    verifySecret(secret: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Collect the result of the signon_identity_verify_secret() operation.
     * @param res A #GAsyncResult obtained from the #GAsyncReadyCallback passed to signon_identity_verify_secret().
     */
    verifySecretFinish(res: Gio.AsyncResult): boolean

    // Own signals of Signon-2.0.Signon.Identity

    connect(sigName: "signed-out", callback: Identity_SignedOutSignalCallback): number
    on(sigName: "signed-out", callback: Identity_SignedOutSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "signed-out", callback: Identity_SignedOutSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "signed-out", callback: Identity_SignedOutSignalCallback): NodeJS.EventEmitter
    emit(sigName: "signed-out", ...args: any[]): void

    // Class property signals of Signon-2.0.Signon.Identity

    connect(sigName: "notify::id", callback: (...args: any[]) => void): number
    on(sigName: "notify::id", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::id", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::id", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
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

    constructor(config?: Identity_ConstructProps) 
    /**
     * Construct new, empty, identity object.
     * @constructor 
     */
    constructor() 
    /**
     * Construct new, empty, identity object.
     * @constructor 
     */
    static new(): Identity
    /**
     * Construct an identity object associated with an existing identity
     * record.
     * @constructor 
     * @param id identity ID.
     */
    static newFromDb(id: number): Identity
    _init(config?: Identity_ConstructProps): void
}

interface AuthServiceClass {

    // Own fields of Signon-2.0.Signon.AuthServiceClass

    parentClass: GObject.ObjectClass
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

    parentClass: GObject.ObjectClass
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

    parentClass: GObject.ObjectClass
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
     * @param systemContext the system context to add.
     * @param applicationContext the application context to add.
     */
    addAccessControl(systemContext: string, applicationContext: string): void
    /**
     * Get a newly-allocated copy of `info`.
     */
    copy(): IdentityInfo
    /**
     * Destroys the given #SignonIdentityInfo item.
     */
    free(): void
    /**
     * Get an array of ACL statements of the identity.
     */
    getAccessControlList(): SecurityContext[]
    /**
     * Get the display name of `info`.
     */
    getCaption(): string
    /**
     * Get the numeric ID of `info`.
     */
    getId(): number
    /**
     * Get the type of the identity.
     */
    getIdentityType(): IdentityType
    /**
     * Get a hash table of the methods and mechanisms of `info`.
     */
    getMethods(): GLib.HashTable
    /**
     * Get an array of the realms of `info`.
     */
    getRealms(): string[]
    /**
     * Get whether the secret of `info` should be stored.
     */
    getStoringSecret(): boolean
    /**
     * Get the username of `info`.
     */
    getUsername(): string
    /**
     * Remove `method` from the list of allowed authentication methods. If all
     * methods are removed, then all methods are allowed.
     * @param method an authentication method.
     */
    removeMethod(method: string): void
    /**
     * Specifies the ACL for this identity. The actual meaning of the ACL depends
     * on the security framework used by signond.
     * @param accessControlList a #GList of #SignonSecurityContext representing ACL security domains.
     */
    setAccessControlList(accessControlList: SecurityContext[]): void
    /**
     * Sets the caption (display name) for the identity.
     * @param caption the caption.
     */
    setCaption(caption: string): void
    /**
     * Specifies the type of this identity.
     * @param type the type of the identity.
     */
    setIdentityType(type: IdentityType): void
    /**
     * Adds a method to the list of allowed methods. If this method is not called
     * even once, then all methods are allowed.
     * Mechanisms are method-specific variants of authentication.
     * @param method an authentication method.
     * @param mechanisms a %NULL-termianted list of mechanisms.
     */
    setMethod(method: string, mechanisms: string[]): void
    /**
     * Specify what realms this identity can be used in.
     * @param realms a %NULL-terminated list of realms.
     */
    setRealms(realms: string[]): void
    /**
     * Sets the secret (password) for the identity, and whether the signon daemon
     * should remember it.
     * @param secret the secret.
     * @param storeSecret whether signond should store the secret in its DB.
     */
    setSecret(secret: string, storeSecret: boolean): void
    /**
     * Sets the username for the identity.
     * @param username the username.
     */
    setUsername(username: string): void
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
     */
    constructor() 
    /**
     * Creates a new #SignonIdentityInfo item.
     * @constructor 
     */
    static new(): IdentityInfo
}

interface SecurityContext {

    // Owm methods of Signon-2.0.Signon.SecurityContext

    /**
     * Get a newly-allocated copy of `info`.
     */
    copy(): SecurityContext
    /**
     * Destroys the given #SignonSecurityContext item.
     */
    free(): void
    /**
     * Get the application context of `ctx`.
     */
    getApplicationContext(): string
    /**
     * Get the system context of `ctx`.
     */
    getSystemContext(): string
    /**
     * Sets the application context.
     * @param applicationContext the application context.
     */
    setApplicationContext(applicationContext: string): void
    /**
     * Sets the system context.
     * @param systemContext the system context.
     */
    setSystemContext(systemContext: string): void
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
     */
    constructor() 
    /**
     * Creates a new #SignonSecurityContext item.
     * @constructor 
     */
    static new(): SecurityContext
    /**
     * Creates a new #SignonSecurityContext item.
     * @constructor 
     * @param systemContext system security context
     * @param applicationContext application security context
     */
    static newFromValues(systemContext: string, applicationContext: string): SecurityContext
}

}
export default Signon;