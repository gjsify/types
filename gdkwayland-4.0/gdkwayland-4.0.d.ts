
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
import type Gdk from '@girs/gdk-4.0';
import type cairo from 'cairo';
import type GObject from '@girs/gobject-2.0';
import type GLib from '@girs/glib-2.0';
import type PangoCairo from '@girs/pangocairo-1.0';
import type Pango from '@girs/pango-1.0';
import type HarfBuzz from '@girs/harfbuzz-0.0';
import type freetype2 from '@girs/freetype2-2.0';
import type Gio from '@girs/gio-2.0';
import type GModule from '@girs/gmodule-2.0';
import type GdkPixbuf from '@girs/gdkpixbuf-2.0';

export namespace GdkWayland {

    /**
     * GdkWayland-4.0
     */


    /**
     * @gir-type Callback
     */
    interface WaylandToplevelExported {
        (toplevel: WaylandToplevel, handle: string): void;
    }

    namespace WaylandDevice {
        // Signal signatures
        interface SignalSignatures extends Gdk.Device.SignalSignatures {
            "notify::active-layout-index": (pspec: GObject.ParamSpec) => void;
            "notify::caps-lock-state": (pspec: GObject.ParamSpec) => void;
            "notify::direction": (pspec: GObject.ParamSpec) => void;
            "notify::display": (pspec: GObject.ParamSpec) => void;
            "notify::has-bidi-layouts": (pspec: GObject.ParamSpec) => void;
            "notify::has-cursor": (pspec: GObject.ParamSpec) => void;
            "notify::layout-names": (pspec: GObject.ParamSpec) => void;
            "notify::modifier-state": (pspec: GObject.ParamSpec) => void;
            "notify::n-axes": (pspec: GObject.ParamSpec) => void;
            "notify::name": (pspec: GObject.ParamSpec) => void;
            "notify::num-lock-state": (pspec: GObject.ParamSpec) => void;
            "notify::num-touches": (pspec: GObject.ParamSpec) => void;
            "notify::product-id": (pspec: GObject.ParamSpec) => void;
            "notify::scroll-lock-state": (pspec: GObject.ParamSpec) => void;
            "notify::seat": (pspec: GObject.ParamSpec) => void;
            "notify::source": (pspec: GObject.ParamSpec) => void;
            "notify::tool": (pspec: GObject.ParamSpec) => void;
            "notify::vendor-id": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends Gdk.Device.ConstructorProps {

        }
    }

    /**
     * The Wayland implementation of {@link Gdk.Device}.
     * 
     * Beyond the regular {@link Gdk.Device} API, the Wayland implementation
     * provides access to Wayland objects such as the `wl_seat` with
     * {@link GdkWayland.WaylandDevice.get_wl_seat}, the `wl_keyboard` with
     * {@link GdkWayland.WaylandDevice.get_wl_keyboard} and the `wl_pointer` with
     * {@link GdkWayland.WaylandDevice.get_wl_pointer}.
     * @gir-type Class
     */
    class WaylandDevice extends Gdk.Device {
        static $gtype: GObject.GType<WaylandDevice>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: WaylandDevice.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<WaylandDevice.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals
        /** @signal */
        connect<K extends keyof WaylandDevice.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, WaylandDevice.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof WaylandDevice.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, WaylandDevice.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof WaylandDevice.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<WaylandDevice.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Methods
        /**
         * Returns the `/dev/input/event*` path of this device.
         * 
         * For {@link Gdk.Device}s that possibly coalesce multiple hardware
         * devices (eg. mouse, keyboard, touch,...), this function
         * will return `null`.
         * 
         * This is most notably implemented for devices of type
         * {@link Gdk.InputSource.PEN}, {@link Gdk.InputSource.TABLET_PAD}.
         * @returns the `/dev/input/event*`   path of this device
         */
        get_node_path(): (string | null);

        /**
         * Returns the `xkb_keymap` of a {@link Gdk.Device}.
         * @returns a `struct xkb_keymap`
         */
        get_xkb_keymap(): null;
    }


