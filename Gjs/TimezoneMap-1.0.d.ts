// @ts-nocheck

/*
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/sammydre/ts-for-gjs
 */
/**
 * TimezoneMap-1.0
 */

import type * as Gjs from './Gjs';
import type xlib from './xlib-2.0';
import type cairo from './cairo-1.0';
import type Pango from './Pango-1.0';
import type HarfBuzz from './HarfBuzz-0.0';
import type GObject from './GObject-2.0';
import type GLib from './GLib-2.0';
import type Json from './Json-1.0';
import type Gio from './Gio-2.0';
import type Gtk from './Gtk-3.0';
import type Gdk from './Gdk-3.0';
import type GdkPixbuf from './GdkPixbuf-2.0';
import type GModule from './GModule-2.0';
import type Atk from './Atk-1.0';

export namespace TimezoneMap {

const TIMEZONE_COMPLETION_ADMIN1: number
const TIMEZONE_COMPLETION_COUNTRY: number
const TIMEZONE_COMPLETION_LAST: number
const TIMEZONE_COMPLETION_LATITUDE: number
const TIMEZONE_COMPLETION_LONGITUDE: number
const TIMEZONE_COMPLETION_NAME: number
const TIMEZONE_COMPLETION_ZONE: number
interface TimezoneCompletion_ConstructProps extends Gtk.Buildable_ConstructProps, Gtk.CellLayout_ConstructProps, Gtk.EntryCompletion_ConstructProps {
}

interface TimezoneCompletion extends Gtk.Buildable, Gtk.CellLayout {

    // Own fields of TimezoneMap-1.0.TimezoneMap.TimezoneCompletion

    parent: Gtk.EntryCompletion
    priv: TimezoneCompletionPrivate

    // Owm methods of TimezoneMap-1.0.TimezoneMap.TimezoneCompletion

    watch_entry(entry: Gtk.Entry): void

    // Class property signals of TimezoneMap-1.0.TimezoneMap.TimezoneCompletion

