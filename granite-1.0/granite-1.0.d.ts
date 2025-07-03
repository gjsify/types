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
import type Pango from '@girs/pango-1.0';
import type cairo from 'cairo';
import type GObject from '@girs/gobject-2.0';
import type GLib from '@girs/glib-2.0';
import type HarfBuzz from '@girs/harfbuzz-0.0';
import type freetype2 from '@girs/freetype2-2.0';
import type Gio from '@girs/gio-2.0';
import type GModule from '@girs/gmodule-2.0';
import type Gtk from '@girs/gtk-3.0';
import type xlib from '@girs/xlib-2.0';
import type Gdk from '@girs/gdk-3.0';
import type GdkPixbuf from '@girs/gdkpixbuf-2.0';
import type Atk from '@girs/atk-1.0';
import type Gee from '@girs/gee-0.8';

export namespace Granite {
    // Workaround
    /** @ignore */
    export module GraniteServicesSettingsSerializable {
        export interface ConstructorProps extends ServicesSettingsSerializable.ConstructorProps {}
    }
    /** @ignore */
    export interface GraniteServicesSettingsSerializable extends ServicesSettingsSerializable {}

    /**
     * Granite-1.0
     */

    export namespace ServicesLogLevel {
        export const $gtype: GObject.GType<ServicesLogLevel>;
    }

    enum ServicesLogLevel {
        DEBUG,
        INFO,
        NOTIFY,
        WARN,
        ERROR,
        FATAL,
    }
    class ServicesContractorError extends GLib.Error {
        static $gtype: GObject.GType<ServicesContractorError>;

        // Static fields

        static SERVICE_NOT_AVAILABLE: number;

        // Constructors

        constructor(options: { message: string; code: number });
        _init(...args: any[]): void;
    }

    export namespace WidgetsDynamicNotebookTabBarBehavior {
        export const $gtype: GObject.GType<WidgetsDynamicNotebookTabBarBehavior>;
    }

    enum WidgetsDynamicNotebookTabBarBehavior {
        ALWAYS,
        SINGLE,
        NEVER,
    }

    export namespace WidgetsStorageBarItemDescription {
        export const $gtype: GObject.GType<WidgetsStorageBarItemDescription>;
    }

    enum WidgetsStorageBarItemDescription {
        OTHER,
        AUDIO,
        VIDEO,
        PHOTO,
        APP,
        FILES,
    }

    export namespace CollapseMode {
        export const $gtype: GObject.GType<CollapseMode>;
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

    export namespace TextStyle {
        export const $gtype: GObject.GType<TextStyle>;
    }

    enum TextStyle {
        TITLE,
        H1,
        H2,
        H3,
    }

    export namespace CloseButtonPosition {
        export const $gtype: GObject.GType<CloseButtonPosition>;
    }

    enum CloseButtonPosition {
        LEFT,
        RIGHT,
    }

    export namespace SettingsPageStatusType {
        export const $gtype: GObject.GType<SettingsPageStatusType>;
    }

    enum SettingsPageStatusType {
        ERROR,
        OFFLINE,
        SUCCESS,
        WARNING,
        NONE,
    }

    export namespace SettingsColorScheme {
        export const $gtype: GObject.GType<SettingsColorScheme>;
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
    function services_application_set_badge(count: number): globalThis.Promise<boolean>;
    function services_application_set_badge(count: number, _callback_: Gio.AsyncReadyCallback<number> | null): void;
    function services_application_set_badge(
        count: number,
        _callback_?: Gio.AsyncReadyCallback<number> | null,
    ): globalThis.Promise<boolean> | void;
    function services_application_set_badge_finish(_res_: Gio.AsyncResult): boolean;
    function services_application_set_badge_visible(visible: boolean): globalThis.Promise<boolean>;
    function services_application_set_badge_visible(
        visible: boolean,
        _callback_: Gio.AsyncReadyCallback<boolean> | null,
    ): void;
    function services_application_set_badge_visible(
        visible: boolean,
        _callback_?: Gio.AsyncReadyCallback<boolean> | null,
    ): globalThis.Promise<boolean> | void;
    function services_application_set_badge_visible_finish(_res_: Gio.AsyncResult): boolean;
    function services_application_set_progress(progress: number): globalThis.Promise<boolean>;
    function services_application_set_progress(
        progress: number,
        _callback_: Gio.AsyncReadyCallback<number> | null,
    ): void;
    function services_application_set_progress(
        progress: number,
        _callback_?: Gio.AsyncReadyCallback<number> | null,
    ): globalThis.Promise<boolean> | void;
    function services_application_set_progress_finish(_res_: Gio.AsyncResult): boolean;
    function services_application_set_progress_visible(visible: boolean): globalThis.Promise<boolean>;
    function services_application_set_progress_visible(
        visible: boolean,
        _callback_: Gio.AsyncReadyCallback<boolean> | null,
    ): void;
    function services_application_set_progress_visible(
        visible: boolean,
        _callback_?: Gio.AsyncReadyCallback<boolean> | null,
    ): globalThis.Promise<boolean> | void;
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
    function widgets_utils_apply_text_style_to_label(text_style: TextStyle | null, label: Gtk.Label): void;
    function widgets_utils_get_default_close_button_position(): [boolean, CloseButtonPosition];
    function widgets_utils_get_button_layout_schema(): string | null;
    function widgets_storage_bar_item_description_get_class(
        description: WidgetsStorageBarItemDescription | null,
    ): string | null;
    function widgets_storage_bar_item_description_get_name(
        description: WidgetsStorageBarItemDescription | null,
    ): string;
    function text_style_get_stylesheet(): [string, string];
    function accel_to_string(accel?: string | null): string;
    function markup_accel_tooltip(accels?: string[] | null, description?: string | null): string;
    function contrasting_foreground_color(bg_color: Gdk.RGBA): Gdk.RGBA;
    interface WidgetsDroppedDelegate {
        (): void;
    }
    namespace DrawingBufferSurface {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            'notify::surface': (pspec: GObject.ParamSpec) => void;
            'notify::width': (pspec: GObject.ParamSpec) => void;
            'notify::height': (pspec: GObject.ParamSpec) => void;
            'notify::context': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            surface: cairo.Surface;
            width: number;
            height: number;
            context: cairo.Context;
        }
    }

    class DrawingBufferSurface extends GObject.Object {
        static $gtype: GObject.GType<DrawingBufferSurface>;

        // Properties

        get surface(): cairo.Surface;
        set surface(val: cairo.Surface);
        get width(): number;
        set width(val: number);
        get height(): number;
        set height(val: number);
        get context(): cairo.Context;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: DrawingBufferSurface.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<DrawingBufferSurface.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](width: number, height: number): DrawingBufferSurface;

        static with_surface(width: number, height: number, model: cairo.Surface): DrawingBufferSurface;

        static with_buffer_surface(width: number, height: number, model: DrawingBufferSurface): DrawingBufferSurface;

        // Signals

        connect<K extends keyof DrawingBufferSurface.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, DrawingBufferSurface.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof DrawingBufferSurface.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, DrawingBufferSurface.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof DrawingBufferSurface.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<DrawingBufferSurface.SignalSignatures[K]> extends [any, ...infer Q]
                ? Q
                : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

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

    namespace DrawingColor {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps
            extends GObject.Object.ConstructorProps,
                ServicesSettingsSerializable.ConstructorProps {}
    }

    class DrawingColor extends GObject.Object implements ServicesSettingsSerializable {
        static $gtype: GObject.GType<DrawingColor>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: DrawingColor.SignalSignatures;

        // Fields

        R: number;
        G: number;
        B: number;
        A: number;

        // Constructors

        constructor(properties?: Partial<DrawingColor.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](R: number, G: number, B: number, A: number): DrawingColor;

        static from_gdk(color: Gdk.Color): DrawingColor;

        static from_rgba(color: Gdk.RGBA): DrawingColor;

        static from_string(color: string): DrawingColor;

        static from_int(color: number): DrawingColor;

        // Signals

        connect<K extends keyof DrawingColor.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, DrawingColor.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof DrawingColor.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, DrawingColor.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof DrawingColor.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<DrawingColor.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Static methods

        static alpha_from_int(color: number): number;
        static red_from_int(color: number): number;
        static green_from_int(color: number): number;
        static blue_from_int(color: number): number;

        // Methods

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

        // Inherited methods
        settings_serialize(): string;
        settings_deserialize(s: string): void;
        vfunc_settings_serialize(): string;
        vfunc_settings_deserialize(s: string): void;
        /**
         * Creates a binding between `source_property` on `source` and `target_property`
         * on `target`.
         *
         * Whenever the `source_property` is changed the `target_property` is
         * updated using the same value. For instance:
         *
         *
         * ```c
         *   g_object_bind_property (action, "active", widget, "sensitive", 0);
         * ```
         *
         *
         * Will result in the "sensitive" property of the widget #GObject instance to be
         * updated with the same value of the "active" property of the action #GObject
         * instance.
         *
         * If `flags` contains %G_BINDING_BIDIRECTIONAL then the binding will be mutual:
         * if `target_property` on `target` changes then the `source_property` on `source`
         * will be updated as well.
         *
         * The binding will automatically be removed when either the `source` or the
         * `target` instances are finalized. To remove the binding without affecting the
         * `source` and the `target` you can just call g_object_unref() on the returned
         * #GBinding instance.
         *
         * Removing the binding by calling g_object_unref() on it must only be done if
         * the binding, `source` and `target` are only used from a single thread and it
         * is clear that both `source` and `target` outlive the binding. Especially it
         * is not safe to rely on this if the binding, `source` or `target` can be
         * finalized from different threads. Keep another reference to the binding and
         * use g_binding_unbind() instead to be on the safe side.
         *
         * A #GObject can have multiple bindings.
         * @param source_property the property on @source to bind
         * @param target the target #GObject
         * @param target_property the property on @target to bind
         * @param flags flags to pass to #GBinding
         * @returns the #GBinding instance representing the     binding between the two #GObject instances. The binding is released     whenever the #GBinding reference count reaches zero.
         */
        bind_property(
            source_property: string,
            target: GObject.Object,
            target_property: string,
            flags: GObject.BindingFlags | null,
        ): GObject.Binding;
        /**
         * Complete version of g_object_bind_property().
         *
         * Creates a binding between `source_property` on `source` and `target_property`
         * on `target,` allowing you to set the transformation functions to be used by
         * the binding.
         *
         * If `flags` contains %G_BINDING_BIDIRECTIONAL then the binding will be mutual:
         * if `target_property` on `target` changes then the `source_property` on `source`
         * will be updated as well. The `transform_from` function is only used in case
         * of bidirectional bindings, otherwise it will be ignored
         *
         * The binding will automatically be removed when either the `source` or the
         * `target` instances are finalized. This will release the reference that is
         * being held on the #GBinding instance; if you want to hold on to the
         * #GBinding instance, you will need to hold a reference to it.
         *
         * To remove the binding, call g_binding_unbind().
         *
         * A #GObject can have multiple bindings.
         *
         * The same `user_data` parameter will be used for both `transform_to`
         * and `transform_from` transformation functions; the `notify` function will
         * be called once, when the binding is removed. If you need different data
         * for each transformation function, please use
         * g_object_bind_property_with_closures() instead.
         * @param source_property the property on @source to bind
         * @param target the target #GObject
         * @param target_property the property on @target to bind
         * @param flags flags to pass to #GBinding
         * @param transform_to the transformation function     from the @source to the @target, or %NULL to use the default
         * @param transform_from the transformation function     from the @target to the @source, or %NULL to use the default
         * @param notify a function to call when disposing the binding, to free     resources used by the transformation functions, or %NULL if not required
         * @returns the #GBinding instance representing the     binding between the two #GObject instances. The binding is released     whenever the #GBinding reference count reaches zero.
         */
        bind_property_full(
            source_property: string,
            target: GObject.Object,
            target_property: string,
            flags: GObject.BindingFlags | null,
            transform_to?: GObject.BindingTransformFunc | null,
            transform_from?: GObject.BindingTransformFunc | null,
            notify?: GLib.DestroyNotify | null,
        ): GObject.Binding;
        // Conflicted with GObject.Object.bind_property_full
        bind_property_full(...args: never[]): any;
        /**
         * This function is intended for #GObject implementations to re-enforce
         * a [floating][floating-ref] object reference. Doing this is seldom
         * required: all #GInitiallyUnowneds are created with a floating reference
         * which usually just needs to be sunken by calling g_object_ref_sink().
         */
        force_floating(): void;
        /**
         * Increases the freeze count on `object`. If the freeze count is
         * non-zero, the emission of "notify" signals on `object` is
         * stopped. The signals are queued until the freeze count is decreased
         * to zero. Duplicate notifications are squashed so that at most one
         * #GObject::notify signal is emitted for each property modified while the
         * object is frozen.
         *
         * This is necessary for accessors that modify multiple properties to prevent
         * premature notification while the object is still being modified.
         */
        freeze_notify(): void;
        /**
         * Gets a named field from the objects table of associations (see g_object_set_data()).
         * @param key name of the key for that association
         * @returns the data if found,          or %NULL if no such data exists.
         */
        get_data(key: string): any | null;
        /**
         * Gets a property of an object.
         *
         * The value can be:
         * - an empty GObject.Value initialized by G_VALUE_INIT, which will be automatically initialized with the expected type of the property (since GLib 2.60)
         * - a GObject.Value initialized with the expected type of the property
         * - a GObject.Value initialized with a type to which the expected type of the property can be transformed
         *
         * In general, a copy is made of the property contents and the caller is responsible for freeing the memory by calling GObject.Value.unset.
         *
         * Note that GObject.Object.get_property is really intended for language bindings, GObject.Object.get is much more convenient for C programming.
         * @param property_name The name of the property to get
         * @param value Return location for the property value. Can be an empty GObject.Value initialized by G_VALUE_INIT (auto-initialized with expected type since GLib 2.60), a GObject.Value initialized with the expected property type, or a GObject.Value initialized with a transformable type
         */
        get_property(property_name: string, value: GObject.Value | any): any;
        /**
         * This function gets back user data pointers stored via
         * g_object_set_qdata().
         * @param quark A #GQuark, naming the user data pointer
         * @returns The user data pointer set, or %NULL
         */
        get_qdata(quark: GLib.Quark): any | null;
        /**
         * Gets `n_properties` properties for an `object`.
         * Obtained properties will be set to `values`. All properties must be valid.
         * Warnings will be emitted and undefined behaviour may result if invalid
         * properties are passed in.
         * @param names the names of each property to get
         * @param values the values of each property to get
         */
        getv(names: string[], values: (GObject.Value | any)[]): void;
        /**
         * Checks whether `object` has a [floating][floating-ref] reference.
         * @returns %TRUE if @object has a floating reference
         */
        is_floating(): boolean;
        /**
         * Emits a "notify" signal for the property `property_name` on `object`.
         *
         * When possible, eg. when signaling a property change from within the class
         * that registered the property, you should use g_object_notify_by_pspec()
         * instead.
         *
         * Note that emission of the notify signal may be blocked with
         * g_object_freeze_notify(). In this case, the signal emissions are queued
         * and will be emitted (in reverse order) when g_object_thaw_notify() is
         * called.
         * @param property_name the name of a property installed on the class of @object.
         */
        notify(property_name: string): void;
        /**
         * Emits a "notify" signal for the property specified by `pspec` on `object`.
         *
         * This function omits the property name lookup, hence it is faster than
         * g_object_notify().
         *
         * One way to avoid using g_object_notify() from within the
         * class that registered the properties, and using g_object_notify_by_pspec()
         * instead, is to store the GParamSpec used with
         * g_object_class_install_property() inside a static array, e.g.:
         *
         *
         * ```c
         *   typedef enum
         *   {
         *     PROP_FOO = 1,
         *     PROP_LAST
         *   } MyObjectProperty;
         *
         *   static GParamSpec *properties[PROP_LAST];
         *
         *   static void
         *   my_object_class_init (MyObjectClass *klass)
         *   {
         *     properties[PROP_FOO] = g_param_spec_int ("foo", NULL, NULL,
         *                                              0, 100,
         *                                              50,
         *                                              G_PARAM_READWRITE | G_PARAM_STATIC_STRINGS);
         *     g_object_class_install_property (gobject_class,
         *                                      PROP_FOO,
         *                                      properties[PROP_FOO]);
         *   }
         * ```
         *
         *
         * and then notify a change on the "foo" property with:
         *
         *
         * ```c
         *   g_object_notify_by_pspec (self, properties[PROP_FOO]);
         * ```
         *
         * @param pspec the #GParamSpec of a property installed on the class of @object.
         */
        notify_by_pspec(pspec: GObject.ParamSpec): void;
        /**
         * Increases the reference count of `object`.
         *
         * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
         * of `object` will be propagated to the return type (using the GCC typeof()
         * extension), so any casting the caller needs to do on the return type must be
         * explicit.
         * @returns the same @object
         */
        ref(): GObject.Object;
        /**
         * Increase the reference count of `object,` and possibly remove the
         * [floating][floating-ref] reference, if `object` has a floating reference.
         *
         * In other words, if the object is floating, then this call "assumes
         * ownership" of the floating reference, converting it to a normal
         * reference by clearing the floating flag while leaving the reference
         * count unchanged.  If the object is not floating, then this call
         * adds a new normal reference increasing the reference count by one.
         *
         * Since GLib 2.56, the type of `object` will be propagated to the return type
         * under the same conditions as for g_object_ref().
         * @returns @object
         */
        ref_sink(): GObject.Object;
        /**
         * Releases all references to other objects. This can be used to break
         * reference cycles.
         *
         * This function should only be called from object system implementations.
         */
        run_dispose(): void;
        /**
         * Each object carries around a table of associations from
         * strings to pointers.  This function lets you set an association.
         *
         * If the object already had an association with that name,
         * the old association will be destroyed.
         *
         * Internally, the `key` is converted to a #GQuark using g_quark_from_string().
         * This means a copy of `key` is kept permanently (even after `object` has been
         * finalized) — so it is recommended to only use a small, bounded set of values
         * for `key` in your program, to avoid the #GQuark storage growing unbounded.
         * @param key name of the key
         * @param data data to associate with that key
         */
        set_data(key: string, data?: any | null): void;
        /**
         * Sets a property on an object.
         * @param property_name The name of the property to set
         * @param value The value to set the property to
         */
        set_property(property_name: string, value: GObject.Value | any): void;
        /**
         * Remove a specified datum from the object's data associations,
         * without invoking the association's destroy handler.
         * @param key name of the key
         * @returns the data if found, or %NULL          if no such data exists.
         */
        steal_data(key: string): any | null;
        /**
         * This function gets back user data pointers stored via
         * g_object_set_qdata() and removes the `data` from object
         * without invoking its destroy() function (if any was
         * set).
         * Usually, calling this function is only required to update
         * user data pointers with a destroy notifier, for example:
         *
         * ```c
         * void
         * object_add_to_user_list (GObject     *object,
         *                          const gchar *new_string)
         * {
         *   // the quark, naming the object data
         *   GQuark quark_string_list = g_quark_from_static_string ("my-string-list");
         *   // retrieve the old string list
         *   GList *list = g_object_steal_qdata (object, quark_string_list);
         *
         *   // prepend new string
         *   list = g_list_prepend (list, g_strdup (new_string));
         *   // this changed 'list', so we need to set it again
         *   g_object_set_qdata_full (object, quark_string_list, list, free_string_list);
         * }
         * static void
         * free_string_list (gpointer data)
         * {
         *   GList *node, *list = data;
         *
         *   for (node = list; node; node = node->next)
         *     g_free (node->data);
         *   g_list_free (list);
         * }
         * ```
         *
         * Using g_object_get_qdata() in the above example, instead of
         * g_object_steal_qdata() would have left the destroy function set,
         * and thus the partial string list would have been freed upon
         * g_object_set_qdata_full().
         * @param quark A #GQuark, naming the user data pointer
         * @returns The user data pointer set, or %NULL
         */
        steal_qdata(quark: GLib.Quark): any | null;
        /**
         * Reverts the effect of a previous call to
         * g_object_freeze_notify(). The freeze count is decreased on `object`
         * and when it reaches zero, queued "notify" signals are emitted.
         *
         * Duplicate notifications for each property are squashed so that at most one
         * #GObject::notify signal is emitted for each property, in the reverse order
         * in which they have been queued.
         *
         * It is an error to call this function when the freeze count is zero.
         */
        thaw_notify(): void;
        /**
         * Decreases the reference count of `object`. When its reference count
         * drops to 0, the object is finalized (i.e. its memory is freed).
         *
         * If the pointer to the #GObject may be reused in future (for example, if it is
         * an instance variable of another object), it is recommended to clear the
         * pointer to %NULL rather than retain a dangling pointer to a potentially
         * invalid #GObject instance. Use g_clear_object() for this.
         */
        unref(): void;
        /**
         * This function essentially limits the life time of the `closure` to
         * the life time of the object. That is, when the object is finalized,
         * the `closure` is invalidated by calling g_closure_invalidate() on
         * it, in order to prevent invocations of the closure with a finalized
         * (nonexisting) object. Also, g_object_ref() and g_object_unref() are
         * added as marshal guards to the `closure,` to ensure that an extra
         * reference count is held on `object` during invocation of the
         * `closure`.  Usually, this function will be called on closures that
         * use this `object` as closure data.
         * @param closure #GClosure to watch
         */
        watch_closure(closure: GObject.Closure): void;
        /**
         * the `constructed` function is called by g_object_new() as the
         *  final step of the object creation process.  At the point of the call, all
         *  construction properties have been set on the object.  The purpose of this
         *  call is to allow for object initialisation steps that can only be performed
         *  after construction properties have been set.  `constructed` implementors
         *  should chain up to the `constructed` call of their parent class to allow it
         *  to complete its initialisation.
         */
        vfunc_constructed(): void;
        /**
         * emits property change notification for a bunch
         *  of properties. Overriding `dispatch_properties_changed` should be rarely
         *  needed.
         * @param n_pspecs
         * @param pspecs
         */
        vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void;
        /**
         * the `dispose` function is supposed to drop all references to other
         *  objects, but keep the instance otherwise intact, so that client method
         *  invocations still work. It may be run multiple times (due to reference
         *  loops). Before returning, `dispose` should chain up to the `dispose` method
         *  of the parent class.
         */
        vfunc_dispose(): void;
        /**
         * instance finalization function, should finish the finalization of
         *  the instance begun in `dispose` and chain up to the `finalize` method of the
         *  parent class.
         */
        vfunc_finalize(): void;
        /**
         * the generic getter for all properties of this type. Should be
         *  overridden for every type with properties.
         * @param property_id
         * @param value
         * @param pspec
         */
        vfunc_get_property(property_id: number, value: GObject.Value | any, pspec: GObject.ParamSpec): void;
        /**
         * Emits a "notify" signal for the property `property_name` on `object`.
         *
         * When possible, eg. when signaling a property change from within the class
         * that registered the property, you should use g_object_notify_by_pspec()
         * instead.
         *
         * Note that emission of the notify signal may be blocked with
         * g_object_freeze_notify(). In this case, the signal emissions are queued
         * and will be emitted (in reverse order) when g_object_thaw_notify() is
         * called.
         * @param pspec
         */
        vfunc_notify(pspec: GObject.ParamSpec): void;
        /**
         * the generic setter for all properties of this type. Should be
         *  overridden for every type with properties. If implementations of
         *  `set_property` don't emit property change notification explicitly, this will
         *  be done implicitly by the type system. However, if the notify signal is
         *  emitted explicitly, the type system will not emit it a second time.
         * @param property_id
         * @param value
         * @param pspec
         */
        vfunc_set_property(property_id: number, value: GObject.Value | any, pspec: GObject.ParamSpec): void;
        /**
         * Disconnects a handler from an instance so it will not be called during any future or currently ongoing emissions of the signal it has been connected to.
         * @param id Handler ID of the handler to be disconnected
         */
        disconnect(id: number): void;
        /**
         * Sets multiple properties of an object at once. The properties argument should be a dictionary mapping property names to values.
         * @param properties Object containing the properties to set
         */
        set(properties: { [key: string]: any }): void;
        /**
         * Blocks a handler of an instance so it will not be called during any signal emissions
         * @param id Handler ID of the handler to be blocked
         */
        block_signal_handler(id: number): void;
        /**
         * Unblocks a handler so it will be called again during any signal emissions
         * @param id Handler ID of the handler to be unblocked
         */
        unblock_signal_handler(id: number): void;
        /**
         * Stops a signal's emission by the given signal name. This will prevent the default handler and any subsequent signal handlers from being invoked.
         * @param detailedName Name of the signal to stop emission of
         */
        stop_emission_by_name(detailedName: string): void;
    }

    namespace DrawingUtilities {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    class DrawingUtilities extends GObject.Object {
        static $gtype: GObject.GType<DrawingUtilities>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: DrawingUtilities.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<DrawingUtilities.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): DrawingUtilities;

        // Signals

        connect<K extends keyof DrawingUtilities.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, DrawingUtilities.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof DrawingUtilities.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, DrawingUtilities.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof DrawingUtilities.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<DrawingUtilities.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Static methods

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

    namespace ServicesContractorProxy {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            'contracts-changed': () => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    class ServicesContractorProxy extends GObject.Object {
        static $gtype: GObject.GType<ServicesContractorProxy>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: ServicesContractorProxy.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<ServicesContractorProxy.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        connect<K extends keyof ServicesContractorProxy.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, ServicesContractorProxy.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof ServicesContractorProxy.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, ServicesContractorProxy.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof ServicesContractorProxy.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<ServicesContractorProxy.SignalSignatures[K]> extends [any, ...infer Q]
                ? Q
                : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Static methods

        static get_instance(): ServicesContractorProxy;
        static get_all_contracts(): Gee.List;
        static get_contracts_by_mime(mime_type: string): Gee.List;
        static get_contracts_by_mimelist(mime_types: string[]): Gee.List;
        static get_contracts_for_file(file: Gio.File): Gee.List;
        static get_contracts_for_files(files: Gio.File[]): Gee.List;
    }

    namespace ServicesIconFactory {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    class ServicesIconFactory extends GObject.Object {
        static $gtype: GObject.GType<ServicesIconFactory>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: ServicesIconFactory.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<ServicesIconFactory.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): ServicesIconFactory;

        // Signals

        connect<K extends keyof ServicesIconFactory.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, ServicesIconFactory.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof ServicesIconFactory.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, ServicesIconFactory.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof ServicesIconFactory.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<ServicesIconFactory.SignalSignatures[K]> extends [any, ...infer Q]
                ? Q
                : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Static methods

        static get_default(): ServicesIconFactory;

        // Methods

        load_symbolic_icon_from_gicon(style: Gtk.StyleContext, gicon: Gio.Icon, size: number): GdkPixbuf.Pixbuf | null;
        load_symbolic_icon(style: Gtk.StyleContext, iconname: string, size: number): GdkPixbuf.Pixbuf | null;
    }

    namespace ServicesLogger {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    class ServicesLogger extends GObject.Object {
        static $gtype: GObject.GType<ServicesLogger>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: ServicesLogger.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<ServicesLogger.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): ServicesLogger;

        // Signals

        connect<K extends keyof ServicesLogger.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, ServicesLogger.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof ServicesLogger.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, ServicesLogger.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof ServicesLogger.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<ServicesLogger.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Static methods

        static get_DisplayLevel(): ServicesLogLevel;
        static set_DisplayLevel(value: ServicesLogLevel): void;
        static initialize(app_name: string): void;
        static notification(msg: string): void;
    }

    namespace ServicesPaths {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    class ServicesPaths extends GObject.Object {
        static $gtype: GObject.GType<ServicesPaths>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: ServicesPaths.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<ServicesPaths.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): ServicesPaths;

        // Signals

        connect<K extends keyof ServicesPaths.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, ServicesPaths.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof ServicesPaths.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, ServicesPaths.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof ServicesPaths.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<ServicesPaths.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Static methods

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

    namespace ServicesSettings {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            changed: () => void;
            'notify::schema': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            schema: Gio.Settings;
        }
    }

    abstract class ServicesSettings extends GObject.Object {
        static $gtype: GObject.GType<ServicesSettings>;

        // Properties

        get schema(): Gio.Settings;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: ServicesSettings.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<ServicesSettings.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        connect<K extends keyof ServicesSettings.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, ServicesSettings.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof ServicesSettings.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, ServicesSettings.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof ServicesSettings.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<ServicesSettings.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Virtual methods

        vfunc_verify(key: string): void;

        // Methods

        get_schema(): Gio.Settings;
        verify(key: string): void;
    }

    namespace ServicesSimpleCommand {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            done: (arg0: number) => void;
            'output-changed': (arg0: string) => void;
            'standard-changed': (arg0: string) => void;
            'error-changed': (arg0: string) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    class ServicesSimpleCommand extends GObject.Object {
        static $gtype: GObject.GType<ServicesSimpleCommand>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: ServicesSimpleCommand.SignalSignatures;

        // Fields

        standard_output_str: string;
        error_output_str: string;
        output_str: string;

        // Constructors

        constructor(properties?: Partial<ServicesSimpleCommand.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](dir: string, command: string): ServicesSimpleCommand;

        // Signals

        connect<K extends keyof ServicesSimpleCommand.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, ServicesSimpleCommand.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof ServicesSimpleCommand.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, ServicesSimpleCommand.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof ServicesSimpleCommand.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<ServicesSimpleCommand.SignalSignatures[K]> extends [any, ...infer Q]
                ? Q
                : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        run(): void;
    }

    namespace ServicesSystem {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    class ServicesSystem extends GObject.Object {
        static $gtype: GObject.GType<ServicesSystem>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: ServicesSystem.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<ServicesSystem.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): ServicesSystem;

        // Signals

        connect<K extends keyof ServicesSystem.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, ServicesSystem.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof ServicesSystem.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, ServicesSystem.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof ServicesSystem.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<ServicesSystem.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Static methods

        static open_uri(uri: string): void;
        static open(file: Gio.File): void;
        static open_files(files: Gio.File[]): void;
        static launch(app: Gio.File): void;
        static execute_command(command: string): boolean;
        static launch_with_files(app: Gio.File | null, files: Gio.File[]): void;
        static history_is_enabled(): boolean;
    }

    namespace WidgetsAlertView {
        // Signal signatures
        interface SignalSignatures extends Gtk.Grid.SignalSignatures {
            'action-activated': () => void;
            'notify::title': (pspec: GObject.ParamSpec) => void;
            'notify::description': (pspec: GObject.ParamSpec) => void;
            'notify::icon-name': (pspec: GObject.ParamSpec) => void;
            'notify::baseline-row': (pspec: GObject.ParamSpec) => void;
            'notify::column-homogeneous': (pspec: GObject.ParamSpec) => void;
            'notify::column-spacing': (pspec: GObject.ParamSpec) => void;
            'notify::row-homogeneous': (pspec: GObject.ParamSpec) => void;
            'notify::row-spacing': (pspec: GObject.ParamSpec) => void;
            'notify::border-width': (pspec: GObject.ParamSpec) => void;
            'notify::child': (pspec: GObject.ParamSpec) => void;
            'notify::resize-mode': (pspec: GObject.ParamSpec) => void;
            'notify::app-paintable': (pspec: GObject.ParamSpec) => void;
            'notify::can-default': (pspec: GObject.ParamSpec) => void;
            'notify::can-focus': (pspec: GObject.ParamSpec) => void;
            'notify::composite-child': (pspec: GObject.ParamSpec) => void;
            'notify::double-buffered': (pspec: GObject.ParamSpec) => void;
            'notify::events': (pspec: GObject.ParamSpec) => void;
            'notify::expand': (pspec: GObject.ParamSpec) => void;
            'notify::focus-on-click': (pspec: GObject.ParamSpec) => void;
            'notify::halign': (pspec: GObject.ParamSpec) => void;
            'notify::has-default': (pspec: GObject.ParamSpec) => void;
            'notify::has-focus': (pspec: GObject.ParamSpec) => void;
            'notify::has-tooltip': (pspec: GObject.ParamSpec) => void;
            'notify::height-request': (pspec: GObject.ParamSpec) => void;
            'notify::hexpand': (pspec: GObject.ParamSpec) => void;
            'notify::hexpand-set': (pspec: GObject.ParamSpec) => void;
            'notify::is-focus': (pspec: GObject.ParamSpec) => void;
            'notify::margin': (pspec: GObject.ParamSpec) => void;
            'notify::margin-bottom': (pspec: GObject.ParamSpec) => void;
            'notify::margin-end': (pspec: GObject.ParamSpec) => void;
            'notify::margin-left': (pspec: GObject.ParamSpec) => void;
            'notify::margin-right': (pspec: GObject.ParamSpec) => void;
            'notify::margin-start': (pspec: GObject.ParamSpec) => void;
            'notify::margin-top': (pspec: GObject.ParamSpec) => void;
            'notify::name': (pspec: GObject.ParamSpec) => void;
            'notify::no-show-all': (pspec: GObject.ParamSpec) => void;
            'notify::opacity': (pspec: GObject.ParamSpec) => void;
            'notify::parent': (pspec: GObject.ParamSpec) => void;
            'notify::receives-default': (pspec: GObject.ParamSpec) => void;
            'notify::scale-factor': (pspec: GObject.ParamSpec) => void;
            'notify::sensitive': (pspec: GObject.ParamSpec) => void;
            'notify::style': (pspec: GObject.ParamSpec) => void;
            'notify::tooltip-markup': (pspec: GObject.ParamSpec) => void;
            'notify::tooltip-text': (pspec: GObject.ParamSpec) => void;
            'notify::valign': (pspec: GObject.ParamSpec) => void;
            'notify::vexpand': (pspec: GObject.ParamSpec) => void;
            'notify::vexpand-set': (pspec: GObject.ParamSpec) => void;
            'notify::visible': (pspec: GObject.ParamSpec) => void;
            'notify::width-request': (pspec: GObject.ParamSpec) => void;
            'notify::window': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends Gtk.Grid.ConstructorProps {
            title: string;
            description: string;
            icon_name: string;
            iconName: string;
        }
    }

