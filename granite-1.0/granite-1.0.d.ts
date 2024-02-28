/*
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in `ts-for-gir` or create a bug report on https://github.com/gjsify/ts-for-gir
 */

import './granite-1.0-ambient.d.ts';
import './granite-1.0-import.d.ts';
/**
 * Granite-1.0
 */

import type Pango from '@girs/pango-1.0';
import type cairo from '@girs/cairo-1.0';
import type GObject from '@girs/gobject-2.0';
import type GLib from '@girs/glib-2.0';
import type HarfBuzz from '@girs/harfbuzz-0.0';
import type freetype2 from '@girs/freetype2-2.0';
import type Gio from '@girs/gio-2.0';
import type Gtk from '@girs/gtk-3.0';
import type xlib from '@girs/xlib-2.0';
import type Gdk from '@girs/gdk-3.0';
import type GdkPixbuf from '@girs/gdkpixbuf-2.0';
import type GModule from '@girs/gmodule-2.0';
import type Atk from '@girs/atk-1.0';
import type Gee from '@girs/gee-0.8';

export namespace Granite {
    enum ServicesLogLevel {
        DEBUG,
        INFO,
        NOTIFY,
        WARN,
        ERROR,
        FATAL,
    }
    class ServicesContractorError extends GLib.Error {
        // Own fields of Granite-1.0.ServicesContractorError

        SERVICE_NOT_AVAILABLE: number;

        // Constructors of Granite-1.0.ServicesContractorError

        constructor(options: { message: string; code: number });
    }

    enum WidgetsDynamicNotebookTabBarBehavior {
        ALWAYS,
        SINGLE,
        NEVER,
    }
    enum WidgetsStorageBarItemDescription {
        OTHER,
        AUDIO,
        VIDEO,
        PHOTO,
        APP,
        FILES,
    }
    enum CollapseMode {
        NONE,
        LEFT,
        TOP,
        FIRST,
        RIGHT,
        BOTTOM,
        LAST,
    }
    enum TextStyle {
        TITLE,
        H1,
        H2,
        H3,
    }
    enum CloseButtonPosition {
        LEFT,
        RIGHT,
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
    const StyleClassBADGE: string;
    const StyleClassCATEGORY_EXPANDER: string;
    const StyleClassCONTENT_VIEW: string;
    const StyleClassCONTENT_VIEW_WINDOW: string;
    const StyleClassCOMPOSITED: string;
    const StyleClassDECORATED_WINDOW: string;
    const StyleClassH1_TEXT: string;
    const StyleClassH2_TEXT: string;
    const StyleClassH3_TEXT: string;
    const StyleClassHELP_BUTTON: string;
    const StyleClassOVERLAY_BAR: string;
    const StyleClassPOPOVER: string;
    const StyleClassPOPOVER_BG: string;
    const StyleClassSOURCE_LIST: string;
    const StyleClassTHIN_PANE_SEPARATOR: string;
    const StyleClassTITLE_TEXT: string;
    const STYLE_CLASS_ACCENT: string;
    const STYLE_CLASS_AVATAR: string;
    const STYLE_CLASS_BACK_BUTTON: string;
    const STYLE_CLASS_BADGE: string;
    const STYLE_CLASS_CARD: string;
    const STYLE_CLASS_CATEGORY_EXPANDER: string;
    const STYLE_CLASS_CHECKERBOARD: string;
    const STYLE_CLASS_COLOR_BUTTON: string;
    const STYLE_CLASS_DEFAULT_DECORATION: string;
    const STYLE_CLASS_H1_LABEL: string;
    const STYLE_CLASS_H2_LABEL: string;
    const STYLE_CLASS_H3_LABEL: string;
    const STYLE_CLASS_H4_LABEL: string;
    const STYLE_CLASS_KEYCAP: string;
    const STYLE_CLASS_MODE_SWITCH: string;
    const STYLE_CLASS_OVERLAY_BAR: string;
    const STYLE_CLASS_PRIMARY_LABEL: string;
    const STYLE_CLASS_ROUNDED: string;
    const STYLE_CLASS_SEEKBAR: string;
    const STYLE_CLASS_SMALL_LABEL: string;
    const STYLE_CLASS_SOURCE_LIST: string;
    const STYLE_CLASS_STORAGEBAR: string;
    const STYLE_CLASS_TERMINAL: string;
    const STYLE_CLASS_WELCOME: string;
    const STYLE_CLASS_WARMTH: string;
    const STYLE_CLASS_TEMPERATURE: string;
    const TRANSITION_DURATION_CLOSE: number;
    const TRANSITION_DURATION_IN_PLACE: number;
    const TRANSITION_DURATION_OPEN: number;
    const TOOLTIP_SECONDARY_TEXT_MARKUP: string;
    function date_time_get_default_time_format(is_12h: boolean, with_second: boolean): string;
    function date_time_get_relative_datetime(date_time: GLib.DateTime): string;
    function date_time_is_same_day(day1: GLib.DateTime, day2: GLib.DateTime): boolean;
    function date_time_get_default_date_format(with_weekday: boolean, with_day: boolean, with_year: boolean): string;
    function date_time_seconds_to_time(seconds: number): string;
    function services_application_set_badge(count: number, _callback_?: Gio.AsyncReadyCallback<number> | null): void;
    function services_application_set_badge_finish(_res_: Gio.AsyncResult): boolean;
    function services_application_set_badge_visible(
        visible: boolean,
        _callback_?: Gio.AsyncReadyCallback<boolean> | null,
    ): void;
    function services_application_set_badge_visible_finish(_res_: Gio.AsyncResult): boolean;
    function services_application_set_progress(
        progress: number,
        _callback_?: Gio.AsyncReadyCallback<number> | null,
    ): void;
    function services_application_set_progress_finish(_res_: Gio.AsyncResult): boolean;
    function services_application_set_progress_visible(
        visible: boolean,
        _callback_?: Gio.AsyncReadyCallback<boolean> | null,
    ): void;
    function services_application_set_progress_visible_finish(_res_: Gio.AsyncResult): boolean;
    function widgets_utils_set_color_primary(
        window: Gtk.Widget,
        color: Gdk.RGBA,
        priority: number,
    ): Gtk.CssProvider | null;
    function widgets_utils_set_theming(
        widget: Gtk.Widget,
        stylesheet: string,
        class_name: string | null,
        priority: number,
    ): Gtk.CssProvider | null;
    function widgets_utils_set_theming_for_screen(
        screen: Gdk.Screen,
        stylesheet: string,
        priority: number,
    ): Gtk.CssProvider | null;
    function widgets_utils_get_css_provider(stylesheet: string): Gtk.CssProvider | null;
    function widgets_utils_apply_text_style_to_label(text_style: TextStyle, label: Gtk.Label): void;
    function widgets_utils_get_default_close_button_position(): boolean;
    function widgets_utils_get_button_layout_schema(): string | null;
    function widgets_storage_bar_item_description_get_class(
        description: WidgetsStorageBarItemDescription,
    ): string | null;
    function widgets_storage_bar_item_description_get_name(description: WidgetsStorageBarItemDescription): string;
    function text_style_get_stylesheet(): string;
    function accel_to_string(accel?: string | null): string;
    function markup_accel_tooltip(accels?: string[] | null, description?: string | null): string;
    function contrasting_foreground_color(bg_color: Gdk.RGBA): void;
    interface WidgetsDroppedDelegate {
        (): void;
    }
    module DrawingBufferSurface {
        // Constructor properties interface
    }

