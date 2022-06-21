// @ts-nocheck

/*
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/sammydre/ts-for-gjs
 */
/**
 * GUPnP-1.0
 */

import type * as Gjs from './Gjs';
import type libxml2 from './libxml2-2.0';
import type Soup from './Soup-2.4';
import type Gio from './Gio-2.0';
import type GObject from './GObject-2.0';
import type GLib from './GLib-2.0';
import type GSSDP from './GSSDP-1.0';

export namespace GUPnP {

/**
 * #GError codes used for errors in the #GUPNP_CONTROL_ERROR domain, during
 * invocation of service actions.
 */
enum ControlError {
    /**
     * The action name was invalid.
     */
    INVALID_ACTION,
    /**
     * The action arguments were invalid.
     */
    INVALID_ARGS,
    /**
     * Out of sync (deprecated).
     */
    OUT_OF_SYNC,
    /**
     * The action failed.
     */
    ACTION_FAILED,
}
/**
 * #GError codes used for errors in the #GUPNP_EVENTING_ERROR domain, during
 * eventing of state variables.
 */
enum EventingError {
    /**
     * The subscription attempt failed.
     */
    SUBSCRIPTION_FAILED,
    /**
     * The subscription was lost.
     */
    SUBSCRIPTION_LOST,
    /**
     * The notification failed.
     */
    NOTIFY_FAILED,
}
/**
 * #GError codes used for errors in the #GUPNP_SERVER_ERROR domain, when there
 * is communication with another server.
 */
enum ServerError {
    /**
     * Internal server error.
     */
    INTERNAL_SERVER_ERROR,
    /**
     * The resource was not found.
     */
    NOT_FOUND,
    /**
     * This method is not implemented.
     */
    NOT_IMPLEMENTED,
    /**
     * Invalid response.
     */
    INVALID_RESPONSE,
    /**
     * Invalid URL.
     */
    INVALID_URL,
    /**
     * Unknown/unhandled error.
     */
    OTHER,
}
/**
 * Represents the direction of a service state variable.
 */
enum ServiceActionArgDirection {
    /**
     * An "in" variable, to the service.
     */
    IN,
    /**
     * An "out" variable, from the service.
     */
    OUT,
}
/**
 * #GError codes used for errors in the #GUPNP_XML_ERROR domain, during
 * processing of XML data.
 */
enum XMLError {
    /**
     * Generic XML parsing error.
     */
    PARSE,
    /**
     * A required XML node was not found.
     */
    NO_NODE,
    /**
     * An XML node is unexpectedly empty.
     */
    EMPTY_NODE,
    /**
     * An XML node has an unknown attribute.
     */
    INVALID_ATTRIBUTE,
    /**
     * Unknown/unhandled XML related errors.
     */
    OTHER,
}
function control_error_quark(): GLib.Quark
function eventing_error_quark(): GLib.Quark
/**
 * Generate and return a new UUID.
 */
function get_uuid(): string
function server_error_quark(): GLib.Quark
function xml_error_quark(): GLib.Quark
/**
 * Callback notifying that `introspection` for `info` has been obtained.
 * @callback 
 * @param info The #GUPnPServiceInfo introspection was requested for
 * @param introspection The new #GUPnPServiceIntrospection object, or NULL
 * @param error The #GError that occurred, or NULL
 */
interface ServiceIntrospectionCallback {
    (info: ServiceInfo, introspection: ServiceIntrospection, error: GLib.Error): void
}
/**
 * Callback notifying that `action` on `proxy` has returned and
 * gupnp_service_proxy_end_action() etc can be called.
 * @callback 
 * @param proxy The #GUPnPServiceProxy `action` is called from
 * @param action The #GUPnPServiceProxyAction in progress
 */
interface ServiceProxyActionCallback {
    (proxy: ServiceProxy, action: ServiceProxyAction): void
}
/**
 * Callback notifying that the state variable `variable` on `proxy` has changed to
 * `value`.
 * @callback 
 * @param proxy The #GUPnPServiceProxy the notification originates from
 * @param variable The name of the variable being notified
 * @param value The #GValue of the variable being notified
 */
interface ServiceProxyNotifyCallback {
    (proxy: ServiceProxy, variable: string, value: any): void
}
interface Acl_ConstructProps extends GObject.Object_ConstructProps {
}

interface Acl {

    // Owm methods of GUPnP-1.0.GUPnP.Acl

