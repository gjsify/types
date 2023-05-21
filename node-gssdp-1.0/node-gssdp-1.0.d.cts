
/*
 * Type Definitions for node-gtk (https://github.com/romgrk/node-gtk)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/gjsify/ts-for-gir
 */

import './node-gssdp-1.0-import.d.ts';
    
/**
 * GSSDP-1.0
 */

import type Soup from '@girs/node-soup-2.4';
import type Gio from '@girs/node-gio-2.0';
import type GObject from '@girs/node-gobject-2.0';
import type GLib from '@girs/node-glib-2.0';

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
 * SSDP search target for finding all possible resources.
 */
export const ALL_RESOURCES: string | null
export function errorQuark(): GLib.Quark
export module Client {

    // Signal callback interfaces



    // Constructor properties interface

    export interface ConstructorProperties extends Gio.Initable.ConstructorProperties, GObject.Object.ConstructorProperties {

        // Own constructor properties of GSSDP-1.0.GSSDP.Client

        /**
         * Whether this client is active or not (passive). When active
         * (default), the client sends messages on the network, otherwise
         * not. In most cases, you don't want to touch this property.
         */
        active?: boolean | null
        /**
         * The IP address of the assoicated network interface.
         */
        hostIp?: string | null
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
         * The SSDP server's identifier.
         */
        serverId?: string | null
        /**
         * Time-to-live value to use for all sockets created by this client.
         * If not set (or set to 0) the value recommended by UPnP will be used.
         * This property can only be set during object construction.
         */
        socketTtl?: number | null
    }

}

export interface Client extends Gio.Initable {

    // Own properties of GSSDP-1.0.GSSDP.Client

    /**
     * Whether this client is active or not (passive). When active
     * (default), the client sends messages on the network, otherwise
     * not. In most cases, you don't want to touch this property.
     */
    active: boolean
    /**
     * The IP address of the assoicated network interface.
     */
    hostIp: string | null
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
    network: string | null
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
    __gtype__: number

    // Own fields of GSSDP-1.0.GSSDP.Client

    parent: GObject.Object
    priv: ClientPrivate

    // Owm methods of GSSDP-1.0.GSSDP.Client

    addCacheEntry(ipAddress: string | null, userAgent: string | null): void
    /**
     * Adds a header field to the message sent by this `client`. It is intended to
     * be used by clients requiring vendor specific header fields. (If there is an
     * existing header with name name , then this creates a second one).
     * @param name Header name
     * @param value Header value
     */
    appendHeader(name: string | null, value: string | null): void
    /**
     * Removes all the headers for this `client`.
     */
    clearHeaders(): void
    getActive(): boolean
    /**
     * Get the IP address we advertise ourselves as using.
     * @returns The IP address. This string should not be freed.
     */
    getHostIp(): string | null
    /**
     * Get the name of the network interface associated to `client`.
     * @returns The network interface name. This string should not be freed.
     */
    getInterface(): string | null
    getMainContext(): GLib.MainContext
    /**
     * Get the network this client is associated with.
     * @returns The network identification. This string should not be freed.
     */
    getNetwork(): string | null
    getServerId(): string | null
    guessUserAgent(ipAddress: string | null): string | null
    /**
     * Removes `name` from the list of headers . If there are multiple values for
     * `name,` they are all removed.
     * @param name Header name
     */
    removeHeader(name: string | null): void
    /**
     * Sets the network identification of `client` to `network`.
     * @param network The string identifying the network
     */
    setNetwork(network: string | null): void
    /**
     * Sets the server ID of `client` to `server_id`.
     * @param serverId The server ID
     */
    setServerId(serverId: string | null): void

    // Own signals of GSSDP-1.0.GSSDP.Client

    connect(sigName: "message-received", callback: (...args: any[]) => void): number
    on(sigName: "message-received", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "message-received", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "message-received", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "message-received", fromPort: number, type: number, headers: Soup.MessageHeaders, ...args: any[]): void

    // Class property signals of GSSDP-1.0.GSSDP.Client

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

export class Client extends GObject.Object {

    // Own properties of GSSDP-1.0.GSSDP.Client

    static name: string

    // Constructors of GSSDP-1.0.GSSDP.Client

    constructor(config?: Client.ConstructorProperties) 
    constructor(mainContext: GLib.MainContext | null, iface: string | null) 
    static new(mainContext: GLib.MainContext | null, iface: string | null): Client
    static newWithPort(iface: string | null, msearchPort: number): Client
    _init(config?: Client.ConstructorProperties): void
}

export module ResourceBrowser {

    // Signal callback interfaces

    /**
     * Signal callback interface for `resource-available`
     */
    export interface ResourceAvailableSignalCallback {
        (usn: string | null, locations: string[]): void
    }

    /**
     * Signal callback interface for `resource-unavailable`
     */
    export interface ResourceUnavailableSignalCallback {
        (usn: string | null): void
    }


    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of GSSDP-1.0.GSSDP.ResourceBrowser

