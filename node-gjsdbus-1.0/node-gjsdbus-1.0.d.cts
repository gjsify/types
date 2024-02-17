
/*
 * Type Definitions for node-gtk (https://github.com/romgrk/node-gtk)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/gjsify/ts-for-gir
 */

import './node-gjsdbus-1.0-import.d.ts';
    
/**
 * GjsDBus-1.0
 */

import type Gio from '@girs/node-gio-2.0';
import type GObject from '@girs/node-gobject-2.0';
import type GLib from '@girs/node-glib-2.0';

export module Implementation {

    // Signal callback interfaces

    /**
     * Signal callback interface for `handle-method-call`
     */
    export interface HandleMethodCallSignalCallback {
        (object: string, p0: GLib.Variant, p1: Gio.DBusMethodInvocation): void
    }

    /**
     * Signal callback interface for `handle-property-get`
     */
    export interface HandlePropertyGetSignalCallback {
        (object: string): GLib.Variant
    }

    /**
     * Signal callback interface for `handle-property-set`
     */
    export interface HandlePropertySetSignalCallback {
        (object: string, p0: GLib.Variant): void
    }


    // Constructor properties interface

    export interface ConstructorProperties extends Gio.DBusInterface.ConstructorProperties, Gio.DBusInterfaceSkeleton.ConstructorProperties {

        // Own constructor properties of GjsDBus-1.0.GjsDBus.Implementation

        g_interface_info?: Gio.DBusInterfaceInfo | null
    }

}

export interface Implementation extends Gio.DBusInterface {

    // Own properties of GjsDBus-1.0.GjsDBus.Implementation

    readonly gInterfaceInfo: Gio.DBusInterfaceInfo
    __gtype__: number

    // Own fields of GjsDBus-1.0.GjsDBus.Implementation

    parent: Gio.DBusInterfaceSkeleton
    priv: ImplementationPrivate

    // Owm methods of GjsDBus-1.0.GjsDBus.Implementation

    /**
     * Queue a PropertyChanged signal for emission, or update the one queued
     * adding `property`
     * @param property the name of the property that changed
     * @param newvalue the new value, or %NULL to just invalidate it
     */
    emitPropertyChanged(property: string | null, newvalue?: GLib.Variant | null): void
    /**
     * Emits a signal named `signal_name` from the object and interface represented
     * by `self`. This signal has no destination.
     * @param signalName the name of the signal
     * @param parameters signal parameters, or %NULL for none
     */
    emitSignal(signalName: string | null, parameters?: GLib.Variant | null): void

    // Conflicting methods

    /**
     * Gets D-Bus introspection information for the D-Bus interface
     * implemented by `interface_`.
     * @virtual 
     * @returns A #GDBusInterfaceInfo. Do not free.
     */
    getInfo(): Gio.DBusInterfaceInfo
    /**
     * Gets D-Bus introspection information for the D-Bus interface
     * implemented by `interface_`.
     * @virtual 
     * @returns A #GDBusInterfaceInfo (never %NULL). Do not free.
     */
    getInfo(): Gio.DBusInterfaceInfo

    // Overloads of getInfo

    /**
     * Gets D-Bus introspection information for the D-Bus interface
     * implemented by `interface_`.
     * @virtual 
     * @returns A #GDBusInterfaceInfo. Do not free.
     */
    getInfo(): Gio.DBusInterfaceInfo

    // Own signals of GjsDBus-1.0.GjsDBus.Implementation

    connect(sigName: "handle-method-call", callback: Implementation.HandleMethodCallSignalCallback): number
    on(sigName: "handle-method-call", callback: Implementation.HandleMethodCallSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "handle-method-call", callback: Implementation.HandleMethodCallSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "handle-method-call", callback: Implementation.HandleMethodCallSignalCallback): NodeJS.EventEmitter
    emit(sigName: "handle-method-call", p0: GLib.Variant, p1: Gio.DBusMethodInvocation, ...args: any[]): void
    connect(sigName: "handle-property-get", callback: Implementation.HandlePropertyGetSignalCallback): number
    on(sigName: "handle-property-get", callback: Implementation.HandlePropertyGetSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "handle-property-get", callback: Implementation.HandlePropertyGetSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "handle-property-get", callback: Implementation.HandlePropertyGetSignalCallback): NodeJS.EventEmitter
    emit(sigName: "handle-property-get", ...args: any[]): void
    connect(sigName: "handle-property-set", callback: Implementation.HandlePropertySetSignalCallback): number
    on(sigName: "handle-property-set", callback: Implementation.HandlePropertySetSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "handle-property-set", callback: Implementation.HandlePropertySetSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "handle-property-set", callback: Implementation.HandlePropertySetSignalCallback): NodeJS.EventEmitter
    emit(sigName: "handle-property-set", p0: GLib.Variant, ...args: any[]): void

    // Class property signals of GjsDBus-1.0.GjsDBus.Implementation

    connect(sigName: "notify::g-interface-info", callback: (...args: any[]) => void): number
    on(sigName: "notify::g-interface-info", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::g-interface-info", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::g-interface-info", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::g-interface-info", ...args: any[]): void
    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: "notify::g-flags", callback: (...args: any[]) => void): number
    on(sigName: "notify::g-flags", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::g-flags", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::g-flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::g-flags", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class Implementation extends Gio.DBusInterfaceSkeleton {

    // Own properties of GjsDBus-1.0.GjsDBus.Implementation

    static name: string

    // Constructors of GjsDBus-1.0.GjsDBus.Implementation

    constructor(config?: Implementation.ConstructorProperties) 
    _init(config?: Implementation.ConstructorProperties): void
}

export interface ImplementationClass {

    // Own fields of GjsDBus-1.0.GjsDBus.ImplementationClass

    parentClass: Gio.DBusInterfaceSkeletonClass
}

export abstract class ImplementationClass {

    // Own properties of GjsDBus-1.0.GjsDBus.ImplementationClass

    static name: string
}

export interface ImplementationPrivate {
}

export class ImplementationPrivate {

    // Own properties of GjsDBus-1.0.GjsDBus.ImplementationPrivate

    static name: string
}

// END