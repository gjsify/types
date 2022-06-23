// @ts-nocheck

/*
 * Type Definitions for node-gtk (https://github.com/romgrk/node-gtk)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/sammydre/ts-for-gjs
 */
/**
 * Epc-1.0
 */

import type GObject from './GObject-2.0';
import type GLib from './GLib-2.0';

export namespace Epc {

/**
 * The address family to use for contacting network services.
 */
enum AddressFamily {
    UNSPEC,
    IPV4,
    IPV6,
}
/**
 * Various strategies for handling service name collisions.
 */
enum CollisionHandling {
    IGNORE,
    CHANGE_NAME,
    UNIQUE_SERVICE,
}
/**
 * The transport protocols supported by libepc.
 */
enum Protocol {
    UNKNOWN,
    HTTP,
    HTTPS,
}
/**
 * These flags specify the authentication behaviour of an #EpcPublisher.
 * @bitfield 
 */
enum AuthFlags {
    DEFAULT,
    PASSWORD_TEXT_NEEDED,
}
const SERVICE_TYPE_HTTP: string
const SERVICE_TYPE_HTTPS: string
const TLS_SECONDS_PER_DAY: number
const TLS_SECONDS_PER_HOUR: number
const TLS_SECONDS_PER_MINUTE: number
function addressFamilyToString(value: AddressFamily): string
function authFlagsToString(value: AuthFlags): string
function avahiErrorQuark(): GLib.Quark
function collisionHandlingToString(value: CollisionHandling): string
function httpErrorQuark(): GLib.Quark
function protocolBuildUri(protocol: Protocol, hostname: string, port: number, path: string): string
function protocolFromName(name: string, fallback: Protocol): Protocol
function protocolGetServiceType(protocol: Protocol): string
function protocolGetUriScheme(protocol: Protocol): string
function protocolToString(value: Protocol): string
function serviceTypeGetBase(type: string): string
function serviceTypeGetProtocol(serviceType: string): Protocol
function serviceTypeNew(protocol: Protocol, application: string): string
function shellGetDebugLevel(): number
function shellGetHostName(): string
function shellProgressBegin(title: string, message: string): void
function shellProgressEnd(): void
function shellProgressUpdate(percentage: number, message: string): void
function shellRestartAvahiClient(strloc: string): void
function shellSetProgressHooks(hooks: ShellProgressHooks, userData: object, destroyData: GLib.DestroyNotify): void
function shellWatchRemove(id: number): void
function tlsErrorQuark(): GLib.Quark
function tlsGetCertificateFilename(hostname: string): string
function tlsGetPrivateKeyFilename(hostname: string): string
function tlsGetServerCredentials(hostname: string, crtfile: string, keyfile: string): boolean
/**
 * Functions implementing this callback shall return %TRUE when the
 * credentials provided by the authentication request grant access
 * to the resource described by `context`.
 * 
 * The `username` is %NULL when no creditials were passed, and anonymous access
 * is tried.
 * 
 * See also #epc_publisher_set_auth_flags. When EPC_AUTH_DEFAULT is used, 
 * you should call #epc_auth_context_check_password
 * to verify that the password passed in the request matches the known password
 * for that user. In this case there is no way to retrieve the password from 
 * the #EpcAuthContext because the network protocol transfers just a hash code, 
 * not the actual password.
 * 
 * However, when EPC_AUTH_PASSWORD_TEXT_NEEDED is used, you should call 
 * epc_auth_context_get_password() and then do your own authentication check. 
 * For instance, you might need to delegate the authentication to some other 
 * code or server, such as a database server.
 * @callback 
 * @param context the #EpcAuthContext
 * @param username the username provided for authentication, or %NULL
 */
interface AuthHandler {
    (context: AuthContext, username: string): boolean
}
/**
 * This callback is used to generate custom contents published with the
 * #epc_publisher_add_handler function. The arguments passed are the same as
 * passed to #epc_publisher_add_handler. The #EpcPublisher will decrease the
 * reference count of the returned buffer after deliving it. It's valid to
 * return %NULL in situations were no contents can be generated.
 * @callback 
 * @param publisher the #EpcPublisher
 * @param key the unique key
 */
interface ContentsHandler {
    (publisher: Publisher, key: string): Contents
}
/**
 * This callback is used to retrieve the next chunk of data for a streaming
 * contents buffer created with #epc_contents_stream_read.
 * 
 * Return %FALSE when the buffer has reached its end, and no more data is
 * available. Also return %FALSE, when the buffer size passed in `length` is
 * not sufficient. Copy your minimal buffer size to `length` in that situation.
 * 
 * The library might pass %NULL for `buffer` on the first call to start buffer
 * size negotation.
 * 
 * See also: #epc_contents_stream_new, #epc_contents_stream_read
 * @callback 
 * @param contents a #EpcContents buffer
 * @param buffer a location for storing the contents, or %NULL
 * @param length a location for passing and storing the contents length in bytes.
 */
interface ContentsReadFunc {
    (contents: Contents, buffer: object, length: number): boolean
}
interface Consumer_ConstructProps extends GObject.Object_ConstructProps {

