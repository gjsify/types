// @ts-nocheck

/*
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/sammydre/ts-for-gjs
 */
/**
 * Epc-1.0
 */

import type * as Gjs from './Gjs';
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
function address_family_to_string(value: AddressFamily): string
function auth_flags_to_string(value: AuthFlags): string
function avahi_error_quark(): GLib.Quark
function collision_handling_to_string(value: CollisionHandling): string
function http_error_quark(): GLib.Quark
function protocol_build_uri(protocol: Protocol, hostname: string, port: number, path: string): string
function protocol_from_name(name: string, fallback: Protocol): Protocol
function protocol_get_service_type(protocol: Protocol): string
function protocol_get_uri_scheme(protocol: Protocol): string
function protocol_to_string(value: Protocol): string
function service_type_get_base(type: string): string
function service_type_get_protocol(service_type: string): Protocol
function service_type_new(protocol: Protocol, application: string): string
function shell_get_debug_level(): number
function shell_get_host_name(): string
function shell_progress_begin(title: string, message: string): void
function shell_progress_end(): void
function shell_progress_update(percentage: number, message: string): void
function shell_restart_avahi_client(strloc: string): void
function shell_set_progress_hooks(hooks: ShellProgressHooks, user_data: object, destroy_data: GLib.DestroyNotify): void
function shell_watch_remove(id: number): void
function tls_error_quark(): GLib.Quark
function tls_get_certificate_filename(hostname: string): string
function tls_get_private_key_filename(hostname: string): string
function tls_get_server_credentials(hostname: string, crtfile: string, keyfile: string): boolean
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
    ($obj: Consumer, object: string): boolean
}

/**
 * Signal callback interface for `publisher-resolved`
 */
interface Consumer_PublisherResolvedSignalCallback {
    ($obj: Consumer, object: Protocol, p0: string, p1: number): void
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

    get_password(): string
    get_protocol(): Protocol
    get_username(): string
    is_publisher_resolved(): boolean
    resolve_publisher(timeout: number): boolean
    set_password(password: string): void
    set_protocol(protocol: Protocol): void
    set_username(username: string): void

    // Own virtual methods of Epc-1.0.Epc.Consumer

    vfunc_authenticate(realm: string): void
    vfunc_publisher_resolved(protocol: Protocol, hostname: string, port: number): void

    // Own signals of Epc-1.0.Epc.Consumer

    connect(sigName: "authenticate", callback: Consumer_AuthenticateSignalCallback): number
    connect_after(sigName: "authenticate", callback: Consumer_AuthenticateSignalCallback): number
    emit(sigName: "authenticate", object: string, ...args: any[]): void
    connect(sigName: "publisher-resolved", callback: Consumer_PublisherResolvedSignalCallback): number
    connect_after(sigName: "publisher-resolved", callback: Consumer_PublisherResolvedSignalCallback): number
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

    constructor(config?: Consumer_ConstructProps) 
    constructor(service: ServiceInfo) 
    static new(service: ServiceInfo): Consumer
    static new_for_name(name: string): Consumer
    static new_for_name_full(name: string, application: string, domain: string): Consumer
    _init(config?: Consumer_ConstructProps): void
}

interface Dispatcher_ConstructProps extends GObject.Object_ConstructProps {

    // Own constructor properties of Epc-1.0.Epc.Dispatcher

    collision_handling?: CollisionHandling | null
    cookie?: string | null
    name?: string | null
}

interface Dispatcher {

    // Own properties of Epc-1.0.Epc.Dispatcher

    collision_handling: CollisionHandling
    cookie: string
    name: string

    // Owm methods of Epc-1.0.Epc.Dispatcher

    add_service_subtype(type: string, subtype: string): void
    get_collision_handling(): CollisionHandling
    get_cookie(): string
    get_name(): string
    reset(): void
    run(): boolean
    set_collision_handling(method: CollisionHandling): void
    set_cookie(cookie: string): void
    set_name(name: string): void

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

    constructor(config?: Dispatcher_ConstructProps) 
    constructor(name: string) 
    static new(name: string): Dispatcher
    _init(config?: Dispatcher_ConstructProps): void
}

interface Publisher_ConstructProps extends GObject.Object_ConstructProps {

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
}

interface Publisher {

    // Own properties of Epc-1.0.Epc.Publisher

    application: string
    auth_flags: AuthFlags
    certificate_file: string
    collision_handling: CollisionHandling
    contents_path: string
    private_key_file: string
    protocol: Protocol
    service_cookie: string
    service_domain: string
    service_name: string

    // Owm methods of Epc-1.0.Epc.Publisher

