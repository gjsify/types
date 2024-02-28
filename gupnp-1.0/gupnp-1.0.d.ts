/*
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in `ts-for-gir` or create a bug report on https://github.com/gjsify/ts-for-gir
 */

import './gupnp-1.0-ambient.d.ts';
import './gupnp-1.0-import.d.ts';
/**
 * GUPnP-1.0
 */

import type libxml2 from '@girs/libxml2-2.0';
import type Soup from '@girs/soup-2.4';
import type Gio from '@girs/gio-2.0';
import type GObject from '@girs/gobject-2.0';
import type GLib from '@girs/glib-2.0';
import type GSSDP from '@girs/gssdp-1.0';

export namespace GUPnP {
    /**
     * #GError codes used for errors in the #GUPNP_CONTROL_ERROR domain, during
     * invocation of service actions.
     */
    class ControlError extends GLib.Error {
        // Own fields of GUPnP-1.0.ControlError

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

        // Constructors of GUPnP-1.0.ControlError

        constructor(options: { message: string; code: number });
    }

    /**
     * #GError codes used for errors in the #GUPNP_EVENTING_ERROR domain, during
     * eventing of state variables.
     */
    class EventingError extends GLib.Error {
        // Own fields of GUPnP-1.0.EventingError

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

        // Constructors of GUPnP-1.0.EventingError

        constructor(options: { message: string; code: number });
    }

    /**
     * #GError codes used for errors in the #GUPNP_SERVER_ERROR domain, when there
     * is communication with another server.
     */
    class ServerError extends GLib.Error {
        // Own fields of GUPnP-1.0.ServerError

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

        // Constructors of GUPnP-1.0.ServerError

        constructor(options: { message: string; code: number });
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
    class XMLError extends GLib.Error {
        // Own fields of GUPnP-1.0.XMLError

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

        // Constructors of GUPnP-1.0.XMLError

        constructor(options: { message: string; code: number });
    }

    function control_error_quark(): GLib.Quark;
    function eventing_error_quark(): GLib.Quark;
    /**
     * Generate and return a new UUID.
     * @returns A newly generated UUID in string representation.
     */
    function get_uuid(): string;
    function server_error_quark(): GLib.Quark;
    function xml_error_quark(): GLib.Quark;
    interface ServiceIntrospectionCallback {
        (info: ServiceInfo, introspection: ServiceIntrospection, error: GLib.Error): void;
    }
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
     * This struct contains private data only, and should be accessed using the
     * functions below.
     */
    class Context extends GSSDP.Client {
        // Own properties of GUPnP-1.0.Context

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
         * The port to run on. Set to 0 if you don't care what port to run on.
         */
        port: number;
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

        // Constructors of GUPnP-1.0.Context

        static ['new'](main_context: GLib.MainContext | null, iface: string | null, port: number): Context;

        // Owm methods of GUPnP-1.0.Context

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
        get_acl(): Acl;
        /**
         * Get the default Content-Language header for this context.
         * @returns The default content of the Content-Language header.
         */
        get_default_language(): string;
        /**
         * Get the IP address we advertise ourselves as using.
         * @returns The IP address. This string should not be freed.
         */
        get_host_ip(): string;
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
        set_acl(acl?: Acl | null): void;
        /**
         * Set the default language for the Content-Length header to `language`.
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
     * This struct contains private data only, and should be accessed using the
     * functions below.
     */
    abstract class ContextManager extends GObject.Object {
        // Own properties of GUPnP-1.0.ContextManager

        main_context: any;
        mainContext: any;
        /**
         * Port the contexts listen on, or 0 if you don't care what
         * port is used by #GUPnPContext objects created by this object.
         */
        port: number;
        /**
         * The white list to use.
         */
        readonly white_list: WhiteList;
        /**
         * The white list to use.
         */
        readonly whiteList: WhiteList;

        // Constructors of GUPnP-1.0.ContextManager

