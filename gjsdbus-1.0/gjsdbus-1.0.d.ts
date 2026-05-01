
/**
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in `ts-for-gir` or create a bug report on https://github.com/gjsify/ts-for-gir
 *
 * The based EJS template file is used for the generated .d.ts file of each GIR module like Gtk-4.0, GObject-2.0, ...
 */

import '@girs/gjs';

// Module dependencies
import type Gio from '@girs/gio-2.0';
import type GObject from '@girs/gobject-2.0';
import type GLib from '@girs/glib-2.0';
import type GModule from '@girs/gmodule-2.0';

export namespace GjsDBus {

    /**
     * GjsDBus-1.0
     */


    namespace Implementation {
        // Signal signatures
        interface SignalSignatures extends Gio.DBusInterfaceSkeleton.SignalSignatures {
            /**
             * @signal
             */
            "handle-method-call": (arg0: string, arg1: GLib.Variant, arg2: Gio.DBusMethodInvocation) => void;
            /**
             * @signal
             */
            "handle-property-get": (arg0: string) => GLib.Variant;
            /**
             * @signal
             */
            "handle-property-set": (arg0: string, arg1: GLib.Variant) => void;
            "notify::g-interface-info": (pspec: GObject.ParamSpec) => void;
            "notify::g-flags": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends Gio.DBusInterfaceSkeleton.ConstructorProps, Gio.DBusInterface.ConstructorProps {
            g_interface_info: Gio.DBusInterfaceInfo;
            gInterfaceInfo: Gio.DBusInterfaceInfo;
        }
    }

    /**
     * @gir-type Class
     */
    class Implementation extends Gio.DBusInterfaceSkeleton implements Gio.DBusInterface {
        static $gtype: GObject.GType<Implementation>;

        // Properties
        /**
         * @construct-only
         */
        set g_interface_info(val: Gio.DBusInterfaceInfo);

        /**
         * @construct-only
         */
        set gInterfaceInfo(val: Gio.DBusInterfaceInfo);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Implementation.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<Implementation.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals
        /** @signal */
        connect<K extends keyof Implementation.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Implementation.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof Implementation.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Implementation.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof Implementation.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<Implementation.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Methods
        /**
         * Queue a PropertyChanged signal for emission, or update the one queued
         * adding `property`
         * @param property the name of the property that changed
         * @param newvalue the new value, or `null` to just invalidate it
         */
        emit_property_changed(property: string, newvalue: GLib.Variant): void;

        /**
         * Emits a signal named `signal_name` from the object and interface represented
         * by `self`. This signal has no destination.
         * @param signal_name the name of the signal
         * @param parameters signal parameters, or `null` for none
         */
        emit_signal(signal_name: string, parameters: GLib.Variant): void;

        /**
         * Gets the {@link Gio.DBusObject} that `interface_` belongs to, if any.
         * @returns A {@link Gio.DBusObject} or `null`. The returned reference should be freed with `g_object_unref()`.
         */
        get_object(): (Gio.DBusObject | null);

        /**
         * Gets D-Bus introspection information for the D-Bus interface
         * implemented by `interface_`.
         * @returns A {@link Gio.DBusInterfaceInfo}. Do not free.
         */
        get_info(): Gio.DBusInterfaceInfo;

        /**
         * Sets the {@link Gio.DBusObject} for `interface_` to `object`.
         * 
         * Note that `interface_` will hold a weak reference to `object`.
         * @param object A {@link Gio.DBusObject} or `null`.
         */
        set_object(object: (Gio.DBusObject | null)): void;

        /**
         * Gets the {@link Gio.DBusObject} that `interface_` belongs to, if any.
         * @virtual
         */
        vfunc_dup_object(): (Gio.DBusObject | null);

        /**
         * Gets D-Bus introspection information for the D-Bus interface
         * implemented by `interface_`.
         * @virtual
         */
        vfunc_get_info(): Gio.DBusInterfaceInfo;

        /**
         * Sets the {@link Gio.DBusObject} for `interface_` to `object`.
         * 
         * Note that `interface_` will hold a weak reference to `object`.
         * @param object A {@link Gio.DBusObject} or `null`.
         * @virtual
         */
        vfunc_set_object(object: (Gio.DBusObject | null)): void;
    }


    /**
     * @gir-type Alias
     */
    type ImplementationClass = typeof Implementation;

    /**
     * @gir-type Struct
     */
    abstract class ImplementationPrivate {
        static $gtype: GObject.GType<ImplementationPrivate>;
    }


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
