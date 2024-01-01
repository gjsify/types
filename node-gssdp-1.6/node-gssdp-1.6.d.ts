
/*
 * Type Definitions for node-gtk (https://github.com/romgrk/node-gtk)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/gjsify/ts-for-gir
 */

import './node-gssdp-1.6-import.d.ts';
    
/**
 * GSSDP-1.6
 */

import type Soup from '@girs/node-soup-3.0';
import type Gio from '@girs/node-gio-2.0';
import type GObject from '@girs/node-gobject-2.0';
import type GLib from '@girs/node-glib-2.0';

export namespace GSSDP {

/**
 * Error used in client creation.
 */
enum Error {
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
const ALL_RESOURCES: string
function errorQuark(): GLib.Quark
module Client {

    // Signal callback interfaces



    // Constructor properties interface

    interface ConstructorProperties extends Gio.Initable.ConstructorProperties, GObject.Object.ConstructorProperties {

        // Own constructor properties of GSSDP-1.6.GSSDP.Client

        /**
         * Whether this client is active or not (passive). When active
         * (default), the client sends messages on the network, otherwise
         * not. In most cases, you don't want to touch this property.
         */
        active?: boolean | null
        /**
         * The network address this client is bound to.
         */
        address?: Gio.InetAddress | null
        /**
         * The IP protocol address family this client works on. When specified
         * during construction without giving a concrete address, it will be
         * used to determine the proper address.
         * 
         * If not specified, will contain the currrent address family after
         * the call to [method`Glib`.Initable.init]. Use %G_SOCKET_FAMILY_INVALID
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
         * The name of the network interface this client is associated with.
         * Set to NULL to autodetect.
         */
        interface?: string | null
        /**
         * UDP port to use for sending multicast M-SEARCH requests on the
         * network. If not set (or set to 0) a random port will be used.
         * This property can be only set during object construction.
         */
        msearchPort?: number | null
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
         * UDP port to use for sending multicast M-SEARCH requests on the
         * network. If not set (or set to 0) a random port will be used.
         * This property can be only set during object construction.
         */
        port?: number | null
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

interface Client extends Gio.Initable {

    // Own properties of GSSDP-1.6.GSSDP.Client

    /**
     * Whether this client is active or not (passive). When active
     * (default), the client sends messages on the network, otherwise
     * not. In most cases, you don't want to touch this property.
     */
    active: boolean
    /**
     * The network address this client is bound to.
     */
    readonly address: Gio.InetAddress
    /**
     * The IP protocol address family this client works on. When specified
     * during construction without giving a concrete address, it will be
     * used to determine the proper address.
     * 
     * If not specified, will contain the currrent address family after
     * the call to [method`Glib`.Initable.init]. Use %G_SOCKET_FAMILY_INVALID
     * to specifiy using the default socket family (legacy IP)
     */
    readonly addressFamily: Gio.SocketFamily
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
    configId: number
    /**
     * The IP address of the assoicated network interface.
     */
    readonly hostIp: string | null
    /**
     * The network mask of the assoicated network interface.
     */
    readonly hostMask: Gio.InetAddressMask
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
    readonly msearchPort: number
    /**
     * The network this client is currently connected to. You could set this
     * to anything you want to identify the network this client is
     * associated with. If you are using #GUPnPContextManager and associated
     * interface is a WiFi interface, this property is set to the ESSID of
     * the network. Otherwise, expect this to be the network IP address by
     * default.
     */
    readonly network: string | null
    /**
     * UDP port to use for sending multicast M-SEARCH requests on the
     * network. If not set (or set to 0) a random port will be used.
     * This property can be only set during object construction.
     */
    readonly port: number
    /**
     * The SSDP server's identifier.
     */
    serverId: string | null
    /**
     * Time-to-live value to use for all sockets created by this client.
     * If not set (or set to 0) the value recommended by UPnP will be used.
     * This property can only be set during object construction.
     */
    readonly socketTtl: number
    /**
     * The UPnP version the client adheres to.
     */
    readonly udaVersion: UDAVersion
    __gtype__: number

    // Own fields of GSSDP-1.6.GSSDP.Client

    parentInstance: GObject.Object

    // Owm methods of GSSDP-1.6.GSSDP.Client

