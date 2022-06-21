// @ts-nocheck

/*
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/sammydre/ts-for-gjs
 */
/**
 * Vgda-1
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

export namespace Vgda {

interface GProvider_ConstructProps extends Vda.Connection_ConstructProps, GObject.Object_ConstructProps {
}

interface GProvider extends Vda.Connection {

    // Own fields of Vgda-1.Vgda.GProvider

    _provider: string
    _cnc_string: string

    // Class property signals of Vgda-1.Vgda.GProvider

    connect(sigName: "notify::status", callback: (($obj: GProvider, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::status", callback: (($obj: GProvider, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::status", ...args: any[]): void
    connect(sigName: "notify::parameters", callback: (($obj: GProvider, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parameters", callback: (($obj: GProvider, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::parameters", ...args: any[]): void
    connect(sigName: "notify::is-opened", callback: (($obj: GProvider, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-opened", callback: (($obj: GProvider, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::is-opened", ...args: any[]): void
    connect(sigName: "notify::connection-string", callback: (($obj: GProvider, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::connection-string", callback: (($obj: GProvider, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::connection-string", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class GProvider extends GObject.Object {

    // Own properties of Vgda-1.Vgda.GProvider

    static name: string
    static $gtype: GObject.GType<GProvider>

    // Constructors of Vgda-1.Vgda.GProvider

    constructor(config?: GProvider_ConstructProps) 
    constructor() 
    static new(): GProvider
    _init(config?: GProvider_ConstructProps): void
}

interface GProviderClass {
}

abstract class GProviderClass {

    // Own properties of Vgda-1.Vgda.GProviderClass

    static name: string
}

interface GProviderPrivate {
}

class GProviderPrivate {

    // Own properties of Vgda-1.Vgda.GProviderPrivate

    static name: string
}

}
export default Vgda;