    namespace WaylandDisplay {
        // Signal signatures
        interface SignalSignatures extends Gdk.Display.SignalSignatures {
            "notify::composited": (pspec: GObject.ParamSpec) => void;
            "notify::dmabuf-formats": (pspec: GObject.ParamSpec) => void;
            "notify::input-shapes": (pspec: GObject.ParamSpec) => void;
            "notify::rgba": (pspec: GObject.ParamSpec) => void;
            "notify::shadow-width": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends Gdk.Display.ConstructorProps {

        }
    }

    /**
     * The Wayland implementation of {@link Gdk.Display}.
     * 
     * Beyond the regular {@link Gdk.Display} API, the Wayland implementation
     * provides access to Wayland objects such as the `wl_display` with
     * {@link GdkWayland.WaylandDisplay.get_wl_display}, the `wl_compositor` with
     * {@link GdkWayland.WaylandDisplay.get_wl_compositor}.
     * 
     * You can find out what Wayland globals are supported by a display
     * with {@link GdkWayland.WaylandDisplay.query_registry}.
     * @gir-type Class
     */
    class WaylandDisplay extends Gdk.Display {
        static $gtype: GObject.GType<WaylandDisplay>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: WaylandDisplay.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<WaylandDisplay.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals
        /** @signal */
        connect<K extends keyof WaylandDisplay.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, WaylandDisplay.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof WaylandDisplay.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, WaylandDisplay.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof WaylandDisplay.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<WaylandDisplay.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Methods
        /**
         * Retrieves the EGL display connection object for the given GDK display.
         * @returns the EGL display
         */
        get_egl_display(): null;

        /**
         * Gets the startup notification ID for a Wayland display, or `NULL`
         * if no ID has been defined.
         * @returns the startup notification ID for `display`
         */
        get_startup_notification_id(): (string | null);

        /**
         * Returns true if the interface was found in the display
         * `wl_registry.global` handler.
         * @param global global interface to query in the registry
         * @returns true if the global is offered by the compositor
         */
        query_registry(global: string): boolean;

        /**
         * Sets the cursor theme for the given `display`.
         * @param name the new cursor theme
         * @param size the size to use for cursors
         */
        set_cursor_theme(name: string, size: number): void;

        /**
         * Sets the startup notification ID for a display.
         * 
         * This is usually taken from the value of the `DESKTOP_STARTUP_ID`
         * environment variable, but in some cases (such as the application not
         * being launched using `exec()`) it can come from other sources.
         * 
         * The startup ID is also what is used to signal that the startup is
         * complete (for example, when opening a window or when calling
         * {@link Gdk.Display.notify_startup_complete}).
         * @param startup_id the startup notification ID (must be valid utf8)
         */
        set_startup_notification_id(startup_id: string): void;
    }


    namespace WaylandGLContext {
        // Signal signatures
        interface SignalSignatures extends Gdk.GLContext.SignalSignatures {
            "notify::allowed-apis": (pspec: GObject.ParamSpec) => void;
            "notify::api": (pspec: GObject.ParamSpec) => void;
            "notify::shared-context": (pspec: GObject.ParamSpec) => void;
            "notify::display": (pspec: GObject.ParamSpec) => void;
            "notify::surface": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends Gdk.GLContext.ConstructorProps {

        }
    }

    /**
     * The Wayland implementation of {@link Gdk.GLContext}.
     * @gir-type Class
     */
    class WaylandGLContext extends Gdk.GLContext {
        static $gtype: GObject.GType<WaylandGLContext>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: WaylandGLContext.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<WaylandGLContext.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals
        /** @signal */
        connect<K extends keyof WaylandGLContext.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, WaylandGLContext.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof WaylandGLContext.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, WaylandGLContext.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof WaylandGLContext.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<WaylandGLContext.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
    }


    namespace WaylandMonitor {
        // Signal signatures
        interface SignalSignatures extends Gdk.Monitor.SignalSignatures {
            "notify::connector": (pspec: GObject.ParamSpec) => void;
            "notify::description": (pspec: GObject.ParamSpec) => void;
            "notify::display": (pspec: GObject.ParamSpec) => void;
            "notify::geometry": (pspec: GObject.ParamSpec) => void;
            "notify::height-mm": (pspec: GObject.ParamSpec) => void;
            "notify::manufacturer": (pspec: GObject.ParamSpec) => void;
            "notify::model": (pspec: GObject.ParamSpec) => void;
            "notify::refresh-rate": (pspec: GObject.ParamSpec) => void;
            "notify::scale": (pspec: GObject.ParamSpec) => void;
            "notify::scale-factor": (pspec: GObject.ParamSpec) => void;
            "notify::subpixel-layout": (pspec: GObject.ParamSpec) => void;
            "notify::valid": (pspec: GObject.ParamSpec) => void;
            "notify::width-mm": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends Gdk.Monitor.ConstructorProps {

        }
    }

