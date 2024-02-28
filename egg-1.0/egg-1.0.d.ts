/*
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in `ts-for-gir` or create a bug report on https://github.com/gjsify/ts-for-gir
 */

import './egg-1.0-ambient.d.ts';
import './egg-1.0-import.d.ts';
/**
 * Egg-1.0
 */

import type Gtk from '@girs/gtk-3.0';
import type xlib from '@girs/xlib-2.0';
import type Gdk from '@girs/gdk-3.0';
import type cairo from '@girs/cairo-1.0';
import type GObject from '@girs/gobject-2.0';
import type GLib from '@girs/glib-2.0';
import type Pango from '@girs/pango-1.0';
import type HarfBuzz from '@girs/harfbuzz-0.0';
import type freetype2 from '@girs/freetype2-2.0';
import type Gio from '@girs/gio-2.0';
import type GdkPixbuf from '@girs/gdkpixbuf-2.0';
import type GModule from '@girs/gmodule-2.0';
import type Atk from '@girs/atk-1.0';

export namespace Egg {
    enum AnimationMode {
        LINEAR,
        EASE_IN_QUAD,
        EASE_IN_OUT_QUAD,
        EASE_OUT_QUAD,
        EASE_IN_CUBIC,
        EASE_OUT_CUBIC,
        EASE_IN_OUT_CUBIC,
    }
    enum SliderPosition {
        NONE,
        TOP,
        RIGHT,
        BOTTOM,
        LEFT,
    }
    enum ThreeGridColumn {
        LEFT,
        CENTER,
        RIGHT,
    }
    const COUNTER_REQUIRES_ATOMIC: number;
    function counter_arena_get_default(): CounterArena;
    /**
     * Helper function to "humanize" a #GDateTime into a relative time
     * relationship string.
     * @param self A #GDateTime
     * @returns A newly allocated string describing the   date and time imprecisely such as "Yesterday".
     */
    function date_time_format_for_display(self: GLib.DateTime): string;
    /**
     * Creates a new frame source that will execute when the timeout interval
     * for the source has elapsed. The timing will try to synchronize based
     * on the end time of the animation.
     * @param frames_per_sec Target frames per second.
     * @param callback A #GSourceFunc to execute.
     * @returns A source id that can be removed with g_source_remove().
     */
    function frame_source_add(frames_per_sec: number, callback: GLib.SourceFunc): number;
    function get_current_cpu_call(): number;
    interface CounterForeachFunc {
        (counter: Counter): void;
    }
    interface TaskCacheCallback {
        (self: TaskCache, key: any | null, task: Gio.Task): void;
    }
    module Animation {
        // Signal callback interfaces

        interface Tick {
            (): void;
        }

        // Constructor properties interface
    }

    class Animation extends GObject.InitiallyUnowned {
        // Own properties of Egg-1.0.Animation

        /**
         * The "duration" property is the total number of milliseconds that the
         * animation should run before being completed.
         */
        duration: number;
        frame_clock: Gdk.FrameClock;
        frameClock: Gdk.FrameClock;
        /**
         * The "mode" property is the Alpha function that should be used to
         * determine the offset within the animation based on the current
         * offset in the animations duration.
         */
        mode: AnimationMode;
        /**
         * The "target" property is the #GObject that should have its properties
         * animated.
         */
        target: GObject.Object;

        // Owm methods of Egg-1.0.Animation

        static calculate_duration(monitor: Gdk.Monitor, from_value: number, to_value: number): number;

        // Owm methods of Egg-1.0.Animation

        /**
         * Adds a new property to the set of properties to be animated during the
         * lifetime of the animation.
         *
         * Side effects: None.
         * @param pspec A #ParamSpec of @target or a #GtkWidget<!-- -->'s parent.
         * @param value The new value for the property at the end of the animation.
         */
        add_property(pspec: GObject.ParamSpec, value: GObject.Value): void;
        /**
         * Start the animation. When the animation stops, the internal reference will
         * be dropped and the animation may be finalized.
         *
         * Side effects: None.
         */
        start(): void;
        /**
         * Stops a running animation. The internal reference to the animation is
         * dropped and therefore may cause the object to finalize.
         *
         * Side effects: None.
         */
        stop(): void;
    }

    module BindingGroup {
        // Constructor properties interface
    }

    /**
     * #EggBindingGroup manages to simplify the process of binding
     * many properties from a #GObject as a group. As such there is no API
     * to unbind a property from the group.
     *
     * In particular, this allows you to change the source instance for the
     * bindings. This automatically causes the unbinding of the properties
     * from the old instance and binding to the new instance.
     *
     * This should not be confused with #GtkBindingGroup.
     */
    class BindingGroup extends GObject.Object {
        // Own properties of Egg-1.0.BindingGroup

        /**
         * The source object used for binding properties.
         */
        source: GObject.Object;

        // Constructors of Egg-1.0.BindingGroup

        static ['new'](): BindingGroup;

        // Owm methods of Egg-1.0.BindingGroup

