
/**
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in `ts-for-gir` or create a bug report on https://github.com/gjsify/ts-for-gir
 *
 * The based EJS template file is used for the generated .d.ts file of each GIR module like Gtk-4.0, GObject-2.0, ...
 */

import '@girs/gjs';

// Module dependencies
import type xlib from '@girs/xlib-2.0';
import type Xkl from '@girs/xkl-1.0';
import type GObject from '@girs/gobject-2.0';
import type GLib from '@girs/glib-2.0';
import type Gtk from '@girs/gtk-3.0';
import type Gdk from '@girs/gdk-3.0';
import type cairo from 'cairo';
import type Pango from '@girs/pango-1.0';
import type HarfBuzz from '@girs/harfbuzz-0.0';
import type freetype2 from '@girs/freetype2-2.0';
import type Gio from '@girs/gio-2.0';
import type GModule from '@girs/gmodule-2.0';
import type GdkPixbuf from '@girs/gdkpixbuf-2.0';
import type Atk from '@girs/atk-1.0';

export namespace Matekbd {

    /**
     * Matekbd-1.0
     */


    /**
     * @gir-type Enum
     */
    enum KeyboardDrawingGroupLevelPosition {
        TOPLEFT,
        TOPRIGHT,
        BOTTOMLEFT,
        BOTTOMRIGHT,
        TOTAL,
        FIRST,
        LAST,
    }


    /**
     * @gir-type Enum
     */
    enum KeyboardDrawingItemType {
        INVALID,
        KEY,
        KEY_EXTRA,
        DOODAD,
    }


    const KEYBOARD_DRAWING_H: number;

    function install_glib_log_appender(): void;

    /**
     * @param layouts_list 
     * @param options_list 
     * @param was_appended 
     * @returns List of options
     */
    function keyboard_config_add_default_switch_option_if_necessary(layouts_list: string, options_list: string, was_appended: boolean): string[];

    /**
     * @param layout_descr 
     * @param variant_descr 
     */
    function keyboard_config_format_full_layout(layout_descr: string, variant_descr: string): string;

    /**
     * @param config_registry 
     * @param name 
     * @param layout_short_descr 
     * @param layout_descr 
     * @param variant_short_descr 
     * @param variant_descr 
     */
    function keyboard_config_get_descriptions(config_registry: Xkl.ConfigRegistry, name: string, layout_short_descr: string, layout_descr: string, variant_short_descr: string, variant_descr: string): boolean;

    /**
     * @param parent 
     * @param child 
     */
    function keyboard_config_merge_items(parent: string, child: string): string;

    /**
     * @param merged 
     * @param parent 
     * @param child 
     */
    function keyboard_config_split_items(merged: string, parent: string, child: string): boolean;

    /**
     * @returns A rectangle to use
     */
    function preview_load_position(): Gdk.Rectangle;

    /**
     * @param rect 
     */
    function preview_save_position(rect: Gdk.Rectangle): void;

    /**
     * @param arr 
     * @param element 
     * @returns Append string to strv array
     */
    function strv_append(arr: string, element: string): string[];

