
/*
 * Type Definitions for node-gtk (https://github.com/romgrk/node-gtk)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/gjsify/ts-for-gir
 */

import './node-shew-0-import.d.ts';
    
/**
 * Shew-0
 */

import type Gtk from '@girs/node-gtk-4.0';
import type Gsk from '@girs/node-gsk-4.0';
import type Graphene from '@girs/node-graphene-1.0';
import type GObject from '@girs/node-gobject-2.0';
import type GLib from '@girs/node-glib-2.0';
import type Gdk from '@girs/node-gdk-4.0';
import type cairo from '@girs/node-cairo-1.0';
import type PangoCairo from '@girs/node-pangocairo-1.0';
import type Pango from '@girs/node-pango-1.0';
import type HarfBuzz from '@girs/node-harfbuzz-0.0';
import type freetype2 from '@girs/node-freetype2-2.0';
import type Gio from '@girs/node-gio-2.0';
import type GdkPixbuf from '@girs/node-gdkpixbuf-2.0';
import type GModule from '@girs/node-gmodule-2.0';

export module ExternalWindow {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of Shew-0.Shew.ExternalWindow

        display?: Gdk.Display | null
    }

}

export interface ExternalWindow {

    // Own properties of Shew-0.Shew.ExternalWindow

    readonly display: Gdk.Display
    __gtype__: number

    // Own fields of Shew-0.Shew.ExternalWindow

    parentInstance: GObject.Object

    // Owm methods of Shew-0.Shew.ExternalWindow

    getDisplay(): Gdk.Display
    // Has conflict: setParentOf(childSurface: Gdk.Surface): void

    // Own virtual methods of Shew-0.Shew.ExternalWindow

    setParentOf(childSurface: Gdk.Surface): void

    // Class property signals of Shew-0.Shew.ExternalWindow

    connect(sigName: "notify::display", callback: (...args: any[]) => void): number
    on(sigName: "notify::display", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::display", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::display", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::display", ...args: any[]): void
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

export class ExternalWindow extends GObject.Object {

    // Own properties of Shew-0.Shew.ExternalWindow

    static name: string

    // Constructors of Shew-0.Shew.ExternalWindow

    constructor(config?: ExternalWindow.ConstructorProperties) 
    static newFromHandle(handleStr: string): ExternalWindow
    _init(config?: ExternalWindow.ConstructorProperties): void
}

export module WindowExporter {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of Shew-0.Shew.WindowExporter

        window?: Gtk.Window | null
    }

}

export interface WindowExporter {

    // Own properties of Shew-0.Shew.WindowExporter

    readonly window: Gtk.Window
    __gtype__: number

    // Owm methods of Shew-0.Shew.WindowExporter

    export(callback: Gio.AsyncReadyCallback | null): void
    exportFinish(result: Gio.AsyncResult): string | null
    unexport(handle: string): void

    // Class property signals of Shew-0.Shew.WindowExporter

    connect(sigName: "notify::window", callback: (...args: any[]) => void): number
    on(sigName: "notify::window", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::window", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::window", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::window", ...args: any[]): void
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

export class WindowExporter extends GObject.Object {

    // Own properties of Shew-0.Shew.WindowExporter

    static name: string

    // Constructors of Shew-0.Shew.WindowExporter

    constructor(config?: WindowExporter.ConstructorProperties) 
    constructor(window: Gtk.Window) 
    static new(window: Gtk.Window): WindowExporter
    _init(config?: WindowExporter.ConstructorProperties): void
}

export interface ExternalWindowClass {

    // Own fields of Shew-0.Shew.ExternalWindowClass

    parentClass: GObject.ObjectClass
    setParentOf: (externalWindow: ExternalWindow, childSurface: Gdk.Surface) => void
}

export abstract class ExternalWindowClass {

    // Own properties of Shew-0.Shew.ExternalWindowClass

    static name: string
}

export interface WindowExporterClass {

    // Own fields of Shew-0.Shew.WindowExporterClass

    parentClass: GObject.ObjectClass
}

export abstract class WindowExporterClass {

    // Own properties of Shew-0.Shew.WindowExporterClass

    static name: string
}

// END