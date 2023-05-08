
/*
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in `ts-for-gir` or create a bug report on https://github.com/gjsify/ts-for-gir
 */
/**
 * GUPnP-1.2
 */

import type libxml2 from '@girs/libxml2-2.0';
import type Soup from '@girs/soup-2.4';
import type Gio from '@girs/gio-2.0';
import type GObject from '@girs/gobject-2.0';
import type GLib from '@girs/glib-2.0';
import type GSSDP from '@girs/gssdp-1.2';

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
export enum RootdeviceError {
    NO_CONTEXT,
    NO_DESCRIPTION_PATH,
    NO_DESCRIPTION_FOLDER,
    NO_NETWORK,
    FAIL,
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
export function rootdevice_error_quark(): GLib.Quark
export function server_error_quark(): GLib.Quark
/**
 * Add `entry` in the list of valid criteria used by `white_list` to
 * filter networks.
 * if `entry` already exists, it won't be added a second time.
 * @param white_list A #GUPnPWhiteList
 * @param entry A value used to filter network
 * @returns %TRUE if @entry is added, %FALSE otherwise.
 */
export function white_list_add_entry(white_list: WhiteList, entry: string | null): boolean
/**
 * Add a list of entries to a #GUPnPWhiteList. This is a helper function to
 * directly add a %NULL-terminated array of string usually aquired from
 * commandline args.
 * @param white_list A #GUPnPWhiteList
 * @param entries A %NULL-terminated list of strings
 */
export function white_list_add_entryv(white_list: WhiteList, entries: string[]): void
/**
 * It will check if the `context` is allowed or not. The `white_list` will check
 * all its entries againt #GUPnPContext interface, host ip and network fields
 * information. This function doesn't take into account the `white_list` status
 * (enabled or not).
 * @param white_list A #GUPnPWhiteList
 * @param context A #GUPnPContext to test.
 * @returns %TRUE if @context is matching the @white_list criterias, %FALSE otherwise.
 */
export function white_list_check_context(white_list: WhiteList, context: Context): boolean
/**
 * Remove all entries from #GList that compose the white list.
 * The list is now empty. Even if #GUPnPWhiteList is enabled, it will have the
 * same behavior as if it was disabled.
 * @param white_list A #GUPnPWhiteList
 */
export function white_list_clear(white_list: WhiteList): void
/**
 * Return the status of the #GUPnPWhiteList
 * @param white_list A #GUPnPWhiteList
 * @returns %TRUE if @white_list is enabled, %FALSE otherwise.
 */
export function white_list_get_enabled(white_list: WhiteList): boolean
/**
 * Get the #GList of entries that compose the white list. Do not free
 * @param white_list A #GUPnPWhiteList
 * @returns a #GList of entries used to filter networks, interfaces,... or %NULL. Do not modify or free the list nor its elements.
 */
export function white_list_get_entries(white_list: WhiteList): string[] | null
/**
 * Return the state of the entries list of #GUPnPWhiteList
 * @param white_list A #GUPnPWhiteList
 * @returns %TRUE if @white_list is empty, %FALSE otherwise.
 */
export function white_list_is_empty(white_list: WhiteList): boolean
/**
 * Create a new #GUPnPWhiteList.
 * The white list is disabled by default.
 * @returns A new #GUPnPWhiteList object.
 */
export function white_list_new(): WhiteList
/**
 * Remove `entry` in the list of valid criteria used by `white_list` to
 * filter networks.
 * @param white_list A #GUPnPWhiteList
 * @param entry A value to remove from the filter list.
 * @returns %TRUE if @entry is removed, %FALSE otherwise.
 */
export function white_list_remove_entry(white_list: WhiteList, entry: string | null): boolean
/**
 * Enable or disable the #GUPnPWhiteList to perform the network filtering.
 * @param white_list A #GUPnPWhiteList
 * @param enable %TRUE to enable `white_list,` %FALSE otherwise
 */
export function white_list_set_enabled(white_list: WhiteList, enable: boolean): void
export function xml_error_quark(): GLib.Quark
/**
 * Callback notifying that `introspection` for `info` has been obtained.
 * @callback 
 * @param info The #GUPnPServiceInfo introspection was requested for
 * @param introspection The new #GUPnPServiceIntrospection object, or NULL
 * @param error The #GError that occurred, or NULL
 */
export interface ServiceIntrospectionCallback {
    (info: ServiceInfo, introspection: ServiceIntrospection | null, error: GLib.Error | null): void
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

    // Owm methods of GUPnP-1.2.GUPnP.Acl

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

    // Own virtual methods of GUPnP-1.2.GUPnP.Acl

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