    /**
     * The Wayland implementation of {@link Gdk.Monitor}.
     * 
     * Beyond the {@link Gdk.Monitor} API, the Wayland implementation
     * offers access to the Wayland `wl_output` object with
     * {@link GdkWayland.WaylandMonitor.get_wl_output}.
     * @gir-type Class
     */
    class WaylandMonitor extends Gdk.Monitor {
        static $gtype: GObject.GType<WaylandMonitor>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: WaylandMonitor.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<WaylandMonitor.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals
        /** @signal */
        connect<K extends keyof WaylandMonitor.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, WaylandMonitor.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof WaylandMonitor.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, WaylandMonitor.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof WaylandMonitor.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<WaylandMonitor.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
    }


    namespace WaylandPopup {
        // Signal signatures
        interface SignalSignatures extends WaylandSurface.SignalSignatures {
            "notify::cursor": (pspec: GObject.ParamSpec) => void;
            "notify::display": (pspec: GObject.ParamSpec) => void;
            "notify::frame-clock": (pspec: GObject.ParamSpec) => void;
            "notify::height": (pspec: GObject.ParamSpec) => void;
            "notify::mapped": (pspec: GObject.ParamSpec) => void;
            "notify::scale": (pspec: GObject.ParamSpec) => void;
            "notify::scale-factor": (pspec: GObject.ParamSpec) => void;
            "notify::width": (pspec: GObject.ParamSpec) => void;
            "notify::autohide": (pspec: GObject.ParamSpec) => void;
            "notify::parent": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends WaylandSurface.ConstructorProps, Gdk.Popup.ConstructorProps {

        }
    }

    /**
     * The Wayland implementation of {@link Gdk.Popup}.
     * @gir-type Class
     */
    class WaylandPopup extends WaylandSurface implements Gdk.Popup {
        static $gtype: GObject.GType<WaylandPopup>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: WaylandPopup.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<WaylandPopup.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals
        /** @signal */
        connect<K extends keyof WaylandPopup.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, WaylandPopup.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof WaylandPopup.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, WaylandPopup.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof WaylandPopup.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<WaylandPopup.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        /**
         * Whether to hide on outside clicks.
         * @construct-only
         * @default false
          * @category Inherited from Gdk.Popup
         */
        get autohide(): boolean;

        /**
         * The parent surface.
         * @construct-only
          * @category Inherited from Gdk.Popup
         */
        get parent(): (Gdk.Surface | null);

        /**
         * Returns whether this popup is set to hide on outside clicks.
         * @returns `true` if `popup` will autohide
         */
        get_autohide(): boolean;

        /**
         * Returns the parent surface of a popup.
         * @returns the parent surface
         */
        get_parent(): (Gdk.Surface | null);

        /**
         * Obtains the position of the popup relative to its parent.
         * @returns the X coordinate of `popup` position
         */
        get_position_x(): number;

        /**
         * Obtains the position of the popup relative to its parent.
         * @returns the Y coordinate of `popup` position
         */
        get_position_y(): number;

        /**
         * Gets the current popup rectangle anchor.
         * 
         * The value returned may change after calling {@link Gdk.Popup.present},
         * or after the `Gdk.Surface::layout` signal is emitted.
         * @returns the current rectangle anchor value of `popup`
         */
        get_rect_anchor(): Gdk.Gravity;

        /**
         * Gets the current popup surface anchor.
         * 
         * The value returned may change after calling {@link Gdk.Popup.present},
         * or after the `Gdk.Surface::layout` signal is emitted.
         * @returns the current surface anchor value of `popup`
         */
        get_surface_anchor(): Gdk.Gravity;