    class WidgetsAlertView extends Gtk.Grid {
        static $gtype: GObject.GType<WidgetsAlertView>;

        // Properties

        get title(): string;
        set title(val: string);
        get description(): string;
        set description(val: string);
        get icon_name(): string;
        set icon_name(val: string);
        get iconName(): string;
        set iconName(val: string);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: WidgetsAlertView.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<WidgetsAlertView.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](title: string, description: string, icon_name: string): WidgetsAlertView;
        // Conflicted with Gtk.Grid.new

        static ['new'](...args: never[]): any;

        // Signals

        connect<K extends keyof WidgetsAlertView.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, WidgetsAlertView.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof WidgetsAlertView.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, WidgetsAlertView.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof WidgetsAlertView.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<WidgetsAlertView.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        get_title(): string;
        set_title(value: string): void;
        get_description(): string;
        set_description(value: string): void;
        get_icon_name(): string;
        set_icon_name(value: string): void;
        show_action(label?: string | null): void;
        hide_action(): void;
    }

    namespace WidgetsAvatar {
        // Signal signatures
        interface SignalSignatures extends Gtk.EventBox.SignalSignatures {
            'notify::pixbuf': (pspec: GObject.ParamSpec) => void;
            'notify::above-child': (pspec: GObject.ParamSpec) => void;
            'notify::visible-window': (pspec: GObject.ParamSpec) => void;
            'notify::border-width': (pspec: GObject.ParamSpec) => void;
            'notify::child': (pspec: GObject.ParamSpec) => void;
            'notify::resize-mode': (pspec: GObject.ParamSpec) => void;
            'notify::app-paintable': (pspec: GObject.ParamSpec) => void;
            'notify::can-default': (pspec: GObject.ParamSpec) => void;
            'notify::can-focus': (pspec: GObject.ParamSpec) => void;
            'notify::composite-child': (pspec: GObject.ParamSpec) => void;
            'notify::double-buffered': (pspec: GObject.ParamSpec) => void;
            'notify::events': (pspec: GObject.ParamSpec) => void;
            'notify::expand': (pspec: GObject.ParamSpec) => void;
            'notify::focus-on-click': (pspec: GObject.ParamSpec) => void;
            'notify::halign': (pspec: GObject.ParamSpec) => void;
            'notify::has-default': (pspec: GObject.ParamSpec) => void;
            'notify::has-focus': (pspec: GObject.ParamSpec) => void;
            'notify::has-tooltip': (pspec: GObject.ParamSpec) => void;
            'notify::height-request': (pspec: GObject.ParamSpec) => void;
            'notify::hexpand': (pspec: GObject.ParamSpec) => void;
            'notify::hexpand-set': (pspec: GObject.ParamSpec) => void;
            'notify::is-focus': (pspec: GObject.ParamSpec) => void;
            'notify::margin': (pspec: GObject.ParamSpec) => void;
            'notify::margin-bottom': (pspec: GObject.ParamSpec) => void;
            'notify::margin-end': (pspec: GObject.ParamSpec) => void;
            'notify::margin-left': (pspec: GObject.ParamSpec) => void;
            'notify::margin-right': (pspec: GObject.ParamSpec) => void;
            'notify::margin-start': (pspec: GObject.ParamSpec) => void;
            'notify::margin-top': (pspec: GObject.ParamSpec) => void;
            'notify::name': (pspec: GObject.ParamSpec) => void;
            'notify::no-show-all': (pspec: GObject.ParamSpec) => void;
            'notify::opacity': (pspec: GObject.ParamSpec) => void;
            'notify::parent': (pspec: GObject.ParamSpec) => void;
            'notify::receives-default': (pspec: GObject.ParamSpec) => void;
            'notify::scale-factor': (pspec: GObject.ParamSpec) => void;
            'notify::sensitive': (pspec: GObject.ParamSpec) => void;
            'notify::style': (pspec: GObject.ParamSpec) => void;
            'notify::tooltip-markup': (pspec: GObject.ParamSpec) => void;
            'notify::tooltip-text': (pspec: GObject.ParamSpec) => void;
            'notify::valign': (pspec: GObject.ParamSpec) => void;
            'notify::vexpand': (pspec: GObject.ParamSpec) => void;
            'notify::vexpand-set': (pspec: GObject.ParamSpec) => void;
            'notify::visible': (pspec: GObject.ParamSpec) => void;
            'notify::width-request': (pspec: GObject.ParamSpec) => void;
            'notify::window': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends Gtk.EventBox.ConstructorProps {
            pixbuf: GdkPixbuf.Pixbuf;
        }
    }

    class WidgetsAvatar extends Gtk.EventBox {
        static $gtype: GObject.GType<WidgetsAvatar>;

        // Properties

        get pixbuf(): GdkPixbuf.Pixbuf;
        set pixbuf(val: GdkPixbuf.Pixbuf);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: WidgetsAvatar.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<WidgetsAvatar.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): WidgetsAvatar;

        static from_pixbuf(pixbuf: GdkPixbuf.Pixbuf): WidgetsAvatar;

        static from_file(filepath: string, pixel_size: number): WidgetsAvatar;

        static with_default_icon(pixel_size: number): WidgetsAvatar;

        // Signals

        connect<K extends keyof WidgetsAvatar.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, WidgetsAvatar.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof WidgetsAvatar.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, WidgetsAvatar.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof WidgetsAvatar.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<WidgetsAvatar.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        get_pixbuf(): GdkPixbuf.Pixbuf | null;
        set_pixbuf(value?: GdkPixbuf.Pixbuf | null): void;
        show_default(pixel_size: number): void;
    }

    namespace WidgetsCellRendererBadge {
        // Signal signatures
        interface SignalSignatures extends Gtk.CellRenderer.SignalSignatures {
            'notify::text': (pspec: GObject.ParamSpec) => void;
            'notify::cell-background': (pspec: GObject.ParamSpec) => void;
            'notify::cell-background-gdk': (pspec: GObject.ParamSpec) => void;
            'notify::cell-background-rgba': (pspec: GObject.ParamSpec) => void;
            'notify::cell-background-set': (pspec: GObject.ParamSpec) => void;
            'notify::editing': (pspec: GObject.ParamSpec) => void;
            'notify::height': (pspec: GObject.ParamSpec) => void;
            'notify::is-expanded': (pspec: GObject.ParamSpec) => void;
            'notify::is-expander': (pspec: GObject.ParamSpec) => void;
            'notify::mode': (pspec: GObject.ParamSpec) => void;
            'notify::sensitive': (pspec: GObject.ParamSpec) => void;
            'notify::visible': (pspec: GObject.ParamSpec) => void;
            'notify::width': (pspec: GObject.ParamSpec) => void;
            'notify::xalign': (pspec: GObject.ParamSpec) => void;
            'notify::xpad': (pspec: GObject.ParamSpec) => void;
            'notify::yalign': (pspec: GObject.ParamSpec) => void;
            'notify::ypad': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends Gtk.CellRenderer.ConstructorProps {
            text: string;
        }
    }

    class WidgetsCellRendererBadge extends Gtk.CellRenderer {
        static $gtype: GObject.GType<WidgetsCellRendererBadge>;

        // Properties

        get text(): string;
        set text(val: string);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: WidgetsCellRendererBadge.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<WidgetsCellRendererBadge.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): WidgetsCellRendererBadge;

        // Signals

        connect<K extends keyof WidgetsCellRendererBadge.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, WidgetsCellRendererBadge.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof WidgetsCellRendererBadge.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, WidgetsCellRendererBadge.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof WidgetsCellRendererBadge.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<WidgetsCellRendererBadge.SignalSignatures[K]> extends [any, ...infer Q]
                ? Q
                : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        get_text(): string;
        set_text(value: string): void;
    }

    namespace WidgetsCellRendererExpander {
        // Signal signatures
        interface SignalSignatures extends Gtk.CellRenderer.SignalSignatures {
            'notify::is-category-expander': (pspec: GObject.ParamSpec) => void;
            'notify::cell-background': (pspec: GObject.ParamSpec) => void;
            'notify::cell-background-gdk': (pspec: GObject.ParamSpec) => void;
            'notify::cell-background-rgba': (pspec: GObject.ParamSpec) => void;
            'notify::cell-background-set': (pspec: GObject.ParamSpec) => void;
            'notify::editing': (pspec: GObject.ParamSpec) => void;
            'notify::height': (pspec: GObject.ParamSpec) => void;
            'notify::is-expanded': (pspec: GObject.ParamSpec) => void;
            'notify::is-expander': (pspec: GObject.ParamSpec) => void;
            'notify::mode': (pspec: GObject.ParamSpec) => void;
            'notify::sensitive': (pspec: GObject.ParamSpec) => void;
            'notify::visible': (pspec: GObject.ParamSpec) => void;
            'notify::width': (pspec: GObject.ParamSpec) => void;
            'notify::xalign': (pspec: GObject.ParamSpec) => void;
            'notify::xpad': (pspec: GObject.ParamSpec) => void;
            'notify::yalign': (pspec: GObject.ParamSpec) => void;
            'notify::ypad': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends Gtk.CellRenderer.ConstructorProps {
            is_category_expander: boolean;
            isCategoryExpander: boolean;
        }
    }

    class WidgetsCellRendererExpander extends Gtk.CellRenderer {
        static $gtype: GObject.GType<WidgetsCellRendererExpander>;

        // Properties

        get is_category_expander(): boolean;
        set is_category_expander(val: boolean);
        get isCategoryExpander(): boolean;
        set isCategoryExpander(val: boolean);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: WidgetsCellRendererExpander.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<WidgetsCellRendererExpander.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): WidgetsCellRendererExpander;

        // Signals

        connect<K extends keyof WidgetsCellRendererExpander.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, WidgetsCellRendererExpander.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof WidgetsCellRendererExpander.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, WidgetsCellRendererExpander.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof WidgetsCellRendererExpander.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<WidgetsCellRendererExpander.SignalSignatures[K]> extends [any, ...infer Q]
                ? Q
                : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Virtual methods

        vfunc_get_arrow_size(widget: Gtk.Widget): number;

        // Methods

        get_is_category_expander(): boolean;
        set_is_category_expander(value: boolean): void;
        get_arrow_size(widget: Gtk.Widget): number;
    }

    namespace WidgetsCollapsiblePaned {
        // Signal signatures
        interface SignalSignatures extends Gtk.Paned.SignalSignatures {
            'notify::collapse-mode': (pspec: GObject.ParamSpec) => void;
            'notify::max-position': (pspec: GObject.ParamSpec) => void;
            'notify::min-position': (pspec: GObject.ParamSpec) => void;
            'notify::position': (pspec: GObject.ParamSpec) => void;
            'notify::position-set': (pspec: GObject.ParamSpec) => void;
            'notify::wide-handle': (pspec: GObject.ParamSpec) => void;
            'notify::border-width': (pspec: GObject.ParamSpec) => void;
            'notify::child': (pspec: GObject.ParamSpec) => void;
            'notify::resize-mode': (pspec: GObject.ParamSpec) => void;
            'notify::app-paintable': (pspec: GObject.ParamSpec) => void;
            'notify::can-default': (pspec: GObject.ParamSpec) => void;
            'notify::can-focus': (pspec: GObject.ParamSpec) => void;
            'notify::composite-child': (pspec: GObject.ParamSpec) => void;
            'notify::double-buffered': (pspec: GObject.ParamSpec) => void;
            'notify::events': (pspec: GObject.ParamSpec) => void;
            'notify::expand': (pspec: GObject.ParamSpec) => void;
            'notify::focus-on-click': (pspec: GObject.ParamSpec) => void;
            'notify::halign': (pspec: GObject.ParamSpec) => void;
            'notify::has-default': (pspec: GObject.ParamSpec) => void;
            'notify::has-focus': (pspec: GObject.ParamSpec) => void;
            'notify::has-tooltip': (pspec: GObject.ParamSpec) => void;
            'notify::height-request': (pspec: GObject.ParamSpec) => void;
            'notify::hexpand': (pspec: GObject.ParamSpec) => void;
            'notify::hexpand-set': (pspec: GObject.ParamSpec) => void;
            'notify::is-focus': (pspec: GObject.ParamSpec) => void;
            'notify::margin': (pspec: GObject.ParamSpec) => void;
            'notify::margin-bottom': (pspec: GObject.ParamSpec) => void;
            'notify::margin-end': (pspec: GObject.ParamSpec) => void;
            'notify::margin-left': (pspec: GObject.ParamSpec) => void;
            'notify::margin-right': (pspec: GObject.ParamSpec) => void;
            'notify::margin-start': (pspec: GObject.ParamSpec) => void;
            'notify::margin-top': (pspec: GObject.ParamSpec) => void;
            'notify::name': (pspec: GObject.ParamSpec) => void;
            'notify::no-show-all': (pspec: GObject.ParamSpec) => void;
            'notify::opacity': (pspec: GObject.ParamSpec) => void;
            'notify::parent': (pspec: GObject.ParamSpec) => void;
            'notify::receives-default': (pspec: GObject.ParamSpec) => void;
            'notify::scale-factor': (pspec: GObject.ParamSpec) => void;
            'notify::sensitive': (pspec: GObject.ParamSpec) => void;
            'notify::style': (pspec: GObject.ParamSpec) => void;
            'notify::tooltip-markup': (pspec: GObject.ParamSpec) => void;
            'notify::tooltip-text': (pspec: GObject.ParamSpec) => void;
            'notify::valign': (pspec: GObject.ParamSpec) => void;
            'notify::vexpand': (pspec: GObject.ParamSpec) => void;
            'notify::vexpand-set': (pspec: GObject.ParamSpec) => void;
            'notify::visible': (pspec: GObject.ParamSpec) => void;
            'notify::width-request': (pspec: GObject.ParamSpec) => void;
            'notify::window': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends Gtk.Paned.ConstructorProps {
            collapse_mode: CollapseMode;
            collapseMode: CollapseMode;
        }
    }

    class WidgetsCollapsiblePaned extends Gtk.Paned {
        static $gtype: GObject.GType<WidgetsCollapsiblePaned>;

        // Properties

        get collapse_mode(): CollapseMode;
        set collapse_mode(val: CollapseMode);
        get collapseMode(): CollapseMode;
        set collapseMode(val: CollapseMode);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: WidgetsCollapsiblePaned.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<WidgetsCollapsiblePaned.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](orientation: Gtk.Orientation): WidgetsCollapsiblePaned;

        // Signals

        connect<K extends keyof WidgetsCollapsiblePaned.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, WidgetsCollapsiblePaned.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof WidgetsCollapsiblePaned.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, WidgetsCollapsiblePaned.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof WidgetsCollapsiblePaned.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<WidgetsCollapsiblePaned.SignalSignatures[K]> extends [any, ...infer Q]
                ? Q
                : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        get_collapse_mode(): CollapseMode;
        set_collapse_mode(value: CollapseMode | null): void;
    }

    namespace WidgetsCompositedWindow {
        // Signal signatures
        interface SignalSignatures extends Gtk.Window.SignalSignatures {
            'notify::accept-focus': (pspec: GObject.ParamSpec) => void;
            'notify::application': (pspec: GObject.ParamSpec) => void;
            'notify::attached-to': (pspec: GObject.ParamSpec) => void;
            'notify::decorated': (pspec: GObject.ParamSpec) => void;
            'notify::default-height': (pspec: GObject.ParamSpec) => void;
            'notify::default-width': (pspec: GObject.ParamSpec) => void;
            'notify::deletable': (pspec: GObject.ParamSpec) => void;
            'notify::destroy-with-parent': (pspec: GObject.ParamSpec) => void;
            'notify::focus-on-map': (pspec: GObject.ParamSpec) => void;
            'notify::focus-visible': (pspec: GObject.ParamSpec) => void;
            'notify::gravity': (pspec: GObject.ParamSpec) => void;
            'notify::has-resize-grip': (pspec: GObject.ParamSpec) => void;
            'notify::has-toplevel-focus': (pspec: GObject.ParamSpec) => void;
            'notify::hide-titlebar-when-maximized': (pspec: GObject.ParamSpec) => void;
            'notify::icon': (pspec: GObject.ParamSpec) => void;
            'notify::icon-name': (pspec: GObject.ParamSpec) => void;
            'notify::is-active': (pspec: GObject.ParamSpec) => void;
            'notify::is-maximized': (pspec: GObject.ParamSpec) => void;
            'notify::mnemonics-visible': (pspec: GObject.ParamSpec) => void;
            'notify::modal': (pspec: GObject.ParamSpec) => void;
            'notify::resizable': (pspec: GObject.ParamSpec) => void;
            'notify::resize-grip-visible': (pspec: GObject.ParamSpec) => void;
            'notify::role': (pspec: GObject.ParamSpec) => void;
            'notify::screen': (pspec: GObject.ParamSpec) => void;
            'notify::skip-pager-hint': (pspec: GObject.ParamSpec) => void;
            'notify::skip-taskbar-hint': (pspec: GObject.ParamSpec) => void;
            'notify::startup-id': (pspec: GObject.ParamSpec) => void;
            'notify::title': (pspec: GObject.ParamSpec) => void;
            'notify::transient-for': (pspec: GObject.ParamSpec) => void;
            'notify::type': (pspec: GObject.ParamSpec) => void;
            'notify::type-hint': (pspec: GObject.ParamSpec) => void;
            'notify::urgency-hint': (pspec: GObject.ParamSpec) => void;
            'notify::window-position': (pspec: GObject.ParamSpec) => void;
            'notify::border-width': (pspec: GObject.ParamSpec) => void;
            'notify::child': (pspec: GObject.ParamSpec) => void;
            'notify::resize-mode': (pspec: GObject.ParamSpec) => void;
            'notify::app-paintable': (pspec: GObject.ParamSpec) => void;
            'notify::can-default': (pspec: GObject.ParamSpec) => void;
            'notify::can-focus': (pspec: GObject.ParamSpec) => void;
            'notify::composite-child': (pspec: GObject.ParamSpec) => void;
            'notify::double-buffered': (pspec: GObject.ParamSpec) => void;
            'notify::events': (pspec: GObject.ParamSpec) => void;
            'notify::expand': (pspec: GObject.ParamSpec) => void;
            'notify::focus-on-click': (pspec: GObject.ParamSpec) => void;
            'notify::halign': (pspec: GObject.ParamSpec) => void;
            'notify::has-default': (pspec: GObject.ParamSpec) => void;
            'notify::has-focus': (pspec: GObject.ParamSpec) => void;
            'notify::has-tooltip': (pspec: GObject.ParamSpec) => void;
            'notify::height-request': (pspec: GObject.ParamSpec) => void;
            'notify::hexpand': (pspec: GObject.ParamSpec) => void;
            'notify::hexpand-set': (pspec: GObject.ParamSpec) => void;
            'notify::is-focus': (pspec: GObject.ParamSpec) => void;
            'notify::margin': (pspec: GObject.ParamSpec) => void;
            'notify::margin-bottom': (pspec: GObject.ParamSpec) => void;
            'notify::margin-end': (pspec: GObject.ParamSpec) => void;
            'notify::margin-left': (pspec: GObject.ParamSpec) => void;
            'notify::margin-right': (pspec: GObject.ParamSpec) => void;
            'notify::margin-start': (pspec: GObject.ParamSpec) => void;
            'notify::margin-top': (pspec: GObject.ParamSpec) => void;
            'notify::name': (pspec: GObject.ParamSpec) => void;
            'notify::no-show-all': (pspec: GObject.ParamSpec) => void;
            'notify::opacity': (pspec: GObject.ParamSpec) => void;
            'notify::parent': (pspec: GObject.ParamSpec) => void;
            'notify::receives-default': (pspec: GObject.ParamSpec) => void;
            'notify::scale-factor': (pspec: GObject.ParamSpec) => void;
            'notify::sensitive': (pspec: GObject.ParamSpec) => void;
            'notify::style': (pspec: GObject.ParamSpec) => void;
            'notify::tooltip-markup': (pspec: GObject.ParamSpec) => void;
            'notify::tooltip-text': (pspec: GObject.ParamSpec) => void;
            'notify::valign': (pspec: GObject.ParamSpec) => void;
            'notify::vexpand': (pspec: GObject.ParamSpec) => void;
            'notify::vexpand-set': (pspec: GObject.ParamSpec) => void;
            'notify::visible': (pspec: GObject.ParamSpec) => void;
            'notify::width-request': (pspec: GObject.ParamSpec) => void;
            'notify::window': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends Gtk.Window.ConstructorProps, Gtk.Buildable.ConstructorProps {}
    }

    class WidgetsCompositedWindow extends Gtk.Window implements Gtk.Buildable {
        static $gtype: GObject.GType<WidgetsCompositedWindow>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: WidgetsCompositedWindow.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<WidgetsCompositedWindow.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): WidgetsCompositedWindow;

        // Signals

        connect<K extends keyof WidgetsCompositedWindow.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, WidgetsCompositedWindow.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof WidgetsCompositedWindow.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, WidgetsCompositedWindow.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof WidgetsCompositedWindow.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<WidgetsCompositedWindow.SignalSignatures[K]> extends [any, ...infer Q]
                ? Q
                : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Inherited methods
        /**
         * Creates a binding between `source_property` on `source` and `target_property`
         * on `target`.
         *
         * Whenever the `source_property` is changed the `target_property` is
         * updated using the same value. For instance:
         *
         *
         * ```c
         *   g_object_bind_property (action, "active", widget, "sensitive", 0);
         * ```
         *
         *
         * Will result in the "sensitive" property of the widget #GObject instance to be
         * updated with the same value of the "active" property of the action #GObject
         * instance.
         *
         * If `flags` contains %G_BINDING_BIDIRECTIONAL then the binding will be mutual:
         * if `target_property` on `target` changes then the `source_property` on `source`
         * will be updated as well.
         *
         * The binding will automatically be removed when either the `source` or the
         * `target` instances are finalized. To remove the binding without affecting the
         * `source` and the `target` you can just call g_object_unref() on the returned
         * #GBinding instance.
         *
         * Removing the binding by calling g_object_unref() on it must only be done if
         * the binding, `source` and `target` are only used from a single thread and it
         * is clear that both `source` and `target` outlive the binding. Especially it
         * is not safe to rely on this if the binding, `source` or `target` can be
         * finalized from different threads. Keep another reference to the binding and
         * use g_binding_unbind() instead to be on the safe side.
         *
         * A #GObject can have multiple bindings.
         * @param source_property the property on @source to bind
         * @param target the target #GObject
         * @param target_property the property on @target to bind
         * @param flags flags to pass to #GBinding
         * @returns the #GBinding instance representing the     binding between the two #GObject instances. The binding is released     whenever the #GBinding reference count reaches zero.
         */
        bind_property(
            source_property: string,
            target: GObject.Object,
            target_property: string,
            flags: GObject.BindingFlags | null,
        ): GObject.Binding;
        /**
         * Complete version of g_object_bind_property().
         *
         * Creates a binding between `source_property` on `source` and `target_property`
         * on `target,` allowing you to set the transformation functions to be used by
         * the binding.
         *
         * If `flags` contains %G_BINDING_BIDIRECTIONAL then the binding will be mutual:
         * if `target_property` on `target` changes then the `source_property` on `source`
         * will be updated as well. The `transform_from` function is only used in case
         * of bidirectional bindings, otherwise it will be ignored
         *
         * The binding will automatically be removed when either the `source` or the
         * `target` instances are finalized. This will release the reference that is
         * being held on the #GBinding instance; if you want to hold on to the
         * #GBinding instance, you will need to hold a reference to it.
         *
         * To remove the binding, call g_binding_unbind().
         *
         * A #GObject can have multiple bindings.
         *
         * The same `user_data` parameter will be used for both `transform_to`
         * and `transform_from` transformation functions; the `notify` function will
         * be called once, when the binding is removed. If you need different data
         * for each transformation function, please use
         * g_object_bind_property_with_closures() instead.
         * @param source_property the property on @source to bind
         * @param target the target #GObject
         * @param target_property the property on @target to bind
         * @param flags flags to pass to #GBinding
         * @param transform_to the transformation function     from the @source to the @target, or %NULL to use the default
         * @param transform_from the transformation function     from the @target to the @source, or %NULL to use the default
         * @param notify a function to call when disposing the binding, to free     resources used by the transformation functions, or %NULL if not required
         * @returns the #GBinding instance representing the     binding between the two #GObject instances. The binding is released     whenever the #GBinding reference count reaches zero.
         */
        bind_property_full(
            source_property: string,
            target: GObject.Object,
            target_property: string,
            flags: GObject.BindingFlags | null,
            transform_to?: GObject.BindingTransformFunc | null,
            transform_from?: GObject.BindingTransformFunc | null,
            notify?: GLib.DestroyNotify | null,
        ): GObject.Binding;
        // Conflicted with GObject.Object.bind_property_full
        bind_property_full(...args: never[]): any;
        /**
         * This function is intended for #GObject implementations to re-enforce
         * a [floating][floating-ref] object reference. Doing this is seldom
         * required: all #GInitiallyUnowneds are created with a floating reference
         * which usually just needs to be sunken by calling g_object_ref_sink().
         */
        force_floating(): void;
        /**
         * Increases the freeze count on `object`. If the freeze count is
         * non-zero, the emission of "notify" signals on `object` is
         * stopped. The signals are queued until the freeze count is decreased
         * to zero. Duplicate notifications are squashed so that at most one
         * #GObject::notify signal is emitted for each property modified while the
         * object is frozen.
         *
         * This is necessary for accessors that modify multiple properties to prevent
         * premature notification while the object is still being modified.
         */
        freeze_notify(): void;
        /**
         * Gets a named field from the objects table of associations (see g_object_set_data()).
         * @param key name of the key for that association
         * @returns the data if found,          or %NULL if no such data exists.
         */
        get_data(key: string): any | null;
        /**
         * Gets a property of an object.
         *
         * The value can be:
         * - an empty GObject.Value initialized by G_VALUE_INIT, which will be automatically initialized with the expected type of the property (since GLib 2.60)
         * - a GObject.Value initialized with the expected type of the property
         * - a GObject.Value initialized with a type to which the expected type of the property can be transformed
         *
         * In general, a copy is made of the property contents and the caller is responsible for freeing the memory by calling GObject.Value.unset.
         *
         * Note that GObject.Object.get_property is really intended for language bindings, GObject.Object.get is much more convenient for C programming.
         * @param property_name The name of the property to get
         * @param value Return location for the property value. Can be an empty GObject.Value initialized by G_VALUE_INIT (auto-initialized with expected type since GLib 2.60), a GObject.Value initialized with the expected property type, or a GObject.Value initialized with a transformable type
         */
        get_property(property_name: string, value: GObject.Value | any): any;
        /**
         * This function gets back user data pointers stored via
         * g_object_set_qdata().
         * @param quark A #GQuark, naming the user data pointer
         * @returns The user data pointer set, or %NULL
         */
        get_qdata(quark: GLib.Quark): any | null;
        /**
         * Gets `n_properties` properties for an `object`.
         * Obtained properties will be set to `values`. All properties must be valid.
         * Warnings will be emitted and undefined behaviour may result if invalid
         * properties are passed in.
         * @param names the names of each property to get
         * @param values the values of each property to get
         */
        getv(names: string[], values: (GObject.Value | any)[]): void;
        /**
         * Checks whether `object` has a [floating][floating-ref] reference.
         * @returns %TRUE if @object has a floating reference
         */
        is_floating(): boolean;
        /**
         * Emits a "notify" signal for the property `property_name` on `object`.
         *
         * When possible, eg. when signaling a property change from within the class
         * that registered the property, you should use g_object_notify_by_pspec()
         * instead.
         *
         * Note that emission of the notify signal may be blocked with
         * g_object_freeze_notify(). In this case, the signal emissions are queued
         * and will be emitted (in reverse order) when g_object_thaw_notify() is
         * called.
         * @param property_name the name of a property installed on the class of @object.
         */
        notify(property_name: string): void;
        /**
         * Emits a "notify" signal for the property specified by `pspec` on `object`.
         *
         * This function omits the property name lookup, hence it is faster than
         * g_object_notify().
         *
         * One way to avoid using g_object_notify() from within the
         * class that registered the properties, and using g_object_notify_by_pspec()
         * instead, is to store the GParamSpec used with
         * g_object_class_install_property() inside a static array, e.g.:
         *
         *
         * ```c
         *   typedef enum
         *   {
         *     PROP_FOO = 1,
         *     PROP_LAST
         *   } MyObjectProperty;
         *
         *   static GParamSpec *properties[PROP_LAST];
         *
         *   static void
         *   my_object_class_init (MyObjectClass *klass)
         *   {
         *     properties[PROP_FOO] = g_param_spec_int ("foo", NULL, NULL,
         *                                              0, 100,
         *                                              50,
         *                                              G_PARAM_READWRITE | G_PARAM_STATIC_STRINGS);
         *     g_object_class_install_property (gobject_class,
         *                                      PROP_FOO,
         *                                      properties[PROP_FOO]);
         *   }
         * ```
         *
         *
         * and then notify a change on the "foo" property with:
         *
         *
         * ```c
         *   g_object_notify_by_pspec (self, properties[PROP_FOO]);
         * ```
         *
         * @param pspec the #GParamSpec of a property installed on the class of @object.
         */
        notify_by_pspec(pspec: GObject.ParamSpec): void;
        /**
         * Increases the reference count of `object`.
         *
         * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
         * of `object` will be propagated to the return type (using the GCC typeof()
         * extension), so any casting the caller needs to do on the return type must be
         * explicit.
         * @returns the same @object
         */
        ref(): GObject.Object;
        /**
         * Increase the reference count of `object,` and possibly remove the
         * [floating][floating-ref] reference, if `object` has a floating reference.
         *
         * In other words, if the object is floating, then this call "assumes
         * ownership" of the floating reference, converting it to a normal
         * reference by clearing the floating flag while leaving the reference
         * count unchanged.  If the object is not floating, then this call
         * adds a new normal reference increasing the reference count by one.
         *
         * Since GLib 2.56, the type of `object` will be propagated to the return type
         * under the same conditions as for g_object_ref().
         * @returns @object
         */
        ref_sink(): GObject.Object;
        /**
         * Releases all references to other objects. This can be used to break
         * reference cycles.
         *
         * This function should only be called from object system implementations.
         */
        run_dispose(): void;
        /**
         * Each object carries around a table of associations from
         * strings to pointers.  This function lets you set an association.
         *
         * If the object already had an association with that name,
         * the old association will be destroyed.
         *
         * Internally, the `key` is converted to a #GQuark using g_quark_from_string().
         * This means a copy of `key` is kept permanently (even after `object` has been
         * finalized) — so it is recommended to only use a small, bounded set of values
         * for `key` in your program, to avoid the #GQuark storage growing unbounded.
         * @param key name of the key
         * @param data data to associate with that key
         */
        set_data(key: string, data?: any | null): void;
        /**
         * Sets a property on an object.
         * @param property_name The name of the property to set
         * @param value The value to set the property to
         */
        set_property(property_name: string, value: GObject.Value | any): void;
        /**
         * Remove a specified datum from the object's data associations,
         * without invoking the association's destroy handler.
         * @param key name of the key
         * @returns the data if found, or %NULL          if no such data exists.
         */
        steal_data(key: string): any | null;
        /**
         * This function gets back user data pointers stored via
         * g_object_set_qdata() and removes the `data` from object
         * without invoking its destroy() function (if any was
         * set).
         * Usually, calling this function is only required to update
         * user data pointers with a destroy notifier, for example:
         *
         * ```c
         * void
         * object_add_to_user_list (GObject     *object,
         *                          const gchar *new_string)
         * {
         *   // the quark, naming the object data
         *   GQuark quark_string_list = g_quark_from_static_string ("my-string-list");
         *   // retrieve the old string list
         *   GList *list = g_object_steal_qdata (object, quark_string_list);
         *
         *   // prepend new string
         *   list = g_list_prepend (list, g_strdup (new_string));
         *   // this changed 'list', so we need to set it again
         *   g_object_set_qdata_full (object, quark_string_list, list, free_string_list);
         * }
         * static void
         * free_string_list (gpointer data)
         * {
         *   GList *node, *list = data;
         *
         *   for (node = list; node; node = node->next)
         *     g_free (node->data);
         *   g_list_free (list);
         * }
         * ```
         *
         * Using g_object_get_qdata() in the above example, instead of
         * g_object_steal_qdata() would have left the destroy function set,
         * and thus the partial string list would have been freed upon
         * g_object_set_qdata_full().
         * @param quark A #GQuark, naming the user data pointer
         * @returns The user data pointer set, or %NULL
         */
        steal_qdata(quark: GLib.Quark): any | null;
        /**
         * Reverts the effect of a previous call to
         * g_object_freeze_notify(). The freeze count is decreased on `object`
         * and when it reaches zero, queued "notify" signals are emitted.
         *
         * Duplicate notifications for each property are squashed so that at most one
         * #GObject::notify signal is emitted for each property, in the reverse order
         * in which they have been queued.
         *
         * It is an error to call this function when the freeze count is zero.
         */
        thaw_notify(): void;
        /**
         * Decreases the reference count of `object`. When its reference count
         * drops to 0, the object is finalized (i.e. its memory is freed).
         *
         * If the pointer to the #GObject may be reused in future (for example, if it is
         * an instance variable of another object), it is recommended to clear the
         * pointer to %NULL rather than retain a dangling pointer to a potentially
         * invalid #GObject instance. Use g_clear_object() for this.
         */
        unref(): void;
        /**
         * This function essentially limits the life time of the `closure` to
         * the life time of the object. That is, when the object is finalized,
         * the `closure` is invalidated by calling g_closure_invalidate() on
         * it, in order to prevent invocations of the closure with a finalized
         * (nonexisting) object. Also, g_object_ref() and g_object_unref() are
         * added as marshal guards to the `closure,` to ensure that an extra
         * reference count is held on `object` during invocation of the
         * `closure`.  Usually, this function will be called on closures that
         * use this `object` as closure data.
         * @param closure #GClosure to watch
         */
        watch_closure(closure: GObject.Closure): void;
        /**
         * the `constructed` function is called by g_object_new() as the
         *  final step of the object creation process.  At the point of the call, all
         *  construction properties have been set on the object.  The purpose of this
         *  call is to allow for object initialisation steps that can only be performed
         *  after construction properties have been set.  `constructed` implementors
         *  should chain up to the `constructed` call of their parent class to allow it
         *  to complete its initialisation.
         */
        vfunc_constructed(): void;
        /**
         * emits property change notification for a bunch
         *  of properties. Overriding `dispatch_properties_changed` should be rarely
         *  needed.
         * @param n_pspecs
         * @param pspecs
         */
        vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void;
        /**
         * the `dispose` function is supposed to drop all references to other
         *  objects, but keep the instance otherwise intact, so that client method
         *  invocations still work. It may be run multiple times (due to reference
         *  loops). Before returning, `dispose` should chain up to the `dispose` method
         *  of the parent class.
         */
        vfunc_dispose(): void;
        /**
         * instance finalization function, should finish the finalization of
         *  the instance begun in `dispose` and chain up to the `finalize` method of the
         *  parent class.
         */
        vfunc_finalize(): void;
        /**
         * the generic getter for all properties of this type. Should be
         *  overridden for every type with properties.
         * @param property_id
         * @param value
         * @param pspec
         */
        vfunc_get_property(property_id: number, value: GObject.Value | any, pspec: GObject.ParamSpec): void;
        /**
         * Emits a "notify" signal for the property `property_name` on `object`.
         *
         * When possible, eg. when signaling a property change from within the class
         * that registered the property, you should use g_object_notify_by_pspec()
         * instead.
         *
         * Note that emission of the notify signal may be blocked with
         * g_object_freeze_notify(). In this case, the signal emissions are queued
         * and will be emitted (in reverse order) when g_object_thaw_notify() is
         * called.
         * @param pspec
         */
        vfunc_notify(pspec: GObject.ParamSpec): void;
        /**
         * the generic setter for all properties of this type. Should be
         *  overridden for every type with properties. If implementations of
         *  `set_property` don't emit property change notification explicitly, this will
         *  be done implicitly by the type system. However, if the notify signal is
         *  emitted explicitly, the type system will not emit it a second time.
         * @param property_id
         * @param value
         * @param pspec
         */
        vfunc_set_property(property_id: number, value: GObject.Value | any, pspec: GObject.ParamSpec): void;
        /**
         * Disconnects a handler from an instance so it will not be called during any future or currently ongoing emissions of the signal it has been connected to.
         * @param id Handler ID of the handler to be disconnected
         */
        disconnect(id: number): void;
        /**
         * Sets multiple properties of an object at once. The properties argument should be a dictionary mapping property names to values.
         * @param properties Object containing the properties to set
         */
        set(properties: { [key: string]: any }): void;
        /**
         * Blocks a handler of an instance so it will not be called during any signal emissions
         * @param id Handler ID of the handler to be blocked
         */
        block_signal_handler(id: number): void;
        /**
         * Unblocks a handler so it will be called again during any signal emissions
         * @param id Handler ID of the handler to be unblocked
         */
        unblock_signal_handler(id: number): void;
        /**
         * Stops a signal's emission by the given signal name. This will prevent the default handler and any subsequent signal handlers from being invoked.
         * @param detailedName Name of the signal to stop emission of
         */
        stop_emission_by_name(detailedName: string): void;
    }

