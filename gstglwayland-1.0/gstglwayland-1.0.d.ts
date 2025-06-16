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
import type GstVideo from '@girs/gstvideo-1.0';
import type GstBase from '@girs/gstbase-1.0';
import type Gst from '@girs/gst-1.0';
import type GObject from '@girs/gobject-2.0';
import type GLib from '@girs/glib-2.0';
import type GModule from '@girs/gmodule-2.0';
import type GstGL from '@girs/gstgl-1.0';

export namespace GstGLWayland {
    /**
     * GstGLWayland-1.0
     */

    namespace GLDisplayWayland {
        // Signal signatures
        interface SignalSignatures extends GstGL.GLDisplay.SignalSignatures {
            'notify::name': (pspec: GObject.ParamSpec) => void;
            'notify::parent': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GstGL.GLDisplay.ConstructorProps {}
    }

    /**
     * the contents of a #GstGLDisplayWayland are private and should only be accessed
     * through the provided API
     */
    class GLDisplayWayland extends GstGL.GLDisplay {
        static $gtype: GObject.GType<GLDisplayWayland>;
        /**
         * Compile-time signal type information.
         *
         * This static property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        static $signals: GLDisplayWayland.SignalSignatures;

        // Fields

        display: any;
        registry: any;
        compositor: any;
        subcompositor: any;
        shell: any;

        // Constructors

        constructor(properties?: Partial<GLDisplayWayland.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](name?: string | null): GLDisplayWayland;
        // Conflicted with GstGL.GLDisplay.new

        static ['new'](...args: never[]): any;

        static new_with_display(display?: any | null): GLDisplayWayland;

        // Signals

        connect<K extends keyof GLDisplayWayland.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, GLDisplayWayland.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof GLDisplayWayland.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, GLDisplayWayland.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof GLDisplayWayland.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<GLDisplayWayland.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;
    }

    type GLDisplayWaylandClass = typeof GLDisplayWayland;
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

export default GstGLWayland;

// END
