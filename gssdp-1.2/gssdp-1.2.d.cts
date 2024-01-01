
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

/**
 * Error used in client creation.
 */
export enum Error {
    /**
     * GSSDP could not find a valid IP address of a
     * #GSSDPClient.
     */
    NO_IP_ADDRESS,
    /**
     * Unknown error.
     */
    FAILED,
}
/**
 * Implemented behavior of the UDA (Unified Device Architecture) protocol.
 */
export enum UDAVersion {
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
export const ALL_RESOURCES: string
export function error_quark(): GLib.Quark
export module Client {

    // Signal callback interfaces



    // Constructor properties interface

    export interface ConstructorProperties extends Gio.Initable.ConstructorProperties, GObject.Object.ConstructorProperties {

        // Own constructor properties of GSSDP-1.2.GSSDP.Client

        /**
         * Whether this client is active or not (passive). When active
         * (default), the client sends messages on the network, otherwise
         * not. In most cases, you don't want to touch this property.
         */
        active?: boolean | null
        /**
         * The IP protocol address family this client works on. When specified
         * during construction without giving a concrete address, it will be
         * used to determine the proper address.
         * 
         * If not specified, will contain the currrent address family after
         * the call to g_initable_init()<!-- -->. Use %G_SOCKET_FAMILY_INVALID
         * to specifiy using the default socket family (legacy IP)
         */
        address_family?: Gio.SocketFamily | null
        /**
         * The value of the BOOTID.UPNP.ORG header
         * 
         * Since 1.2.0
         */
        boot_id?: number | null
        /**
         * The value of the CONFIGID.UPNP.ORG header
         * 
         * Since 1.2.0
         */
        config_id?: number | null
        /**
         * The IP address of the assoicated network interface.
         */
        host_ip?: string | null
        /**
         * The network mask of the assoicated network interface.
         */
        host_mask?: Gio.InetAddressMask | null
        /**
         * The name of the network interface this client is associated with.
         * Set to NULL to autodetect.
         */
        interface?: string | null
        /**
         * UDP port to use for sending multicast M-SEARCH requests on the
         * network. If not set (or set to 0) a random port will be used.
         * This property can be only set during object construction.
         */
        msearch_port?: number | null
        /**
         * The network this client is currently connected to. You could set this
         * to anything you want to identify the network this client is
         * associated with. If you are using #GUPnPContextManager and associated
         * interface is a WiFi interface, this property is set to the ESSID of
         * the network. Otherwise, expect this to be the network IP address by
         * default.
         */
        network?: string | null
        /**
         * The SSDP server's identifier.
         */
        server_id?: string | null
        /**
         * Time-to-live value to use for all sockets created by this client.
         * If not set (or set to 0) the value recommended by UPnP will be used.
         * This property can only be set during object construction.
         */
        socket_ttl?: number | null
        /**
         * The UPnP version the client adheres to.
         */
        uda_version?: UDAVersion | null
        /**
         * The IP protocol address family this client works on. When specified
         * during construction without giving a concrete address, it will be
         * used to determine the proper address.
         * 
         * If not specified, will contain the currrent address family after
         * the call to g_initable_init()<!-- -->. Use %G_SOCKET_FAMILY_INVALID
         * to specifiy using the default socket family (legacy IP)
         */
        addressFamily?: Gio.SocketFamily | null
        /**
         * The value of the BOOTID.UPNP.ORG header
         * 
         * Since 1.2.0
         */
        bootId?: number | null
        /**
         * The value of the CONFIGID.UPNP.ORG header
         * 
         * Since 1.2.0
         */
        configId?: number | null
        /**
         * The IP address of the assoicated network interface.
         */
        hostIp?: string | null
        /**
         * The network mask of the assoicated network interface.
         */
        hostMask?: Gio.InetAddressMask | null
        /**
         * UDP port to use for sending multicast M-SEARCH requests on the
         * network. If not set (or set to 0) a random port will be used.
         * This property can be only set during object construction.
         */
        msearchPort?: number | null
        /**
         * The SSDP server's identifier.
         */
        serverId?: string | null
        /**
         * Time-to-live value to use for all sockets created by this client.
         * If not set (or set to 0) the value recommended by UPnP will be used.
         * This property can only be set during object construction.
         */
        socketTtl?: number | null
        /**
         * The UPnP version the client adheres to.
         */
        udaVersion?: UDAVersion | null
    }

}

export interface Client extends Gio.Initable {