        /**
         * Creates a binding between `source_property` on the source object
         * and `target_property` on `target`. Whenever the `source_property`
         * is changed the `target_property` is updated using the same value.
         * The binding flags #G_BINDING_SYNC_CREATE is automatically specified.
         *
         * See: g_object_bind_property().
         * @param source_property the property on the source to bind
         * @param target the target #GObject
         * @param target_property the property on @target to bind
         * @param flags the flags used to create the #GBinding
         */
        bind(
            source_property: string,
            target: GObject.Object,
            target_property: string,
            flags: GObject.BindingFlags,
        ): void;
        /**
         * Creates a binding between `source_property` on the source object and
         * `target_property` on `target,` allowing you to set the transformation
         * functions to be used by the binding. The binding flags
         * #G_BINDING_SYNC_CREATE is automatically specified.
         *
         * See: g_object_bind_property_full().
         * @param source_property the property on the source to bind
         * @param target the target #GObject
         * @param target_property the property on @target to bind
         * @param flags the flags used to create the #GBinding
         * @param transform_to the transformation function     from the source object to the @target, or %NULL to use the default
         * @param transform_from the transformation function     from the @target to the source object, or %NULL to use the default
         */
        bind_full(
            source_property: string,
            target: GObject.Object,
            target_property: string,
            flags: GObject.BindingFlags,
            transform_to?: GObject.BindingTransformFunc | null,
            transform_from?: GObject.BindingTransformFunc | null,
        ): void;
        /**
         * Creates a binding between `source_property` on the source object and
         * `target_property` on `target,` allowing you to set the transformation
         * functions to be used by the binding. The binding flags
         * #G_BINDING_SYNC_CREATE is automatically specified.
         *
         * This function is the language bindings friendly version of
         * egg_binding_group_bind_property_full(), using #GClosures
         * instead of function pointers.
         *
         * See: g_object_bind_property_with_closures().
         * @param source_property the property on the source to bind
         * @param target the target #GObject
         * @param target_property the property on @target to bind
         * @param flags the flags used to create the #GBinding
         * @param transform_to a #GClosure wrapping the     transformation function from the source object to the @target,     or %NULL to use the default
         * @param transform_from a #GClosure wrapping the     transformation function from the @target to the source object,     or %NULL to use the default
         */
        bind_full(
            source_property: string,
            target: GObject.Object,
            target_property: string,
            flags: GObject.BindingFlags,
            transform_to?: GObject.Closure | null,
            transform_from?: GObject.Closure | null,
        ): void;
        /**
         * Gets the source object used for binding properties.
         * @returns the source object.
         */
        get_source<T = GObject.Object>(): T;
        /**
         * Sets `source` as the source object used for creating property
         * bindings. If there is already a source object all bindings from it
         * will be removed.
         *
         * Note: All properties that have been bound must exist on `source`.
         * @param source the source #GObject
         */
        set_source(source?: GObject.Object | null): void;
    }

    module Box {
        // Constructor properties interface
    }

    class Box extends Gtk.Box {
        // Own properties of Egg-1.0.Box

        max_width_request: number;
        maxWidthRequest: number;

        // Constructors of Egg-1.0.Box

        static ['new'](): Box;

        // Owm methods of Egg-1.0.Box

        get_max_width_request(): number;
        set_max_width_request(max_width_request: number): void;
    }

    module CenteringBin {
        // Constructor properties interface
    }

    /**
     * First off, you probably want to use GtkBox with a center widget instead
     * of this widget. However, the case where this widget is useful is when
     * you cannot control your layout within the width of the toplevel, but
     * still want your child centered within the toplevel.
     *
     * This is done by translating coordinates of the widget with respect to
     * the toplevel and anchoring the child at TRUE_CENTER-(alloc.width/2).
     */
    class CenteringBin extends Gtk.Bin {
        // Own properties of Egg-1.0.CenteringBin

        max_width_request: number;
        maxWidthRequest: number;

        // Constructors of Egg-1.0.CenteringBin

        static ['new'](): CenteringBin;
    }

    module ColumnLayout {
        // Constructor properties interface
    }

    class ColumnLayout extends Gtk.Container {
        // Own properties of Egg-1.0.ColumnLayout

        column_spacing: number;
        columnSpacing: number;
        column_width: number;
        columnWidth: number;
        max_columns: number;
        maxColumns: number;
        row_spacing: number;
        rowSpacing: number;

        // Constructors of Egg-1.0.ColumnLayout

        static ['new'](): ColumnLayout;

        // Owm methods of Egg-1.0.ColumnLayout

        get_column_spacing(): number;
        get_column_width(): number;
        get_max_columns(): number;
        get_row_spacing(): number;
        set_column_spacing(column_spacing: number): void;
        set_column_width(column_width: number): void;
        set_max_columns(max_columns: number): void;
        set_row_spacing(row_spacing: number): void;
    }

    module ElasticBin {
        // Constructor properties interface
    }

