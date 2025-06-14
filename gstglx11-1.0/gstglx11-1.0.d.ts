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

export namespace GstGLX11 {
    /**
     * GstGLX11-1.0
     */

    namespace GLDisplayX11 {
        // Signal signatures
        interface SignalSignatures extends GstGL.GLDisplay.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends GstGL.GLDisplay.ConstructorProps {}
    }

    /**
     * the contents of a #GstGLDisplayX11 are private and should only be accessed
     * through the provided API
     */
    class GLDisplayX11 extends GstGL.GLDisplay {
        static $gtype: GObject.GType<GLDisplayX11>;

        // Constructors

        constructor(properties?: Partial<GLDisplayX11.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](name?: string | null): GLDisplayX11;
        // Conflicted with GstGL.GLDisplay.new

        static ['new'](...args: never[]): any;

        // Signals

        connect<K extends keyof GLDisplayX11.SignalSignatures>(
            signal: K,
            callback: GLDisplayX11.SignalSignatures[K],
        ): number;
        connect_after<K extends keyof GLDisplayX11.SignalSignatures>(
            signal: K,
            callback: GLDisplayX11.SignalSignatures[K],
        ): number;
        emit<K extends keyof GLDisplayX11.SignalSignatures>(
            signal: K,
            ...args: GLDisplayX11.SignalSignatures[K] extends (...args: infer P) => any ? P : never
        ): void;
    }

    type GLDisplayX11Class = typeof GLDisplayX11;
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

export default GstGLX11;

// END