        /**
         * Present `popup` after having processed the {@link Gdk.PopupLayout} rules.
         * 
         * If the popup was previously not showing, it will be shown,
         * otherwise it will change position according to `layout`.
         * 
         * After calling this function, the result should be handled in response
         * to the `Gdk.Surface::layout` signal being emitted. The resulting
         * popup position can be queried using {@link Gdk.Popup.get_position_x},
         * {@link Gdk.Popup.get_position_y}, and the resulting size will be sent as
         * parameters in the layout signal. Use {@link Gdk.Popup.get_rect_anchor}
         * and {@link Gdk.Popup.get_surface_anchor} to get the resulting anchors.
         * 
         * Presenting may fail, for example if the `popup` is set to autohide
         * and is immediately hidden upon being presented. If presenting failed,
         * the `Gdk.Surface::layout` signal will not me emitted.
         * @param width the unconstrained popup width to layout
         * @param height the unconstrained popup height to layout
         * @param layout the {@link Gdk.PopupLayout} object used to layout
         * @returns `false` if it failed to be presented, otherwise `true`.
         */
        present(width: number, height: number, layout: Gdk.PopupLayout): boolean;
    }


    namespace WaylandSeat {
        // Signal signatures
        interface SignalSignatures extends Gdk.Seat.SignalSignatures {
            "notify::display": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends Gdk.Seat.ConstructorProps {

        }
    }

    /**
     * The Wayland implementation of {@link Gdk.Seat}.
     * 
     * Beyond the regular {@link Gdk.Seat} API, the Wayland implementation
     * provides access to the Wayland `wl_seat` object with
     * {@link GdkWayland.WaylandSeat.get_wl_seat}.
     * @gir-type Class
     */
    class WaylandSeat extends Gdk.Seat {
        static $gtype: GObject.GType<WaylandSeat>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: WaylandSeat.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<WaylandSeat.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals
        /** @signal */
        connect<K extends keyof WaylandSeat.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, WaylandSeat.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof WaylandSeat.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, WaylandSeat.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof WaylandSeat.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<WaylandSeat.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
    }


    namespace WaylandSurface {
        // Signal signatures
        interface SignalSignatures extends Gdk.Surface.SignalSignatures {
            "notify::cursor": (pspec: GObject.ParamSpec) => void;
            "notify::display": (pspec: GObject.ParamSpec) => void;
            "notify::frame-clock": (pspec: GObject.ParamSpec) => void;
            "notify::height": (pspec: GObject.ParamSpec) => void;
            "notify::mapped": (pspec: GObject.ParamSpec) => void;
            "notify::scale": (pspec: GObject.ParamSpec) => void;
            "notify::scale-factor": (pspec: GObject.ParamSpec) => void;
            "notify::width": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends Gdk.Surface.ConstructorProps {

        }
    }

    /**
     * The Wayland implementation of {@link Gdk.Surface}.
     * 
     * Beyond the {@link Gdk.Surface} API, the Wayland implementation offers
     * access to the Wayland `wl_surface` object with
     * {@link GdkWayland.WaylandSurface.get_wl_surface}.
     * @gir-type Class
     */
    class WaylandSurface extends Gdk.Surface {
        static $gtype: GObject.GType<WaylandSurface>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: WaylandSurface.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<WaylandSurface.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals
        /** @signal */
        connect<K extends keyof WaylandSurface.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, WaylandSurface.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof WaylandSurface.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, WaylandSurface.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof WaylandSurface.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<WaylandSurface.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Methods
        /**
         * Forces next commit.
         */
        force_next_commit(): void;
    }


    namespace WaylandToplevel {
        // Signal signatures
        interface SignalSignatures extends WaylandSurface.SignalSignatures {
            "notify::cursor": (pspec: GObject.ParamSpec) => void;
            "notify::display": (pspec: GObject.ParamSpec) => void;
            "notify::frame-clock": (pspec: GObject.ParamSpec) => void;
            "notify::height": (pspec: GObject.ParamSpec) => void;
            "notify::mapped": (pspec: GObject.ParamSpec) => void;
            "notify::scale": (pspec: GObject.ParamSpec) => void;
            "notify::scale-factor": (pspec: GObject.ParamSpec) => void;
            "notify::width": (pspec: GObject.ParamSpec) => void;
            "notify::capabilities": (pspec: GObject.ParamSpec) => void;
            "notify::decorated": (pspec: GObject.ParamSpec) => void;
            "notify::deletable": (pspec: GObject.ParamSpec) => void;
            "notify::fullscreen-mode": (pspec: GObject.ParamSpec) => void;
            "notify::gravity": (pspec: GObject.ParamSpec) => void;
            "notify::icon-list": (pspec: GObject.ParamSpec) => void;
            "notify::modal": (pspec: GObject.ParamSpec) => void;
            "notify::shortcuts-inhibited": (pspec: GObject.ParamSpec) => void;
            "notify::startup-id": (pspec: GObject.ParamSpec) => void;
            "notify::state": (pspec: GObject.ParamSpec) => void;
            "notify::title": (pspec: GObject.ParamSpec) => void;
            "notify::transient-for": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends WaylandSurface.ConstructorProps, Gdk.Toplevel.ConstructorProps {

        }
    }

