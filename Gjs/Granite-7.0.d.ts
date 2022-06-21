// @ts-nocheck

/*
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/sammydre/ts-for-gjs
 */
/**
 * Granite-7.0
 */

import type * as Gjs from './Gjs';
import type Gtk from './Gtk-4.0';
import type Gsk from './Gsk-4.0';
import type Graphene from './Graphene-1.0';
import type GObject from './GObject-2.0';
import type GLib from './GLib-2.0';
import type Gdk from './Gdk-4.0';
import type cairo from './cairo-1.0';
import type PangoCairo from './PangoCairo-1.0';
import type Pango from './Pango-1.0';
import type HarfBuzz from './HarfBuzz-0.0';
import type Gio from './Gio-2.0';
import type GdkPixbuf from './GdkPixbuf-2.0';
import type GModule from './GModule-2.0';
import type Gee from './Gee-0.8';

export namespace Granite {

enum ServicesContractorError {
    SERVICE_NOT_AVAILABLE,
}
enum SettingsPageStatusType {
    ERROR,
    OFFLINE,
    SUCCESS,
    WARNING,
    NONE,
}
enum SettingsColorScheme {
    NO_PREFERENCE,
    DARK,
    LIGHT,
}
const STYLE_CLASS_ACCENT: string
const STYLE_CLASS_BACK_BUTTON: string
const STYLE_CLASS_BADGE: string
const STYLE_CLASS_CARD: string
const STYLE_CLASS_CHECKERBOARD: string
const STYLE_CLASS_COLOR_BUTTON: string
const STYLE_CLASS_DEFAULT_DECORATION: string
const STYLE_CLASS_DESTRUCTIVE_ACTION: string
const STYLE_CLASS_DIALOG_CONTENT_AREA: string
const STYLE_CLASS_H1_LABEL: string
const STYLE_CLASS_H2_LABEL: string
const STYLE_CLASS_H3_LABEL: string
const STYLE_CLASS_H4_LABEL: string
const STYLE_CLASS_KEYCAP: string
const STYLE_CLASS_MODE_SWITCH: string
const STYLE_CLASS_OVERLAY_BAR: string
const STYLE_CLASS_ROUNDED: string
const STYLE_CLASS_SMALL_LABEL: string
const STYLE_CLASS_TERMINAL: string
const STYLE_CLASS_TITLE_LABEL: string
const STYLE_CLASS_WARMTH: string
const STYLE_CLASS_TEMPERATURE: string
const STYLE_CLASS_LINKED: string
const STYLE_CLASS_MENU: string
const STYLE_CLASS_MENUITEM: string
const STYLE_CLASS_DIM_LABEL: string
const STYLE_CLASS_ERROR: string
const STYLE_CLASS_FLAT: string
const STYLE_CLASS_MESSAGE_DIALOG: string
const STYLE_CLASS_SUGGESTED_ACTION: string
const STYLE_CLASS_VIEW: string
const STYLE_CLASS_WARNING: string
const TRANSITION_DURATION_CLOSE: number
const TRANSITION_DURATION_IN_PLACE: number
const TRANSITION_DURATION_OPEN: number
const TOOLTIP_SECONDARY_TEXT_MARKUP: string
function date_time_get_default_time_format(is_12h: boolean, with_second: boolean): string
function date_time_get_relative_datetime(date_time: GLib.DateTime): string
function date_time_is_same_day(day1: GLib.DateTime, day2: GLib.DateTime): boolean
function date_time_get_default_date_format(with_weekday: boolean, with_day: boolean, with_year: boolean): string
function date_time_seconds_to_time(seconds: number): string
function services_application_set_badge(count: number, _callback_: Gio.AsyncReadyCallback | null): void
function services_application_set_badge_finish(_res_: Gio.AsyncResult): boolean
function services_application_set_badge_visible(visible: boolean, _callback_: Gio.AsyncReadyCallback | null): void
function services_application_set_badge_visible_finish(_res_: Gio.AsyncResult): boolean
function services_application_set_progress(progress: number, _callback_: Gio.AsyncReadyCallback | null): void
function services_application_set_progress_finish(_res_: Gio.AsyncResult): boolean
function services_application_set_progress_visible(visible: boolean, _callback_: Gio.AsyncReadyCallback | null): void
function services_application_set_progress_visible_finish(_res_: Gio.AsyncResult): boolean
function widgets_utils_set_color_primary(window: Gtk.Widget, color: Gdk.RGBA, priority: number): Gtk.CssProvider | null
function accel_to_string(accel: string | null): string
function markup_accel_tooltip(accels: string[] | null, description: string | null): string
function contrasting_foreground_color(bg_color: Gdk.RGBA): /* result */ Gdk.RGBA
interface ServicesContract_ConstructProps extends GObject.Object_ConstructProps {
}

interface ServicesContract extends GObject.Object {

    // Owm methods of Granite-7.0.Granite.ServicesContract

    get_display_name(): string
    get_description(): string
    get_icon(): Gio.Icon
    execute_with_file(file: Gio.File): void
    execute_with_files(files: Gio.File[]): void

    // Own virtual methods of Granite-7.0.Granite.ServicesContract

    vfunc_get_display_name(): string
    vfunc_get_description(): string
    vfunc_get_icon(): Gio.Icon
    vfunc_execute_with_file(file: Gio.File): void
    vfunc_execute_with_files(files: Gio.File[]): void

    // Class property signals of Granite-7.0.Granite.ServicesContract

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class ServicesContract {

    // Own properties of Granite-7.0.Granite.ServicesContract

    static name: string
    static $gtype: GObject.GType<ServicesContract>

    // Constructors of Granite-7.0.Granite.ServicesContract

    constructor(config?: ServicesContract_ConstructProps) 
    _init(config?: ServicesContract_ConstructProps): void
}

interface ServicesSettingsSerializable_ConstructProps extends GObject.Object_ConstructProps {
}

interface ServicesSettingsSerializable extends GObject.Object {

    // Owm methods of Granite-7.0.Granite.ServicesSettingsSerializable

    settings_serialize(): string
    settings_deserialize(s: string): void

    // Own virtual methods of Granite-7.0.Granite.ServicesSettingsSerializable

    vfunc_settings_serialize(): string
    vfunc_settings_deserialize(s: string): void

    // Class property signals of Granite-7.0.Granite.ServicesSettingsSerializable

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class ServicesSettingsSerializable {

    // Own properties of Granite-7.0.Granite.ServicesSettingsSerializable

    static name: string
    static $gtype: GObject.GType<ServicesSettingsSerializable>

    // Constructors of Granite-7.0.Granite.ServicesSettingsSerializable

    constructor(config?: ServicesSettingsSerializable_ConstructProps) 
    _init(config?: ServicesSettingsSerializable_ConstructProps): void
}

// Workaround
/** @ignore */
export interface GraniteServicesSettingsSerializable_ConstructProps extends ServicesSettingsSerializable_ConstructProps {}
/** @ignore */
export interface GraniteServicesSettingsSerializable extends ServicesSettingsSerializable {}
interface DrawingBufferSurface_ConstructProps extends GObject.Object_ConstructProps {

    // Own constructor properties of Granite-7.0.Granite.DrawingBufferSurface

    surface?: cairo.Surface | null
    width?: number | null
    height?: number | null
}

interface DrawingBufferSurface {

    // Own properties of Granite-7.0.Granite.DrawingBufferSurface

    surface: cairo.Surface
    width: number
    height: number
    readonly context: cairo.Context

    // Owm methods of Granite-7.0.Granite.DrawingBufferSurface

    get_surface(): cairo.Surface
    get_width(): number
    get_height(): number
    get_context(): cairo.Context
    clear(): void
    load_to_pixbuf(): GdkPixbuf.Pixbuf
    average_color(): DrawingColor
    fast_blur(radius: number, process_count: number): void
    exponential_blur(radius: number): void
    gaussian_blur(radius: number): void

    // Class property signals of Granite-7.0.Granite.DrawingBufferSurface

