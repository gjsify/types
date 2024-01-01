
/*
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in `ts-for-gir` or create a bug report on https://github.com/gjsify/ts-for-gir
 */

import './gupnpigd-1.0-ambient.d.ts';
import './gupnpigd-1.0-import.d.ts';
/**
 * GUPnPIgd-1.0
 */

import type GObject from '@girs/gobject-2.0';
import type GLib from '@girs/glib-2.0';

/**
 * Errors coming out of the GUPnPSimpleIGD object.
 */
export enum SimpleIgdError {
    /**
     * Error getting the external
     * address of the router
     */
    SIMPLE_IGD_ERROR_EXTERNAL_ADDRESS,
}
export module SimpleIgd {

    // Signal callback interfaces

    /**
     * Signal callback interface for `context-available`
     */
    export interface ContextAvailableSignalCallback {
        ($obj: SimpleIgd, context: GObject.Object): boolean
    }

    /**
     * Signal callback interface for `error-mapping-port`
     */
    export interface ErrorMappingPortSignalCallback {
        ($obj: SimpleIgd, error: GLib.Error, proto: string | null, external_port: number, local_ip: string | null, local_port: number, description: string | null): void
    }

    /**
     * Signal callback interface for `mapped-external-port`
     */
    export interface MappedExternalPortSignalCallback {
        ($obj: SimpleIgd, proto: string | null, external_ip: string | null, replaces_external_ip: string | null, external_port: number, local_ip: string | null, local_port: number, description: string | null): void
    }


    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

export interface SimpleIgd {

    // Own properties of GUPnPIgd-1.0.GUPnPIgd.SimpleIgd

    readonly main_context: any
    readonly mainContext: any

    // Own fields of GUPnPIgd-1.0.GUPnPIgd.SimpleIgd

    parent: GObject.Object

    // Owm methods of GUPnPIgd-1.0.GUPnPIgd.SimpleIgd

    /**
     * This adds a port to the router's forwarding table. The mapping will
     * be automatically refreshed by this object until it is either
     * removed with gupnp_simple_igd_remove_port(),
     * gupnp_simple_igd_remove_port_local() or the object disapears.
     * 
     * If there is a problem, the #GUPnPSimpleIgd::error-mapping-port signal will
     * be emitted. If a router is found and a port is mapped correctly,
     * #GUPnPSimpleIgd::mapped-external-port will be emitted. These signals may
     * be emitted multiple times if there are multiple routers present.
     * @param protocol the protocol "UDP" or "TCP"
     * @param external_port The port to try to open on the external device,   0 means to try a random port if the same port as the local port is already   taken
     * @param local_ip The IP address to forward packets to (most likely the local ip address)
     * @param local_port The local port to forward packets to
     * @param lease_duration The duration of the lease (it will be auto-renewed before it expires). This is in seconds.
     * @param description The description that will appear in the router's table
     */
    add_port(protocol: string, external_port: number, local_ip: string, local_port: number, lease_duration: number, description: string): void
    /**
     * Removes all mappings and prevents other from being formed
     * Should only be called by the dispose function of subclasses
     * @returns %TRUE if the object can be disposed, %FALSE otherwise
     */
    delete_all_mappings(): boolean
    /**
     * This tries to remove a port entry from the routers that was previously added
     * with gupnp_simple_igd_add_port(). There is no indicated of success or failure
     * it is a best effort mechanism. If it fails, the bindings will disapears after
     * the lease duration set when the port where added.
     * @param protocol the protocol "UDP" or "TCP" as given to  gupnp_simple_igd_add_port()
     * @param external_port The port to try to open on the external device as given to  gupnp_simple_igd_add_port()
     */
    remove_port(protocol: string, external_port: number): void
    /**
     * This tries to remove a port entry from the routers that was previously added
     * with gupnp_simple_igd_add_port(). There is no indicated of success or failure
     * it is a best effort mechanism. If it fails, the bindings will disapears after
     * the lease duration set when the port where added.
     * @param protocol the protocol "UDP" or "TCP" as given to  gupnp_simple_igd_add_port()
     * @param local_ip The local ip on the internal device as was to  gupnp_simple_igd_add_port()
     * @param local_port The port to try to open on the internal device as given to  gupnp_simple_igd_add_port()
     */
    remove_port_local(protocol: string, local_ip: string, local_port: number): void

    // Own signals of GUPnPIgd-1.0.GUPnPIgd.SimpleIgd

