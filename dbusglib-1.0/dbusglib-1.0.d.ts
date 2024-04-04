/*
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in `ts-for-gir` or create a bug report on https://github.com/gjsify/ts-for-gir
 */

import './dbusglib-1.0-ambient.d.ts';

/**
 * DBusGLib-1.0
 */

import type GObject from '@girs/gobject-2.0';
import type GLib from '@girs/glib-2.0';

export namespace DBusGLib {
    module Proxy {
        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    class Proxy extends GObject.Object {
        static $gtype: GObject.GType<Proxy>;

        // Constructors of DBusGLib.Proxy

        constructor(properties?: Partial<Proxy.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;
    }

    class Connection {
        static $gtype: GObject.GType<Connection>;

        // Constructors of DBusGLib.Connection

        _init(...args: any[]): void;
    }

    class MethodInvocation {
        static $gtype: GObject.GType<MethodInvocation>;

        // Constructors of DBusGLib.MethodInvocation

        _init(...args: any[]): void;
    }

    class ProxyClass {
        static $gtype: GObject.GType<ProxyClass>;

        // Constructors of DBusGLib.ProxyClass

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