    add(key: string, data: object, length: number): void
    add_bookmark(key: string, label: string): void
    add_file(key: string, filename: string): void
    add_handler(key: string, handler: ContentsHandler): void
    get_auth_flags(): AuthFlags
    get_certificate_file(): string
    get_collision_handling(): CollisionHandling
    get_contents_path(): string
    get_path(key: string): string
    get_private_key_file(): string
    get_protocol(): Protocol
    get_service_cookie(): string
    get_service_domain(): string
    get_service_name(): string
    get_uri(key: string): string
    has_key(key: string): boolean
    quit(): boolean
    remove(key: string): boolean
    run(): boolean
    run_async(): boolean
    set_auth_flags(flags: AuthFlags): void
    set_auth_handler(key: string, handler: AuthHandler): void
    set_collision_handling(method: CollisionHandling): void
    set_contents_path(path: string): void
    set_credentials(certfile: string, keyfile: string): void
    set_protocol(protocol: Protocol): void
    set_service_cookie(cookie: string): void
    set_service_name(name: string): void

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

    constructor(config?: Publisher_ConstructProps) 
    constructor(name: string, application: string, domain: string) 
    static new(name: string, application: string, domain: string): Publisher
    _init(config?: Publisher_ConstructProps): void
    static expand_name(name: string): string
}

interface ServiceMonitor_ConstructProps extends GObject.Object_ConstructProps {

    // Own constructor properties of Epc-1.0.Epc.ServiceMonitor

    application?: string | null
    domain?: string | null
    service_types?: string[] | null
    skip_our_own?: boolean | null
}

/**
 * Signal callback interface for `scanning-done`
 */
interface ServiceMonitor_ScanningDoneSignalCallback {
    ($obj: ServiceMonitor, object: string): void
}

/**
 * Signal callback interface for `service-found`
 */
interface ServiceMonitor_ServiceFoundSignalCallback {
    ($obj: ServiceMonitor, object: string, p0: ServiceInfo): void
}

/**
 * Signal callback interface for `service-removed`
 */
interface ServiceMonitor_ServiceRemovedSignalCallback {
    ($obj: ServiceMonitor, object: string, p0: string): void
}

interface ServiceMonitor {

    // Own properties of Epc-1.0.Epc.ServiceMonitor

    readonly application: string
    readonly domain: string
    readonly service_types: string[]
    skip_our_own: boolean

    // Owm methods of Epc-1.0.Epc.ServiceMonitor

    get_skip_our_own(): boolean
    set_skip_our_own(setting: boolean): void

    // Own virtual methods of Epc-1.0.Epc.ServiceMonitor

    vfunc_scanning_done(type: string): void
    vfunc_service_found(name: string, info: ServiceInfo): void
    vfunc_service_removed(name: string, type: string): void

    // Own signals of Epc-1.0.Epc.ServiceMonitor

    connect(sigName: "scanning-done", callback: ServiceMonitor_ScanningDoneSignalCallback): number
    connect_after(sigName: "scanning-done", callback: ServiceMonitor_ScanningDoneSignalCallback): number
    emit(sigName: "scanning-done", object: string, ...args: any[]): void
    connect(sigName: "service-found", callback: ServiceMonitor_ServiceFoundSignalCallback): number
    connect_after(sigName: "service-found", callback: ServiceMonitor_ServiceFoundSignalCallback): number
    emit(sigName: "service-found", object: string, p0: ServiceInfo, ...args: any[]): void
    connect(sigName: "service-removed", callback: ServiceMonitor_ServiceRemovedSignalCallback): number
    connect_after(sigName: "service-removed", callback: ServiceMonitor_ServiceRemovedSignalCallback): number
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

    constructor(config?: ServiceMonitor_ConstructProps) 
    static new_for_types_strv(domain: string, types: string): ServiceMonitor
    _init(config?: ServiceMonitor_ConstructProps): void
}

interface AuthContext {

    // Owm methods of Epc-1.0.Epc.AuthContext

    check_password(password: string): boolean
    get_key(): string
    get_password(): string
}

class AuthContext {

    // Own properties of Epc-1.0.Epc.AuthContext

    static name: string
}

interface ConsumerClass {

    // Own fields of Epc-1.0.Epc.ConsumerClass

    authenticate: (consumer: Consumer, realm: string) => void
    publisher_resolved: (consumer: Consumer, protocol: Protocol, hostname: string, port: number) => void
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

    get_mime_type(): string
    is_stream(): boolean
    ref(): Contents
    unref(): void
}

class Contents {

    // Own properties of Epc-1.0.Epc.Contents

    static name: string

    // Constructors of Epc-1.0.Epc.Contents

    constructor(type: string, data: object, length: number, destroy_data: GLib.DestroyNotify) 
    static new(type: string, data: object, length: number, destroy_data: GLib.DestroyNotify): Contents
    static new_dup(type: string, data: object, length: number): Contents
    static stream_new(type: string, callback: ContentsReadFunc): Contents
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
    get_detail(name: string): string
    get_host(): string
    get_interface(): string
    get_port(): number
    get_service_type(): string
    ref(): ServiceInfo
    unref(): void
}

class ServiceInfo {

    // Own properties of Epc-1.0.Epc.ServiceInfo

    static name: string
}

interface ServiceMonitorClass {

    // Own fields of Epc-1.0.Epc.ServiceMonitorClass

    service_found: (monitor: ServiceMonitor, name: string, info: ServiceInfo) => void
    service_removed: (monitor: ServiceMonitor, name: string, type: string) => void
    scanning_done: (monitor: ServiceMonitor, type: string) => void
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