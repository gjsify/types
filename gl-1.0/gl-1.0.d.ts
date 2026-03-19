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

export namespace GL {
    /**
     * GL-1.0
     */

    function InitNames(): void;
    /**
     * @gir-type Struct
     */
    class bitfield {
        static $gtype: GObject.GType<bitfield>;
    }

    /**
     * @gir-type Struct
     */
    class charARB {
        static $gtype: GObject.GType<charARB>;
    }

    /**
     * @gir-type Struct
     */
    class clampf {
        static $gtype: GObject.GType<clampf>;
    }

    /**
     * @gir-type Struct
     */
    class __boolean {
        static $gtype: GObject.GType<__boolean>;
    }

    /**
     * @gir-type Struct
     */
    class __enum {
        static $gtype: GObject.GType<__enum>;
    }

    /**
     * @gir-type Struct
     */
    class float {
        static $gtype: GObject.GType<float>;
    }

    /**
     * @gir-type Struct
     */
    class handleARB {
        static $gtype: GObject.GType<handleARB>;
    }

    /**
     * @gir-type Struct
     */
    class int {
        static $gtype: GObject.GType<int>;
    }

    /**
     * @gir-type Struct
     */
    class intptr {
        static $gtype: GObject.GType<intptr>;
    }

    /**
     * @gir-type Struct
     */
    class sizei {
        static $gtype: GObject.GType<sizei>;
    }

    /**
     * @gir-type Struct
     */
    class sizeiptr {
        static $gtype: GObject.GType<sizeiptr>;
    }

    /**
     * @gir-type Struct
     */
    class uint {
        static $gtype: GObject.GType<uint>;
    }

    /**
     * @gir-type Struct
     */
    class __void {
        static $gtype: GObject.GType<__void>;
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

export default GL;

// END
