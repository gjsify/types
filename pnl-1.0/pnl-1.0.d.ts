
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

export namespace Pnl {

    /**
     * Pnl-1.0
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
    export namespace DockRevealerTransitionType {
        export const $gtype: GObject.GType<DockRevealerTransitionType>;
    }

    /**
     * @gir-type Enum
     */
    enum DockRevealerTransitionType {
        NONE,
        SLIDE_RIGHT,
        SLIDE_LEFT,
        SLIDE_UP,
        SLIDE_DOWN,
    }


    /**
     * pnl major version component (e.g. 1 if `PNL_VERSION` is 1.2.3)
     */
    const MAJOR_VERSION: number;

    /**
     * pnl micro version component (e.g. 3 if `PNL_VERSION` is 1.2.3)
     */
    const MICRO_VERSION: number;

    /**
     * pnl minor version component (e.g. 2 if `PNL_VERSION` is 1.2.3)
     */
    const MINOR_VERSION: number;

    /**
     * pnl version, encoded as a string, useful for printing and
     * concatenation.
     */
    const VERSION_S: string;

    /**
     * Creates a new frame source that will execute when the timeout interval
     * for the source has elapsed. The timing will try to synchronize based
     * on the end time of the animation.
     * @param frames_per_sec Target frames per second.
     * @param callback A {@link GLib.SourceFunc} to execute.
     * @returns A source id that can be removed with `g_source_remove()`.
     */
    function frame_source_add(frames_per_sec: number, callback: GLib.SourceFunc): number;

    /**
     * @param widget 
     * @param cr 
     */
    function gtk_bin_draw(widget: Gtk.Widget, cr: cairo.Context): boolean;

    /**
     * @param widget 
     * @param allocation 
     */
    function gtk_bin_size_allocate(widget: Gtk.Widget, allocation: Gtk.Allocation): void;

    /**
     * @param self 
     * @param child 
     * @param type 
     */
    function overlay_add_child(self: DockOverlay, child: Gtk.Widget, type: string): void;

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
        add_property(pspec: GObject.ParamSpec, value: GObject.Value | any): void;

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


    namespace DockBin {
        // Signal signatures
        interface SignalSignatures extends Gtk.Container.SignalSignatures {
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
            "notify::manager": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends Gtk.Container.ConstructorProps, Atk.ImplementorIface.ConstructorProps, Gtk.Buildable.ConstructorProps, Dock.ConstructorProps, DockItem.ConstructorProps {}
    }

    /**
     * @gir-type Class
     */
    class DockBin extends Gtk.Container implements Atk.ImplementorIface, Gtk.Buildable, Dock, DockItem {
        static $gtype: GObject.GType<DockBin>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: DockBin.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<DockBin.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](): DockBin;

        // Signals
        /** @signal */
        connect<K extends keyof DockBin.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, DockBin.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof DockBin.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, DockBin.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof DockBin.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<DockBin.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Methods
        /**
         * @returns A {@link Gtk.Widget}
         */
        get_bottom_edge(): Gtk.Widget;

        /**
         * Gets the center widget for the dock.
         * @returns A {@link Gtk.Widget} or `null`.
         */
        get_center_widget(): Gtk.Widget | null;

        /**
         * @returns A {@link Gtk.Widget}
         */
        get_left_edge(): Gtk.Widget;

        /**
         * @returns A {@link Gtk.Widget}
         */
        get_right_edge(): Gtk.Widget;

        /**
         * @returns A {@link Gtk.Widget}
         */
        get_top_edge(): Gtk.Widget;

        /** @category Inherited from Pnl.Dock */
        get manager(): DockManager;
        set manager(val: DockManager);

        /**
         * @param child 
         */
        adopt(child: DockItem): boolean;

        /**
         * @param child 
         */
        get_child_visible(child: DockItem): boolean;

        /**
         * @param args 
         */
        // Conflicted with Gtk.Widget.get_child_visible
        get_child_visible(...args: never[]): any;

        /**
         * Gets the dock manager for this dock item.
         * @returns A `PnlDockmanager`.
         */
        get_manager(): DockManager | null;

        /**
         * Gets the parent {@link Pnl.DockItem}, or `null`.
         * @returns A {@link Pnl.DockItem} or `null`.
         */
        get_parent(): DockItem | null;

        has_widgets(): boolean;

        /**
         * This widget will walk the widget hierarchy to ensure that the
         * dock item is visible to the user.
         */
        present(): void;

        /**
         * @param child 
         */
        present_child(child: DockItem): void;

        /**
         * @param child 
         * @param child_visible 
         */
        set_child_visible(child: DockItem, child_visible: boolean): void;

        /**
         * @param args 
         */
        // Conflicted with Gtk.Widget.set_child_visible
        set_child_visible(...args: never[]): any;

        /**
         * Sets the dock manager for this {@link Pnl.DockItem}.
         * @param manager A {@link Pnl.DockManager}
         */
        set_manager(manager: DockManager | null): void;

        update_visibility(): void;

        /**
         * @param child 
         * @virtual
         */
        vfunc_get_child_visible(child: DockItem): boolean;

        /**
         * Gets the dock manager for this dock item.
         * @virtual
         */
        vfunc_get_manager(): DockManager | null;

        /**
         * @param old_manager 
         * @virtual
         */
        vfunc_manager_set(old_manager: DockManager): void;

        /**
         * @param child 
         * @virtual
         */
        vfunc_present_child(child: DockItem): void;

        /**
         * @param child 
         * @param child_visible 
         * @virtual
         */
        vfunc_set_child_visible(child: DockItem, child_visible: boolean): void;

        /**
         * Sets the dock manager for this {@link Pnl.DockItem}.
         * @param manager A {@link Pnl.DockManager}
         * @virtual
         */
        vfunc_set_manager(manager: DockManager | null): void;

        /**
         * @virtual
         */
        vfunc_update_visibility(): void;

        /**
         * Emits a {@link Gtk.Widget.SignalSignatures.child_notify | Gtk.Widget::child-notify} signal for the
         * [child property][child-properties]
         * `child_property` on the child.
         * 
         * This is an analogue of `g_object_notify()` for child properties.
         * 
         * Also see `gtk_widget_child_notify()`.
         * @param child the child widget
         * @param child_property the name of a child property installed on     the class of `container`
         */
        child_notify(child: Gtk.Widget, child_property: string): void;

        /**
         * @param args 
         */
        // Conflicted with Gtk.Widget.child_notify
        child_notify(...args: never[]): any;
    }