    // Class property signals of GUPnP-1.2.GUPnP.Acl

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

    // Own properties of GUPnP-1.2.GUPnP.Acl

    static name: string
    static $gtype: GObject.GType<Acl>

    // Constructors of GUPnP-1.2.GUPnP.Acl

    constructor(config?: Acl.ConstructorProperties) 
    _init(config?: Acl.ConstructorProperties): void
}

export module Context {

    // Constructor properties interface

    export interface ConstructorProperties extends Gio.Initable.ConstructorProperties, GSSDP.Client.ConstructorProperties {

        // Own constructor properties of GUPnP-1.2.GUPnP.Context

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

    // Own properties of GUPnP-1.2.GUPnP.Context

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

    // Own fields of GUPnP-1.2.GUPnP.Context

    parent_instance: GSSDP.Client & GObject.Object

    // Owm methods of GUPnP-1.2.GUPnP.Context

    /**
     * Add a #SoupServerCallback to the #GUPnPContext<!-- -->'s #SoupServer.
     * @param use_acl %TRUE, if the path should query the GUPnPContext::acl before serving the resource, %FALSE otherwise.
     * @param path the toplevel path for the handler.
     * @param callback callback to invoke for requests under `path`
     */
    add_server_handler(use_acl: boolean, path: string | null, callback: Soup.ServerCallback): void
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
    get_default_language(): string | null
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
    /**
     * Utility function to re-write an uri to the IPv6 link-local form which has
     * the zone index appended to the IP address.
     * @param uri an uri to rewrite if necessary
     * @returns A re-written version of the @uri if the context is on a link-local IPv6 address, a copy of the @uri otherwise or %NULL if @uri was invalid
     */
    rewrite_uri(uri: string | null): string | null
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

    // Class property signals of GUPnP-1.2.GUPnP.Context

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

export class Context extends GSSDP.Client {

    // Own properties of GUPnP-1.2.GUPnP.Context

    static name: string
    static $gtype: GObject.GType<Context>

    // Constructors of GUPnP-1.2.GUPnP.Context

    constructor(config?: Context.ConstructorProperties) 
    /**
     * Create a new #GUPnPContext with the specified `main_context,` `iface` and
     * `port`.
     * @constructor 
     * @param iface The network interface to use, or %NULL to auto-detect.
     * @param port Port to run on, or 0 if you don't care what port is used.
     * @returns A new #GUPnPContext object, or %NULL on an error
     */
    constructor(iface: string | null, port: number) 
    /**
     * Create a new #GUPnPContext with the specified `main_context,` `iface` and
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
     * Using this utility function, the created client will be using UDA 1.0 and IPv4 only.
     * @constructor 
     * @param iface The name of the network interface, or %NULL for auto-detection.
     * @returns A new #GSSDPClient object.
     */
    static new(iface: string | null): GSSDP.Client
    _init(config?: Context.ConstructorProperties): void
}

export module ContextFilter {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of GUPnP-1.2.GUPnP.ContextFilter

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

export interface ContextFilter {

    // Own properties of GUPnP-1.2.GUPnP.ContextFilter

    /**
     * Whether this context filter is active or not.
     */
    enabled: boolean
    /**
     * A list of items to filter for.
     */
    readonly entries: string[]

    // Own fields of GUPnP-1.2.GUPnP.ContextFilter

    parent_instance: GObject.Object

    // Owm methods of GUPnP-1.2.GUPnP.ContextFilter

    /**
     * Add `entry` in the list of valid criteria used by `context_filter` to
     * filter networks.
     * if `entry` already exists, it won't be added a second time.
     * @param entry A value used to filter network
     * @returns %TRUE if @entry is added, %FALSE otherwise.
     */
    add_entry(entry: string | null): boolean
    /**
     * Add a list of entries to a #GUPnPContextFilter. This is a helper function to
     * directly add a %NULL-terminated array of string usually aquired from
     * commandline args.
     * @param entries A %NULL-terminated list of strings
     */
    add_entryv(entries: string[]): void
    /**
     * It will check if the `context` is allowed or not. The `context_filter` will
     * check all its entries againt #GUPnPContext interface, host ip and network
     * fields information. This function doesn't take into account the
     * `context_filter` status (enabled or not).
     * @param context A #GUPnPContext to test.
     * @returns %TRUE if @context is matching the @context_filter criterias, %FALSE otherwise.
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
     * @returns a #GList of entries used to filter networks, interfaces,... or %NULL. Do not modify or free the list nor its elements.
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
    remove_entry(entry: string | null): boolean
    /**
     * Enable or disable the #GUPnPContextFilter to perform the network filtering.
     * @param enable %TRUE to enable `context_filter,` %FALSE otherwise
     */
    set_enabled(enable: boolean): void