    namespace WidgetsDatePicker {
        // Signal signatures
        interface SignalSignatures extends Gtk.Entry.SignalSignatures {
            'date-changed': () => void;
            'notify::format': (pspec: GObject.ParamSpec) => void;
            'notify::date': (pspec: GObject.ParamSpec) => void;
            'notify::activates-default': (pspec: GObject.ParamSpec) => void;
            'notify::attributes': (pspec: GObject.ParamSpec) => void;
            'notify::buffer': (pspec: GObject.ParamSpec) => void;
            'notify::caps-lock-warning': (pspec: GObject.ParamSpec) => void;
            'notify::completion': (pspec: GObject.ParamSpec) => void;
            'notify::cursor-position': (pspec: GObject.ParamSpec) => void;
            'notify::editable': (pspec: GObject.ParamSpec) => void;
            'notify::enable-emoji-completion': (pspec: GObject.ParamSpec) => void;
            'notify::has-frame': (pspec: GObject.ParamSpec) => void;
            'notify::im-module': (pspec: GObject.ParamSpec) => void;
            'notify::inner-border': (pspec: GObject.ParamSpec) => void;
            'notify::input-hints': (pspec: GObject.ParamSpec) => void;
            'notify::input-purpose': (pspec: GObject.ParamSpec) => void;
            'notify::invisible-char': (pspec: GObject.ParamSpec) => void;
            'notify::invisible-char-set': (pspec: GObject.ParamSpec) => void;
            'notify::max-length': (pspec: GObject.ParamSpec) => void;
            'notify::max-width-chars': (pspec: GObject.ParamSpec) => void;
            'notify::overwrite-mode': (pspec: GObject.ParamSpec) => void;
            'notify::placeholder-text': (pspec: GObject.ParamSpec) => void;
            'notify::populate-all': (pspec: GObject.ParamSpec) => void;
            'notify::primary-icon-activatable': (pspec: GObject.ParamSpec) => void;
            'notify::primary-icon-gicon': (pspec: GObject.ParamSpec) => void;
            'notify::primary-icon-name': (pspec: GObject.ParamSpec) => void;
            'notify::primary-icon-pixbuf': (pspec: GObject.ParamSpec) => void;
            'notify::primary-icon-sensitive': (pspec: GObject.ParamSpec) => void;
            'notify::primary-icon-stock': (pspec: GObject.ParamSpec) => void;
            'notify::primary-icon-storage-type': (pspec: GObject.ParamSpec) => void;
            'notify::primary-icon-tooltip-markup': (pspec: GObject.ParamSpec) => void;
            'notify::primary-icon-tooltip-text': (pspec: GObject.ParamSpec) => void;
            'notify::progress-fraction': (pspec: GObject.ParamSpec) => void;
            'notify::progress-pulse-step': (pspec: GObject.ParamSpec) => void;
            'notify::scroll-offset': (pspec: GObject.ParamSpec) => void;
            'notify::secondary-icon-activatable': (pspec: GObject.ParamSpec) => void;
            'notify::secondary-icon-gicon': (pspec: GObject.ParamSpec) => void;
            'notify::secondary-icon-name': (pspec: GObject.ParamSpec) => void;
            'notify::secondary-icon-pixbuf': (pspec: GObject.ParamSpec) => void;
            'notify::secondary-icon-sensitive': (pspec: GObject.ParamSpec) => void;
            'notify::secondary-icon-stock': (pspec: GObject.ParamSpec) => void;
            'notify::secondary-icon-storage-type': (pspec: GObject.ParamSpec) => void;
            'notify::secondary-icon-tooltip-markup': (pspec: GObject.ParamSpec) => void;
            'notify::secondary-icon-tooltip-text': (pspec: GObject.ParamSpec) => void;
            'notify::selection-bound': (pspec: GObject.ParamSpec) => void;
            'notify::shadow-type': (pspec: GObject.ParamSpec) => void;
            'notify::show-emoji-icon': (pspec: GObject.ParamSpec) => void;
            'notify::tabs': (pspec: GObject.ParamSpec) => void;
            'notify::text': (pspec: GObject.ParamSpec) => void;
            'notify::text-length': (pspec: GObject.ParamSpec) => void;
            'notify::truncate-multiline': (pspec: GObject.ParamSpec) => void;
            'notify::visibility': (pspec: GObject.ParamSpec) => void;
            'notify::width-chars': (pspec: GObject.ParamSpec) => void;
            'notify::xalign': (pspec: GObject.ParamSpec) => void;
            'notify::app-paintable': (pspec: GObject.ParamSpec) => void;
            'notify::can-default': (pspec: GObject.ParamSpec) => void;
            'notify::can-focus': (pspec: GObject.ParamSpec) => void;
            'notify::composite-child': (pspec: GObject.ParamSpec) => void;
            'notify::double-buffered': (pspec: GObject.ParamSpec) => void;
            'notify::events': (pspec: GObject.ParamSpec) => void;
            'notify::expand': (pspec: GObject.ParamSpec) => void;
            'notify::focus-on-click': (pspec: GObject.ParamSpec) => void;
            'notify::halign': (pspec: GObject.ParamSpec) => void;
            'notify::has-default': (pspec: GObject.ParamSpec) => void;
            'notify::has-focus': (pspec: GObject.ParamSpec) => void;
            'notify::has-tooltip': (pspec: GObject.ParamSpec) => void;
            'notify::height-request': (pspec: GObject.ParamSpec) => void;
            'notify::hexpand': (pspec: GObject.ParamSpec) => void;
            'notify::hexpand-set': (pspec: GObject.ParamSpec) => void;
            'notify::is-focus': (pspec: GObject.ParamSpec) => void;
            'notify::margin': (pspec: GObject.ParamSpec) => void;
            'notify::margin-bottom': (pspec: GObject.ParamSpec) => void;
            'notify::margin-end': (pspec: GObject.ParamSpec) => void;
            'notify::margin-left': (pspec: GObject.ParamSpec) => void;
            'notify::margin-right': (pspec: GObject.ParamSpec) => void;
            'notify::margin-start': (pspec: GObject.ParamSpec) => void;
            'notify::margin-top': (pspec: GObject.ParamSpec) => void;
            'notify::name': (pspec: GObject.ParamSpec) => void;
            'notify::no-show-all': (pspec: GObject.ParamSpec) => void;
            'notify::opacity': (pspec: GObject.ParamSpec) => void;
            'notify::parent': (pspec: GObject.ParamSpec) => void;
            'notify::receives-default': (pspec: GObject.ParamSpec) => void;
            'notify::scale-factor': (pspec: GObject.ParamSpec) => void;
            'notify::sensitive': (pspec: GObject.ParamSpec) => void;
            'notify::style': (pspec: GObject.ParamSpec) => void;
            'notify::tooltip-markup': (pspec: GObject.ParamSpec) => void;
            'notify::tooltip-text': (pspec: GObject.ParamSpec) => void;
            'notify::valign': (pspec: GObject.ParamSpec) => void;
            'notify::vexpand': (pspec: GObject.ParamSpec) => void;
            'notify::vexpand-set': (pspec: GObject.ParamSpec) => void;
            'notify::visible': (pspec: GObject.ParamSpec) => void;
            'notify::width-request': (pspec: GObject.ParamSpec) => void;
            'notify::window': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends Gtk.Entry.ConstructorProps, Gtk.Buildable.ConstructorProps {
            format: string;
            date: GLib.DateTime;
        }
    }

    class WidgetsDatePicker extends Gtk.Entry implements Gtk.Buildable {
        static $gtype: GObject.GType<WidgetsDatePicker>;

        // Properties

        get format(): string;
        get date(): GLib.DateTime;
        set date(val: GLib.DateTime);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: WidgetsDatePicker.SignalSignatures;

        // Fields

        dropdown: Gtk.EventBox;
        calendar: Gtk.Calendar;

        // Constructors

        constructor(properties?: Partial<WidgetsDatePicker.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static with_format(format: string): WidgetsDatePicker;

        static ['new'](): WidgetsDatePicker;

        // Signals

        connect<K extends keyof WidgetsDatePicker.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, WidgetsDatePicker.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof WidgetsDatePicker.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, WidgetsDatePicker.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof WidgetsDatePicker.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<WidgetsDatePicker.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Virtual methods

        vfunc_position_dropdown(): Gdk.Rectangle;

        // Methods

        get_format(): string;
        get_date(): GLib.DateTime;
        set_date(value: GLib.DateTime): void;
        position_dropdown(): Gdk.Rectangle;

        // Inherited methods
        /**
         * Creates a binding between `source_property` on `source` and `target_property`
         * on `target`.
         *
         * Whenever the `source_property` is changed the `target_property` is
         * updated using the same value. For instance:
         *
         *
         * ```c
         *   g_object_bind_property (action, "active", widget, "sensitive", 0);
         * ```
         *
         *
         * Will result in the "sensitive" property of the widget #GObject instance to be
         * updated with the same value of the "active" property of the action #GObject
         * instance.
         *
         * If `flags` contains %G_BINDING_BIDIRECTIONAL then the binding will be mutual:
         * if `target_property` on `target` changes then the `source_property` on `source`
         * will be updated as well.
         *
         * The binding will automatically be removed when either the `source` or the
         * `target` instances are finalized. To remove the binding without affecting the
         * `source` and the `target` you can just call g_object_unref() on the returned
         * #GBinding instance.
         *
         * Removing the binding by calling g_object_unref() on it must only be done if
         * the binding, `source` and `target` are only used from a single thread and it
         * is clear that both `source` and `target` outlive the binding. Especially it
         * is not safe to rely on this if the binding, `source` or `target` can be
         * finalized from different threads. Keep another reference to the binding and
         * use g_binding_unbind() instead to be on the safe side.
         *
         * A #GObject can have multiple bindings.
         * @param source_property the property on @source to bind
         * @param target the target #GObject
         * @param target_property the property on @target to bind
         * @param flags flags to pass to #GBinding
         * @returns the #GBinding instance representing the     binding between the two #GObject instances. The binding is released     whenever the #GBinding reference count reaches zero.
         */
        bind_property(
            source_property: string,
            target: GObject.Object,
            target_property: string,
            flags: GObject.BindingFlags | null,
        ): GObject.Binding;
        /**
         * Complete version of g_object_bind_property().
         *
         * Creates a binding between `source_property` on `source` and `target_property`
         * on `target,` allowing you to set the transformation functions to be used by
         * the binding.
         *
         * If `flags` contains %G_BINDING_BIDIRECTIONAL then the binding will be mutual:
         * if `target_property` on `target` changes then the `source_property` on `source`
         * will be updated as well. The `transform_from` function is only used in case
         * of bidirectional bindings, otherwise it will be ignored
         *
         * The binding will automatically be removed when either the `source` or the
         * `target` instances are finalized. This will release the reference that is
         * being held on the #GBinding instance; if you want to hold on to the
         * #GBinding instance, you will need to hold a reference to it.
         *
         * To remove the binding, call g_binding_unbind().
         *
         * A #GObject can have multiple bindings.
         *
         * The same `user_data` parameter will be used for both `transform_to`
         * and `transform_from` transformation functions; the `notify` function will
         * be called once, when the binding is removed. If you need different data
         * for each transformation function, please use
         * g_object_bind_property_with_closures() instead.
         * @param source_property the property on @source to bind
         * @param target the target #GObject
         * @param target_property the property on @target to bind
         * @param flags flags to pass to #GBinding
         * @param transform_to the transformation function     from the @source to the @target, or %NULL to use the default
         * @param transform_from the transformation function     from the @target to the @source, or %NULL to use the default
         * @param notify a function to call when disposing the binding, to free     resources used by the transformation functions, or %NULL if not required
         * @returns the #GBinding instance representing the     binding between the two #GObject instances. The binding is released     whenever the #GBinding reference count reaches zero.
         */
        bind_property_full(
            source_property: string,
            target: GObject.Object,
            target_property: string,
            flags: GObject.BindingFlags | null,
            transform_to?: GObject.BindingTransformFunc | null,
            transform_from?: GObject.BindingTransformFunc | null,
            notify?: GLib.DestroyNotify | null,
        ): GObject.Binding;
        // Conflicted with GObject.Object.bind_property_full
        bind_property_full(...args: never[]): any;
        /**
         * This function is intended for #GObject implementations to re-enforce
         * a [floating][floating-ref] object reference. Doing this is seldom
         * required: all #GInitiallyUnowneds are created with a floating reference
         * which usually just needs to be sunken by calling g_object_ref_sink().
         */
        force_floating(): void;
        /**
         * Increases the freeze count on `object`. If the freeze count is
         * non-zero, the emission of "notify" signals on `object` is
         * stopped. The signals are queued until the freeze count is decreased
         * to zero. Duplicate notifications are squashed so that at most one
         * #GObject::notify signal is emitted for each property modified while the
         * object is frozen.
         *
         * This is necessary for accessors that modify multiple properties to prevent
         * premature notification while the object is still being modified.
         */
        freeze_notify(): void;
        /**
         * Gets a named field from the objects table of associations (see g_object_set_data()).
         * @param key name of the key for that association
         * @returns the data if found,          or %NULL if no such data exists.
         */
        get_data(key: string): any | null;
        /**
         * Gets a property of an object.
         *
         * The value can be:
         * - an empty GObject.Value initialized by G_VALUE_INIT, which will be automatically initialized with the expected type of the property (since GLib 2.60)
         * - a GObject.Value initialized with the expected type of the property
         * - a GObject.Value initialized with a type to which the expected type of the property can be transformed
         *
         * In general, a copy is made of the property contents and the caller is responsible for freeing the memory by calling GObject.Value.unset.
         *
         * Note that GObject.Object.get_property is really intended for language bindings, GObject.Object.get is much more convenient for C programming.
         * @param property_name The name of the property to get
         * @param value Return location for the property value. Can be an empty GObject.Value initialized by G_VALUE_INIT (auto-initialized with expected type since GLib 2.60), a GObject.Value initialized with the expected property type, or a GObject.Value initialized with a transformable type
         */
        get_property(property_name: string, value: GObject.Value | any): any;
        /**
         * This function gets back user data pointers stored via
         * g_object_set_qdata().
         * @param quark A #GQuark, naming the user data pointer
         * @returns The user data pointer set, or %NULL
         */
        get_qdata(quark: GLib.Quark): any | null;
        /**
         * Gets `n_properties` properties for an `object`.
         * Obtained properties will be set to `values`. All properties must be valid.
         * Warnings will be emitted and undefined behaviour may result if invalid
         * properties are passed in.
         * @param names the names of each property to get
         * @param values the values of each property to get
         */
        getv(names: string[], values: (GObject.Value | any)[]): void;
        /**
         * Checks whether `object` has a [floating][floating-ref] reference.
         * @returns %TRUE if @object has a floating reference
         */
        is_floating(): boolean;
        /**
         * Emits a "notify" signal for the property `property_name` on `object`.
         *
         * When possible, eg. when signaling a property change from within the class
         * that registered the property, you should use g_object_notify_by_pspec()
         * instead.
         *
         * Note that emission of the notify signal may be blocked with
         * g_object_freeze_notify(). In this case, the signal emissions are queued
         * and will be emitted (in reverse order) when g_object_thaw_notify() is
         * called.
         * @param property_name the name of a property installed on the class of @object.
         */
        notify(property_name: string): void;
        /**
         * Emits a "notify" signal for the property specified by `pspec` on `object`.
         *
         * This function omits the property name lookup, hence it is faster than
         * g_object_notify().
         *
         * One way to avoid using g_object_notify() from within the
         * class that registered the properties, and using g_object_notify_by_pspec()
         * instead, is to store the GParamSpec used with
         * g_object_class_install_property() inside a static array, e.g.:
         *
         *
         * ```c
         *   typedef enum
         *   {
         *     PROP_FOO = 1,
         *     PROP_LAST
         *   } MyObjectProperty;
         *
         *   static GParamSpec *properties[PROP_LAST];
         *
         *   static void
         *   my_object_class_init (MyObjectClass *klass)
         *   {
         *     properties[PROP_FOO] = g_param_spec_int ("foo", NULL, NULL,
         *                                              0, 100,
         *                                              50,
         *                                              G_PARAM_READWRITE | G_PARAM_STATIC_STRINGS);
         *     g_object_class_install_property (gobject_class,
         *                                      PROP_FOO,
         *                                      properties[PROP_FOO]);
         *   }
         * ```
         *
         *
         * and then notify a change on the "foo" property with:
         *
         *
         * ```c
         *   g_object_notify_by_pspec (self, properties[PROP_FOO]);
         * ```
         *
         * @param pspec the #GParamSpec of a property installed on the class of @object.
         */
        notify_by_pspec(pspec: GObject.ParamSpec): void;
        /**
         * Increases the reference count of `object`.
         *
         * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
         * of `object` will be propagated to the return type (using the GCC typeof()
         * extension), so any casting the caller needs to do on the return type must be
         * explicit.
         * @returns the same @object
         */
        ref(): GObject.Object;
        /**
         * Increase the reference count of `object,` and possibly remove the
         * [floating][floating-ref] reference, if `object` has a floating reference.
         *
         * In other words, if the object is floating, then this call "assumes
         * ownership" of the floating reference, converting it to a normal
         * reference by clearing the floating flag while leaving the reference
         * count unchanged.  If the object is not floating, then this call
         * adds a new normal reference increasing the reference count by one.
         *
         * Since GLib 2.56, the type of `object` will be propagated to the return type
         * under the same conditions as for g_object_ref().
         * @returns @object
         */
        ref_sink(): GObject.Object;
        /**
         * Releases all references to other objects. This can be used to break
         * reference cycles.
         *
         * This function should only be called from object system implementations.
         */
        run_dispose(): void;
        /**
         * Each object carries around a table of associations from
         * strings to pointers.  This function lets you set an association.
         *
         * If the object already had an association with that name,
         * the old association will be destroyed.
         *
         * Internally, the `key` is converted to a #GQuark using g_quark_from_string().
         * This means a copy of `key` is kept permanently (even after `object` has been
         * finalized) — so it is recommended to only use a small, bounded set of values
         * for `key` in your program, to avoid the #GQuark storage growing unbounded.
         * @param key name of the key
         * @param data data to associate with that key
         */
        set_data(key: string, data?: any | null): void;
        /**
         * Sets a property on an object.
         * @param property_name The name of the property to set
         * @param value The value to set the property to
         */
        set_property(property_name: string, value: GObject.Value | any): void;
        /**
         * Remove a specified datum from the object's data associations,
         * without invoking the association's destroy handler.
         * @param key name of the key
         * @returns the data if found, or %NULL          if no such data exists.
         */
        steal_data(key: string): any | null;
        /**
         * This function gets back user data pointers stored via
         * g_object_set_qdata() and removes the `data` from object
         * without invoking its destroy() function (if any was
         * set).
         * Usually, calling this function is only required to update
         * user data pointers with a destroy notifier, for example:
         *
         * ```c
         * void
         * object_add_to_user_list (GObject     *object,
         *                          const gchar *new_string)
         * {
         *   // the quark, naming the object data
         *   GQuark quark_string_list = g_quark_from_static_string ("my-string-list");
         *   // retrieve the old string list
         *   GList *list = g_object_steal_qdata (object, quark_string_list);
         *
         *   // prepend new string
         *   list = g_list_prepend (list, g_strdup (new_string));
         *   // this changed 'list', so we need to set it again
         *   g_object_set_qdata_full (object, quark_string_list, list, free_string_list);
         * }
         * static void
         * free_string_list (gpointer data)
         * {
         *   GList *node, *list = data;
         *
         *   for (node = list; node; node = node->next)
         *     g_free (node->data);
         *   g_list_free (list);
         * }
         * ```
         *
         * Using g_object_get_qdata() in the above example, instead of
         * g_object_steal_qdata() would have left the destroy function set,
         * and thus the partial string list would have been freed upon
         * g_object_set_qdata_full().
         * @param quark A #GQuark, naming the user data pointer
         * @returns The user data pointer set, or %NULL
         */
        steal_qdata(quark: GLib.Quark): any | null;
        /**
         * Reverts the effect of a previous call to
         * g_object_freeze_notify(). The freeze count is decreased on `object`
         * and when it reaches zero, queued "notify" signals are emitted.
         *
         * Duplicate notifications for each property are squashed so that at most one
         * #GObject::notify signal is emitted for each property, in the reverse order
         * in which they have been queued.
         *
         * It is an error to call this function when the freeze count is zero.
         */
        thaw_notify(): void;
        /**
         * Decreases the reference count of `object`. When its reference count
         * drops to 0, the object is finalized (i.e. its memory is freed).
         *
         * If the pointer to the #GObject may be reused in future (for example, if it is
         * an instance variable of another object), it is recommended to clear the
         * pointer to %NULL rather than retain a dangling pointer to a potentially
         * invalid #GObject instance. Use g_clear_object() for this.
         */
        unref(): void;
        /**
         * This function essentially limits the life time of the `closure` to
         * the life time of the object. That is, when the object is finalized,
         * the `closure` is invalidated by calling g_closure_invalidate() on
         * it, in order to prevent invocations of the closure with a finalized
         * (nonexisting) object. Also, g_object_ref() and g_object_unref() are
         * added as marshal guards to the `closure,` to ensure that an extra
         * reference count is held on `object` during invocation of the
         * `closure`.  Usually, this function will be called on closures that
         * use this `object` as closure data.
         * @param closure #GClosure to watch
         */
        watch_closure(closure: GObject.Closure): void;
        /**
         * the `constructed` function is called by g_object_new() as the
         *  final step of the object creation process.  At the point of the call, all
         *  construction properties have been set on the object.  The purpose of this
         *  call is to allow for object initialisation steps that can only be performed
         *  after construction properties have been set.  `constructed` implementors
         *  should chain up to the `constructed` call of their parent class to allow it
         *  to complete its initialisation.
         */
        vfunc_constructed(): void;
        /**
         * emits property change notification for a bunch
         *  of properties. Overriding `dispatch_properties_changed` should be rarely
         *  needed.
         * @param n_pspecs
         * @param pspecs
         */
        vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void;
        /**
         * the `dispose` function is supposed to drop all references to other
         *  objects, but keep the instance otherwise intact, so that client method
         *  invocations still work. It may be run multiple times (due to reference
         *  loops). Before returning, `dispose` should chain up to the `dispose` method
         *  of the parent class.
         */
        vfunc_dispose(): void;
        /**
         * instance finalization function, should finish the finalization of
         *  the instance begun in `dispose` and chain up to the `finalize` method of the
         *  parent class.
         */
        vfunc_finalize(): void;
        /**
         * the generic getter for all properties of this type. Should be
         *  overridden for every type with properties.
         * @param property_id
         * @param value
         * @param pspec
         */
        vfunc_get_property(property_id: number, value: GObject.Value | any, pspec: GObject.ParamSpec): void;
        /**
         * Emits a "notify" signal for the property `property_name` on `object`.
         *
         * When possible, eg. when signaling a property change from within the class
         * that registered the property, you should use g_object_notify_by_pspec()
         * instead.
         *
         * Note that emission of the notify signal may be blocked with
         * g_object_freeze_notify(). In this case, the signal emissions are queued
         * and will be emitted (in reverse order) when g_object_thaw_notify() is
         * called.
         * @param pspec
         */
        vfunc_notify(pspec: GObject.ParamSpec): void;
        /**
         * the generic setter for all properties of this type. Should be
         *  overridden for every type with properties. If implementations of
         *  `set_property` don't emit property change notification explicitly, this will
         *  be done implicitly by the type system. However, if the notify signal is
         *  emitted explicitly, the type system will not emit it a second time.
         * @param property_id
         * @param value
         * @param pspec
         */
        vfunc_set_property(property_id: number, value: GObject.Value | any, pspec: GObject.ParamSpec): void;
        /**
         * Disconnects a handler from an instance so it will not be called during any future or currently ongoing emissions of the signal it has been connected to.
         * @param id Handler ID of the handler to be disconnected
         */
        disconnect(id: number): void;
        /**
         * Sets multiple properties of an object at once. The properties argument should be a dictionary mapping property names to values.
         * @param properties Object containing the properties to set
         */
        set(properties: { [key: string]: any }): void;
        /**
         * Blocks a handler of an instance so it will not be called during any signal emissions
         * @param id Handler ID of the handler to be blocked
         */
        block_signal_handler(id: number): void;
        /**
         * Unblocks a handler so it will be called again during any signal emissions
         * @param id Handler ID of the handler to be unblocked
         */
        unblock_signal_handler(id: number): void;
        /**
         * Stops a signal's emission by the given signal name. This will prevent the default handler and any subsequent signal handlers from being invoked.
         * @param detailedName Name of the signal to stop emission of
         */
        stop_emission_by_name(detailedName: string): void;
    }