    namespace Indicator {
        // Signal signatures
        interface SignalSignatures extends Gtk.Notebook.SignalSignatures {
            /**
             * @signal
             * @run-last
             */
            "reinit-ui": () => void;
            "notify::enable-popup": (pspec: GObject.ParamSpec) => void;
            "notify::group-name": (pspec: GObject.ParamSpec) => void;
            "notify::page": (pspec: GObject.ParamSpec) => void;
            "notify::scrollable": (pspec: GObject.ParamSpec) => void;
            "notify::show-border": (pspec: GObject.ParamSpec) => void;
            "notify::show-tabs": (pspec: GObject.ParamSpec) => void;
            "notify::tab-pos": (pspec: GObject.ParamSpec) => void;
            "notify::border-width": (pspec: GObject.ParamSpec) => void;
            "notify::child": (pspec: GObject.ParamSpec) => void;
            "notify::resize-mode": (pspec: GObject.ParamSpec) => void;
            "notify::app-paintable": (pspec: GObject.ParamSpec) => void;
            "notify::can-default": (pspec: GObject.ParamSpec) => void;
            "notify::can-focus": (pspec: GObject.ParamSpec) => void;
            "notify::composite-child": (pspec: GObject.ParamSpec) => void;
            "notify::double-buffered": (pspec: GObject.ParamSpec) => void;
            "notify::events": (pspec: GObject.ParamSpec) => void;
            "notify::expand": (pspec: GObject.ParamSpec) => void;
            "notify::focus-on-click": (pspec: GObject.ParamSpec) => void;
            "notify::halign": (pspec: GObject.ParamSpec) => void;
            "notify::has-default": (pspec: GObject.ParamSpec) => void;
            "notify::has-focus": (pspec: GObject.ParamSpec) => void;
            "notify::has-tooltip": (pspec: GObject.ParamSpec) => void;
            "notify::height-request": (pspec: GObject.ParamSpec) => void;
            "notify::hexpand": (pspec: GObject.ParamSpec) => void;
            "notify::hexpand-set": (pspec: GObject.ParamSpec) => void;
            "notify::is-focus": (pspec: GObject.ParamSpec) => void;
            "notify::margin": (pspec: GObject.ParamSpec) => void;
            "notify::margin-bottom": (pspec: GObject.ParamSpec) => void;
            "notify::margin-end": (pspec: GObject.ParamSpec) => void;
            "notify::margin-left": (pspec: GObject.ParamSpec) => void;
            "notify::margin-right": (pspec: GObject.ParamSpec) => void;
            "notify::margin-start": (pspec: GObject.ParamSpec) => void;
            "notify::margin-top": (pspec: GObject.ParamSpec) => void;
            "notify::name": (pspec: GObject.ParamSpec) => void;
            "notify::no-show-all": (pspec: GObject.ParamSpec) => void;
            "notify::opacity": (pspec: GObject.ParamSpec) => void;
            "notify::parent": (pspec: GObject.ParamSpec) => void;
            "notify::receives-default": (pspec: GObject.ParamSpec) => void;
            "notify::scale-factor": (pspec: GObject.ParamSpec) => void;
            "notify::sensitive": (pspec: GObject.ParamSpec) => void;
            "notify::style": (pspec: GObject.ParamSpec) => void;
            "notify::tooltip-markup": (pspec: GObject.ParamSpec) => void;
            "notify::tooltip-text": (pspec: GObject.ParamSpec) => void;
            "notify::valign": (pspec: GObject.ParamSpec) => void;
            "notify::vexpand": (pspec: GObject.ParamSpec) => void;
            "notify::vexpand-set": (pspec: GObject.ParamSpec) => void;
            "notify::visible": (pspec: GObject.ParamSpec) => void;
            "notify::width-request": (pspec: GObject.ParamSpec) => void;
            "notify::window": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends Gtk.Notebook.ConstructorProps, Atk.ImplementorIface.ConstructorProps, Gtk.Buildable.ConstructorProps {

        }
    }

    /**
     * @gir-type Class
     */
    class Indicator extends Gtk.Notebook implements Atk.ImplementorIface, Gtk.Buildable {
        static $gtype: GObject.GType<Indicator>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Indicator.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<Indicator.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](): Indicator;

        // Signals
        /** @signal */
        connect<K extends keyof Indicator.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Indicator.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof Indicator.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Indicator.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof Indicator.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<Indicator.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Static methods
        static get_group_names(): string[];

        /**
         * @param group 
         */
        static get_image_filename(group: number): string;

        static get_max_width_height_ratio(): number;

        static get_xkl_engine(): Xkl.Engine;

        /**
         * @param str 
         */
        static set_tooltips_format(str: string): void;

        // Virtual methods
        /**
         * @virtual
         */
        vfunc_reinit_ui(): void;

        // Methods
        reinit_ui(): void;

        /**
         * @param angle 
         */
        set_angle(angle: number): void;

        /**
         * @param ifset 
         */
        set_parent_tooltips(ifset: boolean): void;
    }


