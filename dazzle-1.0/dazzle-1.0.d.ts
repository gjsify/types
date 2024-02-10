/*
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in `ts-for-gir` or create a bug report on https://github.com/gjsify/ts-for-gir
 */

import './dazzle-1.0-ambient.d.ts';
import './dazzle-1.0-import.d.ts';
/**
 * Dazzle-1.0
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
import type GModule from '@girs/gmodule-2.0';
import type GdkPixbuf from '@girs/gdkpixbuf-2.0';
import type Atk from '@girs/atk-1.0';

export namespace Dazzle {
    enum AnimationMode {
        LINEAR,
        EASE_IN_QUAD,
        EASE_IN_OUT_QUAD,
        EASE_OUT_QUAD,
        EASE_IN_CUBIC,
        EASE_OUT_CUBIC,
        EASE_IN_OUT_CUBIC,
    }
    enum DockRevealerTransitionType {
        NONE,
        SLIDE_RIGHT,
        SLIDE_LEFT,
        SLIDE_UP,
        SLIDE_DOWN,
    }
    enum ShortcutMatch {
        NONE,
        EQUAL,
        PARTIAL,
    }
    /**
     * DzlShortcutType specifies the kind of shortcut that is being described.
     * More values may be added to this enumeration over time.
     */
    enum ShortcutType {
        /**
         * The shortcut is a keyboard accelerator. The #DzlShortcutsShortcut:accelerator
         *   property will be used.
         */
        ACCELERATOR,
        /**
         * The shortcut is a pinch gesture. GTK+ provides an icon and subtitle.
         */
        GESTURE_PINCH,
        /**
         * The shortcut is a stretch gesture. GTK+ provides an icon and subtitle.
         */
        GESTURE_STRETCH,
        /**
         * The shortcut is a clockwise rotation gesture. GTK+ provides an icon and subtitle.
         */
        GESTURE_ROTATE_CLOCKWISE,
        /**
         * The shortcut is a counterclockwise rotation gesture. GTK+ provides an icon and subtitle.
         */
        GESTURE_ROTATE_COUNTERCLOCKWISE,
        /**
         * The shortcut is a two-finger swipe gesture. GTK+ provides an icon and subtitle.
         */
        GESTURE_TWO_FINGER_SWIPE_LEFT,
        /**
         * The shortcut is a two-finger swipe gesture. GTK+ provides an icon and subtitle.
         */
        GESTURE_TWO_FINGER_SWIPE_RIGHT,
        /**
         * The shortcut is a gesture. The #DzlShortcutsShortcut:icon property will be
         *   used.
         */
        GESTURE,
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
    enum TitlebarAnimation {
        HIDDEN,
        SHOWING,
        SHOWN,
        HIDING,
    }
    enum TreeDropPosition {
        INTO,
        BEFORE,
        AFTER,
    }
    const COUNTER_REQUIRES_ATOMIC: number;
    const DOCK_BIN_STYLE_CLASS_PINNED: string;
    const ENABLE_TRACE: number;
    /**
     * Dzl major version component (e.g. 1 if %DZL_VERSION is 1.2.3)
     */
    const MAJOR_VERSION: number;
    /**
     * Dzl micro version component (e.g. 3 if %DZL_VERSION is 1.2.3)
     */
    const MICRO_VERSION: number;
    /**
     * Dzl minor version component (e.g. 2 if %DZL_VERSION is 1.2.3)
     */
    const MINOR_VERSION: number;
    /**
     * Dazzle version, encoded as a string, useful for printing and
     * concatenation.
     */
    const VERSION_S: string;
    /**
     * `cr` a cairo context
     * Creates a region from the extents of the context's current clip area.
     * @param cr
     * @returns A #CairoRegion.
     */
    function cairo_region_create_from_clip_extents(cr: cairo.Context): cairo.Region;
    /**
     * Adds a rounded rectangle to `cr'`s current path.
     * @param cr a cairo context
     * @param rect a #GdkRectangle to draw
     * @param x_radius the radius of the corners on the X axis
     * @param y_radius the radius of the corners on the Y axis
     */
    function cairo_rounded_rectangle(cr: cairo.Context, rect: Gdk.Rectangle, x_radius: number, y_radius: number): void;
    /**
     * If both `self` and `other` are not %NULL, then the cancellation of
     * `other` will be propagated to `self` if `other` is cancelled.
     *
     * If `self` and `other` are the same, `self` is returned and no additional
     * chaining will occur.
     *
     * If `self` and `other` are %NULL, then %NULL is returned.
     * If `self` is non-%NULL, it will be returned.
     * If `self` is %NULL and `other` is non-%NULL, other will be
     * returned. This is useful to succinctly chain cancellables like:
     *
     *
     * ```
     * cancellable = dzl_cancellable_chain (cancellable, self-&gt;cancellable);
     * ```
     *
     * @param self a #GCancellable or %NULL
     * @param other a #GCancellable or %NULL
     * @returns a #GCancellable or %NULL
     */
    function cancellable_chain(self?: Gio.Cancellable | null, other?: Gio.Cancellable | null): Gio.Cancellable | null;
    function counter_arena_get_default(): CounterArena;
    /**
     * Create a list of valid uri's from a uri-list drop.
     * @param selection_data the #GtkSelectionData from drag_data_received
     * @returns a string array which will hold the uris or   %NULL if there were no valid uris. g_strfreev should be used when   the string array is no longer used
     */
    function dnd_get_uri_list(selection_data: Gtk.SelectionData): string[];
    function file_manager_show(file: Gio.File): boolean;
    /**
     * Creates a new frame source that will execute when the timeout interval
     * for the source has elapsed. The timing will try to synchronize based
     * on the end time of the animation.
     * @param frames_per_sec Target frames per second.
     * @param callback A #GSourceFunc to execute.
     * @returns A source id that can be removed with g_source_remove().
     */
    function frame_source_add(frames_per_sec: number, callback: GLib.SourceFunc): number;
    function frame_source_add_full(priority: number, frames_per_sec: number, callback: GLib.SourceFunc): number;
    function fuzzy_highlight(str: string, query: string, case_sensitive: boolean): string;
    /**
     * Helper function to create a human-friendly string describing approximately
     * how long ago a #GDateTime is.
     * @param self A #GDateTime
     * @returns A newly allocated string describing the   date and time imprecisely such as "Yesterday".
     */
    function g_date_time_format_for_display(self: GLib.DateTime): string;
    /**
     * Creates a string describing the time span in hours, minutes, and seconds.
     * For example, a time span of three and a half minutes would be "3:30".
     * 2 days, 3 hours, 6 minutes, and 20 seconds would be "51:06:20".
     * @param span the span of time
     * @returns A newly allocated string describing the time span.
     */
    function g_time_span_to_label(span: GLib.TimeSpan): string;
    /**
     * A #GBindingTransformFunc to transform a time span into a string label using
     * dzl_g_time_span_to_label().
     * @param binding
     * @param from_value
     * @param to_value
     * @param user_data
     */
    function g_time_span_to_label_mapping(
        binding: GObject.Binding,
        from_value: GObject.Value,
        to_value: GObject.Value,
        user_data?: any | null,
    ): boolean;
    function g_variant_hash(data?: any | null): number;
    function get_current_cpu_call(): number;
    /**
     * This function will binary search the contents of `store` looking for the
     * location to insert a new row.
     *
     * `compare_column` must be the index of a column that is a %G_TYPE_POINTER,
     * %G_TYPE_BOXED or %G_TYPE_OBJECT based column.
     *
     * `compare_func` will be called with `key` as the first parameter and the
     * value from the #GtkListStore row as the second parameter. The third and
     * final parameter is `compare_data`.
     * @param store A #GtkListStore
     * @param key A key to compare to when binary searching
     * @param compare_column the column containing the data to compare
     * @param compare_func A callback to compare
     */
    function gtk_list_store_insert_sorted(
        store: Gtk.ListStore,
        key: any | null,
        compare_column: number,
        compare_func: GLib.CompareDataFunc,
    ): void;
    /**
     * Like gtk_text_buffer_remove_tag() but allows specifying that the tags
     * should be removed one at a time to avoid over-damaging the views
     * displaying `buffer`.
     * @param buffer
     * @param tag
     * @param start
     * @param end
     * @param minimal_damage
     */
    function gtk_text_buffer_remove_tag(
        buffer: Gtk.TextBuffer,
        tag: Gtk.TextTag,
        start: Gtk.TextIter,
        end: Gtk.TextIter,
        minimal_damage: boolean,
    ): void;
    function gtk_widget_action(widget: Gtk.Widget, group: string, name: string, param: GLib.Variant): boolean;
    function gtk_widget_action_with_string(widget: Gtk.Widget, group: string, name: string, param: string): boolean;
    function gtk_widget_add_style_class(widget: Gtk.Widget, class_name: string): void;
    /**
     * Tries to locate a widget in a hierarchy given it's #GType.
     *
     * There is not an efficient implementation of this method, so use it
     * only when the hierarchy of widgets is small.
     * @param widget
     * @param type
     * @returns A widget or %NULL
     */
    function gtk_widget_find_child_typed(widget: Gtk.Widget, type: GObject.GType): Gtk.Widget | null;
    /**
     * This is similar to gtk_widget_get_ancestor(), but looks for relatives
     * via properties such as #GtkPopover:relative-to and others.
     * @param widget a #GtkWidget
     * @param relative_type the type of widget to locate
     * @returns A #GtkWidget or %NULL.
     */
    function gtk_widget_get_relative(widget: Gtk.Widget, relative_type: GObject.GType): Gtk.Widget | null;
    function gtk_widget_hide_with_fade(widget: Gtk.Widget): void;
    /**
     * This function is like gtk_widget_is_ancestor() except that it checks
     * various relative widgets that are not in the direct hierarchy of
     * widgets. That includes #GtkMenu:attach-widget,
     * #GtkPopover:relative-to, and #GtkWindow:transient-for.
     * @param widget a #GtkWidget
     * @param ancestor a #GtkWidget that might be an ancestor
     * @returns %TRUE if @ancestor is an ancestor or relative for @widget.
     */
    function gtk_widget_is_ancestor_or_relative(widget: Gtk.Widget, ancestor: Gtk.Widget): boolean;
    /**
     * This function will find all of the actions on `from_widget` in various
     * groups and add them to `widget`. As this just copies the action groups
     * over, note that it does not allow for muxing items within the same
     * group.
     *
     * You should specify a key for `mux_key` so that if the same mux key is
     * seen again, the previous muxings will be removed.
     * @param widget a #GtkWidget
     * @param from_widget A #GtkWidget containing the groups to copy
     * @param mux_key a unique key to represent the muxing
     */
    function gtk_widget_mux_action_groups(widget: Gtk.Widget, from_widget: Gtk.Widget, mux_key?: string | null): void;
    function gtk_widget_remove_style_class(widget: Gtk.Widget, class_name: string): void;
    function gtk_widget_show_with_fade(widget: Gtk.Widget): void;
    function levenshtein(needle: string, haystack: string): number;
    function overlay_add_child(self: DockOverlay, child: Gtk.Widget, type: string): void;
    /**
     * This function will generate CSS suitable for Gtk's CSS engine
     * based on the properties of the #PangoFontDescription.
     * @param font_desc
     * @returns A newly allocated string containing the    CSS describing the font description.
     */
    function pango_font_description_to_css(font_desc: Pango.FontDescription): string;
    /**
     * Creates a shade of the color `rgba` by multiplying its saturation and lightness by `k`.
     *
     * Values of `k` greater than 1 will make the color brighter, while values less than 1 will make it
     * darker. The alpha value will remain the same.
     * @param rgba a #GdkRGBA to shade
     * @param k the factor by which to shade the input color
     */
    function rgba_shade(rgba: Gdk.RGBA, k: number): void;
    function shortcut_chord_equal(data1?: any | null, data2?: any | null): boolean;
    function shortcut_chord_hash(data?: any | null): number;
    function shortcut_chord_table_get_type(): GObject.GType;
    interface CounterForeachFunc {
        (counter: Counter): void;
    }
    interface DirectoryModelVisibleFunc {
        (self: DirectoryModel, directory: Gio.File, file_info: Gio.FileInfo): boolean;
    }
    interface ListModelFilterFunc<A = GObject.Object> {
        (object: A): boolean;
    }
    interface RecursiveIgnoreFunc {
        (file: Gio.File): boolean;
    }
    interface ShortcutChordTableForeach {
        (chord: ShortcutChord, chord_data?: any | null): void;
    }
    interface StackListCreateWidgetFunc<A = GObject.Object> {
        (item: A): Gtk.Widget;
    }
    interface SuggestionPositionFunc {
        (entry: SuggestionEntry, area: Gdk.Rectangle, is_absolute: boolean): void;
    }
    interface TaskCacheCallback {
        (self: TaskCache, key: any | null, task: Gio.Task): void;
    }
    interface TreeFilterFunc {
        (tree: Tree, node: TreeNode): boolean;
    }
    interface TreeFindFunc {
        (tree: Tree, node: TreeNode, child: TreeNode): boolean;
    }
    interface TreeNodeCompareFunc {
        (a: TreeNode, b: TreeNode): number;
    }
    interface TrieTraverseFunc {
        (dzl_trie: Trie, key: string, value?: any | null): boolean;
    }
    enum FileTransferFlags {
        NONE,
        MOVE,
    }
    enum PropertiesFlags {
        NONE,
        STATEFUL_BOOLEANS,
    }
    enum ShortcutPhase {
        DISPATCH,
        /**
         * Indicates the capture phase of the shortcut
         *   activation. This allows parent widgets to intercept the keybinding before
         *   it is dispatched to the target #GdkWindow.
         */
        CAPTURE,
        BUBBLE,
        GLOBAL,
    }
    enum TabStyle {
        ICONS,
        TEXT,
        BOTH,
    }
    module Animation {
        // Signal callback interfaces

        interface Tick {
            (): void;
        }

        // Constructor properties interface
    }

    class Animation extends GObject.InitiallyUnowned {
        // Own properties of Dazzle-1.0.Animation

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

        // Owm methods of Dazzle-1.0.Animation

        static calculate_duration(monitor: Gdk.Monitor, from_value: number, to_value: number): number;

        // Owm methods of Dazzle-1.0.Animation

        /**
         * Adds a new property to the set of properties to be animated during the
         * lifetime of the animation.
         *
         * Side effects: None.
         * @param pspec A #ParamSpec of @target or a #GtkWidget&lt;!-- --&gt;'s parent.
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
         * As a convenience, this function accepts %NULL for `animation` but
         * does nothing if that should occur.
         */
        stop(): void;
    }

    module Application {
        // Constructor properties interface
    }

    class Application extends Gtk.Application {
        // Own properties of Dazzle-1.0.Application

        readonly menu_manager: MenuManager;
        readonly menuManager: MenuManager;
        readonly shortcut_manager: ShortcutManager;
        readonly shortcutManager: ShortcutManager;
        readonly theme_manager: ThemeManager;
        readonly themeManager: ThemeManager;

        // Constructors of Dazzle-1.0.Application

        static ['new'](application_id: string, flags: Gio.ApplicationFlags): Application;

        // Owm methods of Dazzle-1.0.Application

        /**
         * This adds `resource_path` to the list of "automatic resources".
         *
         * If `resource_path` starts with "resource://", then the corresponding
         * #GResources path will be searched for resources. Otherwise, `resource_path`
         * should be a path to a location on disk.
         *
         * The #DzlApplication will locate resources such as CSS themes, icons, and
         * keyboard shortcuts using `resource_path`.
         * @param resource_path the location of the resources.
         */
        add_resources(resource_path: string): void;
        /**
         * Similar to gtk_application_get_menu_by_id() but takes into account
         * menu merging which could have occurred upon loading plugins.
         * @param menu_id the id of the menu to locate
         * @returns A #GMenu
         */
        get_menu_by_id(menu_id: string): Gio.Menu;
        /**
         * Gets the menu manager for the application.
         * @returns A #DzlMenuManager
         */
        get_menu_manager(): MenuManager;
        /**
         * Gets the #DzlShortcutManager for the application.
         * @returns A #DzlShortcutManager
         */
        get_shortcut_manager(): ShortcutManager;
        /**
         * Get the theme manager for the application.
         * @returns A #DzlThemeManager
         */
        get_theme_manager(): ThemeManager;
        /**
         * This attempts to undo as many side-effects as possible from a call to
         * dzl_application_add_resources().
         * @param resource_path the location of the resources.
         */
        remove_resources(resource_path: string): void;
    }

    module ApplicationWindow {
        // Constructor properties interface
    }

    class ApplicationWindow extends Gtk.ApplicationWindow {
        // Own properties of Dazzle-1.0.ApplicationWindow

        /**
         * The "fullscreen" property denotes if the window is in the fullscreen
         * state. The titlebar of the #DzlApplicationWindow contains a revealer
         * which will be repurposed into a floating bar while the window is in
         * the fullscreen mode.
         *
         * Set this property to %FALSE to unfullscreen.
         */
        fullscreen: boolean;
        readonly titlebar_animation: TitlebarAnimation;
        readonly titlebarAnimation: TitlebarAnimation;

        // Owm methods of Dazzle-1.0.ApplicationWindow

        /**
         * Gets if the window is in the fullscreen state.
         * @returns %TRUE if @self is fullscreen, otherwise %FALSE.
         */
        get_fullscreen(): boolean;
        /**
         * Gets the titlebar for the window, if there is one.
         * @returns A #GtkWidget or %NULL
         */
        get_titlebar(): Gtk.Widget;
        get_titlebar_animation(): TitlebarAnimation;
        /**
         * Sets the #DzlApplicationWindow into either the fullscreen or unfullscreen
         * state based on `fullscreen`.
         *
         * The titlebar for the window is contained within a #GtkRevealer which is
         * repurposed as a floating bar when the application is in fullscreen mode.
         *
         * See dzl_application_window_get_fullscreen() to get the current fullscreen
         * state.
         * @param fullscreen if the window should be in the fullscreen state
         */
        set_fullscreen(fullscreen: boolean): void;
        /**
         * Sets the titlebar for the window.
         *
         * Generally, you want to do this from your GTK ui template by setting
         * the &amp;lt;child type="titlebar"&amp;gt;
         * @param titlebar
         */
        set_titlebar(titlebar: Gtk.Widget): void;
    }

    module Bin {
        // Constructor properties interface
    }

    class Bin extends Gtk.Bin {
        // Constructors of Dazzle-1.0.Bin

        static ['new'](): Bin;
    }

    module BindingGroup {
        // Constructor properties interface
    }

    /**
     * #DzlBindingGroup manages to simplify the process of binding
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
        // Own properties of Dazzle-1.0.BindingGroup

        /**
         * The source object used for binding properties.
         */
        source: GObject.Object;

        // Constructors of Dazzle-1.0.BindingGroup

        static ['new'](): BindingGroup;

        // Owm methods of Dazzle-1.0.BindingGroup

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
         * dzl_binding_group_bind_property_full(), using #GClosures
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

    module BoldingLabel {
        // Constructor properties interface
    }

    class BoldingLabel extends Gtk.Label {
        // Own properties of Dazzle-1.0.BoldingLabel

        bold: boolean;

        // Constructors of Dazzle-1.0.BoldingLabel

        static ['new'](str: string, bold: boolean): BoldingLabel;

        static new_with_mnemonic(str: string, bold: boolean): BoldingLabel;

        // Owm methods of Dazzle-1.0.BoldingLabel

        set_bold(bold: boolean): void;
        set_weight(weight: Pango.Weight): void;
    }

    module Box {
        // Constructor properties interface
    }

    class Box extends Gtk.Box {
        // Own properties of Dazzle-1.0.Box

        max_width_request: number;
        maxWidthRequest: number;

        // Constructors of Dazzle-1.0.Box

        static ['new'](): Box;

        // Owm methods of Dazzle-1.0.Box

        get_max_width_request(): number;
        /**
         * Gets the nth child of `self`.
         * @param nth the index of the child starting from 0
         * @returns A #GtkWidget or %NULL
         */
        get_nth_child(nth: number): Gtk.Widget | null;
        set_max_width_request(max_width_request: number): void;
    }

    module BoxTheatric {
        // Constructor properties interface
    }

    class BoxTheatric extends GObject.Object {
        // Own properties of Dazzle-1.0.BoxTheatric

        alpha: number;
        background: string;
        height: number;
        icon: Gio.Icon;
        surface: any;
        target: Gtk.Widget;
        width: number;
        x: number;
        y: number;
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
        // Own properties of Dazzle-1.0.CenteringBin

        max_width_request: number;
        maxWidthRequest: number;

        // Constructors of Dazzle-1.0.CenteringBin

        static ['new'](): CenteringBin;
    }

    module ChildPropertyAction {
        // Constructor properties interface
    }

    class ChildPropertyAction extends GObject.Object {
        // Own properties of Dazzle-1.0.ChildPropertyAction

        readonly child: Gtk.Widget;
        readonly child_property_name: string;
        readonly childPropertyName: string;
        readonly container: Gtk.Container;

        // Owm methods of Dazzle-1.0.ChildPropertyAction

        /**
         * This creates a new #GAction that will change when the underlying child
         * property of `container` changes for `child`.
         * @param name the name of the action
         * @param container the container of the widget
         * @param child the widget for the child property
         * @param child_property_name the name of the child property
         */
        static new(name: string, container: Gtk.Container, child: Gtk.Widget, child_property_name: string): Gio.Action;
    }

    module ColumnLayout {
        // Constructor properties interface
    }

    class ColumnLayout extends Gtk.Container {
        // Own properties of Dazzle-1.0.ColumnLayout

        column_spacing: number;
        columnSpacing: number;
        column_width: number;
        columnWidth: number;
        max_columns: number;
        maxColumns: number;
        row_spacing: number;
        rowSpacing: number;

        // Constructors of Dazzle-1.0.ColumnLayout

        static ['new'](): ColumnLayout;

        // Owm methods of Dazzle-1.0.ColumnLayout

        get_column_spacing(): number;
        get_column_width(): number;
        get_max_columns(): number;
        get_row_spacing(): number;
        set_column_spacing(column_spacing: number): void;
        set_column_width(column_width: number): void;
        set_max_columns(max_columns: number): void;
        set_row_spacing(row_spacing: number): void;
    }

    module CountersWindow {
        // Constructor properties interface
    }

    class CountersWindow extends Gtk.Window {
        // Constructors of Dazzle-1.0.CountersWindow

        static ['new'](): CountersWindow;

        // Owm methods of Dazzle-1.0.CountersWindow

        /**
         * Gets the currently viewed arena, if any.
         * @returns A #DzlCounterArena or %NULL.
         */
        get_arena(): CounterArena | null;
        set_arena(arena: CounterArena): void;
    }

    module CpuGraph {
        // Constructor properties interface
    }

    class CpuGraph extends GraphView {
        // Own properties of Dazzle-1.0.CpuGraph

        max_samples: number;
        maxSamples: number;
        timespan: number;

        // Constructors of Dazzle-1.0.CpuGraph

        static new_full(timespan: number, max_samples: number): CpuGraph;
    }

    module CpuModel {
        // Constructor properties interface
    }

    class CpuModel extends GraphModel {
        // Constructors of Dazzle-1.0.CpuModel

        static ['new'](): CpuModel;
    }

    module CssProvider {
        // Constructor properties interface
    }

    class CssProvider extends Gtk.CssProvider {
        // Own properties of Dazzle-1.0.CssProvider

        base_path: string;
        basePath: string;

        // Constructors of Dazzle-1.0.CssProvider

        static ['new'](base_path: string): CssProvider;
    }

    module DirectoryModel {
        // Constructor properties interface
    }

    class DirectoryModel<A extends GObject.Object = GObject.Object> extends GObject.Object {
        // Own properties of Dazzle-1.0.DirectoryModel

        directory: Gio.File;

        // Owm methods of Dazzle-1.0.DirectoryModel

        /**
         * Creates a new #DzlDirectoryModel using `directory` as the directory to monitor.
         * @param directory A #GFile
         */
        static new(directory: Gio.File): Gio.ListModel;

        // Owm methods of Dazzle-1.0.DirectoryModel

        /**
         * Gets the directory the model is observing.
         * @returns A #GFile
         */
        get_directory(): Gio.File;
        set_directory(directory: Gio.File): void;
        set_visible_func(visible_func: DirectoryModelVisibleFunc): void;
    }

    module DirectoryReaper {
        // Signal callback interfaces

        interface RemoveFile {
            (file: Gio.File): void;
        }

        // Constructor properties interface
    }

    class DirectoryReaper extends GObject.Object {
        // Constructors of Dazzle-1.0.DirectoryReaper

        static ['new'](): DirectoryReaper;

        // Owm methods of Dazzle-1.0.DirectoryReaper

        add_directory(directory: Gio.File, min_age: GLib.TimeSpan): void;
        add_file(file: Gio.File, min_age: GLib.TimeSpan): void;
        add_glob(directory: Gio.File, glob: string, min_age: GLib.TimeSpan): void;
        execute(cancellable?: Gio.Cancellable | null): boolean;
        execute_async(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): void;
        execute_finish(result: Gio.AsyncResult): boolean;
    }

    module DockBin {
        // Constructor properties interface
    }

    class DockBin extends Gtk.Container {
        // Own properties of Dazzle-1.0.DockBin

        bottom_visible: boolean;
        bottomVisible: boolean;
        left_visible: boolean;
        leftVisible: boolean;
        right_visible: boolean;
        rightVisible: boolean;
        top_visible: boolean;
        topVisible: boolean;

        // Constructors of Dazzle-1.0.DockBin

        static ['new'](): DockBin;

        // Owm methods of Dazzle-1.0.DockBin

        get_bottom_edge(): Gtk.Widget;
        /**
         * Gets the center widget for the dock.
         * @returns A #GtkWidget or %NULL.
         */
        get_center_widget(): Gtk.Widget | null;
        get_left_edge(): Gtk.Widget;
        get_right_edge(): Gtk.Widget;
        get_top_edge(): Gtk.Widget;
    }

    module DockBinEdge {
        // Signal callback interfaces

        interface MoveToBinChild {
            (): void;
        }

        // Constructor properties interface
    }

    class DockBinEdge extends DockRevealer {
        // Own properties of Dazzle-1.0.DockBinEdge

        edge: Gtk.PositionType;

        // Owm methods of Dazzle-1.0.DockBinEdge

        get_edge(): Gtk.PositionType;
    }

    module DockManager {
        // Signal callback interfaces

        interface RegisterDock {
            (object: Dock): void;
        }

        interface UnregisterDock {
            (object: Dock): void;
        }

        // Constructor properties interface
    }

    class DockManager extends GObject.Object {
        // Constructors of Dazzle-1.0.DockManager

        static ['new'](): DockManager;

        // Owm methods of Dazzle-1.0.DockManager

        /**
         * Requests that the transient grab monitoring stop until
         * dzl_dock_manager_unpause_grabs() is called.
         *
         * This might be useful while setting up UI so that you don't focus
         * something unexpectedly.
         *
         * This function may be called multiple times and after an equivalent
         * number of calls to dzl_dock_manager_unpause_grabs(), transient
         * grab monitoring will continue.
         */
        pause_grabs(): void;
        register_dock(dock: Dock): void;
        release_transient_grab(): void;
        /**
         * Unpauses a previous call to dzl_dock_manager_pause_grabs().
         *
         * Once the pause count returns to zero, transient grab monitoring
         * will be restored.
         */
        unpause_grabs(): void;
        unregister_dock(dock: Dock): void;
    }

    module DockOverlay {
        // Signal callback interfaces

        interface HideEdges {
            (): void;
        }

        // Constructor properties interface
    }

    class DockOverlay extends Gtk.EventBox {
        // Constructors of Dazzle-1.0.DockOverlay

        static ['new'](): DockOverlay;

        // Owm methods of Dazzle-1.0.DockOverlay

        get_edge(position: Gtk.PositionType): DockOverlayEdge;
        get_edge_adjustment(position: Gtk.PositionType): Gtk.Adjustment;
    }

    module DockOverlayEdge {
        // Constructor properties interface
    }

    class DockOverlayEdge extends Bin {
        // Own properties of Dazzle-1.0.DockOverlayEdge

        edge: Gtk.PositionType;
        position: number;

        // Owm methods of Dazzle-1.0.DockOverlayEdge

        get_edge(): Gtk.PositionType;
        get_position(): number;
        set_edge(edge: Gtk.PositionType): void;
        set_position(position: number): void;
    }

    module DockPaned {
        // Constructor properties interface
    }

    class DockPaned extends MultiPaned {
        // Constructors of Dazzle-1.0.DockPaned

        static ['new'](): DockPaned;
    }

    module DockRevealer {
        // Constructor properties interface
    }

    /**
     * This widget is a bit like #GtkRevealer with a couple of important
     * differences. First, it only supports a couple transition types
     * (the direction to slide reveal). Additionally, the size of the
     * child allocation will not change during the animation. This is not
     * as generally useful as an upstream GTK+ widget, but is extremely
     * important for the panel case to avoid things looking strange while
     * animating into and out of view.
     */
    class DockRevealer extends Bin {
        // Own properties of Dazzle-1.0.DockRevealer

        readonly child_revealed: boolean;
        readonly childRevealed: boolean;
        position: number;
        position_set: boolean;
        positionSet: boolean;
        reveal_child: boolean;
        revealChild: boolean;
        transition_duration: number;
        transitionDuration: number;
        transition_type: DockRevealerTransitionType;
        transitionType: DockRevealerTransitionType;

        // Constructors of Dazzle-1.0.DockRevealer

        static ['new'](): DockRevealer;

        // Owm methods of Dazzle-1.0.DockRevealer

        animate_to_position(position: number, transition_duration: number): void;
        get_child_revealed(): boolean;
        get_position(): number;
        get_position_set(): boolean;
        get_reveal_child(): boolean;
        get_transition_duration(): number;
        get_transition_type(): DockRevealerTransitionType;
        /**
         * This is a helper to check if the revealer is animating. You probably don't
         * want to poll this function. Connect to notify::child-revealed or
         * notify::reveal-child instead.
         * @returns %TRUE if an animation is in progress.
         */
        is_animating(): boolean;
        set_position(position: number): void;
        set_position_set(position_set: boolean): void;
        set_reveal_child(reveal_child: boolean): void;
        set_transition_duration(transition_duration: number): void;
        set_transition_type(transition_type: DockRevealerTransitionType): void;
    }

    module DockStack {
        // Constructor properties interface
    }

    class DockStack extends Gtk.Box {
        // Own properties of Dazzle-1.0.DockStack

        edge: Gtk.PositionType;
        show_pinned_button: boolean;
        showPinnedButton: boolean;
        style: TabStyle;

        // Constructors of Dazzle-1.0.DockStack

        static ['new'](): DockStack;

        // Owm methods of Dazzle-1.0.DockStack

        get_edge(): Gtk.PositionType;
        get_show_pinned_button(): boolean;
        get_style(): TabStyle;
        set_edge(edge: Gtk.PositionType): void;
        set_show_pinned_button(show_pinned_button: boolean): void;
        set_style(style: TabStyle): void;
    }

    module DockTransientGrab {
        // Constructor properties interface
    }

    class DockTransientGrab extends GObject.Object {
        // Own properties of Dazzle-1.0.DockTransientGrab

        timeout: number;

        // Constructors of Dazzle-1.0.DockTransientGrab

        static ['new'](): DockTransientGrab;

        // Owm methods of Dazzle-1.0.DockTransientGrab

        acquire(): void;
        add_item(item: DockItem): void;
        cancel(): void;
        contains(item: DockItem): boolean;
        get_timeout(): number;
        is_descendant(widget: Gtk.Widget): boolean;
        release(): void;
        remove_item(item: DockItem): void;
        set_timeout(timeout: number): void;
        steal_common_ancestors(other: DockTransientGrab): void;
    }

    module DockWidget {
        // Constructor properties interface
    }

    class DockWidget extends Bin {
        // Own properties of Dazzle-1.0.DockWidget

        can_close: boolean;
        canClose: boolean;
        gicon: Gio.Icon;
        icon_name: string;
        iconName: string;
        manager: DockManager;
        title: string;

        // Constructors of Dazzle-1.0.DockWidget

        static ['new'](): DockWidget;

        // Owm methods of Dazzle-1.0.DockWidget

        set_gicon(gicon: Gio.Icon): void;
        set_icon_name(icon_name: string): void;
        set_title(title: string): void;
    }

    module DockWindow {
        // Constructor properties interface
    }

    class DockWindow extends Gtk.Window {
        // Constructors of Dazzle-1.0.DockWindow

        static ['new'](): DockWindow;
    }

    module ElasticBin {
        // Constructor properties interface
    }

    class ElasticBin extends Gtk.Bin {
        // Constructors of Dazzle-1.0.ElasticBin

        static ['new'](): ElasticBin;
    }

    module EmptyState {
        // Constructor properties interface
    }

    class EmptyState extends Gtk.Bin {
        // Own properties of Dazzle-1.0.EmptyState

        icon_name: string;
        iconName: string;
        pixel_size: number;
        pixelSize: number;
        resource: string;
        subtitle: string;
        title: string;

        // Constructors of Dazzle-1.0.EmptyState

        static ['new'](): EmptyState;

        // Owm methods of Dazzle-1.0.EmptyState

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
        // Own properties of Dazzle-1.0.EntryBox

        max_width_chars: number;
        maxWidthChars: number;

        // Constructors of Dazzle-1.0.EntryBox

        static ['new'](): EntryBox;
    }

    module FileChooserEntry {
        // Constructor properties interface
    }

    class FileChooserEntry extends Gtk.Bin {
        // Own properties of Dazzle-1.0.FileChooserEntry

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

        // Constructors of Dazzle-1.0.FileChooserEntry

        static ['new'](title: string, action: Gtk.FileChooserAction): FileChooserEntry;

        // Owm methods of Dazzle-1.0.FileChooserEntry

        /**
         * Gets the entry used by the #GtkEntry.
         * @returns a #GtkEntry
         */
        get_entry(): Gtk.Entry;
        /**
         * Returns the currently selected file or %NULL if there is no selection.
         * @returns A #GFile or %NULL.
         */
        get_file(): Gio.File | null;
        set_file(file: Gio.File): void;
    }

    module FileTransfer {
        // Constructor properties interface
    }

    class FileTransfer extends GObject.Object {
        // Own properties of Dazzle-1.0.FileTransfer

        flags: FileTransferFlags;
        readonly progress: number;

        // Constructors of Dazzle-1.0.FileTransfer

        static ['new'](): FileTransfer;

        // Owm methods of Dazzle-1.0.FileTransfer

        add(src: Gio.File, dest: Gio.File): void;
        execute(io_priority: number, cancellable?: Gio.Cancellable | null): boolean;
        execute_async(
            io_priority: number,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        execute_finish(result: Gio.AsyncResult): boolean;
        get_flags(): FileTransferFlags;
        get_progress(): number;
        set_flags(flags: FileTransferFlags): void;
        /**
         * Gets statistics about the transfer progress.
         */
        stat(): void;
    }

    module FuzzyIndex {
        // Constructor properties interface
    }

    class FuzzyIndex extends GObject.Object {
        // Constructors of Dazzle-1.0.FuzzyIndex

        static ['new'](): FuzzyIndex;

        // Owm methods of Dazzle-1.0.FuzzyIndex

        /**
         * Looks up the metadata for `key`.
         * @param key
         * @returns A #GVariant or %NULL.
         */
        get_metadata(key: string): GLib.Variant | null;
        get_metadata_string(key: string): string;
        get_metadata_uint32(key: string): number;
        get_metadata_uint64(key: string): number;
        load_file(file: Gio.File, cancellable?: Gio.Cancellable | null): boolean;
        load_file_async(
            file: Gio.File,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        load_file_finish(result: Gio.AsyncResult): boolean;
        query_async(
            query: string,
            max_matches: number,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Completes an asynchronous request to dzl_fuzzy_index_query_async().
         * @param result
         * @returns A #GListModel of results.
         */
        query_finish(result: Gio.AsyncResult): Gio.ListModel;
    }

    module FuzzyIndexBuilder {
        // Constructor properties interface
    }

    class FuzzyIndexBuilder extends GObject.Object {
        // Own properties of Dazzle-1.0.FuzzyIndexBuilder

        case_sensitive: boolean;
        caseSensitive: boolean;

        // Constructors of Dazzle-1.0.FuzzyIndexBuilder

        static ['new'](): FuzzyIndexBuilder;

        // Owm methods of Dazzle-1.0.FuzzyIndexBuilder

        get_case_sensitive(): boolean;
        /**
         * Returns the document that was inserted in a previous call to
         * dzl_fuzzy_index_builder_insert().
         * @param document_id
         * @returns A #GVariant
         */
        get_document(document_id: number): GLib.Variant;
        /**
         * Inserts `document` into the index using `key` as the lookup key.
         *
         * If a matching document (checked by hashing `document)` has already
         * been inserted, only a single instance of the document will be stored.
         *
         * If `document` is floating, it will be consumed.
         *
         * `priority` may be used to group results by priority. Priority must be
         * less than 256.
         * @param key The UTF-8 encoded key for the document
         * @param document The document to store
         * @param priority An optional priority for the keyword.
         * @returns The document id registered for @document.
         */
        insert(key: string, document: GLib.Variant, priority: number): number;
        set_case_sensitive(case_sensitive: boolean): void;
        set_metadata(key: string, value: GLib.Variant): void;
        set_metadata_string(key: string, value: string): void;
        set_metadata_uint32(key: string, value: number): void;
        set_metadata_uint64(key: string, value: number): void;
        write(file: Gio.File, io_priority: number, cancellable?: Gio.Cancellable | null): boolean;
        /**
         * Builds and writes the index to `file`. The file format is a
         * GVariant on disk and can be loaded and searched using
         * #FuzzyIndex.
         * @param file A #GFile to write the index to
         * @param io_priority The priority for IO operations
         * @param cancellable An optional #GCancellable or %NULL
         * @param callback A callback for completion or %NULL
         */
        write_async(
            file: Gio.File,
            io_priority: number,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        write_finish(result: Gio.AsyncResult): boolean;
    }

    module FuzzyIndexCursor {
        // Constructor properties interface
    }

    class FuzzyIndexCursor<A extends GObject.Object = GObject.Object> extends GObject.Object {
        // Own properties of Dazzle-1.0.FuzzyIndexCursor

        case_sensitive: boolean;
        caseSensitive: boolean;
        index: FuzzyIndex;
        max_matches: number;
        maxMatches: number;
        query: string;
        tables: GLib.VariantDict;

        // Owm methods of Dazzle-1.0.FuzzyIndexCursor

        /**
         * Gets the index the cursor is iterating.
         * @returns A #DzlFuzzyIndex.
         */
        get_index(): FuzzyIndex;
    }

    module FuzzyIndexMatch {
        // Constructor properties interface
    }

    class FuzzyIndexMatch extends GObject.Object {
        // Own properties of Dazzle-1.0.FuzzyIndexMatch

        document: GLib.Variant;
        key: string;
        priority: number;
        score: number;

        // Owm methods of Dazzle-1.0.FuzzyIndexMatch

        get_document(): GLib.Variant;
        get_key(): string;
        get_priority(): number;
        get_score(): number;
    }

    module GraphColumn {
        // Constructor properties interface
    }

    class GraphColumn extends GObject.Object {
        // Own properties of Dazzle-1.0.GraphColumn

        name: string;
        value_type: GObject.GType;
        valueType: GObject.GType;

        // Constructors of Dazzle-1.0.GraphColumn

        static ['new'](name: string, value_type: GObject.GType): GraphColumn;

        // Owm methods of Dazzle-1.0.GraphColumn

        get_name(): string;
        set_name(name: string): void;
    }

    module GraphLineRenderer {
        // Constructor properties interface
    }

    class GraphLineRenderer extends GObject.Object {
        // Own properties of Dazzle-1.0.GraphLineRenderer

        column: number;
        line_width: number;
        lineWidth: number;
        stroke_color: string;
        strokeColor: string;
        stroke_color_rgba: Gdk.RGBA;
        strokeColorRgba: Gdk.RGBA;

        // Constructors of Dazzle-1.0.GraphLineRenderer

        static ['new'](): GraphLineRenderer;

        // Owm methods of Dazzle-1.0.GraphLineRenderer

        get_stroke_color_rgba(): Gdk.RGBA;
        set_stroke_color(stroke_color: string): void;
        set_stroke_color_rgba(stroke_color_rgba: Gdk.RGBA): void;
    }

    module GraphModel {
        // Signal callback interfaces

        interface Changed {
            (): void;
        }

        // Constructor properties interface
    }

    class GraphModel extends GObject.Object {
        // Own properties of Dazzle-1.0.GraphModel

        max_samples: number;
        maxSamples: number;
        timespan: number;
        value_max: number;
        valueMax: number;
        value_min: number;
        valueMin: number;

        // Constructors of Dazzle-1.0.GraphModel

        static ['new'](): GraphModel;

        // Owm methods of Dazzle-1.0.GraphModel

        static iter_get_timestamp(iter: GraphModelIter): number;
        static iter_get_value(iter: GraphModelIter, column: number, value: GObject.Value): void;
        static iter_next(iter: GraphModelIter): boolean;
        /**
         * Sets an individual value within a specific column.
         * @param iter the iter to set
         * @param column the column to set
         * @param value the new value for the column
         */
        static iter_set(iter: GraphModelIter, column: number, value: GObject.Value): void;

        // Owm methods of Dazzle-1.0.GraphModel

        add_column(column: GraphColumn): number;
        get_end_time(): number;
        get_iter_first(iter: GraphModelIter): boolean;
        get_iter_last(iter: GraphModelIter): boolean;
        get_max_samples(): number;
        get_n_columns(): number;
        get_timespan(): GLib.TimeSpan;
        push(timestamp: number): void;
        set_max_samples(n_rows: number): void;
        set_timespan(timespan: GLib.TimeSpan): void;
    }

    module GraphView {
        // Constructor properties interface
    }

    class GraphView extends Gtk.DrawingArea {
        // Own properties of Dazzle-1.0.GraphView

        model: GraphModel;

        // Constructors of Dazzle-1.0.GraphView

        static ['new'](): GraphView;

        // Owm methods of Dazzle-1.0.GraphView

        add_renderer(renderer: GraphRenderer): void;
        /**
         * Gets the #DzlGraphView:model property.
         * @returns An #DzlGraphModel or %NULL.
         */
        get_model(): GraphModel | null;
        set_model(model: GraphModel): void;
    }

    module JoinedMenu {
        // Constructor properties interface
    }

    class JoinedMenu extends Gio.MenuModel {
        // Constructors of Dazzle-1.0.JoinedMenu

        static ['new'](): JoinedMenu;

        // Owm methods of Dazzle-1.0.JoinedMenu

        append_menu(model: Gio.MenuModel): void;
        /**
         * Gets the number of joined menus.
         */
        get_n_joined(): number;
        prepend_menu(model: Gio.MenuModel): void;
        remove_index(index: number): void;
        remove_menu(model: Gio.MenuModel): void;
    }

    module ListBox {
        // Constructor properties interface
    }

    class ListBox extends Gtk.ListBox {
        // Own properties of Dazzle-1.0.ListBox

        property_name: string;
        propertyName: string;
        row_type: GObject.GType;
        rowType: GObject.GType;
        row_type_name: string;
        rowTypeName: string;

        // Constructors of Dazzle-1.0.ListBox

        static ['new'](row_type: GObject.GType, property_name: string): ListBox;

        // Owm methods of Dazzle-1.0.ListBox

        get_model(): Gio.ListModel | null;
        get_property_name(): string;
        get_row_type(): GObject.GType;
        set_model(model: Gio.ListModel): void;
        /**
         * Sets the max number of rows to cache for reuse.  Set to 0 to return
         * to the default.
         * @param recycle_max max number of rows to cache
         */
        set_recycle_max(recycle_max: number): void;
    }

    module ListBoxRow {
        // Constructor properties interface
    }

    abstract class ListBoxRow extends Gtk.ListBoxRow {}

    module ListModelFilter {
        // Constructor properties interface
    }

    class ListModelFilter<A extends GObject.Object = GObject.Object> extends GObject.Object {
        // Own properties of Dazzle-1.0.ListModelFilter

        readonly child_model: Gio.ListModel;
        readonly childModel: Gio.ListModel;

        // Constructors of Dazzle-1.0.ListModelFilter

        static ['new'](child_model: Gio.ListModel): ListModelFilter;

        // Owm methods of Dazzle-1.0.ListModelFilter

        /**
         * Gets the child model that is being filtered.
         * @returns A #GListModel.
         */
        get_child_model(): Gio.ListModel;
        invalidate(): void;
        set_filter_func(filter_func: ListModelFilterFunc): void;
    }

    module ListStoreAdapter {
        // Constructor properties interface
    }

    class ListStoreAdapter extends GObject.Object {
        // Own properties of Dazzle-1.0.ListStoreAdapter

        model: Gio.ListModel;

        // Constructors of Dazzle-1.0.ListStoreAdapter

        static ['new'](model: Gio.ListModel): ListStoreAdapter;

        // Owm methods of Dazzle-1.0.ListStoreAdapter

        /**
         * Gets the model being adapted.
         * @returns A #GListModel
         */
        get_model(): Gio.ListModel;
        set_model(model: Gio.ListModel): void;
    }

    module MenuButton {
        // Constructor properties interface
    }

    class MenuButton extends Gtk.MenuButton {
        // Own properties of Dazzle-1.0.MenuButton

        icon_name: string;
        iconName: string;
        /**
         * The "menu-id" property can be used to automatically load a
         * #GMenuModel from the applications merged menus. This is
         * performed via dzl_application_get_menu_by_id().
         */
        menu_id: string;
        /**
         * The "menu-id" property can be used to automatically load a
         * #GMenuModel from the applications merged menus. This is
         * performed via dzl_application_get_menu_by_id().
         */
        menuId: string;
        model: Gio.MenuModel;
        show_accels: boolean;
        showAccels: boolean;
        show_arrow: boolean;
        showArrow: boolean;
        show_icons: boolean;
        showIcons: boolean;
        transitions_enabled: boolean;
        transitionsEnabled: boolean;

        // Constructors of Dazzle-1.0.MenuButton

        static new_with_model(icon_name: string, model?: Gio.MenuModel | null): MenuButton;

        // Owm methods of Dazzle-1.0.MenuButton

        get_model(): Gio.MenuModel | null;
        get_show_accels(): boolean;
        get_show_arrow(): boolean;
        get_show_icons(): boolean;
        set_model(model: Gio.MenuModel): void;
        /**
         * Sets the #DzlMenuButton:show-accels property.
         *
         * If %TRUE, accelerators will be displayed next to menu items that
         * contain a shortcut.
         * @param show_accels if accelerators should be visible
         */
        set_show_accels(show_accels: boolean): void;
        /**
         * Sets the #DzlMenuButton:show-arrow property.
         *
         * If %TRUE, an pan-down-symbolic image will be displayed next to the
         * image in the button.
         * @param show_arrow
         */
        set_show_arrow(show_arrow: boolean): void;
        /**
         * Sets the #DzlMenuButton:show-icons property.
         *
         * If %TRUE, icons will be displayed next to menu items that
         * contain a shortcut.
         * @param show_icons if icons should be visible
         */
        set_show_icons(show_icons: boolean): void;
    }

    module MenuManager {
        // Constructor properties interface
    }

    /**
     * The goal of #DzlMenuManager is to simplify the process of merging multiple
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
     * submenu links. This allows the #DzlMenuManager to be in full control of
     * the generated menus.
     *
     * dzl_menu_manager_get_menu_by_id() will always return a #GMenu, however
     * that menu may contain no children until something has extended it later
     * on during the application process.
     */
    class MenuManager extends GObject.Object {
        // Constructors of Dazzle-1.0.MenuManager

        static ['new'](): MenuManager;

        // Owm methods of Dazzle-1.0.MenuManager

        add_filename(filename: string): number;
        add_resource(resource: string): number;
        get_menu_by_id(menu_id: string): Gio.Menu;
        merge(menu_id: string, model: Gio.MenuModel): number;
        /**
         * This removes items from menus that were added as part of a previous
         * menu merge. Use the value returned from dzl_menu_manager_merge() as
         * the `merge_id`.
         * @param merge_id A previously registered merge id
         */
        remove(merge_id: number): void;
    }

    module MultiPaned {
        // Signal callback interfaces

        interface ResizeDragBegin {
            (object: Gtk.Widget): void;
        }

        interface ResizeDragEnd {
            (object: Gtk.Widget): void;
        }

        // Constructor properties interface
    }

    /**
     * This widget is similar to #GtkPaned except that it allows adding more than
     * two children to the widget. For each additional child added to the
     * #DzlMultiPaned, an additional resize grip is added.
     */
    class MultiPaned extends Gtk.Container {
        // Own properties of Dazzle-1.0.MultiPaned

        orientation: Gtk.Orientation;

        // Constructors of Dazzle-1.0.MultiPaned

        static ['new'](): MultiPaned;

        // Owm methods of Dazzle-1.0.MultiPaned

        /**
         * Locates the widget at position x,y within widget.
         *
         * `x` and `y` should be relative to `self`.
         * @param x x coordinate
         * @param y y coordinate
         * @returns a #GtkWidget or %NULL
         */
        get_at_point(x: number, y: number): Gtk.Widget | null;
        get_n_children(): number;
        /**
         * Gets the `nth` child of the #DzlMultiPaned.
         *
         * It is an error to call this function with a value &gt;= the result of
         * dzl_multi_paned_get_nth_child().
         *
         * The index starts from 0.
         * @param nth
         * @returns A #GtkWidget
         */
        get_nth_child(nth: number): Gtk.Widget;
    }

    module Path {
        // Constructor properties interface
    }

    class Path extends GObject.Object {
        // Constructors of Dazzle-1.0.Path

        static ['new'](): Path;

        // Owm methods of Dazzle-1.0.Path

        append(element: PathElement): void;
        /**
         * Gets the path element found at `index`.
         *
         * Indexes start from zero.
         * @param index
         * @returns An #DzlPathElement.
         */
        get_element(index: number): PathElement | null;
        get_elements(): PathElement[];
        get_length(): number;
        has_prefix(prefix: Path): boolean;
        is_empty(): boolean;
        prepend(element: PathElement): void;
        printf(): string;
    }

    module PathBar {
        // Signal callback interfaces

        interface ElementSelected {
            (object: Path, p0: PathElement): void;
        }

        interface PopulateMenu {
            (object: Path, p0: PathElement, p1: Gio.Menu): void;
        }

        // Constructor properties interface
    }

    class PathBar extends Gtk.Box {
        // Own properties of Dazzle-1.0.PathBar

        path: Path;

        // Constructors of Dazzle-1.0.PathBar

        static ['new'](): PathBar;

        // Owm methods of Dazzle-1.0.PathBar

        /**
         * Gets the path for the view.
         * @returns A #DzlPath.
         */
        get_path(): Path;
        set_path(path: Path): void;
        set_selected_index(index: number): void;
    }

    module PathElement {
        // Constructor properties interface
    }

    class PathElement extends GObject.Object {
        // Own properties of Dazzle-1.0.PathElement

        /**
         * The icon-name of the icon to display next to the path element
         * in the path bar. Set to %NULL for no icon.
         */
        icon_name: string;
        /**
         * The icon-name of the icon to display next to the path element
         * in the path bar. Set to %NULL for no icon.
         */
        iconName: string;
        /**
         * The id property is an application specific identifier for the
         * element within the path.
         */
        id: string;
        /**
         * The title property should contain the display text that should
         * be shown to represent the element in the #DzlPathBar.
         */
        title: string;

        // Constructors of Dazzle-1.0.PathElement

        static ['new'](id: string | null, icon_name: string | null, title: string): PathElement;

        // Owm methods of Dazzle-1.0.PathElement

        /**
         * Gets the #DzlPathElement:icon-name property. This is used by the
         * path bar to display an icon next to the element of the path.
         * @returns The icon-name for the #DzlPathElement.
         */
        get_icon_name(): string | null;
        /**
         * Gets the id for the element. Generally, a path is built of
         * multiple elements and each element should have an id that
         * is useful to the application that it using it. You might store
         * the name of a directory, or some other key as the id.
         * @returns The id for the #DzlPathElement.
         */
        get_id(): string;
        /**
         * Gets the #DzlPathElement:title property. This is used by the
         * path bar to display text representing the element of the path.
         * @returns The title for the #DzlPathElement.
         */
        get_title(): string | null;
    }

    module PillBox {
        // Constructor properties interface
    }

    class PillBox extends Gtk.EventBox {
        // Own properties of Dazzle-1.0.PillBox

        label: string;

        // Constructors of Dazzle-1.0.PillBox

        static ['new'](label: string): PillBox;

        // Owm methods of Dazzle-1.0.PillBox

        get_label(): string;
        set_label(label: string): void;
    }

    module PreferencesBin {
        // Signal callback interfaces

        interface PreferenceActivated {
            (): void;
        }

        // Constructor properties interface
    }

    class PreferencesBin extends Gtk.Bin {
        // Own properties of Dazzle-1.0.PreferencesBin

        keywords: string;
        path: string;
        priority: number;
        schema_id: string;
        schemaId: string;
    }

    module PreferencesEntry {
        // Signal callback interfaces

        interface Activate {
            (): void;
        }

        interface Changed {
            (object: string): void;
        }

        // Constructor properties interface
    }

    class PreferencesEntry extends PreferencesBin {
        // Own properties of Dazzle-1.0.PreferencesEntry

        text: string;
        title: string;

        // Owm methods of Dazzle-1.0.PreferencesEntry

        get_entry_widget(): Gtk.Widget;
        get_title_widget(): Gtk.Widget;
    }

    module PreferencesFileChooserButton {
        // Constructor properties interface
    }

    class PreferencesFileChooserButton extends PreferencesBin {
        // Own properties of Dazzle-1.0.PreferencesFileChooserButton

        action: Gtk.FileChooserAction;
        key: string;
        subtitle: string;
        title: string;
    }

    module PreferencesFlowBox {
        // Constructor properties interface
    }

    class PreferencesFlowBox extends ColumnLayout {
        // Constructors of Dazzle-1.0.PreferencesFlowBox

        static ['new'](): PreferencesFlowBox;
    }

    module PreferencesFontButton {
        // Signal callback interfaces

        interface Activate {
            (): void;
        }

        // Constructor properties interface
    }

    class PreferencesFontButton extends PreferencesBin {
        // Own properties of Dazzle-1.0.PreferencesFontButton

        key: string;
        title: string;
    }

    module PreferencesGroup {
        // Constructor properties interface
    }

    class PreferencesGroup extends Gtk.Bin {
        // Own properties of Dazzle-1.0.PreferencesGroup

        is_list: boolean;
        isList: boolean;
        mode: Gtk.SelectionMode;
        priority: number;
        title: string;

        // Owm methods of Dazzle-1.0.PreferencesGroup

        add(widget: Gtk.Widget): void;
        get_priority(): number;
        /**
         * Gets a size group that can be used to organize items in
         * a group based on columns.
         * @param column
         * @returns a #GtkSizeGroup
         */
        get_size_group(column: number): Gtk.SizeGroup;
        get_title(): string;
        refilter(spec: PatternSpec): number;
        set_map(map: GLib.HashTable<any, any>): void;
    }

    module PreferencesPage {
        // Constructor properties interface
    }

    class PreferencesPage extends Gtk.Bin {
        // Own properties of Dazzle-1.0.PreferencesPage

        priority: number;

        // Owm methods of Dazzle-1.0.PreferencesPage

        add_group(group: PreferencesGroup): void;
        get_group(group_name: string): PreferencesGroup | null;
        refilter(spec: PatternSpec): void;
        set_map(map: GLib.HashTable<any, any>): void;
    }

    module PreferencesSpinButton {
        // Signal callback interfaces

        interface Activate {
            (): void;
        }

        // Constructor properties interface
    }

    class PreferencesSpinButton extends PreferencesBin {
        // Own properties of Dazzle-1.0.PreferencesSpinButton

        key: string;
        subtitle: string;
        title: string;

        // Owm methods of Dazzle-1.0.PreferencesSpinButton

        get_spin_button(): Gtk.Widget;
    }

    module PreferencesSwitch {
        // Signal callback interfaces

        interface Activated {
            (): void;
        }

        // Constructor properties interface
    }

    class PreferencesSwitch extends PreferencesBin {
        // Own properties of Dazzle-1.0.PreferencesSwitch

        is_radio: boolean;
        isRadio: boolean;
        key: string;
        subtitle: string;
        target: GLib.Variant;
        title: string;
    }

    module PreferencesView {
        // Constructor properties interface
    }

    class PreferencesView extends Gtk.Bin {
        // Own properties of Dazzle-1.0.PreferencesView

        show_search_entry: boolean;
        showSearchEntry: boolean;
        use_sidebar: boolean;
        useSidebar: boolean;

        // Constructors of Dazzle-1.0.PreferencesView

        static ['new'](): PreferencesView;

        // Owm methods of Dazzle-1.0.PreferencesView

        get_show_search_entry(): boolean;
        get_use_sidebar(): boolean;
        reapply_filter(): void;
        set_show_search_entry(show_search_entry: boolean): void;
        set_use_sidebar(use_sidebar: boolean): void;
    }

    module PriorityBox {
        // Constructor properties interface
    }

    /**
     * This is like a #GtkBox but uses stable priorities to sort.
     */
    class PriorityBox extends Gtk.Box {
        // Constructors of Dazzle-1.0.PriorityBox

        static ['new'](): PriorityBox;
    }

    module ProgressButton {
        // Constructor properties interface
    }

    class ProgressButton extends Gtk.Button {
        // Own properties of Dazzle-1.0.ProgressButton

        progress: number;
        show_progress: boolean;
        showProgress: boolean;

        // Constructors of Dazzle-1.0.ProgressButton

        static ['new'](): ProgressButton;

        // Owm methods of Dazzle-1.0.ProgressButton

        get_progress(): number;
        get_show_progress(): boolean;
        set_progress(percentage: number): void;
        set_show_progress(show_progress: boolean): void;
    }

    module ProgressIcon {
        // Constructor properties interface
    }

    class ProgressIcon extends Gtk.DrawingArea {
        // Own properties of Dazzle-1.0.ProgressIcon

        progress: number;

        // Constructors of Dazzle-1.0.ProgressIcon

        static ['new'](): ProgressIcon;

        // Owm methods of Dazzle-1.0.ProgressIcon

        get_progress(): number;
        set_progress(progress: number): void;
    }

    module ProgressMenuButton {
        // Constructor properties interface
    }

    class ProgressMenuButton extends Gtk.MenuButton {
        // Own properties of Dazzle-1.0.ProgressMenuButton

        progress: number;
        show_progress: boolean;
        showProgress: boolean;
        show_theatric: boolean;
        showTheatric: boolean;
        theatric_icon_name: string;
        theatricIconName: string;
        transition_duration: number;
        transitionDuration: number;

        // Constructors of Dazzle-1.0.ProgressMenuButton

        static ['new'](): ProgressMenuButton;

        // Owm methods of Dazzle-1.0.ProgressMenuButton

        get_progress(): number;
        get_show_progress(): boolean;
        get_show_theatric(): boolean;
        /**
         * To avoid suprious animations from the button, you must call this function any
         * time you want to allow animations to continue. This is because animations are
         * automatically started upon reaching a progress of 1.0.
         *
         * If you are performing operations in the background, calling this function
         * every time you add an operation is a good strategry.
         */
        reset_theatrics(): void;
        set_progress(progress: number): void;
        set_show_progress(show_progress: boolean): void;
        set_show_theatric(show_theatic: boolean): void;
    }

    module PropertiesGroup {
        // Constructor properties interface
    }

    class PropertiesGroup extends GObject.Object {
        // Own properties of Dazzle-1.0.PropertiesGroup

        object: GObject.Object;
        object_type: GObject.GType;
        objectType: GObject.GType;

        // Constructors of Dazzle-1.0.PropertiesGroup

        static ['new'](object: GObject.Object): PropertiesGroup;

        static new_for_type(object_type: GObject.GType): PropertiesGroup;

        // Owm methods of Dazzle-1.0.PropertiesGroup

        /**
         * This function will try to add all properties found on the target
         * instance to the group. Only properties that are supported by the
         * #DzlPropertiesGroup will be added.
         *
         * The action name of all added properties will be identical to their
         * property name.
         */
        add_all_properties(): void;
        /**
         * Adds a new stateful action named `name` which maps to the underlying
         * property `property_name` of #DzlPropertiesGroup:object.
         * @param name the name of the action
         * @param property_name the name of the property
         */
        add_property(name: string, property_name: string): void;
        /**
         * Adds a new stateful action named `name` which maps to the underlying
         * property `property_name` of #DzlPropertiesGroup:object.
         *
         * Seting `flags` allows you to tweak some settings about the action.
         * @param name the name of the action
         * @param property_name the name of the property
         * @param flags optional flags for the action
         */
        add_property_full(name: string, property_name: string, flags: PropertiesFlags): void;
        /**
         * Removes an action from `self` that was previously added with
         * dzl_properties_group_add_property(). `name` should match the
         * name parameter to that function.
         * @param name the name of the action
         */
        remove(name: string): void;
    }

    module RadioBox {
        // Signal callback interfaces

        interface Changed {
            (): void;
        }

        // Constructor properties interface
    }

    class RadioBox extends Gtk.Bin {
        // Own properties of Dazzle-1.0.RadioBox

        active_id: string;
        activeId: string;
        readonly has_more: boolean;
        readonly hasMore: boolean;
        show_more: boolean;
        showMore: boolean;

        // Constructors of Dazzle-1.0.RadioBox

        static ['new'](): RadioBox;

        // Owm methods of Dazzle-1.0.RadioBox

        add_item(id: string, text: string): void;
        get_active_id(): string;
        remove_item(id: string): void;
        set_active_id(id: string): void;
    }

    module ReadOnlyListModel {
        // Constructor properties interface
    }

    class ReadOnlyListModel<A extends GObject.Object = GObject.Object> extends GObject.Object {
        // Own properties of Dazzle-1.0.ReadOnlyListModel

        /**
         * The "base-model" property is the #GListModel that will be wrapped.
         *
         * This base model is not accessible after creation so that API creators can
         * be sure the consumer cannot mutate the underlying model. That is useful
         * when you want to give a caller access to a #GListModel without the ability
         * to introspect on the type and mutate it without your knowledge (such as
         * with #GListStore).
         */
        base_model: Gio.ListModel;
        /**
         * The "base-model" property is the #GListModel that will be wrapped.
         *
         * This base model is not accessible after creation so that API creators can
         * be sure the consumer cannot mutate the underlying model. That is useful
         * when you want to give a caller access to a #GListModel without the ability
         * to introspect on the type and mutate it without your knowledge (such as
         * with #GListStore).
         */
        baseModel: Gio.ListModel;

        // Owm methods of Dazzle-1.0.ReadOnlyListModel

        /**
         * Creates a new #DzlReadOnlyListModel which is a read-only wrapper around
         * `base_model`. This is useful when you want to give API consumers access to
         * a #GListModel but without the ability to mutate the underlying list.
         * @param base_model a #GListModel
         */
        static new(base_model: Gio.ListModel): Gio.ListModel;
    }

    module RecursiveFileMonitor {
        // Signal callback interfaces

        interface Changed {
            (file: Gio.File, other_file: Gio.File | null, event: Gio.FileMonitorEvent): void;
        }

        // Constructor properties interface
    }

    class RecursiveFileMonitor extends GObject.Object {
        // Own properties of Dazzle-1.0.RecursiveFileMonitor

        root: Gio.File;

        // Constructors of Dazzle-1.0.RecursiveFileMonitor

        static ['new'](root: Gio.File): RecursiveFileMonitor;

        // Owm methods of Dazzle-1.0.RecursiveFileMonitor

        /**
         * Cancels the recursive file monitor.
         */
        cancel(): void;
        /**
         * Gets the root directory used forthe file monitor.
         * @returns a #GFile
         */
        get_root(): Gio.File;
        /**
         * Sets a callback function to determine if a #GFile should be ignored
         * from signal emission.
         *
         * `ignore_func` will always be called from the applications main thread.
         *
         * If `ignore_func` is %NULL, it is set to the default which does not
         * ignore any files or directories.
         * @param ignore_func a #DzlRecursiveIgnoreFunc
         */
        set_ignore_func(ignore_func: RecursiveIgnoreFunc): void;
        start_async(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): void;
        start_finish(result: Gio.AsyncResult): boolean;
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
        // Own properties of Dazzle-1.0.SearchBar

        search_mode_enabled: boolean;
        searchModeEnabled: boolean;
        show_close_button: boolean;
        showCloseButton: boolean;

        // Constructors of Dazzle-1.0.SearchBar

        static ['new'](): SearchBar;

        // Owm methods of Dazzle-1.0.SearchBar

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
        // Own properties of Dazzle-1.0.SettingsFlagAction

        flag_nick: string;
        flagNick: string;
        schema_id: string;
        schemaId: string;
        schema_key: string;
        schemaKey: string;

        // Owm methods of Dazzle-1.0.SettingsFlagAction

        /**
         * This creates a new action that can be used to toggle an individual flag in
         * a #GSettings key which is of a flags type.
         * @param schema_id
         * @param schema_key
         * @param flag_nick
         */
        static new(schema_id: string, schema_key: string, flag_nick: string): Gio.Action;
    }

    module SettingsSandwich {
        // Constructor properties interface
    }

    class SettingsSandwich extends GObject.Object {
        // Own properties of Dazzle-1.0.SettingsSandwich

        path: string;
        schema_id: string;
        schemaId: string;

        // Constructors of Dazzle-1.0.SettingsSandwich

        static ['new'](schema_id: string, path: string): SettingsSandwich;

        // Owm methods of Dazzle-1.0.SettingsSandwich

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

    module ShortcutAccelDialog {
        // Constructor properties interface
    }

    class ShortcutAccelDialog extends Gtk.Dialog {
        // Own properties of Dazzle-1.0.ShortcutAccelDialog

        accelerator: string;
        shortcut_title: string;
        shortcutTitle: string;

        // Constructors of Dazzle-1.0.ShortcutAccelDialog

        static ['new'](): ShortcutAccelDialog;

        // Owm methods of Dazzle-1.0.ShortcutAccelDialog

        get_accelerator(): string;
        get_chord(): ShortcutChord;
        get_shortcut_title(): string;
        set_accelerator(accelerator: string): void;
        set_shortcut_title(title: string): void;
    }

    module ShortcutContext {
        // Constructor properties interface
    }

    class ShortcutContext extends GObject.Object {
        // Own properties of Dazzle-1.0.ShortcutContext

        name: string;
        use_binding_sets: boolean;
        useBindingSets: boolean;

        // Constructors of Dazzle-1.0.ShortcutContext

        static ['new'](name: string): ShortcutContext;

        // Owm methods of Dazzle-1.0.ShortcutContext

        activate(widget: Gtk.Widget, chord: ShortcutChord): ShortcutMatch;
        add_action(accel: string, detailed_action_name: string): void;
        add_command(accel: string, command: string): void;
        /**
         * This is similar to dzl_shortcut_context_add_signal() but is easier to use
         * from language bindings.
         * @param accel the accelerator for the shortcut
         * @param signal_name the name of the signal
         * @param values The   values to use when calling the signal.
         */
        add_signalv(accel: string, signal_name: string, values?: GObject.Value[] | null): void;
        get_name(): string;
        load_from_data(data: string, len: number): boolean;
        load_from_resource(resource_path: string): boolean;
        remove(accel: string): boolean;
    }

    module ShortcutController {
        // Signal callback interfaces

        interface Reset {
            (): void;
        }

        interface SetContextNamed {
            (name: string): void;
        }

        // Constructor properties interface
    }

    class ShortcutController extends GObject.Object {
        // Own properties of Dazzle-1.0.ShortcutController

        readonly context: ShortcutContext;
        readonly current_chord: ShortcutChord;
        readonly currentChord: ShortcutChord;
        manager: ShortcutManager;
        widget: Gtk.Widget;

        // Constructors of Dazzle-1.0.ShortcutController

        static ['new'](widget: Gtk.Widget): ShortcutController;

        // Owm methods of Dazzle-1.0.ShortcutController

        /**
         * Finds the registered #DzlShortcutController for a widget.
         *
         * The controller is created if it does not already exist.
         * @param widget
         */
        static find(widget: Gtk.Widget): ShortcutController;
        /**
         * Finds the registered #DzlShortcutController for a widget.
         *
         * If no controller is found, %NULL is returned.
         * @param widget
         */
        static try_find(widget: Gtk.Widget): ShortcutController | null;

        // Owm methods of Dazzle-1.0.ShortcutController

        add_command_action(command_id: string, default_accel: string, phase: ShortcutPhase, action: string): void;
        add_command_callback(
            command_id: string,
            default_accel: string,
            phase: ShortcutPhase,
            callback: Gtk.Callback,
        ): void;
        /**
         * This method will locate and execute the command matching the id `command`.
         *
         * If the command is not found, %FALSE is returned.
         * @param command the id of the command
         * @returns %TRUE if the command was found and executed.
         */
        execute_command(command: string): boolean;
        /**
         * This function gets the #DzlShortcutController:context property, which
         * is the current context to dispatch events to. An #DzlShortcutContext
         * is a group of keybindings that may be activated in response to a
         * single or series of #GdkEventKey.
         * @returns A #DzlShortcutContext or %NULL.
         */
        get_context(): ShortcutContext | null;
        /**
         * Controllers can have a different context for a particular phase, which allows
         * them to activate different keybindings depending if the event in capture,
         * bubble, or dispatch.
         * @param phase the phase for the shorcut delivery
         * @returns A #DzlShortcutContext or %NULL.
         */
        get_context_for_phase(phase: ShortcutPhase): ShortcutContext | null;
        /**
         * This method gets the #DzlShortcutController:current-chord property.
         * This is useful if you want to monitor in-progress chord building.
         *
         * Note that this value will only be valid on the controller for the
         * toplevel widget (a #GtkWindow). Chords are not tracked at the
         * individual widget controller level.
         * @returns A #DzlShortcutChord or %NULL.
         */
        get_current_chord(): ShortcutChord | null;
        /**
         * Gets the #DzlShortcutManager associated with this controller.
         *
         * Generally, this will look for the root controller's manager as mixing and
         * matching managers in a single window hierarchy is not supported.
         * @returns A #DzlShortcutManager.
         */
        get_manager(): ShortcutManager;
        get_widget(): Gtk.Widget;
        remove_accel(accel: string, phase: ShortcutPhase): void;
        /**
         * Changes the context for the controller to the context matching `name`.
         *
         * Contexts are resolved at runtime through the current theme (and possibly
         * a parent theme if it inherits from one).
         * @param name The name of the context
         */
        set_context_by_name(name?: string | null): void;
        /**
         * Sets the #DzlShortcutController:manager property.
         *
         * If you set this to %NULL, it will revert to the default #DzlShortcutManager
         * for the process.
         * @param manager A #DzlShortcutManager or %NULL
         */
        set_manager(manager?: ShortcutManager | null): void;
    }

    module ShortcutLabel {
        // Constructor properties interface
    }

    class ShortcutLabel extends Gtk.Box {
        // Own properties of Dazzle-1.0.ShortcutLabel

        accelerator: string;
        chord: ShortcutChord;

        // Constructors of Dazzle-1.0.ShortcutLabel

        static ['new'](): ShortcutLabel;

        // Owm methods of Dazzle-1.0.ShortcutLabel

        get_accelerator(): string;
        /**
         * Gets the chord for the label, or %NULL.
         * @returns A #DzlShortcutChord or %NULL
         */
        get_chord(): ShortcutChord | null;
        set_accelerator(accelerator: string): void;
        set_chord(chord: ShortcutChord): void;
    }

    module ShortcutManager {
        // Signal callback interfaces

        interface Changed {
            (): void;
        }

        // Constructor properties interface
    }

    class ShortcutManager<A extends GObject.Object = GObject.Object> extends GObject.Object {
        // Own properties of Dazzle-1.0.ShortcutManager

        theme: ShortcutTheme;
        theme_name: string;
        themeName: string;
        user_dir: string;
        userDir: string;

        // Owm methods of Dazzle-1.0.ShortcutManager

        /**
         * Gets the singleton #DzlShortcutManager for the process.
         */
        static get_default(): ShortcutManager;

        // Owm methods of Dazzle-1.0.ShortcutManager

        add_action(detailed_action_name: string, section: string, group: string, title: string, subtitle: string): void;
        add_command(command: string, section: string, group: string, title: string, subtitle: string): void;
        /**
         * This method will add `shortcuts` to the #DzlShortcutManager.
         *
         * This provides a simple way for widgets to add their shortcuts to the manager
         * so that they may be overriden by themes or the end user.
         * @param shortcuts shortcuts to add
         * @param translation_domain the gettext domain to use for translations
         */
        add_shortcut_entries(shortcuts: ShortcutEntry[], translation_domain?: string | null): void;
        /**
         * Adds shortcuts registered with the #DzlShortcutManager to the
         * #DzlShortcutsWindow.
         * @param window A #DzlShortcutsWindow
         */
        add_shortcuts_to_window(window: ShortcutsWindow): void;
        append_search_path(directory: string): void;
        /**
         * Gets the "theme" property.
         * @returns An #DzlShortcutTheme.
         */
        get_theme(): ShortcutTheme;
        /**
         * Locates a theme by the name of the theme.
         *
         * If `theme_name` is %NULL, then the internal theme is used. You probably dont
         * need to use that as it is used by various controllers to hook up their
         * default actions.
         * @param theme_name the name of a theme or %NULL of the internal theme
         * @returns A #DzlShortcutTheme or %NULL.
         */
        get_theme_by_name(theme_name?: string | null): ShortcutTheme | null;
        get_theme_name(): string;
        get_user_dir(): string;
        /**
         * This function will try to dispatch `event` to the proper widget and
         * #DzlShortcutContext. If the event is handled, then %TRUE is returned.
         *
         * You should call this from #GtkWidget::key-press-event handler in your
         * #GtkWindow toplevel.
         * @param event A #GdkEventKey event to handle.
         * @param toplevel A #GtkWidget or %NULL.
         * @returns %TRUE if the event was handled.
         */
        handle_event(event: Gdk.EventKey, toplevel: Gtk.Widget): boolean;
        prepend_search_path(directory: string): void;
        queue_reload(): void;
        reload(cancellable?: Gio.Cancellable | null): void;
        remove_search_path(directory: string): void;
        /**
         * Sets the theme for the shortcut manager.
         * @param theme An #DzlShortcutTheme
         */
        set_theme(theme: ShortcutTheme): void;
        set_theme_name(theme_name: string): void;
        set_user_dir(user_dir: string): void;
    }

    module ShortcutModel {
        // Constructor properties interface
    }

    class ShortcutModel extends Gtk.TreeStore {
        // Own properties of Dazzle-1.0.ShortcutModel

        manager: ShortcutManager;
        theme: ShortcutTheme;

        // Owm methods of Dazzle-1.0.ShortcutModel

        static new(): Gtk.TreeModel;

        // Owm methods of Dazzle-1.0.ShortcutModel

        /**
         * Gets the manager to be edited.
         * @returns A #DzlShortcutManager
         */
        get_manager(): ShortcutManager;
        /**
         * Get the theme to be edited.
         * @returns A #DzlShortcutTheme
         */
        get_theme(): ShortcutTheme;
        rebuild(): void;
        set_chord(iter: Gtk.TreeIter, chord: ShortcutChord): void;
        set_manager(manager: ShortcutManager): void;
        set_theme(theme: ShortcutTheme): void;
    }

    module ShortcutSimpleLabel {
        // Constructor properties interface
    }

    class ShortcutSimpleLabel extends Gtk.Box {
        // Own properties of Dazzle-1.0.ShortcutSimpleLabel

        accel: string;
        action: string;
        command: string;
        show_accel: boolean;
        showAccel: boolean;
        title: string;

        // Constructors of Dazzle-1.0.ShortcutSimpleLabel

        static ['new'](): ShortcutSimpleLabel;

        // Owm methods of Dazzle-1.0.ShortcutSimpleLabel

        get_accel(): string;
        get_action(): string;
        get_command(): string;
        get_title(): string;
        set_accel(accel: string): void;
        set_action(action: string): void;
        set_command(command: string): void;
        set_title(title: string): void;
    }

    module ShortcutTheme {
        // Constructor properties interface
    }

    class ShortcutTheme extends GObject.Object {
        // Own properties of Dazzle-1.0.ShortcutTheme

        name: string;
        parent_name: string;
        parentName: string;
        subtitle: string;
        title: string;

        // Constructors of Dazzle-1.0.ShortcutTheme

        static ['new'](name: string): ShortcutTheme;

        // Owm methods of Dazzle-1.0.ShortcutTheme

        add_command(accelerator: string, command: string): void;
        add_context(context: ShortcutContext): void;
        add_css_resource(path: string): void;
        /**
         * Gets the context named `name`. If the context does not exist, it will
         * be created.
         * @param name The name of the context
         * @returns An #DzlShortcutContext
         */
        find_context_by_name(name: string): ShortcutContext;
        /**
         * Finds the default context in the theme for `widget`.
         * @param widget
         * @returns An #DzlShortcutContext or %NULL.
         */
        find_default_context(widget: Gtk.Widget): ShortcutContext | null;
        get_chord_for_action(detailed_action_name: string): ShortcutChord;
        get_chord_for_command(command: string): ShortcutChord;
        get_name(): string;
        /**
         * If the #DzlShortcutTheme:parent-name property has been set, this will fetch
         * the parent #DzlShortcutTheme.
         * @returns A #DzlShortcutTheme or %NULL.
         */
        get_parent(): ShortcutTheme | null;
        /**
         * Gets the name of the parent shortcut theme.
         *
         * This is used to resolve shortcuts from the parent theme without having to
         * copy them directly into this shortcut theme. It allows for some level of
         * copy-on-write (CoW).
         * @returns The name of the parent theme, or %NULL if none is set.
         */
        get_parent_name(): string | null;
        get_subtitle(): string;
        get_title(): string;
        load_from_data(data: string, len: number): boolean;
        load_from_file(file: Gio.File, cancellable?: Gio.Cancellable | null): boolean;
        load_from_path(path: string, cancellable?: Gio.Cancellable | null): boolean;
        remove_css_resource(path: string): void;
        save_to_file(file: Gio.File, cancellable?: Gio.Cancellable | null): boolean;
        save_to_path(path: string, cancellable?: Gio.Cancellable | null): boolean;
        save_to_stream(stream: Gio.OutputStream, cancellable?: Gio.Cancellable | null): boolean;
        set_accel_for_action(detailed_action_name: string, accel: string, phase: ShortcutPhase): void;
        /**
         * This will set the command to execute when `accel` is pressed.  If command is
         * %NULL, the accelerator will be cleared.  If accelerator is %NULL, all
         * accelerators for `command` will be cleared.
         * @param command the command to be executed
         * @param accel the shortcut accelerator
         * @param phase the phase to activate within, or 0 for the default
         */
        set_accel_for_command(command: string | null, accel: string | null, phase: ShortcutPhase): void;
        set_chord_for_action(detailed_action_name: string, chord: ShortcutChord, phase: ShortcutPhase): void;
        /**
         * This will set the command to execute when `chord` is pressed.  If command is
         * %NULL, the accelerator will be cleared.  If `chord` is %NULL, all
         * accelerators for `command` will be cleared.
         * @param command the command to be executed
         * @param chord the chord for the command
         * @param phase the phase to activate within, or 0 for the default
         */
        set_chord_for_command(command: string | null, chord: ShortcutChord | null, phase: ShortcutPhase): void;
        set_parent_name(parent_name: string): void;
    }

    module ShortcutThemeEditor {
        // Signal callback interfaces

        interface Changed {
            (): void;
        }

        // Constructor properties interface
    }

    class ShortcutThemeEditor extends Gtk.Bin {
        // Own properties of Dazzle-1.0.ShortcutThemeEditor

        theme: ShortcutTheme;

        // Constructors of Dazzle-1.0.ShortcutThemeEditor

        static ['new'](): ShortcutThemeEditor;

        // Owm methods of Dazzle-1.0.ShortcutThemeEditor

        /**
         * Gets the shortcut theme if one hsa been set.
         * @returns An #DzlShortcutTheme or %NULL
         */
        get_theme(): ShortcutTheme | null;
        set_theme(theme: ShortcutTheme): void;
    }

    module ShortcutTooltip {
        // Constructor properties interface
    }

    class ShortcutTooltip extends GObject.Object {
        // Own properties of Dazzle-1.0.ShortcutTooltip

        accel: string;
        command_id: string;
        commandId: string;
        /**
         * The "title" property contains an alternate title for the tooltip
         * instead of discovering the title from the shortcut manager.
         */
        title: string;
        widget: Gtk.Widget;

        // Constructors of Dazzle-1.0.ShortcutTooltip

        static ['new'](): ShortcutTooltip;

        // Owm methods of Dazzle-1.0.ShortcutTooltip

        /**
         * Gets the #DzlShortcutTooltip:accel property, which can be used to override
         * the commands accel.
         * @returns an override accel, or %NULL
         */
        get_accel(): string | null;
        /**
         * Gets the #DzlShortcutTooltip:command-id property.
         * @returns a string containing the command id
         */
        get_command_id(): string | null;
        /**
         * Gets the #DzlShortcutTooltip:title property, if set.
         * @returns a string containing the title, or %NULL
         */
        get_title(): string | null;
        /**
         * Gets the #GtkWidget that the shortcut-tooltip is wrapping.
         * @returns a #GtkWidget or %NULL if unset
         */
        get_widget(): Gtk.Widget | null;
        /**
         * Allows overriding the accel that is used.
         * @param accel Sets the accelerator to use, or %NULL to unset   and use the default
         */
        set_accel(accel?: string | null): void;
        /**
         * This sets the #DzlShortcutTooltip:command-id property which denotes which
         * shortcut registered with libdazzle to display when a tooltip request is
         * received.
         * @param command_id the command-id of the shortcut registered
         */
        set_command_id(command_id: string): void;
        /**
         * Sets the #DzlShortcutTooltip:title property, which can be used to
         * override the default title for the tooltip as discovered from the
         * shortcut manager.
         * @param title a title for the tooltip, or %NULL
         */
        set_title(title?: string | null): void;
        /**
         * Sets the widget to connect to the #GtkWidget::query-tooltip signal.
         *
         * If configured, the widget will be displayed with an appropriate tooltip
         * message matching the shortcut from #DzlShortcutTooltip:command-id.
         * @param widget a #GtkWidget or %NULL
         */
        set_widget(widget?: Gtk.Widget | null): void;
    }

    module ShortcutsGroup {
        // Constructor properties interface
    }

    class ShortcutsGroup extends Gtk.Box {
        // Own properties of Dazzle-1.0.ShortcutsGroup

        /**
         * The size group for the accelerator portion of shortcuts in this group.
         *
         * This is used internally by GTK+, and must not be modified by applications.
         */
        accel_size_group: Gtk.SizeGroup;
        /**
         * The size group for the accelerator portion of shortcuts in this group.
         *
         * This is used internally by GTK+, and must not be modified by applications.
         */
        accelSizeGroup: Gtk.SizeGroup;
        /**
         * A rough measure for the number of lines in this group.
         *
         * This is used internally by GTK+, and is not useful for applications.
         */
        readonly height: number;
        /**
         * The title for this group of shortcuts.
         */
        title: string;
        /**
         * The size group for the textual portion of shortcuts in this group.
         *
         * This is used internally by GTK+, and must not be modified by applications.
         */
        title_size_group: Gtk.SizeGroup;
        /**
         * The size group for the textual portion of shortcuts in this group.
         *
         * This is used internally by GTK+, and must not be modified by applications.
         */
        titleSizeGroup: Gtk.SizeGroup;
        /**
         * An optional view that the shortcuts in this group are relevant for.
         * The group will be hidden if the #DzlShortcutsWindow:view-name property
         * does not match the view of this group.
         *
         * Set this to %NULL to make the group always visible.
         */
        view: string;
    }

    module ShortcutsSection {
        // Signal callback interfaces

        interface ChangeCurrentPage {
            (object: number): boolean;
        }

        // Constructor properties interface
    }

    class ShortcutsSection extends Gtk.Box {
        // Own properties of Dazzle-1.0.ShortcutsSection

        /**
         * The maximum number of lines to allow per column. This property can
         * be used to influence how the groups in this section are distributed
         * across pages and columns. The default value of 15 should work in
         * for most cases.
         */
        max_height: number;
        /**
         * The maximum number of lines to allow per column. This property can
         * be used to influence how the groups in this section are distributed
         * across pages and columns. The default value of 15 should work in
         * for most cases.
         */
        maxHeight: number;
        /**
         * A unique name to identify this section among the sections
         * added to the DzlShortcutsWindow. Setting the #DzlShortcutsWindow:section-name
         * property to this string will make this section shown in the
         * DzlShortcutsWindow.
         */
        section_name: string;
        /**
         * A unique name to identify this section among the sections
         * added to the DzlShortcutsWindow. Setting the #DzlShortcutsWindow:section-name
         * property to this string will make this section shown in the
         * DzlShortcutsWindow.
         */
        sectionName: string;
        /**
         * The string to show in the section selector of the DzlShortcutsWindow
         * for this section. If there is only one section, you don't need to
         * set a title, since the section selector will not be shown in this case.
         */
        title: string;
        /**
         * A view name to filter the groups in this section by.
         * See #DzlShortcutsGroup:view.
         *
         * Applications are expected to use the #DzlShortcutsWindow:view-name
         * property for this purpose.
         */
        view_name: string;
        /**
         * A view name to filter the groups in this section by.
         * See #DzlShortcutsGroup:view.
         *
         * Applications are expected to use the #DzlShortcutsWindow:view-name
         * property for this purpose.
         */
        viewName: string;
    }

    module ShortcutsShortcut {
        // Constructor properties interface
    }

    class ShortcutsShortcut extends Gtk.Box {
        // Own properties of Dazzle-1.0.ShortcutsShortcut

        /**
         * The size group for the accelerator portion of this shortcut.
         *
         * This is used internally by GTK+, and must not be modified by applications.
         */
        accel_size_group: Gtk.SizeGroup;
        /**
         * The size group for the accelerator portion of this shortcut.
         *
         * This is used internally by GTK+, and must not be modified by applications.
         */
        accelSizeGroup: Gtk.SizeGroup;
        /**
         * The accelerator(s) represented by this object. This property is used
         * if #DzlShortcutsShortcut:shortcut-type is set to #GTK_SHORTCUT_ACCELERATOR.
         *
         * The syntax of this property is (an extension of) the syntax understood by
         * gtk_accelerator_parse(). Multiple accelerators can be specified by separating
         * them with a space, but keep in mind that the available width is limited.
         * It is also possible to specify ranges of shortcuts, using ... between the keys.
         * Sequences of keys can be specified using a + or &amp; between the keys.
         *
         * Examples:
         * - A single shortcut: &amp;lt;ctl&amp;gt;&amp;lt;alt&amp;gt;delete
         * - Two alternative shortcuts: &amp;lt;shift&amp;gt;a Home
         * - A range of shortcuts: &amp;lt;alt&amp;gt;1...&amp;lt;alt&amp;gt;9
         * - Several keys pressed together: Control_L&amp;Control_R
         * - A sequence of shortcuts or keys: &amp;lt;ctl&amp;gt;c+&amp;lt;ctl&amp;gt;x
         *
         * Use + instead of &amp; when the keys may (or have to be) pressed sequentially (e.g
         * use t+t for 'press the t key twice').
         *
         * Note that &lt;, &gt; and &amp; need to be escaped as &amp;lt;, &amp;gt; and &amp;amp; when used
         * in .ui files.
         */
        accelerator: string;
        /**
         * A detailed action name. If this is set for a shortcut
         * of type %GTK_SHORTCUT_ACCELERATOR, then GTK+ will use
         * the accelerators that are associated with the action
         * via gtk_application_set_accels_for_action(), and setting
         * #DzlShortcutsShortcut::accelerator is not necessary.
         */
        action_name: string;
        /**
         * A detailed action name. If this is set for a shortcut
         * of type %GTK_SHORTCUT_ACCELERATOR, then GTK+ will use
         * the accelerators that are associated with the action
         * via gtk_application_set_accels_for_action(), and setting
         * #DzlShortcutsShortcut::accelerator is not necessary.
         */
        actionName: string;
        /**
         * The text direction for which this shortcut is active. If the shortcut
         * is used regardless of the text direction, set this property to
         * #GTK_TEXT_DIR_NONE.
         */
        direction: Gtk.TextDirection;
        /**
         * An icon to represent the shortcut or gesture. This property is used if
         * #DzlShortcutsShortcut:shortcut-type is set to #GTK_SHORTCUT_GESTURE.
         * For the other predefined gesture types, GTK+ provides an icon on its own.
         */
        icon: Gio.Icon;
        /**
         * %TRUE if an icon has been set.
         */
        icon_set: boolean;
        /**
         * %TRUE if an icon has been set.
         */
        iconSet: boolean;
        /**
         * The type of shortcut that is represented.
         */
        shortcut_type: Gtk.ShortcutType;
        /**
         * The type of shortcut that is represented.
         */
        shortcutType: Gtk.ShortcutType;
        /**
         * The subtitle for the shortcut or gesture.
         *
         * This is typically used for gestures and should be a short, one-line
         * text that describes the gesture itself. For the predefined gesture
         * types, GTK+ provides a subtitle on its own.
         */
        subtitle: string;
        /**
         * %TRUE if a subtitle has been set.
         */
        subtitle_set: boolean;
        /**
         * %TRUE if a subtitle has been set.
         */
        subtitleSet: boolean;
        /**
         * The textual description for the shortcut or gesture represented by
         * this object. This should be a short string that can fit in a single line.
         */
        title: string;
        /**
         * The size group for the textual portion of this shortcut.
         *
         * This is used internally by GTK+, and must not be modified by applications.
         */
        title_size_group: Gtk.SizeGroup;
        /**
         * The size group for the textual portion of this shortcut.
         *
         * This is used internally by GTK+, and must not be modified by applications.
         */
        titleSizeGroup: Gtk.SizeGroup;
    }

    module ShortcutsWindow {
        // Signal callback interfaces

        interface Close {
            (): void;
        }

        interface Search {
            (): void;
        }

        // Constructor properties interface
    }

    class ShortcutsWindow extends Gtk.Window {
        // Own properties of Dazzle-1.0.ShortcutsWindow

        /**
         * The name of the section to show.
         *
         * This should be the section-name of one of the #DzlShortcutsSection
         * objects that are in this shortcuts window.
         */
        section_name: string;
        /**
         * The name of the section to show.
         *
         * This should be the section-name of one of the #DzlShortcutsSection
         * objects that are in this shortcuts window.
         */
        sectionName: string;
        /**
         * The view name by which to filter the contents.
         *
         * This should correspond to the #DzlShortcutsGroup:view property of some of
         * the #DzlShortcutsGroup objects that are inside this shortcuts window.
         *
         * Set this to %NULL to show all groups.
         */
        view_name: string;
        /**
         * The view name by which to filter the contents.
         *
         * This should correspond to the #DzlShortcutsGroup:view property of some of
         * the #DzlShortcutsGroup objects that are inside this shortcuts window.
         *
         * Set this to %NULL to show all groups.
         */
        viewName: string;

        // Own fields of Dazzle-1.0.ShortcutsWindow

        window: Gtk.Window;
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
     * #DzlSignalGroup manages to simplify the process of connecting
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
     * #GtkTextView:buffer property to #DzlSignalGroup:target and connect
     * all the signals you need. When the #GtkTextView:buffer property changes
     * all of the signals will be transitioned correctly.
     */
    class SignalGroup extends GObject.Object {
        // Own properties of Dazzle-1.0.SignalGroup

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

        // Constructors of Dazzle-1.0.SignalGroup

        static ['new'](target_type: GObject.GType): SignalGroup;

        // Owm methods of Dazzle-1.0.SignalGroup

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
         * that has been registered with dzl_signal_group_connect_object() or
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
        // Own properties of Dazzle-1.0.SimpleLabel

        label: string;
        width_chars: number;
        widthChars: number;
        xalign: number;

        // Constructors of Dazzle-1.0.SimpleLabel

        static ['new'](label: string): SimpleLabel;

        // Owm methods of Dazzle-1.0.SimpleLabel

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
        // Own properties of Dazzle-1.0.SimplePopover

        button_text: string;
        buttonText: string;
        message: string;
        ready: boolean;
        text: string;
        title: string;

        // Constructors of Dazzle-1.0.SimplePopover

        static ['new'](): SimplePopover;

        // Owm methods of Dazzle-1.0.SimplePopover

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
        // Own properties of Dazzle-1.0.Slider

        position: SliderPosition;

        // Constructors of Dazzle-1.0.Slider

        static ['new'](): Slider;

        // Owm methods of Dazzle-1.0.Slider

        add_slider(widget: Gtk.Widget, position: SliderPosition): void;
        get_position(): SliderPosition;
        set_position(position: SliderPosition): void;
    }

    module StackList {
        // Signal callback interfaces

        interface HeaderActivated {
            (object: Gtk.ListBoxRow): void;
        }

        interface RowActivated {
            (object: Gtk.ListBoxRow): void;
        }

        // Constructor properties interface
    }

    class StackList extends Gtk.Bin {
        // Own properties of Dazzle-1.0.StackList

        readonly model: Gio.ListModel;

        // Constructors of Dazzle-1.0.StackList

        static ['new'](): StackList;

        // Owm methods of Dazzle-1.0.StackList

        clear(): void;
        get_depth(): number;
        get_model(): Gio.ListModel;
        pop(): void;
        push(header: Gtk.Widget, model: Gio.ListModel, create_widget_func: StackListCreateWidgetFunc): void;
    }

    module StateMachine {
        // Constructor properties interface
    }

    class StateMachine extends GObject.Object {
        // Own properties of Dazzle-1.0.StateMachine

        state: string;

        // Constructors of Dazzle-1.0.StateMachine

        static ['new'](): StateMachine;

        // Owm methods of Dazzle-1.0.StateMachine

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
         * Gets the #DzlStateMachine:state property. This is the name of the
         * current state of the machine.
         * @returns The current state of the machine.
         */
        get_state(): string;
        /**
         * Checks to see if the current state of the #DzlStateMachine matches `state`.
         * @param state the name of the state to check
         * @returns %TRUE if @self is currently set to @state.
         */
        is_state(state?: string | null): boolean;
        /**
         * Sets the #DzlStateMachine:state property.
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
        // Own properties of Dazzle-1.0.Suggestion

        readonly icon: Gio.Icon;
        icon_name: string;
        iconName: string;
        id: string;
        readonly secondary_icon: Gio.Icon;
        readonly secondaryIcon: Gio.Icon;
        secondary_icon_name: string;
        secondaryIconName: string;
        subtitle: string;
        title: string;

        // Constructors of Dazzle-1.0.Suggestion

        static ['new'](): Suggestion;

        // Owm methods of Dazzle-1.0.Suggestion

        /**
         * Gets the icon for the suggestion, if any.
         * @returns a #GIcon or %NULL
         */
        get_icon(): Gio.Icon | null;
        get_icon_name(): string;
        /**
         * This function allows subclasses to dynamicly generate content for the
         * suggestion such as may be required when integrating with favicons or
         * similar.
         *
         * `widget` is provided so that the implementation may determine scale or
         * any other style-specific settings from the style context.
         * @param widget a widget that may contain the surface
         * @returns a #cairo_surface_t or %NULL
         */
        get_icon_surface(widget: Gtk.Widget): cairo.Surface | null;
        get_id(): string;
        /**
         * Gets the secondary icon for the suggestion, if any.
         * @returns a #GIcon or %NULL
         */
        get_secondary_icon(): Gio.Icon | null;
        get_secondary_icon_name(): string;
        /**
         * This function allows subclasses to dynamicly generate content for the
         * suggestion such as may be required when integrating with favicons or
         * similar.
         *
         * `widget` is provided so that the implementation may determine scale or
         * any other style-specific settings from the style context.
         * @param widget a widget that may contain the surface
         * @returns a #cairo_surface_t or %NULL
         */
        get_secondary_icon_surface(widget: Gtk.Widget): cairo.Surface | null;
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
        set_secondary_icon_name(icon_name: string): void;
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

    module SuggestionButton {
        // Constructor properties interface
    }

    class SuggestionButton extends Gtk.Stack {
        // Own properties of Dazzle-1.0.SuggestionButton

        readonly button: Gtk.Button;
        readonly entry: SuggestionEntry;

        // Constructors of Dazzle-1.0.SuggestionButton

        static ['new'](): SuggestionButton;

        // Owm methods of Dazzle-1.0.SuggestionButton

        get_button(): Gtk.Button;
        get_entry(): SuggestionEntry;
    }

    module SuggestionEntry {
        // Signal callback interfaces

        interface Action {
            (object: string, p0: string, p1: string): void;
        }

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

        interface SuggestionSelected {
            (suggestion: Suggestion): void;
        }

        // Constructor properties interface
    }

    class SuggestionEntry extends Gtk.Entry {
        // Own properties of Dazzle-1.0.SuggestionEntry

        /**
         * The "activate-on-single-click" property denotes if results should be
         * activated simply by clicking on them. You may want to set this to
         * %FALSE if you want the behavior to only select the item.
         */
        activate_on_single_click: boolean;
        /**
         * The "activate-on-single-click" property denotes if results should be
         * activated simply by clicking on them. You may want to set this to
         * %FALSE if you want the behavior to only select the item.
         */
        activateOnSingleClick: boolean;
        /**
         * The "compact" property denotes if an alternate style should be used to
         * reduce the width of the rows. This may be ideal in size contrained
         * situations with portrait display.
         */
        compact: boolean;
        model: Gio.ListModel;
        /**
         * The "suggestion" property is the currently selected suggestion, if any.
         */
        suggestion: Suggestion;
        readonly typed_text: string;
        readonly typedText: string;

        // Constructors of Dazzle-1.0.SuggestionEntry

        static ['new'](): SuggestionEntry;

        // Owm methods of Dazzle-1.0.SuggestionEntry

        default_position_func(area: Gdk.Rectangle, is_absolute: boolean, user_data?: any | null): void;
        get_activate_on_single_click(): boolean;
        /**
         * Gets the #DzlSuggestionEntry:compact property.
         * @returns %TRUE if compact-mode is in use.
         */
        get_compact(): boolean;
        /**
         * Gets the model being visualized.
         * @returns A #GListModel or %NULL.
         */
        get_model(): Gio.ListModel | null;
        /**
         * Gets the result display widget for the entry. This is currently
         * always a #DzlSuggestionPopover.
         * @returns a #GtkWidget
         */
        get_popover(): Gtk.Widget;
        /**
         * Gets the currently selected suggestion.
         * @returns An #DzlSuggestion or %NULL.
         */
        get_suggestion(): Suggestion | null;
        get_typed_text(): string;
        hide_suggestions(): void;
        set_activate_on_single_click(activate_on_single_click: boolean): void;
        /**
         * Sets the #DzlSuggestionEntry:compact property.
         * @param compact if compact mode should be used
         */
        set_compact(compact: boolean): void;
        set_model(model: Gio.ListModel): void;
        /**
         * Sets a position func to position the popover.
         *
         * In `func,` you should set the height of the rectangle to the maximum height
         * that the popover should be allowed to grow.
         * @param func A function to call to position the popover, or %NULL to set the default.
         * @param func_data_destroy a destroy notify for @func_data
         */
        set_position_func(func?: SuggestionPositionFunc | null, func_data_destroy?: GLib.DestroyNotify | null): void;
        set_suggestion(suggestion: Suggestion): void;
        /**
         * This is a #DzlSuggestionPositionFunc that can be used to make the suggestion
         * popover the full width of the window. It is similar to what you might find
         * in a web browser.
         * @param area
         * @param is_absolute
         * @param user_data
         */
        window_position_func(area: Gdk.Rectangle, is_absolute: boolean, user_data?: any | null): void;
    }

    module SuggestionEntryBuffer {
        // Constructor properties interface
    }

    class SuggestionEntryBuffer extends Gtk.EntryBuffer {
        // Own properties of Dazzle-1.0.SuggestionEntryBuffer

        suggestion: Suggestion;

        // Constructors of Dazzle-1.0.SuggestionEntryBuffer

        static ['new'](): SuggestionEntryBuffer;

        // Owm methods of Dazzle-1.0.SuggestionEntryBuffer

        clear(): void;
        commit(): void;
        /**
         * Gets the #DzlSuggestion that is the current "preview suffix" of the
         * text in the entry.
         * @returns An #DzlSuggestion or %NULL.
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
         * @param suggestion An #DzlSuggestion or %NULL
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
        // Own properties of Dazzle-1.0.SuggestionPopover

        model: Suggestion;
        relative_to: Gtk.Widget;
        relativeTo: Gtk.Widget;
        selected: Suggestion;
        subtitle_ellipsize: Pango.EllipsizeMode;
        subtitleEllipsize: Pango.EllipsizeMode;
        title_ellipsize: Pango.EllipsizeMode;
        titleEllipsize: Pango.EllipsizeMode;

        // Constructors of Dazzle-1.0.SuggestionPopover

        static ['new'](): SuggestionPopover;

        // Owm methods of Dazzle-1.0.SuggestionPopover

        activate_selected(): void;
        /**
         * Gets the model being visualized.
         * @returns A #GListModel or %NULL.
         */
        get_model(): Gio.ListModel | null;
        get_relative_to(): Gtk.Widget | null;
        /**
         * Gets the currently selected suggestion.
         * @returns An #DzlSuggestion or %NULL.
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

    class SuggestionRow extends ListBoxRow {
        // Own properties of Dazzle-1.0.SuggestionRow

        orientation: Gtk.Orientation;
        suggestion: Suggestion;

        // Constructors of Dazzle-1.0.SuggestionRow

        static ['new'](): SuggestionRow;

        // Owm methods of Dazzle-1.0.SuggestionRow

        /**
         * Gets the suggestion to be displayed.
         * @returns An #DzlSuggestion
         */
        get_suggestion(): Suggestion;
        set_suggestion(suggestion: Suggestion): void;
    }

    module Tab {
        // Signal callback interfaces

        interface Clicked {
            (): void;
        }

        // Constructor properties interface
    }

    class Tab extends Bin {
        // Own properties of Dazzle-1.0.Tab

        active: boolean;
        can_close: boolean;
        canClose: boolean;
        edge: Gtk.PositionType;
        style: TabStyle;
        title: string;
        widget: Gtk.Widget;

        // Owm methods of Dazzle-1.0.Tab

        get_active(): boolean;
        get_can_close(): boolean;
        get_edge(): Gtk.PositionType;
        get_icon_name(): string;
        get_style(): TabStyle;
        get_title(): string;
        get_widget(): Gtk.Widget | null;
        set_active(active: boolean): void;
        set_can_close(can_close: boolean): void;
        set_edge(edge: Gtk.PositionType): void;
        set_gicon(gicon: Gio.Icon): void;
        set_icon_name(icon_name: string): void;
        set_style(style: TabStyle): void;
        set_title(title: string): void;
        set_widget(widget: Gtk.Widget): void;
    }

    module TabStrip {
        // Constructor properties interface
    }

    class TabStrip extends Gtk.Box {
        // Own properties of Dazzle-1.0.TabStrip

        edge: Gtk.PositionType;
        stack: Gtk.Stack;
        style: TabStyle;

        // Constructors of Dazzle-1.0.TabStrip

        static ['new'](): TabStrip;

        // Owm methods of Dazzle-1.0.TabStrip

        add_control(widget: Gtk.Widget): void;
        get_edge(): Gtk.PositionType;
        get_stack(): Gtk.Stack | null;
        get_style(): TabStyle;
        set_edge(edge: Gtk.PositionType): void;
        set_stack(stack: Gtk.Stack): void;
        set_style(style: TabStyle): void;
    }

    module TaskCache {
        // Constructor properties interface
    }

    class TaskCache extends GObject.Object {
        // Own properties of Dazzle-1.0.TaskCache

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

        // Owm methods of Dazzle-1.0.TaskCache

        evict(key?: any | null): boolean;
        evict_all(): void;
        get_async(
            key: any | null,
            force_update: boolean,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Finish a call to dzl_task_cache_get_async().
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

    module ThemeManager {
        // Constructor properties interface
    }

    class ThemeManager extends GObject.Object {
        // Constructors of Dazzle-1.0.ThemeManager

        static ['new'](): ThemeManager;

        // Owm methods of Dazzle-1.0.ThemeManager

        /**
         * This will automatically register resources found within `resource_path`.
         *
         * If `resource_path` starts with "resource://", embedded #GResources will be
         * used to locate the theme files. Otherwise, `resource_path` is expected to be
         * a path on disk that may or may not exist.
         *
         * If the `resource_path` contains a directory named "themes", that directory
         * will be traversed for files matching the theme name and variant. For
         * example, if using the Adwaita theme, "themes/Adwaita.css" will be loaded. If
         * the dark variant is being used, "themes/Adwaita-dark.css" will be loaeded. If
         * no matching theme file is located, "themes/shared.css" will be loaded.
         *
         * When the current theme changes, the CSS will be reloaded to adapt.
         *
         * The "icons" sub-directory will be used to locate icon themes.
         * @param resource_path A path to a #GResources directory
         */
        add_resources(resource_path: string): void;
        /**
         * This removes the CSS providers that were registered using `resource_path`.
         *
         * You must have previously called dzl_theme_manager_add_resources() for
         * this function to do anything.
         *
         * Since icons cannot be unloaded, previously loaded icons will continue to
         * be available even after calling this function.
         * @param resource_path A previously registered resources path
         */
        remove_resources(resource_path: string): void;
    }

    module ThreeGrid {
        // Constructor properties interface
    }

    class ThreeGrid extends Gtk.Container {
        // Own properties of Dazzle-1.0.ThreeGrid

        column_spacing: number;
        columnSpacing: number;
        row_spacing: number;
        rowSpacing: number;

        // Constructors of Dazzle-1.0.ThreeGrid

        static ['new'](): ThreeGrid;
    }

    module Tree {
        // Signal callback interfaces

        interface Action {
            (object: string, p0: string, p1: string): void;
        }

        interface PopulatePopup {
            (object: Gtk.Widget): void;
        }

        // Constructor properties interface
    }

    class Tree extends Gtk.TreeView {
        // Own properties of Dazzle-1.0.Tree

        always_expand: boolean;
        alwaysExpand: boolean;
        context_menu: Gio.MenuModel;
        contextMenu: Gio.MenuModel;
        root: TreeNode;
        selection: TreeNode;
        show_icons: boolean;
        showIcons: boolean;

        // Owm methods of Dazzle-1.0.Tree

        /**
         * Add a builder to the tree.
         * @param builder A #DzlTreeBuilder to add.
         */
        add_builder(builder: TreeBuilder): void;
        expand_to_node(node: TreeNode): void;
        /**
         * Searches through the direct children of `node` for a matching child.
         * `find_func` should return %TRUE if the child matches, otherwise %FALSE.
         * @param node A #DzlTreeNode
         * @param find_func A callback to locate the child
         * @returns A #DzlTreeNode or %NULL.
         */
        find_child_node(node: TreeNode, find_func: TreeFindFunc): TreeNode | null;
        /**
         * Walks the entire tree looking for the first item that matches given
         * `equal_func` and `key`.
         *
         * The first parameter to `equal_func` will always be `key`.
         * The second parameter will be the nodes #DzlTreeNode:item property.
         * @param equal_func A #GEqualFunc
         * @param key the key for @equal_func
         * @returns A #DzlTreeNode or %NULL.
         */
        find_custom(equal_func: GLib.EqualFunc, key?: any | null): TreeNode | null;
        /**
         * Finds a #DzlTreeNode with an item property matching `item`.
         * @param item A #GObject or %NULL.
         * @returns A #DzlTreeNode or %NULL.
         */
        find_item(item?: GObject.Object | null): TreeNode | null;
        get_context_menu(): Gio.MenuModel | null;
        /**
         * Retrieves the root node of the tree. The root node is not a visible node
         * in the self, but a placeholder for all other builders to build upon.
         * @returns A #DzlTreeNode or %NULL.
         */
        get_root(): TreeNode | null;
        /**
         * Gets the currently selected node in the tree.
         * @returns A #DzlTreeNode.
         */
        get_selected(): TreeNode;
        get_show_icons(): boolean;
        rebuild(): void;
        /**
         * Removes a builder from the tree.
         * @param builder A #DzlTreeBuilder to remove.
         */
        remove_builder(builder: TreeBuilder): void;
        scroll_to_node(node: TreeNode): void;
        set_context_menu(context_menu: Gio.MenuModel): void;
        /**
         * Sets the filter function to be used to determine visability of a tree node.
         * @param filter_func A callback to determien visibility.
         */
        set_filter(filter_func: TreeFilterFunc): void;
        /**
         * Sets the root node of the #DzlTree widget. This is used to build
         * the items within the treeview. The item itself will not be added
         * to the self, but the direct children will be.
         * @param node A #DzlTreeNode.
         */
        set_root(node: TreeNode): void;
        set_show_icons(show_icons: boolean): void;
        /**
         * Unselects the currently selected node in the tree.
         */
        unselect_all(): void;
    }

    module TreeBuilder {
        // Signal callback interfaces

        interface Added {
            (object: Tree): void;
        }

        interface BuildChildren {
            (object: TreeNode): void;
        }

        interface BuildNode {
            (object: TreeNode): void;
        }

        interface DragDataGet {
            (object: TreeNode, p0: Gtk.SelectionData): boolean;
        }

        interface DragDataReceived {
            (object: TreeNode, p0: TreeDropPosition, p1: Gdk.DragAction, p2: Gtk.SelectionData): boolean;
        }

        interface DragNodeDelete {
            (object: TreeNode): boolean;
        }

        interface DragNodeReceived {
            (object: TreeNode, p0: TreeNode, p1: TreeDropPosition, p2: Gdk.DragAction, p3: Gtk.SelectionData): boolean;
        }

        interface NodeActivated {
            (object: TreeNode): boolean;
        }

        interface NodeCollapsed {
            (object: TreeNode): void;
        }

        interface NodeDraggable {
            (object: TreeNode): boolean;
        }

        interface NodeDroppable {
            (object: TreeNode, p0: Gtk.SelectionData): boolean;
        }

        interface NodeExpanded {
            (object: TreeNode): void;
        }

        interface NodePopup {
            (object: TreeNode, p0: Gio.Menu): void;
        }

        interface NodeSelected {
            (object: TreeNode): void;
        }

        interface NodeUnselected {
            (object: TreeNode): void;
        }

        interface Removed {
            (object: Tree): void;
        }

        // Constructor properties interface
    }

    class TreeBuilder extends GObject.InitiallyUnowned {
        // Own properties of Dazzle-1.0.TreeBuilder

        readonly tree: Tree;

        // Constructors of Dazzle-1.0.TreeBuilder

        static ['new'](): TreeBuilder;

        // Owm methods of Dazzle-1.0.TreeBuilder

        /**
         * Gets the tree that owns the builder.
         * @returns A #DzlTree or %NULL.
         */
        get_tree(): Tree | null;
    }

    module TreeNode {
        // Constructor properties interface
    }

    class TreeNode extends GObject.InitiallyUnowned {
        // Own properties of Dazzle-1.0.TreeNode

        /**
         * This property allows for more lazy loading of nodes.
         *
         * When a node becomes visible, we normally build its children nodes
         * so that we know if we need an expansion arrow. However, that can
         * be expensive when rendering directories with lots of subdirectories.
         *
         * Using this, you can always show an arrow without building the children
         * and simply hide the arrow if there were in fact no children (upon
         * expansion).
         */
        children_possible: boolean;
        /**
         * This property allows for more lazy loading of nodes.
         *
         * When a node becomes visible, we normally build its children nodes
         * so that we know if we need an expansion arrow. However, that can
         * be expensive when rendering directories with lots of subdirectories.
         *
         * Using this, you can always show an arrow without building the children
         * and simply hide the arrow if there were in fact no children (upon
         * expansion).
         */
        childrenPossible: boolean;
        expanded_icon_name: string;
        expandedIconName: string;
        /**
         * The cached GIcon to display.
         */
        gicon: Gio.Icon;
        /**
         * An icon-name to display on the row.
         */
        icon_name: string;
        /**
         * An icon-name to display on the row.
         */
        iconName: string;
        /**
         * An optional #GObject to associate with the node.
         */
        item: GObject.Object;
        /**
         * The parent of the node.
         */
        readonly parent: TreeNode;
        /**
         * The "reset-on-collapse" property denotes that all children should be
         * removed from the node when it's row is collapsed. It will also set
         * #DzlTreeNode:needs-build to %TRUE so the next expansion rebuilds the
         * children. This is useful for situations where you want to ensure the nodes
         * are up to date (refreshed) on every expansion.
         */
        reset_on_collapse: boolean;
        /**
         * The "reset-on-collapse" property denotes that all children should be
         * removed from the node when it's row is collapsed. It will also set
         * #DzlTreeNode:needs-build to %TRUE so the next expansion rebuilds the
         * children. This is useful for situations where you want to ensure the nodes
         * are up to date (refreshed) on every expansion.
         */
        resetOnCollapse: boolean;
        /**
         * Text to display on the tree node.
         */
        text: string;
        /**
         * The tree the node belongs to.
         */
        tree: Tree;
        use_dim_label: boolean;
        useDimLabel: boolean;
        /**
         * If the "text" property includes #GMarkup.
         */
        use_markup: boolean;
        /**
         * If the "text" property includes #GMarkup.
         */
        useMarkup: boolean;

        // Constructors of Dazzle-1.0.TreeNode

        static ['new'](): TreeNode;

        // Owm methods of Dazzle-1.0.TreeNode

        /**
         * Adds an emplem to be rendered on top of the node.
         *
         * Use dzl_tree_node_remove_emblem() to remove an emblem.
         * @param emblem_name the icon-name of the emblem
         */
        add_emblem(emblem_name: string): void;
        /**
         * Appends `child` to the list of children owned by `node`.
         * @param child A #DzlTreeNode.
         */
        append(child: TreeNode): void;
        /**
         * Removes all emblems from `self`.
         */
        clear_emblems(): void;
        collapse(): void;
        expand(expand_ancestors: boolean): boolean;
        get_area(area: Gdk.Rectangle): void;
        get_children_possible(): boolean;
        get_expanded(): boolean;
        /**
         * Gets the foreground-rgba to use for row text.
         *
         * If %NULL, the default foreground color should be used.
         * @returns A #GdkRGBA or %NULL
         */
        get_foreground_rgba(): Gdk.RGBA | null;
        /**
         * Fetch the GIcon, re-render if necessary
         * @returns An #GIcon or %NULL.
         */
        get_gicon(): Gio.Icon;
        /**
         * Fetches the icon-name of the icon to display, or NULL for no icon.
         */
        get_icon_name(): string;
        /**
         * Gets a #GObject for the node, if one was set.
         * @returns A #GObject or %NULL.
         */
        get_item<T = GObject.Object>(): T;
        get_iter(iter: Gtk.TreeIter): boolean;
        /**
         * Retrieves the parent #DzlTreeNode for `node`.
         * @returns A #DzlTreeNode.
         */
        get_parent(): TreeNode;
        /**
         * Gets a #GtkTreePath for `node`.
         * @returns A #GtkTreePath if successful; otherwise %NULL.
         */
        get_path(): Gtk.TreePath | null;
        get_reset_on_collapse(): boolean;
        get_text(): string;
        /**
         * Fetches the #DzlTree instance that owns the node.
         * @returns A #DzlTree.
         */
        get_tree(): Tree;
        get_use_dim_label(): boolean;
        get_use_markup(): boolean;
        /**
         * Checks to see if `emblem_name` has been added to the #DzlTreeNode.
         * @param emblem_name a string containing the emblem name
         * @returns %TRUE if @emblem_name is used by @self
         */
        has_emblem(emblem_name: string): boolean;
        /**
         * Inserts `child` as a child of `self` at `position`.
         * @param child a #DzlTreeNode
         * @param position the position for the child
         */
        insert(child: TreeNode, position: number): void;
        /**
         * Inserts a `child` as a child of `node,` sorting it among the other children.
         * @param child A #DzlTreeNode.
         * @param compare_func A compare func to compare nodes.
         */
        insert_sorted(child: TreeNode, compare_func: TreeNodeCompareFunc): void;
        invalidate(): void;
        is_root(): boolean;
        n_children(): number;
        /**
         * Gets the `nth` child of `self` or %NULL if it does not exist.
         * @param nth the index of the child
         * @returns a #DzlTreeNode or %NULL
         */
        nth_child(nth: number): TreeNode | null;
        /**
         * Prepends `child` to the list of children owned by `node`.
         * @param child A #DzlTreeNode.
         */
        prepend(child: TreeNode): void;
        /**
         * Rebuilds a node, without invalidating children nodes. If you want to
         * ensure that children are also rebuilt, use dzl_tree_node_invalidate().
         */
        rebuild(): void;
        /**
         * Removes `child` from the list of children owned by `node`.
         * @param child A #DzlTreeNode.
         */
        remove(child: TreeNode): void;
        remove_emblem(emblem_name: string): void;
        select(): void;
        /**
         * If the node has not yet been built, setting this to %TRUE will add a
         * dummy child node. This dummy node will be removed when when the node
         * is built by the registered #DzlTreeBuilder instances.
         * @param children_possible If the node has children.
         */
        set_children_possible(children_possible: boolean): void;
        set_emblems(emblems: string): void;
        /**
         * Sets the foreground-rgba to be used by the row text.
         *
         * If `foreground_rgba` is %NULL, the value is reset to the default.
         * @param foreground_rgba A #GdkRGBA or %NULL
         */
        set_foreground_rgba(foreground_rgba?: Gdk.RGBA | null): void;
        set_gicon(icon: Gio.Icon): void;
        /**
         * Sets the icon name of the node. This is displayed in the pixbuf
         * cell of the DzlTree.
         * @param icon_name The icon name.
         */
        set_icon_name(icon_name?: string | null): void;
        /**
         * An optional object to associate with the node. This is handy to save needing
         * to subclass the #DzlTreeNode class.
         * @param item A #GObject.
         */
        set_item(item: GObject.Object): void;
        set_reset_on_collapse(reset_on_collapse: boolean): void;
        /**
         * Sets the text of the node. This is displayed in the text
         * cell of the DzlTree.
         * @param text The node text.
         */
        set_text(text?: string | null): void;
        set_use_dim_label(use_dim_label: boolean): void;
        set_use_markup(use_markup: boolean): void;
        show_popover(popover: Gtk.Popover): void;
    }

    module WidgetActionGroup {
        // Constructor properties interface
    }

    class WidgetActionGroup extends GObject.Object {
        // Own properties of Dazzle-1.0.WidgetActionGroup

        widget: Gtk.Widget;

        // Owm methods of Dazzle-1.0.WidgetActionGroup

        /**
         * Helper function to create an #DzlWidgetActionGroup and attach
         * it to `widget` using the group name `group_name`.
         * @param widget A #GtkWidget
         * @param group_name the group name to use for the action group
         */
        static attach(widget: Gtk.Widget, group_name: string): void;
        static new(widget: Gtk.Widget): Gio.ActionGroup;

        // Owm methods of Dazzle-1.0.WidgetActionGroup

        set_action_enabled(action_name: string, enabled: boolean): void;
    }

    class AnimationClass {}

    class ApplicationClass {}

    class ApplicationWindowClass {}

    class BinClass {}

    class BindingGroupClass {}

    class BoldingLabelClass {}

    class BoxClass {}

    class BoxTheatricClass {}

    class CenteringBinClass {}

    class ChildPropertyActionClass {}

    class ColumnLayoutClass {}

    class Counter {
        // Own fields of Dazzle-1.0.Counter

        values: CounterValue;
        category: string;
        name: string;
        description: string;

        // Constructors of Dazzle-1.0.Counter

        constructor(
            properties?: Partial<{
                category: string;
                name: string;
                description: string;
            }>,
        );

        // Owm methods of Dazzle-1.0.Counter

        get(): number;
        reset(): void;
    }

    class CounterArena {
        // Constructors of Dazzle-1.0.CounterArena

        constructor(pid: GLib.Pid);

        static new_for_pid(pid: GLib.Pid): CounterArena;

        // Owm methods of Dazzle-1.0.CounterArena

        static get_default(): CounterArena;

        // Owm methods of Dazzle-1.0.CounterArena

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
        // Own fields of Dazzle-1.0.CounterValue

        value: number;
        padding: number[];

        // Constructors of Dazzle-1.0.CounterValue

        constructor(
            properties?: Partial<{
                value: number;
                padding: number[];
            }>,
        );
    }

    class CountersWindowClass {}

    class CpuGraphClass {}

    class CpuModelClass {}

    class CssProviderClass {}

    class DirectoryModelClass {}

    class DirectoryReaperClass {}

    class DockBinClass {}

    class DockBinEdgeClass {}

    class DockInterface {}

    class DockItemInterface {}

    class DockManagerClass {}

    class DockOverlayClass {}

    class DockOverlayEdgeClass {}

    class DockPanedClass {}

    class DockRevealerClass {}

    class DockStackClass {}

    class DockTransientGrabClass {}

    class DockWidgetClass {}

    class DockWindowClass {}

    class ElasticBinClass {}

    class EmptyStateClass {}

    class EntryBoxClass {}

    class FileChooserEntryClass {}

    class FileTransferClass {}

    class FileTransferStat {
        // Own fields of Dazzle-1.0.FileTransferStat

        n_files_total: number;
        n_files: number;
        n_dirs_total: number;
        n_dirs: number;
        n_bytes_total: number;
        n_bytes: number;

        // Constructors of Dazzle-1.0.FileTransferStat

        constructor(
            properties?: Partial<{
                n_files_total: number;
                n_files: number;
                n_dirs_total: number;
                n_dirs: number;
                n_bytes_total: number;
                n_bytes: number;
            }>,
        );
    }

    class FuzzyIndexBuilderClass {}

    class FuzzyIndexClass {}

    class FuzzyIndexCursorClass {}

    class FuzzyIndexMatchClass {}

    class FuzzyMutableIndex {
        // Constructors of Dazzle-1.0.FuzzyMutableIndex

        constructor(case_sensitive: boolean);

        static ['new'](case_sensitive: boolean): FuzzyMutableIndex;

        static new_with_free_func(case_sensitive: boolean): FuzzyMutableIndex;

        // Owm methods of Dazzle-1.0.FuzzyMutableIndex

        /**
         * Start a bulk insertion. `fuzzy` is not ready for searching until
         * dzl_fuzzy_mutable_index_end_bulk_insert() has been called.
         *
         * This allows for inserting large numbers of strings and deferring
         * the final sort until dzl_fuzzy_mutable_index_end_bulk_insert().
         */
        begin_bulk_insert(): void;
        contains(key: string): boolean;
        /**
         * Complete a bulk insert and resort the index.
         */
        end_bulk_insert(): void;
        /**
         * Inserts a string into the fuzzy matcher.
         * @param key A UTF-8 encoded string.
         * @param value A value to associate with key.
         */
        insert(key: string, value?: any | null): void;
        /**
         * DzlFuzzyMutableIndex searches within `fuzzy` for strings that fuzzy match `needle`.
         * Only up to `max_matches` will be returned.
         *
         * TODO: max_matches is not yet respected.
         * @param needle The needle to fuzzy search for.
         * @param max_matches The max number of matches to return.
         * @returns A newly allocated   #GArray containing #FuzzyMatch elements. This should be freed when   the caller is done with it using g_array_unref().   It is a programming error to keep the structure around longer than   the @fuzzy instance.
         */
        match(needle: string, max_matches: number): FuzzyMutableIndexMatch[];
        ref(): FuzzyMutableIndex;
        remove(key: string): void;
        set_free_func(): void;
        /**
         * Decrements the reference count of fuzzy by one. When the reference count
         * reaches zero, the structure will be freed.
         */
        unref(): void;
    }

    class FuzzyMutableIndexMatch {
        // Own fields of Dazzle-1.0.FuzzyMutableIndexMatch

        key: string;
        value: any;
        score: number;
        id: number;

        // Constructors of Dazzle-1.0.FuzzyMutableIndexMatch

        constructor(
            properties?: Partial<{
                key: string;
                value: any;
                score: number;
                id: number;
            }>,
        );
    }

    class GraphColumnClass {}

    class GraphLineRendererClass {}

    class GraphModelClass {}

    class GraphModelIter {
        // Own fields of Dazzle-1.0.GraphModelIter

        data: any[];

        // Constructors of Dazzle-1.0.GraphModelIter

        constructor(
            properties?: Partial<{
                data: any[];
            }>,
        );
    }

    class GraphRendererInterface {}

    class GraphViewClass {}

    /**
     * Heaps are similar to a partially sorted tree but implemented as an
     * array. They allow for efficient O(1) lookup of the highest priority
     * item as it will always be the first item of the array.
     *
     * To create a new heap use dzl_heap_new().
     *
     * To add items to the heap, use dzl_heap_insert_val() or
     * dzl_heap_insert_vals() to insert in bulk.
     *
     * To access an item in the heap, use dzl_heap_index().
     *
     * To remove an arbitrary item from the heap, use dzl_heap_extract_index().
     *
     * To remove the highest priority item in the heap, use dzl_heap_extract().
     *
     * To free a heap, use dzl_heap_unref().
     *
     * Here is an example that stores integers in a #DzlHeap:
     *
     * ```&lt;!-- language="C" --&gt;
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
     *   DzlHeap *heap;
     *   gint i;
     *   gint v;
     *
     *   heap = dzl_heap_new (sizeof (gint), cmpint);
     *
     *   for (i = 0; i &lt; 10000; i++)
     *     dzl_heap_insert_val (heap, i);
     *   for (i = 0; i &lt; 10000; i++)
     *     dzl_heap_extract (heap, &amp;v);
     *
     *   dzl_heap_unref (heap);
     * }
     * ```
     *
     */
    class Heap {
        // Own fields of Dazzle-1.0.Heap

        data: string;
        len: number;

        // Constructors of Dazzle-1.0.Heap

        constructor(
            properties?: Partial<{
                data: string;
                len: number;
            }>,
        );

        static ['new'](element_size: number, compare_func: GLib.CompareFunc): Heap;

        // Owm methods of Dazzle-1.0.Heap

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

    class JoinedMenuClass {}

    class ListBoxClass {}

    class ListBoxRowClass {}

    class ListModelFilterClass {}

    class ListStoreAdapterClass {}

    class MenuButtonClass {}

    class MenuManagerClass {}

    class MultiPanedClass {}

    class PathBarClass {}

    class PathClass {}

    class PathElementClass {}

    class PatternSpec {
        // Constructors of Dazzle-1.0.PatternSpec

        constructor(keywords: string);

        static ['new'](keywords: string): PatternSpec;

        // Owm methods of Dazzle-1.0.PatternSpec

        get_text(): string;
        match(haystack: string): boolean;
        ref(): PatternSpec;
        unref(): void;
    }

    class PillBoxClass {}

    class PreferencesBinClass {}

    class PreferencesEntryClass {}

    class PreferencesFileChooserButtonClass {}

    class PreferencesFlowBoxClass {}

    class PreferencesFontButtonClass {}

    class PreferencesGroupClass {}

    class PreferencesInterface {}

    class PreferencesPageClass {}

    class PreferencesSpinButtonClass {}

    class PreferencesSwitchClass {}

    class PreferencesViewClass {}

    class PriorityBoxClass {}

    class ProgressButtonClass {}

    class ProgressIconClass {}

    class ProgressMenuButtonClass {}

    class PropertiesGroupClass {}

    class RadioBoxClass {}

    class ReadOnlyListModelClass {}

    class RecursiveFileMonitorClass {}

    class Ring {
        // Own fields of Dazzle-1.0.Ring

        data: number;
        len: number;
        pos: number;

        // Constructors of Dazzle-1.0.Ring

        constructor(
            properties?: Partial<{
                data: number;
                len: number;
                pos: number;
            }>,
        );

        static sized_new(element_size: number, reserved_size: number): Ring;

        // Owm methods of Dazzle-1.0.Ring

        /**
         * Appends `len` values located at `data`.
         * @param data A pointer to the array of values.
         * @param len The number of values.
         * @returns the index of the first item.
         */
        append_vals(data: any | null, len: number): number;
        /**
         * Calls `func` for every item in the #DzlRing starting from the most recently
         * inserted element to the least recently inserted.
         * @param func A #GFunc to call for each element.
         */
        foreach(func: GLib.Func): void;
        /**
         * Atomically increments the reference count of `ring` by one.
         * @returns The @ring pointer.
         */
        ref(): Ring;
        /**
         * Atomically decrements the reference count of `ring` by one.  When the
         * reference count reaches zero, the structure is freed.
         */
        unref(): void;
    }

    class ScrolledWindowClass {}

    class SearchBarClass {}

    class SettingsFlagActionClass {}

    class SettingsSandwichClass {}

    class ShortcutAccelDialogClass {}

    class ShortcutChord {
        // Constructors of Dazzle-1.0.ShortcutChord

        constructor(event: Gdk.EventKey);

        static new_from_event(event: Gdk.EventKey): ShortcutChord;

        static new_from_string(accelerator: string): ShortcutChord;

        // Owm methods of Dazzle-1.0.ShortcutChord

        static equal(data1?: any | null, data2?: any | null): boolean;
        static hash(data?: any | null): number;

        // Owm methods of Dazzle-1.0.ShortcutChord

        append_event(event: Gdk.EventKey): boolean;
        copy(): ShortcutChord;
        free(): void;
        get_label(): string;
        get_length(): number;
        get_nth_key(nth: number, keyval: number, modifier: Gdk.ModifierType): void;
        has_modifier(): boolean;
        match(other: ShortcutChord): ShortcutMatch;
        to_string(): string;
    }

    class ShortcutChordTable {
        // Owm methods of Dazzle-1.0.ShortcutChordTable

        add(chord: ShortcutChord, data?: any | null): void;
        /**
         * This function will call `foreach_func` for each chord in the table.
         * @param foreach_func A callback for each chord
         */
        foreach(foreach_func: ShortcutChordTableForeach): void;
        free(): void;
        lookup(chord: ShortcutChord, data?: any | null): ShortcutMatch;
        lookup_data(data?: any | null): ShortcutChord;
        printf(): void;
        remove(chord: ShortcutChord): boolean;
        remove_data(data?: any | null): boolean;
        set_free_func(): void;
        size(): number;
    }

    class ShortcutContextClass {}

    class ShortcutControllerClass {}

    /**
     * The #DzlShortcutEntry structure can be used to bulk register shortcuts
     * for a particular widget. It can also do the necessary hooks of registering
     * commands that can be changed using the keytheme components.
     */
    class ShortcutEntry {
        // Own fields of Dazzle-1.0.ShortcutEntry

        command: string;
        phase: ShortcutPhase;
        default_accel: string;
        section: string;
        group: string;
        title: string;
        subtitle: string;
    }

    class ShortcutLabelClass {}

    class ShortcutManagerClass {}

    class ShortcutModelClass {}

    class ShortcutSimpleLabelClass {}

    class ShortcutThemeClass {}

    class ShortcutThemeEditorClass {}

    class ShortcutTooltipClass {}

    class ShortcutsGroupClass {}

    class ShortcutsSectionClass {}

    class ShortcutsShortcutClass {}

    class ShortcutsWindowClass {}

    class SignalGroupClass {}

    class SimpleLabelClass {}

    class SimplePopoverClass {}

    class SliderClass {}

    class StackListClass {}

    class StateMachineClass {}

    class SuggestionButtonClass {}

    class SuggestionClass {}

    class SuggestionEntryBufferClass {}

    class SuggestionEntryClass {}

    class SuggestionPopoverClass {}

    class SuggestionRowClass {}

    class TabClass {}

    class TabStripClass {}

    class TaskCacheClass {}

    class ThemeManagerClass {}

    class ThreeGridClass {}

    class TreeBuilderClass {}

    class TreeClass {}

    class TreeNodeClass {}

    class Trie {
        // Constructors of Dazzle-1.0.Trie

        constructor(properties?: Partial<{}>);

        static ['new'](): Trie;

        // Owm methods of Dazzle-1.0.Trie

        /**
         * This is an alias for dzl_trie_unref().
         */
        destroy(): void;
        /**
         * Inserts `value` into `trie` located with `key`.
         * @param key The key to insert.
         * @param value The value to insert.
         */
        insert(key: string, value?: any | null): void;
        /**
         * Looks up `key` in `trie` and returns the value associated.
         * @param key The key to lookup.
         * @returns The value inserted or %NULL.
         */
        lookup(key: string): any | null;
        ref(): Trie;
        /**
         * Removes `key` from `trie,` possibly destroying the value associated with
         * the key.
         * @param key The key to remove.
         * @returns %TRUE if @key was found, otherwise %FALSE.
         */
        remove(key: string): boolean;
        /**
         * Traverses all nodes of `trie` according to the parameters. For each node
         * matching the traversal parameters, `func` will be executed.
         *
         * Only %G_PRE_ORDER and %G_POST_ORDER are supported for `order`.
         *
         * If `max_depth` is less than zero, the entire tree will be traversed.
         * If max_depth is 1, then only the root will be traversed.
         * @param key The key to start traversal from.
         * @param order The order to traverse.
         * @param flags The flags for which nodes to callback.
         * @param max_depth the maximum depth to process.
         * @param func The func to execute for each matching node.
         */
        traverse(
            key: string,
            order: GLib.TraverseType,
            flags: GLib.TraverseFlags,
            max_depth: number,
            func: TrieTraverseFunc,
        ): void;
        /**
         * Drops the reference count by one on `trie`. When it reaches zero, the
         * structure is freed.
         */
        unref(): void;
    }

    class WidgetActionGroupClass {}

    class _GraphColumnClass {}

    interface Dock {
        // Own properties of Dazzle-1.0.Dock

        manager: DockManager;
    }

    interface DockItem {
        // Owm methods of Dazzle-1.0.DockItem

        adopt(child: DockItem): boolean;
        /**
         * This function will request that the dock item close itself.
         * @returns %TRUE if the dock item was closed
         */
        close(): boolean;
        /**
         * Emits the #DzlDockItem::presented signal.
         *
         * Containers should emit this when their descendant has been presented as the
         * current visible child. This allows dock items to do lazy initialization of
         * content once the widgetry is visible to the user.
         *
         * Currently, this is best effort, as there are a number of situations that
         * make covering all cases problematic.
         */
        emit_presented(): void;
        /**
         * If this dock item can be closed by the user, this virtual function should be
         * implemented by the panel and return %TRUE.
         * @returns %TRUE if the dock item can be closed by the user, otherwise %FALSE.
         */
        get_can_close(): boolean;
        get_can_minimize(): boolean;
        get_child_visible(child: DockItem): boolean;
        /**
         * Gets the icon_name for the #DzlDockItem.
         *
         * Generally, you want to use a #DzlDockWidget which has a "icon-name" property
         * you can set. But this can be helpful for integration of various container
         * widgets.
         * @returns A newly allocated string or %NULL.
         */
        get_icon_name(): string | null;
        /**
         * Gets the dock manager for this dock item.
         * @returns A #DzlDockmanager.
         */
        get_manager(): DockManager | null;
        /**
         * Gets the parent #DzlDockItem, or %NULL.
         * @returns A #DzlDockItem or %NULL.
         */
        get_parent(): DockItem | null;
        /**
         * Gets the title for the #DzlDockItem.
         *
         * Generally, you want to use a #DzlDockWidget which has a "title" property you
         * can set. But this can be helpful for integration of various container
         * widgets.
         * @returns A newly allocated string or %NULL.
         */
        get_title(): string | null;
        has_widgets(): boolean;
        /**
         * This requests that `self` minimize `child` if it knows how.
         *
         * If not, it should suggest the gravity for `child` if it knows how to
         * determine that. For example, a #DzlDockBin might know if the widget was part
         * of the right panel and therefore may set `position` to %GTK_POS_RIGHT.
         * @param child A #DzlDockItem that is a child of @self
         * @param position A location for a #GtkPositionType
         * @returns %TRUE if @child was minimized. Otherwise %FALSE and @position   may be updated to a suggested position.
         */
        minimize(child: DockItem, position: Gtk.PositionType): boolean;
        /**
         * Emits the "needs-attention" signal.
         */
        needs_attention(): void;
        /**
         * This widget will walk the widget hierarchy to ensure that the
         * dock item is visible to the user.
         */
        present(): void;
        present_child(child: DockItem): void;
        /**
         * Gets a #GIcon for the dock item, if any has been set.
         *
         * If an icon-name has been set, a new #GIcon for that icon-name
         * may be returned.
         * @returns a #GIcon or %NULL
         */
        ref_gicon(): Gio.Icon | null;
        /**
         * This virtual method should remove `child` from `self` if the
         * dock item knows how to do so. For example, the #DzlDockStack
         * will remove `child` from it's internal #GtkStack.
         *
         * After the virtual function has been executed, child tracking
         * will be removed so that #DzlDockItem implementations do not
         * need to implement themselves.
         * @param child
         */
        release(child: DockItem): void;
        set_child_visible(child: DockItem, child_visible: boolean): void;
        /**
         * Sets the dock manager for this #DzlDockItem.
         * @param manager A #DzlDockManager
         */
        set_manager(manager?: DockManager | null): void;
        update_visibility(): void;

        // Own virtual methods of Dazzle-1.0.DockItem

        vfunc_can_minimize(descendant: DockItem): boolean;
        /**
         * This function will request that the dock item close itself.
         */
        vfunc_close(): boolean;
        /**
         * If this dock item can be closed by the user, this virtual function should be
         * implemented by the panel and return %TRUE.
         */
        vfunc_get_can_close(): boolean;
        vfunc_get_child_visible(child: DockItem): boolean;
        /**
         * Gets the icon_name for the #DzlDockItem.
         *
         * Generally, you want to use a #DzlDockWidget which has a "icon-name" property
         * you can set. But this can be helpful for integration of various container
         * widgets.
         */
        vfunc_get_icon_name(): string | null;
        /**
         * Gets the dock manager for this dock item.
         */
        vfunc_get_manager(): DockManager | null;
        /**
         * Gets the title for the #DzlDockItem.
         *
         * Generally, you want to use a #DzlDockWidget which has a "title" property you
         * can set. But this can be helpful for integration of various container
         * widgets.
         */
        vfunc_get_title(): string | null;
        vfunc_manager_set(old_manager: DockManager): void;
        /**
         * This requests that `self` minimize `child` if it knows how.
         *
         * If not, it should suggest the gravity for `child` if it knows how to
         * determine that. For example, a #DzlDockBin might know if the widget was part
         * of the right panel and therefore may set `position` to %GTK_POS_RIGHT.
         * @param child A #DzlDockItem that is a child of @self
         * @param position A location for a #GtkPositionType
         */
        vfunc_minimize(child: DockItem, position: Gtk.PositionType): boolean;
        /**
         * Emits the "needs-attention" signal.
         */
        vfunc_needs_attention(): void;
        vfunc_present_child(child: DockItem): void;
        vfunc_presented(): void;
        /**
         * Gets a #GIcon for the dock item, if any has been set.
         *
         * If an icon-name has been set, a new #GIcon for that icon-name
         * may be returned.
         */
        vfunc_ref_gicon(): Gio.Icon | null;
        /**
         * This virtual method should remove `child` from `self` if the
         * dock item knows how to do so. For example, the #DzlDockStack
         * will remove `child` from it's internal #GtkStack.
         *
         * After the virtual function has been executed, child tracking
         * will be removed so that #DzlDockItem implementations do not
         * need to implement themselves.
         * @param child
         */
        vfunc_release(child: DockItem): void;
        vfunc_set_child_visible(child: DockItem, child_visible: boolean): void;
        /**
         * Sets the dock manager for this #DzlDockItem.
         * @param manager A #DzlDockManager
         */
        vfunc_set_manager(manager?: DockManager | null): void;
        vfunc_update_visibility(): void;
    }

    interface GraphRenderer {
        // Owm methods of Dazzle-1.0.GraphRenderer

        render(
            table: GraphModel,
            x_begin: number,
            x_end: number,
            y_begin: number,
            y_end: number,
            cr: cairo.Context,
            area: cairo.RectangleInt,
        ): void;

        // Own virtual methods of Dazzle-1.0.GraphRenderer

        vfunc_render(
            table: GraphModel,
            x_begin: number,
            x_end: number,
            y_begin: number,
            y_end: number,
            cr: cairo.Context,
            area: cairo.RectangleInt,
        ): void;
    }

    interface Preferences {
        // Owm methods of Dazzle-1.0.Preferences

        add_custom(
            page_name: string,
            group_name: string,
            widget: Gtk.Widget,
            keywords: string | null,
            priority: number,
        ): number;
        add_file_chooser(
            page_name: string,
            group_name: string,
            schema_id: string,
            key: string,
            path: string,
            title: string,
            subtitle: string,
            action: Gtk.FileChooserAction,
            keywords: string,
            priority: number,
        ): number;
        add_font_button(
            page_name: string,
            group_name: string,
            schema_id: string,
            key: string,
            title: string,
            keywords: string,
            priority: number,
        ): number;
        add_group(page_name: string, group_name: string, title: string, priority: number): void;
        add_list_group(
            page_name: string,
            group_name: string,
            title: string,
            mode: Gtk.SelectionMode,
            priority: number,
        ): void;
        add_page(page_name: string, title: string, priority: number): void;
        add_radio(
            page_name: string,
            group_name: string,
            schema_id: string,
            key: string,
            path: string | null,
            variant_string: string | null,
            title: string | null,
            subtitle: string | null,
            keywords: string | null,
            priority: number,
        ): number;
        add_spin_button(
            page_name: string,
            group_name: string,
            schema_id: string,
            key: string,
            path: string,
            title: string,
            subtitle: string,
            keywords: string,
            priority: number,
        ): number;
        add_switch(
            page_name: string,
            group_name: string,
            schema_id: string,
            key: string,
            path: string | null,
            variant_string: string | null,
            title: string | null,
            subtitle: string | null,
            keywords: string | null,
            priority: number,
        ): number;
        get_widget(widget_id: number): Gtk.Widget | null;
        remove_id(widget_id: number): boolean;
        set_page(page_name: string, map: GLib.HashTable<any, any>): void;

        // Own virtual methods of Dazzle-1.0.Preferences

        vfunc_add_custom(
            page_name: string,
            group_name: string,
            widget: Gtk.Widget,
            keywords: string | null,
            priority: number,
        ): number;
        vfunc_add_file_chooser(
            page_name: string,
            group_name: string,
            schema_id: string,
            key: string,
            path: string,
            title: string,
            subtitle: string,
            action: Gtk.FileChooserAction,
            keywords: string,
            priority: number,
        ): number;
        vfunc_add_font_button(
            page_name: string,
            group_name: string,
            schema_id: string,
            key: string,
            title: string,
            keywords: string,
            priority: number,
        ): number;
        vfunc_add_group(page_name: string, group_name: string, title: string, priority: number): void;
        vfunc_add_list_group(
            page_name: string,
            group_name: string,
            title: string,
            mode: Gtk.SelectionMode,
            priority: number,
        ): void;
        vfunc_add_page(page_name: string, title: string, priority: number): void;
        vfunc_add_radio(
            page_name: string,
            group_name: string,
            schema_id: string,
            key: string,
            path: string | null,
            variant_string: string | null,
            title: string | null,
            subtitle: string | null,
            keywords: string | null,
            priority: number,
        ): number;
        vfunc_add_spin_button(
            page_name: string,
            group_name: string,
            schema_id: string,
            key: string,
            path: string,
            title: string,
            subtitle: string,
            keywords: string,
            priority: number,
        ): number;
        vfunc_add_switch(
            page_name: string,
            group_name: string,
            schema_id: string,
            key: string,
            path: string | null,
            variant_string: string | null,
            title: string | null,
            subtitle: string | null,
            keywords: string | null,
            priority: number,
        ): number;
        vfunc_get_widget(widget_id: number): Gtk.Widget | null;
        vfunc_remove_id(widget_id: number): boolean;
        vfunc_set_page(page_name: string, map: GLib.HashTable<any, any>): void;
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

export default Dazzle;
// END
