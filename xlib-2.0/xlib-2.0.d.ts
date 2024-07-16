/*
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in `ts-for-gir` or create a bug report on https://github.com/gjsify/ts-for-gir
 */

/**
 * xlib-2.0
 */

import type GObject from '@girs/gobject-2.0';

export namespace xlib {
    function open_display(): void;
    class Display {
        static $gtype: GObject.GType<Display>;

        // Constructors of xlib.Display

        _init(...args: any[]): void;
    }

    class Screen {
        static $gtype: GObject.GType<Screen>;

        // Constructors of xlib.Screen

        _init(...args: any[]): void;
    }

    class Visual {
        static $gtype: GObject.GType<Visual>;

        // Constructors of xlib.Visual

        _init(...args: any[]): void;
    }

    class XConfigureEvent {
        static $gtype: GObject.GType<XConfigureEvent>;

        // Constructors of xlib.XConfigureEvent

        _init(...args: any[]): void;
    }

    class XImage {
        static $gtype: GObject.GType<XImage>;

        // Constructors of xlib.XImage

        _init(...args: any[]): void;
    }

    class XFontStruct {
        static $gtype: GObject.GType<XFontStruct>;

        // Constructors of xlib.XFontStruct

        _init(...args: any[]): void;
    }

    class XTrapezoid {
        static $gtype: GObject.GType<XTrapezoid>;

        // Constructors of xlib.XTrapezoid

        _init(...args: any[]): void;
    }

    class XVisualInfo {
        static $gtype: GObject.GType<XVisualInfo>;

        // Constructors of xlib.XVisualInfo

        _init(...args: any[]): void;
    }

    class XWindowAttributes {
        static $gtype: GObject.GType<XWindowAttributes>;

        // Constructors of xlib.XWindowAttributes

        _init(...args: any[]): void;
    }

    class XEvent {
        static $gtype: GObject.GType<XEvent>;

        // Constructors of xlib.XEvent

        _init(...args: any[]): void;
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
