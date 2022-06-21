// @ts-nocheck

/*
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/sammydre/ts-for-gjs
 */
/**
 * Sushi-1.0
 */

import type * as Gjs from './Gjs';
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
function create_foreign_window(xid: number): Gdk.Window
function create_rounded_background(): Clutter.Actor
function query_supported_document_types(): string[]
interface CoverArtFetcher_ConstructProps extends GObject.Object_ConstructProps {

    // Own constructor properties of Sushi-1.0.Sushi.CoverArtFetcher

    taglist?: Gst.TagList | null
}

interface CoverArtFetcher {

    // Own properties of Sushi-1.0.Sushi.CoverArtFetcher

    readonly cover: GdkPixbuf.Pixbuf
    taglist: Gst.TagList

    // Own fields of Sushi-1.0.Sushi.CoverArtFetcher

    parent_instance: GObject.Object
    priv: CoverArtFetcherPrivate

    // Class property signals of Sushi-1.0.Sushi.CoverArtFetcher

    connect(sigName: "notify::cover", callback: (($obj: CoverArtFetcher, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::cover", callback: (($obj: CoverArtFetcher, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::cover", ...args: any[]): void
    connect(sigName: "notify::taglist", callback: (($obj: CoverArtFetcher, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::taglist", callback: (($obj: CoverArtFetcher, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::taglist", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
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

    readonly content_type: string
    file: Gio.File
    readonly icon: GdkPixbuf.Pixbuf
    readonly name: string
    readonly size: string
    readonly time: string

    // Own fields of Sushi-1.0.Sushi.FileLoader

    parent_instance: GObject.Object
    priv: FileLoaderPrivate

    // Owm methods of Sushi-1.0.Sushi.FileLoader

    get_content_type_string(): string
    get_date_string(): string
    get_display_name(): string
    get_icon(): GdkPixbuf.Pixbuf
    get_loading(): boolean
    get_size_string(): string
    stop(): void

    // Class property signals of Sushi-1.0.Sushi.FileLoader

    connect(sigName: "notify::content-type", callback: (($obj: FileLoader, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::content-type", callback: (($obj: FileLoader, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::content-type", ...args: any[]): void
    connect(sigName: "notify::file", callback: (($obj: FileLoader, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::file", callback: (($obj: FileLoader, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::file", ...args: any[]): void
    connect(sigName: "notify::icon", callback: (($obj: FileLoader, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::icon", callback: (($obj: FileLoader, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::icon", ...args: any[]): void
    connect(sigName: "notify::name", callback: (($obj: FileLoader, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: FileLoader, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::size", callback: (($obj: FileLoader, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::size", callback: (($obj: FileLoader, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::size", ...args: any[]): void
    connect(sigName: "notify::time", callback: (($obj: FileLoader, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::time", callback: (($obj: FileLoader, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::time", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
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
    ($obj: FontWidget): void
}

interface FontWidget extends Atk.ImplementorIface, Gtk.Buildable {

    // Own properties of Sushi-1.0.Sushi.FontWidget

    uri: string

    // Own fields of Sushi-1.0.Sushi.FontWidget

    parent_instance: Gtk.DrawingArea
    priv: FontWidgetPrivate

    // Own signals of Sushi-1.0.Sushi.FontWidget

    connect(sigName: "loaded", callback: FontWidget_LoadedSignalCallback): number
    connect_after(sigName: "loaded", callback: FontWidget_LoadedSignalCallback): number
    emit(sigName: "loaded", ...args: any[]): void

    // Class property signals of Sushi-1.0.Sushi.FontWidget

    connect(sigName: "notify::uri", callback: (($obj: FontWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::uri", callback: (($obj: FontWidget, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::uri", ...args: any[]): void
    connect(sigName: "notify::app-paintable", callback: (($obj: FontWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::app-paintable", callback: (($obj: FontWidget, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::app-paintable", ...args: any[]): void
    connect(sigName: "notify::can-default", callback: (($obj: FontWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-default", callback: (($obj: FontWidget, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-default", ...args: any[]): void
    connect(sigName: "notify::can-focus", callback: (($obj: FontWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-focus", callback: (($obj: FontWidget, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-focus", ...args: any[]): void
    connect(sigName: "notify::composite-child", callback: (($obj: FontWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::composite-child", callback: (($obj: FontWidget, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::composite-child", ...args: any[]): void
    connect(sigName: "notify::double-buffered", callback: (($obj: FontWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::double-buffered", callback: (($obj: FontWidget, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::double-buffered", ...args: any[]): void
    connect(sigName: "notify::events", callback: (($obj: FontWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::events", callback: (($obj: FontWidget, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::events", ...args: any[]): void
    connect(sigName: "notify::expand", callback: (($obj: FontWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::expand", callback: (($obj: FontWidget, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::expand", ...args: any[]): void
    connect(sigName: "notify::focus-on-click", callback: (($obj: FontWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::focus-on-click", callback: (($obj: FontWidget, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::focus-on-click", ...args: any[]): void
    connect(sigName: "notify::halign", callback: (($obj: FontWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::halign", callback: (($obj: FontWidget, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::halign", ...args: any[]): void
    connect(sigName: "notify::has-default", callback: (($obj: FontWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-default", callback: (($obj: FontWidget, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-default", ...args: any[]): void
    connect(sigName: "notify::has-focus", callback: (($obj: FontWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-focus", callback: (($obj: FontWidget, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-focus", ...args: any[]): void
    connect(sigName: "notify::has-tooltip", callback: (($obj: FontWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-tooltip", callback: (($obj: FontWidget, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-tooltip", ...args: any[]): void
    connect(sigName: "notify::height-request", callback: (($obj: FontWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height-request", callback: (($obj: FontWidget, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::height-request", ...args: any[]): void
    connect(sigName: "notify::hexpand", callback: (($obj: FontWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand", callback: (($obj: FontWidget, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hexpand", ...args: any[]): void
    connect(sigName: "notify::hexpand-set", callback: (($obj: FontWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand-set", callback: (($obj: FontWidget, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hexpand-set", ...args: any[]): void
    connect(sigName: "notify::is-focus", callback: (($obj: FontWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-focus", callback: (($obj: FontWidget, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::is-focus", ...args: any[]): void
    connect(sigName: "notify::margin", callback: (($obj: FontWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin", callback: (($obj: FontWidget, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin", ...args: any[]): void
    connect(sigName: "notify::margin-bottom", callback: (($obj: FontWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-bottom", callback: (($obj: FontWidget, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-bottom", ...args: any[]): void
    connect(sigName: "notify::margin-end", callback: (($obj: FontWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-end", callback: (($obj: FontWidget, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-end", ...args: any[]): void
    connect(sigName: "notify::margin-left", callback: (($obj: FontWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-left", callback: (($obj: FontWidget, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-left", ...args: any[]): void
    connect(sigName: "notify::margin-right", callback: (($obj: FontWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-right", callback: (($obj: FontWidget, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-right", ...args: any[]): void
    connect(sigName: "notify::margin-start", callback: (($obj: FontWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-start", callback: (($obj: FontWidget, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-start", ...args: any[]): void
    connect(sigName: "notify::margin-top", callback: (($obj: FontWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-top", callback: (($obj: FontWidget, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-top", ...args: any[]): void
    connect(sigName: "notify::name", callback: (($obj: FontWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: FontWidget, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::no-show-all", callback: (($obj: FontWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::no-show-all", callback: (($obj: FontWidget, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::no-show-all", ...args: any[]): void
    connect(sigName: "notify::opacity", callback: (($obj: FontWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opacity", callback: (($obj: FontWidget, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::opacity", ...args: any[]): void
    connect(sigName: "notify::parent", callback: (($obj: FontWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: FontWidget, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::parent", ...args: any[]): void
    connect(sigName: "notify::receives-default", callback: (($obj: FontWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::receives-default", callback: (($obj: FontWidget, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::receives-default", ...args: any[]): void
    connect(sigName: "notify::scale-factor", callback: (($obj: FontWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-factor", callback: (($obj: FontWidget, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::scale-factor", ...args: any[]): void
    connect(sigName: "notify::sensitive", callback: (($obj: FontWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sensitive", callback: (($obj: FontWidget, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::sensitive", ...args: any[]): void
    connect(sigName: "notify::style", callback: (($obj: FontWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::style", callback: (($obj: FontWidget, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::style", ...args: any[]): void
    connect(sigName: "notify::tooltip-markup", callback: (($obj: FontWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-markup", callback: (($obj: FontWidget, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tooltip-markup", ...args: any[]): void
    connect(sigName: "notify::tooltip-text", callback: (($obj: FontWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-text", callback: (($obj: FontWidget, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tooltip-text", ...args: any[]): void
    connect(sigName: "notify::valign", callback: (($obj: FontWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::valign", callback: (($obj: FontWidget, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::valign", ...args: any[]): void
    connect(sigName: "notify::vexpand", callback: (($obj: FontWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand", callback: (($obj: FontWidget, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vexpand", ...args: any[]): void
    connect(sigName: "notify::vexpand-set", callback: (($obj: FontWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand-set", callback: (($obj: FontWidget, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vexpand-set", ...args: any[]): void
    connect(sigName: "notify::visible", callback: (($obj: FontWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visible", callback: (($obj: FontWidget, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::visible", ...args: any[]): void
    connect(sigName: "notify::width-request", callback: (($obj: FontWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::width-request", callback: (($obj: FontWidget, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::width-request", ...args: any[]): void
    connect(sigName: "notify::window", callback: (($obj: FontWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::window", callback: (($obj: FontWidget, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::window", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
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

    parent_instance: GObject.Object
    priv: PdfLoaderPrivate

    // Owm methods of Sushi-1.0.Sushi.PdfLoader

    cleanup_document(): void
    get_max_page_size(): [ /* width */ number, /* height */ number ]

    // Class property signals of Sushi-1.0.Sushi.PdfLoader

    connect(sigName: "notify::document", callback: (($obj: PdfLoader, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::document", callback: (($obj: PdfLoader, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::document", ...args: any[]): void
    connect(sigName: "notify::uri", callback: (($obj: PdfLoader, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::uri", callback: (($obj: PdfLoader, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::uri", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
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

    parent_instance: GObject.Object
    priv: SoundPlayerPrivate

    // Class property signals of Sushi-1.0.Sushi.SoundPlayer

    connect(sigName: "notify::duration", callback: (($obj: SoundPlayer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::duration", callback: (($obj: SoundPlayer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::duration", ...args: any[]): void
    connect(sigName: "notify::playing", callback: (($obj: SoundPlayer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::playing", callback: (($obj: SoundPlayer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::playing", ...args: any[]): void
    connect(sigName: "notify::progress", callback: (($obj: SoundPlayer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::progress", callback: (($obj: SoundPlayer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::progress", ...args: any[]): void
    connect(sigName: "notify::state", callback: (($obj: SoundPlayer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::state", callback: (($obj: SoundPlayer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::state", ...args: any[]): void
    connect(sigName: "notify::taglist", callback: (($obj: SoundPlayer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::taglist", callback: (($obj: SoundPlayer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::taglist", ...args: any[]): void
    connect(sigName: "notify::uri", callback: (($obj: SoundPlayer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::uri", callback: (($obj: SoundPlayer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::uri", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
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
    ($obj: TextLoader, object: GtkSource.Buffer): void
}

interface TextLoader {

    // Own properties of Sushi-1.0.Sushi.TextLoader

    uri: string

    // Own fields of Sushi-1.0.Sushi.TextLoader

    parent_instance: GObject.Object
    priv: TextLoaderPrivate

    // Own signals of Sushi-1.0.Sushi.TextLoader

    connect(sigName: "loaded", callback: TextLoader_LoadedSignalCallback): number
    connect_after(sigName: "loaded", callback: TextLoader_LoadedSignalCallback): number
    emit(sigName: "loaded", object: GtkSource.Buffer, ...args: any[]): void

    // Class property signals of Sushi-1.0.Sushi.TextLoader

    connect(sigName: "notify::uri", callback: (($obj: TextLoader, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::uri", callback: (($obj: TextLoader, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::uri", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
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

    parent_class: GObject.ObjectClass
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

    parent_class: GObject.ObjectClass
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

    parent_class: Gtk.DrawingAreaClass
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

    parent_class: GObject.ObjectClass
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

    parent_class: GObject.ObjectClass
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

    parent_class: GObject.ObjectClass
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