    // Class property signals of GUPnP-1.2.GUPnP.ContextFilter

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
 * Class for network context filtering.
 * 
 * #GUPnPContextFilter handles network filtering. It provides API to manage a
 * list of entries that will be used to filter networks. The #GUPnPContextFilter
 * could be enabled or not. If it's enabled but the entries list is empty, it
 * behaves as disabled.
 * @class 
 */
export class ContextFilter extends GObject.Object {

    // Own properties of GUPnP-1.2.GUPnP.ContextFilter

    static name: string
    static $gtype: GObject.GType<ContextFilter>

    // Constructors of GUPnP-1.2.GUPnP.ContextFilter

    constructor(config?: ContextFilter.ConstructorProperties) 
    _init(config?: ContextFilter.ConstructorProperties): void
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

        // Own constructor properties of GUPnP-1.2.GUPnP.ContextManager

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
        uda_version?: GSSDP.UDAVersion | null
    }

}

export interface ContextManager {

    // Own properties of GUPnP-1.2.GUPnP.ContextManager

    /**
     * The context filter to use.
     */
    readonly context_filter: ContextFilter
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
    readonly uda_version: GSSDP.UDAVersion

    // Own fields of GUPnP-1.2.GUPnP.ContextManager

    parent_instance: GObject.Object

    // Owm methods of GUPnP-1.2.GUPnP.ContextManager

    /**
     * Get the #GUPnPContextFilter associated with `manager`.
     * @returns The #GUPnPContextFilter asssociated with this context manager.
     */
    get_context_filter(): ContextFilter
    /**
     * Get the network port associated with this context manager.
     * @returns The network port asssociated with this context manager.
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
     * Get the #GUPnPContextFilter associated with `manager`.
     * @returns The #GUPnPContextFilter asssociated with this context manager.
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

    // Own signals of GUPnP-1.2.GUPnP.ContextManager

    connect(sigName: "context-available", callback: ContextManager.ContextAvailableSignalCallback): number
    connect_after(sigName: "context-available", callback: ContextManager.ContextAvailableSignalCallback): number
    emit(sigName: "context-available", context: Context, ...args: any[]): void
    connect(sigName: "context-unavailable", callback: ContextManager.ContextUnavailableSignalCallback): number
    connect_after(sigName: "context-unavailable", callback: ContextManager.ContextUnavailableSignalCallback): number
    emit(sigName: "context-unavailable", context: Context, ...args: any[]): void

    // Class property signals of GUPnP-1.2.GUPnP.ContextManager

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

export class ContextManager extends GObject.Object {

    // Own properties of GUPnP-1.2.GUPnP.ContextManager

    static name: string
    static $gtype: GObject.GType<ContextManager>

    // Constructors of GUPnP-1.2.GUPnP.ContextManager

    constructor(config?: ContextManager.ConstructorProperties) 
    _init(config?: ContextManager.ConstructorProperties): void
    /**
     * Factory-method to create a new #GUPnPContextManager. The final type of the
     * #GUPnPContextManager depends on the compile-time selection or - in case of
     * NetworkManager - on its availability during runtime. If it is not available,
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
     * NetworkManager - on its availability during runtime. If it is not available,
     * the implementation falls back to the basic Unix context manager instead.
     * @param uda_version #GSSDPUDAVersion the created contexts should implement (UDA 1.0 or 1.1). For %GSSDP_UDA_VERSION_UNSPECIFIED for default.
     * @param family #GSocketFamily to create the context for
     * @param port Port to create contexts for, or 0 if you don't care what port is used.
     * @returns A new #GUPnPContextManager object.
     */
    static create_full(uda_version: GSSDP.UDAVersion, family: Gio.SocketFamily, port: number): ContextManager
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

        // Own constructor properties of GUPnP-1.2.GUPnP.ControlPoint

        /**
         * The resource factory to use. Set to NULL for default factory.
         */
        resource_factory?: ResourceFactory | null
    }

}

export interface ControlPoint {

    // Own properties of GUPnP-1.2.GUPnP.ControlPoint

    /**
     * The resource factory to use. Set to NULL for default factory.
     */
    readonly resource_factory: ResourceFactory

    // Own fields of GUPnP-1.2.GUPnP.ControlPoint

    parent_instance: GSSDP.ResourceBrowser & GObject.Object

    // Owm methods of GUPnP-1.2.GUPnP.ControlPoint

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

    // Own virtual methods of GUPnP-1.2.GUPnP.ControlPoint