    class DrawingBufferSurface extends GObject.Object {
        // Own properties of Granite-1.0.DrawingBufferSurface

        surface: cairo.Surface;
        width: number;
        height: number;
        readonly context: cairo.Context;

        // Constructors of Granite-1.0.DrawingBufferSurface

        static ['new'](width: number, height: number): DrawingBufferSurface;

        static with_surface(width: number, height: number, model: cairo.Surface): DrawingBufferSurface;

        static with_buffer_surface(width: number, height: number, model: DrawingBufferSurface): DrawingBufferSurface;

        // Owm methods of Granite-1.0.DrawingBufferSurface

        get_surface(): cairo.Surface;
        get_width(): number;
        get_height(): number;
        get_context(): cairo.Context;
        clear(): void;
        load_to_pixbuf(): GdkPixbuf.Pixbuf;
        average_color(): DrawingColor;
        fast_blur(radius: number, process_count: number): void;
        exponential_blur(radius: number): void;
        gaussian_blur(radius: number): void;
    }

    module DrawingColor {
        // Constructor properties interface
    }

    class DrawingColor extends GObject.Object {
        // Own fields of Granite-1.0.DrawingColor

        R: number;
        G: number;
        B: number;
        A: number;

        // Constructors of Granite-1.0.DrawingColor

        static ['new'](R: number, G: number, B: number, A: number): DrawingColor;

        static from_gdk(color: Gdk.Color): DrawingColor;

        static from_rgba(color: Gdk.RGBA): DrawingColor;

        static from_string(color: string): DrawingColor;

        static from_int(color: number): DrawingColor;

        // Owm methods of Granite-1.0.DrawingColor

        static alpha_from_int(color: number): number;
        static red_from_int(color: number): number;
        static green_from_int(color: number): number;
        static blue_from_int(color: number): number;

        // Owm methods of Granite-1.0.DrawingColor

        set_hue(hue: number): DrawingColor;
        set_sat(sat: number): DrawingColor;
        set_val(val: number): DrawingColor;
        set_alpha(alpha: number): DrawingColor;
        get_hue(): number;
        get_sat(): number;
        get_val(): number;
        add_hue(val: number): DrawingColor;
        set_min_sat(sat: number): DrawingColor;
        set_min_value(val: number): DrawingColor;
        set_max_sat(sat: number): DrawingColor;
        set_max_val(val: number): DrawingColor;
        multiply_sat(amount: number): DrawingColor;
        brighten_val(amount: number): DrawingColor;
        darken_val(amount: number): DrawingColor;
        darken_by_sat(amount: number): DrawingColor;
        to_string(): string;
        to_int(): number;
    }

    module DrawingUtilities {
        // Constructor properties interface
    }

    class DrawingUtilities extends GObject.Object {
        // Constructors of Granite-1.0.DrawingUtilities

        static ['new'](): DrawingUtilities;

        // Owm methods of Granite-1.0.DrawingUtilities

        static cairo_rounded_rectangle(
            cr: cairo.Context,
            x: number,
            y: number,
            width: number,
            height: number,
            radius: number,
        ): void;
        static average_color(source: GdkPixbuf.Pixbuf): DrawingColor;
    }

    module ServicesContractorProxy {
        // Signal callback interfaces

        interface ContractsChanged {
            (): void;
        }

        // Constructor properties interface
    }

    class ServicesContractorProxy extends GObject.Object {
        // Owm methods of Granite-1.0.ServicesContractorProxy

        static get_instance(): GraniteServicesContractorProxy;
        static get_all_contracts(): Gee.List;
        static get_contracts_by_mime(mime_type: string): Gee.List;
        static get_contracts_by_mimelist(mime_types: string[]): Gee.List;
        static get_contracts_for_file(file: Gio.File): Gee.List;
        static get_contracts_for_files(files: Gio.File[]): Gee.List;
    }

    module ServicesIconFactory {
        // Constructor properties interface
    }

    class ServicesIconFactory extends GObject.Object {
        // Constructors of Granite-1.0.ServicesIconFactory

        static ['new'](): ServicesIconFactory;

        // Owm methods of Granite-1.0.ServicesIconFactory

        static get_default(): GraniteServicesIconFactory;

        // Owm methods of Granite-1.0.ServicesIconFactory

        load_symbolic_icon_from_gicon(style: Gtk.StyleContext, gicon: Gio.Icon, size: number): GdkPixbuf.Pixbuf | null;
        load_symbolic_icon(style: Gtk.StyleContext, iconname: string, size: number): GdkPixbuf.Pixbuf | null;
    }

    module ServicesLogger {
        // Constructor properties interface
    }

    class ServicesLogger extends GObject.Object {
        // Constructors of Granite-1.0.ServicesLogger

        static ['new'](): ServicesLogger;

        // Owm methods of Granite-1.0.ServicesLogger

        static get_DisplayLevel(): GraniteServicesLogLevel;
        static set_DisplayLevel(value: GraniteServicesLogLevel): void;
        static initialize(app_name: string): void;
        static notification(msg: string): void;
    }

    module ServicesPaths {
        // Constructor properties interface
    }

    class ServicesPaths extends GObject.Object {
        // Constructors of Granite-1.0.ServicesPaths

        static ['new'](): ServicesPaths;

        // Owm methods of Granite-1.0.ServicesPaths

        static get_home_folder(): Gio.File;
        static set_home_folder(value: Gio.File): void;
        static get_data_folder(): Gio.File;
        static set_data_folder(value: Gio.File): void;
        static get_xdg_config_home_folder(): Gio.File;
        static set_xdg_config_home_folder(value: Gio.File): void;
        static get_xdg_data_home_folder(): Gio.File;
        static set_xdg_data_home_folder(value: Gio.File): void;
        static get_xdg_cache_home_folder(): Gio.File;
        static set_xdg_cache_home_folder(value: Gio.File): void;
        static get_xdg_data_dir_folders(): Gio.File[];
        static set_xdg_data_dir_folders(value: Gio.File[]): void;
        static get_user_config_folder(): Gio.File;
        static set_user_config_folder(value: Gio.File): void;
        static get_user_data_folder(): Gio.File;
        static set_user_data_folder(value: Gio.File): void;
        static get_user_cache_folder(): Gio.File;
        static set_user_cache_folder(value: Gio.File): void;
        static initialize(app_name: string, data_folder_path: string): void;
        static ensure_directory_exists(dir: Gio.File): boolean;
    }

    module ServicesSettings {
        // Signal callback interfaces

        interface Changed {
            (): void;
        }

        // Constructor properties interface
    }

    abstract class ServicesSettings extends GObject.Object {
        // Own properties of Granite-1.0.ServicesSettings

        schema: Gio.Settings;

        // Owm methods of Granite-1.0.ServicesSettings

        get_schema(): Gio.Settings;
        verify(key: string): void;
    }

    module ServicesSimpleCommand {
        // Signal callback interfaces

        interface Done {
            (exit: number): void;
        }

        interface OutputChanged {
            (text: string): void;
        }

        interface StandardChanged {
            (text: string): void;
        }

        interface ErrorChanged {
            (text: string): void;
        }

        // Constructor properties interface
    }

    class ServicesSimpleCommand extends GObject.Object {
        // Own fields of Granite-1.0.ServicesSimpleCommand