        static ['new'](main_context: GLib.MainContext | null, port: number): ContextManager;

        // Owm methods of GUPnP-1.0.ContextManager

        /**
         * Factory-method to create a new #GUPnPContextManager. The final type of the
         * #GUPnPContextManager depends on the compile-time selection or - in case of
         * NetworkManager - on its availability during runtime. If it is not available,
         * the implementation falls back to the basic Unix context manager instead.
         * @param port Port to create contexts for, or 0 if you don't care what port is used.
         */
        static create(port: number): ContextManager;

        // Owm methods of GUPnP-1.0.ContextManager

        /**
         * Get the network port associated with this context manager.
         * @returns The network port asssociated with this context manager.
         */
        get_port(): number;
        /**
         * Get the #GUPnPWhiteList associated with `manager`.
         * @returns The #GUPnPWhiteList asssociated with this context manager.
         */
        get_white_list(): WhiteList;
        /**
         * By calling this function, you are asking `manager` to keep a reference to
         * `control_point` until its associated #GUPnPContext is no longer available.
         * You usually want to call this function from
         * #GUPnPContextManager::context-available handler after you create a
         * #GUPnPControlPoint object for the newly available context.
         * @param control_point The #GUPnPControlPoint to be taken care of
         */
        manage_control_point(control_point: ControlPoint): void;
        /**
         * By calling this function, you are asking `manager` to keep a reference to
         * `root_device` when its associated #GUPnPContext is no longer available. You
         * usually want to call this function from
         * #GUPnPContextManager::context-available handler after you create a
         * #GUPnPRootDevice object for the newly available context.
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
     * This struct contains private data only, and should be accessed using the
     * functions below.
     */
    class ControlPoint extends GSSDP.ResourceBrowser {
        // Own properties of GUPnP-1.0.ControlPoint

        /**
         * The resource factory to use. Set to NULL for default factory.
         */
        resource_factory: ResourceFactory;
        /**
         * The resource factory to use. Set to NULL for default factory.
         */
        resourceFactory: ResourceFactory;

        // Constructors of GUPnP-1.0.ControlPoint

        static ['new'](context: Context, target: string): ControlPoint;

        static new_full(context: Context, factory: ResourceFactory, target: string): ControlPoint;

        // Owm methods of GUPnP-1.0.ControlPoint

        /**
         * Get the #GUPnPControlPoint associated with `control_point`.
         * @returns The #GUPnPContext.
         */
        get_context(): Context;
        /**
         * Get the #GUPnPResourceFactory used by the `control_point`.
         * @returns A #GUPnPResourceFactory.
         */
        get_resource_factory(): ResourceFactory;
        /**
         * Get the #GList of discovered #GUPnPDeviceProxy objects. Do not free the list
         * nor its elements.
         * @returns a #GList of #GUPnPDeviceProxy objects.
         */
        list_device_proxies(): DeviceProxy[];
        /**
         * Get the #GList of discovered #GUPnPServiceProxy objects. Do not free the
         * list nor its elements.
         * @returns a #GList of #GUPnPServiceProxy objects.
         */
        list_service_proxies(): ServiceProxy[];
    }

    module Device {
        // Constructor properties interface
    }

    /**
     * This struct contains private data only, and should be accessed using the
     * functions below.
     */
    class Device extends DeviceInfo {
        // Own properties of GUPnP-1.0.Device

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
     * This struct contains private data only, and should be accessed using the
     * functions below.
     */
    abstract class DeviceInfo extends GObject.Object {
        // Own properties of GUPnP-1.0.DeviceInfo

