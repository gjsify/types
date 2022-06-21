// @ts-nocheck

/*
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/sammydre/ts-for-gjs
 */
/**
 * Vsqlite-1
 */

import type * as Gjs from './Gjs';
import type Vda from './Vda-1';
import type GCalc from './GCalc-2';
import type Gio from './Gio-2.0';
import type GObject from './GObject-2.0';
import type GLib from './GLib-2.0';
import type Gee from './Gee-0.8';
import type Json from './Json-1.0';
import type GXml from './GXml-0.20';
import type libxml2 from './libxml2-2.0';

export namespace Vsqlite {

enum ConnectionError {
    INVALID_FILE_ERROR,
}
interface Connection_ConstructProps extends Vda.Connection_ConstructProps, GObject.Object_ConstructProps {
}

interface Connection extends Vda.Connection {

    // Owm methods of Vsqlite-1.Vsqlite.Connection

    type_to_gtype(t: number): GObject.GType

    // Class property signals of Vsqlite-1.Vsqlite.Connection

    connect(sigName: "notify::status", callback: (($obj: Connection, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::status", callback: (($obj: Connection, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::status", ...args: any[]): void
    connect(sigName: "notify::parameters", callback: (($obj: Connection, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parameters", callback: (($obj: Connection, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::parameters", ...args: any[]): void
    connect(sigName: "notify::is-opened", callback: (($obj: Connection, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-opened", callback: (($obj: Connection, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::is-opened", ...args: any[]): void
    connect(sigName: "notify::connection-string", callback: (($obj: Connection, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::connection-string", callback: (($obj: Connection, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::connection-string", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class Connection extends GObject.Object {

    // Own properties of Vsqlite-1.Vsqlite.Connection

    static name: string
    static $gtype: GObject.GType<Connection>

    // Constructors of Vsqlite-1.Vsqlite.Connection

    constructor(config?: Connection_ConstructProps) 
    constructor() 
    static new(): Connection
    _init(config?: Connection_ConstructProps): void
}

interface ConnectionClass {
}

abstract class ConnectionClass {

    // Own properties of Vsqlite-1.Vsqlite.ConnectionClass

    static name: string
}

interface ConnectionPrivate {
}

class ConnectionPrivate {

    // Own properties of Vsqlite-1.Vsqlite.ConnectionPrivate

    static name: string
}

}
export default Vsqlite;