        standard_output_str: string;
        error_output_str: string;
        output_str: string;

        // Constructors of Granite-1.0.ServicesSimpleCommand

        static ['new'](dir: string, command: string): ServicesSimpleCommand;

        // Owm methods of Granite-1.0.ServicesSimpleCommand

        run(): void;
    }

    module ServicesSystem {
        // Constructor properties interface
    }

    class ServicesSystem extends GObject.Object {
        // Constructors of Granite-1.0.ServicesSystem

        static ['new'](): ServicesSystem;

        // Owm methods of Granite-1.0.ServicesSystem

        static open_uri(uri: string): void;
        static open(file: Gio.File): void;
        static open_files(files: Gio.File[]): void;
        static launch(app: Gio.File): void;
        static execute_command(command: string): boolean;
        static launch_with_files(app: Gio.File | null, files: Gio.File[]): void;
        static history_is_enabled(): boolean;
    }

    module WidgetsAlertView {
        // Signal callback interfaces

        interface ActionActivated {
            (): void;
        }

        // Constructor properties interface
    }

    class WidgetsAlertView extends Gtk.Grid {
        // Own properties of Granite-1.0.WidgetsAlertView

        title: string;
        description: string;
        icon_name: string;
        iconName: string;

        // Constructors of Granite-1.0.WidgetsAlertView

        static ['new'](title: string, description: string, icon_name: string): WidgetsAlertView;

        // Owm methods of Granite-1.0.WidgetsAlertView

        get_title(): string;
        set_title(value: string): void;
        get_description(): string;
        set_description(value: string): void;
        get_icon_name(): string;
        set_icon_name(value: string): void;
        show_action(label?: string | null): void;
        hide_action(): void;
    }

    module WidgetsAvatar {
        // Constructor properties interface
    }

    class WidgetsAvatar extends Gtk.EventBox {
        // Own properties of Granite-1.0.WidgetsAvatar

        pixbuf: GdkPixbuf.Pixbuf;

        // Constructors of Granite-1.0.WidgetsAvatar

        static ['new'](): WidgetsAvatar;

        static from_pixbuf(pixbuf: GdkPixbuf.Pixbuf): WidgetsAvatar;

        static from_file(filepath: string, pixel_size: number): WidgetsAvatar;

        static with_default_icon(pixel_size: number): WidgetsAvatar;

        // Owm methods of Granite-1.0.WidgetsAvatar

        get_pixbuf(): GdkPixbuf.Pixbuf | null;
        set_pixbuf(value?: GdkPixbuf.Pixbuf | null): void;
        show_default(pixel_size: number): void;
    }

    module WidgetsCellRendererBadge {
        // Constructor properties interface
    }

    class WidgetsCellRendererBadge extends Gtk.CellRenderer {
        // Own properties of Granite-1.0.WidgetsCellRendererBadge

        text: string;

        // Constructors of Granite-1.0.WidgetsCellRendererBadge

        static ['new'](): WidgetsCellRendererBadge;

        // Owm methods of Granite-1.0.WidgetsCellRendererBadge

        get_text(): string;
        set_text(value: string): void;
    }

    module WidgetsCellRendererExpander {
        // Constructor properties interface
    }

    class WidgetsCellRendererExpander extends Gtk.CellRenderer {
        // Own properties of Granite-1.0.WidgetsCellRendererExpander

        is_category_expander: boolean;
        isCategoryExpander: boolean;

        // Constructors of Granite-1.0.WidgetsCellRendererExpander

        static ['new'](): WidgetsCellRendererExpander;

        // Owm methods of Granite-1.0.WidgetsCellRendererExpander

        get_is_category_expander(): boolean;
        set_is_category_expander(value: boolean): void;
        get_arrow_size(widget: Gtk.Widget): number;
    }

    module WidgetsCollapsiblePaned {
        // Constructor properties interface
    }

    class WidgetsCollapsiblePaned extends Gtk.Paned {
        // Own properties of Granite-1.0.WidgetsCollapsiblePaned

        collapse_mode: CollapseMode;
        collapseMode: CollapseMode;

        // Constructors of Granite-1.0.WidgetsCollapsiblePaned

        static ['new'](orientation: Gtk.Orientation): WidgetsCollapsiblePaned;

        // Owm methods of Granite-1.0.WidgetsCollapsiblePaned

        get_collapse_mode(): CollapseMode;
        set_collapse_mode(value: CollapseMode): void;
    }

    module WidgetsCompositedWindow {
        // Constructor properties interface
    }

    class WidgetsCompositedWindow extends Gtk.Window {
        // Constructors of Granite-1.0.WidgetsCompositedWindow

        static ['new'](): WidgetsCompositedWindow;
    }

    module WidgetsDatePicker {
        // Signal callback interfaces

        interface DateChanged {
            (): void;
        }

        // Constructor properties interface
    }

    class WidgetsDatePicker extends Gtk.Entry {
        // Own properties of Granite-1.0.WidgetsDatePicker

        format: string;
        date: GLib.DateTime;

        // Own fields of Granite-1.0.WidgetsDatePicker

        dropdown: Gtk.EventBox;
        calendar: Gtk.Calendar;

        // Constructors of Granite-1.0.WidgetsDatePicker

        static with_format(format: string): WidgetsDatePicker;

        static ['new'](): WidgetsDatePicker;

        // Owm methods of Granite-1.0.WidgetsDatePicker

        get_format(): string;
        get_date(): GLib.DateTime;
        set_date(value: GLib.DateTime): void;
        position_dropdown(): void;
    }

    module WidgetsTab {
        // Constructor properties interface
    }

    class WidgetsTab extends Gtk.EventBox {
        // Own properties of Granite-1.0.WidgetsTab

        label: string;
        tooltip: string;
        pinned: boolean;
        pinnable: boolean;
        restore_data: string;
        restoreData: string;
        close_tab_label: AccelLabel;
        closeTabLabel: AccelLabel;
        duplicate_tab_label: AccelLabel;
        duplicateTabLabel: AccelLabel;
        new_window_label: AccelLabel;
        newWindowLabel: AccelLabel;
        page: Gtk.Widget;
        icon: Gio.Icon;
        working: boolean;
        ellipsize_mode: Pango.EllipsizeMode;
        ellipsizeMode: Pango.EllipsizeMode;
        menu: Gtk.Menu;

        // Own fields of Granite-1.0.WidgetsTab

        dropped_callback: WidgetsDroppedDelegate;
        dropped_callback_target: any;
        dropped_callback_target_destroy_notify: GLib.DestroyNotify;
        page_container: WidgetsTabPageContainer;
        new_window_m: Gtk.MenuItem;
        duplicate_m: Gtk.MenuItem;
        pin_m: Gtk.MenuItem;

        // Constructors of Granite-1.0.WidgetsTab

        static ['new'](label?: string | null, icon?: Gio.Icon | null, page?: Gtk.Widget | null): WidgetsTab;

        static with_accellabels(
            label?: string | null,
            icon?: Gio.Icon | null,
            page?: Gtk.Widget | null,
            _close_tab_label?: AccelLabel | null,
            _duplicate_tab_label?: AccelLabel | null,
            _new_window_label?: AccelLabel | null,
        ): WidgetsTab;

        // Owm methods of Granite-1.0.WidgetsTab

