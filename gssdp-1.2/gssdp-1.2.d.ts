/*
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in `ts-for-gir` or create a bug report on https://github.com/gjsify/ts-for-gir
 */

import './gssdp-1.2-ambient.d.ts';
import './gssdp-1.2-import.d.ts';
/**
 * GSSDP-1.2
 */

import type Soup from '@girs/soup-2.4';
import type Gio from '@girs/gio-2.0';
import type GObject from '@girs/gobject-2.0';
import type GLib from '@girs/glib-2.0';

export namespace GSSDP {
    /**
     * Error used in client creation.
     */
    class Error extends GLib.Error {
        // Own fields of GSSDP-1.2.Error

        /**
         * GSSDP could not find a valid IP address of a
         * #GSSDPClient.
         */
        NO_IP_ADDRESS: number;
        /**
         * Unknown error.
         */
        FAILED: number;

        // Constructors of GSSDP-1.2.Error

        constructor(options: { message: string; code: number });

        // Owm methods of GSSDP-1.2.Error

        static quark(): GLib.Quark;
    }

    /**
     * Implemented behavior of the UDA (Unified Device Architecture) protocol.
     */
    enum UDAVersion {
        /**
         * When creating a client, use the default version
         */
        VERSION_UNSPECIFIED,
        /**
         * Use Version 1.0 of the UDA specification (UPnP/1.0)
         */
        VERSION_1_0,
        /**
         * Use Version 1.1 of the UDA specification (UPnP/1.1)
         */
        VERSION_1_1,
    }
    /**
     * SSDP search target for finding all possible resources.
     */
    const ALL_RESOURCES: string;
    function error_quark(): GLib.Quark;
    module Client {
        // Signal callback interfaces

        interface MessageReceived {
            (from_ip: string, from_port: number, type: number, headers: Soup.MessageHeaders): void;
        }

        // Constructor properties interface
    }

    /**
     * A simple SSDP bus handler.
     *
     * The [class`GSSDP`.Client] will usually be used by the [class`GSSDP`.ResourceGroup]
     * for announcing or the [class`GSSDP`.ResourceBrowser] for finding resources on the network.
     *
     * A GSSDPClient is required per IP address that you want to use, even if those
     * belong t the same network device.
     */
    class Client extends GObject.Object {
        // Own properties of GSSDP-1.2.Client

