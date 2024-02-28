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

        interface HandleMethodCall {
            (object: string, p0: GLib.Variant, p1: Gio.DBusMethodInvocation): void;
        }

        interface HandlePropertyGet {
            (object: string): GLib.Variant;
        }

        interface HandlePropertySet {
            (object: string, p0: GLib.Variant): void;
        }

        // Constructor properties interface
    }

    class Implementation extends Gio.DBusInterfaceSkeleton {
        // Own properties of GjsDBus-1.0.Implementation

        g_interface_info: Gio.DBusInterfaceInfo;
        gInterfaceInfo: Gio.DBusInterfaceInfo;

        // Owm methods of GjsDBus-1.0.Implementation

        /**
         * Queue a PropertyChanged signal for emission, or update the one queued
         * adding `property`
         * @param property the name of the property that changed
         * @param newvalue the new value, or %NULL to just invalidate it
         */
        emit_property_changed(property: string, newvalue: GLib.Variant): void;
        /**
         * Emits a signal named `signal_name` from the object and interface represented
         * by `self`. This signal has no destination.
         * @param signal_name the name of the signal
         * @param parameters signal parameters, or %NULL for none
         */
        emit_signal(signal_name: string, parameters: GLib.Variant): void;
    }

    class ImplementationClass {}

    class ImplementationPrivate {}

    /**
     * Name of the imported GIR library
     * `see` https://gitlab.gnome.org/GNOME/gjs/-/blob/master/gi/ns.cpp#L188
     */
    const __name__: string;
    /**
     * Version of the imported GIR library
     * `see` https://gitlab.gnome.org/GNOME/gjs/-/blob/master/gi/ns.cpp#L189
     */
    const __version__: string;
}

export default GjsDBus;
// END
