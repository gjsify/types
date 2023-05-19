
/*
 * Type Definitions for node-gtk (https://github.com/romgrk/node-gtk)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/gjsify/ts-for-gir
 */

import './node-gupnp-1.0-import.d.ts';
    
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
export function controlErrorQuark(): GLib.Quark
export function eventingErrorQuark(): GLib.Quark
/**
 * Generate and return a new UUID.
 * @returns A newly generated UUID in string representation.
 */
export function getUuid(): string | null
export function serverErrorQuark(): GLib.Quark
export function xmlErrorQuark(): GLib.Quark
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

    // Own properties of GUPnP-1.0.GUPnP.Acl

    __gtype__: number

    // Owm methods of GUPnP-1.0.GUPnP.Acl

    // Has conflict: canSync(): boolean
    // Has conflict: isAllowed(device: any | null, service: any | null, path: string | null, address: string | null, agent: string | null): boolean
    // Has conflict: isAllowedAsync(device: any | null, service: any | null, path: string | null, address: string | null, agent: string | null, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    // Has conflict: isAllowedFinish(res: Gio.AsyncResult): boolean

    // Own virtual methods of GUPnP-1.0.GUPnP.Acl

    /**
     * Check whether gupnp_acl_is_allowed_async() is supported.
     * @virtual 
     */
    canSync(): boolean
    /**
     * Check whether an IP address is allowed to access this resource.
     * @virtual 
     * @param device The #GUPnPDevice associated with `path` or %NULL if unknown.
     * @param service The #GUPnPService associated with `path` or %NULL if unknown.
     * @param path The path being served.
     * @param address IP address of the peer.
     * @param agent The User-Agent header of the peer or %NULL if not unknown. `returns` %TRUE if the peer is allowed, %FALSE otherwise
     */
    isAllowed(device: any | null, service: any | null, path: string | null, address: string | null, agent: string | null): boolean
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
    isAllowedAsync(device: any | null, service: any | null, path: string | null, address: string | null, agent: string | null, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    isAllowedFinish(res: Gio.AsyncResult): boolean

    // Class property signals of GUPnP-1.0.GUPnP.Acl

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
 * Handle to an object implementing the #GUPnPAclInterface interface.
 * @interface 
 */
export class Acl extends GObject.Object {

    // Own properties of GUPnP-1.0.GUPnP.Acl

    static name: string

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
        defaultLanguage?: string | null
        /**
         * The port to run on. Set to 0 if you don't care what port to run on.
         */
        port?: number | null
        /**
         * The preferred subscription timeout: the number of seconds after
         * which subscriptions are renewed. Set to '0' if subscriptions
         * are never to time out.
         */
        subscriptionTimeout?: number | null
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
    defaultLanguage: string | null
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
    readonly subscriptionTimeout: number
    __gtype__: number

    // Own fields of GUPnP-1.0.GUPnP.Context

    parent: GSSDP.Client & GObject.Object
    priv: any

    // Owm methods of GUPnP-1.0.GUPnP.Context

    /**
     * Add a #SoupServerCallback to the #GUPnPContext<!-- -->'s #SoupServer.
     * @param useAcl %TRUE, if the path should query the GUPnPContext::acl before serving the resource, %FALSE otherwise.
     * @param path the toplevel path for the handler.
     * @param callback callback to invoke for requests under `path`
     */
    addServerHandler(useAcl: boolean, path: string | null, callback: Soup.ServerCallback): void
    getAcl(): Acl
    /**
     * Get the default Content-Language header for this context.
     * @returns The default content of the Content-Language header.
     */
    getDefaultLanguage(): string | null
    /**
     * Get the IP address we advertise ourselves as using.
     * @returns The IP address. This string should not be freed.
     */
    getHostIp(): string | null
    /**
     * Get the port that the SOAP server is running on.
     * @returns The port the SOAP server is running on.
     */
    getPort(): number
    /**
     * Get the #SoupServer HTTP server that GUPnP is using.
     * @returns The #SoupServer used by GUPnP. Do not unref this when finished.
     */
    getServer(): Soup.Server
    /**
     * Get the #SoupSession object that GUPnP is using.
     * @returns The #SoupSession used by GUPnP. Do not unref this when finished.
     */
    getSession(): Soup.Session
    /**
     * Get the event subscription timeout (in seconds), or 0 meaning there is no
     * timeout.
     * @returns The event subscription timeout in seconds.
     */
    getSubscriptionTimeout(): number
    /**
     * Start hosting `local_path` at `server_path`. Files with the path
     * `local_path`.LOCALE (if they exist) will be served up when LOCALE is
     * specified in the request's Accept-Language header.
     * @param localPath Path to the local file or folder to be hosted
     * @param serverPath Web server path where `local_path` should be hosted
     */
    hostPath(localPath: string | null, serverPath: string | null): void
    /**
     * Use this method to serve different local path to specific user-agent(s). The
     * path `server_path` must already be hosted by `context`.
     * @param localPath Path to the local file or folder to be hosted
     * @param serverPath Web server path already being hosted
     * @param userAgent The user-agent as a #GRegex.
     * @returns %TRUE on success, %FALSE otherwise.
     */
    hostPathForAgent(localPath: string | null, serverPath: string | null, userAgent: GLib.Regex): boolean
    /**
     * Remove a #SoupServerCallback from the #GUPnPContext<!-- -->'s #SoupServer.
     * @param path the toplevel path for the handler.
     */
    removeServerHandler(path: string | null): void
    setAcl(acl: Acl | null): void
    /**
     * Set the default language for the Content-Length header to `language`.
     * 
     * If the client sends an Accept-Language header the UPnP HTTP server
     * is required to send a Content-Language header in return. If there are
     * no files hosted in languages which match the requested ones the
     * Content-Language header is set to this value. The default value is "en".
     * @param language A language tag as defined in RFC 2616 3.10
     */
    setDefaultLanguage(language: string | null): void
    /**
     * Sets the event subscription timeout to `timeout`. Use 0 if you don't
     * want subscriptions to time out. Note that any client side subscriptions
     * will automatically be renewed.
     * @param timeout Event subscription timeout in seconds
     */
    setSubscriptionTimeout(timeout: number): void
    /**
     * Stop hosting the file or folder at `server_path`.
     * @param serverPath Web server path where the file or folder is hosted
     */
    unhostPath(serverPath: string | null): void

    // Class property signals of GUPnP-1.0.GUPnP.Context

    connect(sigName: "notify::acl", callback: (...args: any[]) => void): number
    on(sigName: "notify::acl", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::acl", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::acl", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::acl", ...args: any[]): void
    connect(sigName: "notify::default-language", callback: (...args: any[]) => void): number
    on(sigName: "notify::default-language", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::default-language", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::default-language", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::default-language", ...args: any[]): void
    connect(sigName: "notify::port", callback: (...args: any[]) => void): number
    on(sigName: "notify::port", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::port", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::port", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::port", ...args: any[]): void
    connect(sigName: "notify::server", callback: (...args: any[]) => void): number
    on(sigName: "notify::server", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::server", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::server", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::server", ...args: any[]): void
    connect(sigName: "notify::session", callback: (...args: any[]) => void): number
    on(sigName: "notify::session", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::session", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::session", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::session", ...args: any[]): void
    connect(sigName: "notify::subscription-timeout", callback: (...args: any[]) => void): number
    on(sigName: "notify::subscription-timeout", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::subscription-timeout", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::subscription-timeout", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::subscription-timeout", ...args: any[]): void
    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: "notify::active", callback: (...args: any[]) => void): number
    on(sigName: "notify::active", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::active", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::active", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::active", ...args: any[]): void
    connect(sigName: "notify::host-ip", callback: (...args: any[]) => void): number
    on(sigName: "notify::host-ip", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::host-ip", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::host-ip", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::host-ip", ...args: any[]): void
    connect(sigName: "notify::interface", callback: (...args: any[]) => void): number
    on(sigName: "notify::interface", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::interface", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::interface", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::interface", ...args: any[]): void
    connect(sigName: "notify::msearch-port", callback: (...args: any[]) => void): number
    on(sigName: "notify::msearch-port", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::msearch-port", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::msearch-port", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::msearch-port", ...args: any[]): void
    connect(sigName: "notify::network", callback: (...args: any[]) => void): number
    on(sigName: "notify::network", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::network", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::network", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::network", ...args: any[]): void
    connect(sigName: "notify::server-id", callback: (...args: any[]) => void): number
    on(sigName: "notify::server-id", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::server-id", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::server-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::server-id", ...args: any[]): void
    connect(sigName: "notify::socket-ttl", callback: (...args: any[]) => void): number
    on(sigName: "notify::socket-ttl", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::socket-ttl", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::socket-ttl", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::socket-ttl", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

/**
 * This struct contains private data only, and should be accessed using the
 * functions below.
 * @class 
 */
export class Context extends GSSDP.Client {

    // Own properties of GUPnP-1.0.GUPnP.Context

    static name: string

    // Constructors of GUPnP-1.0.GUPnP.Context

    constructor(config?: Context.ConstructorProperties) 
    /**
     * Create a new #GUPnPContext with the specified `main_context,` `iface` and
     * `port`.
     * @constructor 
     * @param mainContext Deprecated: 0.17.2: Always set to %NULL. If you want to use a different context, use g_main_context_push_thread_default().
     * @param iface The network interface to use, or %NULL to auto-detect.
     * @param port Port to run on, or 0 if you don't care what port is used.
     * @returns A new #GUPnPContext object, or %NULL on an error
     */
    constructor(mainContext: GLib.MainContext | null, iface: string | null, port: number) 
    /**
     * Create a new #GUPnPContext with the specified `main_context,` `iface` and
     * `port`.
     * @constructor 
     * @param mainContext Deprecated: 0.17.2: Always set to %NULL. If you want to use a different context, use g_main_context_push_thread_default().
     * @param iface The network interface to use, or %NULL to auto-detect.
     * @param port Port to run on, or 0 if you don't care what port is used.
     * @returns A new #GUPnPContext object, or %NULL on an error
     */
    static new(mainContext: GLib.MainContext | null, iface: string | null, port: number): Context

    // Overloads of new

    static new(mainContext: GLib.MainContext | null, iface: string | null): GSSDP.Client
    _init(config?: Context.ConstructorProperties): void
}

export module ContextManager {

    // Signal callback interfaces

    /**
     * Signal callback interface for `context-available`
     */
    export interface ContextAvailableSignalCallback {
        (context: Context): void
    }

    /**
     * Signal callback interface for `context-unavailable`
     */
    export interface ContextUnavailableSignalCallback {
        (context: Context): void
    }


    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of GUPnP-1.0.GUPnP.ContextManager

        mainContext?: any | null
        /**
         * Port the contexts listen on, or 0 if you don't care what
         * port is used by #GUPnPContext objects created by this object.
         */
        port?: number | null
    }

}

export interface ContextManager {

    // Own properties of GUPnP-1.0.GUPnP.ContextManager

    readonly mainContext: any
    /**
     * Port the contexts listen on, or 0 if you don't care what
     * port is used by #GUPnPContext objects created by this object.
     */
    readonly port: number
    /**
     * The white list to use.
     */
    readonly whiteList: WhiteList
    __gtype__: number

    // Own fields of GUPnP-1.0.GUPnP.ContextManager

    parent: GObject.Object
    priv: ContextManagerPrivate

    // Owm methods of GUPnP-1.0.GUPnP.ContextManager

    /**
     * Get the network port associated with this context manager.
     * @returns The network port asssociated with this context manager.
     */
    getPort(): number
    /**
     * Get the #GUPnPWhiteList associated with `manager`.
     * @returns The #GUPnPWhiteList asssociated with this context manager.
     */
    getWhiteList(): WhiteList
    /**
     * By calling this function, you are asking `manager` to keep a reference to
     * `control_point` until its associated #GUPnPContext is no longer available.
     * You usually want to call this function from
     * #GUPnPContextManager::context-available handler after you create a
     * #GUPnPControlPoint object for the newly available context.
     * @param controlPoint The #GUPnPControlPoint to be taken care of
     */
    manageControlPoint(controlPoint: ControlPoint): void
    /**
     * By calling this function, you are asking `manager` to keep a reference to
     * `root_device` when its associated #GUPnPContext is no longer available. You
     * usually want to call this function from
     * #GUPnPContextManager::context-available handler after you create a
     * #GUPnPRootDevice object for the newly available context.
     * @param rootDevice The #GUPnPRootDevice to be taken care of
     */
    manageRootDevice(rootDevice: RootDevice): void
    /**
     * This function starts a rescan on every control point managed by `manager`.
     * Only the active control points send discovery messages.
     * This function should be called when servers are suspected to have
     * disappeared.
     */
    rescanControlPoints(): void

    // Own signals of GUPnP-1.0.GUPnP.ContextManager

    connect(sigName: "context-available", callback: ContextManager.ContextAvailableSignalCallback): number
    on(sigName: "context-available", callback: ContextManager.ContextAvailableSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "context-available", callback: ContextManager.ContextAvailableSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "context-available", callback: ContextManager.ContextAvailableSignalCallback): NodeJS.EventEmitter
    emit(sigName: "context-available", ...args: any[]): void
    connect(sigName: "context-unavailable", callback: ContextManager.ContextUnavailableSignalCallback): number
    on(sigName: "context-unavailable", callback: ContextManager.ContextUnavailableSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "context-unavailable", callback: ContextManager.ContextUnavailableSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "context-unavailable", callback: ContextManager.ContextUnavailableSignalCallback): NodeJS.EventEmitter
    emit(sigName: "context-unavailable", ...args: any[]): void

    // Class property signals of GUPnP-1.0.GUPnP.ContextManager

    connect(sigName: "notify::main-context", callback: (...args: any[]) => void): number
    on(sigName: "notify::main-context", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::main-context", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::main-context", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::main-context", ...args: any[]): void
    connect(sigName: "notify::port", callback: (...args: any[]) => void): number
    on(sigName: "notify::port", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::port", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::port", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::port", ...args: any[]): void
    connect(sigName: "notify::white-list", callback: (...args: any[]) => void): number
    on(sigName: "notify::white-list", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::white-list", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::white-list", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::white-list", ...args: any[]): void
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
 * This struct contains private data only, and should be accessed using the
 * functions below.
 * @class 
 */
export class ContextManager extends GObject.Object {

    // Own properties of GUPnP-1.0.GUPnP.ContextManager

    static name: string

    // Constructors of GUPnP-1.0.GUPnP.ContextManager

    constructor(config?: ContextManager.ConstructorProperties) 
    /**
     * Same as gupnp_context_manager_create().
     * @constructor 
     * @param mainContext Deprecated: 0.17.2: %NULL. If you want to use                a different main context use                g_main_context_push_thread_default() instead.
     * @param port Port to create contexts for, or 0 if you don't care what port is used.
     * @returns A new #GUPnPContextManager object.
     */
    constructor(mainContext: GLib.MainContext | null, port: number) 
    /**
     * Same as gupnp_context_manager_create().
     * @constructor 
     * @param mainContext Deprecated: 0.17.2: %NULL. If you want to use                a different main context use                g_main_context_push_thread_default() instead.
     * @param port Port to create contexts for, or 0 if you don't care what port is used.
     * @returns A new #GUPnPContextManager object.
     */
    static new(mainContext: GLib.MainContext | null, port: number): ContextManager
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
        (proxy: DeviceProxy): void
    }

    /**
     * Signal callback interface for `device-proxy-unavailable`
     */
    export interface DeviceProxyUnavailableSignalCallback {
        (proxy: DeviceProxy): void
    }

    /**
     * Signal callback interface for `service-proxy-available`
     */
    export interface ServiceProxyAvailableSignalCallback {
        (proxy: ServiceProxy): void
    }

    /**
     * Signal callback interface for `service-proxy-unavailable`
     */
    export interface ServiceProxyUnavailableSignalCallback {
        (proxy: ServiceProxy): void
    }


    // Constructor properties interface

    export interface ConstructorProperties extends GSSDP.ResourceBrowser.ConstructorProperties {

        // Own constructor properties of GUPnP-1.0.GUPnP.ControlPoint

        /**
         * The resource factory to use. Set to NULL for default factory.
         */
        resourceFactory?: ResourceFactory | null
    }

}

export interface ControlPoint {

    // Own properties of GUPnP-1.0.GUPnP.ControlPoint

    /**
     * The resource factory to use. Set to NULL for default factory.
     */
    readonly resourceFactory: ResourceFactory
    __gtype__: number

    // Own fields of GUPnP-1.0.GUPnP.ControlPoint

    parent: GSSDP.ResourceBrowser & GObject.Object
    priv: any

    // Owm methods of GUPnP-1.0.GUPnP.ControlPoint

    /**
     * Get the #GUPnPControlPoint associated with `control_point`.
     * @returns The #GUPnPContext.
     */
    getContext(): Context
    /**
     * Get the #GUPnPResourceFactory used by the `control_point`.
     * @returns A #GUPnPResourceFactory.
     */
    getResourceFactory(): ResourceFactory
    /**
     * Get the #GList of discovered #GUPnPDeviceProxy objects. Do not free the list
     * nor its elements.
     * @returns a #GList of #GUPnPDeviceProxy objects.
     */
    listDeviceProxies(): DeviceProxy[]
    /**
     * Get the #GList of discovered #GUPnPServiceProxy objects. Do not free the
     * list nor its elements.
     * @returns a #GList of #GUPnPServiceProxy objects.
     */
    listServiceProxies(): ServiceProxy[]

    // Own virtual methods of GUPnP-1.0.GUPnP.ControlPoint

    deviceProxyAvailable(proxy: DeviceProxy): void
    deviceProxyUnavailable(proxy: DeviceProxy): void
    serviceProxyAvailable(proxy: ServiceProxy): void
    serviceProxyUnavailable(proxy: ServiceProxy): void

    // Own signals of GUPnP-1.0.GUPnP.ControlPoint

    connect(sigName: "device-proxy-available", callback: ControlPoint.DeviceProxyAvailableSignalCallback): number
    on(sigName: "device-proxy-available", callback: ControlPoint.DeviceProxyAvailableSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "device-proxy-available", callback: ControlPoint.DeviceProxyAvailableSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "device-proxy-available", callback: ControlPoint.DeviceProxyAvailableSignalCallback): NodeJS.EventEmitter
    emit(sigName: "device-proxy-available", ...args: any[]): void
    connect(sigName: "device-proxy-unavailable", callback: ControlPoint.DeviceProxyUnavailableSignalCallback): number
    on(sigName: "device-proxy-unavailable", callback: ControlPoint.DeviceProxyUnavailableSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "device-proxy-unavailable", callback: ControlPoint.DeviceProxyUnavailableSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "device-proxy-unavailable", callback: ControlPoint.DeviceProxyUnavailableSignalCallback): NodeJS.EventEmitter
    emit(sigName: "device-proxy-unavailable", ...args: any[]): void
    connect(sigName: "service-proxy-available", callback: ControlPoint.ServiceProxyAvailableSignalCallback): number
    on(sigName: "service-proxy-available", callback: ControlPoint.ServiceProxyAvailableSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "service-proxy-available", callback: ControlPoint.ServiceProxyAvailableSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "service-proxy-available", callback: ControlPoint.ServiceProxyAvailableSignalCallback): NodeJS.EventEmitter
    emit(sigName: "service-proxy-available", ...args: any[]): void
    connect(sigName: "service-proxy-unavailable", callback: ControlPoint.ServiceProxyUnavailableSignalCallback): number
    on(sigName: "service-proxy-unavailable", callback: ControlPoint.ServiceProxyUnavailableSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "service-proxy-unavailable", callback: ControlPoint.ServiceProxyUnavailableSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "service-proxy-unavailable", callback: ControlPoint.ServiceProxyUnavailableSignalCallback): NodeJS.EventEmitter
    emit(sigName: "service-proxy-unavailable", ...args: any[]): void

    // Class property signals of GUPnP-1.0.GUPnP.ControlPoint

    connect(sigName: "notify::resource-factory", callback: (...args: any[]) => void): number
    on(sigName: "notify::resource-factory", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::resource-factory", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::resource-factory", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::resource-factory", ...args: any[]): void
    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: "notify::active", callback: (...args: any[]) => void): number
    on(sigName: "notify::active", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::active", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::active", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::active", ...args: any[]): void
    connect(sigName: "notify::client", callback: (...args: any[]) => void): number
    on(sigName: "notify::client", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::client", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::client", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::client", ...args: any[]): void
    connect(sigName: "notify::mx", callback: (...args: any[]) => void): number
    on(sigName: "notify::mx", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::mx", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::mx", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::mx", ...args: any[]): void
    connect(sigName: "notify::target", callback: (...args: any[]) => void): number
    on(sigName: "notify::target", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::target", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::target", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::target", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

/**
 * This struct contains private data only, and should be accessed using the
 * functions below.
 * @class 
 */
export class ControlPoint extends GSSDP.ResourceBrowser {

    // Own properties of GUPnP-1.0.GUPnP.ControlPoint

    static name: string

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
    static newFull(context: Context, factory: ResourceFactory, target: string | null): ControlPoint
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
        rootDevice?: RootDevice | null
    }

}

export interface Device {

    // Own properties of GUPnP-1.0.GUPnP.Device

    /**
     * The containing #GUPnPRootDevice, or NULL if this is the root
     * device.
     */
    readonly rootDevice: RootDevice
    __gtype__: number

    // Own fields of GUPnP-1.0.GUPnP.Device

    parent: DeviceInfo & GObject.Object
    priv: any

    // Class property signals of GUPnP-1.0.GUPnP.Device

    connect(sigName: "notify::root-device", callback: (...args: any[]) => void): number
    on(sigName: "notify::root-device", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::root-device", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::root-device", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::root-device", ...args: any[]): void
    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: "notify::context", callback: (...args: any[]) => void): number
    on(sigName: "notify::context", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::context", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::context", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::context", ...args: any[]): void
    connect(sigName: "notify::device-type", callback: (...args: any[]) => void): number
    on(sigName: "notify::device-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::device-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::device-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::device-type", ...args: any[]): void
    connect(sigName: "notify::document", callback: (...args: any[]) => void): number
    on(sigName: "notify::document", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::document", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::document", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::document", ...args: any[]): void
    connect(sigName: "notify::element", callback: (...args: any[]) => void): number
    on(sigName: "notify::element", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::element", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::element", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::element", ...args: any[]): void
    connect(sigName: "notify::location", callback: (...args: any[]) => void): number
    on(sigName: "notify::location", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::location", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::location", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::location", ...args: any[]): void
    connect(sigName: "notify::resource-factory", callback: (...args: any[]) => void): number
    on(sigName: "notify::resource-factory", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::resource-factory", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::resource-factory", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::resource-factory", ...args: any[]): void
    connect(sigName: "notify::udn", callback: (...args: any[]) => void): number
    on(sigName: "notify::udn", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::udn", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::udn", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::udn", ...args: any[]): void
    connect(sigName: "notify::url-base", callback: (...args: any[]) => void): number
    on(sigName: "notify::url-base", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::url-base", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::url-base", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::url-base", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

/**
 * This struct contains private data only, and should be accessed using the
 * functions below.
 * @class 
 */
export class Device extends DeviceInfo {

    // Own properties of GUPnP-1.0.GUPnP.Device

    static name: string

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
        deviceType?: string | null
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
        resourceFactory?: ResourceFactory | null
        /**
         * The UDN of this device.
         */
        udn?: string | null
        /**
         * The URL base (#SoupURI).
         */
        urlBase?: Soup.URI | null
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
    readonly deviceType: string | null
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
    readonly resourceFactory: ResourceFactory
    /**
     * The UDN of this device.
     */
    readonly udn: string | null
    /**
     * The URL base (#SoupURI).
     */
    readonly urlBase: Soup.URI
    __gtype__: number

    // Own fields of GUPnP-1.0.GUPnP.DeviceInfo

    parent: GObject.Object
    priv: DeviceInfoPrivate

    // Owm methods of GUPnP-1.0.GUPnP.DeviceInfo

    /**
     * Get the associated #GUPnPContext.
     * @returns A #GUPnPContext.
     */
    getContext(): Context
    /**
     * This function provides generic access to the contents of arbitrary elements
     * in the device description file.
     * @param element Name of the description element to retrieve
     * @returns a newly allocated string or %NULL if the device               description doesn't contain the given @element
     */
    getDescriptionValue(element: string | null): string | null
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
    getDevice(type: string | null): DeviceInfo | null
    /**
     * Get the UPnP device type.
     * @returns A constant string, or %NULL.
     */
    getDeviceType(): string | null
    /**
     * Get the friendly name of the device.
     * @returns A string, or %NULL. g_free() after use.
     */
    getFriendlyName(): string | null
    /**
     * Get a URL pointing to the icon most closely matching the
     * given criteria, or %NULL. If `requested_mime_type` is set, only icons with
     * this mime type will be returned. If `requested_depth` is set, only icons with
     * this or lower depth will be returned. If `requested_width` and/or
     * `requested_height` are set, only icons that are this size or smaller are
     * returned, unless `prefer_bigger` is set, in which case the next biggest icon
     * will be returned. The returned strings should be freed.
     * @param requestedMimeType The requested file format, or %NULL for any
     * @param requestedDepth The requested color depth, or -1 for any
     * @param requestedWidth The requested width, or -1 for any
     * @param requestedHeight The requested height, or -1 for any
     * @param preferBigger %TRUE if a bigger, rather than a smaller icon should be returned if no exact match could be found
     * @returns a string, or %NULL.  g_free() after use.
     */
    getIconUrl(requestedMimeType: string | null, requestedDepth: number, requestedWidth: number, requestedHeight: number, preferBigger: boolean): [ /* returnType */ string | null, /* mimeType */ string | null, /* depth */ number, /* width */ number, /* height */ number ]
    /**
     * Get the location of the device description file.
     * @returns A constant string.
     */
    getLocation(): string | null
    /**
     * Get the manufacturer of the device.
     * @returns A string, or %NULL. g_free() after use.
     */
    getManufacturer(): string | null
    /**
     * Get a URL pointing to the manufacturer's website.
     * @returns A string, or %NULL. g_free() after use.
     */
    getManufacturerUrl(): string | null
    /**
     * Get the description of the device model.
     * @returns A string, or %NULL. g_free() after use.
     */
    getModelDescription(): string | null
    /**
     * Get the model name of the device.
     * @returns A string, or %NULL. g_free() after use.
     */
    getModelName(): string | null
    /**
     * Get the model number of the device.
     * @returns A string, or %NULL. g_free() after use.
     */
    getModelNumber(): string | null
    /**
     * Get a URL pointing to the device model's website.
     * @returns A string, or %NULL. g_free() after use.
     */
    getModelUrl(): string | null
    /**
     * Get a URL pointing to the device's presentation page, for web-based
     * administration.
     * @returns A string, or %NULL. g_free() after use.
     */
    getPresentationUrl(): string | null
    /**
     * Get the #GUPnPResourceFactory used by the `device_info`.
     * @returns A #GUPnPResourceFactory.
     */
    getResourceFactory(): ResourceFactory
    /**
     * Get the serial number of the device.
     * @returns A string, or %NULL. g_free() after use.
     */
    getSerialNumber(): string | null
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
    getService(type: string | null): ServiceInfo
    /**
     * Get the Unique Device Name of the device.
     * @returns A constant string.
     */
    getUdn(): string | null
    /**
     * Get the Universal Product Code of the device.
     * @returns A string, or %NULL. g_free() after use.
     */
    getUpc(): string | null
    /**
     * Get the URL base of this device.
     * @returns A #SoupURI.
     */
    getUrlBase(): Soup.URI
    /**
     * Get a #GList of strings representing the types of the devices
     * directly contained in `info`.
     * @returns A #GList of strings. The elements should be g_free()'d and the list should be g_list_free()'d.
     */
    listDeviceTypes(): string[]
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
    listDevices(): DeviceInfo[]
    /**
     * Get a #GList of strings that represent the device capabilities as announced
     * in the device description file using the &lt;dlna:X_DLNACAP&gt; element.
     * @returns a #GList of newly allocated strings or %NULL if the device description doesn't contain the &lt;dlna:X_DLNACAP&gt; element.
     */
    listDlnaCapabilities(): string[]
    /**
     * Get a #GList of strings that represent the device class and version as
     * announced in the device description file using the &lt;dlna:X_DLNADOC&gt;
     * element.
     * @returns a #GList of newly allocated strings or %NULL if the device description doesn't contain the &lt;dlna:X_DLNADOC&gt; element.
     */
    listDlnaDeviceClassIdentifier(): string[]
    /**
     * Get a #GList of strings representing the types of the services
     * directly contained in `info`.
     * @returns A #GList of strings. The elements should be g_free()'d and the list should be g_list_free()'d.
     */
    listServiceTypes(): string[]
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
    listServices(): ServiceInfo[]

    // Class property signals of GUPnP-1.0.GUPnP.DeviceInfo

    connect(sigName: "notify::context", callback: (...args: any[]) => void): number
    on(sigName: "notify::context", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::context", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::context", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::context", ...args: any[]): void
    connect(sigName: "notify::device-type", callback: (...args: any[]) => void): number
    on(sigName: "notify::device-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::device-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::device-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::device-type", ...args: any[]): void
    connect(sigName: "notify::document", callback: (...args: any[]) => void): number
    on(sigName: "notify::document", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::document", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::document", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::document", ...args: any[]): void
    connect(sigName: "notify::element", callback: (...args: any[]) => void): number
    on(sigName: "notify::element", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::element", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::element", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::element", ...args: any[]): void
    connect(sigName: "notify::location", callback: (...args: any[]) => void): number
    on(sigName: "notify::location", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::location", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::location", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::location", ...args: any[]): void
    connect(sigName: "notify::resource-factory", callback: (...args: any[]) => void): number
    on(sigName: "notify::resource-factory", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::resource-factory", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::resource-factory", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::resource-factory", ...args: any[]): void
    connect(sigName: "notify::udn", callback: (...args: any[]) => void): number
    on(sigName: "notify::udn", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::udn", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::udn", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::udn", ...args: any[]): void
    connect(sigName: "notify::url-base", callback: (...args: any[]) => void): number
    on(sigName: "notify::url-base", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::url-base", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::url-base", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::url-base", ...args: any[]): void
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
 * This struct contains private data only, and should be accessed using the
 * functions below.
 * @class 
 */
export class DeviceInfo extends GObject.Object {

    // Own properties of GUPnP-1.0.GUPnP.DeviceInfo

    static name: string

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

    // Own properties of GUPnP-1.0.GUPnP.DeviceProxy

    __gtype__: number

    // Own fields of GUPnP-1.0.GUPnP.DeviceProxy

    parent: DeviceInfo & GObject.Object
    priv: any

    // Class property signals of GUPnP-1.0.GUPnP.DeviceProxy

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: "notify::context", callback: (...args: any[]) => void): number
    on(sigName: "notify::context", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::context", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::context", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::context", ...args: any[]): void
    connect(sigName: "notify::device-type", callback: (...args: any[]) => void): number
    on(sigName: "notify::device-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::device-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::device-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::device-type", ...args: any[]): void
    connect(sigName: "notify::document", callback: (...args: any[]) => void): number
    on(sigName: "notify::document", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::document", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::document", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::document", ...args: any[]): void
    connect(sigName: "notify::element", callback: (...args: any[]) => void): number
    on(sigName: "notify::element", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::element", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::element", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::element", ...args: any[]): void
    connect(sigName: "notify::location", callback: (...args: any[]) => void): number
    on(sigName: "notify::location", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::location", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::location", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::location", ...args: any[]): void
    connect(sigName: "notify::resource-factory", callback: (...args: any[]) => void): number
    on(sigName: "notify::resource-factory", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::resource-factory", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::resource-factory", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::resource-factory", ...args: any[]): void
    connect(sigName: "notify::udn", callback: (...args: any[]) => void): number
    on(sigName: "notify::udn", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::udn", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::udn", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::udn", ...args: any[]): void
    connect(sigName: "notify::url-base", callback: (...args: any[]) => void): number
    on(sigName: "notify::url-base", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::url-base", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::url-base", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::url-base", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

/**
 * This struct contains private data only, and should be accessed using the
 * functions below.
 * @class 
 */
export class DeviceProxy extends DeviceInfo {

    // Own properties of GUPnP-1.0.GUPnP.DeviceProxy

    static name: string

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

    // Own properties of GUPnP-1.0.GUPnP.ResourceFactory

    __gtype__: number

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
     * @param upnpType The UPnP type name of the resource.
     * @param type The requested GType assignment for the resource proxy.
     */
    registerResourceProxyType(upnpType: string | null, type: GObject.GType): void
    /**
     * Registers the GType `type` for the resource of UPnP type `upnp_type`. After
     * this call, the factory `factory` will create object of GType `type` each time
     * it is asked to create a resource object for UPnP type `upnp_type`.
     * 
     * Note: GType `type` must be a derived type of #GUPNP_TYPE_DEVICE if resource is
     * a device or #GUPNP_TYPE_SERVICE if its a service.
     * @param upnpType The UPnP type name of the resource.
     * @param type The requested GType assignment for the resource.
     */
    registerResourceType(upnpType: string | null, type: GObject.GType): void
    /**
     * Unregisters the GType assignment for the proxy of resource of UPnP type
     * `upnp_type`.
     * @param upnpType The UPnP type name of the resource.
     * @returns %TRUE if GType assignment was removed successfully, %FALSE otherwise.
     */
    unregisterResourceProxyType(upnpType: string | null): boolean
    /**
     * Unregisters the GType assignment for the resource of UPnP type `upnp_type`.
     * @param upnpType The UPnP type name of the resource.
     * @returns %TRUE if GType assignment was removed successfully, %FALSE otherwise.
     */
    unregisterResourceType(upnpType: string | null): boolean

    // Class property signals of GUPnP-1.0.GUPnP.ResourceFactory

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
 * This struct contains private data only, and should be accessed using the
 * functions below.
 * @class 
 */
export class ResourceFactory extends GObject.Object {

    // Own properties of GUPnP-1.0.GUPnP.ResourceFactory

    static name: string

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
    static getDefault(): ResourceFactory
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
        descriptionDir?: string | null
        /**
         * Device description document. Constructor property.
         */
        descriptionDoc?: XMLDoc | null
        /**
         * The path to device description document. This could either be an
         * absolute path or path relative to GUPnPRootDevice:description-dir.
         */
        descriptionPath?: string | null
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
    readonly descriptionDir: string | null
    /**
     * Device description document. Constructor property.
     */
    readonly descriptionDoc: XMLDoc
    /**
     * The path to device description document. This could either be an
     * absolute path or path relative to GUPnPRootDevice:description-dir.
     */
    readonly descriptionPath: string | null
    __gtype__: number

    // Own fields of GUPnP-1.0.GUPnP.RootDevice

    parent: Device & DeviceInfo & GObject.Object & GObject.Object
    priv: any

    // Owm methods of GUPnP-1.0.GUPnP.RootDevice

    /**
     * Get whether or not `root_device` is available (announcing its presence).
     * @returns %TRUE if @root_device is available, %FALSE otherwise.
     */
    getAvailable(): boolean
    /**
     * Get the path to the directory containing description documents related to
     * `root_device`.
     * @returns The path to description document directory of @root_device.
     */
    getDescriptionDir(): string | null
    /**
     * Get the path to the device description document of `root_device`.
     * @returns The path to device description document of @root_device.
     */
    getDescriptionPath(): string | null
    /**
     * Get the relative location of `root_device`.
     * @returns The relative location of @root_device.
     */
    getRelativeLocation(): string | null
    /**
     * Get the #GSSDPResourceGroup used by `root_device`.
     * @returns The #GSSDPResourceGroup of @root_device.
     */
    getSsdpResourceGroup(): GSSDP.ResourceGroup
    /**
     * Controls whether or not `root_device` is available (announcing
     * its presence).
     * @param available %TRUE if `root_device` should be available
     */
    setAvailable(available: boolean): void

    // Class property signals of GUPnP-1.0.GUPnP.RootDevice

    connect(sigName: "notify::available", callback: (...args: any[]) => void): number
    on(sigName: "notify::available", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::available", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::available", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::available", ...args: any[]): void
    connect(sigName: "notify::description-dir", callback: (...args: any[]) => void): number
    on(sigName: "notify::description-dir", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::description-dir", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::description-dir", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::description-dir", ...args: any[]): void
    connect(sigName: "notify::description-doc", callback: (...args: any[]) => void): number
    on(sigName: "notify::description-doc", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::description-doc", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::description-doc", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::description-doc", ...args: any[]): void
    connect(sigName: "notify::description-path", callback: (...args: any[]) => void): number
    on(sigName: "notify::description-path", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::description-path", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::description-path", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::description-path", ...args: any[]): void
    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: "notify::root-device", callback: (...args: any[]) => void): number
    on(sigName: "notify::root-device", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::root-device", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::root-device", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::root-device", ...args: any[]): void
    connect(sigName: "notify::context", callback: (...args: any[]) => void): number
    on(sigName: "notify::context", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::context", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::context", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::context", ...args: any[]): void
    connect(sigName: "notify::device-type", callback: (...args: any[]) => void): number
    on(sigName: "notify::device-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::device-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::device-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::device-type", ...args: any[]): void
    connect(sigName: "notify::document", callback: (...args: any[]) => void): number
    on(sigName: "notify::document", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::document", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::document", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::document", ...args: any[]): void
    connect(sigName: "notify::element", callback: (...args: any[]) => void): number
    on(sigName: "notify::element", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::element", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::element", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::element", ...args: any[]): void
    connect(sigName: "notify::location", callback: (...args: any[]) => void): number
    on(sigName: "notify::location", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::location", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::location", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::location", ...args: any[]): void
    connect(sigName: "notify::resource-factory", callback: (...args: any[]) => void): number
    on(sigName: "notify::resource-factory", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::resource-factory", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::resource-factory", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::resource-factory", ...args: any[]): void
    connect(sigName: "notify::udn", callback: (...args: any[]) => void): number
    on(sigName: "notify::udn", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::udn", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::udn", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::udn", ...args: any[]): void
    connect(sigName: "notify::url-base", callback: (...args: any[]) => void): number
    on(sigName: "notify::url-base", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::url-base", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::url-base", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::url-base", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

/**
 * This struct contains private data only, and should be accessed using the
 * functions below.
 * @class 
 */
export class RootDevice extends Device {

    // Own properties of GUPnP-1.0.GUPnP.RootDevice

    static name: string

    // Constructors of GUPnP-1.0.GUPnP.RootDevice

    constructor(config?: RootDevice.ConstructorProperties) 
    /**
     * Create a new #GUPnPRootDevice object, automatically loading and parsing
     * device description document from `description_path`.
     * @constructor 
     * @param context The #GUPnPContext
     * @param descriptionPath Path to device description document. This could either be an absolute path or path relative to `description_dir`.
     * @param descriptionDir Path to directory where description documents are provided.
     * @returns A new @GUPnPRootDevice object.
     */
    constructor(context: Context, descriptionPath: string | null, descriptionDir: string | null) 
    /**
     * Create a new #GUPnPRootDevice object, automatically loading and parsing
     * device description document from `description_path`.
     * @constructor 
     * @param context The #GUPnPContext
     * @param descriptionPath Path to device description document. This could either be an absolute path or path relative to `description_dir`.
     * @param descriptionDir Path to directory where description documents are provided.
     * @returns A new @GUPnPRootDevice object.
     */
    static new(context: Context, descriptionPath: string | null, descriptionDir: string | null): RootDevice
    /**
     * Create a new #GUPnPRootDevice, automatically loading and parsing
     * device description document from `description_path` if `description_doc` is
     * %NULL.
     * @constructor 
     * @param context A #GUPnPContext
     * @param factory A #GUPnPResourceFactory
     * @param descriptionDoc Device description document, or %NULL
     * @param descriptionPath Path to device description document. This could either be an absolute path or path relative to `description_dir`.
     * @param descriptionDir Path to directory where description documents are provided.
     * @returns A new #GUPnPRootDevice object.
     */
    static newFull(context: Context, factory: ResourceFactory, descriptionDoc: XMLDoc, descriptionPath: string | null, descriptionDir: string | null): RootDevice
    _init(config?: RootDevice.ConstructorProperties): void
}

export module Service {

    // Signal callback interfaces

    /**
     * Signal callback interface for `action-invoked`
     */
    export interface ActionInvokedSignalCallback {
        (action: ServiceAction): void
    }

    /**
     * Signal callback interface for `notify-failed`
     */
    export interface NotifyFailedSignalCallback {
        (callbackUrl: Soup.URI[], reason: GLib.Error): void
    }

    /**
     * Signal callback interface for `query-variable`
     */
    export interface QueryVariableSignalCallback {
        (variable: string | null, value: any): void
    }


    // Constructor properties interface

    export interface ConstructorProperties extends ServiceInfo.ConstructorProperties {

        // Own constructor properties of GUPnP-1.0.GUPnP.Service

        /**
         * The containing #GUPnPRootDevice.
         */
        rootDevice?: RootDevice | null
    }

}

export interface Service {

    // Own properties of GUPnP-1.0.GUPnP.Service

    /**
     * The containing #GUPnPRootDevice.
     */
    readonly rootDevice: RootDevice
    __gtype__: number

    // Own fields of GUPnP-1.0.GUPnP.Service

    parent: ServiceInfo & GObject.Object
    priv: any

    // Owm methods of GUPnP-1.0.GUPnP.Service

    /**
     * Causes new notifications to be queued up until gupnp_service_thaw_notify()
     * is called.
     */
    freezeNotify(): void
    /**
     * Notifies listening clients that `variable` has changed to `value`.
     * @param variable The name of the variable to notify
     * @param value The value of the variable
     */
    notifyValue(variable: string | null, value: any): void
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
     * @param userData the data to pass to each of the callbacks
     */
    signalsAutoconnect(userData: any | null): void
    /**
     * Sends out any pending notifications, and stops queuing of new ones.
     */
    thawNotify(): void

    // Own virtual methods of GUPnP-1.0.GUPnP.Service

    actionInvoked(action: ServiceAction): void
    queryVariable(variable: string | null, value: any): void

    // Own signals of GUPnP-1.0.GUPnP.Service

    connect(sigName: "action-invoked", callback: Service.ActionInvokedSignalCallback): number
    on(sigName: "action-invoked", callback: Service.ActionInvokedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "action-invoked", callback: Service.ActionInvokedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "action-invoked", callback: Service.ActionInvokedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "action-invoked", ...args: any[]): void
    connect(sigName: "notify-failed", callback: Service.NotifyFailedSignalCallback): number
    on(sigName: "notify-failed", callback: Service.NotifyFailedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify-failed", callback: Service.NotifyFailedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify-failed", callback: Service.NotifyFailedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "notify-failed", reason: GLib.Error, ...args: any[]): void
    connect(sigName: "query-variable", callback: Service.QueryVariableSignalCallback): number
    on(sigName: "query-variable", callback: Service.QueryVariableSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "query-variable", callback: Service.QueryVariableSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "query-variable", callback: Service.QueryVariableSignalCallback): NodeJS.EventEmitter
    emit(sigName: "query-variable", value: any, ...args: any[]): void

    // Class property signals of GUPnP-1.0.GUPnP.Service

    connect(sigName: "notify::root-device", callback: (...args: any[]) => void): number
    on(sigName: "notify::root-device", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::root-device", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::root-device", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::root-device", ...args: any[]): void
    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: "notify::context", callback: (...args: any[]) => void): number
    on(sigName: "notify::context", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::context", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::context", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::context", ...args: any[]): void
    connect(sigName: "notify::document", callback: (...args: any[]) => void): number
    on(sigName: "notify::document", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::document", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::document", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::document", ...args: any[]): void
    connect(sigName: "notify::element", callback: (...args: any[]) => void): number
    on(sigName: "notify::element", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::element", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::element", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::element", ...args: any[]): void
    connect(sigName: "notify::location", callback: (...args: any[]) => void): number
    on(sigName: "notify::location", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::location", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::location", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::location", ...args: any[]): void
    connect(sigName: "notify::service-type", callback: (...args: any[]) => void): number
    on(sigName: "notify::service-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::service-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::service-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::service-type", ...args: any[]): void
    connect(sigName: "notify::udn", callback: (...args: any[]) => void): number
    on(sigName: "notify::udn", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::udn", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::udn", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::udn", ...args: any[]): void
    connect(sigName: "notify::url-base", callback: (...args: any[]) => void): number
    on(sigName: "notify::url-base", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::url-base", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::url-base", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::url-base", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

/**
 * This struct contains private data only, and should be accessed using the
 * functions below.
 * @class 
 */
export class Service extends ServiceInfo {

    // Own properties of GUPnP-1.0.GUPnP.Service

    static name: string

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
        serviceType?: string | null
        /**
         * The UDN of the containing device.
         */
        udn?: string | null
        /**
         * The URL base (#SoupURI).
         */
        urlBase?: Soup.URI | null
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
    readonly serviceType: string | null
    /**
     * The UDN of the containing device.
     */
    readonly udn: string | null
    /**
     * The URL base (#SoupURI).
     */
    readonly urlBase: Soup.URI
    __gtype__: number

    // Own fields of GUPnP-1.0.GUPnP.ServiceInfo

    parent: GObject.Object
    priv: ServiceInfoPrivate

    // Owm methods of GUPnP-1.0.GUPnP.ServiceInfo

    /**
     * Get the #GUPnPContext associated with `info`.
     * @returns A #GUPnPContext.
     */
    getContext(): Context
    /**
     * Get the control URL for this service, or %NULL..
     * @returns A string. This string should be freed with g_free() after use.
     */
    getControlUrl(): string | null
    /**
     * Get the event subscription URL for this service, or %NULL.
     * @returns A string. This string should be freed with g_free() after use.
     */
    getEventSubscriptionUrl(): string | null
    /**
     * Get the ID of this service, or %NULL if there is no ID.
     * @returns A string. This string should be freed with g_free() after use.
     */
    getId(): string | null
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
    getIntrospection(): ServiceIntrospection
    /**
     * Note that introspection object is created from the information in service
     * description document (SCPD) provided by the service so it can not be created
     * if the service does not provide an SCPD.
     * @param callback callback to be called when introspection object is ready.
     */
    getIntrospectionAsync(callback: ServiceIntrospectionCallback): void
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
    getIntrospectionAsyncFull(callback: ServiceIntrospectionCallback, cancellable: Gio.Cancellable | null): void
    /**
     * Get the location of the device description file.
     * @returns A constant string.
     */
    getLocation(): string | null
    /**
     * Get the SCPD URL for this service, or %NULL if there is no SCPD.
     * @returns A string. This string should be freed with g_free() after use.
     */
    getScpdUrl(): string | null
    /**
     * Get the UPnP service type, or %NULL.
     * @returns A constant string.
     */
    getServiceType(): string | null
    /**
     * Get the Unique Device Name of the containing device.
     * @returns A constant string.
     */
    getUdn(): string | null
    /**
     * Get the URL base of this service.
     * @returns A constant #SoupURI.
     */
    getUrlBase(): Soup.URI

    // Class property signals of GUPnP-1.0.GUPnP.ServiceInfo

    connect(sigName: "notify::context", callback: (...args: any[]) => void): number
    on(sigName: "notify::context", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::context", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::context", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::context", ...args: any[]): void
    connect(sigName: "notify::document", callback: (...args: any[]) => void): number
    on(sigName: "notify::document", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::document", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::document", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::document", ...args: any[]): void
    connect(sigName: "notify::element", callback: (...args: any[]) => void): number
    on(sigName: "notify::element", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::element", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::element", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::element", ...args: any[]): void
    connect(sigName: "notify::location", callback: (...args: any[]) => void): number
    on(sigName: "notify::location", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::location", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::location", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::location", ...args: any[]): void
    connect(sigName: "notify::service-type", callback: (...args: any[]) => void): number
    on(sigName: "notify::service-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::service-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::service-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::service-type", ...args: any[]): void
    connect(sigName: "notify::udn", callback: (...args: any[]) => void): number
    on(sigName: "notify::udn", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::udn", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::udn", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::udn", ...args: any[]): void
    connect(sigName: "notify::url-base", callback: (...args: any[]) => void): number
    on(sigName: "notify::url-base", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::url-base", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::url-base", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::url-base", ...args: any[]): void
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
 * This struct contains private data only, and should be accessed using the
 * functions below.
 * @class 
 */
export class ServiceInfo extends GObject.Object {

    // Own properties of GUPnP-1.0.GUPnP.ServiceInfo

    static name: string

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
    __gtype__: number

    // Own fields of GUPnP-1.0.GUPnP.ServiceIntrospection

    parent: GObject.Object
    priv: ServiceIntrospectionPrivate

    // Owm methods of GUPnP-1.0.GUPnP.ServiceIntrospection

    /**
     * Returns the action by the name `action_name` in this service.
     * @param actionName The name of the action to retrieve
     * @returns the action or %NULL. Do not modify or free it.
     */
    getAction(actionName: string | null): ServiceActionInfo
    /**
     * Returns the state variable by the name `variable_name` in this service.
     * @param variableName The name of the variable to retrieve
     * @returns the state variable or %NULL. Do not modify or free it.
     */
    getStateVariable(variableName: string | null): ServiceStateVariableInfo
    /**
     * Returns a GList of names of all the actions in this service.
     * @returns A GList of names of all the actions or %NULL. Do not modify or free it or its contents.
     */
    listActionNames(): string[]
    /**
     * Returns a #GList of all the actions (of type #GUPnPServiceActionInfo) in
     * this service.
     * @returns A #GList of all the actions or %NULL. Do not modify or free it or its contents.
     */
    listActions(): ServiceActionInfo[]
    /**
     * Returns a #GList of names of all the state variables in this service.
     * @returns A #GList of names of all the state variables or %NULL. Do not modify or free it or its contents.
     */
    listStateVariableNames(): string[]
    /**
     * Returns a GList of all the state variables (of type
     * #GUPnPServiceStateVariableInfo) in this service.
     * @returns  A #GList of all the state variables or %NULL. Do not modify or free it or its contents.
     */
    listStateVariables(): ServiceStateVariableInfo[]

    // Class property signals of GUPnP-1.0.GUPnP.ServiceIntrospection

    connect(sigName: "notify::scpd", callback: (...args: any[]) => void): number
    on(sigName: "notify::scpd", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::scpd", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::scpd", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::scpd", ...args: any[]): void
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
 * This struct contains private data only, and should be accessed using the
 * functions below.
 * @class 
 */
export class ServiceIntrospection extends GObject.Object {

    // Own properties of GUPnP-1.0.GUPnP.ServiceIntrospection

    static name: string

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
        (error: GLib.Error): void
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
    __gtype__: number

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
    addNotify(variable: string | null, type: GObject.GType, callback: ServiceProxyNotifyCallback): boolean
    /**
     * Get a notification for anything that happens on the peer. `value` in
     * `callback` will be of type #G_TYPE_POINTER and contain the pre-parsed
     * #xmlDoc. Do NOT free or modify this document.
     * @param callback The callback to call when the peer issues any variable notification.
     * @returns %TRUE on success.
     */
    addRawNotify(callback: ServiceProxyNotifyCallback): boolean
    /**
     * A variant of #gupnp_service_proxy_begin_action that takes lists of
     * in-parameter names, types and values.
     * @param action An action
     * @param inNames #GList of 'in' parameter names (as strings)
     * @param inValues #GList of values (as #GValue) that line up with `in_names`
     * @param callback The callback to call when sending the action has succeeded or failed
     * @returns A #GUPnPServiceProxyAction handle. This will be freed when calling gupnp_service_proxy_cancel_action() or gupnp_service_proxy_end_action_list().
     */
    beginActionList(action: string | null, inNames: string[], inValues: any[], callback: ServiceProxyActionCallback): ServiceProxyAction
    /**
     * Cancels `action,` freeing the `action` handle.
     * @param action A #GUPnPServiceProxyAction handle
     */
    cancelAction(action: ServiceProxyAction): void
    /**
     * See gupnp_service_proxy_end_action(); this version takes a #GHashTable for
     * runtime generated parameter lists.
     * @param action A #GUPnPServiceProxyAction handle
     * @param hash A #GHashTable of out parameter name and initialised #GValue pairs
     * @returns %TRUE on success.
     */
    endActionHash(action: ServiceProxyAction, hash: GLib.HashTable): [ /* returnType */ boolean, /* hash */ GLib.HashTable ]
    /**
     * A variant of #gupnp_service_proxy_end_action that takes lists of
     * out-parameter names, types and place-holders for values. The returned list
     * in `out_values` must be freed using #g_list_free and each element in it using
     * #g_value_unset and #g_slice_free.
     * @param action A #GUPnPServiceProxyAction handle
     * @param outNames #GList of 'out' parameter names (as strings)
     * @param outTypes #GList of types (as #GType) that line up with `out_names`
     * @returns %TRUE on success.
     */
    endActionList(action: ServiceProxyAction, outNames: string[], outTypes: GObject.GType[]): [ /* returnType */ boolean, /* outValues */ any[] ]
    /**
     * Returns if we are subscribed to this service.
     * @returns %TRUE if we are subscribed to this service, otherwise %FALSE.
     */
    getSubscribed(): boolean
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
    removeNotify(variable: string | null, callback: ServiceProxyNotifyCallback): boolean
    /**
     * Cancels the variable change notification for `callback` and `user_data`.
     * 
     * This function must not be called directly or indirectly from a
     * #GUPnPServiceProxyNotifyCallback associated with this service proxy, even
     * if it is for another variable.
     * @param callback The callback to call when `variable` changes
     * @returns %TRUE on success.
     */
    removeRawNotify(callback: ServiceProxyNotifyCallback): boolean
    /**
     * The synchronous variant of #gupnp_service_proxy_begin_action_list and
     * #gupnp_service_proxy_end_action_list.
     * @param action An action
     * @param inNames #GList of 'in' parameter names (as strings)
     * @param inValues #GList of values (as #GValue) that line up with `in_names`
     * @param outNames #GList of 'out' parameter names (as strings)
     * @param outTypes #GList of types (as #GType) that line up with `out_names`
     * @returns %TRUE if sending the action was succesful.
     */
    sendActionList(action: string | null, inNames: string[], inValues: any[], outNames: string[], outTypes: GObject.GType[]): [ /* returnType */ boolean, /* outValues */ any[] ]
    /**
     * (Un)subscribes to this service.
     * 
     * Note that the relevant messages are not immediately sent but queued.
     * If you want to unsubcribe from this service because the application
     * is quitting, rely on automatic synchronised unsubscription on object
     * destruction instead.
     * @param subscribed %TRUE to subscribe to this service
     */
    setSubscribed(subscribed: boolean): void

    // Own virtual methods of GUPnP-1.0.GUPnP.ServiceProxy

    subscriptionLost(reason: GLib.Error): void

    // Own signals of GUPnP-1.0.GUPnP.ServiceProxy

    connect(sigName: "subscription-lost", callback: ServiceProxy.SubscriptionLostSignalCallback): number
    on(sigName: "subscription-lost", callback: ServiceProxy.SubscriptionLostSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "subscription-lost", callback: ServiceProxy.SubscriptionLostSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "subscription-lost", callback: ServiceProxy.SubscriptionLostSignalCallback): NodeJS.EventEmitter
    emit(sigName: "subscription-lost", ...args: any[]): void

    // Class property signals of GUPnP-1.0.GUPnP.ServiceProxy

    connect(sigName: "notify::subscribed", callback: (...args: any[]) => void): number
    on(sigName: "notify::subscribed", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::subscribed", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::subscribed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::subscribed", ...args: any[]): void
    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: "notify::context", callback: (...args: any[]) => void): number
    on(sigName: "notify::context", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::context", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::context", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::context", ...args: any[]): void
    connect(sigName: "notify::document", callback: (...args: any[]) => void): number
    on(sigName: "notify::document", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::document", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::document", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::document", ...args: any[]): void
    connect(sigName: "notify::element", callback: (...args: any[]) => void): number
    on(sigName: "notify::element", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::element", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::element", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::element", ...args: any[]): void
    connect(sigName: "notify::location", callback: (...args: any[]) => void): number
    on(sigName: "notify::location", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::location", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::location", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::location", ...args: any[]): void
    connect(sigName: "notify::service-type", callback: (...args: any[]) => void): number
    on(sigName: "notify::service-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::service-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::service-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::service-type", ...args: any[]): void
    connect(sigName: "notify::udn", callback: (...args: any[]) => void): number
    on(sigName: "notify::udn", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::udn", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::udn", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::udn", ...args: any[]): void
    connect(sigName: "notify::url-base", callback: (...args: any[]) => void): number
    on(sigName: "notify::url-base", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::url-base", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::url-base", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::url-base", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

/**
 * This struct contains private data only, and should be accessed using the
 * functions below.
 * @class 
 */
export class ServiceProxy extends ServiceInfo {

    // Own properties of GUPnP-1.0.GUPnP.ServiceProxy

    static name: string

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
    __gtype__: number

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
    addEntry(entry: string | null): boolean
    /**
     * Add a list of entries to a #GUPnPWhiteList. This is a helper function to
     * directly add a %NULL-terminated array of string usually aquired from
     * commandline args.
     * @param entries A %NULL-terminated list of strings
     */
    addEntryv(entries: string[]): void
    /**
     * It will check if the `context` is allowed or not. The `white_list` will check
     * all its entries againt #GUPnPContext interface, host ip and network fields
     * information. This function doesn't take into account the `white_list` status
     * (enabled or not).
     * @param context A #GUPnPContext to test.
     * @returns %TRUE if @context is matching the @white_list criterias, %FALSE otherwise.
     */
    checkContext(context: Context): boolean
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
    getEnabled(): boolean
    /**
     * Get the #GList of entries that compose the white list. Do not free
     * @returns a #GList of entries used to filter networks, interfaces,... or %NULL. Do not modify or free the list nor its elements.
     */
    getEntries(): string[]
    /**
     * Return the state of the entries list of #GUPnPWhiteList
     * @returns %TRUE if @white_list is empty, %FALSE otherwise.
     */
    isEmpty(): boolean
    /**
     * Remove `entry` in the list of valid criteria used by `white_list` to
     * filter networks.
     * @param entry A value to remove from the filter list.
     * @returns %TRUE if @entry is removed, %FALSE otherwise.
     */
    removeEntry(entry: string | null): boolean
    /**
     * Enable or disable the #GUPnPWhiteList to perform the network filtering.
     * @param enable %TRUE to enable `white_list,` %FALSE otherwise
     */
    setEnabled(enable: boolean): void

    // Class property signals of GUPnP-1.0.GUPnP.WhiteList

    connect(sigName: "notify::enabled", callback: (...args: any[]) => void): number
    on(sigName: "notify::enabled", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::enabled", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::enabled", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::enabled", ...args: any[]): void
    connect(sigName: "notify::entries", callback: (...args: any[]) => void): number
    on(sigName: "notify::entries", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::entries", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::entries", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::entries", ...args: any[]): void
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
 * This struct contains private data only, and should be accessed using the
 * functions below.
 * @class 
 */
export class WhiteList extends GObject.Object {

    // Own properties of GUPnP-1.0.GUPnP.WhiteList

    static name: string

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

    // Own properties of GUPnP-1.0.GUPnP.XMLDoc

    __gtype__: number

    // Own fields of GUPnP-1.0.GUPnP.XMLDoc

    parent: GObject.Object
    /**
     * Pointer to the document.
     * @field 
     */
    doc: libxml2.Doc

    // Class property signals of GUPnP-1.0.GUPnP.XMLDoc

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
 * Reference-counting wrapper for libxml's #xmlDoc
 * @class 
 */
export class XMLDoc extends GObject.Object {

    // Own properties of GUPnP-1.0.GUPnP.XMLDoc

    static name: string

    // Constructors of GUPnP-1.0.GUPnP.XMLDoc

    constructor(config?: XMLDoc.ConstructorProperties) 
    /**
     * Create a new #GUPnPXMLDoc for `xml_doc`.
     * @constructor 
     * @param xmlDoc Pointer to #xmlDoc to wrap under this object
     * @returns A new #GUPnPXMLDoc, or %NULL on an error
     */
    constructor(xmlDoc: libxml2.Doc) 
    /**
     * Create a new #GUPnPXMLDoc for `xml_doc`.
     * @constructor 
     * @param xmlDoc Pointer to #xmlDoc to wrap under this object
     * @returns A new #GUPnPXMLDoc, or %NULL on an error
     */
    static new(xmlDoc: libxml2.Doc): XMLDoc
    /**
     * Create a new #GUPnPXMLDoc for the XML document at `path`.
     * @constructor 
     * @param path Path to xml document
     * @returns A new #GUPnPXMLDoc, or %NULL on an error
     */
    static newFromPath(path: string | null): XMLDoc
    _init(config?: XMLDoc.ConstructorProperties): void
}

export interface AclInterface {

    // Own fields of GUPnP-1.0.GUPnP.AclInterface

    /**
     * The parent interface.
     * @field 
     */
    parent: GObject.TypeInterface
    isAllowed: (self: Acl, device: any | null, service: any | null, path: string | null, address: string | null, agent: string | null) => boolean
    isAllowedAsync: (self: Acl, device: any | null, service: any | null, path: string | null, address: string | null, agent: string | null, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null) => void
    isAllowedFinish: (self: Acl, res: Gio.AsyncResult) => boolean
    canSync: (self: Acl) => boolean
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

    parentClass: GSSDP.ClientClass
}

export abstract class ContextClass {

    // Own properties of GUPnP-1.0.GUPnP.ContextClass

    static name: string
}

export interface ContextManagerClass {

    // Own fields of GUPnP-1.0.GUPnP.ContextManagerClass

    parentClass: GObject.ObjectClass
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

    parentClass: GSSDP.ResourceBrowserClass
    deviceProxyAvailable: (controlPoint: ControlPoint, proxy: DeviceProxy) => void
    deviceProxyUnavailable: (controlPoint: ControlPoint, proxy: DeviceProxy) => void
    serviceProxyAvailable: (controlPoint: ControlPoint, proxy: ServiceProxy) => void
    serviceProxyUnavailable: (controlPoint: ControlPoint, proxy: ServiceProxy) => void
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

    parentClass: DeviceInfoClass
}

export abstract class DeviceClass {

    // Own properties of GUPnP-1.0.GUPnP.DeviceClass

    static name: string
}

export interface DeviceInfoClass {

    // Own fields of GUPnP-1.0.GUPnP.DeviceInfoClass

    parentClass: GObject.ObjectClass
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

    parentClass: DeviceInfoClass
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

    parentClass: GObject.ObjectClass
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

    parentClass: DeviceClass
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
    getArgumentCount(): number
    /**
     * Retrieves the value of `argument` into a GValue of type `type` and returns it.
     * The method exists only and only to satify PyGI, please use
     * gupnp_service_action_get_value() and ignore this if possible.
     * @param argument The name of the argument to retrieve
     * @param type The type of argument to retrieve
     * @returns Value as #GValue associated with @action. g_value_unset() and g_slice_free() it after usage.
     */
    getValue(argument: string | null, type: GObject.GType): any
    /**
     * Get an ordered (preferred first) #GList of locales preferred by
     * the client. Free list and elements after use.
     * @returns A #GList of #char* locale names.
     */
    getLocales(): string[]
    /**
     * Get the #SoupMessage associated with `action`. Mainly intended for
     * applications to be able to read HTTP headers received from clients.
     * @returns #SoupMessage associated with @action. Unref after using it.
     */
    getMessage(): Soup.Message
    /**
     * Get the name of `action`.
     * @returns The name of @action
     */
    getName(): string | null
    /**
     * A variant of #gupnp_service_action_get that uses #GList instead of varargs.
     * @param argNames A #GList of argument names as string
     * @param argTypes A #GList of argument types as #GType
     * @returns The values as #GList of #GValue. g_list_free() the returned list and g_value_unset() and g_slice_free() each element.
     */
    getValues(argNames: string[], argTypes: GObject.GType[]): any[]
    /**
     * Return succesfully.
     */
    return(): void
    /**
     * Return `error_code`.
     * @param errorCode The error code
     * @param errorDescription The error description, or %NULL if `error_code` is one of #GUPNP_CONTROL_ERROR_INVALID_ACTION, #GUPNP_CONTROL_ERROR_INVALID_ARGS, #GUPNP_CONTROL_ERROR_OUT_OF_SYNC or #GUPNP_CONTROL_ERROR_ACTION_FAILED, in which case a description is provided automatically.
     */
    returnError(errorCode: number, errorDescription: string | null): void
    /**
     * Sets the value of `argument` to `value`.
     * @param argument The name of the return value to retrieve
     * @param value The #GValue to store the return value
     */
    setValue(argument: string | null, value: any): void
    /**
     * Sets the specified action return values.
     * @param argNames A #GList of argument names
     * @param argValues The #GList of values (as #GValues) that line up with `arg_names`.
     */
    setValues(argNames: string[], argValues: any[]): void
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
    relatedStateVariable: string | null
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

    parentClass: ServiceInfoClass
    actionInvoked: (service: Service, action: ServiceAction) => void
    queryVariable: (service: Service, variable: string | null, value: any) => void
}

export abstract class ServiceClass {

    // Own properties of GUPnP-1.0.GUPnP.ServiceClass

    static name: string
}

export interface ServiceInfoClass {

    // Own fields of GUPnP-1.0.GUPnP.ServiceInfoClass

    parentClass: GObject.ObjectClass
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

    parentClass: GObject.ObjectClass
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

    parentClass: ServiceInfoClass
    subscriptionLost: (proxy: ServiceProxy, reason: GLib.Error) => void
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
    sendEvents: boolean
    /**
     * Wether this state variable is a numeric type (integer and
     * float).
     * @field 
     */
    isNumeric: boolean
    /**
     * The GType of this state variable.
     * @field 
     */
    type: GObject.GType
    /**
     * The default value of this state variable.
     * @field 
     */
    defaultValue: any
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
    allowedValues: string[]
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

    parentClass: GObject.ObjectClass
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

    parentClass: GObject.ObjectClass
}

export abstract class XMLDocClass {

    // Own properties of GUPnP-1.0.GUPnP.XMLDocClass

    static name: string
}

// END