    namespace KeyboardDrawing {
        // Signal signatures
        interface SignalSignatures extends Gtk.DrawingArea.SignalSignatures {
            /**
             * @signal
             * @run-first
             */
            "bad-keycode": (arg0: number) => void;
            "notify::app-paintable": (pspec: GObject.ParamSpec) => void;
            "notify::can-default": (pspec: GObject.ParamSpec) => void;
            "notify::can-focus": (pspec: GObject.ParamSpec) => void;
            "notify::composite-child": (pspec: GObject.ParamSpec) => void;
            "notify::double-buffered": (pspec: GObject.ParamSpec) => void;
            "notify::events": (pspec: GObject.ParamSpec) => void;
            "notify::expand": (pspec: GObject.ParamSpec) => void;
            "notify::focus-on-click": (pspec: GObject.ParamSpec) => void;
            "notify::halign": (pspec: GObject.ParamSpec) => void;
            "notify::has-default": (pspec: GObject.ParamSpec) => void;
            "notify::has-focus": (pspec: GObject.ParamSpec) => void;
            "notify::has-tooltip": (pspec: GObject.ParamSpec) => void;
            "notify::height-request": (pspec: GObject.ParamSpec) => void;
            "notify::hexpand": (pspec: GObject.ParamSpec) => void;
            "notify::hexpand-set": (pspec: GObject.ParamSpec) => void;
            "notify::is-focus": (pspec: GObject.ParamSpec) => void;
            "notify::margin": (pspec: GObject.ParamSpec) => void;
            "notify::margin-bottom": (pspec: GObject.ParamSpec) => void;
            "notify::margin-end": (pspec: GObject.ParamSpec) => void;
            "notify::margin-left": (pspec: GObject.ParamSpec) => void;
            "notify::margin-right": (pspec: GObject.ParamSpec) => void;
            "notify::margin-start": (pspec: GObject.ParamSpec) => void;
            "notify::margin-top": (pspec: GObject.ParamSpec) => void;
            "notify::name": (pspec: GObject.ParamSpec) => void;
            "notify::no-show-all": (pspec: GObject.ParamSpec) => void;
            "notify::opacity": (pspec: GObject.ParamSpec) => void;
            "notify::parent": (pspec: GObject.ParamSpec) => void;
            "notify::receives-default": (pspec: GObject.ParamSpec) => void;
            "notify::scale-factor": (pspec: GObject.ParamSpec) => void;
            "notify::sensitive": (pspec: GObject.ParamSpec) => void;
            "notify::style": (pspec: GObject.ParamSpec) => void;
            "notify::tooltip-markup": (pspec: GObject.ParamSpec) => void;
            "notify::tooltip-text": (pspec: GObject.ParamSpec) => void;
            "notify::valign": (pspec: GObject.ParamSpec) => void;
            "notify::vexpand": (pspec: GObject.ParamSpec) => void;
            "notify::vexpand-set": (pspec: GObject.ParamSpec) => void;
            "notify::visible": (pspec: GObject.ParamSpec) => void;
            "notify::width-request": (pspec: GObject.ParamSpec) => void;
            "notify::window": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends Gtk.DrawingArea.ConstructorProps, Atk.ImplementorIface.ConstructorProps, Gtk.Buildable.ConstructorProps {

        }
    }

    /**
     * @gir-type Class
     */
    class KeyboardDrawing extends Gtk.DrawingArea implements Atk.ImplementorIface, Gtk.Buildable {
        static $gtype: GObject.GType<KeyboardDrawing>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: KeyboardDrawing.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<KeyboardDrawing.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](): KeyboardDrawing;

        static new_dialog(group: number, group_name: string): KeyboardDrawing;

        // Signals
        /** @signal */
        connect<K extends keyof KeyboardDrawing.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, KeyboardDrawing.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof KeyboardDrawing.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, KeyboardDrawing.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof KeyboardDrawing.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<KeyboardDrawing.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Virtual methods
        /**
         * @param keycode 
         * @virtual
         */
        vfunc_bad_keycode(keycode: number): void;

        // Methods
        get_compat(): string;

        get_geometry(): string;

        get_keycodes(): string;

        get_symbols(): string;

        get_types(): string;

        /**
         * @param parent_window 
         * @param description 
         */
        print(parent_window: Gtk.Window, description: string): void;

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
         * @returns `true` on success, `false` on failure
         */
        render(cr: cairo.Context, layout: Pango.Layout, x: number, y: number, width: number, height: number, dpi_x: number, dpi_y: number): boolean;

        /**
         * @param groupLevels 
         */
        set_groups_levels(groupLevels: KeyboardDrawingGroupLevel): void;

        /**
         * @param enable 
         */
        set_track_config(enable: boolean): void;

