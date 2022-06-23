// @ts-nocheck

/*
 * Type Definitions for node-gtk (https://github.com/romgrk/node-gtk)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/sammydre/ts-for-gjs
 */
/**
 * GUPnP-1.2
 */

import type libxml2 from './libxml2-2.0';
import type Soup from './Soup-2.4';
import type Gio from './Gio-2.0';
import type GObject from './GObject-2.0';
import type GLib from './GLib-2.0';
import type GSSDP from './GSSDP-1.2';

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
enum RootdeviceError {
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
function controlErrorQuark(): GLib.Quark
function eventingErrorQuark(): GLib.Quark
/**
 * Generate and return a new UUID.
 */
function getUuid(): string
function rootdeviceErrorQuark(): GLib.Quark
function serverErrorQuark(): GLib.Quark
/**
 * Add `entry` in the list of valid criteria used by `white_list` to
 * filter networks.
 * if `entry` already exists, it won't be added a second time.
 * @param whiteList A #GUPnPWhiteList
 * @param entry A value used to filter network
 */
function whiteListAddEntry(whiteList: WhiteList, entry: string): boolean
/**
 * Add a list of entries to a #GUPnPWhiteList. This is a helper function to
 * directly add a %NULL-terminated array of string usually aquired from
 * commandline args.
 * @param whiteList A #GUPnPWhiteList
 * @param entries A %NULL-terminated list of strings
 */
function whiteListAddEntryv(whiteList: WhiteList, entries: string[]): void
/**
 * It will check if the `context` is allowed or not. The `white_list` will check
 * all its entries againt #GUPnPContext interface, host ip and network fields
 * information. This function doesn't take into account the `white_list` status
 * (enabled or not).
 * @param whiteList A #GUPnPWhiteList
 * @param context A #GUPnPContext to test.
 */
function whiteListCheckContext(whiteList: WhiteList, context: Context): boolean
/**
 * Remove all entries from #GList that compose the white list.
 * The list is now empty. Even if #GUPnPWhiteList is enabled, it will have the
 * same behavior as if it was disabled.
 * @param whiteList A #GUPnPWhiteList
 */
function whiteListClear(whiteList: WhiteList): void
/**
 * Return the status of the #GUPnPWhiteList
 * @param whiteList A #GUPnPWhiteList
 */
function whiteListGetEnabled(whiteList: WhiteList): boolean
/**
 * Get the #GList of entries that compose the white list. Do not free
 * @param whiteList A #GUPnPWhiteList
 */
function whiteListGetEntries(whiteList: WhiteList): string[] | null
/**
 * Return the state of the entries list of #GUPnPWhiteList
 * @param whiteList A #GUPnPWhiteList
 */
function whiteListIsEmpty(whiteList: WhiteList): boolean
/**
 * Create a new #GUPnPWhiteList.
 * The white list is disabled by default.
 */
function whiteListNew(): WhiteList
/**
 * Remove `entry` in the list of valid criteria used by `white_list` to
 * filter networks.
 * @param whiteList A #GUPnPWhiteList
 * @param entry A value to remove from the filter list.
 */
function whiteListRemoveEntry(whiteList: WhiteList, entry: string): boolean
/**
 * Enable or disable the #GUPnPWhiteList to perform the network filtering.
 * @param whiteList A #GUPnPWhiteList
 * @param enable %TRUE to enable `white_list,` %FALSE otherwise
 */
function whiteListSetEnabled(whiteList: WhiteList, enable: boolean): void
function xmlErrorQuark(): GLib.Quark
/**
 * Callback notifying that `introspection` for `info` has been obtained.
 * @callback 
 * @param info The #GUPnPServiceInfo introspection was requested for
 * @param introspection The new #GUPnPServiceIntrospection object, or NULL
 * @param error The #GError that occurred, or NULL
 */
interface ServiceIntrospectionCallback {
    (info: ServiceInfo, introspection: ServiceIntrospection | null, error: GLib.Error | null): void
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

    // Owm methods of GUPnP-1.2.GUPnP.Acl

