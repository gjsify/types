
/*
 * Type Definitions for node-gtk (https://github.com/romgrk/node-gtk)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/gjsify/ts-for-gir
 */
/**
 * Epc-1.0
 */

import type GObject from '@girs/gobject-2.0';
import type GLib from '@girs/glib-2.0';

/**
 * The address family to use for contacting network services.
 */
export enum AddressFamily {
    UNSPEC,
    IPV4,
    IPV6,
}
/**
 * Various strategies for handling service name collisions.
 */
export enum CollisionHandling {
    IGNORE,
    CHANGE_NAME,
    UNIQUE_SERVICE,
}
/**
 * The transport protocols supported by libepc.
 */
export enum Protocol {
    UNKNOWN,
    HTTP,
    HTTPS,
}
/**
 * These flags specify the authentication behaviour of an #EpcPublisher.
 * @bitfield 
 */
export enum AuthFlags {
    DEFAULT,
    PASSWORD_TEXT_NEEDED,
}
export const SERVICE_TYPE_HTTP: string | null
export const SERVICE_TYPE_HTTPS: string | null
export const TLS_SECONDS_PER_DAY: number
export const TLS_SECONDS_PER_HOUR: number
export const TLS_SECONDS_PER_MINUTE: number
export function addressFamilyToString(value: AddressFamily): string | null
export function authFlagsToString(value: AuthFlags): string | null
export function avahiErrorQuark(): GLib.Quark
export function collisionHandlingToString(value: CollisionHandling): string | null
export function httpErrorQuark(): GLib.Quark
export function protocolBuildUri(protocol: Protocol, hostname: string | null, port: number, path: string | null): string | null
export function protocolFromName(name: string | null, fallback: Protocol): Protocol
export function protocolGetServiceType(protocol: Protocol): string | null
export function protocolGetUriScheme(protocol: Protocol): string | null
export function protocolToString(value: Protocol): string | null
export function serviceTypeGetBase(type: string | null): string | null
export function serviceTypeGetProtocol(serviceType: string | null): Protocol
export function serviceTypeNew(protocol: Protocol, application: string | null): string | null
export function shellGetDebugLevel(): number
export function shellGetHostName(): string | null
export function shellProgressBegin(title: string | null, message: string | null): void
export function shellProgressEnd(): void
export function shellProgressUpdate(percentage: number, message: string | null): void
export function shellRestartAvahiClient(strloc: string | null): void
export function shellSetProgressHooks(hooks: ShellProgressHooks, userData: any, destroyData: GLib.DestroyNotify): void
export function shellWatchRemove(id: number): void
export function tlsErrorQuark(): GLib.Quark
export function tlsGetCertificateFilename(hostname: string | null): string | null
export function tlsGetPrivateKeyFilename(hostname: string | null): string | null
export function tlsGetServerCredentials(hostname: string | null, crtfile: string | null, keyfile: string | null): boolean
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
 * @returns %TRUE when access is granted, and %FALSE otherwise.
 */
export interface AuthHandler {
    (context: AuthContext, username: string | null): boolean
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
 * @returns The #EpcContents buffer for this publication, or %NULL.
 */
export interface ContentsHandler {
    (publisher: Publisher, key: string | null): Contents
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
 * @returns Returns %TRUE when the next chunk could be read, and %FALSE on error.
 */
export interface ContentsReadFunc {
    (contents: Contents, buffer: any, length: number): boolean
}
export module Consumer {

    // Signal callback interfaces

    /**
     * Signal callback interface for `authenticate`
     */
    export interface AuthenticateSignalCallback {
        (object: string): boolean
    }

    /**
     * Signal callback interface for `publisher-resolved`
     */
    export interface PublisherResolvedSignalCallback {
        (object: Protocol, p0: string, p1: number): void
    }


    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

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

}

export interface Consumer {

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
    __gtype__: number

    // Owm methods of Epc-1.0.Epc.Consumer

    getPassword(): string | null
    getProtocol(): Protocol
    getUsername(): string | null
    isPublisherResolved(): boolean
    resolvePublisher(timeout: number): boolean
    setPassword(password: string | null): void
    setProtocol(protocol: Protocol): void
    setUsername(username: string | null): void

