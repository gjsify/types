
/*
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in `ts-for-gir` or create a bug report on https://github.com/gjsify/ts-for-gir
 */

import './gupnp-1.6-ambient.d.ts';
import './gupnp-1.6-import.d.ts';
/**
 * GUPnP-1.6
 */

import type libxml2 from '@girs/libxml2-2.0';
import type Soup from '@girs/soup-3.0';
import type Gio from '@girs/gio-2.0';
import type GObject from '@girs/gobject-2.0';
import type GLib from '@girs/glib-2.0';
import type GSSDP from '@girs/gssdp-1.6';

export namespace GUPnP {

/**
 * Error codes used during invocation of service actions.
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
 * Error codes during eventing of state variables.
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
 * Errors during [class`GUPnP`.RootDevice] creation
 */
enum RootdeviceError {
    /**
     * No #GUPnPContext was passed to the root device.
     */
    NO_CONTEXT,
    /**
     * Device description path was missing
     */
    NO_DESCRIPTION_PATH,
    /**
     * Description folder was missing
     */
    NO_DESCRIPTION_FOLDER,
    /**
     * Network interface is not usable
     */
    NO_NETWORK,
    FAIL,
}
/**
 * Error codes during communication with another server.
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
 * Errors during service handling
 */
enum ServiceError {
    /**
     * [method`GUPnP`.Service.signals_autoconnect] failed
     */
    AUTOCONNECT,
}
/**
 * Errors during service introspection
 */
enum ServiceIntrospectionError {
    /**
     * Unknown error
     */
    OTHER,
}
/**
 * Errors during occuring during processing of XML data.
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
 * @returns A newly generated UUID in string representation.
 */
function get_uuid(): string | null
function rootdevice_error_quark(): GLib.Quark
function server_error_quark(): GLib.Quark
function service_error_quark(): GLib.Quark
function service_introspection_error_quark(): GLib.Quark
function xml_error_quark(): GLib.Quark
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
module Acl {

    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

interface Acl {

    // Owm methods of GUPnP-1.6.GUPnP.Acl

