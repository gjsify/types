// @ts-nocheck

/*
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/sammydre/ts-for-gjs
 */
/**
 * Gkbd-3.0
 */

import type * as Gjs from './Gjs';
import type xlib from './xlib-2.0';
import type Xkl from './Xkl-1.0';
import type GObject from './GObject-2.0';
import type GLib from './GLib-2.0';
import type Gtk from './Gtk-3.0';
import type Gdk from './Gdk-3.0';
import type cairo from './cairo-1.0';
import type Pango from './Pango-1.0';
import type HarfBuzz from './HarfBuzz-0.0';
import type Gio from './Gio-2.0';
import type GdkPixbuf from './GdkPixbuf-2.0';
import type GModule from './GModule-2.0';
import type Atk from './Atk-1.0';

export namespace Gkbd {

enum KeyboardDrawingGroupLevelPosition {
    TOPLEFT,
    TOPRIGHT,
    BOTTOMLEFT,
    BOTTOMRIGHT,
    TOTAL,
    FIRST,
    LAST,
}
enum KeyboardDrawingItemType {
    INVALID,
    KEY,
    KEY_EXTRA,
    DOODAD,
}
const DESKTOP_SCHEMA: string
const KEYBOARD_DRAWING_H: number
const KEYBOARD_SCHEMA: string
function install_glib_log_appender(): void
function keyboard_config_add_default_switch_option_if_necessary(layouts_list: string, options_list: string, was_appended: boolean): string[]
function keyboard_config_format_full_description(layout_descr: string, variant_descr: string): string
function keyboard_config_get_descriptions(config_registry: Xkl.ConfigRegistry, name: string, layout_short_descr: string, layout_descr: string, variant_short_descr: string, variant_descr: string): boolean
function keyboard_config_merge_items(parent: string, child: string): string
function keyboard_config_split_items(merged: string, parent: string, child: string): boolean
function preview_load_position(): Gdk.Rectangle
function preview_save_position(rect: Gdk.Rectangle): void
function strv_append(arr: string, element: string): string[]
function strv_behead(arr: string): void
function strv_remove(arr: string, element: string): boolean
interface Configuration_ConstructProps extends GObject.Object_ConstructProps {
}

/**
 * Signal callback interface for `changed`
 */
interface Configuration_ChangedSignalCallback {
    ($obj: Configuration): void
}

/**
 * Signal callback interface for `group-changed`
 */
interface Configuration_GroupChangedSignalCallback {
    ($obj: Configuration, object: number): void
}

/**
 * Signal callback interface for `indicators-changed`
 */
interface Configuration_IndicatorsChangedSignalCallback {
    ($obj: Configuration): void
}

interface Configuration {

    // Own fields of Gkbd-3.0.Gkbd.Configuration

    parent: GObject.Object
    priv: ConfigurationPrivate

    // Owm methods of Gkbd-3.0.Gkbd.Configuration

    append_object(obj: GObject.Object): void
    extract_layout_name(group: number): string
    free_images(images: GdkPixbuf.Pixbuf[]): void
    get_all_objects(): GObject.Object[]
    get_caps_lock_state(): boolean
    get_current_group(): number
    get_current_tooltip(): string
    get_group_name(group: number): string
    get_group_names(): string[]
    get_image_filename(group: number): string
    get_indicator_config(): IndicatorConfig
    get_keyboard_config(): KeyboardConfig
    get_num_lock_state(): boolean
    get_scroll_lock_state(): boolean
    get_short_group_names(): string[]
    get_xkl_engine(): Xkl.Engine
    if_any_object_exists(): boolean
    if_flags_shown(): boolean
    load_images(): GdkPixbuf.Pixbuf[]
    lock_group(group: number): void
    lock_next_group(): void
    remove_object(obj: GObject.Object): void
    start_listen(): void
    stop_listen(): void

    // Own signals of Gkbd-3.0.Gkbd.Configuration

    connect(sigName: "changed", callback: Configuration_ChangedSignalCallback): number
    connect_after(sigName: "changed", callback: Configuration_ChangedSignalCallback): number
    emit(sigName: "changed", ...args: any[]): void
    connect(sigName: "group-changed", callback: Configuration_GroupChangedSignalCallback): number
    connect_after(sigName: "group-changed", callback: Configuration_GroupChangedSignalCallback): number
    emit(sigName: "group-changed", object: number, ...args: any[]): void
    connect(sigName: "indicators-changed", callback: Configuration_IndicatorsChangedSignalCallback): number
    connect_after(sigName: "indicators-changed", callback: Configuration_IndicatorsChangedSignalCallback): number
    emit(sigName: "indicators-changed", ...args: any[]): void