    vfunc_device_proxy_available(proxy: DeviceProxy): void
    vfunc_device_proxy_unavailable(proxy: DeviceProxy): void
    vfunc_service_proxy_available(proxy: ServiceProxy): void
    vfunc_service_proxy_unavailable(proxy: ServiceProxy): void

    // Own signals of GUPnP-1.2.GUPnP.ControlPoint

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

    // Class property signals of GUPnP-1.2.GUPnP.ControlPoint

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

export class ControlPoint extends GSSDP.ResourceBrowser {

    // Own properties of GUPnP-1.2.GUPnP.ControlPoint

    static name: string
    static $gtype: GObject.GType<ControlPoint>

    // Constructors of GUPnP-1.2.GUPnP.ControlPoint

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

        // Own constructor properties of GUPnP-1.2.GUPnP.Device

        /**
         * The containing #GUPnPRootDevice, or NULL if this is the root
         * device.
         */
        root_device?: RootDevice | null
    }

}

export interface Device {

    // Own properties of GUPnP-1.2.GUPnP.Device

    /**
     * The containing #GUPnPRootDevice, or NULL if this is the root
     * device.
     */
    readonly root_device: RootDevice

    // Own fields of GUPnP-1.2.GUPnP.Device

    parent_instance: DeviceInfo & GObject.Object

    // Class property signals of GUPnP-1.2.GUPnP.Device

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

export class Device extends DeviceInfo {

    // Own properties of GUPnP-1.2.GUPnP.Device

    static name: string
    static $gtype: GObject.GType<Device>

    // Constructors of GUPnP-1.2.GUPnP.Device

    constructor(config?: Device.ConstructorProperties) 
    _init(config?: Device.ConstructorProperties): void
}

export module DeviceInfo {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of GUPnP-1.2.GUPnP.DeviceInfo

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

    // Own properties of GUPnP-1.2.GUPnP.DeviceInfo

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
    readonly resource_factory: ResourceFactory
    /**
     * The UDN of this device.
     */
    readonly udn: string | null
    /**
     * The URL base (#SoupURI).
     */
    url_base: Soup.URI

    // Own fields of GUPnP-1.2.GUPnP.DeviceInfo

    parent_instance: GObject.Object

    // Owm methods of GUPnP-1.2.GUPnP.DeviceInfo

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
     * Get an URL pointing to the icon most closely matching the
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
    get_service(type: string | null): ServiceInfo | null
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
    list_device_types(): string[] | null
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
    list_devices(): DeviceInfo[] | null
    /**
     * Get a #GList of strings that represent the device capabilities as announced
     * in the device description file using the &lt;dlna:X_DLNACAP&gt; element.
     * @returns a #GList of newly allocated strings or %NULL if the device description doesn't contain the &lt;dlna:X_DLNACAP&gt; element.
     */
    list_dlna_capabilities(): string[] | null
    /**
     * Get a #GList of strings that represent the device class and version as
     * announced in the device description file using the &lt;dlna:X_DLNADOC&gt;
     * element.
     * @returns a #GList of newly allocated strings or %NULL if the device description doesn't contain the &lt;dlna:X_DLNADOC&gt; element.
     */
    list_dlna_device_class_identifier(): string[] | null
    /**
     * Get a #GList of strings representing the types of the services
     * directly contained in `info`.
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

    // Class property signals of GUPnP-1.2.GUPnP.DeviceInfo

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

export class DeviceInfo extends GObject.Object {

    // Own properties of GUPnP-1.2.GUPnP.DeviceInfo

    static name: string
    static $gtype: GObject.GType<DeviceInfo>

    // Constructors of GUPnP-1.2.GUPnP.DeviceInfo

    constructor(config?: DeviceInfo.ConstructorProperties) 
    _init(config?: DeviceInfo.ConstructorProperties): void
}

export module DeviceProxy {

    // Constructor properties interface

    export interface ConstructorProperties extends DeviceInfo.ConstructorProperties {
    }

}

export interface DeviceProxy {

    // Own fields of GUPnP-1.2.GUPnP.DeviceProxy

    parent_instance: DeviceInfo & GObject.Object

    // Class property signals of GUPnP-1.2.GUPnP.DeviceProxy

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

export class DeviceProxy extends DeviceInfo {

    // Own properties of GUPnP-1.2.GUPnP.DeviceProxy

    static name: string
    static $gtype: GObject.GType<DeviceProxy>

    // Constructors of GUPnP-1.2.GUPnP.DeviceProxy

    constructor(config?: DeviceProxy.ConstructorProperties) 
    _init(config?: DeviceProxy.ConstructorProperties): void
}

export module ResourceFactory {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

export interface ResourceFactory {

    // Own fields of GUPnP-1.2.GUPnP.ResourceFactory

    parent_instance: GObject.Object

    // Owm methods of GUPnP-1.2.GUPnP.ResourceFactory

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

    // Class property signals of GUPnP-1.2.GUPnP.ResourceFactory

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class ResourceFactory extends GObject.Object {

    // Own properties of GUPnP-1.2.GUPnP.ResourceFactory

    static name: string
    static $gtype: GObject.GType<ResourceFactory>

    // Constructors of GUPnP-1.2.GUPnP.ResourceFactory

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

    export interface ConstructorProperties extends Gio.Initable.ConstructorProperties, Device.ConstructorProperties {

        // Own constructor properties of GUPnP-1.2.GUPnP.RootDevice

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

export interface RootDevice extends Gio.Initable {

    // Own properties of GUPnP-1.2.GUPnP.RootDevice

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

    // Own fields of GUPnP-1.2.GUPnP.RootDevice

    parent_instance: Device & DeviceInfo & GObject.Object & GObject.Object

    // Owm methods of GUPnP-1.2.GUPnP.RootDevice

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
     * Gets the name of the description document as hosted via HTTP.
     * @returns The relative location of @root_device.
     */
    get_description_document_name(): string | null
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