    connect(sigName: "notify::cell-area", callback: (($obj: TimezoneCompletion, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::cell-area", callback: (($obj: TimezoneCompletion, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::cell-area", ...args: any[]): void
    connect(sigName: "notify::inline-completion", callback: (($obj: TimezoneCompletion, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::inline-completion", callback: (($obj: TimezoneCompletion, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::inline-completion", ...args: any[]): void
    connect(sigName: "notify::inline-selection", callback: (($obj: TimezoneCompletion, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::inline-selection", callback: (($obj: TimezoneCompletion, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::inline-selection", ...args: any[]): void
    connect(sigName: "notify::minimum-key-length", callback: (($obj: TimezoneCompletion, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::minimum-key-length", callback: (($obj: TimezoneCompletion, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::minimum-key-length", ...args: any[]): void
    connect(sigName: "notify::model", callback: (($obj: TimezoneCompletion, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::model", callback: (($obj: TimezoneCompletion, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::model", ...args: any[]): void
    connect(sigName: "notify::popup-completion", callback: (($obj: TimezoneCompletion, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::popup-completion", callback: (($obj: TimezoneCompletion, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::popup-completion", ...args: any[]): void
    connect(sigName: "notify::popup-set-width", callback: (($obj: TimezoneCompletion, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::popup-set-width", callback: (($obj: TimezoneCompletion, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::popup-set-width", ...args: any[]): void
    connect(sigName: "notify::popup-single-match", callback: (($obj: TimezoneCompletion, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::popup-single-match", callback: (($obj: TimezoneCompletion, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::popup-single-match", ...args: any[]): void
    connect(sigName: "notify::text-column", callback: (($obj: TimezoneCompletion, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::text-column", callback: (($obj: TimezoneCompletion, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::text-column", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class TimezoneCompletion extends Gtk.EntryCompletion {

    // Own properties of TimezoneMap-1.0.TimezoneMap.TimezoneCompletion

    static name: string
    static $gtype: GObject.GType<TimezoneCompletion>

    // Constructors of TimezoneMap-1.0.TimezoneMap.TimezoneCompletion

    constructor(config?: TimezoneCompletion_ConstructProps) 
    constructor() 
    static new(): TimezoneCompletion

    // Overloads of new

    /**
     * Creates a new #GtkEntryCompletion object.
     * @constructor 
     */
    static new(): Gtk.EntryCompletion
    _init(config?: TimezoneCompletion_ConstructProps): void
}

interface TimezoneLocation_ConstructProps extends GObject.Object_ConstructProps {

    // Own constructor properties of TimezoneMap-1.0.TimezoneMap.TimezoneLocation

    Comment?: string | null
    country?: string | null
    dist?: number | null
    latitude?: number | null
    longitude?: number | null
    zone?: string | null
}

interface TimezoneLocation {

    // Own properties of TimezoneMap-1.0.TimezoneMap.TimezoneLocation

    Comment: string
    country: string
    dist: number
    latitude: number
    longitude: number
    zone: string

    // Own fields of TimezoneMap-1.0.TimezoneMap.TimezoneLocation

    parent: GObject.Object
    priv: TimezoneLocationPrivate

    // Class property signals of TimezoneMap-1.0.TimezoneMap.TimezoneLocation

    connect(sigName: "notify::Comment", callback: (($obj: TimezoneLocation, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::Comment", callback: (($obj: TimezoneLocation, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::Comment", ...args: any[]): void
    connect(sigName: "notify::country", callback: (($obj: TimezoneLocation, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::country", callback: (($obj: TimezoneLocation, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::country", ...args: any[]): void
    connect(sigName: "notify::dist", callback: (($obj: TimezoneLocation, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::dist", callback: (($obj: TimezoneLocation, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::dist", ...args: any[]): void
    connect(sigName: "notify::latitude", callback: (($obj: TimezoneLocation, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::latitude", callback: (($obj: TimezoneLocation, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::latitude", ...args: any[]): void
    connect(sigName: "notify::longitude", callback: (($obj: TimezoneLocation, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::longitude", callback: (($obj: TimezoneLocation, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::longitude", ...args: any[]): void
    connect(sigName: "notify::zone", callback: (($obj: TimezoneLocation, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::zone", callback: (($obj: TimezoneLocation, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::zone", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class TimezoneLocation extends GObject.Object {

    // Own properties of TimezoneMap-1.0.TimezoneMap.TimezoneLocation

    static name: string
    static $gtype: GObject.GType<TimezoneLocation>

    // Constructors of TimezoneMap-1.0.TimezoneMap.TimezoneLocation

    constructor(config?: TimezoneLocation_ConstructProps) 
    constructor() 
    static new(): TimezoneLocation
    _init(config?: TimezoneLocation_ConstructProps): void
}

interface TimezoneMap_ConstructProps extends Atk.ImplementorIface_ConstructProps, Gtk.Buildable_ConstructProps, Gtk.Widget_ConstructProps {
}

/**
 * Signal callback interface for `location-changed`
 */
interface TimezoneMap_LocationChangedSignalCallback {
    ($obj: TimezoneMap, object: TimezoneLocation): void
}

interface TimezoneMap extends Atk.ImplementorIface, Gtk.Buildable {

    // Own fields of TimezoneMap-1.0.TimezoneMap.TimezoneMap

    parent: Gtk.Widget
    priv: TimezoneMapPrivate

    // Owm methods of TimezoneMap-1.0.TimezoneMap.TimezoneMap

    get_timezone_at_coords(lon: number, lat: number): string
    set_coords(lon: number, lat: number): void
    set_timezone(timezone: string): void
    set_watermark(watermark: string): void

    // Own signals of TimezoneMap-1.0.TimezoneMap.TimezoneMap

    connect(sigName: "location-changed", callback: TimezoneMap_LocationChangedSignalCallback): number
    connect_after(sigName: "location-changed", callback: TimezoneMap_LocationChangedSignalCallback): number
    emit(sigName: "location-changed", object: TimezoneLocation, ...args: any[]): void

    // Class property signals of TimezoneMap-1.0.TimezoneMap.TimezoneMap

    connect(sigName: "notify::app-paintable", callback: (($obj: TimezoneMap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::app-paintable", callback: (($obj: TimezoneMap, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::app-paintable", ...args: any[]): void
    connect(sigName: "notify::can-default", callback: (($obj: TimezoneMap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-default", callback: (($obj: TimezoneMap, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-default", ...args: any[]): void
    connect(sigName: "notify::can-focus", callback: (($obj: TimezoneMap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-focus", callback: (($obj: TimezoneMap, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-focus", ...args: any[]): void
    connect(sigName: "notify::composite-child", callback: (($obj: TimezoneMap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::composite-child", callback: (($obj: TimezoneMap, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::composite-child", ...args: any[]): void
    connect(sigName: "notify::double-buffered", callback: (($obj: TimezoneMap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::double-buffered", callback: (($obj: TimezoneMap, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::double-buffered", ...args: any[]): void
    connect(sigName: "notify::events", callback: (($obj: TimezoneMap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::events", callback: (($obj: TimezoneMap, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::events", ...args: any[]): void
    connect(sigName: "notify::expand", callback: (($obj: TimezoneMap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::expand", callback: (($obj: TimezoneMap, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::expand", ...args: any[]): void
    connect(sigName: "notify::focus-on-click", callback: (($obj: TimezoneMap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::focus-on-click", callback: (($obj: TimezoneMap, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::focus-on-click", ...args: any[]): void
    connect(sigName: "notify::halign", callback: (($obj: TimezoneMap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::halign", callback: (($obj: TimezoneMap, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::halign", ...args: any[]): void
    connect(sigName: "notify::has-default", callback: (($obj: TimezoneMap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-default", callback: (($obj: TimezoneMap, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-default", ...args: any[]): void
    connect(sigName: "notify::has-focus", callback: (($obj: TimezoneMap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-focus", callback: (($obj: TimezoneMap, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-focus", ...args: any[]): void
    connect(sigName: "notify::has-tooltip", callback: (($obj: TimezoneMap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-tooltip", callback: (($obj: TimezoneMap, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-tooltip", ...args: any[]): void
    connect(sigName: "notify::height-request", callback: (($obj: TimezoneMap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height-request", callback: (($obj: TimezoneMap, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::height-request", ...args: any[]): void
    connect(sigName: "notify::hexpand", callback: (($obj: TimezoneMap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand", callback: (($obj: TimezoneMap, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hexpand", ...args: any[]): void
    connect(sigName: "notify::hexpand-set", callback: (($obj: TimezoneMap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand-set", callback: (($obj: TimezoneMap, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hexpand-set", ...args: any[]): void
    connect(sigName: "notify::is-focus", callback: (($obj: TimezoneMap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-focus", callback: (($obj: TimezoneMap, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::is-focus", ...args: any[]): void
    connect(sigName: "notify::margin", callback: (($obj: TimezoneMap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin", callback: (($obj: TimezoneMap, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin", ...args: any[]): void
    connect(sigName: "notify::margin-bottom", callback: (($obj: TimezoneMap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-bottom", callback: (($obj: TimezoneMap, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-bottom", ...args: any[]): void
    connect(sigName: "notify::margin-end", callback: (($obj: TimezoneMap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-end", callback: (($obj: TimezoneMap, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-end", ...args: any[]): void
    connect(sigName: "notify::margin-left", callback: (($obj: TimezoneMap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-left", callback: (($obj: TimezoneMap, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-left", ...args: any[]): void
    connect(sigName: "notify::margin-right", callback: (($obj: TimezoneMap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-right", callback: (($obj: TimezoneMap, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-right", ...args: any[]): void
    connect(sigName: "notify::margin-start", callback: (($obj: TimezoneMap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-start", callback: (($obj: TimezoneMap, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-start", ...args: any[]): void
    connect(sigName: "notify::margin-top", callback: (($obj: TimezoneMap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-top", callback: (($obj: TimezoneMap, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-top", ...args: any[]): void
    connect(sigName: "notify::name", callback: (($obj: TimezoneMap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: TimezoneMap, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::no-show-all", callback: (($obj: TimezoneMap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::no-show-all", callback: (($obj: TimezoneMap, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::no-show-all", ...args: any[]): void
    connect(sigName: "notify::opacity", callback: (($obj: TimezoneMap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opacity", callback: (($obj: TimezoneMap, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::opacity", ...args: any[]): void
    connect(sigName: "notify::parent", callback: (($obj: TimezoneMap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: TimezoneMap, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::parent", ...args: any[]): void
    connect(sigName: "notify::receives-default", callback: (($obj: TimezoneMap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::receives-default", callback: (($obj: TimezoneMap, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::receives-default", ...args: any[]): void
    connect(sigName: "notify::scale-factor", callback: (($obj: TimezoneMap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-factor", callback: (($obj: TimezoneMap, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::scale-factor", ...args: any[]): void
    connect(sigName: "notify::sensitive", callback: (($obj: TimezoneMap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sensitive", callback: (($obj: TimezoneMap, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::sensitive", ...args: any[]): void
    connect(sigName: "notify::style", callback: (($obj: TimezoneMap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::style", callback: (($obj: TimezoneMap, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::style", ...args: any[]): void
    connect(sigName: "notify::tooltip-markup", callback: (($obj: TimezoneMap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-markup", callback: (($obj: TimezoneMap, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tooltip-markup", ...args: any[]): void
    connect(sigName: "notify::tooltip-text", callback: (($obj: TimezoneMap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-text", callback: (($obj: TimezoneMap, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tooltip-text", ...args: any[]): void
    connect(sigName: "notify::valign", callback: (($obj: TimezoneMap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::valign", callback: (($obj: TimezoneMap, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::valign", ...args: any[]): void
    connect(sigName: "notify::vexpand", callback: (($obj: TimezoneMap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand", callback: (($obj: TimezoneMap, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vexpand", ...args: any[]): void
    connect(sigName: "notify::vexpand-set", callback: (($obj: TimezoneMap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand-set", callback: (($obj: TimezoneMap, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vexpand-set", ...args: any[]): void
    connect(sigName: "notify::visible", callback: (($obj: TimezoneMap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visible", callback: (($obj: TimezoneMap, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::visible", ...args: any[]): void
    connect(sigName: "notify::width-request", callback: (($obj: TimezoneMap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::width-request", callback: (($obj: TimezoneMap, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::width-request", ...args: any[]): void
    connect(sigName: "notify::window", callback: (($obj: TimezoneMap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::window", callback: (($obj: TimezoneMap, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::window", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class TimezoneMap extends Gtk.Widget {

    // Own properties of TimezoneMap-1.0.TimezoneMap.TimezoneMap

    static name: string
    static $gtype: GObject.GType<TimezoneMap>

    // Constructors of TimezoneMap-1.0.TimezoneMap.TimezoneMap

    constructor(config?: TimezoneMap_ConstructProps) 
    constructor() 
    static new(): TimezoneMap
    _init(config?: TimezoneMap_ConstructProps): void
}

interface TimezoneCompletionClass {

    // Own fields of TimezoneMap-1.0.TimezoneMap.TimezoneCompletionClass

    parent_class: Gtk.EntryCompletionClass
}

abstract class TimezoneCompletionClass {

    // Own properties of TimezoneMap-1.0.TimezoneMap.TimezoneCompletionClass

    static name: string
}

interface TimezoneCompletionPrivate {
}

class TimezoneCompletionPrivate {

    // Own properties of TimezoneMap-1.0.TimezoneMap.TimezoneCompletionPrivate

    static name: string
}

interface TimezoneLocationClass {

    // Own fields of TimezoneMap-1.0.TimezoneMap.TimezoneLocationClass

    parent_class: GObject.ObjectClass
}

abstract class TimezoneLocationClass {

    // Own properties of TimezoneMap-1.0.TimezoneMap.TimezoneLocationClass

    static name: string
}

interface TimezoneLocationPrivate {
}

class TimezoneLocationPrivate {

    // Own properties of TimezoneMap-1.0.TimezoneMap.TimezoneLocationPrivate

    static name: string
}

interface TimezoneMapClass {

    // Own fields of TimezoneMap-1.0.TimezoneMap.TimezoneMapClass

    parent_class: Gtk.WidgetClass
}

abstract class TimezoneMapClass {

    // Own properties of TimezoneMap-1.0.TimezoneMap.TimezoneMapClass

    static name: string
}

interface TimezoneMapPrivate {
}

class TimezoneMapPrivate {

    // Own properties of TimezoneMap-1.0.TimezoneMap.TimezoneMapPrivate

    static name: string
}

}
export default TimezoneMap;