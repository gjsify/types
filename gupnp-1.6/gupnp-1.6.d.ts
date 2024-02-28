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
    class ControlError extends GLib.Error {
        // Own fields of GUPnP-1.6.ControlError

        /**
         * The action name was invalid.
         */
        INVALID_ACTION: number;
        /**
         * The action arguments were invalid.
         */
        INVALID_ARGS: number;
        /**
         * Out of sync (deprecated).
         */
        OUT_OF_SYNC: number;
        /**
         * The action failed.
         */
        ACTION_FAILED: number;

        // Constructors of GUPnP-1.6.ControlError

        constructor(options: { message: string; code: number });

        // Owm methods of GUPnP-1.6.ControlError

        static quark(): GLib.Quark;
    }

    /**
     * Error codes during eventing of state variables.
     */
    class EventingError extends GLib.Error {
        // Own fields of GUPnP-1.6.EventingError

        /**
         * The subscription attempt failed.
         */
        SUBSCRIPTION_FAILED: number;
        /**
         * The subscription was lost.
         */
        SUBSCRIPTION_LOST: number;
        /**
         * The notification failed.
         */
        NOTIFY_FAILED: number;

        // Constructors of GUPnP-1.6.EventingError

        constructor(options: { message: string; code: number });

        // Owm methods of GUPnP-1.6.EventingError

        static quark(): GLib.Quark;
    }

    /**
     * Errors during [class`GUPnP`.RootDevice] creation
     */
    class RootdeviceError extends GLib.Error {
        // Own fields of GUPnP-1.6.RootdeviceError

        /**
         * No #GUPnPContext was passed to the root device.
         */
        NO_CONTEXT: number;
        /**
         * Device description path was missing
         */
        NO_DESCRIPTION_PATH: number;
        /**
         * Description folder was missing
         */
        NO_DESCRIPTION_FOLDER: number;
        /**
         * Network interface is not usable
         */
        NO_NETWORK: number;
        FAIL: number;

        // Constructors of GUPnP-1.6.RootdeviceError

        constructor(options: { message: string; code: number });

        // Owm methods of GUPnP-1.6.RootdeviceError

        static quark(): GLib.Quark;
    }

    /**
     * Error codes during communication with another server.
     */
    class ServerError extends GLib.Error {
        // Own fields of GUPnP-1.6.ServerError

        /**
         * Internal server error.
         */
        INTERNAL_SERVER_ERROR: number;
        /**
         * The resource was not found.
         */
        NOT_FOUND: number;
        /**
         * This method is not implemented.
         */
        NOT_IMPLEMENTED: number;
        /**
         * Invalid response.
         */
        INVALID_RESPONSE: number;
        /**
         * Invalid URL.
         */
        INVALID_URL: number;
        /**
         * Unknown/unhandled error.
         */
        OTHER: number;

        // Constructors of GUPnP-1.6.ServerError

        constructor(options: { message: string; code: number });

        // Owm methods of GUPnP-1.6.ServerError

        static quark(): GLib.Quark;
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
    class ServiceError extends GLib.Error {
        // Own fields of GUPnP-1.6.ServiceError

        /**
         * [method`GUPnP`.Service.signals_autoconnect] failed
         */
        AUTOCONNECT: number;

        // Constructors of GUPnP-1.6.ServiceError

        constructor(options: { message: string; code: number });

        // Owm methods of GUPnP-1.6.ServiceError

        static quark(): GLib.Quark;
    }

    /**
     * Errors during service introspection
     */
    class ServiceIntrospectionError extends GLib.Error {
        // Own fields of GUPnP-1.6.ServiceIntrospectionError

        /**
         * Unknown error
         */
        OTHER: number;

        // Constructors of GUPnP-1.6.ServiceIntrospectionError

        constructor(options: { message: string; code: number });

        // Owm methods of GUPnP-1.6.ServiceIntrospectionError

        static quark(): GLib.Quark;
    }

    /**
     * Errors during occuring during processing of XML data.
     */
    class XMLError extends GLib.Error {
        // Own fields of GUPnP-1.6.XMLError

        /**
         * Generic XML parsing error.
         */
        PARSE: number;
        /**
         * A required XML node was not found.
         */
        NO_NODE: number;
        /**
         * An XML node is unexpectedly empty.
         */
        EMPTY_NODE: number;
        /**
         * An XML node has an unknown attribute.
         */
        INVALID_ATTRIBUTE: number;
        /**
         * Unknown/unhandled XML related errors.
         */
        OTHER: number;

        // Constructors of GUPnP-1.6.XMLError

        constructor(options: { message: string; code: number });

        // Owm methods of GUPnP-1.6.XMLError

        static quark(): GLib.Quark;
    }

    function control_error_quark(): GLib.Quark;
    function eventing_error_quark(): GLib.Quark;
    /**
     * Generate and return a new UUID.
     * @returns A newly generated UUID in string representation.
     */
    function get_uuid(): string;
    function rootdevice_error_quark(): GLib.Quark;
    function server_error_quark(): GLib.Quark;
    function service_error_quark(): GLib.Quark;
    function service_introspection_error_quark(): GLib.Quark;
    function xml_error_quark(): GLib.Quark;
    interface ServiceProxyActionCallback {
        (proxy: ServiceProxy, action: ServiceProxyAction): void;
    }
    interface ServiceProxyNotifyCallback {
        (proxy: ServiceProxy, variable: string, value: GObject.Value): void;
    }
    type BinBase64 = object | null;
    type BinHex = object | null;
    type Date = object | null;
    type DateTime = object | null;
    type DateTimeTZ = object | null;
    type Time = object | null;
    type TimeTZ = object | null;
    type URI = object | null;
    type UUID = object | null;
    module Context {
        // Constructor properties interface
    }

    /**
     * Context object wrapping shared networking bits.
     *
     * #GUPnPContext wraps the networking bits that are used by the various
     * GUPnP classes. It automatically starts a web server on demand.
     *
     * For debugging, it is possible to see the messages being sent and received by
     * setting the environment variable `GUPNP_DEBUG`.
     */
    class Context extends GSSDP.Client {
        // Own properties of GUPnP-1.6.Context

        /**
         * An access control list.
         */
        acl: Acl;
        /**
         * The content of the Content-Language header id the client
         * sends Accept-Language and no language-specific pages to serve
         * exist. The property defaults to 'en'.
         */
        default_language: string;
        /**
         * The content of the Content-Language header id the client
         * sends Accept-Language and no language-specific pages to serve
         * exist. The property defaults to 'en'.
         */
        defaultLanguage: string;
        /**
         * The #SoupServer HTTP server used by GUPnP.
         */
        readonly server: Soup.Server;
        /**
         * The #SoupSession object used by GUPnP.
         */
        readonly session: Soup.Session;
        /**
         * The preferred subscription timeout: the number of seconds after
         * which subscriptions are renewed. Set to '0' if subscriptions
         * are never to time out.
         */
        subscription_timeout: number;
        /**
         * The preferred subscription timeout: the number of seconds after
         * which subscriptions are renewed. Set to '0' if subscriptions
         * are never to time out.
         */
        subscriptionTimeout: number;

        // Constructors of GUPnP-1.6.Context

        static ['new'](iface: string | null, port: number): Context;

        static new_for_address(addr: Gio.InetAddress | null, port: number, uda_version: GSSDP.UDAVersion): Context;

        static new_full(
            iface: string | null,
            addr: Gio.InetAddress | null,
            port: number,
            uda_version: GSSDP.UDAVersion,
        ): Context;

        // Owm methods of GUPnP-1.6.Context

        /**
         * Add a #SoupServerCallback to the #GUPnPContext<!-- -->'s #SoupServer.
         * @param use_acl %TRUE, if the path should query the GUPnPContext::acl before serving the resource, %FALSE otherwise.
         * @param path the toplevel path for the handler.
         * @param callback callback to invoke for requests under @path
         * @param destroy A #GDestroyNotify for @user_data or %NULL if none.
         */
        add_server_handler(
            use_acl: boolean,
            path: string,
            callback: Soup.ServerCallback,
            destroy?: GLib.DestroyNotify | null,
        ): void;
        /**
         * Access the #GUPnPAcl associated with this client. If there isn't any,
         * retturns %NULL. The returned ACL must not be freed.
         * @returns The access control list associated with this context or %NULL if no acl is set.
         */
        get_acl(): Acl;
        /**
         * Get the default Content-Language header for this context.
         * @returns The default content of the Content-Language header.
         */
        get_default_language(): string;
        /**
         * Get the port that the SOAP server is running on.
         * @returns The port the SOAP server is running on.
         */
        get_port(): number;
        /**
         * Get the #SoupServer HTTP server that GUPnP is using.
         * @returns The #SoupServer used by GUPnP. Do not unref this when finished.
         */
        get_server(): Soup.Server;
        /**
         * Get the #SoupSession object that GUPnP is using.
         * @returns The #SoupSession used by GUPnP. Do not unref this when finished.
         */
        get_session(): Soup.Session;
        /**
         * Get the event subscription timeout (in seconds), or 0 meaning there is no
         * timeout.
         * @returns The event subscription timeout in seconds.
         */
        get_subscription_timeout(): number;
        /**
         * Start hosting `local_path` at `server_path`. Files with the path
         * `local_path`.LOCALE (if they exist) will be served up when LOCALE is
         * specified in the request's Accept-Language header.
         * @param local_path Path to the local file or folder to be hosted
         * @param server_path Web server path where @local_path should be hosted
         */
        host_path(local_path: string, server_path: string): void;
        /**
         * Use this method to serve different local path to specific user-agent(s). The
         * path `server_path` must already be hosted by `context`.
         * @param local_path Path to the local file or folder to be hosted
         * @param server_path Web server path already being hosted
         * @param user_agent The user-agent as a #GRegex.
         * @returns %TRUE on success, %FALSE otherwise.
         */
        host_path_for_agent(local_path: string, server_path: string, user_agent: GLib.Regex): boolean;
        /**
         * Remove a #SoupServerCallback from the #GUPnPContext<!-- -->'s #SoupServer.
         * @param path the toplevel path for the handler.
         */
        remove_server_handler(path: string): void;
        /**
         * Utility function to re-write an uri to the IPv6 link-local form which has
         * the zone index appended to the IP address.
         * @param uri an uri to rewrite if necessary
         * @returns A re-written version of the @uri if the context is on a link-local IPv6 address, a copy of the @uri otherwise or %NULL if @uri was invalid
         */
        rewrite_uri(uri: string): string;
        /**
         * Attach or remove the assoicated access control list to this context. If
         * `acl` is %NULL, the current access control list will be removed.
         * @param acl The new access control list or %NULL to remove the current list.
         */
        set_acl(acl?: Acl | null): void;
        /**
         * Set the default language for the Content-Language header to `language`.
         *
         * If the client sends an Accept-Language header the UPnP HTTP server
         * is required to send a Content-Language header in return. If there are
         * no files hosted in languages which match the requested ones the
         * Content-Language header is set to this value. The default value is "en".
         * @param language A language tag as defined in RFC 2616 3.10
         */
        set_default_language(language: string): void;
        /**
         * Sets the event subscription timeout to `timeout`. Use 0 if you don't
         * want subscriptions to time out. Note that any client side subscriptions
         * will automatically be renewed.
         * @param timeout Event subscription timeout in seconds
         */
        set_subscription_timeout(timeout: number): void;
        /**
         * Stop hosting the file or folder at `server_path`.
         * @param server_path Web server path where the file or folder is hosted
         */
        unhost_path(server_path: string): void;
    }

    module ContextFilter {
        // Constructor properties interface
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
     */
    class ContextFilter extends GObject.Object {
        // Own properties of GUPnP-1.6.ContextFilter

        /**
         * Whether this context filter is active or not.
         */
        enabled: boolean;
        /**
         * A list of items to filter for.
         */
        entries: string[];

        // Owm methods of GUPnP-1.6.ContextFilter

        /**
         * Add `entry` in the list of valid criteria used by `context_filter` to
         * filter networks.
         * if `entry` already exists, it won't be added a second time.
         * @param entry A value used to filter network
         * @returns %TRUE if @entry is added, %FALSE otherwise.
         */
        add_entry(entry: string): boolean;
        /**
         * Add a list of entries to a #GUPnPContextFilter. This is a helper function to
         * directly add a %NULL-terminated array of string usually acquired from
         * command line arguments.
         * @param entries A %NULL-terminated list of strings
         */
        add_entryv(entries: string[]): void;
        /**
         * It will check if the `context` is allowed or not. The `context_filter` will
         * check all its entries against #GUPnPContext interface, host IP and network
         * fields information. This function doesn't take into account the
         * `context_filter` status (enabled or not).
         * @param context A #GUPnPContext to test.
         * @returns %TRUE if @context is matching the @context_filter criteria, %FALSE otherwise.
         */
        check_context(context: Context): boolean;
        /**
         * Remove all entries from #GList that compose the context filter.
         * The list is now empty. Even if #GUPnPContextFilter is enabled, it will have
         * the same behavior as if it was disabled.
         */
        clear(): void;
        /**
         * Return the status of the #GUPnPContextFilter
         * @returns %TRUE if @context_filter is enabled, %FALSE otherwise.
         */
        get_enabled(): boolean;
        /**
         * Get the #GList of entries that compose the context filter. Do not free
         * @returns a #GList of entries used to filter networks, interfaces,... or %NULL.
         */
        get_entries(): string[] | null;
        /**
         * Return the state of the entries list of #GUPnPContextFilter
         * @returns %TRUE if @context_filter is empty, %FALSE otherwise.
         */
        is_empty(): boolean;
        /**
         * Remove `entry` in the list of valid criteria used by `context_filter` to
         * filter networks.
         * @param entry A value to remove from the filter list.
         * @returns %TRUE if @entry is removed, %FALSE otherwise.
         */
        remove_entry(entry: string): boolean;
        /**
         * Enable or disable the #GUPnPContextFilter to perform the network filtering.
         * @param enable %TRUE to enable @context_filter, %FALSE otherwise
         */
        set_enabled(enable: boolean): void;
    }

    module ContextManager {
        // Signal callback interfaces

        interface ContextAvailable {
            (context: Context): void;
        }

        interface ContextUnavailable {
            (context: Context): void;
        }

        // Constructor properties interface
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
     */
    abstract class ContextManager extends GObject.Object {
        // Own properties of GUPnP-1.6.ContextManager

        /**
         * The context filter to use.
         */
        readonly context_filter: ContextFilter;
        /**
         * The context filter to use.
         */
        readonly contextFilter: ContextFilter;
        /**
         * The socket family to create contexts for. Use %G_SOCKET_FAMILY_INVALID
         * for any or %G_SOCKET_FAMILY_IPV4 for IPv4 contexts or
         * %G_SOCKET_FAMILY_IPV6 for IPv6 contexts
         */
        family: Gio.SocketFamily;
        /**
         * Port the contexts listen on, or 0 if you don't care what
         * port is used by #GUPnPContext objects created by this object.
         */
        port: number;
        /**
         * The UDA version the contexts will support. Use %GSSDP_UDA_VERSION_UNSPECIFIED
         * for using the default UDA version.
         */
        uda_version: GSSDP.UDAVersion;
        /**
         * The UDA version the contexts will support. Use %GSSDP_UDA_VERSION_UNSPECIFIED
         * for using the default UDA version.
         */
        udaVersion: GSSDP.UDAVersion;

        // Owm methods of GUPnP-1.6.ContextManager

        /**
         * Factory-method to create a new #GUPnPContextManager. The final type of the
         * #GUPnPContextManager depends on the compile-time selection or - in case of
         * NetworkManager - on its availability during run-time. If it is not available,
         * the implementation falls back to the basic Unix context manager instead.
         *
         * Equivalent to calling #gupnp_context_manager_create_full (%GSSDP_UDA_VERSION_1_0, %G_SOCKET_FAMILY_IPV4, port);
         * @param port Port to create contexts for, or 0 if you don't care what port is used.
         */
        static create(port: number): ContextManager;
        /**
         * Factory-method to create a new #GUPnPContextManager. The final type of the
         * #GUPnPContextManager depends on the compile-time selection or - in case of
         * NetworkManager - on its availability during run-time. If it is not available,
         * the implementation falls back to the basic Unix context manager instead.
         * @param uda_version #GSSDPUDAVersion the created contexts should implement (UDA 1.0 or 1.1). For %GSSDP_UDA_VERSION_UNSPECIFIED for default.
         * @param family #GSocketFamily to create the context for
         * @param port Port to create contexts for, or 0 if you don't care what port is used.
         */
        static create_full(uda_version: GSSDP.UDAVersion, family: Gio.SocketFamily, port: number): ContextManager;

        // Owm methods of GUPnP-1.6.ContextManager

        /**
         * Get the #GUPnPContextFilter associated with `manager`.
         * @returns The #GUPnPContextFilter associated with this context manager.
         */
        get_context_filter(): ContextFilter;
        /**
         * Get the network port associated with this context manager.
         * @returns The network port associated with this context manager.
         */
        get_port(): number;
        /**
         * Get the #GSocketFamily the contexts are created for. Can be
         * %G_SOCKET_FAMILY_IPV6, %G_SOCKET_FAMILY_IPV4 or %G_SOCKET_FAMILY_INVALID for
         * both
         * @returns The socket family
         */
        get_socket_family(): Gio.SocketFamily;
        /**
         * Get the UDA protocol version the contexts are implementing
         * @returns The UDA protocol version
         */
        get_uda_version(): GSSDP.UDAVersion;
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
        manage_control_point(control_point: ControlPoint): void;
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
        manage_root_device(root_device: RootDevice): void;
        /**
         * This function starts a rescan on every control point managed by `manager`.
         * Only the active control points send discovery messages.
         * This function should be called when servers are suspected to have
         * disappeared.
         */
        rescan_control_points(): void;
    }

    module ControlPoint {
        // Signal callback interfaces

        interface DeviceProxyAvailable {
            (proxy: DeviceProxy): void;
        }

        interface DeviceProxyUnavailable {
            (proxy: DeviceProxy): void;
        }

        interface ServiceProxyAvailable {
            (proxy: ServiceProxy): void;
        }

        interface ServiceProxyUnavailable {
            (proxy: ServiceProxy): void;
        }

        // Constructor properties interface
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
     */
    class ControlPoint extends GSSDP.ResourceBrowser {
        // Own properties of GUPnP-1.6.ControlPoint

        /**
         * The resource factory to use. Set to NULL for default factory.
         */
        resource_factory: ResourceFactory;
        /**
         * The resource factory to use. Set to NULL for default factory.
         */
        resourceFactory: ResourceFactory;

        // Constructors of GUPnP-1.6.ControlPoint

        static ['new'](context: Context, target: string): ControlPoint;

        static new_full(context: Context, factory: ResourceFactory, target: string): ControlPoint;

        // Owm methods of GUPnP-1.6.ControlPoint

        /**
         * Get the #GUPnPControlPoint associated with `control_point`.
         * @returns The #GUPnPContext.
         */
        get_context(): Context;
        /**
         * Get the #GUPnPResourceFactory used by the `control_point`. If none was set during construction
         * by calling [ctor`GUPnP`.ControlPoint.new_full], equivalent to calling
         * [func`GUPnP`.ResourceFactory.get_default]
         * @returns The #GUPnPResourceFactory used by this control point
         */
        get_resource_factory(): ResourceFactory;
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
        list_device_proxies(): DeviceProxy[];
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
        list_service_proxies(): ServiceProxy[];
    }

    module Device {
        // Constructor properties interface
    }

    /**
     * Base class for UPnP device implementations.
     *
     * #GUPnPDevice allows for retrieving a device's sub-devices
     * and services. #GUPnPDevice implements the #GUPnPDeviceInfo
     * interface.
     */
    class Device extends DeviceInfo {
        // Own properties of GUPnP-1.6.Device

        /**
         * The containing #GUPnPRootDevice, or NULL if this is the root
         * device.
         */
        root_device: RootDevice;
        /**
         * The containing #GUPnPRootDevice, or NULL if this is the root
         * device.
         */
        rootDevice: RootDevice;
    }

    module DeviceInfo {
        // Constructor properties interface
    }

    /**
     * Device information shared by local and remote devices
     *
     * This class aggregates the information that is shared between remote and local
     * devices.
     */
    abstract class DeviceInfo extends GObject.Object {
        // Own properties of GUPnP-1.6.DeviceInfo

        /**
         * The #GUPnPContext to use.
         */
        context: Context;
        /**
         * The device type, e.g. `urn:schemas-upnp-org:device:InternetGatewayDevice:1`
         */
        device_type: string;
        /**
         * The device type, e.g. `urn:schemas-upnp-org:device:InternetGatewayDevice:1`
         */
        deviceType: string;
        /**
         * The description document
         */
        document: XMLDoc;
        /**
         * Private property.
         */
        element: any;
        /**
         * The location of the device description file.
         */
        location: string;
        /**
         * The resource factory to use. Set to NULL for default factory.
         */
        resource_factory: ResourceFactory;
        /**
         * The resource factory to use. Set to NULL for default factory.
         */
        resourceFactory: ResourceFactory;
        /**
         * The UDN of this device.
         */
        udn: string;
        /**
         * The URL base (#GUri).
         */
        url_base: GLib.Uri;
        /**
         * The URL base (#GUri).
         */
        urlBase: GLib.Uri;

        // Owm methods of GUPnP-1.6.DeviceInfo

        /**
         * Get the associated #GUPnPContext.
         * @returns The #GUPnPContext the devices is operating on.
         */
        get_context(): Context;
        /**
         * This function provides generic access to the contents of arbitrary elements
         * in the device description file.
         * @param element Name of the description element to retrieve
         * @returns a newly allocated string containing the requested value or %NULL if the device description doesn't contain the given @element
         */
        get_description_value(element: string): string | null;
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
        get_device(type: string): DeviceInfo | null;
        /**
         * Get the UPnP device type of this #GUPnPDeviceInfo, e.g. `urn:schemas-upnp-org:device:InternetGatewayDevice:1`
         * @returns A constant string, or %NULL.
         */
        get_device_type(): string;
        /**
         * Get the friendly name of the device.
         * @returns A newly allocated string containing the "friendly name" of the device, or %NULL if not available. g_free() after use.
         */
        get_friendly_name(): string | null;
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
        get_icon_async(
            requested_mime_type: string | null,
            requested_depth: number,
            requested_width: number,
            requested_height: number,
            prefer_bigger: boolean,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        get_icon_finish(res: Gio.AsyncResult): GLib.Bytes;
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
        get_icon_url(
            requested_mime_type: string | null,
            requested_depth: number,
            requested_width: number,
            requested_height: number,
            prefer_bigger: boolean,
        ): string | null;
        /**
         * Get the URL of the device file
         * @returns A s
         */
        get_location(): string;
        /**
         * Get the manufacturer of the device.
         * @returns A newly allocated string containing the manufacturer of the device, or %NULL if not available. g_free() after use.
         */
        get_manufacturer(): string | null;
        /**
         * Get an URL pointing to the manufacturer's website.
         * @returns A string, or %NULL. g_free() after use.
         */
        get_manufacturer_url(): string | null;
        /**
         * Get the description of the device model.
         * @returns A string, or %NULL. g_free() after use.
         */
        get_model_description(): string | null;
        /**
         * Get the model name of the device.
         * @returns A string, or %NULL. g_free() after use.
         */
        get_model_name(): string | null;
        /**
         * Get the model number of the device.
         * @returns A string, or %NULL. g_free() after use.
         */
        get_model_number(): string | null;
        /**
         * Get an URL pointing to the device model's website.
         * @returns A string, or %NULL. g_free() after use.
         */
        get_model_url(): string | null;
        /**
         * Get an URL pointing to the device's presentation page, for web-based
         * administration, if available.
         * @returns A string, or %NULL. g_free() after use.
         */
        get_presentation_url(): string | null;
        /**
         * Get the #GUPnPResourceFactory used by the `device_info`.
         * @returns A #GUPnPResourceFactory.
         */
        get_resource_factory(): ResourceFactory;
        /**
         * Get the serial number of the device.
         * @returns A string, or %NULL. g_free() after use.
         */
        get_serial_number(): string | null;
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
        get_service(type: string): ServiceInfo | null;
        /**
         * Get the Unique Device Name of the device.
         * @returns A constant string.
         */
        get_udn(): string;
        /**
         * Get the Universal Product Code of the device.
         * @returns A string, or %NULL. g_free() after use.
         */
        get_upc(): string | null;
        /**
         * Get the URL base of this device.
         * @returns A #SoupURI.
         */
        get_url_base(): GLib.Uri;
        /**
         * Get a #GList of strings representing the types of the devices
         * directly contained in `info`.
         * @returns A #GList of strings. The elements should be g_free()'d and the list should be g_list_free()'d.
         */
        list_device_types(): string[] | null;
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
        list_devices(): DeviceInfo[] | null;
        /**
         * Get a #GList of strings that represent the device capabilities as announced
         * in the device description file using the &lt;dlna:X_DLNACAP&gt; element.
         * @returns a #GList of newly allocated strings or %NULL if the device description doesn't contain the &lt;dlna:X_DLNACAP&gt; element.
         */
        list_dlna_capabilities(): string[] | null;
        /**
         * Get a list of strings that represent the device class and version as
         * announced in the device description file using the `<dlna:X_DLNADOC>`
         * element, e.g. `DMS-1.51`, `M-DMS-1.51` and so on.
         * @returns a #GList of newly allocated strings or %NULL if the device description doesn't contain any `<dlna:X_DLNADOC>` element.
         */
        list_dlna_device_class_identifier(): string[] | null;
        /**
         * Get a #GList of strings representing the types of the services
         * directly contained in `info,` but not in its subdevices.
         * @returns A #GList of strings. The elements should be g_free()'d and the list should be g_list_free()'d.
         */
        list_service_types(): string[] | null;
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
        list_services(): ServiceInfo[] | null;
    }

    module DeviceProxy {
        // Constructor properties interface
    }

    /**
     * Interaction with remote UPnP devices.
     *
     * #GUPnPDeviceProxy allows for retrieving proxies for a device's sub-devices
     * and services. It implements the [class`GUPnP`.DeviceInfo] abstract class.
     */
    class DeviceProxy extends DeviceInfo {}

    module ResourceFactory {
        // Constructor properties interface
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
     */
    class ResourceFactory extends GObject.Object {
        // Constructors of GUPnP-1.6.ResourceFactory

        static ['new'](): ResourceFactory;

        // Owm methods of GUPnP-1.6.ResourceFactory

        /**
         * Get the default singleton #GUPnPResourceFactory object.
         */
        static get_default(): ResourceFactory;

        // Owm methods of GUPnP-1.6.ResourceFactory

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
        register_resource_proxy_type(upnp_type: string, type: GObject.GType): void;
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
        register_resource_type(upnp_type: string, type: GObject.GType): void;
        /**
         * Unregisters the GType assignment for the proxy of resource of UPnP type
         * `upnp_type`.
         * @param upnp_type The UPnP type name of the resource.
         * @returns %TRUE if GType assignment was removed successfully, %FALSE otherwise.
         */
        unregister_resource_proxy_type(upnp_type: string): boolean;
        /**
         * Unregisters the GType assignment for the resource of UPnP type `upnp_type`.
         * @param upnp_type The UPnP type name of the resource.
         * @returns %TRUE if GType assignment was removed successfully, %FALSE otherwise.
         */
        unregister_resource_type(upnp_type: string): boolean;
    }

    module RootDevice {
        // Constructor properties interface
    }

    /**
     * Implementation of an UPnP root device.
     *
     * #GUPnPRootDevice allows for implementing root devices.
     */
    class RootDevice extends Device {
        // Own properties of GUPnP-1.6.RootDevice

        /**
         * TRUE if this device is available.
         */
        available: boolean;
        /**
         * The path to a folder where description documents are provided.
         */
        description_dir: string;
        /**
         * The path to a folder where description documents are provided.
         */
        descriptionDir: string;
        /**
         * The path to device description document. This could either be an
         * absolute path or path relative to GUPnPRootDevice:description-dir.
         */
        description_path: string;
        /**
         * The path to device description document. This could either be an
         * absolute path or path relative to GUPnPRootDevice:description-dir.
         */
        descriptionPath: string;

        // Constructors of GUPnP-1.6.RootDevice

        static ['new'](context: Context, description_path: string, description_folder: string): RootDevice;

        static new_full(
            context: Context,
            factory: ResourceFactory,
            description_doc: XMLDoc,
            description_path: string,
            description_folder: string,
        ): RootDevice;

        // Owm methods of GUPnP-1.6.RootDevice

        /**
         * Checks whether `root_device` is available on the network (announcing its presence).
         * @returns %TRUE if @root_device is available, %FALSE otherwise.
         */
        get_available(): boolean;
        /**
         * Gets the path to the directory containing description documents related to
         * `root_device`.
         * @returns The path to description document directory of @root_device.
         */
        get_description_dir(): string;
        /**
         * Gets the name of the description document as hosted via HTTP.
         * @returns The relative location of @root_device.
         */
        get_description_document_name(): string;
        /**
         * Gets the path to the device description document of `root_device`.
         * @returns The path to device description document of @root_device.
         */
        get_description_path(): string;
        /**
         * Gets the #GSSDPResourceGroup used by `root_device`.
         * @returns The #GSSDPResourceGroup of @root_device.
         */
        get_ssdp_resource_group(): GSSDP.ResourceGroup;
        /**
         * Sets the availability of `root_device` on the network (announcing
         * its presence).
         * @param available %TRUE if @root_device should be available
         */
        set_available(available: boolean): void;
    }

    module Service {
        // Signal callback interfaces

        interface ActionInvoked {
            (action: ServiceAction): void;
        }

        interface NotifyFailed {
            (callback_url: GLib.Uri[], reason: GLib.Error): void;
        }

        interface QueryVariable {
            (variable: string, value: GObject.Value): void;
        }

        // Constructor properties interface
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
     */
    class Service extends ServiceInfo {
        // Own properties of GUPnP-1.6.Service

        /**
         * The containing #GUPnPRootDevice.
         */
        root_device: RootDevice;
        /**
         * The containing #GUPnPRootDevice.
         */
        rootDevice: RootDevice;

        // Owm methods of GUPnP-1.6.Service

        /**
         * Default handler for [signal`GUPnP`.Service::action_invoked]. See its documentation for details.
         *
         * Can be overridden by child classes instead of connecting to the signal.
         * @param action a `GUPnPServiceAction`
         */
        action_invoked(action: ServiceAction): void;
        /**
         * Stops sending out notifications to remote clients.
         *
         * It causes new notifications to be queued up until [method`GUPnP`.Service.thaw_notify] is called.
         */
        freeze_notify(): void;
        /**
         * Default handler for [signal`GUPnP`.Service::notify_failed]. See its documentation for details.
         *
         * Can be overridden by child classes instead of connecting to the signal.
         * @param callback_urls a list of call-back urls that failed the notification
         * @param reason An error that describes why the notification failed
         */
        notify_failed(callback_urls: GLib.Uri[], reason: GLib.Error): void;
        /**
         * Notifies remote clients that `variable` has changed to `value`.
         * @param variable the name of the variable to notify
         * @param value the value of the variable
         */
        notify_value(variable: string, value: GObject.Value): void;
        /**
         * Default handler for [signal`GUPnP`.Service::query_variable]. See its documentation for details.
         *
         * Can be overridden by child classes instead of connecting to the signal.
         * @param variable the name of the variable that was queried
         * @param value a value that should be filled to the current value of @variable
         */
        query_variable(variable: string, value: GObject.Value): void;
        /**
         * Sends out any pending notifications, and stops queuing of new ones.
         */
        thaw_notify(): void;
    }

    module ServiceInfo {
        // Constructor properties interface
    }

    /**
     * Service information shared by local and remote services.
     *
     * A class that contains the common parts between local and remote services.
     */
    abstract class ServiceInfo extends GObject.Object {
        // Own properties of GUPnP-1.6.ServiceInfo

        /**
         * The #GUPnPContext to use.
         */
        context: Context;
        /**
         * Private property.
         */
        document: XMLDoc;
        /**
         * Private property.
         */
        element: any;
        /**
         * The location of the device description file.
         */
        location: string;
        /**
         * The service type.
         */
        service_type: string;
        /**
         * The service type.
         */
        serviceType: string;
        /**
         * The UDN of the containing device.
         */
        udn: string;
        /**
         * The URL base (#SoupURI).
         */
        url_base: GLib.Uri;
        /**
         * The URL base (#SoupURI).
         */
        urlBase: GLib.Uri;

        // Owm methods of GUPnP-1.6.ServiceInfo

        /**
         * Get the #GUPnPContext associated with `info`.
         * @returns A #GUPnPContext.
         */
        get_context(): Context;
        /**
         * Get the control URL for this service, or %NULL..
         * @returns A string. This string should be freed with g_free() after use.
         */
        get_control_url(): string;
        /**
         * Get the event subscription URL for this service, or %NULL.
         * @returns A string. This string should be freed with g_free() after use.
         */
        get_event_subscription_url(): string;
        /**
         * Get the serviceID of this service, or %NULL if there is no ID.
         *
         * The serviceID should be unique to a device. This makes it possible to provide
         * the same serviceType multiple times on one device
         *
         * Example: `org:serviceId:RenderingControl`
         * @returns A string. This string should be freed with g_free() after use.
         */
        get_id(): string;
        /**
         * Get the location of the device description file.
         * @returns A constant string.
         */
        get_location(): string;
        /**
         * Get the SCPD URL for this service, or %NULL if there is no SCPD.
         * @returns A string. This string should be freed with g_free() after use.
         */
        get_scpd_url(): string;
        /**
         * Get the UPnP service type, or %NULL.
         *
         * Example: `urn:schemas-upnp-org:service:RenderingControl:1`
         * @returns A constant string.
         */
        get_service_type(): string;
        /**
         * Get the Unique Device Name of the containing device.
         * @returns A constant string.
         */
        get_udn(): string;
        /**
         * Get the URL base of this service.
         * @returns A constant #SoupURI.
         */
        get_url_base(): GLib.Uri;
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
        introspect_async(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): void;
        /**
         * Finish an asynchronous call initiated with
         * gupnp_service_info_introspect_async().
         * @param res A #GAsyncResult
         * @returns %NULL, if the call had an error, a #GUPnPServiceIntrospection object otherwise.
         */
        introspect_finish(res: Gio.AsyncResult): ServiceIntrospection | null;
    }

    module ServiceIntrospection {
        // Constructor properties interface
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
     */
    class ServiceIntrospection extends GObject.Object {
        // Own properties of GUPnP-1.6.ServiceIntrospection

        /**
         * The scpd of the device description file.
         */
        scpd: any;

        // Owm methods of GUPnP-1.6.ServiceIntrospection

        /**
         * Returns the action by the name `action_name` in this service.
         * @param action_name The name of the action to retrieve
         * @returns the action or %NULL. Do not modify or free it.
         */
        get_action(action_name: string): ServiceActionInfo | null;
        /**
         * Returns the state variable by the name `variable_name` in this service.
         * @param variable_name The name of the variable to retrieve
         * @returns the state variable or %NULL. Do not modify or free it.
         */
        get_state_variable(variable_name: string): ServiceStateVariableInfo | null;
        /**
         * Returns a GList of names of all the actions in this service.
         * @returns A GList of names of all the actions or %NULL. Do not modify or free it or its contents.
         */
        list_action_names(): string[];
        /**
         * Returns a #GList of all the actions (of type #GUPnPServiceActionInfo) in
         * this service.
         * @returns A #GList of all the actions or %NULL. Do not modify or free it or its contents.
         */
        list_actions(): ServiceActionInfo[];
        /**
         * Returns a #GList of names of all the state variables in this service.
         * @returns A #GList of names of all the state variables or %NULL. Do not modify or free it or its contents.
         */
        list_state_variable_names(): string[];
        /**
         * Returns a GList of all the state variables (of type
         * #GUPnPServiceStateVariableInfo) in this service.
         * @returns A #GList of all the state variables or %NULL. Do not modify or free it or its contents.
         */
        list_state_variables(): ServiceStateVariableInfo[];
    }

    module ServiceProxy {
        // Signal callback interfaces

        interface SubscriptionLost {
            (error: GLib.Error): void;
        }

        // Constructor properties interface
    }

    /**
     * Proxy class for remote services.
     *
     * #GUPnPServiceProxy sends commands to a remote UPnP service and handles
     * incoming event notifications.
     */
    class ServiceProxy extends ServiceInfo {
        // Own properties of GUPnP-1.6.ServiceProxy

        /**
         * Whether we are subscribed to this service.
         */
        subscribed: boolean;

        // Owm methods of GUPnP-1.6.ServiceProxy

        /**
         * Sets up `callback` to be called whenever a change notification for
         * `variable` is recieved.
         * @param variable The variable to add notification for
         * @param type The type of the variable
         * @param callback The callback to call when @variable changes
         * @param notify Function to call when the notification is removed, or %NULL
         * @returns %TRUE on success.
         */
        add_notify(
            variable: string,
            type: GObject.GType,
            callback: ServiceProxyNotifyCallback,
            notify?: GLib.DestroyNotify | null,
        ): boolean;
        /**
         * Get a notification for anything that happens on the peer.
         *
         * `value` in `callback` will be of type G_TYPE_POINTER and contain the pre-parsed
         * [type`libxml2`.Doc]. Do NOT free or modify this document.
         * @param callback The callback to call when the peer issues any variable notification.
         * @param notify A #GDestroyNotify for @user_data
         * @returns %TRUE on success.
         */
        add_raw_notify(callback: ServiceProxyNotifyCallback, notify?: GLib.DestroyNotify | null): boolean;
        /**
         * Synchronously call the `action` on the remote UPnP service.
         * @param action An action
         * @param cancellable A #GCancellable which can be used to cancel the current action call
         * @returns %NULL on error, @action if successful.
         */
        call_action(action: ServiceProxyAction, cancellable?: Gio.Cancellable | null): ServiceProxyAction | null;
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
        call_action_async(
            action: ServiceProxyAction,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Finish an asynchronous call initiated with
         * gupnp_service_proxy_call_action_async().
         * @param result a #GAsyncResult
         * @returns %NULL, if the call had an error, the action otherwise.
         */
        call_action_finish(result: Gio.AsyncResult): ServiceProxyAction | null;
        /**
         * Returns if we are subscribed to this service.
         * @returns %TRUE if we are subscribed to this service, otherwise %FALSE.
         */
        get_subscribed(): boolean;
        /**
         * Cancels the variable change notification for `callback` and `user_data`.
         *
         * Up to version 0.20.9 this function must not be called directlya or
         * indirectly from a #GUPnPServiceProxyNotifyCallback associated with this
         * service proxy, even if it is for another variable. In later versions such
         * calls are allowed.
         * @param variable The variable to add notification for
         * @param callback The callback to call when @variable changes
         * @returns %TRUE on success.
         */
        remove_notify(variable: string, callback: ServiceProxyNotifyCallback): boolean;
        /**
         * Cancels the variable change notification for `callback` and `user_data`.
         *
         * This function must not be called directly or indirectly from a
         * #GUPnPServiceProxyNotifyCallback associated with this service proxy, even
         * if it is for another variable.
         * @param callback The callback to call when @variable changes
         * @returns %TRUE on success.
         */
        remove_raw_notify(callback: ServiceProxyNotifyCallback): boolean;
        /**
         * Sets user and password for authentication
         * @param user user name for authentication
         * @param password user password for authentication
         */
        set_credentials(user: string, password: string): void;
        /**
         * (Un)subscribes to this service.
         *
         * <note>The relevant messages are not immediately sent but queued.
         * If you want to unsubcribe from this service because the application
         * is quitting, rely on automatic synchronised unsubscription on object
         * destruction instead.</note>
         * @param subscribed %TRUE to subscribe to this service
         */
        set_subscribed(subscribed: boolean): void;
    }

    module XMLDoc {
        // Constructor properties interface
    }

    /**
     * Reference-counting wrapper for libxml's #xmlDoc
     */
    class XMLDoc extends GObject.Object {
        // Own properties of GUPnP-1.6.XMLDoc

        doc: any;
        path: string;

        // Constructors of GUPnP-1.6.XMLDoc

        static ['new'](xml_doc: libxml2.Doc): XMLDoc;

        static new_from_path(path: string): XMLDoc;

        // Owm methods of GUPnP-1.6.XMLDoc

        get_doc(): libxml2.Doc;
    }

    class AclInterface {}

    class ContextClass {}

    class ContextFilterClass {}

    class ContextManagerClass {}

    class ControlPointClass {}

    class DeviceClass {}

    class DeviceInfoClass {}

    class DeviceProxyClass {}

    class ResourceFactoryClass {}

    class RootDeviceClass {}

    /**
     * Opaque structure for holding in-progress action data.
     */
    class ServiceAction {
        // Owm methods of GUPnP-1.6.ServiceAction

        /**
         * Get the number of IN arguments from the `action` and return it.
         * @returns The number of IN arguments from the @action.
         */
        get_argument_count(): number;
        /**
         * Retrieves the value of `argument` into a GValue of type `type` and returns it.
         * The method exists only and only to satify PyGI, please use
         * gupnp_service_action_get_value() and ignore this if possible.
         * @param argument The name of the argument to retrieve
         * @param type The type of argument to retrieve
         * @returns Value as #GValue associated with @action. g_value_unset() and g_slice_free() it after usage.
         */
        get_value(argument: string, type: GObject.GType): GObject.Value;
        /**
         * Get an ordered (preferred first) #GList of locales preferred by
         * the client. Free list and elements after use.
         * @returns A #GList of #char* locale names.
         */
        get_locales(): string[];
        /**
         * Get the #SoupMessage associated with `action`. Mainly intended for
         * applications to be able to read HTTP headers received from clients.
         * @returns #SoupServerMessage associated with @action. Unref after using it.
         */
        get_message(): Soup.ServerMessage;
        /**
         * Get the name of `action`.
         * @returns The name of @action
         */
        get_name(): string;
        /**
         * A variant of #gupnp_service_action_get that uses #GList instead of varargs.
         * @param arg_names A #GList of argument names as string
         * @param arg_types A #GList of argument types as #GType
         * @returns The values as #GList of #GValue. g_list_free() the returned list and g_value_unset() and g_slice_free() each element.
         */
        get_values(arg_names: string[], arg_types: GObject.GType[]): GObject.Value[];
        /**
         * Return `error_code`.
         * @param error_code The error code
         * @param error_description The error description, or %NULL if @error_code is one of #GUPNP_CONTROL_ERROR_INVALID_ACTION, #GUPNP_CONTROL_ERROR_INVALID_ARGS, #GUPNP_CONTROL_ERROR_OUT_OF_SYNC or #GUPNP_CONTROL_ERROR_ACTION_FAILED, in which case a description is provided automatically.
         */
        return_error(error_code: number, error_description: string): void;
        /**
         * Return successfully.
         */
        return_success(): void;
        /**
         * Sets the value of `argument` to `value`.
         * @param argument The name of the return value to retrieve
         * @param value The #GValue to store the return value
         */
        set_value(argument: string, value: GObject.Value): void;
        /**
         * Sets the specified action return values.
         * @param arg_names A #GList of argument names
         * @param arg_values The #GList of values (as #GValue<!-- -->s) that line up with @arg_names.
         */
        set_values(arg_names: string[], arg_values: GObject.Value[]): void;
    }

    /**
     * This structure contains information about the argument of service action.
     */
    class ServiceActionArgInfo {
        // Own fields of GUPnP-1.6.ServiceActionArgInfo

        name: string;
        direction: ServiceActionArgDirection;
        related_state_variable: string;
        retval: boolean;
    }

    /**
     * This structure contains information about a service action.
     */
    class ServiceActionInfo {
        // Own fields of GUPnP-1.6.ServiceActionInfo

        name: string;
    }

    class ServiceClass {}

    class ServiceInfoClass {}

    class ServiceIntrospectionClass {}

    /**
     * Opaque structure for holding in-progress action data.
     */
    class ServiceProxyAction {
        // Constructors of GUPnP-1.6.ServiceProxyAction

        constructor(action: string, ___: any[]);

        static new_from_list(action: string, in_names: string[], in_values: GObject.Value[]): ServiceProxyAction;

        // Owm methods of GUPnP-1.6.ServiceProxyAction

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
        get_result_hash(out_hash: GLib.HashTable<string, GObject.Value>): boolean;
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
         * @param out_types #GList of types (as #GType) that line up with @out_names
         * @returns %TRUE on success.
         */
        get_result_list(out_names: string[], out_types: GObject.GType[]): boolean;
        /**
         * Increases reference count of `action`
         * @returns @action with an increased reference count
         */
        ref(): ServiceProxyAction | null;
        /**
         * Update the value of `key` to `value`.
         *
         * `key` needs to already exist in `action`.
         * @param key the name of the value to modify
         * @param value the new value of @key
         * @returns true if successfully modified, false otherwise
         */
        set(key: string, value: GObject.Value): boolean;
        /**
         * Decreases reference count of `action`. If reference count drops to 0,
         * the action and its contents will be freed.
         */
        unref(): void;
    }

    class ServiceProxyClass {}

    /**
     * This structure contains information about service state variable.
     */
    class ServiceStateVariableInfo {
        // Own fields of GUPnP-1.6.ServiceStateVariableInfo

        name: string;
        send_events: boolean;
        is_numeric: boolean;
        type: GObject.GType;
        allowed_values: string[];
    }

    class XMLDocClass {}

    interface Acl {
        // Owm methods of GUPnP-1.6.Acl

        /**
         * Check whether [method`GUPnP`.Acl.is_allowed_async] is supported.
         */
        can_sync(): boolean;
        /**
         * Check whether an IP address is allowed to access this resource.
         * @param device The [class@GUPnP.Device] associated with @path or %NULL if unknown.
         * @param service The [class@GUPnP.Service] associated with @path or %NULL if unknown.
         * @param path The path being served.
         * @param address IP address of the peer.
         * @param agent The User-Agent header of the peer or %NULL if unknown. @returns %TRUE if the peer is allowed, %FALSE otherwise
         */
        is_allowed(
            device: any | null,
            service: any | null,
            path: string,
            address: string,
            agent?: string | null,
        ): boolean;
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
         * @param device The [class@GUPnP.Device] associated with @path or %NULL if unknown.
         * @param service The [class@GUPnP.Service] associated with @path or %NULL if unknown.
         * @param path The path being served.
         * @param address IP address of the peer
         * @param agent The User-Agent header of the peer or %NULL if not unknown.
         * @param cancellable A cancellable which can be used to cancel the operation.
         * @param callback Callback to call after the function is done.
         */
        is_allowed_async(
            device: any | null,
            service: any | null,
            path: string,
            address: string,
            agent?: string | null,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Get the result of [method`GUPnP`.Acl.is_allowed_async].
         * @param res [iface@Gio.AsyncResult] obtained from the callback passed to [method@GUPnP.Acl.is_allowed_async]
         */
        is_allowed_finish(res: Gio.AsyncResult): boolean;

        // Own virtual methods of GUPnP-1.6.Acl

        /**
         * Check whether [method`GUPnP`.Acl.is_allowed_async] is supported.
         */
        vfunc_can_sync(): boolean;
        /**
         * Check whether an IP address is allowed to access this resource.
         * @param device The [class@GUPnP.Device] associated with @path or %NULL if unknown.
         * @param service The [class@GUPnP.Service] associated with @path or %NULL if unknown.
         * @param path The path being served.
         * @param address IP address of the peer.
         * @param agent The User-Agent header of the peer or %NULL if unknown. @returns %TRUE if the peer is allowed, %FALSE otherwise
         */
        vfunc_is_allowed(
            device: any | null,
            service: any | null,
            path: string,
            address: string,
            agent?: string | null,
        ): boolean;
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
         * @param device The [class@GUPnP.Device] associated with @path or %NULL if unknown.
         * @param service The [class@GUPnP.Service] associated with @path or %NULL if unknown.
         * @param path The path being served.
         * @param address IP address of the peer
         * @param agent The User-Agent header of the peer or %NULL if not unknown.
         * @param cancellable A cancellable which can be used to cancel the operation.
         * @param callback Callback to call after the function is done.
         */
        vfunc_is_allowed_async(
            device: any | null,
            service: any | null,
            path: string,
            address: string,
            agent?: string | null,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Get the result of [method`GUPnP`.Acl.is_allowed_async].
         * @param res [iface@Gio.AsyncResult] obtained from the callback passed to [method@GUPnP.Acl.is_allowed_async]
         */
        vfunc_is_allowed_finish(res: Gio.AsyncResult): boolean;
    }

    /**
     * Name of the imported GIR library
     * `see` https://gitlab.gnome.org/GNOME/gjs/-/blob/master/gi/ns.cpp#L188
     */
    const __name__: string;
    /**
     * Version of the imported GIR library
     * `see` https://gitlab.gnome.org/GNOME/gjs/-/blob/master/gi/ns.cpp#L189
     */
    const __version__: string;
}

export default GUPnP;
// END