    namespace DockBinEdge {
        // Signal signatures
        interface SignalSignatures extends DockRevealer.SignalSignatures {
            /**
             * @signal
             * @action
             * @run-last
             */
            "move-to-bin-child": () => void;
            "notify::edge": (pspec: GObject.ParamSpec) => void;
            "notify::child-revealed": (pspec: GObject.ParamSpec) => void;
            "notify::position": (pspec: GObject.ParamSpec) => void;
            "notify::position-set": (pspec: GObject.ParamSpec) => void;
            "notify::reveal-child": (pspec: GObject.ParamSpec) => void;
            "notify::transition-duration": (pspec: GObject.ParamSpec) => void;
            "notify::transition-type": (pspec: GObject.ParamSpec) => void;
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
        interface ConstructorProps extends DockRevealer.ConstructorProps, Atk.ImplementorIface.ConstructorProps, Gtk.Buildable.ConstructorProps, DockItem.ConstructorProps {
            edge: Gtk.PositionType;
        }
    }

    /**
     * @gir-type Class
     */
    class DockBinEdge extends DockRevealer implements Atk.ImplementorIface, Gtk.Buildable, DockItem {
        static $gtype: GObject.GType<DockBinEdge>;

        // Properties
        get edge(): Gtk.PositionType;
        set edge(val: Gtk.PositionType);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: DockBinEdge.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<DockBinEdge.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals
        /** @signal */
        connect<K extends keyof DockBinEdge.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, DockBinEdge.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof DockBinEdge.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, DockBinEdge.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof DockBinEdge.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<DockBinEdge.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Virtual methods
        /**
         * @virtual
         */
        vfunc_move_to_bin_child(): void;

        // Methods
        get_edge(): Gtk.PositionType;

        /**
         * @param bin_edge 
         */
        set_edge(bin_edge: Gtk.PositionType): void;

        /**
         * @param child 
         */
        adopt(child: DockItem): boolean;

        /**
         * @param child 
         */
        get_child_visible(child: DockItem): boolean;

        /**
         * @param args 
         */
        // Conflicted with Gtk.Widget.get_child_visible
        get_child_visible(...args: never[]): any;

        /**
         * Gets the dock manager for this dock item.
         * @returns A `PnlDockmanager`.
         */
        get_manager(): DockManager | null;

        /**
         * Gets the parent {@link Pnl.DockItem}, or `null`.
         * @returns A {@link Pnl.DockItem} or `null`.
         */
        get_parent(): DockItem | null;

        has_widgets(): boolean;

        /**
         * This widget will walk the widget hierarchy to ensure that the
         * dock item is visible to the user.
         */
        present(): void;

        /**
         * @param child 
         */
        present_child(child: DockItem): void;

        /**
         * @param child 
         * @param child_visible 
         */
        set_child_visible(child: DockItem, child_visible: boolean): void;

        /**
         * @param args 
         */
        // Conflicted with Gtk.Widget.set_child_visible
        set_child_visible(...args: never[]): any;

        /**
         * Sets the dock manager for this {@link Pnl.DockItem}.
         * @param manager A {@link Pnl.DockManager}
         */
        set_manager(manager: DockManager | null): void;

        update_visibility(): void;

        /**
         * @param child 
         * @virtual
         */
        vfunc_get_child_visible(child: DockItem): boolean;

        /**
         * Gets the dock manager for this dock item.
         * @virtual
         */
        vfunc_get_manager(): DockManager | null;

        /**
         * @param old_manager 
         * @virtual
         */
        vfunc_manager_set(old_manager: DockManager): void;

        /**
         * @param child 
         * @virtual
         */
        vfunc_present_child(child: DockItem): void;

        /**
         * @param child 
         * @param child_visible 
         * @virtual
         */
        vfunc_set_child_visible(child: DockItem, child_visible: boolean): void;

        /**
         * Sets the dock manager for this {@link Pnl.DockItem}.
         * @param manager A {@link Pnl.DockManager}
         * @virtual
         */
        vfunc_set_manager(manager: DockManager | null): void;

        /**
         * @virtual
         */
        vfunc_update_visibility(): void;

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
    }


    namespace DockManager {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            /**
             * @signal
             * @run-last
             */
            "register-dock": (arg0: Dock) => void;
            /**
             * @signal
             * @run-last
             */
            "unregister-dock": (arg0: Dock) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    /**
     * @gir-type Class
     */
    class DockManager extends GObject.Object {
        static $gtype: GObject.GType<DockManager>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: DockManager.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<DockManager.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](): DockManager;

        // Signals
        /** @signal */
        connect<K extends keyof DockManager.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, DockManager.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof DockManager.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, DockManager.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof DockManager.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<DockManager.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Virtual methods
        /**
         * @param dock 
         * @virtual
         */
        vfunc_register_dock(dock: Dock): void;

        /**
         * @param dock 
         * @virtual
         */
        vfunc_unregister_dock(dock: Dock): void;

        // Methods
        /**
         * @param dock 
         */
        register_dock(dock: Dock): void;

        /**
         * @param dock 
         */
        unregister_dock(dock: Dock): void;
    }


    namespace DockOverlay {
        // Signal signatures
        interface SignalSignatures extends Gtk.EventBox.SignalSignatures {
            /**
             * @signal
             * @action
             * @run-last
             */
            "hide-edges": () => void;
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
            "notify::manager": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends Gtk.EventBox.ConstructorProps, Atk.ImplementorIface.ConstructorProps, Gtk.Buildable.ConstructorProps, Dock.ConstructorProps, DockItem.ConstructorProps {}
    }

    /**
     * @gir-type Class
     */
    class DockOverlay extends Gtk.EventBox implements Atk.ImplementorIface, Gtk.Buildable, Dock, DockItem {
        static $gtype: GObject.GType<DockOverlay>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: DockOverlay.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<DockOverlay.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](): DockOverlay;

        // Signals
        /** @signal */
        connect<K extends keyof DockOverlay.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, DockOverlay.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof DockOverlay.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, DockOverlay.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof DockOverlay.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<DockOverlay.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Virtual methods
        /**
         * @virtual
         */
        vfunc_hide_edges(): void;

        // Methods
        /**
         * @param position the edge position.
         * @returns The corresponding {@link Pnl.DockOverlayEdge}.
         */
        get_edge(position: Gtk.PositionType): DockOverlayEdge;

        /**
         * @param position the edge position.
         * @returns The corresponding {@link Gtk.Adjustment}.
         */
        get_edge_adjustment(position: Gtk.PositionType): Gtk.Adjustment;

