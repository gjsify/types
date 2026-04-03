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

export namespace GdkMacos {
    /**
     * GdkMacos-4.0
     */

    namespace MacosDevice {
        // Signal signatures
        interface SignalSignatures extends Gdk.Device.SignalSignatures {
            'notify::active-layout-index': (pspec: GObject.ParamSpec) => void;
            'notify::caps-lock-state': (pspec: GObject.ParamSpec) => void;
            'notify::direction': (pspec: GObject.ParamSpec) => void;
            'notify::display': (pspec: GObject.ParamSpec) => void;
            'notify::has-bidi-layouts': (pspec: GObject.ParamSpec) => void;
            'notify::has-cursor': (pspec: GObject.ParamSpec) => void;
            'notify::layout-names': (pspec: GObject.ParamSpec) => void;
            'notify::modifier-state': (pspec: GObject.ParamSpec) => void;
            'notify::n-axes': (pspec: GObject.ParamSpec) => void;
            'notify::name': (pspec: GObject.ParamSpec) => void;
            'notify::num-lock-state': (pspec: GObject.ParamSpec) => void;
            'notify::num-touches': (pspec: GObject.ParamSpec) => void;
            'notify::product-id': (pspec: GObject.ParamSpec) => void;
            'notify::scroll-lock-state': (pspec: GObject.ParamSpec) => void;
            'notify::seat': (pspec: GObject.ParamSpec) => void;
            'notify::source': (pspec: GObject.ParamSpec) => void;
            'notify::tool': (pspec: GObject.ParamSpec) => void;
            'notify::vendor-id': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends Gdk.Device.ConstructorProps {}
    }

    /**
     * @gir-type Class
     */
    class MacosDevice extends Gdk.Device {
        static $gtype: GObject.GType<MacosDevice>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: MacosDevice.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<MacosDevice.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        /** @signal */
        connect<K extends keyof MacosDevice.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, MacosDevice.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof MacosDevice.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, MacosDevice.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof MacosDevice.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<MacosDevice.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;
    }

    namespace MacosDisplay {
        // Signal signatures
        interface SignalSignatures extends Gdk.Display.SignalSignatures {
            'notify::composited': (pspec: GObject.ParamSpec) => void;
            'notify::dmabuf-formats': (pspec: GObject.ParamSpec) => void;
            'notify::input-shapes': (pspec: GObject.ParamSpec) => void;
            'notify::rgba': (pspec: GObject.ParamSpec) => void;
            'notify::shadow-width': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends Gdk.Display.ConstructorProps {}
    }

    /**
     * @gir-type Class
     */
    class MacosDisplay extends Gdk.Display {
        static $gtype: GObject.GType<MacosDisplay>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: MacosDisplay.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<MacosDisplay.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        /** @signal */
        connect<K extends keyof MacosDisplay.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, MacosDisplay.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof MacosDisplay.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, MacosDisplay.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof MacosDisplay.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<MacosDisplay.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;
    }

    namespace MacosGLContext {
        // Signal signatures
        interface SignalSignatures extends Gdk.GLContext.SignalSignatures {
            'notify::allowed-apis': (pspec: GObject.ParamSpec) => void;
            'notify::api': (pspec: GObject.ParamSpec) => void;
            'notify::shared-context': (pspec: GObject.ParamSpec) => void;
            'notify::display': (pspec: GObject.ParamSpec) => void;
            'notify::surface': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends Gdk.GLContext.ConstructorProps {}
    }

    /**
     * @gir-type Class
     */
    class MacosGLContext extends Gdk.GLContext {
        static $gtype: GObject.GType<MacosGLContext>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: MacosGLContext.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<MacosGLContext.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        /** @signal */
        connect<K extends keyof MacosGLContext.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, MacosGLContext.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof MacosGLContext.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, MacosGLContext.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof MacosGLContext.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<MacosGLContext.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;
    }

    namespace MacosKeymap {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    /**
     * @gir-type Class
     */
    class MacosKeymap extends GObject.Object {
        static $gtype: GObject.GType<MacosKeymap>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: MacosKeymap.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<MacosKeymap.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        /** @signal */
        connect<K extends keyof MacosKeymap.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, MacosKeymap.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof MacosKeymap.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, MacosKeymap.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof MacosKeymap.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<MacosKeymap.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;
    }