    // Own virtual methods of Epc-1.0.Epc.Consumer

    authenticate(realm: string | null): void
    publisherResolved(protocol: Protocol, hostname: string | null, port: number): void

    // Own signals of Epc-1.0.Epc.Consumer

    connect(sigName: "authenticate", callback: Consumer.AuthenticateSignalCallback): number
    on(sigName: "authenticate", callback: Consumer.AuthenticateSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "authenticate", callback: Consumer.AuthenticateSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "authenticate", callback: Consumer.AuthenticateSignalCallback): NodeJS.EventEmitter
    emit(sigName: "authenticate", ...args: any[]): void
    connect(sigName: "publisher-resolved", callback: Consumer.PublisherResolvedSignalCallback): number
    on(sigName: "publisher-resolved", callback: Consumer.PublisherResolvedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "publisher-resolved", callback: Consumer.PublisherResolvedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "publisher-resolved", callback: Consumer.PublisherResolvedSignalCallback): NodeJS.EventEmitter
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
 * Public fields of the #EpcConsumer class.
 * @class 
 */
export class Consumer extends GObject.Object {

    // Own properties of Epc-1.0.Epc.Consumer

    static name: string

    // Constructors of Epc-1.0.Epc.Consumer

    constructor(config?: Consumer.ConstructorProperties) 
    constructor(service: ServiceInfo) 
    static new(service: ServiceInfo): Consumer
    static newForName(name: string | null): Consumer
    static newForNameFull(name: string | null, application: string | null, domain: string | null): Consumer
    _init(config?: Consumer.ConstructorProperties): void
}

export module Dispatcher {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of Epc-1.0.Epc.Dispatcher

        collisionHandling?: CollisionHandling | null
        cookie?: string | null
        name?: string | null
    }

}

export interface Dispatcher {

    // Own properties of Epc-1.0.Epc.Dispatcher

    collisionHandling: CollisionHandling
    cookie: string
    name: string
    __gtype__: number

    // Owm methods of Epc-1.0.Epc.Dispatcher

    addServiceSubtype(type: string | null, subtype: string | null): void
    getCollisionHandling(): CollisionHandling
    getCookie(): string | null
    getName(): string | null
    reset(): void
    run(): boolean
    setCollisionHandling(method: CollisionHandling): void
    setCookie(cookie: string | null): void
    setName(name: string | null): void

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
 * Public fields of the #EpcDispatcher class.
 * @class 
 */
export class Dispatcher extends GObject.Object {

    // Own properties of Epc-1.0.Epc.Dispatcher

    static name: string

    // Constructors of Epc-1.0.Epc.Dispatcher

    constructor(config?: Dispatcher.ConstructorProperties) 
    constructor(name: string | null) 
    static new(name: string | null): Dispatcher
    _init(config?: Dispatcher.ConstructorProperties): void
}

export module Publisher {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

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

}

export interface Publisher {

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
    __gtype__: number

    // Owm methods of Epc-1.0.Epc.Publisher

    add(key: string | null, data: any, length: number): void
    addBookmark(key: string | null, label: string | null): void
    addFile(key: string | null, filename: string | null): void
    addHandler(key: string | null, handler: ContentsHandler): void
    getAuthFlags(): AuthFlags
    getCertificateFile(): string | null
    getCollisionHandling(): CollisionHandling
    getContentsPath(): string | null
    getPath(key: string | null): string | null
    getPrivateKeyFile(): string | null
    getProtocol(): Protocol
    getServiceCookie(): string | null
    getServiceDomain(): string | null
    getServiceName(): string | null
    getUri(key: string | null): string | null
    hasKey(key: string | null): boolean
    quit(): boolean
    remove(key: string | null): boolean
    run(): boolean
    runAsync(): boolean
    setAuthFlags(flags: AuthFlags): void
    setAuthHandler(key: string | null, handler: AuthHandler): void
    setCollisionHandling(method: CollisionHandling): void
    setContentsPath(path: string | null): void
    setCredentials(certfile: string | null, keyfile: string | null): void
    setProtocol(protocol: Protocol): void
    setServiceCookie(cookie: string | null): void
    setServiceName(name: string | null): void

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
 * Public fields of the #EpcPublisher class.
 * @class 
 */
export class Publisher extends GObject.Object {

