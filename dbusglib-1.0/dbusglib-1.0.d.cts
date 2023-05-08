
/*
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in `ts-for-gir` or create a bug report on https://github.com/gjsify/ts-for-gir
 */
/**
 * DBusGLib-1.0
 */

import type GObject from '@girs/gobject-2.0';
import type GLib from '@girs/glib-2.0';

export module Proxy {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

export interface Proxy {

    // Class property signals of DBusGLib-1.0.DBusGLib.Proxy

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class Proxy extends GObject.Object {

    // Own properties of DBusGLib-1.0.DBusGLib.Proxy

    static name: string
    static $gtype: GObject.GType<Proxy>

    // Constructors of DBusGLib-1.0.DBusGLib.Proxy

    constructor(config?: Proxy.ConstructorProperties) 
    _init(config?: Proxy.ConstructorProperties): void
}

export interface Connection {
}

export class Connection {

    // Own properties of DBusGLib-1.0.DBusGLib.Connection

    static name: string
}

export interface MethodInvocation {
}

export class MethodInvocation {

    // Own properties of DBusGLib-1.0.DBusGLib.MethodInvocation

    static name: string
}

export interface ProxyClass {
}

export class ProxyClass {

    // Own properties of DBusGLib-1.0.DBusGLib.ProxyClass

    static name: string
}

/**
 * Name of the imported GIR library
 * @see https://gitlab.gnome.org/GNOME/gjs/-/blob/master/gi/ns.cpp#L188
 */
export const __name__: string
/**
 * Version of the imported GIR library
 * @see https://gitlab.gnome.org/GNOME/gjs/-/blob/master/gi/ns.cpp#L189
 */
export const __version__: string
// END