        /**
         * @param enable 
         */
        set_track_modifiers(enable: boolean): void;
    }


    namespace Status {
        // Signal signatures
        interface SignalSignatures extends Gtk.StatusIcon.SignalSignatures {
            "notify::embedded": (pspec: GObject.ParamSpec) => void;
            "notify::file": (pspec: GObject.ParamSpec) => void;
            "notify::gicon": (pspec: GObject.ParamSpec) => void;
            "notify::has-tooltip": (pspec: GObject.ParamSpec) => void;
            "notify::icon-name": (pspec: GObject.ParamSpec) => void;
            "notify::orientation": (pspec: GObject.ParamSpec) => void;
            "notify::pixbuf": (pspec: GObject.ParamSpec) => void;
            "notify::screen": (pspec: GObject.ParamSpec) => void;
            "notify::size": (pspec: GObject.ParamSpec) => void;
            "notify::stock": (pspec: GObject.ParamSpec) => void;
            "notify::storage-type": (pspec: GObject.ParamSpec) => void;
            "notify::title": (pspec: GObject.ParamSpec) => void;
            "notify::tooltip-markup": (pspec: GObject.ParamSpec) => void;
            "notify::tooltip-text": (pspec: GObject.ParamSpec) => void;
            "notify::visible": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends Gtk.StatusIcon.ConstructorProps {

        }
    }

    /**
     * @gir-type Class
     */
    class Status extends Gtk.StatusIcon {
        static $gtype: GObject.GType<Status>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Status.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<Status.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](): Status;

        // Signals
        /** @signal */
        connect<K extends keyof Status.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Status.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof Status.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Status.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof Status.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<Status.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Static methods
        static get_group_names(): string[];

        /**
         * @param group 
         */
        static get_image_filename(group: number): string;

        static get_xkl_engine(): Xkl.Engine;

        /**
         * @param str 
         */
        static set_tooltips_format(str: string): void;

        // Methods
        reinit_ui(): void;

        /**
         * @param angle 
         */
        set_angle(angle: number): void;
    }


    /**
     * @gir-type Struct
     */
    class DesktopConfig {
        static $gtype: GObject.GType<DesktopConfig>;

        // Fields
        default_group: number;

        group_per_app: boolean;

        handle_indicators: boolean;

        layout_names_as_group_names: boolean;

        load_extra_items: boolean;

        settings: Gio.Settings;

        config_listener_id: number;

        engine: Xkl.Engine;

        // Methods
        activate(): boolean;

        /**
         * @param engine 
         */
        init(engine: Xkl.Engine): void;

        load_from_gsettings(): void;

        /**
         * @param registry 
         * @param layout_ids 
         * @param variant_ids 
         * @param short_group_names 
         * @param full_group_names 
         */
        load_group_descriptions(registry: Xkl.ConfigRegistry, layout_ids: string, variant_ids: string, short_group_names: string, full_group_names: string): boolean;

        lock_next_group(): void;

        lock_prev_group(): void;

        restore_group(): void;

        save_to_gsettings(): void;

        /**
         * @param func a function to call when settings are changed
         */
        start_listen(func: GObject.Callback): void;

        stop_listen(): void;

        term(): void;
    }


    /**
     * @gir-type Alias
     */
    type IndicatorClass = typeof Indicator;

    /**
     * @gir-type Struct
     */
    class IndicatorConfig {
        static $gtype: GObject.GType<IndicatorConfig>;

        // Fields
        secondary_groups_mask: number;

        show_flags: boolean;

        font_family: string;

        foreground_color: string;

        background_color: string;

        settings: Gio.Settings;

        image_filenames: null[];

        icon_theme: Gtk.IconTheme;

        config_listener_id: number;

        engine: Xkl.Engine;

        // Methods
        activate(): void;

        free_image_filenames(): void;

        /**
         * @param kbd_config 
         * @param group 
         */
        get_images_file(kbd_config: KeyboardConfig, group: number): string;

        /**
         * @param engine 
         */
        init(engine: Xkl.Engine): void;

        load_from_gsettings(): void;

        /**
         * @param kbd_config 
         */
        load_image_filenames(kbd_config: KeyboardConfig): void;

        refresh_style(): void;

        save_to_gsettings(): void;

