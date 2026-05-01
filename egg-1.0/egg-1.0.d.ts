
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
import type Gtk from '@girs/gtk-3.0';
import type xlib from '@girs/xlib-2.0';
import type Gdk from '@girs/gdk-3.0';
import type cairo from 'cairo';
import type GObject from '@girs/gobject-2.0';
import type GLib from '@girs/glib-2.0';
import type Pango from '@girs/pango-1.0';
import type HarfBuzz from '@girs/harfbuzz-0.0';
import type freetype2 from '@girs/freetype2-2.0';
import type Gio from '@girs/gio-2.0';
import type GModule from '@girs/gmodule-2.0';
import type GdkPixbuf from '@girs/gdkpixbuf-2.0';
import type Atk from '@girs/atk-1.0';

export namespace Egg {

    /**
     * Egg-1.0
     */


    /**
     * @gir-type Enum
     */
    export namespace AnimationMode {
        export const $gtype: GObject.GType<AnimationMode>;
    }

    /**
     * @gir-type Enum
     */
    enum AnimationMode {
        LINEAR,
        EASE_IN_QUAD,
        EASE_IN_OUT_QUAD,
        EASE_OUT_QUAD,
        EASE_IN_CUBIC,
        EASE_OUT_CUBIC,
        EASE_IN_OUT_CUBIC,
    }


    /**
     * @gir-type Enum
     */
    export namespace SliderPosition {
        export const $gtype: GObject.GType<SliderPosition>;
    }

    /**
     * @gir-type Enum
     */
    enum SliderPosition {
        NONE,
        TOP,
        RIGHT,
        BOTTOM,
        LEFT,
    }


    /**
     * @gir-type Enum
     */
    export namespace ThreeGridColumn {
        export const $gtype: GObject.GType<ThreeGridColumn>;
    }

    /**
     * @gir-type Enum
     */
    enum ThreeGridColumn {
        LEFT,
        CENTER,
        RIGHT,
    }


    const COUNTER_REQUIRES_ATOMIC: number;

    function counter_arena_get_default(): CounterArena;

    /**
     * Helper function to "humanize" a {@link GLib.DateTime} into a relative time
     * relationship string.
     * @param self A {@link GLib.DateTime}
     * @returns A newly allocated string describing the   date and time imprecisely such as "Yesterday".
     */
    function date_time_format_for_display(self: GLib.DateTime): string;

    /**
     * Creates a new frame source that will execute when the timeout interval
     * for the source has elapsed. The timing will try to synchronize based
     * on the end time of the animation.
     * @param frames_per_sec Target frames per second.
     * @param callback A {@link GLib.SourceFunc} to execute.
     * @returns A source id that can be removed with `g_source_remove()`.
     */
    function frame_source_add(frames_per_sec: number, callback: GLib.SourceFunc): number;

    function get_current_cpu_call(): number;

    /**
     * @gir-type Callback
     */
    interface CounterForeachFunc {
        (counter: Counter): void;
    }

    /**
     * @gir-type Callback
     */
    interface TaskCacheCallback {
        (self: TaskCache, key: (any | null), task: Gio.Task): void;
    }

    namespace Animation {
        // Signal signatures
        interface SignalSignatures extends GObject.InitiallyUnowned.SignalSignatures {
            /**
             * The "tick" signal is emitted on each frame in the animation.
             * @signal
             * @run-first
             */
            tick: () => void;
            "notify::duration": (pspec: GObject.ParamSpec) => void;
            "notify::frame-clock": (pspec: GObject.ParamSpec) => void;
            "notify::mode": (pspec: GObject.ParamSpec) => void;
            "notify::target": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends GObject.InitiallyUnowned.ConstructorProps {
            duration: number;
            frame_clock: Gdk.FrameClock;
            frameClock: Gdk.FrameClock;
            mode: AnimationMode;
            target: GObject.Object;
        }
    }

    /**
     * @gir-type Class
     */
    class Animation extends GObject.InitiallyUnowned {
        static $gtype: GObject.GType<Animation>;

        // Properties
        /**
         * The "duration" property is the total number of milliseconds that the
         * animation should run before being completed.
         * @construct-only
         */
        set duration(val: number);

        /**
         * @construct-only
         */
        set frame_clock(val: Gdk.FrameClock);

        /**
         * @construct-only
         */
        set frameClock(val: Gdk.FrameClock);

        /**
         * The "mode" property is the Alpha function that should be used to
         * determine the offset within the animation based on the current
         * offset in the animations duration.
         * @construct-only
         */
        set mode(val: AnimationMode);

        /**
         * The "target" property is the {@link GObject.Object} that should have its properties
         * animated.
         * @construct-only
         */
        set target(val: GObject.Object);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Animation.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<Animation.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals
        /** @signal */
        connect<K extends keyof Animation.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Animation.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof Animation.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Animation.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof Animation.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<Animation.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Static methods
        /**
         * @param monitor 
         * @param from_value 
         * @param to_value 
         */
        static calculate_duration(monitor: Gdk.Monitor, from_value: number, to_value: number): number;

        // Methods
        /**
         * Adds a new property to the set of properties to be animated during the
         * lifetime of the animation.
         * 
         * Side effects: None.
         * @param pspec A {@link GObject.ParamSpec} of `target` or a {@link Gtk.Widget}<!-- -->'s parent.
         * @param value The new value for the property at the end of the animation.
         */
        add_property(pspec: GObject.ParamSpec, value: (GObject.Value | any)): void;

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


    namespace BindingGroup {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            "notify::source": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps {
            source: (GObject.Object | null);
        }
    }

    /**
     * {@link Egg.BindingGroup} manages to simplify the process of binding
     * many properties from a {@link GObject.Object} as a group. As such there is no API
     * to unbind a property from the group.
     * 
     * In particular, this allows you to change the source instance for the
     * bindings. This automatically causes the unbinding of the properties
     * from the old instance and binding to the new instance.
     * 
     * This should not be confused with `GtkBindingGroup`.
     * @gir-type Class
     */
    class BindingGroup extends GObject.Object {
        static $gtype: GObject.GType<BindingGroup>;

        // Properties
        /**
         * The source object used for binding properties.
         */
        get source(): (GObject.Object | null);
        set source(val: (GObject.Object | null));

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: BindingGroup.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<BindingGroup.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](): BindingGroup;

        // Signals
        /** @signal */
        connect<K extends keyof BindingGroup.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, BindingGroup.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof BindingGroup.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, BindingGroup.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof BindingGroup.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<BindingGroup.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Methods
        /**
         * Creates a binding between `source_property` on the source object
         * and `target_property` on `target`. Whenever the `source_property`
         * is changed the `target_property` is updated using the same value.
         * The binding flags #G_BINDING_SYNC_CREATE is automatically specified.
         * 
         * See: `g_object_bind_property()`.
         * @param source_property the property on the source to bind
         * @param target the target {@link GObject.Object}
         * @param target_property the property on `target` to bind
         * @param flags the flags used to create the {@link GObject.Binding}
         */
        bind(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): void;

        /**
         * Creates a binding between `source_property` on the source object and
         * `target_property` on `target`, allowing you to set the transformation
         * functions to be used by the binding. The binding flags
         * #G_BINDING_SYNC_CREATE is automatically specified.
         * 
         * This function is the language bindings friendly version of
         * `egg_binding_group_bind_property_full()`, using `GClosures`
         * instead of function pointers.
         * 
         * See: `g_object_bind_property_with_closures()`.
         * @param source_property the property on the source to bind
         * @param target the target {@link GObject.Object}
         * @param target_property the property on `target` to bind
         * @param flags the flags used to create the {@link GObject.Binding}
         * @param transform_to a {@link GObject.Closure} wrapping the     transformation function from the source object to the `target`,     or `null` to use the default
         * @param transform_from a {@link GObject.Closure} wrapping the     transformation function from the `target` to the source object,     or `null` to use the default
         */
        bind_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: (GObject.Closure | null), transform_from: (GObject.Closure | null)): void;

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
         * @param source the source {@link GObject.Object}
         */
        set_source(source: (GObject.Object | null)): void;
    }


    namespace Box {
        // Signal signatures
        interface SignalSignatures extends Gtk.Box.SignalSignatures {
            "notify::max-width-request": (pspec: GObject.ParamSpec) => void;
            "notify::baseline-position": (pspec: GObject.ParamSpec) => void;
            "notify::homogeneous": (pspec: GObject.ParamSpec) => void;
            "notify::spacing": (pspec: GObject.ParamSpec) => void;
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
            "notify::orientation": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends Gtk.Box.ConstructorProps, Atk.ImplementorIface.ConstructorProps, Gtk.Buildable.ConstructorProps, Gtk.Orientable.ConstructorProps {
            max_width_request: number;
            maxWidthRequest: number;
        }
    }

    /**
     * @gir-type Class
     */
    class Box extends Gtk.Box implements Atk.ImplementorIface, Gtk.Buildable, Gtk.Orientable {
        static $gtype: GObject.GType<Box>;

        // Properties
        get max_width_request(): number;
        set max_width_request(val: number);

        get maxWidthRequest(): number;
        set maxWidthRequest(val: number);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Box.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<Box.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](): Box;

        // Signals
        /** @signal */
        connect<K extends keyof Box.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Box.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof Box.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Box.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof Box.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<Box.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Methods
        get_max_width_request(): number;

        /**
         * @param max_width_request 
         */
        set_max_width_request(max_width_request: number): void;

        /**
         * The orientation of the orientable.
         * @since 2.16
         * @default Gtk.Orientation.HORIZONTAL
          * @category Inherited from Gtk.Orientable
         */
        get orientation(): Gtk.Orientation;
        set orientation(val: Gtk.Orientation);

        /**
         * Retrieves the orientation of the `orientable`.
         * @returns the orientation of the `orientable`.
         */
        get_orientation(): Gtk.Orientation;

        /**
         * Sets the orientation of the `orientable`.
         * @param orientation the orientable’s new orientation.
         */
        set_orientation(orientation: Gtk.Orientation): void;
    }


    namespace CenteringBin {
        // Signal signatures
        interface SignalSignatures extends Gtk.Bin.SignalSignatures {
            "notify::max-width-request": (pspec: GObject.ParamSpec) => void;
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
        interface ConstructorProps extends Gtk.Bin.ConstructorProps, Atk.ImplementorIface.ConstructorProps, Gtk.Buildable.ConstructorProps {
            max_width_request: number;
            maxWidthRequest: number;
        }
    }

    /**
     * First off, you probably want to use GtkBox with a center widget instead
     * of this widget. However, the case where this widget is useful is when
     * you cannot control your layout within the width of the toplevel, but
     * still want your child centered within the toplevel.
     * 
     * This is done by translating coordinates of the widget with respect to
     * the toplevel and anchoring the child at TRUE_CENTER-(alloc.width/2).
     * @gir-type Class
     */
    class CenteringBin extends Gtk.Bin implements Atk.ImplementorIface, Gtk.Buildable {
        static $gtype: GObject.GType<CenteringBin>;

        // Properties
        get max_width_request(): number;
        set max_width_request(val: number);

        get maxWidthRequest(): number;
        set maxWidthRequest(val: number);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: CenteringBin.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<CenteringBin.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](): CenteringBin;

        // Signals
        /** @signal */
        connect<K extends keyof CenteringBin.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, CenteringBin.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof CenteringBin.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, CenteringBin.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof CenteringBin.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<CenteringBin.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
    }


    namespace ColumnLayout {
        // Signal signatures
        interface SignalSignatures extends Gtk.Container.SignalSignatures {
            "notify::column-spacing": (pspec: GObject.ParamSpec) => void;
            "notify::column-width": (pspec: GObject.ParamSpec) => void;
            "notify::max-columns": (pspec: GObject.ParamSpec) => void;
            "notify::row-spacing": (pspec: GObject.ParamSpec) => void;
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
        interface ConstructorProps extends Gtk.Container.ConstructorProps, Atk.ImplementorIface.ConstructorProps, Gtk.Buildable.ConstructorProps {
            column_spacing: number;
            columnSpacing: number;
            column_width: number;
            columnWidth: number;
            max_columns: number;
            maxColumns: number;
            row_spacing: number;
            rowSpacing: number;
        }
    }

    /**
     * @gir-type Class
     */
    class ColumnLayout extends Gtk.Container implements Atk.ImplementorIface, Gtk.Buildable {
        static $gtype: GObject.GType<ColumnLayout>;

        // Properties
        get column_spacing(): number;
        set column_spacing(val: number);

        get columnSpacing(): number;
        set columnSpacing(val: number);

        get column_width(): number;
        set column_width(val: number);

        get columnWidth(): number;
        set columnWidth(val: number);

        get max_columns(): number;
        set max_columns(val: number);

        get maxColumns(): number;
        set maxColumns(val: number);

        get row_spacing(): number;
        set row_spacing(val: number);

        get rowSpacing(): number;
        set rowSpacing(val: number);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: ColumnLayout.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<ColumnLayout.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](): ColumnLayout;

        // Signals
        /** @signal */
        connect<K extends keyof ColumnLayout.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, ColumnLayout.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof ColumnLayout.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, ColumnLayout.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof ColumnLayout.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<ColumnLayout.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Methods
        get_column_spacing(): number;

        get_column_width(): number;

        get_max_columns(): number;

        get_row_spacing(): number;

        /**
         * @param column_spacing 
         */
        set_column_spacing(column_spacing: number): void;

        /**
         * @param column_width 
         */
        set_column_width(column_width: number): void;

        /**
         * @param max_columns 
         */
        set_max_columns(max_columns: number): void;

        /**
         * @param row_spacing 
         */
        set_row_spacing(row_spacing: number): void;
    }


    namespace ElasticBin {
        // Signal signatures
        interface SignalSignatures extends Gtk.Bin.SignalSignatures {
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
        interface ConstructorProps extends Gtk.Bin.ConstructorProps, Atk.ImplementorIface.ConstructorProps, Gtk.Buildable.ConstructorProps {

        }
    }

    /**
     * @gir-type Class
     */
    class ElasticBin extends Gtk.Bin implements Atk.ImplementorIface, Gtk.Buildable {
        static $gtype: GObject.GType<ElasticBin>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: ElasticBin.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<ElasticBin.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](): ElasticBin;

        // Signals
        /** @signal */
        connect<K extends keyof ElasticBin.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, ElasticBin.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof ElasticBin.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, ElasticBin.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof ElasticBin.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<ElasticBin.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
    }


    namespace EmptyState {
        // Signal signatures
        interface SignalSignatures extends Gtk.Bin.SignalSignatures {
            "notify::icon-name": (pspec: GObject.ParamSpec) => void;
            "notify::pixel-size": (pspec: GObject.ParamSpec) => void;
            "notify::resource": (pspec: GObject.ParamSpec) => void;
            "notify::subtitle": (pspec: GObject.ParamSpec) => void;
            "notify::title": (pspec: GObject.ParamSpec) => void;
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
        interface ConstructorProps extends Gtk.Bin.ConstructorProps, Atk.ImplementorIface.ConstructorProps, Gtk.Buildable.ConstructorProps {
            icon_name: string;
            iconName: string;
            pixel_size: number;
            pixelSize: number;
            resource: string;
            subtitle: string;
            title: string;
        }
    }

    /**
     * @gir-type Class
     */
    class EmptyState extends Gtk.Bin implements Atk.ImplementorIface, Gtk.Buildable {
        static $gtype: GObject.GType<EmptyState>;

        // Properties
        get icon_name(): string;
        set icon_name(val: string);

        get iconName(): string;
        set iconName(val: string);

        get pixel_size(): number;
        set pixel_size(val: number);

        get pixelSize(): number;
        set pixelSize(val: number);

        /**
         * @write-only
         */
        set resource(val: string);

        get subtitle(): string;
        set subtitle(val: string);

        get title(): string;
        set title(val: string);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: EmptyState.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<EmptyState.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](): EmptyState;

        // Signals
        /** @signal */
        connect<K extends keyof EmptyState.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, EmptyState.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof EmptyState.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, EmptyState.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof EmptyState.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<EmptyState.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Methods
        get_icon_name(): string;

        get_subtitle(): string;

        get_title(): string;

        /**
         * @param icon_name 
         */
        set_icon_name(icon_name: string): void;

        /**
         * @param resource 
         */
        set_resource(resource: string): void;

        /**
         * @param title 
         */
        set_subtitle(title: string): void;

        /**
         * @param title 
         */
        set_title(title: string): void;
    }


    namespace EntryBox {
        // Signal signatures
        interface SignalSignatures extends Gtk.Box.SignalSignatures {
            "notify::max-width-chars": (pspec: GObject.ParamSpec) => void;
            "notify::baseline-position": (pspec: GObject.ParamSpec) => void;
            "notify::homogeneous": (pspec: GObject.ParamSpec) => void;
            "notify::spacing": (pspec: GObject.ParamSpec) => void;
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
            "notify::orientation": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends Gtk.Box.ConstructorProps, Atk.ImplementorIface.ConstructorProps, Gtk.Buildable.ConstructorProps, Gtk.Orientable.ConstructorProps {
            max_width_chars: number;
            maxWidthChars: number;
        }
    }

    /**
     * @gir-type Class
     */
    class EntryBox extends Gtk.Box implements Atk.ImplementorIface, Gtk.Buildable, Gtk.Orientable {
        static $gtype: GObject.GType<EntryBox>;

        // Properties
        get max_width_chars(): number;
        set max_width_chars(val: number);

        get maxWidthChars(): number;
        set maxWidthChars(val: number);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: EntryBox.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<EntryBox.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](): EntryBox;

        // Signals
        /** @signal */
        connect<K extends keyof EntryBox.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, EntryBox.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof EntryBox.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, EntryBox.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof EntryBox.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<EntryBox.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        /**
         * The orientation of the orientable.
         * @since 2.16
         * @default Gtk.Orientation.HORIZONTAL
          * @category Inherited from Gtk.Orientable
         */
        get orientation(): Gtk.Orientation;
        set orientation(val: Gtk.Orientation);

        /**
         * Retrieves the orientation of the `orientable`.
         * @returns the orientation of the `orientable`.
         */
        get_orientation(): Gtk.Orientation;

        /**
         * Sets the orientation of the `orientable`.
         * @param orientation the orientable’s new orientation.
         */
        set_orientation(orientation: Gtk.Orientation): void;
    }


