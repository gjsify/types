
/*
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in `ts-for-gir` or create a bug report on https://github.com/gjsify/ts-for-gir
 */
/**
 * GoVirt-1.0
 */

import type Rest from '@girs/rest-0.7';
import type Soup from '@girs/soup-2.4';
import type Gio from '@girs/gio-2.0';
import type GObject from '@girs/gobject-2.0';
import type GLib from '@girs/glib-2.0';

export namespace GoVirt {

enum ProxyError {
    PARSING_FAILED,
    ACTION_FAILED,
    FAULT,
}
enum RestCallError {
    XML,
}
enum VmDisplayType {
    SPICE,
    VNC,
}
enum VmState {
    DOWN,
    UP,
    REBOOTING,
}
function proxy_error_quark(): GLib.Quark
function rest_call_error_quark(): GLib.Quark
module Proxy {

    // Constructor properties interface

    interface ConstructorProperties extends Rest.Proxy.ConstructorProperties {

        // Own constructor properties of GoVirt-1.0.GoVirt.Proxy

        admin?: boolean | null
        ca_cert?: any[] | null
    }

}

interface Proxy {

    // Own properties of GoVirt-1.0.GoVirt.Proxy

    admin: boolean
    ca_cert: any[]

    // Own fields of GoVirt-1.0.GoVirt.Proxy

    parent: Rest.Proxy & GObject.Object
    priv: ProxyPrivate

    // Owm methods of GoVirt-1.0.GoVirt.Proxy

