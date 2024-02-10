/*
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in `ts-for-gir` or create a bug report on https://github.com/gjsify/ts-for-gir
 */

import './mypaintgegl-1.6-ambient.d.ts';
import './mypaintgegl-1.6-import.d.ts';
/**
 * MyPaintGegl-1.6
 */

import type MyPaint from '@girs/mypaint-1.6';
import type GObject from '@girs/gobject-2.0';
import type GLib from '@girs/glib-2.0';
import type Gegl from '@girs/gegl-0.4';
import type Babl from '@girs/babl-0.1';

export namespace MyPaintGegl {
    class TiledSurface {
        // Constructors of MyPaintGegl-1.6.TiledSurface

        constructor(properties?: Partial<{}>);

        static ['new'](): TiledSurface;

        // Owm methods of MyPaintGegl-1.6.TiledSurface

        get_buffer(): Gegl.Buffer;
        interface(): MyPaint.Surface;
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
