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
import type GObject from '@girs/gobject-2.0';

export namespace xlib {
    /**
     * xlib-2.0
     */

    function open_display(): void;
    class Display {
        static $gtype: GObject.GType<Display>;
    }

    class Screen {
        static $gtype: GObject.GType<Screen>;
    }

    class Visual {
        static $gtype: GObject.GType<Visual>;
    }

    class XConfigureEvent {
        static $gtype: GObject.GType<XConfigureEvent>;
    }

    class XImage {
        static $gtype: GObject.GType<XImage>;
    }

    class XFontStruct {
        static $gtype: GObject.GType<XFontStruct>;
    }

    class XTrapezoid {
        static $gtype: GObject.GType<XTrapezoid>;
    }

    class XVisualInfo {
        static $gtype: GObject.GType<XVisualInfo>;
    }

    class XWindowAttributes {
        static $gtype: GObject.GType<XWindowAttributes>;
    }

    class XEvent {
        static $gtype: GObject.GType<XEvent>;
    }

    type Atom = number;
    type Colormap = number;
    type Cursor = number;
    type Drawable = number;
    type GC = any;
    type KeyCode = number;
    type KeySym = number;
    type Picture = number;
    type Time = number;
    type VisualID = number;
    type Window = number;
    type XID = number;
    type Pixmap = number;
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

export default xlib;

// END
