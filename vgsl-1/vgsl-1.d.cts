
/*
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in `ts-for-gir` or create a bug report on https://github.com/gjsify/ts-for-gir
 */
/**
 * Vgsl-1
 */

import type Vgda from '@girs/vgda-1';
import type Vda from '@girs/vda-1';
import type GCalc from '@girs/gcalc-2';
import type Gio from '@girs/gio-2.0';
import type GObject from '@girs/gobject-2.0';
import type GLib from '@girs/glib-2.0';
import type Gee from '@girs/gee-0.8';
import type Json from '@girs/json-1.0';
import type GXml from '@girs/gxml-0.20';
import type libxml2 from '@girs/libxml2-2.0';

export module Connection {

    // Constructor properties interface

    export interface ConstructorProperties extends Vgda.GProvider.ConstructorProperties {
    }

}

export interface Connection {

    // Class property signals of Vgsl-1.Vgsl.Connection

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class Connection extends Vgda.GProvider {

    // Own properties of Vgsl-1.Vgsl.Connection

    static name: string
    static $gtype: GObject.GType<Connection>

    // Constructors of Vgsl-1.Vgsl.Connection

    constructor(config?: Connection.ConstructorProperties) 
    constructor() 
    static new(): Connection

    // Overloads of new

    static new(): Vgda.GProvider
    _init(config?: Connection.ConstructorProperties): void
}

export interface ConnectionClass {
}

export abstract class ConnectionClass {

    // Own properties of Vgsl-1.Vgsl.ConnectionClass

    static name: string
}

export interface ConnectionPrivate {
}

export class ConnectionPrivate {

    // Own properties of Vgsl-1.Vgsl.ConnectionPrivate

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