        /**
         * Whether this browser is active or not.
         */
        active?: boolean | null
        /**
         * The #GSSDPClient to use.
         */
        client?: Client | null
        /**
         * The maximum number of seconds in which to request other parties
         * to respond.
         */
        mx?: number | null
        /**
         * The discovery target.
         */
        target?: string | null
    }

}

export interface ResourceBrowser {

    // Own properties of GSSDP-1.0.GSSDP.ResourceBrowser

    /**
     * Whether this browser is active or not.
     */
    active: boolean
    /**
     * The #GSSDPClient to use.
     */
    readonly client: Client
    /**
     * The maximum number of seconds in which to request other parties
     * to respond.
     */
    mx: number
    /**
     * The discovery target.
     */
    target: string | null
    __gtype__: number

    // Own fields of GSSDP-1.0.GSSDP.ResourceBrowser

    parent: GObject.Object
    priv: ResourceBrowserPrivate

    // Owm methods of GSSDP-1.0.GSSDP.ResourceBrowser

    getActive(): boolean
    getClient(): Client
    getMx(): number
    getTarget(): string | null
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
    setTarget(target: string | null): void

    // Own virtual methods of GSSDP-1.0.GSSDP.ResourceBrowser

    resourceUnavailable(usn: string | null): void

    // Own signals of GSSDP-1.0.GSSDP.ResourceBrowser

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

    // Class property signals of GSSDP-1.0.GSSDP.ResourceBrowser

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
}

export class ResourceBrowser extends GObject.Object {

    // Own properties of GSSDP-1.0.GSSDP.ResourceBrowser

    static name: string

    // Constructors of GSSDP-1.0.GSSDP.ResourceBrowser

    constructor(config?: ResourceBrowser.ConstructorProperties) 
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
    constructor(client: Client, target: string | null) 
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
    static new(client: Client, target: string | null): ResourceBrowser
    _init(config?: ResourceBrowser.ConstructorProperties): void
}

export module ResourceGroup {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of GSSDP-1.0.GSSDP.ResourceGroup

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

export interface ResourceGroup {

    // Own properties of GSSDP-1.0.GSSDP.ResourceGroup

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

    // Own fields of GSSDP-1.0.GSSDP.ResourceGroup

    parent: GObject.Object
    priv: ResourceGroupPrivate

    // Owm methods of GSSDP-1.0.GSSDP.ResourceGroup

    /**
     * Adds a resource with target `target,` USN `usn,` and locations `locations`
     * to `resource_group`.
     * @param target The resource's target
     * @param usn The resource's USN
     * @param locations A #GList of the resource's locations
     * @returns The ID of the added resource.
     */
    addResource(target: string | null, usn: string | null, locations: string[]): number
    /**
     * Adds a resource with target `target,` USN `usn,` and location `location`
     * to `resource_group`.
     * @param target The resource's target
     * @param usn The resource's USN
     * @param location The resource's location
     * @returns The ID of the added resource.
     */
    addResourceSimple(target: string | null, usn: string | null, location: string | null): number
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

    // Class property signals of GSSDP-1.0.GSSDP.ResourceGroup

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
}

export class ResourceGroup extends GObject.Object {

    // Own properties of GSSDP-1.0.GSSDP.ResourceGroup

    static name: string

    // Constructors of GSSDP-1.0.GSSDP.ResourceGroup

    constructor(config?: ResourceGroup.ConstructorProperties) 
    constructor(client: Client) 
    static new(client: Client): ResourceGroup
    _init(config?: ResourceGroup.ConstructorProperties): void
}

export interface ClientClass {

    // Own fields of GSSDP-1.0.GSSDP.ClientClass

    parentClass: GObject.ObjectClass
}

export abstract class ClientClass {

    // Own properties of GSSDP-1.0.GSSDP.ClientClass

    static name: string
}

export interface ClientPrivate {
}

export class ClientPrivate {

    // Own properties of GSSDP-1.0.GSSDP.ClientPrivate

    static name: string
}

export interface ResourceBrowserClass {

    // Own fields of GSSDP-1.0.GSSDP.ResourceBrowserClass

    parentClass: GObject.ObjectClass
    resourceUnavailable: (resourceBrowser: ResourceBrowser, usn: string | null) => void
}

export abstract class ResourceBrowserClass {

    // Own properties of GSSDP-1.0.GSSDP.ResourceBrowserClass

    static name: string
}

export interface ResourceBrowserPrivate {
}

export class ResourceBrowserPrivate {

    // Own properties of GSSDP-1.0.GSSDP.ResourceBrowserPrivate

    static name: string
}

export interface ResourceGroupClass {

    // Own fields of GSSDP-1.0.GSSDP.ResourceGroupClass

    parentClass: GObject.ObjectClass
}

export abstract class ResourceGroupClass {

    // Own properties of GSSDP-1.0.GSSDP.ResourceGroupClass

    static name: string
}

export interface ResourceGroupPrivate {
}

export class ResourceGroupPrivate {

    // Own properties of GSSDP-1.0.GSSDP.ResourceGroupPrivate

    static name: string
}

// END