    namespace FileChooserEntry {
        // Signal signatures
        interface SignalSignatures extends Gtk.Bin.SignalSignatures {
            "notify::action": (pspec: GObject.ParamSpec) => void;
            "notify::create-folders": (pspec: GObject.ParamSpec) => void;
            "notify::do-overwrite-confirmation": (pspec: GObject.ParamSpec) => void;
            "notify::file": (pspec: GObject.ParamSpec) => void;
            "notify::filter": (pspec: GObject.ParamSpec) => void;
            "notify::local-only": (pspec: GObject.ParamSpec) => void;
            "notify::max-width-chars": (pspec: GObject.ParamSpec) => void;
            "notify::show-hidden": (pspec: GObject.ParamSpec) => void;
            "notify::title": (pspec: GObject.ParamSpec) => void;
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
        interface ConstructorProps extends Gtk.Bin.ConstructorProps, Atk.ImplementorIface.ConstructorProps, Gtk.Buildable.ConstructorProps {
            action: Gtk.FileChooserAction;
            create_folders: boolean;
            createFolders: boolean;
            do_overwrite_confirmation: boolean;
            doOverwriteConfirmation: boolean;
            file: (Gio.File | null);
            filter: Gtk.FileFilter;
            local_only: boolean;
            localOnly: boolean;
            max_width_chars: number;
            maxWidthChars: number;
            show_hidden: boolean;
            showHidden: boolean;
            title: string;
        }
    }

    /**
     * @gir-type Class
     */
    class FileChooserEntry extends Gtk.Bin implements Atk.ImplementorIface, Gtk.Buildable {
        static $gtype: GObject.GType<FileChooserEntry>;

        // Properties
        get action(): Gtk.FileChooserAction;
        set action(val: Gtk.FileChooserAction);

        get create_folders(): boolean;
        set create_folders(val: boolean);

        get createFolders(): boolean;
        set createFolders(val: boolean);

        get do_overwrite_confirmation(): boolean;
        set do_overwrite_confirmation(val: boolean);

        get doOverwriteConfirmation(): boolean;
        set doOverwriteConfirmation(val: boolean);

        get file(): (Gio.File | null);
        set file(val: (Gio.File | null));

        get filter(): Gtk.FileFilter;
        set filter(val: Gtk.FileFilter);

        get local_only(): boolean;
        set local_only(val: boolean);

        get localOnly(): boolean;
        set localOnly(val: boolean);

        get max_width_chars(): number;
        set max_width_chars(val: number);

        get maxWidthChars(): number;
        set maxWidthChars(val: number);

        get show_hidden(): boolean;
        set show_hidden(val: boolean);

        get showHidden(): boolean;
        set showHidden(val: boolean);

        get title(): string;
        set title(val: string);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: FileChooserEntry.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<FileChooserEntry.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](title: string, action: Gtk.FileChooserAction): FileChooserEntry;

        // Signals
        /** @signal */
        connect<K extends keyof FileChooserEntry.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, FileChooserEntry.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof FileChooserEntry.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, FileChooserEntry.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof FileChooserEntry.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<FileChooserEntry.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Methods
        /**
         * Returns the currently selected file or `null` if there is no selection.
         * @returns A {@link Gio.File} or `null`.
         */
        get_file(): (Gio.File | null);

        /**
         * @param file 
         */
        set_file(file: Gio.File): void;
    }


    namespace ListBox {
        // Signal signatures
        interface SignalSignatures extends Gtk.ListBox.SignalSignatures {
            "notify::property-name": (pspec: GObject.ParamSpec) => void;
            "notify::row-type": (pspec: GObject.ParamSpec) => void;
            "notify::row-type-name": (pspec: GObject.ParamSpec) => void;
            "notify::activate-on-single-click": (pspec: GObject.ParamSpec) => void;
            "notify::selection-mode": (pspec: GObject.ParamSpec) => void;
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
        interface ConstructorProps extends Gtk.ListBox.ConstructorProps, Atk.ImplementorIface.ConstructorProps, Gtk.Buildable.ConstructorProps {
            property_name: string;
            propertyName: string;
            row_type: GObject.GTypeInput;
            rowType: GObject.GTypeInput;
            row_type_name: string;
            rowTypeName: string;
        }
    }

    /**
     * @gir-type Class
     */
    class ListBox extends Gtk.ListBox implements Atk.ImplementorIface, Gtk.Buildable {
        static $gtype: GObject.GType<ListBox>;

        // Properties
        /**
         * @construct-only
         */
        get property_name(): string;

        /**
         * @construct-only
         */
        get propertyName(): string;

        /**
         * @construct-only
         */
        get row_type(): GObject.GType;

        /**
         * @construct-only
         */
        get rowType(): GObject.GType;

        /**
         * @construct-only
         */
        set row_type_name(val: string);

        /**
         * @construct-only
         */
        set rowTypeName(val: string);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: ListBox.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<ListBox.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](row_type: GObject.GType, property_name: string): ListBox;

        // Conflicted with Gtk.ListBox.new
        static ["new"](...args: never[]): any;

        // Signals
        /** @signal */
        connect<K extends keyof ListBox.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, ListBox.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof ListBox.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, ListBox.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof ListBox.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<ListBox.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Methods
        /**
         * @returns A {@link Gio.ListModel} or `null`.
         */
        get_model(): (Gio.ListModel | null);

        get_property_name(): string;

        get_row_type(): GObject.GType;

        /**
         * @param model 
         */
        set_model(model: Gio.ListModel): void;
    }