    namespace WidgetsTab {
        // Signal signatures
        interface SignalSignatures extends Gtk.EventBox.SignalSignatures {
            'notify::label': (pspec: GObject.ParamSpec) => void;
            'notify::tooltip': (pspec: GObject.ParamSpec) => void;
            'notify::pinned': (pspec: GObject.ParamSpec) => void;
            'notify::pinnable': (pspec: GObject.ParamSpec) => void;
            'notify::restore-data': (pspec: GObject.ParamSpec) => void;
            'notify::close-tab-label': (pspec: GObject.ParamSpec) => void;
            'notify::duplicate-tab-label': (pspec: GObject.ParamSpec) => void;
            'notify::new-window-label': (pspec: GObject.ParamSpec) => void;
            'notify::page': (pspec: GObject.ParamSpec) => void;
            'notify::icon': (pspec: GObject.ParamSpec) => void;
            'notify::working': (pspec: GObject.ParamSpec) => void;
            'notify::ellipsize-mode': (pspec: GObject.ParamSpec) => void;
            'notify::menu': (pspec: GObject.ParamSpec) => void;
            'notify::above-child': (pspec: GObject.ParamSpec) => void;
            'notify::visible-window': (pspec: GObject.ParamSpec) => void;
            'notify::border-width': (pspec: GObject.ParamSpec) => void;
            'notify::child': (pspec: GObject.ParamSpec) => void;
            'notify::resize-mode': (pspec: GObject.ParamSpec) => void;
            'notify::app-paintable': (pspec: GObject.ParamSpec) => void;
            'notify::can-default': (pspec: GObject.ParamSpec) => void;
            'notify::can-focus': (pspec: GObject.ParamSpec) => void;
            'notify::composite-child': (pspec: GObject.ParamSpec) => void;
            'notify::double-buffered': (pspec: GObject.ParamSpec) => void;
            'notify::events': (pspec: GObject.ParamSpec) => void;
            'notify::expand': (pspec: GObject.ParamSpec) => void;
            'notify::focus-on-click': (pspec: GObject.ParamSpec) => void;
            'notify::halign': (pspec: GObject.ParamSpec) => void;
            'notify::has-default': (pspec: GObject.ParamSpec) => void;
            'notify::has-focus': (pspec: GObject.ParamSpec) => void;
            'notify::has-tooltip': (pspec: GObject.ParamSpec) => void;
            'notify::height-request': (pspec: GObject.ParamSpec) => void;
            'notify::hexpand': (pspec: GObject.ParamSpec) => void;
            'notify::hexpand-set': (pspec: GObject.ParamSpec) => void;
            'notify::is-focus': (pspec: GObject.ParamSpec) => void;
            'notify::margin': (pspec: GObject.ParamSpec) => void;
            'notify::margin-bottom': (pspec: GObject.ParamSpec) => void;
            'notify::margin-end': (pspec: GObject.ParamSpec) => void;
            'notify::margin-left': (pspec: GObject.ParamSpec) => void;
            'notify::margin-right': (pspec: GObject.ParamSpec) => void;
            'notify::margin-start': (pspec: GObject.ParamSpec) => void;
            'notify::margin-top': (pspec: GObject.ParamSpec) => void;
            'notify::name': (pspec: GObject.ParamSpec) => void;
            'notify::no-show-all': (pspec: GObject.ParamSpec) => void;
            'notify::opacity': (pspec: GObject.ParamSpec) => void;
            'notify::parent': (pspec: GObject.ParamSpec) => void;
            'notify::receives-default': (pspec: GObject.ParamSpec) => void;
            'notify::scale-factor': (pspec: GObject.ParamSpec) => void;
            'notify::sensitive': (pspec: GObject.ParamSpec) => void;
            'notify::style': (pspec: GObject.ParamSpec) => void;
            'notify::tooltip-markup': (pspec: GObject.ParamSpec) => void;
            'notify::tooltip-text': (pspec: GObject.ParamSpec) => void;
            'notify::valign': (pspec: GObject.ParamSpec) => void;
            'notify::vexpand': (pspec: GObject.ParamSpec) => void;
            'notify::vexpand-set': (pspec: GObject.ParamSpec) => void;
            'notify::visible': (pspec: GObject.ParamSpec) => void;
            'notify::width-request': (pspec: GObject.ParamSpec) => void;
            'notify::window': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends Gtk.EventBox.ConstructorProps {
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
        }
    }

    class WidgetsTab extends Gtk.EventBox {
        static $gtype: GObject.GType<WidgetsTab>;

        // Properties

        get label(): string;
        set label(val: string);
        set tooltip(val: string);
        get pinned(): boolean;
        set pinned(val: boolean);
        get pinnable(): boolean;
        set pinnable(val: boolean);
        get restore_data(): string;
        set restore_data(val: string);
        get restoreData(): string;
        set restoreData(val: string);
        get close_tab_label(): AccelLabel;
        get closeTabLabel(): AccelLabel;
        get duplicate_tab_label(): AccelLabel;
        get duplicateTabLabel(): AccelLabel;
        get new_window_label(): AccelLabel;
        get newWindowLabel(): AccelLabel;
        get page(): Gtk.Widget;
        set page(val: Gtk.Widget);
        get icon(): Gio.Icon;
        set icon(val: Gio.Icon);
        get working(): boolean;
        set working(val: boolean);
        get ellipsize_mode(): Pango.EllipsizeMode;
        set ellipsize_mode(val: Pango.EllipsizeMode);
        get ellipsizeMode(): Pango.EllipsizeMode;
        set ellipsizeMode(val: Pango.EllipsizeMode);
        get menu(): Gtk.Menu;
        set menu(val: Gtk.Menu);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: WidgetsTab.SignalSignatures;

        // Fields

        dropped_callback: WidgetsDroppedDelegate;
        dropped_callback_target: any;
        dropped_callback_target_destroy_notify: GLib.DestroyNotify;
        page_container: never;
        new_window_m: Gtk.MenuItem;
        duplicate_m: Gtk.MenuItem;
        pin_m: Gtk.MenuItem;

        // Constructors

        constructor(properties?: Partial<WidgetsTab.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](label?: string | null, icon?: Gio.Icon | null, page?: Gtk.Widget | null): WidgetsTab;
        // Conflicted with Gtk.EventBox.new

        static ['new'](...args: never[]): any;

        static with_accellabels(
            label?: string | null,
            icon?: Gio.Icon | null,
            page?: Gtk.Widget | null,
            _close_tab_label?: AccelLabel | null,
            _duplicate_tab_label?: AccelLabel | null,
            _new_window_label?: AccelLabel | null,
        ): WidgetsTab;

        // Signals

        connect<K extends keyof WidgetsTab.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, WidgetsTab.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof WidgetsTab.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, WidgetsTab.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof WidgetsTab.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<WidgetsTab.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

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
        set_ellipsize_mode(value: Pango.EllipsizeMode | null): void;
        get_menu(): Gtk.Menu;
        set_menu(value: Gtk.Menu): void;
        close(): void;
    }

    namespace WidgetsDynamicNotebook {
        // Signal signatures
        interface SignalSignatures extends Gtk.EventBox.SignalSignatures {
            'tab-added': (arg0: WidgetsTab) => void;
            'tab-removed': (arg0: WidgetsTab) => void;
            'tab-switched': (arg0: WidgetsTab | null, arg1: WidgetsTab) => void;
            'tab-reordered': (arg0: WidgetsTab, arg1: number) => void;
            'tab-moved': (arg0: WidgetsTab, arg1: number, arg2: number) => void;
            'tab-duplicated': (arg0: WidgetsTab) => void;
            'tab-restored': (arg0: string, arg1: string, arg2: Gio.Icon | null) => void;
            'new-tab-requested': () => void;
            'close-tab-requested': (arg0: WidgetsTab) => boolean | void;
            'notify::n-tabs': (pspec: GObject.ParamSpec) => void;
            'notify::show-tabs': (pspec: GObject.ParamSpec) => void;
            'notify::tabs-closable': (pspec: GObject.ParamSpec) => void;
            'notify::allow-drag': (pspec: GObject.ParamSpec) => void;
            'notify::allow-new-window': (pspec: GObject.ParamSpec) => void;
            'notify::allow-duplication': (pspec: GObject.ParamSpec) => void;
            'notify::allow-restoring': (pspec: GObject.ParamSpec) => void;
            'notify::max-restorable-tabs': (pspec: GObject.ParamSpec) => void;
            'notify::add-button-visible': (pspec: GObject.ParamSpec) => void;
            'notify::allow-pinning': (pspec: GObject.ParamSpec) => void;
            'notify::force-left': (pspec: GObject.ParamSpec) => void;
            'notify::add-button-tooltip': (pspec: GObject.ParamSpec) => void;
            'notify::new-tab-label': (pspec: GObject.ParamSpec) => void;
            'notify::restore-tab-label': (pspec: GObject.ParamSpec) => void;
            'notify::current': (pspec: GObject.ParamSpec) => void;
            'notify::tabs': (pspec: GObject.ParamSpec) => void;
            'notify::group-name': (pspec: GObject.ParamSpec) => void;
            'notify::tab-bar-behavior': (pspec: GObject.ParamSpec) => void;
            'notify::menu': (pspec: GObject.ParamSpec) => void;
            'notify::above-child': (pspec: GObject.ParamSpec) => void;
            'notify::visible-window': (pspec: GObject.ParamSpec) => void;
            'notify::border-width': (pspec: GObject.ParamSpec) => void;
            'notify::child': (pspec: GObject.ParamSpec) => void;
            'notify::resize-mode': (pspec: GObject.ParamSpec) => void;
            'notify::app-paintable': (pspec: GObject.ParamSpec) => void;
            'notify::can-default': (pspec: GObject.ParamSpec) => void;
            'notify::can-focus': (pspec: GObject.ParamSpec) => void;
            'notify::composite-child': (pspec: GObject.ParamSpec) => void;
            'notify::double-buffered': (pspec: GObject.ParamSpec) => void;
            'notify::events': (pspec: GObject.ParamSpec) => void;
            'notify::expand': (pspec: GObject.ParamSpec) => void;
            'notify::focus-on-click': (pspec: GObject.ParamSpec) => void;
            'notify::halign': (pspec: GObject.ParamSpec) => void;
            'notify::has-default': (pspec: GObject.ParamSpec) => void;
            'notify::has-focus': (pspec: GObject.ParamSpec) => void;
            'notify::has-tooltip': (pspec: GObject.ParamSpec) => void;
            'notify::height-request': (pspec: GObject.ParamSpec) => void;
            'notify::hexpand': (pspec: GObject.ParamSpec) => void;
            'notify::hexpand-set': (pspec: GObject.ParamSpec) => void;
            'notify::is-focus': (pspec: GObject.ParamSpec) => void;
            'notify::margin': (pspec: GObject.ParamSpec) => void;
            'notify::margin-bottom': (pspec: GObject.ParamSpec) => void;
            'notify::margin-end': (pspec: GObject.ParamSpec) => void;
            'notify::margin-left': (pspec: GObject.ParamSpec) => void;
            'notify::margin-right': (pspec: GObject.ParamSpec) => void;
            'notify::margin-start': (pspec: GObject.ParamSpec) => void;
            'notify::margin-top': (pspec: GObject.ParamSpec) => void;
            'notify::name': (pspec: GObject.ParamSpec) => void;
            'notify::no-show-all': (pspec: GObject.ParamSpec) => void;
            'notify::opacity': (pspec: GObject.ParamSpec) => void;
            'notify::parent': (pspec: GObject.ParamSpec) => void;
            'notify::receives-default': (pspec: GObject.ParamSpec) => void;
            'notify::scale-factor': (pspec: GObject.ParamSpec) => void;
            'notify::sensitive': (pspec: GObject.ParamSpec) => void;
            'notify::style': (pspec: GObject.ParamSpec) => void;
            'notify::tooltip-markup': (pspec: GObject.ParamSpec) => void;
            'notify::tooltip-text': (pspec: GObject.ParamSpec) => void;
            'notify::valign': (pspec: GObject.ParamSpec) => void;
            'notify::vexpand': (pspec: GObject.ParamSpec) => void;
            'notify::vexpand-set': (pspec: GObject.ParamSpec) => void;
            'notify::visible': (pspec: GObject.ParamSpec) => void;
            'notify::width-request': (pspec: GObject.ParamSpec) => void;
            'notify::window': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends Gtk.EventBox.ConstructorProps {
            n_tabs: number;
            nTabs: number;
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
            tabs: WidgetsTab[];
            group_name: string;
            groupName: string;
            tab_bar_behavior: WidgetsDynamicNotebookTabBarBehavior;
            tabBarBehavior: WidgetsDynamicNotebookTabBarBehavior;
            menu: Gtk.Menu;
        }
    }

    class WidgetsDynamicNotebook extends Gtk.EventBox {
        static $gtype: GObject.GType<WidgetsDynamicNotebook>;

        // Properties

        get n_tabs(): number;
        get nTabs(): number;
        get show_tabs(): boolean;
        set show_tabs(val: boolean);
        get showTabs(): boolean;
        set showTabs(val: boolean);
        get tabs_closable(): boolean;
        set tabs_closable(val: boolean);
        get tabsClosable(): boolean;
        set tabsClosable(val: boolean);
        get allow_drag(): boolean;
        set allow_drag(val: boolean);
        get allowDrag(): boolean;
        set allowDrag(val: boolean);
        get allow_new_window(): boolean;
        set allow_new_window(val: boolean);
        get allowNewWindow(): boolean;
        set allowNewWindow(val: boolean);
        get allow_duplication(): boolean;
        set allow_duplication(val: boolean);
        get allowDuplication(): boolean;
        set allowDuplication(val: boolean);
        get allow_restoring(): boolean;
        set allow_restoring(val: boolean);
        get allowRestoring(): boolean;
        set allowRestoring(val: boolean);
        get max_restorable_tabs(): number;
        set max_restorable_tabs(val: number);
        get maxRestorableTabs(): number;
        set maxRestorableTabs(val: number);
        get add_button_visible(): boolean;
        set add_button_visible(val: boolean);
        get addButtonVisible(): boolean;
        set addButtonVisible(val: boolean);
        get allow_pinning(): boolean;
        set allow_pinning(val: boolean);
        get allowPinning(): boolean;
        set allowPinning(val: boolean);
        get force_left(): boolean;
        set force_left(val: boolean);
        get forceLeft(): boolean;
        set forceLeft(val: boolean);
        get add_button_tooltip(): string;
        set add_button_tooltip(val: string);
        get addButtonTooltip(): string;
        set addButtonTooltip(val: string);
        get new_tab_label(): AccelLabel;
        get newTabLabel(): AccelLabel;
        get restore_tab_label(): AccelLabel;
        get restoreTabLabel(): AccelLabel;
        get current(): WidgetsTab;
        set current(val: WidgetsTab);
        get tabs(): WidgetsTab[];
        get group_name(): string;
        set group_name(val: string);
        get groupName(): string;
        set groupName(val: string);
        get tab_bar_behavior(): WidgetsDynamicNotebookTabBarBehavior;
        set tab_bar_behavior(val: WidgetsDynamicNotebookTabBarBehavior);
        get tabBarBehavior(): WidgetsDynamicNotebookTabBarBehavior;
        set tabBarBehavior(val: WidgetsDynamicNotebookTabBarBehavior);
        get menu(): Gtk.Menu;
        set menu(val: Gtk.Menu);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: WidgetsDynamicNotebook.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<WidgetsDynamicNotebook.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): WidgetsDynamicNotebook;

        static with_accellabels(new_tab_label: AccelLabel, restore_tab_label: AccelLabel): WidgetsDynamicNotebook;

        // Signals

        connect<K extends keyof WidgetsDynamicNotebook.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, WidgetsDynamicNotebook.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof WidgetsDynamicNotebook.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, WidgetsDynamicNotebook.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof WidgetsDynamicNotebook.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<WidgetsDynamicNotebook.SignalSignatures[K]> extends [any, ...infer Q]
                ? Q
                : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

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
        set_tab_bar_behavior(value: WidgetsDynamicNotebookTabBarBehavior | null): void;
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

    namespace WidgetsModeButton {
        // Signal signatures
        interface SignalSignatures extends Gtk.Box.SignalSignatures {
            'mode-added': (arg0: number, arg1: Gtk.Widget) => void;
            'mode-removed': (arg0: number, arg1: Gtk.Widget) => void;
            'mode-changed': (arg0: Gtk.Widget) => void;
            'notify::selected': (pspec: GObject.ParamSpec) => void;
            'notify::n-items': (pspec: GObject.ParamSpec) => void;
            'notify::baseline-position': (pspec: GObject.ParamSpec) => void;
            'notify::homogeneous': (pspec: GObject.ParamSpec) => void;
            'notify::spacing': (pspec: GObject.ParamSpec) => void;
            'notify::border-width': (pspec: GObject.ParamSpec) => void;
            'notify::child': (pspec: GObject.ParamSpec) => void;
            'notify::resize-mode': (pspec: GObject.ParamSpec) => void;
            'notify::app-paintable': (pspec: GObject.ParamSpec) => void;
            'notify::can-default': (pspec: GObject.ParamSpec) => void;
            'notify::can-focus': (pspec: GObject.ParamSpec) => void;
            'notify::composite-child': (pspec: GObject.ParamSpec) => void;
            'notify::double-buffered': (pspec: GObject.ParamSpec) => void;
            'notify::events': (pspec: GObject.ParamSpec) => void;
            'notify::expand': (pspec: GObject.ParamSpec) => void;
            'notify::focus-on-click': (pspec: GObject.ParamSpec) => void;
            'notify::halign': (pspec: GObject.ParamSpec) => void;
            'notify::has-default': (pspec: GObject.ParamSpec) => void;
            'notify::has-focus': (pspec: GObject.ParamSpec) => void;
            'notify::has-tooltip': (pspec: GObject.ParamSpec) => void;
            'notify::height-request': (pspec: GObject.ParamSpec) => void;
            'notify::hexpand': (pspec: GObject.ParamSpec) => void;
            'notify::hexpand-set': (pspec: GObject.ParamSpec) => void;
            'notify::is-focus': (pspec: GObject.ParamSpec) => void;
            'notify::margin': (pspec: GObject.ParamSpec) => void;
            'notify::margin-bottom': (pspec: GObject.ParamSpec) => void;
            'notify::margin-end': (pspec: GObject.ParamSpec) => void;
            'notify::margin-left': (pspec: GObject.ParamSpec) => void;
            'notify::margin-right': (pspec: GObject.ParamSpec) => void;
            'notify::margin-start': (pspec: GObject.ParamSpec) => void;
            'notify::margin-top': (pspec: GObject.ParamSpec) => void;
            'notify::name': (pspec: GObject.ParamSpec) => void;
            'notify::no-show-all': (pspec: GObject.ParamSpec) => void;
            'notify::opacity': (pspec: GObject.ParamSpec) => void;
            'notify::parent': (pspec: GObject.ParamSpec) => void;
            'notify::receives-default': (pspec: GObject.ParamSpec) => void;
            'notify::scale-factor': (pspec: GObject.ParamSpec) => void;
            'notify::sensitive': (pspec: GObject.ParamSpec) => void;
            'notify::style': (pspec: GObject.ParamSpec) => void;
            'notify::tooltip-markup': (pspec: GObject.ParamSpec) => void;
            'notify::tooltip-text': (pspec: GObject.ParamSpec) => void;
            'notify::valign': (pspec: GObject.ParamSpec) => void;
            'notify::vexpand': (pspec: GObject.ParamSpec) => void;
            'notify::vexpand-set': (pspec: GObject.ParamSpec) => void;
            'notify::visible': (pspec: GObject.ParamSpec) => void;
            'notify::width-request': (pspec: GObject.ParamSpec) => void;
            'notify::window': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends Gtk.Box.ConstructorProps {
            selected: number;
            n_items: number;
            nItems: number;
        }
    }

    class WidgetsModeButton extends Gtk.Box {
        static $gtype: GObject.GType<WidgetsModeButton>;

        // Properties

        get selected(): number;
        set selected(val: number);
        get n_items(): number;
        get nItems(): number;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: WidgetsModeButton.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<WidgetsModeButton.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): WidgetsModeButton;

        // Signals

        connect<K extends keyof WidgetsModeButton.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, WidgetsModeButton.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof WidgetsModeButton.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, WidgetsModeButton.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof WidgetsModeButton.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<WidgetsModeButton.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        get_selected(): number;
        set_selected(value: number): void;
        get_n_items(): number;
        append_pixbuf(pixbuf: GdkPixbuf.Pixbuf): number;
        append_text(text: string): number;
        append_icon(icon_name: string, size: Gtk.IconSize | null): number;
        append(w: Gtk.Widget): number;
        set_active(new_active_index: number): void;
        set_item_visible(index: number, val: boolean): void;
        remove(index: number): void;
        // Conflicted with Gtk.Container.remove
        remove(...args: never[]): any;
        clear_children(): void;
    }

    namespace WidgetsOverlayBar {
        // Signal signatures
        interface SignalSignatures extends Gtk.EventBox.SignalSignatures {
            'notify::overlay': (pspec: GObject.ParamSpec) => void;
            'notify::status': (pspec: GObject.ParamSpec) => void;
            'notify::label': (pspec: GObject.ParamSpec) => void;
            'notify::active': (pspec: GObject.ParamSpec) => void;
            'notify::above-child': (pspec: GObject.ParamSpec) => void;
            'notify::visible-window': (pspec: GObject.ParamSpec) => void;
            'notify::border-width': (pspec: GObject.ParamSpec) => void;
            'notify::child': (pspec: GObject.ParamSpec) => void;
            'notify::resize-mode': (pspec: GObject.ParamSpec) => void;
            'notify::app-paintable': (pspec: GObject.ParamSpec) => void;
            'notify::can-default': (pspec: GObject.ParamSpec) => void;
            'notify::can-focus': (pspec: GObject.ParamSpec) => void;
            'notify::composite-child': (pspec: GObject.ParamSpec) => void;
            'notify::double-buffered': (pspec: GObject.ParamSpec) => void;
            'notify::events': (pspec: GObject.ParamSpec) => void;
            'notify::expand': (pspec: GObject.ParamSpec) => void;
            'notify::focus-on-click': (pspec: GObject.ParamSpec) => void;
            'notify::halign': (pspec: GObject.ParamSpec) => void;
            'notify::has-default': (pspec: GObject.ParamSpec) => void;
            'notify::has-focus': (pspec: GObject.ParamSpec) => void;
            'notify::has-tooltip': (pspec: GObject.ParamSpec) => void;
            'notify::height-request': (pspec: GObject.ParamSpec) => void;
            'notify::hexpand': (pspec: GObject.ParamSpec) => void;
            'notify::hexpand-set': (pspec: GObject.ParamSpec) => void;
            'notify::is-focus': (pspec: GObject.ParamSpec) => void;
            'notify::margin': (pspec: GObject.ParamSpec) => void;
            'notify::margin-bottom': (pspec: GObject.ParamSpec) => void;
            'notify::margin-end': (pspec: GObject.ParamSpec) => void;
            'notify::margin-left': (pspec: GObject.ParamSpec) => void;
            'notify::margin-right': (pspec: GObject.ParamSpec) => void;
            'notify::margin-start': (pspec: GObject.ParamSpec) => void;
            'notify::margin-top': (pspec: GObject.ParamSpec) => void;
            'notify::name': (pspec: GObject.ParamSpec) => void;
            'notify::no-show-all': (pspec: GObject.ParamSpec) => void;
            'notify::opacity': (pspec: GObject.ParamSpec) => void;
            'notify::parent': (pspec: GObject.ParamSpec) => void;
            'notify::receives-default': (pspec: GObject.ParamSpec) => void;
            'notify::scale-factor': (pspec: GObject.ParamSpec) => void;
            'notify::sensitive': (pspec: GObject.ParamSpec) => void;
            'notify::style': (pspec: GObject.ParamSpec) => void;
            'notify::tooltip-markup': (pspec: GObject.ParamSpec) => void;
            'notify::tooltip-text': (pspec: GObject.ParamSpec) => void;
            'notify::valign': (pspec: GObject.ParamSpec) => void;
            'notify::vexpand': (pspec: GObject.ParamSpec) => void;
            'notify::vexpand-set': (pspec: GObject.ParamSpec) => void;
            'notify::visible': (pspec: GObject.ParamSpec) => void;
            'notify::width-request': (pspec: GObject.ParamSpec) => void;
            'notify::window': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends Gtk.EventBox.ConstructorProps {
            overlay: Gtk.Overlay;
            status: string;
            label: string;
            active: boolean;
        }
    }

    class WidgetsOverlayBar extends Gtk.EventBox {
        static $gtype: GObject.GType<WidgetsOverlayBar>;

        // Properties

        get overlay(): Gtk.Overlay;
        get status(): string;
        set status(val: string);
        get label(): string;
        set label(val: string);
        get active(): boolean;
        set active(val: boolean);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: WidgetsOverlayBar.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<WidgetsOverlayBar.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](overlay?: Gtk.Overlay | null): WidgetsOverlayBar;
        // Conflicted with Gtk.EventBox.new

        static ['new'](...args: never[]): any;

        // Signals

        connect<K extends keyof WidgetsOverlayBar.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, WidgetsOverlayBar.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof WidgetsOverlayBar.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, WidgetsOverlayBar.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof WidgetsOverlayBar.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<WidgetsOverlayBar.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        get_overlay(): Gtk.Overlay | null;
        get_status(): string;
        set_status(value: string): void;
        get_label(): string;
        set_label(value: string): void;
        get_active(): boolean;
        set_active(value: boolean): void;
    }

    namespace WidgetsSourceList {
        // Signal signatures
        interface SignalSignatures extends Gtk.ScrolledWindow.SignalSignatures {
            'item-selected': (arg0: WidgetsSourceListItem | null) => void;
            'notify::root': (pspec: GObject.ParamSpec) => void;
            'notify::selected': (pspec: GObject.ParamSpec) => void;
            'notify::ellipsize-mode': (pspec: GObject.ParamSpec) => void;
            'notify::editing': (pspec: GObject.ParamSpec) => void;
            'notify::hadjustment': (pspec: GObject.ParamSpec) => void;
            'notify::hscrollbar-policy': (pspec: GObject.ParamSpec) => void;
            'notify::kinetic-scrolling': (pspec: GObject.ParamSpec) => void;
            'notify::max-content-height': (pspec: GObject.ParamSpec) => void;
            'notify::max-content-width': (pspec: GObject.ParamSpec) => void;
            'notify::min-content-height': (pspec: GObject.ParamSpec) => void;
            'notify::min-content-width': (pspec: GObject.ParamSpec) => void;
            'notify::overlay-scrolling': (pspec: GObject.ParamSpec) => void;
            'notify::propagate-natural-height': (pspec: GObject.ParamSpec) => void;
            'notify::propagate-natural-width': (pspec: GObject.ParamSpec) => void;
            'notify::shadow-type': (pspec: GObject.ParamSpec) => void;
            'notify::vadjustment': (pspec: GObject.ParamSpec) => void;
            'notify::vscrollbar-policy': (pspec: GObject.ParamSpec) => void;
            'notify::window-placement': (pspec: GObject.ParamSpec) => void;
            'notify::window-placement-set': (pspec: GObject.ParamSpec) => void;
            'notify::border-width': (pspec: GObject.ParamSpec) => void;
            'notify::child': (pspec: GObject.ParamSpec) => void;
            'notify::resize-mode': (pspec: GObject.ParamSpec) => void;
            'notify::app-paintable': (pspec: GObject.ParamSpec) => void;
            'notify::can-default': (pspec: GObject.ParamSpec) => void;
            'notify::can-focus': (pspec: GObject.ParamSpec) => void;
            'notify::composite-child': (pspec: GObject.ParamSpec) => void;
            'notify::double-buffered': (pspec: GObject.ParamSpec) => void;
            'notify::events': (pspec: GObject.ParamSpec) => void;
            'notify::expand': (pspec: GObject.ParamSpec) => void;
            'notify::focus-on-click': (pspec: GObject.ParamSpec) => void;
            'notify::halign': (pspec: GObject.ParamSpec) => void;
            'notify::has-default': (pspec: GObject.ParamSpec) => void;
            'notify::has-focus': (pspec: GObject.ParamSpec) => void;
            'notify::has-tooltip': (pspec: GObject.ParamSpec) => void;
            'notify::height-request': (pspec: GObject.ParamSpec) => void;
            'notify::hexpand': (pspec: GObject.ParamSpec) => void;
            'notify::hexpand-set': (pspec: GObject.ParamSpec) => void;
            'notify::is-focus': (pspec: GObject.ParamSpec) => void;
            'notify::margin': (pspec: GObject.ParamSpec) => void;
            'notify::margin-bottom': (pspec: GObject.ParamSpec) => void;
            'notify::margin-end': (pspec: GObject.ParamSpec) => void;
            'notify::margin-left': (pspec: GObject.ParamSpec) => void;
            'notify::margin-right': (pspec: GObject.ParamSpec) => void;
            'notify::margin-start': (pspec: GObject.ParamSpec) => void;
            'notify::margin-top': (pspec: GObject.ParamSpec) => void;
            'notify::name': (pspec: GObject.ParamSpec) => void;
            'notify::no-show-all': (pspec: GObject.ParamSpec) => void;
            'notify::opacity': (pspec: GObject.ParamSpec) => void;
            'notify::parent': (pspec: GObject.ParamSpec) => void;
            'notify::receives-default': (pspec: GObject.ParamSpec) => void;
            'notify::scale-factor': (pspec: GObject.ParamSpec) => void;
            'notify::sensitive': (pspec: GObject.ParamSpec) => void;
            'notify::style': (pspec: GObject.ParamSpec) => void;
            'notify::tooltip-markup': (pspec: GObject.ParamSpec) => void;
            'notify::tooltip-text': (pspec: GObject.ParamSpec) => void;
            'notify::valign': (pspec: GObject.ParamSpec) => void;
            'notify::vexpand': (pspec: GObject.ParamSpec) => void;
            'notify::vexpand-set': (pspec: GObject.ParamSpec) => void;
            'notify::visible': (pspec: GObject.ParamSpec) => void;
            'notify::width-request': (pspec: GObject.ParamSpec) => void;
            'notify::window': (pspec: GObject.ParamSpec) => void;
        }

        interface VisibleFunc {
            (item: WidgetsSourceListItem): boolean;
        }

        // Constructor properties interface

        interface ConstructorProps extends Gtk.ScrolledWindow.ConstructorProps {
            root: WidgetsSourceListExpandableItem;
            selected: WidgetsSourceListItem;
            ellipsize_mode: Pango.EllipsizeMode;
            ellipsizeMode: Pango.EllipsizeMode;
            editing: boolean;
        }
    }

    class WidgetsSourceList extends Gtk.ScrolledWindow {
        static $gtype: GObject.GType<WidgetsSourceList>;

        // Properties

        get root(): WidgetsSourceListExpandableItem;
        set root(val: WidgetsSourceListExpandableItem);
        get selected(): WidgetsSourceListItem;
        set selected(val: WidgetsSourceListItem);
        get ellipsize_mode(): Pango.EllipsizeMode;
        set ellipsize_mode(val: Pango.EllipsizeMode);
        get ellipsizeMode(): Pango.EllipsizeMode;
        set ellipsizeMode(val: Pango.EllipsizeMode);
        get editing(): boolean;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: WidgetsSourceList.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<WidgetsSourceList.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](root: WidgetsSourceListExpandableItem): WidgetsSourceList;
        // Conflicted with Gtk.ScrolledWindow.new

        static ['new'](...args: never[]): any;

        // Signals

        connect<K extends keyof WidgetsSourceList.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, WidgetsSourceList.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof WidgetsSourceList.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, WidgetsSourceList.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof WidgetsSourceList.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<WidgetsSourceList.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Virtual methods

        vfunc_item_selected(item?: WidgetsSourceListItem | null): void;

        // Methods

        get_root(): WidgetsSourceListExpandableItem;
        set_root(value: WidgetsSourceListExpandableItem): void;
        get_selected(): WidgetsSourceListItem | null;
        set_selected(value?: WidgetsSourceListItem | null): void;
        get_ellipsize_mode(): Pango.EllipsizeMode;
        set_ellipsize_mode(value: Pango.EllipsizeMode | null): void;
        get_editing(): boolean;
        has_item(item: WidgetsSourceListItem): boolean;
        set_filter_func(visible_func: WidgetsSourceList.VisibleFunc | null, refilter: boolean): void;
        refilter(): void;
        is_item_expanded(item: WidgetsSourceListItem): boolean;
        start_editing_item(item: WidgetsSourceListItem): boolean;
        stop_editing(): void;
        enable_drag_source(src_entries: Gtk.TargetEntry[]): void;
        disable_drag_source(): void;
        enable_drag_dest(dest_entries: Gtk.TargetEntry[], actions: Gdk.DragAction | null): void;
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

    namespace WidgetsSourceListItem {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            edited: (arg0: string) => void;
            'action-activated': () => void;
            activated: () => void;
            'notify::parent': (pspec: GObject.ParamSpec) => void;
            'notify::name': (pspec: GObject.ParamSpec) => void;
            'notify::tooltip': (pspec: GObject.ParamSpec) => void;
            'notify::markup': (pspec: GObject.ParamSpec) => void;
            'notify::badge': (pspec: GObject.ParamSpec) => void;
            'notify::editable': (pspec: GObject.ParamSpec) => void;
            'notify::visible': (pspec: GObject.ParamSpec) => void;
            'notify::selectable': (pspec: GObject.ParamSpec) => void;
            'notify::icon': (pspec: GObject.ParamSpec) => void;
            'notify::activatable': (pspec: GObject.ParamSpec) => void;
            'notify::activatable-tooltip': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
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
        }
    }

    class WidgetsSourceListItem extends GObject.Object {
        static $gtype: GObject.GType<WidgetsSourceListItem>;

        // Properties