    /**
     * Add `user_agent` for `ip_address`.
     * 
     * Each [class`GSSDP`.Client] maintains a mapping of addresses
     * (MAC on systems that support it, IP addresses otherwise) to User Agents.
     * 
     * This information can be used in higher layers to get an User-Agent for
     * devices that do not set the User-Agent header in their SOAP requests.
     * @param ipAddress The host to add to the cache
     * @param userAgent User agent ot the host to add
     */
    addCacheEntry(ipAddress: string, userAgent: string): void
    /**
     * Adds a header field to the messages sent by this `client`. It is intended to
     * be used by clients requiring vendor specific header fields.
     * 
     * If there is an existing header with `name` it will append another one.
     * @param name Header name
     * @param value Header value
     */
    appendHeader(name: string, value: string | null): void
    /**
     * Check if the peer at `address` is reachable using this `client`.
     * @param address A #GInetSocketAddress of the target. The port part of the address may be 0
     * @returns %TRUE if considered reachable, %FALSE otherwise.
     */
    canReach(address: Gio.InetSocketAddress): boolean
    /**
     * Removes all the headers for this `client`.
     */
    clearHeaders(): void
    /**
     * Get the current state of the client. See [property`GSSDP`.Client:active] for details.
     * @returns %TRUE if @client is active, %FALSE otherwise.
     */
    getActive(): boolean
    /**
     * The IP address this client works on.
     * @returns The #GInetAddress this client works on
     */
    getAddress(): Gio.InetAddress
    getAddressMask(): Gio.InetAddressMask
    getFamily(): Gio.SocketFamily
    /**
     * Get the IP address we advertise ourselves as using.
     * @returns The IP address. This string should not be freed.
     */
    getHostIp(): string
    getIndex(): number
    /**
     * Get the name of the network interface associated to `client`.
     * @returns The network interface name. This string should not be freed.
     */
    getInterface(): string
    /**
     * Get the network identifier of the client. See [property`GSSDP`.Client:network]
     * for  details.
     * @returns The network identification. This string should not be freed.
     */
    getNetwork(): string
    getPort(): number
    getServerId(): string
    getUdaVersion(): UDAVersion
    /**
     * Try to get a User-Agent for `ip_address`.
     * @param ipAddress IP address to guess the user-agent for
     * @returns The User-Agent cached for this IP, %NULL if none is cached.
     */
    guessUserAgent(ipAddress: string): string
    /**
     * Removes `name` from the list of headers. If there are multiple values for
     * `name,` they are all removed.
     * @param name Header name
     */
    removeHeader(name: string): void
    /**
     * Will set the new boot-id for this SSDP client. Does nothing if the UDA
     * version used by the client is UDA 1.0
     * 
     * The boot-id is used to signalize changes in the network configuration
     * for multi-homed hosts
     * @param bootId The new boot-id for the client
     */
    setBootId(bootId: number): void
    /**
     * The config-id is used to allow caching of the device or service description.
     * It should be changed if that changes.
     * @param configId The new config-id for the client
     */
    setConfigId(configId: number): void
    /**
     * Sets the network identification of `client` to `network`.
     * @param network The string identifying the network
     */
    setNetwork(network: string): void
    /**
     * Sets the server ID of `client` to `server_id`. This string is used as the
     * "Server:" identification header for SSDP discovery and response packets
     * and "User-Agent" header for searches.
     * 
     * By default, GSSDP will generate a header conforming to the requirements
     * defined in the UDA documents: OS/Version UPnP/Version GSSDP/Version.
     * @param serverId The server ID
     */
    setServerId(serverId: string): void

    // Own signals of GSSDP-1.6.GSSDP.Client

    connect(sigName: "message-received", callback: (...args: any[]) => void): number
    on(sigName: "message-received", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "message-received", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "message-received", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "message-received", fromPort: number, type: number, headers: Soup.MessageHeaders, ...args: any[]): void

    // Class property signals of GSSDP-1.6.GSSDP.Client