    /**
     * Check whether [method`GUPnP`.Acl.is_allowed_async] is supported.
     */
    can_sync(): boolean
    /**
     * Check whether an IP address is allowed to access this resource.
     * @param device The [class`GUPnP`.Device] associated with `path` or %NULL if unknown.
     * @param service The [class`GUPnP`.Service] associated with `path` or %NULL if unknown.
     * @param path The path being served.
     * @param address IP address of the peer.
     * @param agent The User-Agent header of the peer or %NULL if unknown. `returns` %TRUE if the peer is allowed, %FALSE otherwise
     */
    is_allowed(device: any | null, service: any | null, path: string, address: string, agent: string | null): boolean
    /**
     * Check asynchronously whether an IP address is allowed to access
     * this resource.
     * 
     * This function is optional. [method`GUPnP`.Acl.can_sync] should return %TRUE
     * if the implementing class supports it. If it is supported, GUPnP will
     * prefer to use this function over [method`GUPnP`.Acl.is_allowed].
     * 
     * Implement this function if the process of verifying the access right
     * is expected to take some time, for example when using D-Bus etc.
     * 
     * Use [method`GUPnP`.Acl.is_allowed_finish] to retrieve the result.
     * @param device The [class`GUPnP`.Device] associated with `path` or %NULL if unknown.
     * @param service The [class`GUPnP`.Service] associated with `path` or %NULL if unknown.
     * @param path The path being served.
     * @param address IP address of the peer
     * @param agent The User-Agent header of the peer or %NULL if not unknown.
     * @param cancellable A cancellable which can be used to cancel the operation.
     * @param callback Callback to call after the function is done.
     */
    is_allowed_async(device: any | null, service: any | null, path: string, address: string, agent: string | null, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void

    // Overloads of is_allowed_async

    /**
     * Promisified version of {@link is_allowed_async}
     * 
     * Check asynchronously whether an IP address is allowed to access
     * this resource.
     * 
     * This function is optional. [method`GUPnP`.Acl.can_sync] should return %TRUE
     * if the implementing class supports it. If it is supported, GUPnP will
     * prefer to use this function over [method`GUPnP`.Acl.is_allowed].
     * 
     * Implement this function if the process of verifying the access right
     * is expected to take some time, for example when using D-Bus etc.
     * 
     * Use [method`GUPnP`.Acl.is_allowed_finish] to retrieve the result.
     * @param device The [class`GUPnP`.Device] associated with `path` or %NULL if unknown.
     * @param service The [class`GUPnP`.Service] associated with `path` or %NULL if unknown.
     * @param path The path being served.
     * @param address IP address of the peer
     * @param agent The User-Agent header of the peer or %NULL if not unknown.
     * @param cancellable A cancellable which can be used to cancel the operation.
     * @returns A Promise of the result of {@link is_allowed_async}
     */
    is_allowed_async(device: any | null, service: any | null, path: string, address: string, agent: string | null, cancellable: Gio.Cancellable | null): globalThis.Promise<boolean>
    /**
     * Get the result of [method`GUPnP`.Acl.is_allowed_async].
     * @param res [iface`Gio`.AsyncResult] obtained from the callback passed to [method`GUPnP`.Acl.is_allowed_async]
     */
    is_allowed_finish(res: Gio.AsyncResult): boolean

    // Own virtual methods of GUPnP-1.6.GUPnP.Acl

    /**
     * Check whether [method`GUPnP`.Acl.is_allowed_async] is supported.
     * @virtual 
     */
    vfunc_can_sync(): boolean
    /**
     * Check whether an IP address is allowed to access this resource.
     * @virtual 
     * @param device The [class`GUPnP`.Device] associated with `path` or %NULL if unknown.
     * @param service The [class`GUPnP`.Service] associated with `path` or %NULL if unknown.
     * @param path The path being served.
     * @param address IP address of the peer.
     * @param agent The User-Agent header of the peer or %NULL if unknown. `returns` %TRUE if the peer is allowed, %FALSE otherwise
     */
    vfunc_is_allowed(device: any | null, service: any | null, path: string, address: string, agent: string | null): boolean
    /**
     * Check asynchronously whether an IP address is allowed to access
     * this resource.
     * 
     * This function is optional. [method`GUPnP`.Acl.can_sync] should return %TRUE
     * if the implementing class supports it. If it is supported, GUPnP will
     * prefer to use this function over [method`GUPnP`.Acl.is_allowed].
     * 
     * Implement this function if the process of verifying the access right
     * is expected to take some time, for example when using D-Bus etc.
     * 
     * Use [method`GUPnP`.Acl.is_allowed_finish] to retrieve the result.
     * @virtual 
     * @param device The [class`GUPnP`.Device] associated with `path` or %NULL if unknown.
     * @param service The [class`GUPnP`.Service] associated with `path` or %NULL if unknown.
     * @param path The path being served.
     * @param address IP address of the peer
     * @param agent The User-Agent header of the peer or %NULL if not unknown.
     * @param cancellable A cancellable which can be used to cancel the operation.
     * @param callback Callback to call after the function is done.
     */
    vfunc_is_allowed_async(device: any | null, service: any | null, path: string, address: string, agent: string | null, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void
    /**
     * Get the result of [method`GUPnP`.Acl.is_allowed_async].
     * @virtual 
     * @param res [iface`Gio`.AsyncResult] obtained from the callback passed to [method`GUPnP`.Acl.is_allowed_async]
     */
    vfunc_is_allowed_finish(res: Gio.AsyncResult): boolean

    // Class property signals of GUPnP-1.6.GUPnP.Acl

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * Access control provider for [class`GUPnP`.Context]
 * 
 * GUPnPAcl provides either synchronous or asynchronous functions to check
 * whether a peer should be able to access a resource that is hosted by GUPnP or not.
 * @interface 
 */
class Acl extends GObject.Object {

    // Own properties of GUPnP-1.6.GUPnP.Acl

    static name: string
    static $gtype: GObject.GType<Acl>

    // Constructors of GUPnP-1.6.GUPnP.Acl

    constructor(config?: Acl.ConstructorProperties) 
    _init(config?: Acl.ConstructorProperties): void
}

module Context {

    // Constructor properties interface

    interface ConstructorProperties extends Gio.Initable.ConstructorProperties, GSSDP.Client.ConstructorProperties {

        // Own constructor properties of GUPnP-1.6.GUPnP.Context

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
         * The preferred subscription timeout: the number of seconds after
         * which subscriptions are renewed. Set to '0' if subscriptions
         * are never to time out.
         */
        subscriptionTimeout?: number | null
    }

}

interface Context extends Gio.Initable {

    // Own properties of GUPnP-1.6.GUPnP.Context

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

    // Own fields of GUPnP-1.6.GUPnP.Context

    parent_instance: GSSDP.Client & GObject.Object

    // Owm methods of GUPnP-1.6.GUPnP.Context

    /**
     * Add a #SoupServerCallback to the #GUPnPContext<!-- -->'s #SoupServer.
     * @param use_acl %TRUE, if the path should query the GUPnPContext::acl before serving the resource, %FALSE otherwise.
     * @param path the toplevel path for the handler.
     * @param callback callback to invoke for requests under `path`
     */
    add_server_handler(use_acl: boolean, path: string, callback: Soup.ServerCallback): void
    /**
     * Access the #GUPnPAcl associated with this client. If there isn't any,
     * retturns %NULL. The returned ACL must not be freed.
     * @returns The access control list associated with this context or %NULL if no acl is set.
     */
    get_acl(): Acl
    /**
     * Get the default Content-Language header for this context.
     * @returns The default content of the Content-Language header.
     */
    get_default_language(): string
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
    host_path(local_path: string, server_path: string): void
    /**
     * Use this method to serve different local path to specific user-agent(s). The
     * path `server_path` must already be hosted by `context`.
     * @param local_path Path to the local file or folder to be hosted
     * @param server_path Web server path already being hosted
     * @param user_agent The user-agent as a #GRegex.
     * @returns %TRUE on success, %FALSE otherwise.
     */
    host_path_for_agent(local_path: string, server_path: string, user_agent: GLib.Regex): boolean
    /**
     * Remove a #SoupServerCallback from the #GUPnPContext<!-- -->'s #SoupServer.
     * @param path the toplevel path for the handler.
     */
    remove_server_handler(path: string): void
    /**
     * Utility function to re-write an uri to the IPv6 link-local form which has
     * the zone index appended to the IP address.
     * @param uri an uri to rewrite if necessary
     * @returns A re-written version of the @uri if the context is on a link-local IPv6 address, a copy of the @uri otherwise or %NULL if @uri was invalid
     */
    rewrite_uri(uri: string): string | null
    /**
     * Attach or remove the assoicated access control list to this context. If
     * `acl` is %NULL, the current access control list will be removed.
     * @param acl The new access control list or %NULL to remove the current list.
     */
    set_acl(acl: Acl | null): void
    /**
     * Set the default language for the Content-Language header to `language`.
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

    // Class property signals of GUPnP-1.6.GUPnP.Context

    connect(sigName: "notify::acl", callback: (($obj: Context, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::acl", callback: (($obj: Context, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::acl", ...args: any[]): void
    connect(sigName: "notify::default-language", callback: (($obj: Context, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::default-language", callback: (($obj: Context, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::default-language", ...args: any[]): void
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
    connect(sigName: "notify::address", callback: (($obj: Context, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::address", callback: (($obj: Context, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::address", ...args: any[]): void
    connect(sigName: "notify::address-family", callback: (($obj: Context, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::address-family", callback: (($obj: Context, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::address-family", ...args: any[]): void
    connect(sigName: "notify::boot-id", callback: (($obj: Context, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::boot-id", callback: (($obj: Context, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::boot-id", ...args: any[]): void
    connect(sigName: "notify::config-id", callback: (($obj: Context, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::config-id", callback: (($obj: Context, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::config-id", ...args: any[]): void
    connect(sigName: "notify::host-ip", callback: (($obj: Context, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::host-ip", callback: (($obj: Context, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::host-ip", ...args: any[]): void
    connect(sigName: "notify::host-mask", callback: (($obj: Context, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::host-mask", callback: (($obj: Context, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::host-mask", ...args: any[]): void
    connect(sigName: "notify::interface", callback: (($obj: Context, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::interface", callback: (($obj: Context, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::interface", ...args: any[]): void
    connect(sigName: "notify::msearch-port", callback: (($obj: Context, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::msearch-port", callback: (($obj: Context, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::msearch-port", ...args: any[]): void
    connect(sigName: "notify::network", callback: (($obj: Context, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::network", callback: (($obj: Context, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::network", ...args: any[]): void
    connect(sigName: "notify::port", callback: (($obj: Context, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::port", callback: (($obj: Context, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::port", ...args: any[]): void
    connect(sigName: "notify::server-id", callback: (($obj: Context, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::server-id", callback: (($obj: Context, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::server-id", ...args: any[]): void
    connect(sigName: "notify::socket-ttl", callback: (($obj: Context, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::socket-ttl", callback: (($obj: Context, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::socket-ttl", ...args: any[]): void
    connect(sigName: "notify::uda-version", callback: (($obj: Context, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::uda-version", callback: (($obj: Context, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::uda-version", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * Context object wrapping shared networking bits.
 * 
 * #GUPnPContext wraps the networking bits that are used by the various
 * GUPnP classes. It automatically starts a web server on demand.
 * 
 * For debugging, it is possible to see the messages being sent and received by
 * setting the environment variable `GUPNP_DEBUG`.
 * @class 
 */
class Context extends GSSDP.Client {

    // Own properties of GUPnP-1.6.GUPnP.Context

    static name: string
    static $gtype: GObject.GType<Context>

    // Constructors of GUPnP-1.6.GUPnP.Context

    constructor(config?: Context.ConstructorProperties) 
    /**
     * Create a new #GUPnPContext with the specified `iface` and
     * `port`.
     * @constructor 
     * @param iface The network interface to use, or %NULL to auto-detect.
     * @param port Port to run on, or 0 if you don't care what port is used.
     * @returns A new #GUPnPContext object, or %NULL on an error
     */
    constructor(iface: string | null, port: number) 
    /**
     * Create a new #GUPnPContext with the specified `iface` and
     * `port`.
     * @constructor 
     * @param iface The network interface to use, or %NULL to auto-detect.
     * @param port Port to run on, or 0 if you don't care what port is used.
     * @returns A new #GUPnPContext object, or %NULL on an error
     */
    static new(iface: string | null, port: number): Context

    // Overloads of new

    /**
     * Creates a GSSDP client on `iface`. GSSDPClient will pick the address it finds
     * suitable for using.
     * 
     * Using this utility function, the created client will be using UDA 1.0 and
     * IPv4 only.
     * @constructor 
     * @param iface The name of the network interface, or %NULL for auto-detection.
     * @returns A new #GSSDPClient object.
     */
    static new(iface: string | null): GSSDP.Client
    /**
     * Creates a GUPnP context with address `addr`. If none is specified, GUPnP
     * will chose the address it deems most suitable.
     * @constructor 
     * @param addr an IP address or %NULL for auto-detection. If you do not care about the address, but want to specify an address family, use [ctor`Glib`.InetAddress.new_any] with the appropriate family instead.
     * @param port The network port to use for M-SEARCH requests or 0 for random.
     * @param uda_version The UDA version this client will adhere to
     * @returns A new #GSSDPClient object or %NULL on error.
     */
    static new_for_address(addr: Gio.InetAddress | null, port: number, uda_version: GSSDP.UDAVersion): Context

    // Overloads of new_for_address

    /**
     * Creates a GSSDP client with address `addr`. If none is specified, GSSDP
     * will chose the address it deems most suitable.
     * @constructor 
     * @param addr an IP address or %NULL for auto-detection. If you do not care about the address, but want to specify an address family, use [ctor`Glib`.InetAddress.new_any] with the appropriate family instead.
     * @param port The network port to use for M-SEARCH requests or 0 for random.
     * @param uda_version The UDA version this client will adhere to
     * @returns A new #GSSDPClient object or %NULL on error.
     */
    static new_for_address(addr: Gio.InetAddress | null, port: number, uda_version: GSSDP.UDAVersion): GSSDP.Client
    /**
     * Creates a GUPnP context with address `addr` on network interface `iface`. If
     * neither is specified, GUPnP will chose the address it deems most suitable.
     * @constructor 
     * @param iface the name of a network interface
     * @param addr an IP address or %NULL for auto-detection. If you do not care about the address, but want to specify an address family, use [ctor`Glib`.InetAddress.new_any] with the appropriate family instead.
     * @param port The network port to use for M-SEARCH requests or 0 for random.
     * @param uda_version The UDA version this client will adhere to
     * @returns A new #GSSDPClient object or %NULL on error.
     */
    static new_full(iface: string | null, addr: Gio.InetAddress | null, port: number, uda_version: GSSDP.UDAVersion): Context

    // Overloads of new_full

    /**
     * Creates a GSSDP client with address `addr`. If none is specified, GSSDP
     * will chose the address it deems most suitable.
     * @constructor 
     * @param iface the name of a network interface
     * @param addr an IP address or %NULL for auto-detection. If you do not care about the address, but want to specify an address family, use [ctor`Glib`.InetAddress.new_any] with the appropriate family instead.
     * @param port The network port to use for M-SEARCH requests or 0 for random.
     * @param uda_version The UDA version this client will adhere to
     * @returns A new #GSSDPClient object or %NULL on error.
     */
    static new_full(iface: string | null, addr: Gio.InetAddress | null, port: number, uda_version: GSSDP.UDAVersion): GSSDP.Client
    _init(config?: Context.ConstructorProperties): void
}

module ContextFilter {

    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of GUPnP-1.6.GUPnP.ContextFilter

        /**
         * Whether this context filter is active or not.
         */
        enabled?: boolean | null
        /**
         * A list of items to filter for.
         */
        entries?: string[] | null
    }

}

interface ContextFilter {

    // Own properties of GUPnP-1.6.GUPnP.ContextFilter

    /**
     * Whether this context filter is active or not.
     */
    enabled: boolean
    /**
     * A list of items to filter for.
     */
    readonly entries: string[]

    // Own fields of GUPnP-1.6.GUPnP.ContextFilter

    parent_instance: GObject.Object

    // Owm methods of GUPnP-1.6.GUPnP.ContextFilter

    /**
     * Add `entry` in the list of valid criteria used by `context_filter` to
     * filter networks.
     * if `entry` already exists, it won't be added a second time.
     * @param entry A value used to filter network
     * @returns %TRUE if @entry is added, %FALSE otherwise.
     */
    add_entry(entry: string): boolean
    /**
     * Add a list of entries to a #GUPnPContextFilter. This is a helper function to
     * directly add a %NULL-terminated array of string usually acquired from
     * command line arguments.
     * @param entries A %NULL-terminated list of strings
     */
    add_entryv(entries: string[]): void
    /**
     * It will check if the `context` is allowed or not. The `context_filter` will
     * check all its entries against #GUPnPContext interface, host IP and network
     * fields information. This function doesn't take into account the
     * `context_filter` status (enabled or not).
     * @param context A #GUPnPContext to test.
     * @returns %TRUE if @context is matching the @context_filter criteria, %FALSE otherwise.
     */
    check_context(context: Context): boolean
    /**
     * Remove all entries from #GList that compose the context filter.
     * The list is now empty. Even if #GUPnPContextFilter is enabled, it will have
     * the same behavior as if it was disabled.
     */
    clear(): void
    /**
     * Return the status of the #GUPnPContextFilter
     * @returns %TRUE if @context_filter is enabled, %FALSE otherwise.
     */
    get_enabled(): boolean
    /**
     * Get the #GList of entries that compose the context filter. Do not free
     * @returns a #GList of entries used to filter networks, interfaces,... or %NULL.
     */
    get_entries(): string[] | null
    /**
     * Return the state of the entries list of #GUPnPContextFilter
     * @returns %TRUE if @context_filter is empty, %FALSE otherwise.
     */
    is_empty(): boolean
    /**
     * Remove `entry` in the list of valid criteria used by `context_filter` to
     * filter networks.
     * @param entry A value to remove from the filter list.
     * @returns %TRUE if @entry is removed, %FALSE otherwise.
     */
    remove_entry(entry: string): boolean
    /**
     * Enable or disable the #GUPnPContextFilter to perform the network filtering.
     * @param enable %TRUE to enable `context_filter,` %FALSE otherwise
     */
    set_enabled(enable: boolean): void

    // Class property signals of GUPnP-1.6.GUPnP.ContextFilter

    connect(sigName: "notify::enabled", callback: (($obj: ContextFilter, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::enabled", callback: (($obj: ContextFilter, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::enabled", ...args: any[]): void
    connect(sigName: "notify::entries", callback: (($obj: ContextFilter, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::entries", callback: (($obj: ContextFilter, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::entries", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * Network context filter, used by [class`GUPnP`.ContextManager]
 * 
 * #GUPnPContextFilter handles network filtering. It provides API to manage a
 * list of entries that will be used to positive filter networks. The #GUPnPContextFilter
 * could be enabled or not. If it's enabled but the entries list is empty, it
 * behaves as if being disabled.
 * 
 * The GUPnPContextFilter is used with the [class`GUPnP`.ContextManager]
 * to narrow down the contexts that are notified by it.
 * 
 * Contexts can be filtered by the following criteria:
 * 
 *  - Their IP addresses
 *  - The network device they will live on
 *  - The name of the network the context would join
 * 
 * To add or modify a context filter, you need to retrieve the current context filter
 * from the context manger using [method`GUPnP`.ContextManager.get_context_filter].
 * 
 * By default, a context filter is empty and disabled.
 * 
 * For example, to only react to contexts that are appearing on eth0 or when being in the WiFi network with
 * the SSID "HomeNetwork", and on IPv6 localhost, you should do:
 * 
 * 
 * ```c
 * GUPnPContextFilter* filter;
 * 
 * filter = gupnp_context_manager_get_context_filter (manager);
 * const char *filter_entries[] = {
 *     "eth0",
 *     "HomeNetwork",
 *     "::1",
 *     NULL
 * };
 * gupnp_context_filter_add_entryv (filter, filter_entries);
 * gupnp_context_filter_set_enabled (filter, TRUE);
 * ```
 * @class 
 */
class ContextFilter extends GObject.Object {

    // Own properties of GUPnP-1.6.GUPnP.ContextFilter

    static name: string
    static $gtype: GObject.GType<ContextFilter>

    // Constructors of GUPnP-1.6.GUPnP.ContextFilter

    constructor(config?: ContextFilter.ConstructorProperties) 
    _init(config?: ContextFilter.ConstructorProperties): void
}

module ContextManager {

    // Signal callback interfaces

    /**
     * Signal callback interface for `context-available`
     */
    interface ContextAvailableSignalCallback {
        ($obj: ContextManager, context: Context): void
    }

    /**
     * Signal callback interface for `context-unavailable`
     */
    interface ContextUnavailableSignalCallback {
        ($obj: ContextManager, context: Context): void
    }


    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of GUPnP-1.6.GUPnP.ContextManager

        /**
         * The socket family to create contexts for. Use %G_SOCKET_FAMILY_INVALID
         * for any or %G_SOCKET_FAMILY_IPV4 for IPv4 contexts or
         * %G_SOCKET_FAMILY_IPV6 for IPv6 contexts
         */
        family?: Gio.SocketFamily | null
        /**
         * Port the contexts listen on, or 0 if you don't care what
         * port is used by #GUPnPContext objects created by this object.
         */
        port?: number | null
        /**
         * The UDA version the contexts will support. Use %GSSDP_UDA_VERSION_UNSPECIFIED
         * for using the default UDA version.
         */
        udaVersion?: GSSDP.UDAVersion | null
    }

}

interface ContextManager {

    // Own properties of GUPnP-1.6.GUPnP.ContextManager

    /**
     * The context filter to use.
     */
    readonly contextFilter: ContextFilter
    /**
     * The socket family to create contexts for. Use %G_SOCKET_FAMILY_INVALID
     * for any or %G_SOCKET_FAMILY_IPV4 for IPv4 contexts or
     * %G_SOCKET_FAMILY_IPV6 for IPv6 contexts
     */
    readonly family: Gio.SocketFamily
    /**
     * Port the contexts listen on, or 0 if you don't care what
     * port is used by #GUPnPContext objects created by this object.
     */
    readonly port: number
    /**
     * The UDA version the contexts will support. Use %GSSDP_UDA_VERSION_UNSPECIFIED
     * for using the default UDA version.
     */
    readonly udaVersion: GSSDP.UDAVersion

    // Own fields of GUPnP-1.6.GUPnP.ContextManager

    parent_instance: GObject.Object

    // Owm methods of GUPnP-1.6.GUPnP.ContextManager

    /**
     * Get the #GUPnPContextFilter associated with `manager`.
     * @returns The #GUPnPContextFilter associated with this context manager.
     */
    get_context_filter(): ContextFilter
    /**
     * Get the network port associated with this context manager.
     * @returns The network port associated with this context manager.
     */
    get_port(): number
    /**
     * Get the #GSocketFamily the contexts are created for. Can be
     * %G_SOCKET_FAMILY_IPV6, %G_SOCKET_FAMILY_IPV4 or %G_SOCKET_FAMILY_INVALID for
     * both
     * @returns The socket family
     */
    get_socket_family(): Gio.SocketFamily
    /**
     * Get the UDA protocol version the contexts are implementing
     * @returns The UDA protocol version
     */
    get_uda_version(): GSSDP.UDAVersion
    /**
     * By calling this function, you are asking `manager` to keep a reference to
     * `control_point` until its associated #GUPnPContext is no longer available.
     * You usually want to call this function from your
     * [signal`GUPnP`.ContextManager::context-available] handler after you create a
     * #GUPnPControlPoint object for the newly available context.
     * You usually then give up your own reference to the control point so it will be
     * automatically destroyed if its context is no longer available.
     * 
     * This function is mainly useful when implementing an UPnP client.
     * 
     * ```c
     * void on_context_available (GUPnPContextManager *manager, GUPnPContext *context, gpointer user_data)
     * {
     *     GUPnPControlPoint *cp = gupnp_control_point_new (context, "urn:schemas-upnp-org:device:MediaRenderer:1");
     *     gupnp_context_manager_manage_control_point (manager, cp);
     *     // Subscribe to control point's signals etc.
     *     g_object_unref (cp);
     * }
     * ```
     * @param control_point The #GUPnPControlPoint to be taken care of
     */
    manage_control_point(control_point: ControlPoint): void
    /**
     * By calling this function, you are asking `manager` to keep a reference to
     * `root_device` when its associated #GUPnPContext is no longer available. You
     * usually want to call this function from
     * [signal`GUPnP`.ContextManager::context-available] handler after you create a
     * #GUPnPRootDevice object for the newly available context.
     * 
     * You usually then give up your own reference to the root device so it will be
     * automatically destroyed if its context is no longer available.
     * 
     * This function is mainly useful when implementing an UPnP client.
     * 
     * ```c
     * void on_context_available (GUPnPContextManager *manager, GUPnPContext *context, gpointer user_data)
     * {
     *     GError *error = NULL;
     * 
     *     GUPnPRootDevice *rd = gupnp_root_device_new (context, "BasicLight1.xml", ".", &error);
     *     gupnp_context_manager_manage_root_device (manager, rd);
     *     // Subscribe to control point's signals etc.
     *     g_object_unref (rd);
     * }
     * ```
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

    // Own signals of GUPnP-1.6.GUPnP.ContextManager

    connect(sigName: "context-available", callback: ContextManager.ContextAvailableSignalCallback): number
    connect_after(sigName: "context-available", callback: ContextManager.ContextAvailableSignalCallback): number
    emit(sigName: "context-available", context: Context, ...args: any[]): void
    connect(sigName: "context-unavailable", callback: ContextManager.ContextUnavailableSignalCallback): number
    connect_after(sigName: "context-unavailable", callback: ContextManager.ContextUnavailableSignalCallback): number
    emit(sigName: "context-unavailable", context: Context, ...args: any[]): void

    // Class property signals of GUPnP-1.6.GUPnP.ContextManager

    connect(sigName: "notify::context-filter", callback: (($obj: ContextManager, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::context-filter", callback: (($obj: ContextManager, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::context-filter", ...args: any[]): void
    connect(sigName: "notify::family", callback: (($obj: ContextManager, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::family", callback: (($obj: ContextManager, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::family", ...args: any[]): void
    connect(sigName: "notify::port", callback: (($obj: ContextManager, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::port", callback: (($obj: ContextManager, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::port", ...args: any[]): void
    connect(sigName: "notify::uda-version", callback: (($obj: ContextManager, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::uda-version", callback: (($obj: ContextManager, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::uda-version", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * A manager for [class`GUPnP`.Context] instances.
 * 
 * This utility class that takes care of dynamic creation and destruction of
 * #GUPnPContext objects for all available network interfaces as they go up
 * (connect) and down (disconnect), respectively.
 * 
 * The final implementation depends either on the underlying operating system
 * or can configured during compile time.
 * 
 * It also provides a simple filtering facility if required. See [method`GUPnP`.ContextManager.get_context_filter] and
 * [class`GUPnP`.ContextFilter] for details.
 * @class 
 */
class ContextManager extends GObject.Object {

    // Own properties of GUPnP-1.6.GUPnP.ContextManager

    static name: string
    static $gtype: GObject.GType<ContextManager>

    // Constructors of GUPnP-1.6.GUPnP.ContextManager

    constructor(config?: ContextManager.ConstructorProperties) 
    _init(config?: ContextManager.ConstructorProperties): void
    /**
     * Factory-method to create a new #GUPnPContextManager. The final type of the
     * #GUPnPContextManager depends on the compile-time selection or - in case of
     * NetworkManager - on its availability during run-time. If it is not available,
     * the implementation falls back to the basic Unix context manager instead.
     * 
     * Equivalent to calling #gupnp_context_manager_create_full (%GSSDP_UDA_VERSION_1_0, %G_SOCKET_FAMILY_IPV4, port);
     * @param port Port to create contexts for, or 0 if you don't care what port is used.
     * @returns A new #GUPnPContextManager object.
     */
    static create(port: number): ContextManager
    /**
     * Factory-method to create a new #GUPnPContextManager. The final type of the
     * #GUPnPContextManager depends on the compile-time selection or - in case of
     * NetworkManager - on its availability during run-time. If it is not available,
     * the implementation falls back to the basic Unix context manager instead.
     * @param uda_version #GSSDPUDAVersion the created contexts should implement (UDA 1.0 or 1.1). For %GSSDP_UDA_VERSION_UNSPECIFIED for default.
     * @param family #GSocketFamily to create the context for
     * @param port Port to create contexts for, or 0 if you don't care what port is used.
     * @returns A new #GUPnPContextManager object.
     */
    static create_full(uda_version: GSSDP.UDAVersion, family: Gio.SocketFamily, port: number): ContextManager
}

module ControlPoint {

    // Signal callback interfaces

    /**
     * Signal callback interface for `device-proxy-available`
     */
    interface DeviceProxyAvailableSignalCallback {
        ($obj: ControlPoint, proxy: DeviceProxy): void
    }

    /**
     * Signal callback interface for `device-proxy-unavailable`
     */
    interface DeviceProxyUnavailableSignalCallback {
        ($obj: ControlPoint, proxy: DeviceProxy): void
    }

    /**
     * Signal callback interface for `service-proxy-available`
     */
    interface ServiceProxyAvailableSignalCallback {
        ($obj: ControlPoint, proxy: ServiceProxy): void
    }

    /**
     * Signal callback interface for `service-proxy-unavailable`
     */
    interface ServiceProxyUnavailableSignalCallback {
        ($obj: ControlPoint, proxy: ServiceProxy): void
    }


    // Constructor properties interface

    interface ConstructorProperties extends GSSDP.ResourceBrowser.ConstructorProperties {

        // Own constructor properties of GUPnP-1.6.GUPnP.ControlPoint

        /**
         * The resource factory to use. Set to NULL for default factory.
         */
        resourceFactory?: ResourceFactory | null
    }

}

interface ControlPoint {

    // Own properties of GUPnP-1.6.GUPnP.ControlPoint

    /**
     * The resource factory to use. Set to NULL for default factory.
     */
    readonly resourceFactory: ResourceFactory

    // Own fields of GUPnP-1.6.GUPnP.ControlPoint

    parent_instance: GSSDP.ResourceBrowser & GObject.Object

    // Owm methods of GUPnP-1.6.GUPnP.ControlPoint

    /**
     * Get the #GUPnPControlPoint associated with `control_point`.
     * @returns The #GUPnPContext.
     */
    get_context(): Context
    /**
     * Get the #GUPnPResourceFactory used by the `control_point`. If none was set during construction
     * by calling [ctor`GUPnP`.ControlPoint.new_full], equivalent to calling
     * [func`GUPnP`.ResourceFactory.get_default]
     * @returns The #GUPnPResourceFactory used by this control point
     */
    get_resource_factory(): ResourceFactory
    /**
     * Get the list of #GUPnPDeviceProxy objects the control point currently assumes to
     * be active.
     * 
     * Since a device might have gone offline without signalizing it, but
     * the automatic resource timeout has not happened yet, it is possible that some of
     * the devices listed are not available anymore on the network.
     * 
     * Do not free the list nor its elements.
     * @returns Device proxies currently assumed to be active.
     */
    list_device_proxies(): DeviceProxy[]
    /**
     * Get the list of discovered #GUPnPServiceProxy objects the control point currently assumes to
     * be active.
     * 
     * Since a device might have gone offline without signalizing it, but
     * the automatic resource timeout has not happened yet, it is possible that some of
     * the services listed are not available anymore on the network.
     * 
     * Do not free the list nor its elements.
     * @returns Service proxies currently assumed to be active.
     */
    list_service_proxies(): ServiceProxy[]

    // Own virtual methods of GUPnP-1.6.GUPnP.ControlPoint

    vfunc_device_proxy_available(proxy: DeviceProxy): void
    vfunc_device_proxy_unavailable(proxy: DeviceProxy): void
    vfunc_service_proxy_available(proxy: ServiceProxy): void
    vfunc_service_proxy_unavailable(proxy: ServiceProxy): void

    // Own signals of GUPnP-1.6.GUPnP.ControlPoint

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

    // Class property signals of GUPnP-1.6.GUPnP.ControlPoint

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
 * Network resource discovery.
 * 
 * #GUPnPControlPoint handles device and service discovery. After creating
 * a control point and activating it using [method`GSSDP`.ResourceBrowser.set_active],
 * the [signal`GUPnP`.ControlPoint::device-proxy-available],
 * [signal`GUPnP`.ControlPoint::service-proxy-available],
 * [signal`GUPnP`.ControlPoint::device-proxy-unavailable] and
 * [signal`GUPnP`.ControlPoint::service-proxy-unavailable] signals will
 * be emitted whenever the availability of a device or service matching
 * the specified discovery target changes.
 * @class 
 */
class ControlPoint extends GSSDP.ResourceBrowser {

    // Own properties of GUPnP-1.6.GUPnP.ControlPoint

    static name: string
    static $gtype: GObject.GType<ControlPoint>

    // Constructors of GUPnP-1.6.GUPnP.ControlPoint

    constructor(config?: ControlPoint.ConstructorProperties) 
    /**
     * Create a new #GUPnPControlPoint with the specified `context` and `target`.
     * 
     * `target` should be a service or device name, such as
     * `urn:schemas-upnp-org:service:WANIPConnection:1` or
     * `urn:schemas-upnp-org:device:MediaRenderer:1`.
     * @constructor 
     * @param context A #GUPnPContext
     * @param target The search target
     * @returns A new #GUPnPControlPoint object.
     */
    constructor(context: Context, target: string) 
    /**
     * Create a new #GUPnPControlPoint with the specified `context` and `target`.
     * 
     * `target` should be a service or device name, such as
     * `urn:schemas-upnp-org:service:WANIPConnection:1` or
     * `urn:schemas-upnp-org:device:MediaRenderer:1`.
     * @constructor 
     * @param context A #GUPnPContext
     * @param target The search target
     * @returns A new #GUPnPControlPoint object.
     */
    static new(context: Context, target: string): ControlPoint

    // Overloads of new

    /**
     * Create a new resource browser for `target`.
     * 
     * `target` is a generic string the resource browser listens for on the SSDP
     * bus. There are several possible targets such as
     * 
     * - `ssdp:all` for everything that is announced using SSDP
     * - `upnp:rootdevice` for UPnP device entry points, not caring about
     *   a special device type
     * - The UUID of a specific device
     * - Device types, such as `urn:schemas-upnp-org:device:MediaServer:1`
     * - Service types, such as `urn:schemas-upnp-org:service:ContentDirectory:1`
     * @constructor 
     * @param client The #GSSDPClient to associate with
     * @param target A SSDP search target
     * @returns A new #GSSDPResourceBrowser object.
     */
    static new(client: GSSDP.Client, target: string): GSSDP.ResourceBrowser
    /**
     * Create a new #GUPnPControlPoint with the specified `context,` `factory` and
     * `target`.
     * 
     * `target` should be a service or device name, such as
     * `urn:schemas-upnp-org:service:WANIPConnection:1` or
     * `urn:schemas-upnp-org:device:MediaRenderer:1`.
     * 
     * By passing a custom `GUPnPResourceFactory`, the proxies handed out in ::device-available and
     * ::service-available can be overridden to hand out custom classes instead of the generic
     * [class`GUPnP`.ServiceProxy] and [class`GUPnP`.DeviceProxy].
     * @constructor 
     * @param context A #GUPnPContext
     * @param factory A #GUPnPResourceFactory
     * @param target The search target
     * @returns A new #GUPnPControlPoint object.
     */
    static new_full(context: Context, factory: ResourceFactory, target: string): ControlPoint
    _init(config?: ControlPoint.ConstructorProperties): void
}

module Device {

    // Constructor properties interface

    interface ConstructorProperties extends DeviceInfo.ConstructorProperties {

        // Own constructor properties of GUPnP-1.6.GUPnP.Device

        /**
         * The containing #GUPnPRootDevice, or NULL if this is the root
         * device.
         */
        rootDevice?: RootDevice | null
    }

}

interface Device {

    // Own properties of GUPnP-1.6.GUPnP.Device

    /**
     * The containing #GUPnPRootDevice, or NULL if this is the root
     * device.
     */
    readonly rootDevice: RootDevice

    // Own fields of GUPnP-1.6.GUPnP.Device

    parent_instance: DeviceInfo & GObject.Object

    // Class property signals of GUPnP-1.6.GUPnP.Device

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
 * Base class for UPnP device implementations.
 * 
 * #GUPnPDevice allows for retrieving a device's sub-devices
 * and services. #GUPnPDevice implements the #GUPnPDeviceInfo
 * interface.
 * @class 
 */
class Device extends DeviceInfo {

    // Own properties of GUPnP-1.6.GUPnP.Device

    static name: string
    static $gtype: GObject.GType<Device>

    // Constructors of GUPnP-1.6.GUPnP.Device

    constructor(config?: Device.ConstructorProperties) 
    _init(config?: Device.ConstructorProperties): void
}

module DeviceInfo {

    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of GUPnP-1.6.GUPnP.DeviceInfo

        /**
         * The #GUPnPContext to use.
         */
        context?: Context | null
        /**
         * The device type, e.g. `urn:schemas-upnp-org:device:InternetGatewayDevice:1`
         */
        deviceType?: string | null
        /**
         * The description document
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
         * The URL base (#GUri).
         */
        urlBase?: GLib.Uri | null
    }

}

interface DeviceInfo {

    // Own properties of GUPnP-1.6.GUPnP.DeviceInfo

    /**
     * The #GUPnPContext to use.
     */
    readonly context: Context
    /**
     * The device type, e.g. `urn:schemas-upnp-org:device:InternetGatewayDevice:1`
     */
    readonly deviceType: string | null
    /**
     * The description document
     */
    document: XMLDoc
    /**
     * Private property.
     */
    element: any
    /**
     * The location of the device description file.
     */
    location: string | null
    /**
     * The resource factory to use. Set to NULL for default factory.
     */
    readonly resourceFactory: ResourceFactory
    /**
     * The UDN of this device.
     */
    readonly udn: string | null
    /**
     * The URL base (#GUri).
     */
    urlBase: GLib.Uri

    // Own fields of GUPnP-1.6.GUPnP.DeviceInfo

    parent_instance: GObject.Object

    // Owm methods of GUPnP-1.6.GUPnP.DeviceInfo

    /**
     * Get the associated #GUPnPContext.
     * @returns The #GUPnPContext the devices is operating on.
     */
    get_context(): Context
    /**
     * This function provides generic access to the contents of arbitrary elements
     * in the device description file.
     * @param element Name of the description element to retrieve
     * @returns a newly allocated string containing the requested value or %NULL if the device description doesn't contain the given @element
     */
    get_description_value(element: string): string | null
    /**
     * Get the device with type `type` directly contained in `info` as
     * a new object implementing #GUPnPDeviceInfo, or %NULL if no such device
     * was found. The returned object should be unreffed when done.
     * 
     * Note that devices are not cached internally, so that every time you call
     * this function a new object is created. The application must cache any used
     * devices if it wishes to keep them around and re-use them.
     * @param type The type of the device to be retrieved.
     * @returns A new #GUPnPDeviceInfo.
     */
    get_device(type: string): DeviceInfo | null
    /**
     * Get the UPnP device type of this #GUPnPDeviceInfo, e.g. `urn:schemas-upnp-org:device:InternetGatewayDevice:1`
     * @returns A constant string, or %NULL.
     */
    get_device_type(): string
    /**
     * Get the friendly name of the device.
     * @returns A newly allocated string containing the "friendly name" of the device, or %NULL if not available. g_free() after use.
     */
    get_friendly_name(): string | null
    /**
     * Download the device icon matching the request parameters. For details on
     * the lookup procedure, see [method`GUPnP`.DeviceInfo.get_icon_url]
     * @param requested_mime_type The requested file format, or %NULL for any
     * @param requested_depth The requested color depth, or -1 for any
     * @param requested_width The requested width, or -1 for any
     * @param requested_height The requested height, or -1 for any
     * @param prefer_bigger %TRUE if a bigger, rather than a smaller icon should be returned if no exact match could be found
     * @param cancellable 
     * @param callback 
     */
    get_icon_async(requested_mime_type: string | null, requested_depth: number, requested_width: number, requested_height: number, prefer_bigger: boolean, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void

    // Overloads of get_icon_async

    /**
     * Promisified version of {@link get_icon_async}
     * 
     * Download the device icon matching the request parameters. For details on
     * the lookup procedure, see [method`GUPnP`.DeviceInfo.get_icon_url]
     * @param requested_mime_type The requested file format, or %NULL for any
     * @param requested_depth The requested color depth, or -1 for any
     * @param requested_width The requested width, or -1 for any
     * @param requested_height The requested height, or -1 for any
     * @param prefer_bigger %TRUE if a bigger, rather than a smaller icon should be returned if no exact match could be found
     * @param cancellable 
     * @returns A Promise of: A GBytes contaning the icon or NULL on either error or no matching icon was found.
     */
    get_icon_async(requested_mime_type: string | null, requested_depth: number, requested_width: number, requested_height: number, prefer_bigger: boolean, cancellable: Gio.Cancellable | null): globalThis.Promise<[ /* mime */ string, /* depth */ number, /* width */ number, /* height */ number ]>
    get_icon_finish(res: Gio.AsyncResult): [ /* returnType */ GLib.Bytes, /* mime */ string, /* depth */ number, /* width */ number, /* height */ number ]
    /**
     * Get an URL pointing to the icon most closely matching the
     * given criteria, or %NULL.
     * 
     * If `requested_mime_type` is set, only icons with
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
    get_icon_url(requested_mime_type: string | null, requested_depth: number, requested_width: number, requested_height: number, prefer_bigger: boolean): [ /* returnType */ string | null, /* mime_type */ string, /* depth */ number, /* width */ number, /* height */ number ]
    /**
     * Get the URL of the device file
     * @returns A s
     */
    get_location(): string
    /**
     * Get the manufacturer of the device.
     * @returns A newly allocated string containing the manufacturer of the device, or %NULL if not available. g_free() after use.
     */
    get_manufacturer(): string | null
    /**
     * Get an URL pointing to the manufacturer's website.
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
     * Get an URL pointing to the device model's website.
     * @returns A string, or %NULL. g_free() after use.
     */
    get_model_url(): string | null
    /**
     * Get an URL pointing to the device's presentation page, for web-based
     * administration, if available.
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
     * implementing #GUPnPServiceInfo, or %NULL if no such device was found.
     * 
     * Note that services are not cached internally, so that every time you call
     * this function a new object is created. The application must cache any used
     * services if it wishes to keep them around and re-use them.
     * @param type The type of the service to be retrieved.
     * @returns A #GUPnPServiceInfo.
     */
    get_service(type: string): ServiceInfo | null
    /**
     * Get the Unique Device Name of the device.
     * @returns A constant string.
     */
    get_udn(): string
    /**
     * Get the Universal Product Code of the device.
     * @returns A string, or %NULL. g_free() after use.
     */
    get_upc(): string | null
    /**
     * Get the URL base of this device.
     * @returns A #SoupURI.
     */
    get_url_base(): GLib.Uri
    /**
     * Get a #GList of strings representing the types of the devices
     * directly contained in `info`.
     * @returns A #GList of strings. The elements should be g_free()'d and the list should be g_list_free()'d.
     */
    list_device_types(): string[] | null
    /**
     * Get a #GList of new objects implementing #GUPnPDeviceInfo
     * representing the devices directly contained in `info,` excluding itself.
     * 
     * Note that devices are not cached internally, so that every time you
     * call this function new objects are created. The application
     * must cache any used devices if it wishes to keep them around and re-use
     * them.
     * @returns a #GList of new #GUPnPDeviceInfo objects or %NULL if no devices are
     */
    list_devices(): DeviceInfo[] | null
    /**
     * Get a #GList of strings that represent the device capabilities as announced
     * in the device description file using the &lt;dlna:X_DLNACAP&gt; element.
     * @returns a #GList of newly allocated strings or %NULL if the device description doesn't contain the &lt;dlna:X_DLNACAP&gt; element.
     */
    list_dlna_capabilities(): string[] | null
    /**
     * Get a list of strings that represent the device class and version as
     * announced in the device description file using the `<dlna:X_DLNADOC>`
     * element, e.g. `DMS-1.51`, `M-DMS-1.51` and so on.
     * @returns a #GList of newly allocated strings or %NULL if the device description doesn't contain any `<dlna:X_DLNADOC>` element.
     */
    list_dlna_device_class_identifier(): string[] | null
    /**
     * Get a #GList of strings representing the types of the services
     * directly contained in `info,` but not in its subdevices.
     * @returns A #GList of strings. The elements should be g_free()'d and the list should be g_list_free()'d.
     */
    list_service_types(): string[] | null
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
    list_services(): ServiceInfo[] | null

    // Class property signals of GUPnP-1.6.GUPnP.DeviceInfo

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
 * Device information shared by local and remote devices
 * 
 * This class aggregates the information that is shared between remote and local
 * devices.
 * @class 
 */
class DeviceInfo extends GObject.Object {

    // Own properties of GUPnP-1.6.GUPnP.DeviceInfo

    static name: string
    static $gtype: GObject.GType<DeviceInfo>

    // Constructors of GUPnP-1.6.GUPnP.DeviceInfo

    constructor(config?: DeviceInfo.ConstructorProperties) 
    _init(config?: DeviceInfo.ConstructorProperties): void
}

module DeviceProxy {

    // Constructor properties interface

    interface ConstructorProperties extends DeviceInfo.ConstructorProperties {
    }

}

interface DeviceProxy {

    // Own fields of GUPnP-1.6.GUPnP.DeviceProxy

    parent_instance: DeviceInfo & GObject.Object

    // Class property signals of GUPnP-1.6.GUPnP.DeviceProxy

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
 * Interaction with remote UPnP devices.
 * 
 * #GUPnPDeviceProxy allows for retrieving proxies for a device's sub-devices
 * and services. It implements the [class`GUPnP`.DeviceInfo] abstract class.
 * @class 
 */
class DeviceProxy extends DeviceInfo {

    // Own properties of GUPnP-1.6.GUPnP.DeviceProxy

    static name: string
    static $gtype: GObject.GType<DeviceProxy>

    // Constructors of GUPnP-1.6.GUPnP.DeviceProxy

    constructor(config?: DeviceProxy.ConstructorProperties) 
    _init(config?: DeviceProxy.ConstructorProperties): void
}

module ResourceFactory {

    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

interface ResourceFactory {

    // Own fields of GUPnP-1.6.GUPnP.ResourceFactory

    parent_instance: GObject.Object

    // Owm methods of GUPnP-1.6.GUPnP.ResourceFactory

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
     * You can either register a type for a concrete version of a device or service
     * such as urn:schemas-upnp-org:service:AVTransport:2 or version-independently,
     * urn:schemas-upnp-org:service:AVTransport. If you register for an explicit
     * version of a service, it will be an exact match.
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
     * @returns %TRUE if GType assignment was removed successfully, %FALSE otherwise.
     */
    unregister_resource_proxy_type(upnp_type: string): boolean
    /**
     * Unregisters the GType assignment for the resource of UPnP type `upnp_type`.
     * @param upnp_type The UPnP type name of the resource.
     * @returns %TRUE if GType assignment was removed successfully, %FALSE otherwise.
     */
    unregister_resource_type(upnp_type: string): boolean

    // Class property signals of GUPnP-1.6.GUPnP.ResourceFactory

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * Associating custom Services, Devices, ServiceProxies and DeviceProxies with UPnP types.
 * 
 * #GUPnPResourceFactory objects are used by [class`GUPnP`.ControlPoint],
 * [class`GUPnP`.DeviceProxy] and [class`GUPnP`.Device] to create resource proxy and resource
 * objects.
 * 
 * Register UPnP type - [alias`GLib`.Type] pairs to have resource or resource proxy
 * objects created with the specified #GType whenever an object for a resource
 * of the specified UPnP type is requested. The #GType needs
 * to be derived from the relevant resource or resource proxy type (e.g.
 * a device proxy type needs to be derived from [class`GUPnP`.DeviceProxy]).
 * @class 
 */
class ResourceFactory extends GObject.Object {

    // Own properties of GUPnP-1.6.GUPnP.ResourceFactory

    static name: string
    static $gtype: GObject.GType<ResourceFactory>

    // Constructors of GUPnP-1.6.GUPnP.ResourceFactory

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

module RootDevice {

    // Constructor properties interface

    interface ConstructorProperties extends Gio.Initable.ConstructorProperties, Device.ConstructorProperties {

        // Own constructor properties of GUPnP-1.6.GUPnP.RootDevice

        /**
         * TRUE if this device is available.
         */
        available?: boolean | null
        /**
         * The path to a folder where description documents are provided.
         */
        descriptionDir?: string | null
        /**
         * The path to device description document. This could either be an
         * absolute path or path relative to GUPnPRootDevice:description-dir.
         */
        descriptionPath?: string | null
    }

}

interface RootDevice extends Gio.Initable {

    // Own properties of GUPnP-1.6.GUPnP.RootDevice

    /**
     * TRUE if this device is available.
     */
    available: boolean
    /**
     * The path to a folder where description documents are provided.
     */
    readonly descriptionDir: string | null
    /**
     * The path to device description document. This could either be an
     * absolute path or path relative to GUPnPRootDevice:description-dir.
     */
    readonly descriptionPath: string | null

    // Own fields of GUPnP-1.6.GUPnP.RootDevice

    parent_instance: Device & DeviceInfo & GObject.Object & GObject.Object

    // Owm methods of GUPnP-1.6.GUPnP.RootDevice

    /**
     * Checks whether `root_device` is available on the network (announcing its presence).
     * @returns %TRUE if @root_device is available, %FALSE otherwise.
     */
    get_available(): boolean
    /**
     * Gets the path to the directory containing description documents related to
     * `root_device`.
     * @returns The path to description document directory of @root_device.
     */
    get_description_dir(): string
    /**
     * Gets the name of the description document as hosted via HTTP.
     * @returns The relative location of @root_device.
     */
    get_description_document_name(): string
    /**
     * Gets the path to the device description document of `root_device`.
     * @returns The path to device description document of @root_device.
     */
    get_description_path(): string
    /**
     * Gets the #GSSDPResourceGroup used by `root_device`.
     * @returns The #GSSDPResourceGroup of @root_device.
     */
    get_ssdp_resource_group(): GSSDP.ResourceGroup
    /**
     * Sets the availability of `root_device` on the network (announcing
     * its presence).
     * @param available %TRUE if `root_device` should be available
     */
    set_available(available: boolean): void

    // Class property signals of GUPnP-1.6.GUPnP.RootDevice

    connect(sigName: "notify::available", callback: (($obj: RootDevice, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::available", callback: (($obj: RootDevice, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::available", ...args: any[]): void
    connect(sigName: "notify::description-dir", callback: (($obj: RootDevice, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::description-dir", callback: (($obj: RootDevice, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::description-dir", ...args: any[]): void
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
 * Implementation of an UPnP root device.
 * 
 * #GUPnPRootDevice allows for implementing root devices.
 * @class 
 */
class RootDevice extends Device {

    // Own properties of GUPnP-1.6.GUPnP.RootDevice

    static name: string
    static $gtype: GObject.GType<RootDevice>

    // Constructors of GUPnP-1.6.GUPnP.RootDevice

    constructor(config?: RootDevice.ConstructorProperties) 
    /**
     * Create a new #GUPnPRootDevice object, automatically loading and parsing
     * device description document from `description_path`.
     * @constructor 
     * @param context The #GUPnPContext
     * @param description_path Path to device description document. This could either be an absolute path or path relative to `description_folder`.
     * @param description_folder Path to directory where description documents are provided.
     * @returns A new @GUPnPRootDevice object.
     */
    constructor(context: Context, description_path: string, description_folder: string) 
    /**
     * Create a new #GUPnPRootDevice object, automatically loading and parsing
     * device description document from `description_path`.
     * @constructor 
     * @param context The #GUPnPContext
     * @param description_path Path to device description document. This could either be an absolute path or path relative to `description_folder`.
     * @param description_folder Path to directory where description documents are provided.
     * @returns A new @GUPnPRootDevice object.
     */
    static new(context: Context, description_path: string, description_folder: string): RootDevice
    /**
     * Create a new #GUPnPRootDevice, automatically loading and parsing
     * device description document from `description_path` if `description_doc` is
     * %NULL.
     * @constructor 
     * @param context A #GUPnPContext
     * @param factory A #GUPnPResourceFactory
     * @param description_doc Device description document, or %NULL
     * @param description_path Path to device description document. This could either be an absolute path or path relative to `description_dir`.
     * @param description_folder Path to folder where description documents are provided.
     * @returns A new #GUPnPRootDevice object.
     */
    static new_full(context: Context, factory: ResourceFactory, description_doc: XMLDoc, description_path: string, description_folder: string): RootDevice
    _init(config?: RootDevice.ConstructorProperties): void
}

module Service {

    // Signal callback interfaces

    /**
     * Signal callback interface for `action-invoked`
     */
    interface ActionInvokedSignalCallback {
        ($obj: Service, action: ServiceAction): void
    }

    /**
     * Signal callback interface for `notify-failed`
     */
    interface NotifyFailedSignalCallback {
        ($obj: Service, callback_url: GLib.Uri[], reason: GLib.Error): void
    }

    /**
     * Signal callback interface for `query-variable`
     */
    interface QueryVariableSignalCallback {
        ($obj: Service, variable: string | null, value: any): void
    }


    // Constructor properties interface

    interface ConstructorProperties extends ServiceInfo.ConstructorProperties {

        // Own constructor properties of GUPnP-1.6.GUPnP.Service

        /**
         * The containing #GUPnPRootDevice.
         */
        rootDevice?: RootDevice | null
    }

}

interface Service {

    // Own properties of GUPnP-1.6.GUPnP.Service

    /**
     * The containing #GUPnPRootDevice.
     */
    readonly rootDevice: RootDevice

    // Own fields of GUPnP-1.6.GUPnP.Service

    parent_instance: ServiceInfo & GObject.Object

    // Owm methods of GUPnP-1.6.GUPnP.Service

    /**
     * Default handler for [signal`GUPnP`.Service::action_invoked]. See its documentation for details.
     * 
     * Can be overridden by child classes instead of connecting to the signal.
     * @param action a `GUPnPServiceAction`
     */
    action_invoked(action: ServiceAction): void
    /**
     * Stops sending out notifications to remote clients.
     * 
     * It causes new notifications to be queued up until [method`GUPnP`.Service.thaw_notify] is called.
     */
    freeze_notify(): void
    /**
     * Default handler for [signal`GUPnP`.Service::notify_failed]. See its documentation for details.
     * 
     * Can be overridden by child classes instead of connecting to the signal.
     * @param callback_urls a list of call-back urls that failed the notification
     * @param reason An error that describes why the notification failed
     */
    notify_failed(callback_urls: GLib.Uri[], reason: GLib.Error): void
    /**
     * Notifies remote clients that `variable` has changed to `value`.
     * @param variable the name of the variable to notify
     * @param value the value of the variable
     */
    notify_value(variable: string, value: any): void
    /**
     * Default handler for [signal`GUPnP`.Service::query_variable]. See its documentation for details.
     * 
     * Can be overridden by child classes instead of connecting to the signal.
     * @param variable the name of the variable that was queried
     * @param value a value that should be filled to the current value of `variable`
     */
    query_variable(variable: string, value: any): void
    /**
     * Sends out any pending notifications, and stops queuing of new ones.
     */
    thaw_notify(): void

    // Own virtual methods of GUPnP-1.6.GUPnP.Service

    /**
     * Default handler for [signal`GUPnP`.Service::action_invoked]. See its documentation for details.
     * 
     * Can be overridden by child classes instead of connecting to the signal.
     * @virtual 
     * @param action a `GUPnPServiceAction`
     */
    vfunc_action_invoked(action: ServiceAction): void
    /**
     * Default handler for [signal`GUPnP`.Service::notify_failed]. See its documentation for details.
     * 
     * Can be overridden by child classes instead of connecting to the signal.
     * @virtual 
     * @param callback_urls a list of call-back urls that failed the notification
     * @param reason An error that describes why the notification failed
     */
    vfunc_notify_failed(callback_urls: GLib.Uri[], reason: GLib.Error): void
    /**
     * Default handler for [signal`GUPnP`.Service::query_variable]. See its documentation for details.
     * 
     * Can be overridden by child classes instead of connecting to the signal.
     * @virtual 
     * @param variable the name of the variable that was queried
     * @param value a value that should be filled to the current value of `variable`
     */
    vfunc_query_variable(variable: string, value: any): void

    // Own signals of GUPnP-1.6.GUPnP.Service

    connect(sigName: "action-invoked", callback: Service.ActionInvokedSignalCallback): number
    connect_after(sigName: "action-invoked", callback: Service.ActionInvokedSignalCallback): number
    emit(sigName: "action-invoked", action: ServiceAction, ...args: any[]): void
    connect(sigName: "notify-failed", callback: Service.NotifyFailedSignalCallback): number
    connect_after(sigName: "notify-failed", callback: Service.NotifyFailedSignalCallback): number
    emit(sigName: "notify-failed", callback_url: GLib.Uri[], reason: GLib.Error, ...args: any[]): void
    connect(sigName: "query-variable", callback: Service.QueryVariableSignalCallback): number
    connect_after(sigName: "query-variable", callback: Service.QueryVariableSignalCallback): number
    emit(sigName: "query-variable", variable: string | null, value: any, ...args: any[]): void

    // Class property signals of GUPnP-1.6.GUPnP.Service

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
 * Implementation of an UPnP service
 * 
 * #GUPnPService allows for handling incoming actions and state variable
 * notification. It implements the [class`GUPnP`.ServiceInfo] interface.
 * 
 * To implement a service, you can either connect to the [signal`GUPnP`.Service::action-invoked]
 * and [signal`GUPnP`.Service::query-variable] or derive from the `GUPnPService` class and override
 * the virtual functions [vfunc`GUPnP`.Service.action_invoked] and  [vfunc`GUPnP`.Service.query_variable].
 * 
 * For more details, see the ["Implementing UPnP devices"](server-tutorial.html#implementing-a-service) document
 * @class 
 */
class Service extends ServiceInfo {

    // Own properties of GUPnP-1.6.GUPnP.Service

    static name: string
    static $gtype: GObject.GType<Service>

    // Constructors of GUPnP-1.6.GUPnP.Service

    constructor(config?: Service.ConstructorProperties) 
    _init(config?: Service.ConstructorProperties): void
}

module ServiceInfo {

    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of GUPnP-1.6.GUPnP.ServiceInfo

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
        urlBase?: GLib.Uri | null
    }

}

interface ServiceInfo {

    // Own properties of GUPnP-1.6.GUPnP.ServiceInfo

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
    readonly urlBase: GLib.Uri

    // Own fields of GUPnP-1.6.GUPnP.ServiceInfo

    parent_instance: GObject.Object

    // Owm methods of GUPnP-1.6.GUPnP.ServiceInfo

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
     * Get the serviceID of this service, or %NULL if there is no ID.
     * 
     * The serviceID should be unique to a device. This makes it possible to provide
     * the same serviceType multiple times on one device
     * 
     * Example: `org:serviceId:RenderingControl`
     * @returns A string. This string should be freed with g_free() after use.
     */
    get_id(): string | null
    /**
     * Get the location of the device description file.
     * @returns A constant string.
     */
    get_location(): string
    /**
     * Get the SCPD URL for this service, or %NULL if there is no SCPD.
     * @returns A string. This string should be freed with g_free() after use.
     */
    get_scpd_url(): string | null
    /**
     * Get the UPnP service type, or %NULL.
     * 
     * Example: `urn:schemas-upnp-org:service:RenderingControl:1`
     * @returns A constant string.
     */
    get_service_type(): string
    /**
     * Get the Unique Device Name of the containing device.
     * @returns A constant string.
     */
    get_udn(): string
    /**
     * Get the URL base of this service.
     * @returns A constant #SoupURI.
     */
    get_url_base(): GLib.Uri
    /**
     * Note that introspection object is created from the information in service
     * description document (SCPD) provided by the service so it can not be created
     * if the service does not provide a SCPD.
     * 
     * If `cancellable` is used to cancel the call, `callback` will be called with
     * error code %G_IO_ERROR_CANCELLED.
     * @param cancellable a #GCancellable that can be used to cancel the call.
     * @param callback callback to be called when introspection object is ready.
     */
    introspect_async(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void

    // Overloads of introspect_async

    /**
     * Promisified version of {@link introspect_async}
     * 
     * Note that introspection object is created from the information in service
     * description document (SCPD) provided by the service so it can not be created
     * if the service does not provide a SCPD.
     * 
     * If `cancellable` is used to cancel the call, `callback` will be called with
     * error code %G_IO_ERROR_CANCELLED.
     * @param cancellable a #GCancellable that can be used to cancel the call.
     * @returns A Promise of: %NULL, if the call had an error, a #GUPnPServiceIntrospection object otherwise.
     */
    introspect_async(cancellable: Gio.Cancellable | null): globalThis.Promise<ServiceIntrospection | null>
    /**
     * Finish an asynchronous call initiated with
     * gupnp_service_info_introspect_async().
     * @param res A #GAsyncResult
     * @returns %NULL, if the call had an error, a #GUPnPServiceIntrospection object otherwise.
     */
    introspect_finish(res: Gio.AsyncResult): ServiceIntrospection | null

    // Class property signals of GUPnP-1.6.GUPnP.ServiceInfo

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
 * Service information shared by local and remote services.
 * 
 * A class that contains the common parts between local and remote services.
 * @class 
 */
class ServiceInfo extends GObject.Object {

    // Own properties of GUPnP-1.6.GUPnP.ServiceInfo

    static name: string
    static $gtype: GObject.GType<ServiceInfo>

    // Constructors of GUPnP-1.6.GUPnP.ServiceInfo

    constructor(config?: ServiceInfo.ConstructorProperties) 
    _init(config?: ServiceInfo.ConstructorProperties): void
}

module ServiceIntrospection {

    // Constructor properties interface

    interface ConstructorProperties extends Gio.Initable.ConstructorProperties, GObject.Object.ConstructorProperties {

        // Own constructor properties of GUPnP-1.6.GUPnP.ServiceIntrospection

        /**
         * The scpd of the device description file.
         */
        scpd?: any | null
    }

}

interface ServiceIntrospection extends Gio.Initable {

    // Own properties of GUPnP-1.6.GUPnP.ServiceIntrospection

    /**
     * The scpd of the device description file.
     */
    readonly scpd: any

    // Owm methods of GUPnP-1.6.GUPnP.ServiceIntrospection

    /**
     * Returns the action by the name `action_name` in this service.
     * @param action_name The name of the action to retrieve
     * @returns the action or %NULL. Do not modify or free it.
     */
    get_action(action_name: string): ServiceActionInfo | null
    /**
     * Returns the state variable by the name `variable_name` in this service.
     * @param variable_name The name of the variable to retrieve
     * @returns the state variable or %NULL. Do not modify or free it.
     */
    get_state_variable(variable_name: string): ServiceStateVariableInfo | null
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
     * @returns A #GList of all the state variables or %NULL. Do not modify or free it or its contents.
     */
    list_state_variables(): ServiceStateVariableInfo[]

    // Class property signals of GUPnP-1.6.GUPnP.ServiceIntrospection

    connect(sigName: "notify::scpd", callback: (($obj: ServiceIntrospection, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scpd", callback: (($obj: ServiceIntrospection, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::scpd", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * Introspection of local and remote services..
 * 
 * The #GUPnPServiceIntrospection class provides methods for service
 * introspection based on information contained in its service description
 * document (SCPD). There is no constructor provided for this class, please use
 * [method`GUPnP`.ServiceInfo.introspect_async] to create a
 * #GUPnPServiceIntrospection object for a specific service.
 * 
 * Note that all the introspection information is retrieved from the service
 * description document (SCPD) provided by the service and hence can not be
 * guaranteed to be complete. An UPnP service is required to provide a SCPD but
 * unfortunately, many services either do not provide this document or the
 * document does not provide any or all of the introspection information.
 * 
 * This class exposes internals of the UPnP protocol and should not need
 * to be used for regular device or control point development.
 * @class 
 */
class ServiceIntrospection extends GObject.Object {

    // Own properties of GUPnP-1.6.GUPnP.ServiceIntrospection

    static name: string
    static $gtype: GObject.GType<ServiceIntrospection>

    // Constructors of GUPnP-1.6.GUPnP.ServiceIntrospection

    constructor(config?: ServiceIntrospection.ConstructorProperties) 
    _init(config?: ServiceIntrospection.ConstructorProperties): void
}

module ServiceProxy {

    // Signal callback interfaces

    /**
     * Signal callback interface for `subscription-lost`
     */
    interface SubscriptionLostSignalCallback {
        ($obj: ServiceProxy, error: GLib.Error): void
    }


    // Constructor properties interface

    interface ConstructorProperties extends ServiceInfo.ConstructorProperties {

        // Own constructor properties of GUPnP-1.6.GUPnP.ServiceProxy

        /**
         * Whether we are subscribed to this service.
         */
        subscribed?: boolean | null
    }

}

interface ServiceProxy {

    // Own properties of GUPnP-1.6.GUPnP.ServiceProxy

    /**
     * Whether we are subscribed to this service.
     */
    subscribed: boolean

    // Own fields of GUPnP-1.6.GUPnP.ServiceProxy

    parent_instance: ServiceInfo & GObject.Object

    // Owm methods of GUPnP-1.6.GUPnP.ServiceProxy

    /**
     * Sets up `callback` to be called whenever a change notification for
     * `variable` is recieved.
     * @param variable The variable to add notification for
     * @param type The type of the variable
     * @param callback The callback to call when `variable` changes
     * @returns %TRUE on success.
     */
    add_notify(variable: string, type: GObject.GType, callback: ServiceProxyNotifyCallback): boolean
    /**
     * Get a notification for anything that happens on the peer.
     * 
     * `value` in `callback` will be of type G_TYPE_POINTER and contain the pre-parsed
     * [type`libxml2`.Doc]. Do NOT free or modify this document.
     * @param callback The callback to call when the peer issues any variable notification.
     * @returns %TRUE on success.
     */
    add_raw_notify(callback: ServiceProxyNotifyCallback): boolean
    /**
     * Synchronously call the `action` on the remote UPnP service.
     * @param action An action
     * @param cancellable A #GCancellable which can be used to cancel the current action call
     * @returns %NULL on error, @action if successful.
     */
    call_action(action: ServiceProxyAction, cancellable: Gio.Cancellable | null): ServiceProxyAction | null
    /**
     * Start a call on the remote UPnP service using the pre-configured `action`.
     * Use gupnp_service_proxy_call_action_finish() in the `callback` to finalize
     * the call and gupnp_service_proxy_action_get_result(),
     * gupnp_service_proxy_action_get_result_hash() or
     * gupnp_service_proxy_action_get_result_list() to extract the result of the
     * remote call.
     * @param action A #GUPnPServiceProxyAction to call
     * @param cancellable A #GCancellable which can be used to cancel the current action call
     * @param callback A #GAsyncReadyCallback to call when the action is finished.
     */
    call_action_async(action: ServiceProxyAction, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void

    // Overloads of call_action_async

    /**
     * Promisified version of {@link call_action_async}
     * 
     * Start a call on the remote UPnP service using the pre-configured `action`.
     * Use gupnp_service_proxy_call_action_finish() in the `callback` to finalize
     * the call and gupnp_service_proxy_action_get_result(),
     * gupnp_service_proxy_action_get_result_hash() or
     * gupnp_service_proxy_action_get_result_list() to extract the result of the
     * remote call.
     * @param action A #GUPnPServiceProxyAction to call
     * @param cancellable A #GCancellable which can be used to cancel the current action call
     * @returns A Promise of: %NULL, if the call had an error, the action otherwise.
     */
    call_action_async(action: ServiceProxyAction, cancellable: Gio.Cancellable | null): globalThis.Promise<ServiceProxyAction | null>
    /**
     * Finish an asynchronous call initiated with
     * gupnp_service_proxy_call_action_async().
     * @param result a #GAsyncResult
     * @returns %NULL, if the call had an error, the action otherwise.
     */
    call_action_finish(result: Gio.AsyncResult): ServiceProxyAction | null
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
    remove_notify(variable: string, callback: ServiceProxyNotifyCallback): boolean
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
     * Sets user and password for authentication
     * @param user user name for authentication
     * @param password user password for authentication
     */
    set_credentials(user: string, password: string): void
    /**
     * (Un)subscribes to this service.
     * 
     * <note>The relevant messages are not immediately sent but queued.
     * If you want to unsubcribe from this service because the application
     * is quitting, rely on automatic synchronised unsubscription on object
     * destruction instead.</note>
     * @param subscribed %TRUE to subscribe to this service
     */
    set_subscribed(subscribed: boolean): void

    // Own virtual methods of GUPnP-1.6.GUPnP.ServiceProxy

    vfunc_subscription_lost(reason: GLib.Error): void

    // Own signals of GUPnP-1.6.GUPnP.ServiceProxy

    connect(sigName: "subscription-lost", callback: ServiceProxy.SubscriptionLostSignalCallback): number
    connect_after(sigName: "subscription-lost", callback: ServiceProxy.SubscriptionLostSignalCallback): number
    emit(sigName: "subscription-lost", error: GLib.Error, ...args: any[]): void

    // Class property signals of GUPnP-1.6.GUPnP.ServiceProxy

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
 * Proxy class for remote services.
 * 
 * #GUPnPServiceProxy sends commands to a remote UPnP service and handles
 * incoming event notifications.
 * @class 
 */
class ServiceProxy extends ServiceInfo {

    // Own properties of GUPnP-1.6.GUPnP.ServiceProxy

    static name: string
    static $gtype: GObject.GType<ServiceProxy>

    // Constructors of GUPnP-1.6.GUPnP.ServiceProxy

    constructor(config?: ServiceProxy.ConstructorProperties) 
    _init(config?: ServiceProxy.ConstructorProperties): void
}

module XMLDoc {

    // Constructor properties interface

    interface ConstructorProperties extends Gio.Initable.ConstructorProperties, GObject.Object.ConstructorProperties {

        // Own constructor properties of GUPnP-1.6.GUPnP.XMLDoc

        doc?: any | null
        path?: string | null
    }

}

interface XMLDoc extends Gio.Initable {

    // Own properties of GUPnP-1.6.GUPnP.XMLDoc

    readonly doc: any
    readonly path: string | null

    // Owm methods of GUPnP-1.6.GUPnP.XMLDoc

    get_doc(): libxml2.Doc

    // Class property signals of GUPnP-1.6.GUPnP.XMLDoc

    connect(sigName: "notify::doc", callback: (($obj: XMLDoc, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::doc", callback: (($obj: XMLDoc, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::doc", ...args: any[]): void
    connect(sigName: "notify::path", callback: (($obj: XMLDoc, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::path", callback: (($obj: XMLDoc, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::path", ...args: any[]): void
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

    // Own properties of GUPnP-1.6.GUPnP.XMLDoc

    static name: string
    static $gtype: GObject.GType<XMLDoc>

    // Constructors of GUPnP-1.6.GUPnP.XMLDoc

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
    static new_from_path(path: string): XMLDoc
    _init(config?: XMLDoc.ConstructorProperties): void
}

interface AclInterface {

    // Own fields of GUPnP-1.6.GUPnP.AclInterface

    parent: GObject.TypeInterface
    is_allowed: (self: Acl, device: any | null, service: any | null, path: string, address: string, agent: string | null) => boolean
    is_allowed_async: (self: Acl, device: any | null, service: any | null, path: string, address: string, agent: string | null, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null) => void
    is_allowed_finish: (self: Acl, res: Gio.AsyncResult) => boolean
    can_sync: (self: Acl) => boolean
}

abstract class AclInterface {

    // Own properties of GUPnP-1.6.GUPnP.AclInterface

    static name: string
}

interface ContextClass {

    // Own fields of GUPnP-1.6.GUPnP.ContextClass

    parent_class: GSSDP.ClientClass
}

abstract class ContextClass {

    // Own properties of GUPnP-1.6.GUPnP.ContextClass

    static name: string
}

interface ContextFilterClass {

    // Own fields of GUPnP-1.6.GUPnP.ContextFilterClass

    parent_class: GObject.ObjectClass
}

abstract class ContextFilterClass {

    // Own properties of GUPnP-1.6.GUPnP.ContextFilterClass

    static name: string
}

interface ContextManagerClass {

    // Own fields of GUPnP-1.6.GUPnP.ContextManagerClass

    parent_class: GObject.ObjectClass
}

abstract class ContextManagerClass {

    // Own properties of GUPnP-1.6.GUPnP.ContextManagerClass

    static name: string
}

interface ControlPointClass {

    // Own fields of GUPnP-1.6.GUPnP.ControlPointClass

    parent_class: GSSDP.ResourceBrowserClass
    device_proxy_available: (control_point: ControlPoint, proxy: DeviceProxy) => void
    device_proxy_unavailable: (control_point: ControlPoint, proxy: DeviceProxy) => void
    service_proxy_available: (control_point: ControlPoint, proxy: ServiceProxy) => void
    service_proxy_unavailable: (control_point: ControlPoint, proxy: ServiceProxy) => void
}

abstract class ControlPointClass {

    // Own properties of GUPnP-1.6.GUPnP.ControlPointClass

    static name: string
}

interface DeviceClass {

    // Own fields of GUPnP-1.6.GUPnP.DeviceClass

    parent_class: DeviceInfoClass
}

abstract class DeviceClass {

    // Own properties of GUPnP-1.6.GUPnP.DeviceClass

    static name: string
}

interface DeviceInfoClass {

    // Own fields of GUPnP-1.6.GUPnP.DeviceInfoClass

    parent_class: GObject.ObjectClass
}

abstract class DeviceInfoClass {

    // Own properties of GUPnP-1.6.GUPnP.DeviceInfoClass

    static name: string
}

interface DeviceProxyClass {

    // Own fields of GUPnP-1.6.GUPnP.DeviceProxyClass

    parent_class: DeviceInfoClass
}

abstract class DeviceProxyClass {

    // Own properties of GUPnP-1.6.GUPnP.DeviceProxyClass

    static name: string
}

interface ResourceFactoryClass {

    // Own fields of GUPnP-1.6.GUPnP.ResourceFactoryClass

    parent_class: GObject.ObjectClass
}

abstract class ResourceFactoryClass {

    // Own properties of GUPnP-1.6.GUPnP.ResourceFactoryClass

    static name: string
}

interface RootDeviceClass {

    // Own fields of GUPnP-1.6.GUPnP.RootDeviceClass

    parent_class: DeviceClass
}

abstract class RootDeviceClass {

    // Own properties of GUPnP-1.6.GUPnP.RootDeviceClass

    static name: string
}

interface ServiceAction {

    // Owm methods of GUPnP-1.6.GUPnP.ServiceAction

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
    get_value(argument: string, type: GObject.GType): any
    /**
     * Get an ordered (preferred first) #GList of locales preferred by
     * the client. Free list and elements after use.
     * @returns A #GList of #char* locale names.
     */
    get_locales(): string[]
    /**
     * Get the #SoupMessage associated with `action`. Mainly intended for
     * applications to be able to read HTTP headers received from clients.
     * @returns #SoupServerMessage associated with @action. Unref after using it.
     */
    get_message(): Soup.ServerMessage
    /**
     * Get the name of `action`.
     * @returns The name of @action
     */
    get_name(): string
    /**
     * A variant of #gupnp_service_action_get that uses #GList instead of varargs.
     * @param arg_names A #GList of argument names as string
     * @param arg_types A #GList of argument types as #GType
     * @returns The values as #GList of #GValue. g_list_free() the returned list and g_value_unset() and g_slice_free() each element.
     */
    get_values(arg_names: string[], arg_types: GObject.GType[]): any[]
    /**
     * Return `error_code`.
     * @param error_code The error code
     * @param error_description The error description, or %NULL if `error_code` is one of #GUPNP_CONTROL_ERROR_INVALID_ACTION, #GUPNP_CONTROL_ERROR_INVALID_ARGS, #GUPNP_CONTROL_ERROR_OUT_OF_SYNC or #GUPNP_CONTROL_ERROR_ACTION_FAILED, in which case a description is provided automatically.
     */
    return_error(error_code: number, error_description: string): void
    /**
     * Return successfully.
     */
    return_success(): void
    /**
     * Sets the value of `argument` to `value`.
     * @param argument The name of the return value to retrieve
     * @param value The #GValue to store the return value
     */
    set_value(argument: string, value: any): void
    /**
     * Sets the specified action return values.
     * @param arg_names A #GList of argument names
     * @param arg_values The #GList of values (as #GValue<!-- -->s) that line up with `arg_names`.
     */
    set_values(arg_names: string[], arg_values: any[]): void
}

/**
 * Opaque structure for holding in-progress action data.
 * @record 
 */
class ServiceAction {

    // Own properties of GUPnP-1.6.GUPnP.ServiceAction

    static name: string
}

interface ServiceActionArgInfo {

    // Own fields of GUPnP-1.6.GUPnP.ServiceActionArgInfo

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
class ServiceActionArgInfo {

    // Own properties of GUPnP-1.6.GUPnP.ServiceActionArgInfo

    static name: string
}

interface ServiceActionInfo {

    // Own fields of GUPnP-1.6.GUPnP.ServiceActionInfo

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
class ServiceActionInfo {

    // Own properties of GUPnP-1.6.GUPnP.ServiceActionInfo

    static name: string
}

interface ServiceClass {

    // Own fields of GUPnP-1.6.GUPnP.ServiceClass

    parent_class: ServiceInfoClass
    action_invoked: (service: Service, action: ServiceAction) => void
    query_variable: (service: Service, variable: string, value: any) => void
    notify_failed: (service: Service, callback_urls: GLib.Uri[], reason: GLib.Error) => void
}

abstract class ServiceClass {

    // Own properties of GUPnP-1.6.GUPnP.ServiceClass

    static name: string
}

interface ServiceInfoClass {

    // Own fields of GUPnP-1.6.GUPnP.ServiceInfoClass

    parent_class: GObject.ObjectClass
}

abstract class ServiceInfoClass {

    // Own properties of GUPnP-1.6.GUPnP.ServiceInfoClass

    static name: string
}

interface ServiceIntrospectionClass {

    // Own fields of GUPnP-1.6.GUPnP.ServiceIntrospectionClass

    parent_class: GObject.ObjectClass
}

abstract class ServiceIntrospectionClass {

    // Own properties of GUPnP-1.6.GUPnP.ServiceIntrospectionClass

    static name: string
}

interface ServiceProxyAction {

    // Owm methods of GUPnP-1.6.GUPnP.ServiceProxyAction

    /**
     * See gupnp_service_proxy_action_get_result(); this version takes a #GHashTable for
     * runtime generated parameter lists.
     * 
     * The `out_hash` needs to be pre-initialized with key value pairs denoting the argument
     * to retrieve and an empty #GValue initialized to hold the wanted type with g_value_init().
     * 
     * ```c
     * void on_action_finished(GObject *object, GAsyncResult *res, gpointer user_data)
     * {
     *     GUPnPServiceProxyAction *action;
     *     GError *error;
     * 
     *     action = gupnp_service_proxy_call_action_finish (GUPNP_SERVICE_PROXY (object),
     *                                                      res,
     *                                                      &error);
     * 
     *     if (error != NULL) {
     *              g_print ("Call failed: %s", error->message);
     *              g_clear_error (&error);
     *              return;
     *     }
     * 
     *     GValue play_mode = G_VALUE_INIT;
     *     g_value_init(&play_mode, G_TYPE_STRING);
     *     GValue rec_quality_mode = G_VALUE_INIT;
     *     g_value_init(&rec_quality_mode, G_TYPE_STRING);
     * 
     *     GHashTable *out_args = g_hash_table_new (g_str_hash, g_str_equal);
     *     g_hash_table_insert(out_args, "PlayMode", &play_mode);
     *     g_hash_table_insert(out_args, "RecQualityMode", &rec_quality_mode);
     * 
     *     if (!gupnp_service_proxy_action_get_result_hash (action,
     *                                                      out_args,
     *                                                      &error)) {
     *              g_print ("Getting results failed: %s", error->message);
     *              g_clear_error (&error);
     *              return;
     *     }
     * 
     *     g_value_unset (&play_mode);
     *     g_value_unset (&rec_quality_mode);
     * 
     *     g_hash_table_unref (out_args);
     * }
     * ```
     * @param out_hash A #GHashTable of out parameter name and initialised #GValue pairs
     * @returns %TRUE on success.
     */
    get_result_hash(out_hash: GLib.HashTable): [ /* returnType */ boolean, /* out_hash */ GLib.HashTable ]
    /**
     * A variant of gupnp_service_proxy_action_get_result() that takes lists of
     * out-parameter names, types and place-holders for values.
     * 
     * The returned list in `out_values` must be freed using `g_list_free` and each element
     * in it using `g_value_unset` and `g_free`.
     * ```c
     * void on_action_finished(GObject *object, GAsyncResult *res, gpointer user_data)
     * {
     *     GUPnPServiceProxyAction *action;
     *     GError *error;
     * 
     *     action = gupnp_service_proxy_call_action_finish (GUPNP_SERVICE_PROXY (object),
     *                                                      res,
     *                                                      &error);
     * 
     *     if (error != NULL) {
     *              g_print ("Call failed: %s", error->message);
     *              g_clear_error (&error);
     *              return;
     *     }
     * 
     *     GList *out_args = NULL;
     *     out_args = g_list_append (out_args, "PlayMode");
     *     out_args = g_list_append (out_args, "RecQualityMode");
     *     GList *out_types = NULL;
     *     out_types = g_list_append (out_types, GSIZE_TO_POINTER (G_TYPE_STRING));
     *     out_types = g_list_append (out_types, GSIZE_TO_POINTER (G_TYPE_STRING));
     *     GList *out_values = NULL;
     * 
     *     if (!gupnp_service_proxy_action_get_result_list (action,
     *                                                      out_args,
     *                                                      out_types,
     *                                                      &out_values,
     *                                                      &error)) {
     *              g_print ("Getting results failed: %s", error->message);
     *              g_clear_error (&error);
     *              return;
     *     }
     * 
     *     GList *iter = out_values;
     *     while (iter != NULL) {
     *         GValue *value = iter->data;
     *         g_print ("Result: %s\n", g_value_get_string (value));
     *         g_value_unset (value);
     *         g_free (value);
     *         iter = g_list_remove_link (iter, iter);
     *     }
     *     g_list_free (out_values);
     * }
     * ```
     * @param out_names #GList of 'out' parameter names (as strings)
     * @param out_types #GList of types (as #GType) that line up with `out_names`
     * @returns %TRUE on success.
     */
    get_result_list(out_names: string[], out_types: GObject.GType[]): [ /* returnType */ boolean, /* out_values */ any[] ]
    /**
     * Increases reference count of `action`
     * @returns @action with an increased reference count
     */
    ref(): ServiceProxyAction | null
    /**
     * Update the value of `key` to `value`.
     * 
     * `key` needs to already exist in `action`.
     * @param key the name of the value to modify
     * @param value the new value of `key`
     * @returns true if successfully modified, false otherwise
     */
    set(key: string, value: any): boolean
    /**
     * Decreases reference count of `action`. If reference count drops to 0,
     * the action and its contents will be freed.
     */
    unref(): void
}

/**
 * Opaque structure for holding in-progress action data.
 * @record 
 */
class ServiceProxyAction {

    // Own properties of GUPnP-1.6.GUPnP.ServiceProxyAction

    static name: string

    // Constructors of GUPnP-1.6.GUPnP.ServiceProxyAction

    /**
     * Prepares action `action` with parameters `in_names` and `in_values` to be
     * sent off to a remote service later with gupnp_service_proxy_call_action() or
     * gupnp_service_proxy_call_action_async(). This is mainly useful for language
     * bindings.
     * 
     * After the action call has finished, the results of the call may be
     * retrived from the #GUPnPServiceProxyAction by using
     * gupnp_service_proxy_action_get_result(),
     * gupnp_service_proxy_action_get_result_list() or
     * gupnp_service_proxy_action_get_result_hash()
     * ```c
     * GList *in_args = NULL;
     * in_args = g_list_append (in_args, "InstanceID");
     * in_args = g_list_append (in_args, "Unit");
     * in_args = g_list_append (in_args, "Target");
     * 
     * GValue instance = G_VALUE_INIT;
     * g_value_set_int (&instance, 0);
     * GValue unit = G_VALUE_INIT;
     * g_value_set_static_string (&unit, "ABS_TIME");
     * GValue target = G_VALUE_INIT;
     * g_value_set_static_string (&target, "00:00:00.000");
     * 
     * GList *in_values = NULL;
     * in_values = g_list_append (in_values, &instance);
     * in_values = g_list_append (in_values, &unit);
     * in_values = g_list_append (in_values, &target);
     * 
     * GUPnPServiceProxyAction *action =
     *         gunp_service_proxy_action_new_from_list ("Seek", in_args, in_values);
     * 
     * GError *error = NULL;
     * gupnp_service_proxy_call_action_async (proxy, action, NULL, on_action_finished, NULL);
     * gupnp_service_proxy_action_unref (action);
     * ```
     * @constructor 
     * @param action An action
     * @param in_names #GList of 'in' parameter names (as strings)
     * @param in_values #GList of values (as #GValue) that line up with `in_names`
     * @returns A newly created #GUPnPServiceProxyAction
     */
    static new_from_list(action: string, in_names: string[], in_values: any[]): ServiceProxyAction
}

interface ServiceProxyClass {

    // Own fields of GUPnP-1.6.GUPnP.ServiceProxyClass

    parent_class: ServiceInfoClass
    subscription_lost: (proxy: ServiceProxy, reason: GLib.Error) => void
}

abstract class ServiceProxyClass {

    // Own properties of GUPnP-1.6.GUPnP.ServiceProxyClass

    static name: string
}

interface ServiceStateVariableInfo {

    // Own fields of GUPnP-1.6.GUPnP.ServiceStateVariableInfo

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
class ServiceStateVariableInfo {

    // Own properties of GUPnP-1.6.GUPnP.ServiceStateVariableInfo

    static name: string
}

interface XMLDocClass {

    // Own fields of GUPnP-1.6.GUPnP.XMLDocClass

    parent_class: GObject.ObjectClass
}

abstract class XMLDocClass {

    // Own properties of GUPnP-1.6.GUPnP.XMLDocClass

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

export default GUPnP;
// END