    // Own properties of Epc-1.0.Epc.Publisher

    static name: string

    // Constructors of Epc-1.0.Epc.Publisher

    constructor(config?: Publisher.ConstructorProperties) 
    constructor(name: string | null, application: string | null, domain: string | null) 
    static new(name: string | null, application: string | null, domain: string | null): Publisher
    _init(config?: Publisher.ConstructorProperties): void
    static expandName(name: string | null): string | null
}

export module ServiceMonitor {

    // Signal callback interfaces

    /**
     * Signal callback interface for `scanning-done`
     */
    export interface ScanningDoneSignalCallback {
        (object: string): void
    }

    /**
     * Signal callback interface for `service-found`
     */
    export interface ServiceFoundSignalCallback {
        (object: string, p0: ServiceInfo): void
    }

    /**
     * Signal callback interface for `service-removed`
     */
    export interface ServiceRemovedSignalCallback {
        (object: string, p0: string): void
    }


    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of Epc-1.0.Epc.ServiceMonitor

        application?: string | null
        domain?: string | null
        serviceTypes?: string[] | null
        skipOurOwn?: boolean | null
    }

}

export interface ServiceMonitor {

    // Own properties of Epc-1.0.Epc.ServiceMonitor

    readonly application: string
    readonly domain: string
    readonly serviceTypes: string[]
    skipOurOwn: boolean
    __gtype__: number

    // Owm methods of Epc-1.0.Epc.ServiceMonitor

    getSkipOurOwn(): boolean
    setSkipOurOwn(setting: boolean): void

    // Own virtual methods of Epc-1.0.Epc.ServiceMonitor

    scanningDone(type: string | null): void
    serviceFound(name: string | null, info: ServiceInfo): void
    serviceRemoved(name: string | null, type: string | null): void

    // Own signals of Epc-1.0.Epc.ServiceMonitor

    connect(sigName: "scanning-done", callback: ServiceMonitor.ScanningDoneSignalCallback): number
    on(sigName: "scanning-done", callback: ServiceMonitor.ScanningDoneSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "scanning-done", callback: ServiceMonitor.ScanningDoneSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "scanning-done", callback: ServiceMonitor.ScanningDoneSignalCallback): NodeJS.EventEmitter
    emit(sigName: "scanning-done", ...args: any[]): void
    connect(sigName: "service-found", callback: ServiceMonitor.ServiceFoundSignalCallback): number
    on(sigName: "service-found", callback: ServiceMonitor.ServiceFoundSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "service-found", callback: ServiceMonitor.ServiceFoundSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "service-found", callback: ServiceMonitor.ServiceFoundSignalCallback): NodeJS.EventEmitter
    emit(sigName: "service-found", p0: ServiceInfo, ...args: any[]): void
    connect(sigName: "service-removed", callback: ServiceMonitor.ServiceRemovedSignalCallback): number
    on(sigName: "service-removed", callback: ServiceMonitor.ServiceRemovedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "service-removed", callback: ServiceMonitor.ServiceRemovedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "service-removed", callback: ServiceMonitor.ServiceRemovedSignalCallback): NodeJS.EventEmitter
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
 * Public fields of the #EpcServiceMonitor class.
 * @class 
 */
export class ServiceMonitor extends GObject.Object {

    // Own properties of Epc-1.0.Epc.ServiceMonitor

    static name: string

    // Constructors of Epc-1.0.Epc.ServiceMonitor

    constructor(config?: ServiceMonitor.ConstructorProperties) 
    static newForTypesStrv(domain: string | null, types: string | null): ServiceMonitor
    _init(config?: ServiceMonitor.ConstructorProperties): void
}

export interface AuthContext {

    // Owm methods of Epc-1.0.Epc.AuthContext