        /** @category Inherited from Pnl.Dock */
        get manager(): DockManager;
        set manager(val: DockManager);

        /**
         * @param child 
         */
        adopt(child: DockItem): boolean;

        /**
         * @param child 
         */
        get_child_visible(child: DockItem): boolean;

        /**
         * @param args 
         */
        // Conflicted with Gtk.Widget.get_child_visible
        get_child_visible(...args: never[]): any;

        /**
         * Gets the dock manager for this dock item.
         * @returns A `PnlDockmanager`.
         */
        get_manager(): DockManager | null;

        /**
         * Gets the parent {@link Pnl.DockItem}, or `null`.
         * @returns A {@link Pnl.DockItem} or `null`.
         */
        get_parent(): DockItem | null;

        has_widgets(): boolean;

        /**
         * This widget will walk the widget hierarchy to ensure that the
         * dock item is visible to the user.
         */
        present(): void;

        /**
         * @param child 
         */
        present_child(child: DockItem): void;

        /**
         * @param child 
         * @param child_visible 
         */
        set_child_visible(child: DockItem, child_visible: boolean): void;

        /**
         * @param args 
         */
        // Conflicted with Gtk.Widget.set_child_visible
        set_child_visible(...args: never[]): any;

        /**
         * Sets the dock manager for this {@link Pnl.DockItem}.
         * @param manager A {@link Pnl.DockManager}
         */
        set_manager(manager: DockManager | null): void;

        update_visibility(): void;

        /**
         * @param child 
         * @virtual
         */
        vfunc_get_child_visible(child: DockItem): boolean;

        /**
         * Gets the dock manager for this dock item.
         * @virtual
         */
        vfunc_get_manager(): DockManager | null;

        /**
         * @param old_manager 
         * @virtual
         */
        vfunc_manager_set(old_manager: DockManager): void;

        /**
         * @param child 
         * @virtual
         */
        vfunc_present_child(child: DockItem): void;

        /**
         * @param child 
         * @param child_visible 
         * @virtual
         */
        vfunc_set_child_visible(child: DockItem, child_visible: boolean): void;

        /**
         * Sets the dock manager for this {@link Pnl.DockItem}.
         * @param manager A {@link Pnl.DockManager}
         * @virtual
         */
        vfunc_set_manager(manager: DockManager | null): void;

        /**
         * @virtual
         */
        vfunc_update_visibility(): void;

        /**
         * Emits a {@link Gtk.Widget.SignalSignatures.child_notify | Gtk.Widget::child-notify} signal for the
         * [child property][child-properties]
         * `child_property` on the child.
         * 
         * This is an analogue of `g_object_notify()` for child properties.
         * 
         * Also see `gtk_widget_child_notify()`.
         * @param child the child widget
         * @param child_property the name of a child property installed on     the class of `container`
         */
        child_notify(child: Gtk.Widget, child_property: string): void;

        /**
         * @param args 
         */
        // Conflicted with Gtk.Widget.child_notify
        child_notify(...args: never[]): any;
    }


    namespace DockOverlayEdge {
        // Signal signatures
        interface SignalSignatures extends Gtk.Bin.SignalSignatures {
            "notify::edge": (pspec: GObject.ParamSpec) => void;
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
        interface ConstructorProps extends Gtk.Bin.ConstructorProps, Atk.ImplementorIface.ConstructorProps, Gtk.Buildable.ConstructorProps, DockItem.ConstructorProps {
            edge: Gtk.PositionType;
            position: number;
        }
    }

    /**
     * @gir-type Class
     */
    class DockOverlayEdge extends Gtk.Bin implements Atk.ImplementorIface, Gtk.Buildable, DockItem {
        static $gtype: GObject.GType<DockOverlayEdge>;

        // Properties
        get edge(): Gtk.PositionType;
        set edge(val: Gtk.PositionType);

        get position(): number;
        set position(val: number);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: DockOverlayEdge.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<DockOverlayEdge.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals
        /** @signal */
        connect<K extends keyof DockOverlayEdge.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, DockOverlayEdge.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof DockOverlayEdge.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, DockOverlayEdge.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof DockOverlayEdge.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<DockOverlayEdge.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Methods
        get_edge(): Gtk.PositionType;

        get_position(): number;

        /**
         * @param edge 
         */
        set_edge(edge: Gtk.PositionType): void;

        /**
         * @param position 
         */
        set_position(position: number): void;

        /**
         * @param child 
         */
        adopt(child: DockItem): boolean;

        /**
         * @param child 
         */
        get_child_visible(child: DockItem): boolean;

        /**
         * @param args 
         */
        // Conflicted with Gtk.Widget.get_child_visible
        get_child_visible(...args: never[]): any;

        /**
         * Gets the dock manager for this dock item.
         * @returns A `PnlDockmanager`.
         */
        get_manager(): DockManager | null;

        /**
         * Gets the parent {@link Pnl.DockItem}, or `null`.
         * @returns A {@link Pnl.DockItem} or `null`.
         */
        get_parent(): DockItem | null;

        has_widgets(): boolean;

        /**
         * This widget will walk the widget hierarchy to ensure that the
         * dock item is visible to the user.
         */
        present(): void;

        /**
         * @param child 
         */
        present_child(child: DockItem): void;

        /**
         * @param child 
         * @param child_visible 
         */
        set_child_visible(child: DockItem, child_visible: boolean): void;

        /**
         * @param args 
         */
        // Conflicted with Gtk.Widget.set_child_visible
        set_child_visible(...args: never[]): any;

        /**
         * Sets the dock manager for this {@link Pnl.DockItem}.
         * @param manager A {@link Pnl.DockManager}
         */
        set_manager(manager: DockManager | null): void;

        update_visibility(): void;

        /**
         * @param child 
         * @virtual
         */
        vfunc_get_child_visible(child: DockItem): boolean;

        /**
         * Gets the dock manager for this dock item.
         * @virtual
         */
        vfunc_get_manager(): DockManager | null;

        /**
         * @param old_manager 
         * @virtual
         */
        vfunc_manager_set(old_manager: DockManager): void;

        /**
         * @param child 
         * @virtual
         */
        vfunc_present_child(child: DockItem): void;

        /**
         * @param child 
         * @param child_visible 
         * @virtual
         */
        vfunc_set_child_visible(child: DockItem, child_visible: boolean): void;

