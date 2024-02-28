/*
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in `ts-for-gir` or create a bug report on https://github.com/gjsify/ts-for-gir
 */

import './gssdp-1.0-ambient.d.ts';
import './gssdp-1.0-import.d.ts';
/**
 * GSSDP-1.0
 */

import type Soup from '@girs/soup-2.4';
import type Gio from '@girs/gio-2.0';
import type GObject from '@girs/gobject-2.0';
import type GLib from '@girs/glib-2.0';

export namespace GSSDP {
    class Error extends GLib.Error {
        // Own fields of GSSDP-1.0.Error

        /**
         * GSSDP could not find a valid IP address of a
         * #GSSDPClient.
         */
        NO_IP_ADDRESS: number;
        /**
         * Unknown error.
         */
        FAILED: number;

        // Constructors of GSSDP-1.0.Error

        constructor(options: { message: string; code: number });
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

    class Client extends GObject.Object {
        // Own properties of GSSDP-1.0.Client

        /**
         * Whether this client is active or not (passive). When active
         * (default), the client sends messages on the network, otherwise
         * not. In most cases, you don't want to touch this property.
         */
        active: boolean;
        /**
         * The IP address of the assoicated network interface.
         */
        host_ip: string;
        /**
         * The IP address of the assoicated network interface.
         */
        hostIp: string;
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

        // Constructors of GSSDP-1.0.Client

        static ['new'](main_context?: GLib.MainContext | null, iface?: string | null): Client;

        static new_with_port(iface: string | null, msearch_port: number): Client;

        // Owm methods of GSSDP-1.0.Client

        add_cache_entry(ip_address: string, user_agent: string): void;
        /**
         * Adds a header field to the message sent by this `client`. It is intended to
         * be used by clients requiring vendor specific header fields. (If there is an
         * existing header with name name , then this creates a second one).
         * @param name Header name
         * @param value Header value
         */
        append_header(name: string, value: string): void;
        /**
         * Removes all the headers for this `client`.
         */
        clear_headers(): void;
        get_active(): boolean;
        /**
         * Get the IP address we advertise ourselves as using.
         * @returns The IP address. This string should not be freed.
         */
        get_host_ip(): string;
        /**
         * Get the name of the network interface associated to `client`.
         * @returns The network interface name. This string should not be freed.
         */
        get_interface(): string;
        get_main_context(): GLib.MainContext;
        /**
         * Get the network this client is associated with.
         * @returns The network identification. This string should not be freed.
         */
        get_network(): string;
        get_server_id(): string;
        guess_user_agent(ip_address: string): string;
        /**
         * Removes `name` from the list of headers . If there are multiple values for
         * `name,` they are all removed.
         * @param name Header name
         */
        remove_header(name: string): void;
        /**
         * Sets the network identification of `client` to `network`.
         * @param network The string identifying the network
         */
        set_network(network: string): void;
        /**
         * Sets the server ID of `client` to `server_id`.
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

        // Constructor properties interface
    }

    class ResourceBrowser extends GObject.Object {
        // Own properties of GSSDP-1.0.ResourceBrowser

        /**
         * Whether this browser is active or not.
         */
        active: boolean;
        /**
         * The #GSSDPClient to use.
         */
        client: Client;
        /**
         * The maximum number of seconds in which to request other parties
         * to respond.
         */
        mx: number;
        /**
         * The discovery target.
         */
        target: string;

        // Constructors of GSSDP-1.0.ResourceBrowser

        static ['new'](client: Client, target: string): ResourceBrowser;

        // Owm methods of GSSDP-1.0.ResourceBrowser

        get_active(): boolean;
        get_client(): Client;
        get_mx(): number;
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

    class ResourceGroup extends GObject.Object {
        // Own properties of GSSDP-1.0.ResourceGroup

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

        // Constructors of GSSDP-1.0.ResourceGroup

        static ['new'](client: Client): ResourceGroup;

        // Owm methods of GSSDP-1.0.ResourceGroup

        /**
         * Adds a resource with target `target,` USN `usn,` and locations `locations`
         * to `resource_group`.
         * @param target The resource's target
         * @param usn The resource's USN
         * @param locations A #GList of the resource's locations
         * @returns The ID of the added resource.
         */
        add_resource(target: string, usn: string, locations: string[]): number;
        /**
         * Adds a resource with target `target,` USN `usn,` and location `location`
         * to `resource_group`.
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
    }

    class ClientClass {}

    class ClientPrivate {}

    class ResourceBrowserClass {}

    class ResourceBrowserPrivate {}

    class ResourceGroupClass {}

    class ResourceGroupPrivate {}

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