    connect(sigName: "notify::active", callback: (...args: any[]) => void): number
    on(sigName: "notify::active", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::active", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::active", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::active", ...args: any[]): void
    connect(sigName: "notify::address", callback: (...args: any[]) => void): number
    on(sigName: "notify::address", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::address", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::address", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::address", ...args: any[]): void
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
    connect(sigName: "notify::port", callback: (...args: any[]) => void): number
    on(sigName: "notify::port", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::port", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::port", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::port", ...args: any[]): void
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
class Client extends GObject.Object {

    // Own properties of GSSDP-1.6.GSSDP.Client

    static name: string

    // Constructors of GSSDP-1.6.GSSDP.Client

    constructor(config?: Client.ConstructorProperties) 
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
    constructor(iface: string | null) 
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
    static new(iface: string | null): Client
    /**
     * Creates a GSSDP client with address `addr`. If none is specified, GSSDP
     * will chose the address it deems most suitable.
     * @constructor 
     * @param addr an IP address or %NULL for auto-detection. If you do not care about the address, but want to specify an address family, use [ctor`Glib`.InetAddress.new_any] with the appropriate family instead.
     * @param port The network port to use for M-SEARCH requests or 0 for random.
     * @param udaVersion The UDA version this client will adhere to
     * @returns A new #GSSDPClient object or %NULL on error.
     */
    static newForAddress(addr: Gio.InetAddress | null, port: number, udaVersion: UDAVersion): Client
    /**
     * Creates a GSSDP client with address `addr`. If none is specified, GSSDP
     * will chose the address it deems most suitable.
     * @constructor 
     * @param iface the name of a network interface
     * @param addr an IP address or %NULL for auto-detection. If you do not care about the address, but want to specify an address family, use [ctor`Glib`.InetAddress.new_any] with the appropriate family instead.
     * @param port The network port to use for M-SEARCH requests or 0 for random.
     * @param udaVersion The UDA version this client will adhere to
     * @returns A new #GSSDPClient object or %NULL on error.
     */
    static newFull(iface: string | null, addr: Gio.InetAddress | null, port: number, udaVersion: UDAVersion): Client
    /**
     * Creates a GSSDP client on `iface`. GSSDPClient will pick the address it finds
     * suitable for using.
     * 
     * Using this utility function, the created client will be using UDA 1.0 and IPv4 only.
     * @constructor 
     * @param iface The name of the network interface, or %NULL for auto-detection.
     * @param msearchPort The network port to use for M-SEARCH requests or 0 for random.
     * @returns A new #GSSDPClient object or %NULL on error.
     */
    static newWithPort(iface: string | null, msearchPort: number): Client
    _init(config?: Client.ConstructorProperties): void
}

module ResourceBrowser {

    // Signal callback interfaces

    /**
     * Signal callback interface for `resource-available`
     */
    interface ResourceAvailableSignalCallback {
        (usn: string | null, locations: string[]): void
    }

    /**
     * Signal callback interface for `resource-unavailable`
     */
    interface ResourceUnavailableSignalCallback {
        (usn: string | null): void
    }

    /**
     * Signal callback interface for `resource-update`
     */
    interface ResourceUpdateSignalCallback {
        (usn: string | null, bootId: number, nextBootId: number): void
    }


    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of GSSDP-1.6.GSSDP.ResourceBrowser

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

interface ResourceBrowser {

    // Own properties of GSSDP-1.6.GSSDP.ResourceBrowser

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
    __gtype__: number

    // Own fields of GSSDP-1.6.GSSDP.ResourceBrowser

    parentInstance: GObject.Object

    // Owm methods of GSSDP-1.6.GSSDP.ResourceBrowser

    /**
     * Get whether the browser is currently active.
     * @returns %TRUE if @resource_browser is active.
     */
    getActive(): boolean
    /**
     * Get the GSSDPClient this resource browser is using for SSDP.
     * @returns The #GSSDPClient @resource_browser is associated with.
     */
    getClient(): Client
    /**
     * Get the current MX value.
     * @returns The used MX value.
     */
    getMx(): number
    /**
     * Get the current browse target.
     * @returns The browser target.
     */
    getTarget(): string
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
    setActive(active: boolean): void
    /**
     * Sets the used MX value of `resource_browser` to `mx`.
     * @param mx The to be used MX value
     */
    setMx(mx: number): void
    /**
     * Sets the browser target of `resource_browser` to `target`.
     * @param target The browser target
     */
    setTarget(target: string): void

    // Own virtual methods of GSSDP-1.6.GSSDP.ResourceBrowser

    resourceUnavailable(usn: string): void
    resourceUpdate(usn: string, bootId: number, nextBootId: number): void

    // Own signals of GSSDP-1.6.GSSDP.ResourceBrowser

    connect(sigName: "resource-available", callback: ResourceBrowser.ResourceAvailableSignalCallback): number
    on(sigName: "resource-available", callback: ResourceBrowser.ResourceAvailableSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "resource-available", callback: ResourceBrowser.ResourceAvailableSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "resource-available", callback: ResourceBrowser.ResourceAvailableSignalCallback): NodeJS.EventEmitter
    emit(sigName: "resource-available", locations: string[], ...args: any[]): void
    connect(sigName: "resource-unavailable", callback: ResourceBrowser.ResourceUnavailableSignalCallback): number
    on(sigName: "resource-unavailable", callback: ResourceBrowser.ResourceUnavailableSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "resource-unavailable", callback: ResourceBrowser.ResourceUnavailableSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "resource-unavailable", callback: ResourceBrowser.ResourceUnavailableSignalCallback): NodeJS.EventEmitter
    emit(sigName: "resource-unavailable", ...args: any[]): void
    connect(sigName: "resource-update", callback: ResourceBrowser.ResourceUpdateSignalCallback): number
    on(sigName: "resource-update", callback: ResourceBrowser.ResourceUpdateSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "resource-update", callback: ResourceBrowser.ResourceUpdateSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "resource-update", callback: ResourceBrowser.ResourceUpdateSignalCallback): NodeJS.EventEmitter
    emit(sigName: "resource-update", bootId: number, nextBootId: number, ...args: any[]): void

    // Class property signals of GSSDP-1.6.GSSDP.ResourceBrowser

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
class ResourceBrowser extends GObject.Object {

    // Own properties of GSSDP-1.6.GSSDP.ResourceBrowser

    static name: string

    // Constructors of GSSDP-1.6.GSSDP.ResourceBrowser

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

module ResourceGroup {

    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of GSSDP-1.6.GSSDP.ResourceGroup

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
        maxAge?: number | null
        /**
         * The minimum number of milliseconds between SSDP messages.
         * The default is 120 based on DLNA specification.
         */
        messageDelay?: number | null
    }

}

interface ResourceGroup {

    // Own properties of GSSDP-1.6.GSSDP.ResourceGroup

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
    maxAge: number
    /**
     * The minimum number of milliseconds between SSDP messages.
     * The default is 120 based on DLNA specification.
     */
    messageDelay: number
    __gtype__: number

    // Own fields of GSSDP-1.6.GSSDP.ResourceGroup

    parentInstance: GObject.Object

    // Owm methods of GSSDP-1.6.GSSDP.ResourceGroup

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
    addResource(target: string, usn: string, locations: string[]): number
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
    addResourceSimple(target: string, usn: string, location: string): number
    getAvailable(): boolean
    getClient(): Client
    getMaxAge(): number
    getMessageDelay(): number
    /**
     * Removes the resource with ID `resource_id` from `resource_group`.
     * @param resourceId The ID of the resource to remove
     */
    removeResource(resourceId: number): void
    /**
     * Sets `resource_group<`!-- -->s availability to `available`. Changing
     * `resource_group<`!-- -->s availability causes it to announce its new state
     * to listening SSDP clients.
     * @param available %TRUE if `resource_group` should be available (advertised)
     */
    setAvailable(available: boolean): void
    /**
     * Sets the number of seconds advertisements are valid to `max_age`.
     * @param maxAge The number of seconds advertisements are valid
     */
    setMaxAge(maxAge: number): void
    /**
     * Sets the minimum time between each SSDP message.
     * @param messageDelay The message delay in ms.
     */
    setMessageDelay(messageDelay: number): void
    /**
     * Send an `ssdp::update` message if the underlying `GSSDPClient` is running
     * the UDA 1.1 protocol. Does nothing otherwise.
     * @param newBootId The new boot id of the device
     */
    update(newBootId: number): void

    // Class property signals of GSSDP-1.6.GSSDP.ResourceGroup

    connect(sigName: "notify::available", callback: (...args: any[]) => void): number
    on(sigName: "notify::available", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::available", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::available", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::available", ...args: any[]): void
    connect(sigName: "notify::client", callback: (...args: any[]) => void): number
    on(sigName: "notify::client", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::client", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::client", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::client", ...args: any[]): void
    connect(sigName: "notify::max-age", callback: (...args: any[]) => void): number
    on(sigName: "notify::max-age", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::max-age", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::max-age", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::max-age", ...args: any[]): void
    connect(sigName: "notify::message-delay", callback: (...args: any[]) => void): number
    on(sigName: "notify::message-delay", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::message-delay", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::message-delay", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::message-delay", ...args: any[]): void
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
class ResourceGroup extends GObject.Object {

    // Own properties of GSSDP-1.6.GSSDP.ResourceGroup

    static name: string

    // Constructors of GSSDP-1.6.GSSDP.ResourceGroup

    constructor(config?: ResourceGroup.ConstructorProperties) 
    constructor(client: Client) 
    static new(client: Client): ResourceGroup
    _init(config?: ResourceGroup.ConstructorProperties): void
}

interface ClientClass {

    // Own fields of GSSDP-1.6.GSSDP.ClientClass

    parentClass: GObject.ObjectClass
}

abstract class ClientClass {

    // Own properties of GSSDP-1.6.GSSDP.ClientClass

    static name: string
}

interface ResourceBrowserClass {

    // Own fields of GSSDP-1.6.GSSDP.ResourceBrowserClass

    parentClass: GObject.ObjectClass
    resourceUpdate: (resourceBrowser: ResourceBrowser, usn: string, bootId: number, nextBootId: number) => void
    resourceUnavailable: (resourceBrowser: ResourceBrowser, usn: string) => void
}

abstract class ResourceBrowserClass {

    // Own properties of GSSDP-1.6.GSSDP.ResourceBrowserClass

    static name: string
}

interface ResourceGroupClass {

    // Own fields of GSSDP-1.6.GSSDP.ResourceGroupClass

    parentClass: GObject.ObjectClass
}

abstract class ResourceGroupClass {

    // Own properties of GSSDP-1.6.GSSDP.ResourceGroupClass

    static name: string
}

}

export default GSSDP;
// END