        /**
         * The #GUPnPContext to use.
         */
        context: Context;
        /**
         * The device type.
         */
        device_type: string;
        /**
         * The device type.
         */
        deviceType: string;
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
         * The URL base (#SoupURI).
         */
        url_base: Soup.URI;
        /**
         * The URL base (#SoupURI).
         */
        urlBase: Soup.URI;

        // Owm methods of GUPnP-1.0.DeviceInfo

        /**
         * Get the associated #GUPnPContext.
         * @returns A #GUPnPContext.
         */
        get_context(): Context;
        /**
         * This function provides generic access to the contents of arbitrary elements
         * in the device description file.
         * @param element Name of the description element to retrieve
         * @returns a newly allocated string or %NULL if the device               description doesn't contain the given @element
         */
        get_description_value(element: string): string;
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
        get_device(type: string): DeviceInfo | null;
        /**
         * Get the UPnP device type.
         * @returns A constant string, or %NULL.
         */
        get_device_type(): string;
        /**
         * Get the friendly name of the device.
         * @returns A string, or %NULL. g_free() after use.
         */
        get_friendly_name(): string;
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
        get_icon_url(
            requested_mime_type: string | null,
            requested_depth: number,
            requested_width: number,
            requested_height: number,
            prefer_bigger: boolean,
        ): string;
        /**
         * Get the location of the device description file.
         * @returns A constant string.
         */
        get_location(): string;
        /**
         * Get the manufacturer of the device.
         * @returns A string, or %NULL. g_free() after use.
         */
        get_manufacturer(): string;
        /**
         * Get a URL pointing to the manufacturer's website.
         * @returns A string, or %NULL. g_free() after use.
         */
        get_manufacturer_url(): string;
        /**
         * Get the description of the device model.
         * @returns A string, or %NULL. g_free() after use.
         */
        get_model_description(): string;
        /**
         * Get the model name of the device.
         * @returns A string, or %NULL. g_free() after use.
         */
        get_model_name(): string;
        /**
         * Get the model number of the device.
         * @returns A string, or %NULL. g_free() after use.
         */
        get_model_number(): string;
        /**
         * Get a URL pointing to the device model's website.
         * @returns A string, or %NULL. g_free() after use.
         */
        get_model_url(): string;
        /**
         * Get a URL pointing to the device's presentation page, for web-based
         * administration.
         * @returns A string, or %NULL. g_free() after use.
         */
        get_presentation_url(): string;
        /**
         * Get the #GUPnPResourceFactory used by the `device_info`.
         * @returns A #GUPnPResourceFactory.
         */
        get_resource_factory(): ResourceFactory;
        /**
         * Get the serial number of the device.
         * @returns A string, or %NULL. g_free() after use.
         */
        get_serial_number(): string;
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
        get_service(type: string): ServiceInfo;
        /**
         * Get the Unique Device Name of the device.
         * @returns A constant string.
         */
        get_udn(): string;
        /**
         * Get the Universal Product Code of the device.
         * @returns A string, or %NULL. g_free() after use.
         */
        get_upc(): string;
        /**
         * Get the URL base of this device.
         * @returns A #SoupURI.
         */
        get_url_base(): Soup.URI;
        /**
         * Get a #GList of strings representing the types of the devices
         * directly contained in `info`.
         * @returns A #GList of strings. The elements should be g_free()'d and the list should be g_list_free()'d.
         */
        list_device_types(): string[];
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
        list_devices(): DeviceInfo[];
        /**
         * Get a #GList of strings that represent the device capabilities as announced
         * in the device description file using the &lt;dlna:X_DLNACAP&gt; element.
         * @returns a #GList of newly allocated strings or %NULL if the device description doesn't contain the &lt;dlna:X_DLNACAP&gt; element.
         */
        list_dlna_capabilities(): string[];
        /**
         * Get a #GList of strings that represent the device class and version as
         * announced in the device description file using the &lt;dlna:X_DLNADOC&gt;
         * element.
         * @returns a #GList of newly allocated strings or %NULL if the device description doesn't contain the &lt;dlna:X_DLNADOC&gt; element.
         */
        list_dlna_device_class_identifier(): string[];
        /**
         * Get a #GList of strings representing the types of the services
         * directly contained in `info`.
         * @returns A #GList of strings. The elements should be g_free()'d and the list should be g_list_free()'d.
         */
        list_service_types(): string[];
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
        list_services(): ServiceInfo[];
    }