    connect(sigName: "notify::surface", callback: (($obj: DrawingBufferSurface, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::surface", callback: (($obj: DrawingBufferSurface, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::surface", ...args: any[]): void
    connect(sigName: "notify::width", callback: (($obj: DrawingBufferSurface, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::width", callback: (($obj: DrawingBufferSurface, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::width", ...args: any[]): void
    connect(sigName: "notify::height", callback: (($obj: DrawingBufferSurface, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height", callback: (($obj: DrawingBufferSurface, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::height", ...args: any[]): void
    connect(sigName: "notify::context", callback: (($obj: DrawingBufferSurface, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::context", callback: (($obj: DrawingBufferSurface, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::context", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class DrawingBufferSurface extends GObject.Object {

    // Own properties of Granite-7.0.Granite.DrawingBufferSurface

    static name: string
    static $gtype: GObject.GType<DrawingBufferSurface>

    // Constructors of Granite-7.0.Granite.DrawingBufferSurface

    constructor(config?: DrawingBufferSurface_ConstructProps) 
    constructor(width: number, height: number) 
    static new(width: number, height: number): DrawingBufferSurface
    static with_surface(width: number, height: number, model: cairo.Surface): DrawingBufferSurface
    static with_buffer_surface(width: number, height: number, model: DrawingBufferSurface): DrawingBufferSurface
    _init(config?: DrawingBufferSurface_ConstructProps): void
}

interface DrawingColor_ConstructProps extends GraniteServicesSettingsSerializable_ConstructProps, GObject.Object_ConstructProps {
}

interface DrawingColor extends GraniteServicesSettingsSerializable {

    // Own fields of Granite-7.0.Granite.DrawingColor

    R: number
    G: number
    B: number
    A: number

    // Owm methods of Granite-7.0.Granite.DrawingColor

    set_hue(hue: number): DrawingColor
    set_sat(sat: number): DrawingColor
    set_val(val: number): DrawingColor
    set_alpha(alpha: number): DrawingColor
    get_hue(): number
    get_sat(): number
    get_val(): number
    add_hue(val: number): DrawingColor
    set_min_sat(sat: number): DrawingColor
    set_min_value(val: number): DrawingColor
    set_max_sat(sat: number): DrawingColor
    set_max_val(val: number): DrawingColor
    multiply_sat(amount: number): DrawingColor
    brighten_val(amount: number): DrawingColor
    darken_val(amount: number): DrawingColor
    darken_by_sat(amount: number): DrawingColor
    to_string(): string
    to_int(): number

    // Class property signals of Granite-7.0.Granite.DrawingColor

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class DrawingColor extends GObject.Object {

    // Own properties of Granite-7.0.Granite.DrawingColor

    static name: string
    static $gtype: GObject.GType<DrawingColor>

    // Constructors of Granite-7.0.Granite.DrawingColor

    constructor(config?: DrawingColor_ConstructProps) 
    constructor(R: number, G: number, B: number, A: number) 
    static new(R: number, G: number, B: number, A: number): DrawingColor
    static from_rgba(color: Gdk.RGBA): DrawingColor
    static from_string(color: string): DrawingColor
    static from_int(color: number): DrawingColor
    _init(config?: DrawingColor_ConstructProps): void
    static alpha_from_int(color: number): number
    static red_from_int(color: number): number
    static green_from_int(color: number): number
    static blue_from_int(color: number): number
}

interface DrawingUtilities_ConstructProps extends GObject.Object_ConstructProps {
}

interface DrawingUtilities {

    // Class property signals of Granite-7.0.Granite.DrawingUtilities

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class DrawingUtilities extends GObject.Object {

    // Own properties of Granite-7.0.Granite.DrawingUtilities

    static name: string
    static $gtype: GObject.GType<DrawingUtilities>

    // Constructors of Granite-7.0.Granite.DrawingUtilities

    constructor(config?: DrawingUtilities_ConstructProps) 
    constructor() 
    static new(): DrawingUtilities
    _init(config?: DrawingUtilities_ConstructProps): void
    static cairo_rounded_rectangle(cr: cairo.Context, x: number, y: number, width: number, height: number, radius: number): void
    static average_color(source: GdkPixbuf.Pixbuf): DrawingColor
}

interface ServicesContractorProxy_ConstructProps extends GObject.Object_ConstructProps {
}

/**
 * Signal callback interface for `contracts-changed`
 */
interface ServicesContractorProxy_ContractsChangedSignalCallback {
    ($obj: ServicesContractorProxy): void
}

interface ServicesContractorProxy {

    // Own signals of Granite-7.0.Granite.ServicesContractorProxy

    connect(sigName: "contracts-changed", callback: ServicesContractorProxy_ContractsChangedSignalCallback): number
    connect_after(sigName: "contracts-changed", callback: ServicesContractorProxy_ContractsChangedSignalCallback): number
    emit(sigName: "contracts-changed", ...args: any[]): void

    // Class property signals of Granite-7.0.Granite.ServicesContractorProxy

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class ServicesContractorProxy extends GObject.Object {

    // Own properties of Granite-7.0.Granite.ServicesContractorProxy

    static name: string
    static $gtype: GObject.GType<ServicesContractorProxy>

    // Constructors of Granite-7.0.Granite.ServicesContractorProxy

    constructor(config?: ServicesContractorProxy_ConstructProps) 
    _init(config?: ServicesContractorProxy_ConstructProps): void
    static get_instance(): any
    static get_all_contracts(): Gee.List
    static get_contracts_by_mime(mime_type: string): Gee.List
    static get_contracts_by_mimelist(mime_types: string[]): Gee.List
    static get_contracts_for_file(file: Gio.File): Gee.List
    static get_contracts_for_files(files: Gio.File[]): Gee.List
}

interface ServicesSystem_ConstructProps extends GObject.Object_ConstructProps {
}

interface ServicesSystem {

    // Class property signals of Granite-7.0.Granite.ServicesSystem

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class ServicesSystem extends GObject.Object {

    // Own properties of Granite-7.0.Granite.ServicesSystem

    static name: string
    static $gtype: GObject.GType<ServicesSystem>

    // Constructors of Granite-7.0.Granite.ServicesSystem

    constructor(config?: ServicesSystem_ConstructProps) 
    constructor() 
    static new(): ServicesSystem
    _init(config?: ServicesSystem_ConstructProps): void
    static history_is_enabled(): boolean
}

interface WidgetsOverlayBar_ConstructProps extends Gtk.Box_ConstructProps {

    // Own constructor properties of Granite-7.0.Granite.WidgetsOverlayBar

    overlay?: Gtk.Overlay | null
    label?: string | null
    active?: boolean | null
}

interface WidgetsOverlayBar {

    // Own properties of Granite-7.0.Granite.WidgetsOverlayBar

    readonly overlay: Gtk.Overlay
    label: string
    active: boolean

    // Conflicting properties

    parent_instance: any

    // Owm methods of Granite-7.0.Granite.WidgetsOverlayBar

    get_overlay(): Gtk.Overlay | null
    get_label(): string
    set_label(value: string): void
    get_active(): boolean
    set_active(value: boolean): void

    // Class property signals of Granite-7.0.Granite.WidgetsOverlayBar

    connect(sigName: "notify::overlay", callback: (($obj: WidgetsOverlayBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::overlay", callback: (($obj: WidgetsOverlayBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::overlay", ...args: any[]): void
    connect(sigName: "notify::label", callback: (($obj: WidgetsOverlayBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::label", callback: (($obj: WidgetsOverlayBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::label", ...args: any[]): void
    connect(sigName: "notify::active", callback: (($obj: WidgetsOverlayBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::active", callback: (($obj: WidgetsOverlayBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::active", ...args: any[]): void
    connect(sigName: "notify::baseline-position", callback: (($obj: WidgetsOverlayBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::baseline-position", callback: (($obj: WidgetsOverlayBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::baseline-position", ...args: any[]): void
    connect(sigName: "notify::homogeneous", callback: (($obj: WidgetsOverlayBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::homogeneous", callback: (($obj: WidgetsOverlayBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::homogeneous", ...args: any[]): void
    connect(sigName: "notify::spacing", callback: (($obj: WidgetsOverlayBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::spacing", callback: (($obj: WidgetsOverlayBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::spacing", ...args: any[]): void
    connect(sigName: "notify::can-focus", callback: (($obj: WidgetsOverlayBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-focus", callback: (($obj: WidgetsOverlayBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-focus", ...args: any[]): void
    connect(sigName: "notify::can-target", callback: (($obj: WidgetsOverlayBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-target", callback: (($obj: WidgetsOverlayBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-target", ...args: any[]): void
    connect(sigName: "notify::css-classes", callback: (($obj: WidgetsOverlayBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::css-classes", callback: (($obj: WidgetsOverlayBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::css-classes", ...args: any[]): void
    connect(sigName: "notify::css-name", callback: (($obj: WidgetsOverlayBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::css-name", callback: (($obj: WidgetsOverlayBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::css-name", ...args: any[]): void
    connect(sigName: "notify::cursor", callback: (($obj: WidgetsOverlayBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::cursor", callback: (($obj: WidgetsOverlayBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::cursor", ...args: any[]): void
    connect(sigName: "notify::focus-on-click", callback: (($obj: WidgetsOverlayBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::focus-on-click", callback: (($obj: WidgetsOverlayBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::focus-on-click", ...args: any[]): void
    connect(sigName: "notify::focusable", callback: (($obj: WidgetsOverlayBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::focusable", callback: (($obj: WidgetsOverlayBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::focusable", ...args: any[]): void
    connect(sigName: "notify::halign", callback: (($obj: WidgetsOverlayBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::halign", callback: (($obj: WidgetsOverlayBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::halign", ...args: any[]): void
    connect(sigName: "notify::has-default", callback: (($obj: WidgetsOverlayBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-default", callback: (($obj: WidgetsOverlayBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-default", ...args: any[]): void
    connect(sigName: "notify::has-focus", callback: (($obj: WidgetsOverlayBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-focus", callback: (($obj: WidgetsOverlayBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-focus", ...args: any[]): void
    connect(sigName: "notify::has-tooltip", callback: (($obj: WidgetsOverlayBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-tooltip", callback: (($obj: WidgetsOverlayBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-tooltip", ...args: any[]): void
    connect(sigName: "notify::height-request", callback: (($obj: WidgetsOverlayBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height-request", callback: (($obj: WidgetsOverlayBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::height-request", ...args: any[]): void
    connect(sigName: "notify::hexpand", callback: (($obj: WidgetsOverlayBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand", callback: (($obj: WidgetsOverlayBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hexpand", ...args: any[]): void
    connect(sigName: "notify::hexpand-set", callback: (($obj: WidgetsOverlayBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand-set", callback: (($obj: WidgetsOverlayBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hexpand-set", ...args: any[]): void
    connect(sigName: "notify::layout-manager", callback: (($obj: WidgetsOverlayBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::layout-manager", callback: (($obj: WidgetsOverlayBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::layout-manager", ...args: any[]): void
    connect(sigName: "notify::margin-bottom", callback: (($obj: WidgetsOverlayBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-bottom", callback: (($obj: WidgetsOverlayBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-bottom", ...args: any[]): void
    connect(sigName: "notify::margin-end", callback: (($obj: WidgetsOverlayBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-end", callback: (($obj: WidgetsOverlayBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-end", ...args: any[]): void
    connect(sigName: "notify::margin-start", callback: (($obj: WidgetsOverlayBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-start", callback: (($obj: WidgetsOverlayBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-start", ...args: any[]): void
    connect(sigName: "notify::margin-top", callback: (($obj: WidgetsOverlayBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-top", callback: (($obj: WidgetsOverlayBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-top", ...args: any[]): void
    connect(sigName: "notify::name", callback: (($obj: WidgetsOverlayBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: WidgetsOverlayBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::opacity", callback: (($obj: WidgetsOverlayBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opacity", callback: (($obj: WidgetsOverlayBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::opacity", ...args: any[]): void
    connect(sigName: "notify::overflow", callback: (($obj: WidgetsOverlayBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::overflow", callback: (($obj: WidgetsOverlayBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::overflow", ...args: any[]): void
    connect(sigName: "notify::parent", callback: (($obj: WidgetsOverlayBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: WidgetsOverlayBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::parent", ...args: any[]): void
    connect(sigName: "notify::receives-default", callback: (($obj: WidgetsOverlayBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::receives-default", callback: (($obj: WidgetsOverlayBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::receives-default", ...args: any[]): void
    connect(sigName: "notify::root", callback: (($obj: WidgetsOverlayBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::root", callback: (($obj: WidgetsOverlayBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::root", ...args: any[]): void
    connect(sigName: "notify::scale-factor", callback: (($obj: WidgetsOverlayBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-factor", callback: (($obj: WidgetsOverlayBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::scale-factor", ...args: any[]): void
    connect(sigName: "notify::sensitive", callback: (($obj: WidgetsOverlayBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sensitive", callback: (($obj: WidgetsOverlayBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::sensitive", ...args: any[]): void
    connect(sigName: "notify::tooltip-markup", callback: (($obj: WidgetsOverlayBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-markup", callback: (($obj: WidgetsOverlayBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tooltip-markup", ...args: any[]): void
    connect(sigName: "notify::tooltip-text", callback: (($obj: WidgetsOverlayBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-text", callback: (($obj: WidgetsOverlayBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tooltip-text", ...args: any[]): void
    connect(sigName: "notify::valign", callback: (($obj: WidgetsOverlayBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::valign", callback: (($obj: WidgetsOverlayBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::valign", ...args: any[]): void
    connect(sigName: "notify::vexpand", callback: (($obj: WidgetsOverlayBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand", callback: (($obj: WidgetsOverlayBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vexpand", ...args: any[]): void
    connect(sigName: "notify::vexpand-set", callback: (($obj: WidgetsOverlayBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand-set", callback: (($obj: WidgetsOverlayBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vexpand-set", ...args: any[]): void
    connect(sigName: "notify::visible", callback: (($obj: WidgetsOverlayBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visible", callback: (($obj: WidgetsOverlayBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::visible", ...args: any[]): void
    connect(sigName: "notify::width-request", callback: (($obj: WidgetsOverlayBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::width-request", callback: (($obj: WidgetsOverlayBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::width-request", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class WidgetsOverlayBar extends Gtk.Box {

    // Own properties of Granite-7.0.Granite.WidgetsOverlayBar

    static name: string
    static $gtype: GObject.GType<WidgetsOverlayBar>

    // Constructors of Granite-7.0.Granite.WidgetsOverlayBar

    constructor(config?: WidgetsOverlayBar_ConstructProps) 
    constructor(overlay: Gtk.Overlay | null) 
    static new(overlay: Gtk.Overlay | null): WidgetsOverlayBar

    // Overloads of new

    /**
     * Creates a new `GtkBox`.
     * @constructor 
     * @param orientation the box’s orientation
     * @param spacing the number of pixels to place by default between children
     */
    static new(orientation: Gtk.Orientation, spacing: number): Gtk.Box
    _init(config?: WidgetsOverlayBar_ConstructProps): void
}

interface WidgetsToast_ConstructProps extends Gtk.Box_ConstructProps {

    // Own constructor properties of Granite-7.0.Granite.WidgetsToast

    title?: string | null
}

/**
 * Signal callback interface for `closed`
 */
interface WidgetsToast_ClosedSignalCallback {
    ($obj: WidgetsToast): void
}

/**
 * Signal callback interface for `default-action`
 */
interface WidgetsToast_DefaultActionSignalCallback {
    ($obj: WidgetsToast): void
}

interface WidgetsToast {

    // Own properties of Granite-7.0.Granite.WidgetsToast

    title: string

    // Conflicting properties

    parent_instance: any

    // Owm methods of Granite-7.0.Granite.WidgetsToast

    get_title(): string
    set_title(value: string): void
    set_default_action(label: string | null): void
    send_notification(): void

    // Own signals of Granite-7.0.Granite.WidgetsToast

    connect(sigName: "closed", callback: WidgetsToast_ClosedSignalCallback): number
    connect_after(sigName: "closed", callback: WidgetsToast_ClosedSignalCallback): number
    emit(sigName: "closed", ...args: any[]): void
    connect(sigName: "default-action", callback: WidgetsToast_DefaultActionSignalCallback): number
    connect_after(sigName: "default-action", callback: WidgetsToast_DefaultActionSignalCallback): number
    emit(sigName: "default-action", ...args: any[]): void

    // Class property signals of Granite-7.0.Granite.WidgetsToast

    connect(sigName: "notify::title", callback: (($obj: WidgetsToast, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::title", callback: (($obj: WidgetsToast, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::title", ...args: any[]): void
    connect(sigName: "notify::baseline-position", callback: (($obj: WidgetsToast, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::baseline-position", callback: (($obj: WidgetsToast, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::baseline-position", ...args: any[]): void
    connect(sigName: "notify::homogeneous", callback: (($obj: WidgetsToast, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::homogeneous", callback: (($obj: WidgetsToast, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::homogeneous", ...args: any[]): void
    connect(sigName: "notify::spacing", callback: (($obj: WidgetsToast, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::spacing", callback: (($obj: WidgetsToast, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::spacing", ...args: any[]): void
    connect(sigName: "notify::can-focus", callback: (($obj: WidgetsToast, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-focus", callback: (($obj: WidgetsToast, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-focus", ...args: any[]): void
    connect(sigName: "notify::can-target", callback: (($obj: WidgetsToast, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-target", callback: (($obj: WidgetsToast, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-target", ...args: any[]): void
    connect(sigName: "notify::css-classes", callback: (($obj: WidgetsToast, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::css-classes", callback: (($obj: WidgetsToast, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::css-classes", ...args: any[]): void
    connect(sigName: "notify::css-name", callback: (($obj: WidgetsToast, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::css-name", callback: (($obj: WidgetsToast, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::css-name", ...args: any[]): void
    connect(sigName: "notify::cursor", callback: (($obj: WidgetsToast, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::cursor", callback: (($obj: WidgetsToast, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::cursor", ...args: any[]): void
    connect(sigName: "notify::focus-on-click", callback: (($obj: WidgetsToast, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::focus-on-click", callback: (($obj: WidgetsToast, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::focus-on-click", ...args: any[]): void
    connect(sigName: "notify::focusable", callback: (($obj: WidgetsToast, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::focusable", callback: (($obj: WidgetsToast, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::focusable", ...args: any[]): void
    connect(sigName: "notify::halign", callback: (($obj: WidgetsToast, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::halign", callback: (($obj: WidgetsToast, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::halign", ...args: any[]): void
    connect(sigName: "notify::has-default", callback: (($obj: WidgetsToast, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-default", callback: (($obj: WidgetsToast, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-default", ...args: any[]): void
    connect(sigName: "notify::has-focus", callback: (($obj: WidgetsToast, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-focus", callback: (($obj: WidgetsToast, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-focus", ...args: any[]): void
    connect(sigName: "notify::has-tooltip", callback: (($obj: WidgetsToast, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-tooltip", callback: (($obj: WidgetsToast, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-tooltip", ...args: any[]): void
    connect(sigName: "notify::height-request", callback: (($obj: WidgetsToast, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height-request", callback: (($obj: WidgetsToast, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::height-request", ...args: any[]): void
    connect(sigName: "notify::hexpand", callback: (($obj: WidgetsToast, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand", callback: (($obj: WidgetsToast, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hexpand", ...args: any[]): void
    connect(sigName: "notify::hexpand-set", callback: (($obj: WidgetsToast, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand-set", callback: (($obj: WidgetsToast, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hexpand-set", ...args: any[]): void
    connect(sigName: "notify::layout-manager", callback: (($obj: WidgetsToast, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::layout-manager", callback: (($obj: WidgetsToast, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::layout-manager", ...args: any[]): void
    connect(sigName: "notify::margin-bottom", callback: (($obj: WidgetsToast, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-bottom", callback: (($obj: WidgetsToast, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-bottom", ...args: any[]): void
    connect(sigName: "notify::margin-end", callback: (($obj: WidgetsToast, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-end", callback: (($obj: WidgetsToast, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-end", ...args: any[]): void
    connect(sigName: "notify::margin-start", callback: (($obj: WidgetsToast, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-start", callback: (($obj: WidgetsToast, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-start", ...args: any[]): void
    connect(sigName: "notify::margin-top", callback: (($obj: WidgetsToast, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-top", callback: (($obj: WidgetsToast, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-top", ...args: any[]): void
    connect(sigName: "notify::name", callback: (($obj: WidgetsToast, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: WidgetsToast, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::opacity", callback: (($obj: WidgetsToast, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opacity", callback: (($obj: WidgetsToast, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::opacity", ...args: any[]): void
    connect(sigName: "notify::overflow", callback: (($obj: WidgetsToast, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::overflow", callback: (($obj: WidgetsToast, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::overflow", ...args: any[]): void
    connect(sigName: "notify::parent", callback: (($obj: WidgetsToast, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: WidgetsToast, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::parent", ...args: any[]): void
    connect(sigName: "notify::receives-default", callback: (($obj: WidgetsToast, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::receives-default", callback: (($obj: WidgetsToast, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::receives-default", ...args: any[]): void
    connect(sigName: "notify::root", callback: (($obj: WidgetsToast, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::root", callback: (($obj: WidgetsToast, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::root", ...args: any[]): void
    connect(sigName: "notify::scale-factor", callback: (($obj: WidgetsToast, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-factor", callback: (($obj: WidgetsToast, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::scale-factor", ...args: any[]): void
    connect(sigName: "notify::sensitive", callback: (($obj: WidgetsToast, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sensitive", callback: (($obj: WidgetsToast, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::sensitive", ...args: any[]): void
    connect(sigName: "notify::tooltip-markup", callback: (($obj: WidgetsToast, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-markup", callback: (($obj: WidgetsToast, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tooltip-markup", ...args: any[]): void
    connect(sigName: "notify::tooltip-text", callback: (($obj: WidgetsToast, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-text", callback: (($obj: WidgetsToast, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tooltip-text", ...args: any[]): void
    connect(sigName: "notify::valign", callback: (($obj: WidgetsToast, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::valign", callback: (($obj: WidgetsToast, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::valign", ...args: any[]): void
    connect(sigName: "notify::vexpand", callback: (($obj: WidgetsToast, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand", callback: (($obj: WidgetsToast, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vexpand", ...args: any[]): void
    connect(sigName: "notify::vexpand-set", callback: (($obj: WidgetsToast, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand-set", callback: (($obj: WidgetsToast, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vexpand-set", ...args: any[]): void
    connect(sigName: "notify::visible", callback: (($obj: WidgetsToast, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visible", callback: (($obj: WidgetsToast, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::visible", ...args: any[]): void
    connect(sigName: "notify::width-request", callback: (($obj: WidgetsToast, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::width-request", callback: (($obj: WidgetsToast, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::width-request", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class WidgetsToast extends Gtk.Box {

    // Own properties of Granite-7.0.Granite.WidgetsToast

    static name: string
    static $gtype: GObject.GType<WidgetsToast>

    // Constructors of Granite-7.0.Granite.WidgetsToast

    constructor(config?: WidgetsToast_ConstructProps) 
    constructor(title: string) 
    static new(title: string): WidgetsToast

    // Overloads of new

    /**
     * Creates a new `GtkBox`.
     * @constructor 
     * @param orientation the box’s orientation
     * @param spacing the number of pixels to place by default between children
     */
    static new(orientation: Gtk.Orientation, spacing: number): Gtk.Box
    _init(config?: WidgetsToast_ConstructProps): void
}

interface SettingsPage_ConstructProps extends Gtk.Box_ConstructProps {

    // Own constructor properties of Granite-7.0.Granite.SettingsPage

    status_type?: SettingsPageStatusType | null
    display_widget?: Gtk.Widget | null
    header?: string | null
    status?: string | null
    icon_name?: string | null
    title?: string | null
    child?: Gtk.Widget | null
}

interface SettingsPage {

    // Own properties of Granite-7.0.Granite.SettingsPage

    status_type: SettingsPageStatusType
    readonly display_widget: Gtk.Widget
    readonly header: string
    status: string
    icon_name: string
    title: string
    child: Gtk.Widget

    // Conflicting properties

    parent_instance: any

    // Own fields of Granite-7.0.Granite.SettingsPage

    _icon_name: string
    _title: string

    // Owm methods of Granite-7.0.Granite.SettingsPage

    get_status_type(): SettingsPageStatusType
    set_status_type(value: SettingsPageStatusType): void
    get_display_widget(): Gtk.Widget | null
    get_header(): string | null
    get_status(): string
    set_status(value: string): void
    get_icon_name(): string | null
    set_icon_name(value: string | null): void
    get_title(): string
    set_title(value: string): void
    get_child(): Gtk.Widget
    set_child(value: Gtk.Widget): void

    // Class property signals of Granite-7.0.Granite.SettingsPage

    connect(sigName: "notify::status-type", callback: (($obj: SettingsPage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::status-type", callback: (($obj: SettingsPage, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::status-type", ...args: any[]): void
    connect(sigName: "notify::display-widget", callback: (($obj: SettingsPage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::display-widget", callback: (($obj: SettingsPage, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::display-widget", ...args: any[]): void
    connect(sigName: "notify::header", callback: (($obj: SettingsPage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::header", callback: (($obj: SettingsPage, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::header", ...args: any[]): void
    connect(sigName: "notify::status", callback: (($obj: SettingsPage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::status", callback: (($obj: SettingsPage, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::status", ...args: any[]): void
    connect(sigName: "notify::icon-name", callback: (($obj: SettingsPage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::icon-name", callback: (($obj: SettingsPage, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::icon-name", ...args: any[]): void
    connect(sigName: "notify::title", callback: (($obj: SettingsPage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::title", callback: (($obj: SettingsPage, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::title", ...args: any[]): void
    connect(sigName: "notify::child", callback: (($obj: SettingsPage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::child", callback: (($obj: SettingsPage, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::child", ...args: any[]): void
    connect(sigName: "notify::baseline-position", callback: (($obj: SettingsPage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::baseline-position", callback: (($obj: SettingsPage, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::baseline-position", ...args: any[]): void
    connect(sigName: "notify::homogeneous", callback: (($obj: SettingsPage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::homogeneous", callback: (($obj: SettingsPage, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::homogeneous", ...args: any[]): void
    connect(sigName: "notify::spacing", callback: (($obj: SettingsPage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::spacing", callback: (($obj: SettingsPage, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::spacing", ...args: any[]): void
    connect(sigName: "notify::can-focus", callback: (($obj: SettingsPage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-focus", callback: (($obj: SettingsPage, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-focus", ...args: any[]): void
    connect(sigName: "notify::can-target", callback: (($obj: SettingsPage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-target", callback: (($obj: SettingsPage, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-target", ...args: any[]): void
    connect(sigName: "notify::css-classes", callback: (($obj: SettingsPage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::css-classes", callback: (($obj: SettingsPage, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::css-classes", ...args: any[]): void
    connect(sigName: "notify::css-name", callback: (($obj: SettingsPage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::css-name", callback: (($obj: SettingsPage, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::css-name", ...args: any[]): void
    connect(sigName: "notify::cursor", callback: (($obj: SettingsPage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::cursor", callback: (($obj: SettingsPage, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::cursor", ...args: any[]): void
    connect(sigName: "notify::focus-on-click", callback: (($obj: SettingsPage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::focus-on-click", callback: (($obj: SettingsPage, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::focus-on-click", ...args: any[]): void
    connect(sigName: "notify::focusable", callback: (($obj: SettingsPage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::focusable", callback: (($obj: SettingsPage, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::focusable", ...args: any[]): void
    connect(sigName: "notify::halign", callback: (($obj: SettingsPage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::halign", callback: (($obj: SettingsPage, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::halign", ...args: any[]): void
    connect(sigName: "notify::has-default", callback: (($obj: SettingsPage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-default", callback: (($obj: SettingsPage, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-default", ...args: any[]): void
    connect(sigName: "notify::has-focus", callback: (($obj: SettingsPage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-focus", callback: (($obj: SettingsPage, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-focus", ...args: any[]): void
    connect(sigName: "notify::has-tooltip", callback: (($obj: SettingsPage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-tooltip", callback: (($obj: SettingsPage, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-tooltip", ...args: any[]): void
    connect(sigName: "notify::height-request", callback: (($obj: SettingsPage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height-request", callback: (($obj: SettingsPage, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::height-request", ...args: any[]): void
    connect(sigName: "notify::hexpand", callback: (($obj: SettingsPage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand", callback: (($obj: SettingsPage, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hexpand", ...args: any[]): void
    connect(sigName: "notify::hexpand-set", callback: (($obj: SettingsPage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand-set", callback: (($obj: SettingsPage, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hexpand-set", ...args: any[]): void
    connect(sigName: "notify::layout-manager", callback: (($obj: SettingsPage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::layout-manager", callback: (($obj: SettingsPage, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::layout-manager", ...args: any[]): void
    connect(sigName: "notify::margin-bottom", callback: (($obj: SettingsPage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-bottom", callback: (($obj: SettingsPage, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-bottom", ...args: any[]): void
    connect(sigName: "notify::margin-end", callback: (($obj: SettingsPage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-end", callback: (($obj: SettingsPage, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-end", ...args: any[]): void
    connect(sigName: "notify::margin-start", callback: (($obj: SettingsPage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-start", callback: (($obj: SettingsPage, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-start", ...args: any[]): void
    connect(sigName: "notify::margin-top", callback: (($obj: SettingsPage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-top", callback: (($obj: SettingsPage, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-top", ...args: any[]): void
    connect(sigName: "notify::name", callback: (($obj: SettingsPage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: SettingsPage, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::opacity", callback: (($obj: SettingsPage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opacity", callback: (($obj: SettingsPage, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::opacity", ...args: any[]): void
    connect(sigName: "notify::overflow", callback: (($obj: SettingsPage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::overflow", callback: (($obj: SettingsPage, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::overflow", ...args: any[]): void
    connect(sigName: "notify::parent", callback: (($obj: SettingsPage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: SettingsPage, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::parent", ...args: any[]): void
    connect(sigName: "notify::receives-default", callback: (($obj: SettingsPage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::receives-default", callback: (($obj: SettingsPage, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::receives-default", ...args: any[]): void
    connect(sigName: "notify::root", callback: (($obj: SettingsPage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::root", callback: (($obj: SettingsPage, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::root", ...args: any[]): void
    connect(sigName: "notify::scale-factor", callback: (($obj: SettingsPage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-factor", callback: (($obj: SettingsPage, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::scale-factor", ...args: any[]): void
    connect(sigName: "notify::sensitive", callback: (($obj: SettingsPage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sensitive", callback: (($obj: SettingsPage, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::sensitive", ...args: any[]): void
    connect(sigName: "notify::tooltip-markup", callback: (($obj: SettingsPage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-markup", callback: (($obj: SettingsPage, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tooltip-markup", ...args: any[]): void
    connect(sigName: "notify::tooltip-text", callback: (($obj: SettingsPage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-text", callback: (($obj: SettingsPage, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tooltip-text", ...args: any[]): void
    connect(sigName: "notify::valign", callback: (($obj: SettingsPage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::valign", callback: (($obj: SettingsPage, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::valign", ...args: any[]): void
    connect(sigName: "notify::vexpand", callback: (($obj: SettingsPage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand", callback: (($obj: SettingsPage, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vexpand", ...args: any[]): void
    connect(sigName: "notify::vexpand-set", callback: (($obj: SettingsPage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand-set", callback: (($obj: SettingsPage, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vexpand-set", ...args: any[]): void
    connect(sigName: "notify::visible", callback: (($obj: SettingsPage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visible", callback: (($obj: SettingsPage, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::visible", ...args: any[]): void
    connect(sigName: "notify::width-request", callback: (($obj: SettingsPage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::width-request", callback: (($obj: SettingsPage, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::width-request", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class SettingsPage extends Gtk.Box {

    // Own properties of Granite-7.0.Granite.SettingsPage

    static name: string
    static $gtype: GObject.GType<SettingsPage>

    // Constructors of Granite-7.0.Granite.SettingsPage

    constructor(config?: SettingsPage_ConstructProps) 
    _init(config?: SettingsPage_ConstructProps): void
}

interface SimpleSettingsPage_ConstructProps extends SettingsPage_ConstructProps {

    // Own constructor properties of Granite-7.0.Granite.SimpleSettingsPage

    action_area?: Gtk.Box | null
    content_area?: Gtk.Grid | null
    status_switch?: Gtk.Switch | null
    activatable?: boolean | null
    description?: string | null
}

interface SimpleSettingsPage {

    // Own properties of Granite-7.0.Granite.SimpleSettingsPage

    readonly action_area: Gtk.Box
    readonly content_area: Gtk.Grid
    readonly status_switch: Gtk.Switch
    readonly activatable: boolean
    description: string

    // Conflicting properties

    parent_instance: any

    // Owm methods of Granite-7.0.Granite.SimpleSettingsPage

    get_action_area(): Gtk.Box
    get_content_area(): Gtk.Grid
    get_status_switch(): Gtk.Switch | null
    get_activatable(): boolean
    get_description(): string
    set_description(value: string): void

    // Class property signals of Granite-7.0.Granite.SimpleSettingsPage

    connect(sigName: "notify::action-area", callback: (($obj: SimpleSettingsPage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::action-area", callback: (($obj: SimpleSettingsPage, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::action-area", ...args: any[]): void
    connect(sigName: "notify::content-area", callback: (($obj: SimpleSettingsPage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::content-area", callback: (($obj: SimpleSettingsPage, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::content-area", ...args: any[]): void
    connect(sigName: "notify::status-switch", callback: (($obj: SimpleSettingsPage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::status-switch", callback: (($obj: SimpleSettingsPage, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::status-switch", ...args: any[]): void
    connect(sigName: "notify::activatable", callback: (($obj: SimpleSettingsPage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::activatable", callback: (($obj: SimpleSettingsPage, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::activatable", ...args: any[]): void
    connect(sigName: "notify::description", callback: (($obj: SimpleSettingsPage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::description", callback: (($obj: SimpleSettingsPage, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::description", ...args: any[]): void
    connect(sigName: "notify::status-type", callback: (($obj: SimpleSettingsPage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::status-type", callback: (($obj: SimpleSettingsPage, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::status-type", ...args: any[]): void
    connect(sigName: "notify::display-widget", callback: (($obj: SimpleSettingsPage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::display-widget", callback: (($obj: SimpleSettingsPage, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::display-widget", ...args: any[]): void
    connect(sigName: "notify::header", callback: (($obj: SimpleSettingsPage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::header", callback: (($obj: SimpleSettingsPage, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::header", ...args: any[]): void
    connect(sigName: "notify::status", callback: (($obj: SimpleSettingsPage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::status", callback: (($obj: SimpleSettingsPage, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::status", ...args: any[]): void
    connect(sigName: "notify::icon-name", callback: (($obj: SimpleSettingsPage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::icon-name", callback: (($obj: SimpleSettingsPage, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::icon-name", ...args: any[]): void
    connect(sigName: "notify::title", callback: (($obj: SimpleSettingsPage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::title", callback: (($obj: SimpleSettingsPage, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::title", ...args: any[]): void
    connect(sigName: "notify::child", callback: (($obj: SimpleSettingsPage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::child", callback: (($obj: SimpleSettingsPage, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::child", ...args: any[]): void
    connect(sigName: "notify::baseline-position", callback: (($obj: SimpleSettingsPage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::baseline-position", callback: (($obj: SimpleSettingsPage, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::baseline-position", ...args: any[]): void
    connect(sigName: "notify::homogeneous", callback: (($obj: SimpleSettingsPage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::homogeneous", callback: (($obj: SimpleSettingsPage, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::homogeneous", ...args: any[]): void
    connect(sigName: "notify::spacing", callback: (($obj: SimpleSettingsPage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::spacing", callback: (($obj: SimpleSettingsPage, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::spacing", ...args: any[]): void
    connect(sigName: "notify::can-focus", callback: (($obj: SimpleSettingsPage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-focus", callback: (($obj: SimpleSettingsPage, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-focus", ...args: any[]): void
    connect(sigName: "notify::can-target", callback: (($obj: SimpleSettingsPage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-target", callback: (($obj: SimpleSettingsPage, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-target", ...args: any[]): void
    connect(sigName: "notify::css-classes", callback: (($obj: SimpleSettingsPage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::css-classes", callback: (($obj: SimpleSettingsPage, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::css-classes", ...args: any[]): void
    connect(sigName: "notify::css-name", callback: (($obj: SimpleSettingsPage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::css-name", callback: (($obj: SimpleSettingsPage, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::css-name", ...args: any[]): void
    connect(sigName: "notify::cursor", callback: (($obj: SimpleSettingsPage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::cursor", callback: (($obj: SimpleSettingsPage, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::cursor", ...args: any[]): void
    connect(sigName: "notify::focus-on-click", callback: (($obj: SimpleSettingsPage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::focus-on-click", callback: (($obj: SimpleSettingsPage, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::focus-on-click", ...args: any[]): void
    connect(sigName: "notify::focusable", callback: (($obj: SimpleSettingsPage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::focusable", callback: (($obj: SimpleSettingsPage, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::focusable", ...args: any[]): void
    connect(sigName: "notify::halign", callback: (($obj: SimpleSettingsPage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::halign", callback: (($obj: SimpleSettingsPage, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::halign", ...args: any[]): void
    connect(sigName: "notify::has-default", callback: (($obj: SimpleSettingsPage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-default", callback: (($obj: SimpleSettingsPage, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-default", ...args: any[]): void
    connect(sigName: "notify::has-focus", callback: (($obj: SimpleSettingsPage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-focus", callback: (($obj: SimpleSettingsPage, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-focus", ...args: any[]): void
    connect(sigName: "notify::has-tooltip", callback: (($obj: SimpleSettingsPage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-tooltip", callback: (($obj: SimpleSettingsPage, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-tooltip", ...args: any[]): void
    connect(sigName: "notify::height-request", callback: (($obj: SimpleSettingsPage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height-request", callback: (($obj: SimpleSettingsPage, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::height-request", ...args: any[]): void
    connect(sigName: "notify::hexpand", callback: (($obj: SimpleSettingsPage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand", callback: (($obj: SimpleSettingsPage, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hexpand", ...args: any[]): void
    connect(sigName: "notify::hexpand-set", callback: (($obj: SimpleSettingsPage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand-set", callback: (($obj: SimpleSettingsPage, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hexpand-set", ...args: any[]): void
    connect(sigName: "notify::layout-manager", callback: (($obj: SimpleSettingsPage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::layout-manager", callback: (($obj: SimpleSettingsPage, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::layout-manager", ...args: any[]): void
    connect(sigName: "notify::margin-bottom", callback: (($obj: SimpleSettingsPage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-bottom", callback: (($obj: SimpleSettingsPage, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-bottom", ...args: any[]): void
    connect(sigName: "notify::margin-end", callback: (($obj: SimpleSettingsPage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-end", callback: (($obj: SimpleSettingsPage, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-end", ...args: any[]): void
    connect(sigName: "notify::margin-start", callback: (($obj: SimpleSettingsPage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-start", callback: (($obj: SimpleSettingsPage, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-start", ...args: any[]): void
    connect(sigName: "notify::margin-top", callback: (($obj: SimpleSettingsPage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-top", callback: (($obj: SimpleSettingsPage, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-top", ...args: any[]): void
    connect(sigName: "notify::name", callback: (($obj: SimpleSettingsPage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: SimpleSettingsPage, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::opacity", callback: (($obj: SimpleSettingsPage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opacity", callback: (($obj: SimpleSettingsPage, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::opacity", ...args: any[]): void
    connect(sigName: "notify::overflow", callback: (($obj: SimpleSettingsPage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::overflow", callback: (($obj: SimpleSettingsPage, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::overflow", ...args: any[]): void
    connect(sigName: "notify::parent", callback: (($obj: SimpleSettingsPage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: SimpleSettingsPage, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::parent", ...args: any[]): void
    connect(sigName: "notify::receives-default", callback: (($obj: SimpleSettingsPage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::receives-default", callback: (($obj: SimpleSettingsPage, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::receives-default", ...args: any[]): void
    connect(sigName: "notify::root", callback: (($obj: SimpleSettingsPage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::root", callback: (($obj: SimpleSettingsPage, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::root", ...args: any[]): void
    connect(sigName: "notify::scale-factor", callback: (($obj: SimpleSettingsPage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-factor", callback: (($obj: SimpleSettingsPage, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::scale-factor", ...args: any[]): void
    connect(sigName: "notify::sensitive", callback: (($obj: SimpleSettingsPage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sensitive", callback: (($obj: SimpleSettingsPage, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::sensitive", ...args: any[]): void
    connect(sigName: "notify::tooltip-markup", callback: (($obj: SimpleSettingsPage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-markup", callback: (($obj: SimpleSettingsPage, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tooltip-markup", ...args: any[]): void
    connect(sigName: "notify::tooltip-text", callback: (($obj: SimpleSettingsPage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-text", callback: (($obj: SimpleSettingsPage, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tooltip-text", ...args: any[]): void
    connect(sigName: "notify::valign", callback: (($obj: SimpleSettingsPage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::valign", callback: (($obj: SimpleSettingsPage, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::valign", ...args: any[]): void
    connect(sigName: "notify::vexpand", callback: (($obj: SimpleSettingsPage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand", callback: (($obj: SimpleSettingsPage, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vexpand", ...args: any[]): void
    connect(sigName: "notify::vexpand-set", callback: (($obj: SimpleSettingsPage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand-set", callback: (($obj: SimpleSettingsPage, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vexpand-set", ...args: any[]): void
    connect(sigName: "notify::visible", callback: (($obj: SimpleSettingsPage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visible", callback: (($obj: SimpleSettingsPage, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::visible", ...args: any[]): void
    connect(sigName: "notify::width-request", callback: (($obj: SimpleSettingsPage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::width-request", callback: (($obj: SimpleSettingsPage, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::width-request", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class SimpleSettingsPage extends SettingsPage {

    // Own properties of Granite-7.0.Granite.SimpleSettingsPage

    static name: string
    static $gtype: GObject.GType<SimpleSettingsPage>

    // Constructors of Granite-7.0.Granite.SimpleSettingsPage

    constructor(config?: SimpleSettingsPage_ConstructProps) 
    _init(config?: SimpleSettingsPage_ConstructProps): void
}

interface AccelLabel_ConstructProps extends Gtk.Box_ConstructProps {

    // Own constructor properties of Granite-7.0.Granite.AccelLabel

    action_name?: string | null
    accel_string?: string | null
    label?: string | null
}

interface AccelLabel {

    // Own properties of Granite-7.0.Granite.AccelLabel

    action_name: string
    accel_string: string
    label: string

    // Conflicting properties

    parent_instance: any

    // Owm methods of Granite-7.0.Granite.AccelLabel

    get_action_name(): string
    set_action_name(value: string): void
    get_accel_string(): string | null
    set_accel_string(value: string | null): void
    get_label(): string
    set_label(value: string): void

    // Class property signals of Granite-7.0.Granite.AccelLabel

    connect(sigName: "notify::action-name", callback: (($obj: AccelLabel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::action-name", callback: (($obj: AccelLabel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::action-name", ...args: any[]): void
    connect(sigName: "notify::accel-string", callback: (($obj: AccelLabel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accel-string", callback: (($obj: AccelLabel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::accel-string", ...args: any[]): void
    connect(sigName: "notify::label", callback: (($obj: AccelLabel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::label", callback: (($obj: AccelLabel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::label", ...args: any[]): void
    connect(sigName: "notify::baseline-position", callback: (($obj: AccelLabel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::baseline-position", callback: (($obj: AccelLabel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::baseline-position", ...args: any[]): void
    connect(sigName: "notify::homogeneous", callback: (($obj: AccelLabel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::homogeneous", callback: (($obj: AccelLabel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::homogeneous", ...args: any[]): void
    connect(sigName: "notify::spacing", callback: (($obj: AccelLabel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::spacing", callback: (($obj: AccelLabel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::spacing", ...args: any[]): void
    connect(sigName: "notify::can-focus", callback: (($obj: AccelLabel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-focus", callback: (($obj: AccelLabel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-focus", ...args: any[]): void
    connect(sigName: "notify::can-target", callback: (($obj: AccelLabel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-target", callback: (($obj: AccelLabel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-target", ...args: any[]): void
    connect(sigName: "notify::css-classes", callback: (($obj: AccelLabel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::css-classes", callback: (($obj: AccelLabel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::css-classes", ...args: any[]): void
    connect(sigName: "notify::css-name", callback: (($obj: AccelLabel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::css-name", callback: (($obj: AccelLabel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::css-name", ...args: any[]): void
    connect(sigName: "notify::cursor", callback: (($obj: AccelLabel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::cursor", callback: (($obj: AccelLabel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::cursor", ...args: any[]): void
    connect(sigName: "notify::focus-on-click", callback: (($obj: AccelLabel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::focus-on-click", callback: (($obj: AccelLabel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::focus-on-click", ...args: any[]): void
    connect(sigName: "notify::focusable", callback: (($obj: AccelLabel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::focusable", callback: (($obj: AccelLabel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::focusable", ...args: any[]): void
    connect(sigName: "notify::halign", callback: (($obj: AccelLabel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::halign", callback: (($obj: AccelLabel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::halign", ...args: any[]): void
    connect(sigName: "notify::has-default", callback: (($obj: AccelLabel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-default", callback: (($obj: AccelLabel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-default", ...args: any[]): void
    connect(sigName: "notify::has-focus", callback: (($obj: AccelLabel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-focus", callback: (($obj: AccelLabel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-focus", ...args: any[]): void
    connect(sigName: "notify::has-tooltip", callback: (($obj: AccelLabel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-tooltip", callback: (($obj: AccelLabel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-tooltip", ...args: any[]): void
    connect(sigName: "notify::height-request", callback: (($obj: AccelLabel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height-request", callback: (($obj: AccelLabel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::height-request", ...args: any[]): void
    connect(sigName: "notify::hexpand", callback: (($obj: AccelLabel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand", callback: (($obj: AccelLabel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hexpand", ...args: any[]): void
    connect(sigName: "notify::hexpand-set", callback: (($obj: AccelLabel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand-set", callback: (($obj: AccelLabel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hexpand-set", ...args: any[]): void
    connect(sigName: "notify::layout-manager", callback: (($obj: AccelLabel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::layout-manager", callback: (($obj: AccelLabel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::layout-manager", ...args: any[]): void
    connect(sigName: "notify::margin-bottom", callback: (($obj: AccelLabel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-bottom", callback: (($obj: AccelLabel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-bottom", ...args: any[]): void
    connect(sigName: "notify::margin-end", callback: (($obj: AccelLabel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-end", callback: (($obj: AccelLabel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-end", ...args: any[]): void
    connect(sigName: "notify::margin-start", callback: (($obj: AccelLabel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-start", callback: (($obj: AccelLabel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-start", ...args: any[]): void
    connect(sigName: "notify::margin-top", callback: (($obj: AccelLabel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-top", callback: (($obj: AccelLabel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-top", ...args: any[]): void
    connect(sigName: "notify::name", callback: (($obj: AccelLabel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: AccelLabel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::opacity", callback: (($obj: AccelLabel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opacity", callback: (($obj: AccelLabel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::opacity", ...args: any[]): void
    connect(sigName: "notify::overflow", callback: (($obj: AccelLabel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::overflow", callback: (($obj: AccelLabel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::overflow", ...args: any[]): void
    connect(sigName: "notify::parent", callback: (($obj: AccelLabel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: AccelLabel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::parent", ...args: any[]): void
    connect(sigName: "notify::receives-default", callback: (($obj: AccelLabel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::receives-default", callback: (($obj: AccelLabel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::receives-default", ...args: any[]): void
    connect(sigName: "notify::root", callback: (($obj: AccelLabel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::root", callback: (($obj: AccelLabel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::root", ...args: any[]): void
    connect(sigName: "notify::scale-factor", callback: (($obj: AccelLabel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-factor", callback: (($obj: AccelLabel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::scale-factor", ...args: any[]): void
    connect(sigName: "notify::sensitive", callback: (($obj: AccelLabel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sensitive", callback: (($obj: AccelLabel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::sensitive", ...args: any[]): void
    connect(sigName: "notify::tooltip-markup", callback: (($obj: AccelLabel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-markup", callback: (($obj: AccelLabel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tooltip-markup", ...args: any[]): void
    connect(sigName: "notify::tooltip-text", callback: (($obj: AccelLabel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-text", callback: (($obj: AccelLabel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tooltip-text", ...args: any[]): void
    connect(sigName: "notify::valign", callback: (($obj: AccelLabel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::valign", callback: (($obj: AccelLabel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::valign", ...args: any[]): void
    connect(sigName: "notify::vexpand", callback: (($obj: AccelLabel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand", callback: (($obj: AccelLabel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vexpand", ...args: any[]): void
    connect(sigName: "notify::vexpand-set", callback: (($obj: AccelLabel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand-set", callback: (($obj: AccelLabel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vexpand-set", ...args: any[]): void
    connect(sigName: "notify::visible", callback: (($obj: AccelLabel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visible", callback: (($obj: AccelLabel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::visible", ...args: any[]): void
    connect(sigName: "notify::width-request", callback: (($obj: AccelLabel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::width-request", callback: (($obj: AccelLabel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::width-request", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class AccelLabel extends Gtk.Box {

    // Own properties of Granite-7.0.Granite.AccelLabel

    static name: string
    static $gtype: GObject.GType<AccelLabel>

    // Constructors of Granite-7.0.Granite.AccelLabel

    constructor(config?: AccelLabel_ConstructProps) 
    constructor(label: string, accel_string: string | null) 
    static new(label: string, accel_string: string | null): AccelLabel

    // Overloads of new

    /**
     * Creates a new `GtkBox`.
     * @constructor 
     * @param orientation the box’s orientation
     * @param spacing the number of pixels to place by default between children
     */
    static new(orientation: Gtk.Orientation, spacing: number): Gtk.Box
    static from_action_name(label: string, action_name: string): AccelLabel
    _init(config?: AccelLabel_ConstructProps): void
}

interface DatePicker_ConstructProps extends Gtk.Buildable_ConstructProps, Gtk.Entry_ConstructProps {

    // Own constructor properties of Granite-7.0.Granite.DatePicker

    format?: string | null
    date?: GLib.DateTime | null
}

interface DatePicker extends Gtk.Buildable {

    // Own properties of Granite-7.0.Granite.DatePicker

    readonly format: string
    date: GLib.DateTime

    // Owm methods of Granite-7.0.Granite.DatePicker

    get_format(): string
    get_date(): GLib.DateTime
    set_date(value: GLib.DateTime): void

    // Class property signals of Granite-7.0.Granite.DatePicker

    connect(sigName: "notify::format", callback: (($obj: DatePicker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::format", callback: (($obj: DatePicker, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::format", ...args: any[]): void
    connect(sigName: "notify::date", callback: (($obj: DatePicker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::date", callback: (($obj: DatePicker, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::date", ...args: any[]): void
    connect(sigName: "notify::activates-default", callback: (($obj: DatePicker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::activates-default", callback: (($obj: DatePicker, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::activates-default", ...args: any[]): void
    connect(sigName: "notify::attributes", callback: (($obj: DatePicker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::attributes", callback: (($obj: DatePicker, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::attributes", ...args: any[]): void
    connect(sigName: "notify::buffer", callback: (($obj: DatePicker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::buffer", callback: (($obj: DatePicker, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::buffer", ...args: any[]): void
    connect(sigName: "notify::completion", callback: (($obj: DatePicker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::completion", callback: (($obj: DatePicker, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::completion", ...args: any[]): void
    connect(sigName: "notify::enable-emoji-completion", callback: (($obj: DatePicker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::enable-emoji-completion", callback: (($obj: DatePicker, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::enable-emoji-completion", ...args: any[]): void
    connect(sigName: "notify::extra-menu", callback: (($obj: DatePicker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::extra-menu", callback: (($obj: DatePicker, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::extra-menu", ...args: any[]): void
    connect(sigName: "notify::has-frame", callback: (($obj: DatePicker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-frame", callback: (($obj: DatePicker, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-frame", ...args: any[]): void
    connect(sigName: "notify::im-module", callback: (($obj: DatePicker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::im-module", callback: (($obj: DatePicker, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::im-module", ...args: any[]): void
    connect(sigName: "notify::input-hints", callback: (($obj: DatePicker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::input-hints", callback: (($obj: DatePicker, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::input-hints", ...args: any[]): void
    connect(sigName: "notify::input-purpose", callback: (($obj: DatePicker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::input-purpose", callback: (($obj: DatePicker, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::input-purpose", ...args: any[]): void
    connect(sigName: "notify::invisible-char", callback: (($obj: DatePicker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::invisible-char", callback: (($obj: DatePicker, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::invisible-char", ...args: any[]): void
    connect(sigName: "notify::invisible-char-set", callback: (($obj: DatePicker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::invisible-char-set", callback: (($obj: DatePicker, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::invisible-char-set", ...args: any[]): void
    connect(sigName: "notify::max-length", callback: (($obj: DatePicker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::max-length", callback: (($obj: DatePicker, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::max-length", ...args: any[]): void
    connect(sigName: "notify::overwrite-mode", callback: (($obj: DatePicker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::overwrite-mode", callback: (($obj: DatePicker, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::overwrite-mode", ...args: any[]): void
    connect(sigName: "notify::placeholder-text", callback: (($obj: DatePicker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::placeholder-text", callback: (($obj: DatePicker, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::placeholder-text", ...args: any[]): void
    connect(sigName: "notify::primary-icon-activatable", callback: (($obj: DatePicker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::primary-icon-activatable", callback: (($obj: DatePicker, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::primary-icon-activatable", ...args: any[]): void
    connect(sigName: "notify::primary-icon-gicon", callback: (($obj: DatePicker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::primary-icon-gicon", callback: (($obj: DatePicker, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::primary-icon-gicon", ...args: any[]): void
    connect(sigName: "notify::primary-icon-name", callback: (($obj: DatePicker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::primary-icon-name", callback: (($obj: DatePicker, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::primary-icon-name", ...args: any[]): void
    connect(sigName: "notify::primary-icon-paintable", callback: (($obj: DatePicker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::primary-icon-paintable", callback: (($obj: DatePicker, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::primary-icon-paintable", ...args: any[]): void
    connect(sigName: "notify::primary-icon-sensitive", callback: (($obj: DatePicker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::primary-icon-sensitive", callback: (($obj: DatePicker, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::primary-icon-sensitive", ...args: any[]): void
    connect(sigName: "notify::primary-icon-storage-type", callback: (($obj: DatePicker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::primary-icon-storage-type", callback: (($obj: DatePicker, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::primary-icon-storage-type", ...args: any[]): void
    connect(sigName: "notify::primary-icon-tooltip-markup", callback: (($obj: DatePicker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::primary-icon-tooltip-markup", callback: (($obj: DatePicker, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::primary-icon-tooltip-markup", ...args: any[]): void
    connect(sigName: "notify::primary-icon-tooltip-text", callback: (($obj: DatePicker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::primary-icon-tooltip-text", callback: (($obj: DatePicker, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::primary-icon-tooltip-text", ...args: any[]): void
    connect(sigName: "notify::progress-fraction", callback: (($obj: DatePicker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::progress-fraction", callback: (($obj: DatePicker, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::progress-fraction", ...args: any[]): void
    connect(sigName: "notify::progress-pulse-step", callback: (($obj: DatePicker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::progress-pulse-step", callback: (($obj: DatePicker, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::progress-pulse-step", ...args: any[]): void
    connect(sigName: "notify::scroll-offset", callback: (($obj: DatePicker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scroll-offset", callback: (($obj: DatePicker, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::scroll-offset", ...args: any[]): void
    connect(sigName: "notify::secondary-icon-activatable", callback: (($obj: DatePicker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::secondary-icon-activatable", callback: (($obj: DatePicker, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::secondary-icon-activatable", ...args: any[]): void
    connect(sigName: "notify::secondary-icon-gicon", callback: (($obj: DatePicker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::secondary-icon-gicon", callback: (($obj: DatePicker, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::secondary-icon-gicon", ...args: any[]): void
    connect(sigName: "notify::secondary-icon-name", callback: (($obj: DatePicker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::secondary-icon-name", callback: (($obj: DatePicker, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::secondary-icon-name", ...args: any[]): void
    connect(sigName: "notify::secondary-icon-paintable", callback: (($obj: DatePicker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::secondary-icon-paintable", callback: (($obj: DatePicker, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::secondary-icon-paintable", ...args: any[]): void
    connect(sigName: "notify::secondary-icon-sensitive", callback: (($obj: DatePicker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::secondary-icon-sensitive", callback: (($obj: DatePicker, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::secondary-icon-sensitive", ...args: any[]): void
    connect(sigName: "notify::secondary-icon-storage-type", callback: (($obj: DatePicker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::secondary-icon-storage-type", callback: (($obj: DatePicker, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::secondary-icon-storage-type", ...args: any[]): void
    connect(sigName: "notify::secondary-icon-tooltip-markup", callback: (($obj: DatePicker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::secondary-icon-tooltip-markup", callback: (($obj: DatePicker, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::secondary-icon-tooltip-markup", ...args: any[]): void
    connect(sigName: "notify::secondary-icon-tooltip-text", callback: (($obj: DatePicker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::secondary-icon-tooltip-text", callback: (($obj: DatePicker, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::secondary-icon-tooltip-text", ...args: any[]): void
    connect(sigName: "notify::show-emoji-icon", callback: (($obj: DatePicker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::show-emoji-icon", callback: (($obj: DatePicker, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::show-emoji-icon", ...args: any[]): void
    connect(sigName: "notify::tabs", callback: (($obj: DatePicker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tabs", callback: (($obj: DatePicker, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tabs", ...args: any[]): void
    connect(sigName: "notify::text-length", callback: (($obj: DatePicker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::text-length", callback: (($obj: DatePicker, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::text-length", ...args: any[]): void
    connect(sigName: "notify::truncate-multiline", callback: (($obj: DatePicker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::truncate-multiline", callback: (($obj: DatePicker, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::truncate-multiline", ...args: any[]): void
    connect(sigName: "notify::visibility", callback: (($obj: DatePicker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visibility", callback: (($obj: DatePicker, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::visibility", ...args: any[]): void
    connect(sigName: "notify::can-focus", callback: (($obj: DatePicker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-focus", callback: (($obj: DatePicker, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-focus", ...args: any[]): void
    connect(sigName: "notify::can-target", callback: (($obj: DatePicker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-target", callback: (($obj: DatePicker, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-target", ...args: any[]): void
    connect(sigName: "notify::css-classes", callback: (($obj: DatePicker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::css-classes", callback: (($obj: DatePicker, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::css-classes", ...args: any[]): void
    connect(sigName: "notify::css-name", callback: (($obj: DatePicker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::css-name", callback: (($obj: DatePicker, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::css-name", ...args: any[]): void
    connect(sigName: "notify::cursor", callback: (($obj: DatePicker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::cursor", callback: (($obj: DatePicker, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::cursor", ...args: any[]): void
    connect(sigName: "notify::focus-on-click", callback: (($obj: DatePicker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::focus-on-click", callback: (($obj: DatePicker, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::focus-on-click", ...args: any[]): void
    connect(sigName: "notify::focusable", callback: (($obj: DatePicker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::focusable", callback: (($obj: DatePicker, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::focusable", ...args: any[]): void
    connect(sigName: "notify::halign", callback: (($obj: DatePicker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::halign", callback: (($obj: DatePicker, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::halign", ...args: any[]): void
    connect(sigName: "notify::has-default", callback: (($obj: DatePicker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-default", callback: (($obj: DatePicker, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-default", ...args: any[]): void
    connect(sigName: "notify::has-focus", callback: (($obj: DatePicker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-focus", callback: (($obj: DatePicker, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-focus", ...args: any[]): void
    connect(sigName: "notify::has-tooltip", callback: (($obj: DatePicker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-tooltip", callback: (($obj: DatePicker, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-tooltip", ...args: any[]): void
    connect(sigName: "notify::height-request", callback: (($obj: DatePicker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height-request", callback: (($obj: DatePicker, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::height-request", ...args: any[]): void
    connect(sigName: "notify::hexpand", callback: (($obj: DatePicker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand", callback: (($obj: DatePicker, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hexpand", ...args: any[]): void
    connect(sigName: "notify::hexpand-set", callback: (($obj: DatePicker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand-set", callback: (($obj: DatePicker, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hexpand-set", ...args: any[]): void
    connect(sigName: "notify::layout-manager", callback: (($obj: DatePicker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::layout-manager", callback: (($obj: DatePicker, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::layout-manager", ...args: any[]): void
    connect(sigName: "notify::margin-bottom", callback: (($obj: DatePicker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-bottom", callback: (($obj: DatePicker, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-bottom", ...args: any[]): void
    connect(sigName: "notify::margin-end", callback: (($obj: DatePicker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-end", callback: (($obj: DatePicker, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-end", ...args: any[]): void
    connect(sigName: "notify::margin-start", callback: (($obj: DatePicker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-start", callback: (($obj: DatePicker, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-start", ...args: any[]): void
    connect(sigName: "notify::margin-top", callback: (($obj: DatePicker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-top", callback: (($obj: DatePicker, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-top", ...args: any[]): void
    connect(sigName: "notify::name", callback: (($obj: DatePicker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: DatePicker, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::opacity", callback: (($obj: DatePicker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opacity", callback: (($obj: DatePicker, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::opacity", ...args: any[]): void
    connect(sigName: "notify::overflow", callback: (($obj: DatePicker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::overflow", callback: (($obj: DatePicker, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::overflow", ...args: any[]): void
    connect(sigName: "notify::parent", callback: (($obj: DatePicker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: DatePicker, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::parent", ...args: any[]): void
    connect(sigName: "notify::receives-default", callback: (($obj: DatePicker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::receives-default", callback: (($obj: DatePicker, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::receives-default", ...args: any[]): void
    connect(sigName: "notify::root", callback: (($obj: DatePicker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::root", callback: (($obj: DatePicker, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::root", ...args: any[]): void
    connect(sigName: "notify::scale-factor", callback: (($obj: DatePicker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-factor", callback: (($obj: DatePicker, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::scale-factor", ...args: any[]): void
    connect(sigName: "notify::sensitive", callback: (($obj: DatePicker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sensitive", callback: (($obj: DatePicker, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::sensitive", ...args: any[]): void
    connect(sigName: "notify::tooltip-markup", callback: (($obj: DatePicker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-markup", callback: (($obj: DatePicker, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tooltip-markup", ...args: any[]): void
    connect(sigName: "notify::tooltip-text", callback: (($obj: DatePicker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-text", callback: (($obj: DatePicker, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tooltip-text", ...args: any[]): void
    connect(sigName: "notify::valign", callback: (($obj: DatePicker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::valign", callback: (($obj: DatePicker, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::valign", ...args: any[]): void
    connect(sigName: "notify::vexpand", callback: (($obj: DatePicker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand", callback: (($obj: DatePicker, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vexpand", ...args: any[]): void
    connect(sigName: "notify::vexpand-set", callback: (($obj: DatePicker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand-set", callback: (($obj: DatePicker, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vexpand-set", ...args: any[]): void
    connect(sigName: "notify::visible", callback: (($obj: DatePicker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visible", callback: (($obj: DatePicker, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::visible", ...args: any[]): void
    connect(sigName: "notify::width-request", callback: (($obj: DatePicker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::width-request", callback: (($obj: DatePicker, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::width-request", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class DatePicker extends Gtk.Entry {

    // Own properties of Granite-7.0.Granite.DatePicker

    static name: string
    static $gtype: GObject.GType<DatePicker>

    // Constructors of Granite-7.0.Granite.DatePicker

    constructor(config?: DatePicker_ConstructProps) 
    static with_format(format: string): DatePicker
    constructor() 
    static new(): DatePicker

    // Overloads of new

    /**
     * Creates a new entry.
     * @constructor 
     */
    static new(): Gtk.Entry
    _init(config?: DatePicker_ConstructProps): void
}

interface Dialog_ConstructProps extends Gtk.Dialog_ConstructProps {
}

interface Dialog {

    // Conflicting properties

    parent_instance: any

    // Class property signals of Granite-7.0.Granite.Dialog

    connect(sigName: "notify::use-header-bar", callback: (($obj: Dialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::use-header-bar", callback: (($obj: Dialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::use-header-bar", ...args: any[]): void
    connect(sigName: "notify::application", callback: (($obj: Dialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::application", callback: (($obj: Dialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::application", ...args: any[]): void
    connect(sigName: "notify::child", callback: (($obj: Dialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::child", callback: (($obj: Dialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::child", ...args: any[]): void
    connect(sigName: "notify::decorated", callback: (($obj: Dialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::decorated", callback: (($obj: Dialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::decorated", ...args: any[]): void
    connect(sigName: "notify::default-height", callback: (($obj: Dialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::default-height", callback: (($obj: Dialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::default-height", ...args: any[]): void
    connect(sigName: "notify::default-widget", callback: (($obj: Dialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::default-widget", callback: (($obj: Dialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::default-widget", ...args: any[]): void
    connect(sigName: "notify::default-width", callback: (($obj: Dialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::default-width", callback: (($obj: Dialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::default-width", ...args: any[]): void
    connect(sigName: "notify::deletable", callback: (($obj: Dialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::deletable", callback: (($obj: Dialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::deletable", ...args: any[]): void
    connect(sigName: "notify::destroy-with-parent", callback: (($obj: Dialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::destroy-with-parent", callback: (($obj: Dialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::destroy-with-parent", ...args: any[]): void
    connect(sigName: "notify::display", callback: (($obj: Dialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::display", callback: (($obj: Dialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::display", ...args: any[]): void
    connect(sigName: "notify::focus-visible", callback: (($obj: Dialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::focus-visible", callback: (($obj: Dialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::focus-visible", ...args: any[]): void
    connect(sigName: "notify::focus-widget", callback: (($obj: Dialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::focus-widget", callback: (($obj: Dialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::focus-widget", ...args: any[]): void
    connect(sigName: "notify::fullscreened", callback: (($obj: Dialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fullscreened", callback: (($obj: Dialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::fullscreened", ...args: any[]): void
    connect(sigName: "notify::handle-menubar-accel", callback: (($obj: Dialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::handle-menubar-accel", callback: (($obj: Dialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::handle-menubar-accel", ...args: any[]): void
    connect(sigName: "notify::hide-on-close", callback: (($obj: Dialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hide-on-close", callback: (($obj: Dialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hide-on-close", ...args: any[]): void
    connect(sigName: "notify::icon-name", callback: (($obj: Dialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::icon-name", callback: (($obj: Dialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::icon-name", ...args: any[]): void
    connect(sigName: "notify::is-active", callback: (($obj: Dialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-active", callback: (($obj: Dialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::is-active", ...args: any[]): void
    connect(sigName: "notify::maximized", callback: (($obj: Dialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::maximized", callback: (($obj: Dialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::maximized", ...args: any[]): void
    connect(sigName: "notify::mnemonics-visible", callback: (($obj: Dialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::mnemonics-visible", callback: (($obj: Dialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::mnemonics-visible", ...args: any[]): void
    connect(sigName: "notify::modal", callback: (($obj: Dialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::modal", callback: (($obj: Dialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::modal", ...args: any[]): void
    connect(sigName: "notify::resizable", callback: (($obj: Dialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::resizable", callback: (($obj: Dialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::resizable", ...args: any[]): void
    connect(sigName: "notify::startup-id", callback: (($obj: Dialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::startup-id", callback: (($obj: Dialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::startup-id", ...args: any[]): void
    connect(sigName: "notify::title", callback: (($obj: Dialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::title", callback: (($obj: Dialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::title", ...args: any[]): void
    connect(sigName: "notify::titlebar", callback: (($obj: Dialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::titlebar", callback: (($obj: Dialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::titlebar", ...args: any[]): void
    connect(sigName: "notify::transient-for", callback: (($obj: Dialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::transient-for", callback: (($obj: Dialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::transient-for", ...args: any[]): void
    connect(sigName: "notify::can-focus", callback: (($obj: Dialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-focus", callback: (($obj: Dialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-focus", ...args: any[]): void
    connect(sigName: "notify::can-target", callback: (($obj: Dialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-target", callback: (($obj: Dialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-target", ...args: any[]): void
    connect(sigName: "notify::css-classes", callback: (($obj: Dialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::css-classes", callback: (($obj: Dialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::css-classes", ...args: any[]): void
    connect(sigName: "notify::css-name", callback: (($obj: Dialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::css-name", callback: (($obj: Dialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::css-name", ...args: any[]): void
    connect(sigName: "notify::cursor", callback: (($obj: Dialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::cursor", callback: (($obj: Dialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::cursor", ...args: any[]): void
    connect(sigName: "notify::focus-on-click", callback: (($obj: Dialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::focus-on-click", callback: (($obj: Dialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::focus-on-click", ...args: any[]): void
    connect(sigName: "notify::focusable", callback: (($obj: Dialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::focusable", callback: (($obj: Dialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::focusable", ...args: any[]): void
    connect(sigName: "notify::halign", callback: (($obj: Dialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::halign", callback: (($obj: Dialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::halign", ...args: any[]): void
    connect(sigName: "notify::has-default", callback: (($obj: Dialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-default", callback: (($obj: Dialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-default", ...args: any[]): void
    connect(sigName: "notify::has-focus", callback: (($obj: Dialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-focus", callback: (($obj: Dialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-focus", ...args: any[]): void
    connect(sigName: "notify::has-tooltip", callback: (($obj: Dialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-tooltip", callback: (($obj: Dialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-tooltip", ...args: any[]): void
    connect(sigName: "notify::height-request", callback: (($obj: Dialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height-request", callback: (($obj: Dialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::height-request", ...args: any[]): void
    connect(sigName: "notify::hexpand", callback: (($obj: Dialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand", callback: (($obj: Dialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hexpand", ...args: any[]): void
    connect(sigName: "notify::hexpand-set", callback: (($obj: Dialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand-set", callback: (($obj: Dialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hexpand-set", ...args: any[]): void
    connect(sigName: "notify::layout-manager", callback: (($obj: Dialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::layout-manager", callback: (($obj: Dialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::layout-manager", ...args: any[]): void
    connect(sigName: "notify::margin-bottom", callback: (($obj: Dialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-bottom", callback: (($obj: Dialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-bottom", ...args: any[]): void
    connect(sigName: "notify::margin-end", callback: (($obj: Dialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-end", callback: (($obj: Dialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-end", ...args: any[]): void
    connect(sigName: "notify::margin-start", callback: (($obj: Dialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-start", callback: (($obj: Dialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-start", ...args: any[]): void
    connect(sigName: "notify::margin-top", callback: (($obj: Dialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-top", callback: (($obj: Dialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-top", ...args: any[]): void
    connect(sigName: "notify::name", callback: (($obj: Dialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: Dialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::opacity", callback: (($obj: Dialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opacity", callback: (($obj: Dialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::opacity", ...args: any[]): void
    connect(sigName: "notify::overflow", callback: (($obj: Dialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::overflow", callback: (($obj: Dialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::overflow", ...args: any[]): void
    connect(sigName: "notify::parent", callback: (($obj: Dialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: Dialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::parent", ...args: any[]): void
    connect(sigName: "notify::receives-default", callback: (($obj: Dialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::receives-default", callback: (($obj: Dialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::receives-default", ...args: any[]): void
    connect(sigName: "notify::root", callback: (($obj: Dialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::root", callback: (($obj: Dialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::root", ...args: any[]): void
    connect(sigName: "notify::scale-factor", callback: (($obj: Dialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-factor", callback: (($obj: Dialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::scale-factor", ...args: any[]): void
    connect(sigName: "notify::sensitive", callback: (($obj: Dialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sensitive", callback: (($obj: Dialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::sensitive", ...args: any[]): void
    connect(sigName: "notify::tooltip-markup", callback: (($obj: Dialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-markup", callback: (($obj: Dialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tooltip-markup", ...args: any[]): void
    connect(sigName: "notify::tooltip-text", callback: (($obj: Dialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-text", callback: (($obj: Dialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tooltip-text", ...args: any[]): void
    connect(sigName: "notify::valign", callback: (($obj: Dialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::valign", callback: (($obj: Dialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::valign", ...args: any[]): void
    connect(sigName: "notify::vexpand", callback: (($obj: Dialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand", callback: (($obj: Dialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vexpand", ...args: any[]): void
    connect(sigName: "notify::vexpand-set", callback: (($obj: Dialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand-set", callback: (($obj: Dialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vexpand-set", ...args: any[]): void
    connect(sigName: "notify::visible", callback: (($obj: Dialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visible", callback: (($obj: Dialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::visible", ...args: any[]): void
    connect(sigName: "notify::width-request", callback: (($obj: Dialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::width-request", callback: (($obj: Dialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::width-request", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class Dialog extends Gtk.Dialog {

    // Own properties of Granite-7.0.Granite.Dialog

    static name: string
    static $gtype: GObject.GType<Dialog>

    // Constructors of Granite-7.0.Granite.Dialog

    constructor(config?: Dialog_ConstructProps) 
    constructor() 
    static new(): Dialog

    // Overloads of new

    /**
     * Creates a new dialog box.
     * 
     * Widgets should not be packed into the `GtkWindow`
     * directly, but into the `content_area` and `action_area,`
     * as described above.
     * @constructor 
     */
    static new(): Gtk.Dialog
    _init(config?: Dialog_ConstructProps): void
}

interface HeaderLabel_ConstructProps extends Gtk.Widget_ConstructProps {

    // Own constructor properties of Granite-7.0.Granite.HeaderLabel

    label?: string | null
}

interface HeaderLabel {

    // Own properties of Granite-7.0.Granite.HeaderLabel

    label: string

    // Owm methods of Granite-7.0.Granite.HeaderLabel

    get_label(): string
    set_label(value: string): void

    // Class property signals of Granite-7.0.Granite.HeaderLabel

    connect(sigName: "notify::label", callback: (($obj: HeaderLabel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::label", callback: (($obj: HeaderLabel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::label", ...args: any[]): void
    connect(sigName: "notify::can-focus", callback: (($obj: HeaderLabel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-focus", callback: (($obj: HeaderLabel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-focus", ...args: any[]): void
    connect(sigName: "notify::can-target", callback: (($obj: HeaderLabel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-target", callback: (($obj: HeaderLabel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-target", ...args: any[]): void
    connect(sigName: "notify::css-classes", callback: (($obj: HeaderLabel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::css-classes", callback: (($obj: HeaderLabel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::css-classes", ...args: any[]): void
    connect(sigName: "notify::css-name", callback: (($obj: HeaderLabel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::css-name", callback: (($obj: HeaderLabel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::css-name", ...args: any[]): void
    connect(sigName: "notify::cursor", callback: (($obj: HeaderLabel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::cursor", callback: (($obj: HeaderLabel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::cursor", ...args: any[]): void
    connect(sigName: "notify::focus-on-click", callback: (($obj: HeaderLabel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::focus-on-click", callback: (($obj: HeaderLabel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::focus-on-click", ...args: any[]): void
    connect(sigName: "notify::focusable", callback: (($obj: HeaderLabel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::focusable", callback: (($obj: HeaderLabel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::focusable", ...args: any[]): void
    connect(sigName: "notify::halign", callback: (($obj: HeaderLabel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::halign", callback: (($obj: HeaderLabel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::halign", ...args: any[]): void
    connect(sigName: "notify::has-default", callback: (($obj: HeaderLabel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-default", callback: (($obj: HeaderLabel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-default", ...args: any[]): void
    connect(sigName: "notify::has-focus", callback: (($obj: HeaderLabel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-focus", callback: (($obj: HeaderLabel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-focus", ...args: any[]): void
    connect(sigName: "notify::has-tooltip", callback: (($obj: HeaderLabel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-tooltip", callback: (($obj: HeaderLabel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-tooltip", ...args: any[]): void
    connect(sigName: "notify::height-request", callback: (($obj: HeaderLabel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height-request", callback: (($obj: HeaderLabel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::height-request", ...args: any[]): void
    connect(sigName: "notify::hexpand", callback: (($obj: HeaderLabel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand", callback: (($obj: HeaderLabel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hexpand", ...args: any[]): void
    connect(sigName: "notify::hexpand-set", callback: (($obj: HeaderLabel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand-set", callback: (($obj: HeaderLabel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hexpand-set", ...args: any[]): void
    connect(sigName: "notify::layout-manager", callback: (($obj: HeaderLabel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::layout-manager", callback: (($obj: HeaderLabel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::layout-manager", ...args: any[]): void
    connect(sigName: "notify::margin-bottom", callback: (($obj: HeaderLabel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-bottom", callback: (($obj: HeaderLabel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-bottom", ...args: any[]): void
    connect(sigName: "notify::margin-end", callback: (($obj: HeaderLabel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-end", callback: (($obj: HeaderLabel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-end", ...args: any[]): void
    connect(sigName: "notify::margin-start", callback: (($obj: HeaderLabel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-start", callback: (($obj: HeaderLabel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-start", ...args: any[]): void
    connect(sigName: "notify::margin-top", callback: (($obj: HeaderLabel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-top", callback: (($obj: HeaderLabel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-top", ...args: any[]): void
    connect(sigName: "notify::name", callback: (($obj: HeaderLabel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: HeaderLabel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::opacity", callback: (($obj: HeaderLabel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opacity", callback: (($obj: HeaderLabel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::opacity", ...args: any[]): void
    connect(sigName: "notify::overflow", callback: (($obj: HeaderLabel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::overflow", callback: (($obj: HeaderLabel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::overflow", ...args: any[]): void
    connect(sigName: "notify::parent", callback: (($obj: HeaderLabel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: HeaderLabel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::parent", ...args: any[]): void
    connect(sigName: "notify::receives-default", callback: (($obj: HeaderLabel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::receives-default", callback: (($obj: HeaderLabel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::receives-default", ...args: any[]): void
    connect(sigName: "notify::root", callback: (($obj: HeaderLabel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::root", callback: (($obj: HeaderLabel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::root", ...args: any[]): void
    connect(sigName: "notify::scale-factor", callback: (($obj: HeaderLabel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-factor", callback: (($obj: HeaderLabel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::scale-factor", ...args: any[]): void
    connect(sigName: "notify::sensitive", callback: (($obj: HeaderLabel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sensitive", callback: (($obj: HeaderLabel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::sensitive", ...args: any[]): void
    connect(sigName: "notify::tooltip-markup", callback: (($obj: HeaderLabel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-markup", callback: (($obj: HeaderLabel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tooltip-markup", ...args: any[]): void
    connect(sigName: "notify::tooltip-text", callback: (($obj: HeaderLabel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-text", callback: (($obj: HeaderLabel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tooltip-text", ...args: any[]): void
    connect(sigName: "notify::valign", callback: (($obj: HeaderLabel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::valign", callback: (($obj: HeaderLabel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::valign", ...args: any[]): void
    connect(sigName: "notify::vexpand", callback: (($obj: HeaderLabel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand", callback: (($obj: HeaderLabel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vexpand", ...args: any[]): void
    connect(sigName: "notify::vexpand-set", callback: (($obj: HeaderLabel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand-set", callback: (($obj: HeaderLabel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vexpand-set", ...args: any[]): void
    connect(sigName: "notify::visible", callback: (($obj: HeaderLabel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visible", callback: (($obj: HeaderLabel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::visible", ...args: any[]): void
    connect(sigName: "notify::width-request", callback: (($obj: HeaderLabel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::width-request", callback: (($obj: HeaderLabel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::width-request", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class HeaderLabel extends Gtk.Widget {

    // Own properties of Granite-7.0.Granite.HeaderLabel

    static name: string
    static $gtype: GObject.GType<HeaderLabel>

    // Constructors of Granite-7.0.Granite.HeaderLabel

    constructor(config?: HeaderLabel_ConstructProps) 
    constructor(label: string) 
    static new(label: string): HeaderLabel
    _init(config?: HeaderLabel_ConstructProps): void
}

interface HyperTextView_ConstructProps extends Gtk.TextView_ConstructProps {
}

interface HyperTextView {

    // Conflicting properties

    parent_instance: any

    // Class property signals of Granite-7.0.Granite.HyperTextView

    connect(sigName: "notify::accepts-tab", callback: (($obj: HyperTextView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accepts-tab", callback: (($obj: HyperTextView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::accepts-tab", ...args: any[]): void
    connect(sigName: "notify::bottom-margin", callback: (($obj: HyperTextView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::bottom-margin", callback: (($obj: HyperTextView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::bottom-margin", ...args: any[]): void
    connect(sigName: "notify::buffer", callback: (($obj: HyperTextView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::buffer", callback: (($obj: HyperTextView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::buffer", ...args: any[]): void
    connect(sigName: "notify::cursor-visible", callback: (($obj: HyperTextView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::cursor-visible", callback: (($obj: HyperTextView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::cursor-visible", ...args: any[]): void
    connect(sigName: "notify::editable", callback: (($obj: HyperTextView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::editable", callback: (($obj: HyperTextView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::editable", ...args: any[]): void
    connect(sigName: "notify::extra-menu", callback: (($obj: HyperTextView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::extra-menu", callback: (($obj: HyperTextView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::extra-menu", ...args: any[]): void
    connect(sigName: "notify::im-module", callback: (($obj: HyperTextView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::im-module", callback: (($obj: HyperTextView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::im-module", ...args: any[]): void
    connect(sigName: "notify::indent", callback: (($obj: HyperTextView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::indent", callback: (($obj: HyperTextView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::indent", ...args: any[]): void
    connect(sigName: "notify::input-hints", callback: (($obj: HyperTextView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::input-hints", callback: (($obj: HyperTextView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::input-hints", ...args: any[]): void
    connect(sigName: "notify::input-purpose", callback: (($obj: HyperTextView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::input-purpose", callback: (($obj: HyperTextView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::input-purpose", ...args: any[]): void
    connect(sigName: "notify::justification", callback: (($obj: HyperTextView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::justification", callback: (($obj: HyperTextView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::justification", ...args: any[]): void
    connect(sigName: "notify::left-margin", callback: (($obj: HyperTextView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::left-margin", callback: (($obj: HyperTextView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::left-margin", ...args: any[]): void
    connect(sigName: "notify::monospace", callback: (($obj: HyperTextView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::monospace", callback: (($obj: HyperTextView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::monospace", ...args: any[]): void
    connect(sigName: "notify::overwrite", callback: (($obj: HyperTextView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::overwrite", callback: (($obj: HyperTextView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::overwrite", ...args: any[]): void
    connect(sigName: "notify::pixels-above-lines", callback: (($obj: HyperTextView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::pixels-above-lines", callback: (($obj: HyperTextView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::pixels-above-lines", ...args: any[]): void
    connect(sigName: "notify::pixels-below-lines", callback: (($obj: HyperTextView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::pixels-below-lines", callback: (($obj: HyperTextView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::pixels-below-lines", ...args: any[]): void
    connect(sigName: "notify::pixels-inside-wrap", callback: (($obj: HyperTextView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::pixels-inside-wrap", callback: (($obj: HyperTextView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::pixels-inside-wrap", ...args: any[]): void
    connect(sigName: "notify::right-margin", callback: (($obj: HyperTextView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::right-margin", callback: (($obj: HyperTextView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::right-margin", ...args: any[]): void
    connect(sigName: "notify::tabs", callback: (($obj: HyperTextView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tabs", callback: (($obj: HyperTextView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tabs", ...args: any[]): void
    connect(sigName: "notify::top-margin", callback: (($obj: HyperTextView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::top-margin", callback: (($obj: HyperTextView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::top-margin", ...args: any[]): void
    connect(sigName: "notify::wrap-mode", callback: (($obj: HyperTextView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::wrap-mode", callback: (($obj: HyperTextView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::wrap-mode", ...args: any[]): void
    connect(sigName: "notify::can-focus", callback: (($obj: HyperTextView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-focus", callback: (($obj: HyperTextView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-focus", ...args: any[]): void
    connect(sigName: "notify::can-target", callback: (($obj: HyperTextView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-target", callback: (($obj: HyperTextView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-target", ...args: any[]): void
    connect(sigName: "notify::css-classes", callback: (($obj: HyperTextView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::css-classes", callback: (($obj: HyperTextView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::css-classes", ...args: any[]): void
    connect(sigName: "notify::css-name", callback: (($obj: HyperTextView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::css-name", callback: (($obj: HyperTextView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::css-name", ...args: any[]): void
    connect(sigName: "notify::cursor", callback: (($obj: HyperTextView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::cursor", callback: (($obj: HyperTextView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::cursor", ...args: any[]): void
    connect(sigName: "notify::focus-on-click", callback: (($obj: HyperTextView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::focus-on-click", callback: (($obj: HyperTextView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::focus-on-click", ...args: any[]): void
    connect(sigName: "notify::focusable", callback: (($obj: HyperTextView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::focusable", callback: (($obj: HyperTextView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::focusable", ...args: any[]): void
    connect(sigName: "notify::halign", callback: (($obj: HyperTextView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::halign", callback: (($obj: HyperTextView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::halign", ...args: any[]): void
    connect(sigName: "notify::has-default", callback: (($obj: HyperTextView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-default", callback: (($obj: HyperTextView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-default", ...args: any[]): void
    connect(sigName: "notify::has-focus", callback: (($obj: HyperTextView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-focus", callback: (($obj: HyperTextView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-focus", ...args: any[]): void
    connect(sigName: "notify::has-tooltip", callback: (($obj: HyperTextView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-tooltip", callback: (($obj: HyperTextView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-tooltip", ...args: any[]): void
    connect(sigName: "notify::height-request", callback: (($obj: HyperTextView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height-request", callback: (($obj: HyperTextView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::height-request", ...args: any[]): void
    connect(sigName: "notify::hexpand", callback: (($obj: HyperTextView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand", callback: (($obj: HyperTextView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hexpand", ...args: any[]): void
    connect(sigName: "notify::hexpand-set", callback: (($obj: HyperTextView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand-set", callback: (($obj: HyperTextView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hexpand-set", ...args: any[]): void
    connect(sigName: "notify::layout-manager", callback: (($obj: HyperTextView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::layout-manager", callback: (($obj: HyperTextView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::layout-manager", ...args: any[]): void
    connect(sigName: "notify::margin-bottom", callback: (($obj: HyperTextView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-bottom", callback: (($obj: HyperTextView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-bottom", ...args: any[]): void
    connect(sigName: "notify::margin-end", callback: (($obj: HyperTextView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-end", callback: (($obj: HyperTextView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-end", ...args: any[]): void
    connect(sigName: "notify::margin-start", callback: (($obj: HyperTextView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-start", callback: (($obj: HyperTextView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-start", ...args: any[]): void
    connect(sigName: "notify::margin-top", callback: (($obj: HyperTextView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-top", callback: (($obj: HyperTextView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-top", ...args: any[]): void
    connect(sigName: "notify::name", callback: (($obj: HyperTextView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: HyperTextView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::opacity", callback: (($obj: HyperTextView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opacity", callback: (($obj: HyperTextView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::opacity", ...args: any[]): void
    connect(sigName: "notify::overflow", callback: (($obj: HyperTextView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::overflow", callback: (($obj: HyperTextView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::overflow", ...args: any[]): void
    connect(sigName: "notify::parent", callback: (($obj: HyperTextView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: HyperTextView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::parent", ...args: any[]): void
    connect(sigName: "notify::receives-default", callback: (($obj: HyperTextView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::receives-default", callback: (($obj: HyperTextView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::receives-default", ...args: any[]): void
    connect(sigName: "notify::root", callback: (($obj: HyperTextView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::root", callback: (($obj: HyperTextView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::root", ...args: any[]): void
    connect(sigName: "notify::scale-factor", callback: (($obj: HyperTextView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-factor", callback: (($obj: HyperTextView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::scale-factor", ...args: any[]): void
    connect(sigName: "notify::sensitive", callback: (($obj: HyperTextView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sensitive", callback: (($obj: HyperTextView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::sensitive", ...args: any[]): void
    connect(sigName: "notify::tooltip-markup", callback: (($obj: HyperTextView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-markup", callback: (($obj: HyperTextView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tooltip-markup", ...args: any[]): void
    connect(sigName: "notify::tooltip-text", callback: (($obj: HyperTextView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-text", callback: (($obj: HyperTextView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tooltip-text", ...args: any[]): void
    connect(sigName: "notify::valign", callback: (($obj: HyperTextView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::valign", callback: (($obj: HyperTextView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::valign", ...args: any[]): void
    connect(sigName: "notify::vexpand", callback: (($obj: HyperTextView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand", callback: (($obj: HyperTextView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vexpand", ...args: any[]): void
    connect(sigName: "notify::vexpand-set", callback: (($obj: HyperTextView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand-set", callback: (($obj: HyperTextView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vexpand-set", ...args: any[]): void
    connect(sigName: "notify::visible", callback: (($obj: HyperTextView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visible", callback: (($obj: HyperTextView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::visible", ...args: any[]): void
    connect(sigName: "notify::width-request", callback: (($obj: HyperTextView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::width-request", callback: (($obj: HyperTextView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::width-request", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class HyperTextView extends Gtk.TextView {

    // Own properties of Granite-7.0.Granite.HyperTextView

    static name: string
    static $gtype: GObject.GType<HyperTextView>

    // Constructors of Granite-7.0.Granite.HyperTextView

    constructor(config?: HyperTextView_ConstructProps) 
    constructor() 
    static new(): HyperTextView

    // Overloads of new

    /**
     * Creates a new `GtkTextView`.
     * 
     * If you don’t call [method`Gtk`.TextView.set_buffer] before using the
     * text view, an empty default buffer will be created for you. Get the
     * buffer with [method`Gtk`.TextView.get_buffer]. If you want to specify
     * your own buffer, consider [ctor`Gtk`.TextView.new_with_buffer].
     * @constructor 
     */
    static new(): Gtk.TextView
    _init(config?: HyperTextView_ConstructProps): void
}

interface MessageDialog_ConstructProps extends Dialog_ConstructProps {

    // Own constructor properties of Granite-7.0.Granite.MessageDialog

    primary_text?: string | null
    secondary_text?: string | null
    image_icon?: Gio.Icon | null
    badge_icon?: Gio.Icon | null
    primary_label?: Gtk.Label | null
    secondary_label?: Gtk.Label | null
    buttons?: Gtk.ButtonsType | null
    custom_bin?: Gtk.Box | null
}

interface MessageDialog {

    // Own properties of Granite-7.0.Granite.MessageDialog

    primary_text: string
    secondary_text: string
    image_icon: Gio.Icon
    badge_icon: Gio.Icon
    readonly primary_label: Gtk.Label
    readonly secondary_label: Gtk.Label
    readonly buttons: Gtk.ButtonsType
    readonly custom_bin: Gtk.Box

    // Conflicting properties

    parent_instance: any

    // Owm methods of Granite-7.0.Granite.MessageDialog

    get_primary_text(): string
    set_primary_text(value: string): void
    get_secondary_text(): string
    set_secondary_text(value: string): void
    get_image_icon(): Gio.Icon
    set_image_icon(value: Gio.Icon): void
    get_badge_icon(): Gio.Icon
    set_badge_icon(value: Gio.Icon): void
    get_primary_label(): Gtk.Label
    get_secondary_label(): Gtk.Label
    get_custom_bin(): Gtk.Box
    show_error_details(error_message: string): void

    // Class property signals of Granite-7.0.Granite.MessageDialog

    connect(sigName: "notify::primary-text", callback: (($obj: MessageDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::primary-text", callback: (($obj: MessageDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::primary-text", ...args: any[]): void
    connect(sigName: "notify::secondary-text", callback: (($obj: MessageDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::secondary-text", callback: (($obj: MessageDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::secondary-text", ...args: any[]): void
    connect(sigName: "notify::image-icon", callback: (($obj: MessageDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::image-icon", callback: (($obj: MessageDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::image-icon", ...args: any[]): void
    connect(sigName: "notify::badge-icon", callback: (($obj: MessageDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::badge-icon", callback: (($obj: MessageDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::badge-icon", ...args: any[]): void
    connect(sigName: "notify::primary-label", callback: (($obj: MessageDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::primary-label", callback: (($obj: MessageDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::primary-label", ...args: any[]): void
    connect(sigName: "notify::secondary-label", callback: (($obj: MessageDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::secondary-label", callback: (($obj: MessageDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::secondary-label", ...args: any[]): void
    connect(sigName: "notify::buttons", callback: (($obj: MessageDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::buttons", callback: (($obj: MessageDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::buttons", ...args: any[]): void
    connect(sigName: "notify::custom-bin", callback: (($obj: MessageDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::custom-bin", callback: (($obj: MessageDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::custom-bin", ...args: any[]): void
    connect(sigName: "notify::use-header-bar", callback: (($obj: MessageDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::use-header-bar", callback: (($obj: MessageDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::use-header-bar", ...args: any[]): void
    connect(sigName: "notify::application", callback: (($obj: MessageDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::application", callback: (($obj: MessageDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::application", ...args: any[]): void
    connect(sigName: "notify::child", callback: (($obj: MessageDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::child", callback: (($obj: MessageDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::child", ...args: any[]): void
    connect(sigName: "notify::decorated", callback: (($obj: MessageDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::decorated", callback: (($obj: MessageDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::decorated", ...args: any[]): void
    connect(sigName: "notify::default-height", callback: (($obj: MessageDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::default-height", callback: (($obj: MessageDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::default-height", ...args: any[]): void
    connect(sigName: "notify::default-widget", callback: (($obj: MessageDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::default-widget", callback: (($obj: MessageDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::default-widget", ...args: any[]): void
    connect(sigName: "notify::default-width", callback: (($obj: MessageDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::default-width", callback: (($obj: MessageDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::default-width", ...args: any[]): void
    connect(sigName: "notify::deletable", callback: (($obj: MessageDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::deletable", callback: (($obj: MessageDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::deletable", ...args: any[]): void
    connect(sigName: "notify::destroy-with-parent", callback: (($obj: MessageDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::destroy-with-parent", callback: (($obj: MessageDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::destroy-with-parent", ...args: any[]): void
    connect(sigName: "notify::display", callback: (($obj: MessageDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::display", callback: (($obj: MessageDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::display", ...args: any[]): void
    connect(sigName: "notify::focus-visible", callback: (($obj: MessageDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::focus-visible", callback: (($obj: MessageDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::focus-visible", ...args: any[]): void
    connect(sigName: "notify::focus-widget", callback: (($obj: MessageDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::focus-widget", callback: (($obj: MessageDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::focus-widget", ...args: any[]): void
    connect(sigName: "notify::fullscreened", callback: (($obj: MessageDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fullscreened", callback: (($obj: MessageDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::fullscreened", ...args: any[]): void
    connect(sigName: "notify::handle-menubar-accel", callback: (($obj: MessageDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::handle-menubar-accel", callback: (($obj: MessageDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::handle-menubar-accel", ...args: any[]): void
    connect(sigName: "notify::hide-on-close", callback: (($obj: MessageDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hide-on-close", callback: (($obj: MessageDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hide-on-close", ...args: any[]): void
    connect(sigName: "notify::icon-name", callback: (($obj: MessageDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::icon-name", callback: (($obj: MessageDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::icon-name", ...args: any[]): void
    connect(sigName: "notify::is-active", callback: (($obj: MessageDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-active", callback: (($obj: MessageDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::is-active", ...args: any[]): void
    connect(sigName: "notify::maximized", callback: (($obj: MessageDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::maximized", callback: (($obj: MessageDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::maximized", ...args: any[]): void
    connect(sigName: "notify::mnemonics-visible", callback: (($obj: MessageDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::mnemonics-visible", callback: (($obj: MessageDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::mnemonics-visible", ...args: any[]): void
    connect(sigName: "notify::modal", callback: (($obj: MessageDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::modal", callback: (($obj: MessageDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::modal", ...args: any[]): void
    connect(sigName: "notify::resizable", callback: (($obj: MessageDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::resizable", callback: (($obj: MessageDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::resizable", ...args: any[]): void
    connect(sigName: "notify::startup-id", callback: (($obj: MessageDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::startup-id", callback: (($obj: MessageDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::startup-id", ...args: any[]): void
    connect(sigName: "notify::title", callback: (($obj: MessageDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::title", callback: (($obj: MessageDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::title", ...args: any[]): void
    connect(sigName: "notify::titlebar", callback: (($obj: MessageDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::titlebar", callback: (($obj: MessageDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::titlebar", ...args: any[]): void
    connect(sigName: "notify::transient-for", callback: (($obj: MessageDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::transient-for", callback: (($obj: MessageDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::transient-for", ...args: any[]): void
    connect(sigName: "notify::can-focus", callback: (($obj: MessageDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-focus", callback: (($obj: MessageDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-focus", ...args: any[]): void
    connect(sigName: "notify::can-target", callback: (($obj: MessageDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-target", callback: (($obj: MessageDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-target", ...args: any[]): void
    connect(sigName: "notify::css-classes", callback: (($obj: MessageDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::css-classes", callback: (($obj: MessageDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::css-classes", ...args: any[]): void
    connect(sigName: "notify::css-name", callback: (($obj: MessageDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::css-name", callback: (($obj: MessageDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::css-name", ...args: any[]): void
    connect(sigName: "notify::cursor", callback: (($obj: MessageDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::cursor", callback: (($obj: MessageDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::cursor", ...args: any[]): void
    connect(sigName: "notify::focus-on-click", callback: (($obj: MessageDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::focus-on-click", callback: (($obj: MessageDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::focus-on-click", ...args: any[]): void
    connect(sigName: "notify::focusable", callback: (($obj: MessageDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::focusable", callback: (($obj: MessageDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::focusable", ...args: any[]): void
    connect(sigName: "notify::halign", callback: (($obj: MessageDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::halign", callback: (($obj: MessageDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::halign", ...args: any[]): void
    connect(sigName: "notify::has-default", callback: (($obj: MessageDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-default", callback: (($obj: MessageDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-default", ...args: any[]): void
    connect(sigName: "notify::has-focus", callback: (($obj: MessageDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-focus", callback: (($obj: MessageDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-focus", ...args: any[]): void
    connect(sigName: "notify::has-tooltip", callback: (($obj: MessageDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-tooltip", callback: (($obj: MessageDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-tooltip", ...args: any[]): void
    connect(sigName: "notify::height-request", callback: (($obj: MessageDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height-request", callback: (($obj: MessageDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::height-request", ...args: any[]): void
    connect(sigName: "notify::hexpand", callback: (($obj: MessageDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand", callback: (($obj: MessageDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hexpand", ...args: any[]): void
    connect(sigName: "notify::hexpand-set", callback: (($obj: MessageDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand-set", callback: (($obj: MessageDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hexpand-set", ...args: any[]): void
    connect(sigName: "notify::layout-manager", callback: (($obj: MessageDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::layout-manager", callback: (($obj: MessageDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::layout-manager", ...args: any[]): void
    connect(sigName: "notify::margin-bottom", callback: (($obj: MessageDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-bottom", callback: (($obj: MessageDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-bottom", ...args: any[]): void
    connect(sigName: "notify::margin-end", callback: (($obj: MessageDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-end", callback: (($obj: MessageDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-end", ...args: any[]): void
    connect(sigName: "notify::margin-start", callback: (($obj: MessageDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-start", callback: (($obj: MessageDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-start", ...args: any[]): void
    connect(sigName: "notify::margin-top", callback: (($obj: MessageDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-top", callback: (($obj: MessageDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-top", ...args: any[]): void
    connect(sigName: "notify::name", callback: (($obj: MessageDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: MessageDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::opacity", callback: (($obj: MessageDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opacity", callback: (($obj: MessageDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::opacity", ...args: any[]): void
    connect(sigName: "notify::overflow", callback: (($obj: MessageDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::overflow", callback: (($obj: MessageDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::overflow", ...args: any[]): void
    connect(sigName: "notify::parent", callback: (($obj: MessageDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: MessageDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::parent", ...args: any[]): void
    connect(sigName: "notify::receives-default", callback: (($obj: MessageDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::receives-default", callback: (($obj: MessageDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::receives-default", ...args: any[]): void
    connect(sigName: "notify::root", callback: (($obj: MessageDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::root", callback: (($obj: MessageDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::root", ...args: any[]): void
    connect(sigName: "notify::scale-factor", callback: (($obj: MessageDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-factor", callback: (($obj: MessageDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::scale-factor", ...args: any[]): void
    connect(sigName: "notify::sensitive", callback: (($obj: MessageDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sensitive", callback: (($obj: MessageDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::sensitive", ...args: any[]): void
    connect(sigName: "notify::tooltip-markup", callback: (($obj: MessageDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-markup", callback: (($obj: MessageDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tooltip-markup", ...args: any[]): void
    connect(sigName: "notify::tooltip-text", callback: (($obj: MessageDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-text", callback: (($obj: MessageDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tooltip-text", ...args: any[]): void
    connect(sigName: "notify::valign", callback: (($obj: MessageDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::valign", callback: (($obj: MessageDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::valign", ...args: any[]): void
    connect(sigName: "notify::vexpand", callback: (($obj: MessageDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand", callback: (($obj: MessageDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vexpand", ...args: any[]): void
    connect(sigName: "notify::vexpand-set", callback: (($obj: MessageDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand-set", callback: (($obj: MessageDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vexpand-set", ...args: any[]): void
    connect(sigName: "notify::visible", callback: (($obj: MessageDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visible", callback: (($obj: MessageDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::visible", ...args: any[]): void
    connect(sigName: "notify::width-request", callback: (($obj: MessageDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::width-request", callback: (($obj: MessageDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::width-request", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class MessageDialog extends Dialog {

    // Own properties of Granite-7.0.Granite.MessageDialog

    static name: string
    static $gtype: GObject.GType<MessageDialog>

    // Constructors of Granite-7.0.Granite.MessageDialog

    constructor(config?: MessageDialog_ConstructProps) 
    constructor(primary_text: string, secondary_text: string, image_icon: Gio.Icon, buttons: Gtk.ButtonsType) 
    static new(primary_text: string, secondary_text: string, image_icon: Gio.Icon, buttons: Gtk.ButtonsType): MessageDialog

    // Overloads of new

    static new(): Dialog
    /**
     * Creates a new dialog box.
     * 
     * Widgets should not be packed into the `GtkWindow`
     * directly, but into the `content_area` and `action_area,`
     * as described above.
     * @constructor 
     */
    static new(): Gtk.Dialog
    static with_image_from_icon_name(primary_text: string, secondary_text: string, image_icon_name: string, buttons: Gtk.ButtonsType): MessageDialog
    _init(config?: MessageDialog_ConstructProps): void
}

interface ModeSwitch_ConstructProps extends Gtk.Box_ConstructProps {

    // Own constructor properties of Granite-7.0.Granite.ModeSwitch

    active?: boolean | null
    primary_icon_gicon?: Gio.Icon | null
    primary_icon_name?: string | null
    primary_icon_tooltip_text?: string | null
    secondary_icon_gicon?: Gio.Icon | null
    secondary_icon_name?: string | null
    secondary_icon_tooltip_text?: string | null
}

interface ModeSwitch {

    // Own properties of Granite-7.0.Granite.ModeSwitch

    active: boolean
    primary_icon_gicon: Gio.Icon
    primary_icon_name: string
    primary_icon_tooltip_text: string
    secondary_icon_gicon: Gio.Icon
    secondary_icon_name: string
    secondary_icon_tooltip_text: string

    // Conflicting properties

    parent_instance: any

    // Owm methods of Granite-7.0.Granite.ModeSwitch

    get_active(): boolean
    set_active(value: boolean): void
    get_primary_icon_gicon(): Gio.Icon
    set_primary_icon_gicon(value: Gio.Icon): void
    get_primary_icon_name(): string
    set_primary_icon_name(value: string): void
    get_primary_icon_tooltip_text(): string
    set_primary_icon_tooltip_text(value: string): void
    get_secondary_icon_gicon(): Gio.Icon
    set_secondary_icon_gicon(value: Gio.Icon): void
    get_secondary_icon_name(): string
    set_secondary_icon_name(value: string): void
    get_secondary_icon_tooltip_text(): string
    set_secondary_icon_tooltip_text(value: string): void

    // Class property signals of Granite-7.0.Granite.ModeSwitch

    connect(sigName: "notify::active", callback: (($obj: ModeSwitch, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::active", callback: (($obj: ModeSwitch, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::active", ...args: any[]): void
    connect(sigName: "notify::primary-icon-gicon", callback: (($obj: ModeSwitch, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::primary-icon-gicon", callback: (($obj: ModeSwitch, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::primary-icon-gicon", ...args: any[]): void
    connect(sigName: "notify::primary-icon-name", callback: (($obj: ModeSwitch, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::primary-icon-name", callback: (($obj: ModeSwitch, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::primary-icon-name", ...args: any[]): void
    connect(sigName: "notify::primary-icon-tooltip-text", callback: (($obj: ModeSwitch, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::primary-icon-tooltip-text", callback: (($obj: ModeSwitch, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::primary-icon-tooltip-text", ...args: any[]): void
    connect(sigName: "notify::secondary-icon-gicon", callback: (($obj: ModeSwitch, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::secondary-icon-gicon", callback: (($obj: ModeSwitch, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::secondary-icon-gicon", ...args: any[]): void
    connect(sigName: "notify::secondary-icon-name", callback: (($obj: ModeSwitch, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::secondary-icon-name", callback: (($obj: ModeSwitch, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::secondary-icon-name", ...args: any[]): void
    connect(sigName: "notify::secondary-icon-tooltip-text", callback: (($obj: ModeSwitch, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::secondary-icon-tooltip-text", callback: (($obj: ModeSwitch, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::secondary-icon-tooltip-text", ...args: any[]): void
    connect(sigName: "notify::baseline-position", callback: (($obj: ModeSwitch, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::baseline-position", callback: (($obj: ModeSwitch, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::baseline-position", ...args: any[]): void
    connect(sigName: "notify::homogeneous", callback: (($obj: ModeSwitch, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::homogeneous", callback: (($obj: ModeSwitch, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::homogeneous", ...args: any[]): void
    connect(sigName: "notify::spacing", callback: (($obj: ModeSwitch, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::spacing", callback: (($obj: ModeSwitch, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::spacing", ...args: any[]): void
    connect(sigName: "notify::can-focus", callback: (($obj: ModeSwitch, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-focus", callback: (($obj: ModeSwitch, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-focus", ...args: any[]): void
    connect(sigName: "notify::can-target", callback: (($obj: ModeSwitch, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-target", callback: (($obj: ModeSwitch, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-target", ...args: any[]): void
    connect(sigName: "notify::css-classes", callback: (($obj: ModeSwitch, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::css-classes", callback: (($obj: ModeSwitch, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::css-classes", ...args: any[]): void
    connect(sigName: "notify::css-name", callback: (($obj: ModeSwitch, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::css-name", callback: (($obj: ModeSwitch, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::css-name", ...args: any[]): void
    connect(sigName: "notify::cursor", callback: (($obj: ModeSwitch, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::cursor", callback: (($obj: ModeSwitch, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::cursor", ...args: any[]): void
    connect(sigName: "notify::focus-on-click", callback: (($obj: ModeSwitch, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::focus-on-click", callback: (($obj: ModeSwitch, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::focus-on-click", ...args: any[]): void
    connect(sigName: "notify::focusable", callback: (($obj: ModeSwitch, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::focusable", callback: (($obj: ModeSwitch, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::focusable", ...args: any[]): void
    connect(sigName: "notify::halign", callback: (($obj: ModeSwitch, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::halign", callback: (($obj: ModeSwitch, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::halign", ...args: any[]): void
    connect(sigName: "notify::has-default", callback: (($obj: ModeSwitch, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-default", callback: (($obj: ModeSwitch, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-default", ...args: any[]): void
    connect(sigName: "notify::has-focus", callback: (($obj: ModeSwitch, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-focus", callback: (($obj: ModeSwitch, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-focus", ...args: any[]): void
    connect(sigName: "notify::has-tooltip", callback: (($obj: ModeSwitch, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-tooltip", callback: (($obj: ModeSwitch, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-tooltip", ...args: any[]): void
    connect(sigName: "notify::height-request", callback: (($obj: ModeSwitch, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height-request", callback: (($obj: ModeSwitch, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::height-request", ...args: any[]): void
    connect(sigName: "notify::hexpand", callback: (($obj: ModeSwitch, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand", callback: (($obj: ModeSwitch, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hexpand", ...args: any[]): void
    connect(sigName: "notify::hexpand-set", callback: (($obj: ModeSwitch, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand-set", callback: (($obj: ModeSwitch, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hexpand-set", ...args: any[]): void
    connect(sigName: "notify::layout-manager", callback: (($obj: ModeSwitch, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::layout-manager", callback: (($obj: ModeSwitch, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::layout-manager", ...args: any[]): void
    connect(sigName: "notify::margin-bottom", callback: (($obj: ModeSwitch, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-bottom", callback: (($obj: ModeSwitch, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-bottom", ...args: any[]): void
    connect(sigName: "notify::margin-end", callback: (($obj: ModeSwitch, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-end", callback: (($obj: ModeSwitch, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-end", ...args: any[]): void
    connect(sigName: "notify::margin-start", callback: (($obj: ModeSwitch, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-start", callback: (($obj: ModeSwitch, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-start", ...args: any[]): void
    connect(sigName: "notify::margin-top", callback: (($obj: ModeSwitch, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-top", callback: (($obj: ModeSwitch, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-top", ...args: any[]): void
    connect(sigName: "notify::name", callback: (($obj: ModeSwitch, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: ModeSwitch, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::opacity", callback: (($obj: ModeSwitch, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opacity", callback: (($obj: ModeSwitch, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::opacity", ...args: any[]): void
    connect(sigName: "notify::overflow", callback: (($obj: ModeSwitch, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::overflow", callback: (($obj: ModeSwitch, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::overflow", ...args: any[]): void
    connect(sigName: "notify::parent", callback: (($obj: ModeSwitch, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: ModeSwitch, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::parent", ...args: any[]): void
    connect(sigName: "notify::receives-default", callback: (($obj: ModeSwitch, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::receives-default", callback: (($obj: ModeSwitch, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::receives-default", ...args: any[]): void
    connect(sigName: "notify::root", callback: (($obj: ModeSwitch, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::root", callback: (($obj: ModeSwitch, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::root", ...args: any[]): void
    connect(sigName: "notify::scale-factor", callback: (($obj: ModeSwitch, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-factor", callback: (($obj: ModeSwitch, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::scale-factor", ...args: any[]): void
    connect(sigName: "notify::sensitive", callback: (($obj: ModeSwitch, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sensitive", callback: (($obj: ModeSwitch, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::sensitive", ...args: any[]): void
    connect(sigName: "notify::tooltip-markup", callback: (($obj: ModeSwitch, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-markup", callback: (($obj: ModeSwitch, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tooltip-markup", ...args: any[]): void
    connect(sigName: "notify::tooltip-text", callback: (($obj: ModeSwitch, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-text", callback: (($obj: ModeSwitch, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tooltip-text", ...args: any[]): void
    connect(sigName: "notify::valign", callback: (($obj: ModeSwitch, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::valign", callback: (($obj: ModeSwitch, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::valign", ...args: any[]): void
    connect(sigName: "notify::vexpand", callback: (($obj: ModeSwitch, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand", callback: (($obj: ModeSwitch, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vexpand", ...args: any[]): void
    connect(sigName: "notify::vexpand-set", callback: (($obj: ModeSwitch, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand-set", callback: (($obj: ModeSwitch, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vexpand-set", ...args: any[]): void
    connect(sigName: "notify::visible", callback: (($obj: ModeSwitch, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visible", callback: (($obj: ModeSwitch, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::visible", ...args: any[]): void
    connect(sigName: "notify::width-request", callback: (($obj: ModeSwitch, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::width-request", callback: (($obj: ModeSwitch, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::width-request", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class ModeSwitch extends Gtk.Box {

    // Own properties of Granite-7.0.Granite.ModeSwitch

    static name: string
    static $gtype: GObject.GType<ModeSwitch>

    // Constructors of Granite-7.0.Granite.ModeSwitch

    constructor(config?: ModeSwitch_ConstructProps) 
    constructor(primary_icon_gicon: Gio.Icon, secondary_icon_gicon: Gio.Icon) 
    static new(primary_icon_gicon: Gio.Icon, secondary_icon_gicon: Gio.Icon): ModeSwitch

    // Overloads of new

    /**
     * Creates a new `GtkBox`.
     * @constructor 
     * @param orientation the box’s orientation
     * @param spacing the number of pixels to place by default between children
     */
    static new(orientation: Gtk.Orientation, spacing: number): Gtk.Box
    static from_icon_name(primary_icon_name: string, secondary_icon_name: string): ModeSwitch
    _init(config?: ModeSwitch_ConstructProps): void
}

interface Placeholder_ConstructProps extends Gtk.Widget_ConstructProps {

    // Own constructor properties of Granite-7.0.Granite.Placeholder

    title?: string | null
    description?: string | null
    icon?: Gio.Icon | null
}

interface Placeholder {

    // Own properties of Granite-7.0.Granite.Placeholder

    title: string
    description: string
    icon: Gio.Icon

    // Owm methods of Granite-7.0.Granite.Placeholder

    get_title(): string
    set_title(value: string): void
    get_description(): string
    set_description(value: string): void
    get_icon(): Gio.Icon
    set_icon(value: Gio.Icon): void
    append_button(icon: Gio.Icon, label: string, description: string): Gtk.Button

    // Class property signals of Granite-7.0.Granite.Placeholder

    connect(sigName: "notify::title", callback: (($obj: Placeholder, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::title", callback: (($obj: Placeholder, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::title", ...args: any[]): void
    connect(sigName: "notify::description", callback: (($obj: Placeholder, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::description", callback: (($obj: Placeholder, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::description", ...args: any[]): void
    connect(sigName: "notify::icon", callback: (($obj: Placeholder, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::icon", callback: (($obj: Placeholder, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::icon", ...args: any[]): void
    connect(sigName: "notify::can-focus", callback: (($obj: Placeholder, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-focus", callback: (($obj: Placeholder, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-focus", ...args: any[]): void
    connect(sigName: "notify::can-target", callback: (($obj: Placeholder, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-target", callback: (($obj: Placeholder, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-target", ...args: any[]): void
    connect(sigName: "notify::css-classes", callback: (($obj: Placeholder, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::css-classes", callback: (($obj: Placeholder, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::css-classes", ...args: any[]): void
    connect(sigName: "notify::css-name", callback: (($obj: Placeholder, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::css-name", callback: (($obj: Placeholder, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::css-name", ...args: any[]): void
    connect(sigName: "notify::cursor", callback: (($obj: Placeholder, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::cursor", callback: (($obj: Placeholder, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::cursor", ...args: any[]): void
    connect(sigName: "notify::focus-on-click", callback: (($obj: Placeholder, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::focus-on-click", callback: (($obj: Placeholder, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::focus-on-click", ...args: any[]): void
    connect(sigName: "notify::focusable", callback: (($obj: Placeholder, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::focusable", callback: (($obj: Placeholder, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::focusable", ...args: any[]): void
    connect(sigName: "notify::halign", callback: (($obj: Placeholder, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::halign", callback: (($obj: Placeholder, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::halign", ...args: any[]): void
    connect(sigName: "notify::has-default", callback: (($obj: Placeholder, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-default", callback: (($obj: Placeholder, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-default", ...args: any[]): void
    connect(sigName: "notify::has-focus", callback: (($obj: Placeholder, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-focus", callback: (($obj: Placeholder, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-focus", ...args: any[]): void
    connect(sigName: "notify::has-tooltip", callback: (($obj: Placeholder, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-tooltip", callback: (($obj: Placeholder, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-tooltip", ...args: any[]): void
    connect(sigName: "notify::height-request", callback: (($obj: Placeholder, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height-request", callback: (($obj: Placeholder, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::height-request", ...args: any[]): void
    connect(sigName: "notify::hexpand", callback: (($obj: Placeholder, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand", callback: (($obj: Placeholder, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hexpand", ...args: any[]): void
    connect(sigName: "notify::hexpand-set", callback: (($obj: Placeholder, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand-set", callback: (($obj: Placeholder, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hexpand-set", ...args: any[]): void
    connect(sigName: "notify::layout-manager", callback: (($obj: Placeholder, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::layout-manager", callback: (($obj: Placeholder, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::layout-manager", ...args: any[]): void
    connect(sigName: "notify::margin-bottom", callback: (($obj: Placeholder, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-bottom", callback: (($obj: Placeholder, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-bottom", ...args: any[]): void
    connect(sigName: "notify::margin-end", callback: (($obj: Placeholder, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-end", callback: (($obj: Placeholder, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-end", ...args: any[]): void
    connect(sigName: "notify::margin-start", callback: (($obj: Placeholder, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-start", callback: (($obj: Placeholder, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-start", ...args: any[]): void
    connect(sigName: "notify::margin-top", callback: (($obj: Placeholder, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-top", callback: (($obj: Placeholder, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-top", ...args: any[]): void
    connect(sigName: "notify::name", callback: (($obj: Placeholder, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: Placeholder, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::opacity", callback: (($obj: Placeholder, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opacity", callback: (($obj: Placeholder, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::opacity", ...args: any[]): void
    connect(sigName: "notify::overflow", callback: (($obj: Placeholder, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::overflow", callback: (($obj: Placeholder, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::overflow", ...args: any[]): void
    connect(sigName: "notify::parent", callback: (($obj: Placeholder, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: Placeholder, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::parent", ...args: any[]): void
    connect(sigName: "notify::receives-default", callback: (($obj: Placeholder, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::receives-default", callback: (($obj: Placeholder, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::receives-default", ...args: any[]): void
    connect(sigName: "notify::root", callback: (($obj: Placeholder, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::root", callback: (($obj: Placeholder, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::root", ...args: any[]): void
    connect(sigName: "notify::scale-factor", callback: (($obj: Placeholder, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-factor", callback: (($obj: Placeholder, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::scale-factor", ...args: any[]): void
    connect(sigName: "notify::sensitive", callback: (($obj: Placeholder, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sensitive", callback: (($obj: Placeholder, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::sensitive", ...args: any[]): void
    connect(sigName: "notify::tooltip-markup", callback: (($obj: Placeholder, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-markup", callback: (($obj: Placeholder, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tooltip-markup", ...args: any[]): void
    connect(sigName: "notify::tooltip-text", callback: (($obj: Placeholder, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-text", callback: (($obj: Placeholder, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tooltip-text", ...args: any[]): void
    connect(sigName: "notify::valign", callback: (($obj: Placeholder, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::valign", callback: (($obj: Placeholder, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::valign", ...args: any[]): void
    connect(sigName: "notify::vexpand", callback: (($obj: Placeholder, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand", callback: (($obj: Placeholder, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vexpand", ...args: any[]): void
    connect(sigName: "notify::vexpand-set", callback: (($obj: Placeholder, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand-set", callback: (($obj: Placeholder, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vexpand-set", ...args: any[]): void
    connect(sigName: "notify::visible", callback: (($obj: Placeholder, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visible", callback: (($obj: Placeholder, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::visible", ...args: any[]): void
    connect(sigName: "notify::width-request", callback: (($obj: Placeholder, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::width-request", callback: (($obj: Placeholder, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::width-request", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class Placeholder extends Gtk.Widget {

    // Own properties of Granite-7.0.Granite.Placeholder

    static name: string
    static $gtype: GObject.GType<Placeholder>

    // Constructors of Granite-7.0.Granite.Placeholder

    constructor(config?: Placeholder_ConstructProps) 
    constructor(title: string) 
    static new(title: string): Placeholder
    _init(config?: Placeholder_ConstructProps): void
}

interface SettingsSidebar_ConstructProps extends Gtk.Box_ConstructProps {

    // Own constructor properties of Granite-7.0.Granite.SettingsSidebar

    stack?: Gtk.Stack | null
    visible_child_name?: string | null
}

interface SettingsSidebar {

    // Own properties of Granite-7.0.Granite.SettingsSidebar

    readonly stack: Gtk.Stack
    visible_child_name: string

    // Conflicting properties

    parent_instance: any

    // Owm methods of Granite-7.0.Granite.SettingsSidebar

    get_stack(): Gtk.Stack
    get_visible_child_name(): string | null
    set_visible_child_name(value: string | null): void

    // Class property signals of Granite-7.0.Granite.SettingsSidebar

    connect(sigName: "notify::stack", callback: (($obj: SettingsSidebar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::stack", callback: (($obj: SettingsSidebar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::stack", ...args: any[]): void
    connect(sigName: "notify::visible-child-name", callback: (($obj: SettingsSidebar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visible-child-name", callback: (($obj: SettingsSidebar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::visible-child-name", ...args: any[]): void
    connect(sigName: "notify::baseline-position", callback: (($obj: SettingsSidebar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::baseline-position", callback: (($obj: SettingsSidebar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::baseline-position", ...args: any[]): void
    connect(sigName: "notify::homogeneous", callback: (($obj: SettingsSidebar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::homogeneous", callback: (($obj: SettingsSidebar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::homogeneous", ...args: any[]): void
    connect(sigName: "notify::spacing", callback: (($obj: SettingsSidebar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::spacing", callback: (($obj: SettingsSidebar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::spacing", ...args: any[]): void
    connect(sigName: "notify::can-focus", callback: (($obj: SettingsSidebar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-focus", callback: (($obj: SettingsSidebar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-focus", ...args: any[]): void
    connect(sigName: "notify::can-target", callback: (($obj: SettingsSidebar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-target", callback: (($obj: SettingsSidebar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-target", ...args: any[]): void
    connect(sigName: "notify::css-classes", callback: (($obj: SettingsSidebar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::css-classes", callback: (($obj: SettingsSidebar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::css-classes", ...args: any[]): void
    connect(sigName: "notify::css-name", callback: (($obj: SettingsSidebar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::css-name", callback: (($obj: SettingsSidebar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::css-name", ...args: any[]): void
    connect(sigName: "notify::cursor", callback: (($obj: SettingsSidebar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::cursor", callback: (($obj: SettingsSidebar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::cursor", ...args: any[]): void
    connect(sigName: "notify::focus-on-click", callback: (($obj: SettingsSidebar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::focus-on-click", callback: (($obj: SettingsSidebar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::focus-on-click", ...args: any[]): void
    connect(sigName: "notify::focusable", callback: (($obj: SettingsSidebar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::focusable", callback: (($obj: SettingsSidebar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::focusable", ...args: any[]): void
    connect(sigName: "notify::halign", callback: (($obj: SettingsSidebar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::halign", callback: (($obj: SettingsSidebar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::halign", ...args: any[]): void
    connect(sigName: "notify::has-default", callback: (($obj: SettingsSidebar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-default", callback: (($obj: SettingsSidebar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-default", ...args: any[]): void
    connect(sigName: "notify::has-focus", callback: (($obj: SettingsSidebar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-focus", callback: (($obj: SettingsSidebar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-focus", ...args: any[]): void
    connect(sigName: "notify::has-tooltip", callback: (($obj: SettingsSidebar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-tooltip", callback: (($obj: SettingsSidebar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-tooltip", ...args: any[]): void
    connect(sigName: "notify::height-request", callback: (($obj: SettingsSidebar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height-request", callback: (($obj: SettingsSidebar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::height-request", ...args: any[]): void
    connect(sigName: "notify::hexpand", callback: (($obj: SettingsSidebar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand", callback: (($obj: SettingsSidebar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hexpand", ...args: any[]): void
    connect(sigName: "notify::hexpand-set", callback: (($obj: SettingsSidebar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand-set", callback: (($obj: SettingsSidebar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hexpand-set", ...args: any[]): void
    connect(sigName: "notify::layout-manager", callback: (($obj: SettingsSidebar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::layout-manager", callback: (($obj: SettingsSidebar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::layout-manager", ...args: any[]): void
    connect(sigName: "notify::margin-bottom", callback: (($obj: SettingsSidebar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-bottom", callback: (($obj: SettingsSidebar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-bottom", ...args: any[]): void
    connect(sigName: "notify::margin-end", callback: (($obj: SettingsSidebar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-end", callback: (($obj: SettingsSidebar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-end", ...args: any[]): void
    connect(sigName: "notify::margin-start", callback: (($obj: SettingsSidebar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-start", callback: (($obj: SettingsSidebar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-start", ...args: any[]): void
    connect(sigName: "notify::margin-top", callback: (($obj: SettingsSidebar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-top", callback: (($obj: SettingsSidebar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-top", ...args: any[]): void
    connect(sigName: "notify::name", callback: (($obj: SettingsSidebar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: SettingsSidebar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::opacity", callback: (($obj: SettingsSidebar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opacity", callback: (($obj: SettingsSidebar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::opacity", ...args: any[]): void
    connect(sigName: "notify::overflow", callback: (($obj: SettingsSidebar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::overflow", callback: (($obj: SettingsSidebar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::overflow", ...args: any[]): void
    connect(sigName: "notify::parent", callback: (($obj: SettingsSidebar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: SettingsSidebar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::parent", ...args: any[]): void
    connect(sigName: "notify::receives-default", callback: (($obj: SettingsSidebar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::receives-default", callback: (($obj: SettingsSidebar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::receives-default", ...args: any[]): void
    connect(sigName: "notify::root", callback: (($obj: SettingsSidebar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::root", callback: (($obj: SettingsSidebar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::root", ...args: any[]): void
    connect(sigName: "notify::scale-factor", callback: (($obj: SettingsSidebar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-factor", callback: (($obj: SettingsSidebar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::scale-factor", ...args: any[]): void
    connect(sigName: "notify::sensitive", callback: (($obj: SettingsSidebar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sensitive", callback: (($obj: SettingsSidebar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::sensitive", ...args: any[]): void
    connect(sigName: "notify::tooltip-markup", callback: (($obj: SettingsSidebar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-markup", callback: (($obj: SettingsSidebar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tooltip-markup", ...args: any[]): void
    connect(sigName: "notify::tooltip-text", callback: (($obj: SettingsSidebar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-text", callback: (($obj: SettingsSidebar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tooltip-text", ...args: any[]): void
    connect(sigName: "notify::valign", callback: (($obj: SettingsSidebar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::valign", callback: (($obj: SettingsSidebar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::valign", ...args: any[]): void
    connect(sigName: "notify::vexpand", callback: (($obj: SettingsSidebar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand", callback: (($obj: SettingsSidebar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vexpand", ...args: any[]): void
    connect(sigName: "notify::vexpand-set", callback: (($obj: SettingsSidebar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand-set", callback: (($obj: SettingsSidebar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vexpand-set", ...args: any[]): void
    connect(sigName: "notify::visible", callback: (($obj: SettingsSidebar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visible", callback: (($obj: SettingsSidebar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::visible", ...args: any[]): void
    connect(sigName: "notify::width-request", callback: (($obj: SettingsSidebar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::width-request", callback: (($obj: SettingsSidebar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::width-request", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class SettingsSidebar extends Gtk.Box {

    // Own properties of Granite-7.0.Granite.SettingsSidebar

    static name: string
    static $gtype: GObject.GType<SettingsSidebar>

    // Constructors of Granite-7.0.Granite.SettingsSidebar

    constructor(config?: SettingsSidebar_ConstructProps) 
    constructor(stack: Gtk.Stack) 
    static new(stack: Gtk.Stack): SettingsSidebar

    // Overloads of new

    /**
     * Creates a new `GtkBox`.
     * @constructor 
     * @param orientation the box’s orientation
     * @param spacing the number of pixels to place by default between children
     */
    static new(orientation: Gtk.Orientation, spacing: number): Gtk.Box
    _init(config?: SettingsSidebar_ConstructProps): void
}

interface Settings_ConstructProps extends GObject.Object_ConstructProps {

    // Own constructor properties of Granite-7.0.Granite.Settings

    prefers_color_scheme?: SettingsColorScheme | null
}

interface Settings {

    // Own properties of Granite-7.0.Granite.Settings

    prefers_color_scheme: SettingsColorScheme

    // Owm methods of Granite-7.0.Granite.Settings

    get_prefers_color_scheme(): SettingsColorScheme

    // Class property signals of Granite-7.0.Granite.Settings

    connect(sigName: "notify::prefers-color-scheme", callback: (($obj: Settings, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::prefers-color-scheme", callback: (($obj: Settings, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::prefers-color-scheme", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class Settings extends GObject.Object {

    // Own properties of Granite-7.0.Granite.Settings

    static name: string
    static $gtype: GObject.GType<Settings>

    // Constructors of Granite-7.0.Granite.Settings

    constructor(config?: Settings_ConstructProps) 
    _init(config?: Settings_ConstructProps): void
    static get_default(): Settings
}

interface SwitchModelButton_ConstructProps extends Gtk.ToggleButton_ConstructProps {

    // Own constructor properties of Granite-7.0.Granite.SwitchModelButton

    text?: string | null
    description?: string | null
}

interface SwitchModelButton {

    // Own properties of Granite-7.0.Granite.SwitchModelButton

    text: string
    description: string

    // Owm methods of Granite-7.0.Granite.SwitchModelButton

    get_text(): string
    set_text(value: string): void
    get_description(): string | null
    set_description(value: string | null): void

    // Class property signals of Granite-7.0.Granite.SwitchModelButton

    connect(sigName: "notify::text", callback: (($obj: SwitchModelButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::text", callback: (($obj: SwitchModelButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::text", ...args: any[]): void
    connect(sigName: "notify::description", callback: (($obj: SwitchModelButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::description", callback: (($obj: SwitchModelButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::description", ...args: any[]): void
    connect(sigName: "notify::active", callback: (($obj: SwitchModelButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::active", callback: (($obj: SwitchModelButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::active", ...args: any[]): void
    connect(sigName: "notify::group", callback: (($obj: SwitchModelButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::group", callback: (($obj: SwitchModelButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::group", ...args: any[]): void
    connect(sigName: "notify::child", callback: (($obj: SwitchModelButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::child", callback: (($obj: SwitchModelButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::child", ...args: any[]): void
    connect(sigName: "notify::has-frame", callback: (($obj: SwitchModelButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-frame", callback: (($obj: SwitchModelButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-frame", ...args: any[]): void
    connect(sigName: "notify::icon-name", callback: (($obj: SwitchModelButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::icon-name", callback: (($obj: SwitchModelButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::icon-name", ...args: any[]): void
    connect(sigName: "notify::label", callback: (($obj: SwitchModelButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::label", callback: (($obj: SwitchModelButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::label", ...args: any[]): void
    connect(sigName: "notify::use-underline", callback: (($obj: SwitchModelButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::use-underline", callback: (($obj: SwitchModelButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::use-underline", ...args: any[]): void
    connect(sigName: "notify::can-focus", callback: (($obj: SwitchModelButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-focus", callback: (($obj: SwitchModelButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-focus", ...args: any[]): void
    connect(sigName: "notify::can-target", callback: (($obj: SwitchModelButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-target", callback: (($obj: SwitchModelButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-target", ...args: any[]): void
    connect(sigName: "notify::css-classes", callback: (($obj: SwitchModelButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::css-classes", callback: (($obj: SwitchModelButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::css-classes", ...args: any[]): void
    connect(sigName: "notify::css-name", callback: (($obj: SwitchModelButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::css-name", callback: (($obj: SwitchModelButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::css-name", ...args: any[]): void
    connect(sigName: "notify::cursor", callback: (($obj: SwitchModelButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::cursor", callback: (($obj: SwitchModelButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::cursor", ...args: any[]): void
    connect(sigName: "notify::focus-on-click", callback: (($obj: SwitchModelButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::focus-on-click", callback: (($obj: SwitchModelButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::focus-on-click", ...args: any[]): void
    connect(sigName: "notify::focusable", callback: (($obj: SwitchModelButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::focusable", callback: (($obj: SwitchModelButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::focusable", ...args: any[]): void
    connect(sigName: "notify::halign", callback: (($obj: SwitchModelButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::halign", callback: (($obj: SwitchModelButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::halign", ...args: any[]): void
    connect(sigName: "notify::has-default", callback: (($obj: SwitchModelButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-default", callback: (($obj: SwitchModelButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-default", ...args: any[]): void
    connect(sigName: "notify::has-focus", callback: (($obj: SwitchModelButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-focus", callback: (($obj: SwitchModelButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-focus", ...args: any[]): void
    connect(sigName: "notify::has-tooltip", callback: (($obj: SwitchModelButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-tooltip", callback: (($obj: SwitchModelButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-tooltip", ...args: any[]): void
    connect(sigName: "notify::height-request", callback: (($obj: SwitchModelButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height-request", callback: (($obj: SwitchModelButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::height-request", ...args: any[]): void
    connect(sigName: "notify::hexpand", callback: (($obj: SwitchModelButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand", callback: (($obj: SwitchModelButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hexpand", ...args: any[]): void
    connect(sigName: "notify::hexpand-set", callback: (($obj: SwitchModelButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand-set", callback: (($obj: SwitchModelButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hexpand-set", ...args: any[]): void
    connect(sigName: "notify::layout-manager", callback: (($obj: SwitchModelButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::layout-manager", callback: (($obj: SwitchModelButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::layout-manager", ...args: any[]): void
    connect(sigName: "notify::margin-bottom", callback: (($obj: SwitchModelButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-bottom", callback: (($obj: SwitchModelButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-bottom", ...args: any[]): void
    connect(sigName: "notify::margin-end", callback: (($obj: SwitchModelButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-end", callback: (($obj: SwitchModelButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-end", ...args: any[]): void
    connect(sigName: "notify::margin-start", callback: (($obj: SwitchModelButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-start", callback: (($obj: SwitchModelButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-start", ...args: any[]): void
    connect(sigName: "notify::margin-top", callback: (($obj: SwitchModelButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-top", callback: (($obj: SwitchModelButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-top", ...args: any[]): void
    connect(sigName: "notify::name", callback: (($obj: SwitchModelButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: SwitchModelButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::opacity", callback: (($obj: SwitchModelButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opacity", callback: (($obj: SwitchModelButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::opacity", ...args: any[]): void
    connect(sigName: "notify::overflow", callback: (($obj: SwitchModelButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::overflow", callback: (($obj: SwitchModelButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::overflow", ...args: any[]): void
    connect(sigName: "notify::parent", callback: (($obj: SwitchModelButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: SwitchModelButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::parent", ...args: any[]): void
    connect(sigName: "notify::receives-default", callback: (($obj: SwitchModelButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::receives-default", callback: (($obj: SwitchModelButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::receives-default", ...args: any[]): void
    connect(sigName: "notify::root", callback: (($obj: SwitchModelButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::root", callback: (($obj: SwitchModelButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::root", ...args: any[]): void
    connect(sigName: "notify::scale-factor", callback: (($obj: SwitchModelButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-factor", callback: (($obj: SwitchModelButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::scale-factor", ...args: any[]): void
    connect(sigName: "notify::sensitive", callback: (($obj: SwitchModelButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sensitive", callback: (($obj: SwitchModelButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::sensitive", ...args: any[]): void
    connect(sigName: "notify::tooltip-markup", callback: (($obj: SwitchModelButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-markup", callback: (($obj: SwitchModelButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tooltip-markup", ...args: any[]): void
    connect(sigName: "notify::tooltip-text", callback: (($obj: SwitchModelButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-text", callback: (($obj: SwitchModelButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tooltip-text", ...args: any[]): void
    connect(sigName: "notify::valign", callback: (($obj: SwitchModelButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::valign", callback: (($obj: SwitchModelButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::valign", ...args: any[]): void
    connect(sigName: "notify::vexpand", callback: (($obj: SwitchModelButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand", callback: (($obj: SwitchModelButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vexpand", ...args: any[]): void
    connect(sigName: "notify::vexpand-set", callback: (($obj: SwitchModelButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand-set", callback: (($obj: SwitchModelButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vexpand-set", ...args: any[]): void
    connect(sigName: "notify::visible", callback: (($obj: SwitchModelButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visible", callback: (($obj: SwitchModelButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::visible", ...args: any[]): void
    connect(sigName: "notify::width-request", callback: (($obj: SwitchModelButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::width-request", callback: (($obj: SwitchModelButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::width-request", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class SwitchModelButton extends Gtk.ToggleButton {

    // Own properties of Granite-7.0.Granite.SwitchModelButton

    static name: string
    static $gtype: GObject.GType<SwitchModelButton>

    // Constructors of Granite-7.0.Granite.SwitchModelButton

    constructor(config?: SwitchModelButton_ConstructProps) 
    constructor(text: string) 
    static new(text: string): SwitchModelButton

    // Overloads of new

    /**
     * Creates a new toggle button.
     * 
     * A widget should be packed into the button, as in [ctor`Gtk`.Button.new].
     * @constructor 
     */
    static new(): Gtk.ToggleButton
    _init(config?: SwitchModelButton_ConstructProps): void
}

interface TimePicker_ConstructProps extends Gtk.Entry_ConstructProps {

    // Own constructor properties of Granite-7.0.Granite.TimePicker

    format_12?: string | null
    format_24?: string | null
    time?: GLib.DateTime | null
}

/**
 * Signal callback interface for `time-changed`
 */
interface TimePicker_TimeChangedSignalCallback {
    ($obj: TimePicker): void
}

interface TimePicker {

    // Own properties of Granite-7.0.Granite.TimePicker

    readonly format_12: string
    readonly format_24: string
    time: GLib.DateTime

    // Owm methods of Granite-7.0.Granite.TimePicker

    get_format_12(): string
    get_format_24(): string
    get_time(): GLib.DateTime
    set_time(value: GLib.DateTime): void

    // Own signals of Granite-7.0.Granite.TimePicker

    connect(sigName: "time-changed", callback: TimePicker_TimeChangedSignalCallback): number
    connect_after(sigName: "time-changed", callback: TimePicker_TimeChangedSignalCallback): number
    emit(sigName: "time-changed", ...args: any[]): void

    // Class property signals of Granite-7.0.Granite.TimePicker

    connect(sigName: "notify::format-12", callback: (($obj: TimePicker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::format-12", callback: (($obj: TimePicker, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::format-12", ...args: any[]): void
    connect(sigName: "notify::format-24", callback: (($obj: TimePicker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::format-24", callback: (($obj: TimePicker, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::format-24", ...args: any[]): void
    connect(sigName: "notify::time", callback: (($obj: TimePicker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::time", callback: (($obj: TimePicker, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::time", ...args: any[]): void
    connect(sigName: "notify::activates-default", callback: (($obj: TimePicker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::activates-default", callback: (($obj: TimePicker, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::activates-default", ...args: any[]): void
    connect(sigName: "notify::attributes", callback: (($obj: TimePicker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::attributes", callback: (($obj: TimePicker, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::attributes", ...args: any[]): void
    connect(sigName: "notify::buffer", callback: (($obj: TimePicker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::buffer", callback: (($obj: TimePicker, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::buffer", ...args: any[]): void
    connect(sigName: "notify::completion", callback: (($obj: TimePicker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::completion", callback: (($obj: TimePicker, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::completion", ...args: any[]): void
    connect(sigName: "notify::enable-emoji-completion", callback: (($obj: TimePicker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::enable-emoji-completion", callback: (($obj: TimePicker, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::enable-emoji-completion", ...args: any[]): void
    connect(sigName: "notify::extra-menu", callback: (($obj: TimePicker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::extra-menu", callback: (($obj: TimePicker, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::extra-menu", ...args: any[]): void
    connect(sigName: "notify::has-frame", callback: (($obj: TimePicker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-frame", callback: (($obj: TimePicker, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-frame", ...args: any[]): void
    connect(sigName: "notify::im-module", callback: (($obj: TimePicker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::im-module", callback: (($obj: TimePicker, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::im-module", ...args: any[]): void
    connect(sigName: "notify::input-hints", callback: (($obj: TimePicker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::input-hints", callback: (($obj: TimePicker, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::input-hints", ...args: any[]): void
    connect(sigName: "notify::input-purpose", callback: (($obj: TimePicker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::input-purpose", callback: (($obj: TimePicker, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::input-purpose", ...args: any[]): void
    connect(sigName: "notify::invisible-char", callback: (($obj: TimePicker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::invisible-char", callback: (($obj: TimePicker, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::invisible-char", ...args: any[]): void
    connect(sigName: "notify::invisible-char-set", callback: (($obj: TimePicker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::invisible-char-set", callback: (($obj: TimePicker, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::invisible-char-set", ...args: any[]): void
    connect(sigName: "notify::max-length", callback: (($obj: TimePicker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::max-length", callback: (($obj: TimePicker, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::max-length", ...args: any[]): void
    connect(sigName: "notify::overwrite-mode", callback: (($obj: TimePicker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::overwrite-mode", callback: (($obj: TimePicker, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::overwrite-mode", ...args: any[]): void
    connect(sigName: "notify::placeholder-text", callback: (($obj: TimePicker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::placeholder-text", callback: (($obj: TimePicker, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::placeholder-text", ...args: any[]): void
    connect(sigName: "notify::primary-icon-activatable", callback: (($obj: TimePicker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::primary-icon-activatable", callback: (($obj: TimePicker, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::primary-icon-activatable", ...args: any[]): void
    connect(sigName: "notify::primary-icon-gicon", callback: (($obj: TimePicker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::primary-icon-gicon", callback: (($obj: TimePicker, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::primary-icon-gicon", ...args: any[]): void
    connect(sigName: "notify::primary-icon-name", callback: (($obj: TimePicker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::primary-icon-name", callback: (($obj: TimePicker, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::primary-icon-name", ...args: any[]): void
    connect(sigName: "notify::primary-icon-paintable", callback: (($obj: TimePicker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::primary-icon-paintable", callback: (($obj: TimePicker, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::primary-icon-paintable", ...args: any[]): void
    connect(sigName: "notify::primary-icon-sensitive", callback: (($obj: TimePicker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::primary-icon-sensitive", callback: (($obj: TimePicker, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::primary-icon-sensitive", ...args: any[]): void
    connect(sigName: "notify::primary-icon-storage-type", callback: (($obj: TimePicker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::primary-icon-storage-type", callback: (($obj: TimePicker, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::primary-icon-storage-type", ...args: any[]): void
    connect(sigName: "notify::primary-icon-tooltip-markup", callback: (($obj: TimePicker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::primary-icon-tooltip-markup", callback: (($obj: TimePicker, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::primary-icon-tooltip-markup", ...args: any[]): void
    connect(sigName: "notify::primary-icon-tooltip-text", callback: (($obj: TimePicker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::primary-icon-tooltip-text", callback: (($obj: TimePicker, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::primary-icon-tooltip-text", ...args: any[]): void
    connect(sigName: "notify::progress-fraction", callback: (($obj: TimePicker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::progress-fraction", callback: (($obj: TimePicker, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::progress-fraction", ...args: any[]): void
    connect(sigName: "notify::progress-pulse-step", callback: (($obj: TimePicker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::progress-pulse-step", callback: (($obj: TimePicker, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::progress-pulse-step", ...args: any[]): void
    connect(sigName: "notify::scroll-offset", callback: (($obj: TimePicker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scroll-offset", callback: (($obj: TimePicker, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::scroll-offset", ...args: any[]): void
    connect(sigName: "notify::secondary-icon-activatable", callback: (($obj: TimePicker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::secondary-icon-activatable", callback: (($obj: TimePicker, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::secondary-icon-activatable", ...args: any[]): void
    connect(sigName: "notify::secondary-icon-gicon", callback: (($obj: TimePicker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::secondary-icon-gicon", callback: (($obj: TimePicker, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::secondary-icon-gicon", ...args: any[]): void
    connect(sigName: "notify::secondary-icon-name", callback: (($obj: TimePicker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::secondary-icon-name", callback: (($obj: TimePicker, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::secondary-icon-name", ...args: any[]): void
    connect(sigName: "notify::secondary-icon-paintable", callback: (($obj: TimePicker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::secondary-icon-paintable", callback: (($obj: TimePicker, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::secondary-icon-paintable", ...args: any[]): void
    connect(sigName: "notify::secondary-icon-sensitive", callback: (($obj: TimePicker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::secondary-icon-sensitive", callback: (($obj: TimePicker, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::secondary-icon-sensitive", ...args: any[]): void
    connect(sigName: "notify::secondary-icon-storage-type", callback: (($obj: TimePicker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::secondary-icon-storage-type", callback: (($obj: TimePicker, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::secondary-icon-storage-type", ...args: any[]): void
    connect(sigName: "notify::secondary-icon-tooltip-markup", callback: (($obj: TimePicker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::secondary-icon-tooltip-markup", callback: (($obj: TimePicker, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::secondary-icon-tooltip-markup", ...args: any[]): void
    connect(sigName: "notify::secondary-icon-tooltip-text", callback: (($obj: TimePicker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::secondary-icon-tooltip-text", callback: (($obj: TimePicker, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::secondary-icon-tooltip-text", ...args: any[]): void
    connect(sigName: "notify::show-emoji-icon", callback: (($obj: TimePicker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::show-emoji-icon", callback: (($obj: TimePicker, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::show-emoji-icon", ...args: any[]): void
    connect(sigName: "notify::tabs", callback: (($obj: TimePicker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tabs", callback: (($obj: TimePicker, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tabs", ...args: any[]): void
    connect(sigName: "notify::text-length", callback: (($obj: TimePicker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::text-length", callback: (($obj: TimePicker, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::text-length", ...args: any[]): void
    connect(sigName: "notify::truncate-multiline", callback: (($obj: TimePicker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::truncate-multiline", callback: (($obj: TimePicker, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::truncate-multiline", ...args: any[]): void
    connect(sigName: "notify::visibility", callback: (($obj: TimePicker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visibility", callback: (($obj: TimePicker, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::visibility", ...args: any[]): void
    connect(sigName: "notify::can-focus", callback: (($obj: TimePicker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-focus", callback: (($obj: TimePicker, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-focus", ...args: any[]): void
    connect(sigName: "notify::can-target", callback: (($obj: TimePicker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-target", callback: (($obj: TimePicker, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-target", ...args: any[]): void
    connect(sigName: "notify::css-classes", callback: (($obj: TimePicker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::css-classes", callback: (($obj: TimePicker, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::css-classes", ...args: any[]): void
    connect(sigName: "notify::css-name", callback: (($obj: TimePicker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::css-name", callback: (($obj: TimePicker, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::css-name", ...args: any[]): void
    connect(sigName: "notify::cursor", callback: (($obj: TimePicker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::cursor", callback: (($obj: TimePicker, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::cursor", ...args: any[]): void
    connect(sigName: "notify::focus-on-click", callback: (($obj: TimePicker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::focus-on-click", callback: (($obj: TimePicker, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::focus-on-click", ...args: any[]): void
    connect(sigName: "notify::focusable", callback: (($obj: TimePicker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::focusable", callback: (($obj: TimePicker, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::focusable", ...args: any[]): void
    connect(sigName: "notify::halign", callback: (($obj: TimePicker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::halign", callback: (($obj: TimePicker, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::halign", ...args: any[]): void
    connect(sigName: "notify::has-default", callback: (($obj: TimePicker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-default", callback: (($obj: TimePicker, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-default", ...args: any[]): void
    connect(sigName: "notify::has-focus", callback: (($obj: TimePicker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-focus", callback: (($obj: TimePicker, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-focus", ...args: any[]): void
    connect(sigName: "notify::has-tooltip", callback: (($obj: TimePicker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-tooltip", callback: (($obj: TimePicker, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-tooltip", ...args: any[]): void
    connect(sigName: "notify::height-request", callback: (($obj: TimePicker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height-request", callback: (($obj: TimePicker, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::height-request", ...args: any[]): void
    connect(sigName: "notify::hexpand", callback: (($obj: TimePicker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand", callback: (($obj: TimePicker, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hexpand", ...args: any[]): void
    connect(sigName: "notify::hexpand-set", callback: (($obj: TimePicker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand-set", callback: (($obj: TimePicker, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hexpand-set", ...args: any[]): void
    connect(sigName: "notify::layout-manager", callback: (($obj: TimePicker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::layout-manager", callback: (($obj: TimePicker, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::layout-manager", ...args: any[]): void
    connect(sigName: "notify::margin-bottom", callback: (($obj: TimePicker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-bottom", callback: (($obj: TimePicker, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-bottom", ...args: any[]): void
    connect(sigName: "notify::margin-end", callback: (($obj: TimePicker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-end", callback: (($obj: TimePicker, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-end", ...args: any[]): void
    connect(sigName: "notify::margin-start", callback: (($obj: TimePicker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-start", callback: (($obj: TimePicker, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-start", ...args: any[]): void
    connect(sigName: "notify::margin-top", callback: (($obj: TimePicker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-top", callback: (($obj: TimePicker, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-top", ...args: any[]): void
    connect(sigName: "notify::name", callback: (($obj: TimePicker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: TimePicker, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::opacity", callback: (($obj: TimePicker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opacity", callback: (($obj: TimePicker, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::opacity", ...args: any[]): void
    connect(sigName: "notify::overflow", callback: (($obj: TimePicker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::overflow", callback: (($obj: TimePicker, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::overflow", ...args: any[]): void
    connect(sigName: "notify::parent", callback: (($obj: TimePicker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: TimePicker, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::parent", ...args: any[]): void
    connect(sigName: "notify::receives-default", callback: (($obj: TimePicker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::receives-default", callback: (($obj: TimePicker, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::receives-default", ...args: any[]): void
    connect(sigName: "notify::root", callback: (($obj: TimePicker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::root", callback: (($obj: TimePicker, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::root", ...args: any[]): void
    connect(sigName: "notify::scale-factor", callback: (($obj: TimePicker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-factor", callback: (($obj: TimePicker, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::scale-factor", ...args: any[]): void
    connect(sigName: "notify::sensitive", callback: (($obj: TimePicker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sensitive", callback: (($obj: TimePicker, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::sensitive", ...args: any[]): void
    connect(sigName: "notify::tooltip-markup", callback: (($obj: TimePicker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-markup", callback: (($obj: TimePicker, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tooltip-markup", ...args: any[]): void
    connect(sigName: "notify::tooltip-text", callback: (($obj: TimePicker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-text", callback: (($obj: TimePicker, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tooltip-text", ...args: any[]): void
    connect(sigName: "notify::valign", callback: (($obj: TimePicker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::valign", callback: (($obj: TimePicker, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::valign", ...args: any[]): void
    connect(sigName: "notify::vexpand", callback: (($obj: TimePicker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand", callback: (($obj: TimePicker, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vexpand", ...args: any[]): void
    connect(sigName: "notify::vexpand-set", callback: (($obj: TimePicker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand-set", callback: (($obj: TimePicker, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vexpand-set", ...args: any[]): void
    connect(sigName: "notify::visible", callback: (($obj: TimePicker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visible", callback: (($obj: TimePicker, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::visible", ...args: any[]): void
    connect(sigName: "notify::width-request", callback: (($obj: TimePicker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::width-request", callback: (($obj: TimePicker, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::width-request", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class TimePicker extends Gtk.Entry {

    // Own properties of Granite-7.0.Granite.TimePicker

    static name: string
    static $gtype: GObject.GType<TimePicker>

    // Constructors of Granite-7.0.Granite.TimePicker

    constructor(config?: TimePicker_ConstructProps) 
    static with_format(format_12: string, format_24: string): TimePicker
    constructor() 
    static new(): TimePicker

    // Overloads of new

    /**
     * Creates a new entry.
     * @constructor 
     */
    static new(): Gtk.Entry
    _init(config?: TimePicker_ConstructProps): void
}

interface ValidatedEntry_ConstructProps extends Gtk.Entry_ConstructProps {

    // Own constructor properties of Granite-7.0.Granite.ValidatedEntry

    is_valid?: boolean | null
    min_length?: number | null
    regex?: GLib.Regex | null
}

interface ValidatedEntry {

    // Own properties of Granite-7.0.Granite.ValidatedEntry

    is_valid: boolean
    min_length: number
    regex: GLib.Regex

    // Owm methods of Granite-7.0.Granite.ValidatedEntry

    get_is_valid(): boolean
    set_is_valid(value: boolean): void
    get_min_length(): number
    set_min_length(value: number): void
    get_regex(): GLib.Regex
    set_regex(value: GLib.Regex): void

    // Class property signals of Granite-7.0.Granite.ValidatedEntry

    connect(sigName: "notify::is-valid", callback: (($obj: ValidatedEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-valid", callback: (($obj: ValidatedEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::is-valid", ...args: any[]): void
    connect(sigName: "notify::min-length", callback: (($obj: ValidatedEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::min-length", callback: (($obj: ValidatedEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::min-length", ...args: any[]): void
    connect(sigName: "notify::regex", callback: (($obj: ValidatedEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::regex", callback: (($obj: ValidatedEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::regex", ...args: any[]): void
    connect(sigName: "notify::activates-default", callback: (($obj: ValidatedEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::activates-default", callback: (($obj: ValidatedEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::activates-default", ...args: any[]): void
    connect(sigName: "notify::attributes", callback: (($obj: ValidatedEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::attributes", callback: (($obj: ValidatedEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::attributes", ...args: any[]): void
    connect(sigName: "notify::buffer", callback: (($obj: ValidatedEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::buffer", callback: (($obj: ValidatedEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::buffer", ...args: any[]): void
    connect(sigName: "notify::completion", callback: (($obj: ValidatedEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::completion", callback: (($obj: ValidatedEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::completion", ...args: any[]): void
    connect(sigName: "notify::enable-emoji-completion", callback: (($obj: ValidatedEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::enable-emoji-completion", callback: (($obj: ValidatedEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::enable-emoji-completion", ...args: any[]): void
    connect(sigName: "notify::extra-menu", callback: (($obj: ValidatedEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::extra-menu", callback: (($obj: ValidatedEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::extra-menu", ...args: any[]): void
    connect(sigName: "notify::has-frame", callback: (($obj: ValidatedEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-frame", callback: (($obj: ValidatedEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-frame", ...args: any[]): void
    connect(sigName: "notify::im-module", callback: (($obj: ValidatedEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::im-module", callback: (($obj: ValidatedEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::im-module", ...args: any[]): void
    connect(sigName: "notify::input-hints", callback: (($obj: ValidatedEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::input-hints", callback: (($obj: ValidatedEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::input-hints", ...args: any[]): void
    connect(sigName: "notify::input-purpose", callback: (($obj: ValidatedEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::input-purpose", callback: (($obj: ValidatedEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::input-purpose", ...args: any[]): void
    connect(sigName: "notify::invisible-char", callback: (($obj: ValidatedEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::invisible-char", callback: (($obj: ValidatedEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::invisible-char", ...args: any[]): void
    connect(sigName: "notify::invisible-char-set", callback: (($obj: ValidatedEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::invisible-char-set", callback: (($obj: ValidatedEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::invisible-char-set", ...args: any[]): void
    connect(sigName: "notify::max-length", callback: (($obj: ValidatedEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::max-length", callback: (($obj: ValidatedEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::max-length", ...args: any[]): void
    connect(sigName: "notify::overwrite-mode", callback: (($obj: ValidatedEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::overwrite-mode", callback: (($obj: ValidatedEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::overwrite-mode", ...args: any[]): void
    connect(sigName: "notify::placeholder-text", callback: (($obj: ValidatedEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::placeholder-text", callback: (($obj: ValidatedEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::placeholder-text", ...args: any[]): void
    connect(sigName: "notify::primary-icon-activatable", callback: (($obj: ValidatedEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::primary-icon-activatable", callback: (($obj: ValidatedEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::primary-icon-activatable", ...args: any[]): void
    connect(sigName: "notify::primary-icon-gicon", callback: (($obj: ValidatedEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::primary-icon-gicon", callback: (($obj: ValidatedEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::primary-icon-gicon", ...args: any[]): void
    connect(sigName: "notify::primary-icon-name", callback: (($obj: ValidatedEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::primary-icon-name", callback: (($obj: ValidatedEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::primary-icon-name", ...args: any[]): void
    connect(sigName: "notify::primary-icon-paintable", callback: (($obj: ValidatedEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::primary-icon-paintable", callback: (($obj: ValidatedEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::primary-icon-paintable", ...args: any[]): void
    connect(sigName: "notify::primary-icon-sensitive", callback: (($obj: ValidatedEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::primary-icon-sensitive", callback: (($obj: ValidatedEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::primary-icon-sensitive", ...args: any[]): void
    connect(sigName: "notify::primary-icon-storage-type", callback: (($obj: ValidatedEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::primary-icon-storage-type", callback: (($obj: ValidatedEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::primary-icon-storage-type", ...args: any[]): void
    connect(sigName: "notify::primary-icon-tooltip-markup", callback: (($obj: ValidatedEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::primary-icon-tooltip-markup", callback: (($obj: ValidatedEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::primary-icon-tooltip-markup", ...args: any[]): void
    connect(sigName: "notify::primary-icon-tooltip-text", callback: (($obj: ValidatedEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::primary-icon-tooltip-text", callback: (($obj: ValidatedEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::primary-icon-tooltip-text", ...args: any[]): void
    connect(sigName: "notify::progress-fraction", callback: (($obj: ValidatedEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::progress-fraction", callback: (($obj: ValidatedEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::progress-fraction", ...args: any[]): void
    connect(sigName: "notify::progress-pulse-step", callback: (($obj: ValidatedEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::progress-pulse-step", callback: (($obj: ValidatedEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::progress-pulse-step", ...args: any[]): void
    connect(sigName: "notify::scroll-offset", callback: (($obj: ValidatedEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scroll-offset", callback: (($obj: ValidatedEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::scroll-offset", ...args: any[]): void
    connect(sigName: "notify::secondary-icon-activatable", callback: (($obj: ValidatedEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::secondary-icon-activatable", callback: (($obj: ValidatedEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::secondary-icon-activatable", ...args: any[]): void
    connect(sigName: "notify::secondary-icon-gicon", callback: (($obj: ValidatedEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::secondary-icon-gicon", callback: (($obj: ValidatedEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::secondary-icon-gicon", ...args: any[]): void
    connect(sigName: "notify::secondary-icon-name", callback: (($obj: ValidatedEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::secondary-icon-name", callback: (($obj: ValidatedEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::secondary-icon-name", ...args: any[]): void
    connect(sigName: "notify::secondary-icon-paintable", callback: (($obj: ValidatedEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::secondary-icon-paintable", callback: (($obj: ValidatedEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::secondary-icon-paintable", ...args: any[]): void
    connect(sigName: "notify::secondary-icon-sensitive", callback: (($obj: ValidatedEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::secondary-icon-sensitive", callback: (($obj: ValidatedEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::secondary-icon-sensitive", ...args: any[]): void
    connect(sigName: "notify::secondary-icon-storage-type", callback: (($obj: ValidatedEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::secondary-icon-storage-type", callback: (($obj: ValidatedEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::secondary-icon-storage-type", ...args: any[]): void
    connect(sigName: "notify::secondary-icon-tooltip-markup", callback: (($obj: ValidatedEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::secondary-icon-tooltip-markup", callback: (($obj: ValidatedEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::secondary-icon-tooltip-markup", ...args: any[]): void
    connect(sigName: "notify::secondary-icon-tooltip-text", callback: (($obj: ValidatedEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::secondary-icon-tooltip-text", callback: (($obj: ValidatedEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::secondary-icon-tooltip-text", ...args: any[]): void
    connect(sigName: "notify::show-emoji-icon", callback: (($obj: ValidatedEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::show-emoji-icon", callback: (($obj: ValidatedEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::show-emoji-icon", ...args: any[]): void
    connect(sigName: "notify::tabs", callback: (($obj: ValidatedEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tabs", callback: (($obj: ValidatedEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tabs", ...args: any[]): void
    connect(sigName: "notify::text-length", callback: (($obj: ValidatedEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::text-length", callback: (($obj: ValidatedEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::text-length", ...args: any[]): void
    connect(sigName: "notify::truncate-multiline", callback: (($obj: ValidatedEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::truncate-multiline", callback: (($obj: ValidatedEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::truncate-multiline", ...args: any[]): void
    connect(sigName: "notify::visibility", callback: (($obj: ValidatedEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visibility", callback: (($obj: ValidatedEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::visibility", ...args: any[]): void
    connect(sigName: "notify::can-focus", callback: (($obj: ValidatedEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-focus", callback: (($obj: ValidatedEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-focus", ...args: any[]): void
    connect(sigName: "notify::can-target", callback: (($obj: ValidatedEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-target", callback: (($obj: ValidatedEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-target", ...args: any[]): void
    connect(sigName: "notify::css-classes", callback: (($obj: ValidatedEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::css-classes", callback: (($obj: ValidatedEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::css-classes", ...args: any[]): void
    connect(sigName: "notify::css-name", callback: (($obj: ValidatedEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::css-name", callback: (($obj: ValidatedEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::css-name", ...args: any[]): void
    connect(sigName: "notify::cursor", callback: (($obj: ValidatedEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::cursor", callback: (($obj: ValidatedEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::cursor", ...args: any[]): void
    connect(sigName: "notify::focus-on-click", callback: (($obj: ValidatedEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::focus-on-click", callback: (($obj: ValidatedEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::focus-on-click", ...args: any[]): void
    connect(sigName: "notify::focusable", callback: (($obj: ValidatedEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::focusable", callback: (($obj: ValidatedEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::focusable", ...args: any[]): void
    connect(sigName: "notify::halign", callback: (($obj: ValidatedEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::halign", callback: (($obj: ValidatedEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::halign", ...args: any[]): void
    connect(sigName: "notify::has-default", callback: (($obj: ValidatedEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-default", callback: (($obj: ValidatedEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-default", ...args: any[]): void
    connect(sigName: "notify::has-focus", callback: (($obj: ValidatedEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-focus", callback: (($obj: ValidatedEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-focus", ...args: any[]): void
    connect(sigName: "notify::has-tooltip", callback: (($obj: ValidatedEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-tooltip", callback: (($obj: ValidatedEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-tooltip", ...args: any[]): void
    connect(sigName: "notify::height-request", callback: (($obj: ValidatedEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height-request", callback: (($obj: ValidatedEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::height-request", ...args: any[]): void
    connect(sigName: "notify::hexpand", callback: (($obj: ValidatedEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand", callback: (($obj: ValidatedEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hexpand", ...args: any[]): void
    connect(sigName: "notify::hexpand-set", callback: (($obj: ValidatedEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand-set", callback: (($obj: ValidatedEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hexpand-set", ...args: any[]): void
    connect(sigName: "notify::layout-manager", callback: (($obj: ValidatedEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::layout-manager", callback: (($obj: ValidatedEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::layout-manager", ...args: any[]): void
    connect(sigName: "notify::margin-bottom", callback: (($obj: ValidatedEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-bottom", callback: (($obj: ValidatedEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-bottom", ...args: any[]): void
    connect(sigName: "notify::margin-end", callback: (($obj: ValidatedEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-end", callback: (($obj: ValidatedEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-end", ...args: any[]): void
    connect(sigName: "notify::margin-start", callback: (($obj: ValidatedEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-start", callback: (($obj: ValidatedEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-start", ...args: any[]): void
    connect(sigName: "notify::margin-top", callback: (($obj: ValidatedEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-top", callback: (($obj: ValidatedEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-top", ...args: any[]): void
    connect(sigName: "notify::name", callback: (($obj: ValidatedEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: ValidatedEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::opacity", callback: (($obj: ValidatedEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opacity", callback: (($obj: ValidatedEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::opacity", ...args: any[]): void
    connect(sigName: "notify::overflow", callback: (($obj: ValidatedEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::overflow", callback: (($obj: ValidatedEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::overflow", ...args: any[]): void
    connect(sigName: "notify::parent", callback: (($obj: ValidatedEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: ValidatedEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::parent", ...args: any[]): void
    connect(sigName: "notify::receives-default", callback: (($obj: ValidatedEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::receives-default", callback: (($obj: ValidatedEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::receives-default", ...args: any[]): void
    connect(sigName: "notify::root", callback: (($obj: ValidatedEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::root", callback: (($obj: ValidatedEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::root", ...args: any[]): void
    connect(sigName: "notify::scale-factor", callback: (($obj: ValidatedEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-factor", callback: (($obj: ValidatedEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::scale-factor", ...args: any[]): void
    connect(sigName: "notify::sensitive", callback: (($obj: ValidatedEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sensitive", callback: (($obj: ValidatedEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::sensitive", ...args: any[]): void
    connect(sigName: "notify::tooltip-markup", callback: (($obj: ValidatedEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-markup", callback: (($obj: ValidatedEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tooltip-markup", ...args: any[]): void
    connect(sigName: "notify::tooltip-text", callback: (($obj: ValidatedEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-text", callback: (($obj: ValidatedEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tooltip-text", ...args: any[]): void
    connect(sigName: "notify::valign", callback: (($obj: ValidatedEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::valign", callback: (($obj: ValidatedEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::valign", ...args: any[]): void
    connect(sigName: "notify::vexpand", callback: (($obj: ValidatedEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand", callback: (($obj: ValidatedEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vexpand", ...args: any[]): void
    connect(sigName: "notify::vexpand-set", callback: (($obj: ValidatedEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand-set", callback: (($obj: ValidatedEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vexpand-set", ...args: any[]): void
    connect(sigName: "notify::visible", callback: (($obj: ValidatedEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visible", callback: (($obj: ValidatedEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::visible", ...args: any[]): void
    connect(sigName: "notify::width-request", callback: (($obj: ValidatedEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::width-request", callback: (($obj: ValidatedEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::width-request", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class ValidatedEntry extends Gtk.Entry {

    // Own properties of Granite-7.0.Granite.ValidatedEntry

    static name: string
    static $gtype: GObject.GType<ValidatedEntry>

    // Constructors of Granite-7.0.Granite.ValidatedEntry

    constructor(config?: ValidatedEntry_ConstructProps) 
    static from_regex(regex_arg: GLib.Regex): ValidatedEntry
    constructor() 
    static new(): ValidatedEntry

    // Overloads of new

    /**
     * Creates a new entry.
     * @constructor 
     */
    static new(): Gtk.Entry
    _init(config?: ValidatedEntry_ConstructProps): void
}

interface DrawingBufferSurfaceClass {
}

abstract class DrawingBufferSurfaceClass {

    // Own properties of Granite-7.0.Granite.DrawingBufferSurfaceClass

    static name: string
}

interface DrawingBufferSurfacePrivate {
}

class DrawingBufferSurfacePrivate {

    // Own properties of Granite-7.0.Granite.DrawingBufferSurfacePrivate

    static name: string
}

interface DrawingColorClass {
}

abstract class DrawingColorClass {

    // Own properties of Granite-7.0.Granite.DrawingColorClass

    static name: string
}

interface DrawingColorPrivate {
}

class DrawingColorPrivate {

    // Own properties of Granite-7.0.Granite.DrawingColorPrivate

    static name: string
}

interface DrawingUtilitiesClass {
}

abstract class DrawingUtilitiesClass {

    // Own properties of Granite-7.0.Granite.DrawingUtilitiesClass

    static name: string
}

interface DrawingUtilitiesPrivate {
}

class DrawingUtilitiesPrivate {

    // Own properties of Granite-7.0.Granite.DrawingUtilitiesPrivate

    static name: string
}

interface ServicesContractorProxyClass {
}

abstract class ServicesContractorProxyClass {

    // Own properties of Granite-7.0.Granite.ServicesContractorProxyClass

    static name: string
}

interface ServicesContractorProxyPrivate {
}

class ServicesContractorProxyPrivate {

    // Own properties of Granite-7.0.Granite.ServicesContractorProxyPrivate

    static name: string
}

interface ServicesSystemClass {
}

abstract class ServicesSystemClass {

    // Own properties of Granite-7.0.Granite.ServicesSystemClass

    static name: string
}

interface ServicesSystemPrivate {
}

class ServicesSystemPrivate {

    // Own properties of Granite-7.0.Granite.ServicesSystemPrivate

    static name: string
}

interface ServicesContractIface {

    // Own fields of Granite-7.0.Granite.ServicesContractIface

    get_display_name: (self: any) => string
    get_description: (self: any) => string
    get_icon: (self: any) => Gio.Icon
    execute_with_file: (self: any, file: Gio.File) => void
    execute_with_files: (self: any, files: Gio.File[]) => void
}

abstract class ServicesContractIface {

    // Own properties of Granite-7.0.Granite.ServicesContractIface

    static name: string
}

interface ServicesSettingsSerializableIface {

    // Own fields of Granite-7.0.Granite.ServicesSettingsSerializableIface

    settings_serialize: (self: any) => string
    settings_deserialize: (self: any, s: string) => void
}

abstract class ServicesSettingsSerializableIface {

    // Own properties of Granite-7.0.Granite.ServicesSettingsSerializableIface

    static name: string
}

interface WidgetsOverlayBarClass {
}

abstract class WidgetsOverlayBarClass {

    // Own properties of Granite-7.0.Granite.WidgetsOverlayBarClass

    static name: string
}

interface WidgetsOverlayBarPrivate {
}

class WidgetsOverlayBarPrivate {

    // Own properties of Granite-7.0.Granite.WidgetsOverlayBarPrivate

    static name: string
}

interface WidgetsToastClass {
}

abstract class WidgetsToastClass {

    // Own properties of Granite-7.0.Granite.WidgetsToastClass

    static name: string
}

interface WidgetsToastPrivate {
}

class WidgetsToastPrivate {

    // Own properties of Granite-7.0.Granite.WidgetsToastPrivate

    static name: string
}

interface SettingsPageClass {
}

abstract class SettingsPageClass {

    // Own properties of Granite-7.0.Granite.SettingsPageClass

    static name: string
}

interface SettingsPagePrivate {
}

class SettingsPagePrivate {

    // Own properties of Granite-7.0.Granite.SettingsPagePrivate

    static name: string
}

interface SimpleSettingsPageClass {
}

abstract class SimpleSettingsPageClass {

    // Own properties of Granite-7.0.Granite.SimpleSettingsPageClass

    static name: string
}

interface SimpleSettingsPagePrivate {
}

class SimpleSettingsPagePrivate {

    // Own properties of Granite-7.0.Granite.SimpleSettingsPagePrivate

    static name: string
}

interface AccelLabelClass {
}

abstract class AccelLabelClass {

    // Own properties of Granite-7.0.Granite.AccelLabelClass

    static name: string
}

interface AccelLabelPrivate {
}

class AccelLabelPrivate {

    // Own properties of Granite-7.0.Granite.AccelLabelPrivate

    static name: string
}

interface DatePickerClass {
}

abstract class DatePickerClass {

    // Own properties of Granite-7.0.Granite.DatePickerClass

    static name: string
}

interface DatePickerPrivate {
}

class DatePickerPrivate {

    // Own properties of Granite-7.0.Granite.DatePickerPrivate

    static name: string
}

interface DialogClass {
}

abstract class DialogClass {

    // Own properties of Granite-7.0.Granite.DialogClass

    static name: string
}

interface DialogPrivate {
}

class DialogPrivate {

    // Own properties of Granite-7.0.Granite.DialogPrivate

    static name: string
}

interface HeaderLabelClass {
}

abstract class HeaderLabelClass {

    // Own properties of Granite-7.0.Granite.HeaderLabelClass

    static name: string
}

interface HeaderLabelPrivate {
}

class HeaderLabelPrivate {

    // Own properties of Granite-7.0.Granite.HeaderLabelPrivate

    static name: string
}

interface HyperTextViewClass {
}

abstract class HyperTextViewClass {

    // Own properties of Granite-7.0.Granite.HyperTextViewClass

    static name: string
}

interface HyperTextViewPrivate {
}

class HyperTextViewPrivate {

    // Own properties of Granite-7.0.Granite.HyperTextViewPrivate

    static name: string
}

interface MessageDialogClass {
}

abstract class MessageDialogClass {

    // Own properties of Granite-7.0.Granite.MessageDialogClass

    static name: string
}

interface MessageDialogPrivate {
}

class MessageDialogPrivate {

    // Own properties of Granite-7.0.Granite.MessageDialogPrivate

    static name: string
}

interface ModeSwitchClass {
}

abstract class ModeSwitchClass {

    // Own properties of Granite-7.0.Granite.ModeSwitchClass

    static name: string
}

interface ModeSwitchPrivate {
}

class ModeSwitchPrivate {

    // Own properties of Granite-7.0.Granite.ModeSwitchPrivate

    static name: string
}

interface PlaceholderClass {
}

abstract class PlaceholderClass {

    // Own properties of Granite-7.0.Granite.PlaceholderClass

    static name: string
}

interface PlaceholderPrivate {
}

class PlaceholderPrivate {

    // Own properties of Granite-7.0.Granite.PlaceholderPrivate

    static name: string
}

interface SettingsSidebarClass {
}

abstract class SettingsSidebarClass {

    // Own properties of Granite-7.0.Granite.SettingsSidebarClass

    static name: string
}

interface SettingsSidebarPrivate {
}

class SettingsSidebarPrivate {

    // Own properties of Granite-7.0.Granite.SettingsSidebarPrivate

    static name: string
}

interface SettingsClass {
}

abstract class SettingsClass {

    // Own properties of Granite-7.0.Granite.SettingsClass

    static name: string
}

interface SettingsPrivate {
}

class SettingsPrivate {

    // Own properties of Granite-7.0.Granite.SettingsPrivate

    static name: string
}

interface SwitchModelButtonClass {
}

abstract class SwitchModelButtonClass {

    // Own properties of Granite-7.0.Granite.SwitchModelButtonClass

    static name: string
}

interface SwitchModelButtonPrivate {
}

class SwitchModelButtonPrivate {

    // Own properties of Granite-7.0.Granite.SwitchModelButtonPrivate

    static name: string
}

interface TimePickerClass {
}

abstract class TimePickerClass {

    // Own properties of Granite-7.0.Granite.TimePickerClass

    static name: string
}

interface TimePickerPrivate {
}

class TimePickerPrivate {

    // Own properties of Granite-7.0.Granite.TimePickerPrivate

    static name: string
}

interface ValidatedEntryClass {
}

abstract class ValidatedEntryClass {

    // Own properties of Granite-7.0.Granite.ValidatedEntryClass

    static name: string
}

interface ValidatedEntryPrivate {
}

class ValidatedEntryPrivate {

    // Own properties of Granite-7.0.Granite.ValidatedEntryPrivate

    static name: string
}

}
export default Granite;