    connect(sigName: "context-available", callback: SimpleIgd.ContextAvailableSignalCallback): number
    connect_after(sigName: "context-available", callback: SimpleIgd.ContextAvailableSignalCallback): number
    emit(sigName: "context-available", context: GObject.Object, ...args: any[]): void
    connect(sigName: "error-mapping-port", callback: SimpleIgd.ErrorMappingPortSignalCallback): number
    connect_after(sigName: "error-mapping-port", callback: SimpleIgd.ErrorMappingPortSignalCallback): number
    emit(sigName: "error-mapping-port", error: GLib.Error, proto: string | null, external_port: number, local_ip: string | null, local_port: number, description: string | null, ...args: any[]): void
    connect(sigName: "mapped-external-port", callback: SimpleIgd.MappedExternalPortSignalCallback): number
    connect_after(sigName: "mapped-external-port", callback: SimpleIgd.MappedExternalPortSignalCallback): number
    emit(sigName: "mapped-external-port", proto: string | null, external_ip: string | null, replaces_external_ip: string | null, external_port: number, local_ip: string | null, local_port: number, description: string | null, ...args: any[]): void

    // Class property signals of GUPnPIgd-1.0.GUPnPIgd.SimpleIgd

    connect(sigName: "notify::main-context", callback: (($obj: SimpleIgd, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::main-context", callback: (($obj: SimpleIgd, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::main-context", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * All members are private, access them using methods and properties
 * @class 
 */
export class SimpleIgd extends GObject.Object {

    // Own properties of GUPnPIgd-1.0.GUPnPIgd.SimpleIgd

    static name: string
    static $gtype: GObject.GType<SimpleIgd>

    // Constructors of GUPnPIgd-1.0.GUPnPIgd.SimpleIgd

    constructor(config?: SimpleIgd.ConstructorProperties) 
    /**
     * main context)
     * This creates a new #GUPnpSimpleIgd object using the special GMainContext
     * @constructor 
     * @returns a new #GUPnPSimpleIgd
     */
    constructor() 
    /**
     * main context)
     * This creates a new #GUPnpSimpleIgd object using the special GMainContext
     * @constructor 
     * @returns a new #GUPnPSimpleIgd
     */
    static new(): SimpleIgd
    _init(config?: SimpleIgd.ConstructorProperties): void
    static error_quark(): GLib.Quark
}

export module SimpleIgdThread {

    // Constructor properties interface

    export interface ConstructorProperties extends SimpleIgd.ConstructorProperties {
    }

}

export interface SimpleIgdThread {

    // Own fields of GUPnPIgd-1.0.GUPnPIgd.SimpleIgdThread

    parent: SimpleIgd & GObject.Object

    // Class property signals of GUPnPIgd-1.0.GUPnPIgd.SimpleIgdThread

    connect(sigName: "notify::main-context", callback: (($obj: SimpleIgdThread, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::main-context", callback: (($obj: SimpleIgdThread, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::main-context", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * All members are private, access them using methods and properties
 * @class 
 */
export class SimpleIgdThread extends SimpleIgd {

    // Own properties of GUPnPIgd-1.0.GUPnPIgd.SimpleIgdThread

    static name: string
    static $gtype: GObject.GType<SimpleIgdThread>

    // Constructors of GUPnPIgd-1.0.GUPnPIgd.SimpleIgdThread

    constructor(config?: SimpleIgdThread.ConstructorProperties) 
    /**
     * Creates a new #GUPnPSimpleIgdThread
     * @constructor 
     * @returns the new #GUPnPSimpleIgdThread
     */
    constructor() 
    /**
     * Creates a new #GUPnPSimpleIgdThread
     * @constructor 
     * @returns the new #GUPnPSimpleIgdThread
     */
    static new(): SimpleIgdThread

    // Overloads of new

    /**
     * main context)
     * This creates a new #GUPnpSimpleIgd object using the special GMainContext
     * @constructor 
     * @returns a new #GUPnPSimpleIgd
     */
    static new(): SimpleIgd
    _init(config?: SimpleIgdThread.ConstructorProperties): void
}

export interface SimpleIgdClass {
}

export abstract class SimpleIgdClass {

    // Own properties of GUPnPIgd-1.0.GUPnPIgd.SimpleIgdClass

    static name: string
}

export interface SimpleIgdPrivate {
}

export class SimpleIgdPrivate {

    // Own properties of GUPnPIgd-1.0.GUPnPIgd.SimpleIgdPrivate

    static name: string
}

export interface SimpleIgdThreadClass {
}

/**
 * The Raw UDP component transmitter class
 * @record 
 */
export abstract class SimpleIgdThreadClass {

    // Own properties of GUPnPIgd-1.0.GUPnPIgd.SimpleIgdThreadClass

    static name: string
}

export interface SimpleIgdThreadPrivate {
}

export class SimpleIgdThreadPrivate {

    // Own properties of GUPnPIgd-1.0.GUPnPIgd.SimpleIgdThreadPrivate

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