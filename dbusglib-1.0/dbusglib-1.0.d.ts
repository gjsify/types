
/*
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in `ts-for-gir` or create a bug report on https://github.com/gjsify/ts-for-gir
 */

import './dbusglib-1.0-ambient.d.ts';
import './dbusglib-1.0-import.d.ts';
/**
 * DBusGLib-1.0
 */

import type GObject from '@girs/gobject-2.0';
import type GLib from '@girs/glib-2.0';

export namespace DBusGLib {

module Proxy {

    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

interface Proxy {

    // Class property signals of DBusGLib-1.0.DBusGLib.Proxy

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class Proxy extends GObject.Object {

    // Own properties of DBusGLib-1.0.DBusGLib.Proxy

    static name: string
    static $gtype: GObject.GType<Proxy>

    // Constructors of DBusGLib-1.0.DBusGLib.Proxy

    constructor(config?: Proxy.ConstructorProperties) 
    _init(config?: Proxy.ConstructorProperties): void
}

interface Connection {
}

class Connection {

    // Own properties of DBusGLib-1.0.DBusGLib.Connection

    static name: string
}

interface MethodInvocation {
}

class MethodInvocation {

    // Own properties of DBusGLib-1.0.DBusGLib.MethodInvocation

    static name: string
}

interface ProxyClass {
}

class ProxyClass {

    // Own properties of DBusGLib-1.0.DBusGLib.ProxyClass

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

export default DBusGLib;
// END