    // Class property signals of Gkbd-3.0.Gkbd.Configuration

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class Configuration extends GObject.Object {

    // Own properties of Gkbd-3.0.Gkbd.Configuration

    static name: string
    static $gtype: GObject.GType<Configuration>

    // Constructors of Gkbd-3.0.Gkbd.Configuration

    constructor(config?: Configuration_ConstructProps) 
    _init(config?: Configuration_ConstructProps): void
    static create_label_title(group: number, ln2cnt_map: GLib.HashTable, layout_name: string): string
    static get(): Configuration
}

interface Indicator_ConstructProps extends Atk.ImplementorIface_ConstructProps, Gtk.Buildable_ConstructProps, Gtk.Notebook_ConstructProps {
}

/**
 * Signal callback interface for `reinit-ui`
 */
interface Indicator_ReinitUiSignalCallback {
    ($obj: Indicator): void
}

interface Indicator extends Atk.ImplementorIface, Gtk.Buildable {

    // Own fields of Gkbd-3.0.Gkbd.Indicator

    parent: Gtk.Notebook
    priv: IndicatorPrivate

    // Owm methods of Gkbd-3.0.Gkbd.Indicator

    reinit_ui(): void
    set_angle(angle: number): void
    set_parent_tooltips(ifset: boolean): void

    // Conflicting methods

    child_notify(...args: any[]): any

    // Own virtual methods of Gkbd-3.0.Gkbd.Indicator

    vfunc_reinit_ui(): void

    // Own signals of Gkbd-3.0.Gkbd.Indicator

    connect(sigName: "reinit-ui", callback: Indicator_ReinitUiSignalCallback): number
    connect_after(sigName: "reinit-ui", callback: Indicator_ReinitUiSignalCallback): number
    emit(sigName: "reinit-ui", ...args: any[]): void

    // Class property signals of Gkbd-3.0.Gkbd.Indicator