    // Class property signals of GUPnP-1.2.GUPnP.RootDevice

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

export class RootDevice extends Device {

    // Own properties of GUPnP-1.2.GUPnP.RootDevice

    static name: string
    static $gtype: GObject.GType<RootDevice>

    // Constructors of GUPnP-1.2.GUPnP.RootDevice

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

        // Own constructor properties of GUPnP-1.2.GUPnP.Service

        /**
         * The containing #GUPnPRootDevice.
         */
        root_device?: RootDevice | null
    }

}

export interface Service {

    // Own properties of GUPnP-1.2.GUPnP.Service

    /**
     * The containing #GUPnPRootDevice.
     */
    readonly root_device: RootDevice

    // Own fields of GUPnP-1.2.GUPnP.Service

    parent_instance: ServiceInfo & GObject.Object

    // Owm methods of GUPnP-1.2.GUPnP.Service

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

    // Own virtual methods of GUPnP-1.2.GUPnP.Service

    vfunc_action_invoked(action: ServiceAction): void
    vfunc_query_variable(variable: string | null, value: any): void

    // Own signals of GUPnP-1.2.GUPnP.Service

    connect(sigName: "action-invoked", callback: Service.ActionInvokedSignalCallback): number
    connect_after(sigName: "action-invoked", callback: Service.ActionInvokedSignalCallback): number
    emit(sigName: "action-invoked", action: ServiceAction, ...args: any[]): void
    connect(sigName: "notify-failed", callback: Service.NotifyFailedSignalCallback): number
    connect_after(sigName: "notify-failed", callback: Service.NotifyFailedSignalCallback): number
    emit(sigName: "notify-failed", callback_url: Soup.URI[], reason: GLib.Error, ...args: any[]): void
    connect(sigName: "query-variable", callback: Service.QueryVariableSignalCallback): number
    connect_after(sigName: "query-variable", callback: Service.QueryVariableSignalCallback): number
    emit(sigName: "query-variable", variable: string | null, value: any, ...args: any[]): void

    // Class property signals of GUPnP-1.2.GUPnP.Service

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

export class Service extends ServiceInfo {

    // Own properties of GUPnP-1.2.GUPnP.Service

    static name: string
    static $gtype: GObject.GType<Service>

    // Constructors of GUPnP-1.2.GUPnP.Service

    constructor(config?: Service.ConstructorProperties) 
    _init(config?: Service.ConstructorProperties): void
}

export module ServiceInfo {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of GUPnP-1.2.GUPnP.ServiceInfo

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

    // Own properties of GUPnP-1.2.GUPnP.ServiceInfo

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

    // Own fields of GUPnP-1.2.GUPnP.ServiceInfo

    parent_instance: GObject.Object

