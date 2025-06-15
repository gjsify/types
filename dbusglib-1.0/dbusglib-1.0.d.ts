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
import type GObject from '@girs/gobject-2.0';
import type GLib from '@girs/glib-2.0';

export namespace DBusGLib {
    /**
     * DBusGLib-1.0
     */

    namespace Proxy {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    class Proxy extends GObject.Object {
        static $gtype: GObject.GType<Proxy>;

        // Constructors

        constructor(properties?: Partial<Proxy.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        connect<K extends keyof Proxy.SignalSignatures>(signal: K, callback: Proxy.SignalSignatures[K]): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof Proxy.SignalSignatures>(signal: K, callback: Proxy.SignalSignatures[K]): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof Proxy.SignalSignatures>(
            signal: K,
            ...args: Proxy.SignalSignatures[K] extends (...args: infer P) => any ? P : never
        ): void;
        emit(signal: string, ...args: any[]): void;
    }

    class Connection {
        static $gtype: GObject.GType<Connection>;

        // Constructors

        _init(...args: any[]): void;
    }

    class MethodInvocation {
        static $gtype: GObject.GType<MethodInvocation>;

        // Constructors

        _init(...args: any[]): void;
    }

    class ProxyClass {
        static $gtype: GObject.GType<ProxyClass>;

        // Constructors

        _init(...args: any[]): void;
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

export default DBusGLib;

// END