    class ElasticBin extends Gtk.Bin {
        // Constructors of Egg-1.0.ElasticBin

        static ['new'](): ElasticBin;
    }

    module EmptyState {
        // Constructor properties interface
    }

    class EmptyState extends Gtk.Bin {
        // Own properties of Egg-1.0.EmptyState

        icon_name: string;
        iconName: string;
        pixel_size: number;
        pixelSize: number;
        resource: string;
        subtitle: string;
        title: string;

        // Constructors of Egg-1.0.EmptyState

        static ['new'](): EmptyState;

        // Owm methods of Egg-1.0.EmptyState

        get_icon_name(): string;
        get_subtitle(): string;
        get_title(): string;
        set_icon_name(icon_name: string): void;
        set_resource(resource: string): void;
        set_subtitle(title: string): void;
        set_title(title: string): void;
    }

    module EntryBox {
        // Constructor properties interface
    }

    class EntryBox extends Gtk.Box {
        // Own properties of Egg-1.0.EntryBox

        max_width_chars: number;
        maxWidthChars: number;

        // Constructors of Egg-1.0.EntryBox

        static ['new'](): EntryBox;
    }

    module FileChooserEntry {
        // Constructor properties interface
    }

    class FileChooserEntry extends Gtk.Bin {
        // Own properties of Egg-1.0.FileChooserEntry

        action: Gtk.FileChooserAction;
        create_folders: boolean;
        createFolders: boolean;
        do_overwrite_confirmation: boolean;
        doOverwriteConfirmation: boolean;
        file: Gio.File;
        filter: Gtk.FileFilter;
        local_only: boolean;
        localOnly: boolean;
        max_width_chars: number;
        maxWidthChars: number;
        show_hidden: boolean;
        showHidden: boolean;
        title: string;

        // Constructors of Egg-1.0.FileChooserEntry

        static ['new'](title: string, action: Gtk.FileChooserAction): FileChooserEntry;

        // Owm methods of Egg-1.0.FileChooserEntry

        /**
         * Returns the currently selected file or %NULL if there is no selection.
         * @returns A #GFile or %NULL.
         */
        get_file(): Gio.File | null;
        set_file(file: Gio.File): void;
    }

    module ListBox {
        // Constructor properties interface
    }

    class ListBox extends Gtk.ListBox {
        // Own properties of Egg-1.0.ListBox

        property_name: string;
        propertyName: string;
        row_type: GObject.GType;
        rowType: GObject.GType;
        row_type_name: string;
        rowTypeName: string;

        // Constructors of Egg-1.0.ListBox

        static ['new'](row_type: GObject.GType, property_name: string): ListBox;

        // Owm methods of Egg-1.0.ListBox

        get_model(): Gio.ListModel | null;
        get_property_name(): string;
        get_row_type(): GObject.GType;
        set_model(model: Gio.ListModel): void;
    }

    module MenuManager {
        // Constructor properties interface
    }

    /**
     * The goal of #EggMenuManager is to simplify the process of merging multiple
     * GtkBuilder .ui files containing menus into a single representation of the
     * application menus. Additionally, it provides the ability to "unmerge"
     * previously merged menus.
     *
     * This allows for an application to have plugins which seemlessly extends
     * the core application menus.
     *
     * Implementation notes:
     *
     * To make this work, we don't use the GMenu instances created by a GtkBuilder
     * instance. Instead, we create the menus ourself and recreate section and
     * submenu links. This allows the #EggMenuManager to be in full control of
     * the generated menus.
     *
     * egg_menu_manager_get_menu_by_id() will always return a #GMenu, however
     * that menu may contain no children until something has extended it later
     * on during the application process.
     */
    class MenuManager extends GObject.Object {
        // Constructors of Egg-1.0.MenuManager

        static ['new'](): MenuManager;

        // Owm methods of Egg-1.0.MenuManager

        add_filename(filename: string): number;
        add_resource(resource: string): number;
        get_menu_by_id(menu_id: string): Gio.Menu;
        remove(merge_id: number): void;
    }

    module PillBox {
        // Constructor properties interface
    }

    class PillBox extends Gtk.EventBox {
        // Own properties of Egg-1.0.PillBox

        label: string;

        // Constructors of Egg-1.0.PillBox

        static ['new'](label: string): PillBox;

        // Owm methods of Egg-1.0.PillBox

        get_label(): string;
        set_label(label: string): void;
    }

    module PriorityBox {
        // Constructor properties interface
    }

    /**
     * This is like a #GtkBox but uses stable priorities to sort.
     */
    class PriorityBox extends Gtk.Box {
        // Constructors of Egg-1.0.PriorityBox

        static ['new'](): PriorityBox;
    }

    module ProgressButton {
        // Constructor properties interface
    }

    class ProgressButton extends Gtk.Button {
        // Own properties of Egg-1.0.ProgressButton

        progress: number;
        show_progress: boolean;
        showProgress: boolean;

        // Constructors of Egg-1.0.ProgressButton

        static ['new'](): ProgressButton;

