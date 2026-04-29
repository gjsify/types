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

export namespace xrandr {
    /**
     * xrandr-1.3
     */

    /**
     * @gir-type Struct
     */
    class ScreenSize {
        static $gtype: GObject.GType<ScreenSize>;
    }

    /**
     * @gir-type Struct
     */
    class ScreenChangeNotifyEvent {
        static $gtype: GObject.GType<ScreenChangeNotifyEvent>;
    }

    /**
     * @gir-type Struct
     */
    class NotifyEvent {
        static $gtype: GObject.GType<NotifyEvent>;
    }

    /**
     * @gir-type Struct
     */
    class ScreenResources {
        static $gtype: GObject.GType<ScreenResources>;
    }

    /**
     * @gir-type Struct
     */
    class OutputChangeNotifyEvent {
        static $gtype: GObject.GType<OutputChangeNotifyEvent>;
    }

    /**
     * @gir-type Struct
     */
    class CrtcChangeNotifyEvent {
        static $gtype: GObject.GType<CrtcChangeNotifyEvent>;
    }

    /**
     * @gir-type Struct
     */
    class OutputPropertyNotifyEvent {
        static $gtype: GObject.GType<OutputPropertyNotifyEvent>;
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

export default xrandr;

// END