    fetch_ca_certificate(): boolean
    fetch_ca_certificate_async(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void

    // Overloads of fetch_ca_certificate_async

    /**
     * Promisified version of {@link fetch_ca_certificate_async}
     * 
     * 
     * @param cancellable 
     * @returns A Promise of the result of {@link fetch_ca_certificate_async}
     */
    fetch_ca_certificate_async(cancellable: Gio.Cancellable | null): globalThis.Promise<Uint8Array>
    fetch_ca_certificate_finish(result: Gio.AsyncResult): Uint8Array
    fetch_vms(): boolean
    fetch_vms_async(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void

    // Overloads of fetch_vms_async

    /**
     * Promisified version of {@link fetch_vms_async}
     * 
     * 
     * @param cancellable 
     * @returns A Promise of: the list of #OvirtVm associated with #OvirtProxy. The returned list should not be freed nor modified, and can become invalid any time a #OvirtProxy call completes.
     */
    fetch_vms_async(cancellable: Gio.Cancellable | null): globalThis.Promise<Vm[]>
    fetch_vms_finish(result: Gio.AsyncResult): Vm[]
    /**
     * Gets the list of remote VMs from the proxy object.
     * This method does not initiate any network activity, the remote VM list
     * must have been fetched with ovirt_proxy_fetch_vms() or
     * ovirt_proxy_fetch_vms_async() before calling this function.
     * @returns the list of #OvirtVm associated with #OvirtProxy. The returned list should not be freed nor modified, and can become invalid any time a #OvirtProxy call completes.
     */
    get_vms(): Vm[]
    /**
     * Looks up a virtual machine whose name is `name`. If it cannot be found,
     * NULL is returned. This method does not initiate any network activity,
     * the remote VM list must have been fetched with ovirt_proxy_fetch_vms()
     * or ovirt_proxy_fetch_vms_async() before calling this function.
     * @param vm_name name of the virtual machine to lookup
     * @returns a #OvirtVm whose name is @name or NULL
     */
    lookup_vm(vm_name: string | null): Vm

    // Class property signals of GoVirt-1.0.GoVirt.Proxy

    connect(sigName: "notify::admin", callback: (($obj: Proxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::admin", callback: (($obj: Proxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::admin", ...args: any[]): void
    connect(sigName: "notify::ca-cert", callback: (($obj: Proxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::ca-cert", callback: (($obj: Proxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::ca-cert", ...args: any[]): void
    connect(sigName: "notify::binding-required", callback: (($obj: Proxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::binding-required", callback: (($obj: Proxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::binding-required", ...args: any[]): void
    connect(sigName: "notify::disable-cookies", callback: (($obj: Proxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::disable-cookies", callback: (($obj: Proxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::disable-cookies", ...args: any[]): void
    connect(sigName: "notify::password", callback: (($obj: Proxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::password", callback: (($obj: Proxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::password", ...args: any[]): void
    connect(sigName: "notify::ssl-ca-file", callback: (($obj: Proxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::ssl-ca-file", callback: (($obj: Proxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::ssl-ca-file", ...args: any[]): void
    connect(sigName: "notify::ssl-strict", callback: (($obj: Proxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::ssl-strict", callback: (($obj: Proxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::ssl-strict", ...args: any[]): void
    connect(sigName: "notify::url-format", callback: (($obj: Proxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::url-format", callback: (($obj: Proxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::url-format", ...args: any[]): void
    connect(sigName: "notify::user-agent", callback: (($obj: Proxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::user-agent", callback: (($obj: Proxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::user-agent", ...args: any[]): void
    connect(sigName: "notify::username", callback: (($obj: Proxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::username", callback: (($obj: Proxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::username", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class Proxy extends Rest.Proxy {

    // Own properties of GoVirt-1.0.GoVirt.Proxy

    static name: string
    static $gtype: GObject.GType<Proxy>

    // Constructors of GoVirt-1.0.GoVirt.Proxy

    constructor(config?: Proxy.ConstructorProperties) 
    constructor(uri: string | null) 
    static new(uri: string | null): Proxy

    // Overloads of new

    /**
     * Create a new #RestProxy for the specified endpoint `url_format,` using the
     * "GET" method.
     * 
     * Set `binding_required` to %TRUE if the URL contains string formatting
     * operations (for example "http://foo.com/%<!-- -->s".  These must be expanded
     * using rest_proxy_bind() before invoking the proxy.
     * @constructor 
     * @param url_format the endpoint URL
     * @param binding_required whether the URL needs to be bound before calling
     * @returns A new #RestProxy.
     */
    static new(url_format: string | null, binding_required: boolean): Rest.Proxy
    _init(config?: Proxy.ConstructorProperties): void
}

module Vm {

    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of GoVirt-1.0.GoVirt.Vm

        display?: VmDisplay | null
        href?: string | null
        name?: string | null
        state?: VmState | null
        uuid?: string | null
    }

}

interface Vm {

    // Own properties of GoVirt-1.0.GoVirt.Vm

    display: VmDisplay
    href: string
    name: string
    state: VmState
    uuid: string

    // Own fields of GoVirt-1.0.GoVirt.Vm

    parent: GObject.Object
    priv: VmPrivate

    // Owm methods of GoVirt-1.0.GoVirt.Vm

    get_ticket(proxy: Proxy): boolean
    get_ticket_async(proxy: Proxy, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void

    // Overloads of get_ticket_async

    /**
     * Promisified version of {@link get_ticket_async}
     * 
     * 
     * @param proxy 
     * @param cancellable 
     * @returns A Promise of the result of {@link get_ticket_async}
     */
    get_ticket_async(proxy: Proxy, cancellable: Gio.Cancellable | null): globalThis.Promise<boolean>
    get_ticket_finish(result: Gio.AsyncResult): boolean
    start(proxy: Proxy): boolean
    start_async(proxy: Proxy, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void

    // Overloads of start_async

    /**
     * Promisified version of {@link start_async}
     * 
     * 
     * @param proxy 
     * @param cancellable 
     * @returns A Promise of the result of {@link start_async}
     */
    start_async(proxy: Proxy, cancellable: Gio.Cancellable | null): globalThis.Promise<boolean>
    start_finish(result: Gio.AsyncResult): boolean
    stop(proxy: Proxy): boolean
    stop_async(proxy: Proxy, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void

    // Overloads of stop_async

    /**
     * Promisified version of {@link stop_async}
     * 
     * 
     * @param proxy 
     * @param cancellable 
     * @returns A Promise of the result of {@link stop_async}
     */
    stop_async(proxy: Proxy, cancellable: Gio.Cancellable | null): globalThis.Promise<boolean>
    stop_finish(result: Gio.AsyncResult): boolean

    // Class property signals of GoVirt-1.0.GoVirt.Vm

    connect(sigName: "notify::display", callback: (($obj: Vm, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::display", callback: (($obj: Vm, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::display", ...args: any[]): void
    connect(sigName: "notify::href", callback: (($obj: Vm, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::href", callback: (($obj: Vm, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::href", ...args: any[]): void
    connect(sigName: "notify::name", callback: (($obj: Vm, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: Vm, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::state", callback: (($obj: Vm, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::state", callback: (($obj: Vm, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::state", ...args: any[]): void
    connect(sigName: "notify::uuid", callback: (($obj: Vm, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::uuid", callback: (($obj: Vm, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::uuid", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class Vm extends GObject.Object {

    // Own properties of GoVirt-1.0.GoVirt.Vm

    static name: string
    static $gtype: GObject.GType<Vm>

    // Constructors of GoVirt-1.0.GoVirt.Vm

    constructor(config?: Vm.ConstructorProperties) 
    constructor() 
    static new(): Vm
    _init(config?: Vm.ConstructorProperties): void
}

module VmDisplay {

    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of GoVirt-1.0.GoVirt.VmDisplay

        address?: string | null
        expiry?: number | null
        monitor_count?: number | null
        port?: number | null
        secure_port?: number | null
        ticket?: string | null
        type?: VmDisplayType | null
    }

}

interface VmDisplay {

    // Own properties of GoVirt-1.0.GoVirt.VmDisplay

    address: string
    expiry: number
    monitor_count: number
    port: number
    secure_port: number
    ticket: string
    type: VmDisplayType

    // Own fields of GoVirt-1.0.GoVirt.VmDisplay

    parent: GObject.Object
    priv: VmDisplayPrivate

    // Class property signals of GoVirt-1.0.GoVirt.VmDisplay

    connect(sigName: "notify::address", callback: (($obj: VmDisplay, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::address", callback: (($obj: VmDisplay, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::address", ...args: any[]): void
    connect(sigName: "notify::expiry", callback: (($obj: VmDisplay, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::expiry", callback: (($obj: VmDisplay, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::expiry", ...args: any[]): void
    connect(sigName: "notify::monitor-count", callback: (($obj: VmDisplay, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::monitor-count", callback: (($obj: VmDisplay, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::monitor-count", ...args: any[]): void
    connect(sigName: "notify::port", callback: (($obj: VmDisplay, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::port", callback: (($obj: VmDisplay, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::port", ...args: any[]): void
    connect(sigName: "notify::secure-port", callback: (($obj: VmDisplay, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::secure-port", callback: (($obj: VmDisplay, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::secure-port", ...args: any[]): void
    connect(sigName: "notify::ticket", callback: (($obj: VmDisplay, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::ticket", callback: (($obj: VmDisplay, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::ticket", ...args: any[]): void
    connect(sigName: "notify::type", callback: (($obj: VmDisplay, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::type", callback: (($obj: VmDisplay, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::type", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class VmDisplay extends GObject.Object {

    // Own properties of GoVirt-1.0.GoVirt.VmDisplay

    static name: string
    static $gtype: GObject.GType<VmDisplay>

    // Constructors of GoVirt-1.0.GoVirt.VmDisplay

    constructor(config?: VmDisplay.ConstructorProperties) 
    constructor() 
    static new(): VmDisplay
    _init(config?: VmDisplay.ConstructorProperties): void
}

interface ProxyClass {

    // Own fields of GoVirt-1.0.GoVirt.ProxyClass

    parent_class: Rest.ProxyClass
}

abstract class ProxyClass {

    // Own properties of GoVirt-1.0.GoVirt.ProxyClass

    static name: string
}

interface ProxyPrivate {
}

class ProxyPrivate {

    // Own properties of GoVirt-1.0.GoVirt.ProxyPrivate

    static name: string
}

interface VmClass {

    // Own fields of GoVirt-1.0.GoVirt.VmClass

    parent_class: GObject.ObjectClass
    padding: any[]
}

abstract class VmClass {

    // Own properties of GoVirt-1.0.GoVirt.VmClass

    static name: string
}

interface VmDisplayClass {

    // Own fields of GoVirt-1.0.GoVirt.VmDisplayClass

    parent_class: GObject.ObjectClass
    padding: any[]
}

abstract class VmDisplayClass {

    // Own properties of GoVirt-1.0.GoVirt.VmDisplayClass

    static name: string
}

interface VmDisplayPrivate {
}

class VmDisplayPrivate {

    // Own properties of GoVirt-1.0.GoVirt.VmDisplayPrivate

    static name: string
}

interface VmPrivate {
}

class VmPrivate {

    // Own properties of GoVirt-1.0.GoVirt.VmPrivate

    static name: string
}

/**
 * Name of the imported GIR library
 * @see https://gitlab.gnome.org/GNOME/gjs/-/blob/master/gi/ns.cpp#L188
 */
const __name__: string
/**
 * Version of the imported GIR library
 * @see https://gitlab.gnome.org/GNOME/gjs/-/blob/master/gi/ns.cpp#L189
 */
const __version__: string
}

export default GoVirt;
// END