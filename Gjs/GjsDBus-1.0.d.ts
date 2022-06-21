// @ts-nocheck

/*
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/sammydre/ts-for-gjs
 */
/**
 * GjsDBus-1.0
 */

import type * as Gjs from './Gjs';
import type Gio from './Gio-2.0';
import type GObject from './GObject-2.0';
import type GLib from './GLib-2.0';

export namespace GjsDBus {

interface Implementation_ConstructProps extends Gio.DBusInterface_ConstructProps, Gio.DBusInterfaceSkeleton_ConstructProps {

    // Own constructor properties of GjsDBus-1.0.GjsDBus.Implementation

    g_interface_info?: Gio.DBusInterfaceInfo | null
}

/**
 * Signal callback interface for `handle-method-call`
 */
interface Implementation_HandleMethodCallSignalCallback {
    ($obj: Implementation, object: string, p0: GLib.Variant, p1: Gio.DBusMethodInvocation): void
}

/**
 * Signal callback interface for `handle-property-get`
 */
interface Implementation_HandlePropertyGetSignalCallback {
    ($obj: Implementation, object: string): GLib.Variant
}

/**
 * Signal callback interface for `handle-property-set`
 */
interface Implementation_HandlePropertySetSignalCallback {
    ($obj: Implementation, object: string, p0: GLib.Variant): void
}

interface Implementation extends Gio.DBusInterface {

    // Own properties of GjsDBus-1.0.GjsDBus.Implementation

    readonly g_interface_info: Gio.DBusInterfaceInfo

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
    emit_property_changed(property: string, newvalue?: GLib.Variant | null): void
    /**
     * Emits a signal named `signal_name` from the object and interface represented
     * by `self`. This signal has no destination.
     * @param signal_name the name of the signal
     * @param parameters signal parameters, or %NULL for none
     */
    emit_signal(signal_name: string, parameters?: GLib.Variant | null): void

    // Own signals of GjsDBus-1.0.GjsDBus.Implementation

    connect(sigName: "handle-method-call", callback: Implementation_HandleMethodCallSignalCallback): number
    connect_after(sigName: "handle-method-call", callback: Implementation_HandleMethodCallSignalCallback): number
    emit(sigName: "handle-method-call", object: string, p0: GLib.Variant, p1: Gio.DBusMethodInvocation, ...args: any[]): void
    connect(sigName: "handle-property-get", callback: Implementation_HandlePropertyGetSignalCallback): number
    connect_after(sigName: "handle-property-get", callback: Implementation_HandlePropertyGetSignalCallback): number
    emit(sigName: "handle-property-get", object: string, ...args: any[]): void
    connect(sigName: "handle-property-set", callback: Implementation_HandlePropertySetSignalCallback): number
    connect_after(sigName: "handle-property-set", callback: Implementation_HandlePropertySetSignalCallback): number
    emit(sigName: "handle-property-set", object: string, p0: GLib.Variant, ...args: any[]): void

    // Class property signals of GjsDBus-1.0.GjsDBus.Implementation

    connect(sigName: "notify::g-interface-info", callback: (($obj: Implementation, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-interface-info", callback: (($obj: Implementation, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-interface-info", ...args: any[]): void
    connect(sigName: "notify::g-flags", callback: (($obj: Implementation, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-flags", callback: (($obj: Implementation, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-flags", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
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

    parent_class: Gio.DBusInterfaceSkeletonClass
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