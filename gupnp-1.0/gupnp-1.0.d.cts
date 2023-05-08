
/*
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in `ts-for-gir` or create a bug report on https://github.com/gjsify/ts-for-gir
 */
/**
 * GUPnP-1.0
 */

import type libxml2 from '@girs/libxml2-2.0';
import type Soup from '@girs/soup-2.4';
import type Gio from '@girs/gio-2.0';
import type GObject from '@girs/gobject-2.0';
import type GLib from '@girs/glib-2.0';
import type GSSDP from '@girs/gssdp-1.0';

/**
 * #GError codes used for errors in the #GUPNP_CONTROL_ERROR domain, during
 * invocation of service actions.
 */
export enum ControlError {
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
export enum EventingError {
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
export enum ServerError {
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
export enum ServiceActionArgDirection {
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
export enum XMLError {
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
export function control_error_quark(): GLib.Quark
export function eventing_error_quark(): GLib.Quark
/**
 * Generate and return a new UUID.
 * @returns A newly generated UUID in string representation.
 */
export function get_uuid(): string | null
export function server_error_quark(): GLib.Quark
export function xml_error_quark(): GLib.Quark
/**
 * Callback notifying that `introspection` for `info` has been obtained.
 * @callback 
 * @param info The #GUPnPServiceInfo introspection was requested for
 * @param introspection The new #GUPnPServiceIntrospection object, or NULL
 * @param error The #GError that occurred, or NULL
 */
export interface ServiceIntrospectionCallback {
    (info: ServiceInfo, introspection: ServiceIntrospection, error: GLib.Error): void
}
/**
 * Callback notifying that `action` on `proxy` has returned and
 * gupnp_service_proxy_end_action() etc can be called.
 * @callback 
 * @param proxy The #GUPnPServiceProxy `action` is called from
 * @param action The #GUPnPServiceProxyAction in progress
 */
export interface ServiceProxyActionCallback {
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
export interface ServiceProxyNotifyCallback {
    (proxy: ServiceProxy, variable: string | null, value: any): void
}
export module Acl {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

export interface Acl {

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
    is_allowed(device: any | null, service: any | null, path: string | null, address: string | null, agent: string | null): boolean
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
    is_allowed_async(device: any | null, service: any | null, path: string | null, address: string | null, agent: string | null, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void

    // Overloads of is_allowed_async

    /**
     * Promisified version of {@link is_allowed_async}
     * 
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
     * @returns A Promise of the result of {@link is_allowed_async}
     */
    is_allowed_async(device: any | null, service: any | null, path: string | null, address: string | null, agent: string | null, cancellable: Gio.Cancellable | null): globalThis.Promise<boolean>
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
    vfunc_is_allowed(device: any | null, service: any | null, path: string | null, address: string | null, agent: string | null): boolean
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
    vfunc_is_allowed_async(device: any | null, service: any | null, path: string | null, address: string | null, agent: string | null, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void
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
export class Acl extends GObject.Object {

    // Own properties of GUPnP-1.0.GUPnP.Acl

    static name: string
    static $gtype: GObject.GType<Acl>

    // Constructors of GUPnP-1.0.GUPnP.Acl

    constructor(config?: Acl.ConstructorProperties) 
    _init(config?: Acl.ConstructorProperties): void
}

export module Context {

    // Constructor properties interface

    export interface ConstructorProperties extends Gio.Initable.ConstructorProperties, GSSDP.Client.ConstructorProperties {

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

}

export interface Context extends Gio.Initable {

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
    default_language: string | null
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

    parent: GSSDP.Client & GObject.Object
    priv: any

    // Owm methods of GUPnP-1.0.GUPnP.Context

    /**
     * Add a #SoupServerCallback to the #GUPnPContext<!-- -->'s #SoupServer.
     * @param use_acl %TRUE, if the path should query the GUPnPContext::acl before serving the resource, %FALSE otherwise.
     * @param path the toplevel path for the handler.
     * @param callback callback to invoke for requests under `path`
     */
    add_server_handler(use_acl: boolean, path: string | null, callback: Soup.ServerCallback): void
    get_acl(): Acl
    /**
     * Get the default Content-Language header for this context.
     * @returns The default content of the Content-Language header.
     */
    get_default_language(): string | null
    /**
     * Get the IP address we advertise ourselves as using.
     * @returns The IP address. This string should not be freed.
     */
    get_host_ip(): string | null
    /**
     * Get the port that the SOAP server is running on.
     * @returns The port the SOAP server is running on.
     */
    get_port(): number
    /**
     * Get the #SoupServer HTTP server that GUPnP is using.
     * @returns The #SoupServer used by GUPnP. Do not unref this when finished.
     */
    get_server(): Soup.Server
    /**
     * Get the #SoupSession object that GUPnP is using.
     * @returns The #SoupSession used by GUPnP. Do not unref this when finished.
     */
    get_session(): Soup.Session
    /**
     * Get the event subscription timeout (in seconds), or 0 meaning there is no
     * timeout.
     * @returns The event subscription timeout in seconds.
     */
    get_subscription_timeout(): number
    /**
     * Start hosting `local_path` at `server_path`. Files with the path
     * `local_path`.LOCALE (if they exist) will be served up when LOCALE is
     * specified in the request's Accept-Language header.
     * @param local_path Path to the local file or folder to be hosted
     * @param server_path Web server path where `local_path` should be hosted
     */
    host_path(local_path: string | null, server_path: string | null): void
    /**
     * Use this method to serve different local path to specific user-agent(s). The
     * path `server_path` must already be hosted by `context`.
     * @param local_path Path to the local file or folder to be hosted
     * @param server_path Web server path already being hosted
     * @param user_agent The user-agent as a #GRegex.
     * @returns %TRUE on success, %FALSE otherwise.
     */
    host_path_for_agent(local_path: string | null, server_path: string | null, user_agent: GLib.Regex): boolean
    /**
     * Remove a #SoupServerCallback from the #GUPnPContext<!-- -->'s #SoupServer.
     * @param path the toplevel path for the handler.
     */
    remove_server_handler(path: string | null): void
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
    set_default_language(language: string | null): void
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
    unhost_path(server_path: string | null): void

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
export class Context extends GSSDP.Client {

    // Own properties of GUPnP-1.0.GUPnP.Context

    static name: string
    static $gtype: GObject.GType<Context>

    // Constructors of GUPnP-1.0.GUPnP.Context

    constructor(config?: Context.ConstructorProperties) 
    /**
     * Create a new #GUPnPContext with the specified `main_context,` `iface` and
     * `port`.
     * @constructor 
     * @param main_context Deprecated: 0.17.2: Always set to %NULL. If you want to use a different context, use g_main_context_push_thread_default().
     * @param iface The network interface to use, or %NULL to auto-detect.
     * @param port Port to run on, or 0 if you don't care what port is used.
     * @returns A new #GUPnPContext object, or %NULL on an error
     */
    constructor(main_context: GLib.MainContext | null, iface: string | null, port: number) 
    /**
     * Create a new #GUPnPContext with the specified `main_context,` `iface` and
     * `port`.
     * @constructor 
     * @param main_context Deprecated: 0.17.2: Always set to %NULL. If you want to use a different context, use g_main_context_push_thread_default().
     * @param iface The network interface to use, or %NULL to auto-detect.
     * @param port Port to run on, or 0 if you don't care what port is used.
     * @returns A new #GUPnPContext object, or %NULL on an error
     */
    static new(main_context: GLib.MainContext | null, iface: string | null, port: number): Context

    // Overloads of new

    static new(main_context: GLib.MainContext | null, iface: string | null): GSSDP.Client
    _init(config?: Context.ConstructorProperties): void
}

export module ContextManager {

    // Signal callback interfaces

    /**
     * Signal callback interface for `context-available`
     */
    export interface ContextAvailableSignalCallback {
        ($obj: ContextManager, context: Context): void
    }

    /**
     * Signal callback interface for `context-unavailable`
     */
    export interface ContextUnavailableSignalCallback {
        ($obj: ContextManager, context: Context): void
    }


    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of GUPnP-1.0.GUPnP.ContextManager

        main_context?: any | null
        /**
         * Port the contexts listen on, or 0 if you don't care what
         * port is used by #GUPnPContext objects created by this object.
         */
        port?: number | null
    }

}

export interface ContextManager {

    // Own properties of GUPnP-1.0.GUPnP.ContextManager

    readonly main_context: any
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
     * @returns The network port asssociated with this context manager.
     */
    get_port(): number
    /**
     * Get the #GUPnPWhiteList associated with `manager`.
     * @returns The #GUPnPWhiteList asssociated with this context manager.
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

    connect(sigName: "context-available", callback: ContextManager.ContextAvailableSignalCallback): number
    connect_after(sigName: "context-available", callback: ContextManager.ContextAvailableSignalCallback): number
    emit(sigName: "context-available", context: Context, ...args: any[]): void
    connect(sigName: "context-unavailable", callback: ContextManager.ContextUnavailableSignalCallback): number
    connect_after(sigName: "context-unavailable", callback: ContextManager.ContextUnavailableSignalCallback): number
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
export class ContextManager extends GObject.Object {

    // Own properties of GUPnP-1.0.GUPnP.ContextManager

    static name: string
    static $gtype: GObject.GType<ContextManager>

    // Constructors of GUPnP-1.0.GUPnP.ContextManager

    constructor(config?: ContextManager.ConstructorProperties) 
    /**
     * Same as gupnp_context_manager_create().
     * @constructor 
     * @param main_context Deprecated: 0.17.2: %NULL. If you want to use                a different main context use                g_main_context_push_thread_default() instead.
     * @param port Port to create contexts for, or 0 if you don't care what port is used.
     * @returns A new #GUPnPContextManager object.
     */
    constructor(main_context: GLib.MainContext | null, port: number) 
    /**
     * Same as gupnp_context_manager_create().
     * @constructor 
     * @param main_context Deprecated: 0.17.2: %NULL. If you want to use                a different main context use                g_main_context_push_thread_default() instead.
     * @param port Port to create contexts for, or 0 if you don't care what port is used.
     * @returns A new #GUPnPContextManager object.
     */
    static new(main_context: GLib.MainContext | null, port: number): ContextManager
    _init(config?: ContextManager.ConstructorProperties): void
    /**
     * Factory-method to create a new #GUPnPContextManager. The final type of the
     * #GUPnPContextManager depends on the compile-time selection or - in case of
     * NetworkManager - on its availability during runtime. If it is not available,
     * the implementation falls back to the basic Unix context manager instead.
     * @param port Port to create contexts for, or 0 if you don't care what port is used.
     * @returns A new #GUPnPContextManager object.
     */
    static create(port: number): ContextManager
}

export module ControlPoint {

    // Signal callback interfaces

    /**
     * Signal callback interface for `device-proxy-available`
     */
    export interface DeviceProxyAvailableSignalCallback {
        ($obj: ControlPoint, proxy: DeviceProxy): void
    }

    /**
     * Signal callback interface for `device-proxy-unavailable`
     */
    export interface DeviceProxyUnavailableSignalCallback {
        ($obj: ControlPoint, proxy: DeviceProxy): void
    }

    /**
     * Signal callback interface for `service-proxy-available`
     */
    export interface ServiceProxyAvailableSignalCallback {
        ($obj: ControlPoint, proxy: ServiceProxy): void
    }

    /**
     * Signal callback interface for `service-proxy-unavailable`
     */
    export interface ServiceProxyUnavailableSignalCallback {
        ($obj: ControlPoint, proxy: ServiceProxy): void
    }


    // Constructor properties interface

    export interface ConstructorProperties extends GSSDP.ResourceBrowser.ConstructorProperties {

        // Own constructor properties of GUPnP-1.0.GUPnP.ControlPoint

        /**
         * The resource factory to use. Set to NULL for default factory.
         */
        resource_factory?: ResourceFactory | null
    }

}

export interface ControlPoint {

    // Own properties of GUPnP-1.0.GUPnP.ControlPoint

    /**
     * The resource factory to use. Set to NULL for default factory.
     */
    readonly resource_factory: ResourceFactory

    // Own fields of GUPnP-1.0.GUPnP.ControlPoint

    parent: GSSDP.ResourceBrowser & GObject.Object
    priv: any

    // Owm methods of GUPnP-1.0.GUPnP.ControlPoint

    /**
     * Get the #GUPnPControlPoint associated with `control_point`.
     * @returns The #GUPnPContext.
     */
    get_context(): Context
    /**
     * Get the #GUPnPResourceFactory used by the `control_point`.
     * @returns A #GUPnPResourceFactory.
     */
    get_resource_factory(): ResourceFactory
    /**
     * Get the #GList of discovered #GUPnPDeviceProxy objects. Do not free the list
     * nor its elements.
     * @returns a #GList of #GUPnPDeviceProxy objects.
     */
    list_device_proxies(): DeviceProxy[]
    /**
     * Get the #GList of discovered #GUPnPServiceProxy objects. Do not free the
     * list nor its elements.
     * @returns a #GList of #GUPnPServiceProxy objects.
     */
    list_service_proxies(): ServiceProxy[]

    // Own virtual methods of GUPnP-1.0.GUPnP.ControlPoint

    vfunc_device_proxy_available(proxy: DeviceProxy): void
    vfunc_device_proxy_unavailable(proxy: DeviceProxy): void
    vfunc_service_proxy_available(proxy: ServiceProxy): void
    vfunc_service_proxy_unavailable(proxy: ServiceProxy): void

    // Own signals of GUPnP-1.0.GUPnP.ControlPoint

    connect(sigName: "device-proxy-available", callback: ControlPoint.DeviceProxyAvailableSignalCallback): number
    connect_after(sigName: "device-proxy-available", callback: ControlPoint.DeviceProxyAvailableSignalCallback): number
    emit(sigName: "device-proxy-available", proxy: DeviceProxy, ...args: any[]): void
    connect(sigName: "device-proxy-unavailable", callback: ControlPoint.DeviceProxyUnavailableSignalCallback): number
    connect_after(sigName: "device-proxy-unavailable", callback: ControlPoint.DeviceProxyUnavailableSignalCallback): number
    emit(sigName: "device-proxy-unavailable", proxy: DeviceProxy, ...args: any[]): void
    connect(sigName: "service-proxy-available", callback: ControlPoint.ServiceProxyAvailableSignalCallback): number
    connect_after(sigName: "service-proxy-available", callback: ControlPoint.ServiceProxyAvailableSignalCallback): number
    emit(sigName: "service-proxy-available", proxy: ServiceProxy, ...args: any[]): void
    connect(sigName: "service-proxy-unavailable", callback: ControlPoint.ServiceProxyUnavailableSignalCallback): number
    connect_after(sigName: "service-proxy-unavailable", callback: ControlPoint.ServiceProxyUnavailableSignalCallback): number
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
export class ControlPoint extends GSSDP.ResourceBrowser {

    // Own properties of GUPnP-1.0.GUPnP.ControlPoint

    static name: string
    static $gtype: GObject.GType<ControlPoint>

    // Constructors of GUPnP-1.0.GUPnP.ControlPoint

    constructor(config?: ControlPoint.ConstructorProperties) 
    /**
     * Create a new #GUPnPControlPoint with the specified `context` and `target`.
     * 
     * `target` should be a service or device name, such as
     * <literal>urn:schemas-upnp-org:service:WANIPConnection:1</literal> or
     * <literal>urn:schemas-upnp-org:device:MediaRenderer:1</literal>.
     * @constructor 
     * @param context A #GUPnPContext
     * @param target The search target
     * @returns A new #GUPnPControlPoint object.
     */
    constructor(context: Context, target: string | null) 
    /**
     * Create a new #GUPnPControlPoint with the specified `context` and `target`.
     * 
     * `target` should be a service or device name, such as
     * <literal>urn:schemas-upnp-org:service:WANIPConnection:1</literal> or
     * <literal>urn:schemas-upnp-org:device:MediaRenderer:1</literal>.
     * @constructor 
     * @param context A #GUPnPContext
     * @param target The search target
     * @returns A new #GUPnPControlPoint object.
     */
    static new(context: Context, target: string | null): ControlPoint

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
     * @returns A new #GSSDPResourceBrowser object.
     */
    static new(client: GSSDP.Client, target: string | null): GSSDP.ResourceBrowser
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
     * @returns A new #GUPnPControlPoint object.
     */
    static new_full(context: Context, factory: ResourceFactory, target: string | null): ControlPoint
    _init(config?: ControlPoint.ConstructorProperties): void
}

export module Device {

    // Constructor properties interface

    export interface ConstructorProperties extends DeviceInfo.ConstructorProperties {

        // Own constructor properties of GUPnP-1.0.GUPnP.Device

        /**
         * The containing #GUPnPRootDevice, or NULL if this is the root
         * device.
         */
        root_device?: RootDevice | null
    }

}

export interface Device {

    // Own properties of GUPnP-1.0.GUPnP.Device

    /**
     * The containing #GUPnPRootDevice, or NULL if this is the root
     * device.
     */
    readonly root_device: RootDevice

    // Own fields of GUPnP-1.0.GUPnP.Device

    parent: DeviceInfo & GObject.Object
    priv: any

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
export class Device extends DeviceInfo {

    // Own properties of GUPnP-1.0.GUPnP.Device

    static name: string
    static $gtype: GObject.GType<Device>

    // Constructors of GUPnP-1.0.GUPnP.Device

    constructor(config?: Device.ConstructorProperties) 
    _init(config?: Device.ConstructorProperties): void
}

export module DeviceInfo {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

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
        element?: any | null
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

}

export interface DeviceInfo {

    // Own properties of GUPnP-1.0.GUPnP.DeviceInfo

    /**
     * The #GUPnPContext to use.
     */
    readonly context: Context
    /**
     * The device type.
     */
    readonly device_type: string | null
    /**
     * Private property.
     */
    readonly document: XMLDoc
    /**
     * Private property.
     */
    readonly element: any
    /**
     * The location of the device description file.
     */
    readonly location: string | null
    /**
     * The resource factory to use. Set to NULL for default factory.
     */
    readonly resource_factory: ResourceFactory
    /**
     * The UDN of this device.
     */
    readonly udn: string | null
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
     * @returns A #GUPnPContext.
     */
    get_context(): Context
    /**
     * This function provides generic access to the contents of arbitrary elements
     * in the device description file.
     * @param element Name of the description element to retrieve
     * @returns a newly allocated string or %NULL if the device               description doesn't contain the given @element
     */
    get_description_value(element: string | null): string | null
    /**
     * Get the service with type `type` directly contained in `info` as
     * a new object implementing #GUPnPDeviceInfo, or %NULL if no such device
     * was found. The returned object should be unreffed when done.
     * 
     * Note that devices are not cached internally, so that every time you call
     * this function a new object is created. The application must cache any used
     * devices if it wishes to keep them around and re-use them.
     * @param type The type of the device to be retrieved.
     * @returns A new #GUPnPDeviceInfo.
     */
    get_device(type: string | null): DeviceInfo | null
    /**
     * Get the UPnP device type.
     * @returns A constant string, or %NULL.
     */
    get_device_type(): string | null
    /**
     * Get the friendly name of the device.
     * @returns A string, or %NULL. g_free() after use.
     */
    get_friendly_name(): string | null
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
     * @returns a string, or %NULL.  g_free() after use.
     */
    get_icon_url(requested_mime_type: string | null, requested_depth: number, requested_width: number, requested_height: number, prefer_bigger: boolean): [ /* returnType */ string | null, /* mime_type */ string | null, /* depth */ number, /* width */ number, /* height */ number ]
    /**
     * Get the location of the device description file.
     * @returns A constant string.
     */
    get_location(): string | null
    /**
     * Get the manufacturer of the device.
     * @returns A string, or %NULL. g_free() after use.
     */
    get_manufacturer(): string | null
    /**
     * Get a URL pointing to the manufacturer's website.
     * @returns A string, or %NULL. g_free() after use.
     */
    get_manufacturer_url(): string | null
    /**
     * Get the description of the device model.
     * @returns A string, or %NULL. g_free() after use.
     */
    get_model_description(): string | null
    /**
     * Get the model name of the device.
     * @returns A string, or %NULL. g_free() after use.
     */
    get_model_name(): string | null
    /**
     * Get the model number of the device.
     * @returns A string, or %NULL. g_free() after use.
     */
    get_model_number(): string | null
    /**
     * Get a URL pointing to the device model's website.
     * @returns A string, or %NULL. g_free() after use.
     */
    get_model_url(): string | null
    /**
     * Get a URL pointing to the device's presentation page, for web-based
     * administration.
     * @returns A string, or %NULL. g_free() after use.
     */
    get_presentation_url(): string | null
    /**
     * Get the #GUPnPResourceFactory used by the `device_info`.
     * @returns A #GUPnPResourceFactory.
     */
    get_resource_factory(): ResourceFactory
    /**
     * Get the serial number of the device.
     * @returns A string, or %NULL. g_free() after use.
     */
    get_serial_number(): string | null
    /**
     * Get the service with type `type` directly contained in `info` as a new object
     * implementing #GUPnPServiceInfo, or %NULL if no such device was found. The
     * returned object should be unreffed when done.
     * 
     * Note that services are not cached internally, so that every time you call
     * this function a new object is created. The application must cache any used
     * services if it wishes to keep them around and re-use them.
     * @param type The type of the service to be retrieved.
     * @returns A #GUPnPServiceInfo.
     */
    get_service(type: string | null): ServiceInfo
    /**
     * Get the Unique Device Name of the device.
     * @returns A constant string.
     */
    get_udn(): string | null
    /**
     * Get the Universal Product Code of the device.
     * @returns A string, or %NULL. g_free() after use.
     */
    get_upc(): string | null
    /**
     * Get the URL base of this device.
     * @returns A #SoupURI.
     */
    get_url_base(): Soup.URI
    /**
     * Get a #GList of strings representing the types of the devices
     * directly contained in `info`.
     * @returns A #GList of strings. The elements should be g_free()'d and the list should be g_list_free()'d.
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
     * @returns a #GList of new #GUPnPDeviceInfo objects.
     */
    list_devices(): DeviceInfo[]
    /**
     * Get a #GList of strings that represent the device capabilities as announced
     * in the device description file using the &lt;dlna:X_DLNACAP&gt; element.
     * @returns a #GList of newly allocated strings or %NULL if the device description doesn't contain the &lt;dlna:X_DLNACAP&gt; element.
     */
    list_dlna_capabilities(): string[]
    /**
     * Get a #GList of strings that represent the device class and version as
     * announced in the device description file using the &lt;dlna:X_DLNADOC&gt;
     * element.
     * @returns a #GList of newly allocated strings or %NULL if the device description doesn't contain the &lt;dlna:X_DLNADOC&gt; element.
     */
    list_dlna_device_class_identifier(): string[]
    /**
     * Get a #GList of strings representing the types of the services
     * directly contained in `info`.
     * @returns A #GList of strings. The elements should be g_free()'d and the list should be g_list_free()'d.
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
     * @returns A #GList of new #GUPnPServiceInfo objects.
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
export class DeviceInfo extends GObject.Object {

    // Own properties of GUPnP-1.0.GUPnP.DeviceInfo

    static name: string
    static $gtype: GObject.GType<DeviceInfo>

    // Constructors of GUPnP-1.0.GUPnP.DeviceInfo

    constructor(config?: DeviceInfo.ConstructorProperties) 
    _init(config?: DeviceInfo.ConstructorProperties): void
}

export module DeviceProxy {

    // Constructor properties interface

    export interface ConstructorProperties extends DeviceInfo.ConstructorProperties {
    }

}

export interface DeviceProxy {

    // Own fields of GUPnP-1.0.GUPnP.DeviceProxy

    parent: DeviceInfo & GObject.Object
    priv: any

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
export class DeviceProxy extends DeviceInfo {

    // Own properties of GUPnP-1.0.GUPnP.DeviceProxy

    static name: string
    static $gtype: GObject.GType<DeviceProxy>

    // Constructors of GUPnP-1.0.GUPnP.DeviceProxy

    constructor(config?: DeviceProxy.ConstructorProperties) 
    _init(config?: DeviceProxy.ConstructorProperties): void
}

export module ResourceFactory {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

export interface ResourceFactory {

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
    register_resource_proxy_type(upnp_type: string | null, type: GObject.GType): void
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
    register_resource_type(upnp_type: string | null, type: GObject.GType): void
    /**
     * Unregisters the GType assignment for the proxy of resource of UPnP type
     * `upnp_type`.
     * @param upnp_type The UPnP type name of the resource.
     * @returns %TRUE if GType assignment was removed successfully, %FALSE otherwise.
     */
    unregister_resource_proxy_type(upnp_type: string | null): boolean
    /**
     * Unregisters the GType assignment for the resource of UPnP type `upnp_type`.
     * @param upnp_type The UPnP type name of the resource.
     * @returns %TRUE if GType assignment was removed successfully, %FALSE otherwise.
     */
    unregister_resource_type(upnp_type: string | null): boolean

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
export class ResourceFactory extends GObject.Object {

    // Own properties of GUPnP-1.0.GUPnP.ResourceFactory

    static name: string
    static $gtype: GObject.GType<ResourceFactory>

    // Constructors of GUPnP-1.0.GUPnP.ResourceFactory

    constructor(config?: ResourceFactory.ConstructorProperties) 
    /**
     * Create a new #GUPnPResourceFactory object.
     * @constructor 
     * @returns A #GUPnPResourceFactory object.
     */
    constructor() 
    /**
     * Create a new #GUPnPResourceFactory object.
     * @constructor 
     * @returns A #GUPnPResourceFactory object.
     */
    static new(): ResourceFactory
    _init(config?: ResourceFactory.ConstructorProperties): void
    /**
     * Get the default singleton #GUPnPResourceFactory object.
     * @returns A @GUPnPResourceFactory object.
     */
    static get_default(): ResourceFactory
}

export module RootDevice {

    // Constructor properties interface

    export interface ConstructorProperties extends Device.ConstructorProperties {

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

}

export interface RootDevice {

    // Own properties of GUPnP-1.0.GUPnP.RootDevice

    /**
     * TRUE if this device is available.
     */
    available: boolean
    /**
     * The path to directory where description documents are provided.
     */
    readonly description_dir: string | null
    /**
     * Device description document. Constructor property.
     */
    readonly description_doc: XMLDoc
    /**
     * The path to device description document. This could either be an
     * absolute path or path relative to GUPnPRootDevice:description-dir.
     */
    readonly description_path: string | null

    // Own fields of GUPnP-1.0.GUPnP.RootDevice

    parent: Device & DeviceInfo & GObject.Object & GObject.Object
    priv: any

    // Owm methods of GUPnP-1.0.GUPnP.RootDevice

    /**
     * Get whether or not `root_device` is available (announcing its presence).
     * @returns %TRUE if @root_device is available, %FALSE otherwise.
     */
    get_available(): boolean
    /**
     * Get the path to the directory containing description documents related to
     * `root_device`.
     * @returns The path to description document directory of @root_device.
     */
    get_description_dir(): string | null
    /**
     * Get the path to the device description document of `root_device`.
     * @returns The path to device description document of @root_device.
     */
    get_description_path(): string | null
    /**
     * Get the relative location of `root_device`.
     * @returns The relative location of @root_device.
     */
    get_relative_location(): string | null
    /**
     * Get the #GSSDPResourceGroup used by `root_device`.
     * @returns The #GSSDPResourceGroup of @root_device.
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
export class RootDevice extends Device {

    // Own properties of GUPnP-1.0.GUPnP.RootDevice

    static name: string
    static $gtype: GObject.GType<RootDevice>

    // Constructors of GUPnP-1.0.GUPnP.RootDevice

    constructor(config?: RootDevice.ConstructorProperties) 
    /**
     * Create a new #GUPnPRootDevice object, automatically loading and parsing
     * device description document from `description_path`.
     * @constructor 
     * @param context The #GUPnPContext
     * @param description_path Path to device description document. This could either be an absolute path or path relative to `description_dir`.
     * @param description_dir Path to directory where description documents are provided.
     * @returns A new @GUPnPRootDevice object.
     */
    constructor(context: Context, description_path: string | null, description_dir: string | null) 
    /**
     * Create a new #GUPnPRootDevice object, automatically loading and parsing
     * device description document from `description_path`.
     * @constructor 
     * @param context The #GUPnPContext
     * @param description_path Path to device description document. This could either be an absolute path or path relative to `description_dir`.
     * @param description_dir Path to directory where description documents are provided.
     * @returns A new @GUPnPRootDevice object.
     */
    static new(context: Context, description_path: string | null, description_dir: string | null): RootDevice
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
     * @returns A new #GUPnPRootDevice object.
     */
    static new_full(context: Context, factory: ResourceFactory, description_doc: XMLDoc, description_path: string | null, description_dir: string | null): RootDevice
    _init(config?: RootDevice.ConstructorProperties): void
}

export module Service {

    // Signal callback interfaces

    /**
     * Signal callback interface for `action-invoked`
     */
    export interface ActionInvokedSignalCallback {
        ($obj: Service, action: ServiceAction): void
    }

    /**
     * Signal callback interface for `notify-failed`
     */
    export interface NotifyFailedSignalCallback {
        ($obj: Service, callback_url: Soup.URI[], reason: GLib.Error): void
    }

    /**
     * Signal callback interface for `query-variable`
     */
    export interface QueryVariableSignalCallback {
        ($obj: Service, variable: string | null, value: any): void
    }


    // Constructor properties interface

    export interface ConstructorProperties extends ServiceInfo.ConstructorProperties {

        // Own constructor properties of GUPnP-1.0.GUPnP.Service

        /**
         * The containing #GUPnPRootDevice.
         */
        root_device?: RootDevice | null
    }

}

export interface Service {

    // Own properties of GUPnP-1.0.GUPnP.Service

    /**
     * The containing #GUPnPRootDevice.
     */
    readonly root_device: RootDevice

    // Own fields of GUPnP-1.0.GUPnP.Service

    parent: ServiceInfo & GObject.Object
    priv: any

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
    notify_value(variable: string | null, value: any): void
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
    signals_autoconnect(user_data: any | null): void
    /**
     * Sends out any pending notifications, and stops queuing of new ones.
     */
    thaw_notify(): void

    // Own virtual methods of GUPnP-1.0.GUPnP.Service

    vfunc_action_invoked(action: ServiceAction): void
    vfunc_query_variable(variable: string | null, value: any): void

    // Own signals of GUPnP-1.0.GUPnP.Service

    connect(sigName: "action-invoked", callback: Service.ActionInvokedSignalCallback): number
    connect_after(sigName: "action-invoked", callback: Service.ActionInvokedSignalCallback): number
    emit(sigName: "action-invoked", action: ServiceAction, ...args: any[]): void
    connect(sigName: "notify-failed", callback: Service.NotifyFailedSignalCallback): number
    connect_after(sigName: "notify-failed", callback: Service.NotifyFailedSignalCallback): number
    emit(sigName: "notify-failed", callback_url: Soup.URI[], reason: GLib.Error, ...args: any[]): void
    connect(sigName: "query-variable", callback: Service.QueryVariableSignalCallback): number
    connect_after(sigName: "query-variable", callback: Service.QueryVariableSignalCallback): number
    emit(sigName: "query-variable", variable: string | null, value: any, ...args: any[]): void

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
export class Service extends ServiceInfo {

    // Own properties of GUPnP-1.0.GUPnP.Service

    static name: string
    static $gtype: GObject.GType<Service>

    // Constructors of GUPnP-1.0.GUPnP.Service

    constructor(config?: Service.ConstructorProperties) 
    _init(config?: Service.ConstructorProperties): void
}

export module ServiceInfo {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

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
        element?: any | null
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

}

export interface ServiceInfo {

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
    readonly element: any
    /**
     * The location of the device description file.
     */
    readonly location: string | null
    /**
     * The service type.
     */
    readonly service_type: string | null
    /**
     * The UDN of the containing device.
     */
    readonly udn: string | null
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
     * @returns A #GUPnPContext.
     */
    get_context(): Context
    /**
     * Get the control URL for this service, or %NULL..
     * @returns A string. This string should be freed with g_free() after use.
     */
    get_control_url(): string | null
    /**
     * Get the event subscription URL for this service, or %NULL.
     * @returns A string. This string should be freed with g_free() after use.
     */
    get_event_subscription_url(): string | null
    /**
     * Get the ID of this service, or %NULL if there is no ID.
     * @returns A string. This string should be freed with g_free() after use.
     */
    get_id(): string | null
    /**
     * Note that introspection object is created from the information in service
     * description document (SCPD) provided by the service so it can not be created
     * if the service does not provide an SCPD.
     * 
     * Warning: You  should use gupnp_service_info_get_introspection_async()
     * instead, this function re-enter the GMainloop before returning or might
     * even block.
     * @returns A new #GUPnPServiceIntrospection for this service or %NULL. Unref after use.
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
     * @returns A constant string.
     */
    get_location(): string | null
    /**
     * Get the SCPD URL for this service, or %NULL if there is no SCPD.
     * @returns A string. This string should be freed with g_free() after use.
     */
    get_scpd_url(): string | null
    /**
     * Get the UPnP service type, or %NULL.
     * @returns A constant string.
     */
    get_service_type(): string | null
    /**
     * Get the Unique Device Name of the containing device.
     * @returns A constant string.
     */
    get_udn(): string | null
    /**
     * Get the URL base of this service.
     * @returns A constant #SoupURI.
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
export class ServiceInfo extends GObject.Object {

    // Own properties of GUPnP-1.0.GUPnP.ServiceInfo

    static name: string
    static $gtype: GObject.GType<ServiceInfo>

    // Constructors of GUPnP-1.0.GUPnP.ServiceInfo

    constructor(config?: ServiceInfo.ConstructorProperties) 
    _init(config?: ServiceInfo.ConstructorProperties): void
}

export module ServiceIntrospection {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of GUPnP-1.0.GUPnP.ServiceIntrospection

        /**
         * The scpd of the device description file.
         */
        scpd?: any | null
    }

}

export interface ServiceIntrospection {

    // Own properties of GUPnP-1.0.GUPnP.ServiceIntrospection

    /**
     * The scpd of the device description file.
     */
    readonly scpd: any

    // Own fields of GUPnP-1.0.GUPnP.ServiceIntrospection

    parent: GObject.Object
    priv: ServiceIntrospectionPrivate

    // Owm methods of GUPnP-1.0.GUPnP.ServiceIntrospection

    /**
     * Returns the action by the name `action_name` in this service.
     * @param action_name The name of the action to retrieve
     * @returns the action or %NULL. Do not modify or free it.
     */
    get_action(action_name: string | null): ServiceActionInfo
    /**
     * Returns the state variable by the name `variable_name` in this service.
     * @param variable_name The name of the variable to retrieve
     * @returns the state variable or %NULL. Do not modify or free it.
     */
    get_state_variable(variable_name: string | null): ServiceStateVariableInfo
    /**
     * Returns a GList of names of all the actions in this service.
     * @returns A GList of names of all the actions or %NULL. Do not modify or free it or its contents.
     */
    list_action_names(): string[]
    /**
     * Returns a #GList of all the actions (of type #GUPnPServiceActionInfo) in
     * this service.
     * @returns A #GList of all the actions or %NULL. Do not modify or free it or its contents.
     */
    list_actions(): ServiceActionInfo[]
    /**
     * Returns a #GList of names of all the state variables in this service.
     * @returns A #GList of names of all the state variables or %NULL. Do not modify or free it or its contents.
     */
    list_state_variable_names(): string[]
    /**
     * Returns a GList of all the state variables (of type
     * #GUPnPServiceStateVariableInfo) in this service.
     * @returns  A #GList of all the state variables or %NULL. Do not modify or free it or its contents.
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
export class ServiceIntrospection extends GObject.Object {

    // Own properties of GUPnP-1.0.GUPnP.ServiceIntrospection

    static name: string
    static $gtype: GObject.GType<ServiceIntrospection>

    // Constructors of GUPnP-1.0.GUPnP.ServiceIntrospection

    constructor(config?: ServiceIntrospection.ConstructorProperties) 
    _init(config?: ServiceIntrospection.ConstructorProperties): void
}

export module ServiceProxy {

    // Signal callback interfaces

    /**
     * Signal callback interface for `subscription-lost`
     */
    export interface SubscriptionLostSignalCallback {
        ($obj: ServiceProxy, error: GLib.Error): void
    }


    // Constructor properties interface

    export interface ConstructorProperties extends ServiceInfo.ConstructorProperties {

        // Own constructor properties of GUPnP-1.0.GUPnP.ServiceProxy

        /**
         * Whether we are subscribed to this service.
         */
        subscribed?: boolean | null
    }

}

export interface ServiceProxy {

    // Own properties of GUPnP-1.0.GUPnP.ServiceProxy

    /**
     * Whether we are subscribed to this service.
     */
    subscribed: boolean

    // Own fields of GUPnP-1.0.GUPnP.ServiceProxy

    parent: ServiceInfo & GObject.Object
    priv: any

    // Owm methods of GUPnP-1.0.GUPnP.ServiceProxy

    /**
     * Sets up `callback` to be called whenever a change notification for
     * `variable` is recieved.
     * @param variable The variable to add notification for
     * @param type The type of the variable
     * @param callback The callback to call when `variable` changes
     * @returns %TRUE on success.
     */
    add_notify(variable: string | null, type: GObject.GType, callback: ServiceProxyNotifyCallback): boolean
    /**
     * Get a notification for anything that happens on the peer. `value` in
     * `callback` will be of type #G_TYPE_POINTER and contain the pre-parsed
     * #xmlDoc. Do NOT free or modify this document.
     * @param callback The callback to call when the peer issues any variable notification.
     * @returns %TRUE on success.
     */
    add_raw_notify(callback: ServiceProxyNotifyCallback): boolean
    /**
     * A variant of #gupnp_service_proxy_begin_action that takes lists of
     * in-parameter names, types and values.
     * @param action An action
     * @param in_names #GList of 'in' parameter names (as strings)
     * @param in_values #GList of values (as #GValue) that line up with `in_names`
     * @param callback The callback to call when sending the action has succeeded or failed
     * @returns A #GUPnPServiceProxyAction handle. This will be freed when calling gupnp_service_proxy_cancel_action() or gupnp_service_proxy_end_action_list().
     */
    begin_action_list(action: string | null, in_names: string[], in_values: any[], callback: ServiceProxyActionCallback): ServiceProxyAction
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
     * @returns %TRUE on success.
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
     * @returns %TRUE on success.
     */
    end_action_list(action: ServiceProxyAction, out_names: string[], out_types: GObject.GType[]): [ /* returnType */ boolean, /* out_values */ any[] ]
    /**
     * Returns if we are subscribed to this service.
     * @returns %TRUE if we are subscribed to this service, otherwise %FALSE.
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
     * @returns %TRUE on success.
     */
    remove_notify(variable: string | null, callback: ServiceProxyNotifyCallback): boolean
    /**
     * Cancels the variable change notification for `callback` and `user_data`.
     * 
     * This function must not be called directly or indirectly from a
     * #GUPnPServiceProxyNotifyCallback associated with this service proxy, even
     * if it is for another variable.
     * @param callback The callback to call when `variable` changes
     * @returns %TRUE on success.
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
     * @returns %TRUE if sending the action was succesful.
     */
    send_action_list(action: string | null, in_names: string[], in_values: any[], out_names: string[], out_types: GObject.GType[]): [ /* returnType */ boolean, /* out_values */ any[] ]
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

    connect(sigName: "subscription-lost", callback: ServiceProxy.SubscriptionLostSignalCallback): number
    connect_after(sigName: "subscription-lost", callback: ServiceProxy.SubscriptionLostSignalCallback): number
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
export class ServiceProxy extends ServiceInfo {

    // Own properties of GUPnP-1.0.GUPnP.ServiceProxy

    static name: string
    static $gtype: GObject.GType<ServiceProxy>

    // Constructors of GUPnP-1.0.GUPnP.ServiceProxy

    constructor(config?: ServiceProxy.ConstructorProperties) 
    _init(config?: ServiceProxy.ConstructorProperties): void
}

export module WhiteList {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

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

}

export interface WhiteList {

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
     * @returns %TRUE if @entry is added, %FALSE otherwise.
     */
    add_entry(entry: string | null): boolean
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
     * @returns %TRUE if @context is matching the @white_list criterias, %FALSE otherwise.
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
     * @returns %TRUE if @white_list is enabled, %FALSE otherwise.
     */
    get_enabled(): boolean
    /**
     * Get the #GList of entries that compose the white list. Do not free
     * @returns a #GList of entries used to filter networks, interfaces,... or %NULL. Do not modify or free the list nor its elements.
     */
    get_entries(): string[]
    /**
     * Return the state of the entries list of #GUPnPWhiteList
     * @returns %TRUE if @white_list is empty, %FALSE otherwise.
     */
    is_empty(): boolean
    /**
     * Remove `entry` in the list of valid criteria used by `white_list` to
     * filter networks.
     * @param entry A value to remove from the filter list.
     * @returns %TRUE if @entry is removed, %FALSE otherwise.
     */
    remove_entry(entry: string | null): boolean
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
export class WhiteList extends GObject.Object {

    // Own properties of GUPnP-1.0.GUPnP.WhiteList

    static name: string
    static $gtype: GObject.GType<WhiteList>

    // Constructors of GUPnP-1.0.GUPnP.WhiteList

    constructor(config?: WhiteList.ConstructorProperties) 
    /**
     * Create a new #GUPnPWhiteList.
     * The white list is disabled by default.
     * @constructor 
     * @returns A new #GUPnPWhiteList object.
     */
    constructor() 
    /**
     * Create a new #GUPnPWhiteList.
     * The white list is disabled by default.
     * @constructor 
     * @returns A new #GUPnPWhiteList object.
     */
    static new(): WhiteList
    _init(config?: WhiteList.ConstructorProperties): void
}

export module XMLDoc {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

export interface XMLDoc {

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
export class XMLDoc extends GObject.Object {

    // Own properties of GUPnP-1.0.GUPnP.XMLDoc

    static name: string
    static $gtype: GObject.GType<XMLDoc>

    // Constructors of GUPnP-1.0.GUPnP.XMLDoc

    constructor(config?: XMLDoc.ConstructorProperties) 
    /**
     * Create a new #GUPnPXMLDoc for `xml_doc`.
     * @constructor 
     * @param xml_doc Pointer to #xmlDoc to wrap under this object
     * @returns A new #GUPnPXMLDoc, or %NULL on an error
     */
    constructor(xml_doc: libxml2.Doc) 
    /**
     * Create a new #GUPnPXMLDoc for `xml_doc`.
     * @constructor 
     * @param xml_doc Pointer to #xmlDoc to wrap under this object
     * @returns A new #GUPnPXMLDoc, or %NULL on an error
     */
    static new(xml_doc: libxml2.Doc): XMLDoc
    /**
     * Create a new #GUPnPXMLDoc for the XML document at `path`.
     * @constructor 
     * @param path Path to xml document
     * @returns A new #GUPnPXMLDoc, or %NULL on an error
     */
    static new_from_path(path: string | null): XMLDoc
    _init(config?: XMLDoc.ConstructorProperties): void
}

export interface AclInterface {

    // Own fields of GUPnP-1.0.GUPnP.AclInterface

    /**
     * The parent interface.
     * @field 
     */
    parent: GObject.TypeInterface
    is_allowed: (self: Acl, device: any | null, service: any | null, path: string | null, address: string | null, agent: string | null) => boolean
    is_allowed_async: (self: Acl, device: any | null, service: any | null, path: string | null, address: string | null, agent: string | null, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null) => void
    is_allowed_finish: (self: Acl, res: Gio.AsyncResult) => boolean
    can_sync: (self: Acl) => boolean
}

/**
 * Implement a simple access control list for GUPnP.
 * @record 
 */
export abstract class AclInterface {

    // Own properties of GUPnP-1.0.GUPnP.AclInterface

    static name: string
}

export interface ContextClass {

    // Own fields of GUPnP-1.0.GUPnP.ContextClass

    parent_class: GSSDP.ClientClass
}

export abstract class ContextClass {

    // Own properties of GUPnP-1.0.GUPnP.ContextClass

    static name: string
}

export interface ContextManagerClass {

    // Own fields of GUPnP-1.0.GUPnP.ContextManagerClass

    parent_class: GObject.ObjectClass
}

export abstract class ContextManagerClass {

    // Own properties of GUPnP-1.0.GUPnP.ContextManagerClass

    static name: string
}

export interface ContextManagerPrivate {
}

export class ContextManagerPrivate {

    // Own properties of GUPnP-1.0.GUPnP.ContextManagerPrivate

    static name: string
}

export interface ContextPrivate {
}

export class ContextPrivate {

    // Own properties of GUPnP-1.0.GUPnP.ContextPrivate

    static name: string
}

export interface ControlPointClass {

    // Own fields of GUPnP-1.0.GUPnP.ControlPointClass

    parent_class: GSSDP.ResourceBrowserClass
    device_proxy_available: (control_point: ControlPoint, proxy: DeviceProxy) => void
    device_proxy_unavailable: (control_point: ControlPoint, proxy: DeviceProxy) => void
    service_proxy_available: (control_point: ControlPoint, proxy: ServiceProxy) => void
    service_proxy_unavailable: (control_point: ControlPoint, proxy: ServiceProxy) => void
}

export abstract class ControlPointClass {

    // Own properties of GUPnP-1.0.GUPnP.ControlPointClass

    static name: string
}

export interface ControlPointPrivate {
}

export class ControlPointPrivate {

    // Own properties of GUPnP-1.0.GUPnP.ControlPointPrivate

    static name: string
}

export interface DeviceClass {

    // Own fields of GUPnP-1.0.GUPnP.DeviceClass

    parent_class: DeviceInfoClass
}

export abstract class DeviceClass {

    // Own properties of GUPnP-1.0.GUPnP.DeviceClass

    static name: string
}

export interface DeviceInfoClass {

    // Own fields of GUPnP-1.0.GUPnP.DeviceInfoClass

    parent_class: GObject.ObjectClass
}

export abstract class DeviceInfoClass {

    // Own properties of GUPnP-1.0.GUPnP.DeviceInfoClass

    static name: string
}

export interface DeviceInfoPrivate {
}

export class DeviceInfoPrivate {

    // Own properties of GUPnP-1.0.GUPnP.DeviceInfoPrivate

    static name: string
}

export interface DevicePrivate {
}

export class DevicePrivate {

    // Own properties of GUPnP-1.0.GUPnP.DevicePrivate

    static name: string
}

export interface DeviceProxyClass {

    // Own fields of GUPnP-1.0.GUPnP.DeviceProxyClass

    parent_class: DeviceInfoClass
}

export abstract class DeviceProxyClass {

    // Own properties of GUPnP-1.0.GUPnP.DeviceProxyClass

    static name: string
}

export interface DeviceProxyPrivate {
}

export class DeviceProxyPrivate {

    // Own properties of GUPnP-1.0.GUPnP.DeviceProxyPrivate

    static name: string
}

export interface ResourceFactoryClass {

    // Own fields of GUPnP-1.0.GUPnP.ResourceFactoryClass

    parent_class: GObject.ObjectClass
}

export abstract class ResourceFactoryClass {

    // Own properties of GUPnP-1.0.GUPnP.ResourceFactoryClass

    static name: string
}

export interface ResourceFactoryPrivate {
}

export class ResourceFactoryPrivate {

    // Own properties of GUPnP-1.0.GUPnP.ResourceFactoryPrivate

    static name: string
}

export interface RootDeviceClass {

    // Own fields of GUPnP-1.0.GUPnP.RootDeviceClass

    parent_class: DeviceClass
}

export abstract class RootDeviceClass {

    // Own properties of GUPnP-1.0.GUPnP.RootDeviceClass

    static name: string
}

export interface RootDevicePrivate {
}

export class RootDevicePrivate {

    // Own properties of GUPnP-1.0.GUPnP.RootDevicePrivate

    static name: string
}

export interface ServiceAction {

    // Owm methods of GUPnP-1.0.GUPnP.ServiceAction

    /**
     * Get the number of IN arguments from the `action` and return it.
     * @returns The number of IN arguments from the @action.
     */
    get_argument_count(): number
    /**
     * Retrieves the value of `argument` into a GValue of type `type` and returns it.
     * The method exists only and only to satify PyGI, please use
     * gupnp_service_action_get_value() and ignore this if possible.
     * @param argument The name of the argument to retrieve
     * @param type The type of argument to retrieve
     * @returns Value as #GValue associated with @action. g_value_unset() and g_slice_free() it after usage.
     */
    get_value(argument: string | null, type: GObject.GType): any
    /**
     * Get an ordered (preferred first) #GList of locales preferred by
     * the client. Free list and elements after use.
     * @returns A #GList of #char* locale names.
     */
    get_locales(): string[]
    /**
     * Get the #SoupMessage associated with `action`. Mainly intended for
     * applications to be able to read HTTP headers received from clients.
     * @returns #SoupMessage associated with @action. Unref after using it.
     */
    get_message(): Soup.Message
    /**
     * Get the name of `action`.
     * @returns The name of @action
     */
    get_name(): string | null
    /**
     * A variant of #gupnp_service_action_get that uses #GList instead of varargs.
     * @param arg_names A #GList of argument names as string
     * @param arg_types A #GList of argument types as #GType
     * @returns The values as #GList of #GValue. g_list_free() the returned list and g_value_unset() and g_slice_free() each element.
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
    return_error(error_code: number, error_description: string | null): void
    /**
     * Sets the value of `argument` to `value`.
     * @param argument The name of the return value to retrieve
     * @param value The #GValue to store the return value
     */
    set_value(argument: string | null, value: any): void
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
export class ServiceAction {

    // Own properties of GUPnP-1.0.GUPnP.ServiceAction

    static name: string
}

export interface ServiceActionArgInfo {

    // Own fields of GUPnP-1.0.GUPnP.ServiceActionArgInfo

    /**
     * The name of the action argument.
     * @field 
     */
    name: string | null
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
    related_state_variable: string | null
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
export class ServiceActionArgInfo {

    // Own properties of GUPnP-1.0.GUPnP.ServiceActionArgInfo

    static name: string
}

export interface ServiceActionInfo {

    // Own fields of GUPnP-1.0.GUPnP.ServiceActionInfo

    /**
     * The name of the action argument.
     * @field 
     */
    name: string | null
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
export class ServiceActionInfo {

    // Own properties of GUPnP-1.0.GUPnP.ServiceActionInfo

    static name: string
}

export interface ServiceClass {

    // Own fields of GUPnP-1.0.GUPnP.ServiceClass

    parent_class: ServiceInfoClass
    action_invoked: (service: Service, action: ServiceAction) => void
    query_variable: (service: Service, variable: string | null, value: any) => void
}

export abstract class ServiceClass {

    // Own properties of GUPnP-1.0.GUPnP.ServiceClass

    static name: string
}

export interface ServiceInfoClass {

    // Own fields of GUPnP-1.0.GUPnP.ServiceInfoClass

    parent_class: GObject.ObjectClass
}

export abstract class ServiceInfoClass {

    // Own properties of GUPnP-1.0.GUPnP.ServiceInfoClass

    static name: string
}

export interface ServiceInfoPrivate {
}

export class ServiceInfoPrivate {

    // Own properties of GUPnP-1.0.GUPnP.ServiceInfoPrivate

    static name: string
}

export interface ServiceIntrospectionClass {

    // Own fields of GUPnP-1.0.GUPnP.ServiceIntrospectionClass

    parent_class: GObject.ObjectClass
}

export abstract class ServiceIntrospectionClass {

    // Own properties of GUPnP-1.0.GUPnP.ServiceIntrospectionClass

    static name: string
}

export interface ServiceIntrospectionPrivate {
}

export class ServiceIntrospectionPrivate {

    // Own properties of GUPnP-1.0.GUPnP.ServiceIntrospectionPrivate

    static name: string
}

export interface ServicePrivate {
}

export class ServicePrivate {

    // Own properties of GUPnP-1.0.GUPnP.ServicePrivate

    static name: string
}

export interface ServiceProxyAction {
}

/**
 * Opaque structure for holding in-progress action data.
 * @record 
 */
export class ServiceProxyAction {

    // Own properties of GUPnP-1.0.GUPnP.ServiceProxyAction

    static name: string
}

export interface ServiceProxyClass {

    // Own fields of GUPnP-1.0.GUPnP.ServiceProxyClass

    parent_class: ServiceInfoClass
    subscription_lost: (proxy: ServiceProxy, reason: GLib.Error) => void
}

export abstract class ServiceProxyClass {

    // Own properties of GUPnP-1.0.GUPnP.ServiceProxyClass

    static name: string
}

export interface ServiceProxyPrivate {
}

export class ServiceProxyPrivate {

    // Own properties of GUPnP-1.0.GUPnP.ServiceProxyPrivate

    static name: string
}

export interface ServiceStateVariableInfo {

    // Own fields of GUPnP-1.0.GUPnP.ServiceStateVariableInfo

    /**
     * The name of the state variable.
     * @field 
     */
    name: string | null
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
export class ServiceStateVariableInfo {

    // Own properties of GUPnP-1.0.GUPnP.ServiceStateVariableInfo

    static name: string
}

export interface WhiteListClass {

    // Own fields of GUPnP-1.0.GUPnP.WhiteListClass

    parent_class: GObject.ObjectClass
}

export abstract class WhiteListClass {

    // Own properties of GUPnP-1.0.GUPnP.WhiteListClass

    static name: string
}

export interface WhiteListPrivate {
}

export class WhiteListPrivate {

    // Own properties of GUPnP-1.0.GUPnP.WhiteListPrivate

    static name: string
}

export interface XMLDocClass {

    // Own fields of GUPnP-1.0.GUPnP.XMLDocClass

    parent_class: GObject.ObjectClass
}

export abstract class XMLDocClass {

    // Own properties of GUPnP-1.0.GUPnP.XMLDocClass

    static name: string
}

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