    /**
     * Check whether gupnp_acl_is_allowed_async() is supported.
     */
    can_sync(): boolean
    /**
     * Check whether an IP address is allowed to access this resource.
     * @param device The #GUPnPDevice associated with `path` or %NULL if unknown.
     * @param service The #GUPnPService associated with `path` or %NULL if unknown.
     * @param path The path being served.
     * @param address IP address of the peer.
     * @param agent The User-Agent header of the peer or %NULL if not unknown. `returns` %TRUE if the peer is allowed, %FALSE otherwise
     */
    is_allowed(device: object | null, service: object | null, path: string, address: string, agent: string | null): boolean
    /**
     * Optional. Check asynchronously whether an IP address is allowed to access
     * this resource. Use this function if the process of verifying the access right
     * is expected to take some time, for example when using D-Bus etc.
     * 
     * If this function is supported, gupnp_acl_can_sync() should return %TRUE.
     * 
     * Use gupnp_acl_is_allowed_finish() to retrieve the result.
     * @param device The #GUPnPDevice associated with `path` or %NULL if unknown.
     * @param service The #GUPnPService associated with `path` or %NULL if unknown.
     * @param path The path being served.
     * @param address IP address of the peer
     * @param agent The User-Agent header of the peer or %NULL if not unknown.
     * @param cancellable A #GCancellable which can be used to cancel the operation.
     * @param callback Callback to call after the function is done.
     */
    is_allowed_async(device: object | null, service: object | null, path: string, address: string, agent: string | null, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    is_allowed_finish(res: Gio.AsyncResult): boolean

    // Own virtual methods of GUPnP-1.0.GUPnP.Acl

    /**
     * Check whether gupnp_acl_is_allowed_async() is supported.
     * @virtual 
     */
    vfunc_can_sync(): boolean
    /**
     * Check whether an IP address is allowed to access this resource.
     * @virtual 
     * @param device The #GUPnPDevice associated with `path` or %NULL if unknown.
     * @param service The #GUPnPService associated with `path` or %NULL if unknown.
     * @param path The path being served.
     * @param address IP address of the peer.
     * @param agent The User-Agent header of the peer or %NULL if not unknown. `returns` %TRUE if the peer is allowed, %FALSE otherwise
     */
    vfunc_is_allowed(device: object | null, service: object | null, path: string, address: string, agent: string | null): boolean
    /**
     * Optional. Check asynchronously whether an IP address is allowed to access
     * this resource. Use this function if the process of verifying the access right
     * is expected to take some time, for example when using D-Bus etc.
     * 
     * If this function is supported, gupnp_acl_can_sync() should return %TRUE.
     * 
     * Use gupnp_acl_is_allowed_finish() to retrieve the result.
     * @virtual 
     * @param device The #GUPnPDevice associated with `path` or %NULL if unknown.
     * @param service The #GUPnPService associated with `path` or %NULL if unknown.
     * @param path The path being served.
     * @param address IP address of the peer
     * @param agent The User-Agent header of the peer or %NULL if not unknown.
     * @param cancellable A #GCancellable which can be used to cancel the operation.
     * @param callback Callback to call after the function is done.
     */
    vfunc_is_allowed_async(device: object | null, service: object | null, path: string, address: string, agent: string | null, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    vfunc_is_allowed_finish(res: Gio.AsyncResult): boolean

    // Class property signals of GUPnP-1.0.GUPnP.Acl

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * Handle to an object implementing the #GUPnPAclInterface interface.
 * @interface 
 */
class Acl extends GObject.Object {

    // Own properties of GUPnP-1.0.GUPnP.Acl

    static name: string
    static $gtype: GObject.GType<Acl>

    // Constructors of GUPnP-1.0.GUPnP.Acl

    constructor(config?: Acl_ConstructProps) 
    _init(config?: Acl_ConstructProps): void
}

interface Context_ConstructProps extends Gio.Initable_ConstructProps, GSSDP.Client_ConstructProps {

    // Own constructor properties of GUPnP-1.0.GUPnP.Context

    /**
     * An access control list.
     */
    acl?: Acl | null
    /**
     * The content of the Content-Language header id the client
     * sends Accept-Language and no language-specific pages to serve
     * exist. The property defaults to 'en'.
     */
    default_language?: string | null
    /**
     * The port to run on. Set to 0 if you don't care what port to run on.
     */
    port?: number | null
    /**
     * The preferred subscription timeout: the number of seconds after
     * which subscriptions are renewed. Set to '0' if subscriptions
     * are never to time out.
     */
    subscription_timeout?: number | null
}

interface Context extends Gio.Initable {

    // Own properties of GUPnP-1.0.GUPnP.Context

    /**
     * An access control list.
     */
    acl: Acl
    /**
     * The content of the Content-Language header id the client
     * sends Accept-Language and no language-specific pages to serve
     * exist. The property defaults to 'en'.
     */
    default_language: string
    /**
     * The port to run on. Set to 0 if you don't care what port to run on.
     */
    readonly port: number
    /**
     * The #SoupServer HTTP server used by GUPnP.
     */
    readonly server: Soup.Server
    /**
     * The #SoupSession object used by GUPnP.
     */
    readonly session: Soup.Session
    /**
     * The preferred subscription timeout: the number of seconds after
     * which subscriptions are renewed. Set to '0' if subscriptions
     * are never to time out.
     */
    readonly subscription_timeout: number

    // Own fields of GUPnP-1.0.GUPnP.Context

    parent: GSSDP.Client
    priv: ContextPrivate

    // Owm methods of GUPnP-1.0.GUPnP.Context

    /**
     * Add a #SoupServerCallback to the #GUPnPContext<!-- -->'s #SoupServer.
     * @param use_acl %TRUE, if the path should query the GUPnPContext::acl before serving the resource, %FALSE otherwise.
     * @param path the toplevel path for the handler.
     * @param callback callback to invoke for requests under `path`
     */
    add_server_handler(use_acl: boolean, path: string, callback: Soup.ServerCallback): void
    get_acl(): Acl
    /**
     * Get the default Content-Language header for this context.
     */
    get_default_language(): string
    /**
     * Get the IP address we advertise ourselves as using.
     */
    get_host_ip(): string
    /**
     * Get the port that the SOAP server is running on.
     */
    get_port(): number
    /**
     * Get the #SoupServer HTTP server that GUPnP is using.
     */
    get_server(): Soup.Server
    /**
     * Get the #SoupSession object that GUPnP is using.
     */
    get_session(): Soup.Session
    /**
     * Get the event subscription timeout (in seconds), or 0 meaning there is no
     * timeout.
     */
    get_subscription_timeout(): number
    /**
     * Start hosting `local_path` at `server_path`. Files with the path
     * `local_path`.LOCALE (if they exist) will be served up when LOCALE is
     * specified in the request's Accept-Language header.
     * @param local_path Path to the local file or folder to be hosted
     * @param server_path Web server path where `local_path` should be hosted
     */
    host_path(local_path: string, server_path: string): void
    /**
     * Use this method to serve different local path to specific user-agent(s). The
     * path `server_path` must already be hosted by `context`.
     * @param local_path Path to the local file or folder to be hosted
     * @param server_path Web server path already being hosted
     * @param user_agent The user-agent as a #GRegex.
     */
    host_path_for_agent(local_path: string, server_path: string, user_agent: GLib.Regex): boolean
    /**
     * Remove a #SoupServerCallback from the #GUPnPContext<!-- -->'s #SoupServer.
     * @param path the toplevel path for the handler.
     */
    remove_server_handler(path: string): void
    set_acl(acl: Acl | null): void
    /**
     * Set the default language for the Content-Length header to `language`.
     * 
     * If the client sends an Accept-Language header the UPnP HTTP server
     * is required to send a Content-Language header in return. If there are
     * no files hosted in languages which match the requested ones the
     * Content-Language header is set to this value. The default value is "en".
     * @param language A language tag as defined in RFC 2616 3.10
     */
    set_default_language(language: string): void
    /**
     * Sets the event subscription timeout to `timeout`. Use 0 if you don't
     * want subscriptions to time out. Note that any client side subscriptions
     * will automatically be renewed.
     * @param timeout Event subscription timeout in seconds
     */
    set_subscription_timeout(timeout: number): void
    /**
     * Stop hosting the file or folder at `server_path`.
     * @param server_path Web server path where the file or folder is hosted
     */
    unhost_path(server_path: string): void

    // Class property signals of GUPnP-1.0.GUPnP.Context

    connect(sigName: "notify::acl", callback: (($obj: Context, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::acl", callback: (($obj: Context, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::acl", ...args: any[]): void
    connect(sigName: "notify::default-language", callback: (($obj: Context, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::default-language", callback: (($obj: Context, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::default-language", ...args: any[]): void
    connect(sigName: "notify::port", callback: (($obj: Context, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::port", callback: (($obj: Context, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::port", ...args: any[]): void
    connect(sigName: "notify::server", callback: (($obj: Context, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::server", callback: (($obj: Context, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::server", ...args: any[]): void
    connect(sigName: "notify::session", callback: (($obj: Context, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::session", callback: (($obj: Context, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::session", ...args: any[]): void
    connect(sigName: "notify::subscription-timeout", callback: (($obj: Context, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::subscription-timeout", callback: (($obj: Context, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::subscription-timeout", ...args: any[]): void
    connect(sigName: "notify::active", callback: (($obj: Context, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::active", callback: (($obj: Context, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::active", ...args: any[]): void
    connect(sigName: "notify::host-ip", callback: (($obj: Context, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::host-ip", callback: (($obj: Context, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::host-ip", ...args: any[]): void
    connect(sigName: "notify::interface", callback: (($obj: Context, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::interface", callback: (($obj: Context, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::interface", ...args: any[]): void
    connect(sigName: "notify::msearch-port", callback: (($obj: Context, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::msearch-port", callback: (($obj: Context, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::msearch-port", ...args: any[]): void
    connect(sigName: "notify::network", callback: (($obj: Context, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::network", callback: (($obj: Context, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::network", ...args: any[]): void
    connect(sigName: "notify::server-id", callback: (($obj: Context, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::server-id", callback: (($obj: Context, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::server-id", ...args: any[]): void
    connect(sigName: "notify::socket-ttl", callback: (($obj: Context, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::socket-ttl", callback: (($obj: Context, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::socket-ttl", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * This struct contains private data only, and should be accessed using the
 * functions below.
 * @class 
 */
class Context extends GSSDP.Client {

    // Own properties of GUPnP-1.0.GUPnP.Context

    static name: string
    static $gtype: GObject.GType<Context>

    // Constructors of GUPnP-1.0.GUPnP.Context

    constructor(config?: Context_ConstructProps) 
    /**
     * Create a new #GUPnPContext with the specified `main_context,` `iface` and
     * `port`.
     * @constructor 
     * @param main_context Deprecated: 0.17.2: Always set to %NULL. If you want to use a different context, use g_main_context_push_thread_default().
     * @param iface The network interface to use, or %NULL to auto-detect.
     * @param port Port to run on, or 0 if you don't care what port is used.
     */
    constructor(main_context: GLib.MainContext | null, iface: string | null, port: number) 
    /**
     * Create a new #GUPnPContext with the specified `main_context,` `iface` and
     * `port`.
     * @constructor 
     * @param main_context Deprecated: 0.17.2: Always set to %NULL. If you want to use a different context, use g_main_context_push_thread_default().
     * @param iface The network interface to use, or %NULL to auto-detect.
     * @param port Port to run on, or 0 if you don't care what port is used.
     */
    static new(main_context: GLib.MainContext | null, iface: string | null, port: number): Context

    // Overloads of new

    static new(main_context: GLib.MainContext | null, iface: string | null): GSSDP.Client
    _init(config?: Context_ConstructProps): void
}

interface ContextManager_ConstructProps extends GObject.Object_ConstructProps {

    // Own constructor properties of GUPnP-1.0.GUPnP.ContextManager

    main_context?: object | null
    /**
     * Port the contexts listen on, or 0 if you don't care what
     * port is used by #GUPnPContext objects created by this object.
     */
    port?: number | null
}

/**
 * Signal callback interface for `context-available`
 */
interface ContextManager_ContextAvailableSignalCallback {
    ($obj: ContextManager, context: Context): void
}

/**
 * Signal callback interface for `context-unavailable`
 */
interface ContextManager_ContextUnavailableSignalCallback {
    ($obj: ContextManager, context: Context): void
}

interface ContextManager {

    // Own properties of GUPnP-1.0.GUPnP.ContextManager

    readonly main_context: object
    /**
     * Port the contexts listen on, or 0 if you don't care what
     * port is used by #GUPnPContext objects created by this object.
     */
    readonly port: number
    /**
     * The white list to use.
     */
    readonly white_list: WhiteList

    // Own fields of GUPnP-1.0.GUPnP.ContextManager

    parent: GObject.Object
    priv: ContextManagerPrivate

    // Owm methods of GUPnP-1.0.GUPnP.ContextManager

    /**
     * Get the network port associated with this context manager.
     */
    get_port(): number
    /**
     * Get the #GUPnPWhiteList associated with `manager`.
     */
    get_white_list(): WhiteList
    /**
     * By calling this function, you are asking `manager` to keep a reference to
     * `control_point` until its associated #GUPnPContext is no longer available.
     * You usually want to call this function from
     * #GUPnPContextManager::context-available handler after you create a
     * #GUPnPControlPoint object for the newly available context.
     * @param control_point The #GUPnPControlPoint to be taken care of
     */
    manage_control_point(control_point: ControlPoint): void
    /**
     * By calling this function, you are asking `manager` to keep a reference to
     * `root_device` when its associated #GUPnPContext is no longer available. You
     * usually want to call this function from
     * #GUPnPContextManager::context-available handler after you create a
     * #GUPnPRootDevice object for the newly available context.
     * @param root_device The #GUPnPRootDevice to be taken care of
     */
    manage_root_device(root_device: RootDevice): void
    /**
     * This function starts a rescan on every control point managed by `manager`.
     * Only the active control points send discovery messages.
     * This function should be called when servers are suspected to have
     * disappeared.
     */
    rescan_control_points(): void

    // Own signals of GUPnP-1.0.GUPnP.ContextManager

    connect(sigName: "context-available", callback: ContextManager_ContextAvailableSignalCallback): number
    connect_after(sigName: "context-available", callback: ContextManager_ContextAvailableSignalCallback): number
    emit(sigName: "context-available", context: Context, ...args: any[]): void
    connect(sigName: "context-unavailable", callback: ContextManager_ContextUnavailableSignalCallback): number
    connect_after(sigName: "context-unavailable", callback: ContextManager_ContextUnavailableSignalCallback): number
    emit(sigName: "context-unavailable", context: Context, ...args: any[]): void

    // Class property signals of GUPnP-1.0.GUPnP.ContextManager

    connect(sigName: "notify::main-context", callback: (($obj: ContextManager, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::main-context", callback: (($obj: ContextManager, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::main-context", ...args: any[]): void
    connect(sigName: "notify::port", callback: (($obj: ContextManager, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::port", callback: (($obj: ContextManager, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::port", ...args: any[]): void
    connect(sigName: "notify::white-list", callback: (($obj: ContextManager, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::white-list", callback: (($obj: ContextManager, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::white-list", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * This struct contains private data only, and should be accessed using the
 * functions below.
 * @class 
 */
class ContextManager extends GObject.Object {

    // Own properties of GUPnP-1.0.GUPnP.ContextManager

    static name: string
    static $gtype: GObject.GType<ContextManager>

    // Constructors of GUPnP-1.0.GUPnP.ContextManager

    constructor(config?: ContextManager_ConstructProps) 
    /**
     * Same as gupnp_context_manager_create().
     * @constructor 
     * @param main_context Deprecated: 0.17.2: %NULL. If you want to use                a different main context use                g_main_context_push_thread_default() instead.
     * @param port Port to create contexts for, or 0 if you don't care what port is used.
     */
    constructor(main_context: GLib.MainContext | null, port: number) 
    /**
     * Same as gupnp_context_manager_create().
     * @constructor 
     * @param main_context Deprecated: 0.17.2: %NULL. If you want to use                a different main context use                g_main_context_push_thread_default() instead.
     * @param port Port to create contexts for, or 0 if you don't care what port is used.
     */
    static new(main_context: GLib.MainContext | null, port: number): ContextManager
    _init(config?: ContextManager_ConstructProps): void
    /**
     * Factory-method to create a new #GUPnPContextManager. The final type of the
     * #GUPnPContextManager depends on the compile-time selection or - in case of
     * NetworkManager - on its availability during runtime. If it is not available,
     * the implementation falls back to the basic Unix context manager instead.
     * @param port Port to create contexts for, or 0 if you don't care what port is used.
     */
    static create(port: number): ContextManager
}

interface ControlPoint_ConstructProps extends GSSDP.ResourceBrowser_ConstructProps {

    // Own constructor properties of GUPnP-1.0.GUPnP.ControlPoint

    /**
     * The resource factory to use. Set to NULL for default factory.
     */
    resource_factory?: ResourceFactory | null
}

/**
 * Signal callback interface for `device-proxy-available`
 */
interface ControlPoint_DeviceProxyAvailableSignalCallback {
    ($obj: ControlPoint, proxy: DeviceProxy): void
}

/**
 * Signal callback interface for `device-proxy-unavailable`
 */
interface ControlPoint_DeviceProxyUnavailableSignalCallback {
    ($obj: ControlPoint, proxy: DeviceProxy): void
}

/**
 * Signal callback interface for `service-proxy-available`
 */
interface ControlPoint_ServiceProxyAvailableSignalCallback {
    ($obj: ControlPoint, proxy: ServiceProxy): void
}

/**
 * Signal callback interface for `service-proxy-unavailable`
 */
interface ControlPoint_ServiceProxyUnavailableSignalCallback {
    ($obj: ControlPoint, proxy: ServiceProxy): void
}

interface ControlPoint {

    // Own properties of GUPnP-1.0.GUPnP.ControlPoint

    /**
     * The resource factory to use. Set to NULL for default factory.
     */
    readonly resource_factory: ResourceFactory

    // Own fields of GUPnP-1.0.GUPnP.ControlPoint

    parent: GSSDP.ResourceBrowser
    priv: ControlPointPrivate

    // Owm methods of GUPnP-1.0.GUPnP.ControlPoint

    /**
     * Get the #GUPnPControlPoint associated with `control_point`.
     */
    get_context(): Context
    /**
     * Get the #GUPnPResourceFactory used by the `control_point`.
     */
    get_resource_factory(): ResourceFactory
    /**
     * Get the #GList of discovered #GUPnPDeviceProxy objects. Do not free the list
     * nor its elements.
     */
    list_device_proxies(): DeviceProxy[]
    /**
     * Get the #GList of discovered #GUPnPServiceProxy objects. Do not free the
     * list nor its elements.
     */
    list_service_proxies(): ServiceProxy[]

    // Own virtual methods of GUPnP-1.0.GUPnP.ControlPoint

    vfunc_device_proxy_available(proxy: DeviceProxy): void
    vfunc_device_proxy_unavailable(proxy: DeviceProxy): void
    vfunc_service_proxy_available(proxy: ServiceProxy): void
    vfunc_service_proxy_unavailable(proxy: ServiceProxy): void

    // Own signals of GUPnP-1.0.GUPnP.ControlPoint

    connect(sigName: "device-proxy-available", callback: ControlPoint_DeviceProxyAvailableSignalCallback): number
    connect_after(sigName: "device-proxy-available", callback: ControlPoint_DeviceProxyAvailableSignalCallback): number
    emit(sigName: "device-proxy-available", proxy: DeviceProxy, ...args: any[]): void
    connect(sigName: "device-proxy-unavailable", callback: ControlPoint_DeviceProxyUnavailableSignalCallback): number
    connect_after(sigName: "device-proxy-unavailable", callback: ControlPoint_DeviceProxyUnavailableSignalCallback): number
    emit(sigName: "device-proxy-unavailable", proxy: DeviceProxy, ...args: any[]): void
    connect(sigName: "service-proxy-available", callback: ControlPoint_ServiceProxyAvailableSignalCallback): number
    connect_after(sigName: "service-proxy-available", callback: ControlPoint_ServiceProxyAvailableSignalCallback): number
    emit(sigName: "service-proxy-available", proxy: ServiceProxy, ...args: any[]): void
    connect(sigName: "service-proxy-unavailable", callback: ControlPoint_ServiceProxyUnavailableSignalCallback): number
    connect_after(sigName: "service-proxy-unavailable", callback: ControlPoint_ServiceProxyUnavailableSignalCallback): number
    emit(sigName: "service-proxy-unavailable", proxy: ServiceProxy, ...args: any[]): void

    // Class property signals of GUPnP-1.0.GUPnP.ControlPoint

    connect(sigName: "notify::resource-factory", callback: (($obj: ControlPoint, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::resource-factory", callback: (($obj: ControlPoint, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::resource-factory", ...args: any[]): void
    connect(sigName: "notify::active", callback: (($obj: ControlPoint, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::active", callback: (($obj: ControlPoint, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::active", ...args: any[]): void
    connect(sigName: "notify::client", callback: (($obj: ControlPoint, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::client", callback: (($obj: ControlPoint, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::client", ...args: any[]): void
    connect(sigName: "notify::mx", callback: (($obj: ControlPoint, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::mx", callback: (($obj: ControlPoint, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::mx", ...args: any[]): void
    connect(sigName: "notify::target", callback: (($obj: ControlPoint, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::target", callback: (($obj: ControlPoint, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::target", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * This struct contains private data only, and should be accessed using the
 * functions below.
 * @class 
 */
class ControlPoint extends GSSDP.ResourceBrowser {

    // Own properties of GUPnP-1.0.GUPnP.ControlPoint

    static name: string
    static $gtype: GObject.GType<ControlPoint>

    // Constructors of GUPnP-1.0.GUPnP.ControlPoint

    constructor(config?: ControlPoint_ConstructProps) 
    /**
     * Create a new #GUPnPControlPoint with the specified `context` and `target`.
     * 
     * `target` should be a service or device name, such as
     * <literal>urn:schemas-upnp-org:service:WANIPConnection:1</literal> or
     * <literal>urn:schemas-upnp-org:device:MediaRenderer:1</literal>.
     * @constructor 
     * @param context A #GUPnPContext
     * @param target The search target
     */
    constructor(context: Context, target: string) 
    /**
     * Create a new #GUPnPControlPoint with the specified `context` and `target`.
     * 
     * `target` should be a service or device name, such as
     * <literal>urn:schemas-upnp-org:service:WANIPConnection:1</literal> or
     * <literal>urn:schemas-upnp-org:device:MediaRenderer:1</literal>.
     * @constructor 
     * @param context A #GUPnPContext
     * @param target The search target
     */
    static new(context: Context, target: string): ControlPoint

    // Overloads of new

    /**
     * `target` is a generic string the resource browser listens for on the SSDP
     * bus. There are several possible targets such as
     * <itemizedlist>
     *   <listitem><para>"ssdp:all" for everything</para></listitem>
     *   <listitem><para>
     *     "upnp:rootdevice" for UPnP device entry points, not caring about the
     *     device type</para></listitem>
     *   <listitem><para>The UUID of a specific device</para></listitem>
     *   <listitem><para>Device types such as
     *   "urn:schemas-upnp-org:device:MediaServer:1"</para></listitem>
     *   <listitem><para>Service types such as
     *   "urn:schemas-upnp-org:service:ContentDirectory:1"</para></listitem>
     * </itemizedlist>
     * @constructor 
     * @param client The #GSSDPClient to associate with
     * @param target A SSDP search target
     */
    static new(client: GSSDP.Client, target: string): GSSDP.ResourceBrowser
    /**
     * Create a new #GUPnPControlPoint with the specified `context,` `factory` and
     * `target`.
     * 
     * `target` should be a service or device name, such as
     * <literal>urn:schemas-upnp-org:service:WANIPConnection:1</literal> or
     * <literal>urn:schemas-upnp-org:device:MediaRenderer:1</literal>.
     * @constructor 
     * @param context A #GUPnPContext
     * @param factory A #GUPnPResourceFactory
     * @param target The search target
     */
    static new_full(context: Context, factory: ResourceFactory, target: string): ControlPoint
    _init(config?: ControlPoint_ConstructProps): void
}

interface Device_ConstructProps extends DeviceInfo_ConstructProps {

    // Own constructor properties of GUPnP-1.0.GUPnP.Device

    /**
     * The containing #GUPnPRootDevice, or NULL if this is the root
     * device.
     */
    root_device?: RootDevice | null
}

interface Device {

    // Own properties of GUPnP-1.0.GUPnP.Device

    /**
     * The containing #GUPnPRootDevice, or NULL if this is the root
     * device.
     */
    readonly root_device: RootDevice

    // Own fields of GUPnP-1.0.GUPnP.Device

    parent: DeviceInfo
    priv: DevicePrivate

    // Class property signals of GUPnP-1.0.GUPnP.Device

    connect(sigName: "notify::root-device", callback: (($obj: Device, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::root-device", callback: (($obj: Device, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::root-device", ...args: any[]): void
    connect(sigName: "notify::context", callback: (($obj: Device, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::context", callback: (($obj: Device, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::context", ...args: any[]): void
    connect(sigName: "notify::device-type", callback: (($obj: Device, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::device-type", callback: (($obj: Device, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::device-type", ...args: any[]): void
    connect(sigName: "notify::document", callback: (($obj: Device, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::document", callback: (($obj: Device, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::document", ...args: any[]): void
    connect(sigName: "notify::element", callback: (($obj: Device, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::element", callback: (($obj: Device, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::element", ...args: any[]): void
    connect(sigName: "notify::location", callback: (($obj: Device, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::location", callback: (($obj: Device, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::location", ...args: any[]): void
    connect(sigName: "notify::resource-factory", callback: (($obj: Device, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::resource-factory", callback: (($obj: Device, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::resource-factory", ...args: any[]): void
    connect(sigName: "notify::udn", callback: (($obj: Device, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::udn", callback: (($obj: Device, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::udn", ...args: any[]): void
    connect(sigName: "notify::url-base", callback: (($obj: Device, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::url-base", callback: (($obj: Device, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::url-base", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * This struct contains private data only, and should be accessed using the
 * functions below.
 * @class 
 */
class Device extends DeviceInfo {

    // Own properties of GUPnP-1.0.GUPnP.Device

    static name: string
    static $gtype: GObject.GType<Device>

    // Constructors of GUPnP-1.0.GUPnP.Device

    constructor(config?: Device_ConstructProps) 
    _init(config?: Device_ConstructProps): void
}

interface DeviceInfo_ConstructProps extends GObject.Object_ConstructProps {

    // Own constructor properties of GUPnP-1.0.GUPnP.DeviceInfo

    /**
     * The #GUPnPContext to use.
     */
    context?: Context | null
    /**
     * The device type.
     */
    device_type?: string | null
    /**
     * Private property.
     */
    document?: XMLDoc | null
    /**
     * Private property.
     */
    element?: object | null
    /**
     * The location of the device description file.
     */
    location?: string | null
    /**
     * The resource factory to use. Set to NULL for default factory.
     */
    resource_factory?: ResourceFactory | null
    /**
     * The UDN of this device.
     */
    udn?: string | null
    /**
     * The URL base (#SoupURI).
     */
    url_base?: Soup.URI | null
}

interface DeviceInfo {

    // Own properties of GUPnP-1.0.GUPnP.DeviceInfo

    /**
     * The #GUPnPContext to use.
     */
    readonly context: Context
    /**
     * The device type.
     */
    readonly device_type: string
    /**
     * Private property.
     */
    readonly document: XMLDoc
    /**
     * Private property.
     */
    readonly element: object
    /**
     * The location of the device description file.
     */
    readonly location: string
    /**
     * The resource factory to use. Set to NULL for default factory.
     */
    readonly resource_factory: ResourceFactory
    /**
     * The UDN of this device.
     */
    readonly udn: string
    /**
     * The URL base (#SoupURI).
     */
    readonly url_base: Soup.URI

    // Own fields of GUPnP-1.0.GUPnP.DeviceInfo

    parent: GObject.Object
    priv: DeviceInfoPrivate

    // Owm methods of GUPnP-1.0.GUPnP.DeviceInfo

    /**
     * Get the associated #GUPnPContext.
     */
    get_context(): Context
    /**
     * This function provides generic access to the contents of arbitrary elements
     * in the device description file.
     * @param element Name of the description element to retrieve
     */
    get_description_value(element: string): string
    /**
     * Get the service with type `type` directly contained in `info` as
     * a new object implementing #GUPnPDeviceInfo, or %NULL if no such device
     * was found. The returned object should be unreffed when done.
     * 
     * Note that devices are not cached internally, so that every time you call
     * this function a new object is created. The application must cache any used
     * devices if it wishes to keep them around and re-use them.
     * @param type The type of the device to be retrieved.
     */
    get_device(type: string): DeviceInfo | null
    /**
     * Get the UPnP device type.
     */
    get_device_type(): string
    /**
     * Get the friendly name of the device.
     */
    get_friendly_name(): string
    /**
     * Get a URL pointing to the icon most closely matching the
     * given criteria, or %NULL. If `requested_mime_type` is set, only icons with
     * this mime type will be returned. If `requested_depth` is set, only icons with
     * this or lower depth will be returned. If `requested_width` and/or
     * `requested_height` are set, only icons that are this size or smaller are
     * returned, unless `prefer_bigger` is set, in which case the next biggest icon
     * will be returned. The returned strings should be freed.
     * @param requested_mime_type The requested file format, or %NULL for any
     * @param requested_depth The requested color depth, or -1 for any
     * @param requested_width The requested width, or -1 for any
     * @param requested_height The requested height, or -1 for any
     * @param prefer_bigger %TRUE if a bigger, rather than a smaller icon should be returned if no exact match could be found
     */
    get_icon_url(requested_mime_type: string | null, requested_depth: number, requested_width: number, requested_height: number, prefer_bigger: boolean): [ /* returnType */ string, /* mime_type */ string, /* depth */ number, /* width */ number, /* height */ number ]
    /**
     * Get the location of the device description file.
     */
    get_location(): string
    /**
     * Get the manufacturer of the device.
     */
    get_manufacturer(): string
    /**
     * Get a URL pointing to the manufacturer's website.
     */
    get_manufacturer_url(): string
    /**
     * Get the description of the device model.
     */
    get_model_description(): string
    /**
     * Get the model name of the device.
     */
    get_model_name(): string
    /**
     * Get the model number of the device.
     */
    get_model_number(): string
    /**
     * Get a URL pointing to the device model's website.
     */
    get_model_url(): string
    /**
     * Get a URL pointing to the device's presentation page, for web-based
     * administration.
     */
    get_presentation_url(): string
    /**
     * Get the #GUPnPResourceFactory used by the `device_info`.
     */
    get_resource_factory(): ResourceFactory
    /**
     * Get the serial number of the device.
     */
    get_serial_number(): string
    /**
     * Get the service with type `type` directly contained in `info` as a new object
     * implementing #GUPnPServiceInfo, or %NULL if no such device was found. The
     * returned object should be unreffed when done.
     * 
     * Note that services are not cached internally, so that every time you call
     * this function a new object is created. The application must cache any used
     * services if it wishes to keep them around and re-use them.
     * @param type The type of the service to be retrieved.
     */
    get_service(type: string): ServiceInfo
    /**
     * Get the Unique Device Name of the device.
     */
    get_udn(): string
    /**
     * Get the Universal Product Code of the device.
     */
    get_upc(): string
    /**
     * Get the URL base of this device.
     */
    get_url_base(): Soup.URI
    /**
     * Get a #GList of strings representing the types of the devices
     * directly contained in `info`.
     */
    list_device_types(): string[]
    /**
     * Get a #GList of new objects implementing #GUPnPDeviceInfo
     * representing the devices directly contained in `info`. The returned list
     * should be g_list_free()'d and the elements should be g_object_unref()'d.
     * 
     * Note that devices are not cached internally, so that every time you
     * call this function new objects are created. The application
     * must cache any used devices if it wishes to keep them around and re-use
     * them.
     */
    list_devices(): DeviceInfo[]
    /**
     * Get a #GList of strings that represent the device capabilities as announced
     * in the device description file using the &lt;dlna:X_DLNACAP&gt; element.
     */
    list_dlna_capabilities(): string[]
    /**
     * Get a #GList of strings that represent the device class and version as
     * announced in the device description file using the &lt;dlna:X_DLNADOC&gt;
     * element.
     */
    list_dlna_device_class_identifier(): string[]
    /**
     * Get a #GList of strings representing the types of the services
     * directly contained in `info`.
     */
    list_service_types(): string[]
    /**
     * Get a #GList of new objects implementing #GUPnPServiceInfo representing the
     * services directly contained in `info`. The returned list should be
     * g_list_free()'d and the elements should be g_object_unref()'d.
     * 
     * Note that services are not cached internally, so that every time you call
     * function new objects are created. The application must cache any used
     * services if it wishes to keep them around and re-use them.
     */
    list_services(): ServiceInfo[]

    // Class property signals of GUPnP-1.0.GUPnP.DeviceInfo

    connect(sigName: "notify::context", callback: (($obj: DeviceInfo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::context", callback: (($obj: DeviceInfo, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::context", ...args: any[]): void
    connect(sigName: "notify::device-type", callback: (($obj: DeviceInfo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::device-type", callback: (($obj: DeviceInfo, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::device-type", ...args: any[]): void
    connect(sigName: "notify::document", callback: (($obj: DeviceInfo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::document", callback: (($obj: DeviceInfo, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::document", ...args: any[]): void
    connect(sigName: "notify::element", callback: (($obj: DeviceInfo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::element", callback: (($obj: DeviceInfo, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::element", ...args: any[]): void
    connect(sigName: "notify::location", callback: (($obj: DeviceInfo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::location", callback: (($obj: DeviceInfo, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::location", ...args: any[]): void
    connect(sigName: "notify::resource-factory", callback: (($obj: DeviceInfo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::resource-factory", callback: (($obj: DeviceInfo, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::resource-factory", ...args: any[]): void
    connect(sigName: "notify::udn", callback: (($obj: DeviceInfo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::udn", callback: (($obj: DeviceInfo, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::udn", ...args: any[]): void
    connect(sigName: "notify::url-base", callback: (($obj: DeviceInfo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::url-base", callback: (($obj: DeviceInfo, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::url-base", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * This struct contains private data only, and should be accessed using the
 * functions below.
 * @class 
 */
class DeviceInfo extends GObject.Object {

    // Own properties of GUPnP-1.0.GUPnP.DeviceInfo

    static name: string
    static $gtype: GObject.GType<DeviceInfo>

    // Constructors of GUPnP-1.0.GUPnP.DeviceInfo

    constructor(config?: DeviceInfo_ConstructProps) 
    _init(config?: DeviceInfo_ConstructProps): void
}

interface DeviceProxy_ConstructProps extends DeviceInfo_ConstructProps {
}

interface DeviceProxy {

    // Own fields of GUPnP-1.0.GUPnP.DeviceProxy

    parent: DeviceInfo
    priv: DeviceProxyPrivate

    // Class property signals of GUPnP-1.0.GUPnP.DeviceProxy

    connect(sigName: "notify::context", callback: (($obj: DeviceProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::context", callback: (($obj: DeviceProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::context", ...args: any[]): void
    connect(sigName: "notify::device-type", callback: (($obj: DeviceProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::device-type", callback: (($obj: DeviceProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::device-type", ...args: any[]): void
    connect(sigName: "notify::document", callback: (($obj: DeviceProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::document", callback: (($obj: DeviceProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::document", ...args: any[]): void
    connect(sigName: "notify::element", callback: (($obj: DeviceProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::element", callback: (($obj: DeviceProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::element", ...args: any[]): void
    connect(sigName: "notify::location", callback: (($obj: DeviceProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::location", callback: (($obj: DeviceProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::location", ...args: any[]): void
    connect(sigName: "notify::resource-factory", callback: (($obj: DeviceProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::resource-factory", callback: (($obj: DeviceProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::resource-factory", ...args: any[]): void
    connect(sigName: "notify::udn", callback: (($obj: DeviceProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::udn", callback: (($obj: DeviceProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::udn", ...args: any[]): void
    connect(sigName: "notify::url-base", callback: (($obj: DeviceProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::url-base", callback: (($obj: DeviceProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::url-base", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * This struct contains private data only, and should be accessed using the
 * functions below.
 * @class 
 */
class DeviceProxy extends DeviceInfo {

    // Own properties of GUPnP-1.0.GUPnP.DeviceProxy

    static name: string
    static $gtype: GObject.GType<DeviceProxy>

    // Constructors of GUPnP-1.0.GUPnP.DeviceProxy

    constructor(config?: DeviceProxy_ConstructProps) 
    _init(config?: DeviceProxy_ConstructProps): void
}

interface ResourceFactory_ConstructProps extends GObject.Object_ConstructProps {
}

interface ResourceFactory {

    // Own fields of GUPnP-1.0.GUPnP.ResourceFactory

    parent: GObject.Object
    priv: ResourceFactoryPrivate

    // Owm methods of GUPnP-1.0.GUPnP.ResourceFactory

    /**
     * Registers the GType `type` for the proxy of resource of UPnP type `upnp_type`.
     * After this call, the factory `factory` will create object of GType `type` each
     * time it is asked to create a resource proxy object for UPnP type `upnp_type`.
     * 
     * Note: GType `type` must be a derived type of #GUPNP_TYPE_DEVICE_PROXY if
     * resource is a device or #GUPNP_TYPE_SERVICE_PROXY if its a service.
     * @param upnp_type The UPnP type name of the resource.
     * @param type The requested GType assignment for the resource proxy.
     */
    register_resource_proxy_type(upnp_type: string, type: GObject.GType): void
    /**
     * Registers the GType `type` for the resource of UPnP type `upnp_type`. After
     * this call, the factory `factory` will create object of GType `type` each time
     * it is asked to create a resource object for UPnP type `upnp_type`.
     * 
     * Note: GType `type` must be a derived type of #GUPNP_TYPE_DEVICE if resource is
     * a device or #GUPNP_TYPE_SERVICE if its a service.
     * @param upnp_type The UPnP type name of the resource.
     * @param type The requested GType assignment for the resource.
     */
    register_resource_type(upnp_type: string, type: GObject.GType): void
    /**
     * Unregisters the GType assignment for the proxy of resource of UPnP type
     * `upnp_type`.
     * @param upnp_type The UPnP type name of the resource.
     */
    unregister_resource_proxy_type(upnp_type: string): boolean
    /**
     * Unregisters the GType assignment for the resource of UPnP type `upnp_type`.
     * @param upnp_type The UPnP type name of the resource.
     */
    unregister_resource_type(upnp_type: string): boolean

    // Class property signals of GUPnP-1.0.GUPnP.ResourceFactory

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * This struct contains private data only, and should be accessed using the
 * functions below.
 * @class 
 */
class ResourceFactory extends GObject.Object {

    // Own properties of GUPnP-1.0.GUPnP.ResourceFactory

    static name: string
    static $gtype: GObject.GType<ResourceFactory>

    // Constructors of GUPnP-1.0.GUPnP.ResourceFactory

    constructor(config?: ResourceFactory_ConstructProps) 
    /**
     * Create a new #GUPnPResourceFactory object.
     * @constructor 
     */
    constructor() 
    /**
     * Create a new #GUPnPResourceFactory object.
     * @constructor 
     */
    static new(): ResourceFactory
    _init(config?: ResourceFactory_ConstructProps): void
    /**
     * Get the default singleton #GUPnPResourceFactory object.
     */
    static get_default(): ResourceFactory
}

interface RootDevice_ConstructProps extends Device_ConstructProps {

    // Own constructor properties of GUPnP-1.0.GUPnP.RootDevice

    /**
     * TRUE if this device is available.
     */
    available?: boolean | null
    /**
     * The path to directory where description documents are provided.
     */
    description_dir?: string | null
    /**
     * Device description document. Constructor property.
     */
    description_doc?: XMLDoc | null
    /**
     * The path to device description document. This could either be an
     * absolute path or path relative to GUPnPRootDevice:description-dir.
     */
    description_path?: string | null
}

interface RootDevice {

    // Own properties of GUPnP-1.0.GUPnP.RootDevice

    /**
     * TRUE if this device is available.
     */
    available: boolean
    /**
     * The path to directory where description documents are provided.
     */
    readonly description_dir: string
    /**
     * Device description document. Constructor property.
     */
    readonly description_doc: XMLDoc
    /**
     * The path to device description document. This could either be an
     * absolute path or path relative to GUPnPRootDevice:description-dir.
     */
    readonly description_path: string

    // Own fields of GUPnP-1.0.GUPnP.RootDevice

    parent: Device
    priv: RootDevicePrivate

    // Owm methods of GUPnP-1.0.GUPnP.RootDevice

    /**
     * Get whether or not `root_device` is available (announcing its presence).
     */
    get_available(): boolean
    /**
     * Get the path to the directory containing description documents related to
     * `root_device`.
     */
    get_description_dir(): string
    /**
     * Get the path to the device description document of `root_device`.
     */
    get_description_path(): string
    /**
     * Get the relative location of `root_device`.
     */
    get_relative_location(): string
    /**
     * Get the #GSSDPResourceGroup used by `root_device`.
     */
    get_ssdp_resource_group(): GSSDP.ResourceGroup
    /**
     * Controls whether or not `root_device` is available (announcing
     * its presence).
     * @param available %TRUE if `root_device` should be available
     */
    set_available(available: boolean): void

    // Class property signals of GUPnP-1.0.GUPnP.RootDevice

    connect(sigName: "notify::available", callback: (($obj: RootDevice, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::available", callback: (($obj: RootDevice, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::available", ...args: any[]): void
    connect(sigName: "notify::description-dir", callback: (($obj: RootDevice, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::description-dir", callback: (($obj: RootDevice, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::description-dir", ...args: any[]): void
    connect(sigName: "notify::description-doc", callback: (($obj: RootDevice, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::description-doc", callback: (($obj: RootDevice, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::description-doc", ...args: any[]): void
    connect(sigName: "notify::description-path", callback: (($obj: RootDevice, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::description-path", callback: (($obj: RootDevice, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::description-path", ...args: any[]): void
    connect(sigName: "notify::root-device", callback: (($obj: RootDevice, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::root-device", callback: (($obj: RootDevice, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::root-device", ...args: any[]): void
    connect(sigName: "notify::context", callback: (($obj: RootDevice, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::context", callback: (($obj: RootDevice, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::context", ...args: any[]): void
    connect(sigName: "notify::device-type", callback: (($obj: RootDevice, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::device-type", callback: (($obj: RootDevice, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::device-type", ...args: any[]): void
    connect(sigName: "notify::document", callback: (($obj: RootDevice, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::document", callback: (($obj: RootDevice, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::document", ...args: any[]): void
    connect(sigName: "notify::element", callback: (($obj: RootDevice, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::element", callback: (($obj: RootDevice, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::element", ...args: any[]): void
    connect(sigName: "notify::location", callback: (($obj: RootDevice, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::location", callback: (($obj: RootDevice, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::location", ...args: any[]): void
    connect(sigName: "notify::resource-factory", callback: (($obj: RootDevice, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::resource-factory", callback: (($obj: RootDevice, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::resource-factory", ...args: any[]): void
    connect(sigName: "notify::udn", callback: (($obj: RootDevice, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::udn", callback: (($obj: RootDevice, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::udn", ...args: any[]): void
    connect(sigName: "notify::url-base", callback: (($obj: RootDevice, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::url-base", callback: (($obj: RootDevice, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::url-base", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * This struct contains private data only, and should be accessed using the
 * functions below.
 * @class 
 */
class RootDevice extends Device {

    // Own properties of GUPnP-1.0.GUPnP.RootDevice

    static name: string
    static $gtype: GObject.GType<RootDevice>

    // Constructors of GUPnP-1.0.GUPnP.RootDevice

    constructor(config?: RootDevice_ConstructProps) 
    /**
     * Create a new #GUPnPRootDevice object, automatically loading and parsing
     * device description document from `description_path`.
     * @constructor 
     * @param context The #GUPnPContext
     * @param description_path Path to device description document. This could either be an absolute path or path relative to `description_dir`.
     * @param description_dir Path to directory where description documents are provided.
     */
    constructor(context: Context, description_path: string, description_dir: string) 
    /**
     * Create a new #GUPnPRootDevice object, automatically loading and parsing
     * device description document from `description_path`.
     * @constructor 
     * @param context The #GUPnPContext
     * @param description_path Path to device description document. This could either be an absolute path or path relative to `description_dir`.
     * @param description_dir Path to directory where description documents are provided.
     */
    static new(context: Context, description_path: string, description_dir: string): RootDevice
    /**
     * Create a new #GUPnPRootDevice, automatically loading and parsing
     * device description document from `description_path` if `description_doc` is
     * %NULL.
     * @constructor 
     * @param context A #GUPnPContext
     * @param factory A #GUPnPResourceFactory
     * @param description_doc Device description document, or %NULL
     * @param description_path Path to device description document. This could either be an absolute path or path relative to `description_dir`.
     * @param description_dir Path to directory where description documents are provided.
     */
    static new_full(context: Context, factory: ResourceFactory, description_doc: XMLDoc, description_path: string, description_dir: string): RootDevice
    _init(config?: RootDevice_ConstructProps): void
}

interface Service_ConstructProps extends ServiceInfo_ConstructProps {

    // Own constructor properties of GUPnP-1.0.GUPnP.Service

    /**
     * The containing #GUPnPRootDevice.
     */
    root_device?: RootDevice | null
}

/**
 * Signal callback interface for `action-invoked`
 */
interface Service_ActionInvokedSignalCallback {
    ($obj: Service, action: ServiceAction): void
}

/**
 * Signal callback interface for `notify-failed`
 */
interface Service_NotifyFailedSignalCallback {
    ($obj: Service, callback_url: Soup.URI[], reason: GLib.Error): void
}

/**
 * Signal callback interface for `query-variable`
 */
interface Service_QueryVariableSignalCallback {
    ($obj: Service, variable: string, value: any): void
}

interface Service {

    // Own properties of GUPnP-1.0.GUPnP.Service

    /**
     * The containing #GUPnPRootDevice.
     */
    readonly root_device: RootDevice

    // Own fields of GUPnP-1.0.GUPnP.Service

    parent: ServiceInfo
    priv: ServicePrivate

    // Owm methods of GUPnP-1.0.GUPnP.Service

    /**
     * Causes new notifications to be queued up until gupnp_service_thaw_notify()
     * is called.
     */
    freeze_notify(): void
    /**
     * Notifies listening clients that `variable` has changed to `value`.
     * @param variable The name of the variable to notify
     * @param value The value of the variable
     */
    notify_value(variable: string, value: any): void
    /**
     * A convenience function that attempts to connect all possible
     * #GUPnPService::action-invoked and #GUPnPService::query-variable signals to
     * appropriate callbacks for the service `service`. It uses service introspection
     * and #GModule<!-- -->'s introspective features. It is very simillar to
     * gtk_builder_connect_signals() except that it attempts to guess the names of
     * the signal handlers on its own.
     * 
     * For this function to do its magic, the application must name the callback
     * functions for #GUPnPService::action-invoked signals by striping the CamelCase
     * off the action names and either prepend "on_" or append "_cb" to them. Same
     * goes for #GUPnPService::query-variable signals, except that "query_" should
     * be prepended to the variable name. For example, callback function for
     * <varname>GetSystemUpdateID</varname> action should be either named as
     * "get_system_update_id_cb" or "on_get_system_update_id" and callback function
     * for the query of "SystemUpdateID" state variable should be named
     * <function>query_system_update_id_cb</function> or
     * <function>on_query_system_update_id</function>.
     * 
     * <note>This function will not work correctly if #GModule is not supported
     * on the platform or introspection is not available for `service`.</note>
     * 
     * <warning>This function can not and therefore does not guarantee that the
     * resulting signal connections will be correct as it depends heavily on a
     * particular naming schemes described above.</warning>
     * @param user_data the data to pass to each of the callbacks
     */
    signals_autoconnect(user_data: object | null): void
    /**
     * Sends out any pending notifications, and stops queuing of new ones.
     */
    thaw_notify(): void

    // Own virtual methods of GUPnP-1.0.GUPnP.Service

    vfunc_action_invoked(action: ServiceAction): void
    vfunc_query_variable(variable: string, value: any): void

    // Own signals of GUPnP-1.0.GUPnP.Service

    connect(sigName: "action-invoked", callback: Service_ActionInvokedSignalCallback): number
    connect_after(sigName: "action-invoked", callback: Service_ActionInvokedSignalCallback): number
    emit(sigName: "action-invoked", action: ServiceAction, ...args: any[]): void
    connect(sigName: "notify-failed", callback: Service_NotifyFailedSignalCallback): number
    connect_after(sigName: "notify-failed", callback: Service_NotifyFailedSignalCallback): number
    emit(sigName: "notify-failed", callback_url: Soup.URI[], reason: GLib.Error, ...args: any[]): void
    connect(sigName: "query-variable", callback: Service_QueryVariableSignalCallback): number
    connect_after(sigName: "query-variable", callback: Service_QueryVariableSignalCallback): number
    emit(sigName: "query-variable", variable: string, value: any, ...args: any[]): void

    // Class property signals of GUPnP-1.0.GUPnP.Service

    connect(sigName: "notify::root-device", callback: (($obj: Service, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::root-device", callback: (($obj: Service, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::root-device", ...args: any[]): void
    connect(sigName: "notify::context", callback: (($obj: Service, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::context", callback: (($obj: Service, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::context", ...args: any[]): void
    connect(sigName: "notify::document", callback: (($obj: Service, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::document", callback: (($obj: Service, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::document", ...args: any[]): void
    connect(sigName: "notify::element", callback: (($obj: Service, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::element", callback: (($obj: Service, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::element", ...args: any[]): void
    connect(sigName: "notify::location", callback: (($obj: Service, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::location", callback: (($obj: Service, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::location", ...args: any[]): void
    connect(sigName: "notify::service-type", callback: (($obj: Service, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::service-type", callback: (($obj: Service, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::service-type", ...args: any[]): void
    connect(sigName: "notify::udn", callback: (($obj: Service, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::udn", callback: (($obj: Service, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::udn", ...args: any[]): void
    connect(sigName: "notify::url-base", callback: (($obj: Service, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::url-base", callback: (($obj: Service, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::url-base", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * This struct contains private data only, and should be accessed using the
 * functions below.
 * @class 
 */
class Service extends ServiceInfo {

    // Own properties of GUPnP-1.0.GUPnP.Service

    static name: string
    static $gtype: GObject.GType<Service>

    // Constructors of GUPnP-1.0.GUPnP.Service

    constructor(config?: Service_ConstructProps) 
    _init(config?: Service_ConstructProps): void
}

interface ServiceInfo_ConstructProps extends GObject.Object_ConstructProps {

    // Own constructor properties of GUPnP-1.0.GUPnP.ServiceInfo

    /**
     * The #GUPnPContext to use.
     */
    context?: Context | null
    /**
     * Private property.
     */
    document?: XMLDoc | null
    /**
     * Private property.
     */
    element?: object | null
    /**
     * The location of the device description file.
     */
    location?: string | null
    /**
     * The service type.
     */
    service_type?: string | null
    /**
     * The UDN of the containing device.
     */
    udn?: string | null
    /**
     * The URL base (#SoupURI).
     */
    url_base?: Soup.URI | null
}

interface ServiceInfo {

    // Own properties of GUPnP-1.0.GUPnP.ServiceInfo

    /**
     * The #GUPnPContext to use.
     */
    readonly context: Context
    /**
     * Private property.
     */
    readonly document: XMLDoc
    /**
     * Private property.
     */
    readonly element: object
    /**
     * The location of the device description file.
     */
    readonly location: string
    /**
     * The service type.
     */
    readonly service_type: string
    /**
     * The UDN of the containing device.
     */
    readonly udn: string
    /**
     * The URL base (#SoupURI).
     */
    readonly url_base: Soup.URI

    // Own fields of GUPnP-1.0.GUPnP.ServiceInfo

    parent: GObject.Object
    priv: ServiceInfoPrivate

    // Owm methods of GUPnP-1.0.GUPnP.ServiceInfo

    /**
     * Get the #GUPnPContext associated with `info`.
     */
    get_context(): Context
    /**
     * Get the control URL for this service, or %NULL..
     */
    get_control_url(): string
    /**
     * Get the event subscription URL for this service, or %NULL.
     */
    get_event_subscription_url(): string
    /**
     * Get the ID of this service, or %NULL if there is no ID.
     */
    get_id(): string
    /**
     * Note that introspection object is created from the information in service
     * description document (SCPD) provided by the service so it can not be created
     * if the service does not provide an SCPD.
     * 
     * Warning: You  should use gupnp_service_info_get_introspection_async()
     * instead, this function re-enter the GMainloop before returning or might
     * even block.
     */
    get_introspection(): ServiceIntrospection
    /**
     * Note that introspection object is created from the information in service
     * description document (SCPD) provided by the service so it can not be created
     * if the service does not provide an SCPD.
     * @param callback callback to be called when introspection object is ready.
     */
    get_introspection_async(callback: ServiceIntrospectionCallback): void
    /**
     * Note that introspection object is created from the information in service
     * description document (SCPD) provided by the service so it can not be created
     * if the service does not provide an SCPD.
     * 
     * If `cancellable` is used to cancel the call, `callback` will be called with
     * error code %G_IO_ERROR_CANCELLED.
     * @param callback callback to be called when introspection object is ready.
     * @param cancellable GCancellable that can be used to cancel the call, or %NULL.
     */
    get_introspection_async_full(callback: ServiceIntrospectionCallback, cancellable: Gio.Cancellable | null): void
    /**
     * Get the location of the device description file.
     */
    get_location(): string
    /**
     * Get the SCPD URL for this service, or %NULL if there is no SCPD.
     */
    get_scpd_url(): string
    /**
     * Get the UPnP service type, or %NULL.
     */
    get_service_type(): string
    /**
     * Get the Unique Device Name of the containing device.
     */
    get_udn(): string
    /**
     * Get the URL base of this service.
     */
    get_url_base(): Soup.URI

    // Class property signals of GUPnP-1.0.GUPnP.ServiceInfo

    connect(sigName: "notify::context", callback: (($obj: ServiceInfo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::context", callback: (($obj: ServiceInfo, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::context", ...args: any[]): void
    connect(sigName: "notify::document", callback: (($obj: ServiceInfo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::document", callback: (($obj: ServiceInfo, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::document", ...args: any[]): void
    connect(sigName: "notify::element", callback: (($obj: ServiceInfo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::element", callback: (($obj: ServiceInfo, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::element", ...args: any[]): void
    connect(sigName: "notify::location", callback: (($obj: ServiceInfo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::location", callback: (($obj: ServiceInfo, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::location", ...args: any[]): void
    connect(sigName: "notify::service-type", callback: (($obj: ServiceInfo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::service-type", callback: (($obj: ServiceInfo, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::service-type", ...args: any[]): void
    connect(sigName: "notify::udn", callback: (($obj: ServiceInfo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::udn", callback: (($obj: ServiceInfo, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::udn", ...args: any[]): void
    connect(sigName: "notify::url-base", callback: (($obj: ServiceInfo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::url-base", callback: (($obj: ServiceInfo, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::url-base", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * This struct contains private data only, and should be accessed using the
 * functions below.
 * @class 
 */
class ServiceInfo extends GObject.Object {

    // Own properties of GUPnP-1.0.GUPnP.ServiceInfo

    static name: string
    static $gtype: GObject.GType<ServiceInfo>

    // Constructors of GUPnP-1.0.GUPnP.ServiceInfo

    constructor(config?: ServiceInfo_ConstructProps) 
    _init(config?: ServiceInfo_ConstructProps): void
}

interface ServiceIntrospection_ConstructProps extends GObject.Object_ConstructProps {

    // Own constructor properties of GUPnP-1.0.GUPnP.ServiceIntrospection

    /**
     * The scpd of the device description file.
     */
    scpd?: object | null
}

interface ServiceIntrospection {

    // Own properties of GUPnP-1.0.GUPnP.ServiceIntrospection

    /**
     * The scpd of the device description file.
     */
    readonly scpd: object

    // Own fields of GUPnP-1.0.GUPnP.ServiceIntrospection

    parent: GObject.Object
    priv: ServiceIntrospectionPrivate

    // Owm methods of GUPnP-1.0.GUPnP.ServiceIntrospection

    /**
     * Returns the action by the name `action_name` in this service.
     * @param action_name The name of the action to retrieve
     */
    get_action(action_name: string): ServiceActionInfo
    /**
     * Returns the state variable by the name `variable_name` in this service.
     * @param variable_name The name of the variable to retrieve
     */
    get_state_variable(variable_name: string): ServiceStateVariableInfo
    /**
     * Returns a GList of names of all the actions in this service.
     */
    list_action_names(): string[]
    /**
     * Returns a #GList of all the actions (of type #GUPnPServiceActionInfo) in
     * this service.
     */
    list_actions(): ServiceActionInfo[]
    /**
     * Returns a #GList of names of all the state variables in this service.
     */
    list_state_variable_names(): string[]
    /**
     * Returns a GList of all the state variables (of type
     * #GUPnPServiceStateVariableInfo) in this service.
     */
    list_state_variables(): ServiceStateVariableInfo[]

    // Class property signals of GUPnP-1.0.GUPnP.ServiceIntrospection

    connect(sigName: "notify::scpd", callback: (($obj: ServiceIntrospection, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scpd", callback: (($obj: ServiceIntrospection, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::scpd", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * This struct contains private data only, and should be accessed using the
 * functions below.
 * @class 
 */
class ServiceIntrospection extends GObject.Object {

    // Own properties of GUPnP-1.0.GUPnP.ServiceIntrospection

    static name: string
    static $gtype: GObject.GType<ServiceIntrospection>

    // Constructors of GUPnP-1.0.GUPnP.ServiceIntrospection

    constructor(config?: ServiceIntrospection_ConstructProps) 
    _init(config?: ServiceIntrospection_ConstructProps): void
}

interface ServiceProxy_ConstructProps extends ServiceInfo_ConstructProps {

    // Own constructor properties of GUPnP-1.0.GUPnP.ServiceProxy

    /**
     * Whether we are subscribed to this service.
     */
    subscribed?: boolean | null
}

/**
 * Signal callback interface for `subscription-lost`
 */
interface ServiceProxy_SubscriptionLostSignalCallback {
    ($obj: ServiceProxy, error: GLib.Error): void
}

interface ServiceProxy {

    // Own properties of GUPnP-1.0.GUPnP.ServiceProxy

    /**
     * Whether we are subscribed to this service.
     */
    subscribed: boolean

    // Own fields of GUPnP-1.0.GUPnP.ServiceProxy

    parent: ServiceInfo
    priv: ServiceProxyPrivate

    // Owm methods of GUPnP-1.0.GUPnP.ServiceProxy

    /**
     * Sets up `callback` to be called whenever a change notification for
     * `variable` is recieved.
     * @param variable The variable to add notification for
     * @param type The type of the variable
     * @param callback The callback to call when `variable` changes
     */
    add_notify(variable: string, type: GObject.GType, callback: ServiceProxyNotifyCallback): boolean
    /**
     * Get a notification for anything that happens on the peer. `value` in
     * `callback` will be of type #G_TYPE_POINTER and contain the pre-parsed
     * #xmlDoc. Do NOT free or modify this document.
     * @param callback The callback to call when the peer issues any variable notification.
     */
    add_raw_notify(callback: ServiceProxyNotifyCallback): boolean
    /**
     * A variant of #gupnp_service_proxy_begin_action that takes lists of
     * in-parameter names, types and values.
     * @param action An action
     * @param in_names #GList of 'in' parameter names (as strings)
     * @param in_values #GList of values (as #GValue) that line up with `in_names`
     * @param callback The callback to call when sending the action has succeeded or failed
     */
    begin_action_list(action: string, in_names: string[], in_values: any[], callback: ServiceProxyActionCallback): ServiceProxyAction
    /**
     * Cancels `action,` freeing the `action` handle.
     * @param action A #GUPnPServiceProxyAction handle
     */
    cancel_action(action: ServiceProxyAction): void
    /**
     * See gupnp_service_proxy_end_action(); this version takes a #GHashTable for
     * runtime generated parameter lists.
     * @param action A #GUPnPServiceProxyAction handle
     * @param hash A #GHashTable of out parameter name and initialised #GValue pairs
     */
    end_action_hash(action: ServiceProxyAction, hash: GLib.HashTable): [ /* returnType */ boolean, /* hash */ GLib.HashTable ]
    /**
     * A variant of #gupnp_service_proxy_end_action that takes lists of
     * out-parameter names, types and place-holders for values. The returned list
     * in `out_values` must be freed using #g_list_free and each element in it using
     * #g_value_unset and #g_slice_free.
     * @param action A #GUPnPServiceProxyAction handle
     * @param out_names #GList of 'out' parameter names (as strings)
     * @param out_types #GList of types (as #GType) that line up with `out_names`
     */
    end_action_list(action: ServiceProxyAction, out_names: string[], out_types: GObject.GType[]): [ /* returnType */ boolean, /* out_values */ any[] ]
    /**
     * Returns if we are subscribed to this service.
     */
    get_subscribed(): boolean
    /**
     * Cancels the variable change notification for `callback` and `user_data`.
     * 
     * Up to version 0.20.9 this function must not be called directlya or
     * indirectly from a #GUPnPServiceProxyNotifyCallback associated with this
     * service proxy, even if it is for another variable. In later versions such
     * calls are allowed.
     * @param variable The variable to add notification for
     * @param callback The callback to call when `variable` changes
     */
    remove_notify(variable: string, callback: ServiceProxyNotifyCallback): boolean
    /**
     * Cancels the variable change notification for `callback` and `user_data`.
     * 
     * This function must not be called directly or indirectly from a
     * #GUPnPServiceProxyNotifyCallback associated with this service proxy, even
     * if it is for another variable.
     * @param callback The callback to call when `variable` changes
     */
    remove_raw_notify(callback: ServiceProxyNotifyCallback): boolean
    /**
     * The synchronous variant of #gupnp_service_proxy_begin_action_list and
     * #gupnp_service_proxy_end_action_list.
     * @param action An action
     * @param in_names #GList of 'in' parameter names (as strings)
     * @param in_values #GList of values (as #GValue) that line up with `in_names`
     * @param out_names #GList of 'out' parameter names (as strings)
     * @param out_types #GList of types (as #GType) that line up with `out_names`
     */
    send_action_list(action: string, in_names: string[], in_values: any[], out_names: string[], out_types: GObject.GType[]): [ /* returnType */ boolean, /* out_values */ any[] ]
    /**
     * (Un)subscribes to this service.
     * 
     * Note that the relevant messages are not immediately sent but queued.
     * If you want to unsubcribe from this service because the application
     * is quitting, rely on automatic synchronised unsubscription on object
     * destruction instead.
     * @param subscribed %TRUE to subscribe to this service
     */
    set_subscribed(subscribed: boolean): void

    // Own virtual methods of GUPnP-1.0.GUPnP.ServiceProxy

    vfunc_subscription_lost(reason: GLib.Error): void

    // Own signals of GUPnP-1.0.GUPnP.ServiceProxy

    connect(sigName: "subscription-lost", callback: ServiceProxy_SubscriptionLostSignalCallback): number
    connect_after(sigName: "subscription-lost", callback: ServiceProxy_SubscriptionLostSignalCallback): number
    emit(sigName: "subscription-lost", error: GLib.Error, ...args: any[]): void

    // Class property signals of GUPnP-1.0.GUPnP.ServiceProxy

    connect(sigName: "notify::subscribed", callback: (($obj: ServiceProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::subscribed", callback: (($obj: ServiceProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::subscribed", ...args: any[]): void
    connect(sigName: "notify::context", callback: (($obj: ServiceProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::context", callback: (($obj: ServiceProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::context", ...args: any[]): void
    connect(sigName: "notify::document", callback: (($obj: ServiceProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::document", callback: (($obj: ServiceProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::document", ...args: any[]): void
    connect(sigName: "notify::element", callback: (($obj: ServiceProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::element", callback: (($obj: ServiceProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::element", ...args: any[]): void
    connect(sigName: "notify::location", callback: (($obj: ServiceProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::location", callback: (($obj: ServiceProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::location", ...args: any[]): void
    connect(sigName: "notify::service-type", callback: (($obj: ServiceProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::service-type", callback: (($obj: ServiceProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::service-type", ...args: any[]): void
    connect(sigName: "notify::udn", callback: (($obj: ServiceProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::udn", callback: (($obj: ServiceProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::udn", ...args: any[]): void
    connect(sigName: "notify::url-base", callback: (($obj: ServiceProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::url-base", callback: (($obj: ServiceProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::url-base", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * This struct contains private data only, and should be accessed using the
 * functions below.
 * @class 
 */
class ServiceProxy extends ServiceInfo {

    // Own properties of GUPnP-1.0.GUPnP.ServiceProxy

    static name: string
    static $gtype: GObject.GType<ServiceProxy>

    // Constructors of GUPnP-1.0.GUPnP.ServiceProxy

    constructor(config?: ServiceProxy_ConstructProps) 
    _init(config?: ServiceProxy_ConstructProps): void
}

interface WhiteList_ConstructProps extends GObject.Object_ConstructProps {

    // Own constructor properties of GUPnP-1.0.GUPnP.WhiteList

    /**
     * Whether this white list is active or not.
     */
    enabled?: boolean | null
    /**
     * Whether this white list is active or not.
     */
    entries?: string[] | null
}

interface WhiteList {

    // Own properties of GUPnP-1.0.GUPnP.WhiteList

    /**
     * Whether this white list is active or not.
     */
    enabled: boolean
    /**
     * Whether this white list is active or not.
     */
    readonly entries: string[]

    // Own fields of GUPnP-1.0.GUPnP.WhiteList

    parent: GObject.Object
    priv: WhiteListPrivate

    // Owm methods of GUPnP-1.0.GUPnP.WhiteList

    /**
     * Add `entry` in the list of valid criteria used by `white_list` to
     * filter networks.
     * if `entry` already exists, it won't be added a second time.
     * @param entry A value used to filter network
     */
    add_entry(entry: string): boolean
    /**
     * Add a list of entries to a #GUPnPWhiteList. This is a helper function to
     * directly add a %NULL-terminated array of string usually aquired from
     * commandline args.
     * @param entries A %NULL-terminated list of strings
     */
    add_entryv(entries: string[]): void
    /**
     * It will check if the `context` is allowed or not. The `white_list` will check
     * all its entries againt #GUPnPContext interface, host ip and network fields
     * information. This function doesn't take into account the `white_list` status
     * (enabled or not).
     * @param context A #GUPnPContext to test.
     */
    check_context(context: Context): boolean
    /**
     * Remove all entries from #GList that compose the white list.
     * The list is now empty. Even if #GUPnPWhiteList is enabled, it will have the
     * same behavior as if it was disabled.
     */
    clear(): void
    /**
     * Return the status of the #GUPnPWhiteList
     */
    get_enabled(): boolean
    /**
     * Get the #GList of entries that compose the white list. Do not free
     */
    get_entries(): string[]
    /**
     * Return the state of the entries list of #GUPnPWhiteList
     */
    is_empty(): boolean
    /**
     * Remove `entry` in the list of valid criteria used by `white_list` to
     * filter networks.
     * @param entry A value to remove from the filter list.
     */
    remove_entry(entry: string): boolean
    /**
     * Enable or disable the #GUPnPWhiteList to perform the network filtering.
     * @param enable %TRUE to enable `white_list,` %FALSE otherwise
     */
    set_enabled(enable: boolean): void

    // Class property signals of GUPnP-1.0.GUPnP.WhiteList

    connect(sigName: "notify::enabled", callback: (($obj: WhiteList, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::enabled", callback: (($obj: WhiteList, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::enabled", ...args: any[]): void
    connect(sigName: "notify::entries", callback: (($obj: WhiteList, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::entries", callback: (($obj: WhiteList, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::entries", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * This struct contains private data only, and should be accessed using the
 * functions below.
 * @class 
 */
class WhiteList extends GObject.Object {

    // Own properties of GUPnP-1.0.GUPnP.WhiteList

    static name: string
    static $gtype: GObject.GType<WhiteList>

    // Constructors of GUPnP-1.0.GUPnP.WhiteList

    constructor(config?: WhiteList_ConstructProps) 
    /**
     * Create a new #GUPnPWhiteList.
     * The white list is disabled by default.
     * @constructor 
     */
    constructor() 
    /**
     * Create a new #GUPnPWhiteList.
     * The white list is disabled by default.
     * @constructor 
     */
    static new(): WhiteList
    _init(config?: WhiteList_ConstructProps): void
}

interface XMLDoc_ConstructProps extends GObject.Object_ConstructProps {
}

interface XMLDoc {

    // Own fields of GUPnP-1.0.GUPnP.XMLDoc

    parent: GObject.Object
    /**
     * Pointer to the document.
     * @field 
     */
    doc: libxml2.Doc

    // Class property signals of GUPnP-1.0.GUPnP.XMLDoc

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * Reference-counting wrapper for libxml's #xmlDoc
 * @class 
 */
class XMLDoc extends GObject.Object {

    // Own properties of GUPnP-1.0.GUPnP.XMLDoc

    static name: string
    static $gtype: GObject.GType<XMLDoc>

    // Constructors of GUPnP-1.0.GUPnP.XMLDoc

    constructor(config?: XMLDoc_ConstructProps) 
    /**
     * Create a new #GUPnPXMLDoc for `xml_doc`.
     * @constructor 
     * @param xml_doc Pointer to #xmlDoc to wrap under this object
     */
    constructor(xml_doc: libxml2.Doc) 
    /**
     * Create a new #GUPnPXMLDoc for `xml_doc`.
     * @constructor 
     * @param xml_doc Pointer to #xmlDoc to wrap under this object
     */
    static new(xml_doc: libxml2.Doc): XMLDoc
    /**
     * Create a new #GUPnPXMLDoc for the XML document at `path`.
     * @constructor 
     * @param path Path to xml document
     */
    static new_from_path(path: string): XMLDoc
    _init(config?: XMLDoc_ConstructProps): void
}

interface AclInterface {

    // Own fields of GUPnP-1.0.GUPnP.AclInterface

    /**
     * The parent interface.
     * @field 
     */
    parent: GObject.TypeInterface
    is_allowed: (self: Acl, device: object | null, service: object | null, path: string, address: string, agent: string | null) => boolean
    is_allowed_async: (self: Acl, device: object | null, service: object | null, path: string, address: string, agent: string | null, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null) => void
    is_allowed_finish: (self: Acl, res: Gio.AsyncResult) => boolean
    can_sync: (self: Acl) => boolean
}

/**
 * Implement a simple access control list for GUPnP.
 * @record 
 */
abstract class AclInterface {

    // Own properties of GUPnP-1.0.GUPnP.AclInterface

    static name: string
}

interface ContextClass {

    // Own fields of GUPnP-1.0.GUPnP.ContextClass

    parent_class: GSSDP.ClientClass
}

abstract class ContextClass {

    // Own properties of GUPnP-1.0.GUPnP.ContextClass

    static name: string
}

interface ContextManagerClass {

    // Own fields of GUPnP-1.0.GUPnP.ContextManagerClass

    parent_class: GObject.ObjectClass
}

abstract class ContextManagerClass {

    // Own properties of GUPnP-1.0.GUPnP.ContextManagerClass

    static name: string
}

interface ContextManagerPrivate {
}

class ContextManagerPrivate {

    // Own properties of GUPnP-1.0.GUPnP.ContextManagerPrivate

    static name: string
}

interface ContextPrivate {
}

class ContextPrivate {

    // Own properties of GUPnP-1.0.GUPnP.ContextPrivate

    static name: string
}

interface ControlPointClass {

    // Own fields of GUPnP-1.0.GUPnP.ControlPointClass

    parent_class: GSSDP.ResourceBrowserClass
    device_proxy_available: (control_point: ControlPoint, proxy: DeviceProxy) => void
    device_proxy_unavailable: (control_point: ControlPoint, proxy: DeviceProxy) => void
    service_proxy_available: (control_point: ControlPoint, proxy: ServiceProxy) => void
    service_proxy_unavailable: (control_point: ControlPoint, proxy: ServiceProxy) => void
}

abstract class ControlPointClass {

    // Own properties of GUPnP-1.0.GUPnP.ControlPointClass

    static name: string
}

interface ControlPointPrivate {
}

class ControlPointPrivate {

    // Own properties of GUPnP-1.0.GUPnP.ControlPointPrivate

    static name: string
}

interface DeviceClass {

    // Own fields of GUPnP-1.0.GUPnP.DeviceClass

    parent_class: DeviceInfoClass
}

abstract class DeviceClass {

    // Own properties of GUPnP-1.0.GUPnP.DeviceClass

    static name: string
}

interface DeviceInfoClass {

    // Own fields of GUPnP-1.0.GUPnP.DeviceInfoClass

    parent_class: GObject.ObjectClass
}

abstract class DeviceInfoClass {

    // Own properties of GUPnP-1.0.GUPnP.DeviceInfoClass

    static name: string
}

interface DeviceInfoPrivate {
}

class DeviceInfoPrivate {

    // Own properties of GUPnP-1.0.GUPnP.DeviceInfoPrivate

    static name: string
}

interface DevicePrivate {
}

class DevicePrivate {

    // Own properties of GUPnP-1.0.GUPnP.DevicePrivate

    static name: string
}

interface DeviceProxyClass {

    // Own fields of GUPnP-1.0.GUPnP.DeviceProxyClass

    parent_class: DeviceInfoClass
}

abstract class DeviceProxyClass {

    // Own properties of GUPnP-1.0.GUPnP.DeviceProxyClass

    static name: string
}

interface DeviceProxyPrivate {
}

class DeviceProxyPrivate {

    // Own properties of GUPnP-1.0.GUPnP.DeviceProxyPrivate

    static name: string
}

interface ResourceFactoryClass {

    // Own fields of GUPnP-1.0.GUPnP.ResourceFactoryClass

    parent_class: GObject.ObjectClass
}

abstract class ResourceFactoryClass {

    // Own properties of GUPnP-1.0.GUPnP.ResourceFactoryClass

    static name: string
}

interface ResourceFactoryPrivate {
}

class ResourceFactoryPrivate {

    // Own properties of GUPnP-1.0.GUPnP.ResourceFactoryPrivate

    static name: string
}

interface RootDeviceClass {

    // Own fields of GUPnP-1.0.GUPnP.RootDeviceClass

    parent_class: DeviceClass
}

abstract class RootDeviceClass {

    // Own properties of GUPnP-1.0.GUPnP.RootDeviceClass

    static name: string
}

interface RootDevicePrivate {
}

class RootDevicePrivate {

    // Own properties of GUPnP-1.0.GUPnP.RootDevicePrivate

    static name: string
}

interface ServiceAction {

    // Owm methods of GUPnP-1.0.GUPnP.ServiceAction

    /**
     * Get the number of IN arguments from the `action` and return it.
     */
    get_argument_count(): number
    /**
     * Retrieves the value of `argument` into a GValue of type `type` and returns it.
     * The method exists only and only to satify PyGI, please use
     * gupnp_service_action_get_value() and ignore this if possible.
     * @param argument The name of the argument to retrieve
     * @param type The type of argument to retrieve
     */
    get_value(argument: string, type: GObject.GType): any
    /**
     * Get an ordered (preferred first) #GList of locales preferred by
     * the client. Free list and elements after use.
     */
    get_locales(): string[]
    /**
     * Get the #SoupMessage associated with `action`. Mainly intended for
     * applications to be able to read HTTP headers received from clients.
     */
    get_message(): Soup.Message
    /**
     * Get the name of `action`.
     */
    get_name(): string
    /**
     * A variant of #gupnp_service_action_get that uses #GList instead of varargs.
     * @param arg_names A #GList of argument names as string
     * @param arg_types A #GList of argument types as #GType
     */
    get_values(arg_names: string[], arg_types: GObject.GType[]): any[]
    /**
     * Return succesfully.
     */
    return(): void
    /**
     * Return `error_code`.
     * @param error_code The error code
     * @param error_description The error description, or %NULL if `error_code` is one of #GUPNP_CONTROL_ERROR_INVALID_ACTION, #GUPNP_CONTROL_ERROR_INVALID_ARGS, #GUPNP_CONTROL_ERROR_OUT_OF_SYNC or #GUPNP_CONTROL_ERROR_ACTION_FAILED, in which case a description is provided automatically.
     */
    return_error(error_code: number, error_description: string): void
    /**
     * Sets the value of `argument` to `value`.
     * @param argument The name of the return value to retrieve
     * @param value The #GValue to store the return value
     */
    set_value(argument: string, value: any): void
    /**
     * Sets the specified action return values.
     * @param arg_names A #GList of argument names
     * @param arg_values The #GList of values (as #GValues) that line up with `arg_names`.
     */
    set_values(arg_names: string[], arg_values: any[]): void
}

/**
 * Opaque structure for holding in-progress action data.
 * @record 
 */
class ServiceAction {

    // Own properties of GUPnP-1.0.GUPnP.ServiceAction

    static name: string
}

interface ServiceActionArgInfo {

    // Own fields of GUPnP-1.0.GUPnP.ServiceActionArgInfo

    /**
     * The name of the action argument.
     * @field 
     */
    name: string
    /**
     * The direction of the action argument.
     * @field 
     */
    direction: ServiceActionArgDirection
    /**
     * The name of the state variable associated with this
     * argument.
     * @field 
     */
    related_state_variable: string
    /**
     * Whether this argument is the return value of the action.
     * @field 
     */
    retval: boolean
}

/**
 * This structure contains information about the argument of service action.
 * @record 
 */
class ServiceActionArgInfo {

    // Own properties of GUPnP-1.0.GUPnP.ServiceActionArgInfo

    static name: string
}

interface ServiceActionInfo {

    // Own fields of GUPnP-1.0.GUPnP.ServiceActionInfo

    /**
     * The name of the action argument.
     * @field 
     */
    name: string
    /**
     * A GList of all the arguments
     * (of type #GUPnPServiceActionArgInfo) of this action.
     * @field 
     */
    arguments_: ServiceActionArgInfo[]
}

/**
 * This structure contains information about a service action.
 * @record 
 */
class ServiceActionInfo {

    // Own properties of GUPnP-1.0.GUPnP.ServiceActionInfo

    static name: string
}

interface ServiceClass {

    // Own fields of GUPnP-1.0.GUPnP.ServiceClass

    parent_class: ServiceInfoClass
    action_invoked: (service: Service, action: ServiceAction) => void
    query_variable: (service: Service, variable: string, value: any) => void
}

abstract class ServiceClass {

    // Own properties of GUPnP-1.0.GUPnP.ServiceClass

    static name: string
}

interface ServiceInfoClass {

    // Own fields of GUPnP-1.0.GUPnP.ServiceInfoClass

    parent_class: GObject.ObjectClass
}

abstract class ServiceInfoClass {

    // Own properties of GUPnP-1.0.GUPnP.ServiceInfoClass

    static name: string
}

interface ServiceInfoPrivate {
}

class ServiceInfoPrivate {

    // Own properties of GUPnP-1.0.GUPnP.ServiceInfoPrivate

    static name: string
}

interface ServiceIntrospectionClass {

    // Own fields of GUPnP-1.0.GUPnP.ServiceIntrospectionClass

    parent_class: GObject.ObjectClass
}

abstract class ServiceIntrospectionClass {

    // Own properties of GUPnP-1.0.GUPnP.ServiceIntrospectionClass

    static name: string
}

interface ServiceIntrospectionPrivate {
}

class ServiceIntrospectionPrivate {

    // Own properties of GUPnP-1.0.GUPnP.ServiceIntrospectionPrivate

    static name: string
}

interface ServicePrivate {
}

class ServicePrivate {

    // Own properties of GUPnP-1.0.GUPnP.ServicePrivate

    static name: string
}

interface ServiceProxyAction {
}

/**
 * Opaque structure for holding in-progress action data.
 * @record 
 */
class ServiceProxyAction {

    // Own properties of GUPnP-1.0.GUPnP.ServiceProxyAction

    static name: string
}

interface ServiceProxyClass {

    // Own fields of GUPnP-1.0.GUPnP.ServiceProxyClass

    parent_class: ServiceInfoClass
    subscription_lost: (proxy: ServiceProxy, reason: GLib.Error) => void
}

abstract class ServiceProxyClass {

    // Own properties of GUPnP-1.0.GUPnP.ServiceProxyClass

    static name: string
}

interface ServiceProxyPrivate {
}

class ServiceProxyPrivate {

    // Own properties of GUPnP-1.0.GUPnP.ServiceProxyPrivate

    static name: string
}

interface ServiceStateVariableInfo {

    // Own fields of GUPnP-1.0.GUPnP.ServiceStateVariableInfo

    /**
     * The name of the state variable.
     * @field 
     */
    name: string
    /**
     * Whether this state variable can source events.
     * @field 
     */
    send_events: boolean
    /**
     * Wether this state variable is a numeric type (integer and
     * float).
     * @field 
     */
    is_numeric: boolean
    /**
     * The GType of this state variable.
     * @field 
     */
    type: GObject.GType
    /**
     * The default value of this state variable.
     * @field 
     */
    default_value: any
    /**
     * The minimum value of this state variable. Only applies to numeric
     * data types.
     * @field 
     */
    minimum: any
    /**
     * The maximum value of this state variable. Only applies to numeric
     * data types.
     * @field 
     */
    maximum: any
    /**
     * The step value of this state variable. Only applies to numeric
     * data types.
     * @field 
     */
    step: any
    /**
     * The allowed values of this state variable. Only applies to
     * string data types. Unlike the other fields in this structure, this field
     * contains a list of (char *) strings rather than GValues.
     * @field 
     */
    allowed_values: string[]
}

/**
 * This structure contains information about service state variable.
 * @record 
 */
class ServiceStateVariableInfo {

    // Own properties of GUPnP-1.0.GUPnP.ServiceStateVariableInfo

    static name: string
}

interface WhiteListClass {

    // Own fields of GUPnP-1.0.GUPnP.WhiteListClass

    parent_class: GObject.ObjectClass
}

abstract class WhiteListClass {

    // Own properties of GUPnP-1.0.GUPnP.WhiteListClass

    static name: string
}

interface WhiteListPrivate {
}

class WhiteListPrivate {

    // Own properties of GUPnP-1.0.GUPnP.WhiteListPrivate

    static name: string
}

interface XMLDocClass {

    // Own fields of GUPnP-1.0.GUPnP.XMLDocClass

    parent_class: GObject.ObjectClass
}

abstract class XMLDocClass {

    // Own properties of GUPnP-1.0.GUPnP.XMLDocClass

    static name: string
}

}
export default GUPnP;