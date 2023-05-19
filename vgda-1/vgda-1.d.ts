
/*
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in `ts-for-gir` or create a bug report on https://github.com/gjsify/ts-for-gir
 */

import './vgda-1-ambient.d.ts';
import './vgda-1-import.d.ts';
/**
 * Vgda-1
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

export namespace Vgda {

module GProvider {

    // Constructor properties interface

    interface ConstructorProperties extends Vda.Connection.ConstructorProperties, GObject.Object.ConstructorProperties {
    }

}

interface GProvider extends Vda.Connection {

    // Own fields of Vgda-1.Vgda.GProvider

    _provider: string | null
    _cnc_string: string | null

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

    constructor(config?: GProvider.ConstructorProperties) 
    constructor() 
    static new(): GProvider
    _init(config?: GProvider.ConstructorProperties): void
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

export default Vgda;
// END