        get parent(): WidgetsSourceListExpandableItem;
        set parent(val: WidgetsSourceListExpandableItem);
        get name(): string;
        set name(val: string);
        get tooltip(): string;
        set tooltip(val: string);
        get markup(): string;
        set markup(val: string);
        get badge(): string;
        set badge(val: string);
        get editable(): boolean;
        set editable(val: boolean);
        get visible(): boolean;
        set visible(val: boolean);
        get selectable(): boolean;
        set selectable(val: boolean);
        get icon(): Gio.Icon;
        set icon(val: Gio.Icon);
        get activatable(): Gio.Icon;
        set activatable(val: Gio.Icon);
        get activatable_tooltip(): string;
        set activatable_tooltip(val: string);
        get activatableTooltip(): string;
        set activatableTooltip(val: string);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: WidgetsSourceListItem.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<WidgetsSourceListItem.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](name: string): WidgetsSourceListItem;

        // Signals

        connect<K extends keyof WidgetsSourceListItem.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, WidgetsSourceListItem.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof WidgetsSourceListItem.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, WidgetsSourceListItem.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof WidgetsSourceListItem.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<WidgetsSourceListItem.SignalSignatures[K]> extends [any, ...infer Q]
                ? Q
                : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Virtual methods

        vfunc_edited(new_name: string): void;
        vfunc_action_activated(): void;
        vfunc_activated(): void;
        vfunc_get_context_menu(): Gtk.Menu | null;

        // Methods

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

    namespace WidgetsSourceListExpandableItem {
        // Signal signatures
        interface SignalSignatures extends WidgetsSourceListItem.SignalSignatures {
            'child-added': (arg0: WidgetsSourceListItem) => void;
            'child-removed': (arg0: WidgetsSourceListItem) => void;
            toggled: () => void;
            'notify::collapsible': (pspec: GObject.ParamSpec) => void;
            'notify::expanded': (pspec: GObject.ParamSpec) => void;
            'notify::n-children': (pspec: GObject.ParamSpec) => void;
            'notify::children': (pspec: GObject.ParamSpec) => void;
            'notify::parent': (pspec: GObject.ParamSpec) => void;
            'notify::name': (pspec: GObject.ParamSpec) => void;
            'notify::tooltip': (pspec: GObject.ParamSpec) => void;
            'notify::markup': (pspec: GObject.ParamSpec) => void;
            'notify::badge': (pspec: GObject.ParamSpec) => void;
            'notify::editable': (pspec: GObject.ParamSpec) => void;
            'notify::visible': (pspec: GObject.ParamSpec) => void;
            'notify::selectable': (pspec: GObject.ParamSpec) => void;
            'notify::icon': (pspec: GObject.ParamSpec) => void;
            'notify::activatable': (pspec: GObject.ParamSpec) => void;
            'notify::activatable-tooltip': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends WidgetsSourceListItem.ConstructorProps {
            collapsible: boolean;
            expanded: boolean;
            n_children: number;
            nChildren: number;
            children: Gee.Collection;
        }
    }

    class WidgetsSourceListExpandableItem extends WidgetsSourceListItem {
        static $gtype: GObject.GType<WidgetsSourceListExpandableItem>;

        // Properties

        get collapsible(): boolean;
        set collapsible(val: boolean);
        get expanded(): boolean;
        set expanded(val: boolean);
        get n_children(): number;
        get nChildren(): number;
        get children(): Gee.Collection;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: WidgetsSourceListExpandableItem.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<WidgetsSourceListExpandableItem.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](name: string): WidgetsSourceListExpandableItem;

        // Signals

        connect<K extends keyof WidgetsSourceListExpandableItem.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, WidgetsSourceListExpandableItem.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof WidgetsSourceListExpandableItem.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, WidgetsSourceListExpandableItem.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof WidgetsSourceListExpandableItem.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<WidgetsSourceListExpandableItem.SignalSignatures[K]> extends [
                any,
                ...infer Q,
            ]
                ? Q
                : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Virtual methods

        vfunc_toggled(): void;

        // Methods

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

    namespace WidgetsStorageBar {
        // Signal signatures
        interface SignalSignatures extends Gtk.Box.SignalSignatures {
            'notify::storage': (pspec: GObject.ParamSpec) => void;
            'notify::total-usage': (pspec: GObject.ParamSpec) => void;
            'notify::inner-margin-sides': (pspec: GObject.ParamSpec) => void;
            'notify::baseline-position': (pspec: GObject.ParamSpec) => void;
            'notify::homogeneous': (pspec: GObject.ParamSpec) => void;
            'notify::spacing': (pspec: GObject.ParamSpec) => void;
            'notify::border-width': (pspec: GObject.ParamSpec) => void;
            'notify::child': (pspec: GObject.ParamSpec) => void;
            'notify::resize-mode': (pspec: GObject.ParamSpec) => void;
            'notify::app-paintable': (pspec: GObject.ParamSpec) => void;
            'notify::can-default': (pspec: GObject.ParamSpec) => void;
            'notify::can-focus': (pspec: GObject.ParamSpec) => void;
            'notify::composite-child': (pspec: GObject.ParamSpec) => void;
            'notify::double-buffered': (pspec: GObject.ParamSpec) => void;
            'notify::events': (pspec: GObject.ParamSpec) => void;
            'notify::expand': (pspec: GObject.ParamSpec) => void;
            'notify::focus-on-click': (pspec: GObject.ParamSpec) => void;
            'notify::halign': (pspec: GObject.ParamSpec) => void;
            'notify::has-default': (pspec: GObject.ParamSpec) => void;
            'notify::has-focus': (pspec: GObject.ParamSpec) => void;
            'notify::has-tooltip': (pspec: GObject.ParamSpec) => void;
            'notify::height-request': (pspec: GObject.ParamSpec) => void;
            'notify::hexpand': (pspec: GObject.ParamSpec) => void;
            'notify::hexpand-set': (pspec: GObject.ParamSpec) => void;
            'notify::is-focus': (pspec: GObject.ParamSpec) => void;
            'notify::margin': (pspec: GObject.ParamSpec) => void;
            'notify::margin-bottom': (pspec: GObject.ParamSpec) => void;
            'notify::margin-end': (pspec: GObject.ParamSpec) => void;
            'notify::margin-left': (pspec: GObject.ParamSpec) => void;
            'notify::margin-right': (pspec: GObject.ParamSpec) => void;
            'notify::margin-start': (pspec: GObject.ParamSpec) => void;
            'notify::margin-top': (pspec: GObject.ParamSpec) => void;
            'notify::name': (pspec: GObject.ParamSpec) => void;
            'notify::no-show-all': (pspec: GObject.ParamSpec) => void;
            'notify::opacity': (pspec: GObject.ParamSpec) => void;
            'notify::parent': (pspec: GObject.ParamSpec) => void;
            'notify::receives-default': (pspec: GObject.ParamSpec) => void;
            'notify::scale-factor': (pspec: GObject.ParamSpec) => void;
            'notify::sensitive': (pspec: GObject.ParamSpec) => void;
            'notify::style': (pspec: GObject.ParamSpec) => void;
            'notify::tooltip-markup': (pspec: GObject.ParamSpec) => void;
            'notify::tooltip-text': (pspec: GObject.ParamSpec) => void;
            'notify::valign': (pspec: GObject.ParamSpec) => void;
            'notify::vexpand': (pspec: GObject.ParamSpec) => void;
            'notify::vexpand-set': (pspec: GObject.ParamSpec) => void;
            'notify::visible': (pspec: GObject.ParamSpec) => void;
            'notify::width-request': (pspec: GObject.ParamSpec) => void;
            'notify::window': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends Gtk.Box.ConstructorProps {
            storage: number;
            total_usage: number;
            totalUsage: number;
            inner_margin_sides: number;
            innerMarginSides: number;
        }
    }

    class WidgetsStorageBar extends Gtk.Box {
        static $gtype: GObject.GType<WidgetsStorageBar>;

        // Properties

        get storage(): number;
        set storage(val: number);
        get total_usage(): number;
        set total_usage(val: number);
        get totalUsage(): number;
        set totalUsage(val: number);
        get inner_margin_sides(): number;
        set inner_margin_sides(val: number);
        get innerMarginSides(): number;
        set innerMarginSides(val: number);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: WidgetsStorageBar.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<WidgetsStorageBar.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](storage: number): WidgetsStorageBar;
        // Conflicted with Gtk.Box.new

        static ['new'](...args: never[]): any;

        static with_total_usage(storage: number, total_usage: number): WidgetsStorageBar;

        // Signals

        connect<K extends keyof WidgetsStorageBar.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, WidgetsStorageBar.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof WidgetsStorageBar.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, WidgetsStorageBar.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof WidgetsStorageBar.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<WidgetsStorageBar.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        get_storage(): number;
        set_storage(value: number): void;
        get_total_usage(): number;
        set_total_usage(value: number): void;
        get_inner_margin_sides(): number;
        set_inner_margin_sides(value: number): void;
        update_block_size(description: WidgetsStorageBarItemDescription | null, size: number): void;
    }

    namespace WidgetsTimePicker {
        // Signal signatures
        interface SignalSignatures extends Gtk.Entry.SignalSignatures {
            'time-changed': () => void;
            'notify::format-12': (pspec: GObject.ParamSpec) => void;
            'notify::format12': (pspec: GObject.ParamSpec) => void;
            'notify::format-24': (pspec: GObject.ParamSpec) => void;
            'notify::format24': (pspec: GObject.ParamSpec) => void;
            'notify::time': (pspec: GObject.ParamSpec) => void;
            'notify::activates-default': (pspec: GObject.ParamSpec) => void;
            'notify::attributes': (pspec: GObject.ParamSpec) => void;
            'notify::buffer': (pspec: GObject.ParamSpec) => void;
            'notify::caps-lock-warning': (pspec: GObject.ParamSpec) => void;
            'notify::completion': (pspec: GObject.ParamSpec) => void;
            'notify::cursor-position': (pspec: GObject.ParamSpec) => void;
            'notify::editable': (pspec: GObject.ParamSpec) => void;
            'notify::enable-emoji-completion': (pspec: GObject.ParamSpec) => void;
            'notify::has-frame': (pspec: GObject.ParamSpec) => void;
            'notify::im-module': (pspec: GObject.ParamSpec) => void;
            'notify::inner-border': (pspec: GObject.ParamSpec) => void;
            'notify::input-hints': (pspec: GObject.ParamSpec) => void;
            'notify::input-purpose': (pspec: GObject.ParamSpec) => void;
            'notify::invisible-char': (pspec: GObject.ParamSpec) => void;
            'notify::invisible-char-set': (pspec: GObject.ParamSpec) => void;
            'notify::max-length': (pspec: GObject.ParamSpec) => void;
            'notify::max-width-chars': (pspec: GObject.ParamSpec) => void;
            'notify::overwrite-mode': (pspec: GObject.ParamSpec) => void;
            'notify::placeholder-text': (pspec: GObject.ParamSpec) => void;
            'notify::populate-all': (pspec: GObject.ParamSpec) => void;
            'notify::primary-icon-activatable': (pspec: GObject.ParamSpec) => void;
            'notify::primary-icon-gicon': (pspec: GObject.ParamSpec) => void;
            'notify::primary-icon-name': (pspec: GObject.ParamSpec) => void;
            'notify::primary-icon-pixbuf': (pspec: GObject.ParamSpec) => void;
            'notify::primary-icon-sensitive': (pspec: GObject.ParamSpec) => void;
            'notify::primary-icon-stock': (pspec: GObject.ParamSpec) => void;
            'notify::primary-icon-storage-type': (pspec: GObject.ParamSpec) => void;
            'notify::primary-icon-tooltip-markup': (pspec: GObject.ParamSpec) => void;
            'notify::primary-icon-tooltip-text': (pspec: GObject.ParamSpec) => void;
            'notify::progress-fraction': (pspec: GObject.ParamSpec) => void;
            'notify::progress-pulse-step': (pspec: GObject.ParamSpec) => void;
            'notify::scroll-offset': (pspec: GObject.ParamSpec) => void;
            'notify::secondary-icon-activatable': (pspec: GObject.ParamSpec) => void;
            'notify::secondary-icon-gicon': (pspec: GObject.ParamSpec) => void;
            'notify::secondary-icon-name': (pspec: GObject.ParamSpec) => void;
            'notify::secondary-icon-pixbuf': (pspec: GObject.ParamSpec) => void;
            'notify::secondary-icon-sensitive': (pspec: GObject.ParamSpec) => void;
            'notify::secondary-icon-stock': (pspec: GObject.ParamSpec) => void;
            'notify::secondary-icon-storage-type': (pspec: GObject.ParamSpec) => void;
            'notify::secondary-icon-tooltip-markup': (pspec: GObject.ParamSpec) => void;
            'notify::secondary-icon-tooltip-text': (pspec: GObject.ParamSpec) => void;
            'notify::selection-bound': (pspec: GObject.ParamSpec) => void;
            'notify::shadow-type': (pspec: GObject.ParamSpec) => void;
            'notify::show-emoji-icon': (pspec: GObject.ParamSpec) => void;
            'notify::tabs': (pspec: GObject.ParamSpec) => void;
            'notify::text': (pspec: GObject.ParamSpec) => void;
            'notify::text-length': (pspec: GObject.ParamSpec) => void;
            'notify::truncate-multiline': (pspec: GObject.ParamSpec) => void;
            'notify::visibility': (pspec: GObject.ParamSpec) => void;
            'notify::width-chars': (pspec: GObject.ParamSpec) => void;
            'notify::xalign': (pspec: GObject.ParamSpec) => void;
            'notify::app-paintable': (pspec: GObject.ParamSpec) => void;
            'notify::can-default': (pspec: GObject.ParamSpec) => void;
            'notify::can-focus': (pspec: GObject.ParamSpec) => void;
            'notify::composite-child': (pspec: GObject.ParamSpec) => void;
            'notify::double-buffered': (pspec: GObject.ParamSpec) => void;
            'notify::events': (pspec: GObject.ParamSpec) => void;
            'notify::expand': (pspec: GObject.ParamSpec) => void;
            'notify::focus-on-click': (pspec: GObject.ParamSpec) => void;
            'notify::halign': (pspec: GObject.ParamSpec) => void;
            'notify::has-default': (pspec: GObject.ParamSpec) => void;
            'notify::has-focus': (pspec: GObject.ParamSpec) => void;
            'notify::has-tooltip': (pspec: GObject.ParamSpec) => void;
            'notify::height-request': (pspec: GObject.ParamSpec) => void;
            'notify::hexpand': (pspec: GObject.ParamSpec) => void;
            'notify::hexpand-set': (pspec: GObject.ParamSpec) => void;
            'notify::is-focus': (pspec: GObject.ParamSpec) => void;
            'notify::margin': (pspec: GObject.ParamSpec) => void;
            'notify::margin-bottom': (pspec: GObject.ParamSpec) => void;
            'notify::margin-end': (pspec: GObject.ParamSpec) => void;
            'notify::margin-left': (pspec: GObject.ParamSpec) => void;
            'notify::margin-right': (pspec: GObject.ParamSpec) => void;
            'notify::margin-start': (pspec: GObject.ParamSpec) => void;
            'notify::margin-top': (pspec: GObject.ParamSpec) => void;
            'notify::name': (pspec: GObject.ParamSpec) => void;
            'notify::no-show-all': (pspec: GObject.ParamSpec) => void;
            'notify::opacity': (pspec: GObject.ParamSpec) => void;
            'notify::parent': (pspec: GObject.ParamSpec) => void;
            'notify::receives-default': (pspec: GObject.ParamSpec) => void;
            'notify::scale-factor': (pspec: GObject.ParamSpec) => void;
            'notify::sensitive': (pspec: GObject.ParamSpec) => void;
            'notify::style': (pspec: GObject.ParamSpec) => void;
            'notify::tooltip-markup': (pspec: GObject.ParamSpec) => void;
            'notify::tooltip-text': (pspec: GObject.ParamSpec) => void;
            'notify::valign': (pspec: GObject.ParamSpec) => void;
            'notify::vexpand': (pspec: GObject.ParamSpec) => void;
            'notify::vexpand-set': (pspec: GObject.ParamSpec) => void;
            'notify::visible': (pspec: GObject.ParamSpec) => void;
            'notify::width-request': (pspec: GObject.ParamSpec) => void;
            'notify::window': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends Gtk.Entry.ConstructorProps {
            format_12: string;
            format12: string;
            format_24: string;
            format24: string;
            time: GLib.DateTime;
        }
    }

    class WidgetsTimePicker extends Gtk.Entry {
        static $gtype: GObject.GType<WidgetsTimePicker>;

        // Properties

        get format_12(): string;
        get format12(): string;
        get format_24(): string;
        get format24(): string;
        get time(): GLib.DateTime;
        set time(val: GLib.DateTime);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: WidgetsTimePicker.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<WidgetsTimePicker.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static with_format(format_12: string, format_24: string): WidgetsTimePicker;

        static ['new'](): WidgetsTimePicker;

        // Signals

        connect<K extends keyof WidgetsTimePicker.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, WidgetsTimePicker.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof WidgetsTimePicker.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, WidgetsTimePicker.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof WidgetsTimePicker.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<WidgetsTimePicker.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Virtual methods

        vfunc_position_dropdown(): [number, number];

        // Methods

        get_format_12(): string;
        get_format_24(): string;
        get_time(): GLib.DateTime;
        set_time(value: GLib.DateTime): void;
        position_dropdown(): [number, number];
    }

    namespace WidgetsToast {
        // Signal signatures
        interface SignalSignatures extends Gtk.Revealer.SignalSignatures {
            closed: () => void;
            'default-action': () => void;
            'notify::title': (pspec: GObject.ParamSpec) => void;
            'notify::child-revealed': (pspec: GObject.ParamSpec) => void;
            'notify::reveal-child': (pspec: GObject.ParamSpec) => void;
            'notify::transition-duration': (pspec: GObject.ParamSpec) => void;
            'notify::transition-type': (pspec: GObject.ParamSpec) => void;
            'notify::border-width': (pspec: GObject.ParamSpec) => void;
            'notify::child': (pspec: GObject.ParamSpec) => void;
            'notify::resize-mode': (pspec: GObject.ParamSpec) => void;
            'notify::app-paintable': (pspec: GObject.ParamSpec) => void;
            'notify::can-default': (pspec: GObject.ParamSpec) => void;
            'notify::can-focus': (pspec: GObject.ParamSpec) => void;
            'notify::composite-child': (pspec: GObject.ParamSpec) => void;
            'notify::double-buffered': (pspec: GObject.ParamSpec) => void;
            'notify::events': (pspec: GObject.ParamSpec) => void;
            'notify::expand': (pspec: GObject.ParamSpec) => void;
            'notify::focus-on-click': (pspec: GObject.ParamSpec) => void;
            'notify::halign': (pspec: GObject.ParamSpec) => void;
            'notify::has-default': (pspec: GObject.ParamSpec) => void;
            'notify::has-focus': (pspec: GObject.ParamSpec) => void;
            'notify::has-tooltip': (pspec: GObject.ParamSpec) => void;
            'notify::height-request': (pspec: GObject.ParamSpec) => void;
            'notify::hexpand': (pspec: GObject.ParamSpec) => void;
            'notify::hexpand-set': (pspec: GObject.ParamSpec) => void;
            'notify::is-focus': (pspec: GObject.ParamSpec) => void;
            'notify::margin': (pspec: GObject.ParamSpec) => void;
            'notify::margin-bottom': (pspec: GObject.ParamSpec) => void;
            'notify::margin-end': (pspec: GObject.ParamSpec) => void;
            'notify::margin-left': (pspec: GObject.ParamSpec) => void;
            'notify::margin-right': (pspec: GObject.ParamSpec) => void;
            'notify::margin-start': (pspec: GObject.ParamSpec) => void;
            'notify::margin-top': (pspec: GObject.ParamSpec) => void;
            'notify::name': (pspec: GObject.ParamSpec) => void;
            'notify::no-show-all': (pspec: GObject.ParamSpec) => void;
            'notify::opacity': (pspec: GObject.ParamSpec) => void;
            'notify::parent': (pspec: GObject.ParamSpec) => void;
            'notify::receives-default': (pspec: GObject.ParamSpec) => void;
            'notify::scale-factor': (pspec: GObject.ParamSpec) => void;
            'notify::sensitive': (pspec: GObject.ParamSpec) => void;
            'notify::style': (pspec: GObject.ParamSpec) => void;
            'notify::tooltip-markup': (pspec: GObject.ParamSpec) => void;
            'notify::tooltip-text': (pspec: GObject.ParamSpec) => void;
            'notify::valign': (pspec: GObject.ParamSpec) => void;
            'notify::vexpand': (pspec: GObject.ParamSpec) => void;
            'notify::vexpand-set': (pspec: GObject.ParamSpec) => void;
            'notify::visible': (pspec: GObject.ParamSpec) => void;
            'notify::width-request': (pspec: GObject.ParamSpec) => void;
            'notify::window': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends Gtk.Revealer.ConstructorProps {
            title: string;
        }
    }

    class WidgetsToast extends Gtk.Revealer {
        static $gtype: GObject.GType<WidgetsToast>;

        // Properties

        get title(): string;
        set title(val: string);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: WidgetsToast.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<WidgetsToast.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](title: string): WidgetsToast;
        // Conflicted with Gtk.Revealer.new

        static ['new'](...args: never[]): any;

        // Signals

        connect<K extends keyof WidgetsToast.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, WidgetsToast.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof WidgetsToast.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, WidgetsToast.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof WidgetsToast.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<WidgetsToast.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        get_title(): string;
        set_title(value: string): void;
        set_default_action(label?: string | null): void;
        send_notification(): void;
    }

    namespace WidgetsWelcomeButton {
        // Signal signatures
        interface SignalSignatures extends Gtk.Button.SignalSignatures {
            'notify::title': (pspec: GObject.ParamSpec) => void;
            'notify::description': (pspec: GObject.ParamSpec) => void;
            'notify::icon': (pspec: GObject.ParamSpec) => void;
            'notify::always-show-image': (pspec: GObject.ParamSpec) => void;
            'notify::image': (pspec: GObject.ParamSpec) => void;
            'notify::image-position': (pspec: GObject.ParamSpec) => void;
            'notify::label': (pspec: GObject.ParamSpec) => void;
            'notify::relief': (pspec: GObject.ParamSpec) => void;
            'notify::use-stock': (pspec: GObject.ParamSpec) => void;
            'notify::use-underline': (pspec: GObject.ParamSpec) => void;
            'notify::xalign': (pspec: GObject.ParamSpec) => void;
            'notify::yalign': (pspec: GObject.ParamSpec) => void;
            'notify::border-width': (pspec: GObject.ParamSpec) => void;
            'notify::child': (pspec: GObject.ParamSpec) => void;
            'notify::resize-mode': (pspec: GObject.ParamSpec) => void;
            'notify::app-paintable': (pspec: GObject.ParamSpec) => void;
            'notify::can-default': (pspec: GObject.ParamSpec) => void;
            'notify::can-focus': (pspec: GObject.ParamSpec) => void;
            'notify::composite-child': (pspec: GObject.ParamSpec) => void;
            'notify::double-buffered': (pspec: GObject.ParamSpec) => void;
            'notify::events': (pspec: GObject.ParamSpec) => void;
            'notify::expand': (pspec: GObject.ParamSpec) => void;
            'notify::focus-on-click': (pspec: GObject.ParamSpec) => void;
            'notify::halign': (pspec: GObject.ParamSpec) => void;
            'notify::has-default': (pspec: GObject.ParamSpec) => void;
            'notify::has-focus': (pspec: GObject.ParamSpec) => void;
            'notify::has-tooltip': (pspec: GObject.ParamSpec) => void;
            'notify::height-request': (pspec: GObject.ParamSpec) => void;
            'notify::hexpand': (pspec: GObject.ParamSpec) => void;
            'notify::hexpand-set': (pspec: GObject.ParamSpec) => void;
            'notify::is-focus': (pspec: GObject.ParamSpec) => void;
            'notify::margin': (pspec: GObject.ParamSpec) => void;
            'notify::margin-bottom': (pspec: GObject.ParamSpec) => void;
            'notify::margin-end': (pspec: GObject.ParamSpec) => void;
            'notify::margin-left': (pspec: GObject.ParamSpec) => void;
            'notify::margin-right': (pspec: GObject.ParamSpec) => void;
            'notify::margin-start': (pspec: GObject.ParamSpec) => void;
            'notify::margin-top': (pspec: GObject.ParamSpec) => void;
            'notify::name': (pspec: GObject.ParamSpec) => void;
            'notify::no-show-all': (pspec: GObject.ParamSpec) => void;
            'notify::opacity': (pspec: GObject.ParamSpec) => void;
            'notify::parent': (pspec: GObject.ParamSpec) => void;
            'notify::receives-default': (pspec: GObject.ParamSpec) => void;
            'notify::scale-factor': (pspec: GObject.ParamSpec) => void;
            'notify::sensitive': (pspec: GObject.ParamSpec) => void;
            'notify::style': (pspec: GObject.ParamSpec) => void;
            'notify::tooltip-markup': (pspec: GObject.ParamSpec) => void;
            'notify::tooltip-text': (pspec: GObject.ParamSpec) => void;
            'notify::valign': (pspec: GObject.ParamSpec) => void;
            'notify::vexpand': (pspec: GObject.ParamSpec) => void;
            'notify::vexpand-set': (pspec: GObject.ParamSpec) => void;
            'notify::visible': (pspec: GObject.ParamSpec) => void;
            'notify::width-request': (pspec: GObject.ParamSpec) => void;
            'notify::window': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends Gtk.Button.ConstructorProps {
            title: string;
            description: string;
            icon: Gtk.Image;
        }
    }

    class WidgetsWelcomeButton extends Gtk.Button {
        static $gtype: GObject.GType<WidgetsWelcomeButton>;

        // Properties

        get title(): string;
        set title(val: string);
        get description(): string;
        set description(val: string);
        get icon(): Gtk.Image;
        set icon(val: Gtk.Image);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: WidgetsWelcomeButton.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<WidgetsWelcomeButton.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](image: Gtk.Image | null, option_text: string, description_text: string): WidgetsWelcomeButton;
        // Conflicted with Gtk.Button.new

        static ['new'](...args: never[]): any;

        // Signals

        connect<K extends keyof WidgetsWelcomeButton.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, WidgetsWelcomeButton.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof WidgetsWelcomeButton.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, WidgetsWelcomeButton.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof WidgetsWelcomeButton.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<WidgetsWelcomeButton.SignalSignatures[K]> extends [any, ...infer Q]
                ? Q
                : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        get_title(): string;
        set_title(value: string): void;
        get_description(): string;
        set_description(value: string): void;
        get_icon(): Gtk.Image | null;
        set_icon(value?: Gtk.Image | null): void;
    }

    namespace WidgetsWelcome {
        // Signal signatures
        interface SignalSignatures extends Gtk.EventBox.SignalSignatures {
            activated: (arg0: number) => void;
            'notify::title': (pspec: GObject.ParamSpec) => void;
            'notify::subtitle': (pspec: GObject.ParamSpec) => void;
            'notify::above-child': (pspec: GObject.ParamSpec) => void;
            'notify::visible-window': (pspec: GObject.ParamSpec) => void;
            'notify::border-width': (pspec: GObject.ParamSpec) => void;
            'notify::child': (pspec: GObject.ParamSpec) => void;
            'notify::resize-mode': (pspec: GObject.ParamSpec) => void;
            'notify::app-paintable': (pspec: GObject.ParamSpec) => void;
            'notify::can-default': (pspec: GObject.ParamSpec) => void;
            'notify::can-focus': (pspec: GObject.ParamSpec) => void;
            'notify::composite-child': (pspec: GObject.ParamSpec) => void;
            'notify::double-buffered': (pspec: GObject.ParamSpec) => void;
            'notify::events': (pspec: GObject.ParamSpec) => void;
            'notify::expand': (pspec: GObject.ParamSpec) => void;
            'notify::focus-on-click': (pspec: GObject.ParamSpec) => void;
            'notify::halign': (pspec: GObject.ParamSpec) => void;
            'notify::has-default': (pspec: GObject.ParamSpec) => void;
            'notify::has-focus': (pspec: GObject.ParamSpec) => void;
            'notify::has-tooltip': (pspec: GObject.ParamSpec) => void;
            'notify::height-request': (pspec: GObject.ParamSpec) => void;
            'notify::hexpand': (pspec: GObject.ParamSpec) => void;
            'notify::hexpand-set': (pspec: GObject.ParamSpec) => void;
            'notify::is-focus': (pspec: GObject.ParamSpec) => void;
            'notify::margin': (pspec: GObject.ParamSpec) => void;
            'notify::margin-bottom': (pspec: GObject.ParamSpec) => void;
            'notify::margin-end': (pspec: GObject.ParamSpec) => void;
            'notify::margin-left': (pspec: GObject.ParamSpec) => void;
            'notify::margin-right': (pspec: GObject.ParamSpec) => void;
            'notify::margin-start': (pspec: GObject.ParamSpec) => void;
            'notify::margin-top': (pspec: GObject.ParamSpec) => void;
            'notify::name': (pspec: GObject.ParamSpec) => void;
            'notify::no-show-all': (pspec: GObject.ParamSpec) => void;
            'notify::opacity': (pspec: GObject.ParamSpec) => void;
            'notify::parent': (pspec: GObject.ParamSpec) => void;
            'notify::receives-default': (pspec: GObject.ParamSpec) => void;
            'notify::scale-factor': (pspec: GObject.ParamSpec) => void;
            'notify::sensitive': (pspec: GObject.ParamSpec) => void;
            'notify::style': (pspec: GObject.ParamSpec) => void;
            'notify::tooltip-markup': (pspec: GObject.ParamSpec) => void;
            'notify::tooltip-text': (pspec: GObject.ParamSpec) => void;
            'notify::valign': (pspec: GObject.ParamSpec) => void;
            'notify::vexpand': (pspec: GObject.ParamSpec) => void;
            'notify::vexpand-set': (pspec: GObject.ParamSpec) => void;
            'notify::visible': (pspec: GObject.ParamSpec) => void;
            'notify::width-request': (pspec: GObject.ParamSpec) => void;
            'notify::window': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends Gtk.EventBox.ConstructorProps {
            title: string;
            subtitle: string;
        }
    }

    class WidgetsWelcome extends Gtk.EventBox {
        static $gtype: GObject.GType<WidgetsWelcome>;

        // Properties

        get title(): string;
        set title(val: string);
        get subtitle(): string;
        set subtitle(val: string);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: WidgetsWelcome.SignalSignatures;

        // Fields

        children: Gtk.Button[];
        options: Gtk.Grid;

        // Constructors

        constructor(properties?: Partial<WidgetsWelcome.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](title_text: string, subtitle_text: string): WidgetsWelcome;
        // Conflicted with Gtk.EventBox.new

        static ['new'](...args: never[]): any;

        // Signals

        connect<K extends keyof WidgetsWelcome.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, WidgetsWelcome.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof WidgetsWelcome.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, WidgetsWelcome.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof WidgetsWelcome.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<WidgetsWelcome.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

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

    namespace Application {
        // Signal signatures
        interface SignalSignatures extends Gtk.Application.SignalSignatures {
            'notify::active-window': (pspec: GObject.ParamSpec) => void;
            'notify::app-menu': (pspec: GObject.ParamSpec) => void;
            'notify::menubar': (pspec: GObject.ParamSpec) => void;
            'notify::register-session': (pspec: GObject.ParamSpec) => void;
            'notify::screensaver-active': (pspec: GObject.ParamSpec) => void;
            'notify::action-group': (pspec: GObject.ParamSpec) => void;
            'notify::application-id': (pspec: GObject.ParamSpec) => void;
            'notify::flags': (pspec: GObject.ParamSpec) => void;
            'notify::inactivity-timeout': (pspec: GObject.ParamSpec) => void;
            'notify::is-busy': (pspec: GObject.ParamSpec) => void;
            'notify::is-registered': (pspec: GObject.ParamSpec) => void;
            'notify::is-remote': (pspec: GObject.ParamSpec) => void;
            'notify::resource-base-path': (pspec: GObject.ParamSpec) => void;
            'notify::version': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends Gtk.Application.ConstructorProps {}
    }

    abstract class Application extends Gtk.Application {
        static $gtype: GObject.GType<Application>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Application.SignalSignatures;

        // Fields

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

        // Constructors

        constructor(properties?: Partial<Application.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        connect<K extends keyof Application.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Application.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof Application.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Application.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof Application.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Application.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Virtual methods

        vfunc_set_options(): void;

        // Methods

        run(args: string[]): number;
        // Conflicted with Gio.Application.run
        run(...args: never[]): any;
        set_options(): void;
    }