        /**
         * @param func a function to call when settings are changed
         */
        start_listen(func: GObject.Callback): void;

        stop_listen(): void;

        term(): void;
    }


    /**
     * @gir-type Struct
     */
    abstract class IndicatorPrivate {
        static $gtype: GObject.GType<IndicatorPrivate>;
    }


    /**
     * @gir-type Struct
     */
    class KeyboardConfig {
        static $gtype: GObject.GType<KeyboardConfig>;

        // Fields
        model: string;

        layouts_variants: string;

        options: string;

        settings: Gio.Settings;

        config_listener_id: number;

        engine: Xkl.Engine;

        // Static methods
        /**
         * @param layouts_list 
         * @param options_list 
         * @param was_appended 
         */
        static add_default_switch_option_if_necessary(layouts_list: string, options_list: string, was_appended: boolean): string[];

        /**
         * @param layout_descr 
         * @param variant_descr 
         */
        static format_full_layout(layout_descr: string, variant_descr: string): string;

        /**
         * @param config_registry 
         * @param name 
         * @param layout_short_descr 
         * @param layout_descr 
         * @param variant_short_descr 
         * @param variant_descr 
         */
        static get_descriptions(config_registry: Xkl.ConfigRegistry, name: string, layout_short_descr: string, layout_descr: string, variant_short_descr: string, variant_descr: string): boolean;

        /**
         * @param parent 
         * @param child 
         */
        static merge_items(parent: string, child: string): string;

        /**
         * @param merged 
         * @param parent 
         * @param child 
         */
        static split_items(merged: string, parent: string, child: string): boolean;

        // Methods
        activate(): boolean;

        /**
         * @param kbd_config2 
         */
        equals(kbd_config2: KeyboardConfig): boolean;

        /**
         * @param engine 
         */
        init(engine: Xkl.Engine): void;

        /**
         * @param kbd_config_default 
         */
        load_from_gsettings(kbd_config_default: KeyboardConfig): void;

        /**
         * @param buf 
         */
        load_from_x_current(buf: Xkl.ConfigRec): void;

        /**
         * @param buf 
         */
        load_from_x_initial(buf: Xkl.ConfigRec): void;

        save_to_gsettings(): void;

        /**
         * @param func a function to call when settings are changed
         */
        start_listen(func: GObject.Callback): void;

        stop_listen(): void;

        term(): void;

        to_string(): string;
    }


    /**
     * @gir-type Alias
     */
    type KeyboardDrawingClass = typeof KeyboardDrawing;

    /**
     * @gir-type Struct
     */
    class KeyboardDrawingDoodad {
        static $gtype: GObject.GType<KeyboardDrawingDoodad>;
    }


    /**
     * @gir-type Struct
     */
    class KeyboardDrawingGroupLevel {
        static $gtype: GObject.GType<KeyboardDrawingGroupLevel>;

        // Fields
        group: number;

        level: number;

        // Constructors

        constructor(properties?: Partial<{
            group: number;
            level: number;
        }>);
    }


    /**
     * @gir-type Struct
     */
    class KeyboardDrawingItem {
        static $gtype: GObject.GType<KeyboardDrawingItem>;
    }


    /**
     * @gir-type Struct
     */
    class KeyboardDrawingKey {
        static $gtype: GObject.GType<KeyboardDrawingKey>;
    }


    /**
     * @gir-type Struct
     */
    class KeyboardDrawingRenderContext {
        static $gtype: GObject.GType<KeyboardDrawingRenderContext>;

        // Fields
        angle: number;

        layout: Pango.Layout;

        scale_numerator: number;

        scale_denominator: number;

        dark_color: Gdk.RGBA;
    }


    /**
     * @gir-type Alias
     */
    type StatusClass = typeof Status;

    /**
     * @gir-type Struct
     */
    abstract class StatusPrivate {
        static $gtype: GObject.GType<StatusPrivate>;
    }


    /**
     * Name of the imported GIR library
     * `see` https://gitlab.gnome.org/GNOME/gjs/-/blob/master/gi/ns.cpp#L188
     */
    const __name__: string;

    /**
     * Version of the imported GIR library
     * `see` https://gitlab.gnome.org/GNOME/gjs/-/blob/master/gi/ns.cpp#L189
     */
    const __version__: string;
}

export default Matekbd;

// END