    /**
     * Check whether gupnp_acl_is_allowed_async() is supported.
     */
    canSync(): boolean
    /**
     * Check whether an IP address is allowed to access this resource.
     * @param device The #GUPnPDevice associated with `path` or %NULL if unknown.
     * @param service The #GUPnPService associated with `path` or %NULL if unknown.
     * @param path The path being served.
     * @param address IP address of the peer.
     * @param agent The User-Agent header of the peer or %NULL if not unknown. `returns` %TRUE if the peer is allowed, %FALSE otherwise
     */
    isAllowed(device: object | null, service: object | null, path: string, address: string, agent: string | null): boolean
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
    isAllowedAsync(device: object | null, service: object | null, path: string, address: string, agent: string | null, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    isAllowedFinish(res: Gio.AsyncResult): boolean

    // Class property signals of GUPnP-1.2.GUPnP.Acl

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
class Acl extends GObject.Object {

    // Own properties of GUPnP-1.2.GUPnP.Acl

    static name: string
    static $gtype: GObject.GType<Acl>

    // Constructors of GUPnP-1.2.GUPnP.Acl

    constructor(config?: Acl_ConstructProps) 
    _init(config?: Acl_ConstructProps): void
}

interface Context_ConstructProps extends Gio.Initable_ConstructProps, GSSDP.Client_ConstructProps {

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

interface Context extends Gio.Initable {

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
    defaultLanguage: string
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

    // Own fields of GUPnP-1.2.GUPnP.Context

    parentInstance: GSSDP.Client

    // Owm methods of GUPnP-1.2.GUPnP.Context

    /**
     * Add a #SoupServerCallback to the #GUPnPContext<!-- -->'s #SoupServer.
     * @param useAcl %TRUE, if the path should query the GUPnPContext::acl before serving the resource, %FALSE otherwise.
     * @param path the toplevel path for the handler.
     * @param callback callback to invoke for requests under `path`
     */
    addServerHandler(useAcl: boolean, path: string, callback: Soup.ServerCallback): void
    /**
     * Access the #GUPnPAcl associated with this client. If there isn't any,
     * retturns %NULL. The returned ACL must not be freed.
     */
    getAcl(): Acl
    /**
     * Get the default Content-Language header for this context.
     */
    getDefaultLanguage(): string
    /**
     * Get the port that the SOAP server is running on.
     */
    getPort(): number
    /**
     * Get the #SoupServer HTTP server that GUPnP is using.
     */
    getServer(): Soup.Server
    /**
     * Get the #SoupSession object that GUPnP is using.
     */
    getSession(): Soup.Session
    /**
     * Get the event subscription timeout (in seconds), or 0 meaning there is no
     * timeout.
     */
    getSubscriptionTimeout(): number
    /**
     * Start hosting `local_path` at `server_path`. Files with the path
     * `local_path`.LOCALE (if they exist) will be served up when LOCALE is
     * specified in the request's Accept-Language header.
     * @param localPath Path to the local file or folder to be hosted
     * @param serverPath Web server path where `local_path` should be hosted
     */
    hostPath(localPath: string, serverPath: string): void
    /**
     * Use this method to serve different local path to specific user-agent(s). The
     * path `server_path` must already be hosted by `context`.
     * @param localPath Path to the local file or folder to be hosted
     * @param serverPath Web server path already being hosted
     * @param userAgent The user-agent as a #GRegex.
     */
    hostPathForAgent(localPath: string, serverPath: string, userAgent: GLib.Regex): boolean
    /**
     * Remove a #SoupServerCallback from the #GUPnPContext<!-- -->'s #SoupServer.
     * @param path the toplevel path for the handler.
     */
    removeServerHandler(path: string): void
    /**
     * Utility function to re-write an uri to the IPv6 link-local form which has
     * the zone index appended to the IP address.
     * @param uri an uri to rewrite if necessary
     */
    rewriteUri(uri: string): string
    /**
     * Attach or remove the assoicated access control list to this context. If
     * `acl` is %NULL, the current access control list will be removed.
     * @param acl The new access control list or %NULL to remove the current list.
     */
    setAcl(acl: Acl | null): void
    /**
     * Set the default language for the Content-Language header to `language`.
     * 
     * If the client sends an Accept-Language header the UPnP HTTP server
     * is required to send a Content-Language header in return. If there are
     * no files hosted in languages which match the requested ones the
     * Content-Language header is set to this value. The default value is "en".
     * @param language A language tag as defined in RFC 2616 3.10
     */
    setDefaultLanguage(language: string): void
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
    unhostPath(serverPath: string): void

    // Class property signals of GUPnP-1.2.GUPnP.Context

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
    connect(sigName: "notify::active", callback: (...args: any[]) => void): number
    on(sigName: "notify::active", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::active", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::active", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::active", ...args: any[]): void
    connect(sigName: "notify::address-family", callback: (...args: any[]) => void): number
    on(sigName: "notify::address-family", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::address-family", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::address-family", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::address-family", ...args: any[]): void
    connect(sigName: "notify::boot-id", callback: (...args: any[]) => void): number
    on(sigName: "notify::boot-id", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::boot-id", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::boot-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::boot-id", ...args: any[]): void
    connect(sigName: "notify::config-id", callback: (...args: any[]) => void): number
    on(sigName: "notify::config-id", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::config-id", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::config-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::config-id", ...args: any[]): void
    connect(sigName: "notify::host-ip", callback: (...args: any[]) => void): number
    on(sigName: "notify::host-ip", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::host-ip", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::host-ip", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::host-ip", ...args: any[]): void
    connect(sigName: "notify::host-mask", callback: (...args: any[]) => void): number
    on(sigName: "notify::host-mask", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::host-mask", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::host-mask", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::host-mask", ...args: any[]): void
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
    connect(sigName: "notify::uda-version", callback: (...args: any[]) => void): number
    on(sigName: "notify::uda-version", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::uda-version", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::uda-version", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::uda-version", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class Context extends GSSDP.Client {

    // Own properties of GUPnP-1.2.GUPnP.Context

    static name: string
    static $gtype: GObject.GType<Context>

    // Constructors of GUPnP-1.2.GUPnP.Context

    constructor(config?: Context_ConstructProps) 
    /**
     * Create a new #GUPnPContext with the specified `main_context,` `iface` and
     * `port`.
     * @constructor 
     * @param iface The network interface to use, or %NULL to auto-detect.
     * @param port Port to run on, or 0 if you don't care what port is used.
     */
    constructor(iface: string | null, port: number) 
    /**
     * Create a new #GUPnPContext with the specified `main_context,` `iface` and
     * `port`.
     * @constructor 
     * @param iface The network interface to use, or %NULL to auto-detect.
     * @param port Port to run on, or 0 if you don't care what port is used.
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
     */
    static new(iface: string | null): GSSDP.Client
    _init(config?: Context_ConstructProps): void
}

interface ContextFilter_ConstructProps extends GObject.Object_ConstructProps {

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

interface ContextFilter {

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

    parentInstance: GObject.Object

    // Owm methods of GUPnP-1.2.GUPnP.ContextFilter

    /**
     * Add `entry` in the list of valid criteria used by `context_filter` to
     * filter networks.
     * if `entry` already exists, it won't be added a second time.
     * @param entry A value used to filter network
     */
    addEntry(entry: string): boolean
    /**
     * Add a list of entries to a #GUPnPContextFilter. This is a helper function to
     * directly add a %NULL-terminated array of string usually aquired from
     * commandline args.
     * @param entries A %NULL-terminated list of strings
     */
    addEntryv(entries: string[]): void
    /**
     * It will check if the `context` is allowed or not. The `context_filter` will
     * check all its entries againt #GUPnPContext interface, host ip and network
     * fields information. This function doesn't take into account the
     * `context_filter` status (enabled or not).
     * @param context A #GUPnPContext to test.
     */
    checkContext(context: Context): boolean
    /**
     * Remove all entries from #GList that compose the context filter.
     * The list is now empty. Even if #GUPnPContextFilter is enabled, it will have
     * the same behavior as if it was disabled.
     */
    clear(): void
    /**
     * Return the status of the #GUPnPContextFilter
     */
    getEnabled(): boolean
    /**
     * Get the #GList of entries that compose the context filter. Do not free
     */
    getEntries(): string[] | null
    /**
     * Return the state of the entries list of #GUPnPContextFilter
     */
    isEmpty(): boolean
    /**
     * Remove `entry` in the list of valid criteria used by `context_filter` to
     * filter networks.
     * @param entry A value to remove from the filter list.
     */
    removeEntry(entry: string): boolean
    /**
     * Enable or disable the #GUPnPContextFilter to perform the network filtering.
     * @param enable %TRUE to enable `context_filter,` %FALSE otherwise
     */
    setEnabled(enable: boolean): void

    // Class property signals of GUPnP-1.2.GUPnP.ContextFilter

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
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
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
class ContextFilter extends GObject.Object {

    // Own properties of GUPnP-1.2.GUPnP.ContextFilter

    static name: string
    static $gtype: GObject.GType<ContextFilter>

    // Constructors of GUPnP-1.2.GUPnP.ContextFilter

    constructor(config?: ContextFilter_ConstructProps) 
    _init(config?: ContextFilter_ConstructProps): void
}

interface ContextManager_ConstructProps extends GObject.Object_ConstructProps {

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
    udaVersion?: GSSDP.UDAVersion | null
}

/**
 * Signal callback interface for `context-available`
 */
interface ContextManager_ContextAvailableSignalCallback {
    (context: Context): void
}

/**
 * Signal callback interface for `context-unavailable`
 */
interface ContextManager_ContextUnavailableSignalCallback {
    (context: Context): void
}

interface ContextManager {

    // Own properties of GUPnP-1.2.GUPnP.ContextManager

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

    // Own fields of GUPnP-1.2.GUPnP.ContextManager

    parentInstance: GObject.Object

    // Owm methods of GUPnP-1.2.GUPnP.ContextManager

    /**
     * Get the #GUPnPContextFilter associated with `manager`.
     */
    getContextFilter(): ContextFilter
    /**
     * Get the network port associated with this context manager.
     */
    getPort(): number
    /**
     * Get the #GSocketFamily the contexts are created for. Can be
     * %G_SOCKET_FAMILY_IPV6, %G_SOCKET_FAMILY_IPV4 or %G_SOCKET_FAMILY_INVALID for
     * both
     */
    getSocketFamily(): Gio.SocketFamily
    /**
     * Get the UDA protocol version the contexts are implementing
     */
    getUdaVersion(): GSSDP.UDAVersion
    /**
     * Get the #GUPnPContextFilter associated with `manager`.
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

    // Own signals of GUPnP-1.2.GUPnP.ContextManager

    connect(sigName: "context-available", callback: ContextManager_ContextAvailableSignalCallback): number
    on(sigName: "context-available", callback: ContextManager_ContextAvailableSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "context-available", callback: ContextManager_ContextAvailableSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "context-available", callback: ContextManager_ContextAvailableSignalCallback): NodeJS.EventEmitter
    emit(sigName: "context-available", ...args: any[]): void
    connect(sigName: "context-unavailable", callback: ContextManager_ContextUnavailableSignalCallback): number
    on(sigName: "context-unavailable", callback: ContextManager_ContextUnavailableSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "context-unavailable", callback: ContextManager_ContextUnavailableSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "context-unavailable", callback: ContextManager_ContextUnavailableSignalCallback): NodeJS.EventEmitter
    emit(sigName: "context-unavailable", ...args: any[]): void

    // Class property signals of GUPnP-1.2.GUPnP.ContextManager

    connect(sigName: "notify::context-filter", callback: (...args: any[]) => void): number
    on(sigName: "notify::context-filter", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::context-filter", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::context-filter", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::context-filter", ...args: any[]): void
    connect(sigName: "notify::family", callback: (...args: any[]) => void): number
    on(sigName: "notify::family", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::family", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::family", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::family", ...args: any[]): void
    connect(sigName: "notify::port", callback: (...args: any[]) => void): number
    on(sigName: "notify::port", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::port", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::port", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::port", ...args: any[]): void
    connect(sigName: "notify::uda-version", callback: (...args: any[]) => void): number
    on(sigName: "notify::uda-version", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::uda-version", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::uda-version", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::uda-version", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class ContextManager extends GObject.Object {

    // Own properties of GUPnP-1.2.GUPnP.ContextManager

    static name: string
    static $gtype: GObject.GType<ContextManager>

    // Constructors of GUPnP-1.2.GUPnP.ContextManager

    constructor(config?: ContextManager_ConstructProps) 
    _init(config?: ContextManager_ConstructProps): void
    /**
     * Factory-method to create a new #GUPnPContextManager. The final type of the
     * #GUPnPContextManager depends on the compile-time selection or - in case of
     * NetworkManager - on its availability during runtime. If it is not available,
     * the implementation falls back to the basic Unix context manager instead.
     * 
     * Equivalent to calling #gupnp_context_manager_create_full (%GSSDP_UDA_VERSION_1_0, %G_SOCKET_FAMILY_IPV4, port);
     * @param port Port to create contexts for, or 0 if you don't care what port is used.
     */
    static create(port: number): ContextManager
    /**
     * Factory-method to create a new #GUPnPContextManager. The final type of the
     * #GUPnPContextManager depends on the compile-time selection or - in case of
     * NetworkManager - on its availability during runtime. If it is not available,
     * the implementation falls back to the basic Unix context manager instead.
     * @param udaVersion #GSSDPUDAVersion the created contexts should implement (UDA 1.0 or 1.1). For %GSSDP_UDA_VERSION_UNSPECIFIED for default.
     * @param family #GSocketFamily to create the context for
     * @param port Port to create contexts for, or 0 if you don't care what port is used.
     */
    static createFull(udaVersion: GSSDP.UDAVersion, family: Gio.SocketFamily, port: number): ContextManager
}

interface ControlPoint_ConstructProps extends GSSDP.ResourceBrowser_ConstructProps {

    // Own constructor properties of GUPnP-1.2.GUPnP.ControlPoint

    /**
     * The resource factory to use. Set to NULL for default factory.
     */
    resourceFactory?: ResourceFactory | null
}

/**
 * Signal callback interface for `device-proxy-available`
 */
interface ControlPoint_DeviceProxyAvailableSignalCallback {
    (proxy: DeviceProxy): void
}

/**
 * Signal callback interface for `device-proxy-unavailable`
 */
interface ControlPoint_DeviceProxyUnavailableSignalCallback {
    (proxy: DeviceProxy): void
}

/**
 * Signal callback interface for `service-proxy-available`
 */
interface ControlPoint_ServiceProxyAvailableSignalCallback {
    (proxy: ServiceProxy): void
}

/**
 * Signal callback interface for `service-proxy-unavailable`
 */
interface ControlPoint_ServiceProxyUnavailableSignalCallback {
    (proxy: ServiceProxy): void
}

interface ControlPoint {

    // Own properties of GUPnP-1.2.GUPnP.ControlPoint

    /**
     * The resource factory to use. Set to NULL for default factory.
     */
    readonly resourceFactory: ResourceFactory

    // Own fields of GUPnP-1.2.GUPnP.ControlPoint

    parentInstance: GSSDP.ResourceBrowser

    // Owm methods of GUPnP-1.2.GUPnP.ControlPoint

    /**
     * Get the #GUPnPControlPoint associated with `control_point`.
     */
    getContext(): Context
    /**
     * Get the #GUPnPResourceFactory used by the `control_point`.
     */
    getResourceFactory(): ResourceFactory
    /**
     * Get the #GList of discovered #GUPnPDeviceProxy objects. Do not free the list
     * nor its elements.
     */
    listDeviceProxies(): DeviceProxy[]
    /**
     * Get the #GList of discovered #GUPnPServiceProxy objects. Do not free the
     * list nor its elements.
     */
    listServiceProxies(): ServiceProxy[]

    // Own signals of GUPnP-1.2.GUPnP.ControlPoint

    connect(sigName: "device-proxy-available", callback: ControlPoint_DeviceProxyAvailableSignalCallback): number
    on(sigName: "device-proxy-available", callback: ControlPoint_DeviceProxyAvailableSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "device-proxy-available", callback: ControlPoint_DeviceProxyAvailableSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "device-proxy-available", callback: ControlPoint_DeviceProxyAvailableSignalCallback): NodeJS.EventEmitter
    emit(sigName: "device-proxy-available", ...args: any[]): void
    connect(sigName: "device-proxy-unavailable", callback: ControlPoint_DeviceProxyUnavailableSignalCallback): number
    on(sigName: "device-proxy-unavailable", callback: ControlPoint_DeviceProxyUnavailableSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "device-proxy-unavailable", callback: ControlPoint_DeviceProxyUnavailableSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "device-proxy-unavailable", callback: ControlPoint_DeviceProxyUnavailableSignalCallback): NodeJS.EventEmitter
    emit(sigName: "device-proxy-unavailable", ...args: any[]): void
    connect(sigName: "service-proxy-available", callback: ControlPoint_ServiceProxyAvailableSignalCallback): number
    on(sigName: "service-proxy-available", callback: ControlPoint_ServiceProxyAvailableSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "service-proxy-available", callback: ControlPoint_ServiceProxyAvailableSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "service-proxy-available", callback: ControlPoint_ServiceProxyAvailableSignalCallback): NodeJS.EventEmitter
    emit(sigName: "service-proxy-available", ...args: any[]): void
    connect(sigName: "service-proxy-unavailable", callback: ControlPoint_ServiceProxyUnavailableSignalCallback): number
    on(sigName: "service-proxy-unavailable", callback: ControlPoint_ServiceProxyUnavailableSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "service-proxy-unavailable", callback: ControlPoint_ServiceProxyUnavailableSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "service-proxy-unavailable", callback: ControlPoint_ServiceProxyUnavailableSignalCallback): NodeJS.EventEmitter
    emit(sigName: "service-proxy-unavailable", ...args: any[]): void

    // Class property signals of GUPnP-1.2.GUPnP.ControlPoint

    connect(sigName: "notify::resource-factory", callback: (...args: any[]) => void): number
    on(sigName: "notify::resource-factory", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::resource-factory", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::resource-factory", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::resource-factory", ...args: any[]): void
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

class ControlPoint extends GSSDP.ResourceBrowser {

    // Own properties of GUPnP-1.2.GUPnP.ControlPoint

    static name: string
    static $gtype: GObject.GType<ControlPoint>

    // Constructors of GUPnP-1.2.GUPnP.ControlPoint

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
    static newFull(context: Context, factory: ResourceFactory, target: string): ControlPoint
    _init(config?: ControlPoint_ConstructProps): void
}

interface Device_ConstructProps extends DeviceInfo_ConstructProps {

    // Own constructor properties of GUPnP-1.2.GUPnP.Device

    /**
     * The containing #GUPnPRootDevice, or NULL if this is the root
     * device.
     */
    rootDevice?: RootDevice | null
}

interface Device {

    // Own properties of GUPnP-1.2.GUPnP.Device

    /**
     * The containing #GUPnPRootDevice, or NULL if this is the root
     * device.
     */
    readonly rootDevice: RootDevice

    // Own fields of GUPnP-1.2.GUPnP.Device

    parentInstance: DeviceInfo

    // Class property signals of GUPnP-1.2.GUPnP.Device

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

class Device extends DeviceInfo {

    // Own properties of GUPnP-1.2.GUPnP.Device

    static name: string
    static $gtype: GObject.GType<Device>

    // Constructors of GUPnP-1.2.GUPnP.Device

    constructor(config?: Device_ConstructProps) 
    _init(config?: Device_ConstructProps): void
}

interface DeviceInfo_ConstructProps extends GObject.Object_ConstructProps {

    // Own constructor properties of GUPnP-1.2.GUPnP.DeviceInfo

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
    element?: object | null
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

interface DeviceInfo {

    // Own properties of GUPnP-1.2.GUPnP.DeviceInfo

    /**
     * The #GUPnPContext to use.
     */
    readonly context: Context
    /**
     * The device type.
     */
    readonly deviceType: string
    /**
     * Private property.
     */
    document: XMLDoc
    /**
     * Private property.
     */
    element: object
    /**
     * The location of the device description file.
     */
    location: string
    /**
     * The resource factory to use. Set to NULL for default factory.
     */
    readonly resourceFactory: ResourceFactory
    /**
     * The UDN of this device.
     */
    readonly udn: string
    /**
     * The URL base (#SoupURI).
     */
    urlBase: Soup.URI

    // Own fields of GUPnP-1.2.GUPnP.DeviceInfo

    parentInstance: GObject.Object

    // Owm methods of GUPnP-1.2.GUPnP.DeviceInfo

    /**
     * Get the associated #GUPnPContext.
     */
    getContext(): Context
    /**
     * This function provides generic access to the contents of arbitrary elements
     * in the device description file.
     * @param element Name of the description element to retrieve
     */
    getDescriptionValue(element: string): string | null
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
    getDevice(type: string): DeviceInfo | null
    /**
     * Get the UPnP device type.
     */
    getDeviceType(): string
    /**
     * Get the friendly name of the device.
     */
    getFriendlyName(): string
    /**
     * Get an URL pointing to the icon most closely matching the
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
     */
    getIconUrl(requestedMimeType: string | null, requestedDepth: number, requestedWidth: number, requestedHeight: number, preferBigger: boolean): [ /* returnType */ string | null, /* mimeType */ string, /* depth */ number, /* width */ number, /* height */ number ]
    /**
     * Get the location of the device description file.
     */
    getLocation(): string
    /**
     * Get the manufacturer of the device.
     */
    getManufacturer(): string | null
    /**
     * Get an URL pointing to the manufacturer's website.
     */
    getManufacturerUrl(): string | null
    /**
     * Get the description of the device model.
     */
    getModelDescription(): string | null
    /**
     * Get the model name of the device.
     */
    getModelName(): string | null
    /**
     * Get the model number of the device.
     */
    getModelNumber(): string | null
    /**
     * Get an URL pointing to the device model's website.
     */
    getModelUrl(): string | null
    /**
     * Get an URL pointing to the device's presentation page, for web-based
     * administration.
     */
    getPresentationUrl(): string | null
    /**
     * Get the #GUPnPResourceFactory used by the `device_info`.
     */
    getResourceFactory(): ResourceFactory
    /**
     * Get the serial number of the device.
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
     */
    getService(type: string): ServiceInfo | null
    /**
     * Get the Unique Device Name of the device.
     */
    getUdn(): string
    /**
     * Get the Universal Product Code of the device.
     */
    getUpc(): string | null
    /**
     * Get the URL base of this device.
     */
    getUrlBase(): Soup.URI
    /**
     * Get a #GList of strings representing the types of the devices
     * directly contained in `info`.
     */
    listDeviceTypes(): string[] | null
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
    listDevices(): DeviceInfo[] | null
    /**
     * Get a #GList of strings that represent the device capabilities as announced
     * in the device description file using the &lt;dlna:X_DLNACAP&gt; element.
     */
    listDlnaCapabilities(): string[] | null
    /**
     * Get a #GList of strings that represent the device class and version as
     * announced in the device description file using the &lt;dlna:X_DLNADOC&gt;
     * element.
     */
    listDlnaDeviceClassIdentifier(): string[] | null
    /**
     * Get a #GList of strings representing the types of the services
     * directly contained in `info`.
     */
    listServiceTypes(): string[] | null
    /**
     * Get a #GList of new objects implementing #GUPnPServiceInfo representing the
     * services directly contained in `info`. The returned list should be
     * g_list_free()'d and the elements should be g_object_unref()'d.
     * 
     * Note that services are not cached internally, so that every time you call
     * function new objects are created. The application must cache any used
     * services if it wishes to keep them around and re-use them.
     */
    listServices(): ServiceInfo[] | null

    // Class property signals of GUPnP-1.2.GUPnP.DeviceInfo

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

class DeviceInfo extends GObject.Object {

    // Own properties of GUPnP-1.2.GUPnP.DeviceInfo

    static name: string
    static $gtype: GObject.GType<DeviceInfo>

    // Constructors of GUPnP-1.2.GUPnP.DeviceInfo

    constructor(config?: DeviceInfo_ConstructProps) 
    _init(config?: DeviceInfo_ConstructProps): void
}

interface DeviceProxy_ConstructProps extends DeviceInfo_ConstructProps {
}

interface DeviceProxy {

    // Own fields of GUPnP-1.2.GUPnP.DeviceProxy

    parentInstance: DeviceInfo

    // Class property signals of GUPnP-1.2.GUPnP.DeviceProxy

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

class DeviceProxy extends DeviceInfo {

    // Own properties of GUPnP-1.2.GUPnP.DeviceProxy

    static name: string
    static $gtype: GObject.GType<DeviceProxy>

    // Constructors of GUPnP-1.2.GUPnP.DeviceProxy

    constructor(config?: DeviceProxy_ConstructProps) 
    _init(config?: DeviceProxy_ConstructProps): void
}

interface ResourceFactory_ConstructProps extends GObject.Object_ConstructProps {
}

interface ResourceFactory {

    // Own fields of GUPnP-1.2.GUPnP.ResourceFactory

    parentInstance: GObject.Object

    // Owm methods of GUPnP-1.2.GUPnP.ResourceFactory

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
    registerResourceProxyType(upnpType: string, type: GObject.GType): void
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
     * @param upnpType The UPnP type name of the resource.
     * @param type The requested GType assignment for the resource.
     */
    registerResourceType(upnpType: string, type: GObject.GType): void
    /**
     * Unregisters the GType assignment for the proxy of resource of UPnP type
     * `upnp_type`.
     * @param upnpType The UPnP type name of the resource.
     */
    unregisterResourceProxyType(upnpType: string): boolean
    /**
     * Unregisters the GType assignment for the resource of UPnP type `upnp_type`.
     * @param upnpType The UPnP type name of the resource.
     */
    unregisterResourceType(upnpType: string): boolean

    // Class property signals of GUPnP-1.2.GUPnP.ResourceFactory

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class ResourceFactory extends GObject.Object {

    // Own properties of GUPnP-1.2.GUPnP.ResourceFactory

    static name: string
    static $gtype: GObject.GType<ResourceFactory>

    // Constructors of GUPnP-1.2.GUPnP.ResourceFactory

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
    static getDefault(): ResourceFactory
}

interface RootDevice_ConstructProps extends Gio.Initable_ConstructProps, Device_ConstructProps {

    // Own constructor properties of GUPnP-1.2.GUPnP.RootDevice

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

interface RootDevice extends Gio.Initable {

    // Own properties of GUPnP-1.2.GUPnP.RootDevice

    /**
     * TRUE if this device is available.
     */
    available: boolean
    /**
     * The path to directory where description documents are provided.
     */
    readonly descriptionDir: string
    /**
     * Device description document. Constructor property.
     */
    readonly descriptionDoc: XMLDoc
    /**
     * The path to device description document. This could either be an
     * absolute path or path relative to GUPnPRootDevice:description-dir.
     */
    readonly descriptionPath: string

    // Own fields of GUPnP-1.2.GUPnP.RootDevice

    parentInstance: Device

    // Owm methods of GUPnP-1.2.GUPnP.RootDevice

    /**
     * Get whether or not `root_device` is available (announcing its presence).
     */
    getAvailable(): boolean
    /**
     * Get the path to the directory containing description documents related to
     * `root_device`.
     */
    getDescriptionDir(): string
    /**
     * Gets the name of the description document as hosted via HTTP.
     */
    getDescriptionDocumentName(): string
    /**
     * Get the path to the device description document of `root_device`.
     */
    getDescriptionPath(): string
    /**
     * Get the relative location of `root_device`.
     */
    getRelativeLocation(): string
    /**
     * Get the #GSSDPResourceGroup used by `root_device`.
     */
    getSsdpResourceGroup(): GSSDP.ResourceGroup
    /**
     * Controls whether or not `root_device` is available (announcing
     * its presence).
     * @param available %TRUE if `root_device` should be available
     */
    setAvailable(available: boolean): void

    // Class property signals of GUPnP-1.2.GUPnP.RootDevice

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

class RootDevice extends Device {

    // Own properties of GUPnP-1.2.GUPnP.RootDevice

    static name: string
    static $gtype: GObject.GType<RootDevice>

    // Constructors of GUPnP-1.2.GUPnP.RootDevice

    constructor(config?: RootDevice_ConstructProps) 
    /**
     * Create a new #GUPnPRootDevice object, automatically loading and parsing
     * device description document from `description_path`.
     * @constructor 
     * @param context The #GUPnPContext
     * @param descriptionPath Path to device description document. This could either be an absolute path or path relative to `description_dir`.
     * @param descriptionDir Path to directory where description documents are provided.
     */
    constructor(context: Context, descriptionPath: string, descriptionDir: string) 
    /**
     * Create a new #GUPnPRootDevice object, automatically loading and parsing
     * device description document from `description_path`.
     * @constructor 
     * @param context The #GUPnPContext
     * @param descriptionPath Path to device description document. This could either be an absolute path or path relative to `description_dir`.
     * @param descriptionDir Path to directory where description documents are provided.
     */
    static new(context: Context, descriptionPath: string, descriptionDir: string): RootDevice
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
     */
    static newFull(context: Context, factory: ResourceFactory, descriptionDoc: XMLDoc, descriptionPath: string, descriptionDir: string): RootDevice
    _init(config?: RootDevice_ConstructProps): void
}

interface Service_ConstructProps extends ServiceInfo_ConstructProps {

    // Own constructor properties of GUPnP-1.2.GUPnP.Service

    /**
     * The containing #GUPnPRootDevice.
     */
    rootDevice?: RootDevice | null
}

/**
 * Signal callback interface for `action-invoked`
 */
interface Service_ActionInvokedSignalCallback {
    (action: ServiceAction): void
}

/**
 * Signal callback interface for `notify-failed`
 */
interface Service_NotifyFailedSignalCallback {
    (callbackUrl: Soup.URI[], reason: GLib.Error): void
}

/**
 * Signal callback interface for `query-variable`
 */
interface Service_QueryVariableSignalCallback {
    (variable: string, value: any): void
}

interface Service {

    // Own properties of GUPnP-1.2.GUPnP.Service

    /**
     * The containing #GUPnPRootDevice.
     */
    readonly rootDevice: RootDevice

    // Own fields of GUPnP-1.2.GUPnP.Service

    parentInstance: ServiceInfo

    // Owm methods of GUPnP-1.2.GUPnP.Service

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
    notifyValue(variable: string, value: any): void
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
    signalsAutoconnect(userData: object | null): void
    /**
     * Sends out any pending notifications, and stops queuing of new ones.
     */
    thawNotify(): void

    // Own signals of GUPnP-1.2.GUPnP.Service

    connect(sigName: "action-invoked", callback: Service_ActionInvokedSignalCallback): number
    on(sigName: "action-invoked", callback: Service_ActionInvokedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "action-invoked", callback: Service_ActionInvokedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "action-invoked", callback: Service_ActionInvokedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "action-invoked", ...args: any[]): void
    connect(sigName: "notify-failed", callback: Service_NotifyFailedSignalCallback): number
    on(sigName: "notify-failed", callback: Service_NotifyFailedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify-failed", callback: Service_NotifyFailedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify-failed", callback: Service_NotifyFailedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "notify-failed", reason: GLib.Error, ...args: any[]): void
    connect(sigName: "query-variable", callback: Service_QueryVariableSignalCallback): number
    on(sigName: "query-variable", callback: Service_QueryVariableSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "query-variable", callback: Service_QueryVariableSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "query-variable", callback: Service_QueryVariableSignalCallback): NodeJS.EventEmitter
    emit(sigName: "query-variable", value: any, ...args: any[]): void

    // Class property signals of GUPnP-1.2.GUPnP.Service

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

class Service extends ServiceInfo {

    // Own properties of GUPnP-1.2.GUPnP.Service

    static name: string
    static $gtype: GObject.GType<Service>

    // Constructors of GUPnP-1.2.GUPnP.Service

    constructor(config?: Service_ConstructProps) 
    _init(config?: Service_ConstructProps): void
}

interface ServiceInfo_ConstructProps extends GObject.Object_ConstructProps {

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
    element?: object | null
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

interface ServiceInfo {

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
    readonly element: object
    /**
     * The location of the device description file.
     */
    readonly location: string
    /**
     * The service type.
     */
    readonly serviceType: string
    /**
     * The UDN of the containing device.
     */
    readonly udn: string
    /**
     * The URL base (#SoupURI).
     */
    readonly urlBase: Soup.URI

    // Own fields of GUPnP-1.2.GUPnP.ServiceInfo

    parentInstance: GObject.Object

    // Owm methods of GUPnP-1.2.GUPnP.ServiceInfo

    /**
     * Get the #GUPnPContext associated with `info`.
     */
    getContext(): Context
    /**
     * Get the control URL for this service, or %NULL..
     */
    getControlUrl(): string
    /**
     * Get the event subscription URL for this service, or %NULL.
     */
    getEventSubscriptionUrl(): string
    /**
     * Get the ID of this service, or %NULL if there is no ID.
     */
    getId(): string
    /**
     * Note that introspection object is created from the information in service
     * description document (SCPD) provided by the service so it can not be created
     * if the service does not provide a SCPD.
     * @param callback callback to be called when introspection object is ready.
     */
    getIntrospectionAsync(callback: ServiceIntrospectionCallback): void
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
    getIntrospectionAsyncFull(callback: ServiceIntrospectionCallback, cancellable: Gio.Cancellable | null): void
    /**
     * Get the location of the device description file.
     */
    getLocation(): string
    /**
     * Get the SCPD URL for this service, or %NULL if there is no SCPD.
     */
    getScpdUrl(): string
    /**
     * Get the UPnP service type, or %NULL.
     */
    getServiceType(): string
    /**
     * Get the Unique Device Name of the containing device.
     */
    getUdn(): string
    /**
     * Get the URL base of this service.
     */
    getUrlBase(): Soup.URI
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
    introspectAsync(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Finish an asynchronous call initiated with
     * gupnp_service_info_introspect_async().
     * @param res A #GAsyncResult
     */
    introspectFinish(res: Gio.AsyncResult): ServiceIntrospection | null

    // Class property signals of GUPnP-1.2.GUPnP.ServiceInfo

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

class ServiceInfo extends GObject.Object {

    // Own properties of GUPnP-1.2.GUPnP.ServiceInfo

    static name: string
    static $gtype: GObject.GType<ServiceInfo>

    // Constructors of GUPnP-1.2.GUPnP.ServiceInfo

    constructor(config?: ServiceInfo_ConstructProps) 
    _init(config?: ServiceInfo_ConstructProps): void
}

interface ServiceIntrospection_ConstructProps extends GObject.Object_ConstructProps {

    // Own constructor properties of GUPnP-1.2.GUPnP.ServiceIntrospection

    /**
     * The scpd of the device description file.
     */
    scpd?: object | null
}

interface ServiceIntrospection {

    // Own properties of GUPnP-1.2.GUPnP.ServiceIntrospection

    /**
     * The scpd of the device description file.
     */
    readonly scpd: object

    // Owm methods of GUPnP-1.2.GUPnP.ServiceIntrospection

    /**
     * Returns the action by the name `action_name` in this service.
     * @param actionName The name of the action to retrieve
     */
    getAction(actionName: string): ServiceActionInfo | null
    /**
     * Returns the state variable by the name `variable_name` in this service.
     * @param variableName The name of the variable to retrieve
     */
    getStateVariable(variableName: string): ServiceStateVariableInfo | null
    /**
     * Returns a GList of names of all the actions in this service.
     */
    listActionNames(): string[]
    /**
     * Returns a #GList of all the actions (of type #GUPnPServiceActionInfo) in
     * this service.
     */
    listActions(): ServiceActionInfo[]
    /**
     * Returns a #GList of names of all the state variables in this service.
     */
    listStateVariableNames(): string[]
    /**
     * Returns a GList of all the state variables (of type
     * #GUPnPServiceStateVariableInfo) in this service.
     */
    listStateVariables(): ServiceStateVariableInfo[]

    // Class property signals of GUPnP-1.2.GUPnP.ServiceIntrospection

    connect(sigName: "notify::scpd", callback: (...args: any[]) => void): number
    on(sigName: "notify::scpd", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::scpd", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::scpd", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::scpd", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class ServiceIntrospection extends GObject.Object {

    // Own properties of GUPnP-1.2.GUPnP.ServiceIntrospection

    static name: string
    static $gtype: GObject.GType<ServiceIntrospection>

    // Constructors of GUPnP-1.2.GUPnP.ServiceIntrospection

    constructor(config?: ServiceIntrospection_ConstructProps) 
    _init(config?: ServiceIntrospection_ConstructProps): void
}

interface ServiceProxy_ConstructProps extends ServiceInfo_ConstructProps {

    // Own constructor properties of GUPnP-1.2.GUPnP.ServiceProxy

    /**
     * Whether we are subscribed to this service.
     */
    subscribed?: boolean | null
}

/**
 * Signal callback interface for `subscription-lost`
 */
interface ServiceProxy_SubscriptionLostSignalCallback {
    (error: GLib.Error): void
}

interface ServiceProxy {

    // Own properties of GUPnP-1.2.GUPnP.ServiceProxy

    /**
     * Whether we are subscribed to this service.
     */
    subscribed: boolean

    // Own fields of GUPnP-1.2.GUPnP.ServiceProxy

    parentInstance: ServiceInfo

    // Owm methods of GUPnP-1.2.GUPnP.ServiceProxy

    /**
     * Sets up `callback` to be called whenever a change notification for
     * `variable` is recieved.
     * @param variable The variable to add notification for
     * @param type The type of the variable
     * @param callback The callback to call when `variable` changes
     */
    addNotify(variable: string, type: GObject.GType, callback: ServiceProxyNotifyCallback): boolean
    /**
     * Get a notification for anything that happens on the peer. `value` in
     * `callback` will be of type #G_TYPE_POINTER and contain the pre-parsed
     * #xmlDoc. Do NOT free or modify this document.
     * @param callback The callback to call when the peer issues any variable notification.
     */
    addRawNotify(callback: ServiceProxyNotifyCallback): boolean
    /**
     * A variant of #gupnp_service_proxy_begin_action that takes lists of
     * in-parameter names, types and values.
     * @param action An action
     * @param inNames #GList of 'in' parameter names (as strings)
     * @param inValues #GList of values (as #GValue) that line up with `in_names`
     * @param callback The callback to call when sending the action has succeeded or failed
     */
    beginActionList(action: string, inNames: string[], inValues: any[], callback: ServiceProxyActionCallback): ServiceProxyAction
    /**
     * Synchronously call the `action` on the remote UPnP service.
     * @param action An action
     * @param cancellable A #GCancellable which can be used to cancel the current action call
     */
    callAction(action: ServiceProxyAction, cancellable: Gio.Cancellable | null): ServiceProxyAction | null
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
    callActionAsync(action: ServiceProxyAction, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Finish an asynchronous call initiated with
     * gupnp_service_proxy_call_action_async().
     * 
     * Note: This will only signalize transport errors to the caller, such as the action being cancelled
     * or lost connection etc. SOAP call errors are only returned by gupnp_service_proxy_action_get() and such.
     * @param result a #GAsyncResult
     */
    callActionFinish(result: Gio.AsyncResult): ServiceProxyAction | null
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
     */
    endActionList(action: ServiceProxyAction, outNames: string[], outTypes: GObject.GType[]): [ /* returnType */ boolean, /* outValues */ any[] ]
    /**
     * Returns if we are subscribed to this service.
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
     */
    removeNotify(variable: string, callback: ServiceProxyNotifyCallback): boolean
    /**
     * Cancels the variable change notification for `callback` and `user_data`.
     * 
     * This function must not be called directly or indirectly from a
     * #GUPnPServiceProxyNotifyCallback associated with this service proxy, even
     * if it is for another variable.
     * @param callback The callback to call when `variable` changes
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
     */
    sendActionList(action: string, inNames: string[], inValues: any[], outNames: string[], outTypes: GObject.GType[]): [ /* returnType */ boolean, /* outValues */ any[] ]
    /**
     * (Un)subscribes to this service.
     * 
     * <note>The relevant messages are not immediately sent but queued.
     * If you want to unsubcribe from this service because the application
     * is quitting, rely on automatic synchronised unsubscription on object
     * destruction instead.</note>
     * @param subscribed %TRUE to subscribe to this service
     */
    setSubscribed(subscribed: boolean): void

    // Own signals of GUPnP-1.2.GUPnP.ServiceProxy

    connect(sigName: "subscription-lost", callback: ServiceProxy_SubscriptionLostSignalCallback): number
    on(sigName: "subscription-lost", callback: ServiceProxy_SubscriptionLostSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "subscription-lost", callback: ServiceProxy_SubscriptionLostSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "subscription-lost", callback: ServiceProxy_SubscriptionLostSignalCallback): NodeJS.EventEmitter
    emit(sigName: "subscription-lost", ...args: any[]): void

    // Class property signals of GUPnP-1.2.GUPnP.ServiceProxy

    connect(sigName: "notify::subscribed", callback: (...args: any[]) => void): number
    on(sigName: "notify::subscribed", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::subscribed", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::subscribed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::subscribed", ...args: any[]): void
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

class ServiceProxy extends ServiceInfo {

    // Own properties of GUPnP-1.2.GUPnP.ServiceProxy

    static name: string
    static $gtype: GObject.GType<ServiceProxy>

    // Constructors of GUPnP-1.2.GUPnP.ServiceProxy

    constructor(config?: ServiceProxy_ConstructProps) 
    _init(config?: ServiceProxy_ConstructProps): void
}

interface XMLDoc_ConstructProps extends GObject.Object_ConstructProps {
}

interface XMLDoc {

    // Owm methods of GUPnP-1.2.GUPnP.XMLDoc

    getDoc(): libxml2.Doc

    // Class property signals of GUPnP-1.2.GUPnP.XMLDoc

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
class XMLDoc extends GObject.Object {

    // Own properties of GUPnP-1.2.GUPnP.XMLDoc

    static name: string
    static $gtype: GObject.GType<XMLDoc>

    // Constructors of GUPnP-1.2.GUPnP.XMLDoc

    constructor(config?: XMLDoc_ConstructProps) 
    /**
     * Create a new #GUPnPXMLDoc for `xml_doc`.
     * @constructor 
     * @param xmlDoc Pointer to #xmlDoc to wrap under this object
     */
    constructor(xmlDoc: libxml2.Doc) 
    /**
     * Create a new #GUPnPXMLDoc for `xml_doc`.
     * @constructor 
     * @param xmlDoc Pointer to #xmlDoc to wrap under this object
     */
    static new(xmlDoc: libxml2.Doc): XMLDoc
    /**
     * Create a new #GUPnPXMLDoc for the XML document at `path`.
     * @constructor 
     * @param path Path to xml document
     */
    static newFromPath(path: string): XMLDoc
    _init(config?: XMLDoc_ConstructProps): void
}

interface AclInterface {

    // Own fields of GUPnP-1.2.GUPnP.AclInterface

    /**
     * The parent interface.
     * @field 
     */
    parent: GObject.TypeInterface
    isAllowed: (self: Acl, device: object | null, service: object | null, path: string, address: string, agent: string | null) => boolean
    isAllowedAsync: (self: Acl, device: object | null, service: object | null, path: string, address: string, agent: string | null, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null) => void
    isAllowedFinish: (self: Acl, res: Gio.AsyncResult) => boolean
    canSync: (self: Acl) => boolean
}

/**
 * Implement a simple access control list for GUPnP.
 * @record 
 */
abstract class AclInterface {

    // Own properties of GUPnP-1.2.GUPnP.AclInterface

    static name: string
}

interface ContextClass {

    // Own fields of GUPnP-1.2.GUPnP.ContextClass

    parentClass: GSSDP.ClientClass
}

abstract class ContextClass {

    // Own properties of GUPnP-1.2.GUPnP.ContextClass

    static name: string
}

interface ContextFilterClass {

    // Own fields of GUPnP-1.2.GUPnP.ContextFilterClass

    parentClass: GObject.ObjectClass
}

abstract class ContextFilterClass {

    // Own properties of GUPnP-1.2.GUPnP.ContextFilterClass

    static name: string
}

interface ContextManagerClass {

    // Own fields of GUPnP-1.2.GUPnP.ContextManagerClass

    parentClass: GObject.ObjectClass
}

abstract class ContextManagerClass {

    // Own properties of GUPnP-1.2.GUPnP.ContextManagerClass

    static name: string
}

interface ControlPointClass {

    // Own fields of GUPnP-1.2.GUPnP.ControlPointClass

    parentClass: GSSDP.ResourceBrowserClass
    deviceProxyAvailable: (controlPoint: ControlPoint, proxy: DeviceProxy) => void
    deviceProxyUnavailable: (controlPoint: ControlPoint, proxy: DeviceProxy) => void
    serviceProxyAvailable: (controlPoint: ControlPoint, proxy: ServiceProxy) => void
    serviceProxyUnavailable: (controlPoint: ControlPoint, proxy: ServiceProxy) => void
}

abstract class ControlPointClass {

    // Own properties of GUPnP-1.2.GUPnP.ControlPointClass

    static name: string
}

interface DeviceClass {

    // Own fields of GUPnP-1.2.GUPnP.DeviceClass

    parentClass: DeviceInfoClass
}

abstract class DeviceClass {

    // Own properties of GUPnP-1.2.GUPnP.DeviceClass

    static name: string
}

interface DeviceInfoClass {

    // Own fields of GUPnP-1.2.GUPnP.DeviceInfoClass

    parentClass: GObject.ObjectClass
}

abstract class DeviceInfoClass {

    // Own properties of GUPnP-1.2.GUPnP.DeviceInfoClass

    static name: string
}

interface DeviceProxyClass {

    // Own fields of GUPnP-1.2.GUPnP.DeviceProxyClass

    parentClass: DeviceInfoClass
}

abstract class DeviceProxyClass {

    // Own properties of GUPnP-1.2.GUPnP.DeviceProxyClass

    static name: string
}

interface ResourceFactoryClass {

    // Own fields of GUPnP-1.2.GUPnP.ResourceFactoryClass

    parentClass: GObject.ObjectClass
}

abstract class ResourceFactoryClass {

    // Own properties of GUPnP-1.2.GUPnP.ResourceFactoryClass

    static name: string
}

interface RootDeviceClass {

    // Own fields of GUPnP-1.2.GUPnP.RootDeviceClass

    parentClass: DeviceClass
}

abstract class RootDeviceClass {

    // Own properties of GUPnP-1.2.GUPnP.RootDeviceClass

    static name: string
}

interface ServiceAction {

    // Owm methods of GUPnP-1.2.GUPnP.ServiceAction

    /**
     * Get the number of IN arguments from the `action` and return it.
     */
    getArgumentCount(): number
    /**
     * Retrieves the value of `argument` into a GValue of type `type` and returns it.
     * The method exists only and only to satify PyGI, please use
     * gupnp_service_action_get_value() and ignore this if possible.
     * @param argument The name of the argument to retrieve
     * @param type The type of argument to retrieve
     */
    getValue(argument: string, type: GObject.GType): any
    /**
     * Get an ordered (preferred first) #GList of locales preferred by
     * the client. Free list and elements after use.
     */
    getLocales(): string[]
    /**
     * Get the #SoupMessage associated with `action`. Mainly intended for
     * applications to be able to read HTTP headers received from clients.
     */
    getMessage(): Soup.Message
    /**
     * Get the name of `action`.
     */
    getName(): string
    /**
     * A variant of #gupnp_service_action_get that uses #GList instead of varargs.
     * @param argNames A #GList of argument names as string
     * @param argTypes A #GList of argument types as #GType
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
    returnError(errorCode: number, errorDescription: string): void
    /**
     * Return succesfully.
     */
    returnSuccess(): void
    /**
     * Sets the value of `argument` to `value`.
     * @param argument The name of the return value to retrieve
     * @param value The #GValue to store the return value
     */
    setValue(argument: string, value: any): void
    /**
     * Sets the specified action return values.
     * @param argNames A #GList of argument names
     * @param argValues The #GList of values (as #GValue<!-- -->s) that line up with `arg_names`.
     */
    setValues(argNames: string[], argValues: any[]): void
}

/**
 * Opaque structure for holding in-progress action data.
 * @record 
 */
class ServiceAction {

    // Own properties of GUPnP-1.2.GUPnP.ServiceAction

    static name: string
}

interface ServiceActionArgInfo {

    // Own fields of GUPnP-1.2.GUPnP.ServiceActionArgInfo

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
    relatedStateVariable: string
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

    // Own properties of GUPnP-1.2.GUPnP.ServiceActionArgInfo

    static name: string
}

interface ServiceActionInfo {

    // Own fields of GUPnP-1.2.GUPnP.ServiceActionInfo

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

    // Own properties of GUPnP-1.2.GUPnP.ServiceActionInfo

    static name: string
}

interface ServiceClass {

    // Own fields of GUPnP-1.2.GUPnP.ServiceClass

    parentClass: ServiceInfoClass
    actionInvoked: (service: Service, action: ServiceAction) => void
    queryVariable: (service: Service, variable: string, value: any) => void
}

abstract class ServiceClass {

    // Own properties of GUPnP-1.2.GUPnP.ServiceClass

    static name: string
}

interface ServiceInfoClass {

    // Own fields of GUPnP-1.2.GUPnP.ServiceInfoClass

    parentClass: GObject.ObjectClass
}

abstract class ServiceInfoClass {

    // Own properties of GUPnP-1.2.GUPnP.ServiceInfoClass

    static name: string
}

interface ServiceIntrospectionClass {

    // Own fields of GUPnP-1.2.GUPnP.ServiceIntrospectionClass

    parentClass: GObject.ObjectClass
}

abstract class ServiceIntrospectionClass {

    // Own properties of GUPnP-1.2.GUPnP.ServiceIntrospectionClass

    static name: string
}

interface ServiceProxyAction {

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
     * @param outHash A #GHashTable of out parameter name and initialised #GValue pairs
     */
    getResultHash(outHash: GLib.HashTable): [ /* returnType */ boolean, /* outHash */ GLib.HashTable ]
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
     * @param outNames #GList of 'out' parameter names (as strings)
     * @param outTypes #GList of types (as #GType) that line up with `out_names`
     */
    getResultList(outNames: string[], outTypes: GObject.GType[]): [ /* returnType */ boolean, /* outValues */ any[] ]
    ref(): ServiceProxyAction
    /**
     * Update the value of `key` to `value`.
     * 
     * `key` needs to already exist in `action`.
     * @param key the name of the value to modify
     * @param value the new value of `key`
     */
    set(key: string, value: any): boolean
    unref(): void
}

/**
 * Opaque structure for holding in-progress action data.
 * @record 
 */
class ServiceProxyAction {

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
     * @param inNames #GList of 'in' parameter names (as strings)
     * @param inValues #GList of values (as #GValue) that line up with `in_names`
     */
    static newFromList(action: string, inNames: string[], inValues: any[]): ServiceProxyAction
}

interface ServiceProxyClass {

    // Own fields of GUPnP-1.2.GUPnP.ServiceProxyClass

    parentClass: ServiceInfoClass
    subscriptionLost: (proxy: ServiceProxy, reason: GLib.Error) => void
}

abstract class ServiceProxyClass {

    // Own properties of GUPnP-1.2.GUPnP.ServiceProxyClass

    static name: string
}

interface ServiceStateVariableInfo {

    // Own fields of GUPnP-1.2.GUPnP.ServiceStateVariableInfo

    /**
     * The name of the state variable.
     * @field 
     */
    name: string
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
class ServiceStateVariableInfo {

    // Own properties of GUPnP-1.2.GUPnP.ServiceStateVariableInfo

    static name: string
}

interface XMLDocClass {

    // Own fields of GUPnP-1.2.GUPnP.XMLDocClass

    parentClass: GObject.ObjectClass
}

abstract class XMLDocClass {

    // Own properties of GUPnP-1.2.GUPnP.XMLDocClass

    static name: string
}

    type WhiteList = ContextFilter
}
export default GUPnP;