    module DeviceProxy {
        // Constructor properties interface
    }

    /**
     * This struct contains private data only, and should be accessed using the
     * functions below.
     */
    class DeviceProxy extends DeviceInfo {}

    module ResourceFactory {
        // Constructor properties interface
    }

    /**
     * This struct contains private data only, and should be accessed using the
     * functions below.
     */
    class ResourceFactory extends GObject.Object {
        // Constructors of GUPnP-1.0.ResourceFactory

        static ['new'](): ResourceFactory;

        // Owm methods of GUPnP-1.0.ResourceFactory

        /**
         * Get the default singleton #GUPnPResourceFactory object.
         */
        static get_default(): ResourceFactory;

        // Owm methods of GUPnP-1.0.ResourceFactory

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
     * This struct contains private data only, and should be accessed using the
     * functions below.
     */
    class RootDevice extends Device {
        // Own properties of GUPnP-1.0.RootDevice

        /**
         * TRUE if this device is available.
         */
        available: boolean;
        /**
         * The path to directory where description documents are provided.
         */
        description_dir: string;
        /**
         * The path to directory where description documents are provided.
         */
        descriptionDir: string;
        /**
         * Device description document. Constructor property.
         */
        description_doc: XMLDoc;
        /**
         * Device description document. Constructor property.
         */
        descriptionDoc: XMLDoc;
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

        // Constructors of GUPnP-1.0.RootDevice

        static ['new'](context: Context, description_path: string, description_dir: string): RootDevice;

        static new_full(
            context: Context,
            factory: ResourceFactory,
            description_doc: XMLDoc,
            description_path: string,
            description_dir: string,
        ): RootDevice;

        // Owm methods of GUPnP-1.0.RootDevice

        /**
         * Get whether or not `root_device` is available (announcing its presence).
         * @returns %TRUE if @root_device is available, %FALSE otherwise.
         */
        get_available(): boolean;
        /**
         * Get the path to the directory containing description documents related to
         * `root_device`.
         * @returns The path to description document directory of @root_device.
         */
        get_description_dir(): string;
        /**
         * Get the path to the device description document of `root_device`.
         * @returns The path to device description document of @root_device.
         */
        get_description_path(): string;
        /**
         * Get the relative location of `root_device`.
         * @returns The relative location of @root_device.
         */
        get_relative_location(): string;
        /**
         * Get the #GSSDPResourceGroup used by `root_device`.
         * @returns The #GSSDPResourceGroup of @root_device.
         */
        get_ssdp_resource_group(): GSSDP.ResourceGroup;
        /**
         * Controls whether or not `root_device` is available (announcing
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
            (callback_url: Soup.URI[], reason: GLib.Error): void;
        }

        interface QueryVariable {
            (variable: string, value: GObject.Value): void;
        }

        // Constructor properties interface
    }

    /**
     * This struct contains private data only, and should be accessed using the
     * functions below.
     */
    class Service extends ServiceInfo {
        // Own properties of GUPnP-1.0.Service

        /**
         * The containing #GUPnPRootDevice.
         */
        root_device: RootDevice;
        /**
         * The containing #GUPnPRootDevice.
         */
        rootDevice: RootDevice;

        // Owm methods of GUPnP-1.0.Service

        /**
         * Causes new notifications to be queued up until gupnp_service_thaw_notify()
         * is called.
         */
        freeze_notify(): void;
        /**
         * Notifies listening clients that `variable` has changed to `value`.
         * @param variable The name of the variable to notify
         * @param value The value of the variable
         */
        notify_value(variable: string, value: GObject.Value): void;
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
        signals_autoconnect(user_data?: any | null): void;
        /**
         * Sends out any pending notifications, and stops queuing of new ones.
         */
        thaw_notify(): void;
    }

