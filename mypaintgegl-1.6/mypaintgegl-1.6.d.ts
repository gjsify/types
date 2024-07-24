/**
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in `ts-for-gir` or create a bug report on https://github.com/gjsify/ts-for-gir
 *
 * The based EJS template file is used for the generated .d.ts file of each GIR module like Gtk-4.0, GObject-2.0, ...
 */

// Module dependencies
import type MyPaint from '@girs/mypaint-1.6';
import type GObject from '@girs/gobject-2.0';
import type GLib from '@girs/glib-2.0';
import type Gegl from '@girs/gegl-0.4';
import type Babl from '@girs/babl-0.1';

export namespace MyPaintGegl {
    /**
     * MyPaintGegl-1.6
     */

    class TiledSurface {
        static $gtype: GObject.GType<TiledSurface>;

        // Constructors

        constructor(properties?: Partial<{}>);
        _init(...args: any[]): void;

        static ['new'](): TiledSurface;

        // Methods

        get_buffer(): Gegl.Buffer;
        ['interface'](): MyPaint.Surface;
        set_buffer(buffer: Gegl.Buffer): void;
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

export default MyPaintGegl;

// END