    // Own constructor properties of Epc-1.0.Epc.Consumer

    application?: string | null
    domain?: string | null
    hostname?: string | null
    name?: string | null
    password?: string | null
    path?: string | null
    port?: number | null
    protocol?: Protocol | null
    username?: string | null
}

/**
 * Signal callback interface for `authenticate`
 */
interface Consumer_AuthenticateSignalCallback {
    (object: string): boolean
}

/**
 * Signal callback interface for `publisher-resolved`
 */
interface Consumer_PublisherResolvedSignalCallback {
    (object: Protocol, p0: string, p1: number): void
}

interface Consumer {

    // Own properties of Epc-1.0.Epc.Consumer

    readonly application: string
    readonly domain: string
    readonly hostname: string
    readonly name: string
    password: string
    readonly path: string
    readonly port: number
    protocol: Protocol
    username: string

    // Owm methods of Epc-1.0.Epc.Consumer

    getPassword(): string
    getProtocol(): Protocol
    getUsername(): string
    isPublisherResolved(): boolean
    resolvePublisher(timeout: number): boolean
    setPassword(password: string): void
    setProtocol(protocol: Protocol): void
    setUsername(username: string): void

    // Own signals of Epc-1.0.Epc.Consumer

    connect(sigName: "authenticate", callback: Consumer_AuthenticateSignalCallback): number
    on(sigName: "authenticate", callback: Consumer_AuthenticateSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "authenticate", callback: Consumer_AuthenticateSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "authenticate", callback: Consumer_AuthenticateSignalCallback): NodeJS.EventEmitter
    emit(sigName: "authenticate", ...args: any[]): void
    connect(sigName: "publisher-resolved", callback: Consumer_PublisherResolvedSignalCallback): number
    on(sigName: "publisher-resolved", callback: Consumer_PublisherResolvedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "publisher-resolved", callback: Consumer_PublisherResolvedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "publisher-resolved", callback: Consumer_PublisherResolvedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "publisher-resolved", p0: string, p1: number, ...args: any[]): void

    // Class property signals of Epc-1.0.Epc.Consumer

