
/*
 * Type Definitions for node-gtk (https://github.com/romgrk/node-gtk)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/gjsify/ts-for-gir
 */

import './node-vgpg-1-import.d.ts';
    
/**
 * Vgpg-1
 */

import type Vda from '@girs/node-vda-1';
import type GCalc from '@girs/node-gcalc-2';
import type Gio from '@girs/node-gio-2.0';
import type GObject from '@girs/node-gobject-2.0';
import type GLib from '@girs/node-glib-2.0';
import type Gee from '@girs/node-gee-0.8';
import type Json from '@girs/node-json-1.0';
import type GXml from '@girs/node-gxml-0.20';
import type libxml2 from '@girs/node-libxml2-2.0';
import type Vgda from '@girs/node-vgda-1';

export module Connection {

    // Constructor properties interface

    export interface ConstructorProperties extends Vgda.GProvider.ConstructorProperties {
    }

}

export interface Connection {

    // Own properties of Vgpg-1.Vgpg.Connection

    __gtype__: number

    // Owm methods of Vgpg-1.Vgpg.Connection

    currentUser(): Vda.Role | null

    // Class property signals of Vgpg-1.Vgpg.Connection

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
}

export class Connection extends Vgda.GProvider {

    // Own properties of Vgpg-1.Vgpg.Connection

    static name: string

    // Constructors of Vgpg-1.Vgpg.Connection

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

    // Own properties of Vgpg-1.Vgpg.ConnectionClass

    static name: string
}

export interface ConnectionPrivate {
}

export class ConnectionPrivate {

    // Own properties of Vgpg-1.Vgpg.ConnectionPrivate

    static name: string
}

// END