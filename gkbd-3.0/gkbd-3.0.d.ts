/*
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in `ts-for-gir` or create a bug report on https://github.com/gjsify/ts-for-gir
 */

import './gkbd-3.0-ambient.d.ts';
import './gkbd-3.0-import.d.ts';
/**
 * Gkbd-3.0
 */

import type xlib from '@girs/xlib-2.0';
import type Xkl from '@girs/xkl-1.0';
import type GObject from '@girs/gobject-2.0';
import type GLib from '@girs/glib-2.0';
import type Gtk from '@girs/gtk-3.0';
import type Gdk from '@girs/gdk-3.0';
import type cairo from '@girs/cairo-1.0';
import type Pango from '@girs/pango-1.0';
import type HarfBuzz from '@girs/harfbuzz-0.0';
import type freetype2 from '@girs/freetype2-2.0';
import type Gio from '@girs/gio-2.0';
import type GModule from '@girs/gmodule-2.0';
import type GdkPixbuf from '@girs/gdkpixbuf-2.0';
import type Atk from '@girs/atk-1.0';

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
    const DESKTOP_SCHEMA: string;
    const KEYBOARD_DRAWING_H: number;
    const KEYBOARD_SCHEMA: string;
    function install_glib_log_appender(): void;
    function keyboard_config_add_default_switch_option_if_necessary(
        layouts_list: string,
        options_list: string,
        was_appended: boolean,
    ): string[];
    function keyboard_config_format_full_description(layout_descr: string, variant_descr: string): string;
    function keyboard_config_get_descriptions(
        config_registry: Xkl.ConfigRegistry,
        name: string,
        layout_short_descr: string,
        layout_descr: string,
        variant_short_descr: string,
        variant_descr: string,
    ): boolean;
    function keyboard_config_merge_items(parent: string, child: string): string;
    function keyboard_config_split_items(merged: string, parent: string, child: string): boolean;
    function preview_load_position(): Gdk.Rectangle;
    function preview_save_position(rect: Gdk.Rectangle): void;
    function strv_append(arr: string, element: string): string[];
    function strv_behead(arr: string): void;
    function strv_remove(arr: string, element: string): boolean;
    module Configuration {
        // Signal callback interfaces

        interface Changed {
            (): void;
        }

        interface GroupChanged {
            (object: number): void;
        }

        interface IndicatorsChanged {
            (): void;
        }

        // Constructor properties interface
    }

    class Configuration extends GObject.Object {
        // Owm methods of Gkbd-3.0.Configuration

        static create_label_title(group: number, ln2cnt_map: GLib.HashTable<any, any>, layout_name: string): string;
        static get(): Configuration;

        // Owm methods of Gkbd-3.0.Configuration

        append_object(obj: GObject.Object): void;
        extract_layout_name(group: number): string;
        free_images(images: GdkPixbuf.Pixbuf[]): void;
        get_all_objects(): GObject.Object[];
        get_caps_lock_state(): boolean;
        get_current_group(): number;
        get_current_tooltip(): string;
        get_group_name(group: number): string | null;
        get_group_names(): string[];
        get_image_filename(group: number): string;
        get_indicator_config(): IndicatorConfig;
        get_keyboard_config(): KeyboardConfig;
        get_num_lock_state(): boolean;
        get_scroll_lock_state(): boolean;
        get_short_group_names(): string[];
        get_xkl_engine(): Xkl.Engine;
        if_any_object_exists(): boolean;
        if_flags_shown(): boolean;
        load_images(): GdkPixbuf.Pixbuf[];
        lock_group(group: number): void;
        lock_next_group(): void;
        remove_object(obj: GObject.Object): void;
        start_listen(): void;
        stop_listen(): void;
    }

    module Indicator {
        // Signal callback interfaces

        interface ReinitUi {
            (): void;
        }

        // Constructor properties interface
    }

    class Indicator extends Gtk.Notebook {
        // Constructors of Gkbd-3.0.Indicator

        static ['new'](): Indicator;

        // Owm methods of Gkbd-3.0.Indicator

        static get_group_names(): string[];
        static get_image_filename(group: number): string;
        static get_max_width_height_ratio(): number;
        static get_xkl_engine(): Xkl.Engine;

        // Owm methods of Gkbd-3.0.Indicator

        reinit_ui(): void;
        set_angle(angle: number): void;
        set_parent_tooltips(ifset: boolean): void;
    }

    module KeyboardDrawing {
        // Signal callback interfaces

        interface BadKeycode {
            (object: number): void;
        }

        // Constructor properties interface
    }

    class KeyboardDrawing extends Gtk.DrawingArea {
        // Constructors of Gkbd-3.0.KeyboardDrawing

        static dialog_new(): KeyboardDrawing;

        static ['new'](): KeyboardDrawing;

        // Owm methods of Gkbd-3.0.KeyboardDrawing

        static dialog_set_group(dialog: Gtk.Widget, registry: Xkl.ConfigRegistry, group: number): void;
        static dialog_set_layout(dialog: Gtk.Widget, registry: Xkl.ConfigRegistry, layout: string): void;

        // Owm methods of Gkbd-3.0.KeyboardDrawing

        get_compat(): string;
        get_geometry(): string;
        get_keycodes(): string;
        get_symbols(): string;
        get_types(): string;
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
         * @returns %TRUE on success, %FALSE on failure
         */
        render(
            cr: cairo.Context,
            layout: Pango.Layout,
            x: number,
            y: number,
            width: number,
            height: number,
            dpi_x: number,
            dpi_y: number,
        ): boolean;
        set_groups_levels(groupLevels: KeyboardDrawingGroupLevel): void;
        set_layout(id: string): void;
        set_track_config(enable: boolean): void;
        set_track_modifiers(enable: boolean): void;
    }

    module Status {
        // Constructor properties interface
    }

    class Status extends Gtk.StatusIcon {
        // Constructors of Gkbd-3.0.Status

        static ['new'](): Status;

        // Owm methods of Gkbd-3.0.Status

        static get_group_names(): string[];
        static get_image_filename(group: number): string;
        static get_xkl_engine(): Xkl.Engine;

        // Owm methods of Gkbd-3.0.Status

        reinit_ui(): void;
    }

    class ConfigurationClass {}

    class DesktopConfig {
        // Own fields of Gkbd-3.0.DesktopConfig

        default_group: number;
        group_per_app: boolean;
        handle_indicators: boolean;
        layout_names_as_group_names: boolean;
        load_extra_items: boolean;
        settings: Gio.Settings;
        config_listener_id: number;
        engine: Xkl.Engine;

        // Owm methods of Gkbd-3.0.DesktopConfig

        activate(): boolean;
        init(engine: Xkl.Engine): void;
        load(): void;
        load_group_descriptions(
            registry: Xkl.ConfigRegistry,
            layout_ids: string,
            variant_ids: string,
            short_group_names: string,
            full_group_names: string,
        ): boolean;
        lock_next_group(): void;
        lock_prev_group(): void;
        restore_group(): void;
        save(): void;
        start_listen(func: GObject.Callback): void;
        stop_listen(): void;
        term(): void;
    }

    class IndicatorClass {}

    class IndicatorConfig {
        // Own fields of Gkbd-3.0.IndicatorConfig

        secondary_groups_mask: number;
        show_flags: boolean;
        font_family: string;
        font_size: number;
        foreground_color: string;
        background_color: string;
        settings: Gio.Settings;
        image_filenames: any[];
        icon_theme: Gtk.IconTheme;
        config_listener_id: number;
        engine: Xkl.Engine;

        // Owm methods of Gkbd-3.0.IndicatorConfig

        activate(): void;
        free_image_filenames(): void;
        get_fg_color_for_widget(widget: Gtk.Widget): string;
        get_font_for_widget(widget: Gtk.Widget, font_family: string, font_size: number): void;
        get_images_file(kbd_config: KeyboardConfig, group: number): string;
        init(engine: Xkl.Engine): void;
        load(): void;
        load_image_filenames(kbd_config: KeyboardConfig): void;
        refresh_style(): void;
        save(): void;
        start_listen(func: GObject.Callback): void;
        stop_listen(): void;
        term(): void;
    }

    class KeyboardConfig {
        // Own fields of Gkbd-3.0.KeyboardConfig

        model: string;
        layouts_variants: string;
        options: string;
        settings: Gio.Settings;
        config_listener_id: number;
        engine: Xkl.Engine;

        // Owm methods of Gkbd-3.0.KeyboardConfig

        static add_default_switch_option_if_necessary(
            layouts_list: string,
            options_list: string,
            was_appended: boolean,
        ): string[];
        static format_full_description(layout_descr: string, variant_descr: string): string;
        static get_descriptions(
            config_registry: Xkl.ConfigRegistry,
            name: string,
            layout_short_descr: string,
            layout_descr: string,
            variant_short_descr: string,
            variant_descr: string,
        ): boolean;
        static merge_items(parent: string, child: string): string;
        static split_items(merged: string, parent: string, child: string): boolean;

        // Owm methods of Gkbd-3.0.KeyboardConfig

        activate(): boolean;
        equals(kbd_config2: KeyboardConfig): boolean;
        init(engine: Xkl.Engine): void;
        load(kbd_config_default: KeyboardConfig): void;
        load_from_x_current(buf: Xkl.ConfigRec): void;
        load_from_x_initial(buf: Xkl.ConfigRec): void;
        save(): void;
        start_listen(func: GObject.Callback): void;
        stop_listen(): void;
        term(): void;
        to_string(): string;
    }

    class KeyboardDrawingClass {}

    class KeyboardDrawingDoodad {}

    class KeyboardDrawingGroupLevel {
        // Own fields of Gkbd-3.0.KeyboardDrawingGroupLevel

        group: number;
        level: number;

        // Constructors of Gkbd-3.0.KeyboardDrawingGroupLevel

        constructor(
            properties?: Partial<{
                group: number;
                level: number;
            }>,
        );
    }

    class KeyboardDrawingItem {}

    class KeyboardDrawingKey {}

    class KeyboardDrawingRenderContext {
        // Own fields of Gkbd-3.0.KeyboardDrawingRenderContext

        angle: number;
        layout: Pango.Layout;
        scale_numerator: number;
        scale_denominator: number;
        dark_color: Gdk.RGBA;
    }

    class StatusClass {}

    class StatusPrivate {}

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

export default Gkbd;
// END