        /**
         * Whether this client is active or not (passive). When active
         * (default), the client sends messages on the network, otherwise
         * not. In most cases, you don't want to touch this property.
         */
        active: boolean;
        /**
         * The IP protocol address family this client works on. When specified
         * during construction without giving a concrete address, it will be
         * used to determine the proper address.
         *
         * If not specified, will contain the currrent address family after
         * the call to g_initable_init()<!-- -->. Use %G_SOCKET_FAMILY_INVALID
         * to specifiy using the default socket family (legacy IP)
         */
        address_family: Gio.SocketFamily;
        /**
         * The IP protocol address family this client works on. When specified
         * during construction without giving a concrete address, it will be
         * used to determine the proper address.
         *
         * If not specified, will contain the currrent address family after
         * the call to g_initable_init()<!-- -->. Use %G_SOCKET_FAMILY_INVALID
         * to specifiy using the default socket family (legacy IP)
         */
        addressFamily: Gio.SocketFamily;
        /**
         * The value of the BOOTID.UPNP.ORG header
         *
         * Since 1.2.0
         */
        boot_id: number;
        /**
         * The value of the BOOTID.UPNP.ORG header
         *
         * Since 1.2.0
         */
        bootId: number;
        /**
         * The value of the CONFIGID.UPNP.ORG header
         *
         * Since 1.2.0
         */
        config_id: number;
        /**
         * The value of the CONFIGID.UPNP.ORG header
         *
         * Since 1.2.0
         */
        configId: number;
        /**
         * The IP address of the assoicated network interface.
         */
        host_ip: string;
        /**
         * The IP address of the assoicated network interface.
         */
        hostIp: string;
        /**
         * The network mask of the assoicated network interface.
         */
        host_mask: Gio.InetAddressMask;
        /**
         * The network mask of the assoicated network interface.
         */
        hostMask: Gio.InetAddressMask;
        /**
         * The name of the network interface this client is associated with.
         * Set to NULL to autodetect.
         */
        'interface': string;
        /**
         * UDP port to use for sending multicast M-SEARCH requests on the
         * network. If not set (or set to 0) a random port will be used.
         * This property can be only set during object construction.
         */
        msearch_port: number;
        /**
         * UDP port to use for sending multicast M-SEARCH requests on the
         * network. If not set (or set to 0) a random port will be used.
         * This property can be only set during object construction.
         */
        msearchPort: number;
        /**
         * The network this client is currently connected to. You could set this
         * to anything you want to identify the network this client is
         * associated with. If you are using #GUPnPContextManager and associated
         * interface is a WiFi interface, this property is set to the ESSID of
         * the network. Otherwise, expect this to be the network IP address by
         * default.
         */
        network: string;
        /**
         * The SSDP server's identifier.
         */
        server_id: string;
        /**
         * The SSDP server's identifier.
         */
        serverId: string;
        /**
         * Time-to-live value to use for all sockets created by this client.
         * If not set (or set to 0) the value recommended by UPnP will be used.
         * This property can only be set during object construction.
         */
        socket_ttl: number;
        /**
         * Time-to-live value to use for all sockets created by this client.
         * If not set (or set to 0) the value recommended by UPnP will be used.
         * This property can only be set during object construction.
         */
        socketTtl: number;
        /**
         * The UPnP version the client adheres to.
         */
        uda_version: UDAVersion;
        /**
         * The UPnP version the client adheres to.
         */
        udaVersion: UDAVersion;

        // Constructors of GSSDP-1.2.Client

        static ['new'](iface?: string | null): Client;

        static new_with_port(iface: string | null, msearch_port: number): Client;

        // Owm methods of GSSDP-1.2.Client

        /**
         * Add `user_agent` for `ip_address`.
         *
         * Each [class`GSSDP`.Client] maintains a mapping of addresses
         * (MAC on systems that support it, IP addresses otherwise) to User Agents.
         *
         * This information can be used in higher layers to get an User-Agent for
         * devices that do not set the User-Agent header in their SOAP requests.
         * @param ip_address The host to add to the cache
         * @param user_agent User agent ot the host to add
         */
        add_cache_entry(ip_address: string, user_agent: string): void;
        /**
         * Adds a header field to the messages sent by this `client`. It is intended to
         * be used by clients requiring vendor specific header fields.
         *
         * If there is an existing header with `name` it will append another one.
         * @param name Header name
         * @param value Header value
         */
        append_header(name: string, value?: string | null): void;
        /**
         * Check if the peer at `address` is reachable using this `client`.
         * @param address A #GInetSocketAddress of the target. The port part of the address may be 0
         * @returns %TRUE if considered reachable, %FALSE otherwise.
         */
        can_reach(address: Gio.InetSocketAddress): boolean;
        /**
         * Removes all the headers for this `client`.
         */
        clear_headers(): void;
        /**
         * Get the current state of the client. See [property`GSSDP`.Client:active] for details.
         * @returns %TRUE if @client is active, %FALSE otherwise.
         */
        get_active(): boolean;
        /**
         * The IP address this client works on.
         * @returns The #GInetAddress this client works on
         */
        get_address(): Gio.InetAddress;
        get_address_mask(): Gio.InetAddressMask;
        get_family(): Gio.SocketFamily;
        /**
         * Get the IP address we advertise ourselves as using.
         * @returns The IP address. This string should not be freed.
         */
        get_host_ip(): string;
        get_index(): number;
        /**
         * Get the name of the network interface associated to `client`.
         * @returns The network interface name. This string should not be freed.
         */
        get_interface(): string;
        /**
         * Get the network identifier of the client. See [property`GSSDP`.Client:network]
         * for  details.
         * @returns The network identification. This string should not be freed.
         */
        get_network(): string;
        get_server_id(): string;
        get_uda_version(): UDAVersion;
        /**
         * Try to get a User-Agent for `ip_address`.
         * @param ip_address IP address to guess the user-agent for
         * @returns The User-Agent cached for this IP, %NULL if none is cached.
         */
        guess_user_agent(ip_address: string): string;
        /**
         * Removes `name` from the list of headers. If there are multiple values for
         * `name,` they are all removed.
         * @param name Header name
         */
        remove_header(name: string): void;
        /**
         * Will set the new boot-id for this SSDP client. Does nothing if the UDA
         * version used by the client is UDA 1.0
         *
         * The boot-id is used to signalize changes in the network configuration
         * for multi-homed hosts
         * @param boot_id The new boot-id for the client
         */
        set_boot_id(boot_id: number): void;
        /**
         * The config-id is used to allow caching of the device or service description.
         * It should be changed if that changes.
         * @param config_id The new config-id for the client
         */
        set_config_id(config_id: number): void;
        /**
         * Sets the network identification of `client` to `network`.
         * @param network The string identifying the network
         */
        set_network(network: string): void;
        /**
         * Sets the server ID of `client` to `server_id`. This string is used as the
         * "Server:" identification header for SSDP discovery and response packets
         * and "User-Agent" header for searches.
         *
         * By default, GSSDP will generate a header conforming to the requirements
         * defined in the UDA documents: OS/Version UPnP/Version GSSDP/Version.
         * @param server_id The server ID
         */
        set_server_id(server_id: string): void;
    }