        get_label(): string;
        set_label(value: string): void;
        set_tooltip(value: string): void;
        get_pinned(): boolean;
        set_pinned(value: boolean): void;
        get_pinnable(): boolean;
        set_pinnable(value: boolean): void;
        get_restore_data(): string;
        set_restore_data(value: string): void;
        get_close_tab_label(): AccelLabel | null;
        get_duplicate_tab_label(): AccelLabel | null;
        get_new_window_label(): AccelLabel | null;
        get_page(): Gtk.Widget;
        set_page(value: Gtk.Widget): void;
        get_icon(): Gio.Icon | null;
        set_icon(value?: Gio.Icon | null): void;
        get_working(): boolean;
        set_working(value: boolean): void;
        get_ellipsize_mode(): Pango.EllipsizeMode;
        set_ellipsize_mode(value: Pango.EllipsizeMode): void;
        get_menu(): Gtk.Menu;
        set_menu(value: Gtk.Menu): void;
        close(): void;
    }

    module WidgetsDynamicNotebook {
        // Signal callback interfaces

        interface TabAdded {
            (tab: WidgetsTab): void;
        }

        interface TabRemoved {
            (tab: WidgetsTab): void;
        }

        interface TabSwitched {
            (old_tab: WidgetsTab | null, new_tab: WidgetsTab): void;
        }

        interface TabReordered {
            (tab: WidgetsTab, new_pos: number): void;
        }

        interface TabMoved {
            (tab: WidgetsTab, x: number, y: number): void;
        }

        interface TabDuplicated {
            (duplicated_tab: WidgetsTab): void;
        }

        interface TabRestored {
            (label: string, data: string, icon?: Gio.Icon | null): void;
        }

        interface NewTabRequested {
            (): void;
        }

        interface CloseTabRequested {
            (tab: WidgetsTab): boolean;
        }

        // Constructor properties interface
    }

    class WidgetsDynamicNotebook extends Gtk.EventBox {
        // Own properties of Granite-1.0.WidgetsDynamicNotebook

        readonly n_tabs: number;
        readonly nTabs: number;
        show_tabs: boolean;
        showTabs: boolean;
        tabs_closable: boolean;
        tabsClosable: boolean;
        allow_drag: boolean;
        allowDrag: boolean;
        allow_new_window: boolean;
        allowNewWindow: boolean;
        allow_duplication: boolean;
        allowDuplication: boolean;
        allow_restoring: boolean;
        allowRestoring: boolean;
        max_restorable_tabs: number;
        maxRestorableTabs: number;
        add_button_visible: boolean;
        addButtonVisible: boolean;
        allow_pinning: boolean;
        allowPinning: boolean;
        force_left: boolean;
        forceLeft: boolean;
        add_button_tooltip: string;
        addButtonTooltip: string;
        new_tab_label: AccelLabel;
        newTabLabel: AccelLabel;
        restore_tab_label: AccelLabel;
        restoreTabLabel: AccelLabel;
        current: WidgetsTab;
        readonly tabs: WidgetsTab[];
        group_name: string;
        groupName: string;
        tab_bar_behavior: WidgetsDynamicNotebookTabBarBehavior;
        tabBarBehavior: WidgetsDynamicNotebookTabBarBehavior;
        menu: Gtk.Menu;

        // Constructors of Granite-1.0.WidgetsDynamicNotebook

        static ['new'](): WidgetsDynamicNotebook;

        static with_accellabels(new_tab_label: AccelLabel, restore_tab_label: AccelLabel): WidgetsDynamicNotebook;

        // Owm methods of Granite-1.0.WidgetsDynamicNotebook

        get_n_tabs(): number;
        get_show_tabs(): boolean;
        set_show_tabs(value: boolean): void;
        get_tabs_closable(): boolean;
        set_tabs_closable(value: boolean): void;
        get_allow_drag(): boolean;
        set_allow_drag(value: boolean): void;
        get_allow_new_window(): boolean;
        set_allow_new_window(value: boolean): void;
        get_allow_duplication(): boolean;
        set_allow_duplication(value: boolean): void;
        get_allow_restoring(): boolean;
        set_allow_restoring(value: boolean): void;
        get_max_restorable_tabs(): number;
        set_max_restorable_tabs(value: number): void;
        get_add_button_visible(): boolean;
        set_add_button_visible(value: boolean): void;
        get_allow_pinning(): boolean;
        set_allow_pinning(value: boolean): void;
        get_force_left(): boolean;
        set_force_left(value: boolean): void;
        get_add_button_tooltip(): string;
        set_add_button_tooltip(value: string): void;
        get_new_tab_label(): AccelLabel;
        get_restore_tab_label(): AccelLabel;
        get_current(): WidgetsTab;
        set_current(value: WidgetsTab): void;
        get_tabs(): WidgetsTab[];
        get_group_name(): string;
        set_group_name(value: string): void;
        get_tab_bar_behavior(): WidgetsDynamicNotebookTabBarBehavior;
        set_tab_bar_behavior(value: WidgetsDynamicNotebookTabBarBehavior): void;
        get_menu(): Gtk.Menu;
        remove_tab(tab: WidgetsTab): void;
        next_page(): void;
        previous_page(): void;
        get_children(): Gtk.Widget[];
        get_tab_position(tab: WidgetsTab): number;
        set_tab_position(tab: WidgetsTab, position: number): void;
        get_tab_by_index(index: number): WidgetsTab | null;
        get_tab_by_widget(widget: Gtk.Widget): WidgetsTab | null;
        get_nth_page(index: number): Gtk.Widget;
        insert_tab(tab: WidgetsTab, index: number): number;
    }

    module WidgetsModeButton {
        // Signal callback interfaces

        interface ModeAdded {
            (index: number, widget: Gtk.Widget): void;
        }

        interface ModeRemoved {
            (index: number, widget: Gtk.Widget): void;
        }

        interface ModeChanged {
            (widget: Gtk.Widget): void;
        }

        // Constructor properties interface
    }

    class WidgetsModeButton extends Gtk.Box {
        // Own properties of Granite-1.0.WidgetsModeButton

        selected: number;
        readonly n_items: number;
        readonly nItems: number;

        // Constructors of Granite-1.0.WidgetsModeButton

        static ['new'](): WidgetsModeButton;

        // Owm methods of Granite-1.0.WidgetsModeButton

        get_selected(): number;
        set_selected(value: number): void;
        get_n_items(): number;
        append_pixbuf(pixbuf: GdkPixbuf.Pixbuf): number;
        append_text(text: string): number;
        append_icon(icon_name: string, size: Gtk.IconSize): number;
        append(w: Gtk.Widget): number;
        set_active(new_active_index: number): void;
        set_item_visible(index: number, val: boolean): void;
        remove(index: number): void;
        clear_children(): void;
    }

    module WidgetsOverlayBar {
        // Constructor properties interface
    }

    class WidgetsOverlayBar extends Gtk.EventBox {
        // Own properties of Granite-1.0.WidgetsOverlayBar

        overlay: Gtk.Overlay;
        status: string;
        label: string;
        active: boolean;

        // Constructors of Granite-1.0.WidgetsOverlayBar

        static ['new'](overlay?: Gtk.Overlay | null): WidgetsOverlayBar;

        // Owm methods of Granite-1.0.WidgetsOverlayBar

        get_overlay(): Gtk.Overlay | null;
        get_status(): string;
        set_status(value: string): void;
        get_label(): string;
        set_label(value: string): void;
        get_active(): boolean;
        set_active(value: boolean): void;
    }

    module WidgetsSourceList {
        // Signal callback interfaces

