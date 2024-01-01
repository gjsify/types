
/*
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in `ts-for-gir` or create a bug report on https://github.com/gjsify/ts-for-gir
 */

import './epc-1.0-ambient.d.ts';
import './epc-1.0-import.d.ts';
/**
 * Epc-1.0
 */

import type GObject from '@girs/gobject-2.0';
import type GLib from '@girs/glib-2.0';

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
function address_family_to_string(value: AddressFamily): string | null
function auth_flags_to_string(value: AuthFlags): string | null
function avahi_error_quark(): GLib.Quark
function collision_handling_to_string(value: CollisionHandling): string | null
function http_error_quark(): GLib.Quark
function protocol_build_uri(protocol: Protocol, hostname: string | null, port: number, path: string | null): string | null
function protocol_from_name(name: string | null, fallback: Protocol): Protocol
function protocol_get_service_type(protocol: Protocol): string | null
function protocol_get_uri_scheme(protocol: Protocol): string | null
function protocol_to_string(value: Protocol): string | null
function service_type_get_base(type: string | null): string | null
function service_type_get_protocol(service_type: string | null): Protocol
function service_type_new(protocol: Protocol, application: string | null): string | null
function shell_get_debug_level(): number
function shell_get_host_name(): string | null
function shell_progress_begin(title: string | null, message: string | null): void
function shell_progress_end(): void
function shell_progress_update(percentage: number, message: string | null): void
function shell_restart_avahi_client(strloc: string | null): void
function shell_set_progress_hooks(hooks: ShellProgressHooks, user_data: any, destroy_data: GLib.DestroyNotify): void
function shell_watch_remove(id: number): void
function tls_error_quark(): GLib.Quark
function tls_get_certificate_filename(hostname: string | null): string | null
function tls_get_private_key_filename(hostname: string | null): string | null
function tls_get_server_credentials(hostname: string | null, crtfile: string | null, keyfile: string | null): boolean
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
interface AuthHandler {
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
interface ContentsHandler {
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
interface ContentsReadFunc {
    (contents: Contents, buffer: any, length: number): boolean
}
module Consumer {

    // Signal callback interfaces

    /**
     * Signal callback interface for `authenticate`
     */
    interface AuthenticateSignalCallback {
        ($obj: Consumer, object: string): boolean
    }