        /**
         * Sets the dock manager for this {@link Pnl.DockItem}.
         * @param manager A {@link Pnl.DockManager}
         * @virtual
         */
        vfunc_set_manager(manager: DockManager | null): void;

        /**
         * @virtual
         */
        vfunc_update_visibility(): void;

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
    }


    namespace DockPaned {
        // Signal signatures
        interface SignalSignatures extends MultiPaned.SignalSignatures {
            "notify::orientation": (pspec: GObject.ParamSpec) => void;
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
        interface ConstructorProps extends MultiPaned.ConstructorProps, Atk.ImplementorIface.ConstructorProps, Gtk.Buildable.ConstructorProps, Gtk.Orientable.ConstructorProps, DockItem.ConstructorProps {}
    }

    /**
     * @gir-type Class
     */
    class DockPaned extends MultiPaned implements Atk.ImplementorIface, Gtk.Buildable, Gtk.Orientable, DockItem {
        static $gtype: GObject.GType<DockPaned>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: DockPaned.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<DockPaned.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](): DockPaned;

        // Signals
        /** @signal */
        connect<K extends keyof DockPaned.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, DockPaned.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof DockPaned.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, DockPaned.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof DockPaned.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<DockPaned.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Methods
        /**
         * @param child_edge 
         */
        set_child_edge(child_edge: Gtk.PositionType): void;

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

        /**
         * @param child 
         */
        adopt(child: DockItem): boolean;

        /**
         * @param child 
         */
        get_child_visible(child: DockItem): boolean;

        /**
         * @param args 
         */
        // Conflicted with Gtk.Widget.get_child_visible
        get_child_visible(...args: never[]): any;

        /**
         * Gets the dock manager for this dock item.
         * @returns A `PnlDockmanager`.
         */
        get_manager(): DockManager | null;

        /**
         * Gets the parent {@link Pnl.DockItem}, or `null`.
         * @returns A {@link Pnl.DockItem} or `null`.
         */
        get_parent(): DockItem | null;

        has_widgets(): boolean;

        /**
         * This widget will walk the widget hierarchy to ensure that the
         * dock item is visible to the user.
         */
        present(): void;

        /**
         * @param child 
         */
        present_child(child: DockItem): void;

        /**
         * @param child 
         * @param child_visible 
         */
        set_child_visible(child: DockItem, child_visible: boolean): void;

        /**
         * @param args 
         */
        // Conflicted with Gtk.Widget.set_child_visible
        set_child_visible(...args: never[]): any;

        /**
         * Sets the dock manager for this {@link Pnl.DockItem}.
         * @param manager A {@link Pnl.DockManager}
         */
        set_manager(manager: DockManager | null): void;

        update_visibility(): void;

        /**
         * @param child 
         * @virtual
         */
        vfunc_get_child_visible(child: DockItem): boolean;

        /**
         * Gets the dock manager for this dock item.
         * @virtual
         */
        vfunc_get_manager(): DockManager | null;

        /**
         * @param old_manager 
         * @virtual
         */
        vfunc_manager_set(old_manager: DockManager): void;

        /**
         * @param child 
         * @virtual
         */
        vfunc_present_child(child: DockItem): void;

        /**
         * @param child 
         * @param child_visible 
         * @virtual
         */
        vfunc_set_child_visible(child: DockItem, child_visible: boolean): void;

        /**
         * Sets the dock manager for this {@link Pnl.DockItem}.
         * @param manager A {@link Pnl.DockManager}
         * @virtual
         */
        vfunc_set_manager(manager: DockManager | null): void;

        /**
         * @virtual
         */
        vfunc_update_visibility(): void;

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
    }


    namespace DockRevealer {
        // Signal signatures
        interface SignalSignatures extends Gtk.Bin.SignalSignatures {
            "notify::child-revealed": (pspec: GObject.ParamSpec) => void;
            "notify::position": (pspec: GObject.ParamSpec) => void;
            "notify::position-set": (pspec: GObject.ParamSpec) => void;
            "notify::reveal-child": (pspec: GObject.ParamSpec) => void;
            "notify::transition-duration": (pspec: GObject.ParamSpec) => void;
            "notify::transition-type": (pspec: GObject.ParamSpec) => void;
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
            child_revealed: boolean;
            childRevealed: boolean;
            position: number;
            position_set: boolean;
            positionSet: boolean;
            reveal_child: boolean;
            revealChild: boolean;
            transition_duration: number;
            transitionDuration: number;
            transition_type: DockRevealerTransitionType;
            transitionType: DockRevealerTransitionType;
        }
    }

    /**
     * This widget is a bit like {@link Gtk.Revealer} with a couple of important
     * differences. First, it only supports a couple transition types
     * (the direction to slide reveal). Additionally, the size of the
     * child allocation will not change during the animation. This is not
     * as generally useful as an upstream GTK+ widget, but is extremely
     * important for the panel case to avoid things looking strange while
     * animating into and out of view.
     * @gir-type Class
     */
    class DockRevealer extends Gtk.Bin implements Atk.ImplementorIface, Gtk.Buildable {
        static $gtype: GObject.GType<DockRevealer>;

        // Properties
        /**
         * @read-only
         */
        get child_revealed(): boolean;

        /**
         * @read-only
         */
        get childRevealed(): boolean;

        get position(): number;
        set position(val: number);

        get position_set(): boolean;
        set position_set(val: boolean);

        get positionSet(): boolean;
        set positionSet(val: boolean);

        get reveal_child(): boolean;
        set reveal_child(val: boolean);

        get revealChild(): boolean;
        set revealChild(val: boolean);

        get transition_duration(): number;
        set transition_duration(val: number);

        get transitionDuration(): number;
        set transitionDuration(val: number);

        get transition_type(): DockRevealerTransitionType;
        set transition_type(val: DockRevealerTransitionType);

        get transitionType(): DockRevealerTransitionType;
        set transitionType(val: DockRevealerTransitionType);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: DockRevealer.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<DockRevealer.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](): DockRevealer;

        // Signals
        /** @signal */
        connect<K extends keyof DockRevealer.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, DockRevealer.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof DockRevealer.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, DockRevealer.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof DockRevealer.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<DockRevealer.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Methods
        /**
         * @param position 
         * @param transition_duration 
         */
        animate_to_position(position: number, transition_duration: number): void;

        get_child_revealed(): boolean;

        get_position(): number;

        get_position_set(): boolean;

        get_reveal_child(): boolean;

        get_transition_duration(): number;

        get_transition_type(): DockRevealerTransitionType;