        interface ItemSelected {
            (item?: WidgetsSourceListItem | null): void;
        }

        // Constructor properties interface
    }

    class WidgetsSourceList extends Gtk.ScrolledWindow {
        // Own properties of Granite-1.0.WidgetsSourceList

        root: WidgetsSourceListExpandableItem;
        selected: WidgetsSourceListItem;
        ellipsize_mode: Pango.EllipsizeMode;
        ellipsizeMode: Pango.EllipsizeMode;
        readonly editing: boolean;

        // Constructors of Granite-1.0.WidgetsSourceList

        static ['new'](root: WidgetsSourceListExpandableItem): WidgetsSourceList;

        // Owm methods of Granite-1.0.WidgetsSourceList

        get_root(): WidgetsSourceListExpandableItem;
        set_root(value: WidgetsSourceListExpandableItem): void;
        get_selected(): WidgetsSourceListItem | null;
        set_selected(value?: WidgetsSourceListItem | null): void;
        get_ellipsize_mode(): Pango.EllipsizeMode;
        set_ellipsize_mode(value: Pango.EllipsizeMode): void;
        get_editing(): boolean;
        has_item(item: WidgetsSourceListItem): boolean;
        set_filter_func(visible_func: WidgetsSourceListVisibleFunc | null, refilter: boolean): void;
        refilter(): void;
        is_item_expanded(item: WidgetsSourceListItem): boolean;
        start_editing_item(item: WidgetsSourceListItem): boolean;
        stop_editing(): void;
        enable_drag_source(src_entries: Gtk.TargetEntry[]): void;
        disable_drag_source(): void;
        enable_drag_dest(dest_entries: Gtk.TargetEntry[], actions: Gdk.DragAction): void;
        disable_drag_dest(): void;
        scroll_to_item(
            item: WidgetsSourceListItem,
            expand_parents: boolean,
            use_align: boolean,
            row_align: number,
        ): boolean;
        get_previous_item(reference: WidgetsSourceListItem): WidgetsSourceListItem | null;
        get_next_item(reference: WidgetsSourceListItem): WidgetsSourceListItem | null;
        get_first_child(parent: WidgetsSourceListExpandableItem): WidgetsSourceListItem | null;
        get_last_child(parent: WidgetsSourceListExpandableItem): WidgetsSourceListItem | null;
        get_n_visible_children(parent: WidgetsSourceListExpandableItem): number;
    }

    module WidgetsSourceListItem {
        // Signal callback interfaces

        interface Edited {
            (new_name: string): void;
        }

        interface ActionActivated {
            (): void;
        }

        interface Activated {
            (): void;
        }

        // Constructor properties interface
    }

    class WidgetsSourceListItem extends GObject.Object {
        // Own properties of Granite-1.0.WidgetsSourceListItem

        parent: WidgetsSourceListExpandableItem;
        name: string;
        tooltip: string;
        markup: string;
        badge: string;
        editable: boolean;
        visible: boolean;
        selectable: boolean;
        icon: Gio.Icon;
        activatable: Gio.Icon;
        activatable_tooltip: string;
        activatableTooltip: string;

        // Constructors of Granite-1.0.WidgetsSourceListItem

        static ['new'](name: string): WidgetsSourceListItem;

        // Owm methods of Granite-1.0.WidgetsSourceListItem

        get_parent(): WidgetsSourceListExpandableItem;
        get_name(): string;
        set_name(value: string): void;
        get_tooltip(): string | null;
        set_tooltip(value?: string | null): void;
        get_markup(): string | null;
        set_markup(value?: string | null): void;
        get_badge(): string;
        set_badge(value: string): void;
        get_editable(): boolean;
        set_editable(value: boolean): void;
        get_visible(): boolean;
        set_visible(value: boolean): void;
        get_selectable(): boolean;
        set_selectable(value: boolean): void;
        get_icon(): Gio.Icon;
        set_icon(value: Gio.Icon): void;
        get_activatable(): Gio.Icon;
        set_activatable(value: Gio.Icon): void;
        get_activatable_tooltip(): string;
        set_activatable_tooltip(value: string): void;
        get_context_menu(): Gtk.Menu | null;
    }

    module WidgetsSourceListExpandableItem {
        // Signal callback interfaces

        interface ChildAdded {
            (item: WidgetsSourceListItem): void;
        }

        interface ChildRemoved {
            (item: WidgetsSourceListItem): void;
        }

        interface Toggled {
            (): void;
        }

        // Constructor properties interface
    }

    class WidgetsSourceListExpandableItem extends WidgetsSourceListItem {
        // Own properties of Granite-1.0.WidgetsSourceListExpandableItem

        collapsible: boolean;
        expanded: boolean;
        readonly n_children: number;
        readonly nChildren: number;
        readonly children: Gee.Collection;

        // Constructors of Granite-1.0.WidgetsSourceListExpandableItem

        static ['new'](name: string): WidgetsSourceListExpandableItem;

        // Owm methods of Granite-1.0.WidgetsSourceListExpandableItem

        get_collapsible(): boolean;
        set_collapsible(value: boolean): void;
        get_expanded(): boolean;
        set_expanded(value: boolean): void;
        get_n_children(): number;
        get_children(): Gee.Collection;
        contains(item: WidgetsSourceListItem): boolean;
        add(item: WidgetsSourceListItem): void;
        remove(item: WidgetsSourceListItem): void;
        clear(): void;
        expand_all(inclusive: boolean, recursive: boolean): void;
        collapse_all(inclusive: boolean, recursive: boolean): void;
        expand_with_parents(): void;
        collapse_with_parents(): void;
    }

    module WidgetsStorageBar {
        // Constructor properties interface
    }

    class WidgetsStorageBar extends Gtk.Box {
        // Own properties of Granite-1.0.WidgetsStorageBar

        storage: number;
        total_usage: number;
        totalUsage: number;
        inner_margin_sides: number;
        innerMarginSides: number;

        // Constructors of Granite-1.0.WidgetsStorageBar

        static ['new'](storage: number): WidgetsStorageBar;

        static with_total_usage(storage: number, total_usage: number): WidgetsStorageBar;

        // Owm methods of Granite-1.0.WidgetsStorageBar

        get_storage(): number;
        set_storage(value: number): void;
        get_total_usage(): number;
        set_total_usage(value: number): void;
        get_inner_margin_sides(): number;
        set_inner_margin_sides(value: number): void;
        update_block_size(description: WidgetsStorageBarItemDescription, size: number): void;
    }

    module WidgetsTimePicker {
        // Signal callback interfaces

        interface TimeChanged {
            (): void;
        }

        // Constructor properties interface
    }

    class WidgetsTimePicker extends Gtk.Entry {
        // Own properties of Granite-1.0.WidgetsTimePicker

        format_12: string;
        format12: string;
        format_24: string;
        format24: string;
        time: GLib.DateTime;

        // Constructors of Granite-1.0.WidgetsTimePicker

        static with_format(format_12: string, format_24: string): WidgetsTimePicker;

        static ['new'](): WidgetsTimePicker;

        // Owm methods of Granite-1.0.WidgetsTimePicker

        get_format_12(): string;
        get_format_24(): string;
        get_time(): GLib.DateTime;
        set_time(value: GLib.DateTime): void;
        position_dropdown(): void;
    }

    module WidgetsToast {
        // Signal callback interfaces

        interface Closed {
            (): void;
        }