    connect(sigName: "notify::application", callback: (...args: any[]) => void): number
    on(sigName: "notify::application", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::application", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::application", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::application", ...args: any[]): void
    connect(sigName: "notify::domain", callback: (...args: any[]) => void): number
    on(sigName: "notify::domain", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::domain", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::domain", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::domain", ...args: any[]): void
    connect(sigName: "notify::hostname", callback: (...args: any[]) => void): number
    on(sigName: "notify::hostname", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::hostname", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::hostname", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::hostname", ...args: any[]): void
    connect(sigName: "notify::name", callback: (...args: any[]) => void): number
    on(sigName: "notify::name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::password", callback: (...args: any[]) => void): number
    on(sigName: "notify::password", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::password", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::password", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::password", ...args: any[]): void
    connect(sigName: "notify::path", callback: (...args: any[]) => void): number
    on(sigName: "notify::path", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::path", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::path", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::path", ...args: any[]): void
    connect(sigName: "notify::port", callback: (...args: any[]) => void): number
    on(sigName: "notify::port", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::port", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::port", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::port", ...args: any[]): void
    connect(sigName: "notify::protocol", callback: (...args: any[]) => void): number
    on(sigName: "notify::protocol", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::protocol", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::protocol", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::protocol", ...args: any[]): void
    connect(sigName: "notify::username", callback: (...args: any[]) => void): number
    on(sigName: "notify::username", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::username", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::username", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::username", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

/**
 * Public fields of the #EpcConsumer class.
 * @class 
 */
class Consumer extends GObject.Object {

    // Own properties of Epc-1.0.Epc.Consumer

    static name: string
    static $gtype: GObject.GType<Consumer>

    // Constructors of Epc-1.0.Epc.Consumer

    constructor(config?: Consumer_ConstructProps) 
    constructor(service: ServiceInfo) 
    static new(service: ServiceInfo): Consumer
    static newForName(name: string): Consumer
    static newForNameFull(name: string, application: string, domain: string): Consumer
    _init(config?: Consumer_ConstructProps): void
}

interface Dispatcher_ConstructProps extends GObject.Object_ConstructProps {

    // Own constructor properties of Epc-1.0.Epc.Dispatcher

    collisionHandling?: CollisionHandling | null
    cookie?: string | null
    name?: string | null
}

interface Dispatcher {

    // Own properties of Epc-1.0.Epc.Dispatcher

    collisionHandling: CollisionHandling
    cookie: string
    name: string

    // Owm methods of Epc-1.0.Epc.Dispatcher

    addServiceSubtype(type: string, subtype: string): void
    getCollisionHandling(): CollisionHandling
    getCookie(): string
    getName(): string
    reset(): void
    run(): boolean
    setCollisionHandling(method: CollisionHandling): void
    setCookie(cookie: string): void
    setName(name: string): void

    // Class property signals of Epc-1.0.Epc.Dispatcher

    connect(sigName: "notify::collision-handling", callback: (...args: any[]) => void): number
    on(sigName: "notify::collision-handling", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::collision-handling", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::collision-handling", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::collision-handling", ...args: any[]): void
    connect(sigName: "notify::cookie", callback: (...args: any[]) => void): number
    on(sigName: "notify::cookie", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::cookie", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::cookie", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::cookie", ...args: any[]): void
    connect(sigName: "notify::name", callback: (...args: any[]) => void): number
    on(sigName: "notify::name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

/**
 * Public fields of the #EpcDispatcher class.
 * @class 
 */
class Dispatcher extends GObject.Object {

    // Own properties of Epc-1.0.Epc.Dispatcher

    static name: string
    static $gtype: GObject.GType<Dispatcher>

    // Constructors of Epc-1.0.Epc.Dispatcher

    constructor(config?: Dispatcher_ConstructProps) 
    constructor(name: string) 
    static new(name: string): Dispatcher
    _init(config?: Dispatcher_ConstructProps): void
}

interface Publisher_ConstructProps extends GObject.Object_ConstructProps {

    // Own constructor properties of Epc-1.0.Epc.Publisher

    application?: string | null
    authFlags?: AuthFlags | null
    certificateFile?: string | null
    collisionHandling?: CollisionHandling | null
    contentsPath?: string | null
    privateKeyFile?: string | null
    protocol?: Protocol | null
    serviceCookie?: string | null
    serviceDomain?: string | null
    serviceName?: string | null
}

interface Publisher {

    // Own properties of Epc-1.0.Epc.Publisher

    application: string
    authFlags: AuthFlags
    certificateFile: string
    collisionHandling: CollisionHandling
    contentsPath: string
    privateKeyFile: string
    protocol: Protocol
    serviceCookie: string
    serviceDomain: string
    serviceName: string

    // Owm methods of Epc-1.0.Epc.Publisher

    add(key: string, data: object, length: number): void
    addBookmark(key: string, label: string): void
    addFile(key: string, filename: string): void
    addHandler(key: string, handler: ContentsHandler): void
    getAuthFlags(): AuthFlags
    getCertificateFile(): string
    getCollisionHandling(): CollisionHandling
    getContentsPath(): string
    getPath(key: string): string
    getPrivateKeyFile(): string
    getProtocol(): Protocol
    getServiceCookie(): string
    getServiceDomain(): string
    getServiceName(): string
    getUri(key: string): string
    hasKey(key: string): boolean
    quit(): boolean
    remove(key: string): boolean
    run(): boolean
    runAsync(): boolean
    setAuthFlags(flags: AuthFlags): void
    setAuthHandler(key: string, handler: AuthHandler): void
    setCollisionHandling(method: CollisionHandling): void
    setContentsPath(path: string): void
    setCredentials(certfile: string, keyfile: string): void
    setProtocol(protocol: Protocol): void
    setServiceCookie(cookie: string): void
    setServiceName(name: string): void

    // Class property signals of Epc-1.0.Epc.Publisher

    connect(sigName: "notify::application", callback: (...args: any[]) => void): number
    on(sigName: "notify::application", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::application", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::application", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::application", ...args: any[]): void
    connect(sigName: "notify::auth-flags", callback: (...args: any[]) => void): number
    on(sigName: "notify::auth-flags", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::auth-flags", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::auth-flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::auth-flags", ...args: any[]): void
    connect(sigName: "notify::certificate-file", callback: (...args: any[]) => void): number
    on(sigName: "notify::certificate-file", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::certificate-file", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::certificate-file", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::certificate-file", ...args: any[]): void
    connect(sigName: "notify::collision-handling", callback: (...args: any[]) => void): number
    on(sigName: "notify::collision-handling", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::collision-handling", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::collision-handling", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::collision-handling", ...args: any[]): void
    connect(sigName: "notify::contents-path", callback: (...args: any[]) => void): number
    on(sigName: "notify::contents-path", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::contents-path", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::contents-path", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::contents-path", ...args: any[]): void
    connect(sigName: "notify::private-key-file", callback: (...args: any[]) => void): number
    on(sigName: "notify::private-key-file", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::private-key-file", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::private-key-file", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::private-key-file", ...args: any[]): void
    connect(sigName: "notify::protocol", callback: (...args: any[]) => void): number
    on(sigName: "notify::protocol", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::protocol", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::protocol", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::protocol", ...args: any[]): void
    connect(sigName: "notify::service-cookie", callback: (...args: any[]) => void): number
    on(sigName: "notify::service-cookie", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::service-cookie", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::service-cookie", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::service-cookie", ...args: any[]): void
    connect(sigName: "notify::service-domain", callback: (...args: any[]) => void): number
    on(sigName: "notify::service-domain", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::service-domain", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::service-domain", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::service-domain", ...args: any[]): void
    connect(sigName: "notify::service-name", callback: (...args: any[]) => void): number
    on(sigName: "notify::service-name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::service-name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::service-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::service-name", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

/**
 * Public fields of the #EpcPublisher class.
 * @class 
 */
class Publisher extends GObject.Object {

    // Own properties of Epc-1.0.Epc.Publisher

    static name: string
    static $gtype: GObject.GType<Publisher>

    // Constructors of Epc-1.0.Epc.Publisher

    constructor(config?: Publisher_ConstructProps) 
    constructor(name: string, application: string, domain: string) 
    static new(name: string, application: string, domain: string): Publisher
    _init(config?: Publisher_ConstructProps): void
    static expandName(name: string): string
}

interface ServiceMonitor_ConstructProps extends GObject.Object_ConstructProps {

    // Own constructor properties of Epc-1.0.Epc.ServiceMonitor

    application?: string | null
    domain?: string | null
    serviceTypes?: string[] | null
    skipOurOwn?: boolean | null
}

/**
 * Signal callback interface for `scanning-done`
 */
interface ServiceMonitor_ScanningDoneSignalCallback {
    (object: string): void
}

/**
 * Signal callback interface for `service-found`
 */
interface ServiceMonitor_ServiceFoundSignalCallback {
    (object: string, p0: ServiceInfo): void
}

/**
 * Signal callback interface for `service-removed`
 */
interface ServiceMonitor_ServiceRemovedSignalCallback {
    (object: string, p0: string): void
}

interface ServiceMonitor {

    // Own properties of Epc-1.0.Epc.ServiceMonitor

    readonly application: string
    readonly domain: string
    readonly serviceTypes: string[]
    skipOurOwn: boolean

    // Owm methods of Epc-1.0.Epc.ServiceMonitor

    getSkipOurOwn(): boolean
    setSkipOurOwn(setting: boolean): void

    // Own signals of Epc-1.0.Epc.ServiceMonitor

    connect(sigName: "scanning-done", callback: ServiceMonitor_ScanningDoneSignalCallback): number
    on(sigName: "scanning-done", callback: ServiceMonitor_ScanningDoneSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "scanning-done", callback: ServiceMonitor_ScanningDoneSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "scanning-done", callback: ServiceMonitor_ScanningDoneSignalCallback): NodeJS.EventEmitter
    emit(sigName: "scanning-done", ...args: any[]): void
    connect(sigName: "service-found", callback: ServiceMonitor_ServiceFoundSignalCallback): number
    on(sigName: "service-found", callback: ServiceMonitor_ServiceFoundSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "service-found", callback: ServiceMonitor_ServiceFoundSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "service-found", callback: ServiceMonitor_ServiceFoundSignalCallback): NodeJS.EventEmitter
    emit(sigName: "service-found", p0: ServiceInfo, ...args: any[]): void
    connect(sigName: "service-removed", callback: ServiceMonitor_ServiceRemovedSignalCallback): number
    on(sigName: "service-removed", callback: ServiceMonitor_ServiceRemovedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "service-removed", callback: ServiceMonitor_ServiceRemovedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "service-removed", callback: ServiceMonitor_ServiceRemovedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "service-removed", p0: string, ...args: any[]): void

    // Class property signals of Epc-1.0.Epc.ServiceMonitor

    connect(sigName: "notify::application", callback: (...args: any[]) => void): number
    on(sigName: "notify::application", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::application", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::application", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::application", ...args: any[]): void
    connect(sigName: "notify::domain", callback: (...args: any[]) => void): number
    on(sigName: "notify::domain", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::domain", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::domain", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::domain", ...args: any[]): void
    connect(sigName: "notify::service-types", callback: (...args: any[]) => void): number
    on(sigName: "notify::service-types", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::service-types", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::service-types", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::service-types", ...args: any[]): void
    connect(sigName: "notify::skip-our-own", callback: (...args: any[]) => void): number
    on(sigName: "notify::skip-our-own", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::skip-our-own", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::skip-our-own", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::skip-our-own", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

/**
 * Public fields of the #EpcServiceMonitor class.
 * @class 
 */
class ServiceMonitor extends GObject.Object {

    // Own properties of Epc-1.0.Epc.ServiceMonitor

    static name: string
    static $gtype: GObject.GType<ServiceMonitor>

    // Constructors of Epc-1.0.Epc.ServiceMonitor

    constructor(config?: ServiceMonitor_ConstructProps) 
    static newForTypesStrv(domain: string, types: string): ServiceMonitor
    _init(config?: ServiceMonitor_ConstructProps): void
}

interface AuthContext {

    // Owm methods of Epc-1.0.Epc.AuthContext

    checkPassword(password: string): boolean
    getKey(): string
    getPassword(): string
}

class AuthContext {

    // Own properties of Epc-1.0.Epc.AuthContext

    static name: string
}

interface ConsumerClass {

    // Own fields of Epc-1.0.Epc.ConsumerClass

    authenticate: (consumer: Consumer, realm: string) => void
    publisherResolved: (consumer: Consumer, protocol: Protocol, hostname: string, port: number) => void
}

/**
 * Virtual methods of the #EpcConsumer class.
 * @record 
 */
abstract class ConsumerClass {

    // Own properties of Epc-1.0.Epc.ConsumerClass

    static name: string
}

interface ConsumerPrivate {
}

class ConsumerPrivate {

    // Own properties of Epc-1.0.Epc.ConsumerPrivate

    static name: string
}

interface Contents {

    // Owm methods of Epc-1.0.Epc.Contents

    getMimeType(): string
    isStream(): boolean
    ref(): Contents
    unref(): void
}

class Contents {

    // Own properties of Epc-1.0.Epc.Contents

    static name: string

    // Constructors of Epc-1.0.Epc.Contents

    constructor(type: string, data: object, length: number, destroyData: GLib.DestroyNotify) 
    static new(type: string, data: object, length: number, destroyData: GLib.DestroyNotify): Contents
    static newDup(type: string, data: object, length: number): Contents
    static streamNew(type: string, callback: ContentsReadFunc): Contents
}

interface DispatcherClass {
}

/**
 * Virtual methods of the #EpcDispatcher class.
 * @record 
 */
abstract class DispatcherClass {

    // Own properties of Epc-1.0.Epc.DispatcherClass

    static name: string
}

interface DispatcherPrivate {
}

class DispatcherPrivate {

    // Own properties of Epc-1.0.Epc.DispatcherPrivate

    static name: string
}

interface PublisherClass {
}

/**
 * Virtual methods of the #EpcPublisher class.
 * @record 
 */
abstract class PublisherClass {

    // Own properties of Epc-1.0.Epc.PublisherClass

    static name: string
}

interface PublisherPrivate {
}

class PublisherPrivate {

    // Own properties of Epc-1.0.Epc.PublisherPrivate

    static name: string
}

interface ServiceInfo {

    // Owm methods of Epc-1.0.Epc.ServiceInfo

    getAddressFamily(): AddressFamily
    getDetail(name: string): string
    getHost(): string
    getInterface(): string
    getPort(): number
    getServiceType(): string
    ref(): ServiceInfo
    unref(): void
}

class ServiceInfo {

    // Own properties of Epc-1.0.Epc.ServiceInfo

    static name: string
}

interface ServiceMonitorClass {

    // Own fields of Epc-1.0.Epc.ServiceMonitorClass

    serviceFound: (monitor: ServiceMonitor, name: string, info: ServiceInfo) => void
    serviceRemoved: (monitor: ServiceMonitor, name: string, type: string) => void
    scanningDone: (monitor: ServiceMonitor, type: string) => void
}

/**
 * Virtual methods of the #EpcServiceMonitor class.
 * @record 
 */
abstract class ServiceMonitorClass {

    // Own properties of Epc-1.0.Epc.ServiceMonitorClass

    static name: string
}

interface ServiceMonitorPrivate {
}

class ServiceMonitorPrivate {

    // Own properties of Epc-1.0.Epc.ServiceMonitorPrivate

    static name: string
}

interface ShellProgressHooks {

    // Own fields of Epc-1.0.Epc.ShellProgressHooks

    begin: (title: string) => void
    update: (percentage: number, message: string) => void
    end: () => void
}

/**
 * This table is used by #epc_shell_set_progress_hooks to install functions
 * allowing the library to provide feedback during processing.
 * 
 * See also: #epc_progress_window_install
 * @record 
 */
class ShellProgressHooks {

    // Own properties of Epc-1.0.Epc.ShellProgressHooks

    static name: string
}

}
export default Epc;