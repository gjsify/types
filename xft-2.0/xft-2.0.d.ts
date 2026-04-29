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
import type xlib from '@girs/xlib-2.0';
import type GObject from '@girs/gobject-2.0';

export namespace xft {
    /**
     * xft-2.0
     */

    function init(): void;
    /**
     * @gir-type Struct
     */
    class Color {
        static $gtype: GObject.GType<Color>;
    }

    /**
     * @gir-type Struct
     */
    class Draw {
        static $gtype: GObject.GType<Draw>;
    }

    /**
     * @gir-type Struct
     */
    class Font {
        static $gtype: GObject.GType<Font>;
    }

    /**
     * @gir-type Struct
     */
    class GlyphSpec {
        static $gtype: GObject.GType<GlyphSpec>;
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

export default xft;

// END