        interface DefaultAction {
            (): void;
        }

        // Constructor properties interface
    }

    class WidgetsToast extends Gtk.Revealer {
        // Own properties of Granite-1.0.WidgetsToast

        title: string;

        // Constructors of Granite-1.0.WidgetsToast

        static ['new'](title: string): WidgetsToast;

        // Owm methods of Granite-1.0.WidgetsToast

        get_title(): string;
        set_title(value: string): void;
        set_default_action(label?: string | null): void;
        send_notification(): void;
    }

    module WidgetsWelcomeButton {
        // Constructor properties interface
    }

    class WidgetsWelcomeButton extends Gtk.Button {
        // Own properties of Granite-1.0.WidgetsWelcomeButton

        title: string;
        description: string;
        icon: Gtk.Image;

        // Constructors of Granite-1.0.WidgetsWelcomeButton

        static ['new'](image: Gtk.Image | null, option_text: string, description_text: string): WidgetsWelcomeButton;

        // Owm methods of Granite-1.0.WidgetsWelcomeButton

        get_title(): string;
        set_title(value: string): void;
        get_description(): string;
        set_description(value: string): void;
        get_icon(): Gtk.Image | null;
        set_icon(value?: Gtk.Image | null): void;
    }

    module WidgetsWelcome {
        // Signal callback interfaces

        interface Activated {
            (index: number): void;
        }

        // Constructor properties interface
    }

    class WidgetsWelcome extends Gtk.EventBox {
        // Own properties of Granite-1.0.WidgetsWelcome

        title: string;
        subtitle: string;

        // Own fields of Granite-1.0.WidgetsWelcome

        children: Gtk.Button[];
        options: Gtk.Grid;

        // Constructors of Granite-1.0.WidgetsWelcome

        static ['new'](title_text: string, subtitle_text: string): WidgetsWelcome;

        // Owm methods of Granite-1.0.WidgetsWelcome

        get_title(): string;
        set_title(value: string): void;
        get_subtitle(): string;
        set_subtitle(value: string): void;
        set_item_visible(index: number, val: boolean): void;
        remove_item(index: number): void;
        set_item_sensitivity(index: number, val: boolean): void;
        append(icon_name: string, option_text: string, description_text: string): number;
        append_with_pixbuf(pixbuf: GdkPixbuf.Pixbuf | null, option_text: string, description_text: string): number;
        append_with_image(image: Gtk.Image | null, option_text: string, description_text: string): number;
        get_button_from_index(index: number): WidgetsWelcomeButton | null;
    }

    module Application {
        // Constructor properties interface
    }

    abstract class Application extends Gtk.Application {
        // Own fields of Granite-1.0.Application

        build_data_dir: string;
        build_pkg_data_dir: string;
        build_release_name: string;
        build_version: string;
        build_version_info: string;
        program_name: string;
        exec_name: string;
        app_copyright: string;
        app_years: string;
        app_icon: string;
        app_launcher: string;
        main_url: string;
        bug_url: string;
        help_url: string;
        translate_url: string;
        about_authors: string[];
        about_authors_length1: number;
        about_documenters: string[];
        about_documenters_length1: number;
        about_artists: string[];
        about_artists_length1: number;
        about_comments: string;
        about_translators: string;
        about_license: string;
        about_license_type: Gtk.License;
        granite_application_DEBUG: boolean;

        // Owm methods of Granite-1.0.Application

        run(args: string[]): number;
        set_options(): void;
    }

    module SettingsPage {
        // Constructor properties interface
    }

    abstract class SettingsPage extends Gtk.ScrolledWindow {
        // Own properties of Granite-1.0.SettingsPage

        status_type: SettingsPageStatusType;
        statusType: SettingsPageStatusType;
        display_widget: Gtk.Widget;
        displayWidget: Gtk.Widget;
        header: string;
        status: string;
        icon_name: string;
        iconName: string;
        title: string;

        // Owm methods of Granite-1.0.SettingsPage

        get_status_type(): SettingsPageStatusType;
        set_status_type(value: SettingsPageStatusType): void;
        get_display_widget(): Gtk.Widget | null;
        get_header(): string | null;
        get_status(): string;
        set_status(value: string): void;
        get_icon_name(): string | null;
        set_icon_name(value?: string | null): void;
        get_title(): string;
        set_title(value: string): void;
    }

    module SimpleSettingsPage {
        // Constructor properties interface
    }

    abstract class SimpleSettingsPage extends SettingsPage {
        // Own properties of Granite-1.0.SimpleSettingsPage

        action_area: Gtk.ButtonBox;
        actionArea: Gtk.ButtonBox;
        content_area: Gtk.Grid;
        contentArea: Gtk.Grid;
        status_switch: Gtk.Switch;
        statusSwitch: Gtk.Switch;
        activatable: boolean;
        description: string;
        icon_name: string;
        iconName: string;
        title: string;

        // Owm methods of Granite-1.0.SimpleSettingsPage

        get_action_area(): Gtk.ButtonBox;
        get_content_area(): Gtk.Grid;
        get_status_switch(): Gtk.Switch | null;
        get_activatable(): boolean;
        get_description(): string;
        set_description(value: string): void;
        get_icon_name(): string;
        set_icon_name(value: string): void;
        get_title(): string;
        set_title(value: string): void;
    }

    module AccelLabel {
        // Constructor properties interface
    }

    class AccelLabel extends Gtk.Grid {
        // Own properties of Granite-1.0.AccelLabel

        action_name: string;
        actionName: string;
        accel_string: string;
        accelString: string;
        label: string;

        // Constructors of Granite-1.0.AccelLabel

        static ['new'](label: string, accel_string?: string | null): AccelLabel;

        static from_action_name(label: string, action_name: string): AccelLabel;

        // Owm methods of Granite-1.0.AccelLabel

        get_action_name(): string;
        set_action_name(value: string): void;
        get_accel_string(): string | null;
        set_accel_string(value?: string | null): void;
        get_label(): string;
        set_label(value: string): void;
    }

    module AsyncImage {
        // Constructor properties interface
    }

    class AsyncImage extends Gtk.Image {
        // Own properties of Granite-1.0.AsyncImage

        load_on_realize: boolean;
        loadOnRealize: boolean;
        auto_size_request: boolean;
        autoSizeRequest: boolean;
        gicon_async: Gio.Icon;
        giconAsync: Gio.Icon;
        size_async: number;
        sizeAsync: number;

        // Constructors of Granite-1.0.AsyncImage

        static ['new'](load_on_realize: boolean, auto_size_request: boolean): AsyncImage;

        static from_gicon_async(
            icon: Gio.Icon,
            size: number,
            load_on_realize: boolean,
            auto_size_request: boolean,
        ): AsyncImage;

        static from_icon_name_async(
            icon_name: string,
            icon_size: Gtk.IconSize,
            load_on_realize: boolean,
            auto_size_request: boolean,
        ): AsyncImage;

        // Owm methods of Granite-1.0.AsyncImage