        // Owm methods of Egg-1.0.ProgressButton

        get_progress(): number;
        get_show_progress(): boolean;
        set_progress(percentage: number): void;
        set_show_progress(show_progress: boolean): void;
    }

    module RadioBox {
        // Signal callback interfaces

        interface Changed {
            (): void;
        }

        // Constructor properties interface
    }

    class RadioBox extends Gtk.Bin {
        // Own properties of Egg-1.0.RadioBox

        active_id: string;
        activeId: string;
        readonly has_more: boolean;
        readonly hasMore: boolean;
        show_more: boolean;
        showMore: boolean;

        // Constructors of Egg-1.0.RadioBox

        static ['new'](): RadioBox;

        // Owm methods of Egg-1.0.RadioBox

        add_item(id: string, text: string): void;
        get_active_id(): string;
        set_active_id(id: string): void;
    }

    module ScrolledWindow {
        // Constructor properties interface
    }

    class ScrolledWindow extends Gtk.ScrolledWindow {}

    module SearchBar {
        // Signal callback interfaces

        interface Activate {
            (): void;
        }

        interface Reveal {
            (): void;
        }

        // Constructor properties interface
    }

    class SearchBar extends Gtk.Bin {
        // Own properties of Egg-1.0.SearchBar

        search_mode_enabled: boolean;
        searchModeEnabled: boolean;
        show_close_button: boolean;
        showCloseButton: boolean;

        // Constructors of Egg-1.0.SearchBar

        static ['new'](): SearchBar;

        // Owm methods of Egg-1.0.SearchBar

        get_entry(): Gtk.SearchEntry;
        get_search_mode_enabled(): boolean;
        get_show_close_button(): boolean;
        set_search_mode_enabled(search_mode_enabled: boolean): void;
        set_show_close_button(show_close_button: boolean): void;
    }

    module SettingsFlagAction {
        // Constructor properties interface
    }

    class SettingsFlagAction extends GObject.Object {
        // Own properties of Egg-1.0.SettingsFlagAction

        flag_nick: string;
        flagNick: string;
        schema_id: string;
        schemaId: string;
        schema_key: string;
        schemaKey: string;

        // Owm methods of Egg-1.0.SettingsFlagAction

        /**
         * This creates a new action that can be used to toggle an individual flag in
         * a #GSettings key which is of a flags type.
         * @param schema_id
         * @param schema_key
         * @param flag_nick
         */
        static ['new'](schema_id: string, schema_key: string, flag_nick: string): Gio.Action;
    }

    module SettingsSandwich {
        // Constructor properties interface
    }

    class SettingsSandwich extends GObject.Object {
        // Own properties of Egg-1.0.SettingsSandwich

        path: string;
        schema_id: string;
        schemaId: string;

        // Constructors of Egg-1.0.SettingsSandwich

        static ['new'](schema_id: string, path: string): SettingsSandwich;

        // Owm methods of Egg-1.0.SettingsSandwich

        append(settings: Gio.Settings): void;
        bind(key: string, object: any | null, property: string, flags: Gio.SettingsBindFlags): void;
        /**
         * Creates a new binding similar to g_settings_bind_with_mapping() but applying
         * from the resolved value via the settings sandwich.
         * @param key the settings key to bind. @object (type GObject.Object): the target object.
         * @param object
         * @param property the property on @object to apply.
         * @param flags flags for the binding.
         * @param get_mapping the get mapping function
         * @param set_mapping the set mapping function
         */
        bind_with_mapping(
            key: string,
            object: any | null,
            property: string,
            flags: Gio.SettingsBindFlags,
            get_mapping: Gio.SettingsBindGetMapping,
            set_mapping: Gio.SettingsBindSetMapping,
        ): void;
        get_boolean(key: string): boolean;
        get_default_value(key: string): GLib.Variant;
        get_double(key: string): number;
        get_int(key: string): number;
        get_string(key: string): string;
        get_uint(key: string): number;
        get_user_value(key: string): GLib.Variant;
        get_value(key: string): GLib.Variant;
        set_boolean(key: string, val: boolean): void;
        set_double(key: string, val: number): void;
        set_int(key: string, val: number): void;
        set_string(key: string, val: string): void;
        set_uint(key: string, val: number): void;
        set_value(key: string, value: GLib.Variant): void;
        unbind(property: string): void;
    }

    module SignalGroup {
        // Signal callback interfaces

        interface Bind {
            (instance: GObject.Object): void;
        }

        interface Unbind {
            (): void;
        }

        // Constructor properties interface
    }

