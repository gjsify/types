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
import type Meta from '@girs/meta-15';
import type xlib from '@girs/xlib-2.0';
import type xfixes from '@girs/xfixes-4.0';
import type Mtk from '@girs/mtk-15';
import type Graphene from '@girs/graphene-1.0';
import type GObject from '@girs/gobject-2.0';
import type GLib from '@girs/glib-2.0';
import type Gio from '@girs/gio-2.0';
import type GModule from '@girs/gmodule-2.0';
import type GDesktopEnums from '@girs/gdesktopenums-3.0';
import type CoglPango from '@girs/coglpango-15';
import type PangoCairo from '@girs/pangocairo-1.0';
import type cairo from 'cairo';
import type Pango from '@girs/pango-1.0';
import type HarfBuzz from '@girs/harfbuzz-0.0';
import type freetype2 from '@girs/freetype2-2.0';
import type Cogl from '@girs/cogl-15';
import type GL from '@girs/gl-1.0';
import type Clutter from '@girs/clutter-15';
import type Atk from '@girs/atk-1.0';
import type GdkPixbuf from '@girs/gdkpixbuf-2.0';

export namespace St {
    /**
     * St-15
     */

    export namespace BackgroundSize {
        export const $gtype: GObject.GType<BackgroundSize>;
    }

    /**
     * @gir-type Enum
     */
    enum BackgroundSize {
        AUTO,
        CONTAIN,
        COVER,
        FIXED,
    }

    export namespace ClipboardType {
        export const $gtype: GObject.GType<ClipboardType>;
    }

    /**
     * @gir-type Enum
     */
    enum ClipboardType {
        PRIMARY,
        CLIPBOARD,
    }

    export namespace Corner {
        export const $gtype: GObject.GType<Corner>;
    }

    /**
     * Used to target a particular corner of a {@link St.ThemeNode} element.
     * @gir-type Enum
     */
    enum Corner {
        /**
         * The top-right corner.
         */
        TOPLEFT,
        /**
         * The top-right corner.
         */
        TOPRIGHT,
        /**
         * The bottom-right corner.
         */
        BOTTOMRIGHT,
        /**
         * The bottom-left corner.
         */
        BOTTOMLEFT,
    }

    export namespace DirectionType {
        export const $gtype: GObject.GType<DirectionType>;
    }

    /**
     * Enumeration for focus direction.
     * @gir-type Enum
     */
    enum DirectionType {
        /**
         * Move forward.
         */
        TAB_FORWARD,
        /**
         * Move backward.
         */
        TAB_BACKWARD,
        /**
         * Move up.
         */
        UP,
        /**
         * Move down.
         */
        DOWN,
        /**
         * Move left.
         */
        LEFT,
        /**
         * Move right.
         */
        RIGHT,
    }

    export namespace GradientType {
        export const $gtype: GObject.GType<GradientType>;
    }

    /**
     * Used to specify options when rendering gradients.
     * @gir-type Enum
     */
    enum GradientType {
        /**
         * No gradient.
         */
        NONE,
        /**
         * A vertical gradient.
         */
        VERTICAL,
        /**
         * A horizontal gradient.
         */
        HORIZONTAL,
        /**
         * Lookup the style requested in the icon name.
         */
        RADIAL,
    }

    export namespace IconStyle {
        export const $gtype: GObject.GType<IconStyle>;
    }

    /**
     * Used to specify options when looking up icons.
     * @gir-type Enum
     */
    enum IconStyle {
        /**
         * Lookup the style requested in the icon name.
         */
        REQUESTED,
        /**
         * Try to always load regular icons, even when symbolic
         *   icon names are given.
         */
        REGULAR,
        /**
         * Try to always load symbolic icons, even when regular
         *   icon names are given.
         */
        SYMBOLIC,
    }

    /**
     * Error codes for StIconTheme operations.
     * @gir-type Struct
     */
    class IconThemeError extends GLib.Error {
        static $gtype: GObject.GType<GLib.Error>;

        // Static fields

        /**
         * The icon specified does not exist in the theme
         */
        static NOT_FOUND: number;
        /**
         * An unspecified error occurred.
         */
        static FAILED: number;

        // Constructors

        constructor(options: { message: string; code: number });

        // Static methods

        static quark(): GLib.Quark;
    }

    export namespace PolicyType {
        export const $gtype: GObject.GType<PolicyType>;
    }

    /**
     * @gir-type Enum
     */
    enum PolicyType {
        ALWAYS,
        AUTOMATIC,
        NEVER,
        EXTERNAL,
    }

    export namespace Side {
        export const $gtype: GObject.GType<Side>;
    }

    /**
     * Used to target a particular side of a {@link St.ThemeNode} element.
     * @gir-type Enum
     */
    enum Side {
        /**
         * The top side.
         */
        TOP,
        /**
         * The right side.
         */
        RIGHT,
        /**
         * The bottom side.
         */
        BOTTOM,
        /**
         * The left side.
         */
        LEFT,
    }

    export namespace SystemAccentColor {
        export const $gtype: GObject.GType<SystemAccentColor>;
    }

    /**
     * @gir-type Enum
     */
    enum SystemAccentColor {
        BLUE,
        TEAL,
        GREEN,
        YELLOW,
        ORANGE,
        RED,
        PINK,
        PURPLE,
        SLATE,
    }

    export namespace SystemColorScheme {
        export const $gtype: GObject.GType<SystemColorScheme>;
    }

    /**
     * @gir-type Enum
     */
    enum SystemColorScheme {
        DEFAULT,
        PREFER_DARK,
        PREFER_LIGHT,
    }

    export namespace TextAlign {
        export const $gtype: GObject.GType<TextAlign>;
    }

    /**
     * Used to align text in a label.
     * @gir-type Enum
     */
    enum TextAlign {
        /**
         * Text is aligned at the beginning of the label.
         */
        LEFT,
        /**
         * Text is aligned in the middle of the label.
         */
        CENTER,
        /**
         * Text is aligned at the end of the label.
         */
        RIGHT,
        JUSTIFY,
    }

    export namespace TextureCachePolicy {
        export const $gtype: GObject.GType<TextureCachePolicy>;
    }

    /**
     * @gir-type Enum
     */
    enum TextureCachePolicy {
        NONE,
        FOREVER,
    }

    /**
     * Creates a string describing `actor`, for use in debugging. This
     * includes the class name and actor name (if any), plus if `actor`
     * is an {@link St.Widget}, its style class and pseudo class names.
     * @param actor a {@link Clutter.Actor}
     * @returns the debug name.
     */
    function describe_actor(actor: Clutter.Actor): string;
    function icon_theme_error_quark(): GLib.Quark;
    /**
     * @gir-type Callback
     */
    interface ClipboardCallbackFunc {
        (clipboard: Clipboard, text: string): void;
    }
    /**
     * @gir-type Callback
     */
    interface ClipboardContentCallbackFunc {
        (clipboard: Clipboard, bytes: GLib.Bytes | Uint8Array): void;
    }
    /**
     * @gir-type Callback
     */
    interface EntryCursorFunc {
        (entry: Entry, use_ibeam: boolean, data?: any | null): void;
    }
    export namespace ButtonMask {
        export const $gtype: GObject.GType<ButtonMask>;
    }

    /**
     * A mask representing which mouse buttons an {@link St.Button} responds to.
     * @gir-type Flags
     */
    enum ButtonMask {
        /**
         * button 1 (left)
         */
        ONE,
        /**
         * button 2 (middle)
         */
        TWO,
        /**
         * button 3 (right)
         */
        THREE,
    }

    export namespace IconLookupFlags {
        export const $gtype: GObject.GType<IconLookupFlags>;
    }

    /**
     * Used to specify options for {@link St.IconTheme.lookup_icon}
     * @gir-type Flags
     */
    enum IconLookupFlags {
        /**
         * Never get SVG icons, even if gdk-pixbuf
         *   supports them. Cannot be used together with {@link St.IconLookupFlags.FORCE_SVG}.
         */
        NO_SVG,
        /**
         * Get SVG icons, even if gdk-pixbuf
         *   doesn’t support them.
         *   Cannot be used together with {@link St.IconLookupFlags.NO_SVG}.
         */
        FORCE_SVG,
        /**
         * Try to shorten icon name at '-'
         *   characters before looking at inherited themes. This flag is only
         *   supported in functions that take a single icon name. For more general
         *   fallback, see `st_icon_theme_choose_icon()`.
         */
        GENERIC_FALLBACK,
        /**
         * Always get the icon scaled to the
         *   requested size.
         */
        FORCE_SIZE,
        /**
         * Try to always load regular icons, even
         *   when symbolic icon names are given.
         */
        FORCE_REGULAR,
        /**
         * Try to always load symbolic icons, even
         *   when regular icon names are given.
         */
        FORCE_SYMBOLIC,
        /**
         * Try to load a variant of the icon for left-to-right
         *   text direction.
         */
        DIR_LTR,
        /**
         * Try to load a variant of the icon for right-to-left
         *   text direction.
         */
        DIR_RTL,
    }

    export namespace TextDecoration {
        export const $gtype: GObject.GType<TextDecoration>;
    }

    /**
     * Flags used to determine the decoration of text.
     *
     * Not that neither {@link St.TextDecoration.OVERLINE} or {@link St.TextDecoration.BLINK}
     * are implemented, currently.
     * @gir-type Flags
     */
    enum TextDecoration {
        UNDERLINE,
        /**
         * Text is overlined
         */
        OVERLINE,
        /**
         * Text is striked out
         */
        LINE_THROUGH,
        /**
         * Text blinks
         */
        BLINK,
    }

    namespace Adjustment {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            /**
             * Emitted when any of the adjustment properties have changed, except for
             * {@link St.Adjustment.value}.
             * @signal
             */
            changed: () => void;
            'notify::actor': (pspec: GObject.ParamSpec) => void;
            'notify::lower': (pspec: GObject.ParamSpec) => void;
            'notify::page-increment': (pspec: GObject.ParamSpec) => void;
            'notify::page-size': (pspec: GObject.ParamSpec) => void;
            'notify::step-increment': (pspec: GObject.ParamSpec) => void;
            'notify::upper': (pspec: GObject.ParamSpec) => void;
            'notify::value': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps, Clutter.Animatable.ConstructorProps {
            actor: Clutter.Actor;
            lower: number;
            page_increment: number;
            pageIncrement: number;
            page_size: number;
            pageSize: number;
            step_increment: number;
            stepIncrement: number;
            upper: number;
            value: number;
        }
    }

    /**
     * An adjustable bounded value.
     *
     * The {@link St.Adjustment} object represents a range of values bounded between a
     * minimum and maximum, together with step and page increments and a page size.
     * @gir-type Class
     */
    class Adjustment extends GObject.Object implements Clutter.Animatable {
        static $gtype: GObject.GType<Adjustment>;

        // Properties

        /**
         * If the adjustment is used as {@link Clutter.Animatable} for a
         * {@link Clutter.PropertyTransition}, this property is used to determine which
         * monitor should drive the animation.
         */
        get actor(): Clutter.Actor;
        set actor(val: Clutter.Actor);
        /**
         * The minimum value of the adjustment.
         */
        get lower(): number;
        set lower(val: number);
        /**
         * The page increment of the adjustment.
         */
        get page_increment(): number;
        set page_increment(val: number);
        /**
         * The page increment of the adjustment.
         */
        get pageIncrement(): number;
        set pageIncrement(val: number);
        /**
         * The page size of the adjustment.
         *
         * Note that the page-size is irrelevant and should be set to zero if the
         * adjustment is used for a simple scalar value.
         */
        get page_size(): number;
        set page_size(val: number);
        /**
         * The page size of the adjustment.
         *
         * Note that the page-size is irrelevant and should be set to zero if the
         * adjustment is used for a simple scalar value.
         */
        get pageSize(): number;
        set pageSize(val: number);
        /**
         * The step increment of the adjustment.
         */
        get step_increment(): number;
        set step_increment(val: number);
        /**
         * The step increment of the adjustment.
         */
        get stepIncrement(): number;
        set stepIncrement(val: number);
        /**
         * The maximum value of the adjustment.
         *
         * Note that values will be restricted by `upper - page-size` if
         * {@link St.Adjustment.page_size} is non-zero.
         */
        get upper(): number;
        set upper(val: number);
        /**
         * The value of the adjustment.
         */
        get value(): number;
        set value(val: number);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Adjustment.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<Adjustment.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](
            actor: Clutter.Actor | null,
            value: number,
            lower: number,
            upper: number,
            step_increment: number,
            page_increment: number,
            page_size: number,
        ): Adjustment;

        // Signals

        /** @signal */
        connect<K extends keyof Adjustment.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Adjustment.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof Adjustment.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Adjustment.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof Adjustment.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Adjustment.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Virtual methods

        /**
         * Class handler for the ::changed signal.
         * @virtual
         */
        vfunc_changed(): void;

        // Methods

        /**
         * Add a {@link Clutter.Transition} for the adjustment. If the transition stops, it will
         * be automatically removed if {@link Clutter.Transition.remove_on_complete} is `true`.
         * @param name a unique name for the transition
         * @param transition a {@link Clutter.Transition}
         */
        add_transition(name: string, transition: Clutter.Transition): void;
        /**
         * Adjusts the adjustment using delta values from a scroll event.
         * You should use this instead of using {@link St.Adjustment.set_value}
         * as this method will tweak the values directly using the same
         * math as GTK+, to ensure that scrolling is consistent across
         * the environment.
         * @param delta A delta, retrieved directly from `clutter_event_get_scroll_delta()`   or similar.
         */
        adjust_for_scroll_event(delta: number): void;
        /**
         * Set {@link St.Adjustment.value} to a value clamped between `lower` and `upper`. The
         * clamping described by {@link St.Adjustment.set_value} still applies.
         * @param lower the lower value
         * @param upper the upper value
         */
        clamp_page(lower: number, upper: number): void;
        /**
         * Get the {@link Clutter.Transition} for `name` previously added with
         * {@link St.Adjustment.add_transition} or `null` if not found.
         * @param name a transition name
         * @returns a {@link Clutter.Transition}
         */
        get_transition(name: string): Clutter.Transition | null;
        /**
         * Gets the current value of the adjustment. See `st_adjustment_set_value()`.
         * @returns The current value of the adjustment
         */
        get_value(): number;
        /**
         * Gets all of `adjustment`'s values at once.
         */
        get_values(): [number, number, number, number, number, number];
        /**
         * @param name
         */
        remove_transition(name: string): void;
        /**
         * Sets the {@link St.Adjustment} value. The value is clamped to lie between
         * {@link St.Adjustment.lower} and {@link St.Adjustment.upper} - {@link St.Adjustment.page_size}.
         * @param value the new value
         */
        set_value(value: number): void;
        /**
         * Sets all properties of the adjustment at once.
         *
         * Use this function to avoid multiple emissions of the {@link GObject.Object.SignalSignatures.notify | GObject.Object::notify} and
         * `St.Adjustment::changed` signals. See `st_adjustment_set_lower()` for an
         * alternative way of compressing multiple emissions of {@link GObject.Object.SignalSignatures.notify | GObject.Object::notify} and
         * `St.Adjustment::changed` into one of each.
         * @param value the new value
         * @param lower the new minimum value
         * @param upper the new maximum value
         * @param step_increment the new step increment
         * @param page_increment the new page increment
         * @param page_size the new page size
         */
        set_values(
            value: number,
            lower: number,
            upper: number,
            step_increment: number,
            page_increment: number,
            page_size: number,
        ): void;
        /**
         * Finds the {@link GObject.ParamSpec} for `property_name`
         * @param property_name the name of the animatable property to find
         * @returns The {@link GObject.ParamSpec} for the given property   or `null`
         */
        find_property(property_name: string): GObject.ParamSpec;
        /**
         * Get animated actor.
         * @returns a {@link Clutter.Actor}
         */
        get_actor(): Clutter.Actor;
        /**
         * Retrieves the current state of `property_name` and sets `value` with it
         * @param property_name the name of the animatable property to retrieve
         * @param value a {@link GObject.Value} initialized to the type of the property to retrieve
         */
        get_initial_state(property_name: string, value: GObject.Value | any): void;
        /**
         * Asks a {@link Clutter.Animatable} implementation to interpolate a
         * a named property between the initial and final values of
         * a {@link Clutter.Interval}, using `progress` as the interpolation
         * value, and store the result inside `value`.
         *
         * This function should be used for every property animation
         * involving {@link Clutter.Animatable}s.
         * @param property_name the name of the property to interpolate
         * @param interval a {@link Clutter.Interval} with the animation range
         * @param progress the progress to use to interpolate between the   initial and final values of the `interval`
         * @returns `true` if the interpolation was successful,   and `false` otherwise
         */
        interpolate_value(property_name: string, interval: Clutter.Interval, progress: number): [boolean, unknown];
        /**
         * Sets the current state of `property_name` to `value`
         * @param property_name the name of the animatable property to set
         * @param value the value of the animatable property to set
         */
        set_final_state(property_name: string, value: GObject.Value | any): void;
        /**
         * Finds the {@link GObject.ParamSpec} for `property_name`
         * @param property_name the name of the animatable property to find
         * @virtual
         */
        vfunc_find_property(property_name: string): GObject.ParamSpec;
        /**
         * Get animated actor.
         * @virtual
         */
        vfunc_get_actor(): Clutter.Actor;
        /**
         * Retrieves the current state of `property_name` and sets `value` with it
         * @param property_name the name of the animatable property to retrieve
         * @param value a {@link GObject.Value} initialized to the type of the property to retrieve
         * @virtual
         */
        vfunc_get_initial_state(property_name: string, value: GObject.Value | any): void;
        /**
         * Asks a {@link Clutter.Animatable} implementation to interpolate a
         * a named property between the initial and final values of
         * a {@link Clutter.Interval}, using `progress` as the interpolation
         * value, and store the result inside `value`.
         *
         * This function should be used for every property animation
         * involving {@link Clutter.Animatable}s.
         * @param property_name the name of the property to interpolate
         * @param interval a {@link Clutter.Interval} with the animation range
         * @param progress the progress to use to interpolate between the   initial and final values of the `interval`
         * @virtual
         */
        vfunc_interpolate_value(
            property_name: string,
            interval: Clutter.Interval,
            progress: number,
        ): [boolean, unknown];
        /**
         * Sets the current state of `property_name` to `value`
         * @param property_name the name of the animatable property to set
         * @param value the value of the animatable property to set
         * @virtual
         */
        vfunc_set_final_state(property_name: string, value: GObject.Value | any): void;
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
         * Will result in the "sensitive" property of the widget {@link GObject.Object} instance to be
         * updated with the same value of the "active" property of the action {@link GObject.Object}
         * instance.
         *
         * If `flags` contains {@link GObject.BindingFlags.BIDIRECTIONAL} then the binding will be mutual:
         * if `target_property` on `target` changes then the `source_property` on `source`
         * will be updated as well.
         *
         * The binding will automatically be removed when either the `source` or the
         * `target` instances are finalized. To remove the binding without affecting the
         * `source` and the `target` you can just call `g_object_unref()` on the returned
         * {@link GObject.Binding} instance.
         *
         * Removing the binding by calling `g_object_unref()` on it must only be done if
         * the binding, `source` and `target` are only used from a single thread and it
         * is clear that both `source` and `target` outlive the binding. Especially it
         * is not safe to rely on this if the binding, `source` or `target` can be
         * finalized from different threads. Keep another reference to the binding and
         * use `g_binding_unbind()` instead to be on the safe side.
         *
         * A {@link GObject.Object} can have multiple bindings.
         * @param source_property the property on `source` to bind
         * @param target the target {@link GObject.Object}
         * @param target_property the property on `target` to bind
         * @param flags flags to pass to {@link GObject.Binding}
         * @returns the {@link GObject.Binding} instance representing the     binding between the two {@link GObject.Object} instances. The binding is released     whenever the {@link GObject.Binding} reference count reaches zero.
         */
        bind_property(
            source_property: string,
            target: GObject.Object,
            target_property: string,
            flags: GObject.BindingFlags | null,
        ): GObject.Binding;
        /**
         * Complete version of `g_object_bind_property()`.
         *
         * Creates a binding between `source_property` on `source` and `target_property`
         * on `target`, allowing you to set the transformation functions to be used by
         * the binding.
         *
         * If `flags` contains {@link GObject.BindingFlags.BIDIRECTIONAL} then the binding will be mutual:
         * if `target_property` on `target` changes then the `source_property` on `source`
         * will be updated as well. The `transform_from` function is only used in case
         * of bidirectional bindings, otherwise it will be ignored
         *
         * The binding will automatically be removed when either the `source` or the
         * `target` instances are finalized. This will release the reference that is
         * being held on the {@link GObject.Binding} instance; if you want to hold on to the
         * {@link GObject.Binding} instance, you will need to hold a reference to it.
         *
         * To remove the binding, call `g_binding_unbind()`.
         *
         * A {@link GObject.Object} can have multiple bindings.
         *
         * The same `user_data` parameter will be used for both `transform_to`
         * and `transform_from` transformation functions; the `notify` function will
         * be called once, when the binding is removed. If you need different data
         * for each transformation function, please use
         * `g_object_bind_property_with_closures()` instead.
         * @param source_property the property on `source` to bind
         * @param target the target {@link GObject.Object}
         * @param target_property the property on `target` to bind
         * @param flags flags to pass to {@link GObject.Binding}
         * @param transform_to the transformation function     from the `source` to the `target`, or `null` to use the default
         * @param transform_from the transformation function     from the `target` to the `source`, or `null` to use the default
         * @param notify a function to call when disposing the binding, to free     resources used by the transformation functions, or `null` if not required
         * @returns the {@link GObject.Binding} instance representing the     binding between the two {@link GObject.Object} instances. The binding is released     whenever the {@link GObject.Binding} reference count reaches zero.
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
        /**
         * @param args
         */
        // Conflicted with GObject.Object.bind_property_full
        bind_property_full(...args: never[]): any;
        /**
         * This function is intended for {@link GObject.Object} implementations to re-enforce
         * a [floating][floating-ref] object reference. Doing this is seldom
         * required: all `GInitiallyUnowneds` are created with a floating reference
         * which usually just needs to be sunken by calling `g_object_ref_sink()`.
         */
        force_floating(): void;
        /**
         * Increases the freeze count on `object`. If the freeze count is
         * non-zero, the emission of "notify" signals on `object` is
         * stopped. The signals are queued until the freeze count is decreased
         * to zero. Duplicate notifications are squashed so that at most one
         * {@link GObject.Object.SignalSignatures.notify | GObject.Object::notify} signal is emitted for each property modified while the
         * object is frozen.
         *
         * This is necessary for accessors that modify multiple properties to prevent
         * premature notification while the object is still being modified.
         */
        freeze_notify(): void;
        /**
         * Gets a named field from the objects table of associations (see `g_object_set_data()`).
         * @param key name of the key for that association
         * @returns the data if found,          or `null` if no such data exists.
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
         * `g_object_set_qdata()`.
         * @param quark A {@link GLib.Quark}, naming the user data pointer
         * @returns The user data pointer set, or `null`
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
         * @returns `true` if `object` has a floating reference
         */
        is_floating(): boolean;
        /**
         * Emits a "notify" signal for the property `property_name` on `object`.
         *
         * When possible, eg. when signaling a property change from within the class
         * that registered the property, you should use `g_object_notify_by_pspec()`
         * instead.
         *
         * Note that emission of the notify signal may be blocked with
         * `g_object_freeze_notify()`. In this case, the signal emissions are queued
         * and will be emitted (in reverse order) when `g_object_thaw_notify()` is
         * called.
         * @param property_name the name of a property installed on the class of `object`.
         */
        notify(property_name: string): void;
        /**
         * Emits a "notify" signal for the property specified by `pspec` on `object`.
         *
         * This function omits the property name lookup, hence it is faster than
         * `g_object_notify()`.
         *
         * One way to avoid using `g_object_notify()` from within the
         * class that registered the properties, and using `g_object_notify_by_pspec()`
         * instead, is to store the GParamSpec used with
         * `g_object_class_install_property()` inside a static array, e.g.:
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
         * @param pspec the {@link GObject.ParamSpec} of a property installed on the class of `object`.
         */
        notify_by_pspec(pspec: GObject.ParamSpec): void;
        /**
         * Increases the reference count of `object`.
         *
         * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
         * of `object` will be propagated to the return type (using the GCC `typeof()`
         * extension), so any casting the caller needs to do on the return type must be
         * explicit.
         * @returns the same `object`
         */
        ref(): GObject.Object;
        /**
         * Increase the reference count of `object`, and possibly remove the
         * [floating][floating-ref] reference, if `object` has a floating reference.
         *
         * In other words, if the object is floating, then this call "assumes
         * ownership" of the floating reference, converting it to a normal
         * reference by clearing the floating flag while leaving the reference
         * count unchanged.  If the object is not floating, then this call
         * adds a new normal reference increasing the reference count by one.
         *
         * Since GLib 2.56, the type of `object` will be propagated to the return type
         * under the same conditions as for `g_object_ref()`.
         * @returns `object`
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
         * Internally, the `key` is converted to a {@link GLib.Quark} using `g_quark_from_string()`.
         * This means a copy of `key` is kept permanently (even after `object` has been
         * finalized) — so it is recommended to only use a small, bounded set of values
         * for `key` in your program, to avoid the {@link GLib.Quark} storage growing unbounded.
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
         * @returns the data if found, or `null`          if no such data exists.
         */
        steal_data(key: string): any | null;
        /**
         * This function gets back user data pointers stored via
         * `g_object_set_qdata()` and removes the `data` from object
         * without invoking its `destroy()` function (if any was
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
         * Using `g_object_get_qdata()` in the above example, instead of
         * `g_object_steal_qdata()` would have left the destroy function set,
         * and thus the partial string list would have been freed upon
         * `g_object_set_qdata_full()`.
         * @param quark A {@link GLib.Quark}, naming the user data pointer
         * @returns The user data pointer set, or `null`
         */
        steal_qdata(quark: GLib.Quark): any | null;
        /**
         * Reverts the effect of a previous call to
         * `g_object_freeze_notify()`. The freeze count is decreased on `object`
         * and when it reaches zero, queued "notify" signals are emitted.
         *
         * Duplicate notifications for each property are squashed so that at most one
         * {@link GObject.Object.SignalSignatures.notify | GObject.Object::notify} signal is emitted for each property, in the reverse order
         * in which they have been queued.
         *
         * It is an error to call this function when the freeze count is zero.
         */
        thaw_notify(): void;
        /**
         * Decreases the reference count of `object`. When its reference count
         * drops to 0, the object is finalized (i.e. its memory is freed).
         *
         * If the pointer to the {@link GObject.Object} may be reused in future (for example, if it is
         * an instance variable of another object), it is recommended to clear the
         * pointer to `null` rather than retain a dangling pointer to a potentially
         * invalid {@link GObject.Object} instance. Use `g_clear_object()` for this.
         */
        unref(): void;
        /**
         * This function essentially limits the life time of the `closure` to
         * the life time of the object. That is, when the object is finalized,
         * the `closure` is invalidated by calling `g_closure_invalidate()` on
         * it, in order to prevent invocations of the closure with a finalized
         * (nonexisting) object. Also, `g_object_ref()` and `g_object_unref()` are
         * added as marshal guards to the `closure`, to ensure that an extra
         * reference count is held on `object` during invocation of the
         * `closure`.  Usually, this function will be called on closures that
         * use this `object` as closure data.
         * @param closure {@link GObject.Closure} to watch
         */
        watch_closure(closure: GObject.Closure): void;
        /**
         * the `constructed` function is called by `g_object_new()` as the
         *  final step of the object creation process.  At the point of the call, all
         *  construction properties have been set on the object.  The purpose of this
         *  call is to allow for object initialisation steps that can only be performed
         *  after construction properties have been set.  `constructed` implementors
         *  should chain up to the `constructed` call of their parent class to allow it
         *  to complete its initialisation.
         * @virtual
         */
        vfunc_constructed(): void;
        /**
         * emits property change notification for a bunch
         *  of properties. Overriding `dispatch_properties_changed` should be rarely
         *  needed.
         * @param n_pspecs
         * @param pspecs
         * @virtual
         */
        vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void;
        /**
         * the `dispose` function is supposed to drop all references to other
         *  objects, but keep the instance otherwise intact, so that client method
         *  invocations still work. It may be run multiple times (due to reference
         *  loops). Before returning, `dispose` should chain up to the `dispose` method
         *  of the parent class.
         * @virtual
         */
        vfunc_dispose(): void;
        /**
         * instance finalization function, should finish the finalization of
         *  the instance begun in `dispose` and chain up to the `finalize` method of the
         *  parent class.
         * @virtual
         */
        vfunc_finalize(): void;
        /**
         * the generic getter for all properties of this type. Should be
         *  overridden for every type with properties.
         * @param property_id
         * @param value
         * @param pspec
         * @virtual
         */
        vfunc_get_property(property_id: number, value: GObject.Value | any, pspec: GObject.ParamSpec): void;
        /**
         * Emits a "notify" signal for the property `property_name` on `object`.
         *
         * When possible, eg. when signaling a property change from within the class
         * that registered the property, you should use `g_object_notify_by_pspec()`
         * instead.
         *
         * Note that emission of the notify signal may be blocked with
         * `g_object_freeze_notify()`. In this case, the signal emissions are queued
         * and will be emitted (in reverse order) when `g_object_thaw_notify()` is
         * called.
         * @param pspec
         * @virtual
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
         * @virtual
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

    namespace Bin {
        // Signal signatures
        interface SignalSignatures extends Widget.SignalSignatures {
            'notify::child': (pspec: GObject.ParamSpec) => void;
            'notify::can-focus': (pspec: GObject.ParamSpec) => void;
            'notify::hover': (pspec: GObject.ParamSpec) => void;
            'notify::label-actor': (pspec: GObject.ParamSpec) => void;
            'notify::pseudo-class': (pspec: GObject.ParamSpec) => void;
            'notify::style': (pspec: GObject.ParamSpec) => void;
            'notify::style-class': (pspec: GObject.ParamSpec) => void;
            'notify::track-hover': (pspec: GObject.ParamSpec) => void;
            'notify::accessible-name': (pspec: GObject.ParamSpec) => void;
            'notify::accessible-role': (pspec: GObject.ParamSpec) => void;
            'notify::actions': (pspec: GObject.ParamSpec) => void;
            'notify::allocation': (pspec: GObject.ParamSpec) => void;
            'notify::background-color': (pspec: GObject.ParamSpec) => void;
            'notify::background-color-set': (pspec: GObject.ParamSpec) => void;
            'notify::child-transform': (pspec: GObject.ParamSpec) => void;
            'notify::child-transform-set': (pspec: GObject.ParamSpec) => void;
            'notify::clip-rect': (pspec: GObject.ParamSpec) => void;
            'notify::clip-to-allocation': (pspec: GObject.ParamSpec) => void;
            'notify::color-state': (pspec: GObject.ParamSpec) => void;
            'notify::constraints': (pspec: GObject.ParamSpec) => void;
            'notify::content': (pspec: GObject.ParamSpec) => void;
            'notify::content-box': (pspec: GObject.ParamSpec) => void;
            'notify::content-gravity': (pspec: GObject.ParamSpec) => void;
            'notify::content-repeat': (pspec: GObject.ParamSpec) => void;
            'notify::context': (pspec: GObject.ParamSpec) => void;
            'notify::effect': (pspec: GObject.ParamSpec) => void;
            'notify::first-child': (pspec: GObject.ParamSpec) => void;
            'notify::fixed-position-set': (pspec: GObject.ParamSpec) => void;
            'notify::fixed-x': (pspec: GObject.ParamSpec) => void;
            'notify::fixed-y': (pspec: GObject.ParamSpec) => void;
            'notify::has-clip': (pspec: GObject.ParamSpec) => void;
            'notify::has-pointer': (pspec: GObject.ParamSpec) => void;
            'notify::height': (pspec: GObject.ParamSpec) => void;
            'notify::last-child': (pspec: GObject.ParamSpec) => void;
            'notify::layout-manager': (pspec: GObject.ParamSpec) => void;
            'notify::magnification-filter': (pspec: GObject.ParamSpec) => void;
            'notify::mapped': (pspec: GObject.ParamSpec) => void;
            'notify::margin-bottom': (pspec: GObject.ParamSpec) => void;
            'notify::margin-left': (pspec: GObject.ParamSpec) => void;
            'notify::margin-right': (pspec: GObject.ParamSpec) => void;
            'notify::margin-top': (pspec: GObject.ParamSpec) => void;
            'notify::min-height': (pspec: GObject.ParamSpec) => void;
            'notify::min-height-set': (pspec: GObject.ParamSpec) => void;
            'notify::min-width': (pspec: GObject.ParamSpec) => void;
            'notify::min-width-set': (pspec: GObject.ParamSpec) => void;
            'notify::minification-filter': (pspec: GObject.ParamSpec) => void;
            'notify::name': (pspec: GObject.ParamSpec) => void;
            'notify::natural-height': (pspec: GObject.ParamSpec) => void;
            'notify::natural-height-set': (pspec: GObject.ParamSpec) => void;
            'notify::natural-width': (pspec: GObject.ParamSpec) => void;
            'notify::natural-width-set': (pspec: GObject.ParamSpec) => void;
            'notify::offscreen-redirect': (pspec: GObject.ParamSpec) => void;
            'notify::opacity': (pspec: GObject.ParamSpec) => void;
            'notify::pivot-point': (pspec: GObject.ParamSpec) => void;
            'notify::pivot-point-z': (pspec: GObject.ParamSpec) => void;
            'notify::position': (pspec: GObject.ParamSpec) => void;
            'notify::reactive': (pspec: GObject.ParamSpec) => void;
            'notify::realized': (pspec: GObject.ParamSpec) => void;
            'notify::request-mode': (pspec: GObject.ParamSpec) => void;
            'notify::rotation-angle-x': (pspec: GObject.ParamSpec) => void;
            'notify::rotation-angle-y': (pspec: GObject.ParamSpec) => void;
            'notify::rotation-angle-z': (pspec: GObject.ParamSpec) => void;
            'notify::scale-x': (pspec: GObject.ParamSpec) => void;
            'notify::scale-y': (pspec: GObject.ParamSpec) => void;
            'notify::scale-z': (pspec: GObject.ParamSpec) => void;
            'notify::show-on-set-parent': (pspec: GObject.ParamSpec) => void;
            'notify::size': (pspec: GObject.ParamSpec) => void;
            'notify::text-direction': (pspec: GObject.ParamSpec) => void;
            'notify::transform': (pspec: GObject.ParamSpec) => void;
            'notify::transform-set': (pspec: GObject.ParamSpec) => void;
            'notify::translation-x': (pspec: GObject.ParamSpec) => void;
            'notify::translation-y': (pspec: GObject.ParamSpec) => void;
            'notify::translation-z': (pspec: GObject.ParamSpec) => void;
            'notify::visible': (pspec: GObject.ParamSpec) => void;
            'notify::width': (pspec: GObject.ParamSpec) => void;
            'notify::x': (pspec: GObject.ParamSpec) => void;
            'notify::x-align': (pspec: GObject.ParamSpec) => void;
            'notify::x-expand': (pspec: GObject.ParamSpec) => void;
            'notify::y': (pspec: GObject.ParamSpec) => void;
            'notify::y-align': (pspec: GObject.ParamSpec) => void;
            'notify::y-expand': (pspec: GObject.ParamSpec) => void;
            'notify::z-position': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps<A extends Clutter.Actor = Clutter.Actor>
            extends
                Widget.ConstructorProps,
                Atk.ImplementorIface.ConstructorProps,
                Clutter.Animatable.ConstructorProps {
            child: A;
        }
    }

    /**
     * A simple container with one actor.
     *
     * {@link St.Bin} is a simple container capable of having only one
     * {@link Clutter.Actor} as a child.
     * @gir-type Class
     */
    class Bin<A extends Clutter.Actor = Clutter.Actor>
        extends Widget
        implements Atk.ImplementorIface, Clutter.Animatable
    {
        static $gtype: GObject.GType<Bin>;

        // Properties

        /**
         * The child {@link Clutter.Actor} of the {@link St.Bin} container.
         */
        get child(): A;
        set child(val: A);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Bin.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<Bin.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): Bin;

        // Signals

        /** @signal */
        connect<K extends keyof Bin.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Bin.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof Bin.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Bin.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof Bin.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Bin.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * Gets the {@link Clutter.Actor} child for `bin`.
         * @returns a {@link Clutter.Actor}, or `null`
         */
        get_child(): A | null;
        /**
         * Sets `child` as the child of `bin`.
         *
         * If `bin` already has a child, the previous child is removed.
         * @param child a {@link Clutter.Actor}, or `null`
         */
        set_child(child?: A | null): void;
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
         * Will result in the "sensitive" property of the widget {@link GObject.Object} instance to be
         * updated with the same value of the "active" property of the action {@link GObject.Object}
         * instance.
         *
         * If `flags` contains {@link GObject.BindingFlags.BIDIRECTIONAL} then the binding will be mutual:
         * if `target_property` on `target` changes then the `source_property` on `source`
         * will be updated as well.
         *
         * The binding will automatically be removed when either the `source` or the
         * `target` instances are finalized. To remove the binding without affecting the
         * `source` and the `target` you can just call `g_object_unref()` on the returned
         * {@link GObject.Binding} instance.
         *
         * Removing the binding by calling `g_object_unref()` on it must only be done if
         * the binding, `source` and `target` are only used from a single thread and it
         * is clear that both `source` and `target` outlive the binding. Especially it
         * is not safe to rely on this if the binding, `source` or `target` can be
         * finalized from different threads. Keep another reference to the binding and
         * use `g_binding_unbind()` instead to be on the safe side.
         *
         * A {@link GObject.Object} can have multiple bindings.
         * @param source_property the property on `source` to bind
         * @param target the target {@link GObject.Object}
         * @param target_property the property on `target` to bind
         * @param flags flags to pass to {@link GObject.Binding}
         * @returns the {@link GObject.Binding} instance representing the     binding between the two {@link GObject.Object} instances. The binding is released     whenever the {@link GObject.Binding} reference count reaches zero.
         */
        bind_property(
            source_property: string,
            target: GObject.Object,
            target_property: string,
            flags: GObject.BindingFlags | null,
        ): GObject.Binding;
        /**
         * Complete version of `g_object_bind_property()`.
         *
         * Creates a binding between `source_property` on `source` and `target_property`
         * on `target`, allowing you to set the transformation functions to be used by
         * the binding.
         *
         * If `flags` contains {@link GObject.BindingFlags.BIDIRECTIONAL} then the binding will be mutual:
         * if `target_property` on `target` changes then the `source_property` on `source`
         * will be updated as well. The `transform_from` function is only used in case
         * of bidirectional bindings, otherwise it will be ignored
         *
         * The binding will automatically be removed when either the `source` or the
         * `target` instances are finalized. This will release the reference that is
         * being held on the {@link GObject.Binding} instance; if you want to hold on to the
         * {@link GObject.Binding} instance, you will need to hold a reference to it.
         *
         * To remove the binding, call `g_binding_unbind()`.
         *
         * A {@link GObject.Object} can have multiple bindings.
         *
         * The same `user_data` parameter will be used for both `transform_to`
         * and `transform_from` transformation functions; the `notify` function will
         * be called once, when the binding is removed. If you need different data
         * for each transformation function, please use
         * `g_object_bind_property_with_closures()` instead.
         * @param source_property the property on `source` to bind
         * @param target the target {@link GObject.Object}
         * @param target_property the property on `target` to bind
         * @param flags flags to pass to {@link GObject.Binding}
         * @param transform_to the transformation function     from the `source` to the `target`, or `null` to use the default
         * @param transform_from the transformation function     from the `target` to the `source`, or `null` to use the default
         * @param notify a function to call when disposing the binding, to free     resources used by the transformation functions, or `null` if not required
         * @returns the {@link GObject.Binding} instance representing the     binding between the two {@link GObject.Object} instances. The binding is released     whenever the {@link GObject.Binding} reference count reaches zero.
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
        /**
         * @param args
         */
        // Conflicted with GObject.Object.bind_property_full
        bind_property_full(...args: never[]): any;
        /**
         * This function is intended for {@link GObject.Object} implementations to re-enforce
         * a [floating][floating-ref] object reference. Doing this is seldom
         * required: all `GInitiallyUnowneds` are created with a floating reference
         * which usually just needs to be sunken by calling `g_object_ref_sink()`.
         */
        force_floating(): void;
        /**
         * Increases the freeze count on `object`. If the freeze count is
         * non-zero, the emission of "notify" signals on `object` is
         * stopped. The signals are queued until the freeze count is decreased
         * to zero. Duplicate notifications are squashed so that at most one
         * {@link GObject.Object.SignalSignatures.notify | GObject.Object::notify} signal is emitted for each property modified while the
         * object is frozen.
         *
         * This is necessary for accessors that modify multiple properties to prevent
         * premature notification while the object is still being modified.
         */
        freeze_notify(): void;
        /**
         * Gets a named field from the objects table of associations (see `g_object_set_data()`).
         * @param key name of the key for that association
         * @returns the data if found,          or `null` if no such data exists.
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
         * `g_object_set_qdata()`.
         * @param quark A {@link GLib.Quark}, naming the user data pointer
         * @returns The user data pointer set, or `null`
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
         * @returns `true` if `object` has a floating reference
         */
        is_floating(): boolean;
        /**
         * Emits a "notify" signal for the property `property_name` on `object`.
         *
         * When possible, eg. when signaling a property change from within the class
         * that registered the property, you should use `g_object_notify_by_pspec()`
         * instead.
         *
         * Note that emission of the notify signal may be blocked with
         * `g_object_freeze_notify()`. In this case, the signal emissions are queued
         * and will be emitted (in reverse order) when `g_object_thaw_notify()` is
         * called.
         * @param property_name the name of a property installed on the class of `object`.
         */
        notify(property_name: string): void;
        /**
         * Emits a "notify" signal for the property specified by `pspec` on `object`.
         *
         * This function omits the property name lookup, hence it is faster than
         * `g_object_notify()`.
         *
         * One way to avoid using `g_object_notify()` from within the
         * class that registered the properties, and using `g_object_notify_by_pspec()`
         * instead, is to store the GParamSpec used with
         * `g_object_class_install_property()` inside a static array, e.g.:
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
         * @param pspec the {@link GObject.ParamSpec} of a property installed on the class of `object`.
         */
        notify_by_pspec(pspec: GObject.ParamSpec): void;
        /**
         * Increases the reference count of `object`.
         *
         * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
         * of `object` will be propagated to the return type (using the GCC `typeof()`
         * extension), so any casting the caller needs to do on the return type must be
         * explicit.
         * @returns the same `object`
         */
        ref(): GObject.Object;
        /**
         * Increase the reference count of `object`, and possibly remove the
         * [floating][floating-ref] reference, if `object` has a floating reference.
         *
         * In other words, if the object is floating, then this call "assumes
         * ownership" of the floating reference, converting it to a normal
         * reference by clearing the floating flag while leaving the reference
         * count unchanged.  If the object is not floating, then this call
         * adds a new normal reference increasing the reference count by one.
         *
         * Since GLib 2.56, the type of `object` will be propagated to the return type
         * under the same conditions as for `g_object_ref()`.
         * @returns `object`
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
         * Internally, the `key` is converted to a {@link GLib.Quark} using `g_quark_from_string()`.
         * This means a copy of `key` is kept permanently (even after `object` has been
         * finalized) — so it is recommended to only use a small, bounded set of values
         * for `key` in your program, to avoid the {@link GLib.Quark} storage growing unbounded.
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
         * @returns the data if found, or `null`          if no such data exists.
         */
        steal_data(key: string): any | null;
        /**
         * This function gets back user data pointers stored via
         * `g_object_set_qdata()` and removes the `data` from object
         * without invoking its `destroy()` function (if any was
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
         * Using `g_object_get_qdata()` in the above example, instead of
         * `g_object_steal_qdata()` would have left the destroy function set,
         * and thus the partial string list would have been freed upon
         * `g_object_set_qdata_full()`.
         * @param quark A {@link GLib.Quark}, naming the user data pointer
         * @returns The user data pointer set, or `null`
         */
        steal_qdata(quark: GLib.Quark): any | null;
        /**
         * Reverts the effect of a previous call to
         * `g_object_freeze_notify()`. The freeze count is decreased on `object`
         * and when it reaches zero, queued "notify" signals are emitted.
         *
         * Duplicate notifications for each property are squashed so that at most one
         * {@link GObject.Object.SignalSignatures.notify | GObject.Object::notify} signal is emitted for each property, in the reverse order
         * in which they have been queued.
         *
         * It is an error to call this function when the freeze count is zero.
         */
        thaw_notify(): void;
        /**
         * Decreases the reference count of `object`. When its reference count
         * drops to 0, the object is finalized (i.e. its memory is freed).
         *
         * If the pointer to the {@link GObject.Object} may be reused in future (for example, if it is
         * an instance variable of another object), it is recommended to clear the
         * pointer to `null` rather than retain a dangling pointer to a potentially
         * invalid {@link GObject.Object} instance. Use `g_clear_object()` for this.
         */
        unref(): void;
        /**
         * This function essentially limits the life time of the `closure` to
         * the life time of the object. That is, when the object is finalized,
         * the `closure` is invalidated by calling `g_closure_invalidate()` on
         * it, in order to prevent invocations of the closure with a finalized
         * (nonexisting) object. Also, `g_object_ref()` and `g_object_unref()` are
         * added as marshal guards to the `closure`, to ensure that an extra
         * reference count is held on `object` during invocation of the
         * `closure`.  Usually, this function will be called on closures that
         * use this `object` as closure data.
         * @param closure {@link GObject.Closure} to watch
         */
        watch_closure(closure: GObject.Closure): void;
        /**
         * the `constructed` function is called by `g_object_new()` as the
         *  final step of the object creation process.  At the point of the call, all
         *  construction properties have been set on the object.  The purpose of this
         *  call is to allow for object initialisation steps that can only be performed
         *  after construction properties have been set.  `constructed` implementors
         *  should chain up to the `constructed` call of their parent class to allow it
         *  to complete its initialisation.
         * @virtual
         */
        vfunc_constructed(): void;
        /**
         * emits property change notification for a bunch
         *  of properties. Overriding `dispatch_properties_changed` should be rarely
         *  needed.
         * @param n_pspecs
         * @param pspecs
         * @virtual
         */
        vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void;
        /**
         * the `dispose` function is supposed to drop all references to other
         *  objects, but keep the instance otherwise intact, so that client method
         *  invocations still work. It may be run multiple times (due to reference
         *  loops). Before returning, `dispose` should chain up to the `dispose` method
         *  of the parent class.
         * @virtual
         */
        vfunc_dispose(): void;
        /**
         * instance finalization function, should finish the finalization of
         *  the instance begun in `dispose` and chain up to the `finalize` method of the
         *  parent class.
         * @virtual
         */
        vfunc_finalize(): void;
        /**
         * the generic getter for all properties of this type. Should be
         *  overridden for every type with properties.
         * @param property_id
         * @param value
         * @param pspec
         * @virtual
         */
        vfunc_get_property(property_id: number, value: GObject.Value | any, pspec: GObject.ParamSpec): void;
        /**
         * Emits a "notify" signal for the property `property_name` on `object`.
         *
         * When possible, eg. when signaling a property change from within the class
         * that registered the property, you should use `g_object_notify_by_pspec()`
         * instead.
         *
         * Note that emission of the notify signal may be blocked with
         * `g_object_freeze_notify()`. In this case, the signal emissions are queued
         * and will be emitted (in reverse order) when `g_object_thaw_notify()` is
         * called.
         * @param pspec
         * @virtual
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
         * @virtual
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

    namespace BorderImage {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    /**
     * @gir-type Class
     */
    class BorderImage extends GObject.Object {
        static $gtype: GObject.GType<BorderImage>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: BorderImage.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<BorderImage.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](
            file: Gio.File,
            border_top: number,
            border_right: number,
            border_bottom: number,
            border_left: number,
            scale_factor: number,
        ): BorderImage;

        // Signals

        /** @signal */
        connect<K extends keyof BorderImage.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, BorderImage.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof BorderImage.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, BorderImage.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof BorderImage.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<BorderImage.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * Check if two {@link St.BorderImage} objects are identical.
         * @param other a different {@link St.BorderImage}
         * @returns `true` if the two border image objects are identical
         */
        equal(other: BorderImage): boolean;
        /**
         * @param border_top
         * @param border_right
         * @param border_bottom
         * @param border_left
         */
        get_borders(border_top: number, border_right: number, border_bottom: number, border_left: number): void;
        /**
         * Get the {@link Gio.File} for `image`.
         * @returns a {@link Gio.File}
         */
        get_file(): Gio.File;
    }

    namespace BoxLayout {
        // Signal signatures
        interface SignalSignatures extends Viewport.SignalSignatures {
            'notify::pack-start': (pspec: GObject.ParamSpec) => void;
            'notify::vertical': (pspec: GObject.ParamSpec) => void;
            'notify::clip-to-view': (pspec: GObject.ParamSpec) => void;
            'notify::can-focus': (pspec: GObject.ParamSpec) => void;
            'notify::hover': (pspec: GObject.ParamSpec) => void;
            'notify::label-actor': (pspec: GObject.ParamSpec) => void;
            'notify::pseudo-class': (pspec: GObject.ParamSpec) => void;
            'notify::style': (pspec: GObject.ParamSpec) => void;
            'notify::style-class': (pspec: GObject.ParamSpec) => void;
            'notify::track-hover': (pspec: GObject.ParamSpec) => void;
            'notify::accessible-name': (pspec: GObject.ParamSpec) => void;
            'notify::accessible-role': (pspec: GObject.ParamSpec) => void;
            'notify::actions': (pspec: GObject.ParamSpec) => void;
            'notify::allocation': (pspec: GObject.ParamSpec) => void;
            'notify::background-color': (pspec: GObject.ParamSpec) => void;
            'notify::background-color-set': (pspec: GObject.ParamSpec) => void;
            'notify::child-transform': (pspec: GObject.ParamSpec) => void;
            'notify::child-transform-set': (pspec: GObject.ParamSpec) => void;
            'notify::clip-rect': (pspec: GObject.ParamSpec) => void;
            'notify::clip-to-allocation': (pspec: GObject.ParamSpec) => void;
            'notify::color-state': (pspec: GObject.ParamSpec) => void;
            'notify::constraints': (pspec: GObject.ParamSpec) => void;
            'notify::content': (pspec: GObject.ParamSpec) => void;
            'notify::content-box': (pspec: GObject.ParamSpec) => void;
            'notify::content-gravity': (pspec: GObject.ParamSpec) => void;
            'notify::content-repeat': (pspec: GObject.ParamSpec) => void;
            'notify::context': (pspec: GObject.ParamSpec) => void;
            'notify::effect': (pspec: GObject.ParamSpec) => void;
            'notify::first-child': (pspec: GObject.ParamSpec) => void;
            'notify::fixed-position-set': (pspec: GObject.ParamSpec) => void;
            'notify::fixed-x': (pspec: GObject.ParamSpec) => void;
            'notify::fixed-y': (pspec: GObject.ParamSpec) => void;
            'notify::has-clip': (pspec: GObject.ParamSpec) => void;
            'notify::has-pointer': (pspec: GObject.ParamSpec) => void;
            'notify::height': (pspec: GObject.ParamSpec) => void;
            'notify::last-child': (pspec: GObject.ParamSpec) => void;
            'notify::layout-manager': (pspec: GObject.ParamSpec) => void;
            'notify::magnification-filter': (pspec: GObject.ParamSpec) => void;
            'notify::mapped': (pspec: GObject.ParamSpec) => void;
            'notify::margin-bottom': (pspec: GObject.ParamSpec) => void;
            'notify::margin-left': (pspec: GObject.ParamSpec) => void;
            'notify::margin-right': (pspec: GObject.ParamSpec) => void;
            'notify::margin-top': (pspec: GObject.ParamSpec) => void;
            'notify::min-height': (pspec: GObject.ParamSpec) => void;
            'notify::min-height-set': (pspec: GObject.ParamSpec) => void;
            'notify::min-width': (pspec: GObject.ParamSpec) => void;
            'notify::min-width-set': (pspec: GObject.ParamSpec) => void;
            'notify::minification-filter': (pspec: GObject.ParamSpec) => void;
            'notify::name': (pspec: GObject.ParamSpec) => void;
            'notify::natural-height': (pspec: GObject.ParamSpec) => void;
            'notify::natural-height-set': (pspec: GObject.ParamSpec) => void;
            'notify::natural-width': (pspec: GObject.ParamSpec) => void;
            'notify::natural-width-set': (pspec: GObject.ParamSpec) => void;
            'notify::offscreen-redirect': (pspec: GObject.ParamSpec) => void;
            'notify::opacity': (pspec: GObject.ParamSpec) => void;
            'notify::pivot-point': (pspec: GObject.ParamSpec) => void;
            'notify::pivot-point-z': (pspec: GObject.ParamSpec) => void;
            'notify::position': (pspec: GObject.ParamSpec) => void;
            'notify::reactive': (pspec: GObject.ParamSpec) => void;
            'notify::realized': (pspec: GObject.ParamSpec) => void;
            'notify::request-mode': (pspec: GObject.ParamSpec) => void;
            'notify::rotation-angle-x': (pspec: GObject.ParamSpec) => void;
            'notify::rotation-angle-y': (pspec: GObject.ParamSpec) => void;
            'notify::rotation-angle-z': (pspec: GObject.ParamSpec) => void;
            'notify::scale-x': (pspec: GObject.ParamSpec) => void;
            'notify::scale-y': (pspec: GObject.ParamSpec) => void;
            'notify::scale-z': (pspec: GObject.ParamSpec) => void;
            'notify::show-on-set-parent': (pspec: GObject.ParamSpec) => void;
            'notify::size': (pspec: GObject.ParamSpec) => void;
            'notify::text-direction': (pspec: GObject.ParamSpec) => void;
            'notify::transform': (pspec: GObject.ParamSpec) => void;
            'notify::transform-set': (pspec: GObject.ParamSpec) => void;
            'notify::translation-x': (pspec: GObject.ParamSpec) => void;
            'notify::translation-y': (pspec: GObject.ParamSpec) => void;
            'notify::translation-z': (pspec: GObject.ParamSpec) => void;
            'notify::visible': (pspec: GObject.ParamSpec) => void;
            'notify::width': (pspec: GObject.ParamSpec) => void;
            'notify::x': (pspec: GObject.ParamSpec) => void;
            'notify::x-align': (pspec: GObject.ParamSpec) => void;
            'notify::x-expand': (pspec: GObject.ParamSpec) => void;
            'notify::y': (pspec: GObject.ParamSpec) => void;
            'notify::y-align': (pspec: GObject.ParamSpec) => void;
            'notify::y-expand': (pspec: GObject.ParamSpec) => void;
            'notify::z-position': (pspec: GObject.ParamSpec) => void;
            'notify::hadjustment': (pspec: GObject.ParamSpec) => void;
            'notify::vadjustment': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps
            extends
                Viewport.ConstructorProps<Clutter.BoxLayout>,
                Atk.ImplementorIface.ConstructorProps,
                Clutter.Animatable.ConstructorProps,
                Scrollable.ConstructorProps {
            pack_start: boolean;
            packStart: boolean;
            vertical: boolean;
        }
    }

    /**
     * Layout container arranging children in a single line.
     *
     * The {@link St.BoxLayout} arranges its children along a single line, where each
     * child can be allocated either its preferred size or larger if the expand
     * option is set. If the fill option is set, the actor will be allocated more
     * than its requested size. If the fill option is not set, but the expand option
     * is enabled, then the position of the actor within the available space can
     * be determined by the alignment child property.
     * @gir-type Class
     */
    class BoxLayout
        extends Viewport<Clutter.BoxLayout>
        implements Atk.ImplementorIface, Clutter.Animatable, Scrollable
    {
        static $gtype: GObject.GType<BoxLayout>;

        // Properties

        /**
         * A convenience property for the {@link Clutter.BoxLayout.pack_start} property of the
         * internal layout for {@link St.BoxLayout}.
         */
        get pack_start(): boolean;
        set pack_start(val: boolean);
        /**
         * A convenience property for the {@link Clutter.BoxLayout.pack_start} property of the
         * internal layout for {@link St.BoxLayout}.
         */
        get packStart(): boolean;
        set packStart(val: boolean);
        /**
         * A convenience property for the {@link Clutter.BoxLayout.vertical} property of the
         * internal layout for {@link St.BoxLayout}.
         */
        get vertical(): boolean;
        set vertical(val: boolean);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: BoxLayout.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<BoxLayout.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): BoxLayout;

        // Signals

        /** @signal */
        connect<K extends keyof BoxLayout.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, BoxLayout.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof BoxLayout.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, BoxLayout.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof BoxLayout.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<BoxLayout.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * @returns the value of the {@link St.BoxLayout.pack_start} property,   always `false`
         */
        get_pack_start(): boolean;
        /**
         * Get the value of the {@link St.BoxLayout.vertical} property.
         * @returns `true` if the layout is vertical
         */
        get_vertical(): boolean;
        /**
         * @param pack_start `true` if the layout should use pack-start
         */
        set_pack_start(pack_start: boolean): void;
        /**
         * Set the value of the {@link St.BoxLayout.vertical} property
         * @param vertical `true` if the layout should be vertical
         */
        set_vertical(vertical: boolean): void;
        /**
         * The horizontal {@link St.Adjustment} used by the {@link St.Scrollable}.
         *
         * Implementations should override this property to provide read-write
         * access to the {@link St.Adjustment}.
         *
         * JavaScript code may override this as demonstrated below:
         *
         * ```js
         * export const MyScrollable = GObject.registerClass({
         *     Properties: {
         *         'hadjustment': GObject.ParamSpec.override(
         *             'hadjustment',
         *             St.Scrollable
         *         )
         *     }
         * }, class MyScrollable extends St.Scrollable {
         *
         *     get `hadjustment()` {
         *         return this._hadjustment || null;
         *     }
         *
         *     set hadjustment(adjustment) {
         *         if (this.hadjustment === adjustment)
         *             return;
         *
         *         this._hadjustment = adjustment;
         *         this.notify('hadjustment');
         *     }
         * });
         * ```
         * @category Inherited from St.Scrollable
         */
        get hadjustment(): Adjustment;
        set hadjustment(val: Adjustment);
        /**
         * The vertical {@link St.Adjustment} used by the {@link St.Scrollable}.
         *
         * Implementations should override this property to provide read-write
         * access to the {@link St.Adjustment}.
         *
         * See {@link St.Scrollable.hadjustment} for an example of how to override this
         * property in JavaScript code.
         * @category Inherited from St.Scrollable
         */
        get vadjustment(): Adjustment;
        set vadjustment(val: Adjustment);
        /**
         * @param hadjustment
         * @param vadjustment
         */
        get_adjustments(hadjustment: Adjustment, vadjustment: Adjustment): void;
        /**
         * This method should be implemented by classes implementing the {@link St.Scrollable}
         * interface.
         *
         * JavaScript code should do this by overriding the `vfunc_set_adjustments()`
         * method.
         * @param hadjustment the horizontal {@link St.Adjustment}
         * @param vadjustment the vertical {@link St.Adjustment}
         */
        set_adjustments(hadjustment: Adjustment, vadjustment: Adjustment): void;
        /**
         * @param hadjustment
         * @param vadjustment
         * @virtual
         */
        vfunc_get_adjustments(hadjustment: Adjustment, vadjustment: Adjustment): void;
        /**
         * This method should be implemented by classes implementing the {@link St.Scrollable}
         * interface.
         *
         * JavaScript code should do this by overriding the `vfunc_set_adjustments()`
         * method.
         * @param hadjustment the horizontal {@link St.Adjustment}
         * @param vadjustment the vertical {@link St.Adjustment}
         * @virtual
         */
        vfunc_set_adjustments(hadjustment: Adjustment, vadjustment: Adjustment): void;
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
         * Will result in the "sensitive" property of the widget {@link GObject.Object} instance to be
         * updated with the same value of the "active" property of the action {@link GObject.Object}
         * instance.
         *
         * If `flags` contains {@link GObject.BindingFlags.BIDIRECTIONAL} then the binding will be mutual:
         * if `target_property` on `target` changes then the `source_property` on `source`
         * will be updated as well.
         *
         * The binding will automatically be removed when either the `source` or the
         * `target` instances are finalized. To remove the binding without affecting the
         * `source` and the `target` you can just call `g_object_unref()` on the returned
         * {@link GObject.Binding} instance.
         *
         * Removing the binding by calling `g_object_unref()` on it must only be done if
         * the binding, `source` and `target` are only used from a single thread and it
         * is clear that both `source` and `target` outlive the binding. Especially it
         * is not safe to rely on this if the binding, `source` or `target` can be
         * finalized from different threads. Keep another reference to the binding and
         * use `g_binding_unbind()` instead to be on the safe side.
         *
         * A {@link GObject.Object} can have multiple bindings.
         * @param source_property the property on `source` to bind
         * @param target the target {@link GObject.Object}
         * @param target_property the property on `target` to bind
         * @param flags flags to pass to {@link GObject.Binding}
         * @returns the {@link GObject.Binding} instance representing the     binding between the two {@link GObject.Object} instances. The binding is released     whenever the {@link GObject.Binding} reference count reaches zero.
         */
        bind_property(
            source_property: string,
            target: GObject.Object,
            target_property: string,
            flags: GObject.BindingFlags | null,
        ): GObject.Binding;
        /**
         * Complete version of `g_object_bind_property()`.
         *
         * Creates a binding between `source_property` on `source` and `target_property`
         * on `target`, allowing you to set the transformation functions to be used by
         * the binding.
         *
         * If `flags` contains {@link GObject.BindingFlags.BIDIRECTIONAL} then the binding will be mutual:
         * if `target_property` on `target` changes then the `source_property` on `source`
         * will be updated as well. The `transform_from` function is only used in case
         * of bidirectional bindings, otherwise it will be ignored
         *
         * The binding will automatically be removed when either the `source` or the
         * `target` instances are finalized. This will release the reference that is
         * being held on the {@link GObject.Binding} instance; if you want to hold on to the
         * {@link GObject.Binding} instance, you will need to hold a reference to it.
         *
         * To remove the binding, call `g_binding_unbind()`.
         *
         * A {@link GObject.Object} can have multiple bindings.
         *
         * The same `user_data` parameter will be used for both `transform_to`
         * and `transform_from` transformation functions; the `notify` function will
         * be called once, when the binding is removed. If you need different data
         * for each transformation function, please use
         * `g_object_bind_property_with_closures()` instead.
         * @param source_property the property on `source` to bind
         * @param target the target {@link GObject.Object}
         * @param target_property the property on `target` to bind
         * @param flags flags to pass to {@link GObject.Binding}
         * @param transform_to the transformation function     from the `source` to the `target`, or `null` to use the default
         * @param transform_from the transformation function     from the `target` to the `source`, or `null` to use the default
         * @param notify a function to call when disposing the binding, to free     resources used by the transformation functions, or `null` if not required
         * @returns the {@link GObject.Binding} instance representing the     binding between the two {@link GObject.Object} instances. The binding is released     whenever the {@link GObject.Binding} reference count reaches zero.
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
        /**
         * @param args
         */
        // Conflicted with GObject.Object.bind_property_full
        bind_property_full(...args: never[]): any;
        /**
         * This function is intended for {@link GObject.Object} implementations to re-enforce
         * a [floating][floating-ref] object reference. Doing this is seldom
         * required: all `GInitiallyUnowneds` are created with a floating reference
         * which usually just needs to be sunken by calling `g_object_ref_sink()`.
         */
        force_floating(): void;
        /**
         * Increases the freeze count on `object`. If the freeze count is
         * non-zero, the emission of "notify" signals on `object` is
         * stopped. The signals are queued until the freeze count is decreased
         * to zero. Duplicate notifications are squashed so that at most one
         * {@link GObject.Object.SignalSignatures.notify | GObject.Object::notify} signal is emitted for each property modified while the
         * object is frozen.
         *
         * This is necessary for accessors that modify multiple properties to prevent
         * premature notification while the object is still being modified.
         */
        freeze_notify(): void;
        /**
         * Gets a named field from the objects table of associations (see `g_object_set_data()`).
         * @param key name of the key for that association
         * @returns the data if found,          or `null` if no such data exists.
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
         * `g_object_set_qdata()`.
         * @param quark A {@link GLib.Quark}, naming the user data pointer
         * @returns The user data pointer set, or `null`
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
         * @returns `true` if `object` has a floating reference
         */
        is_floating(): boolean;
        /**
         * Emits a "notify" signal for the property `property_name` on `object`.
         *
         * When possible, eg. when signaling a property change from within the class
         * that registered the property, you should use `g_object_notify_by_pspec()`
         * instead.
         *
         * Note that emission of the notify signal may be blocked with
         * `g_object_freeze_notify()`. In this case, the signal emissions are queued
         * and will be emitted (in reverse order) when `g_object_thaw_notify()` is
         * called.
         * @param property_name the name of a property installed on the class of `object`.
         */
        notify(property_name: string): void;
        /**
         * Emits a "notify" signal for the property specified by `pspec` on `object`.
         *
         * This function omits the property name lookup, hence it is faster than
         * `g_object_notify()`.
         *
         * One way to avoid using `g_object_notify()` from within the
         * class that registered the properties, and using `g_object_notify_by_pspec()`
         * instead, is to store the GParamSpec used with
         * `g_object_class_install_property()` inside a static array, e.g.:
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
         * @param pspec the {@link GObject.ParamSpec} of a property installed on the class of `object`.
         */
        notify_by_pspec(pspec: GObject.ParamSpec): void;
        /**
         * Increases the reference count of `object`.
         *
         * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
         * of `object` will be propagated to the return type (using the GCC `typeof()`
         * extension), so any casting the caller needs to do on the return type must be
         * explicit.
         * @returns the same `object`
         */
        ref(): GObject.Object;
        /**
         * Increase the reference count of `object`, and possibly remove the
         * [floating][floating-ref] reference, if `object` has a floating reference.
         *
         * In other words, if the object is floating, then this call "assumes
         * ownership" of the floating reference, converting it to a normal
         * reference by clearing the floating flag while leaving the reference
         * count unchanged.  If the object is not floating, then this call
         * adds a new normal reference increasing the reference count by one.
         *
         * Since GLib 2.56, the type of `object` will be propagated to the return type
         * under the same conditions as for `g_object_ref()`.
         * @returns `object`
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
         * Internally, the `key` is converted to a {@link GLib.Quark} using `g_quark_from_string()`.
         * This means a copy of `key` is kept permanently (even after `object` has been
         * finalized) — so it is recommended to only use a small, bounded set of values
         * for `key` in your program, to avoid the {@link GLib.Quark} storage growing unbounded.
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
         * @returns the data if found, or `null`          if no such data exists.
         */
        steal_data(key: string): any | null;
        /**
         * This function gets back user data pointers stored via
         * `g_object_set_qdata()` and removes the `data` from object
         * without invoking its `destroy()` function (if any was
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
         * Using `g_object_get_qdata()` in the above example, instead of
         * `g_object_steal_qdata()` would have left the destroy function set,
         * and thus the partial string list would have been freed upon
         * `g_object_set_qdata_full()`.
         * @param quark A {@link GLib.Quark}, naming the user data pointer
         * @returns The user data pointer set, or `null`
         */
        steal_qdata(quark: GLib.Quark): any | null;
        /**
         * Reverts the effect of a previous call to
         * `g_object_freeze_notify()`. The freeze count is decreased on `object`
         * and when it reaches zero, queued "notify" signals are emitted.
         *
         * Duplicate notifications for each property are squashed so that at most one
         * {@link GObject.Object.SignalSignatures.notify | GObject.Object::notify} signal is emitted for each property, in the reverse order
         * in which they have been queued.
         *
         * It is an error to call this function when the freeze count is zero.
         */
        thaw_notify(): void;
        /**
         * Decreases the reference count of `object`. When its reference count
         * drops to 0, the object is finalized (i.e. its memory is freed).
         *
         * If the pointer to the {@link GObject.Object} may be reused in future (for example, if it is
         * an instance variable of another object), it is recommended to clear the
         * pointer to `null` rather than retain a dangling pointer to a potentially
         * invalid {@link GObject.Object} instance. Use `g_clear_object()` for this.
         */
        unref(): void;
        /**
         * This function essentially limits the life time of the `closure` to
         * the life time of the object. That is, when the object is finalized,
         * the `closure` is invalidated by calling `g_closure_invalidate()` on
         * it, in order to prevent invocations of the closure with a finalized
         * (nonexisting) object. Also, `g_object_ref()` and `g_object_unref()` are
         * added as marshal guards to the `closure`, to ensure that an extra
         * reference count is held on `object` during invocation of the
         * `closure`.  Usually, this function will be called on closures that
         * use this `object` as closure data.
         * @param closure {@link GObject.Closure} to watch
         */
        watch_closure(closure: GObject.Closure): void;
        /**
         * the `constructed` function is called by `g_object_new()` as the
         *  final step of the object creation process.  At the point of the call, all
         *  construction properties have been set on the object.  The purpose of this
         *  call is to allow for object initialisation steps that can only be performed
         *  after construction properties have been set.  `constructed` implementors
         *  should chain up to the `constructed` call of their parent class to allow it
         *  to complete its initialisation.
         * @virtual
         */
        vfunc_constructed(): void;
        /**
         * emits property change notification for a bunch
         *  of properties. Overriding `dispatch_properties_changed` should be rarely
         *  needed.
         * @param n_pspecs
         * @param pspecs
         * @virtual
         */
        vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void;
        /**
         * the `dispose` function is supposed to drop all references to other
         *  objects, but keep the instance otherwise intact, so that client method
         *  invocations still work. It may be run multiple times (due to reference
         *  loops). Before returning, `dispose` should chain up to the `dispose` method
         *  of the parent class.
         * @virtual
         */
        vfunc_dispose(): void;
        /**
         * instance finalization function, should finish the finalization of
         *  the instance begun in `dispose` and chain up to the `finalize` method of the
         *  parent class.
         * @virtual
         */
        vfunc_finalize(): void;
        /**
         * the generic getter for all properties of this type. Should be
         *  overridden for every type with properties.
         * @param property_id
         * @param value
         * @param pspec
         * @virtual
         */
        vfunc_get_property(property_id: number, value: GObject.Value | any, pspec: GObject.ParamSpec): void;
        /**
         * Emits a "notify" signal for the property `property_name` on `object`.
         *
         * When possible, eg. when signaling a property change from within the class
         * that registered the property, you should use `g_object_notify_by_pspec()`
         * instead.
         *
         * Note that emission of the notify signal may be blocked with
         * `g_object_freeze_notify()`. In this case, the signal emissions are queued
         * and will be emitted (in reverse order) when `g_object_thaw_notify()` is
         * called.
         * @param pspec
         * @virtual
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
         * @virtual
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

    namespace Button {
        // Signal signatures
        interface SignalSignatures extends Bin.SignalSignatures {
            /**
             * Emitted when the user activates the button, either with a mouse press and
             * release or with the keyboard.
             * @signal
             */
            clicked: (arg0: number) => void;
            'notify::button-mask': (pspec: GObject.ParamSpec) => void;
            'notify::checked': (pspec: GObject.ParamSpec) => void;
            'notify::icon-name': (pspec: GObject.ParamSpec) => void;
            'notify::label': (pspec: GObject.ParamSpec) => void;
            'notify::pressed': (pspec: GObject.ParamSpec) => void;
            'notify::toggle-mode': (pspec: GObject.ParamSpec) => void;
            'notify::child': (pspec: GObject.ParamSpec) => void;
            'notify::can-focus': (pspec: GObject.ParamSpec) => void;
            'notify::hover': (pspec: GObject.ParamSpec) => void;
            'notify::label-actor': (pspec: GObject.ParamSpec) => void;
            'notify::pseudo-class': (pspec: GObject.ParamSpec) => void;
            'notify::style': (pspec: GObject.ParamSpec) => void;
            'notify::style-class': (pspec: GObject.ParamSpec) => void;
            'notify::track-hover': (pspec: GObject.ParamSpec) => void;
            'notify::accessible-name': (pspec: GObject.ParamSpec) => void;
            'notify::accessible-role': (pspec: GObject.ParamSpec) => void;
            'notify::actions': (pspec: GObject.ParamSpec) => void;
            'notify::allocation': (pspec: GObject.ParamSpec) => void;
            'notify::background-color': (pspec: GObject.ParamSpec) => void;
            'notify::background-color-set': (pspec: GObject.ParamSpec) => void;
            'notify::child-transform': (pspec: GObject.ParamSpec) => void;
            'notify::child-transform-set': (pspec: GObject.ParamSpec) => void;
            'notify::clip-rect': (pspec: GObject.ParamSpec) => void;
            'notify::clip-to-allocation': (pspec: GObject.ParamSpec) => void;
            'notify::color-state': (pspec: GObject.ParamSpec) => void;
            'notify::constraints': (pspec: GObject.ParamSpec) => void;
            'notify::content': (pspec: GObject.ParamSpec) => void;
            'notify::content-box': (pspec: GObject.ParamSpec) => void;
            'notify::content-gravity': (pspec: GObject.ParamSpec) => void;
            'notify::content-repeat': (pspec: GObject.ParamSpec) => void;
            'notify::context': (pspec: GObject.ParamSpec) => void;
            'notify::effect': (pspec: GObject.ParamSpec) => void;
            'notify::first-child': (pspec: GObject.ParamSpec) => void;
            'notify::fixed-position-set': (pspec: GObject.ParamSpec) => void;
            'notify::fixed-x': (pspec: GObject.ParamSpec) => void;
            'notify::fixed-y': (pspec: GObject.ParamSpec) => void;
            'notify::has-clip': (pspec: GObject.ParamSpec) => void;
            'notify::has-pointer': (pspec: GObject.ParamSpec) => void;
            'notify::height': (pspec: GObject.ParamSpec) => void;
            'notify::last-child': (pspec: GObject.ParamSpec) => void;
            'notify::layout-manager': (pspec: GObject.ParamSpec) => void;
            'notify::magnification-filter': (pspec: GObject.ParamSpec) => void;
            'notify::mapped': (pspec: GObject.ParamSpec) => void;
            'notify::margin-bottom': (pspec: GObject.ParamSpec) => void;
            'notify::margin-left': (pspec: GObject.ParamSpec) => void;
            'notify::margin-right': (pspec: GObject.ParamSpec) => void;
            'notify::margin-top': (pspec: GObject.ParamSpec) => void;
            'notify::min-height': (pspec: GObject.ParamSpec) => void;
            'notify::min-height-set': (pspec: GObject.ParamSpec) => void;
            'notify::min-width': (pspec: GObject.ParamSpec) => void;
            'notify::min-width-set': (pspec: GObject.ParamSpec) => void;
            'notify::minification-filter': (pspec: GObject.ParamSpec) => void;
            'notify::name': (pspec: GObject.ParamSpec) => void;
            'notify::natural-height': (pspec: GObject.ParamSpec) => void;
            'notify::natural-height-set': (pspec: GObject.ParamSpec) => void;
            'notify::natural-width': (pspec: GObject.ParamSpec) => void;
            'notify::natural-width-set': (pspec: GObject.ParamSpec) => void;
            'notify::offscreen-redirect': (pspec: GObject.ParamSpec) => void;
            'notify::opacity': (pspec: GObject.ParamSpec) => void;
            'notify::pivot-point': (pspec: GObject.ParamSpec) => void;
            'notify::pivot-point-z': (pspec: GObject.ParamSpec) => void;
            'notify::position': (pspec: GObject.ParamSpec) => void;
            'notify::reactive': (pspec: GObject.ParamSpec) => void;
            'notify::realized': (pspec: GObject.ParamSpec) => void;
            'notify::request-mode': (pspec: GObject.ParamSpec) => void;
            'notify::rotation-angle-x': (pspec: GObject.ParamSpec) => void;
            'notify::rotation-angle-y': (pspec: GObject.ParamSpec) => void;
            'notify::rotation-angle-z': (pspec: GObject.ParamSpec) => void;
            'notify::scale-x': (pspec: GObject.ParamSpec) => void;
            'notify::scale-y': (pspec: GObject.ParamSpec) => void;
            'notify::scale-z': (pspec: GObject.ParamSpec) => void;
            'notify::show-on-set-parent': (pspec: GObject.ParamSpec) => void;
            'notify::size': (pspec: GObject.ParamSpec) => void;
            'notify::text-direction': (pspec: GObject.ParamSpec) => void;
            'notify::transform': (pspec: GObject.ParamSpec) => void;
            'notify::transform-set': (pspec: GObject.ParamSpec) => void;
            'notify::translation-x': (pspec: GObject.ParamSpec) => void;
            'notify::translation-y': (pspec: GObject.ParamSpec) => void;
            'notify::translation-z': (pspec: GObject.ParamSpec) => void;
            'notify::visible': (pspec: GObject.ParamSpec) => void;
            'notify::width': (pspec: GObject.ParamSpec) => void;
            'notify::x': (pspec: GObject.ParamSpec) => void;
            'notify::x-align': (pspec: GObject.ParamSpec) => void;
            'notify::x-expand': (pspec: GObject.ParamSpec) => void;
            'notify::y': (pspec: GObject.ParamSpec) => void;
            'notify::y-align': (pspec: GObject.ParamSpec) => void;
            'notify::y-expand': (pspec: GObject.ParamSpec) => void;
            'notify::z-position': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps<A extends Clutter.Actor = Clutter.Actor>
            extends
                Bin.ConstructorProps<A>,
                Atk.ImplementorIface.ConstructorProps,
                Clutter.Animatable.ConstructorProps {
            button_mask: ButtonMask;
            buttonMask: ButtonMask;
            checked: boolean;
            icon_name: string;
            iconName: string;
            label: string;
            pressed: boolean;
            toggle_mode: boolean;
            toggleMode: boolean;
        }
    }

    /**
     * Button widget
     *
     * A button widget with support for either a text label or icon, toggle mode
     * and transitions effects between states.
     * @gir-type Class
     */
    class Button<A extends Clutter.Actor = Clutter.Actor>
        extends Bin<A>
        implements Atk.ImplementorIface, Clutter.Animatable
    {
        static $gtype: GObject.GType<Button>;

        // Properties

        /**
         * Which buttons will trigger the {@link St.Button.SignalSignatures.clicked | St.Button::clicked} signal.
         */
        get button_mask(): ButtonMask;
        set button_mask(val: ButtonMask);
        /**
         * Which buttons will trigger the {@link St.Button.SignalSignatures.clicked | St.Button::clicked} signal.
         */
        get buttonMask(): ButtonMask;
        set buttonMask(val: ButtonMask);
        /**
         * If {@link St.Button.toggle_mode} is `true`, indicates if the {@link St.Button} is toggled
         * "on" or "off".
         *
         * When the value is `true`, the {@link St.Button} will have the `checked` CSS
         * pseudo-class set.
         */
        get checked(): boolean;
        set checked(val: boolean);
        /**
         * The icon name of the {@link St.Button}.
         */
        get icon_name(): string;
        set icon_name(val: string);
        /**
         * The icon name of the {@link St.Button}.
         */
        get iconName(): string;
        set iconName(val: string);
        /**
         * The label of the {@link St.Button}.
         */
        get label(): string;
        set label(val: string);
        /**
         * In contrast to {@link St.Button.checked}, this property indicates whether the
         * {@link St.Button} is being actively pressed, rather than just in the "on" state.
         */
        get pressed(): boolean;
        /**
         * Whether the {@link St.Button} is operating in toggle mode (on/off).
         */
        get toggle_mode(): boolean;
        set toggle_mode(val: boolean);
        /**
         * Whether the {@link St.Button} is operating in toggle mode (on/off).
         */
        get toggleMode(): boolean;
        set toggleMode(val: boolean);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Button.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<Button.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): Button;

        static new_with_label(text: string): Button;

        // Signals

        /** @signal */
        connect<K extends keyof Button.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Button.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof Button.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Button.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof Button.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Button.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Virtual methods

        /**
         * @param clicked_button
         * @virtual
         */
        vfunc_clicked(clicked_button: number): void;
        /**
         * @virtual
         */
        vfunc_transition(): void;

        // Methods

        /**
         * If this widget is holding a pointer grab, this function will
         * will ungrab it, and reset the {@link St.Button.pressed} state.  The effect is
         * similar to if the user had released the mouse button, but without
         * emitting the {@link St.Button.SignalSignatures.clicked | St.Button::clicked} signal.
         *
         * This function is useful if for example you want to do something
         * after the user is holding the mouse button for a given period of
         * time, breaking the grab.
         */
        fake_release(): void;
        /**
         * Gets the mask of mouse buttons that `button` emits the
         * {@link St.Button.SignalSignatures.clicked | St.Button::clicked} signal for.
         * @returns the mask of mouse buttons that `button` emits the {@link St.Button.SignalSignatures.clicked | St.Button::clicked} signal for.
         */
        get_button_mask(): ButtonMask;
        /**
         * Get the {@link St.Button.checked} property of a {@link St.Button} that is in toggle mode.
         * @returns `true` if the button is checked, or `false` if not
         */
        get_checked(): boolean;
        /**
         * Get the icon name of the button. If the button isn't showing an icon,
         * the return value will be `null`.
         * @returns the icon name of the button
         */
        get_icon_name(): string | null;
        /**
         * Get the text displayed on the button. If the label is empty, an empty string
         * will be returned instead of `null`.
         * @returns the text for the button
         */
        get_label(): string;
        /**
         * Get the toggle mode status of the button.
         * @returns `true` if toggle mode is set, otherwise `false`
         */
        get_toggle_mode(): boolean;
        /**
         * Sets which mouse buttons `button` emits {@link St.Button.SignalSignatures.clicked | St.Button::clicked} for.
         * @param mask the mask of mouse buttons that `button` responds to
         */
        set_button_mask(mask: ButtonMask | null): void;
        /**
         * Set the {@link St.Button.checked} property of the button. This is only really useful
         * if the button has {@link St.Button.toggle_mode} property set to `true`.
         * @param checked `true` or `false`
         */
        set_checked(checked: boolean): void;
        /**
         * Adds an {@link St.Icon} with the given icon name as a child.
         *
         * If `button` already contains a child actor, that child will
         * be removed and replaced with the icon.
         * @param icon_name an icon name
         */
        set_icon_name(icon_name: string): void;
        /**
         * Sets the text displayed on the button.
         * @param text text to set the label to
         */
        set_label(text?: string | null): void;
        /**
         * Enables or disables toggle mode for the button. In toggle mode, the checked
         * state will be "toggled" when the user clicks the button.
         * @param toggle `true` or `false`
         */
        set_toggle_mode(toggle: boolean): void;
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
         * Will result in the "sensitive" property of the widget {@link GObject.Object} instance to be
         * updated with the same value of the "active" property of the action {@link GObject.Object}
         * instance.
         *
         * If `flags` contains {@link GObject.BindingFlags.BIDIRECTIONAL} then the binding will be mutual:
         * if `target_property` on `target` changes then the `source_property` on `source`
         * will be updated as well.
         *
         * The binding will automatically be removed when either the `source` or the
         * `target` instances are finalized. To remove the binding without affecting the
         * `source` and the `target` you can just call `g_object_unref()` on the returned
         * {@link GObject.Binding} instance.
         *
         * Removing the binding by calling `g_object_unref()` on it must only be done if
         * the binding, `source` and `target` are only used from a single thread and it
         * is clear that both `source` and `target` outlive the binding. Especially it
         * is not safe to rely on this if the binding, `source` or `target` can be
         * finalized from different threads. Keep another reference to the binding and
         * use `g_binding_unbind()` instead to be on the safe side.
         *
         * A {@link GObject.Object} can have multiple bindings.
         * @param source_property the property on `source` to bind
         * @param target the target {@link GObject.Object}
         * @param target_property the property on `target` to bind
         * @param flags flags to pass to {@link GObject.Binding}
         * @returns the {@link GObject.Binding} instance representing the     binding between the two {@link GObject.Object} instances. The binding is released     whenever the {@link GObject.Binding} reference count reaches zero.
         */
        bind_property(
            source_property: string,
            target: GObject.Object,
            target_property: string,
            flags: GObject.BindingFlags | null,
        ): GObject.Binding;
        /**
         * Complete version of `g_object_bind_property()`.
         *
         * Creates a binding between `source_property` on `source` and `target_property`
         * on `target`, allowing you to set the transformation functions to be used by
         * the binding.
         *
         * If `flags` contains {@link GObject.BindingFlags.BIDIRECTIONAL} then the binding will be mutual:
         * if `target_property` on `target` changes then the `source_property` on `source`
         * will be updated as well. The `transform_from` function is only used in case
         * of bidirectional bindings, otherwise it will be ignored
         *
         * The binding will automatically be removed when either the `source` or the
         * `target` instances are finalized. This will release the reference that is
         * being held on the {@link GObject.Binding} instance; if you want to hold on to the
         * {@link GObject.Binding} instance, you will need to hold a reference to it.
         *
         * To remove the binding, call `g_binding_unbind()`.
         *
         * A {@link GObject.Object} can have multiple bindings.
         *
         * The same `user_data` parameter will be used for both `transform_to`
         * and `transform_from` transformation functions; the `notify` function will
         * be called once, when the binding is removed. If you need different data
         * for each transformation function, please use
         * `g_object_bind_property_with_closures()` instead.
         * @param source_property the property on `source` to bind
         * @param target the target {@link GObject.Object}
         * @param target_property the property on `target` to bind
         * @param flags flags to pass to {@link GObject.Binding}
         * @param transform_to the transformation function     from the `source` to the `target`, or `null` to use the default
         * @param transform_from the transformation function     from the `target` to the `source`, or `null` to use the default
         * @param notify a function to call when disposing the binding, to free     resources used by the transformation functions, or `null` if not required
         * @returns the {@link GObject.Binding} instance representing the     binding between the two {@link GObject.Object} instances. The binding is released     whenever the {@link GObject.Binding} reference count reaches zero.
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
        /**
         * @param args
         */
        // Conflicted with GObject.Object.bind_property_full
        bind_property_full(...args: never[]): any;
        /**
         * This function is intended for {@link GObject.Object} implementations to re-enforce
         * a [floating][floating-ref] object reference. Doing this is seldom
         * required: all `GInitiallyUnowneds` are created with a floating reference
         * which usually just needs to be sunken by calling `g_object_ref_sink()`.
         */
        force_floating(): void;
        /**
         * Increases the freeze count on `object`. If the freeze count is
         * non-zero, the emission of "notify" signals on `object` is
         * stopped. The signals are queued until the freeze count is decreased
         * to zero. Duplicate notifications are squashed so that at most one
         * {@link GObject.Object.SignalSignatures.notify | GObject.Object::notify} signal is emitted for each property modified while the
         * object is frozen.
         *
         * This is necessary for accessors that modify multiple properties to prevent
         * premature notification while the object is still being modified.
         */
        freeze_notify(): void;
        /**
         * Gets a named field from the objects table of associations (see `g_object_set_data()`).
         * @param key name of the key for that association
         * @returns the data if found,          or `null` if no such data exists.
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
         * `g_object_set_qdata()`.
         * @param quark A {@link GLib.Quark}, naming the user data pointer
         * @returns The user data pointer set, or `null`
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
         * @returns `true` if `object` has a floating reference
         */
        is_floating(): boolean;
        /**
         * Emits a "notify" signal for the property `property_name` on `object`.
         *
         * When possible, eg. when signaling a property change from within the class
         * that registered the property, you should use `g_object_notify_by_pspec()`
         * instead.
         *
         * Note that emission of the notify signal may be blocked with
         * `g_object_freeze_notify()`. In this case, the signal emissions are queued
         * and will be emitted (in reverse order) when `g_object_thaw_notify()` is
         * called.
         * @param property_name the name of a property installed on the class of `object`.
         */
        notify(property_name: string): void;
        /**
         * Emits a "notify" signal for the property specified by `pspec` on `object`.
         *
         * This function omits the property name lookup, hence it is faster than
         * `g_object_notify()`.
         *
         * One way to avoid using `g_object_notify()` from within the
         * class that registered the properties, and using `g_object_notify_by_pspec()`
         * instead, is to store the GParamSpec used with
         * `g_object_class_install_property()` inside a static array, e.g.:
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
         * @param pspec the {@link GObject.ParamSpec} of a property installed on the class of `object`.
         */
        notify_by_pspec(pspec: GObject.ParamSpec): void;
        /**
         * Increases the reference count of `object`.
         *
         * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
         * of `object` will be propagated to the return type (using the GCC `typeof()`
         * extension), so any casting the caller needs to do on the return type must be
         * explicit.
         * @returns the same `object`
         */
        ref(): GObject.Object;
        /**
         * Increase the reference count of `object`, and possibly remove the
         * [floating][floating-ref] reference, if `object` has a floating reference.
         *
         * In other words, if the object is floating, then this call "assumes
         * ownership" of the floating reference, converting it to a normal
         * reference by clearing the floating flag while leaving the reference
         * count unchanged.  If the object is not floating, then this call
         * adds a new normal reference increasing the reference count by one.
         *
         * Since GLib 2.56, the type of `object` will be propagated to the return type
         * under the same conditions as for `g_object_ref()`.
         * @returns `object`
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
         * Internally, the `key` is converted to a {@link GLib.Quark} using `g_quark_from_string()`.
         * This means a copy of `key` is kept permanently (even after `object` has been
         * finalized) — so it is recommended to only use a small, bounded set of values
         * for `key` in your program, to avoid the {@link GLib.Quark} storage growing unbounded.
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
         * @returns the data if found, or `null`          if no such data exists.
         */
        steal_data(key: string): any | null;
        /**
         * This function gets back user data pointers stored via
         * `g_object_set_qdata()` and removes the `data` from object
         * without invoking its `destroy()` function (if any was
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
         * Using `g_object_get_qdata()` in the above example, instead of
         * `g_object_steal_qdata()` would have left the destroy function set,
         * and thus the partial string list would have been freed upon
         * `g_object_set_qdata_full()`.
         * @param quark A {@link GLib.Quark}, naming the user data pointer
         * @returns The user data pointer set, or `null`
         */
        steal_qdata(quark: GLib.Quark): any | null;
        /**
         * Reverts the effect of a previous call to
         * `g_object_freeze_notify()`. The freeze count is decreased on `object`
         * and when it reaches zero, queued "notify" signals are emitted.
         *
         * Duplicate notifications for each property are squashed so that at most one
         * {@link GObject.Object.SignalSignatures.notify | GObject.Object::notify} signal is emitted for each property, in the reverse order
         * in which they have been queued.
         *
         * It is an error to call this function when the freeze count is zero.
         */
        thaw_notify(): void;
        /**
         * Decreases the reference count of `object`. When its reference count
         * drops to 0, the object is finalized (i.e. its memory is freed).
         *
         * If the pointer to the {@link GObject.Object} may be reused in future (for example, if it is
         * an instance variable of another object), it is recommended to clear the
         * pointer to `null` rather than retain a dangling pointer to a potentially
         * invalid {@link GObject.Object} instance. Use `g_clear_object()` for this.
         */
        unref(): void;
        /**
         * This function essentially limits the life time of the `closure` to
         * the life time of the object. That is, when the object is finalized,
         * the `closure` is invalidated by calling `g_closure_invalidate()` on
         * it, in order to prevent invocations of the closure with a finalized
         * (nonexisting) object. Also, `g_object_ref()` and `g_object_unref()` are
         * added as marshal guards to the `closure`, to ensure that an extra
         * reference count is held on `object` during invocation of the
         * `closure`.  Usually, this function will be called on closures that
         * use this `object` as closure data.
         * @param closure {@link GObject.Closure} to watch
         */
        watch_closure(closure: GObject.Closure): void;
        /**
         * the `constructed` function is called by `g_object_new()` as the
         *  final step of the object creation process.  At the point of the call, all
         *  construction properties have been set on the object.  The purpose of this
         *  call is to allow for object initialisation steps that can only be performed
         *  after construction properties have been set.  `constructed` implementors
         *  should chain up to the `constructed` call of their parent class to allow it
         *  to complete its initialisation.
         * @virtual
         */
        vfunc_constructed(): void;
        /**
         * emits property change notification for a bunch
         *  of properties. Overriding `dispatch_properties_changed` should be rarely
         *  needed.
         * @param n_pspecs
         * @param pspecs
         * @virtual
         */
        vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void;
        /**
         * the `dispose` function is supposed to drop all references to other
         *  objects, but keep the instance otherwise intact, so that client method
         *  invocations still work. It may be run multiple times (due to reference
         *  loops). Before returning, `dispose` should chain up to the `dispose` method
         *  of the parent class.
         * @virtual
         */
        vfunc_dispose(): void;
        /**
         * instance finalization function, should finish the finalization of
         *  the instance begun in `dispose` and chain up to the `finalize` method of the
         *  parent class.
         * @virtual
         */
        vfunc_finalize(): void;
        /**
         * the generic getter for all properties of this type. Should be
         *  overridden for every type with properties.
         * @param property_id
         * @param value
         * @param pspec
         * @virtual
         */
        vfunc_get_property(property_id: number, value: GObject.Value | any, pspec: GObject.ParamSpec): void;
        /**
         * Emits a "notify" signal for the property `property_name` on `object`.
         *
         * When possible, eg. when signaling a property change from within the class
         * that registered the property, you should use `g_object_notify_by_pspec()`
         * instead.
         *
         * Note that emission of the notify signal may be blocked with
         * `g_object_freeze_notify()`. In this case, the signal emissions are queued
         * and will be emitted (in reverse order) when `g_object_thaw_notify()` is
         * called.
         * @param pspec
         * @virtual
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
         * @virtual
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

    namespace Clipboard {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    /**
     * A simple representation of the clipboard
     *
     * `StCliboard` is a very simple object representation of the clipboard
     * available to applications. Text is always assumed to be UTF-8 and non-text
     * items are not handled.
     * @gir-type Class
     */
    class Clipboard extends GObject.Object {
        static $gtype: GObject.GType<Clipboard>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Clipboard.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<Clipboard.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        /** @signal */
        connect<K extends keyof Clipboard.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Clipboard.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof Clipboard.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Clipboard.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof Clipboard.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Clipboard.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Static methods

        /**
         * Get the global {@link St.Clipboard} object that represents the clipboard.
         */
        static get_default(): Clipboard;

        // Methods

        /**
         * Request the data from the clipboard in {@link GLib.Bytes} form. `callback` is executed
         * when the data is retrieved.
         * @param type The type of clipboard data you want
         * @param mimetype The mimetype to get content for
         * @param callback function to be called when the type is retrieved
         */
        get_content(type: ClipboardType | null, mimetype: string, callback: ClipboardContentCallbackFunc): void;
        /**
         * Gets a list of the mimetypes supported by the default {@link St.Clipboard}.
         * @param type
         * @returns the supported mimetypes
         */
        get_mimetypes(type: ClipboardType | null): string[];
        /**
         * Request the data from the clipboard in text form. `callback` is executed
         * when the data is retrieved.
         * @param type The type of clipboard data you want
         * @param callback function to be called when the text is retrieved
         */
        get_text(type: ClipboardType | null, callback: ClipboardCallbackFunc): void;
        /**
         * Sets the clipboard content to `bytes`.
         *
         * `mimetype` is a semi-colon separated list of mime-type strings.
         * @param type The type of clipboard that you want to set
         * @param mimetype content mimetype
         * @param bytes content data
         */
        set_content(type: ClipboardType | null, mimetype: string, bytes: GLib.Bytes | Uint8Array): void;
        /**
         * Sets text as the current contents of the clipboard.
         * @param type The type of clipboard that you want to set
         * @param text text to copy to the clipboard
         */
        set_text(type: ClipboardType | null, text: string): void;
    }

    namespace DrawingArea {
        // Signal signatures
        interface SignalSignatures extends Widget.SignalSignatures {
            /**
             * @signal
             */
            repaint: () => void;
            'notify::can-focus': (pspec: GObject.ParamSpec) => void;
            'notify::hover': (pspec: GObject.ParamSpec) => void;
            'notify::label-actor': (pspec: GObject.ParamSpec) => void;
            'notify::pseudo-class': (pspec: GObject.ParamSpec) => void;
            'notify::style': (pspec: GObject.ParamSpec) => void;
            'notify::style-class': (pspec: GObject.ParamSpec) => void;
            'notify::track-hover': (pspec: GObject.ParamSpec) => void;
            'notify::accessible-name': (pspec: GObject.ParamSpec) => void;
            'notify::accessible-role': (pspec: GObject.ParamSpec) => void;
            'notify::actions': (pspec: GObject.ParamSpec) => void;
            'notify::allocation': (pspec: GObject.ParamSpec) => void;
            'notify::background-color': (pspec: GObject.ParamSpec) => void;
            'notify::background-color-set': (pspec: GObject.ParamSpec) => void;
            'notify::child-transform': (pspec: GObject.ParamSpec) => void;
            'notify::child-transform-set': (pspec: GObject.ParamSpec) => void;
            'notify::clip-rect': (pspec: GObject.ParamSpec) => void;
            'notify::clip-to-allocation': (pspec: GObject.ParamSpec) => void;
            'notify::color-state': (pspec: GObject.ParamSpec) => void;
            'notify::constraints': (pspec: GObject.ParamSpec) => void;
            'notify::content': (pspec: GObject.ParamSpec) => void;
            'notify::content-box': (pspec: GObject.ParamSpec) => void;
            'notify::content-gravity': (pspec: GObject.ParamSpec) => void;
            'notify::content-repeat': (pspec: GObject.ParamSpec) => void;
            'notify::context': (pspec: GObject.ParamSpec) => void;
            'notify::effect': (pspec: GObject.ParamSpec) => void;
            'notify::first-child': (pspec: GObject.ParamSpec) => void;
            'notify::fixed-position-set': (pspec: GObject.ParamSpec) => void;
            'notify::fixed-x': (pspec: GObject.ParamSpec) => void;
            'notify::fixed-y': (pspec: GObject.ParamSpec) => void;
            'notify::has-clip': (pspec: GObject.ParamSpec) => void;
            'notify::has-pointer': (pspec: GObject.ParamSpec) => void;
            'notify::height': (pspec: GObject.ParamSpec) => void;
            'notify::last-child': (pspec: GObject.ParamSpec) => void;
            'notify::layout-manager': (pspec: GObject.ParamSpec) => void;
            'notify::magnification-filter': (pspec: GObject.ParamSpec) => void;
            'notify::mapped': (pspec: GObject.ParamSpec) => void;
            'notify::margin-bottom': (pspec: GObject.ParamSpec) => void;
            'notify::margin-left': (pspec: GObject.ParamSpec) => void;
            'notify::margin-right': (pspec: GObject.ParamSpec) => void;
            'notify::margin-top': (pspec: GObject.ParamSpec) => void;
            'notify::min-height': (pspec: GObject.ParamSpec) => void;
            'notify::min-height-set': (pspec: GObject.ParamSpec) => void;
            'notify::min-width': (pspec: GObject.ParamSpec) => void;
            'notify::min-width-set': (pspec: GObject.ParamSpec) => void;
            'notify::minification-filter': (pspec: GObject.ParamSpec) => void;
            'notify::name': (pspec: GObject.ParamSpec) => void;
            'notify::natural-height': (pspec: GObject.ParamSpec) => void;
            'notify::natural-height-set': (pspec: GObject.ParamSpec) => void;
            'notify::natural-width': (pspec: GObject.ParamSpec) => void;
            'notify::natural-width-set': (pspec: GObject.ParamSpec) => void;
            'notify::offscreen-redirect': (pspec: GObject.ParamSpec) => void;
            'notify::opacity': (pspec: GObject.ParamSpec) => void;
            'notify::pivot-point': (pspec: GObject.ParamSpec) => void;
            'notify::pivot-point-z': (pspec: GObject.ParamSpec) => void;
            'notify::position': (pspec: GObject.ParamSpec) => void;
            'notify::reactive': (pspec: GObject.ParamSpec) => void;
            'notify::realized': (pspec: GObject.ParamSpec) => void;
            'notify::request-mode': (pspec: GObject.ParamSpec) => void;
            'notify::rotation-angle-x': (pspec: GObject.ParamSpec) => void;
            'notify::rotation-angle-y': (pspec: GObject.ParamSpec) => void;
            'notify::rotation-angle-z': (pspec: GObject.ParamSpec) => void;
            'notify::scale-x': (pspec: GObject.ParamSpec) => void;
            'notify::scale-y': (pspec: GObject.ParamSpec) => void;
            'notify::scale-z': (pspec: GObject.ParamSpec) => void;
            'notify::show-on-set-parent': (pspec: GObject.ParamSpec) => void;
            'notify::size': (pspec: GObject.ParamSpec) => void;
            'notify::text-direction': (pspec: GObject.ParamSpec) => void;
            'notify::transform': (pspec: GObject.ParamSpec) => void;
            'notify::transform-set': (pspec: GObject.ParamSpec) => void;
            'notify::translation-x': (pspec: GObject.ParamSpec) => void;
            'notify::translation-y': (pspec: GObject.ParamSpec) => void;
            'notify::translation-z': (pspec: GObject.ParamSpec) => void;
            'notify::visible': (pspec: GObject.ParamSpec) => void;
            'notify::width': (pspec: GObject.ParamSpec) => void;
            'notify::x': (pspec: GObject.ParamSpec) => void;
            'notify::x-align': (pspec: GObject.ParamSpec) => void;
            'notify::x-expand': (pspec: GObject.ParamSpec) => void;
            'notify::y': (pspec: GObject.ParamSpec) => void;
            'notify::y-align': (pspec: GObject.ParamSpec) => void;
            'notify::y-expand': (pspec: GObject.ParamSpec) => void;
            'notify::z-position': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps
            extends
                Widget.ConstructorProps,
                Atk.ImplementorIface.ConstructorProps,
                Clutter.Animatable.ConstructorProps {}
    }

    /**
     * A dynamically-sized Cairo drawing area
     *
     * {@link St.DrawingArea} allows drawing via Cairo; the primary difference is that
     * it is dynamically sized. To use, connect to the `St.DrawingArea::repaint`
     * signal, and inside the signal handler, call
     * {@link St.DrawingArea.get_context} to get the Cairo context to draw to.  The
     * `St.DrawingArea::repaint` signal will be emitted by default when the area is
     * resized or the CSS style changes; you can use the
     * {@link St.DrawingArea.queue_repaint} as well.
     * @gir-type Class
     */
    class DrawingArea extends Widget implements Atk.ImplementorIface, Clutter.Animatable {
        static $gtype: GObject.GType<DrawingArea>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: DrawingArea.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<DrawingArea.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        /** @signal */
        connect<K extends keyof DrawingArea.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, DrawingArea.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof DrawingArea.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, DrawingArea.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof DrawingArea.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<DrawingArea.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Virtual methods

        /**
         * @virtual
         */
        vfunc_repaint(): void;

        // Methods

        /**
         * Gets the Cairo context to paint to. This function must only be called
         * from a signal handler or virtual function for the `St.DrawingArea::repaint`
         * signal.
         *
         * JavaScript code must call the special dispose function before returning from
         * the signal handler or virtual function to avoid leaking memory:
         *
         * ```js
         * function onRepaint(area) {
         *     let cr = area.get_context();
         *
         *     // Draw to the context
         *
         *     cr.$dispose();
         * }
         *
         * let area = new St.DrawingArea();
         * area.connect('repaint', onRepaint);
         * ```
         * @returns the Cairo context for the paint operation
         */
        get_context(): cairo.Context;
        /**
         * @param args
         */
        // Conflicted with Clutter.Actor.get_context
        get_context(...args: never[]): any;
        /**
         * Gets the size of the cairo surface being painted to, which is equal
         * to the size of the content area of the widget. This function must
         * only be called from a signal handler for the {@link St.DrawingArea.SignalSignatures.repaint | St.DrawingArea::repaint} signal.
         */
        get_surface_size(): [number, number];
        /**
         * Will cause the actor to emit a `St.DrawingArea::repaint` signal before it is
         * next drawn to the scene. Useful if some parameters for the area being
         * drawn other than the size or style have changed. Note that
         * `clutter_actor_queue_redraw()` will simply result in the same
         * contents being drawn to the scene again.
         */
        queue_repaint(): void;
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
         * Will result in the "sensitive" property of the widget {@link GObject.Object} instance to be
         * updated with the same value of the "active" property of the action {@link GObject.Object}
         * instance.
         *
         * If `flags` contains {@link GObject.BindingFlags.BIDIRECTIONAL} then the binding will be mutual:
         * if `target_property` on `target` changes then the `source_property` on `source`
         * will be updated as well.
         *
         * The binding will automatically be removed when either the `source` or the
         * `target` instances are finalized. To remove the binding without affecting the
         * `source` and the `target` you can just call `g_object_unref()` on the returned
         * {@link GObject.Binding} instance.
         *
         * Removing the binding by calling `g_object_unref()` on it must only be done if
         * the binding, `source` and `target` are only used from a single thread and it
         * is clear that both `source` and `target` outlive the binding. Especially it
         * is not safe to rely on this if the binding, `source` or `target` can be
         * finalized from different threads. Keep another reference to the binding and
         * use `g_binding_unbind()` instead to be on the safe side.
         *
         * A {@link GObject.Object} can have multiple bindings.
         * @param source_property the property on `source` to bind
         * @param target the target {@link GObject.Object}
         * @param target_property the property on `target` to bind
         * @param flags flags to pass to {@link GObject.Binding}
         * @returns the {@link GObject.Binding} instance representing the     binding between the two {@link GObject.Object} instances. The binding is released     whenever the {@link GObject.Binding} reference count reaches zero.
         */
        bind_property(
            source_property: string,
            target: GObject.Object,
            target_property: string,
            flags: GObject.BindingFlags | null,
        ): GObject.Binding;
        /**
         * Complete version of `g_object_bind_property()`.
         *
         * Creates a binding between `source_property` on `source` and `target_property`
         * on `target`, allowing you to set the transformation functions to be used by
         * the binding.
         *
         * If `flags` contains {@link GObject.BindingFlags.BIDIRECTIONAL} then the binding will be mutual:
         * if `target_property` on `target` changes then the `source_property` on `source`
         * will be updated as well. The `transform_from` function is only used in case
         * of bidirectional bindings, otherwise it will be ignored
         *
         * The binding will automatically be removed when either the `source` or the
         * `target` instances are finalized. This will release the reference that is
         * being held on the {@link GObject.Binding} instance; if you want to hold on to the
         * {@link GObject.Binding} instance, you will need to hold a reference to it.
         *
         * To remove the binding, call `g_binding_unbind()`.
         *
         * A {@link GObject.Object} can have multiple bindings.
         *
         * The same `user_data` parameter will be used for both `transform_to`
         * and `transform_from` transformation functions; the `notify` function will
         * be called once, when the binding is removed. If you need different data
         * for each transformation function, please use
         * `g_object_bind_property_with_closures()` instead.
         * @param source_property the property on `source` to bind
         * @param target the target {@link GObject.Object}
         * @param target_property the property on `target` to bind
         * @param flags flags to pass to {@link GObject.Binding}
         * @param transform_to the transformation function     from the `source` to the `target`, or `null` to use the default
         * @param transform_from the transformation function     from the `target` to the `source`, or `null` to use the default
         * @param notify a function to call when disposing the binding, to free     resources used by the transformation functions, or `null` if not required
         * @returns the {@link GObject.Binding} instance representing the     binding between the two {@link GObject.Object} instances. The binding is released     whenever the {@link GObject.Binding} reference count reaches zero.
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
        /**
         * @param args
         */
        // Conflicted with GObject.Object.bind_property_full
        bind_property_full(...args: never[]): any;
        /**
         * This function is intended for {@link GObject.Object} implementations to re-enforce
         * a [floating][floating-ref] object reference. Doing this is seldom
         * required: all `GInitiallyUnowneds` are created with a floating reference
         * which usually just needs to be sunken by calling `g_object_ref_sink()`.
         */
        force_floating(): void;
        /**
         * Increases the freeze count on `object`. If the freeze count is
         * non-zero, the emission of "notify" signals on `object` is
         * stopped. The signals are queued until the freeze count is decreased
         * to zero. Duplicate notifications are squashed so that at most one
         * {@link GObject.Object.SignalSignatures.notify | GObject.Object::notify} signal is emitted for each property modified while the
         * object is frozen.
         *
         * This is necessary for accessors that modify multiple properties to prevent
         * premature notification while the object is still being modified.
         */
        freeze_notify(): void;
        /**
         * Gets a named field from the objects table of associations (see `g_object_set_data()`).
         * @param key name of the key for that association
         * @returns the data if found,          or `null` if no such data exists.
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
         * `g_object_set_qdata()`.
         * @param quark A {@link GLib.Quark}, naming the user data pointer
         * @returns The user data pointer set, or `null`
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
         * @returns `true` if `object` has a floating reference
         */
        is_floating(): boolean;
        /**
         * Emits a "notify" signal for the property `property_name` on `object`.
         *
         * When possible, eg. when signaling a property change from within the class
         * that registered the property, you should use `g_object_notify_by_pspec()`
         * instead.
         *
         * Note that emission of the notify signal may be blocked with
         * `g_object_freeze_notify()`. In this case, the signal emissions are queued
         * and will be emitted (in reverse order) when `g_object_thaw_notify()` is
         * called.
         * @param property_name the name of a property installed on the class of `object`.
         */
        notify(property_name: string): void;
        /**
         * Emits a "notify" signal for the property specified by `pspec` on `object`.
         *
         * This function omits the property name lookup, hence it is faster than
         * `g_object_notify()`.
         *
         * One way to avoid using `g_object_notify()` from within the
         * class that registered the properties, and using `g_object_notify_by_pspec()`
         * instead, is to store the GParamSpec used with
         * `g_object_class_install_property()` inside a static array, e.g.:
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
         * @param pspec the {@link GObject.ParamSpec} of a property installed on the class of `object`.
         */
        notify_by_pspec(pspec: GObject.ParamSpec): void;
        /**
         * Increases the reference count of `object`.
         *
         * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
         * of `object` will be propagated to the return type (using the GCC `typeof()`
         * extension), so any casting the caller needs to do on the return type must be
         * explicit.
         * @returns the same `object`
         */
        ref(): GObject.Object;
        /**
         * Increase the reference count of `object`, and possibly remove the
         * [floating][floating-ref] reference, if `object` has a floating reference.
         *
         * In other words, if the object is floating, then this call "assumes
         * ownership" of the floating reference, converting it to a normal
         * reference by clearing the floating flag while leaving the reference
         * count unchanged.  If the object is not floating, then this call
         * adds a new normal reference increasing the reference count by one.
         *
         * Since GLib 2.56, the type of `object` will be propagated to the return type
         * under the same conditions as for `g_object_ref()`.
         * @returns `object`
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
         * Internally, the `key` is converted to a {@link GLib.Quark} using `g_quark_from_string()`.
         * This means a copy of `key` is kept permanently (even after `object` has been
         * finalized) — so it is recommended to only use a small, bounded set of values
         * for `key` in your program, to avoid the {@link GLib.Quark} storage growing unbounded.
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
         * @returns the data if found, or `null`          if no such data exists.
         */
        steal_data(key: string): any | null;
        /**
         * This function gets back user data pointers stored via
         * `g_object_set_qdata()` and removes the `data` from object
         * without invoking its `destroy()` function (if any was
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
         * Using `g_object_get_qdata()` in the above example, instead of
         * `g_object_steal_qdata()` would have left the destroy function set,
         * and thus the partial string list would have been freed upon
         * `g_object_set_qdata_full()`.
         * @param quark A {@link GLib.Quark}, naming the user data pointer
         * @returns The user data pointer set, or `null`
         */
        steal_qdata(quark: GLib.Quark): any | null;
        /**
         * Reverts the effect of a previous call to
         * `g_object_freeze_notify()`. The freeze count is decreased on `object`
         * and when it reaches zero, queued "notify" signals are emitted.
         *
         * Duplicate notifications for each property are squashed so that at most one
         * {@link GObject.Object.SignalSignatures.notify | GObject.Object::notify} signal is emitted for each property, in the reverse order
         * in which they have been queued.
         *
         * It is an error to call this function when the freeze count is zero.
         */
        thaw_notify(): void;
        /**
         * Decreases the reference count of `object`. When its reference count
         * drops to 0, the object is finalized (i.e. its memory is freed).
         *
         * If the pointer to the {@link GObject.Object} may be reused in future (for example, if it is
         * an instance variable of another object), it is recommended to clear the
         * pointer to `null` rather than retain a dangling pointer to a potentially
         * invalid {@link GObject.Object} instance. Use `g_clear_object()` for this.
         */
        unref(): void;
        /**
         * This function essentially limits the life time of the `closure` to
         * the life time of the object. That is, when the object is finalized,
         * the `closure` is invalidated by calling `g_closure_invalidate()` on
         * it, in order to prevent invocations of the closure with a finalized
         * (nonexisting) object. Also, `g_object_ref()` and `g_object_unref()` are
         * added as marshal guards to the `closure`, to ensure that an extra
         * reference count is held on `object` during invocation of the
         * `closure`.  Usually, this function will be called on closures that
         * use this `object` as closure data.
         * @param closure {@link GObject.Closure} to watch
         */
        watch_closure(closure: GObject.Closure): void;
        /**
         * the `constructed` function is called by `g_object_new()` as the
         *  final step of the object creation process.  At the point of the call, all
         *  construction properties have been set on the object.  The purpose of this
         *  call is to allow for object initialisation steps that can only be performed
         *  after construction properties have been set.  `constructed` implementors
         *  should chain up to the `constructed` call of their parent class to allow it
         *  to complete its initialisation.
         * @virtual
         */
        vfunc_constructed(): void;
        /**
         * emits property change notification for a bunch
         *  of properties. Overriding `dispatch_properties_changed` should be rarely
         *  needed.
         * @param n_pspecs
         * @param pspecs
         * @virtual
         */
        vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void;
        /**
         * the `dispose` function is supposed to drop all references to other
         *  objects, but keep the instance otherwise intact, so that client method
         *  invocations still work. It may be run multiple times (due to reference
         *  loops). Before returning, `dispose` should chain up to the `dispose` method
         *  of the parent class.
         * @virtual
         */
        vfunc_dispose(): void;
        /**
         * instance finalization function, should finish the finalization of
         *  the instance begun in `dispose` and chain up to the `finalize` method of the
         *  parent class.
         * @virtual
         */
        vfunc_finalize(): void;
        /**
         * the generic getter for all properties of this type. Should be
         *  overridden for every type with properties.
         * @param property_id
         * @param value
         * @param pspec
         * @virtual
         */
        vfunc_get_property(property_id: number, value: GObject.Value | any, pspec: GObject.ParamSpec): void;
        /**
         * Emits a "notify" signal for the property `property_name` on `object`.
         *
         * When possible, eg. when signaling a property change from within the class
         * that registered the property, you should use `g_object_notify_by_pspec()`
         * instead.
         *
         * Note that emission of the notify signal may be blocked with
         * `g_object_freeze_notify()`. In this case, the signal emissions are queued
         * and will be emitted (in reverse order) when `g_object_thaw_notify()` is
         * called.
         * @param pspec
         * @virtual
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
         * @virtual
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

    namespace Entry {
        // Signal signatures
        interface SignalSignatures extends Widget.SignalSignatures {
            /**
             * Emitted when the primary icon is clicked.
             * @signal
             */
            'primary-icon-clicked': () => void;
            /**
             * Emitted when the secondary icon is clicked.
             * @signal
             */
            'secondary-icon-clicked': () => void;
            'notify::clutter-text': (pspec: GObject.ParamSpec) => void;
            'notify::hint-actor': (pspec: GObject.ParamSpec) => void;
            'notify::hint-text': (pspec: GObject.ParamSpec) => void;
            'notify::input-hints': (pspec: GObject.ParamSpec) => void;
            'notify::input-purpose': (pspec: GObject.ParamSpec) => void;
            'notify::primary-icon': (pspec: GObject.ParamSpec) => void;
            'notify::secondary-icon': (pspec: GObject.ParamSpec) => void;
            'notify::text': (pspec: GObject.ParamSpec) => void;
            'notify::can-focus': (pspec: GObject.ParamSpec) => void;
            'notify::hover': (pspec: GObject.ParamSpec) => void;
            'notify::label-actor': (pspec: GObject.ParamSpec) => void;
            'notify::pseudo-class': (pspec: GObject.ParamSpec) => void;
            'notify::style': (pspec: GObject.ParamSpec) => void;
            'notify::style-class': (pspec: GObject.ParamSpec) => void;
            'notify::track-hover': (pspec: GObject.ParamSpec) => void;
            'notify::accessible-name': (pspec: GObject.ParamSpec) => void;
            'notify::accessible-role': (pspec: GObject.ParamSpec) => void;
            'notify::actions': (pspec: GObject.ParamSpec) => void;
            'notify::allocation': (pspec: GObject.ParamSpec) => void;
            'notify::background-color': (pspec: GObject.ParamSpec) => void;
            'notify::background-color-set': (pspec: GObject.ParamSpec) => void;
            'notify::child-transform': (pspec: GObject.ParamSpec) => void;
            'notify::child-transform-set': (pspec: GObject.ParamSpec) => void;
            'notify::clip-rect': (pspec: GObject.ParamSpec) => void;
            'notify::clip-to-allocation': (pspec: GObject.ParamSpec) => void;
            'notify::color-state': (pspec: GObject.ParamSpec) => void;
            'notify::constraints': (pspec: GObject.ParamSpec) => void;
            'notify::content': (pspec: GObject.ParamSpec) => void;
            'notify::content-box': (pspec: GObject.ParamSpec) => void;
            'notify::content-gravity': (pspec: GObject.ParamSpec) => void;
            'notify::content-repeat': (pspec: GObject.ParamSpec) => void;
            'notify::context': (pspec: GObject.ParamSpec) => void;
            'notify::effect': (pspec: GObject.ParamSpec) => void;
            'notify::first-child': (pspec: GObject.ParamSpec) => void;
            'notify::fixed-position-set': (pspec: GObject.ParamSpec) => void;
            'notify::fixed-x': (pspec: GObject.ParamSpec) => void;
            'notify::fixed-y': (pspec: GObject.ParamSpec) => void;
            'notify::has-clip': (pspec: GObject.ParamSpec) => void;
            'notify::has-pointer': (pspec: GObject.ParamSpec) => void;
            'notify::height': (pspec: GObject.ParamSpec) => void;
            'notify::last-child': (pspec: GObject.ParamSpec) => void;
            'notify::layout-manager': (pspec: GObject.ParamSpec) => void;
            'notify::magnification-filter': (pspec: GObject.ParamSpec) => void;
            'notify::mapped': (pspec: GObject.ParamSpec) => void;
            'notify::margin-bottom': (pspec: GObject.ParamSpec) => void;
            'notify::margin-left': (pspec: GObject.ParamSpec) => void;
            'notify::margin-right': (pspec: GObject.ParamSpec) => void;
            'notify::margin-top': (pspec: GObject.ParamSpec) => void;
            'notify::min-height': (pspec: GObject.ParamSpec) => void;
            'notify::min-height-set': (pspec: GObject.ParamSpec) => void;
            'notify::min-width': (pspec: GObject.ParamSpec) => void;
            'notify::min-width-set': (pspec: GObject.ParamSpec) => void;
            'notify::minification-filter': (pspec: GObject.ParamSpec) => void;
            'notify::name': (pspec: GObject.ParamSpec) => void;
            'notify::natural-height': (pspec: GObject.ParamSpec) => void;
            'notify::natural-height-set': (pspec: GObject.ParamSpec) => void;
            'notify::natural-width': (pspec: GObject.ParamSpec) => void;
            'notify::natural-width-set': (pspec: GObject.ParamSpec) => void;
            'notify::offscreen-redirect': (pspec: GObject.ParamSpec) => void;
            'notify::opacity': (pspec: GObject.ParamSpec) => void;
            'notify::pivot-point': (pspec: GObject.ParamSpec) => void;
            'notify::pivot-point-z': (pspec: GObject.ParamSpec) => void;
            'notify::position': (pspec: GObject.ParamSpec) => void;
            'notify::reactive': (pspec: GObject.ParamSpec) => void;
            'notify::realized': (pspec: GObject.ParamSpec) => void;
            'notify::request-mode': (pspec: GObject.ParamSpec) => void;
            'notify::rotation-angle-x': (pspec: GObject.ParamSpec) => void;
            'notify::rotation-angle-y': (pspec: GObject.ParamSpec) => void;
            'notify::rotation-angle-z': (pspec: GObject.ParamSpec) => void;
            'notify::scale-x': (pspec: GObject.ParamSpec) => void;
            'notify::scale-y': (pspec: GObject.ParamSpec) => void;
            'notify::scale-z': (pspec: GObject.ParamSpec) => void;
            'notify::show-on-set-parent': (pspec: GObject.ParamSpec) => void;
            'notify::size': (pspec: GObject.ParamSpec) => void;
            'notify::text-direction': (pspec: GObject.ParamSpec) => void;
            'notify::transform': (pspec: GObject.ParamSpec) => void;
            'notify::transform-set': (pspec: GObject.ParamSpec) => void;
            'notify::translation-x': (pspec: GObject.ParamSpec) => void;
            'notify::translation-y': (pspec: GObject.ParamSpec) => void;
            'notify::translation-z': (pspec: GObject.ParamSpec) => void;
            'notify::visible': (pspec: GObject.ParamSpec) => void;
            'notify::width': (pspec: GObject.ParamSpec) => void;
            'notify::x': (pspec: GObject.ParamSpec) => void;
            'notify::x-align': (pspec: GObject.ParamSpec) => void;
            'notify::x-expand': (pspec: GObject.ParamSpec) => void;
            'notify::y': (pspec: GObject.ParamSpec) => void;
            'notify::y-align': (pspec: GObject.ParamSpec) => void;
            'notify::y-expand': (pspec: GObject.ParamSpec) => void;
            'notify::z-position': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps
            extends
                Widget.ConstructorProps,
                Atk.ImplementorIface.ConstructorProps,
                Clutter.Animatable.ConstructorProps {
            clutter_text: Clutter.Text;
            clutterText: Clutter.Text;
            hint_actor: Clutter.Actor;
            hintActor: Clutter.Actor;
            hint_text: string;
            hintText: string;
            input_hints: Clutter.InputContentHintFlags;
            inputHints: Clutter.InputContentHintFlags;
            input_purpose: Clutter.InputContentPurpose;
            inputPurpose: Clutter.InputContentPurpose;
            primary_icon: Clutter.Actor;
            primaryIcon: Clutter.Actor;
            secondary_icon: Clutter.Actor;
            secondaryIcon: Clutter.Actor;
            text: string;
        }
    }

    /**
     * Widget for displaying text
     *
     * {@link St.Entry} is a simple widget for displaying text. It derives from
     * {@link St.Widget} to add extra style and placement functionality over
     * {@link Clutter.Text}. The internal {@link Clutter.Text} is publicly accessibly to allow
     * applications to set further properties.
     *
     * {@link St.Entry} supports the following pseudo style states:
     *
     * - `focus`: the widget has focus
     * - `indeterminate`: the widget is showing the hint text or actor
     * @gir-type Class
     */
    class Entry extends Widget implements Atk.ImplementorIface, Clutter.Animatable {
        static $gtype: GObject.GType<Entry>;

        // Properties

        /**
         * The internal {@link Clutter.Text} actor supporting the {@link St.Entry}.
         */
        get clutter_text(): Clutter.Text;
        /**
         * The internal {@link Clutter.Text} actor supporting the {@link St.Entry}.
         */
        get clutterText(): Clutter.Text;
        /**
         * A {@link Clutter.Actor} to display when the entry is empty and unfocused. Setting
         * this will replace the actor displaying {@link St.Entry.hint_text}.
         */
        get hint_actor(): Clutter.Actor;
        set hint_actor(val: Clutter.Actor);
        /**
         * A {@link Clutter.Actor} to display when the entry is empty and unfocused. Setting
         * this will replace the actor displaying {@link St.Entry.hint_text}.
         */
        get hintActor(): Clutter.Actor;
        set hintActor(val: Clutter.Actor);
        /**
         * The text to display when the entry is empty and unfocused. Setting this
         * will replace the actor of {@link St.Entry.SignalSignatures.hint_actor | St.Entry::hint-actor}.
         */
        get hint_text(): string;
        set hint_text(val: string);
        /**
         * The text to display when the entry is empty and unfocused. Setting this
         * will replace the actor of {@link St.Entry.SignalSignatures.hint_actor | St.Entry::hint-actor}.
         */
        get hintText(): string;
        set hintText(val: string);
        /**
         * The {@link Clutter.InputContentHintFlags} providing additional hints (beyond
         * {@link St.Entry.input_purpose}) that allow input methods to fine-tune their
         * behaviour.
         */
        get input_hints(): Clutter.InputContentHintFlags;
        set input_hints(val: Clutter.InputContentHintFlags);
        /**
         * The {@link Clutter.InputContentHintFlags} providing additional hints (beyond
         * {@link St.Entry.input_purpose}) that allow input methods to fine-tune their
         * behaviour.
         */
        get inputHints(): Clutter.InputContentHintFlags;
        set inputHints(val: Clutter.InputContentHintFlags);
        /**
         * The {@link Clutter.InputContentPurpose} that helps on-screen keyboards and similar
         * input methods to decide which keys should be presented to the user.
         */
        get input_purpose(): Clutter.InputContentPurpose;
        set input_purpose(val: Clutter.InputContentPurpose);
        /**
         * The {@link Clutter.InputContentPurpose} that helps on-screen keyboards and similar
         * input methods to decide which keys should be presented to the user.
         */
        get inputPurpose(): Clutter.InputContentPurpose;
        set inputPurpose(val: Clutter.InputContentPurpose);
        /**
         * The {@link Clutter.Actor} acting as the primary icon at the start of the {@link St.Entry}.
         */
        get primary_icon(): Clutter.Actor;
        set primary_icon(val: Clutter.Actor);
        /**
         * The {@link Clutter.Actor} acting as the primary icon at the start of the {@link St.Entry}.
         */
        get primaryIcon(): Clutter.Actor;
        set primaryIcon(val: Clutter.Actor);
        /**
         * The {@link Clutter.Actor} acting as the secondary icon at the end of the {@link St.Entry}.
         */
        get secondary_icon(): Clutter.Actor;
        set secondary_icon(val: Clutter.Actor);
        /**
         * The {@link Clutter.Actor} acting as the secondary icon at the end of the {@link St.Entry}.
         */
        get secondaryIcon(): Clutter.Actor;
        set secondaryIcon(val: Clutter.Actor);
        /**
         * The current text value of the {@link St.Entry}.
         */
        get text(): string;
        set text(val: string);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Entry.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<Entry.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](text?: string | null): Entry;
        // Conflicted with Clutter.Actor.new

        static ['new'](...args: never[]): any;

        // Signals

        /** @signal */
        connect<K extends keyof Entry.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Entry.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof Entry.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Entry.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof Entry.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Entry.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Virtual methods

        /**
         * @virtual
         */
        vfunc_primary_icon_clicked(): void;
        /**
         * @virtual
         */
        vfunc_secondary_icon_clicked(): void;

        // Methods

        /**
         * Retrieve the internal {@link Clutter.Text} so that extra parameters can be set.
         * @returns the {@link Clutter.Text} used by `entry`
         */
        get_clutter_text(): Clutter.Actor;
        /**
         * Get the value of the {@link St.Entry.hint_actor} property.
         * @returns a {@link Clutter.Actor}
         */
        get_hint_actor(): Clutter.Actor | null;
        /**
         * Gets the text that is displayed when the entry is empty and unfocused or
         * `null` if the {@link St.Entry.hint_actor} was set to an actor that is not a {@link St.Label}.
         *
         * Unlike `st_entry_get_text()` this function may return `null` if
         * {@link St.Entry.hint_actor} is not a {@link St.Label}.
         * @returns the current value of the hint property
         */
        get_hint_text(): string | null;
        /**
         * Gets the value of the {@link St.Entry.input_hints} property.
         * @returns the input hints for the entry
         */
        get_input_hints(): Clutter.InputContentHintFlags;
        /**
         * Gets the value of the {@link St.Entry.input_purpose} property.
         * @returns the input purpose of the entry
         */
        get_input_purpose(): Clutter.InputContentPurpose;
        /**
         * Get the value of the {@link St.Entry.primary_icon} property.
         * @returns a {@link Clutter.Actor}
         */
        get_primary_icon(): Clutter.Actor | null;
        /**
         * Get the value of the {@link St.Entry.secondary_icon} property.
         * @returns a {@link Clutter.Actor}
         */
        get_secondary_icon(): Clutter.Actor | null;
        /**
         * Get the text displayed on the entry. If `entry` is empty, an empty string will
         * be returned instead of `null`.
         * @returns the text for the entry
         */
        get_text(): string;
        /**
         * Set the hint actor of the entry to `hint_actor`.
         * @param hint_actor a {@link Clutter.Actor}
         */
        set_hint_actor(hint_actor?: Clutter.Actor | null): void;
        /**
         * Sets the text to display when the entry is empty and unfocused. When the
         * entry is displaying the hint, it has a pseudo class of `indeterminate`.
         * A value of `null` unsets the hint.
         * @param text text to set as the entry hint
         */
        set_hint_text(text?: string | null): void;
        /**
         * Sets the {@link St.Entry.input_hints} property, which
         * allows input methods to fine-tune their behaviour.
         * @param hints the hints
         */
        set_input_hints(hints: Clutter.InputContentHintFlags | null): void;
        /**
         * Sets the {@link St.Entry.input_purpose} property which
         * can be used by on-screen keyboards and other input
         * methods to adjust their behaviour.
         * @param purpose the purpose
         */
        set_input_purpose(purpose: Clutter.InputContentPurpose | null): void;
        /**
         * Set the primary icon of the entry to `icon`.
         * @param icon a {@link Clutter.Actor}
         */
        set_primary_icon(icon?: Clutter.Actor | null): void;
        /**
         * Set the secondary icon of the entry to `icon`.
         * @param icon an {@link Clutter.Actor}
         */
        set_secondary_icon(icon?: Clutter.Actor | null): void;
        /**
         * Sets the text displayed on the entry. If `text` is `null`, the {@link Clutter.Text}
         * will instead be set to an empty string.
         * @param text text to set the entry to
         */
        set_text(text?: string | null): void;
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
         * Will result in the "sensitive" property of the widget {@link GObject.Object} instance to be
         * updated with the same value of the "active" property of the action {@link GObject.Object}
         * instance.
         *
         * If `flags` contains {@link GObject.BindingFlags.BIDIRECTIONAL} then the binding will be mutual:
         * if `target_property` on `target` changes then the `source_property` on `source`
         * will be updated as well.
         *
         * The binding will automatically be removed when either the `source` or the
         * `target` instances are finalized. To remove the binding without affecting the
         * `source` and the `target` you can just call `g_object_unref()` on the returned
         * {@link GObject.Binding} instance.
         *
         * Removing the binding by calling `g_object_unref()` on it must only be done if
         * the binding, `source` and `target` are only used from a single thread and it
         * is clear that both `source` and `target` outlive the binding. Especially it
         * is not safe to rely on this if the binding, `source` or `target` can be
         * finalized from different threads. Keep another reference to the binding and
         * use `g_binding_unbind()` instead to be on the safe side.
         *
         * A {@link GObject.Object} can have multiple bindings.
         * @param source_property the property on `source` to bind
         * @param target the target {@link GObject.Object}
         * @param target_property the property on `target` to bind
         * @param flags flags to pass to {@link GObject.Binding}
         * @returns the {@link GObject.Binding} instance representing the     binding between the two {@link GObject.Object} instances. The binding is released     whenever the {@link GObject.Binding} reference count reaches zero.
         */
        bind_property(
            source_property: string,
            target: GObject.Object,
            target_property: string,
            flags: GObject.BindingFlags | null,
        ): GObject.Binding;
        /**
         * Complete version of `g_object_bind_property()`.
         *
         * Creates a binding between `source_property` on `source` and `target_property`
         * on `target`, allowing you to set the transformation functions to be used by
         * the binding.
         *
         * If `flags` contains {@link GObject.BindingFlags.BIDIRECTIONAL} then the binding will be mutual:
         * if `target_property` on `target` changes then the `source_property` on `source`
         * will be updated as well. The `transform_from` function is only used in case
         * of bidirectional bindings, otherwise it will be ignored
         *
         * The binding will automatically be removed when either the `source` or the
         * `target` instances are finalized. This will release the reference that is
         * being held on the {@link GObject.Binding} instance; if you want to hold on to the
         * {@link GObject.Binding} instance, you will need to hold a reference to it.
         *
         * To remove the binding, call `g_binding_unbind()`.
         *
         * A {@link GObject.Object} can have multiple bindings.
         *
         * The same `user_data` parameter will be used for both `transform_to`
         * and `transform_from` transformation functions; the `notify` function will
         * be called once, when the binding is removed. If you need different data
         * for each transformation function, please use
         * `g_object_bind_property_with_closures()` instead.
         * @param source_property the property on `source` to bind
         * @param target the target {@link GObject.Object}
         * @param target_property the property on `target` to bind
         * @param flags flags to pass to {@link GObject.Binding}
         * @param transform_to the transformation function     from the `source` to the `target`, or `null` to use the default
         * @param transform_from the transformation function     from the `target` to the `source`, or `null` to use the default
         * @param notify a function to call when disposing the binding, to free     resources used by the transformation functions, or `null` if not required
         * @returns the {@link GObject.Binding} instance representing the     binding between the two {@link GObject.Object} instances. The binding is released     whenever the {@link GObject.Binding} reference count reaches zero.
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
        /**
         * @param args
         */
        // Conflicted with GObject.Object.bind_property_full
        bind_property_full(...args: never[]): any;
        /**
         * This function is intended for {@link GObject.Object} implementations to re-enforce
         * a [floating][floating-ref] object reference. Doing this is seldom
         * required: all `GInitiallyUnowneds` are created with a floating reference
         * which usually just needs to be sunken by calling `g_object_ref_sink()`.
         */
        force_floating(): void;
        /**
         * Increases the freeze count on `object`. If the freeze count is
         * non-zero, the emission of "notify" signals on `object` is
         * stopped. The signals are queued until the freeze count is decreased
         * to zero. Duplicate notifications are squashed so that at most one
         * {@link GObject.Object.SignalSignatures.notify | GObject.Object::notify} signal is emitted for each property modified while the
         * object is frozen.
         *
         * This is necessary for accessors that modify multiple properties to prevent
         * premature notification while the object is still being modified.
         */
        freeze_notify(): void;
        /**
         * Gets a named field from the objects table of associations (see `g_object_set_data()`).
         * @param key name of the key for that association
         * @returns the data if found,          or `null` if no such data exists.
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
         * `g_object_set_qdata()`.
         * @param quark A {@link GLib.Quark}, naming the user data pointer
         * @returns The user data pointer set, or `null`
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
         * @returns `true` if `object` has a floating reference
         */
        is_floating(): boolean;
        /**
         * Emits a "notify" signal for the property `property_name` on `object`.
         *
         * When possible, eg. when signaling a property change from within the class
         * that registered the property, you should use `g_object_notify_by_pspec()`
         * instead.
         *
         * Note that emission of the notify signal may be blocked with
         * `g_object_freeze_notify()`. In this case, the signal emissions are queued
         * and will be emitted (in reverse order) when `g_object_thaw_notify()` is
         * called.
         * @param property_name the name of a property installed on the class of `object`.
         */
        notify(property_name: string): void;
        /**
         * Emits a "notify" signal for the property specified by `pspec` on `object`.
         *
         * This function omits the property name lookup, hence it is faster than
         * `g_object_notify()`.
         *
         * One way to avoid using `g_object_notify()` from within the
         * class that registered the properties, and using `g_object_notify_by_pspec()`
         * instead, is to store the GParamSpec used with
         * `g_object_class_install_property()` inside a static array, e.g.:
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
         * @param pspec the {@link GObject.ParamSpec} of a property installed on the class of `object`.
         */
        notify_by_pspec(pspec: GObject.ParamSpec): void;
        /**
         * Increases the reference count of `object`.
         *
         * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
         * of `object` will be propagated to the return type (using the GCC `typeof()`
         * extension), so any casting the caller needs to do on the return type must be
         * explicit.
         * @returns the same `object`
         */
        ref(): GObject.Object;
        /**
         * Increase the reference count of `object`, and possibly remove the
         * [floating][floating-ref] reference, if `object` has a floating reference.
         *
         * In other words, if the object is floating, then this call "assumes
         * ownership" of the floating reference, converting it to a normal
         * reference by clearing the floating flag while leaving the reference
         * count unchanged.  If the object is not floating, then this call
         * adds a new normal reference increasing the reference count by one.
         *
         * Since GLib 2.56, the type of `object` will be propagated to the return type
         * under the same conditions as for `g_object_ref()`.
         * @returns `object`
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
         * Internally, the `key` is converted to a {@link GLib.Quark} using `g_quark_from_string()`.
         * This means a copy of `key` is kept permanently (even after `object` has been
         * finalized) — so it is recommended to only use a small, bounded set of values
         * for `key` in your program, to avoid the {@link GLib.Quark} storage growing unbounded.
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
         * @returns the data if found, or `null`          if no such data exists.
         */
        steal_data(key: string): any | null;
        /**
         * This function gets back user data pointers stored via
         * `g_object_set_qdata()` and removes the `data` from object
         * without invoking its `destroy()` function (if any was
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
         * Using `g_object_get_qdata()` in the above example, instead of
         * `g_object_steal_qdata()` would have left the destroy function set,
         * and thus the partial string list would have been freed upon
         * `g_object_set_qdata_full()`.
         * @param quark A {@link GLib.Quark}, naming the user data pointer
         * @returns The user data pointer set, or `null`
         */
        steal_qdata(quark: GLib.Quark): any | null;
        /**
         * Reverts the effect of a previous call to
         * `g_object_freeze_notify()`. The freeze count is decreased on `object`
         * and when it reaches zero, queued "notify" signals are emitted.
         *
         * Duplicate notifications for each property are squashed so that at most one
         * {@link GObject.Object.SignalSignatures.notify | GObject.Object::notify} signal is emitted for each property, in the reverse order
         * in which they have been queued.
         *
         * It is an error to call this function when the freeze count is zero.
         */
        thaw_notify(): void;
        /**
         * Decreases the reference count of `object`. When its reference count
         * drops to 0, the object is finalized (i.e. its memory is freed).
         *
         * If the pointer to the {@link GObject.Object} may be reused in future (for example, if it is
         * an instance variable of another object), it is recommended to clear the
         * pointer to `null` rather than retain a dangling pointer to a potentially
         * invalid {@link GObject.Object} instance. Use `g_clear_object()` for this.
         */
        unref(): void;
        /**
         * This function essentially limits the life time of the `closure` to
         * the life time of the object. That is, when the object is finalized,
         * the `closure` is invalidated by calling `g_closure_invalidate()` on
         * it, in order to prevent invocations of the closure with a finalized
         * (nonexisting) object. Also, `g_object_ref()` and `g_object_unref()` are
         * added as marshal guards to the `closure`, to ensure that an extra
         * reference count is held on `object` during invocation of the
         * `closure`.  Usually, this function will be called on closures that
         * use this `object` as closure data.
         * @param closure {@link GObject.Closure} to watch
         */
        watch_closure(closure: GObject.Closure): void;
        /**
         * the `constructed` function is called by `g_object_new()` as the
         *  final step of the object creation process.  At the point of the call, all
         *  construction properties have been set on the object.  The purpose of this
         *  call is to allow for object initialisation steps that can only be performed
         *  after construction properties have been set.  `constructed` implementors
         *  should chain up to the `constructed` call of their parent class to allow it
         *  to complete its initialisation.
         * @virtual
         */
        vfunc_constructed(): void;
        /**
         * emits property change notification for a bunch
         *  of properties. Overriding `dispatch_properties_changed` should be rarely
         *  needed.
         * @param n_pspecs
         * @param pspecs
         * @virtual
         */
        vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void;
        /**
         * the `dispose` function is supposed to drop all references to other
         *  objects, but keep the instance otherwise intact, so that client method
         *  invocations still work. It may be run multiple times (due to reference
         *  loops). Before returning, `dispose` should chain up to the `dispose` method
         *  of the parent class.
         * @virtual
         */
        vfunc_dispose(): void;
        /**
         * instance finalization function, should finish the finalization of
         *  the instance begun in `dispose` and chain up to the `finalize` method of the
         *  parent class.
         * @virtual
         */
        vfunc_finalize(): void;
        /**
         * the generic getter for all properties of this type. Should be
         *  overridden for every type with properties.
         * @param property_id
         * @param value
         * @param pspec
         * @virtual
         */
        vfunc_get_property(property_id: number, value: GObject.Value | any, pspec: GObject.ParamSpec): void;
        /**
         * Emits a "notify" signal for the property `property_name` on `object`.
         *
         * When possible, eg. when signaling a property change from within the class
         * that registered the property, you should use `g_object_notify_by_pspec()`
         * instead.
         *
         * Note that emission of the notify signal may be blocked with
         * `g_object_freeze_notify()`. In this case, the signal emissions are queued
         * and will be emitted (in reverse order) when `g_object_thaw_notify()` is
         * called.
         * @param pspec
         * @virtual
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
         * @virtual
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

    namespace FocusManager {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    /**
     * Keyboard focus management
     *
     * {@link St.FocusManager} handles keyboard focus for all actors on the stage.
     * @gir-type Class
     */
    class FocusManager extends GObject.Object {
        static $gtype: GObject.GType<FocusManager>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: FocusManager.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<FocusManager.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        /** @signal */
        connect<K extends keyof FocusManager.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, FocusManager.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof FocusManager.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, FocusManager.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof FocusManager.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<FocusManager.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Static methods

        /**
         * Gets the {@link St.FocusManager} for `stage`, creating it if necessary.
         * @param stage a {@link Clutter.Stage}
         */
        static get_for_stage(stage: Clutter.Stage): FocusManager;

        // Methods

        /**
         * Adds a new focus group to `manager`. When the focus is in an actor
         * that is a descendant of `root`, `manager` will handle moving focus
         * from one actor to another within `root` based on keyboard events.
         * @param root the root container of the group
         */
        add_group(root: Widget): void;
        /**
         * Checks if `widget` is inside a focus group, and if so, returns
         * the root of that group.
         * @param widget an {@link St.Widget}
         * @returns the focus group root, or `null` if `widget` is not in a focus group
         */
        get_group(widget: Widget): Widget;
        /**
         * Try to navigate from `event` as if it bubbled all the way up to
         * the stage. This is useful in complex event handling situations
         * where you want key navigation, but a parent might be stopping
         * the key navigation event from bubbling all the way up to the stage.
         * @param event a {@link Clutter.Event}
         * @returns Whether a new actor was navigated to
         */
        navigate_from_event(event: Clutter.Event): boolean;
        /**
         * Removes the group rooted at `root` from `manager`
         * @param root the root container of the group
         */
        remove_group(root: Widget): void;
    }

    namespace GenericAccessible {
        // Signal signatures
        interface SignalSignatures extends WidgetAccessible.SignalSignatures {
            /**
             * Emitted when `atk_value_get_current_value()` is called on
             * `self`. Right now we only care about doubles, so the value is
             * directly returned by the signal.
             * @signal
             */
            'get-current-value': () => number;
            /**
             * Emitted when `atk_value_get_maximum_value()` is called on
             * `self`. Right now we only care about doubles, so the value is
             * directly returned by the signal.
             * @signal
             */
            'get-maximum-value': () => number;
            /**
             * Emitted when `atk_value_get_minimum_increment()` is called on
             * `self`. Right now we only care about doubles, so the value is
             * directly returned by the signal.
             * @signal
             */
            'get-minimum-increment': () => number;
            /**
             * Emitted when `atk_value_get_current_value()` is called on
             * `self`. Right now we only care about doubles, so the value is
             * directly returned by the signal.
             * @signal
             */
            'get-minimum-value': () => number;
            /**
             * Emitted when `atk_value_set_current_value()` is called on
             * `self`. Right now we only care about doubles, so the value is
             * directly returned by the signal.
             * @signal
             */
            'set-current-value': (arg0: number) => void;
            'notify::accessible-component-layer': (pspec: GObject.ParamSpec) => void;
            'notify::accessible-component-mdi-zorder': (pspec: GObject.ParamSpec) => void;
            'notify::accessible-description': (pspec: GObject.ParamSpec) => void;
            'notify::accessible-help-text': (pspec: GObject.ParamSpec) => void;
            'notify::accessible-hypertext-nlinks': (pspec: GObject.ParamSpec) => void;
            'notify::accessible-id': (pspec: GObject.ParamSpec) => void;
            'notify::accessible-name': (pspec: GObject.ParamSpec) => void;
            'notify::accessible-parent': (pspec: GObject.ParamSpec) => void;
            'notify::accessible-role': (pspec: GObject.ParamSpec) => void;
            'notify::accessible-table-caption': (pspec: GObject.ParamSpec) => void;
            'notify::accessible-table-caption-object': (pspec: GObject.ParamSpec) => void;
            'notify::accessible-table-column-description': (pspec: GObject.ParamSpec) => void;
            'notify::accessible-table-column-header': (pspec: GObject.ParamSpec) => void;
            'notify::accessible-table-row-description': (pspec: GObject.ParamSpec) => void;
            'notify::accessible-table-row-header': (pspec: GObject.ParamSpec) => void;
            'notify::accessible-table-summary': (pspec: GObject.ParamSpec) => void;
            'notify::accessible-value': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps
            extends WidgetAccessible.ConstructorProps, Atk.Component.ConstructorProps, Atk.Value.ConstructorProps {}
    }

    /**
     * An accessible class with signals for implementing specific Atk interfaces
     *
     * {@link St.GenericAccessible} is mainly a workaround for the current lack of
     * of a proper support for GValue at javascript. See bug#703412 for
     * more information. We implement the accessible interfaces, but proxy
     * the virtual functions into signals, which gjs can catch.
     *
     * {@link St.GenericAccessible} is an {@link St.WidgetAccessible}
     * @gir-type Class
     */
    class GenericAccessible extends WidgetAccessible implements Atk.Component, Atk.Value {
        static $gtype: GObject.GType<GenericAccessible>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: GenericAccessible.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<GenericAccessible.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static new_for_actor(actor: Clutter.Actor): GenericAccessible;

        // Signals

        /** @signal */
        connect<K extends keyof GenericAccessible.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, GenericAccessible.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof GenericAccessible.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, GenericAccessible.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof GenericAccessible.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<GenericAccessible.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;
        /**
         * Gets the value of this object.
         */
        get_current_value(): unknown;
        /**
         * Gets the minimum increment by which the value of this object may be
         * changed.  If zero, the minimum increment is undefined, which may
         * mean that it is limited only by the floating point precision of the
         * platform.
         * @returns the minimum increment by which the value of this object may be changed. zero if undefined.
         */
        get_increment(): number;
        /**
         * Gets the maximum value of this object.
         */
        get_maximum_value(): unknown;
        /**
         * Gets the minimum increment by which the value of this object may be changed.  If zero,
         * the minimum increment is undefined, which may mean that it is limited only by the
         * floating point precision of the platform.
         */
        get_minimum_increment(): unknown;
        /**
         * Gets the minimum value of this object.
         */
        get_minimum_value(): unknown;
        /**
         * Gets the range of this object.
         * @returns a newly allocated {@link Atk.Range} that represents the minimum, maximum and descriptor (if available) of `obj`. NULL if that range is not defined.
         */
        get_range(): Atk.Range | null;
        /**
         * Gets the list of subranges defined for this object. See {@link Atk.Value}
         * introduction for examples of subranges and when to expose them.
         * @returns an {@link GLib.SList} of {@link Atk.Range} which each of the subranges defined for this object. Free the returns list with `g_slist_free()`.
         */
        get_sub_ranges(): Atk.Range[];
        /**
         * Gets the current value and the human readable text alternative of
         * `obj`. `text` is a newly created string, that must be freed by the
         * caller. Can be NULL if no descriptor is available.
         */
        get_value_and_text(): [number, string];
        /**
         * Sets the value of this object.
         * @param value a {@link GObject.Value} which is the desired new accessible value.
         * @returns `true` if new value is successfully set, `false` otherwise.
         */
        set_current_value(value: GObject.Value | any): boolean;
        /**
         * Sets the value of this object.
         *
         * This method is intended to provide a way to change the value of the
         * object. In any case, it is possible that the value can't be
         * modified (ie: a read-only component). If the value changes due this
         * call, it is possible that the text could change, and will trigger
         * an {@link Atk.Value.SignalSignatures.value_changed | Atk.Value::value-changed} signal emission.
         *
         * Note for implementors: the deprecated `atk_value_set_current_value()`
         * method returned TRUE or FALSE depending if the value was assigned
         * or not. In the practice several implementors were not able to
         * decide it, and returned TRUE in any case. For that reason it is not
         * required anymore to return if the value was properly assigned or
         * not.
         * @param new_value a double which is the desired new accessible value.
         */
        set_value(new_value: number): void;
        /**
         * Gets the value of this object.
         * @virtual
         */
        vfunc_get_current_value(): unknown;
        /**
         * Gets the minimum increment by which the value of this object may be
         * changed.  If zero, the minimum increment is undefined, which may
         * mean that it is limited only by the floating point precision of the
         * platform.
         * @virtual
         */
        vfunc_get_increment(): number;
        /**
         * Gets the maximum value of this object.
         * @virtual
         */
        vfunc_get_maximum_value(): unknown;
        /**
         * Gets the minimum increment by which the value of this object may be changed.  If zero,
         * the minimum increment is undefined, which may mean that it is limited only by the
         * floating point precision of the platform.
         * @virtual
         */
        vfunc_get_minimum_increment(): unknown;
        /**
         * Gets the minimum value of this object.
         * @virtual
         */
        vfunc_get_minimum_value(): unknown;
        /**
         * Gets the range of this object.
         * @virtual
         */
        vfunc_get_range(): Atk.Range | null;
        /**
         * Gets the list of subranges defined for this object. See {@link Atk.Value}
         * introduction for examples of subranges and when to expose them.
         * @virtual
         */
        vfunc_get_sub_ranges(): Atk.Range[];
        /**
         * Gets the current value and the human readable text alternative of
         * `obj`. `text` is a newly created string, that must be freed by the
         * caller. Can be NULL if no descriptor is available.
         * @virtual
         */
        vfunc_get_value_and_text(): [number, string];
        /**
         * Sets the value of this object.
         * @param value a {@link GObject.Value} which is the desired new accessible value.
         * @virtual
         */
        vfunc_set_current_value(value: GObject.Value | any): boolean;
        /**
         * Sets the value of this object.
         *
         * This method is intended to provide a way to change the value of the
         * object. In any case, it is possible that the value can't be
         * modified (ie: a read-only component). If the value changes due this
         * call, it is possible that the text could change, and will trigger
         * an {@link Atk.Value.SignalSignatures.value_changed | Atk.Value::value-changed} signal emission.
         *
         * Note for implementors: the deprecated `atk_value_set_current_value()`
         * method returned TRUE or FALSE depending if the value was assigned
         * or not. In the practice several implementors were not able to
         * decide it, and returned TRUE in any case. For that reason it is not
         * required anymore to return if the value was properly assigned or
         * not.
         * @param new_value a double which is the desired new accessible value.
         * @virtual
         */
        vfunc_set_value(new_value: number): void;
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
         * Will result in the "sensitive" property of the widget {@link GObject.Object} instance to be
         * updated with the same value of the "active" property of the action {@link GObject.Object}
         * instance.
         *
         * If `flags` contains {@link GObject.BindingFlags.BIDIRECTIONAL} then the binding will be mutual:
         * if `target_property` on `target` changes then the `source_property` on `source`
         * will be updated as well.
         *
         * The binding will automatically be removed when either the `source` or the
         * `target` instances are finalized. To remove the binding without affecting the
         * `source` and the `target` you can just call `g_object_unref()` on the returned
         * {@link GObject.Binding} instance.
         *
         * Removing the binding by calling `g_object_unref()` on it must only be done if
         * the binding, `source` and `target` are only used from a single thread and it
         * is clear that both `source` and `target` outlive the binding. Especially it
         * is not safe to rely on this if the binding, `source` or `target` can be
         * finalized from different threads. Keep another reference to the binding and
         * use `g_binding_unbind()` instead to be on the safe side.
         *
         * A {@link GObject.Object} can have multiple bindings.
         * @param source_property the property on `source` to bind
         * @param target the target {@link GObject.Object}
         * @param target_property the property on `target` to bind
         * @param flags flags to pass to {@link GObject.Binding}
         * @returns the {@link GObject.Binding} instance representing the     binding between the two {@link GObject.Object} instances. The binding is released     whenever the {@link GObject.Binding} reference count reaches zero.
         */
        bind_property(
            source_property: string,
            target: GObject.Object,
            target_property: string,
            flags: GObject.BindingFlags | null,
        ): GObject.Binding;
        /**
         * Complete version of `g_object_bind_property()`.
         *
         * Creates a binding between `source_property` on `source` and `target_property`
         * on `target`, allowing you to set the transformation functions to be used by
         * the binding.
         *
         * If `flags` contains {@link GObject.BindingFlags.BIDIRECTIONAL} then the binding will be mutual:
         * if `target_property` on `target` changes then the `source_property` on `source`
         * will be updated as well. The `transform_from` function is only used in case
         * of bidirectional bindings, otherwise it will be ignored
         *
         * The binding will automatically be removed when either the `source` or the
         * `target` instances are finalized. This will release the reference that is
         * being held on the {@link GObject.Binding} instance; if you want to hold on to the
         * {@link GObject.Binding} instance, you will need to hold a reference to it.
         *
         * To remove the binding, call `g_binding_unbind()`.
         *
         * A {@link GObject.Object} can have multiple bindings.
         *
         * The same `user_data` parameter will be used for both `transform_to`
         * and `transform_from` transformation functions; the `notify` function will
         * be called once, when the binding is removed. If you need different data
         * for each transformation function, please use
         * `g_object_bind_property_with_closures()` instead.
         * @param source_property the property on `source` to bind
         * @param target the target {@link GObject.Object}
         * @param target_property the property on `target` to bind
         * @param flags flags to pass to {@link GObject.Binding}
         * @param transform_to the transformation function     from the `source` to the `target`, or `null` to use the default
         * @param transform_from the transformation function     from the `target` to the `source`, or `null` to use the default
         * @param notify a function to call when disposing the binding, to free     resources used by the transformation functions, or `null` if not required
         * @returns the {@link GObject.Binding} instance representing the     binding between the two {@link GObject.Object} instances. The binding is released     whenever the {@link GObject.Binding} reference count reaches zero.
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
        /**
         * @param args
         */
        // Conflicted with GObject.Object.bind_property_full
        bind_property_full(...args: never[]): any;
        /**
         * This function is intended for {@link GObject.Object} implementations to re-enforce
         * a [floating][floating-ref] object reference. Doing this is seldom
         * required: all `GInitiallyUnowneds` are created with a floating reference
         * which usually just needs to be sunken by calling `g_object_ref_sink()`.
         */
        force_floating(): void;
        /**
         * Increases the freeze count on `object`. If the freeze count is
         * non-zero, the emission of "notify" signals on `object` is
         * stopped. The signals are queued until the freeze count is decreased
         * to zero. Duplicate notifications are squashed so that at most one
         * {@link GObject.Object.SignalSignatures.notify | GObject.Object::notify} signal is emitted for each property modified while the
         * object is frozen.
         *
         * This is necessary for accessors that modify multiple properties to prevent
         * premature notification while the object is still being modified.
         */
        freeze_notify(): void;
        /**
         * Gets a named field from the objects table of associations (see `g_object_set_data()`).
         * @param key name of the key for that association
         * @returns the data if found,          or `null` if no such data exists.
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
         * `g_object_set_qdata()`.
         * @param quark A {@link GLib.Quark}, naming the user data pointer
         * @returns The user data pointer set, or `null`
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
         * @returns `true` if `object` has a floating reference
         */
        is_floating(): boolean;
        /**
         * Emits a "notify" signal for the property `property_name` on `object`.
         *
         * When possible, eg. when signaling a property change from within the class
         * that registered the property, you should use `g_object_notify_by_pspec()`
         * instead.
         *
         * Note that emission of the notify signal may be blocked with
         * `g_object_freeze_notify()`. In this case, the signal emissions are queued
         * and will be emitted (in reverse order) when `g_object_thaw_notify()` is
         * called.
         * @param property_name the name of a property installed on the class of `object`.
         */
        notify(property_name: string): void;
        /**
         * Emits a "notify" signal for the property specified by `pspec` on `object`.
         *
         * This function omits the property name lookup, hence it is faster than
         * `g_object_notify()`.
         *
         * One way to avoid using `g_object_notify()` from within the
         * class that registered the properties, and using `g_object_notify_by_pspec()`
         * instead, is to store the GParamSpec used with
         * `g_object_class_install_property()` inside a static array, e.g.:
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
         * @param pspec the {@link GObject.ParamSpec} of a property installed on the class of `object`.
         */
        notify_by_pspec(pspec: GObject.ParamSpec): void;
        /**
         * Increases the reference count of `object`.
         *
         * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
         * of `object` will be propagated to the return type (using the GCC `typeof()`
         * extension), so any casting the caller needs to do on the return type must be
         * explicit.
         * @returns the same `object`
         */
        ref(): GObject.Object;
        /**
         * Increase the reference count of `object`, and possibly remove the
         * [floating][floating-ref] reference, if `object` has a floating reference.
         *
         * In other words, if the object is floating, then this call "assumes
         * ownership" of the floating reference, converting it to a normal
         * reference by clearing the floating flag while leaving the reference
         * count unchanged.  If the object is not floating, then this call
         * adds a new normal reference increasing the reference count by one.
         *
         * Since GLib 2.56, the type of `object` will be propagated to the return type
         * under the same conditions as for `g_object_ref()`.
         * @returns `object`
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
         * Internally, the `key` is converted to a {@link GLib.Quark} using `g_quark_from_string()`.
         * This means a copy of `key` is kept permanently (even after `object` has been
         * finalized) — so it is recommended to only use a small, bounded set of values
         * for `key` in your program, to avoid the {@link GLib.Quark} storage growing unbounded.
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
         * @returns the data if found, or `null`          if no such data exists.
         */
        steal_data(key: string): any | null;
        /**
         * This function gets back user data pointers stored via
         * `g_object_set_qdata()` and removes the `data` from object
         * without invoking its `destroy()` function (if any was
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
         * Using `g_object_get_qdata()` in the above example, instead of
         * `g_object_steal_qdata()` would have left the destroy function set,
         * and thus the partial string list would have been freed upon
         * `g_object_set_qdata_full()`.
         * @param quark A {@link GLib.Quark}, naming the user data pointer
         * @returns The user data pointer set, or `null`
         */
        steal_qdata(quark: GLib.Quark): any | null;
        /**
         * Reverts the effect of a previous call to
         * `g_object_freeze_notify()`. The freeze count is decreased on `object`
         * and when it reaches zero, queued "notify" signals are emitted.
         *
         * Duplicate notifications for each property are squashed so that at most one
         * {@link GObject.Object.SignalSignatures.notify | GObject.Object::notify} signal is emitted for each property, in the reverse order
         * in which they have been queued.
         *
         * It is an error to call this function when the freeze count is zero.
         */
        thaw_notify(): void;
        /**
         * Decreases the reference count of `object`. When its reference count
         * drops to 0, the object is finalized (i.e. its memory is freed).
         *
         * If the pointer to the {@link GObject.Object} may be reused in future (for example, if it is
         * an instance variable of another object), it is recommended to clear the
         * pointer to `null` rather than retain a dangling pointer to a potentially
         * invalid {@link GObject.Object} instance. Use `g_clear_object()` for this.
         */
        unref(): void;
        /**
         * This function essentially limits the life time of the `closure` to
         * the life time of the object. That is, when the object is finalized,
         * the `closure` is invalidated by calling `g_closure_invalidate()` on
         * it, in order to prevent invocations of the closure with a finalized
         * (nonexisting) object. Also, `g_object_ref()` and `g_object_unref()` are
         * added as marshal guards to the `closure`, to ensure that an extra
         * reference count is held on `object` during invocation of the
         * `closure`.  Usually, this function will be called on closures that
         * use this `object` as closure data.
         * @param closure {@link GObject.Closure} to watch
         */
        watch_closure(closure: GObject.Closure): void;
        /**
         * the `constructed` function is called by `g_object_new()` as the
         *  final step of the object creation process.  At the point of the call, all
         *  construction properties have been set on the object.  The purpose of this
         *  call is to allow for object initialisation steps that can only be performed
         *  after construction properties have been set.  `constructed` implementors
         *  should chain up to the `constructed` call of their parent class to allow it
         *  to complete its initialisation.
         * @virtual
         */
        vfunc_constructed(): void;
        /**
         * emits property change notification for a bunch
         *  of properties. Overriding `dispatch_properties_changed` should be rarely
         *  needed.
         * @param n_pspecs
         * @param pspecs
         * @virtual
         */
        vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void;
        /**
         * the `dispose` function is supposed to drop all references to other
         *  objects, but keep the instance otherwise intact, so that client method
         *  invocations still work. It may be run multiple times (due to reference
         *  loops). Before returning, `dispose` should chain up to the `dispose` method
         *  of the parent class.
         * @virtual
         */
        vfunc_dispose(): void;
        /**
         * instance finalization function, should finish the finalization of
         *  the instance begun in `dispose` and chain up to the `finalize` method of the
         *  parent class.
         * @virtual
         */
        vfunc_finalize(): void;
        /**
         * the generic getter for all properties of this type. Should be
         *  overridden for every type with properties.
         * @param property_id
         * @param value
         * @param pspec
         * @virtual
         */
        vfunc_get_property(property_id: number, value: GObject.Value | any, pspec: GObject.ParamSpec): void;
        /**
         * Emits a "notify" signal for the property `property_name` on `object`.
         *
         * When possible, eg. when signaling a property change from within the class
         * that registered the property, you should use `g_object_notify_by_pspec()`
         * instead.
         *
         * Note that emission of the notify signal may be blocked with
         * `g_object_freeze_notify()`. In this case, the signal emissions are queued
         * and will be emitted (in reverse order) when `g_object_thaw_notify()` is
         * called.
         * @param pspec
         * @virtual
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
         * @virtual
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

    namespace Icon {
        // Signal signatures
        interface SignalSignatures extends Widget.SignalSignatures {
            'notify::fallback-gicon': (pspec: GObject.ParamSpec) => void;
            'notify::fallback-icon-name': (pspec: GObject.ParamSpec) => void;
            'notify::gicon': (pspec: GObject.ParamSpec) => void;
            'notify::icon-name': (pspec: GObject.ParamSpec) => void;
            'notify::icon-size': (pspec: GObject.ParamSpec) => void;
            'notify::is-symbolic': (pspec: GObject.ParamSpec) => void;
            'notify::can-focus': (pspec: GObject.ParamSpec) => void;
            'notify::hover': (pspec: GObject.ParamSpec) => void;
            'notify::label-actor': (pspec: GObject.ParamSpec) => void;
            'notify::pseudo-class': (pspec: GObject.ParamSpec) => void;
            'notify::style': (pspec: GObject.ParamSpec) => void;
            'notify::style-class': (pspec: GObject.ParamSpec) => void;
            'notify::track-hover': (pspec: GObject.ParamSpec) => void;
            'notify::accessible-name': (pspec: GObject.ParamSpec) => void;
            'notify::accessible-role': (pspec: GObject.ParamSpec) => void;
            'notify::actions': (pspec: GObject.ParamSpec) => void;
            'notify::allocation': (pspec: GObject.ParamSpec) => void;
            'notify::background-color': (pspec: GObject.ParamSpec) => void;
            'notify::background-color-set': (pspec: GObject.ParamSpec) => void;
            'notify::child-transform': (pspec: GObject.ParamSpec) => void;
            'notify::child-transform-set': (pspec: GObject.ParamSpec) => void;
            'notify::clip-rect': (pspec: GObject.ParamSpec) => void;
            'notify::clip-to-allocation': (pspec: GObject.ParamSpec) => void;
            'notify::color-state': (pspec: GObject.ParamSpec) => void;
            'notify::constraints': (pspec: GObject.ParamSpec) => void;
            'notify::content': (pspec: GObject.ParamSpec) => void;
            'notify::content-box': (pspec: GObject.ParamSpec) => void;
            'notify::content-gravity': (pspec: GObject.ParamSpec) => void;
            'notify::content-repeat': (pspec: GObject.ParamSpec) => void;
            'notify::context': (pspec: GObject.ParamSpec) => void;
            'notify::effect': (pspec: GObject.ParamSpec) => void;
            'notify::first-child': (pspec: GObject.ParamSpec) => void;
            'notify::fixed-position-set': (pspec: GObject.ParamSpec) => void;
            'notify::fixed-x': (pspec: GObject.ParamSpec) => void;
            'notify::fixed-y': (pspec: GObject.ParamSpec) => void;
            'notify::has-clip': (pspec: GObject.ParamSpec) => void;
            'notify::has-pointer': (pspec: GObject.ParamSpec) => void;
            'notify::height': (pspec: GObject.ParamSpec) => void;
            'notify::last-child': (pspec: GObject.ParamSpec) => void;
            'notify::layout-manager': (pspec: GObject.ParamSpec) => void;
            'notify::magnification-filter': (pspec: GObject.ParamSpec) => void;
            'notify::mapped': (pspec: GObject.ParamSpec) => void;
            'notify::margin-bottom': (pspec: GObject.ParamSpec) => void;
            'notify::margin-left': (pspec: GObject.ParamSpec) => void;
            'notify::margin-right': (pspec: GObject.ParamSpec) => void;
            'notify::margin-top': (pspec: GObject.ParamSpec) => void;
            'notify::min-height': (pspec: GObject.ParamSpec) => void;
            'notify::min-height-set': (pspec: GObject.ParamSpec) => void;
            'notify::min-width': (pspec: GObject.ParamSpec) => void;
            'notify::min-width-set': (pspec: GObject.ParamSpec) => void;
            'notify::minification-filter': (pspec: GObject.ParamSpec) => void;
            'notify::name': (pspec: GObject.ParamSpec) => void;
            'notify::natural-height': (pspec: GObject.ParamSpec) => void;
            'notify::natural-height-set': (pspec: GObject.ParamSpec) => void;
            'notify::natural-width': (pspec: GObject.ParamSpec) => void;
            'notify::natural-width-set': (pspec: GObject.ParamSpec) => void;
            'notify::offscreen-redirect': (pspec: GObject.ParamSpec) => void;
            'notify::opacity': (pspec: GObject.ParamSpec) => void;
            'notify::pivot-point': (pspec: GObject.ParamSpec) => void;
            'notify::pivot-point-z': (pspec: GObject.ParamSpec) => void;
            'notify::position': (pspec: GObject.ParamSpec) => void;
            'notify::reactive': (pspec: GObject.ParamSpec) => void;
            'notify::realized': (pspec: GObject.ParamSpec) => void;
            'notify::request-mode': (pspec: GObject.ParamSpec) => void;
            'notify::rotation-angle-x': (pspec: GObject.ParamSpec) => void;
            'notify::rotation-angle-y': (pspec: GObject.ParamSpec) => void;
            'notify::rotation-angle-z': (pspec: GObject.ParamSpec) => void;
            'notify::scale-x': (pspec: GObject.ParamSpec) => void;
            'notify::scale-y': (pspec: GObject.ParamSpec) => void;
            'notify::scale-z': (pspec: GObject.ParamSpec) => void;
            'notify::show-on-set-parent': (pspec: GObject.ParamSpec) => void;
            'notify::size': (pspec: GObject.ParamSpec) => void;
            'notify::text-direction': (pspec: GObject.ParamSpec) => void;
            'notify::transform': (pspec: GObject.ParamSpec) => void;
            'notify::transform-set': (pspec: GObject.ParamSpec) => void;
            'notify::translation-x': (pspec: GObject.ParamSpec) => void;
            'notify::translation-y': (pspec: GObject.ParamSpec) => void;
            'notify::translation-z': (pspec: GObject.ParamSpec) => void;
            'notify::visible': (pspec: GObject.ParamSpec) => void;
            'notify::width': (pspec: GObject.ParamSpec) => void;
            'notify::x': (pspec: GObject.ParamSpec) => void;
            'notify::x-align': (pspec: GObject.ParamSpec) => void;
            'notify::x-expand': (pspec: GObject.ParamSpec) => void;
            'notify::y': (pspec: GObject.ParamSpec) => void;
            'notify::y-align': (pspec: GObject.ParamSpec) => void;
            'notify::y-expand': (pspec: GObject.ParamSpec) => void;
            'notify::z-position': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps
            extends
                Widget.ConstructorProps,
                Atk.ImplementorIface.ConstructorProps,
                Clutter.Animatable.ConstructorProps {
            fallback_gicon: Gio.Icon;
            fallbackGicon: Gio.Icon;
            fallback_icon_name: string;
            fallbackIconName: string;
            gicon: Gio.Icon;
            icon_name: string;
            iconName: string;
            icon_size: number;
            iconSize: number;
            is_symbolic: boolean;
            isSymbolic: boolean;
        }
    }

    /**
     * A simple styled icon actor
     *
     * {@link St.Icon} is a simple styled texture actor that displays an image from
     * a stylesheet.
     * @gir-type Class
     */
    class Icon extends Widget implements Atk.ImplementorIface, Clutter.Animatable {
        static $gtype: GObject.GType<Icon>;

        // Properties

        /**
         * The fallback {@link Gio.Icon} to display if {@link St.Icon.gicon} fails to load.
         */
        get fallback_gicon(): Gio.Icon;
        set fallback_gicon(val: Gio.Icon);
        /**
         * The fallback {@link Gio.Icon} to display if {@link St.Icon.gicon} fails to load.
         */
        get fallbackGicon(): Gio.Icon;
        set fallbackGicon(val: Gio.Icon);
        /**
         * The fallback icon name of the {@link St.Icon}. See `st_icon_set_fallback_icon_name()`
         * for details.
         */
        get fallback_icon_name(): string;
        set fallback_icon_name(val: string);
        /**
         * The fallback icon name of the {@link St.Icon}. See `st_icon_set_fallback_icon_name()`
         * for details.
         */
        get fallbackIconName(): string;
        set fallbackIconName(val: string);
        /**
         * The {@link Gio.Icon} being displayed by this {@link St.Icon}.
         */
        get gicon(): Gio.Icon;
        set gicon(val: Gio.Icon);
        /**
         * The name of the icon if the icon being displayed is a {@link Gio.ThemedIcon}.
         */
        get icon_name(): string;
        set icon_name(val: string);
        /**
         * The name of the icon if the icon being displayed is a {@link Gio.ThemedIcon}.
         */
        get iconName(): string;
        set iconName(val: string);
        /**
         * The size of the icon, if greater than `0`. Otherwise the icon size is derived
         * from the current style.
         */
        get icon_size(): number;
        set icon_size(val: number);
        /**
         * The size of the icon, if greater than `0`. Otherwise the icon size is derived
         * from the current style.
         */
        get iconSize(): number;
        set iconSize(val: number);
        get is_symbolic(): boolean;
        get isSymbolic(): boolean;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Icon.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<Icon.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): Icon;

        // Signals

        /** @signal */
        connect<K extends keyof Icon.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Icon.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof Icon.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Icon.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof Icon.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Icon.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * Gets the currently set fallback {@link Gio.Icon}.
         * @returns The fallback {@link Gio.Icon}, if set, otherwise `null`
         */
        get_fallback_gicon(): Gio.Icon;
        /**
         * This is a convenience method to get the icon name of the fallback
         * {@link Gio.ThemedIcon} that is currently set.
         * @returns The name of the icon or `null` if no icon is set
         */
        get_fallback_icon_name(): string;
        /**
         * Gets the current {@link Gio.Icon} in use.
         * @returns The current {@link Gio.Icon}, if set, otherwise `null`
         */
        get_gicon(): Gio.Icon | null;
        /**
         * This is a convenience method to get the icon name of the current icon, if it
         * is currently a {@link Gio.ThemedIcon}, or `null` otherwise.
         * @returns The name of the icon or `null`
         */
        get_icon_name(): string | null;
        /**
         * Gets the explicit size set using `st_icon_set_icon_size()` for the icon.
         * This is not necessarily the size that the icon will be displayed at.
         * @returns The explicitly set size, or -1 if no size has been set
         */
        get_icon_size(): number;
        /**
         * @returns Whether the displayed icon is symbolic
         */
        get_is_symbolic(): boolean;
        /**
         * Sets a fallback {@link Gio.Icon} to show if the normal icon fails to load.
         * If `fallback_gicon` is `null` or fails to load, the icon is unset and no
         * texture will be visible for the fallback icon.
         * @param fallback_gicon the fallback {@link Gio.Icon}
         */
        set_fallback_gicon(fallback_gicon?: Gio.Icon | null): void;
        /**
         * This is a convenience method to set the fallback {@link Gio.Icon} to a {@link Gio.ThemedIcon}
         * created using the given icon name. If `fallback_icon_name` is an empty
         * string, `null` or fails to load, the icon is unset and no texture will
         * be visible for the fallback icon.
         * @param fallback_icon_name the name of the fallback icon
         */
        set_fallback_icon_name(fallback_icon_name?: string | null): void;
        /**
         * Sets a {@link Gio.Icon} to show for the icon. If `gicon` is `null` or fails to load,
         * the fallback icon set using `st_icon_set_fallback_icon()` will be shown.
         * @param gicon a {@link Gio.Icon}
         */
        set_gicon(gicon?: Gio.Icon | null): void;
        /**
         * This is a convenience method to set the {@link Gio.Icon} to a {@link Gio.ThemedIcon} created
         * using the given icon name. If `icon_name` is an empty string, `null` or
         * fails to load, the fallback icon will be shown.
         * @param icon_name the name of the icon
         */
        set_icon_name(icon_name?: string | null): void;
        /**
         * Sets an explicit size for the icon. Setting `size` to -1 will use the size
         * defined by the current style or the default icon size.
         * @param size if positive, the new size, otherwise the size will be   derived from the current style
         */
        set_icon_size(size: number): void;
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
         * Will result in the "sensitive" property of the widget {@link GObject.Object} instance to be
         * updated with the same value of the "active" property of the action {@link GObject.Object}
         * instance.
         *
         * If `flags` contains {@link GObject.BindingFlags.BIDIRECTIONAL} then the binding will be mutual:
         * if `target_property` on `target` changes then the `source_property` on `source`
         * will be updated as well.
         *
         * The binding will automatically be removed when either the `source` or the
         * `target` instances are finalized. To remove the binding without affecting the
         * `source` and the `target` you can just call `g_object_unref()` on the returned
         * {@link GObject.Binding} instance.
         *
         * Removing the binding by calling `g_object_unref()` on it must only be done if
         * the binding, `source` and `target` are only used from a single thread and it
         * is clear that both `source` and `target` outlive the binding. Especially it
         * is not safe to rely on this if the binding, `source` or `target` can be
         * finalized from different threads. Keep another reference to the binding and
         * use `g_binding_unbind()` instead to be on the safe side.
         *
         * A {@link GObject.Object} can have multiple bindings.
         * @param source_property the property on `source` to bind
         * @param target the target {@link GObject.Object}
         * @param target_property the property on `target` to bind
         * @param flags flags to pass to {@link GObject.Binding}
         * @returns the {@link GObject.Binding} instance representing the     binding between the two {@link GObject.Object} instances. The binding is released     whenever the {@link GObject.Binding} reference count reaches zero.
         */
        bind_property(
            source_property: string,
            target: GObject.Object,
            target_property: string,
            flags: GObject.BindingFlags | null,
        ): GObject.Binding;
        /**
         * Complete version of `g_object_bind_property()`.
         *
         * Creates a binding between `source_property` on `source` and `target_property`
         * on `target`, allowing you to set the transformation functions to be used by
         * the binding.
         *
         * If `flags` contains {@link GObject.BindingFlags.BIDIRECTIONAL} then the binding will be mutual:
         * if `target_property` on `target` changes then the `source_property` on `source`
         * will be updated as well. The `transform_from` function is only used in case
         * of bidirectional bindings, otherwise it will be ignored
         *
         * The binding will automatically be removed when either the `source` or the
         * `target` instances are finalized. This will release the reference that is
         * being held on the {@link GObject.Binding} instance; if you want to hold on to the
         * {@link GObject.Binding} instance, you will need to hold a reference to it.
         *
         * To remove the binding, call `g_binding_unbind()`.
         *
         * A {@link GObject.Object} can have multiple bindings.
         *
         * The same `user_data` parameter will be used for both `transform_to`
         * and `transform_from` transformation functions; the `notify` function will
         * be called once, when the binding is removed. If you need different data
         * for each transformation function, please use
         * `g_object_bind_property_with_closures()` instead.
         * @param source_property the property on `source` to bind
         * @param target the target {@link GObject.Object}
         * @param target_property the property on `target` to bind
         * @param flags flags to pass to {@link GObject.Binding}
         * @param transform_to the transformation function     from the `source` to the `target`, or `null` to use the default
         * @param transform_from the transformation function     from the `target` to the `source`, or `null` to use the default
         * @param notify a function to call when disposing the binding, to free     resources used by the transformation functions, or `null` if not required
         * @returns the {@link GObject.Binding} instance representing the     binding between the two {@link GObject.Object} instances. The binding is released     whenever the {@link GObject.Binding} reference count reaches zero.
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
        /**
         * @param args
         */
        // Conflicted with GObject.Object.bind_property_full
        bind_property_full(...args: never[]): any;
        /**
         * This function is intended for {@link GObject.Object} implementations to re-enforce
         * a [floating][floating-ref] object reference. Doing this is seldom
         * required: all `GInitiallyUnowneds` are created with a floating reference
         * which usually just needs to be sunken by calling `g_object_ref_sink()`.
         */
        force_floating(): void;
        /**
         * Increases the freeze count on `object`. If the freeze count is
         * non-zero, the emission of "notify" signals on `object` is
         * stopped. The signals are queued until the freeze count is decreased
         * to zero. Duplicate notifications are squashed so that at most one
         * {@link GObject.Object.SignalSignatures.notify | GObject.Object::notify} signal is emitted for each property modified while the
         * object is frozen.
         *
         * This is necessary for accessors that modify multiple properties to prevent
         * premature notification while the object is still being modified.
         */
        freeze_notify(): void;
        /**
         * Gets a named field from the objects table of associations (see `g_object_set_data()`).
         * @param key name of the key for that association
         * @returns the data if found,          or `null` if no such data exists.
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
         * `g_object_set_qdata()`.
         * @param quark A {@link GLib.Quark}, naming the user data pointer
         * @returns The user data pointer set, or `null`
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
         * @returns `true` if `object` has a floating reference
         */
        is_floating(): boolean;
        /**
         * Emits a "notify" signal for the property `property_name` on `object`.
         *
         * When possible, eg. when signaling a property change from within the class
         * that registered the property, you should use `g_object_notify_by_pspec()`
         * instead.
         *
         * Note that emission of the notify signal may be blocked with
         * `g_object_freeze_notify()`. In this case, the signal emissions are queued
         * and will be emitted (in reverse order) when `g_object_thaw_notify()` is
         * called.
         * @param property_name the name of a property installed on the class of `object`.
         */
        notify(property_name: string): void;
        /**
         * Emits a "notify" signal for the property specified by `pspec` on `object`.
         *
         * This function omits the property name lookup, hence it is faster than
         * `g_object_notify()`.
         *
         * One way to avoid using `g_object_notify()` from within the
         * class that registered the properties, and using `g_object_notify_by_pspec()`
         * instead, is to store the GParamSpec used with
         * `g_object_class_install_property()` inside a static array, e.g.:
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
         * @param pspec the {@link GObject.ParamSpec} of a property installed on the class of `object`.
         */
        notify_by_pspec(pspec: GObject.ParamSpec): void;
        /**
         * Increases the reference count of `object`.
         *
         * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
         * of `object` will be propagated to the return type (using the GCC `typeof()`
         * extension), so any casting the caller needs to do on the return type must be
         * explicit.
         * @returns the same `object`
         */
        ref(): GObject.Object;
        /**
         * Increase the reference count of `object`, and possibly remove the
         * [floating][floating-ref] reference, if `object` has a floating reference.
         *
         * In other words, if the object is floating, then this call "assumes
         * ownership" of the floating reference, converting it to a normal
         * reference by clearing the floating flag while leaving the reference
         * count unchanged.  If the object is not floating, then this call
         * adds a new normal reference increasing the reference count by one.
         *
         * Since GLib 2.56, the type of `object` will be propagated to the return type
         * under the same conditions as for `g_object_ref()`.
         * @returns `object`
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
         * Internally, the `key` is converted to a {@link GLib.Quark} using `g_quark_from_string()`.
         * This means a copy of `key` is kept permanently (even after `object` has been
         * finalized) — so it is recommended to only use a small, bounded set of values
         * for `key` in your program, to avoid the {@link GLib.Quark} storage growing unbounded.
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
         * @returns the data if found, or `null`          if no such data exists.
         */
        steal_data(key: string): any | null;
        /**
         * This function gets back user data pointers stored via
         * `g_object_set_qdata()` and removes the `data` from object
         * without invoking its `destroy()` function (if any was
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
         * Using `g_object_get_qdata()` in the above example, instead of
         * `g_object_steal_qdata()` would have left the destroy function set,
         * and thus the partial string list would have been freed upon
         * `g_object_set_qdata_full()`.
         * @param quark A {@link GLib.Quark}, naming the user data pointer
         * @returns The user data pointer set, or `null`
         */
        steal_qdata(quark: GLib.Quark): any | null;
        /**
         * Reverts the effect of a previous call to
         * `g_object_freeze_notify()`. The freeze count is decreased on `object`
         * and when it reaches zero, queued "notify" signals are emitted.
         *
         * Duplicate notifications for each property are squashed so that at most one
         * {@link GObject.Object.SignalSignatures.notify | GObject.Object::notify} signal is emitted for each property, in the reverse order
         * in which they have been queued.
         *
         * It is an error to call this function when the freeze count is zero.
         */
        thaw_notify(): void;
        /**
         * Decreases the reference count of `object`. When its reference count
         * drops to 0, the object is finalized (i.e. its memory is freed).
         *
         * If the pointer to the {@link GObject.Object} may be reused in future (for example, if it is
         * an instance variable of another object), it is recommended to clear the
         * pointer to `null` rather than retain a dangling pointer to a potentially
         * invalid {@link GObject.Object} instance. Use `g_clear_object()` for this.
         */
        unref(): void;
        /**
         * This function essentially limits the life time of the `closure` to
         * the life time of the object. That is, when the object is finalized,
         * the `closure` is invalidated by calling `g_closure_invalidate()` on
         * it, in order to prevent invocations of the closure with a finalized
         * (nonexisting) object. Also, `g_object_ref()` and `g_object_unref()` are
         * added as marshal guards to the `closure`, to ensure that an extra
         * reference count is held on `object` during invocation of the
         * `closure`.  Usually, this function will be called on closures that
         * use this `object` as closure data.
         * @param closure {@link GObject.Closure} to watch
         */
        watch_closure(closure: GObject.Closure): void;
        /**
         * the `constructed` function is called by `g_object_new()` as the
         *  final step of the object creation process.  At the point of the call, all
         *  construction properties have been set on the object.  The purpose of this
         *  call is to allow for object initialisation steps that can only be performed
         *  after construction properties have been set.  `constructed` implementors
         *  should chain up to the `constructed` call of their parent class to allow it
         *  to complete its initialisation.
         * @virtual
         */
        vfunc_constructed(): void;
        /**
         * emits property change notification for a bunch
         *  of properties. Overriding `dispatch_properties_changed` should be rarely
         *  needed.
         * @param n_pspecs
         * @param pspecs
         * @virtual
         */
        vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void;
        /**
         * the `dispose` function is supposed to drop all references to other
         *  objects, but keep the instance otherwise intact, so that client method
         *  invocations still work. It may be run multiple times (due to reference
         *  loops). Before returning, `dispose` should chain up to the `dispose` method
         *  of the parent class.
         * @virtual
         */
        vfunc_dispose(): void;
        /**
         * instance finalization function, should finish the finalization of
         *  the instance begun in `dispose` and chain up to the `finalize` method of the
         *  parent class.
         * @virtual
         */
        vfunc_finalize(): void;
        /**
         * the generic getter for all properties of this type. Should be
         *  overridden for every type with properties.
         * @param property_id
         * @param value
         * @param pspec
         * @virtual
         */
        vfunc_get_property(property_id: number, value: GObject.Value | any, pspec: GObject.ParamSpec): void;
        /**
         * Emits a "notify" signal for the property `property_name` on `object`.
         *
         * When possible, eg. when signaling a property change from within the class
         * that registered the property, you should use `g_object_notify_by_pspec()`
         * instead.
         *
         * Note that emission of the notify signal may be blocked with
         * `g_object_freeze_notify()`. In this case, the signal emissions are queued
         * and will be emitted (in reverse order) when `g_object_thaw_notify()` is
         * called.
         * @param pspec
         * @virtual
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
         * @virtual
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

    namespace IconInfo {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    /**
     * @gir-type Class
     */
    class IconInfo extends GObject.Object {
        static $gtype: GObject.GType<IconInfo>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: IconInfo.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<IconInfo.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static new_for_pixbuf(icon_theme: IconTheme, pixbuf: GdkPixbuf.Pixbuf): IconInfo;

        // Signals

        /** @signal */
        connect<K extends keyof IconInfo.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, IconInfo.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof IconInfo.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, IconInfo.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof IconInfo.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<IconInfo.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * Gets the base scale for the icon.
         *
         * The base scale is a scale for the icon that was specified by
         * the icon theme creator. For instance an icon drawn for a
         * high-dpi screen with window scale 2 for a base size of 32 will be
         * 64 pixels tall and have a base scale of 2.
         * @returns the base scale
         */
        get_base_scale(): number;
        /**
         * Gets the base size for the icon.
         *
         * The base size is a size for the icon that was specified by
         * the icon theme creator. This may be different
         * than the actual size of image; an example of
         * this is small emblem icons that can be attached
         * to a larger icon. These icons will be given
         * the same base size as the larger icons to which
         * they are attached.
         *
         * Note that for scaled icons the base size does
         * not include the base scale.
         * @returns the base size, or 0, if no base     size is known for the icon.
         */
        get_base_size(): number;
        /**
         * Gets the filename for the icon.
         * @returns the filename for the icon.     The return value is owned by GTK+ and should not be modified     or freed.
         */
        get_filename(): string | null;
        /**
         * Checks if the icon is symbolic or not.
         *
         * This currently uses only the file name and not
         * the file contents for determining this.
         * This behaviour may change in the future.
         * @returns `true` if the icon is symbolic, `false` otherwise
         */
        is_symbolic(): boolean;
        /**
         * Renders an icon previously looked up in an icon theme using
         * {@link St.IconTheme.lookup_icon}; the size will be based on the size
         * passed to {@link St.IconTheme.lookup_icon}. Note that the resulting
         * pixbuf may not be exactly this size; an icon theme may have icons
         * that differ slightly from their nominal sizes, and in addition GTK+
         * will avoid scaling icons that it considers sufficiently close to the
         * requested size or for which the source image would have to be scaled
         * up too far. (This maintains sharpness.). This behaviour can be changed
         * by passing the {@link St.IconLookupFlags.FORCE_SIZE} flag when obtaining
         * the {@link St.IconInfo}. If this flag has been specified, the pixbuf
         * returned by this function will be scaled to the exact size.
         * @returns the rendered icon; this may be a newly     created icon or a new reference to an internal icon, so you must     not modify the icon. Use `g_object_unref()` to release your reference     to the icon.
         */
        load_icon(): GdkPixbuf.Pixbuf;
        /**
         * Asynchronously load, render and scale an icon previously looked up
         * from the icon theme using {@link St.IconTheme.lookup_icon}.
         *
         * For more details, see {@link St.IconInfo.load_icon} which is the synchronous
         * version of this call.
         * @param cancellable optional {@link Gio.Cancellable} object, `null` to ignore
         */
        load_icon_async(cancellable?: Gio.Cancellable | null): globalThis.Promise<GdkPixbuf.Pixbuf>;
        /**
         * Asynchronously load, render and scale an icon previously looked up
         * from the icon theme using {@link St.IconTheme.lookup_icon}.
         *
         * For more details, see {@link St.IconInfo.load_icon} which is the synchronous
         * version of this call.
         * @param cancellable optional {@link Gio.Cancellable} object, `null` to ignore
         * @param callback a {@link Gio.AsyncReadyCallback} to call when the     request is satisfied
         */
        load_icon_async(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        /**
         * Asynchronously load, render and scale an icon previously looked up
         * from the icon theme using {@link St.IconTheme.lookup_icon}.
         *
         * For more details, see {@link St.IconInfo.load_icon} which is the synchronous
         * version of this call.
         * @param cancellable optional {@link Gio.Cancellable} object, `null` to ignore
         * @param callback a {@link Gio.AsyncReadyCallback} to call when the     request is satisfied
         */
        load_icon_async(
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): globalThis.Promise<GdkPixbuf.Pixbuf> | void;
        /**
         * Finishes an async icon load, see `st_icon_info_load_icon_async()`.
         * @param res a {@link Gio.AsyncResult}
         * @returns the rendered icon; this may be a newly     created icon or a new reference to an internal icon, so you must     not modify the icon. Use `g_object_unref()` to release your reference     to the icon.
         */
        load_icon_finish(res: Gio.AsyncResult): GdkPixbuf.Pixbuf;
        /**
         * Loads an icon, modifying it to match the system colours for the foreground,
         * success, warning and error colors provided. If the icon is not a symbolic
         * one, the function will return the result from {@link St.IconInfo.load_icon}.
         *
         * This allows loading symbolic icons that will match the system theme.
         *
         * Unless you are implementing a widget, you will want to use
         * `g_themed_icon_new_with_default_fallbacks()` to load the icon.
         *
         * As implementation details, the icon loaded needs to be of SVG type,
         * contain the “symbolic” term as the last component of the icon name,
         * and use the “fg”, “success”, “warning” and “error” CSS styles in the
         * SVG file itself.
         *
         * See the [Symbolic Icons Specification](http://www.freedesktop.org/wiki/SymbolicIcons)
         * for more information about symbolic icons.
         * @param colors a {@link St.IconColors} representing the foreground, warning and error colors
         * @returns a {@link GdkPixbuf.Pixbuf} representing the loaded icon
         */
        load_symbolic(colors: IconColors): [GdkPixbuf.Pixbuf, boolean];
        /**
         * Asynchronously load, render and scale a symbolic icon previously looked up
         * from the icon theme using {@link St.IconTheme.lookup_icon}.
         *
         * For more details, see `st_icon_info_load_symbolic()` which is the synchronous
         * version of this call.
         * @param colors an {@link St.IconColors} representing the foreground, error and     success colors of the icon
         * @param cancellable optional {@link Gio.Cancellable} object,     `null` to ignore
         */
        load_symbolic_async(
            colors: IconColors,
            cancellable?: Gio.Cancellable | null,
        ): globalThis.Promise<[GdkPixbuf.Pixbuf, boolean]>;
        /**
         * Asynchronously load, render and scale a symbolic icon previously looked up
         * from the icon theme using {@link St.IconTheme.lookup_icon}.
         *
         * For more details, see `st_icon_info_load_symbolic()` which is the synchronous
         * version of this call.
         * @param colors an {@link St.IconColors} representing the foreground, error and     success colors of the icon
         * @param cancellable optional {@link Gio.Cancellable} object,     `null` to ignore
         * @param callback a {@link Gio.AsyncReadyCallback} to call when the     request is satisfied
         */
        load_symbolic_async(
            colors: IconColors,
            cancellable: Gio.Cancellable | null,
            callback: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Asynchronously load, render and scale a symbolic icon previously looked up
         * from the icon theme using {@link St.IconTheme.lookup_icon}.
         *
         * For more details, see `st_icon_info_load_symbolic()` which is the synchronous
         * version of this call.
         * @param colors an {@link St.IconColors} representing the foreground, error and     success colors of the icon
         * @param cancellable optional {@link Gio.Cancellable} object,     `null` to ignore
         * @param callback a {@link Gio.AsyncReadyCallback} to call when the     request is satisfied
         */
        load_symbolic_async(
            colors: IconColors,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): globalThis.Promise<[GdkPixbuf.Pixbuf, boolean]> | void;
        /**
         * Finishes an async icon load, see `st_icon_info_load_symbolic_async()`.
         * @param res a {@link Gio.AsyncResult}
         * @returns the rendered icon; this may be a newly     created icon or a new reference to an internal icon, so you must     not modify the icon. Use `g_object_unref()` to release your reference     to the icon.
         */
        load_symbolic_finish(res: Gio.AsyncResult): [GdkPixbuf.Pixbuf, boolean];
    }

    namespace IconTheme {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            /**
             * Emitted when the current icon theme is switched or GTK+ detects
             * that a change has occurred in the contents of the current
             * icon theme.
             * @signal
             */
            changed: () => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    /**
     * Looking up icons by name
     *
     * {@link St.IconTheme} provides a facility for looking up icons by name
     * and size. The main reason for using a name rather than simply
     * providing a filename is to allow different icons to be used
     * depending on what “icon theme” is selected
     * by the user. The operation of icon themes on Linux and Unix
     * follows the [Icon Theme Specification](http://www.freedesktop.org/Standards/icon-theme-spec)
     * There is a fallback icon theme, named `hicolor`, where applications
     * should install their icons, but additional icon themes can be installed
     * as operating system vendors and users choose.
     *
     * In many cases, named themes are used indirectly, via {@link St.Icon},
     * rather than directly, but looking up icons directly is also simple.
     * The {@link St.IconTheme} object acts as a database of all the icons in the
     * current theme.
     * @gir-type Class
     */
    class IconTheme extends GObject.Object {
        static $gtype: GObject.GType<IconTheme>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: IconTheme.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<IconTheme.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): IconTheme;

        // Signals

        /** @signal */
        connect<K extends keyof IconTheme.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, IconTheme.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof IconTheme.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, IconTheme.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof IconTheme.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<IconTheme.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * Adds a resource path that will be looked at when looking
         * for icons, similar to search paths.
         *
         * This function should be used to make application-specific icons
         * available as part of the icon theme.
         *
         * The resources are considered as part of the hicolor icon theme
         * and must be located in subdirectories that are defined in the
         * hicolor icon theme, such as ``path`/16x16/actions/run.png`.
         * Icons that are directly placed in the resource path instead
         * of a subdirectory are also considered as ultimate fallback.
         * @param path a resource path
         */
        add_resource_path(path: string): void;
        /**
         * Appends a directory to the search path.
         * See `st_icon_theme_set_search_path()`.
         * @param path directory name to append to the icon path
         */
        append_search_path(path: string): void;
        /**
         * Looks up a named icon and returns a {@link St.IconInfo} containing
         * information such as the filename of the icon. The icon
         * can then be rendered into a pixbuf using
         * {@link St.IconInfo.load_icon}. ({@link St.IconTheme.load_icon}
         * combines these two steps if all you need is the pixbuf.)
         *
         * If `icon_names` contains more than one name, this function
         * tries them all in the given order before falling back to
         * inherited icon themes.
         * @param icon_names `null`-terminated array of     icon names to lookup
         * @param size desired icon size
         * @param flags flags modifying the behavior of the icon lookup
         * @returns a {@link St.IconInfo} object containing information about the icon
         */
        choose_icon(icon_names: string[], size: number, flags: IconLookupFlags | null): IconInfo | null;
        /**
         * Looks up a named icon for a particular window scale and returns
         * a {@link St.IconInfo} containing information such as the filename of the
         * icon. The icon can then be rendered into a pixbuf using
         * {@link St.IconInfo.load_icon}. ({@link St.IconTheme.load_icon}
         * combines these two steps if all you need is the pixbuf.)
         *
         * If `icon_names` contains more than one name, this function
         * tries them all in the given order before falling back to
         * inherited icon themes.
         * @param icon_names `null`-terminated     array of icon names to lookup
         * @param size desired icon size
         * @param scale desired scale
         * @param flags flags modifying the behavior of the icon lookup
         * @returns a {@link St.IconInfo} object     containing information about the icon.
         */
        choose_icon_for_scale(
            icon_names: string[],
            size: number,
            scale: number,
            flags: IconLookupFlags | null,
        ): IconInfo | null;
        /**
         * Returns an array of integers describing the sizes at which
         * the icon is available without scaling. A size of -1 means
         * that the icon is available in a scalable format. The array
         * is zero-terminated.
         * @param icon_name the name of an icon
         * @returns An newly allocated array describing the sizes at which the icon is available. The array should be freed with `g_free()` when it is no longer needed.
         */
        get_icon_sizes(icon_name: string): number[];
        /**
         * Gets the current search path. See `st_icon_theme_set_search_path()`.
         */
        get_search_path(): string[] | null;
        /**
         * Checks whether an icon theme includes an icon
         * for a particular name.
         * @param icon_name the name of an icon
         * @returns `true` if `icon_theme` includes an  icon for `icon_name`.
         */
        has_icon(icon_name: string): boolean;
        /**
         * Gets the list of contexts available within the current
         * hierarchy of icon themes.
         * See `st_icon_theme_list_icons()` for details about contexts.
         * @returns a {@link GLib.List} list     holding the names of all the contexts in the theme. You must first     free each element in the list with `g_free()`, then free the list     itself with `g_list_free()`.
         */
        list_contexts(): string[];
        /**
         * Lists the icons in the current icon theme. Only a subset
         * of the icons can be listed by providing a context string.
         * The set of values for the context string is system dependent,
         * but will typically include such values as “Applications” and
         * “MimeTypes”. Contexts are explained in the
         * [Icon Theme Specification](http://www.freedesktop.org/wiki/Specifications/icon-theme-spec).
         * The standard contexts are listed in the
         * [Icon Naming Specification](http://www.freedesktop.org/wiki/Specifications/icon-naming-spec).
         * Also see `st_icon_theme_list_contexts()`.
         * @param context a string identifying a particular type of           icon, or `null` to list all icons.
         * @returns a {@link GLib.List} list     holding the names of all the icons in the theme. You must     first free each element in the list with `g_free()`, then     free the list itself with `g_list_free()`.
         */
        list_icons(context?: string | null): string[];
        /**
         * Looks up an icon in an icon theme, scales it to the given size
         * and renders it into a pixbuf. This is a convenience function;
         * if more details about the icon are needed, use
         * {@link St.IconTheme.lookup_icon} followed by {@link St.IconInfo.load_icon}.
         *
         * Note that you probably want to listen for icon theme changes and
         * update the icon. This is usually done by connecting to the
         * GtkWidget::style-set signal. If for some reason you do not want to
         * update the icon when the icon theme changes, you should consider
         * using `gdk_pixbuf_copy()` to make a private copy of the pixbuf
         * returned by this function. Otherwise GTK+ may need to keep the old
         * icon theme loaded, which would be a waste of memory.
         * @param icon_name the name of the icon to lookup
         * @param size the desired icon size. The resulting icon may not be     exactly this size.
         * @param flags flags modifying the behavior of the icon lookup
         * @returns the rendered icon; this may be     a newly created icon or a new reference to an internal icon, so     you must not modify the icon.
         */
        load_icon(icon_name: string, size: number, flags: IconLookupFlags | null): GdkPixbuf.Pixbuf | null;
        /**
         * Looks up an icon in an icon theme for a particular window scale,
         * scales it to the given size and renders it into a pixbuf. This is a
         * convenience function; if more details about the icon are needed,
         * use {@link St.IconTheme.lookup_icon} followed by
         * {@link St.IconInfo.load_icon}.
         *
         * Note that you probably want to listen for icon theme changes and
         * update the icon. This is usually done by connecting to the
         * GtkWidget::style-set signal. If for some reason you do not want to
         * update the icon when the icon theme changes, you should consider
         * using `gdk_pixbuf_copy()` to make a private copy of the pixbuf
         * returned by this function. Otherwise GTK+ may need to keep the old
         * icon theme loaded, which would be a waste of memory.
         * @param icon_name the name of the icon to lookup
         * @param size the desired icon size. The resulting icon may not be     exactly this size.
         * @param scale desired scale
         * @param flags flags modifying the behavior of the icon lookup
         * @returns the rendered icon; this may be     a newly created icon or a new reference to an internal icon, so     you must not modify the icon.
         */
        load_icon_for_scale(
            icon_name: string,
            size: number,
            scale: number,
            flags: IconLookupFlags | null,
        ): GdkPixbuf.Pixbuf | null;
        /**
         * Looks up an icon and returns a {@link St.IconInfo} containing information
         * such as the filename of the icon. The icon can then be rendered
         * into a pixbuf using {@link St.IconInfo.load_icon}.
         *
         * When rendering on displays with high pixel densities you should not
         * use a `size` multiplied by the scaling factor returned by functions
         * like `gdk_window_get_scale_factor()`. Instead, you should use
         * {@link St.IconTheme.lookup_by_gicon_for_scale}, as the assets loaded
         * for a given scaling factor may be different.
         * @param icon the {@link Gio.Icon} to look up
         * @param size desired icon size
         * @param flags flags modifying the behavior of the icon lookup
         * @returns a {@link St.IconInfo} containing     information about the icon.
         */
        lookup_by_gicon(icon: Gio.Icon, size: number, flags: IconLookupFlags | null): IconInfo | null;
        /**
         * Looks up an icon and returns a {@link St.IconInfo} containing information
         * such as the filename of the icon. The icon can then be rendered into
         * a pixbuf using {@link St.IconInfo.load_icon}.
         * @param icon the {@link Gio.Icon} to look up
         * @param size desired icon size
         * @param scale the desired scale
         * @param flags flags modifying the behavior of the icon lookup
         * @returns a {@link St.IconInfo} containing     information about the icon.
         */
        lookup_by_gicon_for_scale(
            icon: Gio.Icon,
            size: number,
            scale: number,
            flags: IconLookupFlags | null,
        ): IconInfo | null;
        /**
         * Looks up a named icon and returns a {@link St.IconInfo} containing
         * information such as the filename of the icon. The icon
         * can then be rendered into a pixbuf using
         * {@link St.IconInfo.load_icon}. ({@link St.IconTheme.load_icon}
         * combines these two steps if all you need is the pixbuf.)
         *
         * When rendering on displays with high pixel densities you should not
         * use a `size` multiplied by the scaling factor returned by functions
         * like `gdk_window_get_scale_factor()`. Instead, you should use
         * {@link St.IconTheme.lookup_by_gicon_for_scale}, as the assets loaded
         * for a given scaling factor may be different.
         * @param icon_name the name of the icon to lookup
         * @param size desired icon size
         * @param flags flags modifying the behavior of the icon lookup
         * @returns a {@link St.IconInfo} object     containing information about the icon.
         */
        lookup_icon(icon_name: string, size: number, flags: IconLookupFlags | null): IconInfo | null;
        /**
         * Looks up a named icon for a particular window scale and returns a
         * {@link St.IconInfo} containing information such as the filename of the
         * icon. The icon can then be rendered into a pixbuf using
         * {@link St.IconInfo.load_icon}. ({@link St.IconTheme.load_icon} combines
         * these two steps if all you need is the pixbuf.)
         * @param icon_name the name of the icon to lookup
         * @param size desired icon size
         * @param scale the desired scale
         * @param flags flags modifying the behavior of the icon lookup
         * @returns a {@link St.IconInfo} object     containing information about the icon.
         */
        lookup_icon_for_scale(
            icon_name: string,
            size: number,
            scale: number,
            flags: IconLookupFlags | null,
        ): IconInfo | null;
        /**
         * Prepends a directory to the search path.
         * See `st_icon_theme_set_search_path()`.
         * @param path directory name to prepend to the icon path
         */
        prepend_search_path(path: string): void;
        /**
         * Checks to see if the icon theme has changed; if it has, any
         * currently cached information is discarded and will be reloaded
         * next time `icon_theme` is accessed.
         * @returns `true` if the icon theme has changed and needed     to be reloaded.
         */
        rescan_if_needed(): boolean;
        /**
         * Sets the search path for the icon theme object. When looking
         * for an icon theme, GTK+ will search for a subdirectory of
         * one or more of the directories in `path` with the same name
         * as the icon theme containing an index.theme file. (Themes from
         * multiple of the path elements are combined to allow themes to be
         * extended by adding icons in the user’s home directory.)
         *
         * In addition if an icon found isn’t found either in the current
         * icon theme or the default icon theme, and an image file with
         * the right name is found directly in one of the elements of
         * `path`, then that image will be used for the icon name.
         * (This is legacy feature, and new icons should be put
         * into the fallback icon theme, which is called hicolor,
         * rather than directly on the icon path.)
         * @param path array of     directories that are searched for icon themes
         */
        set_search_path(path: string[]): void;
    }

    namespace ImageContent {
        // Signal signatures
        interface SignalSignatures extends Clutter.Image.SignalSignatures {
            'notify::preferred-height': (pspec: GObject.ParamSpec) => void;
            'notify::preferred-width': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps
            extends
                Clutter.Image.ConstructorProps,
                Clutter.Content.ConstructorProps,
                Gio.Icon.ConstructorProps,
                Gio.LoadableIcon.ConstructorProps {
            preferred_height: number;
            preferredHeight: number;
            preferred_width: number;
            preferredWidth: number;
        }
    }

    /**
     * @gir-type Class
     */
    class ImageContent extends Clutter.Image implements Clutter.Content, Gio.Icon, Gio.LoadableIcon {
        static $gtype: GObject.GType<ImageContent>;

        // Properties

        get preferred_height(): number;
        get preferredHeight(): number;
        get preferred_width(): number;
        get preferredWidth(): number;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: ImageContent.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<ImageContent.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        /** @signal */
        connect<K extends keyof ImageContent.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, ImageContent.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof ImageContent.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, ImageContent.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof ImageContent.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<ImageContent.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Static methods

        /**
         * Creates a new {@link St.ImageContent}, a simple content for sized images.
         *
         * See {@link Clutter.Image} for setting the actual image to display or {@link St.Icon} for
         * displaying icons.
         * @param width The preferred width to be used when drawing the content
         * @param height The preferred width to be used when drawing the content
         */
        static new_with_preferred_size(width: number, height: number): Clutter.Content;
        /**
         * Retrieves the natural size of the `content`, if any.
         *
         * The natural size of a {@link Clutter.Content} is defined as the size the content
         * would have regardless of the allocation of the actor that is painting it,
         * for instance the size of an image data.
         * @returns `true` if the content has a preferred size, and `false`   otherwise
         */
        get_preferred_size(): [boolean, number, number];
        /**
         * Invalidates a {@link Clutter.Content}.
         *
         * This function should be called by {@link Clutter.Content} implementations when
         * they change the way a the content should be painted regardless of the
         * actor state.
         */
        invalidate(): void;
        /**
         * Signals that `content`'s size changed. Attached actors with request mode
         * set to {@link Clutter.RequestMode.CONTENT_SIZE} will have a relayout queued.
         *
         * Attached actors with other request modes are not redrawn. To redraw them
         * too, use {@link Clutter.Content.invalidate}.
         */
        invalidate_size(): void;
        /**
         * virtual function; called each time a {@link Clutter.Content} is attached
         *   to a {@link Clutter.Actor}.
         * @param actor
         * @virtual
         */
        vfunc_attached(actor: Clutter.Actor): void;
        /**
         * virtual function; called each time a {@link Clutter.Content} is detached
         *   from a {@link Clutter.Actor}.
         * @param actor
         * @virtual
         */
        vfunc_detached(actor: Clutter.Actor): void;
        /**
         * Retrieves the natural size of the `content`, if any.
         *
         * The natural size of a {@link Clutter.Content} is defined as the size the content
         * would have regardless of the allocation of the actor that is painting it,
         * for instance the size of an image data.
         * @virtual
         */
        vfunc_get_preferred_size(): [boolean, number, number];
        /**
         * Invalidates a {@link Clutter.Content}.
         *
         * This function should be called by {@link Clutter.Content} implementations when
         * they change the way a the content should be painted regardless of the
         * actor state.
         * @virtual
         */
        vfunc_invalidate(): void;
        /**
         * Signals that `content`'s size changed. Attached actors with request mode
         * set to {@link Clutter.RequestMode.CONTENT_SIZE} will have a relayout queued.
         *
         * Attached actors with other request modes are not redrawn. To redraw them
         * too, use {@link Clutter.Content.invalidate}.
         * @virtual
         */
        vfunc_invalidate_size(): void;
        /**
         * virtual function; called each time the content needs to
         *   paint itself
         * @param actor
         * @param node
         * @param paint_context
         * @virtual
         */
        vfunc_paint_content(actor: Clutter.Actor, node: Clutter.PaintNode, paint_context: Clutter.PaintContext): void;
        /**
         * Checks if two icons are equal.
         * @param icon2 pointer to the second {@link Gio.Icon}.
         * @returns `true` if `icon1` is equal to `icon2`. `false` otherwise.
         */
        equal(icon2?: Gio.Icon | null): boolean;
        /**
         * Gets a hash for an icon.
         * @returns a `guint` containing a hash for the `icon`, suitable for   use in a {@link GLib.HashTable} or similar data structure.
         */
        hash(): number;
        /**
         * Serializes a {@link Gio.Icon} into a {@link GLib.Variant}. An equivalent {@link Gio.Icon} can be retrieved
         * back by calling `g_icon_deserialize()` on the returned value.
         * As serialization will avoid using raw icon data when possible, it only
         * makes sense to transfer the {@link GLib.Variant} between processes on the same machine,
         * (as opposed to over the network), and within the same file system namespace.
         * @returns a {@link GLib.Variant}, or `null` when serialization fails. The {@link GLib.Variant} will not be floating.
         */
        serialize(): GLib.Variant | null;
        /**
         * Generates a textual representation of `icon` that can be used for
         * serialization such as when passing `icon` to a different process or
         * saving it to persistent storage. Use `g_icon_new_for_string()` to
         * get `icon` back from the returned string.
         *
         * The encoding of the returned string is proprietary to {@link Gio.Icon} except
         * in the following two cases
         *
         * - If `icon` is a {@link Gio.FileIcon}, the returned string is a native path
         *   (such as `/path/to/my icon.png`) without escaping
         *   if the {@link Gio.File} for `icon` is a native file.  If the file is not
         *   native, the returned string is the result of `g_file_get_uri()`
         *   (such as `sftp://path/to/my%20icon.png`).
         *
         * - If `icon` is a {@link Gio.ThemedIcon} with exactly one name and no fallbacks,
         *   the encoding is simply the name (such as `network-server`).
         * @returns An allocated NUL-terminated UTF8 string or `null` if `icon` can't be serialized. Use `g_free()` to free.
         */
        to_string(): string | null;
        /**
         * Checks if two icons are equal.
         * @param icon2 pointer to the second {@link Gio.Icon}.
         * @virtual
         */
        vfunc_equal(icon2?: Gio.Icon | null): boolean;
        /**
         * Gets a hash for an icon.
         * @virtual
         */
        vfunc_hash(): number;
        /**
         * Serializes a {@link Gio.Icon} into a {@link GLib.Variant}. An equivalent {@link Gio.Icon} can be retrieved
         * back by calling `g_icon_deserialize()` on the returned value.
         * As serialization will avoid using raw icon data when possible, it only
         * makes sense to transfer the {@link GLib.Variant} between processes on the same machine,
         * (as opposed to over the network), and within the same file system namespace.
         * @virtual
         */
        vfunc_serialize(): GLib.Variant | null;
        /**
         * Serializes the `icon` into string tokens.
         * This is can be invoked when `g_icon_new_for_string()` is called.
         * @virtual
         */
        vfunc_to_tokens(): [boolean, string[], number];
        /**
         * Loads a loadable icon. For the asynchronous version of this function,
         * see `g_loadable_icon_load_async()`.
         * @param size an integer.
         * @param cancellable optional {@link Gio.Cancellable} object, `null` to ignore.
         * @returns a {@link Gio.InputStream} to read the icon from.
         */
        load(size: number, cancellable?: Gio.Cancellable | null): [Gio.InputStream, string];
        /**
         * Loads an icon asynchronously. To finish this function, see
         * `g_loadable_icon_load_finish()`. For the synchronous, blocking
         * version of this function, see `g_loadable_icon_load()`.
         * @param size an integer.
         * @param cancellable optional {@link Gio.Cancellable} object, `null` to ignore.
         */
        load_async(size: number, cancellable?: Gio.Cancellable | null): globalThis.Promise<[Gio.InputStream, string]>;
        /**
         * Loads an icon asynchronously. To finish this function, see
         * `g_loadable_icon_load_finish()`. For the synchronous, blocking
         * version of this function, see `g_loadable_icon_load()`.
         * @param size an integer.
         * @param cancellable optional {@link Gio.Cancellable} object, `null` to ignore.
         * @param callback a {@link Gio.AsyncReadyCallback}   to call when the request is satisfied
         */
        load_async(
            size: number,
            cancellable: Gio.Cancellable | null,
            callback: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Loads an icon asynchronously. To finish this function, see
         * `g_loadable_icon_load_finish()`. For the synchronous, blocking
         * version of this function, see `g_loadable_icon_load()`.
         * @param size an integer.
         * @param cancellable optional {@link Gio.Cancellable} object, `null` to ignore.
         * @param callback a {@link Gio.AsyncReadyCallback}   to call when the request is satisfied
         */
        load_async(
            size: number,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): globalThis.Promise<[Gio.InputStream, string]> | void;
        /**
         * Finishes an asynchronous icon load started in `g_loadable_icon_load_async()`.
         * @param res a {@link Gio.AsyncResult}.
         * @returns a {@link Gio.InputStream} to read the icon from.
         */
        load_finish(res: Gio.AsyncResult): [Gio.InputStream, string];
        /**
         * Loads a loadable icon. For the asynchronous version of this function,
         * see `g_loadable_icon_load_async()`.
         * @param size an integer.
         * @param cancellable optional {@link Gio.Cancellable} object, `null` to ignore.
         * @virtual
         */
        vfunc_load(size: number, cancellable?: Gio.Cancellable | null): [Gio.InputStream, string];
        /**
         * Loads an icon asynchronously. To finish this function, see
         * `g_loadable_icon_load_finish()`. For the synchronous, blocking
         * version of this function, see `g_loadable_icon_load()`.
         * @param size an integer.
         * @param cancellable optional {@link Gio.Cancellable} object, `null` to ignore.
         * @param callback a {@link Gio.AsyncReadyCallback}   to call when the request is satisfied
         * @virtual
         */
        vfunc_load_async(
            size: number,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Finishes an asynchronous icon load started in `g_loadable_icon_load_async()`.
         * @param res a {@link Gio.AsyncResult}.
         * @virtual
         */
        vfunc_load_finish(res: Gio.AsyncResult): [Gio.InputStream, string];
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
         * Will result in the "sensitive" property of the widget {@link GObject.Object} instance to be
         * updated with the same value of the "active" property of the action {@link GObject.Object}
         * instance.
         *
         * If `flags` contains {@link GObject.BindingFlags.BIDIRECTIONAL} then the binding will be mutual:
         * if `target_property` on `target` changes then the `source_property` on `source`
         * will be updated as well.
         *
         * The binding will automatically be removed when either the `source` or the
         * `target` instances are finalized. To remove the binding without affecting the
         * `source` and the `target` you can just call `g_object_unref()` on the returned
         * {@link GObject.Binding} instance.
         *
         * Removing the binding by calling `g_object_unref()` on it must only be done if
         * the binding, `source` and `target` are only used from a single thread and it
         * is clear that both `source` and `target` outlive the binding. Especially it
         * is not safe to rely on this if the binding, `source` or `target` can be
         * finalized from different threads. Keep another reference to the binding and
         * use `g_binding_unbind()` instead to be on the safe side.
         *
         * A {@link GObject.Object} can have multiple bindings.
         * @param source_property the property on `source` to bind
         * @param target the target {@link GObject.Object}
         * @param target_property the property on `target` to bind
         * @param flags flags to pass to {@link GObject.Binding}
         * @returns the {@link GObject.Binding} instance representing the     binding between the two {@link GObject.Object} instances. The binding is released     whenever the {@link GObject.Binding} reference count reaches zero.
         */
        bind_property(
            source_property: string,
            target: GObject.Object,
            target_property: string,
            flags: GObject.BindingFlags | null,
        ): GObject.Binding;
        /**
         * Complete version of `g_object_bind_property()`.
         *
         * Creates a binding between `source_property` on `source` and `target_property`
         * on `target`, allowing you to set the transformation functions to be used by
         * the binding.
         *
         * If `flags` contains {@link GObject.BindingFlags.BIDIRECTIONAL} then the binding will be mutual:
         * if `target_property` on `target` changes then the `source_property` on `source`
         * will be updated as well. The `transform_from` function is only used in case
         * of bidirectional bindings, otherwise it will be ignored
         *
         * The binding will automatically be removed when either the `source` or the
         * `target` instances are finalized. This will release the reference that is
         * being held on the {@link GObject.Binding} instance; if you want to hold on to the
         * {@link GObject.Binding} instance, you will need to hold a reference to it.
         *
         * To remove the binding, call `g_binding_unbind()`.
         *
         * A {@link GObject.Object} can have multiple bindings.
         *
         * The same `user_data` parameter will be used for both `transform_to`
         * and `transform_from` transformation functions; the `notify` function will
         * be called once, when the binding is removed. If you need different data
         * for each transformation function, please use
         * `g_object_bind_property_with_closures()` instead.
         * @param source_property the property on `source` to bind
         * @param target the target {@link GObject.Object}
         * @param target_property the property on `target` to bind
         * @param flags flags to pass to {@link GObject.Binding}
         * @param transform_to the transformation function     from the `source` to the `target`, or `null` to use the default
         * @param transform_from the transformation function     from the `target` to the `source`, or `null` to use the default
         * @param notify a function to call when disposing the binding, to free     resources used by the transformation functions, or `null` if not required
         * @returns the {@link GObject.Binding} instance representing the     binding between the two {@link GObject.Object} instances. The binding is released     whenever the {@link GObject.Binding} reference count reaches zero.
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
        /**
         * @param args
         */
        // Conflicted with GObject.Object.bind_property_full
        bind_property_full(...args: never[]): any;
        /**
         * This function is intended for {@link GObject.Object} implementations to re-enforce
         * a [floating][floating-ref] object reference. Doing this is seldom
         * required: all `GInitiallyUnowneds` are created with a floating reference
         * which usually just needs to be sunken by calling `g_object_ref_sink()`.
         */
        force_floating(): void;
        /**
         * Increases the freeze count on `object`. If the freeze count is
         * non-zero, the emission of "notify" signals on `object` is
         * stopped. The signals are queued until the freeze count is decreased
         * to zero. Duplicate notifications are squashed so that at most one
         * {@link GObject.Object.SignalSignatures.notify | GObject.Object::notify} signal is emitted for each property modified while the
         * object is frozen.
         *
         * This is necessary for accessors that modify multiple properties to prevent
         * premature notification while the object is still being modified.
         */
        freeze_notify(): void;
        /**
         * Gets a named field from the objects table of associations (see `g_object_set_data()`).
         * @param key name of the key for that association
         * @returns the data if found,          or `null` if no such data exists.
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
         * `g_object_set_qdata()`.
         * @param quark A {@link GLib.Quark}, naming the user data pointer
         * @returns The user data pointer set, or `null`
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
         * @returns `true` if `object` has a floating reference
         */
        is_floating(): boolean;
        /**
         * Emits a "notify" signal for the property `property_name` on `object`.
         *
         * When possible, eg. when signaling a property change from within the class
         * that registered the property, you should use `g_object_notify_by_pspec()`
         * instead.
         *
         * Note that emission of the notify signal may be blocked with
         * `g_object_freeze_notify()`. In this case, the signal emissions are queued
         * and will be emitted (in reverse order) when `g_object_thaw_notify()` is
         * called.
         * @param property_name the name of a property installed on the class of `object`.
         */
        notify(property_name: string): void;
        /**
         * Emits a "notify" signal for the property specified by `pspec` on `object`.
         *
         * This function omits the property name lookup, hence it is faster than
         * `g_object_notify()`.
         *
         * One way to avoid using `g_object_notify()` from within the
         * class that registered the properties, and using `g_object_notify_by_pspec()`
         * instead, is to store the GParamSpec used with
         * `g_object_class_install_property()` inside a static array, e.g.:
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
         * @param pspec the {@link GObject.ParamSpec} of a property installed on the class of `object`.
         */
        notify_by_pspec(pspec: GObject.ParamSpec): void;
        /**
         * Increases the reference count of `object`.
         *
         * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
         * of `object` will be propagated to the return type (using the GCC `typeof()`
         * extension), so any casting the caller needs to do on the return type must be
         * explicit.
         * @returns the same `object`
         */
        ref(): GObject.Object;
        /**
         * Increase the reference count of `object`, and possibly remove the
         * [floating][floating-ref] reference, if `object` has a floating reference.
         *
         * In other words, if the object is floating, then this call "assumes
         * ownership" of the floating reference, converting it to a normal
         * reference by clearing the floating flag while leaving the reference
         * count unchanged.  If the object is not floating, then this call
         * adds a new normal reference increasing the reference count by one.
         *
         * Since GLib 2.56, the type of `object` will be propagated to the return type
         * under the same conditions as for `g_object_ref()`.
         * @returns `object`
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
         * Internally, the `key` is converted to a {@link GLib.Quark} using `g_quark_from_string()`.
         * This means a copy of `key` is kept permanently (even after `object` has been
         * finalized) — so it is recommended to only use a small, bounded set of values
         * for `key` in your program, to avoid the {@link GLib.Quark} storage growing unbounded.
         * @param key name of the key
         * @param data data to associate with that key
         */
        set_data(key: string, data?: any | null): void;
        /**
         * @param args
         */
        // Conflicted with Clutter.Image.set_data
        set_data(...args: never[]): any;
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
         * @returns the data if found, or `null`          if no such data exists.
         */
        steal_data(key: string): any | null;
        /**
         * This function gets back user data pointers stored via
         * `g_object_set_qdata()` and removes the `data` from object
         * without invoking its `destroy()` function (if any was
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
         * Using `g_object_get_qdata()` in the above example, instead of
         * `g_object_steal_qdata()` would have left the destroy function set,
         * and thus the partial string list would have been freed upon
         * `g_object_set_qdata_full()`.
         * @param quark A {@link GLib.Quark}, naming the user data pointer
         * @returns The user data pointer set, or `null`
         */
        steal_qdata(quark: GLib.Quark): any | null;
        /**
         * Reverts the effect of a previous call to
         * `g_object_freeze_notify()`. The freeze count is decreased on `object`
         * and when it reaches zero, queued "notify" signals are emitted.
         *
         * Duplicate notifications for each property are squashed so that at most one
         * {@link GObject.Object.SignalSignatures.notify | GObject.Object::notify} signal is emitted for each property, in the reverse order
         * in which they have been queued.
         *
         * It is an error to call this function when the freeze count is zero.
         */
        thaw_notify(): void;
        /**
         * Decreases the reference count of `object`. When its reference count
         * drops to 0, the object is finalized (i.e. its memory is freed).
         *
         * If the pointer to the {@link GObject.Object} may be reused in future (for example, if it is
         * an instance variable of another object), it is recommended to clear the
         * pointer to `null` rather than retain a dangling pointer to a potentially
         * invalid {@link GObject.Object} instance. Use `g_clear_object()` for this.
         */
        unref(): void;
        /**
         * This function essentially limits the life time of the `closure` to
         * the life time of the object. That is, when the object is finalized,
         * the `closure` is invalidated by calling `g_closure_invalidate()` on
         * it, in order to prevent invocations of the closure with a finalized
         * (nonexisting) object. Also, `g_object_ref()` and `g_object_unref()` are
         * added as marshal guards to the `closure`, to ensure that an extra
         * reference count is held on `object` during invocation of the
         * `closure`.  Usually, this function will be called on closures that
         * use this `object` as closure data.
         * @param closure {@link GObject.Closure} to watch
         */
        watch_closure(closure: GObject.Closure): void;
        /**
         * the `constructed` function is called by `g_object_new()` as the
         *  final step of the object creation process.  At the point of the call, all
         *  construction properties have been set on the object.  The purpose of this
         *  call is to allow for object initialisation steps that can only be performed
         *  after construction properties have been set.  `constructed` implementors
         *  should chain up to the `constructed` call of their parent class to allow it
         *  to complete its initialisation.
         * @virtual
         */
        vfunc_constructed(): void;
        /**
         * emits property change notification for a bunch
         *  of properties. Overriding `dispatch_properties_changed` should be rarely
         *  needed.
         * @param n_pspecs
         * @param pspecs
         * @virtual
         */
        vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void;
        /**
         * the `dispose` function is supposed to drop all references to other
         *  objects, but keep the instance otherwise intact, so that client method
         *  invocations still work. It may be run multiple times (due to reference
         *  loops). Before returning, `dispose` should chain up to the `dispose` method
         *  of the parent class.
         * @virtual
         */
        vfunc_dispose(): void;
        /**
         * instance finalization function, should finish the finalization of
         *  the instance begun in `dispose` and chain up to the `finalize` method of the
         *  parent class.
         * @virtual
         */
        vfunc_finalize(): void;
        /**
         * the generic getter for all properties of this type. Should be
         *  overridden for every type with properties.
         * @param property_id
         * @param value
         * @param pspec
         * @virtual
         */
        vfunc_get_property(property_id: number, value: GObject.Value | any, pspec: GObject.ParamSpec): void;
        /**
         * Emits a "notify" signal for the property `property_name` on `object`.
         *
         * When possible, eg. when signaling a property change from within the class
         * that registered the property, you should use `g_object_notify_by_pspec()`
         * instead.
         *
         * Note that emission of the notify signal may be blocked with
         * `g_object_freeze_notify()`. In this case, the signal emissions are queued
         * and will be emitted (in reverse order) when `g_object_thaw_notify()` is
         * called.
         * @param pspec
         * @virtual
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
         * @virtual
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

    namespace Label {
        // Signal signatures
        interface SignalSignatures extends Widget.SignalSignatures {
            'notify::clutter-text': (pspec: GObject.ParamSpec) => void;
            'notify::text': (pspec: GObject.ParamSpec) => void;
            'notify::can-focus': (pspec: GObject.ParamSpec) => void;
            'notify::hover': (pspec: GObject.ParamSpec) => void;
            'notify::label-actor': (pspec: GObject.ParamSpec) => void;
            'notify::pseudo-class': (pspec: GObject.ParamSpec) => void;
            'notify::style': (pspec: GObject.ParamSpec) => void;
            'notify::style-class': (pspec: GObject.ParamSpec) => void;
            'notify::track-hover': (pspec: GObject.ParamSpec) => void;
            'notify::accessible-name': (pspec: GObject.ParamSpec) => void;
            'notify::accessible-role': (pspec: GObject.ParamSpec) => void;
            'notify::actions': (pspec: GObject.ParamSpec) => void;
            'notify::allocation': (pspec: GObject.ParamSpec) => void;
            'notify::background-color': (pspec: GObject.ParamSpec) => void;
            'notify::background-color-set': (pspec: GObject.ParamSpec) => void;
            'notify::child-transform': (pspec: GObject.ParamSpec) => void;
            'notify::child-transform-set': (pspec: GObject.ParamSpec) => void;
            'notify::clip-rect': (pspec: GObject.ParamSpec) => void;
            'notify::clip-to-allocation': (pspec: GObject.ParamSpec) => void;
            'notify::color-state': (pspec: GObject.ParamSpec) => void;
            'notify::constraints': (pspec: GObject.ParamSpec) => void;
            'notify::content': (pspec: GObject.ParamSpec) => void;
            'notify::content-box': (pspec: GObject.ParamSpec) => void;
            'notify::content-gravity': (pspec: GObject.ParamSpec) => void;
            'notify::content-repeat': (pspec: GObject.ParamSpec) => void;
            'notify::context': (pspec: GObject.ParamSpec) => void;
            'notify::effect': (pspec: GObject.ParamSpec) => void;
            'notify::first-child': (pspec: GObject.ParamSpec) => void;
            'notify::fixed-position-set': (pspec: GObject.ParamSpec) => void;
            'notify::fixed-x': (pspec: GObject.ParamSpec) => void;
            'notify::fixed-y': (pspec: GObject.ParamSpec) => void;
            'notify::has-clip': (pspec: GObject.ParamSpec) => void;
            'notify::has-pointer': (pspec: GObject.ParamSpec) => void;
            'notify::height': (pspec: GObject.ParamSpec) => void;
            'notify::last-child': (pspec: GObject.ParamSpec) => void;
            'notify::layout-manager': (pspec: GObject.ParamSpec) => void;
            'notify::magnification-filter': (pspec: GObject.ParamSpec) => void;
            'notify::mapped': (pspec: GObject.ParamSpec) => void;
            'notify::margin-bottom': (pspec: GObject.ParamSpec) => void;
            'notify::margin-left': (pspec: GObject.ParamSpec) => void;
            'notify::margin-right': (pspec: GObject.ParamSpec) => void;
            'notify::margin-top': (pspec: GObject.ParamSpec) => void;
            'notify::min-height': (pspec: GObject.ParamSpec) => void;
            'notify::min-height-set': (pspec: GObject.ParamSpec) => void;
            'notify::min-width': (pspec: GObject.ParamSpec) => void;
            'notify::min-width-set': (pspec: GObject.ParamSpec) => void;
            'notify::minification-filter': (pspec: GObject.ParamSpec) => void;
            'notify::name': (pspec: GObject.ParamSpec) => void;
            'notify::natural-height': (pspec: GObject.ParamSpec) => void;
            'notify::natural-height-set': (pspec: GObject.ParamSpec) => void;
            'notify::natural-width': (pspec: GObject.ParamSpec) => void;
            'notify::natural-width-set': (pspec: GObject.ParamSpec) => void;
            'notify::offscreen-redirect': (pspec: GObject.ParamSpec) => void;
            'notify::opacity': (pspec: GObject.ParamSpec) => void;
            'notify::pivot-point': (pspec: GObject.ParamSpec) => void;
            'notify::pivot-point-z': (pspec: GObject.ParamSpec) => void;
            'notify::position': (pspec: GObject.ParamSpec) => void;
            'notify::reactive': (pspec: GObject.ParamSpec) => void;
            'notify::realized': (pspec: GObject.ParamSpec) => void;
            'notify::request-mode': (pspec: GObject.ParamSpec) => void;
            'notify::rotation-angle-x': (pspec: GObject.ParamSpec) => void;
            'notify::rotation-angle-y': (pspec: GObject.ParamSpec) => void;
            'notify::rotation-angle-z': (pspec: GObject.ParamSpec) => void;
            'notify::scale-x': (pspec: GObject.ParamSpec) => void;
            'notify::scale-y': (pspec: GObject.ParamSpec) => void;
            'notify::scale-z': (pspec: GObject.ParamSpec) => void;
            'notify::show-on-set-parent': (pspec: GObject.ParamSpec) => void;
            'notify::size': (pspec: GObject.ParamSpec) => void;
            'notify::text-direction': (pspec: GObject.ParamSpec) => void;
            'notify::transform': (pspec: GObject.ParamSpec) => void;
            'notify::transform-set': (pspec: GObject.ParamSpec) => void;
            'notify::translation-x': (pspec: GObject.ParamSpec) => void;
            'notify::translation-y': (pspec: GObject.ParamSpec) => void;
            'notify::translation-z': (pspec: GObject.ParamSpec) => void;
            'notify::visible': (pspec: GObject.ParamSpec) => void;
            'notify::width': (pspec: GObject.ParamSpec) => void;
            'notify::x': (pspec: GObject.ParamSpec) => void;
            'notify::x-align': (pspec: GObject.ParamSpec) => void;
            'notify::x-expand': (pspec: GObject.ParamSpec) => void;
            'notify::y': (pspec: GObject.ParamSpec) => void;
            'notify::y-align': (pspec: GObject.ParamSpec) => void;
            'notify::y-expand': (pspec: GObject.ParamSpec) => void;
            'notify::z-position': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps
            extends
                Widget.ConstructorProps,
                Atk.ImplementorIface.ConstructorProps,
                Clutter.Animatable.ConstructorProps {
            clutter_text: Clutter.Text;
            clutterText: Clutter.Text;
            text: string;
        }
    }

    /**
     * Widget for displaying text
     *
     * {@link St.Label} is a simple widget for displaying text. It derives from
     * {@link St.Widget} to add extra style and placement functionality over
     * {@link Clutter.Text}. The internal {@link Clutter.Text} is publicly accessibly to allow
     * applications to set further properties.
     * @gir-type Class
     */
    class Label extends Widget implements Atk.ImplementorIface, Clutter.Animatable {
        static $gtype: GObject.GType<Label>;

        // Properties

        /**
         * The internal {@link Clutter.Text} actor supporting the label
         */
        get clutter_text(): Clutter.Text;
        /**
         * The internal {@link Clutter.Text} actor supporting the label
         */
        get clutterText(): Clutter.Text;
        /**
         * The current text being display in the {@link St.Label}.
         */
        get text(): string;
        set text(val: string);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Label.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<Label.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](text?: string | null): Label;
        // Conflicted with Clutter.Actor.new

        static ['new'](...args: never[]): any;

        // Signals

        /** @signal */
        connect<K extends keyof Label.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Label.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof Label.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Label.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof Label.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Label.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * Retrieve the internal {@link Clutter.Text} used by `label` so that extra parameters
         * can be set.
         * @returns the {@link Clutter.Text} used by {@link St.Label}. The actor is owned by the {@link St.Label} and should not be destroyed by the application.
         */
        get_clutter_text(): Clutter.Actor;
        /**
         * Get the text displayed on the label.
         * @returns the text for the label. This must not be freed by the application
         */
        get_text(): string;
        /**
         * Sets the text displayed by the label.
         * @param text text to set the label to
         */
        set_text(text?: string | null): void;
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
         * Will result in the "sensitive" property of the widget {@link GObject.Object} instance to be
         * updated with the same value of the "active" property of the action {@link GObject.Object}
         * instance.
         *
         * If `flags` contains {@link GObject.BindingFlags.BIDIRECTIONAL} then the binding will be mutual:
         * if `target_property` on `target` changes then the `source_property` on `source`
         * will be updated as well.
         *
         * The binding will automatically be removed when either the `source` or the
         * `target` instances are finalized. To remove the binding without affecting the
         * `source` and the `target` you can just call `g_object_unref()` on the returned
         * {@link GObject.Binding} instance.
         *
         * Removing the binding by calling `g_object_unref()` on it must only be done if
         * the binding, `source` and `target` are only used from a single thread and it
         * is clear that both `source` and `target` outlive the binding. Especially it
         * is not safe to rely on this if the binding, `source` or `target` can be
         * finalized from different threads. Keep another reference to the binding and
         * use `g_binding_unbind()` instead to be on the safe side.
         *
         * A {@link GObject.Object} can have multiple bindings.
         * @param source_property the property on `source` to bind
         * @param target the target {@link GObject.Object}
         * @param target_property the property on `target` to bind
         * @param flags flags to pass to {@link GObject.Binding}
         * @returns the {@link GObject.Binding} instance representing the     binding between the two {@link GObject.Object} instances. The binding is released     whenever the {@link GObject.Binding} reference count reaches zero.
         */
        bind_property(
            source_property: string,
            target: GObject.Object,
            target_property: string,
            flags: GObject.BindingFlags | null,
        ): GObject.Binding;
        /**
         * Complete version of `g_object_bind_property()`.
         *
         * Creates a binding between `source_property` on `source` and `target_property`
         * on `target`, allowing you to set the transformation functions to be used by
         * the binding.
         *
         * If `flags` contains {@link GObject.BindingFlags.BIDIRECTIONAL} then the binding will be mutual:
         * if `target_property` on `target` changes then the `source_property` on `source`
         * will be updated as well. The `transform_from` function is only used in case
         * of bidirectional bindings, otherwise it will be ignored
         *
         * The binding will automatically be removed when either the `source` or the
         * `target` instances are finalized. This will release the reference that is
         * being held on the {@link GObject.Binding} instance; if you want to hold on to the
         * {@link GObject.Binding} instance, you will need to hold a reference to it.
         *
         * To remove the binding, call `g_binding_unbind()`.
         *
         * A {@link GObject.Object} can have multiple bindings.
         *
         * The same `user_data` parameter will be used for both `transform_to`
         * and `transform_from` transformation functions; the `notify` function will
         * be called once, when the binding is removed. If you need different data
         * for each transformation function, please use
         * `g_object_bind_property_with_closures()` instead.
         * @param source_property the property on `source` to bind
         * @param target the target {@link GObject.Object}
         * @param target_property the property on `target` to bind
         * @param flags flags to pass to {@link GObject.Binding}
         * @param transform_to the transformation function     from the `source` to the `target`, or `null` to use the default
         * @param transform_from the transformation function     from the `target` to the `source`, or `null` to use the default
         * @param notify a function to call when disposing the binding, to free     resources used by the transformation functions, or `null` if not required
         * @returns the {@link GObject.Binding} instance representing the     binding between the two {@link GObject.Object} instances. The binding is released     whenever the {@link GObject.Binding} reference count reaches zero.
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
        /**
         * @param args
         */
        // Conflicted with GObject.Object.bind_property_full
        bind_property_full(...args: never[]): any;
        /**
         * This function is intended for {@link GObject.Object} implementations to re-enforce
         * a [floating][floating-ref] object reference. Doing this is seldom
         * required: all `GInitiallyUnowneds` are created with a floating reference
         * which usually just needs to be sunken by calling `g_object_ref_sink()`.
         */
        force_floating(): void;
        /**
         * Increases the freeze count on `object`. If the freeze count is
         * non-zero, the emission of "notify" signals on `object` is
         * stopped. The signals are queued until the freeze count is decreased
         * to zero. Duplicate notifications are squashed so that at most one
         * {@link GObject.Object.SignalSignatures.notify | GObject.Object::notify} signal is emitted for each property modified while the
         * object is frozen.
         *
         * This is necessary for accessors that modify multiple properties to prevent
         * premature notification while the object is still being modified.
         */
        freeze_notify(): void;
        /**
         * Gets a named field from the objects table of associations (see `g_object_set_data()`).
         * @param key name of the key for that association
         * @returns the data if found,          or `null` if no such data exists.
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
         * `g_object_set_qdata()`.
         * @param quark A {@link GLib.Quark}, naming the user data pointer
         * @returns The user data pointer set, or `null`
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
         * @returns `true` if `object` has a floating reference
         */
        is_floating(): boolean;
        /**
         * Emits a "notify" signal for the property `property_name` on `object`.
         *
         * When possible, eg. when signaling a property change from within the class
         * that registered the property, you should use `g_object_notify_by_pspec()`
         * instead.
         *
         * Note that emission of the notify signal may be blocked with
         * `g_object_freeze_notify()`. In this case, the signal emissions are queued
         * and will be emitted (in reverse order) when `g_object_thaw_notify()` is
         * called.
         * @param property_name the name of a property installed on the class of `object`.
         */
        notify(property_name: string): void;
        /**
         * Emits a "notify" signal for the property specified by `pspec` on `object`.
         *
         * This function omits the property name lookup, hence it is faster than
         * `g_object_notify()`.
         *
         * One way to avoid using `g_object_notify()` from within the
         * class that registered the properties, and using `g_object_notify_by_pspec()`
         * instead, is to store the GParamSpec used with
         * `g_object_class_install_property()` inside a static array, e.g.:
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
         * @param pspec the {@link GObject.ParamSpec} of a property installed on the class of `object`.
         */
        notify_by_pspec(pspec: GObject.ParamSpec): void;
        /**
         * Increases the reference count of `object`.
         *
         * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
         * of `object` will be propagated to the return type (using the GCC `typeof()`
         * extension), so any casting the caller needs to do on the return type must be
         * explicit.
         * @returns the same `object`
         */
        ref(): GObject.Object;
        /**
         * Increase the reference count of `object`, and possibly remove the
         * [floating][floating-ref] reference, if `object` has a floating reference.
         *
         * In other words, if the object is floating, then this call "assumes
         * ownership" of the floating reference, converting it to a normal
         * reference by clearing the floating flag while leaving the reference
         * count unchanged.  If the object is not floating, then this call
         * adds a new normal reference increasing the reference count by one.
         *
         * Since GLib 2.56, the type of `object` will be propagated to the return type
         * under the same conditions as for `g_object_ref()`.
         * @returns `object`
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
         * Internally, the `key` is converted to a {@link GLib.Quark} using `g_quark_from_string()`.
         * This means a copy of `key` is kept permanently (even after `object` has been
         * finalized) — so it is recommended to only use a small, bounded set of values
         * for `key` in your program, to avoid the {@link GLib.Quark} storage growing unbounded.
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
         * @returns the data if found, or `null`          if no such data exists.
         */
        steal_data(key: string): any | null;
        /**
         * This function gets back user data pointers stored via
         * `g_object_set_qdata()` and removes the `data` from object
         * without invoking its `destroy()` function (if any was
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
         * Using `g_object_get_qdata()` in the above example, instead of
         * `g_object_steal_qdata()` would have left the destroy function set,
         * and thus the partial string list would have been freed upon
         * `g_object_set_qdata_full()`.
         * @param quark A {@link GLib.Quark}, naming the user data pointer
         * @returns The user data pointer set, or `null`
         */
        steal_qdata(quark: GLib.Quark): any | null;
        /**
         * Reverts the effect of a previous call to
         * `g_object_freeze_notify()`. The freeze count is decreased on `object`
         * and when it reaches zero, queued "notify" signals are emitted.
         *
         * Duplicate notifications for each property are squashed so that at most one
         * {@link GObject.Object.SignalSignatures.notify | GObject.Object::notify} signal is emitted for each property, in the reverse order
         * in which they have been queued.
         *
         * It is an error to call this function when the freeze count is zero.
         */
        thaw_notify(): void;
        /**
         * Decreases the reference count of `object`. When its reference count
         * drops to 0, the object is finalized (i.e. its memory is freed).
         *
         * If the pointer to the {@link GObject.Object} may be reused in future (for example, if it is
         * an instance variable of another object), it is recommended to clear the
         * pointer to `null` rather than retain a dangling pointer to a potentially
         * invalid {@link GObject.Object} instance. Use `g_clear_object()` for this.
         */
        unref(): void;
        /**
         * This function essentially limits the life time of the `closure` to
         * the life time of the object. That is, when the object is finalized,
         * the `closure` is invalidated by calling `g_closure_invalidate()` on
         * it, in order to prevent invocations of the closure with a finalized
         * (nonexisting) object. Also, `g_object_ref()` and `g_object_unref()` are
         * added as marshal guards to the `closure`, to ensure that an extra
         * reference count is held on `object` during invocation of the
         * `closure`.  Usually, this function will be called on closures that
         * use this `object` as closure data.
         * @param closure {@link GObject.Closure} to watch
         */
        watch_closure(closure: GObject.Closure): void;
        /**
         * the `constructed` function is called by `g_object_new()` as the
         *  final step of the object creation process.  At the point of the call, all
         *  construction properties have been set on the object.  The purpose of this
         *  call is to allow for object initialisation steps that can only be performed
         *  after construction properties have been set.  `constructed` implementors
         *  should chain up to the `constructed` call of their parent class to allow it
         *  to complete its initialisation.
         * @virtual
         */
        vfunc_constructed(): void;
        /**
         * emits property change notification for a bunch
         *  of properties. Overriding `dispatch_properties_changed` should be rarely
         *  needed.
         * @param n_pspecs
         * @param pspecs
         * @virtual
         */
        vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void;
        /**
         * the `dispose` function is supposed to drop all references to other
         *  objects, but keep the instance otherwise intact, so that client method
         *  invocations still work. It may be run multiple times (due to reference
         *  loops). Before returning, `dispose` should chain up to the `dispose` method
         *  of the parent class.
         * @virtual
         */
        vfunc_dispose(): void;
        /**
         * instance finalization function, should finish the finalization of
         *  the instance begun in `dispose` and chain up to the `finalize` method of the
         *  parent class.
         * @virtual
         */
        vfunc_finalize(): void;
        /**
         * the generic getter for all properties of this type. Should be
         *  overridden for every type with properties.
         * @param property_id
         * @param value
         * @param pspec
         * @virtual
         */
        vfunc_get_property(property_id: number, value: GObject.Value | any, pspec: GObject.ParamSpec): void;
        /**
         * Emits a "notify" signal for the property `property_name` on `object`.
         *
         * When possible, eg. when signaling a property change from within the class
         * that registered the property, you should use `g_object_notify_by_pspec()`
         * instead.
         *
         * Note that emission of the notify signal may be blocked with
         * `g_object_freeze_notify()`. In this case, the signal emissions are queued
         * and will be emitted (in reverse order) when `g_object_thaw_notify()` is
         * called.
         * @param pspec
         * @virtual
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
         * @virtual
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

    namespace PasswordEntry {
        // Signal signatures
        interface SignalSignatures extends Entry.SignalSignatures {
            'notify::password-visible': (pspec: GObject.ParamSpec) => void;
            'notify::show-peek-icon': (pspec: GObject.ParamSpec) => void;
            'notify::clutter-text': (pspec: GObject.ParamSpec) => void;
            'notify::hint-actor': (pspec: GObject.ParamSpec) => void;
            'notify::hint-text': (pspec: GObject.ParamSpec) => void;
            'notify::input-hints': (pspec: GObject.ParamSpec) => void;
            'notify::input-purpose': (pspec: GObject.ParamSpec) => void;
            'notify::primary-icon': (pspec: GObject.ParamSpec) => void;
            'notify::secondary-icon': (pspec: GObject.ParamSpec) => void;
            'notify::text': (pspec: GObject.ParamSpec) => void;
            'notify::can-focus': (pspec: GObject.ParamSpec) => void;
            'notify::hover': (pspec: GObject.ParamSpec) => void;
            'notify::label-actor': (pspec: GObject.ParamSpec) => void;
            'notify::pseudo-class': (pspec: GObject.ParamSpec) => void;
            'notify::style': (pspec: GObject.ParamSpec) => void;
            'notify::style-class': (pspec: GObject.ParamSpec) => void;
            'notify::track-hover': (pspec: GObject.ParamSpec) => void;
            'notify::accessible-name': (pspec: GObject.ParamSpec) => void;
            'notify::accessible-role': (pspec: GObject.ParamSpec) => void;
            'notify::actions': (pspec: GObject.ParamSpec) => void;
            'notify::allocation': (pspec: GObject.ParamSpec) => void;
            'notify::background-color': (pspec: GObject.ParamSpec) => void;
            'notify::background-color-set': (pspec: GObject.ParamSpec) => void;
            'notify::child-transform': (pspec: GObject.ParamSpec) => void;
            'notify::child-transform-set': (pspec: GObject.ParamSpec) => void;
            'notify::clip-rect': (pspec: GObject.ParamSpec) => void;
            'notify::clip-to-allocation': (pspec: GObject.ParamSpec) => void;
            'notify::color-state': (pspec: GObject.ParamSpec) => void;
            'notify::constraints': (pspec: GObject.ParamSpec) => void;
            'notify::content': (pspec: GObject.ParamSpec) => void;
            'notify::content-box': (pspec: GObject.ParamSpec) => void;
            'notify::content-gravity': (pspec: GObject.ParamSpec) => void;
            'notify::content-repeat': (pspec: GObject.ParamSpec) => void;
            'notify::context': (pspec: GObject.ParamSpec) => void;
            'notify::effect': (pspec: GObject.ParamSpec) => void;
            'notify::first-child': (pspec: GObject.ParamSpec) => void;
            'notify::fixed-position-set': (pspec: GObject.ParamSpec) => void;
            'notify::fixed-x': (pspec: GObject.ParamSpec) => void;
            'notify::fixed-y': (pspec: GObject.ParamSpec) => void;
            'notify::has-clip': (pspec: GObject.ParamSpec) => void;
            'notify::has-pointer': (pspec: GObject.ParamSpec) => void;
            'notify::height': (pspec: GObject.ParamSpec) => void;
            'notify::last-child': (pspec: GObject.ParamSpec) => void;
            'notify::layout-manager': (pspec: GObject.ParamSpec) => void;
            'notify::magnification-filter': (pspec: GObject.ParamSpec) => void;
            'notify::mapped': (pspec: GObject.ParamSpec) => void;
            'notify::margin-bottom': (pspec: GObject.ParamSpec) => void;
            'notify::margin-left': (pspec: GObject.ParamSpec) => void;
            'notify::margin-right': (pspec: GObject.ParamSpec) => void;
            'notify::margin-top': (pspec: GObject.ParamSpec) => void;
            'notify::min-height': (pspec: GObject.ParamSpec) => void;
            'notify::min-height-set': (pspec: GObject.ParamSpec) => void;
            'notify::min-width': (pspec: GObject.ParamSpec) => void;
            'notify::min-width-set': (pspec: GObject.ParamSpec) => void;
            'notify::minification-filter': (pspec: GObject.ParamSpec) => void;
            'notify::name': (pspec: GObject.ParamSpec) => void;
            'notify::natural-height': (pspec: GObject.ParamSpec) => void;
            'notify::natural-height-set': (pspec: GObject.ParamSpec) => void;
            'notify::natural-width': (pspec: GObject.ParamSpec) => void;
            'notify::natural-width-set': (pspec: GObject.ParamSpec) => void;
            'notify::offscreen-redirect': (pspec: GObject.ParamSpec) => void;
            'notify::opacity': (pspec: GObject.ParamSpec) => void;
            'notify::pivot-point': (pspec: GObject.ParamSpec) => void;
            'notify::pivot-point-z': (pspec: GObject.ParamSpec) => void;
            'notify::position': (pspec: GObject.ParamSpec) => void;
            'notify::reactive': (pspec: GObject.ParamSpec) => void;
            'notify::realized': (pspec: GObject.ParamSpec) => void;
            'notify::request-mode': (pspec: GObject.ParamSpec) => void;
            'notify::rotation-angle-x': (pspec: GObject.ParamSpec) => void;
            'notify::rotation-angle-y': (pspec: GObject.ParamSpec) => void;
            'notify::rotation-angle-z': (pspec: GObject.ParamSpec) => void;
            'notify::scale-x': (pspec: GObject.ParamSpec) => void;
            'notify::scale-y': (pspec: GObject.ParamSpec) => void;
            'notify::scale-z': (pspec: GObject.ParamSpec) => void;
            'notify::show-on-set-parent': (pspec: GObject.ParamSpec) => void;
            'notify::size': (pspec: GObject.ParamSpec) => void;
            'notify::text-direction': (pspec: GObject.ParamSpec) => void;
            'notify::transform': (pspec: GObject.ParamSpec) => void;
            'notify::transform-set': (pspec: GObject.ParamSpec) => void;
            'notify::translation-x': (pspec: GObject.ParamSpec) => void;
            'notify::translation-y': (pspec: GObject.ParamSpec) => void;
            'notify::translation-z': (pspec: GObject.ParamSpec) => void;
            'notify::visible': (pspec: GObject.ParamSpec) => void;
            'notify::width': (pspec: GObject.ParamSpec) => void;
            'notify::x': (pspec: GObject.ParamSpec) => void;
            'notify::x-align': (pspec: GObject.ParamSpec) => void;
            'notify::x-expand': (pspec: GObject.ParamSpec) => void;
            'notify::y': (pspec: GObject.ParamSpec) => void;
            'notify::y-align': (pspec: GObject.ParamSpec) => void;
            'notify::y-expand': (pspec: GObject.ParamSpec) => void;
            'notify::z-position': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps
            extends Entry.ConstructorProps, Atk.ImplementorIface.ConstructorProps, Clutter.Animatable.ConstructorProps {
            password_visible: boolean;
            passwordVisible: boolean;
            show_peek_icon: boolean;
            showPeekIcon: boolean;
        }
    }

    /**
     * @gir-type Class
     */
    class PasswordEntry extends Entry implements Atk.ImplementorIface, Clutter.Animatable {
        static $gtype: GObject.GType<PasswordEntry>;

        // Properties

        /**
         * Whether the text in the entry is masked for privacy.
         */
        get password_visible(): boolean;
        set password_visible(val: boolean);
        /**
         * Whether the text in the entry is masked for privacy.
         */
        get passwordVisible(): boolean;
        set passwordVisible(val: boolean);
        /**
         * Whether to display an icon button to toggle the masking enabled by the
         * {@link St.PasswordEntry.password_visible} property.
         */
        get show_peek_icon(): boolean;
        set show_peek_icon(val: boolean);
        /**
         * Whether to display an icon button to toggle the masking enabled by the
         * {@link St.PasswordEntry.password_visible} property.
         */
        get showPeekIcon(): boolean;
        set showPeekIcon(val: boolean);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: PasswordEntry.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<PasswordEntry.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): PasswordEntry;

        // Signals

        /** @signal */
        connect<K extends keyof PasswordEntry.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, PasswordEntry.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof PasswordEntry.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, PasswordEntry.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof PasswordEntry.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<PasswordEntry.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * Gets whether the text is masked in the password entry.
         * @returns `true` if visible
         */
        get_password_visible(): boolean;
        /**
         * Gets whether peek-icon is shown or hidden in the password entry.
         * @returns `true` if visible
         */
        get_show_peek_icon(): boolean;
        /**
         * Sets whether to show or hide text in the password entry.
         * @param value `true` to show the password in the entry, `FALSE` otherwise
         */
        set_password_visible(value: boolean): void;
        /**
         * Sets whether to show or hide the peek-icon in the password entry. If `true`,
         * a icon button for temporarily unmasking the password will be shown at the
         * end of the entry.
         * @param value `true` to show the peek-icon in the entry
         */
        set_show_peek_icon(value: boolean): void;
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
         * Will result in the "sensitive" property of the widget {@link GObject.Object} instance to be
         * updated with the same value of the "active" property of the action {@link GObject.Object}
         * instance.
         *
         * If `flags` contains {@link GObject.BindingFlags.BIDIRECTIONAL} then the binding will be mutual:
         * if `target_property` on `target` changes then the `source_property` on `source`
         * will be updated as well.
         *
         * The binding will automatically be removed when either the `source` or the
         * `target` instances are finalized. To remove the binding without affecting the
         * `source` and the `target` you can just call `g_object_unref()` on the returned
         * {@link GObject.Binding} instance.
         *
         * Removing the binding by calling `g_object_unref()` on it must only be done if
         * the binding, `source` and `target` are only used from a single thread and it
         * is clear that both `source` and `target` outlive the binding. Especially it
         * is not safe to rely on this if the binding, `source` or `target` can be
         * finalized from different threads. Keep another reference to the binding and
         * use `g_binding_unbind()` instead to be on the safe side.
         *
         * A {@link GObject.Object} can have multiple bindings.
         * @param source_property the property on `source` to bind
         * @param target the target {@link GObject.Object}
         * @param target_property the property on `target` to bind
         * @param flags flags to pass to {@link GObject.Binding}
         * @returns the {@link GObject.Binding} instance representing the     binding between the two {@link GObject.Object} instances. The binding is released     whenever the {@link GObject.Binding} reference count reaches zero.
         */
        bind_property(
            source_property: string,
            target: GObject.Object,
            target_property: string,
            flags: GObject.BindingFlags | null,
        ): GObject.Binding;
        /**
         * Complete version of `g_object_bind_property()`.
         *
         * Creates a binding between `source_property` on `source` and `target_property`
         * on `target`, allowing you to set the transformation functions to be used by
         * the binding.
         *
         * If `flags` contains {@link GObject.BindingFlags.BIDIRECTIONAL} then the binding will be mutual:
         * if `target_property` on `target` changes then the `source_property` on `source`
         * will be updated as well. The `transform_from` function is only used in case
         * of bidirectional bindings, otherwise it will be ignored
         *
         * The binding will automatically be removed when either the `source` or the
         * `target` instances are finalized. This will release the reference that is
         * being held on the {@link GObject.Binding} instance; if you want to hold on to the
         * {@link GObject.Binding} instance, you will need to hold a reference to it.
         *
         * To remove the binding, call `g_binding_unbind()`.
         *
         * A {@link GObject.Object} can have multiple bindings.
         *
         * The same `user_data` parameter will be used for both `transform_to`
         * and `transform_from` transformation functions; the `notify` function will
         * be called once, when the binding is removed. If you need different data
         * for each transformation function, please use
         * `g_object_bind_property_with_closures()` instead.
         * @param source_property the property on `source` to bind
         * @param target the target {@link GObject.Object}
         * @param target_property the property on `target` to bind
         * @param flags flags to pass to {@link GObject.Binding}
         * @param transform_to the transformation function     from the `source` to the `target`, or `null` to use the default
         * @param transform_from the transformation function     from the `target` to the `source`, or `null` to use the default
         * @param notify a function to call when disposing the binding, to free     resources used by the transformation functions, or `null` if not required
         * @returns the {@link GObject.Binding} instance representing the     binding between the two {@link GObject.Object} instances. The binding is released     whenever the {@link GObject.Binding} reference count reaches zero.
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
        /**
         * @param args
         */
        // Conflicted with GObject.Object.bind_property_full
        bind_property_full(...args: never[]): any;
        /**
         * This function is intended for {@link GObject.Object} implementations to re-enforce
         * a [floating][floating-ref] object reference. Doing this is seldom
         * required: all `GInitiallyUnowneds` are created with a floating reference
         * which usually just needs to be sunken by calling `g_object_ref_sink()`.
         */
        force_floating(): void;
        /**
         * Increases the freeze count on `object`. If the freeze count is
         * non-zero, the emission of "notify" signals on `object` is
         * stopped. The signals are queued until the freeze count is decreased
         * to zero. Duplicate notifications are squashed so that at most one
         * {@link GObject.Object.SignalSignatures.notify | GObject.Object::notify} signal is emitted for each property modified while the
         * object is frozen.
         *
         * This is necessary for accessors that modify multiple properties to prevent
         * premature notification while the object is still being modified.
         */
        freeze_notify(): void;
        /**
         * Gets a named field from the objects table of associations (see `g_object_set_data()`).
         * @param key name of the key for that association
         * @returns the data if found,          or `null` if no such data exists.
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
         * `g_object_set_qdata()`.
         * @param quark A {@link GLib.Quark}, naming the user data pointer
         * @returns The user data pointer set, or `null`
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
         * @returns `true` if `object` has a floating reference
         */
        is_floating(): boolean;
        /**
         * Emits a "notify" signal for the property `property_name` on `object`.
         *
         * When possible, eg. when signaling a property change from within the class
         * that registered the property, you should use `g_object_notify_by_pspec()`
         * instead.
         *
         * Note that emission of the notify signal may be blocked with
         * `g_object_freeze_notify()`. In this case, the signal emissions are queued
         * and will be emitted (in reverse order) when `g_object_thaw_notify()` is
         * called.
         * @param property_name the name of a property installed on the class of `object`.
         */
        notify(property_name: string): void;
        /**
         * Emits a "notify" signal for the property specified by `pspec` on `object`.
         *
         * This function omits the property name lookup, hence it is faster than
         * `g_object_notify()`.
         *
         * One way to avoid using `g_object_notify()` from within the
         * class that registered the properties, and using `g_object_notify_by_pspec()`
         * instead, is to store the GParamSpec used with
         * `g_object_class_install_property()` inside a static array, e.g.:
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
         * @param pspec the {@link GObject.ParamSpec} of a property installed on the class of `object`.
         */
        notify_by_pspec(pspec: GObject.ParamSpec): void;
        /**
         * Increases the reference count of `object`.
         *
         * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
         * of `object` will be propagated to the return type (using the GCC `typeof()`
         * extension), so any casting the caller needs to do on the return type must be
         * explicit.
         * @returns the same `object`
         */
        ref(): GObject.Object;
        /**
         * Increase the reference count of `object`, and possibly remove the
         * [floating][floating-ref] reference, if `object` has a floating reference.
         *
         * In other words, if the object is floating, then this call "assumes
         * ownership" of the floating reference, converting it to a normal
         * reference by clearing the floating flag while leaving the reference
         * count unchanged.  If the object is not floating, then this call
         * adds a new normal reference increasing the reference count by one.
         *
         * Since GLib 2.56, the type of `object` will be propagated to the return type
         * under the same conditions as for `g_object_ref()`.
         * @returns `object`
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
         * Internally, the `key` is converted to a {@link GLib.Quark} using `g_quark_from_string()`.
         * This means a copy of `key` is kept permanently (even after `object` has been
         * finalized) — so it is recommended to only use a small, bounded set of values
         * for `key` in your program, to avoid the {@link GLib.Quark} storage growing unbounded.
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
         * @returns the data if found, or `null`          if no such data exists.
         */
        steal_data(key: string): any | null;
        /**
         * This function gets back user data pointers stored via
         * `g_object_set_qdata()` and removes the `data` from object
         * without invoking its `destroy()` function (if any was
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
         * Using `g_object_get_qdata()` in the above example, instead of
         * `g_object_steal_qdata()` would have left the destroy function set,
         * and thus the partial string list would have been freed upon
         * `g_object_set_qdata_full()`.
         * @param quark A {@link GLib.Quark}, naming the user data pointer
         * @returns The user data pointer set, or `null`
         */
        steal_qdata(quark: GLib.Quark): any | null;
        /**
         * Reverts the effect of a previous call to
         * `g_object_freeze_notify()`. The freeze count is decreased on `object`
         * and when it reaches zero, queued "notify" signals are emitted.
         *
         * Duplicate notifications for each property are squashed so that at most one
         * {@link GObject.Object.SignalSignatures.notify | GObject.Object::notify} signal is emitted for each property, in the reverse order
         * in which they have been queued.
         *
         * It is an error to call this function when the freeze count is zero.
         */
        thaw_notify(): void;
        /**
         * Decreases the reference count of `object`. When its reference count
         * drops to 0, the object is finalized (i.e. its memory is freed).
         *
         * If the pointer to the {@link GObject.Object} may be reused in future (for example, if it is
         * an instance variable of another object), it is recommended to clear the
         * pointer to `null` rather than retain a dangling pointer to a potentially
         * invalid {@link GObject.Object} instance. Use `g_clear_object()` for this.
         */
        unref(): void;
        /**
         * This function essentially limits the life time of the `closure` to
         * the life time of the object. That is, when the object is finalized,
         * the `closure` is invalidated by calling `g_closure_invalidate()` on
         * it, in order to prevent invocations of the closure with a finalized
         * (nonexisting) object. Also, `g_object_ref()` and `g_object_unref()` are
         * added as marshal guards to the `closure`, to ensure that an extra
         * reference count is held on `object` during invocation of the
         * `closure`.  Usually, this function will be called on closures that
         * use this `object` as closure data.
         * @param closure {@link GObject.Closure} to watch
         */
        watch_closure(closure: GObject.Closure): void;
        /**
         * the `constructed` function is called by `g_object_new()` as the
         *  final step of the object creation process.  At the point of the call, all
         *  construction properties have been set on the object.  The purpose of this
         *  call is to allow for object initialisation steps that can only be performed
         *  after construction properties have been set.  `constructed` implementors
         *  should chain up to the `constructed` call of their parent class to allow it
         *  to complete its initialisation.
         * @virtual
         */
        vfunc_constructed(): void;
        /**
         * emits property change notification for a bunch
         *  of properties. Overriding `dispatch_properties_changed` should be rarely
         *  needed.
         * @param n_pspecs
         * @param pspecs
         * @virtual
         */
        vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void;
        /**
         * the `dispose` function is supposed to drop all references to other
         *  objects, but keep the instance otherwise intact, so that client method
         *  invocations still work. It may be run multiple times (due to reference
         *  loops). Before returning, `dispose` should chain up to the `dispose` method
         *  of the parent class.
         * @virtual
         */
        vfunc_dispose(): void;
        /**
         * instance finalization function, should finish the finalization of
         *  the instance begun in `dispose` and chain up to the `finalize` method of the
         *  parent class.
         * @virtual
         */
        vfunc_finalize(): void;
        /**
         * the generic getter for all properties of this type. Should be
         *  overridden for every type with properties.
         * @param property_id
         * @param value
         * @param pspec
         * @virtual
         */
        vfunc_get_property(property_id: number, value: GObject.Value | any, pspec: GObject.ParamSpec): void;
        /**
         * Emits a "notify" signal for the property `property_name` on `object`.
         *
         * When possible, eg. when signaling a property change from within the class
         * that registered the property, you should use `g_object_notify_by_pspec()`
         * instead.
         *
         * Note that emission of the notify signal may be blocked with
         * `g_object_freeze_notify()`. In this case, the signal emissions are queued
         * and will be emitted (in reverse order) when `g_object_thaw_notify()` is
         * called.
         * @param pspec
         * @virtual
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
         * @virtual
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

    namespace ScrollBar {
        // Signal signatures
        interface SignalSignatures extends Widget.SignalSignatures {
            /**
             * Emitted when the {@link St.ScrollBar} begins scrolling.
             * @signal
             */
            'scroll-start': () => void;
            /**
             * Emitted when the {@link St.ScrollBar} finishes scrolling.
             * @signal
             */
            'scroll-stop': () => void;
            'notify::adjustment': (pspec: GObject.ParamSpec) => void;
            'notify::vertical': (pspec: GObject.ParamSpec) => void;
            'notify::can-focus': (pspec: GObject.ParamSpec) => void;
            'notify::hover': (pspec: GObject.ParamSpec) => void;
            'notify::label-actor': (pspec: GObject.ParamSpec) => void;
            'notify::pseudo-class': (pspec: GObject.ParamSpec) => void;
            'notify::style': (pspec: GObject.ParamSpec) => void;
            'notify::style-class': (pspec: GObject.ParamSpec) => void;
            'notify::track-hover': (pspec: GObject.ParamSpec) => void;
            'notify::accessible-name': (pspec: GObject.ParamSpec) => void;
            'notify::accessible-role': (pspec: GObject.ParamSpec) => void;
            'notify::actions': (pspec: GObject.ParamSpec) => void;
            'notify::allocation': (pspec: GObject.ParamSpec) => void;
            'notify::background-color': (pspec: GObject.ParamSpec) => void;
            'notify::background-color-set': (pspec: GObject.ParamSpec) => void;
            'notify::child-transform': (pspec: GObject.ParamSpec) => void;
            'notify::child-transform-set': (pspec: GObject.ParamSpec) => void;
            'notify::clip-rect': (pspec: GObject.ParamSpec) => void;
            'notify::clip-to-allocation': (pspec: GObject.ParamSpec) => void;
            'notify::color-state': (pspec: GObject.ParamSpec) => void;
            'notify::constraints': (pspec: GObject.ParamSpec) => void;
            'notify::content': (pspec: GObject.ParamSpec) => void;
            'notify::content-box': (pspec: GObject.ParamSpec) => void;
            'notify::content-gravity': (pspec: GObject.ParamSpec) => void;
            'notify::content-repeat': (pspec: GObject.ParamSpec) => void;
            'notify::context': (pspec: GObject.ParamSpec) => void;
            'notify::effect': (pspec: GObject.ParamSpec) => void;
            'notify::first-child': (pspec: GObject.ParamSpec) => void;
            'notify::fixed-position-set': (pspec: GObject.ParamSpec) => void;
            'notify::fixed-x': (pspec: GObject.ParamSpec) => void;
            'notify::fixed-y': (pspec: GObject.ParamSpec) => void;
            'notify::has-clip': (pspec: GObject.ParamSpec) => void;
            'notify::has-pointer': (pspec: GObject.ParamSpec) => void;
            'notify::height': (pspec: GObject.ParamSpec) => void;
            'notify::last-child': (pspec: GObject.ParamSpec) => void;
            'notify::layout-manager': (pspec: GObject.ParamSpec) => void;
            'notify::magnification-filter': (pspec: GObject.ParamSpec) => void;
            'notify::mapped': (pspec: GObject.ParamSpec) => void;
            'notify::margin-bottom': (pspec: GObject.ParamSpec) => void;
            'notify::margin-left': (pspec: GObject.ParamSpec) => void;
            'notify::margin-right': (pspec: GObject.ParamSpec) => void;
            'notify::margin-top': (pspec: GObject.ParamSpec) => void;
            'notify::min-height': (pspec: GObject.ParamSpec) => void;
            'notify::min-height-set': (pspec: GObject.ParamSpec) => void;
            'notify::min-width': (pspec: GObject.ParamSpec) => void;
            'notify::min-width-set': (pspec: GObject.ParamSpec) => void;
            'notify::minification-filter': (pspec: GObject.ParamSpec) => void;
            'notify::name': (pspec: GObject.ParamSpec) => void;
            'notify::natural-height': (pspec: GObject.ParamSpec) => void;
            'notify::natural-height-set': (pspec: GObject.ParamSpec) => void;
            'notify::natural-width': (pspec: GObject.ParamSpec) => void;
            'notify::natural-width-set': (pspec: GObject.ParamSpec) => void;
            'notify::offscreen-redirect': (pspec: GObject.ParamSpec) => void;
            'notify::opacity': (pspec: GObject.ParamSpec) => void;
            'notify::pivot-point': (pspec: GObject.ParamSpec) => void;
            'notify::pivot-point-z': (pspec: GObject.ParamSpec) => void;
            'notify::position': (pspec: GObject.ParamSpec) => void;
            'notify::reactive': (pspec: GObject.ParamSpec) => void;
            'notify::realized': (pspec: GObject.ParamSpec) => void;
            'notify::request-mode': (pspec: GObject.ParamSpec) => void;
            'notify::rotation-angle-x': (pspec: GObject.ParamSpec) => void;
            'notify::rotation-angle-y': (pspec: GObject.ParamSpec) => void;
            'notify::rotation-angle-z': (pspec: GObject.ParamSpec) => void;
            'notify::scale-x': (pspec: GObject.ParamSpec) => void;
            'notify::scale-y': (pspec: GObject.ParamSpec) => void;
            'notify::scale-z': (pspec: GObject.ParamSpec) => void;
            'notify::show-on-set-parent': (pspec: GObject.ParamSpec) => void;
            'notify::size': (pspec: GObject.ParamSpec) => void;
            'notify::text-direction': (pspec: GObject.ParamSpec) => void;
            'notify::transform': (pspec: GObject.ParamSpec) => void;
            'notify::transform-set': (pspec: GObject.ParamSpec) => void;
            'notify::translation-x': (pspec: GObject.ParamSpec) => void;
            'notify::translation-y': (pspec: GObject.ParamSpec) => void;
            'notify::translation-z': (pspec: GObject.ParamSpec) => void;
            'notify::visible': (pspec: GObject.ParamSpec) => void;
            'notify::width': (pspec: GObject.ParamSpec) => void;
            'notify::x': (pspec: GObject.ParamSpec) => void;
            'notify::x-align': (pspec: GObject.ParamSpec) => void;
            'notify::x-expand': (pspec: GObject.ParamSpec) => void;
            'notify::y': (pspec: GObject.ParamSpec) => void;
            'notify::y-align': (pspec: GObject.ParamSpec) => void;
            'notify::y-expand': (pspec: GObject.ParamSpec) => void;
            'notify::z-position': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps
            extends
                Widget.ConstructorProps,
                Atk.ImplementorIface.ConstructorProps,
                Clutter.Animatable.ConstructorProps {
            adjustment: Adjustment;
            vertical: boolean;
        }
    }

    /**
     * A user interface element to control scrollable areas.
     *
     * The {@link St.ScrollBar} allows users to scroll scrollable actors, either by
     * the step or page amount, or by manually dragging the handle.
     * @gir-type Class
     */
    class ScrollBar extends Widget implements Atk.ImplementorIface, Clutter.Animatable {
        static $gtype: GObject.GType<ScrollBar>;

        // Properties

        /**
         * The {@link St.Adjustment} controlling the {@link St.ScrollBar}.
         */
        get adjustment(): Adjustment;
        set adjustment(val: Adjustment);
        /**
         * Whether the {@link St.ScrollBar} is vertical. If `false` it is horizontal.
         */
        get vertical(): boolean;
        set vertical(val: boolean);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: ScrollBar.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<ScrollBar.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](adjustment: Adjustment): ScrollBar;
        // Conflicted with Clutter.Actor.new

        static ['new'](...args: never[]): any;

        // Signals

        /** @signal */
        connect<K extends keyof ScrollBar.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, ScrollBar.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof ScrollBar.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, ScrollBar.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof ScrollBar.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<ScrollBar.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Virtual methods

        /**
         * @virtual
         */
        vfunc_scroll_start(): void;
        /**
         * @virtual
         */
        vfunc_scroll_stop(): void;

        // Methods

        /**
         * Gets the {@link St.Adjustment} that controls the current position of `bar`.
         * @returns an {@link St.Adjustment}
         */
        get_adjustment(): Adjustment;
        /**
         * @param adjustment
         */
        set_adjustment(adjustment: Adjustment): void;
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
         * Will result in the "sensitive" property of the widget {@link GObject.Object} instance to be
         * updated with the same value of the "active" property of the action {@link GObject.Object}
         * instance.
         *
         * If `flags` contains {@link GObject.BindingFlags.BIDIRECTIONAL} then the binding will be mutual:
         * if `target_property` on `target` changes then the `source_property` on `source`
         * will be updated as well.
         *
         * The binding will automatically be removed when either the `source` or the
         * `target` instances are finalized. To remove the binding without affecting the
         * `source` and the `target` you can just call `g_object_unref()` on the returned
         * {@link GObject.Binding} instance.
         *
         * Removing the binding by calling `g_object_unref()` on it must only be done if
         * the binding, `source` and `target` are only used from a single thread and it
         * is clear that both `source` and `target` outlive the binding. Especially it
         * is not safe to rely on this if the binding, `source` or `target` can be
         * finalized from different threads. Keep another reference to the binding and
         * use `g_binding_unbind()` instead to be on the safe side.
         *
         * A {@link GObject.Object} can have multiple bindings.
         * @param source_property the property on `source` to bind
         * @param target the target {@link GObject.Object}
         * @param target_property the property on `target` to bind
         * @param flags flags to pass to {@link GObject.Binding}
         * @returns the {@link GObject.Binding} instance representing the     binding between the two {@link GObject.Object} instances. The binding is released     whenever the {@link GObject.Binding} reference count reaches zero.
         */
        bind_property(
            source_property: string,
            target: GObject.Object,
            target_property: string,
            flags: GObject.BindingFlags | null,
        ): GObject.Binding;
        /**
         * Complete version of `g_object_bind_property()`.
         *
         * Creates a binding between `source_property` on `source` and `target_property`
         * on `target`, allowing you to set the transformation functions to be used by
         * the binding.
         *
         * If `flags` contains {@link GObject.BindingFlags.BIDIRECTIONAL} then the binding will be mutual:
         * if `target_property` on `target` changes then the `source_property` on `source`
         * will be updated as well. The `transform_from` function is only used in case
         * of bidirectional bindings, otherwise it will be ignored
         *
         * The binding will automatically be removed when either the `source` or the
         * `target` instances are finalized. This will release the reference that is
         * being held on the {@link GObject.Binding} instance; if you want to hold on to the
         * {@link GObject.Binding} instance, you will need to hold a reference to it.
         *
         * To remove the binding, call `g_binding_unbind()`.
         *
         * A {@link GObject.Object} can have multiple bindings.
         *
         * The same `user_data` parameter will be used for both `transform_to`
         * and `transform_from` transformation functions; the `notify` function will
         * be called once, when the binding is removed. If you need different data
         * for each transformation function, please use
         * `g_object_bind_property_with_closures()` instead.
         * @param source_property the property on `source` to bind
         * @param target the target {@link GObject.Object}
         * @param target_property the property on `target` to bind
         * @param flags flags to pass to {@link GObject.Binding}
         * @param transform_to the transformation function     from the `source` to the `target`, or `null` to use the default
         * @param transform_from the transformation function     from the `target` to the `source`, or `null` to use the default
         * @param notify a function to call when disposing the binding, to free     resources used by the transformation functions, or `null` if not required
         * @returns the {@link GObject.Binding} instance representing the     binding between the two {@link GObject.Object} instances. The binding is released     whenever the {@link GObject.Binding} reference count reaches zero.
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
        /**
         * @param args
         */
        // Conflicted with GObject.Object.bind_property_full
        bind_property_full(...args: never[]): any;
        /**
         * This function is intended for {@link GObject.Object} implementations to re-enforce
         * a [floating][floating-ref] object reference. Doing this is seldom
         * required: all `GInitiallyUnowneds` are created with a floating reference
         * which usually just needs to be sunken by calling `g_object_ref_sink()`.
         */
        force_floating(): void;
        /**
         * Increases the freeze count on `object`. If the freeze count is
         * non-zero, the emission of "notify" signals on `object` is
         * stopped. The signals are queued until the freeze count is decreased
         * to zero. Duplicate notifications are squashed so that at most one
         * {@link GObject.Object.SignalSignatures.notify | GObject.Object::notify} signal is emitted for each property modified while the
         * object is frozen.
         *
         * This is necessary for accessors that modify multiple properties to prevent
         * premature notification while the object is still being modified.
         */
        freeze_notify(): void;
        /**
         * Gets a named field from the objects table of associations (see `g_object_set_data()`).
         * @param key name of the key for that association
         * @returns the data if found,          or `null` if no such data exists.
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
         * `g_object_set_qdata()`.
         * @param quark A {@link GLib.Quark}, naming the user data pointer
         * @returns The user data pointer set, or `null`
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
         * @returns `true` if `object` has a floating reference
         */
        is_floating(): boolean;
        /**
         * Emits a "notify" signal for the property `property_name` on `object`.
         *
         * When possible, eg. when signaling a property change from within the class
         * that registered the property, you should use `g_object_notify_by_pspec()`
         * instead.
         *
         * Note that emission of the notify signal may be blocked with
         * `g_object_freeze_notify()`. In this case, the signal emissions are queued
         * and will be emitted (in reverse order) when `g_object_thaw_notify()` is
         * called.
         * @param property_name the name of a property installed on the class of `object`.
         */
        notify(property_name: string): void;
        /**
         * Emits a "notify" signal for the property specified by `pspec` on `object`.
         *
         * This function omits the property name lookup, hence it is faster than
         * `g_object_notify()`.
         *
         * One way to avoid using `g_object_notify()` from within the
         * class that registered the properties, and using `g_object_notify_by_pspec()`
         * instead, is to store the GParamSpec used with
         * `g_object_class_install_property()` inside a static array, e.g.:
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
         * @param pspec the {@link GObject.ParamSpec} of a property installed on the class of `object`.
         */
        notify_by_pspec(pspec: GObject.ParamSpec): void;
        /**
         * Increases the reference count of `object`.
         *
         * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
         * of `object` will be propagated to the return type (using the GCC `typeof()`
         * extension), so any casting the caller needs to do on the return type must be
         * explicit.
         * @returns the same `object`
         */
        ref(): GObject.Object;
        /**
         * Increase the reference count of `object`, and possibly remove the
         * [floating][floating-ref] reference, if `object` has a floating reference.
         *
         * In other words, if the object is floating, then this call "assumes
         * ownership" of the floating reference, converting it to a normal
         * reference by clearing the floating flag while leaving the reference
         * count unchanged.  If the object is not floating, then this call
         * adds a new normal reference increasing the reference count by one.
         *
         * Since GLib 2.56, the type of `object` will be propagated to the return type
         * under the same conditions as for `g_object_ref()`.
         * @returns `object`
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
         * Internally, the `key` is converted to a {@link GLib.Quark} using `g_quark_from_string()`.
         * This means a copy of `key` is kept permanently (even after `object` has been
         * finalized) — so it is recommended to only use a small, bounded set of values
         * for `key` in your program, to avoid the {@link GLib.Quark} storage growing unbounded.
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
         * @returns the data if found, or `null`          if no such data exists.
         */
        steal_data(key: string): any | null;
        /**
         * This function gets back user data pointers stored via
         * `g_object_set_qdata()` and removes the `data` from object
         * without invoking its `destroy()` function (if any was
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
         * Using `g_object_get_qdata()` in the above example, instead of
         * `g_object_steal_qdata()` would have left the destroy function set,
         * and thus the partial string list would have been freed upon
         * `g_object_set_qdata_full()`.
         * @param quark A {@link GLib.Quark}, naming the user data pointer
         * @returns The user data pointer set, or `null`
         */
        steal_qdata(quark: GLib.Quark): any | null;
        /**
         * Reverts the effect of a previous call to
         * `g_object_freeze_notify()`. The freeze count is decreased on `object`
         * and when it reaches zero, queued "notify" signals are emitted.
         *
         * Duplicate notifications for each property are squashed so that at most one
         * {@link GObject.Object.SignalSignatures.notify | GObject.Object::notify} signal is emitted for each property, in the reverse order
         * in which they have been queued.
         *
         * It is an error to call this function when the freeze count is zero.
         */
        thaw_notify(): void;
        /**
         * Decreases the reference count of `object`. When its reference count
         * drops to 0, the object is finalized (i.e. its memory is freed).
         *
         * If the pointer to the {@link GObject.Object} may be reused in future (for example, if it is
         * an instance variable of another object), it is recommended to clear the
         * pointer to `null` rather than retain a dangling pointer to a potentially
         * invalid {@link GObject.Object} instance. Use `g_clear_object()` for this.
         */
        unref(): void;
        /**
         * This function essentially limits the life time of the `closure` to
         * the life time of the object. That is, when the object is finalized,
         * the `closure` is invalidated by calling `g_closure_invalidate()` on
         * it, in order to prevent invocations of the closure with a finalized
         * (nonexisting) object. Also, `g_object_ref()` and `g_object_unref()` are
         * added as marshal guards to the `closure`, to ensure that an extra
         * reference count is held on `object` during invocation of the
         * `closure`.  Usually, this function will be called on closures that
         * use this `object` as closure data.
         * @param closure {@link GObject.Closure} to watch
         */
        watch_closure(closure: GObject.Closure): void;
        /**
         * the `constructed` function is called by `g_object_new()` as the
         *  final step of the object creation process.  At the point of the call, all
         *  construction properties have been set on the object.  The purpose of this
         *  call is to allow for object initialisation steps that can only be performed
         *  after construction properties have been set.  `constructed` implementors
         *  should chain up to the `constructed` call of their parent class to allow it
         *  to complete its initialisation.
         * @virtual
         */
        vfunc_constructed(): void;
        /**
         * emits property change notification for a bunch
         *  of properties. Overriding `dispatch_properties_changed` should be rarely
         *  needed.
         * @param n_pspecs
         * @param pspecs
         * @virtual
         */
        vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void;
        /**
         * the `dispose` function is supposed to drop all references to other
         *  objects, but keep the instance otherwise intact, so that client method
         *  invocations still work. It may be run multiple times (due to reference
         *  loops). Before returning, `dispose` should chain up to the `dispose` method
         *  of the parent class.
         * @virtual
         */
        vfunc_dispose(): void;
        /**
         * instance finalization function, should finish the finalization of
         *  the instance begun in `dispose` and chain up to the `finalize` method of the
         *  parent class.
         * @virtual
         */
        vfunc_finalize(): void;
        /**
         * the generic getter for all properties of this type. Should be
         *  overridden for every type with properties.
         * @param property_id
         * @param value
         * @param pspec
         * @virtual
         */
        vfunc_get_property(property_id: number, value: GObject.Value | any, pspec: GObject.ParamSpec): void;
        /**
         * Emits a "notify" signal for the property `property_name` on `object`.
         *
         * When possible, eg. when signaling a property change from within the class
         * that registered the property, you should use `g_object_notify_by_pspec()`
         * instead.
         *
         * Note that emission of the notify signal may be blocked with
         * `g_object_freeze_notify()`. In this case, the signal emissions are queued
         * and will be emitted (in reverse order) when `g_object_thaw_notify()` is
         * called.
         * @param pspec
         * @virtual
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
         * @virtual
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

    namespace ScrollView {
        // Signal signatures
        interface SignalSignatures extends Widget.SignalSignatures {
            'notify::child': (pspec: GObject.ParamSpec) => void;
            'notify::enable-mouse-scrolling': (pspec: GObject.ParamSpec) => void;
            'notify::hadjustment': (pspec: GObject.ParamSpec) => void;
            'notify::hscroll': (pspec: GObject.ParamSpec) => void;
            'notify::hscrollbar-policy': (pspec: GObject.ParamSpec) => void;
            'notify::hscrollbar-visible': (pspec: GObject.ParamSpec) => void;
            'notify::overlay-scrollbars': (pspec: GObject.ParamSpec) => void;
            'notify::vadjustment': (pspec: GObject.ParamSpec) => void;
            'notify::vscroll': (pspec: GObject.ParamSpec) => void;
            'notify::vscrollbar-policy': (pspec: GObject.ParamSpec) => void;
            'notify::vscrollbar-visible': (pspec: GObject.ParamSpec) => void;
            'notify::can-focus': (pspec: GObject.ParamSpec) => void;
            'notify::hover': (pspec: GObject.ParamSpec) => void;
            'notify::label-actor': (pspec: GObject.ParamSpec) => void;
            'notify::pseudo-class': (pspec: GObject.ParamSpec) => void;
            'notify::style': (pspec: GObject.ParamSpec) => void;
            'notify::style-class': (pspec: GObject.ParamSpec) => void;
            'notify::track-hover': (pspec: GObject.ParamSpec) => void;
            'notify::accessible-name': (pspec: GObject.ParamSpec) => void;
            'notify::accessible-role': (pspec: GObject.ParamSpec) => void;
            'notify::actions': (pspec: GObject.ParamSpec) => void;
            'notify::allocation': (pspec: GObject.ParamSpec) => void;
            'notify::background-color': (pspec: GObject.ParamSpec) => void;
            'notify::background-color-set': (pspec: GObject.ParamSpec) => void;
            'notify::child-transform': (pspec: GObject.ParamSpec) => void;
            'notify::child-transform-set': (pspec: GObject.ParamSpec) => void;
            'notify::clip-rect': (pspec: GObject.ParamSpec) => void;
            'notify::clip-to-allocation': (pspec: GObject.ParamSpec) => void;
            'notify::color-state': (pspec: GObject.ParamSpec) => void;
            'notify::constraints': (pspec: GObject.ParamSpec) => void;
            'notify::content': (pspec: GObject.ParamSpec) => void;
            'notify::content-box': (pspec: GObject.ParamSpec) => void;
            'notify::content-gravity': (pspec: GObject.ParamSpec) => void;
            'notify::content-repeat': (pspec: GObject.ParamSpec) => void;
            'notify::context': (pspec: GObject.ParamSpec) => void;
            'notify::effect': (pspec: GObject.ParamSpec) => void;
            'notify::first-child': (pspec: GObject.ParamSpec) => void;
            'notify::fixed-position-set': (pspec: GObject.ParamSpec) => void;
            'notify::fixed-x': (pspec: GObject.ParamSpec) => void;
            'notify::fixed-y': (pspec: GObject.ParamSpec) => void;
            'notify::has-clip': (pspec: GObject.ParamSpec) => void;
            'notify::has-pointer': (pspec: GObject.ParamSpec) => void;
            'notify::height': (pspec: GObject.ParamSpec) => void;
            'notify::last-child': (pspec: GObject.ParamSpec) => void;
            'notify::layout-manager': (pspec: GObject.ParamSpec) => void;
            'notify::magnification-filter': (pspec: GObject.ParamSpec) => void;
            'notify::mapped': (pspec: GObject.ParamSpec) => void;
            'notify::margin-bottom': (pspec: GObject.ParamSpec) => void;
            'notify::margin-left': (pspec: GObject.ParamSpec) => void;
            'notify::margin-right': (pspec: GObject.ParamSpec) => void;
            'notify::margin-top': (pspec: GObject.ParamSpec) => void;
            'notify::min-height': (pspec: GObject.ParamSpec) => void;
            'notify::min-height-set': (pspec: GObject.ParamSpec) => void;
            'notify::min-width': (pspec: GObject.ParamSpec) => void;
            'notify::min-width-set': (pspec: GObject.ParamSpec) => void;
            'notify::minification-filter': (pspec: GObject.ParamSpec) => void;
            'notify::name': (pspec: GObject.ParamSpec) => void;
            'notify::natural-height': (pspec: GObject.ParamSpec) => void;
            'notify::natural-height-set': (pspec: GObject.ParamSpec) => void;
            'notify::natural-width': (pspec: GObject.ParamSpec) => void;
            'notify::natural-width-set': (pspec: GObject.ParamSpec) => void;
            'notify::offscreen-redirect': (pspec: GObject.ParamSpec) => void;
            'notify::opacity': (pspec: GObject.ParamSpec) => void;
            'notify::pivot-point': (pspec: GObject.ParamSpec) => void;
            'notify::pivot-point-z': (pspec: GObject.ParamSpec) => void;
            'notify::position': (pspec: GObject.ParamSpec) => void;
            'notify::reactive': (pspec: GObject.ParamSpec) => void;
            'notify::realized': (pspec: GObject.ParamSpec) => void;
            'notify::request-mode': (pspec: GObject.ParamSpec) => void;
            'notify::rotation-angle-x': (pspec: GObject.ParamSpec) => void;
            'notify::rotation-angle-y': (pspec: GObject.ParamSpec) => void;
            'notify::rotation-angle-z': (pspec: GObject.ParamSpec) => void;
            'notify::scale-x': (pspec: GObject.ParamSpec) => void;
            'notify::scale-y': (pspec: GObject.ParamSpec) => void;
            'notify::scale-z': (pspec: GObject.ParamSpec) => void;
            'notify::show-on-set-parent': (pspec: GObject.ParamSpec) => void;
            'notify::size': (pspec: GObject.ParamSpec) => void;
            'notify::text-direction': (pspec: GObject.ParamSpec) => void;
            'notify::transform': (pspec: GObject.ParamSpec) => void;
            'notify::transform-set': (pspec: GObject.ParamSpec) => void;
            'notify::translation-x': (pspec: GObject.ParamSpec) => void;
            'notify::translation-y': (pspec: GObject.ParamSpec) => void;
            'notify::translation-z': (pspec: GObject.ParamSpec) => void;
            'notify::visible': (pspec: GObject.ParamSpec) => void;
            'notify::width': (pspec: GObject.ParamSpec) => void;
            'notify::x': (pspec: GObject.ParamSpec) => void;
            'notify::x-align': (pspec: GObject.ParamSpec) => void;
            'notify::x-expand': (pspec: GObject.ParamSpec) => void;
            'notify::y': (pspec: GObject.ParamSpec) => void;
            'notify::y-align': (pspec: GObject.ParamSpec) => void;
            'notify::y-expand': (pspec: GObject.ParamSpec) => void;
            'notify::z-position': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps<A extends Clutter.Actor = Clutter.Actor>
            extends
                Widget.ConstructorProps,
                Atk.ImplementorIface.ConstructorProps,
                Clutter.Animatable.ConstructorProps {
            child: Scrollable;
            enable_mouse_scrolling: boolean;
            enableMouseScrolling: boolean;
            hadjustment: Adjustment;
            hscroll: ScrollBar;
            hscrollbar_policy: PolicyType;
            hscrollbarPolicy: PolicyType;
            hscrollbar_visible: boolean;
            hscrollbarVisible: boolean;
            overlay_scrollbars: boolean;
            overlayScrollbars: boolean;
            vadjustment: Adjustment;
            vscroll: ScrollBar;
            vscrollbar_policy: PolicyType;
            vscrollbarPolicy: PolicyType;
            vscrollbar_visible: boolean;
            vscrollbarVisible: boolean;
        }
    }

    /**
     * Container for scrollable children
     *
     * {@link St.ScrollView} is a single child container for actors that implement
     * {@link St.Scrollable}. It provides scrollbars around the edge of the child to
     * allow the user to move around the scrollable area.
     * @gir-type Class
     */
    class ScrollView<A extends Clutter.Actor = Clutter.Actor>
        extends Widget
        implements Atk.ImplementorIface, Clutter.Animatable
    {
        static $gtype: GObject.GType<ScrollView>;

        // Properties

        /**
         * The child {@link St.Scrollable} of the {@link St.ScrollView} container.
         */
        get child(): Scrollable;
        set child(val: Scrollable);
        /**
         * Whether to enable automatic mouse wheel scrolling.
         */
        get enable_mouse_scrolling(): boolean;
        set enable_mouse_scrolling(val: boolean);
        /**
         * Whether to enable automatic mouse wheel scrolling.
         */
        get enableMouseScrolling(): boolean;
        set enableMouseScrolling(val: boolean);
        /**
         * The horizontal {@link St.Adjustment} for the {@link St.ScrollView}.
         */
        get hadjustment(): Adjustment;
        /**
         * The horizontal {@link St.ScrollBar} for the {@link St.ScrollView}.
         */
        get hscroll(): ScrollBar;
        /**
         * The {@link St.PolicyType} for when to show the horizontal {@link St.ScrollBar}.
         */
        get hscrollbar_policy(): PolicyType;
        set hscrollbar_policy(val: PolicyType);
        /**
         * The {@link St.PolicyType} for when to show the horizontal {@link St.ScrollBar}.
         */
        get hscrollbarPolicy(): PolicyType;
        set hscrollbarPolicy(val: PolicyType);
        /**
         * Whether the horizontal {@link St.ScrollBar} is visible.
         */
        get hscrollbar_visible(): boolean;
        /**
         * Whether the horizontal {@link St.ScrollBar} is visible.
         */
        get hscrollbarVisible(): boolean;
        /**
         * Whether scrollbars are painted on top of the content.
         */
        get overlay_scrollbars(): boolean;
        set overlay_scrollbars(val: boolean);
        /**
         * Whether scrollbars are painted on top of the content.
         */
        get overlayScrollbars(): boolean;
        set overlayScrollbars(val: boolean);
        /**
         * The vertical {@link St.Adjustment} for the {@link St.ScrollView}.
         */
        get vadjustment(): Adjustment;
        /**
         * The vertical {@link St.ScrollBar} for the {@link St.ScrollView}.
         */
        get vscroll(): ScrollBar;
        /**
         * The {@link St.PolicyType} for when to show the vertical {@link St.ScrollBar}.
         */
        get vscrollbar_policy(): PolicyType;
        set vscrollbar_policy(val: PolicyType);
        /**
         * The {@link St.PolicyType} for when to show the vertical {@link St.ScrollBar}.
         */
        get vscrollbarPolicy(): PolicyType;
        set vscrollbarPolicy(val: PolicyType);
        /**
         * Whether the vertical {@link St.ScrollBar} is visible.
         */
        get vscrollbar_visible(): boolean;
        /**
         * Whether the vertical {@link St.ScrollBar} is visible.
         */
        get vscrollbarVisible(): boolean;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: ScrollView.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<ScrollView.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): ScrollView;

        // Signals

        /** @signal */
        connect<K extends keyof ScrollView.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, ScrollView.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof ScrollView.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, ScrollView.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof ScrollView.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<ScrollView.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * Gets the {@link St.Scrollable} content of `scroll`.
         * @returns a {@link St.Scrollable}, or `null`
         */
        get_child(): Scrollable | null;
        /**
         * Get the step increment of the horizontal plane.
         * @returns the horizontal step increment
         */
        get_column_size(): number;
        /**
         * Gets the horizontal {@link St.Adjustment} of the {@link St.ScrollView}.
         * @returns the horizontal adjustment
         */
        get_hadjustment(): Adjustment;
        /**
         * Gets the horizontal {@link St.ScrollBar} of the {@link St.ScrollView}.
         * @returns the horizontal scrollbar
         */
        get_hscroll_bar(): ScrollBar;
        /**
         * Get whether automatic mouse wheel scrolling is enabled or disabled.
         * @returns `true` if enabled, `false` otherwise
         */
        get_mouse_scrolling(): boolean;
        /**
         * Gets whether scrollbars are painted on top of the content.
         * @returns `true` if enabled, `false` otherwise
         */
        get_overlay_scrollbars(): boolean;
        /**
         * Get the step increment of the vertical plane.
         * @returns the vertical step increment
         */
        get_row_size(): number;
        /**
         * Gets the vertical {@link St.Adjustment} of the {@link St.ScrollView}.
         * @returns the vertical adjustment
         */
        get_vadjustment(): Adjustment;
        /**
         * Gets the vertical scrollbar of the {@link St.ScrollView}.
         * @returns the vertical {@link St.ScrollBar}
         */
        get_vscroll_bar(): ScrollBar;
        /**
         * Sets `child` as the content of `scroll`.
         *
         * If `scroll` already has a child, the previous child is removed.
         * @param child a {@link St.Scrollable}, or `null`
         */
        set_child(child?: Scrollable | null): void;
        /**
         * Set the step increment of the horizontal plane to `column_size`.
         * @param column_size horizontal step increment
         */
        set_column_size(column_size: number): void;
        /**
         * Sets automatic mouse wheel scrolling to enabled or disabled.
         * @param enabled `true` or `false`
         */
        set_mouse_scrolling(enabled: boolean): void;
        /**
         * Sets whether scrollbars are painted on top of the content.
         * @param enabled Whether to enable overlay scrollbars
         */
        set_overlay_scrollbars(enabled: boolean): void;
        /**
         * Set the scroll policy.
         * @param hscroll Whether to enable horizontal scrolling
         * @param vscroll Whether to enable vertical scrolling
         */
        set_policy(hscroll: PolicyType | null, vscroll: PolicyType | null): void;
        /**
         * Set the step increment of the vertical plane to `row_size`.
         * @param row_size vertical step increment
         */
        set_row_size(row_size: number): void;
        /**
         * Sets the fade effects in all four edges of the view. A value of 0
         * disables the effect.
         * @param fade_margins a {@link Clutter.Margin} defining the vertical fade effects, in pixels.
         */
        update_fade_effect(fade_margins: Clutter.Margin): void;
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
         * Will result in the "sensitive" property of the widget {@link GObject.Object} instance to be
         * updated with the same value of the "active" property of the action {@link GObject.Object}
         * instance.
         *
         * If `flags` contains {@link GObject.BindingFlags.BIDIRECTIONAL} then the binding will be mutual:
         * if `target_property` on `target` changes then the `source_property` on `source`
         * will be updated as well.
         *
         * The binding will automatically be removed when either the `source` or the
         * `target` instances are finalized. To remove the binding without affecting the
         * `source` and the `target` you can just call `g_object_unref()` on the returned
         * {@link GObject.Binding} instance.
         *
         * Removing the binding by calling `g_object_unref()` on it must only be done if
         * the binding, `source` and `target` are only used from a single thread and it
         * is clear that both `source` and `target` outlive the binding. Especially it
         * is not safe to rely on this if the binding, `source` or `target` can be
         * finalized from different threads. Keep another reference to the binding and
         * use `g_binding_unbind()` instead to be on the safe side.
         *
         * A {@link GObject.Object} can have multiple bindings.
         * @param source_property the property on `source` to bind
         * @param target the target {@link GObject.Object}
         * @param target_property the property on `target` to bind
         * @param flags flags to pass to {@link GObject.Binding}
         * @returns the {@link GObject.Binding} instance representing the     binding between the two {@link GObject.Object} instances. The binding is released     whenever the {@link GObject.Binding} reference count reaches zero.
         */
        bind_property(
            source_property: string,
            target: GObject.Object,
            target_property: string,
            flags: GObject.BindingFlags | null,
        ): GObject.Binding;
        /**
         * Complete version of `g_object_bind_property()`.
         *
         * Creates a binding between `source_property` on `source` and `target_property`
         * on `target`, allowing you to set the transformation functions to be used by
         * the binding.
         *
         * If `flags` contains {@link GObject.BindingFlags.BIDIRECTIONAL} then the binding will be mutual:
         * if `target_property` on `target` changes then the `source_property` on `source`
         * will be updated as well. The `transform_from` function is only used in case
         * of bidirectional bindings, otherwise it will be ignored
         *
         * The binding will automatically be removed when either the `source` or the
         * `target` instances are finalized. This will release the reference that is
         * being held on the {@link GObject.Binding} instance; if you want to hold on to the
         * {@link GObject.Binding} instance, you will need to hold a reference to it.
         *
         * To remove the binding, call `g_binding_unbind()`.
         *
         * A {@link GObject.Object} can have multiple bindings.
         *
         * The same `user_data` parameter will be used for both `transform_to`
         * and `transform_from` transformation functions; the `notify` function will
         * be called once, when the binding is removed. If you need different data
         * for each transformation function, please use
         * `g_object_bind_property_with_closures()` instead.
         * @param source_property the property on `source` to bind
         * @param target the target {@link GObject.Object}
         * @param target_property the property on `target` to bind
         * @param flags flags to pass to {@link GObject.Binding}
         * @param transform_to the transformation function     from the `source` to the `target`, or `null` to use the default
         * @param transform_from the transformation function     from the `target` to the `source`, or `null` to use the default
         * @param notify a function to call when disposing the binding, to free     resources used by the transformation functions, or `null` if not required
         * @returns the {@link GObject.Binding} instance representing the     binding between the two {@link GObject.Object} instances. The binding is released     whenever the {@link GObject.Binding} reference count reaches zero.
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
        /**
         * @param args
         */
        // Conflicted with GObject.Object.bind_property_full
        bind_property_full(...args: never[]): any;
        /**
         * This function is intended for {@link GObject.Object} implementations to re-enforce
         * a [floating][floating-ref] object reference. Doing this is seldom
         * required: all `GInitiallyUnowneds` are created with a floating reference
         * which usually just needs to be sunken by calling `g_object_ref_sink()`.
         */
        force_floating(): void;
        /**
         * Increases the freeze count on `object`. If the freeze count is
         * non-zero, the emission of "notify" signals on `object` is
         * stopped. The signals are queued until the freeze count is decreased
         * to zero. Duplicate notifications are squashed so that at most one
         * {@link GObject.Object.SignalSignatures.notify | GObject.Object::notify} signal is emitted for each property modified while the
         * object is frozen.
         *
         * This is necessary for accessors that modify multiple properties to prevent
         * premature notification while the object is still being modified.
         */
        freeze_notify(): void;
        /**
         * Gets a named field from the objects table of associations (see `g_object_set_data()`).
         * @param key name of the key for that association
         * @returns the data if found,          or `null` if no such data exists.
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
         * `g_object_set_qdata()`.
         * @param quark A {@link GLib.Quark}, naming the user data pointer
         * @returns The user data pointer set, or `null`
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
         * @returns `true` if `object` has a floating reference
         */
        is_floating(): boolean;
        /**
         * Emits a "notify" signal for the property `property_name` on `object`.
         *
         * When possible, eg. when signaling a property change from within the class
         * that registered the property, you should use `g_object_notify_by_pspec()`
         * instead.
         *
         * Note that emission of the notify signal may be blocked with
         * `g_object_freeze_notify()`. In this case, the signal emissions are queued
         * and will be emitted (in reverse order) when `g_object_thaw_notify()` is
         * called.
         * @param property_name the name of a property installed on the class of `object`.
         */
        notify(property_name: string): void;
        /**
         * Emits a "notify" signal for the property specified by `pspec` on `object`.
         *
         * This function omits the property name lookup, hence it is faster than
         * `g_object_notify()`.
         *
         * One way to avoid using `g_object_notify()` from within the
         * class that registered the properties, and using `g_object_notify_by_pspec()`
         * instead, is to store the GParamSpec used with
         * `g_object_class_install_property()` inside a static array, e.g.:
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
         * @param pspec the {@link GObject.ParamSpec} of a property installed on the class of `object`.
         */
        notify_by_pspec(pspec: GObject.ParamSpec): void;
        /**
         * Increases the reference count of `object`.
         *
         * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
         * of `object` will be propagated to the return type (using the GCC `typeof()`
         * extension), so any casting the caller needs to do on the return type must be
         * explicit.
         * @returns the same `object`
         */
        ref(): GObject.Object;
        /**
         * Increase the reference count of `object`, and possibly remove the
         * [floating][floating-ref] reference, if `object` has a floating reference.
         *
         * In other words, if the object is floating, then this call "assumes
         * ownership" of the floating reference, converting it to a normal
         * reference by clearing the floating flag while leaving the reference
         * count unchanged.  If the object is not floating, then this call
         * adds a new normal reference increasing the reference count by one.
         *
         * Since GLib 2.56, the type of `object` will be propagated to the return type
         * under the same conditions as for `g_object_ref()`.
         * @returns `object`
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
         * Internally, the `key` is converted to a {@link GLib.Quark} using `g_quark_from_string()`.
         * This means a copy of `key` is kept permanently (even after `object` has been
         * finalized) — so it is recommended to only use a small, bounded set of values
         * for `key` in your program, to avoid the {@link GLib.Quark} storage growing unbounded.
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
         * @returns the data if found, or `null`          if no such data exists.
         */
        steal_data(key: string): any | null;
        /**
         * This function gets back user data pointers stored via
         * `g_object_set_qdata()` and removes the `data` from object
         * without invoking its `destroy()` function (if any was
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
         * Using `g_object_get_qdata()` in the above example, instead of
         * `g_object_steal_qdata()` would have left the destroy function set,
         * and thus the partial string list would have been freed upon
         * `g_object_set_qdata_full()`.
         * @param quark A {@link GLib.Quark}, naming the user data pointer
         * @returns The user data pointer set, or `null`
         */
        steal_qdata(quark: GLib.Quark): any | null;
        /**
         * Reverts the effect of a previous call to
         * `g_object_freeze_notify()`. The freeze count is decreased on `object`
         * and when it reaches zero, queued "notify" signals are emitted.
         *
         * Duplicate notifications for each property are squashed so that at most one
         * {@link GObject.Object.SignalSignatures.notify | GObject.Object::notify} signal is emitted for each property, in the reverse order
         * in which they have been queued.
         *
         * It is an error to call this function when the freeze count is zero.
         */
        thaw_notify(): void;
        /**
         * Decreases the reference count of `object`. When its reference count
         * drops to 0, the object is finalized (i.e. its memory is freed).
         *
         * If the pointer to the {@link GObject.Object} may be reused in future (for example, if it is
         * an instance variable of another object), it is recommended to clear the
         * pointer to `null` rather than retain a dangling pointer to a potentially
         * invalid {@link GObject.Object} instance. Use `g_clear_object()` for this.
         */
        unref(): void;
        /**
         * This function essentially limits the life time of the `closure` to
         * the life time of the object. That is, when the object is finalized,
         * the `closure` is invalidated by calling `g_closure_invalidate()` on
         * it, in order to prevent invocations of the closure with a finalized
         * (nonexisting) object. Also, `g_object_ref()` and `g_object_unref()` are
         * added as marshal guards to the `closure`, to ensure that an extra
         * reference count is held on `object` during invocation of the
         * `closure`.  Usually, this function will be called on closures that
         * use this `object` as closure data.
         * @param closure {@link GObject.Closure} to watch
         */
        watch_closure(closure: GObject.Closure): void;
        /**
         * the `constructed` function is called by `g_object_new()` as the
         *  final step of the object creation process.  At the point of the call, all
         *  construction properties have been set on the object.  The purpose of this
         *  call is to allow for object initialisation steps that can only be performed
         *  after construction properties have been set.  `constructed` implementors
         *  should chain up to the `constructed` call of their parent class to allow it
         *  to complete its initialisation.
         * @virtual
         */
        vfunc_constructed(): void;
        /**
         * emits property change notification for a bunch
         *  of properties. Overriding `dispatch_properties_changed` should be rarely
         *  needed.
         * @param n_pspecs
         * @param pspecs
         * @virtual
         */
        vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void;
        /**
         * the `dispose` function is supposed to drop all references to other
         *  objects, but keep the instance otherwise intact, so that client method
         *  invocations still work. It may be run multiple times (due to reference
         *  loops). Before returning, `dispose` should chain up to the `dispose` method
         *  of the parent class.
         * @virtual
         */
        vfunc_dispose(): void;
        /**
         * instance finalization function, should finish the finalization of
         *  the instance begun in `dispose` and chain up to the `finalize` method of the
         *  parent class.
         * @virtual
         */
        vfunc_finalize(): void;
        /**
         * the generic getter for all properties of this type. Should be
         *  overridden for every type with properties.
         * @param property_id
         * @param value
         * @param pspec
         * @virtual
         */
        vfunc_get_property(property_id: number, value: GObject.Value | any, pspec: GObject.ParamSpec): void;
        /**
         * Emits a "notify" signal for the property `property_name` on `object`.
         *
         * When possible, eg. when signaling a property change from within the class
         * that registered the property, you should use `g_object_notify_by_pspec()`
         * instead.
         *
         * Note that emission of the notify signal may be blocked with
         * `g_object_freeze_notify()`. In this case, the signal emissions are queued
         * and will be emitted (in reverse order) when `g_object_thaw_notify()` is
         * called.
         * @param pspec
         * @virtual
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
         * @virtual
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

    namespace ScrollViewFade {
        // Signal signatures
        interface SignalSignatures extends Clutter.ShaderEffect.SignalSignatures {
            'notify::extend-fade-area': (pspec: GObject.ParamSpec) => void;
            'notify::fade-edges': (pspec: GObject.ParamSpec) => void;
            'notify::fade-margins': (pspec: GObject.ParamSpec) => void;
            'notify::shader-type': (pspec: GObject.ParamSpec) => void;
            'notify::actor': (pspec: GObject.ParamSpec) => void;
            'notify::enabled': (pspec: GObject.ParamSpec) => void;
            'notify::name': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends Clutter.ShaderEffect.ConstructorProps {
            extend_fade_area: boolean;
            extendFadeArea: boolean;
            fade_edges: boolean;
            fadeEdges: boolean;
            fade_margins: Clutter.Margin;
            fadeMargins: Clutter.Margin;
        }
    }

    /**
     * @gir-type Class
     */
    class ScrollViewFade extends Clutter.ShaderEffect {
        static $gtype: GObject.GType<ScrollViewFade>;

        // Properties

        /**
         * Whether faded edges should extend beyond the faded area of the {@link St.ScrollViewFade}.
         */
        get extend_fade_area(): boolean;
        set extend_fade_area(val: boolean);
        /**
         * Whether faded edges should extend beyond the faded area of the {@link St.ScrollViewFade}.
         */
        get extendFadeArea(): boolean;
        set extendFadeArea(val: boolean);
        /**
         * Whether the faded area should extend to the edges of the {@link St.ScrollViewFade}.
         */
        get fade_edges(): boolean;
        set fade_edges(val: boolean);
        /**
         * Whether the faded area should extend to the edges of the {@link St.ScrollViewFade}.
         */
        get fadeEdges(): boolean;
        set fadeEdges(val: boolean);
        /**
         * The margins widths that are faded.
         */
        get fade_margins(): Clutter.Margin;
        set fade_margins(val: Clutter.Margin);
        /**
         * The margins widths that are faded.
         */
        get fadeMargins(): Clutter.Margin;
        set fadeMargins(val: Clutter.Margin);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: ScrollViewFade.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<ScrollViewFade.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): ScrollViewFade;

        // Signals

        /** @signal */
        connect<K extends keyof ScrollViewFade.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, ScrollViewFade.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof ScrollViewFade.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, ScrollViewFade.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof ScrollViewFade.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<ScrollViewFade.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;
    }

    namespace Settings {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            'notify::accent-color': (pspec: GObject.ParamSpec) => void;
            'notify::color-scheme': (pspec: GObject.ParamSpec) => void;
            'notify::disable-show-password': (pspec: GObject.ParamSpec) => void;
            'notify::drag-threshold': (pspec: GObject.ParamSpec) => void;
            'notify::enable-animations': (pspec: GObject.ParamSpec) => void;
            'notify::font-name': (pspec: GObject.ParamSpec) => void;
            'notify::gtk-icon-theme': (pspec: GObject.ParamSpec) => void;
            'notify::high-contrast': (pspec: GObject.ParamSpec) => void;
            'notify::magnifier-active': (pspec: GObject.ParamSpec) => void;
            'notify::primary-paste': (pspec: GObject.ParamSpec) => void;
            'notify::slow-down-factor': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            accent_color: SystemAccentColor;
            accentColor: SystemAccentColor;
            color_scheme: SystemColorScheme;
            colorScheme: SystemColorScheme;
            disable_show_password: boolean;
            disableShowPassword: boolean;
            drag_threshold: number;
            dragThreshold: number;
            enable_animations: boolean;
            enableAnimations: boolean;
            font_name: string;
            fontName: string;
            gtk_icon_theme: string;
            gtkIconTheme: string;
            high_contrast: boolean;
            highContrast: boolean;
            magnifier_active: boolean;
            magnifierActive: boolean;
            primary_paste: boolean;
            primaryPaste: boolean;
            slow_down_factor: number;
            slowDownFactor: number;
        }
    }

    /**
     * @gir-type Class
     */
    class Settings extends GObject.Object {
        static $gtype: GObject.GType<Settings>;

        // Properties

        /**
         * The current accent color.
         */
        get accent_color(): SystemAccentColor;
        /**
         * The current accent color.
         */
        get accentColor(): SystemAccentColor;
        /**
         * The preferred color-scheme
         */
        get color_scheme(): SystemColorScheme;
        /**
         * The preferred color-scheme
         */
        get colorScheme(): SystemColorScheme;
        /**
         * Whether password showing can be locked down
         */
        get disable_show_password(): boolean;
        /**
         * Whether password showing can be locked down
         */
        get disableShowPassword(): boolean;
        /**
         * The threshold before a drag operation begins.
         */
        get drag_threshold(): number;
        /**
         * The threshold before a drag operation begins.
         */
        get dragThreshold(): number;
        /**
         * Whether animations are enabled.
         */
        get enable_animations(): boolean;
        /**
         * Whether animations are enabled.
         */
        get enableAnimations(): boolean;
        /**
         * The current font name.
         */
        get font_name(): string;
        /**
         * The current font name.
         */
        get fontName(): string;
        /**
         * The current GTK icon theme
         */
        get gtk_icon_theme(): string;
        /**
         * The current GTK icon theme
         */
        get gtkIconTheme(): string;
        /**
         * Whether the accessibility high contrast mode is enabled.
         */
        get high_contrast(): boolean;
        /**
         * Whether the accessibility high contrast mode is enabled.
         */
        get highContrast(): boolean;
        /**
         * Whether the accessibility magnifier is active.
         */
        get magnifier_active(): boolean;
        /**
         * Whether the accessibility magnifier is active.
         */
        get magnifierActive(): boolean;
        /**
         * Whether pasting from the `PRIMARY` selection is supported (eg. middle-click
         * paste).
         */
        get primary_paste(): boolean;
        /**
         * Whether pasting from the `PRIMARY` selection is supported (eg. middle-click
         * paste).
         */
        get primaryPaste(): boolean;
        /**
         * The slow-down factor applied to all animation durations.
         */
        get slow_down_factor(): number;
        set slow_down_factor(val: number);
        /**
         * The slow-down factor applied to all animation durations.
         */
        get slowDownFactor(): number;
        set slowDownFactor(val: number);

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

        /** @signal */
        connect<K extends keyof Settings.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Settings.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof Settings.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Settings.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof Settings.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Settings.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Static methods

        /**
         * Gets the global {@link St.Settings} object.
         */
        static get(): Settings;

        // Methods

        inhibit_animations(): void;
        uninhibit_animations(): void;
    }

    namespace TextureCache {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            /**
             * Emitted when the icon theme is changed.
             * @signal
             */
            'icon-theme-changed': () => void;
            /**
             * Emitted when the source file of a texture is changed.
             * @signal
             */
            'texture-file-changed': (arg0: Gio.File) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    /**
     * @gir-type Class
     */
    class TextureCache extends GObject.Object {
        static $gtype: GObject.GType<TextureCache>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: TextureCache.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<TextureCache.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        /** @signal */
        connect<K extends keyof TextureCache.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, TextureCache.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof TextureCache.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, TextureCache.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof TextureCache.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<TextureCache.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Static methods

        static get_default(): TextureCache;

        // Methods

        /**
         * Create a {@link Gio.Icon} from `surface`.
         * @param surface A {@link cairo.Surface}
         * @returns A new {@link Gio.Icon}
         */
        load_cairo_surface_to_gicon(surface: cairo.Surface): Gio.Icon;
        /**
         * Asynchronously load an image.   Initially, the returned texture will have a natural
         * size of zero.  At some later point, either the image will be loaded successfully
         * and at that point size will be negotiated, or upon an error, no image will be set.
         * @param file a {@link Gio.File} of the image file from which to create a pixbuf
         * @param available_width available width for the image, can be -1 if not limited
         * @param available_height available height for the image, can be -1 if not limited
         * @param paint_scale scale factor of the display
         * @param resource_scale Resource scale factor
         * @returns A new {@link Clutter.Actor} with no image loaded initially.
         */
        load_file_async(
            file: Gio.File,
            available_width: number,
            available_height: number,
            paint_scale: number,
            resource_scale: number,
        ): Clutter.Actor;
        /**
         * This function synchronously loads the given file path
         * into a cairo surface.  On error, a warning is emitted
         * and `null` is returned.
         * @param file A {@link Gio.File} in supported image format
         * @param paint_scale Scale factor of the display
         * @param resource_scale Resource scale factor
         * @returns a new {@link cairo.Surface}
         */
        load_file_to_cairo_surface(file: Gio.File, paint_scale: number, resource_scale: number): cairo.Surface;
        /**
         * This method returns a new {@link Clutter.Actor} for a given {@link Gio.Icon}. If the
         * icon isn't loaded already, the texture will be filled
         * asynchronously.
         * @param theme_node The {@link St.ThemeNode} to use for colors, or `null`                            if the icon must not be recolored
         * @param icon the {@link Gio.Icon} to load
         * @param size Size of themed
         * @param paint_scale Scale factor of display
         * @param resource_scale Resource scale factor
         * @returns A new {@link Clutter.Actor} for the icon, or `null` if not found
         */
        load_gicon(
            theme_node: ThemeNode | null,
            icon: Gio.Icon,
            size: number,
            paint_scale: number,
            resource_scale: number,
        ): Clutter.Actor | null;
        /**
         * This function reads a single image file which contains multiple images internally.
         * The image file will be divided using `grid_width` and `grid_height`;
         * note that the dimensions of the image loaded from `path`
         * should be a multiple of the specified grid dimensions.
         * @param file A {@link Gio.File}
         * @param grid_width Width in pixels
         * @param grid_height Height in pixels
         * @param paint_scale Scale factor of the display
         * @param resource_scale
         * @param load_callback Function called when the image is loaded, or `null`
         * @returns A new {@link Clutter.Actor}
         */
        load_sliced_image(
            file: Gio.File,
            grid_width: number,
            grid_height: number,
            paint_scale: number,
            resource_scale: number,
            load_callback?: GLib.Func | null,
        ): Clutter.Actor;
        /**
         * Rescan the current icon theme, if necessary.
         * @returns `true` if the icon theme has changed and needed to be reloaded.
         */
        rescan_icon_theme(): boolean;
    }

    namespace Theme {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            /**
             * @signal
             */
            'custom-stylesheets-changed': () => void;
            'notify::application-stylesheet': (pspec: GObject.ParamSpec) => void;
            'notify::default-stylesheet': (pspec: GObject.ParamSpec) => void;
            'notify::theme-stylesheet': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            application_stylesheet: Gio.File;
            applicationStylesheet: Gio.File;
            default_stylesheet: Gio.File;
            defaultStylesheet: Gio.File;
            theme_stylesheet: Gio.File;
            themeStylesheet: Gio.File;
        }
    }

    /**
     * A set of stylesheets
     *
     * {@link St.Theme} holds a set of stylesheets. (The "cascade" of the name
     * Cascading Stylesheets.) A {@link St.Theme} can be set to apply to all the actors
     * in a stage using `st_theme_context_set_theme()`.
     * @gir-type Class
     */
    class Theme extends GObject.Object {
        static $gtype: GObject.GType<Theme>;

        // Properties

        /**
         * The highest priority stylesheet, representing application-specific
         * styling; this is associated with the CSS "author" stylesheet.
         */
        get application_stylesheet(): Gio.File;
        /**
         * The highest priority stylesheet, representing application-specific
         * styling; this is associated with the CSS "author" stylesheet.
         */
        get applicationStylesheet(): Gio.File;
        /**
         * The lowest priority stylesheet, representing global default
         * styling; this is associated with the CSS "user agent" stylesheet.
         */
        get default_stylesheet(): Gio.File;
        /**
         * The lowest priority stylesheet, representing global default
         * styling; this is associated with the CSS "user agent" stylesheet.
         */
        get defaultStylesheet(): Gio.File;
        /**
         * The second priority stylesheet, representing theme-specific styling;
         * this is associated with the CSS "user" stylesheet.
         */
        get theme_stylesheet(): Gio.File;
        /**
         * The second priority stylesheet, representing theme-specific styling;
         * this is associated with the CSS "user" stylesheet.
         */
        get themeStylesheet(): Gio.File;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Theme.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<Theme.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](
            application_stylesheet: Gio.File,
            theme_stylesheet: Gio.File,
            default_stylesheet: Gio.File,
        ): Theme;

        // Signals

        /** @signal */
        connect<K extends keyof Theme.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Theme.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof Theme.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Theme.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof Theme.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Theme.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * Get a list of the stylesheet files loaded with `st_theme_load_stylesheet()`.
         * @returns the list of stylesheet files          that were loaded with `st_theme_load_stylesheet()`
         */
        get_custom_stylesheets(): Gio.File[];
        /**
         * Load the stylesheet associated with `file`.
         * @param file a {@link Gio.File}
         * @returns `true` if successful
         */
        load_stylesheet(file: Gio.File): boolean;
        /**
         * Unload the stylesheet associated with `file`. If `file` was not loaded this
         * function does nothing.
         * @param file a {@link Gio.File}
         */
        unload_stylesheet(file: Gio.File): void;
    }

    namespace ThemeContext {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            /**
             * Emitted when the icon theme, font, resolution, scale factor or the current
             * theme's custom stylesheets change.
             * @signal
             */
            changed: () => void;
            'notify::scale-factor': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            scale_factor: number;
            scaleFactor: number;
        }
    }

    /**
     * Holds global information about a tree of styled objects
     *
     * {@link St.ThemeContext} is responsible for managing information global to a tree of styled objects,
     * such as the set of stylesheets or the default font. In normal usage, a {@link St.ThemeContext}
     * is bound to a {@link Clutter.Stage}; a singleton {@link St.ThemeContext} can be obtained for a {@link Clutter.Stage}
     * by using `st_theme_context_get_for_stage()`.
     * @gir-type Class
     */
    class ThemeContext extends GObject.Object {
        static $gtype: GObject.GType<ThemeContext>;

        // Properties

        /**
         * The scaling factor used for HiDPI scaling.
         */
        get scale_factor(): number;
        set scale_factor(val: number);
        /**
         * The scaling factor used for HiDPI scaling.
         */
        get scaleFactor(): number;
        set scaleFactor(val: number);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: ThemeContext.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<ThemeContext.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): ThemeContext;

        // Signals

        /** @signal */
        connect<K extends keyof ThemeContext.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, ThemeContext.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof ThemeContext.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, ThemeContext.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof ThemeContext.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<ThemeContext.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Static methods

        /**
         * Gets a singleton theme context associated with the stage.
         * @param stage a {@link Clutter.Stage}
         */
        static get_for_stage(stage: Clutter.Stage): ThemeContext;

        // Methods

        /**
         * Gets the current accent color for the theme context.
         */
        get_accent_color(): [Cogl.Color | null, Cogl.Color | null];
        /**
         * Gets the default font for the theme context. See `st_theme_context_set_font()`.
         * @returns the default font for the theme context.
         */
        get_font(): Pango.FontDescription;
        /**
         * Gets the root node of the tree of theme style nodes that associated with this
         * context. For the node tree associated with a stage, this node represents
         * styles applied to the stage itself.
         * @returns the root node of the context's style tree
         */
        get_root_node(): ThemeNode;
        /**
         * Return the current scale factor of `context`.
         * @returns an integer scale factor
         */
        get_scale_factor(): number;
        /**
         * Gets the default theme for the context. See `st_theme_context_set_theme()`
         * @returns the default theme for the context
         */
        get_theme(): Theme;
        /**
         * Return an existing node matching `node`, or if that isn't possible,
         * `node` itself.
         * @param node a {@link St.ThemeNode}
         * @returns a node with the same properties as `node`
         */
        intern_node(node: ThemeNode): ThemeNode;
        /**
         * Sets the default font for the theme context. This is the font that
         * is inherited by the root node of the tree of theme nodes. If the
         * font is not overridden, then this font will be used. If the font is
         * partially modified (for example, with 'font-size: 110%'), then that
         * modification is based on this font.
         * @param font the default font for theme context
         */
        set_font(font: Pango.FontDescription): void;
        /**
         * Sets the default set of theme stylesheets for the context. This theme will
         * be used for the root node and for nodes descending from it, unless some other
         * style is explicitly specified.
         * @param theme a {@link St.Theme}
         */
        set_theme(theme: Theme): void;
    }

    namespace ThemeNode {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    /**
     * Style information for one node in a tree of themed objects
     *
     * A {@link St.ThemeNode} represents the CSS style information (the set of CSS properties) for one
     * node in a tree of themed objects. In typical usage, it represents the style information
     * for a single {@link Clutter.Actor}. A {@link St.ThemeNode} is immutable: attributes such as the
     * CSS classes for the node are passed in at construction. If the attributes of the node
     * or any parent node change, the node should be discarded and a new node created.
     * {@link St.ThemeNode} has generic accessors to look up properties by name and specific
     * accessors for standard CSS properties that add caching and handling of various
     * details of the CSS specification. {@link St.ThemeNode} also has convenience functions to help
     * in implementing a {@link Clutter.Actor} with borders and padding.
     *
     * Note that pixel measurements take the {@link St.ThemeContext.scale_factor} into
     * account so all values are in physical pixels, as opposed to logical pixels.
     * Physical pixels correspond to actor sizes, not necessarily to pixels on
     * display devices (eg. when `scale-monitor-framebuffer` is enabled).
     * @gir-type Class
     */
    class ThemeNode extends GObject.Object {
        static $gtype: GObject.GType<ThemeNode>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: ThemeNode.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<ThemeNode.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](
            context: ThemeContext,
            parent_node: ThemeNode | null,
            theme: Theme | null,
            element_type: GObject.GType,
            element_id: string | null,
            element_class: string | null,
            pseudo_class: string | null,
            inline_style: string,
        ): ThemeNode;

        // Signals

        /** @signal */
        connect<K extends keyof ThemeNode.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, ThemeNode.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof ThemeNode.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, ThemeNode.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof ThemeNode.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<ThemeNode.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * Adjusts a "for height" passed to `clutter_actor_get_preferred_width()` to
         * account for borders and padding. This is a convenience function meant
         * to be called from a `get_preferred_width()` method of a {@link Clutter.Actor}
         * subclass. The value after adjustment is the height available for the actor's
         * content.
         * @param for_height the "for height" to adjust
         */
        adjust_for_height(for_height: number): number;
        /**
         * Adjusts a "for width" passed to `clutter_actor_get_preferred_height()` to
         * account for borders and padding. This is a convenience function meant
         * to be called from a `get_preferred_height()` method of a {@link Clutter.Actor}
         * subclass. The value after adjustment is the width available for the actor's
         * content.
         * @param for_width the "for width" to adjust
         */
        adjust_for_width(for_width: number): number;
        /**
         * Adjusts the minimum and natural height computed for an actor by
         * adding on the necessary space for borders and padding and taking
         * into account any minimum or maximum height. This is a convenience
         * function meant to be called from the `get_preferred_height()` method
         * of a {@link Clutter.Actor} subclass
         * @param min_height_p the minimum height to adjust
         * @param natural_height_p the natural height to adjust
         */
        adjust_preferred_height(min_height_p: number, natural_height_p: number): [number, number];
        /**
         * Adjusts the minimum and natural width computed for an actor by
         * adding on the necessary space for borders and padding and taking
         * into account any minimum or maximum width. This is a convenience
         * function meant to be called from the `get_preferred_width()` method
         * of a {@link Clutter.Actor} subclass
         * @param min_width_p the minimum width to adjust
         * @param natural_width_p the natural width to adjust
         */
        adjust_preferred_width(min_width_p: number, natural_width_p: number): [number, number];
        /**
         * Compare two `StThemeNodes`. Two nodes which compare equal will match
         * the same CSS rules and have the same style properties. However, two
         * nodes that have ended up with identical style properties do not
         * necessarily compare equal.
         *
         * In detail, `node_a` and `node_b` are considered equal if and only if:
         *
         * - they share the same {@link St.Theme} and {@link St.ThemeContext}
         * - they have the same parent
         * - they have the same element type
         * - their id, class, pseudo-class and inline-style match
         * @param node_b second {@link St.ThemeNode}
         * @returns `true` if `node_a` equals `node_b`
         */
        equal(node_b: ThemeNode): boolean;
        /**
         * Tests if two theme nodes have the same borders and padding; this can be
         * used to optimize having to relayout when the style applied to a Clutter
         * actor changes colors without changing the geometry.
         * @param other a different {@link St.ThemeNode}
         * @returns `true` if equal, `false` otherwise
         */
        geometry_equal(other: ThemeNode): boolean;
        /**
         * Gets `node`'s background color.
         */
        get_background_color(): Cogl.Color;
        /**
         * The `start` and `end` arguments will only be set if `type` is not #ST_GRADIENT_NONE.
         */
        get_background_gradient(): [GradientType, Cogl.Color, Cogl.Color];
        /**
         * @returns `node`'s background image.
         */
        get_background_image(): Gio.File;
        /**
         * Gets the value for the -st-background-image-shadow style property
         * @returns the node's background image shadow, or   `null` if node has no such shadow
         */
        get_background_image_shadow(): Shadow | null;
        /**
         * Gets the box used to paint the actor's background, including the area
         * occupied by properties which paint outside the actor's assigned allocation.
         * @param allocation the box allocated to a {@link Clutter.Actor}
         */
        get_background_paint_box(allocation: Clutter.ActorBox): Clutter.ActorBox;
        /**
         * Gets the color of `node`'s border on `side`
         * @param side a {@link St.Side}
         */
        get_border_color(side: Side | null): Cogl.Color;
        /**
         * Gets the value for the border-image style property
         * @returns the border image, or `null`   if there is no border image.
         */
        get_border_image(): BorderImage;
        /**
         * Get the border radius for `node` at `corner`, in physical pixels.
         * @param corner a {@link St.Corner}
         * @returns the border radius in physical pixels
         */
        get_border_radius(corner: Corner | null): number;
        /**
         * Get the border width for `node` on `side`, in physical pixels.
         * @param side a {@link St.Corner}
         * @returns the border width in physical pixels
         */
        get_border_width(side: Side | null): number;
        /**
         * Gets the value for the box-shadow style property
         * @returns the node's shadow, or `null`   if node has no shadow
         */
        get_box_shadow(): Shadow | null;
        /**
         * Generically looks up a property containing a single color value. When
         * specific getters (like `st_theme_node_get_background_color()`) exist, they
         * should be used instead. They are cached, so more efficient, and have
         * handling for shortcut properties and other details of CSS.
         *
         * If `property_name` is not found, a warning will be logged and a
         * default color returned.
         *
         * See also `st_theme_node_lookup_color()`, which provides more options,
         * and lets you handle the case where the theme does not specify the
         * indicated color.
         * @param property_name The name of the color property
         */
        get_color(property_name: string): Cogl.Color;
        /**
         * Gets the box within an actor's allocation that contents the content
         * of an actor (excluding borders and padding). This is a convenience function
         * meant to be used from the `allocate()` or `paint()` methods of a {@link Clutter.Actor}
         * subclass.
         * @param allocation the box allocated to a `ClutterAlctor`
         */
        get_content_box(allocation: Clutter.ActorBox): Clutter.ActorBox;
        /**
         * Generically looks up a property containing a single numeric value
         *  without units.
         *
         * See also `st_theme_node_lookup_double()`, which provides more options,
         * and lets you handle the case where the theme does not specify the
         * indicated value.
         * @param property_name The name of the numeric property
         * @returns the value found. If `property_name` is not  found, a warning will be logged and 0 will be returned.
         */
        get_double(property_name: string): number;
        /**
         * Get the list of element classes for `node`.
         * @returns the element's classes
         */
        get_element_classes(): string[];
        /**
         * Get the unique element ID for `node`.
         * @returns the element's ID
         */
        get_element_id(): string;
        /**
         * Get the element {@link GObject.GType} for `node`.
         * @returns the element type
         */
        get_element_type(): GObject.GType;
        /**
         * Get the current font of `node` as a {@link Pango.FontDescription}
         * @returns the current font
         */
        get_font(): Pango.FontDescription;
        /**
         * Get the CSS font-features for `node`.
         * @returns font-features as a string
         */
        get_font_features(): string;
        /**
         * Gets `node`'s foreground color.
         */
        get_foreground_color(): Cogl.Color;
        /**
         * Get the height for `node`, in physical pixels.
         * @returns the height in physical pixels
         */
        get_height(): number;
        /**
         * Gets the total horizontal padding (left + right padding), in physical pixels.
         * @returns the total horizontal padding in physical pixels
         */
        get_horizontal_padding(): number;
        /**
         * Gets the colors that should be used for colorizing symbolic icons according
         * the style of this node.
         * @returns the icon colors to use for this theme node
         */
        get_icon_colors(): IconColors;
        /**
         * Get the icon style for `node` (eg. symbolic, regular). This corresponds to the
         * special `-st-icon-style` CSS property.
         * @returns the icon style for `node`
         */
        get_icon_style(): IconStyle;
        /**
         * Generically looks up a property containing a single length value. When
         * specific getters (like `st_theme_node_get_border_width()`) exist, they
         * should be used instead. They are cached, so more efficient, and have
         * handling for shortcut properties and other details of CSS.
         *
         * Unlike `st_theme_node_get_color()` and `st_theme_node_get_double()`,
         * this does not print a warning if the property is not found; it just
         * returns 0.
         *
         * See also `st_theme_node_lookup_length()`, which provides more options. The
         * returned value is in physical pixels, as opposed to logical pixels.
         * @param property_name The name of the length property
         * @returns the length, in pixels, or 0 if the property was not found.
         */
        get_length(property_name: string): number;
        /**
         * Gets the value for the letter-spacing style property, in physical pixels.
         * @returns the value of the letter-spacing property, if   found, or zero if such property has not been found.
         */
        get_letter_spacing(): number;
        /**
         * Get the margin for `node` on `side`, in physical pixels. This corresponds to
         * the CSS properties such as `margin-top`.
         * @param side a {@link St.Side}
         * @returns the margin size in physical pixels
         */
        get_margin(side: Side | null): number;
        /**
         * Get the maximum height for `node`, in physical pixels.
         * @returns the maximum height in physical pixels
         */
        get_max_height(): number;
        /**
         * Get the maximum width for `node`, in physical pixels.
         * @returns the maximum width in physical pixels
         */
        get_max_width(): number;
        /**
         * Get the minimum height for `node`, in physical pixels.
         * @returns the minimum height in physical pixels
         */
        get_min_height(): number;
        /**
         * Get the minimum width for `node`, in physical pixels.
         * @returns the minimum width in physical pixels
         */
        get_min_width(): number;
        /**
         * Gets the color of `node`'s outline.
         */
        get_outline_color(): Cogl.Color;
        /**
         * Get the width of the outline for `node`, in physical pixels.
         * @returns the width in physical pixels
         */
        get_outline_width(): number;
        /**
         * Get the padding for `node` on `side`, in physical pixels. This corresponds to
         * the CSS properties such as `padding-top`.
         * @param side a {@link St.Side}
         * @returns the padding size in physical pixels
         */
        get_padding(side: Side | null): number;
        /**
         * Gets the box used to paint the actor, including the area occupied
         * by properties which paint outside the actor's assigned allocation.
         * When painting `node` to an offscreen buffer, this function can be
         * used to determine the necessary size of the buffer.
         * @param allocation the box allocated to a {@link Clutter.Actor}
         */
        get_paint_box(allocation: Clutter.ActorBox): Clutter.ActorBox;
        /**
         * Gets the parent themed element node.
         * @returns the parent {@link St.ThemeNode}, or `null` if  this is the root node of the tree of theme elements.
         */
        get_parent(): ThemeNode | null;
        /**
         * Get the list of pseudo-classes for `node` (eg. `:focused`).
         * @returns the element's pseudo-classes
         */
        get_pseudo_classes(): string[];
        /**
         * Generically looks up a property containing a set of shadow values. When
         * specific getters (like `st_theme_node_get_box_shadow()`) exist, they
         * should be used instead. They are cached, so more efficient, and have
         * handling for shortcut properties and other details of CSS.
         *
         * Like `st_theme_get_length()`, this does not print a warning if the property is
         * not found; it just returns `null`
         *
         * See also st_theme_node_lookup_shadow (), which provides more options.
         * @param property_name The name of the shadow property
         * @returns the shadow, or `null` if the property was   not found.
         */
        get_shadow(property_name: string): Shadow | null;
        /**
         * Get the text alignment of `node`.
         * @returns the alignment of text for `node`
         */
        get_text_align(): TextAlign;
        /**
         * Get the text decoration for `node` (eg. underline, line-through, etc).
         * @returns the text decoration for `node`
         */
        get_text_decoration(): TextDecoration;
        /**
         * Gets the value for the text-shadow style property
         * @returns the node's text-shadow, or `null`   if node has no text-shadow
         */
        get_text_shadow(): Shadow | null;
        /**
         * Gets the theme stylesheet set that styles this node
         * @returns the theme stylesheet set
         */
        get_theme(): Theme;
        /**
         * Get the value of the transition-duration property, which
         * specifies the transition time between the previous {@link St.ThemeNode}
         * and `node`.
         * @returns the node's transition duration in milliseconds
         */
        get_transition_duration(): number;
        /**
         * Looks up a property containing a single URL value.
         *
         * See also `st_theme_node_lookup_url()`, which provides more options,
         * and lets you handle the case where the theme does not specify the
         * indicated value.
         * @param property_name The name of the string property
         * @returns the newly allocated value if found.  If `property_name` is not found, a warning will be logged and `null`  will be returned.
         */
        get_url(property_name: string): Gio.File | null;
        /**
         * Gets the total vertical padding (top + bottom padding), in physical pixels.
         * @returns the total vertical padding in physical pixels
         */
        get_vertical_padding(): number;
        /**
         * Get the width for `node`, in physical pixels.
         * @returns the width in physical pixels
         */
        get_width(): number;
        /**
         * Converts `node` to a hash value.
         * @returns a hash value corresponding to `node`
         */
        hash(): number;
        invalidate_background_image(): void;
        invalidate_border_image(): void;
        /**
         * Generically looks up a property containing a single color value. When
         * specific getters (like `st_theme_node_get_background_color()`) exist, they
         * should be used instead. They are cached, so more efficient, and have
         * handling for shortcut properties and other details of CSS.
         *
         * See also `st_theme_node_get_color()`, which provides a simpler API.
         * @param property_name The name of the color property
         * @param inherit if `true`, if a value is not found for the property on the   node, then it will be looked up on the parent node, and then on the   parent's parent, and so forth. Note that if the property has a   value of 'inherit' it will be inherited even if `false` is passed   in for `inherit`; this only affects the default behavior for inheritance.
         * @returns `true` if the property was found in the properties for this  theme node (or in the properties of parent nodes when inheriting.)
         */
        lookup_color(property_name: string, inherit: boolean): [boolean, Cogl.Color];
        /**
         * Generically looks up a property containing a single numeric value
         *  without units.
         *
         * See also `st_theme_node_get_double()`, which provides a simpler API.
         * @param property_name The name of the numeric property
         * @param inherit if `true`, if a value is not found for the property on the   node, then it will be looked up on the parent node, and then on the   parent's parent, and so forth. Note that if the property has a   value of 'inherit' it will be inherited even if `false` is passed   in for `inherit`; this only affects the default behavior for inheritance.
         * @returns `true` if the property was found in the properties for this  theme node (or in the properties of parent nodes when inheriting.)
         */
        lookup_double(property_name: string, inherit: boolean): [boolean, number];
        /**
         * Generically looks up a property containing a single length value. When
         * specific getters (like `st_theme_node_get_border_width()`) exist, they
         * should be used instead. They are cached, so more efficient, and have
         * handling for shortcut properties and other details of CSS.
         *
         * See also `st_theme_node_get_length()`, which provides a simpler API.
         * @param property_name The name of the length property
         * @param inherit if `true`, if a value is not found for the property on the   node, then it will be looked up on the parent node, and then on the   parent's parent, and so forth. Note that if the property has a   value of 'inherit' it will be inherited even if `false` is passed   in for `inherit`; this only affects the default behavior for inheritance.
         * @returns `true` if the property was found in the properties for this  theme node (or in the properties of parent nodes when inheriting.)
         */
        lookup_length(property_name: string, inherit: boolean): [boolean, number];
        /**
         * If the property is not found, the value in the shadow variable will not
         * be changed.
         *
         * Generically looks up a property containing a set of shadow values. When
         * specific getters (like st_theme_node_get_box_shadow ()) exist, they
         * should be used instead. They are cached, so more efficient, and have
         * handling for shortcut properties and other details of CSS.
         *
         * See also `st_theme_node_get_shadow()`, which provides a simpler API.
         * @param property_name The name of the shadow property
         * @param inherit if `true`, if a value is not found for the property on the   node, then it will be looked up on the parent node, and then on the   parent's parent, and so forth. Note that if the property has a   value of 'inherit' it will be inherited even if `false` is passed   in for `inherit`; this only affects the default behavior for inheritance.
         * @returns `true` if the property was found in the properties for this   theme node (or in the properties of parent nodes when inheriting.), `false`   if the property was not found, or was explicitly set to 'none'.
         */
        lookup_shadow(property_name: string, inherit: boolean): [boolean, Shadow];
        /**
         * Generically looks up a property containing a single time value,
         *  which is converted to milliseconds.
         * @param property_name The name of the time property
         * @param inherit if `true`, if a value is not found for the property on the   node, then it will be looked up on the parent node, and then on the   parent's parent, and so forth. Note that if the property has a   value of 'inherit' it will be inherited even if `false` is passed   in for `inherit`; this only affects the default behavior for inheritance.
         * @returns `true` if the property was found in the properties for this  theme node (or in the properties of parent nodes when inheriting.)
         */
        lookup_time(property_name: string, inherit: boolean): [boolean, number];
        /**
         * Looks up a property containing a single URL value.
         *
         * See also `st_theme_node_get_url()`, which provides a simpler API.
         * @param property_name The name of the string property
         * @param inherit if `true`, if a value is not found for the property on the   node, then it will be looked up on the parent node, and then on the   parent's parent, and so forth. Note that if the property has a   value of 'inherit' it will be inherited even if `false` is passed   in for `inherit`; this only affects the default behavior for inheritance.
         * @returns `true` if the property was found in the properties for this  theme node (or in the properties of parent nodes when inheriting.)
         */
        lookup_url(property_name: string, inherit: boolean): [boolean, Gio.File];
        /**
         * Check if `st_theme_node_paint()` will paint identically for `node` as it does
         * for `other`. Note that in some cases this function may return `true` even
         * if there is no visible difference in the painting.
         * @param other a different {@link St.ThemeNode}
         * @returns `true` if the two theme nodes paint identically. `false` if the   two nodes potentially paint differently.
         */
        paint_equal(other?: ThemeNode | null): boolean;
        /**
         * Serialize `node` to a string of its {@link GObject.GType} name, CSS ID, classes and
         * pseudo-classes.
         * @returns the serialized theme node
         */
        to_string(): string;
    }

    namespace Viewport {
        // Signal signatures
        interface SignalSignatures extends Widget.SignalSignatures {
            'notify::clip-to-view': (pspec: GObject.ParamSpec) => void;
            'notify::can-focus': (pspec: GObject.ParamSpec) => void;
            'notify::hover': (pspec: GObject.ParamSpec) => void;
            'notify::label-actor': (pspec: GObject.ParamSpec) => void;
            'notify::pseudo-class': (pspec: GObject.ParamSpec) => void;
            'notify::style': (pspec: GObject.ParamSpec) => void;
            'notify::style-class': (pspec: GObject.ParamSpec) => void;
            'notify::track-hover': (pspec: GObject.ParamSpec) => void;
            'notify::accessible-name': (pspec: GObject.ParamSpec) => void;
            'notify::accessible-role': (pspec: GObject.ParamSpec) => void;
            'notify::actions': (pspec: GObject.ParamSpec) => void;
            'notify::allocation': (pspec: GObject.ParamSpec) => void;
            'notify::background-color': (pspec: GObject.ParamSpec) => void;
            'notify::background-color-set': (pspec: GObject.ParamSpec) => void;
            'notify::child-transform': (pspec: GObject.ParamSpec) => void;
            'notify::child-transform-set': (pspec: GObject.ParamSpec) => void;
            'notify::clip-rect': (pspec: GObject.ParamSpec) => void;
            'notify::clip-to-allocation': (pspec: GObject.ParamSpec) => void;
            'notify::color-state': (pspec: GObject.ParamSpec) => void;
            'notify::constraints': (pspec: GObject.ParamSpec) => void;
            'notify::content': (pspec: GObject.ParamSpec) => void;
            'notify::content-box': (pspec: GObject.ParamSpec) => void;
            'notify::content-gravity': (pspec: GObject.ParamSpec) => void;
            'notify::content-repeat': (pspec: GObject.ParamSpec) => void;
            'notify::context': (pspec: GObject.ParamSpec) => void;
            'notify::effect': (pspec: GObject.ParamSpec) => void;
            'notify::first-child': (pspec: GObject.ParamSpec) => void;
            'notify::fixed-position-set': (pspec: GObject.ParamSpec) => void;
            'notify::fixed-x': (pspec: GObject.ParamSpec) => void;
            'notify::fixed-y': (pspec: GObject.ParamSpec) => void;
            'notify::has-clip': (pspec: GObject.ParamSpec) => void;
            'notify::has-pointer': (pspec: GObject.ParamSpec) => void;
            'notify::height': (pspec: GObject.ParamSpec) => void;
            'notify::last-child': (pspec: GObject.ParamSpec) => void;
            'notify::layout-manager': (pspec: GObject.ParamSpec) => void;
            'notify::magnification-filter': (pspec: GObject.ParamSpec) => void;
            'notify::mapped': (pspec: GObject.ParamSpec) => void;
            'notify::margin-bottom': (pspec: GObject.ParamSpec) => void;
            'notify::margin-left': (pspec: GObject.ParamSpec) => void;
            'notify::margin-right': (pspec: GObject.ParamSpec) => void;
            'notify::margin-top': (pspec: GObject.ParamSpec) => void;
            'notify::min-height': (pspec: GObject.ParamSpec) => void;
            'notify::min-height-set': (pspec: GObject.ParamSpec) => void;
            'notify::min-width': (pspec: GObject.ParamSpec) => void;
            'notify::min-width-set': (pspec: GObject.ParamSpec) => void;
            'notify::minification-filter': (pspec: GObject.ParamSpec) => void;
            'notify::name': (pspec: GObject.ParamSpec) => void;
            'notify::natural-height': (pspec: GObject.ParamSpec) => void;
            'notify::natural-height-set': (pspec: GObject.ParamSpec) => void;
            'notify::natural-width': (pspec: GObject.ParamSpec) => void;
            'notify::natural-width-set': (pspec: GObject.ParamSpec) => void;
            'notify::offscreen-redirect': (pspec: GObject.ParamSpec) => void;
            'notify::opacity': (pspec: GObject.ParamSpec) => void;
            'notify::pivot-point': (pspec: GObject.ParamSpec) => void;
            'notify::pivot-point-z': (pspec: GObject.ParamSpec) => void;
            'notify::position': (pspec: GObject.ParamSpec) => void;
            'notify::reactive': (pspec: GObject.ParamSpec) => void;
            'notify::realized': (pspec: GObject.ParamSpec) => void;
            'notify::request-mode': (pspec: GObject.ParamSpec) => void;
            'notify::rotation-angle-x': (pspec: GObject.ParamSpec) => void;
            'notify::rotation-angle-y': (pspec: GObject.ParamSpec) => void;
            'notify::rotation-angle-z': (pspec: GObject.ParamSpec) => void;
            'notify::scale-x': (pspec: GObject.ParamSpec) => void;
            'notify::scale-y': (pspec: GObject.ParamSpec) => void;
            'notify::scale-z': (pspec: GObject.ParamSpec) => void;
            'notify::show-on-set-parent': (pspec: GObject.ParamSpec) => void;
            'notify::size': (pspec: GObject.ParamSpec) => void;
            'notify::text-direction': (pspec: GObject.ParamSpec) => void;
            'notify::transform': (pspec: GObject.ParamSpec) => void;
            'notify::transform-set': (pspec: GObject.ParamSpec) => void;
            'notify::translation-x': (pspec: GObject.ParamSpec) => void;
            'notify::translation-y': (pspec: GObject.ParamSpec) => void;
            'notify::translation-z': (pspec: GObject.ParamSpec) => void;
            'notify::visible': (pspec: GObject.ParamSpec) => void;
            'notify::width': (pspec: GObject.ParamSpec) => void;
            'notify::x': (pspec: GObject.ParamSpec) => void;
            'notify::x-align': (pspec: GObject.ParamSpec) => void;
            'notify::x-expand': (pspec: GObject.ParamSpec) => void;
            'notify::y': (pspec: GObject.ParamSpec) => void;
            'notify::y-align': (pspec: GObject.ParamSpec) => void;
            'notify::y-expand': (pspec: GObject.ParamSpec) => void;
            'notify::z-position': (pspec: GObject.ParamSpec) => void;
            'notify::hadjustment': (pspec: GObject.ParamSpec) => void;
            'notify::vadjustment': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps<
            A extends Clutter.LayoutManager = Clutter.LayoutManager,
            B extends Clutter.Content = Clutter.Content,
        >
            extends
                Widget.ConstructorProps<A, B>,
                Atk.ImplementorIface.ConstructorProps,
                Clutter.Animatable.ConstructorProps,
                Scrollable.ConstructorProps {
            clip_to_view: boolean;
            clipToView: boolean;
        }
    }

    /**
     * Scrollable container
     *
     * The {@link St.Viewport} is a generic {@link St.Scrollable} implementation.
     * @gir-type Class
     */
    class Viewport<A extends Clutter.LayoutManager = Clutter.LayoutManager, B extends Clutter.Content = Clutter.Content>
        extends Widget<A, B>
        implements Atk.ImplementorIface, Clutter.Animatable, Scrollable
    {
        static $gtype: GObject.GType<Viewport>;

        // Properties

        get clip_to_view(): boolean;
        set clip_to_view(val: boolean);
        get clipToView(): boolean;
        set clipToView(val: boolean);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Viewport.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<Viewport.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        /** @signal */
        connect<K extends keyof Viewport.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Viewport.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof Viewport.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Viewport.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof Viewport.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Viewport.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;
        /**
         * The horizontal {@link St.Adjustment} used by the {@link St.Scrollable}.
         *
         * Implementations should override this property to provide read-write
         * access to the {@link St.Adjustment}.
         *
         * JavaScript code may override this as demonstrated below:
         *
         * ```js
         * export const MyScrollable = GObject.registerClass({
         *     Properties: {
         *         'hadjustment': GObject.ParamSpec.override(
         *             'hadjustment',
         *             St.Scrollable
         *         )
         *     }
         * }, class MyScrollable extends St.Scrollable {
         *
         *     get `hadjustment()` {
         *         return this._hadjustment || null;
         *     }
         *
         *     set hadjustment(adjustment) {
         *         if (this.hadjustment === adjustment)
         *             return;
         *
         *         this._hadjustment = adjustment;
         *         this.notify('hadjustment');
         *     }
         * });
         * ```
         * @category Inherited from St.Scrollable
         */
        get hadjustment(): Adjustment;
        set hadjustment(val: Adjustment);
        /**
         * The vertical {@link St.Adjustment} used by the {@link St.Scrollable}.
         *
         * Implementations should override this property to provide read-write
         * access to the {@link St.Adjustment}.
         *
         * See {@link St.Scrollable.hadjustment} for an example of how to override this
         * property in JavaScript code.
         * @category Inherited from St.Scrollable
         */
        get vadjustment(): Adjustment;
        set vadjustment(val: Adjustment);
        /**
         * @param hadjustment
         * @param vadjustment
         */
        get_adjustments(hadjustment: Adjustment, vadjustment: Adjustment): void;
        /**
         * This method should be implemented by classes implementing the {@link St.Scrollable}
         * interface.
         *
         * JavaScript code should do this by overriding the `vfunc_set_adjustments()`
         * method.
         * @param hadjustment the horizontal {@link St.Adjustment}
         * @param vadjustment the vertical {@link St.Adjustment}
         */
        set_adjustments(hadjustment: Adjustment, vadjustment: Adjustment): void;
        /**
         * @param hadjustment
         * @param vadjustment
         * @virtual
         */
        vfunc_get_adjustments(hadjustment: Adjustment, vadjustment: Adjustment): void;
        /**
         * This method should be implemented by classes implementing the {@link St.Scrollable}
         * interface.
         *
         * JavaScript code should do this by overriding the `vfunc_set_adjustments()`
         * method.
         * @param hadjustment the horizontal {@link St.Adjustment}
         * @param vadjustment the vertical {@link St.Adjustment}
         * @virtual
         */
        vfunc_set_adjustments(hadjustment: Adjustment, vadjustment: Adjustment): void;
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
         * Will result in the "sensitive" property of the widget {@link GObject.Object} instance to be
         * updated with the same value of the "active" property of the action {@link GObject.Object}
         * instance.
         *
         * If `flags` contains {@link GObject.BindingFlags.BIDIRECTIONAL} then the binding will be mutual:
         * if `target_property` on `target` changes then the `source_property` on `source`
         * will be updated as well.
         *
         * The binding will automatically be removed when either the `source` or the
         * `target` instances are finalized. To remove the binding without affecting the
         * `source` and the `target` you can just call `g_object_unref()` on the returned
         * {@link GObject.Binding} instance.
         *
         * Removing the binding by calling `g_object_unref()` on it must only be done if
         * the binding, `source` and `target` are only used from a single thread and it
         * is clear that both `source` and `target` outlive the binding. Especially it
         * is not safe to rely on this if the binding, `source` or `target` can be
         * finalized from different threads. Keep another reference to the binding and
         * use `g_binding_unbind()` instead to be on the safe side.
         *
         * A {@link GObject.Object} can have multiple bindings.
         * @param source_property the property on `source` to bind
         * @param target the target {@link GObject.Object}
         * @param target_property the property on `target` to bind
         * @param flags flags to pass to {@link GObject.Binding}
         * @returns the {@link GObject.Binding} instance representing the     binding between the two {@link GObject.Object} instances. The binding is released     whenever the {@link GObject.Binding} reference count reaches zero.
         */
        bind_property(
            source_property: string,
            target: GObject.Object,
            target_property: string,
            flags: GObject.BindingFlags | null,
        ): GObject.Binding;
        /**
         * Complete version of `g_object_bind_property()`.
         *
         * Creates a binding between `source_property` on `source` and `target_property`
         * on `target`, allowing you to set the transformation functions to be used by
         * the binding.
         *
         * If `flags` contains {@link GObject.BindingFlags.BIDIRECTIONAL} then the binding will be mutual:
         * if `target_property` on `target` changes then the `source_property` on `source`
         * will be updated as well. The `transform_from` function is only used in case
         * of bidirectional bindings, otherwise it will be ignored
         *
         * The binding will automatically be removed when either the `source` or the
         * `target` instances are finalized. This will release the reference that is
         * being held on the {@link GObject.Binding} instance; if you want to hold on to the
         * {@link GObject.Binding} instance, you will need to hold a reference to it.
         *
         * To remove the binding, call `g_binding_unbind()`.
         *
         * A {@link GObject.Object} can have multiple bindings.
         *
         * The same `user_data` parameter will be used for both `transform_to`
         * and `transform_from` transformation functions; the `notify` function will
         * be called once, when the binding is removed. If you need different data
         * for each transformation function, please use
         * `g_object_bind_property_with_closures()` instead.
         * @param source_property the property on `source` to bind
         * @param target the target {@link GObject.Object}
         * @param target_property the property on `target` to bind
         * @param flags flags to pass to {@link GObject.Binding}
         * @param transform_to the transformation function     from the `source` to the `target`, or `null` to use the default
         * @param transform_from the transformation function     from the `target` to the `source`, or `null` to use the default
         * @param notify a function to call when disposing the binding, to free     resources used by the transformation functions, or `null` if not required
         * @returns the {@link GObject.Binding} instance representing the     binding between the two {@link GObject.Object} instances. The binding is released     whenever the {@link GObject.Binding} reference count reaches zero.
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
        /**
         * @param args
         */
        // Conflicted with GObject.Object.bind_property_full
        bind_property_full(...args: never[]): any;
        /**
         * This function is intended for {@link GObject.Object} implementations to re-enforce
         * a [floating][floating-ref] object reference. Doing this is seldom
         * required: all `GInitiallyUnowneds` are created with a floating reference
         * which usually just needs to be sunken by calling `g_object_ref_sink()`.
         */
        force_floating(): void;
        /**
         * Increases the freeze count on `object`. If the freeze count is
         * non-zero, the emission of "notify" signals on `object` is
         * stopped. The signals are queued until the freeze count is decreased
         * to zero. Duplicate notifications are squashed so that at most one
         * {@link GObject.Object.SignalSignatures.notify | GObject.Object::notify} signal is emitted for each property modified while the
         * object is frozen.
         *
         * This is necessary for accessors that modify multiple properties to prevent
         * premature notification while the object is still being modified.
         */
        freeze_notify(): void;
        /**
         * Gets a named field from the objects table of associations (see `g_object_set_data()`).
         * @param key name of the key for that association
         * @returns the data if found,          or `null` if no such data exists.
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
         * `g_object_set_qdata()`.
         * @param quark A {@link GLib.Quark}, naming the user data pointer
         * @returns The user data pointer set, or `null`
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
         * @returns `true` if `object` has a floating reference
         */
        is_floating(): boolean;
        /**
         * Emits a "notify" signal for the property `property_name` on `object`.
         *
         * When possible, eg. when signaling a property change from within the class
         * that registered the property, you should use `g_object_notify_by_pspec()`
         * instead.
         *
         * Note that emission of the notify signal may be blocked with
         * `g_object_freeze_notify()`. In this case, the signal emissions are queued
         * and will be emitted (in reverse order) when `g_object_thaw_notify()` is
         * called.
         * @param property_name the name of a property installed on the class of `object`.
         */
        notify(property_name: string): void;
        /**
         * Emits a "notify" signal for the property specified by `pspec` on `object`.
         *
         * This function omits the property name lookup, hence it is faster than
         * `g_object_notify()`.
         *
         * One way to avoid using `g_object_notify()` from within the
         * class that registered the properties, and using `g_object_notify_by_pspec()`
         * instead, is to store the GParamSpec used with
         * `g_object_class_install_property()` inside a static array, e.g.:
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
         * @param pspec the {@link GObject.ParamSpec} of a property installed on the class of `object`.
         */
        notify_by_pspec(pspec: GObject.ParamSpec): void;
        /**
         * Increases the reference count of `object`.
         *
         * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
         * of `object` will be propagated to the return type (using the GCC `typeof()`
         * extension), so any casting the caller needs to do on the return type must be
         * explicit.
         * @returns the same `object`
         */
        ref(): GObject.Object;
        /**
         * Increase the reference count of `object`, and possibly remove the
         * [floating][floating-ref] reference, if `object` has a floating reference.
         *
         * In other words, if the object is floating, then this call "assumes
         * ownership" of the floating reference, converting it to a normal
         * reference by clearing the floating flag while leaving the reference
         * count unchanged.  If the object is not floating, then this call
         * adds a new normal reference increasing the reference count by one.
         *
         * Since GLib 2.56, the type of `object` will be propagated to the return type
         * under the same conditions as for `g_object_ref()`.
         * @returns `object`
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
         * Internally, the `key` is converted to a {@link GLib.Quark} using `g_quark_from_string()`.
         * This means a copy of `key` is kept permanently (even after `object` has been
         * finalized) — so it is recommended to only use a small, bounded set of values
         * for `key` in your program, to avoid the {@link GLib.Quark} storage growing unbounded.
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
         * @returns the data if found, or `null`          if no such data exists.
         */
        steal_data(key: string): any | null;
        /**
         * This function gets back user data pointers stored via
         * `g_object_set_qdata()` and removes the `data` from object
         * without invoking its `destroy()` function (if any was
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
         * Using `g_object_get_qdata()` in the above example, instead of
         * `g_object_steal_qdata()` would have left the destroy function set,
         * and thus the partial string list would have been freed upon
         * `g_object_set_qdata_full()`.
         * @param quark A {@link GLib.Quark}, naming the user data pointer
         * @returns The user data pointer set, or `null`
         */
        steal_qdata(quark: GLib.Quark): any | null;
        /**
         * Reverts the effect of a previous call to
         * `g_object_freeze_notify()`. The freeze count is decreased on `object`
         * and when it reaches zero, queued "notify" signals are emitted.
         *
         * Duplicate notifications for each property are squashed so that at most one
         * {@link GObject.Object.SignalSignatures.notify | GObject.Object::notify} signal is emitted for each property, in the reverse order
         * in which they have been queued.
         *
         * It is an error to call this function when the freeze count is zero.
         */
        thaw_notify(): void;
        /**
         * Decreases the reference count of `object`. When its reference count
         * drops to 0, the object is finalized (i.e. its memory is freed).
         *
         * If the pointer to the {@link GObject.Object} may be reused in future (for example, if it is
         * an instance variable of another object), it is recommended to clear the
         * pointer to `null` rather than retain a dangling pointer to a potentially
         * invalid {@link GObject.Object} instance. Use `g_clear_object()` for this.
         */
        unref(): void;
        /**
         * This function essentially limits the life time of the `closure` to
         * the life time of the object. That is, when the object is finalized,
         * the `closure` is invalidated by calling `g_closure_invalidate()` on
         * it, in order to prevent invocations of the closure with a finalized
         * (nonexisting) object. Also, `g_object_ref()` and `g_object_unref()` are
         * added as marshal guards to the `closure`, to ensure that an extra
         * reference count is held on `object` during invocation of the
         * `closure`.  Usually, this function will be called on closures that
         * use this `object` as closure data.
         * @param closure {@link GObject.Closure} to watch
         */
        watch_closure(closure: GObject.Closure): void;
        /**
         * the `constructed` function is called by `g_object_new()` as the
         *  final step of the object creation process.  At the point of the call, all
         *  construction properties have been set on the object.  The purpose of this
         *  call is to allow for object initialisation steps that can only be performed
         *  after construction properties have been set.  `constructed` implementors
         *  should chain up to the `constructed` call of their parent class to allow it
         *  to complete its initialisation.
         * @virtual
         */
        vfunc_constructed(): void;
        /**
         * emits property change notification for a bunch
         *  of properties. Overriding `dispatch_properties_changed` should be rarely
         *  needed.
         * @param n_pspecs
         * @param pspecs
         * @virtual
         */
        vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void;
        /**
         * the `dispose` function is supposed to drop all references to other
         *  objects, but keep the instance otherwise intact, so that client method
         *  invocations still work. It may be run multiple times (due to reference
         *  loops). Before returning, `dispose` should chain up to the `dispose` method
         *  of the parent class.
         * @virtual
         */
        vfunc_dispose(): void;
        /**
         * instance finalization function, should finish the finalization of
         *  the instance begun in `dispose` and chain up to the `finalize` method of the
         *  parent class.
         * @virtual
         */
        vfunc_finalize(): void;
        /**
         * the generic getter for all properties of this type. Should be
         *  overridden for every type with properties.
         * @param property_id
         * @param value
         * @param pspec
         * @virtual
         */
        vfunc_get_property(property_id: number, value: GObject.Value | any, pspec: GObject.ParamSpec): void;
        /**
         * Emits a "notify" signal for the property `property_name` on `object`.
         *
         * When possible, eg. when signaling a property change from within the class
         * that registered the property, you should use `g_object_notify_by_pspec()`
         * instead.
         *
         * Note that emission of the notify signal may be blocked with
         * `g_object_freeze_notify()`. In this case, the signal emissions are queued
         * and will be emitted (in reverse order) when `g_object_thaw_notify()` is
         * called.
         * @param pspec
         * @virtual
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
         * @virtual
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

    namespace Widget {
        // Signal signatures
        interface SignalSignatures extends Clutter.Actor.SignalSignatures {
            /**
             * Emitted when the user has requested a context menu (eg, via a keybinding)
             * @signal
             */
            'popup-menu': () => void;
            /**
             * Emitted when the style information that the widget derives from the
             * theme changes
             * @signal
             */
            'style-changed': () => void;
            'notify::can-focus': (pspec: GObject.ParamSpec) => void;
            'notify::hover': (pspec: GObject.ParamSpec) => void;
            'notify::label-actor': (pspec: GObject.ParamSpec) => void;
            'notify::pseudo-class': (pspec: GObject.ParamSpec) => void;
            'notify::style': (pspec: GObject.ParamSpec) => void;
            'notify::style-class': (pspec: GObject.ParamSpec) => void;
            'notify::track-hover': (pspec: GObject.ParamSpec) => void;
            'notify::accessible-name': (pspec: GObject.ParamSpec) => void;
            'notify::accessible-role': (pspec: GObject.ParamSpec) => void;
            'notify::actions': (pspec: GObject.ParamSpec) => void;
            'notify::allocation': (pspec: GObject.ParamSpec) => void;
            'notify::background-color': (pspec: GObject.ParamSpec) => void;
            'notify::background-color-set': (pspec: GObject.ParamSpec) => void;
            'notify::child-transform': (pspec: GObject.ParamSpec) => void;
            'notify::child-transform-set': (pspec: GObject.ParamSpec) => void;
            'notify::clip-rect': (pspec: GObject.ParamSpec) => void;
            'notify::clip-to-allocation': (pspec: GObject.ParamSpec) => void;
            'notify::color-state': (pspec: GObject.ParamSpec) => void;
            'notify::constraints': (pspec: GObject.ParamSpec) => void;
            'notify::content': (pspec: GObject.ParamSpec) => void;
            'notify::content-box': (pspec: GObject.ParamSpec) => void;
            'notify::content-gravity': (pspec: GObject.ParamSpec) => void;
            'notify::content-repeat': (pspec: GObject.ParamSpec) => void;
            'notify::context': (pspec: GObject.ParamSpec) => void;
            'notify::effect': (pspec: GObject.ParamSpec) => void;
            'notify::first-child': (pspec: GObject.ParamSpec) => void;
            'notify::fixed-position-set': (pspec: GObject.ParamSpec) => void;
            'notify::fixed-x': (pspec: GObject.ParamSpec) => void;
            'notify::fixed-y': (pspec: GObject.ParamSpec) => void;
            'notify::has-clip': (pspec: GObject.ParamSpec) => void;
            'notify::has-pointer': (pspec: GObject.ParamSpec) => void;
            'notify::height': (pspec: GObject.ParamSpec) => void;
            'notify::last-child': (pspec: GObject.ParamSpec) => void;
            'notify::layout-manager': (pspec: GObject.ParamSpec) => void;
            'notify::magnification-filter': (pspec: GObject.ParamSpec) => void;
            'notify::mapped': (pspec: GObject.ParamSpec) => void;
            'notify::margin-bottom': (pspec: GObject.ParamSpec) => void;
            'notify::margin-left': (pspec: GObject.ParamSpec) => void;
            'notify::margin-right': (pspec: GObject.ParamSpec) => void;
            'notify::margin-top': (pspec: GObject.ParamSpec) => void;
            'notify::min-height': (pspec: GObject.ParamSpec) => void;
            'notify::min-height-set': (pspec: GObject.ParamSpec) => void;
            'notify::min-width': (pspec: GObject.ParamSpec) => void;
            'notify::min-width-set': (pspec: GObject.ParamSpec) => void;
            'notify::minification-filter': (pspec: GObject.ParamSpec) => void;
            'notify::name': (pspec: GObject.ParamSpec) => void;
            'notify::natural-height': (pspec: GObject.ParamSpec) => void;
            'notify::natural-height-set': (pspec: GObject.ParamSpec) => void;
            'notify::natural-width': (pspec: GObject.ParamSpec) => void;
            'notify::natural-width-set': (pspec: GObject.ParamSpec) => void;
            'notify::offscreen-redirect': (pspec: GObject.ParamSpec) => void;
            'notify::opacity': (pspec: GObject.ParamSpec) => void;
            'notify::pivot-point': (pspec: GObject.ParamSpec) => void;
            'notify::pivot-point-z': (pspec: GObject.ParamSpec) => void;
            'notify::position': (pspec: GObject.ParamSpec) => void;
            'notify::reactive': (pspec: GObject.ParamSpec) => void;
            'notify::realized': (pspec: GObject.ParamSpec) => void;
            'notify::request-mode': (pspec: GObject.ParamSpec) => void;
            'notify::rotation-angle-x': (pspec: GObject.ParamSpec) => void;
            'notify::rotation-angle-y': (pspec: GObject.ParamSpec) => void;
            'notify::rotation-angle-z': (pspec: GObject.ParamSpec) => void;
            'notify::scale-x': (pspec: GObject.ParamSpec) => void;
            'notify::scale-y': (pspec: GObject.ParamSpec) => void;
            'notify::scale-z': (pspec: GObject.ParamSpec) => void;
            'notify::show-on-set-parent': (pspec: GObject.ParamSpec) => void;
            'notify::size': (pspec: GObject.ParamSpec) => void;
            'notify::text-direction': (pspec: GObject.ParamSpec) => void;
            'notify::transform': (pspec: GObject.ParamSpec) => void;
            'notify::transform-set': (pspec: GObject.ParamSpec) => void;
            'notify::translation-x': (pspec: GObject.ParamSpec) => void;
            'notify::translation-y': (pspec: GObject.ParamSpec) => void;
            'notify::translation-z': (pspec: GObject.ParamSpec) => void;
            'notify::visible': (pspec: GObject.ParamSpec) => void;
            'notify::width': (pspec: GObject.ParamSpec) => void;
            'notify::x': (pspec: GObject.ParamSpec) => void;
            'notify::x-align': (pspec: GObject.ParamSpec) => void;
            'notify::x-expand': (pspec: GObject.ParamSpec) => void;
            'notify::y': (pspec: GObject.ParamSpec) => void;
            'notify::y-align': (pspec: GObject.ParamSpec) => void;
            'notify::y-expand': (pspec: GObject.ParamSpec) => void;
            'notify::z-position': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps<
            A extends Clutter.LayoutManager = Clutter.LayoutManager,
            B extends Clutter.Content = Clutter.Content,
        >
            extends
                Clutter.Actor.ConstructorProps<A, B>,
                Atk.ImplementorIface.ConstructorProps,
                Clutter.Animatable.ConstructorProps {
            can_focus: boolean;
            canFocus: boolean;
            hover: boolean;
            label_actor: Clutter.Actor;
            labelActor: Clutter.Actor;
            pseudo_class: string;
            pseudoClass: string;
            style: string;
            style_class: string;
            styleClass: string;
            track_hover: boolean;
            trackHover: boolean;
        }
    }

    /**
     * Base class for stylable actors
     *
     * {@link St.Widget} is a simple abstract class on top of {@link Clutter.Actor}. It
     * provides basic theming properties.
     *
     * Actors in the St library should subclass {@link St.Widget} if they plan
     * to obey to a certain `StStyle`.
     * @gir-type Class
     */
    class Widget<A extends Clutter.LayoutManager = Clutter.LayoutManager, B extends Clutter.Content = Clutter.Content>
        extends Clutter.Actor<A, B>
        implements Atk.ImplementorIface, Clutter.Animatable
    {
        static $gtype: GObject.GType<Widget>;

        // Properties

        /**
         * Whether or not the widget can be focused via keyboard navigation.
         */
        get can_focus(): boolean;
        set can_focus(val: boolean);
        /**
         * Whether or not the widget can be focused via keyboard navigation.
         */
        get canFocus(): boolean;
        set canFocus(val: boolean);
        /**
         * Whether or not the pointer is currently hovering over the widget. This is
         * only tracked automatically if {@link St.Widget.track_hover} is `true`, but you can
         * adjust it manually in any case.
         */
        get hover(): boolean;
        set hover(val: boolean);
        /**
         * An actor that labels this widget.
         */
        get label_actor(): Clutter.Actor;
        set label_actor(val: Clutter.Actor);
        /**
         * An actor that labels this widget.
         */
        get labelActor(): Clutter.Actor;
        set labelActor(val: Clutter.Actor);
        /**
         * The pseudo-class of the actor. Typical values include "hover", "active",
         * "focus".
         */
        get pseudo_class(): string;
        set pseudo_class(val: string);
        /**
         * The pseudo-class of the actor. Typical values include "hover", "active",
         * "focus".
         */
        get pseudoClass(): string;
        set pseudoClass(val: string);
        /**
         * Inline style information for the actor as a ';'-separated list of
         * CSS properties.
         */
        get style(): string;
        set style(val: string);
        /**
         * The style-class of the actor for use in styling.
         */
        get style_class(): string;
        set style_class(val: string);
        /**
         * The style-class of the actor for use in styling.
         */
        get styleClass(): string;
        set styleClass(val: string);
        /**
         * Determines whether the widget tracks pointer hover state. If
         * `true` (and the widget is visible and reactive), the
         * {@link St.Widget.hover} property and "hover" style pseudo class will be
         * adjusted automatically as the pointer moves in and out of the
         * widget.
         */
        get track_hover(): boolean;
        set track_hover(val: boolean);
        /**
         * Determines whether the widget tracks pointer hover state. If
         * `true` (and the widget is visible and reactive), the
         * {@link St.Widget.hover} property and "hover" style pseudo class will be
         * adjusted automatically as the pointer moves in and out of the
         * widget.
         */
        get trackHover(): boolean;
        set trackHover(val: boolean);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Widget.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<Widget.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        /** @signal */
        connect<K extends keyof Widget.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Widget.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof Widget.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Widget.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof Widget.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Widget.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Virtual methods

        /**
         * Gets a list of the focusable children of `widget`, in "Tab"
         * order. By default, this returns all visible
         * (as in {@link Clutter.Actor.is_visible}) children of `widget`.
         * @virtual
         */
        vfunc_get_focus_chain(): Clutter.Actor[];
        /**
         * @param from the actor that the focus is coming from
         * @param direction the direction focus is moving in
         * @virtual
         */
        vfunc_navigate_focus(from: Clutter.Actor | null, direction: DirectionType): boolean;
        /**
         * Asks the widget to pop-up a context menu by emitting {@link St.Widget.SignalSignatures.popup_menu | St.Widget::popup-menu}.
         * @virtual
         */
        vfunc_popup_menu(): void;
        /**
         * @virtual
         */
        vfunc_style_changed(): void;

        // Methods

        /**
         * This method adds `state` as one of the accessible states for
         * `widget`. The list of states of a widget describes the current state
         * of user interface element `widget` and is provided so that assistive
         * technologies know how to present `widget` to the user.
         *
         * Usually you will have no need to add accessible states for an
         * object, as the accessible object can extract most of the states
         * from the object itself (ie: a {@link St.Button} knows when it is pressed).
         * This method is only required when one cannot extract the
         * information automatically from the object itself (i.e.: a generic
         * container used as a toggle menu item will not automatically include
         * the toggled state).
         * @param state {@link Atk.StateType} state to add
         */
        add_accessible_state(state: Atk.StateType | null): void;
        /**
         * Adds `style_class` to `actor`'s style class name list, if it is not
         * already present.
         * @param style_class a style class name string
         */
        add_style_class_name(style_class: string): void;
        /**
         * Adds `pseudo_class` to `actor`'s pseudo class list, if it is not
         * already present.
         * @param pseudo_class a pseudo class string
         */
        add_style_pseudo_class(pseudo_class: string): void;
        /**
         * Ensures that `widget` has read its style information and propagated any
         * changes to its children.
         */
        ensure_style(): void;
        /**
         * Returns the current value of the can-focus property. See
         * `st_widget_set_can_focus()` for more information.
         * @returns current value of can-focus on `widget`
         */
        get_can_focus(): boolean;
        /**
         * Gets a list of the focusable children of `widget`, in "Tab"
         * order. By default, this returns all visible
         * (as in {@link Clutter.Actor.is_visible}) children of `widget`.
         * @returns `widget`'s focusable children
         */
        get_focus_chain(): Clutter.Actor[];
        /**
         * If {@link St.Widget.track_hover} is set, this returns whether the pointer
         * is currently over the widget.
         * @returns current value of hover on `widget`
         */
        get_hover(): boolean;
        /**
         * Gets the label that identifies `widget` if it is defined
         * @returns the label that identifies the widget
         */
        get_label_actor(): Clutter.Actor;
        /**
         * Get the current inline style string. See `st_widget_set_style()`.
         * @returns The inline style string, or `null`. The   string is owned by the {@link St.Widget} and should not be modified or freed.
         */
        get_style(): string | null;
        /**
         * Get the current style class name
         * @returns the class name string. The string is owned by the {@link St.Widget} and should not be modified or freed.
         */
        get_style_class_name(): string;
        /**
         * Get the current style pseudo class list.
         *
         * Note that an actor can have multiple pseudo classes; if you just
         * want to test for the presence of a specific pseudo class, use
         * `st_widget_has_style_pseudo_class()`.
         * @returns the pseudo class list string. The string is owned by the {@link St.Widget} and should not be modified or freed.
         */
        get_style_pseudo_class(): string;
        /**
         * Gets the theme node holding style information for the widget.
         * The theme node is used to access standard and custom CSS
         * properties of the widget.
         *
         * Note: it is a fatal error to call this on a widget that is
         *  not been added to a stage.
         * @returns the theme node for the widget.   This is owned by the widget. When attributes of the widget   or the environment that affect the styling change (for example   the style_class property of the widget), it will be recreated,   and the ::style-changed signal will be emitted on the widget.
         */
        get_theme_node(): ThemeNode;
        /**
         * Returns the current value of the {@link St.Widget.track_hover} property. See
         * `st_widget_set_track_hover()` for more information.
         * @returns current value of track-hover on `widget`
         */
        get_track_hover(): boolean;
        /**
         * Tests if `actor`'s style class list includes `style_class`.
         * @param style_class a style class string
         * @returns whether or not `actor`'s style class list includes `style_class`.
         */
        has_style_class_name(style_class: string): boolean;
        /**
         * Tests if `actor`'s pseudo class list includes `pseudo_class`.
         * @param pseudo_class a pseudo class string
         * @returns whether or not `actor`'s pseudo class list includes `pseudo_class`.
         */
        has_style_pseudo_class(pseudo_class: string): boolean;
        /**
         * Tries to update the keyboard focus within `widget` in response to a
         * keyboard event.
         *
         * If `from` is a descendant of `widget`, this attempts to move the
         * keyboard focus to the next descendant of `widget` (in the order
         * implied by `direction`) that has the {@link St.Widget.can_focus} property
         * set. If `from` is `null`, this attempts to focus either `widget`
         * itself, or its first descendant in the order implied by
         * `direction`. If `from` is outside of `widget`, it behaves as if it was
         * a descendant if `direction` is one of the directional arrows and as
         * if it was `null` otherwise.
         *
         * If a container type is marked {@link St.Widget.can_focus}, the expected
         * behavior is that it will only take up a single slot on the focus
         * chain as a whole, rather than allowing navigation between its child
         * actors (or having a distinction between itself being focused and
         * one of its children being focused).
         *
         * Some widget classes might have slightly different behavior from the
         * above, where that would make more sense.
         *
         * If `wrap_around` is `true` and `from` is a child of `widget`, but the
         * widget has no further children that can accept the focus in the
         * given direction, then `st_widget_navigate_focus()` will try a second
         * time, using a `null` `from`, which should cause it to reset the focus
         * to the first available widget in the given direction.
         * @param from the actor that the focus is coming from
         * @param direction the direction focus is moving in
         * @param wrap_around whether focus should wrap around
         * @returns `true` if `clutter_actor_grab_key_focus()` has been called on an actor. `false` if not.
         */
        navigate_focus(from: Clutter.Actor | null, direction: DirectionType | null, wrap_around: boolean): boolean;
        /**
         * Paint the background of the widget. This is meant to be called by
         * subclasses of StWidget that need to paint the background without
         * painting children.
         * @param node
         * @param paint_context
         */
        paint_background(node: Clutter.PaintNode, paint_context: Clutter.PaintContext): void;
        /**
         * Returns the theme node for the widget if it has already been
         * computed, `null` if the widget hasn't been added to a  stage or the theme
         * node hasn't been computed. If `null` is returned, then ::style-changed
         * will be reliably emitted before the widget is allocated or painted.
         * @returns the theme node for the widget.   This is owned by the widget. When attributes of the widget   or the environment that affect the styling change (for example   the style_class property of the widget), it will be recreated,   and the ::style-changed signal will be emitted on the widget.
         */
        peek_theme_node(): ThemeNode;
        /**
         * Asks the widget to pop-up a context menu by emitting {@link St.Widget.SignalSignatures.popup_menu | St.Widget::popup-menu}.
         */
        popup_menu(): void;
        /**
         * This method removes `state` as on of the accessible states for
         * `widget`. See `st_widget_add_accessible_state()` for more information.
         * @param state {@link Atk.State} state to remove
         */
        remove_accessible_state(state: Atk.StateType | null): void;
        /**
         * Removes `style_class` from `actor`'s style class name, if it is
         * present.
         * @param style_class a style class name string
         */
        remove_style_class_name(style_class: string): void;
        /**
         * Removes `pseudo_class` from `actor`'s pseudo class, if it is present.
         * @param pseudo_class a pseudo class string
         */
        remove_style_pseudo_class(pseudo_class: string): void;
        /**
         * Marks `widget` as being able to receive keyboard focus via
         * keyboard navigation.
         * @param can_focus `true` if the widget can receive keyboard focus   via keyboard navigation
         */
        set_can_focus(can_focus: boolean): void;
        /**
         * Sets `widget`'s hover property and adds or removes "hover" from its
         * pseudo class accordingly.
         *
         * If you have set {@link St.Widget.track_hover}, you should not need to call
         * this directly. You can call `st_widget_sync_hover()` if the hover
         * state might be out of sync due to another actor's pointer grab.
         * @param hover whether the pointer is hovering over the widget
         */
        set_hover(hover: boolean): void;
        /**
         * Sets `label` as the {@link Clutter.Actor} that identifies (labels)
         * `widget`. `label` can be `null` to indicate that `widget` is not
         * labelled any more
         * @param label a {@link Clutter.Actor}
         */
        set_label_actor(label: Clutter.Actor): void;
        /**
         * Set the inline style string for this widget. The inline style string is an
         * optional ';'-separated list of CSS properties that override the style as
         * determined from the stylesheets of the current theme.
         * @param style a inline style string, or `null`
         */
        set_style(style?: string | null): void;
        /**
         * Set the style class name list. `style_class_list` can either be
         * `null`, for no classes, or a space-separated list of style class
         * names. See also `st_widget_add_style_class_name()` and
         * `st_widget_remove_style_class_name()`.
         * @param style_class_list a new style class list string
         */
        set_style_class_name(style_class_list?: string | null): void;
        /**
         * Set the style pseudo class list. `pseudo_class_list` can either be
         * `null`, for no classes, or a space-separated list of pseudo class
         * names. See also `st_widget_add_style_pseudo_class()` and
         * `st_widget_remove_style_pseudo_class()`.
         * @param pseudo_class_list a new pseudo class list string
         */
        set_style_pseudo_class(pseudo_class_list?: string | null): void;
        /**
         * Enables hover tracking on the {@link St.Widget}.
         *
         * If hover tracking is enabled, and the widget is visible and
         * reactive, then `widget`'s {@link St.Widget.hover} property will be updated
         * automatically to reflect whether the pointer is in `widget` (or one
         * of its children), and `widget`'s {@link St.Widget.pseudo_class} will have
         * the "hover" class added and removed from it accordingly.
         *
         * Note that currently it is not possible to correctly track the hover
         * state when another actor has a pointer grab. You can use
         * `st_widget_sync_hover()` to update the property manually in this
         * case.
         * @param track_hover `true` if the widget should track the pointer hover state
         */
        set_track_hover(track_hover: boolean): void;
        style_changed(): void;
        /**
         * Sets `widget`'s hover state according to the current pointer
         * position. This can be used to ensure that it is correct after
         * (or during) a pointer grab.
         */
        sync_hover(): void;
        /**
         * Finds the {@link GObject.ParamSpec} for `property_name`
         * @param property_name the name of the animatable property to find
         * @returns The {@link GObject.ParamSpec} for the given property   or `null`
         */
        find_property(property_name: string): GObject.ParamSpec;
        /**
         * Get animated actor.
         * @returns a {@link Clutter.Actor}
         */
        get_actor(): Clutter.Actor;
        /**
         * Retrieves the current state of `property_name` and sets `value` with it
         * @param property_name the name of the animatable property to retrieve
         * @param value a {@link GObject.Value} initialized to the type of the property to retrieve
         */
        get_initial_state(property_name: string, value: GObject.Value | any): void;
        /**
         * Asks a {@link Clutter.Animatable} implementation to interpolate a
         * a named property between the initial and final values of
         * a {@link Clutter.Interval}, using `progress` as the interpolation
         * value, and store the result inside `value`.
         *
         * This function should be used for every property animation
         * involving {@link Clutter.Animatable}s.
         * @param property_name the name of the property to interpolate
         * @param interval a {@link Clutter.Interval} with the animation range
         * @param progress the progress to use to interpolate between the   initial and final values of the `interval`
         * @returns `true` if the interpolation was successful,   and `false` otherwise
         */
        interpolate_value(property_name: string, interval: Clutter.Interval, progress: number): [boolean, unknown];
        /**
         * Sets the current state of `property_name` to `value`
         * @param property_name the name of the animatable property to set
         * @param value the value of the animatable property to set
         */
        set_final_state(property_name: string, value: GObject.Value | any): void;
        /**
         * Finds the {@link GObject.ParamSpec} for `property_name`
         * @param property_name the name of the animatable property to find
         * @virtual
         */
        vfunc_find_property(property_name: string): GObject.ParamSpec;
        /**
         * Get animated actor.
         * @virtual
         */
        vfunc_get_actor(): Clutter.Actor;
        /**
         * Retrieves the current state of `property_name` and sets `value` with it
         * @param property_name the name of the animatable property to retrieve
         * @param value a {@link GObject.Value} initialized to the type of the property to retrieve
         * @virtual
         */
        vfunc_get_initial_state(property_name: string, value: GObject.Value | any): void;
        /**
         * Asks a {@link Clutter.Animatable} implementation to interpolate a
         * a named property between the initial and final values of
         * a {@link Clutter.Interval}, using `progress` as the interpolation
         * value, and store the result inside `value`.
         *
         * This function should be used for every property animation
         * involving {@link Clutter.Animatable}s.
         * @param property_name the name of the property to interpolate
         * @param interval a {@link Clutter.Interval} with the animation range
         * @param progress the progress to use to interpolate between the   initial and final values of the `interval`
         * @virtual
         */
        vfunc_interpolate_value(
            property_name: string,
            interval: Clutter.Interval,
            progress: number,
        ): [boolean, unknown];
        /**
         * Sets the current state of `property_name` to `value`
         * @param property_name the name of the animatable property to set
         * @param value the value of the animatable property to set
         * @virtual
         */
        vfunc_set_final_state(property_name: string, value: GObject.Value | any): void;
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
         * Will result in the "sensitive" property of the widget {@link GObject.Object} instance to be
         * updated with the same value of the "active" property of the action {@link GObject.Object}
         * instance.
         *
         * If `flags` contains {@link GObject.BindingFlags.BIDIRECTIONAL} then the binding will be mutual:
         * if `target_property` on `target` changes then the `source_property` on `source`
         * will be updated as well.
         *
         * The binding will automatically be removed when either the `source` or the
         * `target` instances are finalized. To remove the binding without affecting the
         * `source` and the `target` you can just call `g_object_unref()` on the returned
         * {@link GObject.Binding} instance.
         *
         * Removing the binding by calling `g_object_unref()` on it must only be done if
         * the binding, `source` and `target` are only used from a single thread and it
         * is clear that both `source` and `target` outlive the binding. Especially it
         * is not safe to rely on this if the binding, `source` or `target` can be
         * finalized from different threads. Keep another reference to the binding and
         * use `g_binding_unbind()` instead to be on the safe side.
         *
         * A {@link GObject.Object} can have multiple bindings.
         * @param source_property the property on `source` to bind
         * @param target the target {@link GObject.Object}
         * @param target_property the property on `target` to bind
         * @param flags flags to pass to {@link GObject.Binding}
         * @returns the {@link GObject.Binding} instance representing the     binding between the two {@link GObject.Object} instances. The binding is released     whenever the {@link GObject.Binding} reference count reaches zero.
         */
        bind_property(
            source_property: string,
            target: GObject.Object,
            target_property: string,
            flags: GObject.BindingFlags | null,
        ): GObject.Binding;
        /**
         * Complete version of `g_object_bind_property()`.
         *
         * Creates a binding between `source_property` on `source` and `target_property`
         * on `target`, allowing you to set the transformation functions to be used by
         * the binding.
         *
         * If `flags` contains {@link GObject.BindingFlags.BIDIRECTIONAL} then the binding will be mutual:
         * if `target_property` on `target` changes then the `source_property` on `source`
         * will be updated as well. The `transform_from` function is only used in case
         * of bidirectional bindings, otherwise it will be ignored
         *
         * The binding will automatically be removed when either the `source` or the
         * `target` instances are finalized. This will release the reference that is
         * being held on the {@link GObject.Binding} instance; if you want to hold on to the
         * {@link GObject.Binding} instance, you will need to hold a reference to it.
         *
         * To remove the binding, call `g_binding_unbind()`.
         *
         * A {@link GObject.Object} can have multiple bindings.
         *
         * The same `user_data` parameter will be used for both `transform_to`
         * and `transform_from` transformation functions; the `notify` function will
         * be called once, when the binding is removed. If you need different data
         * for each transformation function, please use
         * `g_object_bind_property_with_closures()` instead.
         * @param source_property the property on `source` to bind
         * @param target the target {@link GObject.Object}
         * @param target_property the property on `target` to bind
         * @param flags flags to pass to {@link GObject.Binding}
         * @param transform_to the transformation function     from the `source` to the `target`, or `null` to use the default
         * @param transform_from the transformation function     from the `target` to the `source`, or `null` to use the default
         * @param notify a function to call when disposing the binding, to free     resources used by the transformation functions, or `null` if not required
         * @returns the {@link GObject.Binding} instance representing the     binding between the two {@link GObject.Object} instances. The binding is released     whenever the {@link GObject.Binding} reference count reaches zero.
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
        /**
         * @param args
         */
        // Conflicted with GObject.Object.bind_property_full
        bind_property_full(...args: never[]): any;
        /**
         * This function is intended for {@link GObject.Object} implementations to re-enforce
         * a [floating][floating-ref] object reference. Doing this is seldom
         * required: all `GInitiallyUnowneds` are created with a floating reference
         * which usually just needs to be sunken by calling `g_object_ref_sink()`.
         */
        force_floating(): void;
        /**
         * Increases the freeze count on `object`. If the freeze count is
         * non-zero, the emission of "notify" signals on `object` is
         * stopped. The signals are queued until the freeze count is decreased
         * to zero. Duplicate notifications are squashed so that at most one
         * {@link GObject.Object.SignalSignatures.notify | GObject.Object::notify} signal is emitted for each property modified while the
         * object is frozen.
         *
         * This is necessary for accessors that modify multiple properties to prevent
         * premature notification while the object is still being modified.
         */
        freeze_notify(): void;
        /**
         * Gets a named field from the objects table of associations (see `g_object_set_data()`).
         * @param key name of the key for that association
         * @returns the data if found,          or `null` if no such data exists.
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
         * `g_object_set_qdata()`.
         * @param quark A {@link GLib.Quark}, naming the user data pointer
         * @returns The user data pointer set, or `null`
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
         * @returns `true` if `object` has a floating reference
         */
        is_floating(): boolean;
        /**
         * Emits a "notify" signal for the property `property_name` on `object`.
         *
         * When possible, eg. when signaling a property change from within the class
         * that registered the property, you should use `g_object_notify_by_pspec()`
         * instead.
         *
         * Note that emission of the notify signal may be blocked with
         * `g_object_freeze_notify()`. In this case, the signal emissions are queued
         * and will be emitted (in reverse order) when `g_object_thaw_notify()` is
         * called.
         * @param property_name the name of a property installed on the class of `object`.
         */
        notify(property_name: string): void;
        /**
         * Emits a "notify" signal for the property specified by `pspec` on `object`.
         *
         * This function omits the property name lookup, hence it is faster than
         * `g_object_notify()`.
         *
         * One way to avoid using `g_object_notify()` from within the
         * class that registered the properties, and using `g_object_notify_by_pspec()`
         * instead, is to store the GParamSpec used with
         * `g_object_class_install_property()` inside a static array, e.g.:
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
         * @param pspec the {@link GObject.ParamSpec} of a property installed on the class of `object`.
         */
        notify_by_pspec(pspec: GObject.ParamSpec): void;
        /**
         * Increases the reference count of `object`.
         *
         * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
         * of `object` will be propagated to the return type (using the GCC `typeof()`
         * extension), so any casting the caller needs to do on the return type must be
         * explicit.
         * @returns the same `object`
         */
        ref(): GObject.Object;
        /**
         * Increase the reference count of `object`, and possibly remove the
         * [floating][floating-ref] reference, if `object` has a floating reference.
         *
         * In other words, if the object is floating, then this call "assumes
         * ownership" of the floating reference, converting it to a normal
         * reference by clearing the floating flag while leaving the reference
         * count unchanged.  If the object is not floating, then this call
         * adds a new normal reference increasing the reference count by one.
         *
         * Since GLib 2.56, the type of `object` will be propagated to the return type
         * under the same conditions as for `g_object_ref()`.
         * @returns `object`
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
         * Internally, the `key` is converted to a {@link GLib.Quark} using `g_quark_from_string()`.
         * This means a copy of `key` is kept permanently (even after `object` has been
         * finalized) — so it is recommended to only use a small, bounded set of values
         * for `key` in your program, to avoid the {@link GLib.Quark} storage growing unbounded.
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
         * @returns the data if found, or `null`          if no such data exists.
         */
        steal_data(key: string): any | null;
        /**
         * This function gets back user data pointers stored via
         * `g_object_set_qdata()` and removes the `data` from object
         * without invoking its `destroy()` function (if any was
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
         * Using `g_object_get_qdata()` in the above example, instead of
         * `g_object_steal_qdata()` would have left the destroy function set,
         * and thus the partial string list would have been freed upon
         * `g_object_set_qdata_full()`.
         * @param quark A {@link GLib.Quark}, naming the user data pointer
         * @returns The user data pointer set, or `null`
         */
        steal_qdata(quark: GLib.Quark): any | null;
        /**
         * Reverts the effect of a previous call to
         * `g_object_freeze_notify()`. The freeze count is decreased on `object`
         * and when it reaches zero, queued "notify" signals are emitted.
         *
         * Duplicate notifications for each property are squashed so that at most one
         * {@link GObject.Object.SignalSignatures.notify | GObject.Object::notify} signal is emitted for each property, in the reverse order
         * in which they have been queued.
         *
         * It is an error to call this function when the freeze count is zero.
         */
        thaw_notify(): void;
        /**
         * Decreases the reference count of `object`. When its reference count
         * drops to 0, the object is finalized (i.e. its memory is freed).
         *
         * If the pointer to the {@link GObject.Object} may be reused in future (for example, if it is
         * an instance variable of another object), it is recommended to clear the
         * pointer to `null` rather than retain a dangling pointer to a potentially
         * invalid {@link GObject.Object} instance. Use `g_clear_object()` for this.
         */
        unref(): void;
        /**
         * This function essentially limits the life time of the `closure` to
         * the life time of the object. That is, when the object is finalized,
         * the `closure` is invalidated by calling `g_closure_invalidate()` on
         * it, in order to prevent invocations of the closure with a finalized
         * (nonexisting) object. Also, `g_object_ref()` and `g_object_unref()` are
         * added as marshal guards to the `closure`, to ensure that an extra
         * reference count is held on `object` during invocation of the
         * `closure`.  Usually, this function will be called on closures that
         * use this `object` as closure data.
         * @param closure {@link GObject.Closure} to watch
         */
        watch_closure(closure: GObject.Closure): void;
        /**
         * the `constructed` function is called by `g_object_new()` as the
         *  final step of the object creation process.  At the point of the call, all
         *  construction properties have been set on the object.  The purpose of this
         *  call is to allow for object initialisation steps that can only be performed
         *  after construction properties have been set.  `constructed` implementors
         *  should chain up to the `constructed` call of their parent class to allow it
         *  to complete its initialisation.
         * @virtual
         */
        vfunc_constructed(): void;
        /**
         * emits property change notification for a bunch
         *  of properties. Overriding `dispatch_properties_changed` should be rarely
         *  needed.
         * @param n_pspecs
         * @param pspecs
         * @virtual
         */
        vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void;
        /**
         * the `dispose` function is supposed to drop all references to other
         *  objects, but keep the instance otherwise intact, so that client method
         *  invocations still work. It may be run multiple times (due to reference
         *  loops). Before returning, `dispose` should chain up to the `dispose` method
         *  of the parent class.
         * @virtual
         */
        vfunc_dispose(): void;
        /**
         * instance finalization function, should finish the finalization of
         *  the instance begun in `dispose` and chain up to the `finalize` method of the
         *  parent class.
         * @virtual
         */
        vfunc_finalize(): void;
        /**
         * the generic getter for all properties of this type. Should be
         *  overridden for every type with properties.
         * @param property_id
         * @param value
         * @param pspec
         * @virtual
         */
        vfunc_get_property(property_id: number, value: GObject.Value | any, pspec: GObject.ParamSpec): void;
        /**
         * Emits a "notify" signal for the property `property_name` on `object`.
         *
         * When possible, eg. when signaling a property change from within the class
         * that registered the property, you should use `g_object_notify_by_pspec()`
         * instead.
         *
         * Note that emission of the notify signal may be blocked with
         * `g_object_freeze_notify()`. In this case, the signal emissions are queued
         * and will be emitted (in reverse order) when `g_object_thaw_notify()` is
         * called.
         * @param pspec
         * @virtual
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
         * @virtual
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

    namespace WidgetAccessible {
        // Signal signatures
        interface SignalSignatures extends Clutter.ActorAccessible.SignalSignatures {
            'notify::accessible-component-layer': (pspec: GObject.ParamSpec) => void;
            'notify::accessible-component-mdi-zorder': (pspec: GObject.ParamSpec) => void;
            'notify::accessible-description': (pspec: GObject.ParamSpec) => void;
            'notify::accessible-help-text': (pspec: GObject.ParamSpec) => void;
            'notify::accessible-hypertext-nlinks': (pspec: GObject.ParamSpec) => void;
            'notify::accessible-id': (pspec: GObject.ParamSpec) => void;
            'notify::accessible-name': (pspec: GObject.ParamSpec) => void;
            'notify::accessible-parent': (pspec: GObject.ParamSpec) => void;
            'notify::accessible-role': (pspec: GObject.ParamSpec) => void;
            'notify::accessible-table-caption': (pspec: GObject.ParamSpec) => void;
            'notify::accessible-table-caption-object': (pspec: GObject.ParamSpec) => void;
            'notify::accessible-table-column-description': (pspec: GObject.ParamSpec) => void;
            'notify::accessible-table-column-header': (pspec: GObject.ParamSpec) => void;
            'notify::accessible-table-row-description': (pspec: GObject.ParamSpec) => void;
            'notify::accessible-table-row-header': (pspec: GObject.ParamSpec) => void;
            'notify::accessible-table-summary': (pspec: GObject.ParamSpec) => void;
            'notify::accessible-value': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends Clutter.ActorAccessible.ConstructorProps, Atk.Component.ConstructorProps {}
    }

    /**
     * @gir-type Class
     */
    class WidgetAccessible extends Clutter.ActorAccessible implements Atk.Component {
        static $gtype: GObject.GType<WidgetAccessible>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: WidgetAccessible.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<WidgetAccessible.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        /** @signal */
        connect<K extends keyof WidgetAccessible.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, WidgetAccessible.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof WidgetAccessible.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, WidgetAccessible.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof WidgetAccessible.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<WidgetAccessible.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;
        /**
         * Checks whether the specified point is within the extent of the `component`.
         *
         * Toolkit implementor note: ATK provides a default implementation for
         * this virtual method. In general there are little reason to
         * re-implement it.
         * @param x x coordinate
         * @param y y coordinate
         * @param coord_type specifies whether the coordinates are relative to the screen or to the components top level window
         * @returns `true` or `false` indicating whether the specified point is within the extent of the `component` or not
         */
        contains(x: number, y: number, coord_type: Atk.CoordType | null): boolean;
        /**
         * Returns the alpha value (i.e. the opacity) for this
         * `component`, on a scale from 0 (fully transparent) to 1.0
         * (fully opaque).
         * @returns An alpha value from 0 to 1.0, inclusive.
         */
        get_alpha(): number;
        /**
         * Gets the rectangle which gives the extent of the `component`.
         *
         * If the extent can not be obtained (e.g. a non-embedded plug or missing
         * support), all of x, y, width, height are set to -1.
         * @param coord_type specifies whether the coordinates are relative to the screen or to the components top level window
         */
        get_extents(coord_type: Atk.CoordType | null): [number, number, number, number];
        /**
         * Gets the layer of the component.
         * @returns an {@link Atk.Layer} which is the layer of the component
         */
        get_layer(): Atk.Layer;
        /**
         * Gets the zorder of the component. The value G_MININT will be returned
         * if the layer of the component is not ATK_LAYER_MDI or ATK_LAYER_WINDOW.
         * @returns a gint which is the zorder of the component, i.e. the depth at which the component is shown in relation to other components in the same container.
         */
        get_mdi_zorder(): number;
        /**
         * Gets the position of `component` in the form of
         * a point specifying `component`'s top-left corner.
         *
         * If the position can not be obtained (e.g. a non-embedded plug or missing
         * support), x and y are set to -1.
         * @param coord_type specifies whether the coordinates are relative to the screen or to the components top level window
         */
        get_position(coord_type: Atk.CoordType | null): [number, number];
        /**
         * Gets the size of the `component` in terms of width and height.
         *
         * If the size can not be obtained (e.g. a non-embedded plug or missing
         * support), width and height are set to -1.
         */
        get_size(): [number, number];
        /**
         * Grabs focus for this `component`.
         * @returns `true` if successful, `false` otherwise.
         */
        grab_focus(): boolean;
        /**
         * Gets a reference to the accessible child, if one exists, at the
         * coordinate point specified by `x` and `y`.
         * @param x x coordinate
         * @param y y coordinate
         * @param coord_type specifies whether the coordinates are relative to the screen or to the components top level window
         * @returns a reference to the accessible child, if one exists
         */
        ref_accessible_at_point(x: number, y: number, coord_type: Atk.CoordType | null): Atk.Object | null;
        /**
         * Remove the handler specified by `handler_id` from the list of
         * functions to be executed when this object receives focus events
         * (in or out).
         * @param handler_id the handler id of the focus handler to be removed from `component`
         */
        remove_focus_handler(handler_id: number): void;
        /**
         * Makes `component` visible on the screen by scrolling all necessary parents.
         *
         * Contrary to atk_component_set_position, this does not actually move
         * `component` in its parent, this only makes the parents scroll so that the
         * object shows up on the screen, given its current position within the parents.
         * @param type specify where the object should be made visible.
         * @returns whether scrolling was successful.
         */
        scroll_to(type: Atk.ScrollType | null): boolean;
        /**
         * Move the top-left of `component` to a given position of the screen by
         * scrolling all necessary parents.
         * @param coords specify whether coordinates are relative to the screen or to the parent object.
         * @param x x-position where to scroll to
         * @param y y-position where to scroll to
         * @returns whether scrolling was successful.
         */
        scroll_to_point(coords: Atk.CoordType | null, x: number, y: number): boolean;
        /**
         * Sets the extents of `component`.
         * @param x x coordinate
         * @param y y coordinate
         * @param width width to set for `component`
         * @param height height to set for `component`
         * @param coord_type specifies whether the coordinates are relative to the screen or to the components top level window
         * @returns `true` or `false` whether the extents were set or not
         */
        set_extents(x: number, y: number, width: number, height: number, coord_type: Atk.CoordType | null): boolean;
        /**
         * Sets the position of `component`.
         *
         * Contrary to atk_component_scroll_to, this does not trigger any scrolling,
         * this just moves `component` in its parent.
         * @param x x coordinate
         * @param y y coordinate
         * @param coord_type specifies whether the coordinates are relative to the screen or to the component's top level window
         * @returns `true` or `false` whether or not the position was set or not
         */
        set_position(x: number, y: number, coord_type: Atk.CoordType | null): boolean;
        /**
         * Set the size of the `component` in terms of width and height.
         * @param width width to set for `component`
         * @param height height to set for `component`
         * @returns `true` or `false` whether the size was set or not
         */
        set_size(width: number, height: number): boolean;
        /**
         * @param bounds
         * @virtual
         */
        vfunc_bounds_changed(bounds: Atk.Rectangle): void;
        /**
         * Checks whether the specified point is within the extent of the `component`.
         *
         * Toolkit implementor note: ATK provides a default implementation for
         * this virtual method. In general there are little reason to
         * re-implement it.
         * @param x x coordinate
         * @param y y coordinate
         * @param coord_type specifies whether the coordinates are relative to the screen or to the components top level window
         * @virtual
         */
        vfunc_contains(x: number, y: number, coord_type: Atk.CoordType): boolean;
        /**
         * Returns the alpha value (i.e. the opacity) for this
         * `component`, on a scale from 0 (fully transparent) to 1.0
         * (fully opaque).
         * @virtual
         */
        vfunc_get_alpha(): number;
        /**
         * Gets the rectangle which gives the extent of the `component`.
         *
         * If the extent can not be obtained (e.g. a non-embedded plug or missing
         * support), all of x, y, width, height are set to -1.
         * @param coord_type specifies whether the coordinates are relative to the screen or to the components top level window
         * @virtual
         */
        vfunc_get_extents(coord_type: Atk.CoordType): [number, number, number, number];
        /**
         * Gets the layer of the component.
         * @virtual
         */
        vfunc_get_layer(): Atk.Layer;
        /**
         * Gets the zorder of the component. The value G_MININT will be returned
         * if the layer of the component is not ATK_LAYER_MDI or ATK_LAYER_WINDOW.
         * @virtual
         */
        vfunc_get_mdi_zorder(): number;
        /**
         * Gets the position of `component` in the form of
         * a point specifying `component`'s top-left corner.
         *
         * If the position can not be obtained (e.g. a non-embedded plug or missing
         * support), x and y are set to -1.
         * @param coord_type specifies whether the coordinates are relative to the screen or to the components top level window
         * @virtual
         */
        vfunc_get_position(coord_type: Atk.CoordType): [number, number];
        /**
         * Gets the size of the `component` in terms of width and height.
         *
         * If the size can not be obtained (e.g. a non-embedded plug or missing
         * support), width and height are set to -1.
         * @virtual
         */
        vfunc_get_size(): [number, number];
        /**
         * Grabs focus for this `component`.
         * @virtual
         */
        vfunc_grab_focus(): boolean;
        /**
         * Gets a reference to the accessible child, if one exists, at the
         * coordinate point specified by `x` and `y`.
         * @param x x coordinate
         * @param y y coordinate
         * @param coord_type specifies whether the coordinates are relative to the screen or to the components top level window
         * @virtual
         */
        vfunc_ref_accessible_at_point(x: number, y: number, coord_type: Atk.CoordType): Atk.Object | null;
        /**
         * Remove the handler specified by `handler_id` from the list of
         * functions to be executed when this object receives focus events
         * (in or out).
         * @param handler_id the handler id of the focus handler to be removed from `component`
         * @virtual
         */
        vfunc_remove_focus_handler(handler_id: number): void;
        /**
         * Makes `component` visible on the screen by scrolling all necessary parents.
         *
         * Contrary to atk_component_set_position, this does not actually move
         * `component` in its parent, this only makes the parents scroll so that the
         * object shows up on the screen, given its current position within the parents.
         * @param type specify where the object should be made visible.
         * @virtual
         */
        vfunc_scroll_to(type: Atk.ScrollType): boolean;
        /**
         * Move the top-left of `component` to a given position of the screen by
         * scrolling all necessary parents.
         * @param coords specify whether coordinates are relative to the screen or to the parent object.
         * @param x x-position where to scroll to
         * @param y y-position where to scroll to
         * @virtual
         */
        vfunc_scroll_to_point(coords: Atk.CoordType, x: number, y: number): boolean;
        /**
         * Sets the extents of `component`.
         * @param x x coordinate
         * @param y y coordinate
         * @param width width to set for `component`
         * @param height height to set for `component`
         * @param coord_type specifies whether the coordinates are relative to the screen or to the components top level window
         * @virtual
         */
        vfunc_set_extents(x: number, y: number, width: number, height: number, coord_type: Atk.CoordType): boolean;
        /**
         * Sets the position of `component`.
         *
         * Contrary to atk_component_scroll_to, this does not trigger any scrolling,
         * this just moves `component` in its parent.
         * @param x x coordinate
         * @param y y coordinate
         * @param coord_type specifies whether the coordinates are relative to the screen or to the component's top level window
         * @virtual
         */
        vfunc_set_position(x: number, y: number, coord_type: Atk.CoordType): boolean;
        /**
         * Set the size of the `component` in terms of width and height.
         * @param width width to set for `component`
         * @param height height to set for `component`
         * @virtual
         */
        vfunc_set_size(width: number, height: number): boolean;
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
         * Will result in the "sensitive" property of the widget {@link GObject.Object} instance to be
         * updated with the same value of the "active" property of the action {@link GObject.Object}
         * instance.
         *
         * If `flags` contains {@link GObject.BindingFlags.BIDIRECTIONAL} then the binding will be mutual:
         * if `target_property` on `target` changes then the `source_property` on `source`
         * will be updated as well.
         *
         * The binding will automatically be removed when either the `source` or the
         * `target` instances are finalized. To remove the binding without affecting the
         * `source` and the `target` you can just call `g_object_unref()` on the returned
         * {@link GObject.Binding} instance.
         *
         * Removing the binding by calling `g_object_unref()` on it must only be done if
         * the binding, `source` and `target` are only used from a single thread and it
         * is clear that both `source` and `target` outlive the binding. Especially it
         * is not safe to rely on this if the binding, `source` or `target` can be
         * finalized from different threads. Keep another reference to the binding and
         * use `g_binding_unbind()` instead to be on the safe side.
         *
         * A {@link GObject.Object} can have multiple bindings.
         * @param source_property the property on `source` to bind
         * @param target the target {@link GObject.Object}
         * @param target_property the property on `target` to bind
         * @param flags flags to pass to {@link GObject.Binding}
         * @returns the {@link GObject.Binding} instance representing the     binding between the two {@link GObject.Object} instances. The binding is released     whenever the {@link GObject.Binding} reference count reaches zero.
         */
        bind_property(
            source_property: string,
            target: GObject.Object,
            target_property: string,
            flags: GObject.BindingFlags | null,
        ): GObject.Binding;
        /**
         * Complete version of `g_object_bind_property()`.
         *
         * Creates a binding between `source_property` on `source` and `target_property`
         * on `target`, allowing you to set the transformation functions to be used by
         * the binding.
         *
         * If `flags` contains {@link GObject.BindingFlags.BIDIRECTIONAL} then the binding will be mutual:
         * if `target_property` on `target` changes then the `source_property` on `source`
         * will be updated as well. The `transform_from` function is only used in case
         * of bidirectional bindings, otherwise it will be ignored
         *
         * The binding will automatically be removed when either the `source` or the
         * `target` instances are finalized. This will release the reference that is
         * being held on the {@link GObject.Binding} instance; if you want to hold on to the
         * {@link GObject.Binding} instance, you will need to hold a reference to it.
         *
         * To remove the binding, call `g_binding_unbind()`.
         *
         * A {@link GObject.Object} can have multiple bindings.
         *
         * The same `user_data` parameter will be used for both `transform_to`
         * and `transform_from` transformation functions; the `notify` function will
         * be called once, when the binding is removed. If you need different data
         * for each transformation function, please use
         * `g_object_bind_property_with_closures()` instead.
         * @param source_property the property on `source` to bind
         * @param target the target {@link GObject.Object}
         * @param target_property the property on `target` to bind
         * @param flags flags to pass to {@link GObject.Binding}
         * @param transform_to the transformation function     from the `source` to the `target`, or `null` to use the default
         * @param transform_from the transformation function     from the `target` to the `source`, or `null` to use the default
         * @param notify a function to call when disposing the binding, to free     resources used by the transformation functions, or `null` if not required
         * @returns the {@link GObject.Binding} instance representing the     binding between the two {@link GObject.Object} instances. The binding is released     whenever the {@link GObject.Binding} reference count reaches zero.
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
        /**
         * @param args
         */
        // Conflicted with GObject.Object.bind_property_full
        bind_property_full(...args: never[]): any;
        /**
         * This function is intended for {@link GObject.Object} implementations to re-enforce
         * a [floating][floating-ref] object reference. Doing this is seldom
         * required: all `GInitiallyUnowneds` are created with a floating reference
         * which usually just needs to be sunken by calling `g_object_ref_sink()`.
         */
        force_floating(): void;
        /**
         * Increases the freeze count on `object`. If the freeze count is
         * non-zero, the emission of "notify" signals on `object` is
         * stopped. The signals are queued until the freeze count is decreased
         * to zero. Duplicate notifications are squashed so that at most one
         * {@link GObject.Object.SignalSignatures.notify | GObject.Object::notify} signal is emitted for each property modified while the
         * object is frozen.
         *
         * This is necessary for accessors that modify multiple properties to prevent
         * premature notification while the object is still being modified.
         */
        freeze_notify(): void;
        /**
         * Gets a named field from the objects table of associations (see `g_object_set_data()`).
         * @param key name of the key for that association
         * @returns the data if found,          or `null` if no such data exists.
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
         * `g_object_set_qdata()`.
         * @param quark A {@link GLib.Quark}, naming the user data pointer
         * @returns The user data pointer set, or `null`
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
         * @returns `true` if `object` has a floating reference
         */
        is_floating(): boolean;
        /**
         * Emits a "notify" signal for the property `property_name` on `object`.
         *
         * When possible, eg. when signaling a property change from within the class
         * that registered the property, you should use `g_object_notify_by_pspec()`
         * instead.
         *
         * Note that emission of the notify signal may be blocked with
         * `g_object_freeze_notify()`. In this case, the signal emissions are queued
         * and will be emitted (in reverse order) when `g_object_thaw_notify()` is
         * called.
         * @param property_name the name of a property installed on the class of `object`.
         */
        notify(property_name: string): void;
        /**
         * Emits a "notify" signal for the property specified by `pspec` on `object`.
         *
         * This function omits the property name lookup, hence it is faster than
         * `g_object_notify()`.
         *
         * One way to avoid using `g_object_notify()` from within the
         * class that registered the properties, and using `g_object_notify_by_pspec()`
         * instead, is to store the GParamSpec used with
         * `g_object_class_install_property()` inside a static array, e.g.:
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
         * @param pspec the {@link GObject.ParamSpec} of a property installed on the class of `object`.
         */
        notify_by_pspec(pspec: GObject.ParamSpec): void;
        /**
         * Increases the reference count of `object`.
         *
         * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
         * of `object` will be propagated to the return type (using the GCC `typeof()`
         * extension), so any casting the caller needs to do on the return type must be
         * explicit.
         * @returns the same `object`
         */
        ref(): GObject.Object;
        /**
         * Increase the reference count of `object`, and possibly remove the
         * [floating][floating-ref] reference, if `object` has a floating reference.
         *
         * In other words, if the object is floating, then this call "assumes
         * ownership" of the floating reference, converting it to a normal
         * reference by clearing the floating flag while leaving the reference
         * count unchanged.  If the object is not floating, then this call
         * adds a new normal reference increasing the reference count by one.
         *
         * Since GLib 2.56, the type of `object` will be propagated to the return type
         * under the same conditions as for `g_object_ref()`.
         * @returns `object`
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
         * Internally, the `key` is converted to a {@link GLib.Quark} using `g_quark_from_string()`.
         * This means a copy of `key` is kept permanently (even after `object` has been
         * finalized) — so it is recommended to only use a small, bounded set of values
         * for `key` in your program, to avoid the {@link GLib.Quark} storage growing unbounded.
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
         * @returns the data if found, or `null`          if no such data exists.
         */
        steal_data(key: string): any | null;
        /**
         * This function gets back user data pointers stored via
         * `g_object_set_qdata()` and removes the `data` from object
         * without invoking its `destroy()` function (if any was
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
         * Using `g_object_get_qdata()` in the above example, instead of
         * `g_object_steal_qdata()` would have left the destroy function set,
         * and thus the partial string list would have been freed upon
         * `g_object_set_qdata_full()`.
         * @param quark A {@link GLib.Quark}, naming the user data pointer
         * @returns The user data pointer set, or `null`
         */
        steal_qdata(quark: GLib.Quark): any | null;
        /**
         * Reverts the effect of a previous call to
         * `g_object_freeze_notify()`. The freeze count is decreased on `object`
         * and when it reaches zero, queued "notify" signals are emitted.
         *
         * Duplicate notifications for each property are squashed so that at most one
         * {@link GObject.Object.SignalSignatures.notify | GObject.Object::notify} signal is emitted for each property, in the reverse order
         * in which they have been queued.
         *
         * It is an error to call this function when the freeze count is zero.
         */
        thaw_notify(): void;
        /**
         * Decreases the reference count of `object`. When its reference count
         * drops to 0, the object is finalized (i.e. its memory is freed).
         *
         * If the pointer to the {@link GObject.Object} may be reused in future (for example, if it is
         * an instance variable of another object), it is recommended to clear the
         * pointer to `null` rather than retain a dangling pointer to a potentially
         * invalid {@link GObject.Object} instance. Use `g_clear_object()` for this.
         */
        unref(): void;
        /**
         * This function essentially limits the life time of the `closure` to
         * the life time of the object. That is, when the object is finalized,
         * the `closure` is invalidated by calling `g_closure_invalidate()` on
         * it, in order to prevent invocations of the closure with a finalized
         * (nonexisting) object. Also, `g_object_ref()` and `g_object_unref()` are
         * added as marshal guards to the `closure`, to ensure that an extra
         * reference count is held on `object` during invocation of the
         * `closure`.  Usually, this function will be called on closures that
         * use this `object` as closure data.
         * @param closure {@link GObject.Closure} to watch
         */
        watch_closure(closure: GObject.Closure): void;
        /**
         * the `constructed` function is called by `g_object_new()` as the
         *  final step of the object creation process.  At the point of the call, all
         *  construction properties have been set on the object.  The purpose of this
         *  call is to allow for object initialisation steps that can only be performed
         *  after construction properties have been set.  `constructed` implementors
         *  should chain up to the `constructed` call of their parent class to allow it
         *  to complete its initialisation.
         * @virtual
         */
        vfunc_constructed(): void;
        /**
         * emits property change notification for a bunch
         *  of properties. Overriding `dispatch_properties_changed` should be rarely
         *  needed.
         * @param n_pspecs
         * @param pspecs
         * @virtual
         */
        vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void;
        /**
         * the `dispose` function is supposed to drop all references to other
         *  objects, but keep the instance otherwise intact, so that client method
         *  invocations still work. It may be run multiple times (due to reference
         *  loops). Before returning, `dispose` should chain up to the `dispose` method
         *  of the parent class.
         * @virtual
         */
        vfunc_dispose(): void;
        /**
         * instance finalization function, should finish the finalization of
         *  the instance begun in `dispose` and chain up to the `finalize` method of the
         *  parent class.
         * @virtual
         */
        vfunc_finalize(): void;
        /**
         * the generic getter for all properties of this type. Should be
         *  overridden for every type with properties.
         * @param property_id
         * @param value
         * @param pspec
         * @virtual
         */
        vfunc_get_property(property_id: number, value: GObject.Value | any, pspec: GObject.ParamSpec): void;
        /**
         * Emits a "notify" signal for the property `property_name` on `object`.
         *
         * When possible, eg. when signaling a property change from within the class
         * that registered the property, you should use `g_object_notify_by_pspec()`
         * instead.
         *
         * Note that emission of the notify signal may be blocked with
         * `g_object_freeze_notify()`. In this case, the signal emissions are queued
         * and will be emitted (in reverse order) when `g_object_thaw_notify()` is
         * called.
         * @param pspec
         * @virtual
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
         * @virtual
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

    /**
     * @gir-type Alias
     */
    type AdjustmentClass = typeof Adjustment;
    /**
     * @gir-type Alias
     */
    type BinClass = typeof Bin;
    /**
     * @gir-type Alias
     */
    type BorderImageClass = typeof BorderImage;
    /**
     * @gir-type Alias
     */
    type BoxLayoutClass = typeof BoxLayout;
    /**
     * @gir-type Struct
     */
    abstract class BoxLayoutPrivate {
        static $gtype: GObject.GType<BoxLayoutPrivate>;
    }

    /**
     * @gir-type Alias
     */
    type ButtonClass = typeof Button;
    /**
     * @gir-type Alias
     */
    type ClipboardClass = typeof Clipboard;
    /**
     * @gir-type Alias
     */
    type DrawingAreaClass = typeof DrawingArea;
    /**
     * @gir-type Alias
     */
    type EntryClass = typeof Entry;
    /**
     * @gir-type Alias
     */
    type FocusManagerClass = typeof FocusManager;
    /**
     * @gir-type Alias
     */
    type GenericAccessibleClass = typeof GenericAccessible;
    /**
     * @gir-type Alias
     */
    type IconClass = typeof Icon;
    /**
     * The {@link St.IconColors} structure encapsulates colors for colorizing a symbolic
     * icon.
     * @gir-type Struct
     */
    class IconColors {
        static $gtype: GObject.GType<IconColors>;

        // Fields

        foreground: Cogl.Color;
        warning: Cogl.Color;
        error: Cogl.Color;
        success: Cogl.Color;

        // Constructors

        constructor(
            properties?: Partial<{
                foreground: Cogl.Color;
                warning: Cogl.Color;
                error: Cogl.Color;
                success: Cogl.Color;
            }>,
        );

        static ['new'](): IconColors;

        // Methods

        /**
         * Creates a new StIconColors structure that is a copy of the passed
         * in `colors`. You would use this function instead of `st_icon_colors_ref()`
         * if you were planning to change colors in the result.
         * @returns a newly created {@link St.IconColors}.
         */
        copy(): IconColors;
        /**
         * Check if two {@link St.IconColors} objects are identical.
         * @param other another {@link St.IconColors}
         * @returns `true` if the {@link St.IconColors} are equal
         */
        equal(other: IconColors): boolean;
        /**
         * Atomically increments the reference count of `colors` by one.
         * @returns the passed in {@link St.IconColors}.
         */
        ref(): IconColors;
        /**
         * Atomically decrements the reference count of `colors` by one.
         * If the reference count drops to 0, all memory allocated by the
         * {@link St.IconColors} is released.
         */
        unref(): void;
    }

    /**
     * @gir-type Alias
     */
    type IconInfoClass = typeof IconInfo;
    /**
     * @gir-type Struct
     */
    abstract class IconPrivate {
        static $gtype: GObject.GType<IconPrivate>;
    }

    /**
     * @gir-type Alias
     */
    type IconThemeClass = typeof IconTheme;
    /**
     * @gir-type Alias
     */
    type ImageContentClass = typeof ImageContent;
    /**
     * @gir-type Alias
     */
    type LabelClass = typeof Label;
    /**
     * @gir-type Struct
     */
    abstract class LabelPrivate {
        static $gtype: GObject.GType<LabelPrivate>;
    }

    /**
     * @gir-type Alias
     */
    type PasswordEntryClass = typeof PasswordEntry;
    /**
     * @gir-type Alias
     */
    type ScrollBarClass = typeof ScrollBar;
    /**
     * @gir-type Alias
     */
    type ScrollViewClass = typeof ScrollView;
    /**
     * @gir-type Alias
     */
    type ScrollViewFadeClass = typeof ScrollViewFade;
    /**
     * @gir-type Alias
     */
    type ScrollableInterface = typeof Scrollable;
    /**
     * @gir-type Alias
     */
    type SettingsClass = typeof Settings;
    /**
     * A type representing -st-shadow attributes
     *
     * {@link St.Shadow} is a boxed type for storing attributes of the -st-shadow
     * property, modelled liberally after the CSS3 box-shadow property.
     * See http://www.css3.info/preview/box-shadow/
     * @gir-type Struct
     */
    class Shadow {
        static $gtype: GObject.GType<Shadow>;

        // Fields

        color: Cogl.Color;
        xoffset: number;
        yoffset: number;
        blur: number;
        spread: number;
        inset: boolean;

        // Constructors

        constructor(
            properties?: Partial<{
                color: Cogl.Color;
                xoffset: number;
                yoffset: number;
                blur: number;
                spread: number;
                inset: boolean;
            }>,
        );

        static ['new'](
            color: Cogl.Color,
            xoffset: number,
            yoffset: number,
            blur: number,
            spread: number,
            inset: boolean,
        ): Shadow;

        // Methods

        /**
         * Check if two shadow objects are identical. Note that two shadows may
         * compare non-identically if they differ only by floating point rounding
         * errors.
         * @param other a different {@link St.Shadow}
         * @returns `true` if the two shadows are identical
         */
        equal(other: Shadow): boolean;
        /**
         * Gets the box used to paint `shadow`, which will be partly
         * outside of `actor_box`
         * @param actor_box the box allocated to a `ClutterAlctor`
         * @param shadow_box computed box occupied by `shadow`
         */
        get_box(actor_box: Clutter.ActorBox, shadow_box: Clutter.ActorBox): void;
        /**
         * Atomically increments the reference count of `shadow` by one.
         * @returns the passed in {@link St.Shadow}.
         */
        ref(): Shadow;
        /**
         * Atomically decrements the reference count of `shadow` by one.
         * If the reference count drops to 0, all memory allocated by the
         * {@link St.Shadow} is released.
         */
        unref(): void;
    }

    /**
     * A helper for implementing a drop shadow on a actor.
     * The actor is expected to recreate the helper whenever its contents
     * or size change. Then, it would call `st_shadow_helper_paint()` inside
     * its `paint()` virtual function.
     * @gir-type Struct
     */
    class ShadowHelper {
        static $gtype: GObject.GType<ShadowHelper>;

        // Constructors

        constructor(shadow: Shadow);

        static ['new'](shadow: Shadow): ShadowHelper;

        // Methods

        /**
         * @returns a copy of `helper`
         */
        copy(): ShadowHelper;
        /**
         * Free resources associated with `helper`.
         */
        free(): void;
        /**
         * Paints the shadow associated with `helper` This must only
         * be called from the implementation of ClutterActor::paint().
         * @param node a {@link Clutter.PaintNode}
         * @param actor_box the bounding box of the shadow
         * @param paint_opacity the opacity at which the shadow is painted
         */
        paint(node: Clutter.PaintNode, actor_box: Clutter.ActorBox, paint_opacity: number): void;
        /**
         * Update `helper` from `source`.
         * @param source a {@link Clutter.Actor}
         * @param paint_context a {@link Clutter.PaintContext}
         */
        update(source: Clutter.Actor, paint_context: Clutter.PaintContext): void;
    }

    /**
     * @gir-type Alias
     */
    type TextureCacheClass = typeof TextureCache;
    /**
     * @gir-type Alias
     */
    type ThemeClass = typeof Theme;
    /**
     * @gir-type Alias
     */
    type ThemeContextClass = typeof ThemeContext;
    /**
     * @gir-type Alias
     */
    type ThemeNodeClass = typeof ThemeNode;
    /**
     * @gir-type Struct
     */
    class ThemeNodePaintState {
        static $gtype: GObject.GType<ThemeNodePaintState>;

        // Fields

        node: ThemeNode;
        alloc_width: number;
        alloc_height: number;
        box_shadow_width: number;
        box_shadow_height: number;
        resource_scale: number;
        box_shadow_pipeline: Cogl.Pipeline;
        prerendered_texture: Cogl.Texture;
        prerendered_pipeline: Cogl.Pipeline;
        corner_pipeline: Cogl.Pipeline[];

        // Methods

        /**
         * @param other
         */
        copy(other: ThemeNodePaintState): void;
        free(): void;
        init(): void;
        invalidate(): void;
        /**
         * @param file
         */
        invalidate_for_file(file: Gio.File): boolean;
        /**
         * @param node
         */
        set_node(node: ThemeNode): void;
    }

    /**
     * @gir-type Alias
     */
    type ViewportClass = typeof Viewport;
    /**
     * @gir-type Alias
     */
    type WidgetAccessibleClass = typeof WidgetAccessible;
    /**
     * @gir-type Alias
     */
    type WidgetClass = typeof Widget;
    namespace Scrollable {
        /**
         * Interface for implementing Scrollable.
         * Contains only the virtual methods that need to be implemented.
         */
        interface Interface {
            // Virtual methods

            /**
             * @param hadjustment
             * @param vadjustment
             * @virtual
             */
            vfunc_get_adjustments(hadjustment: Adjustment, vadjustment: Adjustment): void;
            /**
             * This method should be implemented by classes implementing the {@link St.Scrollable}
             * interface.
             *
             * JavaScript code should do this by overriding the `vfunc_set_adjustments()`
             * method.
             * @param hadjustment the horizontal {@link St.Adjustment}
             * @param vadjustment the vertical {@link St.Adjustment}
             * @virtual
             */
            vfunc_set_adjustments(hadjustment: Adjustment, vadjustment: Adjustment): void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            hadjustment: Adjustment;
            vadjustment: Adjustment;
        }
    }

    export interface ScrollableNamespace {
        $gtype: GObject.GType<Scrollable>;
        prototype: Scrollable;
    }
    /**
     * A {@link Clutter.Actor} that can be scrolled
     *
     * The {@link St.Scrollable} interface is exposed by actors that support scrolling.
     *
     * The interface contains methods for getting and setting the adjustments
     * for scrolling; these adjustments will be used to hook the scrolled
     * position up to scrollbars or other external controls. When a {@link St.Scrollable}
     * is added to a parent container, the parent container is responsible
     * for setting the adjustments. The parent container then sets the adjustments
     * back to `null` when the scrollable is removed.
     *
     * For {@link St.Scrollable} supporting height-for-width size negotiation, size
     * negotiation works as follows:
     *
     * In response to `get_preferred_width()`, the scrollable should report
     * the minimum width at which horizontal scrolling is needed for the
     * preferred width, and natural width of the actor when not
     * horizontally scrolled as the natural width.
     *
     * The for_width passed into `get_preferred_height()` is the width at which
     * the scrollable will be allocated; this will be smaller than the minimum
     * width when scrolling horizontally, so the scrollable may want to adjust
     * it up to the minimum width before computing a preferred height. (Other
     * scrollables may want to fit as much content into the allocated area
     * as possible and only scroll what absolutely needs to scroll - consider,
     * for example, the line-wrapping behavior of a text editor where there
     * is a long line without any spaces.) As for width, `get_preferred_height()`
     * should return the minimum size at which no scrolling is needed for the
     * minimum height, and the natural size of the actor when not vertically scrolled
     * as the natural height.
     *
     * In `allocate()` the allocation box passed in will be actual allocated
     * size of the actor so will be smaller than the reported minimum
     * width and/or height when scrolling is present. Any scrollable actor
     * must support being allocated at any size down to 0x0 without
     * crashing, however if the actor has content around the scrolled area
     * and has an absolute minimum size that's bigger than 0x0 its
     * acceptable for it to misdraw between 0x0 and the absolute minimum
     * size. It's up to the application author to avoid letting the user
     * resize the scroll view small enough so that the scrolled area
     * vanishes.
     *
     * In response to allocate, in addition to normal handling, the
     * scrollable should also set the limits of the the horizontal and
     * vertical adjustments that were set on it earlier. The standard
     * settings are:
     *
     *  lower: 0
     *  page_size: allocated size (width or height)
     *  upper: MAX (total size of the scrolled area,allocated_size)
     *  step_increment: natural row/column height or a fixed fraction of the page size
     *  page_increment: page_size - step_increment
     * @gir-type Interface
     */
    interface Scrollable extends GObject.Object, Scrollable.Interface {
        // Properties

        /**
         * The horizontal {@link St.Adjustment} used by the {@link St.Scrollable}.
         *
         * Implementations should override this property to provide read-write
         * access to the {@link St.Adjustment}.
         *
         * JavaScript code may override this as demonstrated below:
         *
         * ```js
         * export const MyScrollable = GObject.registerClass({
         *     Properties: {
         *         'hadjustment': GObject.ParamSpec.override(
         *             'hadjustment',
         *             St.Scrollable
         *         )
         *     }
         * }, class MyScrollable extends St.Scrollable {
         *
         *     get `hadjustment()` {
         *         return this._hadjustment || null;
         *     }
         *
         *     set hadjustment(adjustment) {
         *         if (this.hadjustment === adjustment)
         *             return;
         *
         *         this._hadjustment = adjustment;
         *         this.notify('hadjustment');
         *     }
         * });
         * ```
         */
        get hadjustment(): Adjustment;
        set hadjustment(val: Adjustment);
        /**
         * The vertical {@link St.Adjustment} used by the {@link St.Scrollable}.
         *
         * Implementations should override this property to provide read-write
         * access to the {@link St.Adjustment}.
         *
         * See {@link St.Scrollable.hadjustment} for an example of how to override this
         * property in JavaScript code.
         */
        get vadjustment(): Adjustment;
        set vadjustment(val: Adjustment);

        // Methods

        /**
         * @param hadjustment
         * @param vadjustment
         */
        get_adjustments(hadjustment: Adjustment, vadjustment: Adjustment): void;
        /**
         * This method should be implemented by classes implementing the {@link St.Scrollable}
         * interface.
         *
         * JavaScript code should do this by overriding the `vfunc_set_adjustments()`
         * method.
         * @param hadjustment the horizontal {@link St.Adjustment}
         * @param vadjustment the vertical {@link St.Adjustment}
         */
        set_adjustments(hadjustment: Adjustment, vadjustment: Adjustment): void;
    }

    export const Scrollable: ScrollableNamespace & {
        new (): Scrollable; // This allows `obj instanceof Scrollable`
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

export default St;

// END