    checkPassword(password: string | null): boolean
    getKey(): string | null
    getPassword(): string | null
}

export class AuthContext {

    // Own properties of Epc-1.0.Epc.AuthContext

    static name: string
}

export interface ConsumerClass {

    // Own fields of Epc-1.0.Epc.ConsumerClass

    authenticate: (consumer: Consumer, realm: string | null) => void
    publisherResolved: (consumer: Consumer, protocol: Protocol, hostname: string | null, port: number) => void
}

/**
 * Virtual methods of the #EpcConsumer class.
 * @record 
 */
export abstract class ConsumerClass {

    // Own properties of Epc-1.0.Epc.ConsumerClass

    static name: string
}

export interface ConsumerPrivate {
}

export class ConsumerPrivate {

    // Own properties of Epc-1.0.Epc.ConsumerPrivate

    static name: string
}

export interface Contents {

    // Owm methods of Epc-1.0.Epc.Contents

    getMimeType(): string | null
    isStream(): boolean
    ref(): Contents
    unref(): void
}

export class Contents {

    // Own properties of Epc-1.0.Epc.Contents

    static name: string

    // Constructors of Epc-1.0.Epc.Contents

    constructor(type: string | null, data: any, length: number, destroyData: GLib.DestroyNotify) 
    static new(type: string | null, data: any, length: number, destroyData: GLib.DestroyNotify): Contents
    static newDup(type: string | null, data: any, length: number): Contents
    static streamNew(type: string | null, callback: ContentsReadFunc): Contents
}

export interface DispatcherClass {
}

/**
 * Virtual methods of the #EpcDispatcher class.
 * @record 
 */
export abstract class DispatcherClass {

    // Own properties of Epc-1.0.Epc.DispatcherClass

    static name: string
}

export interface DispatcherPrivate {
}

export class DispatcherPrivate {

    // Own properties of Epc-1.0.Epc.DispatcherPrivate

    static name: string
}

export interface PublisherClass {
}

/**
 * Virtual methods of the #EpcPublisher class.
 * @record 
 */
export abstract class PublisherClass {

    // Own properties of Epc-1.0.Epc.PublisherClass

    static name: string
}

export interface PublisherPrivate {
}

export class PublisherPrivate {

    // Own properties of Epc-1.0.Epc.PublisherPrivate

    static name: string
}

export interface ServiceInfo {

    // Owm methods of Epc-1.0.Epc.ServiceInfo

    getAddressFamily(): AddressFamily
    getDetail(name: string | null): string | null
    getHost(): string | null
    getInterface(): string | null
    getPort(): number
    getServiceType(): string | null
    ref(): ServiceInfo
    unref(): void
}

export class ServiceInfo {

    // Own properties of Epc-1.0.Epc.ServiceInfo

    static name: string
}

export interface ServiceMonitorClass {

    // Own fields of Epc-1.0.Epc.ServiceMonitorClass

    serviceFound: (monitor: ServiceMonitor, name: string | null, info: ServiceInfo) => void
    serviceRemoved: (monitor: ServiceMonitor, name: string | null, type: string | null) => void
    scanningDone: (monitor: ServiceMonitor, type: string | null) => void
}

/**
 * Virtual methods of the #EpcServiceMonitor class.
 * @record 
 */
export abstract class ServiceMonitorClass {

    // Own properties of Epc-1.0.Epc.ServiceMonitorClass

    static name: string
}

export interface ServiceMonitorPrivate {
}

export class ServiceMonitorPrivate {

    // Own properties of Epc-1.0.Epc.ServiceMonitorPrivate

    static name: string
}

export interface ShellProgressHooks {

    // Own fields of Epc-1.0.Epc.ShellProgressHooks

    begin: (title: string | null) => void
    update: (percentage: number, message: string | null) => void
    end: () => void
}

/**
 * This table is used by #epc_shell_set_progress_hooks to install functions
 * allowing the library to provide feedback during processing.
 * 
 * See also: #epc_progress_window_install
 * @record 
 */
export class ShellProgressHooks {

    // Own properties of Epc-1.0.Epc.ShellProgressHooks

    static name: string
}
