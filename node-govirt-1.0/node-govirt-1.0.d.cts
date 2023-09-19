
/*
 * Type Definitions for node-gtk (https://github.com/romgrk/node-gtk)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/gjsify/ts-for-gir
 */

import './node-govirt-1.0-import.d.ts';
    
/**
 * GoVirt-1.0
 */

import type Rest from '@girs/node-rest-0.7';
import type Soup from '@girs/node-soup-2.4';
import type Gio from '@girs/node-gio-2.0';
import type GObject from '@girs/node-gobject-2.0';
import type GLib from '@girs/node-glib-2.0';

export enum ProxyError {
    PARSING_FAILED,
    ACTION_FAILED,
    FAULT,
}
export enum RestCallError {
    XML,
}
export enum VmDisplayType {
    SPICE,
    VNC,
}
export enum VmState {
    DOWN,
    UP,
    REBOOTING,
}
export function proxyErrorQuark(): GLib.Quark
export function restCallErrorQuark(): GLib.Quark
export module Proxy {

    // Constructor properties interface

    export interface ConstructorProperties extends Rest.Proxy.ConstructorProperties {

        // Own constructor properties of GoVirt-1.0.GoVirt.Proxy

        admin?: boolean | null
        caCert?: any[] | null
    }

}

export interface Proxy {

    // Own properties of GoVirt-1.0.GoVirt.Proxy

    admin: boolean
    caCert: any[]
    __gtype__: number

    // Own fields of GoVirt-1.0.GoVirt.Proxy

    parent: Rest.Proxy & GObject.Object
    priv: ProxyPrivate

    // Owm methods of GoVirt-1.0.GoVirt.Proxy