    module ServiceInfo {
        // Constructor properties interface
    }

    /**
     * This struct contains private data only, and should be accessed using the
     * functions below.
     */
    abstract class ServiceInfo extends GObject.Object {
        // Own properties of GUPnP-1.0.ServiceInfo

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
        url_base: Soup.URI;
        /**
         * The URL base (#SoupURI).
         */
        urlBase: Soup.URI;

        // Owm methods of GUPnP-1.0.ServiceInfo

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
         * Get the ID of this service, or %NULL if there is no ID.
         * @returns A string. This string should be freed with g_free() after use.
         */
        get_id(): string;
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
        get_introspection(): ServiceIntrospection;
        /**
         * Note that introspection object is created from the information in service
         * description document (SCPD) provided by the service so it can not be created
         * if the service does not provide an SCPD.
         * @param callback callback to be called when introspection object is ready.
         */
        get_introspection_async(callback: ServiceIntrospectionCallback): void;
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
        get_introspection_async_full(
            callback: ServiceIntrospectionCallback,
            cancellable?: Gio.Cancellable | null,
        ): void;
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
        get_url_base(): Soup.URI;
    }

    module ServiceIntrospection {
        // Constructor properties interface
    }

    /**
     * This struct contains private data only, and should be accessed using the
     * functions below.
     */
    class ServiceIntrospection extends GObject.Object {
        // Own properties of GUPnP-1.0.ServiceIntrospection

        /**
         * The scpd of the device description file.
         */
        scpd: any;

        // Owm methods of GUPnP-1.0.ServiceIntrospection

        /**
         * Returns the action by the name `action_name` in this service.
         * @param action_name The name of the action to retrieve
         * @returns the action or %NULL. Do not modify or free it.
         */
        get_action(action_name: string): ServiceActionInfo;
        /**
         * Returns the state variable by the name `variable_name` in this service.
         * @param variable_name The name of the variable to retrieve
         * @returns the state variable or %NULL. Do not modify or free it.
         */
        get_state_variable(variable_name: string): ServiceStateVariableInfo;
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
     * This struct contains private data only, and should be accessed using the
     * functions below.
     */
    class ServiceProxy extends ServiceInfo {
        // Own properties of GUPnP-1.0.ServiceProxy

        /**
         * Whether we are subscribed to this service.
         */
        subscribed: boolean;