    /**
     * Signal callback interface for `publisher-resolved`
     */
    interface PublisherResolvedSignalCallback {
        ($obj: Consumer, object: Protocol, p0: string, p1: number): void
    }


    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {

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

    get_password(): string | null
    get_protocol(): Protocol
    get_username(): string | null
    is_publisher_resolved(): boolean
    resolve_publisher(timeout: number): boolean
    set_password(password: string | null): void
    set_protocol(protocol: Protocol): void
    set_username(username: string | null): void

    // Own virtual methods of Epc-1.0.Epc.Consumer

    vfunc_authenticate(realm: string | null): void
    vfunc_publisher_resolved(protocol: Protocol, hostname: string | null, port: number): void

    // Own signals of Epc-1.0.Epc.Consumer

    connect(sigName: "authenticate", callback: Consumer.AuthenticateSignalCallback): number
    connect_after(sigName: "authenticate", callback: Consumer.AuthenticateSignalCallback): number
    emit(sigName: "authenticate", object: string, ...args: any[]): void
    connect(sigName: "publisher-resolved", callback: Consumer.PublisherResolvedSignalCallback): number
    connect_after(sigName: "publisher-resolved", callback: Consumer.PublisherResolvedSignalCallback): number
    emit(sigName: "publisher-resolved", object: Protocol, p0: string, p1: number, ...args: any[]): void

    // Class property signals of Epc-1.0.Epc.Consumer

    connect(sigName: "notify::application", callback: (($obj: Consumer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::application", callback: (($obj: Consumer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::application", ...args: any[]): void
    connect(sigName: "notify::domain", callback: (($obj: Consumer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::domain", callback: (($obj: Consumer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::domain", ...args: any[]): void
    connect(sigName: "notify::hostname", callback: (($obj: Consumer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hostname", callback: (($obj: Consumer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hostname", ...args: any[]): void
    connect(sigName: "notify::name", callback: (($obj: Consumer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: Consumer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::password", callback: (($obj: Consumer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::password", callback: (($obj: Consumer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::password", ...args: any[]): void
    connect(sigName: "notify::path", callback: (($obj: Consumer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::path", callback: (($obj: Consumer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::path", ...args: any[]): void
    connect(sigName: "notify::port", callback: (($obj: Consumer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::port", callback: (($obj: Consumer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::port", ...args: any[]): void
    connect(sigName: "notify::protocol", callback: (($obj: Consumer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::protocol", callback: (($obj: Consumer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::protocol", ...args: any[]): void
    connect(sigName: "notify::username", callback: (($obj: Consumer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::username", callback: (($obj: Consumer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::username", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
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

    constructor(config?: Consumer.ConstructorProperties) 
    constructor(service: ServiceInfo) 
    static new(service: ServiceInfo): Consumer
    static new_for_name(name: string | null): Consumer
    static new_for_name_full(name: string | null, application: string | null, domain: string | null): Consumer
    _init(config?: Consumer.ConstructorProperties): void
}

module Dispatcher {

    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of Epc-1.0.Epc.Dispatcher

        collision_handling?: CollisionHandling | null
        cookie?: string | null
        name?: string | null
        collisionHandling?: CollisionHandling | null
    }

}

interface Dispatcher {

    // Own properties of Epc-1.0.Epc.Dispatcher

    collision_handling: CollisionHandling
    collisionHandling: CollisionHandling
    cookie: string
    name: string

    // Owm methods of Epc-1.0.Epc.Dispatcher

    add_service_subtype(type: string | null, subtype: string | null): void
    get_collision_handling(): CollisionHandling
    get_cookie(): string | null
    get_name(): string | null
    reset(): void
    run(): boolean
    set_collision_handling(method: CollisionHandling): void
    set_cookie(cookie: string | null): void
    set_name(name: string | null): void

    // Class property signals of Epc-1.0.Epc.Dispatcher

    connect(sigName: "notify::collision-handling", callback: (($obj: Dispatcher, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::collision-handling", callback: (($obj: Dispatcher, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::collision-handling", ...args: any[]): void
    connect(sigName: "notify::cookie", callback: (($obj: Dispatcher, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::cookie", callback: (($obj: Dispatcher, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::cookie", ...args: any[]): void
    connect(sigName: "notify::name", callback: (($obj: Dispatcher, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: Dispatcher, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
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

    constructor(config?: Dispatcher.ConstructorProperties) 
    constructor(name: string | null) 
    static new(name: string | null): Dispatcher
    _init(config?: Dispatcher.ConstructorProperties): void
}

module Publisher {

    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of Epc-1.0.Epc.Publisher

        application?: string | null
        auth_flags?: AuthFlags | null
        certificate_file?: string | null
        collision_handling?: CollisionHandling | null
        contents_path?: string | null
        private_key_file?: string | null
        protocol?: Protocol | null
        service_cookie?: string | null
        service_domain?: string | null
        service_name?: string | null
        authFlags?: AuthFlags | null
        certificateFile?: string | null
        collisionHandling?: CollisionHandling | null
        contentsPath?: string | null
        privateKeyFile?: string | null
        serviceCookie?: string | null
        serviceDomain?: string | null
        serviceName?: string | null
    }

}

interface Publisher {

    // Own properties of Epc-1.0.Epc.Publisher

    application: string
    auth_flags: AuthFlags
    authFlags: AuthFlags
    certificate_file: string
    certificateFile: string
    collision_handling: CollisionHandling
    collisionHandling: CollisionHandling
    contents_path: string
    contentsPath: string
    private_key_file: string
    privateKeyFile: string
    protocol: Protocol
    service_cookie: string
    serviceCookie: string
    service_domain: string
    serviceDomain: string
    service_name: string
    serviceName: string

    // Owm methods of Epc-1.0.Epc.Publisher

    add(key: string | null, data: any, length: number): void
    add_bookmark(key: string | null, label: string | null): void
    add_file(key: string | null, filename: string | null): void
    add_handler(key: string | null, handler: ContentsHandler): void
    get_auth_flags(): AuthFlags
    get_certificate_file(): string | null
    get_collision_handling(): CollisionHandling
    get_contents_path(): string | null
    get_path(key: string | null): string | null
    get_private_key_file(): string | null
    get_protocol(): Protocol
    get_service_cookie(): string | null
    get_service_domain(): string | null
    get_service_name(): string | null
    get_uri(key: string | null): string | null
    has_key(key: string | null): boolean
    quit(): boolean
    remove(key: string | null): boolean
    run(): boolean
    run_async(): boolean
    set_auth_flags(flags: AuthFlags): void
    set_auth_handler(key: string | null, handler: AuthHandler): void
    set_collision_handling(method: CollisionHandling): void
    set_contents_path(path: string | null): void
    set_credentials(certfile: string | null, keyfile: string | null): void
    set_protocol(protocol: Protocol): void
    set_service_cookie(cookie: string | null): void
    set_service_name(name: string | null): void

    // Class property signals of Epc-1.0.Epc.Publisher

    connect(sigName: "notify::application", callback: (($obj: Publisher, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::application", callback: (($obj: Publisher, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::application", ...args: any[]): void
    connect(sigName: "notify::auth-flags", callback: (($obj: Publisher, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::auth-flags", callback: (($obj: Publisher, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::auth-flags", ...args: any[]): void
    connect(sigName: "notify::certificate-file", callback: (($obj: Publisher, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::certificate-file", callback: (($obj: Publisher, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::certificate-file", ...args: any[]): void
    connect(sigName: "notify::collision-handling", callback: (($obj: Publisher, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::collision-handling", callback: (($obj: Publisher, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::collision-handling", ...args: any[]): void
    connect(sigName: "notify::contents-path", callback: (($obj: Publisher, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::contents-path", callback: (($obj: Publisher, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::contents-path", ...args: any[]): void
    connect(sigName: "notify::private-key-file", callback: (($obj: Publisher, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::private-key-file", callback: (($obj: Publisher, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::private-key-file", ...args: any[]): void
    connect(sigName: "notify::protocol", callback: (($obj: Publisher, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::protocol", callback: (($obj: Publisher, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::protocol", ...args: any[]): void
    connect(sigName: "notify::service-cookie", callback: (($obj: Publisher, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::service-cookie", callback: (($obj: Publisher, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::service-cookie", ...args: any[]): void
    connect(sigName: "notify::service-domain", callback: (($obj: Publisher, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::service-domain", callback: (($obj: Publisher, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::service-domain", ...args: any[]): void
    connect(sigName: "notify::service-name", callback: (($obj: Publisher, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::service-name", callback: (($obj: Publisher, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::service-name", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
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

    constructor(config?: Publisher.ConstructorProperties) 
    constructor(name: string | null, application: string | null, domain: string | null) 
    static new(name: string | null, application: string | null, domain: string | null): Publisher
    _init(config?: Publisher.ConstructorProperties): void
    static expand_name(name: string | null): string | null
}

module ServiceMonitor {

    // Signal callback interfaces

    /**
     * Signal callback interface for `scanning-done`
     */
    interface ScanningDoneSignalCallback {
        ($obj: ServiceMonitor, object: string): void
    }

    /**
     * Signal callback interface for `service-found`
     */
    interface ServiceFoundSignalCallback {
        ($obj: ServiceMonitor, object: string, p0: ServiceInfo): void
    }

    /**
     * Signal callback interface for `service-removed`
     */
    interface ServiceRemovedSignalCallback {
        ($obj: ServiceMonitor, object: string, p0: string): void
    }


    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of Epc-1.0.Epc.ServiceMonitor

        application?: string | null
        domain?: string | null
        service_types?: string[] | null
        skip_our_own?: boolean | null
        serviceTypes?: string[] | null
        skipOurOwn?: boolean | null
    }

}

interface ServiceMonitor {

    // Own properties of Epc-1.0.Epc.ServiceMonitor

    readonly application: string
    readonly domain: string
    readonly service_types: string[]
    readonly serviceTypes: string[]
    skip_our_own: boolean
    skipOurOwn: boolean

    // Owm methods of Epc-1.0.Epc.ServiceMonitor

    get_skip_our_own(): boolean
    set_skip_our_own(setting: boolean): void

    // Own virtual methods of Epc-1.0.Epc.ServiceMonitor

    vfunc_scanning_done(type: string | null): void
    vfunc_service_found(name: string | null, info: ServiceInfo): void
    vfunc_service_removed(name: string | null, type: string | null): void

    // Own signals of Epc-1.0.Epc.ServiceMonitor

    connect(sigName: "scanning-done", callback: ServiceMonitor.ScanningDoneSignalCallback): number
    connect_after(sigName: "scanning-done", callback: ServiceMonitor.ScanningDoneSignalCallback): number
    emit(sigName: "scanning-done", object: string, ...args: any[]): void
    connect(sigName: "service-found", callback: ServiceMonitor.ServiceFoundSignalCallback): number
    connect_after(sigName: "service-found", callback: ServiceMonitor.ServiceFoundSignalCallback): number
    emit(sigName: "service-found", object: string, p0: ServiceInfo, ...args: any[]): void
    connect(sigName: "service-removed", callback: ServiceMonitor.ServiceRemovedSignalCallback): number
    connect_after(sigName: "service-removed", callback: ServiceMonitor.ServiceRemovedSignalCallback): number
    emit(sigName: "service-removed", object: string, p0: string, ...args: any[]): void

    // Class property signals of Epc-1.0.Epc.ServiceMonitor

    connect(sigName: "notify::application", callback: (($obj: ServiceMonitor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::application", callback: (($obj: ServiceMonitor, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::application", ...args: any[]): void
    connect(sigName: "notify::domain", callback: (($obj: ServiceMonitor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::domain", callback: (($obj: ServiceMonitor, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::domain", ...args: any[]): void
    connect(sigName: "notify::service-types", callback: (($obj: ServiceMonitor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::service-types", callback: (($obj: ServiceMonitor, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::service-types", ...args: any[]): void
    connect(sigName: "notify::skip-our-own", callback: (($obj: ServiceMonitor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::skip-our-own", callback: (($obj: ServiceMonitor, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::skip-our-own", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
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

    constructor(config?: ServiceMonitor.ConstructorProperties) 
    static new_for_types_strv(domain: string | null, types: string | null): ServiceMonitor
    _init(config?: ServiceMonitor.ConstructorProperties): void
}

interface AuthContext {

    // Owm methods of Epc-1.0.Epc.AuthContext

    check_password(password: string | null): boolean
    get_key(): string | null
    get_password(): string | null
}

class AuthContext {

    // Own properties of Epc-1.0.Epc.AuthContext

    static name: string
}

interface ConsumerClass {

    // Own fields of Epc-1.0.Epc.ConsumerClass

    authenticate: (consumer: Consumer, realm: string | null) => void
    publisher_resolved: (consumer: Consumer, protocol: Protocol, hostname: string | null, port: number) => void
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

    get_mime_type(): string | null
    is_stream(): boolean
    ref(): Contents
    unref(): void
}

class Contents {

    // Own properties of Epc-1.0.Epc.Contents

    static name: string

    // Constructors of Epc-1.0.Epc.Contents

    constructor(type: string | null, data: any, length: number, destroy_data: GLib.DestroyNotify) 
    static new(type: string | null, data: any, length: number, destroy_data: GLib.DestroyNotify): Contents
    static new_dup(type: string | null, data: any, length: number): Contents
    static stream_new(type: string | null, callback: ContentsReadFunc): Contents
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

    get_address_family(): AddressFamily
    get_detail(name: string | null): string | null
    get_host(): string | null
    get_interface(): string | null
    get_port(): number
    get_service_type(): string | null
    ref(): ServiceInfo
    unref(): void
}

class ServiceInfo {

    // Own properties of Epc-1.0.Epc.ServiceInfo

    static name: string
}

interface ServiceMonitorClass {

    // Own fields of Epc-1.0.Epc.ServiceMonitorClass

    service_found: (monitor: ServiceMonitor, name: string | null, info: ServiceInfo) => void
    service_removed: (monitor: ServiceMonitor, name: string | null, type: string | null) => void
    scanning_done: (monitor: ServiceMonitor, type: string | null) => void
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
class ShellProgressHooks {

    // Own properties of Epc-1.0.Epc.ShellProgressHooks

    static name: string
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

export default Epc;
// END