    /**
     * The Wayland implementation of {@link Gdk.Toplevel}.
     * 
     * Beyond the {@link Gdk.Toplevel} API, the Wayland implementation
     * has API to set up cross-process parent-child relationships between
     * surfaces with {@link GdkWayland.WaylandToplevel.export_handle} and
     * {@link GdkWayland.WaylandToplevel.set_transient_for_exported}.
     * @gir-type Class
     */
    class WaylandToplevel extends WaylandSurface implements Gdk.Toplevel {
        static $gtype: GObject.GType<WaylandToplevel>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: WaylandToplevel.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<WaylandToplevel.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals
        /** @signal */
        connect<K extends keyof WaylandToplevel.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, WaylandToplevel.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof WaylandToplevel.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, WaylandToplevel.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof WaylandToplevel.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<WaylandToplevel.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Methods
        /**
         * Destroy a handle that was obtained with `gdk_wayland_toplevel_export_handle()`.
         * 
         * Note that this API depends on an unstable Wayland protocol,
         * and thus may require changes in the future.
         * @param handle the handle to drop
         */
        drop_exported_handle(handle: string): void;

        /**
         * Asynchronously obtains a handle for a surface that can be passed
         * to other processes.
         * 
         * When the handle has been obtained, `callback` will be called.
         * 
         * It is an error to call this function on a surface that is already
         * exported.
         * 
         * When the handle is no longer needed, {@link GdkWayland.WaylandToplevel.unexport_handle}
         * should be called to clean up resources.
         * 
         * The main purpose for obtaining a handle is to mark a surface
         * from another surface as transient for this one, see
         * {@link GdkWayland.WaylandToplevel.set_transient_for_exported}.
         * 
         * Before 4.12, this API could not safely be used multiple times,
         * since there was no reference counting for handles. Starting with
         * 4.12, every call to this function obtains a new handle, and every
         * call to {@link GdkWayland.WaylandToplevel.drop_exported_handle} drops
         * just the handle that it is given.
         * 
         * Note that this API depends on an unstable Wayland protocol,
         * and thus may require changes in the future.
         * @param callback callback to call with the handle
         * @returns `true` if the handle has been requested, `false` if   an error occurred.
         */
        export_handle(callback: WaylandToplevelExported): boolean;

        /**
         * Sets the application id on a {@link Gdk.Toplevel}.
         * @param application_id the application id for the `toplevel`
         */
        set_application_id(application_id: string): void;

        /**
         * Marks `toplevel` as transient for the surface to which the given
         * `parent_handle_str` refers.
         * 
         * Typically, the handle will originate from a
         * {@link GdkWayland.WaylandToplevel.export_handle} call in another process.
         * 
         * Note that this API depends on an unstable Wayland protocol,
         * and thus may require changes in the future.
         * @param parent_handle_str an exported handle for a surface
         * @returns `true` if the surface has been marked as transient,   `false` if an error occurred.
         */
        set_transient_for_exported(parent_handle_str: string): boolean;

        /**
         * Destroys the handle that was obtained with
         * `gdk_wayland_toplevel_export_handle()`.
         * 
         * It is an error to call this function on a surface that
         * does not have a handle.
         * 
         * Since 4.12, this function does nothing. Use
         * {@link GdkWayland.WaylandToplevel.drop_exported_handle} instead to drop a
         * handle that was obtained with {@link GdkWayland.WaylandToplevel.export_handle}.
         * 
         * Note that this API depends on an unstable Wayland protocol,
         * and thus may require changes in the future.
         */
        unexport_handle(): void;

