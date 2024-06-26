
/*
 * Type Definitions for node-gtk (https://github.com/romgrk/node-gtk)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/gjsify/ts-for-gir
 */

import './node-vgsl-1-import.d.ts';
    
/**
 * Vgsl-1
 */

import type Vgda from '@girs/node-vgda-1';
import type Vda from '@girs/node-vda-1';
import type GCalc from '@girs/node-gcalc-2';
import type Gio from '@girs/node-gio-2.0';
import type GObject from '@girs/node-gobject-2.0';
import type GLib from '@girs/node-glib-2.0';
import type Gee from '@girs/node-gee-0.8';
import type Json from '@girs/node-json-1.0';
import type GXml from '@girs/node-gxml-0.20';
import type libxml2 from '@girs/node-libxml2-2.0';

export namespace Vgsl {

module Connection {

    // Constructor properties interface

    interface ConstructorProperties extends Vgda.GProvider.ConstructorProperties {
    }

}

interface Connection {

    // Own properties of Vgsl-1.Vgsl.Connection

    __gtype__: number

    // Class property signals of Vgsl-1.Vgsl.Connection

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class Connection extends Vgda.GProvider {

    // Own properties of Vgsl-1.Vgsl.Connection

    static name: string

    // Constructors of Vgsl-1.Vgsl.Connection

    constructor(config?: Connection.ConstructorProperties) 
    constructor() 
    static new(): Connection

    // Overloads of new

    static new(): Vgda.GProvider
    _init(config?: Connection.ConstructorProperties): void
}

interface ConnectionClass {
}

abstract class ConnectionClass {

    // Own properties of Vgsl-1.Vgsl.ConnectionClass

    static name: string
}

interface ConnectionPrivate {
}

class ConnectionPrivate {

    // Own properties of Vgsl-1.Vgsl.ConnectionPrivate

    static name: string
}

}

export default Vgsl;
// END