        // Owm methods of GUPnP-1.0.ServiceProxy

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
         * Get a notification for anything that happens on the peer. `value` in
         * `callback` will be of type #G_TYPE_POINTER and contain the pre-parsed
         * #xmlDoc. Do NOT free or modify this document.
         * @param callback The callback to call when the peer issues any variable notification.
         * @param notify A #GDestroyNotify for @user_data
         * @returns %TRUE on success.
         */
        add_raw_notify(callback: ServiceProxyNotifyCallback, notify?: GLib.DestroyNotify | null): boolean;
        /**
         * A variant of #gupnp_service_proxy_begin_action that takes lists of
         * in-parameter names, types and values.
         * @param action An action
         * @param in_names #GList of 'in' parameter names (as strings)
         * @param in_values #GList of values (as #GValue) that line up with @in_names
         * @param callback The callback to call when sending the action has succeeded or failed
         * @returns A #GUPnPServiceProxyAction handle. This will be freed when calling gupnp_service_proxy_cancel_action() or gupnp_service_proxy_end_action_list().
         */
        begin_action_list(
            action: string,
            in_names: string[],
            in_values: GObject.Value[],
            callback: ServiceProxyActionCallback,
        ): ServiceProxyAction;
        /**
         * Cancels `action,` freeing the `action` handle.
         * @param action A #GUPnPServiceProxyAction handle
         */
        cancel_action(action: ServiceProxyAction): void;
        /**
         * See gupnp_service_proxy_end_action(); this version takes a #GHashTable for
         * runtime generated parameter lists.
         * @param action A #GUPnPServiceProxyAction handle
         * @param error The location where to store any error, or %NULL
         * @returns %TRUE on success.
         */
        end_action_hash(action: ServiceProxyAction, error: GLib.Error): boolean;
        /**
         * See gupnp_service_proxy_end_action(); this version takes a #GHashTable for
         * runtime generated parameter lists.
         * @param action A #GUPnPServiceProxyAction handle
         * @param hash A #GHashTable of out parameter name and initialised #GValue pairs
         * @returns %TRUE on success.
         */
        end_action_hash(action: ServiceProxyAction, hash: GLib.HashTable<string, GObject.Value>): boolean;
        /**
         * A variant of #gupnp_service_proxy_end_action that takes lists of
         * out-parameter names, types and place-holders for values. The returned list
         * in `out_values` must be freed using #g_list_free and each element in it using
         * #g_value_unset and #g_slice_free.
         * @param action A #GUPnPServiceProxyAction handle
         * @param out_names #GList of 'out' parameter names (as strings)
         * @param out_types #GList of types (as #GType) that line up with @out_names
         * @returns %TRUE on success.
         */
        end_action_list(action: ServiceProxyAction, out_names: string[], out_types: GObject.GType[]): boolean;
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
         * The synchronous variant of #gupnp_service_proxy_begin_action_list and
         * #gupnp_service_proxy_end_action_list.
         * @param action An action
         * @param in_names #GList of 'in' parameter names (as strings)
         * @param in_values #GList of values (as #GValue) that line up with @in_names
         * @param out_names #GList of 'out' parameter names (as strings)
         * @param out_types #GList of types (as #GType) that line up with @out_names
         * @returns %TRUE if sending the action was succesful.
         */
        send_action_list(
            action: string,
            in_names: string[],
            in_values: GObject.Value[],
            out_names: string[],
            out_types: GObject.GType[],
        ): boolean;
        /**
         * (Un)subscribes to this service.
         *
         * Note that the relevant messages are not immediately sent but queued.
         * If you want to unsubcribe from this service because the application
         * is quitting, rely on automatic synchronised unsubscription on object
         * destruction instead.
         * @param subscribed %TRUE to subscribe to this service
         */
        set_subscribed(subscribed: boolean): void;
    }

    module WhiteList {
        // Constructor properties interface
    }

    /**
     * This struct contains private data only, and should be accessed using the
     * functions below.
     */
    class WhiteList extends GObject.Object {
        // Own properties of GUPnP-1.0.WhiteList

        /**
         * Whether this white list is active or not.
         */
        enabled: boolean;
        /**
         * Whether this white list is active or not.
         */
        entries: string[];

        // Constructors of GUPnP-1.0.WhiteList

        static ['new'](): WhiteList;

        // Owm methods of GUPnP-1.0.WhiteList