        /**
         * The capabilities that are available for this toplevel.
         * @since 4.20
         * @read-only
         * @default 0
          * @category Inherited from Gdk.Toplevel
         */
        get capabilities(): Gdk.ToplevelCapabilities;

        /**
         * Whether the window manager should add decorations.
         * @default false
          * @category Inherited from Gdk.Toplevel
         */
        get decorated(): boolean;
        set decorated(val: boolean);

        /**
         * Whether the window manager should allow to close the surface.
         * @default false
          * @category Inherited from Gdk.Toplevel
         */
        get deletable(): boolean;
        set deletable(val: boolean);

        /**
         * The fullscreen mode of the surface.
         * @default Gdk.FullscreenMode.CURRENT_MONITOR
          * @category Inherited from Gdk.Toplevel
         */
        get fullscreen_mode(): Gdk.FullscreenMode;
        set fullscreen_mode(val: Gdk.FullscreenMode);

        /**
         * The fullscreen mode of the surface.
         * @default Gdk.FullscreenMode.CURRENT_MONITOR
          * @category Inherited from Gdk.Toplevel
         */
        get fullscreenMode(): Gdk.FullscreenMode;
        set fullscreenMode(val: Gdk.FullscreenMode);

        /**
         * The gravity to use when resizing a surface programmatically.
         * 
         * Gravity describes which point of the surface we want to keep
         * fixed (meaning that the surface will grow in the opposite direction).
         * For example, a gravity of `GDK_GRAVITY_NORTH_EAST` means that we
         * want to fix top right corner of the surface.
         * 
         * This property is just a hint that may affect the result when negotiating
         * toplevel sizes with the windowing system. It does not affect interactive
         * resizes started with {@link Gdk.Toplevel.begin_resize}.
         * @since 4.20
         * @default Gdk.Gravity.NORTH_EAST
          * @category Inherited from Gdk.Toplevel
         */
        get gravity(): Gdk.Gravity;
        set gravity(val: Gdk.Gravity);

        /**
         * A list of textures to use as icon.
          * @category Inherited from Gdk.Toplevel
         */
        get icon_list(): null;
        set icon_list(val: never);

        /**
         * A list of textures to use as icon.
          * @category Inherited from Gdk.Toplevel
         */
        get iconList(): null;
        set iconList(val: never);

        /**
         * Whether the surface is modal.
         * @default false
          * @category Inherited from Gdk.Toplevel
         */
        get modal(): boolean;
        set modal(val: boolean);

        /**
         * Whether the surface should inhibit keyboard shortcuts.
         * @read-only
         * @default false
          * @category Inherited from Gdk.Toplevel
         */
        get shortcuts_inhibited(): boolean;

        /**
         * Whether the surface should inhibit keyboard shortcuts.
         * @read-only
         * @default false
          * @category Inherited from Gdk.Toplevel
         */
        get shortcutsInhibited(): boolean;

        /**
         * The startup ID of the surface.
         * 
         * See {@link Gdk.AppLaunchContext} for more information about
         * startup feedback.
         * @default null
          * @category Inherited from Gdk.Toplevel
         */
        get startup_id(): string;
        set startup_id(val: string);

        /**
         * The startup ID of the surface.
         * 
         * See {@link Gdk.AppLaunchContext} for more information about
         * startup feedback.
         * @default null
          * @category Inherited from Gdk.Toplevel
         */
        get startupId(): string;
        set startupId(val: string);

        /**
         * The state of the toplevel.
         * @read-only
         * @default 0
          * @category Inherited from Gdk.Toplevel
         */
        get state(): Gdk.ToplevelState;

        /**
         * The title of the surface.
         * @default null
          * @category Inherited from Gdk.Toplevel
         */
        get title(): string;
        set title(val: string);

        /**
         * The transient parent of the surface.
          * @category Inherited from Gdk.Toplevel
         */
        get transient_for(): Gdk.Surface;
        set transient_for(val: Gdk.Surface);

        /**
         * The transient parent of the surface.
          * @category Inherited from Gdk.Toplevel
         */
        get transientFor(): Gdk.Surface;
        set transientFor(val: Gdk.Surface);