    // Own properties of GSSDP-1.2.GSSDP.Client

    /**
     * Whether this client is active or not (passive). When active
     * (default), the client sends messages on the network, otherwise
     * not. In most cases, you don't want to touch this property.
     */
    active: boolean
    /**
     * The IP protocol address family this client works on. When specified
     * during construction without giving a concrete address, it will be
     * used to determine the proper address.
     * 
     * If not specified, will contain the currrent address family after
     * the call to g_initable_init()<!-- -->. Use %G_SOCKET_FAMILY_INVALID
     * to specifiy using the default socket family (legacy IP)
     */
    readonly address_family: Gio.SocketFamily
    /**
     * The IP protocol address family this client works on. When specified
     * during construction without giving a concrete address, it will be
     * used to determine the proper address.
     * 
     * If not specified, will contain the currrent address family after
     * the call to g_initable_init()<!-- -->. Use %G_SOCKET_FAMILY_INVALID
     * to specifiy using the default socket family (legacy IP)
     */
    readonly addressFamily: Gio.SocketFamily
    /**
     * The value of the BOOTID.UPNP.ORG header
     * 
     * Since 1.2.0
     */
    boot_id: number
    /**
     * The value of the BOOTID.UPNP.ORG header
     * 
     * Since 1.2.0
     */
    bootId: number
    /**
     * The value of the CONFIGID.UPNP.ORG header
     * 
     * Since 1.2.0
     */
    config_id: number
    /**
     * The value of the CONFIGID.UPNP.ORG header
     * 
     * Since 1.2.0
     */
    configId: number
    /**
     * The IP address of the assoicated network interface.
     */
    host_ip: string | null
    /**
     * The IP address of the assoicated network interface.
     */
    hostIp: string | null
    /**
     * The network mask of the assoicated network interface.
     */
    host_mask: Gio.InetAddressMask
    /**
     * The network mask of the assoicated network interface.
     */
    hostMask: Gio.InetAddressMask
    /**
     * The name of the network interface this client is associated with.
     * Set to NULL to autodetect.
     */
    readonly interface: string | null
    /**
     * UDP port to use for sending multicast M-SEARCH requests on the
     * network. If not set (or set to 0) a random port will be used.
     * This property can be only set during object construction.
     */
    readonly msearch_port: number
    /**
     * UDP port to use for sending multicast M-SEARCH requests on the
     * network. If not set (or set to 0) a random port will be used.
     * This property can be only set during object construction.
     */
    readonly msearchPort: number
    /**
     * The network this client is currently connected to. You could set this
     * to anything you want to identify the network this client is
     * associated with. If you are using #GUPnPContextManager and associated
     * interface is a WiFi interface, this property is set to the ESSID of
     * the network. Otherwise, expect this to be the network IP address by
     * default.
     */
    network: string | null
    /**
     * The SSDP server's identifier.
     */
    server_id: string | null
    /**
     * The SSDP server's identifier.
     */
    serverId: string | null
    /**
     * Time-to-live value to use for all sockets created by this client.
     * If not set (or set to 0) the value recommended by UPnP will be used.
     * This property can only be set during object construction.
     */
    readonly socket_ttl: number
    /**
     * Time-to-live value to use for all sockets created by this client.
     * If not set (or set to 0) the value recommended by UPnP will be used.
     * This property can only be set during object construction.
     */
    readonly socketTtl: number
    /**
     * The UPnP version the client adheres to.
     */
    readonly uda_version: UDAVersion
    /**
     * The UPnP version the client adheres to.
     */
    readonly udaVersion: UDAVersion

    // Own fields of GSSDP-1.2.GSSDP.Client

    parent_instance: GObject.Object

