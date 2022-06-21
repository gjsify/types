// @ts-nocheck

/*
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/sammydre/ts-for-gjs
 */
/**
 * GUPnPIgd-1.0
 */

import type * as Gjs from './Gjs';
import type GObject from './GObject-2.0';
import type GLib from './GLib-2.0';

export namespace GUPnPIgd {

/**
 * Errors coming out of the GUPnPSimpleIGD object.
 */
enum SimpleIgdError {
    /**
     * Error getting the external
     * address of the router
     */
    SIMPLE_IGD_ERROR_EXTERNAL_ADDRESS,
}
interface SimpleIgd_ConstructProps extends GObject.Object_ConstructProps {
}

/**
 * Signal callback interface for `context-available`
 */
interface SimpleIgd_ContextAvailableSignalCallback {
    ($obj: SimpleIgd, context: GObject.Object): boolean
}

/**
 * Signal callback interface for `error-mapping-port`
 */
interface SimpleIgd_ErrorMappingPortSignalCallback {
    ($obj: SimpleIgd, error: GLib.Error, proto: string, external_port: number, local_ip: string, local_port: number, description: string): void
}

/**
 * Signal callback interface for `mapped-external-port`
 */
interface SimpleIgd_MappedExternalPortSignalCallback {
    ($obj: SimpleIgd, proto: string, external_ip: string, replaces_external_ip: string, external_port: number, local_ip: string, local_port: number, description: string): void
}

interface SimpleIgd {

    // Own properties of GUPnPIgd-1.0.GUPnPIgd.SimpleIgd

    readonly main_context: object

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

    connect(sigName: "context-available", callback: SimpleIgd_ContextAvailableSignalCallback): number
    connect_after(sigName: "context-available", callback: SimpleIgd_ContextAvailableSignalCallback): number
    emit(sigName: "context-available", context: GObject.Object, ...args: any[]): void
    connect(sigName: "error-mapping-port", callback: SimpleIgd_ErrorMappingPortSignalCallback): number
    connect_after(sigName: "error-mapping-port", callback: SimpleIgd_ErrorMappingPortSignalCallback): number
    emit(sigName: "error-mapping-port", error: GLib.Error, proto: string, external_port: number, local_ip: string, local_port: number, description: string, ...args: any[]): void
    connect(sigName: "mapped-external-port", callback: SimpleIgd_MappedExternalPortSignalCallback): number
    connect_after(sigName: "mapped-external-port", callback: SimpleIgd_MappedExternalPortSignalCallback): number
    emit(sigName: "mapped-external-port", proto: string, external_ip: string, replaces_external_ip: string, external_port: number, local_ip: string, local_port: number, description: string, ...args: any[]): void

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
class SimpleIgd extends GObject.Object {

    // Own properties of GUPnPIgd-1.0.GUPnPIgd.SimpleIgd

    static name: string
    static $gtype: GObject.GType<SimpleIgd>

    // Constructors of GUPnPIgd-1.0.GUPnPIgd.SimpleIgd

    constructor(config?: SimpleIgd_ConstructProps) 
    /**
     * main context)
     * This creates a new #GUPnpSimpleIgd object using the special GMainContext
     * @constructor 
     */
    constructor() 
    /**
     * main context)
     * This creates a new #GUPnpSimpleIgd object using the special GMainContext
     * @constructor 
     */
    static new(): SimpleIgd
    _init(config?: SimpleIgd_ConstructProps): void
    static error_quark(): GLib.Quark
}

interface SimpleIgdThread_ConstructProps extends SimpleIgd_ConstructProps {
}

interface SimpleIgdThread {

    // Own fields of GUPnPIgd-1.0.GUPnPIgd.SimpleIgdThread

    parent: SimpleIgd

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
class SimpleIgdThread extends SimpleIgd {

    // Own properties of GUPnPIgd-1.0.GUPnPIgd.SimpleIgdThread

    static name: string
    static $gtype: GObject.GType<SimpleIgdThread>

    // Constructors of GUPnPIgd-1.0.GUPnPIgd.SimpleIgdThread

    constructor(config?: SimpleIgdThread_ConstructProps) 
    /**
     * Creates a new #GUPnPSimpleIgdThread
     * @constructor 
     */
    constructor() 
    /**
     * Creates a new #GUPnPSimpleIgdThread
     * @constructor 
     */
    static new(): SimpleIgdThread

    // Overloads of new

    /**
     * main context)
     * This creates a new #GUPnpSimpleIgd object using the special GMainContext
     * @constructor 
     */
    static new(): SimpleIgd
    _init(config?: SimpleIgdThread_ConstructProps): void
}

interface SimpleIgdClass {
}

abstract class SimpleIgdClass {

    // Own properties of GUPnPIgd-1.0.GUPnPIgd.SimpleIgdClass

    static name: string
}

interface SimpleIgdPrivate {
}

class SimpleIgdPrivate {

    // Own properties of GUPnPIgd-1.0.GUPnPIgd.SimpleIgdPrivate

    static name: string
}

interface SimpleIgdThreadClass {
}

/**
 * The Raw UDP component transmitter class
 * @record 
 */
abstract class SimpleIgdThreadClass {

    // Own properties of GUPnPIgd-1.0.GUPnPIgd.SimpleIgdThreadClass

    static name: string
}

interface SimpleIgdThreadPrivate {
}

class SimpleIgdThreadPrivate {

    // Own properties of GUPnPIgd-1.0.GUPnPIgd.SimpleIgdThreadPrivate

    static name: string
}

}
export default GUPnPIgd;