        /**
         * Begins an interactive move operation.
         * 
         * You might use this function to implement draggable titlebars.
         * @param device the device used for the operation
         * @param button the button being used to drag, or 0 for a keyboard-initiated drag
         * @param x surface X coordinate of mouse click that began the drag
         * @param y surface Y coordinate of mouse click that began the drag
         * @param timestamp timestamp of mouse click that began the drag (use   {@link Gdk.Event.get_time})
         */
        begin_move(device: Gdk.Device, button: number, x: number, y: number, timestamp: number): void;

        /**
         * Begins an interactive resize operation.
         * 
         * You might use this function to implement a &#x201C;window resize grip.&#x201D;
         * @param edge the edge or corner from which the drag is started
         * @param device the device used for the operation
         * @param button the button being used to drag, or 0 for a keyboard-initiated drag
         * @param x surface X coordinate of mouse click that began the drag
         * @param y surface Y coordinate of mouse click that began the drag
         * @param timestamp timestamp of mouse click that began the drag (use   {@link Gdk.Event.get_time})
         */
        begin_resize(edge: Gdk.SurfaceEdge, device: (Gdk.Device | null), button: number, x: number, y: number, timestamp: number): void;

        /**
         * Sets keyboard focus to `surface`.
         * 
         * In most cases, [gtk_window_present_with_time()](../gtk4/method.Window.present_with_time.html)
         * should be used on a [GtkWindow](../gtk4/class.Window.html), rather than
         * calling this function.
         * @param timestamp timestamp of the event triggering the surface focus
         */
        focus(timestamp: number): void;

        /**
         * The capabilities that are available for this toplevel.
         * @returns the capabilities of the {@link Gdk.Toplevel}.
         */
        get_capabilities(): Gdk.ToplevelCapabilities;

        /**
         * Returns the gravity that is used when changing the toplevel
         * size programmatically.
         * @returns the gravity
         */
        get_gravity(): Gdk.Gravity;

        /**
         * Gets the bitwise or of the currently active surface state flags,
         * from the {@link Gdk.ToplevelState} enumeration.
         * @returns surface state bitfield
         */
        get_state(): Gdk.ToplevelState;

        /**
         * Requests that the `toplevel` inhibit the system shortcuts.
         * 
         * This is asking the desktop environment/windowing system to let all
         * keyboard events reach the surface, as long as it is focused, instead
         * of triggering system actions.
         * 
         * If granted, the rerouting remains active until the default shortcuts
         * processing is restored with {@link Gdk.Toplevel.restore_system_shortcuts},
         * or the request is revoked by the desktop environment, windowing system
         * or the user.
         * 
         * A typical use case for this API is remote desktop or virtual machine
         * viewers which need to inhibit the default system keyboard shortcuts
         * so that the remote session or virtual host gets those instead of the
         * local environment.
         * 
         * The windowing system or desktop environment may ask the user to grant
         * or deny the request or even choose to ignore the request entirely.
         * 
         * The caller can be notified whenever the request is granted or revoked
         * by listening to the {@link Gdk.Toplevel.shortcuts_inhibited} property.
         * @param event the {@link Gdk.Event} that is triggering the inhibit   request, or `null` if none is available
         */
        inhibit_system_shortcuts(event: (Gdk.Event | null)): void;

        /**
         * Asks to lower the `toplevel` below other windows.
         * 
         * The windowing system may choose to ignore the request.
         * @returns `true` if the surface was lowered
         */
        lower(): boolean;

        /**
         * Asks to minimize the `toplevel`.
         * 
         * The windowing system may choose to ignore the request.
         * @returns `true` if the surface was minimized
         */
        minimize(): boolean;

        /**
         * Present `toplevel` after having processed the {@link Gdk.ToplevelLayout} rules.
         * 
         * If the toplevel was previously not showing, it will be showed,
         * otherwise it will change layout according to `layout`.
         * 
         * GDK may emit the `Gdk.Toplevel::compute-size` signal to let
         * the user of this toplevel compute the preferred size of the toplevel
         * surface.
         * 
         * Presenting is asynchronous and the specified layout parameters are not
         * guaranteed to be respected.
         * @param layout the {@link Gdk.ToplevelLayout} object used to layout
         */
        present(layout: Gdk.ToplevelLayout): void;

        /**
         * Restore default system keyboard shortcuts which were previously
         * inhibited.
         * 
         * This undoes the effect of {@link Gdk.Toplevel.inhibit_system_shortcuts}.
         */
        restore_system_shortcuts(): void;