    fetchCaCertificate(): boolean
    fetchCaCertificateAsync(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    fetchCaCertificateFinish(result: Gio.AsyncResult): number[]
    fetchVms(): boolean
    fetchVmsAsync(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    fetchVmsFinish(result: Gio.AsyncResult): Vm[]
    /**
     * Gets the list of remote VMs from the proxy object.
     * This method does not initiate any network activity, the remote VM list
     * must have been fetched with ovirt_proxy_fetch_vms() or
     * ovirt_proxy_fetch_vms_async() before calling this function.
     * @returns the list of #OvirtVm associated with #OvirtProxy. The returned list should not be freed nor modified, and can become invalid any time a #OvirtProxy call completes.
     */
    getVms(): Vm[]
    /**
     * Looks up a virtual machine whose name is `name`. If it cannot be found,
     * NULL is returned. This method does not initiate any network activity,
     * the remote VM list must have been fetched with ovirt_proxy_fetch_vms()
     * or ovirt_proxy_fetch_vms_async() before calling this function.
     * @param vmName name of the virtual machine to lookup
     * @returns a #OvirtVm whose name is @name or NULL
     */
    lookupVm(vmName: string | null): Vm

    // Class property signals of GoVirt-1.0.GoVirt.Proxy

    connect(sigName: "notify::admin", callback: (...args: any[]) => void): number
    on(sigName: "notify::admin", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::admin", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::admin", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::admin", ...args: any[]): void
    connect(sigName: "notify::ca-cert", callback: (...args: any[]) => void): number
    on(sigName: "notify::ca-cert", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::ca-cert", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::ca-cert", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::ca-cert", ...args: any[]): void
    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: "notify::binding-required", callback: (...args: any[]) => void): number
    on(sigName: "notify::binding-required", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::binding-required", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::binding-required", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::binding-required", ...args: any[]): void
    connect(sigName: "notify::disable-cookies", callback: (...args: any[]) => void): number
    on(sigName: "notify::disable-cookies", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::disable-cookies", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::disable-cookies", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::disable-cookies", ...args: any[]): void
    connect(sigName: "notify::password", callback: (...args: any[]) => void): number
    on(sigName: "notify::password", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::password", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::password", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::password", ...args: any[]): void
    connect(sigName: "notify::ssl-ca-file", callback: (...args: any[]) => void): number
    on(sigName: "notify::ssl-ca-file", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::ssl-ca-file", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::ssl-ca-file", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::ssl-ca-file", ...args: any[]): void
    connect(sigName: "notify::ssl-strict", callback: (...args: any[]) => void): number
    on(sigName: "notify::ssl-strict", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::ssl-strict", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::ssl-strict", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::ssl-strict", ...args: any[]): void
    connect(sigName: "notify::url-format", callback: (...args: any[]) => void): number
    on(sigName: "notify::url-format", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::url-format", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::url-format", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::url-format", ...args: any[]): void
    connect(sigName: "notify::user-agent", callback: (...args: any[]) => void): number
    on(sigName: "notify::user-agent", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::user-agent", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::user-agent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::user-agent", ...args: any[]): void
    connect(sigName: "notify::username", callback: (...args: any[]) => void): number
    on(sigName: "notify::username", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::username", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::username", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::username", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class Proxy extends Rest.Proxy {

    // Own properties of GoVirt-1.0.GoVirt.Proxy

    static name: string

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
     * @param urlFormat the endpoint URL
     * @param bindingRequired whether the URL needs to be bound before calling
     * @returns A new #RestProxy.
     */
    static new(urlFormat: string | null, bindingRequired: boolean): Rest.Proxy
    _init(config?: Proxy.ConstructorProperties): void
}

export module Vm {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of GoVirt-1.0.GoVirt.Vm

        display?: VmDisplay | null
        href?: string | null
        name?: string | null
        state?: VmState | null
        uuid?: string | null
    }

}

export interface Vm {

    // Own properties of GoVirt-1.0.GoVirt.Vm

    display: VmDisplay
    href: string
    name: string
    state: VmState
    uuid: string
    __gtype__: number

    // Own fields of GoVirt-1.0.GoVirt.Vm

    parent: GObject.Object
    priv: VmPrivate

    // Owm methods of GoVirt-1.0.GoVirt.Vm

    getTicket(proxy: Proxy): boolean
    getTicketAsync(proxy: Proxy, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    getTicketFinish(result: Gio.AsyncResult): boolean
    start(proxy: Proxy): boolean
    startAsync(proxy: Proxy, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    startFinish(result: Gio.AsyncResult): boolean
    stop(proxy: Proxy): boolean
    stopAsync(proxy: Proxy, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    stopFinish(result: Gio.AsyncResult): boolean

    // Class property signals of GoVirt-1.0.GoVirt.Vm

    connect(sigName: "notify::display", callback: (...args: any[]) => void): number
    on(sigName: "notify::display", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::display", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::display", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::display", ...args: any[]): void
    connect(sigName: "notify::href", callback: (...args: any[]) => void): number
    on(sigName: "notify::href", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::href", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::href", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::href", ...args: any[]): void
    connect(sigName: "notify::name", callback: (...args: any[]) => void): number
    on(sigName: "notify::name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::state", callback: (...args: any[]) => void): number
    on(sigName: "notify::state", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::state", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::state", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::state", ...args: any[]): void
    connect(sigName: "notify::uuid", callback: (...args: any[]) => void): number
    on(sigName: "notify::uuid", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::uuid", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::uuid", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::uuid", ...args: any[]): void
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

export class Vm extends GObject.Object {

    // Own properties of GoVirt-1.0.GoVirt.Vm

    static name: string

    // Constructors of GoVirt-1.0.GoVirt.Vm

    constructor(config?: Vm.ConstructorProperties) 
    constructor() 
    static new(): Vm
    _init(config?: Vm.ConstructorProperties): void
}

export module VmDisplay {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of GoVirt-1.0.GoVirt.VmDisplay

        address?: string | null
        expiry?: number | null
        monitorCount?: number | null
        port?: number | null
        securePort?: number | null
        ticket?: string | null
        type?: VmDisplayType | null
    }

}

export interface VmDisplay {

    // Own properties of GoVirt-1.0.GoVirt.VmDisplay

    address: string
    expiry: number
    monitorCount: number
    port: number
    securePort: number
    ticket: string
    type: VmDisplayType
    __gtype__: number

    // Own fields of GoVirt-1.0.GoVirt.VmDisplay

    parent: GObject.Object
    priv: VmDisplayPrivate

    // Class property signals of GoVirt-1.0.GoVirt.VmDisplay

    connect(sigName: "notify::address", callback: (...args: any[]) => void): number
    on(sigName: "notify::address", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::address", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::address", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::address", ...args: any[]): void
    connect(sigName: "notify::expiry", callback: (...args: any[]) => void): number
    on(sigName: "notify::expiry", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::expiry", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::expiry", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::expiry", ...args: any[]): void
    connect(sigName: "notify::monitor-count", callback: (...args: any[]) => void): number
    on(sigName: "notify::monitor-count", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::monitor-count", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::monitor-count", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::monitor-count", ...args: any[]): void
    connect(sigName: "notify::port", callback: (...args: any[]) => void): number
    on(sigName: "notify::port", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::port", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::port", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::port", ...args: any[]): void
    connect(sigName: "notify::secure-port", callback: (...args: any[]) => void): number
    on(sigName: "notify::secure-port", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::secure-port", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::secure-port", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::secure-port", ...args: any[]): void
    connect(sigName: "notify::ticket", callback: (...args: any[]) => void): number
    on(sigName: "notify::ticket", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::ticket", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::ticket", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::ticket", ...args: any[]): void
    connect(sigName: "notify::type", callback: (...args: any[]) => void): number
    on(sigName: "notify::type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::type", ...args: any[]): void
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

export class VmDisplay extends GObject.Object {

    // Own properties of GoVirt-1.0.GoVirt.VmDisplay

    static name: string

    // Constructors of GoVirt-1.0.GoVirt.VmDisplay

    constructor(config?: VmDisplay.ConstructorProperties) 
    constructor() 
    static new(): VmDisplay
    _init(config?: VmDisplay.ConstructorProperties): void
}

export interface ProxyClass {

    // Own fields of GoVirt-1.0.GoVirt.ProxyClass

    parentClass: Rest.ProxyClass
}

export abstract class ProxyClass {

    // Own properties of GoVirt-1.0.GoVirt.ProxyClass

    static name: string
}

export interface ProxyPrivate {
}

export class ProxyPrivate {

    // Own properties of GoVirt-1.0.GoVirt.ProxyPrivate

    static name: string
}

export interface VmClass {

    // Own fields of GoVirt-1.0.GoVirt.VmClass

    parentClass: GObject.ObjectClass
    padding: any[]
}

export abstract class VmClass {

    // Own properties of GoVirt-1.0.GoVirt.VmClass

    static name: string
}

export interface VmDisplayClass {

    // Own fields of GoVirt-1.0.GoVirt.VmDisplayClass

    parentClass: GObject.ObjectClass
    padding: any[]
}

export abstract class VmDisplayClass {

    // Own properties of GoVirt-1.0.GoVirt.VmDisplayClass

    static name: string
}

export interface VmDisplayPrivate {
}

export class VmDisplayPrivate {

    // Own properties of GoVirt-1.0.GoVirt.VmDisplayPrivate

    static name: string
}

export interface VmPrivate {
}

export class VmPrivate {

    // Own properties of GoVirt-1.0.GoVirt.VmPrivate

    static name: string
}

// END