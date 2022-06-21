// @ts-nocheck

/*
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/sammydre/ts-for-gjs
 */
/**
 * GSSDP-1.0
 */

import type * as Gjs from './Gjs';
import type Soup from './Soup-2.4';
import type Gio from './Gio-2.0';
import type GObject from './GObject-2.0';
import type GLib from './GLib-2.0';

export namespace GSSDP {

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
 * SSDP search target for finding all possible resources.
 */
const ALL_RESOURCES: string
function error_quark(): GLib.Quark
interface Client_ConstructProps extends Gio.Initable_ConstructProps, GObject.Object_ConstructProps {

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
    host_ip?: string | null
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
}


interface Client extends Gio.Initable {

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
    host_ip: string
    /**
     * The name of the network interface this client is associated with.
     * Set to NULL to autodetect.
     */
    readonly interface: string
    /**
     * UDP port to use for sending multicast M-SEARCH requests on the
     * network. If not set (or set to 0) a random port will be used.
     * This property can be only set during object construction.
     */
    readonly msearch_port: number
    /**
     * The network this client is currently connected to. You could set this
     * to anything you want to identify the network this client is
     * associated with. If you are using #GUPnPContextManager and associated
     * interface is a WiFi interface, this property is set to the ESSID of
     * the network. Otherwise, expect this to be the network IP address by
     * default.
     */
    network: string
    /**
     * The SSDP server's identifier.
     */
    server_id: string
    /**
     * Time-to-live value to use for all sockets created by this client.
     * If not set (or set to 0) the value recommended by UPnP will be used.
     * This property can only be set during object construction.
     */
    readonly socket_ttl: number

    // Own fields of GSSDP-1.0.GSSDP.Client

    parent: GObject.Object
    priv: ClientPrivate

    // Owm methods of GSSDP-1.0.GSSDP.Client

    add_cache_entry(ip_address: string, user_agent: string): void
    /**
     * Adds a header field to the message sent by this `client`. It is intended to
     * be used by clients requiring vendor specific header fields. (If there is an
     * existing header with name name , then this creates a second one).
     * @param name Header name
     * @param value Header value
     */
    append_header(name: string, value: string): void
    /**
     * Removes all the headers for this `client`.
     */
    clear_headers(): void
    get_active(): boolean
    /**
     * Get the IP address we advertise ourselves as using.
     */
    get_host_ip(): string
    /**
     * Get the name of the network interface associated to `client`.
     */
    get_interface(): string
    get_main_context(): GLib.MainContext
    /**
     * Get the network this client is associated with.
     */
    get_network(): string
    get_server_id(): string
    guess_user_agent(ip_address: string): string
    /**
     * Removes `name` from the list of headers . If there are multiple values for
     * `name,` they are all removed.
     * @param name Header name
     */
    remove_header(name: string): void
    /**
     * Sets the network identification of `client` to `network`.
     * @param network The string identifying the network
     */
    set_network(network: string): void
    /**
     * Sets the server ID of `client` to `server_id`.
     * @param server_id The server ID
     */
    set_server_id(server_id: string): void

    // Own signals of GSSDP-1.0.GSSDP.Client

    connect(sigName: "message-received", callback: (...args: any[]) => void): number
    connect_after(sigName: "message-received", callback: (...args: any[]) => void): number
    emit(sigName: "message-received", from_ip: string, from_port: number, type: number, headers: Soup.MessageHeaders, ...args: any[]): void

    // Class property signals of GSSDP-1.0.GSSDP.Client