    module ResourceBrowser {
        // Signal callback interfaces

        interface ResourceAvailable {
            (usn: string, locations: string[]): void;
        }

        interface ResourceUnavailable {
            (usn: string): void;
        }

        interface ResourceUpdate {
            (usn: string, boot_id: number, next_boot_id: number): void;
        }

        // Constructor properties interface
    }

    /**
     * Class handling resource discovery.
     *
     * After creating a browser
     * and activating it, the [signal`GSSDP`.ResourceBrowser::resource-available] and
     * [signal`GSSDP`.ResourceBrowser::resource-unavailable] signals will be emitted
     * whenever the availability of a resource matching the specified discovery target
     * changes. A discovery request is sent out automatically when activating the browser.
     *
     * If the associated [class`GSSDP`.Client] was configured to support UDA 1.1, it
     * will also emit the [signal`GSSDP`.ResourceBrowser::resource-update] if any of
     * the UDA 1.1 devices on the nework annouced its upcoming BOOTID change.
     */
    class ResourceBrowser extends GObject.Object {
        // Own properties of GSSDP-1.2.ResourceBrowser

        /**
         * Whether this browser is active or not.
         */
        active: boolean;
        /**
         * The [class`GSSDP`.Client] to use for listening to SSDP messages
         */
        client: Client;
        /**
         * The maximum number of seconds in which to request other parties
         * to respond.
         */
        mx: number;
        /**
         * The discovery target this resource browser is looking for.
         */
        target: string;

        // Constructors of GSSDP-1.2.ResourceBrowser

        static ['new'](client: Client, target: string): ResourceBrowser;

        // Owm methods of GSSDP-1.2.ResourceBrowser

        /**
         * Get whether the browser is currently active.
         * @returns %TRUE if @resource_browser is active.
         */
        get_active(): boolean;
        /**
         * Get the GSSDPClient this resource browser is using for SSDP.
         * @returns The #GSSDPClient @resource_browser is associated with.
         */
        get_client(): Client;
        /**
         * Get the current MX value.
         * @returns The used MX value.
         */
        get_mx(): number;
        /**
         * Get the current browse target.
         * @returns The browser target.
         */
        get_target(): string;
        /**
         * Begins discovery if `resource_browser` is active and no discovery is
         * performed. Otherwise does nothing.
         * @returns %TRUE if rescaning has been started.
         */
        rescan(): boolean;
        /**
         * (De)activates `resource_browser`.
         * @param active %TRUE to activate @resource_browser
         */
        set_active(active: boolean): void;
        /**
         * Sets the used MX value of `resource_browser` to `mx`.
         * @param mx The to be used MX value
         */
        set_mx(mx: number): void;
        /**
         * Sets the browser target of `resource_browser` to `target`.
         * @param target The browser target
         */
        set_target(target: string): void;
    }

