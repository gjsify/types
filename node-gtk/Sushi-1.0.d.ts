// @ts-nocheck

/*
 * Type Definitions for node-gtk (https://github.com/romgrk/node-gtk)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/sammydre/ts-for-gjs
 */
/**
 * Sushi-1.0
 */

import type xlib from './xlib-2.0';
import type libxml2 from './libxml2-2.0';
import type freetype2 from './freetype2-2.0';
import type fontconfig from './fontconfig-2.0';
import type cairo from './cairo-1.0';
import type PangoFT2 from './PangoFT2-1.0';
import type PangoFc from './PangoFc-1.0';
import type Pango from './Pango-1.0';
import type HarfBuzz from './HarfBuzz-0.0';
import type GObject from './GObject-2.0';
import type GLib from './GLib-2.0';
import type PangoCairo from './PangoCairo-1.0';
import type Json from './Json-1.0';
import type Gio from './Gio-2.0';
import type GtkSource from './GtkSource-3.0';
import type Gtk from './Gtk-3.0';
import type Gdk from './Gdk-3.0';
import type GdkPixbuf from './GdkPixbuf-2.0';
import type GModule from './GModule-2.0';
import type Atk from './Atk-1.0';
import type GstTag from './GstTag-0.10';
import type Gst from './Gst-0.10';
import type GstPbutils from './GstPbutils-0.10';
import type GstBase from './GstBase-0.10';
import type GL from './GL-1.0';
import type EvinceDocument from './EvinceDocument-3.0';
import type CoglPango from './CoglPango-1.0';
import type Cogl from './Cogl-1.0';
import type Clutter from './Clutter-1.0';

export namespace Sushi {

enum SoundPlayerState {
    UNKNOWN,
    IDLE,
    PLAYING,
    DONE,
    ERROR,
}
function createForeignWindow(xid: number): Gdk.Window
function createRoundedBackground(): Clutter.Actor
function querySupportedDocumentTypes(): string[]
interface CoverArtFetcher_ConstructProps extends GObject.Object_ConstructProps {

    // Own constructor properties of Sushi-1.0.Sushi.CoverArtFetcher

    taglist?: Gst.TagList | null
}

interface CoverArtFetcher {

    // Own properties of Sushi-1.0.Sushi.CoverArtFetcher

    readonly cover: GdkPixbuf.Pixbuf
    taglist: Gst.TagList

    // Own fields of Sushi-1.0.Sushi.CoverArtFetcher

    parentInstance: GObject.Object
    priv: CoverArtFetcherPrivate

    // Class property signals of Sushi-1.0.Sushi.CoverArtFetcher