        /**
         * Add `entry` in the list of valid criteria used by `white_list` to
         * filter networks.
         * if `entry` already exists, it won't be added a second time.
         * @param entry A value used to filter network
         * @returns %TRUE if @entry is added, %FALSE otherwise.
         */
        add_entry(entry: string): boolean;
        /**
         * Add a list of entries to a #GUPnPWhiteList. This is a helper function to
         * directly add a %NULL-terminated array of string usually aquired from
         * commandline args.
         * @param entries A %NULL-terminated list of strings
         */
        add_entryv(entries: string[]): void;
        /**
         * It will check if the `context` is allowed or not. The `white_list` will check
         * all its entries againt #GUPnPContext interface, host ip and network fields
         * information. This function doesn't take into account the `white_list` status
         * (enabled or not).
         * @param context A #GUPnPContext to test.
         * @returns %TRUE if @context is matching the @white_list criterias, %FALSE otherwise.
         */
        check_context(context: Context): boolean;
        /**
         * Remove all entries from #GList that compose the white list.
         * The list is now empty. Even if #GUPnPWhiteList is enabled, it will have the
         * same behavior as if it was disabled.
         */
        clear(): void;
        /**
         * Return the status of the #GUPnPWhiteList
         * @returns %TRUE if @white_list is enabled, %FALSE otherwise.
         */
        get_enabled(): boolean;
        /**
         * Get the #GList of entries that compose the white list. Do not free
         * @returns a #GList of entries used to filter networks, interfaces,... or %NULL. Do not modify or free the list nor its elements.
         */
        get_entries(): string[];
        /**
         * Return the state of the entries list of #GUPnPWhiteList
         * @returns %TRUE if @white_list is empty, %FALSE otherwise.
         */
        is_empty(): boolean;
        /**
         * Remove `entry` in the list of valid criteria used by `white_list` to
         * filter networks.
         * @param entry A value to remove from the filter list.
         * @returns %TRUE if @entry is removed, %FALSE otherwise.
         */
        remove_entry(entry: string): boolean;
        /**
         * Enable or disable the #GUPnPWhiteList to perform the network filtering.
         * @param enable %TRUE to enable @white_list, %FALSE otherwise
         */
        set_enabled(enable: boolean): void;
    }

    module XMLDoc {
        // Constructor properties interface
    }

    /**
     * Reference-counting wrapper for libxml's #xmlDoc
     */
    class XMLDoc extends GObject.Object {
        // Constructors of GUPnP-1.0.XMLDoc

        static ['new'](xml_doc: libxml2.Doc): XMLDoc;

        static new_from_path(path: string): XMLDoc;
    }

    /**
     * Implement a simple access control list for GUPnP.
     */
    class AclInterface {}

    class ContextClass {}

    class ContextManagerClass {}

    class ContextManagerPrivate {}

    class ContextPrivate {}

    class ControlPointClass {}

    class ControlPointPrivate {}

    class DeviceClass {}

    class DeviceInfoClass {}

    class DeviceInfoPrivate {}

    class DevicePrivate {}

    class DeviceProxyClass {}

    class DeviceProxyPrivate {}

    class ResourceFactoryClass {}

    class ResourceFactoryPrivate {}

    class RootDeviceClass {}

    class RootDevicePrivate {}

    /**
     * Opaque structure for holding in-progress action data.
     */
    class ServiceAction {
        // Owm methods of GUPnP-1.0.ServiceAction

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
         * @returns #SoupMessage associated with @action. Unref after using it.
         */
        get_message(): Soup.Message;
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
         * Return succesfully.
         */
        ['return'](): void;
        /**
         * Return `error_code`.
         * @param error_code The error code
         * @param error_description The error description, or %NULL if @error_code is one of #GUPNP_CONTROL_ERROR_INVALID_ACTION, #GUPNP_CONTROL_ERROR_INVALID_ARGS, #GUPNP_CONTROL_ERROR_OUT_OF_SYNC or #GUPNP_CONTROL_ERROR_ACTION_FAILED, in which case a description is provided automatically.
         */
        return_error(error_code: number, error_description: string): void;
        /**
         * Sets the value of `argument` to `value`.
         * @param argument The name of the return value to retrieve
         * @param value The #GValue to store the return value
         */
        set_value(argument: string, value: GObject.Value): void;
        /**
         * Sets the specified action return values.
         * @param arg_names A #GList of argument names
         * @param arg_values The #GList of values (as #GValues) that line up with @arg_names.
         */
        set_values(arg_names: string[], arg_values: GObject.Value[]): void;
    }

    /**
     * This structure contains information about the argument of service action.
     */
    class ServiceActionArgInfo {
        // Own fields of GUPnP-1.0.ServiceActionArgInfo

        name: string;
        direction: ServiceActionArgDirection;
        related_state_variable: string;
        retval: boolean;
    }

    /**
     * This structure contains information about a service action.
     */
    class ServiceActionInfo {
        // Own fields of GUPnP-1.0.ServiceActionInfo