    module ResourceGroup {
        // Constructor properties interface
    }

    /**
     * Class for controlling resource announcement.
     *
     * A #GSSDPResourceGroup is a group of SSDP resources whose availability can
     * be controlled as one. This is useful when one needs to announce a single
     * service as multiple SSDP resources (UPnP does this for example).
     */
    class ResourceGroup extends GObject.Object {
        // Own properties of GSSDP-1.2.ResourceGroup

        /**
         * Whether this group of resources is available or not.
         */
        available: boolean;
        /**
         * The #GSSDPClient to use.
         */
        client: Client;
        /**
         * The number of seconds our advertisements are valid.
         */
        max_age: number;
        /**
         * The number of seconds our advertisements are valid.
         */
        maxAge: number;
        /**
         * The minimum number of milliseconds between SSDP messages.
         * The default is 120 based on DLNA specification.
         */
        message_delay: number;
        /**
         * The minimum number of milliseconds between SSDP messages.
         * The default is 120 based on DLNA specification.
         */
        messageDelay: number;

        // Constructors of GSSDP-1.2.ResourceGroup

        static ['new'](client: Client): ResourceGroup;

        // Owm methods of GSSDP-1.2.ResourceGroup

        /**
         * Add an additional resource to announce in this resource group.
         *
         * Adds a resource with target `target,` USN `usn,` and locations `locations`
         * to `resource_group`. If the resource group is set [property`GSSDP`.ResourceGroup:available],
         * it will be announced right away.
         *
         * If your resource only has one location, you can use [method`GSSDP`.ResourceGroup.add_resource_simple]
         * instead.
         *
         * The resource id that is returned by this function can be used with
         * [method`GSSDP`.ResourceGroup.remove_resource].
         * @param target The resource's target
         * @param usn The resource's USN
         * @param locations A #GList of the resource's locations
         * @returns The ID of the added resource.
         */
        add_resource(target: string, usn: string, locations: string[]): number;
        /**
         * Adds a resource with target `target,` USN `usn,` and location `location`
         * to `resource_group`. If the resource group is set [property`GSSDP`.ResourceGroup:available],
         * it will be announced right away.
         *
         * The resource id that is returned by this function can be used with
         * [method`GSSDP`.ResourceGroup.remove_resource].
         * @param target The resource's target
         * @param usn The resource's USN
         * @param location The resource's location
         * @returns The ID of the added resource.
         */
        add_resource_simple(target: string, usn: string, location: string): number;
        get_available(): boolean;
        get_client(): Client;
        get_max_age(): number;
        get_message_delay(): number;
        /**
         * Removes the resource with ID `resource_id` from `resource_group`.
         * @param resource_id The ID of the resource to remove
         */
        remove_resource(resource_id: number): void;
        /**
         * Sets `resource_group<`!-- -->s availability to `available`. Changing
         * `resource_group<`!-- -->s availability causes it to announce its new state
         * to listening SSDP clients.
         * @param available %TRUE if @resource_group should be available (advertised)
         */
        set_available(available: boolean): void;
        /**
         * Sets the number of seconds advertisements are valid to `max_age`.
         * @param max_age The number of seconds advertisements are valid
         */
        set_max_age(max_age: number): void;
        /**
         * Sets the minimum time between each SSDP message.
         * @param message_delay The message delay in ms.
         */
        set_message_delay(message_delay: number): void;
        /**
         * Send an `ssdp::update` message if the underlying `GSSDPClient` is running
         * the UDA 1.1 protocol. Does nothing otherwise.
         * @param new_boot_id The new boot id of the device
         */
        update(new_boot_id: number): void;
    }

    class ClientClass {}

    class ResourceBrowserClass {}

    class ResourceGroupClass {}

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

export default GSSDP;
// END