    // Owm methods of GSSDP-1.2.GSSDP.Client

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
    add_cache_entry(ip_address: string, user_agent: string): void
    /**
     * Adds a header field to the messages sent by this `client`. It is intended to
     * be used by clients requiring vendor specific header fields.
     * 
     * If there is an existing header with `name` it will append another one.
     * @param name Header name
     * @param value Header value
     */
    append_header(name: string, value: string | null): void
    /**
     * Check if the peer at `address` is reachable using this `client`.
     * @param address A #GInetSocketAddress of the target. The port part of the address may be 0
     * @returns %TRUE if considered reachable, %FALSE otherwise.
     */
    can_reach(address: Gio.InetSocketAddress): boolean
    /**
     * Removes all the headers for this `client`.
     */
    clear_headers(): void
    /**
     * Get the current state of the client. See [property`GSSDP`.Client:active] for details.
     * @returns %TRUE if @client is active, %FALSE otherwise.
     */
    get_active(): boolean
    /**
     * The IP address this client works on.
     * @returns The #GInetAddress this client works on
     */
    get_address(): Gio.InetAddress
    get_address_mask(): Gio.InetAddressMask
    get_family(): Gio.SocketFamily
    /**
     * Get the IP address we advertise ourselves as using.
     * @returns The IP address. This string should not be freed.
     */
    get_host_ip(): string
    get_index(): number
    /**
     * Get the name of the network interface associated to `client`.
     * @returns The network interface name. This string should not be freed.
     */
    get_interface(): string
    /**
     * Get the network identifier of the client. See [property`GSSDP`.Client:network]
     * for  details.
     * @returns The network identification. This string should not be freed.
     */
    get_network(): string
    get_server_id(): string
    get_uda_version(): UDAVersion
    /**
     * Try to get a User-Agent for `ip_address`.
     * @param ip_address IP address to guess the user-agent for
     * @returns The User-Agent cached for this IP, %NULL if none is cached.
     */
    guess_user_agent(ip_address: string): string
    /**
     * Removes `name` from the list of headers. If there are multiple values for
     * `name,` they are all removed.
     * @param name Header name
     */
    remove_header(name: string): void
    /**
     * Will set the new boot-id for this SSDP client. Does nothing if the UDA
     * version used by the client is UDA 1.0
     * 
     * The boot-id is used to signalize changes in the network configuration
     * for multi-homed hosts
     * @param boot_id The new boot-id for the client
     */
    set_boot_id(boot_id: number): void
    /**
     * The config-id is used to allow caching of the device or service description.
     * It should be changed if that changes.
     * @param config_id The new config-id for the client
     */
    set_config_id(config_id: number): void
    /**
     * Sets the network identification of `client` to `network`.
     * @param network The string identifying the network
     */
    set_network(network: string): void
    /**
     * Sets the server ID of `client` to `server_id`. This string is used as the
     * "Server:" identification header for SSDP discovery and response packets
     * and "User-Agent" header for searches.
     * 
     * By default, GSSDP will generate a header conforming to the requirements
     * defined in the UDA documents: OS/Version UPnP/Version GSSDP/Version.
     * @param server_id The server ID
     */
    set_server_id(server_id: string): void

    // Own signals of GSSDP-1.2.GSSDP.Client

    connect(sigName: "message-received", callback: (...args: any[]) => void): number
    connect_after(sigName: "message-received", callback: (...args: any[]) => void): number
    emit(sigName: "message-received", from_ip: string | null, from_port: number, type: number, headers: Soup.MessageHeaders, ...args: any[]): void

    // Class property signals of GSSDP-1.2.GSSDP.Client