    connect(sigName: "notify::enable-popup", callback: (($obj: Indicator, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::enable-popup", callback: (($obj: Indicator, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::enable-popup", ...args: any[]): void
    connect(sigName: "notify::group-name", callback: (($obj: Indicator, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::group-name", callback: (($obj: Indicator, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::group-name", ...args: any[]): void
    connect(sigName: "notify::page", callback: (($obj: Indicator, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::page", callback: (($obj: Indicator, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::page", ...args: any[]): void
    connect(sigName: "notify::scrollable", callback: (($obj: Indicator, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scrollable", callback: (($obj: Indicator, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::scrollable", ...args: any[]): void
    connect(sigName: "notify::show-border", callback: (($obj: Indicator, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::show-border", callback: (($obj: Indicator, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::show-border", ...args: any[]): void
    connect(sigName: "notify::show-tabs", callback: (($obj: Indicator, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::show-tabs", callback: (($obj: Indicator, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::show-tabs", ...args: any[]): void
    connect(sigName: "notify::tab-pos", callback: (($obj: Indicator, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tab-pos", callback: (($obj: Indicator, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tab-pos", ...args: any[]): void
    connect(sigName: "notify::border-width", callback: (($obj: Indicator, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::border-width", callback: (($obj: Indicator, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::border-width", ...args: any[]): void
    connect(sigName: "notify::child", callback: (($obj: Indicator, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::child", callback: (($obj: Indicator, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::child", ...args: any[]): void
    connect(sigName: "notify::resize-mode", callback: (($obj: Indicator, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::resize-mode", callback: (($obj: Indicator, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::resize-mode", ...args: any[]): void
    connect(sigName: "notify::app-paintable", callback: (($obj: Indicator, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::app-paintable", callback: (($obj: Indicator, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::app-paintable", ...args: any[]): void
    connect(sigName: "notify::can-default", callback: (($obj: Indicator, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-default", callback: (($obj: Indicator, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-default", ...args: any[]): void
    connect(sigName: "notify::can-focus", callback: (($obj: Indicator, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-focus", callback: (($obj: Indicator, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-focus", ...args: any[]): void
    connect(sigName: "notify::composite-child", callback: (($obj: Indicator, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::composite-child", callback: (($obj: Indicator, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::composite-child", ...args: any[]): void
    connect(sigName: "notify::double-buffered", callback: (($obj: Indicator, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::double-buffered", callback: (($obj: Indicator, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::double-buffered", ...args: any[]): void
    connect(sigName: "notify::events", callback: (($obj: Indicator, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::events", callback: (($obj: Indicator, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::events", ...args: any[]): void
    connect(sigName: "notify::expand", callback: (($obj: Indicator, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::expand", callback: (($obj: Indicator, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::expand", ...args: any[]): void
    connect(sigName: "notify::focus-on-click", callback: (($obj: Indicator, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::focus-on-click", callback: (($obj: Indicator, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::focus-on-click", ...args: any[]): void
    connect(sigName: "notify::halign", callback: (($obj: Indicator, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::halign", callback: (($obj: Indicator, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::halign", ...args: any[]): void
    connect(sigName: "notify::has-default", callback: (($obj: Indicator, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-default", callback: (($obj: Indicator, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-default", ...args: any[]): void
    connect(sigName: "notify::has-focus", callback: (($obj: Indicator, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-focus", callback: (($obj: Indicator, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-focus", ...args: any[]): void
    connect(sigName: "notify::has-tooltip", callback: (($obj: Indicator, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-tooltip", callback: (($obj: Indicator, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-tooltip", ...args: any[]): void
    connect(sigName: "notify::height-request", callback: (($obj: Indicator, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height-request", callback: (($obj: Indicator, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::height-request", ...args: any[]): void
    connect(sigName: "notify::hexpand", callback: (($obj: Indicator, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand", callback: (($obj: Indicator, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hexpand", ...args: any[]): void
    connect(sigName: "notify::hexpand-set", callback: (($obj: Indicator, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand-set", callback: (($obj: Indicator, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hexpand-set", ...args: any[]): void
    connect(sigName: "notify::is-focus", callback: (($obj: Indicator, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-focus", callback: (($obj: Indicator, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::is-focus", ...args: any[]): void
    connect(sigName: "notify::margin", callback: (($obj: Indicator, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin", callback: (($obj: Indicator, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin", ...args: any[]): void
    connect(sigName: "notify::margin-bottom", callback: (($obj: Indicator, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-bottom", callback: (($obj: Indicator, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-bottom", ...args: any[]): void
    connect(sigName: "notify::margin-end", callback: (($obj: Indicator, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-end", callback: (($obj: Indicator, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-end", ...args: any[]): void
    connect(sigName: "notify::margin-left", callback: (($obj: Indicator, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-left", callback: (($obj: Indicator, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-left", ...args: any[]): void
    connect(sigName: "notify::margin-right", callback: (($obj: Indicator, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-right", callback: (($obj: Indicator, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-right", ...args: any[]): void
    connect(sigName: "notify::margin-start", callback: (($obj: Indicator, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-start", callback: (($obj: Indicator, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-start", ...args: any[]): void
    connect(sigName: "notify::margin-top", callback: (($obj: Indicator, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-top", callback: (($obj: Indicator, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-top", ...args: any[]): void
    connect(sigName: "notify::name", callback: (($obj: Indicator, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: Indicator, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::no-show-all", callback: (($obj: Indicator, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::no-show-all", callback: (($obj: Indicator, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::no-show-all", ...args: any[]): void
    connect(sigName: "notify::opacity", callback: (($obj: Indicator, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opacity", callback: (($obj: Indicator, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::opacity", ...args: any[]): void
    connect(sigName: "notify::parent", callback: (($obj: Indicator, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: Indicator, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::parent", ...args: any[]): void
    connect(sigName: "notify::receives-default", callback: (($obj: Indicator, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::receives-default", callback: (($obj: Indicator, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::receives-default", ...args: any[]): void
    connect(sigName: "notify::scale-factor", callback: (($obj: Indicator, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-factor", callback: (($obj: Indicator, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::scale-factor", ...args: any[]): void
    connect(sigName: "notify::sensitive", callback: (($obj: Indicator, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sensitive", callback: (($obj: Indicator, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::sensitive", ...args: any[]): void
    connect(sigName: "notify::style", callback: (($obj: Indicator, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::style", callback: (($obj: Indicator, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::style", ...args: any[]): void
    connect(sigName: "notify::tooltip-markup", callback: (($obj: Indicator, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-markup", callback: (($obj: Indicator, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tooltip-markup", ...args: any[]): void
    connect(sigName: "notify::tooltip-text", callback: (($obj: Indicator, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-text", callback: (($obj: Indicator, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tooltip-text", ...args: any[]): void
    connect(sigName: "notify::valign", callback: (($obj: Indicator, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::valign", callback: (($obj: Indicator, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::valign", ...args: any[]): void
    connect(sigName: "notify::vexpand", callback: (($obj: Indicator, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand", callback: (($obj: Indicator, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vexpand", ...args: any[]): void
    connect(sigName: "notify::vexpand-set", callback: (($obj: Indicator, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand-set", callback: (($obj: Indicator, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vexpand-set", ...args: any[]): void
    connect(sigName: "notify::visible", callback: (($obj: Indicator, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visible", callback: (($obj: Indicator, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::visible", ...args: any[]): void
    connect(sigName: "notify::width-request", callback: (($obj: Indicator, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::width-request", callback: (($obj: Indicator, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::width-request", ...args: any[]): void
    connect(sigName: "notify::window", callback: (($obj: Indicator, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::window", callback: (($obj: Indicator, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::window", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class Indicator extends Gtk.Notebook {

    // Own properties of Gkbd-3.0.Gkbd.Indicator

    static name: string
    static $gtype: GObject.GType<Indicator>

    // Constructors of Gkbd-3.0.Gkbd.Indicator

    constructor(config?: Indicator_ConstructProps) 
    constructor() 
    static new(): Indicator
    _init(config?: Indicator_ConstructProps): void
    static get_group_names(): string[]
    static get_image_filename(group: number): string
    static get_max_width_height_ratio(): number
    static get_xkl_engine(): Xkl.Engine
}

interface KeyboardDrawing_ConstructProps extends Atk.ImplementorIface_ConstructProps, Gtk.Buildable_ConstructProps, Gtk.DrawingArea_ConstructProps {
}

/**
 * Signal callback interface for `bad-keycode`
 */
interface KeyboardDrawing_BadKeycodeSignalCallback {
    ($obj: KeyboardDrawing, object: number): void
}

interface KeyboardDrawing extends Atk.ImplementorIface, Gtk.Buildable {

    // Owm methods of Gkbd-3.0.Gkbd.KeyboardDrawing

    get_compat(): string
    get_geometry(): string
    get_keycodes(): string
    get_symbols(): string
    get_types(): string
    print(parent_window: Gtk.Window, description: string): void
    /**
     * Renders a keyboard layout to a cairo_t context.  `cr` and `layout` can be got
     * from e.g. a GtkWidget or a GtkPrintContext.  `cr` and `layout` may be modified
     * by the function but will not be unreffed.
     * @param cr Cairo context to render to
     * @param layout Pango layout to use to render text
     * @param x left coordinate (pixels) of region to render in
     * @param y top coordinate (pixels) of region to render in
     * @param width width (pixels) of region to render in
     * @param height height (pixels) of region to render in
     * @param dpi_x 
     * @param dpi_y 
     */
    render(cr: cairo.Context, layout: Pango.Layout, x: number, y: number, width: number, height: number, dpi_x: number, dpi_y: number): boolean
    set_groups_levels(groupLevels: KeyboardDrawingGroupLevel): void
    set_layout(id: string): void
    set_track_config(enable: boolean): void
    set_track_modifiers(enable: boolean): void

    // Own virtual methods of Gkbd-3.0.Gkbd.KeyboardDrawing

    vfunc_bad_keycode(keycode: number): void

    // Own signals of Gkbd-3.0.Gkbd.KeyboardDrawing

    connect(sigName: "bad-keycode", callback: KeyboardDrawing_BadKeycodeSignalCallback): number
    connect_after(sigName: "bad-keycode", callback: KeyboardDrawing_BadKeycodeSignalCallback): number
    emit(sigName: "bad-keycode", object: number, ...args: any[]): void

    // Class property signals of Gkbd-3.0.Gkbd.KeyboardDrawing

    connect(sigName: "notify::app-paintable", callback: (($obj: KeyboardDrawing, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::app-paintable", callback: (($obj: KeyboardDrawing, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::app-paintable", ...args: any[]): void
    connect(sigName: "notify::can-default", callback: (($obj: KeyboardDrawing, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-default", callback: (($obj: KeyboardDrawing, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-default", ...args: any[]): void
    connect(sigName: "notify::can-focus", callback: (($obj: KeyboardDrawing, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-focus", callback: (($obj: KeyboardDrawing, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-focus", ...args: any[]): void
    connect(sigName: "notify::composite-child", callback: (($obj: KeyboardDrawing, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::composite-child", callback: (($obj: KeyboardDrawing, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::composite-child", ...args: any[]): void
    connect(sigName: "notify::double-buffered", callback: (($obj: KeyboardDrawing, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::double-buffered", callback: (($obj: KeyboardDrawing, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::double-buffered", ...args: any[]): void
    connect(sigName: "notify::events", callback: (($obj: KeyboardDrawing, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::events", callback: (($obj: KeyboardDrawing, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::events", ...args: any[]): void
    connect(sigName: "notify::expand", callback: (($obj: KeyboardDrawing, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::expand", callback: (($obj: KeyboardDrawing, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::expand", ...args: any[]): void
    connect(sigName: "notify::focus-on-click", callback: (($obj: KeyboardDrawing, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::focus-on-click", callback: (($obj: KeyboardDrawing, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::focus-on-click", ...args: any[]): void
    connect(sigName: "notify::halign", callback: (($obj: KeyboardDrawing, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::halign", callback: (($obj: KeyboardDrawing, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::halign", ...args: any[]): void
    connect(sigName: "notify::has-default", callback: (($obj: KeyboardDrawing, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-default", callback: (($obj: KeyboardDrawing, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-default", ...args: any[]): void
    connect(sigName: "notify::has-focus", callback: (($obj: KeyboardDrawing, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-focus", callback: (($obj: KeyboardDrawing, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-focus", ...args: any[]): void
    connect(sigName: "notify::has-tooltip", callback: (($obj: KeyboardDrawing, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-tooltip", callback: (($obj: KeyboardDrawing, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-tooltip", ...args: any[]): void
    connect(sigName: "notify::height-request", callback: (($obj: KeyboardDrawing, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height-request", callback: (($obj: KeyboardDrawing, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::height-request", ...args: any[]): void
    connect(sigName: "notify::hexpand", callback: (($obj: KeyboardDrawing, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand", callback: (($obj: KeyboardDrawing, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hexpand", ...args: any[]): void
    connect(sigName: "notify::hexpand-set", callback: (($obj: KeyboardDrawing, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand-set", callback: (($obj: KeyboardDrawing, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hexpand-set", ...args: any[]): void
    connect(sigName: "notify::is-focus", callback: (($obj: KeyboardDrawing, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-focus", callback: (($obj: KeyboardDrawing, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::is-focus", ...args: any[]): void
    connect(sigName: "notify::margin", callback: (($obj: KeyboardDrawing, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin", callback: (($obj: KeyboardDrawing, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin", ...args: any[]): void
    connect(sigName: "notify::margin-bottom", callback: (($obj: KeyboardDrawing, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-bottom", callback: (($obj: KeyboardDrawing, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-bottom", ...args: any[]): void
    connect(sigName: "notify::margin-end", callback: (($obj: KeyboardDrawing, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-end", callback: (($obj: KeyboardDrawing, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-end", ...args: any[]): void
    connect(sigName: "notify::margin-left", callback: (($obj: KeyboardDrawing, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-left", callback: (($obj: KeyboardDrawing, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-left", ...args: any[]): void
    connect(sigName: "notify::margin-right", callback: (($obj: KeyboardDrawing, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-right", callback: (($obj: KeyboardDrawing, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-right", ...args: any[]): void
    connect(sigName: "notify::margin-start", callback: (($obj: KeyboardDrawing, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-start", callback: (($obj: KeyboardDrawing, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-start", ...args: any[]): void
    connect(sigName: "notify::margin-top", callback: (($obj: KeyboardDrawing, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-top", callback: (($obj: KeyboardDrawing, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-top", ...args: any[]): void
    connect(sigName: "notify::name", callback: (($obj: KeyboardDrawing, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: KeyboardDrawing, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::no-show-all", callback: (($obj: KeyboardDrawing, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::no-show-all", callback: (($obj: KeyboardDrawing, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::no-show-all", ...args: any[]): void
    connect(sigName: "notify::opacity", callback: (($obj: KeyboardDrawing, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opacity", callback: (($obj: KeyboardDrawing, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::opacity", ...args: any[]): void
    connect(sigName: "notify::parent", callback: (($obj: KeyboardDrawing, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: KeyboardDrawing, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::parent", ...args: any[]): void
    connect(sigName: "notify::receives-default", callback: (($obj: KeyboardDrawing, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::receives-default", callback: (($obj: KeyboardDrawing, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::receives-default", ...args: any[]): void
    connect(sigName: "notify::scale-factor", callback: (($obj: KeyboardDrawing, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-factor", callback: (($obj: KeyboardDrawing, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::scale-factor", ...args: any[]): void
    connect(sigName: "notify::sensitive", callback: (($obj: KeyboardDrawing, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sensitive", callback: (($obj: KeyboardDrawing, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::sensitive", ...args: any[]): void
    connect(sigName: "notify::style", callback: (($obj: KeyboardDrawing, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::style", callback: (($obj: KeyboardDrawing, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::style", ...args: any[]): void
    connect(sigName: "notify::tooltip-markup", callback: (($obj: KeyboardDrawing, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-markup", callback: (($obj: KeyboardDrawing, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tooltip-markup", ...args: any[]): void
    connect(sigName: "notify::tooltip-text", callback: (($obj: KeyboardDrawing, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-text", callback: (($obj: KeyboardDrawing, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tooltip-text", ...args: any[]): void
    connect(sigName: "notify::valign", callback: (($obj: KeyboardDrawing, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::valign", callback: (($obj: KeyboardDrawing, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::valign", ...args: any[]): void
    connect(sigName: "notify::vexpand", callback: (($obj: KeyboardDrawing, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand", callback: (($obj: KeyboardDrawing, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vexpand", ...args: any[]): void
    connect(sigName: "notify::vexpand-set", callback: (($obj: KeyboardDrawing, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand-set", callback: (($obj: KeyboardDrawing, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vexpand-set", ...args: any[]): void
    connect(sigName: "notify::visible", callback: (($obj: KeyboardDrawing, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visible", callback: (($obj: KeyboardDrawing, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::visible", ...args: any[]): void
    connect(sigName: "notify::width-request", callback: (($obj: KeyboardDrawing, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::width-request", callback: (($obj: KeyboardDrawing, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::width-request", ...args: any[]): void
    connect(sigName: "notify::window", callback: (($obj: KeyboardDrawing, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::window", callback: (($obj: KeyboardDrawing, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::window", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class KeyboardDrawing extends Gtk.DrawingArea {

    // Own properties of Gkbd-3.0.Gkbd.KeyboardDrawing

    static name: string
    static $gtype: GObject.GType<KeyboardDrawing>

    // Constructors of Gkbd-3.0.Gkbd.KeyboardDrawing

    constructor(config?: KeyboardDrawing_ConstructProps) 
    static dialog_new(): KeyboardDrawing
    constructor() 
    static new(): KeyboardDrawing
    _init(config?: KeyboardDrawing_ConstructProps): void
    static dialog_set_group(dialog: Gtk.Widget, registry: Xkl.ConfigRegistry, group: number): void
    static dialog_set_layout(dialog: Gtk.Widget, registry: Xkl.ConfigRegistry, layout: string): void
}

interface Status_ConstructProps extends Gtk.StatusIcon_ConstructProps {
}

interface Status {

    // Own fields of Gkbd-3.0.Gkbd.Status

    parent: Gtk.StatusIcon
    priv: StatusPrivate

    // Owm methods of Gkbd-3.0.Gkbd.Status

    reinit_ui(): void

    // Class property signals of Gkbd-3.0.Gkbd.Status

    connect(sigName: "notify::embedded", callback: (($obj: Status, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::embedded", callback: (($obj: Status, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::embedded", ...args: any[]): void
    connect(sigName: "notify::file", callback: (($obj: Status, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::file", callback: (($obj: Status, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::file", ...args: any[]): void
    connect(sigName: "notify::gicon", callback: (($obj: Status, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::gicon", callback: (($obj: Status, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::gicon", ...args: any[]): void
    connect(sigName: "notify::has-tooltip", callback: (($obj: Status, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-tooltip", callback: (($obj: Status, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-tooltip", ...args: any[]): void
    connect(sigName: "notify::icon-name", callback: (($obj: Status, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::icon-name", callback: (($obj: Status, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::icon-name", ...args: any[]): void
    connect(sigName: "notify::orientation", callback: (($obj: Status, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::orientation", callback: (($obj: Status, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::orientation", ...args: any[]): void
    connect(sigName: "notify::pixbuf", callback: (($obj: Status, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::pixbuf", callback: (($obj: Status, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::pixbuf", ...args: any[]): void
    connect(sigName: "notify::screen", callback: (($obj: Status, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::screen", callback: (($obj: Status, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::screen", ...args: any[]): void
    connect(sigName: "notify::size", callback: (($obj: Status, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::size", callback: (($obj: Status, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::size", ...args: any[]): void
    connect(sigName: "notify::stock", callback: (($obj: Status, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::stock", callback: (($obj: Status, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::stock", ...args: any[]): void
    connect(sigName: "notify::storage-type", callback: (($obj: Status, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::storage-type", callback: (($obj: Status, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::storage-type", ...args: any[]): void
    connect(sigName: "notify::title", callback: (($obj: Status, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::title", callback: (($obj: Status, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::title", ...args: any[]): void
    connect(sigName: "notify::tooltip-markup", callback: (($obj: Status, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-markup", callback: (($obj: Status, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tooltip-markup", ...args: any[]): void
    connect(sigName: "notify::tooltip-text", callback: (($obj: Status, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-text", callback: (($obj: Status, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tooltip-text", ...args: any[]): void
    connect(sigName: "notify::visible", callback: (($obj: Status, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visible", callback: (($obj: Status, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::visible", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class Status extends Gtk.StatusIcon {

    // Own properties of Gkbd-3.0.Gkbd.Status

    static name: string
    static $gtype: GObject.GType<Status>

    // Constructors of Gkbd-3.0.Gkbd.Status

    constructor(config?: Status_ConstructProps) 
    constructor() 
    static new(): Status
    _init(config?: Status_ConstructProps): void
    static get_group_names(): string[]
    static get_image_filename(group: number): string
    static get_xkl_engine(): Xkl.Engine
}

interface ConfigurationClass {

    // Own fields of Gkbd-3.0.Gkbd.ConfigurationClass

    parent_class: GObject.ObjectClass
}

abstract class ConfigurationClass {

    // Own properties of Gkbd-3.0.Gkbd.ConfigurationClass

    static name: string
}

interface ConfigurationPrivate {
}

class ConfigurationPrivate {

    // Own properties of Gkbd-3.0.Gkbd.ConfigurationPrivate

    static name: string
}

interface DesktopConfig {

    // Own fields of Gkbd-3.0.Gkbd.DesktopConfig

    default_group: number
    group_per_app: boolean
    handle_indicators: boolean
    layout_names_as_group_names: boolean
    load_extra_items: boolean
    settings: Gio.Settings
    config_listener_id: number
    engine: Xkl.Engine

    // Owm methods of Gkbd-3.0.Gkbd.DesktopConfig

    activate(): boolean
    init(engine: Xkl.Engine): void
    load(): void
    load_group_descriptions(registry: Xkl.ConfigRegistry, layout_ids: string, variant_ids: string, short_group_names: string, full_group_names: string): boolean
    lock_next_group(): void
    lock_prev_group(): void
    restore_group(): void
    save(): void
    start_listen(func: GObject.Callback): void
    stop_listen(): void
    term(): void
}

class DesktopConfig {

    // Own properties of Gkbd-3.0.Gkbd.DesktopConfig

    static name: string
}

interface IndicatorClass {

    // Own fields of Gkbd-3.0.Gkbd.IndicatorClass

    parent_class: Gtk.NotebookClass
    reinit_ui: (gki: Indicator) => void
}

abstract class IndicatorClass {

    // Own properties of Gkbd-3.0.Gkbd.IndicatorClass

    static name: string
}

interface IndicatorConfig {

    // Own fields of Gkbd-3.0.Gkbd.IndicatorConfig

    secondary_groups_mask: number
    show_flags: boolean
    font_family: string
    font_size: number
    foreground_color: string
    background_color: string
    settings: Gio.Settings
    image_filenames: object[]
    icon_theme: Gtk.IconTheme
    config_listener_id: number
    engine: Xkl.Engine

    // Owm methods of Gkbd-3.0.Gkbd.IndicatorConfig

    activate(): void
    free_image_filenames(): void
    get_fg_color_for_widget(widget: Gtk.Widget): string
    get_font_for_widget(widget: Gtk.Widget, font_family: string, font_size: number): void
    get_images_file(kbd_config: KeyboardConfig, group: number): string
    init(engine: Xkl.Engine): void
    load(): void
    load_image_filenames(kbd_config: KeyboardConfig): void
    refresh_style(): void
    save(): void
    start_listen(func: GObject.Callback): void
    stop_listen(): void
    term(): void
}

class IndicatorConfig {

    // Own properties of Gkbd-3.0.Gkbd.IndicatorConfig

    static name: string
}

interface IndicatorPrivate {
}

class IndicatorPrivate {

    // Own properties of Gkbd-3.0.Gkbd.IndicatorPrivate

    static name: string
}

interface KeyboardConfig {

    // Own fields of Gkbd-3.0.Gkbd.KeyboardConfig

    model: string
    layouts_variants: string
    options: string
    settings: Gio.Settings
    config_listener_id: number
    engine: Xkl.Engine

    // Owm methods of Gkbd-3.0.Gkbd.KeyboardConfig

    activate(): boolean
    equals(kbd_config2: KeyboardConfig): boolean
    init(engine: Xkl.Engine): void
    load(kbd_config_default: KeyboardConfig): void
    load_from_x_current(buf: Xkl.ConfigRec): void
    load_from_x_initial(buf: Xkl.ConfigRec): void
    save(): void
    start_listen(func: GObject.Callback): void
    stop_listen(): void
    term(): void
    to_string(): string
}

class KeyboardConfig {

    // Own properties of Gkbd-3.0.Gkbd.KeyboardConfig

    static name: string

    // Constructors of Gkbd-3.0.Gkbd.KeyboardConfig

    static add_default_switch_option_if_necessary(layouts_list: string, options_list: string, was_appended: boolean): string[]
    static format_full_description(layout_descr: string, variant_descr: string): string
    static get_descriptions(config_registry: Xkl.ConfigRegistry, name: string, layout_short_descr: string, layout_descr: string, variant_short_descr: string, variant_descr: string): boolean
    static merge_items(parent: string, child: string): string
    static split_items(merged: string, parent: string, child: string): boolean
}

interface KeyboardDrawingClass {

    // Own fields of Gkbd-3.0.Gkbd.KeyboardDrawingClass

    parent_class: Gtk.DrawingAreaClass
    bad_keycode: (drawing: KeyboardDrawing, keycode: number) => void
}

abstract class KeyboardDrawingClass {

    // Own properties of Gkbd-3.0.Gkbd.KeyboardDrawingClass

    static name: string
}

interface KeyboardDrawingDoodad {
}

class KeyboardDrawingDoodad {

    // Own properties of Gkbd-3.0.Gkbd.KeyboardDrawingDoodad

    static name: string
}

interface KeyboardDrawingGroupLevel {

    // Own fields of Gkbd-3.0.Gkbd.KeyboardDrawingGroupLevel

    group: number
    level: number
}

class KeyboardDrawingGroupLevel {

    // Own properties of Gkbd-3.0.Gkbd.KeyboardDrawingGroupLevel

    static name: string
}

interface KeyboardDrawingItem {
}

class KeyboardDrawingItem {

    // Own properties of Gkbd-3.0.Gkbd.KeyboardDrawingItem

    static name: string
}

interface KeyboardDrawingKey {
}

class KeyboardDrawingKey {

    // Own properties of Gkbd-3.0.Gkbd.KeyboardDrawingKey

    static name: string
}

interface KeyboardDrawingRenderContext {

    // Own fields of Gkbd-3.0.Gkbd.KeyboardDrawingRenderContext

    cr: cairo.Context
    angle: number
    layout: Pango.Layout
    font_desc: Pango.FontDescription
    scale_numerator: number
    scale_denominator: number
    dark_color: Gdk.RGBA
}

class KeyboardDrawingRenderContext {

    // Own properties of Gkbd-3.0.Gkbd.KeyboardDrawingRenderContext

    static name: string
}

interface StatusClass {

    // Own fields of Gkbd-3.0.Gkbd.StatusClass

    parent_class: Gtk.NotebookClass
}

abstract class StatusClass {

    // Own properties of Gkbd-3.0.Gkbd.StatusClass

    static name: string
}

interface StatusPrivate {
}

class StatusPrivate {

    // Own properties of Gkbd-3.0.Gkbd.StatusPrivate

    static name: string
}

}
export default Gkbd;