        /**
         * @param position 
         */
        set_position(position: number): void;

        /**
         * @param position_set 
         */
        set_position_set(position_set: boolean): void;

        /**
         * @param reveal_child 
         */
        set_reveal_child(reveal_child: boolean): void;

        /**
         * @param transition_duration 
         */
        set_transition_duration(transition_duration: number): void;

        /**
         * @param transition_type 
         */
        set_transition_type(transition_type: DockRevealerTransitionType): void;
    }


    namespace DockStack {
        // Signal signatures
        interface SignalSignatures extends Gtk.Box.SignalSignatures {
            "notify::edge": (pspec: GObject.ParamSpec) => void;
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
        interface ConstructorProps extends Gtk.Box.ConstructorProps, Atk.ImplementorIface.ConstructorProps, Gtk.Buildable.ConstructorProps, Gtk.Orientable.ConstructorProps, DockItem.ConstructorProps {
            edge: Gtk.PositionType;
        }
    }

    /**
     * @gir-type Class
     */
    class DockStack extends Gtk.Box implements Atk.ImplementorIface, Gtk.Buildable, Gtk.Orientable, DockItem {
        static $gtype: GObject.GType<DockStack>;

        // Properties
        get edge(): Gtk.PositionType;
        set edge(val: Gtk.PositionType);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: DockStack.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<DockStack.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](): DockStack;

        // Signals
        /** @signal */
        connect<K extends keyof DockStack.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, DockStack.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof DockStack.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, DockStack.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof DockStack.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<DockStack.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Methods
        get_edge(): Gtk.PositionType;

        /**
         * @param edge 
         */
        set_edge(edge: Gtk.PositionType): void;

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

        /**
         * @param child 
         */
        adopt(child: DockItem): boolean;

        /**
         * @param child 
         */
        get_child_visible(child: DockItem): boolean;

        /**
         * @param args 
         */
        // Conflicted with Gtk.Widget.get_child_visible
        get_child_visible(...args: never[]): any;

        /**
         * Gets the dock manager for this dock item.
         * @returns A `PnlDockmanager`.
         */
        get_manager(): DockManager | null;

        /**
         * Gets the parent {@link Pnl.DockItem}, or `null`.
         * @returns A {@link Pnl.DockItem} or `null`.
         */
        get_parent(): DockItem | null;

        has_widgets(): boolean;

        /**
         * This widget will walk the widget hierarchy to ensure that the
         * dock item is visible to the user.
         */
        present(): void;

        /**
         * @param child 
         */
        present_child(child: DockItem): void;

        /**
         * @param child 
         * @param child_visible 
         */
        set_child_visible(child: DockItem, child_visible: boolean): void;

        /**
         * @param args 
         */
        // Conflicted with Gtk.Widget.set_child_visible
        set_child_visible(...args: never[]): any;

        /**
         * Sets the dock manager for this {@link Pnl.DockItem}.
         * @param manager A {@link Pnl.DockManager}
         */
        set_manager(manager: DockManager | null): void;

        update_visibility(): void;

        /**
         * @param child 
         * @virtual
         */
        vfunc_get_child_visible(child: DockItem): boolean;

        /**
         * Gets the dock manager for this dock item.
         * @virtual
         */
        vfunc_get_manager(): DockManager | null;

        /**
         * @param old_manager 
         * @virtual
         */
        vfunc_manager_set(old_manager: DockManager): void;

        /**
         * @param child 
         * @virtual
         */
        vfunc_present_child(child: DockItem): void;

        /**
         * @param child 
         * @param child_visible 
         * @virtual
         */
        vfunc_set_child_visible(child: DockItem, child_visible: boolean): void;

        /**
         * Sets the dock manager for this {@link Pnl.DockItem}.
         * @param manager A {@link Pnl.DockManager}
         * @virtual
         */
        vfunc_set_manager(manager: DockManager | null): void;

        /**
         * @virtual
         */
        vfunc_update_visibility(): void;

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
    }


    namespace DockTabStrip {
        // Signal signatures
        interface SignalSignatures extends TabStrip.SignalSignatures {
            "notify::edge": (pspec: GObject.ParamSpec) => void;
            "notify::stack": (pspec: GObject.ParamSpec) => void;
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
        }

        // Constructor properties interface
        interface ConstructorProps extends TabStrip.ConstructorProps, Atk.ImplementorIface.ConstructorProps, Gtk.Buildable.ConstructorProps, Gtk.Orientable.ConstructorProps {}
    }

    /**
     * @gir-type Class
     */
    class DockTabStrip extends TabStrip implements Atk.ImplementorIface, Gtk.Buildable, Gtk.Orientable {
        static $gtype: GObject.GType<DockTabStrip>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: DockTabStrip.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<DockTabStrip.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](): DockTabStrip;

        // Signals
        /** @signal */
        connect<K extends keyof DockTabStrip.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, DockTabStrip.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof DockTabStrip.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, DockTabStrip.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof DockTabStrip.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<DockTabStrip.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
    }


    namespace DockTransientGrab {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            "notify::timeout": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps {
            timeout: number;
        }
    }

    /**
     * @gir-type Class
     */
    class DockTransientGrab extends GObject.Object {
        static $gtype: GObject.GType<DockTransientGrab>;

        // Properties
        get timeout(): number;
        set timeout(val: number);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: DockTransientGrab.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<DockTransientGrab.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](): DockTransientGrab;

        // Signals
        /** @signal */
        connect<K extends keyof DockTransientGrab.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, DockTransientGrab.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof DockTransientGrab.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, DockTransientGrab.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof DockTransientGrab.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<DockTransientGrab.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Methods
        acquire(): void;

        /**
         * @param item 
         */
        add_item(item: DockItem): void;

        /**
         * @param item 
         */
        contains(item: DockItem): boolean;

        get_timeout(): number;

        /**
         * @param widget 
         */
        is_descendant(widget: Gtk.Widget): boolean;

        release(): void;

        /**
         * @param item 
         */
        remove_item(item: DockItem): void;

        /**
         * @param timeout 
         */
        set_timeout(timeout: number): void;