    connect(sigName: "notify::active", callback: (($obj: Client, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::active", callback: (($obj: Client, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::active", ...args: any[]): void
    connect(sigName: "notify::address-family", callback: (($obj: Client, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::address-family", callback: (($obj: Client, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::address-family", ...args: any[]): void
    connect(sigName: "notify::boot-id", callback: (($obj: Client, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::boot-id", callback: (($obj: Client, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::boot-id", ...args: any[]): void
    connect(sigName: "notify::config-id", callback: (($obj: Client, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::config-id", callback: (($obj: Client, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::config-id", ...args: any[]): void
    connect(sigName: "notify::host-ip", callback: (($obj: Client, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::host-ip", callback: (($obj: Client, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::host-ip", ...args: any[]): void
    connect(sigName: "notify::host-mask", callback: (($obj: Client, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::host-mask", callback: (($obj: Client, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::host-mask", ...args: any[]): void
    connect(sigName: "notify::interface", callback: (($obj: Client, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::interface", callback: (($obj: Client, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::interface", ...args: any[]): void
    connect(sigName: "notify::msearch-port", callback: (($obj: Client, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::msearch-port", callback: (($obj: Client, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::msearch-port", ...args: any[]): void
    connect(sigName: "notify::network", callback: (($obj: Client, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::network", callback: (($obj: Client, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::network", ...args: any[]): void
    connect(sigName: "notify::server-id", callback: (($obj: Client, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::server-id", callback: (($obj: Client, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::server-id", ...args: any[]): void
    connect(sigName: "notify::socket-ttl", callback: (($obj: Client, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::socket-ttl", callback: (($obj: Client, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::socket-ttl", ...args: any[]): void
    connect(sigName: "notify::uda-version", callback: (($obj: Client, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::uda-version", callback: (($obj: Client, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::uda-version", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * A simple SSDP bus handler.
 * 
 * The [class`GSSDP`.Client] will usually be used by the [class`GSSDP`.ResourceGroup]
 * for announcing or the [class`GSSDP`.ResourceBrowser] for finding resources on the network.
 * 
 * A GSSDPClient is required per IP address that you want to use, even if those
 * belong t the same network device.
 * @class 
 */
export class Client extends GObject.Object {

    // Own properties of GSSDP-1.2.GSSDP.Client

    static name: string
    static $gtype: GObject.GType<Client>

    // Constructors of GSSDP-1.2.GSSDP.Client

    constructor(config?: Client.ConstructorProperties) 
    /**
     * Creates a GSSDP client on `iface`. GSSDPClient will pick the address it finds
     * suitable for using.
     * 
     * Using this utility function, the created client will be using UDA 1.0 and IPv4 only.
     * @constructor 
     * @param iface The name of the network interface, or %NULL for auto-detection.
     * @returns A new #GSSDPClient object.
     */
    constructor(iface: string | null) 
    /**
     * Creates a GSSDP client on `iface`. GSSDPClient will pick the address it finds
     * suitable for using.
     * 
     * Using this utility function, the created client will be using UDA 1.0 and IPv4 only.
     * @constructor 
     * @param iface The name of the network interface, or %NULL for auto-detection.
     * @returns A new #GSSDPClient object.
     */
    static new(iface: string | null): Client
    /**
     * Creates a GSSDP client on `iface`. GSSDPClient will pick the address it finds
     * suitable for using.
     * 
     * Using this utility function, the created client will be using UDA 1.0 and IPv4 only.
     * @constructor 
     * @param iface The name of the network interface, or %NULL for auto-detection.
     * @param msearch_port The network port to use for M-SEARCH requests or 0 for random.
     * @returns A new #GSSDPClient object or %NULL on error.
     */
    static new_with_port(iface: string | null, msearch_port: number): Client
    _init(config?: Client.ConstructorProperties): void
}

export module ResourceBrowser {

    // Signal callback interfaces

    /**
     * Signal callback interface for `resource-available`
     */
    export interface ResourceAvailableSignalCallback {
        ($obj: ResourceBrowser, usn: string | null, locations: string[]): void
    }

    /**
     * Signal callback interface for `resource-unavailable`
     */
    export interface ResourceUnavailableSignalCallback {
        ($obj: ResourceBrowser, usn: string | null): void
    }

    /**
     * Signal callback interface for `resource-update`
     */
    export interface ResourceUpdateSignalCallback {
        ($obj: ResourceBrowser, usn: string | null, boot_id: number, next_boot_id: number): void
    }


    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of GSSDP-1.2.GSSDP.ResourceBrowser

        /**
         * Whether this browser is active or not.
         */
        active?: boolean | null
        /**
         * The [class`GSSDP`.Client] to use for listening to SSDP messages
         */
        client?: Client | null
        /**
         * The maximum number of seconds in which to request other parties
         * to respond.
         */
        mx?: number | null
        /**
         * The discovery target this resource browser is looking for.
         */
        target?: string | null
    }

}

export interface ResourceBrowser {

    // Own properties of GSSDP-1.2.GSSDP.ResourceBrowser

    /**
     * Whether this browser is active or not.
     */
    active: boolean
    /**
     * The [class`GSSDP`.Client] to use for listening to SSDP messages
     */
    readonly client: Client
    /**
     * The maximum number of seconds in which to request other parties
     * to respond.
     */
    mx: number
    /**
     * The discovery target this resource browser is looking for.
     */
    target: string | null

    // Own fields of GSSDP-1.2.GSSDP.ResourceBrowser

    parent_instance: GObject.Object

    // Owm methods of GSSDP-1.2.GSSDP.ResourceBrowser

    /**
     * Get whether the browser is currently active.
     * @returns %TRUE if @resource_browser is active.
     */
    get_active(): boolean
    /**
     * Get the GSSDPClient this resource browser is using for SSDP.
     * @returns The #GSSDPClient @resource_browser is associated with.
     */
    get_client(): Client
    /**
     * Get the current MX value.
     * @returns The used MX value.
     */
    get_mx(): number
    /**
     * Get the current browse target.
     * @returns The browser target.
     */
    get_target(): string
    /**
     * Begins discovery if `resource_browser` is active and no discovery is
     * performed. Otherwise does nothing.
     * @returns %TRUE if rescaning has been started.
     */
    rescan(): boolean
    /**
     * (De)activates `resource_browser`.
     * @param active %TRUE to activate `resource_browser`
     */
    set_active(active: boolean): void
    /**
     * Sets the used MX value of `resource_browser` to `mx`.
     * @param mx The to be used MX value
     */
    set_mx(mx: number): void
    /**
     * Sets the browser target of `resource_browser` to `target`.
     * @param target The browser target
     */
    set_target(target: string): void

    // Own virtual methods of GSSDP-1.2.GSSDP.ResourceBrowser

    vfunc_resource_unavailable(usn: string): void
    vfunc_resource_update(usn: string, boot_id: number, next_boot_id: number): void

    // Own signals of GSSDP-1.2.GSSDP.ResourceBrowser

    connect(sigName: "resource-available", callback: ResourceBrowser.ResourceAvailableSignalCallback): number
    connect_after(sigName: "resource-available", callback: ResourceBrowser.ResourceAvailableSignalCallback): number
    emit(sigName: "resource-available", usn: string | null, locations: string[], ...args: any[]): void
    connect(sigName: "resource-unavailable", callback: ResourceBrowser.ResourceUnavailableSignalCallback): number
    connect_after(sigName: "resource-unavailable", callback: ResourceBrowser.ResourceUnavailableSignalCallback): number
    emit(sigName: "resource-unavailable", usn: string | null, ...args: any[]): void
    connect(sigName: "resource-update", callback: ResourceBrowser.ResourceUpdateSignalCallback): number
    connect_after(sigName: "resource-update", callback: ResourceBrowser.ResourceUpdateSignalCallback): number
    emit(sigName: "resource-update", usn: string | null, boot_id: number, next_boot_id: number, ...args: any[]): void

    // Class property signals of GSSDP-1.2.GSSDP.ResourceBrowser

    connect(sigName: "notify::active", callback: (($obj: ResourceBrowser, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::active", callback: (($obj: ResourceBrowser, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::active", ...args: any[]): void
    connect(sigName: "notify::client", callback: (($obj: ResourceBrowser, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::client", callback: (($obj: ResourceBrowser, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::client", ...args: any[]): void
    connect(sigName: "notify::mx", callback: (($obj: ResourceBrowser, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::mx", callback: (($obj: ResourceBrowser, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::mx", ...args: any[]): void
    connect(sigName: "notify::target", callback: (($obj: ResourceBrowser, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::target", callback: (($obj: ResourceBrowser, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::target", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
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
 * @class 
 */
export class ResourceBrowser extends GObject.Object {

    // Own properties of GSSDP-1.2.GSSDP.ResourceBrowser

    static name: string
    static $gtype: GObject.GType<ResourceBrowser>

    // Constructors of GSSDP-1.2.GSSDP.ResourceBrowser

    constructor(config?: ResourceBrowser.ConstructorProperties) 
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
    constructor(client: Client, target: string) 
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
    static new(client: Client, target: string): ResourceBrowser
    _init(config?: ResourceBrowser.ConstructorProperties): void
}

export module ResourceGroup {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of GSSDP-1.2.GSSDP.ResourceGroup

        /**
         * Whether this group of resources is available or not.
         */
        available?: boolean | null
        /**
         * The #GSSDPClient to use.
         */
        client?: Client | null
        /**
         * The number of seconds our advertisements are valid.
         */
        max_age?: number | null
        /**
         * The minimum number of milliseconds between SSDP messages.
         * The default is 120 based on DLNA specification.
         */
        message_delay?: number | null
        /**
         * The number of seconds our advertisements are valid.
         */
        maxAge?: number | null
        /**
         * The minimum number of milliseconds between SSDP messages.
         * The default is 120 based on DLNA specification.
         */
        messageDelay?: number | null
    }

}

export interface ResourceGroup {

    // Own properties of GSSDP-1.2.GSSDP.ResourceGroup

    /**
     * Whether this group of resources is available or not.
     */
    available: boolean
    /**
     * The #GSSDPClient to use.
     */
    readonly client: Client
    /**
     * The number of seconds our advertisements are valid.
     */
    max_age: number
    /**
     * The number of seconds our advertisements are valid.
     */
    maxAge: number
    /**
     * The minimum number of milliseconds between SSDP messages.
     * The default is 120 based on DLNA specification.
     */
    message_delay: number
    /**
     * The minimum number of milliseconds between SSDP messages.
     * The default is 120 based on DLNA specification.
     */
    messageDelay: number

    // Own fields of GSSDP-1.2.GSSDP.ResourceGroup

    parent_instance: GObject.Object

    // Owm methods of GSSDP-1.2.GSSDP.ResourceGroup

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
    add_resource(target: string, usn: string, locations: string[]): number
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
    add_resource_simple(target: string, usn: string, location: string): number
    get_available(): boolean
    get_client(): Client
    get_max_age(): number
    get_message_delay(): number
    /**
     * Removes the resource with ID `resource_id` from `resource_group`.
     * @param resource_id The ID of the resource to remove
     */
    remove_resource(resource_id: number): void
    /**
     * Sets `resource_group<`!-- -->s availability to `available`. Changing
     * `resource_group<`!-- -->s availability causes it to announce its new state
     * to listening SSDP clients.
     * @param available %TRUE if `resource_group` should be available (advertised)
     */
    set_available(available: boolean): void
    /**
     * Sets the number of seconds advertisements are valid to `max_age`.
     * @param max_age The number of seconds advertisements are valid
     */
    set_max_age(max_age: number): void
    /**
     * Sets the minimum time between each SSDP message.
     * @param message_delay The message delay in ms.
     */
    set_message_delay(message_delay: number): void
    /**
     * Send an `ssdp::update` message if the underlying `GSSDPClient` is running
     * the UDA 1.1 protocol. Does nothing otherwise.
     * @param new_boot_id The new boot id of the device
     */
    update(new_boot_id: number): void

    // Class property signals of GSSDP-1.2.GSSDP.ResourceGroup

    connect(sigName: "notify::available", callback: (($obj: ResourceGroup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::available", callback: (($obj: ResourceGroup, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::available", ...args: any[]): void
    connect(sigName: "notify::client", callback: (($obj: ResourceGroup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::client", callback: (($obj: ResourceGroup, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::client", ...args: any[]): void
    connect(sigName: "notify::max-age", callback: (($obj: ResourceGroup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::max-age", callback: (($obj: ResourceGroup, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::max-age", ...args: any[]): void
    connect(sigName: "notify::message-delay", callback: (($obj: ResourceGroup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::message-delay", callback: (($obj: ResourceGroup, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::message-delay", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * Class for controlling resource announcement.
 * 
 * A #GSSDPResourceGroup is a group of SSDP resources whose availability can
 * be controlled as one. This is useful when one needs to announce a single
 * service as multiple SSDP resources (UPnP does this for example).
 * @class 
 */
export class ResourceGroup extends GObject.Object {

    // Own properties of GSSDP-1.2.GSSDP.ResourceGroup

    static name: string
    static $gtype: GObject.GType<ResourceGroup>

    // Constructors of GSSDP-1.2.GSSDP.ResourceGroup

    constructor(config?: ResourceGroup.ConstructorProperties) 
    constructor(client: Client) 
    static new(client: Client): ResourceGroup
    _init(config?: ResourceGroup.ConstructorProperties): void
}

export interface ClientClass {

    // Own fields of GSSDP-1.2.GSSDP.ClientClass

    parent_class: GObject.ObjectClass
}

export abstract class ClientClass {

    // Own properties of GSSDP-1.2.GSSDP.ClientClass

    static name: string
}

export interface ResourceBrowserClass {

    // Own fields of GSSDP-1.2.GSSDP.ResourceBrowserClass

    parent_class: GObject.ObjectClass
    resource_update: (resource_browser: ResourceBrowser, usn: string, boot_id: number, next_boot_id: number) => void
    resource_unavailable: (resource_browser: ResourceBrowser, usn: string) => void
}

export abstract class ResourceBrowserClass {

    // Own properties of GSSDP-1.2.GSSDP.ResourceBrowserClass

    static name: string
}

export interface ResourceGroupClass {

    // Own fields of GSSDP-1.2.GSSDP.ResourceGroupClass

    parent_class: GObject.ObjectClass
}

export abstract class ResourceGroupClass {

    // Own properties of GSSDP-1.2.GSSDP.ResourceGroupClass

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