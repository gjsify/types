// @ts-nocheck

/*
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/sammydre/ts-for-gjs
 */
/**
 * Vgpg-1
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
import type Vgda from './Vgda-1';

export namespace Vgpg {

interface Connection_ConstructProps extends Vgda.GProvider_ConstructProps {
}

interface Connection {

    // Owm methods of Vgpg-1.Vgpg.Connection

    current_user(): Vda.Role | null

    // Class property signals of Vgpg-1.Vgpg.Connection

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class Connection extends Vgda.GProvider {

    // Own properties of Vgpg-1.Vgpg.Connection

    static name: string
    static $gtype: GObject.GType<Connection>

    // Constructors of Vgpg-1.Vgpg.Connection

    constructor(config?: Connection_ConstructProps) 
    constructor() 
    static new(): Connection

    // Overloads of new

    static new(): Vgda.GProvider
    _init(config?: Connection_ConstructProps): void
}

interface ConnectionClass {
}

abstract class ConnectionClass {

    // Own properties of Vgpg-1.Vgpg.ConnectionClass

    static name: string
}

interface ConnectionPrivate {
}

class ConnectionPrivate {

    // Own properties of Vgpg-1.Vgpg.ConnectionPrivate

    static name: string
}

}
export default Vgpg;