    namespace SettingsPage {
        // Signal signatures
        interface SignalSignatures extends Gtk.ScrolledWindow.SignalSignatures {
            'notify::status-type': (pspec: GObject.ParamSpec) => void;
            'notify::display-widget': (pspec: GObject.ParamSpec) => void;
            'notify::header': (pspec: GObject.ParamSpec) => void;
            'notify::status': (pspec: GObject.ParamSpec) => void;
            'notify::icon-name': (pspec: GObject.ParamSpec) => void;
            'notify::title': (pspec: GObject.ParamSpec) => void;
            'notify::hadjustment': (pspec: GObject.ParamSpec) => void;
            'notify::hscrollbar-policy': (pspec: GObject.ParamSpec) => void;
            'notify::kinetic-scrolling': (pspec: GObject.ParamSpec) => void;
            'notify::max-content-height': (pspec: GObject.ParamSpec) => void;
            'notify::max-content-width': (pspec: GObject.ParamSpec) => void;
            'notify::min-content-height': (pspec: GObject.ParamSpec) => void;
            'notify::min-content-width': (pspec: GObject.ParamSpec) => void;
            'notify::overlay-scrolling': (pspec: GObject.ParamSpec) => void;
            'notify::propagate-natural-height': (pspec: GObject.ParamSpec) => void;
            'notify::propagate-natural-width': (pspec: GObject.ParamSpec) => void;
            'notify::shadow-type': (pspec: GObject.ParamSpec) => void;
            'notify::vadjustment': (pspec: GObject.ParamSpec) => void;
            'notify::vscrollbar-policy': (pspec: GObject.ParamSpec) => void;
            'notify::window-placement': (pspec: GObject.ParamSpec) => void;
            'notify::window-placement-set': (pspec: GObject.ParamSpec) => void;
            'notify::border-width': (pspec: GObject.ParamSpec) => void;
            'notify::child': (pspec: GObject.ParamSpec) => void;
            'notify::resize-mode': (pspec: GObject.ParamSpec) => void;
            'notify::app-paintable': (pspec: GObject.ParamSpec) => void;
            'notify::can-default': (pspec: GObject.ParamSpec) => void;
            'notify::can-focus': (pspec: GObject.ParamSpec) => void;
            'notify::composite-child': (pspec: GObject.ParamSpec) => void;
            'notify::double-buffered': (pspec: GObject.ParamSpec) => void;
            'notify::events': (pspec: GObject.ParamSpec) => void;
            'notify::expand': (pspec: GObject.ParamSpec) => void;
            'notify::focus-on-click': (pspec: GObject.ParamSpec) => void;
            'notify::halign': (pspec: GObject.ParamSpec) => void;
            'notify::has-default': (pspec: GObject.ParamSpec) => void;
            'notify::has-focus': (pspec: GObject.ParamSpec) => void;
            'notify::has-tooltip': (pspec: GObject.ParamSpec) => void;
            'notify::height-request': (pspec: GObject.ParamSpec) => void;
            'notify::hexpand': (pspec: GObject.ParamSpec) => void;
            'notify::hexpand-set': (pspec: GObject.ParamSpec) => void;
            'notify::is-focus': (pspec: GObject.ParamSpec) => void;
            'notify::margin': (pspec: GObject.ParamSpec) => void;
            'notify::margin-bottom': (pspec: GObject.ParamSpec) => void;
            'notify::margin-end': (pspec: GObject.ParamSpec) => void;
            'notify::margin-left': (pspec: GObject.ParamSpec) => void;
            'notify::margin-right': (pspec: GObject.ParamSpec) => void;
            'notify::margin-start': (pspec: GObject.ParamSpec) => void;
            'notify::margin-top': (pspec: GObject.ParamSpec) => void;
            'notify::name': (pspec: GObject.ParamSpec) => void;
            'notify::no-show-all': (pspec: GObject.ParamSpec) => void;
            'notify::opacity': (pspec: GObject.ParamSpec) => void;
            'notify::parent': (pspec: GObject.ParamSpec) => void;
            'notify::receives-default': (pspec: GObject.ParamSpec) => void;
            'notify::scale-factor': (pspec: GObject.ParamSpec) => void;
            'notify::sensitive': (pspec: GObject.ParamSpec) => void;
            'notify::style': (pspec: GObject.ParamSpec) => void;
            'notify::tooltip-markup': (pspec: GObject.ParamSpec) => void;
            'notify::tooltip-text': (pspec: GObject.ParamSpec) => void;
            'notify::valign': (pspec: GObject.ParamSpec) => void;
            'notify::vexpand': (pspec: GObject.ParamSpec) => void;
            'notify::vexpand-set': (pspec: GObject.ParamSpec) => void;
            'notify::visible': (pspec: GObject.ParamSpec) => void;
            'notify::width-request': (pspec: GObject.ParamSpec) => void;
            'notify::window': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends Gtk.ScrolledWindow.ConstructorProps {
            status_type: SettingsPageStatusType;
            statusType: SettingsPageStatusType;
            display_widget: Gtk.Widget;
            displayWidget: Gtk.Widget;
            header: string;
            status: string;
            icon_name: string;
            iconName: string;
            title: string;
        }
    }

    abstract class SettingsPage extends Gtk.ScrolledWindow {
        static $gtype: GObject.GType<SettingsPage>;

        // Properties

        get status_type(): SettingsPageStatusType;
        set status_type(val: SettingsPageStatusType);
        get statusType(): SettingsPageStatusType;
        set statusType(val: SettingsPageStatusType);
        get display_widget(): Gtk.Widget;
        get displayWidget(): Gtk.Widget;
        get header(): string;
        get status(): string;
        set status(val: string);
        get icon_name(): string;
        set icon_name(val: string);
        get iconName(): string;
        set iconName(val: string);
        get title(): string;
        set title(val: string);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: SettingsPage.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<SettingsPage.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        connect<K extends keyof SettingsPage.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, SettingsPage.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof SettingsPage.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, SettingsPage.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof SettingsPage.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<SettingsPage.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        get_status_type(): SettingsPageStatusType;
        set_status_type(value: SettingsPageStatusType | null): void;
        get_display_widget(): Gtk.Widget | null;
        get_header(): string | null;
        get_status(): string;
        set_status(value: string): void;
        get_icon_name(): string | null;
        set_icon_name(value?: string | null): void;
        get_title(): string;
        set_title(value: string): void;
    }

    namespace SimpleSettingsPage {
        // Signal signatures
        interface SignalSignatures extends SettingsPage.SignalSignatures {
            'notify::action-area': (pspec: GObject.ParamSpec) => void;
            'notify::content-area': (pspec: GObject.ParamSpec) => void;
            'notify::status-switch': (pspec: GObject.ParamSpec) => void;
            'notify::activatable': (pspec: GObject.ParamSpec) => void;
            'notify::description': (pspec: GObject.ParamSpec) => void;
            'notify::icon-name': (pspec: GObject.ParamSpec) => void;
            'notify::title': (pspec: GObject.ParamSpec) => void;
            'notify::status-type': (pspec: GObject.ParamSpec) => void;
            'notify::display-widget': (pspec: GObject.ParamSpec) => void;
            'notify::header': (pspec: GObject.ParamSpec) => void;
            'notify::status': (pspec: GObject.ParamSpec) => void;
            'notify::hadjustment': (pspec: GObject.ParamSpec) => void;
            'notify::hscrollbar-policy': (pspec: GObject.ParamSpec) => void;
            'notify::kinetic-scrolling': (pspec: GObject.ParamSpec) => void;
            'notify::max-content-height': (pspec: GObject.ParamSpec) => void;
            'notify::max-content-width': (pspec: GObject.ParamSpec) => void;
            'notify::min-content-height': (pspec: GObject.ParamSpec) => void;
            'notify::min-content-width': (pspec: GObject.ParamSpec) => void;
            'notify::overlay-scrolling': (pspec: GObject.ParamSpec) => void;
            'notify::propagate-natural-height': (pspec: GObject.ParamSpec) => void;
            'notify::propagate-natural-width': (pspec: GObject.ParamSpec) => void;
            'notify::shadow-type': (pspec: GObject.ParamSpec) => void;
            'notify::vadjustment': (pspec: GObject.ParamSpec) => void;
            'notify::vscrollbar-policy': (pspec: GObject.ParamSpec) => void;
            'notify::window-placement': (pspec: GObject.ParamSpec) => void;
            'notify::window-placement-set': (pspec: GObject.ParamSpec) => void;
            'notify::border-width': (pspec: GObject.ParamSpec) => void;
            'notify::child': (pspec: GObject.ParamSpec) => void;
            'notify::resize-mode': (pspec: GObject.ParamSpec) => void;
            'notify::app-paintable': (pspec: GObject.ParamSpec) => void;
            'notify::can-default': (pspec: GObject.ParamSpec) => void;
            'notify::can-focus': (pspec: GObject.ParamSpec) => void;
            'notify::composite-child': (pspec: GObject.ParamSpec) => void;
            'notify::double-buffered': (pspec: GObject.ParamSpec) => void;
            'notify::events': (pspec: GObject.ParamSpec) => void;
            'notify::expand': (pspec: GObject.ParamSpec) => void;
            'notify::focus-on-click': (pspec: GObject.ParamSpec) => void;
            'notify::halign': (pspec: GObject.ParamSpec) => void;
            'notify::has-default': (pspec: GObject.ParamSpec) => void;
            'notify::has-focus': (pspec: GObject.ParamSpec) => void;
            'notify::has-tooltip': (pspec: GObject.ParamSpec) => void;
            'notify::height-request': (pspec: GObject.ParamSpec) => void;
            'notify::hexpand': (pspec: GObject.ParamSpec) => void;
            'notify::hexpand-set': (pspec: GObject.ParamSpec) => void;
            'notify::is-focus': (pspec: GObject.ParamSpec) => void;
            'notify::margin': (pspec: GObject.ParamSpec) => void;
            'notify::margin-bottom': (pspec: GObject.ParamSpec) => void;
            'notify::margin-end': (pspec: GObject.ParamSpec) => void;
            'notify::margin-left': (pspec: GObject.ParamSpec) => void;
            'notify::margin-right': (pspec: GObject.ParamSpec) => void;
            'notify::margin-start': (pspec: GObject.ParamSpec) => void;
            'notify::margin-top': (pspec: GObject.ParamSpec) => void;
            'notify::name': (pspec: GObject.ParamSpec) => void;
            'notify::no-show-all': (pspec: GObject.ParamSpec) => void;
            'notify::opacity': (pspec: GObject.ParamSpec) => void;
            'notify::parent': (pspec: GObject.ParamSpec) => void;
            'notify::receives-default': (pspec: GObject.ParamSpec) => void;
            'notify::scale-factor': (pspec: GObject.ParamSpec) => void;
            'notify::sensitive': (pspec: GObject.ParamSpec) => void;
            'notify::style': (pspec: GObject.ParamSpec) => void;
            'notify::tooltip-markup': (pspec: GObject.ParamSpec) => void;
            'notify::tooltip-text': (pspec: GObject.ParamSpec) => void;
            'notify::valign': (pspec: GObject.ParamSpec) => void;
            'notify::vexpand': (pspec: GObject.ParamSpec) => void;
            'notify::vexpand-set': (pspec: GObject.ParamSpec) => void;
            'notify::visible': (pspec: GObject.ParamSpec) => void;
            'notify::width-request': (pspec: GObject.ParamSpec) => void;
            'notify::window': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends SettingsPage.ConstructorProps {
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
        }
    }

    abstract class SimpleSettingsPage extends SettingsPage {
        static $gtype: GObject.GType<SimpleSettingsPage>;

        // Properties

        get action_area(): Gtk.ButtonBox;
        get actionArea(): Gtk.ButtonBox;
        get content_area(): Gtk.Grid;
        get contentArea(): Gtk.Grid;
        get status_switch(): Gtk.Switch;
        get statusSwitch(): Gtk.Switch;
        get activatable(): boolean;
        get description(): string;
        set description(val: string);
        get icon_name(): string;
        set icon_name(val: string);
        get iconName(): string;
        set iconName(val: string);
        get title(): string;
        set title(val: string);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: SimpleSettingsPage.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<SimpleSettingsPage.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        connect<K extends keyof SimpleSettingsPage.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, SimpleSettingsPage.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof SimpleSettingsPage.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, SimpleSettingsPage.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof SimpleSettingsPage.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<SimpleSettingsPage.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        get_action_area(): Gtk.ButtonBox;
        get_content_area(): Gtk.Grid;
        get_status_switch(): Gtk.Switch | null;
        get_activatable(): boolean;
        get_description(): string;
        set_description(value: string): void;
        get_icon_name(): string;
        // Conflicted with Granite.SettingsPage.get_icon_name
        get_icon_name(...args: never[]): any;
        set_icon_name(value: string): void;
        // Conflicted with Granite.SettingsPage.set_icon_name
        set_icon_name(...args: never[]): any;
        get_title(): string;
        set_title(value: string): void;
    }

    namespace AccelLabel {
        // Signal signatures
        interface SignalSignatures extends Gtk.Grid.SignalSignatures {
            'notify::action-name': (pspec: GObject.ParamSpec) => void;
            'notify::accel-string': (pspec: GObject.ParamSpec) => void;
            'notify::label': (pspec: GObject.ParamSpec) => void;
            'notify::baseline-row': (pspec: GObject.ParamSpec) => void;
            'notify::column-homogeneous': (pspec: GObject.ParamSpec) => void;
            'notify::column-spacing': (pspec: GObject.ParamSpec) => void;
            'notify::row-homogeneous': (pspec: GObject.ParamSpec) => void;
            'notify::row-spacing': (pspec: GObject.ParamSpec) => void;
            'notify::border-width': (pspec: GObject.ParamSpec) => void;
            'notify::child': (pspec: GObject.ParamSpec) => void;
            'notify::resize-mode': (pspec: GObject.ParamSpec) => void;
            'notify::app-paintable': (pspec: GObject.ParamSpec) => void;
            'notify::can-default': (pspec: GObject.ParamSpec) => void;
            'notify::can-focus': (pspec: GObject.ParamSpec) => void;
            'notify::composite-child': (pspec: GObject.ParamSpec) => void;
            'notify::double-buffered': (pspec: GObject.ParamSpec) => void;
            'notify::events': (pspec: GObject.ParamSpec) => void;
            'notify::expand': (pspec: GObject.ParamSpec) => void;
            'notify::focus-on-click': (pspec: GObject.ParamSpec) => void;
            'notify::halign': (pspec: GObject.ParamSpec) => void;
            'notify::has-default': (pspec: GObject.ParamSpec) => void;
            'notify::has-focus': (pspec: GObject.ParamSpec) => void;
            'notify::has-tooltip': (pspec: GObject.ParamSpec) => void;
            'notify::height-request': (pspec: GObject.ParamSpec) => void;
            'notify::hexpand': (pspec: GObject.ParamSpec) => void;
            'notify::hexpand-set': (pspec: GObject.ParamSpec) => void;
            'notify::is-focus': (pspec: GObject.ParamSpec) => void;
            'notify::margin': (pspec: GObject.ParamSpec) => void;
            'notify::margin-bottom': (pspec: GObject.ParamSpec) => void;
            'notify::margin-end': (pspec: GObject.ParamSpec) => void;
            'notify::margin-left': (pspec: GObject.ParamSpec) => void;
            'notify::margin-right': (pspec: GObject.ParamSpec) => void;
            'notify::margin-start': (pspec: GObject.ParamSpec) => void;
            'notify::margin-top': (pspec: GObject.ParamSpec) => void;
            'notify::name': (pspec: GObject.ParamSpec) => void;
            'notify::no-show-all': (pspec: GObject.ParamSpec) => void;
            'notify::opacity': (pspec: GObject.ParamSpec) => void;
            'notify::parent': (pspec: GObject.ParamSpec) => void;
            'notify::receives-default': (pspec: GObject.ParamSpec) => void;
            'notify::scale-factor': (pspec: GObject.ParamSpec) => void;
            'notify::sensitive': (pspec: GObject.ParamSpec) => void;
            'notify::style': (pspec: GObject.ParamSpec) => void;
            'notify::tooltip-markup': (pspec: GObject.ParamSpec) => void;
            'notify::tooltip-text': (pspec: GObject.ParamSpec) => void;
            'notify::valign': (pspec: GObject.ParamSpec) => void;
            'notify::vexpand': (pspec: GObject.ParamSpec) => void;
            'notify::vexpand-set': (pspec: GObject.ParamSpec) => void;
            'notify::visible': (pspec: GObject.ParamSpec) => void;
            'notify::width-request': (pspec: GObject.ParamSpec) => void;
            'notify::window': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends Gtk.Grid.ConstructorProps {
            action_name: string;
            actionName: string;
            accel_string: string;
            accelString: string;
            label: string;
        }
    }

    class AccelLabel extends Gtk.Grid {
        static $gtype: GObject.GType<AccelLabel>;

        // Properties

        get action_name(): string;
        set action_name(val: string);
        get actionName(): string;
        set actionName(val: string);
        get accel_string(): string;
        set accel_string(val: string);
        get accelString(): string;
        set accelString(val: string);
        get label(): string;
        set label(val: string);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: AccelLabel.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<AccelLabel.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](label: string, accel_string?: string | null): AccelLabel;
        // Conflicted with Gtk.Grid.new

        static ['new'](...args: never[]): any;

        static from_action_name(label: string, action_name: string): AccelLabel;

        // Signals

        connect<K extends keyof AccelLabel.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, AccelLabel.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof AccelLabel.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, AccelLabel.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof AccelLabel.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<AccelLabel.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        get_action_name(): string;
        set_action_name(value: string): void;
        get_accel_string(): string | null;
        set_accel_string(value?: string | null): void;
        get_label(): string;
        set_label(value: string): void;
    }

    namespace AsyncImage {
        // Signal signatures
        interface SignalSignatures extends Gtk.Image.SignalSignatures {
            'notify::load-on-realize': (pspec: GObject.ParamSpec) => void;
            'notify::auto-size-request': (pspec: GObject.ParamSpec) => void;
            'notify::gicon-async': (pspec: GObject.ParamSpec) => void;
            'notify::size-async': (pspec: GObject.ParamSpec) => void;
            'notify::file': (pspec: GObject.ParamSpec) => void;
            'notify::gicon': (pspec: GObject.ParamSpec) => void;
            'notify::icon-name': (pspec: GObject.ParamSpec) => void;
            'notify::icon-set': (pspec: GObject.ParamSpec) => void;
            'notify::icon-size': (pspec: GObject.ParamSpec) => void;
            'notify::pixbuf': (pspec: GObject.ParamSpec) => void;
            'notify::pixbuf-animation': (pspec: GObject.ParamSpec) => void;
            'notify::pixel-size': (pspec: GObject.ParamSpec) => void;
            'notify::resource': (pspec: GObject.ParamSpec) => void;
            'notify::stock': (pspec: GObject.ParamSpec) => void;
            'notify::storage-type': (pspec: GObject.ParamSpec) => void;
            'notify::surface': (pspec: GObject.ParamSpec) => void;
            'notify::use-fallback': (pspec: GObject.ParamSpec) => void;
            'notify::xalign': (pspec: GObject.ParamSpec) => void;
            'notify::xpad': (pspec: GObject.ParamSpec) => void;
            'notify::yalign': (pspec: GObject.ParamSpec) => void;
            'notify::ypad': (pspec: GObject.ParamSpec) => void;
            'notify::app-paintable': (pspec: GObject.ParamSpec) => void;
            'notify::can-default': (pspec: GObject.ParamSpec) => void;
            'notify::can-focus': (pspec: GObject.ParamSpec) => void;
            'notify::composite-child': (pspec: GObject.ParamSpec) => void;
            'notify::double-buffered': (pspec: GObject.ParamSpec) => void;
            'notify::events': (pspec: GObject.ParamSpec) => void;
            'notify::expand': (pspec: GObject.ParamSpec) => void;
            'notify::focus-on-click': (pspec: GObject.ParamSpec) => void;
            'notify::halign': (pspec: GObject.ParamSpec) => void;
            'notify::has-default': (pspec: GObject.ParamSpec) => void;
            'notify::has-focus': (pspec: GObject.ParamSpec) => void;
            'notify::has-tooltip': (pspec: GObject.ParamSpec) => void;
            'notify::height-request': (pspec: GObject.ParamSpec) => void;
            'notify::hexpand': (pspec: GObject.ParamSpec) => void;
            'notify::hexpand-set': (pspec: GObject.ParamSpec) => void;
            'notify::is-focus': (pspec: GObject.ParamSpec) => void;
            'notify::margin': (pspec: GObject.ParamSpec) => void;
            'notify::margin-bottom': (pspec: GObject.ParamSpec) => void;
            'notify::margin-end': (pspec: GObject.ParamSpec) => void;
            'notify::margin-left': (pspec: GObject.ParamSpec) => void;
            'notify::margin-right': (pspec: GObject.ParamSpec) => void;
            'notify::margin-start': (pspec: GObject.ParamSpec) => void;
            'notify::margin-top': (pspec: GObject.ParamSpec) => void;
            'notify::name': (pspec: GObject.ParamSpec) => void;
            'notify::no-show-all': (pspec: GObject.ParamSpec) => void;
            'notify::opacity': (pspec: GObject.ParamSpec) => void;
            'notify::parent': (pspec: GObject.ParamSpec) => void;
            'notify::receives-default': (pspec: GObject.ParamSpec) => void;
            'notify::scale-factor': (pspec: GObject.ParamSpec) => void;
            'notify::sensitive': (pspec: GObject.ParamSpec) => void;
            'notify::style': (pspec: GObject.ParamSpec) => void;
            'notify::tooltip-markup': (pspec: GObject.ParamSpec) => void;
            'notify::tooltip-text': (pspec: GObject.ParamSpec) => void;
            'notify::valign': (pspec: GObject.ParamSpec) => void;
            'notify::vexpand': (pspec: GObject.ParamSpec) => void;
            'notify::vexpand-set': (pspec: GObject.ParamSpec) => void;
            'notify::visible': (pspec: GObject.ParamSpec) => void;
            'notify::width-request': (pspec: GObject.ParamSpec) => void;
            'notify::window': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends Gtk.Image.ConstructorProps {
            load_on_realize: boolean;
            loadOnRealize: boolean;
            auto_size_request: boolean;
            autoSizeRequest: boolean;
            gicon_async: Gio.Icon;
            giconAsync: Gio.Icon;
            size_async: number;
            sizeAsync: number;
        }
    }

    class AsyncImage extends Gtk.Image {
        static $gtype: GObject.GType<AsyncImage>;

        // Properties

        get load_on_realize(): boolean;
        get loadOnRealize(): boolean;
        get auto_size_request(): boolean;
        get autoSizeRequest(): boolean;
        get gicon_async(): Gio.Icon;
        set gicon_async(val: Gio.Icon);
        get giconAsync(): Gio.Icon;
        set giconAsync(val: Gio.Icon);
        get size_async(): number;
        set size_async(val: number);
        get sizeAsync(): number;
        set sizeAsync(val: number);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: AsyncImage.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<AsyncImage.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](load_on_realize: boolean, auto_size_request: boolean): AsyncImage;
        // Conflicted with Gtk.Image.new

        static ['new'](...args: never[]): any;

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

        // Signals

        connect<K extends keyof AsyncImage.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, AsyncImage.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof AsyncImage.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, AsyncImage.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof AsyncImage.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<AsyncImage.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        get_gicon_async(): Gio.Icon | null;
        get_size_async(): number;
        set_from_gicon_async(
            icon: Gio.Icon,
            size: number,
            cancellable?: Gio.Cancellable | null,
        ): globalThis.Promise<void>;
        set_from_gicon_async(
            icon: Gio.Icon,
            size: number,
            cancellable: Gio.Cancellable | null,
            _callback_: Gio.AsyncReadyCallback<this> | null,
        ): void;
        set_from_gicon_async(
            icon: Gio.Icon,
            size: number,
            cancellable?: Gio.Cancellable | null,
            _callback_?: Gio.AsyncReadyCallback<this> | null,
        ): globalThis.Promise<void> | void;
        set_from_gicon_finish(_res_: Gio.AsyncResult): void;
        set_from_icon_name_async(
            icon_name: string,
            icon_size: Gtk.IconSize | null,
            cancellable?: Gio.Cancellable | null,
        ): globalThis.Promise<void>;
        set_from_icon_name_async(
            icon_name: string,
            icon_size: Gtk.IconSize | null,
            cancellable: Gio.Cancellable | null,
            _callback_: Gio.AsyncReadyCallback<this> | null,
        ): void;
        set_from_icon_name_async(
            icon_name: string,
            icon_size: Gtk.IconSize | null,
            cancellable?: Gio.Cancellable | null,
            _callback_?: Gio.AsyncReadyCallback<this> | null,
        ): globalThis.Promise<void> | void;
        set_from_icon_name_finish(_res_: Gio.AsyncResult): void;
        set_from_file_async(
            file: Gio.File,
            width: number,
            height: number,
            preserve_aspect_ratio: boolean,
            cancellable?: Gio.Cancellable | null,
        ): globalThis.Promise<void>;
        set_from_file_async(
            file: Gio.File,
            width: number,
            height: number,
            preserve_aspect_ratio: boolean,
            cancellable: Gio.Cancellable | null,
            _callback_: Gio.AsyncReadyCallback<this> | null,
        ): void;
        set_from_file_async(
            file: Gio.File,
            width: number,
            height: number,
            preserve_aspect_ratio: boolean,
            cancellable?: Gio.Cancellable | null,
            _callback_?: Gio.AsyncReadyCallback<this> | null,
        ): globalThis.Promise<void> | void;
        set_from_file_finish(_res_: Gio.AsyncResult): void;
    }

    namespace Dialog {
        // Signal signatures
        interface SignalSignatures extends Gtk.Dialog.SignalSignatures {
            'notify::use-header-bar': (pspec: GObject.ParamSpec) => void;
            'notify::accept-focus': (pspec: GObject.ParamSpec) => void;
            'notify::application': (pspec: GObject.ParamSpec) => void;
            'notify::attached-to': (pspec: GObject.ParamSpec) => void;
            'notify::decorated': (pspec: GObject.ParamSpec) => void;
            'notify::default-height': (pspec: GObject.ParamSpec) => void;
            'notify::default-width': (pspec: GObject.ParamSpec) => void;
            'notify::deletable': (pspec: GObject.ParamSpec) => void;
            'notify::destroy-with-parent': (pspec: GObject.ParamSpec) => void;
            'notify::focus-on-map': (pspec: GObject.ParamSpec) => void;
            'notify::focus-visible': (pspec: GObject.ParamSpec) => void;
            'notify::gravity': (pspec: GObject.ParamSpec) => void;
            'notify::has-resize-grip': (pspec: GObject.ParamSpec) => void;
            'notify::has-toplevel-focus': (pspec: GObject.ParamSpec) => void;
            'notify::hide-titlebar-when-maximized': (pspec: GObject.ParamSpec) => void;
            'notify::icon': (pspec: GObject.ParamSpec) => void;
            'notify::icon-name': (pspec: GObject.ParamSpec) => void;
            'notify::is-active': (pspec: GObject.ParamSpec) => void;
            'notify::is-maximized': (pspec: GObject.ParamSpec) => void;
            'notify::mnemonics-visible': (pspec: GObject.ParamSpec) => void;
            'notify::modal': (pspec: GObject.ParamSpec) => void;
            'notify::resizable': (pspec: GObject.ParamSpec) => void;
            'notify::resize-grip-visible': (pspec: GObject.ParamSpec) => void;
            'notify::role': (pspec: GObject.ParamSpec) => void;
            'notify::screen': (pspec: GObject.ParamSpec) => void;
            'notify::skip-pager-hint': (pspec: GObject.ParamSpec) => void;
            'notify::skip-taskbar-hint': (pspec: GObject.ParamSpec) => void;
            'notify::startup-id': (pspec: GObject.ParamSpec) => void;
            'notify::title': (pspec: GObject.ParamSpec) => void;
            'notify::transient-for': (pspec: GObject.ParamSpec) => void;
            'notify::type': (pspec: GObject.ParamSpec) => void;
            'notify::type-hint': (pspec: GObject.ParamSpec) => void;
            'notify::urgency-hint': (pspec: GObject.ParamSpec) => void;
            'notify::window-position': (pspec: GObject.ParamSpec) => void;
            'notify::border-width': (pspec: GObject.ParamSpec) => void;
            'notify::child': (pspec: GObject.ParamSpec) => void;
            'notify::resize-mode': (pspec: GObject.ParamSpec) => void;
            'notify::app-paintable': (pspec: GObject.ParamSpec) => void;
            'notify::can-default': (pspec: GObject.ParamSpec) => void;
            'notify::can-focus': (pspec: GObject.ParamSpec) => void;
            'notify::composite-child': (pspec: GObject.ParamSpec) => void;
            'notify::double-buffered': (pspec: GObject.ParamSpec) => void;
            'notify::events': (pspec: GObject.ParamSpec) => void;
            'notify::expand': (pspec: GObject.ParamSpec) => void;
            'notify::focus-on-click': (pspec: GObject.ParamSpec) => void;
            'notify::halign': (pspec: GObject.ParamSpec) => void;
            'notify::has-default': (pspec: GObject.ParamSpec) => void;
            'notify::has-focus': (pspec: GObject.ParamSpec) => void;
            'notify::has-tooltip': (pspec: GObject.ParamSpec) => void;
            'notify::height-request': (pspec: GObject.ParamSpec) => void;
            'notify::hexpand': (pspec: GObject.ParamSpec) => void;
            'notify::hexpand-set': (pspec: GObject.ParamSpec) => void;
            'notify::is-focus': (pspec: GObject.ParamSpec) => void;
            'notify::margin': (pspec: GObject.ParamSpec) => void;
            'notify::margin-bottom': (pspec: GObject.ParamSpec) => void;
            'notify::margin-end': (pspec: GObject.ParamSpec) => void;
            'notify::margin-left': (pspec: GObject.ParamSpec) => void;
            'notify::margin-right': (pspec: GObject.ParamSpec) => void;
            'notify::margin-start': (pspec: GObject.ParamSpec) => void;
            'notify::margin-top': (pspec: GObject.ParamSpec) => void;
            'notify::name': (pspec: GObject.ParamSpec) => void;
            'notify::no-show-all': (pspec: GObject.ParamSpec) => void;
            'notify::opacity': (pspec: GObject.ParamSpec) => void;
            'notify::parent': (pspec: GObject.ParamSpec) => void;
            'notify::receives-default': (pspec: GObject.ParamSpec) => void;
            'notify::scale-factor': (pspec: GObject.ParamSpec) => void;
            'notify::sensitive': (pspec: GObject.ParamSpec) => void;
            'notify::style': (pspec: GObject.ParamSpec) => void;
            'notify::tooltip-markup': (pspec: GObject.ParamSpec) => void;
            'notify::tooltip-text': (pspec: GObject.ParamSpec) => void;
            'notify::valign': (pspec: GObject.ParamSpec) => void;
            'notify::vexpand': (pspec: GObject.ParamSpec) => void;
            'notify::vexpand-set': (pspec: GObject.ParamSpec) => void;
            'notify::visible': (pspec: GObject.ParamSpec) => void;
            'notify::width-request': (pspec: GObject.ParamSpec) => void;
            'notify::window': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends Gtk.Dialog.ConstructorProps {}
    }

    class Dialog extends Gtk.Dialog {
        static $gtype: GObject.GType<Dialog>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Dialog.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<Dialog.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): Dialog;

        // Signals

        connect<K extends keyof Dialog.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Dialog.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof Dialog.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Dialog.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof Dialog.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Dialog.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;
    }

