// @ts-nocheck

/*
 * Type Definitions for node-gtk (https://github.com/romgrk/node-gtk)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/sammydre/ts-for-gjs
 */
/**
 * GjsDBus-1.0
 */

import type Gio from './Gio-2.0';
import type GObject from './GObject-2.0';
import type GLib from './GLib-2.0';

export namespace GjsDBus {

interface Implementation_ConstructProps extends Gio.DBusInterface_ConstructProps, Gio.DBusInterfaceSkeleton_ConstructProps {

    // Own constructor properties of GjsDBus-1.0.GjsDBus.Implementation

    gInterfaceInfo?: Gio.DBusInterfaceInfo | null
}

/**
 * Signal callback interface for `handle-method-call`
 */
interface Implementation_HandleMethodCallSignalCallback {
    (object: string, p0: GLib.Variant, p1: Gio.DBusMethodInvocation): void
}

/**
 * Signal callback interface for `handle-property-get`
 */
interface Implementation_HandlePropertyGetSignalCallback {
    (object: string): GLib.Variant
}

/**
 * Signal callback interface for `handle-property-set`
 */
interface Implementation_HandlePropertySetSignalCallback {
    (object: string, p0: GLib.Variant): void
}

interface Implementation extends Gio.DBusInterface {

    // Own properties of GjsDBus-1.0.GjsDBus.Implementation

    readonly gInterfaceInfo: Gio.DBusInterfaceInfo

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
    emitPropertyChanged(property: string, newvalue?: GLib.Variant | null): void
    /**
     * Emits a signal named `signal_name` from the object and interface represented
     * by `self`. This signal has no destination.
     * @param signalName the name of the signal
     * @param parameters signal parameters, or %NULL for none
     */
    emitSignal(signalName: string, parameters?: GLib.Variant | null): void

    // Own signals of GjsDBus-1.0.GjsDBus.Implementation

    connect(sigName: "handle-method-call", callback: Implementation_HandleMethodCallSignalCallback): number
    on(sigName: "handle-method-call", callback: Implementation_HandleMethodCallSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "handle-method-call", callback: Implementation_HandleMethodCallSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "handle-method-call", callback: Implementation_HandleMethodCallSignalCallback): NodeJS.EventEmitter
    emit(sigName: "handle-method-call", p0: GLib.Variant, p1: Gio.DBusMethodInvocation, ...args: any[]): void
    connect(sigName: "handle-property-get", callback: Implementation_HandlePropertyGetSignalCallback): number
    on(sigName: "handle-property-get", callback: Implementation_HandlePropertyGetSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "handle-property-get", callback: Implementation_HandlePropertyGetSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "handle-property-get", callback: Implementation_HandlePropertyGetSignalCallback): NodeJS.EventEmitter
    emit(sigName: "handle-property-get", ...args: any[]): void
    connect(sigName: "handle-property-set", callback: Implementation_HandlePropertySetSignalCallback): number
    on(sigName: "handle-property-set", callback: Implementation_HandlePropertySetSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "handle-property-set", callback: Implementation_HandlePropertySetSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "handle-property-set", callback: Implementation_HandlePropertySetSignalCallback): NodeJS.EventEmitter
    emit(sigName: "handle-property-set", p0: GLib.Variant, ...args: any[]): void

    // Class property signals of GjsDBus-1.0.GjsDBus.Implementation

    connect(sigName: "notify::g-interface-info", callback: (...args: any[]) => void): number
    on(sigName: "notify::g-interface-info", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::g-interface-info", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::g-interface-info", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::g-interface-info", ...args: any[]): void
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
}

class Implementation extends Gio.DBusInterfaceSkeleton {

    // Own properties of GjsDBus-1.0.GjsDBus.Implementation

    static name: string
    static $gtype: GObject.GType<Implementation>

    // Constructors of GjsDBus-1.0.GjsDBus.Implementation

    constructor(config?: Implementation_ConstructProps) 
    _init(config?: Implementation_ConstructProps): void
}

interface ImplementationClass {

    // Own fields of GjsDBus-1.0.GjsDBus.ImplementationClass

    parentClass: Gio.DBusInterfaceSkeletonClass
}

abstract class ImplementationClass {

    // Own properties of GjsDBus-1.0.GjsDBus.ImplementationClass

    static name: string
}

interface ImplementationPrivate {
}

class ImplementationPrivate {

    // Own properties of GjsDBus-1.0.GjsDBus.ImplementationPrivate

    static name: string
}

}
export default GjsDBus;