    connect(sigName: "notify::cover", callback: (...args: any[]) => void): number
    on(sigName: "notify::cover", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::cover", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::cover", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::cover", ...args: any[]): void
    connect(sigName: "notify::taglist", callback: (...args: any[]) => void): number
    on(sigName: "notify::taglist", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::taglist", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::taglist", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::taglist", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class CoverArtFetcher extends GObject.Object {

    // Own properties of Sushi-1.0.Sushi.CoverArtFetcher

    static name: string
    static $gtype: GObject.GType<CoverArtFetcher>

    // Constructors of Sushi-1.0.Sushi.CoverArtFetcher

    constructor(config?: CoverArtFetcher_ConstructProps) 
    constructor(taglist: Gst.TagList) 
    static new(taglist: Gst.TagList): CoverArtFetcher
    _init(config?: CoverArtFetcher_ConstructProps): void
}

interface FileLoader_ConstructProps extends GObject.Object_ConstructProps {

    // Own constructor properties of Sushi-1.0.Sushi.FileLoader

    file?: Gio.File | null
}

interface FileLoader {

    // Own properties of Sushi-1.0.Sushi.FileLoader

    readonly contentType: string
    file: Gio.File
    readonly icon: GdkPixbuf.Pixbuf
    readonly name: string
    readonly size: string
    readonly time: string

    // Own fields of Sushi-1.0.Sushi.FileLoader

    parentInstance: GObject.Object
    priv: FileLoaderPrivate

    // Owm methods of Sushi-1.0.Sushi.FileLoader

    getContentTypeString(): string
    getDateString(): string
    getDisplayName(): string
    getIcon(): GdkPixbuf.Pixbuf
    getLoading(): boolean
    getSizeString(): string
    stop(): void

    // Class property signals of Sushi-1.0.Sushi.FileLoader

    connect(sigName: "notify::content-type", callback: (...args: any[]) => void): number
    on(sigName: "notify::content-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::content-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::content-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::content-type", ...args: any[]): void
    connect(sigName: "notify::file", callback: (...args: any[]) => void): number
    on(sigName: "notify::file", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::file", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::file", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::file", ...args: any[]): void
    connect(sigName: "notify::icon", callback: (...args: any[]) => void): number
    on(sigName: "notify::icon", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::icon", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::icon", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::icon", ...args: any[]): void
    connect(sigName: "notify::name", callback: (...args: any[]) => void): number
    on(sigName: "notify::name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::size", callback: (...args: any[]) => void): number
    on(sigName: "notify::size", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::size", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::size", ...args: any[]): void
    connect(sigName: "notify::time", callback: (...args: any[]) => void): number
    on(sigName: "notify::time", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::time", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::time", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::time", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class FileLoader extends GObject.Object {

    // Own properties of Sushi-1.0.Sushi.FileLoader

    static name: string
    static $gtype: GObject.GType<FileLoader>

    // Constructors of Sushi-1.0.Sushi.FileLoader

    constructor(config?: FileLoader_ConstructProps) 
    constructor(file: Gio.File) 
    static new(file: Gio.File): FileLoader
    _init(config?: FileLoader_ConstructProps): void
}

interface FontWidget_ConstructProps extends Atk.ImplementorIface_ConstructProps, Gtk.Buildable_ConstructProps, Gtk.DrawingArea_ConstructProps {

    // Own constructor properties of Sushi-1.0.Sushi.FontWidget

    uri?: string | null
}

/**
 * Signal callback interface for `loaded`
 */
interface FontWidget_LoadedSignalCallback {
    (): void
}

interface FontWidget extends Atk.ImplementorIface, Gtk.Buildable {

    // Own properties of Sushi-1.0.Sushi.FontWidget

    uri: string

    // Own fields of Sushi-1.0.Sushi.FontWidget

    parentInstance: Gtk.DrawingArea
    priv: FontWidgetPrivate

    // Own signals of Sushi-1.0.Sushi.FontWidget

    connect(sigName: "loaded", callback: FontWidget_LoadedSignalCallback): number
    on(sigName: "loaded", callback: FontWidget_LoadedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "loaded", callback: FontWidget_LoadedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "loaded", callback: FontWidget_LoadedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "loaded", ...args: any[]): void

    // Class property signals of Sushi-1.0.Sushi.FontWidget

    connect(sigName: "notify::uri", callback: (...args: any[]) => void): number
    on(sigName: "notify::uri", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::uri", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::uri", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::uri", ...args: any[]): void
    connect(sigName: "notify::app-paintable", callback: (...args: any[]) => void): number
    on(sigName: "notify::app-paintable", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::app-paintable", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::app-paintable", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::app-paintable", ...args: any[]): void
    connect(sigName: "notify::can-default", callback: (...args: any[]) => void): number
    on(sigName: "notify::can-default", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::can-default", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::can-default", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::can-default", ...args: any[]): void
    connect(sigName: "notify::can-focus", callback: (...args: any[]) => void): number
    on(sigName: "notify::can-focus", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::can-focus", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::can-focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::can-focus", ...args: any[]): void
    connect(sigName: "notify::composite-child", callback: (...args: any[]) => void): number
    on(sigName: "notify::composite-child", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::composite-child", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::composite-child", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::composite-child", ...args: any[]): void
    connect(sigName: "notify::double-buffered", callback: (...args: any[]) => void): number
    on(sigName: "notify::double-buffered", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::double-buffered", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::double-buffered", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::double-buffered", ...args: any[]): void
    connect(sigName: "notify::events", callback: (...args: any[]) => void): number
    on(sigName: "notify::events", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::events", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::events", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::events", ...args: any[]): void
    connect(sigName: "notify::expand", callback: (...args: any[]) => void): number
    on(sigName: "notify::expand", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::expand", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::expand", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::expand", ...args: any[]): void
    connect(sigName: "notify::focus-on-click", callback: (...args: any[]) => void): number
    on(sigName: "notify::focus-on-click", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::focus-on-click", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::focus-on-click", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::focus-on-click", ...args: any[]): void
    connect(sigName: "notify::halign", callback: (...args: any[]) => void): number
    on(sigName: "notify::halign", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::halign", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::halign", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::halign", ...args: any[]): void
    connect(sigName: "notify::has-default", callback: (...args: any[]) => void): number
    on(sigName: "notify::has-default", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::has-default", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::has-default", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::has-default", ...args: any[]): void
    connect(sigName: "notify::has-focus", callback: (...args: any[]) => void): number
    on(sigName: "notify::has-focus", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::has-focus", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::has-focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::has-focus", ...args: any[]): void
    connect(sigName: "notify::has-tooltip", callback: (...args: any[]) => void): number
    on(sigName: "notify::has-tooltip", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::has-tooltip", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::has-tooltip", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::has-tooltip", ...args: any[]): void
    connect(sigName: "notify::height-request", callback: (...args: any[]) => void): number
    on(sigName: "notify::height-request", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::height-request", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::height-request", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::height-request", ...args: any[]): void
    connect(sigName: "notify::hexpand", callback: (...args: any[]) => void): number
    on(sigName: "notify::hexpand", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::hexpand", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::hexpand", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::hexpand", ...args: any[]): void
    connect(sigName: "notify::hexpand-set", callback: (...args: any[]) => void): number
    on(sigName: "notify::hexpand-set", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::hexpand-set", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::hexpand-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::hexpand-set", ...args: any[]): void
    connect(sigName: "notify::is-focus", callback: (...args: any[]) => void): number
    on(sigName: "notify::is-focus", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::is-focus", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::is-focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::is-focus", ...args: any[]): void
    connect(sigName: "notify::margin", callback: (...args: any[]) => void): number
    on(sigName: "notify::margin", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::margin", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::margin", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::margin", ...args: any[]): void
    connect(sigName: "notify::margin-bottom", callback: (...args: any[]) => void): number
    on(sigName: "notify::margin-bottom", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::margin-bottom", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::margin-bottom", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::margin-bottom", ...args: any[]): void
    connect(sigName: "notify::margin-end", callback: (...args: any[]) => void): number
    on(sigName: "notify::margin-end", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::margin-end", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::margin-end", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::margin-end", ...args: any[]): void
    connect(sigName: "notify::margin-left", callback: (...args: any[]) => void): number
    on(sigName: "notify::margin-left", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::margin-left", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::margin-left", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::margin-left", ...args: any[]): void
    connect(sigName: "notify::margin-right", callback: (...args: any[]) => void): number
    on(sigName: "notify::margin-right", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::margin-right", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::margin-right", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::margin-right", ...args: any[]): void
    connect(sigName: "notify::margin-start", callback: (...args: any[]) => void): number
    on(sigName: "notify::margin-start", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::margin-start", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::margin-start", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::margin-start", ...args: any[]): void
    connect(sigName: "notify::margin-top", callback: (...args: any[]) => void): number
    on(sigName: "notify::margin-top", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::margin-top", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::margin-top", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::margin-top", ...args: any[]): void
    connect(sigName: "notify::name", callback: (...args: any[]) => void): number
    on(sigName: "notify::name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::no-show-all", callback: (...args: any[]) => void): number
    on(sigName: "notify::no-show-all", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::no-show-all", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::no-show-all", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::no-show-all", ...args: any[]): void
    connect(sigName: "notify::opacity", callback: (...args: any[]) => void): number
    on(sigName: "notify::opacity", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::opacity", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::opacity", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::opacity", ...args: any[]): void
    connect(sigName: "notify::parent", callback: (...args: any[]) => void): number
    on(sigName: "notify::parent", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::parent", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::parent", ...args: any[]): void
    connect(sigName: "notify::receives-default", callback: (...args: any[]) => void): number
    on(sigName: "notify::receives-default", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::receives-default", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::receives-default", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::receives-default", ...args: any[]): void
    connect(sigName: "notify::scale-factor", callback: (...args: any[]) => void): number
    on(sigName: "notify::scale-factor", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::scale-factor", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::scale-factor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::scale-factor", ...args: any[]): void
    connect(sigName: "notify::sensitive", callback: (...args: any[]) => void): number
    on(sigName: "notify::sensitive", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::sensitive", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::sensitive", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::sensitive", ...args: any[]): void
    connect(sigName: "notify::style", callback: (...args: any[]) => void): number
    on(sigName: "notify::style", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::style", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::style", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::style", ...args: any[]): void
    connect(sigName: "notify::tooltip-markup", callback: (...args: any[]) => void): number
    on(sigName: "notify::tooltip-markup", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::tooltip-markup", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::tooltip-markup", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::tooltip-markup", ...args: any[]): void
    connect(sigName: "notify::tooltip-text", callback: (...args: any[]) => void): number
    on(sigName: "notify::tooltip-text", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::tooltip-text", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::tooltip-text", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::tooltip-text", ...args: any[]): void
    connect(sigName: "notify::valign", callback: (...args: any[]) => void): number
    on(sigName: "notify::valign", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::valign", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::valign", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::valign", ...args: any[]): void
    connect(sigName: "notify::vexpand", callback: (...args: any[]) => void): number
    on(sigName: "notify::vexpand", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::vexpand", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::vexpand", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::vexpand", ...args: any[]): void
    connect(sigName: "notify::vexpand-set", callback: (...args: any[]) => void): number
    on(sigName: "notify::vexpand-set", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::vexpand-set", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::vexpand-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::vexpand-set", ...args: any[]): void
    connect(sigName: "notify::visible", callback: (...args: any[]) => void): number
    on(sigName: "notify::visible", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::visible", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::visible", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::visible", ...args: any[]): void
    connect(sigName: "notify::width-request", callback: (...args: any[]) => void): number
    on(sigName: "notify::width-request", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::width-request", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::width-request", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::width-request", ...args: any[]): void
    connect(sigName: "notify::window", callback: (...args: any[]) => void): number
    on(sigName: "notify::window", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::window", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::window", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::window", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class FontWidget extends Gtk.DrawingArea {

    // Own properties of Sushi-1.0.Sushi.FontWidget

    static name: string
    static $gtype: GObject.GType<FontWidget>

    // Constructors of Sushi-1.0.Sushi.FontWidget

    constructor(config?: FontWidget_ConstructProps) 
    constructor(uri: string) 
    static new(uri: string): FontWidget

    // Overloads of new

    /**
     * Creates a new drawing area.
     * @constructor 
     */
    static new(): Gtk.DrawingArea
    _init(config?: FontWidget_ConstructProps): void
}

interface PdfLoader_ConstructProps extends GObject.Object_ConstructProps {

    // Own constructor properties of Sushi-1.0.Sushi.PdfLoader

    uri?: string | null
}

interface PdfLoader {

    // Own properties of Sushi-1.0.Sushi.PdfLoader

    readonly document: EvinceDocument.Document
    uri: string

    // Own fields of Sushi-1.0.Sushi.PdfLoader

    parentInstance: GObject.Object
    priv: PdfLoaderPrivate

    // Owm methods of Sushi-1.0.Sushi.PdfLoader

    cleanupDocument(): void
    getMaxPageSize(): [ /* width */ number, /* height */ number ]

    // Class property signals of Sushi-1.0.Sushi.PdfLoader

    connect(sigName: "notify::document", callback: (...args: any[]) => void): number
    on(sigName: "notify::document", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::document", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::document", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::document", ...args: any[]): void
    connect(sigName: "notify::uri", callback: (...args: any[]) => void): number
    on(sigName: "notify::uri", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::uri", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::uri", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::uri", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class PdfLoader extends GObject.Object {

    // Own properties of Sushi-1.0.Sushi.PdfLoader

    static name: string
    static $gtype: GObject.GType<PdfLoader>

    // Constructors of Sushi-1.0.Sushi.PdfLoader

    constructor(config?: PdfLoader_ConstructProps) 
    constructor(uri: string) 
    static new(uri: string): PdfLoader
    _init(config?: PdfLoader_ConstructProps): void
}

interface SoundPlayer_ConstructProps extends GObject.Object_ConstructProps {

    // Own constructor properties of Sushi-1.0.Sushi.SoundPlayer

    playing?: boolean | null
    progress?: number | null
    uri?: string | null
}

interface SoundPlayer {

    // Own properties of Sushi-1.0.Sushi.SoundPlayer

    readonly duration: number
    playing: boolean
    progress: number
    readonly state: SoundPlayerState
    readonly taglist: Gst.TagList
    uri: string

    // Own fields of Sushi-1.0.Sushi.SoundPlayer

    parentInstance: GObject.Object
    priv: SoundPlayerPrivate

    // Class property signals of Sushi-1.0.Sushi.SoundPlayer

    connect(sigName: "notify::duration", callback: (...args: any[]) => void): number
    on(sigName: "notify::duration", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::duration", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::duration", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::duration", ...args: any[]): void
    connect(sigName: "notify::playing", callback: (...args: any[]) => void): number
    on(sigName: "notify::playing", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::playing", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::playing", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::playing", ...args: any[]): void
    connect(sigName: "notify::progress", callback: (...args: any[]) => void): number
    on(sigName: "notify::progress", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::progress", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::progress", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::progress", ...args: any[]): void
    connect(sigName: "notify::state", callback: (...args: any[]) => void): number
    on(sigName: "notify::state", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::state", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::state", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::state", ...args: any[]): void
    connect(sigName: "notify::taglist", callback: (...args: any[]) => void): number
    on(sigName: "notify::taglist", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::taglist", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::taglist", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::taglist", ...args: any[]): void
    connect(sigName: "notify::uri", callback: (...args: any[]) => void): number
    on(sigName: "notify::uri", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::uri", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::uri", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::uri", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class SoundPlayer extends GObject.Object {

    // Own properties of Sushi-1.0.Sushi.SoundPlayer

    static name: string
    static $gtype: GObject.GType<SoundPlayer>

    // Constructors of Sushi-1.0.Sushi.SoundPlayer

    constructor(config?: SoundPlayer_ConstructProps) 
    _init(config?: SoundPlayer_ConstructProps): void
}

interface TextLoader_ConstructProps extends GObject.Object_ConstructProps {

    // Own constructor properties of Sushi-1.0.Sushi.TextLoader

    uri?: string | null
}

/**
 * Signal callback interface for `loaded`
 */
interface TextLoader_LoadedSignalCallback {
    (object: GtkSource.Buffer): void
}

interface TextLoader {

    // Own properties of Sushi-1.0.Sushi.TextLoader

    uri: string

    // Own fields of Sushi-1.0.Sushi.TextLoader

    parentInstance: GObject.Object
    priv: TextLoaderPrivate

    // Own signals of Sushi-1.0.Sushi.TextLoader

    connect(sigName: "loaded", callback: TextLoader_LoadedSignalCallback): number
    on(sigName: "loaded", callback: TextLoader_LoadedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "loaded", callback: TextLoader_LoadedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "loaded", callback: TextLoader_LoadedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "loaded", ...args: any[]): void

    // Class property signals of Sushi-1.0.Sushi.TextLoader

    connect(sigName: "notify::uri", callback: (...args: any[]) => void): number
    on(sigName: "notify::uri", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::uri", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::uri", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::uri", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class TextLoader extends GObject.Object {

    // Own properties of Sushi-1.0.Sushi.TextLoader

    static name: string
    static $gtype: GObject.GType<TextLoader>

    // Constructors of Sushi-1.0.Sushi.TextLoader

    constructor(config?: TextLoader_ConstructProps) 
    constructor(uri: string) 
    static new(uri: string): TextLoader
    _init(config?: TextLoader_ConstructProps): void
}

interface CoverArtFetcherClass {

    // Own fields of Sushi-1.0.Sushi.CoverArtFetcherClass

    parentClass: GObject.ObjectClass
}

abstract class CoverArtFetcherClass {

    // Own properties of Sushi-1.0.Sushi.CoverArtFetcherClass

    static name: string
}

interface CoverArtFetcherPrivate {
}

class CoverArtFetcherPrivate {

    // Own properties of Sushi-1.0.Sushi.CoverArtFetcherPrivate

    static name: string
}

interface FileLoaderClass {

    // Own fields of Sushi-1.0.Sushi.FileLoaderClass

    parentClass: GObject.ObjectClass
}

abstract class FileLoaderClass {

    // Own properties of Sushi-1.0.Sushi.FileLoaderClass

    static name: string
}

interface FileLoaderPrivate {
}

class FileLoaderPrivate {

    // Own properties of Sushi-1.0.Sushi.FileLoaderPrivate

    static name: string
}

interface FontWidgetClass {

    // Own fields of Sushi-1.0.Sushi.FontWidgetClass

    parentClass: Gtk.DrawingAreaClass
}

abstract class FontWidgetClass {

    // Own properties of Sushi-1.0.Sushi.FontWidgetClass

    static name: string
}

interface FontWidgetPrivate {
}

class FontWidgetPrivate {

    // Own properties of Sushi-1.0.Sushi.FontWidgetPrivate

    static name: string
}

interface PdfLoaderClass {

    // Own fields of Sushi-1.0.Sushi.PdfLoaderClass

    parentClass: GObject.ObjectClass
}

abstract class PdfLoaderClass {

    // Own properties of Sushi-1.0.Sushi.PdfLoaderClass

    static name: string
}

interface PdfLoaderPrivate {
}

class PdfLoaderPrivate {

    // Own properties of Sushi-1.0.Sushi.PdfLoaderPrivate

    static name: string
}

interface SoundPlayerClass {

    // Own fields of Sushi-1.0.Sushi.SoundPlayerClass

    parentClass: GObject.ObjectClass
}

abstract class SoundPlayerClass {

    // Own properties of Sushi-1.0.Sushi.SoundPlayerClass

    static name: string
}

interface SoundPlayerPrivate {
}

class SoundPlayerPrivate {

    // Own properties of Sushi-1.0.Sushi.SoundPlayerPrivate

    static name: string
}

interface TextLoaderClass {

    // Own fields of Sushi-1.0.Sushi.TextLoaderClass

    parentClass: GObject.ObjectClass
}

abstract class TextLoaderClass {

    // Own properties of Sushi-1.0.Sushi.TextLoaderClass

    static name: string
}

interface TextLoaderPrivate {
}

class TextLoaderPrivate {

    // Own properties of Sushi-1.0.Sushi.TextLoaderPrivate

    static name: string
}

}
export default Sushi;