    /**
     * #EggSignalGroup manages to simplify the process of connecting
     * many signals to a #GObject as a group. As such there is no API
     * to disconnect a signal from the group.
     *
     * In particular, this allows you to:
     *
     *  - Change the target instance, which automatically causes disconnection
     *    of the signals from the old instance and connecting to the new instance.
     *  - Block and unblock signals as a group
     *  - Ensuring that blocked state transfers across target instances.
     *
     * One place you might want to use such a structure is with #GtkTextView and
     * #GtkTextBuffer. Often times, you'll need to connect to many signals on
     * #GtkTextBuffer from a #GtkTextView subclass. This allows you to create a
     * signal group during instance construction, simply bind the
     * #GtkTextView:buffer property to #EggSignalGroup:target and connect
     * all the signals you need. When the #GtkTextView:buffer property changes
     * all of the signals will be transitioned correctly.
     */
    class SignalGroup extends GObject.Object {
        // Own properties of Egg-1.0.SignalGroup

        /**
         * The target instance used when connecting signals.
         */
        target: GObject.Object;
        /**
         * The GType of the target property.
         */
        target_type: GObject.GType;
        /**
         * The GType of the target property.
         */
        targetType: GObject.GType;

        // Constructors of Egg-1.0.SignalGroup

        static ['new'](target_type: GObject.GType): SignalGroup;

        // Owm methods of Egg-1.0.SignalGroup

        /**
         * Blocks all signal handlers managed by `self` so they will not
         * be called during any signal emissions. Must be unblocked exactly
         * the same number of times it has been blocked to become active again.
         *
         * This blocked state will be kept across changes of the target instance.
         *
         * See: g_signal_handler_block().
         */
        block(): void;
        /**
         * Connects `callback` to the signal `detailed_signal`
         * on the target instance of `self`.
         *
         * See: g_signal_connect_data().
         * @param detailed_signal a string of the form "signal-name::detail"
         * @param c_handler the #GCallback to connect
         * @param notify function to be called when disposing of @self
         * @param flags the flags used to create the signal connection
         */
        connect_data(
            detailed_signal: string,
            c_handler: GObject.Callback,
            notify: GObject.ClosureNotify,
            flags: GObject.ConnectFlags,
        ): void;
        /**
         * Connects `callback` to the signal `detailed_signal`
         * on the target instance of `self`.
         *
         * The instance on which the signal is emitted and `data`
         * will be swapped when calling `callback`.
         *
         * See: g_signal_connect_swapped().
         * @param detailed_signal a string of the form "signal-name::detail"
         * @param c_handler the #GCallback to connect
         */
        connect_swapped(detailed_signal: string, c_handler: GObject.Callback): void;
        /**
         * Gets the target instance used when connecting signals.
         * @returns The target instance.
         */
        get_target<T = GObject.Object>(): T;
        /**
         * Sets the target instance used when connecting signals. Any signal
         * that has been registered with egg_signal_group_connect_object() or
         * similar functions will be connected to this object.
         *
         * If the target instance was previously set, signals will be
         * disconnected from that object prior to connecting to `target`.
         * @param target The target instance used     when connecting signals.
         */
        set_target(target?: GObject.Object | null): void;
        /**
         * Unblocks all signal handlers managed by `self` so they will be
         * called again during any signal emissions unless it is blocked
         * again. Must be unblocked exactly the same number of times it
         * has been blocked to become active again.
         *
         * See: g_signal_handler_unblock().
         */
        unblock(): void;
    }

    module SimpleLabel {
        // Constructor properties interface
    }

    class SimpleLabel extends Gtk.Widget {
        // Own properties of Egg-1.0.SimpleLabel

        label: string;
        width_chars: number;
        widthChars: number;
        xalign: number;

        // Constructors of Egg-1.0.SimpleLabel

        static ['new'](label: string): SimpleLabel;

        // Owm methods of Egg-1.0.SimpleLabel

        get_label(): string;
        get_width_chars(): number;
        get_xalign(): number;
        set_label(label: string): void;
        set_width_chars(width_chars: number): void;
        set_xalign(xalign: number): void;
    }

    module SimplePopover {
        // Signal callback interfaces

        interface Activate {
            (text: string): void;
        }

        interface Changed {
            (): void;
        }

        interface InsertText {
            (position: number, chars: string, n_chars: number): boolean;
        }

        // Constructor properties interface
    }

    class SimplePopover extends Gtk.Popover {
        // Own properties of Egg-1.0.SimplePopover

        button_text: string;
        buttonText: string;
        message: string;
        ready: boolean;
        text: string;
        title: string;

        // Constructors of Egg-1.0.SimplePopover

        static ['new'](): SimplePopover;

        // Owm methods of Egg-1.0.SimplePopover

        get_button_text(): string;
        get_message(): string;
        get_ready(): boolean;
        get_text(): string;
        get_title(): string;
        set_button_text(button_text: string): void;
        set_message(message: string): void;
        set_ready(ready: boolean): void;
        set_text(text: string): void;
        set_title(title: string): void;
    }

    module Slider {
        // Constructor properties interface
    }

    class Slider extends Gtk.Container {
        // Own properties of Egg-1.0.Slider

        position: SliderPosition;

        // Constructors of Egg-1.0.Slider

        static ['new'](): Slider;

        // Owm methods of Egg-1.0.Slider