    connect(sigName: "notify::active", callback: (($obj: Client, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::active", callback: (($obj: Client, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::active", ...args: any[]): void
    connect(sigName: "notify::host-ip", callback: (($obj: Client, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::host-ip", callback: (($obj: Client, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::host-ip", ...args: any[]): void
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
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class Client extends GObject.Object {

    // Own properties of GSSDP-1.0.GSSDP.Client

    static name: string
    static $gtype: GObject.GType<Client>

    // Constructors of GSSDP-1.0.GSSDP.Client

    constructor(config?: Client_ConstructProps) 
    constructor(main_context: GLib.MainContext | null, iface: string | null) 
    static new(main_context: GLib.MainContext | null, iface: string | null): Client
    static new_with_port(iface: string | null, msearch_port: number): Client
    _init(config?: Client_ConstructProps): void
}

interface ResourceBrowser_ConstructProps extends GObject.Object_ConstructProps {

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

/**
 * Signal callback interface for `resource-available`
 */
interface ResourceBrowser_ResourceAvailableSignalCallback {
    ($obj: ResourceBrowser, usn: string, locations: string[]): void
}

/**
 * Signal callback interface for `resource-unavailable`
 */
interface ResourceBrowser_ResourceUnavailableSignalCallback {
    ($obj: ResourceBrowser, usn: string): void
}

interface ResourceBrowser {

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
    target: string

    // Own fields of GSSDP-1.0.GSSDP.ResourceBrowser

    parent: GObject.Object
    priv: ResourceBrowserPrivate

    // Owm methods of GSSDP-1.0.GSSDP.ResourceBrowser

    get_active(): boolean
    get_client(): Client
    get_mx(): number
    get_target(): string
    /**
     * Begins discovery if `resource_browser` is active and no discovery is
     * performed. Otherwise does nothing.
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

    // Own virtual methods of GSSDP-1.0.GSSDP.ResourceBrowser

    vfunc_resource_unavailable(usn: string): void

    // Own signals of GSSDP-1.0.GSSDP.ResourceBrowser

    connect(sigName: "resource-available", callback: ResourceBrowser_ResourceAvailableSignalCallback): number
    connect_after(sigName: "resource-available", callback: ResourceBrowser_ResourceAvailableSignalCallback): number
    emit(sigName: "resource-available", usn: string, locations: string[], ...args: any[]): void
    connect(sigName: "resource-unavailable", callback: ResourceBrowser_ResourceUnavailableSignalCallback): number
    connect_after(sigName: "resource-unavailable", callback: ResourceBrowser_ResourceUnavailableSignalCallback): number
    emit(sigName: "resource-unavailable", usn: string, ...args: any[]): void

    // Class property signals of GSSDP-1.0.GSSDP.ResourceBrowser

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

class ResourceBrowser extends GObject.Object {

    // Own properties of GSSDP-1.0.GSSDP.ResourceBrowser

    static name: string
    static $gtype: GObject.GType<ResourceBrowser>

    // Constructors of GSSDP-1.0.GSSDP.ResourceBrowser

    constructor(config?: ResourceBrowser_ConstructProps) 
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
     */
    constructor(client: Client, target: string) 
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
     */
    static new(client: Client, target: string): ResourceBrowser
    _init(config?: ResourceBrowser_ConstructProps): void
}

interface ResourceGroup_ConstructProps extends GObject.Object_ConstructProps {

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
    max_age?: number | null
    /**
     * The minimum number of milliseconds between SSDP messages.
     * The default is 120 based on DLNA specification.
     */
    message_delay?: number | null
}

interface ResourceGroup {

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
    max_age: number
    /**
     * The minimum number of milliseconds between SSDP messages.
     * The default is 120 based on DLNA specification.
     */
    message_delay: number

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
     */
    add_resource(target: string, usn: string, locations: string[]): number
    /**
     * Adds a resource with target `target,` USN `usn,` and location `location`
     * to `resource_group`.
     * @param target The resource's target
     * @param usn The resource's USN
     * @param location The resource's location
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

    // Class property signals of GSSDP-1.0.GSSDP.ResourceGroup

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

class ResourceGroup extends GObject.Object {

    // Own properties of GSSDP-1.0.GSSDP.ResourceGroup

    static name: string
    static $gtype: GObject.GType<ResourceGroup>

    // Constructors of GSSDP-1.0.GSSDP.ResourceGroup

    constructor(config?: ResourceGroup_ConstructProps) 
    constructor(client: Client) 
    static new(client: Client): ResourceGroup
    _init(config?: ResourceGroup_ConstructProps): void
}

interface ClientClass {

    // Own fields of GSSDP-1.0.GSSDP.ClientClass

    parent_class: GObject.ObjectClass
}

abstract class ClientClass {

    // Own properties of GSSDP-1.0.GSSDP.ClientClass

    static name: string
}

interface ClientPrivate {
}

class ClientPrivate {

    // Own properties of GSSDP-1.0.GSSDP.ClientPrivate

    static name: string
}

interface ResourceBrowserClass {

    // Own fields of GSSDP-1.0.GSSDP.ResourceBrowserClass

    parent_class: GObject.ObjectClass
    resource_unavailable: (resource_browser: ResourceBrowser, usn: string) => void
}

abstract class ResourceBrowserClass {

    // Own properties of GSSDP-1.0.GSSDP.ResourceBrowserClass

    static name: string
}

interface ResourceBrowserPrivate {
}

class ResourceBrowserPrivate {

    // Own properties of GSSDP-1.0.GSSDP.ResourceBrowserPrivate

    static name: string
}

interface ResourceGroupClass {

    // Own fields of GSSDP-1.0.GSSDP.ResourceGroupClass

    parent_class: GObject.ObjectClass
}

abstract class ResourceGroupClass {

    // Own properties of GSSDP-1.0.GSSDP.ResourceGroupClass

    static name: string
}

interface ResourceGroupPrivate {
}

class ResourceGroupPrivate {

    // Own properties of GSSDP-1.0.GSSDP.ResourceGroupPrivate

    static name: string
}

}
export default GSSDP;