    namespace MenuManager {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
        }

        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps {

        }
    }

    /**
     * The goal of {@link Egg.MenuManager} is to simplify the process of merging multiple
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
     * submenu links. This allows the {@link Egg.MenuManager} to be in full control of
     * the generated menus.
     * 
     * `egg_menu_manager_get_menu_by_id()` will always return a {@link Gio.Menu}, however
     * that menu may contain no children until something has extended it later
     * on during the application process.
     * @gir-type Class
     */
    class MenuManager extends GObject.Object {
        static $gtype: GObject.GType<MenuManager>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: MenuManager.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<MenuManager.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](): MenuManager;

        // Signals
        /** @signal */
        connect<K extends keyof MenuManager.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, MenuManager.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof MenuManager.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, MenuManager.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof MenuManager.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<MenuManager.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Methods
        /**
         * @param filename 
         */
        add_filename(filename: string): number;

        /**
         * @param resource 
         */
        add_resource(resource: string): number;

        /**
         * @param menu_id 
         * @returns A {@link Gio.Menu}.
         */
        get_menu_by_id(menu_id: string): Gio.Menu;

        /**
         * @param merge_id 
         */
        remove(merge_id: number): void;
    }


    namespace PillBox {
        // Signal signatures
        interface SignalSignatures extends Gtk.EventBox.SignalSignatures {
            "notify::label": (pspec: GObject.ParamSpec) => void;
            "notify::above-child": (pspec: GObject.ParamSpec) => void;
            "notify::visible-window": (pspec: GObject.ParamSpec) => void;
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
        interface ConstructorProps extends Gtk.EventBox.ConstructorProps, Atk.ImplementorIface.ConstructorProps, Gtk.Buildable.ConstructorProps {
            label: string;
        }
    }

    /**
     * @gir-type Class
     */
    class PillBox extends Gtk.EventBox implements Atk.ImplementorIface, Gtk.Buildable {
        static $gtype: GObject.GType<PillBox>;

        // Properties
        get label(): string;
        set label(val: string);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: PillBox.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<PillBox.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](label: string): PillBox;

        // Conflicted with Gtk.EventBox.new
        static ["new"](...args: never[]): any;

        // Signals
        /** @signal */
        connect<K extends keyof PillBox.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, PillBox.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof PillBox.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, PillBox.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof PillBox.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<PillBox.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Methods
        get_label(): string;

        /**
         * @param label 
         */
        set_label(label: string): void;
    }


    namespace PriorityBox {
        // Signal signatures
        interface SignalSignatures extends Gtk.Box.SignalSignatures {
            "notify::baseline-position": (pspec: GObject.ParamSpec) => void;
            "notify::homogeneous": (pspec: GObject.ParamSpec) => void;
            "notify::spacing": (pspec: GObject.ParamSpec) => void;
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
            "notify::orientation": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends Gtk.Box.ConstructorProps, Atk.ImplementorIface.ConstructorProps, Gtk.Buildable.ConstructorProps, Gtk.Orientable.ConstructorProps {

        }
    }

    /**
     * This is like a {@link Gtk.Box} but uses stable priorities to sort.
     * @gir-type Class
     */
    class PriorityBox extends Gtk.Box implements Atk.ImplementorIface, Gtk.Buildable, Gtk.Orientable {
        static $gtype: GObject.GType<PriorityBox>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: PriorityBox.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<PriorityBox.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](): PriorityBox;

        // Signals
        /** @signal */
        connect<K extends keyof PriorityBox.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, PriorityBox.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof PriorityBox.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, PriorityBox.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof PriorityBox.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<PriorityBox.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        /**
         * The orientation of the orientable.
         * @since 2.16
         * @default Gtk.Orientation.HORIZONTAL
          * @category Inherited from Gtk.Orientable
         */
        get orientation(): Gtk.Orientation;
        set orientation(val: Gtk.Orientation);

        /**
         * Retrieves the orientation of the `orientable`.
         * @returns the orientation of the `orientable`.
         */
        get_orientation(): Gtk.Orientation;

        /**
         * Sets the orientation of the `orientable`.
         * @param orientation the orientable’s new orientation.
         */
        set_orientation(orientation: Gtk.Orientation): void;
    }


    namespace ProgressButton {
        // Signal signatures
        interface SignalSignatures extends Gtk.Button.SignalSignatures {
            "notify::progress": (pspec: GObject.ParamSpec) => void;
            "notify::show-progress": (pspec: GObject.ParamSpec) => void;
            "notify::always-show-image": (pspec: GObject.ParamSpec) => void;
            "notify::image": (pspec: GObject.ParamSpec) => void;
            "notify::image-position": (pspec: GObject.ParamSpec) => void;
            "notify::label": (pspec: GObject.ParamSpec) => void;
            "notify::relief": (pspec: GObject.ParamSpec) => void;
            "notify::use-stock": (pspec: GObject.ParamSpec) => void;
            "notify::use-underline": (pspec: GObject.ParamSpec) => void;
            "notify::xalign": (pspec: GObject.ParamSpec) => void;
            "notify::yalign": (pspec: GObject.ParamSpec) => void;
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
            "notify::action-name": (pspec: GObject.ParamSpec) => void;
            "notify::action-target": (pspec: GObject.ParamSpec) => void;
            "notify::related-action": (pspec: GObject.ParamSpec) => void;
            "notify::use-action-appearance": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends Gtk.Button.ConstructorProps, Atk.ImplementorIface.ConstructorProps, Gtk.Actionable.ConstructorProps, Gtk.Activatable.ConstructorProps, Gtk.Buildable.ConstructorProps {
            progress: number;
            show_progress: boolean;
            showProgress: boolean;
        }
    }

    /**
     * @gir-type Class
     */
    class ProgressButton extends Gtk.Button implements Atk.ImplementorIface, Gtk.Actionable, Gtk.Activatable, Gtk.Buildable {
        static $gtype: GObject.GType<ProgressButton>;

        // Properties
        get progress(): number;
        set progress(val: number);

        get show_progress(): boolean;
        set show_progress(val: boolean);

        get showProgress(): boolean;
        set showProgress(val: boolean);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: ProgressButton.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<ProgressButton.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](): ProgressButton;

        // Signals
        /** @signal */
        connect<K extends keyof ProgressButton.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, ProgressButton.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof ProgressButton.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, ProgressButton.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof ProgressButton.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<ProgressButton.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Methods
        get_progress(): number;

        get_show_progress(): boolean;

        /**
         * @param percentage 
         */
        set_progress(percentage: number): void;

        /**
         * @param show_progress 
         */
        set_show_progress(show_progress: boolean): void;

        /**
         * @default null
          * @category Inherited from Gtk.Actionable
         */
        get action_name(): (string | null);
        set action_name(val: (string | null));

        /**
         * @default null
          * @category Inherited from Gtk.Actionable
         */
        get actionName(): (string | null);
        set actionName(val: (string | null));

        /** @category Inherited from Gtk.Actionable */
        get action_target(): GLib.Variant;
        set action_target(val: GLib.Variant);

        /** @category Inherited from Gtk.Actionable */
        get actionTarget(): GLib.Variant;
        set actionTarget(val: GLib.Variant);

        /**
         * The action that this activatable will activate and receive
         * updates from for various states and possibly appearance.
         * 
         * > {@link Gtk.Activatable} implementors need to handle the this property and
         * > call `gtk_activatable_do_set_related_action()` when it changes.
         * @since 2.16
         * @deprecated since 3.10
          * @category Inherited from Gtk.Activatable
         */
        get related_action(): Gtk.Action;
        set related_action(val: Gtk.Action);

        /**
         * The action that this activatable will activate and receive
         * updates from for various states and possibly appearance.
         * 
         * > {@link Gtk.Activatable} implementors need to handle the this property and
         * > call `gtk_activatable_do_set_related_action()` when it changes.
         * @since 2.16
         * @deprecated since 3.10
          * @category Inherited from Gtk.Activatable
         */
        get relatedAction(): Gtk.Action;
        set relatedAction(val: Gtk.Action);

        /**
         * Whether this activatable should reset its layout
         * and appearance when setting the related action or when
         * the action changes appearance.
         * 
         * See the {@link Gtk.Action} documentation directly to find which properties
         * should be ignored by the {@link Gtk.Activatable} when this property is `false`.
         * 
         * > {@link Gtk.Activatable} implementors need to handle this property
         * > and call `gtk_activatable_sync_action_properties()` on the activatable
         * > widget when it changes.
         * @since 2.16
         * @deprecated since 3.10
         * @default true
          * @category Inherited from Gtk.Activatable
         */
        get use_action_appearance(): boolean;
        set use_action_appearance(val: boolean);

        /**
         * Whether this activatable should reset its layout
         * and appearance when setting the related action or when
         * the action changes appearance.
         * 
         * See the {@link Gtk.Action} documentation directly to find which properties
         * should be ignored by the {@link Gtk.Activatable} when this property is `false`.
         * 
         * > {@link Gtk.Activatable} implementors need to handle this property
         * > and call `gtk_activatable_sync_action_properties()` on the activatable
         * > widget when it changes.
         * @since 2.16
         * @deprecated since 3.10
         * @default true
          * @category Inherited from Gtk.Activatable
         */
        get useActionAppearance(): boolean;
        set useActionAppearance(val: boolean);

        /**
         * Gets the action name for `actionable`.
         * 
         * See `gtk_actionable_set_action_name()` for more information.
         * @returns the action name, or `null` if none is set
         */
        get_action_name(): (string | null);

        /**
         * Gets the current target value of `actionable`.
         * 
         * See `gtk_actionable_set_action_target_value()` for more information.
         * @returns the current target value
         */
        get_action_target_value(): GLib.Variant;

        /**
         * Specifies the name of the action with which this widget should be
         * associated.  If `action_name` is `null` then the widget will be
         * unassociated from any previous action.
         * 
         * Usually this function is used when the widget is located (or will be
         * located) within the hierarchy of a {@link Gtk.ApplicationWindow}.
         * 
         * Names are of the form “win.save” or “app.quit” for actions on the
         * containing {@link Gtk.ApplicationWindow} or its associated {@link Gtk.Application},
         * respectively.  This is the same form used for actions in the {@link Gio.Menu}
         * associated with the window.
         * @param action_name an action name, or `null`
         */
        set_action_name(action_name: (string | null)): void;

        /**
         * Sets the target value of an actionable widget.
         * 
         * If `target_value` is `null` then the target value is unset.
         * 
         * The target value has two purposes.  First, it is used as the
         * parameter to activation of the action associated with the
         * {@link Gtk.Actionable} widget. Second, it is used to determine if the widget
         * should be rendered as “active” — the widget is active if the state
         * is equal to the given target.
         * 
         * Consider the example of associating a set of buttons with a {@link Gio.Action}
         * with string state in a typical “radio button” situation.  Each button
         * will be associated with the same action, but with a different target
         * value for that action.  Clicking on a particular button will activate
         * the action with the target of that button, which will typically cause
         * the action’s state to change to that value.  Since the action’s state
         * is now equal to the target value of the button, the button will now
         * be rendered as active (and the other buttons, with different targets,
         * rendered inactive).
         * @param target_value a {@link GLib.Variant} to set as the target value, or `null`
         */
        set_action_target_value(target_value: (GLib.Variant | null)): void;

        /**
         * Sets the action-name and associated string target value of an
         * actionable widget.
         * 
         * `detailed_action_name` is a string in the format accepted by
         * `g_action_parse_detailed_name()`.
         * 
         * (Note that prior to version 3.22.25,
         * this function is only usable for actions with a simple "s" target, and
         * `detailed_action_name` must be of the form `"action::target"` where
         * `action` is the action name and `target` is the string to use
         * as the target.)
         * @param detailed_action_name the detailed action name
         */
        set_detailed_action_name(detailed_action_name: string): void;

        /**
         * Gets the action name for `actionable`.
         * 
         * See `gtk_actionable_set_action_name()` for more information.
         * @virtual
         */
        vfunc_get_action_name(): (string | null);

        /**
         * Gets the current target value of `actionable`.
         * 
         * See `gtk_actionable_set_action_target_value()` for more information.
         * @virtual
         */
        vfunc_get_action_target_value(): GLib.Variant;

        /**
         * Specifies the name of the action with which this widget should be
         * associated.  If `action_name` is `null` then the widget will be
         * unassociated from any previous action.
         * 
         * Usually this function is used when the widget is located (or will be
         * located) within the hierarchy of a {@link Gtk.ApplicationWindow}.
         * 
         * Names are of the form “win.save” or “app.quit” for actions on the
         * containing {@link Gtk.ApplicationWindow} or its associated {@link Gtk.Application},
         * respectively.  This is the same form used for actions in the {@link Gio.Menu}
         * associated with the window.
         * @param action_name an action name, or `null`
         * @virtual
         */
        vfunc_set_action_name(action_name: (string | null)): void;

        /**
         * Sets the target value of an actionable widget.
         * 
         * If `target_value` is `null` then the target value is unset.
         * 
         * The target value has two purposes.  First, it is used as the
         * parameter to activation of the action associated with the
         * {@link Gtk.Actionable} widget. Second, it is used to determine if the widget
         * should be rendered as “active” — the widget is active if the state
         * is equal to the given target.
         * 
         * Consider the example of associating a set of buttons with a {@link Gio.Action}
         * with string state in a typical “radio button” situation.  Each button
         * will be associated with the same action, but with a different target
         * value for that action.  Clicking on a particular button will activate
         * the action with the target of that button, which will typically cause
         * the action’s state to change to that value.  Since the action’s state
         * is now equal to the target value of the button, the button will now
         * be rendered as active (and the other buttons, with different targets,
         * rendered inactive).
         * @param target_value a {@link GLib.Variant} to set as the target value, or `null`
         * @virtual
         */
        vfunc_set_action_target_value(target_value: (GLib.Variant | null)): void;

        /**
         * This is a utility function for {@link Gtk.Activatable} implementors.
         * 
         * When implementing {@link Gtk.Activatable} you must call this when
         * handling changes of the {@link Gtk.Activatable.related_action}, and
         * you must also use this to break references in {@link GObject.Object}->dispose().
         * 
         * This function adds a reference to the currently set related
         * action for you, it also makes sure the {@link Gtk.Activatable}->update()
         * method is called when the related {@link Gtk.Action} properties change
         * and registers to the action’s proxy list.
         * 
         * > Be careful to call this before setting the local
         * > copy of the {@link Gtk.Action} property, since this function uses
         * > `gtk_activatable_get_related_action()` to retrieve the
         * > previous action.
         * @param action the {@link Gtk.Action} to set
         */
        do_set_related_action(action: Gtk.Action): void;

        /**
         * Gets the related {@link Gtk.Action} for `activatable`.
         * @returns the related {@link Gtk.Action} if one is set.
         */
        get_related_action(): Gtk.Action;

        /**
         * Gets whether this activatable should reset its layout
         * and appearance when setting the related action or when
         * the action changes appearance.
         * @returns whether `activatable` uses its actions appearance.
         */
        get_use_action_appearance(): boolean;

        /**
         * Sets the related action on the `activatable` object.
         * 
         * > {@link Gtk.Activatable} implementors need to handle the {@link Gtk.Activatable.related_action}
         * > property and call `gtk_activatable_do_set_related_action()` when it changes.
         * @param action the {@link Gtk.Action} to set
         */
        set_related_action(action: Gtk.Action): void;

        /**
         * Sets whether this activatable should reset its layout and appearance
         * when setting the related action or when the action changes appearance
         * 
         * > {@link Gtk.Activatable} implementors need to handle the
         * > {@link Gtk.Activatable.use_action_appearance} property and call
         * > `gtk_activatable_sync_action_properties()` to update `activatable`
         * > if needed.
         * @param use_appearance whether to use the actions appearance
         */
        set_use_action_appearance(use_appearance: boolean): void;

        /**
         * This is called to update the activatable completely, this is called
         * internally when the {@link Gtk.Activatable.related_action} property is set
         * or unset and by the implementing class when
         * {@link Gtk.Activatable.use_action_appearance} changes.
         * @param action the related {@link Gtk.Action} or `null`
         */
        sync_action_properties(action: (Gtk.Action | null)): void;

        /**
         * This is called to update the activatable completely, this is called
         * internally when the {@link Gtk.Activatable.related_action} property is set
         * or unset and by the implementing class when
         * {@link Gtk.Activatable.use_action_appearance} changes.
         * @param action the related {@link Gtk.Action} or `null`
         * @virtual
         */
        vfunc_sync_action_properties(action: (Gtk.Action | null)): void;

        /**
         * Called to update the activatable when its related action’s properties change.
         * You must check the {@link Gtk.Activatable.use_action_appearance} property only apply action
         * properties that are meant to effect the appearance accordingly.
         * @param action 
         * @param property_name 
         * @virtual
         */
        vfunc_update(action: Gtk.Action, property_name: string): void;

        /**
         * Emits a {@link Gtk.Widget.SignalSignatures.child_notify | Gtk.Widget::child-notify} signal for the
         * [child property][child-properties] `child_property`
         * on `widget`.
         * 
         * This is the analogue of `g_object_notify()` for child properties.
         * 
         * Also see `gtk_container_child_notify()`.
         * @param child_property the name of a child property installed on the                  class of `widget`’s parent
         */
        child_notify(child_property: string): void;

        /**
         * @param args 
         */
        // Conflicted with Gtk.Container.child_notify
        child_notify(...args: never[]): any;

        /**
         * Returns whether the widget should grab focus when it is clicked with the mouse.
         * See `gtk_widget_set_focus_on_click()`.
         * @returns `true` if the widget should grab focus when it is clicked with               the mouse.
         */
        get_focus_on_click(): boolean;

        /**
         * Sets whether the widget should grab focus when it is clicked with the mouse.
         * Making mouse clicks not grab focus is useful in places like toolbars where
         * you don’t want the keyboard focus removed from the main area of the
         * application.
         * @param focus_on_click whether the widget should grab focus when clicked with the mouse
         */
        set_focus_on_click(focus_on_click: boolean): void;
    }


    namespace RadioBox {
        // Signal signatures
        interface SignalSignatures extends Gtk.Bin.SignalSignatures {
            /**
             * @signal
             * @run-last
             */
            changed: () => void;
            "notify::active-id": (pspec: GObject.ParamSpec) => void;
            "notify::has-more": (pspec: GObject.ParamSpec) => void;
            "notify::show-more": (pspec: GObject.ParamSpec) => void;
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
        interface ConstructorProps extends Gtk.Bin.ConstructorProps, Atk.ImplementorIface.ConstructorProps, Gtk.Buildable.ConstructorProps {
            active_id: string;
            activeId: string;
            has_more: boolean;
            hasMore: boolean;
            show_more: boolean;
            showMore: boolean;
        }
    }

    /**
     * @gir-type Class
     */
    class RadioBox extends Gtk.Bin implements Atk.ImplementorIface, Gtk.Buildable {
        static $gtype: GObject.GType<RadioBox>;

        // Properties
        get active_id(): string;
        set active_id(val: string);

        get activeId(): string;
        set activeId(val: string);

        /**
         * @read-only
         */
        get has_more(): boolean;

        /**
         * @read-only
         */
        get hasMore(): boolean;

        get show_more(): boolean;
        set show_more(val: boolean);

        get showMore(): boolean;
        set showMore(val: boolean);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: RadioBox.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<RadioBox.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](): RadioBox;

        // Signals
        /** @signal */
        connect<K extends keyof RadioBox.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, RadioBox.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof RadioBox.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, RadioBox.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof RadioBox.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<RadioBox.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Methods
        /**
         * @param id 
         * @param text 
         */
        add_item(id: string, text: string): void;

        get_active_id(): string;

        /**
         * @param id 
         */
        set_active_id(id: string): void;
    }


    namespace ScrolledWindow {
        // Signal signatures
        interface SignalSignatures extends Gtk.ScrolledWindow.SignalSignatures {
            "notify::hadjustment": (pspec: GObject.ParamSpec) => void;
            "notify::hscrollbar-policy": (pspec: GObject.ParamSpec) => void;
            "notify::kinetic-scrolling": (pspec: GObject.ParamSpec) => void;
            "notify::max-content-height": (pspec: GObject.ParamSpec) => void;
            "notify::max-content-width": (pspec: GObject.ParamSpec) => void;
            "notify::min-content-height": (pspec: GObject.ParamSpec) => void;
            "notify::min-content-width": (pspec: GObject.ParamSpec) => void;
            "notify::overlay-scrolling": (pspec: GObject.ParamSpec) => void;
            "notify::propagate-natural-height": (pspec: GObject.ParamSpec) => void;
            "notify::propagate-natural-width": (pspec: GObject.ParamSpec) => void;
            "notify::shadow-type": (pspec: GObject.ParamSpec) => void;
            "notify::vadjustment": (pspec: GObject.ParamSpec) => void;
            "notify::vscrollbar-policy": (pspec: GObject.ParamSpec) => void;
            "notify::window-placement": (pspec: GObject.ParamSpec) => void;
            "notify::window-placement-set": (pspec: GObject.ParamSpec) => void;
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
        interface ConstructorProps extends Gtk.ScrolledWindow.ConstructorProps, Atk.ImplementorIface.ConstructorProps, Gtk.Buildable.ConstructorProps {

        }
    }

    /**
     * @gir-type Class
     */
    class ScrolledWindow extends Gtk.ScrolledWindow implements Atk.ImplementorIface, Gtk.Buildable {
        static $gtype: GObject.GType<ScrolledWindow>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: ScrolledWindow.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<ScrolledWindow.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals
        /** @signal */
        connect<K extends keyof ScrolledWindow.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, ScrolledWindow.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof ScrolledWindow.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, ScrolledWindow.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof ScrolledWindow.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<ScrolledWindow.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
    }


    namespace SearchBar {
        // Signal signatures
        interface SignalSignatures extends Gtk.Bin.SignalSignatures {
            /**
             * @signal
             * @action
             * @run-last
             */
            activate: () => void;
            /**
             * @signal
             * @action
             * @run-last
             */
            reveal: () => void;
            "notify::search-mode-enabled": (pspec: GObject.ParamSpec) => void;
            "notify::show-close-button": (pspec: GObject.ParamSpec) => void;
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
        interface ConstructorProps extends Gtk.Bin.ConstructorProps, Atk.ImplementorIface.ConstructorProps, Gtk.Buildable.ConstructorProps {
            search_mode_enabled: boolean;
            searchModeEnabled: boolean;
            show_close_button: boolean;
            showCloseButton: boolean;
        }
    }

    /**
     * @gir-type Class
     */
    class SearchBar extends Gtk.Bin implements Atk.ImplementorIface, Gtk.Buildable {
        static $gtype: GObject.GType<SearchBar>;

        // Properties
        get search_mode_enabled(): boolean;
        set search_mode_enabled(val: boolean);

        get searchModeEnabled(): boolean;
        set searchModeEnabled(val: boolean);

        get show_close_button(): boolean;
        set show_close_button(val: boolean);

        get showCloseButton(): boolean;
        set showCloseButton(val: boolean);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: SearchBar.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<SearchBar.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](): SearchBar;

        // Signals
        /** @signal */
        connect<K extends keyof SearchBar.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, SearchBar.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof SearchBar.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, SearchBar.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof SearchBar.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<SearchBar.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Methods
        /**
         * @returns A {@link Gtk.SearchEntry}.
         */
        get_entry(): Gtk.SearchEntry;

        get_search_mode_enabled(): boolean;

        get_show_close_button(): boolean;

        /**
         * @param search_mode_enabled 
         */
        set_search_mode_enabled(search_mode_enabled: boolean): void;

        /**
         * @param show_close_button 
         */
        set_show_close_button(show_close_button: boolean): void;
    }


    namespace SettingsFlagAction {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            "notify::flag-nick": (pspec: GObject.ParamSpec) => void;
            "notify::schema-id": (pspec: GObject.ParamSpec) => void;
            "notify::schema-key": (pspec: GObject.ParamSpec) => void;
            "notify::enabled": (pspec: GObject.ParamSpec) => void;
            "notify::name": (pspec: GObject.ParamSpec) => void;
            "notify::parameter-type": (pspec: GObject.ParamSpec) => void;
            "notify::state": (pspec: GObject.ParamSpec) => void;
            "notify::state-type": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps, Gio.Action.ConstructorProps {
            flag_nick: string;
            flagNick: string;
            schema_id: string;
            schemaId: string;
            schema_key: string;
            schemaKey: string;
        }
    }

    /**
     * @gir-type Class
     */
    class SettingsFlagAction extends GObject.Object implements Gio.Action {
        static $gtype: GObject.GType<SettingsFlagAction>;

        // Properties
        /**
         * @construct-only
         */
        get flag_nick(): string;

        /**
         * @construct-only
         */
        get flagNick(): string;

        /**
         * @construct-only
         */
        get schema_id(): string;

        /**
         * @construct-only
         */
        get schemaId(): string;

        get schema_key(): string;
        set schema_key(val: string);

        get schemaKey(): string;
        set schemaKey(val: string);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: SettingsFlagAction.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<SettingsFlagAction.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals
        /** @signal */
        connect<K extends keyof SettingsFlagAction.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, SettingsFlagAction.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof SettingsFlagAction.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, SettingsFlagAction.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof SettingsFlagAction.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<SettingsFlagAction.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Static methods
        /**
         * This creates a new action that can be used to toggle an individual flag in
         * a {@link Gio.Settings} key which is of a flags type.
         * @param schema_id 
         * @param schema_key 
         * @param flag_nick 
         */
        static ["new"](schema_id: string, schema_key: string, flag_nick: string): Gio.Action;

        /**
         * If `action` is currently enabled.
         * 
         * If the action is disabled then calls to {@link Gio.Action.activate} and
         * {@link Gio.Action.change_state} have no effect.
         * @since 2.28
         * @read-only
         * @default true
          * @category Inherited from Gio.Action
         */
        get enabled(): boolean;

        /**
         * The name of the action.  This is mostly meaningful for identifying
         * the action once it has been added to a {@link Gio.ActionGroup}. It is immutable.
         * @since 2.28
         * @read-only
         * @default null
          * @category Inherited from Gio.Action
         */
        get name(): string;

        /**
         * The type of the parameter that must be given when activating the
         * action. This is immutable, and may be `NULL` if no parameter is needed when
         * activating the action.
         * @since 2.28
         * @read-only
          * @category Inherited from Gio.Action
         */
        get parameter_type(): (GLib.VariantType | null);

        /**
         * The type of the parameter that must be given when activating the
         * action. This is immutable, and may be `NULL` if no parameter is needed when
         * activating the action.
         * @since 2.28
         * @read-only
          * @category Inherited from Gio.Action
         */
        get parameterType(): (GLib.VariantType | null);

        /**
         * The state of the action, or `NULL` if the action is stateless.
         * @since 2.28
         * @read-only
          * @category Inherited from Gio.Action
         */
        get state(): (GLib.Variant | null);

        /**
         * The {@link GLib.VariantType} of the state that the action has, or `NULL` if the
         * action is stateless. This is immutable.
         * @since 2.28
         * @read-only
          * @category Inherited from Gio.Action
         */
        get state_type(): (GLib.VariantType | null);

        /**
         * The {@link GLib.VariantType} of the state that the action has, or `NULL` if the
         * action is stateless. This is immutable.
         * @since 2.28
         * @read-only
          * @category Inherited from Gio.Action
         */
        get stateType(): (GLib.VariantType | null);

        /**
         * Activates the action.
         * 
         * `parameter` must be the correct type of parameter for the action (ie:
         * the parameter type given at construction time).  If the parameter
         * type was `NULL` then `parameter` must also be `NULL`.
         * 
         * If the `parameter` {@link GLib.Variant} is floating, it is consumed.
         * @param parameter the parameter to the activation
         */
        activate(parameter: (GLib.Variant | null)): void;

        /**
         * Request for the state of `action` to be changed to `value`.
         * 
         * The action must be stateful and `value` must be of the correct type.
         * See {@link Gio.Action.get_state_type}.
         * 
         * This call merely requests a change.  The action may refuse to change
         * its state or may change its state to something other than `value`.
         * See {@link Gio.Action.get_state_hint}.
         * 
         * If the `value` {@link GLib.Variant} is floating, it is consumed.
         * @param value the new state
         */
        change_state(value: GLib.Variant): void;

        /**
         * Checks if `action` is currently enabled.
         * 
         * An action must be enabled in order to be activated or in order to
         * have its state changed from outside callers.
         * @returns whether the action is enabled
         */
        get_enabled(): boolean;

        /**
         * Queries the name of `action`.
         * @returns the name of the action
         */
        get_name(): string;

        /**
         * Queries the type of the parameter that must be given when activating
         * `action`.
         * 
         * When activating the action using {@link Gio.Action.activate}, the
         * {@link GLib.Variant} given to that function must be of the type returned by
         * this function.
         * 
         * In the case that this function returns `NULL`, you must not give any
         * {@link GLib.Variant}, but `NULL` instead.
         * @returns the parameter type
         */
        get_parameter_type(): (GLib.VariantType | null);

        /**
         * Queries the current state of `action`.
         * 
         * If the action is not stateful then `NULL` will be returned.  If the
         * action is stateful then the type of the return value is the type
         * given by {@link Gio.Action.get_state_type}.
         * 
         * The return value (if non-`NULL`) should be freed with
         * {@link GLib.Variant.unref} when it is no longer required.
         * @returns the current state of the action
         */
        get_state(): (GLib.Variant | null);

        /**
         * Requests a hint about the valid range of values for the state of
         * `action`.
         * 
         * If `NULL` is returned it either means that the action is not stateful
         * or that there is no hint about the valid range of values for the
         * state of the action.
         * 
         * If a {@link GLib.Variant} array is returned then each item in the array is a
         * possible value for the state.  If a {@link GLib.Variant} pair (ie: two-tuple) is
         * returned then the tuple specifies the inclusive lower and upper bound
         * of valid values for the state.
         * 
         * In any case, the information is merely a hint.  It may be possible to
         * have a state value outside of the hinted range and setting a value
         * within the range may fail.
         * 
         * The return value (if non-`NULL`) should be freed with
         * {@link GLib.Variant.unref} when it is no longer required.
         * @returns the state range hint
         */
        get_state_hint(): (GLib.Variant | null);

        /**
         * Queries the type of the state of `action`.
         * 
         * If the action is stateful (e.g. created with
         * {@link Gio.SimpleAction.new_stateful}) then this function returns the
         * {@link GLib.VariantType} of the state.  This is the type of the initial value
         * given as the state. All calls to {@link Gio.Action.change_state} must give a
         * {@link GLib.Variant} of this type and {@link Gio.Action.get_state} will return a
         * {@link GLib.Variant} of the same type.
         * 
         * If the action is not stateful (e.g. created with {@link Gio.SimpleAction.new})
         * then this function will return `NULL`. In that case, {@link Gio.Action.get_state}
         * will return `NULL` and you must not call {@link Gio.Action.change_state}.
         * @returns the state type, if the action is stateful
         */
        get_state_type(): (GLib.VariantType | null);

        /**
         * Activates the action.
         * 
         * `parameter` must be the correct type of parameter for the action (ie:
         * the parameter type given at construction time).  If the parameter
         * type was `NULL` then `parameter` must also be `NULL`.
         * 
         * If the `parameter` {@link GLib.Variant} is floating, it is consumed.
         * @param parameter the parameter to the activation
         * @virtual
         */
        vfunc_activate(parameter: (GLib.Variant | null)): void;

        /**
         * Request for the state of `action` to be changed to `value`.
         * 
         * The action must be stateful and `value` must be of the correct type.
         * See {@link Gio.Action.get_state_type}.
         * 
         * This call merely requests a change.  The action may refuse to change
         * its state or may change its state to something other than `value`.
         * See {@link Gio.Action.get_state_hint}.
         * 
         * If the `value` {@link GLib.Variant} is floating, it is consumed.
         * @param value the new state
         * @virtual
         */
        vfunc_change_state(value: GLib.Variant): void;

        /**
         * Checks if `action` is currently enabled.
         * 
         * An action must be enabled in order to be activated or in order to
         * have its state changed from outside callers.
         * @virtual
         */
        vfunc_get_enabled(): boolean;

        /**
         * Queries the name of `action`.
         * @virtual
         */
        vfunc_get_name(): string;

        /**
         * Queries the type of the parameter that must be given when activating
         * `action`.
         * 
         * When activating the action using {@link Gio.Action.activate}, the
         * {@link GLib.Variant} given to that function must be of the type returned by
         * this function.
         * 
         * In the case that this function returns `NULL`, you must not give any
         * {@link GLib.Variant}, but `NULL` instead.
         * @virtual
         */
        vfunc_get_parameter_type(): (GLib.VariantType | null);

        /**
         * Queries the current state of `action`.
         * 
         * If the action is not stateful then `NULL` will be returned.  If the
         * action is stateful then the type of the return value is the type
         * given by {@link Gio.Action.get_state_type}.
         * 
         * The return value (if non-`NULL`) should be freed with
         * {@link GLib.Variant.unref} when it is no longer required.
         * @virtual
         */
        vfunc_get_state(): (GLib.Variant | null);

        /**
         * Requests a hint about the valid range of values for the state of
         * `action`.
         * 
         * If `NULL` is returned it either means that the action is not stateful
         * or that there is no hint about the valid range of values for the
         * state of the action.
         * 
         * If a {@link GLib.Variant} array is returned then each item in the array is a
         * possible value for the state.  If a {@link GLib.Variant} pair (ie: two-tuple) is
         * returned then the tuple specifies the inclusive lower and upper bound
         * of valid values for the state.
         * 
         * In any case, the information is merely a hint.  It may be possible to
         * have a state value outside of the hinted range and setting a value
         * within the range may fail.
         * 
         * The return value (if non-`NULL`) should be freed with
         * {@link GLib.Variant.unref} when it is no longer required.
         * @virtual
         */
        vfunc_get_state_hint(): (GLib.Variant | null);

        /**
         * Queries the type of the state of `action`.
         * 
         * If the action is stateful (e.g. created with
         * {@link Gio.SimpleAction.new_stateful}) then this function returns the
         * {@link GLib.VariantType} of the state.  This is the type of the initial value
         * given as the state. All calls to {@link Gio.Action.change_state} must give a
         * {@link GLib.Variant} of this type and {@link Gio.Action.get_state} will return a
         * {@link GLib.Variant} of the same type.
         * 
         * If the action is not stateful (e.g. created with {@link Gio.SimpleAction.new})
         * then this function will return `NULL`. In that case, {@link Gio.Action.get_state}
         * will return `NULL` and you must not call {@link Gio.Action.change_state}.
         * @virtual
         */
        vfunc_get_state_type(): (GLib.VariantType | null);
    }


    namespace SettingsSandwich {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            "notify::path": (pspec: GObject.ParamSpec) => void;
            "notify::schema-id": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps {
            path: string;
            schema_id: string;
            schemaId: string;
        }
    }

    /**
     * @gir-type Class
     */
    class SettingsSandwich extends GObject.Object {
        static $gtype: GObject.GType<SettingsSandwich>;

        // Properties
        /**
         * @construct-only
         */
        get path(): string;

        /**
         * @construct-only
         */
        get schema_id(): string;

        /**
         * @construct-only
         */
        get schemaId(): string;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: SettingsSandwich.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<SettingsSandwich.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](schema_id: string, path: string): SettingsSandwich;

        // Signals
        /** @signal */
        connect<K extends keyof SettingsSandwich.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, SettingsSandwich.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof SettingsSandwich.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, SettingsSandwich.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof SettingsSandwich.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<SettingsSandwich.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Methods
        /**
         * @param settings 
         */
        append(settings: Gio.Settings): void;

        /**
         * @param key 
         * @param object 
         * @param property 
         * @param flags 
         */
        bind(key: string, object: (any | null), property: string, flags: Gio.SettingsBindFlags): void;

        /**
         * Creates a new binding similar to `g_settings_bind_with_mapping()` but applying
         * from the resolved value via the settings sandwich.
         * @param key the settings key to bind. `object` (type GObject.Object): the target object.
         * @param object 
         * @param property the property on `object` to apply.
         * @param flags flags for the binding.
         * @param get_mapping the get mapping function
         * @param set_mapping the set mapping function
         */
        bind_with_mapping(key: string, object: (any | null), property: string, flags: Gio.SettingsBindFlags, get_mapping: Gio.SettingsBindGetMapping, set_mapping: Gio.SettingsBindSetMapping): void;

        /**
         * @param key 
         */
        get_boolean(key: string): boolean;

        /**
         * @param key 
         */
        get_default_value(key: string): GLib.Variant;

        /**
         * @param key 
         */
        get_double(key: string): number;

        /**
         * @param key 
         */
        get_int(key: string): number;

        /**
         * @param key 
         */
        get_string(key: string): string;

        /**
         * @param key 
         */
        get_uint(key: string): number;

        /**
         * @param key 
         */
        get_user_value(key: string): GLib.Variant;

        /**
         * @param key 
         */
        get_value(key: string): GLib.Variant;

        /**
         * @param key 
         * @param val 
         */
        set_boolean(key: string, val: boolean): void;

        /**
         * @param key 
         * @param val 
         */
        set_double(key: string, val: number): void;

        /**
         * @param key 
         * @param val 
         */
        set_int(key: string, val: number): void;

        /**
         * @param key 
         * @param val 
         */
        set_string(key: string, val: string): void;

        /**
         * @param key 
         * @param val 
         */
        set_uint(key: string, val: number): void;

        /**
         * @param key 
         * @param value 
         */
        set_value(key: string, value: GLib.Variant): void;

        /**
         * @param property 
         */
        unbind(property: string): void;
    }


    namespace SignalGroup {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            /**
             * This signal is emitted when the target instance of `self`
             * is set to a new {@link GObject.Object}.
             * 
             * This signal will only be emitted if the target of `self` is non-`null`.
             * @signal
             * @run-last
             */
            bind: (arg0: GObject.Object) => void;
            /**
             * This signal is emitted when the target instance of `self`
             * is set to a new {@link GObject.Object}.
             * 
             * This signal will only be emitted if the previous target
             * of `self` is non-`null`.
             * @signal
             * @run-last
             */
            unbind: () => void;
            "notify::target": (pspec: GObject.ParamSpec) => void;
            "notify::target-type": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps {
            target: (GObject.Object | null);
            target_type: GObject.GTypeInput;
            targetType: GObject.GTypeInput;
        }
    }

    /**
     * {@link Egg.SignalGroup} manages to simplify the process of connecting
     * many signals to a {@link GObject.Object} as a group. As such there is no API
     * to disconnect a signal from the group.
     * 
     * In particular, this allows you to:
     * 
     *  - Change the target instance, which automatically causes disconnection
     *    of the signals from the old instance and connecting to the new instance.
     *  - Block and unblock signals as a group
     *  - Ensuring that blocked state transfers across target instances.
     * 
     * One place you might want to use such a structure is with {@link Gtk.TextView} and
     * {@link Gtk.TextBuffer}. Often times, you'll need to connect to many signals on
     * {@link Gtk.TextBuffer} from a {@link Gtk.TextView} subclass. This allows you to create a
     * signal group during instance construction, simply bind the
     * {@link Gtk.TextView.buffer} property to {@link Egg.SignalGroup.target} and connect
     * all the signals you need. When the {@link Gtk.TextView.buffer} property changes
     * all of the signals will be transitioned correctly.
     * @gir-type Class
     */
    class SignalGroup extends GObject.Object {
        static $gtype: GObject.GType<SignalGroup>;

        // Properties
        /**
         * The target instance used when connecting signals.
         */
        get target(): (GObject.Object | null);
        set target(val: (GObject.Object | null));

        /**
         * The GType of the target property.
         * @construct-only
         */
        get target_type(): GObject.GType;

        /**
         * The GType of the target property.
         * @construct-only
         */
        get targetType(): GObject.GType;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: SignalGroup.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<SignalGroup.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](target_type: GObject.GType): SignalGroup;

        // Signals
        /** @signal */
        connect<K extends keyof SignalGroup.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, SignalGroup.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof SignalGroup.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, SignalGroup.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof SignalGroup.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<SignalGroup.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Methods
        /**
         * Blocks all signal handlers managed by `self` so they will not
         * be called during any signal emissions. Must be unblocked exactly
         * the same number of times it has been blocked to become active again.
         * 
         * This blocked state will be kept across changes of the target instance.
         * 
         * See: `g_signal_handler_block()`.
         */
        block(): void;

        /**
         * Connects `callback` to the signal `detailed_signal`
         * on the target instance of `self`.
         * 
         * See: `g_signal_connect_data()`.
         * @param detailed_signal a string of the form "signal-name::detail"
         * @param c_handler the {@link GObject.Callback} to connect
         * @param notify function to be called when disposing of `self`
         * @param flags the flags used to create the signal connection
         */
        connect_data(detailed_signal: string, c_handler: GObject.Callback, notify: GObject.ClosureNotify, flags: GObject.ConnectFlags): void;

        /**
         * Connects `callback` to the signal `detailed_signal`
         * on the target instance of `self`.
         * 
         * The instance on which the signal is emitted and `data`
         * will be swapped when calling `callback`.
         * 
         * See: `g_signal_connect_swapped()`.
         * @param detailed_signal a string of the form "signal-name::detail"
         * @param c_handler the {@link GObject.Callback} to connect
         */
        connect_swapped(detailed_signal: string, c_handler: GObject.Callback): void;

        /**
         * Gets the target instance used when connecting signals.
         * @returns The target instance.
         */
        get_target<T = GObject.Object>(): T;

        /**
         * Sets the target instance used when connecting signals. Any signal
         * that has been registered with `egg_signal_group_connect_object()` or
         * similar functions will be connected to this object.
         * 
         * If the target instance was previously set, signals will be
         * disconnected from that object prior to connecting to `target`.
         * @param target The target instance used     when connecting signals.
         */
        set_target(target: (GObject.Object | null)): void;

        /**
         * Unblocks all signal handlers managed by `self` so they will be
         * called again during any signal emissions unless it is blocked
         * again. Must be unblocked exactly the same number of times it
         * has been blocked to become active again.
         * 
         * See: `g_signal_handler_unblock()`.
         */
        unblock(): void;
    }


    namespace SimpleLabel {
        // Signal signatures
        interface SignalSignatures extends Gtk.Widget.SignalSignatures {
            "notify::label": (pspec: GObject.ParamSpec) => void;
            "notify::width-chars": (pspec: GObject.ParamSpec) => void;
            "notify::xalign": (pspec: GObject.ParamSpec) => void;
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
        interface ConstructorProps extends Gtk.Widget.ConstructorProps, Atk.ImplementorIface.ConstructorProps, Gtk.Buildable.ConstructorProps {
            label: string;
            width_chars: number;
            widthChars: number;
            xalign: number;
        }
    }

    /**
     * @gir-type Class
     */
    class SimpleLabel extends Gtk.Widget implements Atk.ImplementorIface, Gtk.Buildable {
        static $gtype: GObject.GType<SimpleLabel>;

        // Properties
        get label(): string;
        set label(val: string);

        get width_chars(): number;
        set width_chars(val: number);

        get widthChars(): number;
        set widthChars(val: number);

        get xalign(): number;
        set xalign(val: number);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: SimpleLabel.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<SimpleLabel.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](label: string): SimpleLabel;

        // Signals
        /** @signal */
        connect<K extends keyof SimpleLabel.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, SimpleLabel.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof SimpleLabel.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, SimpleLabel.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof SimpleLabel.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<SimpleLabel.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Methods
        get_label(): string;

        get_width_chars(): number;

        get_xalign(): number;

        /**
         * @param label 
         */
        set_label(label: string): void;

        /**
         * @param width_chars 
         */
        set_width_chars(width_chars: number): void;

        /**
         * @param xalign 
         */
        set_xalign(xalign: number): void;

        /**
         * Adds a child to `buildable`. `type` is an optional string
         * describing how the child should be added.
         * @param builder a {@link Gtk.Builder}
         * @param child child to add
         * @param type kind of child or `null`
         */
        add_child(builder: Gtk.Builder, child: GObject.Object, type: (string | null)): void;

        /**
         * Constructs a child of `buildable` with the name `name`.
         * 
         * {@link Gtk.Builder} calls this function if a “constructor” has been
         * specified in the UI definition.
         * @param builder {@link Gtk.Builder} used to construct this object
         * @param name name of child to construct
         * @returns the constructed child
         */
        construct_child<T = GObject.Object>(builder: Gtk.Builder, name: string): T;

        /**
         * This is similar to `gtk_buildable_parser_finished()` but is
         * called once for each custom tag handled by the `buildable`.
         * @param builder a {@link Gtk.Builder}
         * @param child child object or `null` for non-child tags
         * @param tagname the name of the tag
         * @param data user data created in custom_tag_start
         */
        custom_finished(builder: Gtk.Builder, child: (GObject.Object | null), tagname: string, data: (any | null)): void;

        /**
         * This is called at the end of each custom element handled by
         * the buildable.
         * @param builder {@link Gtk.Builder} used to construct this object
         * @param child child object or `null` for non-child tags
         * @param tagname name of tag
         * @param data user data that will be passed in to parser functions
         */
        custom_tag_end(builder: Gtk.Builder, child: (GObject.Object | null), tagname: string, data: (any | null)): void;

        /**
         * This is called for each unknown element under `<child>`.
         * @param builder a {@link Gtk.Builder} used to construct this object
         * @param child child object or `null` for non-child tags
         * @param tagname name of tag
         * @returns `true` if a object has a custom implementation, `false`          if it doesn't.
         */
        custom_tag_start(builder: Gtk.Builder, child: (GObject.Object | null), tagname: string): [boolean, GLib.MarkupParser, any];

        /**
         * Get the internal child called `childname` of the `buildable` object.
         * @param builder a {@link Gtk.Builder}
         * @param childname name of child
         * @returns the internal child of the buildable object
         */
        get_internal_child<T = GObject.Object>(builder: Gtk.Builder, childname: string): T;

        /**
         * Gets the name of the `buildable` object.
         * 
         * {@link Gtk.Builder} sets the name based on the
         * [GtkBuilder UI definition][BUILDER-UI]
         * used to construct the `buildable`.
         * @returns the name set with `gtk_buildable_set_name()`
         */
        get_name(): string;

        /**
         * Called when the builder finishes the parsing of a
         * [GtkBuilder UI definition][BUILDER-UI].
         * Note that this will be called once for each time
         * `gtk_builder_add_from_file()` or `gtk_builder_add_from_string()`
         * is called on a builder.
         * @param builder a {@link Gtk.Builder}
         */
        parser_finished(builder: Gtk.Builder): void;

        /**
         * Sets the property name `name` to `value` on the `buildable` object.
         * @param builder a {@link Gtk.Builder}
         * @param name name of property
         * @param value value of property
         */
        set_buildable_property(builder: Gtk.Builder, name: string, value: (GObject.Value | any)): void;

        /**
         * Sets the name of the `buildable` object.
         * @param name name to set
         */
        set_name(name: string): void;

        /**
         * Adds a child to `buildable`. `type` is an optional string
         * describing how the child should be added.
         * @param builder a {@link Gtk.Builder}
         * @param child child to add
         * @param type kind of child or `null`
         * @virtual
         */
        vfunc_add_child(builder: Gtk.Builder, child: GObject.Object, type: (string | null)): void;

        /**
         * Constructs a child of `buildable` with the name `name`.
         * 
         * {@link Gtk.Builder} calls this function if a “constructor” has been
         * specified in the UI definition.
         * @param builder {@link Gtk.Builder} used to construct this object
         * @param name name of child to construct
         * @virtual
         */
        vfunc_construct_child<T = GObject.Object>(builder: Gtk.Builder, name: string): T;

        /**
         * This is similar to `gtk_buildable_parser_finished()` but is
         * called once for each custom tag handled by the `buildable`.
         * @param builder a {@link Gtk.Builder}
         * @param child child object or `null` for non-child tags
         * @param tagname the name of the tag
         * @param data user data created in custom_tag_start
         * @virtual
         */
        vfunc_custom_finished(builder: Gtk.Builder, child: (GObject.Object | null), tagname: string, data: (any | null)): void;

        /**
         * This is called at the end of each custom element handled by
         * the buildable.
         * @param builder {@link Gtk.Builder} used to construct this object
         * @param child child object or `null` for non-child tags
         * @param tagname name of tag
         * @param data user data that will be passed in to parser functions
         * @virtual
         */
        vfunc_custom_tag_end(builder: Gtk.Builder, child: (GObject.Object | null), tagname: string, data: (any | null)): void;

        /**
         * This is called for each unknown element under `<child>`.
         * @param builder a {@link Gtk.Builder} used to construct this object
         * @param child child object or `null` for non-child tags
         * @param tagname name of tag
         * @virtual
         */
        vfunc_custom_tag_start(builder: Gtk.Builder, child: (GObject.Object | null), tagname: string): [boolean, GLib.MarkupParser, any];

        /**
         * Get the internal child called `childname` of the `buildable` object.
         * @param builder a {@link Gtk.Builder}
         * @param childname name of child
         * @virtual
         */
        vfunc_get_internal_child<T = GObject.Object>(builder: Gtk.Builder, childname: string): T;

        /**
         * Gets the name of the `buildable` object.
         * 
         * {@link Gtk.Builder} sets the name based on the
         * [GtkBuilder UI definition][BUILDER-UI]
         * used to construct the `buildable`.
         * @virtual
         */
        vfunc_get_name(): string;

        /**
         * Called when the builder finishes the parsing of a
         * [GtkBuilder UI definition][BUILDER-UI].
         * Note that this will be called once for each time
         * `gtk_builder_add_from_file()` or `gtk_builder_add_from_string()`
         * is called on a builder.
         * @param builder a {@link Gtk.Builder}
         * @virtual
         */
        vfunc_parser_finished(builder: Gtk.Builder): void;

        /**
         * Sets the property name `name` to `value` on the `buildable` object.
         * @param builder a {@link Gtk.Builder}
         * @param name name of property
         * @param value value of property
         * @virtual
         */
        vfunc_set_buildable_property(builder: Gtk.Builder, name: string, value: unknown): void;

        /**
         * Sets the name of the `buildable` object.
         * @param name name to set
         * @virtual
         */
        vfunc_set_name(name: string): void;
    }


    namespace SimplePopover {
        // Signal signatures
        interface SignalSignatures extends Gtk.Popover.SignalSignatures {
            /**
             * This signal is emitted when the popover's forward button is activated.
             * Connect to this signal to perform your forward progress.
             * @signal
             * @run-last
             */
            activate: (arg0: string) => void;
            /**
             * This signal is emitted when the entry text changes.
             * @signal
             * @run-last
             */
            changed: () => void;
            /**
             * Use this signal to determine if text should be allowed to be inserted
             * into the text buffer. Return GDK_EVENT_STOP to prevent the text from
             * being inserted.
             * @signal
             * @run-last
             */
            "insert-text": (arg0: number, arg1: string, arg2: number) => (boolean | void);
            "notify::button-text": (pspec: GObject.ParamSpec) => void;
            "notify::message": (pspec: GObject.ParamSpec) => void;
            "notify::ready": (pspec: GObject.ParamSpec) => void;
            "notify::text": (pspec: GObject.ParamSpec) => void;
            "notify::title": (pspec: GObject.ParamSpec) => void;
            "notify::constrain-to": (pspec: GObject.ParamSpec) => void;
            "notify::modal": (pspec: GObject.ParamSpec) => void;
            "notify::pointing-to": (pspec: GObject.ParamSpec) => void;
            "notify::position": (pspec: GObject.ParamSpec) => void;
            "notify::relative-to": (pspec: GObject.ParamSpec) => void;
            "notify::transitions-enabled": (pspec: GObject.ParamSpec) => void;
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
        interface ConstructorProps extends Gtk.Popover.ConstructorProps, Atk.ImplementorIface.ConstructorProps, Gtk.Buildable.ConstructorProps {
            button_text: string;
            buttonText: string;
            message: string;
            ready: boolean;
            text: string;
            title: string;
        }
    }

    /**
     * @gir-type Class
     */
    class SimplePopover extends Gtk.Popover implements Atk.ImplementorIface, Gtk.Buildable {
        static $gtype: GObject.GType<SimplePopover>;

        // Properties
        get button_text(): string;
        set button_text(val: string);

        get buttonText(): string;
        set buttonText(val: string);

        get message(): string;
        set message(val: string);

        get ready(): boolean;
        set ready(val: boolean);

        get text(): string;
        set text(val: string);

        get title(): string;
        set title(val: string);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: SimplePopover.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<SimplePopover.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](): SimplePopover;

        // Signals
        /** @signal */
        connect<K extends keyof SimplePopover.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, SimplePopover.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof SimplePopover.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, SimplePopover.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof SimplePopover.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<SimplePopover.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Virtual methods
        /**
         * @param text 
         * @virtual
         */
        vfunc_activate(text: string): void;

        /**
         * @virtual
         */
        vfunc_changed(): void;

        /**
         * @param position 
         * @param chars 
         * @param n_chars 
         * @virtual
         */
        vfunc_insert_text(position: number, chars: string, n_chars: number): boolean;

        // Methods
        get_button_text(): string;

        get_message(): string;

        get_ready(): boolean;

        get_text(): string;

        get_title(): string;

        /**
         * @param button_text 
         */
        set_button_text(button_text: string): void;

        /**
         * @param message 
         */
        set_message(message: string): void;

        /**
         * @param ready 
         */
        set_ready(ready: boolean): void;

        /**
         * @param text 
         */
        set_text(text: string): void;

        /**
         * @param title 
         */
        set_title(title: string): void;
    }


    namespace Slider {
        // Signal signatures
        interface SignalSignatures extends Gtk.Container.SignalSignatures {
            "notify::position": (pspec: GObject.ParamSpec) => void;
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
        interface ConstructorProps extends Gtk.Container.ConstructorProps, Atk.ImplementorIface.ConstructorProps, Gtk.Buildable.ConstructorProps {
            position: SliderPosition;
        }
    }

    /**
     * @gir-type Class
     */
    class Slider extends Gtk.Container implements Atk.ImplementorIface, Gtk.Buildable {
        static $gtype: GObject.GType<Slider>;

        // Properties
        get position(): SliderPosition;
        set position(val: SliderPosition);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Slider.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<Slider.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](): Slider;

        // Signals
        /** @signal */
        connect<K extends keyof Slider.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Slider.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof Slider.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Slider.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof Slider.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<Slider.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Methods
        /**
         * @param widget 
         * @param position 
         */
        add_slider(widget: Gtk.Widget, position: SliderPosition): void;

        get_position(): SliderPosition;

        /**
         * @param position 
         */
        set_position(position: SliderPosition): void;
    }


    namespace StateMachine {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            "notify::state": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps, Gtk.Buildable.ConstructorProps {
            state: string;
        }
    }

    /**
     * @gir-type Class
     */
    class StateMachine extends GObject.Object implements Gtk.Buildable {
        static $gtype: GObject.GType<StateMachine>;

        // Properties
        get state(): string;
        set state(val: string);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: StateMachine.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<StateMachine.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](): StateMachine;

        // Signals
        /** @signal */
        connect<K extends keyof StateMachine.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, StateMachine.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof StateMachine.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, StateMachine.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof StateMachine.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<StateMachine.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Methods
        /**
         * @param state 
         * @param source_object 
         * @param source_property 
         * @param target_object 
         * @param target_property 
         * @param flags 
         */
        add_binding(state: string, source_object: (any | null), source_property: string, target_object: (any | null), target_property: string, flags: GObject.BindingFlags): void;

        /**
         * @param state 
         * @param object 
         * @param property 
         * @param value 
         */
        add_propertyv(state: string, object: (any | null), property: string, value: (GObject.Value | any)): void;

        /**
         * @param state 
         * @param widget 
         * @param style 
         */
        add_style(state: string, widget: Gtk.Widget, style: string): void;

        /**
         * Creates a new {@link Gio.Action} with the name of `name`.
         * 
         * Setting the state of this action will toggle the state of the state machine.
         * You should use `g_variant_new_string()` or similar to create the state.
         * @param name the name of the action.
         * @returns A newly created {@link Gio.Action}.
         */
        create_action(name: string): Gio.Action;

        /**
         * Gets the {@link Egg.StateMachine.state} property. This is the name of the
         * current state of the machine.
         * @returns The current state of the machine.
         */
        get_state(): string;

        /**
         * Sets the {@link Egg.StateMachine.state} property.
         * 
         * Registered state transformations will be applied during the state
         * transformation.
         * 
         * If the transition results in a cyclic operation, the state will stop at
         * the last state before the cycle was detected.
         * @param state 
         */
        set_state(state: string): void;

        /**
         * Adds a child to `buildable`. `type` is an optional string
         * describing how the child should be added.
         * @param builder a {@link Gtk.Builder}
         * @param child child to add
         * @param type kind of child or `null`
         */
        add_child(builder: Gtk.Builder, child: GObject.Object, type: (string | null)): void;

        /**
         * Constructs a child of `buildable` with the name `name`.
         * 
         * {@link Gtk.Builder} calls this function if a “constructor” has been
         * specified in the UI definition.
         * @param builder {@link Gtk.Builder} used to construct this object
         * @param name name of child to construct
         * @returns the constructed child
         */
        construct_child<T = GObject.Object>(builder: Gtk.Builder, name: string): T;

        /**
         * This is similar to `gtk_buildable_parser_finished()` but is
         * called once for each custom tag handled by the `buildable`.
         * @param builder a {@link Gtk.Builder}
         * @param child child object or `null` for non-child tags
         * @param tagname the name of the tag
         * @param data user data created in custom_tag_start
         */
        custom_finished(builder: Gtk.Builder, child: (GObject.Object | null), tagname: string, data: (any | null)): void;

        /**
         * This is called at the end of each custom element handled by
         * the buildable.
         * @param builder {@link Gtk.Builder} used to construct this object
         * @param child child object or `null` for non-child tags
         * @param tagname name of tag
         * @param data user data that will be passed in to parser functions
         */
        custom_tag_end(builder: Gtk.Builder, child: (GObject.Object | null), tagname: string, data: (any | null)): void;

        /**
         * This is called for each unknown element under `<child>`.
         * @param builder a {@link Gtk.Builder} used to construct this object
         * @param child child object or `null` for non-child tags
         * @param tagname name of tag
         * @returns `true` if a object has a custom implementation, `false`          if it doesn't.
         */
        custom_tag_start(builder: Gtk.Builder, child: (GObject.Object | null), tagname: string): [boolean, GLib.MarkupParser, any];

        /**
         * Get the internal child called `childname` of the `buildable` object.
         * @param builder a {@link Gtk.Builder}
         * @param childname name of child
         * @returns the internal child of the buildable object
         */
        get_internal_child<T = GObject.Object>(builder: Gtk.Builder, childname: string): T;

        /**
         * Gets the name of the `buildable` object.
         * 
         * {@link Gtk.Builder} sets the name based on the
         * [GtkBuilder UI definition][BUILDER-UI]
         * used to construct the `buildable`.
         * @returns the name set with `gtk_buildable_set_name()`
         */
        get_name(): string;

        /**
         * Called when the builder finishes the parsing of a
         * [GtkBuilder UI definition][BUILDER-UI].
         * Note that this will be called once for each time
         * `gtk_builder_add_from_file()` or `gtk_builder_add_from_string()`
         * is called on a builder.
         * @param builder a {@link Gtk.Builder}
         */
        parser_finished(builder: Gtk.Builder): void;

        /**
         * Sets the property name `name` to `value` on the `buildable` object.
         * @param builder a {@link Gtk.Builder}
         * @param name name of property
         * @param value value of property
         */
        set_buildable_property(builder: Gtk.Builder, name: string, value: (GObject.Value | any)): void;

        /**
         * Sets the name of the `buildable` object.
         * @param name name to set
         */
        set_name(name: string): void;

        /**
         * Adds a child to `buildable`. `type` is an optional string
         * describing how the child should be added.
         * @param builder a {@link Gtk.Builder}
         * @param child child to add
         * @param type kind of child or `null`
         * @virtual
         */
        vfunc_add_child(builder: Gtk.Builder, child: GObject.Object, type: (string | null)): void;

        /**
         * Constructs a child of `buildable` with the name `name`.
         * 
         * {@link Gtk.Builder} calls this function if a “constructor” has been
         * specified in the UI definition.
         * @param builder {@link Gtk.Builder} used to construct this object
         * @param name name of child to construct
         * @virtual
         */
        vfunc_construct_child<T = GObject.Object>(builder: Gtk.Builder, name: string): T;

        /**
         * This is similar to `gtk_buildable_parser_finished()` but is
         * called once for each custom tag handled by the `buildable`.
         * @param builder a {@link Gtk.Builder}
         * @param child child object or `null` for non-child tags
         * @param tagname the name of the tag
         * @param data user data created in custom_tag_start
         * @virtual
         */
        vfunc_custom_finished(builder: Gtk.Builder, child: (GObject.Object | null), tagname: string, data: (any | null)): void;

        /**
         * This is called at the end of each custom element handled by
         * the buildable.
         * @param builder {@link Gtk.Builder} used to construct this object
         * @param child child object or `null` for non-child tags
         * @param tagname name of tag
         * @param data user data that will be passed in to parser functions
         * @virtual
         */
        vfunc_custom_tag_end(builder: Gtk.Builder, child: (GObject.Object | null), tagname: string, data: (any | null)): void;

        /**
         * This is called for each unknown element under `<child>`.
         * @param builder a {@link Gtk.Builder} used to construct this object
         * @param child child object or `null` for non-child tags
         * @param tagname name of tag
         * @virtual
         */
        vfunc_custom_tag_start(builder: Gtk.Builder, child: (GObject.Object | null), tagname: string): [boolean, GLib.MarkupParser, any];

        /**
         * Get the internal child called `childname` of the `buildable` object.
         * @param builder a {@link Gtk.Builder}
         * @param childname name of child
         * @virtual
         */
        vfunc_get_internal_child<T = GObject.Object>(builder: Gtk.Builder, childname: string): T;

        /**
         * Gets the name of the `buildable` object.
         * 
         * {@link Gtk.Builder} sets the name based on the
         * [GtkBuilder UI definition][BUILDER-UI]
         * used to construct the `buildable`.
         * @virtual
         */
        vfunc_get_name(): string;

        /**
         * Called when the builder finishes the parsing of a
         * [GtkBuilder UI definition][BUILDER-UI].
         * Note that this will be called once for each time
         * `gtk_builder_add_from_file()` or `gtk_builder_add_from_string()`
         * is called on a builder.
         * @param builder a {@link Gtk.Builder}
         * @virtual
         */
        vfunc_parser_finished(builder: Gtk.Builder): void;

        /**
         * Sets the property name `name` to `value` on the `buildable` object.
         * @param builder a {@link Gtk.Builder}
         * @param name name of property
         * @param value value of property
         * @virtual
         */
        vfunc_set_buildable_property(builder: Gtk.Builder, name: string, value: unknown): void;

        /**
         * Sets the name of the `buildable` object.
         * @param name name to set
         * @virtual
         */
        vfunc_set_name(name: string): void;
    }


    namespace Suggestion {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            /**
             * @signal
             * @run-last
             */
            "replace-typed-text": (arg0: string) => string;
            /**
             * @signal
             * @run-last
             */
            "suggest-suffix": (arg0: string) => string;
            "notify::icon-name": (pspec: GObject.ParamSpec) => void;
            "notify::id": (pspec: GObject.ParamSpec) => void;
            "notify::subtitle": (pspec: GObject.ParamSpec) => void;
            "notify::title": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps {
            icon_name: string;
            iconName: string;
            id: string;
            subtitle: string;
            title: string;
        }
    }

    /**
     * @gir-type Class
     */
    class Suggestion extends GObject.Object {
        static $gtype: GObject.GType<Suggestion>;

        // Properties
        get icon_name(): string;
        set icon_name(val: string);

        get iconName(): string;
        set iconName(val: string);

        get id(): string;
        set id(val: string);

        get subtitle(): string;
        set subtitle(val: string);

        get title(): string;
        set title(val: string);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Suggestion.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<Suggestion.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](): Suggestion;

        // Signals
        /** @signal */
        connect<K extends keyof Suggestion.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Suggestion.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof Suggestion.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Suggestion.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof Suggestion.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<Suggestion.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Virtual methods
        /**
         * This function is meant to be used to replace the text in the entry with text
         * that represents the suggestion most accurately. This happens when the user
         * presses tab while typing a suggestion. For example, if typing "gno" in the
         * entry, you might have a suggest_suffix of "me.org" so that the user sees
         * "gnome.org". But the replace_typed_text might include more data such as
         * "https://gnome.org" as it more closely represents the suggestion.
         * @param typed_text the text that was typed into the entry
         * @virtual
         */
        vfunc_replace_typed_text(typed_text: string): (string | null);

        /**
         * This function requests potential text to append to `typed_text` to make it
         * more clear to the user what they will be activating by selecting this
         * suggestion. For example, if they start typing "gno", a potential suggested
         * suffix might be "me.org" to create "gnome.org".
         * @param typed_text The user entered text
         * @virtual
         */
        vfunc_suggest_suffix(typed_text: string): (string | null);

        // Methods
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
        replace_typed_text(typed_text: string): (string | null);

        /**
         * @param icon_name 
         */
        set_icon_name(icon_name: string): void;

        /**
         * @param id 
         */
        set_id(id: string): void;

        /**
         * @param subtitle 
         */
        set_subtitle(subtitle: string): void;

        /**
         * @param title 
         */
        set_title(title: string): void;

        /**
         * This function requests potential text to append to `typed_text` to make it
         * more clear to the user what they will be activating by selecting this
         * suggestion. For example, if they start typing "gno", a potential suggested
         * suffix might be "me.org" to create "gnome.org".
         * @param typed_text The user entered text
         * @returns Suffix to append to `typed_text`   or `null` to leave it unchanged.
         */
        suggest_suffix(typed_text: string): (string | null);
    }


    namespace SuggestionEntry {
        // Signal signatures
        interface SignalSignatures extends Gtk.Entry.SignalSignatures {
            /**
             * @signal
             * @action
             * @run-last
             */
            "activate-suggestion": () => void;
            /**
             * @signal
             * @action
             * @run-last
             */
            "hide-suggestions": () => void;
            /**
             * This moves the selected suggestion in the popover by the value
             * provided. -1 moves up one row, 1, moves down a row.
             * @signal
             * @action
             * @run-last
             */
            "move-suggestion": (arg0: number) => void;
            /**
             * @signal
             * @action
             * @run-last
             */
            "show-suggestions": () => void;
            /**
             * @signal
             * @run-last
             */
            "suggestion-activated": (arg0: Suggestion) => void;
            "notify::model": (pspec: GObject.ParamSpec) => void;
            "notify::typed-text": (pspec: GObject.ParamSpec) => void;
            "notify::activates-default": (pspec: GObject.ParamSpec) => void;
            "notify::attributes": (pspec: GObject.ParamSpec) => void;
            "notify::buffer": (pspec: GObject.ParamSpec) => void;
            "notify::caps-lock-warning": (pspec: GObject.ParamSpec) => void;
            "notify::completion": (pspec: GObject.ParamSpec) => void;
            "notify::cursor-position": (pspec: GObject.ParamSpec) => void;
            "notify::editable": (pspec: GObject.ParamSpec) => void;
            "notify::enable-emoji-completion": (pspec: GObject.ParamSpec) => void;
            "notify::has-frame": (pspec: GObject.ParamSpec) => void;
            "notify::im-module": (pspec: GObject.ParamSpec) => void;
            "notify::inner-border": (pspec: GObject.ParamSpec) => void;
            "notify::input-hints": (pspec: GObject.ParamSpec) => void;
            "notify::input-purpose": (pspec: GObject.ParamSpec) => void;
            "notify::invisible-char": (pspec: GObject.ParamSpec) => void;
            "notify::invisible-char-set": (pspec: GObject.ParamSpec) => void;
            "notify::max-length": (pspec: GObject.ParamSpec) => void;
            "notify::max-width-chars": (pspec: GObject.ParamSpec) => void;
            "notify::overwrite-mode": (pspec: GObject.ParamSpec) => void;
            "notify::placeholder-text": (pspec: GObject.ParamSpec) => void;
            "notify::populate-all": (pspec: GObject.ParamSpec) => void;
            "notify::primary-icon-activatable": (pspec: GObject.ParamSpec) => void;
            "notify::primary-icon-gicon": (pspec: GObject.ParamSpec) => void;
            "notify::primary-icon-name": (pspec: GObject.ParamSpec) => void;
            "notify::primary-icon-pixbuf": (pspec: GObject.ParamSpec) => void;
            "notify::primary-icon-sensitive": (pspec: GObject.ParamSpec) => void;
            "notify::primary-icon-stock": (pspec: GObject.ParamSpec) => void;
            "notify::primary-icon-storage-type": (pspec: GObject.ParamSpec) => void;
            "notify::primary-icon-tooltip-markup": (pspec: GObject.ParamSpec) => void;
            "notify::primary-icon-tooltip-text": (pspec: GObject.ParamSpec) => void;
            "notify::progress-fraction": (pspec: GObject.ParamSpec) => void;
            "notify::progress-pulse-step": (pspec: GObject.ParamSpec) => void;
            "notify::scroll-offset": (pspec: GObject.ParamSpec) => void;
            "notify::secondary-icon-activatable": (pspec: GObject.ParamSpec) => void;
            "notify::secondary-icon-gicon": (pspec: GObject.ParamSpec) => void;
            "notify::secondary-icon-name": (pspec: GObject.ParamSpec) => void;
            "notify::secondary-icon-pixbuf": (pspec: GObject.ParamSpec) => void;
            "notify::secondary-icon-sensitive": (pspec: GObject.ParamSpec) => void;
            "notify::secondary-icon-stock": (pspec: GObject.ParamSpec) => void;
            "notify::secondary-icon-storage-type": (pspec: GObject.ParamSpec) => void;
            "notify::secondary-icon-tooltip-markup": (pspec: GObject.ParamSpec) => void;
            "notify::secondary-icon-tooltip-text": (pspec: GObject.ParamSpec) => void;
            "notify::selection-bound": (pspec: GObject.ParamSpec) => void;
            "notify::shadow-type": (pspec: GObject.ParamSpec) => void;
            "notify::show-emoji-icon": (pspec: GObject.ParamSpec) => void;
            "notify::tabs": (pspec: GObject.ParamSpec) => void;
            "notify::text": (pspec: GObject.ParamSpec) => void;
            "notify::text-length": (pspec: GObject.ParamSpec) => void;
            "notify::truncate-multiline": (pspec: GObject.ParamSpec) => void;
            "notify::visibility": (pspec: GObject.ParamSpec) => void;
            "notify::width-chars": (pspec: GObject.ParamSpec) => void;
            "notify::xalign": (pspec: GObject.ParamSpec) => void;
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
            "notify::editing-canceled": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends Gtk.Entry.ConstructorProps, Atk.ImplementorIface.ConstructorProps, Gtk.Buildable.ConstructorProps, Gtk.CellEditable.ConstructorProps, Gtk.Editable.ConstructorProps {
            model: (Gio.ListModel | null);
            typed_text: string;
            typedText: string;
        }
    }

    /**
     * @gir-type Class
     */
    class SuggestionEntry extends Gtk.Entry implements Atk.ImplementorIface, Gtk.Buildable, Gtk.CellEditable, Gtk.Editable {
        static $gtype: GObject.GType<SuggestionEntry>;

        // Properties
        get model(): (Gio.ListModel | null);
        set model(val: (Gio.ListModel | null));

        /**
         * @read-only
         */
        get typed_text(): string;

        /**
         * @read-only
         */
        get typedText(): string;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: SuggestionEntry.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<SuggestionEntry.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](): SuggestionEntry;

        // Signals
        /** @signal */
        connect<K extends keyof SuggestionEntry.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, SuggestionEntry.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof SuggestionEntry.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, SuggestionEntry.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof SuggestionEntry.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<SuggestionEntry.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Virtual methods
        /**
         * @virtual
         */
        vfunc_hide_suggestions(): void;

        /**
         * @param amount 
         * @virtual
         */
        vfunc_move_suggestion(amount: number): void;

        /**
         * @virtual
         */
        vfunc_show_suggestions(): void;

        /**
         * @param suggestion 
         * @virtual
         */
        vfunc_suggestion_activated(suggestion: Suggestion): void;

        // Methods
        /**
         * Gets the model being visualized.
         * @returns A {@link Gio.ListModel} or `null`.
         */
        get_model(): (Gio.ListModel | null);

        /**
         * Gets the currently selected suggestion.
         * @returns An {@link Egg.Suggestion} or `null`.
         */
        get_suggestion(): (Suggestion | null);

        get_typed_text(): string;

        /**
         * @param model 
         */
        set_model(model: Gio.ListModel): void;

        /**
         * @param suggestion 
         */
        set_suggestion(suggestion: Suggestion): void;

        /**
         * Indicates whether editing on the cell has been canceled.
         * @since 2.20
         * @default false
          * @category Inherited from Gtk.CellEditable
         */
        get editing_canceled(): boolean;
        set editing_canceled(val: boolean);

        /**
         * Indicates whether editing on the cell has been canceled.
         * @since 2.20
         * @default false
          * @category Inherited from Gtk.CellEditable
         */
        get editingCanceled(): boolean;
        set editingCanceled(val: boolean);

        /**
         * Emits the {@link Gtk.CellEditable.SignalSignatures.editing_done | Gtk.CellEditable::editing-done} signal.
         */
        editing_done(): void;

        /**
         * Emits the {@link Gtk.CellEditable.SignalSignatures.remove_widget | Gtk.CellEditable::remove-widget} signal.
         */
        remove_widget(): void;

        /**
         * Begins editing on a `cell_editable`.
         * 
         * The {@link Gtk.CellRenderer} for the cell creates and returns a {@link Gtk.CellEditable} from
         * `gtk_cell_renderer_start_editing()`, configured for the {@link Gtk.CellRenderer} type.
         * 
         * `gtk_cell_editable_start_editing()` can then set up `cell_editable` suitably for
         * editing a cell, e.g. making the Esc key emit {@link Gtk.CellEditable.SignalSignatures.editing_done | Gtk.CellEditable::editing-done}.
         * 
         * Note that the `cell_editable` is created on-demand for the current edit; its
         * lifetime is temporary and does not persist across other edits and/or cells.
         * @param event The {@link Gdk.Event} that began the editing process, or   `null` if editing was initiated programmatically
         */
        start_editing(event: (Gdk.Event | null)): void;

        /**
         * Emits the {@link Gtk.CellEditable.SignalSignatures.editing_done | Gtk.CellEditable::editing-done} signal.
         * @virtual
         */
        vfunc_editing_done(): void;

        /**
         * Emits the {@link Gtk.CellEditable.SignalSignatures.remove_widget | Gtk.CellEditable::remove-widget} signal.
         * @virtual
         */
        vfunc_remove_widget(): void;

        /**
         * Begins editing on a `cell_editable`.
         * 
         * The {@link Gtk.CellRenderer} for the cell creates and returns a {@link Gtk.CellEditable} from
         * `gtk_cell_renderer_start_editing()`, configured for the {@link Gtk.CellRenderer} type.
         * 
         * `gtk_cell_editable_start_editing()` can then set up `cell_editable` suitably for
         * editing a cell, e.g. making the Esc key emit {@link Gtk.CellEditable.SignalSignatures.editing_done | Gtk.CellEditable::editing-done}.
         * 
         * Note that the `cell_editable` is created on-demand for the current edit; its
         * lifetime is temporary and does not persist across other edits and/or cells.
         * @param event The {@link Gdk.Event} that began the editing process, or   `null` if editing was initiated programmatically
         * @virtual
         */
        vfunc_start_editing(event: (Gdk.Event | null)): void;

        /**
         * Copies the contents of the currently selected content in the editable and
         * puts it on the clipboard.
         */
        copy_clipboard(): void;

        /**
         * Removes the contents of the currently selected content in the editable and
         * puts it on the clipboard.
         */
        cut_clipboard(): void;

        /**
         * Deletes the currently selected text of the editable.
         * This call doesn’t do anything if there is no selected text.
         */
        delete_selection(): void;

        /**
         * Deletes a sequence of characters. The characters that are deleted are
         * those characters at positions from `start_pos` up to, but not including
         * `end_pos`. If `end_pos` is negative, then the characters deleted
         * are those from `start_pos` to the end of the text.
         * 
         * Note that the positions are specified in characters, not bytes.
         * @param start_pos start position
         * @param end_pos end position
         */
        delete_text(start_pos: number, end_pos: number): void;

        /**
         * Retrieves a sequence of characters. The characters that are retrieved
         * are those characters at positions from `start_pos` up to, but not
         * including `end_pos`. If `end_pos` is negative, then the characters
         * retrieved are those characters from `start_pos` to the end of the text.
         * 
         * Note that positions are specified in characters, not bytes.
         * @param start_pos start of text
         * @param end_pos end of text
         * @returns a pointer to the contents of the widget as a      string. This string is allocated by the {@link Gtk.Editable}      implementation and should be freed by the caller.
         */
        get_chars(start_pos: number, end_pos: number): string;

        /**
         * Retrieves whether `editable` is editable. See
         * `gtk_editable_set_editable()`.
         * @returns `true` if `editable` is editable.
         */
        get_editable(): boolean;

        /**
         * Retrieves the current position of the cursor relative to the start
         * of the content of the editable.
         * 
         * Note that this position is in characters, not in bytes.
         * @returns the cursor position
         */
        get_position(): number;

        /**
         * Retrieves the selection bound of the editable. start_pos will be filled
         * with the start of the selection and `end_pos` with end. If no text was
         * selected both will be identical and `false` will be returned.
         * 
         * Note that positions are specified in characters, not bytes.
         * @returns `true` if an area is selected, `false` otherwise
         */
        get_selection_bounds(): [boolean, number, number];

        /**
         * Inserts `new_text_length` bytes of `new_text` into the contents of the
         * widget, at position `position`.
         * 
         * Note that the position is in characters, not in bytes.
         * The function updates `position` to point after the newly inserted text.
         * @param new_text the text to append
         * @param new_text_length the length of the text in bytes, or -1
         * @param position location of the position text will be inserted at
         */
        insert_text(new_text: string, new_text_length: number, position: number): number;

        /**
         * Pastes the content of the clipboard to the current position of the
         * cursor in the editable.
         */
        paste_clipboard(): void;

        /**
         * Selects a region of text. The characters that are selected are
         * those characters at positions from `start_pos` up to, but not
         * including `end_pos`. If `end_pos` is negative, then the
         * characters selected are those characters from `start_pos` to
         * the end of the text.
         * 
         * Note that positions are specified in characters, not bytes.
         * @param start_pos start of region
         * @param end_pos end of region
         */
        select_region(start_pos: number, end_pos: number): void;

        /**
         * Determines if the user can edit the text in the editable
         * widget or not.
         * @param is_editable `true` if the user is allowed to edit the text   in the widget
         */
        set_editable(is_editable: boolean): void;

        /**
         * Sets the cursor position in the editable to the given value.
         * 
         * The cursor is displayed before the character with the given (base 0)
         * index in the contents of the editable. The value must be less than or
         * equal to the number of characters in the editable. A value of -1
         * indicates that the position should be set after the last character
         * of the editable. Note that `position` is in characters, not in bytes.
         * @param position the position of the cursor
         */
        set_position(position: number): void;

        /**
         * @virtual
         */
        vfunc_changed(): void;

        /**
         * Deletes a sequence of characters. The characters that are deleted are
         * those characters at positions from `start_pos` up to, but not including
         * `end_pos`. If `end_pos` is negative, then the characters deleted
         * are those from `start_pos` to the end of the text.
         * 
         * Note that the positions are specified in characters, not bytes.
         * @param start_pos start position
         * @param end_pos end position
         * @virtual
         */
        vfunc_delete_text(start_pos: number, end_pos: number): void;

        /**
         * Deletes a sequence of characters. The characters that are deleted are
         * those characters at positions from `start_pos` up to, but not including
         * `end_pos`. If `end_pos` is negative, then the characters deleted
         * are those from `start_pos` to the end of the text.
         * 
         * Note that the positions are specified in characters, not bytes.
         * @param start_pos start position
         * @param end_pos end position
         * @virtual
         */
        vfunc_do_delete_text(start_pos: number, end_pos: number): void;

        /**
         * Inserts `new_text_length` bytes of `new_text` into the contents of the
         * widget, at position `position`.
         * 
         * Note that the position is in characters, not in bytes.
         * The function updates `position` to point after the newly inserted text.
         * @param new_text the text to append
         * @param new_text_length the length of the text in bytes, or -1
         * @param position location of the position text will be inserted at
         * @virtual
         */
        vfunc_do_insert_text(new_text: string, new_text_length: number, position: number): number;

        /**
         * Retrieves a sequence of characters. The characters that are retrieved
         * are those characters at positions from `start_pos` up to, but not
         * including `end_pos`. If `end_pos` is negative, then the characters
         * retrieved are those characters from `start_pos` to the end of the text.
         * 
         * Note that positions are specified in characters, not bytes.
         * @param start_pos start of text
         * @param end_pos end of text
         * @virtual
         */
        vfunc_get_chars(start_pos: number, end_pos: number): string;

        /**
         * Retrieves the current position of the cursor relative to the start
         * of the content of the editable.
         * 
         * Note that this position is in characters, not in bytes.
         * @virtual
         */
        vfunc_get_position(): number;

        /**
         * Retrieves the selection bound of the editable. start_pos will be filled
         * with the start of the selection and `end_pos` with end. If no text was
         * selected both will be identical and `false` will be returned.
         * 
         * Note that positions are specified in characters, not bytes.
         * @virtual
         */
        vfunc_get_selection_bounds(): [boolean, number, number];

        /**
         * Inserts `new_text_length` bytes of `new_text` into the contents of the
         * widget, at position `position`.
         * 
         * Note that the position is in characters, not in bytes.
         * The function updates `position` to point after the newly inserted text.
         * @param new_text the text to append
         * @param new_text_length the length of the text in bytes, or -1
         * @param position location of the position text will be inserted at
         * @virtual
         */
        vfunc_insert_text(new_text: string, new_text_length: number, position: number): number;

        /**
         * Sets the cursor position in the editable to the given value.
         * 
         * The cursor is displayed before the character with the given (base 0)
         * index in the contents of the editable. The value must be less than or
         * equal to the number of characters in the editable. A value of -1
         * indicates that the position should be set after the last character
         * of the editable. Note that `position` is in characters, not in bytes.
         * @param position the position of the cursor
         * @virtual
         */
        vfunc_set_position(position: number): void;

        /**
         * Selects a region of text. The characters that are selected are
         * those characters at positions from `start_pos` up to, but not
         * including `end_pos`. If `end_pos` is negative, then the
         * characters selected are those characters from `start_pos` to
         * the end of the text.
         * 
         * Note that positions are specified in characters, not bytes.
         * @param start_pos start of region
         * @param end_pos end of region
         * @virtual
         */
        vfunc_set_selection_bounds(start_pos: number, end_pos: number): void;
    }


    namespace SuggestionEntryBuffer {
        // Signal signatures
        interface SignalSignatures extends Gtk.EntryBuffer.SignalSignatures {
            "notify::suggestion": (pspec: GObject.ParamSpec) => void;
            "notify::length": (pspec: GObject.ParamSpec) => void;
            "notify::max-length": (pspec: GObject.ParamSpec) => void;
            "notify::text": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends Gtk.EntryBuffer.ConstructorProps {
            suggestion: (Suggestion | null);
        }
    }

    /**
     * @gir-type Class
     */
    class SuggestionEntryBuffer extends Gtk.EntryBuffer {
        static $gtype: GObject.GType<SuggestionEntryBuffer>;

        // Properties
        get suggestion(): (Suggestion | null);
        set suggestion(val: (Suggestion | null));

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: SuggestionEntryBuffer.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<SuggestionEntryBuffer.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](): SuggestionEntryBuffer;

        // Signals
        /** @signal */
        connect<K extends keyof SuggestionEntryBuffer.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, SuggestionEntryBuffer.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof SuggestionEntryBuffer.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, SuggestionEntryBuffer.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof SuggestionEntryBuffer.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<SuggestionEntryBuffer.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Methods
        commit(): void;

        /**
         * Gets the {@link Egg.Suggestion} that is the current "preview suffix" of the
         * text in the entry.
         * @returns An {@link Egg.Suggestion} or `null`.
         */
        get_suggestion(): (Suggestion | null);

        get_typed_length(): number;

        get_typed_text(): string;

        /**
         * Sets the current suggestion for the entry buffer.
         * 
         * The suggestion is used to get a potential suffix for the current entry
         * text. This allows the entry to show "preview text" after the entered
         * text for what might be inserted should they activate the current item.
         * @param suggestion An {@link Egg.Suggestion} or `null`
         */
        set_suggestion(suggestion: (Suggestion | null)): void;
    }


    namespace SuggestionPopover {
        // Signal signatures
        interface SignalSignatures extends Gtk.Window.SignalSignatures {
            /**
             * @signal
             * @run-last
             */
            "suggestion-activated": (arg0: Suggestion) => void;
            "notify::model": (pspec: GObject.ParamSpec) => void;
            "notify::relative-to": (pspec: GObject.ParamSpec) => void;
            "notify::selected": (pspec: GObject.ParamSpec) => void;
            "notify::accept-focus": (pspec: GObject.ParamSpec) => void;
            "notify::application": (pspec: GObject.ParamSpec) => void;
            "notify::attached-to": (pspec: GObject.ParamSpec) => void;
            "notify::decorated": (pspec: GObject.ParamSpec) => void;
            "notify::default-height": (pspec: GObject.ParamSpec) => void;
            "notify::default-width": (pspec: GObject.ParamSpec) => void;
            "notify::deletable": (pspec: GObject.ParamSpec) => void;
            "notify::destroy-with-parent": (pspec: GObject.ParamSpec) => void;
            "notify::focus-on-map": (pspec: GObject.ParamSpec) => void;
            "notify::focus-visible": (pspec: GObject.ParamSpec) => void;
            "notify::gravity": (pspec: GObject.ParamSpec) => void;
            "notify::has-resize-grip": (pspec: GObject.ParamSpec) => void;
            "notify::has-toplevel-focus": (pspec: GObject.ParamSpec) => void;
            "notify::hide-titlebar-when-maximized": (pspec: GObject.ParamSpec) => void;
            "notify::icon": (pspec: GObject.ParamSpec) => void;
            "notify::icon-name": (pspec: GObject.ParamSpec) => void;
            "notify::is-active": (pspec: GObject.ParamSpec) => void;
            "notify::is-maximized": (pspec: GObject.ParamSpec) => void;
            "notify::mnemonics-visible": (pspec: GObject.ParamSpec) => void;
            "notify::modal": (pspec: GObject.ParamSpec) => void;
            "notify::resizable": (pspec: GObject.ParamSpec) => void;
            "notify::resize-grip-visible": (pspec: GObject.ParamSpec) => void;
            "notify::role": (pspec: GObject.ParamSpec) => void;
            "notify::screen": (pspec: GObject.ParamSpec) => void;
            "notify::skip-pager-hint": (pspec: GObject.ParamSpec) => void;
            "notify::skip-taskbar-hint": (pspec: GObject.ParamSpec) => void;
            "notify::startup-id": (pspec: GObject.ParamSpec) => void;
            "notify::title": (pspec: GObject.ParamSpec) => void;
            "notify::transient-for": (pspec: GObject.ParamSpec) => void;
            "notify::type": (pspec: GObject.ParamSpec) => void;
            "notify::type-hint": (pspec: GObject.ParamSpec) => void;
            "notify::urgency-hint": (pspec: GObject.ParamSpec) => void;
            "notify::window-position": (pspec: GObject.ParamSpec) => void;
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
        interface ConstructorProps extends Gtk.Window.ConstructorProps, Atk.ImplementorIface.ConstructorProps, Gtk.Buildable.ConstructorProps {
            model: (Suggestion | null);
            relative_to: (Gtk.Widget | null);
            relativeTo: Gtk.Widget;
            selected: (Suggestion | null);
        }
    }

    /**
     * @gir-type Class
     */
    class SuggestionPopover extends Gtk.Window implements Atk.ImplementorIface, Gtk.Buildable {
        static $gtype: GObject.GType<SuggestionPopover>;

        // Properties
        get model(): (Suggestion | null);
        set model(val: (Suggestion | null));

        get relative_to(): (Gtk.Widget | null);
        set relative_to(val: (Gtk.Widget | null));

        get relativeTo(): Gtk.Widget;
        set relativeTo(val: Gtk.Widget);

        get selected(): (Suggestion | null);
        set selected(val: (Suggestion | null));

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: SuggestionPopover.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<SuggestionPopover.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](): SuggestionPopover;

        // Signals
        /** @signal */
        connect<K extends keyof SuggestionPopover.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, SuggestionPopover.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof SuggestionPopover.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, SuggestionPopover.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof SuggestionPopover.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<SuggestionPopover.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Methods
        activate_selected(): void;

        /**
         * Gets the model being visualized.
         * @returns A {@link Gio.ListModel} or `null`.
         */
        get_model(): (Gio.ListModel | null);

        /**
         * @returns A {@link Gtk.Widget} or `null`.
         */
        get_relative_to(): (Gtk.Widget | null);

        /**
         * Gets the currently selected suggestion.
         * @returns An {@link Egg.Suggestion} or `null`.
         */
        get_selected(): (Suggestion | null);

        /**
         * @param amount 
         */
        move_by(amount: number): void;

        popdown(): void;

        popup(): void;

        /**
         * @param model 
         */
        set_model(model: Gio.ListModel): void;

        /**
         * @param widget 
         */
        set_relative_to(widget: Gtk.Widget): void;

        /**
         * @param suggestion 
         */
        set_selected(suggestion: Suggestion): void;
    }


    namespace SuggestionRow {
        // Signal signatures
        interface SignalSignatures extends Gtk.ListBoxRow.SignalSignatures {
            "notify::suggestion": (pspec: GObject.ParamSpec) => void;
            "notify::activatable": (pspec: GObject.ParamSpec) => void;
            "notify::selectable": (pspec: GObject.ParamSpec) => void;
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
        interface ConstructorProps extends Gtk.ListBoxRow.ConstructorProps, Atk.ImplementorIface.ConstructorProps, Gtk.Buildable.ConstructorProps {
            suggestion: Suggestion;
        }
    }

    /**
     * @gir-type Class
     */
    class SuggestionRow extends Gtk.ListBoxRow implements Atk.ImplementorIface, Gtk.Buildable {
        static $gtype: GObject.GType<SuggestionRow>;

        // Properties
        get suggestion(): Suggestion;
        set suggestion(val: Suggestion);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: SuggestionRow.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<SuggestionRow.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](): SuggestionRow;

        // Signals
        /** @signal */
        connect<K extends keyof SuggestionRow.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, SuggestionRow.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof SuggestionRow.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, SuggestionRow.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof SuggestionRow.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<SuggestionRow.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Methods
        /**
         * Gets the suggestion to be displayed.
         * @returns An {@link Egg.Suggestion}
         */
        get_suggestion(): Suggestion;

        /**
         * @param suggestion 
         */
        set_suggestion(suggestion: Suggestion): void;
    }


    namespace TaskCache {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            "notify::key-copy-func": (pspec: GObject.ParamSpec) => void;
            "notify::key-destroy-func": (pspec: GObject.ParamSpec) => void;
            "notify::key-equal-func": (pspec: GObject.ParamSpec) => void;
            "notify::key-hash-func": (pspec: GObject.ParamSpec) => void;
            "notify::populate-callback": (pspec: GObject.ParamSpec) => void;
            "notify::populate-callback-data": (pspec: GObject.ParamSpec) => void;
            "notify::populate-callback-data-destroy": (pspec: GObject.ParamSpec) => void;
            "notify::time-to-live": (pspec: GObject.ParamSpec) => void;
            "notify::value-copy-func": (pspec: GObject.ParamSpec) => void;
            "notify::value-destroy-func": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps {
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
            time_to_live: (bigint | number);
            timeToLive: (bigint | number);
            value_copy_func: any;
            valueCopyFunc: any;
            value_destroy_func: any;
            valueDestroyFunc: any;
        }
    }

    /**
     * @gir-type Class
     */
    class TaskCache extends GObject.Object {
        static $gtype: GObject.GType<TaskCache>;

        // Properties
        /**
         * @construct-only
         */
        set key_copy_func(val: any);

        /**
         * @construct-only
         */
        set keyCopyFunc(val: any);

        /**
         * @construct-only
         */
        set key_destroy_func(val: any);

        /**
         * @construct-only
         */
        set keyDestroyFunc(val: any);

        /**
         * @construct-only
         */
        set key_equal_func(val: any);

        /**
         * @construct-only
         */
        set keyEqualFunc(val: any);

        /**
         * @construct-only
         */
        set key_hash_func(val: any);

        /**
         * @construct-only
         */
        set keyHashFunc(val: any);

        /**
         * @construct-only
         */
        set populate_callback(val: any);

        /**
         * @construct-only
         */
        set populateCallback(val: any);

        /**
         * @construct-only
         */
        set populate_callback_data(val: any);

        /**
         * @construct-only
         */
        set populateCallbackData(val: any);

        /**
         * @construct-only
         */
        set populate_callback_data_destroy(val: any);

        /**
         * @construct-only
         */
        set populateCallbackDataDestroy(val: any);

        /**
         * This is the number of milliseconds before an item should be evicted
         * from the cache.
         * 
         * A value of zero indicates no eviction.
         * @construct-only
         */
        set time_to_live(val: (bigint | number));

        /**
         * This is the number of milliseconds before an item should be evicted
         * from the cache.
         * 
         * A value of zero indicates no eviction.
         * @construct-only
         */
        set timeToLive(val: (bigint | number));

        /**
         * @construct-only
         */
        set value_copy_func(val: any);

        /**
         * @construct-only
         */
        set valueCopyFunc(val: any);

        /**
         * @construct-only
         */
        set value_destroy_func(val: any);

        /**
         * @construct-only
         */
        set valueDestroyFunc(val: any);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: TaskCache.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<TaskCache.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals
        /** @signal */
        connect<K extends keyof TaskCache.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, TaskCache.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof TaskCache.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, TaskCache.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof TaskCache.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<TaskCache.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Methods
        /**
         * @param key 
         */
        evict(key: (any | null)): boolean;

        evict_all(): void;

        /**
         * @param key 
         * @param force_update 
         * @param cancellable 
         */
        get_async(key: (any | null), force_update: boolean, cancellable: (Gio.Cancellable | null)): globalThis.Promise<(any | null)>;

        /**
         * @param key 
         * @param force_update 
         * @param cancellable 
         * @param callback 
         */
        get_async(key: (any | null), force_update: boolean, cancellable: (Gio.Cancellable | null), callback: (Gio.AsyncReadyCallback<this> | null)): void;

        /**
         * @param key 
         * @param force_update 
         * @param cancellable 
         * @param callback 
         */
        get_async(key: (any | null), force_update: boolean, cancellable: (Gio.Cancellable | null), callback?: (Gio.AsyncReadyCallback<this> | null)): (globalThis.Promise<(any | null)> | void);

        /**
         * Finish a call to `egg_task_cache_get_async()`.
         * @param result 
         * @returns The result from the cache.
         */
        get_finish(result: Gio.AsyncResult): (any | null);

        /**
         * Peeks to see `key` is contained in the cache and returns the
         * matching {@link GObject.Object} if it does.
         * 
         * The reference count of the resulting {@link GObject.Object} is not incremented.
         * For that reason, it is important to remember that this function
         * may only be called from the main thread.
         * @param key The key for the cache
         * @returns A {@link GObject.Object} or   `null` if the key was not found in the cache.
         */
        peek<T = GObject.Object>(key: (any | null)): T;

        /**
         * @param name 
         */
        set_name(name: string): void;
    }


    namespace ThreeGrid {
        // Signal signatures
        interface SignalSignatures extends Gtk.Container.SignalSignatures {
            "notify::column-spacing": (pspec: GObject.ParamSpec) => void;
            "notify::row-spacing": (pspec: GObject.ParamSpec) => void;
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
        interface ConstructorProps extends Gtk.Container.ConstructorProps, Atk.ImplementorIface.ConstructorProps, Gtk.Buildable.ConstructorProps {
            column_spacing: number;
            columnSpacing: number;
            row_spacing: number;
            rowSpacing: number;
        }
    }

    /**
     * @gir-type Class
     */
    class ThreeGrid extends Gtk.Container implements Atk.ImplementorIface, Gtk.Buildable {
        static $gtype: GObject.GType<ThreeGrid>;

        // Properties
        get column_spacing(): number;
        set column_spacing(val: number);

        get columnSpacing(): number;
        set columnSpacing(val: number);

        get row_spacing(): number;
        set row_spacing(val: number);

        get rowSpacing(): number;
        set rowSpacing(val: number);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: ThreeGrid.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<ThreeGrid.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](): ThreeGrid;

        // Signals
        /** @signal */
        connect<K extends keyof ThreeGrid.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, ThreeGrid.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof ThreeGrid.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, ThreeGrid.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof ThreeGrid.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<ThreeGrid.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
    }


    namespace WidgetActionGroup {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            "notify::widget": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps, Gio.ActionGroup.ConstructorProps {
            widget: Gtk.Widget;
        }
    }

    /**
     * @gir-type Class
     */
    class WidgetActionGroup extends GObject.Object implements Gio.ActionGroup {
        static $gtype: GObject.GType<WidgetActionGroup>;

        // Properties
        /**
         * @construct-only
         */
        get widget(): Gtk.Widget;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: WidgetActionGroup.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<WidgetActionGroup.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals
        /** @signal */
        connect<K extends keyof WidgetActionGroup.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, WidgetActionGroup.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof WidgetActionGroup.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, WidgetActionGroup.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof WidgetActionGroup.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<WidgetActionGroup.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Static methods
        /**
         * Helper function to create an {@link Egg.WidgetActionGroup} and attach
         * it to `widget` using the group name `group_name`.
         * @param widget A {@link Gtk.Widget}
         * @param group_name the group name to use for the action group
         */
        static attach(widget: Gtk.Widget, group_name: string): void;

        /**
         * @param widget 
         */
        static ["new"](widget: Gtk.Widget): Gio.ActionGroup;

        // Methods
        /**
         * @param action_name 
         * @param enabled 
         */
        set_action_enabled(action_name: string, enabled: boolean): void;

        /**
         * Emits the `Gio.ActionGroup::action-added` signal on `action_group`.
         * 
         * This function should only be called by {@link Gio.ActionGroup} implementations.
         * @param action_name the name of an action in the group
         */
        action_added(action_name: string): void;

        /**
         * Emits the `Gio.ActionGroup::action-enabled-changed` signal on `action_group`.
         * 
         * This function should only be called by {@link Gio.ActionGroup} implementations.
         * @param action_name the name of an action in the group
         * @param enabled whether the action is now enabled
         */
        action_enabled_changed(action_name: string, enabled: boolean): void;

        /**
         * Emits the `Gio.ActionGroup::action-removed` signal on `action_group`.
         * 
         * This function should only be called by {@link Gio.ActionGroup} implementations.
         * @param action_name the name of an action in the group
         */
        action_removed(action_name: string): void;

        /**
         * Emits the `Gio.ActionGroup::action-state-changed` signal on `action_group`.
         * 
         * This function should only be called by {@link Gio.ActionGroup} implementations.
         * @param action_name the name of an action in the group
         * @param state the new state of the named action
         */
        action_state_changed(action_name: string, state: GLib.Variant): void;

        /**
         * Activate the named action within `action_group`.
         * 
         * If the action is expecting a parameter, then the correct type of
         * parameter must be given as `parameter`.  If the action is expecting no
         * parameters then `parameter` must be `NULL`.  See
         * {@link Gio.ActionGroup.get_action_parameter_type}.
         * 
         * If the {@link Gio.ActionGroup} implementation supports asynchronous remote
         * activation over D-Bus, this call may return before the relevant
         * D-Bus traffic has been sent, or any replies have been received. In
         * order to block on such asynchronous activation calls,
         * {@link Gio.DBusConnection.flush} should be called prior to the code, which
         * depends on the result of the action activation. Without flushing
         * the D-Bus connection, there is no guarantee that the action would
         * have been activated.
         * 
         * The following code which runs in a remote app instance, shows an
         * example of a ‘quit’ action being activated on the primary app
         * instance over D-Bus. Here {@link Gio.DBusConnection.flush} is called
         * before `exit()`. Without `g_dbus_connection_flush()`, the ‘quit’ action
         * may fail to be activated on the primary instance.
         * 
         * ```c
         * // call ‘quit’ action on primary instance
         * g_action_group_activate_action (G_ACTION_GROUP (app), "quit", NULL);
         * 
         * // make sure the action is activated now
         * g_dbus_connection_flush (…);
         * 
         * g_debug ("Application has been terminated. Exiting.");
         * 
         * exit (0);
         * ```
         * @param action_name the name of the action to activate
         * @param parameter parameters to the activation
         */
        activate_action(action_name: string, parameter: (GLib.Variant | null)): void;

        /**
         * Request for the state of the named action within `action_group` to be
         * changed to `value`.
         * 
         * The action must be stateful and `value` must be of the correct type.
         * See {@link Gio.ActionGroup.get_action_state_type}.
         * 
         * This call merely requests a change.  The action may refuse to change
         * its state or may change its state to something other than `value`.
         * See {@link Gio.ActionGroup.get_action_state_hint}.
         * 
         * If the `value` GVariant is floating, it is consumed.
         * @param action_name the name of the action to request the change on
         * @param value the new state
         */
        change_action_state(action_name: string, value: GLib.Variant): void;

        /**
         * Checks if the named action within `action_group` is currently enabled.
         * 
         * An action must be enabled in order to be activated or in order to
         * have its state changed from outside callers.
         * @param action_name the name of the action to query
         * @returns whether the action is currently enabled
         */
        get_action_enabled(action_name: string): boolean;

        /**
         * Queries the type of the parameter that must be given when activating
         * the named action within `action_group`.
         * 
         * When activating the action using {@link Gio.ActionGroup.activate_action},
         * the {@link GLib.Variant} given to that function must be of the type returned
         * by this function.
         * 
         * In the case that this function returns `NULL`, you must not give any
         * {@link GLib.Variant}, but `NULL` instead.
         * 
         * The parameter type of a particular action will never change but it is
         * possible for an action to be removed and for a new action to be added
         * with the same name but a different parameter type.
         * @param action_name the name of the action to query
         * @returns the parameter type
         */
        get_action_parameter_type(action_name: string): (GLib.VariantType | null);

        /**
         * Queries the current state of the named action within `action_group`.
         * 
         * If the action is not stateful then `NULL` will be returned.  If the
         * action is stateful then the type of the return value is the type
         * given by {@link Gio.ActionGroup.get_action_state_type}.
         * 
         * The return value (if non-`NULL`) should be freed with
         * {@link GLib.Variant.unref} when it is no longer required.
         * @param action_name the name of the action to query
         * @returns the current state of the action
         */
        get_action_state(action_name: string): (GLib.Variant | null);

        /**
         * Requests a hint about the valid range of values for the state of the
         * named action within `action_group`.
         * 
         * If `NULL` is returned it either means that the action is not stateful
         * or that there is no hint about the valid range of values for the
         * state of the action.
         * 
         * If a {@link GLib.Variant} array is returned then each item in the array is a
         * possible value for the state.  If a {@link GLib.Variant} pair (ie: two-tuple) is
         * returned then the tuple specifies the inclusive lower and upper bound
         * of valid values for the state.
         * 
         * In any case, the information is merely a hint.  It may be possible to
         * have a state value outside of the hinted range and setting a value
         * within the range may fail.
         * 
         * The return value (if non-`NULL`) should be freed with
         * {@link GLib.Variant.unref} when it is no longer required.
         * @param action_name the name of the action to query
         * @returns the state range hint
         */
        get_action_state_hint(action_name: string): (GLib.Variant | null);

        /**
         * Queries the type of the state of the named action within
         * `action_group`.
         * 
         * If the action is stateful then this function returns the
         * {@link GLib.VariantType} of the state.  All calls to
         * {@link Gio.ActionGroup.change_action_state} must give a {@link GLib.Variant} of this
         * type and {@link Gio.ActionGroup.get_action_state} will return a {@link GLib.Variant}
         * of the same type.
         * 
         * If the action is not stateful then this function will return `NULL`.
         * In that case, {@link Gio.ActionGroup.get_action_state} will return `NULL`
         * and you must not call {@link Gio.ActionGroup.change_action_state}.
         * 
         * The state type of a particular action will never change but it is
         * possible for an action to be removed and for a new action to be added
         * with the same name but a different state type.
         * @param action_name the name of the action to query
         * @returns the state type, if the action is stateful
         */
        get_action_state_type(action_name: string): (GLib.VariantType | null);

        /**
         * Checks if the named action exists within `action_group`.
         * @param action_name the name of the action to check for
         * @returns whether the named action exists
         */
        has_action(action_name: string): boolean;

        /**
         * Lists the actions contained within `action_group`.
         * 
         * The caller is responsible for freeing the list with {@link GLib.strfreev} when
         * it is no longer required.
         * @returns a `NULL`-terminated array   of the names of the actions in the group
         */
        list_actions(): string[];

        /**
         * Queries all aspects of the named action within an `action_group`.
         * 
         * This function acquires the information available from
         * {@link Gio.ActionGroup.has_action}, {@link Gio.ActionGroup.get_action_enabled},
         * {@link Gio.ActionGroup.get_action_parameter_type},
         * {@link Gio.ActionGroup.get_action_state_type},
         * {@link Gio.ActionGroup.get_action_state_hint} and
         * {@link Gio.ActionGroup.get_action_state} with a single function call.
         * 
         * This provides two main benefits.
         * 
         * The first is the improvement in efficiency that comes with not having
         * to perform repeated lookups of the action in order to discover
         * different things about it.  The second is that implementing
         * {@link Gio.ActionGroup} can now be done by only overriding this one virtual
         * function.
         * 
         * The interface provides a default implementation of this function that
         * calls the individual functions, as required, to fetch the
         * information.  The interface also provides default implementations of
         * those functions that call this function.  All implementations,
         * therefore, must override either this function or all of the others.
         * 
         * If the action exists, `TRUE` is returned and any of the requested
         * fields (as indicated by having a non-`NULL` reference passed in) are
         * filled.  If the action doesn’t exist, `FALSE` is returned and the
         * fields may or may not have been modified.
         * @param action_name the name of an action in the group
         * @returns `TRUE` if the action exists, else `FALSE`
         */
        query_action(action_name: string): [boolean, boolean, GLib.VariantType | null, GLib.VariantType | null, GLib.Variant | null, GLib.Variant | null];

        /**
         * Emits the `Gio.ActionGroup::action-added` signal on `action_group`.
         * 
         * This function should only be called by {@link Gio.ActionGroup} implementations.
         * @param action_name the name of an action in the group
         * @virtual
         */
        vfunc_action_added(action_name: string): void;

        /**
         * Emits the `Gio.ActionGroup::action-enabled-changed` signal on `action_group`.
         * 
         * This function should only be called by {@link Gio.ActionGroup} implementations.
         * @param action_name the name of an action in the group
         * @param enabled whether the action is now enabled
         * @virtual
         */
        vfunc_action_enabled_changed(action_name: string, enabled: boolean): void;

        /**
         * Emits the `Gio.ActionGroup::action-removed` signal on `action_group`.
         * 
         * This function should only be called by {@link Gio.ActionGroup} implementations.
         * @param action_name the name of an action in the group
         * @virtual
         */
        vfunc_action_removed(action_name: string): void;

        /**
         * Emits the `Gio.ActionGroup::action-state-changed` signal on `action_group`.
         * 
         * This function should only be called by {@link Gio.ActionGroup} implementations.
         * @param action_name the name of an action in the group
         * @param state the new state of the named action
         * @virtual
         */
        vfunc_action_state_changed(action_name: string, state: GLib.Variant): void;

        /**
         * Activate the named action within `action_group`.
         * 
         * If the action is expecting a parameter, then the correct type of
         * parameter must be given as `parameter`.  If the action is expecting no
         * parameters then `parameter` must be `NULL`.  See
         * {@link Gio.ActionGroup.get_action_parameter_type}.
         * 
         * If the {@link Gio.ActionGroup} implementation supports asynchronous remote
         * activation over D-Bus, this call may return before the relevant
         * D-Bus traffic has been sent, or any replies have been received. In
         * order to block on such asynchronous activation calls,
         * {@link Gio.DBusConnection.flush} should be called prior to the code, which
         * depends on the result of the action activation. Without flushing
         * the D-Bus connection, there is no guarantee that the action would
         * have been activated.
         * 
         * The following code which runs in a remote app instance, shows an
         * example of a ‘quit’ action being activated on the primary app
         * instance over D-Bus. Here {@link Gio.DBusConnection.flush} is called
         * before `exit()`. Without `g_dbus_connection_flush()`, the ‘quit’ action
         * may fail to be activated on the primary instance.
         * 
         * ```c
         * // call ‘quit’ action on primary instance
         * g_action_group_activate_action (G_ACTION_GROUP (app), "quit", NULL);
         * 
         * // make sure the action is activated now
         * g_dbus_connection_flush (…);
         * 
         * g_debug ("Application has been terminated. Exiting.");
         * 
         * exit (0);
         * ```
         * @param action_name the name of the action to activate
         * @param parameter parameters to the activation
         * @virtual
         */
        vfunc_activate_action(action_name: string, parameter: (GLib.Variant | null)): void;

        /**
         * Request for the state of the named action within `action_group` to be
         * changed to `value`.
         * 
         * The action must be stateful and `value` must be of the correct type.
         * See {@link Gio.ActionGroup.get_action_state_type}.
         * 
         * This call merely requests a change.  The action may refuse to change
         * its state or may change its state to something other than `value`.
         * See {@link Gio.ActionGroup.get_action_state_hint}.
         * 
         * If the `value` GVariant is floating, it is consumed.
         * @param action_name the name of the action to request the change on
         * @param value the new state
         * @virtual
         */
        vfunc_change_action_state(action_name: string, value: GLib.Variant): void;

        /**
         * Checks if the named action within `action_group` is currently enabled.
         * 
         * An action must be enabled in order to be activated or in order to
         * have its state changed from outside callers.
         * @param action_name the name of the action to query
         * @virtual
         */
        vfunc_get_action_enabled(action_name: string): boolean;

        /**
         * Queries the type of the parameter that must be given when activating
         * the named action within `action_group`.
         * 
         * When activating the action using {@link Gio.ActionGroup.activate_action},
         * the {@link GLib.Variant} given to that function must be of the type returned
         * by this function.
         * 
         * In the case that this function returns `NULL`, you must not give any
         * {@link GLib.Variant}, but `NULL` instead.
         * 
         * The parameter type of a particular action will never change but it is
         * possible for an action to be removed and for a new action to be added
         * with the same name but a different parameter type.
         * @param action_name the name of the action to query
         * @virtual
         */
        vfunc_get_action_parameter_type(action_name: string): (GLib.VariantType | null);

        /**
         * Queries the current state of the named action within `action_group`.
         * 
         * If the action is not stateful then `NULL` will be returned.  If the
         * action is stateful then the type of the return value is the type
         * given by {@link Gio.ActionGroup.get_action_state_type}.
         * 
         * The return value (if non-`NULL`) should be freed with
         * {@link GLib.Variant.unref} when it is no longer required.
         * @param action_name the name of the action to query
         * @virtual
         */
        vfunc_get_action_state(action_name: string): (GLib.Variant | null);

        /**
         * Requests a hint about the valid range of values for the state of the
         * named action within `action_group`.
         * 
         * If `NULL` is returned it either means that the action is not stateful
         * or that there is no hint about the valid range of values for the
         * state of the action.
         * 
         * If a {@link GLib.Variant} array is returned then each item in the array is a
         * possible value for the state.  If a {@link GLib.Variant} pair (ie: two-tuple) is
         * returned then the tuple specifies the inclusive lower and upper bound
         * of valid values for the state.
         * 
         * In any case, the information is merely a hint.  It may be possible to
         * have a state value outside of the hinted range and setting a value
         * within the range may fail.
         * 
         * The return value (if non-`NULL`) should be freed with
         * {@link GLib.Variant.unref} when it is no longer required.
         * @param action_name the name of the action to query
         * @virtual
         */
        vfunc_get_action_state_hint(action_name: string): (GLib.Variant | null);

        /**
         * Queries the type of the state of the named action within
         * `action_group`.
         * 
         * If the action is stateful then this function returns the
         * {@link GLib.VariantType} of the state.  All calls to
         * {@link Gio.ActionGroup.change_action_state} must give a {@link GLib.Variant} of this
         * type and {@link Gio.ActionGroup.get_action_state} will return a {@link GLib.Variant}
         * of the same type.
         * 
         * If the action is not stateful then this function will return `NULL`.
         * In that case, {@link Gio.ActionGroup.get_action_state} will return `NULL`
         * and you must not call {@link Gio.ActionGroup.change_action_state}.
         * 
         * The state type of a particular action will never change but it is
         * possible for an action to be removed and for a new action to be added
         * with the same name but a different state type.
         * @param action_name the name of the action to query
         * @virtual
         */
        vfunc_get_action_state_type(action_name: string): (GLib.VariantType | null);

        /**
         * Checks if the named action exists within `action_group`.
         * @param action_name the name of the action to check for
         * @virtual
         */
        vfunc_has_action(action_name: string): boolean;

        /**
         * Lists the actions contained within `action_group`.
         * 
         * The caller is responsible for freeing the list with {@link GLib.strfreev} when
         * it is no longer required.
         * @virtual
         */
        vfunc_list_actions(): string[];

        /**
         * Queries all aspects of the named action within an `action_group`.
         * 
         * This function acquires the information available from
         * {@link Gio.ActionGroup.has_action}, {@link Gio.ActionGroup.get_action_enabled},
         * {@link Gio.ActionGroup.get_action_parameter_type},
         * {@link Gio.ActionGroup.get_action_state_type},
         * {@link Gio.ActionGroup.get_action_state_hint} and
         * {@link Gio.ActionGroup.get_action_state} with a single function call.
         * 
         * This provides two main benefits.
         * 
         * The first is the improvement in efficiency that comes with not having
         * to perform repeated lookups of the action in order to discover
         * different things about it.  The second is that implementing
         * {@link Gio.ActionGroup} can now be done by only overriding this one virtual
         * function.
         * 
         * The interface provides a default implementation of this function that
         * calls the individual functions, as required, to fetch the
         * information.  The interface also provides default implementations of
         * those functions that call this function.  All implementations,
         * therefore, must override either this function or all of the others.
         * 
         * If the action exists, `TRUE` is returned and any of the requested
         * fields (as indicated by having a non-`NULL` reference passed in) are
         * filled.  If the action doesn’t exist, `FALSE` is returned and the
         * fields may or may not have been modified.
         * @param action_name the name of an action in the group
         * @virtual
         */
        vfunc_query_action(action_name: string): [boolean, boolean, GLib.VariantType | null, GLib.VariantType | null, GLib.Variant | null, GLib.Variant | null];
    }


    /**
     * @gir-type Alias
     */
    type AnimationClass = typeof Animation;

    /**
     * @gir-type Alias
     */
    type BindingGroupClass = typeof BindingGroup;

    /**
     * @gir-type Alias
     */
    type BoxClass = typeof Box;

    /**
     * @gir-type Alias
     */
    type CenteringBinClass = typeof CenteringBin;

    /**
     * @gir-type Alias
     */
    type ColumnLayoutClass = typeof ColumnLayout;

    /**
     * @gir-type Struct
     */
    class Counter {
        static $gtype: GObject.GType<Counter>;

        // Fields
        category: string;

        name: string;

        description: string;

        // Methods
        get(): number;

        reset(): void;
    }


    /**
     * @gir-type Struct
     */
    class CounterArena {
        static $gtype: GObject.GType<CounterArena>;

        // Constructors
        constructor(pid: GLib.Pid);

        static new_for_pid(pid: GLib.Pid): CounterArena;

        // Static methods
        static get_default(): CounterArena;

        // Methods
        /**
         * Calls `func` for every counter found in `area`.
         * @param func A callback to execute
         */
        foreach(func: CounterForeachFunc): void;

        ref(): CounterArena;

        /**
         * @param counter 
         */
        register(counter: Counter): void;

        unref(): void;
    }


    /**
     * @gir-type Struct
     */
    class CounterValue {
        static $gtype: GObject.GType<CounterValue>;

        // Fields
        value: number;

        padding: number[];
    }


    /**
     * @gir-type Alias
     */
    type ElasticBinClass = typeof ElasticBin;

    /**
     * @gir-type Alias
     */
    type EmptyStateClass = typeof EmptyState;

    /**
     * @gir-type Alias
     */
    type EntryBoxClass = typeof EntryBox;

    /**
     * @gir-type Alias
     */
    type FileChooserEntryClass = typeof FileChooserEntry;

    /**
     * Heaps are similar to a partially sorted tree but implemented as an
     * array. They allow for efficient O(1) lookup of the highest priority
     * item as it will always be the first item of the array.
     * 
     * To create a new heap use `egg_heap_new()`.
     * 
     * To add items to the heap, use `egg_heap_insert_val()` or
     * `egg_heap_insert_vals()` to insert in bulk.
     * 
     * To access an item in the heap, use `egg_heap_index()`.
     * 
     * To remove an arbitrary item from the heap, use `egg_heap_extract_index()`.
     * 
     * To remove the highest priority item in the heap, use `egg_heap_extract()`.
     * 
     * To free a heap, use `egg_heap_unref()`.
     * 
     * Here is an example that stores integers in a {@link Egg.Heap}:
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
     * @gir-type Struct
     */
    class Heap {
        static $gtype: GObject.GType<Heap>;

        // Fields
        data: string;

        len: number;

        // Constructors
        constructor(element_size: number, compare_func: GLib.CompareFunc);

        static ["new"](element_size: number, compare_func: GLib.CompareFunc): Heap;

        // Methods
        /**
         * @param result 
         */
        extract(result: (any | null)): boolean;

        /**
         * @param index_ 
         * @param result 
         */
        extract_index(index_: (bigint | number), result: (any | null)): boolean;

        /**
         * @param data 
         * @param len 
         */
        insert_vals(data: (any | null), len: number): void;

        /**
         * Increments the reference count of `heap` by one.
         * @returns `heap`
         */
        ref(): Heap;

        /**
         * Decrements the reference count of `heap` by one, freeing the structure
         * when the reference count reaches zero.
         */
        unref(): void;
    }


    /**
     * @gir-type Alias
     */
    type ListBoxClass = typeof ListBox;

    /**
     * @gir-type Alias
     */
    type MenuManagerClass = typeof MenuManager;

    /**
     * @gir-type Alias
     */
    type PillBoxClass = typeof PillBox;

    /**
     * @gir-type Alias
     */
    type PriorityBoxClass = typeof PriorityBox;

    /**
     * @gir-type Alias
     */
    type ProgressButtonClass = typeof ProgressButton;

    /**
     * @gir-type Alias
     */
    type RadioBoxClass = typeof RadioBox;

    /**
     * @gir-type Alias
     */
    type ScrolledWindowClass = typeof ScrolledWindow;

    /**
     * @gir-type Alias
     */
    type SearchBarClass = typeof SearchBar;

    /**
     * @gir-type Alias
     */
    type SettingsFlagActionClass = typeof SettingsFlagAction;

    /**
     * @gir-type Alias
     */
    type SettingsSandwichClass = typeof SettingsSandwich;

    /**
     * @gir-type Alias
     */
    type SignalGroupClass = typeof SignalGroup;

    /**
     * @gir-type Alias
     */
    type SimpleLabelClass = typeof SimpleLabel;

    /**
     * @gir-type Alias
     */
    type SimplePopoverClass = typeof SimplePopover;

    /**
     * @gir-type Alias
     */
    type SliderClass = typeof Slider;

    /**
     * @gir-type Alias
     */
    type StateMachineClass = typeof StateMachine;

    /**
     * @gir-type Alias
     */
    type SuggestionClass = typeof Suggestion;

    /**
     * @gir-type Alias
     */
    type SuggestionEntryBufferClass = typeof SuggestionEntryBuffer;

    /**
     * @gir-type Alias
     */
    type SuggestionEntryClass = typeof SuggestionEntry;

    /**
     * @gir-type Alias
     */
    type SuggestionPopoverClass = typeof SuggestionPopover;

    /**
     * @gir-type Alias
     */
    type SuggestionRowClass = typeof SuggestionRow;

    /**
     * @gir-type Alias
     */
    type TaskCacheClass = typeof TaskCache;

    /**
     * @gir-type Alias
     */
    type ThreeGridClass = typeof ThreeGrid;

    /**
     * @gir-type Alias
     */
    type WidgetActionGroupClass = typeof WidgetActionGroup;

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