        add_slider(widget: Gtk.Widget, position: SliderPosition): void;
        get_position(): SliderPosition;
        set_position(position: SliderPosition): void;
    }

    module StateMachine {
        // Constructor properties interface
    }

    class StateMachine extends GObject.Object {
        // Own properties of Egg-1.0.StateMachine

        state: string;

        // Constructors of Egg-1.0.StateMachine

        static ['new'](): StateMachine;

        // Owm methods of Egg-1.0.StateMachine

        add_binding(
            state: string,
            source_object: any | null,
            source_property: string,
            target_object: any | null,
            target_property: string,
            flags: GObject.BindingFlags,
        ): void;
        add_propertyv(state: string, object: any | null, property: string, value: GObject.Value): void;
        add_style(state: string, widget: Gtk.Widget, style: string): void;
        /**
         * Creates a new #GAction with the name of `name`.
         *
         * Setting the state of this action will toggle the state of the state machine.
         * You should use g_variant_new_string() or similar to create the state.
         * @param name the name of the action.
         * @returns A newly created #GAction.
         */
        create_action(name: string): Gio.Action;
        /**
         * Gets the #EggStateMachine:state property. This is the name of the
         * current state of the machine.
         * @returns The current state of the machine.
         */
        get_state(): string;
        /**
         * Sets the #EggStateMachine:state property.
         *
         * Registered state transformations will be applied during the state
         * transformation.
         *
         * If the transition results in a cyclic operation, the state will stop at
         * the last state before the cycle was detected.
         * @param state
         */
        set_state(state: string): void;
    }

    module Suggestion {
        // Signal callback interfaces

        interface ReplaceTypedText {
            (object: string): string;
        }

        interface SuggestSuffix {
            (object: string): string;
        }

        // Constructor properties interface
    }

    class Suggestion extends GObject.Object {
        // Own properties of Egg-1.0.Suggestion

        icon_name: string;
        iconName: string;
        id: string;
        subtitle: string;
        title: string;

        // Constructors of Egg-1.0.Suggestion

        static ['new'](): Suggestion;

        // Owm methods of Egg-1.0.Suggestion

        get_icon_name(): string;
        get_id(): string;
        get_subtitle(): string;
        get_title(): string;
        /**
         * This function is meant to be used to replace the text in the entry with text
         * that represents the suggestion most accurately. This happens when the user
         * presses tab while typing a suggestion. For example, if typing "gno" in the
         * entry, you might have a suggest_suffix of "me.org" so that the user sees
         * "gnome.org". But the replace_typed_text might include more data such as
         * "https://gnome.org" as it more closely represents the suggestion.
         * @param typed_text the text that was typed into the entry
         * @returns The replacement text to insert into   the entry when "tab" is pressed to complete the insertion.
         */
        replace_typed_text(typed_text: string): string | null;
        set_icon_name(icon_name: string): void;
        set_id(id: string): void;
        set_subtitle(subtitle: string): void;
        set_title(title: string): void;
        /**
         * This function requests potential text to append to `typed_text` to make it
         * more clear to the user what they will be activating by selecting this
         * suggestion. For example, if they start typing "gno", a potential suggested
         * suffix might be "me.org" to create "gnome.org".
         * @param typed_text The user entered text
         * @returns Suffix to append to @typed_text   or %NULL to leave it unchanged.
         */
        suggest_suffix(typed_text: string): string | null;
    }

    module SuggestionEntry {
        // Signal callback interfaces

        interface ActivateSuggestion {
            (): void;
        }

        interface HideSuggestions {
            (): void;
        }

        interface MoveSuggestion {
            (amount: number): void;
        }

        interface ShowSuggestions {
            (): void;
        }

        interface SuggestionActivated {
            (object: Suggestion): void;
        }

        // Constructor properties interface
    }

    class SuggestionEntry extends Gtk.Entry {
        // Own properties of Egg-1.0.SuggestionEntry

        model: Gio.ListModel;
        readonly typed_text: string;
        readonly typedText: string;

        // Constructors of Egg-1.0.SuggestionEntry

        static ['new'](): SuggestionEntry;

        // Owm methods of Egg-1.0.SuggestionEntry

        /**
         * Gets the model being visualized.
         * @returns A #GListModel or %NULL.
         */
        get_model(): Gio.ListModel | null;
        /**
         * Gets the currently selected suggestion.
         * @returns An #EggSuggestion or %NULL.
         */
        get_suggestion(): Suggestion | null;
        get_typed_text(): string;
        set_model(model: Gio.ListModel): void;
        set_suggestion(suggestion: Suggestion): void;
    }

    module SuggestionEntryBuffer {
        // Constructor properties interface
    }

    class SuggestionEntryBuffer extends Gtk.EntryBuffer {
        // Own properties of Egg-1.0.SuggestionEntryBuffer

        suggestion: Suggestion;

        // Constructors of Egg-1.0.SuggestionEntryBuffer

        static ['new'](): SuggestionEntryBuffer;

        // Owm methods of Egg-1.0.SuggestionEntryBuffer

