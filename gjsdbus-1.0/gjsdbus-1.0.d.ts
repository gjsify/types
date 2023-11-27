
/*
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in `ts-for-gir` or create a bug report on https://github.com/gjsify/ts-for-gir
 */

import './gjsdbus-1.0-ambient.d.ts';
import './gjsdbus-1.0-import.d.ts';
/**
 * GjsDBus-1.0
 */

import type Gio from '@girs/gio-2.0';
import type GObject from '@girs/gobject-2.0';
import type GLib from '@girs/glib-2.0';

export namespace GjsDBus {

module Implementation {

    // Signal callback interfaces

    /**
     * Signal callback interface for `handle-method-call`
     */
    interface HandleMethodCallSignalCallback {
        ($obj: Implementation, object: string, p0: GLib.Variant, p1: Gio.DBusMethodInvocation): void
    }

    /**
     * Signal callback interface for `handle-property-get`
     */
    interface HandlePropertyGetSignalCallback {
        ($obj: Implementation, object: string): GLib.Variant
    }

    /**
     * Signal callback interface for `handle-property-set`
     */
    interface HandlePropertySetSignalCallback {
        ($obj: Implementation, object: string, p0: GLib.Variant): void
    }


    // Constructor properties interface

    interface ConstructorProperties extends Gio.DBusInterface.ConstructorProperties, Gio.DBusInterfaceSkeleton.ConstructorProperties {

        // Own constructor properties of GjsDBus-1.0.GjsDBus.Implementation

        g_interface_info?: Gio.DBusInterfaceInfo | null
        gInterfaceInfo?: Gio.DBusInterfaceInfo | null
    }

}

interface Implementation extends Gio.DBusInterface {

    // Own properties of GjsDBus-1.0.GjsDBus.Implementation

    readonly g_interface_info: Gio.DBusInterfaceInfo
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
    emit_property_changed(property: string | null, newvalue?: GLib.Variant | null): void
    /**
     * Emits a signal named `signal_name` from the object and interface represented
     * by `self`. This signal has no destination.
     * @param signal_name the name of the signal
     * @param parameters signal parameters, or %NULL for none
     */
    emit_signal(signal_name: string | null, parameters?: GLib.Variant | null): void

    // Own signals of GjsDBus-1.0.GjsDBus.Implementation

    connect(sigName: "handle-method-call", callback: Implementation.HandleMethodCallSignalCallback): number
    connect_after(sigName: "handle-method-call", callback: Implementation.HandleMethodCallSignalCallback): number
    emit(sigName: "handle-method-call", object: string, p0: GLib.Variant, p1: Gio.DBusMethodInvocation, ...args: any[]): void
    connect(sigName: "handle-property-get", callback: Implementation.HandlePropertyGetSignalCallback): number
    connect_after(sigName: "handle-property-get", callback: Implementation.HandlePropertyGetSignalCallback): number
    emit(sigName: "handle-property-get", object: string, ...args: any[]): void
    connect(sigName: "handle-property-set", callback: Implementation.HandlePropertySetSignalCallback): number
    connect_after(sigName: "handle-property-set", callback: Implementation.HandlePropertySetSignalCallback): number
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

    constructor(config?: Implementation.ConstructorProperties) 
    _init(config?: Implementation.ConstructorProperties): void
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

export default GjsDBus;
// END