    namespace HeaderLabel {
        // Signal signatures
        interface SignalSignatures extends Gtk.Label.SignalSignatures {
            'notify::angle': (pspec: GObject.ParamSpec) => void;
            'notify::attributes': (pspec: GObject.ParamSpec) => void;
            'notify::cursor-position': (pspec: GObject.ParamSpec) => void;
            'notify::ellipsize': (pspec: GObject.ParamSpec) => void;
            'notify::justify': (pspec: GObject.ParamSpec) => void;
            'notify::label': (pspec: GObject.ParamSpec) => void;
            'notify::lines': (pspec: GObject.ParamSpec) => void;
            'notify::max-width-chars': (pspec: GObject.ParamSpec) => void;
            'notify::mnemonic-keyval': (pspec: GObject.ParamSpec) => void;
            'notify::mnemonic-widget': (pspec: GObject.ParamSpec) => void;
            'notify::pattern': (pspec: GObject.ParamSpec) => void;
            'notify::selectable': (pspec: GObject.ParamSpec) => void;
            'notify::selection-bound': (pspec: GObject.ParamSpec) => void;
            'notify::single-line-mode': (pspec: GObject.ParamSpec) => void;
            'notify::track-visited-links': (pspec: GObject.ParamSpec) => void;
            'notify::use-markup': (pspec: GObject.ParamSpec) => void;
            'notify::use-underline': (pspec: GObject.ParamSpec) => void;
            'notify::width-chars': (pspec: GObject.ParamSpec) => void;
            'notify::wrap': (pspec: GObject.ParamSpec) => void;
            'notify::wrap-mode': (pspec: GObject.ParamSpec) => void;
            'notify::xalign': (pspec: GObject.ParamSpec) => void;
            'notify::yalign': (pspec: GObject.ParamSpec) => void;
            'notify::xpad': (pspec: GObject.ParamSpec) => void;
            'notify::ypad': (pspec: GObject.ParamSpec) => void;
            'notify::app-paintable': (pspec: GObject.ParamSpec) => void;
            'notify::can-default': (pspec: GObject.ParamSpec) => void;
            'notify::can-focus': (pspec: GObject.ParamSpec) => void;
            'notify::composite-child': (pspec: GObject.ParamSpec) => void;
            'notify::double-buffered': (pspec: GObject.ParamSpec) => void;
            'notify::events': (pspec: GObject.ParamSpec) => void;
            'notify::expand': (pspec: GObject.ParamSpec) => void;
            'notify::focus-on-click': (pspec: GObject.ParamSpec) => void;
            'notify::halign': (pspec: GObject.ParamSpec) => void;
            'notify::has-default': (pspec: GObject.ParamSpec) => void;
            'notify::has-focus': (pspec: GObject.ParamSpec) => void;
            'notify::has-tooltip': (pspec: GObject.ParamSpec) => void;
            'notify::height-request': (pspec: GObject.ParamSpec) => void;
            'notify::hexpand': (pspec: GObject.ParamSpec) => void;
            'notify::hexpand-set': (pspec: GObject.ParamSpec) => void;
            'notify::is-focus': (pspec: GObject.ParamSpec) => void;
            'notify::margin': (pspec: GObject.ParamSpec) => void;
            'notify::margin-bottom': (pspec: GObject.ParamSpec) => void;
            'notify::margin-end': (pspec: GObject.ParamSpec) => void;
            'notify::margin-left': (pspec: GObject.ParamSpec) => void;
            'notify::margin-right': (pspec: GObject.ParamSpec) => void;
            'notify::margin-start': (pspec: GObject.ParamSpec) => void;
            'notify::margin-top': (pspec: GObject.ParamSpec) => void;
            'notify::name': (pspec: GObject.ParamSpec) => void;
            'notify::no-show-all': (pspec: GObject.ParamSpec) => void;
            'notify::opacity': (pspec: GObject.ParamSpec) => void;
            'notify::parent': (pspec: GObject.ParamSpec) => void;
            'notify::receives-default': (pspec: GObject.ParamSpec) => void;
            'notify::scale-factor': (pspec: GObject.ParamSpec) => void;
            'notify::sensitive': (pspec: GObject.ParamSpec) => void;
            'notify::style': (pspec: GObject.ParamSpec) => void;
            'notify::tooltip-markup': (pspec: GObject.ParamSpec) => void;
            'notify::tooltip-text': (pspec: GObject.ParamSpec) => void;
            'notify::valign': (pspec: GObject.ParamSpec) => void;
            'notify::vexpand': (pspec: GObject.ParamSpec) => void;
            'notify::vexpand-set': (pspec: GObject.ParamSpec) => void;
            'notify::visible': (pspec: GObject.ParamSpec) => void;
            'notify::width-request': (pspec: GObject.ParamSpec) => void;
            'notify::window': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends Gtk.Label.ConstructorProps {}
    }

    class HeaderLabel extends Gtk.Label {
        static $gtype: GObject.GType<HeaderLabel>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: HeaderLabel.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<HeaderLabel.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](label: string): HeaderLabel;
        // Conflicted with Gtk.Label.new

        static ['new'](...args: never[]): any;

        // Signals

        connect<K extends keyof HeaderLabel.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, HeaderLabel.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof HeaderLabel.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, HeaderLabel.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof HeaderLabel.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<HeaderLabel.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;
    }

    namespace HyperTextView {
        // Signal signatures
        interface SignalSignatures extends Gtk.TextView.SignalSignatures {
            'notify::accepts-tab': (pspec: GObject.ParamSpec) => void;
            'notify::bottom-margin': (pspec: GObject.ParamSpec) => void;
            'notify::buffer': (pspec: GObject.ParamSpec) => void;
            'notify::cursor-visible': (pspec: GObject.ParamSpec) => void;
            'notify::editable': (pspec: GObject.ParamSpec) => void;
            'notify::im-module': (pspec: GObject.ParamSpec) => void;
            'notify::indent': (pspec: GObject.ParamSpec) => void;
            'notify::input-hints': (pspec: GObject.ParamSpec) => void;
            'notify::input-purpose': (pspec: GObject.ParamSpec) => void;
            'notify::justification': (pspec: GObject.ParamSpec) => void;
            'notify::left-margin': (pspec: GObject.ParamSpec) => void;
            'notify::monospace': (pspec: GObject.ParamSpec) => void;
            'notify::overwrite': (pspec: GObject.ParamSpec) => void;
            'notify::pixels-above-lines': (pspec: GObject.ParamSpec) => void;
            'notify::pixels-below-lines': (pspec: GObject.ParamSpec) => void;
            'notify::pixels-inside-wrap': (pspec: GObject.ParamSpec) => void;
            'notify::populate-all': (pspec: GObject.ParamSpec) => void;
            'notify::right-margin': (pspec: GObject.ParamSpec) => void;
            'notify::tabs': (pspec: GObject.ParamSpec) => void;
            'notify::top-margin': (pspec: GObject.ParamSpec) => void;
            'notify::wrap-mode': (pspec: GObject.ParamSpec) => void;
            'notify::border-width': (pspec: GObject.ParamSpec) => void;
            'notify::child': (pspec: GObject.ParamSpec) => void;
            'notify::resize-mode': (pspec: GObject.ParamSpec) => void;
            'notify::app-paintable': (pspec: GObject.ParamSpec) => void;
            'notify::can-default': (pspec: GObject.ParamSpec) => void;
            'notify::can-focus': (pspec: GObject.ParamSpec) => void;
            'notify::composite-child': (pspec: GObject.ParamSpec) => void;
            'notify::double-buffered': (pspec: GObject.ParamSpec) => void;
            'notify::events': (pspec: GObject.ParamSpec) => void;
            'notify::expand': (pspec: GObject.ParamSpec) => void;
            'notify::focus-on-click': (pspec: GObject.ParamSpec) => void;
            'notify::halign': (pspec: GObject.ParamSpec) => void;
            'notify::has-default': (pspec: GObject.ParamSpec) => void;
            'notify::has-focus': (pspec: GObject.ParamSpec) => void;
            'notify::has-tooltip': (pspec: GObject.ParamSpec) => void;
            'notify::height-request': (pspec: GObject.ParamSpec) => void;
            'notify::hexpand': (pspec: GObject.ParamSpec) => void;
            'notify::hexpand-set': (pspec: GObject.ParamSpec) => void;
            'notify::is-focus': (pspec: GObject.ParamSpec) => void;
            'notify::margin': (pspec: GObject.ParamSpec) => void;
            'notify::margin-bottom': (pspec: GObject.ParamSpec) => void;
            'notify::margin-end': (pspec: GObject.ParamSpec) => void;
            'notify::margin-left': (pspec: GObject.ParamSpec) => void;
            'notify::margin-right': (pspec: GObject.ParamSpec) => void;
            'notify::margin-start': (pspec: GObject.ParamSpec) => void;
            'notify::margin-top': (pspec: GObject.ParamSpec) => void;
            'notify::name': (pspec: GObject.ParamSpec) => void;
            'notify::no-show-all': (pspec: GObject.ParamSpec) => void;
            'notify::opacity': (pspec: GObject.ParamSpec) => void;
            'notify::parent': (pspec: GObject.ParamSpec) => void;
            'notify::receives-default': (pspec: GObject.ParamSpec) => void;
            'notify::scale-factor': (pspec: GObject.ParamSpec) => void;
            'notify::sensitive': (pspec: GObject.ParamSpec) => void;
            'notify::style': (pspec: GObject.ParamSpec) => void;
            'notify::tooltip-markup': (pspec: GObject.ParamSpec) => void;
            'notify::tooltip-text': (pspec: GObject.ParamSpec) => void;
            'notify::valign': (pspec: GObject.ParamSpec) => void;
            'notify::vexpand': (pspec: GObject.ParamSpec) => void;
            'notify::vexpand-set': (pspec: GObject.ParamSpec) => void;
            'notify::visible': (pspec: GObject.ParamSpec) => void;
            'notify::width-request': (pspec: GObject.ParamSpec) => void;
            'notify::window': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends Gtk.TextView.ConstructorProps {}
    }

    class HyperTextView extends Gtk.TextView {
        static $gtype: GObject.GType<HyperTextView>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: HyperTextView.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<HyperTextView.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): HyperTextView;

        // Signals

        connect<K extends keyof HyperTextView.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, HyperTextView.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof HyperTextView.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, HyperTextView.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof HyperTextView.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<HyperTextView.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;
    }

    namespace MessageDialog {
        // Signal signatures
        interface SignalSignatures extends Dialog.SignalSignatures {
            'notify::primary-text': (pspec: GObject.ParamSpec) => void;
            'notify::secondary-text': (pspec: GObject.ParamSpec) => void;
            'notify::image-icon': (pspec: GObject.ParamSpec) => void;
            'notify::badge-icon': (pspec: GObject.ParamSpec) => void;
            'notify::primary-label': (pspec: GObject.ParamSpec) => void;
            'notify::secondary-label': (pspec: GObject.ParamSpec) => void;
            'notify::buttons': (pspec: GObject.ParamSpec) => void;
            'notify::custom-bin': (pspec: GObject.ParamSpec) => void;
            'notify::use-header-bar': (pspec: GObject.ParamSpec) => void;
            'notify::accept-focus': (pspec: GObject.ParamSpec) => void;
            'notify::application': (pspec: GObject.ParamSpec) => void;
            'notify::attached-to': (pspec: GObject.ParamSpec) => void;
            'notify::decorated': (pspec: GObject.ParamSpec) => void;
            'notify::default-height': (pspec: GObject.ParamSpec) => void;
            'notify::default-width': (pspec: GObject.ParamSpec) => void;
            'notify::deletable': (pspec: GObject.ParamSpec) => void;
            'notify::destroy-with-parent': (pspec: GObject.ParamSpec) => void;
            'notify::focus-on-map': (pspec: GObject.ParamSpec) => void;
            'notify::focus-visible': (pspec: GObject.ParamSpec) => void;
            'notify::gravity': (pspec: GObject.ParamSpec) => void;
            'notify::has-resize-grip': (pspec: GObject.ParamSpec) => void;
            'notify::has-toplevel-focus': (pspec: GObject.ParamSpec) => void;
            'notify::hide-titlebar-when-maximized': (pspec: GObject.ParamSpec) => void;
            'notify::icon': (pspec: GObject.ParamSpec) => void;
            'notify::icon-name': (pspec: GObject.ParamSpec) => void;
            'notify::is-active': (pspec: GObject.ParamSpec) => void;
            'notify::is-maximized': (pspec: GObject.ParamSpec) => void;
            'notify::mnemonics-visible': (pspec: GObject.ParamSpec) => void;
            'notify::modal': (pspec: GObject.ParamSpec) => void;
            'notify::resizable': (pspec: GObject.ParamSpec) => void;
            'notify::resize-grip-visible': (pspec: GObject.ParamSpec) => void;
            'notify::role': (pspec: GObject.ParamSpec) => void;
            'notify::screen': (pspec: GObject.ParamSpec) => void;
            'notify::skip-pager-hint': (pspec: GObject.ParamSpec) => void;
            'notify::skip-taskbar-hint': (pspec: GObject.ParamSpec) => void;
            'notify::startup-id': (pspec: GObject.ParamSpec) => void;
            'notify::title': (pspec: GObject.ParamSpec) => void;
            'notify::transient-for': (pspec: GObject.ParamSpec) => void;
            'notify::type': (pspec: GObject.ParamSpec) => void;
            'notify::type-hint': (pspec: GObject.ParamSpec) => void;
            'notify::urgency-hint': (pspec: GObject.ParamSpec) => void;
            'notify::window-position': (pspec: GObject.ParamSpec) => void;
            'notify::border-width': (pspec: GObject.ParamSpec) => void;
            'notify::child': (pspec: GObject.ParamSpec) => void;
            'notify::resize-mode': (pspec: GObject.ParamSpec) => void;
            'notify::app-paintable': (pspec: GObject.ParamSpec) => void;
            'notify::can-default': (pspec: GObject.ParamSpec) => void;
            'notify::can-focus': (pspec: GObject.ParamSpec) => void;
            'notify::composite-child': (pspec: GObject.ParamSpec) => void;
            'notify::double-buffered': (pspec: GObject.ParamSpec) => void;
            'notify::events': (pspec: GObject.ParamSpec) => void;
            'notify::expand': (pspec: GObject.ParamSpec) => void;
            'notify::focus-on-click': (pspec: GObject.ParamSpec) => void;
            'notify::halign': (pspec: GObject.ParamSpec) => void;
            'notify::has-default': (pspec: GObject.ParamSpec) => void;
            'notify::has-focus': (pspec: GObject.ParamSpec) => void;
            'notify::has-tooltip': (pspec: GObject.ParamSpec) => void;
            'notify::height-request': (pspec: GObject.ParamSpec) => void;
            'notify::hexpand': (pspec: GObject.ParamSpec) => void;
            'notify::hexpand-set': (pspec: GObject.ParamSpec) => void;
            'notify::is-focus': (pspec: GObject.ParamSpec) => void;
            'notify::margin': (pspec: GObject.ParamSpec) => void;
            'notify::margin-bottom': (pspec: GObject.ParamSpec) => void;
            'notify::margin-end': (pspec: GObject.ParamSpec) => void;
            'notify::margin-left': (pspec: GObject.ParamSpec) => void;
            'notify::margin-right': (pspec: GObject.ParamSpec) => void;
            'notify::margin-start': (pspec: GObject.ParamSpec) => void;
            'notify::margin-top': (pspec: GObject.ParamSpec) => void;
            'notify::name': (pspec: GObject.ParamSpec) => void;
            'notify::no-show-all': (pspec: GObject.ParamSpec) => void;
            'notify::opacity': (pspec: GObject.ParamSpec) => void;
            'notify::parent': (pspec: GObject.ParamSpec) => void;
            'notify::receives-default': (pspec: GObject.ParamSpec) => void;
            'notify::scale-factor': (pspec: GObject.ParamSpec) => void;
            'notify::sensitive': (pspec: GObject.ParamSpec) => void;
            'notify::style': (pspec: GObject.ParamSpec) => void;
            'notify::tooltip-markup': (pspec: GObject.ParamSpec) => void;
            'notify::tooltip-text': (pspec: GObject.ParamSpec) => void;
            'notify::valign': (pspec: GObject.ParamSpec) => void;
            'notify::vexpand': (pspec: GObject.ParamSpec) => void;
            'notify::vexpand-set': (pspec: GObject.ParamSpec) => void;
            'notify::visible': (pspec: GObject.ParamSpec) => void;
            'notify::width-request': (pspec: GObject.ParamSpec) => void;
            'notify::window': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends Dialog.ConstructorProps {
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
        }
    }

    class MessageDialog extends Dialog {
        static $gtype: GObject.GType<MessageDialog>;

        // Properties

        get primary_text(): string;
        set primary_text(val: string);
        get primaryText(): string;
        set primaryText(val: string);
        get secondary_text(): string;
        set secondary_text(val: string);
        get secondaryText(): string;
        set secondaryText(val: string);
        get image_icon(): Gio.Icon;
        set image_icon(val: Gio.Icon);
        get imageIcon(): Gio.Icon;
        set imageIcon(val: Gio.Icon);
        get badge_icon(): Gio.Icon;
        set badge_icon(val: Gio.Icon);
        get badgeIcon(): Gio.Icon;
        set badgeIcon(val: Gio.Icon);
        get primary_label(): Gtk.Label;
        get primaryLabel(): Gtk.Label;
        get secondary_label(): Gtk.Label;
        get secondaryLabel(): Gtk.Label;
        set buttons(val: Gtk.ButtonsType);
        get custom_bin(): Gtk.Bin;
        get customBin(): Gtk.Bin;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: MessageDialog.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<MessageDialog.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](
            primary_text: string,
            secondary_text: string,
            image_icon: Gio.Icon,
            buttons: Gtk.ButtonsType,
        ): MessageDialog;
        // Conflicted with Granite.Dialog.new

        static ['new'](...args: never[]): any;

        static with_image_from_icon_name(
            primary_text: string,
            secondary_text: string,
            image_icon_name: string,
            buttons: Gtk.ButtonsType,
        ): MessageDialog;

        // Signals

        connect<K extends keyof MessageDialog.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, MessageDialog.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof MessageDialog.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, MessageDialog.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof MessageDialog.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<MessageDialog.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

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

    namespace ModeSwitch {
        // Signal signatures
        interface SignalSignatures extends Gtk.Grid.SignalSignatures {
            'notify::active': (pspec: GObject.ParamSpec) => void;
            'notify::primary-icon-gicon': (pspec: GObject.ParamSpec) => void;
            'notify::primary-icon-name': (pspec: GObject.ParamSpec) => void;
            'notify::primary-icon-tooltip-text': (pspec: GObject.ParamSpec) => void;
            'notify::secondary-icon-gicon': (pspec: GObject.ParamSpec) => void;
            'notify::secondary-icon-name': (pspec: GObject.ParamSpec) => void;
            'notify::secondary-icon-tooltip-text': (pspec: GObject.ParamSpec) => void;
            'notify::baseline-row': (pspec: GObject.ParamSpec) => void;
            'notify::column-homogeneous': (pspec: GObject.ParamSpec) => void;
            'notify::column-spacing': (pspec: GObject.ParamSpec) => void;
            'notify::row-homogeneous': (pspec: GObject.ParamSpec) => void;
            'notify::row-spacing': (pspec: GObject.ParamSpec) => void;
            'notify::border-width': (pspec: GObject.ParamSpec) => void;
            'notify::child': (pspec: GObject.ParamSpec) => void;
            'notify::resize-mode': (pspec: GObject.ParamSpec) => void;
            'notify::app-paintable': (pspec: GObject.ParamSpec) => void;
            'notify::can-default': (pspec: GObject.ParamSpec) => void;
            'notify::can-focus': (pspec: GObject.ParamSpec) => void;
            'notify::composite-child': (pspec: GObject.ParamSpec) => void;
            'notify::double-buffered': (pspec: GObject.ParamSpec) => void;
            'notify::events': (pspec: GObject.ParamSpec) => void;
            'notify::expand': (pspec: GObject.ParamSpec) => void;
            'notify::focus-on-click': (pspec: GObject.ParamSpec) => void;
            'notify::halign': (pspec: GObject.ParamSpec) => void;
            'notify::has-default': (pspec: GObject.ParamSpec) => void;
            'notify::has-focus': (pspec: GObject.ParamSpec) => void;
            'notify::has-tooltip': (pspec: GObject.ParamSpec) => void;
            'notify::height-request': (pspec: GObject.ParamSpec) => void;
            'notify::hexpand': (pspec: GObject.ParamSpec) => void;
            'notify::hexpand-set': (pspec: GObject.ParamSpec) => void;
            'notify::is-focus': (pspec: GObject.ParamSpec) => void;
            'notify::margin': (pspec: GObject.ParamSpec) => void;
            'notify::margin-bottom': (pspec: GObject.ParamSpec) => void;
            'notify::margin-end': (pspec: GObject.ParamSpec) => void;
            'notify::margin-left': (pspec: GObject.ParamSpec) => void;
            'notify::margin-right': (pspec: GObject.ParamSpec) => void;
            'notify::margin-start': (pspec: GObject.ParamSpec) => void;
            'notify::margin-top': (pspec: GObject.ParamSpec) => void;
            'notify::name': (pspec: GObject.ParamSpec) => void;
            'notify::no-show-all': (pspec: GObject.ParamSpec) => void;
            'notify::opacity': (pspec: GObject.ParamSpec) => void;
            'notify::parent': (pspec: GObject.ParamSpec) => void;
            'notify::receives-default': (pspec: GObject.ParamSpec) => void;
            'notify::scale-factor': (pspec: GObject.ParamSpec) => void;
            'notify::sensitive': (pspec: GObject.ParamSpec) => void;
            'notify::style': (pspec: GObject.ParamSpec) => void;
            'notify::tooltip-markup': (pspec: GObject.ParamSpec) => void;
            'notify::tooltip-text': (pspec: GObject.ParamSpec) => void;
            'notify::valign': (pspec: GObject.ParamSpec) => void;
            'notify::vexpand': (pspec: GObject.ParamSpec) => void;
            'notify::vexpand-set': (pspec: GObject.ParamSpec) => void;
            'notify::visible': (pspec: GObject.ParamSpec) => void;
            'notify::width-request': (pspec: GObject.ParamSpec) => void;
            'notify::window': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends Gtk.Grid.ConstructorProps {
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
        }
    }

    class ModeSwitch extends Gtk.Grid {
        static $gtype: GObject.GType<ModeSwitch>;

        // Properties

        get active(): boolean;
        set active(val: boolean);
        get primary_icon_gicon(): Gio.Icon;
        set primary_icon_gicon(val: Gio.Icon);
        get primaryIconGicon(): Gio.Icon;
        set primaryIconGicon(val: Gio.Icon);
        get primary_icon_name(): string;
        set primary_icon_name(val: string);
        get primaryIconName(): string;
        set primaryIconName(val: string);
        get primary_icon_tooltip_text(): string;
        set primary_icon_tooltip_text(val: string);
        get primaryIconTooltipText(): string;
        set primaryIconTooltipText(val: string);
        get secondary_icon_gicon(): Gio.Icon;
        set secondary_icon_gicon(val: Gio.Icon);
        get secondaryIconGicon(): Gio.Icon;
        set secondaryIconGicon(val: Gio.Icon);
        get secondary_icon_name(): string;
        set secondary_icon_name(val: string);
        get secondaryIconName(): string;
        set secondaryIconName(val: string);
        get secondary_icon_tooltip_text(): string;
        set secondary_icon_tooltip_text(val: string);
        get secondaryIconTooltipText(): string;
        set secondaryIconTooltipText(val: string);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: ModeSwitch.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<ModeSwitch.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](primary_icon_gicon: Gio.Icon, secondary_icon_gicon: Gio.Icon): ModeSwitch;
        // Conflicted with Gtk.Grid.new

        static ['new'](...args: never[]): any;

        static from_icon_name(primary_icon_name: string, secondary_icon_name: string): ModeSwitch;

        // Signals

        connect<K extends keyof ModeSwitch.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, ModeSwitch.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof ModeSwitch.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, ModeSwitch.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof ModeSwitch.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<ModeSwitch.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

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

    namespace SeekBar {
        // Signal signatures
        interface SignalSignatures extends Gtk.Grid.SignalSignatures {
            'notify::playback-duration': (pspec: GObject.ParamSpec) => void;
            'notify::playback-progress': (pspec: GObject.ParamSpec) => void;
            'notify::is-grabbing': (pspec: GObject.ParamSpec) => void;
            'notify::is-hovering': (pspec: GObject.ParamSpec) => void;
            'notify::progression-label': (pspec: GObject.ParamSpec) => void;
            'notify::duration-label': (pspec: GObject.ParamSpec) => void;
            'notify::scale': (pspec: GObject.ParamSpec) => void;
            'notify::baseline-row': (pspec: GObject.ParamSpec) => void;
            'notify::column-homogeneous': (pspec: GObject.ParamSpec) => void;
            'notify::column-spacing': (pspec: GObject.ParamSpec) => void;
            'notify::row-homogeneous': (pspec: GObject.ParamSpec) => void;
            'notify::row-spacing': (pspec: GObject.ParamSpec) => void;
            'notify::border-width': (pspec: GObject.ParamSpec) => void;
            'notify::child': (pspec: GObject.ParamSpec) => void;
            'notify::resize-mode': (pspec: GObject.ParamSpec) => void;
            'notify::app-paintable': (pspec: GObject.ParamSpec) => void;
            'notify::can-default': (pspec: GObject.ParamSpec) => void;
            'notify::can-focus': (pspec: GObject.ParamSpec) => void;
            'notify::composite-child': (pspec: GObject.ParamSpec) => void;
            'notify::double-buffered': (pspec: GObject.ParamSpec) => void;
            'notify::events': (pspec: GObject.ParamSpec) => void;
            'notify::expand': (pspec: GObject.ParamSpec) => void;
            'notify::focus-on-click': (pspec: GObject.ParamSpec) => void;
            'notify::halign': (pspec: GObject.ParamSpec) => void;
            'notify::has-default': (pspec: GObject.ParamSpec) => void;
            'notify::has-focus': (pspec: GObject.ParamSpec) => void;
            'notify::has-tooltip': (pspec: GObject.ParamSpec) => void;
            'notify::height-request': (pspec: GObject.ParamSpec) => void;
            'notify::hexpand': (pspec: GObject.ParamSpec) => void;
            'notify::hexpand-set': (pspec: GObject.ParamSpec) => void;
            'notify::is-focus': (pspec: GObject.ParamSpec) => void;
            'notify::margin': (pspec: GObject.ParamSpec) => void;
            'notify::margin-bottom': (pspec: GObject.ParamSpec) => void;
            'notify::margin-end': (pspec: GObject.ParamSpec) => void;
            'notify::margin-left': (pspec: GObject.ParamSpec) => void;
            'notify::margin-right': (pspec: GObject.ParamSpec) => void;
            'notify::margin-start': (pspec: GObject.ParamSpec) => void;
            'notify::margin-top': (pspec: GObject.ParamSpec) => void;
            'notify::name': (pspec: GObject.ParamSpec) => void;
            'notify::no-show-all': (pspec: GObject.ParamSpec) => void;
            'notify::opacity': (pspec: GObject.ParamSpec) => void;
            'notify::parent': (pspec: GObject.ParamSpec) => void;
            'notify::receives-default': (pspec: GObject.ParamSpec) => void;
            'notify::scale-factor': (pspec: GObject.ParamSpec) => void;
            'notify::sensitive': (pspec: GObject.ParamSpec) => void;
            'notify::style': (pspec: GObject.ParamSpec) => void;
            'notify::tooltip-markup': (pspec: GObject.ParamSpec) => void;
            'notify::tooltip-text': (pspec: GObject.ParamSpec) => void;
            'notify::valign': (pspec: GObject.ParamSpec) => void;
            'notify::vexpand': (pspec: GObject.ParamSpec) => void;
            'notify::vexpand-set': (pspec: GObject.ParamSpec) => void;
            'notify::visible': (pspec: GObject.ParamSpec) => void;
            'notify::width-request': (pspec: GObject.ParamSpec) => void;
            'notify::window': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends Gtk.Grid.ConstructorProps {
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
        }
    }

    class SeekBar extends Gtk.Grid {
        static $gtype: GObject.GType<SeekBar>;

        // Properties

        get playback_duration(): number;
        set playback_duration(val: number);
        get playbackDuration(): number;
        set playbackDuration(val: number);
        get playback_progress(): number;
        set playback_progress(val: number);
        get playbackProgress(): number;
        set playbackProgress(val: number);
        get is_grabbing(): boolean;
        set is_grabbing(val: boolean);
        get isGrabbing(): boolean;
        set isGrabbing(val: boolean);
        get is_hovering(): boolean;
        set is_hovering(val: boolean);
        get isHovering(): boolean;
        set isHovering(val: boolean);
        get progression_label(): Gtk.Label;
        set progression_label(val: Gtk.Label);
        get progressionLabel(): Gtk.Label;
        set progressionLabel(val: Gtk.Label);
        get duration_label(): Gtk.Label;
        set duration_label(val: Gtk.Label);
        get durationLabel(): Gtk.Label;
        set durationLabel(val: Gtk.Label);
        get scale(): Gtk.Scale;
        set scale(val: Gtk.Scale);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: SeekBar.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<SeekBar.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](playback_duration: number): SeekBar;
        // Conflicted with Gtk.Grid.new

        static ['new'](...args: never[]): any;

        // Signals

        connect<K extends keyof SeekBar.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, SeekBar.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof SeekBar.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, SeekBar.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof SeekBar.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<SeekBar.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

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

    namespace SettingsSidebar {
        // Signal signatures
        interface SignalSignatures extends Gtk.ScrolledWindow.SignalSignatures {
            'notify::stack': (pspec: GObject.ParamSpec) => void;
            'notify::visible-child-name': (pspec: GObject.ParamSpec) => void;
            'notify::hadjustment': (pspec: GObject.ParamSpec) => void;
            'notify::hscrollbar-policy': (pspec: GObject.ParamSpec) => void;
            'notify::kinetic-scrolling': (pspec: GObject.ParamSpec) => void;
            'notify::max-content-height': (pspec: GObject.ParamSpec) => void;
            'notify::max-content-width': (pspec: GObject.ParamSpec) => void;
            'notify::min-content-height': (pspec: GObject.ParamSpec) => void;
            'notify::min-content-width': (pspec: GObject.ParamSpec) => void;
            'notify::overlay-scrolling': (pspec: GObject.ParamSpec) => void;
            'notify::propagate-natural-height': (pspec: GObject.ParamSpec) => void;
            'notify::propagate-natural-width': (pspec: GObject.ParamSpec) => void;
            'notify::shadow-type': (pspec: GObject.ParamSpec) => void;
            'notify::vadjustment': (pspec: GObject.ParamSpec) => void;
            'notify::vscrollbar-policy': (pspec: GObject.ParamSpec) => void;
            'notify::window-placement': (pspec: GObject.ParamSpec) => void;
            'notify::window-placement-set': (pspec: GObject.ParamSpec) => void;
            'notify::border-width': (pspec: GObject.ParamSpec) => void;
            'notify::child': (pspec: GObject.ParamSpec) => void;
            'notify::resize-mode': (pspec: GObject.ParamSpec) => void;
            'notify::app-paintable': (pspec: GObject.ParamSpec) => void;
            'notify::can-default': (pspec: GObject.ParamSpec) => void;
            'notify::can-focus': (pspec: GObject.ParamSpec) => void;
            'notify::composite-child': (pspec: GObject.ParamSpec) => void;
            'notify::double-buffered': (pspec: GObject.ParamSpec) => void;
            'notify::events': (pspec: GObject.ParamSpec) => void;
            'notify::expand': (pspec: GObject.ParamSpec) => void;
            'notify::focus-on-click': (pspec: GObject.ParamSpec) => void;
            'notify::halign': (pspec: GObject.ParamSpec) => void;
            'notify::has-default': (pspec: GObject.ParamSpec) => void;
            'notify::has-focus': (pspec: GObject.ParamSpec) => void;
            'notify::has-tooltip': (pspec: GObject.ParamSpec) => void;
            'notify::height-request': (pspec: GObject.ParamSpec) => void;
            'notify::hexpand': (pspec: GObject.ParamSpec) => void;
            'notify::hexpand-set': (pspec: GObject.ParamSpec) => void;
            'notify::is-focus': (pspec: GObject.ParamSpec) => void;
            'notify::margin': (pspec: GObject.ParamSpec) => void;
            'notify::margin-bottom': (pspec: GObject.ParamSpec) => void;
            'notify::margin-end': (pspec: GObject.ParamSpec) => void;
            'notify::margin-left': (pspec: GObject.ParamSpec) => void;
            'notify::margin-right': (pspec: GObject.ParamSpec) => void;
            'notify::margin-start': (pspec: GObject.ParamSpec) => void;
            'notify::margin-top': (pspec: GObject.ParamSpec) => void;
            'notify::name': (pspec: GObject.ParamSpec) => void;
            'notify::no-show-all': (pspec: GObject.ParamSpec) => void;
            'notify::opacity': (pspec: GObject.ParamSpec) => void;
            'notify::parent': (pspec: GObject.ParamSpec) => void;
            'notify::receives-default': (pspec: GObject.ParamSpec) => void;
            'notify::scale-factor': (pspec: GObject.ParamSpec) => void;
            'notify::sensitive': (pspec: GObject.ParamSpec) => void;
            'notify::style': (pspec: GObject.ParamSpec) => void;
            'notify::tooltip-markup': (pspec: GObject.ParamSpec) => void;
            'notify::tooltip-text': (pspec: GObject.ParamSpec) => void;
            'notify::valign': (pspec: GObject.ParamSpec) => void;
            'notify::vexpand': (pspec: GObject.ParamSpec) => void;
            'notify::vexpand-set': (pspec: GObject.ParamSpec) => void;
            'notify::visible': (pspec: GObject.ParamSpec) => void;
            'notify::width-request': (pspec: GObject.ParamSpec) => void;
            'notify::window': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends Gtk.ScrolledWindow.ConstructorProps {
            stack: Gtk.Stack;
            visible_child_name: string;
            visibleChildName: string;
        }
    }