        commit(): void;
        /**
         * Gets the #EggSuggestion that is the current "preview suffix" of the
         * text in the entry.
         * @returns An #EggSuggestion or %NULL.
         */
        get_suggestion(): Suggestion | null;
        get_typed_length(): number;
        get_typed_text(): string;
        /**
         * Sets the current suggestion for the entry buffer.
         *
         * The suggestion is used to get a potential suffix for the current entry
         * text. This allows the entry to show "preview text" after the entered
         * text for what might be inserted should they activate the current item.
         * @param suggestion An #EggSuggestion or %NULL
         */
        set_suggestion(suggestion?: Suggestion | null): void;
    }

    module SuggestionPopover {
        // Signal callback interfaces

        interface SuggestionActivated {
            (object: Suggestion): void;
        }

        // Constructor properties interface
    }

    class SuggestionPopover extends Gtk.Window {
        // Own properties of Egg-1.0.SuggestionPopover

        model: Suggestion;
        relative_to: Gtk.Widget;
        relativeTo: Gtk.Widget;
        selected: Suggestion;

        // Constructors of Egg-1.0.SuggestionPopover

        static ['new'](): SuggestionPopover;

        // Owm methods of Egg-1.0.SuggestionPopover

        activate_selected(): void;
        /**
         * Gets the model being visualized.
         * @returns A #GListModel or %NULL.
         */
        get_model(): Gio.ListModel | null;
        get_relative_to(): Gtk.Widget | null;
        /**
         * Gets the currently selected suggestion.
         * @returns An #EggSuggestion or %NULL.
         */
        get_selected(): Suggestion | null;
        move_by(amount: number): void;
        popdown(): void;
        popup(): void;
        set_model(model: Gio.ListModel): void;
        set_relative_to(widget: Gtk.Widget): void;
        set_selected(suggestion: Suggestion): void;
    }

    module SuggestionRow {
        // Constructor properties interface
    }

    class SuggestionRow extends Gtk.ListBoxRow {
        // Own properties of Egg-1.0.SuggestionRow

        suggestion: Suggestion;

        // Constructors of Egg-1.0.SuggestionRow

        static ['new'](): SuggestionRow;

        // Owm methods of Egg-1.0.SuggestionRow

        /**
         * Gets the suggestion to be displayed.
         * @returns An #EggSuggestion
         */
        get_suggestion(): Suggestion;
        set_suggestion(suggestion: Suggestion): void;
    }

    module TaskCache {
        // Constructor properties interface
    }

    class TaskCache extends GObject.Object {
        // Own properties of Egg-1.0.TaskCache

        key_copy_func: any;
        keyCopyFunc: any;
        key_destroy_func: any;
        keyDestroyFunc: any;
        key_equal_func: any;
        keyEqualFunc: any;
        key_hash_func: any;
        keyHashFunc: any;
        populate_callback: any;
        populateCallback: any;
        populate_callback_data: any;
        populateCallbackData: any;
        populate_callback_data_destroy: any;
        populateCallbackDataDestroy: any;
        /**
         * This is the number of milliseconds before an item should be evicted
         * from the cache.
         *
         * A value of zero indicates no eviction.
         */
        time_to_live: number;
        /**
         * This is the number of milliseconds before an item should be evicted
         * from the cache.
         *
         * A value of zero indicates no eviction.
         */
        timeToLive: number;
        value_copy_func: any;
        valueCopyFunc: any;
        value_destroy_func: any;
        valueDestroyFunc: any;

        // Owm methods of Egg-1.0.TaskCache

        evict(key?: any | null): boolean;
        evict_all(): void;
        get_async(
            key: any | null,
            force_update: boolean,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Finish a call to egg_task_cache_get_async().
         * @param result
         * @returns The result from the cache.
         */
        get_finish(result: Gio.AsyncResult): any | null;
        /**
         * Peeks to see `key` is contained in the cache and returns the
         * matching #GObject if it does.
         *
         * The reference count of the resulting #GObject is not incremented.
         * For that reason, it is important to remember that this function
         * may only be called from the main thread.
         * @param key The key for the cache
         * @returns A #GObject or   %NULL if the key was not found in the cache.
         */
        peek<T = GObject.Object>(key?: any | null): T;
        set_name(name: string): void;
    }

    module ThreeGrid {
        // Constructor properties interface
    }

    class ThreeGrid extends Gtk.Container {
        // Own properties of Egg-1.0.ThreeGrid

        column_spacing: number;
        columnSpacing: number;
        row_spacing: number;
        rowSpacing: number;

        // Constructors of Egg-1.0.ThreeGrid

        static ['new'](): ThreeGrid;
    }

    module WidgetActionGroup {
        // Constructor properties interface
    }

    class WidgetActionGroup extends GObject.Object {
        // Own properties of Egg-1.0.WidgetActionGroup

        widget: Gtk.Widget;

        // Owm methods of Egg-1.0.WidgetActionGroup

