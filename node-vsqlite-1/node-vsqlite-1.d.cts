
/*
 * Type Definitions for node-gtk (https://github.com/romgrk/node-gtk)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/gjsify/ts-for-gir
 */
/**
 * Vsqlite-1
 */

import type Vda from '@girs/vda-1';
import type GCalc from '@girs/gcalc-2';
import type Gio from '@girs/gio-2.0';
import type GObject from '@girs/gobject-2.0';
import type GLib from '@girs/glib-2.0';
import type Gee from '@girs/gee-0.8';
import type Json from '@girs/json-1.0';
import type GXml from '@girs/gxml-0.20';
import type libxml2 from '@girs/libxml2-2.0';

export enum ConnectionError {
    INVALID_FILE_ERROR,
}
export module Connection {

    // Constructor properties interface

    export interface ConstructorProperties extends Vda.Connection.ConstructorProperties, GObject.Object.ConstructorProperties {
    }

}

export interface Connection extends Vda.Connection {

    // Own properties of Vsqlite-1.Vsqlite.Connection

    __gtype__: number

    // Owm methods of Vsqlite-1.Vsqlite.Connection

    typeToGtype(t: number): GObject.GType

    // Class property signals of Vsqlite-1.Vsqlite.Connection

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: "notify::status", callback: (...args: any[]) => void): number
    on(sigName: "notify::status", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::status", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::status", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::status", ...args: any[]): void
    connect(sigName: "notify::parameters", callback: (...args: any[]) => void): number
    on(sigName: "notify::parameters", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::parameters", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::parameters", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::parameters", ...args: any[]): void
    connect(sigName: "notify::is-opened", callback: (...args: any[]) => void): number
    on(sigName: "notify::is-opened", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::is-opened", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::is-opened", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::is-opened", ...args: any[]): void
    connect(sigName: "notify::connection-string", callback: (...args: any[]) => void): number
    on(sigName: "notify::connection-string", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::connection-string", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::connection-string", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::connection-string", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

export class Connection extends GObject.Object {

    // Own properties of Vsqlite-1.Vsqlite.Connection

    static name: string

    // Constructors of Vsqlite-1.Vsqlite.Connection

    constructor(config?: Connection.ConstructorProperties) 
    constructor() 
    static new(): Connection
    _init(config?: Connection.ConstructorProperties): void
}

export interface ConnectionClass {
}

export abstract class ConnectionClass {

    // Own properties of Vsqlite-1.Vsqlite.ConnectionClass

    static name: string
}

export interface ConnectionPrivate {
}

export class ConnectionPrivate {

    // Own properties of Vsqlite-1.Vsqlite.ConnectionPrivate

    static name: string
}