    namespace MacosMonitor {
        // Signal signatures
        interface SignalSignatures extends Gdk.Monitor.SignalSignatures {
            'notify::connector': (pspec: GObject.ParamSpec) => void;
            'notify::description': (pspec: GObject.ParamSpec) => void;
            'notify::display': (pspec: GObject.ParamSpec) => void;
            'notify::geometry': (pspec: GObject.ParamSpec) => void;
            'notify::height-mm': (pspec: GObject.ParamSpec) => void;
            'notify::manufacturer': (pspec: GObject.ParamSpec) => void;
            'notify::model': (pspec: GObject.ParamSpec) => void;
            'notify::refresh-rate': (pspec: GObject.ParamSpec) => void;
            'notify::scale': (pspec: GObject.ParamSpec) => void;
            'notify::scale-factor': (pspec: GObject.ParamSpec) => void;
            'notify::subpixel-layout': (pspec: GObject.ParamSpec) => void;
            'notify::valid': (pspec: GObject.ParamSpec) => void;
            'notify::width-mm': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends Gdk.Monitor.ConstructorProps {}
    }

    /**
     * @gir-type Class
     */
    class MacosMonitor extends Gdk.Monitor {
        static $gtype: GObject.GType<MacosMonitor>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: MacosMonitor.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<MacosMonitor.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        /** @signal */
        connect<K extends keyof MacosMonitor.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, MacosMonitor.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof MacosMonitor.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, MacosMonitor.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof MacosMonitor.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<MacosMonitor.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Static methods

        /**
         * @param self
         * @param geometry
         */
        static get_geometry(self: Gdk.Monitor, geometry: Gdk.Rectangle): void;
        /**
         * Retrieves the size and position of the &#x201C;work area&#x201D; on a monitor
         * within the display coordinate space.
         *
         * The returned geometry is in &#x201D;application pixels&#x201D;, not in &#x201D;device pixels&#x201D;
         * (see {@link Gdk.Monitor.get_scale_factor}).
         * @param monitor a {@link Gdk.Monitor}
         */
        static get_workarea(monitor: Gdk.Monitor): Gdk.Rectangle;
    }

    namespace MacosSeat {
        // Signal signatures
        interface SignalSignatures extends Gdk.Seat.SignalSignatures {
            'notify::display': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends Gdk.Seat.ConstructorProps {}
    }

    /**
     * @gir-type Class
     */
    class MacosSeat extends Gdk.Seat {
        static $gtype: GObject.GType<MacosSeat>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: MacosSeat.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<MacosSeat.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        /** @signal */
        connect<K extends keyof MacosSeat.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, MacosSeat.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof MacosSeat.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, MacosSeat.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof MacosSeat.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<MacosSeat.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;
    }

    namespace MacosSurface {
        // Signal signatures
        interface SignalSignatures extends Gdk.Surface.SignalSignatures {
            'notify::native': (pspec: GObject.ParamSpec) => void;
            'notify::cursor': (pspec: GObject.ParamSpec) => void;
            'notify::display': (pspec: GObject.ParamSpec) => void;
            'notify::frame-clock': (pspec: GObject.ParamSpec) => void;
            'notify::height': (pspec: GObject.ParamSpec) => void;
            'notify::mapped': (pspec: GObject.ParamSpec) => void;
            'notify::scale': (pspec: GObject.ParamSpec) => void;
            'notify::scale-factor': (pspec: GObject.ParamSpec) => void;
            'notify::width': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends Gdk.Surface.ConstructorProps {
            native: any;
        }
    }

    /**
     * @gir-type Class
     */
    abstract class MacosSurface extends Gdk.Surface {
        static $gtype: GObject.GType<MacosSurface>;

        // Properties

        /**
         * The "native" property contains the underlying NSWindow.
         * @read-only
         */
        get native(): any;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: MacosSurface.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<MacosSurface.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        /** @signal */
        connect<K extends keyof MacosSurface.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, MacosSurface.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof MacosSurface.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, MacosSurface.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof MacosSurface.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<MacosSurface.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * Gets the underlying NSWindow used by the surface.
         *
         * The NSWindow's contentView is an implementation detail and may change
         * between releases of GTK.
         * @returns a `NSWindow` or `null`
         */
        get_native_window(): any | null;
    }

    /**
     * @gir-type Alias
     */
    type MacosDeviceClass = typeof MacosDevice;
    /**
     * @gir-type Alias
     */
    type MacosDisplayClass = typeof MacosDisplay;
    /**
     * @gir-type Alias
     */
    type MacosGLContextClass = typeof MacosGLContext;
    /**
     * @gir-type Alias
     */
    type MacosKeymapClass = typeof MacosKeymap;
    /**
     * @gir-type Alias
     */
    type MacosMonitorClass = typeof MacosMonitor;
    /**
     * @gir-type Alias
     */
    type MacosSeatClass = typeof MacosSeat;
    /**
     * @gir-type Alias
     */
    type MacosSurfaceClass = typeof MacosSurface;
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

export default GdkMacos;

// END