        /**
         * Helper function to create an #EggWidgetActionGroup and attach
         * it to `widget` using the group name `group_name`.
         * @param widget A #GtkWidget
         * @param group_name the group name to use for the action group
         */
        static attach(widget: Gtk.Widget, group_name: string): void;
        static ['new'](widget: Gtk.Widget): Gio.ActionGroup;

        // Owm methods of Egg-1.0.WidgetActionGroup

        set_action_enabled(action_name: string, enabled: boolean): void;
    }

    class AnimationClass {}

    class BindingGroupClass {}

    class BoxClass {}

    class CenteringBinClass {}

    class ColumnLayoutClass {}

    class Counter {
        // Own fields of Egg-1.0.Counter

        values: CounterValue;
        category: string;
        name: string;
        description: string;

        // Constructors of Egg-1.0.Counter

        constructor(
            properties?: Partial<{
                category: string;
                name: string;
                description: string;
            }>,
        );

        // Owm methods of Egg-1.0.Counter

        get(): number;
        reset(): void;
    }

    class CounterArena {
        // Constructors of Egg-1.0.CounterArena

        constructor(pid: GLib.Pid);

        static new_for_pid(pid: GLib.Pid): CounterArena;

        // Owm methods of Egg-1.0.CounterArena

        static get_default(): CounterArena;

        // Owm methods of Egg-1.0.CounterArena

        /**
         * Calls `func` for every counter found in `area`.
         * @param func A callback to execute
         */
        foreach(func: CounterForeachFunc): void;
        ref(): CounterArena;
        register(counter: Counter): void;
        unref(): void;
    }

    class CounterValue {
        // Own fields of Egg-1.0.CounterValue

        value: number;
        padding: number[];

        // Constructors of Egg-1.0.CounterValue

        constructor(
            properties?: Partial<{
                value: number;
                padding: number[];
            }>,
        );
    }

    class ElasticBinClass {}

    class EmptyStateClass {}

    class EntryBoxClass {}

    class FileChooserEntryClass {}

    /**
     * Heaps are similar to a partially sorted tree but implemented as an
     * array. They allow for efficient O(1) lookup of the highest priority
     * item as it will always be the first item of the array.
     *
     * To create a new heap use egg_heap_new().
     *
     * To add items to the heap, use egg_heap_insert_val() or
     * egg_heap_insert_vals() to insert in bulk.
     *
     * To access an item in the heap, use egg_heap_index().
     *
     * To remove an arbitrary item from the heap, use egg_heap_extract_index().
     *
     * To remove the highest priority item in the heap, use egg_heap_extract().
     *
     * To free a heap, use egg_heap_unref().
     *
     * Here is an example that stores integers in a #EggHeap:
     *
     * ```c
     * static int
     * cmpint (gconstpointer a,
     *         gconstpointer b)
     * {
     *   return *(const gint *)a - *(const gint *)b;
     * }
     *
     * int
     * main (gint   argc,
     *       gchar *argv[])
     * {
     *   EggHeap *heap;
     *   gint i;
     *   gint v;
     *
     *   heap = egg_heap_new (sizeof (gint), cmpint);
     *
     *   for (i = 0; i < 10000; i++)
     *     egg_heap_insert_val (heap, i);
     *   for (i = 0; i < 10000; i++)
     *     egg_heap_extract (heap, &v);
     *
     *   egg_heap_unref (heap);
     * }
     * ```
     *
     */
    class Heap {
        // Own fields of Egg-1.0.Heap

        data: string;
        len: number;

        // Constructors of Egg-1.0.Heap

        constructor(
            properties?: Partial<{
                data: string;
                len: number;
            }>,
        );

        static ['new'](element_size: number, compare_func: GLib.CompareFunc): Heap;

        // Owm methods of Egg-1.0.Heap

        extract(result?: any | null): boolean;
        extract_index(index_: number, result?: any | null): boolean;
        insert_vals(data: any | null, len: number): void;
        /**
         * Increments the reference count of `heap` by one.
         * @returns @heap
         */
        ref(): Heap;
        /**
         * Decrements the reference count of `heap` by one, freeing the structure
         * when the reference count reaches zero.
         */
        unref(): void;
    }

    class ListBoxClass {}

    class MenuManagerClass {}

    class PillBoxClass {}

    class PriorityBoxClass {}

    class ProgressButtonClass {}

    class RadioBoxClass {}

    class ScrolledWindowClass {}

    class SearchBarClass {}

    class SettingsFlagActionClass {}

    class SettingsSandwichClass {}

    class SignalGroupClass {}

    class SimpleLabelClass {}

    class SimplePopoverClass {}

    class SliderClass {}

    class StateMachineClass {}

    class SuggestionClass {}

    class SuggestionEntryBufferClass {}

    class SuggestionEntryClass {}

    class SuggestionPopoverClass {}

    class SuggestionRowClass {}

    class TaskCacheClass {}

    class ThreeGridClass {}

    class WidgetActionGroupClass {}

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

export default Egg;
// END