        name: string;
    }

    class ServiceClass {}

    class ServiceInfoClass {}

    class ServiceInfoPrivate {}

    class ServiceIntrospectionClass {}

    class ServiceIntrospectionPrivate {}

    class ServicePrivate {}

    /**
     * Opaque structure for holding in-progress action data.
     */
    class ServiceProxyAction {}

    class ServiceProxyClass {}

    class ServiceProxyPrivate {}

    /**
     * This structure contains information about service state variable.
     */
    class ServiceStateVariableInfo {
        // Own fields of GUPnP-1.0.ServiceStateVariableInfo

        name: string;
        send_events: boolean;
        is_numeric: boolean;
        type: GObject.GType;
        allowed_values: string[];
    }

    class WhiteListClass {}

    class WhiteListPrivate {}

    class XMLDocClass {}

    interface Acl {
        // Owm methods of GUPnP-1.0.Acl

        /**
         * Check whether gupnp_acl_is_allowed_async() is supported.
         */
        can_sync(): boolean;
        /**
         * Check whether an IP address is allowed to access this resource.
         * @param device The #GUPnPDevice associated with @path or %NULL if unknown.
         * @param service The #GUPnPService associated with @path or %NULL if unknown.
         * @param path The path being served.
         * @param address IP address of the peer.
         * @param agent The User-Agent header of the peer or %NULL if not unknown. @returns %TRUE if the peer is allowed, %FALSE otherwise
         */
        is_allowed(
            device: any | null,
            service: any | null,
            path: string,
            address: string,
            agent?: string | null,
        ): boolean;
        /**
         * Optional. Check asynchronously whether an IP address is allowed to access
         * this resource. Use this function if the process of verifying the access right
         * is expected to take some time, for example when using D-Bus etc.
         *
         * If this function is supported, gupnp_acl_can_sync() should return %TRUE.
         *
         * Use gupnp_acl_is_allowed_finish() to retrieve the result.
         * @param device The #GUPnPDevice associated with @path or %NULL if unknown.
         * @param service The #GUPnPService associated with @path or %NULL if unknown.
         * @param path The path being served.
         * @param address IP address of the peer
         * @param agent The User-Agent header of the peer or %NULL if not unknown.
         * @param cancellable A #GCancellable which can be used to cancel the operation.
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
        is_allowed_finish(res: Gio.AsyncResult): boolean;

        // Own virtual methods of GUPnP-1.0.Acl

        /**
         * Check whether gupnp_acl_is_allowed_async() is supported.
         */
        vfunc_can_sync(): boolean;
        /**
         * Check whether an IP address is allowed to access this resource.
         * @param device The #GUPnPDevice associated with @path or %NULL if unknown.
         * @param service The #GUPnPService associated with @path or %NULL if unknown.
         * @param path The path being served.
         * @param address IP address of the peer.
         * @param agent The User-Agent header of the peer or %NULL if not unknown. @returns %TRUE if the peer is allowed, %FALSE otherwise
         */
        vfunc_is_allowed(
            device: any | null,
            service: any | null,
            path: string,
            address: string,
            agent?: string | null,
        ): boolean;
        /**
         * Optional. Check asynchronously whether an IP address is allowed to access
         * this resource. Use this function if the process of verifying the access right
         * is expected to take some time, for example when using D-Bus etc.
         *
         * If this function is supported, gupnp_acl_can_sync() should return %TRUE.
         *
         * Use gupnp_acl_is_allowed_finish() to retrieve the result.
         * @param device The #GUPnPDevice associated with @path or %NULL if unknown.
         * @param service The #GUPnPService associated with @path or %NULL if unknown.
         * @param path The path being served.
         * @param address IP address of the peer
         * @param agent The User-Agent header of the peer or %NULL if not unknown.
         * @param cancellable A #GCancellable which can be used to cancel the operation.
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