    // Owm methods of GUPnP-1.2.GUPnP.ServiceInfo

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
     * if the service does not provide a SCPD.
     * @param callback callback to be called when introspection object is ready.
     */
    get_introspection_async(callback: ServiceIntrospectionCallback): void
    /**
     * Note that introspection object is created from the information in service
     * description document (SCPD) provided by the service so it can not be created
     * if the service does not provide a SCPD.
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
    /**
     * Note that introspection object is created from the information in service
     * description document (SCPD) provided by the service so it can not be created
     * if the service does not provide a SCPD.
     * 
     * If `cancellable` is used to cancel the call, `callback` will be called with
     * error code %G_IO_ERROR_CANCELLED.
     * @param cancellable #GCancellable that can be used to cancel the call, or %NULL.
     * @param callback callback to be called when introspeciton object is ready.
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
     * @param cancellable #GCancellable that can be used to cancel the call, or %NULL.
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

    // Class property signals of GUPnP-1.2.GUPnP.ServiceInfo

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

export class ServiceInfo extends GObject.Object {

    // Own properties of GUPnP-1.2.GUPnP.ServiceInfo

    static name: string
    static $gtype: GObject.GType<ServiceInfo>

    // Constructors of GUPnP-1.2.GUPnP.ServiceInfo

    constructor(config?: ServiceInfo.ConstructorProperties) 
    _init(config?: ServiceInfo.ConstructorProperties): void
}

export module ServiceIntrospection {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of GUPnP-1.2.GUPnP.ServiceIntrospection

        /**
         * The scpd of the device description file.
         */
        scpd?: any | null
    }

}

export interface ServiceIntrospection {

    // Own properties of GUPnP-1.2.GUPnP.ServiceIntrospection

    /**
     * The scpd of the device description file.
     */
    readonly scpd: any

    // Owm methods of GUPnP-1.2.GUPnP.ServiceIntrospection

    /**
     * Returns the action by the name `action_name` in this service.
     * @param action_name The name of the action to retrieve
     * @returns the action or %NULL. Do not modify or free it.
     */
    get_action(action_name: string | null): ServiceActionInfo | null
    /**
     * Returns the state variable by the name `variable_name` in this service.
     * @param variable_name The name of the variable to retrieve
     * @returns the state variable or %NULL. Do not modify or free it.
     */
    get_state_variable(variable_name: string | null): ServiceStateVariableInfo | null
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

    // Class property signals of GUPnP-1.2.GUPnP.ServiceIntrospection