    class SettingsSidebar extends Gtk.ScrolledWindow {
        static $gtype: GObject.GType<SettingsSidebar>;

        // Properties

        get stack(): Gtk.Stack;
        get visible_child_name(): string;
        set visible_child_name(val: string);
        get visibleChildName(): string;
        set visibleChildName(val: string);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: SettingsSidebar.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<SettingsSidebar.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](stack: Gtk.Stack): SettingsSidebar;
        // Conflicted with Gtk.ScrolledWindow.new

        static ['new'](...args: never[]): any;

        // Signals

        connect<K extends keyof SettingsSidebar.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, SettingsSidebar.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof SettingsSidebar.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, SettingsSidebar.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof SettingsSidebar.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<SettingsSidebar.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        get_stack(): Gtk.Stack;
        get_visible_child_name(): string | null;
        set_visible_child_name(value?: string | null): void;
    }

    namespace Settings {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            'notify::prefers-color-scheme': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            prefers_color_scheme: SettingsColorScheme;
            prefersColorScheme: SettingsColorScheme;
        }
    }

    class Settings extends GObject.Object {
        static $gtype: GObject.GType<Settings>;

        // Properties

        get prefers_color_scheme(): SettingsColorScheme;
        set prefers_color_scheme(val: SettingsColorScheme);
        get prefersColorScheme(): SettingsColorScheme;
        set prefersColorScheme(val: SettingsColorScheme);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Settings.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<Settings.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        connect<K extends keyof Settings.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Settings.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof Settings.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Settings.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof Settings.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Settings.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Static methods

        static get_default(): Settings;

        // Methods

        get_prefers_color_scheme(): SettingsColorScheme;
    }

    namespace SwitchModelButton {
        // Signal signatures
        interface SignalSignatures extends Gtk.ToggleButton.SignalSignatures {
            'notify::text': (pspec: GObject.ParamSpec) => void;
            'notify::description': (pspec: GObject.ParamSpec) => void;
            'notify::active': (pspec: GObject.ParamSpec) => void;
            'notify::draw-indicator': (pspec: GObject.ParamSpec) => void;
            'notify::inconsistent': (pspec: GObject.ParamSpec) => void;
            'notify::always-show-image': (pspec: GObject.ParamSpec) => void;
            'notify::image': (pspec: GObject.ParamSpec) => void;
            'notify::image-position': (pspec: GObject.ParamSpec) => void;
            'notify::label': (pspec: GObject.ParamSpec) => void;
            'notify::relief': (pspec: GObject.ParamSpec) => void;
            'notify::use-stock': (pspec: GObject.ParamSpec) => void;
            'notify::use-underline': (pspec: GObject.ParamSpec) => void;
            'notify::xalign': (pspec: GObject.ParamSpec) => void;
            'notify::yalign': (pspec: GObject.ParamSpec) => void;
            'notify::border-width': (pspec: GObject.ParamSpec) => void;
            'notify::child': (pspec: GObject.ParamSpec) => void;
            'notify::resize-mode': (pspec: GObject.ParamSpec) => void;
            'notify::app-paintable': (pspec: GObject.ParamSpec) => void;
            'notify::can-default': (pspec: GObject.ParamSpec) => void;
            'notify::can-focus': (pspec: GObject.ParamSpec) => void;
            'notify::composite-child': (pspec: GObject.ParamSpec) => void;
            'notify::double-buffered': (pspec: GObject.ParamSpec) => void;
            'notify::events': (pspec: GObject.ParamSpec) => void;
            'notify::expand': (pspec: GObject.ParamSpec) => void;
            'notify::focus-on-click': (pspec: GObject.ParamSpec) => void;
            'notify::halign': (pspec: GObject.ParamSpec) => void;
            'notify::has-default': (pspec: GObject.ParamSpec) => void;
            'notify::has-focus': (pspec: GObject.ParamSpec) => void;
            'notify::has-tooltip': (pspec: GObject.ParamSpec) => void;
            'notify::height-request': (pspec: GObject.ParamSpec) => void;
            'notify::hexpand': (pspec: GObject.ParamSpec) => void;
            'notify::hexpand-set': (pspec: GObject.ParamSpec) => void;
            'notify::is-focus': (pspec: GObject.ParamSpec) => void;
            'notify::margin': (pspec: GObject.ParamSpec) => void;
            'notify::margin-bottom': (pspec: GObject.ParamSpec) => void;
            'notify::margin-end': (pspec: GObject.ParamSpec) => void;
            'notify::margin-left': (pspec: GObject.ParamSpec) => void;
            'notify::margin-right': (pspec: GObject.ParamSpec) => void;
            'notify::margin-start': (pspec: GObject.ParamSpec) => void;
            'notify::margin-top': (pspec: GObject.ParamSpec) => void;
            'notify::name': (pspec: GObject.ParamSpec) => void;
            'notify::no-show-all': (pspec: GObject.ParamSpec) => void;
            'notify::opacity': (pspec: GObject.ParamSpec) => void;
            'notify::parent': (pspec: GObject.ParamSpec) => void;
            'notify::receives-default': (pspec: GObject.ParamSpec) => void;
            'notify::scale-factor': (pspec: GObject.ParamSpec) => void;
            'notify::sensitive': (pspec: GObject.ParamSpec) => void;
            'notify::style': (pspec: GObject.ParamSpec) => void;
            'notify::tooltip-markup': (pspec: GObject.ParamSpec) => void;
            'notify::tooltip-text': (pspec: GObject.ParamSpec) => void;
            'notify::valign': (pspec: GObject.ParamSpec) => void;
            'notify::vexpand': (pspec: GObject.ParamSpec) => void;
            'notify::vexpand-set': (pspec: GObject.ParamSpec) => void;
            'notify::visible': (pspec: GObject.ParamSpec) => void;
            'notify::width-request': (pspec: GObject.ParamSpec) => void;
            'notify::window': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends Gtk.ToggleButton.ConstructorProps {
            text: string;
            description: string;
        }
    }

    class SwitchModelButton extends Gtk.ToggleButton {
        static $gtype: GObject.GType<SwitchModelButton>;

        // Properties

        get text(): string;
        set text(val: string);
        get description(): string;
        set description(val: string);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: SwitchModelButton.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<SwitchModelButton.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](text: string): SwitchModelButton;
        // Conflicted with Gtk.ToggleButton.new

        static ['new'](...args: never[]): any;

        // Signals

        connect<K extends keyof SwitchModelButton.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, SwitchModelButton.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof SwitchModelButton.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, SwitchModelButton.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof SwitchModelButton.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<SwitchModelButton.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        get_text(): string;
        set_text(value: string): void;
        get_description(): string | null;
        set_description(value?: string | null): void;
    }

    namespace ValidatedEntry {
        // Signal signatures
        interface SignalSignatures extends Gtk.Entry.SignalSignatures {
            'notify::is-valid': (pspec: GObject.ParamSpec) => void;
            'notify::min-length': (pspec: GObject.ParamSpec) => void;
            'notify::regex': (pspec: GObject.ParamSpec) => void;
            'notify::activates-default': (pspec: GObject.ParamSpec) => void;
            'notify::attributes': (pspec: GObject.ParamSpec) => void;
            'notify::buffer': (pspec: GObject.ParamSpec) => void;
            'notify::caps-lock-warning': (pspec: GObject.ParamSpec) => void;
            'notify::completion': (pspec: GObject.ParamSpec) => void;
            'notify::cursor-position': (pspec: GObject.ParamSpec) => void;
            'notify::editable': (pspec: GObject.ParamSpec) => void;
            'notify::enable-emoji-completion': (pspec: GObject.ParamSpec) => void;
            'notify::has-frame': (pspec: GObject.ParamSpec) => void;
            'notify::im-module': (pspec: GObject.ParamSpec) => void;
            'notify::inner-border': (pspec: GObject.ParamSpec) => void;
            'notify::input-hints': (pspec: GObject.ParamSpec) => void;
            'notify::input-purpose': (pspec: GObject.ParamSpec) => void;
            'notify::invisible-char': (pspec: GObject.ParamSpec) => void;
            'notify::invisible-char-set': (pspec: GObject.ParamSpec) => void;
            'notify::max-length': (pspec: GObject.ParamSpec) => void;
            'notify::max-width-chars': (pspec: GObject.ParamSpec) => void;
            'notify::overwrite-mode': (pspec: GObject.ParamSpec) => void;
            'notify::placeholder-text': (pspec: GObject.ParamSpec) => void;
            'notify::populate-all': (pspec: GObject.ParamSpec) => void;
            'notify::primary-icon-activatable': (pspec: GObject.ParamSpec) => void;
            'notify::primary-icon-gicon': (pspec: GObject.ParamSpec) => void;
            'notify::primary-icon-name': (pspec: GObject.ParamSpec) => void;
            'notify::primary-icon-pixbuf': (pspec: GObject.ParamSpec) => void;
            'notify::primary-icon-sensitive': (pspec: GObject.ParamSpec) => void;
            'notify::primary-icon-stock': (pspec: GObject.ParamSpec) => void;
            'notify::primary-icon-storage-type': (pspec: GObject.ParamSpec) => void;
            'notify::primary-icon-tooltip-markup': (pspec: GObject.ParamSpec) => void;
            'notify::primary-icon-tooltip-text': (pspec: GObject.ParamSpec) => void;
            'notify::progress-fraction': (pspec: GObject.ParamSpec) => void;
            'notify::progress-pulse-step': (pspec: GObject.ParamSpec) => void;
            'notify::scroll-offset': (pspec: GObject.ParamSpec) => void;
            'notify::secondary-icon-activatable': (pspec: GObject.ParamSpec) => void;
            'notify::secondary-icon-gicon': (pspec: GObject.ParamSpec) => void;
            'notify::secondary-icon-name': (pspec: GObject.ParamSpec) => void;
            'notify::secondary-icon-pixbuf': (pspec: GObject.ParamSpec) => void;
            'notify::secondary-icon-sensitive': (pspec: GObject.ParamSpec) => void;
            'notify::secondary-icon-stock': (pspec: GObject.ParamSpec) => void;
            'notify::secondary-icon-storage-type': (pspec: GObject.ParamSpec) => void;
            'notify::secondary-icon-tooltip-markup': (pspec: GObject.ParamSpec) => void;
            'notify::secondary-icon-tooltip-text': (pspec: GObject.ParamSpec) => void;
            'notify::selection-bound': (pspec: GObject.ParamSpec) => void;
            'notify::shadow-type': (pspec: GObject.ParamSpec) => void;
            'notify::show-emoji-icon': (pspec: GObject.ParamSpec) => void;
            'notify::tabs': (pspec: GObject.ParamSpec) => void;
            'notify::text': (pspec: GObject.ParamSpec) => void;
            'notify::text-length': (pspec: GObject.ParamSpec) => void;
            'notify::truncate-multiline': (pspec: GObject.ParamSpec) => void;
            'notify::visibility': (pspec: GObject.ParamSpec) => void;
            'notify::width-chars': (pspec: GObject.ParamSpec) => void;
            'notify::xalign': (pspec: GObject.ParamSpec) => void;
            'notify::app-paintable': (pspec: GObject.ParamSpec) => void;
            'notify::can-default': (pspec: GObject.ParamSpec) => void;
            'notify::can-focus': (pspec: GObject.ParamSpec) => void;
            'notify::composite-child': (pspec: GObject.ParamSpec) => void;
            'notify::double-buffered': (pspec: GObject.ParamSpec) => void;
            'notify::events': (pspec: GObject.ParamSpec) => void;
            'notify::expand': (pspec: GObject.ParamSpec) => void;
            'notify::focus-on-click': (pspec: GObject.ParamSpec) => void;
            'notify::halign': (pspec: GObject.ParamSpec) => void;
            'notify::has-default': (pspec: GObject.ParamSpec) => void;
            'notify::has-focus': (pspec: GObject.ParamSpec) => void;
            'notify::has-tooltip': (pspec: GObject.ParamSpec) => void;
            'notify::height-request': (pspec: GObject.ParamSpec) => void;
            'notify::hexpand': (pspec: GObject.ParamSpec) => void;
            'notify::hexpand-set': (pspec: GObject.ParamSpec) => void;
            'notify::is-focus': (pspec: GObject.ParamSpec) => void;
            'notify::margin': (pspec: GObject.ParamSpec) => void;
            'notify::margin-bottom': (pspec: GObject.ParamSpec) => void;
            'notify::margin-end': (pspec: GObject.ParamSpec) => void;
            'notify::margin-left': (pspec: GObject.ParamSpec) => void;
            'notify::margin-right': (pspec: GObject.ParamSpec) => void;
            'notify::margin-start': (pspec: GObject.ParamSpec) => void;
            'notify::margin-top': (pspec: GObject.ParamSpec) => void;
            'notify::name': (pspec: GObject.ParamSpec) => void;
            'notify::no-show-all': (pspec: GObject.ParamSpec) => void;
            'notify::opacity': (pspec: GObject.ParamSpec) => void;
            'notify::parent': (pspec: GObject.ParamSpec) => void;
            'notify::receives-default': (pspec: GObject.ParamSpec) => void;
            'notify::scale-factor': (pspec: GObject.ParamSpec) => void;
            'notify::sensitive': (pspec: GObject.ParamSpec) => void;
            'notify::style': (pspec: GObject.ParamSpec) => void;
            'notify::tooltip-markup': (pspec: GObject.ParamSpec) => void;
            'notify::tooltip-text': (pspec: GObject.ParamSpec) => void;
            'notify::valign': (pspec: GObject.ParamSpec) => void;
            'notify::vexpand': (pspec: GObject.ParamSpec) => void;
            'notify::vexpand-set': (pspec: GObject.ParamSpec) => void;
            'notify::visible': (pspec: GObject.ParamSpec) => void;
            'notify::width-request': (pspec: GObject.ParamSpec) => void;
            'notify::window': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends Gtk.Entry.ConstructorProps {
            is_valid: boolean;
            isValid: boolean;
            min_length: number;
            minLength: number;
            regex: GLib.Regex;
        }
    }

    class ValidatedEntry extends Gtk.Entry {
        static $gtype: GObject.GType<ValidatedEntry>;

        // Properties

        get is_valid(): boolean;
        set is_valid(val: boolean);
        get isValid(): boolean;
        set isValid(val: boolean);
        get min_length(): number;
        set min_length(val: number);
        get minLength(): number;
        set minLength(val: number);
        get regex(): GLib.Regex;
        set regex(val: GLib.Regex);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: ValidatedEntry.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<ValidatedEntry.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static from_regex(regex_arg: GLib.Regex): ValidatedEntry;

        static ['new'](): ValidatedEntry;

        // Signals

        connect<K extends keyof ValidatedEntry.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, ValidatedEntry.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof ValidatedEntry.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, ValidatedEntry.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof ValidatedEntry.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<ValidatedEntry.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        get_is_valid(): boolean;
        set_is_valid(value: boolean): void;
        get_min_length(): number;
        set_min_length(value: number): void;
        get_regex(): GLib.Regex;
        set_regex(value: GLib.Regex): void;
    }

    type DrawingBufferSurfaceClass = typeof DrawingBufferSurface;
    abstract class DrawingBufferSurfacePrivate {
        static $gtype: GObject.GType<DrawingBufferSurfacePrivate>;

        // Constructors

        _init(...args: any[]): void;
    }

    type DrawingColorClass = typeof DrawingColor;
    abstract class DrawingColorPrivate {
        static $gtype: GObject.GType<DrawingColorPrivate>;

        // Constructors

        _init(...args: any[]): void;
    }

    type DrawingUtilitiesClass = typeof DrawingUtilities;
    abstract class DrawingUtilitiesPrivate {
        static $gtype: GObject.GType<DrawingUtilitiesPrivate>;

        // Constructors

        _init(...args: any[]): void;
    }

    type ServicesContractorProxyClass = typeof ServicesContractorProxy;
    abstract class ServicesContractorProxyPrivate {
        static $gtype: GObject.GType<ServicesContractorProxyPrivate>;

        // Constructors

        _init(...args: any[]): void;
    }

    type ServicesIconFactoryClass = typeof ServicesIconFactory;
    abstract class ServicesIconFactoryPrivate {
        static $gtype: GObject.GType<ServicesIconFactoryPrivate>;

        // Constructors

        _init(...args: any[]): void;
    }

    type ServicesLoggerClass = typeof ServicesLogger;
    abstract class ServicesLoggerPrivate {
        static $gtype: GObject.GType<ServicesLoggerPrivate>;

        // Constructors

        _init(...args: any[]): void;
    }

    type ServicesPathsClass = typeof ServicesPaths;
    abstract class ServicesPathsPrivate {
        static $gtype: GObject.GType<ServicesPathsPrivate>;

        // Constructors

        _init(...args: any[]): void;
    }

    type ServicesSettingsClass = typeof ServicesSettings;
    abstract class ServicesSettingsPrivate {
        static $gtype: GObject.GType<ServicesSettingsPrivate>;

        // Constructors

        _init(...args: any[]): void;
    }

    type ServicesSimpleCommandClass = typeof ServicesSimpleCommand;
    abstract class ServicesSimpleCommandPrivate {
        static $gtype: GObject.GType<ServicesSimpleCommandPrivate>;

        // Constructors

        _init(...args: any[]): void;
    }

    type ServicesSystemClass = typeof ServicesSystem;
    abstract class ServicesSystemPrivate {
        static $gtype: GObject.GType<ServicesSystemPrivate>;

        // Constructors

        _init(...args: any[]): void;
    }

    type ServicesContractIface = typeof ServicesContract;
    type ServicesSettingsSerializableIface = typeof ServicesSettingsSerializable;
    type WidgetsAlertViewClass = typeof WidgetsAlertView;
    abstract class WidgetsAlertViewPrivate {
        static $gtype: GObject.GType<WidgetsAlertViewPrivate>;

        // Constructors

        _init(...args: any[]): void;
    }

    type WidgetsAvatarClass = typeof WidgetsAvatar;
    abstract class WidgetsAvatarPrivate {
        static $gtype: GObject.GType<WidgetsAvatarPrivate>;

        // Constructors

        _init(...args: any[]): void;
    }

    type WidgetsCellRendererBadgeClass = typeof WidgetsCellRendererBadge;
    abstract class WidgetsCellRendererBadgePrivate {
        static $gtype: GObject.GType<WidgetsCellRendererBadgePrivate>;

        // Constructors

        _init(...args: any[]): void;
    }

    type WidgetsCellRendererExpanderClass = typeof WidgetsCellRendererExpander;
    abstract class WidgetsCellRendererExpanderPrivate {
        static $gtype: GObject.GType<WidgetsCellRendererExpanderPrivate>;

        // Constructors

        _init(...args: any[]): void;
    }

    type WidgetsCollapsiblePanedClass = typeof WidgetsCollapsiblePaned;
    abstract class WidgetsCollapsiblePanedPrivate {
        static $gtype: GObject.GType<WidgetsCollapsiblePanedPrivate>;

        // Constructors

        _init(...args: any[]): void;
    }

    type WidgetsCompositedWindowClass = typeof WidgetsCompositedWindow;
    abstract class WidgetsCompositedWindowPrivate {
        static $gtype: GObject.GType<WidgetsCompositedWindowPrivate>;

        // Constructors

        _init(...args: any[]): void;
    }

    type WidgetsDatePickerClass = typeof WidgetsDatePicker;
    abstract class WidgetsDatePickerPrivate {
        static $gtype: GObject.GType<WidgetsDatePickerPrivate>;

        // Constructors

        _init(...args: any[]): void;
    }

    type WidgetsTabClass = typeof WidgetsTab;
    abstract class WidgetsTabPrivate {
        static $gtype: GObject.GType<WidgetsTabPrivate>;

        // Constructors

        _init(...args: any[]): void;
    }

    type WidgetsDynamicNotebookClass = typeof WidgetsDynamicNotebook;
    abstract class WidgetsDynamicNotebookPrivate {
        static $gtype: GObject.GType<WidgetsDynamicNotebookPrivate>;

        // Constructors

        _init(...args: any[]): void;
    }

    type WidgetsModeButtonClass = typeof WidgetsModeButton;
    abstract class WidgetsModeButtonPrivate {
        static $gtype: GObject.GType<WidgetsModeButtonPrivate>;

        // Constructors

        _init(...args: any[]): void;
    }

    type WidgetsOverlayBarClass = typeof WidgetsOverlayBar;
    abstract class WidgetsOverlayBarPrivate {
        static $gtype: GObject.GType<WidgetsOverlayBarPrivate>;

        // Constructors

        _init(...args: any[]): void;
    }

    type WidgetsSourceListClass = typeof WidgetsSourceList;
    abstract class WidgetsSourceListPrivate {
        static $gtype: GObject.GType<WidgetsSourceListPrivate>;

        // Constructors

        _init(...args: any[]): void;
    }

    type WidgetsSourceListItemClass = typeof WidgetsSourceListItem;
    abstract class WidgetsSourceListItemPrivate {
        static $gtype: GObject.GType<WidgetsSourceListItemPrivate>;

        // Constructors

        _init(...args: any[]): void;
    }

    type WidgetsSourceListExpandableItemClass = typeof WidgetsSourceListExpandableItem;
    abstract class WidgetsSourceListExpandableItemPrivate {
        static $gtype: GObject.GType<WidgetsSourceListExpandableItemPrivate>;

        // Constructors

        _init(...args: any[]): void;
    }

    type WidgetsStorageBarClass = typeof WidgetsStorageBar;
    abstract class WidgetsStorageBarPrivate {
        static $gtype: GObject.GType<WidgetsStorageBarPrivate>;

        // Constructors

        _init(...args: any[]): void;
    }

    type WidgetsTimePickerClass = typeof WidgetsTimePicker;
    abstract class WidgetsTimePickerPrivate {
        static $gtype: GObject.GType<WidgetsTimePickerPrivate>;

        // Constructors

        _init(...args: any[]): void;
    }

    type WidgetsToastClass = typeof WidgetsToast;
    abstract class WidgetsToastPrivate {
        static $gtype: GObject.GType<WidgetsToastPrivate>;

        // Constructors

        _init(...args: any[]): void;
    }

    type WidgetsWelcomeButtonClass = typeof WidgetsWelcomeButton;
    abstract class WidgetsWelcomeButtonPrivate {
        static $gtype: GObject.GType<WidgetsWelcomeButtonPrivate>;

        // Constructors

        _init(...args: any[]): void;
    }

    type WidgetsWelcomeClass = typeof WidgetsWelcome;
    abstract class WidgetsWelcomePrivate {
        static $gtype: GObject.GType<WidgetsWelcomePrivate>;

        // Constructors

        _init(...args: any[]): void;
    }

    type WidgetsSourceListSortableIface = typeof WidgetsSourceListSortable;
    type WidgetsSourceListDragSourceIface = typeof WidgetsSourceListDragSource;
    type WidgetsSourceListDragDestIface = typeof WidgetsSourceListDragDest;
    type ApplicationClass = typeof Application;
    abstract class ApplicationPrivate {
        static $gtype: GObject.GType<ApplicationPrivate>;

        // Constructors

        _init(...args: any[]): void;
    }

    type SettingsPageClass = typeof SettingsPage;
    abstract class SettingsPagePrivate {
        static $gtype: GObject.GType<SettingsPagePrivate>;

        // Constructors

        _init(...args: any[]): void;
    }

    type SimpleSettingsPageClass = typeof SimpleSettingsPage;
    abstract class SimpleSettingsPagePrivate {
        static $gtype: GObject.GType<SimpleSettingsPagePrivate>;

        // Constructors

        _init(...args: any[]): void;
    }

    type AccelLabelClass = typeof AccelLabel;
    abstract class AccelLabelPrivate {
        static $gtype: GObject.GType<AccelLabelPrivate>;

        // Constructors

        _init(...args: any[]): void;
    }

    type AsyncImageClass = typeof AsyncImage;
    abstract class AsyncImagePrivate {
        static $gtype: GObject.GType<AsyncImagePrivate>;

        // Constructors

        _init(...args: any[]): void;
    }

    type DialogClass = typeof Dialog;
    abstract class DialogPrivate {
        static $gtype: GObject.GType<DialogPrivate>;

        // Constructors

        _init(...args: any[]): void;
    }

    type HeaderLabelClass = typeof HeaderLabel;
    abstract class HeaderLabelPrivate {
        static $gtype: GObject.GType<HeaderLabelPrivate>;

        // Constructors

        _init(...args: any[]): void;
    }

    type HyperTextViewClass = typeof HyperTextView;
    abstract class HyperTextViewPrivate {
        static $gtype: GObject.GType<HyperTextViewPrivate>;

        // Constructors

        _init(...args: any[]): void;
    }

    type MessageDialogClass = typeof MessageDialog;
    abstract class MessageDialogPrivate {
        static $gtype: GObject.GType<MessageDialogPrivate>;

        // Constructors

        _init(...args: any[]): void;
    }

    type ModeSwitchClass = typeof ModeSwitch;
    abstract class ModeSwitchPrivate {
        static $gtype: GObject.GType<ModeSwitchPrivate>;

        // Constructors

        _init(...args: any[]): void;
    }

    type SeekBarClass = typeof SeekBar;
    abstract class SeekBarPrivate {
        static $gtype: GObject.GType<SeekBarPrivate>;

        // Constructors

        _init(...args: any[]): void;
    }

    type SettingsSidebarClass = typeof SettingsSidebar;
    abstract class SettingsSidebarPrivate {
        static $gtype: GObject.GType<SettingsSidebarPrivate>;

        // Constructors

        _init(...args: any[]): void;
    }

    type SettingsClass = typeof Settings;
    abstract class SettingsPrivate {
        static $gtype: GObject.GType<SettingsPrivate>;

        // Constructors

        _init(...args: any[]): void;
    }

    type SwitchModelButtonClass = typeof SwitchModelButton;
    abstract class SwitchModelButtonPrivate {
        static $gtype: GObject.GType<SwitchModelButtonPrivate>;

        // Constructors

        _init(...args: any[]): void;
    }

    type ValidatedEntryClass = typeof ValidatedEntry;
    abstract class ValidatedEntryPrivate {
        static $gtype: GObject.GType<ValidatedEntryPrivate>;

        // Constructors

        _init(...args: any[]): void;
    }

    namespace ServicesContract {
        /**
         * Interface for implementing ServicesContract.
         * Contains only the virtual methods that need to be implemented.
         */
        interface Interface {
            // Virtual methods

            vfunc_get_display_name(): string;
            vfunc_get_description(): string;
            vfunc_get_icon(): Gio.Icon;
            vfunc_execute_with_file(file: Gio.File): void;
            vfunc_execute_with_files(files: Gio.File[]): void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    export interface ServicesContractNamespace {
        $gtype: GObject.GType<ServicesContract>;
        prototype: ServicesContract;
    }
    interface ServicesContract extends GObject.Object, ServicesContract.Interface {
        // Methods

        get_display_name(): string;
        get_description(): string;
        get_icon(): Gio.Icon;
        execute_with_file(file: Gio.File): void;
        execute_with_files(files: Gio.File[]): void;
    }

    export const ServicesContract: ServicesContractNamespace & {
        new (): ServicesContract; // This allows `obj instanceof ServicesContract`
    };

    namespace ServicesSettingsSerializable {
        /**
         * Interface for implementing ServicesSettingsSerializable.
         * Contains only the virtual methods that need to be implemented.
         */
        interface Interface {
            // Virtual methods

            vfunc_settings_serialize(): string;
            vfunc_settings_deserialize(s: string): void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    export interface ServicesSettingsSerializableNamespace {
        $gtype: GObject.GType<ServicesSettingsSerializable>;
        prototype: ServicesSettingsSerializable;
    }
    interface ServicesSettingsSerializable extends GObject.Object, ServicesSettingsSerializable.Interface {
        // Methods

        settings_serialize(): string;
        settings_deserialize(s: string): void;
    }

    export const ServicesSettingsSerializable: ServicesSettingsSerializableNamespace & {
        new (): ServicesSettingsSerializable; // This allows `obj instanceof ServicesSettingsSerializable`
    };

    namespace WidgetsSourceListSortable {
        /**
         * Interface for implementing WidgetsSourceListSortable.
         * Contains only the virtual methods that need to be implemented.
         */
        interface Interface {
            // Virtual methods

            vfunc_allow_dnd_sorting(): boolean;
            vfunc_compare(a: WidgetsSourceListItem, b: WidgetsSourceListItem): number;
        }

        // Constructor properties interface

        interface ConstructorProps extends WidgetsSourceListExpandableItem.ConstructorProps {}
    }

    export interface WidgetsSourceListSortableNamespace {
        $gtype: GObject.GType<WidgetsSourceListSortable>;
        prototype: WidgetsSourceListSortable;
    }
    interface WidgetsSourceListSortable extends WidgetsSourceListExpandableItem, WidgetsSourceListSortable.Interface {
        // Methods

        allow_dnd_sorting(): boolean;
        compare(a: WidgetsSourceListItem, b: WidgetsSourceListItem): number;
    }

    export const WidgetsSourceListSortable: WidgetsSourceListSortableNamespace & {
        new (): WidgetsSourceListSortable; // This allows `obj instanceof WidgetsSourceListSortable`
    };

    namespace WidgetsSourceListDragSource {
        /**
         * Interface for implementing WidgetsSourceListDragSource.
         * Contains only the virtual methods that need to be implemented.
         */
        interface Interface {
            // Virtual methods

            vfunc_draggable(): boolean;
            vfunc_prepare_selection_data(selection_data: Gtk.SelectionData): void;
        }

        // Constructor properties interface

        interface ConstructorProps extends WidgetsSourceListItem.ConstructorProps {}
    }

    export interface WidgetsSourceListDragSourceNamespace {
        $gtype: GObject.GType<WidgetsSourceListDragSource>;
        prototype: WidgetsSourceListDragSource;
    }
    interface WidgetsSourceListDragSource extends WidgetsSourceListItem, WidgetsSourceListDragSource.Interface {
        // Methods

        draggable(): boolean;
        prepare_selection_data(selection_data: Gtk.SelectionData): void;
    }

    export const WidgetsSourceListDragSource: WidgetsSourceListDragSourceNamespace & {
        new (): WidgetsSourceListDragSource; // This allows `obj instanceof WidgetsSourceListDragSource`
    };

    namespace WidgetsSourceListDragDest {
        /**
         * Interface for implementing WidgetsSourceListDragDest.
         * Contains only the virtual methods that need to be implemented.
         */
        interface Interface {
            // Virtual methods

            vfunc_data_drop_possible(context: Gdk.DragContext, data: Gtk.SelectionData): boolean;
            vfunc_data_received(context: Gdk.DragContext, data: Gtk.SelectionData): Gdk.DragAction;
        }

        // Constructor properties interface

        interface ConstructorProps extends WidgetsSourceListItem.ConstructorProps {}
    }

    export interface WidgetsSourceListDragDestNamespace {
        $gtype: GObject.GType<WidgetsSourceListDragDest>;
        prototype: WidgetsSourceListDragDest;
    }
    interface WidgetsSourceListDragDest extends WidgetsSourceListItem, WidgetsSourceListDragDest.Interface {
        // Methods

        data_drop_possible(context: Gdk.DragContext, data: Gtk.SelectionData): boolean;
        data_received(context: Gdk.DragContext, data: Gtk.SelectionData): Gdk.DragAction;
    }

    export const WidgetsSourceListDragDest: WidgetsSourceListDragDestNamespace & {
        new (): WidgetsSourceListDragDest; // This allows `obj instanceof WidgetsSourceListDragDest`
    };

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