        /**
         * @param other 
         */
        steal_common_ancestors(other: DockTransientGrab): void;
    }


    namespace DockWidget {
        // Signal signatures
        interface SignalSignatures extends Gtk.Bin.SignalSignatures {
            "notify::manager": (pspec: GObject.ParamSpec) => void;
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
        interface ConstructorProps extends Gtk.Bin.ConstructorProps, Atk.ImplementorIface.ConstructorProps, Gtk.Buildable.ConstructorProps, DockItem.ConstructorProps {
            manager: DockManager;
            title: string;
        }
    }

    /**
     * @gir-type Class
     */
    class DockWidget extends Gtk.Bin implements Atk.ImplementorIface, Gtk.Buildable, DockItem {
        static $gtype: GObject.GType<DockWidget>;

        // Properties
        get manager(): DockManager;
        set manager(val: DockManager);

        get title(): string;
        set title(val: string);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: DockWidget.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<DockWidget.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](): DockWidget;

        // Signals
        /** @signal */
        connect<K extends keyof DockWidget.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, DockWidget.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof DockWidget.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, DockWidget.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof DockWidget.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<DockWidget.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Methods
        get_title(): string;

        /**
         * @param title 
         */
        set_title(title: string): void;

        /**
         * @param child 
         */
        adopt(child: DockItem): boolean;

        /**
         * @param child 
         */
        get_child_visible(child: DockItem): boolean;

        /**
         * @param args 
         */
        // Conflicted with Gtk.Widget.get_child_visible
        get_child_visible(...args: never[]): any;

        /**
         * Gets the dock manager for this dock item.
         * @returns A `PnlDockmanager`.
         */
        get_manager(): DockManager | null;

        /**
         * Gets the parent {@link Pnl.DockItem}, or `null`.
         * @returns A {@link Pnl.DockItem} or `null`.
         */
        get_parent(): DockItem | null;

        has_widgets(): boolean;

        /**
         * This widget will walk the widget hierarchy to ensure that the
         * dock item is visible to the user.
         */
        present(): void;

        /**
         * @param child 
         */
        present_child(child: DockItem): void;

        /**
         * @param child 
         * @param child_visible 
         */
        set_child_visible(child: DockItem, child_visible: boolean): void;

        /**
         * @param args 
         */
        // Conflicted with Gtk.Widget.set_child_visible
        set_child_visible(...args: never[]): any;

        /**
         * Sets the dock manager for this {@link Pnl.DockItem}.
         * @param manager A {@link Pnl.DockManager}
         */
        set_manager(manager: DockManager | null): void;

        update_visibility(): void;

        /**
         * @param child 
         * @virtual
         */
        vfunc_get_child_visible(child: DockItem): boolean;

        /**
         * Gets the dock manager for this dock item.
         * @virtual
         */
        vfunc_get_manager(): DockManager | null;

        /**
         * @param old_manager 
         * @virtual
         */
        vfunc_manager_set(old_manager: DockManager): void;

        /**
         * @param child 
         * @virtual
         */
        vfunc_present_child(child: DockItem): void;

        /**
         * @param child 
         * @param child_visible 
         * @virtual
         */
        vfunc_set_child_visible(child: DockItem, child_visible: boolean): void;

        /**
         * Sets the dock manager for this {@link Pnl.DockItem}.
         * @param manager A {@link Pnl.DockManager}
         * @virtual
         */
        vfunc_set_manager(manager: DockManager | null): void;

        /**
         * @virtual
         */
        vfunc_update_visibility(): void;

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
    }


    namespace DockWindow {
        // Signal signatures
        interface SignalSignatures extends Gtk.Window.SignalSignatures {
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
            "notify::manager": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends Gtk.Window.ConstructorProps, Atk.ImplementorIface.ConstructorProps, Gtk.Buildable.ConstructorProps, Dock.ConstructorProps, DockItem.ConstructorProps {}
    }

    /**
     * @gir-type Class
     */
    class DockWindow extends Gtk.Window implements Atk.ImplementorIface, Gtk.Buildable, Dock, DockItem {
        static $gtype: GObject.GType<DockWindow>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: DockWindow.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<DockWindow.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](): DockWindow;

        // Signals
        /** @signal */
        connect<K extends keyof DockWindow.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, DockWindow.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof DockWindow.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, DockWindow.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof DockWindow.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<DockWindow.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        /** @category Inherited from Pnl.Dock */
        get manager(): DockManager;
        set manager(val: DockManager);

        /**
         * @param child 
         */
        adopt(child: DockItem): boolean;

        /**
         * @param child 
         */
        get_child_visible(child: DockItem): boolean;

        /**
         * @param args 
         */
        // Conflicted with Gtk.Widget.get_child_visible
        get_child_visible(...args: never[]): any;

        /**
         * Gets the dock manager for this dock item.
         * @returns A `PnlDockmanager`.
         */
        get_manager(): DockManager | null;

        /**
         * Gets the parent {@link Pnl.DockItem}, or `null`.
         * @returns A {@link Pnl.DockItem} or `null`.
         */
        get_parent(): DockItem | null;

        has_widgets(): boolean;

        /**
         * This widget will walk the widget hierarchy to ensure that the
         * dock item is visible to the user.
         */
        present(): void;

        /**
         * @param child 
         */
        present_child(child: DockItem): void;

        /**
         * @param child 
         * @param child_visible 
         */
        set_child_visible(child: DockItem, child_visible: boolean): void;

        /**
         * @param args 
         */
        // Conflicted with Gtk.Widget.set_child_visible
        set_child_visible(...args: never[]): any;

        /**
         * Sets the dock manager for this {@link Pnl.DockItem}.
         * @param manager A {@link Pnl.DockManager}
         */
        set_manager(manager: DockManager | null): void;

        update_visibility(): void;

        /**
         * @param child 
         * @virtual
         */
        vfunc_get_child_visible(child: DockItem): boolean;

        /**
         * Gets the dock manager for this dock item.
         * @virtual
         */
        vfunc_get_manager(): DockManager | null;

        /**
         * @param old_manager 
         * @virtual
         */
        vfunc_manager_set(old_manager: DockManager): void;

        /**
         * @param child 
         * @virtual
         */
        vfunc_present_child(child: DockItem): void;

        /**
         * @param child 
         * @param child_visible 
         * @virtual
         */
        vfunc_set_child_visible(child: DockItem, child_visible: boolean): void;

        /**
         * Sets the dock manager for this {@link Pnl.DockItem}.
         * @param manager A {@link Pnl.DockManager}
         * @virtual
         */
        vfunc_set_manager(manager: DockManager | null): void;

        /**
         * @virtual
         */
        vfunc_update_visibility(): void;

        /**
         * Emits a {@link Gtk.Widget.SignalSignatures.child_notify | Gtk.Widget::child-notify} signal for the
         * [child property][child-properties]
         * `child_property` on the child.
         * 
         * This is an analogue of `g_object_notify()` for child properties.
         * 
         * Also see `gtk_widget_child_notify()`.
         * @param child the child widget
         * @param child_property the name of a child property installed on     the class of `container`
         */
        child_notify(child: Gtk.Widget, child_property: string): void;

        /**
         * @param args 
         */
        // Conflicted with Gtk.Widget.child_notify
        child_notify(...args: never[]): any;

        /**
         * Fetches the requested opacity for this widget.
         * See `gtk_widget_set_opacity()`.
         * @returns the requested opacity for this widget.
         */
        get_opacity(): number;

        /**
         * Get the {@link Gdk.Screen} from the toplevel window associated with
         * this widget. This function can only be called after the widget
         * has been added to a widget hierarchy with a {@link Gtk.Window}
         * at the top.
         * 
         * In general, you should only create screen specific
         * resources when a widget has been realized, and you should
         * free those resources when the widget is unrealized.
         * @returns the {@link Gdk.Screen} for the toplevel for this widget.
         */
        get_screen(): Gdk.Screen;

        /**
         * Emits the {@link Gtk.Widget.SignalSignatures.mnemonic_activate | Gtk.Widget::mnemonic-activate} signal.
         * @param group_cycling `true` if there are other widgets with the same mnemonic
         * @returns `true` if the signal has been handled
         */
        mnemonic_activate(group_cycling: boolean): boolean;

        /**
         * @param args 
         */
        // Conflicted with Gtk.Window.mnemonic_activate
        mnemonic_activate(...args: never[]): any;

        /**
         * Request the `widget` to be rendered partially transparent,
         * with opacity 0 being fully transparent and 1 fully opaque. (Opacity values
         * are clamped to the [0,1] range.).
         * This works on both toplevel widget, and child widgets, although there
         * are some limitations:
         * 
         * For toplevel widgets this depends on the capabilities of the windowing
         * system. On X11 this has any effect only on X screens with a compositing manager
         * running. See `gtk_widget_is_composited()`. On Windows it should work
         * always, although setting a window’s opacity after the window has been
         * shown causes it to flicker once on Windows.
         * 
         * For child widgets it doesn’t work if any affected widget has a native window, or
         * disables double buffering.
         * @param opacity desired opacity, between 0 and 1
         */
        set_opacity(opacity: number): void;
    }


    namespace MultiPaned {
        // Signal signatures
        interface SignalSignatures extends Gtk.Container.SignalSignatures {
            /**
             * @signal
             * @run-last
             */
            "resize-drag-begin": (arg0: Gtk.Widget) => void;
            /**
             * @signal
             * @run-last
             */
            "resize-drag-end": (arg0: Gtk.Widget) => void;
            "notify::orientation": (pspec: GObject.ParamSpec) => void;
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
        interface ConstructorProps extends Gtk.Container.ConstructorProps, Atk.ImplementorIface.ConstructorProps, Gtk.Buildable.ConstructorProps, Gtk.Orientable.ConstructorProps {
            orientation: Gtk.Orientation;
        }
    }

    /**
     * This widget is similar to {@link Gtk.Paned} except that it allows adding more than
     * two children to the widget. For each additional child added to the
     * {@link Pnl.MultiPaned}, an additional resize grip is added.
     * @gir-type Class
     */
    class MultiPaned extends Gtk.Container implements Atk.ImplementorIface, Gtk.Buildable, Gtk.Orientable {
        static $gtype: GObject.GType<MultiPaned>;

        // Properties
        get orientation(): Gtk.Orientation;
        set orientation(val: Gtk.Orientation);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: MultiPaned.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<MultiPaned.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](): MultiPaned;

        // Signals
        /** @signal */
        connect<K extends keyof MultiPaned.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, MultiPaned.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof MultiPaned.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, MultiPaned.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof MultiPaned.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<MultiPaned.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Virtual methods
        /**
         * @param child 
         * @virtual
         */
        vfunc_resize_drag_begin(child: Gtk.Widget): void;

        /**
         * @param child 
         * @virtual
         */
        vfunc_resize_drag_end(child: Gtk.Widget): void;

        // Methods
        get_n_children(): number;

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


    namespace Tab {
        // Signal signatures
        interface SignalSignatures extends Gtk.ToggleButton.SignalSignatures {
            "notify::edge": (pspec: GObject.ParamSpec) => void;
            "notify::title": (pspec: GObject.ParamSpec) => void;
            "notify::widget": (pspec: GObject.ParamSpec) => void;
            "notify::active": (pspec: GObject.ParamSpec) => void;
            "notify::draw-indicator": (pspec: GObject.ParamSpec) => void;
            "notify::inconsistent": (pspec: GObject.ParamSpec) => void;
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
        }

        // Constructor properties interface
        interface ConstructorProps extends Gtk.ToggleButton.ConstructorProps, Atk.ImplementorIface.ConstructorProps, Gtk.Actionable.ConstructorProps, Gtk.Activatable.ConstructorProps, Gtk.Buildable.ConstructorProps {
            edge: Gtk.PositionType;
            title: string;
            widget: Gtk.Widget | null | any;
        }
    }

    /**
     * @gir-type Class
     */
    class Tab extends Gtk.ToggleButton implements Atk.ImplementorIface, Gtk.Actionable, Gtk.Activatable, Gtk.Buildable {
        static $gtype: GObject.GType<Tab>;

        // Properties
        get edge(): Gtk.PositionType;
        set edge(val: Gtk.PositionType);

        get title(): string;
        set title(val: string);

    // This accessor conflicts with a property or field in a parent class or interface.
         widget: Gtk.Widget | null | any;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Tab.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<Tab.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals
        /** @signal */
        connect<K extends keyof Tab.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Tab.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof Tab.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Tab.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof Tab.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<Tab.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Methods
        get_edge(): Gtk.PositionType;

        get_title(): string;

        /**
         * @returns A {@link Gtk.Widget} or `null`.
         */
        get_widget(): Gtk.Widget | null;

        /**
         * @param edge 
         */
        set_edge(edge: Gtk.PositionType): void;

        /**
         * @param title 
         */
        set_title(title: string): void;

        /**
         * @param widget 
         */
        set_widget(widget: Gtk.Widget): void;

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


    namespace TabStrip {
        // Signal signatures
        interface SignalSignatures extends Gtk.Box.SignalSignatures {
            "notify::edge": (pspec: GObject.ParamSpec) => void;
            "notify::stack": (pspec: GObject.ParamSpec) => void;
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
            edge: Gtk.PositionType;
            stack: Gtk.Stack | null;
        }
    }

    /**
     * @gir-type Class
     */
    class TabStrip extends Gtk.Box implements Atk.ImplementorIface, Gtk.Buildable, Gtk.Orientable {
        static $gtype: GObject.GType<TabStrip>;

        // Properties
        get edge(): Gtk.PositionType;
        set edge(val: Gtk.PositionType);

        get stack(): Gtk.Stack | null;
        set stack(val: Gtk.Stack | null);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: TabStrip.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<TabStrip.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](): TabStrip;

        // Signals
        /** @signal */
        connect<K extends keyof TabStrip.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, TabStrip.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof TabStrip.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, TabStrip.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof TabStrip.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<TabStrip.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Methods
        get_edge(): Gtk.PositionType;

        get_show_labels(): boolean;

        /**
         * @returns A {@link Gtk.Stack} or `null`.
         */
        get_stack(): Gtk.Stack | null;

        /**
         * @param edge 
         */
        set_edge(edge: Gtk.PositionType): void;

        /**
         * @param show_labels 
         */
        set_show_labels(show_labels: boolean): void;

        /**
         * @param stack 
         */
        set_stack(stack: Gtk.Stack): void;

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


    /**
     * @gir-type Alias
     */
    type AnimationClass = typeof Animation;

    /**
     * @gir-type Alias
     */
    type DockBinClass = typeof DockBin;

    /**
     * @gir-type Alias
     */
    type DockBinEdgeClass = typeof DockBinEdge;

    /**
     * @gir-type Alias
     */
    type DockInterface = typeof Dock;

    /**
     * @gir-type Alias
     */
    type DockItemInterface = typeof DockItem;

    /**
     * @gir-type Alias
     */
    type DockManagerClass = typeof DockManager;

    /**
     * @gir-type Alias
     */
    type DockOverlayClass = typeof DockOverlay;

    /**
     * @gir-type Alias
     */
    type DockOverlayEdgeClass = typeof DockOverlayEdge;

    /**
     * @gir-type Alias
     */
    type DockPanedClass = typeof DockPaned;

    /**
     * @gir-type Alias
     */
    type DockRevealerClass = typeof DockRevealer;

    /**
     * @gir-type Alias
     */
    type DockStackClass = typeof DockStack;

    /**
     * @gir-type Alias
     */
    type DockTabStripClass = typeof DockTabStrip;

    /**
     * @gir-type Alias
     */
    type DockTransientGrabClass = typeof DockTransientGrab;

    /**
     * @gir-type Alias
     */
    type DockWidgetClass = typeof DockWidget;

    /**
     * @gir-type Alias
     */
    type DockWindowClass = typeof DockWindow;

    /**
     * @gir-type Alias
     */
    type MultiPanedClass = typeof MultiPaned;

    /**
     * @gir-type Alias
     */
    type TabClass = typeof Tab;

    /**
     * @gir-type Alias
     */
    type TabStripClass = typeof TabStrip;

    namespace Dock {

        // Constructor properties interface
        interface ConstructorProps extends Gtk.Container.ConstructorProps {
            manager: DockManager;
        }
    }

    export interface DockNamespace {
        $gtype: GObject.GType<Dock>;
        prototype: Dock;
    }
    /**
     * @gir-type Interface
     */
    interface Dock extends Gtk.Container {

        // Properties
        get manager(): DockManager;
        set manager(val: DockManager);
    }


    export const Dock: DockNamespace & {
        new (): Dock; // This allows `obj instanceof Dock`
    };

    namespace DockItem {
        /**
         * Interface for implementing DockItem.
         * Contains only the virtual methods that need to be implemented.
         */
        interface Interface {

            // Virtual methods
            /**
             * @param child 
             * @virtual
             */
            vfunc_get_child_visible(child: DockItem): boolean;

            /**
             * Gets the dock manager for this dock item.
             * @virtual
             */
            vfunc_get_manager(): DockManager | null;

            /**
             * @param old_manager 
             * @virtual
             */
            vfunc_manager_set(old_manager: DockManager): void;

            /**
             * @param child 
             * @virtual
             */
            vfunc_present_child(child: DockItem): void;

            /**
             * @param child 
             * @param child_visible 
             * @virtual
             */
            vfunc_set_child_visible(child: DockItem, child_visible: boolean): void;

            /**
             * Sets the dock manager for this {@link Pnl.DockItem}.
             * @param manager A {@link Pnl.DockManager}
             * @virtual
             */
            vfunc_set_manager(manager: DockManager | null): void;

            /**
             * @virtual
             */
            vfunc_update_visibility(): void;
        }


        // Constructor properties interface
        interface ConstructorProps extends Gtk.Widget.ConstructorProps {}
    }

    export interface DockItemNamespace {
        $gtype: GObject.GType<DockItem>;
        prototype: DockItem;
    }
    /**
     * @gir-type Interface
     */
    interface DockItem extends Gtk.Widget, DockItem.Interface {

        // Methods
        /**
         * @param child 
         */
        adopt(child: DockItem): boolean;

        /**
         * @param child 
         */
        get_child_visible(child: DockItem): boolean;

        /**
         * @param args 
         */
    // Conflicted with Gtk.Widget.get_child_visible
        get_child_visible(...args: never[]): any;

        /**
         * Gets the dock manager for this dock item.
         * @returns A `PnlDockmanager`.
         */
        get_manager(): DockManager | null;

        /**
         * Gets the parent {@link Pnl.DockItem}, or `null`.
         * @returns A {@link Pnl.DockItem} or `null`.
         */
        get_parent(): DockItem | null;

        has_widgets(): boolean;

        /**
         * This widget will walk the widget hierarchy to ensure that the
         * dock item is visible to the user.
         */
        present(): void;

        /**
         * @param child 
         */
        present_child(child: DockItem): void;

        /**
         * @param child 
         * @param child_visible 
         */
        set_child_visible(child: DockItem, child_visible: boolean): void;

        /**
         * @param args 
         */
    // Conflicted with Gtk.Widget.set_child_visible
        set_child_visible(...args: never[]): any;

        /**
         * Sets the dock manager for this {@link Pnl.DockItem}.
         * @param manager A {@link Pnl.DockManager}
         */
        set_manager(manager: DockManager | null): void;

        update_visibility(): void;
    }


    export const DockItem: DockItemNamespace & {
        new (): DockItem; // This allows `obj instanceof DockItem`
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

export default Pnl;

// END