    connect(sigName: "notify::scpd", callback: (($obj: ServiceIntrospection, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scpd", callback: (($obj: ServiceIntrospection, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::scpd", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class ServiceIntrospection extends GObject.Object {

    // Own properties of GUPnP-1.2.GUPnP.ServiceIntrospection

    static name: string
    static $gtype: GObject.GType<ServiceIntrospection>

    // Constructors of GUPnP-1.2.GUPnP.ServiceIntrospection

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

        // Own constructor properties of GUPnP-1.2.GUPnP.ServiceProxy

        /**
         * Whether we are subscribed to this service.
         */
        subscribed?: boolean | null
    }

}

export interface ServiceProxy {

    // Own properties of GUPnP-1.2.GUPnP.ServiceProxy

    /**
     * Whether we are subscribed to this service.
     */
    subscribed: boolean

    // Own fields of GUPnP-1.2.GUPnP.ServiceProxy

    parent_instance: ServiceInfo & GObject.Object

    // Owm methods of GUPnP-1.2.GUPnP.ServiceProxy

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
     * 
     * Note: This will only signalize transport errors to the caller, such as the action being cancelled
     * or lost connection etc. SOAP call errors are only returned by gupnp_service_proxy_action_get() and such.
     * @param result a #GAsyncResult
     * @returns %NULL, if the call had an error, the action otherwise.
     */
    call_action_finish(result: Gio.AsyncResult): ServiceProxyAction | null
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
     * <note>The relevant messages are not immediately sent but queued.
     * If you want to unsubcribe from this service because the application
     * is quitting, rely on automatic synchronised unsubscription on object
     * destruction instead.</note>
     * @param subscribed %TRUE to subscribe to this service
     */
    set_subscribed(subscribed: boolean): void

    // Own virtual methods of GUPnP-1.2.GUPnP.ServiceProxy

    vfunc_subscription_lost(reason: GLib.Error): void

    // Own signals of GUPnP-1.2.GUPnP.ServiceProxy

    connect(sigName: "subscription-lost", callback: ServiceProxy.SubscriptionLostSignalCallback): number
    connect_after(sigName: "subscription-lost", callback: ServiceProxy.SubscriptionLostSignalCallback): number
    emit(sigName: "subscription-lost", error: GLib.Error, ...args: any[]): void

    // Class property signals of GUPnP-1.2.GUPnP.ServiceProxy

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

export class ServiceProxy extends ServiceInfo {

    // Own properties of GUPnP-1.2.GUPnP.ServiceProxy

    static name: string
    static $gtype: GObject.GType<ServiceProxy>

    // Constructors of GUPnP-1.2.GUPnP.ServiceProxy

    constructor(config?: ServiceProxy.ConstructorProperties) 
    _init(config?: ServiceProxy.ConstructorProperties): void
}

export module XMLDoc {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

export interface XMLDoc {

    // Owm methods of GUPnP-1.2.GUPnP.XMLDoc

    get_doc(): libxml2.Doc

    // Class property signals of GUPnP-1.2.GUPnP.XMLDoc

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

    // Own properties of GUPnP-1.2.GUPnP.XMLDoc

    static name: string
    static $gtype: GObject.GType<XMLDoc>

    // Constructors of GUPnP-1.2.GUPnP.XMLDoc

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

    // Own fields of GUPnP-1.2.GUPnP.AclInterface

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

    // Own properties of GUPnP-1.2.GUPnP.AclInterface

    static name: string
}

export interface ContextClass {

    // Own fields of GUPnP-1.2.GUPnP.ContextClass

    parent_class: GSSDP.ClientClass
}

export abstract class ContextClass {

    // Own properties of GUPnP-1.2.GUPnP.ContextClass

    static name: string
}

export interface ContextFilterClass {

    // Own fields of GUPnP-1.2.GUPnP.ContextFilterClass

    parent_class: GObject.ObjectClass
}

export abstract class ContextFilterClass {

    // Own properties of GUPnP-1.2.GUPnP.ContextFilterClass

    static name: string
}

export interface ContextManagerClass {

    // Own fields of GUPnP-1.2.GUPnP.ContextManagerClass

    parent_class: GObject.ObjectClass
}

export abstract class ContextManagerClass {

    // Own properties of GUPnP-1.2.GUPnP.ContextManagerClass

    static name: string
}

export interface ControlPointClass {

    // Own fields of GUPnP-1.2.GUPnP.ControlPointClass

    parent_class: GSSDP.ResourceBrowserClass
    device_proxy_available: (control_point: ControlPoint, proxy: DeviceProxy) => void
    device_proxy_unavailable: (control_point: ControlPoint, proxy: DeviceProxy) => void
    service_proxy_available: (control_point: ControlPoint, proxy: ServiceProxy) => void
    service_proxy_unavailable: (control_point: ControlPoint, proxy: ServiceProxy) => void
}

export abstract class ControlPointClass {

    // Own properties of GUPnP-1.2.GUPnP.ControlPointClass

    static name: string
}

export interface DeviceClass {

    // Own fields of GUPnP-1.2.GUPnP.DeviceClass

    parent_class: DeviceInfoClass
}

export abstract class DeviceClass {

    // Own properties of GUPnP-1.2.GUPnP.DeviceClass

    static name: string
}

export interface DeviceInfoClass {

    // Own fields of GUPnP-1.2.GUPnP.DeviceInfoClass

    parent_class: GObject.ObjectClass
}

export abstract class DeviceInfoClass {

    // Own properties of GUPnP-1.2.GUPnP.DeviceInfoClass

    static name: string
}

export interface DeviceProxyClass {

    // Own fields of GUPnP-1.2.GUPnP.DeviceProxyClass

    parent_class: DeviceInfoClass
}

export abstract class DeviceProxyClass {

    // Own properties of GUPnP-1.2.GUPnP.DeviceProxyClass

    static name: string
}

export interface ResourceFactoryClass {

    // Own fields of GUPnP-1.2.GUPnP.ResourceFactoryClass

    parent_class: GObject.ObjectClass
}

export abstract class ResourceFactoryClass {

    // Own properties of GUPnP-1.2.GUPnP.ResourceFactoryClass

    static name: string
}

export interface RootDeviceClass {

    // Own fields of GUPnP-1.2.GUPnP.RootDeviceClass

    parent_class: DeviceClass
}

export abstract class RootDeviceClass {

    // Own properties of GUPnP-1.2.GUPnP.RootDeviceClass

    static name: string
}

export interface ServiceAction {

    // Owm methods of GUPnP-1.2.GUPnP.ServiceAction

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
     * Return succesfully.
     */
    return_success(): void
    /**
     * Sets the value of `argument` to `value`.
     * @param argument The name of the return value to retrieve
     * @param value The #GValue to store the return value
     */
    set_value(argument: string | null, value: any): void
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
export class ServiceAction {

    // Own properties of GUPnP-1.2.GUPnP.ServiceAction

    static name: string
}

export interface ServiceActionArgInfo {

    // Own fields of GUPnP-1.2.GUPnP.ServiceActionArgInfo

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

    // Own properties of GUPnP-1.2.GUPnP.ServiceActionArgInfo

    static name: string
}

export interface ServiceActionInfo {

    // Own fields of GUPnP-1.2.GUPnP.ServiceActionInfo

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

    // Own properties of GUPnP-1.2.GUPnP.ServiceActionInfo

    static name: string
}

export interface ServiceClass {

    // Own fields of GUPnP-1.2.GUPnP.ServiceClass

    parent_class: ServiceInfoClass
    action_invoked: (service: Service, action: ServiceAction) => void
    query_variable: (service: Service, variable: string | null, value: any) => void
}

export abstract class ServiceClass {

    // Own properties of GUPnP-1.2.GUPnP.ServiceClass

    static name: string
}

export interface ServiceInfoClass {

    // Own fields of GUPnP-1.2.GUPnP.ServiceInfoClass

    parent_class: GObject.ObjectClass
}

export abstract class ServiceInfoClass {

    // Own properties of GUPnP-1.2.GUPnP.ServiceInfoClass

    static name: string
}

export interface ServiceIntrospectionClass {

    // Own fields of GUPnP-1.2.GUPnP.ServiceIntrospectionClass

    parent_class: GObject.ObjectClass
}

export abstract class ServiceIntrospectionClass {

    // Own properties of GUPnP-1.2.GUPnP.ServiceIntrospectionClass

    static name: string
}

export interface ServiceProxyAction {

    // Owm methods of GUPnP-1.2.GUPnP.ServiceProxyAction

    /**
     * See gupnp_service_proxy_action_get_result(); this version takes a #GHashTable for
     * runtime generated parameter lists.
     * 
     * The `out_hash` needs to be pre-initialized with key value pairs denoting the argument
     * to retrieve and an empty #GValue initialized to hold the wanted type with g_value_init().
     * 
     * <informalexample>
     * <programlisting>
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
     * </programlisting>
     * </informalexample>
     * @param out_hash A #GHashTable of out parameter name and initialised #GValue pairs
     * @returns %TRUE on success.
     */
    get_result_hash(out_hash: GLib.HashTable): [ /* returnType */ boolean, /* out_hash */ GLib.HashTable ]
    /**
     * A variant of gupnp_service_proxy_action_get_result() that takes lists of
     * out-parameter names, types and place-holders for values. The returned list
     * in `out_values` must be freed using #g_list_free and each element in it using
     * #g_value_unset and #g_free.
     * <informalexample>
     * <programlisting>
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
     * </programlisting>
     * </informalexample>
     * @param out_names #GList of 'out' parameter names (as strings)
     * @param out_types #GList of types (as #GType) that line up with `out_names`
     * @returns %TRUE on success.
     */
    get_result_list(out_names: string[], out_types: GObject.GType[]): [ /* returnType */ boolean, /* out_values */ any[] ]
    ref(): ServiceProxyAction
    /**
     * Update the value of `key` to `value`.
     * 
     * `key` needs to already exist in `action`.
     * @param key the name of the value to modify
     * @param value the new value of `key`
     * @returns true if successfully modified, false otherwise
     */
    set(key: string | null, value: any): boolean
    unref(): void
}

/**
 * Opaque structure for holding in-progress action data.
 * @record 
 */
export class ServiceProxyAction {

    // Own properties of GUPnP-1.2.GUPnP.ServiceProxyAction

    static name: string

    // Constructors of GUPnP-1.2.GUPnP.ServiceProxyAction

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
     * <informalexample>
     * <programlisting>
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
     * </programlisting>
     * </informalexample>
     * @constructor 
     * @param action An action
     * @param in_names #GList of 'in' parameter names (as strings)
     * @param in_values #GList of values (as #GValue) that line up with `in_names`
     * @returns A newly created #GUPnPServiceProxyAction
     */
    static new_from_list(action: string | null, in_names: string[], in_values: any[]): ServiceProxyAction
}

export interface ServiceProxyClass {

    // Own fields of GUPnP-1.2.GUPnP.ServiceProxyClass

    parent_class: ServiceInfoClass
    subscription_lost: (proxy: ServiceProxy, reason: GLib.Error) => void
}

export abstract class ServiceProxyClass {

    // Own properties of GUPnP-1.2.GUPnP.ServiceProxyClass

    static name: string
}

export interface ServiceStateVariableInfo {

    // Own fields of GUPnP-1.2.GUPnP.ServiceStateVariableInfo

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

    // Own properties of GUPnP-1.2.GUPnP.ServiceStateVariableInfo

    static name: string
}

export interface XMLDocClass {

    // Own fields of GUPnP-1.2.GUPnP.XMLDocClass

    parent_class: GObject.ObjectClass
}

export abstract class XMLDocClass {

    // Own properties of GUPnP-1.2.GUPnP.XMLDocClass

    static name: string
}

    export type WhiteList = ContextFilter
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