        get_gicon_async(): Gio.Icon | null;
        get_size_async(): number;
        set_from_gicon_async(
            icon: Gio.Icon,
            size: number,
            cancellable?: Gio.Cancellable | null,
            _callback_?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        set_from_gicon_finish(_res_: Gio.AsyncResult): void;
        set_from_icon_name_async(
            icon_name: string,
            icon_size: Gtk.IconSize,
            cancellable?: Gio.Cancellable | null,
            _callback_?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        set_from_icon_name_finish(_res_: Gio.AsyncResult): void;
        set_from_file_async(
            file: Gio.File,
            width: number,
            height: number,
            preserve_aspect_ratio: boolean,
            cancellable?: Gio.Cancellable | null,
            _callback_?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        set_from_file_finish(_res_: Gio.AsyncResult): void;
    }

    module Dialog {
        // Constructor properties interface
    }

    class Dialog extends Gtk.Dialog {
        // Constructors of Granite-1.0.Dialog

        static ['new'](): Dialog;
    }

    module HeaderLabel {
        // Constructor properties interface
    }

    class HeaderLabel extends Gtk.Label {
        // Constructors of Granite-1.0.HeaderLabel

        static ['new'](label: string): HeaderLabel;
    }

    module HyperTextView {
        // Constructor properties interface
    }

    class HyperTextView extends Gtk.TextView {
        // Constructors of Granite-1.0.HyperTextView

        static ['new'](): HyperTextView;
    }

    module MessageDialog {
        // Constructor properties interface
    }

    class MessageDialog extends Dialog {
        // Own properties of Granite-1.0.MessageDialog

        primary_text: string;
        primaryText: string;
        secondary_text: string;
        secondaryText: string;
        image_icon: Gio.Icon;
        imageIcon: Gio.Icon;
        badge_icon: Gio.Icon;
        badgeIcon: Gio.Icon;
        primary_label: Gtk.Label;
        primaryLabel: Gtk.Label;
        secondary_label: Gtk.Label;
        secondaryLabel: Gtk.Label;
        buttons: Gtk.ButtonsType;
        custom_bin: Gtk.Bin;
        customBin: Gtk.Bin;

        // Constructors of Granite-1.0.MessageDialog

        static ['new'](
            primary_text: string,
            secondary_text: string,
            image_icon: Gio.Icon,
            buttons: Gtk.ButtonsType,
        ): MessageDialog;

        static with_image_from_icon_name(
            primary_text: string,
            secondary_text: string,
            image_icon_name: string,
            buttons: Gtk.ButtonsType,
        ): MessageDialog;

        // Owm methods of Granite-1.0.MessageDialog

        get_primary_text(): string;
        set_primary_text(value: string): void;
        get_secondary_text(): string;
        set_secondary_text(value: string): void;
        get_image_icon(): Gio.Icon;
        set_image_icon(value: Gio.Icon): void;
        get_badge_icon(): Gio.Icon;
        set_badge_icon(value: Gio.Icon): void;
        get_primary_label(): Gtk.Label;
        get_secondary_label(): Gtk.Label;
        get_custom_bin(): Gtk.Bin;
        show_error_details(error_message: string): void;
    }

    module ModeSwitch {
        // Constructor properties interface
    }

    class ModeSwitch extends Gtk.Grid {
        // Own properties of Granite-1.0.ModeSwitch

        active: boolean;
        primary_icon_gicon: Gio.Icon;
        primaryIconGicon: Gio.Icon;
        primary_icon_name: string;
        primaryIconName: string;
        primary_icon_tooltip_text: string;
        primaryIconTooltipText: string;
        secondary_icon_gicon: Gio.Icon;
        secondaryIconGicon: Gio.Icon;
        secondary_icon_name: string;
        secondaryIconName: string;
        secondary_icon_tooltip_text: string;
        secondaryIconTooltipText: string;

        // Constructors of Granite-1.0.ModeSwitch

        static ['new'](primary_icon_gicon: Gio.Icon, secondary_icon_gicon: Gio.Icon): ModeSwitch;

        static from_icon_name(primary_icon_name: string, secondary_icon_name: string): ModeSwitch;

        // Owm methods of Granite-1.0.ModeSwitch

        get_active(): boolean;
        set_active(value: boolean): void;
        get_primary_icon_gicon(): Gio.Icon;
        set_primary_icon_gicon(value: Gio.Icon): void;
        get_primary_icon_name(): string;
        set_primary_icon_name(value: string): void;
        get_primary_icon_tooltip_text(): string;
        set_primary_icon_tooltip_text(value: string): void;
        get_secondary_icon_gicon(): Gio.Icon;
        set_secondary_icon_gicon(value: Gio.Icon): void;
        get_secondary_icon_name(): string;
        set_secondary_icon_name(value: string): void;
        get_secondary_icon_tooltip_text(): string;
        set_secondary_icon_tooltip_text(value: string): void;
    }

    module SeekBar {
        // Constructor properties interface
    }

    class SeekBar extends Gtk.Grid {
        // Own properties of Granite-1.0.SeekBar

        playback_duration: number;
        playbackDuration: number;
        playback_progress: number;
        playbackProgress: number;
        is_grabbing: boolean;
        isGrabbing: boolean;
        is_hovering: boolean;
        isHovering: boolean;
        progression_label: Gtk.Label;
        progressionLabel: Gtk.Label;
        duration_label: Gtk.Label;
        durationLabel: Gtk.Label;
        scale: Gtk.Scale;

        // Constructors of Granite-1.0.SeekBar

        static ['new'](playback_duration: number): SeekBar;

        // Owm methods of Granite-1.0.SeekBar

        get_playback_duration(): number;
        set_playback_duration(value: number): void;
        get_playback_progress(): number;
        set_playback_progress(value: number): void;
        get_is_grabbing(): boolean;
        get_is_hovering(): boolean;
        get_progression_label(): Gtk.Label;
        set_progression_label(value: Gtk.Label): void;
        get_duration_label(): Gtk.Label;
        set_duration_label(value: Gtk.Label): void;
        get_scale(): Gtk.Scale;
        set_scale(value: Gtk.Scale): void;
    }

    module SettingsSidebar {
        // Constructor properties interface
    }

    class SettingsSidebar extends Gtk.ScrolledWindow {
        // Own properties of Granite-1.0.SettingsSidebar

        stack: Gtk.Stack;
        visible_child_name: string;
        visibleChildName: string;

        // Constructors of Granite-1.0.SettingsSidebar

        static ['new'](stack: Gtk.Stack): SettingsSidebar;

        // Owm methods of Granite-1.0.SettingsSidebar

        get_stack(): Gtk.Stack;
        get_visible_child_name(): string | null;
        set_visible_child_name(value?: string | null): void;
    }

    module Settings {
        // Constructor properties interface
    }

    class Settings extends GObject.Object {
        // Own properties of Granite-1.0.Settings

        prefers_color_scheme: SettingsColorScheme;
        prefersColorScheme: SettingsColorScheme;

        // Owm methods of Granite-1.0.Settings

        static get_default(): Settings;

        // Owm methods of Granite-1.0.Settings

        get_prefers_color_scheme(): SettingsColorScheme;
    }

    module SwitchModelButton {
        // Constructor properties interface
    }

    class SwitchModelButton extends Gtk.ToggleButton {
        // Own properties of Granite-1.0.SwitchModelButton

        text: string;
        description: string;

        // Constructors of Granite-1.0.SwitchModelButton

        static ['new'](text: string): SwitchModelButton;

        // Owm methods of Granite-1.0.SwitchModelButton

        get_text(): string;
        set_text(value: string): void;
        get_description(): string | null;
        set_description(value?: string | null): void;
    }

    module ValidatedEntry {
        // Constructor properties interface
    }

    class ValidatedEntry extends Gtk.Entry {
        // Own properties of Granite-1.0.ValidatedEntry

        is_valid: boolean;
        isValid: boolean;
        min_length: number;
        minLength: number;
        regex: GLib.Regex;

        // Constructors of Granite-1.0.ValidatedEntry

        static from_regex(regex_arg: GLib.Regex): ValidatedEntry;

        static ['new'](): ValidatedEntry;

        // Owm methods of Granite-1.0.ValidatedEntry

        get_is_valid(): boolean;
        set_is_valid(value: boolean): void;
        get_min_length(): number;
        set_min_length(value: number): void;
        get_regex(): GLib.Regex;
        set_regex(value: GLib.Regex): void;
    }

    class DrawingBufferSurfaceClass {}

    class DrawingBufferSurfacePrivate {}

    class DrawingColorClass {}

    class DrawingColorPrivate {}

    class DrawingUtilitiesClass {}

    class DrawingUtilitiesPrivate {}

    class ServicesContractorProxyClass {}

    class ServicesContractorProxyPrivate {}

    class ServicesIconFactoryClass {}

    class ServicesIconFactoryPrivate {}

    class ServicesLoggerClass {}

    class ServicesLoggerPrivate {}

    class ServicesPathsClass {}

    class ServicesPathsPrivate {}

    class ServicesSettingsClass {}

    class ServicesSettingsPrivate {}

    class ServicesSimpleCommandClass {}

    class ServicesSimpleCommandPrivate {}

    class ServicesSystemClass {}

    class ServicesSystemPrivate {}

    class ServicesContractIface {}

    class ServicesSettingsSerializableIface {}

    class WidgetsAlertViewClass {}

    class WidgetsAlertViewPrivate {}

    class WidgetsAvatarClass {}

    class WidgetsAvatarPrivate {}

    class WidgetsCellRendererBadgeClass {}

    class WidgetsCellRendererBadgePrivate {}

    class WidgetsCellRendererExpanderClass {}

    class WidgetsCellRendererExpanderPrivate {}

    class WidgetsCollapsiblePanedClass {}

    class WidgetsCollapsiblePanedPrivate {}

    class WidgetsCompositedWindowClass {}

    class WidgetsCompositedWindowPrivate {}

    class WidgetsDatePickerClass {}

    class WidgetsDatePickerPrivate {}

    class WidgetsTabClass {}

    class WidgetsTabPrivate {}

    class WidgetsDynamicNotebookClass {}

    class WidgetsDynamicNotebookPrivate {}

    class WidgetsModeButtonClass {}

    class WidgetsModeButtonPrivate {}

    class WidgetsOverlayBarClass {}

    class WidgetsOverlayBarPrivate {}

    class WidgetsSourceListClass {}

    class WidgetsSourceListPrivate {}

    class WidgetsSourceListItemClass {}

    class WidgetsSourceListItemPrivate {}

    class WidgetsSourceListExpandableItemClass {}

    class WidgetsSourceListExpandableItemPrivate {}

    class WidgetsStorageBarClass {}

    class WidgetsStorageBarPrivate {}

    class WidgetsTimePickerClass {}

    class WidgetsTimePickerPrivate {}

    class WidgetsToastClass {}

    class WidgetsToastPrivate {}

    class WidgetsWelcomeButtonClass {}

    class WidgetsWelcomeButtonPrivate {}

    class WidgetsWelcomeClass {}

    class WidgetsWelcomePrivate {}

    class WidgetsSourceListSortableIface {}

    class WidgetsSourceListDragSourceIface {}

    class WidgetsSourceListDragDestIface {}

    class ApplicationClass {}

    class ApplicationPrivate {}

    class SettingsPageClass {}

    class SettingsPagePrivate {}

    class SimpleSettingsPageClass {}

    class SimpleSettingsPagePrivate {}

    class AccelLabelClass {}

    class AccelLabelPrivate {}

    class AsyncImageClass {}

    class AsyncImagePrivate {}

    class DialogClass {}

    class DialogPrivate {}

    class HeaderLabelClass {}

    class HeaderLabelPrivate {}

    class HyperTextViewClass {}

    class HyperTextViewPrivate {}

    class MessageDialogClass {}

    class MessageDialogPrivate {}

    class ModeSwitchClass {}

    class ModeSwitchPrivate {}

    class SeekBarClass {}

    class SeekBarPrivate {}

    class SettingsSidebarClass {}

    class SettingsSidebarPrivate {}

    class SettingsClass {}

    class SettingsPrivate {}

    class SwitchModelButtonClass {}

    class SwitchModelButtonPrivate {}

    class ValidatedEntryClass {}

    class ValidatedEntryPrivate {}

    interface ServicesContract {
        // Owm methods of Granite-1.0.ServicesContract

        get_display_name(): string;
        get_description(): string;
        get_icon(): Gio.Icon;
        execute_with_file(file: Gio.File): void;
        execute_with_files(files: Gio.File[]): void;

        // Own virtual methods of Granite-1.0.ServicesContract

        vfunc_get_display_name(): string;
        vfunc_get_description(): string;
        vfunc_get_icon(): Gio.Icon;
        vfunc_execute_with_file(file: Gio.File): void;
        vfunc_execute_with_files(files: Gio.File[]): void;
    }

    interface ServicesSettingsSerializable {
        // Owm methods of Granite-1.0.ServicesSettingsSerializable

        settings_serialize(): string;
        settings_deserialize(s: string): void;

        // Own virtual methods of Granite-1.0.ServicesSettingsSerializable

        vfunc_settings_serialize(): string;
        vfunc_settings_deserialize(s: string): void;
    }

    interface WidgetsSourceListSortable {
        // Owm methods of Granite-1.0.WidgetsSourceListSortable

        allow_dnd_sorting(): boolean;
        compare(a: WidgetsSourceListItem, b: WidgetsSourceListItem): number;

        // Own virtual methods of Granite-1.0.WidgetsSourceListSortable

        vfunc_allow_dnd_sorting(): boolean;
        vfunc_compare(a: WidgetsSourceListItem, b: WidgetsSourceListItem): number;
    }

    interface WidgetsSourceListDragSource {
        // Owm methods of Granite-1.0.WidgetsSourceListDragSource

        draggable(): boolean;
        prepare_selection_data(selection_data: Gtk.SelectionData): void;

        // Own virtual methods of Granite-1.0.WidgetsSourceListDragSource

        vfunc_draggable(): boolean;
        vfunc_prepare_selection_data(selection_data: Gtk.SelectionData): void;
    }

    interface WidgetsSourceListDragDest {
        // Owm methods of Granite-1.0.WidgetsSourceListDragDest

        data_drop_possible(context: Gdk.DragContext, data: Gtk.SelectionData): boolean;
        data_received(context: Gdk.DragContext, data: Gtk.SelectionData): Gdk.DragAction;

        // Own virtual methods of Granite-1.0.WidgetsSourceListDragDest

        vfunc_data_drop_possible(context: Gdk.DragContext, data: Gtk.SelectionData): boolean;
        vfunc_data_received(context: Gdk.DragContext, data: Gtk.SelectionData): Gdk.DragAction;
    }

    // Workaround
    /** @ignore */
    export module GraniteServicesSettingsSerializable {
        export interface ConstructorProperties extends ServicesSettingsSerializable.ConstructorProperties {}
    }
    /** @ignore */
    export interface GraniteServicesSettingsSerializable extends ServicesSettingsSerializable {}
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

export default Granite;
// END