        /**
         * Sets the toplevel to be decorated.
         * 
         * Setting `decorated` to `false` hints the desktop environment
         * that the surface has its own, client-side decorations and
         * does not need to have window decorations added.
         * @param decorated `true` to request decorations
         */
        set_decorated(decorated: boolean): void;

        /**
         * Sets the toplevel to be deletable.
         * 
         * Setting `deletable` to `true` hints the desktop environment
         * that it should offer the user a way to close the surface.
         * @param deletable `true` to request a delete button
         */
        set_deletable(deletable: boolean): void;

        /**
         * Sets the gravity that is used when changing the toplevel
         * size programmatically.
         * @param gravity the new gravity
         */
        set_gravity(gravity: Gdk.Gravity): void;

        /**
         * Sets a list of icons for the surface.
         * 
         * One of these will be used to represent the surface in iconic form.
         * The icon may be shown in window lists or task bars. Which icon
         * size is shown depends on the window manager. The window manager
         * can scale the icon but setting several size icons can give better
         * image quality.
         * 
         * Note that some platforms don't support surface icons.
         * @param surfaces A list of textures to use as icon, of different sizes
         */
        set_icon_list(surfaces: Gdk.Texture[]): void;

        /**
         * Sets the toplevel to be modal.
         * 
         * The application can use this hint to tell the
         * window manager that a certain surface has modal
         * behaviour. The window manager can use this information
         * to handle modal surfaces in a special way.
         * 
         * You should only use this on surfaces for which you have
         * previously called {@link Gdk.Toplevel.set_transient_for}.
         * @param modal `true` if the surface is modal, `false` otherwise.
         */
        set_modal(modal: boolean): void;

        /**
         * Sets the startup notification ID.
         * 
         * When using GTK, typically you should use
         * [gtk_window_set_startup_id()](../gtk4/method.Window.set_startup_id.html)
         * instead of this low-level function.
         * @param startup_id a string with startup-notification identifier
         */
        set_startup_id(startup_id: string): void;

        /**
         * Sets the title of a toplevel surface.
         * 
         * The title maybe be displayed in the titlebar,
         * in lists of windows, etc.
         * @param title title of `surface`
         */
        set_title(title: string): void;

        /**
         * Sets a transient-for parent.
         * 
         * Indicates to the window manager that `surface` is a transient
         * dialog associated with the application surface `parent`. This
         * allows the window manager to do things like center `surface`
         * on `parent` and keep `surface` above `parent`.
         * 
         * See [gtk_window_set_transient_for()](../gtk4/method.Window.set_transient_for.html)
         * if you&#x2019;re using [GtkWindow](../gtk4/class.Window.html).
         * @param parent another toplevel {@link Gdk.Surface}
         */
        set_transient_for(parent: Gdk.Surface): void;

        /**
         * Asks the windowing system to show the window menu.
         * 
         * The window menu is the menu shown when right-clicking the titlebar
         * on traditional windows managed by the window manager. This is useful
         * for windows using client-side decorations, activating it with a
         * right-click on the window decorations.
         * @param event a {@link Gdk.Event} to show the menu for
         * @returns `true` if the window menu was shown and `false` otherwise.
         */
        show_window_menu(event: Gdk.Event): boolean;

        /**
         * Returns whether the desktop environment supports
         * tiled window states.
         * @returns `true` if the desktop environment supports tiled window states
         */
        supports_edge_constraints(): boolean;

        /**
         * Performs a title bar gesture.
         * @param gesture a {@link Gdk.TitlebarGesture}
         * @returns whether the gesture was performed
         */
        titlebar_gesture(gesture: Gdk.TitlebarGesture): boolean;
    }


    /**
     * @gir-type Alias
     */
    type WaylandDeviceClass = typeof WaylandDevice;

    /**
     * @gir-type Alias
     */
    type WaylandDisplayClass = typeof WaylandDisplay;

    /**
     * @gir-type Alias
     */
    type WaylandGLContextClass = typeof WaylandGLContext;

    /**
     * @gir-type Alias
     */
    type WaylandMonitorClass = typeof WaylandMonitor;

    /**
     * @gir-type Alias
     */
    type WaylandSeatClass = typeof WaylandSeat;

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

export default GdkWayland;

// END
