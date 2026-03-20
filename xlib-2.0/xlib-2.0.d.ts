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
    /**
     * @gir-type Struct
     */
    class Display {
        static $gtype: GObject.GType<Display>;
    }

    /**
     * @gir-type Struct
     */
    class Screen {
        static $gtype: GObject.GType<Screen>;
    }

    /**
     * @gir-type Struct
     */
    class Visual {
        static $gtype: GObject.GType<Visual>;
    }

    /**
     * @gir-type Struct
     */
    class XConfigureEvent {
        static $gtype: GObject.GType<XConfigureEvent>;
    }

    /**
     * @gir-type Struct
     */
    class XImage {
        static $gtype: GObject.GType<XImage>;
    }

    /**
     * @gir-type Struct
     */
    class XFontStruct {
        static $gtype: GObject.GType<XFontStruct>;
    }

    /**
     * @gir-type Struct
     */
    class XTrapezoid {
        static $gtype: GObject.GType<XTrapezoid>;
    }

    /**
     * @gir-type Struct
     */
    class XVisualInfo {
        static $gtype: GObject.GType<XVisualInfo>;
    }

    /**
     * @gir-type Struct
     */
    class XWindowAttributes {
        static $gtype: GObject.GType<XWindowAttributes>;
    }

    /**
     * @gir-type Struct
     */
    class XEvent {
        static $gtype: GObject.GType<XEvent>;
    }

    /**
     * @gir-type Alias
     */
    type Atom = number;
    /**
     * @gir-type Alias
     */
    type Colormap = number;
    /**
     * @gir-type Alias
     */
    type Cursor = number;
    /**
     * @gir-type Alias
     */
    type Drawable = number;
    /**
     * @gir-type Alias
     */
    type GC = any;
    /**
     * @gir-type Alias
     */
    type KeyCode = number;
    /**
     * @gir-type Alias
     */
    type KeySym = number;
    /**
     * @gir-type Alias
     */
    type Picture = number;
    /**
     * @gir-type Alias
     */
    type Time = number;
    /**
     * @gir-type Alias
     */
    type VisualID = number;
    /**
     * @gir-type Alias
     */
    type Window = number;
    /**
     * @gir-type Alias
     */
    type XID = number;
    /**
     * @gir-type Alias
     */
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
